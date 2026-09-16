// @__NO_SIDE_EFFECTS__
function ou(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const He = {}, Pa = [], bn = () => {
}, qf = () => !1, ul = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), dl = (e) => e.startsWith("onUpdate:"), bt = Object.assign, lu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, cg = Object.prototype.hasOwnProperty, Ye = (e, t) => cg.call(e, t), Se = Array.isArray, ki = (e) => ps(e) === "[object Map]", la = (e) => ps(e) === "[object Set]", td = (e) => ps(e) === "[object Date]", Le = (e) => typeof e == "function", at = (e) => typeof e == "string", An = (e) => typeof e == "symbol", Xe = (e) => e !== null && typeof e == "object", Yf = (e) => (Xe(e) || Le(e)) && Le(e.then) && Le(e.catch), Xf = Object.prototype.toString, ps = (e) => Xf.call(e), ug = (e) => ps(e).slice(8, -1), Zf = (e) => ps(e) === "[object Object]", cu = (e) => at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pr = /* @__PURE__ */ ou(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), fl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, dg = /-\w/g, Dt = fl(
  (e) => e.replace(dg, (t) => t.slice(1).toUpperCase())
), fg = /\B([A-Z])/g, li = fl(
  (e) => e.replace(fg, "-$1").toLowerCase()
), hl = fl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Vl = fl(
  (e) => e ? `on${hl(e)}` : ""
), At = (e, t) => !Object.is(e, t), io = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Jf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, pl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, hg = (e) => {
  const t = at(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let nd;
const vl = () => nd || (nd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sn(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = at(i) ? mg(i) : sn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (at(e) || Xe(e))
    return e;
}
const pg = /;(?![^(]*\))/g, vg = /:([^]+)/, gg = /\/\*[^]*?\*\//g;
function mg(e) {
  const t = {};
  return e.replace(gg, "").split(pg).forEach((n) => {
    if (n) {
      const i = n.split(vg);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Te(e) {
  let t = "";
  if (at(e))
    t = e;
  else if (Se(e))
    for (let n = 0; n < e.length; n++) {
      const i = Te(e[n]);
      i && (t += i + " ");
    }
  else if (Xe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function lo(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !at(t) && (e.class = Te(t)), n && (e.style = sn(n)), e;
}
const bg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yg = /* @__PURE__ */ ou(bg);
function Qf(e) {
  return !!e || e === "";
}
function _g(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Li(e[i], t[i]);
  return n;
}
function id(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && Li(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Li(e, t) {
  if (e === t) return !0;
  let n = td(e), i = td(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = An(e), i = An(t), n || i)
    return e === t;
  if (n = Se(e), i = Se(t), n || i)
    return n && i ? _g(e, t) : !1;
  if (n = Xe(e), i = Xe(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = ki(e), i = ki(t), n || i || (n = la(e), i = la(t), n || i))
      return n && i ? id(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !Li(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function wg(e, t) {
  return e.findIndex((n) => Li(n, t));
}
const eh = (e) => !!(e && e.__v_isRef === !0), g = (e) => at(e) ? e : e == null ? "" : Se(e) || Xe(e) && (e.toString === Xf || !Le(e.toString)) ? eh(e) ? g(e.value) : JSON.stringify(e, th, 2) : String(e), th = (e, t) => eh(t) ? th(e, t.value) : ki(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[Gl(i, r) + " =>"] = a, n),
    {}
  )
} : la(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Gl(n))
} : An(t) ? Gl(t) : Xe(t) && !Se(t) && !Zf(t) ? String(t) : t, Gl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    An(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Sg(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Et;
class Cg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Et && (Et.active ? (this.parent = Et, this.index = (Et.scopes || (Et.scopes = [])).push(
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
      const n = Et;
      try {
        return Et = this, t();
      } finally {
        Et = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Et, Et = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Et === this)
        Et = this.prevScope;
      else {
        let t = Et;
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
function Tg() {
  return Et;
}
let it;
const Kl = /* @__PURE__ */ new WeakSet();
class nh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Et && (Et.active ? Et.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Kl.has(this) && (Kl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ah(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ad(this), rh(this);
    const t = it, n = Tn;
    it = this, Tn = !0;
    try {
      return this.fn();
    } finally {
      sh(this), it = t, Tn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        fu(t);
      this.deps = this.depsTail = void 0, ad(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Kl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Oc(this) && this.run();
  }
  get dirty() {
    return Oc(this);
  }
}
let ih = 0, $r, Dr;
function ah(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Dr, Dr = e;
    return;
  }
  e.next = $r, $r = e;
}
function uu() {
  ih++;
}
function du() {
  if (--ih > 0)
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
function rh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function sh(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), fu(i), Eg(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Oc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (oh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function oh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xr) || (e.globalVersion = Xr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Oc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = it, i = Tn;
  it = e, Tn = !0;
  try {
    rh(e);
    const a = e.fn(e._value);
    (t.version === 0 || At(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    it = n, Tn = i, sh(e), e.flags &= -3;
  }
}
function fu(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      fu(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Eg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Tn = !0;
const lh = [];
function ai() {
  lh.push(Tn), Tn = !1;
}
function ri() {
  const e = lh.pop();
  Tn = e === void 0 ? !0 : e;
}
function ad(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = it;
    it = void 0;
    try {
      t();
    } finally {
      it = n;
    }
  }
}
let Xr = 0;
class Ag {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class gl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!it || !Tn || it === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== it)
      n = this.activeLink = new Ag(it, this), it.deps ? (n.prevDep = it.depsTail, it.depsTail.nextDep = n, it.depsTail = n) : it.deps = it.depsTail = n, ch(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = it.depsTail, n.nextDep = void 0, it.depsTail.nextDep = n, it.depsTail = n, it.deps === n && (it.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Xr++, this.notify(t);
  }
  notify(t) {
    uu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      du();
    }
  }
}
function ch(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        ch(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const xc = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ Symbol(
  ""
), Nc = /* @__PURE__ */ Symbol(
  ""
), Zr = /* @__PURE__ */ Symbol(
  ""
);
function It(e, t, n) {
  if (Tn && it) {
    let i = xc.get(e);
    i || xc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new gl()), a.map = i, a.key = n), a.track();
  }
}
function Zn(e, t, n, i, a, r) {
  const s = xc.get(e);
  if (!s) {
    Xr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (uu(), t === "clear")
    s.forEach(o);
  else {
    const l = Se(e), f = l && cu(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, S) => {
        (S === "length" || S === Zr || !An(S) && S >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), f && o(s.get(Zr)), t) {
        case "add":
          l ? f && o(s.get("length")) : (o(s.get(ra)), ki(e) && o(s.get(Nc)));
          break;
        case "delete":
          l || (o(s.get(ra)), ki(e) && o(s.get(Nc)));
          break;
        case "set":
          ki(e) && o(s.get(ra));
          break;
      }
  }
  du();
}
function Aa(e) {
  const t = /* @__PURE__ */ qe(e);
  return t === e ? t : (It(t, "iterate", Zr), /* @__PURE__ */ yn(e) ? t : t.map(kn));
}
function ml(e) {
  return It(e = /* @__PURE__ */ qe(e), "iterate", Zr), e;
}
function zn(e, t) {
  return /* @__PURE__ */ si(e) ? ja(/* @__PURE__ */ sa(e) ? kn(t) : t) : kn(t);
}
const kg = {
  __proto__: null,
  [Symbol.iterator]() {
    return Wl(this, Symbol.iterator, (e) => zn(this, e));
  },
  concat(...e) {
    return Aa(this).concat(
      ...e.map((t) => Se(t) ? Aa(t) : t)
    );
  },
  entries() {
    return Wl(this, "entries", (e) => (e[1] = zn(this, e[1]), e));
  },
  every(e, t) {
    return Vn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Vn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => zn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Vn(
      this,
      "find",
      e,
      t,
      (n) => zn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Vn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Vn(
      this,
      "findLast",
      e,
      t,
      (n) => zn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Vn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Vn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ql(this, "includes", e);
  },
  indexOf(...e) {
    return ql(this, "indexOf", e);
  },
  join(e) {
    return Aa(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ql(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Vn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return br(this, "pop");
  },
  push(...e) {
    return br(this, "push", e);
  },
  reduce(e, ...t) {
    return rd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return rd(this, "reduceRight", e, t);
  },
  shift() {
    return br(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Vn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return br(this, "splice", e);
  },
  toReversed() {
    return Aa(this).toReversed();
  },
  toSorted(e) {
    return Aa(this).toSorted(e);
  },
  toSpliced(...e) {
    return Aa(this).toSpliced(...e);
  },
  unshift(...e) {
    return br(this, "unshift", e);
  },
  values() {
    return Wl(this, "values", (e) => zn(this, e));
  }
};
function Wl(e, t, n) {
  const i = ml(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ yn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Og = Array.prototype;
function Vn(e, t, n, i, a, r) {
  const s = ml(e), o = s !== e && !/* @__PURE__ */ yn(e), l = s[t];
  if (l !== Og[t]) {
    const h = l.apply(e, r);
    return o ? kn(h) : h;
  }
  let f = n;
  s !== e && (o ? f = function(h, S) {
    return n.call(this, zn(e, h), S, e);
  } : n.length > 2 && (f = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const u = l.call(s, f, i);
  return o && a ? a(u) : u;
}
function rd(e, t, n, i) {
  const a = ml(e), r = a !== e && !/* @__PURE__ */ yn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(f, u, h) {
    return o && (o = !1, f = zn(e, f)), n.call(this, f, zn(e, u), h, e);
  }) : n.length > 3 && (s = function(f, u, h) {
    return n.call(this, f, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? zn(e, l) : l;
}
function ql(e, t, n) {
  const i = /* @__PURE__ */ qe(e);
  It(i, "iterate", Zr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ vu(n[0]) ? (n[0] = /* @__PURE__ */ qe(n[0]), i[t](...n)) : a;
}
function br(e, t, n = []) {
  ai(), uu();
  const i = (/* @__PURE__ */ qe(e))[t].apply(e, n);
  return du(), ri(), i;
}
const xg = /* @__PURE__ */ ou("__proto__,__v_isRef,__isVue"), uh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(An)
);
function Ng(e) {
  An(e) || (e = String(e));
  const t = /* @__PURE__ */ qe(this);
  return It(t, "has", e), t.hasOwnProperty(e);
}
class dh {
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
      return i === (a ? r ? Ug : vh : r ? ph : hh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = Se(t);
    if (!a) {
      let l;
      if (s && (l = kg[n]))
        return l;
      if (n === "hasOwnProperty")
        return Ng;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Mt(t) ? t : i
    );
    if ((An(n) ? uh.has(n) : xg(n)) || (a || It(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ Mt(o)) {
      const l = s && cu(n) ? o : o.value;
      return a && Xe(l) ? /* @__PURE__ */ Jr(l) : l;
    }
    return Xe(o) ? a ? /* @__PURE__ */ Jr(o) : /* @__PURE__ */ Rt(o) : o;
  }
}
class fh extends dh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = Se(t) && cu(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ si(r);
      if (!/* @__PURE__ */ yn(i) && !/* @__PURE__ */ si(i) && (r = /* @__PURE__ */ qe(r), i = /* @__PURE__ */ qe(i)), !s && /* @__PURE__ */ Mt(r) && !/* @__PURE__ */ Mt(i))
        return f || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ye(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Mt(t) ? t : a
    );
    return t === /* @__PURE__ */ qe(a) && l && (o ? At(i, r) && Zn(t, "set", n, i) : Zn(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ye(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && Zn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!An(n) || !uh.has(n)) && It(t, "has", n), i;
  }
  ownKeys(t) {
    return It(
      t,
      "iterate",
      Se(t) ? "length" : ra
    ), Reflect.ownKeys(t);
  }
}
class Lg extends dh {
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
const Rg = /* @__PURE__ */ new fh(), Ig = /* @__PURE__ */ new Lg(), Pg = /* @__PURE__ */ new fh(!0);
const Lc = (e) => e, Hs = (e) => Reflect.getPrototypeOf(e);
function $g(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ qe(a), s = ki(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, f = a[e](...i), u = n ? Lc : t ? ja : kn;
    return !t && It(
      r,
      "iterate",
      l ? Nc : ra
    ), bt(
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
function Vs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Dg(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ qe(r), o = /* @__PURE__ */ qe(a);
      e || (At(a, o) && It(s, "get", a), It(s, "get", o));
      const { has: l } = Hs(s), f = t ? Lc : e ? ja : kn;
      if (l.call(s, a))
        return f(r.get(a));
      if (l.call(s, o))
        return f(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && It(/* @__PURE__ */ qe(a), "iterate", ra), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ qe(r), o = /* @__PURE__ */ qe(a);
      return e || (At(a, o) && It(s, "has", a), It(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ qe(o), f = t ? Lc : e ? ja : kn;
      return !e && It(l, "iterate", ra), o.forEach((u, h) => a.call(r, f(u), f(h), s));
    }
  };
  return bt(
    n,
    e ? {
      add: Vs("add"),
      set: Vs("set"),
      delete: Vs("delete"),
      clear: Vs("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ qe(this), s = Hs(r), o = /* @__PURE__ */ qe(a), l = !t && !/* @__PURE__ */ yn(a) && !/* @__PURE__ */ si(a) ? o : a;
        return s.has.call(r, l) || At(a, l) && s.has.call(r, a) || At(o, l) && s.has.call(r, o) || (r.add(l), Zn(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ yn(r) && !/* @__PURE__ */ si(r) && (r = /* @__PURE__ */ qe(r));
        const s = /* @__PURE__ */ qe(this), { has: o, get: l } = Hs(s);
        let f = o.call(s, a);
        f || (a = /* @__PURE__ */ qe(a), f = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), f ? At(r, u) && Zn(s, "set", a, r) : Zn(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ qe(this), { has: s, get: o } = Hs(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ qe(a), l = s.call(r, a)), o && o.call(r, a);
        const f = r.delete(a);
        return l && Zn(r, "delete", a, void 0), f;
      },
      clear() {
        const a = /* @__PURE__ */ qe(this), r = a.size !== 0, s = a.clear();
        return r && Zn(
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
    n[a] = $g(a, e, t);
  }), n;
}
function hu(e, t) {
  const n = Dg(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ye(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Mg = {
  get: /* @__PURE__ */ hu(!1, !1)
}, Fg = {
  get: /* @__PURE__ */ hu(!1, !0)
}, zg = {
  get: /* @__PURE__ */ hu(!0, !1)
};
const hh = /* @__PURE__ */ new WeakMap(), ph = /* @__PURE__ */ new WeakMap(), vh = /* @__PURE__ */ new WeakMap(), Ug = /* @__PURE__ */ new WeakMap();
function Bg(e) {
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
function Rt(e) {
  return /* @__PURE__ */ si(e) ? e : pu(
    e,
    !1,
    Rg,
    Mg,
    hh
  );
}
// @__NO_SIDE_EFFECTS__
function jg(e) {
  return pu(
    e,
    !1,
    Pg,
    Fg,
    ph
  );
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  return pu(
    e,
    !0,
    Ig,
    zg,
    vh
  );
}
function pu(e, t, n, i, a) {
  if (!Xe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Bg(ug(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function sa(e) {
  return /* @__PURE__ */ si(e) ? /* @__PURE__ */ sa(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function si(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function vu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ qe(t) : e;
}
function Hg(e) {
  return !Ye(e, "__v_skip") && Object.isExtensible(e) && Jf(e, "__v_skip", !0), e;
}
const kn = (e) => Xe(e) ? /* @__PURE__ */ Rt(e) : e, ja = (e) => Xe(e) ? /* @__PURE__ */ Jr(e) : e;
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return mh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function gh(e) {
  return mh(e, !0);
}
function mh(e, t) {
  return /* @__PURE__ */ Mt(e) ? e : new Vg(e, t);
}
class Vg {
  constructor(t, n) {
    this.dep = new gl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ qe(t), this._value = n ? t : kn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ yn(t) || /* @__PURE__ */ si(t);
    t = i ? t : /* @__PURE__ */ qe(t), At(t, n) && (this._rawValue = t, this._value = i ? t : kn(t), this.dep.trigger());
  }
}
function b(e) {
  return /* @__PURE__ */ Mt(e) ? e.value : e;
}
function ti(e) {
  return Le(e) ? e() : b(e);
}
const Gg = {
  get: (e, t, n) => t === "__v_raw" ? e : b(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Mt(a) && !/* @__PURE__ */ Mt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function bh(e) {
  return /* @__PURE__ */ sa(e) ? e : new Proxy(e, Gg);
}
class Kg {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new gl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Wg(e) {
  return new Kg(e);
}
class qg {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new gl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    it !== this)
      return ah(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return oh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Yg(e, t, n = !1) {
  let i, a;
  return Le(e) ? i = e : (i = e.get, a = e.set), new qg(i, a, n);
}
const Gs = {}, co = /* @__PURE__ */ new WeakMap();
let Xi;
function Xg(e, t = !1, n = Xi) {
  if (n) {
    let i = co.get(n);
    i || co.set(n, i = []), i.push(e);
  }
}
function Zg(e, t, n = He) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, f = (I) => a ? I : /* @__PURE__ */ yn(I) || a === !1 || a === 0 ? Jn(I, 1) : Jn(I);
  let u, h, S, E, x = !1, A = !1;
  if (/* @__PURE__ */ Mt(e) ? (h = () => e.value, x = /* @__PURE__ */ yn(e)) : /* @__PURE__ */ sa(e) ? (h = () => f(e), x = !0) : Se(e) ? (A = !0, x = e.some((I) => /* @__PURE__ */ sa(I) || /* @__PURE__ */ yn(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ Mt(I))
      return I.value;
    if (/* @__PURE__ */ sa(I))
      return f(I);
    if (Le(I))
      return l ? l(I, 2) : I();
  })) : Le(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (S) {
      ai();
      try {
        S();
      } finally {
        ri();
      }
    }
    const I = Xi;
    Xi = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      Xi = I;
    }
  } : h = bn, t && a) {
    const I = h, P = a === !0 ? 1 / 0 : a;
    h = () => Jn(I(), P);
  }
  const O = Tg(), D = () => {
    u.stop(), O && O.active && lu(O.effects, u);
  };
  if (r && t) {
    const I = t;
    t = (...P) => {
      const ce = I(...P);
      return D(), ce;
    };
  }
  let F = A ? new Array(e.length).fill(Gs) : Gs;
  const W = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const P = u.run();
        if (I || a || x || (A ? P.some((ce, J) => At(ce, F[J])) : At(P, F))) {
          S && S();
          const ce = Xi;
          Xi = u;
          try {
            const J = [
              P,
              // pass undefined as the old value when it's changed for the first time
              F === Gs ? void 0 : A && F[0] === Gs ? [] : F,
              E
            ];
            F = P, l ? l(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            Xi = ce;
          }
        }
      } else
        u.run();
  };
  return o && o(W), u = new nh(h), u.scheduler = s ? () => s(W, !1) : W, E = (I) => Xg(I, !1, u), S = u.onStop = () => {
    const I = co.get(u);
    if (I) {
      if (l)
        l(I, 4);
      else
        for (const P of I) P();
      co.delete(u);
    }
  }, t ? i ? W(!0) : F = u.run() : s ? s(W.bind(null, !0), !0) : u.run(), D.pause = u.pause.bind(u), D.resume = u.resume.bind(u), D.stop = D, D;
}
function Jn(e, t = 1 / 0, n) {
  if (t <= 0 || !Xe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Mt(e))
    Jn(e.value, t, n);
  else if (Se(e))
    for (let i = 0; i < e.length; i++)
      Jn(e[i], t, n);
  else if (la(e) || ki(e))
    e.forEach((i) => {
      Jn(i, t, n);
    });
  else if (Zf(e)) {
    for (const i in e)
      Jn(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Jn(e[i], t, n);
  }
  return e;
}
function vs(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    bl(a, t, n);
  }
}
function _n(e, t, n, i) {
  if (Le(e)) {
    const a = vs(e, t, n, i);
    return a && Yf(a) && a.catch((r) => {
      bl(r, t, n);
    }), a;
  }
  if (Se(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(_n(e[r], t, n, i));
    return a;
  }
}
function bl(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || He;
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
      ai(), vs(r, null, 10, [
        e,
        l,
        f
      ]), ri();
      return;
    }
  }
  Jg(e, n, a, i, s);
}
function Jg(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Ht = [];
let $n = -1;
const $a = [];
let Ei = null, La = 0;
const yh = /* @__PURE__ */ Promise.resolve();
let uo = null;
function nn(e) {
  const t = uo || yh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qg(e) {
  let t = $n + 1, n = Ht.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Ht[i], r = Qr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function gu(e) {
  if (!(e.flags & 1)) {
    const t = Qr(e), n = Ht[Ht.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qr(n) ? Ht.push(e) : Ht.splice(Qg(t), 0, e), e.flags |= 1, _h();
  }
}
function _h() {
  uo || (uo = yh.then(Ch));
}
function wh(e) {
  if (!Se(e))
    Ei && e.id === -1 ? Ei.splice(La + 1, 0, e) : e.flags & 1 || ($a.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      $a.push(e[t]);
  _h();
}
function sd(e, t, n = $n + 1) {
  for (; n < Ht.length; n++) {
    const i = Ht[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Ht.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Sh(e) {
  if ($a.length) {
    const t = [...new Set($a)].sort(
      (n, i) => Qr(n) - Qr(i)
    );
    if ($a.length = 0, Ei) {
      for (let n = 0; n < t.length; n++)
        Ei.push(t[n]);
      return;
    }
    for (Ei = t, La = 0; La < Ei.length; La++) {
      const n = Ei[La];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ei = null, La = 0;
  }
}
const Qr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ch(e) {
  try {
    for ($n = 0; $n < Ht.length; $n++) {
      const t = Ht[$n];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), vs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $n < Ht.length; $n++) {
      const t = Ht[$n];
      t && (t.flags &= -2);
    }
    $n = -1, Ht.length = 0, Sh(), uo = null, (Ht.length || $a.length) && Ch();
  }
}
let Ot = null, yl = null;
function fo(e) {
  const t = Ot;
  return Ot = e, yl = e && e.type.__scopeId || null, t;
}
function em(e) {
  yl = e;
}
function tm() {
  yl = null;
}
const nm = (e) => ke;
function ke(e, t = Ot, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && mo(-1);
    const r = fo(t), s = ni.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = ni.length; l > s; l--) Cu();
      fo(r), i._d && mo(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function We(e, t) {
  if (Ot === null)
    return e;
  const n = El(Ot), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = He] = t[a];
    r && (Le(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Jn(s), i.push({
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
function Vi(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (ai(), _n(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), ri());
  }
}
function vn(e, t) {
  if ($t) {
    let n = $t.provides;
    const i = $t.parent && $t.parent.provides;
    i === n && (n = $t.provides = Object.create(i)), n[e] = t;
  }
}
function Pt(e, t, n = !1) {
  const i = ua();
  if (i || Ma) {
    let a = Ma ? Ma._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Le(t) ? t.call(i && i.proxy) : t;
  }
}
const im = /* @__PURE__ */ Symbol.for("v-scx"), am = () => Pt(im);
function rm(e, t) {
  return _l(e, null, t);
}
function sm(e, t) {
  return _l(
    e,
    null,
    { flush: "sync" }
  );
}
function et(e, t, n) {
  return _l(e, t, n);
}
function _l(e, t, n = He) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = bt({}, n), l = t && i || !t && r !== "post";
  let f;
  if (rs) {
    if (r === "sync") {
      const E = am();
      f = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = bn, E.resume = bn, E.pause = bn, E;
    }
  }
  const u = $t;
  o.call = (E, x, A) => _n(E, u, x, A);
  let h = !1;
  r === "post" ? o.scheduler = (E) => {
    jt(E, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (E, x) => {
    x ? E() : gu(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const S = Zg(e, t, o);
  return rs && (f ? f.push(S) : l && S()), S;
}
function om(e, t, n) {
  const i = this.proxy, a = at(e) ? e.includes(".") ? Th(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Le(t) ? r = t : (r = t.handler, n = t);
  const s = bs(this), o = _l(a, r.bind(i), n);
  return s(), o;
}
function Th(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Si = /* @__PURE__ */ new WeakMap(), Eh = /* @__PURE__ */ Symbol("_vte"), wl = (e) => e.__isTeleport, Ji = (e) => e && (e.disabled || e.disabled === ""), lm = (e) => e && (e.defer || e.defer === ""), od = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ld = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Rc = (e, t) => {
  const n = e && e.to;
  return at(n) ? t ? t(n) : null : n;
}, cm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, f) {
    const {
      mc: u,
      pc: h,
      pbc: S,
      o: { insert: E, querySelector: x, createText: A, createComment: O, parentNode: D }
    } = f, F = Ji(t.props);
    let { dynamicChildren: W } = t;
    const I = (J, fe, Y) => {
      J.shapeFlag & 16 && u(
        J.children,
        fe,
        Y,
        a,
        r,
        s,
        o,
        l
      );
    }, P = (J = t) => {
      const fe = Ji(J.props), Y = J.target = Rc(J.props, x), le = Ic(Y, J, A, E);
      Y && (s !== "svg" && od(Y) ? s = "svg" : s !== "mathml" && ld(Y) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Y), fe || (I(J, Y, le), Or(J, !1)));
    }, ce = (J) => {
      const fe = () => {
        if (Si.get(J) === fe) {
          if (Si.delete(J), Ji(J.props)) {
            const Y = D(J.el) || n;
            I(J, Y, J.anchor), Or(J, !0);
          }
          P(J);
        }
      };
      Si.set(J, fe), jt(fe, r);
    };
    if (e == null) {
      const J = t.el = A(""), fe = t.anchor = A("");
      if (E(J, n, i), E(fe, n, i), lm(t.props) || r && r.pendingBranch) {
        ce(t);
        return;
      }
      F && (I(t, n, fe), Or(t, !0)), P();
    } else {
      t.el = e.el;
      const J = t.anchor = e.anchor, fe = Si.get(e);
      if (fe) {
        fe.flags |= 8, Si.delete(e), ce(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Y = t.target = e.target, le = t.targetAnchor = e.targetAnchor, be = Ji(e.props), Q = be ? n : Y, ie = be ? J : le;
      if (s === "svg" || od(Y) ? s = "svg" : (s === "mathml" || ld(Y)) && (s = "mathml"), W ? (S(
        e.dynamicChildren,
        W,
        Q,
        a,
        r,
        s,
        o
      ), Su(e, t, !0)) : l || h(
        e,
        t,
        Q,
        ie,
        a,
        r,
        s,
        o,
        !1
      ), F)
        be ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ks(
          t,
          n,
          J,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = Rc(t.props, x);
        $ && (t.target = $, Ks(
          t,
          $,
          null,
          f,
          0
        ));
      } else be && Ks(
        t,
        Y,
        le,
        f,
        1
      );
      Or(t, F);
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
    } = e, E = Ji(S), x = r || !E, A = Si.get(e);
    if (A && (A.flags |= 8, Si.delete(e)), h && (a(f), a(u)), r && a(l), !A && (E || h) && s & 16)
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
  move: Ks,
  hydrate: um
};
function Ks(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: f, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !Si.has(e) && (!h || Ji(u)) && l & 16)
    for (let S = 0; S < f.length; S++)
      a(
        f[S],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function um(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: f, createText: u }
}, h) {
  function S(O, D) {
    let F = D;
    for (; F; ) {
      if (F && F.nodeType === 8) {
        if (F.data === "teleport start anchor")
          t.targetStart = F;
        else if (F.data === "teleport anchor") {
          t.targetAnchor = F, O._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      F = s(F);
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
  const x = t.target = Rc(
    t.props,
    l
  ), A = Ji(t.props);
  if (x) {
    const O = x._lpa || x.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), S(x, O), t.targetAnchor || Ic(
      x,
      t,
      u,
      f,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === x ? e : null
    )) : (t.anchor = s(e), S(x, O), t.targetAnchor || Ic(x, t, u, f), h(
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
const Ah = cm;
function Or(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function Ic(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Eh] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const gn = /* @__PURE__ */ Symbol("_leaveCb"), yr = /* @__PURE__ */ Symbol("_enterCb");
function dm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Pi(() => {
    e.isMounted = !0;
  }), Ha(() => {
    e.isUnmounting = !0;
  }), e;
}
const fn = [Function, Array], kh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: fn,
  onEnter: fn,
  onAfterEnter: fn,
  onEnterCancelled: fn,
  // leave
  onBeforeLeave: fn,
  onLeave: fn,
  onAfterLeave: fn,
  onLeaveCancelled: fn,
  // appear
  onBeforeAppear: fn,
  onAppear: fn,
  onAfterAppear: fn,
  onAppearCancelled: fn
}, Oh = (e) => {
  const t = e.subTree;
  return t.component ? Oh(t.component) : t;
}, fm = {
  name: "BaseTransition",
  props: kh,
  setup(e, { slots: t }) {
    const n = ua(), i = dm();
    return () => {
      const a = t.default && Lh(t.default(), !0), r = a && a.length ? xh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? j() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ qe(e), { mode: o } = s;
      if (i.isLeaving)
        return Yl(r);
      const l = ho(r);
      if (!l)
        return Yl(r);
      let f = Pc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      l.type !== kt && es(l, f);
      let u = n.subTree && ho(n.subTree);
      if (u && u.type !== kt && !Qi(u, l) && Oh(n).type !== kt) {
        let h = Pc(
          u,
          s,
          i,
          n
        );
        if (es(u, h), o === "out-in" && l.type !== kt)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Yl(r);
        o === "in-out" && l.type !== kt ? h.delayLeave = (S, E, x) => {
          const A = Nh(
            i,
            u
          );
          A[String(u.key)] = u, S[gn] = () => {
            E(), S[gn] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            x(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function xh(e) {
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
const hm = fm;
function Nh(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Pc(e, t, n, i, a) {
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
    onAfterAppear: F,
    onAppearCancelled: W
  } = t, I = String(e.key), P = Nh(n, e), ce = (Y, le) => {
    Y && _n(
      Y,
      i,
      9,
      le
    );
  }, J = (Y, le) => {
    const be = le[1];
    ce(Y, le), Se(Y) ? Y.every((Q) => Q.length <= 1) && be() : Y.length <= 1 && be();
  }, fe = {
    mode: s,
    persisted: o,
    beforeEnter(Y) {
      let le = l;
      if (!n.isMounted)
        if (r)
          le = O || l;
        else
          return;
      Y[gn] && Y[gn](
        !0
        /* cancelled */
      );
      const be = P[I];
      be && Qi(e, be) && be.el[gn] && be.el[gn](), ce(le, [Y]);
    },
    enter(Y) {
      if (P[I] === e) return;
      let le = f, be = u, Q = h;
      if (!n.isMounted)
        if (r)
          le = D || f, be = F || u, Q = W || h;
        else
          return;
      let ie = !1;
      Y[yr] = (z) => {
        ie || (ie = !0, z ? ce(Q, [Y]) : ce(be, [Y]), fe.delayedLeave && fe.delayedLeave(), Y[yr] = void 0);
      };
      const $ = Y[yr].bind(null, !1);
      le ? J(le, [Y, $]) : $();
    },
    leave(Y, le) {
      const be = String(e.key);
      if (Y[yr] && Y[yr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return le();
      ce(S, [Y]);
      let Q = !1;
      Y[gn] = ($) => {
        Q || (Q = !0, le(), $ ? ce(A, [Y]) : ce(x, [Y]), Y[gn] = void 0, P[be] === e && delete P[be]);
      };
      const ie = Y[gn].bind(null, !1);
      P[be] = e, E ? J(E, [Y, ie]) : ie();
    },
    clone(Y) {
      const le = Pc(
        Y,
        t,
        n,
        i,
        a
      );
      return a && a(le), le;
    }
  };
  return fe;
}
function Yl(e) {
  if (Sl(e))
    return e = Ri(e), e.children = null, e;
}
function ho(e) {
  if (!Sl(e))
    return wl(e.type) && e.children ? xh(e.children) : e;
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
      wl(n.type) && ho(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Lh(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === de ? (s.patchFlag & 128 && a++, i = i.concat(
      Lh(s.children, t, o)
    )) : (t || s.type !== kt) && i.push(o != null ? Ri(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function xt(e, t) {
  return Le(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    bt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Rh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function pm(e) {
  const t = ua(), n = /* @__PURE__ */ gh(null);
  if (t) {
    const a = t.refs === He ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function cd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const po = /* @__PURE__ */ new WeakMap();
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
  if (Da(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Mr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? El(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, f = t && t.r, u = o.refs === He ? o.refs = {} : o.refs, h = o.setupState, S = /* @__PURE__ */ qe(h), E = h === He ? qf : (A) => cd(u, A) ? !1 : Ye(S, A), x = (A, O) => !(O && cd(u, O));
  if (f != null && f !== l) {
    if (ud(t), at(f))
      u[f] = null, E(f) && (h[f] = null);
    else if (/* @__PURE__ */ Mt(f)) {
      const A = t;
      x(f, A.k) && (f.value = null), A.k && (u[A.k] = null);
    }
  }
  if (Le(l))
    vs(l, o, 12, [s, u]);
  else {
    const A = at(l), O = /* @__PURE__ */ Mt(l);
    if (A || O) {
      const D = () => {
        if (e.f) {
          const F = A ? E(l) ? h[l] : u[l] : x() || !e.k ? l.value : u[e.k];
          if (a)
            Se(F) && lu(F, r);
          else if (Se(F))
            F.includes(r) || F.push(r);
          else if (A)
            u[l] = [r], E(l) && (h[l] = u[l]);
          else {
            const W = [r];
            x(l, e.k) && (l.value = W), e.k && (u[e.k] = W);
          }
        } else A ? (u[l] = s, E(l) && (h[l] = s)) : O && (x(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const F = () => {
          D(), po.delete(e);
        };
        F.id = -1, po.set(e, F), jt(F, n);
      } else
        ud(e), D();
    }
  }
}
function ud(e) {
  const t = po.get(e);
  t && (t.flags |= 8, po.delete(e));
}
vl().requestIdleCallback;
vl().cancelIdleCallback;
const Da = (e) => !!e.type.__asyncLoader, Sl = (e) => e.type.__isKeepAlive;
function vm(e, t) {
  Ih(e, "a", t);
}
function gm(e, t) {
  Ih(e, "da", t);
}
function Ih(e, t, n = $t) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Cl(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Sl(a.parent.vnode) && mm(i, t, n, a), a = a.parent;
  }
}
function mm(e, t, n, i) {
  const a = Cl(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  gs(() => {
    lu(i[t], a);
  }, n);
}
function Cl(e, t, n = $t, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      ai();
      const o = bs(n), l = _n(t, n, e, s);
      return o(), ri(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const ci = (e) => (t, n = $t) => {
  (!rs || e === "sp") && Cl(e, (...i) => t(...i), n);
}, Ph = ci("bm"), Pi = ci("m"), $h = ci(
  "bu"
), bm = ci("u"), Ha = ci(
  "bum"
), gs = ci("um"), ym = ci(
  "sp"
), _m = ci("rtg"), wm = ci("rtc");
function Sm(e, t = $t) {
  Cl("ec", e, t);
}
const mu = "components", Cm = "directives";
function Ue(e, t) {
  return yu(mu, e, !0, t) || e;
}
const Dh = /* @__PURE__ */ Symbol.for("v-ndc");
function bu(e) {
  return at(e) ? yu(mu, e, !1) || e : e || Dh;
}
function dd(e) {
  return yu(Cm, e);
}
function yu(e, t, n = !0, i = !1) {
  const a = Ot || $t;
  if (a) {
    const r = a.type;
    if (e === mu) {
      const o = rb(
        r,
        !1
      );
      if (o && (o === t || o === Dt(t) || o === hl(Dt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      fd(a[e] || r[e], t) || // global registration
      fd(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function fd(e, t) {
  return e && (e[t] || e[Dt(t)] || e[hl(Dt(t))]);
}
function Me(e, t, n, i) {
  let a;
  const r = n, s = Se(e);
  if (s || at(e)) {
    const o = s && /* @__PURE__ */ sa(e);
    let l = !1, f = !1;
    o && (l = !/* @__PURE__ */ yn(e), f = /* @__PURE__ */ si(e), e = ml(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? f ? ja(kn(e[u])) : kn(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (Xe(e))
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
function Ie(e, t, n, i, a, r) {
  if (n == null && (n = {}), Ot.ce || Ot.parent && Da(Ot.parent) && Ot.parent.ce) {
    const f = n, u = Object.keys(f).length > 0;
    return t !== "default" && (f.name = t), w(), Fe(
      de,
      null,
      [_e("slot", f, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = ni.length;
  w();
  let l;
  try {
    const f = s && Mh(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    f && f.key;
    l = Fe(
      de,
      {
        key: (u && !An(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!f && i ? "_fb" : "")
      },
      f || (i ? i() : []),
      f && e._ === 1 ? 64 : -2
    );
  } catch (f) {
    for (let u = ni.length; u > o; u--) Cu();
    throw f;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Mh(e) {
  return e.some((t) => ns(t) ? !(t.type === kt || t.type === de && !Mh(t.children)) : !0) ? e : null;
}
const $c = (e) => e ? rp(e) ? El(e) : $c(e.parent) : null, Fr = (
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
    $parent: (e) => $c(e.parent),
    $root: (e) => $c(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Uh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      gu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = nn.bind(e.proxy)),
    $watch: (e) => om.bind(e)
  })
), Xl = (e, t) => e !== He && !e.__isScriptSetup && Ye(e, t), Tm = {
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
        if (Xl(i, t))
          return s[t] = 1, i[t];
        if (a !== He && Ye(a, t))
          return s[t] = 2, a[t];
        if (Ye(r, t))
          return s[t] = 3, r[t];
        if (n !== He && Ye(n, t))
          return s[t] = 4, n[t];
        Dc && (s[t] = 0);
      }
    }
    const f = Fr[t];
    let u, h;
    if (f)
      return t === "$attrs" && It(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== He && Ye(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Ye(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return Xl(a, t) ? (a[t] = n, !0) : i !== He && Ye(i, t) ? (i[t] = n, !0) : Ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== He && o[0] !== "$" && Ye(e, o) || Xl(t, o) || Ye(r, o) || Ye(i, o) || Ye(Fr, o) || Ye(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Em() {
  return Fh().slots;
}
function Am() {
  return Fh().attrs;
}
function Fh(e) {
  const t = ua();
  return t.setupContext || (t.setupContext = op(t));
}
function vo(e) {
  return Se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function km(e, t) {
  return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : bt({}, vo(e), vo(t));
}
let Dc = !0;
function Om(e) {
  const t = Uh(e), n = e.proxy, i = e.ctx;
  Dc = !1, t.beforeCreate && hd(t.beforeCreate, e, "bc");
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
    beforeUnmount: F,
    destroyed: W,
    unmounted: I,
    render: P,
    renderTracked: ce,
    renderTriggered: J,
    errorCaptured: fe,
    serverPrefetch: Y,
    // public API
    expose: le,
    inheritAttrs: be,
    // assets
    components: Q,
    directives: ie,
    filters: $
  } = t;
  if (f && xm(f, i, null), s)
    for (const oe in s) {
      const ne = s[oe];
      Le(ne) && (i[oe] = ne.bind(n));
    }
  if (a) {
    const oe = a.call(n, n);
    Xe(oe) && (e.data = /* @__PURE__ */ Rt(oe));
  }
  if (Dc = !0, r)
    for (const oe in r) {
      const ne = r[oe], pe = Le(ne) ? ne.bind(n, n) : Le(ne.get) ? ne.get.bind(n, n) : bn, ve = !Le(ne) && Le(ne.set) ? ne.set.bind(n) : bn, we = K({
        get: pe,
        set: ve
      });
      Object.defineProperty(i, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (ye) => we.value = ye
      });
    }
  if (o)
    for (const oe in o)
      zh(o[oe], i, n, oe);
  if (l) {
    const oe = Le(l) ? l.call(n) : l;
    Reflect.ownKeys(oe).forEach((ne) => {
      vn(ne, oe[ne]);
    });
  }
  u && hd(u, e, "c");
  function X(oe, ne) {
    Se(ne) ? ne.forEach((pe) => oe(pe.bind(n))) : ne && oe(ne.bind(n));
  }
  if (X(Ph, h), X(Pi, S), X($h, E), X(bm, x), X(vm, A), X(gm, O), X(Sm, fe), X(wm, ce), X(_m, J), X(Ha, F), X(gs, I), X(ym, Y), Se(le))
    if (le.length) {
      const oe = e.exposed || (e.exposed = {});
      le.forEach((ne) => {
        Object.defineProperty(oe, ne, {
          get: () => n[ne],
          set: (pe) => n[ne] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === bn && (e.render = P), be != null && (e.inheritAttrs = be), Q && (e.components = Q), ie && (e.directives = ie), Y && Rh(e);
}
function xm(e, t, n = bn) {
  Se(e) && (e = Mc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Xe(a) ? "default" in a ? r = Pt(
      a.from || i,
      a.default,
      !0
    ) : r = Pt(a.from || i) : r = Pt(a), /* @__PURE__ */ Mt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function hd(e, t, n) {
  _n(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zh(e, t, n, i) {
  let a = i.includes(".") ? Th(n, i) : () => n[i];
  if (at(e)) {
    const r = t[e];
    Le(r) && et(a, r);
  } else if (Le(e))
    et(a, e.bind(n));
  else if (Xe(e))
    if (Se(e))
      e.forEach((r) => zh(r, t, n, i));
    else {
      const r = Le(e.handler) ? e.handler.bind(n) : t[e.handler];
      Le(r) && et(a, r, e);
    }
}
function Uh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (f) => go(l, f, s, !0)
  ), go(l, t, s)), Xe(t) && r.set(t, l), l;
}
function go(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && go(e, r, n, !0), a && a.forEach(
    (s) => go(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = Nm[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const Nm = {
  data: pd,
  props: vd,
  emits: vd,
  // objects
  methods: xr,
  computed: xr,
  // lifecycle
  beforeCreate: Bt,
  created: Bt,
  beforeMount: Bt,
  mounted: Bt,
  beforeUpdate: Bt,
  updated: Bt,
  beforeDestroy: Bt,
  beforeUnmount: Bt,
  destroyed: Bt,
  unmounted: Bt,
  activated: Bt,
  deactivated: Bt,
  errorCaptured: Bt,
  serverPrefetch: Bt,
  // assets
  components: xr,
  directives: xr,
  // watch
  watch: Rm,
  // provide / inject
  provide: pd,
  inject: Lm
};
function pd(e, t) {
  return t ? e ? function() {
    return bt(
      Le(e) ? e.call(this, this) : e,
      Le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Lm(e, t) {
  return xr(Mc(e), Mc(t));
}
function Mc(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Bt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function xr(e, t) {
  return e ? bt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vd(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : bt(
    /* @__PURE__ */ Object.create(null),
    vo(e),
    vo(t ?? {})
  ) : t;
}
function Rm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = bt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Bt(e[i], t[i]);
  return n;
}
function Bh() {
  return {
    app: null,
    config: {
      isNativeTag: qf,
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
let Im = 0;
function Pm(e, t) {
  return function(i, a = null) {
    Le(i) || (i = bt({}, i)), a != null && !Xe(a) && (a = null);
    const r = Bh(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const f = r.app = {
      _uid: Im++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: ob,
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
          const E = f._ceVNode || _e(i, a);
          return E.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(E, u, S), l = !0, f._container = u, u.__vue_app__ = f, El(E.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (_n(
          o,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, f;
      },
      runWithContext(u) {
        const h = Ma;
        Ma = f;
        try {
          return u();
        } finally {
          Ma = h;
        }
      }
    };
    return f;
  };
}
let Ma = null;
function jh(e, t, n = He) {
  const i = ua(), a = Dt(t), r = li(t), s = Hh(e, a), o = Wg((l, f) => {
    let u, h = He, S;
    return sm(() => {
      const E = e[a];
      At(u, E) && (u = E, f());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const x = n.set ? n.set(E) : E;
        if (!At(x, u) && !(h !== He && At(E, h)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (u = E, f()), i.emit(`update:${t}`, x), At(E, h) && (At(E, x) && !At(x, S) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && h !== He && !At(x, u)) && f(), h = E, S = x;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || He : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const Hh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Dt(t)}Modifiers`] || e[`${li(t)}Modifiers`];
function $m(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || He;
  let a = n;
  const r = t.startsWith("update:"), s = r && Hh(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => at(u) ? u.trim() : u)), s.number && (a = a.map(pl)));
  let o, l = i[o = Vl(t)] || // also try camelCase event handler (#2249)
  i[o = Vl(Dt(t))];
  !l && r && (l = i[o = Vl(li(t))]), l && _n(
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
    e.emitted[o] = !0, _n(
      f,
      e,
      6,
      a
    );
  }
}
const Dm = /* @__PURE__ */ new WeakMap();
function Vh(e, t, n = !1) {
  const i = n ? Dm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!Le(e)) {
    const l = (f) => {
      const u = Vh(f, t, !0);
      u && (o = !0, bt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Xe(e) && i.set(e, null), null) : (Se(r) ? r.forEach((l) => s[l] = null) : bt(s, r), Xe(e) && i.set(e, s), s);
}
function Tl(e, t) {
  return !e || !ul(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ye(e, t[0].toLowerCase() + t.slice(1)) || Ye(e, li(t)) || Ye(e, t));
}
function gd(e) {
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
  } = e, O = fo(e);
  let D, F;
  try {
    if (n.shapeFlag & 4) {
      const I = a || i, P = I;
      D = Un(
        f.call(
          P,
          I,
          u,
          h,
          E,
          S,
          x
        )
      ), F = o;
    } else {
      const I = t;
      D = Un(
        I.length > 1 ? I(
          h,
          { attrs: o, slots: s, emit: l }
        ) : I(
          h,
          null
        )
      ), F = t.props ? o : Mm(o);
    }
  } catch (I) {
    ni.length = 0, bl(I, e, 1), D = _e(kt);
  }
  let W = D;
  if (F && A !== !1) {
    const I = Object.keys(F), { shapeFlag: P } = W;
    I.length && P & 7 && (r && I.some(dl) && (F = Fm(
      F,
      r
    )), W = Ri(W, F, !1, !0));
  }
  if (n.dirs && (W = Ri(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = wl(W.type) && ho(W) || W;
    es(I, n.transition);
  }
  return D = W, fo(O), D;
}
const Mm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ul(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fm = (e, t) => {
  const n = {};
  for (const i in e)
    (!dl(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function zm(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? md(i, s, f) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const S = u[h];
        if (Gh(s, i, S) && !Tl(f, S))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? md(i, s, f) : !0 : !!s;
  return !1;
}
function md(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Gh(t, e, r) && !Tl(n, r))
      return !0;
  }
  return !1;
}
function Gh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Xe(i) && Xe(a) ? !Li(i, a) : i !== a;
}
function Um({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Kh = {}, Wh = () => Object.create(Kh), qh = (e) => Object.getPrototypeOf(e) === Kh;
function Bm(e, t, n, i = !1) {
  const a = {}, r = Wh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ jg(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function jm(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ qe(a), [l] = e.propsOptions;
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
        if (Tl(e.emitsOptions, S))
          continue;
        const E = t[S];
        if (l)
          if (Ye(r, S))
            E !== r[S] && (r[S] = E, f = !0);
          else {
            const x = Dt(S);
            a[x] = Fc(
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
    Yh(e, t, a, r) && (f = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !Ye(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = li(h)) === h || !Ye(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = Fc(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !Ye(t, h)) && (delete r[h], f = !0);
  }
  f && Zn(e.attrs, "set", "");
}
function Yh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Pr(l))
        continue;
      const f = t[l];
      let u;
      a && Ye(a, u = Dt(l)) ? !r || !r.includes(u) ? n[u] = f : (o || (o = {}))[u] = f : Tl(e.emitsOptions, l) || (!(l in i) || f !== i[l]) && (i[l] = f, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ qe(n), f = o || He;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = Fc(
        a,
        l,
        h,
        f[h],
        e,
        !Ye(f, h)
      );
    }
  }
  return s;
}
function Fc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Ye(s, "default");
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
    ] && (i === "" || i === li(n)) && (i = !0));
  }
  return i;
}
const Hm = /* @__PURE__ */ new WeakMap();
function Xh(e, t, n = !1) {
  const i = n ? Hm : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!Le(e)) {
    const u = (h) => {
      l = !0;
      const [S, E] = Xh(h, t, !0);
      bt(s, S), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Xe(e) && i.set(e, Pa), Pa;
  if (Se(r))
    for (let u = 0; u < r.length; u++) {
      const h = Dt(r[u]);
      bd(h) && (s[h] = He);
    }
  else if (r)
    for (const u in r) {
      const h = Dt(u);
      if (bd(h)) {
        const S = r[u], E = s[h] = Se(S) || Le(S) ? { type: S } : bt({}, S), x = E.type;
        let A = !1, O = !0;
        if (Se(x))
          for (let D = 0; D < x.length; ++D) {
            const F = x[D], W = Le(F) && F.name;
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
        ] = O, (A || Ye(E, "default")) && o.push(h);
      }
    }
  const f = [s, o];
  return Xe(e) && i.set(e, f), f;
}
function bd(e) {
  return e[0] !== "$" && !Pr(e);
}
const _u = (e) => e === "_" || e === "_ctx" || e === "$stable", wu = (e) => Se(e) ? e.map(Un) : [Un(e)], Vm = (e, t, n) => {
  if (t._n)
    return t;
  const i = ke((...a) => wu(t(...a)), n);
  return i._c = !1, i;
}, Zh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (_u(a)) continue;
    const r = e[a];
    if (Le(r))
      t[a] = Vm(a, r, i);
    else if (r != null) {
      const s = wu(r);
      t[a] = () => s;
    }
  }
}, Jh = (e, t) => {
  const n = wu(t);
  e.slots.default = () => n;
}, Qh = (e, t, n) => {
  for (const i in t)
    (n || !_u(i)) && (e[i] = t[i]);
}, Gm = (e, t, n) => {
  const i = e.slots = Wh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Qh(i, t, n), n && Jf(i, "_", a, !0)) : Zh(t, i);
  } else t && Jh(e, t);
}, Km = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = He;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : Qh(a, t, n) : (r = !t.$stable, Zh(t, a)), s = t;
  } else t && (Jh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !_u(o) && s[o] == null && delete a[o];
}, jt = Zm;
function Wm(e) {
  return qm(e);
}
function qm(e, t) {
  const n = vl();
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
    setScopeId: E = bn,
    insertStaticContent: x
  } = e, A = (m, T, k, L = null, N = null, U = null, q = void 0, V = null, Z = !!T.dynamicChildren) => {
    if (m === T)
      return;
    m && !Qi(m, T) && (L = ft(m), ye(m, N, U, !0), m = null), T.patchFlag === -2 && (Z = !1, T.dynamicChildren = null);
    const { type: G, ref: ge, shapeFlag: re } = T;
    switch (G) {
      case ms:
        O(m, T, k, L);
        break;
      case kt:
        D(m, T, k, L);
        break;
      case ao:
        m == null && F(T, k, L, q);
        break;
      case de:
        Q(
          m,
          T,
          k,
          L,
          N,
          U,
          q,
          V,
          Z
        );
        break;
      default:
        re & 1 ? P(
          m,
          T,
          k,
          L,
          N,
          U,
          q,
          V,
          Z
        ) : re & 6 ? ie(
          m,
          T,
          k,
          L,
          N,
          U,
          q,
          V,
          Z
        ) : (re & 64 || re & 128) && G.process(
          m,
          T,
          k,
          L,
          N,
          U,
          q,
          V,
          Z,
          Vt
        );
    }
    ge != null && N ? Mr(ge, m && m.ref, U, T || m, !T) : ge == null && m && m.ref != null && Mr(m.ref, null, U, m, !0);
  }, O = (m, T, k, L) => {
    if (m == null)
      i(
        T.el = o(T.children),
        k,
        L
      );
    else {
      const N = T.el = m.el;
      T.children !== m.children && f(N, T.children);
    }
  }, D = (m, T, k, L) => {
    m == null ? i(
      T.el = l(T.children || ""),
      k,
      L
    ) : T.el = m.el;
  }, F = (m, T, k, L) => {
    [m.el, m.anchor] = x(
      m.children,
      T,
      k,
      L,
      m.el,
      m.anchor
    );
  }, W = ({ el: m, anchor: T }, k, L) => {
    let N;
    for (; m && m !== T; )
      N = S(m), i(m, k, L), m = N;
    i(T, k, L);
  }, I = ({ el: m, anchor: T }) => {
    let k;
    for (; m && m !== T; )
      k = S(m), a(m), m = k;
    a(T);
  }, P = (m, T, k, L, N, U, q, V, Z) => {
    if (T.type === "svg" ? q = "svg" : T.type === "math" && (q = "mathml"), m == null)
      ce(
        T,
        k,
        L,
        N,
        U,
        q,
        V,
        Z
      );
    else {
      const G = m.el && m.el._isVueCE ? m.el : null;
      try {
        G && G._beginPatch(), Y(
          m,
          T,
          N,
          U,
          q,
          V,
          Z
        );
      } finally {
        G && G._endPatch();
      }
    }
  }, ce = (m, T, k, L, N, U, q, V) => {
    let Z, G;
    const { props: ge, shapeFlag: re, transition: me, dirs: Ce } = m;
    if (Z = m.el = s(
      m.type,
      U,
      ge && ge.is,
      ge
    ), re & 8 ? u(Z, m.children) : re & 16 && fe(
      m.children,
      Z,
      null,
      L,
      N,
      Zl(m, U),
      q,
      V
    ), Ce && Vi(m, null, L, "created"), J(Z, m, m.scopeId, q, L), ge) {
      for (const Pe in ge)
        Pe !== "value" && !Pr(Pe) && r(Z, Pe, null, ge[Pe], U, L);
      "value" in ge && r(Z, "value", null, ge.value, U), (G = ge.onVnodeBeforeMount) && Pn(G, L, m);
    }
    Ce && Vi(m, null, L, "beforeMount");
    const Ne = Ym(N, me);
    Ne && me.beforeEnter(Z), i(Z, T, k), ((G = ge && ge.onVnodeMounted) || Ne || Ce) && jt(() => {
      G && Pn(G, L, m), Ne && me.enter(Z), Ce && Vi(m, null, L, "mounted");
    }, N);
  }, J = (m, T, k, L, N) => {
    if (k && E(m, k), L)
      for (let U = 0; U < L.length; U++)
        E(m, L[U]);
    if (N) {
      let U = N.subTree;
      if (T === U || np(U.type) && (U.ssContent === T || U.ssFallback === T)) {
        const q = N.vnode;
        J(
          m,
          q,
          q.scopeId,
          q.slotScopeIds,
          N.parent
        );
      }
    }
  }, fe = (m, T, k, L, N, U, q, V, Z = 0) => {
    for (let G = Z; G < m.length; G++) {
      const ge = m[G] = V ? Xn(m[G]) : Un(m[G]);
      A(
        null,
        ge,
        T,
        k,
        L,
        N,
        U,
        q,
        V
      );
    }
  }, Y = (m, T, k, L, N, U, q) => {
    const V = T.el = m.el;
    let { patchFlag: Z, dynamicChildren: G, dirs: ge } = T;
    Z |= m.patchFlag & 16;
    const re = m.props || He, me = T.props || He;
    let Ce;
    if (k && Gi(k, !1), (Ce = me.onVnodeBeforeUpdate) && Pn(Ce, k, T, m), ge && Vi(T, m, k, "beforeUpdate"), k && Gi(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    G && (!m.dynamicChildren || m.dynamicChildren.length !== G.length) && (Z = 0, q = !1, G = null), (re.innerHTML && me.innerHTML == null || re.textContent && me.textContent == null) && u(V, ""), G ? le(
      m.dynamicChildren,
      G,
      V,
      k,
      L,
      Zl(T, N),
      U
    ) : q || ne(
      m,
      T,
      V,
      null,
      k,
      L,
      Zl(T, N),
      U,
      !1
    ), Z > 0) {
      if (Z & 16)
        be(V, re, me, k, N);
      else if (Z & 2 && re.class !== me.class && r(V, "class", null, me.class, N), Z & 4 && r(V, "style", re.style, me.style, N), Z & 8) {
        const Ne = T.dynamicProps;
        for (let Pe = 0; Pe < Ne.length; Pe++) {
          const $e = Ne[Pe], tt = re[$e], rt = me[$e];
          (rt !== tt || $e === "value") && r(V, $e, tt, rt, N, k);
        }
      }
      Z & 1 && m.children !== T.children && u(V, T.children);
    } else !q && G == null && be(V, re, me, k, N);
    ((Ce = me.onVnodeUpdated) || ge) && jt(() => {
      Ce && Pn(Ce, k, T, m), ge && Vi(T, m, k, "updated");
    }, L);
  }, le = (m, T, k, L, N, U, q) => {
    for (let V = 0; V < T.length; V++) {
      const Z = m[V], G = T[V], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Qi(Z, G) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? h(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        Z,
        G,
        ge,
        null,
        L,
        N,
        U,
        q,
        !0
      );
    }
  }, be = (m, T, k, L, N) => {
    if (T !== k) {
      if (T !== He)
        for (const U in T)
          !Pr(U) && !(U in k) && r(
            m,
            U,
            T[U],
            null,
            N,
            L
          );
      for (const U in k) {
        if (Pr(U)) continue;
        const q = k[U], V = T[U];
        q !== V && U !== "value" && r(m, U, V, q, N, L);
      }
      "value" in k && r(m, "value", T.value, k.value, N);
    }
  }, Q = (m, T, k, L, N, U, q, V, Z) => {
    const G = T.el = m ? m.el : o(""), ge = T.anchor = m ? m.anchor : o("");
    let { patchFlag: re, dynamicChildren: me, slotScopeIds: Ce } = T;
    Ce && (V = V ? V.concat(Ce) : Ce), m == null ? (i(G, k, L), i(ge, k, L), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      k,
      ge,
      N,
      U,
      q,
      V,
      Z
    )) : re > 0 && re & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === me.length ? (le(
      m.dynamicChildren,
      me,
      k,
      N,
      U,
      q,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (T.key != null || N && T === N.subTree) && Su(
      m,
      T,
      !0
      /* shallow */
    )) : ne(
      m,
      T,
      k,
      ge,
      N,
      U,
      q,
      V,
      Z
    );
  }, ie = (m, T, k, L, N, U, q, V, Z) => {
    T.slotScopeIds = V, m == null ? T.shapeFlag & 512 ? N.ctx.activate(
      T,
      k,
      L,
      q,
      Z
    ) : $(
      T,
      k,
      L,
      N,
      U,
      q,
      Z
    ) : z(m, T, Z);
  }, $ = (m, T, k, L, N, U, q) => {
    const V = m.component = tb(
      m,
      L,
      N
    );
    if (Sl(m) && (V.ctx.renderer = Vt), nb(V, !1, q), V.asyncDep) {
      if (N && N.registerDep(V, X, q), !m.el) {
        const Z = V.subTree = _e(kt);
        D(null, Z, T, k), m.placeholder = Z.el;
      }
    } else
      X(
        V,
        m,
        T,
        k,
        N,
        U,
        q
      );
  }, z = (m, T, k) => {
    const L = T.component = m.component;
    if (zm(m, T, k))
      if (L.asyncDep && !L.asyncResolved) {
        oe(L, T, k);
        return;
      } else
        L.next = T, L.update();
    else
      T.el = m.el, L.vnode = T;
  }, X = (m, T, k, L, N, U, q) => {
    const V = () => {
      if (m.isMounted) {
        let { next: re, bu: me, u: Ce, parent: Ne, vnode: Pe } = m;
        {
          const pt = ep(m);
          if (pt) {
            re && (re.el = Pe.el, oe(m, re, q)), pt.asyncDep.then(() => {
              jt(() => {
                m.isUnmounted || G();
              }, N);
            });
            return;
          }
        }
        let $e = re, tt;
        Gi(m, !1), re ? (re.el = Pe.el, oe(m, re, q)) : re = Pe, me && io(me), (tt = re.props && re.props.onVnodeBeforeUpdate) && Pn(tt, Ne, re, Pe), Gi(m, !0);
        const rt = gd(m), ct = m.subTree;
        m.subTree = rt, A(
          ct,
          rt,
          // parent may have changed if it's in a teleport
          h(ct.el),
          // anchor may have changed if it's in a fragment
          ft(ct),
          m,
          N,
          U
        ), re.el = rt.el, $e === null && Um(m, rt.el), Ce && jt(Ce, N), (tt = re.props && re.props.onVnodeUpdated) && jt(
          () => Pn(tt, Ne, re, Pe),
          N
        );
      } else {
        let re;
        const { el: me, props: Ce } = T, { bm: Ne, m: Pe, parent: $e, root: tt, type: rt } = m, ct = Da(T);
        Gi(m, !1), Ne && io(Ne), !ct && (re = Ce && Ce.onVnodeBeforeMount) && Pn(re, $e, T), Gi(m, !0);
        {
          tt.ce && tt.ce._hasShadowRoot() && tt.ce._injectChildStyle(
            rt,
            m.parent ? m.parent.type : void 0
          );
          const pt = m.subTree = gd(m);
          A(
            null,
            pt,
            k,
            L,
            m,
            N,
            U
          ), T.el = pt.el;
        }
        if (Pe && jt(Pe, N), !ct && (re = Ce && Ce.onVnodeMounted)) {
          const pt = T;
          jt(
            () => Pn(re, $e, pt),
            N
          );
        }
        (T.shapeFlag & 256 || $e && Da($e.vnode) && $e.vnode.shapeFlag & 256) && m.a && jt(m.a, N), m.isMounted = !0, T = k = L = null;
      }
    };
    m.scope.on();
    const Z = m.effect = new nh(V);
    m.scope.off();
    const G = m.update = Z.run.bind(Z), ge = m.job = Z.runIfDirty.bind(Z);
    ge.i = m, ge.id = m.uid, Z.scheduler = () => gu(ge), Gi(m, !0), G();
  }, oe = (m, T, k) => {
    T.component = m;
    const L = m.vnode.props;
    m.vnode = T, m.next = null, jm(m, T.props, L, k), Km(m, T.children, k), ai(), sd(m), ri();
  }, ne = (m, T, k, L, N, U, q, V, Z = !1) => {
    const G = m && m.children, ge = m ? m.shapeFlag : 0, re = T.children, { patchFlag: me, shapeFlag: Ce } = T;
    if (me > 0) {
      if (me & 128) {
        ve(
          G,
          re,
          k,
          L,
          N,
          U,
          q,
          V,
          Z
        );
        return;
      } else if (me & 256) {
        pe(
          G,
          re,
          k,
          L,
          N,
          U,
          q,
          V,
          Z
        );
        return;
      }
    }
    Ce & 8 ? (ge & 16 && lt(G, N, U), re !== G && u(k, re)) : ge & 16 ? Ce & 16 ? ve(
      G,
      re,
      k,
      L,
      N,
      U,
      q,
      V,
      Z
    ) : lt(G, N, U, !0) : (ge & 8 && u(k, ""), Ce & 16 && fe(
      re,
      k,
      L,
      N,
      U,
      q,
      V,
      Z
    ));
  }, pe = (m, T, k, L, N, U, q, V, Z) => {
    m = m || Pa, T = T || Pa;
    const G = m.length, ge = T.length, re = Math.min(G, ge);
    let me;
    for (me = 0; me < re; me++) {
      const Ce = T[me] = Z ? Xn(T[me]) : Un(T[me]);
      A(
        m[me],
        Ce,
        k,
        null,
        N,
        U,
        q,
        V,
        Z
      );
    }
    G > ge ? lt(
      m,
      N,
      U,
      !0,
      !1,
      re
    ) : fe(
      T,
      k,
      L,
      N,
      U,
      q,
      V,
      Z,
      re
    );
  }, ve = (m, T, k, L, N, U, q, V, Z) => {
    let G = 0;
    const ge = T.length;
    let re = m.length - 1, me = ge - 1;
    for (; G <= re && G <= me; ) {
      const Ce = m[G], Ne = T[G] = Z ? Xn(T[G]) : Un(T[G]);
      if (Qi(Ce, Ne))
        A(
          Ce,
          Ne,
          k,
          null,
          N,
          U,
          q,
          V,
          Z
        );
      else
        break;
      G++;
    }
    for (; G <= re && G <= me; ) {
      const Ce = m[re], Ne = T[me] = Z ? Xn(T[me]) : Un(T[me]);
      if (Qi(Ce, Ne))
        A(
          Ce,
          Ne,
          k,
          null,
          N,
          U,
          q,
          V,
          Z
        );
      else
        break;
      re--, me--;
    }
    if (G > re) {
      if (G <= me) {
        const Ce = me + 1, Ne = Ce < ge ? T[Ce].el : L;
        for (; G <= me; )
          A(
            null,
            T[G] = Z ? Xn(T[G]) : Un(T[G]),
            k,
            Ne,
            N,
            U,
            q,
            V,
            Z
          ), G++;
      }
    } else if (G > me)
      for (; G <= re; )
        ye(m[G], N, U, !0), G++;
    else {
      const Ce = G, Ne = G, Pe = /* @__PURE__ */ new Map();
      for (G = Ne; G <= me; G++) {
        const Ve = T[G] = Z ? Xn(T[G]) : Un(T[G]);
        Ve.key != null && Pe.set(Ve.key, G);
      }
      let $e, tt = 0;
      const rt = me - Ne + 1;
      let ct = !1, pt = 0;
      const wt = new Array(rt);
      for (G = 0; G < rt; G++) wt[G] = 0;
      for (G = Ce; G <= re; G++) {
        const Ve = m[G];
        if (tt >= rt) {
          ye(Ve, N, U, !0);
          continue;
        }
        let zt;
        if (Ve.key != null)
          zt = Pe.get(Ve.key);
        else
          for ($e = Ne; $e <= me; $e++)
            if (wt[$e - Ne] === 0 && Qi(Ve, T[$e])) {
              zt = $e;
              break;
            }
        zt === void 0 ? ye(Ve, N, U, !0) : (wt[zt - Ne] = G + 1, zt >= pt ? pt = zt : ct = !0, A(
          Ve,
          T[zt],
          k,
          null,
          N,
          U,
          q,
          V,
          Z
        ), tt++);
      }
      const qt = ct ? Xm(wt) : Pa;
      for ($e = qt.length - 1, G = rt - 1; G >= 0; G--) {
        const Ve = Ne + G, zt = T[Ve], ui = T[Ve + 1], Mi = Ve + 1 < ge ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ui.el || tp(ui)
        ) : L;
        wt[G] === 0 ? A(
          null,
          zt,
          k,
          Mi,
          N,
          U,
          q,
          V,
          Z
        ) : ct && ($e < 0 || G !== qt[$e] ? we(zt, k, Mi, 2) : $e--);
      }
    }
  }, we = (m, T, k, L, N = null) => {
    const { el: U, type: q, transition: V, children: Z, shapeFlag: G } = m;
    if (G & 6) {
      we(m.component.subTree, T, k, L);
      return;
    }
    if (G & 128) {
      m.suspense.move(T, k, L);
      return;
    }
    if (G & 64) {
      q.move(m, T, k, Vt);
      return;
    }
    if (q === de) {
      i(U, T, k);
      for (let re = 0; re < Z.length; re++)
        we(Z[re], T, k, L);
      i(m.anchor, T, k);
      return;
    }
    if (q === ao) {
      W(m, T, k);
      return;
    }
    if (L !== 2 && G & 1 && V)
      if (L === 0)
        V.persisted && !U[gn] ? i(U, T, k) : (V.beforeEnter(U), i(U, T, k), jt(() => V.enter(U), N));
      else {
        const { leave: re, delayLeave: me, afterLeave: Ce } = V, Ne = () => {
          m.ctx.isUnmounted ? a(U) : i(U, T, k);
        }, Pe = () => {
          const $e = U._isLeaving || !!U[gn];
          U._isLeaving && U[gn](
            !0
            /* cancelled */
          ), V.persisted && !$e ? Ne() : re(U, () => {
            Ne(), Ce && Ce();
          });
        };
        me ? me(U, Ne, Pe) : Pe();
      }
    else
      i(U, T, k);
  }, ye = (m, T, k, L = !1, N = !1) => {
    const {
      type: U,
      props: q,
      ref: V,
      children: Z,
      dynamicChildren: G,
      shapeFlag: ge,
      patchFlag: re,
      dirs: me,
      cacheIndex: Ce,
      memo: Ne
    } = m;
    if (re === -2 && (N = !1), V != null && (ai(), Mr(V, null, k, m, !0), ri()), Ce != null && (T.renderCache[Ce] = void 0), ge & 256) {
      T.ctx.deactivate(m);
      return;
    }
    const Pe = ge & 1 && me, $e = !Da(m);
    let tt;
    if ($e && (tt = q && q.onVnodeBeforeUnmount) && Pn(tt, T, m), ge & 6)
      ot(m.component, k, L);
    else {
      if (ge & 128) {
        m.suspense.unmount(k, L);
        return;
      }
      Pe && Vi(m, null, T, "beforeUnmount"), ge & 64 ? m.type.remove(
        m,
        T,
        k,
        Vt,
        L
      ) : G && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !G.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== de || re > 0 && re & 64) ? lt(
        G,
        T,
        k,
        !1,
        !0
      ) : (U === de && re & 384 || !N && ge & 16) && lt(Z, T, k), L && Ge(m);
    }
    const rt = Ne != null && Ce == null;
    ($e && (tt = q && q.onVnodeUnmounted) || Pe || rt) && jt(() => {
      tt && Pn(tt, T, m), Pe && Vi(m, null, T, "unmounted"), rt && (m.el = null);
    }, k);
  }, Ge = (m) => {
    const { type: T, el: k, anchor: L, transition: N } = m;
    if (T === de) {
      Ee(k, L);
      return;
    }
    if (T === ao) {
      I(m);
      return;
    }
    const U = () => {
      a(k), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (m.shapeFlag & 1 && N && !N.persisted) {
      const { leave: q, delayLeave: V } = N, Z = () => q(k, U);
      V ? V(m.el, U, Z) : Z();
    } else
      U();
  }, Ee = (m, T) => {
    let k;
    for (; m !== T; )
      k = S(m), a(m), m = k;
    a(T);
  }, ot = (m, T, k) => {
    const { bum: L, scope: N, job: U, subTree: q, um: V, m: Z, a: G } = m;
    yd(Z), yd(G), L && io(L), N.stop(), U && (U.flags |= 8, ye(q, m, T, k)), V && jt(V, T), jt(() => {
      m.isUnmounted = !0;
    }, T);
  }, lt = (m, T, k, L = !1, N = !1, U = 0) => {
    for (let q = U; q < m.length; q++)
      ye(m[q], T, k, L, N);
  }, ft = (m) => {
    if (m.shapeFlag & 6)
      return ft(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const T = S(m.anchor || m.el), k = T && T[Eh];
    return k ? S(k) : T;
  };
  let ht = !1;
  const Je = (m, T, k) => {
    let L;
    m == null ? T._vnode && (ye(T._vnode, null, null, !0), L = T._vnode.component) : A(
      T._vnode || null,
      m,
      T,
      null,
      null,
      null,
      k
    ), T._vnode = m, ht || (ht = !0, sd(L), Sh(), ht = !1);
  }, Vt = {
    p: A,
    um: ye,
    m: we,
    r: Ge,
    mt: $,
    mc: fe,
    pc: ne,
    pbc: le,
    n: ft,
    o: e
  };
  return {
    render: Je,
    hydrate: void 0,
    createApp: Pm(Je)
  };
}
function Zl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Gi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ym(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Su(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Se(i) && Se(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = Xn(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && Su(s, o)), o.type === ms && (o.patchFlag === -1 && (o = a[r] = Xn(o)), o.el = s.el), o.type === kt && !o.el && (o.el = s.el);
    }
}
function Xm(e) {
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
function ep(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ep(t);
}
function yd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function tp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? tp(t.subTree) : null;
}
const np = (e) => e.__isSuspense;
function Zm(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : wh(e);
}
const de = /* @__PURE__ */ Symbol.for("v-fgt"), ms = /* @__PURE__ */ Symbol.for("v-txt"), kt = /* @__PURE__ */ Symbol.for("v-cmt"), ao = /* @__PURE__ */ Symbol.for("v-stc"), ni = [];
let rn = null;
function w(e = !1) {
  ni.push(rn = e ? null : []);
}
function Cu() {
  ni.pop(), rn = ni[ni.length - 1] || null;
}
let ts = 1;
function mo(e, t = !1) {
  ts += e, e < 0 && rn && t && (rn.hasOnce = !0);
}
function ip(e) {
  return e.dynamicChildren = ts > 0 ? rn || Pa : null, Cu(), ts > 0 && rn && rn.push(e), e;
}
function C(e, t, n, i, a, r) {
  return ip(
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
  return ip(
    _e(
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
function Qi(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ap = ({ key: e }) => e ?? null, ro = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? at(e) || /* @__PURE__ */ Mt(e) || Le(e) ? { i: Ot, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === de ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ap(t),
    ref: t && ro(t),
    scopeId: yl,
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
  return o ? (bo(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= at(n) ? 8 : 16), ts > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  rn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && rn.push(l), l;
}
const _e = Jm;
function Jm(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Dh) && (e = kt), ns(e)) {
    const o = Ri(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && bo(o, n), ts > 0 && !r && rn && (o.shapeFlag & 6 ? rn[rn.indexOf(e)] = o : rn.push(o)), o.patchFlag = -2, o;
  }
  if (sb(e) && (e = e.__vccOpts), t) {
    t = is(t);
    let { class: o, style: l } = t;
    o && !at(o) && (t.class = Te(o)), Xe(l) && (/* @__PURE__ */ vu(l) && !Se(l) && (l = bt({}, l)), t.style = sn(l));
  }
  const s = at(e) ? 1 : np(e) ? 128 : wl(e) ? 64 : Xe(e) ? 4 : Le(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ vu(e) || qh(e) ? bt({}, e) : e : null;
}
function Ri(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, f = t ? Ft(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && ap(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Se(r) ? r.concat(ro(t)) : [r, ro(t)] : ro(t)
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
    ssContent: e.ssContent && Ri(e.ssContent),
    ssFallback: e.ssFallback && Ri(e.ssFallback),
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
function Oe(e = " ", t = 0) {
  return _e(ms, null, e, t);
}
function j(e = "", t = !1) {
  return t ? (w(), Fe(kt, null, e)) : _e(kt, null, e);
}
function Un(e) {
  return e == null || typeof e == "boolean" ? _e(kt) : Se(e) ? _e(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ns(e) ? Xn(e) : _e(ms, null, String(e));
}
function Xn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ri(e);
}
function bo(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), bo(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !qh(t) ? t._ctx = Ot : a === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Le(t)) {
    if (i & 65) {
      bo(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ot }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Oe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ft(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Te([t.class, i.class]));
      else if (a === "style")
        t.style = sn([t.style, i.style]);
      else if (ul(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(Se(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !dl(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Pn(e, t, n, i = null) {
  _n(e, t, 7, [
    n,
    i
  ]);
}
const Qm = Bh();
let eb = 0;
function tb(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Qm, r = {
    uid: eb++,
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
    scope: new Cg(
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
    propsOptions: Xh(i, a),
    emitsOptions: Vh(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: He,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: He,
    data: He,
    props: He,
    attrs: He,
    slots: He,
    refs: He,
    setupState: He,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = $m.bind(null, r), e.ce && e.ce(r), r;
}
let $t = null;
const ua = () => $t || Ot;
let yo, as;
{
  const e = vl(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  yo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => $t = n
  ), as = t(
    "__VUE_SSR_SETTERS__",
    (n) => rs = n
  );
}
const bs = (e) => {
  const t = $t;
  return yo(e), e.scope.on(), () => {
    e.scope.off(), yo(t);
  };
}, _d = () => {
  $t && $t.scope.off(), yo(null);
};
function rp(e) {
  return e.vnode.shapeFlag & 4;
}
let rs = !1;
function nb(e, t = !1, n = !1) {
  t && as(t);
  const { props: i, children: a } = e.vnode, r = rp(e);
  Bm(e, i, r, t), Gm(e, a, n || t);
  const s = r ? ib(e, t) : void 0;
  return t && as(!1), s;
}
function ib(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Tm);
  const { setup: i } = n;
  if (i) {
    ai();
    const a = e.setupContext = i.length > 1 ? op(e) : null, r = bs(e), s = vs(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = Yf(s);
    if (ri(), r(), (o || e.sp) && !Da(e) && Rh(e), o) {
      if (s.then(_d, _d), t)
        return s.then((l) => {
          as(!0);
          try {
            wd(e, l, t);
          } finally {
            as(!1);
          }
        }).catch((l) => {
          bl(l, e, 0);
        });
      e.asyncDep = s;
    } else
      wd(e, s);
  } else
    sp(e);
}
function wd(e, t, n) {
  Le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Xe(t) && (e.setupState = bh(t)), sp(e);
}
function sp(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || bn);
  {
    const a = bs(e);
    ai();
    try {
      Om(e);
    } finally {
      ri(), a();
    }
  }
}
const ab = {
  get(e, t) {
    return It(e, "get", ""), e[t];
  }
};
function op(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ab),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function El(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bh(Hg(e.exposed)), {
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
function rb(e, t = !0) {
  return Le(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function sb(e) {
  return Le(e) && "__vccOpts" in e;
}
const K = (e, t) => /* @__PURE__ */ Yg(e, t, rs);
function Kt(e, t, n) {
  try {
    mo(-1);
    const i = arguments.length;
    return i === 2 ? Xe(t) && !Se(t) ? ns(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && ns(n) && (n = [n]), _e(e, t, n));
  } finally {
    mo(1);
  }
}
const ob = "3.5.42", lb = bn;
let zc;
const Sd = typeof window < "u" && window.trustedTypes;
if (Sd)
  try {
    zc = /* @__PURE__ */ Sd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lp = zc ? (e) => zc.createHTML(e) : (e) => e, cb = "http://www.w3.org/2000/svg", ub = "http://www.w3.org/1998/Math/MathML", Yn = typeof document < "u" ? document : null, Cd = Yn && /* @__PURE__ */ Yn.createElement("template"), db = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? Yn.createElementNS(cb, e) : t === "mathml" ? Yn.createElementNS(ub, e) : n ? Yn.createElement(e, { is: n }) : Yn.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => Yn.createTextNode(e),
  createComment: (e) => Yn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Yn.querySelector(e),
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
      Cd.innerHTML = lp(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Cd.content;
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
}, bi = "transition", _r = "animation", ss = /* @__PURE__ */ Symbol("_vtc"), cp = {
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
}, fb = /* @__PURE__ */ bt(
  {},
  kh,
  cp
), hb = (e) => (e.displayName = "Transition", e.props = fb, e), pb = /* @__PURE__ */ hb(
  (e, { slots: t }) => Kt(hm, vb(e), t)
), Ki = (e, t = []) => {
  Se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Td = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function vb(e) {
  const t = {};
  for (const Q in e)
    Q in cp || (t[Q] = e[Q]);
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
  } = e, x = gb(a), A = x && x[0], O = x && x[1], {
    onBeforeEnter: D,
    onEnter: F,
    onEnterCancelled: W,
    onLeave: I,
    onLeaveCancelled: P,
    onBeforeAppear: ce = D,
    onAppear: J = F,
    onAppearCancelled: fe = W
  } = t, Y = (Q, ie, $, z) => {
    Q._enterCancelled = z, Wi(Q, ie ? u : o), Wi(Q, ie ? f : s), $ && $();
  }, le = (Q, ie) => {
    Q._isLeaving = !1, Wi(Q, h), Wi(Q, E), Wi(Q, S), ie && ie();
  }, be = (Q) => (ie, $) => {
    const z = Q ? J : F, X = () => Y(ie, Q, $);
    Ki(z, [ie, X]), Ed(() => {
      Wi(ie, Q ? l : r), Gn(ie, Q ? u : o), Td(z) || Ad(ie, i, A, X);
    });
  };
  return bt(t, {
    onBeforeEnter(Q) {
      Ki(D, [Q]), Gn(Q, r), Gn(Q, s);
    },
    onBeforeAppear(Q) {
      Ki(ce, [Q]), Gn(Q, l), Gn(Q, f);
    },
    onEnter: be(!1),
    onAppear: be(!0),
    onLeave(Q, ie) {
      Q._isLeaving = !0;
      const $ = () => le(Q, ie);
      Gn(Q, h), Q._enterCancelled ? (Gn(Q, S), xd(Q)) : (xd(Q), Gn(Q, S)), Ed(() => {
        Q._isLeaving && (Wi(Q, h), Gn(Q, E), Td(I) || Ad(Q, i, O, $));
      }), Ki(I, [Q, $]);
    },
    onEnterCancelled(Q) {
      Y(Q, !1, void 0, !0), Ki(W, [Q]);
    },
    onAppearCancelled(Q) {
      Y(Q, !0, void 0, !0), Ki(fe, [Q]);
    },
    onLeaveCancelled(Q) {
      le(Q), Ki(P, [Q]);
    }
  });
}
function gb(e) {
  if (e == null)
    return null;
  if (Xe(e))
    return [Jl(e.enter), Jl(e.leave)];
  {
    const t = Jl(e);
    return [t, t];
  }
}
function Jl(e) {
  return hg(e);
}
function Gn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ss] || (e[ss] = /* @__PURE__ */ new Set())).add(t);
}
function Wi(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[ss];
  n && (n.delete(t), n.size || (e[ss] = void 0));
}
function Ed(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let mb = 0;
function Ad(e, t, n, i) {
  const a = e._endId = ++mb, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = bb(e, t);
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
function bb(e, t) {
  const n = window.getComputedStyle(e), i = (x) => (n[x] || "").split(", "), a = i(`${bi}Delay`), r = i(`${bi}Duration`), s = kd(a, r), o = i(`${_r}Delay`), l = i(`${_r}Duration`), f = kd(o, l);
  let u = null, h = 0, S = 0;
  t === bi ? s > 0 && (u = bi, h = s, S = r.length) : t === _r ? f > 0 && (u = _r, h = f, S = l.length) : (h = Math.max(s, f), u = h > 0 ? s > f ? bi : _r : null, S = u ? u === bi ? r.length : l.length : 0);
  const E = u === bi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${bi}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: S,
    hasTransform: E
  };
}
function kd(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Od(n) + Od(e[i])));
}
function Od(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xd(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function yb(e, t, n) {
  const i = e[ss];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const _o = /* @__PURE__ */ Symbol("_vod"), up = /* @__PURE__ */ Symbol("_vsh"), Fa = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[_o] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : wr(e, t);
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
  e.style.display = t ? e[_o] : "none", e[up] = !t;
}
const dp = /* @__PURE__ */ Symbol("");
function _b(e) {
  const t = ua();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => wo(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? wo(t.ce, a) : Uc(t.subTree, a), n(a);
  };
  $h(() => {
    wh(i);
  }), Pi(() => {
    et(i, bn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), gs(() => a.disconnect());
  });
}
function Uc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Uc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    wo(e.el, t);
  else if (e.type === de)
    e.children.forEach((n) => Uc(n, t));
  else if (e.type === ao) {
    let { el: n, anchor: i } = e;
    for (; n && (wo(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function wo(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Sg(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[dp] = i;
  }
}
const wb = /(?:^|;)\s*display\s*:/;
function Sb(e, t, n) {
  const i = e.style, a = at(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (at(t))
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
      o != null ? Tb(
        e,
        s,
        !at(t) && t ? t[s] : void 0,
        o
      ) || Nr(i, s, o) : Nr(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[dp];
      s && (n += ";" + s), i.cssText = n, r = wb.test(n);
    }
  } else t && e.removeAttribute("style");
  _o in e && (e[_o] = r ? i.display : "", e[up] && (i.display = "none"));
}
const Ws = /\s*!important$/;
function Nr(e, t, n) {
  if (Se(n))
    n.forEach((i) => Nr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Ws.test(n) ? e.setProperty(t, n.replace(Ws, ""), "important") : e.setProperty(t, n);
  else {
    const i = Cb(e, t);
    Ws.test(n) ? e.setProperty(
      li(i),
      n.replace(Ws, ""),
      "important"
    ) : e[i] = n;
  }
}
const Nd = ["Webkit", "Moz", "ms"], Ql = {};
function Cb(e, t) {
  const n = Ql[t];
  if (n)
    return n;
  let i = Dt(t);
  if (i !== "filter" && i in e)
    return Ql[t] = i;
  i = hl(i);
  for (let a = 0; a < Nd.length; a++) {
    const r = Nd[a] + i;
    if (r in e)
      return Ql[t] = r;
  }
  return t;
}
function Tb(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && at(i) && n === i;
}
const Ld = "http://www.w3.org/1999/xlink";
function Rd(e, t, n, i, a, r = yg(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ld, t.slice(6, t.length)) : e.setAttributeNS(Ld, t, n) : n == null || r && !Qf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : An(n) ? String(n) : n
  );
}
function Id(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? lp(n) : n);
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
    o === "boolean" ? n = Qf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function ea(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Eb(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Pd = /* @__PURE__ */ Symbol("_vei");
function Ab(e, t, n, i, a = null) {
  const r = e[Pd] || (e[Pd] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = xb(t);
    if (i) {
      const f = r[t] = Rb(
        i,
        a
      );
      ea(e, o, f, l);
    } else s && (Eb(e, o, s, l), r[t] = void 0);
  }
}
const kb = /(Once|Passive|Capture)$/, Ob = /^on:?(?:Once|Passive|Capture)$/;
function xb(e) {
  let t, n;
  for (; (n = e.match(kb)) && !Ob.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : li(e.slice(2)), t];
}
let ec = 0;
const Nb = /* @__PURE__ */ Promise.resolve(), Lb = () => ec || (Nb.then(() => ec = 0), ec = Date.now());
function Rb(e, t) {
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
        f && _n(
          f,
          t,
          5,
          o
        );
      }
    } else
      _n(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Lb(), n;
}
const $d = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ib = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? yb(e, i, s) : t === "style" ? Sb(e, n, i) : ul(t) ? dl(t) || Ab(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Pb(e, t, i, s)) ? (Id(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rd(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  ($b(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !at(i))) ? Id(e, Dt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Rd(e, t, i, s));
};
function Pb(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $d(t) && Le(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return $d(t) && at(n) ? !1 : t in e;
}
function $b(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Dt(t);
  return Array.isArray(n) ? n.some((a) => Dt(a) === i) : Object.keys(n).some((a) => Dt(a) === i);
}
const So = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (n) => io(t, n) : t;
};
function Db(e) {
  e.target.composing = !0;
}
function Dd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const na = /* @__PURE__ */ Symbol("_assign"), qs = /* @__PURE__ */ Symbol("_initialValue");
function tc(e, t, n) {
  return t && (e = e.trim()), n && (e = pl(e)), e;
}
const Gt = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[qs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[qs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[na] = So(a);
    const r = i || a.props && a.props.type === "number";
    ea(e, t ? "change" : "input", (s) => {
      s.target.composing || e[na](tc(e.value, n, r));
    }), (n || r) && ea(e, "change", () => {
      e.value = tc(e.value, n, r);
    }), t || (ea(e, "compositionstart", Db), ea(e, "compositionend", Dd), ea(e, "change", Dd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[qs];
    delete e[qs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[na](tc(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[na] = So(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? pl(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const f = e.getRootNode();
    (f instanceof Document || f instanceof ShadowRoot) && f.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, yi = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, ea(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? pl(Co(l)) : Co(l)
      ), r = e.multiple, s = r ? la(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? Se(s) ? a.slice() : a : s
      ];
      try {
        e[na](s);
      } finally {
        nn(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[na] = So(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Md(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[na] = So(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Mb(t, n[1], n[0])) && Md(e, t);
  }
};
function Mb(e, t, n) {
  if (!n || Se(e)) return Li(e, t);
  if (la(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Md(e, t) {
  const n = e.multiple, i = Se(t);
  if (!(n && !i && !la(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = Co(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((f) => String(f) === String(o)) : s.selected = wg(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Li(Co(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Co(e) {
  return "_value" in e ? e._value : e.value;
}
const Fb = ["ctrl", "shift", "alt", "meta"], zb = {
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
  exact: (e, t) => Fb.some((n) => e[`${n}Key`] && !t.includes(n))
}, ze = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = zb[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Ub = {
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
    const r = li(a.key);
    if (t.some(
      (s) => s === r || Ub[s] === r
    ))
      return e(a);
  }));
}, Bb = /* @__PURE__ */ bt({ patchProp: Ib }, db);
let Fd;
function jb() {
  return Fd || (Fd = Wm(Bb));
}
const Hb = ((...e) => {
  const t = jb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Gb(i);
    if (!a) return;
    const r = t._component;
    !Le(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, Vb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function Vb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gb(e) {
  return at(e) ? document.querySelector(e) : e;
}
function Tu(e, t, n) {
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
function zd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Kb(e) {
  if (Array.isArray(e)) return e;
}
function Wb(e, t) {
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
function qb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yb(e, t) {
  return Kb(e) || Wb(e, t) || Xb(e, t) || qb();
}
function Xb(e, t) {
  if (e) {
    if (typeof e == "string") return zd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zd(e, t) : void 0;
  }
}
const fp = Object.entries, Ud = Object.setPrototypeOf, Zb = Object.isFrozen, Jb = Object.getPrototypeOf, Qb = Object.getOwnPropertyDescriptor;
let _t = Object.freeze, Tt = Object.seal, Ra = Object.create, hp = typeof Reflect < "u" && Reflect, Bc = hp.apply, jc = hp.construct;
_t || (_t = function(t) {
  return t;
});
Tt || (Tt = function(t) {
  return t;
});
Bc || (Bc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
jc || (jc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const Zi = yt(Array.prototype.forEach), ey = yt(Array.prototype.lastIndexOf), Bd = yt(Array.prototype.pop), Sr = yt(Array.prototype.push), ty = yt(Array.prototype.splice), za = Array.isArray, Lr = yt(String.prototype.toLowerCase), nc = yt(String.prototype.toString), jd = yt(String.prototype.match), Cr = yt(String.prototype.replace), Hd = yt(String.prototype.indexOf), ny = yt(String.prototype.trim), iy = yt(Number.prototype.toString), ay = yt(Boolean.prototype.toString), Vd = typeof BigInt > "u" ? null : yt(BigInt.prototype.toString), Gd = typeof Symbol > "u" ? null : yt(Symbol.prototype.toString), Wt = yt(Object.prototype.hasOwnProperty), Tr = yt(Object.prototype.toString), Nt = yt(RegExp.prototype.test), qi = ry(TypeError);
function yt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return Bc(e, t, i);
  };
}
function ry(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return jc(e, n);
  };
}
function je(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lr;
  if (Ud && Ud(e, null), !za(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Zb(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function sy(e) {
  for (let t = 0; t < e.length; t++)
    Wt(e, t) || (e[t] = null);
  return e;
}
function tn(e) {
  const t = Ra(null);
  for (const i of fp(e)) {
    var n = Yb(i, 2);
    const a = n[0], r = n[1];
    Wt(e, a) && (za(r) ? t[a] = sy(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = tn(r) : t[a] = r);
  }
  return t;
}
function oy(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return iy(e);
    case "boolean":
      return ay(e);
    case "bigint":
      return Vd ? Vd(e) : "0";
    case "symbol":
      return Gd ? Gd(e) : "Symbol()";
    case "undefined":
      return Tr(e);
    case "function":
    case "object": {
      if (e === null)
        return Tr(e);
      const t = e, n = Sn(t, "toString");
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
function Sn(e, t) {
  for (; e !== null; ) {
    const i = Qb(e, t);
    if (i) {
      if (i.get)
        return yt(i.get);
      if (typeof i.value == "function")
        return yt(i.value);
    }
    e = Jb(e);
  }
  function n() {
    return null;
  }
  return n;
}
function ly(e) {
  try {
    return Nt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Kd = _t(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ic = _t(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ac = _t(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), cy = _t(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), rc = _t(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), uy = _t(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Wd = _t(["#text"]), qd = _t(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), sc = _t(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Yd = _t(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ys = _t(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), dy = Tt(/{{[\w\W]*|^[\w\W]*}}/g), fy = Tt(/<%[\w\W]*|^[\w\W]*%>/g), hy = Tt(/\${[\w\W]*/g), py = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), vy = Tt(/^aria-[\-\w]+$/), Xd = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), gy = Tt(/^(?:\w+script|data):/i), my = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), by = Tt(/^html$/i), yy = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), Zd = Tt(/<[/\w!]/g), Jd = Tt(/<[/\w]/g), _y = Tt(/<\/no(script|embed|frames)/i), wy = Tt(/\/>/i), en = {
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
}, pp = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Sy = _t(je({}, pp)), Cy = (function() {
  const e = {};
  return Zi(pp, (t) => {
    e[t] = Tt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), _t(e);
})(), Ty = function() {
  return typeof window > "u" ? null : window;
}, Ey = function(t, n) {
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
}, Qd = function() {
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
}, _i = function(t, n, i, a) {
  return Wt(t, n) && za(t[n]) ? je(a.base ? tn(a.base) : {}, t[n], a.transform) : i;
}, oc = function(t, n, i) {
  const a = Wt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? tn(a) : i();
};
function vp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ty();
  const t = (ee) => vp(ee);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== en.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, f = e.NamedNodeMap;
  f === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, S = o.prototype, E = Sn(S, "cloneNode"), x = Sn(S, "remove"), A = Sn(S, "nextSibling"), O = Sn(S, "childNodes"), D = Sn(S, "parentNode"), F = Sn(S, "shadowRoot"), W = Sn(S, "attributes"), I = s && s.prototype ? Sn(s.prototype, "nodeType") : null, P = s && s.prototype ? Sn(s.prototype, "nodeName") : null, ce = s && s.prototype ? Sn(s.prototype, "ownerDocument") : null, J = function(y) {
    return I ? I(y) : y.nodeType;
  }, fe = function(y) {
    return P ? P(y) : y.nodeName;
  };
  if (typeof r == "function") {
    const ee = n.createElement("template");
    ee.content && ee.content.ownerDocument && (n = ee.content.ownerDocument);
  }
  let Y, le = "", be, Q = !1, ie = 0;
  const $ = function() {
    if (ie > 0)
      throw qi('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, z = function(y) {
    $(), ie++;
    try {
      return Y.createHTML(y);
    } finally {
      ie--;
    }
  }, X = function(y) {
    $(), ie++;
    try {
      return Y.createScriptURL(y);
    } finally {
      ie--;
    }
  }, oe = function() {
    return Q || (be = Ey(h, a), Q = !0), be;
  }, ne = n, pe = ne.implementation, ve = ne.createNodeIterator, we = ne.createDocumentFragment, ye = ne.getElementsByTagName, Ge = i.importNode;
  let Ee = Qd();
  t.isSupported = typeof fp == "function" && typeof D == "function" && pe && pe.createHTMLDocument !== void 0;
  const ot = dy, lt = fy, ft = hy, ht = py, Je = vy, Vt = gy, B = my, m = yy;
  let T = Xd, k = null;
  const L = je({}, [...Kd, ...ic, ...ac, ...rc, ...Wd]);
  let N = null;
  const U = je({}, [...qd, ...sc, ...Yd, ...Ys]);
  let q = Object.seal(Ra(null, {
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
  const G = Object.seal(Ra(null, {
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
  let ge = !0, re = !0, me = !1, Ce = !0, Ne = !1, Pe = !0, $e = !1, tt = !1, rt = null, ct = null, pt = !1, wt = !1, qt = !1, Ve = !1, zt = !0, ui = !1;
  const Mi = "user-content-";
  let Fi = !0, fa = !1, on = {}, ln = null;
  const _s = je({}, [
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
  const Yt = je({}, ["audio", "video", "img", "source", "image", "track"]);
  let Va = null;
  const Ss = je({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ha = "http://www.w3.org/1998/Math/MathML", pa = "http://www.w3.org/2000/svg", cn = "http://www.w3.org/1999/xhtml";
  let di = cn, Ga = !1, Ka = null;
  const Il = je({}, [ha, pa, cn], nc), Cs = _t(["mi", "mo", "mn", "ms", "mtext"]);
  let Wa = je({}, Cs);
  const Ts = _t(["annotation-xml"]);
  let qa = je({}, Ts);
  const Pl = je({}, ["title", "style", "font", "a", "script"]);
  let fi = null;
  const Ya = ["application/xhtml+xml", "text/html"], Xa = "text/html";
  let st = null, On = null;
  const Es = n.createElement("form"), As = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, va = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (On && On === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = tn(y), fi = // eslint-disable-next-line unicorn/prefer-includes
    Ya.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Xa : y.PARSER_MEDIA_TYPE, st = fi === "application/xhtml+xml" ? nc : Lr, k = _i(y, "ALLOWED_TAGS", L, {
      transform: st
    }), N = _i(y, "ALLOWED_ATTR", U, {
      transform: st
    }), Ka = _i(y, "ALLOWED_NAMESPACES", Il, {
      transform: nc
    }), Va = _i(y, "ADD_URI_SAFE_ATTR", Ss, {
      transform: st,
      base: Ss
    }), ws = _i(y, "ADD_DATA_URI_TAGS", Yt, {
      transform: st,
      base: Yt
    }), ln = _i(y, "FORBID_CONTENTS", _s, {
      transform: st
    }), V = _i(y, "FORBID_TAGS", tn({}), {
      transform: st
    }), Z = _i(y, "FORBID_ATTR", tn({}), {
      transform: st
    }), on = Wt(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? tn(y.USE_PROFILES) : y.USE_PROFILES : !1, ge = y.ALLOW_ARIA_ATTR !== !1, re = y.ALLOW_DATA_ATTR !== !1, me = y.ALLOW_UNKNOWN_PROTOCOLS || !1, Ce = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ne = y.SAFE_FOR_TEMPLATES || !1, Pe = y.SAFE_FOR_XML !== !1, $e = y.WHOLE_DOCUMENT || !1, wt = y.RETURN_DOM || !1, qt = y.RETURN_DOM_FRAGMENT || !1, Ve = y.RETURN_TRUSTED_TYPE || !1, pt = y.FORCE_BODY || !1, zt = y.SANITIZE_DOM !== !1, ui = y.SANITIZE_NAMED_PROPS || !1, Fi = y.KEEP_CONTENT !== !1, fa = y.IN_PLACE || !1, T = ly(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : Xd, di = typeof y.NAMESPACE == "string" ? y.NAMESPACE : cn, Wa = oc(
      y,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => je({}, Cs)
      // Default built-in map
    ), qa = oc(
      y,
      "HTML_INTEGRATION_POINTS",
      () => je({}, Ts)
      // Default built-in map
    );
    const R = oc(y, "CUSTOM_ELEMENT_HANDLING", () => Ra(null));
    if (q = Ra(null), Wt(R, "tagNameCheck") && As(R.tagNameCheck) && (q.tagNameCheck = R.tagNameCheck), Wt(R, "attributeNameCheck") && As(R.attributeNameCheck) && (q.attributeNameCheck = R.attributeNameCheck), Wt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), Tt(q), Ne && (re = !1), qt && (wt = !0), on && (k = je({}, Wd), N = Ra(null), on.html === !0 && (je(k, Kd), je(N, qd)), on.svg === !0 && (je(k, ic), je(N, sc), je(N, Ys)), on.svgFilters === !0 && (je(k, ac), je(N, sc), je(N, Ys)), on.mathMl === !0 && (je(k, rc), je(N, Yd), je(N, Ys))), G.tagCheck = null, G.attributeCheck = null, Wt(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? G.tagCheck = y.ADD_TAGS : za(y.ADD_TAGS) && (k === L && (k = tn(k)), je(k, y.ADD_TAGS, st))), Wt(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? G.attributeCheck = y.ADD_ATTR : za(y.ADD_ATTR) && (N === U && (N = tn(N)), je(N, y.ADD_ATTR, st))), Wt(y, "ADD_FORBID_CONTENTS") && za(y.ADD_FORBID_CONTENTS) && (ln === _s && (ln = tn(ln)), je(ln, y.ADD_FORBID_CONTENTS, st)), Fi && (k["#text"] = !0), $e && je(k, ["html", "head", "body"]), k.table && (je(k, ["tbody"]), delete V.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw qi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw qi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const H = Y;
      Y = y.TRUSTED_TYPES_POLICY;
      try {
        le = z("");
      } catch (se) {
        throw Y = H, se;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (Y = void 0, le = "") : (Y === void 0 && (Y = oe()), Y && typeof le == "string" && (le = z("")));
    _t && _t(y), On = y;
  }, Za = je({}, [...ic, ...ac, ...cy]), ks = je({}, [...rc, ...uy]), Ja = function(y, R, H) {
    return R.namespaceURI === cn ? y === "svg" : R.namespaceURI === ha ? y === "svg" && (H === "annotation-xml" || Wa[H]) : !!Za[y];
  }, Qa = function(y, R, H) {
    return R.namespaceURI === cn ? y === "math" : R.namespaceURI === pa ? y === "math" && qa[H] : !!ks[y];
  }, Os = function(y, R, H) {
    return R.namespaceURI === pa && !qa[H] || R.namespaceURI === ha && !Wa[H] ? !1 : !ks[y] && (Pl[y] || !Za[y]);
  }, xs = function(y) {
    let R = D(y);
    (!R || !R.tagName) && (R = {
      namespaceURI: di,
      tagName: "template"
    });
    const H = Lr(y.tagName), se = Lr(R.tagName);
    return Ka[y.namespaceURI] ? y.namespaceURI === pa ? Ja(H, R, se) : y.namespaceURI === ha ? Qa(H, R, se) : y.namespaceURI === cn ? Os(H, R, se) : !!(fi === "application/xhtml+xml" && Ka[y.namespaceURI]) : !1;
  }, xn = function(y) {
    Sr(t.removed, {
      element: y
    });
    try {
      D(y).removeChild(y);
    } catch {
      if (x(y), !D(y))
        throw qi("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ns = function(y, R, H) {
    try {
      y.removeAttributeNode(R);
    } catch {
      try {
        y.removeAttribute(H);
      } catch {
      }
    }
  }, zi = function(y) {
    Ui(y);
    const R = O(y);
    if (R) {
      const se = [];
      Zi(R, (ue) => {
        Sr(se, ue);
      }), Zi(se, (ue) => {
        try {
          x(ue);
        } catch {
        }
      });
    }
    const H = W(y);
    if (H)
      for (let se = H.length - 1; se >= 0; --se) {
        const ue = H[se], he = ue && ue.name;
        typeof he == "string" && Ns(y, ue, he);
      }
  }, Nn = function(y, R, H) {
    if (!H)
      try {
        H = R.getAttributeNode(y);
      } catch {
        H = null;
      }
    Sr(t.removed, {
      attribute: H || null,
      from: R
    });
    try {
      H ? R.removeAttributeNode(H) : R.removeAttribute(y);
    } catch {
      try {
        R.removeAttribute(y);
      } catch {
      }
    }
    if (y === "is")
      if (wt || qt)
        try {
          xn(R);
        } catch {
        }
      else
        try {
          R.setAttribute(y, "");
        } catch {
        }
  }, Ls = function(y) {
    const R = W(y);
    if (R)
      for (let H = R.length - 1; H >= 0; --H) {
        const se = R[H], ue = se && se.name;
        typeof ue != "string" || N[st(ue)] || Ns(y, se, ue);
      }
  }, Ui = function(y) {
    const R = [y];
    for (; R.length > 0; ) {
      const H = R.pop();
      J(H) === en.element && Ls(H);
      const ue = O(H);
      if (ue)
        for (let he = ue.length - 1; he >= 0; --he)
          R.push(ue[he]);
    }
  }, Rs = function(y, R) {
    return Pe ? y === "patchsrc" ? !0 : y === "for" && R !== "label" && R !== "output" : !1;
  }, $l = function(y) {
    if (!Pe)
      return;
    const R = [y];
    for (; R.length > 0; ) {
      const H = R.pop(), se = J(H);
      if (se === en.processingInstruction || se === en.comment && Nt(Jd, H.data)) {
        try {
          x(H);
        } catch {
        }
        continue;
      }
      if (se === en.element) {
        const he = H, Qe = st(fe(H));
        try {
          he.hasAttribute && he.hasAttribute("patchsrc") && he.removeAttribute("patchsrc"), he.hasAttribute && he.hasAttribute("for") && Rs("for", Qe) && he.removeAttribute("for");
        } catch {
        }
      }
      const ue = O(H);
      if (ue)
        for (let he = ue.length - 1; he >= 0; --he)
          R.push(ue[he]);
    }
  }, er = function(y) {
    let R = null, H = null;
    if (pt)
      y = "<remove></remove>" + y;
    else {
      const he = jd(y, /^[\r\n\t ]+/);
      H = he && he[0];
    }
    fi === "application/xhtml+xml" && di === cn && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const se = Y ? z(y) : y;
    if (di === cn)
      try {
        R = new u().parseFromString(se, fi);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = pe.createDocument(di, "template", null);
      try {
        R.documentElement.innerHTML = Ga ? le : se;
      } catch {
      }
    }
    const ue = R.body || R.documentElement;
    return y && H && ue.insertBefore(n.createTextNode(H), ue.childNodes[0] || null), di === cn ? ye.call(R, $e ? "html" : "body")[0] : $e ? R.documentElement : ue;
  }, Ut = function(y) {
    const R = ce ? ce(y) : y.ownerDocument;
    return ve.call(
      R || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, ga = function(y) {
    return y = Cr(y, ot, " "), y = Cr(y, lt, " "), y = Cr(y, ft, " "), y;
  }, tr = function(y) {
    var R;
    y.normalize();
    const H = ce ? ce(y) : y.ownerDocument, se = ve.call(
      H || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ue = se.nextNode();
    for (; ue; )
      ue.data = ga(ue.data), ue = se.nextNode();
    const he = (R = y.querySelectorAll) === null || R === void 0 ? void 0 : R.call(y, "template");
    he && Zi(he, (Qe) => {
      hi(Qe.content) && tr(Qe.content);
    });
  }, ma = function(y) {
    const R = P ? P(y) : null;
    return typeof R != "string" || st(R) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== W(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== I(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    y.childNodes !== O(y);
  }, hi = function(y) {
    if (!I || typeof y != "object" || y === null)
      return !1;
    try {
      return I(y) === en.documentFragment;
    } catch {
      return !1;
    }
  }, Ln = function(y) {
    if (!I || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof I(y) == "number";
    } catch {
      return !1;
    }
  };
  function un(ee, y, R) {
    ee.length !== 0 && Zi(ee, (H) => {
      H.call(t, y, R, On);
    });
  }
  const Dl = function(y, R) {
    return !!(Pe && y.hasChildNodes() && !Ln(y.firstElementChild) && Nt(Zd, y.textContent) && Nt(Zd, y.innerHTML) || Pe && y.namespaceURI === cn && Sy[R] && (Ln(y.firstElementChild) || typeof y.textContent == "string" && Nt(Cy[R], y.textContent)) || y.nodeType === en.processingInstruction || Pe && y.nodeType === en.comment && Nt(Jd, y.data));
  }, ba = function(y, R) {
    if (y instanceof RegExp)
      return Nt(y, R);
    if (y instanceof Function) {
      for (var H = arguments.length, se = new Array(H > 2 ? H - 2 : 0), ue = 2; ue < H; ue++)
        se[ue - 2] = arguments[ue];
      return !!y(R, ...se);
    }
    return !1;
  }, ya = function(y, R, H) {
    if (!V[R] && wa(R) && ba(q.tagNameCheck, R))
      return !1;
    if (Fi && !ln[R]) {
      const se = D(y), ue = O(y);
      if (ue && se) {
        const he = ue.length;
        for (let Qe = he - 1; Qe >= 0; --Qe) {
          const Ke = y === H ? E(ue[Qe], !0) : ue[Qe];
          se.insertBefore(Ke, A(y));
        }
      }
    }
    return xn(y), !0;
  }, Is = function(y, R, H, se) {
    return y.length === 0 ? R : R === H || R === se ? tn(R) : R;
  }, _a = function(y, R) {
    return y === R || D(y) !== null ? !1 : (fa && Ui(y), !0);
  }, Bi = function(y, R) {
    if (un(Ee.beforeSanitizeElements, y, null), _a(y, R))
      return !0;
    if (ma(y))
      return xn(y), !0;
    const H = st(fe(y));
    if (k = Is(Ee.uponSanitizeElement, k, L, rt), un(Ee.uponSanitizeElement, y, {
      tagName: H,
      allowedTags: k
    }), _a(y, R))
      return !0;
    if (Dl(y, H))
      return xn(y), !0;
    if (V[H] || !(G.tagCheck instanceof Function && G.tagCheck(H)) && !k[H]) {
      const ue = ya(y, H, R);
      return ue === !1 && un(Ee.afterSanitizeElements, y, null), ue;
    }
    if (J(y) === en.element && !xs(y) || (H === "noscript" || H === "noembed" || H === "noframes") && Nt(_y, y.innerHTML))
      return xn(y), !0;
    if (Ne && y.nodeType === en.text) {
      const ue = ga(y.textContent);
      y.textContent !== ue && (Sr(t.removed, {
        element: y.cloneNode()
      }), y.textContent = ue);
    }
    return un(Ee.afterSanitizeElements, y, null), !1;
  }, nr = function(y, R, H) {
    if (Z[R] || Rs(R, y) || zt && (R === "id" || R === "name") && (H in n || H in Es))
      return !1;
    const se = N[R] || G.attributeCheck instanceof Function && G.attributeCheck(R, y);
    return re && Nt(ht, R) || ge && Nt(Je, R) ? !0 : se ? Va[R] || Nt(T, Cr(H, B, "")) || (R === "src" || R === "xlink:href" || R === "href") && y !== "script" && Hd(H, "data:") === 0 && ws[y] || me && !Nt(Vt, Cr(H, B, "")) ? !0 : !H : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      wa(y) && ba(q.tagNameCheck, y) && ba(q.attributeNameCheck, R, y) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      R === "is" && q.allowCustomizedBuiltInElements && ba(q.tagNameCheck, H)
    );
  }, Ps = je({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), wa = function(y) {
    return !Ps[Lr(y)] && Nt(m, y);
  }, Xt = function(y, R, H, se) {
    if (Y && typeof h == "object" && typeof h.getAttributeType == "function" && !H)
      switch (h.getAttributeType(y, R)) {
        case "TrustedHTML":
          return z(se);
        case "TrustedScriptURL":
          return X(se);
      }
    return se;
  }, Sa = function(y, R, H, se) {
    try {
      H ? y.setAttributeNS(H, R, se) : y.setAttribute(R, se), ma(y) ? xn(y) : Bd(t.removed);
    } catch {
      Nn(R, y);
    }
  }, ir = function(y) {
    un(Ee.beforeSanitizeAttributes, y, null);
    const R = y.attributes;
    if (!R || ma(y))
      return;
    N = Is(Ee.uponSanitizeAttribute, N, U, ct);
    const H = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let se = R.length;
    const ue = st(y.nodeName);
    for (; se--; ) {
      const he = R[se], Qe = he.name, Ke = he.namespaceURI, ut = he.value, St = st(Qe), Zt = ut;
      let vt = Qe === "value" ? Zt : ny(Zt);
      if (H.attrName = St, H.attrValue = vt, H.keepAttr = !0, H.forceKeepAttr = void 0, un(Ee.uponSanitizeAttribute, y, H), vt = H.attrValue, ui && (St === "id" || St === "name") && Hd(vt, Mi) !== 0 && (Nn(Qe, y, he), vt = Mi + vt), Pe && Nt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, vt)) {
        Nn(Qe, y, he);
        continue;
      }
      if (St === "attributename" && jd(vt, "href")) {
        Nn(Qe, y, he);
        continue;
      }
      if (!H.forceKeepAttr) {
        if (!H.keepAttr) {
          Nn(Qe, y, he);
          continue;
        }
        if (!Ce && Nt(wy, vt)) {
          Nn(Qe, y, he);
          continue;
        }
        if (Ne && (vt = ga(vt)), !nr(ue, St, vt)) {
          Nn(Qe, y, he);
          continue;
        }
        vt = Xt(ue, St, Ke, vt), vt !== Zt && Sa(y, Qe, Ke, vt);
      }
    }
    un(Ee.afterSanitizeAttributes, y, null);
  }, Ca = function(y) {
    let R = null;
    const H = Ut(y);
    for (un(Ee.beforeSanitizeShadowDOM, y, null); R = H.nextNode(); )
      if (un(Ee.uponSanitizeShadowNode, R, null), Bi(R, y), ir(R), hi(R.content) && Ca(R.content), J(R) === en.element) {
        const se = F(R);
        hi(se) && (ar(se), Ca(se));
      }
    un(Ee.afterSanitizeShadowDOM, y, null);
  }, ar = function(y) {
    const R = [{
      node: y,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const H = R.pop();
      if (H.shadow) {
        Ca(H.shadow);
        continue;
      }
      const se = H.node, he = J(se) === en.element, Qe = O(se);
      if (Qe)
        for (let Ke = Qe.length - 1; Ke >= 0; --Ke)
          R.push({
            node: Qe[Ke],
            shadow: null
          });
      if (he) {
        const Ke = P ? P(se) : null;
        if (typeof Ke == "string" && st(Ke) === "template") {
          const ut = se.content;
          hi(ut) && R.push({
            node: ut,
            shadow: null
          });
        }
      }
      if (he) {
        const Ke = F(se);
        hi(Ke) && R.push({
          node: null,
          shadow: Ke
        }, {
          node: Ke,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ee) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, H = null, se = null, ue = null;
    if (Ga = !ee, Ga && (ee = "<!-->"), typeof ee != "string" && !Ln(ee) && (ee = oy(ee), typeof ee != "string"))
      throw qi("dirty is not a string, aborting");
    if (!t.isSupported)
      return ee;
    tt ? (k = rt, N = ct) : va(y), (Ee.uponSanitizeElement.length > 0 || Ee.uponSanitizeAttribute.length > 0) && (k = tn(k)), Ee.uponSanitizeAttribute.length > 0 && (N = tn(N)), t.removed = [];
    const he = fa && typeof ee != "string" && Ln(ee);
    if (he) {
      $l(ee);
      const ut = fe(ee);
      if (typeof ut == "string") {
        const St = st(ut);
        if (!k[St] || V[St])
          throw zi(ee), qi("root node is forbidden and cannot be sanitized in-place");
      }
      if (ma(ee))
        throw zi(ee), qi("root node is clobbered and cannot be sanitized in-place");
      try {
        ar(ee);
      } catch (St) {
        throw zi(ee), St;
      }
    } else if (Ln(ee))
      R = er("<!---->"), H = R.ownerDocument.importNode(ee, !0), H.nodeType === en.element && H.nodeName === "BODY" || H.nodeName === "HTML" ? R = H : R.appendChild(H), ar(H);
    else {
      if (!wt && !Ne && !$e && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return Y && Ve ? z(ee) : ee;
      if (R = er(ee), !R)
        return wt ? null : Ve ? le : "";
    }
    R && pt && xn(R.firstChild);
    const Qe = he ? ee : R;
    try {
      const ut = Ut(Qe);
      for (; se = ut.nextNode(); )
        Bi(se, Qe), ir(se), hi(se.content) && Ca(se.content);
    } catch (ut) {
      throw he && (zi(ee), Zi(t.removed, (St) => {
        St.element && Ui(St.element);
      })), ut;
    }
    if (he)
      return Zi(t.removed, (ut) => {
        ut.element && Ui(ut.element);
      }), Ne && tr(ee), ee;
    if (wt) {
      if (Ne && tr(R), qt)
        for (ue = we.call(R.ownerDocument); R.firstChild; )
          ue.appendChild(R.firstChild);
      else
        ue = R;
      return (N.shadowroot || N.shadowrootmode) && (ue = Ge.call(i, ue, !0)), ue;
    }
    let Ke = $e ? R.outerHTML : R.innerHTML;
    return $e && k["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Nt(by, R.ownerDocument.doctype.name) && (Ke = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + Ke), Ne && (Ke = ga(Ke)), Y && Ve ? z(Ke) : Ke;
  }, t.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    va(ee), tt = !0, rt = k, ct = N;
  }, t.clearConfig = function() {
    On = null, tt = !1, rt = null, ct = null, Y = be, le = "";
  }, t.isValidAttribute = function(ee, y, R) {
    On || va({});
    const H = st(ee), se = st(y);
    return nr(H, se, R);
  }, t.addHook = function(ee, y) {
    typeof y == "function" && Wt(Ee, ee) && Sr(Ee[ee], y);
  }, t.removeHook = function(ee, y) {
    if (Wt(Ee, ee)) {
      if (y !== void 0) {
        const R = ey(Ee[ee], y);
        return R === -1 ? void 0 : ty(Ee[ee], R, 1)[0];
      }
      return Bd(Ee[ee]);
    }
  }, t.removeHooks = function(ee) {
    Wt(Ee, ee) && (Ee[ee] = []);
  }, t.removeAllHooks = function() {
    Ee = Qd();
  }, t;
}
var gp = vp();
function Eu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lc, ef;
function Ay() {
  if (ef) return lc;
  ef = 1;
  var e = /["'&<>]/;
  lc = t;
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
  return lc;
}
var ky = Ay();
const To = /* @__PURE__ */ Eu(ky);
function Oy() {
  return globalThis._nc_l10n_locale;
}
function xy() {
  return Oy().replaceAll(/_/g, "-");
}
function Al() {
  return globalThis._nc_l10n_language;
}
function Ny(e) {
  const t = Al();
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
function mp(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function _(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, s = typeof i == "number" ? i : typeof n == "number" ? n : void 0, o = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (A) => A, f = (o.sanitize ? gp.sanitize : l) || l, u = o.escape ? To : l, h = (A) => typeof A == "string" || typeof A == "number", S = (A, O, D) => A.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (F, W) => {
    if (O === void 0 || !(W in O))
      return u(F);
    const I = O[W];
    return h(I) ? u(`${I}`) : typeof I == "object" && h(I.value) ? (I.escape !== !1 ? To : l)(`${I.value}`) : u(F);
  });
  let x = (a?.bundle ?? mp(e)).translations[t] || t;
  return x = Array.isArray(x) ? x[0] : x, f(typeof r == "object" || s !== void 0 ? S(
    x,
    r,
    s
  ) : x);
}
function Dn(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? mp(e), l = o.translations[s];
  if (typeof l < "u") {
    const f = l;
    if (Array.isArray(f)) {
      const u = o.pluralFunction(i);
      return _(e, f[u], a, i, r);
    }
  }
  return i === 1 ? _(e, t, a, i, r) : _(e, n, a, i, r);
}
function Ly(e, t = Al()) {
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
class Eo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Eo.GLOBAL_SCOPE_PERSISTENT : Eo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class Ry {
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
    return new Eo(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function bp(e) {
  return new Ry(e);
}
function Iy() {
  try {
    return Tu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var cc, tf;
function yp() {
  if (tf) return cc;
  tf = 1;
  var e = {};
  return cc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, cc;
}
var uc, nf;
function _p() {
  if (nf) return uc;
  nf = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return uc = {
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
  }, uc;
}
var Xs = { exports: {} }, af;
function Py() {
  return af || (af = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = _p(), r = yp();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], f = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const S = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [S, i]
    ], x = (O) => {
      for (const [D, F] of E)
        O = O.split(`${D}*`).join(`${D}{0,${F}}`).split(`${D}+`).join(`${D}{1,${F}}`);
      return O;
    }, A = (O, D, F) => {
      const W = x(D), I = h++;
      r(O, I, D), u[O] = I, l[I] = D, f[I] = W, s[I] = new RegExp(D, F ? "g" : void 0), o[I] = new RegExp(W, F ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${S}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${S}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Xs, Xs.exports)), Xs.exports;
}
var dc, rf;
function $y() {
  if (rf) return dc;
  rf = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return dc = (i) => i ? typeof i != "object" ? e : i : t, dc;
}
var fc, sf;
function Dy() {
  if (sf) return fc;
  sf = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return fc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, fc;
}
var hc, of;
function wp() {
  if (of) return hc;
  of = 1;
  const e = yp(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = _p(), { safeRe: i, t: a } = Py(), r = $y(), { compareIdentifiers: s } = Dy(), o = (f, u) => {
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
  return hc = l, hc;
}
var pc, lf;
function My() {
  if (lf) return pc;
  lf = 1;
  const e = wp();
  return pc = (n, i) => new e(n, i).major, pc;
}
var Fy = My();
const cf = /* @__PURE__ */ Eu(Fy);
var vc, uf;
function zy() {
  if (uf) return vc;
  uf = 1;
  const e = wp();
  return vc = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, vc;
}
var gc, df;
function Uy() {
  if (df) return gc;
  df = 1;
  const e = zy();
  return gc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, gc;
}
var By = Uy();
const jy = /* @__PURE__ */ Eu(By);
class Hy {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !jy(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : cf(t.getVersion()) !== cf(this.getVersion()) && console.warn(
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
class Vy {
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
function Au() {
  return Er !== null ? Er : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Er = new Hy(window._nc_event_bus) : Er = window._nc_event_bus = new Vy(), Er);
}
function Sp(e, t) {
  Au().subscribe(e, t);
}
function Gy(e, t) {
  Au().unsubscribe(e, t);
}
function ii(e, ...t) {
  Au().emit(e, ...t);
}
const Cp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ky = Object.prototype.toString, Wy = (e) => Ky.call(e) === "[object Object]", ka = () => {
}, qy = /* @__PURE__ */ Yy();
function Yy() {
  var e, t, n;
  return Cp && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function mc(e) {
  return Array.isArray(e) ? e : [e];
}
function Xy(e, t, n) {
  return et(e, t, {
    ...n,
    immediate: !0
  });
}
const Tp = Cp ? window : void 0;
function Rr(e) {
  var t;
  const n = ti(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ua(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = K(() => {
    const i = mc(ti(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Xy(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Rr(r))) !== null && i !== void 0 ? i : [Tp].filter((r) => r != null),
      mc(ti(n.value ? e[1] : e[0])),
      mc(b(n.value ? e[2] : e[1])),
      ti(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const f = Wy(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((S) => r.map((E) => t(h, S, E, f))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let ff = !1;
function hf(e, t, n = {}) {
  const { window: i = Tp, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: ka,
    cancel: ka,
    trigger: ka
  } : ka;
  if (qy && !ff) {
    ff = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((D) => D.addEventListener("click", ka, O)), i.document.documentElement.addEventListener("click", ka, O);
  }
  let l = !0;
  const f = (O) => ti(a).some((D) => {
    if (typeof D == "string") return Array.from(i.document.querySelectorAll(D)).some((F) => F === O.target || O.composedPath().includes(F));
    {
      const F = Rr(D);
      return F && (O.target === F || O.composedPath().includes(F));
    }
  });
  function u(O) {
    const D = ti(O);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function h(O, D) {
    const F = ti(O), W = F.$.subTree && F.$.subTree.children;
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
    Ua(i, "click", (O) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), S(O));
    }, {
      passive: !0,
      capture: r
    }),
    Ua(i, "pointerdown", (O) => {
      const D = Rr(e);
      l = !f(O) && !!(D && !O.composedPath().includes(D));
    }, { passive: !0 }),
    s && Ua(i, "blur", (O) => {
      setTimeout(() => {
        const D = Rr(e);
        let F = i.document.activeElement;
        for (; F?.shadowRoot; ) F = F.shadowRoot.activeElement;
        F?.tagName === "IFRAME" && !D?.contains(i.document.activeElement) && t(O);
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
function Zy(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), f = K(() => o.x - l.x), u = K(() => o.y - l.y), { max: h, abs: S } = Math, E = K(() => h(S(f.value), S(u.value)) >= n), x = /* @__PURE__ */ gh(!1), A = K(() => E.value ? S(f.value) > S(u.value) ? f.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), O = (J) => [J.touches[0].clientX, J.touches[0].clientY], D = (J, fe) => {
    o.x = J, o.y = fe;
  }, F = (J, fe) => {
    l.x = J, l.y = fe;
  }, W = {
    passive: s,
    capture: !s
  }, I = (J) => {
    x.value && a?.(J, A.value), x.value = !1;
  }, P = [
    Ua(e, "touchstart", (J) => {
      if (J.touches.length !== 1) return;
      const [fe, Y] = O(J);
      D(fe, Y), F(fe, Y), r?.(J);
    }, W),
    Ua(e, "touchmove", (J) => {
      if (J.touches.length !== 1) return;
      const [fe, Y] = O(J);
      F(fe, Y), W.capture && !W.passive && Math.abs(f.value) > Math.abs(u.value) && J.preventDefault(), !x.value && E.value && (x.value = !0), x.value && i?.(J);
    }, W),
    Ua(e, ["touchend", "touchcancel"], I, W)
  ];
  return {
    isSwiping: x,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: f,
    lengthY: u,
    stop: () => P.forEach((J) => J())
  };
}
var Jy = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Am(), r = Em(), s = /* @__PURE__ */ xe([]), o = K(() => s.value.reduce((B, m) => (B[~~m.id] = m) && B, {})), l = K(() => s.value.length), f = /* @__PURE__ */ xe(null), u = /* @__PURE__ */ xe(!1), h = /* @__PURE__ */ xe({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), S = /* @__PURE__ */ xe({
      splitter: null,
      timeoutId: null
    }), E = K(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), x = () => {
      document.addEventListener("mousemove", D, { passive: !1 }), document.addEventListener("mouseup", F), "ontouchstart" in window && (document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", F));
    }, A = () => {
      document.removeEventListener("mousemove", D, { passive: !1 }), document.removeEventListener("mouseup", F), "ontouchstart" in window && (document.removeEventListener("touchmove", D, { passive: !1 }), document.removeEventListener("touchend", F));
    }, O = (B, m) => {
      let T = B.target.closest(".splitpanes__splitter");
      if (T) {
        let { left: k, top: L } = T.getBoundingClientRect(), { clientX: N, clientY: U } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
        h.value.cursorOffset = i.horizontal ? U - L : N - k;
      }
      x(), h.value.mouseDown = !0, h.value.activeSplitter = m, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, D = (B) => {
      h.value.mouseDown && (B.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        Y(J(B)), Je("resize", { event: B }, !0);
      }));
    }, F = (B) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), Je("resized", { event: B }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, W = (B, m) => {
      "ontouchstart" in window && (B.preventDefault(), S.value.splitter === m ? (clearTimeout(S.value.timeoutId), S.value.timeoutId = null, I(B, m), S.value.splitter = null) : (S.value.splitter = m, S.value.timeoutId = setTimeout(() => S.value.splitter = null, 500))), h.value.dragging || Je("splitter-click", {
        event: B,
        index: m
      }, !0);
    }, I = (B, m) => {
      if (Je("splitter-dblclick", {
        event: B,
        index: m
      }, !0), i.maximizePanes) {
        let T = 0;
        s.value = s.value.map((k, L) => (k.size = L === m ? k.max : k.min, L !== m && (T += k.min), k)), s.value[m].size -= T, Je("pane-maximize", {
          event: B,
          index: m,
          pane: s.value[m]
        }), Je("resized", {
          event: B,
          index: m
        }, !0);
      }
    }, P = (B, m) => {
      if (!i.keyboardStep) return;
      let T = i.horizontal ? B.key === "ArrowDown" : B.key === "ArrowRight", k = i.horizontal ? B.key === "ArrowUp" : B.key === "ArrowLeft";
      if (!T && !k) return;
      B.preventDefault(), h.value.activeSplitter = m;
      let L = (T ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), N = Q(m) + s.value[m].size;
      le(Math.min(Math.max(N + L * i.keyboardStep, 0), 100)), Je("resize", { event: B }, !0), Je("resized", { event: B }, !0), h.value.activeSplitter = null;
    }, ce = (B, m) => {
      let T = o.value[m];
      T && Je("pane-click", {
        event: B,
        index: T.index,
        pane: T
      });
    }, J = (B) => {
      let m = f.value.getBoundingClientRect(), { clientX: T, clientY: k } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
      return {
        x: T - (i.horizontal ? 0 : h.value.cursorOffset) - m.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - m.top
      };
    }, fe = (B) => {
      B = B[i.horizontal ? "y" : "x"];
      let m = f.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (B = m - B), B * 100 / m;
    }, Y = (B) => {
      le(fe(B));
    }, le = (B) => {
      let m = h.value.activeSplitter;
      if (m === null || m >= s.value.length - 1) return;
      let T = {
        prevPanesSize: Q(m),
        nextPanesSize: ie(m),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : T.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : T.nextPanesSize);
      B = Math.max(Math.min(B, L), k);
      let N = [m, m + 1], U = s.value[N[0]] || null, q = s.value[N[1]] || null, V = U !== null && U.max < 100 && B >= U.max + T.prevPanesSize, Z = q !== null && q.max < 100 && B <= 100 - (q.max + ie(m + 1));
      if (V || Z) {
        V ? (U.size = U.max, q.size = Math.min(Math.max(100 - U.max - T.prevPanesSize - T.nextPanesSize, q.min), q.max)) : (U.size = Math.min(Math.max(100 - q.max - T.prevPanesSize - ie(m + 1), U.min), U.max), q.size = q.max);
        return;
      }
      if (i.pushOtherPanes) {
        let G = be(T, B);
        if (!G) return;
        ({ sums: T, panesToResize: N } = G), U = s.value[N[0]] || null, q = s.value[N[1]] || null;
      }
      U !== null && (U.size = Math.min(Math.max(B - T.prevPanesSize - T.prevReachedMinPanes, U.min), U.max)), q !== null && (q.size = Math.min(Math.max(100 - B - T.nextPanesSize - T.nextReachedMinPanes, q.min), q.max));
    }, be = (B, m) => {
      let T = h.value.activeSplitter, k = [T, T + 1];
      if (m < B.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = $(T).index, B.prevReachedMinPanes = 0, k[0] < T && s.value.forEach((L, N) => {
          N > k[0] && N <= T && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), k[0] === void 0) return B.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((L, N) => {
          N > 0 && N <= T && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), s.value[k[1]].size = 100 - B.prevReachedMinPanes - s.value[0].min - B.prevPanesSize - B.nextPanesSize, null;
        B.prevPanesSize = Q(k[0]);
      }
      return m > 100 - B.nextPanesSize - s.value[k[1]].min && (k[1] = z(T).index, B.nextReachedMinPanes = 0, k[1] > T + 1 && s.value.forEach((L, N) => {
        N > T && N < k[1] && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), B.nextPanesSize = k[1] === void 0 ? 0 : ie(k[1] - 1), k[1] === void 0) ? (B.nextReachedMinPanes = 0, s.value.forEach((L, N) => {
        N >= T + 1 && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - B.prevPanesSize - ie(k[0] - 1)), null) : {
        sums: B,
        panesToResize: k
      };
    }, Q = (B) => s.value.reduce((m, T, k) => m + (k < B ? T.size : 0), 0), ie = (B) => s.value.reduce((m, T, k) => m + (k > B + 1 ? T.size : 0), 0), $ = (B) => [...s.value].reverse().find((m) => m.index < B && m.size > m.min) || {}, z = (B) => s.value.find((m) => m.index > B + 1 && m.size > m.min) || {}, X = () => {
      let B = Array.from(f.value?.children || []);
      for (let m of B) {
        let T = m.classList.contains("splitpanes__pane"), k = m.classList.contains("splitpanes__splitter");
        !T && !k && (m.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, oe = (B, m, T = !1) => {
      let k = B - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), T || (L.onmousedown = (N) => O(N, k), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (N) => O(N, k)), L.onclick = (N) => W(N, k + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (N) => P(N, k))), L.ondblclick = (N) => I(N, k + 1), m.parentNode.insertBefore(L, m);
    }, ne = (B) => {
      B.onmousedown = null, B.onclick = null, B.ondblclick = null, B.onkeydown = null, B.remove();
    }, pe = () => {
      let B = Array.from(f.value?.children || []);
      for (let T of B) T.className.includes("splitpanes__splitter") && ne(T);
      let m = 0;
      for (let T of B) T.className.includes("splitpanes__pane") && (!m && i.firstSplitter ? oe(m, T, !0) : m && oe(m, T), m++);
    }, ve = ({ uid: B, ...m }) => {
      let T = o.value[B];
      for (let [k, L] of Object.entries(m)) T[k] = L;
    }, we = !1, ye = (B) => {
      let m = -1;
      Array.from(f.value?.children || []).some((T) => (T.className.includes("splitpanes__pane") && m++, T.isSameNode(B.el))), s.value.splice(m, 0, {
        ...B,
        index: m
      }), s.value.forEach((T, k) => T.index = k), u.value && !we && (we = !0, nn(() => {
        pe(), Ee({ addedPane: s.value[m] }), Je("pane-add", { pane: s.value[m] }), we = !1;
      }));
    }, Ge = (B) => {
      let m = s.value.findIndex((k) => k.id === B);
      s.value[m].el = null;
      let T = s.value.splice(m, 1)[0];
      s.value.forEach((k, L) => k.index = L), nn(() => {
        pe(), Je("pane-remove", { pane: T }), Ee({ removedPane: {
          ...T
        } });
      });
    }, Ee = (B = {}) => {
      !B.addedPane && !B.removedPane ? lt() : s.value.some((m) => m.givenSize !== null || m.min || m.max < 100) ? ft(B) : ot(), u.value && Je("resized");
    }, ot = () => {
      let B = 100 / l.value, m = 100, T = [], k = [];
      for (let L of s.value) L.size = Math.max(Math.min(B, L.max), L.min), m -= L.size, L.size >= L.max && T.push(L.id), L.size <= L.min && k.push(L.id);
      Math.abs(m) > 0.1 && ht(m, T, k);
    }, lt = () => {
      let B = 100, m = [], T = [], k = 0;
      for (let N of s.value) B -= N.size, N.givenSize !== null && k++, N.size >= N.max && m.push(N.id), N.size <= N.min && T.push(N.id);
      let L = 100;
      if (B > 0.1) {
        for (let N of s.value) N.givenSize === null && (N.size = Math.max(Math.min(B / (l.value - k), N.max), N.min)), L -= N.size;
        L > 0.1 && ht(L, m, T);
      }
    }, ft = ({ addedPane: B, removedPane: m } = {}) => {
      let T = s.value.reduce((V, Z) => V + (Z.givenSize === null ? 0 : Z.givenSize), 0), k = s.value.filter((V) => V.givenSize === null).length, L = k > 0 ? (100 - T) / k : 0, N = 0, U = [], q = [];
      for (let V of s.value) N -= V.size, V.size >= V.max && U.push(V.id), V.size <= V.min && q.push(V.id);
      if (!(Math.abs(N) < 0.1)) {
        N = 100;
        for (let V of s.value) V.givenSize === null && (V.size = Math.max(Math.min(L, V.max), V.min)), N -= V.size, V.size >= V.max && U.push(V.id), V.size <= V.min && q.push(V.id);
        Math.abs(N) > 0.1 && ht(N, U, q);
      }
    }, ht = (B, m, T) => {
      let k;
      k = B > 0 ? B / (l.value - m.length) : B / (l.value - T.length), s.value.forEach((L, N) => {
        if (B > 0 && !m.includes(L.id)) {
          let U = Math.max(Math.min(L.size + k, L.max), L.min), q = U - L.size;
          B -= q, L.size = U;
        } else if (!T.includes(L.id)) {
          let U = Math.max(Math.min(L.size + k, L.max), L.min), q = U - L.size;
          B -= q, L.size = U;
        }
      }), Math.abs(B) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Je = (B, m = void 0, T = !1) => {
      let k = m?.index ?? h.value.activeSplitter ?? null;
      n(B, {
        ...m,
        ...k !== null && { index: k },
        ...T && k !== null && {
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
    et(() => i.firstSplitter, () => pe()), et(() => i.horizontal, (B) => nn(() => {
      n("direction-changed", {
        horizontal: B,
        panes: s.value.map((m) => ({
          min: m.min,
          max: m.max,
          size: m.size
        }))
      });
    })), Pi(() => {
      X(), pe(), Ee(), Je("ready"), u.value = !0;
    }), Ha(() => u.value = !1);
    let Vt = () => {
      let { class: B, ...m } = a;
      return Kt("div", {
        ref: f,
        class: [E.value, B],
        ...m
      }, r.default?.());
    };
    return vn("panes", s), vn("indexedPanes", o), vn("horizontal", K(() => i.horizontal)), vn("requestUpdate", ve), vn("onPaneAdd", ye), vn("onPaneRemove", Ge), vn("onPaneClick", ce), (B, m) => (w(), Fe(bu(Vt)));
  }
}), Qy = {
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
    let t = e, n = Pt("requestUpdate"), i = Pt("onPaneAdd"), a = Pt("horizontal"), r = Pt("onPaneRemove"), s = Pt("onPaneClick"), o = ua()?.uid, l = Pt("indexedPanes"), f = K(() => l.value[o]), u = /* @__PURE__ */ xe(null), h = K(() => {
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
    return et(() => h.value, (A) => n({
      uid: o,
      size: A
    })), et(() => S.value, (A) => n({
      uid: o,
      min: A
    })), et(() => E.value, (A) => n({
      uid: o,
      max: A
    })), Pi(() => {
      i({
        id: o,
        el: u.value,
        min: S.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Ha(() => r(o)), (A, O) => (w(), C("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: O[0] ||= (D) => b(s)(D, A._.uid),
      style: sn(x.value)
    }, [Ie(A.$slots, "default")], 4));
  }
}, e_ = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", t_ = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", n_ = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", i_ = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const ku = 1024, Ep = ku / 2, Ao = (e) => document.documentElement.clientWidth < e, Ap = /* @__PURE__ */ xe(Ao(ku)), kp = /* @__PURE__ */ xe(Ao(Ep));
window.addEventListener("resize", () => {
  Ap.value = Ao(ku), kp.value = Ao(Ep);
}, { passive: !0 });
function ys() {
  return /* @__PURE__ */ Jr(Ap);
}
function a_() {
  return /* @__PURE__ */ Jr(kp);
}
class r_ {
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
    return _("", t, n, void 0, { bundle: this.bundle });
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
    return Dn("", t, n, i, a, { bundle: this.bundle });
  }
}
class s_ {
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
    return this.setLanguage(Al().replace("-", "_"));
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
    const t = new r_((n) => Ly(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function o_() {
  return new s_();
}
const Op = o_().detectLanguage().build(), Ct = (...e) => Op.gettext(...e);
function $i(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Al() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        Op.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const l_ = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], c_ = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], u_ = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], d_ = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], f_ = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], h_ = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], p_ = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], v_ = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], g_ = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const m_ = /* @__PURE__ */ Symbol(""), [b_] = window.OC?.config?.version?.split(".") ?? [], xp = Number.parseInt(b_ ?? "35"), y_ = xp < 32, Di = xp < 34, __ = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function w_() {
  return Pt(__, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, S_ = { class: "button-vue__wrapper" }, C_ = { class: "button-vue__icon" }, T_ = { class: "button-vue__text" }, E_ = /* @__PURE__ */ xt({
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
    const n = e, i = t, { formBoxItemClass: a } = w_(), r = Pt(m_, null) !== null, s = K(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = K(() => s.value === "button" && typeof n.pressed == "boolean"), l = K(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), f = K(() => l.value.startsWith("tertiary")), u = K(() => n.alignment.split("-")[0]), h = K(() => n.alignment.includes("-")), S = Pt("NcPopover:trigger:attrs", () => ({}), !1), E = K(() => S()), x = K(() => {
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
    return (O, D) => (w(), Fe(bu(s.value), Ft({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": f.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": b(y_),
          "button-vue--legacy34": b(Di)
        },
        b(a)
      ]],
      "aria-label": e.ariaLabel
    }, x.value, { onClick: A }), {
      default: ke(() => [
        c("span", S_, [
          c("span", C_, [
            Ie(O.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", T_, [
            Ie(O.$slots, "default", {}, () => [
              Oe(g(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Bn = /* @__PURE__ */ Ze(E_, [["__scopeId", "data-v-47ce59a3"]]), A_ = ["aria-hidden", "aria-label"], k_ = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, O_ = ["d"], x_ = ["innerHTML"], N_ = /* @__PURE__ */ xt({
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
    _b((a) => ({
      fb515064: n.value
    }));
    const t = e, n = K(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = K(() => {
      if (!t.svg || t.path)
        return;
      const a = gp.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (w(), C("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Te(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (w(), C("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, x_)) : (w(), C("svg", k_, [
        c("path", { d: e.path }, null, 8, O_)
      ]))
    ], 10, A_));
  }
}), kl = /* @__PURE__ */ Ze(N_, [["__scopeId", "data-v-aaedb1c3"]]);
R_();
function L_(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), ii("csrf-token-update", { token: e, _internal: !0 }));
}
function R_() {
  Sp("csrf-token-update", ({ token: e, _internal: t }) => {
    t || L_(e);
  });
}
bp("public").persist().build();
let Oa;
function pf(e, t) {
  return e ? e.getAttribute(t) : null;
}
function I_() {
  if (Oa !== void 0)
    return Oa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = pf(e, "data-user");
  return t === null ? (Oa = null, Oa) : (Oa = {
    uid: t,
    displayName: pf(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Oa);
}
var gt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(gt || {});
class P_ {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + gt[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === gt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case gt.Debug:
          console.debug(this.formatMessage(n, gt.Debug, i), i);
          break;
        case gt.Info:
          console.info(this.formatMessage(n, gt.Info, i), i);
          break;
        case gt.Warn:
          console.warn(this.formatMessage(n, gt.Warn, i), i);
          break;
        case gt.Error:
          console.error(this.formatMessage(n, gt.Error, i), i);
          break;
        case gt.Fatal:
        default:
          console.error(this.formatMessage(n, gt.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(gt.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(gt.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(gt.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(gt.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(gt.Fatal, t, Object.assign({}, this.context, n));
  }
}
function $_(e) {
  return new P_(e);
}
class D_ {
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
    const t = I_();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? gt.Warn, window._oc_debug && (t.context.level = gt.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function M_() {
  return new D_($_);
}
const oa = M_().detectUser().setApp("@nextcloud/vue").build();
function F_(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Np = "missing-app-name";
try {
  Np = "library";
} catch {
  oa.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const z_ = Np;
let U_ = "";
try {
  U_ = "0.1.0-alpha.171";
} catch {
  oa.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Lp() {
  return Pt("appName", z_);
}
const B_ = F_(() => {
  const e = Tu("core", "apps", []), t = Lp();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), Hc = Ny();
$i(p_);
const j_ = /* @__PURE__ */ xt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = ys();
    et(t, n), Pi(() => {
      n(t.value);
    }), Ha(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && ii("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (w(), Fe(b(Bn), {
      "aria-label": b(Ct)("Go back to the list"),
      class: Te(["app-details-toggle", { "app-details-toggle--mobile": b(t) }]),
      title: b(Ct)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: ke(() => [
        _e(b(kl), {
          directional: "",
          path: b(e_)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), H_ = /* @__PURE__ */ Ze(j_, [["__scopeId", "data-v-a28923a1"]]), vf = bp("nextcloud").persist().build(), V_ = Iy().theming?.name ?? "Nextcloud", G_ = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: H_,
    Pane: Qy,
    Splitpanes: Jy
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
      appName: Lp(),
      localizedAppName: B_(),
      isMobile: ys(),
      isRtl: Hc
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
        return oa.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(V_), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = Zy(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? ii("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && ii("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      vf.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), oa.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(vf.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return oa.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, K_ = {
  key: 0,
  class: "hidden-visually"
}, W_ = { class: "app-content-wrapper__list" }, q_ = {
  key: 1,
  class: "app-content-wrapper"
};
function Y_(e, t, n, i, a, r) {
  const s = Ue("NcAppContentDetailsToggle"), o = Ue("Pane"), l = Ue("Splitpanes");
  return w(), C("main", {
    id: "app-content-vue",
    class: Te(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (w(), C("h1", K_, g(n.pageHeading), 1)) : j("", !0),
    e.$slots.list ? (w(), C(de, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (w(), C("div", {
        key: 0,
        class: Te(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (w(), Fe(s, {
          key: 0,
          onClick: ze(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : j("", !0),
        We(c("div", W_, [
          Ie(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Fa, !n.showDetails]
        ]),
        n.showDetails ? Ie(e.$slots, "default", { key: 1 }, void 0, !0) : j("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (w(), C("div", q_, [
        _e(l, {
          horizontal: n.layout === "horizontal-split",
          class: Te(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: ke(() => [
            _e(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: ke(() => [
                Ie(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            _e(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: ke(() => [
                Ie(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : j("", !0)
    ], 64)) : j("", !0),
    e.$slots.list ? j("", !0) : Ie(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const X_ = /* @__PURE__ */ Ze(G_, [["render", Y_], ["__scopeId", "data-v-51427d61"]]);
var Rp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], ko = /* @__PURE__ */ Rp.join(","), Ip = typeof Element > "u", ca = Ip ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Oo = !Ip && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, xo = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : xo(t.parentNode));
  return s;
}, Z_ = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Pp = function(t, n, i) {
  if (xo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(ko));
  return n && ca.call(t, ko) && a.unshift(t), a = a.filter(i), a;
}, No = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!xo(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, f = No(l, !0, i);
        i.flatten ? a.push.apply(a, f) : a.push({
          scopeParent: s,
          candidates: f
        });
      } else {
        var u = ca.call(s, ko);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), S = !xo(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && S) {
          var E = No(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: s,
            candidates: E
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, $p = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ta = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Z_(t)) && !$p(t) ? 0 : t.tabIndex;
}, J_ = function(t, n) {
  var i = ta(t);
  return i < 0 && n && !$p(t) ? 0 : i;
}, Q_ = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Dp = function(t) {
  return t.tagName === "INPUT";
}, e1 = function(t) {
  return Dp(t) && t.type === "hidden";
}, t1 = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, n1 = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, i1 = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Oo(t), i = function(o) {
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
  var r = n1(a, t.form);
  return !r || r === t;
}, a1 = function(t) {
  return Dp(t) && t.type === "radio";
}, r1 = function(t) {
  return a1(t) && !i1(t);
}, s1 = function(t) {
  var n, i = t && Oo(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var f, u, h;
      i = Oo(a), a = (f = i) === null || f === void 0 ? void 0 : f.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, gf = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, o1 = function(t, n) {
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
  var l = ca.call(t, "details>summary:first-of-type"), f = l ? t.parentElement : t;
  if (ca.call(f, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, S = Oo(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return gf(t);
        t.assignedSlot ? t = t.assignedSlot : !h && S !== t.ownerDocument ? t = S.host : t = h;
      }
      t = u;
    }
    if (s1(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return gf(t);
  return !1;
}, l1 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return ca.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Lo = function(t, n) {
  return !(n.disabled || e1(n) || o1(n, t) || // For a details element with a summary, the summary element gets the focus
  t1(n) || l1(n));
}, Vc = function(t, n) {
  return !(r1(n) || ta(n) < 0 || !Lo(t, n));
}, c1 = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Mp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = J_(o, s), f = s ? Mp(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, f) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: f
    });
  }), i.sort(Q_).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, u1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = No([t], n.includeContainer, {
    filter: Vc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: c1
  }) : i = Pp(t, n.includeContainer, Vc.bind(null, n)), Mp(i);
}, d1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = No([t], n.includeContainer, {
    filter: Lo.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Pp(t, n.includeContainer, Lo.bind(null, n)), i;
}, xa = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ca.call(t, ko) === !1 ? !1 : Vc(n, t);
}, f1 = /* @__PURE__ */ Rp.concat("iframe:not([inert]):not([inert] *)").join(","), bc = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ca.call(t, f1) === !1 ? !1 : Lo(n, t);
};
function Gc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function h1(e) {
  if (Array.isArray(e)) return Gc(e);
}
function mf(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Fp(e)) || t) {
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
function p1(e, t, n) {
  return (t = y1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function v1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function g1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function yf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bf(Object(n), !0).forEach(function(i) {
      p1(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bf(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function m1(e) {
  return h1(e) || v1(e) || Fp(e) || g1();
}
function b1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function y1(e) {
  var t = b1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Fp(e, t) {
  if (e) {
    if (typeof e == "string") return Gc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Gc(e, t) : void 0;
  }
}
var Qn = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = Qn.getActiveTrap(t);
    n !== i && Qn.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), Qn.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = Qn.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = Qn.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, _1 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, w1 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, zr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, S1 = function(t) {
  return zr(t) && !t.shiftKey;
}, C1 = function(t) {
  return zr(t) && t.shiftKey;
}, _f = function(t) {
  return setTimeout(t, 0);
}, Ar = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Zs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, T1 = [], Ou = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || T1, r = yf({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: S1,
    isKeyBackward: C1
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
  }, o, l = function($, z, X) {
    return $ && $[z] !== void 0 ? $[z] : r[X || z];
  }, f = function($, z) {
    var X = typeof z?.composedPath == "function" ? z.composedPath() : void 0;
    return s.containerGroups.findIndex(function(oe) {
      var ne = oe.container, pe = oe.tabbableNodes;
      return ne.contains($) || X?.includes(ne) || pe.find(function(ve) {
        return ve === $;
      });
    });
  }, u = function($) {
    var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = z.hasFallback, oe = X === void 0 ? !1 : X, ne = z.params, pe = ne === void 0 ? [] : ne, ve = r[$];
    if (typeof ve == "function" && (ve = ve.apply(void 0, m1(pe))), ve === !0 && (ve = void 0), !ve) {
      if (ve === void 0 || ve === !1)
        return ve;
      throw new Error("`".concat($, "` was specified but was not a node, or did not return a node"));
    }
    var we = ve;
    if (typeof ve == "string") {
      try {
        we = i.querySelector(ve);
      } catch (ye) {
        throw new Error("`".concat($, '` appears to be an invalid selector; error="').concat(ye.message, '"'));
      }
      if (!we && !oe)
        throw new Error("`".concat($, "` as selector refers to no known node"));
    }
    return we;
  }, h = function($) {
    var z = $.activeElement;
    return z ? z.shadowRoot && z.shadowRoot.activeElement !== null ? h(z.shadowRoot) : z : null;
  }, S = function() {
    var $ = u("initialFocus", {
      hasFallback: !0
    });
    if ($ === !1)
      return !1;
    if ($ === void 0 || $ && !bc($, r.tabbableOptions)) {
      var z = h(i);
      if (f(z) >= 0)
        $ = z;
      else {
        var X = s.tabbableGroups[0], oe = X && X.firstTabbableNode;
        $ = oe || u("fallbackFocus");
      }
    } else $ === null && ($ = u("fallbackFocus"));
    if (!$)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return $;
  }, E = function() {
    if (s.containerGroups = s.containers.map(function($) {
      var z = u1($, r.tabbableOptions), X = d1($, r.tabbableOptions), oe = z.length > 0 ? z[0] : void 0, ne = z.length > 0 ? z[z.length - 1] : void 0, pe = X.find(function(ye) {
        return xa(ye);
      }), ve = X.slice().reverse().find(function(ye) {
        return xa(ye);
      }), we = !!z.find(function(ye) {
        return ta(ye) > 0;
      });
      return {
        container: $,
        tabbableNodes: z,
        focusableNodes: X,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: we,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: oe,
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
          var Ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ot = z.indexOf(Ge);
          return ot < 0 ? Ee ? X.slice(X.indexOf(Ge) + 1).find(function(lt) {
            return xa(lt);
          }) : X.slice(0, X.indexOf(Ge)).reverse().find(function(lt) {
            return xa(lt);
          }) : z[ot + (Ee ? 1 : -1)];
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
      }), s.mostRecentlyFocusedNode = $, _1($) && $.select();
    }
  }, A = function($) {
    var z = u("setReturnFocus", {
      params: [$]
    });
    return z || (z === !1 ? !1 : $);
  }, O = function($) {
    var z = $.target, X = $.event, oe = $.isBackward, ne = oe === void 0 ? !1 : oe;
    z = z || Zs(X), E();
    var pe = null;
    if (s.tabbableGroups.length > 0) {
      var ve = f(z, X), we = ve >= 0 ? s.containerGroups[ve] : void 0;
      if (ve < 0)
        ne ? pe = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : pe = s.tabbableGroups[0].firstTabbableNode;
      else if (ne) {
        var ye = s.tabbableGroups.findIndex(function(ht) {
          var Je = ht.firstTabbableNode;
          return z === Je;
        });
        if (ye < 0 && (we.container === z || bc(z, r.tabbableOptions) && !xa(z, r.tabbableOptions) && !we.nextTabbableNode(z, !1)) && (ye = ve), ye >= 0) {
          var Ge = ye === 0 ? s.tabbableGroups.length - 1 : ye - 1, Ee = s.tabbableGroups[Ge];
          pe = ta(z) >= 0 ? Ee.lastTabbableNode : Ee.lastDomTabbableNode;
        } else zr(X) || (pe = we.nextTabbableNode(z, !1));
      } else {
        var ot = s.tabbableGroups.findIndex(function(ht) {
          var Je = ht.lastTabbableNode;
          return z === Je;
        });
        if (ot < 0 && (we.container === z || bc(z, r.tabbableOptions) && !xa(z, r.tabbableOptions) && !we.nextTabbableNode(z)) && (ot = ve), ot >= 0) {
          var lt = ot === s.tabbableGroups.length - 1 ? 0 : ot + 1, ft = s.tabbableGroups[lt];
          pe = ta(z) >= 0 ? ft.firstTabbableNode : ft.firstDomTabbableNode;
        } else zr(X) || (pe = we.nextTabbableNode(z));
      }
    } else
      pe = u("fallbackFocus");
    return pe;
  }, D = function($) {
    var z = Zs($);
    if (!(f(z, $) >= 0)) {
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
  }, F = function($) {
    var z = Zs($), X = f(z, $) >= 0;
    if (X || z instanceof Document)
      X && (s.mostRecentlyFocusedNode = z);
    else {
      $.stopImmediatePropagation();
      var oe, ne = !0;
      if (s.mostRecentlyFocusedNode)
        if (ta(s.mostRecentlyFocusedNode) > 0) {
          var pe = f(s.mostRecentlyFocusedNode), ve = s.containerGroups[pe].tabbableNodes;
          if (ve.length > 0) {
            var we = ve.findIndex(function(ye) {
              return ye === s.mostRecentlyFocusedNode;
            });
            we >= 0 && (r.isKeyForward(s.recentNavEvent) ? we + 1 < ve.length && (oe = ve[we + 1], ne = !1) : we - 1 >= 0 && (oe = ve[we - 1], ne = !1));
          }
        } else
          s.containerGroups.some(function(ye) {
            return ye.tabbableNodes.some(function(Ge) {
              return ta(Ge) > 0;
            });
          }) || (ne = !1);
      else
        ne = !1;
      ne && (oe = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), x(oe || s.mostRecentlyFocusedNode || S());
    }
    s.recentNavEvent = void 0;
  }, W = function($) {
    var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = $;
    var X = O({
      event: $,
      isBackward: z
    });
    X && (zr($) && $.preventDefault(), x(X));
  }, I = function($) {
    (r.isKeyForward($) || r.isKeyBackward($)) && W($, r.isKeyBackward($));
  }, P = function($) {
    w1($) && Ar(r.escapeDeactivates, $) !== !1 && ($.preventDefault(), o.deactivate());
  }, ce = function($) {
    var z = Zs($);
    f(z, $) >= 0 || Ar(r.clickOutsideDeactivates, $) || Ar(r.allowOutsideClick, $) || ($.preventDefault(), $.stopImmediatePropagation());
  }, J = function() {
    if (s.active) {
      Qn.activateTrap(a, o);
      var $;
      return r.delayInitialFocus ? $ = new Promise(function(z) {
        s.delayInitialFocusTimer = _f(function() {
          x(S()), z();
        });
      }) : x(S()), i.addEventListener("focusin", F, !0), i.addEventListener("mousedown", D, {
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
  }, fe = function($) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var z = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), oe = mf($), ne;
    try {
      for (oe.s(); !(ne = oe.n()).done; ) {
        var pe = ne.value;
        z.add(pe);
        for (var ve = typeof ShadowRoot < "u" && pe.getRootNode() instanceof ShadowRoot, we = pe; we; ) {
          z.add(we);
          var ye = we.parentElement, Ge = [];
          ye ? Ge = ye.children : !ye && ve && (Ge = we.getRootNode().children, ye = we.getRootNode().host, ve = typeof ShadowRoot < "u" && ye.getRootNode() instanceof ShadowRoot);
          var Ee = mf(Ge), ot;
          try {
            for (Ee.s(); !(ot = Ee.n()).done; ) {
              var lt = ot.value;
              X.add(lt);
            }
          } catch (ft) {
            Ee.e(ft);
          } finally {
            Ee.f();
          }
          we = ye;
        }
      }
    } catch (ft) {
      oe.e(ft);
    } finally {
      oe.f();
    }
    z.forEach(function(ft) {
      X.delete(ft);
    }), s.adjacentElements = X;
  }, Y = function() {
    if (s.active)
      return i.removeEventListener("focusin", F, !0), i.removeEventListener("mousedown", D, !0), i.removeEventListener("touchstart", D, !0), i.removeEventListener("click", ce, !0), i.removeEventListener("keydown", I, !0), i.removeEventListener("keydown", P), o;
  }, le = function($) {
    var z = s.mostRecentlyFocusedNode;
    if (z) {
      var X = $.some(function(ne) {
        var pe = Array.from(ne.removedNodes);
        return pe.some(function(ve) {
          return ve === z || typeof ve.contains == "function" && ve.contains(z);
        });
      });
      if (X && s.containers.some(function(ne) {
        return ne?.isConnected;
      })) {
        E();
        var oe = S();
        x(oe);
      }
    }
  }, be = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(le) : void 0, Q = function() {
    be && (be.disconnect(), s.active && !s.paused && s.containers.map(function($) {
      be.observe($, {
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
      var z = l($, "onActivate"), X = l($, "onPostActivate"), oe = l($, "checkCanFocusTrap"), ne = Qn.getActiveTrap(a), pe = !1;
      if (ne && !ne.paused) {
        var ve;
        (ve = ne._setSubtreeIsolation) === null || ve === void 0 || ve.call(ne, !1), pe = !0;
      }
      try {
        oe || E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), z?.({
          trap: o
        });
        var we = function() {
          oe && E();
          var Ee = function() {
            o._setSubtreeIsolation(!0), Q(), X?.({
              trap: o
            });
          }, ot = J();
          ot ? ot.then(Ee) : Ee();
        };
        if (oe)
          return oe(s.containers.concat()).then(we, we), this;
        we();
      } catch (Ge) {
        if (ne === Qn.getActiveTrap(a) && pe) {
          var ye;
          (ye = ne._setSubtreeIsolation) === null || ye === void 0 || ye.call(ne, !0);
        }
        throw Ge;
      }
      return this;
    },
    deactivate: function($) {
      if (!s.active)
        return this;
      var z = yf({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, $);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), Y(), s.active = !1, s.paused = !1, Q(), Qn.deactivateTrap(a, o);
      var X = l(z, "onDeactivate"), oe = l(z, "onPostDeactivate"), ne = l(z, "checkCanReturnFocus"), pe = l(z, "delayReturnFocus"), ve = l(z, "returnFocus", "returnFocusOnDeactivate");
      X?.({
        trap: o
      });
      var we = function() {
        ve && x(A(s.nodeFocusedBeforeActivation)), oe?.({
          trap: o
        });
      }, ye = function() {
        pe && ve ? _f(we) : we();
      };
      return ve && ne ? (ne(A(s.nodeFocusedBeforeActivation)).then(ye, ye), this) : (ye(), this);
    },
    pause: function($) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, $)) : this;
    },
    unpause: function($) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, $)) : this;
    },
    updateContainerElements: function($) {
      var z = [].concat($).filter(Boolean);
      return s.containers = z.map(function(X) {
        return typeof X == "string" ? i.querySelector(X) : X;
      }), r.isolateSubtrees && fe(s.containers), s.active && (E(), s.paused || o._setSubtreeIsolation(!0)), Q(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function($, z) {
        if (s.paused === $)
          return this;
        if (s.paused = $, $) {
          var X = l(z, "onPause"), oe = l(z, "onPostPause");
          X?.({
            trap: o
          }), Y(), o._setSubtreeIsolation(!1), Q(), oe?.({
            trap: o
          });
        } else {
          var ne = l(z, "onUnpause"), pe = l(z, "onPostUnpause");
          ne?.({
            trap: o
          });
          var ve = function() {
            E();
            var ye = function() {
              o._setSubtreeIsolation(!0), Q(), pe?.({
                trap: o
              });
            }, Ge = J();
            Ge ? Ge.then(ye) : ye();
          };
          ve();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function($) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(z) {
          var X;
          $ ? r.isolateSubtrees === "aria-hidden" ? ((z.ariaHidden === "true" || ((X = z.getAttribute("aria-hidden")) === null || X === void 0 ? void 0 : X.toLowerCase()) === "true") && s.alreadySilent.add(z), z.setAttribute("aria-hidden", "true")) : ((z.inert || z.hasAttribute("inert")) && s.alreadySilent.add(z), z.setAttribute("inert", !0)) : s.alreadySilent.has(z) || (r.isolateSubtrees === "aria-hidden" ? z.removeAttribute("aria-hidden") : z.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const zp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), E1 = /* @__PURE__ */ xt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [zp]: {
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
function A1(e, t, n, i, a, r) {
  return w(), C("ul", {
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
      style: sn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Ie(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Up = /* @__PURE__ */ Ze(E1, [["render", A1], ["__scopeId", "data-v-3e73e246"]]);
function os() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function k1() {
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
const Bp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), jp = /* @__PURE__ */ Symbol.for("NcContent:selector");
$i(d_);
const O1 = { class: "app-navigation-toggle-wrapper" }, x1 = /* @__PURE__ */ xt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = jh(e, "open"), n = K(() => t.value ? Ct("Close navigation") : Ct("Open navigation"));
    return (i, a) => (w(), C("div", O1, [
      _e(b(Bn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: ke(() => [
          _e(kl, {
            path: b(i_),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), N1 = /* @__PURE__ */ Ze(x1, [["__scopeId", "data-v-e8177cc7"]]), L1 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], R1 = { class: "app-navigation__search" }, I1 = /* @__PURE__ */ xt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Pt(
      Bp,
      () => lb(),
      !1
    ), a = pm("appNavigationContainer"), r = ys(), s = /* @__PURE__ */ xe(!r.value), o = K(() => r.value && s.value);
    rm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), et(r, () => {
      s.value = !r.value;
    }), et(o, () => {
      u();
    }), Pi(() => {
      i(!0), Sp("toggle-navigation", f), ii("navigation-toggled", {
        open: s.value
      }), n = Ou(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: os(),
        escapeDeactivates: !1
      }), u();
    }), gs(() => {
      i(!1), Gy("toggle-navigation", f), n.deactivate();
    });
    function l(S) {
      if (s.value === S) {
        ii("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = S === void 0 ? !s.value : S;
      const E = getComputedStyle(document.body), x = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        ii("navigation-toggled", {
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
    return (S, E) => (w(), C("div", {
      ref: "appNavigationContainer",
      class: Te(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": b(Di)
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
        c("div", R1, [
          Ie(S.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Te(["app-navigation__body", { "app-navigation__body--no-list": !S.$slots.list }])
        }, [
          Ie(S.$slots, "default", {}, void 0, !0)
        ], 2),
        S.$slots.list ? (w(), Fe(Up, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: ke(() => [
            Ie(S.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : j("", !0),
        Ie(S.$slots, "footer", {}, void 0, !0)
      ], 40, L1),
      _e(N1, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), P1 = /* @__PURE__ */ Ze(I1, [["__scopeId", "data-v-37908cd4"]]), $1 = {
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
}, D1 = ["aria-hidden", "aria-label"], M1 = ["fill", "width", "height"], F1 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, z1 = { key: 0 };
function U1(e, t, n, i, a, r) {
  return w(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", F1, [
        n.title ? (w(), C("title", z1, g(n.title), 1)) : j("", !0)
      ])
    ], 8, M1))
  ], 16, D1);
}
const B1 = /* @__PURE__ */ Ze($1, [["render", U1]]), j1 = {
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
}, H1 = ["aria-hidden", "aria-label"], V1 = ["fill", "width", "height"], G1 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, K1 = { key: 0 };
function W1(e, t, n, i, a, r) {
  return w(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", G1, [
        n.title ? (w(), C("title", K1, g(n.title), 1)) : j("", !0)
      ])
    ], 8, V1))
  ], 16, H1);
}
const q1 = /* @__PURE__ */ Ze(j1, [["render", W1]]), Y1 = {
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
}, X1 = ["aria-hidden", "aria-label"], Z1 = ["fill", "width", "height"], J1 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, Q1 = { key: 0 };
function e0(e, t, n, i, a, r) {
  return w(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", J1, [
        n.title ? (w(), C("title", Q1, g(n.title), 1)) : j("", !0)
      ])
    ], 8, Z1))
  ], 16, X1);
}
const Hp = /* @__PURE__ */ Ze(Y1, [["render", e0]]), t0 = {
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
}, n0 = ["aria-hidden", "aria-label"], i0 = ["fill", "width", "height"], a0 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, r0 = { key: 0 };
function s0(e, t, n, i, a, r) {
  return w(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", a0, [
        n.title ? (w(), C("title", r0, g(n.title), 1)) : j("", !0)
      ])
    ], 8, i0))
  ], 16, n0);
}
const Vp = /* @__PURE__ */ Ze(t0, [["render", s0]]);
$i(c_);
const o0 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Hp,
    IconClose: Vp,
    NcButton: Bn
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
    return { isLegacy34: Di };
  },
  data() {
    return {
      labelConfirm: Ct("Confirm changes"),
      labelCancel: Ct("Cancel changes")
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
}, l0 = ["placeholder"];
function c0(e, t, n, i, a, r) {
  const s = Ue("IconArrowRight"), o = Ue("NcButton"), l = Ue("IconClose");
  return w(), C("div", {
    class: Te(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = ze((...f) => r.confirm && r.confirm(...f), ["prevent"])),
      onKeydown: t[2] || (t[2] = mt(ze((...f) => r.cancel && r.cancel(...f), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = ze(() => {
      }, ["stop", "prevent"]))
    }, [
      We(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (f) => r.valueModel = f),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, l0), [
        [Gt, r.valueModel]
      ]),
      _e(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: ze(r.confirm, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          _e(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      _e(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: ze(r.cancel, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          _e(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const u0 = /* @__PURE__ */ Ze(o0, [["render", c0], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Ol() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const xu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Gp = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), d0 = {
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
}, Kp = {
  mixins: [d0],
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
      from: Gp
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
}, f0 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: kl
  },
  mixins: [Kp],
  inject: {
    isInSemanticMenu: {
      from: xu,
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
      mdiCheck: t_,
      mdiChevronRight: n_
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
}, h0 = ["role"], p0 = ["aria-label", "disabled", "title", "type"], v0 = { class: "action-button__longtext-wrapper" }, g0 = {
  key: 0,
  class: "action-button__name"
}, m0 = ["textContent"], b0 = {
  key: 2,
  class: "action-button__text"
}, y0 = ["textContent"], _0 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function w0(e, t, n, i, a, r) {
  const s = Ue("NcIconSvgWrapper");
  return w(), C("li", {
    class: Te(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", Ft({
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
      Ie(e.$slots, "icon", {}, () => [
        c("span", {
          class: Te([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: sn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", v0, [
        e.name ? (w(), C("strong", g0, g(e.name), 1)) : j("", !0),
        e.isLongText ? (w(), C("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: g(e.text)
        }, null, 8, m0)) : (w(), C("span", b0, g(e.text), 1)),
        n.description ? (w(), C("span", {
          key: 3,
          class: "action-button__description",
          textContent: g(n.description)
        }, null, 8, y0)) : j("", !0)
      ]),
      n.isMenu ? (w(), Fe(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (w(), Fe(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (w(), C("span", _0)) : j("", !0),
      j("", !0)
    ], 16, p0)
  ], 10, h0);
}
const S0 = /* @__PURE__ */ Ze(f0, [["render", w0], ["__scopeId", "data-v-6c2daf4e"]]);
function C0(e, t = {}) {
  const n = k1();
  et(e, () => {
    ti(t.disabled) || (ti(e) ? n.pause() : n.unpause());
  }), gs(() => {
    n.unpause();
  });
}
const T0 = ["top", "right", "bottom", "left"], wf = ["start", "end"], Sf = /* @__PURE__ */ T0.reduce((e, t) => e.concat(t, t + "-" + wf[0], t + "-" + wf[1]), []), ls = Math.min, Kc = Math.max, E0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wp(e, t, n) {
  return Kc(e, ls(t, n));
}
function da(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function oi(e) {
  return e.split("-")[0];
}
function En(e) {
  return e.split("-")[1];
}
function qp(e) {
  return e === "x" ? "y" : "x";
}
function Nu(e) {
  return e === "y" ? "height" : "width";
}
function ei(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Lu(e) {
  return qp(ei(e));
}
function Yp(e, t, n) {
  n === void 0 && (n = !1);
  const i = En(e), a = Lu(e), r = Nu(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = Io(s)), [s, Io(s)];
}
function A0(e) {
  const t = Io(e);
  return [Ro(e), t, Ro(t)];
}
function Ro(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Cf = ["left", "right"], Tf = ["right", "left"], k0 = ["top", "bottom"], O0 = ["bottom", "top"];
function x0(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Tf : Cf : t ? Cf : Tf;
    case "left":
    case "right":
      return t ? k0 : O0;
    default:
      return [];
  }
}
function N0(e, t, n, i) {
  const a = En(e);
  let r = x0(oi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(Ro)))), r;
}
function Io(e) {
  const t = oi(e);
  return E0[t] + e.slice(t.length);
}
function L0(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Xp(e) {
  return typeof e != "number" ? L0(e) : {
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
function Ef(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ei(t), s = Lu(t), o = Nu(s), l = oi(t), f = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, S = i[o] / 2 - a[o] / 2;
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
  const x = En(t);
  return x && (E[s] += S * (x === "end" ? 1 : -1) * (n && f ? -1 : 1)), E;
}
async function R0(e, t) {
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
  } = da(t, e), x = Xp(E), O = o[S ? h === "floating" ? "reference" : "floating" : h], D = Ur(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: f,
    rootBoundary: u,
    strategy: l
  })), F = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, W = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), I = await (r.isElement == null ? void 0 : r.isElement(W)) && await (r.getScale == null ? void 0 : r.getScale(W)) || {
    x: 1,
    y: 1
  }, P = Ur(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: F,
    offsetParent: W,
    strategy: l
  }) : F);
  return {
    top: (D.top - P.top + x.top) / I.y,
    bottom: (P.bottom - D.bottom + x.bottom) / I.y,
    left: (D.left - P.left + x.left) / I.x,
    right: (P.right - D.right + x.right) / I.x
  };
}
const I0 = 50, P0 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: R0
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = Ef(f, i, l), S = i, E = 0;
  const x = {};
  for (let A = 0; A < r.length; A++) {
    const O = r[A];
    if (!O)
      continue;
    const {
      name: D,
      fn: F
    } = O, {
      x: W,
      y: I,
      data: P,
      reset: ce
    } = await F({
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
    }, ce && E < I0 && (E++, typeof ce == "object" && (ce.placement && (S = ce.placement), ce.rects && (f = ce.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ce.rects), {
      x: u,
      y: h
    } = Ef(f, S, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: S,
    strategy: a,
    middlewareData: x
  };
}, $0 = (e) => ({
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
    } = da(e, t) || {};
    if (f == null)
      return {};
    const h = Xp(u), S = {
      x: n,
      y: i
    }, E = Lu(a), x = Nu(E), A = await s.getDimensions(f), O = E === "y", D = O ? "top" : "left", F = O ? "bottom" : "right", W = O ? "clientHeight" : "clientWidth", I = r.reference[x] + r.reference[E] - S[E] - r.floating[x], P = S[E] - r.reference[E], ce = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let J = ce ? ce[W] : 0;
    (!J || !await (s.isElement == null ? void 0 : s.isElement(ce))) && (J = o.floating[W] || r.floating[x]);
    const fe = I / 2 - P / 2, Y = J / 2 - A[x] / 2 - 1, le = ls(h[D], Y), be = ls(h[F], Y), Q = J - A[x] - be, ie = J / 2 - A[x] / 2 + fe, $ = Wp(le, ie, Q), z = !l.arrow && En(a) != null && ie !== $ && r.reference[x] / 2 - (ie < le ? le : be) - A[x] / 2 < 0, X = z ? ie < le ? ie - le : ie - Q : 0;
    return {
      [E]: S[E] + X,
      data: {
        [E]: $,
        centerOffset: ie - $ - X,
        ...z && {
          alignmentOffset: X
        }
      },
      reset: z
    };
  }
});
function D0(e, t, n) {
  return (e ? [...n.filter((a) => En(a) === e), ...n.filter((a) => En(a) !== e)] : n.filter((a) => oi(a) === a)).filter((a) => e ? En(a) === e || (t ? Ro(a) !== a : !1) : !0);
}
const M0 = function(e) {
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
        allowedPlacements: S = Sf,
        autoAlignment: E = !0,
        ...x
      } = da(e, t), A = h !== void 0 || S === Sf ? D0(h || null, E, S) : S, O = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, D = A[O];
      if (D == null)
        return {};
      if (o !== D)
        return {
          reset: {
            placement: A[0]
          }
        };
      const F = await l.detectOverflow(t, x), W = Yp(D, r, await (l.isRTL == null ? void 0 : l.isRTL(f.floating))), I = [F[oi(D)], F[W[0]], F[W[1]]], P = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
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
      const J = P.map((le) => {
        const be = En(le.placement);
        return [le.placement, be && u ? (
          // Check along the mainAxis and main crossAxis side.
          le.overflows.slice(0, 2).reduce((Q, ie) => Q + ie, 0)
        ) : (
          // Check only the mainAxis.
          le.overflows[0]
        ), le.overflows];
      }).sort((le, be) => le[1] - be[1]), Y = ((a = J.filter((le) => le[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        En(le[0]) ? 2 : 3
      ).every((be) => be <= 0))[0]) == null ? void 0 : a[0]) || J[0][0];
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
}, F0 = function(e) {
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
      } = da(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const D = oi(a), F = ei(o), W = oi(o) === o, I = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), P = S || (W || !A ? [Io(o)] : A0(o)), ce = x !== "none";
      !S && ce && P.push(...N0(o, A, x, I));
      const J = [o, ...P], fe = await l.detectOverflow(t, O), Y = [];
      let le = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && Y.push(fe[D]), h) {
        const $ = Yp(a, s, I);
        Y.push(fe[$[0]], fe[$[1]]);
      }
      if (le = [...le, {
        placement: a,
        overflows: Y
      }], !Y.every(($) => $ <= 0)) {
        var be, Q;
        const $ = (((be = r.flip) == null ? void 0 : be.index) || 0) + 1, z = J[$];
        if (z && (!(h === "alignment" ? F !== ei(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        le.every((ne) => ei(ne.placement) === F ? ne.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: le
            },
            reset: {
              placement: z
            }
          };
        let X = (Q = le.filter((oe) => oe.overflows[0] <= 0).sort((oe, ne) => oe.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!X)
          switch (E) {
            case "bestFit": {
              var ie;
              const oe = (ie = le.filter((ne) => {
                if (ce) {
                  const pe = ei(ne.placement);
                  return pe === F || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((ne) => [ne.placement, ne.overflows.filter((pe) => pe > 0).reduce((pe, ve) => pe + ve, 0)]).sort((ne, pe) => ne[1] - pe[1])[0]) == null ? void 0 : ie[0];
              oe && (X = oe);
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
}, z0 = /* @__PURE__ */ new Set(["left", "top"]);
async function U0(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = oi(n), o = En(n), l = ei(n) === "y", f = z0.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = da(t, e);
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
const B0 = function(e) {
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
      } = t, l = await U0(t, e);
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
}, j0 = function(e) {
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
          fn: (F) => {
            let {
              x: W,
              y: I
            } = F;
            return {
              x: W,
              y: I
            };
          }
        },
        ...f
      } = da(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, f), S = ei(a), E = qp(S);
      let x = u[E], A = u[S];
      const O = (F, W) => Wp(W + h[F === "y" ? "top" : "left"], W, W - h[F === "y" ? "bottom" : "right"]);
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
}, H0 = function(e) {
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
      } = da(e, t), l = await a.detectOverflow(t, o), f = oi(n), u = En(n), h = ei(n) === "y", {
        width: S,
        height: E
      } = i.floating;
      let x, A;
      f === "top" || f === "bottom" ? (x = f, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = f, x = u === "end" ? "top" : "bottom");
      const O = E - l.top - l.bottom, D = S - l.left - l.right, F = ls(E - l[x], O), W = ls(S - l[A], D), I = t.middlewareData.shift, P = !I;
      let ce = F, J = W;
      I != null && I.enabled.x && (J = D), I != null && I.enabled.y && (ce = O), P && !u && (h ? J = S - 2 * Kc(l.left, l.right) : ce = E - 2 * Kc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: J,
        availableHeight: ce
      });
      const fe = await a.getDimensions(r.floating);
      return S !== fe.width || E !== fe.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function mn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jn(e) {
  return mn(e).getComputedStyle(e);
}
const Af = Math.min, Br = Math.max, Po = Math.round;
function Zp(e) {
  const t = jn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = Po(n) !== a || Po(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function Ii(e) {
  return Qp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Js;
function Jp() {
  if (Js) return Js;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Js = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Js) : navigator.userAgent;
}
function Hn(e) {
  return e instanceof mn(e).HTMLElement;
}
function Oi(e) {
  return e instanceof mn(e).Element;
}
function Qp(e) {
  return e instanceof mn(e).Node;
}
function kf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof mn(e).ShadowRoot || e instanceof ShadowRoot;
}
function xl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = jn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function V0(e) {
  return ["table", "td", "th"].includes(Ii(e));
}
function Wc(e) {
  const t = /firefox/i.test(Jp()), n = jn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function ev() {
  return !/^((?!chrome|android).)*safari/i.test(Jp());
}
function Ru(e) {
  return ["html", "body", "#document"].includes(Ii(e));
}
function tv(e) {
  return Oi(e) ? e : e.contextElement;
}
const nv = { x: 1, y: 1 };
function Ba(e) {
  const t = tv(e);
  if (!Hn(t)) return nv;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Zp(t);
  let s = (r ? Po(n.width) : n.width) / i, o = (r ? Po(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function cs(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = tv(e);
  let l = nv;
  t && (i ? Oi(i) && (l = Ba(i)) : l = Ba(e));
  const f = o ? mn(o) : window, u = !ev() && n;
  let h = (s.left + (u && ((a = f.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, S = (s.top + (u && ((r = f.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, E = s.width / l.x, x = s.height / l.y;
  if (o) {
    const A = mn(o), O = i && Oi(i) ? mn(i) : i;
    let D = A.frameElement;
    for (; D && i && O !== A; ) {
      const F = Ba(D), W = D.getBoundingClientRect(), I = getComputedStyle(D);
      W.x += (D.clientLeft + parseFloat(I.paddingLeft)) * F.x, W.y += (D.clientTop + parseFloat(I.paddingTop)) * F.y, h *= F.x, S *= F.y, E *= F.x, x *= F.y, h += W.x, S += W.y, D = mn(D).frameElement;
    }
  }
  return { width: E, height: x, top: S, right: h + E, bottom: S + x, left: h, x: h, y: S };
}
function xi(e) {
  return ((Qp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Nl(e) {
  return Oi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function iv(e) {
  return cs(xi(e)).left + Nl(e).scrollLeft;
}
function us(e) {
  if (Ii(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || kf(e) && e.host || xi(e);
  return kf(t) ? t.host : t;
}
function av(e) {
  const t = us(e);
  return Ru(t) ? t.ownerDocument.body : Hn(t) && xl(t) ? t : av(t);
}
function $o(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = av(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = mn(i);
  return a ? t.concat(r, r.visualViewport || [], xl(i) ? i : []) : t.concat(i, $o(i));
}
function Of(e, t, n) {
  return t === "viewport" ? Ur((function(i, a) {
    const r = mn(i), s = xi(i), o = r.visualViewport;
    let l = s.clientWidth, f = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, f = o.height;
      const S = ev();
      (S || !S && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: f, x: u, y: h };
  })(e, n)) : Oi(t) ? Ur((function(i, a) {
    const r = cs(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Hn(i) ? Ba(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Ur((function(i) {
    const a = xi(i), r = Nl(i), s = i.ownerDocument.body, o = Br(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Br(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let f = -r.scrollLeft + iv(i);
    const u = -r.scrollTop;
    return jn(s).direction === "rtl" && (f += Br(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: f, y: u };
  })(xi(e)));
}
function xf(e) {
  return Hn(e) && jn(e).position !== "fixed" ? e.offsetParent : null;
}
function Nf(e) {
  const t = mn(e);
  let n = xf(e);
  for (; n && V0(n) && jn(n).position === "static"; ) n = xf(n);
  return n && (Ii(n) === "html" || Ii(n) === "body" && jn(n).position === "static" && !Wc(n)) ? t : n || (function(i) {
    let a = us(i);
    for (; Hn(a) && !Ru(a); ) {
      if (Wc(a)) return a;
      a = us(a);
    }
    return null;
  })(e) || t;
}
function G0(e, t, n) {
  const i = Hn(t), a = xi(t), r = cs(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Ii(t) !== "body" || xl(a)) && (s = Nl(t)), Hn(t)) {
    const l = cs(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = iv(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const K0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(f, u) {
    const h = u.get(f);
    if (h) return h;
    let S = $o(f).filter(((O) => Oi(O) && Ii(O) !== "body")), E = null;
    const x = jn(f).position === "fixed";
    let A = x ? us(f) : f;
    for (; Oi(A) && !Ru(A); ) {
      const O = jn(A), D = Wc(A);
      (x ? D || E : D || O.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = O : S = S.filter(((F) => F !== A)), A = us(A);
    }
    return u.set(f, S), S;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((f, u) => {
    const h = Of(t, u, a);
    return f.top = Br(h.top, f.top), f.right = Af(h.right, f.right), f.bottom = Af(h.bottom, f.bottom), f.left = Br(h.left, f.left), f;
  }), Of(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Hn(n), r = xi(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Ii(n) !== "body" || xl(r)) && (s = Nl(n)), Hn(n))) {
    const f = cs(n);
    o = Ba(n), l.x = f.x + n.clientLeft, l.y = f.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Oi, getDimensions: function(e) {
  return Hn(e) ? Zp(e) : e.getBoundingClientRect();
}, getOffsetParent: Nf, getDocumentElement: xi, getScale: Ba, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Nf, r = this.getDimensions;
  return { reference: G0(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => jn(e).direction === "rtl" }, W0 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: K0, ...n }, r = { ...a.platform, _c: i };
  return P0(e, t, { ...a, platform: r });
}, Ni = {
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
function qc(e, t) {
  let n = Ni.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Ni.themes[n.$extend] || {} : (n = null, i = Ni[t]) : n = null;
  while (n);
  return i;
}
function q0(e) {
  const t = [e];
  let n = Ni.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Ni.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Lf(e) {
  const t = [e];
  let n = Ni.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Ni.themes[n.$extend] || {}) : n = null;
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
let rv = !1;
typeof window < "u" && typeof navigator < "u" && (rv = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Y0 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Rf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, If = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Pf(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function yc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Cn = [];
let Yi = null;
const $f = {};
function Df(e) {
  let t = $f[e];
  return t || (t = $f[e] = []), t;
}
let Yc = function() {
};
typeof window < "u" && (Yc = window.Element);
function Be(e) {
  return function(t) {
    return qc(t.theme, e);
  };
}
const _c = "__floating-vue__popper", sv = () => /* @__PURE__ */ xt({
  name: "VPopper",
  provide() {
    return {
      [_c]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [_c]: { default: null }
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
      validator: (e) => Y0.includes(e)
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
      type: [String, Object, Yc, Boolean],
      default: Be("container")
    },
    boundary: {
      type: [String, Yc],
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
      return (e = this[_c]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(B0({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(M0({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(j0({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(F0({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push($0({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(H0({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await W0(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Yi && this.instantMove && Yi.instantMove && Yi !== this.parentPopper) {
        Yi.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Yi = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await yc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...$o(this.$_referenceNode),
        ...$o(this.$_popperNode)
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
        for (let n = 0; n < Cn.length; n++)
          t = Cn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Cn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Lf(this.theme))
        Df(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await yc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Pf(Cn, this), Cn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Lf(this.theme)) {
        const i = Df(n);
        Pf(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      Yi === this && (Yi = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await yc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Rf, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Rf, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, If, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], If, this.popperTriggers, this.popperHideTriggers, t);
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
        const t = this.$_popperNode.getBoundingClientRect(), n = jr - Ci, i = Hr - Ti, a = t.left + t.width / 2 - Ci + (t.top + t.height / 2) - Ti + t.width + t.height, r = Ci + n * a, s = Ti + i * a;
        return Qs(Ci, Ti, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Qs(Ci, Ti, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Qs(Ci, Ti, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Qs(Ci, Ti, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (rv) {
    const e = ds ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Mf(t), e), document.addEventListener("touchend", (t) => Ff(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Mf(e), !0), window.addEventListener("click", (e) => Ff(e, !1), !0);
  window.addEventListener("resize", J0);
}
function Mf(e, t) {
  for (let n = 0; n < Cn.length; n++) {
    const i = Cn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Ff(e, t) {
  X0(e, t);
}
function X0(e, t) {
  const n = {};
  for (let i = Cn.length - 1; i >= 0; i--) {
    const a = Cn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && zf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && zf(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function zf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Z0(e, n) && !t;
}
function Z0(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function J0() {
  for (let e = 0; e < Cn.length; e++)
    Cn[e].$_computePosition();
}
let Ci = 0, Ti = 0, jr = 0, Hr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ci = jr, Ti = Hr, jr = e.clientX, Hr = e.clientY;
}, ds ? {
  passive: !0
} : void 0);
function Qs(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), f = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && f >= 0 && f <= 1;
}
const Q0 = {
  extends: sv()
}, Iu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function ew(e, t, n, i, a, r) {
  return w(), C("div", {
    ref: "reference",
    class: Te(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Ie(e.$slots, "default", lo(is(e.slotData)))
  ], 2);
}
const tw = /* @__PURE__ */ Iu(Q0, [["render", ew]]);
function nw() {
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
let so;
function Xc() {
  Xc.init || (Xc.init = !0, so = nw() !== -1);
}
var Ll = {
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
    Xc(), nn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", so && this.$el.appendChild(e), e.data = "about:blank", so || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!so && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const iw = /* @__PURE__ */ nm();
em("data-v-b329ee4c");
const aw = {
  class: "resize-observer",
  tabindex: "-1"
};
tm();
const rw = /* @__PURE__ */ iw((e, t, n, i, a, r) => (w(), Fe("div", aw)));
Ll.render = rw;
Ll.__scopeId = "data-v-b329ee4c";
Ll.__file = "src/components/ResizeObserver.vue";
const ov = (e = "theme") => ({
  computed: {
    themeClass() {
      return q0(this[e]);
    }
  }
}), sw = /* @__PURE__ */ xt({
  name: "VPopperContent",
  components: {
    ResizeObserver: Ll
  },
  mixins: [
    ov()
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
}), ow = ["id", "aria-hidden", "tabindex", "data-popper-placement"], lw = {
  ref: "inner",
  class: "v-popper__inner"
}, cw = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), uw = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), dw = [
  cw,
  uw
];
function fw(e, t, n, i, a, r) {
  const s = Ue("ResizeObserver");
  return w(), C("div", {
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
    style: sn(e.result ? {
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
      style: sn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", lw, [
        e.mounted ? (w(), C(de, { key: 0 }, [
          c("div", null, [
            Ie(e.$slots, "default")
          ]),
          e.handleResize ? (w(), Fe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : j("", !0)
        ], 64)) : j("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: sn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, dw, 4)
    ], 4)
  ], 46, ow);
}
const lv = /* @__PURE__ */ Iu(sw, [["render", fw]]), cv = {
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
let Zc = function() {
};
typeof window < "u" && (Zc = window.Element);
const hw = /* @__PURE__ */ xt({
  name: "VPopperWrapper",
  components: {
    Popper: tw,
    PopperContent: lv
  },
  mixins: [
    cv,
    ov("finalTheme")
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
      type: [String, Object, Zc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Zc],
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
function pw(e, t, n, i, a, r) {
  const s = Ue("PopperContent"), o = Ue("Popper");
  return w(), Fe(o, Ft({ ref: "popper" }, e.$props, {
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
    default: ke(({
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
      result: F
    }) => [
      Ie(e.$slots, "default", {
        shown: f,
        show: E,
        hide: x
      }),
      _e(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: f,
        mounted: u,
        "skip-transition": h,
        "auto-hide": S,
        "handle-resize": A,
        classes: D,
        result: F,
        onHide: x,
        onResize: O
      }, {
        default: ke(() => [
          Ie(e.$slots, "popper", {
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
const Pu = /* @__PURE__ */ Iu(hw, [["render", pw]]), vw = {
  ...Pu,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Pu
});
({
  ...Pu
});
sv();
const Uf = Ni, gw = vw, mw = /* @__PURE__ */ xt({
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
}), bw = "_ncPopover_qgtYg", yw = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: bw
}, uv = "nc-popover-9";
Uf.themes[uv] = structuredClone(Uf.themes.dropdown);
const _w = {
  name: "NcPopover",
  components: {
    Dropdown: gw,
    NcPopoverTriggerProvider: mw
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
      theme: uv
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
      return this.placement === "start" ? Hc ? "right" : "left" : this.placement === "end" ? Hc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Ou(e, {
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
        oa.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function ww(e, t, n, i, a, r) {
  const s = Ue("NcPopoverTriggerProvider"), o = Ue("Dropdown");
  return w(), Fe(o, {
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
    popper: ke((l) => [
      Ie(e.$slots, "default", lo(is(l)))
    ]),
    default: ke(() => [
      _e(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: ke((l) => [
          Ie(e.$slots, "trigger", lo(is(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const Sw = {
  $style: yw
}, Bf = /* @__PURE__ */ Ze(_w, [["render", ww], ["__cssModules", Sw]]), Cw = {
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
}, Tw = ["aria-hidden", "aria-label"], Ew = ["fill", "width", "height"], Aw = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, kw = { key: 0 };
function Ow(e, t, n, i, a, r) {
  return w(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Aw, [
        n.title ? (w(), C("title", kw, g(n.title), 1)) : j("", !0)
      ])
    ], 8, Ew))
  ], 16, Tw);
}
const xw = /* @__PURE__ */ Ze(Cw, [["render", Ow]]);
$i(l_);
function $u(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === kt)
        return !1;
      if (n.type === de && !$u(n.children))
        return !1;
      if (n.type === ms && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const Nw = ".focusable", Lw = {
  name: "NcActions",
  components: {
    NcButton: Bn,
    NcPopover: Bf
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
      [xu]: K(() => this.actionsMenuSemanticType === "menu"),
      [Gp]: this.closeMenu
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
      default: Ct("Actions")
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
      randomId: Ol()
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
    C0(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(Nw);
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
      const x = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(x) ? Kt("img", { class: "action-item__menutoggle__icon", src: x, alt: "" }) : Kt("span", { class: ["icon", x] })), O = E?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? O : "";
      let F = E?.props?.title;
      this.forceName || F || (F = O);
      const W = { ...E?.props ?? {} }, I = ["submit", "reset"].includes(W.type) ? W.modelValue : "button";
      return delete W.modelValue, delete W.type, Kt(
        Bn,
        Ft(
          W,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": E?.props?.["aria-label"] || O,
            title: F,
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
      const x = $u(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Kt("span", { class: ["icon", this.defaultIcon] }) : Kt(xw, { size: 20 }), A = `${this.randomId}-trigger`;
      return Kt(
        Bf,
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
          trigger: () => Kt(Bn, {
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
          default: () => Kt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Kt("ul", {
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
    }), i.length > 0 && this.inline > 0 ? Kt(
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
        a.length > 0 ? Kt(
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
    ) : Kt(
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
}, Do = /* @__PURE__ */ Ze(Lw, [["__scopeId", "data-v-7206c1f1"]]), Rw = ["aria-label"], Iw = ["width", "height"], Pw = ["fill"], $w = ["fill"], Dw = { key: 0 }, Mw = /* @__PURE__ */ xt({
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
    return (i, a) => (w(), C("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (w(), C("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, Pw),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (w(), C("title", Dw, g(e.name), 1)) : j("", !0)
        ], 8, $w)
      ], 8, Iw))
    ], 8, Rw));
  }
}), dv = /* @__PURE__ */ Ze(Mw, [["__scopeId", "data-v-cf399190"]]), Jc = /* @__PURE__ */ xt({
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
}), Fw = {
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
}, zw = ["aria-hidden", "aria-label"], Uw = ["fill", "width", "height"], Bw = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, jw = { key: 0 };
function Hw(e, t, n, i, a, r) {
  return w(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Bw, [
        n.title ? (w(), C("title", jw, g(n.title), 1)) : j("", !0)
      ])
    ], 8, Uw))
  ], 16, zw);
}
const Vw = /* @__PURE__ */ Ze(Fw, [["render", Hw]]), Gw = {
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
}, Kw = ["aria-hidden", "aria-label"], Ww = ["fill", "width", "height"], qw = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, Yw = { key: 0 };
function Xw(e, t, n, i, a, r) {
  return w(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", qw, [
        n.title ? (w(), C("title", Yw, g(n.title), 1)) : j("", !0)
      ])
    ], 8, Ww))
  ], 16, Kw);
}
const Zw = /* @__PURE__ */ Ze(Gw, [["render", Xw]]);
$i(f_);
const Jw = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Bn,
    ChevronDown: B1,
    ChevronUp: q1
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
    return { isLegacy34: Di };
  },
  computed: {
    labelButton() {
      return this.open ? Ct("Collapse menu") : Ct("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function Qw(e, t, n, i, a, r) {
  const s = Ue("ChevronUp"), o = Ue("ChevronDown"), l = Ue("NcButton");
  return w(), Fe(l, {
    class: Te(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: ke(() => [
      n.open ? (w(), Fe(s, {
        key: 0,
        size: 20
      })) : (w(), Fe(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const eS = /* @__PURE__ */ Ze(Jw, [["render", Qw], ["__scopeId", "data-v-cfbd3794"]]);
$i(h_, g_);
const tS = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Do,
    NcActionButton: S0,
    NcAppNavigationIconCollapsible: eS,
    NcInputConfirmCancel: u0,
    NcLoadingIcon: dv,
    NcVNodes: Jc,
    Pencil: Vw,
    Undo: Zw
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: zp, default: null }
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
      default: () => Ol(),
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
      isLegacy34: Di
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
      return this.editLabel ? this.editLabel : Ct("Edit item");
    },
    undoButtonAriaLabel() {
      return Ct("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && ii("toggle-navigation", { open: !1 }));
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
}, nS = ["id"], iS = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], aS = {
  key: 0,
  class: "editingContainer"
}, rS = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, sS = { class: "app-navigation-entry__deleted-description" }, oS = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, lS = {
  key: 0,
  class: "app-navigation-entry__children"
};
function cS(e, t, n, i, a, r) {
  const s = Ue("NcLoadingIcon"), o = Ue("NcInputConfirmCancel"), l = Ue("Pencil"), f = Ue("NcActionButton"), u = Ue("Undo"), h = Ue("NcActions"), S = Ue("NcAppNavigationIconCollapsible");
  return w(), C("li", {
    id: n.id,
    class: Te([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (w(), Fe(bu(r.isRouterLink ? "router-link" : "NcVNodes"), lo(is({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: ke(({ href: E, navigate: x, isActive: A }) => [
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
          n.undo ? j("", !0) : (w(), C("a", {
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
            onKeydown: t[3] || (t[3] = mt(ze((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Te(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (w(), Fe(s, { key: 0 })) : Ie(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Te(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, g(n.name), 3),
            a.editingActive ? (w(), C("div", aS, [
              _e(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : j("", !0)
          ], 40, iS)),
          n.undo ? (w(), C("div", rS, [
            c("div", sS, g(n.name), 1)
          ])) : j("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (w(), C("div", {
            key: 2,
            class: Te(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (w(), C("div", oS, [
              Ie(e.$slots, "counter", {}, void 0, !0)
            ])) : j("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (w(), Fe(h, {
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
              icon: ke(() => [
                Ie(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: ke(() => [
                n.editable && !a.editingActive ? (w(), Fe(f, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: ke(() => [
                    _e(l, { size: 20 })
                  ]),
                  default: ke(() => [
                    Oe(" " + g(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                n.undo ? (w(), Fe(f, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: ke(() => [
                    _e(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                Ie(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : j("", !0)
          ], 2)) : j("", !0),
          n.allowCollapse && e.$slots.default ? (w(), Fe(S, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: ze(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : j("", !0),
          Ie(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (w(), C("ul", lS, [
      Ie(e.$slots, "default", {}, void 0, !0)
    ])) : j("", !0)
  ], 10, nS);
}
const jf = /* @__PURE__ */ Ze(tS, [["render", cS], ["__scopeId", "data-v-01bef41b"]]), wc = /* @__PURE__ */ new WeakMap(), uS = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = hf(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = hf(e, a, Object.assign({ capture: n }, r));
    }
    wc.set(e, i);
  },
  unmounted(e) {
    const t = wc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), wc.delete(e);
  }
}, dS = {
  mounted(e) {
    e.focus();
  }
}, fS = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", hS = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Qc = "numeric", eu = "ascii", tu = "alpha", Vr = "asciinumeric", Ir = "alphanumeric", nu = "domain", fv = "emoji", pS = "scheme", vS = "slashscheme", Sc = "whitespace";
function gS(e, t) {
  return e in t || (t[e] = []), t[e];
}
function ia(e, t, n) {
  t[Qc] && (t[Vr] = !0, t[Ir] = !0), t[eu] && (t[Vr] = !0, t[tu] = !0), t[Vr] && (t[Ir] = !0), t[tu] && (t[Ir] = !0), t[Ir] && (t[nu] = !0), t[fv] && (t[nu] = !0);
  for (const i in t) {
    const a = gS(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function mS(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function an(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
an.groups = {};
an.prototype = {
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
    i = i || an.groups;
    let a;
    return t && t.j ? a = t : (a = new an(t), n && i && ia(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || an.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new an(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new an(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(mS(s.t, i), n);
          ia(r, l, i);
        } else n && ia(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const De = (e, t, n, i, a) => e.ta(t, n, i, a), dt = (e, t, n, i, a) => e.tr(t, n, i, a), Hf = (e, t, n, i, a) => e.ts(t, n, i, a), te = (e, t, n, i, a) => e.tt(t, n, i, a), qn = "WORD", iu = "UWORD", hv = "ASCIINUMERICAL", pv = "ALPHANUMERICAL", fs = "LOCALHOST", au = "TLD", ru = "UTLD", oo = "SCHEME", Ia = "SLASH_SCHEME", Du = "NUM", su = "WS", Mu = "NL", Gr = "OPENBRACE", Kr = "CLOSEBRACE", Mo = "OPENBRACKET", Fo = "CLOSEBRACKET", zo = "OPENPAREN", Uo = "CLOSEPAREN", Bo = "OPENANGLEBRACKET", jo = "CLOSEANGLEBRACKET", Ho = "FULLWIDTHLEFTPAREN", Vo = "FULLWIDTHRIGHTPAREN", Go = "LEFTCORNERBRACKET", Ko = "RIGHTCORNERBRACKET", Wo = "LEFTWHITECORNERBRACKET", qo = "RIGHTWHITECORNERBRACKET", Yo = "FULLWIDTHLESSTHAN", Xo = "FULLWIDTHGREATERTHAN", Zo = "AMPERSAND", Jo = "APOSTROPHE", Qo = "ASTERISK", Ai = "AT", el = "BACKSLASH", tl = "BACKTICK", nl = "CARET", aa = "COLON", Fu = "COMMA", il = "DOLLAR", Mn = "DOT", al = "EQUALS", zu = "EXCLAMATION", pn = "HYPHEN", Wr = "PERCENT", rl = "PIPE", sl = "PLUS", ol = "POUND", qr = "QUERY", Uu = "QUOTE", vv = "FULLWIDTHMIDDLEDOT", Bu = "SEMI", Fn = "SLASH", Yr = "TILDE", ll = "UNDERSCORE", gv = "EMOJI", cl = "SYM";
var mv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: pv,
  AMPERSAND: Zo,
  APOSTROPHE: Jo,
  ASCIINUMERICAL: hv,
  ASTERISK: Qo,
  AT: Ai,
  BACKSLASH: el,
  BACKTICK: tl,
  CARET: nl,
  CLOSEANGLEBRACKET: jo,
  CLOSEBRACE: Kr,
  CLOSEBRACKET: Fo,
  CLOSEPAREN: Uo,
  COLON: aa,
  COMMA: Fu,
  DOLLAR: il,
  DOT: Mn,
  EMOJI: gv,
  EQUALS: al,
  EXCLAMATION: zu,
  FULLWIDTHGREATERTHAN: Xo,
  FULLWIDTHLEFTPAREN: Ho,
  FULLWIDTHLESSTHAN: Yo,
  FULLWIDTHMIDDLEDOT: vv,
  FULLWIDTHRIGHTPAREN: Vo,
  HYPHEN: pn,
  LEFTCORNERBRACKET: Go,
  LEFTWHITECORNERBRACKET: Wo,
  LOCALHOST: fs,
  NL: Mu,
  NUM: Du,
  OPENANGLEBRACKET: Bo,
  OPENBRACE: Gr,
  OPENBRACKET: Mo,
  OPENPAREN: zo,
  PERCENT: Wr,
  PIPE: rl,
  PLUS: sl,
  POUND: ol,
  QUERY: qr,
  QUOTE: Uu,
  RIGHTCORNERBRACKET: Ko,
  RIGHTWHITECORNERBRACKET: qo,
  SCHEME: oo,
  SEMI: Bu,
  SLASH: Fn,
  SLASH_SCHEME: Ia,
  SYM: cl,
  TILDE: Yr,
  TLD: au,
  UNDERSCORE: ll,
  UTLD: ru,
  UWORD: iu,
  WORD: qn,
  WS: su
});
const Kn = /[a-z]/, kr = new RegExp("\\p{L}", "u"), Cc = new RegExp("\\p{Emoji}", "u"), Wn = /\d/, Tc = /\s/, Vf = "\r", Ec = `
`, bS = "️", yS = "‍", Ac = "￼";
let eo = null, to = null;
function _S(e = []) {
  const t = {};
  an.groups = t;
  const n = new an();
  eo == null && (eo = Gf(fS)), to == null && (to = Gf(hS)), te(n, "'", Jo), te(n, "{", Gr), te(n, "}", Kr), te(n, "[", Mo), te(n, "]", Fo), te(n, "(", zo), te(n, ")", Uo), te(n, "<", Bo), te(n, ">", jo), te(n, "（", Ho), te(n, "）", Vo), te(n, "「", Go), te(n, "」", Ko), te(n, "『", Wo), te(n, "』", qo), te(n, "＜", Yo), te(n, "＞", Xo), te(n, "&", Zo), te(n, "*", Qo), te(n, "@", Ai), te(n, "`", tl), te(n, "^", nl), te(n, ":", aa), te(n, ",", Fu), te(n, "$", il), te(n, ".", Mn), te(n, "=", al), te(n, "!", zu), te(n, "-", pn), te(n, "%", Wr), te(n, "|", rl), te(n, "+", sl), te(n, "#", ol), te(n, "?", qr), te(n, '"', Uu), te(n, "/", Fn), te(n, ";", Bu), te(n, "~", Yr), te(n, "_", ll), te(n, "\\", el), te(n, "・", vv);
  const i = dt(n, Wn, Du, {
    [Qc]: !0
  });
  dt(i, Wn, i);
  const a = dt(i, Kn, hv, {
    [Vr]: !0
  }), r = dt(i, kr, pv, {
    [Ir]: !0
  }), s = dt(n, Kn, qn, {
    [eu]: !0
  });
  dt(s, Wn, a), dt(s, Kn, s), dt(a, Wn, a), dt(a, Kn, a);
  const o = dt(n, kr, iu, {
    [tu]: !0
  });
  dt(o, Kn), dt(o, Wn, r), dt(o, kr, o), dt(r, Wn, r), dt(r, Kn), dt(r, kr, r);
  const l = te(n, Ec, Mu, {
    [Sc]: !0
  }), f = te(n, Vf, su, {
    [Sc]: !0
  }), u = dt(n, Tc, su, {
    [Sc]: !0
  });
  te(n, Ac, u), te(f, Ec, l), te(f, Ac, u), dt(f, Tc, u), te(u, Vf), te(u, Ec), dt(u, Tc, u), te(u, Ac, u);
  const h = dt(n, Cc, gv, {
    [fv]: !0
  });
  te(h, "#"), dt(h, Cc, h), te(h, bS, h);
  const S = te(h, yS);
  te(S, "#"), dt(S, Cc, h);
  const E = [[Kn, s], [Wn, a]], x = [[Kn, null], [kr, o], [Wn, r]];
  for (let A = 0; A < eo.length; A++)
    wi(n, eo[A], au, qn, E);
  for (let A = 0; A < to.length; A++)
    wi(n, to[A], ru, iu, x);
  ia(au, {
    tld: !0,
    ascii: !0
  }, t), ia(ru, {
    utld: !0,
    alpha: !0
  }, t), wi(n, "file", oo, qn, E), wi(n, "mailto", oo, qn, E), wi(n, "http", Ia, qn, E), wi(n, "https", Ia, qn, E), wi(n, "ftp", Ia, qn, E), wi(n, "ftps", Ia, qn, E), ia(oo, {
    scheme: !0,
    ascii: !0
  }, t), ia(Ia, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], F = e[A][1] ? {
      [pS]: !0
    } : {
      [vS]: !0
    };
    O.indexOf("-") >= 0 ? F[nu] = !0 : Kn.test(O) ? Wn.test(O) ? F[Vr] = !0 : F[eu] = !0 : F[Qc] = !0, Hf(n, O, O, F);
  }
  return Hf(n, "localhost", fs, {
    ascii: !0
  }), n.jd = new an(cl), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, mv)
  };
}
function bv(e, t) {
  const n = wS(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
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
function wS(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function wi(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new an(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new an(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function Gf(e) {
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
  format: Kf,
  formatHref: Kf,
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
function ju(e, t = null) {
  let n = Object.assign({}, hs);
  e && (n = Object.assign(n, e instanceof ju ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
ju.prototype = {
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
function Kf(e) {
  return e;
}
function yv(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
yv.prototype = {
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
function Rl(e, t) {
  class n extends yv {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const SS = Rl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Wf = Rl("text"), CS = Rl("nl"), no = Rl("url", {
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
    return e.length >= 2 && e[0].t !== fs && e[1].t === aa;
  }
}), hn = (e) => new an(e);
function TS({
  groups: e
}) {
  const t = e.domain.concat([Zo, Qo, Ai, el, tl, nl, il, al, pn, Du, Wr, rl, sl, ol, Fn, cl, Yr, ll]), n = [Jo, aa, Fu, Mn, zu, Wr, qr, Uu, Bu, Bo, jo, Gr, Kr, Fo, Mo, zo, Uo, Ho, Vo, Go, Ko, Wo, qo, Yo, Xo], i = [Zo, Jo, Qo, el, tl, nl, il, al, pn, Gr, Kr, Wr, rl, sl, ol, qr, Fn, cl, Yr, ll], a = hn(), r = te(a, Yr);
  De(r, i, r), De(r, e.domain, r);
  const s = hn(), o = hn(), l = hn();
  De(a, e.domain, s), De(a, e.scheme, o), De(a, e.slashscheme, l), De(s, i, r), De(s, e.domain, s);
  const f = te(s, Ai);
  te(r, Ai, f), te(o, Ai, f), te(l, Ai, f);
  const u = te(r, Mn);
  De(u, i, r), De(u, e.domain, r);
  const h = hn();
  De(f, e.domain, h), De(h, e.domain, h);
  const S = te(h, Mn);
  De(S, e.domain, h);
  const E = hn(SS);
  De(S, e.tld, E), De(S, e.utld, E), te(f, fs, E);
  const x = te(h, pn);
  te(x, pn, x), De(x, e.domain, h), De(E, e.domain, h), te(E, Mn, S), te(E, pn, x);
  const A = te(s, pn), O = te(s, Mn);
  te(A, pn, A), De(A, e.domain, s), De(O, i, r), De(O, e.domain, s);
  const D = hn(no);
  De(O, e.tld, D), De(O, e.utld, D), De(D, e.domain, s), De(D, i, r), te(D, Mn, O), te(D, pn, A), te(D, Ai, f);
  const F = te(D, aa), W = hn(no);
  De(F, e.numeric, W);
  const I = hn(no), P = hn();
  De(I, t, I), De(I, n, P), De(P, t, I), De(P, n, P), te(D, Fn, I), te(W, Fn, I);
  const ce = te(o, aa), J = te(l, aa), fe = te(J, Fn), Y = te(fe, Fn);
  De(o, e.domain, s), te(o, Mn, O), te(o, pn, A), De(l, e.domain, s), te(l, Mn, O), te(l, pn, A), De(ce, e.domain, I), te(ce, Fn, I), te(ce, qr, I), De(Y, e.domain, I), De(Y, t, I), te(Y, Fn, I);
  const le = [
    [Gr, Kr],
    // {}
    [Mo, Fo],
    // []
    [zo, Uo],
    // ()
    [Bo, jo],
    // <>
    [Ho, Vo],
    // （）
    [Go, Ko],
    // 「」
    [Wo, qo],
    // 『』
    [Yo, Xo]
    // ＜＞
  ];
  for (let be = 0; be < le.length; be++) {
    const [Q, ie] = le[be], $ = te(I, Q);
    te(P, Q, $);
    const z = hn(no);
    De($, t, z);
    const X = hn();
    De($, n, X), te($, ie, I), De(z, t, z), De(z, n, X), De(X, t, z), De(X, n, X), te(z, ie, I), te(X, ie, I);
  }
  return te(a, fs, D), te(a, Mu, CS), {
    start: a,
    tokens: mv
  };
}
function ES(e, t, n) {
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
      s.length > 0 && (r.push(kc(Wf, t, s)), s = []), a -= S, u -= S;
      const E = h.t, x = n.slice(a - u, a);
      r.push(kc(E, t, x));
    }
  }
  return s.length > 0 && r.push(kc(Wf, t, s)), r;
}
function kc(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const Lt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function AS() {
  Lt.scanner = _S(Lt.customSchemes);
  for (let e = 0; e < Lt.tokenQueue.length; e++)
    Lt.tokenQueue[e][1]({
      scanner: Lt.scanner
    });
  Lt.parser = TS(Lt.scanner.tokens);
  for (let e = 0; e < Lt.pluginQueue.length; e++)
    Lt.pluginQueue[e][1]({
      scanner: Lt.scanner,
      parser: Lt.parser
    });
  return Lt.initialized = !0, Lt;
}
function _v(e) {
  return Lt.initialized || AS(), ES(Lt.parser.start, e, bv(Lt.scanner.start, e));
}
_v.scan = bv;
function kS(e) {
  const t = new ju({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, NS), n = _v(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(To(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function OS(e) {
  return e.replace(/"/g, "&quot;");
}
function xS(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${OS(i)}"`);
  }
  return t.join(" ");
}
function NS({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${xS(t)}>${To(n)}</${e}>`;
}
const LS = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = kS(t.text));
}, RS = ["title"], IS = /* @__PURE__ */ xt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Pt("NcAppSidebar:header:ref");
    return (n, i) => We((w(), C("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Oe(g(e.name), 1)
    ], 8, RS)), [
      [b(LS), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), PS = ["aria-labelledby"], $S = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, DS = ["id"], MS = {
  key: 2,
  class: "empty-content__description"
}, FS = {
  key: 3,
  class: "empty-content__action"
}, zS = /* @__PURE__ */ xt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Ol();
    return (n, i) => (w(), C("div", {
      "aria-labelledby": b(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (w(), C("div", $S, [
        Ie(n.$slots, "icon", {}, void 0, !0)
      ])) : j("", !0),
      e.name !== "" || n.$slots.name ? (w(), C("div", {
        key: 1,
        id: b(t),
        class: "empty-content__name"
      }, [
        Ie(n.$slots, "name", {}, () => [
          Oe(g(e.name), 1)
        ], !0)
      ], 8, DS)) : j("", !0),
      e.description !== "" || n.$slots.description ? (w(), C("p", MS, [
        Ie(n.$slots, "description", {}, () => [
          Oe(g(e.description), 1)
        ], !0)
      ])) : j("", !0),
      n.$slots.action ? (w(), C("div", FS, [
        Ie(n.$slots, "action", {}, void 0, !0)
      ])) : j("", !0)
    ], 8, PS));
  }
}), US = /* @__PURE__ */ Ze(zS, [["__scopeId", "data-v-8609a4c1"]]), BS = {
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
}, jS = ["aria-hidden", "aria-label"], HS = ["fill", "width", "height"], VS = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, GS = { key: 0 };
function KS(e, t, n, i, a, r) {
  return w(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", VS, [
        n.title ? (w(), C("title", GS, g(n.title), 1)) : j("", !0)
      ])
    ], 8, HS))
  ], 16, jS);
}
const WS = /* @__PURE__ */ Ze(BS, [["render", KS]]), qS = {
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
}, YS = ["aria-hidden", "aria-label"], XS = ["fill", "width", "height"], ZS = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, JS = { key: 0 };
function QS(e, t, n, i, a, r) {
  return w(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", ZS, [
        n.title ? (w(), C("title", JS, g(n.title), 1)) : j("", !0)
      ])
    ], 8, XS))
  ], 16, YS);
}
const eC = /* @__PURE__ */ Ze(qS, [["render", QS]]), tC = {
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
}, nC = ["aria-hidden", "aria-label"], iC = ["fill", "width", "height"], aC = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, rC = { key: 0 };
function sC(e, t, n, i, a, r) {
  return w(), C("span", Ft(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (w(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", aC, [
        n.title ? (w(), C("title", rC, g(n.title), 1)) : j("", !0)
      ])
    ], 8, iC))
  ], 16, nC);
}
const oC = /* @__PURE__ */ Ze(tC, [["render", sC]]), lC = ["aria-selected", "tabindex"], cC = /* @__PURE__ */ xt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ km({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = jh(e, "selected"), n = /* @__PURE__ */ xe(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (w(), C("button", {
      class: Te(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: b(Di),
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
          _e(Jc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: ke(() => [
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
          _e(Jc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: ke(() => [
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
      }, g(e.tab.name), 3)
    ], 10, lC));
  }
}), uC = "_sidebarTabsButton_q3kBA", dC = "_sidebarTabsButton_legacy_KQ4d1", fC = "_sidebarTabsButton_selected_Pjayf", hC = "_sidebarTabsButton_animatedHighlight_uvp-0", pC = "_sidebarTabsButton__name_rlQsL", vC = "_sidebarTabsButton__icon_QzZg4", gC = "_sidebarTabsButton__iconLayer_ZkZan", mC = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", bC = "_sidebarTabsButton__icon_pop_IA0By", yC = "_sidebarTabsButton__legacyIcon_QhcNW", _C = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: uC,
  sidebarTabsButton_legacy: dC,
  sidebarTabsButton_selected: fC,
  sidebarTabsButton_animatedHighlight: hC,
  sidebarTabsButton__name: pC,
  sidebarTabsButton__icon: vC,
  sidebarTabsButton__iconLayer: gC,
  sidebarTabsButton__iconLayer_hidden: mC,
  sidebarTabsButton__icon_pop: bC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: yC
}, wC = {
  $style: _C
}, SC = /* @__PURE__ */ Ze(cC, [["__cssModules", wC]]), CC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: SC
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
      isLegacy34: Di,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [xy()]) : t.order - n.order), this.updateActive();
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
}, TC = { class: "app-sidebar-tabs" };
function EC(e, t, n, i, a, r) {
  const s = Ue("NcAppSidebarTabsButton");
  return w(), C("div", TC, [
    r.hasMultipleTabs || r.showForSingleTab ? (w(), C("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Te(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = mt(ze((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = mt(ze((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = mt(ze((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = mt(ze((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = mt(ze((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = mt(ze((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = mt(ze((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (w(), C("div", {
        key: 0,
        class: Te(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: sn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : j("", !0),
      (w(!0), C(de, null, Me(a.tabs, (o) => (w(), Fe(s, {
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
      Ie(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const AC = /* @__PURE__ */ Ze(CC, [["render", EC], ["__scopeId", "data-v-74190d2a"]]);
$i(u_);
const kC = {
  name: "NcAppSidebar",
  components: {
    NcActions: Do,
    NcAppSidebarHeader: IS,
    NcAppSidebarTabs: AC,
    NcButton: Bn,
    NcLoadingIcon: dv,
    NcEmptyContent: US,
    IconArrowRight: Hp,
    IconClose: Vp,
    IconDockRight: WS,
    IconStar: eC,
    IconStarOutline: oC
  },
  directives: {
    Focus: dS,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: uS
  },
  inject: {
    ncContentSelector: {
      from: jp,
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
    const e = /* @__PURE__ */ xe(null);
    return vn("NcAppSidebar:header:ref", e), {
      uid: Ol(),
      isMobile: a_(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Ct("Change name"),
      closeTranslated: Ct("Close sidebar"),
      favoriteTranslated: Ct("Favorite"),
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
    isSlotPopulated: $u,
    t: Ct,
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
      this.focusTrap || (this.focusTrap = Ou([
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && oa.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, OC = ["aria-labelledby"], xC = { class: "app-sidebar-header__info" }, NC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, LC = { class: "app-sidebar-header__name-container" }, RC = { class: "app-sidebar-header__mainname-container" }, IC = ["placeholder", "value"], PC = ["title"], $C = {
  key: 2,
  class: "app-sidebar-header__description"
};
function DC(e, t, n, i, a, r) {
  const s = Ue("IconDockRight"), o = Ue("NcButton"), l = Ue("NcLoadingIcon"), f = Ue("IconStar"), u = Ue("IconStarOutline"), h = Ue("NcAppSidebarHeader"), S = Ue("IconArrowRight"), E = Ue("NcActions"), x = Ue("IconClose"), A = Ue("NcAppSidebarTabs"), O = Ue("NcEmptyContent"), D = dd("focus"), F = dd("click-outside");
  return w(), Fe(pb, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: ke(() => [
      We(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = mt((...W) => r.onKeydownEsc && r.onKeydownEsc(...W), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (w(), Fe(Ah, {
          key: 0,
          to: r.ncContentSelector
        }, [
          _e(o, Ft({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (W) => e.$emit("update:open", !0))
          }), {
            icon: ke(() => [
              Ie(e.$slots, "toggle-icon", {}, () => [
                _e(s, { size: 20 })
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
          n.empty ? (w(), Fe(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Ie(e.$slots, "info", { key: 0 }, () => [
            c("div", xC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (w(), C("div", {
                key: 0,
                class: Te(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: sn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...W) => r.onFigureClick && r.onFigureClick(...W)),
                onKeydown: t[2] || (t[2] = mt((...W) => r.onFigureClick && r.onFigureClick(...W), ["enter"]))
              }, [
                Ie(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : j("", !0),
              c("div", {
                class: Te(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (w(), C("div", NC, [
                  Ie(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (w(), Fe(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: ze(r.toggleStarred, ["prevent"])
                    }, {
                      icon: ke(() => [
                        n.starLoading ? (w(), Fe(l, { key: 0 })) : a.isStarred ? (w(), Fe(f, {
                          key: 1,
                          size: 20
                        })) : (w(), Fe(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : j("", !0)
                  ], !0)
                ])) : j("", !0),
                c("div", LC, [
                  c("div", RC, [
                    We(_e(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: ze(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Fa, !n.nameEditable]
                    ]),
                    n.nameEditable ? We((w(), C("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = ze((...W) => r.onSubmitName && r.onSubmitName(...W), ["prevent"]))
                    }, [
                      We(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = mt(ze((...W) => r.onDismissEditing && r.onDismissEditing(...W), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...W) => r.onNameInput && r.onNameInput(...W))
                      }, null, 40, IC), [
                        [D]
                      ]),
                      _e(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: ke(() => [
                          _e(S, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [F, () => r.onSubmitName()]
                    ]) : j("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (w(), Fe(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: ke(() => [
                        Ie(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : j("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (w(), C("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Ie(e.$slots, "subname", {}, () => [
                      Oe(g(n.subname), 1)
                    ], !0)
                  ], 8, PC)) : j("", !0)
                ])
              ], 2)
            ])
          ], !0),
          _e(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: ze(r.closeSidebar, ["prevent"])
          }, {
            icon: ke(() => [
              _e(x, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (w(), C("div", $C, [
            Ie(e.$slots, "description", {}, void 0, !0)
          ])) : j("", !0)
        ], 2),
        We(_e(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: ke(() => [
            Ie(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Fa, !n.loading]
        ]),
        n.loading ? (w(), Fe(O, { key: 1 }, {
          icon: ke(() => [
            _e(l, { size: 64 })
          ]),
          _: 1
        })) : j("", !0)
      ], 40, OC), [
        [Fa, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const MC = /* @__PURE__ */ Ze(kC, [["render", DC], ["__scopeId", "data-v-c2c6820b"]]), FC = {
  name: "NcActionLink",
  mixins: [Kp],
  inject: {
    isInSemanticMenu: {
      from: xu,
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
}, zC = ["role"], UC = ["download", "href", "aria-label", "target", "title", "role"], BC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, jC = { class: "action-link__name" }, HC = ["textContent"], VC = ["textContent"], GC = {
  key: 2,
  class: "action-link__text"
};
function KC(e, t, n, i, a, r) {
  return w(), C("li", {
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
      Ie(e.$slots, "icon", {}, () => [
        c("span", {
          "aria-hidden": "true",
          class: Te(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: sn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (w(), C("span", BC, [
        c("strong", jC, g(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: g(e.text)
        }, null, 8, HC)
      ])) : e.isLongText ? (w(), C("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: g(e.text)
      }, null, 8, VC)) : (w(), C("span", GC, g(e.text), 1)),
      j("", !0)
    ], 8, UC)
  ], 8, zC);
}
const Na = /* @__PURE__ */ Ze(FC, [["render", KC], ["__scopeId", "data-v-32f01b7a"]]);
$i(v_);
const WC = `<!--
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
`, qC = `<!--
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
`, YC = { class: "vue-skip-actions__container" }, XC = { class: "vue-skip-actions__headline" }, ZC = { class: "vue-skip-actions__buttons" }, JC = /* @__PURE__ */ xt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    vn(Bp, o), vn(jp, "#content-vue"), vn("appName", K(() => t.appName));
    const n = ys(), i = /* @__PURE__ */ xe(!1), a = /* @__PURE__ */ xe(), r = K(() => a.value === "navigation" ? qC : WC);
    Ph(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      ii("toggle-navigation", { open: !0 }), nn(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, f) => (w(), C("div", {
      id: "content-vue",
      class: Te(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": b(Di) }]])
    }, [
      (w(), Fe(Ah, { to: "#skip-actions" }, [
        c("div", YC, [
          c("div", XC, g(b(Ct)("Keyboard navigation help")), 1),
          c("div", ZC, [
            We(_e(Bn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: ze(s, ["prevent"]),
              onFocusin: f[0] || (f[0] = (u) => a.value = "navigation"),
              onMouseover: f[1] || (f[1] = (u) => a.value = "navigation")
            }, {
              default: ke(() => [
                Oe(g(b(Ct)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Fa, i.value]
            ]),
            _e(Bn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: f[2] || (f[2] = (u) => a.value = "content"),
              onMouseover: f[3] || (f[3] = (u) => a.value = "content")
            }, {
              default: ke(() => [
                Oe(g(b(Ct)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          We(_e(kl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Fa, !b(n)]
          ])
        ])
      ])),
      Ie(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), QC = /* @__PURE__ */ Ze(JC, [["__scopeId", "data-v-d13dcb98"]]), eT = { class: "library-shelf-tree-node" }, tT = ["aria-expanded", "aria-label"], nT = ["href"], iT = { class: "library-shelf-summary-title" }, aT = { dir: "auto" }, rT = { class: "library-muted" }, sT = { dir: "auto" }, oT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, lT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, cT = {
  key: 3,
  class: "library-shelf-tree"
}, uT = ["disabled"], dT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ xe(!1), i = /* @__PURE__ */ xe(!1), a = /* @__PURE__ */ xe(!1), r = /* @__PURE__ */ xe(!1), s = /* @__PURE__ */ xe([]), o = /* @__PURE__ */ xe(!1), l = /* @__PURE__ */ xe(0);
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
      return w(), C("li", eT, [
        e.node.hasChildren ? (w(), C("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? b(_)("library", "Collapse {folder}", { folder: e.node.label }) : b(_)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: f
        }, g(n.value ? "−" : "+"), 9, tT)) : j("", !0),
        c("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          c("span", iT, [
            c("strong", null, [
              c("bdi", aT, g(e.node.label), 1)
            ]),
            c("span", null, g(b(Dn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          c("small", rT, [
            c("bdi", sT, g(e.node.path), 1)
          ])
        ], 8, nT),
        a.value ? (w(), C("small", oT, g(b(_)("library", "Loading folders…")), 1)) : r.value ? (w(), C("small", lT, g(b(_)("library", "Could not load folders.")), 1)) : j("", !0),
        n.value && s.value.length ? (w(), C("ul", cT, [
          (w(!0), C(de, null, Me(s.value, (x) => (w(), Fe(E, {
            key: x.id,
            node: x,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : j("", !0),
        n.value && o.value ? (w(), C("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: u
        }, g(b(_)("library", "Load more folders")), 9, uT)) : j("", !0)
      ]);
    };
  }
}, fT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, hT = { id: "library-sidebar-filters-heading" }, pT = ["aria-label"], vT = ["value"], gT = ["name", "value"], mT = ["value"], bT = ["value"], yT = ["title"], _T = ["placeholder"], wT = { value: "" }, ST = ["value"], CT = { class: "library-publisher-filter" }, TT = { for: "library-publisher-search" }, ET = ["placeholder", "title", "aria-expanded"], AT = ["value"], kT = {
  key: 0,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, OT = ["onClick"], xT = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, NT = { class: "library-publication-filter" }, LT = { for: "library-publication-search" }, RT = ["placeholder", "aria-expanded"], IT = ["value"], PT = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, $T = ["onClick"], DT = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, MT = { class: "library-year-filter" }, FT = { for: "library-year-search" }, zT = ["placeholder", "aria-expanded"], UT = ["value"], BT = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, jT = ["onClick"], HT = {
  type: "submit",
  class: "button secondary library-year-apply"
}, VT = { class: "library-creator-filter" }, GT = { for: "library-creator-search" }, KT = ["placeholder", "title", "aria-expanded"], WT = ["value"], qT = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, YT = ["onClick"], XT = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, ZT = ["placeholder"], JT = { value: "" }, QT = ["value"], eE = { value: "" }, tE = ["value"], nE = { class: "library-folder-filter" }, iE = { for: "library-folder-search" }, aE = ["placeholder", "title", "aria-expanded"], rE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, sE = ["onClick"], oE = {
  type: "submit",
  class: "button secondary library-folder-apply"
}, lE = { value: "" }, cE = ["value"], uE = { value: "" }, dE = ["value"], fE = { class: "library-subject-filter" }, hE = { for: "library-subject-search" }, pE = ["placeholder", "title", "aria-expanded"], vE = ["value"], gE = {
  key: 0,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, mE = ["onClick"], bE = { value: "" }, yE = ["value"], _E = { value: "" }, wE = { value: "1" }, SE = {
  type: "submit",
  class: "button primary"
}, CE = {
  href: "?",
  class: "button secondary"
}, TE = ["href"], EE = ["lang", "dir"], AE = ["aria-label"], kE = ["href", "aria-label", "title", "onClick"], OE = ["title"], xE = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, NE = { class: "library-review-header" }, LE = { class: "library-muted library-catalogue-eyebrow" }, RE = { id: "library-review-heading" }, IE = ["aria-label"], PE = ["href", "aria-current", "onClick"], $E = ["aria-label"], DE = ["name", "value"], ME = {
  type: "submit",
  class: "button secondary"
}, FE = ["aria-busy"], zE = { key: 0 }, UE = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, BE = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, jE = { class: "library-metadata-review-workbench-copy" }, HE = { class: "library-muted library-catalogue-eyebrow" }, VE = ["title"], GE = {
  key: 0,
  class: "library-metadata-review-card"
}, KE = {
  class: "library-bidi-human",
  dir: "auto"
}, WE = { class: "library-muted" }, qE = {
  class: "library-bidi-machine",
  dir: "ltr"
}, YE = { class: "library-metadata-review-fields" }, XE = {
  class: "library-bidi-human",
  dir: "auto"
}, ZE = {
  class: "library-bidi-human",
  dir: "auto"
}, JE = {
  class: "library-bidi-human",
  dir: "auto"
}, QE = {
  class: "library-bidi-machine",
  dir: "ltr"
}, eA = {
  class: "library-bidi-human",
  dir: "auto"
}, tA = {
  class: "library-bidi-human",
  dir: "auto"
}, nA = ["action"], iA = ["value"], aA = ["value"], rA = {
  type: "submit",
  class: "button secondary"
}, sA = { class: "library-metadata-review-actions" }, oA = ["href"], lA = ["href"], cA = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, uA = ["href"], dA = ["aria-label"], fA = ["onClick"], hA = {
  class: "library-bidi-human",
  dir: "auto"
}, pA = {
  key: 0,
  class: "library-muted"
}, vA = {
  class: "library-bidi-human",
  dir: "auto"
}, gA = {
  key: 1,
  class: "library-scan-error"
}, mA = {
  class: "library-bidi-human",
  dir: "auto"
}, bA = ["onClick"], yA = ["href"], _A = ["aria-label"], wA = ["href"], SA = {
  key: 1,
  class: "library-muted"
}, CA = { key: 0 }, TA = ["href"], EA = {
  key: 3,
  class: "library-muted"
}, AA = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, kA = { class: "library-home-header" }, OA = { class: "library-muted library-catalogue-eyebrow" }, xA = { id: "library-home-heading" }, NA = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, LA = { id: "library-continue-heading" }, RA = { class: "library-muted" }, IA = ["href"], PA = {
  key: 0,
  class: "library-home-card-row"
}, $A = ["onClick"], DA = { class: "library-cover-frame" }, MA = ["src"], FA = { class: "library-cover-summary" }, zA = ["onClick"], UA = { dir: "auto" }, BA = {
  key: 0,
  class: "library-cover-creator"
}, jA = { dir: "auto" }, HA = ["href"], VA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, GA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, KA = { id: "library-recent-heading" }, WA = { class: "library-muted" }, qA = ["href"], YA = {
  key: 0,
  class: "library-home-card-row"
}, XA = ["onClick"], ZA = { class: "library-cover-frame" }, JA = ["src"], QA = { class: "library-cover-summary" }, ek = ["onClick"], tk = { dir: "auto" }, nk = {
  key: 0,
  class: "library-cover-creator"
}, ik = { dir: "auto" }, ak = ["href"], rk = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, sk = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, ok = { id: "library-home-shelves-heading" }, lk = { class: "library-muted" }, ck = ["href"], uk = ["aria-label"], dk = ["href"], fk = { dir: "auto" }, hk = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, pk = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, vk = { id: "library-home-attention-heading" }, gk = { class: "library-muted" }, mk = ["href"], bk = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, yk = { class: "library-home-header" }, _k = { class: "library-muted library-catalogue-eyebrow" }, wk = { id: "library-shelves-landing-heading" }, Sk = { class: "library-muted" }, Ck = ["aria-label"], Tk = { class: "library-shelf-tree" }, Ek = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, Ak = { class: "library-muted" }, kk = { class: "library-empty-actions" }, Ok = ["href"], xk = ["href"], Nk = {
  key: 4,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, Lk = { class: "library-catalogue-header" }, Rk = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, Ik = { id: "library-catalogue-heading" }, Pk = ["aria-label"], $k = ["aria-label"], Dk = ["name", "value"], Mk = { "data-library-control": "sort" }, Fk = { value: "title" }, zk = { value: "recent" }, Uk = { value: "publicationDate" }, Bk = { value: "publication" }, jk = { value: "lastOpened" }, Hk = { value: "format" }, Vk = ["aria-label"], Gk = ["aria-pressed"], Kk = ["aria-pressed"], Wk = ["aria-pressed"], qk = ["aria-pressed"], Yk = {
  id: "library-collections",
  class: "library-saved-collections"
}, Xk = ["title"], Zk = ["action", "title"], Jk = ["value"], Qk = ["value"], e2 = ["placeholder", "disabled"], t2 = ["disabled", "title"], n2 = ["aria-label"], i2 = ["href"], a2 = { class: "library-saved-collection-count" }, r2 = ["action"], s2 = ["value"], o2 = {
  type: "submit",
  class: "button tertiary"
}, l2 = ["aria-label"], c2 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, u2 = ["title"], d2 = { class: "library-workspace-panel-purpose" }, f2 = { class: "library-workspace-scope-badge" }, h2 = { "aria-live": "polite" }, p2 = ["action"], v2 = ["value"], g2 = ["placeholder"], m2 = ["title"], b2 = ["action"], y2 = ["value"], _2 = ["placeholder"], w2 = ["title"], S2 = ["action"], C2 = ["value"], T2 = ["name", "value"], E2 = ["title"], A2 = ["action"], k2 = ["value"], O2 = ["name", "value"], x2 = { name: "bulkEditField" }, N2 = { value: "publicationType" }, L2 = { value: "subtitle" }, R2 = { value: "creators" }, I2 = { value: "publication" }, P2 = { value: "publicationDate" }, $2 = { value: "language" }, D2 = { value: "publisher" }, M2 = { value: "subjects" }, F2 = { value: "classifications" }, z2 = ["placeholder"], U2 = ["title"], B2 = ["action"], j2 = ["value"], H2 = ["name", "value"], V2 = ["title"], G2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, K2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, W2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, q2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Y2 = { class: "library-muted library-catalogue-eyebrow" }, X2 = ["title"], Z2 = ["aria-label"], J2 = { key: 0 }, Q2 = { key: 1 }, eO = { key: 2 }, tO = ["aria-label"], nO = { key: 0 }, iO = { key: 1 }, aO = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, rO = { class: "library-muted library-catalogue-eyebrow" }, sO = ["title"], oO = ["aria-label"], lO = ["href"], cO = {
  key: 0,
  class: "library-notice"
}, uO = { class: "library-publication-issue-label" }, dO = ["href"], fO = { class: "library-muted" }, hO = {
  key: 1,
  class: "library-publication-unknown-issues"
}, pO = ["title"], vO = ["href"], gO = { class: "library-catalogue-status-row" }, mO = { class: "library-muted library-filter-result-summary" }, bO = { key: 0 }, yO = { href: "?" }, _O = ["aria-label"], wO = { class: "library-pagination-range" }, SO = { key: 0 }, CO = ["href"], TO = {
  key: 1,
  class: "library-muted"
}, EO = ["href"], AO = {
  key: 3,
  class: "library-muted"
}, kO = ["title"], OO = { class: "library-empty-actions" }, xO = ["href"], NO = { class: "library-muted" }, LO = ["title"], RO = { class: "library-empty-actions" }, IO = ["href"], PO = ["title"], $O = { class: "library-empty-actions" }, DO = ["href"], MO = {
  href: "?",
  class: "button primary"
}, FO = ["title"], zO = { class: "library-empty-actions" }, UO = ["href"], BO = {
  key: 5,
  class: "library-select-visible"
}, jO = ["checked"], HO = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, VO = { class: "library-item-selection" }, GO = ["checked", "aria-label", "onChange"], KO = { class: "library-catalogue-list-main" }, WO = ["onClick"], qO = {
  class: "library-bidi-human",
  dir: "auto"
}, YO = {
  key: 0,
  class: "library-muted"
}, XO = {
  class: "library-bidi-human",
  dir: "auto"
}, ZO = { class: "library-catalogue-list-metadata" }, JO = { key: 0 }, QO = {
  class: "library-bidi-human",
  dir: "auto"
}, ex = { key: 1 }, tx = { key: 2 }, nx = ["dir"], ix = { key: 3 }, ax = {
  class: "library-bidi-human",
  dir: "auto"
}, rx = { class: "library-catalogue-list-actions" }, sx = ["href"], ox = ["onClick"], lx = { class: "library-item-selection" }, cx = ["checked", "aria-label", "onChange"], ux = ["aria-labelledby", "aria-expanded", "onClick"], dx = ["id"], fx = { class: "library-cover-frame" }, hx = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, px = ["src", "onLoad", "onError"], vx = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, gx = ["action", "onSubmit"], mx = ["value"], bx = ["value"], yx = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], _x = ["data-library-star-error"], wx = { class: "library-cover-summary" }, Sx = { class: "library-cover-primary" }, Cx = ["id"], Tx = ["onClick"], Ex = {
  class: "library-bidi-human",
  dir: "auto"
}, Ax = {
  key: 0,
  class: "library-cover-creator"
}, kx = {
  class: "library-bidi-human",
  dir: "auto"
}, Ox = {
  key: 1,
  class: "library-cover-badges"
}, xx = {
  key: 0,
  class: "library-cover-badge"
}, Nx = {
  class: "library-bidi-machine",
  dir: "ltr"
}, Lx = {
  key: 1,
  class: "library-cover-context"
}, Rx = {
  class: "library-bidi-human",
  dir: "auto"
}, Ix = { class: "library-cover-primary-actions" }, Px = ["href"], $x = ["aria-label"], Dx = { class: "library-pagination-range" }, Mx = { key: 0 }, Fx = ["href"], zx = {
  key: 1,
  class: "library-muted"
}, Ux = ["href"], Bx = {
  key: 3,
  class: "library-muted"
}, jx = { class: "library-sidebar-content" }, Hx = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, Vx = ["role"], Gx = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, Kx = { class: "library-sidebar-publication-header" }, Wx = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, qx = ["src"], Yx = { class: "library-sidebar-publication-summary" }, Xx = { class: "library-muted library-catalogue-eyebrow" }, Zx = {
  class: "library-bidi-human",
  dir: "auto"
}, Jx = { key: 0 }, Qx = {
  class: "library-bidi-machine",
  dir: "ltr"
}, eN = { class: "library-detail-drawer-actions" }, tN = ["href"], nN = ["aria-label"], iN = ["aria-current", "onClick"], aN = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, rN = { id: "library-sidebar-overview-heading" }, sN = {
  key: 0,
  class: "library-sidebar-description"
}, oN = {
  class: "library-bidi-human",
  dir: "auto"
}, lN = { class: "library-detail-drawer-facts" }, cN = { key: 0 }, uN = { key: 1 }, dN = { key: 2 }, fN = { key: 3 }, hN = { key: 4 }, pN = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, vN = { id: "library-sidebar-metadata-heading" }, gN = ["placeholder"], mN = ["onUpdate:modelValue", "aria-label", "placeholder"], bN = ["onUpdate:modelValue", "aria-label"], yN = ["onClick"], _N = { class: "library-muted" }, wN = {
  key: 0,
  role: "alert"
}, SN = {
  key: 1,
  role: "status"
}, CN = ["disabled"], TN = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, EN = { id: "library-sidebar-suggestions-heading" }, AN = { class: "library-muted" }, kN = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, ON = { id: "library-sidebar-activity-heading" }, xN = { class: "library-detail-drawer-facts" }, NN = { key: 0 }, LN = { key: 1 }, RN = { key: 2 }, IN = { class: "library-detail-drawer-file" }, PN = ["href"], $N = { dir: "ltr" }, DN = {
  key: 1,
  dir: "ltr"
}, MN = ["aria-label"], FN = ["disabled"], zN = ["disabled"], UN = 20, BN = "/apps/library", jN = 2147483647, HN = {
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
    function r(v, p) {
      return Object.prototype.hasOwnProperty.call(a, v) && String(p ?? "").trim() === a[v];
    }
    function s(v) {
      const p = new URLSearchParams(v);
      for (const d of Object.keys(a)) {
        const M = [...new Set([...p.keys()].filter((Ae) => Ae === d || Ae.startsWith(`${d}[`)))], ae = M.reduce((Ae, Re) => Ae + p.getAll(Re).length, 0);
        if (ae > 1 || M.some((Ae) => Ae !== d)) {
          for (const Ae of M) p.delete(Ae);
          continue;
        }
        d !== "status" && ae === 1 && !r(d, p.get(d)) && p.delete(d);
      }
      return p;
    }
    function o(v) {
      return Object.keys(a).some((p) => v.getAll(p).length === 1 && r(p, v.get(p)));
    }
    function l(v) {
      return Object.fromEntries(Object.entries(v || {}).filter(([p, d]) => p === "status" || !Object.prototype.hasOwnProperty.call(a, p) || r(p, d)));
    }
    const f = /* @__PURE__ */ Rt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Rt((f.items || []).map((v) => ({ ...v }))), h = K(() => u), S = K(() => f.shelves || []), E = K(() => f.formats || []), x = K(() => f.publicationTypes?.length ? f.publicationTypes : n), A = K(() => f.publications || []), O = K(() => f.publicationIssueContext || null), D = K(() => f.scanStatuses || []), F = K(() => f.workflowStatuses || []), W = K(() => f.classifications || []), I = K(() => f.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), P = /* @__PURE__ */ Rt({
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
    const ce = /* @__PURE__ */ xe(P.publication), J = /* @__PURE__ */ xe(P.q), fe = /* @__PURE__ */ xe(!1), Y = /* @__PURE__ */ xe(null), le = K(() => {
      const v = ce.value.trim().toLocaleLowerCase();
      return (v !== "" && Y.value !== null ? Y.value : A.value).filter((d) => v === "" || d.toLocaleLowerCase().includes(v)).slice(0, UN);
    });
    et(() => P.publication, (v) => {
      ce.value = v || "";
    }), et(() => P.q, (v) => {
      J.value = v || "";
    });
    let be = null, Q = null, ie = 0;
    et(ce, (v) => {
      window.clearTimeout(be), Q?.abort(), Q = null, Y.value = null;
      const p = String(v || "").trim();
      if (p.length < 3) return;
      const d = ++ie;
      be = window.setTimeout(() => {
        Pv(p, d);
      }, 200);
    });
    const $ = /* @__PURE__ */ xe(P.publisher), z = /* @__PURE__ */ xe(!1), X = /* @__PURE__ */ xe(null), oe = K(() => X.value || []);
    et(() => P.publisher, (v) => {
      $.value = v || "";
    });
    let ne = null, pe = null, ve = 0;
    et($, (v) => {
      window.clearTimeout(ne), pe?.abort(), pe = null, X.value = null;
      const p = String(v || "").trim();
      if (p.length < 3) return;
      const d = ++ve;
      ne = window.setTimeout(() => {
        Nv(p, d);
      }, 200);
    });
    const we = /* @__PURE__ */ xe(P.creator), ye = /* @__PURE__ */ xe(!1), Ge = /* @__PURE__ */ xe(null), Ee = K(() => Ge.value || []);
    et(() => P.creator, (v) => {
      we.value = v || "";
    });
    let ot = null, lt = null, ft = 0;
    et(we, (v) => {
      window.clearTimeout(ot), lt?.abort(), lt = null, Ge.value = null;
      const p = String(v || "").trim();
      if (p.length < 3) return;
      const d = ++ft;
      ot = window.setTimeout(() => {
        xv(p, d);
      }, 200);
    });
    const ht = /* @__PURE__ */ xe(P.folder), Je = /* @__PURE__ */ xe(!1), Vt = /* @__PURE__ */ xe(null), B = K(() => Vt.value || []);
    et(() => P.folder, (v) => {
      ht.value = v || "";
    });
    let m = null, T = null, k = 0;
    et(ht, (v) => {
      window.clearTimeout(m), T?.abort(), T = null, Vt.value = null;
      const p = String(v || "").trim();
      if (p.length < 3) return;
      const d = ++k;
      m = window.setTimeout(() => {
        Rv(p, d);
      }, 200);
    });
    const L = /* @__PURE__ */ xe(P.subject), N = /* @__PURE__ */ xe(!1), U = /* @__PURE__ */ xe(null), q = K(() => U.value || []);
    et(() => P.subject, (v) => {
      L.value = v || "";
    });
    let V = null, Z = null, G = 0;
    et(L, (v) => {
      window.clearTimeout(V), Z?.abort(), Z = null, U.value = null;
      const p = String(v || "").trim();
      if (p.length < 3) return;
      const d = ++G;
      V = window.setTimeout(() => {
        Lv(p, d);
      }, 200);
    });
    const ge = /* @__PURE__ */ xe(P.year), re = /* @__PURE__ */ xe(!1), me = /* @__PURE__ */ xe(null), Ce = K(() => me.value || []);
    et(() => P.year, (v) => {
      ge.value = v || "";
    });
    let Ne = null, Pe = null, $e = 0;
    et(ge, (v) => {
      window.clearTimeout(Ne), Pe?.abort(), Pe = null, me.value = null;
      const p = String(v || "").trim();
      if (p.length < 2) return;
      const d = ++$e;
      Ne = window.setTimeout(() => {
        Iv(p, d);
      }, 200);
    });
    const tt = Object.fromEntries(Object.keys(P).map((v) => [v, v === "sort" ? "title" : v === "view" ? "compact" : ""])), rt = window.location.pathname.indexOf(BN), ct = rt >= 0 ? window.location.pathname.slice(0, rt) : "", pt = {
      catalogue: `${ct}/apps/library/`,
      review: `${ct}/apps/library/?scannerConflicts=1`,
      settings: `${ct}/settings/user/library`
    };
    function wt(v, p) {
      if (typeof v != "string" || v === "") return p;
      try {
        const d = ct ? `${ct}/` : "/";
        let M = v;
        for (let ae = 0; ae < 5; ae += 1) {
          if (!M.startsWith("/") || M.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(M)) return p;
          const Ae = new URL(M, window.location.origin);
          if (Ae.origin !== window.location.origin || !Ae.pathname.startsWith(d)) return p;
          const Re = M.split(/[?#]/, 1)[0];
          for (const Qt of Re.split("/")) {
            let mi = Qt;
            for (let Ea = 0; Ea < 5; Ea += 1) {
              const In = decodeURIComponent(mi);
              if (/[\\/\u0000-\u001f\u007f]/.test(In) || In === "." || In === "..") return p;
              if (In === mi) break;
              if (mi = In, Ea === 4) return p;
            }
          }
          const nt = decodeURI(M);
          if (nt === M) return v;
          M = nt;
        }
        return p;
      } catch {
        return p;
      }
    }
    const qt = K(() => wt(f.settingsUrl, pt.settings)), Ve = K(() => wt(f.catalogueRootUrl, pt.catalogue)), zt = K(() => wt(f.homeUrl, `${pt.catalogue}?home=1`)), ui = K(() => wt(f.shelvesUrl, `${pt.catalogue}?shelves=1`)), Mi = K(() => wt(f.reviewUrl || f.scannerConflictReviewUrl, pt.review)), Fi = K(() => Object.entries(a).some(([v, p]) => P[v] === p)), fa = K(() => i.reduce((v, p) => v + Number(Bl.value[p.countKey] || 0), 0)), on = K(() => f.surface === "home"), ln = K(() => f.surface === "shelves"), _s = K(() => !on.value && !ln.value && !Fi.value && !P.starred && P.sort !== "lastOpened" && !P.shelf), ws = K(() => [
      { key: "home", name: _("library", "Home"), href: zt.value, active: on.value },
      { key: "all", name: _("library", "All publications"), href: Ve.value, active: _s.value },
      { key: "starred", name: _("library", "Starred"), href: `${Ve.value}?starred=1`, active: P.starred === "1" },
      { key: "continue", name: _("library", "Continue reading"), href: `${Ve.value}?sort=lastOpened`, active: P.sort === "lastOpened" },
      { key: "shelves", name: _("library", "Shelves"), href: ui.value, active: ln.value || !!P.shelf },
      { key: "collections", name: _("library", "Collections"), href: `${Ve.value}#library-collections`, active: !1 }
    ]), Yt = K(() => f.requestToken || ""), Va = K(() => f.catalogueEndpointUrl || "/apps/library/catalogue"), Ss = K(() => f.shelfChildrenUrl || "/apps/library/shelves/children"), ha = K(() => f.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), pa = K(() => f.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), cn = K(() => f.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), di = K(() => f.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Ga = K(() => f.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Ka = K(() => f.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Il = K(() => f.itemSidebarUrlTemplate || `${ct}/apps/library/items/__ITEM_ID__/sidebar`), Cs = K(() => f.batchTagUrl || "/apps/library/bulk/tags"), Wa = K(() => f.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Ts = K(() => f.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), qa = K(() => f.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Pl = K(() => f.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), fi = K(() => f.scannerConflictReviewUrl || "?scannerConflicts=1");
    f.importHealthSummary, f.importHealthSummary && Object.keys(f.importHealthSummary).length > 0;
    const Ya = K(() => f.discoveryPage === "publication"), Xa = K(() => f.discoveryPage === "year"), st = K(() => f.discoveryPage === "creator"), On = K(() => Ya.value || Xa.value || st.value), Es = K(() => f.discoveryTitle || P.publication || P.year || P.creator || ""), As = K(() => On.value ? Es.value : _("library", "Library")), va = K(() => st.value ? _("library", "Creator") : Xa.value ? _("library", "Publication year") : _("library", "Publication / series")), Za = K(() => Number(f.rootCount || 0)), ks = K(() => Number(f.enabledRootCount || 0)), Ja = K(() => Za.value === 0), Qa = K(() => Za.value > 0 && ks.value === 0), Os = K(() => Ln.value.length > 0), xs = {
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
    }, xn = {
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
    }, Ns = {
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
    }, zi = K(() => {
      if (typeof window > "u") return "";
      const v = new URLSearchParams(window.location.search);
      if (v.get("batchMetadataApplyResult") !== "1") return "";
      const p = v.get("batchMetadataField") || "field", d = v.get("batchMetadataApplied") || "0", M = v.get("batchMetadataUnchanged") || "0", ae = v.get("batchMetadataSkipped") || "0";
      return _("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: d, field: p, unchanged: M, skipped: ae });
    }), Nn = K(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? _("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Ls = K(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? _("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Ui = K(() => f.savedCollections || []), Rs = K(() => f.savedCollectionSaveUrl || "/apps/library/collections"), $l = K(() => f.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), er = ["compact", "gallery", "list", "shelf"], Ut = K(() => er.includes(P.view) ? P.view : "compact"), ga = K(() => ({
      "library-cover-gallery--compact": Ut.value === "compact",
      "library-cover-gallery--gallery": Ut.value === "gallery",
      "library-cover-gallery--shelf": Ut.value === "shelf"
    }));
    function tr(v) {
      const p = String(v || "").trim();
      if (p.length <= 32) return p;
      const d = p.split("/").filter(Boolean);
      return d.length > 0 ? `…/${d.at(-1)}` : p;
    }
    function ma(v, p) {
      const d = String(p || "").trim();
      if (d === "" || xn[v] === d) return "";
      if (v === "format") return d.toUpperCase();
      if (v === "folder") return tr(d);
      const M = Ns[v]?.[d];
      return M ? _("library", M) : d;
    }
    function hi(v, p) {
      const d = String(P[v] || "").trim(), M = ma(v, d), ae = _("library", p);
      return {
        key: v,
        label: ae,
        value: d,
        displayValue: M,
        title: M ? `${ae}: ${d}` : ae
      };
    }
    const Ln = K(() => Object.entries(xs).map(([v, p]) => hi(v, p)).filter((v) => v.value !== "" && !(v.key === "sort" && v.value === "title") && !(v.key === "view" && v.value === "compact"))), un = /* @__PURE__ */ new Set([
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
    ]), Dl = K(() => Object.entries(l(P)).filter(([v, p]) => !un.has(v) && String(p || "").trim() !== "").map(([v, p]) => ({ key: v, value: p }))), ba = K(() => Object.entries(P).filter(([v, p]) => !["q", "sort", "starred"].includes(v) && String(p || "").trim() !== "").map(([v, p]) => ({ key: v, value: p }))), ya = K(() => Object.entries(l(P)).filter(([v, p]) => String(p || "").trim() !== "").map(([v, p]) => ({ key: v, value: p }))), Is = K(() => ya.value.filter(({ key: v, value: p }) => v !== "q" && !(v === "sort" && p === "title"))), _a = /* @__PURE__ */ Rt({}), Bi = K(() => f.homeRows || { continueReading: [], recentlyAdded: [] }), nr = K(() => f.homeShelves || []), Ps = K(() => f.shelfTree || []), wa = K(() => f.needsAttention || { count: 0, url: `${Ve.value}?needsMetadata=1` }), Xt = /* @__PURE__ */ xe([]), Sa = K(() => new Set(Xt.value));
    function ir(v, p) {
      const d = new Set(Xt.value);
      p ? d.add(Number(v)) : d.delete(Number(v)), Xt.value = [...d];
    }
    function Ca(v) {
      Xt.value = v.currentTarget.checked ? h.value.map((p) => Number(p.id)) : [];
    }
    function ar() {
      const v = new Set(h.value.map((p) => Number(p.id)));
      Xt.value = Xt.value.filter((p) => v.has(p));
    }
    function ee(v) {
      const p = v.target;
      if (p instanceof HTMLFormElement) {
        p.querySelectorAll("input[data-library-selected-id]").forEach((d) => d.remove());
        for (const d of Xt.value) {
          const M = document.createElement("input");
          M.type = "hidden", M.name = "itemIds[]", M.value = String(d), M.dataset.librarySelectedId = "1", p.appendChild(M);
        }
      }
    }
    const y = /* @__PURE__ */ xe(null), R = /* @__PURE__ */ xe(null), H = /* @__PURE__ */ Rt({ loading: !1, error: "", missing: !1 }), se = /* @__PURE__ */ xe("overview"), ue = /* @__PURE__ */ Rt({ saving: !1, saved: !1, error: "" }), he = /* @__PURE__ */ Rt({ title: "", publicationDate: "", identifiers: [] }), Qe = /* @__PURE__ */ xe(null), Ke = /* @__PURE__ */ xe(null), ut = /* @__PURE__ */ xe(!1);
    let St = null, Zt = null, vt = null, Ml = !1, rr = null, Fl = 0;
    const pi = K(() => R.value !== null), sr = K(() => y.value ? h.value.findIndex((v) => v.id === y.value.id) : -1), $s = K(() => sr.value > 0 ? h.value[sr.value - 1] : null), Ds = K(() => sr.value >= 0 && sr.value < h.value.length - 1 ? h.value[sr.value + 1] : null), wv = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Sv = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Ms(v) {
      const p = String(v ?? "").trim(), d = p.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return d ? d[1] : p;
    }
    function Hu(v) {
      return { ...v, publicationDate: Ms(v?.publicationDate) };
    }
    function Vu(v) {
      he.title = String(v?.title || ""), he.publicationDate = Ms(v?.publicationDate), he.identifiers = Array.isArray(v?.identifiers) ? v.identifiers.map((p) => ({ scheme: String(p?.scheme || ""), displayValue: String(p?.displayValue || p?.value || "") })) : [], Object.assign(ue, { saving: !1, saved: !1, error: "" });
    }
    function Cv() {
      he.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Tv(v) {
      he.identifiers.splice(v, 1);
    }
    async function Ev() {
      const v = y.value;
      if (!v?.updateUrl || ue.saving) return;
      Object.assign(ue, { saving: !0, saved: !1, error: "" });
      const p = new FormData();
      p.set("requesttoken", Yt.value), p.set("metadataAutosave", "1");
      for (const d of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const M = v[d];
        p.set(d, Array.isArray(M) ? M.join(", ") : String(M ?? ""));
      }
      p.set("title", he.title), p.set("publicationDate", Ms(he.publicationDate)), he.identifiers.forEach((d, M) => {
        p.set(`identifiers[${M}][scheme]`, d.scheme), p.set(`identifiers[${M}][displayValue]`, d.displayValue);
      });
      try {
        const d = await fetch(v.updateUrl, { method: "POST", body: p, credentials: "same-origin", headers: { Accept: "application/json" } }), M = await d.json().catch(() => ({}));
        if (!d.ok || M.saved !== !0) throw new Error(M.error || _("library", "Metadata could not be saved."));
        v.title = he.title.trim(), v.publicationDate = Ms(he.publicationDate), v.identifiers = he.identifiers.filter((Ae) => Ae.scheme.trim() || Ae.displayValue.trim()).map((Ae) => ({ ...Ae }));
        const ae = h.value.find((Ae) => Number(Ae.id) === Number(v.id));
        ae && (ae.title = v.title, ae.publicationDate = v.publicationDate), ue.saved = !0;
      } catch (d) {
        ue.error = d?.message || _("library", "Metadata could not be saved.");
      } finally {
        ue.saving = !1;
      }
    }
    const vi = K(() => {
      const v = r("scannerConflicts", P.scannerConflicts) || r("weakMetadata", P.weakMetadata), p = v ? h.value.find((d) => Fs(d).length > 0) : null;
      return {
        enabled: v,
        item: p,
        fields: p ? Fs(p) : [],
        reviewNextUrl: fi.value,
        skipUrl: I.value.nextUrl || fi.value
      };
    }), Av = K(() => i.map((v) => ({
      ...v,
      label: _("library", v.label),
      href: `${Ve.value}?${encodeURIComponent(v.key)}=${encodeURIComponent(v.value)}`,
      active: String(P[v.key] || "") === v.value
    })));
    function zl(v) {
      return Array.isArray(v) ? JSON.stringify(v) : v == null ? "" : String(v);
    }
    function Fs(v) {
      const p = v.fieldValues || {}, d = v.fieldSources || {};
      return wv.filter((M) => Object.prototype.hasOwnProperty.call(p, M)).map((M) => {
        const ae = zl(v[M]), Ae = zl(p[M]), Re = zl(d[M] || v.metadataSource || "scanner"), nt = Re.includes("filename") || Re.includes("path") ? Ae : "", Qt = Re.includes("sidecar") ? Ae : "";
        return { field: M, currentValue: ae, scannerCandidate: Ae, pathTemplateCandidate: nt, sidecarValue: Qt, sourceProvenance: Re, differs: ae !== Ae };
      }).filter((M) => M.differs);
    }
    let ji = 0, Hi = null;
    function Gu() {
      const v = new URLSearchParams(window.location.search).getAll("item");
      if (v.length !== 1 || !/^[1-9][0-9]*$/.test(v[0])) return null;
      const p = Number(v[0]);
      return Number.isSafeInteger(p) && p <= jN ? p : null;
    }
    function Ku(v, p = "push") {
      const d = new URL(window.location.href);
      d.searchParams.delete("item"), v !== null && d.searchParams.set("item", String(v)), history[`${p}State`]({}, "", `${d.pathname}${d.search}${d.hash}`);
    }
    async function or(v, { historyMode: p = "push", seed: d = null } = {}) {
      Hi?.abort();
      const M = ++ji, ae = new AbortController();
      Hi = ae, R.value = v, se.value = "overview", y.value = d && Number(d.id) === v ? Hu(d) : null, y.value && Vu(y.value), Object.assign(H, { loading: !0, error: "", missing: !1 }), p !== "none" && Ku(v, p);
      try {
        const Ae = Il.value.replace("__ITEM_ID__", encodeURIComponent(String(v))), Re = await fetch(Ae, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ae.signal });
        if (M !== ji) return;
        if (!Re.ok) {
          y.value = null, H.missing = Re.status === 404, H.error = Re.status === 404 ? _("library", "This publication is unavailable or you do not have access.") : _("library", "Could not load publication details. Try again.");
          return;
        }
        const nt = await Re.json();
        if (M !== ji) return;
        if (typeof nt?.item?.id != "number" || !Number.isSafeInteger(nt.item.id) || nt.item.id !== v) {
          y.value = null, H.missing = !1, H.error = _("library", "Could not load publication details. Try again.");
          return;
        }
        y.value = Hu(nt.item), Vu(y.value), await nn();
      } catch (Ae) {
        M === ji && Ae?.name !== "AbortError" && (y.value = null, H.missing = !1, H.error = _("library", "Could not load publication details. Try again."));
      } finally {
        M === ji && (H.loading = !1, Hi = null);
      }
    }
    function Rn(v, p) {
      Ul(), St = p?.currentTarget instanceof HTMLElement ? p.currentTarget : null, or(Number(v.id), { seed: v });
    }
    function zs({ historyMode: v = "push", restoreFocus: p = !0 } = {}) {
      vt = p ? St : null, St = null, Hi?.abort(), Hi = null, ji += 1, R.value = null, y.value = null, se.value = "overview", Object.assign(H, { loading: !1, error: "", missing: !1 }), v !== "none" && Ku(null, v);
    }
    function Wu() {
      ut.value ? (Ke.value?.$refs?.sidebar || Ke.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Qe.value?.focus();
    }
    function kv() {
      const v = vt;
      if (vt = null, Ul(), Ml || !v?.isConnected) return;
      const p = Fl;
      rr = window.requestAnimationFrame(() => {
        rr = null, !(p !== Fl || Ml || pi.value || !v.isConnected) && v.focus();
      });
    }
    function Ul() {
      Fl += 1, rr !== null && (window.cancelAnimationFrame(rr), rr = null);
    }
    function lr(v = Zt) {
      ut.value = !!v?.matches, pi.value && nn(Wu);
    }
    function Us(v) {
      v && or(Number(v.id), { seed: v });
    }
    const cr = /* @__PURE__ */ xe(null);
    let Jt = 0, Ta = null, Bs = null, ur = null;
    const wn = /* @__PURE__ */ Rt({ loading: !1, error: "" });
    function Ov(v) {
      const p = s(new FormData(v));
      p.delete("publicationSearch"), p.delete("creatorSearch"), p.delete("subjectSearch"), p.delete("publisherSearch"), p.delete("folderSearch"), p.delete("yearSearch");
      for (const d of Array.from(p.keys()))
        String(p.get(d) || "").trim() === "" && p.delete(d);
      return p.delete("page"), p.get("view") === "compact" && p.delete("view"), p;
    }
    async function dr(v, p, d) {
      const M = new URLSearchParams();
      for (const [Re, nt] of Object.entries(P)) {
        const Qt = String(nt || "").trim();
        Re !== v && Qt !== "" && !(Re === "sort" && Qt === "title") && !(Re === "view" && Qt === "compact") && M.set(Re, Qt);
      }
      M.set(`${v}Search`, p);
      const ae = new AbortController();
      v === "creator" ? lt = ae : v === "publisher" ? pe = ae : v === "subject" ? Z = ae : v === "folder" ? T = ae : Pe = ae;
      const Ae = v === "creator" ? pa.value : v === "publisher" ? cn.value : v === "subject" ? di.value : v === "folder" ? Ga.value : Ka.value;
      try {
        const Re = await fetch(`${Ae}?${M}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ae.signal });
        if (!Re.ok) throw new Error(`${v} suggestions request failed: ${Re.status}`);
        const nt = await Re.json(), Qt = v === "creator" ? ft : v === "publisher" ? ve : v === "subject" ? G : v === "folder" ? k : $e, mi = v === "creator" ? we.value : v === "publisher" ? $.value : v === "subject" ? L.value : v === "folder" ? ht.value : ge.value;
        d === Qt && mi.trim() === p && (v === "creator" ? Ge.value = Array.isArray(nt.creators) ? nt.creators : [] : v === "publisher" ? X.value = Array.isArray(nt.publishers) ? nt.publishers : [] : v === "subject" ? U.value = Array.isArray(nt.subjects) ? nt.subjects : [] : v === "folder" ? Vt.value = Array.isArray(nt.folders) ? nt.folders : [] : me.value = Array.isArray(nt.years) ? nt.years : []);
      } catch (Re) {
        Re?.name !== "AbortError" && (v === "creator" && d === ft && (Ge.value = null), v === "publisher" && d === ve && (X.value = null), v === "subject" && d === G && (U.value = null), v === "folder" && d === k && (Vt.value = null), v === "year" && d === $e && (me.value = null));
      }
    }
    function xv(v, p) {
      return dr("creator", v, p);
    }
    function Nv(v, p) {
      return dr("publisher", v, p);
    }
    function Lv(v, p) {
      return dr("subject", v, p);
    }
    function Rv(v, p) {
      return dr("folder", v, p);
    }
    function Iv(v, p) {
      return dr("year", v, p);
    }
    async function Pv(v, p) {
      const d = new URLSearchParams();
      for (const [ae, Ae] of Object.entries(P)) {
        const Re = String(Ae || "").trim();
        ae !== "publication" && Re !== "" && !(ae === "sort" && Re === "title") && !(ae === "view" && Re === "compact") && d.set(ae, Re);
      }
      d.set("publicationSearch", v);
      const M = new AbortController();
      Q = M;
      try {
        const ae = await fetch(`${ha.value}?${d}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: M.signal
        });
        if (!ae.ok) throw new Error(`Publication suggestions request failed: ${ae.status}`);
        const Ae = await ae.json();
        p === ie && ce.value.trim() === v && (Y.value = Array.isArray(Ae.publications) ? Ae.publications : []);
      } catch (ae) {
        ae?.name !== "AbortError" && p === ie && (Y.value = null);
      } finally {
        p === ie && (Q = null);
      }
    }
    function $v(v) {
      u.splice(0, u.length, ...(v.items || []).map((d) => ({ ...d }))), ar();
      const p = new Set(v.facetsDeferred ? [
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
      for (const d of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "publisherSuggestionsUrl", "subjectSuggestionsUrl", "folderSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "smartViewCountsPending", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        !p.has(d) && Object.prototype.hasOwnProperty.call(v, d) && (f[d] = v[d]);
      Object.assign(P, tt, v.activeFilters || {});
    }
    async function Dv() {
      if (f.surface !== "index") return;
      const v = Jt, p = JSON.stringify({ ...P }), d = new URLSearchParams();
      d.set("hydrate", "1");
      for (const [ae, Ae] of Object.entries(P)) {
        const Re = String(Ae || "").trim();
        Re !== "" && !(ae === "sort" && Re === "title") && !(ae === "view" && Re === "compact") && d.set(ae, Re);
      }
      const M = new AbortController();
      Bs = M;
      try {
        const ae = await fetch(`${Va.value}${d.size ? `?${d}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: M.signal
        });
        if (!ae.ok) return;
        const Ae = await ae.json();
        if (v !== Jt || p !== JSON.stringify({ ...P })) return;
        for (const Re of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Ae, Re) && (f[Re] = Ae[Re]);
      } catch (ae) {
        if (ae?.name !== "AbortError") return;
      } finally {
        Bs === M && (Bs = null);
      }
    }
    async function dn(v, p = null) {
      const d = v?.currentTarget?.tagName === "FORM" ? v.currentTarget : v?.currentTarget?.form;
      if (!d && !p?.params) return;
      const M = s(p?.params ?? Ov(d));
      if (on.value || ln.value) {
        fr(M, Ve.value);
        return;
      }
      const ae = M.toString(), Ae = ae ? `?${ae}` : "", Re = p?.generation ?? ++Jt, nt = o(M), Qt = p?.historyMode ?? (nt ? "push" : "replace"), mi = p?.historyTraversal === !0;
      if (Re !== Jt) return;
      p === null && Ta?.abort();
      const Ea = new AbortController();
      Ta = Ea, wn.loading = !0, wn.error = "";
      try {
        const In = await fetch(Va.value + Ae, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ea.signal
        });
        if (Re !== Jt) return;
        if (!In.ok) {
          mi ? fr(M) : nt ? wn.error = _("library", "Could not load this review queue. Try again.") : fr(M);
          return;
        }
        const lg = await In.json();
        if (Re !== Jt) return;
        $v(lg), Qt !== "none" && (history[Qt === "push" ? "pushState" : "replaceState"]({}, "", ae ? `?${ae}` : window.location.pathname), pi.value && zs({ historyMode: "none" }));
      } catch (In) {
        Re === Jt && In?.name !== "AbortError" && (mi ? fr(M) : nt ? wn.error = _("library", "Could not load this review queue. Try again.") : fr(M));
      } finally {
        Re === Jt && (Ta = null, wn.loading = !1);
      }
    }
    function qu() {
      Ta?.abort();
      const v = new URLSearchParams(window.location.search), p = Gu();
      v.has("item") && p === null && (v.delete("item"), history.replaceState({}, "", `${window.location.pathname}${v.toString() ? `?${v}` : ""}${window.location.hash}`)), p === null ? zs({ historyMode: "none" }) : or(p, { historyMode: "none", seed: h.value.find((d) => Number(d.id) === p) || null }), v.delete("item"), dn(null, {
        params: s(v),
        generation: ++Jt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function fr(v, p = window.location.pathname) {
      const d = document.createElement("form");
      d.method = "get", d.action = p, d.hidden = !0;
      for (const [M, ae] of v.entries()) {
        const Ae = document.createElement("input");
        Ae.type = "hidden", Ae.name = M, Ae.value = ae, d.appendChild(Ae);
      }
      document.body.appendChild(d), d.submit(), d.remove();
    }
    function gi(v, p = null, d = null) {
      if (p === null) {
        dn(v);
        return;
      }
      dn({ currentTarget: v }, { params: p, generation: d });
    }
    async function Mv(v, p = ce.value) {
      P.publication = String(p || "").trim(), ce.value = P.publication, fe.value = !1, await nn(), dn({ currentTarget: v });
    }
    function Fv(v, p) {
      Mv(p.currentTarget.form, v);
    }
    async function zv(v) {
      P.q = String(J.value || "").trim(), P.publication = String(ce.value || "").trim(), P.publisher = String($.value || "").trim(), P.creator = String(we.value || "").trim(), P.subject = String(L.value || "").trim(), P.folder = String(ht.value || "").trim(), P.year = String(ge.value || "").trim(), fe.value = !1, z.value = !1, ye.value = !1, N.value = !1, Je.value = !1, re.value = !1, await nn(), dn({ currentTarget: v });
    }
    async function hr(v, p, d) {
      P[p] = String(d || "").trim(), p === "creator" ? (we.value = P.creator, ye.value = !1) : p === "publisher" ? ($.value = P.publisher, z.value = !1) : p === "subject" ? (L.value = P.subject, N.value = !1) : p === "folder" ? (ht.value = P.folder, Je.value = !1) : (ge.value = P.year, re.value = !1), await nn(), dn({ currentTarget: v });
    }
    function Uv(v) {
      zv(v.currentTarget);
    }
    function Bv(v, p) {
      hr(p.currentTarget.form, "creator", v);
    }
    function jv(v, p) {
      hr(p.currentTarget.form, "publisher", v);
    }
    function Hv(v, p) {
      hr(p.currentTarget.form, "folder", v);
    }
    function Yu(v, p = L.value) {
      window.clearTimeout(V), Z?.abort(), Z = null, hr(v, "subject", p);
    }
    function Vv(v) {
      Yu(v.currentTarget.form);
    }
    function Gv(v, p) {
      Yu(p.currentTarget.form, v);
    }
    function Kv(v, p) {
      hr(p.currentTarget.form, "year", v);
    }
    function Xu(v) {
      const p = new URLSearchParams();
      for (const [d, M] of Object.entries(P)) {
        const ae = String(M || "").trim();
        ae !== "" && d !== v && !(d === "sort" && ae === "title") && !(d === "view" && ae === "compact") && p.set(d, ae);
      }
      return p;
    }
    function Zu(v) {
      const p = Xu(v).toString();
      return on.value || ln.value ? `${Ve.value}${p ? `?${p}` : ""}` : p ? `?${p}` : "?";
    }
    function Wv(v) {
      const p = Xu(v);
      P[v] = v === "sort" ? "title" : v === "view" ? "compact" : "", dn(null, {
        params: p,
        generation: ++Jt
      });
    }
    function qv(v) {
      const p = new URL(v.href, window.location.origin).searchParams;
      dn(null, {
        params: p,
        generation: ++Jt
      });
    }
    function Yv() {
      return Zu("q");
    }
    const Bl = K(() => f.smartViewCounts || {}), Xv = K(() => new Set(f.smartViewCountsPending || []));
    function Zv(v) {
      return Xv.value.has(v) || !Object.prototype.hasOwnProperty.call(Bl.value, v) ? "—" : Number(Bl.value[v] || 0);
    }
    const Ju = K(() => {
      const v = {};
      for (const [p, d] of Object.entries(P)) {
        const M = String(d || "").trim();
        M !== "" && !(p === "sort" && M === "title") && (v[p] = M);
      }
      return v;
    }), Jv = K(() => JSON.stringify(Ju.value)), jl = K(() => Object.keys(Ju.value).length > 0);
    function js(v) {
      if (!er.includes(v)) return;
      P.view = v;
      const p = new URLSearchParams();
      for (const [d, M] of Object.entries(l(P))) {
        const ae = String(M || "").trim();
        ae !== "" && !(d === "sort" && ae === "title") && !(d === "view" && ae === "compact") && p.set(d, ae);
      }
      p.delete("page"), dn(null, {
        params: p,
        generation: ++Jt
      });
    }
    function Qv(v) {
      const p = s(window.location.search);
      for (const M of Object.keys(xs))
        p.delete(M);
      p.delete("page");
      for (const [M, ae] of Object.entries(v))
        String(ae || "").trim() !== "" && p.set(M, String(ae));
      const d = p.toString();
      return d ? `?${d}` : "?";
    }
    function eg(v) {
      return Qv(v || {});
    }
    function tg(v) {
      return $l.value.replace("__COLLECTION_ID__", encodeURIComponent(String(v || "0")));
    }
    function pr(v) {
      return String(v || "").toUpperCase();
    }
    function vr(v) {
      return _a[v.id] || "loading";
    }
    function ng(v) {
      _a[v.id] = "loaded";
    }
    function ig(v) {
      _a[v.id] = "error";
    }
    function Hl(v) {
      const p = String(v?.publication || "").trim(), d = String(v?.publicationDate || "").trim();
      return p && d ? `${p} · ${d}` : p || d ? p || d : [v?.publicationType, pr(v?.extension)].filter(Boolean).join(" · ");
    }
    function ag(v) {
      const p = String(v?.tagName || "").toLowerCase();
      return v?.isContentEditable || ["input", "select", "textarea", "button"].includes(p);
    }
    function rg(v) {
      v.key !== "/" || v.metaKey || v.ctrlKey || v.altKey || v.shiftKey || ag(v.target) || (v.preventDefault(), cr.value?.focus(), cr.value?.select?.());
    }
    async function sg(v) {
      v.key !== "Escape" || document.activeElement !== cr.value || P.q === "" || (v.preventDefault(), J.value = "", P.q = "", await nn(), gi({ currentTarget: cr.value }));
    }
    function og(v) {
      if (!pi.value || v.metaKey || v.ctrlKey || v.altKey)
        return !1;
      if (v.key === "Escape")
        return v.preventDefault(), zs(), !0;
      if (v.key === "Tab" && ut.value) {
        if (Ke.value?.focusTrap) return !1;
        const p = Ke.value?.$refs?.sidebar || Ke.value?.$el || Ke.value, d = [...p?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ae) => !Ae.hidden && Ae.getAttribute("aria-hidden") !== "true");
        if (d.length === 0) return !1;
        const M = d[0], ae = d[d.length - 1];
        if (v.shiftKey && (document.activeElement === M || !p.contains(document.activeElement)))
          return v.preventDefault(), ae.focus(), !0;
        if (!v.shiftKey && (document.activeElement === ae || !p.contains(document.activeElement)))
          return v.preventDefault(), M.focus(), !0;
      }
      return v.key === "ArrowLeft" && $s.value ? (v.preventDefault(), Us($s.value), !0) : v.key === "ArrowRight" && Ds.value ? (v.preventDefault(), Us(Ds.value), !0) : !1;
    }
    function Qu(v) {
      og(v) || (rg(v), sg(v));
    }
    Pi(() => {
      window.addEventListener("keydown", Qu), window.addEventListener("popstate", qu), Zt = window.matchMedia?.("(max-width: 1023px)") || null, lr(), Zt?.addEventListener ? Zt.addEventListener("change", lr) : Zt?.addListener?.(lr);
      const v = new URLSearchParams(window.location.search), p = Gu();
      v.has("item") && p === null ? (v.delete("item"), history.replaceState({}, "", `${window.location.pathname}${v.toString() ? `?${v}` : ""}${window.location.hash}`)) : p !== null && or(p, { historyMode: "none", seed: h.value.find((d) => Number(d.id) === p) || null }), ur = window.requestAnimationFrame(() => {
        ur = null, Dv();
      });
    }), Ha(() => {
      Ml = !0, Ul(), window.removeEventListener("keydown", Qu), window.removeEventListener("popstate", qu), window.clearTimeout(be), window.clearTimeout(ot), window.clearTimeout(V), window.clearTimeout(Ne), Q?.abort(), lt?.abort(), Z?.abort(), Pe?.abort(), Jt += 1, ur !== null && window.cancelAnimationFrame(ur), ur = null, Bs?.abort(), Ta?.abort(), Ta = null, ji += 1, Hi?.abort(), Hi = null, Zt?.removeEventListener ? Zt.removeEventListener("change", lr) : Zt?.removeListener?.(lr), Zt = null, vt = null;
    });
    const gr = /* @__PURE__ */ Rt({}), mr = /* @__PURE__ */ Rt({});
    async function ed(v, p) {
      const d = p?.currentTarget?.closest?.("form") || p?.currentTarget;
      if (!d || !v?.starUrl || gr[v.id]) return;
      const M = !!v.starred;
      gr[v.id] = !0, mr[v.id] = "", v.starred = !M;
      try {
        (await fetch(v.starUrl, {
          method: "POST",
          body: new FormData(d),
          credentials: "same-origin"
        })).ok || (v.starred = M, mr[v.id] = _("library", "Could not update star. Try again."));
      } catch {
        v.starred = M, mr[v.id] = _("library", "Could not update star. Try again.");
      } finally {
        gr[v.id] = !1;
      }
    }
    return (v, p) => (w(), Fe(b(QC), { "app-name": "library" }, {
      default: ke(() => [
        _e(b(P1), {
          "aria-label": b(_)("library", "Library navigation")
        }, {
          list: ke(() => [
            _e(b(Up), null, {
              default: ke(() => [
                (w(!0), C(de, null, Me(ws.value, (d) => (w(), Fe(b(jf), {
                  key: d.key,
                  active: d.active,
                  href: d.href,
                  name: d.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                _e(b(jf), {
                  active: Fi.value,
                  href: Mi.value,
                  name: fa.value > 0 ? `${b(_)("library", "Review")} (${fa.value})` : b(_)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: ke(() => [
            c("section", fT, [
              c("h2", hT, g(b(_)("library", "Filters")), 1),
              c("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": b(_)("library", "Catalogue search and filters"),
                onSubmit: ze(Uv, ["prevent"])
              }, [
                c("input", {
                  type: "hidden",
                  name: "folder",
                  value: P.folder
                }, null, 8, vT),
                (w(!0), C(de, null, Me(Dl.value, (d) => (w(), C("input", {
                  key: `sidebar-${d.key}`,
                  type: "hidden",
                  name: d.key,
                  value: d.value
                }, null, 8, gT))), 128)),
                P.sort && P.sort !== "title" ? (w(), C("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: P.sort
                }, null, 8, mT)) : j("", !0),
                P.view && P.view !== "compact" ? (w(), C("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: P.view
                }, null, 8, bT)) : j("", !0),
                c("label", {
                  class: "library-quick-filter-search",
                  title: b(_)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  c("span", null, [
                    Oe(g(b(_)("library", "Search")) + " ", 1),
                    p[51] || (p[51] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  We(c("input", {
                    ref_key: "quickSearchInput",
                    ref: cr,
                    "onUpdate:modelValue": p[0] || (p[0] = (d) => J.value = d),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: b(_)("library", "Title, creator, description, filename or folder")
                  }, null, 8, _T), [
                    [Gt, J.value]
                  ])
                ], 8, yT),
                c("label", null, [
                  Oe(g(b(_)("library", "Type")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": p[1] || (p[1] = (d) => P.type = d),
                    name: "type",
                    onChange: p[2] || (p[2] = (d) => gi(d))
                  }, [
                    c("option", wT, g(b(_)("library", "All types")), 1),
                    (w(!0), C(de, null, Me(x.value, (d) => (w(), C("option", {
                      key: d,
                      value: d
                    }, g(d), 9, ST))), 128))
                  ], 544), [
                    [yi, P.type]
                  ])
                ]),
                c("div", CT, [
                  c("label", TT, g(b(_)("library", "Publisher")), 1),
                  We(c("input", {
                    id: "library-publisher-search",
                    "onUpdate:modelValue": p[3] || (p[3] = (d) => $.value = d),
                    type: "search",
                    name: "publisherSearch",
                    autocomplete: "off",
                    placeholder: b(_)("library", "Search publishers"),
                    title: b(_)("library", "Exact publisher matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publisher-suggestions",
                    "aria-expanded": z.value && oe.value.length > 0 ? "true" : "false",
                    onFocus: p[4] || (p[4] = (d) => z.value = !0),
                    onKeydown: p[5] || (p[5] = mt((d) => z.value = !1, ["escape"]))
                  }, null, 40, ET), [
                    [Gt, $.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publisher",
                    value: P.publisher
                  }, null, 8, AT),
                  z.value && oe.value.length > 0 ? (w(), C("ul", kT, [
                    (w(!0), C(de, null, Me(oe.value, (d) => (w(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publisher-suggestion",
                        onMousedown: p[6] || (p[6] = ze(() => {
                        }, ["prevent"])),
                        onClick: (M) => jv(d, M)
                      }, g(d), 41, OT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", xT, g(b(_)("library", "Apply publisher")), 1)
                ]),
                c("div", NT, [
                  c("label", LT, g(b(_)("library", "Series / periodical")), 1),
                  We(c("input", {
                    id: "library-publication-search",
                    "onUpdate:modelValue": p[7] || (p[7] = (d) => ce.value = d),
                    type: "search",
                    name: "publicationSearch",
                    autocomplete: "off",
                    placeholder: b(_)("library", "Search series and periodicals"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publication-suggestions",
                    "aria-expanded": fe.value && le.value.length > 0 ? "true" : "false",
                    onFocus: p[8] || (p[8] = (d) => fe.value = !0),
                    onKeydown: p[9] || (p[9] = mt((d) => fe.value = !1, ["escape"]))
                  }, null, 40, RT), [
                    [Gt, ce.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publication",
                    value: P.publication
                  }, null, 8, IT),
                  fe.value && le.value.length > 0 ? (w(), C("ul", PT, [
                    (w(!0), C(de, null, Me(le.value, (d) => (w(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: p[10] || (p[10] = ze(() => {
                        }, ["prevent"])),
                        onClick: (M) => Fv(d, M)
                      }, g(d), 41, $T)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", DT, g(b(_)("library", "Apply series")), 1)
                ]),
                c("div", MT, [
                  c("label", FT, g(b(_)("library", "Publication year")), 1),
                  We(c("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": p[11] || (p[11] = (d) => ge.value = d),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: b(_)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": re.value && Ce.value.length > 0 ? "true" : "false",
                    onFocus: p[12] || (p[12] = (d) => re.value = !0),
                    onKeydown: p[13] || (p[13] = mt((d) => re.value = !1, ["escape"]))
                  }, null, 40, zT), [
                    [Gt, ge.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "year",
                    value: P.year
                  }, null, 8, UT),
                  re.value && Ce.value.length > 0 ? (w(), C("ul", BT, [
                    (w(!0), C(de, null, Me(Ce.value, (d) => (w(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: p[14] || (p[14] = ze(() => {
                        }, ["prevent"])),
                        onClick: (M) => Kv(d, M)
                      }, g(d), 41, jT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", HT, g(b(_)("library", "Apply year")), 1)
                ]),
                c("div", VT, [
                  c("label", GT, g(b(_)("library", "Creator")), 1),
                  We(c("input", {
                    id: "library-creator-search",
                    "onUpdate:modelValue": p[15] || (p[15] = (d) => we.value = d),
                    type: "search",
                    name: "creatorSearch",
                    autocomplete: "off",
                    placeholder: b(_)("library", "Search creators"),
                    title: b(_)("library", "Exact full-field creator matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-creator-suggestions",
                    "aria-expanded": ye.value && Ee.value.length > 0 ? "true" : "false",
                    onFocus: p[16] || (p[16] = (d) => ye.value = !0),
                    onKeydown: p[17] || (p[17] = mt((d) => ye.value = !1, ["escape"]))
                  }, null, 40, KT), [
                    [Gt, we.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "creator",
                    value: P.creator
                  }, null, 8, WT),
                  ye.value && Ee.value.length > 0 ? (w(), C("ul", qT, [
                    (w(!0), C(de, null, Me(Ee.value, (d) => (w(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: p[18] || (p[18] = ze(() => {
                        }, ["prevent"])),
                        onClick: (M) => Bv(d, M)
                      }, g(d), 41, YT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", XT, g(b(_)("library", "Apply creator")), 1)
                ]),
                c("label", null, [
                  Oe(g(b(_)("library", "Nextcloud tag")), 1),
                  We(c("input", {
                    "onUpdate:modelValue": p[19] || (p[19] = (d) => P.tag = d),
                    type: "text",
                    name: "tag",
                    placeholder: b(_)("library", "photography")
                  }, null, 8, ZT), [
                    [Gt, P.tag]
                  ])
                ]),
                c("label", null, [
                  Oe(g(b(_)("library", "Format")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": p[20] || (p[20] = (d) => P.format = d),
                    name: "format",
                    onChange: p[21] || (p[21] = (d) => gi(d))
                  }, [
                    c("option", JT, g(b(_)("library", "All formats")), 1),
                    (w(!0), C(de, null, Me(E.value, (d) => (w(), C("option", {
                      key: d,
                      value: d
                    }, g(pr(d)), 9, QT))), 128))
                  ], 544), [
                    [yi, P.format]
                  ])
                ]),
                c("label", null, [
                  Oe(g(b(_)("library", "Shelf")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": p[22] || (p[22] = (d) => P.shelf = d),
                    name: "shelf",
                    onChange: p[23] || (p[23] = (d) => gi(d))
                  }, [
                    c("option", eE, g(b(_)("library", "All shelves")), 1),
                    (w(!0), C(de, null, Me(S.value, (d) => (w(), C("option", {
                      key: d,
                      value: d
                    }, g(d), 9, tE))), 128))
                  ], 544), [
                    [yi, P.shelf]
                  ])
                ]),
                c("div", nE, [
                  c("label", iE, g(b(_)("library", "Folder")), 1),
                  We(c("input", {
                    id: "library-folder-search",
                    "onUpdate:modelValue": p[24] || (p[24] = (d) => ht.value = d),
                    type: "search",
                    name: "folderSearch",
                    autocomplete: "off",
                    placeholder: b(_)("library", "Type at least 3 path characters"),
                    title: b(_)("library", "Select an exact folder path"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-folder-suggestions",
                    "aria-expanded": Je.value && B.value.length > 0 ? "true" : "false",
                    onFocus: p[25] || (p[25] = (d) => Je.value = !0),
                    onKeydown: p[26] || (p[26] = mt((d) => Je.value = !1, ["escape"]))
                  }, null, 40, aE), [
                    [Gt, ht.value]
                  ]),
                  Je.value && B.value.length > 0 ? (w(), C("ul", rE, [
                    (w(!0), C(de, null, Me(B.value, (d) => (w(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-folder-suggestion",
                        onMousedown: p[27] || (p[27] = ze(() => {
                        }, ["prevent"])),
                        onClick: (M) => Hv(d, M)
                      }, g(d), 41, sE)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", oE, g(b(_)("library", "Apply folder")), 1)
                ]),
                c("label", null, [
                  Oe(g(b(_)("library", "Scan status")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": p[28] || (p[28] = (d) => P.status = d),
                    name: "status",
                    onChange: p[29] || (p[29] = (d) => gi(d))
                  }, [
                    c("option", lE, g(b(_)("library", "All scan statuses")), 1),
                    (w(!0), C(de, null, Me(D.value, (d) => (w(), C("option", {
                      key: d,
                      value: d
                    }, g(d), 9, cE))), 128))
                  ], 544), [
                    [yi, P.status]
                  ])
                ]),
                c("label", null, [
                  Oe(g(b(_)("library", "Workflow status")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": p[30] || (p[30] = (d) => P.workflowStatus = d),
                    name: "workflowStatus",
                    onChange: p[31] || (p[31] = (d) => gi(d))
                  }, [
                    c("option", uE, g(b(_)("library", "All workflow statuses")), 1),
                    (w(!0), C(de, null, Me(F.value, (d) => (w(), C("option", {
                      key: d,
                      value: d
                    }, g(d), 9, dE))), 128))
                  ], 544), [
                    [yi, P.workflowStatus]
                  ])
                ]),
                c("div", fE, [
                  c("label", hE, g(b(_)("library", "Subject")), 1),
                  We(c("input", {
                    id: "library-subject-search",
                    "onUpdate:modelValue": p[32] || (p[32] = (d) => L.value = d),
                    type: "search",
                    name: "subjectSearch",
                    autocomplete: "off",
                    placeholder: b(_)("library", "Search subjects"),
                    title: b(_)("library", "Exact subject matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-subject-suggestions",
                    "aria-expanded": N.value && q.value.length > 0 ? "true" : "false",
                    onFocus: p[33] || (p[33] = (d) => N.value = !0),
                    onKeydown: p[34] || (p[34] = mt((d) => N.value = !1, ["escape"]))
                  }, null, 40, pE), [
                    [Gt, L.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "subject",
                    value: P.subject
                  }, null, 8, vE),
                  N.value && q.value.length > 0 ? (w(), C("ul", gE, [
                    (w(!0), C(de, null, Me(q.value, (d) => (w(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-subject-suggestion",
                        onMousedown: p[35] || (p[35] = ze(() => {
                        }, ["prevent"])),
                        onClick: (M) => Gv(d, M)
                      }, g(d), 41, mE)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", {
                    type: "button",
                    class: "button secondary library-subject-apply",
                    onClick: Vv
                  }, g(b(_)("library", "Apply subject")), 1)
                ]),
                c("label", null, [
                  Oe(g(b(_)("library", "Classification")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": p[36] || (p[36] = (d) => P.classification = d),
                    name: "classification",
                    onChange: p[37] || (p[37] = (d) => gi(d))
                  }, [
                    c("option", bE, g(b(_)("library", "All classifications")), 1),
                    (w(!0), C(de, null, Me(W.value, (d) => (w(), C("option", {
                      key: d,
                      value: d
                    }, g(d), 9, yE))), 128))
                  ], 544), [
                    [yi, P.classification]
                  ])
                ]),
                c("label", null, [
                  Oe(g(b(_)("library", "Suggested updates")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": p[38] || (p[38] = (d) => P.scannerConflicts = d),
                    name: "scannerConflicts",
                    onChange: p[39] || (p[39] = (d) => gi(d))
                  }, [
                    c("option", _E, g(b(_)("library", "All metadata")), 1),
                    c("option", wE, g(b(_)("library", "Suggested updates")), 1)
                  ], 544), [
                    [yi, P.scannerConflicts]
                  ])
                ]),
                c("button", SE, g(b(_)("library", "Apply filters")), 1),
                c("a", CE, g(b(_)("library", "Clear")), 1)
              ], 40, pT)
            ]),
            c("a", {
              class: "library-navigation-settings-link",
              href: qt.value
            }, [
              p[52] || (p[52] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, g(b(_)("library", "Settings")), 1)
            ], 8, TE)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        _e(b(X_), null, {
          default: ke(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: f.language || "en",
              dir: f.direction || "ltr",
              tabindex: "-1"
            }, [
              Ln.value.length > 0 ? (w(), C("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": b(_)("library", "Active filters")
              }, [
                c("span", null, g(b(_)("library", "Active filters")), 1),
                (w(!0), C(de, null, Me(Ln.value, (d) => (w(), C("a", {
                  key: d.key,
                  href: Zu(d.key),
                  class: "library-filter-chip",
                  "aria-label": `${b(_)("library", "Remove filter")}: ${d.label}`,
                  title: d.title,
                  onClick: ze((M) => Wv(d.key), ["prevent"])
                }, [
                  c("strong", null, [
                    Oe(g(d.label), 1),
                    d.displayValue ? (w(), C(de, { key: 0 }, [
                      Oe(":")
                    ], 64)) : j("", !0)
                  ]),
                  d.displayValue ? (w(), C(de, { key: 0 }, [
                    p[53] || (p[53] = Oe(g(" "), -1)),
                    c("span", {
                      class: "library-filter-chip-value",
                      title: d.value
                    }, g(d.displayValue), 9, OE)
                  ], 64)) : j("", !0),
                  p[54] || (p[54] = Oe()),
                  p[55] || (p[55] = c("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, kE))), 128))
              ], 8, AE)) : j("", !0),
              Fi.value ? (w(), C("section", xE, [
                c("header", NE, [
                  c("p", LE, g(b(_)("library", "Metadata cleanup")), 1),
                  c("h2", RE, g(b(_)("library", "Review")), 1),
                  c("p", null, g(b(_)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": b(_)("library", "Review queues")
                }, [
                  (w(!0), C(de, null, Me(Av.value, (d) => (w(), C("a", {
                    key: d.key,
                    class: Te(["library-review-queue-link", { active: d.active }]),
                    href: d.href,
                    "aria-current": d.active ? "page" : void 0,
                    onClick: ze((M) => qv(d), ["prevent"])
                  }, [
                    c("span", null, g(d.label), 1),
                    c("b", null, g(Zv(d.countKey)), 1)
                  ], 10, PE))), 128))
                ], 8, IE),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": b(_)("library", "Filter current review queue"),
                  onSubmit: ze(dn, ["prevent"])
                }, [
                  (w(!0), C(de, null, Me(Is.value, (d) => (w(), C("input", {
                    key: `review-${d.key}`,
                    type: "hidden",
                    name: d.key,
                    value: d.value
                  }, null, 8, DE))), 128)),
                  c("label", null, [
                    Oe(g(b(_)("library", "Search within this queue")), 1),
                    We(c("input", {
                      "onUpdate:modelValue": p[40] || (p[40] = (d) => P.q = d),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [Gt, P.q]
                    ])
                  ]),
                  c("button", ME, g(b(_)("library", "Apply")), 1)
                ], 40, $E),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": wn.loading ? "true" : "false"
                }, [
                  wn.loading ? (w(), C("span", zE, g(b(_)("library", "Loading review queue…")), 1)) : j("", !0)
                ], 8, FE),
                wn.error ? (w(), C("p", UE, g(wn.error), 1)) : j("", !0),
                vi.value.enabled ? (w(), C("section", BE, [
                  c("div", jE, [
                    c("p", HE, g(b(_)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: b(_)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, g(b(_)("library", "Review next suggestion")), 9, VE)
                  ]),
                  vi.value.item ? (w(), C("article", GE, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", KE, g(vi.value.item.title), 1)
                      ]),
                      c("span", WE, [
                        c("bdi", qE, g(vi.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", YE, [
                      (w(!0), C(de, null, Me(vi.value.fields, (d) => (w(), C("article", {
                        key: d.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", XE, g(d.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, g(b(_)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", ZE, g(d.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, g(b(_)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", JE, g(d.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, g(b(_)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", QE, g(d.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, g(b(_)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", eA, g(d.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, g(b(_)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", tA, g(d.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: vi.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Yt.value
                          }, null, 8, iA),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: d.field
                          }, null, 8, aA),
                          p[56] || (p[56] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", rA, g(b(_)("library", "Use suggested value")), 1)
                        ], 8, nA)
                      ]))), 128))
                    ]),
                    c("footer", sA, [
                      c("a", {
                        class: "button secondary",
                        href: vi.value.item.detailsUrl
                      }, g(b(_)("library", "Maintenance")), 9, oA),
                      c("a", {
                        class: "button secondary",
                        href: vi.value.skipUrl
                      }, g(b(_)("library", "Skip to next suggestion")), 9, lA)
                    ])
                  ])) : j("", !0)
                ])) : j("", !0),
                h.value.length === 0 && !wn.loading && !wn.error ? (w(), C("div", cA, [
                  c("h3", null, g(b(_)("library", "This review queue is clear")), 1),
                  c("p", null, g(b(_)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: Ve.value
                  }, g(b(_)("library", "Back to Library")), 9, uA)
                ])) : (w(), C("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": b(_)("library", "Review results")
                }, [
                  (w(!0), C(de, null, Me(h.value, (d) => (w(), C("article", {
                    key: d.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (M) => Rn(d, M)
                        }, [
                          c("bdi", hA, g(d.title), 1)
                        ], 8, fA)
                      ]),
                      d.creators ? (w(), C("p", pA, [
                        c("bdi", vA, g(d.creators), 1)
                      ])) : j("", !0),
                      d.scanError ? (w(), C("p", gA, [
                        c("bdi", mA, g(d.scanError), 1)
                      ])) : j("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (M) => Rn(d, M)
                      }, g(b(_)("library", "Details")), 9, bA),
                      c("a", {
                        class: "button primary",
                        href: d.openUrl
                      }, g(b(_)("library", "Open")), 9, yA)
                    ])
                  ]))), 128))
                ], 8, dA)),
                h.value.length > 0 ? (w(), C("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": b(_)("library", "Review pagination")
                }, [
                  I.value.previousUrl ? (w(), C("a", {
                    key: 0,
                    href: I.value.previousUrl
                  }, g(b(_)("library", "Previous")), 9, wA)) : (w(), C("span", SA, g(b(_)("library", "Previous")), 1)),
                  c("span", null, [
                    Oe(g(b(_)("library", "Page")) + " " + g(I.value.page), 1),
                    I.value.total > 0 ? (w(), C("span", CA, " · " + g(I.value.from) + "–" + g(I.value.to), 1)) : j("", !0)
                  ]),
                  I.value.nextUrl ? (w(), C("a", {
                    key: 2,
                    href: I.value.nextUrl
                  }, g(b(_)("library", "Next")), 9, TA)) : (w(), C("span", EA, g(b(_)("library", "Next")), 1))
                ], 8, _A)) : j("", !0)
              ])) : on.value ? (w(), C("main", AA, [
                c("header", kA, [
                  c("p", OA, g(b(_)("library", "Your library")), 1),
                  c("h2", xA, g(b(_)("library", "Home")), 1)
                ]),
                c("section", NA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", LA, g(b(_)("library", "Continue reading")), 1),
                      c("p", RA, g(b(_)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${Ve.value}?sort=lastOpened`
                    }, g(b(_)("library", "View all")), 9, IA)
                  ]),
                  Bi.value.continueReading.length ? (w(), C("div", PA, [
                    (w(!0), C(de, null, Me(Bi.value.continueReading, (d) => (w(), C("article", {
                      key: `continue-${d.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (M) => Rn(d, M)
                      }, [
                        c("span", DA, [
                          c("img", {
                            class: "library-cover-image",
                            src: d.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, MA)
                        ])
                      ], 8, $A),
                      c("div", FA, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (M) => Rn(d, M)
                          }, [
                            c("bdi", UA, g(d.title), 1)
                          ], 8, zA)
                        ]),
                        d.creators ? (w(), C("p", BA, [
                          c("bdi", jA, g(d.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: d.openUrl
                        }, g(b(_)("library", "Open")), 9, HA)
                      ])
                    ]))), 128))
                  ])) : (w(), C("p", VA, g(b(_)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", GA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", KA, g(b(_)("library", "Recently added")), 1),
                      c("p", WA, g(b(_)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${Ve.value}?sort=recent`
                    }, g(b(_)("library", "View all")), 9, qA)
                  ]),
                  Bi.value.recentlyAdded.length ? (w(), C("div", YA, [
                    (w(!0), C(de, null, Me(Bi.value.recentlyAdded, (d) => (w(), C("article", {
                      key: `recent-${d.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (M) => Rn(d, M)
                      }, [
                        c("span", ZA, [
                          c("img", {
                            class: "library-cover-image",
                            src: d.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, JA)
                        ])
                      ], 8, XA),
                      c("div", QA, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (M) => Rn(d, M)
                          }, [
                            c("bdi", tk, g(d.title), 1)
                          ], 8, ek)
                        ]),
                        d.creators ? (w(), C("p", nk, [
                          c("bdi", ik, g(d.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: d.openUrl
                        }, g(b(_)("library", "Open")), 9, ak)
                      ])
                    ]))), 128))
                  ])) : (w(), C("p", rk, g(b(_)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", sk, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", ok, g(b(_)("library", "Shelves")), 1),
                      c("p", lk, g(b(_)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: ui.value }, g(b(_)("library", "View all")), 9, ck)
                  ]),
                  nr.value.length ? (w(), C("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": b(_)("library", "Shelves")
                  }, [
                    (w(!0), C(de, null, Me(nr.value, (d) => (w(), C("a", {
                      key: d.shelf,
                      href: d.url
                    }, [
                      c("strong", null, [
                        c("bdi", fk, g(d.shelf), 1)
                      ]),
                      c("span", null, g(b(Dn)("library", "%n item", "%n items", Number(d.itemCount || 0))), 1)
                    ], 8, dk))), 128))
                  ], 8, uk)) : (w(), C("p", hk, g(b(_)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(wa.value.count || 0) > 0 ? (w(), C("aside", pk, [
                  c("div", null, [
                    c("h3", vk, g(b(_)("library", "Needs attention")), 1),
                    c("p", gk, g(b(Dn)("library", "%n publication needs better details.", "%n publications need better details.", Number(wa.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: wa.value.url
                  }, g(b(_)("library", "Review")), 9, mk)
                ])) : j("", !0)
              ])) : ln.value ? (w(), C("main", bk, [
                c("header", yk, [
                  c("p", _k, g(b(_)("library", "Your library")), 1),
                  c("h2", wk, g(b(_)("library", "Shelves")), 1),
                  c("p", Sk, g(b(_)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                Ps.value.length ? (w(), C("nav", {
                  key: 0,
                  "aria-label": b(_)("library", "Shelves")
                }, [
                  c("ul", Tk, [
                    (w(!0), C(de, null, Me(Ps.value, (d) => (w(), Fe(dT, {
                      key: d.id,
                      node: d,
                      "children-url": Ss.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, Ck)) : (w(), C("section", Ek, [
                  c("h3", null, g(b(_)("library", "Shelves")), 1),
                  c("p", Ak, g(b(_)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", kk, [
                    c("a", {
                      class: "button primary",
                      href: qt.value
                    }, g(b(_)("library", "Add a Library root")), 9, Ok),
                    c("a", {
                      class: "button secondary",
                      href: Ve.value
                    }, g(b(_)("library", "All publications")), 9, xk)
                  ])
                ]))
              ])) : (w(), C("section", Nk, [
                c("header", Lk, [
                  On.value ? (w(), C("p", Rk, g(va.value), 1)) : j("", !0),
                  c("h2", Ik, g(As.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": b(_)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": b(_)("library", "Catalogue toolbar"),
                    onSubmit: ze(dn, ["prevent"])
                  }, [
                    (w(!0), C(de, null, Me(ba.value, (d) => (w(), C("input", {
                      key: d.key,
                      type: "hidden",
                      name: d.key,
                      value: d.value
                    }, null, 8, Dk))), 128)),
                    c("label", Mk, [
                      Oe(g(b(_)("library", "Sort")), 1),
                      We(c("select", {
                        "onUpdate:modelValue": p[41] || (p[41] = (d) => P.sort = d),
                        name: "sort",
                        onChange: dn
                      }, [
                        c("option", Fk, g(b(_)("library", "Title")), 1),
                        c("option", zk, g(b(_)("library", "Date added")), 1),
                        c("option", Uk, g(b(_)("library", "Publication date")), 1),
                        c("option", Bk, g(b(_)("library", "Series")), 1),
                        c("option", jk, g(b(_)("library", "Recently opened")), 1),
                        c("option", Hk, g(b(_)("library", "Format")), 1)
                      ], 544), [
                        [yi, P.sort]
                      ])
                    ]),
                    c("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": b(_)("library", "View")
                    }, [
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Te({ active: Ut.value === "compact" }),
                        "aria-pressed": Ut.value === "compact" ? "true" : "false",
                        onClick: p[42] || (p[42] = (d) => js("compact"))
                      }, g(b(_)("library", "Compact")), 11, Gk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Te({ active: Ut.value === "gallery" }),
                        "aria-pressed": Ut.value === "gallery" ? "true" : "false",
                        onClick: p[43] || (p[43] = (d) => js("gallery"))
                      }, g(b(_)("library", "Gallery")), 11, Kk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Te({ active: Ut.value === "list" }),
                        "aria-pressed": Ut.value === "list" ? "true" : "false",
                        onClick: p[44] || (p[44] = (d) => js("list"))
                      }, g(b(_)("library", "List")), 11, Wk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Te({ active: Ut.value === "shelf" }),
                        "aria-pressed": Ut.value === "shelf" ? "true" : "false",
                        onClick: p[45] || (p[45] = (d) => js("shelf"))
                      }, g(b(_)("library", "Shelf")), 11, qk)
                    ], 8, Vk)
                  ], 40, $k),
                  c("section", Yk, [
                    c("h3", {
                      title: b(_)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, g(b(_)("library", "Collections")), 9, Xk),
                    c("form", {
                      method: "post",
                      action: Rs.value,
                      class: "library-saved-collection-save-form",
                      title: jl.value ? "" : b(_)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Yt.value
                      }, null, 8, Jk),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Jv.value
                      }, null, 8, Qk),
                      c("label", null, [
                        Oe(g(b(_)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: b(_)("library", "e.g. Bremen photo books"),
                          disabled: !jl.value,
                          autocomplete: "off"
                        }, null, 8, e2)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !jl.value,
                        title: b(_)("library", "Save current view")
                      }, g(b(_)("library", "Save")), 9, t2)
                    ], 8, Zk),
                    Ui.value.length > 0 ? (w(), C("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": b(_)("library", "Saved custom collections")
                    }, [
                      (w(!0), C(de, null, Me(Ui.value, (d) => (w(), C("article", {
                        key: d.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: eg(d.filters)
                        }, [
                          c("strong", null, g(d.name), 1),
                          c("span", a2, g(d.countPending ? "—" : b(Dn)("library", "%n item", "%n items", Number(d.count || 0))), 1)
                        ], 8, i2),
                        c("form", {
                          method: "post",
                          action: tg(d.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Yt.value
                          }, null, 8, s2),
                          c("button", o2, g(b(_)("library", "Delete")), 1)
                        ], 8, r2)
                      ]))), 128))
                    ], 8, n2)) : j("", !0)
                  ]),
                  Xt.value.length > 0 ? (w(), C("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": b(_)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", c2, [
                      p[57] || (p[57] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: b(_)("library", "Batch actions for selected publications")
                      }, g(b(_)("library", "Batch actions")), 9, u2),
                      c("small", d2, g(b(_)("library", "Batch actions for selected publications")), 1),
                      c("b", f2, g(b(Dn)("library", "%n publication selected", "%n publications selected", Xt.value.length)), 1)
                    ]),
                    c("p", h2, g(b(Dn)("library", "%n publication selected", "%n publications selected", Xt.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: ee
                    }, [
                      c("form", {
                        method: "post",
                        action: Cs.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Yt.value
                        }, null, 8, v2),
                        c("label", null, [
                          c("span", null, g(b(_)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: b(_)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, g2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: b(_)("library", "Applies only to the selected publications.")
                        }, g(b(_)("library", "Apply")), 9, m2)
                      ], 8, p2),
                      c("form", {
                        method: "post",
                        action: Wa.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Yt.value
                        }, null, 8, y2),
                        c("label", null, [
                          c("span", null, g(b(_)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: b(_)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, _2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(_)("library", "Removes the tag only from the selected publications.")
                        }, g(b(_)("library", "Remove")), 9, w2)
                      ], 8, b2),
                      c("form", {
                        method: "post",
                        action: Ts.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Yt.value
                        }, null, 8, C2),
                        (w(!0), C(de, null, Me(ya.value, (d) => (w(), C("input", {
                          key: `reset-${d.key}`,
                          type: "hidden",
                          name: d.key,
                          value: d.value
                        }, null, 8, T2))), 128)),
                        p[58] || (p[58] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(_)("library", "Batch actions for selected publications")
                        }, g(b(_)("library", "Reset metadata")), 9, E2)
                      ], 8, S2),
                      c("form", {
                        method: "post",
                        action: qa.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Yt.value
                        }, null, 8, k2),
                        (w(!0), C(de, null, Me(ya.value, (d) => (w(), C("input", {
                          key: `edit-preview-${d.key}`,
                          type: "hidden",
                          name: d.key,
                          value: d.value
                        }, null, 8, O2))), 128)),
                        c("label", null, [
                          c("span", null, g(b(_)("library", "Field")), 1),
                          c("select", x2, [
                            c("option", N2, g(b(_)("library", "Publication type")), 1),
                            c("option", L2, g(b(_)("library", "Subtitle")), 1),
                            c("option", R2, g(b(_)("library", "Creators")), 1),
                            c("option", I2, g(b(_)("library", "Series / periodical")), 1),
                            c("option", P2, g(b(_)("library", "Publication date")), 1),
                            c("option", $2, g(b(_)("library", "Language")), 1),
                            c("option", D2, g(b(_)("library", "Publisher")), 1),
                            c("option", M2, g(b(_)("library", "Subjects")), 1),
                            c("option", F2, g(b(_)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, g(b(_)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: b(_)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, z2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(_)("library", "Preview first, then apply from the review page.")
                        }, g(b(_)("library", "Preview edit")), 9, U2)
                      ], 8, A2),
                      c("form", {
                        method: "post",
                        action: Pl.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Yt.value
                        }, null, 8, j2),
                        (w(!0), C(de, null, Me(ya.value, (d) => (w(), C("input", {
                          key: `cover-${d.key}`,
                          type: "hidden",
                          name: d.key,
                          value: d.value
                        }, null, 8, H2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(_)("library", "Batch actions for selected publications")
                        }, g(b(_)("library", "Fresh covers")), 9, V2)
                      ], 8, B2)
                    ], 32)
                  ], 8, l2)) : j("", !0)
                ], 8, Pk),
                Nn.value ? (w(), C("p", G2, g(Nn.value), 1)) : j("", !0),
                Ls.value ? (w(), C("p", K2, g(Ls.value), 1)) : j("", !0),
                zi.value ? (w(), C("p", W2, g(zi.value), 1)) : j("", !0),
                On.value ? (w(), C("section", q2, [
                  c("p", Y2, g(va.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: st.value ? b(_)("library", "Items by this creator, sorted by publication context when available.") : Xa.value ? b(_)("library", "Items from this publication year, sorted by publication date when available.") : b(_)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, g(Es.value), 9, X2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": b(_)("library", "Discovery summary")
                  }, [
                    c("span", null, g(b(Dn)("library", "%n item", "%n items", I.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (w(), C("span", J2, g(O.value.earliestYear) + "–" + g(O.value.latestYear), 1)) : j("", !0),
                    O.value?.datedCount ? (w(), C("span", Q2, g(O.value.datedCount) + " " + g(b(_)("library", "dated")), 1)) : j("", !0),
                    O.value?.undatedCount > 0 ? (w(), C("span", eO, g(O.value.undatedCount) + " " + g(b(_)("library", "undated")), 1)) : j("", !0)
                  ], 8, Z2),
                  Ya.value && O.value ? (w(), C("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": b(_)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, g(b(_)("library", "Publication contents")), 1),
                    c("span", null, g(b(Dn)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (w(), C("span", nO, g(O.value.earliestYear) + "–" + g(O.value.latestYear), 1)) : j("", !0),
                    c("span", null, g(O.value.datedCount) + " " + g(b(_)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (w(), C("span", iO, g(O.value.undatedCount) + " " + g(b(_)("library", "without dates yet")), 1)) : j("", !0),
                    c("span", null, g(b(_)("library", "read-only grouping")), 1)
                  ], 8, tO)) : j("", !0),
                  Ya.value && O.value?.issueGroups?.length ? (w(), C("section", aO, [
                    c("div", null, [
                      c("p", rO, g(b(_)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: b(_)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, g(b(_)("library", "Read-only issue/date grouping")), 9, sO)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": b(_)("library", "Visual issue strip")
                    }, [
                      (w(!0), C(de, null, Me(O.value.issueGroups, (d) => (w(), C("a", {
                        key: `strip-${d.label}`,
                        class: "library-issue-strip-card",
                        href: d.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, g(d.label), 1),
                        c("strong", null, g(d.items?.[0]?.issueLabel || b(_)("library", "Issue")), 1),
                        c("small", null, g(b(Dn)("library", "%n item", "%n items", d.items?.length || 0)), 1)
                      ], 8, lO))), 128))
                    ], 8, oO),
                    O.value.gapRanges?.length ? (w(), C("p", cO, g(b(_)("library", "Gap")) + ": " + g(O.value.gapRanges.join(", ")), 1)) : j("", !0),
                    (w(!0), C(de, null, Me(O.value.issueGroups, (d) => (w(), C("div", {
                      key: d.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, g(d.label), 1),
                      c("ol", null, [
                        (w(!0), C(de, null, Me(d.items, (M, ae) => (w(), C("li", {
                          key: M.itemId
                        }, [
                          c("span", uO, g(M.issueLabel), 1),
                          c("a", {
                            href: M.detailsUrl || "#"
                          }, g(M.title), 9, dO),
                          c("small", null, [
                            Oe(g(M.publicationType), 1),
                            M.publicationDate ? (w(), C(de, { key: 0 }, [
                              Oe(" · " + g(M.publicationDate), 1)
                            ], 64)) : j("", !0)
                          ]),
                          c("small", fO, [
                            ae > 0 ? (w(), C(de, { key: 0 }, [
                              Oe(g(b(_)("library", "Previous issue")), 1)
                            ], 64)) : j("", !0),
                            ae > 0 && ae < d.items.length - 1 ? (w(), C(de, { key: 1 }, [
                              Oe(" · ")
                            ], 64)) : j("", !0),
                            ae < d.items.length - 1 ? (w(), C(de, { key: 2 }, [
                              Oe(g(b(_)("library", "Next issue")), 1)
                            ], 64)) : j("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (w(), C("details", hO, [
                      c("summary", {
                        title: b(_)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, g(b(_)("library", "Unknown issue/date")) + " · " + g(O.value.unknownIssueItems.length), 9, pO)
                    ])) : j("", !0)
                  ])) : j("", !0),
                  c("p", null, [
                    c("a", {
                      href: Ve.value,
                      class: "button secondary library-discovery-back-link"
                    }, g(b(_)("library", "Back to full catalogue")), 9, vO)
                  ])
                ])) : j("", !0),
                c("div", gO, [
                  c("p", mO, [
                    Oe(g(b(_)("library", "Showing")) + " " + g(I.value.from) + "–" + g(I.value.to) + " " + g(b(_)("library", "of")) + " " + g(I.value.total) + " " + g(b(_)("library", "catalogue items")), 1),
                    Ln.value.length > 0 ? (w(), C("span", bO, [
                      p[59] || (p[59] = Oe(" · ", -1)),
                      c("a", yO, g(b(_)("library", "Clear all filters")), 1)
                    ])) : j("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": b(_)("library", "Catalogue pagination")
                  }, [
                    c("span", wO, [
                      Oe(g(b(_)("library", "Page")) + " " + g(I.value.page), 1),
                      I.value.total > 0 ? (w(), C("span", SO, " · " + g(I.value.from) + "–" + g(I.value.to), 1)) : j("", !0)
                    ]),
                    I.value.previousUrl ? (w(), C("a", {
                      key: 0,
                      href: I.value.previousUrl
                    }, g(b(_)("library", "Previous")), 9, CO)) : (w(), C("span", TO, g(b(_)("library", "Previous")), 1)),
                    I.value.nextUrl ? (w(), C("a", {
                      key: 2,
                      href: I.value.nextUrl
                    }, g(b(_)("library", "Next")), 9, EO)) : (w(), C("span", AO, g(b(_)("library", "Next")), 1))
                  ], 8, _O)
                ]),
                h.value.length === 0 ? (w(), C("div", {
                  key: 4,
                  class: Te(["library-empty-content", { "library-first-run-guidance": Ja.value || Qa.value, "library-filter-empty-state": Os.value && !Ja.value && !Qa.value }]),
                  role: "status"
                }, [
                  Ja.value ? (w(), C(de, { key: 0 }, [
                    c("h3", {
                      title: b(_)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, g(b(_)("library", "Start with one Library root")), 9, kO),
                    c("p", OO, [
                      c("a", {
                        href: qt.value,
                        class: "button primary"
                      }, g(b(_)("library", "Add a Library root")), 9, xO),
                      c("span", NO, g(b(_)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Qa.value ? (w(), C(de, { key: 1 }, [
                    c("h3", {
                      title: b(_)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, g(b(_)("library", "No enabled Library roots")), 9, LO),
                    c("p", RO, [
                      c("a", {
                        href: qt.value,
                        class: "button primary"
                      }, g(b(_)("library", "Open Library settings")), 9, IO)
                    ])
                  ], 64)) : Os.value ? (w(), C(de, { key: 2 }, [
                    c("h3", {
                      title: b(_)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, g(b(_)("library", "No matches for the current filters")), 9, PO),
                    c("p", $O, [
                      c("a", {
                        href: Yv(),
                        class: "button secondary"
                      }, g(b(_)("library", "Clear search")), 9, DO),
                      c("a", MO, g(b(_)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (w(), C(de, { key: 3 }, [
                    c("h3", {
                      title: b(_)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, g(b(_)("library", "No catalogue items yet")), 9, FO),
                    c("p", zO, [
                      c("a", {
                        href: qt.value,
                        class: "button primary"
                      }, g(b(_)("library", "Run a scan from settings")), 9, UO)
                    ])
                  ], 64))
                ], 2)) : j("", !0),
                h.value.length > 0 ? (w(), C("label", BO, [
                  c("input", {
                    type: "checkbox",
                    checked: Xt.value.length === h.value.length,
                    onChange: Ca
                  }, null, 40, jO),
                  Oe(" " + g(b(_)("library", "Select all publications on this page")), 1)
                ])) : j("", !0),
                h.value.length > 0 && Ut.value === "list" ? (w(), C("ul", HO, [
                  (w(!0), C(de, null, Me(h.value, (d) => (w(), C("li", {
                    key: d.id,
                    class: Te(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Sa.value.has(Number(d.id)), "library-catalogue-list-row--open": pi.value && Number(R.value) === Number(d.id) }])
                  }, [
                    c("label", VO, [
                      c("input", {
                        type: "checkbox",
                        checked: Sa.value.has(Number(d.id)),
                        "aria-label": `${b(_)("library", "Select publication")}: ${d.title}`,
                        onChange: (M) => ir(d.id, M.currentTarget.checked)
                      }, null, 40, GO)
                    ]),
                    c("div", KO, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (M) => Rn(d, M)
                      }, [
                        c("bdi", qO, g(d.title), 1)
                      ], 8, WO),
                      d.creators ? (w(), C("span", YO, [
                        c("bdi", XO, g(d.creators), 1)
                      ])) : j("", !0)
                    ]),
                    c("dl", ZO, [
                      d.publication ? (w(), C("div", JO, [
                        c("dt", null, g(b(_)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", QO, g(d.publication), 1)
                        ])
                      ])) : j("", !0),
                      d.publicationDate ? (w(), C("div", ex, [
                        c("dt", null, g(b(_)("library", "Publication date")), 1),
                        c("dd", null, g(d.publicationDate), 1)
                      ])) : j("", !0),
                      d.extension || d.publicationType ? (w(), C("div", tx, [
                        c("dt", null, g(b(_)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Te(d.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: d.extension ? "ltr" : "auto"
                          }, g(d.extension ? pr(d.extension) : d.publicationType), 11, nx)
                        ])
                      ])) : j("", !0),
                      d.shelf ? (w(), C("div", ix, [
                        c("dt", null, g(b(_)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", ax, g(d.shelf), 1)
                        ])
                      ])) : j("", !0)
                    ]),
                    c("div", rx, [
                      c("a", {
                        class: "button primary",
                        href: d.openUrl
                      }, g(b(_)("library", "Open")), 9, sx),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (M) => Rn(d, M)
                      }, g(b(_)("library", "Details")), 9, ox)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (w(), C("div", {
                  key: 7,
                  class: Te(["library-cover-gallery", ga.value])
                }, [
                  (w(!0), C(de, null, Me(h.value, (d) => (w(), C("article", {
                    key: d.id,
                    class: Te(["library-cover-card", { "library-cover-card--cover-loaded": vr(d) === "loaded", "library-cover-card--cover-error": vr(d) === "error", "library-cover-card--selected": Sa.value.has(Number(d.id)), "library-cover-card--open": pi.value && Number(R.value) === Number(d.id) }])
                  }, [
                    c("label", lx, [
                      c("input", {
                        type: "checkbox",
                        checked: Sa.value.has(Number(d.id)),
                        "aria-label": `${b(_)("library", "Select publication")}: ${d.title}`,
                        onChange: (M) => ir(d.id, M.currentTarget.checked)
                      }, null, 40, cx)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${d.id} library-card-title-${d.id}`,
                      "aria-expanded": pi.value && Number(R.value) === Number(d.id) ? "true" : "false",
                      onClick: (M) => Rn(d, M)
                    }, [
                      c("span", {
                        id: `library-details-action-${d.id}`,
                        class: "hidden-visually"
                      }, g(b(_)("library", "Details")), 9, dx),
                      c("span", fx, [
                        vr(d) === "loading" ? (w(), C("span", hx)) : j("", !0),
                        c("img", {
                          class: Te(["library-cover-image", { "library-cover-image--loaded": vr(d) === "loaded" }]),
                          src: d.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (M) => ng(d),
                          onError: (M) => ig(d)
                        }, null, 42, px),
                        vr(d) === "error" ? (w(), C("span", vx, g(b(_)("library", "Cover unavailable")), 1)) : j("", !0)
                      ])
                    ], 8, ux),
                    c("form", {
                      method: "post",
                      action: d.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: ze((M) => ed(d, M), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Yt.value
                      }, null, 8, mx),
                      p[60] || (p[60] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: d.starred ? "0" : "1"
                      }, null, 8, bx),
                      c("button", {
                        type: "submit",
                        class: Te(["library-cover-star-button", { "library-cover-star-button--starred": d.starred }]),
                        "aria-pressed": d.starred ? "true" : "false",
                        title: d.starred ? b(_)("library", "Unstar this publication") : b(_)("library", "Star this publication"),
                        "aria-label": d.starred ? b(_)("library", "Unstar this publication") : b(_)("library", "Star this publication"),
                        "aria-busy": gr[d.id] ? "true" : void 0,
                        disabled: gr[d.id],
                        onClick: ze((M) => ed(d, M), ["prevent"])
                      }, g(d.starred ? "★" : "☆"), 11, yx),
                      mr[d.id] ? (w(), C("span", {
                        key: 0,
                        "data-library-star-error": d.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, g(mr[d.id]), 9, _x)) : j("", !0)
                    ], 40, gx),
                    c("div", wx, [
                      c("div", Sx, [
                        c("h3", {
                          id: `library-card-title-${d.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (M) => Rn(d, M)
                          }, [
                            c("bdi", Ex, g(d.title), 1)
                          ], 8, Tx)
                        ], 8, Cx),
                        d.creators ? (w(), C("p", Ax, [
                          c("bdi", kx, g(d.creators), 1)
                        ])) : j("", !0),
                        Hl(d) || d.extension ? (w(), C("div", Ox, [
                          d.extension ? (w(), C("span", xx, [
                            c("bdi", Nx, g(pr(d.extension)), 1)
                          ])) : j("", !0),
                          Hl(d) ? (w(), C("p", Lx, [
                            c("bdi", Rx, g(Hl(d)), 1)
                          ])) : j("", !0)
                        ])) : j("", !0),
                        c("div", Ix, [
                          c("a", {
                            class: "library-cover-read",
                            href: d.openUrl
                          }, g(b(_)("library", "Open")), 9, Px),
                          _e(b(Do), {
                            "aria-label": b(_)("library", "More actions")
                          }, {
                            default: ke(() => [
                              _e(b(Na), {
                                href: d.filesUrl
                              }, {
                                default: ke(() => [
                                  Oe(g(b(_)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              _e(b(Na), {
                                href: d.downloadUrl
                              }, {
                                default: ke(() => [
                                  Oe(g(b(_)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              _e(b(Na), {
                                href: d.detailsUrl
                              }, {
                                default: ke(() => [
                                  Oe(g(b(_)("library", "Maintenance")), 1)
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
                h.value.length > 0 ? (w(), C("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": b(_)("library", "Catalogue pagination")
                }, [
                  c("span", Dx, [
                    Oe(g(b(_)("library", "Page")) + " " + g(I.value.page), 1),
                    I.value.total > 0 ? (w(), C("span", Mx, " · " + g(I.value.from) + "–" + g(I.value.to), 1)) : j("", !0)
                  ]),
                  I.value.previousUrl ? (w(), C("a", {
                    key: 0,
                    href: I.value.previousUrl
                  }, g(b(_)("library", "Previous")), 9, Fx)) : (w(), C("span", zx, g(b(_)("library", "Previous")), 1)),
                  I.value.nextUrl ? (w(), C("a", {
                    key: 2,
                    href: I.value.nextUrl
                  }, g(b(_)("library", "Next")), 9, Ux)) : (w(), C("span", Bx, g(b(_)("library", "Next")), 1))
                ], 8, $x)) : j("", !0)
              ]))
            ], 8, EE)
          ]),
          _: 1
        }),
        _e(b(MC), {
          ref_key: "sidebarComponent",
          ref: Ke,
          class: "library-native-item-sidebar",
          open: pi.value,
          "no-toggle": "",
          loading: H.loading,
          name: y.value?.title || b(_)("library", "Publication details"),
          subname: y.value?.creators || "",
          role: ut.value ? "dialog" : void 0,
          "aria-modal": ut.value ? "true" : void 0,
          "aria-labelledby": ut.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": ut.value && y.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Wu,
          onClosed: kv,
          onClose: zs
        }, {
          default: ke(() => [
            c("div", jx, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Qe,
                class: "hidden-visually",
                tabindex: "-1"
              }, g(y.value?.title || b(_)("library", "Publication details")), 513),
              H.loading && !y.value ? (w(), C("p", Hx, g(b(_)("library", "Loading publication details…")), 1)) : H.error ? (w(), C("div", {
                key: 1,
                class: "library-sidebar-state",
                role: H.missing ? "status" : "alert"
              }, [
                c("p", null, g(H.error), 1),
                H.missing ? j("", !0) : (w(), C("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: p[46] || (p[46] = (d) => or(R.value, { historyMode: "none" }))
                }, g(b(_)("library", "Try again")), 1))
              ], 8, Vx)) : y.value ? (w(), C(de, { key: 2 }, [
                c("p", Gx, g(b(_)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", Kx, [
                  c("span", Wx, g(b(_)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: y.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, qx),
                  c("div", Yx, [
                    c("p", Xx, [
                      c("bdi", Zx, g(y.value.publicationType || b(_)("library", "Publication")), 1),
                      y.value.extension ? (w(), C("span", Jx, [
                        p[61] || (p[61] = Oe(" · ", -1)),
                        c("bdi", Qx, g(pr(y.value.extension)), 1)
                      ])) : j("", !0)
                    ]),
                    c("div", eN, [
                      c("a", {
                        class: "button primary",
                        href: y.value.openUrl
                      }, g(b(_)("library", "Open")), 9, tN),
                      _e(b(Do), {
                        "aria-label": b(_)("library", "File and maintenance actions")
                      }, {
                        default: ke(() => [
                          _e(b(Na), {
                            href: y.value.filesUrl
                          }, {
                            default: ke(() => [
                              Oe(g(b(_)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          _e(b(Na), {
                            href: y.value.downloadUrl
                          }, {
                            default: ke(() => [
                              Oe(g(b(_)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          _e(b(Na), {
                            href: y.value.detailsUrl
                          }, {
                            default: ke(() => [
                              Oe(g(b(_)("library", "Maintenance (legacy)")), 1)
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
                  "aria-label": b(_)("library", "Publication detail sections")
                }, [
                  (w(), C(de, null, Me(Sv, (d) => c("button", {
                    key: d.key,
                    type: "button",
                    class: Te({ active: se.value === d.key }),
                    "aria-current": se.value === d.key ? "page" : void 0,
                    onClick: (M) => se.value = d.key
                  }, g(b(_)("library", d.label)), 11, iN)), 64))
                ], 8, nN),
                se.value === "overview" ? (w(), C("section", aN, [
                  c("h3", rN, g(b(_)("library", "Overview")), 1),
                  y.value.description ? (w(), C("p", sN, [
                    c("bdi", oN, g(y.value.description), 1)
                  ])) : j("", !0),
                  c("dl", lN, [
                    y.value.publication ? (w(), C("div", cN, [
                      c("dt", null, g(b(_)("library", "Series")), 1),
                      c("dd", null, g(y.value.publication), 1)
                    ])) : j("", !0),
                    y.value.publicationDate ? (w(), C("div", uN, [
                      c("dt", null, g(b(_)("library", "Date")), 1),
                      c("dd", null, g(y.value.publicationDate), 1)
                    ])) : j("", !0),
                    y.value.publisher ? (w(), C("div", dN, [
                      c("dt", null, g(b(_)("library", "Publisher")), 1),
                      c("dd", null, g(y.value.publisher), 1)
                    ])) : j("", !0),
                    y.value.language ? (w(), C("div", fN, [
                      c("dt", null, g(b(_)("library", "Language")), 1),
                      c("dd", null, g(y.value.language), 1)
                    ])) : j("", !0),
                    y.value.shelf ? (w(), C("div", hN, [
                      c("dt", null, g(b(_)("library", "Shelf")), 1),
                      c("dd", null, g(y.value.shelf), 1)
                    ])) : j("", !0)
                  ])
                ])) : se.value === "metadata" ? (w(), C("section", pN, [
                  c("h3", vN, g(b(_)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: ze(Ev, ["prevent"])
                  }, [
                    c("label", null, [
                      Oe(g(b(_)("library", "Title")), 1),
                      We(c("input", {
                        "onUpdate:modelValue": p[47] || (p[47] = (d) => he.title = d),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [Gt, he.title]
                      ])
                    ]),
                    c("label", null, [
                      Oe(g(b(_)("library", "Publication date")), 1),
                      We(c("input", {
                        "onUpdate:modelValue": p[48] || (p[48] = (d) => he.publicationDate = d),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: b(_)("library", "e.g. 2026")
                      }, null, 8, gN), [
                        [Gt, he.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, g(b(_)("library", "Identifiers")), 1),
                      (w(!0), C(de, null, Me(he.identifiers, (d, M) => (w(), C("div", {
                        key: M,
                        class: "library-sidebar-identifier"
                      }, [
                        We(c("input", {
                          "onUpdate:modelValue": (ae) => d.scheme = ae,
                          "aria-label": b(_)("library", "Identifier type"),
                          placeholder: b(_)("library", "Identifier type")
                        }, null, 8, mN), [
                          [Gt, d.scheme]
                        ]),
                        We(c("input", {
                          "onUpdate:modelValue": (ae) => d.displayValue = ae,
                          "aria-label": b(_)("library", "Identifier value")
                        }, null, 8, bN), [
                          [Gt, d.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ae) => Tv(M)
                        }, g(b(_)("library", "Remove")), 9, yN)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Cv
                      }, g(b(_)("library", "Add identifier")), 1)
                    ]),
                    c("p", _N, g(b(_)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    ue.error ? (w(), C("p", wN, g(ue.error), 1)) : ue.saved ? (w(), C("p", SN, g(b(_)("library", "Metadata saved.")), 1)) : j("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: ue.saving
                    }, g(ue.saving ? b(_)("library", "Saving…") : b(_)("library", "Save metadata")), 9, CN)
                  ], 32),
                  Fs(y.value).length ? (w(), C("section", TN, [
                    c("h4", EN, g(b(_)("library", "Scanner suggestions")), 1),
                    c("p", AN, g(b(_)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (w(!0), C(de, null, Me(Fs(y.value), (d) => (w(), C("div", {
                        key: d.field
                      }, [
                        c("dt", null, g(d.field) + " · " + g(d.sourceProvenance), 1),
                        c("dd", null, [
                          Oe(g(b(_)("library", "Current")) + ": " + g(d.currentValue || "—"), 1),
                          p[62] || (p[62] = c("br", null, null, -1)),
                          Oe(g(b(_)("library", "Suggestion")) + ": " + g(d.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : j("", !0)
                ])) : (w(), C("section", kN, [
                  c("h3", ON, g(b(_)("library", "Activity")), 1),
                  c("dl", xN, [
                    c("div", null, [
                      c("dt", null, g(b(_)("library", "Scan status")), 1),
                      c("dd", null, g(y.value.scanStatus || "—"), 1)
                    ]),
                    y.value.workflowStatus ? (w(), C("div", NN, [
                      c("dt", null, g(b(_)("library", "Workflow")), 1),
                      c("dd", null, g(y.value.workflowStatus), 1)
                    ])) : j("", !0),
                    y.value.metadataSource ? (w(), C("div", LN, [
                      c("dt", null, g(b(_)("library", "Metadata source")), 1),
                      c("dd", null, g(y.value.metadataSource), 1)
                    ])) : j("", !0),
                    y.value.cachedPath ? (w(), C("div", RN, [
                      c("dt", null, g(b(_)("library", "File")), 1),
                      c("dd", IN, [
                        y.value.openUrl ? (w(), C("a", {
                          key: 0,
                          href: y.value.openUrl
                        }, [
                          c("bdi", $N, g(y.value.cachedPath), 1)
                        ], 8, PN)) : (w(), C("bdi", DN, g(y.value.cachedPath), 1))
                      ])
                    ])) : j("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": b(_)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !$s.value,
                    onClick: p[49] || (p[49] = (d) => Us($s.value))
                  }, g(b(_)("library", "Previous item")), 9, FN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ds.value,
                    onClick: p[50] || (p[50] = (d) => Us(Ds.value))
                  }, g(b(_)("library", "Next item")), 9, zN)
                ], 8, MN)
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
function VN() {
  window.LibraryStartupWatchdog?.fail();
}
function GN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Tu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !GN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Hb(HN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  VN(), console.error("[library] Vue startup failed", e);
}
