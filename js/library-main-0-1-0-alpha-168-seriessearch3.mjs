// @__NO_SIDE_EFFECTS__
function Lc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const je = {}, Ua = [], bn = () => {
}, df = () => !1, Uo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bo = (e) => e.startsWith("onUpdate:"), dt = Object.assign, Rc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, tv = Object.prototype.hasOwnProperty, Ke = (e, t) => tv.call(e, t), _e = Array.isArray, Ii = (e) => ls(e) === "[object Map]", fa = (e) => ls(e) === "[object Set]", bu = (e) => ls(e) === "[object Date]", xe = (e) => typeof e == "function", tt = (e) => typeof e == "string", On = (e) => typeof e == "symbol", We = (e) => e !== null && typeof e == "object", ff = (e) => (We(e) || xe(e)) && xe(e.then) && xe(e.catch), hf = Object.prototype.toString, ls = (e) => hf.call(e), nv = (e) => ls(e).slice(8, -1), pf = (e) => ls(e) === "[object Object]", Ic = (e) => tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Or = /* @__PURE__ */ Lc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ho = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, iv = /-\w/g, Ft = Ho(
  (e) => e.replace(iv, (t) => t.slice(1).toUpperCase())
), av = /\B([A-Z])/g, gi = Ho(
  (e) => e.replace(av, "-$1").toLowerCase()
), jo = Ho((e) => e.charAt(0).toUpperCase() + e.slice(1)), pl = Ho(
  (e) => e ? `on${jo(e)}` : ""
), Tt = (e, t) => !Object.is(e, t), Is = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, vf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Vo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, rv = (e) => {
  const t = tt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let yu;
const Go = () => yu || (yu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function on(e) {
  if (_e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = tt(i) ? cv(i) : on(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (tt(e) || We(e))
    return e;
}
const sv = /;(?![^(]*\))/g, ov = /:([^]+)/, lv = /\/\*[^]*?\*\//g;
function cv(e) {
  const t = {};
  return e.replace(lv, "").split(sv).forEach((n) => {
    if (n) {
      const i = n.split(ov);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ee(e) {
  let t = "";
  if (tt(e))
    t = e;
  else if (_e(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ee(e[n]);
      i && (t += i + " ");
    }
  else if (We(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Fs(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !tt(t) && (e.class = Ee(t)), n && (e.style = on(n)), e;
}
const uv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", dv = /* @__PURE__ */ Lc(uv);
function gf(e) {
  return !!e || e === "";
}
function fv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = $i(e[i], t[i]);
  return n;
}
function _u(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && $i(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function $i(e, t) {
  if (e === t) return !0;
  let n = bu(e), i = bu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = On(e), i = On(t), n || i)
    return e === t;
  if (n = _e(e), i = _e(t), n || i)
    return n && i ? fv(e, t) : !1;
  if (n = We(e), i = We(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Ii(e), i = Ii(t), n || i || (n = fa(e), i = fa(t), n || i))
      return n && i ? _u(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !$i(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function hv(e, t) {
  return e.findIndex((n) => $i(n, t));
}
const mf = (e) => !!(e && e.__v_isRef === !0), p = (e) => tt(e) ? e : e == null ? "" : _e(e) || We(e) && (e.toString === hf || !xe(e.toString)) ? mf(e) ? p(e.value) : JSON.stringify(e, bf, 2) : String(e), bf = (e, t) => mf(t) ? bf(e, t.value) : Ii(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[vl(i, r) + " =>"] = a, n),
    {}
  )
} : fa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => vl(n))
} : On(t) ? vl(t) : We(t) && !_e(t) && !pf(t) ? String(t) : t, vl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    On(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function pv(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Et;
class vv {
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
function gv() {
  return Et;
}
let et;
const gl = /* @__PURE__ */ new WeakSet();
class yf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Et && (Et.active ? Et.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, gl.has(this) && (gl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, wu(this), Cf(this);
    const t = et, n = An;
    et = this, An = !0;
    try {
      return this.fn();
    } finally {
      Sf(this), et = t, An = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mc(t);
      this.deps = this.depsTail = void 0, wu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? gl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Jl(this) && this.run();
  }
  get dirty() {
    return Jl(this);
  }
}
let _f = 0, Nr, xr;
function wf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = xr, xr = e;
    return;
  }
  e.next = Nr, Nr = e;
}
function Pc() {
  _f++;
}
function Dc() {
  if (--_f > 0)
    return;
  if (xr) {
    let t = xr;
    for (xr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Nr; ) {
    let t = Nr;
    for (Nr = void 0; t; ) {
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
function Cf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Sf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Mc(i), mv(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Jl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ef(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ef(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vr) || (e.globalVersion = Vr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Jl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = et, i = An;
  et = e, An = !0;
  try {
    Cf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Tt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    et = n, An = i, Sf(e), e.flags &= -3;
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
function mv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let An = !0;
const Tf = [];
function fi() {
  Tf.push(An), An = !1;
}
function hi() {
  const e = Tf.pop();
  An = e === void 0 ? !0 : e;
}
function wu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = et;
    et = void 0;
    try {
      t();
    } finally {
      et = n;
    }
  }
}
let Vr = 0;
class bv {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ko {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!et || !An || et === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== et)
      n = this.activeLink = new bv(et, this), et.deps ? (n.prevDep = et.depsTail, et.depsTail.nextDep = n, et.depsTail = n) : et.deps = et.depsTail = n, Af(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = et.depsTail, n.nextDep = void 0, et.depsTail.nextDep = n, et.depsTail = n, et.deps === n && (et.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Vr++, this.notify(t);
  }
  notify(t) {
    Pc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Dc();
    }
  }
}
function Af(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Af(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ql = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ Symbol(
  ""
), ec = /* @__PURE__ */ Symbol(
  ""
), Gr = /* @__PURE__ */ Symbol(
  ""
);
function Dt(e, t, n) {
  if (An && et) {
    let i = Ql.get(e);
    i || Ql.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Ko()), a.map = i, a.key = n), a.track();
  }
}
function ri(e, t, n, i, a, r) {
  const s = Ql.get(e);
  if (!s) {
    Vr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Pc(), t === "clear")
    s.forEach(o);
  else {
    const l = _e(e), d = l && Ic(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, w) => {
        (w === "length" || w === Gr || !On(w) && w >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(Gr)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(ca)), Ii(e) && o(s.get(ec)));
          break;
        case "delete":
          l || (o(s.get(ca)), Ii(e) && o(s.get(ec)));
          break;
        case "set":
          Ii(e) && o(s.get(ca));
          break;
      }
  }
  Dc();
}
function Ra(e) {
  const t = /* @__PURE__ */ Ve(e);
  return t === e ? t : (Dt(t, "iterate", Gr), /* @__PURE__ */ yn(e) ? t : t.map(Nn));
}
function Wo(e) {
  return Dt(e = /* @__PURE__ */ Ve(e), "iterate", Gr), e;
}
function Un(e, t) {
  return /* @__PURE__ */ pi(e) ? qa(/* @__PURE__ */ ua(e) ? Nn(t) : t) : Nn(t);
}
const yv = {
  __proto__: null,
  [Symbol.iterator]() {
    return ml(this, Symbol.iterator, (e) => Un(this, e));
  },
  concat(...e) {
    return Ra(this).concat(
      ...e.map((t) => _e(t) ? Ra(t) : t)
    );
  },
  entries() {
    return ml(this, "entries", (e) => (e[1] = Un(this, e[1]), e));
  },
  every(e, t) {
    return Zn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Zn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Un(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Zn(
      this,
      "find",
      e,
      t,
      (n) => Un(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Zn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Zn(
      this,
      "findLast",
      e,
      t,
      (n) => Un(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Zn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Zn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return bl(this, "includes", e);
  },
  indexOf(...e) {
    return bl(this, "indexOf", e);
  },
  join(e) {
    return Ra(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return bl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Zn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return fr(this, "pop");
  },
  push(...e) {
    return fr(this, "push", e);
  },
  reduce(e, ...t) {
    return Cu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Cu(this, "reduceRight", e, t);
  },
  shift() {
    return fr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Zn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return fr(this, "splice", e);
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
    return fr(this, "unshift", e);
  },
  values() {
    return ml(this, "values", (e) => Un(this, e));
  }
};
function ml(e, t, n) {
  const i = Wo(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ yn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const _v = Array.prototype;
function Zn(e, t, n, i, a, r) {
  const s = Wo(e), o = s !== e && !/* @__PURE__ */ yn(e), l = s[t];
  if (l !== _v[t]) {
    const h = l.apply(e, r);
    return o ? Nn(h) : h;
  }
  let d = n;
  s !== e && (o ? d = function(h, w) {
    return n.call(this, Un(e, h), w, e);
  } : n.length > 2 && (d = function(h, w) {
    return n.call(this, h, w, e);
  }));
  const u = l.call(s, d, i);
  return o && a ? a(u) : u;
}
function Cu(e, t, n, i) {
  const a = Wo(e), r = a !== e && !/* @__PURE__ */ yn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = Un(e, d)), n.call(this, d, Un(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Un(e, l) : l;
}
function bl(e, t, n) {
  const i = /* @__PURE__ */ Ve(e);
  Dt(i, "iterate", Gr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ zc(n[0]) ? (n[0] = /* @__PURE__ */ Ve(n[0]), i[t](...n)) : a;
}
function fr(e, t, n = []) {
  fi(), Pc();
  const i = (/* @__PURE__ */ Ve(e))[t].apply(e, n);
  return Dc(), hi(), i;
}
const wv = /* @__PURE__ */ Lc("__proto__,__v_isRef,__isVue"), kf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(On)
);
function Cv(e) {
  On(e) || (e = String(e));
  const t = /* @__PURE__ */ Ve(this);
  return Dt(t, "has", e), t.hasOwnProperty(e);
}
class Of {
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
      return i === (a ? r ? Rv : Rf : r ? Lf : xf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = _e(t);
    if (!a) {
      let l;
      if (s && (l = yv[n]))
        return l;
      if (n === "hasOwnProperty")
        return Cv;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ zt(t) ? t : i
    );
    if ((On(n) ? kf.has(n) : wv(n)) || (a || Dt(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ zt(o)) {
      const l = s && Ic(n) ? o : o.value;
      return a && We(l) ? /* @__PURE__ */ Kr(l) : l;
    }
    return We(o) ? a ? /* @__PURE__ */ Kr(o) : /* @__PURE__ */ Pt(o) : o;
  }
}
class Nf extends Of {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = _e(t) && Ic(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ pi(r);
      if (!/* @__PURE__ */ yn(i) && !/* @__PURE__ */ pi(i) && (r = /* @__PURE__ */ Ve(r), i = /* @__PURE__ */ Ve(i)), !s && /* @__PURE__ */ zt(r) && !/* @__PURE__ */ zt(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ke(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ zt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ve(a) && l && (o ? Tt(i, r) && ri(t, "set", n, i) : ri(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ke(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ri(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!On(n) || !kf.has(n)) && Dt(t, "has", n), i;
  }
  ownKeys(t) {
    return Dt(
      t,
      "iterate",
      _e(t) ? "length" : ca
    ), Reflect.ownKeys(t);
  }
}
class Sv extends Of {
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
const Ev = /* @__PURE__ */ new Nf(), Tv = /* @__PURE__ */ new Sv(), Av = /* @__PURE__ */ new Nf(!0);
const tc = (e) => e, ys = (e) => Reflect.getPrototypeOf(e);
function kv(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ve(a), s = Ii(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? tc : t ? qa : Nn;
    return !t && Dt(
      r,
      "iterate",
      l ? ec : ca
    ), dt(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: w } = d.next();
          return w ? { value: h, done: w } : {
            value: o ? [u(h[0]), u(h[1])] : u(h),
            done: w
          };
        }
      }
    );
  };
}
function _s(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ov(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ve(r), o = /* @__PURE__ */ Ve(a);
      e || (Tt(a, o) && Dt(s, "get", a), Dt(s, "get", o));
      const { has: l } = ys(s), d = t ? tc : e ? qa : Nn;
      if (l.call(s, a))
        return d(r.get(a));
      if (l.call(s, o))
        return d(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Dt(/* @__PURE__ */ Ve(a), "iterate", ca), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ve(r), o = /* @__PURE__ */ Ve(a);
      return e || (Tt(a, o) && Dt(s, "has", a), Dt(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ Ve(o), d = t ? tc : e ? qa : Nn;
      return !e && Dt(l, "iterate", ca), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return dt(
    n,
    e ? {
      add: _s("add"),
      set: _s("set"),
      delete: _s("delete"),
      clear: _s("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ve(this), s = ys(r), o = /* @__PURE__ */ Ve(a), l = !t && !/* @__PURE__ */ yn(a) && !/* @__PURE__ */ pi(a) ? o : a;
        return s.has.call(r, l) || Tt(a, l) && s.has.call(r, a) || Tt(o, l) && s.has.call(r, o) || (r.add(l), ri(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ yn(r) && !/* @__PURE__ */ pi(r) && (r = /* @__PURE__ */ Ve(r));
        const s = /* @__PURE__ */ Ve(this), { has: o, get: l } = ys(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ Ve(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? Tt(r, u) && ri(s, "set", a, r) : ri(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ve(this), { has: s, get: o } = ys(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ Ve(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && ri(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ Ve(this), r = a.size !== 0, s = a.clear();
        return r && ri(
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
    n[a] = kv(a, e, t);
  }), n;
}
function $c(e, t) {
  const n = Ov(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ke(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Nv = {
  get: /* @__PURE__ */ $c(!1, !1)
}, xv = {
  get: /* @__PURE__ */ $c(!1, !0)
}, Lv = {
  get: /* @__PURE__ */ $c(!0, !1)
};
const xf = /* @__PURE__ */ new WeakMap(), Lf = /* @__PURE__ */ new WeakMap(), Rf = /* @__PURE__ */ new WeakMap(), Rv = /* @__PURE__ */ new WeakMap();
function Iv(e) {
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
function Pt(e) {
  return /* @__PURE__ */ pi(e) ? e : Fc(
    e,
    !1,
    Ev,
    Nv,
    xf
  );
}
// @__NO_SIDE_EFFECTS__
function Pv(e) {
  return Fc(
    e,
    !1,
    Av,
    xv,
    Lf
  );
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return Fc(
    e,
    !0,
    Tv,
    Lv,
    Rf
  );
}
function Fc(e, t, n, i, a) {
  if (!We(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Iv(nv(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ua(e) {
  return /* @__PURE__ */ pi(e) ? /* @__PURE__ */ ua(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function pi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function zc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ve(t) : e;
}
function Dv(e) {
  return !Ke(e, "__v_skip") && Object.isExtensible(e) && vf(e, "__v_skip", !0), e;
}
const Nn = (e) => We(e) ? /* @__PURE__ */ Pt(e) : e, qa = (e) => We(e) ? /* @__PURE__ */ Kr(e) : e;
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return Pf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function If(e) {
  return Pf(e, !0);
}
function Pf(e, t) {
  return /* @__PURE__ */ zt(e) ? e : new Mv(e, t);
}
class Mv {
  constructor(t, n) {
    this.dep = new Ko(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ve(t), this._value = n ? t : Nn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ yn(t) || /* @__PURE__ */ pi(t);
    t = i ? t : /* @__PURE__ */ Ve(t), Tt(t, n) && (this._rawValue = t, this._value = i ? t : Nn(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ zt(e) ? e.value : e;
}
function ci(e) {
  return xe(e) ? e() : g(e);
}
const $v = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ zt(a) && !/* @__PURE__ */ zt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Df(e) {
  return /* @__PURE__ */ ua(e) ? e : new Proxy(e, $v);
}
class Fv {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ko(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function zv(e) {
  return new Fv(e);
}
class Uv {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ko(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    et !== this)
      return wf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ef(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Bv(e, t, n = !1) {
  let i, a;
  return xe(e) ? i = e : (i = e.get, a = e.set), new Uv(i, a, n);
}
const ws = {}, zs = /* @__PURE__ */ new WeakMap();
let ea;
function Hv(e, t = !1, n = ea) {
  if (n) {
    let i = zs.get(n);
    i || zs.set(n, i = []), i.push(e);
  }
}
function jv(e, t, n = je) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = (F) => a ? F : /* @__PURE__ */ yn(F) || a === !1 || a === 0 ? si(F, 1) : si(F);
  let u, h, w, T, O = !1, A = !1;
  if (/* @__PURE__ */ zt(e) ? (h = () => e.value, O = /* @__PURE__ */ yn(e)) : /* @__PURE__ */ ua(e) ? (h = () => d(e), O = !0) : _e(e) ? (A = !0, O = e.some((F) => /* @__PURE__ */ ua(F) || /* @__PURE__ */ yn(F)), h = () => e.map((F) => {
    if (/* @__PURE__ */ zt(F))
      return F.value;
    if (/* @__PURE__ */ ua(F))
      return d(F);
    if (xe(F))
      return l ? l(F, 2) : F();
  })) : xe(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (w) {
      fi();
      try {
        w();
      } finally {
        hi();
      }
    }
    const F = ea;
    ea = u;
    try {
      return l ? l(e, 3, [T]) : e(T);
    } finally {
      ea = F;
    }
  } : h = bn, t && a) {
    const F = h, le = a === !0 ? 1 / 0 : a;
    h = () => si(F(), le);
  }
  const x = gv(), L = () => {
    u.stop(), x && x.active && Rc(x.effects, u);
  };
  if (r && t) {
    const F = t;
    t = (...le) => {
      const fe = F(...le);
      return L(), fe;
    };
  }
  let M = A ? new Array(e.length).fill(ws) : ws;
  const G = (F) => {
    if (!(!(u.flags & 1) || !u.dirty && !F))
      if (t) {
        const le = u.run();
        if (F || a || O || (A ? le.some((fe, ee) => Tt(fe, M[ee])) : Tt(le, M))) {
          w && w();
          const fe = ea;
          ea = u;
          try {
            const ee = [
              le,
              // pass undefined as the old value when it's changed for the first time
              M === ws ? void 0 : A && M[0] === ws ? [] : M,
              T
            ];
            M = le, l ? l(t, 3, ee) : (
              // @ts-expect-error
              t(...ee)
            );
          } finally {
            ea = fe;
          }
        }
      } else
        u.run();
  };
  return o && o(G), u = new yf(h), u.scheduler = s ? () => s(G, !1) : G, T = (F) => Hv(F, !1, u), w = u.onStop = () => {
    const F = zs.get(u);
    if (F) {
      if (l)
        l(F, 4);
      else
        for (const le of F) le();
      zs.delete(u);
    }
  }, t ? i ? G(!0) : M = u.run() : s ? s(G.bind(null, !0), !0) : u.run(), L.pause = u.pause.bind(u), L.resume = u.resume.bind(u), L.stop = L, L;
}
function si(e, t = 1 / 0, n) {
  if (t <= 0 || !We(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ zt(e))
    si(e.value, t, n);
  else if (_e(e))
    for (let i = 0; i < e.length; i++)
      si(e[i], t, n);
  else if (fa(e) || Ii(e))
    e.forEach((i) => {
      si(i, t, n);
    });
  else if (pf(e)) {
    for (const i in e)
      si(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && si(e[i], t, n);
  }
  return e;
}
function cs(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    qo(a, t, n);
  }
}
function _n(e, t, n, i) {
  if (xe(e)) {
    const a = cs(e, t, n, i);
    return a && ff(a) && a.catch((r) => {
      qo(r, t, n);
    }), a;
  }
  if (_e(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(_n(e[r], t, n, i));
    return a;
  }
}
function qo(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || je;
  if (t) {
    let o = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, l, d) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      fi(), cs(r, null, 10, [
        e,
        l,
        d
      ]), hi();
      return;
    }
  }
  Vv(e, n, a, i, s);
}
function Vv(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const qt = [];
let $n = -1;
const Ba = [];
let Li = null, $a = 0;
const Mf = /* @__PURE__ */ Promise.resolve();
let Us = null;
function Hn(e) {
  const t = Us || Mf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gv(e) {
  let t = $n + 1, n = qt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = qt[i], r = Wr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Uc(e) {
  if (!(e.flags & 1)) {
    const t = Wr(e), n = qt[qt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wr(n) ? qt.push(e) : qt.splice(Gv(t), 0, e), e.flags |= 1, $f();
  }
}
function $f() {
  Us || (Us = Mf.then(Uf));
}
function Ff(e) {
  if (!_e(e))
    Li && e.id === -1 ? Li.splice($a + 1, 0, e) : e.flags & 1 || (Ba.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ba.push(e[t]);
  $f();
}
function Su(e, t, n = $n + 1) {
  for (; n < qt.length; n++) {
    const i = qt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      qt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function zf(e) {
  if (Ba.length) {
    const t = [...new Set(Ba)].sort(
      (n, i) => Wr(n) - Wr(i)
    );
    if (Ba.length = 0, Li) {
      for (let n = 0; n < t.length; n++)
        Li.push(t[n]);
      return;
    }
    for (Li = t, $a = 0; $a < Li.length; $a++) {
      const n = Li[$a];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Li = null, $a = 0;
  }
}
const Wr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Uf(e) {
  try {
    for ($n = 0; $n < qt.length; $n++) {
      const t = qt[$n];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), cs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $n < qt.length; $n++) {
      const t = qt[$n];
      t && (t.flags &= -2);
    }
    $n = -1, qt.length = 0, zf(), Us = null, (qt.length || Ba.length) && Uf();
  }
}
let kt = null, Yo = null;
function Bs(e) {
  const t = kt;
  return kt = e, Yo = e && e.type.__scopeId || null, t;
}
function Kv(e) {
  Yo = e;
}
function Wv() {
  Yo = null;
}
const qv = (e) => Ae;
function Ae(e, t = kt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Ks(-1);
    const r = Bs(t), s = ui.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = ui.length; l > s; l--) Wc();
      Bs(r), i._d && Ks(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ge(e, t) {
  if (kt === null)
    return e;
  const n = tl(kt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = je] = t[a];
    r && (xe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && si(s), i.push({
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
function qi(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (fi(), _n(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), hi());
  }
}
function vn(e, t) {
  if ($t) {
    let n = $t.provides;
    const i = $t.parent && $t.parent.provides;
    i === n && (n = $t.provides = Object.create(i)), n[e] = t;
  }
}
function Mt(e, t, n = !1) {
  const i = pa();
  if (i || ja) {
    let a = ja ? ja._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && xe(t) ? t.call(i && i.proxy) : t;
  }
}
const Yv = /* @__PURE__ */ Symbol.for("v-scx"), Xv = () => Mt(Yv);
function Zv(e, t) {
  return Xo(e, null, t);
}
function Jv(e, t) {
  return Xo(
    e,
    null,
    { flush: "sync" }
  );
}
function Ut(e, t, n) {
  return Xo(e, t, n);
}
function Xo(e, t, n = je) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = dt({}, n), l = t && i || !t && r !== "post";
  let d;
  if (Qr) {
    if (r === "sync") {
      const T = Xv();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!l) {
      const T = () => {
      };
      return T.stop = bn, T.resume = bn, T.pause = bn, T;
    }
  }
  const u = $t;
  o.call = (T, O, A) => _n(T, u, O, A);
  let h = !1;
  r === "post" ? o.scheduler = (T) => {
    Kt(T, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (T, O) => {
    O ? T() : Uc(T);
  }), o.augmentJob = (T) => {
    t && (T.flags |= 4), h && (T.flags |= 2, u && (T.id = u.uid, T.i = u));
  };
  const w = jv(e, t, o);
  return Qr && (d ? d.push(w) : l && w()), w;
}
function Qv(e, t, n) {
  const i = this.proxy, a = tt(e) ? e.includes(".") ? Bf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  xe(t) ? r = t : (r = t.handler, n = t);
  const s = fs(this), o = Xo(a, r.bind(i), n);
  return s(), o;
}
function Bf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Oi = /* @__PURE__ */ new WeakMap(), Hf = /* @__PURE__ */ Symbol("_vte"), Zo = (e) => e.__isTeleport, na = (e) => e && (e.disabled || e.disabled === ""), eg = (e) => e && (e.defer || e.defer === ""), Eu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Tu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, nc = (e, t) => {
  const n = e && e.to;
  return tt(n) ? t ? t(n) : null : n;
}, tg = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: w,
      o: { insert: T, querySelector: O, createText: A, createComment: x, parentNode: L }
    } = d, M = na(t.props);
    let { dynamicChildren: G } = t;
    const F = (ee, ne, P) => {
      ee.shapeFlag & 16 && u(
        ee.children,
        ne,
        P,
        a,
        r,
        s,
        o,
        l
      );
    }, le = (ee = t) => {
      const ne = na(ee.props), P = ee.target = nc(ee.props, O), ae = ic(P, ee, A, T);
      P && (s !== "svg" && Eu(P) ? s = "svg" : s !== "mathml" && Tu(P) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(P), ne || (F(ee, P, ae), Cr(ee, !1)));
    }, fe = (ee) => {
      const ne = () => {
        if (Oi.get(ee) === ne) {
          if (Oi.delete(ee), na(ee.props)) {
            const P = L(ee.el) || n;
            F(ee, P, ee.anchor), Cr(ee, !0);
          }
          le(ee);
        }
      };
      Oi.set(ee, ne), Kt(ne, r);
    };
    if (e == null) {
      const ee = t.el = A(""), ne = t.anchor = A("");
      if (T(ee, n, i), T(ne, n, i), eg(t.props) || r && r.pendingBranch) {
        fe(t);
        return;
      }
      M && (F(t, n, ne), Cr(t, !0)), le();
    } else {
      t.el = e.el;
      const ee = t.anchor = e.anchor, ne = Oi.get(e);
      if (ne) {
        ne.flags |= 8, Oi.delete(e), fe(t);
        return;
      }
      t.targetStart = e.targetStart;
      const P = t.target = e.target, ae = t.targetAnchor = e.targetAnchor, he = na(e.props), Z = he ? n : P, ie = he ? ee : ae;
      if (s === "svg" || Eu(P) ? s = "svg" : (s === "mathml" || Tu(P)) && (s = "mathml"), G ? (w(
        e.dynamicChildren,
        G,
        Z,
        a,
        r,
        s,
        o
      ), Kc(e, t, !0)) : l || h(
        e,
        t,
        Z,
        ie,
        a,
        r,
        s,
        o,
        !1
      ), M)
        he ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Cs(
          t,
          n,
          ee,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = nc(t.props, O);
        D && (t.target = D, Cs(
          t,
          D,
          null,
          d,
          0
        ));
      } else he && Cs(
        t,
        P,
        ae,
        d,
        1
      );
      Cr(t, M);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: s,
      children: o,
      anchor: l,
      targetStart: d,
      targetAnchor: u,
      target: h,
      props: w
    } = e, T = na(w), O = r || !T, A = Oi.get(e);
    if (A && (A.flags |= 8, Oi.delete(e)), h && (a(d), a(u)), r && a(l), !A && (T || h) && s & 16)
      for (let x = 0; x < o.length; x++) {
        const L = o[x];
        i(
          L,
          t,
          n,
          O,
          !!L.dynamicChildren
        );
      }
  },
  move: Cs,
  hydrate: ng
};
function Cs(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: d, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !Oi.has(e) && (!h || na(u)) && l & 16)
    for (let w = 0; w < d.length; w++)
      a(
        d[w],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function ng(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: d, createText: u }
}, h) {
  function w(x, L) {
    let M = L;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, x._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      M = s(M);
    }
  }
  function T(x, L) {
    L.anchor = h(
      s(x),
      L,
      o(x),
      n,
      i,
      a,
      r
    );
  }
  const O = t.target = nc(
    t.props,
    l
  ), A = na(t.props);
  if (O) {
    const x = O._lpa || O.firstChild;
    t.shapeFlag & 16 && (A ? (T(e, t), w(O, x), t.targetAnchor || ic(
      O,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === O ? e : null
    )) : (t.anchor = s(e), w(O, x), t.targetAnchor || ic(O, t, u, d), h(
      x && s(x),
      t,
      O,
      n,
      i,
      a,
      r
    ))), Cr(t, A);
  } else A && t.shapeFlag & 16 && (T(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const jf = tg;
function Cr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function ic(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Hf] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const gn = /* @__PURE__ */ Symbol("_leaveCb"), hr = /* @__PURE__ */ Symbol("_enterCb");
function ig() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ui(() => {
    e.isMounted = !0;
  }), Ya(() => {
    e.isUnmounting = !0;
  }), e;
}
const dn = [Function, Array], Vf = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: dn,
  onEnter: dn,
  onAfterEnter: dn,
  onEnterCancelled: dn,
  // leave
  onBeforeLeave: dn,
  onLeave: dn,
  onAfterLeave: dn,
  onLeaveCancelled: dn,
  // appear
  onBeforeAppear: dn,
  onAppear: dn,
  onAfterAppear: dn,
  onAppearCancelled: dn
}, Gf = (e) => {
  const t = e.subTree;
  return t.component ? Gf(t.component) : t;
}, ag = {
  name: "BaseTransition",
  props: Vf,
  setup(e, { slots: t }) {
    const n = pa(), i = ig();
    return () => {
      const a = t.default && qf(t.default(), !0), r = a && a.length ? Kf(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? H() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ Ve(e), { mode: o } = s;
      if (i.isLeaving)
        return yl(r);
      const l = Hs(r);
      if (!l)
        return yl(r);
      let d = ac(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== At && qr(l, d);
      let u = n.subTree && Hs(n.subTree);
      if (u && u.type !== At && !ia(u, l) && Gf(n).type !== At) {
        let h = ac(
          u,
          s,
          i,
          n
        );
        if (qr(u, h), o === "out-in" && l.type !== At)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, yl(r);
        o === "in-out" && l.type !== At ? h.delayLeave = (w, T, O) => {
          const A = Wf(
            i,
            u
          );
          A[String(u.key)] = u, w[gn] = () => {
            T(), w[gn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            O(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Kf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== At) {
        t = n;
        break;
      }
  }
  return t;
}
const rg = ag;
function Wf(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function ac(e, t, n, i, a) {
  const {
    appear: r,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: w,
    onLeave: T,
    onAfterLeave: O,
    onLeaveCancelled: A,
    onBeforeAppear: x,
    onAppear: L,
    onAfterAppear: M,
    onAppearCancelled: G
  } = t, F = String(e.key), le = Wf(n, e), fe = (P, ae) => {
    P && _n(
      P,
      i,
      9,
      ae
    );
  }, ee = (P, ae) => {
    const he = ae[1];
    fe(P, ae), _e(P) ? P.every((Z) => Z.length <= 1) && he() : P.length <= 1 && he();
  }, ne = {
    mode: s,
    persisted: o,
    beforeEnter(P) {
      let ae = l;
      if (!n.isMounted)
        if (r)
          ae = x || l;
        else
          return;
      P[gn] && P[gn](
        !0
        /* cancelled */
      );
      const he = le[F];
      he && ia(e, he) && he.el[gn] && he.el[gn](), fe(ae, [P]);
    },
    enter(P) {
      if (le[F] === e) return;
      let ae = d, he = u, Z = h;
      if (!n.isMounted)
        if (r)
          ae = L || d, he = M || u, Z = G || h;
        else
          return;
      let ie = !1;
      P[hr] = ($) => {
        ie || (ie = !0, $ ? fe(Z, [P]) : fe(he, [P]), ne.delayedLeave && ne.delayedLeave(), P[hr] = void 0);
      };
      const D = P[hr].bind(null, !1);
      ae ? ee(ae, [P, D]) : D();
    },
    leave(P, ae) {
      const he = String(e.key);
      if (P[hr] && P[hr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return ae();
      fe(w, [P]);
      let Z = !1;
      P[gn] = (D) => {
        Z || (Z = !0, ae(), D ? fe(A, [P]) : fe(O, [P]), P[gn] = void 0, le[he] === e && delete le[he]);
      };
      const ie = P[gn].bind(null, !1);
      le[he] = e, T ? ee(T, [P, ie]) : ie();
    },
    clone(P) {
      const ae = ac(
        P,
        t,
        n,
        i,
        a
      );
      return a && a(ae), ae;
    }
  };
  return ne;
}
function yl(e) {
  if (Jo(e))
    return e = Fi(e), e.children = null, e;
}
function Hs(e) {
  if (!Jo(e))
    return Zo(e.type) && e.children ? Kf(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && xe(n.default))
      return n.default();
  }
}
function qr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    qr(
      Zo(n.type) && Hs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function qf(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === ue ? (s.patchFlag & 128 && a++, i = i.concat(
      qf(s.children, t, o)
    )) : (t || s.type !== At) && i.push(o != null ? Fi(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Ot(e, t) {
  return xe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    dt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Yf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function sg(e) {
  const t = pa(), n = /* @__PURE__ */ If(null);
  if (t) {
    const a = t.refs === je ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function Au(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const js = /* @__PURE__ */ new WeakMap();
function Lr(e, t, n, i, a = !1) {
  if (_e(e)) {
    e.forEach(
      (A, x) => Lr(
        A,
        t && (_e(t) ? t[x] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ha(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Lr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? tl(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === je ? o.refs = {} : o.refs, h = o.setupState, w = /* @__PURE__ */ Ve(h), T = h === je ? df : (A) => Au(u, A) ? !1 : Ke(w, A), O = (A, x) => !(x && Au(u, x));
  if (d != null && d !== l) {
    if (ku(t), tt(d))
      u[d] = null, T(d) && (h[d] = null);
    else if (/* @__PURE__ */ zt(d)) {
      const A = t;
      O(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (xe(l))
    cs(l, o, 12, [s, u]);
  else {
    const A = tt(l), x = /* @__PURE__ */ zt(l);
    if (A || x) {
      const L = () => {
        if (e.f) {
          const M = A ? T(l) ? h[l] : u[l] : O() || !e.k ? l.value : u[e.k];
          if (a)
            _e(M) && Rc(M, r);
          else if (_e(M))
            M.includes(r) || M.push(r);
          else if (A)
            u[l] = [r], T(l) && (h[l] = u[l]);
          else {
            const G = [r];
            O(l, e.k) && (l.value = G), e.k && (u[e.k] = G);
          }
        } else A ? (u[l] = s, T(l) && (h[l] = s)) : x && (O(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const M = () => {
          L(), js.delete(e);
        };
        M.id = -1, js.set(e, M), Kt(M, n);
      } else
        ku(e), L();
    }
  }
}
function ku(e) {
  const t = js.get(e);
  t && (t.flags |= 8, js.delete(e));
}
Go().requestIdleCallback;
Go().cancelIdleCallback;
const Ha = (e) => !!e.type.__asyncLoader, Jo = (e) => e.type.__isKeepAlive;
function og(e, t) {
  Xf(e, "a", t);
}
function lg(e, t) {
  Xf(e, "da", t);
}
function Xf(e, t, n = $t) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Qo(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Jo(a.parent.vnode) && cg(i, t, n, a), a = a.parent;
  }
}
function cg(e, t, n, i) {
  const a = Qo(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  us(() => {
    Rc(i[t], a);
  }, n);
}
function Qo(e, t, n = $t, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      fi();
      const o = fs(n), l = _n(t, n, e, s);
      return o(), hi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const mi = (e) => (t, n = $t) => {
  (!Qr || e === "sp") && Qo(e, (...i) => t(...i), n);
}, Zf = mi("bm"), Ui = mi("m"), Jf = mi(
  "bu"
), ug = mi("u"), Ya = mi(
  "bum"
), us = mi("um"), dg = mi(
  "sp"
), fg = mi("rtg"), hg = mi("rtc");
function pg(e, t = $t) {
  Qo("ec", e, t);
}
const Bc = "components", vg = "directives";
function Be(e, t) {
  return jc(Bc, e, !0, t) || e;
}
const Qf = /* @__PURE__ */ Symbol.for("v-ndc");
function Hc(e) {
  return tt(e) ? jc(Bc, e, !1) || e : e || Qf;
}
function Ou(e) {
  return jc(vg, e);
}
function jc(e, t, n = !0, i = !1) {
  const a = kt || $t;
  if (a) {
    const r = a.type;
    if (e === Bc) {
      const o = Zg(
        r,
        !1
      );
      if (o && (o === t || o === Ft(t) || o === jo(Ft(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Nu(a[e] || r[e], t) || // global registration
      Nu(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function Nu(e, t) {
  return e && (e[t] || e[Ft(t)] || e[jo(Ft(t))]);
}
function $e(e, t, n, i) {
  let a;
  const r = n, s = _e(e);
  if (s || tt(e)) {
    const o = s && /* @__PURE__ */ ua(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ yn(e), d = /* @__PURE__ */ pi(e), e = Wo(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? d ? qa(Nn(e[u])) : Nn(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (We(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (o, l) => t(o, l, void 0, r)
      );
    else {
      const o = Object.keys(e);
      a = new Array(o.length);
      for (let l = 0, d = o.length; l < d; l++) {
        const u = o[l];
        a[l] = t(e[u], u, l, r);
      }
    }
  else
    a = [];
  return a;
}
function Re(e, t, n, i, a, r) {
  if (n == null && (n = {}), kt.ce || kt.parent && Ha(kt.parent) && kt.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), y(), Fe(
      ue,
      null,
      [be("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = ui.length;
  y();
  let l;
  try {
    const d = s && eh(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = Fe(
      ue,
      {
        key: (u && !On(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = ui.length; u > o; u--) Wc();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function eh(e) {
  return e.some((t) => Xr(t) ? !(t.type === At || t.type === ue && !eh(t.children)) : !0) ? e : null;
}
const rc = (e) => e ? Ch(e) ? tl(e) : rc(e.parent) : null, Rr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ dt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => rc(e.parent),
    $root: (e) => rc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ih(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Uc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Hn.bind(e.proxy)),
    $watch: (e) => Qv.bind(e)
  })
), _l = (e, t) => e !== je && !e.__isScriptSetup && Ke(e, t), gg = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: s, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const w = s[t];
      if (w !== void 0)
        switch (w) {
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
        if (_l(i, t))
          return s[t] = 1, i[t];
        if (a !== je && Ke(a, t))
          return s[t] = 2, a[t];
        if (Ke(r, t))
          return s[t] = 3, r[t];
        if (n !== je && Ke(n, t))
          return s[t] = 4, n[t];
        sc && (s[t] = 0);
      }
    }
    const d = Rr[t];
    let u, h;
    if (d)
      return t === "$attrs" && Dt(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== je && Ke(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Ke(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return _l(a, t) ? (a[t] = n, !0) : i !== je && Ke(i, t) ? (i[t] = n, !0) : Ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== je && o[0] !== "$" && Ke(e, o) || _l(t, o) || Ke(r, o) || Ke(i, o) || Ke(Rr, o) || Ke(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function mg() {
  return th().slots;
}
function bg() {
  return th().attrs;
}
function th(e) {
  const t = pa();
  return t.setupContext || (t.setupContext = Eh(t));
}
function Vs(e) {
  return _e(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function yg(e, t) {
  return !e || !t ? e || t : _e(e) && _e(t) ? e.concat(t) : dt({}, Vs(e), Vs(t));
}
let sc = !0;
function _g(e) {
  const t = ih(e), n = e.proxy, i = e.ctx;
  sc = !1, t.beforeCreate && xu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: s,
    watch: o,
    provide: l,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: w,
    beforeUpdate: T,
    updated: O,
    activated: A,
    deactivated: x,
    beforeDestroy: L,
    beforeUnmount: M,
    destroyed: G,
    unmounted: F,
    render: le,
    renderTracked: fe,
    renderTriggered: ee,
    errorCaptured: ne,
    serverPrefetch: P,
    // public API
    expose: ae,
    inheritAttrs: he,
    // assets
    components: Z,
    directives: ie,
    filters: D
  } = t;
  if (d && wg(d, i, null), s)
    for (const se in s) {
      const te = s[se];
      xe(te) && (i[se] = te.bind(n));
    }
  if (a) {
    const se = a.call(n, n);
    We(se) && (e.data = /* @__PURE__ */ Pt(se));
  }
  if (sc = !0, r)
    for (const se in r) {
      const te = r[se], ce = xe(te) ? te.bind(n, n) : xe(te.get) ? te.get.bind(n, n) : bn, de = !xe(te) && xe(te.set) ? te.set.bind(n) : bn, we = q({
        get: ce,
        set: de
      });
      Object.defineProperty(i, se, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (me) => we.value = me
      });
    }
  if (o)
    for (const se in o)
      nh(o[se], i, n, se);
  if (l) {
    const se = xe(l) ? l.call(n) : l;
    Reflect.ownKeys(se).forEach((te) => {
      vn(te, se[te]);
    });
  }
  u && xu(u, e, "c");
  function Y(se, te) {
    _e(te) ? te.forEach((ce) => se(ce.bind(n))) : te && se(te.bind(n));
  }
  if (Y(Zf, h), Y(Ui, w), Y(Jf, T), Y(ug, O), Y(og, A), Y(lg, x), Y(pg, ne), Y(hg, fe), Y(fg, ee), Y(Ya, M), Y(us, F), Y(dg, P), _e(ae))
    if (ae.length) {
      const se = e.exposed || (e.exposed = {});
      ae.forEach((te) => {
        Object.defineProperty(se, te, {
          get: () => n[te],
          set: (ce) => n[te] = ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === bn && (e.render = le), he != null && (e.inheritAttrs = he), Z && (e.components = Z), ie && (e.directives = ie), P && Yf(e);
}
function wg(e, t, n = bn) {
  _e(e) && (e = oc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    We(a) ? "default" in a ? r = Mt(
      a.from || i,
      a.default,
      !0
    ) : r = Mt(a.from || i) : r = Mt(a), /* @__PURE__ */ zt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function xu(e, t, n) {
  _n(
    _e(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function nh(e, t, n, i) {
  let a = i.includes(".") ? Bf(n, i) : () => n[i];
  if (tt(e)) {
    const r = t[e];
    xe(r) && Ut(a, r);
  } else if (xe(e))
    Ut(a, e.bind(n));
  else if (We(e))
    if (_e(e))
      e.forEach((r) => nh(r, t, n, i));
    else {
      const r = xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      xe(r) && Ut(a, r, e);
    }
}
function ih(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => Gs(l, d, s, !0)
  ), Gs(l, t, s)), We(t) && r.set(t, l), l;
}
function Gs(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Gs(e, r, n, !0), a && a.forEach(
    (s) => Gs(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = Cg[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const Cg = {
  data: Lu,
  props: Ru,
  emits: Ru,
  // objects
  methods: Sr,
  computed: Sr,
  // lifecycle
  beforeCreate: Gt,
  created: Gt,
  beforeMount: Gt,
  mounted: Gt,
  beforeUpdate: Gt,
  updated: Gt,
  beforeDestroy: Gt,
  beforeUnmount: Gt,
  destroyed: Gt,
  unmounted: Gt,
  activated: Gt,
  deactivated: Gt,
  errorCaptured: Gt,
  serverPrefetch: Gt,
  // assets
  components: Sr,
  directives: Sr,
  // watch
  watch: Eg,
  // provide / inject
  provide: Lu,
  inject: Sg
};
function Lu(e, t) {
  return t ? e ? function() {
    return dt(
      xe(e) ? e.call(this, this) : e,
      xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Sg(e, t) {
  return Sr(oc(e), oc(t));
}
function oc(e) {
  if (_e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Gt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Sr(e, t) {
  return e ? dt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ru(e, t) {
  return e ? _e(e) && _e(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : dt(
    /* @__PURE__ */ Object.create(null),
    Vs(e),
    Vs(t ?? {})
  ) : t;
}
function Eg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = dt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Gt(e[i], t[i]);
  return n;
}
function ah() {
  return {
    app: null,
    config: {
      isNativeTag: df,
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
let Tg = 0;
function Ag(e, t) {
  return function(i, a = null) {
    xe(i) || (i = dt({}, i)), a != null && !We(a) && (a = null);
    const r = ah(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: Tg++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Qg,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return s.has(u) || (u && xe(u.install) ? (s.add(u), u.install(d, ...h)) : xe(u) && (s.add(u), u(d, ...h))), d;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), d;
      },
      component(u, h) {
        return h ? (r.components[u] = h, d) : r.components[u];
      },
      directive(u, h) {
        return h ? (r.directives[u] = h, d) : r.directives[u];
      },
      mount(u, h, w) {
        if (!l) {
          const T = d._ceVNode || be(i, a);
          return T.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(T, u, w), l = !0, d._container = u, u.__vue_app__ = d, tl(T.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (_n(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = ja;
        ja = d;
        try {
          return u();
        } finally {
          ja = h;
        }
      }
    };
    return d;
  };
}
let ja = null;
function rh(e, t, n = je) {
  const i = pa(), a = Ft(t), r = gi(t), s = sh(e, a), o = zv((l, d) => {
    let u, h = je, w;
    return Jv(() => {
      const T = e[a];
      Tt(u, T) && (u = T, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(T) {
        const O = n.set ? n.set(T) : T;
        if (!Tt(O, u) && !(h !== je && Tt(T, h)))
          return;
        const A = i.vnode.props, x = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        x || (u = T, d()), i.emit(`update:${t}`, O), Tt(T, h) && (Tt(T, O) && !Tt(O, w) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        x && h !== je && !Tt(O, u)) && d(), h = T, w = O;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || je : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const sh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ft(t)}Modifiers`] || e[`${gi(t)}Modifiers`];
function kg(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || je;
  let a = n;
  const r = t.startsWith("update:"), s = r && sh(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => tt(u) ? u.trim() : u)), s.number && (a = a.map(Vo)));
  let o, l = i[o = pl(t)] || // also try camelCase event handler (#2249)
  i[o = pl(Ft(t))];
  !l && r && (l = i[o = pl(gi(t))]), l && _n(
    l,
    e,
    6,
    a
  );
  const d = i[o + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, _n(
      d,
      e,
      6,
      a
    );
  }
}
const Og = /* @__PURE__ */ new WeakMap();
function oh(e, t, n = !1) {
  const i = n ? Og : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!xe(e)) {
    const l = (d) => {
      const u = oh(d, t, !0);
      u && (o = !0, dt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (We(e) && i.set(e, null), null) : (_e(r) ? r.forEach((l) => s[l] = null) : dt(s, r), We(e) && i.set(e, s), s);
}
function el(e, t) {
  return !e || !Uo(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ke(e, t[0].toLowerCase() + t.slice(1)) || Ke(e, gi(t)) || Ke(e, t));
}
function Iu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: s,
    attrs: o,
    emit: l,
    render: d,
    renderCache: u,
    props: h,
    data: w,
    setupState: T,
    ctx: O,
    inheritAttrs: A
  } = e, x = Bs(e);
  let L, M;
  try {
    if (n.shapeFlag & 4) {
      const F = a || i, le = F;
      L = Bn(
        d.call(
          le,
          F,
          u,
          h,
          T,
          w,
          O
        )
      ), M = o;
    } else {
      const F = t;
      L = Bn(
        F.length > 1 ? F(
          h,
          { attrs: o, slots: s, emit: l }
        ) : F(
          h,
          null
        )
      ), M = t.props ? o : Ng(o);
    }
  } catch (F) {
    ui.length = 0, qo(F, e, 1), L = be(At);
  }
  let G = L;
  if (M && A !== !1) {
    const F = Object.keys(M), { shapeFlag: le } = G;
    F.length && le & 7 && (r && F.some(Bo) && (M = xg(
      M,
      r
    )), G = Fi(G, M, !1, !0));
  }
  if (n.dirs && (G = Fi(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = Zo(G.type) && Hs(G) || G;
    qr(F, n.transition);
  }
  return L = G, Bs(x), L;
}
const Ng = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Uo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xg = (e, t) => {
  const n = {};
  for (const i in e)
    (!Bo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Lg(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Pu(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const w = u[h];
        if (lh(s, i, w) && !el(d, w))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? Pu(i, s, d) : !0 : !!s;
  return !1;
}
function Pu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (lh(t, e, r) && !el(n, r))
      return !0;
  }
  return !1;
}
function lh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && We(i) && We(a) ? !$i(i, a) : i !== a;
}
function Rg({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const ch = {}, uh = () => Object.create(ch), dh = (e) => Object.getPrototypeOf(e) === ch;
function Ig(e, t, n, i = !1) {
  const a = {}, r = uh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Pv(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Pg(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ Ve(a), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let w = u[h];
        if (el(e.emitsOptions, w))
          continue;
        const T = t[w];
        if (l)
          if (Ke(r, w))
            T !== r[w] && (r[w] = T, d = !0);
          else {
            const O = Ft(w);
            a[O] = lc(
              l,
              o,
              O,
              T,
              e,
              !1
            );
          }
        else
          T !== r[w] && (r[w] = T, d = !0);
      }
    }
  } else {
    fh(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !Ke(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = gi(h)) === h || !Ke(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = lc(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !Ke(t, h)) && (delete r[h], d = !0);
  }
  d && ri(e.attrs, "set", "");
}
function fh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Or(l))
        continue;
      const d = t[l];
      let u;
      a && Ke(a, u = Ft(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : el(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Ve(n), d = o || je;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = lc(
        a,
        l,
        h,
        d[h],
        e,
        !Ke(d, h)
      );
    }
  }
  return s;
}
function lc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Ke(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && xe(l)) {
        const { propsDefaults: d } = a;
        if (n in d)
          i = d[n];
        else {
          const u = fs(a);
          i = d[n] = l.call(
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
    ] && (i === "" || i === gi(n)) && (i = !0));
  }
  return i;
}
const Dg = /* @__PURE__ */ new WeakMap();
function hh(e, t, n = !1) {
  const i = n ? Dg : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!xe(e)) {
    const u = (h) => {
      l = !0;
      const [w, T] = hh(h, t, !0);
      dt(s, w), T && o.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return We(e) && i.set(e, Ua), Ua;
  if (_e(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ft(r[u]);
      Du(h) && (s[h] = je);
    }
  else if (r)
    for (const u in r) {
      const h = Ft(u);
      if (Du(h)) {
        const w = r[u], T = s[h] = _e(w) || xe(w) ? { type: w } : dt({}, w), O = T.type;
        let A = !1, x = !0;
        if (_e(O))
          for (let L = 0; L < O.length; ++L) {
            const M = O[L], G = xe(M) && M.name;
            if (G === "Boolean") {
              A = !0;
              break;
            } else G === "String" && (x = !1);
          }
        else
          A = xe(O) && O.name === "Boolean";
        T[
          0
          /* shouldCast */
        ] = A, T[
          1
          /* shouldCastTrue */
        ] = x, (A || Ke(T, "default")) && o.push(h);
      }
    }
  const d = [s, o];
  return We(e) && i.set(e, d), d;
}
function Du(e) {
  return e[0] !== "$" && !Or(e);
}
const Vc = (e) => e === "_" || e === "_ctx" || e === "$stable", Gc = (e) => _e(e) ? e.map(Bn) : [Bn(e)], Mg = (e, t, n) => {
  if (t._n)
    return t;
  const i = Ae((...a) => Gc(t(...a)), n);
  return i._c = !1, i;
}, ph = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Vc(a)) continue;
    const r = e[a];
    if (xe(r))
      t[a] = Mg(a, r, i);
    else if (r != null) {
      const s = Gc(r);
      t[a] = () => s;
    }
  }
}, vh = (e, t) => {
  const n = Gc(t);
  e.slots.default = () => n;
}, gh = (e, t, n) => {
  for (const i in t)
    (n || !Vc(i)) && (e[i] = t[i]);
}, $g = (e, t, n) => {
  const i = e.slots = uh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (gh(i, t, n), n && vf(i, "_", a, !0)) : ph(t, i);
  } else t && vh(e, t);
}, Fg = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = je;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : gh(a, t, n) : (r = !t.$stable, ph(t, a)), s = t;
  } else t && (vh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !Vc(o) && s[o] == null && delete a[o];
}, Kt = jg;
function zg(e) {
  return Ug(e);
}
function Ug(e, t) {
  const n = Go();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: s,
    createText: o,
    createComment: l,
    setText: d,
    setElementText: u,
    parentNode: h,
    nextSibling: w,
    setScopeId: T = bn,
    insertStaticContent: O
  } = e, A = (v, _, k, I = null, N = null, z = null, W = void 0, K = null, J = !!_.dynamicChildren) => {
    if (v === _)
      return;
    v && !ia(v, _) && (I = ot(v), me(v, N, z, !0), v = null), _.patchFlag === -2 && (J = !1, _.dynamicChildren = null);
    const { type: V, ref: ye, shapeFlag: re } = _;
    switch (V) {
      case ds:
        x(v, _, k, I);
        break;
      case At:
        L(v, _, k, I);
        break;
      case Ps:
        v == null && M(_, k, I, W);
        break;
      case ue:
        Z(
          v,
          _,
          k,
          I,
          N,
          z,
          W,
          K,
          J
        );
        break;
      default:
        re & 1 ? le(
          v,
          _,
          k,
          I,
          N,
          z,
          W,
          K,
          J
        ) : re & 6 ? ie(
          v,
          _,
          k,
          I,
          N,
          z,
          W,
          K,
          J
        ) : (re & 64 || re & 128) && V.process(
          v,
          _,
          k,
          I,
          N,
          z,
          W,
          K,
          J,
          Jt
        );
    }
    ye != null && N ? Lr(ye, v && v.ref, z, _ || v, !_) : ye == null && v && v.ref != null && Lr(v.ref, null, z, v, !0);
  }, x = (v, _, k, I) => {
    if (v == null)
      i(
        _.el = o(_.children),
        k,
        I
      );
    else {
      const N = _.el = v.el;
      _.children !== v.children && d(N, _.children);
    }
  }, L = (v, _, k, I) => {
    v == null ? i(
      _.el = l(_.children || ""),
      k,
      I
    ) : _.el = v.el;
  }, M = (v, _, k, I) => {
    [v.el, v.anchor] = O(
      v.children,
      _,
      k,
      I,
      v.el,
      v.anchor
    );
  }, G = ({ el: v, anchor: _ }, k, I) => {
    let N;
    for (; v && v !== _; )
      N = w(v), i(v, k, I), v = N;
    i(_, k, I);
  }, F = ({ el: v, anchor: _ }) => {
    let k;
    for (; v && v !== _; )
      k = w(v), a(v), v = k;
    a(_);
  }, le = (v, _, k, I, N, z, W, K, J) => {
    if (_.type === "svg" ? W = "svg" : _.type === "math" && (W = "mathml"), v == null)
      fe(
        _,
        k,
        I,
        N,
        z,
        W,
        K,
        J
      );
    else {
      const V = v.el && v.el._isVueCE ? v.el : null;
      try {
        V && V._beginPatch(), P(
          v,
          _,
          N,
          z,
          W,
          K,
          J
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, fe = (v, _, k, I, N, z, W, K) => {
    let J, V;
    const { props: ye, shapeFlag: re, transition: pe, dirs: Ce } = v;
    if (J = v.el = s(
      v.type,
      z,
      ye && ye.is,
      ye
    ), re & 8 ? u(J, v.children) : re & 16 && ne(
      v.children,
      J,
      null,
      I,
      N,
      wl(v, z),
      W,
      K
    ), Ce && qi(v, null, I, "created"), ee(J, v, v.scopeId, W, I), ye) {
      for (const De in ye)
        De !== "value" && !Or(De) && r(J, De, null, ye[De], z, I);
      "value" in ye && r(J, "value", null, ye.value, z), (V = ye.onVnodeBeforeMount) && Dn(V, I, v);
    }
    Ce && qi(v, null, I, "beforeMount");
    const Ne = Bg(N, pe);
    Ne && pe.beforeEnter(J), i(J, _, k), ((V = ye && ye.onVnodeMounted) || Ne || Ce) && Kt(() => {
      V && Dn(V, I, v), Ne && pe.enter(J), Ce && qi(v, null, I, "mounted");
    }, N);
  }, ee = (v, _, k, I, N) => {
    if (k && T(v, k), I)
      for (let z = 0; z < I.length; z++)
        T(v, I[z]);
    if (N) {
      let z = N.subTree;
      if (_ === z || yh(z.type) && (z.ssContent === _ || z.ssFallback === _)) {
        const W = N.vnode;
        ee(
          v,
          W,
          W.scopeId,
          W.slotScopeIds,
          N.parent
        );
      }
    }
  }, ne = (v, _, k, I, N, z, W, K, J = 0) => {
    for (let V = J; V < v.length; V++) {
      const ye = v[V] = K ? ai(v[V]) : Bn(v[V]);
      A(
        null,
        ye,
        _,
        k,
        I,
        N,
        z,
        W,
        K
      );
    }
  }, P = (v, _, k, I, N, z, W) => {
    const K = _.el = v.el;
    let { patchFlag: J, dynamicChildren: V, dirs: ye } = _;
    J |= v.patchFlag & 16;
    const re = v.props || je, pe = _.props || je;
    let Ce;
    if (k && Yi(k, !1), (Ce = pe.onVnodeBeforeUpdate) && Dn(Ce, k, _, v), ye && qi(_, v, k, "beforeUpdate"), k && Yi(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!v.dynamicChildren || v.dynamicChildren.length !== V.length) && (J = 0, W = !1, V = null), (re.innerHTML && pe.innerHTML == null || re.textContent && pe.textContent == null) && u(K, ""), V ? ae(
      v.dynamicChildren,
      V,
      K,
      k,
      I,
      wl(_, N),
      z
    ) : W || te(
      v,
      _,
      K,
      null,
      k,
      I,
      wl(_, N),
      z,
      !1
    ), J > 0) {
      if (J & 16)
        he(K, re, pe, k, N);
      else if (J & 2 && re.class !== pe.class && r(K, "class", null, pe.class, N), J & 4 && r(K, "style", re.style, pe.style, N), J & 8) {
        const Ne = _.dynamicProps;
        for (let De = 0; De < Ne.length; De++) {
          const Me = Ne[De], Ze = re[Me], nt = pe[Me];
          (nt !== Ze || Me === "value") && r(K, Me, Ze, nt, N, k);
        }
      }
      J & 1 && v.children !== _.children && u(K, _.children);
    } else !W && V == null && he(K, re, pe, k, N);
    ((Ce = pe.onVnodeUpdated) || ye) && Kt(() => {
      Ce && Dn(Ce, k, _, v), ye && qi(_, v, k, "updated");
    }, I);
  }, ae = (v, _, k, I, N, z, W) => {
    for (let K = 0; K < _.length; K++) {
      const J = v[K], V = _[K], ye = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        J.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (J.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ia(J, V) || // - In the case of a component, it could contain anything.
        J.shapeFlag & 198) ? h(J.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        J,
        V,
        ye,
        null,
        I,
        N,
        z,
        W,
        !0
      );
    }
  }, he = (v, _, k, I, N) => {
    if (_ !== k) {
      if (_ !== je)
        for (const z in _)
          !Or(z) && !(z in k) && r(
            v,
            z,
            _[z],
            null,
            N,
            I
          );
      for (const z in k) {
        if (Or(z)) continue;
        const W = k[z], K = _[z];
        W !== K && z !== "value" && r(v, z, K, W, N, I);
      }
      "value" in k && r(v, "value", _.value, k.value, N);
    }
  }, Z = (v, _, k, I, N, z, W, K, J) => {
    const V = _.el = v ? v.el : o(""), ye = _.anchor = v ? v.anchor : o("");
    let { patchFlag: re, dynamicChildren: pe, slotScopeIds: Ce } = _;
    Ce && (K = K ? K.concat(Ce) : Ce), v == null ? (i(V, k, I), i(ye, k, I), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      k,
      ye,
      N,
      z,
      W,
      K,
      J
    )) : re > 0 && re & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === pe.length ? (ae(
      v.dynamicChildren,
      pe,
      k,
      N,
      z,
      W,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || N && _ === N.subTree) && Kc(
      v,
      _,
      !0
      /* shallow */
    )) : te(
      v,
      _,
      k,
      ye,
      N,
      z,
      W,
      K,
      J
    );
  }, ie = (v, _, k, I, N, z, W, K, J) => {
    _.slotScopeIds = K, v == null ? _.shapeFlag & 512 ? N.ctx.activate(
      _,
      k,
      I,
      W,
      J
    ) : D(
      _,
      k,
      I,
      N,
      z,
      W,
      J
    ) : $(v, _, J);
  }, D = (v, _, k, I, N, z, W) => {
    const K = v.component = Wg(
      v,
      I,
      N
    );
    if (Jo(v) && (K.ctx.renderer = Jt), qg(K, !1, W), K.asyncDep) {
      if (N && N.registerDep(K, Y, W), !v.el) {
        const J = K.subTree = be(At);
        L(null, J, _, k), v.placeholder = J.el;
      }
    } else
      Y(
        K,
        v,
        _,
        k,
        N,
        z,
        W
      );
  }, $ = (v, _, k) => {
    const I = _.component = v.component;
    if (Lg(v, _, k))
      if (I.asyncDep && !I.asyncResolved) {
        se(I, _, k);
        return;
      } else
        I.next = _, I.update();
    else
      _.el = v.el, I.vnode = _;
  }, Y = (v, _, k, I, N, z, W) => {
    const K = () => {
      if (v.isMounted) {
        let { next: re, bu: pe, u: Ce, parent: Ne, vnode: De } = v;
        {
          const vt = mh(v);
          if (vt) {
            re && (re.el = De.el, se(v, re, W)), vt.asyncDep.then(() => {
              Kt(() => {
                v.isUnmounted || V();
              }, N);
            });
            return;
          }
        }
        let Me = re, Ze;
        Yi(v, !1), re ? (re.el = De.el, se(v, re, W)) : re = De, pe && Is(pe), (Ze = re.props && re.props.onVnodeBeforeUpdate) && Dn(Ze, Ne, re, De), Yi(v, !0);
        const nt = Iu(v), wt = v.subTree;
        v.subTree = nt, A(
          wt,
          nt,
          // parent may have changed if it's in a teleport
          h(wt.el),
          // anchor may have changed if it's in a fragment
          ot(wt),
          v,
          N,
          z
        ), re.el = nt.el, Me === null && Rg(v, nt.el), Ce && Kt(Ce, N), (Ze = re.props && re.props.onVnodeUpdated) && Kt(
          () => Dn(Ze, Ne, re, De),
          N
        );
      } else {
        let re;
        const { el: pe, props: Ce } = _, { bm: Ne, m: De, parent: Me, root: Ze, type: nt } = v, wt = Ha(_);
        Yi(v, !1), Ne && Is(Ne), !wt && (re = Ce && Ce.onVnodeBeforeMount) && Dn(re, Me, _), Yi(v, !0);
        {
          Ze.ce && Ze.ce._hasShadowRoot() && Ze.ce._injectChildStyle(
            nt,
            v.parent ? v.parent.type : void 0
          );
          const vt = v.subTree = Iu(v);
          A(
            null,
            vt,
            k,
            I,
            v,
            N,
            z
          ), _.el = vt.el;
        }
        if (De && Kt(De, N), !wt && (re = Ce && Ce.onVnodeMounted)) {
          const vt = _;
          Kt(
            () => Dn(re, Me, vt),
            N
          );
        }
        (_.shapeFlag & 256 || Me && Ha(Me.vnode) && Me.vnode.shapeFlag & 256) && v.a && Kt(v.a, N), v.isMounted = !0, _ = k = I = null;
      }
    };
    v.scope.on();
    const J = v.effect = new yf(K);
    v.scope.off();
    const V = v.update = J.run.bind(J), ye = v.job = J.runIfDirty.bind(J);
    ye.i = v, ye.id = v.uid, J.scheduler = () => Uc(ye), Yi(v, !0), V();
  }, se = (v, _, k) => {
    _.component = v;
    const I = v.vnode.props;
    v.vnode = _, v.next = null, Pg(v, _.props, I, k), Fg(v, _.children, k), fi(), Su(v), hi();
  }, te = (v, _, k, I, N, z, W, K, J = !1) => {
    const V = v && v.children, ye = v ? v.shapeFlag : 0, re = _.children, { patchFlag: pe, shapeFlag: Ce } = _;
    if (pe > 0) {
      if (pe & 128) {
        de(
          V,
          re,
          k,
          I,
          N,
          z,
          W,
          K,
          J
        );
        return;
      } else if (pe & 256) {
        ce(
          V,
          re,
          k,
          I,
          N,
          z,
          W,
          K,
          J
        );
        return;
      }
    }
    Ce & 8 ? (ye & 16 && ct(V, N, z), re !== V && u(k, re)) : ye & 16 ? Ce & 16 ? de(
      V,
      re,
      k,
      I,
      N,
      z,
      W,
      K,
      J
    ) : ct(V, N, z, !0) : (ye & 8 && u(k, ""), Ce & 16 && ne(
      re,
      k,
      I,
      N,
      z,
      W,
      K,
      J
    ));
  }, ce = (v, _, k, I, N, z, W, K, J) => {
    v = v || Ua, _ = _ || Ua;
    const V = v.length, ye = _.length, re = Math.min(V, ye);
    let pe;
    for (pe = 0; pe < re; pe++) {
      const Ce = _[pe] = J ? ai(_[pe]) : Bn(_[pe]);
      A(
        v[pe],
        Ce,
        k,
        null,
        N,
        z,
        W,
        K,
        J
      );
    }
    V > ye ? ct(
      v,
      N,
      z,
      !0,
      !1,
      re
    ) : ne(
      _,
      k,
      I,
      N,
      z,
      W,
      K,
      J,
      re
    );
  }, de = (v, _, k, I, N, z, W, K, J) => {
    let V = 0;
    const ye = _.length;
    let re = v.length - 1, pe = ye - 1;
    for (; V <= re && V <= pe; ) {
      const Ce = v[V], Ne = _[V] = J ? ai(_[V]) : Bn(_[V]);
      if (ia(Ce, Ne))
        A(
          Ce,
          Ne,
          k,
          null,
          N,
          z,
          W,
          K,
          J
        );
      else
        break;
      V++;
    }
    for (; V <= re && V <= pe; ) {
      const Ce = v[re], Ne = _[pe] = J ? ai(_[pe]) : Bn(_[pe]);
      if (ia(Ce, Ne))
        A(
          Ce,
          Ne,
          k,
          null,
          N,
          z,
          W,
          K,
          J
        );
      else
        break;
      re--, pe--;
    }
    if (V > re) {
      if (V <= pe) {
        const Ce = pe + 1, Ne = Ce < ye ? _[Ce].el : I;
        for (; V <= pe; )
          A(
            null,
            _[V] = J ? ai(_[V]) : Bn(_[V]),
            k,
            Ne,
            N,
            z,
            W,
            K,
            J
          ), V++;
      }
    } else if (V > pe)
      for (; V <= re; )
        me(v[V], N, z, !0), V++;
    else {
      const Ce = V, Ne = V, De = /* @__PURE__ */ new Map();
      for (V = Ne; V <= pe; V++) {
        const lt = _[V] = J ? ai(_[V]) : Bn(_[V]);
        lt.key != null && De.set(lt.key, V);
      }
      let Me, Ze = 0;
      const nt = pe - Ne + 1;
      let wt = !1, vt = 0;
      const xt = new Array(nt);
      for (V = 0; V < nt; V++) xt[V] = 0;
      for (V = Ce; V <= re; V++) {
        const lt = v[V];
        if (Ze >= nt) {
          me(lt, N, z, !0);
          continue;
        }
        let Lt;
        if (lt.key != null)
          Lt = De.get(lt.key);
        else
          for (Me = Ne; Me <= pe; Me++)
            if (xt[Me - Ne] === 0 && ia(lt, _[Me])) {
              Lt = Me;
              break;
            }
        Lt === void 0 ? me(lt, N, z, !0) : (xt[Lt - Ne] = V + 1, Lt >= vt ? vt = Lt : wt = !0, A(
          lt,
          _[Lt],
          k,
          null,
          N,
          z,
          W,
          K,
          J
        ), Ze++);
      }
      const xn = wt ? Hg(xt) : Ua;
      for (Me = xn.length - 1, V = nt - 1; V >= 0; V--) {
        const lt = Ne + V, Lt = _[lt], bi = _[lt + 1], yi = lt + 1 < ye ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          bi.el || bh(bi)
        ) : I;
        xt[V] === 0 ? A(
          null,
          Lt,
          k,
          yi,
          N,
          z,
          W,
          K,
          J
        ) : wt && (Me < 0 || V !== xn[Me] ? we(Lt, k, yi, 2) : Me--);
      }
    }
  }, we = (v, _, k, I, N = null) => {
    const { el: z, type: W, transition: K, children: J, shapeFlag: V } = v;
    if (V & 6) {
      we(v.component.subTree, _, k, I);
      return;
    }
    if (V & 128) {
      v.suspense.move(_, k, I);
      return;
    }
    if (V & 64) {
      W.move(v, _, k, Jt);
      return;
    }
    if (W === ue) {
      i(z, _, k);
      for (let re = 0; re < J.length; re++)
        we(J[re], _, k, I);
      i(v.anchor, _, k);
      return;
    }
    if (W === Ps) {
      G(v, _, k);
      return;
    }
    if (I !== 2 && V & 1 && K)
      if (I === 0)
        K.persisted && !z[gn] ? i(z, _, k) : (K.beforeEnter(z), i(z, _, k), Kt(() => K.enter(z), N));
      else {
        const { leave: re, delayLeave: pe, afterLeave: Ce } = K, Ne = () => {
          v.ctx.isUnmounted ? a(z) : i(z, _, k);
        }, De = () => {
          const Me = z._isLeaving || !!z[gn];
          z._isLeaving && z[gn](
            !0
            /* cancelled */
          ), K.persisted && !Me ? Ne() : re(z, () => {
            Ne(), Ce && Ce();
          });
        };
        pe ? pe(z, Ne, De) : De();
      }
    else
      i(z, _, k);
  }, me = (v, _, k, I = !1, N = !1) => {
    const {
      type: z,
      props: W,
      ref: K,
      children: J,
      dynamicChildren: V,
      shapeFlag: ye,
      patchFlag: re,
      dirs: pe,
      cacheIndex: Ce,
      memo: Ne
    } = v;
    if (re === -2 && (N = !1), K != null && (fi(), Lr(K, null, k, v, !0), hi()), Ce != null && (_.renderCache[Ce] = void 0), ye & 256) {
      _.ctx.deactivate(v);
      return;
    }
    const De = ye & 1 && pe, Me = !Ha(v);
    let Ze;
    if (Me && (Ze = W && W.onVnodeBeforeUnmount) && Dn(Ze, _, v), ye & 6)
      rt(v.component, k, I);
    else {
      if (ye & 128) {
        v.suspense.unmount(k, I);
        return;
      }
      De && qi(v, null, _, "beforeUnmount"), ye & 64 ? v.type.remove(
        v,
        _,
        k,
        Jt,
        I
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== ue || re > 0 && re & 64) ? ct(
        V,
        _,
        k,
        !1,
        !0
      ) : (z === ue && re & 384 || !N && ye & 16) && ct(J, _, k), I && Pe(v);
    }
    const nt = Ne != null && Ce == null;
    (Me && (Ze = W && W.onVnodeUnmounted) || De || nt) && Kt(() => {
      Ze && Dn(Ze, _, v), De && qi(v, null, _, "unmounted"), nt && (v.el = null);
    }, k);
  }, Pe = (v) => {
    const { type: _, el: k, anchor: I, transition: N } = v;
    if (_ === ue) {
      Oe(k, I);
      return;
    }
    if (_ === Ps) {
      F(v);
      return;
    }
    const z = () => {
      a(k), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (v.shapeFlag & 1 && N && !N.persisted) {
      const { leave: W, delayLeave: K } = N, J = () => W(k, z);
      K ? K(v.el, z, J) : J();
    } else
      z();
  }, Oe = (v, _) => {
    let k;
    for (; v !== _; )
      k = w(v), a(v), v = k;
    a(_);
  }, rt = (v, _, k) => {
    const { bum: I, scope: N, job: z, subTree: W, um: K, m: J, a: V } = v;
    Mu(J), Mu(V), I && Is(I), N.stop(), z && (z.flags |= 8, me(W, v, _, k)), K && Kt(K, _), Kt(() => {
      v.isUnmounted = !0;
    }, _);
  }, ct = (v, _, k, I = !1, N = !1, z = 0) => {
    for (let W = z; W < v.length; W++)
      me(v[W], _, k, I, N);
  }, ot = (v) => {
    if (v.shapeFlag & 6)
      return ot(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const _ = w(v.anchor || v.el), k = _ && _[Hf];
    return k ? w(k) : _;
  };
  let Nt = !1;
  const Je = (v, _, k) => {
    let I;
    v == null ? _._vnode && (me(_._vnode, null, null, !0), I = _._vnode.component) : A(
      _._vnode || null,
      v,
      _,
      null,
      null,
      null,
      k
    ), _._vnode = v, Nt || (Nt = !0, Su(I), zf(), Nt = !1);
  }, Jt = {
    p: A,
    um: me,
    m: we,
    r: Pe,
    mt: D,
    mc: ne,
    pc: te,
    pbc: ae,
    n: ot,
    o: e
  };
  return {
    render: Je,
    hydrate: void 0,
    createApp: Ag(Je)
  };
}
function wl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Yi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Bg(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Kc(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (_e(i) && _e(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = ai(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && Kc(s, o)), o.type === ds && (o.patchFlag === -1 && (o = a[r] = ai(o)), o.el = s.el), o.type === At && !o.el && (o.el = s.el);
    }
}
function Hg(e) {
  const t = e.slice(), n = [0];
  let i, a, r, s, o;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const d = e[i];
    if (d !== 0) {
      if (a = n[n.length - 1], e[a] < d) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        o = r + s >> 1, e[n[o]] < d ? r = o + 1 : s = o;
      d < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function mh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mh(t);
}
function Mu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function bh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? bh(t.subTree) : null;
}
const yh = (e) => e.__isSuspense;
function jg(e, t) {
  t && t.pendingBranch ? _e(e) ? t.effects.push(...e) : t.effects.push(e) : Ff(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), ds = /* @__PURE__ */ Symbol.for("v-txt"), At = /* @__PURE__ */ Symbol.for("v-cmt"), Ps = /* @__PURE__ */ Symbol.for("v-stc"), ui = [];
let sn = null;
function y(e = !1) {
  ui.push(sn = e ? null : []);
}
function Wc() {
  ui.pop(), sn = ui[ui.length - 1] || null;
}
let Yr = 1;
function Ks(e, t = !1) {
  Yr += e, e < 0 && sn && t && (sn.hasOnce = !0);
}
function _h(e) {
  return e.dynamicChildren = Yr > 0 ? sn || Ua : null, Wc(), Yr > 0 && sn && sn.push(e), e;
}
function E(e, t, n, i, a, r) {
  return _h(
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
  return _h(
    be(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Xr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ia(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wh = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? tt(e) || /* @__PURE__ */ zt(e) || xe(e) ? { i: kt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === ue ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wh(t),
    ref: t && Ds(t),
    scopeId: Yo,
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
    ctx: kt
  };
  return o ? (Ws(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= tt(n) ? 8 : 16), Yr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  sn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && sn.push(l), l;
}
const be = Vg;
function Vg(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Qf) && (e = At), Xr(e)) {
    const o = Fi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ws(o, n), Yr > 0 && !r && sn && (o.shapeFlag & 6 ? sn[sn.indexOf(e)] = o : sn.push(o)), o.patchFlag = -2, o;
  }
  if (Jg(e) && (e = e.__vccOpts), t) {
    t = Zr(t);
    let { class: o, style: l } = t;
    o && !tt(o) && (t.class = Ee(o)), We(l) && (/* @__PURE__ */ zc(l) && !_e(l) && (l = dt({}, l)), t.style = on(l));
  }
  const s = tt(e) ? 1 : yh(e) ? 128 : Zo(e) ? 64 : We(e) ? 4 : xe(e) ? 2 : 0;
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
function Zr(e) {
  return e ? /* @__PURE__ */ zc(e) || dh(e) ? dt({}, e) : e : null;
}
function Fi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? Bt(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && wh(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? _e(r) ? r.concat(Ds(t)) : [r, Ds(t)] : Ds(t)
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
    patchFlag: t && e.type !== ue ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Fi(e.ssContent),
    ssFallback: e.ssFallback && Fi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && qr(
    u,
    l.clone(u)
  ), u;
}
function ke(e = " ", t = 0) {
  return be(ds, null, e, t);
}
function H(e = "", t = !1) {
  return t ? (y(), Fe(At, null, e)) : be(At, null, e);
}
function Bn(e) {
  return e == null || typeof e == "boolean" ? be(At) : _e(e) ? be(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xr(e) ? ai(e) : be(ds, null, String(e));
}
function ai(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Fi(e);
}
function Ws(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (_e(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Ws(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !dh(t) ? t._ctx = kt : a === 3 && kt && (kt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (xe(t)) {
    if (i & 65) {
      Ws(e, { default: t });
      return;
    }
    t = { default: t, _ctx: kt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [ke(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Bt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ee([t.class, i.class]));
      else if (a === "style")
        t.style = on([t.style, i.style]);
      else if (Uo(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(_e(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Bo(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Dn(e, t, n, i = null) {
  _n(e, t, 7, [
    n,
    i
  ]);
}
const Gg = ah();
let Kg = 0;
function Wg(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Gg, r = {
    uid: Kg++,
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
    scope: new vv(
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
    propsOptions: hh(i, a),
    emitsOptions: oh(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: je,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: je,
    data: je,
    props: je,
    attrs: je,
    slots: je,
    refs: je,
    setupState: je,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = kg.bind(null, r), e.ce && e.ce(r), r;
}
let $t = null;
const pa = () => $t || kt;
let qs, Jr;
{
  const e = Go(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  qs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => $t = n
  ), Jr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Qr = n
  );
}
const fs = (e) => {
  const t = $t;
  return qs(e), e.scope.on(), () => {
    e.scope.off(), qs(t);
  };
}, $u = () => {
  $t && $t.scope.off(), qs(null);
};
function Ch(e) {
  return e.vnode.shapeFlag & 4;
}
let Qr = !1;
function qg(e, t = !1, n = !1) {
  t && Jr(t);
  const { props: i, children: a } = e.vnode, r = Ch(e);
  Ig(e, i, r, t), $g(e, a, n || t);
  const s = r ? Yg(e, t) : void 0;
  return t && Jr(!1), s;
}
function Yg(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gg);
  const { setup: i } = n;
  if (i) {
    fi();
    const a = e.setupContext = i.length > 1 ? Eh(e) : null, r = fs(e), s = cs(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = ff(s);
    if (hi(), r(), (o || e.sp) && !Ha(e) && Yf(e), o) {
      if (s.then($u, $u), t)
        return s.then((l) => {
          Jr(!0);
          try {
            Fu(e, l, t);
          } finally {
            Jr(!1);
          }
        }).catch((l) => {
          qo(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Fu(e, s);
  } else
    Sh(e);
}
function Fu(e, t, n) {
  xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : We(t) && (e.setupState = Df(t)), Sh(e);
}
function Sh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || bn);
  {
    const a = fs(e);
    fi();
    try {
      _g(e);
    } finally {
      hi(), a();
    }
  }
}
const Xg = {
  get(e, t) {
    return Dt(e, "get", ""), e[t];
  }
};
function Eh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xg),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function tl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Df(Dv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Rr)
        return Rr[n](e);
    },
    has(t, n) {
      return n in t || n in Rr;
    }
  })) : e.proxy;
}
function Zg(e, t = !0) {
  return xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Jg(e) {
  return xe(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ Bv(e, t, Qr);
function Xt(e, t, n) {
  try {
    Ks(-1);
    const i = arguments.length;
    return i === 2 ? We(t) && !_e(t) ? Xr(t) ? be(e, null, [t]) : be(e, t) : be(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Xr(n) && (n = [n]), be(e, t, n));
  } finally {
    Ks(1);
  }
}
const Qg = "3.5.42", em = bn;
let cc;
const zu = typeof window < "u" && window.trustedTypes;
if (zu)
  try {
    cc = /* @__PURE__ */ zu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Th = cc ? (e) => cc.createHTML(e) : (e) => e, tm = "http://www.w3.org/2000/svg", nm = "http://www.w3.org/1998/Math/MathML", ii = typeof document < "u" ? document : null, Uu = ii && /* @__PURE__ */ ii.createElement("template"), im = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ii.createElementNS(tm, e) : t === "mathml" ? ii.createElementNS(nm, e) : n ? ii.createElement(e, { is: n }) : ii.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ii.createTextNode(e),
  createComment: (e) => ii.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ii.querySelector(e),
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
      Uu.innerHTML = Th(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Uu.content;
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
}, Ti = "transition", pr = "animation", es = /* @__PURE__ */ Symbol("_vtc"), Ah = {
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
}, am = /* @__PURE__ */ dt(
  {},
  Vf,
  Ah
), rm = (e) => (e.displayName = "Transition", e.props = am, e), sm = /* @__PURE__ */ rm(
  (e, { slots: t }) => Xt(rg, om(e), t)
), Xi = (e, t = []) => {
  _e(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Bu = (e) => e ? _e(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function om(e) {
  const t = {};
  for (const Z in e)
    Z in Ah || (t[Z] = e[Z]);
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
    appearActiveClass: d = s,
    appearToClass: u = o,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: w = `${n}-leave-active`,
    leaveToClass: T = `${n}-leave-to`
  } = e, O = lm(a), A = O && O[0], x = O && O[1], {
    onBeforeEnter: L,
    onEnter: M,
    onEnterCancelled: G,
    onLeave: F,
    onLeaveCancelled: le,
    onBeforeAppear: fe = L,
    onAppear: ee = M,
    onAppearCancelled: ne = G
  } = t, P = (Z, ie, D, $) => {
    Z._enterCancelled = $, Zi(Z, ie ? u : o), Zi(Z, ie ? d : s), D && D();
  }, ae = (Z, ie) => {
    Z._isLeaving = !1, Zi(Z, h), Zi(Z, T), Zi(Z, w), ie && ie();
  }, he = (Z) => (ie, D) => {
    const $ = Z ? ee : M, Y = () => P(ie, Z, D);
    Xi($, [ie, Y]), Hu(() => {
      Zi(ie, Z ? l : r), Jn(ie, Z ? u : o), Bu($) || ju(ie, i, A, Y);
    });
  };
  return dt(t, {
    onBeforeEnter(Z) {
      Xi(L, [Z]), Jn(Z, r), Jn(Z, s);
    },
    onBeforeAppear(Z) {
      Xi(fe, [Z]), Jn(Z, l), Jn(Z, d);
    },
    onEnter: he(!1),
    onAppear: he(!0),
    onLeave(Z, ie) {
      Z._isLeaving = !0;
      const D = () => ae(Z, ie);
      Jn(Z, h), Z._enterCancelled ? (Jn(Z, w), Ku(Z)) : (Ku(Z), Jn(Z, w)), Hu(() => {
        Z._isLeaving && (Zi(Z, h), Jn(Z, T), Bu(F) || ju(Z, i, x, D));
      }), Xi(F, [Z, D]);
    },
    onEnterCancelled(Z) {
      P(Z, !1, void 0, !0), Xi(G, [Z]);
    },
    onAppearCancelled(Z) {
      P(Z, !0, void 0, !0), Xi(ne, [Z]);
    },
    onLeaveCancelled(Z) {
      ae(Z), Xi(le, [Z]);
    }
  });
}
function lm(e) {
  if (e == null)
    return null;
  if (We(e))
    return [Cl(e.enter), Cl(e.leave)];
  {
    const t = Cl(e);
    return [t, t];
  }
}
function Cl(e) {
  return rv(e);
}
function Jn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[es] || (e[es] = /* @__PURE__ */ new Set())).add(t);
}
function Zi(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[es];
  n && (n.delete(t), n.size || (e[es] = void 0));
}
function Hu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let cm = 0;
function ju(e, t, n, i) {
  const a = e._endId = ++cm, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = um(e, t);
  if (!s)
    return i();
  const d = s + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, w), r();
  }, w = (T) => {
    T.target === e && ++u >= l && h();
  };
  setTimeout(() => {
    u < l && h();
  }, o + 1), e.addEventListener(d, w);
}
function um(e, t) {
  const n = window.getComputedStyle(e), i = (O) => (n[O] || "").split(", "), a = i(`${Ti}Delay`), r = i(`${Ti}Duration`), s = Vu(a, r), o = i(`${pr}Delay`), l = i(`${pr}Duration`), d = Vu(o, l);
  let u = null, h = 0, w = 0;
  t === Ti ? s > 0 && (u = Ti, h = s, w = r.length) : t === pr ? d > 0 && (u = pr, h = d, w = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? Ti : pr : null, w = u ? u === Ti ? r.length : l.length : 0);
  const T = u === Ti && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Ti}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: w,
    hasTransform: T
  };
}
function Vu(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Gu(n) + Gu(e[i])));
}
function Gu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ku(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function dm(e, t, n) {
  const i = e[es];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ys = /* @__PURE__ */ Symbol("_vod"), kh = /* @__PURE__ */ Symbol("_vsh"), Va = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ys] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : vr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), vr(e, !0), i.enter(e)) : i.leave(e, () => {
      vr(e, !1);
    }) : vr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    vr(e, t);
  }
};
function vr(e, t) {
  e.style.display = t ? e[Ys] : "none", e[kh] = !t;
}
const Oh = /* @__PURE__ */ Symbol("");
function fm(e) {
  const t = pa();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Xs(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Xs(t.ce, a) : uc(t.subTree, a), n(a);
  };
  Jf(() => {
    Ff(i);
  }), Ui(() => {
    Ut(i, bn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), us(() => a.disconnect());
  });
}
function uc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      uc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Xs(e.el, t);
  else if (e.type === ue)
    e.children.forEach((n) => uc(n, t));
  else if (e.type === Ps) {
    let { el: n, anchor: i } = e;
    for (; n && (Xs(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Xs(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = pv(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Oh] = i;
  }
}
const hm = /(?:^|;)\s*display\s*:/;
function pm(e, t, n) {
  const i = e.style, a = tt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (tt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && Er(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && Er(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? gm(
        e,
        s,
        !tt(t) && t ? t[s] : void 0,
        o
      ) || Er(i, s, o) : Er(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[Oh];
      s && (n += ";" + s), i.cssText = n, r = hm.test(n);
    }
  } else t && e.removeAttribute("style");
  Ys in e && (e[Ys] = r ? i.display : "", e[kh] && (i.display = "none"));
}
const Ss = /\s*!important$/;
function Er(e, t, n) {
  if (_e(n))
    n.forEach((i) => Er(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Ss.test(n) ? e.setProperty(t, n.replace(Ss, ""), "important") : e.setProperty(t, n);
  else {
    const i = vm(e, t);
    Ss.test(n) ? e.setProperty(
      gi(i),
      n.replace(Ss, ""),
      "important"
    ) : e[i] = n;
  }
}
const Wu = ["Webkit", "Moz", "ms"], Sl = {};
function vm(e, t) {
  const n = Sl[t];
  if (n)
    return n;
  let i = Ft(t);
  if (i !== "filter" && i in e)
    return Sl[t] = i;
  i = jo(i);
  for (let a = 0; a < Wu.length; a++) {
    const r = Wu[a] + i;
    if (r in e)
      return Sl[t] = r;
  }
  return t;
}
function gm(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && tt(i) && n === i;
}
const qu = "http://www.w3.org/1999/xlink";
function Yu(e, t, n, i, a, r = dv(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qu, t.slice(6, t.length)) : e.setAttributeNS(qu, t, n) : n == null || r && !gf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : On(n) ? String(n) : n
  );
}
function Xu(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Th(n) : n);
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
    o === "boolean" ? n = gf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function aa(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function mm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Zu = /* @__PURE__ */ Symbol("_vei");
function bm(e, t, n, i, a = null) {
  const r = e[Zu] || (e[Zu] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = wm(t);
    if (i) {
      const d = r[t] = Em(
        i,
        a
      );
      aa(e, o, d, l);
    } else s && (mm(e, o, s, l), r[t] = void 0);
  }
}
const ym = /(Once|Passive|Capture)$/, _m = /^on:?(?:Once|Passive|Capture)$/;
function wm(e) {
  let t, n;
  for (; (n = e.match(ym)) && !_m.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : gi(e.slice(2)), t];
}
let El = 0;
const Cm = /* @__PURE__ */ Promise.resolve(), Sm = () => El || (Cm.then(() => El = 0), El = Date.now());
function Em(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (_e(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const s = a.slice(), o = [i];
      for (let l = 0; l < s.length && !i._stopped; l++) {
        const d = s[l];
        d && _n(
          d,
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
  return n.value = e, n.attached = Sm(), n;
}
const Ju = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tm = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? dm(e, i, s) : t === "style" ? pm(e, n, i) : Uo(t) ? Bo(t) || bm(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Am(e, t, i, s)) ? (Xu(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Yu(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (km(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !tt(i))) ? Xu(e, Ft(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Yu(e, t, i, s));
};
function Am(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ju(t) && xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Ju(t) && tt(n) ? !1 : t in e;
}
function km(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ft(t);
  return Array.isArray(n) ? n.some((a) => Ft(a) === i) : Object.keys(n).some((a) => Ft(a) === i);
}
const Zs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return _e(t) ? (n) => Is(t, n) : t;
};
function Om(e) {
  e.target.composing = !0;
}
function Qu(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const sa = /* @__PURE__ */ Symbol("_assign"), Es = /* @__PURE__ */ Symbol("_initialValue");
function Tl(e, t, n) {
  return t && (e = e.trim()), n && (e = Vo(e)), e;
}
const ti = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[Es] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Es] = e.defaultValue.replace(/\r\n?/g, `
`))), e[sa] = Zs(a);
    const r = i || a.props && a.props.type === "number";
    aa(e, t ? "change" : "input", (s) => {
      s.target.composing || e[sa](Tl(e.value, n, r));
    }), (n || r) && aa(e, "change", () => {
      e.value = Tl(e.value, n, r);
    }), t || (aa(e, "compositionstart", Om), aa(e, "compositionend", Qu), aa(e, "change", Qu));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[Es];
    delete e[Es], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[sa](Tl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[sa] = Zs(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? Vo(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, fn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, aa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Vo(Js(l)) : Js(l)
      ), r = e.multiple, s = r ? fa(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? _e(s) ? a.slice() : a : s
      ];
      try {
        e[sa](s);
      } finally {
        Hn(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[sa] = Zs(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ed(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[sa] = Zs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Nm(t, n[1], n[0])) && ed(e, t);
  }
};
function Nm(e, t, n) {
  if (!n || _e(e)) return $i(e, t);
  if (fa(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function ed(e, t) {
  const n = e.multiple, i = _e(t);
  if (!(n && !i && !fa(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = Js(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = hv(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if ($i(Js(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Js(e) {
  return "_value" in e ? e._value : e.value;
}
const xm = ["ctrl", "shift", "alt", "meta"], Lm = {
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
  exact: (e, t) => xm.some((n) => e[`${n}Key`] && !t.includes(n))
}, Xe = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = Lm[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Rm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Wt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = gi(a.key);
    if (t.some(
      (s) => s === r || Rm[s] === r
    ))
      return e(a);
  }));
}, Im = /* @__PURE__ */ dt({ patchProp: Tm }, im);
let td;
function Pm() {
  return td || (td = zg(Im));
}
const Dm = ((...e) => {
  const t = Pm().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = $m(i);
    if (!a) return;
    const r = t._component;
    !xe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, Mm(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function Mm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function $m(e) {
  return tt(e) ? document.querySelector(e) : e;
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
function nd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Fm(e) {
  if (Array.isArray(e)) return e;
}
function zm(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, s, o = [], l = !0, d = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(l = (i = r.call(n)).done) && (o.push(i.value), o.length !== t); l = !0) ;
    } catch (u) {
      d = !0, a = u;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (d) throw a;
      }
    }
    return o;
  }
}
function Um() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bm(e, t) {
  return Fm(e) || zm(e, t) || Hm(e, t) || Um();
}
function Hm(e, t) {
  if (e) {
    if (typeof e == "string") return nd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? nd(e, t) : void 0;
  }
}
const Nh = Object.entries, id = Object.setPrototypeOf, jm = Object.isFrozen, Vm = Object.getPrototypeOf, Gm = Object.getOwnPropertyDescriptor;
let pt = Object.freeze, _t = Object.seal, Fa = Object.create, xh = typeof Reflect < "u" && Reflect, dc = xh.apply, fc = xh.construct;
pt || (pt = function(t) {
  return t;
});
_t || (_t = function(t) {
  return t;
});
dc || (dc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
fc || (fc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ta = ft(Array.prototype.forEach), Km = ft(Array.prototype.lastIndexOf), ad = ft(Array.prototype.pop), gr = ft(Array.prototype.push), Wm = ft(Array.prototype.splice), Ga = Array.isArray, Tr = ft(String.prototype.toLowerCase), Al = ft(String.prototype.toString), rd = ft(String.prototype.match), mr = ft(String.prototype.replace), sd = ft(String.prototype.indexOf), qm = ft(String.prototype.trim), Ym = ft(Number.prototype.toString), Xm = ft(Boolean.prototype.toString), od = typeof BigInt > "u" ? null : ft(BigInt.prototype.toString), ld = typeof Symbol > "u" ? null : ft(Symbol.prototype.toString), Zt = ft(Object.prototype.hasOwnProperty), br = ft(Object.prototype.toString), Rt = ft(RegExp.prototype.test), Ji = Zm(TypeError);
function ft(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return dc(e, t, i);
  };
}
function Zm(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return fc(e, n);
  };
}
function He(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Tr;
  if (id && id(e, null), !Ga(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (jm(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function Jm(e) {
  for (let t = 0; t < e.length; t++)
    Zt(e, t) || (e[t] = null);
  return e;
}
function an(e) {
  const t = Fa(null);
  for (const i of Nh(e)) {
    var n = Bm(i, 2);
    const a = n[0], r = n[1];
    Zt(e, a) && (Ga(r) ? t[a] = Jm(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = an(r) : t[a] = r);
  }
  return t;
}
function Qm(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Ym(e);
    case "boolean":
      return Xm(e);
    case "bigint":
      return od ? od(e) : "0";
    case "symbol":
      return ld ? ld(e) : "Symbol()";
    case "undefined":
      return br(e);
    case "function":
    case "object": {
      if (e === null)
        return br(e);
      const t = e, n = En(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : br(i);
      }
      return br(e);
    }
    default:
      return br(e);
  }
}
function En(e, t) {
  for (; e !== null; ) {
    const i = Gm(e, t);
    if (i) {
      if (i.get)
        return ft(i.get);
      if (typeof i.value == "function")
        return ft(i.value);
    }
    e = Vm(e);
  }
  function n() {
    return null;
  }
  return n;
}
function eb(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const cd = pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), kl = pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ol = pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), tb = pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Nl = pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), nb = pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ud = pt(["#text"]), dd = pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), xl = pt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), fd = pt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ts = pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ib = _t(/{{[\w\W]*|^[\w\W]*}}/g), ab = _t(/<%[\w\W]*|^[\w\W]*%>/g), rb = _t(/\${[\w\W]*/g), sb = _t(/^data-[\-\w.\u00B7-\uFFFF]+$/), ob = _t(/^aria-[\-\w]+$/), hd = _t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), lb = _t(/^(?:\w+script|data):/i), cb = _t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ub = _t(/^html$/i), db = _t(/^[a-z][.\w]*(-[.\w]+)+$/i), pd = _t(/<[/\w!]/g), vd = _t(/<[/\w]/g), fb = _t(/<\/no(script|embed|frames)/i), hb = _t(/\/>/i), nn = {
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
}, Lh = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], pb = pt(He({}, Lh)), vb = (function() {
  const e = {};
  return ta(Lh, (t) => {
    e[t] = _t(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), pt(e);
})(), gb = function() {
  return typeof window > "u" ? null : window;
}, mb = function(t, n) {
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
}, gd = function() {
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
}, Ai = function(t, n, i, a) {
  return Zt(t, n) && Ga(t[n]) ? He(a.base ? an(a.base) : {}, t[n], a.transform) : i;
}, Ll = function(t, n, i) {
  const a = Zt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? an(a) : i();
};
function Rh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gb();
  const t = (X) => Rh(X);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, w = o.prototype, T = En(w, "cloneNode"), O = En(w, "remove"), A = En(w, "nextSibling"), x = En(w, "childNodes"), L = En(w, "parentNode"), M = En(w, "shadowRoot"), G = En(w, "attributes"), F = s && s.prototype ? En(s.prototype, "nodeType") : null, le = s && s.prototype ? En(s.prototype, "nodeName") : null, fe = s && s.prototype ? En(s.prototype, "ownerDocument") : null, ee = function(b) {
    return F ? F(b) : b.nodeType;
  }, ne = function(b) {
    return le ? le(b) : b.nodeName;
  };
  if (typeof r == "function") {
    const X = n.createElement("template");
    X.content && X.content.ownerDocument && (n = X.content.ownerDocument);
  }
  let P, ae = "", he, Z = !1, ie = 0;
  const D = function() {
    if (ie > 0)
      throw Ji('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $ = function(b) {
    D(), ie++;
    try {
      return P.createHTML(b);
    } finally {
      ie--;
    }
  }, Y = function(b) {
    D(), ie++;
    try {
      return P.createScriptURL(b);
    } finally {
      ie--;
    }
  }, se = function() {
    return Z || (he = mb(h, a), Z = !0), he;
  }, te = n, ce = te.implementation, de = te.createNodeIterator, we = te.createDocumentFragment, me = te.getElementsByTagName, Pe = i.importNode;
  let Oe = gd();
  t.isSupported = typeof Nh == "function" && typeof L == "function" && ce && ce.createHTMLDocument !== void 0;
  const rt = ib, ct = ab, ot = rb, Nt = sb, Je = ob, Jt = lb, U = cb, v = db;
  let _ = hd, k = null;
  const I = He({}, [...cd, ...kl, ...Ol, ...Nl, ...ud]);
  let N = null;
  const z = He({}, [...dd, ...xl, ...fd, ...Ts]);
  let W = Object.seal(Fa(null, {
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
  const V = Object.seal(Fa(null, {
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
  let ye = !0, re = !0, pe = !1, Ce = !0, Ne = !1, De = !0, Me = !1, Ze = !1, nt = null, wt = null, vt = !1, xt = !1, xn = !1, lt = !1, Lt = !0, bi = !1;
  const yi = "user-content-";
  let ga = !0, Xa = !1, _i = {}, Kn = null;
  const Ht = He({}, [
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
  let ps = null;
  const wi = He({}, ["audio", "video", "img", "source", "image", "track"]);
  let vs = null;
  const ji = He({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ma = "http://www.w3.org/1998/Math/MathML", Ci = "http://www.w3.org/2000/svg", jt = "http://www.w3.org/1999/xhtml";
  let Wn = jt, ba = !1, Vi = null;
  const Qt = He({}, [ma, Ci, jt], Al), Gi = pt(["mi", "mo", "mn", "ms", "mtext"]);
  let ya = He({}, Gi);
  const gs = pt(["annotation-xml"]);
  let Za = He({}, gs);
  const cl = He({}, ["title", "style", "font", "a", "script"]);
  let Se = null;
  const qn = ["application/xhtml+xml", "text/html"], Ct = "text/html";
  let Ye = null, gt = null;
  const mt = n.createElement("form"), Ja = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, wn = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (gt && gt === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = an(b), Se = // eslint-disable-next-line unicorn/prefer-includes
    qn.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Ct : b.PARSER_MEDIA_TYPE, Ye = Se === "application/xhtml+xml" ? Al : Tr, k = Ai(b, "ALLOWED_TAGS", I, {
      transform: Ye
    }), N = Ai(b, "ALLOWED_ATTR", z, {
      transform: Ye
    }), Vi = Ai(b, "ALLOWED_NAMESPACES", Qt, {
      transform: Al
    }), vs = Ai(b, "ADD_URI_SAFE_ATTR", ji, {
      transform: Ye,
      base: ji
    }), ps = Ai(b, "ADD_DATA_URI_TAGS", wi, {
      transform: Ye,
      base: wi
    }), Kn = Ai(b, "FORBID_CONTENTS", Ht, {
      transform: Ye
    }), K = Ai(b, "FORBID_TAGS", an({}), {
      transform: Ye
    }), J = Ai(b, "FORBID_ATTR", an({}), {
      transform: Ye
    }), _i = Zt(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? an(b.USE_PROFILES) : b.USE_PROFILES : !1, ye = b.ALLOW_ARIA_ATTR !== !1, re = b.ALLOW_DATA_ATTR !== !1, pe = b.ALLOW_UNKNOWN_PROTOCOLS || !1, Ce = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ne = b.SAFE_FOR_TEMPLATES || !1, De = b.SAFE_FOR_XML !== !1, Me = b.WHOLE_DOCUMENT || !1, xt = b.RETURN_DOM || !1, xn = b.RETURN_DOM_FRAGMENT || !1, lt = b.RETURN_TRUSTED_TYPE || !1, vt = b.FORCE_BODY || !1, Lt = b.SANITIZE_DOM !== !1, bi = b.SANITIZE_NAMED_PROPS || !1, ga = b.KEEP_CONTENT !== !1, Xa = b.IN_PLACE || !1, _ = eb(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : hd, Wn = typeof b.NAMESPACE == "string" ? b.NAMESPACE : jt, ya = Ll(
      b,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => He({}, Gi)
      // Default built-in map
    ), Za = Ll(
      b,
      "HTML_INTEGRATION_POINTS",
      () => He({}, gs)
      // Default built-in map
    );
    const R = Ll(b, "CUSTOM_ELEMENT_HANDLING", () => Fa(null));
    if (W = Fa(null), Zt(R, "tagNameCheck") && Ja(R.tagNameCheck) && (W.tagNameCheck = R.tagNameCheck), Zt(R, "attributeNameCheck") && Ja(R.attributeNameCheck) && (W.attributeNameCheck = R.attributeNameCheck), Zt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), _t(W), Ne && (re = !1), xn && (xt = !0), _i && (k = He({}, ud), N = Fa(null), _i.html === !0 && (He(k, cd), He(N, dd)), _i.svg === !0 && (He(k, kl), He(N, xl), He(N, Ts)), _i.svgFilters === !0 && (He(k, Ol), He(N, xl), He(N, Ts)), _i.mathMl === !0 && (He(k, Nl), He(N, fd), He(N, Ts))), V.tagCheck = null, V.attributeCheck = null, Zt(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? V.tagCheck = b.ADD_TAGS : Ga(b.ADD_TAGS) && (k === I && (k = an(k)), He(k, b.ADD_TAGS, Ye))), Zt(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? V.attributeCheck = b.ADD_ATTR : Ga(b.ADD_ATTR) && (N === z && (N = an(N)), He(N, b.ADD_ATTR, Ye))), Zt(b, "ADD_FORBID_CONTENTS") && Ga(b.ADD_FORBID_CONTENTS) && (Kn === Ht && (Kn = an(Kn)), He(Kn, b.ADD_FORBID_CONTENTS, Ye)), ga && (k["#text"] = !0), Me && He(k, ["html", "head", "body"]), k.table && (He(k, ["tbody"]), delete K.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ji('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ji('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const j = P;
      P = b.TRUSTED_TYPES_POLICY;
      try {
        ae = $("");
      } catch (oe) {
        throw P = j, oe;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? (P = void 0, ae = "") : (P === void 0 && (P = se()), P && typeof ae == "string" && (ae = $("")));
    pt && pt(b), gt = b;
  }, Ln = He({}, [...kl, ...Ol, ...tb]), _a = He({}, [...Nl, ...nb]), Cn = function(b, R, j) {
    return R.namespaceURI === jt ? b === "svg" : R.namespaceURI === ma ? b === "svg" && (j === "annotation-xml" || ya[j]) : !!Ln[b];
  }, wa = function(b, R, j) {
    return R.namespaceURI === jt ? b === "math" : R.namespaceURI === Ci ? b === "math" && Za[j] : !!_a[b];
  }, Qa = function(b, R, j) {
    return R.namespaceURI === Ci && !Za[j] || R.namespaceURI === ma && !ya[j] ? !1 : !_a[b] && (cl[b] || !Ln[b]);
  }, Ki = function(b) {
    let R = L(b);
    (!R || !R.tagName) && (R = {
      namespaceURI: Wn,
      tagName: "template"
    });
    const j = Tr(b.tagName), oe = Tr(R.tagName);
    return Vi[b.namespaceURI] ? b.namespaceURI === Ci ? Cn(j, R, oe) : b.namespaceURI === ma ? wa(j, R, oe) : b.namespaceURI === jt ? Qa(j, R, oe) : !!(Se === "application/xhtml+xml" && Vi[b.namespaceURI]) : !1;
  }, ln = function(b) {
    gr(t.removed, {
      element: b
    });
    try {
      L(b).removeChild(b);
    } catch {
      if (O(b), !L(b))
        throw Ji("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Sn = function(b, R, j) {
    try {
      b.removeAttributeNode(R);
    } catch {
      try {
        b.removeAttribute(j);
      } catch {
      }
    }
  }, Rn = function(b) {
    Sa(b);
    const R = x(b);
    if (R) {
      const oe = [];
      ta(R, (ve) => {
        gr(oe, ve);
      }), ta(oe, (ve) => {
        try {
          O(ve);
        } catch {
        }
      });
    }
    const j = G(b);
    if (j)
      for (let oe = j.length - 1; oe >= 0; --oe) {
        const ve = j[oe], Te = ve && ve.name;
        typeof Te == "string" && Sn(b, ve, Te);
      }
  }, cn = function(b, R, j) {
    if (!j)
      try {
        j = R.getAttributeNode(b);
      } catch {
        j = null;
      }
    gr(t.removed, {
      attribute: j || null,
      from: R
    });
    try {
      j ? R.removeAttributeNode(j) : R.removeAttribute(b);
    } catch {
      try {
        R.removeAttribute(b);
      } catch {
      }
    }
    if (b === "is")
      if (xt || xn)
        try {
          ln(R);
        } catch {
        }
      else
        try {
          R.setAttribute(b, "");
        } catch {
        }
  }, Ca = function(b) {
    const R = G(b);
    if (R)
      for (let j = R.length - 1; j >= 0; --j) {
        const oe = R[j], ve = oe && oe.name;
        typeof ve != "string" || N[Ye(ve)] || Sn(b, oe, ve);
      }
  }, Sa = function(b) {
    const R = [b];
    for (; R.length > 0; ) {
      const j = R.pop();
      ee(j) === nn.element && Ca(j);
      const ve = x(j);
      if (ve)
        for (let Te = ve.length - 1; Te >= 0; --Te)
          R.push(ve[Te]);
    }
  }, ms = function(b, R) {
    return De ? b === "patchsrc" ? !0 : b === "for" && R !== "label" && R !== "output" : !1;
  }, Ea = function(b) {
    if (!De)
      return;
    const R = [b];
    for (; R.length > 0; ) {
      const j = R.pop(), oe = ee(j);
      if (oe === nn.processingInstruction || oe === nn.comment && Rt(vd, j.data)) {
        try {
          O(j);
        } catch {
        }
        continue;
      }
      if (oe === nn.element) {
        const Te = j, ze = Ye(ne(j));
        try {
          Te.hasAttribute && Te.hasAttribute("patchsrc") && Te.removeAttribute("patchsrc"), Te.hasAttribute && Te.hasAttribute("for") && ms("for", ze) && Te.removeAttribute("for");
        } catch {
        }
      }
      const ve = x(j);
      if (ve)
        for (let Te = ve.length - 1; Te >= 0; --Te)
          R.push(ve[Te]);
    }
  }, er = function(b) {
    let R = null, j = null;
    if (vt)
      b = "<remove></remove>" + b;
    else {
      const Te = rd(b, /^[\r\n\t ]+/);
      j = Te && Te[0];
    }
    Se === "application/xhtml+xml" && Wn === jt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const oe = P ? $(b) : b;
    if (Wn === jt)
      try {
        R = new u().parseFromString(oe, Se);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = ce.createDocument(Wn, "template", null);
      try {
        R.documentElement.innerHTML = ba ? ae : oe;
      } catch {
      }
    }
    const ve = R.body || R.documentElement;
    return b && j && ve.insertBefore(n.createTextNode(j), ve.childNodes[0] || null), Wn === jt ? me.call(R, Me ? "html" : "body")[0] : Me ? R.documentElement : ve;
  }, tr = function(b) {
    const R = fe ? fe(b) : b.ownerDocument;
    return de.call(
      R || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Ta = function(b) {
    return b = mr(b, rt, " "), b = mr(b, ct, " "), b = mr(b, ot, " "), b;
  }, nr = function(b) {
    var R;
    b.normalize();
    const j = fe ? fe(b) : b.ownerDocument, oe = de.call(
      j || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ve = oe.nextNode();
    for (; ve; )
      ve.data = Ta(ve.data), ve = oe.nextNode();
    const Te = (R = b.querySelectorAll) === null || R === void 0 ? void 0 : R.call(b, "template");
    Te && ta(Te, (ze) => {
      Vt(ze.content) && nr(ze.content);
    });
  }, Aa = function(b) {
    const R = le ? le(b) : null;
    return typeof R != "string" || Ye(R) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    b.attributes !== G(b) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    b.nodeType !== F(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    b.childNodes !== x(b);
  }, Vt = function(b) {
    if (!F || typeof b != "object" || b === null)
      return !1;
    try {
      return F(b) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, Wi = function(b) {
    if (!F || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof F(b) == "number";
    } catch {
      return !1;
    }
  };
  function Yt(X, b, R) {
    X.length !== 0 && ta(X, (j) => {
      j.call(t, b, R, gt);
    });
  }
  const ka = function(b, R) {
    return !!(De && b.hasChildNodes() && !Wi(b.firstElementChild) && Rt(pd, b.textContent) && Rt(pd, b.innerHTML) || De && b.namespaceURI === jt && pb[R] && (Wi(b.firstElementChild) || typeof b.textContent == "string" && Rt(vb[R], b.textContent)) || b.nodeType === nn.processingInstruction || De && b.nodeType === nn.comment && Rt(vd, b.data));
  }, un = function(b, R) {
    if (b instanceof RegExp)
      return Rt(b, R);
    if (b instanceof Function) {
      for (var j = arguments.length, oe = new Array(j > 2 ? j - 2 : 0), ve = 2; ve < j; ve++)
        oe[ve - 2] = arguments[ve];
      return !!b(R, ...oe);
    }
    return !1;
  }, Yn = function(b, R, j) {
    if (!K[R] && rr(R) && un(W.tagNameCheck, R))
      return !1;
    if (ga && !Kn[R]) {
      const oe = L(b), ve = x(b);
      if (ve && oe) {
        const Te = ve.length;
        for (let ze = Te - 1; ze >= 0; --ze) {
          const Qe = b === j ? T(ve[ze], !0) : ve[ze];
          oe.insertBefore(Qe, A(b));
        }
      }
    }
    return ln(b), !0;
  }, ir = function(b, R, j, oe) {
    return b.length === 0 ? R : R === j || R === oe ? an(R) : R;
  }, ar = function(b, R) {
    return b === R || L(b) !== null ? !1 : (Xa && Sa(b), !0);
  }, Si = function(b, R) {
    if (Yt(Oe.beforeSanitizeElements, b, null), ar(b, R))
      return !0;
    if (Aa(b))
      return ln(b), !0;
    const j = Ye(ne(b));
    if (k = ir(Oe.uponSanitizeElement, k, I, nt), Yt(Oe.uponSanitizeElement, b, {
      tagName: j,
      allowedTags: k
    }), ar(b, R))
      return !0;
    if (ka(b, j))
      return ln(b), !0;
    if (K[j] || !(V.tagCheck instanceof Function && V.tagCheck(j)) && !k[j]) {
      const ve = Yn(b, j, R);
      return ve === !1 && Yt(Oe.afterSanitizeElements, b, null), ve;
    }
    if (ee(b) === nn.element && !Ki(b) || (j === "noscript" || j === "noembed" || j === "noframes") && Rt(fb, b.innerHTML))
      return ln(b), !0;
    if (Ne && b.nodeType === nn.text) {
      const ve = Ta(b.textContent);
      b.textContent !== ve && (gr(t.removed, {
        element: b.cloneNode()
      }), b.textContent = ve);
    }
    return Yt(Oe.afterSanitizeElements, b, null), !1;
  }, en = function(b, R, j) {
    if (J[R] || ms(R, b) || Lt && (R === "id" || R === "name") && (j in n || j in mt))
      return !1;
    const oe = N[R] || V.attributeCheck instanceof Function && V.attributeCheck(R, b);
    return re && Rt(Nt, R) || ye && Rt(Je, R) ? !0 : oe ? vs[R] || Rt(_, mr(j, U, "")) || (R === "src" || R === "xlink:href" || R === "href") && b !== "script" && sd(j, "data:") === 0 && ps[b] || pe && !Rt(Jt, mr(j, U, "")) ? !0 : !j : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      rr(b) && un(W.tagNameCheck, b) && un(W.attributeNameCheck, R, b) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      R === "is" && W.allowCustomizedBuiltInElements && un(W.tagNameCheck, j)
    );
  }, Oa = He({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), rr = function(b) {
    return !Oa[Tr(b)] && Rt(v, b);
  }, ul = function(b, R, j, oe) {
    if (P && typeof h == "object" && typeof h.getAttributeType == "function" && !j)
      switch (h.getAttributeType(b, R)) {
        case "TrustedHTML":
          return $(oe);
        case "TrustedScriptURL":
          return Y(oe);
      }
    return oe;
  }, sr = function(b, R, j, oe) {
    try {
      j ? b.setAttributeNS(j, R, oe) : b.setAttribute(R, oe), Aa(b) ? ln(b) : ad(t.removed);
    } catch {
      cn(R, b);
    }
  }, Ei = function(b) {
    Yt(Oe.beforeSanitizeAttributes, b, null);
    const R = b.attributes;
    if (!R || Aa(b))
      return;
    N = ir(Oe.uponSanitizeAttribute, N, z, wt);
    const j = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let oe = R.length;
    const ve = Ye(b.nodeName);
    for (; oe--; ) {
      const Te = R[oe], ze = Te.name, Qe = Te.namespaceURI, ht = Te.value, St = Ye(ze), or = ht;
      let bt = ze === "value" ? or : qm(or);
      if (j.attrName = St, j.attrValue = bt, j.keepAttr = !0, j.forceKeepAttr = void 0, Yt(Oe.uponSanitizeAttribute, b, j), bt = j.attrValue, bi && (St === "id" || St === "name") && sd(bt, yi) !== 0 && (cn(ze, b, Te), bt = yi + bt), De && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, bt)) {
        cn(ze, b, Te);
        continue;
      }
      if (St === "attributename" && rd(bt, "href")) {
        cn(ze, b, Te);
        continue;
      }
      if (!j.forceKeepAttr) {
        if (!j.keepAttr) {
          cn(ze, b, Te);
          continue;
        }
        if (!Ce && Rt(hb, bt)) {
          cn(ze, b, Te);
          continue;
        }
        if (Ne && (bt = Ta(bt)), !en(ve, St, bt)) {
          cn(ze, b, Te);
          continue;
        }
        bt = ul(ve, St, Qe, bt), bt !== or && sr(b, ze, Qe, bt);
      }
    }
    Yt(Oe.afterSanitizeAttributes, b, null);
  }, Xn = function(b) {
    let R = null;
    const j = tr(b);
    for (Yt(Oe.beforeSanitizeShadowDOM, b, null); R = j.nextNode(); )
      if (Yt(Oe.uponSanitizeShadowNode, R, null), Si(R, b), Ei(R), Vt(R.content) && Xn(R.content), ee(R) === nn.element) {
        const oe = M(R);
        Vt(oe) && (In(oe), Xn(oe));
      }
    Yt(Oe.afterSanitizeShadowDOM, b, null);
  }, In = function(b) {
    const R = [{
      node: b,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const j = R.pop();
      if (j.shadow) {
        Xn(j.shadow);
        continue;
      }
      const oe = j.node, Te = ee(oe) === nn.element, ze = x(oe);
      if (ze)
        for (let Qe = ze.length - 1; Qe >= 0; --Qe)
          R.push({
            node: ze[Qe],
            shadow: null
          });
      if (Te) {
        const Qe = le ? le(oe) : null;
        if (typeof Qe == "string" && Ye(Qe) === "template") {
          const ht = oe.content;
          Vt(ht) && R.push({
            node: ht,
            shadow: null
          });
        }
      }
      if (Te) {
        const Qe = M(oe);
        Vt(Qe) && R.push({
          node: null,
          shadow: Qe
        }, {
          node: Qe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(X) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, j = null, oe = null, ve = null;
    if (ba = !X, ba && (X = "<!-->"), typeof X != "string" && !Wi(X) && (X = Qm(X), typeof X != "string"))
      throw Ji("dirty is not a string, aborting");
    if (!t.isSupported)
      return X;
    Ze ? (k = nt, N = wt) : wn(b), (Oe.uponSanitizeElement.length > 0 || Oe.uponSanitizeAttribute.length > 0) && (k = an(k)), Oe.uponSanitizeAttribute.length > 0 && (N = an(N)), t.removed = [];
    const Te = Xa && typeof X != "string" && Wi(X);
    if (Te) {
      Ea(X);
      const ht = ne(X);
      if (typeof ht == "string") {
        const St = Ye(ht);
        if (!k[St] || K[St])
          throw Rn(X), Ji("root node is forbidden and cannot be sanitized in-place");
      }
      if (Aa(X))
        throw Rn(X), Ji("root node is clobbered and cannot be sanitized in-place");
      try {
        In(X);
      } catch (St) {
        throw Rn(X), St;
      }
    } else if (Wi(X))
      R = er("<!---->"), j = R.ownerDocument.importNode(X, !0), j.nodeType === nn.element && j.nodeName === "BODY" || j.nodeName === "HTML" ? R = j : R.appendChild(j), In(j);
    else {
      if (!xt && !Ne && !Me && // eslint-disable-next-line unicorn/prefer-includes
      X.indexOf("<") === -1)
        return P && lt ? $(X) : X;
      if (R = er(X), !R)
        return xt ? null : lt ? ae : "";
    }
    R && vt && ln(R.firstChild);
    const ze = Te ? X : R;
    try {
      const ht = tr(ze);
      for (; oe = ht.nextNode(); )
        Si(oe, ze), Ei(oe), Vt(oe.content) && Xn(oe.content);
    } catch (ht) {
      throw Te && (Rn(X), ta(t.removed, (St) => {
        St.element && Sa(St.element);
      })), ht;
    }
    if (Te)
      return ta(t.removed, (ht) => {
        ht.element && Sa(ht.element);
      }), Ne && nr(X), X;
    if (xt) {
      if (Ne && nr(R), xn)
        for (ve = we.call(R.ownerDocument); R.firstChild; )
          ve.appendChild(R.firstChild);
      else
        ve = R;
      return (N.shadowroot || N.shadowrootmode) && (ve = Pe.call(i, ve, !0)), ve;
    }
    let Qe = Me ? R.outerHTML : R.innerHTML;
    return Me && k["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Rt(ub, R.ownerDocument.doctype.name) && (Qe = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + Qe), Ne && (Qe = Ta(Qe)), P && lt ? $(Qe) : Qe;
  }, t.setConfig = function() {
    let X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wn(X), Ze = !0, nt = k, wt = N;
  }, t.clearConfig = function() {
    gt = null, Ze = !1, nt = null, wt = null, P = he, ae = "";
  }, t.isValidAttribute = function(X, b, R) {
    gt || wn({});
    const j = Ye(X), oe = Ye(b);
    return en(j, oe, R);
  }, t.addHook = function(X, b) {
    typeof b == "function" && Zt(Oe, X) && gr(Oe[X], b);
  }, t.removeHook = function(X, b) {
    if (Zt(Oe, X)) {
      if (b !== void 0) {
        const R = Km(Oe[X], b);
        return R === -1 ? void 0 : Wm(Oe[X], R, 1)[0];
      }
      return ad(Oe[X]);
    }
  }, t.removeHooks = function(X) {
    Zt(Oe, X) && (Oe[X] = []);
  }, t.removeAllHooks = function() {
    Oe = gd();
  }, t;
}
var Ih = Rh();
function Yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rl, md;
function bb() {
  if (md) return Rl;
  md = 1;
  var e = /["'&<>]/;
  Rl = t;
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
  return Rl;
}
var yb = bb();
const Qs = /* @__PURE__ */ Yc(yb);
function _b() {
  return globalThis._nc_l10n_locale;
}
function wb() {
  return _b().replaceAll(/_/g, "-");
}
function nl() {
  return globalThis._nc_l10n_language;
}
function Cb(e) {
  const t = nl();
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
function Ph(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function m(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, s = typeof i == "number" ? i : typeof n == "number" ? n : void 0, o = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (A) => A, d = (o.sanitize ? Ih.sanitize : l) || l, u = o.escape ? Qs : l, h = (A) => typeof A == "string" || typeof A == "number", w = (A, x, L) => A.replace(/%n/g, "" + L).replace(/{([^{}]*)}/g, (M, G) => {
    if (x === void 0 || !(G in x))
      return u(M);
    const F = x[G];
    return h(F) ? u(`${F}`) : typeof F == "object" && h(F.value) ? (F.escape !== !1 ? Qs : l)(`${F.value}`) : u(M);
  });
  let O = (a?.bundle ?? Ph(e)).translations[t] || t;
  return O = Array.isArray(O) ? O[0] : O, d(typeof r == "object" || s !== void 0 ? w(
    O,
    r,
    s
  ) : O);
}
function Mn(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? Ph(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return m(e, d[u], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function Sb(e, t = nl()) {
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
class eo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? eo.GLOBAL_SCOPE_PERSISTENT : eo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class Eb {
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
    return new eo(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Dh(e) {
  return new Eb(e);
}
function Tb() {
  try {
    return qc("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Il, bd;
function Mh() {
  if (bd) return Il;
  bd = 1;
  var e = {};
  return Il = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Il;
}
var Pl, yd;
function $h() {
  if (yd) return Pl;
  yd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Pl = {
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
  }, Pl;
}
var As = { exports: {} }, _d;
function Ab() {
  return _d || (_d = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = $h(), r = Mh();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], d = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const w = "[a-zA-Z0-9-]", T = [
      ["\\s", 1],
      ["\\d", a],
      [w, i]
    ], O = (x) => {
      for (const [L, M] of T)
        x = x.split(`${L}*`).join(`${L}{0,${M}}`).split(`${L}+`).join(`${L}{1,${M}}`);
      return x;
    }, A = (x, L, M) => {
      const G = O(L), F = h++;
      r(x, F, L), u[x] = F, l[F] = L, d[F] = G, s[F] = new RegExp(L, M ? "g" : void 0), o[F] = new RegExp(G, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${w}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${w}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(As, As.exports)), As.exports;
}
var Dl, wd;
function kb() {
  if (wd) return Dl;
  wd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Dl = (i) => i ? typeof i != "object" ? e : i : t, Dl;
}
var Ml, Cd;
function Ob() {
  if (Cd) return Ml;
  Cd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return Ml = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Ml;
}
var $l, Sd;
function Fh() {
  if (Sd) return $l;
  Sd = 1;
  const e = Mh(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = $h(), { safeRe: i, t: a } = Ab(), r = kb(), { compareIdentifiers: s } = Ob(), o = (d, u) => {
    const h = u.split(".");
    if (h.length > d.length)
      return !1;
    for (let w = 0; w < h.length; w++)
      if (s(d[w], h[w]) !== 0)
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
      const w = u.trim().match(h.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!w)
        throw new TypeError(`Invalid Version: ${u}`);
      if (this.raw = u, this.major = +w[1], this.minor = +w[2], this.patch = +w[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      w[4] ? this.prerelease = w[4].split(".").map((T) => {
        if (/^[0-9]+$/.test(T)) {
          const O = +T;
          if (O >= 0 && O < n)
            return O;
        }
        return T;
      }) : this.prerelease = [], this.build = w[5] ? w[5].split(".") : [], this.format();
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
        const w = this.prerelease[h], T = u.prerelease[h];
        if (e("prerelease compare", h, w, T), w === void 0 && T === void 0)
          return 0;
        if (T === void 0)
          return 1;
        if (w === void 0)
          return -1;
        if (w === T)
          continue;
        return s(w, T);
      } while (++h);
    }
    compareBuild(u) {
      u instanceof l || (u = new l(u, this.options));
      let h = 0;
      do {
        const w = this.build[h], T = u.build[h];
        if (e("build compare", h, w, T), w === void 0 && T === void 0)
          return 0;
        if (T === void 0)
          return 1;
        if (w === void 0)
          return -1;
        if (w === T)
          continue;
        return s(w, T);
      } while (++h);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(u, h, w) {
      if (u.startsWith("pre")) {
        if (!h && w === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (h) {
          const T = `-${h}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!T || T[1] !== h)
            throw new Error(`invalid identifier: ${h}`);
        }
      }
      switch (u) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", h, w);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", h, w);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", h, w), this.inc("pre", h, w);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", h, w), this.inc("pre", h, w);
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
          const T = Number(w) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [T];
          else {
            let O = this.prerelease.length;
            for (; --O >= 0; )
              typeof this.prerelease[O] == "number" && (this.prerelease[O]++, O = -2);
            if (O === -1) {
              if (h === this.prerelease.join(".") && w === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(T);
            }
          }
          if (h) {
            let O = [h, T];
            if (w === !1 && (O = [h]), o(this.prerelease, h)) {
              const A = this.prerelease[h.split(".").length];
              isNaN(A) && (this.prerelease = O);
            } else
              this.prerelease = O;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${u}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return $l = l, $l;
}
var Fl, Ed;
function Nb() {
  if (Ed) return Fl;
  Ed = 1;
  const e = Fh();
  return Fl = (n, i) => new e(n, i).major, Fl;
}
var xb = Nb();
const Td = /* @__PURE__ */ Yc(xb);
var zl, Ad;
function Lb() {
  if (Ad) return zl;
  Ad = 1;
  const e = Fh();
  return zl = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, zl;
}
var Ul, kd;
function Rb() {
  if (kd) return Ul;
  kd = 1;
  const e = Lb();
  return Ul = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Ul;
}
var Ib = Rb();
const Pb = /* @__PURE__ */ Yc(Ib);
class Db {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Pb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Td(t.getVersion()) !== Td(this.getVersion()) && console.warn(
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
class Mb {
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
let yr = null;
function Xc() {
  return yr !== null ? yr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? yr = new Db(window._nc_event_bus) : yr = window._nc_event_bus = new Mb(), yr);
}
function zh(e, t) {
  Xc().subscribe(e, t);
}
function $b(e, t) {
  Xc().unsubscribe(e, t);
}
function di(e, ...t) {
  Xc().emit(e, ...t);
}
const Uh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Fb = Object.prototype.toString, zb = (e) => Fb.call(e) === "[object Object]", Ia = () => {
}, Ub = /* @__PURE__ */ Bb();
function Bb() {
  var e, t, n;
  return Uh && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Bl(e) {
  return Array.isArray(e) ? e : [e];
}
function Hb(e, t, n) {
  return Ut(e, t, {
    ...n,
    immediate: !0
  });
}
const Bh = Uh ? window : void 0;
function Ar(e) {
  var t;
  const n = ci(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ka(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = q(() => {
    const i = Bl(ci(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Hb(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Ar(r))) !== null && i !== void 0 ? i : [Bh].filter((r) => r != null),
      Bl(ci(n.value ? e[1] : e[0])),
      Bl(g(n.value ? e[2] : e[1])),
      ci(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = zb(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((w) => r.map((T) => t(h, w, T, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let Od = !1;
function Nd(e, t, n = {}) {
  const { window: i = Bh, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Ia,
    cancel: Ia,
    trigger: Ia
  } : Ia;
  if (Ub && !Od) {
    Od = !0;
    const x = { passive: !0 };
    Array.from(i.document.body.children).forEach((L) => L.addEventListener("click", Ia, x)), i.document.documentElement.addEventListener("click", Ia, x);
  }
  let l = !0;
  const d = (x) => ci(a).some((L) => {
    if (typeof L == "string") return Array.from(i.document.querySelectorAll(L)).some((M) => M === x.target || x.composedPath().includes(M));
    {
      const M = Ar(L);
      return M && (x.target === M || x.composedPath().includes(M));
    }
  });
  function u(x) {
    const L = ci(x);
    return L && L.$.subTree.shapeFlag === 16;
  }
  function h(x, L) {
    const M = ci(x), G = M.$.subTree && M.$.subTree.children;
    return G == null || !Array.isArray(G) ? !1 : G.some((F) => F.el === L.target || L.composedPath().includes(F.el));
  }
  const w = (x) => {
    const L = Ar(e);
    if (x.target != null && !(!(L instanceof Element) && u(e) && h(e, x)) && !(!L || L === x.target || x.composedPath().includes(L))) {
      if ("detail" in x && x.detail === 0 && (l = !d(x)), !l) {
        l = !0;
        return;
      }
      t(x);
    }
  };
  let T = !1;
  const O = [
    Ka(i, "click", (x) => {
      T || (T = !0, setTimeout(() => {
        T = !1;
      }, 0), w(x));
    }, {
      passive: !0,
      capture: r
    }),
    Ka(i, "pointerdown", (x) => {
      const L = Ar(e);
      l = !d(x) && !!(L && !x.composedPath().includes(L));
    }, { passive: !0 }),
    s && Ka(i, "blur", (x) => {
      setTimeout(() => {
        const L = Ar(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !L?.contains(i.document.activeElement) && t(x);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => O.forEach((x) => x());
  return o ? {
    stop: A,
    cancel: () => {
      l = !1;
    },
    trigger: (x) => {
      l = !0, w(x), l = !1;
    }
  } : A;
}
function jb(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Pt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Pt({
    x: 0,
    y: 0
  }), d = q(() => o.x - l.x), u = q(() => o.y - l.y), { max: h, abs: w } = Math, T = q(() => h(w(d.value), w(u.value)) >= n), O = /* @__PURE__ */ If(!1), A = q(() => T.value ? w(d.value) > w(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), x = (ee) => [ee.touches[0].clientX, ee.touches[0].clientY], L = (ee, ne) => {
    o.x = ee, o.y = ne;
  }, M = (ee, ne) => {
    l.x = ee, l.y = ne;
  }, G = {
    passive: s,
    capture: !s
  }, F = (ee) => {
    O.value && a?.(ee, A.value), O.value = !1;
  }, le = [
    Ka(e, "touchstart", (ee) => {
      if (ee.touches.length !== 1) return;
      const [ne, P] = x(ee);
      L(ne, P), M(ne, P), r?.(ee);
    }, G),
    Ka(e, "touchmove", (ee) => {
      if (ee.touches.length !== 1) return;
      const [ne, P] = x(ee);
      M(ne, P), G.capture && !G.passive && Math.abs(d.value) > Math.abs(u.value) && ee.preventDefault(), !O.value && T.value && (O.value = !0), O.value && i?.(ee);
    }, G),
    Ka(e, ["touchend", "touchcancel"], F, G)
  ];
  return {
    isSwiping: O,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: d,
    lengthY: u,
    stop: () => le.forEach((ee) => ee())
  };
}
var Vb = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = bg(), r = mg(), s = /* @__PURE__ */ at([]), o = q(() => s.value.reduce((U, v) => (U[~~v.id] = v) && U, {})), l = q(() => s.value.length), d = /* @__PURE__ */ at(null), u = /* @__PURE__ */ at(!1), h = /* @__PURE__ */ at({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), w = /* @__PURE__ */ at({
      splitter: null,
      timeoutId: null
    }), T = q(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), O = () => {
      document.addEventListener("mousemove", L, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", L, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", L, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", L, { passive: !1 }), document.removeEventListener("touchend", M));
    }, x = (U, v) => {
      let _ = U.target.closest(".splitpanes__splitter");
      if (_) {
        let { left: k, top: I } = _.getBoundingClientRect(), { clientX: N, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        h.value.cursorOffset = i.horizontal ? z - I : N - k;
      }
      O(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, L = (U) => {
      h.value.mouseDown && (U.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        P(ee(U)), Je("resize", { event: U }, !0);
      }));
    }, M = (U) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), Je("resized", { event: U }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, G = (U, v) => {
      "ontouchstart" in window && (U.preventDefault(), w.value.splitter === v ? (clearTimeout(w.value.timeoutId), w.value.timeoutId = null, F(U, v), w.value.splitter = null) : (w.value.splitter = v, w.value.timeoutId = setTimeout(() => w.value.splitter = null, 500))), h.value.dragging || Je("splitter-click", {
        event: U,
        index: v
      }, !0);
    }, F = (U, v) => {
      if (Je("splitter-dblclick", {
        event: U,
        index: v
      }, !0), i.maximizePanes) {
        let _ = 0;
        s.value = s.value.map((k, I) => (k.size = I === v ? k.max : k.min, I !== v && (_ += k.min), k)), s.value[v].size -= _, Je("pane-maximize", {
          event: U,
          index: v,
          pane: s.value[v]
        }), Je("resized", {
          event: U,
          index: v
        }, !0);
      }
    }, le = (U, v) => {
      if (!i.keyboardStep) return;
      let _ = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", k = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!_ && !k) return;
      U.preventDefault(), h.value.activeSplitter = v;
      let I = (_ ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), N = Z(v) + s.value[v].size;
      ae(Math.min(Math.max(N + I * i.keyboardStep, 0), 100)), Je("resize", { event: U }, !0), Je("resized", { event: U }, !0), h.value.activeSplitter = null;
    }, fe = (U, v) => {
      let _ = o.value[v];
      _ && Je("pane-click", {
        event: U,
        index: _.index,
        pane: _
      });
    }, ee = (U) => {
      let v = d.value.getBoundingClientRect(), { clientX: _, clientY: k } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: _ - (i.horizontal ? 0 : h.value.cursorOffset) - v.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - v.top
      };
    }, ne = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let v = d.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = v - U), U * 100 / v;
    }, P = (U) => {
      ae(ne(U));
    }, ae = (U) => {
      let v = h.value.activeSplitter;
      if (v === null || v >= s.value.length - 1) return;
      let _ = {
        prevPanesSize: Z(v),
        nextPanesSize: ie(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : _.prevPanesSize), I = 100 - (i.pushOtherPanes ? 0 : _.nextPanesSize);
      U = Math.max(Math.min(U, I), k);
      let N = [v, v + 1], z = s.value[N[0]] || null, W = s.value[N[1]] || null, K = z !== null && z.max < 100 && U >= z.max + _.prevPanesSize, J = W !== null && W.max < 100 && U <= 100 - (W.max + ie(v + 1));
      if (K || J) {
        K ? (z.size = z.max, W.size = Math.min(Math.max(100 - z.max - _.prevPanesSize - _.nextPanesSize, W.min), W.max)) : (z.size = Math.min(Math.max(100 - W.max - _.prevPanesSize - ie(v + 1), z.min), z.max), W.size = W.max);
        return;
      }
      if (i.pushOtherPanes) {
        let V = he(_, U);
        if (!V) return;
        ({ sums: _, panesToResize: N } = V), z = s.value[N[0]] || null, W = s.value[N[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - _.prevPanesSize - _.prevReachedMinPanes, z.min), z.max)), W !== null && (W.size = Math.min(Math.max(100 - U - _.nextPanesSize - _.nextReachedMinPanes, W.min), W.max));
    }, he = (U, v) => {
      let _ = h.value.activeSplitter, k = [_, _ + 1];
      if (v < U.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = D(_).index, U.prevReachedMinPanes = 0, k[0] < _ && s.value.forEach((I, N) => {
          N > k[0] && N <= _ && (I.size = I.min, U.prevReachedMinPanes += I.min);
        }), k[0] === void 0) return U.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((I, N) => {
          N > 0 && N <= _ && (I.size = I.min, U.prevReachedMinPanes += I.min);
        }), s.value[k[1]].size = 100 - U.prevReachedMinPanes - s.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = Z(k[0]);
      }
      return v > 100 - U.nextPanesSize - s.value[k[1]].min && (k[1] = $(_).index, U.nextReachedMinPanes = 0, k[1] > _ + 1 && s.value.forEach((I, N) => {
        N > _ && N < k[1] && (I.size = I.min, U.nextReachedMinPanes += I.min);
      }), U.nextPanesSize = k[1] === void 0 ? 0 : ie(k[1] - 1), k[1] === void 0) ? (U.nextReachedMinPanes = 0, s.value.forEach((I, N) => {
        N >= _ + 1 && (I.size = I.min, U.nextReachedMinPanes += I.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - U.prevPanesSize - ie(k[0] - 1)), null) : {
        sums: U,
        panesToResize: k
      };
    }, Z = (U) => s.value.reduce((v, _, k) => v + (k < U ? _.size : 0), 0), ie = (U) => s.value.reduce((v, _, k) => v + (k > U + 1 ? _.size : 0), 0), D = (U) => [...s.value].reverse().find((v) => v.index < U && v.size > v.min) || {}, $ = (U) => s.value.find((v) => v.index > U + 1 && v.size > v.min) || {}, Y = () => {
      let U = Array.from(d.value?.children || []);
      for (let v of U) {
        let _ = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !_ && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, se = (U, v, _ = !1) => {
      let k = U - 1, I = document.createElement("div");
      I.classList.add("splitpanes__splitter"), _ || (I.onmousedown = (N) => x(N, k), typeof window < "u" && "ontouchstart" in window && (I.ontouchstart = (N) => x(N, k)), I.onclick = (N) => G(N, k + 1), i.keyboardStep && (I.setAttribute("tabindex", "0"), I.setAttribute("role", "separator"), I.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), I.onkeydown = (N) => le(N, k))), I.ondblclick = (N) => F(N, k + 1), v.parentNode.insertBefore(I, v);
    }, te = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, ce = () => {
      let U = Array.from(d.value?.children || []);
      for (let _ of U) _.className.includes("splitpanes__splitter") && te(_);
      let v = 0;
      for (let _ of U) _.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? se(v, _, !0) : v && se(v, _), v++);
    }, de = ({ uid: U, ...v }) => {
      let _ = o.value[U];
      for (let [k, I] of Object.entries(v)) _[k] = I;
    }, we = !1, me = (U) => {
      let v = -1;
      Array.from(d.value?.children || []).some((_) => (_.className.includes("splitpanes__pane") && v++, _.isSameNode(U.el))), s.value.splice(v, 0, {
        ...U,
        index: v
      }), s.value.forEach((_, k) => _.index = k), u.value && !we && (we = !0, Hn(() => {
        ce(), Oe({ addedPane: s.value[v] }), Je("pane-add", { pane: s.value[v] }), we = !1;
      }));
    }, Pe = (U) => {
      let v = s.value.findIndex((k) => k.id === U);
      s.value[v].el = null;
      let _ = s.value.splice(v, 1)[0];
      s.value.forEach((k, I) => k.index = I), Hn(() => {
        ce(), Je("pane-remove", { pane: _ }), Oe({ removedPane: {
          ..._
        } });
      });
    }, Oe = (U = {}) => {
      !U.addedPane && !U.removedPane ? ct() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? ot(U) : rt(), u.value && Je("resized");
    }, rt = () => {
      let U = 100 / l.value, v = 100, _ = [], k = [];
      for (let I of s.value) I.size = Math.max(Math.min(U, I.max), I.min), v -= I.size, I.size >= I.max && _.push(I.id), I.size <= I.min && k.push(I.id);
      Math.abs(v) > 0.1 && Nt(v, _, k);
    }, ct = () => {
      let U = 100, v = [], _ = [], k = 0;
      for (let N of s.value) U -= N.size, N.givenSize !== null && k++, N.size >= N.max && v.push(N.id), N.size <= N.min && _.push(N.id);
      let I = 100;
      if (U > 0.1) {
        for (let N of s.value) N.givenSize === null && (N.size = Math.max(Math.min(U / (l.value - k), N.max), N.min)), I -= N.size;
        I > 0.1 && Nt(I, v, _);
      }
    }, ot = ({ addedPane: U, removedPane: v } = {}) => {
      let _ = s.value.reduce((K, J) => K + (J.givenSize === null ? 0 : J.givenSize), 0), k = s.value.filter((K) => K.givenSize === null).length, I = k > 0 ? (100 - _) / k : 0, N = 0, z = [], W = [];
      for (let K of s.value) N -= K.size, K.size >= K.max && z.push(K.id), K.size <= K.min && W.push(K.id);
      if (!(Math.abs(N) < 0.1)) {
        N = 100;
        for (let K of s.value) K.givenSize === null && (K.size = Math.max(Math.min(I, K.max), K.min)), N -= K.size, K.size >= K.max && z.push(K.id), K.size <= K.min && W.push(K.id);
        Math.abs(N) > 0.1 && Nt(N, z, W);
      }
    }, Nt = (U, v, _) => {
      let k;
      k = U > 0 ? U / (l.value - v.length) : U / (l.value - _.length), s.value.forEach((I, N) => {
        if (U > 0 && !v.includes(I.id)) {
          let z = Math.max(Math.min(I.size + k, I.max), I.min), W = z - I.size;
          U -= W, I.size = z;
        } else if (!_.includes(I.id)) {
          let z = Math.max(Math.min(I.size + k, I.max), I.min), W = z - I.size;
          U -= W, I.size = z;
        }
      }), Math.abs(U) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Je = (U, v = void 0, _ = !1) => {
      let k = v?.index ?? h.value.activeSplitter ?? null;
      n(U, {
        ...v,
        ...k !== null && { index: k },
        ..._ && k !== null && {
          prevPane: s.value[k - +!!i.firstSplitter],
          nextPane: s.value[k + +!i.firstSplitter]
        },
        panes: s.value.map((I) => ({
          min: I.min,
          max: I.max,
          size: I.size
        }))
      });
    };
    Ut(() => i.firstSplitter, () => ce()), Ut(() => i.horizontal, (U) => Hn(() => {
      n("direction-changed", {
        horizontal: U,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), Ui(() => {
      Y(), ce(), Oe(), Je("ready"), u.value = !0;
    }), Ya(() => u.value = !1);
    let Jt = () => {
      let { class: U, ...v } = a;
      return Xt("div", {
        ref: d,
        class: [T.value, U],
        ...v
      }, r.default?.());
    };
    return vn("panes", s), vn("indexedPanes", o), vn("horizontal", q(() => i.horizontal)), vn("requestUpdate", de), vn("onPaneAdd", me), vn("onPaneRemove", Pe), vn("onPaneClick", fe), (U, v) => (y(), Fe(Hc(Jt)));
  }
}), Gb = {
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
    let t = e, n = Mt("requestUpdate"), i = Mt("onPaneAdd"), a = Mt("horizontal"), r = Mt("onPaneRemove"), s = Mt("onPaneClick"), o = pa()?.uid, l = Mt("indexedPanes"), d = q(() => l.value[o]), u = /* @__PURE__ */ at(null), h = q(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, T.value), w.value);
    }), w = q(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), T = q(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), O = q(() => {
      let A = d.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return Ut(() => h.value, (A) => n({
      uid: o,
      size: A
    })), Ut(() => w.value, (A) => n({
      uid: o,
      min: A
    })), Ut(() => T.value, (A) => n({
      uid: o,
      max: A
    })), Ui(() => {
      i({
        id: o,
        el: u.value,
        min: w.value,
        max: T.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Ya(() => r(o)), (A, x) => (y(), E("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: x[0] ||= (L) => g(s)(L, A._.uid),
      style: on(O.value)
    }, [Re(A.$slots, "default")], 4));
  }
}, Kb = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Wb = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", qb = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Yb = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Zc = 1024, Hh = Zc / 2, to = (e) => document.documentElement.clientWidth < e, jh = /* @__PURE__ */ at(to(Zc)), Vh = /* @__PURE__ */ at(to(Hh));
window.addEventListener("resize", () => {
  jh.value = to(Zc), Vh.value = to(Hh);
}, { passive: !0 });
function hs() {
  return /* @__PURE__ */ Kr(jh);
}
function Xb() {
  return /* @__PURE__ */ Kr(Vh);
}
class Zb {
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
    return Mn("", t, n, i, a, { bundle: this.bundle });
  }
}
class Jb {
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
    return this.setLanguage(nl().replace("-", "_"));
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
    const t = new Zb((n) => Sb(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function Qb() {
  return new Jb();
}
const Gh = Qb().detectLanguage().build(), yt = (...e) => Gh.gettext(...e);
function Bi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== nl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        Gh.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const ey = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], ty = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], ny = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], iy = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], ay = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], ry = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], sy = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], oy = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], ly = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const cy = /* @__PURE__ */ Symbol(""), [uy] = window.OC?.config?.version?.split(".") ?? [], Kh = Number.parseInt(uy ?? "35"), dy = Kh < 32, Hi = Kh < 34, fy = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function hy() {
  return Mt(fy, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, py = { class: "button-vue__wrapper" }, vy = { class: "button-vue__icon" }, gy = { class: "button-vue__text" }, my = /* @__PURE__ */ Ot({
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
    const n = e, i = t, { formBoxItemClass: a } = hy(), r = Mt(cy, null) !== null, s = q(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = q(() => s.value === "button" && typeof n.pressed == "boolean"), l = q(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = q(() => l.value.startsWith("tertiary")), u = q(() => n.alignment.split("-")[0]), h = q(() => n.alignment.includes("-")), w = Mt("NcPopover:trigger:attrs", () => ({}), !1), T = q(() => w()), O = q(() => {
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
          ...T.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function A(x) {
      o.value && i("update:pressed", !n.pressed), i("click", x);
    }
    return (x, L) => (y(), Fe(Hc(s.value), Bt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(dy),
          "button-vue--legacy34": g(Hi)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, O.value, { onClick: A }), {
      default: Ae(() => [
        c("span", py, [
          c("span", vy, [
            Re(x.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", gy, [
            Re(x.$slots, "default", {}, () => [
              ke(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), jn = /* @__PURE__ */ qe(my, [["__scopeId", "data-v-47ce59a3"]]), by = ["aria-hidden", "aria-label"], yy = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, _y = ["d"], wy = ["innerHTML"], Cy = /* @__PURE__ */ Ot({
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
    fm((a) => ({
      fb515064: n.value
    }));
    const t = e, n = q(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = q(() => {
      if (!t.svg || t.path)
        return;
      const a = Ih.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (y(), E("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ee(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (y(), E("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, wy)) : (y(), E("svg", yy, [
        c("path", { d: e.path }, null, 8, _y)
      ]))
    ], 10, by));
  }
}), il = /* @__PURE__ */ qe(Cy, [["__scopeId", "data-v-aaedb1c3"]]);
Ey();
function Sy(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), di("csrf-token-update", { token: e, _internal: !0 }));
}
function Ey() {
  zh("csrf-token-update", ({ token: e, _internal: t }) => {
    t || Sy(e);
  });
}
Dh("public").persist().build();
let Pa;
function xd(e, t) {
  return e ? e.getAttribute(t) : null;
}
function Ty() {
  if (Pa !== void 0)
    return Pa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = xd(e, "data-user");
  return t === null ? (Pa = null, Pa) : (Pa = {
    uid: t,
    displayName: xd(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Pa);
}
var ut = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(ut || {});
class Ay {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + ut[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === ut.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case ut.Debug:
          console.debug(this.formatMessage(n, ut.Debug, i), i);
          break;
        case ut.Info:
          console.info(this.formatMessage(n, ut.Info, i), i);
          break;
        case ut.Warn:
          console.warn(this.formatMessage(n, ut.Warn, i), i);
          break;
        case ut.Error:
          console.error(this.formatMessage(n, ut.Error, i), i);
          break;
        case ut.Fatal:
        default:
          console.error(this.formatMessage(n, ut.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(ut.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(ut.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(ut.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(ut.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(ut.Fatal, t, Object.assign({}, this.context, n));
  }
}
function ky(e) {
  return new Ay(e);
}
class Oy {
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
    const t = Ty();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? ut.Warn, window._oc_debug && (t.context.level = ut.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Ny() {
  return new Oy(ky);
}
const da = Ny().detectUser().setApp("@nextcloud/vue").build();
function xy(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Wh = "missing-app-name";
try {
  Wh = "library";
} catch {
  da.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Ly = Wh;
let Ry = "";
try {
  Ry = "0.1.0-alpha.167";
} catch {
  da.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function qh() {
  return Mt("appName", Ly);
}
const Iy = xy(() => {
  const e = qc("core", "apps", []), t = qh();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), hc = Cb();
Bi(sy);
const Py = /* @__PURE__ */ Ot({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = hs();
    Ut(t, n), Ui(() => {
      n(t.value);
    }), Ya(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && di("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (y(), Fe(g(jn), {
      "aria-label": g(yt)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(yt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Ae(() => [
        be(g(il), {
          directional: "",
          path: g(Kb)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), Dy = /* @__PURE__ */ qe(Py, [["__scopeId", "data-v-a28923a1"]]), Ld = Dh("nextcloud").persist().build(), My = Tb().theming?.name ?? "Nextcloud", $y = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: Dy,
    Pane: Gb,
    Splitpanes: Vb
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
      appName: qh(),
      localizedAppName: Iy(),
      isMobile: hs(),
      isRtl: hc
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
        return da.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(My), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = jb(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? di("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && di("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      Ld.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), da.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Ld.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return da.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, Fy = {
  key: 0,
  class: "hidden-visually"
}, zy = { class: "app-content-wrapper__list" }, Uy = {
  key: 1,
  class: "app-content-wrapper"
};
function By(e, t, n, i, a, r) {
  const s = Be("NcAppContentDetailsToggle"), o = Be("Pane"), l = Be("Splitpanes");
  return y(), E("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (y(), E("h1", Fy, p(n.pageHeading), 1)) : H("", !0),
    e.$slots.list ? (y(), E(ue, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (y(), E("div", {
        key: 0,
        class: Ee(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (y(), Fe(s, {
          key: 0,
          onClick: Xe(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : H("", !0),
        Ge(c("div", zy, [
          Re(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Va, !n.showDetails]
        ]),
        n.showDetails ? Re(e.$slots, "default", { key: 1 }, void 0, !0) : H("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (y(), E("div", Uy, [
        be(l, {
          horizontal: n.layout === "horizontal-split",
          class: Ee(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Ae(() => [
            be(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Ae(() => [
                Re(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            be(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Ae(() => [
                Re(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : H("", !0)
    ], 64)) : H("", !0),
    e.$slots.list ? H("", !0) : Re(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const Hy = /* @__PURE__ */ qe($y, [["render", By], ["__scopeId", "data-v-51427d61"]]);
var Yh = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], no = /* @__PURE__ */ Yh.join(","), Xh = typeof Element > "u", ha = Xh ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, io = !Xh && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, ao = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : ao(t.parentNode));
  return s;
}, jy = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Zh = function(t, n, i) {
  if (ao(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(no));
  return n && ha.call(t, no) && a.unshift(t), a = a.filter(i), a;
}, ro = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!ao(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, d = ro(l, !0, i);
        i.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var u = ha.call(s, no);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), w = !ao(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && w) {
          var T = ro(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, T) : a.push({
            scopeParent: s,
            candidates: T
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Jh = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ra = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || jy(t)) && !Jh(t) ? 0 : t.tabIndex;
}, Vy = function(t, n) {
  var i = ra(t);
  return i < 0 && n && !Jh(t) ? 0 : i;
}, Gy = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Qh = function(t) {
  return t.tagName === "INPUT";
}, Ky = function(t) {
  return Qh(t) && t.type === "hidden";
}, Wy = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, qy = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, Yy = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || io(t), i = function(o) {
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
  var r = qy(a, t.form);
  return !r || r === t;
}, Xy = function(t) {
  return Qh(t) && t.type === "radio";
}, Zy = function(t) {
  return Xy(t) && !Yy(t);
}, Jy = function(t) {
  var n, i = t && io(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = io(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, Rd = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, Qy = function(t, n) {
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
  var l = ha.call(t, "details>summary:first-of-type"), d = l ? t.parentElement : t;
  if (ha.call(d, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, w = io(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return Rd(t);
        t.assignedSlot ? t = t.assignedSlot : !h && w !== t.ownerDocument ? t = w.host : t = h;
      }
      t = u;
    }
    if (Jy(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Rd(t);
  return !1;
}, e_ = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return ha.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, so = function(t, n) {
  return !(n.disabled || Ky(n) || Qy(n, t) || // For a details element with a summary, the summary element gets the focus
  Wy(n) || e_(n));
}, pc = function(t, n) {
  return !(Zy(n) || ra(n) < 0 || !so(t, n));
}, t_ = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, ep = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = Vy(o, s), d = s ? ep(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(Gy).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, n_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = ro([t], n.includeContainer, {
    filter: pc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: t_
  }) : i = Zh(t, n.includeContainer, pc.bind(null, n)), ep(i);
}, i_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = ro([t], n.includeContainer, {
    filter: so.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Zh(t, n.includeContainer, so.bind(null, n)), i;
}, Da = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ha.call(t, no) === !1 ? !1 : pc(n, t);
}, a_ = /* @__PURE__ */ Yh.concat("iframe:not([inert]):not([inert] *)").join(","), Hl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ha.call(t, a_) === !1 ? !1 : so(n, t);
};
function vc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function r_(e) {
  if (Array.isArray(e)) return vc(e);
}
function Id(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = tp(e)) || t) {
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
function s_(e, t, n) {
  return (t = d_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function o_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function l_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Dd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pd(Object(n), !0).forEach(function(i) {
      s_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function c_(e) {
  return r_(e) || o_(e) || tp(e) || l_();
}
function u_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function d_(e) {
  var t = u_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tp(e, t) {
  if (e) {
    if (typeof e == "string") return vc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vc(e, t) : void 0;
  }
}
var oi = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = oi.getActiveTrap(t);
    n !== i && oi.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), oi.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = oi.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = oi.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, f_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, h_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Ir = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, p_ = function(t) {
  return Ir(t) && !t.shiftKey;
}, v_ = function(t) {
  return Ir(t) && t.shiftKey;
}, Md = function(t) {
  return setTimeout(t, 0);
}, _r = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, ks = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, g_ = [], Jc = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || g_, r = Dd({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: p_,
    isKeyBackward: v_
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
  }, o, l = function(D, $, Y) {
    return D && D[$] !== void 0 ? D[$] : r[Y || $];
  }, d = function(D, $) {
    var Y = typeof $?.composedPath == "function" ? $.composedPath() : void 0;
    return s.containerGroups.findIndex(function(se) {
      var te = se.container, ce = se.tabbableNodes;
      return te.contains(D) || Y?.includes(te) || ce.find(function(de) {
        return de === D;
      });
    });
  }, u = function(D) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = $.hasFallback, se = Y === void 0 ? !1 : Y, te = $.params, ce = te === void 0 ? [] : te, de = r[D];
    if (typeof de == "function" && (de = de.apply(void 0, c_(ce))), de === !0 && (de = void 0), !de) {
      if (de === void 0 || de === !1)
        return de;
      throw new Error("`".concat(D, "` was specified but was not a node, or did not return a node"));
    }
    var we = de;
    if (typeof de == "string") {
      try {
        we = i.querySelector(de);
      } catch (me) {
        throw new Error("`".concat(D, '` appears to be an invalid selector; error="').concat(me.message, '"'));
      }
      if (!we && !se)
        throw new Error("`".concat(D, "` as selector refers to no known node"));
    }
    return we;
  }, h = function(D) {
    var $ = D.activeElement;
    return $ ? $.shadowRoot && $.shadowRoot.activeElement !== null ? h($.shadowRoot) : $ : null;
  }, w = function() {
    var D = u("initialFocus", {
      hasFallback: !0
    });
    if (D === !1)
      return !1;
    if (D === void 0 || D && !Hl(D, r.tabbableOptions)) {
      var $ = h(i);
      if (d($) >= 0)
        D = $;
      else {
        var Y = s.tabbableGroups[0], se = Y && Y.firstTabbableNode;
        D = se || u("fallbackFocus");
      }
    } else D === null && (D = u("fallbackFocus"));
    if (!D)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return D;
  }, T = function() {
    if (s.containerGroups = s.containers.map(function(D) {
      var $ = n_(D, r.tabbableOptions), Y = i_(D, r.tabbableOptions), se = $.length > 0 ? $[0] : void 0, te = $.length > 0 ? $[$.length - 1] : void 0, ce = Y.find(function(me) {
        return Da(me);
      }), de = Y.slice().reverse().find(function(me) {
        return Da(me);
      }), we = !!$.find(function(me) {
        return ra(me) > 0;
      });
      return {
        container: D,
        tabbableNodes: $,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: we,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: se,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: te,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: ce,
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
        nextTabbableNode: function(Pe) {
          var Oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, rt = $.indexOf(Pe);
          return rt < 0 ? Oe ? Y.slice(Y.indexOf(Pe) + 1).find(function(ct) {
            return Da(ct);
          }) : Y.slice(0, Y.indexOf(Pe)).reverse().find(function(ct) {
            return Da(ct);
          }) : $[rt + (Oe ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(D) {
      return D.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(D) {
      return D.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, O = function(D) {
    if (D !== !1 && D !== h(document)) {
      if (!D || !D.focus) {
        O(w());
        return;
      }
      D.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = D, f_(D) && D.select();
    }
  }, A = function(D) {
    var $ = u("setReturnFocus", {
      params: [D]
    });
    return $ || ($ === !1 ? !1 : D);
  }, x = function(D) {
    var $ = D.target, Y = D.event, se = D.isBackward, te = se === void 0 ? !1 : se;
    $ = $ || ks(Y), T();
    var ce = null;
    if (s.tabbableGroups.length > 0) {
      var de = d($, Y), we = de >= 0 ? s.containerGroups[de] : void 0;
      if (de < 0)
        te ? ce = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : ce = s.tabbableGroups[0].firstTabbableNode;
      else if (te) {
        var me = s.tabbableGroups.findIndex(function(Nt) {
          var Je = Nt.firstTabbableNode;
          return $ === Je;
        });
        if (me < 0 && (we.container === $ || Hl($, r.tabbableOptions) && !Da($, r.tabbableOptions) && !we.nextTabbableNode($, !1)) && (me = de), me >= 0) {
          var Pe = me === 0 ? s.tabbableGroups.length - 1 : me - 1, Oe = s.tabbableGroups[Pe];
          ce = ra($) >= 0 ? Oe.lastTabbableNode : Oe.lastDomTabbableNode;
        } else Ir(Y) || (ce = we.nextTabbableNode($, !1));
      } else {
        var rt = s.tabbableGroups.findIndex(function(Nt) {
          var Je = Nt.lastTabbableNode;
          return $ === Je;
        });
        if (rt < 0 && (we.container === $ || Hl($, r.tabbableOptions) && !Da($, r.tabbableOptions) && !we.nextTabbableNode($)) && (rt = de), rt >= 0) {
          var ct = rt === s.tabbableGroups.length - 1 ? 0 : rt + 1, ot = s.tabbableGroups[ct];
          ce = ra($) >= 0 ? ot.firstTabbableNode : ot.firstDomTabbableNode;
        } else Ir(Y) || (ce = we.nextTabbableNode($));
      }
    } else
      ce = u("fallbackFocus");
    return ce;
  }, L = function(D) {
    var $ = ks(D);
    if (!(d($, D) >= 0)) {
      if (_r(r.clickOutsideDeactivates, D)) {
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
      _r(r.allowOutsideClick, D) || D.preventDefault();
    }
  }, M = function(D) {
    var $ = ks(D), Y = d($, D) >= 0;
    if (Y || $ instanceof Document)
      Y && (s.mostRecentlyFocusedNode = $);
    else {
      D.stopImmediatePropagation();
      var se, te = !0;
      if (s.mostRecentlyFocusedNode)
        if (ra(s.mostRecentlyFocusedNode) > 0) {
          var ce = d(s.mostRecentlyFocusedNode), de = s.containerGroups[ce].tabbableNodes;
          if (de.length > 0) {
            var we = de.findIndex(function(me) {
              return me === s.mostRecentlyFocusedNode;
            });
            we >= 0 && (r.isKeyForward(s.recentNavEvent) ? we + 1 < de.length && (se = de[we + 1], te = !1) : we - 1 >= 0 && (se = de[we - 1], te = !1));
          }
        } else
          s.containerGroups.some(function(me) {
            return me.tabbableNodes.some(function(Pe) {
              return ra(Pe) > 0;
            });
          }) || (te = !1);
      else
        te = !1;
      te && (se = x({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), O(se || s.mostRecentlyFocusedNode || w());
    }
    s.recentNavEvent = void 0;
  }, G = function(D) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = D;
    var Y = x({
      event: D,
      isBackward: $
    });
    Y && (Ir(D) && D.preventDefault(), O(Y));
  }, F = function(D) {
    (r.isKeyForward(D) || r.isKeyBackward(D)) && G(D, r.isKeyBackward(D));
  }, le = function(D) {
    h_(D) && _r(r.escapeDeactivates, D) !== !1 && (D.preventDefault(), o.deactivate());
  }, fe = function(D) {
    var $ = ks(D);
    d($, D) >= 0 || _r(r.clickOutsideDeactivates, D) || _r(r.allowOutsideClick, D) || (D.preventDefault(), D.stopImmediatePropagation());
  }, ee = function() {
    if (s.active) {
      oi.activateTrap(a, o);
      var D;
      return r.delayInitialFocus ? D = new Promise(function($) {
        s.delayInitialFocusTimer = Md(function() {
          O(w()), $();
        });
      }) : O(w()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", fe, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", le), D;
    }
  }, ne = function(D) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var $ = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), se = Id(D), te;
    try {
      for (se.s(); !(te = se.n()).done; ) {
        var ce = te.value;
        $.add(ce);
        for (var de = typeof ShadowRoot < "u" && ce.getRootNode() instanceof ShadowRoot, we = ce; we; ) {
          $.add(we);
          var me = we.parentElement, Pe = [];
          me ? Pe = me.children : !me && de && (Pe = we.getRootNode().children, me = we.getRootNode().host, de = typeof ShadowRoot < "u" && me.getRootNode() instanceof ShadowRoot);
          var Oe = Id(Pe), rt;
          try {
            for (Oe.s(); !(rt = Oe.n()).done; ) {
              var ct = rt.value;
              Y.add(ct);
            }
          } catch (ot) {
            Oe.e(ot);
          } finally {
            Oe.f();
          }
          we = me;
        }
      }
    } catch (ot) {
      se.e(ot);
    } finally {
      se.f();
    }
    $.forEach(function(ot) {
      Y.delete(ot);
    }), s.adjacentElements = Y;
  }, P = function() {
    if (s.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", L, !0), i.removeEventListener("touchstart", L, !0), i.removeEventListener("click", fe, !0), i.removeEventListener("keydown", F, !0), i.removeEventListener("keydown", le), o;
  }, ae = function(D) {
    var $ = s.mostRecentlyFocusedNode;
    if ($) {
      var Y = D.some(function(te) {
        var ce = Array.from(te.removedNodes);
        return ce.some(function(de) {
          return de === $ || typeof de.contains == "function" && de.contains($);
        });
      });
      if (Y && s.containers.some(function(te) {
        return te?.isConnected;
      })) {
        T();
        var se = w();
        O(se);
      }
    }
  }, he = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(ae) : void 0, Z = function() {
    he && (he.disconnect(), s.active && !s.paused && s.containers.map(function(D) {
      he.observe(D, {
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
    activate: function(D) {
      if (s.active)
        return this;
      var $ = l(D, "onActivate"), Y = l(D, "onPostActivate"), se = l(D, "checkCanFocusTrap"), te = oi.getActiveTrap(a), ce = !1;
      if (te && !te.paused) {
        var de;
        (de = te._setSubtreeIsolation) === null || de === void 0 || de.call(te, !1), ce = !0;
      }
      try {
        se || T(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), $?.({
          trap: o
        });
        var we = function() {
          se && T();
          var Oe = function() {
            o._setSubtreeIsolation(!0), Z(), Y?.({
              trap: o
            });
          }, rt = ee();
          rt ? rt.then(Oe) : Oe();
        };
        if (se)
          return se(s.containers.concat()).then(we, we), this;
        we();
      } catch (Pe) {
        if (te === oi.getActiveTrap(a) && ce) {
          var me;
          (me = te._setSubtreeIsolation) === null || me === void 0 || me.call(te, !0);
        }
        throw Pe;
      }
      return this;
    },
    deactivate: function(D) {
      if (!s.active)
        return this;
      var $ = Dd({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, D);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), P(), s.active = !1, s.paused = !1, Z(), oi.deactivateTrap(a, o);
      var Y = l($, "onDeactivate"), se = l($, "onPostDeactivate"), te = l($, "checkCanReturnFocus"), ce = l($, "delayReturnFocus"), de = l($, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: o
      });
      var we = function() {
        de && O(A(s.nodeFocusedBeforeActivation)), se?.({
          trap: o
        });
      }, me = function() {
        ce && de ? Md(we) : we();
      };
      return de && te ? (te(A(s.nodeFocusedBeforeActivation)).then(me, me), this) : (me(), this);
    },
    pause: function(D) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, D)) : this;
    },
    unpause: function(D) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, D)) : this;
    },
    updateContainerElements: function(D) {
      var $ = [].concat(D).filter(Boolean);
      return s.containers = $.map(function(Y) {
        return typeof Y == "string" ? i.querySelector(Y) : Y;
      }), r.isolateSubtrees && ne(s.containers), s.active && (T(), s.paused || o._setSubtreeIsolation(!0)), Z(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(D, $) {
        if (s.paused === D)
          return this;
        if (s.paused = D, D) {
          var Y = l($, "onPause"), se = l($, "onPostPause");
          Y?.({
            trap: o
          }), P(), o._setSubtreeIsolation(!1), Z(), se?.({
            trap: o
          });
        } else {
          var te = l($, "onUnpause"), ce = l($, "onPostUnpause");
          te?.({
            trap: o
          });
          var de = function() {
            T();
            var me = function() {
              o._setSubtreeIsolation(!0), Z(), ce?.({
                trap: o
              });
            }, Pe = ee();
            Pe ? Pe.then(me) : me();
          };
          de();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(D) {
        r.isolateSubtrees && s.adjacentElements.forEach(function($) {
          var Y;
          D ? r.isolateSubtrees === "aria-hidden" ? (($.ariaHidden === "true" || ((Y = $.getAttribute("aria-hidden")) === null || Y === void 0 ? void 0 : Y.toLowerCase()) === "true") && s.alreadySilent.add($), $.setAttribute("aria-hidden", "true")) : (($.inert || $.hasAttribute("inert")) && s.alreadySilent.add($), $.setAttribute("inert", !0)) : s.alreadySilent.has($) || (r.isolateSubtrees === "aria-hidden" ? $.removeAttribute("aria-hidden") : $.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const np = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), m_ = /* @__PURE__ */ Ot({
  name: "NcAppNavigationList",
  provide() {
    return {
      [np]: {
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
function b_(e, t, n, i, a, r) {
  return y(), E("ul", {
    ref: "list",
    class: Ee(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    c("div", {
      class: Ee(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: on(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Re(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const ip = /* @__PURE__ */ qe(m_, [["render", b_], ["__scopeId", "data-v-3e73e246"]]);
function ts() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function y_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...ts()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === ts().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const ap = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), rp = /* @__PURE__ */ Symbol.for("NcContent:selector");
Bi(iy);
const __ = { class: "app-navigation-toggle-wrapper" }, w_ = /* @__PURE__ */ Ot({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = rh(e, "open"), n = q(() => t.value ? yt("Close navigation") : yt("Open navigation"));
    return (i, a) => (y(), E("div", __, [
      be(g(jn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Ae(() => [
          be(il, {
            path: g(Yb),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), C_ = /* @__PURE__ */ qe(w_, [["__scopeId", "data-v-e8177cc7"]]), S_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], E_ = { class: "app-navigation__search" }, T_ = /* @__PURE__ */ Ot({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Mt(
      ap,
      () => em(),
      !1
    ), a = sg("appNavigationContainer"), r = hs(), s = /* @__PURE__ */ at(!r.value), o = q(() => r.value && s.value);
    Zv(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Ut(r, () => {
      s.value = !r.value;
    }), Ut(o, () => {
      u();
    }), Ui(() => {
      i(!0), zh("toggle-navigation", d), di("navigation-toggled", {
        open: s.value
      }), n = Jc(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: ts(),
        escapeDeactivates: !1
      }), u();
    }), us(() => {
      i(!1), $b("toggle-navigation", d), n.deactivate();
    });
    function l(w) {
      if (s.value === w) {
        di("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = w === void 0 ? !s.value : w;
      const T = getComputedStyle(document.body), O = parseInt(T.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        di("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * O);
    }
    function d({ open: w }) {
      return l(w);
    }
    function u() {
      o.value ? n.activate() : n.deactivate();
    }
    function h() {
      r.value && l(!1);
    }
    return (w, T) => (y(), E("div", {
      ref: "appNavigationContainer",
      class: Ee(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": g(Hi)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: Wt(h, ["esc"])
      }, [
        c("div", E_, [
          Re(w.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !w.$slots.list }])
        }, [
          Re(w.$slots, "default", {}, void 0, !0)
        ], 2),
        w.$slots.list ? (y(), Fe(ip, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Ae(() => [
            Re(w.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : H("", !0),
        Re(w.$slots, "footer", {}, void 0, !0)
      ], 40, S_),
      be(C_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), A_ = /* @__PURE__ */ qe(T_, [["__scopeId", "data-v-37908cd4"]]), k_ = {
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
}, O_ = ["aria-hidden", "aria-label"], N_ = ["fill", "width", "height"], x_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, L_ = { key: 0 };
function R_(e, t, n, i, a, r) {
  return y(), E("span", Bt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", x_, [
        n.title ? (y(), E("title", L_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, N_))
  ], 16, O_);
}
const I_ = /* @__PURE__ */ qe(k_, [["render", R_]]), P_ = {
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
}, D_ = ["aria-hidden", "aria-label"], M_ = ["fill", "width", "height"], $_ = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, F_ = { key: 0 };
function z_(e, t, n, i, a, r) {
  return y(), E("span", Bt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", $_, [
        n.title ? (y(), E("title", F_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, M_))
  ], 16, D_);
}
const U_ = /* @__PURE__ */ qe(P_, [["render", z_]]), B_ = {
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
}, H_ = ["aria-hidden", "aria-label"], j_ = ["fill", "width", "height"], V_ = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, G_ = { key: 0 };
function K_(e, t, n, i, a, r) {
  return y(), E("span", Bt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", V_, [
        n.title ? (y(), E("title", G_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, j_))
  ], 16, H_);
}
const sp = /* @__PURE__ */ qe(B_, [["render", K_]]), W_ = {
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
}, q_ = ["aria-hidden", "aria-label"], Y_ = ["fill", "width", "height"], X_ = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, Z_ = { key: 0 };
function J_(e, t, n, i, a, r) {
  return y(), E("span", Bt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", X_, [
        n.title ? (y(), E("title", Z_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, Y_))
  ], 16, q_);
}
const op = /* @__PURE__ */ qe(W_, [["render", J_]]);
Bi(ty);
const Q_ = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: sp,
    IconClose: op,
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
    return { isLegacy34: Hi };
  },
  data() {
    return {
      labelConfirm: yt("Confirm changes"),
      labelCancel: yt("Cancel changes")
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
}, e1 = ["placeholder"];
function t1(e, t, n, i, a, r) {
  const s = Be("IconArrowRight"), o = Be("NcButton"), l = Be("IconClose");
  return y(), E("div", {
    class: Ee(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = Xe((...d) => r.confirm && r.confirm(...d), ["prevent"])),
      onKeydown: t[2] || (t[2] = Wt(Xe((...d) => r.cancel && r.cancel(...d), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Xe(() => {
      }, ["stop", "prevent"]))
    }, [
      Ge(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.valueModel = d),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, e1), [
        [ti, r.valueModel]
      ]),
      be(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Xe(r.confirm, ["stop", "prevent"])
      }, {
        icon: Ae(() => [
          be(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      be(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Xe(r.cancel, ["stop", "prevent"])
      }, {
        icon: Ae(() => [
          be(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const n1 = /* @__PURE__ */ qe(Q_, [["render", t1], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function al() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Qc = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), lp = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), i1 = {
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
}, cp = {
  mixins: [i1],
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
      from: lp
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
}, a1 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: il
  },
  mixins: [cp],
  inject: {
    isInSemanticMenu: {
      from: Qc,
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
      mdiCheck: Wb,
      mdiChevronRight: qb
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
}, r1 = ["role"], s1 = ["aria-label", "disabled", "title", "type"], o1 = { class: "action-button__longtext-wrapper" }, l1 = {
  key: 0,
  class: "action-button__name"
}, c1 = ["textContent"], u1 = {
  key: 2,
  class: "action-button__text"
}, d1 = ["textContent"], f1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function h1(e, t, n, i, a, r) {
  const s = Be("NcIconSvgWrapper");
  return y(), E("li", {
    class: Ee(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", Bt({
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
      Re(e.$slots, "icon", {}, () => [
        c("span", {
          class: Ee([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", o1, [
        e.name ? (y(), E("strong", l1, p(e.name), 1)) : H("", !0),
        e.isLongText ? (y(), E("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, c1)) : (y(), E("span", u1, p(e.text), 1)),
        n.description ? (y(), E("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, d1)) : H("", !0)
      ]),
      n.isMenu ? (y(), Fe(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (y(), Fe(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (y(), E("span", f1)) : H("", !0),
      H("", !0)
    ], 16, s1)
  ], 10, r1);
}
const p1 = /* @__PURE__ */ qe(a1, [["render", h1], ["__scopeId", "data-v-6c2daf4e"]]);
function v1(e, t = {}) {
  const n = y_();
  Ut(e, () => {
    ci(t.disabled) || (ci(e) ? n.pause() : n.unpause());
  }), us(() => {
    n.unpause();
  });
}
const g1 = ["top", "right", "bottom", "left"], $d = ["start", "end"], Fd = /* @__PURE__ */ g1.reduce((e, t) => e.concat(t, t + "-" + $d[0], t + "-" + $d[1]), []), ns = Math.min, gc = Math.max, m1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function up(e, t, n) {
  return gc(e, ns(t, n));
}
function va(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vi(e) {
  return e.split("-")[0];
}
function kn(e) {
  return e.split("-")[1];
}
function dp(e) {
  return e === "x" ? "y" : "x";
}
function eu(e) {
  return e === "y" ? "height" : "width";
}
function li(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function tu(e) {
  return dp(li(e));
}
function fp(e, t, n) {
  n === void 0 && (n = !1);
  const i = kn(e), a = tu(e), r = eu(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = lo(s)), [s, lo(s)];
}
function b1(e) {
  const t = lo(e);
  return [oo(e), t, oo(t)];
}
function oo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const zd = ["left", "right"], Ud = ["right", "left"], y1 = ["top", "bottom"], _1 = ["bottom", "top"];
function w1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ud : zd : t ? zd : Ud;
    case "left":
    case "right":
      return t ? y1 : _1;
    default:
      return [];
  }
}
function C1(e, t, n, i) {
  const a = kn(e);
  let r = w1(vi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(oo)))), r;
}
function lo(e) {
  const t = vi(e);
  return m1[t] + e.slice(t.length);
}
function S1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function hp(e) {
  return typeof e != "number" ? S1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Pr(e) {
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
function Bd(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = li(t), s = tu(t), o = eu(s), l = vi(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, w = i[o] / 2 - a[o] / 2;
  let T;
  switch (l) {
    case "top":
      T = {
        x: u,
        y: i.y - a.height
      };
      break;
    case "bottom":
      T = {
        x: u,
        y: i.y + i.height
      };
      break;
    case "right":
      T = {
        x: i.x + i.width,
        y: h
      };
      break;
    case "left":
      T = {
        x: i.x - a.width,
        y: h
      };
      break;
    default:
      T = {
        x: i.x,
        y: i.y
      };
  }
  const O = kn(t);
  return O && (T[s] += w * (O === "end" ? 1 : -1) * (n && d ? -1 : 1)), T;
}
async function E1(e, t) {
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
    boundary: d = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: w = !1,
    padding: T = 0
  } = va(t, e), O = hp(T), x = o[w ? h === "floating" ? "reference" : "floating" : h], L = Pr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(x))) == null || n ? x : x.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), M = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, G = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), F = await (r.isElement == null ? void 0 : r.isElement(G)) && await (r.getScale == null ? void 0 : r.getScale(G)) || {
    x: 1,
    y: 1
  }, le = Pr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: M,
    offsetParent: G,
    strategy: l
  }) : M);
  return {
    top: (L.top - le.top + O.top) / F.y,
    bottom: (le.bottom - L.bottom + O.bottom) / F.y,
    left: (L.left - le.left + O.left) / F.x,
    right: (le.right - L.right + O.right) / F.x
  };
}
const T1 = 50, A1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: E1
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = Bd(d, i, l), w = i, T = 0;
  const O = {};
  for (let A = 0; A < r.length; A++) {
    const x = r[A];
    if (!x)
      continue;
    const {
      name: L,
      fn: M
    } = x, {
      x: G,
      y: F,
      data: le,
      reset: fe
    } = await M({
      x: u,
      y: h,
      initialPlacement: i,
      placement: w,
      strategy: a,
      middlewareData: O,
      rects: d,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = G ?? u, h = F ?? h, O[L] = {
      ...O[L],
      ...le
    }, fe && T < T1 && (T++, typeof fe == "object" && (fe.placement && (w = fe.placement), fe.rects && (d = fe.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : fe.rects), {
      x: u,
      y: h
    } = Bd(d, w, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: w,
    strategy: a,
    middlewareData: O
  };
}, k1 = (e) => ({
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
      element: d,
      padding: u = 0
    } = va(e, t) || {};
    if (d == null)
      return {};
    const h = hp(u), w = {
      x: n,
      y: i
    }, T = tu(a), O = eu(T), A = await s.getDimensions(d), x = T === "y", L = x ? "top" : "left", M = x ? "bottom" : "right", G = x ? "clientHeight" : "clientWidth", F = r.reference[O] + r.reference[T] - w[T] - r.floating[O], le = w[T] - r.reference[T], fe = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let ee = fe ? fe[G] : 0;
    (!ee || !await (s.isElement == null ? void 0 : s.isElement(fe))) && (ee = o.floating[G] || r.floating[O]);
    const ne = F / 2 - le / 2, P = ee / 2 - A[O] / 2 - 1, ae = ns(h[L], P), he = ns(h[M], P), Z = ee - A[O] - he, ie = ee / 2 - A[O] / 2 + ne, D = up(ae, ie, Z), $ = !l.arrow && kn(a) != null && ie !== D && r.reference[O] / 2 - (ie < ae ? ae : he) - A[O] / 2 < 0, Y = $ ? ie < ae ? ie - ae : ie - Z : 0;
    return {
      [T]: w[T] + Y,
      data: {
        [T]: D,
        centerOffset: ie - D - Y,
        ...$ && {
          alignmentOffset: Y
        }
      },
      reset: $
    };
  }
});
function O1(e, t, n) {
  return (e ? [...n.filter((a) => kn(a) === e), ...n.filter((a) => kn(a) !== e)] : n.filter((a) => vi(a) === a)).filter((a) => e ? kn(a) === e || (t ? oo(a) !== a : !1) : !0);
}
const N1 = function(e) {
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
        elements: d
      } = t, {
        crossAxis: u = !1,
        alignment: h,
        allowedPlacements: w = Fd,
        autoAlignment: T = !0,
        ...O
      } = va(e, t), A = h !== void 0 || w === Fd ? O1(h || null, T, w) : w, x = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, L = A[x];
      if (L == null)
        return {};
      if (o !== L)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await l.detectOverflow(t, O), G = fp(L, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), F = [M[vi(L)], M[G[0]], M[G[1]]], le = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: L,
        overflows: F
      }], fe = A[x + 1];
      if (fe)
        return {
          data: {
            index: x + 1,
            overflows: le
          },
          reset: {
            placement: fe
          }
        };
      const ee = le.map((ae) => {
        const he = kn(ae.placement);
        return [ae.placement, he && u ? (
          // Check along the mainAxis and main crossAxis side.
          ae.overflows.slice(0, 2).reduce((Z, ie) => Z + ie, 0)
        ) : (
          // Check only the mainAxis.
          ae.overflows[0]
        ), ae.overflows];
      }).sort((ae, he) => ae[1] - he[1]), P = ((a = ee.filter((ae) => ae[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        kn(ae[0]) ? 2 : 3
      ).every((he) => he <= 0))[0]) == null ? void 0 : a[0]) || ee[0][0];
      return P !== o ? {
        data: {
          index: x + 1,
          overflows: le
        },
        reset: {
          placement: P
        }
      } : {};
    }
  };
}, x1 = function(e) {
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
        elements: d
      } = t, {
        mainAxis: u = !0,
        crossAxis: h = !0,
        fallbackPlacements: w,
        fallbackStrategy: T = "bestFit",
        fallbackAxisSideDirection: O = "none",
        flipAlignment: A = !0,
        ...x
      } = va(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const L = vi(a), M = li(o), G = vi(o) === o, F = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), le = w || (G || !A ? [lo(o)] : b1(o)), fe = O !== "none";
      !w && fe && le.push(...C1(o, A, O, F));
      const ee = [o, ...le], ne = await l.detectOverflow(t, x), P = [];
      let ae = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && P.push(ne[L]), h) {
        const D = fp(a, s, F);
        P.push(ne[D[0]], ne[D[1]]);
      }
      if (ae = [...ae, {
        placement: a,
        overflows: P
      }], !P.every((D) => D <= 0)) {
        var he, Z;
        const D = (((he = r.flip) == null ? void 0 : he.index) || 0) + 1, $ = ee[D];
        if ($ && (!(h === "alignment" ? M !== li($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        ae.every((te) => li(te.placement) === M ? te.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: ae
            },
            reset: {
              placement: $
            }
          };
        let Y = (Z = ae.filter((se) => se.overflows[0] <= 0).sort((se, te) => se.overflows[1] - te.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!Y)
          switch (T) {
            case "bestFit": {
              var ie;
              const se = (ie = ae.filter((te) => {
                if (fe) {
                  const ce = li(te.placement);
                  return ce === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ce === "y";
                }
                return !0;
              }).map((te) => [te.placement, te.overflows.filter((ce) => ce > 0).reduce((ce, de) => ce + de, 0)]).sort((te, ce) => te[1] - ce[1])[0]) == null ? void 0 : ie[0];
              se && (Y = se);
              break;
            }
            case "initialPlacement":
              Y = o;
              break;
          }
        if (a !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
}, L1 = /* @__PURE__ */ new Set(["left", "top"]);
async function R1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = vi(n), o = kn(n), l = li(n) === "y", d = L1.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = va(t, e);
  let {
    mainAxis: w,
    crossAxis: T,
    alignmentAxis: O
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return o && typeof O == "number" && (T = o === "end" ? O * -1 : O), l ? {
    x: T * u,
    y: w * d
  } : {
    x: w * d,
    y: T * u
  };
}
const I1 = function(e) {
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
      } = t, l = await R1(t, e);
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
}, P1 = function(e) {
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
          fn: (M) => {
            let {
              x: G,
              y: F
            } = M;
            return {
              x: G,
              y: F
            };
          }
        },
        ...d
      } = va(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, d), w = li(a), T = dp(w);
      let O = u[T], A = u[w];
      const x = (M, G) => up(G + h[M === "y" ? "top" : "left"], G, G - h[M === "y" ? "bottom" : "right"]);
      s && (O = x(T, O)), o && (A = x(w, A));
      const L = l.fn({
        ...t,
        [T]: O,
        [w]: A
      });
      return {
        ...L,
        data: {
          x: L.x - n,
          y: L.y - i,
          enabled: {
            [T]: s,
            [w]: o
          }
        }
      };
    }
  };
}, D1 = function(e) {
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
      } = va(e, t), l = await a.detectOverflow(t, o), d = vi(n), u = kn(n), h = li(n) === "y", {
        width: w,
        height: T
      } = i.floating;
      let O, A;
      d === "top" || d === "bottom" ? (O = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, O = u === "end" ? "top" : "bottom");
      const x = T - l.top - l.bottom, L = w - l.left - l.right, M = ns(T - l[O], x), G = ns(w - l[A], L), F = t.middlewareData.shift, le = !F;
      let fe = M, ee = G;
      F != null && F.enabled.x && (ee = L), F != null && F.enabled.y && (fe = x), le && !u && (h ? ee = w - 2 * gc(l.left, l.right) : fe = T - 2 * gc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: ee,
        availableHeight: fe
      });
      const ne = await a.getDimensions(r.floating);
      return w !== ne.width || T !== ne.height ? {
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
function Vn(e) {
  return mn(e).getComputedStyle(e);
}
const Hd = Math.min, Dr = Math.max, co = Math.round;
function pp(e) {
  const t = Vn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = co(n) !== a || co(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function zi(e) {
  return gp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Os;
function vp() {
  if (Os) return Os;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Os = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Os) : navigator.userAgent;
}
function Gn(e) {
  return e instanceof mn(e).HTMLElement;
}
function Pi(e) {
  return e instanceof mn(e).Element;
}
function gp(e) {
  return e instanceof mn(e).Node;
}
function jd(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof mn(e).ShadowRoot || e instanceof ShadowRoot;
}
function rl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Vn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function M1(e) {
  return ["table", "td", "th"].includes(zi(e));
}
function mc(e) {
  const t = /firefox/i.test(vp()), n = Vn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function mp() {
  return !/^((?!chrome|android).)*safari/i.test(vp());
}
function nu(e) {
  return ["html", "body", "#document"].includes(zi(e));
}
function bp(e) {
  return Pi(e) ? e : e.contextElement;
}
const yp = { x: 1, y: 1 };
function Wa(e) {
  const t = bp(e);
  if (!Gn(t)) return yp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = pp(t);
  let s = (r ? co(n.width) : n.width) / i, o = (r ? co(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function is(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = bp(e);
  let l = yp;
  t && (i ? Pi(i) && (l = Wa(i)) : l = Wa(e));
  const d = o ? mn(o) : window, u = !mp() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, w = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, T = s.width / l.x, O = s.height / l.y;
  if (o) {
    const A = mn(o), x = i && Pi(i) ? mn(i) : i;
    let L = A.frameElement;
    for (; L && i && x !== A; ) {
      const M = Wa(L), G = L.getBoundingClientRect(), F = getComputedStyle(L);
      G.x += (L.clientLeft + parseFloat(F.paddingLeft)) * M.x, G.y += (L.clientTop + parseFloat(F.paddingTop)) * M.y, h *= M.x, w *= M.y, T *= M.x, O *= M.y, h += G.x, w += G.y, L = mn(L).frameElement;
    }
  }
  return { width: T, height: O, top: w, right: h + T, bottom: w + O, left: h, x: h, y: w };
}
function Di(e) {
  return ((gp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function sl(e) {
  return Pi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function _p(e) {
  return is(Di(e)).left + sl(e).scrollLeft;
}
function as(e) {
  if (zi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || jd(e) && e.host || Di(e);
  return jd(t) ? t.host : t;
}
function wp(e) {
  const t = as(e);
  return nu(t) ? t.ownerDocument.body : Gn(t) && rl(t) ? t : wp(t);
}
function uo(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = wp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = mn(i);
  return a ? t.concat(r, r.visualViewport || [], rl(i) ? i : []) : t.concat(i, uo(i));
}
function Vd(e, t, n) {
  return t === "viewport" ? Pr((function(i, a) {
    const r = mn(i), s = Di(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const w = mp();
      (w || !w && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : Pi(t) ? Pr((function(i, a) {
    const r = is(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Gn(i) ? Wa(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Pr((function(i) {
    const a = Di(i), r = sl(i), s = i.ownerDocument.body, o = Dr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Dr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + _p(i);
    const u = -r.scrollTop;
    return Vn(s).direction === "rtl" && (d += Dr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })(Di(e)));
}
function Gd(e) {
  return Gn(e) && Vn(e).position !== "fixed" ? e.offsetParent : null;
}
function Kd(e) {
  const t = mn(e);
  let n = Gd(e);
  for (; n && M1(n) && Vn(n).position === "static"; ) n = Gd(n);
  return n && (zi(n) === "html" || zi(n) === "body" && Vn(n).position === "static" && !mc(n)) ? t : n || (function(i) {
    let a = as(i);
    for (; Gn(a) && !nu(a); ) {
      if (mc(a)) return a;
      a = as(a);
    }
    return null;
  })(e) || t;
}
function $1(e, t, n) {
  const i = Gn(t), a = Di(t), r = is(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((zi(t) !== "body" || rl(a)) && (s = sl(t)), Gn(t)) {
    const l = is(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = _p(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const F1 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let w = uo(d).filter(((x) => Pi(x) && zi(x) !== "body")), T = null;
    const O = Vn(d).position === "fixed";
    let A = O ? as(d) : d;
    for (; Pi(A) && !nu(A); ) {
      const x = Vn(A), L = mc(A);
      (O ? L || T : L || x.position !== "static" || !T || !["absolute", "fixed"].includes(T.position)) ? T = x : w = w.filter(((M) => M !== A)), A = as(A);
    }
    return u.set(d, w), w;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = Vd(t, u, a);
    return d.top = Dr(h.top, d.top), d.right = Hd(h.right, d.right), d.bottom = Hd(h.bottom, d.bottom), d.left = Dr(h.left, d.left), d;
  }), Vd(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Gn(n), r = Di(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((zi(n) !== "body" || rl(r)) && (s = sl(n)), Gn(n))) {
    const d = is(n);
    o = Wa(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Pi, getDimensions: function(e) {
  return Gn(e) ? pp(e) : e.getBoundingClientRect();
}, getOffsetParent: Kd, getDocumentElement: Di, getScale: Wa, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Kd, r = this.getDimensions;
  return { reference: $1(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Vn(e).direction === "rtl" }, z1 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: F1, ...n }, r = { ...a.platform, _c: i };
  return A1(e, t, { ...a, platform: r });
}, Mi = {
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
function bc(e, t) {
  let n = Mi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Mi.themes[n.$extend] || {} : (n = null, i = Mi[t]) : n = null;
  while (n);
  return i;
}
function U1(e) {
  const t = [e];
  let n = Mi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Mi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Wd(e) {
  const t = [e];
  let n = Mi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Mi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let rs = !1;
if (typeof window < "u") {
  rs = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        rs = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Cp = !1;
typeof window < "u" && typeof navigator < "u" && (Cp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const B1 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), qd = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Yd = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Xd(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function jl() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Tn = [];
let Qi = null;
const Zd = {};
function Jd(e) {
  let t = Zd[e];
  return t || (t = Zd[e] = []), t;
}
let yc = function() {
};
typeof window < "u" && (yc = window.Element);
function Ue(e) {
  return function(t) {
    return bc(t.theme, e);
  };
}
const Vl = "__floating-vue__popper", Sp = () => /* @__PURE__ */ Ot({
  name: "VPopper",
  provide() {
    return {
      [Vl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Vl]: { default: null }
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
      default: Ue("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Ue("positioningDisabled")
    },
    placement: {
      type: String,
      default: Ue("placement"),
      validator: (e) => B1.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Ue("delay")
    },
    distance: {
      type: [Number, String],
      default: Ue("distance")
    },
    skidding: {
      type: [Number, String],
      default: Ue("skidding")
    },
    triggers: {
      type: Array,
      default: Ue("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Ue("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Ue("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Ue("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Ue("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Ue("popperHideTriggers")
    },
    container: {
      type: [String, Object, yc, Boolean],
      default: Ue("container")
    },
    boundary: {
      type: [String, yc],
      default: Ue("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Ue("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Ue("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Ue("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Ue("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Ue("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Ue("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Ue("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Ue("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Ue("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Ue("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Ue("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Ue("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Ue("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Ue("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Ue("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Ue("flip")
    },
    shift: {
      type: Boolean,
      default: Ue("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Ue("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Ue("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Ue("disposeTimeout")
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
      return (e = this[Vl]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(I1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(N1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(P1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(x1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(k1({
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
            let l, d;
            return r.startsWith("top") || r.startsWith("bottom") ? l = a.reference.width : d = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = d != null ? `${d}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(D1({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await z1(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Qi && this.instantMove && Qi.instantMove && Qi !== this.parentPopper) {
        Qi.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Qi = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await jl(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...uo(this.$_referenceNode),
        ...uo(this.$_popperNode)
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
        for (let n = 0; n < Tn.length; n++)
          t = Tn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Tn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Wd(this.theme))
        Jd(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await jl(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Xd(Tn, this), Tn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Wd(this.theme)) {
        const i = Jd(n);
        Xd(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      Qi === this && (Qi = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await jl(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, qd, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], qd, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Yd, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Yd, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, rs ? {
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
      if (Mr >= e.left && Mr <= e.right && $r >= e.top && $r <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Mr - Ni, i = $r - xi, a = t.left + t.width / 2 - Ni + (t.top + t.height / 2) - xi + t.width + t.height, r = Ni + n * a, s = xi + i * a;
        return Ns(Ni, xi, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Ns(Ni, xi, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Ns(Ni, xi, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Ns(Ni, xi, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Cp) {
    const e = rs ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Qd(t), e), document.addEventListener("touchend", (t) => ef(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Qd(e), !0), window.addEventListener("click", (e) => ef(e, !1), !0);
  window.addEventListener("resize", V1);
}
function Qd(e, t) {
  for (let n = 0; n < Tn.length; n++) {
    const i = Tn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function ef(e, t) {
  H1(e, t);
}
function H1(e, t) {
  const n = {};
  for (let i = Tn.length - 1; i >= 0; i--) {
    const a = Tn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && tf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && tf(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function tf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || j1(e, n) && !t;
}
function j1(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function V1() {
  for (let e = 0; e < Tn.length; e++)
    Tn[e].$_computePosition();
}
let Ni = 0, xi = 0, Mr = 0, $r = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ni = Mr, xi = $r, Mr = e.clientX, $r = e.clientY;
}, rs ? {
  passive: !0
} : void 0);
function Ns(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const G1 = {
  extends: Sp()
}, iu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function K1(e, t, n, i, a, r) {
  return y(), E("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Re(e.$slots, "default", Fs(Zr(e.slotData)))
  ], 2);
}
const W1 = /* @__PURE__ */ iu(G1, [["render", K1]]);
function q1() {
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
let Ms;
function _c() {
  _c.init || (_c.init = !0, Ms = q1() !== -1);
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
    _c(), Hn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ms && this.$el.appendChild(e), e.data = "about:blank", Ms || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Ms && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Y1 = /* @__PURE__ */ qv();
Kv("data-v-b329ee4c");
const X1 = {
  class: "resize-observer",
  tabindex: "-1"
};
Wv();
const Z1 = /* @__PURE__ */ Y1((e, t, n, i, a, r) => (y(), Fe("div", X1)));
ol.render = Z1;
ol.__scopeId = "data-v-b329ee4c";
ol.__file = "src/components/ResizeObserver.vue";
const Ep = (e = "theme") => ({
  computed: {
    themeClass() {
      return U1(this[e]);
    }
  }
}), J1 = /* @__PURE__ */ Ot({
  name: "VPopperContent",
  components: {
    ResizeObserver: ol
  },
  mixins: [
    Ep()
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
}), Q1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], e0 = {
  ref: "inner",
  class: "v-popper__inner"
}, t0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), n0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), i0 = [
  t0,
  n0
];
function a0(e, t, n, i, a, r) {
  const s = Be("ResizeObserver");
  return y(), E("div", {
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
    style: on(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Wt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    c("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (o) => e.autoHide && e.$emit("hide"))
    }),
    c("div", {
      class: "v-popper__wrapper",
      style: on(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", e0, [
        e.mounted ? (y(), E(ue, { key: 0 }, [
          c("div", null, [
            Re(e.$slots, "default")
          ]),
          e.handleResize ? (y(), Fe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : H("", !0)
        ], 64)) : H("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: on(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, i0, 4)
    ], 4)
  ], 46, Q1);
}
const Tp = /* @__PURE__ */ iu(J1, [["render", a0]]), Ap = {
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
let wc = function() {
};
typeof window < "u" && (wc = window.Element);
const r0 = /* @__PURE__ */ Ot({
  name: "VPopperWrapper",
  components: {
    Popper: W1,
    PopperContent: Tp
  },
  mixins: [
    Ap,
    Ep("finalTheme")
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
      type: [String, Object, wc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, wc],
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
function s0(e, t, n, i, a, r) {
  const s = Be("PopperContent"), o = Be("Popper");
  return y(), Fe(o, Bt({ ref: "popper" }, e.$props, {
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
    default: Ae(({
      popperId: l,
      isShown: d,
      shouldMountContent: u,
      skipTransition: h,
      autoHide: w,
      show: T,
      hide: O,
      handleResize: A,
      onResize: x,
      classes: L,
      result: M
    }) => [
      Re(e.$slots, "default", {
        shown: d,
        show: T,
        hide: O
      }),
      be(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: d,
        mounted: u,
        "skip-transition": h,
        "auto-hide": w,
        "handle-resize": A,
        classes: L,
        result: M,
        onHide: O,
        onResize: x
      }, {
        default: Ae(() => [
          Re(e.$slots, "popper", {
            shown: d,
            hide: O
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const au = /* @__PURE__ */ iu(r0, [["render", s0]]), o0 = {
  ...au,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...au
});
({
  ...au
});
Sp();
const nf = Mi, l0 = o0, c0 = /* @__PURE__ */ Ot({
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
}), u0 = "_ncPopover_qgtYg", d0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: u0
}, kp = "nc-popover-9";
nf.themes[kp] = structuredClone(nf.themes.dropdown);
const f0 = {
  name: "NcPopover",
  components: {
    Dropdown: l0,
    NcPopoverTriggerProvider: c0
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
      theme: kp
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
      return this.placement === "start" ? hc ? "right" : "left" : this.placement === "end" ? hc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Jc(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: ts(),
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
        da.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function h0(e, t, n, i, a, r) {
  const s = Be("NcPopoverTriggerProvider"), o = Be("Dropdown");
  return y(), Fe(o, {
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
    popper: Ae((l) => [
      Re(e.$slots, "default", Fs(Zr(l)))
    ]),
    default: Ae(() => [
      be(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Ae((l) => [
          Re(e.$slots, "trigger", Fs(Zr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const p0 = {
  $style: d0
}, af = /* @__PURE__ */ qe(f0, [["render", h0], ["__cssModules", p0]]), v0 = {
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
}, g0 = ["aria-hidden", "aria-label"], m0 = ["fill", "width", "height"], b0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, y0 = { key: 0 };
function _0(e, t, n, i, a, r) {
  return y(), E("span", Bt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", b0, [
        n.title ? (y(), E("title", y0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, m0))
  ], 16, g0);
}
const w0 = /* @__PURE__ */ qe(v0, [["render", _0]]);
Bi(ey);
function ru(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === At)
        return !1;
      if (n.type === ue && !ru(n.children))
        return !1;
      if (n.type === ds && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const C0 = ".focusable", S0 = {
  name: "NcActions",
  components: {
    NcButton: jn,
    NcPopover: af
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
      [Qc]: q(() => this.actionsMenuSemanticType === "menu"),
      [lp]: this.closeMenu
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
      default: yt("Actions")
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
      randomId: al()
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
    v1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(C0);
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
    const e = [], t = (T, O) => {
      T.forEach((A) => {
        if (this.isAction(A)) {
          O.push(A);
          return;
        }
        A.type === ue && t(A.children, O);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((T) => !i.includes(T)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((T) => s.includes(this.getActionName(T))), d = a.some((T) => r.includes(this.getActionName(T))), u = a.some((T) => o.includes(this.getActionName(T)));
    l ? this.actionsMenuSemanticType = "dialog" : d ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((O) => this.getActionName(O).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (T) => {
      const O = T?.props?.icon, A = T?.children?.icon?.()?.[0] ?? (this.isIconUrl(O) ? Xt("img", { class: "action-item__menutoggle__icon", src: O, alt: "" }) : Xt("span", { class: ["icon", O] })), x = T?.children?.default?.()?.[0]?.children?.trim(), L = this.forceName ? x : "";
      let M = T?.props?.title;
      this.forceName || M || (M = x);
      const G = { ...T?.props ?? {} }, F = ["submit", "reset"].includes(G.type) ? G.modelValue : "button";
      return delete G.modelValue, delete G.type, Xt(
        jn,
        Bt(
          G,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": T?.props?.["aria-label"] || x,
            title: M,
            disabled: this.disabled || T?.props?.disabled,
            pressed: T?.props?.modelValue,
            size: this.size,
            type: F,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (L ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": T?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => L,
          icon: () => A
        }
      );
    }, w = (T) => {
      const O = ru(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Xt("span", { class: ["icon", this.defaultIcon] }) : Xt(w0, { size: 20 }), A = `${this.randomId}-trigger`;
      return Xt(
        af,
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
            icon: () => O,
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
              T
            ])
          ])
        }
      );
    };
    return e.length === 1 && n.length === 1 && !this.forceMenu ? h(e[0]) : (this.$nextTick(() => {
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
        ...i.map(h),
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
          [w(a)]
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
        w(e)
      ]
    ));
  }
}, fo = /* @__PURE__ */ qe(S0, [["__scopeId", "data-v-7206c1f1"]]), E0 = ["aria-label"], T0 = ["width", "height"], A0 = ["fill"], k0 = ["fill"], O0 = { key: 0 }, N0 = /* @__PURE__ */ Ot({
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
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, A0),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (y(), E("title", O0, p(e.name), 1)) : H("", !0)
        ], 8, k0)
      ], 8, T0))
    ], 8, E0));
  }
}), Op = /* @__PURE__ */ qe(N0, [["__scopeId", "data-v-cf399190"]]), Cc = /* @__PURE__ */ Ot({
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
}), x0 = {
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
}, L0 = ["aria-hidden", "aria-label"], R0 = ["fill", "width", "height"], I0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, P0 = { key: 0 };
function D0(e, t, n, i, a, r) {
  return y(), E("span", Bt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", I0, [
        n.title ? (y(), E("title", P0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, R0))
  ], 16, L0);
}
const M0 = /* @__PURE__ */ qe(x0, [["render", D0]]), $0 = {
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
}, F0 = ["aria-hidden", "aria-label"], z0 = ["fill", "width", "height"], U0 = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, B0 = { key: 0 };
function H0(e, t, n, i, a, r) {
  return y(), E("span", Bt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", U0, [
        n.title ? (y(), E("title", B0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, z0))
  ], 16, F0);
}
const j0 = /* @__PURE__ */ qe($0, [["render", H0]]);
Bi(ay);
const V0 = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: jn,
    ChevronDown: I_,
    ChevronUp: U_
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
    return { isLegacy34: Hi };
  },
  computed: {
    labelButton() {
      return this.open ? yt("Collapse menu") : yt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function G0(e, t, n, i, a, r) {
  const s = Be("ChevronUp"), o = Be("ChevronDown"), l = Be("NcButton");
  return y(), Fe(l, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Ae(() => [
      n.open ? (y(), Fe(s, {
        key: 0,
        size: 20
      })) : (y(), Fe(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const K0 = /* @__PURE__ */ qe(V0, [["render", G0], ["__scopeId", "data-v-cfbd3794"]]);
Bi(ry, ly);
const W0 = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: fo,
    NcActionButton: p1,
    NcAppNavigationIconCollapsible: K0,
    NcInputConfirmCancel: n1,
    NcLoadingIcon: Op,
    NcVNodes: Cc,
    Pencil: M0,
    Undo: j0
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: np, default: null }
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
      default: () => al(),
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
      isMobile: hs(),
      isLegacy34: Hi
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
      return this.editLabel ? this.editLabel : yt("Edit item");
    },
    undoButtonAriaLabel() {
      return yt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && di("toggle-navigation", { open: !1 }));
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
}, q0 = ["id"], Y0 = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], X0 = {
  key: 0,
  class: "editingContainer"
}, Z0 = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, J0 = { class: "app-navigation-entry__deleted-description" }, Q0 = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, ew = {
  key: 0,
  class: "app-navigation-entry__children"
};
function tw(e, t, n, i, a, r) {
  const s = Be("NcLoadingIcon"), o = Be("NcInputConfirmCancel"), l = Be("Pencil"), d = Be("NcActionButton"), u = Be("Undo"), h = Be("NcActions"), w = Be("NcAppNavigationIconCollapsible");
  return y(), E("li", {
    id: n.id,
    class: Ee([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (y(), Fe(Hc(r.isRouterLink ? "router-link" : "NcVNodes"), Fs(Zr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Ae(({ href: T, navigate: O, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: Ee(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...x) => r.requestHighlight && r.requestHighlight(...x)),
          onFocusin: t[5] || (t[5] = (...x) => r.requestHighlight && r.requestHighlight(...x))
        }, [
          n.undo ? H("", !0) : (y(), E("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && A ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || T || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...x) => r.handleBlur && r.handleBlur(...x)),
            onClick: (x) => r.onClick(x, O, T),
            onFocus: t[2] || (t[2] = (...x) => r.handleFocus && r.handleFocus(...x)),
            onKeydown: t[3] || (t[3] = Wt(Xe((...x) => r.handleTab && r.handleTab(...x), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Ee(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (y(), Fe(s, { key: 0 })) : Re(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (y(), E("div", X0, [
              be(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (x) => a.editingValue = x),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : H("", !0)
          ], 40, Y0)),
          n.undo ? (y(), E("div", Z0, [
            c("div", J0, p(n.name), 1)
          ])) : H("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (y(), E("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (y(), E("div", Q0, [
              Re(e.$slots, "counter", {}, void 0, !0)
            ])) : H("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (y(), Fe(h, {
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
              icon: Ae(() => [
                Re(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Ae(() => [
                n.editable && !a.editingActive ? (y(), Fe(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Ae(() => [
                    be(l, { size: 20 })
                  ]),
                  default: Ae(() => [
                    ke(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                n.undo ? (y(), Fe(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Ae(() => [
                    be(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                Re(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : H("", !0)
          ], 2)) : H("", !0),
          n.allowCollapse && e.$slots.default ? (y(), Fe(w, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Xe(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : H("", !0),
          Re(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (y(), E("ul", ew, [
      Re(e.$slots, "default", {}, void 0, !0)
    ])) : H("", !0)
  ], 10, q0);
}
const rf = /* @__PURE__ */ qe(W0, [["render", tw], ["__scopeId", "data-v-01bef41b"]]), Gl = /* @__PURE__ */ new WeakMap(), nw = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Nd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Nd(e, a, Object.assign({ capture: n }, r));
    }
    Gl.set(e, i);
  },
  unmounted(e) {
    const t = Gl.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Gl.delete(e);
  }
}, iw = {
  mounted(e) {
    e.focus();
  }
}, aw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", rw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Sc = "numeric", Ec = "ascii", Tc = "alpha", Fr = "asciinumeric", kr = "alphanumeric", Ac = "domain", Np = "emoji", sw = "scheme", ow = "slashscheme", Kl = "whitespace";
function lw(e, t) {
  return e in t || (t[e] = []), t[e];
}
function oa(e, t, n) {
  t[Sc] && (t[Fr] = !0, t[kr] = !0), t[Ec] && (t[Fr] = !0, t[Tc] = !0), t[Fr] && (t[kr] = !0), t[Tc] && (t[kr] = !0), t[kr] && (t[Ac] = !0), t[Np] && (t[Ac] = !0);
  for (const i in t) {
    const a = lw(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function cw(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function rn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
rn.groups = {};
rn.prototype = {
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
    i = i || rn.groups;
    let a;
    return t && t.j ? a = t : (a = new rn(t), n && i && oa(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || rn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new rn(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new rn(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(cw(s.t, i), n);
          oa(r, l, i);
        } else n && oa(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ie = (e, t, n, i, a) => e.ta(t, n, i, a), st = (e, t, n, i, a) => e.tr(t, n, i, a), sf = (e, t, n, i, a) => e.ts(t, n, i, a), Q = (e, t, n, i, a) => e.tt(t, n, i, a), ni = "WORD", kc = "UWORD", xp = "ASCIINUMERICAL", Lp = "ALPHANUMERICAL", ss = "LOCALHOST", Oc = "TLD", Nc = "UTLD", $s = "SCHEME", za = "SLASH_SCHEME", su = "NUM", xc = "WS", ou = "NL", zr = "OPENBRACE", Ur = "CLOSEBRACE", ho = "OPENBRACKET", po = "CLOSEBRACKET", vo = "OPENPAREN", go = "CLOSEPAREN", mo = "OPENANGLEBRACKET", bo = "CLOSEANGLEBRACKET", yo = "FULLWIDTHLEFTPAREN", _o = "FULLWIDTHRIGHTPAREN", wo = "LEFTCORNERBRACKET", Co = "RIGHTCORNERBRACKET", So = "LEFTWHITECORNERBRACKET", Eo = "RIGHTWHITECORNERBRACKET", To = "FULLWIDTHLESSTHAN", Ao = "FULLWIDTHGREATERTHAN", ko = "AMPERSAND", Oo = "APOSTROPHE", No = "ASTERISK", Ri = "AT", xo = "BACKSLASH", Lo = "BACKTICK", Ro = "CARET", la = "COLON", lu = "COMMA", Io = "DOLLAR", Fn = "DOT", Po = "EQUALS", cu = "EXCLAMATION", pn = "HYPHEN", Br = "PERCENT", Do = "PIPE", Mo = "PLUS", $o = "POUND", Hr = "QUERY", uu = "QUOTE", Rp = "FULLWIDTHMIDDLEDOT", du = "SEMI", zn = "SLASH", jr = "TILDE", Fo = "UNDERSCORE", Ip = "EMOJI", zo = "SYM";
var Pp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Lp,
  AMPERSAND: ko,
  APOSTROPHE: Oo,
  ASCIINUMERICAL: xp,
  ASTERISK: No,
  AT: Ri,
  BACKSLASH: xo,
  BACKTICK: Lo,
  CARET: Ro,
  CLOSEANGLEBRACKET: bo,
  CLOSEBRACE: Ur,
  CLOSEBRACKET: po,
  CLOSEPAREN: go,
  COLON: la,
  COMMA: lu,
  DOLLAR: Io,
  DOT: Fn,
  EMOJI: Ip,
  EQUALS: Po,
  EXCLAMATION: cu,
  FULLWIDTHGREATERTHAN: Ao,
  FULLWIDTHLEFTPAREN: yo,
  FULLWIDTHLESSTHAN: To,
  FULLWIDTHMIDDLEDOT: Rp,
  FULLWIDTHRIGHTPAREN: _o,
  HYPHEN: pn,
  LEFTCORNERBRACKET: wo,
  LEFTWHITECORNERBRACKET: So,
  LOCALHOST: ss,
  NL: ou,
  NUM: su,
  OPENANGLEBRACKET: mo,
  OPENBRACE: zr,
  OPENBRACKET: ho,
  OPENPAREN: vo,
  PERCENT: Br,
  PIPE: Do,
  PLUS: Mo,
  POUND: $o,
  QUERY: Hr,
  QUOTE: uu,
  RIGHTCORNERBRACKET: Co,
  RIGHTWHITECORNERBRACKET: Eo,
  SCHEME: $s,
  SEMI: du,
  SLASH: zn,
  SLASH_SCHEME: za,
  SYM: zo,
  TILDE: jr,
  TLD: Oc,
  UNDERSCORE: Fo,
  UTLD: Nc,
  UWORD: kc,
  WORD: ni,
  WS: xc
});
const Qn = /[a-z]/, wr = new RegExp("\\p{L}", "u"), Wl = new RegExp("\\p{Emoji}", "u"), ei = /\d/, ql = /\s/, of = "\r", Yl = `
`, uw = "️", dw = "‍", Xl = "￼";
let xs = null, Ls = null;
function fw(e = []) {
  const t = {};
  rn.groups = t;
  const n = new rn();
  xs == null && (xs = lf(aw)), Ls == null && (Ls = lf(rw)), Q(n, "'", Oo), Q(n, "{", zr), Q(n, "}", Ur), Q(n, "[", ho), Q(n, "]", po), Q(n, "(", vo), Q(n, ")", go), Q(n, "<", mo), Q(n, ">", bo), Q(n, "（", yo), Q(n, "）", _o), Q(n, "「", wo), Q(n, "」", Co), Q(n, "『", So), Q(n, "』", Eo), Q(n, "＜", To), Q(n, "＞", Ao), Q(n, "&", ko), Q(n, "*", No), Q(n, "@", Ri), Q(n, "`", Lo), Q(n, "^", Ro), Q(n, ":", la), Q(n, ",", lu), Q(n, "$", Io), Q(n, ".", Fn), Q(n, "=", Po), Q(n, "!", cu), Q(n, "-", pn), Q(n, "%", Br), Q(n, "|", Do), Q(n, "+", Mo), Q(n, "#", $o), Q(n, "?", Hr), Q(n, '"', uu), Q(n, "/", zn), Q(n, ";", du), Q(n, "~", jr), Q(n, "_", Fo), Q(n, "\\", xo), Q(n, "・", Rp);
  const i = st(n, ei, su, {
    [Sc]: !0
  });
  st(i, ei, i);
  const a = st(i, Qn, xp, {
    [Fr]: !0
  }), r = st(i, wr, Lp, {
    [kr]: !0
  }), s = st(n, Qn, ni, {
    [Ec]: !0
  });
  st(s, ei, a), st(s, Qn, s), st(a, ei, a), st(a, Qn, a);
  const o = st(n, wr, kc, {
    [Tc]: !0
  });
  st(o, Qn), st(o, ei, r), st(o, wr, o), st(r, ei, r), st(r, Qn), st(r, wr, r);
  const l = Q(n, Yl, ou, {
    [Kl]: !0
  }), d = Q(n, of, xc, {
    [Kl]: !0
  }), u = st(n, ql, xc, {
    [Kl]: !0
  });
  Q(n, Xl, u), Q(d, Yl, l), Q(d, Xl, u), st(d, ql, u), Q(u, of), Q(u, Yl), st(u, ql, u), Q(u, Xl, u);
  const h = st(n, Wl, Ip, {
    [Np]: !0
  });
  Q(h, "#"), st(h, Wl, h), Q(h, uw, h);
  const w = Q(h, dw);
  Q(w, "#"), st(w, Wl, h);
  const T = [[Qn, s], [ei, a]], O = [[Qn, null], [wr, o], [ei, r]];
  for (let A = 0; A < xs.length; A++)
    ki(n, xs[A], Oc, ni, T);
  for (let A = 0; A < Ls.length; A++)
    ki(n, Ls[A], Nc, kc, O);
  oa(Oc, {
    tld: !0,
    ascii: !0
  }, t), oa(Nc, {
    utld: !0,
    alpha: !0
  }, t), ki(n, "file", $s, ni, T), ki(n, "mailto", $s, ni, T), ki(n, "http", za, ni, T), ki(n, "https", za, ni, T), ki(n, "ftp", za, ni, T), ki(n, "ftps", za, ni, T), oa($s, {
    scheme: !0,
    ascii: !0
  }, t), oa(za, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, x) => A[0] > x[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const x = e[A][0], M = e[A][1] ? {
      [sw]: !0
    } : {
      [ow]: !0
    };
    x.indexOf("-") >= 0 ? M[Ac] = !0 : Qn.test(x) ? ei.test(x) ? M[Fr] = !0 : M[Ec] = !0 : M[Sc] = !0, sf(n, x, x, M);
  }
  return sf(n, "localhost", ss, {
    ascii: !0
  }), n.jd = new rn(zo), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Pp)
  };
}
function Dp(e, t) {
  const n = hw(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
  let r = 0, s = 0;
  for (; s < i; ) {
    let o = e, l = null, d = 0, u = null, h = -1, w = -1;
    for (; s < i && (l = o.go(n[s])); )
      o = l, o.accepts() ? (h = 0, w = 0, u = o) : h >= 0 && (h += n[s].length, w++), d += n[s].length, r += n[s].length, s++;
    r -= h, s -= w, d -= h, a.push({
      t: u.t,
      // token type/name
      v: t.slice(r - d, r),
      // string value
      s: r - d,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function hw(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function ki(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new rn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new rn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function lf(e) {
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
const os = {
  defaultProtocol: "http",
  events: null,
  format: cf,
  formatHref: cf,
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
function fu(e, t = null) {
  let n = Object.assign({}, os);
  e && (n = Object.assign(n, e instanceof fu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
fu.prototype = {
  o: os,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : os[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function cf(e) {
  return e;
}
function Mp(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
Mp.prototype = {
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
  toObject(e = os.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), s = {}, o = e.get("className", n, t), l = e.get("target", n, t), d = e.get("rel", n, t), u = e.getObj("attributes", n, t), h = e.getObj("events", n, t);
    return s.href = i, o && (s.class = o), l && (s.target = l), d && (s.rel = d), u && Object.assign(s, u), {
      tagName: a,
      attributes: s,
      content: r,
      eventListeners: h
    };
  }
};
function ll(e, t) {
  class n extends Mp {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const pw = ll("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), uf = ll("text"), vw = ll("nl"), Rs = ll("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = os.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== ss && e[1].t === la;
  }
}), hn = (e) => new rn(e);
function gw({
  groups: e
}) {
  const t = e.domain.concat([ko, No, Ri, xo, Lo, Ro, Io, Po, pn, su, Br, Do, Mo, $o, zn, zo, jr, Fo]), n = [Oo, la, lu, Fn, cu, Br, Hr, uu, du, mo, bo, zr, Ur, po, ho, vo, go, yo, _o, wo, Co, So, Eo, To, Ao], i = [ko, Oo, No, xo, Lo, Ro, Io, Po, pn, zr, Ur, Br, Do, Mo, $o, Hr, zn, zo, jr, Fo], a = hn(), r = Q(a, jr);
  Ie(r, i, r), Ie(r, e.domain, r);
  const s = hn(), o = hn(), l = hn();
  Ie(a, e.domain, s), Ie(a, e.scheme, o), Ie(a, e.slashscheme, l), Ie(s, i, r), Ie(s, e.domain, s);
  const d = Q(s, Ri);
  Q(r, Ri, d), Q(o, Ri, d), Q(l, Ri, d);
  const u = Q(r, Fn);
  Ie(u, i, r), Ie(u, e.domain, r);
  const h = hn();
  Ie(d, e.domain, h), Ie(h, e.domain, h);
  const w = Q(h, Fn);
  Ie(w, e.domain, h);
  const T = hn(pw);
  Ie(w, e.tld, T), Ie(w, e.utld, T), Q(d, ss, T);
  const O = Q(h, pn);
  Q(O, pn, O), Ie(O, e.domain, h), Ie(T, e.domain, h), Q(T, Fn, w), Q(T, pn, O);
  const A = Q(s, pn), x = Q(s, Fn);
  Q(A, pn, A), Ie(A, e.domain, s), Ie(x, i, r), Ie(x, e.domain, s);
  const L = hn(Rs);
  Ie(x, e.tld, L), Ie(x, e.utld, L), Ie(L, e.domain, s), Ie(L, i, r), Q(L, Fn, x), Q(L, pn, A), Q(L, Ri, d);
  const M = Q(L, la), G = hn(Rs);
  Ie(M, e.numeric, G);
  const F = hn(Rs), le = hn();
  Ie(F, t, F), Ie(F, n, le), Ie(le, t, F), Ie(le, n, le), Q(L, zn, F), Q(G, zn, F);
  const fe = Q(o, la), ee = Q(l, la), ne = Q(ee, zn), P = Q(ne, zn);
  Ie(o, e.domain, s), Q(o, Fn, x), Q(o, pn, A), Ie(l, e.domain, s), Q(l, Fn, x), Q(l, pn, A), Ie(fe, e.domain, F), Q(fe, zn, F), Q(fe, Hr, F), Ie(P, e.domain, F), Ie(P, t, F), Q(P, zn, F);
  const ae = [
    [zr, Ur],
    // {}
    [ho, po],
    // []
    [vo, go],
    // ()
    [mo, bo],
    // <>
    [yo, _o],
    // （）
    [wo, Co],
    // 「」
    [So, Eo],
    // 『』
    [To, Ao]
    // ＜＞
  ];
  for (let he = 0; he < ae.length; he++) {
    const [Z, ie] = ae[he], D = Q(F, Z);
    Q(le, Z, D);
    const $ = hn(Rs);
    Ie(D, t, $);
    const Y = hn();
    Ie(D, n, Y), Q(D, ie, F), Ie($, t, $), Ie($, n, Y), Ie(Y, t, $), Ie(Y, n, Y), Q($, ie, F), Q(Y, ie, F);
  }
  return Q(a, ss, L), Q(a, ou, vw), {
    start: a,
    tokens: Pp
  };
}
function mw(e, t, n) {
  let i = n.length, a = 0, r = [], s = [];
  for (; a < i; ) {
    let o = e, l = null, d = null, u = 0, h = null, w = -1;
    for (; a < i && !(l = o.go(n[a].t)); )
      s.push(n[a++]);
    for (; a < i && (d = l || o.go(n[a].t)); )
      l = null, o = d, o.accepts() ? (w = 0, h = o) : w >= 0 && w++, a++, u++;
    if (w < 0)
      a -= u, a < i && (s.push(n[a]), a++);
    else {
      s.length > 0 && (r.push(Zl(uf, t, s)), s = []), a -= w, u -= w;
      const T = h.t, O = n.slice(a - u, a);
      r.push(Zl(T, t, O));
    }
  }
  return s.length > 0 && r.push(Zl(uf, t, s)), r;
}
function Zl(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const It = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function bw() {
  It.scanner = fw(It.customSchemes);
  for (let e = 0; e < It.tokenQueue.length; e++)
    It.tokenQueue[e][1]({
      scanner: It.scanner
    });
  It.parser = gw(It.scanner.tokens);
  for (let e = 0; e < It.pluginQueue.length; e++)
    It.pluginQueue[e][1]({
      scanner: It.scanner,
      parser: It.parser
    });
  return It.initialized = !0, It;
}
function $p(e) {
  return It.initialized || bw(), mw(It.parser.start, e, Dp(It.scanner.start, e));
}
$p.scan = Dp;
function yw(e) {
  const t = new fu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, Cw), n = $p(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Qs(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function _w(e) {
  return e.replace(/"/g, "&quot;");
}
function ww(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${_w(i)}"`);
  }
  return t.join(" ");
}
function Cw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${ww(t)}>${Qs(n)}</${e}>`;
}
const Sw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = yw(t.text));
}, Ew = ["title"], Tw = /* @__PURE__ */ Ot({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Mt("NcAppSidebar:header:ref");
    return (n, i) => Ge((y(), E("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ke(p(e.name), 1)
    ], 8, Ew)), [
      [g(Sw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), Aw = ["aria-labelledby"], kw = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, Ow = ["id"], Nw = {
  key: 2,
  class: "empty-content__description"
}, xw = {
  key: 3,
  class: "empty-content__action"
}, Lw = /* @__PURE__ */ Ot({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = al();
    return (n, i) => (y(), E("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (y(), E("div", kw, [
        Re(n.$slots, "icon", {}, void 0, !0)
      ])) : H("", !0),
      e.name !== "" || n.$slots.name ? (y(), E("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Re(n.$slots, "name", {}, () => [
          ke(p(e.name), 1)
        ], !0)
      ], 8, Ow)) : H("", !0),
      e.description !== "" || n.$slots.description ? (y(), E("p", Nw, [
        Re(n.$slots, "description", {}, () => [
          ke(p(e.description), 1)
        ], !0)
      ])) : H("", !0),
      n.$slots.action ? (y(), E("div", xw, [
        Re(n.$slots, "action", {}, void 0, !0)
      ])) : H("", !0)
    ], 8, Aw));
  }
}), Rw = /* @__PURE__ */ qe(Lw, [["__scopeId", "data-v-8609a4c1"]]), Iw = {
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
}, Pw = ["aria-hidden", "aria-label"], Dw = ["fill", "width", "height"], Mw = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, $w = { key: 0 };
function Fw(e, t, n, i, a, r) {
  return y(), E("span", Bt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Mw, [
        n.title ? (y(), E("title", $w, p(n.title), 1)) : H("", !0)
      ])
    ], 8, Dw))
  ], 16, Pw);
}
const zw = /* @__PURE__ */ qe(Iw, [["render", Fw]]), Uw = {
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
}, Bw = ["aria-hidden", "aria-label"], Hw = ["fill", "width", "height"], jw = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, Vw = { key: 0 };
function Gw(e, t, n, i, a, r) {
  return y(), E("span", Bt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", jw, [
        n.title ? (y(), E("title", Vw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, Hw))
  ], 16, Bw);
}
const Kw = /* @__PURE__ */ qe(Uw, [["render", Gw]]), Ww = {
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
}, qw = ["aria-hidden", "aria-label"], Yw = ["fill", "width", "height"], Xw = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, Zw = { key: 0 };
function Jw(e, t, n, i, a, r) {
  return y(), E("span", Bt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Xw, [
        n.title ? (y(), E("title", Zw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, Yw))
  ], 16, qw);
}
const Qw = /* @__PURE__ */ qe(Ww, [["render", Jw]]), eC = ["aria-selected", "tabindex"], tC = /* @__PURE__ */ Ot({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ yg({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = rh(e, "selected"), n = /* @__PURE__ */ at(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (y(), E("button", {
      class: Ee(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Hi),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      c("span", {
        class: Ee([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        c("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          be(Cc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Ae(() => [
              c("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        c("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          be(Cc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Ae(() => [
              c("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      c("span", {
        class: Ee(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, eC));
  }
}), nC = "_sidebarTabsButton_q3kBA", iC = "_sidebarTabsButton_legacy_KQ4d1", aC = "_sidebarTabsButton_selected_Pjayf", rC = "_sidebarTabsButton_animatedHighlight_uvp-0", sC = "_sidebarTabsButton__name_rlQsL", oC = "_sidebarTabsButton__icon_QzZg4", lC = "_sidebarTabsButton__iconLayer_ZkZan", cC = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", uC = "_sidebarTabsButton__icon_pop_IA0By", dC = "_sidebarTabsButton__legacyIcon_QhcNW", fC = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: nC,
  sidebarTabsButton_legacy: iC,
  sidebarTabsButton_selected: aC,
  sidebarTabsButton_animatedHighlight: rC,
  sidebarTabsButton__name: sC,
  sidebarTabsButton__icon: oC,
  sidebarTabsButton__iconLayer: lC,
  sidebarTabsButton__iconLayer_hidden: cC,
  sidebarTabsButton__icon_pop: uC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: dC
}, hC = {
  $style: fC
}, pC = /* @__PURE__ */ qe(tC, [["__cssModules", hC]]), vC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: pC
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
      isLegacy34: Hi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [wb()]) : t.order - n.order), this.updateActive();
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
}, gC = { class: "app-sidebar-tabs" };
function mC(e, t, n, i, a, r) {
  const s = Be("NcAppSidebarTabsButton");
  return y(), E("div", gC, [
    r.hasMultipleTabs || r.showForSingleTab ? (y(), E("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ee(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = Wt(Xe((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = Wt(Xe((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = Wt(Xe((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = Wt(Xe((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = Wt(Xe((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = Wt(Xe((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = Wt(Xe((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (y(), E("div", {
        key: 0,
        class: Ee(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: on(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : H("", !0),
      (y(!0), E(ue, null, $e(a.tabs, (o) => (y(), Fe(s, {
        id: `tab-button-${o.id}`,
        key: o.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${o.id}`,
        selected: a.activeTab === o.id,
        animatedHighlight: a.highlightEnabled,
        tab: o,
        "onUpdate:selected": (l) => r.setActive(o.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : H("", !0),
    c("div", {
      class: Ee(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Re(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const bC = /* @__PURE__ */ qe(vC, [["render", mC], ["__scopeId", "data-v-74190d2a"]]);
Bi(ny);
const yC = {
  name: "NcAppSidebar",
  components: {
    NcActions: fo,
    NcAppSidebarHeader: Tw,
    NcAppSidebarTabs: bC,
    NcButton: jn,
    NcLoadingIcon: Op,
    NcEmptyContent: Rw,
    IconArrowRight: sp,
    IconClose: op,
    IconDockRight: zw,
    IconStar: Kw,
    IconStarOutline: Qw
  },
  directives: {
    Focus: iw,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: nw
  },
  inject: {
    ncContentSelector: {
      from: rp,
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
    const e = /* @__PURE__ */ at(null);
    return vn("NcAppSidebar:header:ref", e), {
      uid: al(),
      isMobile: Xb(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: yt("Change name"),
      closeTranslated: yt("Close sidebar"),
      favoriteTranslated: yt("Favorite"),
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
    isSlotPopulated: ru,
    t: yt,
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
      this.focusTrap || (this.focusTrap = Jc([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: ts(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && da.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, _C = ["aria-labelledby"], wC = { class: "app-sidebar-header__info" }, CC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, SC = { class: "app-sidebar-header__name-container" }, EC = { class: "app-sidebar-header__mainname-container" }, TC = ["placeholder", "value"], AC = ["title"], kC = {
  key: 2,
  class: "app-sidebar-header__description"
};
function OC(e, t, n, i, a, r) {
  const s = Be("IconDockRight"), o = Be("NcButton"), l = Be("NcLoadingIcon"), d = Be("IconStar"), u = Be("IconStarOutline"), h = Be("NcAppSidebarHeader"), w = Be("IconArrowRight"), T = Be("NcActions"), O = Be("IconClose"), A = Be("NcAppSidebarTabs"), x = Be("NcEmptyContent"), L = Ou("focus"), M = Ou("click-outside");
  return y(), Fe(sm, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Ae(() => [
      Ge(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = Wt((...G) => r.onKeydownEsc && r.onKeydownEsc(...G), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (y(), Fe(jf, {
          key: 0,
          to: r.ncContentSelector
        }, [
          be(o, Bt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (G) => e.$emit("update:open", !0))
          }), {
            icon: Ae(() => [
              Re(e.$slots, "toggle-icon", {}, () => [
                be(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : H("", !0),
        c("header", {
          class: Ee(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (y(), Fe(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Re(e.$slots, "info", { key: 0 }, () => [
            c("div", wC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (y(), E("div", {
                key: 0,
                class: Ee(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: on({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...G) => r.onFigureClick && r.onFigureClick(...G)),
                onKeydown: t[2] || (t[2] = Wt((...G) => r.onFigureClick && r.onFigureClick(...G), ["enter"]))
              }, [
                Re(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : H("", !0),
              c("div", {
                class: Ee(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (y(), E("div", CC, [
                  Re(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (y(), Fe(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Xe(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Ae(() => [
                        n.starLoading ? (y(), Fe(l, { key: 0 })) : a.isStarred ? (y(), Fe(d, {
                          key: 1,
                          size: 20
                        })) : (y(), Fe(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : H("", !0)
                  ], !0)
                ])) : H("", !0),
                c("div", SC, [
                  c("div", EC, [
                    Ge(be(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Xe(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Va, !n.nameEditable]
                    ]),
                    n.nameEditable ? Ge((y(), E("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Xe((...G) => r.onSubmitName && r.onSubmitName(...G), ["prevent"]))
                    }, [
                      Ge(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = Wt(Xe((...G) => r.onDismissEditing && r.onDismissEditing(...G), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...G) => r.onNameInput && r.onNameInput(...G))
                      }, null, 40, TC), [
                        [L]
                      ]),
                      be(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Ae(() => [
                          be(w, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : H("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (y(), Fe(T, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Ae(() => [
                        Re(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : H("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (y(), E("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Re(e.$slots, "subname", {}, () => [
                      ke(p(n.subname), 1)
                    ], !0)
                  ], 8, AC)) : H("", !0)
                ])
              ], 2)
            ])
          ], !0),
          be(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Xe(r.closeSidebar, ["prevent"])
          }, {
            icon: Ae(() => [
              be(O, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (y(), E("div", kC, [
            Re(e.$slots, "description", {}, void 0, !0)
          ])) : H("", !0)
        ], 2),
        Ge(be(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Ae(() => [
            Re(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Va, !n.loading]
        ]),
        n.loading ? (y(), Fe(x, { key: 1 }, {
          icon: Ae(() => [
            be(l, { size: 64 })
          ]),
          _: 1
        })) : H("", !0)
      ], 40, _C), [
        [Va, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const NC = /* @__PURE__ */ qe(yC, [["render", OC], ["__scopeId", "data-v-c2c6820b"]]), xC = {
  name: "NcActionLink",
  mixins: [cp],
  inject: {
    isInSemanticMenu: {
      from: Qc,
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
}, LC = ["role"], RC = ["download", "href", "aria-label", "target", "title", "role"], IC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, PC = { class: "action-link__name" }, DC = ["textContent"], MC = ["textContent"], $C = {
  key: 2,
  class: "action-link__text"
};
function FC(e, t, n, i, a, r) {
  return y(), E("li", {
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
      Re(e.$slots, "icon", {}, () => [
        c("span", {
          "aria-hidden": "true",
          class: Ee(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (y(), E("span", IC, [
        c("strong", PC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, DC)
      ])) : e.isLongText ? (y(), E("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, MC)) : (y(), E("span", $C, p(e.text), 1)),
      H("", !0)
    ], 8, RC)
  ], 8, LC);
}
const Ma = /* @__PURE__ */ qe(xC, [["render", FC], ["__scopeId", "data-v-32f01b7a"]]);
Bi(oy);
const zC = `<!--
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
`, UC = `<!--
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
`, BC = { class: "vue-skip-actions__container" }, HC = { class: "vue-skip-actions__headline" }, jC = { class: "vue-skip-actions__buttons" }, VC = /* @__PURE__ */ Ot({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    vn(ap, o), vn(rp, "#content-vue"), vn("appName", q(() => t.appName));
    const n = hs(), i = /* @__PURE__ */ at(!1), a = /* @__PURE__ */ at(), r = q(() => a.value === "navigation" ? UC : zC);
    Zf(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      di("toggle-navigation", { open: !0 }), Hn(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, d) => (y(), E("div", {
      id: "content-vue",
      class: Ee(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Hi) }]])
    }, [
      (y(), Fe(jf, { to: "#skip-actions" }, [
        c("div", BC, [
          c("div", HC, p(g(yt)("Keyboard navigation help")), 1),
          c("div", jC, [
            Ge(be(jn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Xe(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: Ae(() => [
                ke(p(g(yt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Va, i.value]
            ]),
            be(jn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: Ae(() => [
                ke(p(g(yt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Ge(be(il, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Va, !g(n)]
          ])
        ])
      ])),
      Re(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), GC = /* @__PURE__ */ qe(VC, [["__scopeId", "data-v-d13dcb98"]]), KC = ["href"], WC = ["lang", "dir"], qC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, YC = { class: "library-review-header" }, XC = { class: "library-muted library-catalogue-eyebrow" }, ZC = { id: "library-review-heading" }, JC = ["aria-label"], QC = ["href", "aria-current"], eS = ["aria-label"], tS = ["name", "value"], nS = {
  type: "submit",
  class: "button secondary"
}, iS = ["aria-busy"], aS = { key: 0 }, rS = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, sS = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, oS = { class: "library-metadata-review-workbench-copy" }, lS = { class: "library-muted library-catalogue-eyebrow" }, cS = ["title"], uS = {
  key: 0,
  class: "library-metadata-review-card"
}, dS = {
  class: "library-bidi-human",
  dir: "auto"
}, fS = { class: "library-muted" }, hS = {
  class: "library-bidi-machine",
  dir: "ltr"
}, pS = { class: "library-metadata-review-fields" }, vS = {
  class: "library-bidi-human",
  dir: "auto"
}, gS = {
  class: "library-bidi-human",
  dir: "auto"
}, mS = {
  class: "library-bidi-human",
  dir: "auto"
}, bS = {
  class: "library-bidi-machine",
  dir: "ltr"
}, yS = {
  class: "library-bidi-human",
  dir: "auto"
}, _S = {
  class: "library-bidi-human",
  dir: "auto"
}, wS = ["action"], CS = ["value"], SS = ["value"], ES = {
  type: "submit",
  class: "button secondary"
}, TS = { class: "library-metadata-review-actions" }, AS = ["href"], kS = ["href"], OS = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, NS = ["href"], xS = ["aria-label"], LS = ["onClick"], RS = {
  class: "library-bidi-human",
  dir: "auto"
}, IS = {
  key: 0,
  class: "library-muted"
}, PS = {
  class: "library-bidi-human",
  dir: "auto"
}, DS = {
  key: 1,
  class: "library-scan-error"
}, MS = {
  class: "library-bidi-human",
  dir: "auto"
}, $S = ["onClick"], FS = ["href"], zS = ["aria-label"], US = ["href"], BS = {
  key: 1,
  class: "library-muted"
}, HS = { key: 0 }, jS = ["href"], VS = {
  key: 3,
  class: "library-muted"
}, GS = {
  key: 1,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, KS = { class: "library-home-header" }, WS = { class: "library-muted library-catalogue-eyebrow" }, qS = { id: "library-home-heading" }, YS = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, XS = { id: "library-continue-heading" }, ZS = { class: "library-muted" }, JS = ["href"], QS = {
  key: 0,
  class: "library-home-card-row"
}, eE = ["onClick"], tE = { class: "library-cover-frame" }, nE = ["src"], iE = { class: "library-cover-summary" }, aE = ["onClick"], rE = { dir: "auto" }, sE = {
  key: 0,
  class: "library-cover-creator"
}, oE = { dir: "auto" }, lE = ["href"], cE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, uE = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, dE = { id: "library-recent-heading" }, fE = { class: "library-muted" }, hE = ["href"], pE = {
  key: 0,
  class: "library-home-card-row"
}, vE = ["onClick"], gE = { class: "library-cover-frame" }, mE = ["src"], bE = { class: "library-cover-summary" }, yE = ["onClick"], _E = { dir: "auto" }, wE = {
  key: 0,
  class: "library-cover-creator"
}, CE = { dir: "auto" }, SE = ["href"], EE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, TE = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, AE = { id: "library-home-shelves-heading" }, kE = { class: "library-muted" }, OE = ["href"], NE = ["aria-label"], xE = ["href"], LE = { dir: "auto" }, RE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, IE = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, PE = { id: "library-home-attention-heading" }, DE = { class: "library-muted" }, ME = ["href"], $E = {
  key: 2,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, FE = { class: "library-home-header" }, zE = { class: "library-muted library-catalogue-eyebrow" }, UE = { id: "library-shelves-landing-heading" }, BE = { class: "library-muted" }, HE = ["aria-label"], jE = ["href"], VE = { class: "library-shelf-summary-title" }, GE = { dir: "auto" }, KE = { class: "library-muted" }, WE = { dir: "auto" }, qE = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, YE = { class: "library-muted" }, XE = { class: "library-empty-actions" }, ZE = ["href"], JE = ["href"], QE = {
  key: 3,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, eT = { class: "library-catalogue-header" }, tT = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, nT = { id: "library-catalogue-heading" }, iT = ["aria-label"], aT = ["aria-label"], rT = ["name", "value"], sT = { class: "library-quick-search-row" }, oT = ["title"], lT = ["placeholder"], cT = { "data-library-control": "sort" }, uT = { value: "title" }, dT = { value: "recent" }, fT = { value: "publicationDate" }, hT = { value: "publication" }, pT = { value: "lastOpened" }, vT = { value: "format" }, gT = ["aria-label"], mT = ["aria-pressed"], bT = ["aria-pressed"], yT = ["aria-pressed"], _T = ["aria-pressed"], wT = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine",
  "data-library-control": "filter"
}, CT = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, ST = ["title", "aria-label"], ET = { class: "library-workspace-scope-badge" }, TT = ["aria-label"], AT = { value: "" }, kT = ["value"], OT = { value: "" }, NT = ["value"], xT = { class: "library-publication-filter" }, LT = { for: "library-publication-search" }, RT = ["placeholder", "aria-expanded"], IT = ["value"], PT = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, DT = ["onClick"], MT = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, $T = { value: "" }, FT = ["value"], zT = ["title"], UT = { value: "" }, BT = ["value"], HT = ["placeholder"], jT = { value: "" }, VT = ["value"], GT = { value: "" }, KT = ["value"], WT = { value: "" }, qT = ["value"], YT = { value: "" }, XT = ["value"], ZT = { value: "" }, JT = ["value"], QT = { value: "" }, eA = ["value"], tA = { value: "" }, nA = { value: "1" }, iA = {
  type: "submit",
  class: "button primary"
}, aA = {
  href: "?",
  class: "button secondary"
}, rA = {
  id: "library-shelves",
  class: "library-navigation-section library-discovery-shortcuts",
  "aria-labelledby": "library-shelves-heading"
}, sA = { id: "library-shelves-heading" }, oA = { class: "library-shortcut-selectors" }, lA = {
  key: 0,
  class: "library-shortcut-select-card library-year-groups"
}, cA = { value: "" }, uA = ["value"], dA = {
  key: 1,
  class: "library-shortcut-select-card library-creator-groups"
}, fA = { value: "" }, hA = ["value"], pA = {
  id: "library-collections",
  class: "library-saved-collections"
}, vA = ["title"], gA = ["action", "title"], mA = ["value"], bA = ["value"], yA = ["placeholder", "disabled"], _A = ["disabled", "title"], wA = ["aria-label"], CA = ["href"], SA = ["action"], EA = ["value"], TA = {
  type: "submit",
  class: "button tertiary"
}, AA = ["aria-label"], kA = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, OA = ["title"], NA = { class: "library-workspace-panel-purpose" }, xA = { class: "library-workspace-scope-badge" }, LA = { "aria-live": "polite" }, RA = ["action"], IA = ["value"], PA = ["placeholder"], DA = ["title"], MA = ["action"], $A = ["value"], FA = ["placeholder"], zA = ["title"], UA = ["action"], BA = ["value"], HA = ["name", "value"], jA = ["title"], VA = ["action"], GA = ["value"], KA = ["name", "value"], WA = { name: "bulkEditField" }, qA = { value: "publicationType" }, YA = { value: "subtitle" }, XA = { value: "creators" }, ZA = { value: "publication" }, JA = { value: "publicationDate" }, QA = { value: "language" }, e2 = { value: "publisher" }, t2 = { value: "genres" }, n2 = { value: "classifications" }, i2 = ["placeholder"], a2 = ["title"], r2 = ["action"], s2 = ["value"], o2 = ["name", "value"], l2 = ["title"], c2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, u2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, d2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, f2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, h2 = { class: "library-muted library-catalogue-eyebrow" }, p2 = ["title"], v2 = ["aria-label"], g2 = { key: 0 }, m2 = { key: 1 }, b2 = { key: 2 }, y2 = ["aria-label"], _2 = { key: 0 }, w2 = { key: 1 }, C2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, S2 = { class: "library-muted library-catalogue-eyebrow" }, E2 = ["title"], T2 = ["aria-label"], A2 = ["href"], k2 = {
  key: 0,
  class: "library-notice"
}, O2 = { class: "library-publication-issue-label" }, N2 = ["href"], x2 = { class: "library-muted" }, L2 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, R2 = ["title"], I2 = ["href"], P2 = { class: "library-catalogue-status-row" }, D2 = { class: "library-muted library-filter-result-summary" }, M2 = { key: 0 }, $2 = { href: "?" }, F2 = ["aria-label"], z2 = { class: "library-pagination-range" }, U2 = { key: 0 }, B2 = ["href"], H2 = {
  key: 1,
  class: "library-muted"
}, j2 = ["href"], V2 = {
  key: 3,
  class: "library-muted"
}, G2 = ["aria-label"], K2 = ["href", "aria-label", "onClick"], W2 = ["title"], q2 = { class: "library-empty-actions" }, Y2 = ["href"], X2 = { class: "library-muted" }, Z2 = ["title"], J2 = { class: "library-empty-actions" }, Q2 = ["href"], ek = ["title"], tk = { class: "library-empty-actions" }, nk = ["href"], ik = {
  href: "?",
  class: "button primary"
}, ak = ["title"], rk = { class: "library-empty-actions" }, sk = ["href"], ok = {
  key: 6,
  class: "library-select-visible"
}, lk = ["checked"], ck = {
  key: 7,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, uk = { class: "library-item-selection" }, dk = ["checked", "aria-label", "onChange"], fk = { class: "library-catalogue-list-main" }, hk = ["onClick"], pk = {
  class: "library-bidi-human",
  dir: "auto"
}, vk = {
  key: 0,
  class: "library-muted"
}, gk = {
  class: "library-bidi-human",
  dir: "auto"
}, mk = { class: "library-catalogue-list-metadata" }, bk = { key: 0 }, yk = {
  class: "library-bidi-human",
  dir: "auto"
}, _k = { key: 1 }, wk = { key: 2 }, Ck = ["dir"], Sk = { key: 3 }, Ek = {
  class: "library-bidi-human",
  dir: "auto"
}, Tk = { class: "library-catalogue-list-actions" }, Ak = ["href"], kk = ["onClick"], Ok = { class: "library-item-selection" }, Nk = ["checked", "aria-label", "onChange"], xk = ["aria-labelledby", "aria-expanded", "onClick"], Lk = ["id"], Rk = { class: "library-cover-frame" }, Ik = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, Pk = ["src", "onLoad", "onError"], Dk = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, Mk = ["action", "onSubmit"], $k = ["value"], Fk = ["value"], zk = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], Uk = ["data-library-star-error"], Bk = { class: "library-cover-summary" }, Hk = { class: "library-cover-primary" }, jk = ["id"], Vk = ["onClick"], Gk = {
  class: "library-bidi-human",
  dir: "auto"
}, Kk = {
  key: 0,
  class: "library-cover-creator"
}, Wk = {
  class: "library-bidi-human",
  dir: "auto"
}, qk = {
  key: 1,
  class: "library-cover-badges"
}, Yk = {
  key: 0,
  class: "library-cover-badge"
}, Xk = {
  class: "library-bidi-machine",
  dir: "ltr"
}, Zk = {
  key: 1,
  class: "library-cover-context"
}, Jk = {
  class: "library-bidi-human",
  dir: "auto"
}, Qk = { class: "library-cover-primary-actions" }, eO = ["href"], tO = ["aria-label"], nO = { class: "library-pagination-range" }, iO = { key: 0 }, aO = ["href"], rO = {
  key: 1,
  class: "library-muted"
}, sO = ["href"], oO = {
  key: 3,
  class: "library-muted"
}, lO = { class: "library-sidebar-content" }, cO = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, uO = ["role"], dO = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, fO = { class: "library-sidebar-publication-header" }, hO = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, pO = ["src"], vO = { class: "library-sidebar-publication-summary" }, gO = { class: "library-muted library-catalogue-eyebrow" }, mO = {
  class: "library-bidi-human",
  dir: "auto"
}, bO = { key: 0 }, yO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, _O = { class: "library-detail-drawer-actions" }, wO = ["href"], CO = ["aria-label"], SO = ["aria-current", "onClick"], EO = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, TO = { id: "library-sidebar-overview-heading" }, AO = {
  key: 0,
  class: "library-sidebar-description"
}, kO = {
  class: "library-bidi-human",
  dir: "auto"
}, OO = { class: "library-detail-drawer-facts" }, NO = { key: 0 }, xO = { key: 1 }, LO = { key: 2 }, RO = { key: 3 }, IO = { key: 4 }, PO = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, DO = { id: "library-sidebar-metadata-heading" }, MO = ["placeholder"], $O = ["onUpdate:modelValue", "aria-label", "placeholder"], FO = ["onUpdate:modelValue", "aria-label"], zO = ["onClick"], UO = { class: "library-muted" }, BO = {
  key: 0,
  role: "alert"
}, HO = {
  key: 1,
  role: "status"
}, jO = ["disabled"], VO = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, GO = { id: "library-sidebar-suggestions-heading" }, KO = { class: "library-muted" }, WO = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, qO = { id: "library-sidebar-activity-heading" }, YO = { class: "library-detail-drawer-facts" }, XO = { key: 0 }, ZO = { key: 1 }, JO = { key: 2 }, QO = { dir: "ltr" }, eN = ["aria-label"], tN = ["disabled"], nN = ["disabled"], iN = 20, aN = "/apps/library", rN = 2147483647, sN = {
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
    function r(C, S) {
      return Object.prototype.hasOwnProperty.call(a, C) && String(S ?? "").trim() === a[C];
    }
    function s(C) {
      const S = new URLSearchParams(C);
      for (const f of Object.keys(a)) {
        const B = [...new Set([...S.keys()].filter((Le) => Le === f || Le.startsWith(`${f}[`)))], ge = B.reduce((Le, it) => Le + S.getAll(it).length, 0);
        if (ge > 1 || B.some((Le) => Le !== f)) {
          for (const Le of B) S.delete(Le);
          continue;
        }
        f !== "status" && ge === 1 && !r(f, S.get(f)) && S.delete(f);
      }
      return S;
    }
    function o(C) {
      return Object.keys(a).some((S) => C.getAll(S).length === 1 && r(S, C.get(S)));
    }
    function l(C) {
      return Object.fromEntries(Object.entries(C || {}).filter(([S, f]) => S === "status" || !Object.prototype.hasOwnProperty.call(a, S) || r(S, f)));
    }
    const d = /* @__PURE__ */ Pt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Pt((d.items || []).map((C) => ({ ...C }))), h = q(() => u), w = q(() => d.shelves || []), T = q(() => d.formats || []), O = q(() => d.publicationTypes?.length ? d.publicationTypes : n), A = q(() => d.publishers || []), x = q(() => d.publications || []), L = q(() => d.publicationIssueContext || null), M = q(() => d.publicationYears || []), G = q(() => d.creators || []), F = q(() => d.scanStatuses || []), le = q(() => d.workflowStatuses || []), fe = q(() => d.genres || []), ee = q(() => d.classifications || []), ne = q(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), P = /* @__PURE__ */ Pt({
      q: d.activeFilters?.q || "",
      view: d.activeFilters?.view || "compact",
      type: d.activeFilters?.type || "",
      publisher: d.activeFilters?.publisher || "",
      publication: d.activeFilters?.publication || "",
      year: d.activeFilters?.year || "",
      creator: d.activeFilters?.creator || "",
      format: d.activeFilters?.format || "",
      tag: d.activeFilters?.tag || "",
      shelf: d.activeFilters?.shelf || "",
      status: d.activeFilters?.status || "",
      workflowStatus: d.activeFilters?.workflowStatus || "",
      genre: d.activeFilters?.genre || "",
      classification: d.activeFilters?.classification || "",
      scannerConflicts: d.activeFilters?.scannerConflicts || "",
      starred: d.activeFilters?.starred || "",
      needsMetadata: d.activeFilters?.needsMetadata || "",
      coverReview: d.activeFilters?.coverReview || "",
      noCreator: d.activeFilters?.noCreator || "",
      noPublication: d.activeFilters?.noPublication || "",
      noDate: d.activeFilters?.noDate || "",
      titleFromFilename: d.activeFilters?.titleFromFilename || "",
      noDescription: d.activeFilters?.noDescription || "",
      unsupportedContainer: d.activeFilters?.unsupportedContainer || "",
      weakMetadata: d.activeFilters?.weakMetadata || "",
      unreviewedImports: d.activeFilters?.unreviewedImports || "",
      sort: d.activeFilters?.sort || "title"
    });
    for (const C of Object.keys(a))
      C !== "status" && (r(C, P[C]) || (P[C] = ""));
    const ae = /* @__PURE__ */ at(P.publication), he = /* @__PURE__ */ at(!1), Z = /* @__PURE__ */ at(null), ie = q(() => {
      const C = ae.value.trim().toLocaleLowerCase();
      return (C !== "" && Z.value !== null ? Z.value : x.value).filter((f) => C === "" || f.toLocaleLowerCase().includes(C)).slice(0, iN);
    });
    Ut(() => P.publication, (C) => {
      ae.value = C || "";
    });
    let D = null, $ = null, Y = 0;
    Ut(ae, (C) => {
      window.clearTimeout(D), $?.abort(), $ = null, Z.value = null;
      const S = String(C || "").trim();
      if (S === "") return;
      const f = ++Y;
      D = window.setTimeout(() => {
        ve(S, f);
      }, 200);
    });
    const se = Object.fromEntries(Object.keys(P).map((C) => [C, C === "sort" ? "title" : C === "view" ? "compact" : ""])), te = window.location.pathname.indexOf(aN), ce = te >= 0 ? window.location.pathname.slice(0, te) : "", de = {
      catalogue: `${ce}/apps/library/`,
      review: `${ce}/apps/library/?scannerConflicts=1`,
      settings: `${ce}/settings/user/library`
    };
    function we(C, S) {
      if (typeof C != "string" || C === "") return S;
      try {
        const f = ce ? `${ce}/` : "/";
        let B = C;
        for (let ge = 0; ge < 5; ge += 1) {
          if (!B.startsWith("/") || B.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(B)) return S;
          const Le = new URL(B, window.location.origin);
          if (Le.origin !== window.location.origin || !Le.pathname.startsWith(f)) return S;
          const it = B.split(/[?#]/, 1)[0];
          for (const Na of it.split("/")) {
            let xa = Na;
            for (let La = 0; La < 5; La += 1) {
              const Pn = decodeURIComponent(xa);
              if (/[\\/\u0000-\u001f\u007f]/.test(Pn) || Pn === "." || Pn === "..") return S;
              if (Pn === xa) break;
              if (xa = Pn, La === 4) return S;
            }
          }
          const tn = decodeURI(B);
          if (tn === B) return C;
          B = tn;
        }
        return S;
      } catch {
        return S;
      }
    }
    const me = q(() => we(d.settingsUrl, de.settings)), Pe = q(() => we(d.catalogueRootUrl, de.catalogue)), Oe = q(() => we(d.homeUrl, `${de.catalogue}?home=1`)), rt = q(() => we(d.shelvesUrl, `${de.catalogue}?shelves=1`)), ct = q(() => we(d.reviewUrl || d.scannerConflictReviewUrl, de.review)), ot = q(() => Object.entries(a).some(([C, S]) => P[C] === S)), Nt = q(() => i.reduce((C, S) => C + Number(hu.value[S.countKey] || 0), 0)), Je = q(() => d.surface === "home"), Jt = q(() => d.surface === "shelves"), U = q(() => !Je.value && !Jt.value && !ot.value && !P.starred && P.sort !== "lastOpened" && !P.shelf), v = q(() => [
      { key: "home", name: m("library", "Home"), href: Oe.value, active: Je.value },
      { key: "all", name: m("library", "All publications"), href: Pe.value, active: U.value },
      { key: "starred", name: m("library", "Starred"), href: `${Pe.value}?starred=1`, active: P.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${Pe.value}?sort=lastOpened`, active: P.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: rt.value, active: Jt.value || !!P.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${Pe.value}#library-collections`, active: !1 }
    ]), _ = q(() => d.requestToken || ""), k = q(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), I = q(() => d.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), N = q(() => d.itemSidebarUrlTemplate || `${ce}/apps/library/items/__ITEM_ID__/sidebar`), z = q(() => d.batchTagUrl || "/apps/library/bulk/tags"), W = q(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), K = q(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), J = q(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), V = q(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ye = q(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const re = q(() => d.discoveryPage === "publication"), pe = q(() => d.discoveryPage === "year"), Ce = q(() => d.discoveryPage === "creator"), Ne = q(() => re.value || pe.value || Ce.value), De = q(() => d.discoveryTitle || P.publication || P.year || P.creator || ""), Me = q(() => Ne.value ? De.value : m("library", "Library")), Ze = q(() => Ce.value ? m("library", "Creator") : pe.value ? m("library", "Publication year") : m("library", "Publication / series")), nt = q(() => Number(d.rootCount || 0)), wt = q(() => Number(d.enabledRootCount || 0)), vt = q(() => nt.value === 0), xt = q(() => nt.value > 0 && wt.value === 0), xn = q(() => wi.value.length > 0), lt = {
      q: "Search",
      view: "View mode",
      type: "Type",
      publisher: "Publisher",
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
      weakMetadata: "Needs details",
      unreviewedImports: "Unreviewed imports"
    }, Lt = q(() => {
      if (typeof window > "u") return "";
      const C = new URLSearchParams(window.location.search);
      if (C.get("batchMetadataApplyResult") !== "1") return "";
      const S = C.get("batchMetadataField") || "field", f = C.get("batchMetadataApplied") || "0", B = C.get("batchMetadataUnchanged") || "0", ge = C.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: S, unchanged: B, skipped: ge });
    }), bi = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), yi = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), ga = q(() => d.savedCollections || []), Xa = q(() => d.savedCollectionSaveUrl || "/apps/library/collections"), _i = q(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Kn = ["compact", "gallery", "list", "shelf"], Ht = q(() => Kn.includes(P.view) ? P.view : "compact"), ps = q(() => ({
      "library-cover-gallery--compact": Ht.value === "compact",
      "library-cover-gallery--gallery": Ht.value === "gallery",
      "library-cover-gallery--shelf": Ht.value === "shelf"
    })), wi = q(() => Object.entries(lt).map(([C, S]) => ({ key: C, label: m("library", S), value: P[C] || "" })).filter((C) => String(C.value).trim() !== "")), vs = q(() => Object.entries(P).filter(([C, S]) => !["q", "sort", "starred"].includes(C) && String(S || "").trim() !== "").map(([C, S]) => ({ key: C, value: S }))), ji = q(() => Object.entries(l(P)).filter(([C, S]) => String(S || "").trim() !== "").map(([C, S]) => ({ key: C, value: S }))), ma = q(() => ji.value.filter(({ key: C, value: S }) => C !== "q" && !(C === "sort" && S === "title"))), Ci = /* @__PURE__ */ Pt({}), jt = q(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), Wn = q(() => d.homeShelves || []), ba = q(() => d.shelfSummaries || []), Vi = q(() => d.needsAttention || { count: 0, url: `${Pe.value}?needsMetadata=1` }), Qt = /* @__PURE__ */ at([]), Gi = q(() => new Set(Qt.value));
    function ya(C, S) {
      const f = new Set(Qt.value);
      S ? f.add(Number(C)) : f.delete(Number(C)), Qt.value = [...f];
    }
    function gs(C) {
      Qt.value = C.currentTarget.checked ? h.value.map((S) => Number(S.id)) : [];
    }
    function Za() {
      const C = new Set(h.value.map((S) => Number(S.id)));
      Qt.value = Qt.value.filter((S) => C.has(S));
    }
    function cl(C) {
      const S = C.target;
      if (S instanceof HTMLFormElement) {
        S.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of Qt.value) {
          const B = document.createElement("input");
          B.type = "hidden", B.name = "itemIds[]", B.value = String(f), B.dataset.librarySelectedId = "1", S.appendChild(B);
        }
      }
    }
    const Se = /* @__PURE__ */ at(null), qn = /* @__PURE__ */ at(null), Ct = /* @__PURE__ */ Pt({ loading: !1, error: "", missing: !1 }), Ye = /* @__PURE__ */ at("overview"), gt = /* @__PURE__ */ Pt({ saving: !1, saved: !1, error: "" }), mt = /* @__PURE__ */ Pt({ title: "", publicationDate: "", identifiers: [] }), Ja = /* @__PURE__ */ at(null), wn = /* @__PURE__ */ at(null), Ln = /* @__PURE__ */ at(!1);
    let _a = null, Cn = null, wa = null, Qa = !1, Ki = null, ln = 0;
    const Sn = q(() => qn.value !== null), Rn = q(() => Se.value ? h.value.findIndex((C) => C.id === Se.value.id) : -1), cn = q(() => Rn.value > 0 ? h.value[Rn.value - 1] : null), Ca = q(() => Rn.value >= 0 && Rn.value < h.value.length - 1 ? h.value[Rn.value + 1] : null), Sa = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], ms = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Ea(C) {
      const S = String(C ?? "").trim(), f = S.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : S;
    }
    function er(C) {
      return { ...C, publicationDate: Ea(C?.publicationDate) };
    }
    function tr(C) {
      mt.title = String(C?.title || ""), mt.publicationDate = Ea(C?.publicationDate), mt.identifiers = Array.isArray(C?.identifiers) ? C.identifiers.map((S) => ({ scheme: String(S?.scheme || ""), displayValue: String(S?.displayValue || S?.value || "") })) : [], Object.assign(gt, { saving: !1, saved: !1, error: "" });
    }
    function Ta() {
      mt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function nr(C) {
      mt.identifiers.splice(C, 1);
    }
    async function Aa() {
      const C = Se.value;
      if (!C?.updateUrl || gt.saving) return;
      Object.assign(gt, { saving: !0, saved: !1, error: "" });
      const S = new FormData();
      S.set("requesttoken", _.value), S.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "genres", "classifications", "personalRating"]) {
        const B = C[f];
        S.set(f, Array.isArray(B) ? B.join(", ") : String(B ?? ""));
      }
      S.set("title", mt.title), S.set("publicationDate", Ea(mt.publicationDate)), mt.identifiers.forEach((f, B) => {
        S.set(`identifiers[${B}][scheme]`, f.scheme), S.set(`identifiers[${B}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(C.updateUrl, { method: "POST", body: S, credentials: "same-origin", headers: { Accept: "application/json" } }), B = await f.json().catch(() => ({}));
        if (!f.ok || B.saved !== !0) throw new Error(B.error || m("library", "Metadata could not be saved."));
        C.title = mt.title.trim(), C.publicationDate = Ea(mt.publicationDate), C.identifiers = mt.identifiers.filter((Le) => Le.scheme.trim() || Le.displayValue.trim()).map((Le) => ({ ...Le }));
        const ge = h.value.find((Le) => Number(Le.id) === Number(C.id));
        ge && (ge.title = C.title, ge.publicationDate = C.publicationDate), gt.saved = !0;
      } catch (f) {
        gt.error = f?.message || m("library", "Metadata could not be saved.");
      } finally {
        gt.saving = !1;
      }
    }
    const Vt = q(() => {
      const C = r("scannerConflicts", P.scannerConflicts) || r("weakMetadata", P.weakMetadata), S = C ? h.value.find((f) => ka(f).length > 0) : null;
      return {
        enabled: C,
        item: S,
        fields: S ? ka(S) : [],
        reviewNextUrl: ye.value,
        skipUrl: ne.value.nextUrl || ye.value
      };
    }), Wi = q(() => i.map((C) => ({
      ...C,
      label: m("library", C.label),
      href: `${Pe.value}?${encodeURIComponent(C.key)}=${encodeURIComponent(C.value)}`,
      active: String(P[C.key] || "") === C.value
    })));
    function Yt(C) {
      return Array.isArray(C) ? JSON.stringify(C) : C == null ? "" : String(C);
    }
    function ka(C) {
      const S = C.fieldValues || {}, f = C.fieldSources || {};
      return Sa.filter((B) => Object.prototype.hasOwnProperty.call(S, B)).map((B) => {
        const ge = Yt(C[B]), Le = Yt(S[B]), it = Yt(f[B] || C.metadataSource || "scanner"), tn = it.includes("filename") || it.includes("path") ? Le : "", Na = it.includes("sidecar") ? Le : "";
        return { field: B, currentValue: ge, scannerCandidate: Le, pathTemplateCandidate: tn, sidecarValue: Na, sourceProvenance: it, differs: ge !== Le };
      }).filter((B) => B.differs);
    }
    let un = 0, Yn = null;
    function ir() {
      const C = new URLSearchParams(window.location.search).getAll("item");
      if (C.length !== 1 || !/^[1-9][0-9]*$/.test(C[0])) return null;
      const S = Number(C[0]);
      return Number.isSafeInteger(S) && S <= rN ? S : null;
    }
    function ar(C, S = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), C !== null && f.searchParams.set("item", String(C)), history[`${S}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Si(C, { historyMode: S = "push", seed: f = null } = {}) {
      Yn?.abort();
      const B = ++un, ge = new AbortController();
      Yn = ge, qn.value = C, Ye.value = "overview", Se.value = f && Number(f.id) === C ? er(f) : null, Se.value && tr(Se.value), Object.assign(Ct, { loading: !0, error: "", missing: !1 }), S !== "none" && ar(C, S);
      try {
        const Le = N.value.replace("__ITEM_ID__", encodeURIComponent(String(C))), it = await fetch(Le, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ge.signal });
        if (B !== un) return;
        if (!it.ok) {
          Se.value = null, Ct.missing = it.status === 404, Ct.error = it.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const tn = await it.json();
        if (B !== un) return;
        if (typeof tn?.item?.id != "number" || !Number.isSafeInteger(tn.item.id) || tn.item.id !== C) {
          Se.value = null, Ct.missing = !1, Ct.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        Se.value = er(tn.item), tr(Se.value), await Hn();
      } catch (Le) {
        B === un && Le?.name !== "AbortError" && (Se.value = null, Ct.missing = !1, Ct.error = m("library", "Could not load publication details. Try again."));
      } finally {
        B === un && (Ct.loading = !1, Yn = null);
      }
    }
    function en(C, S) {
      sr(), _a = S?.currentTarget instanceof HTMLElement ? S.currentTarget : null, Si(Number(C.id), { seed: C });
    }
    function Oa({ historyMode: C = "push", restoreFocus: S = !0 } = {}) {
      wa = S ? _a : null, _a = null, Yn?.abort(), Yn = null, un += 1, qn.value = null, Se.value = null, Ye.value = "overview", Object.assign(Ct, { loading: !1, error: "", missing: !1 }), C !== "none" && ar(null, C);
    }
    function rr() {
      Ln.value ? (wn.value?.$refs?.sidebar || wn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Ja.value?.focus();
    }
    function ul() {
      const C = wa;
      if (wa = null, sr(), Qa || !C?.isConnected) return;
      const S = ln;
      Ki = window.requestAnimationFrame(() => {
        Ki = null, !(S !== ln || Qa || Sn.value || !C.isConnected) && C.focus();
      });
    }
    function sr() {
      ln += 1, Ki !== null && (window.cancelAnimationFrame(Ki), Ki = null);
    }
    function Ei(C = Cn) {
      Ln.value = !!C?.matches, Sn.value && Hn(rr);
    }
    function Xn(C) {
      C && Si(Number(C.id), { seed: C });
    }
    const In = /* @__PURE__ */ at(null);
    let X = null, b = 0, R = null;
    const j = /* @__PURE__ */ Pt({ loading: !1, error: "" });
    function oe(C) {
      const S = s(new FormData(C));
      S.delete("publicationSearch");
      for (const f of Array.from(S.keys()))
        String(S.get(f) || "").trim() === "" && S.delete(f);
      return S.delete("page"), S.get("view") === "compact" && S.delete("view"), S;
    }
    async function ve(C, S) {
      const f = new URLSearchParams();
      for (const [ge, Le] of Object.entries(P)) {
        const it = String(Le || "").trim();
        ge !== "publication" && it !== "" && !(ge === "sort" && it === "title") && !(ge === "view" && it === "compact") && f.set(ge, it);
      }
      f.set("publicationSearch", C);
      const B = new AbortController();
      $ = B;
      try {
        const ge = await fetch(`${I.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: B.signal
        });
        if (!ge.ok) throw new Error(`Publication suggestions request failed: ${ge.status}`);
        const Le = await ge.json();
        S === Y && ae.value.trim() === C && (Z.value = Array.isArray(Le.publications) ? Le.publications : []);
      } catch (ge) {
        ge?.name !== "AbortError" && S === Y && (Z.value = null);
      } finally {
        S === Y && ($ = null);
      }
    }
    function Te(C) {
      u.splice(0, u.length, ...(C.items || []).map((S) => ({ ...S }))), Za();
      for (const S of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(C, S) && (d[S] = C[S]);
      Object.assign(P, se, C.activeFilters || {});
    }
    async function ze(C, S = null) {
      const f = C?.currentTarget?.tagName === "FORM" ? C.currentTarget : C?.currentTarget?.form;
      if (!f && !S?.params) return;
      const B = s(S?.params ?? oe(f)), ge = B.toString(), Le = ge ? `?${ge}` : "", it = S?.generation ?? ++b, tn = o(B), Na = S?.historyMode ?? (tn ? "push" : "replace"), xa = S?.historyTraversal === !0;
      if (it !== b) return;
      S === null && R?.abort();
      const La = new AbortController();
      R = La, j.loading = !0, j.error = "";
      try {
        const Pn = await fetch(k.value + Le, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: La.signal
        });
        if (it !== b) return;
        if (!Pn.ok) {
          xa ? ht(B) : tn ? j.error = m("library", "Could not load this review queue. Try again.") : ht(B);
          return;
        }
        const ev = await Pn.json();
        if (it !== b) return;
        Te(ev), Na !== "none" && (history[Na === "push" ? "pushState" : "replaceState"]({}, "", ge ? `?${ge}` : window.location.pathname), Sn.value && Oa({ historyMode: "none" }));
      } catch (Pn) {
        it === b && Pn?.name !== "AbortError" && (xa ? ht(B) : tn ? j.error = m("library", "Could not load this review queue. Try again.") : ht(B));
      } finally {
        it === b && (R = null, j.loading = !1);
      }
    }
    function Qe() {
      R?.abort();
      const C = new URLSearchParams(window.location.search), S = ir();
      C.has("item") && S === null && (C.delete("item"), history.replaceState({}, "", `${window.location.pathname}${C.toString() ? `?${C}` : ""}${window.location.hash}`)), S === null ? Oa({ historyMode: "none" }) : Si(S, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === S) || null }), C.delete("item"), ze(null, {
        params: s(C),
        generation: ++b,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function ht(C) {
      const S = document.createElement("form");
      S.method = "get", S.action = window.location.pathname, S.hidden = !0;
      for (const [f, B] of C.entries()) {
        const ge = document.createElement("input");
        ge.type = "hidden", ge.name = f, ge.value = B, S.appendChild(ge);
      }
      document.body.appendChild(S), S.submit(), S.remove();
    }
    function St(C, S = null, f = null) {
      if (S === null) {
        ze(C);
        return;
      }
      ze({ currentTarget: C }, { params: S, generation: f });
    }
    function or(C) {
      const S = C?.currentTarget?.form;
      if (!S) return;
      window.clearTimeout(X), window.clearTimeout(D), Y += 1, $?.abort(), $ = null;
      const f = ++b, B = oe(S);
      R?.abort(), R = null, X = window.setTimeout(() => St(S, B, f), 350);
    }
    async function bt(C, S = ae.value) {
      P.publication = String(S || "").trim(), ae.value = P.publication, he.value = !1, await Hn(), ze({ currentTarget: C });
    }
    function Fp(C) {
      bt(C.currentTarget);
    }
    function zp(C, S) {
      bt(S.currentTarget.form, C);
    }
    function dl(C) {
      const S = new URLSearchParams();
      for (const [B, ge] of Object.entries(P)) {
        const Le = String(ge || "").trim();
        Le !== "" && B !== C && !(B === "sort" && Le === "title") && !(B === "view" && Le === "compact") && S.set(B, Le);
      }
      const f = S.toString();
      return f ? `?${f}` : "?";
    }
    function Up(C) {
      const S = new URLSearchParams(dl(C));
      ze(null, {
        params: S,
        generation: ++b
      });
    }
    function Bp() {
      return dl("q");
    }
    const hu = q(() => d.smartViewCounts || {}), pu = q(() => {
      const C = {};
      for (const [S, f] of Object.entries(P)) {
        const B = String(f || "").trim();
        B !== "" && !(S === "sort" && B === "title") && (C[S] = B);
      }
      return C;
    }), Hp = q(() => JSON.stringify(pu.value)), fl = q(() => Object.keys(pu.value).length > 0);
    function bs(C) {
      if (!Kn.includes(C)) return;
      P.view = C;
      const S = s(window.location.search);
      C === "compact" ? S.delete("view") : S.set("view", C), S.delete("page"), history.replaceState({}, "", S.toString() ? `?${S.toString()}` : window.location.pathname);
    }
    function jp(C) {
      const S = s(window.location.search);
      for (const B of Object.keys(lt))
        S.delete(B);
      S.delete("page");
      for (const [B, ge] of Object.entries(C))
        String(ge || "").trim() !== "" && S.set(B, String(ge));
      const f = S.toString();
      return f ? `?${f}` : "?";
    }
    function Vp(C) {
      return jp(C || {});
    }
    function Gp(C) {
      return _i.value.replace("__COLLECTION_ID__", encodeURIComponent(String(C || "0")));
    }
    function lr(C) {
      return String(C || "").toUpperCase();
    }
    function Kp(C) {
      return d.publicationYearLandingUrls?.[C] || `/apps/library/years/${encodeURIComponent(C)}`;
    }
    function Wp(C) {
      return d.creatorLandingUrls?.[C] || `/apps/library/creators/${encodeURIComponent(C)}`;
    }
    function vu(C) {
      const S = C?.target?.value || "";
      S && (window.location.href = S);
    }
    function cr(C) {
      return Ci[C.id] || "loading";
    }
    function qp(C) {
      Ci[C.id] = "loaded";
    }
    function Yp(C) {
      Ci[C.id] = "error";
    }
    function hl(C) {
      const S = String(C?.publication || "").trim(), f = String(C?.publicationDate || "").trim();
      return S && f ? `${S} · ${f}` : S || f ? S || f : [C?.publicationType, lr(C?.extension)].filter(Boolean).join(" · ");
    }
    function Xp(C) {
      const S = String(C?.tagName || "").toLowerCase();
      return C?.isContentEditable || ["input", "select", "textarea", "button"].includes(S);
    }
    function Zp(C) {
      C.key !== "/" || C.metaKey || C.ctrlKey || C.altKey || C.shiftKey || Xp(C.target) || (C.preventDefault(), In.value?.focus(), In.value?.select?.());
    }
    function Jp(C) {
      C.key !== "Escape" || document.activeElement !== In.value || P.q === "" || (C.preventDefault(), P.q = "", In.value.value = "", window.clearTimeout(X), St({ currentTarget: In.value }));
    }
    function Qp(C) {
      if (!Sn.value || C.metaKey || C.ctrlKey || C.altKey)
        return !1;
      if (C.key === "Escape")
        return C.preventDefault(), Oa(), !0;
      if (C.key === "Tab" && Ln.value) {
        if (wn.value?.focusTrap) return !1;
        const S = wn.value?.$refs?.sidebar || wn.value?.$el || wn.value, f = [...S?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Le) => !Le.hidden && Le.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const B = f[0], ge = f[f.length - 1];
        if (C.shiftKey && (document.activeElement === B || !S.contains(document.activeElement)))
          return C.preventDefault(), ge.focus(), !0;
        if (!C.shiftKey && (document.activeElement === ge || !S.contains(document.activeElement)))
          return C.preventDefault(), B.focus(), !0;
      }
      return C.key === "ArrowLeft" && cn.value ? (C.preventDefault(), Xn(cn.value), !0) : C.key === "ArrowRight" && Ca.value ? (C.preventDefault(), Xn(Ca.value), !0) : !1;
    }
    function gu(C) {
      Qp(C) || (Zp(C), Jp(C));
    }
    Ui(() => {
      window.addEventListener("keydown", gu), window.addEventListener("popstate", Qe), Cn = window.matchMedia?.("(max-width: 1023px)") || null, Ei(), Cn?.addEventListener ? Cn.addEventListener("change", Ei) : Cn?.addListener?.(Ei);
      const C = new URLSearchParams(window.location.search), S = ir();
      C.has("item") && S === null ? (C.delete("item"), history.replaceState({}, "", `${window.location.pathname}${C.toString() ? `?${C}` : ""}${window.location.hash}`)) : S !== null && Si(S, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === S) || null });
    }), Ya(() => {
      Qa = !0, sr(), window.removeEventListener("keydown", gu), window.removeEventListener("popstate", Qe), window.clearTimeout(X), b += 1, R?.abort(), R = null, un += 1, Yn?.abort(), Yn = null, Cn?.removeEventListener ? Cn.removeEventListener("change", Ei) : Cn?.removeListener?.(Ei), Cn = null, wa = null;
    });
    const ur = /* @__PURE__ */ Pt({}), dr = /* @__PURE__ */ Pt({});
    async function mu(C, S) {
      const f = S?.currentTarget?.closest?.("form") || S?.currentTarget;
      if (!f || !C?.starUrl || ur[C.id]) return;
      const B = !!C.starred;
      ur[C.id] = !0, dr[C.id] = "", C.starred = !B;
      try {
        (await fetch(C.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (C.starred = B, dr[C.id] = m("library", "Could not update star. Try again."));
      } catch {
        C.starred = B, dr[C.id] = m("library", "Could not update star. Try again.");
      } finally {
        ur[C.id] = !1;
      }
    }
    return (C, S) => (y(), Fe(g(GC), { "app-name": "library" }, {
      default: Ae(() => [
        be(g(A_), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: Ae(() => [
            be(g(ip), null, {
              default: Ae(() => [
                (y(!0), E(ue, null, $e(v.value, (f) => (y(), Fe(g(rf), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                be(g(rf), {
                  active: ot.value,
                  href: ct.value,
                  name: Nt.value > 0 ? `${g(m)("library", "Review")} (${Nt.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Ae(() => [
            c("a", {
              class: "library-navigation-settings-link",
              href: me.value
            }, [
              S[28] || (S[28] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(m)("library", "Settings")), 1)
            ], 8, KC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        be(g(Hy), null, {
          default: Ae(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: d.language || "en",
              dir: d.direction || "ltr",
              tabindex: "-1"
            }, [
              ot.value ? (y(), E("section", qC, [
                c("header", YC, [
                  c("p", XC, p(g(m)("library", "Metadata cleanup")), 1),
                  c("h2", ZC, p(g(m)("library", "Review")), 1),
                  c("p", null, p(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (y(!0), E(ue, null, $e(Wi.value, (f) => (y(), E("a", {
                    key: f.key,
                    class: Ee(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(Number(hu.value[f.countKey] || 0)), 1)
                  ], 10, QC))), 128))
                ], 8, JC),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: Xe(ze, ["prevent"])
                }, [
                  (y(!0), E(ue, null, $e(ma.value, (f) => (y(), E("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, tS))), 128)),
                  c("label", null, [
                    ke(p(g(m)("library", "Search within this queue")), 1),
                    Ge(c("input", {
                      "onUpdate:modelValue": S[0] || (S[0] = (f) => P.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ti, P.q]
                    ])
                  ]),
                  c("button", nS, p(g(m)("library", "Apply")), 1)
                ], 40, eS),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": j.loading ? "true" : "false"
                }, [
                  j.loading ? (y(), E("span", aS, p(g(m)("library", "Loading review queue…")), 1)) : H("", !0)
                ], 8, iS),
                j.error ? (y(), E("p", rS, p(j.error), 1)) : H("", !0),
                Vt.value.enabled ? (y(), E("section", sS, [
                  c("div", oS, [
                    c("p", lS, p(g(m)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(m)("library", "Review next suggestion")), 9, cS)
                  ]),
                  Vt.value.item ? (y(), E("article", uS, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", dS, p(Vt.value.item.title), 1)
                      ]),
                      c("span", fS, [
                        c("bdi", hS, p(Vt.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", pS, [
                      (y(!0), E(ue, null, $e(Vt.value.fields, (f) => (y(), E("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", vS, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", gS, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", mS, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", bS, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", yS, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", _S, p(f.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: Vt.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: _.value
                          }, null, 8, CS),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, SS),
                          S[29] || (S[29] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", ES, p(g(m)("library", "Use suggested value")), 1)
                        ], 8, wS)
                      ]))), 128))
                    ]),
                    c("footer", TS, [
                      c("a", {
                        class: "button secondary",
                        href: Vt.value.item.detailsUrl
                      }, p(g(m)("library", "Maintenance")), 9, AS),
                      c("a", {
                        class: "button secondary",
                        href: Vt.value.skipUrl
                      }, p(g(m)("library", "Skip to next suggestion")), 9, kS)
                    ])
                  ])) : H("", !0)
                ])) : H("", !0),
                h.value.length === 0 && !j.loading && !j.error ? (y(), E("div", OS, [
                  c("h3", null, p(g(m)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: Pe.value
                  }, p(g(m)("library", "Back to Library")), 9, NS)
                ])) : (y(), E("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(m)("library", "Review results")
                }, [
                  (y(!0), E(ue, null, $e(h.value, (f) => (y(), E("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (B) => en(f, B)
                        }, [
                          c("bdi", RS, p(f.title), 1)
                        ], 8, LS)
                      ]),
                      f.creators ? (y(), E("p", IS, [
                        c("bdi", PS, p(f.creators), 1)
                      ])) : H("", !0),
                      f.scanError ? (y(), E("p", DS, [
                        c("bdi", MS, p(f.scanError), 1)
                      ])) : H("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => en(f, B)
                      }, p(g(m)("library", "Details")), 9, $S),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, FS)
                    ])
                  ]))), 128))
                ], 8, xS)),
                h.value.length > 0 ? (y(), E("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  ne.value.previousUrl ? (y(), E("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, US)) : (y(), E("span", BS, p(g(m)("library", "Previous")), 1)),
                  c("span", null, [
                    ke(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                    ne.value.total > 0 ? (y(), E("span", HS, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                  ]),
                  ne.value.nextUrl ? (y(), E("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, jS)) : (y(), E("span", VS, p(g(m)("library", "Next")), 1))
                ], 8, zS)) : H("", !0)
              ])) : Je.value ? (y(), E("main", GS, [
                c("header", KS, [
                  c("p", WS, p(g(m)("library", "Your library")), 1),
                  c("h2", qS, p(g(m)("library", "Home")), 1)
                ]),
                c("section", YS, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", XS, p(g(m)("library", "Continue reading")), 1),
                      c("p", ZS, p(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${Pe.value}?sort=lastOpened`
                    }, p(g(m)("library", "View all")), 9, JS)
                  ]),
                  jt.value.continueReading.length ? (y(), E("div", QS, [
                    (y(!0), E(ue, null, $e(jt.value.continueReading, (f) => (y(), E("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => en(f, B)
                      }, [
                        c("span", tE, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, nE)
                        ])
                      ], 8, eE),
                      c("div", iE, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => en(f, B)
                          }, [
                            c("bdi", rE, p(f.title), 1)
                          ], 8, aE)
                        ]),
                        f.creators ? (y(), E("p", sE, [
                          c("bdi", oE, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, lE)
                      ])
                    ]))), 128))
                  ])) : (y(), E("p", cE, p(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", uE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", dE, p(g(m)("library", "Recently added")), 1),
                      c("p", fE, p(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${Pe.value}?sort=recent`
                    }, p(g(m)("library", "View all")), 9, hE)
                  ]),
                  jt.value.recentlyAdded.length ? (y(), E("div", pE, [
                    (y(!0), E(ue, null, $e(jt.value.recentlyAdded, (f) => (y(), E("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => en(f, B)
                      }, [
                        c("span", gE, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, mE)
                        ])
                      ], 8, vE),
                      c("div", bE, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => en(f, B)
                          }, [
                            c("bdi", _E, p(f.title), 1)
                          ], 8, yE)
                        ]),
                        f.creators ? (y(), E("p", wE, [
                          c("bdi", CE, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, SE)
                      ])
                    ]))), 128))
                  ])) : (y(), E("p", EE, p(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", TE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", AE, p(g(m)("library", "Shelves")), 1),
                      c("p", kE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: rt.value }, p(g(m)("library", "View all")), 9, OE)
                  ]),
                  Wn.value.length ? (y(), E("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (y(!0), E(ue, null, $e(Wn.value, (f) => (y(), E("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", LE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, xE))), 128))
                  ], 8, NE)) : (y(), E("p", RE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(Vi.value.count || 0) > 0 ? (y(), E("aside", IE, [
                  c("div", null, [
                    c("h3", PE, p(g(m)("library", "Needs attention")), 1),
                    c("p", DE, p(g(Mn)("library", "%n publication needs better details.", "%n publications need better details.", Number(Vi.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: Vi.value.url
                  }, p(g(m)("library", "Review")), 9, ME)
                ])) : H("", !0)
              ])) : Jt.value ? (y(), E("main", $E, [
                c("header", FE, [
                  c("p", zE, p(g(m)("library", "Your library")), 1),
                  c("h2", UE, p(g(m)("library", "Shelves")), 1),
                  c("p", BE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                ba.value.length ? (y(), E("nav", {
                  key: 0,
                  class: "library-shelf-summary-grid",
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  (y(!0), E(ue, null, $e(ba.value, (f) => (y(), E("a", {
                    key: f.id,
                    class: "library-shelf-summary-card",
                    href: f.url
                  }, [
                    c("span", VE, [
                      c("strong", null, [
                        c("bdi", GE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ]),
                    c("small", KE, [
                      c("bdi", WE, p(f.path), 1)
                    ])
                  ], 8, jE))), 128))
                ], 8, HE)) : (y(), E("section", qE, [
                  c("h3", null, p(g(m)("library", "Shelves")), 1),
                  c("p", YE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", XE, [
                    c("a", {
                      class: "button primary",
                      href: me.value
                    }, p(g(m)("library", "Add a Library root")), 9, ZE),
                    c("a", {
                      class: "button secondary",
                      href: Pe.value
                    }, p(g(m)("library", "All publications")), 9, JE)
                  ])
                ]))
              ])) : (y(), E("section", QE, [
                c("header", eT, [
                  Ne.value ? (y(), E("p", tT, p(Ze.value), 1)) : H("", !0),
                  c("h2", nT, p(Me.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: Xe(ze, ["prevent"])
                  }, [
                    (y(!0), E(ue, null, $e(vs.value, (f) => (y(), E("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, rT))), 128)),
                    c("div", sT, [
                      c("label", {
                        class: "library-quick-filter-search",
                        title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                      }, [
                        c("span", null, [
                          ke(p(g(m)("library", "Search")) + " ", 1),
                          S[30] || (S[30] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                        ]),
                        Ge(c("input", {
                          ref_key: "quickSearchInput",
                          ref: In,
                          "onUpdate:modelValue": S[1] || (S[1] = (f) => P.q = f),
                          "data-library-quick-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder"),
                          onInput: or
                        }, null, 40, lT), [
                          [ti, P.q]
                        ])
                      ], 8, oT)
                    ]),
                    c("label", cT, [
                      ke(p(g(m)("library", "Sort")), 1),
                      Ge(c("select", {
                        "onUpdate:modelValue": S[2] || (S[2] = (f) => P.sort = f),
                        name: "sort",
                        onChange: ze
                      }, [
                        c("option", uT, p(g(m)("library", "Title")), 1),
                        c("option", dT, p(g(m)("library", "Date added")), 1),
                        c("option", fT, p(g(m)("library", "Publication date")), 1),
                        c("option", hT, p(g(m)("library", "Series")), 1),
                        c("option", pT, p(g(m)("library", "Recently opened")), 1),
                        c("option", vT, p(g(m)("library", "Format")), 1)
                      ], 544), [
                        [fn, P.sort]
                      ])
                    ]),
                    c("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": g(m)("library", "View")
                    }, [
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Ee({ active: Ht.value === "compact" }),
                        "aria-pressed": Ht.value === "compact" ? "true" : "false",
                        onClick: S[3] || (S[3] = (f) => bs("compact"))
                      }, p(g(m)("library", "Compact")), 11, mT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ee({ active: Ht.value === "gallery" }),
                        "aria-pressed": Ht.value === "gallery" ? "true" : "false",
                        onClick: S[4] || (S[4] = (f) => bs("gallery"))
                      }, p(g(m)("library", "Gallery")), 11, bT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ee({ active: Ht.value === "list" }),
                        "aria-pressed": Ht.value === "list" ? "true" : "false",
                        onClick: S[5] || (S[5] = (f) => bs("list"))
                      }, p(g(m)("library", "List")), 11, yT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ee({ active: Ht.value === "shelf" }),
                        "aria-pressed": Ht.value === "shelf" ? "true" : "false",
                        onClick: S[6] || (S[6] = (f) => bs("shelf"))
                      }, p(g(m)("library", "Shelf")), 11, _T)
                    ], 8, gT)
                  ], 40, aT),
                  c("details", wT, [
                    c("summary", CT, [
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Facets narrow the current results"),
                        "aria-label": `${g(m)("library", "Filters")}: ${g(m)("library", "Facets narrow the current results")}`
                      }, p(g(m)("library", "Filters")), 9, ST),
                      c("b", ET, p(P.shelf ? g(m)("library", "this shelf") : wi.value.length > 0 ? g(m)("library", "current results") : g(m)("library", "whole catalogue")), 1)
                    ]),
                    c("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": g(m)("library", "Catalogue search and filters"),
                      onSubmit: Xe(Fp, ["prevent"])
                    }, [
                      c("label", null, [
                        ke(p(g(m)("library", "Type")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[7] || (S[7] = (f) => P.type = f),
                          name: "type"
                        }, [
                          c("option", AT, p(g(m)("library", "All types")), 1),
                          (y(!0), E(ue, null, $e(O.value, (f) => (y(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, kT))), 128))
                        ], 512), [
                          [fn, P.type]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Publisher")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[8] || (S[8] = (f) => P.publisher = f),
                          name: "publisher"
                        }, [
                          c("option", OT, p(g(m)("library", "All publishers")), 1),
                          (y(!0), E(ue, null, $e(A.value, (f) => (y(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, NT))), 128))
                        ], 512), [
                          [fn, P.publisher]
                        ])
                      ]),
                      c("div", xT, [
                        c("label", LT, p(g(m)("library", "Series / periodical")), 1),
                        Ge(c("input", {
                          id: "library-publication-search",
                          "onUpdate:modelValue": S[9] || (S[9] = (f) => ae.value = f),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-publication-suggestions",
                          "aria-expanded": he.value && ie.value.length > 0 ? "true" : "false",
                          onFocus: S[10] || (S[10] = (f) => he.value = !0),
                          onKeydown: S[11] || (S[11] = Wt((f) => he.value = !1, ["escape"]))
                        }, null, 40, RT), [
                          [ti, ae.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "publication",
                          value: P.publication
                        }, null, 8, IT),
                        he.value && ie.value.length > 0 ? (y(), E("ul", PT, [
                          (y(!0), E(ue, null, $e(ie.value, (f) => (y(), E("li", {
                            key: f,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: S[12] || (S[12] = Xe(() => {
                              }, ["prevent"])),
                              onClick: (B) => zp(f, B)
                            }, p(f), 41, DT)
                          ]))), 128))
                        ])) : H("", !0),
                        c("button", MT, p(g(m)("library", "Apply series")), 1)
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Publication year")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[13] || (S[13] = (f) => P.year = f),
                          name: "year"
                        }, [
                          c("option", $T, p(g(m)("library", "All years")), 1),
                          (y(!0), E(ue, null, $e(M.value, (f) => (y(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, FT))), 128))
                        ], 512), [
                          [fn, P.year]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Creator")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[14] || (S[14] = (f) => P.creator = f),
                          name: "creator",
                          title: g(m)("library", "Exact full-field creator matches only")
                        }, [
                          c("option", UT, p(g(m)("library", "All creators")), 1),
                          (y(!0), E(ue, null, $e(G.value, (f) => (y(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, BT))), 128))
                        ], 8, zT), [
                          [fn, P.creator]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Nextcloud tag")), 1),
                        Ge(c("input", {
                          "onUpdate:modelValue": S[15] || (S[15] = (f) => P.tag = f),
                          type: "text",
                          name: "tag",
                          placeholder: g(m)("library", "photography")
                        }, null, 8, HT), [
                          [ti, P.tag]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Format")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[16] || (S[16] = (f) => P.format = f),
                          name: "format"
                        }, [
                          c("option", jT, p(g(m)("library", "All formats")), 1),
                          (y(!0), E(ue, null, $e(T.value, (f) => (y(), E("option", {
                            key: f,
                            value: f
                          }, p(lr(f)), 9, VT))), 128))
                        ], 512), [
                          [fn, P.format]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Shelf")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[17] || (S[17] = (f) => P.shelf = f),
                          name: "shelf"
                        }, [
                          c("option", GT, p(g(m)("library", "All shelves")), 1),
                          (y(!0), E(ue, null, $e(w.value, (f) => (y(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, KT))), 128))
                        ], 512), [
                          [fn, P.shelf]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Scan status")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[18] || (S[18] = (f) => P.status = f),
                          name: "status"
                        }, [
                          c("option", WT, p(g(m)("library", "All scan statuses")), 1),
                          (y(!0), E(ue, null, $e(F.value, (f) => (y(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, qT))), 128))
                        ], 512), [
                          [fn, P.status]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Workflow status")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[19] || (S[19] = (f) => P.workflowStatus = f),
                          name: "workflowStatus"
                        }, [
                          c("option", YT, p(g(m)("library", "All workflow statuses")), 1),
                          (y(!0), E(ue, null, $e(le.value, (f) => (y(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, XT))), 128))
                        ], 512), [
                          [fn, P.workflowStatus]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Genre")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[20] || (S[20] = (f) => P.genre = f),
                          name: "genre"
                        }, [
                          c("option", ZT, p(g(m)("library", "All genres")), 1),
                          (y(!0), E(ue, null, $e(fe.value, (f) => (y(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, JT))), 128))
                        ], 512), [
                          [fn, P.genre]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Classification")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[21] || (S[21] = (f) => P.classification = f),
                          name: "classification"
                        }, [
                          c("option", QT, p(g(m)("library", "All classifications")), 1),
                          (y(!0), E(ue, null, $e(ee.value, (f) => (y(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, eA))), 128))
                        ], 512), [
                          [fn, P.classification]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Suggested updates")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": S[22] || (S[22] = (f) => P.scannerConflicts = f),
                          name: "scannerConflicts"
                        }, [
                          c("option", tA, p(g(m)("library", "All metadata")), 1),
                          c("option", nA, p(g(m)("library", "Suggested updates")), 1)
                        ], 512), [
                          [fn, P.scannerConflicts]
                        ])
                      ]),
                      c("button", iA, p(g(m)("library", "Apply filters")), 1),
                      c("a", aA, p(g(m)("library", "Clear")), 1)
                    ], 40, TT)
                  ]),
                  c("section", rA, [
                    c("h3", sA, p(g(m)("library", "Shelves")), 1),
                    c("div", oA, [
                      M.value.length > 0 ? (y(), E("label", lA, [
                        c("span", null, p(g(m)("library", "Publication year")), 1),
                        c("select", { onChange: vu }, [
                          c("option", cA, p(g(m)("library", "Choose year")), 1),
                          (y(!0), E(ue, null, $e(M.value, (f) => (y(), E("option", {
                            key: f,
                            value: Kp(f)
                          }, p(f), 9, uA))), 128))
                        ], 32)
                      ])) : H("", !0),
                      G.value.length > 0 ? (y(), E("label", dA, [
                        c("span", null, p(g(m)("library", "Creator")), 1),
                        c("select", { onChange: vu }, [
                          c("option", fA, p(g(m)("library", "Choose creator")), 1),
                          (y(!0), E(ue, null, $e(G.value, (f) => (y(), E("option", {
                            key: f,
                            value: Wp(f)
                          }, p(f), 9, hA))), 128))
                        ], 32)
                      ])) : H("", !0)
                    ])
                  ]),
                  c("section", pA, [
                    c("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(m)("library", "Collections")), 9, vA),
                    c("form", {
                      method: "post",
                      action: Xa.value,
                      class: "library-saved-collection-save-form",
                      title: fl.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: _.value
                      }, null, 8, mA),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Hp.value
                      }, null, 8, bA),
                      c("label", null, [
                        ke(p(g(m)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !fl.value,
                          autocomplete: "off"
                        }, null, 8, yA)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !fl.value,
                        title: g(m)("library", "Save current view")
                      }, p(g(m)("library", "Save")), 9, _A)
                    ], 8, gA),
                    ga.value.length > 0 ? (y(), E("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (y(!0), E(ue, null, $e(ga.value, (f) => (y(), E("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: Vp(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, CA),
                        c("form", {
                          method: "post",
                          action: Gp(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: _.value
                          }, null, 8, EA),
                          c("button", TA, p(g(m)("library", "Delete")), 1)
                        ], 8, SA)
                      ]))), 128))
                    ], 8, wA)) : H("", !0)
                  ]),
                  Qt.value.length > 0 ? (y(), E("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", kA, [
                      S[31] || (S[31] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, p(g(m)("library", "Batch actions")), 9, OA),
                      c("small", NA, p(g(m)("library", "Batch actions for selected publications")), 1),
                      c("b", xA, p(g(Mn)("library", "%n publication selected", "%n publications selected", Qt.value.length)), 1)
                    ]),
                    c("p", LA, p(g(Mn)("library", "%n publication selected", "%n publications selected", Qt.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: cl
                    }, [
                      c("form", {
                        method: "post",
                        action: z.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _.value
                        }, null, 8, IA),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, PA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, p(g(m)("library", "Apply")), 9, DA)
                      ], 8, RA),
                      c("form", {
                        method: "post",
                        action: W.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _.value
                        }, null, 8, $A),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, FA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, p(g(m)("library", "Remove")), 9, zA)
                      ], 8, MA),
                      c("form", {
                        method: "post",
                        action: K.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _.value
                        }, null, 8, BA),
                        (y(!0), E(ue, null, $e(ji.value, (f) => (y(), E("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, HA))), 128)),
                        S[32] || (S[32] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Reset metadata")), 9, jA)
                      ], 8, UA),
                      c("form", {
                        method: "post",
                        action: J.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _.value
                        }, null, 8, GA),
                        (y(!0), E(ue, null, $e(ji.value, (f) => (y(), E("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, KA))), 128)),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Field")), 1),
                          c("select", WA, [
                            c("option", qA, p(g(m)("library", "Publication type")), 1),
                            c("option", YA, p(g(m)("library", "Subtitle")), 1),
                            c("option", XA, p(g(m)("library", "Creators")), 1),
                            c("option", ZA, p(g(m)("library", "Series / periodical")), 1),
                            c("option", JA, p(g(m)("library", "Publication date")), 1),
                            c("option", QA, p(g(m)("library", "Language")), 1),
                            c("option", e2, p(g(m)("library", "Publisher")), 1),
                            c("option", t2, p(g(m)("library", "Genres")), 1),
                            c("option", n2, p(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, i2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, p(g(m)("library", "Preview edit")), 9, a2)
                      ], 8, VA),
                      c("form", {
                        method: "post",
                        action: V.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _.value
                        }, null, 8, s2),
                        (y(!0), E(ue, null, $e(ji.value, (f) => (y(), E("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, o2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Fresh covers")), 9, l2)
                      ], 8, r2)
                    ], 32)
                  ], 8, AA)) : H("", !0)
                ], 8, iT),
                bi.value ? (y(), E("p", c2, p(bi.value), 1)) : H("", !0),
                yi.value ? (y(), E("p", u2, p(yi.value), 1)) : H("", !0),
                Lt.value ? (y(), E("p", d2, p(Lt.value), 1)) : H("", !0),
                Ne.value ? (y(), E("section", f2, [
                  c("p", h2, p(Ze.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: Ce.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : pe.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(De.value), 9, p2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g(Mn)("library", "%n item", "%n items", ne.value.total)), 1),
                    L.value?.earliestYear && L.value?.latestYear ? (y(), E("span", g2, p(L.value.earliestYear) + "–" + p(L.value.latestYear), 1)) : H("", !0),
                    L.value?.datedCount ? (y(), E("span", m2, p(L.value.datedCount) + " " + p(g(m)("library", "dated")), 1)) : H("", !0),
                    L.value?.undatedCount > 0 ? (y(), E("span", b2, p(L.value.undatedCount) + " " + p(g(m)("library", "undated")), 1)) : H("", !0)
                  ], 8, v2),
                  re.value && L.value ? (y(), E("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(m)("library", "Publication contents")), 1),
                    c("span", null, p(g(Mn)("library", "%n item", "%n items", L.value.itemCount)), 1),
                    L.value.earliestYear && L.value.latestYear ? (y(), E("span", _2, p(L.value.earliestYear) + "–" + p(L.value.latestYear), 1)) : H("", !0),
                    c("span", null, p(L.value.datedCount) + " " + p(g(m)("library", "with issue/date coverage")), 1),
                    L.value.undatedCount > 0 ? (y(), E("span", w2, p(L.value.undatedCount) + " " + p(g(m)("library", "without dates yet")), 1)) : H("", !0),
                    c("span", null, p(g(m)("library", "read-only grouping")), 1)
                  ], 8, y2)) : H("", !0),
                  re.value && L.value?.issueGroups?.length ? (y(), E("section", C2, [
                    c("div", null, [
                      c("p", S2, p(g(m)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(m)("library", "Read-only issue/date grouping")), 9, E2)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(m)("library", "Visual issue strip")
                    }, [
                      (y(!0), E(ue, null, $e(L.value.issueGroups, (f) => (y(), E("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        c("small", null, p(g(Mn)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, A2))), 128))
                    ], 8, T2),
                    L.value.gapRanges?.length ? (y(), E("p", k2, p(g(m)("library", "Gap")) + ": " + p(L.value.gapRanges.join(", ")), 1)) : H("", !0),
                    (y(!0), E(ue, null, $e(L.value.issueGroups, (f) => (y(), E("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (y(!0), E(ue, null, $e(f.items, (B, ge) => (y(), E("li", {
                          key: B.itemId
                        }, [
                          c("span", O2, p(B.issueLabel), 1),
                          c("a", {
                            href: B.detailsUrl || "#"
                          }, p(B.title), 9, N2),
                          c("small", null, [
                            ke(p(B.publicationType), 1),
                            B.publicationDate ? (y(), E(ue, { key: 0 }, [
                              ke(" · " + p(B.publicationDate), 1)
                            ], 64)) : H("", !0)
                          ]),
                          c("small", x2, [
                            ge > 0 ? (y(), E(ue, { key: 0 }, [
                              ke(p(g(m)("library", "Previous issue")), 1)
                            ], 64)) : H("", !0),
                            ge > 0 && ge < f.items.length - 1 ? (y(), E(ue, { key: 1 }, [
                              ke(" · ")
                            ], 64)) : H("", !0),
                            ge < f.items.length - 1 ? (y(), E(ue, { key: 2 }, [
                              ke(p(g(m)("library", "Next issue")), 1)
                            ], 64)) : H("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    L.value.unknownIssueItems?.length ? (y(), E("details", L2, [
                      c("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(m)("library", "Unknown issue/date")) + " · " + p(L.value.unknownIssueItems.length), 9, R2)
                    ])) : H("", !0)
                  ])) : H("", !0),
                  c("p", null, [
                    c("a", {
                      href: Pe.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(m)("library", "Back to full catalogue")), 9, I2)
                  ])
                ])) : H("", !0),
                c("div", P2, [
                  c("p", D2, [
                    ke(p(g(m)("library", "Showing")) + " " + p(ne.value.from) + "–" + p(ne.value.to) + " " + p(g(m)("library", "of")) + " " + p(ne.value.total) + " " + p(g(m)("library", "catalogue items")), 1),
                    wi.value.length > 0 ? (y(), E("span", M2, [
                      S[33] || (S[33] = ke(" · ", -1)),
                      c("a", $2, p(g(m)("library", "Clear all filters")), 1)
                    ])) : H("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    c("span", z2, [
                      ke(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                      ne.value.total > 0 ? (y(), E("span", U2, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                    ]),
                    ne.value.previousUrl ? (y(), E("a", {
                      key: 0,
                      href: ne.value.previousUrl
                    }, p(g(m)("library", "Previous")), 9, B2)) : (y(), E("span", H2, p(g(m)("library", "Previous")), 1)),
                    ne.value.nextUrl ? (y(), E("a", {
                      key: 2,
                      href: ne.value.nextUrl
                    }, p(g(m)("library", "Next")), 9, j2)) : (y(), E("span", V2, p(g(m)("library", "Next")), 1))
                  ], 8, F2)
                ]),
                wi.value.length > 0 ? (y(), E("nav", {
                  key: 4,
                  class: "library-active-filter-chips",
                  "aria-label": g(m)("library", "Active filters")
                }, [
                  c("span", null, p(g(m)("library", "Active filters")), 1),
                  (y(!0), E(ue, null, $e(wi.value, (f) => (y(), E("a", {
                    key: f.key,
                    href: dl(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${g(m)("library", "Remove filter")}: ${f.label}`,
                    onClick: Xe((B) => Up(f.key), ["prevent"])
                  }, [
                    c("strong", null, p(f.label) + ":", 1),
                    ke(" " + p(f.value) + " ", 1),
                    S[34] || (S[34] = c("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, K2))), 128))
                ], 8, G2)) : H("", !0),
                h.value.length === 0 ? (y(), E("div", {
                  key: 5,
                  class: Ee(["library-empty-content", { "library-first-run-guidance": vt.value || xt.value, "library-filter-empty-state": xn.value && !vt.value && !xt.value }]),
                  role: "status"
                }, [
                  vt.value ? (y(), E(ue, { key: 0 }, [
                    c("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(m)("library", "Start with one Library root")), 9, W2),
                    c("p", q2, [
                      c("a", {
                        href: me.value,
                        class: "button primary"
                      }, p(g(m)("library", "Add a Library root")), 9, Y2),
                      c("span", X2, p(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : xt.value ? (y(), E(ue, { key: 1 }, [
                    c("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(m)("library", "No enabled Library roots")), 9, Z2),
                    c("p", J2, [
                      c("a", {
                        href: me.value,
                        class: "button primary"
                      }, p(g(m)("library", "Open Library settings")), 9, Q2)
                    ])
                  ], 64)) : xn.value ? (y(), E(ue, { key: 2 }, [
                    c("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(m)("library", "No matches for the current filters")), 9, ek),
                    c("p", tk, [
                      c("a", {
                        href: Bp(),
                        class: "button secondary"
                      }, p(g(m)("library", "Clear search")), 9, nk),
                      c("a", ik, p(g(m)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (y(), E(ue, { key: 3 }, [
                    c("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(m)("library", "No catalogue items yet")), 9, ak),
                    c("p", rk, [
                      c("a", {
                        href: me.value,
                        class: "button primary"
                      }, p(g(m)("library", "Run a scan from settings")), 9, sk)
                    ])
                  ], 64))
                ], 2)) : H("", !0),
                h.value.length > 0 ? (y(), E("label", ok, [
                  c("input", {
                    type: "checkbox",
                    checked: Qt.value.length === h.value.length,
                    onChange: gs
                  }, null, 40, lk),
                  ke(" " + p(g(m)("library", "Select all publications on this page")), 1)
                ])) : H("", !0),
                h.value.length > 0 && Ht.value === "list" ? (y(), E("ul", ck, [
                  (y(!0), E(ue, null, $e(h.value, (f) => (y(), E("li", {
                    key: f.id,
                    class: Ee(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Gi.value.has(Number(f.id)), "library-catalogue-list-row--open": Sn.value && Number(qn.value) === Number(f.id) }])
                  }, [
                    c("label", uk, [
                      c("input", {
                        type: "checkbox",
                        checked: Gi.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => ya(f.id, B.currentTarget.checked)
                      }, null, 40, dk)
                    ]),
                    c("div", fk, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (B) => en(f, B)
                      }, [
                        c("bdi", pk, p(f.title), 1)
                      ], 8, hk),
                      f.creators ? (y(), E("span", vk, [
                        c("bdi", gk, p(f.creators), 1)
                      ])) : H("", !0)
                    ]),
                    c("dl", mk, [
                      f.publication ? (y(), E("div", bk, [
                        c("dt", null, p(g(m)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", yk, p(f.publication), 1)
                        ])
                      ])) : H("", !0),
                      f.publicationDate ? (y(), E("div", _k, [
                        c("dt", null, p(g(m)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : H("", !0),
                      f.extension || f.publicationType ? (y(), E("div", wk, [
                        c("dt", null, p(g(m)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Ee(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? lr(f.extension) : f.publicationType), 11, Ck)
                        ])
                      ])) : H("", !0),
                      f.shelf ? (y(), E("div", Sk, [
                        c("dt", null, p(g(m)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", Ek, p(f.shelf), 1)
                        ])
                      ])) : H("", !0)
                    ]),
                    c("div", Tk, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, Ak),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => en(f, B)
                      }, p(g(m)("library", "Details")), 9, kk)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (y(), E("div", {
                  key: 8,
                  class: Ee(["library-cover-gallery", ps.value])
                }, [
                  (y(!0), E(ue, null, $e(h.value, (f) => (y(), E("article", {
                    key: f.id,
                    class: Ee(["library-cover-card", { "library-cover-card--cover-loaded": cr(f) === "loaded", "library-cover-card--cover-error": cr(f) === "error", "library-cover-card--selected": Gi.value.has(Number(f.id)), "library-cover-card--open": Sn.value && Number(qn.value) === Number(f.id) }])
                  }, [
                    c("label", Ok, [
                      c("input", {
                        type: "checkbox",
                        checked: Gi.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => ya(f.id, B.currentTarget.checked)
                      }, null, 40, Nk)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": Sn.value && Number(qn.value) === Number(f.id) ? "true" : "false",
                      onClick: (B) => en(f, B)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(m)("library", "Details")), 9, Lk),
                      c("span", Rk, [
                        cr(f) === "loading" ? (y(), E("span", Ik)) : H("", !0),
                        c("img", {
                          class: Ee(["library-cover-image", { "library-cover-image--loaded": cr(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (B) => qp(f),
                          onError: (B) => Yp(f)
                        }, null, 42, Pk),
                        cr(f) === "error" ? (y(), E("span", Dk, p(g(m)("library", "Cover unavailable")), 1)) : H("", !0)
                      ])
                    ], 8, xk),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Xe((B) => mu(f, B), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: _.value
                      }, null, 8, $k),
                      S[35] || (S[35] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, Fk),
                      c("button", {
                        type: "submit",
                        class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": ur[f.id] ? "true" : void 0,
                        disabled: ur[f.id],
                        onClick: Xe((B) => mu(f, B), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, zk),
                      dr[f.id] ? (y(), E("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(dr[f.id]), 9, Uk)) : H("", !0)
                    ], 40, Mk),
                    c("div", Bk, [
                      c("div", Hk, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => en(f, B)
                          }, [
                            c("bdi", Gk, p(f.title), 1)
                          ], 8, Vk)
                        ], 8, jk),
                        f.creators ? (y(), E("p", Kk, [
                          c("bdi", Wk, p(f.creators), 1)
                        ])) : H("", !0),
                        hl(f) || f.extension ? (y(), E("div", qk, [
                          f.extension ? (y(), E("span", Yk, [
                            c("bdi", Xk, p(lr(f.extension)), 1)
                          ])) : H("", !0),
                          hl(f) ? (y(), E("p", Zk, [
                            c("bdi", Jk, p(hl(f)), 1)
                          ])) : H("", !0)
                        ])) : H("", !0),
                        c("div", Qk, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(m)("library", "Open")), 9, eO),
                          be(g(fo), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: Ae(() => [
                              be(g(Ma), {
                                href: f.filesUrl
                              }, {
                                default: Ae(() => [
                                  ke(p(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              be(g(Ma), {
                                href: f.downloadUrl
                              }, {
                                default: Ae(() => [
                                  ke(p(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              be(g(Ma), {
                                href: f.detailsUrl
                              }, {
                                default: Ae(() => [
                                  ke(p(g(m)("library", "Maintenance")), 1)
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
                ], 2)) : H("", !0),
                h.value.length > 0 ? (y(), E("nav", {
                  key: 9,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  c("span", nO, [
                    ke(p(g(m)("library", "Page")) + " " + p(ne.value.page), 1),
                    ne.value.total > 0 ? (y(), E("span", iO, " · " + p(ne.value.from) + "–" + p(ne.value.to), 1)) : H("", !0)
                  ]),
                  ne.value.previousUrl ? (y(), E("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, aO)) : (y(), E("span", rO, p(g(m)("library", "Previous")), 1)),
                  ne.value.nextUrl ? (y(), E("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, sO)) : (y(), E("span", oO, p(g(m)("library", "Next")), 1))
                ], 8, tO)) : H("", !0)
              ]))
            ], 8, WC)
          ]),
          _: 1
        }),
        be(g(NC), {
          ref_key: "sidebarComponent",
          ref: wn,
          class: "library-native-item-sidebar",
          open: Sn.value,
          "no-toggle": "",
          loading: Ct.loading,
          name: Se.value?.title || g(m)("library", "Publication details"),
          subname: Se.value?.creators || "",
          role: Ln.value ? "dialog" : void 0,
          "aria-modal": Ln.value ? "true" : void 0,
          "aria-labelledby": Ln.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Ln.value && Se.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: rr,
          onClosed: ul,
          onClose: Oa
        }, {
          default: Ae(() => [
            c("div", lO, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Ja,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(Se.value?.title || g(m)("library", "Publication details")), 513),
              Ct.loading && !Se.value ? (y(), E("p", cO, p(g(m)("library", "Loading publication details…")), 1)) : Ct.error ? (y(), E("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Ct.missing ? "status" : "alert"
              }, [
                c("p", null, p(Ct.error), 1),
                Ct.missing ? H("", !0) : (y(), E("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: S[23] || (S[23] = (f) => Si(qn.value, { historyMode: "none" }))
                }, p(g(m)("library", "Try again")), 1))
              ], 8, uO)) : Se.value ? (y(), E(ue, { key: 2 }, [
                c("p", dO, p(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", fO, [
                  c("span", hO, p(g(m)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: Se.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, pO),
                  c("div", vO, [
                    c("p", gO, [
                      c("bdi", mO, p(Se.value.publicationType || g(m)("library", "Publication")), 1),
                      Se.value.extension ? (y(), E("span", bO, [
                        S[36] || (S[36] = ke(" · ", -1)),
                        c("bdi", yO, p(lr(Se.value.extension)), 1)
                      ])) : H("", !0)
                    ]),
                    c("div", _O, [
                      c("a", {
                        class: "button primary",
                        href: Se.value.openUrl
                      }, p(g(m)("library", "Open")), 9, wO),
                      be(g(fo), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: Ae(() => [
                          be(g(Ma), {
                            href: Se.value.filesUrl
                          }, {
                            default: Ae(() => [
                              ke(p(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          be(g(Ma), {
                            href: Se.value.downloadUrl
                          }, {
                            default: Ae(() => [
                              ke(p(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          be(g(Ma), {
                            href: Se.value.detailsUrl
                          }, {
                            default: Ae(() => [
                              ke(p(g(m)("library", "Maintenance (legacy)")), 1)
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
                  "aria-label": g(m)("library", "Publication detail sections")
                }, [
                  (y(), E(ue, null, $e(ms, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: Ee({ active: Ye.value === f.key }),
                    "aria-current": Ye.value === f.key ? "page" : void 0,
                    onClick: (B) => Ye.value = f.key
                  }, p(g(m)("library", f.label)), 11, SO)), 64))
                ], 8, CO),
                Ye.value === "overview" ? (y(), E("section", EO, [
                  c("h3", TO, p(g(m)("library", "Overview")), 1),
                  Se.value.description ? (y(), E("p", AO, [
                    c("bdi", kO, p(Se.value.description), 1)
                  ])) : H("", !0),
                  c("dl", OO, [
                    Se.value.publication ? (y(), E("div", NO, [
                      c("dt", null, p(g(m)("library", "Series")), 1),
                      c("dd", null, p(Se.value.publication), 1)
                    ])) : H("", !0),
                    Se.value.publicationDate ? (y(), E("div", xO, [
                      c("dt", null, p(g(m)("library", "Date")), 1),
                      c("dd", null, p(Se.value.publicationDate), 1)
                    ])) : H("", !0),
                    Se.value.publisher ? (y(), E("div", LO, [
                      c("dt", null, p(g(m)("library", "Publisher")), 1),
                      c("dd", null, p(Se.value.publisher), 1)
                    ])) : H("", !0),
                    Se.value.language ? (y(), E("div", RO, [
                      c("dt", null, p(g(m)("library", "Language")), 1),
                      c("dd", null, p(Se.value.language), 1)
                    ])) : H("", !0),
                    Se.value.shelf ? (y(), E("div", IO, [
                      c("dt", null, p(g(m)("library", "Shelf")), 1),
                      c("dd", null, p(Se.value.shelf), 1)
                    ])) : H("", !0)
                  ])
                ])) : Ye.value === "metadata" ? (y(), E("section", PO, [
                  c("h3", DO, p(g(m)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Xe(Aa, ["prevent"])
                  }, [
                    c("label", null, [
                      ke(p(g(m)("library", "Title")), 1),
                      Ge(c("input", {
                        "onUpdate:modelValue": S[24] || (S[24] = (f) => mt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ti, mt.title]
                      ])
                    ]),
                    c("label", null, [
                      ke(p(g(m)("library", "Publication date")), 1),
                      Ge(c("input", {
                        "onUpdate:modelValue": S[25] || (S[25] = (f) => mt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, MO), [
                        [ti, mt.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(m)("library", "Identifiers")), 1),
                      (y(!0), E(ue, null, $e(mt.identifiers, (f, B) => (y(), E("div", {
                        key: B,
                        class: "library-sidebar-identifier"
                      }, [
                        Ge(c("input", {
                          "onUpdate:modelValue": (ge) => f.scheme = ge,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, $O), [
                          [ti, f.scheme]
                        ]),
                        Ge(c("input", {
                          "onUpdate:modelValue": (ge) => f.displayValue = ge,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, FO), [
                          [ti, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ge) => nr(B)
                        }, p(g(m)("library", "Remove")), 9, zO)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Ta
                      }, p(g(m)("library", "Add identifier")), 1)
                    ]),
                    c("p", UO, p(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    gt.error ? (y(), E("p", BO, p(gt.error), 1)) : gt.saved ? (y(), E("p", HO, p(g(m)("library", "Metadata saved.")), 1)) : H("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: gt.saving
                    }, p(gt.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, jO)
                  ], 32),
                  ka(Se.value).length ? (y(), E("section", VO, [
                    c("h4", GO, p(g(m)("library", "Scanner suggestions")), 1),
                    c("p", KO, p(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (y(!0), E(ue, null, $e(ka(Se.value), (f) => (y(), E("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          ke(p(g(m)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          S[37] || (S[37] = c("br", null, null, -1)),
                          ke(p(g(m)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : H("", !0)
                ])) : (y(), E("section", WO, [
                  c("h3", qO, p(g(m)("library", "Activity")), 1),
                  c("dl", YO, [
                    c("div", null, [
                      c("dt", null, p(g(m)("library", "Scan status")), 1),
                      c("dd", null, p(Se.value.scanStatus || "—"), 1)
                    ]),
                    Se.value.workflowStatus ? (y(), E("div", XO, [
                      c("dt", null, p(g(m)("library", "Workflow")), 1),
                      c("dd", null, p(Se.value.workflowStatus), 1)
                    ])) : H("", !0),
                    Se.value.metadataSource ? (y(), E("div", ZO, [
                      c("dt", null, p(g(m)("library", "Metadata source")), 1),
                      c("dd", null, p(Se.value.metadataSource), 1)
                    ])) : H("", !0),
                    Se.value.cachedPath ? (y(), E("div", JO, [
                      c("dt", null, p(g(m)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", QO, p(Se.value.cachedPath), 1)
                      ])
                    ])) : H("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(m)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !cn.value,
                    onClick: S[26] || (S[26] = (f) => Xn(cn.value))
                  }, p(g(m)("library", "Previous item")), 9, tN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ca.value,
                    onClick: S[27] || (S[27] = (f) => Xn(Ca.value))
                  }, p(g(m)("library", "Next item")), 9, nN)
                ], 8, eN)
              ], 64)) : H("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function oN() {
  window.LibraryStartupWatchdog?.fail();
}
function lN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = qc("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !lN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Dm(sN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  oN(), console.error("[library] Vue startup failed", e);
}
