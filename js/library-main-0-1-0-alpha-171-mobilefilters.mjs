// @__NO_SIDE_EFFECTS__
function hu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ge = {}, Ma = [], _n = () => {
}, lh = () => !1, vl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gl = (e) => e.startsWith("onUpdate:"), _t = Object.assign, pu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, gg = Object.prototype.hasOwnProperty, Ze = (e, t) => gg.call(e, t), Te = Array.isArray, Ni = (e) => vo(e) === "[object Map]", pa = (e) => vo(e) === "[object Set]", vd = (e) => vo(e) === "[object Date]", Pe = (e) => typeof e == "function", st = (e) => typeof e == "string", Nn = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", ch = (e) => (Je(e) || Pe(e)) && Pe(e.then) && Pe(e.catch), uh = Object.prototype.toString, vo = (e) => uh.call(e), mg = (e) => vo(e).slice(8, -1), dh = (e) => vo(e) === "[object Object]", vu = (e) => st(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pr = /* @__PURE__ */ hu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ml = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, bg = /-\w/g, Ut = ml(
  (e) => e.replace(bg, (t) => t.slice(1).toUpperCase())
), yg = /\B([A-Z])/g, hi = ml(
  (e) => e.replace(yg, "-$1").toLowerCase()
), bl = ml((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xl = ml(
  (e) => e ? `on${bl(e)}` : ""
), Ot = (e, t) => !Object.is(e, t), cs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fh = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, yl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, _g = (e) => {
  const t = st(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let gd;
const _l = () => gd || (gd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ln(e) {
  if (Te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = st(i) ? Tg(i) : ln(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (st(e) || Je(e))
    return e;
}
const wg = /;(?![^(]*\))/g, Sg = /:([^]+)/, Cg = /\/\*[^]*?\*\//g;
function Tg(e) {
  const t = {};
  return e.replace(Cg, "").split(wg).forEach((n) => {
    if (n) {
      const i = n.split(Sg);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ae(e) {
  let t = "";
  if (st(e))
    t = e;
  else if (Te(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ae(e[n]);
      i && (t += i + " ");
    }
  else if (Je(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ps(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !st(t) && (e.class = Ae(t)), n && (e.style = ln(n)), e;
}
const Eg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ag = /* @__PURE__ */ hu(Eg);
function hh(e) {
  return !!e || e === "";
}
function kg(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Pi(e[i], t[i]);
  return n;
}
function md(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (!i[o] && Pi(a, n[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Pi(e, t) {
  if (e === t) return !0;
  let n = vd(e), i = vd(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Nn(e), i = Nn(t), n || i)
    return e === t;
  if (n = Te(e), i = Te(t), n || i)
    return n && i ? kg(e, t) : !1;
  if (n = Je(e), i = Je(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Ni(e), i = Ni(t), n || i || (n = pa(e), i = pa(t), n || i))
      return n && i ? md(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const s = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (s && !u || !s && u || !Pi(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Og(e, t) {
  return e.findIndex((n) => Pi(n, t));
}
const ph = (e) => !!(e && e.__v_isRef === !0), p = (e) => st(e) ? e : e == null ? "" : Te(e) || Je(e) && (e.toString === uh || !Pe(e.toString)) ? ph(e) ? p(e.value) : JSON.stringify(e, vh, 2) : String(e), vh = (e, t) => ph(t) ? vh(e, t.value) : Ni(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[Zl(i, r) + " =>"] = a, n),
    {}
  )
} : pa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Zl(n))
} : Nn(t) ? Zl(t) : Je(t) && !Te(t) && !dh(t) ? String(t) : t, Zl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function xg(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let kt;
class Ng {
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
function Lg() {
  return kt;
}
let rt;
const Jl = /* @__PURE__ */ new WeakSet();
class gh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kt && (kt.active ? kt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jl.has(this) && (Jl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || bh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, bd(this), yh(this);
    const t = rt, n = On;
    rt = this, On = !0;
    try {
      return this.fn();
    } finally {
      _h(this), rt = t, On = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        bu(t);
      this.deps = this.depsTail = void 0, bd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Pc(this) && this.run();
  }
  get dirty() {
    return Pc(this);
  }
}
let mh = 0, $r, Dr;
function bh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Dr, Dr = e;
    return;
  }
  e.next = $r, $r = e;
}
function gu() {
  mh++;
}
function mu() {
  if (--mh > 0)
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
function yh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function _h(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), bu(i), Rg(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Pc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (wh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function wh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xr) || (e.globalVersion = Xr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Pc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = rt, i = On;
  rt = e, On = !0;
  try {
    yh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Ot(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    rt = n, On = i, _h(e), e.flags &= -3;
  }
}
function bu(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      bu(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Rg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let On = !0;
const Sh = [];
function ci() {
  Sh.push(On), On = !1;
}
function ui() {
  const e = Sh.pop();
  On = e === void 0 ? !0 : e;
}
function bd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = rt;
    rt = void 0;
    try {
      t();
    } finally {
      rt = n;
    }
  }
}
let Xr = 0;
class Ig {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class wl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!rt || !On || rt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== rt)
      n = this.activeLink = new Ig(rt, this), rt.deps ? (n.prevDep = rt.depsTail, rt.depsTail.nextDep = n, rt.depsTail = n) : rt.deps = rt.depsTail = n, Ch(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = rt.depsTail, n.nextDep = void 0, rt.depsTail.nextDep = n, rt.depsTail = n, rt.deps === n && (rt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Xr++, this.notify(t);
  }
  notify(t) {
    gu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      mu();
    }
  }
}
function Ch(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Ch(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const $c = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ Symbol(
  ""
), Dc = /* @__PURE__ */ Symbol(
  ""
), Zr = /* @__PURE__ */ Symbol(
  ""
);
function Ft(e, t, n) {
  if (On && rt) {
    let i = $c.get(e);
    i || $c.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new wl()), a.map = i, a.key = n), a.track();
  }
}
function ni(e, t, n, i, a, r) {
  const o = $c.get(e);
  if (!o) {
    Xr++;
    return;
  }
  const s = (u) => {
    u && u.trigger();
  };
  if (gu(), t === "clear")
    o.forEach(s);
  else {
    const u = Te(e), h = u && vu(n);
    if (u && n === "length") {
      const d = Number(i);
      o.forEach((m, C) => {
        (C === "length" || C === Zr || !Nn(C) && C >= d) && s(m);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), h && s(o.get(Zr)), t) {
        case "add":
          u ? h && s(o.get("length")) : (s(o.get(da)), Ni(e) && s(o.get(Dc)));
          break;
        case "delete":
          u || (s(o.get(da)), Ni(e) && s(o.get(Dc)));
          break;
        case "set":
          Ni(e) && s(o.get(da));
          break;
      }
  }
  mu();
}
function Na(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Ft(t, "iterate", Zr), /* @__PURE__ */ wn(e) ? t : t.map(Ln));
}
function Sl(e) {
  return Ft(e = /* @__PURE__ */ Ye(e), "iterate", Zr), e;
}
function Un(e, t) {
  return /* @__PURE__ */ di(e) ? Ga(/* @__PURE__ */ fa(e) ? Ln(t) : t) : Ln(t);
}
const Pg = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ql(this, Symbol.iterator, (e) => Un(this, e));
  },
  concat(...e) {
    return Na(this).concat(
      ...e.map((t) => Te(t) ? Na(t) : t)
    );
  },
  entries() {
    return Ql(this, "entries", (e) => (e[1] = Un(this, e[1]), e));
  },
  every(e, t) {
    return Yn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Yn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Un(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Yn(
      this,
      "find",
      e,
      t,
      (n) => Un(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Yn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Yn(
      this,
      "findLast",
      e,
      t,
      (n) => Un(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Yn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Yn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ec(this, "includes", e);
  },
  indexOf(...e) {
    return ec(this, "indexOf", e);
  },
  join(e) {
    return Na(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ec(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Yn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return br(this, "pop");
  },
  push(...e) {
    return br(this, "push", e);
  },
  reduce(e, ...t) {
    return yd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return yd(this, "reduceRight", e, t);
  },
  shift() {
    return br(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Yn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return br(this, "splice", e);
  },
  toReversed() {
    return Na(this).toReversed();
  },
  toSorted(e) {
    return Na(this).toSorted(e);
  },
  toSpliced(...e) {
    return Na(this).toSpliced(...e);
  },
  unshift(...e) {
    return br(this, "unshift", e);
  },
  values() {
    return Ql(this, "values", (e) => Un(this, e));
  }
};
function Ql(e, t, n) {
  const i = Sl(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ wn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const $g = Array.prototype;
function Yn(e, t, n, i, a, r) {
  const o = Sl(e), s = o !== e && !/* @__PURE__ */ wn(e), u = o[t];
  if (u !== $g[t]) {
    const m = u.apply(e, r);
    return s ? Ln(m) : m;
  }
  let h = n;
  o !== e && (s ? h = function(m, C) {
    return n.call(this, Un(e, m), C, e);
  } : n.length > 2 && (h = function(m, C) {
    return n.call(this, m, C, e);
  }));
  const d = u.call(o, h, i);
  return s && a ? a(d) : d;
}
function yd(e, t, n, i) {
  const a = Sl(e), r = a !== e && !/* @__PURE__ */ wn(e);
  let o = n, s = !1;
  a !== e && (r ? (s = i.length === 0, o = function(h, d, m) {
    return s && (s = !1, h = Un(e, h)), n.call(this, h, Un(e, d), m, e);
  }) : n.length > 3 && (o = function(h, d, m) {
    return n.call(this, h, d, m, e);
  }));
  const u = a[t](o, ...i);
  return s ? Un(e, u) : u;
}
function ec(e, t, n) {
  const i = /* @__PURE__ */ Ye(e);
  Ft(i, "iterate", Zr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ wu(n[0]) ? (n[0] = /* @__PURE__ */ Ye(n[0]), i[t](...n)) : a;
}
function br(e, t, n = []) {
  ci(), gu();
  const i = (/* @__PURE__ */ Ye(e))[t].apply(e, n);
  return mu(), ui(), i;
}
const Dg = /* @__PURE__ */ hu("__proto__,__v_isRef,__isVue"), Th = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nn)
);
function Fg(e) {
  Nn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Ft(t, "has", e), t.hasOwnProperty(e);
}
class Eh {
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
      return i === (a ? r ? Wg : xh : r ? Oh : kh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Te(t);
    if (!a) {
      let u;
      if (o && (u = Pg[n]))
        return u;
      if (n === "hasOwnProperty")
        return Fg;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Bt(t) ? t : i
    );
    if ((Nn(n) ? Th.has(n) : Dg(n)) || (a || Ft(t, "get", n), r))
      return s;
    if (/* @__PURE__ */ Bt(s)) {
      const u = o && vu(n) ? s : s.value;
      return a && Je(u) ? /* @__PURE__ */ Jr(u) : u;
    }
    return Je(s) ? a ? /* @__PURE__ */ Jr(s) : /* @__PURE__ */ Dt(s) : s;
  }
}
class Ah extends Eh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const o = Te(t) && vu(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ di(r);
      if (!/* @__PURE__ */ wn(i) && !/* @__PURE__ */ di(i) && (r = /* @__PURE__ */ Ye(r), i = /* @__PURE__ */ Ye(i)), !o && /* @__PURE__ */ Bt(r) && !/* @__PURE__ */ Bt(i))
        return h || (r.value = i), !0;
    }
    const s = o ? Number(n) < t.length : Ze(t, n), u = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Bt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && u && (s ? Ot(i, r) && ni(t, "set", n, i) : ni(t, "add", n, i)), u;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ni(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Nn(n) || !Th.has(n)) && Ft(t, "has", n), i;
  }
  ownKeys(t) {
    return Ft(
      t,
      "iterate",
      Te(t) ? "length" : da
    ), Reflect.ownKeys(t);
  }
}
class Mg extends Eh {
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
const zg = /* @__PURE__ */ new Ah(), Ug = /* @__PURE__ */ new Mg(), Bg = /* @__PURE__ */ new Ah(!0);
const Fc = (e) => e, Yo = (e) => Reflect.getPrototypeOf(e);
function jg(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = Ni(r), s = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = a[e](...i), d = n ? Fc : t ? Ga : Ln;
    return !t && Ft(
      r,
      "iterate",
      u ? Dc : da
    ), _t(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: m, done: C } = h.next();
          return C ? { value: m, done: C } : {
            value: s ? [d(m[0]), d(m[1])] : d(m),
            done: C
          };
        }
      }
    );
  };
}
function Xo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hg(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), s = /* @__PURE__ */ Ye(a);
      e || (Ot(a, s) && Ft(o, "get", a), Ft(o, "get", s));
      const { has: u } = Yo(o), h = t ? Fc : e ? Ga : Ln;
      if (u.call(o, a))
        return h(r.get(a));
      if (u.call(o, s))
        return h(r.get(s));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Ft(/* @__PURE__ */ Ye(a), "iterate", da), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), s = /* @__PURE__ */ Ye(a);
      return e || (Ot(a, s) && Ft(o, "has", a), Ft(o, "has", s)), a === s ? r.has(a) : r.has(a) || r.has(s);
    },
    forEach(a, r) {
      const o = this, s = o.__v_raw, u = /* @__PURE__ */ Ye(s), h = t ? Fc : e ? Ga : Ln;
      return !e && Ft(u, "iterate", da), s.forEach((d, m) => a.call(r, h(d), h(m), o));
    }
  };
  return _t(
    n,
    e ? {
      add: Xo("add"),
      set: Xo("set"),
      delete: Xo("delete"),
      clear: Xo("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = Yo(r), s = /* @__PURE__ */ Ye(a), u = !t && !/* @__PURE__ */ wn(a) && !/* @__PURE__ */ di(a) ? s : a;
        return o.has.call(r, u) || Ot(a, u) && o.has.call(r, a) || Ot(s, u) && o.has.call(r, s) || (r.add(u), ni(r, "add", u, u)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ wn(r) && !/* @__PURE__ */ di(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: s, get: u } = Yo(o);
        let h = s.call(o, a);
        h || (a = /* @__PURE__ */ Ye(a), h = s.call(o, a));
        const d = u.call(o, a);
        return o.set(a, r), h ? Ot(r, d) && ni(o, "set", a, r) : ni(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: s } = Yo(r);
        let u = o.call(r, a);
        u || (a = /* @__PURE__ */ Ye(a), u = o.call(r, a)), s && s.call(r, a);
        const h = r.delete(a);
        return u && ni(r, "delete", a, void 0), h;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && ni(
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
    n[a] = jg(a, e, t);
  }), n;
}
function yu(e, t) {
  const n = Hg(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Vg = {
  get: /* @__PURE__ */ yu(!1, !1)
}, Kg = {
  get: /* @__PURE__ */ yu(!1, !0)
}, Gg = {
  get: /* @__PURE__ */ yu(!0, !1)
};
const kh = /* @__PURE__ */ new WeakMap(), Oh = /* @__PURE__ */ new WeakMap(), xh = /* @__PURE__ */ new WeakMap(), Wg = /* @__PURE__ */ new WeakMap();
function qg(e) {
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
  return /* @__PURE__ */ di(e) ? e : _u(
    e,
    !1,
    zg,
    Vg,
    kh
  );
}
// @__NO_SIDE_EFFECTS__
function Yg(e) {
  return _u(
    e,
    !1,
    Bg,
    Kg,
    Oh
  );
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  return _u(
    e,
    !0,
    Ug,
    Gg,
    xh
  );
}
function _u(e, t, n, i, a) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = qg(mg(e));
  if (o === 0)
    return e;
  const s = new Proxy(
    e,
    o === 2 ? i : n
  );
  return a.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  return /* @__PURE__ */ di(e) ? /* @__PURE__ */ fa(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function di(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function wu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ye(t) : e;
}
function Xg(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && fh(e, "__v_skip", !0), e;
}
const Ln = (e) => Je(e) ? /* @__PURE__ */ Dt(e) : e, Ga = (e) => Je(e) ? /* @__PURE__ */ Jr(e) : e;
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return Lh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Nh(e) {
  return Lh(e, !0);
}
function Lh(e, t) {
  return /* @__PURE__ */ Bt(e) ? e : new Zg(e, t);
}
class Zg {
  constructor(t, n) {
    this.dep = new wl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ye(t), this._value = n ? t : Ln(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ wn(t) || /* @__PURE__ */ di(t);
    t = i ? t : /* @__PURE__ */ Ye(t), Ot(t, n) && (this._rawValue = t, this._value = i ? t : Ln(t), this.dep.trigger());
  }
}
function v(e) {
  return /* @__PURE__ */ Bt(e) ? e.value : e;
}
function oi(e) {
  return Pe(e) ? e() : v(e);
}
const Jg = {
  get: (e, t, n) => t === "__v_raw" ? e : v(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Bt(a) && !/* @__PURE__ */ Bt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Rh(e) {
  return /* @__PURE__ */ fa(e) ? e : new Proxy(e, Jg);
}
class Qg {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new wl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function em(e) {
  return new Qg(e);
}
class tm {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new wl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    rt !== this)
      return bh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return wh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function nm(e, t, n = !1) {
  let i, a;
  return Pe(e) ? i = e : (i = e.get, a = e.set), new tm(i, a, n);
}
const Zo = {}, vs = /* @__PURE__ */ new WeakMap();
let na;
function im(e, t = !1, n = na) {
  if (n) {
    let i = vs.get(n);
    i || vs.set(n, i = []), i.push(e);
  }
}
function am(e, t, n = Ge) {
  const { immediate: i, deep: a, once: r, scheduler: o, augmentJob: s, call: u } = n, h = (P) => a ? P : /* @__PURE__ */ wn(P) || a === !1 || a === 0 ? ii(P, 1) : ii(P);
  let d, m, C, E, x = !1, A = !1;
  if (/* @__PURE__ */ Bt(e) ? (m = () => e.value, x = /* @__PURE__ */ wn(e)) : /* @__PURE__ */ fa(e) ? (m = () => h(e), x = !0) : Te(e) ? (A = !0, x = e.some((P) => /* @__PURE__ */ fa(P) || /* @__PURE__ */ wn(P)), m = () => e.map((P) => {
    if (/* @__PURE__ */ Bt(P))
      return P.value;
    if (/* @__PURE__ */ fa(P))
      return h(P);
    if (Pe(P))
      return u ? u(P, 2) : P();
  })) : Pe(e) ? t ? m = u ? () => u(e, 2) : e : m = () => {
    if (C) {
      ci();
      try {
        C();
      } finally {
        ui();
      }
    }
    const P = na;
    na = d;
    try {
      return u ? u(e, 3, [E]) : e(E);
    } finally {
      na = P;
    }
  } : m = _n, t && a) {
    const P = m, N = a === !0 ? 1 / 0 : a;
    m = () => ii(P(), N);
  }
  const O = Lg(), F = () => {
    d.stop(), O && O.active && pu(O.effects, d);
  };
  if (r && t) {
    const P = t;
    t = (...N) => {
      const de = P(...N);
      return F(), de;
    };
  }
  let z = A ? new Array(e.length).fill(Zo) : Zo;
  const W = (P) => {
    if (!(!(d.flags & 1) || !d.dirty && !P))
      if (t) {
        const N = d.run();
        if (P || a || x || (A ? N.some((de, J) => Ot(de, z[J])) : Ot(N, z))) {
          C && C();
          const de = na;
          na = d;
          try {
            const J = [
              N,
              // pass undefined as the old value when it's changed for the first time
              z === Zo ? void 0 : A && z[0] === Zo ? [] : z,
              E
            ];
            z = N, u ? u(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            na = de;
          }
        }
      } else
        d.run();
  };
  return s && s(W), d = new gh(m), d.scheduler = o ? () => o(W, !1) : W, E = (P) => im(P, !1, d), C = d.onStop = () => {
    const P = vs.get(d);
    if (P) {
      if (u)
        u(P, 4);
      else
        for (const N of P) N();
      vs.delete(d);
    }
  }, t ? i ? W(!0) : z = d.run() : o ? o(W.bind(null, !0), !0) : d.run(), F.pause = d.pause.bind(d), F.resume = d.resume.bind(d), F.stop = F, F;
}
function ii(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Bt(e))
    ii(e.value, t, n);
  else if (Te(e))
    for (let i = 0; i < e.length; i++)
      ii(e[i], t, n);
  else if (pa(e) || Ni(e))
    e.forEach((i) => {
      ii(i, t, n);
    });
  else if (dh(e)) {
    for (const i in e)
      ii(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ii(e[i], t, n);
  }
  return e;
}
function go(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Cl(a, t, n);
  }
}
function Sn(e, t, n, i) {
  if (Pe(e)) {
    const a = go(e, t, n, i);
    return a && ch(a) && a.catch((r) => {
      Cl(r, t, n);
    }), a;
  }
  if (Te(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Sn(e[r], t, n, i));
    return a;
  }
}
function Cl(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ge;
  if (t) {
    let s = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let m = 0; m < d.length; m++)
          if (d[m](e, u, h) === !1)
            return;
      }
      s = s.parent;
    }
    if (r) {
      ci(), go(r, null, 10, [
        e,
        u,
        h
      ]), ui();
      return;
    }
  }
  rm(e, n, a, i, o);
}
function rm(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Wt = [];
let Fn = -1;
const za = [];
let Oi = null, $a = 0;
const Ih = /* @__PURE__ */ Promise.resolve();
let gs = null;
function Jt(e) {
  const t = gs || Ih;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function om(e) {
  let t = Fn + 1, n = Wt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Wt[i], r = Qr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Su(e) {
  if (!(e.flags & 1)) {
    const t = Qr(e), n = Wt[Wt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qr(n) ? Wt.push(e) : Wt.splice(om(t), 0, e), e.flags |= 1, Ph();
  }
}
function Ph() {
  gs || (gs = Ih.then(Fh));
}
function $h(e) {
  if (!Te(e))
    Oi && e.id === -1 ? Oi.splice($a + 1, 0, e) : e.flags & 1 || (za.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      za.push(e[t]);
  Ph();
}
function _d(e, t, n = Fn + 1) {
  for (; n < Wt.length; n++) {
    const i = Wt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Wt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Dh(e) {
  if (za.length) {
    const t = [...new Set(za)].sort(
      (n, i) => Qr(n) - Qr(i)
    );
    if (za.length = 0, Oi) {
      for (let n = 0; n < t.length; n++)
        Oi.push(t[n]);
      return;
    }
    for (Oi = t, $a = 0; $a < Oi.length; $a++) {
      const n = Oi[$a];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Oi = null, $a = 0;
  }
}
const Qr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Fh(e) {
  try {
    for (Fn = 0; Fn < Wt.length; Fn++) {
      const t = Wt[Fn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), go(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Fn < Wt.length; Fn++) {
      const t = Wt[Fn];
      t && (t.flags &= -2);
    }
    Fn = -1, Wt.length = 0, Dh(), gs = null, (Wt.length || za.length) && Fh();
  }
}
let Nt = null, Tl = null;
function ms(e) {
  const t = Nt;
  return Nt = e, Tl = e && e.type.__scopeId || null, t;
}
function sm(e) {
  Tl = e;
}
function lm() {
  Tl = null;
}
const cm = (e) => Le;
function Le(e, t = Nt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Ss(-1);
    const r = ms(t), o = si.length;
    let s;
    try {
      s = e(...a);
    } finally {
      for (let u = si.length; u > o; u--) xu();
      ms(r), i._d && Ss(1);
    }
    return s;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Re(e, t) {
  if (Nt === null)
    return e;
  const n = Nl(Nt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, s, u = Ge] = t[a];
    r && (Pe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ii(o), i.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: s,
      modifiers: u
    }));
  }
  return e;
}
function Xi(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const s = a[o];
    r && (s.oldValue = r[o].value);
    let u = s.dir[i];
    u && (ci(), Sn(u, n, 8, [
      e.el,
      s,
      e,
      t
    ]), ui());
  }
}
function mn(e, t) {
  if (zt) {
    let n = zt.provides;
    const i = zt.parent && zt.parent.provides;
    i === n && (n = zt.provides = Object.create(i)), n[e] = t;
  }
}
function Mt(e, t, n = !1) {
  const i = ga();
  if (i || Ba) {
    let a = Ba ? Ba._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Pe(t) ? t.call(i && i.proxy) : t;
  }
}
const um = /* @__PURE__ */ Symbol.for("v-scx"), dm = () => Mt(um);
function fm(e, t) {
  return El(e, null, t);
}
function hm(e, t) {
  return El(
    e,
    null,
    { flush: "sync" }
  );
}
function nt(e, t, n) {
  return El(e, t, n);
}
function El(e, t, n = Ge) {
  const { immediate: i, deep: a, flush: r, once: o } = n, s = _t({}, n), u = t && i || !t && r !== "post";
  let h;
  if (ro) {
    if (r === "sync") {
      const E = dm();
      h = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!u) {
      const E = () => {
      };
      return E.stop = _n, E.resume = _n, E.pause = _n, E;
    }
  }
  const d = zt;
  s.call = (E, x, A) => Sn(E, d, x, A);
  let m = !1;
  r === "post" ? s.scheduler = (E) => {
    Gt(E, d && d.suspense);
  } : r !== "sync" && (m = !0, s.scheduler = (E, x) => {
    x ? E() : Su(E);
  }), s.augmentJob = (E) => {
    t && (E.flags |= 4), m && (E.flags |= 2, d && (E.id = d.uid, E.i = d));
  };
  const C = am(e, t, s);
  return ro && (h ? h.push(C) : u && C()), C;
}
function pm(e, t, n) {
  const i = this.proxy, a = st(e) ? e.includes(".") ? Mh(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Pe(t) ? r = t : (r = t.handler, n = t);
  const o = yo(this), s = El(a, r.bind(i), n);
  return o(), s;
}
function Mh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Ei = /* @__PURE__ */ new WeakMap(), zh = /* @__PURE__ */ Symbol("_vte"), Al = (e) => e.__isTeleport, aa = (e) => e && (e.disabled || e.disabled === ""), vm = (e) => e && (e.defer || e.defer === ""), wd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Sd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Mc = (e, t) => {
  const n = e && e.to;
  return st(n) ? t ? t(n) : null : n;
}, gm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, o, s, u, h) {
    const {
      mc: d,
      pc: m,
      pbc: C,
      o: { insert: E, querySelector: x, createText: A, createComment: O, parentNode: F }
    } = h, z = aa(t.props);
    let { dynamicChildren: W } = t;
    const P = (J, fe, Y) => {
      J.shapeFlag & 16 && d(
        J.children,
        fe,
        Y,
        a,
        r,
        o,
        s,
        u
      );
    }, N = (J = t) => {
      const fe = aa(J.props), Y = J.target = Mc(J.props, x), se = zc(Y, J, A, E);
      Y && (o !== "svg" && wd(Y) ? o = "svg" : o !== "mathml" && Sd(Y) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Y), fe || (P(J, Y, se), Or(J, !1)));
    }, de = (J) => {
      const fe = () => {
        if (Ei.get(J) === fe) {
          if (Ei.delete(J), aa(J.props)) {
            const Y = F(J.el) || n;
            P(J, Y, J.anchor), Or(J, !0);
          }
          N(J);
        }
      };
      Ei.set(J, fe), Gt(fe, r);
    };
    if (e == null) {
      const J = t.el = A(""), fe = t.anchor = A("");
      if (E(J, n, i), E(fe, n, i), vm(t.props) || r && r.pendingBranch) {
        de(t);
        return;
      }
      z && (P(t, n, fe), Or(t, !0)), N();
    } else {
      t.el = e.el;
      const J = t.anchor = e.anchor, fe = Ei.get(e);
      if (fe) {
        fe.flags |= 8, Ei.delete(e), de(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Y = t.target = e.target, se = t.targetAnchor = e.targetAnchor, ye = aa(e.props), Q = ye ? n : Y, ie = ye ? J : se;
      if (o === "svg" || wd(Y) ? o = "svg" : (o === "mathml" || Sd(Y)) && (o = "mathml"), W ? (C(
        e.dynamicChildren,
        W,
        Q,
        a,
        r,
        o,
        s
      ), Ou(e, t, !0)) : u || m(
        e,
        t,
        Q,
        ie,
        a,
        r,
        o,
        s,
        !1
      ), z)
        ye ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Jo(
          t,
          n,
          J,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = Mc(t.props, x);
        $ && (t.target = $, Jo(
          t,
          $,
          null,
          h,
          0
        ));
      } else ye && Jo(
        t,
        Y,
        se,
        h,
        1
      );
      Or(t, z);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: s,
      anchor: u,
      targetStart: h,
      targetAnchor: d,
      target: m,
      props: C
    } = e, E = aa(C), x = r || !E, A = Ei.get(e);
    if (A && (A.flags |= 8, Ei.delete(e)), m && (a(h), a(d)), r && a(u), !A && (E || m) && o & 16)
      for (let O = 0; O < s.length; O++) {
        const F = s[O];
        i(
          F,
          t,
          n,
          x,
          !!F.dynamicChildren
        );
      }
  },
  move: Jo,
  hydrate: mm
};
function Jo(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: s, shapeFlag: u, children: h, props: d } = e, m = r === 2;
  if (m && i(o, t, n), !Ei.has(e) && (!m || aa(d)) && u & 16)
    for (let C = 0; C < h.length; C++)
      a(
        h[C],
        t,
        n,
        2
      );
  m && i(s, t, n);
}
function mm(e, t, n, i, a, r, {
  o: { nextSibling: o, parentNode: s, querySelector: u, insert: h, createText: d }
}, m) {
  function C(O, F) {
    let z = F;
    for (; z; ) {
      if (z && z.nodeType === 8) {
        if (z.data === "teleport start anchor")
          t.targetStart = z;
        else if (z.data === "teleport anchor") {
          t.targetAnchor = z, O._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      z = o(z);
    }
  }
  function E(O, F) {
    F.anchor = m(
      o(O),
      F,
      s(O),
      n,
      i,
      a,
      r
    );
  }
  const x = t.target = Mc(
    t.props,
    u
  ), A = aa(t.props);
  if (x) {
    const O = x._lpa || x.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), C(x, O), t.targetAnchor || zc(
      x,
      t,
      d,
      h,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      s(e) === x ? e : null
    )) : (t.anchor = o(e), C(x, O), t.targetAnchor || zc(x, t, d, h), m(
      O && o(O),
      t,
      x,
      n,
      i,
      a,
      r
    ))), Or(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Uh = gm;
function Or(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function zc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[zh] = o, e && (i(r, e, a), i(o, e, a)), o;
}
const bn = /* @__PURE__ */ Symbol("_leaveCb"), yr = /* @__PURE__ */ Symbol("_enterCb");
function bm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Fi(() => {
    e.isMounted = !0;
  }), Wa(() => {
    e.isUnmounting = !0;
  }), e;
}
const hn = [Function, Array], Bh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: hn,
  onEnter: hn,
  onAfterEnter: hn,
  onEnterCancelled: hn,
  // leave
  onBeforeLeave: hn,
  onLeave: hn,
  onAfterLeave: hn,
  onLeaveCancelled: hn,
  // appear
  onBeforeAppear: hn,
  onAppear: hn,
  onAfterAppear: hn,
  onAppearCancelled: hn
}, jh = (e) => {
  const t = e.subTree;
  return t.component ? jh(t.component) : t;
}, ym = {
  name: "BaseTransition",
  props: Bh,
  setup(e, { slots: t }) {
    const n = ga(), i = bm();
    return () => {
      const a = t.default && Kh(t.default(), !0), r = a && a.length ? Hh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? B() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: s } = o;
      if (i.isLeaving)
        return tc(r);
      const u = bs(r);
      if (!u)
        return tc(r);
      let h = Uc(
        u,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (m) => h = m
      );
      u.type !== xt && eo(u, h);
      let d = n.subTree && bs(n.subTree);
      if (d && d.type !== xt && !ra(d, u) && jh(n).type !== xt) {
        let m = Uc(
          d,
          o,
          i,
          n
        );
        if (eo(d, m), s === "out-in" && u.type !== xt)
          return i.isLeaving = !0, m.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete m.afterLeave, d = void 0;
          }, tc(r);
        s === "in-out" && u.type !== xt ? m.delayLeave = (C, E, x) => {
          const A = Vh(
            i,
            d
          );
          A[String(d.key)] = d, C[bn] = () => {
            E(), C[bn] = void 0, delete h.delayedLeave, d = void 0;
          }, h.delayedLeave = () => {
            x(), delete h.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return r;
    };
  }
};
function Hh(e) {
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
const _m = ym;
function Vh(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Uc(e, t, n, i, a) {
  const {
    appear: r,
    mode: o,
    persisted: s = !1,
    onBeforeEnter: u,
    onEnter: h,
    onAfterEnter: d,
    onEnterCancelled: m,
    onBeforeLeave: C,
    onLeave: E,
    onAfterLeave: x,
    onLeaveCancelled: A,
    onBeforeAppear: O,
    onAppear: F,
    onAfterAppear: z,
    onAppearCancelled: W
  } = t, P = String(e.key), N = Vh(n, e), de = (Y, se) => {
    Y && Sn(
      Y,
      i,
      9,
      se
    );
  }, J = (Y, se) => {
    const ye = se[1];
    de(Y, se), Te(Y) ? Y.every((Q) => Q.length <= 1) && ye() : Y.length <= 1 && ye();
  }, fe = {
    mode: o,
    persisted: s,
    beforeEnter(Y) {
      let se = u;
      if (!n.isMounted)
        if (r)
          se = O || u;
        else
          return;
      Y[bn] && Y[bn](
        !0
        /* cancelled */
      );
      const ye = N[P];
      ye && ra(e, ye) && ye.el[bn] && ye.el[bn](), de(se, [Y]);
    },
    enter(Y) {
      if (N[P] === e) return;
      let se = h, ye = d, Q = m;
      if (!n.isMounted)
        if (r)
          se = F || h, ye = z || d, Q = W || m;
        else
          return;
      let ie = !1;
      Y[yr] = (M) => {
        ie || (ie = !0, M ? de(Q, [Y]) : de(ye, [Y]), fe.delayedLeave && fe.delayedLeave(), Y[yr] = void 0);
      };
      const $ = Y[yr].bind(null, !1);
      se ? J(se, [Y, $]) : $();
    },
    leave(Y, se) {
      const ye = String(e.key);
      if (Y[yr] && Y[yr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      de(C, [Y]);
      let Q = !1;
      Y[bn] = ($) => {
        Q || (Q = !0, se(), $ ? de(A, [Y]) : de(x, [Y]), Y[bn] = void 0, N[ye] === e && delete N[ye]);
      };
      const ie = Y[bn].bind(null, !1);
      N[ye] = e, E ? J(E, [Y, ie]) : ie();
    },
    clone(Y) {
      const se = Uc(
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
function tc(e) {
  if (kl(e))
    return e = $i(e), e.children = null, e;
}
function bs(e) {
  if (!kl(e))
    return Al(e.type) && e.children ? Hh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Pe(n.default))
      return n.default();
  }
}
function eo(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    eo(
      Al(n.type) && bs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Kh(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const s = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === le ? (o.patchFlag & 128 && a++, i = i.concat(
      Kh(o.children, t, s)
    )) : (t || o.type !== xt) && i.push(s != null ? $i(o, { key: s }) : o);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Lt(e, t) {
  return Pe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    _t({ name: e.name }, t, { setup: e })
  ) : e;
}
function Gh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function wm(e) {
  const t = ga(), n = /* @__PURE__ */ Nh(null);
  if (t) {
    const a = t.refs === Ge ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function Cd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ys = /* @__PURE__ */ new WeakMap();
function Fr(e, t, n, i, a = !1) {
  if (Te(e)) {
    e.forEach(
      (A, O) => Fr(
        A,
        t && (Te(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ua(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Fr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Nl(i.component) : i.el, o = a ? null : r, { i: s, r: u } = e, h = t && t.r, d = s.refs === Ge ? s.refs = {} : s.refs, m = s.setupState, C = /* @__PURE__ */ Ye(m), E = m === Ge ? lh : (A) => Cd(d, A) ? !1 : Ze(C, A), x = (A, O) => !(O && Cd(d, O));
  if (h != null && h !== u) {
    if (Td(t), st(h))
      d[h] = null, E(h) && (m[h] = null);
    else if (/* @__PURE__ */ Bt(h)) {
      const A = t;
      x(h, A.k) && (h.value = null), A.k && (d[A.k] = null);
    }
  }
  if (Pe(u))
    go(u, s, 12, [o, d]);
  else {
    const A = st(u), O = /* @__PURE__ */ Bt(u);
    if (A || O) {
      const F = () => {
        if (e.f) {
          const z = A ? E(u) ? m[u] : d[u] : x() || !e.k ? u.value : d[e.k];
          if (a)
            Te(z) && pu(z, r);
          else if (Te(z))
            z.includes(r) || z.push(r);
          else if (A)
            d[u] = [r], E(u) && (m[u] = d[u]);
          else {
            const W = [r];
            x(u, e.k) && (u.value = W), e.k && (d[e.k] = W);
          }
        } else A ? (d[u] = o, E(u) && (m[u] = o)) : O && (x(u, e.k) && (u.value = o), e.k && (d[e.k] = o));
      };
      if (o) {
        const z = () => {
          F(), ys.delete(e);
        };
        z.id = -1, ys.set(e, z), Gt(z, n);
      } else
        Td(e), F();
    }
  }
}
function Td(e) {
  const t = ys.get(e);
  t && (t.flags |= 8, ys.delete(e));
}
_l().requestIdleCallback;
_l().cancelIdleCallback;
const Ua = (e) => !!e.type.__asyncLoader, kl = (e) => e.type.__isKeepAlive;
function Sm(e, t) {
  Wh(e, "a", t);
}
function Cm(e, t) {
  Wh(e, "da", t);
}
function Wh(e, t, n = zt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Ol(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      kl(a.parent.vnode) && Tm(i, t, n, a), a = a.parent;
  }
}
function Tm(e, t, n, i) {
  const a = Ol(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  mo(() => {
    pu(i[t], a);
  }, n);
}
function Ol(e, t, n = zt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      ci();
      const s = yo(n), u = Sn(t, n, e, o);
      return s(), ui(), u;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const pi = (e) => (t, n = zt) => {
  (!ro || e === "sp") && Ol(e, (...i) => t(...i), n);
}, qh = pi("bm"), Fi = pi("m"), Yh = pi(
  "bu"
), Em = pi("u"), Wa = pi(
  "bum"
), mo = pi("um"), Am = pi(
  "sp"
), km = pi("rtg"), Om = pi("rtc");
function xm(e, t = zt) {
  Ol("ec", e, t);
}
const Cu = "components", Nm = "directives";
function je(e, t) {
  return Eu(Cu, e, !0, t) || e;
}
const Xh = /* @__PURE__ */ Symbol.for("v-ndc");
function Tu(e) {
  return st(e) ? Eu(Cu, e, !1) || e : e || Xh;
}
function Ed(e) {
  return Eu(Nm, e);
}
function Eu(e, t, n = !0, i = !1) {
  const a = Nt || zt;
  if (a) {
    const r = a.type;
    if (e === Cu) {
      const s = fb(
        r,
        !1
      );
      if (s && (s === t || s === Ut(t) || s === bl(Ut(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ad(a[e] || r[e], t) || // global registration
      Ad(a.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function Ad(e, t) {
  return e && (e[t] || e[Ut(t)] || e[bl(Ut(t))]);
}
function ke(e, t, n, i) {
  let a;
  const r = n, o = Te(e);
  if (o || st(e)) {
    const s = o && /* @__PURE__ */ fa(e);
    let u = !1, h = !1;
    s && (u = !/* @__PURE__ */ wn(e), h = /* @__PURE__ */ di(e), e = Sl(e)), a = new Array(e.length);
    for (let d = 0, m = e.length; d < m; d++)
      a[d] = t(
        u ? h ? Ga(Ln(e[d])) : Ln(e[d]) : e[d],
        d,
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
        (s, u) => t(s, u, void 0, r)
      );
    else {
      const s = Object.keys(e);
      a = new Array(s.length);
      for (let u = 0, h = s.length; u < h; u++) {
        const d = s[u];
        a[u] = t(e[d], d, u, r);
      }
    }
  else
    a = [];
  return a;
}
function Fe(e, t, n, i, a, r) {
  if (n == null && (n = {}), Nt.ce || Nt.parent && Ua(Nt.parent) && Nt.parent.ce) {
    const h = n, d = Object.keys(h).length > 0;
    return t !== "default" && (h.name = t), y(), Be(
      le,
      null,
      [Se("slot", h, i && i())],
      d ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const s = si.length;
  y();
  let u;
  try {
    const h = o && Zh(o(n)), d = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    h && h.key;
    u = Be(
      le,
      {
        key: (d && !Nn(d) ? d : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!h && i ? "_fb" : "")
      },
      h || (i ? i() : []),
      h && e._ === 1 ? 64 : -2
    );
  } catch (h) {
    for (let d = si.length; d > s; d--) xu();
    throw h;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), u;
}
function Zh(e) {
  return e.some((t) => no(t) ? !(t.type === xt || t.type === le && !Zh(t.children)) : !0) ? e : null;
}
const Bc = (e) => e ? yp(e) ? Nl(e) : Bc(e.parent) : null, Mr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ _t(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Bc(e.parent),
    $root: (e) => Bc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ep(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Su(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Jt.bind(e.proxy)),
    $watch: (e) => pm.bind(e)
  })
), nc = (e, t) => e !== Ge && !e.__isScriptSetup && Ze(e, t), Lm = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: o, type: s, appContext: u } = e;
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
        if (nc(i, t))
          return o[t] = 1, i[t];
        if (a !== Ge && Ze(a, t))
          return o[t] = 2, a[t];
        if (Ze(r, t))
          return o[t] = 3, r[t];
        if (n !== Ge && Ze(n, t))
          return o[t] = 4, n[t];
        jc && (o[t] = 0);
      }
    }
    const h = Mr[t];
    let d, m;
    if (h)
      return t === "$attrs" && Ft(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (d = s.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Ge && Ze(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      m = u.config.globalProperties, Ze(m, t)
    )
      return m[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return nc(a, t) ? (a[t] = n, !0) : i !== Ge && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: o }
  }, s) {
    let u;
    return !!(n[s] || e !== Ge && s[0] !== "$" && Ze(e, s) || nc(t, s) || Ze(r, s) || Ze(i, s) || Ze(Mr, s) || Ze(a.config.globalProperties, s) || (u = o.__cssModules) && u[s]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Rm() {
  return Jh().slots;
}
function Im() {
  return Jh().attrs;
}
function Jh(e) {
  const t = ga();
  return t.setupContext || (t.setupContext = wp(t));
}
function _s(e) {
  return Te(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Pm(e, t) {
  return !e || !t ? e || t : Te(e) && Te(t) ? e.concat(t) : _t({}, _s(e), _s(t));
}
let jc = !0;
function $m(e) {
  const t = ep(e), n = e.proxy, i = e.ctx;
  jc = !1, t.beforeCreate && kd(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: s,
    provide: u,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: m,
    mounted: C,
    beforeUpdate: E,
    updated: x,
    activated: A,
    deactivated: O,
    beforeDestroy: F,
    beforeUnmount: z,
    destroyed: W,
    unmounted: P,
    render: N,
    renderTracked: de,
    renderTriggered: J,
    errorCaptured: fe,
    serverPrefetch: Y,
    // public API
    expose: se,
    inheritAttrs: ye,
    // assets
    components: Q,
    directives: ie,
    filters: $
  } = t;
  if (h && Dm(h, i, null), o)
    for (const oe in o) {
      const ne = o[oe];
      Pe(ne) && (i[oe] = ne.bind(n));
    }
  if (a) {
    const oe = a.call(n, n);
    Je(oe) && (e.data = /* @__PURE__ */ Dt(oe));
  }
  if (jc = !0, r)
    for (const oe in r) {
      const ne = r[oe], ve = Pe(ne) ? ne.bind(n, n) : Pe(ne.get) ? ne.get.bind(n, n) : _n, ge = !Pe(ne) && Pe(ne.set) ? ne.set.bind(n) : _n, _e = H({
        get: ve,
        set: ge
      });
      Object.defineProperty(i, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => _e.value,
        set: (pe) => _e.value = pe
      });
    }
  if (s)
    for (const oe in s)
      Qh(s[oe], i, n, oe);
  if (u) {
    const oe = Pe(u) ? u.call(n) : u;
    Reflect.ownKeys(oe).forEach((ne) => {
      mn(ne, oe[ne]);
    });
  }
  d && kd(d, e, "c");
  function X(oe, ne) {
    Te(ne) ? ne.forEach((ve) => oe(ve.bind(n))) : ne && oe(ne.bind(n));
  }
  if (X(qh, m), X(Fi, C), X(Yh, E), X(Em, x), X(Sm, A), X(Cm, O), X(xm, fe), X(Om, de), X(km, J), X(Wa, z), X(mo, P), X(Am, Y), Te(se))
    if (se.length) {
      const oe = e.exposed || (e.exposed = {});
      se.forEach((ne) => {
        Object.defineProperty(oe, ne, {
          get: () => n[ne],
          set: (ve) => n[ne] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === _n && (e.render = N), ye != null && (e.inheritAttrs = ye), Q && (e.components = Q), ie && (e.directives = ie), Y && Gh(e);
}
function Dm(e, t, n = _n) {
  Te(e) && (e = Hc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Je(a) ? "default" in a ? r = Mt(
      a.from || i,
      a.default,
      !0
    ) : r = Mt(a.from || i) : r = Mt(a), /* @__PURE__ */ Bt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function kd(e, t, n) {
  Sn(
    Te(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Qh(e, t, n, i) {
  let a = i.includes(".") ? Mh(n, i) : () => n[i];
  if (st(e)) {
    const r = t[e];
    Pe(r) && nt(a, r);
  } else if (Pe(e))
    nt(a, e.bind(n));
  else if (Je(e))
    if (Te(e))
      e.forEach((r) => Qh(r, t, n, i));
    else {
      const r = Pe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Pe(r) && nt(a, r, e);
    }
}
function ep(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, s = r.get(t);
  let u;
  return s ? u = s : !a.length && !n && !i ? u = t : (u = {}, a.length && a.forEach(
    (h) => ws(u, h, o, !0)
  ), ws(u, t, o)), Je(t) && r.set(t, u), u;
}
function ws(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && ws(e, r, n, !0), a && a.forEach(
    (o) => ws(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const s = Fm[o] || n && n[o];
      e[o] = s ? s(e[o], t[o]) : t[o];
    }
  return e;
}
const Fm = {
  data: Od,
  props: xd,
  emits: xd,
  // objects
  methods: xr,
  computed: xr,
  // lifecycle
  beforeCreate: Kt,
  created: Kt,
  beforeMount: Kt,
  mounted: Kt,
  beforeUpdate: Kt,
  updated: Kt,
  beforeDestroy: Kt,
  beforeUnmount: Kt,
  destroyed: Kt,
  unmounted: Kt,
  activated: Kt,
  deactivated: Kt,
  errorCaptured: Kt,
  serverPrefetch: Kt,
  // assets
  components: xr,
  directives: xr,
  // watch
  watch: zm,
  // provide / inject
  provide: Od,
  inject: Mm
};
function Od(e, t) {
  return t ? e ? function() {
    return _t(
      Pe(e) ? e.call(this, this) : e,
      Pe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Mm(e, t) {
  return xr(Hc(e), Hc(t));
}
function Hc(e) {
  if (Te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Kt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function xr(e, t) {
  return e ? _t(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xd(e, t) {
  return e ? Te(e) && Te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _t(
    /* @__PURE__ */ Object.create(null),
    _s(e),
    _s(t ?? {})
  ) : t;
}
function zm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = _t(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Kt(e[i], t[i]);
  return n;
}
function tp() {
  return {
    app: null,
    config: {
      isNativeTag: lh,
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
let Um = 0;
function Bm(e, t) {
  return function(i, a = null) {
    Pe(i) || (i = _t({}, i)), a != null && !Je(a) && (a = null);
    const r = tp(), o = /* @__PURE__ */ new WeakSet(), s = [];
    let u = !1;
    const h = r.app = {
      _uid: Um++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: pb,
      get config() {
        return r.config;
      },
      set config(d) {
      },
      use(d, ...m) {
        return o.has(d) || (d && Pe(d.install) ? (o.add(d), d.install(h, ...m)) : Pe(d) && (o.add(d), d(h, ...m))), h;
      },
      mixin(d) {
        return r.mixins.includes(d) || r.mixins.push(d), h;
      },
      component(d, m) {
        return m ? (r.components[d] = m, h) : r.components[d];
      },
      directive(d, m) {
        return m ? (r.directives[d] = m, h) : r.directives[d];
      },
      mount(d, m, C) {
        if (!u) {
          const E = h._ceVNode || Se(i, a);
          return E.appContext = r, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(E, d, C), u = !0, h._container = d, d.__vue_app__ = h, Nl(E.component);
        }
      },
      onUnmount(d) {
        s.push(d);
      },
      unmount() {
        u && (Sn(
          s,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(d, m) {
        return r.provides[d] = m, h;
      },
      runWithContext(d) {
        const m = Ba;
        Ba = h;
        try {
          return d();
        } finally {
          Ba = m;
        }
      }
    };
    return h;
  };
}
let Ba = null;
function np(e, t, n = Ge) {
  const i = ga(), a = Ut(t), r = hi(t), o = ip(e, a), s = em((u, h) => {
    let d, m = Ge, C;
    return hm(() => {
      const E = e[a];
      Ot(d, E) && (d = E, h());
    }), {
      get() {
        return u(), n.get ? n.get(d) : d;
      },
      set(E) {
        const x = n.set ? n.set(E) : E;
        if (!Ot(x, d) && !(m !== Ge && Ot(E, m)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (d = E, h()), i.emit(`update:${t}`, x), Ot(E, m) && (Ot(E, x) && !Ot(x, C) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && m !== Ge && !Ot(x, d)) && h(), m = E, C = x;
      }
    };
  });
  return s[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? o || Ge : s, done: !1 } : { done: !0 };
      }
    };
  }, s;
}
const ip = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ut(t)}Modifiers`] || e[`${hi(t)}Modifiers`];
function jm(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ge;
  let a = n;
  const r = t.startsWith("update:"), o = r && ip(i, t.slice(7));
  o && (o.trim && (a = n.map((d) => st(d) ? d.trim() : d)), o.number && (a = a.map(yl)));
  let s, u = i[s = Xl(t)] || // also try camelCase event handler (#2249)
  i[s = Xl(Ut(t))];
  !u && r && (u = i[s = Xl(hi(t))]), u && Sn(
    u,
    e,
    6,
    a
  );
  const h = i[s + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, Sn(
      h,
      e,
      6,
      a
    );
  }
}
const Hm = /* @__PURE__ */ new WeakMap();
function ap(e, t, n = !1) {
  const i = n ? Hm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, s = !1;
  if (!Pe(e)) {
    const u = (h) => {
      const d = ap(h, t, !0);
      d && (s = !0, _t(o, d));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !s ? (Je(e) && i.set(e, null), null) : (Te(r) ? r.forEach((u) => o[u] = null) : _t(o, r), Je(e) && i.set(e, o), o);
}
function xl(e, t) {
  return !e || !vl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, hi(t)) || Ze(e, t));
}
function Nd(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: s,
    emit: u,
    render: h,
    renderCache: d,
    props: m,
    data: C,
    setupState: E,
    ctx: x,
    inheritAttrs: A
  } = e, O = ms(e);
  let F, z;
  try {
    if (n.shapeFlag & 4) {
      const P = a || i, N = P;
      F = Bn(
        h.call(
          N,
          P,
          d,
          m,
          E,
          C,
          x
        )
      ), z = s;
    } else {
      const P = t;
      F = Bn(
        P.length > 1 ? P(
          m,
          { attrs: s, slots: o, emit: u }
        ) : P(
          m,
          null
        )
      ), z = t.props ? s : Vm(s);
    }
  } catch (P) {
    si.length = 0, Cl(P, e, 1), F = Se(xt);
  }
  let W = F;
  if (z && A !== !1) {
    const P = Object.keys(z), { shapeFlag: N } = W;
    P.length && N & 7 && (r && P.some(gl) && (z = Km(
      z,
      r
    )), W = $i(W, z, !1, !0));
  }
  if (n.dirs && (W = $i(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const P = Al(W.type) && bs(W) || W;
    eo(P, n.transition);
  }
  return F = W, ms(O), F;
}
const Vm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Km = (e, t) => {
  const n = {};
  for (const i in e)
    (!gl(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Gm(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: o, children: s, patchFlag: u } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return i ? Ld(i, o, h) : !!o;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let m = 0; m < d.length; m++) {
        const C = d[m];
        if (rp(o, i, C) && !xl(h, C))
          return !0;
      }
    }
  } else
    return (a || s) && (!s || !s.$stable) ? !0 : i === o ? !1 : i ? o ? Ld(i, o, h) : !0 : !!o;
  return !1;
}
function Ld(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (rp(t, e, r) && !xl(n, r))
      return !0;
  }
  return !1;
}
function rp(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Je(i) && Je(a) ? !Pi(i, a) : i !== a;
}
function Wm({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const op = {}, sp = () => Object.create(op), lp = (e) => Object.getPrototypeOf(e) === op;
function qm(e, t, n, i = !1) {
  const a = {}, r = sp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), cp(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Yg(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Ym(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, s = /* @__PURE__ */ Ye(a), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const d = e.vnode.dynamicProps;
      for (let m = 0; m < d.length; m++) {
        let C = d[m];
        if (xl(e.emitsOptions, C))
          continue;
        const E = t[C];
        if (u)
          if (Ze(r, C))
            E !== r[C] && (r[C] = E, h = !0);
          else {
            const x = Ut(C);
            a[x] = Vc(
              u,
              s,
              x,
              E,
              e,
              !1
            );
          }
        else
          E !== r[C] && (r[C] = E, h = !0);
      }
    }
  } else {
    cp(e, t, a, r) && (h = !0);
    let d;
    for (const m in s)
      (!t || // for camelCase
      !Ze(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = hi(m)) === m || !Ze(t, d))) && (u ? n && // for camelCase
      (n[m] !== void 0 || // for kebab-case
      n[d] !== void 0) && (a[m] = Vc(
        u,
        s,
        m,
        void 0,
        e,
        !0
      )) : delete a[m]);
    if (r !== s)
      for (const m in r)
        (!t || !Ze(t, m)) && (delete r[m], h = !0);
  }
  h && ni(e.attrs, "set", "");
}
function cp(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let o = !1, s;
  if (t)
    for (let u in t) {
      if (Pr(u))
        continue;
      const h = t[u];
      let d;
      a && Ze(a, d = Ut(u)) ? !r || !r.includes(d) ? n[d] = h : (s || (s = {}))[d] = h : xl(e.emitsOptions, u) || (!(u in i) || h !== i[u]) && (i[u] = h, o = !0);
    }
  if (r) {
    const u = /* @__PURE__ */ Ye(n), h = s || Ge;
    for (let d = 0; d < r.length; d++) {
      const m = r[d];
      n[m] = Vc(
        a,
        u,
        m,
        h[m],
        e,
        !Ze(h, m)
      );
    }
  }
  return o;
}
function Vc(e, t, n, i, a, r) {
  const o = e[n];
  if (o != null) {
    const s = Ze(o, "default");
    if (s && i === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Pe(u)) {
        const { propsDefaults: h } = a;
        if (n in h)
          i = h[n];
        else {
          const d = yo(a);
          i = h[n] = u.call(
            null,
            t
          ), d();
        }
      } else
        i = u;
      a.ce && a.ce._setProp(n, i);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !s ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === hi(n)) && (i = !0));
  }
  return i;
}
const Xm = /* @__PURE__ */ new WeakMap();
function up(e, t, n = !1) {
  const i = n ? Xm : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, s = [];
  let u = !1;
  if (!Pe(e)) {
    const d = (m) => {
      u = !0;
      const [C, E] = up(m, t, !0);
      _t(o, C), E && s.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !u)
    return Je(e) && i.set(e, Ma), Ma;
  if (Te(r))
    for (let d = 0; d < r.length; d++) {
      const m = Ut(r[d]);
      Rd(m) && (o[m] = Ge);
    }
  else if (r)
    for (const d in r) {
      const m = Ut(d);
      if (Rd(m)) {
        const C = r[d], E = o[m] = Te(C) || Pe(C) ? { type: C } : _t({}, C), x = E.type;
        let A = !1, O = !0;
        if (Te(x))
          for (let F = 0; F < x.length; ++F) {
            const z = x[F], W = Pe(z) && z.name;
            if (W === "Boolean") {
              A = !0;
              break;
            } else W === "String" && (O = !1);
          }
        else
          A = Pe(x) && x.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = A, E[
          1
          /* shouldCastTrue */
        ] = O, (A || Ze(E, "default")) && s.push(m);
      }
    }
  const h = [o, s];
  return Je(e) && i.set(e, h), h;
}
function Rd(e) {
  return e[0] !== "$" && !Pr(e);
}
const Au = (e) => e === "_" || e === "_ctx" || e === "$stable", ku = (e) => Te(e) ? e.map(Bn) : [Bn(e)], Zm = (e, t, n) => {
  if (t._n)
    return t;
  const i = Le((...a) => ku(t(...a)), n);
  return i._c = !1, i;
}, dp = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Au(a)) continue;
    const r = e[a];
    if (Pe(r))
      t[a] = Zm(a, r, i);
    else if (r != null) {
      const o = ku(r);
      t[a] = () => o;
    }
  }
}, fp = (e, t) => {
  const n = ku(t);
  e.slots.default = () => n;
}, hp = (e, t, n) => {
  for (const i in t)
    (n || !Au(i)) && (e[i] = t[i]);
}, Jm = (e, t, n) => {
  const i = e.slots = sp();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (hp(i, t, n), n && fh(i, "_", a, !0)) : dp(t, i);
  } else t && fp(e, t);
}, Qm = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, o = Ge;
  if (i.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? r = !1 : hp(a, t, n) : (r = !t.$stable, dp(t, a)), o = t;
  } else t && (fp(e, t), o = { default: 1 });
  if (r)
    for (const s in a)
      !Au(s) && o[s] == null && delete a[s];
}, Gt = ab;
function eb(e) {
  return tb(e);
}
function tb(e, t) {
  const n = _l();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: s,
    createComment: u,
    setText: h,
    setElementText: d,
    parentNode: m,
    nextSibling: C,
    setScopeId: E = _n,
    insertStaticContent: x
  } = e, A = (_, T, k, R = null, L = null, U = null, G = void 0, V = null, Z = !!T.dynamicChildren) => {
    if (_ === T)
      return;
    _ && !ra(_, T) && (R = mt(_), pe(_, L, U, !0), _ = null), T.patchFlag === -2 && (Z = !1, T.dynamicChildren = null);
    const { type: K, ref: he, shapeFlag: ae } = T;
    switch (K) {
      case bo:
        O(_, T, k, R);
        break;
      case xt:
        F(_, T, k, R);
        break;
      case us:
        _ == null && z(T, k, R, G);
        break;
      case le:
        Q(
          _,
          T,
          k,
          R,
          L,
          U,
          G,
          V,
          Z
        );
        break;
      default:
        ae & 1 ? N(
          _,
          T,
          k,
          R,
          L,
          U,
          G,
          V,
          Z
        ) : ae & 6 ? ie(
          _,
          T,
          k,
          R,
          L,
          U,
          G,
          V,
          Z
        ) : (ae & 64 || ae & 128) && K.process(
          _,
          T,
          k,
          R,
          L,
          U,
          G,
          V,
          Z,
          qt
        );
    }
    he != null && L ? Fr(he, _ && _.ref, U, T || _, !T) : he == null && _ && _.ref != null && Fr(_.ref, null, U, _, !0);
  }, O = (_, T, k, R) => {
    if (_ == null)
      i(
        T.el = s(T.children),
        k,
        R
      );
    else {
      const L = T.el = _.el;
      T.children !== _.children && h(L, T.children);
    }
  }, F = (_, T, k, R) => {
    _ == null ? i(
      T.el = u(T.children || ""),
      k,
      R
    ) : T.el = _.el;
  }, z = (_, T, k, R) => {
    [_.el, _.anchor] = x(
      _.children,
      T,
      k,
      R,
      _.el,
      _.anchor
    );
  }, W = ({ el: _, anchor: T }, k, R) => {
    let L;
    for (; _ && _ !== T; )
      L = C(_), i(_, k, R), _ = L;
    i(T, k, R);
  }, P = ({ el: _, anchor: T }) => {
    let k;
    for (; _ && _ !== T; )
      k = C(_), a(_), _ = k;
    a(T);
  }, N = (_, T, k, R, L, U, G, V, Z) => {
    if (T.type === "svg" ? G = "svg" : T.type === "math" && (G = "mathml"), _ == null)
      de(
        T,
        k,
        R,
        L,
        U,
        G,
        V,
        Z
      );
    else {
      const K = _.el && _.el._isVueCE ? _.el : null;
      try {
        K && K._beginPatch(), Y(
          _,
          T,
          L,
          U,
          G,
          V,
          Z
        );
      } finally {
        K && K._endPatch();
      }
    }
  }, de = (_, T, k, R, L, U, G, V) => {
    let Z, K;
    const { props: he, shapeFlag: ae, transition: me, dirs: Ce } = _;
    if (Z = _.el = o(
      _.type,
      U,
      he && he.is,
      he
    ), ae & 8 ? d(Z, _.children) : ae & 16 && fe(
      _.children,
      Z,
      null,
      R,
      L,
      ic(_, U),
      G,
      V
    ), Ce && Xi(_, null, R, "created"), J(Z, _, _.scopeId, G, R), he) {
      for (const Me in he)
        Me !== "value" && !Pr(Me) && r(Z, Me, null, he[Me], U, R);
      "value" in he && r(Z, "value", null, he.value, U), (K = he.onVnodeBeforeMount) && Dn(K, R, _);
    }
    Ce && Xi(_, null, R, "beforeMount");
    const Ie = nb(L, me);
    Ie && me.beforeEnter(Z), i(Z, T, k), ((K = he && he.onVnodeMounted) || Ie || Ce) && Gt(() => {
      K && Dn(K, R, _), Ie && me.enter(Z), Ce && Xi(_, null, R, "mounted");
    }, L);
  }, J = (_, T, k, R, L) => {
    if (k && E(_, k), R)
      for (let U = 0; U < R.length; U++)
        E(_, R[U]);
    if (L) {
      let U = L.subTree;
      if (T === U || gp(U.type) && (U.ssContent === T || U.ssFallback === T)) {
        const G = L.vnode;
        J(
          _,
          G,
          G.scopeId,
          G.slotScopeIds,
          L.parent
        );
      }
    }
  }, fe = (_, T, k, R, L, U, G, V, Z = 0) => {
    for (let K = Z; K < _.length; K++) {
      const he = _[K] = V ? ti(_[K]) : Bn(_[K]);
      A(
        null,
        he,
        T,
        k,
        R,
        L,
        U,
        G,
        V
      );
    }
  }, Y = (_, T, k, R, L, U, G) => {
    const V = T.el = _.el;
    let { patchFlag: Z, dynamicChildren: K, dirs: he } = T;
    Z |= _.patchFlag & 16;
    const ae = _.props || Ge, me = T.props || Ge;
    let Ce;
    if (k && Zi(k, !1), (Ce = me.onVnodeBeforeUpdate) && Dn(Ce, k, T, _), he && Xi(T, _, k, "beforeUpdate"), k && Zi(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    K && (!_.dynamicChildren || _.dynamicChildren.length !== K.length) && (Z = 0, G = !1, K = null), (ae.innerHTML && me.innerHTML == null || ae.textContent && me.textContent == null) && d(V, ""), K ? se(
      _.dynamicChildren,
      K,
      V,
      k,
      R,
      ic(T, L),
      U
    ) : G || ne(
      _,
      T,
      V,
      null,
      k,
      R,
      ic(T, L),
      U,
      !1
    ), Z > 0) {
      if (Z & 16)
        ye(V, ae, me, k, L);
      else if (Z & 2 && ae.class !== me.class && r(V, "class", null, me.class, L), Z & 4 && r(V, "style", ae.style, me.style, L), Z & 8) {
        const Ie = T.dynamicProps;
        for (let Me = 0; Me < Ie.length; Me++) {
          const ze = Ie[Me], it = ae[ze], lt = me[ze];
          (lt !== it || ze === "value") && r(V, ze, it, lt, L, k);
        }
      }
      Z & 1 && _.children !== T.children && d(V, T.children);
    } else !G && K == null && ye(V, ae, me, k, L);
    ((Ce = me.onVnodeUpdated) || he) && Gt(() => {
      Ce && Dn(Ce, k, T, _), he && Xi(T, _, k, "updated");
    }, R);
  }, se = (_, T, k, R, L, U, G) => {
    for (let V = 0; V < T.length; V++) {
      const Z = _[V], K = T[V], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ra(Z, K) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? m(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        Z,
        K,
        he,
        null,
        R,
        L,
        U,
        G,
        !0
      );
    }
  }, ye = (_, T, k, R, L) => {
    if (T !== k) {
      if (T !== Ge)
        for (const U in T)
          !Pr(U) && !(U in k) && r(
            _,
            U,
            T[U],
            null,
            L,
            R
          );
      for (const U in k) {
        if (Pr(U)) continue;
        const G = k[U], V = T[U];
        G !== V && U !== "value" && r(_, U, V, G, L, R);
      }
      "value" in k && r(_, "value", T.value, k.value, L);
    }
  }, Q = (_, T, k, R, L, U, G, V, Z) => {
    const K = T.el = _ ? _.el : s(""), he = T.anchor = _ ? _.anchor : s("");
    let { patchFlag: ae, dynamicChildren: me, slotScopeIds: Ce } = T;
    Ce && (V = V ? V.concat(Ce) : Ce), _ == null ? (i(K, k, R), i(he, k, R), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      k,
      he,
      L,
      U,
      G,
      V,
      Z
    )) : ae > 0 && ae & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren && _.dynamicChildren.length === me.length ? (se(
      _.dynamicChildren,
      me,
      k,
      L,
      U,
      G,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (T.key != null || L && T === L.subTree) && Ou(
      _,
      T,
      !0
      /* shallow */
    )) : ne(
      _,
      T,
      k,
      he,
      L,
      U,
      G,
      V,
      Z
    );
  }, ie = (_, T, k, R, L, U, G, V, Z) => {
    T.slotScopeIds = V, _ == null ? T.shapeFlag & 512 ? L.ctx.activate(
      T,
      k,
      R,
      G,
      Z
    ) : $(
      T,
      k,
      R,
      L,
      U,
      G,
      Z
    ) : M(_, T, Z);
  }, $ = (_, T, k, R, L, U, G) => {
    const V = _.component = lb(
      _,
      R,
      L
    );
    if (kl(_) && (V.ctx.renderer = qt), cb(V, !1, G), V.asyncDep) {
      if (L && L.registerDep(V, X, G), !_.el) {
        const Z = V.subTree = Se(xt);
        F(null, Z, T, k), _.placeholder = Z.el;
      }
    } else
      X(
        V,
        _,
        T,
        k,
        L,
        U,
        G
      );
  }, M = (_, T, k) => {
    const R = T.component = _.component;
    if (Gm(_, T, k))
      if (R.asyncDep && !R.asyncResolved) {
        oe(R, T, k);
        return;
      } else
        R.next = T, R.update();
    else
      T.el = _.el, R.vnode = T;
  }, X = (_, T, k, R, L, U, G) => {
    const V = () => {
      if (_.isMounted) {
        let { next: ae, bu: me, u: Ce, parent: Ie, vnode: Me } = _;
        {
          const bt = pp(_);
          if (bt) {
            ae && (ae.el = Me.el, oe(_, ae, G)), bt.asyncDep.then(() => {
              Gt(() => {
                _.isUnmounted || K();
              }, L);
            });
            return;
          }
        }
        let ze = ae, it;
        Zi(_, !1), ae ? (ae.el = Me.el, oe(_, ae, G)) : ae = Me, me && cs(me), (it = ae.props && ae.props.onVnodeBeforeUpdate) && Dn(it, Ie, ae, Me), Zi(_, !0);
        const lt = Nd(_), ht = _.subTree;
        _.subTree = lt, A(
          ht,
          lt,
          // parent may have changed if it's in a teleport
          m(ht.el),
          // anchor may have changed if it's in a fragment
          mt(ht),
          _,
          L,
          U
        ), ae.el = lt.el, ze === null && Wm(_, lt.el), Ce && Gt(Ce, L), (it = ae.props && ae.props.onVnodeUpdated) && Gt(
          () => Dn(it, Ie, ae, Me),
          L
        );
      } else {
        let ae;
        const { el: me, props: Ce } = T, { bm: Ie, m: Me, parent: ze, root: it, type: lt } = _, ht = Ua(T);
        Zi(_, !1), Ie && cs(Ie), !ht && (ae = Ce && Ce.onVnodeBeforeMount) && Dn(ae, ze, T), Zi(_, !0);
        {
          it.ce && it.ce._hasShadowRoot() && it.ce._injectChildStyle(
            lt,
            _.parent ? _.parent.type : void 0
          );
          const bt = _.subTree = Nd(_);
          A(
            null,
            bt,
            k,
            R,
            _,
            L,
            U
          ), T.el = bt.el;
        }
        if (Me && Gt(Me, L), !ht && (ae = Ce && Ce.onVnodeMounted)) {
          const bt = T;
          Gt(
            () => Dn(ae, ze, bt),
            L
          );
        }
        (T.shapeFlag & 256 || ze && Ua(ze.vnode) && ze.vnode.shapeFlag & 256) && _.a && Gt(_.a, L), _.isMounted = !0, T = k = R = null;
      }
    };
    _.scope.on();
    const Z = _.effect = new gh(V);
    _.scope.off();
    const K = _.update = Z.run.bind(Z), he = _.job = Z.runIfDirty.bind(Z);
    he.i = _, he.id = _.uid, Z.scheduler = () => Su(he), Zi(_, !0), K();
  }, oe = (_, T, k) => {
    T.component = _;
    const R = _.vnode.props;
    _.vnode = T, _.next = null, Ym(_, T.props, R, k), Qm(_, T.children, k), ci(), _d(_), ui();
  }, ne = (_, T, k, R, L, U, G, V, Z = !1) => {
    const K = _ && _.children, he = _ ? _.shapeFlag : 0, ae = T.children, { patchFlag: me, shapeFlag: Ce } = T;
    if (me > 0) {
      if (me & 128) {
        ge(
          K,
          ae,
          k,
          R,
          L,
          U,
          G,
          V,
          Z
        );
        return;
      } else if (me & 256) {
        ve(
          K,
          ae,
          k,
          R,
          L,
          U,
          G,
          V,
          Z
        );
        return;
      }
    }
    Ce & 8 ? (he & 16 && dt(K, L, U), ae !== K && d(k, ae)) : he & 16 ? Ce & 16 ? ge(
      K,
      ae,
      k,
      R,
      L,
      U,
      G,
      V,
      Z
    ) : dt(K, L, U, !0) : (he & 8 && d(k, ""), Ce & 16 && fe(
      ae,
      k,
      R,
      L,
      U,
      G,
      V,
      Z
    ));
  }, ve = (_, T, k, R, L, U, G, V, Z) => {
    _ = _ || Ma, T = T || Ma;
    const K = _.length, he = T.length, ae = Math.min(K, he);
    let me;
    for (me = 0; me < ae; me++) {
      const Ce = T[me] = Z ? ti(T[me]) : Bn(T[me]);
      A(
        _[me],
        Ce,
        k,
        null,
        L,
        U,
        G,
        V,
        Z
      );
    }
    K > he ? dt(
      _,
      L,
      U,
      !0,
      !1,
      ae
    ) : fe(
      T,
      k,
      R,
      L,
      U,
      G,
      V,
      Z,
      ae
    );
  }, ge = (_, T, k, R, L, U, G, V, Z) => {
    let K = 0;
    const he = T.length;
    let ae = _.length - 1, me = he - 1;
    for (; K <= ae && K <= me; ) {
      const Ce = _[K], Ie = T[K] = Z ? ti(T[K]) : Bn(T[K]);
      if (ra(Ce, Ie))
        A(
          Ce,
          Ie,
          k,
          null,
          L,
          U,
          G,
          V,
          Z
        );
      else
        break;
      K++;
    }
    for (; K <= ae && K <= me; ) {
      const Ce = _[ae], Ie = T[me] = Z ? ti(T[me]) : Bn(T[me]);
      if (ra(Ce, Ie))
        A(
          Ce,
          Ie,
          k,
          null,
          L,
          U,
          G,
          V,
          Z
        );
      else
        break;
      ae--, me--;
    }
    if (K > ae) {
      if (K <= me) {
        const Ce = me + 1, Ie = Ce < he ? T[Ce].el : R;
        for (; K <= me; )
          A(
            null,
            T[K] = Z ? ti(T[K]) : Bn(T[K]),
            k,
            Ie,
            L,
            U,
            G,
            V,
            Z
          ), K++;
      }
    } else if (K > me)
      for (; K <= ae; )
        pe(_[K], L, U, !0), K++;
    else {
      const Ce = K, Ie = K, Me = /* @__PURE__ */ new Map();
      for (K = Ie; K <= me; K++) {
        const We = T[K] = Z ? ti(T[K]) : Bn(T[K]);
        We.key != null && Me.set(We.key, K);
      }
      let ze, it = 0;
      const lt = me - Ie + 1;
      let ht = !1, bt = 0;
      const Ct = new Array(lt);
      for (K = 0; K < lt; K++) Ct[K] = 0;
      for (K = Ce; K <= ae; K++) {
        const We = _[K];
        if (it >= lt) {
          pe(We, L, U, !0);
          continue;
        }
        let Ht;
        if (We.key != null)
          Ht = Me.get(We.key);
        else
          for (ze = Ie; ze <= me; ze++)
            if (Ct[ze - Ie] === 0 && ra(We, T[ze])) {
              Ht = ze;
              break;
            }
        Ht === void 0 ? pe(We, L, U, !0) : (Ct[Ht - Ie] = K + 1, Ht >= bt ? bt = Ht : ht = !0, A(
          We,
          T[Ht],
          k,
          null,
          L,
          U,
          G,
          V,
          Z
        ), it++);
      }
      const Qt = ht ? ib(Ct) : Ma;
      for (ze = Qt.length - 1, K = lt - 1; K >= 0; K--) {
        const We = Ie + K, Ht = T[We], vi = T[We + 1], Ui = We + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          vi.el || vp(vi)
        ) : R;
        Ct[K] === 0 ? A(
          null,
          Ht,
          k,
          Ui,
          L,
          U,
          G,
          V,
          Z
        ) : ht && (ze < 0 || K !== Qt[ze] ? _e(Ht, k, Ui, 2) : ze--);
      }
    }
  }, _e = (_, T, k, R, L = null) => {
    const { el: U, type: G, transition: V, children: Z, shapeFlag: K } = _;
    if (K & 6) {
      _e(_.component.subTree, T, k, R);
      return;
    }
    if (K & 128) {
      _.suspense.move(T, k, R);
      return;
    }
    if (K & 64) {
      G.move(_, T, k, qt);
      return;
    }
    if (G === le) {
      i(U, T, k);
      for (let ae = 0; ae < Z.length; ae++)
        _e(Z[ae], T, k, R);
      i(_.anchor, T, k);
      return;
    }
    if (G === us) {
      W(_, T, k);
      return;
    }
    if (R !== 2 && K & 1 && V)
      if (R === 0)
        V.persisted && !U[bn] ? i(U, T, k) : (V.beforeEnter(U), i(U, T, k), Gt(() => V.enter(U), L));
      else {
        const { leave: ae, delayLeave: me, afterLeave: Ce } = V, Ie = () => {
          _.ctx.isUnmounted ? a(U) : i(U, T, k);
        }, Me = () => {
          const ze = U._isLeaving || !!U[bn];
          U._isLeaving && U[bn](
            !0
            /* cancelled */
          ), V.persisted && !ze ? Ie() : ae(U, () => {
            Ie(), Ce && Ce();
          });
        };
        me ? me(U, Ie, Me) : Me();
      }
    else
      i(U, T, k);
  }, pe = (_, T, k, R = !1, L = !1) => {
    const {
      type: U,
      props: G,
      ref: V,
      children: Z,
      dynamicChildren: K,
      shapeFlag: he,
      patchFlag: ae,
      dirs: me,
      cacheIndex: Ce,
      memo: Ie
    } = _;
    if (ae === -2 && (L = !1), V != null && (ci(), Fr(V, null, k, _, !0), ui()), Ce != null && (T.renderCache[Ce] = void 0), he & 256) {
      T.ctx.deactivate(_);
      return;
    }
    const Me = he & 1 && me, ze = !Ua(_);
    let it;
    if (ze && (it = G && G.onVnodeBeforeUnmount) && Dn(it, T, _), he & 6)
      ut(_.component, k, R);
    else {
      if (he & 128) {
        _.suspense.unmount(k, R);
        return;
      }
      Me && Xi(_, null, T, "beforeUnmount"), he & 64 ? _.type.remove(
        _,
        T,
        k,
        qt,
        R
      ) : K && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !K.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== le || ae > 0 && ae & 64) ? dt(
        K,
        T,
        k,
        !1,
        !0
      ) : (U === le && ae & 384 || !L && he & 16) && dt(Z, T, k), R && qe(_);
    }
    const lt = Ie != null && Ce == null;
    (ze && (it = G && G.onVnodeUnmounted) || Me || lt) && Gt(() => {
      it && Dn(it, T, _), Me && Xi(_, null, T, "unmounted"), lt && (_.el = null);
    }, k);
  }, qe = (_) => {
    const { type: T, el: k, anchor: R, transition: L } = _;
    if (T === le) {
      Ee(k, R);
      return;
    }
    if (T === us) {
      P(_);
      return;
    }
    const U = () => {
      a(k), L && !L.persisted && L.afterLeave && L.afterLeave();
    };
    if (_.shapeFlag & 1 && L && !L.persisted) {
      const { leave: G, delayLeave: V } = L, Z = () => G(k, U);
      V ? V(_.el, U, Z) : Z();
    } else
      U();
  }, Ee = (_, T) => {
    let k;
    for (; _ !== T; )
      k = C(_), a(_), _ = k;
    a(T);
  }, ut = (_, T, k) => {
    const { bum: R, scope: L, job: U, subTree: G, um: V, m: Z, a: K } = _;
    Id(Z), Id(K), R && cs(R), L.stop(), U && (U.flags |= 8, pe(G, _, T, k)), V && Gt(V, T), Gt(() => {
      _.isUnmounted = !0;
    }, T);
  }, dt = (_, T, k, R = !1, L = !1, U = 0) => {
    for (let G = U; G < _.length; G++)
      pe(_[G], T, k, R, L);
  }, mt = (_) => {
    if (_.shapeFlag & 6)
      return mt(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const T = C(_.anchor || _.el), k = T && T[zh];
    return k ? C(k) : T;
  };
  let ft = !1;
  const Ve = (_, T, k) => {
    let R;
    _ == null ? T._vnode && (pe(T._vnode, null, null, !0), R = T._vnode.component) : A(
      T._vnode || null,
      _,
      T,
      null,
      null,
      null,
      k
    ), T._vnode = _, ft || (ft = !0, _d(R), Dh(), ft = !1);
  }, qt = {
    p: A,
    um: pe,
    m: _e,
    r: qe,
    mt: $,
    mc: fe,
    pc: ne,
    pbc: se,
    n: mt,
    o: e
  };
  return {
    render: Ve,
    hydrate: void 0,
    createApp: Bm(Ve)
  };
}
function ic({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Zi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function nb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ou(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Te(i) && Te(a))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let s = a[r];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = a[r] = ti(a[r]), s.el = o.el), !n && s.patchFlag !== -2 && Ou(o, s)), s.type === bo && (s.patchFlag === -1 && (s = a[r] = ti(s)), s.el = o.el), s.type === xt && !s.el && (s.el = o.el);
    }
}
function ib(e) {
  const t = e.slice(), n = [0];
  let i, a, r, o, s;
  const u = e.length;
  for (i = 0; i < u; i++) {
    const h = e[i];
    if (h !== 0) {
      if (a = n[n.length - 1], e[a] < h) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        s = r + o >> 1, e[n[s]] < h ? r = s + 1 : o = s;
      h < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function pp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : pp(t);
}
function Id(e) {
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
function ab(e, t) {
  t && t.pendingBranch ? Te(e) ? t.effects.push(...e) : t.effects.push(e) : $h(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), bo = /* @__PURE__ */ Symbol.for("v-txt"), xt = /* @__PURE__ */ Symbol.for("v-cmt"), us = /* @__PURE__ */ Symbol.for("v-stc"), si = [];
let sn = null;
function y(e = !1) {
  si.push(sn = e ? null : []);
}
function xu() {
  si.pop(), sn = si[si.length - 1] || null;
}
let to = 1;
function Ss(e, t = !1) {
  to += e, e < 0 && sn && t && (sn.hasOnce = !0);
}
function mp(e) {
  return e.dynamicChildren = to > 0 ? sn || Ma : null, xu(), to > 0 && sn && sn.push(e), e;
}
function w(e, t, n, i, a, r) {
  return mp(
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
function Be(e, t, n, i, a) {
  return mp(
    Se(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function no(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ra(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bp = ({ key: e }) => e ?? null, ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? st(e) || /* @__PURE__ */ Bt(e) || Pe(e) ? { i: Nt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === le ? 0 : 1, o = !1, s = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bp(t),
    ref: t && ds(t),
    scopeId: Tl,
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
  return s ? (Cs(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= st(n) ? 8 : 16), to > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  sn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && sn.push(u), u;
}
const Se = rb;
function rb(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Xh) && (e = xt), no(e)) {
    const s = $i(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Cs(s, n), to > 0 && !r && sn && (s.shapeFlag & 6 ? sn[sn.indexOf(e)] = s : sn.push(s)), s.patchFlag = -2, s;
  }
  if (hb(e) && (e = e.__vccOpts), t) {
    t = io(t);
    let { class: s, style: u } = t;
    s && !st(s) && (t.class = Ae(s)), Je(u) && (/* @__PURE__ */ wu(u) && !Te(u) && (u = _t({}, u)), t.style = ln(u));
  }
  const o = st(e) ? 1 : gp(e) ? 128 : Al(e) ? 64 : Je(e) ? 4 : Pe(e) ? 2 : 0;
  return c(
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
function io(e) {
  return e ? /* @__PURE__ */ wu(e) || lp(e) ? _t({}, e) : e : null;
}
function $i(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: o, children: s, transition: u } = e, h = t ? jt(a || {}, t) : a, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && bp(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Te(r) ? r.concat(ds(t)) : [r, ds(t)] : ds(t)
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
    patchFlag: t && e.type !== le ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && $i(e.ssContent),
    ssFallback: e.ssFallback && $i(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && i && eo(
    d,
    u.clone(d)
  ), d;
}
function we(e = " ", t = 0) {
  return Se(bo, null, e, t);
}
function B(e = "", t = !1) {
  return t ? (y(), Be(xt, null, e)) : Se(xt, null, e);
}
function Bn(e) {
  return e == null || typeof e == "boolean" ? Se(xt) : Te(e) ? Se(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : no(e) ? ti(e) : Se(bo, null, String(e));
}
function ti(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : $i(e);
}
function Cs(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Te(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Cs(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !lp(t) ? t._ctx = Nt : a === 3 && Nt && (Nt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Pe(t)) {
    if (i & 65) {
      Cs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Nt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [we(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function jt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ae([t.class, i.class]));
      else if (a === "style")
        t.style = ln([t.style, i.style]);
      else if (vl(a)) {
        const r = t[a], o = i[a];
        o && r !== o && !(Te(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !gl(a) && (t[a] = o);
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
const ob = tp();
let sb = 0;
function lb(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || ob, r = {
    uid: sb++,
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
    scope: new Ng(
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
    propsOptions: up(i, a),
    emitsOptions: ap(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ge,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ge,
    data: Ge,
    props: Ge,
    attrs: Ge,
    slots: Ge,
    refs: Ge,
    setupState: Ge,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = jm.bind(null, r), e.ce && e.ce(r), r;
}
let zt = null;
const ga = () => zt || Nt;
let Ts, ao;
{
  const e = _l(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  Ts = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => zt = n
  ), ao = t(
    "__VUE_SSR_SETTERS__",
    (n) => ro = n
  );
}
const yo = (e) => {
  const t = zt;
  return Ts(e), e.scope.on(), () => {
    e.scope.off(), Ts(t);
  };
}, Pd = () => {
  zt && zt.scope.off(), Ts(null);
};
function yp(e) {
  return e.vnode.shapeFlag & 4;
}
let ro = !1;
function cb(e, t = !1, n = !1) {
  t && ao(t);
  const { props: i, children: a } = e.vnode, r = yp(e);
  qm(e, i, r, t), Jm(e, a, n || t);
  const o = r ? ub(e, t) : void 0;
  return t && ao(!1), o;
}
function ub(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Lm);
  const { setup: i } = n;
  if (i) {
    ci();
    const a = e.setupContext = i.length > 1 ? wp(e) : null, r = yo(e), o = go(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), s = ch(o);
    if (ui(), r(), (s || e.sp) && !Ua(e) && Gh(e), s) {
      if (o.then(Pd, Pd), t)
        return o.then((u) => {
          ao(!0);
          try {
            $d(e, u, t);
          } finally {
            ao(!1);
          }
        }).catch((u) => {
          Cl(u, e, 0);
        });
      e.asyncDep = o;
    } else
      $d(e, o);
  } else
    _p(e);
}
function $d(e, t, n) {
  Pe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = Rh(t)), _p(e);
}
function _p(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || _n);
  {
    const a = yo(e);
    ci();
    try {
      $m(e);
    } finally {
      ui(), a();
    }
  }
}
const db = {
  get(e, t) {
    return Ft(e, "get", ""), e[t];
  }
};
function wp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, db),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Nl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Rh(Xg(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Mr)
        return Mr[n](e);
    },
    has(t, n) {
      return n in t || n in Mr;
    }
  })) : e.proxy;
}
function fb(e, t = !0) {
  return Pe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function hb(e) {
  return Pe(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ nm(e, t, ro);
function Xt(e, t, n) {
  try {
    Ss(-1);
    const i = arguments.length;
    return i === 2 ? Je(t) && !Te(t) ? no(t) ? Se(e, null, [t]) : Se(e, t) : Se(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && no(n) && (n = [n]), Se(e, t, n));
  } finally {
    Ss(1);
  }
}
const pb = "3.5.42", vb = _n;
let Kc;
const Dd = typeof window < "u" && window.trustedTypes;
if (Dd)
  try {
    Kc = /* @__PURE__ */ Dd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Sp = Kc ? (e) => Kc.createHTML(e) : (e) => e, gb = "http://www.w3.org/2000/svg", mb = "http://www.w3.org/1998/Math/MathML", ei = typeof document < "u" ? document : null, Fd = ei && /* @__PURE__ */ ei.createElement("template"), bb = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ei.createElementNS(gb, e) : t === "mathml" ? ei.createElementNS(mb, e) : n ? ei.createElement(e, { is: n }) : ei.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ei.createTextNode(e),
  createComment: (e) => ei.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ei.querySelector(e),
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
      Fd.innerHTML = Sp(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Fd.content;
      if (i === "svg" || i === "mathml") {
        const u = s.firstChild;
        for (; u.firstChild; )
          s.appendChild(u.firstChild);
        s.removeChild(u);
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
}, Si = "transition", _r = "animation", oo = /* @__PURE__ */ Symbol("_vtc"), Cp = {
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
}, yb = /* @__PURE__ */ _t(
  {},
  Bh,
  Cp
), _b = (e) => (e.displayName = "Transition", e.props = yb, e), wb = /* @__PURE__ */ _b(
  (e, { slots: t }) => Xt(_m, Sb(e), t)
), Ji = (e, t = []) => {
  Te(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Md = (e) => e ? Te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Sb(e) {
  const t = {};
  for (const Q in e)
    Q in Cp || (t[Q] = e[Q]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: a,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: s = `${n}-enter-to`,
    appearFromClass: u = r,
    appearActiveClass: h = o,
    appearToClass: d = s,
    leaveFromClass: m = `${n}-leave-from`,
    leaveActiveClass: C = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, x = Cb(a), A = x && x[0], O = x && x[1], {
    onBeforeEnter: F,
    onEnter: z,
    onEnterCancelled: W,
    onLeave: P,
    onLeaveCancelled: N,
    onBeforeAppear: de = F,
    onAppear: J = z,
    onAppearCancelled: fe = W
  } = t, Y = (Q, ie, $, M) => {
    Q._enterCancelled = M, Qi(Q, ie ? d : s), Qi(Q, ie ? h : o), $ && $();
  }, se = (Q, ie) => {
    Q._isLeaving = !1, Qi(Q, m), Qi(Q, E), Qi(Q, C), ie && ie();
  }, ye = (Q) => (ie, $) => {
    const M = Q ? J : z, X = () => Y(ie, Q, $);
    Ji(M, [ie, X]), zd(() => {
      Qi(ie, Q ? u : r), Xn(ie, Q ? d : s), Md(M) || Ud(ie, i, A, X);
    });
  };
  return _t(t, {
    onBeforeEnter(Q) {
      Ji(F, [Q]), Xn(Q, r), Xn(Q, o);
    },
    onBeforeAppear(Q) {
      Ji(de, [Q]), Xn(Q, u), Xn(Q, h);
    },
    onEnter: ye(!1),
    onAppear: ye(!0),
    onLeave(Q, ie) {
      Q._isLeaving = !0;
      const $ = () => se(Q, ie);
      Xn(Q, m), Q._enterCancelled ? (Xn(Q, C), Hd(Q)) : (Hd(Q), Xn(Q, C)), zd(() => {
        Q._isLeaving && (Qi(Q, m), Xn(Q, E), Md(P) || Ud(Q, i, O, $));
      }), Ji(P, [Q, $]);
    },
    onEnterCancelled(Q) {
      Y(Q, !1, void 0, !0), Ji(W, [Q]);
    },
    onAppearCancelled(Q) {
      Y(Q, !0, void 0, !0), Ji(fe, [Q]);
    },
    onLeaveCancelled(Q) {
      se(Q), Ji(N, [Q]);
    }
  });
}
function Cb(e) {
  if (e == null)
    return null;
  if (Je(e))
    return [ac(e.enter), ac(e.leave)];
  {
    const t = ac(e);
    return [t, t];
  }
}
function ac(e) {
  return _g(e);
}
function Xn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[oo] || (e[oo] = /* @__PURE__ */ new Set())).add(t);
}
function Qi(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[oo];
  n && (n.delete(t), n.size || (e[oo] = void 0));
}
function zd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Tb = 0;
function Ud(e, t, n, i) {
  const a = e._endId = ++Tb, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: s, propCount: u } = Eb(e, t);
  if (!o)
    return i();
  const h = o + "end";
  let d = 0;
  const m = () => {
    e.removeEventListener(h, C), r();
  }, C = (E) => {
    E.target === e && ++d >= u && m();
  };
  setTimeout(() => {
    d < u && m();
  }, s + 1), e.addEventListener(h, C);
}
function Eb(e, t) {
  const n = window.getComputedStyle(e), i = (x) => (n[x] || "").split(", "), a = i(`${Si}Delay`), r = i(`${Si}Duration`), o = Bd(a, r), s = i(`${_r}Delay`), u = i(`${_r}Duration`), h = Bd(s, u);
  let d = null, m = 0, C = 0;
  t === Si ? o > 0 && (d = Si, m = o, C = r.length) : t === _r ? h > 0 && (d = _r, m = h, C = u.length) : (m = Math.max(o, h), d = m > 0 ? o > h ? Si : _r : null, C = d ? d === Si ? r.length : u.length : 0);
  const E = d === Si && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Si}Property`).toString()
  );
  return {
    type: d,
    timeout: m,
    propCount: C,
    hasTransform: E
  };
}
function Bd(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => jd(n) + jd(e[i])));
}
function jd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Hd(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ab(e, t, n) {
  const i = e[oo];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Es = /* @__PURE__ */ Symbol("_vod"), Tp = /* @__PURE__ */ Symbol("_vsh"), ja = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Es] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : wr(e, t);
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
  e.style.display = t ? e[Es] : "none", e[Tp] = !t;
}
const Ep = /* @__PURE__ */ Symbol("");
function kb(e) {
  const t = ga();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => As(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? As(t.ce, a) : Gc(t.subTree, a), n(a);
  };
  Yh(() => {
    $h(i);
  }), Fi(() => {
    nt(i, _n, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), mo(() => a.disconnect());
  });
}
function Gc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Gc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    As(e.el, t);
  else if (e.type === le)
    e.children.forEach((n) => Gc(n, t));
  else if (e.type === us) {
    let { el: n, anchor: i } = e;
    for (; n && (As(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function As(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = xg(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Ep] = i;
  }
}
const Ob = /(?:^|;)\s*display\s*:/;
function xb(e, t, n) {
  const i = e.style, a = st(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (st(t))
        for (const o of t.split(";")) {
          const s = o.slice(0, o.indexOf(":")).trim();
          n[s] == null && Nr(i, s, "");
        }
      else
        for (const o in t)
          n[o] == null && Nr(i, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const s = n[o];
      s != null ? Lb(
        e,
        o,
        !st(t) && t ? t[o] : void 0,
        s
      ) || Nr(i, o, s) : Nr(i, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = i[Ep];
      o && (n += ";" + o), i.cssText = n, r = Ob.test(n);
    }
  } else t && e.removeAttribute("style");
  Es in e && (e[Es] = r ? i.display : "", e[Tp] && (i.display = "none"));
}
const Qo = /\s*!important$/;
function Nr(e, t, n) {
  if (Te(n))
    n.forEach((i) => Nr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Qo.test(n) ? e.setProperty(t, n.replace(Qo, ""), "important") : e.setProperty(t, n);
  else {
    const i = Nb(e, t);
    Qo.test(n) ? e.setProperty(
      hi(i),
      n.replace(Qo, ""),
      "important"
    ) : e[i] = n;
  }
}
const Vd = ["Webkit", "Moz", "ms"], rc = {};
function Nb(e, t) {
  const n = rc[t];
  if (n)
    return n;
  let i = Ut(t);
  if (i !== "filter" && i in e)
    return rc[t] = i;
  i = bl(i);
  for (let a = 0; a < Vd.length; a++) {
    const r = Vd[a] + i;
    if (r in e)
      return rc[t] = r;
  }
  return t;
}
function Lb(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && st(i) && n === i;
}
const Kd = "http://www.w3.org/1999/xlink";
function Gd(e, t, n, i, a, r = Ag(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Kd, t.slice(6, t.length)) : e.setAttributeNS(Kd, t, n) : n == null || r && !hh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Nn(n) ? String(n) : n
  );
}
function Wd(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Sp(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const s = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = hh(n) : n == null && s === "string" ? (n = "", o = !0) : s === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function oa(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Rb(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const qd = /* @__PURE__ */ Symbol("_vei");
function Ib(e, t, n, i, a = null) {
  const r = e[qd] || (e[qd] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [s, u] = Db(t);
    if (i) {
      const h = r[t] = zb(
        i,
        a
      );
      oa(e, s, h, u);
    } else o && (Rb(e, s, o, u), r[t] = void 0);
  }
}
const Pb = /(Once|Passive|Capture)$/, $b = /^on:?(?:Once|Passive|Capture)$/;
function Db(e) {
  let t, n;
  for (; (n = e.match(Pb)) && !$b.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : hi(e.slice(2)), t];
}
let oc = 0;
const Fb = /* @__PURE__ */ Promise.resolve(), Mb = () => oc || (Fb.then(() => oc = 0), oc = Date.now());
function zb(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (Te(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const o = a.slice(), s = [i];
      for (let u = 0; u < o.length && !i._stopped; u++) {
        const h = o[u];
        h && Sn(
          h,
          t,
          5,
          s
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
  return n.value = e, n.attached = Mb(), n;
}
const Yd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ub = (e, t, n, i, a, r) => {
  const o = a === "svg";
  t === "class" ? Ab(e, i, o) : t === "style" ? xb(e, n, i) : vl(t) ? gl(t) || Ib(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Bb(e, t, i, o)) ? (Wd(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gd(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (jb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !st(i))) ? Wd(e, Ut(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Gd(e, t, i, o));
};
function Bb(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Yd(t) && Pe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Yd(t) && st(n) ? !1 : t in e;
}
function jb(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ut(t);
  return Array.isArray(n) ? n.some((a) => Ut(a) === i) : Object.keys(n).some((a) => Ut(a) === i);
}
const ks = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Te(t) ? (n) => cs(t, n) : t;
};
function Hb(e) {
  e.target.composing = !0;
}
function Xd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const la = /* @__PURE__ */ Symbol("_assign"), es = /* @__PURE__ */ Symbol("_initialValue");
function sc(e, t, n) {
  return t && (e = e.trim()), n && (e = yl(e)), e;
}
const gt = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[es] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[es] = e.defaultValue.replace(/\r\n?/g, `
`))), e[la] = ks(a);
    const r = i || a.props && a.props.type === "number";
    oa(e, t ? "change" : "input", (o) => {
      o.target.composing || e[la](sc(e.value, n, r));
    }), (n || r) && oa(e, "change", () => {
      e.value = sc(e.value, n, r);
    }), t || (oa(e, "compositionstart", Hb), oa(e, "compositionend", Xd), oa(e, "change", Xd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[es];
    delete e[es], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[la](sc(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, o) {
    if (e[la] = ks(o), e.composing) return;
    const s = (r || e.type === "number") && !/^0\d/.test(e.value) ? yl(e.value) : e.value, u = t ?? "";
    if (s === u)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === u) || (e.value = u);
  }
}, At = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, oa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? yl(Os(u)) : Os(u)
      ), r = e.multiple, o = r ? pa(e._modelValue) ? new Set(a) : a : a[0], s = e._pendingValue = [
        r,
        r ? Te(o) ? a.slice() : a : o
      ];
      try {
        e[la](o);
      } finally {
        Jt(() => {
          e._pendingValue === s && (e._pendingValue = void 0);
        });
      }
    }), e[la] = ks(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Zd(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[la] = ks(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Vb(t, n[1], n[0])) && Zd(e, t);
  }
};
function Vb(e, t, n) {
  if (!n || Te(e)) return Pi(e, t);
  if (pa(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Zd(e, t) {
  const n = e.multiple, i = Te(t);
  if (!(n && !i && !pa(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], s = Os(o);
      if (n)
        if (i) {
          const u = typeof s;
          u === "string" || u === "number" ? o.selected = t.some((h) => String(h) === String(s)) : o.selected = Og(t, s) > -1;
        } else
          o.selected = t.has(s);
      else if (Pi(Os(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Os(e) {
  return "_value" in e ? e._value : e.value;
}
const Kb = ["ctrl", "shift", "alt", "meta"], Gb = {
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
  exact: (e, t) => Kb.some((n) => e[`${n}Key`] && !t.includes(n))
}, De = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const s = Gb[t[o]];
      if (s && s(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Wb = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ot = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = hi(a.key);
    if (t.some(
      (o) => o === r || Wb[o] === r
    ))
      return e(a);
  }));
}, qb = /* @__PURE__ */ _t({ patchProp: Ub }, bb);
let Jd;
function Yb() {
  return Jd || (Jd = eb(qb));
}
const Xb = ((...e) => {
  const t = Yb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Jb(i);
    if (!a) return;
    const r = t._component;
    !Pe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, Zb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function Zb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Jb(e) {
  return st(e) ? document.querySelector(e) : e;
}
function Nu(e, t, n) {
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
function Qd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Qb(e) {
  if (Array.isArray(e)) return e;
}
function ey(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, o, s = [], u = !0, h = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(u = (i = r.call(n)).done) && (s.push(i.value), s.length !== t); u = !0) ;
    } catch (d) {
      h = !0, a = d;
    } finally {
      try {
        if (!u && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (h) throw a;
      }
    }
    return s;
  }
}
function ty() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ny(e, t) {
  return Qb(e) || ey(e, t) || iy(e, t) || ty();
}
function iy(e, t) {
  if (e) {
    if (typeof e == "string") return Qd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qd(e, t) : void 0;
  }
}
const Ap = Object.entries, ef = Object.setPrototypeOf, ay = Object.isFrozen, ry = Object.getPrototypeOf, oy = Object.getOwnPropertyDescriptor;
let St = Object.freeze, Et = Object.seal, Da = Object.create, kp = typeof Reflect < "u" && Reflect, Wc = kp.apply, qc = kp.construct;
St || (St = function(t) {
  return t;
});
Et || (Et = function(t) {
  return t;
});
Wc || (Wc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
qc || (qc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ia = wt(Array.prototype.forEach), sy = wt(Array.prototype.lastIndexOf), tf = wt(Array.prototype.pop), Sr = wt(Array.prototype.push), ly = wt(Array.prototype.splice), Ha = Array.isArray, Lr = wt(String.prototype.toLowerCase), lc = wt(String.prototype.toString), nf = wt(String.prototype.match), Cr = wt(String.prototype.replace), af = wt(String.prototype.indexOf), cy = wt(String.prototype.trim), uy = wt(Number.prototype.toString), dy = wt(Boolean.prototype.toString), rf = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), of = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), Zt = wt(Object.prototype.hasOwnProperty), Tr = wt(Object.prototype.toString), Pt = wt(RegExp.prototype.test), ea = fy(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return Wc(e, t, i);
  };
}
function fy(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return qc(e, n);
  };
}
function Ke(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lr;
  if (ef && ef(e, null), !Ha(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (ay(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function hy(e) {
  for (let t = 0; t < e.length; t++)
    Zt(e, t) || (e[t] = null);
  return e;
}
function rn(e) {
  const t = Da(null);
  for (const i of Ap(e)) {
    var n = ny(i, 2);
    const a = n[0], r = n[1];
    Zt(e, a) && (Ha(r) ? t[a] = hy(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = rn(r) : t[a] = r);
  }
  return t;
}
function py(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return uy(e);
    case "boolean":
      return dy(e);
    case "bigint":
      return rf ? rf(e) : "0";
    case "symbol":
      return of ? of(e) : "Symbol()";
    case "undefined":
      return Tr(e);
    case "function":
    case "object": {
      if (e === null)
        return Tr(e);
      const t = e, n = An(t, "toString");
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
function An(e, t) {
  for (; e !== null; ) {
    const i = oy(e, t);
    if (i) {
      if (i.get)
        return wt(i.get);
      if (typeof i.value == "function")
        return wt(i.value);
    }
    e = ry(e);
  }
  function n() {
    return null;
  }
  return n;
}
function vy(e) {
  try {
    return Pt(e, ""), !0;
  } catch {
    return !1;
  }
}
const sf = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), cc = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), uc = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gy = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), dc = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), my = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), lf = St(["#text"]), cf = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), fc = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), uf = St(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ts = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), by = Et(/{{[\w\W]*|^[\w\W]*}}/g), yy = Et(/<%[\w\W]*|^[\w\W]*%>/g), _y = Et(/\${[\w\W]*/g), wy = Et(/^data-[\-\w.\u00B7-\uFFFF]+$/), Sy = Et(/^aria-[\-\w]+$/), df = Et(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cy = Et(/^(?:\w+script|data):/i), Ty = Et(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ey = Et(/^html$/i), Ay = Et(/^[a-z][.\w]*(-[.\w]+)+$/i), ff = Et(/<[/\w!]/g), hf = Et(/<[/\w]/g), ky = Et(/<\/no(script|embed|frames)/i), Oy = Et(/\/>/i), an = {
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
}, Op = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], xy = St(Ke({}, Op)), Ny = (function() {
  const e = {};
  return ia(Op, (t) => {
    e[t] = Et(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), Ly = function() {
  return typeof window > "u" ? null : window;
}, Ry = function(t, n) {
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
}, pf = function() {
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
}, Ci = function(t, n, i, a) {
  return Zt(t, n) && Ha(t[n]) ? Ke(a.base ? rn(a.base) : {}, t[n], a.transform) : i;
}, hc = function(t, n, i) {
  const a = Zt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? rn(a) : i();
};
function xp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ly();
  const t = (ee) => xp(ee);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== an.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, s = e.Element, u = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, C = s.prototype, E = An(C, "cloneNode"), x = An(C, "remove"), A = An(C, "nextSibling"), O = An(C, "childNodes"), F = An(C, "parentNode"), z = An(C, "shadowRoot"), W = An(C, "attributes"), P = o && o.prototype ? An(o.prototype, "nodeType") : null, N = o && o.prototype ? An(o.prototype, "nodeName") : null, de = o && o.prototype ? An(o.prototype, "ownerDocument") : null, J = function(S) {
    return P ? P(S) : S.nodeType;
  }, fe = function(S) {
    return N ? N(S) : S.nodeName;
  };
  if (typeof r == "function") {
    const ee = n.createElement("template");
    ee.content && ee.content.ownerDocument && (n = ee.content.ownerDocument);
  }
  let Y, se = "", ye, Q = !1, ie = 0;
  const $ = function() {
    if (ie > 0)
      throw ea('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, M = function(S) {
    $(), ie++;
    try {
      return Y.createHTML(S);
    } finally {
      ie--;
    }
  }, X = function(S) {
    $(), ie++;
    try {
      return Y.createScriptURL(S);
    } finally {
      ie--;
    }
  }, oe = function() {
    return Q || (ye = Ry(m, a), Q = !0), ye;
  }, ne = n, ve = ne.implementation, ge = ne.createNodeIterator, _e = ne.createDocumentFragment, pe = ne.getElementsByTagName, qe = i.importNode;
  let Ee = pf();
  t.isSupported = typeof Ap == "function" && typeof F == "function" && ve && ve.createHTMLDocument !== void 0;
  const ut = by, dt = yy, mt = _y, ft = wy, Ve = Sy, qt = Cy, j = Ty, _ = Ay;
  let T = df, k = null;
  const R = Ke({}, [...sf, ...cc, ...uc, ...dc, ...lf]);
  let L = null;
  const U = Ke({}, [...cf, ...fc, ...uf, ...ts]);
  let G = Object.seal(Da(null, {
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
  const K = Object.seal(Da(null, {
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
  let he = !0, ae = !0, me = !1, Ce = !0, Ie = !1, Me = !0, ze = !1, it = !1, lt = null, ht = null, bt = !1, Ct = !1, Qt = !1, We = !1, Ht = !0, vi = !1;
  const Ui = "user-content-";
  let Bi = !0, ba = !1, cn = {}, un = null;
  const wo = Ke({}, [
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
  let So = null;
  const en = Ke({}, ["audio", "video", "img", "source", "image", "track"]);
  let qa = null;
  const Co = Ke({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ya = "http://www.w3.org/1998/Math/MathML", _a = "http://www.w3.org/2000/svg", dn = "http://www.w3.org/1999/xhtml";
  let gi = dn, Ya = !1, Xa = null;
  const Ml = Ke({}, [ya, _a, dn], lc), To = St(["mi", "mo", "mn", "ms", "mtext"]);
  let Za = Ke({}, To);
  const Eo = St(["annotation-xml"]);
  let Ja = Ke({}, Eo);
  const zl = Ke({}, ["title", "style", "font", "a", "script"]);
  let mi = null;
  const Qa = ["application/xhtml+xml", "text/html"], er = "text/html";
  let ct = null, Rn = null;
  const Ao = n.createElement("form"), ko = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, wa = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Rn && Rn === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = rn(S), mi = // eslint-disable-next-line unicorn/prefer-includes
    Qa.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? er : S.PARSER_MEDIA_TYPE, ct = mi === "application/xhtml+xml" ? lc : Lr, k = Ci(S, "ALLOWED_TAGS", R, {
      transform: ct
    }), L = Ci(S, "ALLOWED_ATTR", U, {
      transform: ct
    }), Xa = Ci(S, "ALLOWED_NAMESPACES", Ml, {
      transform: lc
    }), qa = Ci(S, "ADD_URI_SAFE_ATTR", Co, {
      transform: ct,
      base: Co
    }), So = Ci(S, "ADD_DATA_URI_TAGS", en, {
      transform: ct,
      base: en
    }), un = Ci(S, "FORBID_CONTENTS", wo, {
      transform: ct
    }), V = Ci(S, "FORBID_TAGS", rn({}), {
      transform: ct
    }), Z = Ci(S, "FORBID_ATTR", rn({}), {
      transform: ct
    }), cn = Zt(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? rn(S.USE_PROFILES) : S.USE_PROFILES : !1, he = S.ALLOW_ARIA_ATTR !== !1, ae = S.ALLOW_DATA_ATTR !== !1, me = S.ALLOW_UNKNOWN_PROTOCOLS || !1, Ce = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ie = S.SAFE_FOR_TEMPLATES || !1, Me = S.SAFE_FOR_XML !== !1, ze = S.WHOLE_DOCUMENT || !1, Ct = S.RETURN_DOM || !1, Qt = S.RETURN_DOM_FRAGMENT || !1, We = S.RETURN_TRUSTED_TYPE || !1, bt = S.FORCE_BODY || !1, Ht = S.SANITIZE_DOM !== !1, vi = S.SANITIZE_NAMED_PROPS || !1, Bi = S.KEEP_CONTENT !== !1, ba = S.IN_PLACE || !1, T = vy(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : df, gi = typeof S.NAMESPACE == "string" ? S.NAMESPACE : dn, Za = hc(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ke({}, To)
      // Default built-in map
    ), Ja = hc(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ke({}, Eo)
      // Default built-in map
    );
    const I = hc(S, "CUSTOM_ELEMENT_HANDLING", () => Da(null));
    if (G = Da(null), Zt(I, "tagNameCheck") && ko(I.tagNameCheck) && (G.tagNameCheck = I.tagNameCheck), Zt(I, "attributeNameCheck") && ko(I.attributeNameCheck) && (G.attributeNameCheck = I.attributeNameCheck), Zt(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), Et(G), Ie && (ae = !1), Qt && (Ct = !0), cn && (k = Ke({}, lf), L = Da(null), cn.html === !0 && (Ke(k, sf), Ke(L, cf)), cn.svg === !0 && (Ke(k, cc), Ke(L, fc), Ke(L, ts)), cn.svgFilters === !0 && (Ke(k, uc), Ke(L, fc), Ke(L, ts)), cn.mathMl === !0 && (Ke(k, dc), Ke(L, uf), Ke(L, ts))), K.tagCheck = null, K.attributeCheck = null, Zt(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? K.tagCheck = S.ADD_TAGS : Ha(S.ADD_TAGS) && (k === R && (k = rn(k)), Ke(k, S.ADD_TAGS, ct))), Zt(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? K.attributeCheck = S.ADD_ATTR : Ha(S.ADD_ATTR) && (L === U && (L = rn(L)), Ke(L, S.ADD_ATTR, ct))), Zt(S, "ADD_FORBID_CONTENTS") && Ha(S.ADD_FORBID_CONTENTS) && (un === wo && (un = rn(un)), Ke(un, S.ADD_FORBID_CONTENTS, ct)), Bi && (k["#text"] = !0), ze && Ke(k, ["html", "head", "body"]), k.table && (Ke(k, ["tbody"]), delete V.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ea('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ea('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = Y;
      Y = S.TRUSTED_TYPES_POLICY;
      try {
        se = M("");
      } catch (ce) {
        throw Y = q, ce;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (Y = void 0, se = "") : (Y === void 0 && (Y = oe()), Y && typeof se == "string" && (se = M("")));
    St && St(S), Rn = S;
  }, tr = Ke({}, [...cc, ...uc, ...gy]), Oo = Ke({}, [...dc, ...my]), nr = function(S, I, q) {
    return I.namespaceURI === dn ? S === "svg" : I.namespaceURI === ya ? S === "svg" && (q === "annotation-xml" || Za[q]) : !!tr[S];
  }, ir = function(S, I, q) {
    return I.namespaceURI === dn ? S === "math" : I.namespaceURI === _a ? S === "math" && Ja[q] : !!Oo[S];
  }, xo = function(S, I, q) {
    return I.namespaceURI === _a && !Ja[q] || I.namespaceURI === ya && !Za[q] ? !1 : !Oo[S] && (zl[S] || !tr[S]);
  }, In = function(S) {
    let I = F(S);
    (!I || !I.tagName) && (I = {
      namespaceURI: gi,
      tagName: "template"
    });
    const q = Lr(S.tagName), ce = Lr(I.tagName);
    return Xa[S.namespaceURI] ? S.namespaceURI === _a ? nr(q, I, ce) : S.namespaceURI === ya ? ir(q, I, ce) : S.namespaceURI === dn ? xo(q, I, ce) : !!(mi === "application/xhtml+xml" && Xa[S.namespaceURI]) : !1;
  }, Cn = function(S) {
    Sr(t.removed, {
      element: S
    });
    try {
      F(S).removeChild(S);
    } catch {
      if (x(S), !F(S))
        throw ea("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ar = function(S, I, q) {
    try {
      S.removeAttributeNode(I);
    } catch {
      try {
        S.removeAttribute(q);
      } catch {
      }
    }
  }, Sa = function(S) {
    ji(S);
    const I = O(S);
    if (I) {
      const ce = [];
      ia(I, (be) => {
        Sr(ce, be);
      }), ia(ce, (be) => {
        try {
          x(be);
        } catch {
        }
      });
    }
    const q = W(S);
    if (q)
      for (let ce = q.length - 1; ce >= 0; --ce) {
        const be = q[ce], Oe = be && be.name;
        typeof Oe == "string" && ar(S, be, Oe);
      }
  }, Kn = function(S, I, q) {
    if (!q)
      try {
        q = I.getAttributeNode(S);
      } catch {
        q = null;
      }
    Sr(t.removed, {
      attribute: q || null,
      from: I
    });
    try {
      q ? I.removeAttributeNode(q) : I.removeAttribute(S);
    } catch {
      try {
        I.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if (Ct || Qt)
        try {
          Cn(I);
        } catch {
        }
      else
        try {
          I.setAttribute(S, "");
        } catch {
        }
  }, No = function(S) {
    const I = W(S);
    if (I)
      for (let q = I.length - 1; q >= 0; --q) {
        const ce = I[q], be = ce && ce.name;
        typeof be != "string" || L[ct(be)] || ar(S, ce, be);
      }
  }, ji = function(S) {
    const I = [S];
    for (; I.length > 0; ) {
      const q = I.pop();
      J(q) === an.element && No(q);
      const be = O(q);
      if (be)
        for (let Oe = be.length - 1; Oe >= 0; --Oe)
          I.push(be[Oe]);
    }
  }, rr = function(S, I) {
    return Me ? S === "patchsrc" ? !0 : S === "for" && I !== "label" && I !== "output" : !1;
  }, Lo = function(S) {
    if (!Me)
      return;
    const I = [S];
    for (; I.length > 0; ) {
      const q = I.pop(), ce = J(q);
      if (ce === an.processingInstruction || ce === an.comment && Pt(hf, q.data)) {
        try {
          x(q);
        } catch {
        }
        continue;
      }
      if (ce === an.element) {
        const Oe = q, et = ct(fe(q));
        try {
          Oe.hasAttribute && Oe.hasAttribute("patchsrc") && Oe.removeAttribute("patchsrc"), Oe.hasAttribute && Oe.hasAttribute("for") && rr("for", et) && Oe.removeAttribute("for");
        } catch {
        }
      }
      const be = O(q);
      if (be)
        for (let Oe = be.length - 1; Oe >= 0; --Oe)
          I.push(be[Oe]);
    }
  }, Ro = function(S) {
    let I = null, q = null;
    if (bt)
      S = "<remove></remove>" + S;
    else {
      const Oe = nf(S, /^[\r\n\t ]+/);
      q = Oe && Oe[0];
    }
    mi === "application/xhtml+xml" && gi === dn && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const ce = Y ? M(S) : S;
    if (gi === dn)
      try {
        I = new d().parseFromString(ce, mi);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = ve.createDocument(gi, "template", null);
      try {
        I.documentElement.innerHTML = Ya ? se : ce;
      } catch {
      }
    }
    const be = I.body || I.documentElement;
    return S && q && be.insertBefore(n.createTextNode(q), be.childNodes[0] || null), gi === dn ? pe.call(I, ze ? "html" : "body")[0] : ze ? I.documentElement : be;
  }, Io = function(S) {
    const I = de ? de(S) : S.ownerDocument;
    return ge.call(
      I || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Hi = function(S) {
    return S = Cr(S, ut, " "), S = Cr(S, dt, " "), S = Cr(S, mt, " "), S;
  }, Rt = function(S) {
    var I;
    S.normalize();
    const q = de ? de(S) : S.ownerDocument, ce = ge.call(
      q || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let be = ce.nextNode();
    for (; be; )
      be.data = Hi(be.data), be = ce.nextNode();
    const Oe = (I = S.querySelectorAll) === null || I === void 0 ? void 0 : I.call(S, "template");
    Oe && ia(Oe, (et) => {
      bi(et.content) && Rt(et.content);
    });
  }, Ca = function(S) {
    const I = N ? N(S) : null;
    return typeof I != "string" || ct(I) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    S.attributes !== W(S) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    S.nodeType !== P(S) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, bi = function(S) {
    if (!P || typeof S != "object" || S === null)
      return !1;
    try {
      return P(S) === an.documentFragment;
    } catch {
      return !1;
    }
  }, Vi = function(S) {
    if (!P || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof P(S) == "number";
    } catch {
      return !1;
    }
  };
  function fn(ee, S, I) {
    ee.length !== 0 && ia(ee, (q) => {
      q.call(t, S, I, Rn);
    });
  }
  const Ki = function(S, I) {
    return !!(Me && S.hasChildNodes() && !Vi(S.firstElementChild) && Pt(ff, S.textContent) && Pt(ff, S.innerHTML) || Me && S.namespaceURI === dn && xy[I] && (Vi(S.firstElementChild) || typeof S.textContent == "string" && Pt(Ny[I], S.textContent)) || S.nodeType === an.processingInstruction || Me && S.nodeType === an.comment && Pt(hf, S.data));
  }, Gn = function(S, I) {
    if (S instanceof RegExp)
      return Pt(S, I);
    if (S instanceof Function) {
      for (var q = arguments.length, ce = new Array(q > 2 ? q - 2 : 0), be = 2; be < q; be++)
        ce[be - 2] = arguments[be];
      return !!S(I, ...ce);
    }
    return !1;
  }, Ul = function(S, I, q) {
    if (!V[I] && zo(I) && Gn(G.tagNameCheck, I))
      return !1;
    if (Bi && !un[I]) {
      const ce = F(S), be = O(S);
      if (be && ce) {
        const Oe = be.length;
        for (let et = Oe - 1; et >= 0; --et) {
          const ue = S === q ? E(be[et], !0) : be[et];
          ce.insertBefore(ue, A(S));
        }
      }
    }
    return Cn(S), !0;
  }, Po = function(S, I, q, ce) {
    return S.length === 0 ? I : I === q || I === ce ? rn(I) : I;
  }, $o = function(S, I) {
    return S === I || F(S) !== null ? !1 : (ba && ji(S), !0);
  }, Do = function(S, I) {
    if (fn(Ee.beforeSanitizeElements, S, null), $o(S, I))
      return !0;
    if (Ca(S))
      return Cn(S), !0;
    const q = ct(fe(S));
    if (k = Po(Ee.uponSanitizeElement, k, R, lt), fn(Ee.uponSanitizeElement, S, {
      tagName: q,
      allowedTags: k
    }), $o(S, I))
      return !0;
    if (Ki(S, q))
      return Cn(S), !0;
    if (V[q] || !(K.tagCheck instanceof Function && K.tagCheck(q)) && !k[q]) {
      const be = Ul(S, q, I);
      return be === !1 && fn(Ee.afterSanitizeElements, S, null), be;
    }
    if (J(S) === an.element && !In(S) || (q === "noscript" || q === "noembed" || q === "noframes") && Pt(ky, S.innerHTML))
      return Cn(S), !0;
    if (Ie && S.nodeType === an.text) {
      const be = Hi(S.textContent);
      S.textContent !== be && (Sr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = be);
    }
    return fn(Ee.afterSanitizeElements, S, null), !1;
  }, Fo = function(S, I, q) {
    if (Z[I] || rr(I, S) || Ht && (I === "id" || I === "name") && (q in n || q in Ao))
      return !1;
    const ce = L[I] || K.attributeCheck instanceof Function && K.attributeCheck(I, S);
    return ae && Pt(ft, I) || he && Pt(Ve, I) ? !0 : ce ? qa[I] || Pt(T, Cr(q, j, "")) || (I === "src" || I === "xlink:href" || I === "href") && S !== "script" && af(q, "data:") === 0 && So[S] || me && !Pt(qt, Cr(q, j, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      zo(S) && Gn(G.tagNameCheck, S) && Gn(G.attributeNameCheck, I, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      I === "is" && G.allowCustomizedBuiltInElements && Gn(G.tagNameCheck, q)
    );
  }, Mo = Ke({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), zo = function(S) {
    return !Mo[Lr(S)] && Pt(_, S);
  }, Ta = function(S, I, q, ce) {
    if (Y && typeof m == "object" && typeof m.getAttributeType == "function" && !q)
      switch (m.getAttributeType(S, I)) {
        case "TrustedHTML":
          return M(ce);
        case "TrustedScriptURL":
          return X(ce);
      }
    return ce;
  }, Bl = function(S, I, q, ce) {
    try {
      q ? S.setAttributeNS(q, I, ce) : S.setAttribute(I, ce), Ca(S) ? Cn(S) : tf(t.removed);
    } catch {
      Kn(I, S);
    }
  }, Ea = function(S) {
    fn(Ee.beforeSanitizeAttributes, S, null);
    const I = S.attributes;
    if (!I || Ca(S))
      return;
    L = Po(Ee.uponSanitizeAttribute, L, U, ht);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: L,
      forceKeepAttr: void 0
    };
    let ce = I.length;
    const be = ct(S.nodeName);
    for (; ce--; ) {
      const Oe = I[ce], et = Oe.name, ue = Oe.namespaceURI, pt = Oe.value, Xe = ct(et), Tn = pt;
      let tt = et === "value" ? Tn : cy(Tn);
      if (q.attrName = Xe, q.attrValue = tt, q.keepAttr = !0, q.forceKeepAttr = void 0, fn(Ee.uponSanitizeAttribute, S, q), tt = q.attrValue, vi && (Xe === "id" || Xe === "name") && af(tt, Ui) !== 0 && (Kn(et, S, Oe), tt = Ui + tt), Me && Pt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, tt)) {
        Kn(et, S, Oe);
        continue;
      }
      if (Xe === "attributename" && nf(tt, "href")) {
        Kn(et, S, Oe);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          Kn(et, S, Oe);
          continue;
        }
        if (!Ce && Pt(Oy, tt)) {
          Kn(et, S, Oe);
          continue;
        }
        if (Ie && (tt = Hi(tt)), !Fo(be, Xe, tt)) {
          Kn(et, S, Oe);
          continue;
        }
        tt = Ta(be, Xe, ue, tt), tt !== Tn && Bl(S, et, ue, tt);
      }
    }
    fn(Ee.afterSanitizeAttributes, S, null);
  }, Wn = function(S) {
    let I = null;
    const q = Io(S);
    for (fn(Ee.beforeSanitizeShadowDOM, S, null); I = q.nextNode(); )
      if (fn(Ee.uponSanitizeShadowNode, I, null), Do(I, S), Ea(I), bi(I.content) && Wn(I.content), J(I) === an.element) {
        const ce = z(I);
        bi(ce) && (Aa(ce), Wn(ce));
      }
    fn(Ee.afterSanitizeShadowDOM, S, null);
  }, Aa = function(S) {
    const I = [{
      node: S,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const q = I.pop();
      if (q.shadow) {
        Wn(q.shadow);
        continue;
      }
      const ce = q.node, Oe = J(ce) === an.element, et = O(ce);
      if (et)
        for (let ue = et.length - 1; ue >= 0; --ue)
          I.push({
            node: et[ue],
            shadow: null
          });
      if (Oe) {
        const ue = N ? N(ce) : null;
        if (typeof ue == "string" && ct(ue) === "template") {
          const pt = ce.content;
          bi(pt) && I.push({
            node: pt,
            shadow: null
          });
        }
      }
      if (Oe) {
        const ue = z(ce);
        bi(ue) && I.push({
          node: null,
          shadow: ue
        }, {
          node: ue,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ee) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, q = null, ce = null, be = null;
    if (Ya = !ee, Ya && (ee = "<!-->"), typeof ee != "string" && !Vi(ee) && (ee = py(ee), typeof ee != "string"))
      throw ea("dirty is not a string, aborting");
    if (!t.isSupported)
      return ee;
    it ? (k = lt, L = ht) : wa(S), (Ee.uponSanitizeElement.length > 0 || Ee.uponSanitizeAttribute.length > 0) && (k = rn(k)), Ee.uponSanitizeAttribute.length > 0 && (L = rn(L)), t.removed = [];
    const Oe = ba && typeof ee != "string" && Vi(ee);
    if (Oe) {
      Lo(ee);
      const pt = fe(ee);
      if (typeof pt == "string") {
        const Xe = ct(pt);
        if (!k[Xe] || V[Xe])
          throw Sa(ee), ea("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ca(ee))
        throw Sa(ee), ea("root node is clobbered and cannot be sanitized in-place");
      try {
        Aa(ee);
      } catch (Xe) {
        throw Sa(ee), Xe;
      }
    } else if (Vi(ee))
      I = Ro("<!---->"), q = I.ownerDocument.importNode(ee, !0), q.nodeType === an.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? I = q : I.appendChild(q), Aa(q);
    else {
      if (!Ct && !Ie && !ze && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return Y && We ? M(ee) : ee;
      if (I = Ro(ee), !I)
        return Ct ? null : We ? se : "";
    }
    I && bt && Cn(I.firstChild);
    const et = Oe ? ee : I;
    try {
      const pt = Io(et);
      for (; ce = pt.nextNode(); )
        Do(ce, et), Ea(ce), bi(ce.content) && Wn(ce.content);
    } catch (pt) {
      throw Oe && (Sa(ee), ia(t.removed, (Xe) => {
        Xe.element && ji(Xe.element);
      })), pt;
    }
    if (Oe)
      return ia(t.removed, (pt) => {
        pt.element && ji(pt.element);
      }), Ie && Rt(ee), ee;
    if (Ct) {
      if (Ie && Rt(I), Qt)
        for (be = _e.call(I.ownerDocument); I.firstChild; )
          be.appendChild(I.firstChild);
      else
        be = I;
      return (L.shadowroot || L.shadowrootmode) && (be = qe.call(i, be, !0)), be;
    }
    let ue = ze ? I.outerHTML : I.innerHTML;
    return ze && k["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Pt(Ey, I.ownerDocument.doctype.name) && (ue = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + ue), Ie && (ue = Hi(ue)), Y && We ? M(ue) : ue;
  }, t.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wa(ee), it = !0, lt = k, ht = L;
  }, t.clearConfig = function() {
    Rn = null, it = !1, lt = null, ht = null, Y = ye, se = "";
  }, t.isValidAttribute = function(ee, S, I) {
    Rn || wa({});
    const q = ct(ee), ce = ct(S);
    return Fo(q, ce, I);
  }, t.addHook = function(ee, S) {
    typeof S == "function" && Zt(Ee, ee) && Sr(Ee[ee], S);
  }, t.removeHook = function(ee, S) {
    if (Zt(Ee, ee)) {
      if (S !== void 0) {
        const I = sy(Ee[ee], S);
        return I === -1 ? void 0 : ly(Ee[ee], I, 1)[0];
      }
      return tf(Ee[ee]);
    }
  }, t.removeHooks = function(ee) {
    Zt(Ee, ee) && (Ee[ee] = []);
  }, t.removeAllHooks = function() {
    Ee = pf();
  }, t;
}
var Np = xp();
function Lu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pc, vf;
function Iy() {
  if (vf) return pc;
  vf = 1;
  var e = /["'&<>]/;
  pc = t;
  function t(n) {
    var i = "" + n, a = e.exec(i);
    if (!a)
      return i;
    var r, o = "", s = 0, u = 0;
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
      u !== s && (o += i.substring(u, s)), u = s + 1, o += r;
    }
    return u !== s ? o + i.substring(u, s) : o;
  }
  return pc;
}
var Py = Iy();
const xs = /* @__PURE__ */ Lu(Py);
function $y() {
  return globalThis._nc_l10n_locale;
}
function Dy() {
  return $y().replaceAll(/_/g, "-");
}
function Ll() {
  return globalThis._nc_l10n_language;
}
function Fy(e) {
  const t = Ll();
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
function g(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, o = typeof i == "number" ? i : typeof n == "number" ? n : void 0, s = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, u = (A) => A, h = (s.sanitize ? Np.sanitize : u) || u, d = s.escape ? xs : u, m = (A) => typeof A == "string" || typeof A == "number", C = (A, O, F) => A.replace(/%n/g, "" + F).replace(/{([^{}]*)}/g, (z, W) => {
    if (O === void 0 || !(W in O))
      return d(z);
    const P = O[W];
    return m(P) ? d(`${P}`) : typeof P == "object" && m(P.value) ? (P.escape !== !1 ? xs : u)(`${P.value}`) : d(z);
  });
  let x = (a?.bundle ?? Lp(e)).translations[t] || t;
  return x = Array.isArray(x) ? x[0] : x, h(typeof r == "object" || o !== void 0 ? C(
    x,
    r,
    o
  ) : x);
}
function vn(e, t, n, i, a, r) {
  const o = "_" + t + "_::_" + n + "_", s = r?.bundle ?? Lp(e), u = s.translations[o];
  if (typeof u < "u") {
    const h = u;
    if (Array.isArray(h)) {
      const d = s.pluralFunction(i);
      return g(e, h[d], a, i, r);
    }
  }
  return i === 1 ? g(e, t, a, i, r) : g(e, n, a, i, r);
}
function My(e, t = Ll()) {
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
class Ns {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Ns.GLOBAL_SCOPE_PERSISTENT : Ns.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class zy {
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
    return new Ns(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Rp(e) {
  return new zy(e);
}
function Uy() {
  try {
    return Nu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var vc, gf;
function Ip() {
  if (gf) return vc;
  gf = 1;
  var e = {};
  return vc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, vc;
}
var gc, mf;
function Pp() {
  if (mf) return gc;
  mf = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return gc = {
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
  }, gc;
}
var ns = { exports: {} }, bf;
function By() {
  return bf || (bf = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = Pp(), r = Ip();
    t = e.exports = {};
    const o = t.re = [], s = t.safeRe = [], u = t.src = [], h = t.safeSrc = [], d = t.t = {};
    let m = 0;
    const C = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [C, i]
    ], x = (O) => {
      for (const [F, z] of E)
        O = O.split(`${F}*`).join(`${F}{0,${z}}`).split(`${F}+`).join(`${F}{1,${z}}`);
      return O;
    }, A = (O, F, z) => {
      const W = x(F), P = m++;
      r(O, P, F), d[O] = P, u[P] = F, h[P] = W, o[P] = new RegExp(F, z ? "g" : void 0), s[P] = new RegExp(W, z ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${C}*`), A("MAINVERSION", `(${u[d.NUMERICIDENTIFIER]})\\.(${u[d.NUMERICIDENTIFIER]})\\.(${u[d.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${u[d.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${u[d.NONNUMERICIDENTIFIER]}|${u[d.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${u[d.NONNUMERICIDENTIFIER]}|${u[d.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${u[d.PRERELEASEIDENTIFIER]}(?:\\.${u[d.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${u[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[d.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${C}+`), A("BUILD", `(?:\\+(${u[d.BUILDIDENTIFIER]}(?:\\.${u[d.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${u[d.MAINVERSION]}${u[d.PRERELEASE]}?${u[d.BUILD]}?`), A("FULL", `^${u[d.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${u[d.MAINVERSIONLOOSE]}${u[d.PRERELEASELOOSE]}?${u[d.BUILD]}?`), A("LOOSE", `^${u[d.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${u[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${u[d.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${u[d.XRANGEIDENTIFIER]})(?:\\.(${u[d.XRANGEIDENTIFIER]})(?:\\.(${u[d.XRANGEIDENTIFIER]})(?:${u[d.PRERELEASE]})?${u[d.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${u[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[d.XRANGEIDENTIFIERLOOSE]})(?:${u[d.PRERELEASELOOSE]})?${u[d.BUILD]}?)?)?`), A("XRANGE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${u[d.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", u[d.COERCEPLAIN] + `(?:${u[d.PRERELEASE]})?(?:${u[d.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", u[d.COERCE], !0), A("COERCERTLFULL", u[d.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${u[d.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${u[d.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${u[d.LONECARET]}${u[d.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${u[d.LONECARET]}${u[d.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${u[d.GTLT]}\\s*(${u[d.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]}|${u[d.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${u[d.XRANGEPLAIN]})\\s+-\\s+(${u[d.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${u[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[d.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(ns, ns.exports)), ns.exports;
}
var mc, yf;
function jy() {
  if (yf) return mc;
  yf = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return mc = (i) => i ? typeof i != "object" ? e : i : t, mc;
}
var bc, _f;
function Hy() {
  if (_f) return bc;
  _f = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), o = e.test(a);
    return r && o && (i = +i, a = +a), i === a ? 0 : r && !o ? -1 : o && !r ? 1 : i < a ? -1 : 1;
  };
  return bc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, bc;
}
var yc, wf;
function $p() {
  if (wf) return yc;
  wf = 1;
  const e = Ip(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = Pp(), { safeRe: i, t: a } = By(), r = jy(), { compareIdentifiers: o } = Hy(), s = (h, d) => {
    const m = d.split(".");
    if (m.length > h.length)
      return !1;
    for (let C = 0; C < m.length; C++)
      if (o(h[C], m[C]) !== 0)
        return !1;
    return !0;
  };
  class u {
    constructor(d, m) {
      if (m = r(m), d instanceof u) {
        if (d.loose === !!m.loose && d.includePrerelease === !!m.includePrerelease)
          return d;
        d = d.version;
      } else if (typeof d != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof d}".`);
      if (d.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", d, m), this.options = m, this.loose = !!m.loose, this.includePrerelease = !!m.includePrerelease;
      const C = d.trim().match(m.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!C)
        throw new TypeError(`Invalid Version: ${d}`);
      if (this.raw = d, this.major = +C[1], this.minor = +C[2], this.patch = +C[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      C[4] ? this.prerelease = C[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const x = +E;
          if (x >= 0 && x < n)
            return x;
        }
        return E;
      }) : this.prerelease = [], this.build = C[5] ? C[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(d) {
      if (e("SemVer.compare", this.version, this.options, d), !(d instanceof u)) {
        if (typeof d == "string" && d === this.version)
          return 0;
        d = new u(d, this.options);
      }
      return d.version === this.version ? 0 : this.compareMain(d) || this.comparePre(d);
    }
    compareMain(d) {
      return d instanceof u || (d = new u(d, this.options)), this.major < d.major ? -1 : this.major > d.major ? 1 : this.minor < d.minor ? -1 : this.minor > d.minor ? 1 : this.patch < d.patch ? -1 : this.patch > d.patch ? 1 : 0;
    }
    comparePre(d) {
      if (d instanceof u || (d = new u(d, this.options)), this.prerelease.length && !d.prerelease.length)
        return -1;
      if (!this.prerelease.length && d.prerelease.length)
        return 1;
      if (!this.prerelease.length && !d.prerelease.length)
        return 0;
      let m = 0;
      do {
        const C = this.prerelease[m], E = d.prerelease[m];
        if (e("prerelease compare", m, C, E), C === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === E)
          continue;
        return o(C, E);
      } while (++m);
    }
    compareBuild(d) {
      d instanceof u || (d = new u(d, this.options));
      let m = 0;
      do {
        const C = this.build[m], E = d.build[m];
        if (e("build compare", m, C, E), C === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === E)
          continue;
        return o(C, E);
      } while (++m);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(d, m, C) {
      if (d.startsWith("pre")) {
        if (!m && C === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (m) {
          const E = `-${m}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!E || E[1] !== m)
            throw new Error(`invalid identifier: ${m}`);
        }
      }
      switch (d) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", m, C);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", m, C);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", m, C), this.inc("pre", m, C);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", m, C), this.inc("pre", m, C);
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
          const E = Number(C) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [E];
          else {
            let x = this.prerelease.length;
            for (; --x >= 0; )
              typeof this.prerelease[x] == "number" && (this.prerelease[x]++, x = -2);
            if (x === -1) {
              if (m === this.prerelease.join(".") && C === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (m) {
            let x = [m, E];
            if (C === !1 && (x = [m]), s(this.prerelease, m)) {
              const A = this.prerelease[m.split(".").length];
              isNaN(A) && (this.prerelease = x);
            } else
              this.prerelease = x;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${d}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return yc = u, yc;
}
var _c, Sf;
function Vy() {
  if (Sf) return _c;
  Sf = 1;
  const e = $p();
  return _c = (n, i) => new e(n, i).major, _c;
}
var Ky = Vy();
const Cf = /* @__PURE__ */ Lu(Ky);
var wc, Tf;
function Gy() {
  if (Tf) return wc;
  Tf = 1;
  const e = $p();
  return wc = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, wc;
}
var Sc, Ef;
function Wy() {
  if (Ef) return Sc;
  Ef = 1;
  const e = Gy();
  return Sc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Sc;
}
var qy = Wy();
const Yy = /* @__PURE__ */ Lu(qy);
class Xy {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Yy(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Cf(t.getVersion()) !== Cf(this.getVersion()) && console.warn(
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
class Zy {
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
function Ru() {
  return Er !== null ? Er : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Er = new Xy(window._nc_event_bus) : Er = window._nc_event_bus = new Zy(), Er);
}
function Dp(e, t) {
  Ru().subscribe(e, t);
}
function Jy(e, t) {
  Ru().unsubscribe(e, t);
}
function li(e, ...t) {
  Ru().emit(e, ...t);
}
const Fp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Qy = Object.prototype.toString, e_ = (e) => Qy.call(e) === "[object Object]", La = () => {
}, t_ = /* @__PURE__ */ n_();
function n_() {
  var e, t, n;
  return Fp && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Cc(e) {
  return Array.isArray(e) ? e : [e];
}
function i_(e, t, n) {
  return nt(e, t, {
    ...n,
    immediate: !0
  });
}
const Mp = Fp ? window : void 0;
function Rr(e) {
  var t;
  const n = oi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Va(...e) {
  const t = (i, a, r, o) => (i.addEventListener(a, r, o), () => i.removeEventListener(a, r, o)), n = H(() => {
    const i = Cc(oi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return i_(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Rr(r))) !== null && i !== void 0 ? i : [Mp].filter((r) => r != null),
      Cc(oi(n.value ? e[1] : e[0])),
      Cc(v(n.value ? e[2] : e[1])),
      oi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, o], s, u) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const h = e_(o) ? { ...o } : o, d = i.flatMap((m) => a.flatMap((C) => r.map((E) => t(m, C, E, h))));
    u(() => {
      d.forEach((m) => m());
    });
  }, { flush: "post" });
}
let Af = !1;
function kf(e, t, n = {}) {
  const { window: i = Mp, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: s = !1 } = n;
  if (!i) return s ? {
    stop: La,
    cancel: La,
    trigger: La
  } : La;
  if (t_ && !Af) {
    Af = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((F) => F.addEventListener("click", La, O)), i.document.documentElement.addEventListener("click", La, O);
  }
  let u = !0;
  const h = (O) => oi(a).some((F) => {
    if (typeof F == "string") return Array.from(i.document.querySelectorAll(F)).some((z) => z === O.target || O.composedPath().includes(z));
    {
      const z = Rr(F);
      return z && (O.target === z || O.composedPath().includes(z));
    }
  });
  function d(O) {
    const F = oi(O);
    return F && F.$.subTree.shapeFlag === 16;
  }
  function m(O, F) {
    const z = oi(O), W = z.$.subTree && z.$.subTree.children;
    return W == null || !Array.isArray(W) ? !1 : W.some((P) => P.el === F.target || F.composedPath().includes(P.el));
  }
  const C = (O) => {
    const F = Rr(e);
    if (O.target != null && !(!(F instanceof Element) && d(e) && m(e, O)) && !(!F || F === O.target || O.composedPath().includes(F))) {
      if ("detail" in O && O.detail === 0 && (u = !h(O)), !u) {
        u = !0;
        return;
      }
      t(O);
    }
  };
  let E = !1;
  const x = [
    Va(i, "click", (O) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), C(O));
    }, {
      passive: !0,
      capture: r
    }),
    Va(i, "pointerdown", (O) => {
      const F = Rr(e);
      u = !h(O) && !!(F && !O.composedPath().includes(F));
    }, { passive: !0 }),
    o && Va(i, "blur", (O) => {
      setTimeout(() => {
        const F = Rr(e);
        let z = i.document.activeElement;
        for (; z?.shadowRoot; ) z = z.shadowRoot.activeElement;
        z?.tagName === "IFRAME" && !F?.contains(i.document.activeElement) && t(O);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => x.forEach((O) => O());
  return s ? {
    stop: A,
    cancel: () => {
      u = !1;
    },
    trigger: (O) => {
      u = !0, C(O), u = !1;
    }
  } : A;
}
function a_(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, s = /* @__PURE__ */ Dt({
    x: 0,
    y: 0
  }), u = /* @__PURE__ */ Dt({
    x: 0,
    y: 0
  }), h = H(() => s.x - u.x), d = H(() => s.y - u.y), { max: m, abs: C } = Math, E = H(() => m(C(h.value), C(d.value)) >= n), x = /* @__PURE__ */ Nh(!1), A = H(() => E.value ? C(h.value) > C(d.value) ? h.value > 0 ? "left" : "right" : d.value > 0 ? "up" : "down" : "none"), O = (J) => [J.touches[0].clientX, J.touches[0].clientY], F = (J, fe) => {
    s.x = J, s.y = fe;
  }, z = (J, fe) => {
    u.x = J, u.y = fe;
  }, W = {
    passive: o,
    capture: !o
  }, P = (J) => {
    x.value && a?.(J, A.value), x.value = !1;
  }, N = [
    Va(e, "touchstart", (J) => {
      if (J.touches.length !== 1) return;
      const [fe, Y] = O(J);
      F(fe, Y), z(fe, Y), r?.(J);
    }, W),
    Va(e, "touchmove", (J) => {
      if (J.touches.length !== 1) return;
      const [fe, Y] = O(J);
      z(fe, Y), W.capture && !W.passive && Math.abs(h.value) > Math.abs(d.value) && J.preventDefault(), !x.value && E.value && (x.value = !0), x.value && i?.(J);
    }, W),
    Va(e, ["touchend", "touchcancel"], P, W)
  ];
  return {
    isSwiping: x,
    direction: A,
    coordsStart: s,
    coordsEnd: u,
    lengthX: h,
    lengthY: d,
    stop: () => N.forEach((J) => J())
  };
}
var r_ = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Im(), r = Rm(), o = /* @__PURE__ */ Ne([]), s = H(() => o.value.reduce((j, _) => (j[~~_.id] = _) && j, {})), u = H(() => o.value.length), h = /* @__PURE__ */ Ne(null), d = /* @__PURE__ */ Ne(!1), m = /* @__PURE__ */ Ne({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), C = /* @__PURE__ */ Ne({
      splitter: null,
      timeoutId: null
    }), E = H(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": m.value.dragging,
      "splitpanes--ready": d.value
    })), x = () => {
      document.addEventListener("mousemove", F, { passive: !1 }), document.addEventListener("mouseup", z), "ontouchstart" in window && (document.addEventListener("touchmove", F, { passive: !1 }), document.addEventListener("touchend", z));
    }, A = () => {
      document.removeEventListener("mousemove", F, { passive: !1 }), document.removeEventListener("mouseup", z), "ontouchstart" in window && (document.removeEventListener("touchmove", F, { passive: !1 }), document.removeEventListener("touchend", z));
    }, O = (j, _) => {
      let T = j.target.closest(".splitpanes__splitter");
      if (T) {
        let { left: k, top: R } = T.getBoundingClientRect(), { clientX: L, clientY: U } = "ontouchstart" in window && j.touches ? j.touches[0] : j;
        m.value.cursorOffset = i.horizontal ? U - R : L - k;
      }
      x(), m.value.mouseDown = !0, m.value.activeSplitter = _, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, F = (j) => {
      m.value.mouseDown && (j.preventDefault(), m.value.dragging || (window.getSelection()?.removeAllRanges(), m.value.dragging = !0), requestAnimationFrame(() => {
        Y(J(j)), Ve("resize", { event: j }, !0);
      }));
    }, z = (j) => {
      m.value.dragging && (window.getSelection()?.removeAllRanges(), Ve("resized", { event: j }, !0)), m.value.mouseDown = !1, m.value.activeSplitter = null, setTimeout(() => {
        m.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, W = (j, _) => {
      "ontouchstart" in window && (j.preventDefault(), C.value.splitter === _ ? (clearTimeout(C.value.timeoutId), C.value.timeoutId = null, P(j, _), C.value.splitter = null) : (C.value.splitter = _, C.value.timeoutId = setTimeout(() => C.value.splitter = null, 500))), m.value.dragging || Ve("splitter-click", {
        event: j,
        index: _
      }, !0);
    }, P = (j, _) => {
      if (Ve("splitter-dblclick", {
        event: j,
        index: _
      }, !0), i.maximizePanes) {
        let T = 0;
        o.value = o.value.map((k, R) => (k.size = R === _ ? k.max : k.min, R !== _ && (T += k.min), k)), o.value[_].size -= T, Ve("pane-maximize", {
          event: j,
          index: _,
          pane: o.value[_]
        }), Ve("resized", {
          event: j,
          index: _
        }, !0);
      }
    }, N = (j, _) => {
      if (!i.keyboardStep) return;
      let T = i.horizontal ? j.key === "ArrowDown" : j.key === "ArrowRight", k = i.horizontal ? j.key === "ArrowUp" : j.key === "ArrowLeft";
      if (!T && !k) return;
      j.preventDefault(), m.value.activeSplitter = _;
      let R = (T ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), L = Q(_) + o.value[_].size;
      se(Math.min(Math.max(L + R * i.keyboardStep, 0), 100)), Ve("resize", { event: j }, !0), Ve("resized", { event: j }, !0), m.value.activeSplitter = null;
    }, de = (j, _) => {
      let T = s.value[_];
      T && Ve("pane-click", {
        event: j,
        index: T.index,
        pane: T
      });
    }, J = (j) => {
      let _ = h.value.getBoundingClientRect(), { clientX: T, clientY: k } = "ontouchstart" in window && j.touches ? j.touches[0] : j;
      return {
        x: T - (i.horizontal ? 0 : m.value.cursorOffset) - _.left,
        y: k - (i.horizontal ? m.value.cursorOffset : 0) - _.top
      };
    }, fe = (j) => {
      j = j[i.horizontal ? "y" : "x"];
      let _ = h.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (j = _ - j), j * 100 / _;
    }, Y = (j) => {
      se(fe(j));
    }, se = (j) => {
      let _ = m.value.activeSplitter;
      if (_ === null || _ >= o.value.length - 1) return;
      let T = {
        prevPanesSize: Q(_),
        nextPanesSize: ie(_),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : T.prevPanesSize), R = 100 - (i.pushOtherPanes ? 0 : T.nextPanesSize);
      j = Math.max(Math.min(j, R), k);
      let L = [_, _ + 1], U = o.value[L[0]] || null, G = o.value[L[1]] || null, V = U !== null && U.max < 100 && j >= U.max + T.prevPanesSize, Z = G !== null && G.max < 100 && j <= 100 - (G.max + ie(_ + 1));
      if (V || Z) {
        V ? (U.size = U.max, G.size = Math.min(Math.max(100 - U.max - T.prevPanesSize - T.nextPanesSize, G.min), G.max)) : (U.size = Math.min(Math.max(100 - G.max - T.prevPanesSize - ie(_ + 1), U.min), U.max), G.size = G.max);
        return;
      }
      if (i.pushOtherPanes) {
        let K = ye(T, j);
        if (!K) return;
        ({ sums: T, panesToResize: L } = K), U = o.value[L[0]] || null, G = o.value[L[1]] || null;
      }
      U !== null && (U.size = Math.min(Math.max(j - T.prevPanesSize - T.prevReachedMinPanes, U.min), U.max)), G !== null && (G.size = Math.min(Math.max(100 - j - T.nextPanesSize - T.nextReachedMinPanes, G.min), G.max));
    }, ye = (j, _) => {
      let T = m.value.activeSplitter, k = [T, T + 1];
      if (_ < j.prevPanesSize + o.value[k[0]].min) {
        if (k[0] = $(T).index, j.prevReachedMinPanes = 0, k[0] < T && o.value.forEach((R, L) => {
          L > k[0] && L <= T && (R.size = R.min, j.prevReachedMinPanes += R.min);
        }), k[0] === void 0) return j.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((R, L) => {
          L > 0 && L <= T && (R.size = R.min, j.prevReachedMinPanes += R.min);
        }), o.value[k[1]].size = 100 - j.prevReachedMinPanes - o.value[0].min - j.prevPanesSize - j.nextPanesSize, null;
        j.prevPanesSize = Q(k[0]);
      }
      return _ > 100 - j.nextPanesSize - o.value[k[1]].min && (k[1] = M(T).index, j.nextReachedMinPanes = 0, k[1] > T + 1 && o.value.forEach((R, L) => {
        L > T && L < k[1] && (R.size = R.min, j.nextReachedMinPanes += R.min);
      }), j.nextPanesSize = k[1] === void 0 ? 0 : ie(k[1] - 1), k[1] === void 0) ? (j.nextReachedMinPanes = 0, o.value.forEach((R, L) => {
        L >= T + 1 && (R.size = R.min, j.nextReachedMinPanes += R.min);
      }), k[0] !== void 0 && (o.value[k[0]].size = 100 - j.prevPanesSize - ie(k[0] - 1)), null) : {
        sums: j,
        panesToResize: k
      };
    }, Q = (j) => o.value.reduce((_, T, k) => _ + (k < j ? T.size : 0), 0), ie = (j) => o.value.reduce((_, T, k) => _ + (k > j + 1 ? T.size : 0), 0), $ = (j) => [...o.value].reverse().find((_) => _.index < j && _.size > _.min) || {}, M = (j) => o.value.find((_) => _.index > j + 1 && _.size > _.min) || {}, X = () => {
      let j = Array.from(h.value?.children || []);
      for (let _ of j) {
        let T = _.classList.contains("splitpanes__pane"), k = _.classList.contains("splitpanes__splitter");
        !T && !k && (_.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, oe = (j, _, T = !1) => {
      let k = j - 1, R = document.createElement("div");
      R.classList.add("splitpanes__splitter"), T || (R.onmousedown = (L) => O(L, k), typeof window < "u" && "ontouchstart" in window && (R.ontouchstart = (L) => O(L, k)), R.onclick = (L) => W(L, k + 1), i.keyboardStep && (R.setAttribute("tabindex", "0"), R.setAttribute("role", "separator"), R.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), R.onkeydown = (L) => N(L, k))), R.ondblclick = (L) => P(L, k + 1), _.parentNode.insertBefore(R, _);
    }, ne = (j) => {
      j.onmousedown = null, j.onclick = null, j.ondblclick = null, j.onkeydown = null, j.remove();
    }, ve = () => {
      let j = Array.from(h.value?.children || []);
      for (let T of j) T.className.includes("splitpanes__splitter") && ne(T);
      let _ = 0;
      for (let T of j) T.className.includes("splitpanes__pane") && (!_ && i.firstSplitter ? oe(_, T, !0) : _ && oe(_, T), _++);
    }, ge = ({ uid: j, ..._ }) => {
      let T = s.value[j];
      for (let [k, R] of Object.entries(_)) T[k] = R;
    }, _e = !1, pe = (j) => {
      let _ = -1;
      Array.from(h.value?.children || []).some((T) => (T.className.includes("splitpanes__pane") && _++, T.isSameNode(j.el))), o.value.splice(_, 0, {
        ...j,
        index: _
      }), o.value.forEach((T, k) => T.index = k), d.value && !_e && (_e = !0, Jt(() => {
        ve(), Ee({ addedPane: o.value[_] }), Ve("pane-add", { pane: o.value[_] }), _e = !1;
      }));
    }, qe = (j) => {
      let _ = o.value.findIndex((k) => k.id === j);
      o.value[_].el = null;
      let T = o.value.splice(_, 1)[0];
      o.value.forEach((k, R) => k.index = R), Jt(() => {
        ve(), Ve("pane-remove", { pane: T }), Ee({ removedPane: {
          ...T
        } });
      });
    }, Ee = (j = {}) => {
      !j.addedPane && !j.removedPane ? dt() : o.value.some((_) => _.givenSize !== null || _.min || _.max < 100) ? mt(j) : ut(), d.value && Ve("resized");
    }, ut = () => {
      let j = 100 / u.value, _ = 100, T = [], k = [];
      for (let R of o.value) R.size = Math.max(Math.min(j, R.max), R.min), _ -= R.size, R.size >= R.max && T.push(R.id), R.size <= R.min && k.push(R.id);
      Math.abs(_) > 0.1 && ft(_, T, k);
    }, dt = () => {
      let j = 100, _ = [], T = [], k = 0;
      for (let L of o.value) j -= L.size, L.givenSize !== null && k++, L.size >= L.max && _.push(L.id), L.size <= L.min && T.push(L.id);
      let R = 100;
      if (j > 0.1) {
        for (let L of o.value) L.givenSize === null && (L.size = Math.max(Math.min(j / (u.value - k), L.max), L.min)), R -= L.size;
        R > 0.1 && ft(R, _, T);
      }
    }, mt = ({ addedPane: j, removedPane: _ } = {}) => {
      let T = o.value.reduce((V, Z) => V + (Z.givenSize === null ? 0 : Z.givenSize), 0), k = o.value.filter((V) => V.givenSize === null).length, R = k > 0 ? (100 - T) / k : 0, L = 0, U = [], G = [];
      for (let V of o.value) L -= V.size, V.size >= V.max && U.push(V.id), V.size <= V.min && G.push(V.id);
      if (!(Math.abs(L) < 0.1)) {
        L = 100;
        for (let V of o.value) V.givenSize === null && (V.size = Math.max(Math.min(R, V.max), V.min)), L -= V.size, V.size >= V.max && U.push(V.id), V.size <= V.min && G.push(V.id);
        Math.abs(L) > 0.1 && ft(L, U, G);
      }
    }, ft = (j, _, T) => {
      let k;
      k = j > 0 ? j / (u.value - _.length) : j / (u.value - T.length), o.value.forEach((R, L) => {
        if (j > 0 && !_.includes(R.id)) {
          let U = Math.max(Math.min(R.size + k, R.max), R.min), G = U - R.size;
          j -= G, R.size = U;
        } else if (!T.includes(R.id)) {
          let U = Math.max(Math.min(R.size + k, R.max), R.min), G = U - R.size;
          j -= G, R.size = U;
        }
      }), Math.abs(j) > 0.1 && d.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Ve = (j, _ = void 0, T = !1) => {
      let k = _?.index ?? m.value.activeSplitter ?? null;
      n(j, {
        ..._,
        ...k !== null && { index: k },
        ...T && k !== null && {
          prevPane: o.value[k - +!!i.firstSplitter],
          nextPane: o.value[k + +!i.firstSplitter]
        },
        panes: o.value.map((R) => ({
          min: R.min,
          max: R.max,
          size: R.size
        }))
      });
    };
    nt(() => i.firstSplitter, () => ve()), nt(() => i.horizontal, (j) => Jt(() => {
      n("direction-changed", {
        horizontal: j,
        panes: o.value.map((_) => ({
          min: _.min,
          max: _.max,
          size: _.size
        }))
      });
    })), Fi(() => {
      X(), ve(), Ee(), Ve("ready"), d.value = !0;
    }), Wa(() => d.value = !1);
    let qt = () => {
      let { class: j, ..._ } = a;
      return Xt("div", {
        ref: h,
        class: [E.value, j],
        ..._
      }, r.default?.());
    };
    return mn("panes", o), mn("indexedPanes", s), mn("horizontal", H(() => i.horizontal)), mn("requestUpdate", ge), mn("onPaneAdd", pe), mn("onPaneRemove", qe), mn("onPaneClick", de), (j, _) => (y(), Be(Tu(qt)));
  }
}), o_ = {
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
    let t = e, n = Mt("requestUpdate"), i = Mt("onPaneAdd"), a = Mt("horizontal"), r = Mt("onPaneRemove"), o = Mt("onPaneClick"), s = ga()?.uid, u = Mt("indexedPanes"), h = H(() => u.value[s]), d = /* @__PURE__ */ Ne(null), m = H(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), C.value);
    }), C = H(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = H(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), x = H(() => {
      let A = h.value?.size ?? (t.size === void 0 ? void 0 : m.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return nt(() => m.value, (A) => n({
      uid: s,
      size: A
    })), nt(() => C.value, (A) => n({
      uid: s,
      min: A
    })), nt(() => E.value, (A) => n({
      uid: s,
      max: A
    })), Fi(() => {
      i({
        id: s,
        el: d.value,
        min: C.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : m.value,
        size: m.value
      });
    }), Wa(() => r(s)), (A, O) => (y(), w("div", {
      ref_key: "paneEl",
      ref: d,
      class: "splitpanes__pane",
      onClick: O[0] ||= (F) => v(o)(F, A._.uid),
      style: ln(x.value)
    }, [Fe(A.$slots, "default")], 4));
  }
}, s_ = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", l_ = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", c_ = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", u_ = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Iu = 1024, zp = Iu / 2, Ls = (e) => document.documentElement.clientWidth < e, Up = /* @__PURE__ */ Ne(Ls(Iu)), Bp = /* @__PURE__ */ Ne(Ls(zp));
window.addEventListener("resize", () => {
  Up.value = Ls(Iu), Bp.value = Ls(zp);
}, { passive: !0 });
function _o() {
  return /* @__PURE__ */ Jr(Up);
}
function d_() {
  return /* @__PURE__ */ Jr(Bp);
}
class f_ {
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
    return g("", t, n, void 0, { bundle: this.bundle });
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
    return vn("", t, n, i, a, { bundle: this.bundle });
  }
}
class h_ {
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
    return this.setLanguage(Ll().replace("-", "_"));
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
    const t = new f_((n) => My(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function p_() {
  return new h_();
}
const jp = p_().detectLanguage().build(), Tt = (...e) => jp.gettext(...e);
function Mi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Ll() || !i)
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
const v_ = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], g_ = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], m_ = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], b_ = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], y_ = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], __ = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], w_ = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], S_ = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], C_ = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const T_ = /* @__PURE__ */ Symbol(""), [E_] = window.OC?.config?.version?.split(".") ?? [], Hp = Number.parseInt(E_ ?? "35"), A_ = Hp < 32, zi = Hp < 34, k_ = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function O_() {
  return Mt(k_, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, x_ = { class: "button-vue__wrapper" }, N_ = { class: "button-vue__icon" }, L_ = { class: "button-vue__text" }, R_ = /* @__PURE__ */ Lt({
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
    const n = e, i = t, { formBoxItemClass: a } = O_(), r = Mt(T_, null) !== null, o = H(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), s = H(() => o.value === "button" && typeof n.pressed == "boolean"), u = H(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), h = H(() => u.value.startsWith("tertiary")), d = H(() => n.alignment.split("-")[0]), m = H(() => n.alignment.includes("-")), C = Mt("NcPopover:trigger:attrs", () => ({}), !1), E = H(() => C()), x = H(() => {
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
          ...E.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function A(O) {
      s.value && i("update:pressed", !n.pressed), i("click", O);
    }
    return (O, F) => (y(), Be(Tu(o.value), jt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${u.value}`]: u.value,
          "button-vue--tertiary": h.value,
          "button-vue--wide": e.wide,
          [`button-vue--${d.value}`]: d.value !== "center",
          "button-vue--reverse": m.value,
          "button-vue--legacy": v(A_),
          "button-vue--legacy34": v(zi)
        },
        v(a)
      ]],
      "aria-label": e.ariaLabel
    }, x.value, { onClick: A }), {
      default: Le(() => [
        c("span", x_, [
          c("span", N_, [
            Fe(O.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", L_, [
            Fe(O.$slots, "default", {}, () => [
              we(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), jn = /* @__PURE__ */ Qe(R_, [["__scopeId", "data-v-47ce59a3"]]), I_ = ["aria-hidden", "aria-label"], P_ = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, $_ = ["d"], D_ = ["innerHTML"], F_ = /* @__PURE__ */ Lt({
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
    kb((a) => ({
      fb515064: n.value
    }));
    const t = e, n = H(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = H(() => {
      if (!t.svg || t.path)
        return;
      const a = Np.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
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
      }, null, 8, D_)) : (y(), w("svg", P_, [
        c("path", { d: e.path }, null, 8, $_)
      ]))
    ], 10, I_));
  }
}), Rl = /* @__PURE__ */ Qe(F_, [["__scopeId", "data-v-aaedb1c3"]]);
z_();
function M_(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), li("csrf-token-update", { token: e, _internal: !0 }));
}
function z_() {
  Dp("csrf-token-update", ({ token: e, _internal: t }) => {
    t || M_(e);
  });
}
Rp("public").persist().build();
let Ra;
function Of(e, t) {
  return e ? e.getAttribute(t) : null;
}
function U_() {
  if (Ra !== void 0)
    return Ra;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Of(e, "data-user");
  return t === null ? (Ra = null, Ra) : (Ra = {
    uid: t,
    displayName: Of(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ra);
}
var yt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(yt || {});
class B_ {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + yt[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === yt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case yt.Debug:
          console.debug(this.formatMessage(n, yt.Debug, i), i);
          break;
        case yt.Info:
          console.info(this.formatMessage(n, yt.Info, i), i);
          break;
        case yt.Warn:
          console.warn(this.formatMessage(n, yt.Warn, i), i);
          break;
        case yt.Error:
          console.error(this.formatMessage(n, yt.Error, i), i);
          break;
        case yt.Fatal:
        default:
          console.error(this.formatMessage(n, yt.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(yt.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(yt.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(yt.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(yt.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(yt.Fatal, t, Object.assign({}, this.context, n));
  }
}
function j_(e) {
  return new B_(e);
}
class H_ {
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
    const t = U_();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? yt.Warn, window._oc_debug && (t.context.level = yt.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function V_() {
  return new H_(j_);
}
const ha = V_().detectUser().setApp("@nextcloud/vue").build();
function K_(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Vp = "missing-app-name";
try {
  Vp = "library";
} catch {
  ha.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const G_ = Vp;
let W_ = "";
try {
  W_ = "0.1.0-alpha.171";
} catch {
  ha.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Kp() {
  return Mt("appName", G_);
}
const q_ = K_(() => {
  const e = Nu("core", "apps", []), t = Kp();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), Yc = Fy();
Mi(w_);
const Y_ = /* @__PURE__ */ Lt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = _o();
    nt(t, n), Fi(() => {
      n(t.value);
    }), Wa(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && li("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (y(), Be(v(jn), {
      "aria-label": v(Tt)("Go back to the list"),
      class: Ae(["app-details-toggle", { "app-details-toggle--mobile": v(t) }]),
      title: v(Tt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Le(() => [
        Se(v(Rl), {
          directional: "",
          path: v(s_)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), X_ = /* @__PURE__ */ Qe(Y_, [["__scopeId", "data-v-a28923a1"]]), xf = Rp("nextcloud").persist().build(), Z_ = Uy().theming?.name ?? "Nextcloud", J_ = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: X_,
    Pane: o_,
    Splitpanes: r_
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
      appName: Kp(),
      localizedAppName: q_(),
      isMobile: _o(),
      isRtl: Yc
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
        return ha.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(Z_), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = a_(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? li("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && li("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      xf.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ha.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(xf.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ha.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, Q_ = {
  key: 0,
  class: "hidden-visually"
}, e1 = { class: "app-content-wrapper__list" }, t1 = {
  key: 1,
  class: "app-content-wrapper"
};
function n1(e, t, n, i, a, r) {
  const o = je("NcAppContentDetailsToggle"), s = je("Pane"), u = je("Splitpanes");
  return y(), w("main", {
    id: "app-content-vue",
    class: Ae(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (y(), w("h1", Q_, p(n.pageHeading), 1)) : B("", !0),
    e.$slots.list ? (y(), w(le, { key: 1 }, [
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
          onClick: De(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : B("", !0),
        Re(c("div", e1, [
          Fe(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [ja, !n.showDetails]
        ]),
        n.showDetails ? Fe(e.$slots, "default", { key: 1 }, void 0, !0) : B("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (y(), w("div", t1, [
        Se(u, {
          horizontal: n.layout === "horizontal-split",
          class: Ae(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Le(() => [
            Se(s, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Le(() => [
                Fe(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            Se(s, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Le(() => [
                Fe(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : B("", !0)
    ], 64)) : B("", !0),
    e.$slots.list ? B("", !0) : Fe(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const i1 = /* @__PURE__ */ Qe(J_, [["render", n1], ["__scopeId", "data-v-51427d61"]]);
var Gp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Rs = /* @__PURE__ */ Gp.join(","), Wp = typeof Element > "u", va = Wp ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Is = !Wp && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Ps = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", o = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Ps(t.parentNode));
  return o;
}, a1 = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, qp = function(t, n, i) {
  if (Ps(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Rs));
  return n && va.call(t, Rs) && a.unshift(t), a = a.filter(i), a;
}, $s = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Ps(o, !1))
      if (o.tagName === "SLOT") {
        var s = o.assignedElements(), u = s.length ? s : o.children, h = $s(u, !0, i);
        i.flatten ? a.push.apply(a, h) : a.push({
          scopeParent: o,
          candidates: h
        });
      } else {
        var d = va.call(o, Rs);
        d && i.filter(o) && (n || !t.includes(o)) && a.push(o);
        var m = o.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(o), C = !Ps(m, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (m && C) {
          var E = $s(m === !0 ? o.children : m.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: o,
            candidates: E
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, Yp = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, sa = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || a1(t)) && !Yp(t) ? 0 : t.tabIndex;
}, r1 = function(t, n) {
  var i = sa(t);
  return i < 0 && n && !Yp(t) ? 0 : i;
}, o1 = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Xp = function(t) {
  return t.tagName === "INPUT";
}, s1 = function(t) {
  return Xp(t) && t.type === "hidden";
}, l1 = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, c1 = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, u1 = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Is(t), i = function(s) {
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
  var r = c1(a, t.form);
  return !r || r === t;
}, d1 = function(t) {
  return Xp(t) && t.type === "radio";
}, f1 = function(t) {
  return d1(t) && !u1(t);
}, h1 = function(t) {
  var n, i = t && Is(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var o, s, u;
    for (r = !!((o = a) !== null && o !== void 0 && (s = o.ownerDocument) !== null && s !== void 0 && s.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !r && a; ) {
      var h, d, m;
      i = Is(a), a = (h = i) === null || h === void 0 ? void 0 : h.host, r = !!((d = a) !== null && d !== void 0 && (m = d.ownerDocument) !== null && m !== void 0 && m.contains(a));
    }
  }
  return r;
}, Nf = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, p1 = function(t, n) {
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
  var u = va.call(t, "details>summary:first-of-type"), h = u ? t.parentElement : t;
  if (va.call(h, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var d = t; t; ) {
        var m = t.parentElement, C = Is(t);
        if (m && !m.shadowRoot && a(m) === !0)
          return Nf(t);
        t.assignedSlot ? t = t.assignedSlot : !m && C !== t.ownerDocument ? t = C.host : t = m;
      }
      t = d;
    }
    if (h1(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Nf(t);
  return !1;
}, v1 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return va.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Ds = function(t, n) {
  return !(n.disabled || s1(n) || p1(n, t) || // For a details element with a summary, the summary element gets the focus
  l1(n) || v1(n));
}, Xc = function(t, n) {
  return !(f1(n) || sa(n) < 0 || !Ds(t, n));
}, g1 = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Zp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, s = o ? a.scopeParent : a, u = r1(s, o), h = o ? Zp(a.candidates) : s;
    u === 0 ? o ? n.push.apply(n, h) : n.push(s) : i.push({
      documentOrder: r,
      tabIndex: u,
      item: a,
      isScope: o,
      content: h
    });
  }), i.sort(o1).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, m1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = $s([t], n.includeContainer, {
    filter: Xc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: g1
  }) : i = qp(t, n.includeContainer, Xc.bind(null, n)), Zp(i);
}, b1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = $s([t], n.includeContainer, {
    filter: Ds.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = qp(t, n.includeContainer, Ds.bind(null, n)), i;
}, Ia = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return va.call(t, Rs) === !1 ? !1 : Xc(n, t);
}, y1 = /* @__PURE__ */ Gp.concat("iframe:not([inert]):not([inert] *)").join(","), Tc = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return va.call(t, y1) === !1 ? !1 : Ds(n, t);
};
function Zc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function _1(e) {
  if (Array.isArray(e)) return Zc(e);
}
function Lf(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Jp(e)) || t) {
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
  var r, o = !0, s = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var u = n.next();
      return o = u.done, u;
    },
    e: function(u) {
      s = !0, r = u;
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
function w1(e, t, n) {
  return (t = A1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function S1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function C1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function If(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rf(Object(n), !0).forEach(function(i) {
      w1(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rf(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function T1(e) {
  return _1(e) || S1(e) || Jp(e) || C1();
}
function E1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function A1(e) {
  var t = E1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Jp(e, t) {
  if (e) {
    if (typeof e == "string") return Zc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zc(e, t) : void 0;
  }
}
var ai = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = ai.getActiveTrap(t);
    n !== i && ai.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), ai.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = ai.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = ai.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, k1 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, O1 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, zr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, x1 = function(t) {
  return zr(t) && !t.shiftKey;
}, N1 = function(t) {
  return zr(t) && t.shiftKey;
}, Pf = function(t) {
  return setTimeout(t, 0);
}, Ar = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, is = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, L1 = [], Pu = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || L1, r = If({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: x1,
    isKeyBackward: N1
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
  }, s, u = function($, M, X) {
    return $ && $[M] !== void 0 ? $[M] : r[X || M];
  }, h = function($, M) {
    var X = typeof M?.composedPath == "function" ? M.composedPath() : void 0;
    return o.containerGroups.findIndex(function(oe) {
      var ne = oe.container, ve = oe.tabbableNodes;
      return ne.contains($) || X?.includes(ne) || ve.find(function(ge) {
        return ge === $;
      });
    });
  }, d = function($) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = M.hasFallback, oe = X === void 0 ? !1 : X, ne = M.params, ve = ne === void 0 ? [] : ne, ge = r[$];
    if (typeof ge == "function" && (ge = ge.apply(void 0, T1(ve))), ge === !0 && (ge = void 0), !ge) {
      if (ge === void 0 || ge === !1)
        return ge;
      throw new Error("`".concat($, "` was specified but was not a node, or did not return a node"));
    }
    var _e = ge;
    if (typeof ge == "string") {
      try {
        _e = i.querySelector(ge);
      } catch (pe) {
        throw new Error("`".concat($, '` appears to be an invalid selector; error="').concat(pe.message, '"'));
      }
      if (!_e && !oe)
        throw new Error("`".concat($, "` as selector refers to no known node"));
    }
    return _e;
  }, m = function($) {
    var M = $.activeElement;
    return M ? M.shadowRoot && M.shadowRoot.activeElement !== null ? m(M.shadowRoot) : M : null;
  }, C = function() {
    var $ = d("initialFocus", {
      hasFallback: !0
    });
    if ($ === !1)
      return !1;
    if ($ === void 0 || $ && !Tc($, r.tabbableOptions)) {
      var M = m(i);
      if (h(M) >= 0)
        $ = M;
      else {
        var X = o.tabbableGroups[0], oe = X && X.firstTabbableNode;
        $ = oe || d("fallbackFocus");
      }
    } else $ === null && ($ = d("fallbackFocus"));
    if (!$)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return $;
  }, E = function() {
    if (o.containerGroups = o.containers.map(function($) {
      var M = m1($, r.tabbableOptions), X = b1($, r.tabbableOptions), oe = M.length > 0 ? M[0] : void 0, ne = M.length > 0 ? M[M.length - 1] : void 0, ve = X.find(function(pe) {
        return Ia(pe);
      }), ge = X.slice().reverse().find(function(pe) {
        return Ia(pe);
      }), _e = !!M.find(function(pe) {
        return sa(pe) > 0;
      });
      return {
        container: $,
        tabbableNodes: M,
        focusableNodes: X,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: _e,
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
        firstDomTabbableNode: ve,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: ge,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(qe) {
          var Ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ut = M.indexOf(qe);
          return ut < 0 ? Ee ? X.slice(X.indexOf(qe) + 1).find(function(dt) {
            return Ia(dt);
          }) : X.slice(0, X.indexOf(qe)).reverse().find(function(dt) {
            return Ia(dt);
          }) : M[ut + (Ee ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function($) {
      return $.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !d("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function($) {
      return $.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, x = function($) {
    if ($ !== !1 && $ !== m(document)) {
      if (!$ || !$.focus) {
        x(C());
        return;
      }
      $.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = $, k1($) && $.select();
    }
  }, A = function($) {
    var M = d("setReturnFocus", {
      params: [$]
    });
    return M || (M === !1 ? !1 : $);
  }, O = function($) {
    var M = $.target, X = $.event, oe = $.isBackward, ne = oe === void 0 ? !1 : oe;
    M = M || is(X), E();
    var ve = null;
    if (o.tabbableGroups.length > 0) {
      var ge = h(M, X), _e = ge >= 0 ? o.containerGroups[ge] : void 0;
      if (ge < 0)
        ne ? ve = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : ve = o.tabbableGroups[0].firstTabbableNode;
      else if (ne) {
        var pe = o.tabbableGroups.findIndex(function(ft) {
          var Ve = ft.firstTabbableNode;
          return M === Ve;
        });
        if (pe < 0 && (_e.container === M || Tc(M, r.tabbableOptions) && !Ia(M, r.tabbableOptions) && !_e.nextTabbableNode(M, !1)) && (pe = ge), pe >= 0) {
          var qe = pe === 0 ? o.tabbableGroups.length - 1 : pe - 1, Ee = o.tabbableGroups[qe];
          ve = sa(M) >= 0 ? Ee.lastTabbableNode : Ee.lastDomTabbableNode;
        } else zr(X) || (ve = _e.nextTabbableNode(M, !1));
      } else {
        var ut = o.tabbableGroups.findIndex(function(ft) {
          var Ve = ft.lastTabbableNode;
          return M === Ve;
        });
        if (ut < 0 && (_e.container === M || Tc(M, r.tabbableOptions) && !Ia(M, r.tabbableOptions) && !_e.nextTabbableNode(M)) && (ut = ge), ut >= 0) {
          var dt = ut === o.tabbableGroups.length - 1 ? 0 : ut + 1, mt = o.tabbableGroups[dt];
          ve = sa(M) >= 0 ? mt.firstTabbableNode : mt.firstDomTabbableNode;
        } else zr(X) || (ve = _e.nextTabbableNode(M));
      }
    } else
      ve = d("fallbackFocus");
    return ve;
  }, F = function($) {
    var M = is($);
    if (!(h(M, $) >= 0)) {
      if (Ar(r.clickOutsideDeactivates, $)) {
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
      Ar(r.allowOutsideClick, $) || $.preventDefault();
    }
  }, z = function($) {
    var M = is($), X = h(M, $) >= 0;
    if (X || M instanceof Document)
      X && (o.mostRecentlyFocusedNode = M);
    else {
      $.stopImmediatePropagation();
      var oe, ne = !0;
      if (o.mostRecentlyFocusedNode)
        if (sa(o.mostRecentlyFocusedNode) > 0) {
          var ve = h(o.mostRecentlyFocusedNode), ge = o.containerGroups[ve].tabbableNodes;
          if (ge.length > 0) {
            var _e = ge.findIndex(function(pe) {
              return pe === o.mostRecentlyFocusedNode;
            });
            _e >= 0 && (r.isKeyForward(o.recentNavEvent) ? _e + 1 < ge.length && (oe = ge[_e + 1], ne = !1) : _e - 1 >= 0 && (oe = ge[_e - 1], ne = !1));
          }
        } else
          o.containerGroups.some(function(pe) {
            return pe.tabbableNodes.some(function(qe) {
              return sa(qe) > 0;
            });
          }) || (ne = !1);
      else
        ne = !1;
      ne && (oe = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), x(oe || o.mostRecentlyFocusedNode || C());
    }
    o.recentNavEvent = void 0;
  }, W = function($) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = $;
    var X = O({
      event: $,
      isBackward: M
    });
    X && (zr($) && $.preventDefault(), x(X));
  }, P = function($) {
    (r.isKeyForward($) || r.isKeyBackward($)) && W($, r.isKeyBackward($));
  }, N = function($) {
    O1($) && Ar(r.escapeDeactivates, $) !== !1 && ($.preventDefault(), s.deactivate());
  }, de = function($) {
    var M = is($);
    h(M, $) >= 0 || Ar(r.clickOutsideDeactivates, $) || Ar(r.allowOutsideClick, $) || ($.preventDefault(), $.stopImmediatePropagation());
  }, J = function() {
    if (o.active) {
      ai.activateTrap(a, s);
      var $;
      return r.delayInitialFocus ? $ = new Promise(function(M) {
        o.delayInitialFocusTimer = Pf(function() {
          x(C()), M();
        });
      }) : x(C()), i.addEventListener("focusin", z, !0), i.addEventListener("mousedown", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", de, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", P, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", N), $;
    }
  }, fe = function($) {
    o.active && !o.paused && s._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var M = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), oe = Lf($), ne;
    try {
      for (oe.s(); !(ne = oe.n()).done; ) {
        var ve = ne.value;
        M.add(ve);
        for (var ge = typeof ShadowRoot < "u" && ve.getRootNode() instanceof ShadowRoot, _e = ve; _e; ) {
          M.add(_e);
          var pe = _e.parentElement, qe = [];
          pe ? qe = pe.children : !pe && ge && (qe = _e.getRootNode().children, pe = _e.getRootNode().host, ge = typeof ShadowRoot < "u" && pe.getRootNode() instanceof ShadowRoot);
          var Ee = Lf(qe), ut;
          try {
            for (Ee.s(); !(ut = Ee.n()).done; ) {
              var dt = ut.value;
              X.add(dt);
            }
          } catch (mt) {
            Ee.e(mt);
          } finally {
            Ee.f();
          }
          _e = pe;
        }
      }
    } catch (mt) {
      oe.e(mt);
    } finally {
      oe.f();
    }
    M.forEach(function(mt) {
      X.delete(mt);
    }), o.adjacentElements = X;
  }, Y = function() {
    if (o.active)
      return i.removeEventListener("focusin", z, !0), i.removeEventListener("mousedown", F, !0), i.removeEventListener("touchstart", F, !0), i.removeEventListener("click", de, !0), i.removeEventListener("keydown", P, !0), i.removeEventListener("keydown", N), s;
  }, se = function($) {
    var M = o.mostRecentlyFocusedNode;
    if (M) {
      var X = $.some(function(ne) {
        var ve = Array.from(ne.removedNodes);
        return ve.some(function(ge) {
          return ge === M || typeof ge.contains == "function" && ge.contains(M);
        });
      });
      if (X && o.containers.some(function(ne) {
        return ne?.isConnected;
      })) {
        E();
        var oe = C();
        x(oe);
      }
    }
  }, ye = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, Q = function() {
    ye && (ye.disconnect(), o.active && !o.paused && o.containers.map(function($) {
      ye.observe($, {
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
    activate: function($) {
      if (o.active)
        return this;
      var M = u($, "onActivate"), X = u($, "onPostActivate"), oe = u($, "checkCanFocusTrap"), ne = ai.getActiveTrap(a), ve = !1;
      if (ne && !ne.paused) {
        var ge;
        (ge = ne._setSubtreeIsolation) === null || ge === void 0 || ge.call(ne, !1), ve = !0;
      }
      try {
        oe || E(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = m(i), M?.({
          trap: s
        });
        var _e = function() {
          oe && E();
          var Ee = function() {
            s._setSubtreeIsolation(!0), Q(), X?.({
              trap: s
            });
          }, ut = J();
          ut ? ut.then(Ee) : Ee();
        };
        if (oe)
          return oe(o.containers.concat()).then(_e, _e), this;
        _e();
      } catch (qe) {
        if (ne === ai.getActiveTrap(a) && ve) {
          var pe;
          (pe = ne._setSubtreeIsolation) === null || pe === void 0 || pe.call(ne, !0);
        }
        throw qe;
      }
      return this;
    },
    deactivate: function($) {
      if (!o.active)
        return this;
      var M = If({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, $);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || s._setSubtreeIsolation(!1), o.alreadySilent.clear(), Y(), o.active = !1, o.paused = !1, Q(), ai.deactivateTrap(a, s);
      var X = u(M, "onDeactivate"), oe = u(M, "onPostDeactivate"), ne = u(M, "checkCanReturnFocus"), ve = u(M, "delayReturnFocus"), ge = u(M, "returnFocus", "returnFocusOnDeactivate");
      X?.({
        trap: s
      });
      var _e = function() {
        ge && x(A(o.nodeFocusedBeforeActivation)), oe?.({
          trap: s
        });
      }, pe = function() {
        ve && ge ? Pf(_e) : _e();
      };
      return ge && ne ? (ne(A(o.nodeFocusedBeforeActivation)).then(pe, pe), this) : (pe(), this);
    },
    pause: function($) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, $)) : this;
    },
    unpause: function($) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, $)) : this;
    },
    updateContainerElements: function($) {
      var M = [].concat($).filter(Boolean);
      return o.containers = M.map(function(X) {
        return typeof X == "string" ? i.querySelector(X) : X;
      }), r.isolateSubtrees && fe(o.containers), o.active && (E(), o.paused || s._setSubtreeIsolation(!0)), Q(), this;
    }
  }, Object.defineProperties(s, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function($, M) {
        if (o.paused === $)
          return this;
        if (o.paused = $, $) {
          var X = u(M, "onPause"), oe = u(M, "onPostPause");
          X?.({
            trap: s
          }), Y(), s._setSubtreeIsolation(!1), Q(), oe?.({
            trap: s
          });
        } else {
          var ne = u(M, "onUnpause"), ve = u(M, "onPostUnpause");
          ne?.({
            trap: s
          });
          var ge = function() {
            E();
            var pe = function() {
              s._setSubtreeIsolation(!0), Q(), ve?.({
                trap: s
              });
            }, qe = J();
            qe ? qe.then(pe) : pe();
          };
          ge();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function($) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(M) {
          var X;
          $ ? r.isolateSubtrees === "aria-hidden" ? ((M.ariaHidden === "true" || ((X = M.getAttribute("aria-hidden")) === null || X === void 0 ? void 0 : X.toLowerCase()) === "true") && o.alreadySilent.add(M), M.setAttribute("aria-hidden", "true")) : ((M.inert || M.hasAttribute("inert")) && o.alreadySilent.add(M), M.setAttribute("inert", !0)) : o.alreadySilent.has(M) || (r.isolateSubtrees === "aria-hidden" ? M.removeAttribute("aria-hidden") : M.removeAttribute("inert"));
        });
      }
    }
  }), s.updateContainerElements(t), s;
};
const Qp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), R1 = /* @__PURE__ */ Lt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Qp]: {
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
function I1(e, t, n, i, a, r) {
  return y(), w("ul", {
    ref: "list",
    class: Ae(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    c("div", {
      class: Ae(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: ln(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Fe(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const ev = /* @__PURE__ */ Qe(R1, [["render", I1], ["__scopeId", "data-v-3e73e246"]]);
function so() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function P1() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...so()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === so().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const tv = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), nv = /* @__PURE__ */ Symbol.for("NcContent:selector");
Mi(b_);
const $1 = { class: "app-navigation-toggle-wrapper" }, D1 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = np(e, "open"), n = H(() => t.value ? Tt("Close navigation") : Tt("Open navigation"));
    return (i, a) => (y(), w("div", $1, [
      Se(v(jn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Le(() => [
          Se(Rl, {
            path: v(u_),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), F1 = /* @__PURE__ */ Qe(D1, [["__scopeId", "data-v-e8177cc7"]]), M1 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], z1 = { class: "app-navigation__search" }, U1 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Mt(
      tv,
      () => vb(),
      !1
    ), a = wm("appNavigationContainer"), r = _o(), o = /* @__PURE__ */ Ne(!r.value), s = H(() => r.value && o.value);
    fm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), nt(r, () => {
      o.value = !r.value;
    }), nt(s, () => {
      d();
    }), Fi(() => {
      i(!0), Dp("toggle-navigation", h), li("navigation-toggled", {
        open: o.value
      }), n = Pu(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), u(!1)), !1),
        fallbackFocus: a.value,
        trapStack: so(),
        escapeDeactivates: !1
      }), d();
    }), mo(() => {
      i(!1), Jy("toggle-navigation", h), n.deactivate();
    });
    function u(C) {
      if (o.value === C) {
        li("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = C === void 0 ? !o.value : C;
      const E = getComputedStyle(document.body), x = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        li("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * x);
    }
    function h({ open: C }) {
      return u(C);
    }
    function d() {
      s.value ? n.activate() : n.deactivate();
    }
    function m() {
      r.value && u(!1);
    }
    return (C, E) => (y(), w("div", {
      ref: "appNavigationContainer",
      class: Ae(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": v(zi)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: ot(m, ["esc"])
      }, [
        c("div", z1, [
          Fe(C.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Ae(["app-navigation__body", { "app-navigation__body--no-list": !C.$slots.list }])
        }, [
          Fe(C.$slots, "default", {}, void 0, !0)
        ], 2),
        C.$slots.list ? (y(), Be(ev, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Le(() => [
            Fe(C.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : B("", !0),
        Fe(C.$slots, "footer", {}, void 0, !0)
      ], 40, M1),
      Se(F1, {
        open: o.value,
        "onUpdate:open": u
      }, null, 8, ["open"])
    ], 2));
  }
}), B1 = /* @__PURE__ */ Qe(U1, [["__scopeId", "data-v-37908cd4"]]), j1 = {
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
}, H1 = ["aria-hidden", "aria-label"], V1 = ["fill", "width", "height"], K1 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, G1 = { key: 0 };
function W1(e, t, n, i, a, r) {
  return y(), w("span", jt(e.$attrs, {
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
      c("path", K1, [
        n.title ? (y(), w("title", G1, p(n.title), 1)) : B("", !0)
      ])
    ], 8, V1))
  ], 16, H1);
}
const q1 = /* @__PURE__ */ Qe(j1, [["render", W1]]), Y1 = {
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
}, X1 = ["aria-hidden", "aria-label"], Z1 = ["fill", "width", "height"], J1 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, Q1 = { key: 0 };
function e0(e, t, n, i, a, r) {
  return y(), w("span", jt(e.$attrs, {
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
      c("path", J1, [
        n.title ? (y(), w("title", Q1, p(n.title), 1)) : B("", !0)
      ])
    ], 8, Z1))
  ], 16, X1);
}
const t0 = /* @__PURE__ */ Qe(Y1, [["render", e0]]), n0 = {
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
}, i0 = ["aria-hidden", "aria-label"], a0 = ["fill", "width", "height"], r0 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, o0 = { key: 0 };
function s0(e, t, n, i, a, r) {
  return y(), w("span", jt(e.$attrs, {
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
      c("path", r0, [
        n.title ? (y(), w("title", o0, p(n.title), 1)) : B("", !0)
      ])
    ], 8, a0))
  ], 16, i0);
}
const iv = /* @__PURE__ */ Qe(n0, [["render", s0]]), l0 = {
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
}, c0 = ["aria-hidden", "aria-label"], u0 = ["fill", "width", "height"], d0 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, f0 = { key: 0 };
function h0(e, t, n, i, a, r) {
  return y(), w("span", jt(e.$attrs, {
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
      c("path", d0, [
        n.title ? (y(), w("title", f0, p(n.title), 1)) : B("", !0)
      ])
    ], 8, u0))
  ], 16, c0);
}
const av = /* @__PURE__ */ Qe(l0, [["render", h0]]);
Mi(g_);
const p0 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: iv,
    IconClose: av,
    NcButton: jn
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
    return { isLegacy34: zi };
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
}, v0 = ["placeholder"];
function g0(e, t, n, i, a, r) {
  const o = je("IconArrowRight"), s = je("NcButton"), u = je("IconClose");
  return y(), w("div", {
    class: Ae(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = De((...h) => r.confirm && r.confirm(...h), ["prevent"])),
      onKeydown: t[2] || (t[2] = ot(De((...h) => r.cancel && r.cancel(...h), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = De(() => {
      }, ["stop", "prevent"]))
    }, [
      Re(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (h) => r.valueModel = h),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, v0), [
        [gt, r.valueModel]
      ]),
      Se(s, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: De(r.confirm, ["stop", "prevent"])
      }, {
        icon: Le(() => [
          Se(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      Se(s, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: De(r.cancel, ["stop", "prevent"])
      }, {
        icon: Le(() => [
          Se(u, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const m0 = /* @__PURE__ */ Qe(p0, [["render", g0], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Il() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const $u = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), rv = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), b0 = {
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
}, ov = {
  mixins: [b0],
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
      from: rv
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
}, y0 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Rl
  },
  mixins: [ov],
  inject: {
    isInSemanticMenu: {
      from: $u,
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
      mdiCheck: l_,
      mdiChevronRight: c_
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
}, _0 = ["role"], w0 = ["aria-label", "disabled", "title", "type"], S0 = { class: "action-button__longtext-wrapper" }, C0 = {
  key: 0,
  class: "action-button__name"
}, T0 = ["textContent"], E0 = {
  key: 2,
  class: "action-button__text"
}, A0 = ["textContent"], k0 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function O0(e, t, n, i, a, r) {
  const o = je("NcIconSvgWrapper");
  return y(), w("li", {
    class: Ae(["action", { "action--disabled": n.disabled }]),
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
      onClick: t[0] || (t[0] = (...s) => r.handleClick && r.handleClick(...s))
    }), [
      Fe(e.$slots, "icon", {}, () => [
        c("span", {
          class: Ae([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: ln({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", S0, [
        e.name ? (y(), w("strong", C0, p(e.name), 1)) : B("", !0),
        e.isLongText ? (y(), w("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, T0)) : (y(), w("span", E0, p(e.text), 1)),
        n.description ? (y(), w("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, A0)) : B("", !0)
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
      }, null, 8, ["path"])) : r.isChecked === !1 ? (y(), w("span", k0)) : B("", !0),
      B("", !0)
    ], 16, w0)
  ], 10, _0);
}
const x0 = /* @__PURE__ */ Qe(y0, [["render", O0], ["__scopeId", "data-v-6c2daf4e"]]);
function N0(e, t = {}) {
  const n = P1();
  nt(e, () => {
    oi(t.disabled) || (oi(e) ? n.pause() : n.unpause());
  }), mo(() => {
    n.unpause();
  });
}
const L0 = ["top", "right", "bottom", "left"], $f = ["start", "end"], Df = /* @__PURE__ */ L0.reduce((e, t) => e.concat(t, t + "-" + $f[0], t + "-" + $f[1]), []), lo = Math.min, Jc = Math.max, R0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function sv(e, t, n) {
  return Jc(e, lo(t, n));
}
function ma(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function fi(e) {
  return e.split("-")[0];
}
function xn(e) {
  return e.split("-")[1];
}
function lv(e) {
  return e === "x" ? "y" : "x";
}
function Du(e) {
  return e === "y" ? "height" : "width";
}
function ri(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Fu(e) {
  return lv(ri(e));
}
function cv(e, t, n) {
  n === void 0 && (n = !1);
  const i = xn(e), a = Fu(e), r = Du(a);
  let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Ms(o)), [o, Ms(o)];
}
function I0(e) {
  const t = Ms(e);
  return [Fs(e), t, Fs(t)];
}
function Fs(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Ff = ["left", "right"], Mf = ["right", "left"], P0 = ["top", "bottom"], $0 = ["bottom", "top"];
function D0(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Mf : Ff : t ? Ff : Mf;
    case "left":
    case "right":
      return t ? P0 : $0;
    default:
      return [];
  }
}
function F0(e, t, n, i) {
  const a = xn(e);
  let r = D0(fi(e), n === "start", i);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(Fs)))), r;
}
function Ms(e) {
  const t = fi(e);
  return R0[t] + e.slice(t.length);
}
function M0(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function uv(e) {
  return typeof e != "number" ? M0(e) : {
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
function zf(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ri(t), o = Fu(t), s = Du(o), u = fi(t), h = r === "y", d = i.x + i.width / 2 - a.width / 2, m = i.y + i.height / 2 - a.height / 2, C = i[s] / 2 - a[s] / 2;
  let E;
  switch (u) {
    case "top":
      E = {
        x: d,
        y: i.y - a.height
      };
      break;
    case "bottom":
      E = {
        x: d,
        y: i.y + i.height
      };
      break;
    case "right":
      E = {
        x: i.x + i.width,
        y: m
      };
      break;
    case "left":
      E = {
        x: i.x - a.width,
        y: m
      };
      break;
    default:
      E = {
        x: i.x,
        y: i.y
      };
  }
  const x = xn(t);
  return x && (E[o] += C * (x === "end" ? 1 : -1) * (n && h ? -1 : 1)), E;
}
async function z0(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: i,
    y: a,
    platform: r,
    rects: o,
    elements: s,
    strategy: u
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: m = "floating",
    altBoundary: C = !1,
    padding: E = 0
  } = ma(t, e), x = uv(E), O = s[C ? m === "floating" ? "reference" : "floating" : m], F = Ur(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: h,
    rootBoundary: d,
    strategy: u
  })), z = m === "floating" ? {
    x: i,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, W = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), P = await (r.isElement == null ? void 0 : r.isElement(W)) && await (r.getScale == null ? void 0 : r.getScale(W)) || {
    x: 1,
    y: 1
  }, N = Ur(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: z,
    offsetParent: W,
    strategy: u
  }) : z);
  return {
    top: (F.top - N.top + x.top) / P.y,
    bottom: (N.bottom - F.bottom + x.bottom) / P.y,
    left: (F.left - N.left + x.left) / P.x,
    right: (N.right - F.right + x.right) / P.x
  };
}
const U0 = 50, B0 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = n, s = o.detectOverflow ? o : {
    ...o,
    detectOverflow: z0
  }, u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: d,
    y: m
  } = zf(h, i, u), C = i, E = 0;
  const x = {};
  for (let A = 0; A < r.length; A++) {
    const O = r[A];
    if (!O)
      continue;
    const {
      name: F,
      fn: z
    } = O, {
      x: W,
      y: P,
      data: N,
      reset: de
    } = await z({
      x: d,
      y: m,
      initialPlacement: i,
      placement: C,
      strategy: a,
      middlewareData: x,
      rects: h,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = W ?? d, m = P ?? m, x[F] = {
      ...x[F],
      ...N
    }, de && E < U0 && (E++, typeof de == "object" && (de.placement && (C = de.placement), de.rects && (h = de.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : de.rects), {
      x: d,
      y: m
    } = zf(h, C, u)), A = -1);
  }
  return {
    x: d,
    y: m,
    placement: C,
    strategy: a,
    middlewareData: x
  };
}, j0 = (e) => ({
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
      middlewareData: u
    } = t, {
      element: h,
      padding: d = 0
    } = ma(e, t) || {};
    if (h == null)
      return {};
    const m = uv(d), C = {
      x: n,
      y: i
    }, E = Fu(a), x = Du(E), A = await o.getDimensions(h), O = E === "y", F = O ? "top" : "left", z = O ? "bottom" : "right", W = O ? "clientHeight" : "clientWidth", P = r.reference[x] + r.reference[E] - C[E] - r.floating[x], N = C[E] - r.reference[E], de = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(h));
    let J = de ? de[W] : 0;
    (!J || !await (o.isElement == null ? void 0 : o.isElement(de))) && (J = s.floating[W] || r.floating[x]);
    const fe = P / 2 - N / 2, Y = J / 2 - A[x] / 2 - 1, se = lo(m[F], Y), ye = lo(m[z], Y), Q = J - A[x] - ye, ie = J / 2 - A[x] / 2 + fe, $ = sv(se, ie, Q), M = !u.arrow && xn(a) != null && ie !== $ && r.reference[x] / 2 - (ie < se ? se : ye) - A[x] / 2 < 0, X = M ? ie < se ? ie - se : ie - Q : 0;
    return {
      [E]: C[E] + X,
      data: {
        [E]: $,
        centerOffset: ie - $ - X,
        ...M && {
          alignmentOffset: X
        }
      },
      reset: M
    };
  }
});
function H0(e, t, n) {
  return (e ? [...n.filter((a) => xn(a) === e), ...n.filter((a) => xn(a) !== e)] : n.filter((a) => fi(a) === a)).filter((a) => e ? xn(a) === e || (t ? Fs(a) !== a : !1) : !0);
}
const V0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, i, a;
      const {
        rects: r,
        middlewareData: o,
        placement: s,
        platform: u,
        elements: h
      } = t, {
        crossAxis: d = !1,
        alignment: m,
        allowedPlacements: C = Df,
        autoAlignment: E = !0,
        ...x
      } = ma(e, t), A = m !== void 0 || C === Df ? H0(m || null, E, C) : C, O = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, F = A[O];
      if (F == null)
        return {};
      if (s !== F)
        return {
          reset: {
            placement: A[0]
          }
        };
      const z = await u.detectOverflow(t, x), W = cv(F, r, await (u.isRTL == null ? void 0 : u.isRTL(h.floating))), P = [z[fi(F)], z[W[0]], z[W[1]]], N = [...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: F,
        overflows: P
      }], de = A[O + 1];
      if (de)
        return {
          data: {
            index: O + 1,
            overflows: N
          },
          reset: {
            placement: de
          }
        };
      const J = N.map((se) => {
        const ye = xn(se.placement);
        return [se.placement, ye && d ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((Q, ie) => Q + ie, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, ye) => se[1] - ye[1]), Y = ((a = J.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        xn(se[0]) ? 2 : 3
      ).every((ye) => ye <= 0))[0]) == null ? void 0 : a[0]) || J[0][0];
      return Y !== s ? {
        data: {
          index: O + 1,
          overflows: N
        },
        reset: {
          placement: Y
        }
      } : {};
    }
  };
}, K0 = function(e) {
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
        platform: u,
        elements: h
      } = t, {
        mainAxis: d = !0,
        crossAxis: m = !0,
        fallbackPlacements: C,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: A = !0,
        ...O
      } = ma(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const F = fi(a), z = ri(s), W = fi(s) === s, P = await (u.isRTL == null ? void 0 : u.isRTL(h.floating)), N = C || (W || !A ? [Ms(s)] : I0(s)), de = x !== "none";
      !C && de && N.push(...F0(s, A, x, P));
      const J = [s, ...N], fe = await u.detectOverflow(t, O), Y = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (d && Y.push(fe[F]), m) {
        const $ = cv(a, o, P);
        Y.push(fe[$[0]], fe[$[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: Y
      }], !Y.every(($) => $ <= 0)) {
        var ye, Q;
        const $ = (((ye = r.flip) == null ? void 0 : ye.index) || 0) + 1, M = J[$];
        if (M && (!(m === "alignment" ? z !== ri(M) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ne) => ri(ne.placement) === z ? ne.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: se
            },
            reset: {
              placement: M
            }
          };
        let X = (Q = se.filter((oe) => oe.overflows[0] <= 0).sort((oe, ne) => oe.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!X)
          switch (E) {
            case "bestFit": {
              var ie;
              const oe = (ie = se.filter((ne) => {
                if (de) {
                  const ve = ri(ne.placement);
                  return ve === z || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ve === "y";
                }
                return !0;
              }).map((ne) => [ne.placement, ne.overflows.filter((ve) => ve > 0).reduce((ve, ge) => ve + ge, 0)]).sort((ne, ve) => ne[1] - ve[1])[0]) == null ? void 0 : ie[0];
              oe && (X = oe);
              break;
            }
            case "initialPlacement":
              X = s;
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
}, G0 = /* @__PURE__ */ new Set(["left", "top"]);
async function W0(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = fi(n), s = xn(n), u = ri(n) === "y", h = G0.has(o) ? -1 : 1, d = r && u ? -1 : 1, m = ma(t, e);
  let {
    mainAxis: C,
    crossAxis: E,
    alignmentAxis: x
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return s && typeof x == "number" && (E = s === "end" ? x * -1 : x), u ? {
    x: E * d,
    y: C * h
  } : {
    x: C * h,
    y: E * d
  };
}
const q0 = function(e) {
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
      } = t, u = await W0(t, e);
      return o === ((n = s.offset) == null ? void 0 : n.placement) && (i = s.arrow) != null && i.alignmentOffset ? {} : {
        x: a + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: o
        }
      };
    }
  };
}, Y0 = function(e) {
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
        limiter: u = {
          fn: (z) => {
            let {
              x: W,
              y: P
            } = z;
            return {
              x: W,
              y: P
            };
          }
        },
        ...h
      } = ma(e, t), d = {
        x: n,
        y: i
      }, m = await r.detectOverflow(t, h), C = ri(a), E = lv(C);
      let x = d[E], A = d[C];
      const O = (z, W) => sv(W + m[z === "y" ? "top" : "left"], W, W - m[z === "y" ? "bottom" : "right"]);
      o && (x = O(E, x)), s && (A = O(C, A));
      const F = u.fn({
        ...t,
        [E]: x,
        [C]: A
      });
      return {
        ...F,
        data: {
          x: F.x - n,
          y: F.y - i,
          enabled: {
            [E]: o,
            [C]: s
          }
        }
      };
    }
  };
}, X0 = function(e) {
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
      } = ma(e, t), u = await a.detectOverflow(t, s), h = fi(n), d = xn(n), m = ri(n) === "y", {
        width: C,
        height: E
      } = i.floating;
      let x, A;
      h === "top" || h === "bottom" ? (x = h, A = d === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = h, x = d === "end" ? "top" : "bottom");
      const O = E - u.top - u.bottom, F = C - u.left - u.right, z = lo(E - u[x], O), W = lo(C - u[A], F), P = t.middlewareData.shift, N = !P;
      let de = z, J = W;
      P != null && P.enabled.x && (J = F), P != null && P.enabled.y && (de = O), N && !d && (m ? J = C - 2 * Jc(u.left, u.right) : de = E - 2 * Jc(u.top, u.bottom)), await o({
        ...t,
        availableWidth: J,
        availableHeight: de
      });
      const fe = await a.getDimensions(r.floating);
      return C !== fe.width || E !== fe.height ? {
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
function Hn(e) {
  return yn(e).getComputedStyle(e);
}
const Uf = Math.min, Br = Math.max, zs = Math.round;
function dv(e) {
  const t = Hn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = zs(n) !== a || zs(i) !== r;
  return o && (n = a, i = r), { width: n, height: i, fallback: o };
}
function Di(e) {
  return hv(e) ? (e.nodeName || "").toLowerCase() : "";
}
let as;
function fv() {
  if (as) return as;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (as = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), as) : navigator.userAgent;
}
function Vn(e) {
  return e instanceof yn(e).HTMLElement;
}
function Li(e) {
  return e instanceof yn(e).Element;
}
function hv(e) {
  return e instanceof yn(e).Node;
}
function Bf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof yn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Pl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Hn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function Z0(e) {
  return ["table", "td", "th"].includes(Di(e));
}
function Qc(e) {
  const t = /firefox/i.test(fv()), n = Hn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function pv() {
  return !/^((?!chrome|android).)*safari/i.test(fv());
}
function Mu(e) {
  return ["html", "body", "#document"].includes(Di(e));
}
function vv(e) {
  return Li(e) ? e : e.contextElement;
}
const gv = { x: 1, y: 1 };
function Ka(e) {
  const t = vv(e);
  if (!Vn(t)) return gv;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = dv(t);
  let o = (r ? zs(n.width) : n.width) / i, s = (r ? zs(n.height) : n.height) / a;
  return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), { x: o, y: s };
}
function co(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = vv(e);
  let u = gv;
  t && (i ? Li(i) && (u = Ka(i)) : u = Ka(e));
  const h = s ? yn(s) : window, d = !pv() && n;
  let m = (o.left + (d && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, C = (o.top + (d && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / u.y, E = o.width / u.x, x = o.height / u.y;
  if (s) {
    const A = yn(s), O = i && Li(i) ? yn(i) : i;
    let F = A.frameElement;
    for (; F && i && O !== A; ) {
      const z = Ka(F), W = F.getBoundingClientRect(), P = getComputedStyle(F);
      W.x += (F.clientLeft + parseFloat(P.paddingLeft)) * z.x, W.y += (F.clientTop + parseFloat(P.paddingTop)) * z.y, m *= z.x, C *= z.y, E *= z.x, x *= z.y, m += W.x, C += W.y, F = yn(F).frameElement;
    }
  }
  return { width: E, height: x, top: C, right: m + E, bottom: C + x, left: m, x: m, y: C };
}
function Ri(e) {
  return ((hv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function $l(e) {
  return Li(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function mv(e) {
  return co(Ri(e)).left + $l(e).scrollLeft;
}
function uo(e) {
  if (Di(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Bf(e) && e.host || Ri(e);
  return Bf(t) ? t.host : t;
}
function bv(e) {
  const t = uo(e);
  return Mu(t) ? t.ownerDocument.body : Vn(t) && Pl(t) ? t : bv(t);
}
function Us(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = bv(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = yn(i);
  return a ? t.concat(r, r.visualViewport || [], Pl(i) ? i : []) : t.concat(i, Us(i));
}
function jf(e, t, n) {
  return t === "viewport" ? Ur((function(i, a) {
    const r = yn(i), o = Ri(i), s = r.visualViewport;
    let u = o.clientWidth, h = o.clientHeight, d = 0, m = 0;
    if (s) {
      u = s.width, h = s.height;
      const C = pv();
      (C || !C && a === "fixed") && (d = s.offsetLeft, m = s.offsetTop);
    }
    return { width: u, height: h, x: d, y: m };
  })(e, n)) : Li(t) ? Ur((function(i, a) {
    const r = co(i, !0, a === "fixed"), o = r.top + i.clientTop, s = r.left + i.clientLeft, u = Vn(i) ? Ka(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * u.x, height: i.clientHeight * u.y, x: s * u.x, y: o * u.y };
  })(t, n)) : Ur((function(i) {
    const a = Ri(i), r = $l(i), o = i.ownerDocument.body, s = Br(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), u = Br(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let h = -r.scrollLeft + mv(i);
    const d = -r.scrollTop;
    return Hn(o).direction === "rtl" && (h += Br(a.clientWidth, o.clientWidth) - s), { width: s, height: u, x: h, y: d };
  })(Ri(e)));
}
function Hf(e) {
  return Vn(e) && Hn(e).position !== "fixed" ? e.offsetParent : null;
}
function Vf(e) {
  const t = yn(e);
  let n = Hf(e);
  for (; n && Z0(n) && Hn(n).position === "static"; ) n = Hf(n);
  return n && (Di(n) === "html" || Di(n) === "body" && Hn(n).position === "static" && !Qc(n)) ? t : n || (function(i) {
    let a = uo(i);
    for (; Vn(a) && !Mu(a); ) {
      if (Qc(a)) return a;
      a = uo(a);
    }
    return null;
  })(e) || t;
}
function J0(e, t, n) {
  const i = Vn(t), a = Ri(t), r = co(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Di(t) !== "body" || Pl(a)) && (o = $l(t)), Vn(t)) {
    const u = co(t, !0);
    s.x = u.x + t.clientLeft, s.y = u.y + t.clientTop;
  } else a && (s.x = mv(a));
  return { x: r.left + o.scrollLeft - s.x, y: r.top + o.scrollTop - s.y, width: r.width, height: r.height };
}
const Q0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(h, d) {
    const m = d.get(h);
    if (m) return m;
    let C = Us(h).filter(((O) => Li(O) && Di(O) !== "body")), E = null;
    const x = Hn(h).position === "fixed";
    let A = x ? uo(h) : h;
    for (; Li(A) && !Mu(A); ) {
      const O = Hn(A), F = Qc(A);
      (x ? F || E : F || O.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = O : C = C.filter(((z) => z !== A)), A = uo(A);
    }
    return d.set(h, C), C;
  })(t, this._c) : [].concat(n), o = [...r, i], s = o[0], u = o.reduce(((h, d) => {
    const m = jf(t, d, a);
    return h.top = Br(m.top, h.top), h.right = Uf(m.right, h.right), h.bottom = Uf(m.bottom, h.bottom), h.left = Br(m.left, h.left), h;
  }), jf(t, s, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Vn(n), r = Ri(n);
  if (n === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Di(n) !== "body" || Pl(r)) && (o = $l(n)), Vn(n))) {
    const h = co(n);
    s = Ka(n), u.x = h.x + n.clientLeft, u.y = h.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - o.scrollLeft * s.x + u.x, y: t.y * s.y - o.scrollTop * s.y + u.y };
}, isElement: Li, getDimensions: function(e) {
  return Vn(e) ? dv(e) : e.getBoundingClientRect();
}, getOffsetParent: Vf, getDocumentElement: Ri, getScale: Ka, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Vf, r = this.getDimensions;
  return { reference: J0(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Hn(e).direction === "rtl" }, ew = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: Q0, ...n }, r = { ...a.platform, _c: i };
  return B0(e, t, { ...a, platform: r });
}, Ii = {
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
function eu(e, t) {
  let n = Ii.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Ii.themes[n.$extend] || {} : (n = null, i = Ii[t]) : n = null;
  while (n);
  return i;
}
function tw(e) {
  const t = [e];
  let n = Ii.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Ii.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Kf(e) {
  const t = [e];
  let n = Ii.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Ii.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let fo = !1;
if (typeof window < "u") {
  fo = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        fo = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let yv = !1;
typeof window < "u" && typeof navigator < "u" && (yv = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const nw = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Gf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Wf = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function qf(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Ec() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const kn = [];
let ta = null;
const Yf = {};
function Xf(e) {
  let t = Yf[e];
  return t || (t = Yf[e] = []), t;
}
let tu = function() {
};
typeof window < "u" && (tu = window.Element);
function He(e) {
  return function(t) {
    return eu(t.theme, e);
  };
}
const Ac = "__floating-vue__popper", _v = () => /* @__PURE__ */ Lt({
  name: "VPopper",
  provide() {
    return {
      [Ac]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Ac]: { default: null }
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
      validator: (e) => nw.includes(e)
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
      type: [String, Object, tu, Boolean],
      default: He("container")
    },
    boundary: {
      type: [String, tu],
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
      return (e = this[Ac]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(q0({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(V0({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Y0({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(K0({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(j0({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(X0({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await ew(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ta && this.instantMove && ta.instantMove && ta !== this.parentPopper) {
        ta.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ta = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Ec(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Us(this.$_referenceNode),
        ...Us(this.$_popperNode)
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
        for (let n = 0; n < kn.length; n++)
          t = kn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      kn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Kf(this.theme))
        Xf(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ec(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, qf(kn, this), kn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Kf(this.theme)) {
        const i = Xf(n);
        qf(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      ta === this && (ta = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ec(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Gf, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Gf, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Wf, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Wf, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, fo ? {
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
      if (jr >= e.left && jr <= e.right && Hr >= e.top && Hr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = jr - Ai, i = Hr - ki, a = t.left + t.width / 2 - Ai + (t.top + t.height / 2) - ki + t.width + t.height, r = Ai + n * a, o = ki + i * a;
        return rs(Ai, ki, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        rs(Ai, ki, r, o, t.left, t.top, t.right, t.top) || // Top edge
        rs(Ai, ki, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        rs(Ai, ki, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (yv) {
    const e = fo ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Zf(t), e), document.addEventListener("touchend", (t) => Jf(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Zf(e), !0), window.addEventListener("click", (e) => Jf(e, !1), !0);
  window.addEventListener("resize", rw);
}
function Zf(e, t) {
  for (let n = 0; n < kn.length; n++) {
    const i = kn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Jf(e, t) {
  iw(e, t);
}
function iw(e, t) {
  const n = {};
  for (let i = kn.length - 1; i >= 0; i--) {
    const a = kn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Qf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let s = a.parentPopper;
            for (; s; )
              n[s.randomId] = !0, s = s.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && Qf(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Qf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || aw(e, n) && !t;
}
function aw(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function rw() {
  for (let e = 0; e < kn.length; e++)
    kn[e].$_computePosition();
}
let Ai = 0, ki = 0, jr = 0, Hr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ai = jr, ki = Hr, jr = e.clientX, Hr = e.clientY;
}, fo ? {
  passive: !0
} : void 0);
function rs(e, t, n, i, a, r, o, s) {
  const u = ((o - a) * (t - r) - (s - r) * (e - a)) / ((s - r) * (n - e) - (o - a) * (i - t)), h = ((n - e) * (t - r) - (i - t) * (e - a)) / ((s - r) * (n - e) - (o - a) * (i - t));
  return u >= 0 && u <= 1 && h >= 0 && h <= 1;
}
const ow = {
  extends: _v()
}, zu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function sw(e, t, n, i, a, r) {
  return y(), w("div", {
    ref: "reference",
    class: Ae(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Fe(e.$slots, "default", ps(io(e.slotData)))
  ], 2);
}
const lw = /* @__PURE__ */ zu(ow, [["render", sw]]);
function cw() {
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
let fs;
function nu() {
  nu.init || (nu.init = !0, fs = cw() !== -1);
}
var Dl = {
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
    nu(), Jt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", fs && this.$el.appendChild(e), e.data = "about:blank", fs || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!fs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const uw = /* @__PURE__ */ cm();
sm("data-v-b329ee4c");
const dw = {
  class: "resize-observer",
  tabindex: "-1"
};
lm();
const fw = /* @__PURE__ */ uw((e, t, n, i, a, r) => (y(), Be("div", dw)));
Dl.render = fw;
Dl.__scopeId = "data-v-b329ee4c";
Dl.__file = "src/components/ResizeObserver.vue";
const wv = (e = "theme") => ({
  computed: {
    themeClass() {
      return tw(this[e]);
    }
  }
}), hw = /* @__PURE__ */ Lt({
  name: "VPopperContent",
  components: {
    ResizeObserver: Dl
  },
  mixins: [
    wv()
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
}), pw = ["id", "aria-hidden", "tabindex", "data-popper-placement"], vw = {
  ref: "inner",
  class: "v-popper__inner"
}, gw = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), mw = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), bw = [
  gw,
  mw
];
function yw(e, t, n, i, a, r) {
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
    style: ln(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = ot((s) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    c("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (s) => e.autoHide && e.$emit("hide"))
    }),
    c("div", {
      class: "v-popper__wrapper",
      style: ln(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", vw, [
        e.mounted ? (y(), w(le, { key: 0 }, [
          c("div", null, [
            Fe(e.$slots, "default")
          ]),
          e.handleResize ? (y(), Be(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (s) => e.$emit("resize", s))
          })) : B("", !0)
        ], 64)) : B("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: ln(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, bw, 4)
    ], 4)
  ], 46, pw);
}
const Sv = /* @__PURE__ */ zu(hw, [["render", yw]]), Cv = {
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
let iu = function() {
};
typeof window < "u" && (iu = window.Element);
const _w = /* @__PURE__ */ Lt({
  name: "VPopperWrapper",
  components: {
    Popper: lw,
    PopperContent: Sv
  },
  mixins: [
    Cv,
    wv("finalTheme")
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
      type: [String, Object, iu, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, iu],
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
function ww(e, t, n, i, a, r) {
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
      shouldMountContent: d,
      skipTransition: m,
      autoHide: C,
      show: E,
      hide: x,
      handleResize: A,
      onResize: O,
      classes: F,
      result: z
    }) => [
      Fe(e.$slots, "default", {
        shown: h,
        show: E,
        hide: x
      }),
      Se(o, {
        ref: "popperContent",
        "popper-id": u,
        theme: e.finalTheme,
        shown: h,
        mounted: d,
        "skip-transition": m,
        "auto-hide": C,
        "handle-resize": A,
        classes: F,
        result: z,
        onHide: x,
        onResize: O
      }, {
        default: Le(() => [
          Fe(e.$slots, "popper", {
            shown: h,
            hide: x
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Uu = /* @__PURE__ */ zu(_w, [["render", ww]]), Sw = {
  ...Uu,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Uu
});
({
  ...Uu
});
_v();
const eh = Ii, Cw = Sw, Tw = /* @__PURE__ */ Lt({
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
}), Ew = "_ncPopover_qgtYg", Aw = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: Ew
}, Tv = "nc-popover-9";
eh.themes[Tv] = structuredClone(eh.themes.dropdown);
const kw = {
  name: "NcPopover",
  components: {
    Dropdown: Cw,
    NcPopoverTriggerProvider: Tw
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
      theme: Tv
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
      return this.placement === "start" ? Yc ? "right" : "left" : this.placement === "end" ? Yc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Pu(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: so(),
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
        ha.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function Ow(e, t, n, i, a, r) {
  const o = je("NcPopoverTriggerProvider"), s = je("Dropdown");
  return y(), Be(s, {
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
      Fe(e.$slots, "default", ps(io(u)))
    ]),
    default: Le(() => [
      Se(o, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Le((u) => [
          Fe(e.$slots, "trigger", ps(io(u)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const xw = {
  $style: Aw
}, th = /* @__PURE__ */ Qe(kw, [["render", Ow], ["__cssModules", xw]]), Nw = {
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
}, Lw = ["aria-hidden", "aria-label"], Rw = ["fill", "width", "height"], Iw = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, Pw = { key: 0 };
function $w(e, t, n, i, a, r) {
  return y(), w("span", jt(e.$attrs, {
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
      c("path", Iw, [
        n.title ? (y(), w("title", Pw, p(n.title), 1)) : B("", !0)
      ])
    ], 8, Rw))
  ], 16, Lw);
}
const Dw = /* @__PURE__ */ Qe(Nw, [["render", $w]]);
Mi(v_);
function Bu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === xt)
        return !1;
      if (n.type === le && !Bu(n.children))
        return !1;
      if (n.type === bo && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const Fw = ".focusable", Mw = {
  name: "NcActions",
  components: {
    NcButton: jn,
    NcPopover: th
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
      [$u]: H(() => this.actionsMenuSemanticType === "menu"),
      [rv]: this.closeMenu
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
      randomId: Il()
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
    N0(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(Fw);
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
        A.type === le && t(A.children, x);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], s = ["NcActionLink", "NcActionRouter"], u = a.some((E) => o.includes(this.getActionName(E))), h = a.some((E) => r.includes(this.getActionName(E))), d = a.some((E) => s.includes(this.getActionName(E)));
    u ? this.actionsMenuSemanticType = "dialog" : h ? this.actionsMenuSemanticType = "menu" : d ? this.actionsMenuSemanticType = "navigation" : e.filter((x) => this.getActionName(x).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const m = (E) => {
      const x = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(x) ? Xt("img", { class: "action-item__menutoggle__icon", src: x, alt: "" }) : Xt("span", { class: ["icon", x] })), O = E?.children?.default?.()?.[0]?.children?.trim(), F = this.forceName ? O : "";
      let z = E?.props?.title;
      this.forceName || z || (z = O);
      const W = { ...E?.props ?? {} }, P = ["submit", "reset"].includes(W.type) ? W.modelValue : "button";
      return delete W.modelValue, delete W.type, Xt(
        jn,
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
            title: z,
            disabled: this.disabled || E?.props?.disabled,
            pressed: E?.props?.modelValue,
            size: this.size,
            type: P,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (F ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": E?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => F,
          icon: () => A
        }
      );
    }, C = (E) => {
      const x = Bu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Xt("span", { class: ["icon", this.defaultIcon] }) : Xt(Dw, { size: 20 }), A = `${this.randomId}-trigger`;
      return Xt(
        th,
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
          trigger: () => Xt(jn, {
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
          default: () => Xt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Xt("ul", {
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
    return e.length === 1 && n.length === 1 && !this.forceMenu ? m(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), i.length > 0 && this.inline > 0 ? Xt(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...i.map(m),
        // render the rest within the popover menu
        a.length > 0 ? Xt(
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
    ) : Xt(
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
}, Bs = /* @__PURE__ */ Qe(Mw, [["__scopeId", "data-v-7206c1f1"]]), zw = ["aria-label"], Uw = ["width", "height"], Bw = ["fill"], jw = ["fill"], Hw = { key: 0 }, Vw = /* @__PURE__ */ Lt({
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
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, Bw),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (y(), w("title", Hw, p(e.name), 1)) : B("", !0)
        ], 8, jw)
      ], 8, Uw))
    ], 8, zw));
  }
}), Ev = /* @__PURE__ */ Qe(Vw, [["__scopeId", "data-v-cf399190"]]), au = /* @__PURE__ */ Lt({
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
}), Kw = {
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
}, Gw = ["aria-hidden", "aria-label"], Ww = ["fill", "width", "height"], qw = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, Yw = { key: 0 };
function Xw(e, t, n, i, a, r) {
  return y(), w("span", jt(e.$attrs, {
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
      c("path", qw, [
        n.title ? (y(), w("title", Yw, p(n.title), 1)) : B("", !0)
      ])
    ], 8, Ww))
  ], 16, Gw);
}
const Zw = /* @__PURE__ */ Qe(Kw, [["render", Xw]]), Jw = {
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
}, Qw = ["aria-hidden", "aria-label"], eS = ["fill", "width", "height"], tS = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, nS = { key: 0 };
function iS(e, t, n, i, a, r) {
  return y(), w("span", jt(e.$attrs, {
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
      c("path", tS, [
        n.title ? (y(), w("title", nS, p(n.title), 1)) : B("", !0)
      ])
    ], 8, eS))
  ], 16, Qw);
}
const aS = /* @__PURE__ */ Qe(Jw, [["render", iS]]);
Mi(y_);
const rS = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: jn,
    ChevronDown: q1,
    ChevronUp: t0
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
    return { isLegacy34: zi };
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
function oS(e, t, n, i, a, r) {
  const o = je("ChevronUp"), s = je("ChevronDown"), u = je("NcButton");
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
      })) : (y(), Be(s, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const sS = /* @__PURE__ */ Qe(rS, [["render", oS], ["__scopeId", "data-v-cfbd3794"]]);
Mi(__, C_);
const lS = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Bs,
    NcActionButton: x0,
    NcAppNavigationIconCollapsible: sS,
    NcInputConfirmCancel: m0,
    NcLoadingIcon: Ev,
    NcVNodes: au,
    Pencil: Zw,
    Undo: aS
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Qp, default: null }
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
      default: () => Il(),
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
      isMobile: _o(),
      isLegacy34: zi
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && li("toggle-navigation", { open: !1 }));
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
}, cS = ["id"], uS = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], dS = {
  key: 0,
  class: "editingContainer"
}, fS = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, hS = { class: "app-navigation-entry__deleted-description" }, pS = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, vS = {
  key: 0,
  class: "app-navigation-entry__children"
};
function gS(e, t, n, i, a, r) {
  const o = je("NcLoadingIcon"), s = je("NcInputConfirmCancel"), u = je("Pencil"), h = je("NcActionButton"), d = je("Undo"), m = je("NcActions"), C = je("NcAppNavigationIconCollapsible");
  return y(), w("li", {
    id: n.id,
    class: Ae([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (y(), Be(Tu(r.isRouterLink ? "router-link" : "NcVNodes"), ps(io({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Le(({ href: E, navigate: x, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: Ae(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          n.undo ? B("", !0) : (y(), w("a", {
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
            onKeydown: t[3] || (t[3] = ot(De((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Ae(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (y(), Be(o, { key: 0 })) : Fe(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Ae(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (y(), w("div", dS, [
              Se(s, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : B("", !0)
          ], 40, uS)),
          n.undo ? (y(), w("div", fS, [
            c("div", hS, p(n.name), 1)
          ])) : B("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (y(), w("div", {
            key: 2,
            class: Ae(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (y(), w("div", pS, [
              Fe(e.$slots, "counter", {}, void 0, !0)
            ])) : B("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (y(), Be(m, {
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
                Fe(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Le(() => [
                n.editable && !a.editingActive ? (y(), Be(h, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Le(() => [
                    Se(u, { size: 20 })
                  ]),
                  default: Le(() => [
                    we(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : B("", !0),
                n.undo ? (y(), Be(h, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Le(() => [
                    Se(d, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : B("", !0),
                Fe(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : B("", !0)
          ], 2)) : B("", !0),
          n.allowCollapse && e.$slots.default ? (y(), Be(C, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: De(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : B("", !0),
          Fe(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (y(), w("ul", vS, [
      Fe(e.$slots, "default", {}, void 0, !0)
    ])) : B("", !0)
  ], 10, cS);
}
const nh = /* @__PURE__ */ Qe(lS, [["render", gS], ["__scopeId", "data-v-01bef41b"]]), kc = /* @__PURE__ */ new WeakMap(), mS = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = kf(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = kf(e, a, Object.assign({ capture: n }, r));
    }
    kc.set(e, i);
  },
  unmounted(e) {
    const t = kc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), kc.delete(e);
  }
}, bS = {
  mounted(e) {
    e.focus();
  }
}, yS = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", _S = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", ru = "numeric", ou = "ascii", su = "alpha", Vr = "asciinumeric", Ir = "alphanumeric", lu = "domain", Av = "emoji", wS = "scheme", SS = "slashscheme", Oc = "whitespace";
function CS(e, t) {
  return e in t || (t[e] = []), t[e];
}
function ca(e, t, n) {
  t[ru] && (t[Vr] = !0, t[Ir] = !0), t[ou] && (t[Vr] = !0, t[su] = !0), t[Vr] && (t[Ir] = !0), t[su] && (t[Ir] = !0), t[Ir] && (t[lu] = !0), t[Av] && (t[lu] = !0);
  for (const i in t) {
    const a = CS(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function TS(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function on(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
on.groups = {};
on.prototype = {
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
    i = i || on.groups;
    let a;
    return t && t.j ? a = t : (a = new on(t), n && i && ca(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || on.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, s = a.go(e);
    if (s ? (o = new on(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new on(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const u = Object.assign(TS(o.t, i), n);
          ca(r, u, i);
        } else n && ca(r, n, i);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, n, i, a) => e.ta(t, n, i, a), vt = (e, t, n, i, a) => e.tr(t, n, i, a), ih = (e, t, n, i, a) => e.ts(t, n, i, a), te = (e, t, n, i, a) => e.tt(t, n, i, a), Qn = "WORD", cu = "UWORD", kv = "ASCIINUMERICAL", Ov = "ALPHANUMERICAL", ho = "LOCALHOST", uu = "TLD", du = "UTLD", hs = "SCHEME", Fa = "SLASH_SCHEME", ju = "NUM", fu = "WS", Hu = "NL", Kr = "OPENBRACE", Gr = "CLOSEBRACE", js = "OPENBRACKET", Hs = "CLOSEBRACKET", Vs = "OPENPAREN", Ks = "CLOSEPAREN", Gs = "OPENANGLEBRACKET", Ws = "CLOSEANGLEBRACKET", qs = "FULLWIDTHLEFTPAREN", Ys = "FULLWIDTHRIGHTPAREN", Xs = "LEFTCORNERBRACKET", Zs = "RIGHTCORNERBRACKET", Js = "LEFTWHITECORNERBRACKET", Qs = "RIGHTWHITECORNERBRACKET", el = "FULLWIDTHLESSTHAN", tl = "FULLWIDTHGREATERTHAN", nl = "AMPERSAND", il = "APOSTROPHE", al = "ASTERISK", xi = "AT", rl = "BACKSLASH", ol = "BACKTICK", sl = "CARET", ua = "COLON", Vu = "COMMA", ll = "DOLLAR", Mn = "DOT", cl = "EQUALS", Ku = "EXCLAMATION", gn = "HYPHEN", Wr = "PERCENT", ul = "PIPE", dl = "PLUS", fl = "POUND", qr = "QUERY", Gu = "QUOTE", xv = "FULLWIDTHMIDDLEDOT", Wu = "SEMI", zn = "SLASH", Yr = "TILDE", hl = "UNDERSCORE", Nv = "EMOJI", pl = "SYM";
var Lv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Ov,
  AMPERSAND: nl,
  APOSTROPHE: il,
  ASCIINUMERICAL: kv,
  ASTERISK: al,
  AT: xi,
  BACKSLASH: rl,
  BACKTICK: ol,
  CARET: sl,
  CLOSEANGLEBRACKET: Ws,
  CLOSEBRACE: Gr,
  CLOSEBRACKET: Hs,
  CLOSEPAREN: Ks,
  COLON: ua,
  COMMA: Vu,
  DOLLAR: ll,
  DOT: Mn,
  EMOJI: Nv,
  EQUALS: cl,
  EXCLAMATION: Ku,
  FULLWIDTHGREATERTHAN: tl,
  FULLWIDTHLEFTPAREN: qs,
  FULLWIDTHLESSTHAN: el,
  FULLWIDTHMIDDLEDOT: xv,
  FULLWIDTHRIGHTPAREN: Ys,
  HYPHEN: gn,
  LEFTCORNERBRACKET: Xs,
  LEFTWHITECORNERBRACKET: Js,
  LOCALHOST: ho,
  NL: Hu,
  NUM: ju,
  OPENANGLEBRACKET: Gs,
  OPENBRACE: Kr,
  OPENBRACKET: js,
  OPENPAREN: Vs,
  PERCENT: Wr,
  PIPE: ul,
  PLUS: dl,
  POUND: fl,
  QUERY: qr,
  QUOTE: Gu,
  RIGHTCORNERBRACKET: Zs,
  RIGHTWHITECORNERBRACKET: Qs,
  SCHEME: hs,
  SEMI: Wu,
  SLASH: zn,
  SLASH_SCHEME: Fa,
  SYM: pl,
  TILDE: Yr,
  TLD: uu,
  UNDERSCORE: hl,
  UTLD: du,
  UWORD: cu,
  WORD: Qn,
  WS: fu
});
const Zn = /[a-z]/, kr = new RegExp("\\p{L}", "u"), xc = new RegExp("\\p{Emoji}", "u"), Jn = /\d/, Nc = /\s/, ah = "\r", Lc = `
`, ES = "️", AS = "‍", Rc = "￼";
let os = null, ss = null;
function kS(e = []) {
  const t = {};
  on.groups = t;
  const n = new on();
  os == null && (os = rh(yS)), ss == null && (ss = rh(_S)), te(n, "'", il), te(n, "{", Kr), te(n, "}", Gr), te(n, "[", js), te(n, "]", Hs), te(n, "(", Vs), te(n, ")", Ks), te(n, "<", Gs), te(n, ">", Ws), te(n, "（", qs), te(n, "）", Ys), te(n, "「", Xs), te(n, "」", Zs), te(n, "『", Js), te(n, "』", Qs), te(n, "＜", el), te(n, "＞", tl), te(n, "&", nl), te(n, "*", al), te(n, "@", xi), te(n, "`", ol), te(n, "^", sl), te(n, ":", ua), te(n, ",", Vu), te(n, "$", ll), te(n, ".", Mn), te(n, "=", cl), te(n, "!", Ku), te(n, "-", gn), te(n, "%", Wr), te(n, "|", ul), te(n, "+", dl), te(n, "#", fl), te(n, "?", qr), te(n, '"', Gu), te(n, "/", zn), te(n, ";", Wu), te(n, "~", Yr), te(n, "_", hl), te(n, "\\", rl), te(n, "・", xv);
  const i = vt(n, Jn, ju, {
    [ru]: !0
  });
  vt(i, Jn, i);
  const a = vt(i, Zn, kv, {
    [Vr]: !0
  }), r = vt(i, kr, Ov, {
    [Ir]: !0
  }), o = vt(n, Zn, Qn, {
    [ou]: !0
  });
  vt(o, Jn, a), vt(o, Zn, o), vt(a, Jn, a), vt(a, Zn, a);
  const s = vt(n, kr, cu, {
    [su]: !0
  });
  vt(s, Zn), vt(s, Jn, r), vt(s, kr, s), vt(r, Jn, r), vt(r, Zn), vt(r, kr, r);
  const u = te(n, Lc, Hu, {
    [Oc]: !0
  }), h = te(n, ah, fu, {
    [Oc]: !0
  }), d = vt(n, Nc, fu, {
    [Oc]: !0
  });
  te(n, Rc, d), te(h, Lc, u), te(h, Rc, d), vt(h, Nc, d), te(d, ah), te(d, Lc), vt(d, Nc, d), te(d, Rc, d);
  const m = vt(n, xc, Nv, {
    [Av]: !0
  });
  te(m, "#"), vt(m, xc, m), te(m, ES, m);
  const C = te(m, AS);
  te(C, "#"), vt(C, xc, m);
  const E = [[Zn, o], [Jn, a]], x = [[Zn, null], [kr, s], [Jn, r]];
  for (let A = 0; A < os.length; A++)
    Ti(n, os[A], uu, Qn, E);
  for (let A = 0; A < ss.length; A++)
    Ti(n, ss[A], du, cu, x);
  ca(uu, {
    tld: !0,
    ascii: !0
  }, t), ca(du, {
    utld: !0,
    alpha: !0
  }, t), Ti(n, "file", hs, Qn, E), Ti(n, "mailto", hs, Qn, E), Ti(n, "http", Fa, Qn, E), Ti(n, "https", Fa, Qn, E), Ti(n, "ftp", Fa, Qn, E), Ti(n, "ftps", Fa, Qn, E), ca(hs, {
    scheme: !0,
    ascii: !0
  }, t), ca(Fa, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], z = e[A][1] ? {
      [wS]: !0
    } : {
      [SS]: !0
    };
    O.indexOf("-") >= 0 ? z[lu] = !0 : Zn.test(O) ? Jn.test(O) ? z[Vr] = !0 : z[ou] = !0 : z[ru] = !0, ih(n, O, O, z);
  }
  return ih(n, "localhost", ho, {
    ascii: !0
  }), n.jd = new on(pl), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Lv)
  };
}
function Rv(e, t) {
  const n = OS(t.replace(/[A-Z]/g, (s) => s.toLowerCase())), i = n.length, a = [];
  let r = 0, o = 0;
  for (; o < i; ) {
    let s = e, u = null, h = 0, d = null, m = -1, C = -1;
    for (; o < i && (u = s.go(n[o])); )
      s = u, s.accepts() ? (m = 0, C = 0, d = s) : m >= 0 && (m += n[o].length, C++), h += n[o].length, r += n[o].length, o++;
    r -= m, o -= C, h -= m, a.push({
      t: d.t,
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
function OS(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, o = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(o), i += o.length;
  }
  return t;
}
function Ti(e, t, n, i, a) {
  let r;
  const o = t.length;
  for (let s = 0; s < o - 1; s++) {
    const u = t[s];
    e.j[u] ? r = e.j[u] : (r = new on(i), r.jr = a.slice(), e.j[u] = r), e = r;
  }
  return r = new on(n), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function rh(e) {
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
const po = {
  defaultProtocol: "http",
  events: null,
  format: oh,
  formatHref: oh,
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
function qu(e, t = null) {
  let n = Object.assign({}, po);
  e && (n = Object.assign(n, e instanceof qu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
qu.prototype = {
  o: po,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : po[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function oh(e) {
  return e;
}
function Iv(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
Iv.prototype = {
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
  toObject(e = po.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), o = {}, s = e.get("className", n, t), u = e.get("target", n, t), h = e.get("rel", n, t), d = e.getObj("attributes", n, t), m = e.getObj("events", n, t);
    return o.href = i, s && (o.class = s), u && (o.target = u), h && (o.rel = h), d && Object.assign(o, d), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: m
    };
  }
};
function Fl(e, t) {
  class n extends Iv {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const xS = Fl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), sh = Fl("text"), NS = Fl("nl"), ls = Fl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = po.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== ho && e[1].t === ua;
  }
}), pn = (e) => new on(e);
function LS({
  groups: e
}) {
  const t = e.domain.concat([nl, al, xi, rl, ol, sl, ll, cl, gn, ju, Wr, ul, dl, fl, zn, pl, Yr, hl]), n = [il, ua, Vu, Mn, Ku, Wr, qr, Gu, Wu, Gs, Ws, Kr, Gr, Hs, js, Vs, Ks, qs, Ys, Xs, Zs, Js, Qs, el, tl], i = [nl, il, al, rl, ol, sl, ll, cl, gn, Kr, Gr, Wr, ul, dl, fl, qr, zn, pl, Yr, hl], a = pn(), r = te(a, Yr);
  Ue(r, i, r), Ue(r, e.domain, r);
  const o = pn(), s = pn(), u = pn();
  Ue(a, e.domain, o), Ue(a, e.scheme, s), Ue(a, e.slashscheme, u), Ue(o, i, r), Ue(o, e.domain, o);
  const h = te(o, xi);
  te(r, xi, h), te(s, xi, h), te(u, xi, h);
  const d = te(r, Mn);
  Ue(d, i, r), Ue(d, e.domain, r);
  const m = pn();
  Ue(h, e.domain, m), Ue(m, e.domain, m);
  const C = te(m, Mn);
  Ue(C, e.domain, m);
  const E = pn(xS);
  Ue(C, e.tld, E), Ue(C, e.utld, E), te(h, ho, E);
  const x = te(m, gn);
  te(x, gn, x), Ue(x, e.domain, m), Ue(E, e.domain, m), te(E, Mn, C), te(E, gn, x);
  const A = te(o, gn), O = te(o, Mn);
  te(A, gn, A), Ue(A, e.domain, o), Ue(O, i, r), Ue(O, e.domain, o);
  const F = pn(ls);
  Ue(O, e.tld, F), Ue(O, e.utld, F), Ue(F, e.domain, o), Ue(F, i, r), te(F, Mn, O), te(F, gn, A), te(F, xi, h);
  const z = te(F, ua), W = pn(ls);
  Ue(z, e.numeric, W);
  const P = pn(ls), N = pn();
  Ue(P, t, P), Ue(P, n, N), Ue(N, t, P), Ue(N, n, N), te(F, zn, P), te(W, zn, P);
  const de = te(s, ua), J = te(u, ua), fe = te(J, zn), Y = te(fe, zn);
  Ue(s, e.domain, o), te(s, Mn, O), te(s, gn, A), Ue(u, e.domain, o), te(u, Mn, O), te(u, gn, A), Ue(de, e.domain, P), te(de, zn, P), te(de, qr, P), Ue(Y, e.domain, P), Ue(Y, t, P), te(Y, zn, P);
  const se = [
    [Kr, Gr],
    // {}
    [js, Hs],
    // []
    [Vs, Ks],
    // ()
    [Gs, Ws],
    // <>
    [qs, Ys],
    // （）
    [Xs, Zs],
    // 「」
    [Js, Qs],
    // 『』
    [el, tl]
    // ＜＞
  ];
  for (let ye = 0; ye < se.length; ye++) {
    const [Q, ie] = se[ye], $ = te(P, Q);
    te(N, Q, $);
    const M = pn(ls);
    Ue($, t, M);
    const X = pn();
    Ue($, n, X), te($, ie, P), Ue(M, t, M), Ue(M, n, X), Ue(X, t, M), Ue(X, n, X), te(M, ie, P), te(X, ie, P);
  }
  return te(a, ho, F), te(a, Hu, NS), {
    start: a,
    tokens: Lv
  };
}
function RS(e, t, n) {
  let i = n.length, a = 0, r = [], o = [];
  for (; a < i; ) {
    let s = e, u = null, h = null, d = 0, m = null, C = -1;
    for (; a < i && !(u = s.go(n[a].t)); )
      o.push(n[a++]);
    for (; a < i && (h = u || s.go(n[a].t)); )
      u = null, s = h, s.accepts() ? (C = 0, m = s) : C >= 0 && C++, a++, d++;
    if (C < 0)
      a -= d, a < i && (o.push(n[a]), a++);
    else {
      o.length > 0 && (r.push(Ic(sh, t, o)), o = []), a -= C, d -= C;
      const E = m.t, x = n.slice(a - d, a);
      r.push(Ic(E, t, x));
    }
  }
  return o.length > 0 && r.push(Ic(sh, t, o)), r;
}
function Ic(e, t, n) {
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
function IS() {
  $t.scanner = kS($t.customSchemes);
  for (let e = 0; e < $t.tokenQueue.length; e++)
    $t.tokenQueue[e][1]({
      scanner: $t.scanner
    });
  $t.parser = LS($t.scanner.tokens);
  for (let e = 0; e < $t.pluginQueue.length; e++)
    $t.pluginQueue[e][1]({
      scanner: $t.scanner,
      parser: $t.parser
    });
  return $t.initialized = !0, $t;
}
function Pv(e) {
  return $t.initialized || IS(), RS($t.parser.start, e, Rv($t.scanner.start, e));
}
Pv.scan = Rv;
function PS(e) {
  const t = new qu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, FS), n = Pv(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(xs(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function $S(e) {
  return e.replace(/"/g, "&quot;");
}
function DS(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${$S(i)}"`);
  }
  return t.join(" ");
}
function FS({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${DS(t)}>${xs(n)}</${e}>`;
}
const MS = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = PS(t.text));
}, zS = ["title"], US = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Mt("NcAppSidebar:header:ref");
    return (n, i) => Re((y(), w("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      we(p(e.name), 1)
    ], 8, zS)), [
      [v(MS), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), BS = ["aria-labelledby"], jS = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, HS = ["id"], VS = {
  key: 2,
  class: "empty-content__description"
}, KS = {
  key: 3,
  class: "empty-content__action"
}, GS = /* @__PURE__ */ Lt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Il();
    return (n, i) => (y(), w("div", {
      "aria-labelledby": v(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (y(), w("div", jS, [
        Fe(n.$slots, "icon", {}, void 0, !0)
      ])) : B("", !0),
      e.name !== "" || n.$slots.name ? (y(), w("div", {
        key: 1,
        id: v(t),
        class: "empty-content__name"
      }, [
        Fe(n.$slots, "name", {}, () => [
          we(p(e.name), 1)
        ], !0)
      ], 8, HS)) : B("", !0),
      e.description !== "" || n.$slots.description ? (y(), w("p", VS, [
        Fe(n.$slots, "description", {}, () => [
          we(p(e.description), 1)
        ], !0)
      ])) : B("", !0),
      n.$slots.action ? (y(), w("div", KS, [
        Fe(n.$slots, "action", {}, void 0, !0)
      ])) : B("", !0)
    ], 8, BS));
  }
}), WS = /* @__PURE__ */ Qe(GS, [["__scopeId", "data-v-8609a4c1"]]), qS = {
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
}, YS = ["aria-hidden", "aria-label"], XS = ["fill", "width", "height"], ZS = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, JS = { key: 0 };
function QS(e, t, n, i, a, r) {
  return y(), w("span", jt(e.$attrs, {
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
      c("path", ZS, [
        n.title ? (y(), w("title", JS, p(n.title), 1)) : B("", !0)
      ])
    ], 8, XS))
  ], 16, YS);
}
const eC = /* @__PURE__ */ Qe(qS, [["render", QS]]), tC = {
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
}, nC = ["aria-hidden", "aria-label"], iC = ["fill", "width", "height"], aC = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, rC = { key: 0 };
function oC(e, t, n, i, a, r) {
  return y(), w("span", jt(e.$attrs, {
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
      c("path", aC, [
        n.title ? (y(), w("title", rC, p(n.title), 1)) : B("", !0)
      ])
    ], 8, iC))
  ], 16, nC);
}
const sC = /* @__PURE__ */ Qe(tC, [["render", oC]]), lC = {
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
}, cC = ["aria-hidden", "aria-label"], uC = ["fill", "width", "height"], dC = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, fC = { key: 0 };
function hC(e, t, n, i, a, r) {
  return y(), w("span", jt(e.$attrs, {
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
      c("path", dC, [
        n.title ? (y(), w("title", fC, p(n.title), 1)) : B("", !0)
      ])
    ], 8, uC))
  ], 16, cC);
}
const pC = /* @__PURE__ */ Qe(lC, [["render", hC]]), vC = ["aria-selected", "tabindex"], gC = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Pm({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = np(e, "selected"), n = /* @__PURE__ */ Ne(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (y(), w("button", {
      class: Ae(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: v(zi),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      c("span", {
        class: Ae([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (o) => n.value = !1)
      }, [
        c("span", {
          class: Ae([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          Se(au, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Le(() => [
              c("span", {
                class: Ae([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        c("span", {
          class: Ae([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          Se(au, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Le(() => [
              c("span", {
                class: Ae([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      c("span", {
        class: Ae(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, vC));
  }
}), mC = "_sidebarTabsButton_q3kBA", bC = "_sidebarTabsButton_legacy_KQ4d1", yC = "_sidebarTabsButton_selected_Pjayf", _C = "_sidebarTabsButton_animatedHighlight_uvp-0", wC = "_sidebarTabsButton__name_rlQsL", SC = "_sidebarTabsButton__icon_QzZg4", CC = "_sidebarTabsButton__iconLayer_ZkZan", TC = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", EC = "_sidebarTabsButton__icon_pop_IA0By", AC = "_sidebarTabsButton__legacyIcon_QhcNW", kC = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: mC,
  sidebarTabsButton_legacy: bC,
  sidebarTabsButton_selected: yC,
  sidebarTabsButton_animatedHighlight: _C,
  sidebarTabsButton__name: wC,
  sidebarTabsButton__icon: SC,
  sidebarTabsButton__iconLayer: CC,
  sidebarTabsButton__iconLayer_hidden: TC,
  sidebarTabsButton__icon_pop: EC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: AC
}, OC = {
  $style: kC
}, xC = /* @__PURE__ */ Qe(gC, [["__cssModules", OC]]), NC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: xC
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
      isLegacy34: zi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [Dy()]) : t.order - n.order), this.updateActive();
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
}, LC = { class: "app-sidebar-tabs" };
function RC(e, t, n, i, a, r) {
  const o = je("NcAppSidebarTabsButton");
  return y(), w("div", LC, [
    r.hasMultipleTabs || r.showForSingleTab ? (y(), w("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ae(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = ot(De((...s) => r.focusPreviousTab && r.focusPreviousTab(...s), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = ot(De((...s) => r.focusNextTab && r.focusNextTab(...s), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = ot(De((...s) => r.focusActiveTabContent && r.focusActiveTabContent(...s), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = ot(De((...s) => r.focusFirstTab && r.focusFirstTab(...s), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = ot(De((...s) => r.focusLastTab && r.focusLastTab(...s), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = ot(De((...s) => r.focusFirstTab && r.focusFirstTab(...s), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = ot(De((...s) => r.focusLastTab && r.focusLastTab(...s), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...s) => r.handleHighlight && r.handleHighlight(...s)),
      onPointerleave: t[8] || (t[8] = (...s) => r.hideHighlight && r.hideHighlight(...s)),
      onFocusin: t[9] || (t[9] = (...s) => r.handleHighlight && r.handleHighlight(...s)),
      onFocusout: t[10] || (t[10] = (...s) => r.onHighlightFocusOut && r.onHighlightFocusOut(...s))
    }, [
      a.highlightEnabled ? (y(), w("div", {
        key: 0,
        class: Ae(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: ln(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : B("", !0),
      (y(!0), w(le, null, ke(a.tabs, (s) => (y(), Be(o, {
        id: `tab-button-${s.id}`,
        key: s.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${s.id}`,
        selected: a.activeTab === s.id,
        animatedHighlight: a.highlightEnabled,
        tab: s,
        "onUpdate:selected": (u) => r.setActive(s.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : B("", !0),
    c("div", {
      class: Ae(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Fe(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const IC = /* @__PURE__ */ Qe(NC, [["render", RC], ["__scopeId", "data-v-74190d2a"]]);
Mi(m_);
const PC = {
  name: "NcAppSidebar",
  components: {
    NcActions: Bs,
    NcAppSidebarHeader: US,
    NcAppSidebarTabs: IC,
    NcButton: jn,
    NcLoadingIcon: Ev,
    NcEmptyContent: WS,
    IconArrowRight: iv,
    IconClose: av,
    IconDockRight: eC,
    IconStar: sC,
    IconStarOutline: pC
  },
  directives: {
    Focus: bS,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: mS
  },
  inject: {
    ncContentSelector: {
      from: nv,
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
    const e = /* @__PURE__ */ Ne(null);
    return mn("NcAppSidebar:header:ref", e), {
      uid: Il(),
      isMobile: d_(),
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
    isSlotPopulated: Bu,
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
      this.focusTrap || (this.focusTrap = Pu([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: so(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ha.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, $C = ["aria-labelledby"], DC = { class: "app-sidebar-header__info" }, FC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, MC = { class: "app-sidebar-header__name-container" }, zC = { class: "app-sidebar-header__mainname-container" }, UC = ["placeholder", "value"], BC = ["title"], jC = {
  key: 2,
  class: "app-sidebar-header__description"
};
function HC(e, t, n, i, a, r) {
  const o = je("IconDockRight"), s = je("NcButton"), u = je("NcLoadingIcon"), h = je("IconStar"), d = je("IconStarOutline"), m = je("NcAppSidebarHeader"), C = je("IconArrowRight"), E = je("NcActions"), x = je("IconClose"), A = je("NcAppSidebarTabs"), O = je("NcEmptyContent"), F = Ed("focus"), z = Ed("click-outside");
  return y(), Be(wb, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Le(() => [
      Re(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = ot((...W) => r.onKeydownEsc && r.onKeydownEsc(...W), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (y(), Be(Uh, {
          key: 0,
          to: r.ncContentSelector
        }, [
          Se(s, jt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (W) => e.$emit("update:open", !0))
          }), {
            icon: Le(() => [
              Fe(e.$slots, "toggle-icon", {}, () => [
                Se(o, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : B("", !0),
        c("header", {
          class: Ae(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (y(), Be(m, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Fe(e.$slots, "info", { key: 0 }, () => [
            c("div", DC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (y(), w("div", {
                key: 0,
                class: Ae(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: ln({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...W) => r.onFigureClick && r.onFigureClick(...W)),
                onKeydown: t[2] || (t[2] = ot((...W) => r.onFigureClick && r.onFigureClick(...W), ["enter"]))
              }, [
                Fe(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : B("", !0),
              c("div", {
                class: Ae(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (y(), w("div", FC, [
                  Fe(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (y(), Be(s, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: De(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Le(() => [
                        n.starLoading ? (y(), Be(u, { key: 0 })) : a.isStarred ? (y(), Be(h, {
                          key: 1,
                          size: 20
                        })) : (y(), Be(d, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : B("", !0)
                  ], !0)
                ])) : B("", !0),
                c("div", MC, [
                  c("div", zC, [
                    Re(Se(m, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: De(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [ja, !n.nameEditable]
                    ]),
                    n.nameEditable ? Re((y(), w("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = De((...W) => r.onSubmitName && r.onSubmitName(...W), ["prevent"]))
                    }, [
                      Re(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = ot(De((...W) => r.onDismissEditing && r.onDismissEditing(...W), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...W) => r.onNameInput && r.onNameInput(...W))
                      }, null, 40, UC), [
                        [F]
                      ]),
                      Se(s, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Le(() => [
                          Se(C, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [z, () => r.onSubmitName()]
                    ]) : B("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (y(), Be(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Le(() => [
                        Fe(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : B("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (y(), w("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Fe(e.$slots, "subname", {}, () => [
                      we(p(n.subname), 1)
                    ], !0)
                  ], 8, BC)) : B("", !0)
                ])
              ], 2)
            ])
          ], !0),
          Se(s, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: De(r.closeSidebar, ["prevent"])
          }, {
            icon: Le(() => [
              Se(x, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (y(), w("div", jC, [
            Fe(e.$slots, "description", {}, void 0, !0)
          ])) : B("", !0)
        ], 2),
        Re(Se(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Le(() => [
            Fe(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [ja, !n.loading]
        ]),
        n.loading ? (y(), Be(O, { key: 1 }, {
          icon: Le(() => [
            Se(u, { size: 64 })
          ]),
          _: 1
        })) : B("", !0)
      ], 40, $C), [
        [ja, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const VC = /* @__PURE__ */ Qe(PC, [["render", HC], ["__scopeId", "data-v-c2c6820b"]]), KC = {
  name: "NcActionLink",
  mixins: [ov],
  inject: {
    isInSemanticMenu: {
      from: $u,
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
}, GC = ["role"], WC = ["download", "href", "aria-label", "target", "title", "role"], qC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, YC = { class: "action-link__name" }, XC = ["textContent"], ZC = ["textContent"], JC = {
  key: 2,
  class: "action-link__text"
};
function QC(e, t, n, i, a, r) {
  return y(), w("li", {
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
      onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
    }, [
      Fe(e.$slots, "icon", {}, () => [
        c("span", {
          "aria-hidden": "true",
          class: Ae(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: ln({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (y(), w("span", qC, [
        c("strong", YC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, XC)
      ])) : e.isLongText ? (y(), w("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, ZC)) : (y(), w("span", JC, p(e.text), 1)),
      B("", !0)
    ], 8, WC)
  ], 8, GC);
}
const Pa = /* @__PURE__ */ Qe(KC, [["render", QC], ["__scopeId", "data-v-32f01b7a"]]);
Mi(S_);
const eT = `<!--
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
`, tT = `<!--
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
`, nT = { class: "vue-skip-actions__container" }, iT = { class: "vue-skip-actions__headline" }, aT = { class: "vue-skip-actions__buttons" }, rT = /* @__PURE__ */ Lt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    mn(tv, s), mn(nv, "#content-vue"), mn("appName", H(() => t.appName));
    const n = _o(), i = /* @__PURE__ */ Ne(!1), a = /* @__PURE__ */ Ne(), r = H(() => a.value === "navigation" ? tT : eT);
    qh(() => {
      const u = document.getElementById("skip-actions");
      u && (u.innerHTML = "", u.classList.add("vue-skip-actions"));
    });
    function o() {
      li("toggle-navigation", { open: !0 }), Jt(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function s(u) {
      i.value = u, a.value || (a.value = "navigation");
    }
    return (u, h) => (y(), w("div", {
      id: "content-vue",
      class: Ae(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": v(zi) }]])
    }, [
      (y(), Be(Uh, { to: "#skip-actions" }, [
        c("div", nT, [
          c("div", iT, p(v(Tt)("Keyboard navigation help")), 1),
          c("div", aT, [
            Re(Se(jn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: De(o, ["prevent"]),
              onFocusin: h[0] || (h[0] = (d) => a.value = "navigation"),
              onMouseover: h[1] || (h[1] = (d) => a.value = "navigation")
            }, {
              default: Le(() => [
                we(p(v(Tt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [ja, i.value]
            ]),
            Se(jn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: h[2] || (h[2] = (d) => a.value = "content"),
              onMouseover: h[3] || (h[3] = (d) => a.value = "content")
            }, {
              default: Le(() => [
                we(p(v(Tt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Re(Se(Rl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [ja, !v(n)]
          ])
        ])
      ])),
      Fe(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), oT = /* @__PURE__ */ Qe(rT, [["__scopeId", "data-v-d13dcb98"]]), sT = { class: "library-shelf-tree-node" }, lT = ["aria-expanded", "aria-label"], cT = ["href"], uT = { class: "library-shelf-summary-title" }, dT = { dir: "auto" }, fT = { class: "library-muted" }, hT = { dir: "auto" }, pT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, vT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, gT = {
  key: 3,
  class: "library-shelf-tree"
}, mT = ["disabled"], bT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Ne(!1), i = /* @__PURE__ */ Ne(!1), a = /* @__PURE__ */ Ne(!1), r = /* @__PURE__ */ Ne(!1), o = /* @__PURE__ */ Ne([]), s = /* @__PURE__ */ Ne(!1), u = /* @__PURE__ */ Ne(0);
    async function h() {
      n.value = !n.value, !(!n.value || i.value || a.value) && await d();
    }
    async function d() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const m = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(u.value) }), C = await fetch(`${t.childrenUrl}?${m}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!C.ok) throw new Error("Shelf children request failed");
          const E = await C.json(), x = Array.isArray(E?.nodes) ? E.nodes : [];
          o.value.push(...x), s.value = E?.hasMore === !0, u.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : o.value.length, i.value = !s.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (m, C) => {
      const E = je("ShelfTreeNode", !0);
      return y(), w("li", sT, [
        e.node.hasChildren ? (y(), w("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? v(g)("library", "Collapse {folder}", { folder: e.node.label }) : v(g)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: h
        }, p(n.value ? "−" : "+"), 9, lT)) : B("", !0),
        c("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          c("span", uT, [
            c("strong", null, [
              c("bdi", dT, p(e.node.label), 1)
            ]),
            c("span", null, p(v(vn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          c("small", fT, [
            c("bdi", hT, p(e.node.path), 1)
          ])
        ], 8, cT),
        a.value ? (y(), w("small", pT, p(v(g)("library", "Loading folders…")), 1)) : r.value ? (y(), w("small", vT, p(v(g)("library", "Could not load folders.")), 1)) : B("", !0),
        n.value && o.value.length ? (y(), w("ul", gT, [
          (y(!0), w(le, null, ke(o.value, (x) => (y(), Be(E, {
            key: x.id,
            node: x,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : B("", !0),
        n.value && s.value ? (y(), w("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: d
        }, p(v(g)("library", "Load more folders")), 9, mT)) : B("", !0)
      ]);
    };
  }
}, yT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, _T = { id: "library-sidebar-filters-heading" }, wT = ["aria-label"], ST = ["value"], CT = ["name", "value"], TT = ["value"], ET = ["value"], AT = ["title"], kT = ["placeholder"], OT = { value: "" }, xT = ["value"], NT = { class: "library-publisher-filter" }, LT = { for: "library-publisher-search" }, RT = ["placeholder", "title", "aria-expanded"], IT = ["value"], PT = {
  key: 0,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, $T = ["onClick"], DT = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, FT = { class: "library-publication-filter" }, MT = { for: "library-publication-search" }, zT = ["placeholder", "aria-expanded"], UT = ["value"], BT = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, jT = ["onClick"], HT = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, VT = { class: "library-year-filter" }, KT = { for: "library-year-search" }, GT = ["placeholder", "aria-expanded"], WT = ["value"], qT = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, YT = ["onClick"], XT = {
  type: "submit",
  class: "button secondary library-year-apply"
}, ZT = { class: "library-creator-filter" }, JT = { for: "library-creator-search" }, QT = ["placeholder", "title", "aria-expanded"], eE = ["value"], tE = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, nE = ["onClick"], iE = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, aE = ["placeholder"], rE = { value: "" }, oE = ["value"], sE = { value: "" }, lE = ["value"], cE = { class: "library-folder-filter" }, uE = { for: "library-folder-search" }, dE = ["placeholder", "title", "aria-expanded"], fE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, hE = ["onClick"], pE = {
  type: "submit",
  class: "button secondary library-folder-apply"
}, vE = { value: "" }, gE = ["value"], mE = { value: "" }, bE = ["value"], yE = { class: "library-subject-filter" }, _E = { for: "library-subject-search" }, wE = ["placeholder", "title", "aria-expanded"], SE = ["value"], CE = {
  key: 0,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, TE = ["onClick"], EE = { value: "" }, AE = ["value"], kE = { value: "" }, OE = { value: "1" }, xE = {
  type: "submit",
  class: "button primary"
}, NE = {
  href: "?",
  class: "button secondary"
}, LE = ["href"], RE = ["lang", "dir"], IE = ["aria-label"], PE = ["href", "aria-label", "title", "onClick"], $E = ["title"], DE = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, FE = { class: "library-review-header" }, ME = { class: "library-muted library-catalogue-eyebrow" }, zE = { id: "library-review-heading" }, UE = ["aria-label"], BE = ["href", "aria-current", "onClick"], jE = ["aria-label"], HE = ["name", "value"], VE = {
  type: "submit",
  class: "button secondary"
}, KE = ["aria-busy"], GE = { key: 0 }, WE = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, qE = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, YE = { class: "library-metadata-review-workbench-copy" }, XE = { class: "library-muted library-catalogue-eyebrow" }, ZE = ["title"], JE = {
  key: 0,
  class: "library-metadata-review-card"
}, QE = {
  class: "library-bidi-human",
  dir: "auto"
}, eA = { class: "library-muted" }, tA = {
  class: "library-bidi-machine",
  dir: "ltr"
}, nA = { class: "library-metadata-review-fields" }, iA = {
  class: "library-bidi-human",
  dir: "auto"
}, aA = {
  class: "library-bidi-human",
  dir: "auto"
}, rA = {
  class: "library-bidi-human",
  dir: "auto"
}, oA = {
  class: "library-bidi-machine",
  dir: "ltr"
}, sA = {
  class: "library-bidi-human",
  dir: "auto"
}, lA = {
  class: "library-bidi-human",
  dir: "auto"
}, cA = ["action"], uA = ["value"], dA = ["value"], fA = {
  type: "submit",
  class: "button secondary"
}, hA = { class: "library-metadata-review-actions" }, pA = ["href"], vA = ["href"], gA = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, mA = ["href"], bA = ["aria-label"], yA = ["onClick"], _A = {
  class: "library-bidi-human",
  dir: "auto"
}, wA = {
  key: 0,
  class: "library-muted"
}, SA = {
  class: "library-bidi-human",
  dir: "auto"
}, CA = {
  key: 1,
  class: "library-scan-error"
}, TA = {
  class: "library-bidi-human",
  dir: "auto"
}, EA = ["onClick"], AA = ["href"], kA = ["aria-label"], OA = ["href"], xA = {
  key: 1,
  class: "library-muted"
}, NA = { key: 0 }, LA = ["href"], RA = {
  key: 3,
  class: "library-muted"
}, IA = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, PA = { class: "library-home-header" }, $A = { class: "library-muted library-catalogue-eyebrow" }, DA = { id: "library-home-heading" }, FA = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, MA = { id: "library-continue-heading" }, zA = { class: "library-muted" }, UA = ["href"], BA = {
  key: 0,
  class: "library-home-card-row"
}, jA = ["onClick"], HA = { class: "library-cover-frame" }, VA = ["src"], KA = { class: "library-cover-summary" }, GA = ["onClick"], WA = { dir: "auto" }, qA = {
  key: 0,
  class: "library-cover-creator"
}, YA = { dir: "auto" }, XA = ["href"], ZA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, JA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, QA = { id: "library-recent-heading" }, ek = { class: "library-muted" }, tk = ["href"], nk = {
  key: 0,
  class: "library-home-card-row"
}, ik = ["onClick"], ak = { class: "library-cover-frame" }, rk = ["src"], ok = { class: "library-cover-summary" }, sk = ["onClick"], lk = { dir: "auto" }, ck = {
  key: 0,
  class: "library-cover-creator"
}, uk = { dir: "auto" }, dk = ["href"], fk = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, hk = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, pk = { id: "library-home-shelves-heading" }, vk = { class: "library-muted" }, gk = ["href"], mk = ["aria-label"], bk = ["href"], yk = { dir: "auto" }, _k = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, wk = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, Sk = { id: "library-home-attention-heading" }, Ck = { class: "library-muted" }, Tk = ["href"], Ek = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, Ak = { class: "library-home-header" }, kk = { class: "library-muted library-catalogue-eyebrow" }, Ok = { id: "library-shelves-landing-heading" }, xk = { class: "library-muted" }, Nk = ["aria-label"], Lk = { class: "library-shelf-tree" }, Rk = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, Ik = { class: "library-muted" }, Pk = { class: "library-empty-actions" }, $k = ["href"], Dk = ["href"], Fk = {
  key: 4,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, Mk = { class: "library-catalogue-header" }, zk = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, Uk = { id: "library-catalogue-heading" }, Bk = ["aria-label"], jk = { class: "library-mobile-filter-count" }, Hk = ["aria-label"], Vk = ["value"], Kk = ["name", "value"], Gk = { class: "library-mobile-filter-group" }, Wk = { class: "library-quick-filter-search" }, qk = ["placeholder"], Yk = { value: "" }, Xk = ["value"], Zk = { class: "library-publisher-filter" }, Jk = { for: "library-mobile-publisher-search" }, Qk = ["placeholder", "title", "aria-expanded"], e2 = ["value"], t2 = {
  key: 0,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, n2 = ["onClick"], i2 = { class: "library-publication-filter" }, a2 = { for: "library-mobile-publication-search" }, r2 = ["placeholder", "aria-expanded"], o2 = ["value"], s2 = {
  key: 0,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, l2 = ["onClick"], c2 = { class: "library-year-filter" }, u2 = { for: "library-mobile-year-search" }, d2 = ["placeholder", "aria-expanded"], f2 = ["value"], h2 = {
  key: 0,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, p2 = ["onClick"], v2 = { class: "library-creator-filter" }, g2 = { for: "library-mobile-creator-search" }, m2 = ["placeholder", "title", "aria-expanded"], b2 = ["value"], y2 = {
  key: 0,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, _2 = ["onClick"], w2 = { value: "" }, S2 = ["value"], C2 = { class: "library-subject-filter" }, T2 = { for: "library-mobile-subject-search" }, E2 = ["placeholder", "title", "aria-expanded"], A2 = ["value"], k2 = {
  key: 0,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, O2 = ["onClick"], x2 = { value: "" }, N2 = ["value"], L2 = { class: "library-mobile-filter-group" }, R2 = { value: "" }, I2 = ["value"], P2 = { class: "library-folder-filter" }, $2 = { for: "library-mobile-folder-search" }, D2 = ["placeholder", "title", "aria-expanded"], F2 = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, M2 = ["onClick"], z2 = { class: "library-mobile-filter-group" }, U2 = { value: "" }, B2 = ["value"], j2 = { value: "" }, H2 = ["value"], V2 = { value: "" }, K2 = { value: "1" }, G2 = { class: "library-mobile-filter-group" }, W2 = ["placeholder"], q2 = { value: "title" }, Y2 = { value: "recent" }, X2 = { value: "publicationDate" }, Z2 = { value: "publication" }, J2 = { value: "lastOpened" }, Q2 = { value: "format" }, eO = { value: "compact" }, tO = { value: "gallery" }, nO = { value: "list" }, iO = { value: "shelf" }, aO = { class: "library-mobile-filter-actions" }, rO = {
  href: "?",
  class: "button secondary library-mobile-filter-clear"
}, oO = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, sO = ["aria-label"], lO = ["aria-label"], cO = ["name", "value"], uO = { "data-library-control": "sort" }, dO = { value: "title" }, fO = { value: "recent" }, hO = { value: "publicationDate" }, pO = { value: "publication" }, vO = { value: "lastOpened" }, gO = { value: "format" }, mO = ["aria-label"], bO = ["aria-pressed"], yO = ["aria-pressed"], _O = ["aria-pressed"], wO = ["aria-pressed"], SO = {
  id: "library-collections",
  class: "library-saved-collections"
}, CO = ["title"], TO = ["action", "title"], EO = ["value"], AO = ["value"], kO = ["placeholder", "disabled"], OO = ["disabled", "title"], xO = ["aria-label"], NO = ["href"], LO = { class: "library-saved-collection-count" }, RO = ["action"], IO = ["value"], PO = {
  type: "submit",
  class: "button tertiary"
}, $O = ["aria-label"], DO = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, FO = ["title"], MO = { class: "library-workspace-panel-purpose" }, zO = { class: "library-workspace-scope-badge" }, UO = { "aria-live": "polite" }, BO = ["action"], jO = ["value"], HO = ["placeholder"], VO = ["title"], KO = ["action"], GO = ["value"], WO = ["placeholder"], qO = ["title"], YO = ["action"], XO = ["value"], ZO = ["name", "value"], JO = ["title"], QO = ["action"], ex = ["value"], tx = ["name", "value"], nx = { name: "bulkEditField" }, ix = { value: "publicationType" }, ax = { value: "subtitle" }, rx = { value: "creators" }, ox = { value: "publication" }, sx = { value: "publicationDate" }, lx = { value: "language" }, cx = { value: "publisher" }, ux = { value: "subjects" }, dx = { value: "classifications" }, fx = ["placeholder"], hx = ["title"], px = ["action"], vx = ["value"], gx = ["name", "value"], mx = ["title"], bx = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, yx = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, _x = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, wx = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Sx = { class: "library-muted library-catalogue-eyebrow" }, Cx = ["title"], Tx = ["aria-label"], Ex = { key: 0 }, Ax = { key: 1 }, kx = { key: 2 }, Ox = ["aria-label"], xx = { key: 0 }, Nx = { key: 1 }, Lx = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, Rx = { class: "library-muted library-catalogue-eyebrow" }, Ix = ["title"], Px = ["aria-label"], $x = ["href"], Dx = {
  key: 0,
  class: "library-notice"
}, Fx = { class: "library-publication-issue-label" }, Mx = ["href"], zx = { class: "library-muted" }, Ux = {
  key: 1,
  class: "library-publication-unknown-issues"
}, Bx = ["title"], jx = ["href"], Hx = { class: "library-catalogue-status-row" }, Vx = { class: "library-muted library-filter-result-summary" }, Kx = { key: 0 }, Gx = { href: "?" }, Wx = ["aria-label"], qx = { class: "library-pagination-range" }, Yx = { key: 0 }, Xx = ["href"], Zx = {
  key: 1,
  class: "library-muted"
}, Jx = ["href"], Qx = {
  key: 3,
  class: "library-muted"
}, eN = ["title"], tN = { class: "library-empty-actions" }, nN = ["href"], iN = { class: "library-muted" }, aN = ["title"], rN = { class: "library-empty-actions" }, oN = ["href"], sN = ["title"], lN = { class: "library-empty-actions" }, cN = ["href"], uN = {
  href: "?",
  class: "button primary"
}, dN = ["title"], fN = { class: "library-empty-actions" }, hN = ["href"], pN = {
  key: 5,
  class: "library-select-visible"
}, vN = ["checked"], gN = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, mN = { class: "library-item-selection" }, bN = ["checked", "aria-label", "onChange"], yN = { class: "library-catalogue-list-main" }, _N = ["onClick"], wN = {
  class: "library-bidi-human",
  dir: "auto"
}, SN = {
  key: 0,
  class: "library-muted"
}, CN = {
  class: "library-bidi-human",
  dir: "auto"
}, TN = { class: "library-catalogue-list-metadata" }, EN = { key: 0 }, AN = {
  class: "library-bidi-human",
  dir: "auto"
}, kN = { key: 1 }, ON = { key: 2 }, xN = ["dir"], NN = { key: 3 }, LN = {
  class: "library-bidi-human",
  dir: "auto"
}, RN = { class: "library-catalogue-list-actions" }, IN = ["href"], PN = ["onClick"], $N = { class: "library-item-selection" }, DN = ["checked", "aria-label", "onChange"], FN = ["aria-labelledby", "aria-expanded", "onClick"], MN = ["id"], zN = { class: "library-cover-frame" }, UN = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, BN = ["src", "onLoad", "onError"], jN = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, HN = ["action", "onSubmit"], VN = ["value"], KN = ["value"], GN = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], WN = ["data-library-star-error"], qN = { class: "library-cover-summary" }, YN = { class: "library-cover-primary" }, XN = ["id"], ZN = ["onClick"], JN = {
  class: "library-bidi-human",
  dir: "auto"
}, QN = {
  key: 0,
  class: "library-cover-creator"
}, e3 = {
  class: "library-bidi-human",
  dir: "auto"
}, t3 = {
  key: 1,
  class: "library-cover-badges"
}, n3 = {
  key: 0,
  class: "library-cover-badge"
}, i3 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, a3 = {
  key: 1,
  class: "library-cover-context"
}, r3 = {
  class: "library-bidi-human",
  dir: "auto"
}, o3 = { class: "library-cover-primary-actions" }, s3 = ["href"], l3 = ["aria-label"], c3 = { class: "library-pagination-range" }, u3 = { key: 0 }, d3 = ["href"], f3 = {
  key: 1,
  class: "library-muted"
}, h3 = ["href"], p3 = {
  key: 3,
  class: "library-muted"
}, v3 = { class: "library-sidebar-content" }, g3 = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, m3 = ["role"], b3 = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, y3 = { class: "library-sidebar-publication-header" }, _3 = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, w3 = ["src"], S3 = { class: "library-sidebar-publication-summary" }, C3 = { class: "library-muted library-catalogue-eyebrow" }, T3 = {
  class: "library-bidi-human",
  dir: "auto"
}, E3 = { key: 0 }, A3 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, k3 = { class: "library-detail-drawer-actions" }, O3 = ["href"], x3 = ["aria-label"], N3 = ["aria-current", "onClick"], L3 = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, R3 = { id: "library-sidebar-overview-heading" }, I3 = {
  key: 0,
  class: "library-sidebar-description"
}, P3 = {
  class: "library-bidi-human",
  dir: "auto"
}, $3 = { class: "library-detail-drawer-facts" }, D3 = { key: 0 }, F3 = { key: 1 }, M3 = { key: 2 }, z3 = { key: 3 }, U3 = { key: 4 }, B3 = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, j3 = { id: "library-sidebar-metadata-heading" }, H3 = ["placeholder"], V3 = ["onUpdate:modelValue", "aria-label", "placeholder"], K3 = ["onUpdate:modelValue", "aria-label"], G3 = ["onClick"], W3 = { class: "library-muted" }, q3 = {
  key: 0,
  role: "alert"
}, Y3 = {
  key: 1,
  role: "status"
}, X3 = ["disabled"], Z3 = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, J3 = { id: "library-sidebar-suggestions-heading" }, Q3 = { class: "library-muted" }, eL = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, tL = { id: "library-sidebar-activity-heading" }, nL = { class: "library-detail-drawer-facts" }, iL = { key: 0 }, aL = { key: 1 }, rL = { key: 2 }, oL = { class: "library-detail-drawer-file" }, sL = ["href"], lL = { dir: "ltr" }, cL = {
  key: 1,
  dir: "ltr"
}, uL = ["aria-label"], dL = ["disabled"], fL = ["disabled"], hL = 20, pL = "/apps/library", vL = 2147483647, gL = {
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
    function r(b, f) {
      return Object.prototype.hasOwnProperty.call(a, b) && String(f ?? "").trim() === a[b];
    }
    function o(b) {
      const f = new URLSearchParams(b);
      for (const l of Object.keys(a)) {
        const D = [...new Set([...f.keys()].filter((xe) => xe === l || xe.startsWith(`${l}[`)))], re = D.reduce((xe, $e) => xe + f.getAll($e).length, 0);
        if (re > 1 || D.some((xe) => xe !== l)) {
          for (const xe of D) f.delete(xe);
          continue;
        }
        l !== "status" && re === 1 && !r(l, f.get(l)) && f.delete(l);
      }
      return f;
    }
    function s(b) {
      return Object.keys(a).some((f) => b.getAll(f).length === 1 && r(f, b.get(f)));
    }
    function u(b) {
      return Object.fromEntries(Object.entries(b || {}).filter(([f, l]) => f === "status" || !Object.prototype.hasOwnProperty.call(a, f) || r(f, l)));
    }
    const h = /* @__PURE__ */ Dt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), d = /* @__PURE__ */ Dt((h.items || []).map((b) => ({ ...b }))), m = H(() => d), C = H(() => h.shelves || []), E = H(() => h.formats || []), x = H(() => h.publicationTypes?.length ? h.publicationTypes : n), A = H(() => h.publications || []), O = H(() => h.publicationIssueContext || null), F = H(() => h.scanStatuses || []), z = H(() => h.workflowStatuses || []), W = H(() => h.classifications || []), P = H(() => h.cataloguePagination || {
      page: 1,
      limit: 100,
      total: m.value.length,
      visible: m.value.length,
      from: m.value.length > 0 ? 1 : 0,
      to: m.value.length,
      previousUrl: "",
      nextUrl: ""
    }), N = /* @__PURE__ */ Dt({
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
    for (const b of Object.keys(a))
      b !== "status" && (r(b, N[b]) || (N[b] = ""));
    const de = /* @__PURE__ */ Ne(N.publication), J = /* @__PURE__ */ Ne(N.q), fe = /* @__PURE__ */ Ne(!1), Y = /* @__PURE__ */ Ne(null), se = H(() => {
      const b = de.value.trim().toLocaleLowerCase();
      return (b !== "" && Y.value !== null ? Y.value : A.value).filter((l) => b === "" || l.toLocaleLowerCase().includes(b)).slice(0, hL);
    });
    nt(() => N.publication, (b) => {
      de.value = b || "";
    }), nt(() => N.q, (b) => {
      J.value = b || "";
    });
    let ye = null, Q = null, ie = 0;
    nt(de, (b) => {
      window.clearTimeout(ye), Q?.abort(), Q = null, Y.value = null;
      const f = String(b || "").trim();
      if (f.length < 3) return;
      const l = ++ie;
      ye = window.setTimeout(() => {
        qv(f, l);
      }, 200);
    });
    const $ = /* @__PURE__ */ Ne(N.publisher), M = /* @__PURE__ */ Ne(!1), X = /* @__PURE__ */ Ne(null), oe = H(() => X.value || []);
    nt(() => N.publisher, (b) => {
      $.value = b || "";
    });
    let ne = null, ve = null, ge = 0;
    nt($, (b) => {
      window.clearTimeout(ne), ve?.abort(), ve = null, X.value = null;
      const f = String(b || "").trim();
      if (f.length < 3) return;
      const l = ++ge;
      ne = window.setTimeout(() => {
        Vv(f, l);
      }, 200);
    });
    const _e = /* @__PURE__ */ Ne(N.creator), pe = /* @__PURE__ */ Ne(!1), qe = /* @__PURE__ */ Ne(null), Ee = H(() => qe.value || []);
    nt(() => N.creator, (b) => {
      _e.value = b || "";
    });
    let ut = null, dt = null, mt = 0;
    nt(_e, (b) => {
      window.clearTimeout(ut), dt?.abort(), dt = null, qe.value = null;
      const f = String(b || "").trim();
      if (f.length < 3) return;
      const l = ++mt;
      ut = window.setTimeout(() => {
        Hv(f, l);
      }, 200);
    });
    const ft = /* @__PURE__ */ Ne(N.folder), Ve = /* @__PURE__ */ Ne(!1), qt = /* @__PURE__ */ Ne(null), j = H(() => qt.value || []);
    nt(() => N.folder, (b) => {
      ft.value = b || "";
    });
    let _ = null, T = null, k = 0;
    nt(ft, (b) => {
      window.clearTimeout(_), T?.abort(), T = null, qt.value = null;
      const f = String(b || "").trim();
      if (f.length < 3) return;
      const l = ++k;
      _ = window.setTimeout(() => {
        Gv(f, l);
      }, 200);
    });
    const R = /* @__PURE__ */ Ne(N.subject), L = /* @__PURE__ */ Ne(!1), U = /* @__PURE__ */ Ne(null), G = H(() => U.value || []);
    nt(() => N.subject, (b) => {
      R.value = b || "";
    });
    let V = null, Z = null, K = 0;
    nt(R, (b) => {
      window.clearTimeout(V), Z?.abort(), Z = null, U.value = null;
      const f = String(b || "").trim();
      if (f.length < 3) return;
      const l = ++K;
      V = window.setTimeout(() => {
        Kv(f, l);
      }, 200);
    });
    const he = /* @__PURE__ */ Ne(N.year), ae = /* @__PURE__ */ Ne(!1), me = /* @__PURE__ */ Ne(null), Ce = H(() => me.value || []);
    nt(() => N.year, (b) => {
      he.value = b || "";
    });
    let Ie = null, Me = null, ze = 0;
    nt(he, (b) => {
      window.clearTimeout(Ie), Me?.abort(), Me = null, me.value = null;
      const f = String(b || "").trim();
      if (f.length < 2) return;
      const l = ++ze;
      Ie = window.setTimeout(() => {
        Wv(f, l);
      }, 200);
    });
    const it = Object.fromEntries(Object.keys(N).map((b) => [b, b === "sort" ? "title" : b === "view" ? "compact" : ""])), lt = window.location.pathname.indexOf(pL), ht = lt >= 0 ? window.location.pathname.slice(0, lt) : "", bt = {
      catalogue: `${ht}/apps/library/`,
      review: `${ht}/apps/library/?scannerConflicts=1`,
      settings: `${ht}/settings/user/library`
    };
    function Ct(b, f) {
      if (typeof b != "string" || b === "") return f;
      try {
        const l = ht ? `${ht}/` : "/";
        let D = b;
        for (let re = 0; re < 5; re += 1) {
          if (!D.startsWith("/") || D.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(D)) return f;
          const xe = new URL(D, window.location.origin);
          if (xe.origin !== window.location.origin || !xe.pathname.startsWith(l)) return f;
          const $e = D.split(/[?#]/, 1)[0];
          for (const nn of $e.split("/")) {
            let wi = nn;
            for (let xa = 0; xa < 5; xa += 1) {
              const $n = decodeURIComponent(wi);
              if (/[\\/\u0000-\u001f\u007f]/.test($n) || $n === "." || $n === "..") return f;
              if ($n === wi) break;
              if (wi = $n, xa === 4) return f;
            }
          }
          const at = decodeURI(D);
          if (at === D) return b;
          D = at;
        }
        return f;
      } catch {
        return f;
      }
    }
    const Qt = H(() => Ct(h.settingsUrl, bt.settings)), We = H(() => Ct(h.catalogueRootUrl, bt.catalogue)), Ht = H(() => Ct(h.homeUrl, `${bt.catalogue}?home=1`)), vi = H(() => Ct(h.shelvesUrl, `${bt.catalogue}?shelves=1`)), Ui = H(() => Ct(h.reviewUrl || h.scannerConflictReviewUrl, bt.review)), Bi = H(() => Object.entries(a).some(([b, f]) => N[b] === f)), ba = H(() => i.reduce((b, f) => b + Number(Wl.value[f.countKey] || 0), 0)), cn = H(() => h.surface === "home"), un = H(() => h.surface === "shelves"), wo = H(() => !cn.value && !un.value && !Bi.value && !N.starred && N.sort !== "lastOpened" && !N.shelf), So = H(() => [
      { key: "home", name: g("library", "Home"), href: Ht.value, active: cn.value },
      { key: "all", name: g("library", "All publications"), href: We.value, active: wo.value },
      { key: "starred", name: g("library", "Starred"), href: `${We.value}?starred=1`, active: N.starred === "1" },
      { key: "continue", name: g("library", "Continue reading"), href: `${We.value}?sort=lastOpened`, active: N.sort === "lastOpened" },
      { key: "shelves", name: g("library", "Shelves"), href: vi.value, active: un.value || !!N.shelf },
      { key: "collections", name: g("library", "Collections"), href: `${We.value}#library-collections`, active: !1 }
    ]), en = H(() => h.requestToken || ""), qa = H(() => h.catalogueEndpointUrl || "/apps/library/catalogue"), Co = H(() => h.shelfChildrenUrl || "/apps/library/shelves/children"), ya = H(() => h.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), _a = H(() => h.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), dn = H(() => h.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), gi = H(() => h.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Ya = H(() => h.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Xa = H(() => h.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Ml = H(() => h.itemSidebarUrlTemplate || `${ht}/apps/library/items/__ITEM_ID__/sidebar`), To = H(() => h.batchTagUrl || "/apps/library/bulk/tags"), Za = H(() => h.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Eo = H(() => h.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ja = H(() => h.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), zl = H(() => h.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), mi = H(() => h.scannerConflictReviewUrl || "?scannerConflicts=1");
    h.importHealthSummary, h.importHealthSummary && Object.keys(h.importHealthSummary).length > 0;
    const Qa = H(() => h.discoveryPage === "publication"), er = H(() => h.discoveryPage === "year"), ct = H(() => h.discoveryPage === "creator"), Rn = H(() => Qa.value || er.value || ct.value), Ao = H(() => h.discoveryTitle || N.publication || N.year || N.creator || ""), ko = H(() => Rn.value ? Ao.value : g("library", "Library")), wa = H(() => ct.value ? g("library", "Creator") : er.value ? g("library", "Publication year") : g("library", "Publication / series")), tr = H(() => Number(h.rootCount || 0)), Oo = H(() => Number(h.enabledRootCount || 0)), nr = H(() => tr.value === 0), ir = H(() => tr.value > 0 && Oo.value === 0), xo = H(() => Ki.value.length > 0), In = /* @__PURE__ */ Ne(!1), Cn = /* @__PURE__ */ Ne(null), ar = {
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
    }, Sa = {
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
    }, Kn = {
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
    }, No = H(() => {
      if (typeof window > "u") return "";
      const b = new URLSearchParams(window.location.search);
      if (b.get("batchMetadataApplyResult") !== "1") return "";
      const f = b.get("batchMetadataField") || "field", l = b.get("batchMetadataApplied") || "0", D = b.get("batchMetadataUnchanged") || "0", re = b.get("batchMetadataSkipped") || "0";
      return g("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: l, field: f, unchanged: D, skipped: re });
    }), ji = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? g("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), rr = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? g("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Lo = H(() => h.savedCollections || []), Ro = H(() => h.savedCollectionSaveUrl || "/apps/library/collections"), Io = H(() => h.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Hi = ["compact", "gallery", "list", "shelf"], Rt = H(() => Hi.includes(N.view) ? N.view : "compact"), Ca = H(() => ({
      "library-cover-gallery--compact": Rt.value === "compact",
      "library-cover-gallery--gallery": Rt.value === "gallery",
      "library-cover-gallery--shelf": Rt.value === "shelf"
    }));
    function bi(b) {
      const f = String(b || "").trim();
      if (f.length <= 32) return f;
      const l = f.split("/").filter(Boolean);
      return l.length > 0 ? `…/${l.at(-1)}` : f;
    }
    function Vi(b, f) {
      const l = String(f || "").trim();
      if (l === "" || Sa[b] === l) return "";
      if (b === "format") return l.toUpperCase();
      if (b === "folder") return bi(l);
      const D = Kn[b]?.[l];
      return D ? g("library", D) : l;
    }
    function fn(b, f) {
      const l = String(N[b] || "").trim(), D = Vi(b, l), re = g("library", f);
      return {
        key: b,
        label: re,
        value: l,
        displayValue: D,
        title: D ? `${re}: ${l}` : re
      };
    }
    const Ki = H(() => Object.entries(ar).map(([b, f]) => fn(b, f)).filter((b) => b.value !== "" && !(b.key === "sort" && b.value === "title") && !(b.key === "view" && b.value === "compact"))), Gn = H(() => Ki.value.length), Ul = H(() => Gn.value > 0 ? g("library", "Filters ({count})", { count: Gn.value }) : g("library", "Filters")), Po = H(() => Gn.value > 0 ? g("library", "Open filters panel; {count} active filters", { count: Gn.value }) : g("library", "Open filters panel")), $o = H(() => vn("library", "Show %n item", "Show %n items", Number(P.value.total || 0)));
    function Do(b) {
      In.value = b.currentTarget?.open === !0, In.value && Jt(() => {
        Cn.value?.focus?.();
      });
    }
    const Fo = /* @__PURE__ */ new Set([
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
    ]), Mo = H(() => Object.entries(u(N)).filter(([b, f]) => !Fo.has(b) && String(f || "").trim() !== "").map(([b, f]) => ({ key: b, value: f }))), zo = H(() => Object.entries(N).filter(([b, f]) => !["q", "sort", "starred"].includes(b) && String(f || "").trim() !== "").map(([b, f]) => ({ key: b, value: f }))), Ta = H(() => Object.entries(u(N)).filter(([b, f]) => String(f || "").trim() !== "").map(([b, f]) => ({ key: b, value: f }))), Bl = H(() => Ta.value.filter(({ key: b, value: f }) => b !== "q" && !(b === "sort" && f === "title"))), Ea = /* @__PURE__ */ Dt({}), Wn = H(() => h.homeRows || { continueReading: [], recentlyAdded: [] }), Aa = H(() => h.homeShelves || []), ee = H(() => h.shelfTree || []), S = H(() => h.needsAttention || { count: 0, url: `${We.value}?needsMetadata=1` }), I = /* @__PURE__ */ Ne([]), q = H(() => new Set(I.value));
    function ce(b, f) {
      const l = new Set(I.value);
      f ? l.add(Number(b)) : l.delete(Number(b)), I.value = [...l];
    }
    function be(b) {
      I.value = b.currentTarget.checked ? m.value.map((f) => Number(f.id)) : [];
    }
    function Oe() {
      const b = new Set(m.value.map((f) => Number(f.id)));
      I.value = I.value.filter((f) => b.has(f));
    }
    function et(b) {
      const f = b.target;
      if (f instanceof HTMLFormElement) {
        f.querySelectorAll("input[data-library-selected-id]").forEach((l) => l.remove());
        for (const l of I.value) {
          const D = document.createElement("input");
          D.type = "hidden", D.name = "itemIds[]", D.value = String(l), D.dataset.librarySelectedId = "1", f.appendChild(D);
        }
      }
    }
    const ue = /* @__PURE__ */ Ne(null), pt = /* @__PURE__ */ Ne(null), Xe = /* @__PURE__ */ Dt({ loading: !1, error: "", missing: !1 }), Tn = /* @__PURE__ */ Ne("overview"), tt = /* @__PURE__ */ Dt({ saving: !1, saved: !1, error: "" }), It = /* @__PURE__ */ Dt({ title: "", publicationDate: "", identifiers: [] }), Yu = /* @__PURE__ */ Ne(null), Gi = /* @__PURE__ */ Ne(null), Wi = /* @__PURE__ */ Ne(!1);
    let jl = null, qn = null, Uo = null, Hl = !1, or = null, Vl = 0;
    const yi = H(() => pt.value !== null), sr = H(() => ue.value ? m.value.findIndex((b) => b.id === ue.value.id) : -1), Bo = H(() => sr.value > 0 ? m.value[sr.value - 1] : null), jo = H(() => sr.value >= 0 && sr.value < m.value.length - 1 ? m.value[sr.value + 1] : null), $v = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Dv = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Ho(b) {
      const f = String(b ?? "").trim(), l = f.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return l ? l[1] : f;
    }
    function Xu(b) {
      return { ...b, publicationDate: Ho(b?.publicationDate) };
    }
    function Zu(b) {
      It.title = String(b?.title || ""), It.publicationDate = Ho(b?.publicationDate), It.identifiers = Array.isArray(b?.identifiers) ? b.identifiers.map((f) => ({ scheme: String(f?.scheme || ""), displayValue: String(f?.displayValue || f?.value || "") })) : [], Object.assign(tt, { saving: !1, saved: !1, error: "" });
    }
    function Fv() {
      It.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Mv(b) {
      It.identifiers.splice(b, 1);
    }
    async function zv() {
      const b = ue.value;
      if (!b?.updateUrl || tt.saving) return;
      Object.assign(tt, { saving: !0, saved: !1, error: "" });
      const f = new FormData();
      f.set("requesttoken", en.value), f.set("metadataAutosave", "1");
      for (const l of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const D = b[l];
        f.set(l, Array.isArray(D) ? D.join(", ") : String(D ?? ""));
      }
      f.set("title", It.title), f.set("publicationDate", Ho(It.publicationDate)), It.identifiers.forEach((l, D) => {
        f.set(`identifiers[${D}][scheme]`, l.scheme), f.set(`identifiers[${D}][displayValue]`, l.displayValue);
      });
      try {
        const l = await fetch(b.updateUrl, { method: "POST", body: f, credentials: "same-origin", headers: { Accept: "application/json" } }), D = await l.json().catch(() => ({}));
        if (!l.ok || D.saved !== !0) throw new Error(D.error || g("library", "Metadata could not be saved."));
        b.title = It.title.trim(), b.publicationDate = Ho(It.publicationDate), b.identifiers = It.identifiers.filter((xe) => xe.scheme.trim() || xe.displayValue.trim()).map((xe) => ({ ...xe }));
        const re = m.value.find((xe) => Number(xe.id) === Number(b.id));
        re && (re.title = b.title, re.publicationDate = b.publicationDate), tt.saved = !0;
      } catch (l) {
        tt.error = l?.message || g("library", "Metadata could not be saved.");
      } finally {
        tt.saving = !1;
      }
    }
    const _i = H(() => {
      const b = r("scannerConflicts", N.scannerConflicts) || r("weakMetadata", N.weakMetadata), f = b ? m.value.find((l) => Vo(l).length > 0) : null;
      return {
        enabled: b,
        item: f,
        fields: f ? Vo(f) : [],
        reviewNextUrl: mi.value,
        skipUrl: P.value.nextUrl || mi.value
      };
    }), Uv = H(() => i.map((b) => ({
      ...b,
      label: g("library", b.label),
      href: `${We.value}?${encodeURIComponent(b.key)}=${encodeURIComponent(b.value)}`,
      active: String(N[b.key] || "") === b.value
    })));
    function Kl(b) {
      return Array.isArray(b) ? JSON.stringify(b) : b == null ? "" : String(b);
    }
    function Vo(b) {
      const f = b.fieldValues || {}, l = b.fieldSources || {};
      return $v.filter((D) => Object.prototype.hasOwnProperty.call(f, D)).map((D) => {
        const re = Kl(b[D]), xe = Kl(f[D]), $e = Kl(l[D] || b.metadataSource || "scanner"), at = $e.includes("filename") || $e.includes("path") ? xe : "", nn = $e.includes("sidecar") ? xe : "";
        return { field: D, currentValue: re, scannerCandidate: xe, pathTemplateCandidate: at, sidecarValue: nn, sourceProvenance: $e, differs: re !== xe };
      }).filter((D) => D.differs);
    }
    let qi = 0, Yi = null;
    function Ju() {
      const b = new URLSearchParams(window.location.search).getAll("item");
      if (b.length !== 1 || !/^[1-9][0-9]*$/.test(b[0])) return null;
      const f = Number(b[0]);
      return Number.isSafeInteger(f) && f <= vL ? f : null;
    }
    function Qu(b, f = "push") {
      const l = new URL(window.location.href);
      l.searchParams.delete("item"), b !== null && l.searchParams.set("item", String(b)), history[`${f}State`]({}, "", `${l.pathname}${l.search}${l.hash}`);
    }
    async function lr(b, { historyMode: f = "push", seed: l = null } = {}) {
      Yi?.abort();
      const D = ++qi, re = new AbortController();
      Yi = re, pt.value = b, Tn.value = "overview", ue.value = l && Number(l.id) === b ? Xu(l) : null, ue.value && Zu(ue.value), Object.assign(Xe, { loading: !0, error: "", missing: !1 }), f !== "none" && Qu(b, f);
      try {
        const xe = Ml.value.replace("__ITEM_ID__", encodeURIComponent(String(b))), $e = await fetch(xe, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: re.signal });
        if (D !== qi) return;
        if (!$e.ok) {
          ue.value = null, Xe.missing = $e.status === 404, Xe.error = $e.status === 404 ? g("library", "This publication is unavailable or you do not have access.") : g("library", "Could not load publication details. Try again.");
          return;
        }
        const at = await $e.json();
        if (D !== qi) return;
        if (typeof at?.item?.id != "number" || !Number.isSafeInteger(at.item.id) || at.item.id !== b) {
          ue.value = null, Xe.missing = !1, Xe.error = g("library", "Could not load publication details. Try again.");
          return;
        }
        ue.value = Xu(at.item), Zu(ue.value), await Jt();
      } catch (xe) {
        D === qi && xe?.name !== "AbortError" && (ue.value = null, Xe.missing = !1, Xe.error = g("library", "Could not load publication details. Try again."));
      } finally {
        D === qi && (Xe.loading = !1, Yi = null);
      }
    }
    function Pn(b, f) {
      Gl(), jl = f?.currentTarget instanceof HTMLElement ? f.currentTarget : null, lr(Number(b.id), { seed: b });
    }
    function Ko({ historyMode: b = "push", restoreFocus: f = !0 } = {}) {
      Uo = f ? jl : null, jl = null, Yi?.abort(), Yi = null, qi += 1, pt.value = null, ue.value = null, Tn.value = "overview", Object.assign(Xe, { loading: !1, error: "", missing: !1 }), b !== "none" && Qu(null, b);
    }
    function ed() {
      Wi.value ? (Gi.value?.$refs?.sidebar || Gi.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Yu.value?.focus();
    }
    function Bv() {
      const b = Uo;
      if (Uo = null, Gl(), Hl || !b?.isConnected) return;
      const f = Vl;
      or = window.requestAnimationFrame(() => {
        or = null, !(f !== Vl || Hl || yi.value || !b.isConnected) && b.focus();
      });
    }
    function Gl() {
      Vl += 1, or !== null && (window.cancelAnimationFrame(or), or = null);
    }
    function cr(b = qn) {
      Wi.value = !!b?.matches, yi.value && Jt(ed);
    }
    function Go(b) {
      b && lr(Number(b.id), { seed: b });
    }
    const ur = /* @__PURE__ */ Ne(null);
    let tn = 0, ka = null, Wo = null, dr = null;
    const En = /* @__PURE__ */ Dt({ loading: !1, error: "" });
    function jv(b) {
      const f = o(new FormData(b));
      f.delete("publicationSearch"), f.delete("creatorSearch"), f.delete("subjectSearch"), f.delete("publisherSearch"), f.delete("folderSearch"), f.delete("yearSearch");
      for (const l of Array.from(f.keys()))
        String(f.get(l) || "").trim() === "" && f.delete(l);
      return f.delete("page"), f.get("view") === "compact" && f.delete("view"), f.get("sort") === "title" && f.delete("sort"), f;
    }
    async function fr(b, f, l) {
      const D = new URLSearchParams();
      for (const [$e, at] of Object.entries(N)) {
        const nn = String(at || "").trim();
        $e !== b && nn !== "" && !($e === "sort" && nn === "title") && !($e === "view" && nn === "compact") && D.set($e, nn);
      }
      D.set(`${b}Search`, f);
      const re = new AbortController();
      b === "creator" ? dt = re : b === "publisher" ? ve = re : b === "subject" ? Z = re : b === "folder" ? T = re : Me = re;
      const xe = b === "creator" ? _a.value : b === "publisher" ? dn.value : b === "subject" ? gi.value : b === "folder" ? Ya.value : Xa.value;
      try {
        const $e = await fetch(`${xe}?${D}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: re.signal });
        if (!$e.ok) throw new Error(`${b} suggestions request failed: ${$e.status}`);
        const at = await $e.json(), nn = b === "creator" ? mt : b === "publisher" ? ge : b === "subject" ? K : b === "folder" ? k : ze, wi = b === "creator" ? _e.value : b === "publisher" ? $.value : b === "subject" ? R.value : b === "folder" ? ft.value : he.value;
        l === nn && wi.trim() === f && (b === "creator" ? qe.value = Array.isArray(at.creators) ? at.creators : [] : b === "publisher" ? X.value = Array.isArray(at.publishers) ? at.publishers : [] : b === "subject" ? U.value = Array.isArray(at.subjects) ? at.subjects : [] : b === "folder" ? qt.value = Array.isArray(at.folders) ? at.folders : [] : me.value = Array.isArray(at.years) ? at.years : []);
      } catch ($e) {
        $e?.name !== "AbortError" && (b === "creator" && l === mt && (qe.value = null), b === "publisher" && l === ge && (X.value = null), b === "subject" && l === K && (U.value = null), b === "folder" && l === k && (qt.value = null), b === "year" && l === ze && (me.value = null));
      }
    }
    function Hv(b, f) {
      return fr("creator", b, f);
    }
    function Vv(b, f) {
      return fr("publisher", b, f);
    }
    function Kv(b, f) {
      return fr("subject", b, f);
    }
    function Gv(b, f) {
      return fr("folder", b, f);
    }
    function Wv(b, f) {
      return fr("year", b, f);
    }
    async function qv(b, f) {
      const l = new URLSearchParams();
      for (const [re, xe] of Object.entries(N)) {
        const $e = String(xe || "").trim();
        re !== "publication" && $e !== "" && !(re === "sort" && $e === "title") && !(re === "view" && $e === "compact") && l.set(re, $e);
      }
      l.set("publicationSearch", b);
      const D = new AbortController();
      Q = D;
      try {
        const re = await fetch(`${ya.value}?${l}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: D.signal
        });
        if (!re.ok) throw new Error(`Publication suggestions request failed: ${re.status}`);
        const xe = await re.json();
        f === ie && de.value.trim() === b && (Y.value = Array.isArray(xe.publications) ? xe.publications : []);
      } catch (re) {
        re?.name !== "AbortError" && f === ie && (Y.value = null);
      } finally {
        f === ie && (Q = null);
      }
    }
    function Yv(b) {
      d.splice(0, d.length, ...(b.items || []).map((l) => ({ ...l }))), Oe();
      const f = new Set(b.facetsDeferred ? [
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
      for (const l of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "publisherSuggestionsUrl", "subjectSuggestionsUrl", "folderSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "smartViewCountsPending", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        !f.has(l) && Object.prototype.hasOwnProperty.call(b, l) && (h[l] = b[l]);
      Object.assign(N, it, b.activeFilters || {});
    }
    async function Xv() {
      if (h.surface !== "index") return;
      const b = tn, f = JSON.stringify({ ...N }), l = new URLSearchParams();
      l.set("hydrate", "1");
      for (const [re, xe] of Object.entries(N)) {
        const $e = String(xe || "").trim();
        $e !== "" && !(re === "sort" && $e === "title") && !(re === "view" && $e === "compact") && l.set(re, $e);
      }
      const D = new AbortController();
      Wo = D;
      try {
        const re = await fetch(`${qa.value}${l.size ? `?${l}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: D.signal
        });
        if (!re.ok) return;
        const xe = await re.json();
        if (b !== tn || f !== JSON.stringify({ ...N })) return;
        for (const $e of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(xe, $e) && (h[$e] = xe[$e]);
      } catch (re) {
        if (re?.name !== "AbortError") return;
      } finally {
        Wo === D && (Wo = null);
      }
    }
    async function Yt(b, f = null) {
      const l = b?.currentTarget?.tagName === "FORM" ? b.currentTarget : b?.currentTarget?.form;
      if (!l && !f?.params) return;
      const D = o(f?.params ?? jv(l));
      if (cn.value || un.value) {
        hr(D, We.value);
        return;
      }
      const re = D.toString(), xe = re ? `?${re}` : "", $e = f?.generation ?? ++tn, at = s(D), nn = f?.historyMode ?? (at ? "push" : "replace"), wi = f?.historyTraversal === !0;
      if ($e !== tn) return;
      f === null && ka?.abort();
      const xa = new AbortController();
      ka = xa, En.loading = !0, En.error = "";
      try {
        const $n = await fetch(qa.value + xe, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: xa.signal
        });
        if ($e !== tn) return;
        if (!$n.ok) {
          wi ? hr(D) : at ? En.error = g("library", "Could not load this review queue. Try again.") : hr(D);
          return;
        }
        const vg = await $n.json();
        if ($e !== tn) return;
        Yv(vg), nn !== "none" && (history[nn === "push" ? "pushState" : "replaceState"]({}, "", re ? `?${re}` : window.location.pathname), yi.value && Ko({ historyMode: "none" }));
      } catch ($n) {
        $e === tn && $n?.name !== "AbortError" && (wi ? hr(D) : at ? En.error = g("library", "Could not load this review queue. Try again.") : hr(D));
      } finally {
        $e === tn && (ka = null, En.loading = !1);
      }
    }
    function td() {
      ka?.abort();
      const b = new URLSearchParams(window.location.search), f = Ju();
      b.has("item") && f === null && (b.delete("item"), history.replaceState({}, "", `${window.location.pathname}${b.toString() ? `?${b}` : ""}${window.location.hash}`)), f === null ? Ko({ historyMode: "none" }) : lr(f, { historyMode: "none", seed: m.value.find((l) => Number(l.id) === f) || null }), b.delete("item"), Yt(null, {
        params: o(b),
        generation: ++tn,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function hr(b, f = window.location.pathname) {
      const l = document.createElement("form");
      l.method = "get", l.action = f, l.hidden = !0;
      for (const [D, re] of b.entries()) {
        const xe = document.createElement("input");
        xe.type = "hidden", xe.name = D, xe.value = re, l.appendChild(xe);
      }
      document.body.appendChild(l), l.submit(), l.remove();
    }
    function Vt(b, f = null, l = null) {
      if (f === null) {
        Yt(b);
        return;
      }
      Yt({ currentTarget: b }, { params: f, generation: l });
    }
    async function Zv(b, f = de.value) {
      N.publication = String(f || "").trim(), de.value = N.publication, fe.value = !1, await Jt(), Yt({ currentTarget: b });
    }
    function nd(b, f) {
      Zv(f.currentTarget.form, b);
    }
    async function Jv(b) {
      N.q = String(J.value || "").trim(), N.publication = String(de.value || "").trim(), N.publisher = String($.value || "").trim(), N.creator = String(_e.value || "").trim(), N.subject = String(R.value || "").trim(), N.folder = String(ft.value || "").trim(), N.year = String(he.value || "").trim(), fe.value = !1, M.value = !1, pe.value = !1, L.value = !1, Ve.value = !1, ae.value = !1, await Jt(), Yt({ currentTarget: b });
    }
    async function pr(b, f, l) {
      N[f] = String(l || "").trim(), f === "creator" ? (_e.value = N.creator, pe.value = !1) : f === "publisher" ? ($.value = N.publisher, M.value = !1) : f === "subject" ? (R.value = N.subject, L.value = !1) : f === "folder" ? (ft.value = N.folder, Ve.value = !1) : (he.value = N.year, ae.value = !1), await Jt(), Yt({ currentTarget: b });
    }
    function id(b) {
      Jv(b.currentTarget);
    }
    function ad(b, f) {
      pr(f.currentTarget.form, "creator", b);
    }
    function rd(b, f) {
      pr(f.currentTarget.form, "publisher", b);
    }
    function od(b, f) {
      pr(f.currentTarget.form, "folder", b);
    }
    function sd(b, f = R.value) {
      window.clearTimeout(V), Z?.abort(), Z = null, pr(b, "subject", f);
    }
    function Qv(b) {
      sd(b.currentTarget.form);
    }
    function ld(b, f) {
      sd(f.currentTarget.form, b);
    }
    function cd(b, f) {
      pr(f.currentTarget.form, "year", b);
    }
    function ud(b) {
      const f = new URLSearchParams();
      for (const [l, D] of Object.entries(N)) {
        const re = String(D || "").trim();
        re !== "" && l !== b && !(l === "sort" && re === "title") && !(l === "view" && re === "compact") && f.set(l, re);
      }
      return f;
    }
    function dd(b) {
      const f = ud(b).toString();
      return cn.value || un.value ? `${We.value}${f ? `?${f}` : ""}` : f ? `?${f}` : "?";
    }
    function eg(b) {
      const f = ud(b);
      N[b] = b === "sort" ? "title" : b === "view" ? "compact" : "", Yt(null, {
        params: f,
        generation: ++tn
      });
    }
    function tg(b) {
      const f = new URL(b.href, window.location.origin).searchParams;
      Yt(null, {
        params: f,
        generation: ++tn
      });
    }
    function ng() {
      return dd("q");
    }
    const Wl = H(() => h.smartViewCounts || {}), ig = H(() => new Set(h.smartViewCountsPending || []));
    function ag(b) {
      return ig.value.has(b) || !Object.prototype.hasOwnProperty.call(Wl.value, b) ? "—" : Number(Wl.value[b] || 0);
    }
    const fd = H(() => {
      const b = {};
      for (const [f, l] of Object.entries(N)) {
        const D = String(l || "").trim();
        D !== "" && !(f === "sort" && D === "title") && (b[f] = D);
      }
      return b;
    }), rg = H(() => JSON.stringify(fd.value)), ql = H(() => Object.keys(fd.value).length > 0);
    function qo(b) {
      if (!Hi.includes(b)) return;
      N.view = b;
      const f = new URLSearchParams();
      for (const [l, D] of Object.entries(u(N))) {
        const re = String(D || "").trim();
        re !== "" && !(l === "sort" && re === "title") && !(l === "view" && re === "compact") && f.set(l, re);
      }
      f.delete("page"), Yt(null, {
        params: f,
        generation: ++tn
      });
    }
    function og(b) {
      const f = o(window.location.search);
      for (const D of Object.keys(ar))
        f.delete(D);
      f.delete("page");
      for (const [D, re] of Object.entries(b))
        String(re || "").trim() !== "" && f.set(D, String(re));
      const l = f.toString();
      return l ? `?${l}` : "?";
    }
    function sg(b) {
      return og(b || {});
    }
    function lg(b) {
      return Io.value.replace("__COLLECTION_ID__", encodeURIComponent(String(b || "0")));
    }
    function Oa(b) {
      return String(b || "").toUpperCase();
    }
    function vr(b) {
      return Ea[b.id] || "loading";
    }
    function cg(b) {
      Ea[b.id] = "loaded";
    }
    function ug(b) {
      Ea[b.id] = "error";
    }
    function Yl(b) {
      const f = String(b?.publication || "").trim(), l = String(b?.publicationDate || "").trim();
      return f && l ? `${f} · ${l}` : f || l ? f || l : [b?.publicationType, Oa(b?.extension)].filter(Boolean).join(" · ");
    }
    function dg(b) {
      const f = String(b?.tagName || "").toLowerCase();
      return b?.isContentEditable || ["input", "select", "textarea", "button"].includes(f);
    }
    function fg(b) {
      b.key !== "/" || b.metaKey || b.ctrlKey || b.altKey || b.shiftKey || dg(b.target) || (b.preventDefault(), ur.value?.focus(), ur.value?.select?.());
    }
    async function hg(b) {
      b.key !== "Escape" || document.activeElement !== ur.value || N.q === "" || (b.preventDefault(), J.value = "", N.q = "", await Jt(), Vt({ currentTarget: ur.value }));
    }
    function pg(b) {
      if (!yi.value || b.metaKey || b.ctrlKey || b.altKey)
        return !1;
      if (b.key === "Escape")
        return b.preventDefault(), Ko(), !0;
      if (b.key === "Tab" && Wi.value) {
        if (Gi.value?.focusTrap) return !1;
        const f = Gi.value?.$refs?.sidebar || Gi.value?.$el || Gi.value, l = [...f?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((xe) => !xe.hidden && xe.getAttribute("aria-hidden") !== "true");
        if (l.length === 0) return !1;
        const D = l[0], re = l[l.length - 1];
        if (b.shiftKey && (document.activeElement === D || !f.contains(document.activeElement)))
          return b.preventDefault(), re.focus(), !0;
        if (!b.shiftKey && (document.activeElement === re || !f.contains(document.activeElement)))
          return b.preventDefault(), D.focus(), !0;
      }
      return b.key === "ArrowLeft" && Bo.value ? (b.preventDefault(), Go(Bo.value), !0) : b.key === "ArrowRight" && jo.value ? (b.preventDefault(), Go(jo.value), !0) : !1;
    }
    function hd(b) {
      pg(b) || (fg(b), hg(b));
    }
    Fi(() => {
      window.addEventListener("keydown", hd), window.addEventListener("popstate", td), qn = window.matchMedia?.("(max-width: 1023px)") || null, cr(), qn?.addEventListener ? qn.addEventListener("change", cr) : qn?.addListener?.(cr);
      const b = new URLSearchParams(window.location.search), f = Ju();
      b.has("item") && f === null ? (b.delete("item"), history.replaceState({}, "", `${window.location.pathname}${b.toString() ? `?${b}` : ""}${window.location.hash}`)) : f !== null && lr(f, { historyMode: "none", seed: m.value.find((l) => Number(l.id) === f) || null }), dr = window.requestAnimationFrame(() => {
        dr = null, Xv();
      });
    }), Wa(() => {
      Hl = !0, Gl(), window.removeEventListener("keydown", hd), window.removeEventListener("popstate", td), window.clearTimeout(ye), window.clearTimeout(ut), window.clearTimeout(V), window.clearTimeout(Ie), Q?.abort(), dt?.abort(), Z?.abort(), Me?.abort(), tn += 1, dr !== null && window.cancelAnimationFrame(dr), dr = null, Wo?.abort(), ka?.abort(), ka = null, qi += 1, Yi?.abort(), Yi = null, qn?.removeEventListener ? qn.removeEventListener("change", cr) : qn?.removeListener?.(cr), qn = null, Uo = null;
    });
    const gr = /* @__PURE__ */ Dt({}), mr = /* @__PURE__ */ Dt({});
    async function pd(b, f) {
      const l = f?.currentTarget?.closest?.("form") || f?.currentTarget;
      if (!l || !b?.starUrl || gr[b.id]) return;
      const D = !!b.starred;
      gr[b.id] = !0, mr[b.id] = "", b.starred = !D;
      try {
        (await fetch(b.starUrl, {
          method: "POST",
          body: new FormData(l),
          credentials: "same-origin"
        })).ok || (b.starred = D, mr[b.id] = g("library", "Could not update star. Try again."));
      } catch {
        b.starred = D, mr[b.id] = g("library", "Could not update star. Try again.");
      } finally {
        gr[b.id] = !1;
      }
    }
    return (b, f) => (y(), Be(v(oT), { "app-name": "library" }, {
      default: Le(() => [
        Se(v(B1), {
          "aria-label": v(g)("library", "Library navigation")
        }, {
          list: Le(() => [
            Se(v(ev), null, {
              default: Le(() => [
                (y(!0), w(le, null, ke(So.value, (l) => (y(), Be(v(nh), {
                  key: l.key,
                  active: l.active,
                  href: l.href,
                  name: l.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                Se(v(nh), {
                  active: Bi.value,
                  href: Ui.value,
                  name: ba.value > 0 ? `${v(g)("library", "Review")} (${ba.value})` : v(g)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Le(() => [
            c("section", yT, [
              c("h2", _T, p(v(g)("library", "Filters")), 1),
              c("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": v(g)("library", "Catalogue search and filters"),
                onSubmit: De(id, ["prevent"])
              }, [
                c("input", {
                  type: "hidden",
                  name: "folder",
                  value: N.folder
                }, null, 8, ST),
                (y(!0), w(le, null, ke(Mo.value, (l) => (y(), w("input", {
                  key: `sidebar-${l.key}`,
                  type: "hidden",
                  name: l.key,
                  value: l.value
                }, null, 8, CT))), 128)),
                N.sort && N.sort !== "title" ? (y(), w("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: N.sort
                }, null, 8, TT)) : B("", !0),
                N.view && N.view !== "compact" ? (y(), w("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: N.view
                }, null, 8, ET)) : B("", !0),
                c("label", {
                  class: "library-quick-filter-search",
                  title: v(g)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  c("span", null, [
                    we(p(v(g)("library", "Search")) + " ", 1),
                    f[93] || (f[93] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  Re(c("input", {
                    ref_key: "quickSearchInput",
                    ref: ur,
                    "onUpdate:modelValue": f[0] || (f[0] = (l) => J.value = l),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: v(g)("library", "Title, creator, description, filename or folder")
                  }, null, 8, kT), [
                    [gt, J.value]
                  ])
                ], 8, AT),
                c("label", null, [
                  we(p(v(g)("library", "Type")), 1),
                  Re(c("select", {
                    "onUpdate:modelValue": f[1] || (f[1] = (l) => N.type = l),
                    name: "type",
                    onChange: f[2] || (f[2] = (l) => Vt(l))
                  }, [
                    c("option", OT, p(v(g)("library", "All types")), 1),
                    (y(!0), w(le, null, ke(x.value, (l) => (y(), w("option", {
                      key: l,
                      value: l
                    }, p(l), 9, xT))), 128))
                  ], 544), [
                    [At, N.type]
                  ])
                ]),
                c("div", NT, [
                  c("label", LT, p(v(g)("library", "Publisher")), 1),
                  Re(c("input", {
                    id: "library-publisher-search",
                    "onUpdate:modelValue": f[3] || (f[3] = (l) => $.value = l),
                    type: "search",
                    name: "publisherSearch",
                    autocomplete: "off",
                    placeholder: v(g)("library", "Search publishers"),
                    title: v(g)("library", "Exact publisher matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publisher-suggestions",
                    "aria-expanded": M.value && oe.value.length > 0 ? "true" : "false",
                    onFocus: f[4] || (f[4] = (l) => M.value = !0),
                    onKeydown: f[5] || (f[5] = ot((l) => M.value = !1, ["escape"]))
                  }, null, 40, RT), [
                    [gt, $.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publisher",
                    value: N.publisher
                  }, null, 8, IT),
                  M.value && oe.value.length > 0 ? (y(), w("ul", PT, [
                    (y(!0), w(le, null, ke(oe.value, (l) => (y(), w("li", {
                      key: l,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publisher-suggestion",
                        onMousedown: f[6] || (f[6] = De(() => {
                        }, ["prevent"])),
                        onClick: (D) => rd(l, D)
                      }, p(l), 41, $T)
                    ]))), 128))
                  ])) : B("", !0),
                  c("button", DT, p(v(g)("library", "Apply publisher")), 1)
                ]),
                c("div", FT, [
                  c("label", MT, p(v(g)("library", "Series / periodical")), 1),
                  Re(c("input", {
                    id: "library-publication-search",
                    "onUpdate:modelValue": f[7] || (f[7] = (l) => de.value = l),
                    type: "search",
                    name: "publicationSearch",
                    autocomplete: "off",
                    placeholder: v(g)("library", "Search series and periodicals"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publication-suggestions",
                    "aria-expanded": fe.value && se.value.length > 0 ? "true" : "false",
                    onFocus: f[8] || (f[8] = (l) => fe.value = !0),
                    onKeydown: f[9] || (f[9] = ot((l) => fe.value = !1, ["escape"]))
                  }, null, 40, zT), [
                    [gt, de.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publication",
                    value: N.publication
                  }, null, 8, UT),
                  fe.value && se.value.length > 0 ? (y(), w("ul", BT, [
                    (y(!0), w(le, null, ke(se.value, (l) => (y(), w("li", {
                      key: l,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: f[10] || (f[10] = De(() => {
                        }, ["prevent"])),
                        onClick: (D) => nd(l, D)
                      }, p(l), 41, jT)
                    ]))), 128))
                  ])) : B("", !0),
                  c("button", HT, p(v(g)("library", "Apply series")), 1)
                ]),
                c("div", VT, [
                  c("label", KT, p(v(g)("library", "Publication year")), 1),
                  Re(c("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": f[11] || (f[11] = (l) => he.value = l),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: v(g)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": ae.value && Ce.value.length > 0 ? "true" : "false",
                    onFocus: f[12] || (f[12] = (l) => ae.value = !0),
                    onKeydown: f[13] || (f[13] = ot((l) => ae.value = !1, ["escape"]))
                  }, null, 40, GT), [
                    [gt, he.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "year",
                    value: N.year
                  }, null, 8, WT),
                  ae.value && Ce.value.length > 0 ? (y(), w("ul", qT, [
                    (y(!0), w(le, null, ke(Ce.value, (l) => (y(), w("li", {
                      key: l,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: f[14] || (f[14] = De(() => {
                        }, ["prevent"])),
                        onClick: (D) => cd(l, D)
                      }, p(l), 41, YT)
                    ]))), 128))
                  ])) : B("", !0),
                  c("button", XT, p(v(g)("library", "Apply year")), 1)
                ]),
                c("div", ZT, [
                  c("label", JT, p(v(g)("library", "Creator")), 1),
                  Re(c("input", {
                    id: "library-creator-search",
                    "onUpdate:modelValue": f[15] || (f[15] = (l) => _e.value = l),
                    type: "search",
                    name: "creatorSearch",
                    autocomplete: "off",
                    placeholder: v(g)("library", "Search creators"),
                    title: v(g)("library", "Exact full-field creator matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-creator-suggestions",
                    "aria-expanded": pe.value && Ee.value.length > 0 ? "true" : "false",
                    onFocus: f[16] || (f[16] = (l) => pe.value = !0),
                    onKeydown: f[17] || (f[17] = ot((l) => pe.value = !1, ["escape"]))
                  }, null, 40, QT), [
                    [gt, _e.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "creator",
                    value: N.creator
                  }, null, 8, eE),
                  pe.value && Ee.value.length > 0 ? (y(), w("ul", tE, [
                    (y(!0), w(le, null, ke(Ee.value, (l) => (y(), w("li", {
                      key: l,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: f[18] || (f[18] = De(() => {
                        }, ["prevent"])),
                        onClick: (D) => ad(l, D)
                      }, p(l), 41, nE)
                    ]))), 128))
                  ])) : B("", !0),
                  c("button", iE, p(v(g)("library", "Apply creator")), 1)
                ]),
                c("label", null, [
                  we(p(v(g)("library", "Nextcloud tag")), 1),
                  Re(c("input", {
                    "onUpdate:modelValue": f[19] || (f[19] = (l) => N.tag = l),
                    type: "text",
                    name: "tag",
                    placeholder: v(g)("library", "photography")
                  }, null, 8, aE), [
                    [gt, N.tag]
                  ])
                ]),
                c("label", null, [
                  we(p(v(g)("library", "Format")), 1),
                  Re(c("select", {
                    "onUpdate:modelValue": f[20] || (f[20] = (l) => N.format = l),
                    name: "format",
                    onChange: f[21] || (f[21] = (l) => Vt(l))
                  }, [
                    c("option", rE, p(v(g)("library", "All formats")), 1),
                    (y(!0), w(le, null, ke(E.value, (l) => (y(), w("option", {
                      key: l,
                      value: l
                    }, p(Oa(l)), 9, oE))), 128))
                  ], 544), [
                    [At, N.format]
                  ])
                ]),
                c("label", null, [
                  we(p(v(g)("library", "Shelf")), 1),
                  Re(c("select", {
                    "onUpdate:modelValue": f[22] || (f[22] = (l) => N.shelf = l),
                    name: "shelf",
                    onChange: f[23] || (f[23] = (l) => Vt(l))
                  }, [
                    c("option", sE, p(v(g)("library", "All shelves")), 1),
                    (y(!0), w(le, null, ke(C.value, (l) => (y(), w("option", {
                      key: l,
                      value: l
                    }, p(l), 9, lE))), 128))
                  ], 544), [
                    [At, N.shelf]
                  ])
                ]),
                c("div", cE, [
                  c("label", uE, p(v(g)("library", "Folder")), 1),
                  Re(c("input", {
                    id: "library-folder-search",
                    "onUpdate:modelValue": f[24] || (f[24] = (l) => ft.value = l),
                    type: "search",
                    name: "folderSearch",
                    autocomplete: "off",
                    placeholder: v(g)("library", "Type at least 3 path characters"),
                    title: v(g)("library", "Select an exact folder path"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-folder-suggestions",
                    "aria-expanded": Ve.value && j.value.length > 0 ? "true" : "false",
                    onFocus: f[25] || (f[25] = (l) => Ve.value = !0),
                    onKeydown: f[26] || (f[26] = ot((l) => Ve.value = !1, ["escape"]))
                  }, null, 40, dE), [
                    [gt, ft.value]
                  ]),
                  Ve.value && j.value.length > 0 ? (y(), w("ul", fE, [
                    (y(!0), w(le, null, ke(j.value, (l) => (y(), w("li", {
                      key: l,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-folder-suggestion",
                        onMousedown: f[27] || (f[27] = De(() => {
                        }, ["prevent"])),
                        onClick: (D) => od(l, D)
                      }, p(l), 41, hE)
                    ]))), 128))
                  ])) : B("", !0),
                  c("button", pE, p(v(g)("library", "Apply folder")), 1)
                ]),
                c("label", null, [
                  we(p(v(g)("library", "Scan status")), 1),
                  Re(c("select", {
                    "onUpdate:modelValue": f[28] || (f[28] = (l) => N.status = l),
                    name: "status",
                    onChange: f[29] || (f[29] = (l) => Vt(l))
                  }, [
                    c("option", vE, p(v(g)("library", "All scan statuses")), 1),
                    (y(!0), w(le, null, ke(F.value, (l) => (y(), w("option", {
                      key: l,
                      value: l
                    }, p(l), 9, gE))), 128))
                  ], 544), [
                    [At, N.status]
                  ])
                ]),
                c("label", null, [
                  we(p(v(g)("library", "Workflow status")), 1),
                  Re(c("select", {
                    "onUpdate:modelValue": f[30] || (f[30] = (l) => N.workflowStatus = l),
                    name: "workflowStatus",
                    onChange: f[31] || (f[31] = (l) => Vt(l))
                  }, [
                    c("option", mE, p(v(g)("library", "All workflow statuses")), 1),
                    (y(!0), w(le, null, ke(z.value, (l) => (y(), w("option", {
                      key: l,
                      value: l
                    }, p(l), 9, bE))), 128))
                  ], 544), [
                    [At, N.workflowStatus]
                  ])
                ]),
                c("div", yE, [
                  c("label", _E, p(v(g)("library", "Subject")), 1),
                  Re(c("input", {
                    id: "library-subject-search",
                    "onUpdate:modelValue": f[32] || (f[32] = (l) => R.value = l),
                    type: "search",
                    name: "subjectSearch",
                    autocomplete: "off",
                    placeholder: v(g)("library", "Search subjects"),
                    title: v(g)("library", "Exact subject matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-subject-suggestions",
                    "aria-expanded": L.value && G.value.length > 0 ? "true" : "false",
                    onFocus: f[33] || (f[33] = (l) => L.value = !0),
                    onKeydown: f[34] || (f[34] = ot((l) => L.value = !1, ["escape"]))
                  }, null, 40, wE), [
                    [gt, R.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "subject",
                    value: N.subject
                  }, null, 8, SE),
                  L.value && G.value.length > 0 ? (y(), w("ul", CE, [
                    (y(!0), w(le, null, ke(G.value, (l) => (y(), w("li", {
                      key: l,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-subject-suggestion",
                        onMousedown: f[35] || (f[35] = De(() => {
                        }, ["prevent"])),
                        onClick: (D) => ld(l, D)
                      }, p(l), 41, TE)
                    ]))), 128))
                  ])) : B("", !0),
                  c("button", {
                    type: "button",
                    class: "button secondary library-subject-apply",
                    onClick: Qv
                  }, p(v(g)("library", "Apply subject")), 1)
                ]),
                c("label", null, [
                  we(p(v(g)("library", "Classification")), 1),
                  Re(c("select", {
                    "onUpdate:modelValue": f[36] || (f[36] = (l) => N.classification = l),
                    name: "classification",
                    onChange: f[37] || (f[37] = (l) => Vt(l))
                  }, [
                    c("option", EE, p(v(g)("library", "All classifications")), 1),
                    (y(!0), w(le, null, ke(W.value, (l) => (y(), w("option", {
                      key: l,
                      value: l
                    }, p(l), 9, AE))), 128))
                  ], 544), [
                    [At, N.classification]
                  ])
                ]),
                c("label", null, [
                  we(p(v(g)("library", "Suggested updates")), 1),
                  Re(c("select", {
                    "onUpdate:modelValue": f[38] || (f[38] = (l) => N.scannerConflicts = l),
                    name: "scannerConflicts",
                    onChange: f[39] || (f[39] = (l) => Vt(l))
                  }, [
                    c("option", kE, p(v(g)("library", "All metadata")), 1),
                    c("option", OE, p(v(g)("library", "Suggested updates")), 1)
                  ], 544), [
                    [At, N.scannerConflicts]
                  ])
                ]),
                c("button", xE, p(v(g)("library", "Apply filters")), 1),
                c("a", NE, p(v(g)("library", "Clear")), 1)
              ], 40, wT)
            ]),
            c("a", {
              class: "library-navigation-settings-link",
              href: Qt.value
            }, [
              f[94] || (f[94] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(v(g)("library", "Settings")), 1)
            ], 8, LE)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        Se(v(i1), null, {
          default: Le(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: h.language || "en",
              dir: h.direction || "ltr",
              tabindex: "-1"
            }, [
              Ki.value.length > 0 ? (y(), w("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": v(g)("library", "Active filters")
              }, [
                c("span", null, p(v(g)("library", "Active filters")), 1),
                (y(!0), w(le, null, ke(Ki.value, (l) => (y(), w("a", {
                  key: l.key,
                  href: dd(l.key),
                  class: "library-filter-chip",
                  "aria-label": `${v(g)("library", "Remove filter")}: ${l.label}`,
                  title: l.title,
                  onClick: De((D) => eg(l.key), ["prevent"])
                }, [
                  c("strong", null, [
                    we(p(l.label), 1),
                    l.displayValue ? (y(), w(le, { key: 0 }, [
                      we(":")
                    ], 64)) : B("", !0)
                  ]),
                  l.displayValue ? (y(), w(le, { key: 0 }, [
                    f[95] || (f[95] = we(p(" "), -1)),
                    c("span", {
                      class: "library-filter-chip-value",
                      title: l.value
                    }, p(l.displayValue), 9, $E)
                  ], 64)) : B("", !0),
                  f[96] || (f[96] = we()),
                  f[97] || (f[97] = c("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, PE))), 128))
              ], 8, IE)) : B("", !0),
              Bi.value ? (y(), w("section", DE, [
                c("header", FE, [
                  c("p", ME, p(v(g)("library", "Metadata cleanup")), 1),
                  c("h2", zE, p(v(g)("library", "Review")), 1),
                  c("p", null, p(v(g)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": v(g)("library", "Review queues")
                }, [
                  (y(!0), w(le, null, ke(Uv.value, (l) => (y(), w("a", {
                    key: l.key,
                    class: Ae(["library-review-queue-link", { active: l.active }]),
                    href: l.href,
                    "aria-current": l.active ? "page" : void 0,
                    onClick: De((D) => tg(l), ["prevent"])
                  }, [
                    c("span", null, p(l.label), 1),
                    c("b", null, p(ag(l.countKey)), 1)
                  ], 10, BE))), 128))
                ], 8, UE),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": v(g)("library", "Filter current review queue"),
                  onSubmit: De(Yt, ["prevent"])
                }, [
                  (y(!0), w(le, null, ke(Bl.value, (l) => (y(), w("input", {
                    key: `review-${l.key}`,
                    type: "hidden",
                    name: l.key,
                    value: l.value
                  }, null, 8, HE))), 128)),
                  c("label", null, [
                    we(p(v(g)("library", "Search within this queue")), 1),
                    Re(c("input", {
                      "onUpdate:modelValue": f[40] || (f[40] = (l) => N.q = l),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [gt, N.q]
                    ])
                  ]),
                  c("button", VE, p(v(g)("library", "Apply")), 1)
                ], 40, jE),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": En.loading ? "true" : "false"
                }, [
                  En.loading ? (y(), w("span", GE, p(v(g)("library", "Loading review queue…")), 1)) : B("", !0)
                ], 8, KE),
                En.error ? (y(), w("p", WE, p(En.error), 1)) : B("", !0),
                _i.value.enabled ? (y(), w("section", qE, [
                  c("div", YE, [
                    c("p", XE, p(v(g)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: v(g)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(v(g)("library", "Review next suggestion")), 9, ZE)
                  ]),
                  _i.value.item ? (y(), w("article", JE, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", QE, p(_i.value.item.title), 1)
                      ]),
                      c("span", eA, [
                        c("bdi", tA, p(_i.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", nA, [
                      (y(!0), w(le, null, ke(_i.value.fields, (l) => (y(), w("article", {
                        key: l.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", iA, p(l.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(v(g)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", aA, p(l.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(v(g)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", rA, p(l.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(v(g)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", oA, p(l.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(v(g)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", sA, p(l.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(v(g)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", lA, p(l.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: _i.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: en.value
                          }, null, 8, uA),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: l.field
                          }, null, 8, dA),
                          f[98] || (f[98] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", fA, p(v(g)("library", "Use suggested value")), 1)
                        ], 8, cA)
                      ]))), 128))
                    ]),
                    c("footer", hA, [
                      c("a", {
                        class: "button secondary",
                        href: _i.value.item.detailsUrl
                      }, p(v(g)("library", "Maintenance")), 9, pA),
                      c("a", {
                        class: "button secondary",
                        href: _i.value.skipUrl
                      }, p(v(g)("library", "Skip to next suggestion")), 9, vA)
                    ])
                  ])) : B("", !0)
                ])) : B("", !0),
                m.value.length === 0 && !En.loading && !En.error ? (y(), w("div", gA, [
                  c("h3", null, p(v(g)("library", "This review queue is clear")), 1),
                  c("p", null, p(v(g)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: We.value
                  }, p(v(g)("library", "Back to Library")), 9, mA)
                ])) : (y(), w("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": v(g)("library", "Review results")
                }, [
                  (y(!0), w(le, null, ke(m.value, (l) => (y(), w("article", {
                    key: l.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (D) => Pn(l, D)
                        }, [
                          c("bdi", _A, p(l.title), 1)
                        ], 8, yA)
                      ]),
                      l.creators ? (y(), w("p", wA, [
                        c("bdi", SA, p(l.creators), 1)
                      ])) : B("", !0),
                      l.scanError ? (y(), w("p", CA, [
                        c("bdi", TA, p(l.scanError), 1)
                      ])) : B("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (D) => Pn(l, D)
                      }, p(v(g)("library", "Details")), 9, EA),
                      c("a", {
                        class: "button primary",
                        href: l.openUrl
                      }, p(v(g)("library", "Open")), 9, AA)
                    ])
                  ]))), 128))
                ], 8, bA)),
                m.value.length > 0 ? (y(), w("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": v(g)("library", "Review pagination")
                }, [
                  P.value.previousUrl ? (y(), w("a", {
                    key: 0,
                    href: P.value.previousUrl
                  }, p(v(g)("library", "Previous")), 9, OA)) : (y(), w("span", xA, p(v(g)("library", "Previous")), 1)),
                  c("span", null, [
                    we(p(v(g)("library", "Page")) + " " + p(P.value.page), 1),
                    P.value.total > 0 ? (y(), w("span", NA, " · " + p(P.value.from) + "–" + p(P.value.to), 1)) : B("", !0)
                  ]),
                  P.value.nextUrl ? (y(), w("a", {
                    key: 2,
                    href: P.value.nextUrl
                  }, p(v(g)("library", "Next")), 9, LA)) : (y(), w("span", RA, p(v(g)("library", "Next")), 1))
                ], 8, kA)) : B("", !0)
              ])) : cn.value ? (y(), w("main", IA, [
                c("header", PA, [
                  c("p", $A, p(v(g)("library", "Your library")), 1),
                  c("h2", DA, p(v(g)("library", "Home")), 1)
                ]),
                c("section", FA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", MA, p(v(g)("library", "Continue reading")), 1),
                      c("p", zA, p(v(g)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${We.value}?sort=lastOpened`
                    }, p(v(g)("library", "View all")), 9, UA)
                  ]),
                  Wn.value.continueReading.length ? (y(), w("div", BA, [
                    (y(!0), w(le, null, ke(Wn.value.continueReading, (l) => (y(), w("article", {
                      key: `continue-${l.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (D) => Pn(l, D)
                      }, [
                        c("span", HA, [
                          c("img", {
                            class: "library-cover-image",
                            src: l.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, VA)
                        ])
                      ], 8, jA),
                      c("div", KA, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (D) => Pn(l, D)
                          }, [
                            c("bdi", WA, p(l.title), 1)
                          ], 8, GA)
                        ]),
                        l.creators ? (y(), w("p", qA, [
                          c("bdi", YA, p(l.creators), 1)
                        ])) : B("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: l.openUrl
                        }, p(v(g)("library", "Open")), 9, XA)
                      ])
                    ]))), 128))
                  ])) : (y(), w("p", ZA, p(v(g)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", JA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", QA, p(v(g)("library", "Recently added")), 1),
                      c("p", ek, p(v(g)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${We.value}?sort=recent`
                    }, p(v(g)("library", "View all")), 9, tk)
                  ]),
                  Wn.value.recentlyAdded.length ? (y(), w("div", nk, [
                    (y(!0), w(le, null, ke(Wn.value.recentlyAdded, (l) => (y(), w("article", {
                      key: `recent-${l.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (D) => Pn(l, D)
                      }, [
                        c("span", ak, [
                          c("img", {
                            class: "library-cover-image",
                            src: l.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, rk)
                        ])
                      ], 8, ik),
                      c("div", ok, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (D) => Pn(l, D)
                          }, [
                            c("bdi", lk, p(l.title), 1)
                          ], 8, sk)
                        ]),
                        l.creators ? (y(), w("p", ck, [
                          c("bdi", uk, p(l.creators), 1)
                        ])) : B("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: l.openUrl
                        }, p(v(g)("library", "Open")), 9, dk)
                      ])
                    ]))), 128))
                  ])) : (y(), w("p", fk, p(v(g)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", hk, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", pk, p(v(g)("library", "Shelves")), 1),
                      c("p", vk, p(v(g)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: vi.value }, p(v(g)("library", "View all")), 9, gk)
                  ]),
                  Aa.value.length ? (y(), w("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": v(g)("library", "Shelves")
                  }, [
                    (y(!0), w(le, null, ke(Aa.value, (l) => (y(), w("a", {
                      key: l.shelf,
                      href: l.url
                    }, [
                      c("strong", null, [
                        c("bdi", yk, p(l.shelf), 1)
                      ]),
                      c("span", null, p(v(vn)("library", "%n item", "%n items", Number(l.itemCount || 0))), 1)
                    ], 8, bk))), 128))
                  ], 8, mk)) : (y(), w("p", _k, p(v(g)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(S.value.count || 0) > 0 ? (y(), w("aside", wk, [
                  c("div", null, [
                    c("h3", Sk, p(v(g)("library", "Needs attention")), 1),
                    c("p", Ck, p(v(vn)("library", "%n publication needs better details.", "%n publications need better details.", Number(S.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: S.value.url
                  }, p(v(g)("library", "Review")), 9, Tk)
                ])) : B("", !0)
              ])) : un.value ? (y(), w("main", Ek, [
                c("header", Ak, [
                  c("p", kk, p(v(g)("library", "Your library")), 1),
                  c("h2", Ok, p(v(g)("library", "Shelves")), 1),
                  c("p", xk, p(v(g)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                ee.value.length ? (y(), w("nav", {
                  key: 0,
                  "aria-label": v(g)("library", "Shelves")
                }, [
                  c("ul", Lk, [
                    (y(!0), w(le, null, ke(ee.value, (l) => (y(), Be(bT, {
                      key: l.id,
                      node: l,
                      "children-url": Co.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, Nk)) : (y(), w("section", Rk, [
                  c("h3", null, p(v(g)("library", "Shelves")), 1),
                  c("p", Ik, p(v(g)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", Pk, [
                    c("a", {
                      class: "button primary",
                      href: Qt.value
                    }, p(v(g)("library", "Add a Library root")), 9, $k),
                    c("a", {
                      class: "button secondary",
                      href: We.value
                    }, p(v(g)("library", "All publications")), 9, Dk)
                  ])
                ]))
              ])) : (y(), w("section", Fk, [
                c("header", Mk, [
                  Rn.value ? (y(), w("p", zk, p(wa.value), 1)) : B("", !0),
                  c("h2", Uk, p(ko.value), 1)
                ]),
                c("details", {
                  class: "library-mobile-filter-panel",
                  "data-library-control": "filter",
                  onToggle: Do
                }, [
                  c("summary", {
                    class: "library-mobile-filter-trigger",
                    "aria-label": Po.value
                  }, [
                    c("span", jk, p(v(vn)("library", "%n item", "%n items", Number(P.value.total || 0))), 1),
                    c("strong", null, p(Ul.value), 1)
                  ], 8, Bk),
                  c("form", {
                    method: "get",
                    class: "library-mobile-filter-form",
                    "aria-label": v(g)("library", "Mobile catalogue filters"),
                    onSubmit: De(id, ["prevent"])
                  }, [
                    c("input", {
                      type: "hidden",
                      name: "folder",
                      value: N.folder
                    }, null, 8, Vk),
                    (y(!0), w(le, null, ke(Mo.value, (l) => (y(), w("input", {
                      key: `mobile-hidden-${l.key}`,
                      type: "hidden",
                      name: l.key,
                      value: l.value
                    }, null, 8, Kk))), 128)),
                    c("fieldset", Gk, [
                      c("legend", null, p(v(g)("library", "Content")), 1),
                      c("label", Wk, [
                        c("span", null, p(v(g)("library", "Search")), 1),
                        Re(c("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: Cn,
                          "onUpdate:modelValue": f[41] || (f[41] = (l) => J.value = l),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: v(g)("library", "Title, creator, description, filename or folder")
                        }, null, 8, qk), [
                          [gt, J.value]
                        ])
                      ]),
                      c("label", null, [
                        we(p(v(g)("library", "Type")), 1),
                        Re(c("select", {
                          "onUpdate:modelValue": f[42] || (f[42] = (l) => N.type = l),
                          name: "type",
                          onChange: f[43] || (f[43] = (l) => Vt(l))
                        }, [
                          c("option", Yk, p(v(g)("library", "All types")), 1),
                          (y(!0), w(le, null, ke(x.value, (l) => (y(), w("option", {
                            key: `mobile-type-${l}`,
                            value: l
                          }, p(l), 9, Xk))), 128))
                        ], 544), [
                          [At, N.type]
                        ])
                      ]),
                      c("div", Zk, [
                        c("label", Jk, p(v(g)("library", "Publisher")), 1),
                        Re(c("input", {
                          id: "library-mobile-publisher-search",
                          "onUpdate:modelValue": f[44] || (f[44] = (l) => $.value = l),
                          type: "search",
                          name: "publisherSearch",
                          autocomplete: "off",
                          placeholder: v(g)("library", "Search publishers"),
                          title: v(g)("library", "Exact publisher matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publisher-suggestions",
                          "aria-expanded": M.value && oe.value.length > 0 ? "true" : "false",
                          onFocus: f[45] || (f[45] = (l) => M.value = !0),
                          onKeydown: f[46] || (f[46] = ot((l) => M.value = !1, ["escape"]))
                        }, null, 40, Qk), [
                          [gt, $.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "publisher",
                          value: N.publisher
                        }, null, 8, e2),
                        In.value && M.value && oe.value.length > 0 ? (y(), w("ul", t2, [
                          (y(!0), w(le, null, ke(oe.value, (l) => (y(), w("li", {
                            key: `mobile-publisher-${l}`,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: f[47] || (f[47] = De(() => {
                              }, ["prevent"])),
                              onClick: (D) => rd(l, D)
                            }, p(l), 41, n2)
                          ]))), 128))
                        ])) : B("", !0)
                      ]),
                      c("div", i2, [
                        c("label", a2, p(v(g)("library", "Series / periodical")), 1),
                        Re(c("input", {
                          id: "library-mobile-publication-search",
                          "onUpdate:modelValue": f[48] || (f[48] = (l) => de.value = l),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: v(g)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publication-suggestions",
                          "aria-expanded": fe.value && se.value.length > 0 ? "true" : "false",
                          onFocus: f[49] || (f[49] = (l) => fe.value = !0),
                          onKeydown: f[50] || (f[50] = ot((l) => fe.value = !1, ["escape"]))
                        }, null, 40, r2), [
                          [gt, de.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "publication",
                          value: N.publication
                        }, null, 8, o2),
                        In.value && fe.value && se.value.length > 0 ? (y(), w("ul", s2, [
                          (y(!0), w(le, null, ke(se.value, (l) => (y(), w("li", {
                            key: `mobile-publication-${l}`,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: f[51] || (f[51] = De(() => {
                              }, ["prevent"])),
                              onClick: (D) => nd(l, D)
                            }, p(l), 41, l2)
                          ]))), 128))
                        ])) : B("", !0)
                      ]),
                      c("div", c2, [
                        c("label", u2, p(v(g)("library", "Publication year")), 1),
                        Re(c("input", {
                          id: "library-mobile-year-search",
                          "onUpdate:modelValue": f[52] || (f[52] = (l) => he.value = l),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: v(g)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-year-suggestions",
                          "aria-expanded": ae.value && Ce.value.length > 0 ? "true" : "false",
                          onFocus: f[53] || (f[53] = (l) => ae.value = !0),
                          onKeydown: f[54] || (f[54] = ot((l) => ae.value = !1, ["escape"]))
                        }, null, 40, d2), [
                          [gt, he.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "year",
                          value: N.year
                        }, null, 8, f2),
                        In.value && ae.value && Ce.value.length > 0 ? (y(), w("ul", h2, [
                          (y(!0), w(le, null, ke(Ce.value, (l) => (y(), w("li", {
                            key: `mobile-year-${l}`,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: f[55] || (f[55] = De(() => {
                              }, ["prevent"])),
                              onClick: (D) => cd(l, D)
                            }, p(l), 41, p2)
                          ]))), 128))
                        ])) : B("", !0)
                      ]),
                      c("div", v2, [
                        c("label", g2, p(v(g)("library", "Creator")), 1),
                        Re(c("input", {
                          id: "library-mobile-creator-search",
                          "onUpdate:modelValue": f[56] || (f[56] = (l) => _e.value = l),
                          type: "search",
                          name: "creatorSearch",
                          autocomplete: "off",
                          placeholder: v(g)("library", "Search creators"),
                          title: v(g)("library", "Exact full-field creator matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-creator-suggestions",
                          "aria-expanded": pe.value && Ee.value.length > 0 ? "true" : "false",
                          onFocus: f[57] || (f[57] = (l) => pe.value = !0),
                          onKeydown: f[58] || (f[58] = ot((l) => pe.value = !1, ["escape"]))
                        }, null, 40, m2), [
                          [gt, _e.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "creator",
                          value: N.creator
                        }, null, 8, b2),
                        In.value && pe.value && Ee.value.length > 0 ? (y(), w("ul", y2, [
                          (y(!0), w(le, null, ke(Ee.value, (l) => (y(), w("li", {
                            key: `mobile-creator-${l}`,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: f[59] || (f[59] = De(() => {
                              }, ["prevent"])),
                              onClick: (D) => ad(l, D)
                            }, p(l), 41, _2)
                          ]))), 128))
                        ])) : B("", !0)
                      ]),
                      c("label", null, [
                        we(p(v(g)("library", "Format")), 1),
                        Re(c("select", {
                          "onUpdate:modelValue": f[60] || (f[60] = (l) => N.format = l),
                          name: "format",
                          onChange: f[61] || (f[61] = (l) => Vt(l))
                        }, [
                          c("option", w2, p(v(g)("library", "All formats")), 1),
                          (y(!0), w(le, null, ke(E.value, (l) => (y(), w("option", {
                            key: `mobile-format-${l}`,
                            value: l
                          }, p(Oa(l)), 9, S2))), 128))
                        ], 544), [
                          [At, N.format]
                        ])
                      ]),
                      c("div", C2, [
                        c("label", T2, p(v(g)("library", "Subject")), 1),
                        Re(c("input", {
                          id: "library-mobile-subject-search",
                          "onUpdate:modelValue": f[62] || (f[62] = (l) => R.value = l),
                          type: "search",
                          name: "subjectSearch",
                          autocomplete: "off",
                          placeholder: v(g)("library", "Search subjects"),
                          title: v(g)("library", "Exact subject matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-subject-suggestions",
                          "aria-expanded": L.value && G.value.length > 0 ? "true" : "false",
                          onFocus: f[63] || (f[63] = (l) => L.value = !0),
                          onKeydown: f[64] || (f[64] = ot((l) => L.value = !1, ["escape"]))
                        }, null, 40, E2), [
                          [gt, R.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "subject",
                          value: N.subject
                        }, null, 8, A2),
                        In.value && L.value && G.value.length > 0 ? (y(), w("ul", k2, [
                          (y(!0), w(le, null, ke(G.value, (l) => (y(), w("li", {
                            key: `mobile-subject-${l}`,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: f[65] || (f[65] = De(() => {
                              }, ["prevent"])),
                              onClick: (D) => ld(l, D)
                            }, p(l), 41, O2)
                          ]))), 128))
                        ])) : B("", !0)
                      ]),
                      c("label", null, [
                        we(p(v(g)("library", "Classification")), 1),
                        Re(c("select", {
                          "onUpdate:modelValue": f[66] || (f[66] = (l) => N.classification = l),
                          name: "classification",
                          onChange: f[67] || (f[67] = (l) => Vt(l))
                        }, [
                          c("option", x2, p(v(g)("library", "All classifications")), 1),
                          (y(!0), w(le, null, ke(W.value, (l) => (y(), w("option", {
                            key: `mobile-classification-${l}`,
                            value: l
                          }, p(l), 9, N2))), 128))
                        ], 544), [
                          [At, N.classification]
                        ])
                      ])
                    ]),
                    c("fieldset", L2, [
                      c("legend", null, p(v(g)("library", "Location")), 1),
                      c("label", null, [
                        we(p(v(g)("library", "Shelf")), 1),
                        Re(c("select", {
                          "onUpdate:modelValue": f[68] || (f[68] = (l) => N.shelf = l),
                          name: "shelf",
                          onChange: f[69] || (f[69] = (l) => Vt(l))
                        }, [
                          c("option", R2, p(v(g)("library", "All shelves")), 1),
                          (y(!0), w(le, null, ke(C.value, (l) => (y(), w("option", {
                            key: `mobile-shelf-${l}`,
                            value: l
                          }, p(l), 9, I2))), 128))
                        ], 544), [
                          [At, N.shelf]
                        ])
                      ]),
                      c("div", P2, [
                        c("label", $2, p(v(g)("library", "Folder")), 1),
                        Re(c("input", {
                          id: "library-mobile-folder-search",
                          "onUpdate:modelValue": f[70] || (f[70] = (l) => ft.value = l),
                          type: "search",
                          name: "folderSearch",
                          autocomplete: "off",
                          placeholder: v(g)("library", "Type at least 3 path characters"),
                          title: v(g)("library", "Select an exact folder path"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-folder-suggestions",
                          "aria-expanded": Ve.value && j.value.length > 0 ? "true" : "false",
                          onFocus: f[71] || (f[71] = (l) => Ve.value = !0),
                          onKeydown: f[72] || (f[72] = ot((l) => Ve.value = !1, ["escape"]))
                        }, null, 40, D2), [
                          [gt, ft.value]
                        ]),
                        In.value && Ve.value && j.value.length > 0 ? (y(), w("ul", F2, [
                          (y(!0), w(le, null, ke(j.value, (l) => (y(), w("li", {
                            key: `mobile-folder-${l}`,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: f[73] || (f[73] = De(() => {
                              }, ["prevent"])),
                              onClick: (D) => od(l, D)
                            }, p(l), 41, M2)
                          ]))), 128))
                        ])) : B("", !0)
                      ])
                    ]),
                    c("fieldset", z2, [
                      c("legend", null, p(v(g)("library", "Review")), 1),
                      c("label", null, [
                        we(p(v(g)("library", "Scan status")), 1),
                        Re(c("select", {
                          "onUpdate:modelValue": f[74] || (f[74] = (l) => N.status = l),
                          name: "status",
                          onChange: f[75] || (f[75] = (l) => Vt(l))
                        }, [
                          c("option", U2, p(v(g)("library", "All scan statuses")), 1),
                          (y(!0), w(le, null, ke(F.value, (l) => (y(), w("option", {
                            key: `mobile-scan-${l}`,
                            value: l
                          }, p(l), 9, B2))), 128))
                        ], 544), [
                          [At, N.status]
                        ])
                      ]),
                      c("label", null, [
                        we(p(v(g)("library", "Workflow status")), 1),
                        Re(c("select", {
                          "onUpdate:modelValue": f[76] || (f[76] = (l) => N.workflowStatus = l),
                          name: "workflowStatus",
                          onChange: f[77] || (f[77] = (l) => Vt(l))
                        }, [
                          c("option", j2, p(v(g)("library", "All workflow statuses")), 1),
                          (y(!0), w(le, null, ke(z.value, (l) => (y(), w("option", {
                            key: `mobile-workflow-${l}`,
                            value: l
                          }, p(l), 9, H2))), 128))
                        ], 544), [
                          [At, N.workflowStatus]
                        ])
                      ]),
                      c("label", null, [
                        we(p(v(g)("library", "Suggested updates")), 1),
                        Re(c("select", {
                          "onUpdate:modelValue": f[78] || (f[78] = (l) => N.scannerConflicts = l),
                          name: "scannerConflicts",
                          onChange: f[79] || (f[79] = (l) => Vt(l))
                        }, [
                          c("option", V2, p(v(g)("library", "All metadata")), 1),
                          c("option", K2, p(v(g)("library", "Suggested updates")), 1)
                        ], 544), [
                          [At, N.scannerConflicts]
                        ])
                      ])
                    ]),
                    c("fieldset", G2, [
                      c("legend", null, p(v(g)("library", "Personal / display")), 1),
                      c("label", null, [
                        we(p(v(g)("library", "Nextcloud tag")), 1),
                        Re(c("input", {
                          "onUpdate:modelValue": f[80] || (f[80] = (l) => N.tag = l),
                          type: "text",
                          name: "tag",
                          placeholder: v(g)("library", "photography")
                        }, null, 8, W2), [
                          [gt, N.tag]
                        ])
                      ]),
                      c("label", null, [
                        we(p(v(g)("library", "Sort")), 1),
                        Re(c("select", {
                          "onUpdate:modelValue": f[81] || (f[81] = (l) => N.sort = l),
                          name: "sort",
                          onChange: Yt
                        }, [
                          c("option", q2, p(v(g)("library", "Title")), 1),
                          c("option", Y2, p(v(g)("library", "Date added")), 1),
                          c("option", X2, p(v(g)("library", "Publication date")), 1),
                          c("option", Z2, p(v(g)("library", "Series")), 1),
                          c("option", J2, p(v(g)("library", "Recently opened")), 1),
                          c("option", Q2, p(v(g)("library", "Format")), 1)
                        ], 544), [
                          [At, N.sort]
                        ])
                      ]),
                      c("label", null, [
                        we(p(v(g)("library", "View")), 1),
                        Re(c("select", {
                          "onUpdate:modelValue": f[82] || (f[82] = (l) => N.view = l),
                          name: "view",
                          onChange: Yt
                        }, [
                          c("option", eO, p(v(g)("library", "Compact")), 1),
                          c("option", tO, p(v(g)("library", "Gallery")), 1),
                          c("option", nO, p(v(g)("library", "List")), 1),
                          c("option", iO, p(v(g)("library", "Shelf")), 1)
                        ], 544), [
                          [At, N.view]
                        ])
                      ])
                    ]),
                    c("div", aO, [
                      c("a", rO, p(v(g)("library", "Clear all")), 1),
                      c("button", oO, p($o.value), 1)
                    ])
                  ], 40, Hk)
                ], 32),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": v(g)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": v(g)("library", "Catalogue toolbar"),
                    onSubmit: De(Yt, ["prevent"])
                  }, [
                    (y(!0), w(le, null, ke(zo.value, (l) => (y(), w("input", {
                      key: l.key,
                      type: "hidden",
                      name: l.key,
                      value: l.value
                    }, null, 8, cO))), 128)),
                    c("label", uO, [
                      we(p(v(g)("library", "Sort")), 1),
                      Re(c("select", {
                        "onUpdate:modelValue": f[83] || (f[83] = (l) => N.sort = l),
                        name: "sort",
                        onChange: Yt
                      }, [
                        c("option", dO, p(v(g)("library", "Title")), 1),
                        c("option", fO, p(v(g)("library", "Date added")), 1),
                        c("option", hO, p(v(g)("library", "Publication date")), 1),
                        c("option", pO, p(v(g)("library", "Series")), 1),
                        c("option", vO, p(v(g)("library", "Recently opened")), 1),
                        c("option", gO, p(v(g)("library", "Format")), 1)
                      ], 544), [
                        [At, N.sort]
                      ])
                    ]),
                    c("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": v(g)("library", "View")
                    }, [
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Ae({ active: Rt.value === "compact" }),
                        "aria-pressed": Rt.value === "compact" ? "true" : "false",
                        onClick: f[84] || (f[84] = (l) => qo("compact"))
                      }, p(v(g)("library", "Compact")), 11, bO),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ae({ active: Rt.value === "gallery" }),
                        "aria-pressed": Rt.value === "gallery" ? "true" : "false",
                        onClick: f[85] || (f[85] = (l) => qo("gallery"))
                      }, p(v(g)("library", "Gallery")), 11, yO),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ae({ active: Rt.value === "list" }),
                        "aria-pressed": Rt.value === "list" ? "true" : "false",
                        onClick: f[86] || (f[86] = (l) => qo("list"))
                      }, p(v(g)("library", "List")), 11, _O),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ae({ active: Rt.value === "shelf" }),
                        "aria-pressed": Rt.value === "shelf" ? "true" : "false",
                        onClick: f[87] || (f[87] = (l) => qo("shelf"))
                      }, p(v(g)("library", "Shelf")), 11, wO)
                    ], 8, mO)
                  ], 40, lO),
                  c("section", SO, [
                    c("h3", {
                      title: v(g)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(v(g)("library", "Collections")), 9, CO),
                    c("form", {
                      method: "post",
                      action: Ro.value,
                      class: "library-saved-collection-save-form",
                      title: ql.value ? "" : v(g)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: en.value
                      }, null, 8, EO),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: rg.value
                      }, null, 8, AO),
                      c("label", null, [
                        we(p(v(g)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: v(g)("library", "e.g. Bremen photo books"),
                          disabled: !ql.value,
                          autocomplete: "off"
                        }, null, 8, kO)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !ql.value,
                        title: v(g)("library", "Save current view")
                      }, p(v(g)("library", "Save")), 9, OO)
                    ], 8, TO),
                    Lo.value.length > 0 ? (y(), w("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": v(g)("library", "Saved custom collections")
                    }, [
                      (y(!0), w(le, null, ke(Lo.value, (l) => (y(), w("article", {
                        key: l.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: sg(l.filters)
                        }, [
                          c("strong", null, p(l.name), 1),
                          c("span", LO, p(l.countPending ? "—" : v(vn)("library", "%n item", "%n items", Number(l.count || 0))), 1)
                        ], 8, NO),
                        c("form", {
                          method: "post",
                          action: lg(l.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: en.value
                          }, null, 8, IO),
                          c("button", PO, p(v(g)("library", "Delete")), 1)
                        ], 8, RO)
                      ]))), 128))
                    ], 8, xO)) : B("", !0)
                  ]),
                  I.value.length > 0 ? (y(), w("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": v(g)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", DO, [
                      f[99] || (f[99] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: v(g)("library", "Batch actions for selected publications")
                      }, p(v(g)("library", "Batch actions")), 9, FO),
                      c("small", MO, p(v(g)("library", "Batch actions for selected publications")), 1),
                      c("b", zO, p(v(vn)("library", "%n publication selected", "%n publications selected", I.value.length)), 1)
                    ]),
                    c("p", UO, p(v(vn)("library", "%n publication selected", "%n publications selected", I.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: et
                    }, [
                      c("form", {
                        method: "post",
                        action: To.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: en.value
                        }, null, 8, jO),
                        c("label", null, [
                          c("span", null, p(v(g)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: v(g)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, HO)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: v(g)("library", "Applies only to the selected publications.")
                        }, p(v(g)("library", "Apply")), 9, VO)
                      ], 8, BO),
                      c("form", {
                        method: "post",
                        action: Za.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: en.value
                        }, null, 8, GO),
                        c("label", null, [
                          c("span", null, p(v(g)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: v(g)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, WO)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(g)("library", "Removes the tag only from the selected publications.")
                        }, p(v(g)("library", "Remove")), 9, qO)
                      ], 8, KO),
                      c("form", {
                        method: "post",
                        action: Eo.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: en.value
                        }, null, 8, XO),
                        (y(!0), w(le, null, ke(Ta.value, (l) => (y(), w("input", {
                          key: `reset-${l.key}`,
                          type: "hidden",
                          name: l.key,
                          value: l.value
                        }, null, 8, ZO))), 128)),
                        f[100] || (f[100] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(g)("library", "Batch actions for selected publications")
                        }, p(v(g)("library", "Reset metadata")), 9, JO)
                      ], 8, YO),
                      c("form", {
                        method: "post",
                        action: Ja.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: en.value
                        }, null, 8, ex),
                        (y(!0), w(le, null, ke(Ta.value, (l) => (y(), w("input", {
                          key: `edit-preview-${l.key}`,
                          type: "hidden",
                          name: l.key,
                          value: l.value
                        }, null, 8, tx))), 128)),
                        c("label", null, [
                          c("span", null, p(v(g)("library", "Field")), 1),
                          c("select", nx, [
                            c("option", ix, p(v(g)("library", "Publication type")), 1),
                            c("option", ax, p(v(g)("library", "Subtitle")), 1),
                            c("option", rx, p(v(g)("library", "Creators")), 1),
                            c("option", ox, p(v(g)("library", "Series / periodical")), 1),
                            c("option", sx, p(v(g)("library", "Publication date")), 1),
                            c("option", lx, p(v(g)("library", "Language")), 1),
                            c("option", cx, p(v(g)("library", "Publisher")), 1),
                            c("option", ux, p(v(g)("library", "Subjects")), 1),
                            c("option", dx, p(v(g)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(v(g)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: v(g)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, fx)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(g)("library", "Preview first, then apply from the review page.")
                        }, p(v(g)("library", "Preview edit")), 9, hx)
                      ], 8, QO),
                      c("form", {
                        method: "post",
                        action: zl.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: en.value
                        }, null, 8, vx),
                        (y(!0), w(le, null, ke(Ta.value, (l) => (y(), w("input", {
                          key: `cover-${l.key}`,
                          type: "hidden",
                          name: l.key,
                          value: l.value
                        }, null, 8, gx))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(g)("library", "Batch actions for selected publications")
                        }, p(v(g)("library", "Fresh covers")), 9, mx)
                      ], 8, px)
                    ], 32)
                  ], 8, $O)) : B("", !0)
                ], 8, sO),
                ji.value ? (y(), w("p", bx, p(ji.value), 1)) : B("", !0),
                rr.value ? (y(), w("p", yx, p(rr.value), 1)) : B("", !0),
                No.value ? (y(), w("p", _x, p(No.value), 1)) : B("", !0),
                Rn.value ? (y(), w("section", wx, [
                  c("p", Sx, p(wa.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: ct.value ? v(g)("library", "Items by this creator, sorted by publication context when available.") : er.value ? v(g)("library", "Items from this publication year, sorted by publication date when available.") : v(g)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(Ao.value), 9, Cx),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": v(g)("library", "Discovery summary")
                  }, [
                    c("span", null, p(v(vn)("library", "%n item", "%n items", P.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (y(), w("span", Ex, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : B("", !0),
                    O.value?.datedCount ? (y(), w("span", Ax, p(O.value.datedCount) + " " + p(v(g)("library", "dated")), 1)) : B("", !0),
                    O.value?.undatedCount > 0 ? (y(), w("span", kx, p(O.value.undatedCount) + " " + p(v(g)("library", "undated")), 1)) : B("", !0)
                  ], 8, Tx),
                  Qa.value && O.value ? (y(), w("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": v(g)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(v(g)("library", "Publication contents")), 1),
                    c("span", null, p(v(vn)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (y(), w("span", xx, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : B("", !0),
                    c("span", null, p(O.value.datedCount) + " " + p(v(g)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (y(), w("span", Nx, p(O.value.undatedCount) + " " + p(v(g)("library", "without dates yet")), 1)) : B("", !0),
                    c("span", null, p(v(g)("library", "read-only grouping")), 1)
                  ], 8, Ox)) : B("", !0),
                  Qa.value && O.value?.issueGroups?.length ? (y(), w("section", Lx, [
                    c("div", null, [
                      c("p", Rx, p(v(g)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: v(g)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(v(g)("library", "Read-only issue/date grouping")), 9, Ix)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": v(g)("library", "Visual issue strip")
                    }, [
                      (y(!0), w(le, null, ke(O.value.issueGroups, (l) => (y(), w("a", {
                        key: `strip-${l.label}`,
                        class: "library-issue-strip-card",
                        href: l.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(l.label), 1),
                        c("strong", null, p(l.items?.[0]?.issueLabel || v(g)("library", "Issue")), 1),
                        c("small", null, p(v(vn)("library", "%n item", "%n items", l.items?.length || 0)), 1)
                      ], 8, $x))), 128))
                    ], 8, Px),
                    O.value.gapRanges?.length ? (y(), w("p", Dx, p(v(g)("library", "Gap")) + ": " + p(O.value.gapRanges.join(", ")), 1)) : B("", !0),
                    (y(!0), w(le, null, ke(O.value.issueGroups, (l) => (y(), w("div", {
                      key: l.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(l.label), 1),
                      c("ol", null, [
                        (y(!0), w(le, null, ke(l.items, (D, re) => (y(), w("li", {
                          key: D.itemId
                        }, [
                          c("span", Fx, p(D.issueLabel), 1),
                          c("a", {
                            href: D.detailsUrl || "#"
                          }, p(D.title), 9, Mx),
                          c("small", null, [
                            we(p(D.publicationType), 1),
                            D.publicationDate ? (y(), w(le, { key: 0 }, [
                              we(" · " + p(D.publicationDate), 1)
                            ], 64)) : B("", !0)
                          ]),
                          c("small", zx, [
                            re > 0 ? (y(), w(le, { key: 0 }, [
                              we(p(v(g)("library", "Previous issue")), 1)
                            ], 64)) : B("", !0),
                            re > 0 && re < l.items.length - 1 ? (y(), w(le, { key: 1 }, [
                              we(" · ")
                            ], 64)) : B("", !0),
                            re < l.items.length - 1 ? (y(), w(le, { key: 2 }, [
                              we(p(v(g)("library", "Next issue")), 1)
                            ], 64)) : B("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (y(), w("details", Ux, [
                      c("summary", {
                        title: v(g)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(v(g)("library", "Unknown issue/date")) + " · " + p(O.value.unknownIssueItems.length), 9, Bx)
                    ])) : B("", !0)
                  ])) : B("", !0),
                  c("p", null, [
                    c("a", {
                      href: We.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(v(g)("library", "Back to full catalogue")), 9, jx)
                  ])
                ])) : B("", !0),
                c("div", Hx, [
                  c("p", Vx, [
                    we(p(v(g)("library", "Showing")) + " " + p(P.value.from) + "–" + p(P.value.to) + " " + p(v(g)("library", "of")) + " " + p(P.value.total) + " " + p(v(g)("library", "catalogue items")), 1),
                    Ki.value.length > 0 ? (y(), w("span", Kx, [
                      f[101] || (f[101] = we(" · ", -1)),
                      c("a", Gx, p(v(g)("library", "Clear all filters")), 1)
                    ])) : B("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": v(g)("library", "Catalogue pagination")
                  }, [
                    c("span", qx, [
                      we(p(v(g)("library", "Page")) + " " + p(P.value.page), 1),
                      P.value.total > 0 ? (y(), w("span", Yx, " · " + p(P.value.from) + "–" + p(P.value.to), 1)) : B("", !0)
                    ]),
                    P.value.previousUrl ? (y(), w("a", {
                      key: 0,
                      href: P.value.previousUrl
                    }, p(v(g)("library", "Previous")), 9, Xx)) : (y(), w("span", Zx, p(v(g)("library", "Previous")), 1)),
                    P.value.nextUrl ? (y(), w("a", {
                      key: 2,
                      href: P.value.nextUrl
                    }, p(v(g)("library", "Next")), 9, Jx)) : (y(), w("span", Qx, p(v(g)("library", "Next")), 1))
                  ], 8, Wx)
                ]),
                m.value.length === 0 ? (y(), w("div", {
                  key: 4,
                  class: Ae(["library-empty-content", { "library-first-run-guidance": nr.value || ir.value, "library-filter-empty-state": xo.value && !nr.value && !ir.value }]),
                  role: "status"
                }, [
                  nr.value ? (y(), w(le, { key: 0 }, [
                    c("h3", {
                      title: v(g)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(v(g)("library", "Start with one Library root")), 9, eN),
                    c("p", tN, [
                      c("a", {
                        href: Qt.value,
                        class: "button primary"
                      }, p(v(g)("library", "Add a Library root")), 9, nN),
                      c("span", iN, p(v(g)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : ir.value ? (y(), w(le, { key: 1 }, [
                    c("h3", {
                      title: v(g)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(v(g)("library", "No enabled Library roots")), 9, aN),
                    c("p", rN, [
                      c("a", {
                        href: Qt.value,
                        class: "button primary"
                      }, p(v(g)("library", "Open Library settings")), 9, oN)
                    ])
                  ], 64)) : xo.value ? (y(), w(le, { key: 2 }, [
                    c("h3", {
                      title: v(g)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(v(g)("library", "No matches for the current filters")), 9, sN),
                    c("p", lN, [
                      c("a", {
                        href: ng(),
                        class: "button secondary"
                      }, p(v(g)("library", "Clear search")), 9, cN),
                      c("a", uN, p(v(g)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (y(), w(le, { key: 3 }, [
                    c("h3", {
                      title: v(g)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(v(g)("library", "No catalogue items yet")), 9, dN),
                    c("p", fN, [
                      c("a", {
                        href: Qt.value,
                        class: "button primary"
                      }, p(v(g)("library", "Run a scan from settings")), 9, hN)
                    ])
                  ], 64))
                ], 2)) : B("", !0),
                m.value.length > 0 ? (y(), w("label", pN, [
                  c("input", {
                    type: "checkbox",
                    checked: I.value.length === m.value.length,
                    onChange: be
                  }, null, 40, vN),
                  we(" " + p(v(g)("library", "Select all publications on this page")), 1)
                ])) : B("", !0),
                m.value.length > 0 && Rt.value === "list" ? (y(), w("ul", gN, [
                  (y(!0), w(le, null, ke(m.value, (l) => (y(), w("li", {
                    key: l.id,
                    class: Ae(["library-catalogue-list-row", { "library-catalogue-list-row--selected": q.value.has(Number(l.id)), "library-catalogue-list-row--open": yi.value && Number(pt.value) === Number(l.id) }])
                  }, [
                    c("label", mN, [
                      c("input", {
                        type: "checkbox",
                        checked: q.value.has(Number(l.id)),
                        "aria-label": `${v(g)("library", "Select publication")}: ${l.title}`,
                        onChange: (D) => ce(l.id, D.currentTarget.checked)
                      }, null, 40, bN)
                    ]),
                    c("div", yN, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (D) => Pn(l, D)
                      }, [
                        c("bdi", wN, p(l.title), 1)
                      ], 8, _N),
                      l.creators ? (y(), w("span", SN, [
                        c("bdi", CN, p(l.creators), 1)
                      ])) : B("", !0)
                    ]),
                    c("dl", TN, [
                      l.publication ? (y(), w("div", EN, [
                        c("dt", null, p(v(g)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", AN, p(l.publication), 1)
                        ])
                      ])) : B("", !0),
                      l.publicationDate ? (y(), w("div", kN, [
                        c("dt", null, p(v(g)("library", "Publication date")), 1),
                        c("dd", null, p(l.publicationDate), 1)
                      ])) : B("", !0),
                      l.extension || l.publicationType ? (y(), w("div", ON, [
                        c("dt", null, p(v(g)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Ae(l.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: l.extension ? "ltr" : "auto"
                          }, p(l.extension ? Oa(l.extension) : l.publicationType), 11, xN)
                        ])
                      ])) : B("", !0),
                      l.shelf ? (y(), w("div", NN, [
                        c("dt", null, p(v(g)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", LN, p(l.shelf), 1)
                        ])
                      ])) : B("", !0)
                    ]),
                    c("div", RN, [
                      c("a", {
                        class: "button primary",
                        href: l.openUrl
                      }, p(v(g)("library", "Open")), 9, IN),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (D) => Pn(l, D)
                      }, p(v(g)("library", "Details")), 9, PN)
                    ])
                  ], 2))), 128))
                ])) : m.value.length > 0 ? (y(), w("div", {
                  key: 7,
                  class: Ae(["library-cover-gallery", Ca.value])
                }, [
                  (y(!0), w(le, null, ke(m.value, (l) => (y(), w("article", {
                    key: l.id,
                    class: Ae(["library-cover-card", { "library-cover-card--cover-loaded": vr(l) === "loaded", "library-cover-card--cover-error": vr(l) === "error", "library-cover-card--selected": q.value.has(Number(l.id)), "library-cover-card--open": yi.value && Number(pt.value) === Number(l.id) }])
                  }, [
                    c("label", $N, [
                      c("input", {
                        type: "checkbox",
                        checked: q.value.has(Number(l.id)),
                        "aria-label": `${v(g)("library", "Select publication")}: ${l.title}`,
                        onChange: (D) => ce(l.id, D.currentTarget.checked)
                      }, null, 40, DN)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${l.id} library-card-title-${l.id}`,
                      "aria-expanded": yi.value && Number(pt.value) === Number(l.id) ? "true" : "false",
                      onClick: (D) => Pn(l, D)
                    }, [
                      c("span", {
                        id: `library-details-action-${l.id}`,
                        class: "hidden-visually"
                      }, p(v(g)("library", "Details")), 9, MN),
                      c("span", zN, [
                        vr(l) === "loading" ? (y(), w("span", UN)) : B("", !0),
                        c("img", {
                          class: Ae(["library-cover-image", { "library-cover-image--loaded": vr(l) === "loaded" }]),
                          src: l.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (D) => cg(l),
                          onError: (D) => ug(l)
                        }, null, 42, BN),
                        vr(l) === "error" ? (y(), w("span", jN, p(v(g)("library", "Cover unavailable")), 1)) : B("", !0)
                      ])
                    ], 8, FN),
                    c("form", {
                      method: "post",
                      action: l.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: De((D) => pd(l, D), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: en.value
                      }, null, 8, VN),
                      f[102] || (f[102] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: l.starred ? "0" : "1"
                      }, null, 8, KN),
                      c("button", {
                        type: "submit",
                        class: Ae(["library-cover-star-button", { "library-cover-star-button--starred": l.starred }]),
                        "aria-pressed": l.starred ? "true" : "false",
                        title: l.starred ? v(g)("library", "Unstar this publication") : v(g)("library", "Star this publication"),
                        "aria-label": l.starred ? v(g)("library", "Unstar this publication") : v(g)("library", "Star this publication"),
                        "aria-busy": gr[l.id] ? "true" : void 0,
                        disabled: gr[l.id],
                        onClick: De((D) => pd(l, D), ["prevent"])
                      }, p(l.starred ? "★" : "☆"), 11, GN),
                      mr[l.id] ? (y(), w("span", {
                        key: 0,
                        "data-library-star-error": l.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(mr[l.id]), 9, WN)) : B("", !0)
                    ], 40, HN),
                    c("div", qN, [
                      c("div", YN, [
                        c("h3", {
                          id: `library-card-title-${l.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (D) => Pn(l, D)
                          }, [
                            c("bdi", JN, p(l.title), 1)
                          ], 8, ZN)
                        ], 8, XN),
                        l.creators ? (y(), w("p", QN, [
                          c("bdi", e3, p(l.creators), 1)
                        ])) : B("", !0),
                        Yl(l) || l.extension ? (y(), w("div", t3, [
                          l.extension ? (y(), w("span", n3, [
                            c("bdi", i3, p(Oa(l.extension)), 1)
                          ])) : B("", !0),
                          Yl(l) ? (y(), w("p", a3, [
                            c("bdi", r3, p(Yl(l)), 1)
                          ])) : B("", !0)
                        ])) : B("", !0),
                        c("div", o3, [
                          c("a", {
                            class: "library-cover-read",
                            href: l.openUrl
                          }, p(v(g)("library", "Open")), 9, s3),
                          Se(v(Bs), {
                            "aria-label": v(g)("library", "More actions")
                          }, {
                            default: Le(() => [
                              Se(v(Pa), {
                                href: l.filesUrl
                              }, {
                                default: Le(() => [
                                  we(p(v(g)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              Se(v(Pa), {
                                href: l.downloadUrl
                              }, {
                                default: Le(() => [
                                  we(p(v(g)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              Se(v(Pa), {
                                href: l.detailsUrl
                              }, {
                                default: Le(() => [
                                  we(p(v(g)("library", "Maintenance")), 1)
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
                m.value.length > 0 ? (y(), w("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": v(g)("library", "Catalogue pagination")
                }, [
                  c("span", c3, [
                    we(p(v(g)("library", "Page")) + " " + p(P.value.page), 1),
                    P.value.total > 0 ? (y(), w("span", u3, " · " + p(P.value.from) + "–" + p(P.value.to), 1)) : B("", !0)
                  ]),
                  P.value.previousUrl ? (y(), w("a", {
                    key: 0,
                    href: P.value.previousUrl
                  }, p(v(g)("library", "Previous")), 9, d3)) : (y(), w("span", f3, p(v(g)("library", "Previous")), 1)),
                  P.value.nextUrl ? (y(), w("a", {
                    key: 2,
                    href: P.value.nextUrl
                  }, p(v(g)("library", "Next")), 9, h3)) : (y(), w("span", p3, p(v(g)("library", "Next")), 1))
                ], 8, l3)) : B("", !0)
              ]))
            ], 8, RE)
          ]),
          _: 1
        }),
        Se(v(VC), {
          ref_key: "sidebarComponent",
          ref: Gi,
          class: "library-native-item-sidebar",
          open: yi.value,
          "no-toggle": "",
          loading: Xe.loading,
          name: ue.value?.title || v(g)("library", "Publication details"),
          subname: ue.value?.creators || "",
          role: Wi.value ? "dialog" : void 0,
          "aria-modal": Wi.value ? "true" : void 0,
          "aria-labelledby": Wi.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Wi.value && ue.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: ed,
          onClosed: Bv,
          onClose: Ko
        }, {
          default: Le(() => [
            c("div", v3, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Yu,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(ue.value?.title || v(g)("library", "Publication details")), 513),
              Xe.loading && !ue.value ? (y(), w("p", g3, p(v(g)("library", "Loading publication details…")), 1)) : Xe.error ? (y(), w("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Xe.missing ? "status" : "alert"
              }, [
                c("p", null, p(Xe.error), 1),
                Xe.missing ? B("", !0) : (y(), w("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: f[88] || (f[88] = (l) => lr(pt.value, { historyMode: "none" }))
                }, p(v(g)("library", "Try again")), 1))
              ], 8, m3)) : ue.value ? (y(), w(le, { key: 2 }, [
                c("p", b3, p(v(g)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", y3, [
                  c("span", _3, p(v(g)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: ue.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, w3),
                  c("div", S3, [
                    c("p", C3, [
                      c("bdi", T3, p(ue.value.publicationType || v(g)("library", "Publication")), 1),
                      ue.value.extension ? (y(), w("span", E3, [
                        f[103] || (f[103] = we(" · ", -1)),
                        c("bdi", A3, p(Oa(ue.value.extension)), 1)
                      ])) : B("", !0)
                    ]),
                    c("div", k3, [
                      c("a", {
                        class: "button primary",
                        href: ue.value.openUrl
                      }, p(v(g)("library", "Open")), 9, O3),
                      Se(v(Bs), {
                        "aria-label": v(g)("library", "File and maintenance actions")
                      }, {
                        default: Le(() => [
                          Se(v(Pa), {
                            href: ue.value.filesUrl
                          }, {
                            default: Le(() => [
                              we(p(v(g)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Se(v(Pa), {
                            href: ue.value.downloadUrl
                          }, {
                            default: Le(() => [
                              we(p(v(g)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Se(v(Pa), {
                            href: ue.value.detailsUrl
                          }, {
                            default: Le(() => [
                              we(p(v(g)("library", "Maintenance (legacy)")), 1)
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
                  "aria-label": v(g)("library", "Publication detail sections")
                }, [
                  (y(), w(le, null, ke(Dv, (l) => c("button", {
                    key: l.key,
                    type: "button",
                    class: Ae({ active: Tn.value === l.key }),
                    "aria-current": Tn.value === l.key ? "page" : void 0,
                    onClick: (D) => Tn.value = l.key
                  }, p(v(g)("library", l.label)), 11, N3)), 64))
                ], 8, x3),
                Tn.value === "overview" ? (y(), w("section", L3, [
                  c("h3", R3, p(v(g)("library", "Overview")), 1),
                  ue.value.description ? (y(), w("p", I3, [
                    c("bdi", P3, p(ue.value.description), 1)
                  ])) : B("", !0),
                  c("dl", $3, [
                    ue.value.publication ? (y(), w("div", D3, [
                      c("dt", null, p(v(g)("library", "Series")), 1),
                      c("dd", null, p(ue.value.publication), 1)
                    ])) : B("", !0),
                    ue.value.publicationDate ? (y(), w("div", F3, [
                      c("dt", null, p(v(g)("library", "Date")), 1),
                      c("dd", null, p(ue.value.publicationDate), 1)
                    ])) : B("", !0),
                    ue.value.publisher ? (y(), w("div", M3, [
                      c("dt", null, p(v(g)("library", "Publisher")), 1),
                      c("dd", null, p(ue.value.publisher), 1)
                    ])) : B("", !0),
                    ue.value.language ? (y(), w("div", z3, [
                      c("dt", null, p(v(g)("library", "Language")), 1),
                      c("dd", null, p(ue.value.language), 1)
                    ])) : B("", !0),
                    ue.value.shelf ? (y(), w("div", U3, [
                      c("dt", null, p(v(g)("library", "Shelf")), 1),
                      c("dd", null, p(ue.value.shelf), 1)
                    ])) : B("", !0)
                  ])
                ])) : Tn.value === "metadata" ? (y(), w("section", B3, [
                  c("h3", j3, p(v(g)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: De(zv, ["prevent"])
                  }, [
                    c("label", null, [
                      we(p(v(g)("library", "Title")), 1),
                      Re(c("input", {
                        "onUpdate:modelValue": f[89] || (f[89] = (l) => It.title = l),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [gt, It.title]
                      ])
                    ]),
                    c("label", null, [
                      we(p(v(g)("library", "Publication date")), 1),
                      Re(c("input", {
                        "onUpdate:modelValue": f[90] || (f[90] = (l) => It.publicationDate = l),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: v(g)("library", "e.g. 2026")
                      }, null, 8, H3), [
                        [gt, It.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(v(g)("library", "Identifiers")), 1),
                      (y(!0), w(le, null, ke(It.identifiers, (l, D) => (y(), w("div", {
                        key: D,
                        class: "library-sidebar-identifier"
                      }, [
                        Re(c("input", {
                          "onUpdate:modelValue": (re) => l.scheme = re,
                          "aria-label": v(g)("library", "Identifier type"),
                          placeholder: v(g)("library", "Identifier type")
                        }, null, 8, V3), [
                          [gt, l.scheme]
                        ]),
                        Re(c("input", {
                          "onUpdate:modelValue": (re) => l.displayValue = re,
                          "aria-label": v(g)("library", "Identifier value")
                        }, null, 8, K3), [
                          [gt, l.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (re) => Mv(D)
                        }, p(v(g)("library", "Remove")), 9, G3)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Fv
                      }, p(v(g)("library", "Add identifier")), 1)
                    ]),
                    c("p", W3, p(v(g)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    tt.error ? (y(), w("p", q3, p(tt.error), 1)) : tt.saved ? (y(), w("p", Y3, p(v(g)("library", "Metadata saved.")), 1)) : B("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: tt.saving
                    }, p(tt.saving ? v(g)("library", "Saving…") : v(g)("library", "Save metadata")), 9, X3)
                  ], 32),
                  Vo(ue.value).length ? (y(), w("section", Z3, [
                    c("h4", J3, p(v(g)("library", "Scanner suggestions")), 1),
                    c("p", Q3, p(v(g)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (y(!0), w(le, null, ke(Vo(ue.value), (l) => (y(), w("div", {
                        key: l.field
                      }, [
                        c("dt", null, p(l.field) + " · " + p(l.sourceProvenance), 1),
                        c("dd", null, [
                          we(p(v(g)("library", "Current")) + ": " + p(l.currentValue || "—"), 1),
                          f[104] || (f[104] = c("br", null, null, -1)),
                          we(p(v(g)("library", "Suggestion")) + ": " + p(l.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : B("", !0)
                ])) : (y(), w("section", eL, [
                  c("h3", tL, p(v(g)("library", "Activity")), 1),
                  c("dl", nL, [
                    c("div", null, [
                      c("dt", null, p(v(g)("library", "Scan status")), 1),
                      c("dd", null, p(ue.value.scanStatus || "—"), 1)
                    ]),
                    ue.value.workflowStatus ? (y(), w("div", iL, [
                      c("dt", null, p(v(g)("library", "Workflow")), 1),
                      c("dd", null, p(ue.value.workflowStatus), 1)
                    ])) : B("", !0),
                    ue.value.metadataSource ? (y(), w("div", aL, [
                      c("dt", null, p(v(g)("library", "Metadata source")), 1),
                      c("dd", null, p(ue.value.metadataSource), 1)
                    ])) : B("", !0),
                    ue.value.cachedPath ? (y(), w("div", rL, [
                      c("dt", null, p(v(g)("library", "File")), 1),
                      c("dd", oL, [
                        ue.value.openUrl ? (y(), w("a", {
                          key: 0,
                          href: ue.value.openUrl
                        }, [
                          c("bdi", lL, p(ue.value.cachedPath), 1)
                        ], 8, sL)) : (y(), w("bdi", cL, p(ue.value.cachedPath), 1))
                      ])
                    ])) : B("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": v(g)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Bo.value,
                    onClick: f[91] || (f[91] = (l) => Go(Bo.value))
                  }, p(v(g)("library", "Previous item")), 9, dL),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !jo.value,
                    onClick: f[92] || (f[92] = (l) => Go(jo.value))
                  }, p(v(g)("library", "Next item")), 9, fL)
                ], 8, uL)
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
function mL() {
  window.LibraryStartupWatchdog?.fail();
}
function bL(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Nu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !bL(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Xb(gL, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  mL(), console.error("[library] Vue startup failed", e);
}
