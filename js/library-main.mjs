// @__NO_SIDE_EFFECTS__
function Fu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const qe = {}, er = [], Cn = () => {
}, Bp = () => !1, Ol = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Nl = (e) => e.startsWith("onUpdate:"), wt = Object.assign, Du = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, lb = Object.prototype.hasOwnProperty, Ze = (e, t) => lb.call(e, t), Ae = Array.isArray, qi = (e) => Lo(e) === "[object Map]", Fa = (e) => Lo(e) === "[object Set]", Yd = (e) => Lo(e) === "[object Date]", De = (e) => typeof e == "function", lt = (e) => typeof e == "string", $n = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", Hp = (e) => (Je(e) || De(e)) && De(e.then) && De(e.catch), Vp = Object.prototype.toString, Lo = (e) => Vp.call(e), cb = (e) => Lo(e).slice(8, -1), Gp = (e) => Lo(e) === "[object Object]", Mu = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xr = /* @__PURE__ */ Fu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ll = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ub = /-\w/g, qt = Ll(
  (e) => e.replace(ub, (t) => t.slice(1).toUpperCase())
), db = /\B([A-Z])/g, Si = Ll(
  (e) => e.replace(db, "-$1").toLowerCase()
), Rl = Ll((e) => e.charAt(0).toUpperCase() + e.slice(1)), yc = Ll(
  (e) => e ? `on${Rl(e)}` : ""
), Pt = (e, t) => !Object.is(e, t), Cs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Kp = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Il = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, fb = (e) => {
  const t = lt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Xd;
const Pl = () => Xd || (Xd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vn(e) {
  if (Ae(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = lt(i) ? gb(i) : vn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (lt(e) || Je(e))
    return e;
}
const pb = /;(?![^(]*\))/g, hb = /:([^]+)/, vb = /\/\*[^]*?\*\//g;
function gb(e) {
  const t = {};
  return e.replace(vb, "").split(pb).forEach((n) => {
    if (n) {
      const i = n.split(hb);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function be(e) {
  let t = "";
  if (lt(e))
    t = e;
  else if (Ae(e))
    for (let n = 0; n < e.length; n++) {
      const i = be(e[n]);
      i && (t += i + " ");
    }
  else if (Je(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function xs(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !lt(t) && (e.class = be(t)), n && (e.style = vn(n)), e;
}
const bb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mb = /* @__PURE__ */ Fu(bb);
function qp(e) {
  return !!e || e === "";
}
function yb(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Zi(e[i], t[i]);
  return n;
}
function Zd(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (!i[o] && Zi(a, n[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Zi(e, t) {
  if (e === t) return !0;
  let n = Yd(e), i = Yd(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = $n(e), i = $n(t), n || i)
    return e === t;
  if (n = Ae(e), i = Ae(t), n || i)
    return n && i ? yb(e, t) : !1;
  if (n = Je(e), i = Je(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = qi(e), i = qi(t), n || i || (n = Fa(e), i = Fa(t), n || i))
      return n && i ? Zd(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (c && !u || !c && u || !Zi(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function _b(e, t) {
  return e.findIndex((n) => Zi(n, t));
}
const Wp = (e) => !!(e && e.__v_isRef === !0), h = (e) => lt(e) ? e : e == null ? "" : Ae(e) || Je(e) && (e.toString === Vp || !De(e.toString)) ? Wp(e) ? h(e.value) : JSON.stringify(e, Yp, 2) : String(e), Yp = (e, t) => Wp(t) ? Yp(e, t.value) : qi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[_c(i, r) + " =>"] = a, n),
    {}
  )
} : Fa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => _c(n))
} : $n(t) ? _c(t) : Je(t) && !Ae(t) && !Gp(t) ? String(t) : t, _c = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $n(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function wb(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Rt;
class Sb {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Rt && (Rt.active ? (this.parent = Rt, this.index = (Rt.scopes || (Rt.scopes = [])).push(
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
      const n = Rt;
      try {
        return Rt = this, t();
      } finally {
        Rt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Rt, Rt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Rt === this)
        Rt = this.prevScope;
      else {
        let t = Rt;
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
function Cb() {
  return Rt;
}
let st;
const wc = /* @__PURE__ */ new WeakSet();
class Xp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Rt && (Rt.active ? Rt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, wc.has(this) && (wc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Jp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Jd(this), Qp(this);
    const t = st, n = In;
    st = this, In = !0;
    try {
      return this.fn();
    } finally {
      eh(this), st = t, In = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ju(t);
      this.deps = this.depsTail = void 0, Jd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? wc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    iu(this) && this.run();
  }
  get dirty() {
    return iu(this);
  }
}
let Zp = 0, Zr, Jr;
function Jp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Jr, Jr = e;
    return;
  }
  e.next = Zr, Zr = e;
}
function zu() {
  Zp++;
}
function Uu() {
  if (--Zp > 0)
    return;
  if (Jr) {
    let t = Jr;
    for (Jr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Zr; ) {
    let t = Zr;
    for (Zr = void 0; t; ) {
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
function Qp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function eh(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), ju(i), kb(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function iu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (th(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function th(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === po) || (e.globalVersion = po, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !iu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = st, i = In;
  st = e, In = !0;
  try {
    Qp(e);
    const a = e.fn(e._value);
    (t.version === 0 || Pt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    st = n, In = i, eh(e), e.flags &= -3;
  }
}
function ju(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ju(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function kb(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let In = !0;
const nh = [];
function mi() {
  nh.push(In), In = !1;
}
function yi() {
  const e = nh.pop();
  In = e === void 0 ? !0 : e;
}
function Jd(e) {
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
let po = 0;
class Tb {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $l {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!st || !In || st === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== st)
      n = this.activeLink = new Tb(st, this), st.deps ? (n.prevDep = st.depsTail, st.depsTail.nextDep = n, st.depsTail = n) : st.deps = st.depsTail = n, ih(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = st.depsTail, n.nextDep = void 0, st.depsTail.nextDep = n, st.depsTail = n, st.deps === n && (st.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, po++, this.notify(t);
  }
  notify(t) {
    zu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Uu();
    }
  }
}
function ih(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        ih(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const au = /* @__PURE__ */ new WeakMap(), Ia = /* @__PURE__ */ Symbol(
  ""
), ru = /* @__PURE__ */ Symbol(
  ""
), ho = /* @__PURE__ */ Symbol(
  ""
);
function Vt(e, t, n) {
  if (In && st) {
    let i = au.get(e);
    i || au.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new $l()), a.map = i, a.key = n), a.track();
  }
}
function di(e, t, n, i, a, r) {
  const o = au.get(e);
  if (!o) {
    po++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (zu(), t === "clear")
    o.forEach(c);
  else {
    const u = Ae(e), v = u && Mu(n);
    if (u && n === "length") {
      const f = Number(i);
      o.forEach((y, C) => {
        (C === "length" || C === ho || !$n(C) && C >= f) && c(y);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), v && c(o.get(ho)), t) {
        case "add":
          u ? v && c(o.get("length")) : (c(o.get(Ia)), qi(e) && c(o.get(ru)));
          break;
        case "delete":
          u || (c(o.get(Ia)), qi(e) && c(o.get(ru)));
          break;
        case "set":
          qi(e) && c(o.get(Ia));
          break;
      }
  }
  Uu();
}
function Ka(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Vt(t, "iterate", ho), /* @__PURE__ */ kn(e) ? t : t.map(Fn));
}
function Fl(e) {
  return Vt(e = /* @__PURE__ */ Ye(e), "iterate", ho), e;
}
function Wn(e, t) {
  return /* @__PURE__ */ _i(e) ? lr(/* @__PURE__ */ Pa(e) ? Fn(t) : t) : Fn(t);
}
const Eb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Sc(this, Symbol.iterator, (e) => Wn(this, e));
  },
  concat(...e) {
    return Ka(this).concat(
      ...e.map((t) => Ae(t) ? Ka(t) : t)
    );
  },
  entries() {
    return Sc(this, "entries", (e) => (e[1] = Wn(this, e[1]), e));
  },
  every(e, t) {
    return ai(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ai(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Wn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ai(
      this,
      "find",
      e,
      t,
      (n) => Wn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ai(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ai(
      this,
      "findLast",
      e,
      t,
      (n) => Wn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ai(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ai(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Cc(this, "includes", e);
  },
  indexOf(...e) {
    return Cc(this, "indexOf", e);
  },
  join(e) {
    return Ka(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Cc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ai(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Pr(this, "pop");
  },
  push(...e) {
    return Pr(this, "push", e);
  },
  reduce(e, ...t) {
    return Qd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Qd(this, "reduceRight", e, t);
  },
  shift() {
    return Pr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ai(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Pr(this, "splice", e);
  },
  toReversed() {
    return Ka(this).toReversed();
  },
  toSorted(e) {
    return Ka(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ka(this).toSpliced(...e);
  },
  unshift(...e) {
    return Pr(this, "unshift", e);
  },
  values() {
    return Sc(this, "values", (e) => Wn(this, e));
  }
};
function Sc(e, t, n) {
  const i = Fl(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ kn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Ab = Array.prototype;
function ai(e, t, n, i, a, r) {
  const o = Fl(e), c = o !== e && !/* @__PURE__ */ kn(e), u = o[t];
  if (u !== Ab[t]) {
    const y = u.apply(e, r);
    return c ? Fn(y) : y;
  }
  let v = n;
  o !== e && (c ? v = function(y, C) {
    return n.call(this, Wn(e, y), C, e);
  } : n.length > 2 && (v = function(y, C) {
    return n.call(this, y, C, e);
  }));
  const f = u.call(o, v, i);
  return c && a ? a(f) : f;
}
function Qd(e, t, n, i) {
  const a = Fl(e), r = a !== e && !/* @__PURE__ */ kn(e);
  let o = n, c = !1;
  a !== e && (r ? (c = i.length === 0, o = function(v, f, y) {
    return c && (c = !1, v = Wn(e, v)), n.call(this, v, Wn(e, f), y, e);
  }) : n.length > 3 && (o = function(v, f, y) {
    return n.call(this, v, f, y, e);
  }));
  const u = a[t](o, ...i);
  return c ? Wn(e, u) : u;
}
function Cc(e, t, n) {
  const i = /* @__PURE__ */ Ye(e);
  Vt(i, "iterate", ho);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Vu(n[0]) ? (n[0] = /* @__PURE__ */ Ye(n[0]), i[t](...n)) : a;
}
function Pr(e, t, n = []) {
  mi(), zu();
  const i = (/* @__PURE__ */ Ye(e))[t].apply(e, n);
  return Uu(), yi(), i;
}
const xb = /* @__PURE__ */ Fu("__proto__,__v_isRef,__isVue"), ah = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($n)
);
function Ob(e) {
  $n(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Vt(t, "has", e), t.hasOwnProperty(e);
}
class rh {
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
      return i === (a ? r ? zb : ch : r ? lh : sh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Ae(t);
    if (!a) {
      let u;
      if (o && (u = Eb[n]))
        return u;
      if (n === "hasOwnProperty")
        return Ob;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Wt(t) ? t : i
    );
    if (($n(n) ? ah.has(n) : xb(n)) || (a || Vt(t, "get", n), r))
      return c;
    if (/* @__PURE__ */ Wt(c)) {
      const u = o && Mu(n) ? c : c.value;
      return a && Je(u) ? /* @__PURE__ */ vo(u) : u;
    }
    return Je(c) ? a ? /* @__PURE__ */ vo(c) : /* @__PURE__ */ It(c) : c;
  }
}
class oh extends rh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const o = Ae(t) && Mu(n);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ _i(r);
      if (!/* @__PURE__ */ kn(i) && !/* @__PURE__ */ _i(i) && (r = /* @__PURE__ */ Ye(r), i = /* @__PURE__ */ Ye(i)), !o && /* @__PURE__ */ Wt(r) && !/* @__PURE__ */ Wt(i))
        return v || (r.value = i), !0;
    }
    const c = o ? Number(n) < t.length : Ze(t, n), u = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Wt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && u && (c ? Pt(i, r) && di(t, "set", n, i) : di(t, "add", n, i)), u;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && di(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!$n(n) || !ah.has(n)) && Vt(t, "has", n), i;
  }
  ownKeys(t) {
    return Vt(
      t,
      "iterate",
      Ae(t) ? "length" : Ia
    ), Reflect.ownKeys(t);
  }
}
class Nb extends rh {
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
const Lb = /* @__PURE__ */ new oh(), Rb = /* @__PURE__ */ new Nb(), Ib = /* @__PURE__ */ new oh(!0);
const ou = (e) => e, cs = (e) => Reflect.getPrototypeOf(e);
function Pb(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = qi(r), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, v = a[e](...i), f = n ? ou : t ? lr : Fn;
    return !t && Vt(
      r,
      "iterate",
      u ? ru : Ia
    ), wt(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: y, done: C } = v.next();
          return C ? { value: y, done: C } : {
            value: c ? [f(y[0]), f(y[1])] : f(y),
            done: C
          };
        }
      }
    );
  };
}
function us(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $b(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      e || (Pt(a, c) && Vt(o, "get", a), Vt(o, "get", c));
      const { has: u } = cs(o), v = t ? ou : e ? lr : Fn;
      if (u.call(o, a))
        return v(r.get(a));
      if (u.call(o, c))
        return v(r.get(c));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Vt(/* @__PURE__ */ Ye(a), "iterate", Ia), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      return e || (Pt(a, c) && Vt(o, "has", a), Vt(o, "has", c)), a === c ? r.has(a) : r.has(a) || r.has(c);
    },
    forEach(a, r) {
      const o = this, c = o.__v_raw, u = /* @__PURE__ */ Ye(c), v = t ? ou : e ? lr : Fn;
      return !e && Vt(u, "iterate", Ia), c.forEach((f, y) => a.call(r, v(f), v(y), o));
    }
  };
  return wt(
    n,
    e ? {
      add: us("add"),
      set: us("set"),
      delete: us("delete"),
      clear: us("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = cs(r), c = /* @__PURE__ */ Ye(a), u = !t && !/* @__PURE__ */ kn(a) && !/* @__PURE__ */ _i(a) ? c : a;
        return o.has.call(r, u) || Pt(a, u) && o.has.call(r, a) || Pt(c, u) && o.has.call(r, c) || (r.add(u), di(r, "add", u, u)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ kn(r) && !/* @__PURE__ */ _i(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: c, get: u } = cs(o);
        let v = c.call(o, a);
        v || (a = /* @__PURE__ */ Ye(a), v = c.call(o, a));
        const f = u.call(o, a);
        return o.set(a, r), v ? Pt(r, f) && di(o, "set", a, r) : di(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: c } = cs(r);
        let u = o.call(r, a);
        u || (a = /* @__PURE__ */ Ye(a), u = o.call(r, a)), c && c.call(r, a);
        const v = r.delete(a);
        return u && di(r, "delete", a, void 0), v;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && di(
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
    n[a] = Pb(a, e, t);
  }), n;
}
function Bu(e, t) {
  const n = $b(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Fb = {
  get: /* @__PURE__ */ Bu(!1, !1)
}, Db = {
  get: /* @__PURE__ */ Bu(!1, !0)
}, Mb = {
  get: /* @__PURE__ */ Bu(!0, !1)
};
const sh = /* @__PURE__ */ new WeakMap(), lh = /* @__PURE__ */ new WeakMap(), ch = /* @__PURE__ */ new WeakMap(), zb = /* @__PURE__ */ new WeakMap();
function Ub(e) {
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
function It(e) {
  return /* @__PURE__ */ _i(e) ? e : Hu(
    e,
    !1,
    Lb,
    Fb,
    sh
  );
}
// @__NO_SIDE_EFFECTS__
function jb(e) {
  return Hu(
    e,
    !1,
    Ib,
    Db,
    lh
  );
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
  return Hu(
    e,
    !0,
    Rb,
    Mb,
    ch
  );
}
function Hu(e, t, n, i, a) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = Ub(cb(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? i : n
  );
  return a.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function Pa(e) {
  return /* @__PURE__ */ _i(e) ? /* @__PURE__ */ Pa(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function _i(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Vu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ye(t) : e;
}
function Bb(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && Kp(e, "__v_skip", !0), e;
}
const Fn = (e) => Je(e) ? /* @__PURE__ */ It(e) : e, lr = (e) => Je(e) ? /* @__PURE__ */ vo(e) : e;
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return dh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function uh(e) {
  return dh(e, !0);
}
function dh(e, t) {
  return /* @__PURE__ */ Wt(e) ? e : new Hb(e, t);
}
class Hb {
  constructor(t, n) {
    this.dep = new $l(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ye(t), this._value = n ? t : Fn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ kn(t) || /* @__PURE__ */ _i(t);
    t = i ? t : /* @__PURE__ */ Ye(t), Pt(t, n) && (this._rawValue = t, this._value = i ? t : Fn(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Wt(e) ? e.value : e;
}
function vi(e) {
  return De(e) ? e() : g(e);
}
const Vb = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Wt(a) && !/* @__PURE__ */ Wt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function fh(e) {
  return /* @__PURE__ */ Pa(e) ? e : new Proxy(e, Vb);
}
class Gb {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new $l(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Kb(e) {
  return new Gb(e);
}
class qb {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new $l(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = po - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return Jp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return th(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Wb(e, t, n = !1) {
  let i, a;
  return De(e) ? i = e : (i = e.get, a = e.set), new qb(i, a, n);
}
const ds = {}, Os = /* @__PURE__ */ new WeakMap();
let ka;
function Yb(e, t = !1, n = ka) {
  if (n) {
    let i = Os.get(n);
    i || Os.set(n, i = []), i.push(e);
  }
}
function Xb(e, t, n = qe) {
  const { immediate: i, deep: a, once: r, scheduler: o, augmentJob: c, call: u } = n, v = (k) => a ? k : /* @__PURE__ */ kn(k) || a === !1 || a === 0 ? fi(k, 1) : fi(k);
  let f, y, C, E, N = !1, A = !1;
  if (/* @__PURE__ */ Wt(e) ? (y = () => e.value, N = /* @__PURE__ */ kn(e)) : /* @__PURE__ */ Pa(e) ? (y = () => v(e), N = !0) : Ae(e) ? (A = !0, N = e.some((k) => /* @__PURE__ */ Pa(k) || /* @__PURE__ */ kn(k)), y = () => e.map((k) => {
    if (/* @__PURE__ */ Wt(k))
      return k.value;
    if (/* @__PURE__ */ Pa(k))
      return v(k);
    if (De(k))
      return u ? u(k, 2) : k();
  })) : De(e) ? t ? y = u ? () => u(e, 2) : e : y = () => {
    if (C) {
      mi();
      try {
        C();
      } finally {
        yi();
      }
    }
    const k = ka;
    ka = f;
    try {
      return u ? u(e, 3, [E]) : e(E);
    } finally {
      ka = k;
    }
  } : y = Cn, t && a) {
    const k = y, oe = a === !0 ? 1 / 0 : a;
    y = () => fi(k(), oe);
  }
  const O = Cb(), D = () => {
    f.stop(), O && O.active && Du(O.effects, f);
  };
  if (r && t) {
    const k = t;
    t = (...oe) => {
      const ue = k(...oe);
      return D(), ue;
    };
  }
  let M = A ? new Array(e.length).fill(ds) : ds;
  const z = (k) => {
    if (!(!(f.flags & 1) || !f.dirty && !k))
      if (t) {
        const oe = f.run();
        if (k || a || N || (A ? oe.some((ue, Z) => Pt(ue, M[Z])) : Pt(oe, M))) {
          C && C();
          const ue = ka;
          ka = f;
          try {
            const Z = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              M === ds ? void 0 : A && M[0] === ds ? [] : M,
              E
            ];
            M = oe, u ? u(t, 3, Z) : (
              // @ts-expect-error
              t(...Z)
            );
          } finally {
            ka = ue;
          }
        }
      } else
        f.run();
  };
  return c && c(z), f = new Xp(y), f.scheduler = o ? () => o(z, !1) : z, E = (k) => Yb(k, !1, f), C = f.onStop = () => {
    const k = Os.get(f);
    if (k) {
      if (u)
        u(k, 4);
      else
        for (const oe of k) oe();
      Os.delete(f);
    }
  }, t ? i ? z(!0) : M = f.run() : o ? o(z.bind(null, !0), !0) : f.run(), D.pause = f.pause.bind(f), D.resume = f.resume.bind(f), D.stop = D, D;
}
function fi(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Wt(e))
    fi(e.value, t, n);
  else if (Ae(e))
    for (let i = 0; i < e.length; i++)
      fi(e[i], t, n);
  else if (Fa(e) || qi(e))
    e.forEach((i) => {
      fi(i, t, n);
    });
  else if (Gp(e)) {
    for (const i in e)
      fi(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && fi(e[i], t, n);
  }
  return e;
}
function Ro(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Dl(a, t, n);
  }
}
function Tn(e, t, n, i) {
  if (De(e)) {
    const a = Ro(e, t, n, i);
    return a && Hp(a) && a.catch((r) => {
      Dl(r, t, n);
    }), a;
  }
  if (Ae(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Tn(e[r], t, n, i));
    return a;
  }
}
function Dl(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || qe;
  if (t) {
    let c = t.parent;
    const u = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const f = c.ec;
      if (f) {
        for (let y = 0; y < f.length; y++)
          if (f[y](e, u, v) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      mi(), Ro(r, null, 10, [
        e,
        u,
        v
      ]), yi();
      return;
    }
  }
  Zb(e, n, a, i, o);
}
function Zb(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const nn = [];
let Gn = -1;
const tr = [];
let Gi = null, Za = 0;
const ph = /* @__PURE__ */ Promise.resolve();
let Ns = null;
function tn(e) {
  const t = Ns || ph;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Jb(e) {
  let t = Gn + 1, n = nn.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = nn[i], r = go(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Gu(e) {
  if (!(e.flags & 1)) {
    const t = go(e), n = nn[nn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= go(n) ? nn.push(e) : nn.splice(Jb(t), 0, e), e.flags |= 1, hh();
  }
}
function hh() {
  Ns || (Ns = ph.then(bh));
}
function vh(e) {
  if (!Ae(e))
    Gi && e.id === -1 ? Gi.splice(Za + 1, 0, e) : e.flags & 1 || (tr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      tr.push(e[t]);
  hh();
}
function ef(e, t, n = Gn + 1) {
  for (; n < nn.length; n++) {
    const i = nn[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      nn.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function gh(e) {
  if (tr.length) {
    const t = [...new Set(tr)].sort(
      (n, i) => go(n) - go(i)
    );
    if (tr.length = 0, Gi) {
      for (let n = 0; n < t.length; n++)
        Gi.push(t[n]);
      return;
    }
    for (Gi = t, Za = 0; Za < Gi.length; Za++) {
      const n = Gi[Za];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Gi = null, Za = 0;
  }
}
const go = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function bh(e) {
  try {
    for (Gn = 0; Gn < nn.length; Gn++) {
      const t = nn[Gn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ro(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Gn < nn.length; Gn++) {
      const t = nn[Gn];
      t && (t.flags &= -2);
    }
    Gn = -1, nn.length = 0, gh(), Ns = null, (nn.length || tr.length) && bh();
  }
}
let Ft = null, Ml = null;
function Ls(e) {
  const t = Ft;
  return Ft = e, Ml = e && e.type.__scopeId || null, t;
}
function Qb(e) {
  Ml = e;
}
function em() {
  Ml = null;
}
const tm = (e) => Ie;
function Ie(e, t = Ft, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Fs(-1);
    const r = Ls(t), o = gi.length;
    let c;
    try {
      c = e(...a);
    } finally {
      for (let u = gi.length; u > o; u--) Ju();
      Ls(r), i._d && Fs(1);
    }
    return c;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Pe(e, t) {
  if (Ft === null)
    return e;
  const n = Vl(Ft), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, c, u = qe] = t[a];
    r && (De(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && fi(o), i.push({
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
function ma(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const c = a[o];
    r && (c.oldValue = r[o].value);
    let u = c.dir[i];
    u && (mi(), Tn(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), yi());
  }
}
function _n(e, t) {
  if (Kt) {
    let n = Kt.provides;
    const i = Kt.parent && Kt.parent.provides;
    i === n && (n = Kt.provides = Object.create(i)), n[e] = t;
  }
}
function Gt(e, t, n = !1) {
  const i = Ma();
  if (i || ir) {
    let a = ir ? ir._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && De(t) ? t.call(i && i.proxy) : t;
  }
}
const nm = /* @__PURE__ */ Symbol.for("v-scx"), im = () => Gt(nm);
function am(e, t) {
  return zl(e, null, t);
}
function rm(e, t) {
  return zl(
    e,
    null,
    { flush: "sync" }
  );
}
function We(e, t, n) {
  return zl(e, t, n);
}
function zl(e, t, n = qe) {
  const { immediate: i, deep: a, flush: r, once: o } = n, c = wt({}, n), u = t && i || !t && r !== "post";
  let v;
  if (So) {
    if (r === "sync") {
      const E = im();
      v = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!u) {
      const E = () => {
      };
      return E.stop = Cn, E.resume = Cn, E.pause = Cn, E;
    }
  }
  const f = Kt;
  c.call = (E, N, A) => Tn(E, f, N, A);
  let y = !1;
  r === "post" ? c.scheduler = (E) => {
    en(E, f && f.suspense);
  } : r !== "sync" && (y = !0, c.scheduler = (E, N) => {
    N ? E() : Gu(E);
  }), c.augmentJob = (E) => {
    t && (E.flags |= 4), y && (E.flags |= 2, f && (E.id = f.uid, E.i = f));
  };
  const C = Xb(e, t, c);
  return So && (v ? v.push(C) : u && C()), C;
}
function om(e, t, n) {
  const i = this.proxy, a = lt(e) ? e.includes(".") ? mh(i, e) : () => i[e] : e.bind(i, i);
  let r;
  De(t) ? r = t : (r = t.handler, n = t);
  const o = $o(this), c = zl(a, r.bind(i), n);
  return o(), c;
}
function mh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Bi = /* @__PURE__ */ new WeakMap(), yh = /* @__PURE__ */ Symbol("_vte"), Ul = (e) => e.__isTeleport, Ea = (e) => e && (e.disabled || e.disabled === ""), sm = (e) => e && (e.defer || e.defer === ""), tf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, nf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, su = (e, t) => {
  const n = e && e.to;
  return lt(n) ? t ? t(n) : null : n;
}, lm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, o, c, u, v) {
    const {
      mc: f,
      pc: y,
      pbc: C,
      o: { insert: E, querySelector: N, createText: A, createComment: O, parentNode: D }
    } = v, M = Ea(t.props);
    let { dynamicChildren: z } = t;
    const k = (Z, pe, Y) => {
      Z.shapeFlag & 16 && f(
        Z.children,
        pe,
        Y,
        a,
        r,
        o,
        c,
        u
      );
    }, oe = (Z = t) => {
      const pe = Ea(Z.props), Y = Z.target = su(Z.props, N), le = lu(Y, Z, A, E);
      Y && (o !== "svg" && tf(Y) ? o = "svg" : o !== "mathml" && nf(Y) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Y), pe || (k(Z, Y, le), Vr(Z, !1)));
    }, ue = (Z) => {
      const pe = () => {
        if (Bi.get(Z) === pe) {
          if (Bi.delete(Z), Ea(Z.props)) {
            const Y = D(Z.el) || n;
            k(Z, Y, Z.anchor), Vr(Z, !0);
          }
          oe(Z);
        }
      };
      Bi.set(Z, pe), en(pe, r);
    };
    if (e == null) {
      const Z = t.el = A(""), pe = t.anchor = A("");
      if (E(Z, n, i), E(pe, n, i), sm(t.props) || r && r.pendingBranch) {
        ue(t);
        return;
      }
      M && (k(t, n, pe), Vr(t, !0)), oe();
    } else {
      t.el = e.el;
      const Z = t.anchor = e.anchor, pe = Bi.get(e);
      if (pe) {
        pe.flags |= 8, Bi.delete(e), ue(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Y = t.target = e.target, le = t.targetAnchor = e.targetAnchor, _e = Ea(e.props), ee = _e ? n : Y, J = _e ? Z : le;
      if (o === "svg" || tf(Y) ? o = "svg" : (o === "mathml" || nf(Y)) && (o = "mathml"), z ? (C(
        e.dynamicChildren,
        z,
        ee,
        a,
        r,
        o,
        c
      ), Zu(e, t, !0)) : u || y(
        e,
        t,
        ee,
        J,
        a,
        r,
        o,
        c,
        !1
      ), M)
        _e ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : fs(
          t,
          n,
          Z,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = su(t.props, N);
        F && (t.target = F, fs(
          t,
          F,
          null,
          v,
          0
        ));
      } else _e && fs(
        t,
        Y,
        le,
        v,
        1
      );
      Vr(t, M);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: c,
      anchor: u,
      targetStart: v,
      targetAnchor: f,
      target: y,
      props: C
    } = e, E = Ea(C), N = r || !E, A = Bi.get(e);
    if (A && (A.flags |= 8, Bi.delete(e)), y && (a(v), a(f)), r && a(u), !A && (E || y) && o & 16)
      for (let O = 0; O < c.length; O++) {
        const D = c[O];
        i(
          D,
          t,
          n,
          N,
          !!D.dynamicChildren
        );
      }
  },
  move: fs,
  hydrate: cm
};
function fs(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: c, shapeFlag: u, children: v, props: f } = e, y = r === 2;
  if (y && i(o, t, n), !Bi.has(e) && (!y || Ea(f)) && u & 16)
    for (let C = 0; C < v.length; C++)
      a(
        v[C],
        t,
        n,
        2
      );
  y && i(c, t, n);
}
function cm(e, t, n, i, a, r, {
  o: { nextSibling: o, parentNode: c, querySelector: u, insert: v, createText: f }
}, y) {
  function C(O, D) {
    let M = D;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, O._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      M = o(M);
    }
  }
  function E(O, D) {
    D.anchor = y(
      o(O),
      D,
      c(O),
      n,
      i,
      a,
      r
    );
  }
  const N = t.target = su(
    t.props,
    u
  ), A = Ea(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), C(N, O), t.targetAnchor || lu(
      N,
      t,
      f,
      v,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === N ? e : null
    )) : (t.anchor = o(e), C(N, O), t.targetAnchor || lu(N, t, f, v), y(
      O && o(O),
      t,
      N,
      n,
      i,
      a,
      r
    ))), Vr(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const _h = lm;
function Vr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function lu(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[yh] = o, e && (i(r, e, a), i(o, e, a)), o;
}
const wn = /* @__PURE__ */ Symbol("_leaveCb"), $r = /* @__PURE__ */ Symbol("_enterCb");
function um() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ea(() => {
    e.isMounted = !0;
  }), cr(() => {
    e.isUnmounting = !0;
  }), e;
}
const bn = [Function, Array], wh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: bn,
  onEnter: bn,
  onAfterEnter: bn,
  onEnterCancelled: bn,
  // leave
  onBeforeLeave: bn,
  onLeave: bn,
  onAfterLeave: bn,
  onLeaveCancelled: bn,
  // appear
  onBeforeAppear: bn,
  onAppear: bn,
  onAfterAppear: bn,
  onAppearCancelled: bn
}, Sh = (e) => {
  const t = e.subTree;
  return t.component ? Sh(t.component) : t;
}, dm = {
  name: "BaseTransition",
  props: wh,
  setup(e, { slots: t }) {
    const n = Ma(), i = um();
    return () => {
      const a = t.default && Th(t.default(), !0), r = a && a.length ? Ch(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? $() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: c } = o;
      if (i.isLeaving)
        return kc(r);
      const u = Rs(r);
      if (!u)
        return kc(r);
      let v = cu(
        u,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (y) => v = y
      );
      u.type !== $t && bo(u, v);
      let f = n.subTree && Rs(n.subTree);
      if (f && f.type !== $t && !Aa(f, u) && Sh(n).type !== $t) {
        let y = cu(
          f,
          o,
          i,
          n
        );
        if (bo(f, y), c === "out-in" && u.type !== $t)
          return i.isLeaving = !0, y.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete y.afterLeave, f = void 0;
          }, kc(r);
        c === "in-out" && u.type !== $t ? y.delayLeave = (C, E, N) => {
          const A = kh(
            i,
            f
          );
          A[String(f.key)] = f, C[wn] = () => {
            E(), C[wn] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            N(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function Ch(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== $t) {
        t = n;
        break;
      }
  }
  return t;
}
const fm = dm;
function kh(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function cu(e, t, n, i, a) {
  const {
    appear: r,
    mode: o,
    persisted: c = !1,
    onBeforeEnter: u,
    onEnter: v,
    onAfterEnter: f,
    onEnterCancelled: y,
    onBeforeLeave: C,
    onLeave: E,
    onAfterLeave: N,
    onLeaveCancelled: A,
    onBeforeAppear: O,
    onAppear: D,
    onAfterAppear: M,
    onAppearCancelled: z
  } = t, k = String(e.key), oe = kh(n, e), ue = (Y, le) => {
    Y && Tn(
      Y,
      i,
      9,
      le
    );
  }, Z = (Y, le) => {
    const _e = le[1];
    ue(Y, le), Ae(Y) ? Y.every((ee) => ee.length <= 1) && _e() : Y.length <= 1 && _e();
  }, pe = {
    mode: o,
    persisted: c,
    beforeEnter(Y) {
      let le = u;
      if (!n.isMounted)
        if (r)
          le = O || u;
        else
          return;
      Y[wn] && Y[wn](
        !0
        /* cancelled */
      );
      const _e = oe[k];
      _e && Aa(e, _e) && _e.el[wn] && _e.el[wn](), ue(le, [Y]);
    },
    enter(Y) {
      if (oe[k] === e) return;
      let le = v, _e = f, ee = y;
      if (!n.isMounted)
        if (r)
          le = D || v, _e = M || f, ee = z || y;
        else
          return;
      let J = !1;
      Y[$r] = (U) => {
        J || (J = !0, U ? ue(ee, [Y]) : ue(_e, [Y]), pe.delayedLeave && pe.delayedLeave(), Y[$r] = void 0);
      };
      const F = Y[$r].bind(null, !1);
      le ? Z(le, [Y, F]) : F();
    },
    leave(Y, le) {
      const _e = String(e.key);
      if (Y[$r] && Y[$r](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return le();
      ue(C, [Y]);
      let ee = !1;
      Y[wn] = (F) => {
        ee || (ee = !0, le(), F ? ue(A, [Y]) : ue(N, [Y]), Y[wn] = void 0, oe[_e] === e && delete oe[_e]);
      };
      const J = Y[wn].bind(null, !1);
      oe[_e] = e, E ? Z(E, [Y, J]) : J();
    },
    clone(Y) {
      const le = cu(
        Y,
        t,
        n,
        i,
        a
      );
      return a && a(le), le;
    }
  };
  return pe;
}
function kc(e) {
  if (jl(e))
    return e = Ji(e), e.children = null, e;
}
function Rs(e) {
  if (!jl(e))
    return Ul(e.type) && e.children ? Ch(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && De(n.default))
      return n.default();
  }
}
function bo(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    bo(
      Ul(n.type) && Rs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Th(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const c = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === ie ? (o.patchFlag & 128 && a++, i = i.concat(
      Th(o.children, t, c)
    )) : (t || o.type !== $t) && i.push(c != null ? Ji(o, { key: c }) : o);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Dt(e, t) {
  return De(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    wt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Eh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function pm(e) {
  const t = Ma(), n = /* @__PURE__ */ uh(null);
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
function af(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Is = /* @__PURE__ */ new WeakMap();
function Qr(e, t, n, i, a = !1) {
  if (Ae(e)) {
    e.forEach(
      (A, O) => Qr(
        A,
        t && (Ae(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (nr(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Qr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Vl(i.component) : i.el, o = a ? null : r, { i: c, r: u } = e, v = t && t.r, f = c.refs === qe ? c.refs = {} : c.refs, y = c.setupState, C = /* @__PURE__ */ Ye(y), E = y === qe ? Bp : (A) => af(f, A) ? !1 : Ze(C, A), N = (A, O) => !(O && af(f, O));
  if (v != null && v !== u) {
    if (rf(t), lt(v))
      f[v] = null, E(v) && (y[v] = null);
    else if (/* @__PURE__ */ Wt(v)) {
      const A = t;
      N(v, A.k) && (v.value = null), A.k && (f[A.k] = null);
    }
  }
  if (De(u))
    Ro(u, c, 12, [o, f]);
  else {
    const A = lt(u), O = /* @__PURE__ */ Wt(u);
    if (A || O) {
      const D = () => {
        if (e.f) {
          const M = A ? E(u) ? y[u] : f[u] : N() || !e.k ? u.value : f[e.k];
          if (a)
            Ae(M) && Du(M, r);
          else if (Ae(M))
            M.includes(r) || M.push(r);
          else if (A)
            f[u] = [r], E(u) && (y[u] = f[u]);
          else {
            const z = [r];
            N(u, e.k) && (u.value = z), e.k && (f[e.k] = z);
          }
        } else A ? (f[u] = o, E(u) && (y[u] = o)) : O && (N(u, e.k) && (u.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const M = () => {
          D(), Is.delete(e);
        };
        M.id = -1, Is.set(e, M), en(M, n);
      } else
        rf(e), D();
    }
  }
}
function rf(e) {
  const t = Is.get(e);
  t && (t.flags |= 8, Is.delete(e));
}
Pl().requestIdleCallback;
Pl().cancelIdleCallback;
const nr = (e) => !!e.type.__asyncLoader, jl = (e) => e.type.__isKeepAlive;
function hm(e, t) {
  Ah(e, "a", t);
}
function vm(e, t) {
  Ah(e, "da", t);
}
function Ah(e, t, n = Kt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Bl(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      jl(a.parent.vnode) && gm(i, t, n, a), a = a.parent;
  }
}
function gm(e, t, n, i) {
  const a = Bl(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Io(() => {
    Du(i[t], a);
  }, n);
}
function Bl(e, t, n = Kt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      mi();
      const c = $o(n), u = Tn(t, n, e, o);
      return c(), yi(), u;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const Ci = (e) => (t, n = Kt) => {
  (!So || e === "sp") && Bl(e, (...i) => t(...i), n);
}, xh = Ci("bm"), ea = Ci("m"), Oh = Ci(
  "bu"
), bm = Ci("u"), cr = Ci(
  "bum"
), Io = Ci("um"), mm = Ci(
  "sp"
), ym = Ci("rtg"), _m = Ci("rtc");
function wm(e, t = Kt) {
  Bl("ec", e, t);
}
const Ku = "components", Sm = "directives";
function Be(e, t) {
  return Wu(Ku, e, !0, t) || e;
}
const Nh = /* @__PURE__ */ Symbol.for("v-ndc");
function qu(e) {
  return lt(e) ? Wu(Ku, e, !1) || e : e || Nh;
}
function of(e) {
  return Wu(Sm, e);
}
function Wu(e, t, n = !0, i = !1) {
  const a = Ft || Kt;
  if (a) {
    const r = a.type;
    if (e === Ku) {
      const c = ay(
        r,
        !1
      );
      if (c && (c === t || c === qt(t) || c === Rl(qt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      sf(a[e] || r[e], t) || // global registration
      sf(a.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function sf(e, t) {
  return e && (e[t] || e[qt(t)] || e[Rl(qt(t))]);
}
function ke(e, t, n, i) {
  let a;
  const r = n, o = Ae(e);
  if (o || lt(e)) {
    const c = o && /* @__PURE__ */ Pa(e);
    let u = !1, v = !1;
    c && (u = !/* @__PURE__ */ kn(e), v = /* @__PURE__ */ _i(e), e = Fl(e)), a = new Array(e.length);
    for (let f = 0, y = e.length; f < y; f++)
      a[f] = t(
        u ? v ? lr(Fn(e[f])) : Fn(e[f]) : e[f],
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
      for (let u = 0, v = c.length; u < v; u++) {
        const f = c[u];
        a[u] = t(e[f], f, u, r);
      }
    }
  else
    a = [];
  return a;
}
function Me(e, t, n, i, a, r) {
  if (n == null && (n = {}), Ft.ce || Ft.parent && nr(Ft.parent) && Ft.parent.ce) {
    const v = n, f = Object.keys(v).length > 0;
    return t !== "default" && (v.name = t), m(), je(
      ie,
      null,
      [Se("slot", v, i && i())],
      f ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const c = gi.length;
  m();
  let u;
  try {
    const v = o && Lh(o(n)), f = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    v && v.key;
    u = je(
      ie,
      {
        key: (f && !$n(f) ? f : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!v && i ? "_fb" : "")
      },
      v || (i ? i() : []),
      v && e._ === 1 ? 64 : -2
    );
  } catch (v) {
    for (let f = gi.length; f > c; f--) Ju();
    throw v;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), u;
}
function Lh(e) {
  return e.some((t) => yo(t) ? !(t.type === $t || t.type === ie && !Lh(t.children)) : !0) ? e : null;
}
const uu = (e) => e ? Qh(e) ? Vl(e) : uu(e.parent) : null, eo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ wt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => uu(e.parent),
    $root: (e) => uu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ph(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = tn.bind(e.proxy)),
    $watch: (e) => om.bind(e)
  })
), Tc = (e, t) => e !== qe && !e.__isScriptSetup && Ze(e, t), Cm = {
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
        if (Tc(i, t))
          return o[t] = 1, i[t];
        if (a !== qe && Ze(a, t))
          return o[t] = 2, a[t];
        if (Ze(r, t))
          return o[t] = 3, r[t];
        if (n !== qe && Ze(n, t))
          return o[t] = 4, n[t];
        du && (o[t] = 0);
      }
    }
    const v = eo[t];
    let f, y;
    if (v)
      return t === "$attrs" && Vt(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== qe && Ze(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      y = u.config.globalProperties, Ze(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return Tc(a, t) ? (a[t] = n, !0) : i !== qe && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: o }
  }, c) {
    let u;
    return !!(n[c] || e !== qe && c[0] !== "$" && Ze(e, c) || Tc(t, c) || Ze(r, c) || Ze(i, c) || Ze(eo, c) || Ze(a.config.globalProperties, c) || (u = o.__cssModules) && u[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function km() {
  return Rh().slots;
}
function Tm() {
  return Rh().attrs;
}
function Rh(e) {
  const t = Ma();
  return t.setupContext || (t.setupContext = tv(t));
}
function Ps(e) {
  return Ae(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Em(e, t) {
  return !e || !t ? e || t : Ae(e) && Ae(t) ? e.concat(t) : wt({}, Ps(e), Ps(t));
}
let du = !0;
function Am(e) {
  const t = Ph(e), n = e.proxy, i = e.ctx;
  du = !1, t.beforeCreate && lf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: c,
    provide: u,
    inject: v,
    // lifecycle
    created: f,
    beforeMount: y,
    mounted: C,
    beforeUpdate: E,
    updated: N,
    activated: A,
    deactivated: O,
    beforeDestroy: D,
    beforeUnmount: M,
    destroyed: z,
    unmounted: k,
    render: oe,
    renderTracked: ue,
    renderTriggered: Z,
    errorCaptured: pe,
    serverPrefetch: Y,
    // public API
    expose: le,
    inheritAttrs: _e,
    // assets
    components: ee,
    directives: J,
    filters: F
  } = t;
  if (v && xm(v, i, null), o)
    for (const ce in o) {
      const ae = o[ce];
      De(ae) && (i[ce] = ae.bind(n));
    }
  if (a) {
    const ce = a.call(n, n);
    Je(ce) && (e.data = /* @__PURE__ */ It(ce));
  }
  if (du = !0, r)
    for (const ce in r) {
      const ae = r[ce], me = De(ae) ? ae.bind(n, n) : De(ae.get) ? ae.get.bind(n, n) : Cn, de = !De(ae) && De(ae.set) ? ae.set.bind(n) : Cn, we = H({
        get: me,
        set: de
      });
      Object.defineProperty(i, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (Ce) => we.value = Ce
      });
    }
  if (c)
    for (const ce in c)
      Ih(c[ce], i, n, ce);
  if (u) {
    const ce = De(u) ? u.call(n) : u;
    Reflect.ownKeys(ce).forEach((ae) => {
      _n(ae, ce[ae]);
    });
  }
  f && lf(f, e, "c");
  function W(ce, ae) {
    Ae(ae) ? ae.forEach((me) => ce(me.bind(n))) : ae && ce(ae.bind(n));
  }
  if (W(xh, y), W(ea, C), W(Oh, E), W(bm, N), W(hm, A), W(vm, O), W(wm, pe), W(_m, ue), W(ym, Z), W(cr, M), W(Io, k), W(mm, Y), Ae(le))
    if (le.length) {
      const ce = e.exposed || (e.exposed = {});
      le.forEach((ae) => {
        Object.defineProperty(ce, ae, {
          get: () => n[ae],
          set: (me) => n[ae] = me,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === Cn && (e.render = oe), _e != null && (e.inheritAttrs = _e), ee && (e.components = ee), J && (e.directives = J), Y && Eh(e);
}
function xm(e, t, n = Cn) {
  Ae(e) && (e = fu(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Je(a) ? "default" in a ? r = Gt(
      a.from || i,
      a.default,
      !0
    ) : r = Gt(a.from || i) : r = Gt(a), /* @__PURE__ */ Wt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function lf(e, t, n) {
  Tn(
    Ae(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ih(e, t, n, i) {
  let a = i.includes(".") ? mh(n, i) : () => n[i];
  if (lt(e)) {
    const r = t[e];
    De(r) && We(a, r);
  } else if (De(e))
    We(a, e.bind(n));
  else if (Je(e))
    if (Ae(e))
      e.forEach((r) => Ih(r, t, n, i));
    else {
      const r = De(e.handler) ? e.handler.bind(n) : t[e.handler];
      De(r) && We(a, r, e);
    }
}
function Ph(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !a.length && !n && !i ? u = t : (u = {}, a.length && a.forEach(
    (v) => $s(u, v, o, !0)
  ), $s(u, t, o)), Je(t) && r.set(t, u), u;
}
function $s(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && $s(e, r, n, !0), a && a.forEach(
    (o) => $s(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const c = Om[o] || n && n[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const Om = {
  data: cf,
  props: uf,
  emits: uf,
  // objects
  methods: Gr,
  computed: Gr,
  // lifecycle
  beforeCreate: Qt,
  created: Qt,
  beforeMount: Qt,
  mounted: Qt,
  beforeUpdate: Qt,
  updated: Qt,
  beforeDestroy: Qt,
  beforeUnmount: Qt,
  destroyed: Qt,
  unmounted: Qt,
  activated: Qt,
  deactivated: Qt,
  errorCaptured: Qt,
  serverPrefetch: Qt,
  // assets
  components: Gr,
  directives: Gr,
  // watch
  watch: Lm,
  // provide / inject
  provide: cf,
  inject: Nm
};
function cf(e, t) {
  return t ? e ? function() {
    return wt(
      De(e) ? e.call(this, this) : e,
      De(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nm(e, t) {
  return Gr(fu(e), fu(t));
}
function fu(e) {
  if (Ae(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gr(e, t) {
  return e ? wt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function uf(e, t) {
  return e ? Ae(e) && Ae(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : wt(
    /* @__PURE__ */ Object.create(null),
    Ps(e),
    Ps(t ?? {})
  ) : t;
}
function Lm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = wt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Qt(e[i], t[i]);
  return n;
}
function $h() {
  return {
    app: null,
    config: {
      isNativeTag: Bp,
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
let Rm = 0;
function Im(e, t) {
  return function(i, a = null) {
    De(i) || (i = wt({}, i)), a != null && !Je(a) && (a = null);
    const r = $h(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const v = r.app = {
      _uid: Rm++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: oy,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...y) {
        return o.has(f) || (f && De(f.install) ? (o.add(f), f.install(v, ...y)) : De(f) && (o.add(f), f(v, ...y))), v;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), v;
      },
      component(f, y) {
        return y ? (r.components[f] = y, v) : r.components[f];
      },
      directive(f, y) {
        return y ? (r.directives[f] = y, v) : r.directives[f];
      },
      mount(f, y, C) {
        if (!u) {
          const E = v._ceVNode || Se(i, a);
          return E.appContext = r, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(E, f, C), u = !0, v._container = f, f.__vue_app__ = v, Vl(E.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        u && (Tn(
          c,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(f, y) {
        return r.provides[f] = y, v;
      },
      runWithContext(f) {
        const y = ir;
        ir = v;
        try {
          return f();
        } finally {
          ir = y;
        }
      }
    };
    return v;
  };
}
let ir = null;
function Fh(e, t, n = qe) {
  const i = Ma(), a = qt(t), r = Si(t), o = Dh(e, a), c = Kb((u, v) => {
    let f, y = qe, C;
    return rm(() => {
      const E = e[a];
      Pt(f, E) && (f = E, v());
    }), {
      get() {
        return u(), n.get ? n.get(f) : f;
      },
      set(E) {
        const N = n.set ? n.set(E) : E;
        if (!Pt(N, f) && !(y !== qe && Pt(E, y)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (f = E, v()), i.emit(`update:${t}`, N), Pt(E, y) && (Pt(E, N) && !Pt(N, C) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && y !== qe && !Pt(N, f)) && v(), y = E, C = N;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? o || qe : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const Dh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qt(t)}Modifiers`] || e[`${Si(t)}Modifiers`];
function Pm(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || qe;
  let a = n;
  const r = t.startsWith("update:"), o = r && Dh(i, t.slice(7));
  o && (o.trim && (a = n.map((f) => lt(f) ? f.trim() : f)), o.number && (a = a.map(Il)));
  let c, u = i[c = yc(t)] || // also try camelCase event handler (#2249)
  i[c = yc(qt(t))];
  !u && r && (u = i[c = yc(Si(t))]), u && Tn(
    u,
    e,
    6,
    a
  );
  const v = i[c + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Tn(
      v,
      e,
      6,
      a
    );
  }
}
const $m = /* @__PURE__ */ new WeakMap();
function Mh(e, t, n = !1) {
  const i = n ? $m : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, c = !1;
  if (!De(e)) {
    const u = (v) => {
      const f = Mh(v, t, !0);
      f && (c = !0, wt(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (Je(e) && i.set(e, null), null) : (Ae(r) ? r.forEach((u) => o[u] = null) : wt(o, r), Je(e) && i.set(e, o), o);
}
function Hl(e, t) {
  return !e || !Ol(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, Si(t)) || Ze(e, t));
}
function df(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: c,
    emit: u,
    render: v,
    renderCache: f,
    props: y,
    data: C,
    setupState: E,
    ctx: N,
    inheritAttrs: A
  } = e, O = Ls(e);
  let D, M;
  try {
    if (n.shapeFlag & 4) {
      const k = a || i, oe = k;
      D = Yn(
        v.call(
          oe,
          k,
          f,
          y,
          E,
          C,
          N
        )
      ), M = c;
    } else {
      const k = t;
      D = Yn(
        k.length > 1 ? k(
          y,
          { attrs: c, slots: o, emit: u }
        ) : k(
          y,
          null
        )
      ), M = t.props ? c : Fm(c);
    }
  } catch (k) {
    gi.length = 0, Dl(k, e, 1), D = Se($t);
  }
  let z = D;
  if (M && A !== !1) {
    const k = Object.keys(M), { shapeFlag: oe } = z;
    k.length && oe & 7 && (r && k.some(Nl) && (M = Dm(
      M,
      r
    )), z = Ji(z, M, !1, !0));
  }
  if (n.dirs && (z = Ji(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const k = Ul(z.type) && Rs(z) || z;
    bo(k, n.transition);
  }
  return D = z, Ls(O), D;
}
const Fm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ol(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Dm = (e, t) => {
  const n = {};
  for (const i in e)
    (!Nl(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Mm(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: o, children: c, patchFlag: u } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return i ? ff(i, o, v) : !!o;
    if (u & 8) {
      const f = t.dynamicProps;
      for (let y = 0; y < f.length; y++) {
        const C = f[y];
        if (zh(o, i, C) && !Hl(v, C))
          return !0;
      }
    }
  } else
    return (a || c) && (!c || !c.$stable) ? !0 : i === o ? !1 : i ? o ? ff(i, o, v) : !0 : !!o;
  return !1;
}
function ff(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (zh(t, e, r) && !Hl(n, r))
      return !0;
  }
  return !1;
}
function zh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Je(i) && Je(a) ? !Zi(i, a) : i !== a;
}
function zm({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Uh = {}, jh = () => Object.create(Uh), Bh = (e) => Object.getPrototypeOf(e) === Uh;
function Um(e, t, n, i = !1) {
  const a = {}, r = jh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hh(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ jb(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function jm(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, c = /* @__PURE__ */ Ye(a), [u] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let y = 0; y < f.length; y++) {
        let C = f[y];
        if (Hl(e.emitsOptions, C))
          continue;
        const E = t[C];
        if (u)
          if (Ze(r, C))
            E !== r[C] && (r[C] = E, v = !0);
          else {
            const N = qt(C);
            a[N] = pu(
              u,
              c,
              N,
              E,
              e,
              !1
            );
          }
        else
          E !== r[C] && (r[C] = E, v = !0);
      }
    }
  } else {
    Hh(e, t, a, r) && (v = !0);
    let f;
    for (const y in c)
      (!t || // for camelCase
      !Ze(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Si(y)) === y || !Ze(t, f))) && (u ? n && // for camelCase
      (n[y] !== void 0 || // for kebab-case
      n[f] !== void 0) && (a[y] = pu(
        u,
        c,
        y,
        void 0,
        e,
        !0
      )) : delete a[y]);
    if (r !== c)
      for (const y in r)
        (!t || !Ze(t, y)) && (delete r[y], v = !0);
  }
  v && di(e.attrs, "set", "");
}
function Hh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (Xr(u))
        continue;
      const v = t[u];
      let f;
      a && Ze(a, f = qt(u)) ? !r || !r.includes(f) ? n[f] = v : (c || (c = {}))[f] = v : Hl(e.emitsOptions, u) || (!(u in i) || v !== i[u]) && (i[u] = v, o = !0);
    }
  if (r) {
    const u = /* @__PURE__ */ Ye(n), v = c || qe;
    for (let f = 0; f < r.length; f++) {
      const y = r[f];
      n[y] = pu(
        a,
        u,
        y,
        v[y],
        e,
        !Ze(v, y)
      );
    }
  }
  return o;
}
function pu(e, t, n, i, a, r) {
  const o = e[n];
  if (o != null) {
    const c = Ze(o, "default");
    if (c && i === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && De(u)) {
        const { propsDefaults: v } = a;
        if (n in v)
          i = v[n];
        else {
          const f = $o(a);
          i = v[n] = u.call(
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
    ] && (i === "" || i === Si(n)) && (i = !0));
  }
  return i;
}
const Bm = /* @__PURE__ */ new WeakMap();
function Vh(e, t, n = !1) {
  const i = n ? Bm : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, c = [];
  let u = !1;
  if (!De(e)) {
    const f = (y) => {
      u = !0;
      const [C, E] = Vh(y, t, !0);
      wt(o, C), E && c.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !u)
    return Je(e) && i.set(e, er), er;
  if (Ae(r))
    for (let f = 0; f < r.length; f++) {
      const y = qt(r[f]);
      pf(y) && (o[y] = qe);
    }
  else if (r)
    for (const f in r) {
      const y = qt(f);
      if (pf(y)) {
        const C = r[f], E = o[y] = Ae(C) || De(C) ? { type: C } : wt({}, C), N = E.type;
        let A = !1, O = !0;
        if (Ae(N))
          for (let D = 0; D < N.length; ++D) {
            const M = N[D], z = De(M) && M.name;
            if (z === "Boolean") {
              A = !0;
              break;
            } else z === "String" && (O = !1);
          }
        else
          A = De(N) && N.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = A, E[
          1
          /* shouldCastTrue */
        ] = O, (A || Ze(E, "default")) && c.push(y);
      }
    }
  const v = [o, c];
  return Je(e) && i.set(e, v), v;
}
function pf(e) {
  return e[0] !== "$" && !Xr(e);
}
const Yu = (e) => e === "_" || e === "_ctx" || e === "$stable", Xu = (e) => Ae(e) ? e.map(Yn) : [Yn(e)], Hm = (e, t, n) => {
  if (t._n)
    return t;
  const i = Ie((...a) => Xu(t(...a)), n);
  return i._c = !1, i;
}, Gh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Yu(a)) continue;
    const r = e[a];
    if (De(r))
      t[a] = Hm(a, r, i);
    else if (r != null) {
      const o = Xu(r);
      t[a] = () => o;
    }
  }
}, Kh = (e, t) => {
  const n = Xu(t);
  e.slots.default = () => n;
}, qh = (e, t, n) => {
  for (const i in t)
    (n || !Yu(i)) && (e[i] = t[i]);
}, Vm = (e, t, n) => {
  const i = e.slots = jh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (qh(i, t, n), n && Kp(i, "_", a, !0)) : Gh(t, i);
  } else t && Kh(e, t);
}, Gm = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, o = qe;
  if (i.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? r = !1 : qh(a, t, n) : (r = !t.$stable, Gh(t, a)), o = t;
  } else t && (Kh(e, t), o = { default: 1 });
  if (r)
    for (const c in a)
      !Yu(c) && o[c] == null && delete a[c];
}, en = Xm;
function Km(e) {
  return qm(e);
}
function qm(e, t) {
  const n = Pl();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: c,
    createComment: u,
    setText: v,
    setElementText: f,
    parentNode: y,
    nextSibling: C,
    setScopeId: E = Cn,
    insertStaticContent: N
  } = e, A = (w, T, x, R = null, I = null, j = null, K = void 0, G = null, Q = !!T.dynamicChildren) => {
    if (w === T)
      return;
    w && !Aa(w, T) && (R = tt(w), Ce(w, I, j, !0), w = null), T.patchFlag === -2 && (Q = !1, T.dynamicChildren = null);
    const { type: V, ref: he, shapeFlag: se } = T;
    switch (V) {
      case Po:
        O(w, T, x, R);
        break;
      case $t:
        D(w, T, x, R);
        break;
      case ks:
        w == null && M(T, x, R, K);
        break;
      case ie:
        ee(
          w,
          T,
          x,
          R,
          I,
          j,
          K,
          G,
          Q
        );
        break;
      default:
        se & 1 ? oe(
          w,
          T,
          x,
          R,
          I,
          j,
          K,
          G,
          Q
        ) : se & 6 ? J(
          w,
          T,
          x,
          R,
          I,
          j,
          K,
          G,
          Q
        ) : (se & 64 || se & 128) && V.process(
          w,
          T,
          x,
          R,
          I,
          j,
          K,
          G,
          Q,
          Mt
        );
    }
    he != null && I ? Qr(he, w && w.ref, j, T || w, !T) : he == null && w && w.ref != null && Qr(w.ref, null, j, w, !0);
  }, O = (w, T, x, R) => {
    if (w == null)
      i(
        T.el = c(T.children),
        x,
        R
      );
    else {
      const I = T.el = w.el;
      T.children !== w.children && v(I, T.children);
    }
  }, D = (w, T, x, R) => {
    w == null ? i(
      T.el = u(T.children || ""),
      x,
      R
    ) : T.el = w.el;
  }, M = (w, T, x, R) => {
    [w.el, w.anchor] = N(
      w.children,
      T,
      x,
      R,
      w.el,
      w.anchor
    );
  }, z = ({ el: w, anchor: T }, x, R) => {
    let I;
    for (; w && w !== T; )
      I = C(w), i(w, x, R), w = I;
    i(T, x, R);
  }, k = ({ el: w, anchor: T }) => {
    let x;
    for (; w && w !== T; )
      x = C(w), a(w), w = x;
    a(T);
  }, oe = (w, T, x, R, I, j, K, G, Q) => {
    if (T.type === "svg" ? K = "svg" : T.type === "math" && (K = "mathml"), w == null)
      ue(
        T,
        x,
        R,
        I,
        j,
        K,
        G,
        Q
      );
    else {
      const V = w.el && w.el._isVueCE ? w.el : null;
      try {
        V && V._beginPatch(), Y(
          w,
          T,
          I,
          j,
          K,
          G,
          Q
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, ue = (w, T, x, R, I, j, K, G) => {
    let Q, V;
    const { props: he, shapeFlag: se, transition: ve, dirs: xe } = w;
    if (Q = w.el = o(
      w.type,
      j,
      he && he.is,
      he
    ), se & 8 ? f(Q, w.children) : se & 16 && pe(
      w.children,
      Q,
      null,
      R,
      I,
      Ec(w, j),
      K,
      G
    ), xe && ma(w, null, R, "created"), Z(Q, w, w.scopeId, K, R), he) {
      for (const ze in he)
        ze !== "value" && !Xr(ze) && r(Q, ze, null, he[ze], j, R);
      "value" in he && r(Q, "value", null, he.value, j), (V = he.onVnodeBeforeMount) && Vn(V, R, w);
    }
    xe && ma(w, null, R, "beforeMount");
    const $e = Wm(I, ve);
    $e && ve.beforeEnter(Q), i(Q, T, x), ((V = he && he.onVnodeMounted) || $e || xe) && en(() => {
      V && Vn(V, R, w), $e && ve.enter(Q), xe && ma(w, null, R, "mounted");
    }, I);
  }, Z = (w, T, x, R, I) => {
    if (x && E(w, x), R)
      for (let j = 0; j < R.length; j++)
        E(w, R[j]);
    if (I) {
      let j = I.subTree;
      if (T === j || Xh(j.type) && (j.ssContent === T || j.ssFallback === T)) {
        const K = I.vnode;
        Z(
          w,
          K,
          K.scopeId,
          K.slotScopeIds,
          I.parent
        );
      }
    }
  }, pe = (w, T, x, R, I, j, K, G, Q = 0) => {
    for (let V = Q; V < w.length; V++) {
      const he = w[V] = G ? ui(w[V]) : Yn(w[V]);
      A(
        null,
        he,
        T,
        x,
        R,
        I,
        j,
        K,
        G
      );
    }
  }, Y = (w, T, x, R, I, j, K) => {
    const G = T.el = w.el;
    let { patchFlag: Q, dynamicChildren: V, dirs: he } = T;
    Q |= w.patchFlag & 16;
    const se = w.props || qe, ve = T.props || qe;
    let xe;
    if (x && ya(x, !1), (xe = ve.onVnodeBeforeUpdate) && Vn(xe, x, T, w), he && ma(T, w, x, "beforeUpdate"), x && ya(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!w.dynamicChildren || w.dynamicChildren.length !== V.length) && (Q = 0, K = !1, V = null), (se.innerHTML && ve.innerHTML == null || se.textContent && ve.textContent == null) && f(G, ""), V ? le(
      w.dynamicChildren,
      V,
      G,
      x,
      R,
      Ec(T, I),
      j
    ) : K || ae(
      w,
      T,
      G,
      null,
      x,
      R,
      Ec(T, I),
      j,
      !1
    ), Q > 0) {
      if (Q & 16)
        _e(G, se, ve, x, I);
      else if (Q & 2 && se.class !== ve.class && r(G, "class", null, ve.class, I), Q & 4 && r(G, "style", se.style, ve.style, I), Q & 8) {
        const $e = T.dynamicProps;
        for (let ze = 0; ze < $e.length; ze++) {
          const Fe = $e[ze], He = se[Fe], ot = ve[Fe];
          (ot !== He || Fe === "value") && r(G, Fe, He, ot, I, x);
        }
      }
      Q & 1 && w.children !== T.children && f(G, T.children);
    } else !K && V == null && _e(G, se, ve, x, I);
    ((xe = ve.onVnodeUpdated) || he) && en(() => {
      xe && Vn(xe, x, T, w), he && ma(T, w, x, "updated");
    }, R);
  }, le = (w, T, x, R, I, j, K) => {
    for (let G = 0; G < T.length; G++) {
      const Q = w[G], V = T[G], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Aa(Q, V) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? y(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      A(
        Q,
        V,
        he,
        null,
        R,
        I,
        j,
        K,
        !0
      );
    }
  }, _e = (w, T, x, R, I) => {
    if (T !== x) {
      if (T !== qe)
        for (const j in T)
          !Xr(j) && !(j in x) && r(
            w,
            j,
            T[j],
            null,
            I,
            R
          );
      for (const j in x) {
        if (Xr(j)) continue;
        const K = x[j], G = T[j];
        K !== G && j !== "value" && r(w, j, G, K, I, R);
      }
      "value" in x && r(w, "value", T.value, x.value, I);
    }
  }, ee = (w, T, x, R, I, j, K, G, Q) => {
    const V = T.el = w ? w.el : c(""), he = T.anchor = w ? w.anchor : c("");
    let { patchFlag: se, dynamicChildren: ve, slotScopeIds: xe } = T;
    xe && (G = G ? G.concat(xe) : xe), w == null ? (i(V, x, R), i(he, x, R), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      x,
      he,
      I,
      j,
      K,
      G,
      Q
    )) : se > 0 && se & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren && w.dynamicChildren.length === ve.length ? (le(
      w.dynamicChildren,
      ve,
      x,
      I,
      j,
      K,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (T.key != null || I && T === I.subTree) && Zu(
      w,
      T,
      !0
      /* shallow */
    )) : ae(
      w,
      T,
      x,
      he,
      I,
      j,
      K,
      G,
      Q
    );
  }, J = (w, T, x, R, I, j, K, G, Q) => {
    T.slotScopeIds = G, w == null ? T.shapeFlag & 512 ? I.ctx.activate(
      T,
      x,
      R,
      K,
      Q
    ) : F(
      T,
      x,
      R,
      I,
      j,
      K,
      Q
    ) : U(w, T, Q);
  }, F = (w, T, x, R, I, j, K) => {
    const G = w.component = ey(
      w,
      R,
      I
    );
    if (jl(w) && (G.ctx.renderer = Mt), ty(G, !1, K), G.asyncDep) {
      if (I && I.registerDep(G, W, K), !w.el) {
        const Q = G.subTree = Se($t);
        D(null, Q, T, x), w.placeholder = Q.el;
      }
    } else
      W(
        G,
        w,
        T,
        x,
        I,
        j,
        K
      );
  }, U = (w, T, x) => {
    const R = T.component = w.component;
    if (Mm(w, T, x))
      if (R.asyncDep && !R.asyncResolved) {
        ce(R, T, x);
        return;
      } else
        R.next = T, R.update();
    else
      T.el = w.el, R.vnode = T;
  }, W = (w, T, x, R, I, j, K) => {
    const G = () => {
      if (w.isMounted) {
        let { next: se, bu: ve, u: xe, parent: $e, vnode: ze } = w;
        {
          const Et = Wh(w);
          if (Et) {
            se && (se.el = ze.el, ce(w, se, K)), Et.asyncDep.then(() => {
              en(() => {
                w.isUnmounted || V();
              }, I);
            });
            return;
          }
        }
        let Fe = se, He;
        ya(w, !1), se ? (se.el = ze.el, ce(w, se, K)) : se = ze, ve && Cs(ve), (He = se.props && se.props.onVnodeBeforeUpdate) && Vn(He, $e, se, ze), ya(w, !0);
        const ot = df(w), vt = w.subTree;
        w.subTree = ot, A(
          vt,
          ot,
          // parent may have changed if it's in a teleport
          y(vt.el),
          // anchor may have changed if it's in a fragment
          tt(vt),
          w,
          I,
          j
        ), se.el = ot.el, Fe === null && zm(w, ot.el), xe && en(xe, I), (He = se.props && se.props.onVnodeUpdated) && en(
          () => Vn(He, $e, se, ze),
          I
        );
      } else {
        let se;
        const { el: ve, props: xe } = T, { bm: $e, m: ze, parent: Fe, root: He, type: ot } = w, vt = nr(T);
        ya(w, !1), $e && Cs($e), !vt && (se = xe && xe.onVnodeBeforeMount) && Vn(se, Fe, T), ya(w, !0);
        {
          He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(
            ot,
            w.parent ? w.parent.type : void 0
          );
          const Et = w.subTree = df(w);
          A(
            null,
            Et,
            x,
            R,
            w,
            I,
            j
          ), T.el = Et.el;
        }
        if (ze && en(ze, I), !vt && (se = xe && xe.onVnodeMounted)) {
          const Et = T;
          en(
            () => Vn(se, Fe, Et),
            I
          );
        }
        (T.shapeFlag & 256 || Fe && nr(Fe.vnode) && Fe.vnode.shapeFlag & 256) && w.a && en(w.a, I), w.isMounted = !0, T = x = R = null;
      }
    };
    w.scope.on();
    const Q = w.effect = new Xp(G);
    w.scope.off();
    const V = w.update = Q.run.bind(Q), he = w.job = Q.runIfDirty.bind(Q);
    he.i = w, he.id = w.uid, Q.scheduler = () => Gu(he), ya(w, !0), V();
  }, ce = (w, T, x) => {
    T.component = w;
    const R = w.vnode.props;
    w.vnode = T, w.next = null, jm(w, T.props, R, x), Gm(w, T.children, x), mi(), ef(w), yi();
  }, ae = (w, T, x, R, I, j, K, G, Q = !1) => {
    const V = w && w.children, he = w ? w.shapeFlag : 0, se = T.children, { patchFlag: ve, shapeFlag: xe } = T;
    if (ve > 0) {
      if (ve & 128) {
        de(
          V,
          se,
          x,
          R,
          I,
          j,
          K,
          G,
          Q
        );
        return;
      } else if (ve & 256) {
        me(
          V,
          se,
          x,
          R,
          I,
          j,
          K,
          G,
          Q
        );
        return;
      }
    }
    xe & 8 ? (he & 16 && ht(V, I, j), se !== V && f(x, se)) : he & 16 ? xe & 16 ? de(
      V,
      se,
      x,
      R,
      I,
      j,
      K,
      G,
      Q
    ) : ht(V, I, j, !0) : (he & 8 && f(x, ""), xe & 16 && pe(
      se,
      x,
      R,
      I,
      j,
      K,
      G,
      Q
    ));
  }, me = (w, T, x, R, I, j, K, G, Q) => {
    w = w || er, T = T || er;
    const V = w.length, he = T.length, se = Math.min(V, he);
    let ve;
    for (ve = 0; ve < se; ve++) {
      const xe = T[ve] = Q ? ui(T[ve]) : Yn(T[ve]);
      A(
        w[ve],
        xe,
        x,
        null,
        I,
        j,
        K,
        G,
        Q
      );
    }
    V > he ? ht(
      w,
      I,
      j,
      !0,
      !1,
      se
    ) : pe(
      T,
      x,
      R,
      I,
      j,
      K,
      G,
      Q,
      se
    );
  }, de = (w, T, x, R, I, j, K, G, Q) => {
    let V = 0;
    const he = T.length;
    let se = w.length - 1, ve = he - 1;
    for (; V <= se && V <= ve; ) {
      const xe = w[V], $e = T[V] = Q ? ui(T[V]) : Yn(T[V]);
      if (Aa(xe, $e))
        A(
          xe,
          $e,
          x,
          null,
          I,
          j,
          K,
          G,
          Q
        );
      else
        break;
      V++;
    }
    for (; V <= se && V <= ve; ) {
      const xe = w[se], $e = T[ve] = Q ? ui(T[ve]) : Yn(T[ve]);
      if (Aa(xe, $e))
        A(
          xe,
          $e,
          x,
          null,
          I,
          j,
          K,
          G,
          Q
        );
      else
        break;
      se--, ve--;
    }
    if (V > se) {
      if (V <= ve) {
        const xe = ve + 1, $e = xe < he ? T[xe].el : R;
        for (; V <= ve; )
          A(
            null,
            T[V] = Q ? ui(T[V]) : Yn(T[V]),
            x,
            $e,
            I,
            j,
            K,
            G,
            Q
          ), V++;
      }
    } else if (V > ve)
      for (; V <= se; )
        Ce(w[V], I, j, !0), V++;
    else {
      const xe = V, $e = V, ze = /* @__PURE__ */ new Map();
      for (V = $e; V <= ve; V++) {
        const et = T[V] = Q ? ui(T[V]) : Yn(T[V]);
        et.key != null && ze.set(et.key, V);
      }
      let Fe, He = 0;
      const ot = ve - $e + 1;
      let vt = !1, Et = 0;
      const zt = new Array(ot);
      for (V = 0; V < ot; V++) zt[V] = 0;
      for (V = xe; V <= se; V++) {
        const et = w[V];
        if (He >= ot) {
          Ce(et, I, j, !0);
          continue;
        }
        let dt;
        if (et.key != null)
          dt = ze.get(et.key);
        else
          for (Fe = $e; Fe <= ve; Fe++)
            if (zt[Fe - $e] === 0 && Aa(et, T[Fe])) {
              dt = Fe;
              break;
            }
        dt === void 0 ? Ce(et, I, j, !0) : (zt[dt - $e] = V + 1, dt >= Et ? Et = dt : vt = !0, A(
          et,
          T[dt],
          x,
          null,
          I,
          j,
          K,
          G,
          Q
        ), He++);
      }
      const En = vt ? Ym(zt) : er;
      for (Fe = En.length - 1, V = ot - 1; V >= 0; V--) {
        const et = $e + V, dt = T[et], Dn = T[et + 1], gn = et + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Dn.el || Yh(Dn)
        ) : R;
        zt[V] === 0 ? A(
          null,
          dt,
          x,
          gn,
          I,
          j,
          K,
          G,
          Q
        ) : vt && (Fe < 0 || V !== En[Fe] ? we(dt, x, gn, 2) : Fe--);
      }
    }
  }, we = (w, T, x, R, I = null) => {
    const { el: j, type: K, transition: G, children: Q, shapeFlag: V } = w;
    if (V & 6) {
      we(w.component.subTree, T, x, R);
      return;
    }
    if (V & 128) {
      w.suspense.move(T, x, R);
      return;
    }
    if (V & 64) {
      K.move(w, T, x, Mt);
      return;
    }
    if (K === ie) {
      i(j, T, x);
      for (let se = 0; se < Q.length; se++)
        we(Q[se], T, x, R);
      i(w.anchor, T, x);
      return;
    }
    if (K === ks) {
      z(w, T, x);
      return;
    }
    if (R !== 2 && V & 1 && G)
      if (R === 0)
        G.persisted && !j[wn] ? i(j, T, x) : (G.beforeEnter(j), i(j, T, x), en(() => G.enter(j), I));
      else {
        const { leave: se, delayLeave: ve, afterLeave: xe } = G, $e = () => {
          w.ctx.isUnmounted ? a(j) : i(j, T, x);
        }, ze = () => {
          const Fe = j._isLeaving || !!j[wn];
          j._isLeaving && j[wn](
            !0
            /* cancelled */
          ), G.persisted && !Fe ? $e() : se(j, () => {
            $e(), xe && xe();
          });
        };
        ve ? ve(j, $e, ze) : ze();
      }
    else
      i(j, T, x);
  }, Ce = (w, T, x, R = !1, I = !1) => {
    const {
      type: j,
      props: K,
      ref: G,
      children: Q,
      dynamicChildren: V,
      shapeFlag: he,
      patchFlag: se,
      dirs: ve,
      cacheIndex: xe,
      memo: $e
    } = w;
    if (se === -2 && (I = !1), G != null && (mi(), Qr(G, null, x, w, !0), yi()), xe != null && (T.renderCache[xe] = void 0), he & 256) {
      T.ctx.deactivate(w);
      return;
    }
    const ze = he & 1 && ve, Fe = !nr(w);
    let He;
    if (Fe && (He = K && K.onVnodeBeforeUnmount) && Vn(He, T, w), he & 6)
      ct(w.component, x, R);
    else {
      if (he & 128) {
        w.suspense.unmount(x, R);
        return;
      }
      ze && ma(w, null, T, "beforeUnmount"), he & 64 ? w.type.remove(
        w,
        T,
        x,
        Mt,
        R
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== ie || se > 0 && se & 64) ? ht(
        V,
        T,
        x,
        !1,
        !0
      ) : (j === ie && se & 384 || !I && he & 16) && ht(Q, T, x), R && Ge(w);
    }
    const ot = $e != null && xe == null;
    (Fe && (He = K && K.onVnodeUnmounted) || ze || ot) && en(() => {
      He && Vn(He, T, w), ze && ma(w, null, T, "unmounted"), ot && (w.el = null);
    }, x);
  }, Ge = (w) => {
    const { type: T, el: x, anchor: R, transition: I } = w;
    if (T === ie) {
      Le(x, R);
      return;
    }
    if (T === ks) {
      k(w);
      return;
    }
    const j = () => {
      a(x), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (w.shapeFlag & 1 && I && !I.persisted) {
      const { leave: K, delayLeave: G } = I, Q = () => K(x, j);
      G ? G(w.el, j, Q) : Q();
    } else
      j();
  }, Le = (w, T) => {
    let x;
    for (; w !== T; )
      x = C(w), a(w), w = x;
    a(T);
  }, ct = (w, T, x) => {
    const { bum: R, scope: I, job: j, subTree: K, um: G, m: Q, a: V } = w;
    hf(Q), hf(V), R && Cs(R), I.stop(), j && (j.flags |= 8, Ce(K, w, T, x)), G && en(G, T), en(() => {
      w.isUnmounted = !0;
    }, T);
  }, ht = (w, T, x, R = !1, I = !1, j = 0) => {
    for (let K = j; K < w.length; K++)
      Ce(w[K], T, x, R, I);
  }, tt = (w) => {
    if (w.shapeFlag & 6)
      return tt(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const T = C(w.anchor || w.el), x = T && T[yh];
    return x ? C(x) : T;
  };
  let ut = !1;
  const rt = (w, T, x) => {
    let R;
    w == null ? T._vnode && (Ce(T._vnode, null, null, !0), R = T._vnode.component) : A(
      T._vnode || null,
      w,
      T,
      null,
      null,
      null,
      x
    ), T._vnode = w, ut || (ut = !0, ef(R), gh(), ut = !1);
  }, Mt = {
    p: A,
    um: Ce,
    m: we,
    r: Ge,
    mt: F,
    mc: pe,
    pc: ae,
    pbc: le,
    n: tt,
    o: e
  };
  return {
    render: rt,
    hydrate: void 0,
    createApp: Im(rt)
  };
}
function Ec({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ya({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Zu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Ae(i) && Ae(a))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let c = a[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = a[r] = ui(a[r]), c.el = o.el), !n && c.patchFlag !== -2 && Zu(o, c)), c.type === Po && (c.patchFlag === -1 && (c = a[r] = ui(c)), c.el = o.el), c.type === $t && !c.el && (c.el = o.el);
    }
}
function Ym(e) {
  const t = e.slice(), n = [0];
  let i, a, r, o, c;
  const u = e.length;
  for (i = 0; i < u; i++) {
    const v = e[i];
    if (v !== 0) {
      if (a = n[n.length - 1], e[a] < v) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        c = r + o >> 1, e[n[c]] < v ? r = c + 1 : o = c;
      v < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function Wh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Wh(t);
}
function hf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Yh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Yh(t.subTree) : null;
}
const Xh = (e) => e.__isSuspense;
function Xm(e, t) {
  t && t.pendingBranch ? Ae(e) ? t.effects.push(...e) : t.effects.push(e) : vh(e);
}
const ie = /* @__PURE__ */ Symbol.for("v-fgt"), Po = /* @__PURE__ */ Symbol.for("v-txt"), $t = /* @__PURE__ */ Symbol.for("v-cmt"), ks = /* @__PURE__ */ Symbol.for("v-stc"), gi = [];
let hn = null;
function m(e = !1) {
  gi.push(hn = e ? null : []);
}
function Ju() {
  gi.pop(), hn = gi[gi.length - 1] || null;
}
let mo = 1;
function Fs(e, t = !1) {
  mo += e, e < 0 && hn && t && (hn.hasOnce = !0);
}
function Zh(e) {
  return e.dynamicChildren = mo > 0 ? hn || er : null, Ju(), mo > 0 && hn && hn.push(e), e;
}
function _(e, t, n, i, a, r) {
  return Zh(
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
  return Zh(
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
function yo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Aa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Jh = ({ key: e }) => e ?? null, Ts = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || /* @__PURE__ */ Wt(e) || De(e) ? { i: Ft, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, i = 0, a = null, r = e === ie ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Jh(t),
    ref: t && Ts(t),
    scopeId: Ml,
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
    ctx: Ft
  };
  return c ? (Ds(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= lt(n) ? 8 : 16), mo > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && hn.push(u), u;
}
const Se = Zm;
function Zm(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Nh) && (e = $t), yo(e)) {
    const c = Ji(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ds(c, n), mo > 0 && !r && hn && (c.shapeFlag & 6 ? hn[hn.indexOf(e)] = c : hn.push(c)), c.patchFlag = -2, c;
  }
  if (ry(e) && (e = e.__vccOpts), t) {
    t = _o(t);
    let { class: c, style: u } = t;
    c && !lt(c) && (t.class = be(c)), Je(u) && (/* @__PURE__ */ Vu(u) && !Ae(u) && (u = wt({}, u)), t.style = vn(u));
  }
  const o = lt(e) ? 1 : Xh(e) ? 128 : Ul(e) ? 64 : Je(e) ? 4 : De(e) ? 2 : 0;
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
function _o(e) {
  return e ? /* @__PURE__ */ Vu(e) || Bh(e) ? wt({}, e) : e : null;
}
function Ji(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: o, children: c, transition: u } = e, v = t ? Yt(a || {}, t) : a, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Jh(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Ae(r) ? r.concat(Ts(t)) : [r, Ts(t)] : Ts(t)
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
    patchFlag: t && e.type !== ie ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Ji(e.ssContent),
    ssFallback: e.ssFallback && Ji(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && i && bo(
    f,
    u.clone(f)
  ), f;
}
function fe(e = " ", t = 0) {
  return Se(Po, null, e, t);
}
function $(e = "", t = !1) {
  return t ? (m(), je($t, null, e)) : Se($t, null, e);
}
function Yn(e) {
  return e == null || typeof e == "boolean" ? Se($t) : Ae(e) ? Se(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : yo(e) ? ui(e) : Se(Po, null, String(e));
}
function ui(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ji(e);
}
function Ds(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Ae(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Ds(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Bh(t) ? t._ctx = Ft : a === 3 && Ft && (Ft.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (De(t)) {
    if (i & 65) {
      Ds(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ft }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [fe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Yt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = be([t.class, i.class]));
      else if (a === "style")
        t.style = vn([t.style, i.style]);
      else if (Ol(a)) {
        const r = t[a], o = i[a];
        o && r !== o && !(Ae(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Nl(a) && (t[a] = o);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Vn(e, t, n, i = null) {
  Tn(e, t, 7, [
    n,
    i
  ]);
}
const Jm = $h();
let Qm = 0;
function ey(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Jm, r = {
    uid: Qm++,
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
    scope: new Sb(
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
    propsOptions: Vh(i, a),
    emitsOptions: Mh(i, a),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Pm.bind(null, r), e.ce && e.ce(r), r;
}
let Kt = null;
const Ma = () => Kt || Ft;
let Ms, wo;
{
  const e = Pl(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  Ms = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Kt = n
  ), wo = t(
    "__VUE_SSR_SETTERS__",
    (n) => So = n
  );
}
const $o = (e) => {
  const t = Kt;
  return Ms(e), e.scope.on(), () => {
    e.scope.off(), Ms(t);
  };
}, vf = () => {
  Kt && Kt.scope.off(), Ms(null);
};
function Qh(e) {
  return e.vnode.shapeFlag & 4;
}
let So = !1;
function ty(e, t = !1, n = !1) {
  t && wo(t);
  const { props: i, children: a } = e.vnode, r = Qh(e);
  Um(e, i, r, t), Vm(e, a, n || t);
  const o = r ? ny(e, t) : void 0;
  return t && wo(!1), o;
}
function ny(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Cm);
  const { setup: i } = n;
  if (i) {
    mi();
    const a = e.setupContext = i.length > 1 ? tv(e) : null, r = $o(e), o = Ro(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), c = Hp(o);
    if (yi(), r(), (c || e.sp) && !nr(e) && Eh(e), c) {
      if (o.then(vf, vf), t)
        return o.then((u) => {
          wo(!0);
          try {
            gf(e, u, t);
          } finally {
            wo(!1);
          }
        }).catch((u) => {
          Dl(u, e, 0);
        });
      e.asyncDep = o;
    } else
      gf(e, o);
  } else
    ev(e);
}
function gf(e, t, n) {
  De(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = fh(t)), ev(e);
}
function ev(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Cn);
  {
    const a = $o(e);
    mi();
    try {
      Am(e);
    } finally {
      yi(), a();
    }
  }
}
const iy = {
  get(e, t) {
    return Vt(e, "get", ""), e[t];
  }
};
function tv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, iy),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Vl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(fh(Bb(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in eo)
        return eo[n](e);
    },
    has(t, n) {
      return n in t || n in eo;
    }
  })) : e.proxy;
}
function ay(e, t = !0) {
  return De(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ry(e) {
  return De(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ Wb(e, t, So);
function an(e, t, n) {
  try {
    Fs(-1);
    const i = arguments.length;
    return i === 2 ? Je(t) && !Ae(t) ? yo(t) ? Se(e, null, [t]) : Se(e, t) : Se(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && yo(n) && (n = [n]), Se(e, t, n));
  } finally {
    Fs(1);
  }
}
const oy = "3.5.42", sy = Cn;
let hu;
const bf = typeof window < "u" && window.trustedTypes;
if (bf)
  try {
    hu = /* @__PURE__ */ bf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const nv = hu ? (e) => hu.createHTML(e) : (e) => e, ly = "http://www.w3.org/2000/svg", cy = "http://www.w3.org/1998/Math/MathML", ci = typeof document < "u" ? document : null, mf = ci && /* @__PURE__ */ ci.createElement("template"), uy = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ci.createElementNS(ly, e) : t === "mathml" ? ci.createElementNS(cy, e) : n ? ci.createElement(e, { is: n }) : ci.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ci.createTextNode(e),
  createComment: (e) => ci.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ci.querySelector(e),
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
      mf.innerHTML = nv(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const c = mf.content;
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
}, zi = "transition", Fr = "animation", Co = /* @__PURE__ */ Symbol("_vtc"), iv = {
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
}, dy = /* @__PURE__ */ wt(
  {},
  wh,
  iv
), fy = (e) => (e.displayName = "Transition", e.props = dy, e), py = /* @__PURE__ */ fy(
  (e, { slots: t }) => an(fm, hy(e), t)
), _a = (e, t = []) => {
  Ae(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, yf = (e) => e ? Ae(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function hy(e) {
  const t = {};
  for (const ee in e)
    ee in iv || (t[ee] = e[ee]);
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
    appearActiveClass: v = o,
    appearToClass: f = c,
    leaveFromClass: y = `${n}-leave-from`,
    leaveActiveClass: C = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, N = vy(a), A = N && N[0], O = N && N[1], {
    onBeforeEnter: D,
    onEnter: M,
    onEnterCancelled: z,
    onLeave: k,
    onLeaveCancelled: oe,
    onBeforeAppear: ue = D,
    onAppear: Z = M,
    onAppearCancelled: pe = z
  } = t, Y = (ee, J, F, U) => {
    ee._enterCancelled = U, wa(ee, J ? f : c), wa(ee, J ? v : o), F && F();
  }, le = (ee, J) => {
    ee._isLeaving = !1, wa(ee, y), wa(ee, E), wa(ee, C), J && J();
  }, _e = (ee) => (J, F) => {
    const U = ee ? Z : M, W = () => Y(J, ee, F);
    _a(U, [J, W]), _f(() => {
      wa(J, ee ? u : r), ri(J, ee ? f : c), yf(U) || wf(J, i, A, W);
    });
  };
  return wt(t, {
    onBeforeEnter(ee) {
      _a(D, [ee]), ri(ee, r), ri(ee, o);
    },
    onBeforeAppear(ee) {
      _a(ue, [ee]), ri(ee, u), ri(ee, v);
    },
    onEnter: _e(!1),
    onAppear: _e(!0),
    onLeave(ee, J) {
      ee._isLeaving = !0;
      const F = () => le(ee, J);
      ri(ee, y), ee._enterCancelled ? (ri(ee, C), kf(ee)) : (kf(ee), ri(ee, C)), _f(() => {
        ee._isLeaving && (wa(ee, y), ri(ee, E), yf(k) || wf(ee, i, O, F));
      }), _a(k, [ee, F]);
    },
    onEnterCancelled(ee) {
      Y(ee, !1, void 0, !0), _a(z, [ee]);
    },
    onAppearCancelled(ee) {
      Y(ee, !0, void 0, !0), _a(pe, [ee]);
    },
    onLeaveCancelled(ee) {
      le(ee), _a(oe, [ee]);
    }
  });
}
function vy(e) {
  if (e == null)
    return null;
  if (Je(e))
    return [Ac(e.enter), Ac(e.leave)];
  {
    const t = Ac(e);
    return [t, t];
  }
}
function Ac(e) {
  return fb(e);
}
function ri(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Co] || (e[Co] = /* @__PURE__ */ new Set())).add(t);
}
function wa(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Co];
  n && (n.delete(t), n.size || (e[Co] = void 0));
}
function _f(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let gy = 0;
function wf(e, t, n, i) {
  const a = e._endId = ++gy, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: c, propCount: u } = by(e, t);
  if (!o)
    return i();
  const v = o + "end";
  let f = 0;
  const y = () => {
    e.removeEventListener(v, C), r();
  }, C = (E) => {
    E.target === e && ++f >= u && y();
  };
  setTimeout(() => {
    f < u && y();
  }, c + 1), e.addEventListener(v, C);
}
function by(e, t) {
  const n = window.getComputedStyle(e), i = (N) => (n[N] || "").split(", "), a = i(`${zi}Delay`), r = i(`${zi}Duration`), o = Sf(a, r), c = i(`${Fr}Delay`), u = i(`${Fr}Duration`), v = Sf(c, u);
  let f = null, y = 0, C = 0;
  t === zi ? o > 0 && (f = zi, y = o, C = r.length) : t === Fr ? v > 0 && (f = Fr, y = v, C = u.length) : (y = Math.max(o, v), f = y > 0 ? o > v ? zi : Fr : null, C = f ? f === zi ? r.length : u.length : 0);
  const E = f === zi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${zi}Property`).toString()
  );
  return {
    type: f,
    timeout: y,
    propCount: C,
    hasTransform: E
  };
}
function Sf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Cf(n) + Cf(e[i])));
}
function Cf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function kf(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function my(e, t, n) {
  const i = e[Co];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const zs = /* @__PURE__ */ Symbol("_vod"), av = /* @__PURE__ */ Symbol("_vsh"), ar = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[zs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Dr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Dr(e, !0), i.enter(e)) : i.leave(e, () => {
      Dr(e, !1);
    }) : Dr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Dr(e, t);
  }
};
function Dr(e, t) {
  e.style.display = t ? e[zs] : "none", e[av] = !t;
}
const rv = /* @__PURE__ */ Symbol("");
function yy(e) {
  const t = Ma();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Us(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Us(t.ce, a) : vu(t.subTree, a), n(a);
  };
  Oh(() => {
    vh(i);
  }), ea(() => {
    We(i, Cn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), Io(() => a.disconnect());
  });
}
function vu(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      vu(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Us(e.el, t);
  else if (e.type === ie)
    e.children.forEach((n) => vu(n, t));
  else if (e.type === ks) {
    let { el: n, anchor: i } = e;
    for (; n && (Us(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Us(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = wb(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[rv] = i;
  }
}
const _y = /(?:^|;)\s*display\s*:/;
function wy(e, t, n) {
  const i = e.style, a = lt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (lt(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          n[c] == null && Kr(i, c, "");
        }
      else
        for (const o in t)
          n[o] == null && Kr(i, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const c = n[o];
      c != null ? Cy(
        e,
        o,
        !lt(t) && t ? t[o] : void 0,
        c
      ) || Kr(i, o, c) : Kr(i, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = i[rv];
      o && (n += ";" + o), i.cssText = n, r = _y.test(n);
    }
  } else t && e.removeAttribute("style");
  zs in e && (e[zs] = r ? i.display : "", e[av] && (i.display = "none"));
}
const ps = /\s*!important$/;
function Kr(e, t, n) {
  if (Ae(n))
    n.forEach((i) => Kr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    ps.test(n) ? e.setProperty(t, n.replace(ps, ""), "important") : e.setProperty(t, n);
  else {
    const i = Sy(e, t);
    ps.test(n) ? e.setProperty(
      Si(i),
      n.replace(ps, ""),
      "important"
    ) : e[i] = n;
  }
}
const Tf = ["Webkit", "Moz", "ms"], xc = {};
function Sy(e, t) {
  const n = xc[t];
  if (n)
    return n;
  let i = qt(t);
  if (i !== "filter" && i in e)
    return xc[t] = i;
  i = Rl(i);
  for (let a = 0; a < Tf.length; a++) {
    const r = Tf[a] + i;
    if (r in e)
      return xc[t] = r;
  }
  return t;
}
function Cy(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && lt(i) && n === i;
}
const Ef = "http://www.w3.org/1999/xlink";
function Af(e, t, n, i, a, r = mb(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ef, t.slice(6, t.length)) : e.setAttributeNS(Ef, t, n) : n == null || r && !qp(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : $n(n) ? String(n) : n
  );
}
function xf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? nv(n) : n);
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
    c === "boolean" ? n = qp(n) : n == null && c === "string" ? (n = "", o = !0) : c === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function xa(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function ky(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Of = /* @__PURE__ */ Symbol("_vei");
function Ty(e, t, n, i, a = null) {
  const r = e[Of] || (e[Of] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [c, u] = xy(t);
    if (i) {
      const v = r[t] = Ly(
        i,
        a
      );
      xa(e, c, v, u);
    } else o && (ky(e, c, o, u), r[t] = void 0);
  }
}
const Ey = /(Once|Passive|Capture)$/, Ay = /^on:?(?:Once|Passive|Capture)$/;
function xy(e) {
  let t, n;
  for (; (n = e.match(Ey)) && !Ay.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Si(e.slice(2)), t];
}
let Oc = 0;
const Oy = /* @__PURE__ */ Promise.resolve(), Ny = () => Oc || (Oy.then(() => Oc = 0), Oc = Date.now());
function Ly(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (Ae(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const o = a.slice(), c = [i];
      for (let u = 0; u < o.length && !i._stopped; u++) {
        const v = o[u];
        v && Tn(
          v,
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
  return n.value = e, n.attached = Ny(), n;
}
const Nf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ry = (e, t, n, i, a, r) => {
  const o = a === "svg";
  t === "class" ? my(e, i, o) : t === "style" ? wy(e, n, i) : Ol(t) ? Nl(t) || Ty(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Iy(e, t, i, o)) ? (xf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Af(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Py(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !lt(i))) ? xf(e, qt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Af(e, t, i, o));
};
function Iy(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Nf(t) && De(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Nf(t) && lt(n) ? !1 : t in e;
}
function Py(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = qt(t);
  return Array.isArray(n) ? n.some((a) => qt(a) === i) : Object.keys(n).some((a) => qt(a) === i);
}
const js = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ae(t) ? (n) => Cs(t, n) : t;
};
function $y(e) {
  e.target.composing = !0;
}
function Lf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Na = /* @__PURE__ */ Symbol("_assign"), hs = /* @__PURE__ */ Symbol("_initialValue");
function Nc(e, t, n) {
  return t && (e = e.trim()), n && (e = Il(e)), e;
}
const ft = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[hs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[hs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Na] = js(a);
    const r = i || a.props && a.props.type === "number";
    xa(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Na](Nc(e.value, n, r));
    }), (n || r) && xa(e, "change", () => {
      e.value = Nc(e.value, n, r);
    }), t || (xa(e, "compositionstart", $y), xa(e, "compositionend", Lf), xa(e, "change", Lf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[hs];
    delete e[hs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Na](Nc(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, o) {
    if (e[Na] = js(o), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? Il(e.value) : e.value, u = t ?? "";
    if (c === u)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === u) || (e.value = u);
  }
}, Jt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, xa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? Il(Bs(u)) : Bs(u)
      ), r = e.multiple, o = r ? Fa(e._modelValue) ? new Set(a) : a : a[0], c = e._pendingValue = [
        r,
        r ? Ae(o) ? a.slice() : a : o
      ];
      try {
        e[Na](o);
      } finally {
        tn(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Na] = js(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Rf(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Na] = js(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Fy(t, n[1], n[0])) && Rf(e, t);
  }
};
function Fy(e, t, n) {
  if (!n || Ae(e)) return Zi(e, t);
  if (Fa(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Rf(e, t) {
  const n = e.multiple, i = Ae(t);
  if (!(n && !i && !Fa(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], c = Bs(o);
      if (n)
        if (i) {
          const u = typeof c;
          u === "string" || u === "number" ? o.selected = t.some((v) => String(v) === String(c)) : o.selected = _b(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (Zi(Bs(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Bs(e) {
  return "_value" in e ? e._value : e.value;
}
const Dy = ["ctrl", "shift", "alt", "meta"], My = {
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
  exact: (e, t) => Dy.some((n) => e[`${n}Key`] && !t.includes(n))
}, ye = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const c = My[t[o]];
      if (c && c(a, t)) return;
    }
    return e(a, ...r);
  }));
}, zy = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, at = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = Si(a.key);
    if (t.some(
      (o) => o === r || zy[o] === r
    ))
      return e(a);
  }));
}, Uy = /* @__PURE__ */ wt({ patchProp: Ry }, uy);
let If;
function jy() {
  return If || (If = Km(Uy));
}
const By = ((...e) => {
  const t = jy().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Vy(i);
    if (!a) return;
    const r = t._component;
    !De(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, Hy(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function Hy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Vy(e) {
  return lt(e) ? document.querySelector(e) : e;
}
function Qu(e, t, n) {
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
function Pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Gy(e) {
  if (Array.isArray(e)) return e;
}
function Ky(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, o, c = [], u = !0, v = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(u = (i = r.call(n)).done) && (c.push(i.value), c.length !== t); u = !0) ;
    } catch (f) {
      v = !0, a = f;
    } finally {
      try {
        if (!u && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (v) throw a;
      }
    }
    return c;
  }
}
function qy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wy(e, t) {
  return Gy(e) || Ky(e, t) || Yy(e, t) || qy();
}
function Yy(e, t) {
  if (e) {
    if (typeof e == "string") return Pf(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pf(e, t) : void 0;
  }
}
const ov = Object.entries, $f = Object.setPrototypeOf, Xy = Object.isFrozen, Zy = Object.getPrototypeOf, Jy = Object.getOwnPropertyDescriptor;
let Ct = Object.freeze, Tt = Object.seal, Ja = Object.create, sv = typeof Reflect < "u" && Reflect, gu = sv.apply, bu = sv.construct;
Ct || (Ct = function(t) {
  return t;
});
Tt || (Tt = function(t) {
  return t;
});
gu || (gu = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
bu || (bu = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const Ta = St(Array.prototype.forEach), Qy = St(Array.prototype.lastIndexOf), Ff = St(Array.prototype.pop), Mr = St(Array.prototype.push), e_ = St(Array.prototype.splice), rr = Array.isArray, qr = St(String.prototype.toLowerCase), Lc = St(String.prototype.toString), Df = St(String.prototype.match), zr = St(String.prototype.replace), Mf = St(String.prototype.indexOf), t_ = St(String.prototype.trim), n_ = St(Number.prototype.toString), i_ = St(Boolean.prototype.toString), zf = typeof BigInt > "u" ? null : St(BigInt.prototype.toString), Uf = typeof Symbol > "u" ? null : St(Symbol.prototype.toString), rn = St(Object.prototype.hasOwnProperty), Ur = St(Object.prototype.toString), Bt = St(RegExp.prototype.test), Sa = a_(TypeError);
function St(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return gu(e, t, i);
  };
}
function a_(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return bu(e, n);
  };
}
function Ke(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qr;
  if ($f && $f(e, null), !rr(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Xy(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function r_(e) {
  for (let t = 0; t < e.length; t++)
    rn(e, t) || (e[t] = null);
  return e;
}
function fn(e) {
  const t = Ja(null);
  for (const i of ov(e)) {
    var n = Wy(i, 2);
    const a = n[0], r = n[1];
    rn(e, a) && (rr(r) ? t[a] = r_(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = fn(r) : t[a] = r);
  }
  return t;
}
function o_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return n_(e);
    case "boolean":
      return i_(e);
    case "bigint":
      return zf ? zf(e) : "0";
    case "symbol":
      return Uf ? Uf(e) : "Symbol()";
    case "undefined":
      return Ur(e);
    case "function":
    case "object": {
      if (e === null)
        return Ur(e);
      const t = e, n = Ln(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : Ur(i);
      }
      return Ur(e);
    }
    default:
      return Ur(e);
  }
}
function Ln(e, t) {
  for (; e !== null; ) {
    const i = Jy(e, t);
    if (i) {
      if (i.get)
        return St(i.get);
      if (typeof i.value == "function")
        return St(i.value);
    }
    e = Zy(e);
  }
  function n() {
    return null;
  }
  return n;
}
function s_(e) {
  try {
    return Bt(e, ""), !0;
  } catch {
    return !1;
  }
}
const jf = Ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Rc = Ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ic = Ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), l_ = Ct(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pc = Ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), c_ = Ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Bf = Ct(["#text"]), Hf = Ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $c = Ct(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vf = Ct(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), vs = Ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), u_ = Tt(/{{[\w\W]*|^[\w\W]*}}/g), d_ = Tt(/<%[\w\W]*|^[\w\W]*%>/g), f_ = Tt(/\${[\w\W]*/g), p_ = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), h_ = Tt(/^aria-[\-\w]+$/), Gf = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), v_ = Tt(/^(?:\w+script|data):/i), g_ = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), b_ = Tt(/^html$/i), m_ = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), Kf = Tt(/<[/\w!]/g), qf = Tt(/<[/\w]/g), y_ = Tt(/<\/no(script|embed|frames)/i), __ = Tt(/\/>/i), un = {
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
}, lv = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], w_ = Ct(Ke({}, lv)), S_ = (function() {
  const e = {};
  return Ta(lv, (t) => {
    e[t] = Tt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ct(e);
})(), C_ = function() {
  return typeof window > "u" ? null : window;
}, k_ = function(t, n) {
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
}, Wf = function() {
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
}, Ui = function(t, n, i, a) {
  return rn(t, n) && rr(t[n]) ? Ke(a.base ? fn(a.base) : {}, t[n], a.transform) : i;
}, Fc = function(t, n, i) {
  const a = rn(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? fn(a) : i();
};
function cv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : C_();
  const t = (te) => cv(te);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== un.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, c = e.Element, u = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, y = e.trustedTypes, C = c.prototype, E = Ln(C, "cloneNode"), N = Ln(C, "remove"), A = Ln(C, "nextSibling"), O = Ln(C, "childNodes"), D = Ln(C, "parentNode"), M = Ln(C, "shadowRoot"), z = Ln(C, "attributes"), k = o && o.prototype ? Ln(o.prototype, "nodeType") : null, oe = o && o.prototype ? Ln(o.prototype, "nodeName") : null, ue = o && o.prototype ? Ln(o.prototype, "ownerDocument") : null, Z = function(S) {
    return k ? k(S) : S.nodeType;
  }, pe = function(S) {
    return oe ? oe(S) : S.nodeName;
  };
  if (typeof r == "function") {
    const te = n.createElement("template");
    te.content && te.content.ownerDocument && (n = te.content.ownerDocument);
  }
  let Y, le = "", _e, ee = !1, J = 0;
  const F = function() {
    if (J > 0)
      throw Sa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(S) {
    F(), J++;
    try {
      return Y.createHTML(S);
    } finally {
      J--;
    }
  }, W = function(S) {
    F(), J++;
    try {
      return Y.createScriptURL(S);
    } finally {
      J--;
    }
  }, ce = function() {
    return ee || (_e = k_(y, a), ee = !0), _e;
  }, ae = n, me = ae.implementation, de = ae.createNodeIterator, we = ae.createDocumentFragment, Ce = ae.getElementsByTagName, Ge = i.importNode;
  let Le = Wf();
  t.isSupported = typeof ov == "function" && typeof D == "function" && me && me.createHTMLDocument !== void 0;
  const ct = u_, ht = d_, tt = f_, ut = p_, rt = h_, Mt = v_, B = g_, w = m_;
  let T = Gf, x = null;
  const R = Ke({}, [...jf, ...Rc, ...Ic, ...Pc, ...Bf]);
  let I = null;
  const j = Ke({}, [...Hf, ...$c, ...Vf, ...vs]);
  let K = Object.seal(Ja(null, {
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
  })), G = null, Q = null;
  const V = Object.seal(Ja(null, {
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
  let he = !0, se = !0, ve = !1, xe = !0, $e = !1, ze = !0, Fe = !1, He = !1, ot = null, vt = null, Et = !1, zt = !1, En = !1, et = !1, dt = !0, Dn = !1;
  const gn = "user-content-";
  let ia = !0, ki = !1, Mn = {}, zn = null;
  const ur = Ke({}, [
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
  let Qn = null;
  const Ti = Ke({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ei = null;
  const Ai = Ke({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), bt = "http://www.w3.org/1998/Math/MathML", Ua = "http://www.w3.org/2000/svg", on = "http://www.w3.org/1999/xhtml";
  let xi = on, aa = !1, ja = null;
  const ra = Ke({}, [bt, Ua, on], Lc), Oi = Ct(["mi", "mo", "mn", "ms", "mtext"]);
  let dr = Ke({}, Oi);
  const Do = Ct(["annotation-xml"]);
  let At = Ke({}, Do);
  const ei = Ke({}, ["title", "style", "font", "a", "script"]);
  let Ni = null;
  const Jl = ["application/xhtml+xml", "text/html"], Ql = "text/html";
  let pt = null, Li = null;
  const ec = n.createElement("form"), Mo = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, fr = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Li && Li === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = fn(S), Ni = // eslint-disable-next-line unicorn/prefer-includes
    Jl.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Ql : S.PARSER_MEDIA_TYPE, pt = Ni === "application/xhtml+xml" ? Lc : qr, x = Ui(S, "ALLOWED_TAGS", R, {
      transform: pt
    }), I = Ui(S, "ALLOWED_ATTR", j, {
      transform: pt
    }), ja = Ui(S, "ALLOWED_NAMESPACES", ra, {
      transform: Lc
    }), Ei = Ui(S, "ADD_URI_SAFE_ATTR", Ai, {
      transform: pt,
      base: Ai
    }), Qn = Ui(S, "ADD_DATA_URI_TAGS", Ti, {
      transform: pt,
      base: Ti
    }), zn = Ui(S, "FORBID_CONTENTS", ur, {
      transform: pt
    }), G = Ui(S, "FORBID_TAGS", fn({}), {
      transform: pt
    }), Q = Ui(S, "FORBID_ATTR", fn({}), {
      transform: pt
    }), Mn = rn(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? fn(S.USE_PROFILES) : S.USE_PROFILES : !1, he = S.ALLOW_ARIA_ATTR !== !1, se = S.ALLOW_DATA_ATTR !== !1, ve = S.ALLOW_UNKNOWN_PROTOCOLS || !1, xe = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, $e = S.SAFE_FOR_TEMPLATES || !1, ze = S.SAFE_FOR_XML !== !1, Fe = S.WHOLE_DOCUMENT || !1, zt = S.RETURN_DOM || !1, En = S.RETURN_DOM_FRAGMENT || !1, et = S.RETURN_TRUSTED_TYPE || !1, Et = S.FORCE_BODY || !1, dt = S.SANITIZE_DOM !== !1, Dn = S.SANITIZE_NAMED_PROPS || !1, ia = S.KEEP_CONTENT !== !1, ki = S.IN_PLACE || !1, T = s_(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Gf, xi = typeof S.NAMESPACE == "string" ? S.NAMESPACE : on, dr = Fc(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ke({}, Oi)
      // Default built-in map
    ), At = Fc(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ke({}, Do)
      // Default built-in map
    );
    const P = Fc(S, "CUSTOM_ELEMENT_HANDLING", () => Ja(null));
    if (K = Ja(null), rn(P, "tagNameCheck") && Mo(P.tagNameCheck) && (K.tagNameCheck = P.tagNameCheck), rn(P, "attributeNameCheck") && Mo(P.attributeNameCheck) && (K.attributeNameCheck = P.attributeNameCheck), rn(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (K.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Tt(K), $e && (se = !1), En && (zt = !0), Mn && (x = Ke({}, Bf), I = Ja(null), Mn.html === !0 && (Ke(x, jf), Ke(I, Hf)), Mn.svg === !0 && (Ke(x, Rc), Ke(I, $c), Ke(I, vs)), Mn.svgFilters === !0 && (Ke(x, Ic), Ke(I, $c), Ke(I, vs)), Mn.mathMl === !0 && (Ke(x, Pc), Ke(I, Vf), Ke(I, vs))), V.tagCheck = null, V.attributeCheck = null, rn(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? V.tagCheck = S.ADD_TAGS : rr(S.ADD_TAGS) && (x === R && (x = fn(x)), Ke(x, S.ADD_TAGS, pt))), rn(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? V.attributeCheck = S.ADD_ATTR : rr(S.ADD_ATTR) && (I === j && (I = fn(I)), Ke(I, S.ADD_ATTR, pt))), rn(S, "ADD_FORBID_CONTENTS") && rr(S.ADD_FORBID_CONTENTS) && (zn === ur && (zn = fn(zn)), Ke(zn, S.ADD_FORBID_CONTENTS, pt)), ia && (x["#text"] = !0), Fe && Ke(x, ["html", "head", "body"]), x.table && (Ke(x, ["tbody"]), delete G.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Sa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Sa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = Y;
      Y = S.TRUSTED_TYPES_POLICY;
      try {
        le = U("");
      } catch (re) {
        throw Y = q, re;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (Y = void 0, le = "") : (Y === void 0 && (Y = ce()), Y && typeof le == "string" && (le = U("")));
    Ct && Ct(S), Li = S;
  }, zo = Ke({}, [...Rc, ...Ic, ...l_]), Uo = Ke({}, [...Pc, ...c_]), tc = function(S, P, q) {
    return P.namespaceURI === on ? S === "svg" : P.namespaceURI === bt ? S === "svg" && (q === "annotation-xml" || dr[q]) : !!zo[S];
  }, nc = function(S, P, q) {
    return P.namespaceURI === on ? S === "math" : P.namespaceURI === Ua ? S === "math" && At[q] : !!Uo[S];
  }, ic = function(S, P, q) {
    return P.namespaceURI === Ua && !At[q] || P.namespaceURI === bt && !dr[q] ? !1 : !Uo[S] && (ei[S] || !zo[S]);
  }, ac = function(S) {
    let P = D(S);
    (!P || !P.tagName) && (P = {
      namespaceURI: xi,
      tagName: "template"
    });
    const q = qr(S.tagName), re = qr(P.tagName);
    return ja[S.namespaceURI] ? S.namespaceURI === Ua ? tc(q, P, re) : S.namespaceURI === bt ? nc(q, P, re) : S.namespaceURI === on ? ic(q, P, re) : !!(Ni === "application/xhtml+xml" && ja[S.namespaceURI]) : !1;
  }, Un = function(S) {
    Mr(t.removed, {
      element: S
    });
    try {
      D(S).removeChild(S);
    } catch {
      if (N(S), !D(S))
        throw Sa("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, jo = function(S, P, q) {
    try {
      S.removeAttributeNode(P);
    } catch {
      try {
        S.removeAttribute(q);
      } catch {
      }
    }
  }, oa = function(S) {
    Ri(S);
    const P = O(S);
    if (P) {
      const re = [];
      Ta(P, (ge) => {
        Mr(re, ge);
      }), Ta(re, (ge) => {
        try {
          N(ge);
        } catch {
        }
      });
    }
    const q = z(S);
    if (q)
      for (let re = q.length - 1; re >= 0; --re) {
        const ge = q[re], Ne = ge && ge.name;
        typeof Ne == "string" && jo(S, ge, Ne);
      }
  }, An = function(S, P, q) {
    if (!q)
      try {
        q = P.getAttributeNode(S);
      } catch {
        q = null;
      }
    Mr(t.removed, {
      attribute: q || null,
      from: P
    });
    try {
      q ? P.removeAttributeNode(q) : P.removeAttribute(S);
    } catch {
      try {
        P.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if (zt || En)
        try {
          Un(P);
        } catch {
        }
      else
        try {
          P.setAttribute(S, "");
        } catch {
        }
  }, pr = function(S) {
    const P = z(S);
    if (P)
      for (let q = P.length - 1; q >= 0; --q) {
        const re = P[q], ge = re && re.name;
        typeof ge != "string" || I[pt(ge)] || jo(S, re, ge);
      }
  }, Ri = function(S) {
    const P = [S];
    for (; P.length > 0; ) {
      const q = P.pop();
      Z(q) === un.element && pr(q);
      const ge = O(q);
      if (ge)
        for (let Ne = ge.length - 1; Ne >= 0; --Ne)
          P.push(ge[Ne]);
    }
  }, Ba = function(S, P) {
    return ze ? S === "patchsrc" ? !0 : S === "for" && P !== "label" && P !== "output" : !1;
  }, Bo = function(S) {
    if (!ze)
      return;
    const P = [S];
    for (; P.length > 0; ) {
      const q = P.pop(), re = Z(q);
      if (re === un.processingInstruction || re === un.comment && Bt(qf, q.data)) {
        try {
          N(q);
        } catch {
        }
        continue;
      }
      if (re === un.element) {
        const Ne = q, nt = pt(pe(q));
        try {
          Ne.hasAttribute && Ne.hasAttribute("patchsrc") && Ne.removeAttribute("patchsrc"), Ne.hasAttribute && Ne.hasAttribute("for") && Ba("for", nt) && Ne.removeAttribute("for");
        } catch {
        }
      }
      const ge = O(q);
      if (ge)
        for (let Ne = ge.length - 1; Ne >= 0; --Ne)
          P.push(ge[Ne]);
    }
  }, Ho = function(S) {
    let P = null, q = null;
    if (Et)
      S = "<remove></remove>" + S;
    else {
      const Ne = Df(S, /^[\r\n\t ]+/);
      q = Ne && Ne[0];
    }
    Ni === "application/xhtml+xml" && xi === on && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const re = Y ? U(S) : S;
    if (xi === on)
      try {
        P = new f().parseFromString(re, Ni);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = me.createDocument(xi, "template", null);
      try {
        P.documentElement.innerHTML = aa ? le : re;
      } catch {
      }
    }
    const ge = P.body || P.documentElement;
    return S && q && ge.insertBefore(n.createTextNode(q), ge.childNodes[0] || null), xi === on ? Ce.call(P, Fe ? "html" : "body")[0] : Fe ? P.documentElement : ge;
  }, hr = function(S) {
    const P = ue ? ue(S) : S.ownerDocument;
    return de.call(
      P || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, sa = function(S) {
    return S = zr(S, ct, " "), S = zr(S, ht, " "), S = zr(S, tt, " "), S;
  }, vr = function(S) {
    var P;
    S.normalize();
    const q = ue ? ue(S) : S.ownerDocument, re = de.call(
      q || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ge = re.nextNode();
    for (; ge; )
      ge.data = sa(ge.data), ge = re.nextNode();
    const Ne = (P = S.querySelectorAll) === null || P === void 0 ? void 0 : P.call(S, "template");
    Ne && Ta(Ne, (nt) => {
      jn(nt.content) && vr(nt.content);
    });
  }, Ii = function(S) {
    const P = oe ? oe(S) : null;
    return typeof P != "string" || pt(P) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    S.attributes !== z(S) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    S.nodeType !== k(S) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, jn = function(S) {
    if (!k || typeof S != "object" || S === null)
      return !1;
    try {
      return k(S) === un.documentFragment;
    } catch {
      return !1;
    }
  }, Pi = function(S) {
    if (!k || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof k(S) == "number";
    } catch {
      return !1;
    }
  };
  function mt(te, S, P) {
    te.length !== 0 && Ta(te, (q) => {
      q.call(t, S, P, Li);
    });
  }
  const Vo = function(S, P) {
    return !!(ze && S.hasChildNodes() && !Pi(S.firstElementChild) && Bt(Kf, S.textContent) && Bt(Kf, S.innerHTML) || ze && S.namespaceURI === on && w_[P] && (Pi(S.firstElementChild) || typeof S.textContent == "string" && Bt(S_[P], S.textContent)) || S.nodeType === un.processingInstruction || ze && S.nodeType === un.comment && Bt(qf, S.data));
  }, la = function(S, P) {
    if (S instanceof RegExp)
      return Bt(S, P);
    if (S instanceof Function) {
      for (var q = arguments.length, re = new Array(q > 2 ? q - 2 : 0), ge = 2; ge < q; ge++)
        re[ge - 2] = arguments[ge];
      return !!S(P, ...re);
    }
    return !1;
  }, Go = function(S, P, q) {
    if (!G[P] && mr(P) && la(K.tagNameCheck, P))
      return !1;
    if (ia && !zn[P]) {
      const re = D(S), ge = O(S);
      if (ge && re) {
        const Ne = ge.length;
        for (let nt = Ne - 1; nt >= 0; --nt) {
          const it = S === q ? E(ge[nt], !0) : ge[nt];
          re.insertBefore(it, A(S));
        }
      }
    }
    return Un(S), !0;
  }, Ko = function(S, P, q, re) {
    return S.length === 0 ? P : P === q || P === re ? fn(P) : P;
  }, qo = function(S, P) {
    return S === P || D(S) !== null ? !1 : (ki && Ri(S), !0);
  }, gr = function(S, P) {
    if (mt(Le.beforeSanitizeElements, S, null), qo(S, P))
      return !0;
    if (Ii(S))
      return Un(S), !0;
    const q = pt(pe(S));
    if (x = Ko(Le.uponSanitizeElement, x, R, ot), mt(Le.uponSanitizeElement, S, {
      tagName: q,
      allowedTags: x
    }), qo(S, P))
      return !0;
    if (Vo(S, q))
      return Un(S), !0;
    if (G[q] || !(V.tagCheck instanceof Function && V.tagCheck(q)) && !x[q]) {
      const ge = Go(S, q, P);
      return ge === !1 && mt(Le.afterSanitizeElements, S, null), ge;
    }
    if (Z(S) === un.element && !ac(S) || (q === "noscript" || q === "noembed" || q === "noframes") && Bt(y_, S.innerHTML))
      return Un(S), !0;
    if ($e && S.nodeType === un.text) {
      const ge = sa(S.textContent);
      S.textContent !== ge && (Mr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = ge);
    }
    return mt(Le.afterSanitizeElements, S, null), !1;
  }, br = function(S, P, q) {
    if (Q[P] || Ba(P, S) || dt && (P === "id" || P === "name") && (q in n || q in ec))
      return !1;
    const re = I[P] || V.attributeCheck instanceof Function && V.attributeCheck(P, S);
    return se && Bt(ut, P) || he && Bt(rt, P) ? !0 : re ? Ei[P] || Bt(T, zr(q, B, "")) || (P === "src" || P === "xlink:href" || P === "href") && S !== "script" && Mf(q, "data:") === 0 && Qn[S] || ve && !Bt(Mt, zr(q, B, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      mr(S) && la(K.tagNameCheck, S) && la(K.attributeNameCheck, P, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      P === "is" && K.allowCustomizedBuiltInElements && la(K.tagNameCheck, q)
    );
  }, Wo = Ke({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), mr = function(S) {
    return !Wo[qr(S)] && Bt(w, S);
  }, rc = function(S, P, q, re) {
    if (Y && typeof y == "object" && typeof y.getAttributeType == "function" && !q)
      switch (y.getAttributeType(S, P)) {
        case "TrustedHTML":
          return U(re);
        case "TrustedScriptURL":
          return W(re);
      }
    return re;
  }, oc = function(S, P, q, re) {
    try {
      q ? S.setAttributeNS(q, P, re) : S.setAttribute(P, re), Ii(S) ? Un(S) : Ff(t.removed);
    } catch {
      An(P, S);
    }
  }, yr = function(S) {
    mt(Le.beforeSanitizeAttributes, S, null);
    const P = S.attributes;
    if (!P || Ii(S))
      return;
    I = Ko(Le.uponSanitizeAttribute, I, j, vt);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let re = P.length;
    const ge = pt(S.nodeName);
    for (; re--; ) {
      const Ne = P[re], nt = Ne.name, it = Ne.namespaceURI, Ot = Ne.value, yt = pt(nt), wr = Ot;
      let Nt = nt === "value" ? wr : t_(wr);
      if (q.attrName = yt, q.attrValue = Nt, q.keepAttr = !0, q.forceKeepAttr = void 0, mt(Le.uponSanitizeAttribute, S, q), Nt = q.attrValue, Dn && (yt === "id" || yt === "name") && Mf(Nt, gn) !== 0 && (An(nt, S, Ne), Nt = gn + Nt), ze && Bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Nt)) {
        An(nt, S, Ne);
        continue;
      }
      if (yt === "attributename" && Df(Nt, "href")) {
        An(nt, S, Ne);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          An(nt, S, Ne);
          continue;
        }
        if (!xe && Bt(__, Nt)) {
          An(nt, S, Ne);
          continue;
        }
        if ($e && (Nt = sa(Nt)), !br(ge, yt, Nt)) {
          An(nt, S, Ne);
          continue;
        }
        Nt = rc(ge, yt, it, Nt), Nt !== wr && oc(S, nt, it, Nt);
      }
    }
    mt(Le.afterSanitizeAttributes, S, null);
  }, xt = function(S) {
    let P = null;
    const q = hr(S);
    for (mt(Le.beforeSanitizeShadowDOM, S, null); P = q.nextNode(); )
      if (mt(Le.uponSanitizeShadowNode, P, null), gr(P, S), yr(P), jn(P.content) && xt(P.content), Z(P) === un.element) {
        const re = M(P);
        jn(re) && (_r(re), xt(re));
      }
    mt(Le.afterSanitizeShadowDOM, S, null);
  }, _r = function(S) {
    const P = [{
      node: S,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const q = P.pop();
      if (q.shadow) {
        xt(q.shadow);
        continue;
      }
      const re = q.node, Ne = Z(re) === un.element, nt = O(re);
      if (nt)
        for (let it = nt.length - 1; it >= 0; --it)
          P.push({
            node: nt[it],
            shadow: null
          });
      if (Ne) {
        const it = oe ? oe(re) : null;
        if (typeof it == "string" && pt(it) === "template") {
          const Ot = re.content;
          jn(Ot) && P.push({
            node: Ot,
            shadow: null
          });
        }
      }
      if (Ne) {
        const it = M(re);
        jn(it) && P.push({
          node: null,
          shadow: it
        }, {
          node: it,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(te) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, q = null, re = null, ge = null;
    if (aa = !te, aa && (te = "<!-->"), typeof te != "string" && !Pi(te) && (te = o_(te), typeof te != "string"))
      throw Sa("dirty is not a string, aborting");
    if (!t.isSupported)
      return te;
    He ? (x = ot, I = vt) : fr(S), (Le.uponSanitizeElement.length > 0 || Le.uponSanitizeAttribute.length > 0) && (x = fn(x)), Le.uponSanitizeAttribute.length > 0 && (I = fn(I)), t.removed = [];
    const Ne = ki && typeof te != "string" && Pi(te);
    if (Ne) {
      Bo(te);
      const Ot = pe(te);
      if (typeof Ot == "string") {
        const yt = pt(Ot);
        if (!x[yt] || G[yt])
          throw oa(te), Sa("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ii(te))
        throw oa(te), Sa("root node is clobbered and cannot be sanitized in-place");
      try {
        _r(te);
      } catch (yt) {
        throw oa(te), yt;
      }
    } else if (Pi(te))
      P = Ho("<!---->"), q = P.ownerDocument.importNode(te, !0), q.nodeType === un.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? P = q : P.appendChild(q), _r(q);
    else {
      if (!zt && !$e && !Fe && // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf("<") === -1)
        return Y && et ? U(te) : te;
      if (P = Ho(te), !P)
        return zt ? null : et ? le : "";
    }
    P && Et && Un(P.firstChild);
    const nt = Ne ? te : P;
    try {
      const Ot = hr(nt);
      for (; re = Ot.nextNode(); )
        gr(re, nt), yr(re), jn(re.content) && xt(re.content);
    } catch (Ot) {
      throw Ne && (oa(te), Ta(t.removed, (yt) => {
        yt.element && Ri(yt.element);
      })), Ot;
    }
    if (Ne)
      return Ta(t.removed, (Ot) => {
        Ot.element && Ri(Ot.element);
      }), $e && vr(te), te;
    if (zt) {
      if ($e && vr(P), En)
        for (ge = we.call(P.ownerDocument); P.firstChild; )
          ge.appendChild(P.firstChild);
      else
        ge = P;
      return (I.shadowroot || I.shadowrootmode) && (ge = Ge.call(i, ge, !0)), ge;
    }
    let it = Fe ? P.outerHTML : P.innerHTML;
    return Fe && x["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Bt(b_, P.ownerDocument.doctype.name) && (it = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + it), $e && (it = sa(it)), Y && et ? U(it) : it;
  }, t.setConfig = function() {
    let te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    fr(te), He = !0, ot = x, vt = I;
  }, t.clearConfig = function() {
    Li = null, He = !1, ot = null, vt = null, Y = _e, le = "";
  }, t.isValidAttribute = function(te, S, P) {
    Li || fr({});
    const q = pt(te), re = pt(S);
    return br(q, re, P);
  }, t.addHook = function(te, S) {
    typeof S == "function" && rn(Le, te) && Mr(Le[te], S);
  }, t.removeHook = function(te, S) {
    if (rn(Le, te)) {
      if (S !== void 0) {
        const P = Qy(Le[te], S);
        return P === -1 ? void 0 : e_(Le[te], P, 1)[0];
      }
      return Ff(Le[te]);
    }
  }, t.removeHooks = function(te) {
    rn(Le, te) && (Le[te] = []);
  }, t.removeAllHooks = function() {
    Le = Wf();
  }, t;
}
var uv = cv();
function ed(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dc, Yf;
function T_() {
  if (Yf) return Dc;
  Yf = 1;
  var e = /["'&<>]/;
  Dc = t;
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
  return Dc;
}
var E_ = T_();
const Hs = /* @__PURE__ */ ed(E_);
function A_() {
  return globalThis._nc_l10n_locale;
}
function x_() {
  return A_().replaceAll(/_/g, "-");
}
function Gl() {
  return globalThis._nc_l10n_language;
}
function O_(e) {
  const t = Gl();
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
function dv(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function b(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, o = typeof i == "number" ? i : typeof n == "number" ? n : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, u = (A) => A, v = (c.sanitize ? uv.sanitize : u) || u, f = c.escape ? Hs : u, y = (A) => typeof A == "string" || typeof A == "number", C = (A, O, D) => A.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (M, z) => {
    if (O === void 0 || !(z in O))
      return f(M);
    const k = O[z];
    return y(k) ? f(`${k}`) : typeof k == "object" && y(k.value) ? (k.escape !== !1 ? Hs : u)(`${k.value}`) : f(M);
  });
  let N = (a?.bundle ?? dv(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, v(typeof r == "object" || o !== void 0 ? C(
    N,
    r,
    o
  ) : N);
}
function dn(e, t, n, i, a, r) {
  const o = "_" + t + "_::_" + n + "_", c = r?.bundle ?? dv(e), u = c.translations[o];
  if (typeof u < "u") {
    const v = u;
    if (Array.isArray(v)) {
      const f = c.pluralFunction(i);
      return b(e, v[f], a, i, r);
    }
  }
  return i === 1 ? b(e, t, a, i, r) : b(e, n, a, i, r);
}
function N_(e, t = Gl()) {
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
class Vs {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Vs.GLOBAL_SCOPE_PERSISTENT : Vs.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class L_ {
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
    return new Vs(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function fv(e) {
  return new L_(e);
}
function R_() {
  try {
    return Qu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Mc, Xf;
function pv() {
  if (Xf) return Mc;
  Xf = 1;
  var e = {};
  return Mc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Mc;
}
var zc, Zf;
function hv() {
  if (Zf) return zc;
  Zf = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return zc = {
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
  }, zc;
}
var gs = { exports: {} }, Jf;
function I_() {
  return Jf || (Jf = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = hv(), r = pv();
    t = e.exports = {};
    const o = t.re = [], c = t.safeRe = [], u = t.src = [], v = t.safeSrc = [], f = t.t = {};
    let y = 0;
    const C = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [C, i]
    ], N = (O) => {
      for (const [D, M] of E)
        O = O.split(`${D}*`).join(`${D}{0,${M}}`).split(`${D}+`).join(`${D}{1,${M}}`);
      return O;
    }, A = (O, D, M) => {
      const z = N(D), k = y++;
      r(O, k, D), f[O] = k, u[k] = D, v[k] = z, o[k] = new RegExp(D, M ? "g" : void 0), c[k] = new RegExp(z, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${C}*`), A("MAINVERSION", `(${u[f.NUMERICIDENTIFIER]})\\.(${u[f.NUMERICIDENTIFIER]})\\.(${u[f.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${u[f.NUMERICIDENTIFIERLOOSE]})\\.(${u[f.NUMERICIDENTIFIERLOOSE]})\\.(${u[f.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${u[f.NONNUMERICIDENTIFIER]}|${u[f.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${u[f.NONNUMERICIDENTIFIER]}|${u[f.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${u[f.PRERELEASEIDENTIFIER]}(?:\\.${u[f.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${u[f.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[f.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${C}+`), A("BUILD", `(?:\\+(${u[f.BUILDIDENTIFIER]}(?:\\.${u[f.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${u[f.MAINVERSION]}${u[f.PRERELEASE]}?${u[f.BUILD]}?`), A("FULL", `^${u[f.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${u[f.MAINVERSIONLOOSE]}${u[f.PRERELEASELOOSE]}?${u[f.BUILD]}?`), A("LOOSE", `^${u[f.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${u[f.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${u[f.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${u[f.XRANGEIDENTIFIER]})(?:\\.(${u[f.XRANGEIDENTIFIER]})(?:\\.(${u[f.XRANGEIDENTIFIER]})(?:${u[f.PRERELEASE]})?${u[f.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${u[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[f.XRANGEIDENTIFIERLOOSE]})(?:${u[f.PRERELEASELOOSE]})?${u[f.BUILD]}?)?)?`), A("XRANGE", `^${u[f.GTLT]}\\s*${u[f.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${u[f.GTLT]}\\s*${u[f.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${u[f.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", u[f.COERCEPLAIN] + `(?:${u[f.PRERELEASE]})?(?:${u[f.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", u[f.COERCE], !0), A("COERCERTLFULL", u[f.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${u[f.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${u[f.LONETILDE]}${u[f.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${u[f.LONETILDE]}${u[f.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${u[f.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${u[f.LONECARET]}${u[f.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${u[f.LONECARET]}${u[f.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${u[f.GTLT]}\\s*(${u[f.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${u[f.GTLT]}\\s*(${u[f.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${u[f.GTLT]}\\s*(${u[f.LOOSEPLAIN]}|${u[f.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${u[f.XRANGEPLAIN]})\\s+-\\s+(${u[f.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${u[f.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[f.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(gs, gs.exports)), gs.exports;
}
var Uc, Qf;
function P_() {
  if (Qf) return Uc;
  Qf = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Uc = (i) => i ? typeof i != "object" ? e : i : t, Uc;
}
var jc, ep;
function $_() {
  if (ep) return jc;
  ep = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), o = e.test(a);
    return r && o && (i = +i, a = +a), i === a ? 0 : r && !o ? -1 : o && !r ? 1 : i < a ? -1 : 1;
  };
  return jc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, jc;
}
var Bc, tp;
function vv() {
  if (tp) return Bc;
  tp = 1;
  const e = pv(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = hv(), { safeRe: i, t: a } = I_(), r = P_(), { compareIdentifiers: o } = $_(), c = (v, f) => {
    const y = f.split(".");
    if (y.length > v.length)
      return !1;
    for (let C = 0; C < y.length; C++)
      if (o(v[C], y[C]) !== 0)
        return !1;
    return !0;
  };
  class u {
    constructor(f, y) {
      if (y = r(y), f instanceof u) {
        if (f.loose === !!y.loose && f.includePrerelease === !!y.includePrerelease)
          return f;
        f = f.version;
      } else if (typeof f != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);
      if (f.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", f, y), this.options = y, this.loose = !!y.loose, this.includePrerelease = !!y.includePrerelease;
      const C = f.trim().match(y.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!C)
        throw new TypeError(`Invalid Version: ${f}`);
      if (this.raw = f, this.major = +C[1], this.minor = +C[2], this.patch = +C[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      C[4] ? this.prerelease = C[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const N = +E;
          if (N >= 0 && N < n)
            return N;
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
      let y = 0;
      do {
        const C = this.prerelease[y], E = f.prerelease[y];
        if (e("prerelease compare", y, C, E), C === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === E)
          continue;
        return o(C, E);
      } while (++y);
    }
    compareBuild(f) {
      f instanceof u || (f = new u(f, this.options));
      let y = 0;
      do {
        const C = this.build[y], E = f.build[y];
        if (e("build compare", y, C, E), C === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === E)
          continue;
        return o(C, E);
      } while (++y);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(f, y, C) {
      if (f.startsWith("pre")) {
        if (!y && C === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (y) {
          const E = `-${y}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!E || E[1] !== y)
            throw new Error(`invalid identifier: ${y}`);
        }
      }
      switch (f) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", y, C);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", y, C);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", y, C), this.inc("pre", y, C);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", y, C), this.inc("pre", y, C);
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
            let N = this.prerelease.length;
            for (; --N >= 0; )
              typeof this.prerelease[N] == "number" && (this.prerelease[N]++, N = -2);
            if (N === -1) {
              if (y === this.prerelease.join(".") && C === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (y) {
            let N = [y, E];
            if (C === !1 && (N = [y]), c(this.prerelease, y)) {
              const A = this.prerelease[y.split(".").length];
              isNaN(A) && (this.prerelease = N);
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
  return Bc = u, Bc;
}
var Hc, np;
function F_() {
  if (np) return Hc;
  np = 1;
  const e = vv();
  return Hc = (n, i) => new e(n, i).major, Hc;
}
var D_ = F_();
const ip = /* @__PURE__ */ ed(D_);
var Vc, ap;
function M_() {
  if (ap) return Vc;
  ap = 1;
  const e = vv();
  return Vc = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Vc;
}
var Gc, rp;
function z_() {
  if (rp) return Gc;
  rp = 1;
  const e = M_();
  return Gc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Gc;
}
var U_ = z_();
const j_ = /* @__PURE__ */ ed(U_);
class B_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !j_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : ip(t.getVersion()) !== ip(this.getVersion()) && console.warn(
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
class H_ {
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
let jr = null;
function td() {
  return jr !== null ? jr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? jr = new B_(window._nc_event_bus) : jr = window._nc_event_bus = new H_(), jr);
}
function gv(e, t) {
  td().subscribe(e, t);
}
function V_(e, t) {
  td().unsubscribe(e, t);
}
function bi(e, ...t) {
  td().emit(e, ...t);
}
const bv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const G_ = Object.prototype.toString, K_ = (e) => G_.call(e) === "[object Object]", qa = () => {
}, q_ = /* @__PURE__ */ W_();
function W_() {
  var e, t, n;
  return bv && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Kc(e) {
  return Array.isArray(e) ? e : [e];
}
function Y_(e, t, n) {
  return We(e, t, {
    ...n,
    immediate: !0
  });
}
const mv = bv ? window : void 0;
function Wr(e) {
  var t;
  const n = vi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function or(...e) {
  const t = (i, a, r, o) => (i.addEventListener(a, r, o), () => i.removeEventListener(a, r, o)), n = H(() => {
    const i = Kc(vi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Y_(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Wr(r))) !== null && i !== void 0 ? i : [mv].filter((r) => r != null),
      Kc(vi(n.value ? e[1] : e[0])),
      Kc(g(n.value ? e[2] : e[1])),
      vi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, o], c, u) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const v = K_(o) ? { ...o } : o, f = i.flatMap((y) => a.flatMap((C) => r.map((E) => t(y, C, E, v))));
    u(() => {
      f.forEach((y) => y());
    });
  }, { flush: "post" });
}
let op = !1;
function sp(e, t, n = {}) {
  const { window: i = mv, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: c = !1 } = n;
  if (!i) return c ? {
    stop: qa,
    cancel: qa,
    trigger: qa
  } : qa;
  if (q_ && !op) {
    op = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((D) => D.addEventListener("click", qa, O)), i.document.documentElement.addEventListener("click", qa, O);
  }
  let u = !0;
  const v = (O) => vi(a).some((D) => {
    if (typeof D == "string") return Array.from(i.document.querySelectorAll(D)).some((M) => M === O.target || O.composedPath().includes(M));
    {
      const M = Wr(D);
      return M && (O.target === M || O.composedPath().includes(M));
    }
  });
  function f(O) {
    const D = vi(O);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function y(O, D) {
    const M = vi(O), z = M.$.subTree && M.$.subTree.children;
    return z == null || !Array.isArray(z) ? !1 : z.some((k) => k.el === D.target || D.composedPath().includes(k.el));
  }
  const C = (O) => {
    const D = Wr(e);
    if (O.target != null && !(!(D instanceof Element) && f(e) && y(e, O)) && !(!D || D === O.target || O.composedPath().includes(D))) {
      if ("detail" in O && O.detail === 0 && (u = !v(O)), !u) {
        u = !0;
        return;
      }
      t(O);
    }
  };
  let E = !1;
  const N = [
    or(i, "click", (O) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), C(O));
    }, {
      passive: !0,
      capture: r
    }),
    or(i, "pointerdown", (O) => {
      const D = Wr(e);
      u = !v(O) && !!(D && !O.composedPath().includes(D));
    }, { passive: !0 }),
    o && or(i, "blur", (O) => {
      setTimeout(() => {
        const D = Wr(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !D?.contains(i.document.activeElement) && t(O);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => N.forEach((O) => O());
  return c ? {
    stop: A,
    cancel: () => {
      u = !1;
    },
    trigger: (O) => {
      u = !0, C(O), u = !1;
    }
  } : A;
}
function X_(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, c = /* @__PURE__ */ It({
    x: 0,
    y: 0
  }), u = /* @__PURE__ */ It({
    x: 0,
    y: 0
  }), v = H(() => c.x - u.x), f = H(() => c.y - u.y), { max: y, abs: C } = Math, E = H(() => y(C(v.value), C(f.value)) >= n), N = /* @__PURE__ */ uh(!1), A = H(() => E.value ? C(v.value) > C(f.value) ? v.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), O = (Z) => [Z.touches[0].clientX, Z.touches[0].clientY], D = (Z, pe) => {
    c.x = Z, c.y = pe;
  }, M = (Z, pe) => {
    u.x = Z, u.y = pe;
  }, z = {
    passive: o,
    capture: !o
  }, k = (Z) => {
    N.value && a?.(Z, A.value), N.value = !1;
  }, oe = [
    or(e, "touchstart", (Z) => {
      if (Z.touches.length !== 1) return;
      const [pe, Y] = O(Z);
      D(pe, Y), M(pe, Y), r?.(Z);
    }, z),
    or(e, "touchmove", (Z) => {
      if (Z.touches.length !== 1) return;
      const [pe, Y] = O(Z);
      M(pe, Y), z.capture && !z.passive && Math.abs(v.value) > Math.abs(f.value) && Z.preventDefault(), !N.value && E.value && (N.value = !0), N.value && i?.(Z);
    }, z),
    or(e, ["touchend", "touchcancel"], k, z)
  ];
  return {
    isSwiping: N,
    direction: A,
    coordsStart: c,
    coordsEnd: u,
    lengthX: v,
    lengthY: f,
    stop: () => oe.forEach((Z) => Z())
  };
}
var Z_ = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Tm(), r = km(), o = /* @__PURE__ */ Te([]), c = H(() => o.value.reduce((B, w) => (B[~~w.id] = w) && B, {})), u = H(() => o.value.length), v = /* @__PURE__ */ Te(null), f = /* @__PURE__ */ Te(!1), y = /* @__PURE__ */ Te({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), C = /* @__PURE__ */ Te({
      splitter: null,
      timeoutId: null
    }), E = H(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": y.value.dragging,
      "splitpanes--ready": f.value
    })), N = () => {
      document.addEventListener("mousemove", D, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", D, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", D, { passive: !1 }), document.removeEventListener("touchend", M));
    }, O = (B, w) => {
      let T = B.target.closest(".splitpanes__splitter");
      if (T) {
        let { left: x, top: R } = T.getBoundingClientRect(), { clientX: I, clientY: j } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
        y.value.cursorOffset = i.horizontal ? j - R : I - x;
      }
      N(), y.value.mouseDown = !0, y.value.activeSplitter = w, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, D = (B) => {
      y.value.mouseDown && (B.preventDefault(), y.value.dragging || (window.getSelection()?.removeAllRanges(), y.value.dragging = !0), requestAnimationFrame(() => {
        Y(Z(B)), rt("resize", { event: B }, !0);
      }));
    }, M = (B) => {
      y.value.dragging && (window.getSelection()?.removeAllRanges(), rt("resized", { event: B }, !0)), y.value.mouseDown = !1, y.value.activeSplitter = null, setTimeout(() => {
        y.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, z = (B, w) => {
      "ontouchstart" in window && (B.preventDefault(), C.value.splitter === w ? (clearTimeout(C.value.timeoutId), C.value.timeoutId = null, k(B, w), C.value.splitter = null) : (C.value.splitter = w, C.value.timeoutId = setTimeout(() => C.value.splitter = null, 500))), y.value.dragging || rt("splitter-click", {
        event: B,
        index: w
      }, !0);
    }, k = (B, w) => {
      if (rt("splitter-dblclick", {
        event: B,
        index: w
      }, !0), i.maximizePanes) {
        let T = 0;
        o.value = o.value.map((x, R) => (x.size = R === w ? x.max : x.min, R !== w && (T += x.min), x)), o.value[w].size -= T, rt("pane-maximize", {
          event: B,
          index: w,
          pane: o.value[w]
        }), rt("resized", {
          event: B,
          index: w
        }, !0);
      }
    }, oe = (B, w) => {
      if (!i.keyboardStep) return;
      let T = i.horizontal ? B.key === "ArrowDown" : B.key === "ArrowRight", x = i.horizontal ? B.key === "ArrowUp" : B.key === "ArrowLeft";
      if (!T && !x) return;
      B.preventDefault(), y.value.activeSplitter = w;
      let R = (T ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), I = ee(w) + o.value[w].size;
      le(Math.min(Math.max(I + R * i.keyboardStep, 0), 100)), rt("resize", { event: B }, !0), rt("resized", { event: B }, !0), y.value.activeSplitter = null;
    }, ue = (B, w) => {
      let T = c.value[w];
      T && rt("pane-click", {
        event: B,
        index: T.index,
        pane: T
      });
    }, Z = (B) => {
      let w = v.value.getBoundingClientRect(), { clientX: T, clientY: x } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
      return {
        x: T - (i.horizontal ? 0 : y.value.cursorOffset) - w.left,
        y: x - (i.horizontal ? y.value.cursorOffset : 0) - w.top
      };
    }, pe = (B) => {
      B = B[i.horizontal ? "y" : "x"];
      let w = v.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (B = w - B), B * 100 / w;
    }, Y = (B) => {
      le(pe(B));
    }, le = (B) => {
      let w = y.value.activeSplitter;
      if (w === null || w >= o.value.length - 1) return;
      let T = {
        prevPanesSize: ee(w),
        nextPanesSize: J(w),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, x = 0 + (i.pushOtherPanes ? 0 : T.prevPanesSize), R = 100 - (i.pushOtherPanes ? 0 : T.nextPanesSize);
      B = Math.max(Math.min(B, R), x);
      let I = [w, w + 1], j = o.value[I[0]] || null, K = o.value[I[1]] || null, G = j !== null && j.max < 100 && B >= j.max + T.prevPanesSize, Q = K !== null && K.max < 100 && B <= 100 - (K.max + J(w + 1));
      if (G || Q) {
        G ? (j.size = j.max, K.size = Math.min(Math.max(100 - j.max - T.prevPanesSize - T.nextPanesSize, K.min), K.max)) : (j.size = Math.min(Math.max(100 - K.max - T.prevPanesSize - J(w + 1), j.min), j.max), K.size = K.max);
        return;
      }
      if (i.pushOtherPanes) {
        let V = _e(T, B);
        if (!V) return;
        ({ sums: T, panesToResize: I } = V), j = o.value[I[0]] || null, K = o.value[I[1]] || null;
      }
      j !== null && (j.size = Math.min(Math.max(B - T.prevPanesSize - T.prevReachedMinPanes, j.min), j.max)), K !== null && (K.size = Math.min(Math.max(100 - B - T.nextPanesSize - T.nextReachedMinPanes, K.min), K.max));
    }, _e = (B, w) => {
      let T = y.value.activeSplitter, x = [T, T + 1];
      if (w < B.prevPanesSize + o.value[x[0]].min) {
        if (x[0] = F(T).index, B.prevReachedMinPanes = 0, x[0] < T && o.value.forEach((R, I) => {
          I > x[0] && I <= T && (R.size = R.min, B.prevReachedMinPanes += R.min);
        }), x[0] === void 0) return B.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((R, I) => {
          I > 0 && I <= T && (R.size = R.min, B.prevReachedMinPanes += R.min);
        }), o.value[x[1]].size = 100 - B.prevReachedMinPanes - o.value[0].min - B.prevPanesSize - B.nextPanesSize, null;
        B.prevPanesSize = ee(x[0]);
      }
      return w > 100 - B.nextPanesSize - o.value[x[1]].min && (x[1] = U(T).index, B.nextReachedMinPanes = 0, x[1] > T + 1 && o.value.forEach((R, I) => {
        I > T && I < x[1] && (R.size = R.min, B.nextReachedMinPanes += R.min);
      }), B.nextPanesSize = x[1] === void 0 ? 0 : J(x[1] - 1), x[1] === void 0) ? (B.nextReachedMinPanes = 0, o.value.forEach((R, I) => {
        I >= T + 1 && (R.size = R.min, B.nextReachedMinPanes += R.min);
      }), x[0] !== void 0 && (o.value[x[0]].size = 100 - B.prevPanesSize - J(x[0] - 1)), null) : {
        sums: B,
        panesToResize: x
      };
    }, ee = (B) => o.value.reduce((w, T, x) => w + (x < B ? T.size : 0), 0), J = (B) => o.value.reduce((w, T, x) => w + (x > B + 1 ? T.size : 0), 0), F = (B) => [...o.value].reverse().find((w) => w.index < B && w.size > w.min) || {}, U = (B) => o.value.find((w) => w.index > B + 1 && w.size > w.min) || {}, W = () => {
      let B = Array.from(v.value?.children || []);
      for (let w of B) {
        let T = w.classList.contains("splitpanes__pane"), x = w.classList.contains("splitpanes__splitter");
        !T && !x && (w.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ce = (B, w, T = !1) => {
      let x = B - 1, R = document.createElement("div");
      R.classList.add("splitpanes__splitter"), T || (R.onmousedown = (I) => O(I, x), typeof window < "u" && "ontouchstart" in window && (R.ontouchstart = (I) => O(I, x)), R.onclick = (I) => z(I, x + 1), i.keyboardStep && (R.setAttribute("tabindex", "0"), R.setAttribute("role", "separator"), R.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), R.onkeydown = (I) => oe(I, x))), R.ondblclick = (I) => k(I, x + 1), w.parentNode.insertBefore(R, w);
    }, ae = (B) => {
      B.onmousedown = null, B.onclick = null, B.ondblclick = null, B.onkeydown = null, B.remove();
    }, me = () => {
      let B = Array.from(v.value?.children || []);
      for (let T of B) T.className.includes("splitpanes__splitter") && ae(T);
      let w = 0;
      for (let T of B) T.className.includes("splitpanes__pane") && (!w && i.firstSplitter ? ce(w, T, !0) : w && ce(w, T), w++);
    }, de = ({ uid: B, ...w }) => {
      let T = c.value[B];
      for (let [x, R] of Object.entries(w)) T[x] = R;
    }, we = !1, Ce = (B) => {
      let w = -1;
      Array.from(v.value?.children || []).some((T) => (T.className.includes("splitpanes__pane") && w++, T.isSameNode(B.el))), o.value.splice(w, 0, {
        ...B,
        index: w
      }), o.value.forEach((T, x) => T.index = x), f.value && !we && (we = !0, tn(() => {
        me(), Le({ addedPane: o.value[w] }), rt("pane-add", { pane: o.value[w] }), we = !1;
      }));
    }, Ge = (B) => {
      let w = o.value.findIndex((x) => x.id === B);
      o.value[w].el = null;
      let T = o.value.splice(w, 1)[0];
      o.value.forEach((x, R) => x.index = R), tn(() => {
        me(), rt("pane-remove", { pane: T }), Le({ removedPane: {
          ...T
        } });
      });
    }, Le = (B = {}) => {
      !B.addedPane && !B.removedPane ? ht() : o.value.some((w) => w.givenSize !== null || w.min || w.max < 100) ? tt(B) : ct(), f.value && rt("resized");
    }, ct = () => {
      let B = 100 / u.value, w = 100, T = [], x = [];
      for (let R of o.value) R.size = Math.max(Math.min(B, R.max), R.min), w -= R.size, R.size >= R.max && T.push(R.id), R.size <= R.min && x.push(R.id);
      Math.abs(w) > 0.1 && ut(w, T, x);
    }, ht = () => {
      let B = 100, w = [], T = [], x = 0;
      for (let I of o.value) B -= I.size, I.givenSize !== null && x++, I.size >= I.max && w.push(I.id), I.size <= I.min && T.push(I.id);
      let R = 100;
      if (B > 0.1) {
        for (let I of o.value) I.givenSize === null && (I.size = Math.max(Math.min(B / (u.value - x), I.max), I.min)), R -= I.size;
        R > 0.1 && ut(R, w, T);
      }
    }, tt = ({ addedPane: B, removedPane: w } = {}) => {
      let T = o.value.reduce((G, Q) => G + (Q.givenSize === null ? 0 : Q.givenSize), 0), x = o.value.filter((G) => G.givenSize === null).length, R = x > 0 ? (100 - T) / x : 0, I = 0, j = [], K = [];
      for (let G of o.value) I -= G.size, G.size >= G.max && j.push(G.id), G.size <= G.min && K.push(G.id);
      if (!(Math.abs(I) < 0.1)) {
        I = 100;
        for (let G of o.value) G.givenSize === null && (G.size = Math.max(Math.min(R, G.max), G.min)), I -= G.size, G.size >= G.max && j.push(G.id), G.size <= G.min && K.push(G.id);
        Math.abs(I) > 0.1 && ut(I, j, K);
      }
    }, ut = (B, w, T) => {
      let x;
      x = B > 0 ? B / (u.value - w.length) : B / (u.value - T.length), o.value.forEach((R, I) => {
        if (B > 0 && !w.includes(R.id)) {
          let j = Math.max(Math.min(R.size + x, R.max), R.min), K = j - R.size;
          B -= K, R.size = j;
        } else if (!T.includes(R.id)) {
          let j = Math.max(Math.min(R.size + x, R.max), R.min), K = j - R.size;
          B -= K, R.size = j;
        }
      }), Math.abs(B) > 0.1 && f.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, rt = (B, w = void 0, T = !1) => {
      let x = w?.index ?? y.value.activeSplitter ?? null;
      n(B, {
        ...w,
        ...x !== null && { index: x },
        ...T && x !== null && {
          prevPane: o.value[x - +!!i.firstSplitter],
          nextPane: o.value[x + +!i.firstSplitter]
        },
        panes: o.value.map((R) => ({
          min: R.min,
          max: R.max,
          size: R.size
        }))
      });
    };
    We(() => i.firstSplitter, () => me()), We(() => i.horizontal, (B) => tn(() => {
      n("direction-changed", {
        horizontal: B,
        panes: o.value.map((w) => ({
          min: w.min,
          max: w.max,
          size: w.size
        }))
      });
    })), ea(() => {
      W(), me(), Le(), rt("ready"), f.value = !0;
    }), cr(() => f.value = !1);
    let Mt = () => {
      let { class: B, ...w } = a;
      return an("div", {
        ref: v,
        class: [E.value, B],
        ...w
      }, r.default?.());
    };
    return _n("panes", o), _n("indexedPanes", c), _n("horizontal", H(() => i.horizontal)), _n("requestUpdate", de), _n("onPaneAdd", Ce), _n("onPaneRemove", Ge), _n("onPaneClick", ue), (B, w) => (m(), je(qu(Mt)));
  }
}), J_ = {
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
    let t = e, n = Gt("requestUpdate"), i = Gt("onPaneAdd"), a = Gt("horizontal"), r = Gt("onPaneRemove"), o = Gt("onPaneClick"), c = Ma()?.uid, u = Gt("indexedPanes"), v = H(() => u.value[c]), f = /* @__PURE__ */ Te(null), y = H(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), C.value);
    }), C = H(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = H(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), N = H(() => {
      let A = v.value?.size ?? (t.size === void 0 ? void 0 : y.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return We(() => y.value, (A) => n({
      uid: c,
      size: A
    })), We(() => C.value, (A) => n({
      uid: c,
      min: A
    })), We(() => E.value, (A) => n({
      uid: c,
      max: A
    })), ea(() => {
      i({
        id: c,
        el: f.value,
        min: C.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : y.value,
        size: y.value
      });
    }), cr(() => r(c)), (A, O) => (m(), _("div", {
      ref_key: "paneEl",
      ref: f,
      class: "splitpanes__pane",
      onClick: O[0] ||= (D) => g(o)(D, A._.uid),
      style: vn(N.value)
    }, [Me(A.$slots, "default")], 4));
  }
}, Q_ = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", e1 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", t1 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", n1 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const nd = 1024, yv = nd / 2, Gs = (e) => document.documentElement.clientWidth < e, _v = /* @__PURE__ */ Te(Gs(nd)), wv = /* @__PURE__ */ Te(Gs(yv));
window.addEventListener("resize", () => {
  _v.value = Gs(nd), wv.value = Gs(yv);
}, { passive: !0 });
function Fo() {
  return /* @__PURE__ */ vo(_v);
}
function i1() {
  return /* @__PURE__ */ vo(wv);
}
class a1 {
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
    return b("", t, n, void 0, { bundle: this.bundle });
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
class r1 {
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
    return this.setLanguage(Gl().replace("-", "_"));
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
    const t = new a1((n) => N_(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function o1() {
  return new r1();
}
const Sv = o1().detectLanguage().build(), kt = (...e) => Sv.gettext(...e);
function ta(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Gl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        Sv.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const s1 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], l1 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], c1 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], u1 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], d1 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], f1 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], p1 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], h1 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], v1 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const g1 = /* @__PURE__ */ Symbol(""), [b1] = window.OC?.config?.version?.split(".") ?? [], Cv = Number.parseInt(b1 ?? "35"), m1 = Cv < 32, na = Cv < 34, y1 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function _1() {
  return Gt(y1, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, w1 = { class: "button-vue__wrapper" }, S1 = { class: "button-vue__icon" }, C1 = { class: "button-vue__text" }, k1 = /* @__PURE__ */ Dt({
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
    const n = e, i = t, { formBoxItemClass: a } = _1(), r = Gt(g1, null) !== null, o = H(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), c = H(() => o.value === "button" && typeof n.pressed == "boolean"), u = H(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), v = H(() => u.value.startsWith("tertiary")), f = H(() => n.alignment.split("-")[0]), y = H(() => n.alignment.includes("-")), C = Gt("NcPopover:trigger:attrs", () => ({}), !1), E = H(() => C()), N = H(() => {
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
      c.value && i("update:pressed", !n.pressed), i("click", O);
    }
    return (O, D) => (m(), je(qu(o.value), Yt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${u.value}`]: u.value,
          "button-vue--tertiary": v.value,
          "button-vue--wide": e.wide,
          [`button-vue--${f.value}`]: f.value !== "center",
          "button-vue--reverse": y.value,
          "button-vue--legacy": g(m1),
          "button-vue--legacy34": g(na)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: A }), {
      default: Ie(() => [
        l("span", w1, [
          l("span", S1, [
            Me(O.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", C1, [
            Me(O.$slots, "default", {}, () => [
              fe(h(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Xn = /* @__PURE__ */ Qe(k1, [["__scopeId", "data-v-47ce59a3"]]), T1 = ["aria-hidden", "aria-label"], E1 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, A1 = ["d"], x1 = ["innerHTML"], O1 = /* @__PURE__ */ Dt({
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
    yy((a) => ({
      fb515064: n.value
    }));
    const t = e, n = H(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = H(() => {
      if (!t.svg || t.path)
        return;
      const a = uv.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (m(), _("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: be(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (m(), _("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, x1)) : (m(), _("svg", E1, [
        l("path", { d: e.path }, null, 8, A1)
      ]))
    ], 10, T1));
  }
}), Kl = /* @__PURE__ */ Qe(O1, [["__scopeId", "data-v-aaedb1c3"]]);
L1();
function N1(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), bi("csrf-token-update", { token: e, _internal: !0 }));
}
function L1() {
  gv("csrf-token-update", ({ token: e, _internal: t }) => {
    t || N1(e);
  });
}
fv("public").persist().build();
let Wa;
function lp(e, t) {
  return e ? e.getAttribute(t) : null;
}
function R1() {
  if (Wa !== void 0)
    return Wa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = lp(e, "data-user");
  return t === null ? (Wa = null, Wa) : (Wa = {
    uid: t,
    displayName: lp(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Wa);
}
var _t = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(_t || {});
class I1 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + _t[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === _t.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case _t.Debug:
          console.debug(this.formatMessage(n, _t.Debug, i), i);
          break;
        case _t.Info:
          console.info(this.formatMessage(n, _t.Info, i), i);
          break;
        case _t.Warn:
          console.warn(this.formatMessage(n, _t.Warn, i), i);
          break;
        case _t.Error:
          console.error(this.formatMessage(n, _t.Error, i), i);
          break;
        case _t.Fatal:
        default:
          console.error(this.formatMessage(n, _t.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(_t.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(_t.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(_t.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(_t.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(_t.Fatal, t, Object.assign({}, this.context, n));
  }
}
function P1(e) {
  return new I1(e);
}
class $1 {
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
    const t = R1();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? _t.Warn, window._oc_debug && (t.context.level = _t.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function F1() {
  return new $1(P1);
}
const $a = F1().detectUser().setApp("@nextcloud/vue").build();
function D1(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let kv = "missing-app-name";
try {
  kv = "library";
} catch {
  $a.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const M1 = kv;
let z1 = "";
try {
  z1 = "0.1.0-alpha.171";
} catch {
  $a.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Tv() {
  return Gt("appName", M1);
}
const U1 = D1(() => {
  const e = Qu("core", "apps", []), t = Tv();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), mu = O_();
ta(p1);
const j1 = /* @__PURE__ */ Dt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = Fo();
    We(t, n), ea(() => {
      n(t.value);
    }), cr(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && bi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (m(), je(g(Xn), {
      "aria-label": g(kt)("Go back to the list"),
      class: be(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(kt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Ie(() => [
        Se(g(Kl), {
          directional: "",
          path: g(Q_)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), B1 = /* @__PURE__ */ Qe(j1, [["__scopeId", "data-v-a28923a1"]]), cp = fv("nextcloud").persist().build(), H1 = R_().theming?.name ?? "Nextcloud", V1 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: B1,
    Pane: J_,
    Splitpanes: Z_
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
      appName: Tv(),
      localizedAppName: U1(),
      isMobile: Fo(),
      isRtl: mu
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
        return $a.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(H1), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = X_(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? bi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && bi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      cp.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), $a.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(cp.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return $a.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, G1 = {
  key: 0,
  class: "hidden-visually"
}, K1 = { class: "app-content-wrapper__list" }, q1 = {
  key: 1,
  class: "app-content-wrapper"
};
function W1(e, t, n, i, a, r) {
  const o = Be("NcAppContentDetailsToggle"), c = Be("Pane"), u = Be("Splitpanes");
  return m(), _("main", {
    id: "app-content-vue",
    class: be(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (m(), _("h1", G1, h(n.pageHeading), 1)) : $("", !0),
    e.$slots.list ? (m(), _(ie, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (m(), _("div", {
        key: 0,
        class: be(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (m(), je(o, {
          key: 0,
          onClick: ye(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : $("", !0),
        Pe(l("div", K1, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [ar, !n.showDetails]
        ]),
        n.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : $("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (m(), _("div", q1, [
        Se(u, {
          horizontal: n.layout === "horizontal-split",
          class: be(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Ie(() => [
            Se(c, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Ie(() => [
                Me(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            Se(c, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Ie(() => [
                Me(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : $("", !0)
    ], 64)) : $("", !0),
    e.$slots.list ? $("", !0) : Me(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const Y1 = /* @__PURE__ */ Qe(V1, [["render", W1], ["__scopeId", "data-v-51427d61"]]);
var Ev = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Ks = /* @__PURE__ */ Ev.join(","), Av = typeof Element > "u", Da = Av ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, qs = !Av && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Ws = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", o = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Ws(t.parentNode));
  return o;
}, X1 = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, xv = function(t, n, i) {
  if (Ws(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Ks));
  return n && Da.call(t, Ks) && a.unshift(t), a = a.filter(i), a;
}, Ys = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Ws(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), u = c.length ? c : o.children, v = Ys(u, !0, i);
        i.flatten ? a.push.apply(a, v) : a.push({
          scopeParent: o,
          candidates: v
        });
      } else {
        var f = Da.call(o, Ks);
        f && i.filter(o) && (n || !t.includes(o)) && a.push(o);
        var y = o.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(o), C = !Ws(y, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (y && C) {
          var E = Ys(y === !0 ? o.children : y.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: o,
            candidates: E
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, Ov = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Oa = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || X1(t)) && !Ov(t) ? 0 : t.tabIndex;
}, Z1 = function(t, n) {
  var i = Oa(t);
  return i < 0 && n && !Ov(t) ? 0 : i;
}, J1 = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Nv = function(t) {
  return t.tagName === "INPUT";
}, Q1 = function(t) {
  return Nv(t) && t.type === "hidden";
}, e0 = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, t0 = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, n0 = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || qs(t), i = function(c) {
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
  var r = t0(a, t.form);
  return !r || r === t;
}, i0 = function(t) {
  return Nv(t) && t.type === "radio";
}, a0 = function(t) {
  return i0(t) && !n0(t);
}, r0 = function(t) {
  var n, i = t && qs(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var o, c, u;
    for (r = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !r && a; ) {
      var v, f, y;
      i = qs(a), a = (v = i) === null || v === void 0 ? void 0 : v.host, r = !!((f = a) !== null && f !== void 0 && (y = f.ownerDocument) !== null && y !== void 0 && y.contains(a));
    }
  }
  return r;
}, up = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, o0 = function(t, n) {
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
  var u = Da.call(t, "details>summary:first-of-type"), v = u ? t.parentElement : t;
  if (Da.call(v, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var f = t; t; ) {
        var y = t.parentElement, C = qs(t);
        if (y && !y.shadowRoot && a(y) === !0)
          return up(t);
        t.assignedSlot ? t = t.assignedSlot : !y && C !== t.ownerDocument ? t = C.host : t = y;
      }
      t = f;
    }
    if (r0(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return up(t);
  return !1;
}, s0 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return Da.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Xs = function(t, n) {
  return !(n.disabled || Q1(n) || o0(n, t) || // For a details element with a summary, the summary element gets the focus
  e0(n) || s0(n));
}, yu = function(t, n) {
  return !(a0(n) || Oa(n) < 0 || !Xs(t, n));
}, l0 = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Lv = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, c = o ? a.scopeParent : a, u = Z1(c, o), v = o ? Lv(a.candidates) : c;
    u === 0 ? o ? n.push.apply(n, v) : n.push(c) : i.push({
      documentOrder: r,
      tabIndex: u,
      item: a,
      isScope: o,
      content: v
    });
  }), i.sort(J1).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, c0 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Ys([t], n.includeContainer, {
    filter: yu.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: l0
  }) : i = xv(t, n.includeContainer, yu.bind(null, n)), Lv(i);
}, u0 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Ys([t], n.includeContainer, {
    filter: Xs.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = xv(t, n.includeContainer, Xs.bind(null, n)), i;
}, Ya = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Da.call(t, Ks) === !1 ? !1 : yu(n, t);
}, d0 = /* @__PURE__ */ Ev.concat("iframe:not([inert]):not([inert] *)").join(","), qc = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Da.call(t, d0) === !1 ? !1 : Xs(n, t);
};
function _u(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function f0(e) {
  if (Array.isArray(e)) return _u(e);
}
function dp(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Rv(e)) || t) {
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
function p0(e, t, n) {
  return (t = m0(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function h0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function v0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function pp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fp(Object(n), !0).forEach(function(i) {
      p0(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fp(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function g0(e) {
  return f0(e) || h0(e) || Rv(e) || v0();
}
function b0(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m0(e) {
  var t = b0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Rv(e, t) {
  if (e) {
    if (typeof e == "string") return _u(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _u(e, t) : void 0;
  }
}
var pi = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = pi.getActiveTrap(t);
    n !== i && pi.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), pi.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = pi.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = pi.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, y0 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, _0 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, to = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, w0 = function(t) {
  return to(t) && !t.shiftKey;
}, S0 = function(t) {
  return to(t) && t.shiftKey;
}, hp = function(t) {
  return setTimeout(t, 0);
}, Br = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, bs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, C0 = [], id = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || C0, r = pp({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: w0,
    isKeyBackward: S0
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
  }, c, u = function(F, U, W) {
    return F && F[U] !== void 0 ? F[U] : r[W || U];
  }, v = function(F, U) {
    var W = typeof U?.composedPath == "function" ? U.composedPath() : void 0;
    return o.containerGroups.findIndex(function(ce) {
      var ae = ce.container, me = ce.tabbableNodes;
      return ae.contains(F) || W?.includes(ae) || me.find(function(de) {
        return de === F;
      });
    });
  }, f = function(F) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = U.hasFallback, ce = W === void 0 ? !1 : W, ae = U.params, me = ae === void 0 ? [] : ae, de = r[F];
    if (typeof de == "function" && (de = de.apply(void 0, g0(me))), de === !0 && (de = void 0), !de) {
      if (de === void 0 || de === !1)
        return de;
      throw new Error("`".concat(F, "` was specified but was not a node, or did not return a node"));
    }
    var we = de;
    if (typeof de == "string") {
      try {
        we = i.querySelector(de);
      } catch (Ce) {
        throw new Error("`".concat(F, '` appears to be an invalid selector; error="').concat(Ce.message, '"'));
      }
      if (!we && !ce)
        throw new Error("`".concat(F, "` as selector refers to no known node"));
    }
    return we;
  }, y = function(F) {
    var U = F.activeElement;
    return U ? U.shadowRoot && U.shadowRoot.activeElement !== null ? y(U.shadowRoot) : U : null;
  }, C = function() {
    var F = f("initialFocus", {
      hasFallback: !0
    });
    if (F === !1)
      return !1;
    if (F === void 0 || F && !qc(F, r.tabbableOptions)) {
      var U = y(i);
      if (v(U) >= 0)
        F = U;
      else {
        var W = o.tabbableGroups[0], ce = W && W.firstTabbableNode;
        F = ce || f("fallbackFocus");
      }
    } else F === null && (F = f("fallbackFocus"));
    if (!F)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return F;
  }, E = function() {
    if (o.containerGroups = o.containers.map(function(F) {
      var U = c0(F, r.tabbableOptions), W = u0(F, r.tabbableOptions), ce = U.length > 0 ? U[0] : void 0, ae = U.length > 0 ? U[U.length - 1] : void 0, me = W.find(function(Ce) {
        return Ya(Ce);
      }), de = W.slice().reverse().find(function(Ce) {
        return Ya(Ce);
      }), we = !!U.find(function(Ce) {
        return Oa(Ce) > 0;
      });
      return {
        container: F,
        tabbableNodes: U,
        focusableNodes: W,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: we,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ce,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: ae,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: me,
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
        nextTabbableNode: function(Ge) {
          var Le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ct = U.indexOf(Ge);
          return ct < 0 ? Le ? W.slice(W.indexOf(Ge) + 1).find(function(ht) {
            return Ya(ht);
          }) : W.slice(0, W.indexOf(Ge)).reverse().find(function(ht) {
            return Ya(ht);
          }) : U[ct + (Le ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(F) {
      return F.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !f("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(F) {
      return F.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, N = function(F) {
    if (F !== !1 && F !== y(document)) {
      if (!F || !F.focus) {
        N(C());
        return;
      }
      F.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = F, y0(F) && F.select();
    }
  }, A = function(F) {
    var U = f("setReturnFocus", {
      params: [F]
    });
    return U || (U === !1 ? !1 : F);
  }, O = function(F) {
    var U = F.target, W = F.event, ce = F.isBackward, ae = ce === void 0 ? !1 : ce;
    U = U || bs(W), E();
    var me = null;
    if (o.tabbableGroups.length > 0) {
      var de = v(U, W), we = de >= 0 ? o.containerGroups[de] : void 0;
      if (de < 0)
        ae ? me = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : me = o.tabbableGroups[0].firstTabbableNode;
      else if (ae) {
        var Ce = o.tabbableGroups.findIndex(function(ut) {
          var rt = ut.firstTabbableNode;
          return U === rt;
        });
        if (Ce < 0 && (we.container === U || qc(U, r.tabbableOptions) && !Ya(U, r.tabbableOptions) && !we.nextTabbableNode(U, !1)) && (Ce = de), Ce >= 0) {
          var Ge = Ce === 0 ? o.tabbableGroups.length - 1 : Ce - 1, Le = o.tabbableGroups[Ge];
          me = Oa(U) >= 0 ? Le.lastTabbableNode : Le.lastDomTabbableNode;
        } else to(W) || (me = we.nextTabbableNode(U, !1));
      } else {
        var ct = o.tabbableGroups.findIndex(function(ut) {
          var rt = ut.lastTabbableNode;
          return U === rt;
        });
        if (ct < 0 && (we.container === U || qc(U, r.tabbableOptions) && !Ya(U, r.tabbableOptions) && !we.nextTabbableNode(U)) && (ct = de), ct >= 0) {
          var ht = ct === o.tabbableGroups.length - 1 ? 0 : ct + 1, tt = o.tabbableGroups[ht];
          me = Oa(U) >= 0 ? tt.firstTabbableNode : tt.firstDomTabbableNode;
        } else to(W) || (me = we.nextTabbableNode(U));
      }
    } else
      me = f("fallbackFocus");
    return me;
  }, D = function(F) {
    var U = bs(F);
    if (!(v(U, F) >= 0)) {
      if (Br(r.clickOutsideDeactivates, F)) {
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
      Br(r.allowOutsideClick, F) || F.preventDefault();
    }
  }, M = function(F) {
    var U = bs(F), W = v(U, F) >= 0;
    if (W || U instanceof Document)
      W && (o.mostRecentlyFocusedNode = U);
    else {
      F.stopImmediatePropagation();
      var ce, ae = !0;
      if (o.mostRecentlyFocusedNode)
        if (Oa(o.mostRecentlyFocusedNode) > 0) {
          var me = v(o.mostRecentlyFocusedNode), de = o.containerGroups[me].tabbableNodes;
          if (de.length > 0) {
            var we = de.findIndex(function(Ce) {
              return Ce === o.mostRecentlyFocusedNode;
            });
            we >= 0 && (r.isKeyForward(o.recentNavEvent) ? we + 1 < de.length && (ce = de[we + 1], ae = !1) : we - 1 >= 0 && (ce = de[we - 1], ae = !1));
          }
        } else
          o.containerGroups.some(function(Ce) {
            return Ce.tabbableNodes.some(function(Ge) {
              return Oa(Ge) > 0;
            });
          }) || (ae = !1);
      else
        ae = !1;
      ae && (ce = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), N(ce || o.mostRecentlyFocusedNode || C());
    }
    o.recentNavEvent = void 0;
  }, z = function(F) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = F;
    var W = O({
      event: F,
      isBackward: U
    });
    W && (to(F) && F.preventDefault(), N(W));
  }, k = function(F) {
    (r.isKeyForward(F) || r.isKeyBackward(F)) && z(F, r.isKeyBackward(F));
  }, oe = function(F) {
    _0(F) && Br(r.escapeDeactivates, F) !== !1 && (F.preventDefault(), c.deactivate());
  }, ue = function(F) {
    var U = bs(F);
    v(U, F) >= 0 || Br(r.clickOutsideDeactivates, F) || Br(r.allowOutsideClick, F) || (F.preventDefault(), F.stopImmediatePropagation());
  }, Z = function() {
    if (o.active) {
      pi.activateTrap(a, c);
      var F;
      return r.delayInitialFocus ? F = new Promise(function(U) {
        o.delayInitialFocusTimer = hp(function() {
          N(C()), U();
        });
      }) : N(C()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", D, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", D, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", ue, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", k, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", oe), F;
    }
  }, pe = function(F) {
    o.active && !o.paused && c._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var U = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set(), ce = dp(F), ae;
    try {
      for (ce.s(); !(ae = ce.n()).done; ) {
        var me = ae.value;
        U.add(me);
        for (var de = typeof ShadowRoot < "u" && me.getRootNode() instanceof ShadowRoot, we = me; we; ) {
          U.add(we);
          var Ce = we.parentElement, Ge = [];
          Ce ? Ge = Ce.children : !Ce && de && (Ge = we.getRootNode().children, Ce = we.getRootNode().host, de = typeof ShadowRoot < "u" && Ce.getRootNode() instanceof ShadowRoot);
          var Le = dp(Ge), ct;
          try {
            for (Le.s(); !(ct = Le.n()).done; ) {
              var ht = ct.value;
              W.add(ht);
            }
          } catch (tt) {
            Le.e(tt);
          } finally {
            Le.f();
          }
          we = Ce;
        }
      }
    } catch (tt) {
      ce.e(tt);
    } finally {
      ce.f();
    }
    U.forEach(function(tt) {
      W.delete(tt);
    }), o.adjacentElements = W;
  }, Y = function() {
    if (o.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", D, !0), i.removeEventListener("touchstart", D, !0), i.removeEventListener("click", ue, !0), i.removeEventListener("keydown", k, !0), i.removeEventListener("keydown", oe), c;
  }, le = function(F) {
    var U = o.mostRecentlyFocusedNode;
    if (U) {
      var W = F.some(function(ae) {
        var me = Array.from(ae.removedNodes);
        return me.some(function(de) {
          return de === U || typeof de.contains == "function" && de.contains(U);
        });
      });
      if (W && o.containers.some(function(ae) {
        return ae?.isConnected;
      })) {
        E();
        var ce = C();
        N(ce);
      }
    }
  }, _e = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(le) : void 0, ee = function() {
    _e && (_e.disconnect(), o.active && !o.paused && o.containers.map(function(F) {
      _e.observe(F, {
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
    activate: function(F) {
      if (o.active)
        return this;
      var U = u(F, "onActivate"), W = u(F, "onPostActivate"), ce = u(F, "checkCanFocusTrap"), ae = pi.getActiveTrap(a), me = !1;
      if (ae && !ae.paused) {
        var de;
        (de = ae._setSubtreeIsolation) === null || de === void 0 || de.call(ae, !1), me = !0;
      }
      try {
        ce || E(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = y(i), U?.({
          trap: c
        });
        var we = function() {
          ce && E();
          var Le = function() {
            c._setSubtreeIsolation(!0), ee(), W?.({
              trap: c
            });
          }, ct = Z();
          ct ? ct.then(Le) : Le();
        };
        if (ce)
          return ce(o.containers.concat()).then(we, we), this;
        we();
      } catch (Ge) {
        if (ae === pi.getActiveTrap(a) && me) {
          var Ce;
          (Ce = ae._setSubtreeIsolation) === null || Ce === void 0 || Ce.call(ae, !0);
        }
        throw Ge;
      }
      return this;
    },
    deactivate: function(F) {
      if (!o.active)
        return this;
      var U = pp({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, F);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || c._setSubtreeIsolation(!1), o.alreadySilent.clear(), Y(), o.active = !1, o.paused = !1, ee(), pi.deactivateTrap(a, c);
      var W = u(U, "onDeactivate"), ce = u(U, "onPostDeactivate"), ae = u(U, "checkCanReturnFocus"), me = u(U, "delayReturnFocus"), de = u(U, "returnFocus", "returnFocusOnDeactivate");
      W?.({
        trap: c
      });
      var we = function() {
        de && N(A(o.nodeFocusedBeforeActivation)), ce?.({
          trap: c
        });
      }, Ce = function() {
        me && de ? hp(we) : we();
      };
      return de && ae ? (ae(A(o.nodeFocusedBeforeActivation)).then(Ce, Ce), this) : (Ce(), this);
    },
    pause: function(F) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, F)) : this;
    },
    unpause: function(F) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, F)) : this;
    },
    updateContainerElements: function(F) {
      var U = [].concat(F).filter(Boolean);
      return o.containers = U.map(function(W) {
        return typeof W == "string" ? i.querySelector(W) : W;
      }), r.isolateSubtrees && pe(o.containers), o.active && (E(), o.paused || c._setSubtreeIsolation(!0)), ee(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(F, U) {
        if (o.paused === F)
          return this;
        if (o.paused = F, F) {
          var W = u(U, "onPause"), ce = u(U, "onPostPause");
          W?.({
            trap: c
          }), Y(), c._setSubtreeIsolation(!1), ee(), ce?.({
            trap: c
          });
        } else {
          var ae = u(U, "onUnpause"), me = u(U, "onPostUnpause");
          ae?.({
            trap: c
          });
          var de = function() {
            E();
            var Ce = function() {
              c._setSubtreeIsolation(!0), ee(), me?.({
                trap: c
              });
            }, Ge = Z();
            Ge ? Ge.then(Ce) : Ce();
          };
          de();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(F) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(U) {
          var W;
          F ? r.isolateSubtrees === "aria-hidden" ? ((U.ariaHidden === "true" || ((W = U.getAttribute("aria-hidden")) === null || W === void 0 ? void 0 : W.toLowerCase()) === "true") && o.alreadySilent.add(U), U.setAttribute("aria-hidden", "true")) : ((U.inert || U.hasAttribute("inert")) && o.alreadySilent.add(U), U.setAttribute("inert", !0)) : o.alreadySilent.has(U) || (r.isolateSubtrees === "aria-hidden" ? U.removeAttribute("aria-hidden") : U.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
const Iv = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), k0 = /* @__PURE__ */ Dt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Iv]: {
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
function T0(e, t, n, i, a, r) {
  return m(), _("ul", {
    ref: "list",
    class: be(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    l("div", {
      class: be(["app-navigation-list__highlight", {
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
const Pv = /* @__PURE__ */ Qe(k0, [["render", T0], ["__scopeId", "data-v-3e73e246"]]);
function ko() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function E0() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...ko()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === ko().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const $v = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Fv = /* @__PURE__ */ Symbol.for("NcContent:selector");
ta(u1);
const A0 = { class: "app-navigation-toggle-wrapper" }, x0 = /* @__PURE__ */ Dt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Fh(e, "open"), n = H(() => t.value ? kt("Close navigation") : kt("Open navigation"));
    return (i, a) => (m(), _("div", A0, [
      Se(g(Xn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Ie(() => [
          Se(Kl, {
            path: g(n1),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), O0 = /* @__PURE__ */ Qe(x0, [["__scopeId", "data-v-e8177cc7"]]), N0 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], L0 = { class: "app-navigation__search" }, R0 = /* @__PURE__ */ Dt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Gt(
      $v,
      () => sy(),
      !1
    ), a = pm("appNavigationContainer"), r = Fo(), o = /* @__PURE__ */ Te(!r.value), c = H(() => r.value && o.value);
    am(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), We(r, () => {
      o.value = !r.value;
    }), We(c, () => {
      f();
    }), ea(() => {
      i(!0), gv("toggle-navigation", v), bi("navigation-toggled", {
        open: o.value
      }), n = id(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), u(!1)), !1),
        fallbackFocus: a.value,
        trapStack: ko(),
        escapeDeactivates: !1
      }), f();
    }), Io(() => {
      i(!1), V_("toggle-navigation", v), n.deactivate();
    });
    function u(C) {
      if (o.value === C) {
        bi("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = C === void 0 ? !o.value : C;
      const E = getComputedStyle(document.body), N = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        bi("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * N);
    }
    function v({ open: C }) {
      return u(C);
    }
    function f() {
      c.value ? n.activate() : n.deactivate();
    }
    function y() {
      r.value && u(!1);
    }
    return (C, E) => (m(), _("div", {
      ref: "appNavigationContainer",
      class: be(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": g(na)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: at(y, ["esc"])
      }, [
        l("div", L0, [
          Me(C.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: be(["app-navigation__body", { "app-navigation__body--no-list": !C.$slots.list }])
        }, [
          Me(C.$slots, "default", {}, void 0, !0)
        ], 2),
        C.$slots.list ? (m(), je(Pv, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Ie(() => [
            Me(C.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : $("", !0),
        Me(C.$slots, "footer", {}, void 0, !0)
      ], 40, N0),
      Se(O0, {
        open: o.value,
        "onUpdate:open": u
      }, null, 8, ["open"])
    ], 2));
  }
}), I0 = /* @__PURE__ */ Qe(R0, [["__scopeId", "data-v-37908cd4"]]), P0 = {
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
}, $0 = ["aria-hidden", "aria-label"], F0 = ["fill", "width", "height"], D0 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, M0 = { key: 0 };
function z0(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", D0, [
        n.title ? (m(), _("title", M0, h(n.title), 1)) : $("", !0)
      ])
    ], 8, F0))
  ], 16, $0);
}
const U0 = /* @__PURE__ */ Qe(P0, [["render", z0]]), j0 = {
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
}, B0 = ["aria-hidden", "aria-label"], H0 = ["fill", "width", "height"], V0 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, G0 = { key: 0 };
function K0(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", V0, [
        n.title ? (m(), _("title", G0, h(n.title), 1)) : $("", !0)
      ])
    ], 8, H0))
  ], 16, B0);
}
const q0 = /* @__PURE__ */ Qe(j0, [["render", K0]]), W0 = {
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
}, Y0 = ["aria-hidden", "aria-label"], X0 = ["fill", "width", "height"], Z0 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, J0 = { key: 0 };
function Q0(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", Z0, [
        n.title ? (m(), _("title", J0, h(n.title), 1)) : $("", !0)
      ])
    ], 8, X0))
  ], 16, Y0);
}
const Dv = /* @__PURE__ */ Qe(W0, [["render", Q0]]), ew = {
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
}, tw = ["aria-hidden", "aria-label"], nw = ["fill", "width", "height"], iw = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, aw = { key: 0 };
function rw(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", iw, [
        n.title ? (m(), _("title", aw, h(n.title), 1)) : $("", !0)
      ])
    ], 8, nw))
  ], 16, tw);
}
const Mv = /* @__PURE__ */ Qe(ew, [["render", rw]]);
ta(l1);
const ow = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Dv,
    IconClose: Mv,
    NcButton: Xn
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
    return { isLegacy34: na };
  },
  data() {
    return {
      labelConfirm: kt("Confirm changes"),
      labelCancel: kt("Cancel changes")
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
}, sw = ["placeholder"];
function lw(e, t, n, i, a, r) {
  const o = Be("IconArrowRight"), c = Be("NcButton"), u = Be("IconClose");
  return m(), _("div", {
    class: be(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = ye((...v) => r.confirm && r.confirm(...v), ["prevent"])),
      onKeydown: t[2] || (t[2] = at(ye((...v) => r.cancel && r.cancel(...v), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = ye(() => {
      }, ["stop", "prevent"]))
    }, [
      Pe(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (v) => r.valueModel = v),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, sw), [
        [ft, r.valueModel]
      ]),
      Se(c, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: ye(r.confirm, ["stop", "prevent"])
      }, {
        icon: Ie(() => [
          Se(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      Se(c, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: ye(r.cancel, ["stop", "prevent"])
      }, {
        icon: Ie(() => [
          Se(u, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const cw = /* @__PURE__ */ Qe(ow, [["render", lw], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function ql() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const ad = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), zv = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), uw = {
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
}, Uv = {
  mixins: [uw],
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
      from: zv
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
}, dw = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Kl
  },
  mixins: [Uv],
  inject: {
    isInSemanticMenu: {
      from: ad,
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
      mdiCheck: e1,
      mdiChevronRight: t1
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
}, fw = ["role"], pw = ["aria-label", "disabled", "title", "type"], hw = { class: "action-button__longtext-wrapper" }, vw = {
  key: 0,
  class: "action-button__name"
}, gw = ["textContent"], bw = {
  key: 2,
  class: "action-button__text"
}, mw = ["textContent"], yw = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function _w(e, t, n, i, a, r) {
  const o = Be("NcIconSvgWrapper");
  return m(), _("li", {
    class: be(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", Yt({
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
          class: be([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: vn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", hw, [
        e.name ? (m(), _("strong", vw, h(e.name), 1)) : $("", !0),
        e.isLongText ? (m(), _("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: h(e.text)
        }, null, 8, gw)) : (m(), _("span", bw, h(e.text), 1)),
        n.description ? (m(), _("span", {
          key: 3,
          class: "action-button__description",
          textContent: h(n.description)
        }, null, 8, mw)) : $("", !0)
      ]),
      n.isMenu ? (m(), je(o, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (m(), je(o, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (m(), _("span", yw)) : $("", !0),
      $("", !0)
    ], 16, pw)
  ], 10, fw);
}
const ww = /* @__PURE__ */ Qe(dw, [["render", _w], ["__scopeId", "data-v-6c2daf4e"]]);
function Sw(e, t = {}) {
  const n = E0();
  We(e, () => {
    vi(t.disabled) || (vi(e) ? n.pause() : n.unpause());
  }), Io(() => {
    n.unpause();
  });
}
const Cw = ["top", "right", "bottom", "left"], vp = ["start", "end"], gp = /* @__PURE__ */ Cw.reduce((e, t) => e.concat(t, t + "-" + vp[0], t + "-" + vp[1]), []), To = Math.min, wu = Math.max, kw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jv(e, t, n) {
  return wu(e, To(t, n));
}
function za(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wi(e) {
  return e.split("-")[0];
}
function Pn(e) {
  return e.split("-")[1];
}
function Bv(e) {
  return e === "x" ? "y" : "x";
}
function rd(e) {
  return e === "y" ? "height" : "width";
}
function hi(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function od(e) {
  return Bv(hi(e));
}
function Hv(e, t, n) {
  n === void 0 && (n = !1);
  const i = Pn(e), a = od(e), r = rd(a);
  let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Js(o)), [o, Js(o)];
}
function Tw(e) {
  const t = Js(e);
  return [Zs(e), t, Zs(t)];
}
function Zs(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const bp = ["left", "right"], mp = ["right", "left"], Ew = ["top", "bottom"], Aw = ["bottom", "top"];
function xw(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? mp : bp : t ? bp : mp;
    case "left":
    case "right":
      return t ? Ew : Aw;
    default:
      return [];
  }
}
function Ow(e, t, n, i) {
  const a = Pn(e);
  let r = xw(wi(e), n === "start", i);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(Zs)))), r;
}
function Js(e) {
  const t = wi(e);
  return kw[t] + e.slice(t.length);
}
function Nw(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Vv(e) {
  return typeof e != "number" ? Nw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function no(e) {
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
function yp(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = hi(t), o = od(t), c = rd(o), u = wi(t), v = r === "y", f = i.x + i.width / 2 - a.width / 2, y = i.y + i.height / 2 - a.height / 2, C = i[c] / 2 - a[c] / 2;
  let E;
  switch (u) {
    case "top":
      E = {
        x: f,
        y: i.y - a.height
      };
      break;
    case "bottom":
      E = {
        x: f,
        y: i.y + i.height
      };
      break;
    case "right":
      E = {
        x: i.x + i.width,
        y
      };
      break;
    case "left":
      E = {
        x: i.x - a.width,
        y
      };
      break;
    default:
      E = {
        x: i.x,
        y: i.y
      };
  }
  const N = Pn(t);
  return N && (E[o] += C * (N === "end" ? 1 : -1) * (n && v ? -1 : 1)), E;
}
async function Lw(e, t) {
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
    boundary: v = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: y = "floating",
    altBoundary: C = !1,
    padding: E = 0
  } = za(t, e), N = Vv(E), O = c[C ? y === "floating" ? "reference" : "floating" : y], D = no(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: v,
    rootBoundary: f,
    strategy: u
  })), M = y === "floating" ? {
    x: i,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, z = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(z)) && await (r.getScale == null ? void 0 : r.getScale(z)) || {
    x: 1,
    y: 1
  }, oe = no(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: M,
    offsetParent: z,
    strategy: u
  }) : M);
  return {
    top: (D.top - oe.top + N.top) / k.y,
    bottom: (oe.bottom - D.bottom + N.bottom) / k.y,
    left: (D.left - oe.left + N.left) / k.x,
    right: (oe.right - D.right + N.right) / k.x
  };
}
const Rw = 50, Iw = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = n, c = o.detectOverflow ? o : {
    ...o,
    detectOverflow: Lw
  }, u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let v = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: f,
    y
  } = yp(v, i, u), C = i, E = 0;
  const N = {};
  for (let A = 0; A < r.length; A++) {
    const O = r[A];
    if (!O)
      continue;
    const {
      name: D,
      fn: M
    } = O, {
      x: z,
      y: k,
      data: oe,
      reset: ue
    } = await M({
      x: f,
      y,
      initialPlacement: i,
      placement: C,
      strategy: a,
      middlewareData: N,
      rects: v,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = z ?? f, y = k ?? y, N[D] = {
      ...N[D],
      ...oe
    }, ue && E < Rw && (E++, typeof ue == "object" && (ue.placement && (C = ue.placement), ue.rects && (v = ue.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ue.rects), {
      x: f,
      y
    } = yp(v, C, u)), A = -1);
  }
  return {
    x: f,
    y,
    placement: C,
    strategy: a,
    middlewareData: N
  };
}, Pw = (e) => ({
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
      element: v,
      padding: f = 0
    } = za(e, t) || {};
    if (v == null)
      return {};
    const y = Vv(f), C = {
      x: n,
      y: i
    }, E = od(a), N = rd(E), A = await o.getDimensions(v), O = E === "y", D = O ? "top" : "left", M = O ? "bottom" : "right", z = O ? "clientHeight" : "clientWidth", k = r.reference[N] + r.reference[E] - C[E] - r.floating[N], oe = C[E] - r.reference[E], ue = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(v));
    let Z = ue ? ue[z] : 0;
    (!Z || !await (o.isElement == null ? void 0 : o.isElement(ue))) && (Z = c.floating[z] || r.floating[N]);
    const pe = k / 2 - oe / 2, Y = Z / 2 - A[N] / 2 - 1, le = To(y[D], Y), _e = To(y[M], Y), ee = Z - A[N] - _e, J = Z / 2 - A[N] / 2 + pe, F = jv(le, J, ee), U = !u.arrow && Pn(a) != null && J !== F && r.reference[N] / 2 - (J < le ? le : _e) - A[N] / 2 < 0, W = U ? J < le ? J - le : J - ee : 0;
    return {
      [E]: C[E] + W,
      data: {
        [E]: F,
        centerOffset: J - F - W,
        ...U && {
          alignmentOffset: W
        }
      },
      reset: U
    };
  }
});
function $w(e, t, n) {
  return (e ? [...n.filter((a) => Pn(a) === e), ...n.filter((a) => Pn(a) !== e)] : n.filter((a) => wi(a) === a)).filter((a) => e ? Pn(a) === e || (t ? Zs(a) !== a : !1) : !0);
}
const Fw = function(e) {
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
        elements: v
      } = t, {
        crossAxis: f = !1,
        alignment: y,
        allowedPlacements: C = gp,
        autoAlignment: E = !0,
        ...N
      } = za(e, t), A = y !== void 0 || C === gp ? $w(y || null, E, C) : C, O = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, D = A[O];
      if (D == null)
        return {};
      if (c !== D)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await u.detectOverflow(t, N), z = Hv(D, r, await (u.isRTL == null ? void 0 : u.isRTL(v.floating))), k = [M[wi(D)], M[z[0]], M[z[1]]], oe = [...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: D,
        overflows: k
      }], ue = A[O + 1];
      if (ue)
        return {
          data: {
            index: O + 1,
            overflows: oe
          },
          reset: {
            placement: ue
          }
        };
      const Z = oe.map((le) => {
        const _e = Pn(le.placement);
        return [le.placement, _e && f ? (
          // Check along the mainAxis and main crossAxis side.
          le.overflows.slice(0, 2).reduce((ee, J) => ee + J, 0)
        ) : (
          // Check only the mainAxis.
          le.overflows[0]
        ), le.overflows];
      }).sort((le, _e) => le[1] - _e[1]), Y = ((a = Z.filter((le) => le[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Pn(le[0]) ? 2 : 3
      ).every((_e) => _e <= 0))[0]) == null ? void 0 : a[0]) || Z[0][0];
      return Y !== c ? {
        data: {
          index: O + 1,
          overflows: oe
        },
        reset: {
          placement: Y
        }
      } : {};
    }
  };
}, Dw = function(e) {
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
        elements: v
      } = t, {
        mainAxis: f = !0,
        crossAxis: y = !0,
        fallbackPlacements: C,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: N = "none",
        flipAlignment: A = !0,
        ...O
      } = za(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const D = wi(a), M = hi(c), z = wi(c) === c, k = await (u.isRTL == null ? void 0 : u.isRTL(v.floating)), oe = C || (z || !A ? [Js(c)] : Tw(c)), ue = N !== "none";
      !C && ue && oe.push(...Ow(c, A, N, k));
      const Z = [c, ...oe], pe = await u.detectOverflow(t, O), Y = [];
      let le = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (f && Y.push(pe[D]), y) {
        const F = Hv(a, o, k);
        Y.push(pe[F[0]], pe[F[1]]);
      }
      if (le = [...le, {
        placement: a,
        overflows: Y
      }], !Y.every((F) => F <= 0)) {
        var _e, ee;
        const F = (((_e = r.flip) == null ? void 0 : _e.index) || 0) + 1, U = Z[F];
        if (U && (!(y === "alignment" ? M !== hi(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        le.every((ae) => hi(ae.placement) === M ? ae.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: le
            },
            reset: {
              placement: U
            }
          };
        let W = (ee = le.filter((ce) => ce.overflows[0] <= 0).sort((ce, ae) => ce.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!W)
          switch (E) {
            case "bestFit": {
              var J;
              const ce = (J = le.filter((ae) => {
                if (ue) {
                  const me = hi(ae.placement);
                  return me === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  me === "y";
                }
                return !0;
              }).map((ae) => [ae.placement, ae.overflows.filter((me) => me > 0).reduce((me, de) => me + de, 0)]).sort((ae, me) => ae[1] - me[1])[0]) == null ? void 0 : J[0];
              ce && (W = ce);
              break;
            }
            case "initialPlacement":
              W = c;
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
}, Mw = /* @__PURE__ */ new Set(["left", "top"]);
async function zw(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = wi(n), c = Pn(n), u = hi(n) === "y", v = Mw.has(o) ? -1 : 1, f = r && u ? -1 : 1, y = za(t, e);
  let {
    mainAxis: C,
    crossAxis: E,
    alignmentAxis: N
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return c && typeof N == "number" && (E = c === "end" ? N * -1 : N), u ? {
    x: E * f,
    y: C * v
  } : {
    x: C * v,
    y: E * f
  };
}
const Uw = function(e) {
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
      } = t, u = await zw(t, e);
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
}, jw = function(e) {
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
          fn: (M) => {
            let {
              x: z,
              y: k
            } = M;
            return {
              x: z,
              y: k
            };
          }
        },
        ...v
      } = za(e, t), f = {
        x: n,
        y: i
      }, y = await r.detectOverflow(t, v), C = hi(a), E = Bv(C);
      let N = f[E], A = f[C];
      const O = (M, z) => jv(z + y[M === "y" ? "top" : "left"], z, z - y[M === "y" ? "bottom" : "right"]);
      o && (N = O(E, N)), c && (A = O(C, A));
      const D = u.fn({
        ...t,
        [E]: N,
        [C]: A
      });
      return {
        ...D,
        data: {
          x: D.x - n,
          y: D.y - i,
          enabled: {
            [E]: o,
            [C]: c
          }
        }
      };
    }
  };
}, Bw = function(e) {
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
      } = za(e, t), u = await a.detectOverflow(t, c), v = wi(n), f = Pn(n), y = hi(n) === "y", {
        width: C,
        height: E
      } = i.floating;
      let N, A;
      v === "top" || v === "bottom" ? (N = v, A = f === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = v, N = f === "end" ? "top" : "bottom");
      const O = E - u.top - u.bottom, D = C - u.left - u.right, M = To(E - u[N], O), z = To(C - u[A], D), k = t.middlewareData.shift, oe = !k;
      let ue = M, Z = z;
      k != null && k.enabled.x && (Z = D), k != null && k.enabled.y && (ue = O), oe && !f && (y ? Z = C - 2 * wu(u.left, u.right) : ue = E - 2 * wu(u.top, u.bottom)), await o({
        ...t,
        availableWidth: Z,
        availableHeight: ue
      });
      const pe = await a.getDimensions(r.floating);
      return C !== pe.width || E !== pe.height ? {
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
function Zn(e) {
  return Sn(e).getComputedStyle(e);
}
const _p = Math.min, io = Math.max, Qs = Math.round;
function Gv(e) {
  const t = Zn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = Qs(n) !== a || Qs(i) !== r;
  return o && (n = a, i = r), { width: n, height: i, fallback: o };
}
function Qi(e) {
  return qv(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ms;
function Kv() {
  if (ms) return ms;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ms = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), ms) : navigator.userAgent;
}
function Jn(e) {
  return e instanceof Sn(e).HTMLElement;
}
function Wi(e) {
  return e instanceof Sn(e).Element;
}
function qv(e) {
  return e instanceof Sn(e).Node;
}
function wp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Sn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Wl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Zn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function Hw(e) {
  return ["table", "td", "th"].includes(Qi(e));
}
function Su(e) {
  const t = /firefox/i.test(Kv()), n = Zn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Wv() {
  return !/^((?!chrome|android).)*safari/i.test(Kv());
}
function sd(e) {
  return ["html", "body", "#document"].includes(Qi(e));
}
function Yv(e) {
  return Wi(e) ? e : e.contextElement;
}
const Xv = { x: 1, y: 1 };
function sr(e) {
  const t = Yv(e);
  if (!Jn(t)) return Xv;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Gv(t);
  let o = (r ? Qs(n.width) : n.width) / i, c = (r ? Qs(n.height) : n.height) / a;
  return o && Number.isFinite(o) || (o = 1), c && Number.isFinite(c) || (c = 1), { x: o, y: c };
}
function Eo(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), c = Yv(e);
  let u = Xv;
  t && (i ? Wi(i) && (u = sr(i)) : u = sr(e));
  const v = c ? Sn(c) : window, f = !Wv() && n;
  let y = (o.left + (f && ((a = v.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, C = (o.top + (f && ((r = v.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / u.y, E = o.width / u.x, N = o.height / u.y;
  if (c) {
    const A = Sn(c), O = i && Wi(i) ? Sn(i) : i;
    let D = A.frameElement;
    for (; D && i && O !== A; ) {
      const M = sr(D), z = D.getBoundingClientRect(), k = getComputedStyle(D);
      z.x += (D.clientLeft + parseFloat(k.paddingLeft)) * M.x, z.y += (D.clientTop + parseFloat(k.paddingTop)) * M.y, y *= M.x, C *= M.y, E *= M.x, N *= M.y, y += z.x, C += z.y, D = Sn(D).frameElement;
    }
  }
  return { width: E, height: N, top: C, right: y + E, bottom: C + N, left: y, x: y, y: C };
}
function Yi(e) {
  return ((qv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Yl(e) {
  return Wi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Zv(e) {
  return Eo(Yi(e)).left + Yl(e).scrollLeft;
}
function Ao(e) {
  if (Qi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || wp(e) && e.host || Yi(e);
  return wp(t) ? t.host : t;
}
function Jv(e) {
  const t = Ao(e);
  return sd(t) ? t.ownerDocument.body : Jn(t) && Wl(t) ? t : Jv(t);
}
function el(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Jv(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Sn(i);
  return a ? t.concat(r, r.visualViewport || [], Wl(i) ? i : []) : t.concat(i, el(i));
}
function Sp(e, t, n) {
  return t === "viewport" ? no((function(i, a) {
    const r = Sn(i), o = Yi(i), c = r.visualViewport;
    let u = o.clientWidth, v = o.clientHeight, f = 0, y = 0;
    if (c) {
      u = c.width, v = c.height;
      const C = Wv();
      (C || !C && a === "fixed") && (f = c.offsetLeft, y = c.offsetTop);
    }
    return { width: u, height: v, x: f, y };
  })(e, n)) : Wi(t) ? no((function(i, a) {
    const r = Eo(i, !0, a === "fixed"), o = r.top + i.clientTop, c = r.left + i.clientLeft, u = Jn(i) ? sr(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * u.x, height: i.clientHeight * u.y, x: c * u.x, y: o * u.y };
  })(t, n)) : no((function(i) {
    const a = Yi(i), r = Yl(i), o = i.ownerDocument.body, c = io(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), u = io(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let v = -r.scrollLeft + Zv(i);
    const f = -r.scrollTop;
    return Zn(o).direction === "rtl" && (v += io(a.clientWidth, o.clientWidth) - c), { width: c, height: u, x: v, y: f };
  })(Yi(e)));
}
function Cp(e) {
  return Jn(e) && Zn(e).position !== "fixed" ? e.offsetParent : null;
}
function kp(e) {
  const t = Sn(e);
  let n = Cp(e);
  for (; n && Hw(n) && Zn(n).position === "static"; ) n = Cp(n);
  return n && (Qi(n) === "html" || Qi(n) === "body" && Zn(n).position === "static" && !Su(n)) ? t : n || (function(i) {
    let a = Ao(i);
    for (; Jn(a) && !sd(a); ) {
      if (Su(a)) return a;
      a = Ao(a);
    }
    return null;
  })(e) || t;
}
function Vw(e, t, n) {
  const i = Jn(t), a = Yi(t), r = Eo(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Qi(t) !== "body" || Wl(a)) && (o = Yl(t)), Jn(t)) {
    const u = Eo(t, !0);
    c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
  } else a && (c.x = Zv(a));
  return { x: r.left + o.scrollLeft - c.x, y: r.top + o.scrollTop - c.y, width: r.width, height: r.height };
}
const Gw = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(v, f) {
    const y = f.get(v);
    if (y) return y;
    let C = el(v).filter(((O) => Wi(O) && Qi(O) !== "body")), E = null;
    const N = Zn(v).position === "fixed";
    let A = N ? Ao(v) : v;
    for (; Wi(A) && !sd(A); ) {
      const O = Zn(A), D = Su(A);
      (N ? D || E : D || O.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = O : C = C.filter(((M) => M !== A)), A = Ao(A);
    }
    return f.set(v, C), C;
  })(t, this._c) : [].concat(n), o = [...r, i], c = o[0], u = o.reduce(((v, f) => {
    const y = Sp(t, f, a);
    return v.top = io(y.top, v.top), v.right = _p(y.right, v.right), v.bottom = _p(y.bottom, v.bottom), v.left = io(y.left, v.left), v;
  }), Sp(t, c, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Jn(n), r = Yi(n);
  if (n === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Qi(n) !== "body" || Wl(r)) && (o = Yl(n)), Jn(n))) {
    const v = Eo(n);
    c = sr(n), u.x = v.x + n.clientLeft, u.y = v.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - o.scrollLeft * c.x + u.x, y: t.y * c.y - o.scrollTop * c.y + u.y };
}, isElement: Wi, getDimensions: function(e) {
  return Jn(e) ? Gv(e) : e.getBoundingClientRect();
}, getOffsetParent: kp, getDocumentElement: Yi, getScale: sr, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || kp, r = this.getDimensions;
  return { reference: Vw(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Zn(e).direction === "rtl" }, Kw = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: Gw, ...n }, r = { ...a.platform, _c: i };
  return Iw(e, t, { ...a, platform: r });
}, Xi = {
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
function Cu(e, t) {
  let n = Xi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Xi.themes[n.$extend] || {} : (n = null, i = Xi[t]) : n = null;
  while (n);
  return i;
}
function qw(e) {
  const t = [e];
  let n = Xi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Xi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Tp(e) {
  const t = [e];
  let n = Xi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Xi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let xo = !1;
if (typeof window < "u") {
  xo = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        xo = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Qv = !1;
typeof window < "u" && typeof navigator < "u" && (Qv = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Ww = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Ep = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Ap = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function xp(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Wc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Rn = [];
let Ca = null;
const Op = {};
function Np(e) {
  let t = Op[e];
  return t || (t = Op[e] = []), t;
}
let ku = function() {
};
typeof window < "u" && (ku = window.Element);
function Ve(e) {
  return function(t) {
    return Cu(t.theme, e);
  };
}
const Yc = "__floating-vue__popper", eg = () => /* @__PURE__ */ Dt({
  name: "VPopper",
  provide() {
    return {
      [Yc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Yc]: { default: null }
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
      validator: (e) => Ww.includes(e)
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
      type: [String, Object, ku, Boolean],
      default: Ve("container")
    },
    boundary: {
      type: [String, ku],
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
      return (e = this[Yc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(Uw({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Fw({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(jw({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Dw({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Pw({
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
            let u, v;
            return r.startsWith("top") || r.startsWith("bottom") ? u = a.reference.width : v = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = u != null ? `${u}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = v != null ? `${v}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Bw({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await Kw(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Ca && this.instantMove && Ca.instantMove && Ca !== this.parentPopper) {
        Ca.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Ca = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Wc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...el(this.$_referenceNode),
        ...el(this.$_popperNode)
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
        for (let n = 0; n < Rn.length; n++)
          t = Rn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Rn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Tp(this.theme))
        Np(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Wc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, xp(Rn, this), Rn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Tp(this.theme)) {
        const i = Np(n);
        xp(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      Ca === this && (Ca = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Wc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Ep, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Ep, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ap, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Ap, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, xo ? {
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
      if (ao >= e.left && ao <= e.right && ro >= e.top && ro <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = ao - Hi, i = ro - Vi, a = t.left + t.width / 2 - Hi + (t.top + t.height / 2) - Vi + t.width + t.height, r = Hi + n * a, o = Vi + i * a;
        return ys(Hi, Vi, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        ys(Hi, Vi, r, o, t.left, t.top, t.right, t.top) || // Top edge
        ys(Hi, Vi, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        ys(Hi, Vi, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Qv) {
    const e = xo ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Lp(t), e), document.addEventListener("touchend", (t) => Rp(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Lp(e), !0), window.addEventListener("click", (e) => Rp(e, !1), !0);
  window.addEventListener("resize", Zw);
}
function Lp(e, t) {
  for (let n = 0; n < Rn.length; n++) {
    const i = Rn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Rp(e, t) {
  Yw(e, t);
}
function Yw(e, t) {
  const n = {};
  for (let i = Rn.length - 1; i >= 0; i--) {
    const a = Rn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Ip(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = a.parentPopper;
            for (; c; )
              n[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && Ip(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Ip(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Xw(e, n) && !t;
}
function Xw(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function Zw() {
  for (let e = 0; e < Rn.length; e++)
    Rn[e].$_computePosition();
}
let Hi = 0, Vi = 0, ao = 0, ro = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Hi = ao, Vi = ro, ao = e.clientX, ro = e.clientY;
}, xo ? {
  passive: !0
} : void 0);
function ys(e, t, n, i, a, r, o, c) {
  const u = ((o - a) * (t - r) - (c - r) * (e - a)) / ((c - r) * (n - e) - (o - a) * (i - t)), v = ((n - e) * (t - r) - (i - t) * (e - a)) / ((c - r) * (n - e) - (o - a) * (i - t));
  return u >= 0 && u <= 1 && v >= 0 && v <= 1;
}
const Jw = {
  extends: eg()
}, ld = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function Qw(e, t, n, i, a, r) {
  return m(), _("div", {
    ref: "reference",
    class: be(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Me(e.$slots, "default", xs(_o(e.slotData)))
  ], 2);
}
const eS = /* @__PURE__ */ ld(Jw, [["render", Qw]]);
function tS() {
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
let Es;
function Tu() {
  Tu.init || (Tu.init = !0, Es = tS() !== -1);
}
var Xl = {
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
    Tu(), tn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Es && this.$el.appendChild(e), e.data = "about:blank", Es || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Es && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const nS = /* @__PURE__ */ tm();
Qb("data-v-b329ee4c");
const iS = {
  class: "resize-observer",
  tabindex: "-1"
};
em();
const aS = /* @__PURE__ */ nS((e, t, n, i, a, r) => (m(), je("div", iS)));
Xl.render = aS;
Xl.__scopeId = "data-v-b329ee4c";
Xl.__file = "src/components/ResizeObserver.vue";
const tg = (e = "theme") => ({
  computed: {
    themeClass() {
      return qw(this[e]);
    }
  }
}), rS = /* @__PURE__ */ Dt({
  name: "VPopperContent",
  components: {
    ResizeObserver: Xl
  },
  mixins: [
    tg()
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
}), oS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], sS = {
  ref: "inner",
  class: "v-popper__inner"
}, lS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), cS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), uS = [
  lS,
  cS
];
function dS(e, t, n, i, a, r) {
  const o = Be("ResizeObserver");
  return m(), _("div", {
    id: e.popperId,
    ref: "popover",
    class: be(["v-popper__popper", [
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
    onKeyup: t[2] || (t[2] = at((c) => e.autoHide && e.$emit("hide"), ["esc"]))
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
      l("div", sS, [
        e.mounted ? (m(), _(ie, { key: 0 }, [
          l("div", null, [
            Me(e.$slots, "default")
          ]),
          e.handleResize ? (m(), je(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : $("", !0)
        ], 64)) : $("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: vn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, uS, 4)
    ], 4)
  ], 46, oS);
}
const ng = /* @__PURE__ */ ld(rS, [["render", dS]]), ig = {
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
let Eu = function() {
};
typeof window < "u" && (Eu = window.Element);
const fS = /* @__PURE__ */ Dt({
  name: "VPopperWrapper",
  components: {
    Popper: eS,
    PopperContent: ng
  },
  mixins: [
    ig,
    tg("finalTheme")
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
      type: [String, Object, Eu, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Eu],
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
function pS(e, t, n, i, a, r) {
  const o = Be("PopperContent"), c = Be("Popper");
  return m(), je(c, Yt({ ref: "popper" }, e.$props, {
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
    default: Ie(({
      popperId: u,
      isShown: v,
      shouldMountContent: f,
      skipTransition: y,
      autoHide: C,
      show: E,
      hide: N,
      handleResize: A,
      onResize: O,
      classes: D,
      result: M
    }) => [
      Me(e.$slots, "default", {
        shown: v,
        show: E,
        hide: N
      }),
      Se(o, {
        ref: "popperContent",
        "popper-id": u,
        theme: e.finalTheme,
        shown: v,
        mounted: f,
        "skip-transition": y,
        "auto-hide": C,
        "handle-resize": A,
        classes: D,
        result: M,
        onHide: N,
        onResize: O
      }, {
        default: Ie(() => [
          Me(e.$slots, "popper", {
            shown: v,
            hide: N
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const cd = /* @__PURE__ */ ld(fS, [["render", pS]]), hS = {
  ...cd,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...cd
});
({
  ...cd
});
eg();
const Pp = Xi, vS = hS, gS = /* @__PURE__ */ Dt({
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
}), bS = "_ncPopover_qgtYg", mS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: bS
}, ag = "nc-popover-9";
Pp.themes[ag] = structuredClone(Pp.themes.dropdown);
const yS = {
  name: "NcPopover",
  components: {
    Dropdown: vS,
    NcPopoverTriggerProvider: gS
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
      theme: ag
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
      return this.placement === "start" ? mu ? "right" : "left" : this.placement === "end" ? mu ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = id(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: ko(),
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
        $a.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function _S(e, t, n, i, a, r) {
  const o = Be("NcPopoverTriggerProvider"), c = Be("Dropdown");
  return m(), je(c, {
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
    popper: Ie((u) => [
      Me(e.$slots, "default", xs(_o(u)))
    ]),
    default: Ie(() => [
      Se(o, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Ie((u) => [
          Me(e.$slots, "trigger", xs(_o(u)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const wS = {
  $style: mS
}, $p = /* @__PURE__ */ Qe(yS, [["render", _S], ["__cssModules", wS]]), SS = {
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
}, CS = ["aria-hidden", "aria-label"], kS = ["fill", "width", "height"], TS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, ES = { key: 0 };
function AS(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", TS, [
        n.title ? (m(), _("title", ES, h(n.title), 1)) : $("", !0)
      ])
    ], 8, kS))
  ], 16, CS);
}
const xS = /* @__PURE__ */ Qe(SS, [["render", AS]]);
ta(s1);
function ud(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === $t)
        return !1;
      if (n.type === ie && !ud(n.children))
        return !1;
      if (n.type === Po && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const OS = ".focusable", NS = {
  name: "NcActions",
  components: {
    NcButton: Xn,
    NcPopover: $p
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
      [ad]: H(() => this.actionsMenuSemanticType === "menu"),
      [zv]: this.closeMenu
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
      default: kt("Actions")
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
      randomId: ql()
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
    Sw(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(OS);
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
    const e = [], t = (E, N) => {
      E.forEach((A) => {
        if (this.isAction(A)) {
          N.push(A);
          return;
        }
        A.type === ie && t(A.children, N);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], u = a.some((E) => o.includes(this.getActionName(E))), v = a.some((E) => r.includes(this.getActionName(E))), f = a.some((E) => c.includes(this.getActionName(E)));
    u ? this.actionsMenuSemanticType = "dialog" : v ? this.actionsMenuSemanticType = "menu" : f ? this.actionsMenuSemanticType = "navigation" : e.filter((N) => this.getActionName(N).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const y = (E) => {
      const N = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(N) ? an("img", { class: "action-item__menutoggle__icon", src: N, alt: "" }) : an("span", { class: ["icon", N] })), O = E?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? O : "";
      let M = E?.props?.title;
      this.forceName || M || (M = O);
      const z = { ...E?.props ?? {} }, k = ["submit", "reset"].includes(z.type) ? z.modelValue : "button";
      return delete z.modelValue, delete z.type, an(
        Xn,
        Yt(
          z,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": E?.props?.["aria-label"] || O,
            title: M,
            disabled: this.disabled || E?.props?.disabled,
            pressed: E?.props?.modelValue,
            size: this.size,
            type: k,
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
    }, C = (E) => {
      const N = ud(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? an("span", { class: ["icon", this.defaultIcon] }) : an(xS, { size: 20 }), A = `${this.randomId}-trigger`;
      return an(
        $p,
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
          trigger: () => an(Xn, {
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
            icon: () => N,
            default: () => this.menuName
          }),
          default: () => an("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            an("ul", {
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
    return e.length === 1 && n.length === 1 && !this.forceMenu ? y(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), i.length > 0 && this.inline > 0 ? an(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...i.map(y),
        // render the rest within the popover menu
        a.length > 0 ? an(
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
    ) : an(
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
}, tl = /* @__PURE__ */ Qe(NS, [["__scopeId", "data-v-7206c1f1"]]), LS = ["aria-label"], RS = ["width", "height"], IS = ["fill"], PS = ["fill"], $S = { key: 0 }, FS = /* @__PURE__ */ Dt({
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
    return (i, a) => (m(), _("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (m(), _("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        l("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, IS),
        l("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (m(), _("title", $S, h(e.name), 1)) : $("", !0)
        ], 8, PS)
      ], 8, RS))
    ], 8, LS));
  }
}), rg = /* @__PURE__ */ Qe(FS, [["__scopeId", "data-v-cf399190"]]), Au = /* @__PURE__ */ Dt({
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
}), DS = {
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
}, MS = ["aria-hidden", "aria-label"], zS = ["fill", "width", "height"], US = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, jS = { key: 0 };
function BS(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", US, [
        n.title ? (m(), _("title", jS, h(n.title), 1)) : $("", !0)
      ])
    ], 8, zS))
  ], 16, MS);
}
const HS = /* @__PURE__ */ Qe(DS, [["render", BS]]), VS = {
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
}, GS = ["aria-hidden", "aria-label"], KS = ["fill", "width", "height"], qS = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, WS = { key: 0 };
function YS(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", qS, [
        n.title ? (m(), _("title", WS, h(n.title), 1)) : $("", !0)
      ])
    ], 8, KS))
  ], 16, GS);
}
const XS = /* @__PURE__ */ Qe(VS, [["render", YS]]);
ta(d1);
const ZS = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Xn,
    ChevronDown: U0,
    ChevronUp: q0
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
    return { isLegacy34: na };
  },
  computed: {
    labelButton() {
      return this.open ? kt("Collapse menu") : kt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function JS(e, t, n, i, a, r) {
  const o = Be("ChevronUp"), c = Be("ChevronDown"), u = Be("NcButton");
  return m(), je(u, {
    class: be(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Ie(() => [
      n.open ? (m(), je(o, {
        key: 0,
        size: 20
      })) : (m(), je(c, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const QS = /* @__PURE__ */ Qe(ZS, [["render", JS], ["__scopeId", "data-v-cfbd3794"]]);
ta(f1, v1);
const eC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: tl,
    NcActionButton: ww,
    NcAppNavigationIconCollapsible: QS,
    NcInputConfirmCancel: cw,
    NcLoadingIcon: rg,
    NcVNodes: Au,
    Pencil: HS,
    Undo: XS
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Iv, default: null }
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
      default: () => ql(),
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
      isMobile: Fo(),
      isLegacy34: na
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
      return this.editLabel ? this.editLabel : kt("Edit item");
    },
    undoButtonAriaLabel() {
      return kt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && bi("toggle-navigation", { open: !1 }));
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
}, tC = ["id"], nC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], iC = {
  key: 0,
  class: "editingContainer"
}, aC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, rC = { class: "app-navigation-entry__deleted-description" }, oC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, sC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function lC(e, t, n, i, a, r) {
  const o = Be("NcLoadingIcon"), c = Be("NcInputConfirmCancel"), u = Be("Pencil"), v = Be("NcActionButton"), f = Be("Undo"), y = Be("NcActions"), C = Be("NcAppNavigationIconCollapsible");
  return m(), _("li", {
    id: n.id,
    class: be([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (m(), je(qu(r.isRouterLink ? "router-link" : "NcVNodes"), xs(_o({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Ie(({ href: E, navigate: N, isActive: A }) => [
        l("div", {
          ref: "entry",
          class: be(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          n.undo ? $("", !0) : (m(), _("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && A ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || E || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...O) => r.handleBlur && r.handleBlur(...O)),
            onClick: (O) => r.onClick(O, N, E),
            onFocus: t[2] || (t[2] = (...O) => r.handleFocus && r.handleFocus(...O)),
            onKeydown: t[3] || (t[3] = at(ye((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: be(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (m(), je(o, { key: 0 })) : Me(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            l("span", {
              class: be(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, h(n.name), 3),
            a.editingActive ? (m(), _("div", iC, [
              Se(c, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : $("", !0)
          ], 40, nC)),
          n.undo ? (m(), _("div", aC, [
            l("div", rC, h(n.name), 1)
          ])) : $("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (m(), _("div", {
            key: 2,
            class: be(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (m(), _("div", oC, [
              Me(e.$slots, "counter", {}, void 0, !0)
            ])) : $("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (m(), je(y, {
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
              icon: Ie(() => [
                Me(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Ie(() => [
                n.editable && !a.editingActive ? (m(), je(v, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Ie(() => [
                    Se(u, { size: 20 })
                  ]),
                  default: Ie(() => [
                    fe(" " + h(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : $("", !0),
                n.undo ? (m(), je(v, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Ie(() => [
                    Se(f, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : $("", !0),
                Me(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : $("", !0)
          ], 2)) : $("", !0),
          n.allowCollapse && e.$slots.default ? (m(), je(C, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: ye(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : $("", !0),
          Me(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (m(), _("ul", sC, [
      Me(e.$slots, "default", {}, void 0, !0)
    ])) : $("", !0)
  ], 10, tC);
}
const Fp = /* @__PURE__ */ Qe(eC, [["render", lC], ["__scopeId", "data-v-01bef41b"]]), Xc = /* @__PURE__ */ new WeakMap(), cC = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = sp(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = sp(e, a, Object.assign({ capture: n }, r));
    }
    Xc.set(e, i);
  },
  unmounted(e) {
    const t = Xc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Xc.delete(e);
  }
}, uC = {
  mounted(e) {
    e.focus();
  }
}, dC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", fC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", xu = "numeric", Ou = "ascii", Nu = "alpha", oo = "asciinumeric", Yr = "alphanumeric", Lu = "domain", og = "emoji", pC = "scheme", hC = "slashscheme", Zc = "whitespace";
function vC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function La(e, t, n) {
  t[xu] && (t[oo] = !0, t[Yr] = !0), t[Ou] && (t[oo] = !0, t[Nu] = !0), t[oo] && (t[Yr] = !0), t[Nu] && (t[Yr] = !0), t[Yr] && (t[Lu] = !0), t[og] && (t[Lu] = !0);
  for (const i in t) {
    const a = vC(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function gC(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function pn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
pn.groups = {};
pn.prototype = {
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
    i = i || pn.groups;
    let a;
    return t && t.j ? a = t : (a = new pn(t), n && i && La(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || pn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, c = a.go(e);
    if (c ? (o = new pn(), Object.assign(o.j, c.j), o.jr.push.apply(o.jr, c.jr), o.jd = c.jd, o.t = c.t) : o = new pn(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const u = Object.assign(gC(o.t, i), n);
          La(r, u, i);
        } else n && La(r, n, i);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, n, i, a) => e.ta(t, n, i, a), gt = (e, t, n, i, a) => e.tr(t, n, i, a), Dp = (e, t, n, i, a) => e.ts(t, n, i, a), ne = (e, t, n, i, a) => e.tt(t, n, i, a), li = "WORD", Ru = "UWORD", sg = "ASCIINUMERICAL", lg = "ALPHANUMERICAL", Oo = "LOCALHOST", Iu = "TLD", Pu = "UTLD", As = "SCHEME", Qa = "SLASH_SCHEME", dd = "NUM", $u = "WS", fd = "NL", so = "OPENBRACE", lo = "CLOSEBRACE", nl = "OPENBRACKET", il = "CLOSEBRACKET", al = "OPENPAREN", rl = "CLOSEPAREN", ol = "OPENANGLEBRACKET", sl = "CLOSEANGLEBRACKET", ll = "FULLWIDTHLEFTPAREN", cl = "FULLWIDTHRIGHTPAREN", ul = "LEFTCORNERBRACKET", dl = "RIGHTCORNERBRACKET", fl = "LEFTWHITECORNERBRACKET", pl = "RIGHTWHITECORNERBRACKET", hl = "FULLWIDTHLESSTHAN", vl = "FULLWIDTHGREATERTHAN", gl = "AMPERSAND", bl = "APOSTROPHE", ml = "ASTERISK", Ki = "AT", yl = "BACKSLASH", _l = "BACKTICK", wl = "CARET", Ra = "COLON", pd = "COMMA", Sl = "DOLLAR", Kn = "DOT", Cl = "EQUALS", hd = "EXCLAMATION", yn = "HYPHEN", co = "PERCENT", kl = "PIPE", Tl = "PLUS", El = "POUND", uo = "QUERY", vd = "QUOTE", cg = "FULLWIDTHMIDDLEDOT", gd = "SEMI", qn = "SLASH", fo = "TILDE", Al = "UNDERSCORE", ug = "EMOJI", xl = "SYM";
var dg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: lg,
  AMPERSAND: gl,
  APOSTROPHE: bl,
  ASCIINUMERICAL: sg,
  ASTERISK: ml,
  AT: Ki,
  BACKSLASH: yl,
  BACKTICK: _l,
  CARET: wl,
  CLOSEANGLEBRACKET: sl,
  CLOSEBRACE: lo,
  CLOSEBRACKET: il,
  CLOSEPAREN: rl,
  COLON: Ra,
  COMMA: pd,
  DOLLAR: Sl,
  DOT: Kn,
  EMOJI: ug,
  EQUALS: Cl,
  EXCLAMATION: hd,
  FULLWIDTHGREATERTHAN: vl,
  FULLWIDTHLEFTPAREN: ll,
  FULLWIDTHLESSTHAN: hl,
  FULLWIDTHMIDDLEDOT: cg,
  FULLWIDTHRIGHTPAREN: cl,
  HYPHEN: yn,
  LEFTCORNERBRACKET: ul,
  LEFTWHITECORNERBRACKET: fl,
  LOCALHOST: Oo,
  NL: fd,
  NUM: dd,
  OPENANGLEBRACKET: ol,
  OPENBRACE: so,
  OPENBRACKET: nl,
  OPENPAREN: al,
  PERCENT: co,
  PIPE: kl,
  PLUS: Tl,
  POUND: El,
  QUERY: uo,
  QUOTE: vd,
  RIGHTCORNERBRACKET: dl,
  RIGHTWHITECORNERBRACKET: pl,
  SCHEME: As,
  SEMI: gd,
  SLASH: qn,
  SLASH_SCHEME: Qa,
  SYM: xl,
  TILDE: fo,
  TLD: Iu,
  UNDERSCORE: Al,
  UTLD: Pu,
  UWORD: Ru,
  WORD: li,
  WS: $u
});
const oi = /[a-z]/, Hr = new RegExp("\\p{L}", "u"), Jc = new RegExp("\\p{Emoji}", "u"), si = /\d/, Qc = /\s/, Mp = "\r", eu = `
`, bC = "️", mC = "‍", tu = "￼";
let _s = null, ws = null;
function yC(e = []) {
  const t = {};
  pn.groups = t;
  const n = new pn();
  _s == null && (_s = zp(dC)), ws == null && (ws = zp(fC)), ne(n, "'", bl), ne(n, "{", so), ne(n, "}", lo), ne(n, "[", nl), ne(n, "]", il), ne(n, "(", al), ne(n, ")", rl), ne(n, "<", ol), ne(n, ">", sl), ne(n, "（", ll), ne(n, "）", cl), ne(n, "「", ul), ne(n, "」", dl), ne(n, "『", fl), ne(n, "』", pl), ne(n, "＜", hl), ne(n, "＞", vl), ne(n, "&", gl), ne(n, "*", ml), ne(n, "@", Ki), ne(n, "`", _l), ne(n, "^", wl), ne(n, ":", Ra), ne(n, ",", pd), ne(n, "$", Sl), ne(n, ".", Kn), ne(n, "=", Cl), ne(n, "!", hd), ne(n, "-", yn), ne(n, "%", co), ne(n, "|", kl), ne(n, "+", Tl), ne(n, "#", El), ne(n, "?", uo), ne(n, '"', vd), ne(n, "/", qn), ne(n, ";", gd), ne(n, "~", fo), ne(n, "_", Al), ne(n, "\\", yl), ne(n, "・", cg);
  const i = gt(n, si, dd, {
    [xu]: !0
  });
  gt(i, si, i);
  const a = gt(i, oi, sg, {
    [oo]: !0
  }), r = gt(i, Hr, lg, {
    [Yr]: !0
  }), o = gt(n, oi, li, {
    [Ou]: !0
  });
  gt(o, si, a), gt(o, oi, o), gt(a, si, a), gt(a, oi, a);
  const c = gt(n, Hr, Ru, {
    [Nu]: !0
  });
  gt(c, oi), gt(c, si, r), gt(c, Hr, c), gt(r, si, r), gt(r, oi), gt(r, Hr, r);
  const u = ne(n, eu, fd, {
    [Zc]: !0
  }), v = ne(n, Mp, $u, {
    [Zc]: !0
  }), f = gt(n, Qc, $u, {
    [Zc]: !0
  });
  ne(n, tu, f), ne(v, eu, u), ne(v, tu, f), gt(v, Qc, f), ne(f, Mp), ne(f, eu), gt(f, Qc, f), ne(f, tu, f);
  const y = gt(n, Jc, ug, {
    [og]: !0
  });
  ne(y, "#"), gt(y, Jc, y), ne(y, bC, y);
  const C = ne(y, mC);
  ne(C, "#"), gt(C, Jc, y);
  const E = [[oi, o], [si, a]], N = [[oi, null], [Hr, c], [si, r]];
  for (let A = 0; A < _s.length; A++)
    ji(n, _s[A], Iu, li, E);
  for (let A = 0; A < ws.length; A++)
    ji(n, ws[A], Pu, Ru, N);
  La(Iu, {
    tld: !0,
    ascii: !0
  }, t), La(Pu, {
    utld: !0,
    alpha: !0
  }, t), ji(n, "file", As, li, E), ji(n, "mailto", As, li, E), ji(n, "http", Qa, li, E), ji(n, "https", Qa, li, E), ji(n, "ftp", Qa, li, E), ji(n, "ftps", Qa, li, E), La(As, {
    scheme: !0,
    ascii: !0
  }, t), La(Qa, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], M = e[A][1] ? {
      [pC]: !0
    } : {
      [hC]: !0
    };
    O.indexOf("-") >= 0 ? M[Lu] = !0 : oi.test(O) ? si.test(O) ? M[oo] = !0 : M[Ou] = !0 : M[xu] = !0, Dp(n, O, O, M);
  }
  return Dp(n, "localhost", Oo, {
    ascii: !0
  }), n.jd = new pn(xl), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, dg)
  };
}
function fg(e, t) {
  const n = _C(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), i = n.length, a = [];
  let r = 0, o = 0;
  for (; o < i; ) {
    let c = e, u = null, v = 0, f = null, y = -1, C = -1;
    for (; o < i && (u = c.go(n[o])); )
      c = u, c.accepts() ? (y = 0, C = 0, f = c) : y >= 0 && (y += n[o].length, C++), v += n[o].length, r += n[o].length, o++;
    r -= y, o -= C, v -= y, a.push({
      t: f.t,
      // token type/name
      v: t.slice(r - v, r),
      // string value
      s: r - v,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function _C(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, o = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(o), i += o.length;
  }
  return t;
}
function ji(e, t, n, i, a) {
  let r;
  const o = t.length;
  for (let c = 0; c < o - 1; c++) {
    const u = t[c];
    e.j[u] ? r = e.j[u] : (r = new pn(i), r.jr = a.slice(), e.j[u] = r), e = r;
  }
  return r = new pn(n), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function zp(e) {
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
const No = {
  defaultProtocol: "http",
  events: null,
  format: Up,
  formatHref: Up,
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
function bd(e, t = null) {
  let n = Object.assign({}, No);
  e && (n = Object.assign(n, e instanceof bd ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
bd.prototype = {
  o: No,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : No[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Up(e) {
  return e;
}
function pg(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
pg.prototype = {
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
  toObject(e = No.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), o = {}, c = e.get("className", n, t), u = e.get("target", n, t), v = e.get("rel", n, t), f = e.getObj("attributes", n, t), y = e.getObj("events", n, t);
    return o.href = i, c && (o.class = c), u && (o.target = u), v && (o.rel = v), f && Object.assign(o, f), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: y
    };
  }
};
function Zl(e, t) {
  class n extends pg {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const wC = Zl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), jp = Zl("text"), SC = Zl("nl"), Ss = Zl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = No.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== Oo && e[1].t === Ra;
  }
}), mn = (e) => new pn(e);
function CC({
  groups: e
}) {
  const t = e.domain.concat([gl, ml, Ki, yl, _l, wl, Sl, Cl, yn, dd, co, kl, Tl, El, qn, xl, fo, Al]), n = [bl, Ra, pd, Kn, hd, co, uo, vd, gd, ol, sl, so, lo, il, nl, al, rl, ll, cl, ul, dl, fl, pl, hl, vl], i = [gl, bl, ml, yl, _l, wl, Sl, Cl, yn, so, lo, co, kl, Tl, El, uo, qn, xl, fo, Al], a = mn(), r = ne(a, fo);
  Ue(r, i, r), Ue(r, e.domain, r);
  const o = mn(), c = mn(), u = mn();
  Ue(a, e.domain, o), Ue(a, e.scheme, c), Ue(a, e.slashscheme, u), Ue(o, i, r), Ue(o, e.domain, o);
  const v = ne(o, Ki);
  ne(r, Ki, v), ne(c, Ki, v), ne(u, Ki, v);
  const f = ne(r, Kn);
  Ue(f, i, r), Ue(f, e.domain, r);
  const y = mn();
  Ue(v, e.domain, y), Ue(y, e.domain, y);
  const C = ne(y, Kn);
  Ue(C, e.domain, y);
  const E = mn(wC);
  Ue(C, e.tld, E), Ue(C, e.utld, E), ne(v, Oo, E);
  const N = ne(y, yn);
  ne(N, yn, N), Ue(N, e.domain, y), Ue(E, e.domain, y), ne(E, Kn, C), ne(E, yn, N);
  const A = ne(o, yn), O = ne(o, Kn);
  ne(A, yn, A), Ue(A, e.domain, o), Ue(O, i, r), Ue(O, e.domain, o);
  const D = mn(Ss);
  Ue(O, e.tld, D), Ue(O, e.utld, D), Ue(D, e.domain, o), Ue(D, i, r), ne(D, Kn, O), ne(D, yn, A), ne(D, Ki, v);
  const M = ne(D, Ra), z = mn(Ss);
  Ue(M, e.numeric, z);
  const k = mn(Ss), oe = mn();
  Ue(k, t, k), Ue(k, n, oe), Ue(oe, t, k), Ue(oe, n, oe), ne(D, qn, k), ne(z, qn, k);
  const ue = ne(c, Ra), Z = ne(u, Ra), pe = ne(Z, qn), Y = ne(pe, qn);
  Ue(c, e.domain, o), ne(c, Kn, O), ne(c, yn, A), Ue(u, e.domain, o), ne(u, Kn, O), ne(u, yn, A), Ue(ue, e.domain, k), ne(ue, qn, k), ne(ue, uo, k), Ue(Y, e.domain, k), Ue(Y, t, k), ne(Y, qn, k);
  const le = [
    [so, lo],
    // {}
    [nl, il],
    // []
    [al, rl],
    // ()
    [ol, sl],
    // <>
    [ll, cl],
    // （）
    [ul, dl],
    // 「」
    [fl, pl],
    // 『』
    [hl, vl]
    // ＜＞
  ];
  for (let _e = 0; _e < le.length; _e++) {
    const [ee, J] = le[_e], F = ne(k, ee);
    ne(oe, ee, F);
    const U = mn(Ss);
    Ue(F, t, U);
    const W = mn();
    Ue(F, n, W), ne(F, J, k), Ue(U, t, U), Ue(U, n, W), Ue(W, t, U), Ue(W, n, W), ne(U, J, k), ne(W, J, k);
  }
  return ne(a, Oo, D), ne(a, fd, SC), {
    start: a,
    tokens: dg
  };
}
function kC(e, t, n) {
  let i = n.length, a = 0, r = [], o = [];
  for (; a < i; ) {
    let c = e, u = null, v = null, f = 0, y = null, C = -1;
    for (; a < i && !(u = c.go(n[a].t)); )
      o.push(n[a++]);
    for (; a < i && (v = u || c.go(n[a].t)); )
      u = null, c = v, c.accepts() ? (C = 0, y = c) : C >= 0 && C++, a++, f++;
    if (C < 0)
      a -= f, a < i && (o.push(n[a]), a++);
    else {
      o.length > 0 && (r.push(nu(jp, t, o)), o = []), a -= C, f -= C;
      const E = y.t, N = n.slice(a - f, a);
      r.push(nu(E, t, N));
    }
  }
  return o.length > 0 && r.push(nu(jp, t, o)), r;
}
function nu(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const Ht = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function TC() {
  Ht.scanner = yC(Ht.customSchemes);
  for (let e = 0; e < Ht.tokenQueue.length; e++)
    Ht.tokenQueue[e][1]({
      scanner: Ht.scanner
    });
  Ht.parser = CC(Ht.scanner.tokens);
  for (let e = 0; e < Ht.pluginQueue.length; e++)
    Ht.pluginQueue[e][1]({
      scanner: Ht.scanner,
      parser: Ht.parser
    });
  return Ht.initialized = !0, Ht;
}
function hg(e) {
  return Ht.initialized || TC(), kC(Ht.parser.start, e, fg(Ht.scanner.start, e));
}
hg.scan = fg;
function EC(e) {
  const t = new bd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, OC), n = hg(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Hs(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function AC(e) {
  return e.replace(/"/g, "&quot;");
}
function xC(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${AC(i)}"`);
  }
  return t.join(" ");
}
function OC({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${xC(t)}>${Hs(n)}</${e}>`;
}
const NC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = EC(t.text));
}, LC = ["title"], RC = /* @__PURE__ */ Dt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Gt("NcAppSidebar:header:ref");
    return (n, i) => Pe((m(), _("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      fe(h(e.name), 1)
    ], 8, LC)), [
      [g(NC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), IC = ["aria-labelledby"], PC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, $C = ["id"], FC = {
  key: 2,
  class: "empty-content__description"
}, DC = {
  key: 3,
  class: "empty-content__action"
}, MC = /* @__PURE__ */ Dt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = ql();
    return (n, i) => (m(), _("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (m(), _("div", PC, [
        Me(n.$slots, "icon", {}, void 0, !0)
      ])) : $("", !0),
      e.name !== "" || n.$slots.name ? (m(), _("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Me(n.$slots, "name", {}, () => [
          fe(h(e.name), 1)
        ], !0)
      ], 8, $C)) : $("", !0),
      e.description !== "" || n.$slots.description ? (m(), _("p", FC, [
        Me(n.$slots, "description", {}, () => [
          fe(h(e.description), 1)
        ], !0)
      ])) : $("", !0),
      n.$slots.action ? (m(), _("div", DC, [
        Me(n.$slots, "action", {}, void 0, !0)
      ])) : $("", !0)
    ], 8, IC));
  }
}), zC = /* @__PURE__ */ Qe(MC, [["__scopeId", "data-v-8609a4c1"]]), UC = {
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
}, jC = ["aria-hidden", "aria-label"], BC = ["fill", "width", "height"], HC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, VC = { key: 0 };
function GC(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", HC, [
        n.title ? (m(), _("title", VC, h(n.title), 1)) : $("", !0)
      ])
    ], 8, BC))
  ], 16, jC);
}
const KC = /* @__PURE__ */ Qe(UC, [["render", GC]]), qC = {
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
}, WC = ["aria-hidden", "aria-label"], YC = ["fill", "width", "height"], XC = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, ZC = { key: 0 };
function JC(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", XC, [
        n.title ? (m(), _("title", ZC, h(n.title), 1)) : $("", !0)
      ])
    ], 8, YC))
  ], 16, WC);
}
const QC = /* @__PURE__ */ Qe(qC, [["render", JC]]), ek = {
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
}, tk = ["aria-hidden", "aria-label"], nk = ["fill", "width", "height"], ik = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, ak = { key: 0 };
function rk(e, t, n, i, a, r) {
  return m(), _("span", Yt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (m(), _("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", ik, [
        n.title ? (m(), _("title", ak, h(n.title), 1)) : $("", !0)
      ])
    ], 8, nk))
  ], 16, tk);
}
const ok = /* @__PURE__ */ Qe(ek, [["render", rk]]), sk = ["aria-selected", "tabindex"], lk = /* @__PURE__ */ Dt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Em({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Fh(e, "selected"), n = /* @__PURE__ */ Te(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (m(), _("button", {
      class: be(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(na),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      l("span", {
        class: be([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (o) => n.value = !1)
      }, [
        l("span", {
          class: be([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          Se(Au, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Ie(() => [
              l("span", {
                class: be([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: be([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          Se(Au, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Ie(() => [
              l("span", {
                class: be([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: be(a.$style.sidebarTabsButton__name)
      }, h(e.tab.name), 3)
    ], 10, sk));
  }
}), ck = "_sidebarTabsButton_q3kBA", uk = "_sidebarTabsButton_legacy_KQ4d1", dk = "_sidebarTabsButton_selected_Pjayf", fk = "_sidebarTabsButton_animatedHighlight_uvp-0", pk = "_sidebarTabsButton__name_rlQsL", hk = "_sidebarTabsButton__icon_QzZg4", vk = "_sidebarTabsButton__iconLayer_ZkZan", gk = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", bk = "_sidebarTabsButton__icon_pop_IA0By", mk = "_sidebarTabsButton__legacyIcon_QhcNW", yk = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: ck,
  sidebarTabsButton_legacy: uk,
  sidebarTabsButton_selected: dk,
  sidebarTabsButton_animatedHighlight: fk,
  sidebarTabsButton__name: pk,
  sidebarTabsButton__icon: hk,
  sidebarTabsButton__iconLayer: vk,
  sidebarTabsButton__iconLayer_hidden: gk,
  sidebarTabsButton__icon_pop: bk,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: mk
}, _k = {
  $style: yk
}, wk = /* @__PURE__ */ Qe(lk, [["__cssModules", _k]]), Sk = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: wk
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
      isLegacy34: na,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [x_()]) : t.order - n.order), this.updateActive();
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
}, Ck = { class: "app-sidebar-tabs" };
function kk(e, t, n, i, a, r) {
  const o = Be("NcAppSidebarTabsButton");
  return m(), _("div", Ck, [
    r.hasMultipleTabs || r.showForSingleTab ? (m(), _("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: be(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = at(ye((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = at(ye((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = at(ye((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = at(ye((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = at(ye((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = at(ye((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = at(ye((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onPointerleave: t[8] || (t[8] = (...c) => r.hideHighlight && r.hideHighlight(...c)),
      onFocusin: t[9] || (t[9] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onFocusout: t[10] || (t[10] = (...c) => r.onHighlightFocusOut && r.onHighlightFocusOut(...c))
    }, [
      a.highlightEnabled ? (m(), _("div", {
        key: 0,
        class: be(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: vn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : $("", !0),
      (m(!0), _(ie, null, ke(a.tabs, (c) => (m(), je(o, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: a.activeTab === c.id,
        animatedHighlight: a.highlightEnabled,
        tab: c,
        "onUpdate:selected": (u) => r.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : $("", !0),
    l("div", {
      class: be(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Me(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const Tk = /* @__PURE__ */ Qe(Sk, [["render", kk], ["__scopeId", "data-v-74190d2a"]]);
ta(c1);
const Ek = {
  name: "NcAppSidebar",
  components: {
    NcActions: tl,
    NcAppSidebarHeader: RC,
    NcAppSidebarTabs: Tk,
    NcButton: Xn,
    NcLoadingIcon: rg,
    NcEmptyContent: zC,
    IconArrowRight: Dv,
    IconClose: Mv,
    IconDockRight: KC,
    IconStar: QC,
    IconStarOutline: ok
  },
  directives: {
    Focus: uC,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: cC
  },
  inject: {
    ncContentSelector: {
      from: Fv,
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
    const e = /* @__PURE__ */ Te(null);
    return _n("NcAppSidebar:header:ref", e), {
      uid: ql(),
      isMobile: i1(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: kt("Change name"),
      closeTranslated: kt("Close sidebar"),
      favoriteTranslated: kt("Favorite"),
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
    isSlotPopulated: ud,
    t: kt,
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
      this.focusTrap || (this.focusTrap = id([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: ko(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && $a.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, Ak = ["aria-labelledby"], xk = { class: "app-sidebar-header__info" }, Ok = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, Nk = { class: "app-sidebar-header__name-container" }, Lk = { class: "app-sidebar-header__mainname-container" }, Rk = ["placeholder", "value"], Ik = ["title"], Pk = {
  key: 2,
  class: "app-sidebar-header__description"
};
function $k(e, t, n, i, a, r) {
  const o = Be("IconDockRight"), c = Be("NcButton"), u = Be("NcLoadingIcon"), v = Be("IconStar"), f = Be("IconStarOutline"), y = Be("NcAppSidebarHeader"), C = Be("IconArrowRight"), E = Be("NcActions"), N = Be("IconClose"), A = Be("NcAppSidebarTabs"), O = Be("NcEmptyContent"), D = of("focus"), M = of("click-outside");
  return m(), je(py, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Ie(() => [
      Pe(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = at((...z) => r.onKeydownEsc && r.onKeydownEsc(...z), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (m(), je(_h, {
          key: 0,
          to: r.ncContentSelector
        }, [
          Se(c, Yt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (z) => e.$emit("update:open", !0))
          }), {
            icon: Ie(() => [
              Me(e.$slots, "toggle-icon", {}, () => [
                Se(o, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : $("", !0),
        l("header", {
          class: be(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (m(), je(y, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Me(e.$slots, "info", { key: 0 }, () => [
            l("div", xk, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (m(), _("div", {
                key: 0,
                class: be(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: vn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...z) => r.onFigureClick && r.onFigureClick(...z)),
                onKeydown: t[2] || (t[2] = at((...z) => r.onFigureClick && r.onFigureClick(...z), ["enter"]))
              }, [
                Me(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : $("", !0),
              l("div", {
                class: be(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (m(), _("div", Ok, [
                  Me(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (m(), je(c, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: ye(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Ie(() => [
                        n.starLoading ? (m(), je(u, { key: 0 })) : a.isStarred ? (m(), je(v, {
                          key: 1,
                          size: 20
                        })) : (m(), je(f, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : $("", !0)
                  ], !0)
                ])) : $("", !0),
                l("div", Nk, [
                  l("div", Lk, [
                    Pe(Se(y, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: ye(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [ar, !n.nameEditable]
                    ]),
                    n.nameEditable ? Pe((m(), _("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = ye((...z) => r.onSubmitName && r.onSubmitName(...z), ["prevent"]))
                    }, [
                      Pe(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = at(ye((...z) => r.onDismissEditing && r.onDismissEditing(...z), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...z) => r.onNameInput && r.onNameInput(...z))
                      }, null, 40, Rk), [
                        [D]
                      ]),
                      Se(c, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Ie(() => [
                          Se(C, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : $("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (m(), je(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Ie(() => [
                        Me(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : $("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (m(), _("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Me(e.$slots, "subname", {}, () => [
                      fe(h(n.subname), 1)
                    ], !0)
                  ], 8, Ik)) : $("", !0)
                ])
              ], 2)
            ])
          ], !0),
          Se(c, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: ye(r.closeSidebar, ["prevent"])
          }, {
            icon: Ie(() => [
              Se(N, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (m(), _("div", Pk, [
            Me(e.$slots, "description", {}, void 0, !0)
          ])) : $("", !0)
        ], 2),
        Pe(Se(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Ie(() => [
            Me(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [ar, !n.loading]
        ]),
        n.loading ? (m(), je(O, { key: 1 }, {
          icon: Ie(() => [
            Se(u, { size: 64 })
          ]),
          _: 1
        })) : $("", !0)
      ], 40, Ak), [
        [ar, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const Fk = /* @__PURE__ */ Qe(Ek, [["render", $k], ["__scopeId", "data-v-c2c6820b"]]), Dk = {
  name: "NcActionLink",
  mixins: [Uv],
  inject: {
    isInSemanticMenu: {
      from: ad,
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
}, Mk = ["role"], zk = ["download", "href", "aria-label", "target", "title", "role"], Uk = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, jk = { class: "action-link__name" }, Bk = ["textContent"], Hk = ["textContent"], Vk = {
  key: 2,
  class: "action-link__text"
};
function Gk(e, t, n, i, a, r) {
  return m(), _("li", {
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
          class: be(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: vn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (m(), _("span", Uk, [
        l("strong", jk, h(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: h(e.text)
        }, null, 8, Bk)
      ])) : e.isLongText ? (m(), _("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: h(e.text)
      }, null, 8, Hk)) : (m(), _("span", Vk, h(e.text), 1)),
      $("", !0)
    ], 8, zk)
  ], 8, Mk);
}
const Xa = /* @__PURE__ */ Qe(Dk, [["render", Gk], ["__scopeId", "data-v-32f01b7a"]]);
ta(h1);
const Kk = `<!--
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
`, qk = `<!--
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
`, Wk = { class: "vue-skip-actions__container" }, Yk = { class: "vue-skip-actions__headline" }, Xk = { class: "vue-skip-actions__buttons" }, Zk = /* @__PURE__ */ Dt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    _n($v, c), _n(Fv, "#content-vue"), _n("appName", H(() => t.appName));
    const n = Fo(), i = /* @__PURE__ */ Te(!1), a = /* @__PURE__ */ Te(), r = H(() => a.value === "navigation" ? qk : Kk);
    xh(() => {
      const u = document.getElementById("skip-actions");
      u && (u.innerHTML = "", u.classList.add("vue-skip-actions"));
    });
    function o() {
      bi("toggle-navigation", { open: !0 }), tn(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(u) {
      i.value = u, a.value || (a.value = "navigation");
    }
    return (u, v) => (m(), _("div", {
      id: "content-vue",
      class: be(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(na) }]])
    }, [
      (m(), je(_h, { to: "#skip-actions" }, [
        l("div", Wk, [
          l("div", Yk, h(g(kt)("Keyboard navigation help")), 1),
          l("div", Xk, [
            Pe(Se(Xn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: ye(o, ["prevent"]),
              onFocusin: v[0] || (v[0] = (f) => a.value = "navigation"),
              onMouseover: v[1] || (v[1] = (f) => a.value = "navigation")
            }, {
              default: Ie(() => [
                fe(h(g(kt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [ar, i.value]
            ]),
            Se(Xn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: v[2] || (v[2] = (f) => a.value = "content"),
              onMouseover: v[3] || (v[3] = (f) => a.value = "content")
            }, {
              default: Ie(() => [
                fe(h(g(kt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Pe(Se(Kl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [ar, !g(n)]
          ])
        ])
      ])),
      Me(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), Jk = /* @__PURE__ */ Qe(Zk, [["__scopeId", "data-v-d13dcb98"]]), Qk = { class: "library-shelf-tree-node" }, eT = ["aria-expanded", "aria-label"], tT = ["href"], nT = { class: "library-shelf-summary-title" }, iT = { dir: "auto" }, aT = { class: "library-muted" }, rT = { dir: "auto" }, oT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, sT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, lT = {
  key: 3,
  class: "library-shelf-tree"
}, cT = ["disabled"], uT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Te(!1), i = /* @__PURE__ */ Te(!1), a = /* @__PURE__ */ Te(!1), r = /* @__PURE__ */ Te(!1), o = /* @__PURE__ */ Te([]), c = /* @__PURE__ */ Te(!1), u = /* @__PURE__ */ Te(0);
    async function v() {
      n.value = !n.value, !(!n.value || i.value || a.value) && await f();
    }
    async function f() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const y = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(u.value) }), C = await fetch(`${t.childrenUrl}?${y}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!C.ok) throw new Error("Shelf children request failed");
          const E = await C.json(), N = Array.isArray(E?.nodes) ? E.nodes : [];
          o.value.push(...N), c.value = E?.hasMore === !0, u.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : o.value.length, i.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (y, C) => {
      const E = Be("ShelfTreeNode", !0);
      return m(), _("li", Qk, [
        e.node.hasChildren ? (m(), _("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(b)("library", "Collapse {folder}", { folder: e.node.label }) : g(b)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: v
        }, h(n.value ? "−" : "+"), 9, eT)) : $("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", nT, [
            l("strong", null, [
              l("bdi", iT, h(e.node.label), 1)
            ]),
            l("span", null, h(g(dn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", aT, [
            l("bdi", rT, h(e.node.path), 1)
          ])
        ], 8, tT),
        a.value ? (m(), _("small", oT, h(g(b)("library", "Loading folders…")), 1)) : r.value ? (m(), _("small", sT, h(g(b)("library", "Could not load folders.")), 1)) : $("", !0),
        n.value && o.value.length ? (m(), _("ul", lT, [
          (m(!0), _(ie, null, ke(o.value, (N) => (m(), je(E, {
            key: N.id,
            node: N,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : $("", !0),
        n.value && c.value ? (m(), _("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: f
        }, h(g(b)("library", "Load more folders")), 9, cT)) : $("", !0)
      ]);
    };
  }
}, dT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, fT = { id: "library-sidebar-filters-heading" }, pT = ["aria-label"], hT = ["value"], vT = ["name", "value"], gT = ["value"], bT = ["value"], mT = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, yT = ["href"], _T = ["title"], wT = ["placeholder"], ST = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, CT = { value: "" }, kT = ["value"], TT = { class: "library-publisher-filter" }, ET = { for: "library-publisher-search" }, AT = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], xT = ["value"], OT = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, NT = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, LT = ["id", "aria-selected"], RT = ["onClick"], IT = { class: "library-publication-filter" }, PT = { for: "library-publication-search" }, $T = ["placeholder", "aria-expanded"], FT = ["value"], DT = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, MT = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, zT = ["onClick"], UT = { class: "library-year-filter" }, jT = { for: "library-year-search" }, BT = ["placeholder", "aria-expanded"], HT = ["value"], VT = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, GT = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, KT = ["onClick"], qT = { class: "library-creator-filter" }, WT = { for: "library-creator-search" }, YT = ["placeholder", "title", "aria-expanded"], XT = ["value"], ZT = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, JT = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, QT = ["onClick"], eE = { class: "library-tag-filter" }, tE = { for: "library-tag-search" }, nE = ["placeholder", "aria-expanded"], iE = ["value"], aE = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, rE = ["onClick"], oE = { value: "" }, sE = ["value"], lE = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, cE = ["href"], uE = { value: "" }, dE = ["value"], fE = { class: "library-folder-filter" }, pE = { for: "library-folder-search" }, hE = ["placeholder", "title", "aria-expanded"], vE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, gE = ["onClick"], bE = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, mE = ["href"], yE = { value: "" }, _E = ["value"], wE = { value: "" }, SE = ["value"], CE = { class: "library-subject-filter" }, kE = { for: "library-subject-search" }, TE = ["placeholder", "title", "aria-expanded"], EE = ["value"], AE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, xE = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, OE = ["onClick"], NE = { class: "library-classification-filter" }, LE = { for: "library-classification-search" }, RE = ["placeholder", "title", "aria-expanded"], IE = ["value"], PE = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, $E = ["onClick"], FE = { value: "" }, DE = { value: "1" }, ME = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, zE = ["href"], UE = {
  type: "submit",
  class: "button primary"
}, jE = ["href"], BE = ["href"], HE = ["lang", "dir"], VE = ["aria-label"], GE = ["href", "aria-label", "title", "onClick"], KE = ["title"], qE = ["href"], WE = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, YE = { class: "library-review-header" }, XE = { class: "library-muted library-catalogue-eyebrow" }, ZE = { id: "library-review-heading" }, JE = ["aria-label"], QE = ["href", "aria-current", "onClick"], e2 = ["aria-label"], t2 = ["name", "value"], n2 = {
  type: "submit",
  class: "button secondary"
}, i2 = ["aria-busy"], a2 = { key: 0 }, r2 = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, o2 = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, s2 = { class: "library-metadata-review-workbench-copy" }, l2 = { class: "library-muted library-catalogue-eyebrow" }, c2 = ["title"], u2 = {
  key: 0,
  class: "library-metadata-review-card"
}, d2 = {
  class: "library-bidi-human",
  dir: "auto"
}, f2 = { class: "library-muted" }, p2 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, h2 = { class: "library-metadata-review-fields" }, v2 = {
  class: "library-bidi-human",
  dir: "auto"
}, g2 = {
  class: "library-bidi-human",
  dir: "auto"
}, b2 = {
  class: "library-bidi-human",
  dir: "auto"
}, m2 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, y2 = {
  class: "library-bidi-human",
  dir: "auto"
}, _2 = {
  class: "library-bidi-human",
  dir: "auto"
}, w2 = ["action"], S2 = ["value"], C2 = ["value"], k2 = {
  type: "submit",
  class: "button secondary"
}, T2 = { class: "library-metadata-review-actions" }, E2 = ["href"], A2 = ["href"], x2 = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, O2 = ["href"], N2 = ["aria-label"], L2 = ["onClick"], R2 = {
  class: "library-bidi-human",
  dir: "auto"
}, I2 = {
  key: 0,
  class: "library-muted"
}, P2 = {
  class: "library-bidi-human",
  dir: "auto"
}, $2 = {
  key: 1,
  class: "library-scan-error"
}, F2 = {
  class: "library-bidi-human",
  dir: "auto"
}, D2 = ["onClick"], M2 = ["href", "onClick"], z2 = ["aria-label"], U2 = ["href"], j2 = {
  key: 1,
  class: "library-muted"
}, B2 = { key: 0 }, H2 = ["href"], V2 = {
  key: 3,
  class: "library-muted"
}, G2 = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, K2 = { class: "library-home-header" }, q2 = { class: "library-muted library-catalogue-eyebrow" }, W2 = { id: "library-home-heading" }, Y2 = ["aria-label"], X2 = ["aria-label"], Z2 = ["href", "aria-label", "onClick"], J2 = ["title"], Q2 = { class: "library-empty-actions" }, eA = ["href"], tA = ["href"], nA = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, iA = { id: "library-continue-heading" }, aA = { class: "library-muted" }, rA = ["href"], oA = {
  key: 0,
  class: "library-home-card-row"
}, sA = ["aria-label", "onClick"], lA = { class: "library-cover-frame" }, cA = ["src"], uA = { class: "library-cover-summary" }, dA = ["onClick"], fA = { dir: "auto" }, pA = {
  key: 0,
  class: "library-cover-creator"
}, hA = { dir: "auto" }, vA = ["href", "onClick"], gA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, bA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, mA = { id: "library-recent-heading" }, yA = { class: "library-muted" }, _A = ["href"], wA = {
  key: 0,
  class: "library-home-card-row"
}, SA = ["aria-label", "onClick"], CA = { class: "library-cover-frame" }, kA = ["src"], TA = { class: "library-cover-summary" }, EA = ["onClick"], AA = { dir: "auto" }, xA = {
  key: 0,
  class: "library-cover-creator"
}, OA = { dir: "auto" }, NA = ["href", "onClick"], LA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, RA = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, IA = { id: "library-home-shelves-heading" }, PA = { class: "library-muted" }, $A = ["href"], FA = ["aria-label"], DA = ["href"], MA = { dir: "auto" }, zA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, UA = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, jA = { id: "library-home-attention-heading" }, BA = { class: "library-muted" }, HA = ["href"], VA = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, GA = { class: "library-home-header" }, KA = { class: "library-muted library-catalogue-eyebrow" }, qA = { id: "library-shelves-landing-heading" }, WA = { class: "library-muted" }, YA = ["aria-label"], XA = ["aria-label"], ZA = ["href", "aria-label", "onClick"], JA = ["title"], QA = { class: "library-empty-actions" }, ex = ["href"], tx = ["href"], nx = ["aria-label"], ix = { class: "library-shelf-tree" }, ax = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, rx = { class: "library-muted" }, ox = { class: "library-empty-actions" }, sx = ["href"], lx = ["href"], cx = ["aria-busy"], ux = { class: "library-catalogue-header" }, dx = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, fx = ["aria-label"], px = { class: "library-mobile-filter-count" }, hx = ["aria-label"], vx = ["value"], gx = ["name", "value"], bx = { class: "library-mobile-filter-group" }, mx = { class: "library-quick-filter-search" }, yx = ["placeholder"], _x = { value: "" }, wx = ["value"], Sx = { class: "library-publisher-filter" }, Cx = { for: "library-mobile-publisher-search" }, kx = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], Tx = ["value"], Ex = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, Ax = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, xx = ["id", "aria-selected"], Ox = ["onClick"], Nx = { class: "library-publication-filter" }, Lx = { for: "library-mobile-publication-search" }, Rx = ["placeholder", "aria-expanded"], Ix = ["value"], Px = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, $x = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, Fx = ["onClick"], Dx = { class: "library-year-filter" }, Mx = { for: "library-mobile-year-search" }, zx = ["placeholder", "aria-expanded"], Ux = ["value"], jx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, Bx = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, Hx = ["onClick"], Vx = { class: "library-creator-filter" }, Gx = { for: "library-mobile-creator-search" }, Kx = ["placeholder", "title", "aria-expanded"], qx = ["value"], Wx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, Yx = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, Xx = ["onClick"], Zx = { value: "" }, Jx = ["value"], Qx = { class: "library-subject-filter" }, eO = { for: "library-mobile-subject-search" }, tO = ["placeholder", "title", "aria-expanded"], nO = ["value"], iO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, aO = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, rO = ["onClick"], oO = { class: "library-classification-filter" }, sO = { for: "library-mobile-classification-search" }, lO = ["placeholder", "title", "aria-expanded"], cO = ["value"], uO = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, dO = ["onClick"], fO = { class: "library-mobile-filter-group" }, pO = { value: "" }, hO = ["value"], vO = { class: "library-folder-filter" }, gO = { for: "library-mobile-folder-search" }, bO = ["placeholder", "title", "aria-expanded"], mO = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, yO = ["onClick"], _O = { class: "library-mobile-filter-group" }, wO = { value: "" }, SO = ["value"], CO = { value: "" }, kO = ["value"], TO = { value: "" }, EO = { value: "1" }, AO = { class: "library-mobile-filter-group" }, xO = { class: "library-tag-filter" }, OO = { for: "library-tag-search" }, NO = ["placeholder", "aria-expanded"], LO = ["value"], RO = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, IO = ["onClick"], PO = { value: "title" }, $O = { value: "recent" }, FO = { value: "publicationDate" }, DO = { value: "publication" }, MO = { value: "lastOpened" }, zO = { value: "format" }, UO = { value: "compact" }, jO = { value: "gallery" }, BO = { value: "list" }, HO = { value: "shelf" }, VO = { class: "library-mobile-filter-actions" }, GO = ["href"], KO = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, qO = ["aria-label"], WO = ["aria-label"], YO = ["name", "value"], XO = { "data-library-control": "sort" }, ZO = { value: "title" }, JO = { value: "recent" }, QO = { value: "publicationDate" }, e3 = { value: "publication" }, t3 = { value: "lastOpened" }, n3 = { value: "format" }, i3 = ["aria-label"], a3 = ["aria-pressed"], r3 = ["aria-pressed"], o3 = ["aria-pressed"], s3 = ["aria-pressed"], l3 = {
  id: "library-collections",
  class: "library-saved-collections"
}, c3 = ["title"], u3 = ["action", "title"], d3 = ["value"], f3 = ["value"], p3 = ["placeholder", "disabled"], h3 = ["disabled", "title"], v3 = ["aria-label"], g3 = ["href"], b3 = { class: "library-saved-collection-count" }, m3 = ["action"], y3 = ["value"], _3 = {
  type: "submit",
  class: "button tertiary"
}, w3 = ["aria-label"], S3 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, C3 = ["title"], k3 = { class: "library-workspace-panel-purpose" }, T3 = { class: "library-workspace-scope-badge" }, E3 = { "aria-live": "polite" }, A3 = ["action"], x3 = ["value"], O3 = ["placeholder"], N3 = ["title"], L3 = ["action"], R3 = ["value"], I3 = ["placeholder"], P3 = ["title"], $3 = ["action"], F3 = ["value"], D3 = ["name", "value"], M3 = ["title"], z3 = ["action"], U3 = ["value"], j3 = ["name", "value"], B3 = { name: "bulkEditField" }, H3 = { value: "publicationType" }, V3 = { value: "subtitle" }, G3 = { value: "creators" }, K3 = { value: "publication" }, q3 = { value: "publicationDate" }, W3 = { value: "language" }, Y3 = { value: "publisher" }, X3 = { value: "subjects" }, Z3 = { value: "classifications" }, J3 = ["placeholder"], Q3 = ["title"], eN = ["action"], tN = ["value"], nN = ["name", "value"], iN = ["title"], aN = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, rN = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, oN = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, sN = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, lN = { key: 0 }, cN = { key: 1 }, uN = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, dN = { class: "library-muted library-catalogue-eyebrow" }, fN = ["title"], pN = ["aria-label"], hN = { key: 0 }, vN = { key: 1 }, gN = { key: 2 }, bN = ["aria-label"], mN = { key: 0 }, yN = { key: 1 }, _N = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, wN = { class: "library-muted library-catalogue-eyebrow" }, SN = ["title"], CN = ["aria-label"], kN = ["href"], TN = {
  key: 0,
  class: "library-notice"
}, EN = { class: "library-publication-issue-label" }, AN = ["href"], xN = { class: "library-muted" }, ON = {
  key: 1,
  class: "library-publication-unknown-issues"
}, NN = ["title"], LN = ["href"], RN = { class: "library-catalogue-status-row" }, IN = { class: "library-muted library-filter-result-summary" }, PN = { key: 0 }, $N = ["href"], FN = ["aria-label"], DN = { class: "library-pagination-range" }, MN = { key: 0 }, zN = ["href"], UN = {
  key: 1,
  class: "library-muted"
}, jN = ["href"], BN = {
  key: 3,
  class: "library-muted"
}, HN = ["title"], VN = { class: "library-empty-actions" }, GN = ["href"], KN = { class: "library-muted" }, qN = ["title"], WN = { class: "library-empty-actions" }, YN = ["href"], XN = ["title"], ZN = ["aria-label"], JN = ["href", "aria-label", "onClick"], QN = ["title"], eL = {
  key: 1,
  class: "library-muted"
}, tL = { class: "library-empty-actions" }, nL = ["href"], iL = ["href"], aL = ["title"], rL = { class: "library-empty-actions" }, oL = ["href"], sL = {
  key: 5,
  class: "library-select-visible"
}, lL = ["checked"], cL = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, uL = { class: "library-item-selection" }, dL = ["checked", "aria-label", "onChange"], fL = { class: "library-catalogue-list-main" }, pL = ["onClick"], hL = {
  class: "library-bidi-human",
  dir: "auto"
}, vL = {
  key: 0,
  class: "library-muted"
}, gL = {
  class: "library-bidi-human",
  dir: "auto"
}, bL = { class: "library-catalogue-list-metadata" }, mL = { key: 0 }, yL = {
  class: "library-bidi-human",
  dir: "auto"
}, _L = { key: 1 }, wL = { key: 2 }, SL = ["dir"], CL = { key: 3 }, kL = {
  class: "library-bidi-human",
  dir: "auto"
}, TL = { class: "library-catalogue-list-actions" }, EL = ["href", "onClick"], AL = ["onClick"], xL = { class: "library-item-selection" }, OL = ["checked", "aria-label", "onChange"], NL = ["aria-labelledby", "aria-expanded", "onClick"], LL = ["id"], RL = { class: "library-cover-frame" }, IL = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, PL = ["src", "onLoad", "onError"], $L = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, FL = ["action", "onSubmit"], DL = ["value"], ML = ["value"], zL = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], UL = ["data-library-star-error"], jL = { class: "library-cover-summary" }, BL = { class: "library-cover-primary" }, HL = ["id"], VL = ["onClick"], GL = {
  class: "library-bidi-human",
  dir: "auto"
}, KL = {
  key: 0,
  class: "library-cover-creator"
}, qL = {
  class: "library-bidi-human",
  dir: "auto"
}, WL = {
  key: 1,
  class: "library-cover-badges"
}, YL = {
  key: 0,
  class: "library-cover-badge"
}, XL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, ZL = {
  key: 1,
  class: "library-cover-context"
}, JL = {
  class: "library-bidi-human",
  dir: "auto"
}, QL = { class: "library-cover-primary-actions" }, eR = ["href", "onClick"], tR = ["aria-label"], nR = { class: "library-pagination-range" }, iR = { key: 0 }, aR = ["href"], rR = {
  key: 1,
  class: "library-muted"
}, oR = ["href"], sR = {
  key: 3,
  class: "library-muted"
}, lR = { class: "library-sidebar-content" }, cR = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, uR = ["role"], dR = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, fR = { class: "library-sidebar-publication-header" }, pR = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, hR = ["src"], vR = { class: "library-sidebar-publication-summary" }, gR = { class: "library-muted library-catalogue-eyebrow" }, bR = {
  class: "library-bidi-human",
  dir: "auto"
}, mR = { key: 0 }, yR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, _R = { class: "library-detail-drawer-actions" }, wR = ["href"], SR = ["aria-label"], CR = ["aria-current", "onClick"], kR = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, TR = { id: "library-sidebar-overview-heading" }, ER = {
  key: 0,
  class: "library-sidebar-description"
}, AR = {
  class: "library-bidi-human",
  dir: "auto"
}, xR = { class: "library-detail-drawer-facts" }, OR = { key: 0 }, NR = { key: 1 }, LR = { key: 2 }, RR = { key: 3 }, IR = { key: 4 }, PR = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, $R = { id: "library-sidebar-metadata-heading" }, FR = ["placeholder"], DR = ["onUpdate:modelValue", "aria-label", "placeholder"], MR = ["onUpdate:modelValue", "aria-label"], zR = ["onClick"], UR = { class: "library-muted" }, jR = {
  key: 0,
  role: "alert"
}, BR = {
  key: 1,
  role: "status"
}, HR = ["disabled"], VR = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, GR = { id: "library-sidebar-suggestions-heading" }, KR = { class: "library-muted" }, qR = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, WR = { id: "library-sidebar-activity-heading" }, YR = { class: "library-detail-drawer-facts" }, XR = { key: 0 }, ZR = { key: 1 }, JR = { key: 2 }, QR = { class: "library-detail-drawer-file" }, e4 = ["href"], t4 = { dir: "ltr" }, n4 = {
  key: 1,
  dir: "ltr"
}, i4 = ["aria-label"], a4 = ["disabled"], r4 = ["disabled"], o4 = 20, s4 = "/apps/library", l4 = 2147483647, c4 = {
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
        const L = [...new Set([...d.keys()].filter((Ee) => Ee === s || Ee.startsWith(`${s}[`)))], X = L.reduce((Ee, Re) => Ee + d.getAll(Re).length, 0);
        if (X > 1 || L.some((Ee) => Ee !== s)) {
          for (const Ee of L) d.delete(Ee);
          continue;
        }
        s !== "status" && X === 1 && !r(s, d.get(s)) && d.delete(s);
      }
      return d;
    }
    function c(p) {
      return Object.keys(a).some((d) => p.getAll(d).length === 1 && r(d, p.get(d)));
    }
    function u(p) {
      return Object.fromEntries(Object.entries(p || {}).filter(([d, s]) => d === "status" || !Object.prototype.hasOwnProperty.call(a, d) || r(d, s)));
    }
    const v = /* @__PURE__ */ It({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), f = /* @__PURE__ */ It((v.items || []).map((p) => ({ ...p }))), y = H(() => f), C = H(() => v.shelves || []), E = H(() => v.formats || []), N = H(() => v.publicationTypes?.length ? v.publicationTypes : n), A = H(() => v.publications || []), O = H(() => v.publicationIssueContext || null), D = H(() => v.scanStatuses || []), M = H(() => v.workflowStatuses || []), z = H(() => v.cataloguePagination || {
      page: 1,
      limit: 100,
      total: y.value.length,
      visible: y.value.length,
      from: y.value.length > 0 ? 1 : 0,
      to: y.value.length,
      previousUrl: "",
      nextUrl: ""
    }), k = /* @__PURE__ */ It({
      q: v.activeFilters?.q || "",
      view: v.activeFilters?.view || "compact",
      type: v.activeFilters?.type || "",
      publisher: v.activeFilters?.publisher || "",
      publication: v.activeFilters?.publication || "",
      year: v.activeFilters?.year || "",
      creator: v.activeFilters?.creator || "",
      format: v.activeFilters?.format || "",
      tag: v.activeFilters?.tag || "",
      shelf: v.activeFilters?.shelf || "",
      folder: v.activeFilters?.folder || "",
      status: v.activeFilters?.status || "",
      workflowStatus: v.activeFilters?.workflowStatus || "",
      subject: v.activeFilters?.subject || "",
      classification: v.activeFilters?.classification || "",
      scannerConflicts: v.activeFilters?.scannerConflicts || "",
      starred: v.activeFilters?.starred || "",
      needsMetadata: v.activeFilters?.needsMetadata || "",
      coverReview: v.activeFilters?.coverReview || "",
      noCreator: v.activeFilters?.noCreator || "",
      noPublication: v.activeFilters?.noPublication || "",
      noDate: v.activeFilters?.noDate || "",
      titleFromFilename: v.activeFilters?.titleFromFilename || "",
      noDescription: v.activeFilters?.noDescription || "",
      unsupportedContainer: v.activeFilters?.unsupportedContainer || "",
      weakMetadata: v.activeFilters?.weakMetadata || "",
      unreviewedImports: v.activeFilters?.unreviewedImports || "",
      sort: v.activeFilters?.sort || "title"
    });
    for (const p of Object.keys(a))
      p !== "status" && (r(p, k[p]) || (k[p] = ""));
    const oe = /* @__PURE__ */ Te(k.publication), ue = /* @__PURE__ */ Te(k.q), Z = /* @__PURE__ */ Te(!1), pe = /* @__PURE__ */ Te(null), Y = H(() => {
      const p = oe.value.trim().toLocaleLowerCase();
      return (p !== "" && pe.value !== null ? pe.value : A.value).filter((s) => p === "" || s.toLocaleLowerCase().includes(p)).slice(0, o4);
    });
    We(() => k.publication, (p) => {
      oe.value = p || "";
    }), We(() => k.q, (p) => {
      ue.value = p || "";
    });
    let le = null, _e = null, ee = 0;
    We(oe, (p) => {
      window.clearTimeout(le), _e?.abort(), _e = null, pe.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++ee;
      le = window.setTimeout(() => {
        Ug(d, s);
      }, 200);
    });
    const J = /* @__PURE__ */ Te(k.publisher), F = /* @__PURE__ */ Te(!1), U = /* @__PURE__ */ Te(null), W = H(() => U.value || []);
    We(() => k.publisher, (p) => {
      J.value = p || "";
    });
    let ce = null, ae = null, me = 0;
    We(J, (p) => {
      window.clearTimeout(ce), ae?.abort(), ae = null, U.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++me;
      ce = window.setTimeout(() => {
        Pg(d, s);
      }, 200);
    });
    const de = /* @__PURE__ */ Te(k.creator), we = /* @__PURE__ */ Te(!1), Ce = /* @__PURE__ */ Te(null), Ge = H(() => Ce.value || []);
    We(() => k.creator, (p) => {
      de.value = p || "";
    });
    let Le = null, ct = null, ht = 0;
    We(de, (p) => {
      window.clearTimeout(Le), ct?.abort(), ct = null, Ce.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++ht;
      Le = window.setTimeout(() => {
        Ig(d, s);
      }, 200);
    });
    const tt = /* @__PURE__ */ Te(k.folder), ut = /* @__PURE__ */ Te(!1), rt = /* @__PURE__ */ Te(null), Mt = H(() => rt.value || []);
    We(() => k.folder, (p) => {
      tt.value = p || "";
    });
    let B = null, w = null, T = 0;
    We(tt, (p) => {
      window.clearTimeout(B), w?.abort(), w = null, rt.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++T;
      B = window.setTimeout(() => {
        Mg(d, s);
      }, 200);
    });
    const x = /* @__PURE__ */ Te(k.subject), R = /* @__PURE__ */ Te(!1), I = /* @__PURE__ */ Te(null), j = H(() => I.value || []);
    We(() => k.subject, (p) => {
      x.value = p || "";
    });
    let K = null, G = null, Q = 0;
    We(x, (p) => {
      window.clearTimeout(K), G?.abort(), G = null, I.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++Q;
      K = window.setTimeout(() => {
        $g(d, s);
      }, 200);
    });
    const V = /* @__PURE__ */ Te(k.classification), he = /* @__PURE__ */ Te(!1), se = /* @__PURE__ */ Te(null), ve = H(() => se.value || []);
    We(() => k.classification, (p) => {
      V.value = p || "";
    });
    let xe = null, $e = null, ze = 0;
    We(V, (p) => {
      window.clearTimeout(xe), $e?.abort(), $e = null, se.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++ze;
      xe = window.setTimeout(() => {
        Fg(d, s);
      }, 200);
    });
    const Fe = /* @__PURE__ */ Te(k.tag), He = /* @__PURE__ */ Te(!1), ot = /* @__PURE__ */ Te(null), vt = H(() => ot.value || []);
    We(() => k.tag, (p) => {
      Fe.value = p || "";
    });
    let Et = null, zt = null, En = 0;
    We(Fe, (p) => {
      window.clearTimeout(Et), zt?.abort(), zt = null, ot.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++En;
      Et = window.setTimeout(() => {
        Dg(d, s);
      }, 200);
    });
    const et = /* @__PURE__ */ Te(k.year), dt = /* @__PURE__ */ Te(!1), Dn = /* @__PURE__ */ Te(null), gn = H(() => Dn.value || []);
    We(() => k.year, (p) => {
      et.value = p || "";
    });
    let ia = null, ki = null, Mn = 0;
    We(et, (p) => {
      window.clearTimeout(ia), ki?.abort(), ki = null, Dn.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++Mn;
      ia = window.setTimeout(() => {
        zg(d, s);
      }, 200);
    });
    const zn = Object.fromEntries(Object.keys(k).map((p) => [p, p === "sort" ? "title" : p === "view" ? "compact" : ""])), ur = window.location.pathname.indexOf(s4), Qn = ur >= 0 ? window.location.pathname.slice(0, ur) : "", Ti = {
      catalogue: `${Qn}/apps/library/`,
      review: `${Qn}/apps/library/?scannerConflicts=1`,
      settings: `${Qn}/settings/user/library`
    };
    function Ei(p, d) {
      if (typeof p != "string" || p === "") return d;
      try {
        const s = Qn ? `${Qn}/` : "/";
        let L = p;
        for (let X = 0; X < 5; X += 1) {
          if (!L.startsWith("/") || L.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(L)) return d;
          const Ee = new URL(L, window.location.origin);
          if (Ee.origin !== window.location.origin || !Ee.pathname.startsWith(s)) return d;
          const Re = L.split(/[?#]/, 1)[0];
          for (const cn of Re.split("/")) {
            let Mi = cn;
            for (let Ga = 0; Ga < 5; Ga += 1) {
              const Hn = decodeURIComponent(Mi);
              if (/[\\/\u0000-\u001f\u007f]/.test(Hn) || Hn === "." || Hn === "..") return d;
              if (Hn === Mi) break;
              if (Mi = Hn, Ga === 4) return d;
            }
          }
          const Xe = decodeURI(L);
          if (Xe === L) return p;
          L = Xe;
        }
        return d;
      } catch {
        return d;
      }
    }
    const Ai = H(() => Ei(v.settingsUrl, Ti.settings)), bt = H(() => Ei(v.catalogueRootUrl, Ti.catalogue)), Ua = H(() => Ei(v.homeUrl, `${Ti.catalogue}?home=1`)), on = H(() => Ei(v.shelvesUrl, `${Ti.catalogue}?shelves=1`)), xi = H(() => Ei(v.reviewUrl || v.scannerConflictReviewUrl, Ti.review)), aa = H(() => Object.entries(a).some(([p, d]) => k[p] === d)), ja = H(() => i.reduce((p, d) => p + Number(gc.value[d.countKey] || 0), 0)), ra = H(() => v.surface === "home"), Oi = H(() => v.surface === "shelves"), dr = H(() => !ra.value && !Oi.value && !aa.value && !k.starred && k.sort !== "lastOpened" && !k.shelf), Do = H(() => [
      { key: "home", name: b("library", "Home"), href: Ua.value, active: ra.value },
      { key: "all", name: b("library", "All publications"), href: bt.value, active: dr.value },
      { key: "starred", name: b("library", "Starred"), href: `${bt.value}?starred=1`, active: k.starred === "1" },
      { key: "continue", name: b("library", "Continue reading"), href: `${bt.value}?sort=lastOpened`, active: k.sort === "lastOpened" },
      { key: "shelves", name: b("library", "Shelves"), href: on.value, active: Oi.value || !!k.shelf },
      { key: "collections", name: b("library", "Collections"), href: `${bt.value}#library-collections`, active: !1 }
    ]), At = H(() => v.requestToken || "");
    function ei(p, d) {
      const s = String(p?.recordOpenUrl || "");
      if (!s || !At.value) return;
      const L = new URLSearchParams({ requesttoken: At.value });
      try {
        if (navigator.sendBeacon) {
          const X = new Blob([L.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(s, X);
          return;
        }
      } catch {
      }
      fetch(s, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: At.value },
        body: L,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const Ni = H(() => v.catalogueEndpointUrl || "/apps/library/catalogue"), Jl = H(() => v.shelfChildrenUrl || "/apps/library/shelves/children"), Ql = H(() => v.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), pt = H(() => v.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Li = H(() => v.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), ec = H(() => v.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Mo = H(() => v.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), fr = H(() => v.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), zo = H(() => v.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Uo = H(() => v.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), tc = H(() => v.itemSidebarUrlTemplate || `${Qn}/apps/library/items/__ITEM_ID__/sidebar`), nc = H(() => v.batchTagUrl || "/apps/library/bulk/tags"), ic = H(() => v.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), ac = H(() => v.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Un = H(() => v.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), jo = H(() => v.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), oa = H(() => v.scannerConflictReviewUrl || "?scannerConflicts=1");
    v.importHealthSummary, v.importHealthSummary && Object.keys(v.importHealthSummary).length > 0;
    const An = H(() => v.discoveryPage === "publication"), pr = H(() => v.discoveryPage === "year"), Ri = H(() => v.discoveryPage === "creator"), Ba = H(() => An.value || pr.value || Ri.value), Bo = H(() => v.discoveryTitle || k.publication || k.year || k.creator || ""), Ho = H(() => Ba.value ? Bo.value : b("library", "Library")), hr = H(() => Ri.value ? b("library", "Creator") : pr.value ? b("library", "Publication year") : b("library", "Publication / series")), sa = H(() => Number(v.rootCount || 0)), vr = H(() => Number(v.enabledRootCount || 0)), Ii = H(() => sa.value === 0), jn = H(() => sa.value > 0 && vr.value === 0), Pi = H(() => q.value.length > 0), mt = /* @__PURE__ */ Te(!1), Vo = /* @__PURE__ */ Te(null), la = /* @__PURE__ */ Te(null), Go = {
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
    }, Ko = {
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
    }, qo = {
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
    }, gr = H(() => {
      if (typeof window > "u") return "";
      const p = new URLSearchParams(window.location.search);
      if (p.get("batchMetadataApplyResult") !== "1") return "";
      const d = p.get("batchMetadataField") || "field", s = p.get("batchMetadataApplied") || "0", L = p.get("batchMetadataUnchanged") || "0", X = p.get("batchMetadataSkipped") || "0";
      return b("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: d, unchanged: L, skipped: X });
    }), br = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? b("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Wo = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? b("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), mr = H(() => v.savedCollections || []), rc = H(() => v.savedCollectionSaveUrl || "/apps/library/collections"), oc = H(() => v.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), yr = ["compact", "gallery", "list", "shelf"], xt = H(() => yr.includes(k.view) ? k.view : "compact"), _r = H(() => ({
      "library-cover-gallery--compact": xt.value === "compact",
      "library-cover-gallery--gallery": xt.value === "gallery",
      "library-cover-gallery--shelf": xt.value === "shelf"
    }));
    function te(p) {
      const d = String(p || "").trim();
      if (d.length <= 32) return d;
      const s = d.split("/").filter(Boolean);
      return s.length > 0 ? `…/${s.at(-1)}` : d;
    }
    function S(p, d) {
      const s = String(d || "").trim();
      if (s === "" || Ko[p] === s) return "";
      if (p === "format") return s.toUpperCase();
      if (p === "folder") return te(s);
      const L = qo[p]?.[s];
      return L ? b("library", L) : s;
    }
    function P(p, d) {
      const s = String(k[p] || "").trim(), L = S(p, s), X = b("library", d);
      return {
        key: p,
        label: X,
        value: s,
        displayValue: L,
        title: L ? `${X}: ${s}` : X
      };
    }
    const q = H(() => Object.entries(Go).map(([p, d]) => P(p, d)).filter((p) => p.value !== "" && !(p.key === "sort" && p.value === "title") && !(p.key === "view" && p.value === "compact"))), re = H(() => q.value.filter((p) => !["sort", "view"].includes(p.key))), ge = H(() => q.value.length), Ne = Object.freeze([
      { key: "content", label: "Content", keys: ["q", "type", "publisher", "publication", "year", "creator", "format", "subject", "classification", "tag"] },
      { key: "location", label: "Location", keys: ["shelf", "folder"] },
      { key: "review", label: "Review", keys: ["scannerConflicts", "needsMetadata", "coverReview", "noCreator", "noPublication", "noDate", "titleFromFilename", "noDescription", "unsupportedContainer", "weakMetadata", "unreviewedImports", "status"] },
      { key: "personal", label: "Personal / display", keys: ["starred", "workflowStatus"] }
    ]);
    function nt(p) {
      const d = new Set(p.keys);
      return re.value.filter((s) => d.has(s.key));
    }
    const it = H(() => Ne.map((p) => ({ ...p, chips: nt(p) }))), Ot = H(() => {
      const p = new URLSearchParams();
      for (const s of re.value) p.set(s.key, s.value);
      const d = p.toString();
      return `${bt.value}${d ? `?${d}` : ""}`;
    }), yt = H(() => re.value[0] || null), wr = H(() => ue.value.trim() !== String(k.q || "").trim()), Nt = H(() => String(k.q || "").trim() !== "" || wr.value);
    function sn(p) {
      return ({
        q: ue,
        publisher: J,
        publication: oe,
        creator: de,
        subject: x,
        year: et,
        folder: tt,
        classification: V,
        tag: Fe
      }[p]?.value ?? "").trim() !== String(k[p] || "").trim();
    }
    function xn(p) {
      return sn(p) ? p === "q" ? b("library", "Not applied yet — press Enter or Apply.") : b("library", "Press Enter or Apply to use this value.") : "";
    }
    function ti(p) {
      return { "library-filter-apply--pending": sn(p) };
    }
    const vg = H(() => ge.value > 0 ? b("library", "Filters ({count})", { count: ge.value }) : b("library", "Filters")), gg = H(() => ge.value > 0 ? b("library", "Open filters panel; {count} active filters", { count: ge.value }) : b("library", "Open filters panel")), bg = H(() => dn("library", "Show %n item", "Show %n items", Number(z.value.total || 0)));
    function mg(p) {
      mt.value = p.currentTarget?.open === !0, mt.value && tn(() => {
        Vo.value?.focus?.();
      });
    }
    const yg = /* @__PURE__ */ new Set([
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
    ]), md = H(() => Object.entries(u(k)).filter(([p, d]) => !yg.has(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), _g = H(() => Object.entries(k).filter(([p, d]) => !["q", "sort", "starred"].includes(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), Yo = H(() => Object.entries(u(k)).filter(([p, d]) => String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), wg = H(() => Yo.value.filter(({ key: p, value: d }) => p !== "q" && !(p === "sort" && d === "title"))), sc = /* @__PURE__ */ It({}), Xo = H(() => v.homeRows || { continueReading: [], recentlyAdded: [] }), yd = H(() => v.homeShelves || []), _d = H(() => v.shelfTree || []), lc = H(() => v.needsAttention || { count: 0, url: `${bt.value}?needsMetadata=1` }), On = /* @__PURE__ */ Te([]), Zo = H(() => new Set(On.value));
    function wd(p, d) {
      const s = new Set(On.value);
      d ? s.add(Number(p)) : s.delete(Number(p)), On.value = [...s];
    }
    function Sg(p) {
      On.value = p.currentTarget.checked ? y.value.map((d) => Number(d.id)) : [];
    }
    function Cg() {
      const p = new Set(y.value.map((d) => Number(d.id)));
      On.value = On.value.filter((d) => p.has(d));
    }
    function kg(p) {
      const d = p.target;
      if (d instanceof HTMLFormElement) {
        d.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of On.value) {
          const L = document.createElement("input");
          L.type = "hidden", L.name = "itemIds[]", L.value = String(s), L.dataset.librarySelectedId = "1", d.appendChild(L);
        }
      }
    }
    const Oe = /* @__PURE__ */ Te(null), ca = /* @__PURE__ */ Te(null), Xt = /* @__PURE__ */ It({ loading: !1, error: "", missing: !1 }), ua = /* @__PURE__ */ Te("overview"), Nn = /* @__PURE__ */ It({ saving: !1, saved: !1, error: "" }), Ut = /* @__PURE__ */ It({ title: "", publicationDate: "", identifiers: [] }), Sd = /* @__PURE__ */ Te(null), da = /* @__PURE__ */ Te(null), fa = /* @__PURE__ */ Te(!1);
    let cc = null, ni = null, Jo = null, uc = !1, Sr = null, dc = 0;
    const $i = H(() => ca.value !== null), Cr = H(() => Oe.value ? y.value.findIndex((p) => p.id === Oe.value.id) : -1), Qo = H(() => Cr.value > 0 ? y.value[Cr.value - 1] : null), es = H(() => Cr.value >= 0 && Cr.value < y.value.length - 1 ? y.value[Cr.value + 1] : null), Tg = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Eg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function ts(p) {
      const d = String(p ?? "").trim(), s = d.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return s ? s[1] : d;
    }
    function Cd(p) {
      return { ...p, publicationDate: ts(p?.publicationDate) };
    }
    function kd(p) {
      Ut.title = String(p?.title || ""), Ut.publicationDate = ts(p?.publicationDate), Ut.identifiers = Array.isArray(p?.identifiers) ? p.identifiers.map((d) => ({ scheme: String(d?.scheme || ""), displayValue: String(d?.displayValue || d?.value || "") })) : [], Object.assign(Nn, { saving: !1, saved: !1, error: "" });
    }
    function Ag() {
      Ut.identifiers.push({ scheme: "", displayValue: "" });
    }
    function xg(p) {
      Ut.identifiers.splice(p, 1);
    }
    async function Og() {
      const p = Oe.value;
      if (!p?.updateUrl || Nn.saving) return;
      Object.assign(Nn, { saving: !0, saved: !1, error: "" });
      const d = new FormData();
      d.set("requesttoken", At.value), d.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const L = p[s];
        d.set(s, Array.isArray(L) ? L.join(", ") : String(L ?? ""));
      }
      d.set("title", Ut.title), d.set("publicationDate", ts(Ut.publicationDate)), Ut.identifiers.forEach((s, L) => {
        d.set(`identifiers[${L}][scheme]`, s.scheme), d.set(`identifiers[${L}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(p.updateUrl, { method: "POST", body: d, credentials: "same-origin", headers: { Accept: "application/json" } }), L = await s.json().catch(() => ({}));
        if (!s.ok || L.saved !== !0) throw new Error(L.error || b("library", "Metadata could not be saved."));
        p.title = Ut.title.trim(), p.publicationDate = ts(Ut.publicationDate), p.identifiers = Ut.identifiers.filter((Ee) => Ee.scheme.trim() || Ee.displayValue.trim()).map((Ee) => ({ ...Ee }));
        const X = y.value.find((Ee) => Number(Ee.id) === Number(p.id));
        X && (X.title = p.title, X.publicationDate = p.publicationDate), Nn.saved = !0;
      } catch (s) {
        Nn.error = s?.message || b("library", "Metadata could not be saved.");
      } finally {
        Nn.saving = !1;
      }
    }
    const Fi = H(() => {
      const p = r("scannerConflicts", k.scannerConflicts) || r("weakMetadata", k.weakMetadata), d = p ? y.value.find((s) => ns(s).length > 0) : null;
      return {
        enabled: p,
        item: d,
        fields: d ? ns(d) : [],
        reviewNextUrl: oa.value,
        skipUrl: z.value.nextUrl || oa.value
      };
    }), Ng = H(() => i.map((p) => ({
      ...p,
      label: b("library", p.label),
      href: `${bt.value}?${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`,
      active: String(k[p.key] || "") === p.value
    })));
    function fc(p) {
      return Array.isArray(p) ? JSON.stringify(p) : p == null ? "" : String(p);
    }
    function ns(p) {
      const d = p.fieldValues || {}, s = p.fieldSources || {};
      return Tg.filter((L) => Object.prototype.hasOwnProperty.call(d, L)).map((L) => {
        const X = fc(p[L]), Ee = fc(d[L]), Re = fc(s[L] || p.metadataSource || "scanner"), Xe = Re.includes("filename") || Re.includes("path") ? Ee : "", cn = Re.includes("sidecar") ? Ee : "";
        return { field: L, currentValue: X, scannerCandidate: Ee, pathTemplateCandidate: Xe, sidecarValue: cn, sourceProvenance: Re, differs: X !== Ee };
      }).filter((L) => L.differs);
    }
    let pa = 0, ha = null;
    function Td() {
      const p = new URLSearchParams(window.location.search).getAll("item");
      if (p.length !== 1 || !/^[1-9][0-9]*$/.test(p[0])) return null;
      const d = Number(p[0]);
      return Number.isSafeInteger(d) && d <= l4 ? d : null;
    }
    function Ed(p, d = "push") {
      const s = new URL(window.location.href);
      s.searchParams.delete("item"), p !== null && s.searchParams.set("item", String(p)), history[`${d}State`]({}, "", `${s.pathname}${s.search}${s.hash}`);
    }
    async function kr(p, { historyMode: d = "push", seed: s = null } = {}) {
      ha?.abort();
      const L = ++pa, X = new AbortController();
      ha = X, ca.value = p, ua.value = "overview", Oe.value = s && Number(s.id) === p ? Cd(s) : null, Oe.value && kd(Oe.value), Object.assign(Xt, { loading: !0, error: "", missing: !1 }), d !== "none" && Ed(p, d);
      try {
        const Ee = tc.value.replace("__ITEM_ID__", encodeURIComponent(String(p))), Re = await fetch(Ee, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: X.signal });
        if (L !== pa) return;
        if (!Re.ok) {
          Oe.value = null, Xt.missing = Re.status === 404, Xt.error = Re.status === 404 ? b("library", "This publication is unavailable or you do not have access.") : b("library", "Could not load publication details. Try again.");
          return;
        }
        const Xe = await Re.json();
        if (L !== pa) return;
        if (typeof Xe?.item?.id != "number" || !Number.isSafeInteger(Xe.item.id) || Xe.item.id !== p) {
          Oe.value = null, Xt.missing = !1, Xt.error = b("library", "Could not load publication details. Try again.");
          return;
        }
        Oe.value = Cd(Xe.item), kd(Oe.value), await tn();
      } catch (Ee) {
        L === pa && Ee?.name !== "AbortError" && (Oe.value = null, Xt.missing = !1, Xt.error = b("library", "Could not load publication details. Try again."));
      } finally {
        L === pa && (Xt.loading = !1, ha = null);
      }
    }
    function Bn(p, d) {
      pc(), cc = d?.currentTarget instanceof HTMLElement ? d.currentTarget : null, kr(Number(p.id), { seed: p });
    }
    function is({ historyMode: p = "push", restoreFocus: d = !0 } = {}) {
      Jo = d ? cc : null, cc = null, ha?.abort(), ha = null, pa += 1, ca.value = null, Oe.value = null, ua.value = "overview", Object.assign(Xt, { loading: !1, error: "", missing: !1 }), p !== "none" && Ed(null, p);
    }
    function Ad() {
      fa.value ? (da.value?.$refs?.sidebar || da.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Sd.value?.focus();
    }
    function Lg() {
      const p = Jo;
      if (Jo = null, pc(), uc || !p?.isConnected) return;
      const d = dc;
      Sr = window.requestAnimationFrame(() => {
        Sr = null, !(d !== dc || uc || $i.value || !p.isConnected) && p.focus();
      });
    }
    function pc() {
      dc += 1, Sr !== null && (window.cancelAnimationFrame(Sr), Sr = null);
    }
    function Tr(p = ni) {
      fa.value = !!p?.matches, $i.value && tn(Ad);
    }
    function as(p) {
      p && kr(Number(p.id), { seed: p });
    }
    const Er = /* @__PURE__ */ Te(null);
    let Zt = 0, Ha = null, rs = null, Ar = null;
    const Lt = /* @__PURE__ */ It({ loading: !1, error: "", completed: !1 });
    function Rg(p) {
      const d = o(new FormData(p));
      d.delete("publicationSearch"), d.delete("creatorSearch"), d.delete("subjectSearch"), d.delete("publisherSearch"), d.delete("classificationSearch"), d.delete("tagSearch"), d.delete("folderSearch"), d.delete("yearSearch");
      for (const s of Array.from(d.keys()))
        String(d.get(s) || "").trim() === "" && d.delete(s);
      return d.delete("page"), d.get("view") === "compact" && d.delete("view"), d.get("sort") === "title" && d.delete("sort"), d;
    }
    async function va(p, d, s) {
      const L = new URLSearchParams();
      for (const [Re, Xe] of Object.entries(k)) {
        const cn = String(Xe || "").trim();
        Re !== p && cn !== "" && !(Re === "sort" && cn === "title") && !(Re === "view" && cn === "compact") && L.set(Re, cn);
      }
      L.set(`${p}Search`, d);
      const X = new AbortController();
      p === "creator" ? ct = X : p === "publisher" ? ae = X : p === "subject" ? G = X : p === "classification" ? $e = X : p === "tag" ? zt = X : p === "folder" ? w = X : ki = X;
      const Ee = p === "creator" ? pt.value : p === "publisher" ? Li.value : p === "subject" ? ec.value : p === "classification" ? Mo.value : p === "tag" ? fr.value : p === "folder" ? zo.value : Uo.value;
      try {
        const Re = await fetch(`${Ee}?${L}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: X.signal });
        if (!Re.ok) throw new Error(`${p} suggestions request failed: ${Re.status}`);
        const Xe = await Re.json(), cn = p === "creator" ? ht : p === "publisher" ? me : p === "subject" ? Q : p === "classification" ? ze : p === "tag" ? En : p === "folder" ? T : Mn, Mi = p === "creator" ? de.value : p === "publisher" ? J.value : p === "subject" ? x.value : p === "classification" ? V.value : p === "tag" ? Fe.value : p === "folder" ? tt.value : et.value;
        s === cn && Mi.trim() === d && (p === "creator" ? Ce.value = Array.isArray(Xe.creators) ? Xe.creators : [] : p === "publisher" ? U.value = Array.isArray(Xe.publishers) ? Xe.publishers : [] : p === "subject" ? I.value = Array.isArray(Xe.subjects) ? Xe.subjects : [] : p === "classification" ? se.value = Array.isArray(Xe.classifications) ? Xe.classifications : [] : p === "tag" ? ot.value = Array.isArray(Xe.tags) ? Xe.tags : [] : p === "folder" ? rt.value = Array.isArray(Xe.folders) ? Xe.folders : [] : Dn.value = Array.isArray(Xe.years) ? Xe.years : []);
      } catch (Re) {
        Re?.name !== "AbortError" && (p === "creator" && s === ht && (Ce.value = null), p === "publisher" && s === me && (U.value = null), p === "subject" && s === Q && (I.value = null), p === "classification" && s === ze && (se.value = null), p === "tag" && s === En && (ot.value = null), p === "folder" && s === T && (rt.value = null), p === "year" && s === Mn && (Dn.value = null));
      }
    }
    function Ig(p, d) {
      return va("creator", p, d);
    }
    function Pg(p, d) {
      return va("publisher", p, d);
    }
    function $g(p, d) {
      return va("subject", p, d);
    }
    function Fg(p, d) {
      return va("classification", p, d);
    }
    function Dg(p, d) {
      return va("tag", p, d);
    }
    function Mg(p, d) {
      return va("folder", p, d);
    }
    function zg(p, d) {
      return va("year", p, d);
    }
    async function Ug(p, d) {
      const s = new URLSearchParams();
      for (const [X, Ee] of Object.entries(k)) {
        const Re = String(Ee || "").trim();
        X !== "publication" && Re !== "" && !(X === "sort" && Re === "title") && !(X === "view" && Re === "compact") && s.set(X, Re);
      }
      s.set("publicationSearch", p);
      const L = new AbortController();
      _e = L;
      try {
        const X = await fetch(`${Ql.value}?${s}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: L.signal
        });
        if (!X.ok) throw new Error(`Publication suggestions request failed: ${X.status}`);
        const Ee = await X.json();
        d === ee && oe.value.trim() === p && (pe.value = Array.isArray(Ee.publications) ? Ee.publications : []);
      } catch (X) {
        X?.name !== "AbortError" && d === ee && (pe.value = null);
      } finally {
        d === ee && (_e = null);
      }
    }
    function jg(p) {
      f.splice(0, f.length, ...(p.items || []).map((s) => ({ ...s }))), Cg();
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
        !d.has(s) && Object.prototype.hasOwnProperty.call(p, s) && (v[s] = p[s]);
      Object.assign(k, zn, p.activeFilters || {});
    }
    async function Bg() {
      if (v.surface !== "index") return;
      const p = Zt, d = JSON.stringify({ ...k }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [X, Ee] of Object.entries(k)) {
        const Re = String(Ee || "").trim();
        Re !== "" && !(X === "sort" && Re === "title") && !(X === "view" && Re === "compact") && s.set(X, Re);
      }
      const L = new AbortController();
      rs = L;
      try {
        const X = await fetch(`${Ni.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: L.signal
        });
        if (!X.ok) return;
        const Ee = await X.json();
        if (p !== Zt || d !== JSON.stringify({ ...k })) return;
        for (const Re of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Ee, Re) && (v[Re] = Ee[Re]);
      } catch (X) {
        if (X?.name !== "AbortError") return;
      } finally {
        rs === L && (rs = null);
      }
    }
    async function jt(p, d = null) {
      const s = p?.currentTarget?.tagName === "FORM" ? p.currentTarget : p?.currentTarget?.form;
      if (!s && !d?.params) return;
      const L = o(d?.params ?? Rg(s));
      if (ra.value || Oi.value) {
        xr(L, bt.value);
        return;
      }
      const X = L.toString(), Ee = X ? `?${X}` : "", Re = d?.generation ?? ++Zt, Xe = c(L), cn = d?.historyMode ?? (Xe ? "push" : "replace"), Mi = d?.historyTraversal === !0;
      if (Re !== Zt) return;
      d === null && Ha?.abort();
      const Ga = new AbortController();
      Ha = Ga, Lt.loading = !0, Lt.error = "", Lt.completed = !1;
      try {
        const Hn = await fetch(Ni.value + Ee, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ga.signal
        });
        if (Re !== Zt) return;
        if (!Hn.ok) {
          Mi ? xr(L) : Xe ? Lt.error = b("library", "Could not load this review queue. Try again.") : xr(L);
          return;
        }
        const sb = await Hn.json();
        if (Re !== Zt) return;
        jg(sb), Lt.completed = !0, cn !== "none" && (history[cn === "push" ? "pushState" : "replaceState"]({}, "", X ? `?${X}` : window.location.pathname), $i.value && is({ historyMode: "none" }));
      } catch (Hn) {
        Re === Zt && Hn?.name !== "AbortError" && (Mi ? xr(L) : Xe ? Lt.error = b("library", "Could not load this review queue. Try again.") : xr(L));
      } finally {
        Re === Zt && (Ha = null, Lt.loading = !1);
      }
    }
    function xd() {
      Ha?.abort();
      const p = new URLSearchParams(window.location.search), d = Td();
      p.has("item") && d === null && (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)), d === null ? is({ historyMode: "none" }) : kr(d, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === d) || null }), p.delete("item"), jt(null, {
        params: o(p),
        generation: ++Zt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function xr(p, d = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = d, s.hidden = !0;
      for (const [L, X] of p.entries()) {
        const Ee = document.createElement("input");
        Ee.type = "hidden", Ee.name = L, Ee.value = X, s.appendChild(Ee);
      }
      document.body.appendChild(s), s.submit(), s.remove();
    }
    function ln(p, d = null, s = null) {
      if (d === null) {
        jt(p);
        return;
      }
      jt({ currentTarget: p }, { params: d, generation: s });
    }
    async function Hg(p, d = oe.value) {
      k.publication = String(d || "").trim(), oe.value = k.publication, Z.value = !1, await tn(), jt({ currentTarget: p });
    }
    function Od(p, d) {
      Hg(d.currentTarget.form, p);
    }
    async function Vg(p) {
      k.q = String(ue.value || "").trim(), k.publication = String(oe.value || "").trim(), k.publisher = String(J.value || "").trim(), k.creator = String(de.value || "").trim(), k.subject = String(x.value || "").trim(), k.folder = String(tt.value || "").trim(), k.year = String(et.value || "").trim(), Z.value = !1, F.value = !1, we.value = !1, R.value = !1, ut.value = !1, dt.value = !1, await tn(), jt({ currentTarget: p });
    }
    async function Di(p, d, s) {
      k[d] = String(s || "").trim(), d === "creator" ? (de.value = k.creator, we.value = !1) : d === "publisher" ? (J.value = k.publisher, F.value = !1) : d === "subject" ? (x.value = k.subject, R.value = !1) : d === "folder" ? (tt.value = k.folder, ut.value = !1) : d === "classification" ? (V.value = k.classification, he.value = !1) : d === "tag" ? (Fe.value = k.tag, He.value = !1) : (et.value = k.year, dt.value = !1), ii[d] = -1, await tn(), jt({ currentTarget: p });
    }
    function Nd(p) {
      Vg(p.currentTarget);
    }
    function Ld(p, d) {
      Di(d.currentTarget.form, "creator", p);
    }
    function Rd(p, d) {
      Di(d.currentTarget.form, "publisher", p);
    }
    function Id(p, d) {
      Di(d.currentTarget.form, "classification", p);
    }
    function Pd(p, d) {
      Di(d.currentTarget.form, "tag", p);
    }
    function $d(p, d) {
      Di(d.currentTarget.form, "folder", p);
    }
    function Fd(p, d = x.value) {
      window.clearTimeout(K), G?.abort(), G = null, Di(p, "subject", d);
    }
    function Gg(p) {
      Fd(p.currentTarget.form);
    }
    function Dd(p, d) {
      Fd(d.currentTarget.form, p);
    }
    function Md(p, d) {
      Di(d.currentTarget.form, "year", p);
    }
    const ii = /* @__PURE__ */ It({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function Kg(p) {
      return W.value;
    }
    function hc(p, d, s) {
      return `library-${p}-${d}-suggestion-${s}`;
    }
    function zd(p, d) {
      const s = ii[d];
      return s >= 0 ? hc(p, d, s) : void 0;
    }
    function vc(p, d) {
      F.value = d, d || (ii[p] = -1);
    }
    function Ud(p) {
      ii[p] = -1, vc(p, !0);
    }
    function qg(p, d, s) {
      Di(s, p, d);
    }
    function jd(p, d) {
      const s = Kg();
      if (p.key === "Escape") {
        vc(d, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(p.key) || s.length === 0) return;
      if (p.key === "Enter") {
        const Ee = ii[d];
        if (Ee < 0) return;
        p.preventDefault(), qg(d, s[Ee], p.currentTarget.form);
        return;
      }
      p.preventDefault(), vc(d, !0);
      const L = ii[d], X = p.key === "ArrowDown" ? 1 : -1;
      ii[d] = L < 0 ? X > 0 ? 0 : s.length - 1 : (L + X + s.length) % s.length;
    }
    function Bd(p) {
      const d = new URLSearchParams();
      for (const [s, L] of Object.entries(k)) {
        const X = String(L || "").trim();
        X !== "" && s !== p && !(s === "sort" && X === "title") && !(s === "view" && X === "compact") && d.set(s, X);
      }
      return d;
    }
    function Or(p) {
      const d = Bd(p).toString();
      return `${bt.value}${d ? `?${d}` : ""}`;
    }
    function Nr(p) {
      const d = Bd(p);
      k[p] = p === "sort" ? "title" : p === "view" ? "compact" : "", jt(null, {
        params: d,
        generation: ++Zt
      });
    }
    function Hd() {
      const p = new URLSearchParams();
      return k.sort && k.sort !== "title" && p.set("sort", k.sort), k.view && k.view !== "compact" && p.set("view", k.view), p;
    }
    function ga() {
      const p = Hd().toString();
      return `${bt.value}${p ? `?${p}` : ""}`;
    }
    function ba() {
      const p = Hd();
      for (const d of Object.keys(k))
        ["sort", "view"].includes(d) || (k[d] = zn[d]);
      jt(null, {
        params: p,
        generation: ++Zt
      }), !ra.value && !Oi.value && tn(() => {
        la.value?.focus?.();
      });
    }
    function Vd(p) {
      const d = Ne.find((X) => X.key === p), s = new Set(d?.keys || []), L = new URLSearchParams();
      for (const [X, Ee] of Object.entries(k)) {
        const Re = String(Ee || "").trim();
        Re !== "" && !s.has(X) && !(X === "sort" && Re === "title") && !(X === "view" && Re === "compact") && L.set(X, Re);
      }
      return L.delete("page"), L;
    }
    function os(p) {
      const s = Vd(p).toString();
      return `${bt.value}${s ? `?${s}` : ""}`;
    }
    function ss(p) {
      const d = Ne.find((L) => L.key === p);
      if (!d) return;
      const s = Vd(p);
      for (const L of d.keys) k[L] = zn[L];
      jt(null, {
        params: s,
        generation: ++Zt
      });
    }
    function Wg(p) {
      const d = new URL(p.href, window.location.origin).searchParams;
      jt(null, {
        params: d,
        generation: ++Zt
      });
    }
    function Yg() {
      return Or("q");
    }
    const gc = H(() => v.smartViewCounts || {}), Xg = H(() => new Set(v.smartViewCountsPending || []));
    function Zg(p) {
      return Xg.value.has(p) || !Object.prototype.hasOwnProperty.call(gc.value, p) ? "—" : Number(gc.value[p] || 0);
    }
    const Gd = H(() => {
      const p = {};
      for (const [d, s] of Object.entries(k)) {
        const L = String(s || "").trim();
        L !== "" && !(d === "sort" && L === "title") && (p[d] = L);
      }
      return p;
    }), Jg = H(() => JSON.stringify(Gd.value)), bc = H(() => Object.keys(Gd.value).length > 0);
    function ls(p) {
      if (!yr.includes(p)) return;
      k.view = p;
      const d = new URLSearchParams();
      for (const [s, L] of Object.entries(u(k))) {
        const X = String(L || "").trim();
        X !== "" && !(s === "sort" && X === "title") && !(s === "view" && X === "compact") && d.set(s, X);
      }
      d.delete("page"), jt(null, {
        params: d,
        generation: ++Zt
      });
    }
    function Qg(p) {
      const d = o(window.location.search);
      for (const L of Object.keys(Go))
        d.delete(L);
      d.delete("page");
      for (const [L, X] of Object.entries(p))
        String(X || "").trim() !== "" && d.set(L, String(X));
      const s = d.toString();
      return s ? `?${s}` : "?";
    }
    function eb(p) {
      return Qg(p || {});
    }
    function tb(p) {
      return oc.value.replace("__COLLECTION_ID__", encodeURIComponent(String(p || "0")));
    }
    function Va(p) {
      return String(p || "").toUpperCase();
    }
    function Lr(p) {
      return sc[p.id] || "loading";
    }
    function nb(p) {
      sc[p.id] = "loaded";
    }
    function ib(p) {
      sc[p.id] = "error";
    }
    function mc(p) {
      const d = String(p?.publication || "").trim(), s = String(p?.publicationDate || "").trim();
      return d && s ? `${d} · ${s}` : d || s ? d || s : [p?.publicationType, Va(p?.extension)].filter(Boolean).join(" · ");
    }
    function Kd(p) {
      const d = String(p?.tagName || "").toLowerCase();
      return p?.isContentEditable || ["input", "select", "textarea", "button"].includes(d);
    }
    function ab(p) {
      p.key !== "/" || p.metaKey || p.ctrlKey || p.altKey || p.shiftKey || Kd(p.target) || (p.preventDefault(), Er.value?.focus(), Er.value?.select?.());
    }
    async function rb(p) {
      p.key !== "Escape" || document.activeElement !== Er.value || k.q === "" || (p.preventDefault(), ue.value = "", k.q = "", await tn(), ln({ currentTarget: Er.value }));
    }
    function ob(p) {
      if (!$i.value || p.metaKey || p.ctrlKey || p.altKey)
        return !1;
      if (p.key === "Escape")
        return p.preventDefault(), is(), !0;
      if (p.key === "Tab" && fa.value) {
        if (da.value?.focusTrap) return !1;
        const d = da.value?.$refs?.sidebar || da.value?.$el || da.value, s = [...d?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ee) => !Ee.hidden && Ee.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const L = s[0], X = s[s.length - 1];
        if (p.shiftKey && (document.activeElement === L || !d.contains(document.activeElement)))
          return p.preventDefault(), X.focus(), !0;
        if (!p.shiftKey && (document.activeElement === X || !d.contains(document.activeElement)))
          return p.preventDefault(), L.focus(), !0;
      }
      return Kd(p.target) ? !1 : p.key === "ArrowLeft" && Qo.value ? (p.preventDefault(), as(Qo.value), !0) : p.key === "ArrowRight" && es.value ? (p.preventDefault(), as(es.value), !0) : !1;
    }
    function qd(p) {
      ob(p) || (ab(p), rb(p));
    }
    ea(() => {
      window.addEventListener("keydown", qd), window.addEventListener("popstate", xd), ni = window.matchMedia?.("(max-width: 1023px)") || null, Tr(), ni?.addEventListener ? ni.addEventListener("change", Tr) : ni?.addListener?.(Tr);
      const p = new URLSearchParams(window.location.search), d = Td();
      p.has("item") && d === null ? (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)) : d !== null && kr(d, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === d) || null }), Ar = window.requestAnimationFrame(() => {
        Ar = null, Bg();
      });
    }), cr(() => {
      uc = !0, pc(), window.removeEventListener("keydown", qd), window.removeEventListener("popstate", xd), window.clearTimeout(le), window.clearTimeout(Le), window.clearTimeout(K), window.clearTimeout(ia), _e?.abort(), ct?.abort(), G?.abort(), ki?.abort(), Zt += 1, Ar !== null && window.cancelAnimationFrame(Ar), Ar = null, rs?.abort(), Ha?.abort(), Ha = null, pa += 1, ha?.abort(), ha = null, ni?.removeEventListener ? ni.removeEventListener("change", Tr) : ni?.removeListener?.(Tr), ni = null, Jo = null;
    });
    const Rr = /* @__PURE__ */ It({}), Ir = /* @__PURE__ */ It({});
    async function Wd(p, d) {
      const s = d?.currentTarget?.closest?.("form") || d?.currentTarget;
      if (!s || !p?.starUrl || Rr[p.id]) return;
      const L = !!p.starred;
      Rr[p.id] = !0, Ir[p.id] = "", p.starred = !L;
      try {
        (await fetch(p.starUrl, {
          method: "POST",
          body: new FormData(s),
          credentials: "same-origin"
        })).ok || (p.starred = L, Ir[p.id] = b("library", "Could not update star. Try again."));
      } catch {
        p.starred = L, Ir[p.id] = b("library", "Could not update star. Try again.");
      } finally {
        Rr[p.id] = !1;
      }
    }
    return (p, d) => (m(), je(g(Jk), { "app-name": "library" }, {
      default: Ie(() => [
        Se(g(I0), {
          "aria-label": g(b)("library", "Library navigation")
        }, {
          list: Ie(() => [
            Se(g(Pv), null, {
              default: Ie(() => [
                (m(!0), _(ie, null, ke(Do.value, (s) => (m(), je(g(Fp), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                Se(g(Fp), {
                  active: aa.value,
                  href: xi.value,
                  name: ja.value > 0 ? `${g(b)("library", "Review")} (${ja.value})` : g(b)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Ie(() => [
            l("section", dT, [
              l("h2", fT, h(g(b)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(b)("library", "Catalogue search and filters"),
                onSubmit: ye(Nd, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: k.folder
                }, null, 8, hT),
                (m(!0), _(ie, null, ke(md.value, (s) => (m(), _("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, vT))), 128)),
                k.sort && k.sort !== "title" ? (m(), _("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: k.sort
                }, null, 8, gT)) : $("", !0),
                k.view && k.view !== "compact" ? (m(), _("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: k.view
                }, null, 8, bT)) : $("", !0),
                l("fieldset", mT, [
                  l("legend", null, h(g(b)("library", "Content")), 1),
                  it.value.find((s) => s.key === "content")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: os("content"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: d[0] || (d[0] = ye((s) => ss("content"), ["prevent"]))
                  }, h(g(b)("library", "Clear Content")), 9, yT)) : $("", !0),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: g(b)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      fe(h(g(b)("library", "Search")) + " ", 1),
                      d[110] || (d[110] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    Pe(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Er,
                      "onUpdate:modelValue": d[1] || (d[1] = (s) => ue.value = s),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: g(b)("library", "Title, creator, description, filename or folder")
                    }, null, 8, wT), [
                      [ft, ue.value]
                    ]),
                    sn("q") ? (m(), _("small", ST, h(xn("q")), 1)) : $("", !0)
                  ], 8, _T),
                  l("label", null, [
                    fe(h(g(b)("library", "Type")), 1),
                    Pe(l("select", {
                      "onUpdate:modelValue": d[2] || (d[2] = (s) => k.type = s),
                      name: "type",
                      onChange: d[3] || (d[3] = (s) => ln(s))
                    }, [
                      l("option", CT, h(g(b)("library", "All types")), 1),
                      (m(!0), _(ie, null, ke(N.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, kT))), 128))
                    ], 544), [
                      [Jt, k.type]
                    ])
                  ]),
                  l("div", TT, [
                    l("label", ET, h(g(b)("library", "Publisher")), 1),
                    Pe(l("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": d[4] || (d[4] = (s) => J.value = s),
                      type: "search",
                      name: "publisherSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search publishers"),
                      title: g(b)("library", "Exact publisher matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publisher-suggestions",
                      "aria-activedescendant": zd("desktop", "publisher"),
                      "aria-expanded": F.value && W.value.length > 0 ? "true" : "false",
                      onFocus: d[5] || (d[5] = (s) => Ud("publisher")),
                      onKeydown: d[6] || (d[6] = (s) => jd(s, "publisher"))
                    }, null, 40, AT), [
                      [ft, J.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: k.publisher
                    }, null, 8, xT),
                    sn("publisher") ? (m(), _("small", OT, h(xn("publisher")), 1)) : $("", !0),
                    F.value && W.value.length > 0 ? (m(), _("ul", NT, [
                      (m(!0), _(ie, null, ke(W.value, (s, L) => (m(), _("li", {
                        id: hc("desktop", "publisher", L),
                        key: s,
                        role: "option",
                        "aria-selected": ii.publisher === L ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: d[7] || (d[7] = ye(() => {
                          }, ["prevent"])),
                          onClick: (X) => Rd(s, X)
                        }, h(s), 41, RT)
                      ], 8, LT))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-publisher-apply", ti("publisher")])
                    }, h(g(b)("library", "Apply publisher")), 3)
                  ]),
                  l("div", IT, [
                    l("label", PT, h(g(b)("library", "Series / periodical")), 1),
                    Pe(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": d[8] || (d[8] = (s) => oe.value = s),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Z.value && Y.value.length > 0 ? "true" : "false",
                      onFocus: d[9] || (d[9] = (s) => Z.value = !0),
                      onKeydown: d[10] || (d[10] = at((s) => Z.value = !1, ["escape"]))
                    }, null, 40, $T), [
                      [ft, oe.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: k.publication
                    }, null, 8, FT),
                    sn("publication") ? (m(), _("small", DT, h(xn("publication")), 1)) : $("", !0),
                    Z.value && Y.value.length > 0 ? (m(), _("ul", MT, [
                      (m(!0), _(ie, null, ke(Y.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: d[11] || (d[11] = ye(() => {
                          }, ["prevent"])),
                          onClick: (L) => Od(s, L)
                        }, h(s), 41, zT)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-publication-apply", ti("publication")])
                    }, h(g(b)("library", "Apply series")), 3)
                  ]),
                  l("div", UT, [
                    l("label", jT, h(g(b)("library", "Publication year")), 1),
                    Pe(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": d[12] || (d[12] = (s) => et.value = s),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": dt.value && gn.value.length > 0 ? "true" : "false",
                      onFocus: d[13] || (d[13] = (s) => dt.value = !0),
                      onKeydown: d[14] || (d[14] = at((s) => dt.value = !1, ["escape"]))
                    }, null, 40, BT), [
                      [ft, et.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: k.year
                    }, null, 8, HT),
                    sn("year") ? (m(), _("small", VT, h(xn("year")), 1)) : $("", !0),
                    dt.value && gn.value.length > 0 ? (m(), _("ul", GT, [
                      (m(!0), _(ie, null, ke(gn.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: d[15] || (d[15] = ye(() => {
                          }, ["prevent"])),
                          onClick: (L) => Md(s, L)
                        }, h(s), 41, KT)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-year-apply", ti("year")])
                    }, h(g(b)("library", "Apply year")), 3)
                  ]),
                  l("div", qT, [
                    l("label", WT, h(g(b)("library", "Creator")), 1),
                    Pe(l("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": d[16] || (d[16] = (s) => de.value = s),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search creators"),
                      title: g(b)("library", "Exact full-field creator matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": we.value && Ge.value.length > 0 ? "true" : "false",
                      onFocus: d[17] || (d[17] = (s) => we.value = !0),
                      onKeydown: d[18] || (d[18] = at((s) => we.value = !1, ["escape"]))
                    }, null, 40, YT), [
                      [ft, de.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: k.creator
                    }, null, 8, XT),
                    sn("creator") ? (m(), _("small", ZT, h(xn("creator")), 1)) : $("", !0),
                    we.value && Ge.value.length > 0 ? (m(), _("ul", JT, [
                      (m(!0), _(ie, null, ke(Ge.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: d[19] || (d[19] = ye(() => {
                          }, ["prevent"])),
                          onClick: (L) => Ld(s, L)
                        }, h(s), 41, QT)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-creator-apply", ti("creator")])
                    }, h(g(b)("library", "Apply creator")), 3)
                  ]),
                  l("div", eE, [
                    l("label", tE, h(g(b)("library", "Nextcloud tag")), 1),
                    Pe(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": d[20] || (d[20] = (s) => Fe.value = s),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": He.value && vt.value.length > 0 ? "true" : "false",
                      onFocus: d[21] || (d[21] = (s) => He.value = !0),
                      onKeydown: d[22] || (d[22] = at((s) => He.value = !1, ["escape"]))
                    }, null, 40, nE), [
                      [ft, Fe.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: k.tag
                    }, null, 8, iE),
                    He.value && vt.value.length > 0 ? (m(), _("ul", aE, [
                      (m(!0), _(ie, null, ke(vt.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: d[23] || (d[23] = ye(() => {
                          }, ["prevent"])),
                          onClick: (L) => Pd(s, L)
                        }, h(s), 41, rE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-tag-apply", ti("tag")])
                    }, h(g(b)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    fe(h(g(b)("library", "Format")), 1),
                    Pe(l("select", {
                      "onUpdate:modelValue": d[24] || (d[24] = (s) => k.format = s),
                      name: "format",
                      onChange: d[25] || (d[25] = (s) => ln(s))
                    }, [
                      l("option", oE, h(g(b)("library", "All formats")), 1),
                      (m(!0), _(ie, null, ke(E.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(Va(s)), 9, sE))), 128))
                    ], 544), [
                      [Jt, k.format]
                    ])
                  ])
                ]),
                l("fieldset", lE, [
                  l("legend", null, h(g(b)("library", "Location")), 1),
                  it.value.find((s) => s.key === "location")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: os("location"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: d[26] || (d[26] = ye((s) => ss("location"), ["prevent"]))
                  }, h(g(b)("library", "Clear Location")), 9, cE)) : $("", !0),
                  l("label", null, [
                    fe(h(g(b)("library", "Shelf")), 1),
                    Pe(l("select", {
                      "onUpdate:modelValue": d[27] || (d[27] = (s) => k.shelf = s),
                      name: "shelf",
                      onChange: d[28] || (d[28] = (s) => ln(s))
                    }, [
                      l("option", uE, h(g(b)("library", "All shelves")), 1),
                      (m(!0), _(ie, null, ke(C.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, dE))), 128))
                    ], 544), [
                      [Jt, k.shelf]
                    ])
                  ]),
                  l("div", fE, [
                    l("label", pE, h(g(b)("library", "Folder")), 1),
                    Pe(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": d[29] || (d[29] = (s) => tt.value = s),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Type at least 3 path characters"),
                      title: g(b)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": ut.value && Mt.value.length > 0 ? "true" : "false",
                      onFocus: d[30] || (d[30] = (s) => ut.value = !0),
                      onKeydown: d[31] || (d[31] = at((s) => ut.value = !1, ["escape"]))
                    }, null, 40, hE), [
                      [ft, tt.value]
                    ]),
                    ut.value && Mt.value.length > 0 ? (m(), _("ul", vE, [
                      (m(!0), _(ie, null, ke(Mt.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: d[32] || (d[32] = ye(() => {
                          }, ["prevent"])),
                          onClick: (L) => $d(s, L)
                        }, h(s), 41, gE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-folder-apply", ti("folder")])
                    }, h(g(b)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", bE, [
                  l("legend", null, h(g(b)("library", "Review")), 1),
                  it.value.find((s) => s.key === "review")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: os("review"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: d[33] || (d[33] = ye((s) => ss("review"), ["prevent"]))
                  }, h(g(b)("library", "Clear Review")), 9, mE)) : $("", !0),
                  l("label", null, [
                    fe(h(g(b)("library", "Scan status")), 1),
                    Pe(l("select", {
                      "onUpdate:modelValue": d[34] || (d[34] = (s) => k.status = s),
                      name: "status",
                      onChange: d[35] || (d[35] = (s) => ln(s))
                    }, [
                      l("option", yE, h(g(b)("library", "All scan statuses")), 1),
                      (m(!0), _(ie, null, ke(D.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, _E))), 128))
                    ], 544), [
                      [Jt, k.status]
                    ])
                  ]),
                  l("label", null, [
                    fe(h(g(b)("library", "Workflow status")), 1),
                    Pe(l("select", {
                      "onUpdate:modelValue": d[36] || (d[36] = (s) => k.workflowStatus = s),
                      name: "workflowStatus",
                      onChange: d[37] || (d[37] = (s) => ln(s))
                    }, [
                      l("option", wE, h(g(b)("library", "All workflow statuses")), 1),
                      (m(!0), _(ie, null, ke(M.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, SE))), 128))
                    ], 544), [
                      [Jt, k.workflowStatus]
                    ])
                  ]),
                  l("div", CE, [
                    l("label", kE, h(g(b)("library", "Subject")), 1),
                    Pe(l("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": d[38] || (d[38] = (s) => x.value = s),
                      type: "search",
                      name: "subjectSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search subjects"),
                      title: g(b)("library", "Exact subject matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-subject-suggestions",
                      "aria-expanded": R.value && j.value.length > 0 ? "true" : "false",
                      onFocus: d[39] || (d[39] = (s) => R.value = !0),
                      onKeydown: d[40] || (d[40] = at((s) => R.value = !1, ["escape"]))
                    }, null, 40, TE), [
                      [ft, x.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: k.subject
                    }, null, 8, EE),
                    sn("subject") ? (m(), _("small", AE, h(xn("subject")), 1)) : $("", !0),
                    R.value && j.value.length > 0 ? (m(), _("ul", xE, [
                      (m(!0), _(ie, null, ke(j.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: d[41] || (d[41] = ye(() => {
                          }, ["prevent"])),
                          onClick: (L) => Dd(s, L)
                        }, h(s), 41, OE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "button",
                      class: be(["button secondary library-subject-apply", ti("subject")]),
                      onClick: Gg
                    }, h(g(b)("library", "Apply subject")), 3)
                  ]),
                  l("div", NE, [
                    l("label", LE, h(g(b)("library", "Classification")), 1),
                    Pe(l("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": d[42] || (d[42] = (s) => V.value = s),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search classifications"),
                      title: g(b)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": he.value && ve.value.length > 0 ? "true" : "false",
                      onFocus: d[43] || (d[43] = (s) => he.value = !0),
                      onKeydown: d[44] || (d[44] = at((s) => he.value = !1, ["escape"]))
                    }, null, 40, RE), [
                      [ft, V.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: k.classification
                    }, null, 8, IE),
                    he.value && ve.value.length > 0 ? (m(), _("ul", PE, [
                      (m(!0), _(ie, null, ke(ve.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: d[45] || (d[45] = ye(() => {
                          }, ["prevent"])),
                          onClick: (L) => Id(s, L)
                        }, h(s), 41, $E)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-classification-apply", ti("classification")])
                    }, h(g(b)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    fe(h(g(b)("library", "Suggested updates")), 1),
                    Pe(l("select", {
                      "onUpdate:modelValue": d[46] || (d[46] = (s) => k.scannerConflicts = s),
                      name: "scannerConflicts",
                      onChange: d[47] || (d[47] = (s) => ln(s))
                    }, [
                      l("option", FE, h(g(b)("library", "All metadata")), 1),
                      l("option", DE, h(g(b)("library", "Suggested updates")), 1)
                    ], 544), [
                      [Jt, k.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", ME, [
                  l("legend", null, h(g(b)("library", "Personal / display")), 1),
                  it.value.find((s) => s.key === "personal")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: os("personal"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: d[48] || (d[48] = ye((s) => ss("personal"), ["prevent"]))
                  }, h(g(b)("library", "Clear Personal / display")), 9, zE)) : $("", !0)
                ]),
                l("button", UE, h(g(b)("library", "Apply filters")), 1),
                re.value.length > 0 ? (m(), _("a", {
                  key: 2,
                  href: ga(),
                  class: "button secondary",
                  onClick: ye(ba, ["prevent"])
                }, h(g(b)("library", "Clear")), 9, jE)) : $("", !0)
              ], 40, pT)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: Ai.value
            }, [
              d[111] || (d[111] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, h(g(b)("library", "Settings")), 1)
            ], 8, BE)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        Se(g(Y1), null, {
          default: Ie(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: v.language || "en",
              dir: v.direction || "ltr",
              tabindex: "-1"
            }, [
              q.value.length > 0 ? (m(), _("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(b)("library", "Active filters")
              }, [
                l("span", null, h(g(b)("library", "Active filters")), 1),
                (m(!0), _(ie, null, ke(q.value, (s) => (m(), _("a", {
                  key: s.key,
                  href: Or(s.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                  title: s.title,
                  onClick: ye((L) => Nr(s.key), ["prevent"])
                }, [
                  l("strong", null, [
                    fe(h(s.label), 1),
                    s.displayValue ? (m(), _(ie, { key: 0 }, [
                      fe(":")
                    ], 64)) : $("", !0)
                  ]),
                  s.displayValue ? (m(), _(ie, { key: 0 }, [
                    d[112] || (d[112] = fe(h(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, h(s.displayValue), 9, KE)
                  ], 64)) : $("", !0),
                  d[113] || (d[113] = fe()),
                  d[114] || (d[114] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, GE))), 128)),
                re.value.length > 0 ? (m(), _("a", {
                  key: 0,
                  href: ga(),
                  class: "library-active-filter-clear-all",
                  onClick: ye(ba, ["prevent"])
                }, h(g(b)("library", "Clear all")), 9, qE)) : $("", !0)
              ], 8, VE)) : $("", !0),
              aa.value ? (m(), _("section", WE, [
                l("header", YE, [
                  l("p", XE, h(g(b)("library", "Metadata cleanup")), 1),
                  l("h2", ZE, h(g(b)("library", "Review")), 1),
                  l("p", null, h(g(b)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                l("nav", {
                  class: "library-review-queues",
                  "aria-label": g(b)("library", "Review queues")
                }, [
                  (m(!0), _(ie, null, ke(Ng.value, (s) => (m(), _("a", {
                    key: s.key,
                    class: be(["library-review-queue-link", { active: s.active }]),
                    href: s.href,
                    "aria-current": s.active ? "page" : void 0,
                    onClick: ye((L) => Wg(s), ["prevent"])
                  }, [
                    l("span", null, h(s.label), 1),
                    l("b", null, h(Zg(s.countKey)), 1)
                  ], 10, QE))), 128))
                ], 8, JE),
                l("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(b)("library", "Filter current review queue"),
                  onSubmit: ye(jt, ["prevent"])
                }, [
                  (m(!0), _(ie, null, ke(wg.value, (s) => (m(), _("input", {
                    key: `review-${s.key}`,
                    type: "hidden",
                    name: s.key,
                    value: s.value
                  }, null, 8, t2))), 128)),
                  l("label", null, [
                    fe(h(g(b)("library", "Search within this queue")), 1),
                    Pe(l("input", {
                      "onUpdate:modelValue": d[49] || (d[49] = (s) => k.q = s),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ft, k.q]
                    ])
                  ]),
                  l("button", n2, h(g(b)("library", "Apply")), 1)
                ], 40, e2),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Lt.loading ? "true" : "false"
                }, [
                  Lt.loading ? (m(), _("span", a2, h(g(b)("library", "Loading review queue…")), 1)) : $("", !0)
                ], 8, i2),
                Lt.error ? (m(), _("p", r2, h(Lt.error), 1)) : $("", !0),
                Fi.value.enabled ? (m(), _("section", o2, [
                  l("div", s2, [
                    l("p", l2, h(g(b)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(b)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, h(g(b)("library", "Review next suggestion")), 9, c2)
                  ]),
                  Fi.value.item ? (m(), _("article", u2, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", d2, h(Fi.value.item.title), 1)
                      ]),
                      l("span", f2, [
                        l("bdi", p2, h(Fi.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", h2, [
                      (m(!0), _(ie, null, ke(Fi.value.fields, (s) => (m(), _("article", {
                        key: s.field,
                        class: "library-metadata-review-field"
                      }, [
                        l("h4", null, [
                          l("bdi", v2, h(s.field), 1)
                        ]),
                        l("dl", null, [
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Current value")), 1),
                            l("dd", null, [
                              l("bdi", g2, h(s.currentValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Suggested value")), 1),
                            l("dd", null, [
                              l("bdi", b2, h(s.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Path-based suggestion")), 1),
                            l("dd", null, [
                              l("bdi", m2, h(s.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Sidecar value")), 1),
                            l("dd", null, [
                              l("bdi", y2, h(s.sidecarValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Source")), 1),
                            l("dd", null, [
                              l("bdi", _2, h(s.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        l("form", {
                          method: "post",
                          action: Fi.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: At.value
                          }, null, 8, S2),
                          l("input", {
                            type: "hidden",
                            name: "field",
                            value: s.field
                          }, null, 8, C2),
                          d[115] || (d[115] = l("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          l("button", k2, h(g(b)("library", "Use suggested value")), 1)
                        ], 8, w2)
                      ]))), 128))
                    ]),
                    l("footer", T2, [
                      l("a", {
                        class: "button secondary",
                        href: Fi.value.item.detailsUrl
                      }, h(g(b)("library", "Maintenance")), 9, E2),
                      l("a", {
                        class: "button secondary",
                        href: Fi.value.skipUrl
                      }, h(g(b)("library", "Skip to next suggestion")), 9, A2)
                    ])
                  ])) : $("", !0)
                ])) : $("", !0),
                y.value.length === 0 && !Lt.loading && !Lt.error ? (m(), _("div", x2, [
                  l("h3", null, h(g(b)("library", "This review queue is clear")), 1),
                  l("p", null, h(g(b)("library", "Choose another queue or return to the catalogue.")), 1),
                  l("a", {
                    class: "button primary",
                    href: bt.value
                  }, h(g(b)("library", "Back to Library")), 9, O2)
                ])) : (m(), _("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(b)("library", "Review results")
                }, [
                  (m(!0), _(ie, null, ke(y.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: "library-review-result-card"
                  }, [
                    l("div", null, [
                      l("h3", null, [
                        l("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (L) => Bn(s, L)
                        }, [
                          l("bdi", R2, h(s.title), 1)
                        ], 8, L2)
                      ]),
                      s.creators ? (m(), _("p", I2, [
                        l("bdi", P2, h(s.creators), 1)
                      ])) : $("", !0),
                      s.scanError ? (m(), _("p", $2, [
                        l("bdi", F2, h(s.scanError), 1)
                      ])) : $("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (L) => Bn(s, L)
                      }, h(g(b)("library", "Details")), 9, D2),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (L) => ei(s, L)
                      }, h(g(b)("library", "Open")), 9, M2)
                    ])
                  ]))), 128))
                ], 8, N2)),
                y.value.length > 0 ? (m(), _("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(b)("library", "Review pagination")
                }, [
                  z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, h(g(b)("library", "Previous")), 9, U2)) : (m(), _("span", j2, h(g(b)("library", "Previous")), 1)),
                  l("span", null, [
                    fe(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", B2, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : $("", !0)
                  ]),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, h(g(b)("library", "Next")), 9, H2)) : (m(), _("span", V2, h(g(b)("library", "Next")), 1))
                ], 8, z2)) : $("", !0)
              ])) : ra.value ? (m(), _("main", G2, [
                l("header", K2, [
                  l("p", q2, h(g(b)("library", "Your library")), 1),
                  l("h2", W2, h(g(b)("library", "Home")), 1)
                ]),
                re.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, h(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ie, null, ke(re.value, (s) => (m(), _("a", {
                      key: `callout-${s.key}`,
                      href: Or(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: ye((L) => Nr(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        fe(h(s.label), 1),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          fe(":")
                        ], 64)) : $("", !0)
                      ]),
                      s.displayValue ? (m(), _(ie, { key: 0 }, [
                        d[116] || (d[116] = fe(h(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, h(s.displayValue), 9, J2)
                      ], 64)) : $("", !0),
                      d[117] || (d[117] = fe()),
                      d[118] || (d[118] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, Z2))), 128))
                  ], 8, X2),
                  l("p", Q2, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: Ot.value
                    }, h(g(b)("library", "View filtered catalogue")), 9, eA),
                    l("a", {
                      class: "button secondary",
                      href: ga(),
                      onClick: ye(ba, ["prevent"])
                    }, h(g(b)("library", "Clear all")), 9, tA)
                  ])
                ], 8, Y2)) : $("", !0),
                l("section", nA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", iA, h(g(b)("library", "Continue reading")), 1),
                      l("p", aA, h(g(b)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    l("a", {
                      href: `${bt.value}?sort=lastOpened`
                    }, h(g(b)("library", "View all")), 9, rA)
                  ]),
                  Xo.value.continueReading.length ? (m(), _("div", oA, [
                    (m(!0), _(ie, null, ke(Xo.value.continueReading, (s) => (m(), _("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (L) => Bn(s, L)
                      }, [
                        l("span", lA, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, cA)
                        ])
                      ], 8, sA),
                      l("div", uA, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (L) => Bn(s, L)
                          }, [
                            l("bdi", fA, h(s.title), 1)
                          ], 8, dA)
                        ]),
                        s.creators ? (m(), _("p", pA, [
                          l("bdi", hA, h(s.creators), 1)
                        ])) : $("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (L) => ei(s, L)
                        }, h(g(b)("library", "Open")), 9, vA)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", gA, h(g(b)("library", "Publications you open will appear here.")), 1))
                ]),
                l("section", bA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", mA, h(g(b)("library", "Recently added")), 1),
                      l("p", yA, h(g(b)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    l("a", {
                      href: `${bt.value}?sort=recent`
                    }, h(g(b)("library", "View all")), 9, _A)
                  ]),
                  Xo.value.recentlyAdded.length ? (m(), _("div", wA, [
                    (m(!0), _(ie, null, ke(Xo.value.recentlyAdded, (s) => (m(), _("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (L) => Bn(s, L)
                      }, [
                        l("span", CA, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, kA)
                        ])
                      ], 8, SA),
                      l("div", TA, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (L) => Bn(s, L)
                          }, [
                            l("bdi", AA, h(s.title), 1)
                          ], 8, EA)
                        ]),
                        s.creators ? (m(), _("p", xA, [
                          l("bdi", OA, h(s.creators), 1)
                        ])) : $("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (L) => ei(s, L)
                        }, h(g(b)("library", "Open")), 9, NA)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", LA, h(g(b)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                l("section", RA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", IA, h(g(b)("library", "Shelves")), 1),
                      l("p", PA, h(g(b)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    l("a", { href: on.value }, h(g(b)("library", "View all")), 9, $A)
                  ]),
                  yd.value.length ? (m(), _("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(b)("library", "Shelves")
                  }, [
                    (m(!0), _(ie, null, ke(yd.value, (s) => (m(), _("a", {
                      key: s.shelf,
                      href: s.url
                    }, [
                      l("strong", null, [
                        l("bdi", MA, h(s.shelf), 1)
                      ]),
                      l("span", null, h(g(dn)("library", "%n item", "%n items", Number(s.itemCount || 0))), 1)
                    ], 8, DA))), 128))
                  ], 8, FA)) : (m(), _("p", zA, h(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(lc.value.count || 0) > 0 ? (m(), _("aside", UA, [
                  l("div", null, [
                    l("h3", jA, h(g(b)("library", "Needs attention")), 1),
                    l("p", BA, h(g(dn)("library", "%n publication needs better details.", "%n publications need better details.", Number(lc.value.count || 0))), 1)
                  ]),
                  l("a", {
                    class: "button tertiary",
                    href: lc.value.url
                  }, h(g(b)("library", "Review")), 9, HA)
                ])) : $("", !0)
              ])) : Oi.value ? (m(), _("main", VA, [
                l("header", GA, [
                  l("p", KA, h(g(b)("library", "Your library")), 1),
                  l("h2", qA, h(g(b)("library", "Shelves")), 1),
                  l("p", WA, h(g(b)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                re.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, h(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ie, null, ke(re.value, (s) => (m(), _("a", {
                      key: `callout-${s.key}`,
                      href: Or(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: ye((L) => Nr(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        fe(h(s.label), 1),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          fe(":")
                        ], 64)) : $("", !0)
                      ]),
                      s.displayValue ? (m(), _(ie, { key: 0 }, [
                        d[119] || (d[119] = fe(h(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, h(s.displayValue), 9, JA)
                      ], 64)) : $("", !0),
                      d[120] || (d[120] = fe()),
                      d[121] || (d[121] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, ZA))), 128))
                  ], 8, XA),
                  l("p", QA, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: Ot.value
                    }, h(g(b)("library", "View filtered catalogue")), 9, ex),
                    l("a", {
                      class: "button secondary",
                      href: ga(),
                      onClick: ye(ba, ["prevent"])
                    }, h(g(b)("library", "Clear all")), 9, tx)
                  ])
                ], 8, YA)) : $("", !0),
                _d.value.length ? (m(), _("nav", {
                  key: 1,
                  "aria-label": g(b)("library", "Shelves")
                }, [
                  l("ul", ix, [
                    (m(!0), _(ie, null, ke(_d.value, (s) => (m(), je(uT, {
                      key: s.id,
                      node: s,
                      "children-url": Jl.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, nx)) : (m(), _("section", ax, [
                  l("h3", null, h(g(b)("library", "Shelves")), 1),
                  l("p", rx, h(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", ox, [
                    l("a", {
                      class: "button primary",
                      href: Ai.value
                    }, h(g(b)("library", "Add a Library root")), 9, sx),
                    l("a", {
                      class: "button secondary",
                      href: bt.value
                    }, h(g(b)("library", "All publications")), 9, lx)
                  ])
                ]))
              ])) : (m(), _("section", {
                key: 4,
                id: "library-catalogue",
                class: be(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Lt.loading }]),
                "aria-labelledby": "library-catalogue-heading",
                "aria-busy": Lt.loading ? "true" : "false"
              }, [
                l("header", ux, [
                  Ba.value ? (m(), _("p", dx, h(hr.value), 1)) : $("", !0),
                  l("h2", {
                    id: "library-catalogue-heading",
                    ref_key: "catalogueHeadingElement",
                    ref: la,
                    tabindex: "-1"
                  }, h(Ho.value), 513)
                ]),
                l("details", {
                  class: "library-mobile-filter-panel",
                  "data-library-control": "filter",
                  onToggle: mg
                }, [
                  l("summary", {
                    class: "library-mobile-filter-trigger",
                    "aria-label": gg.value
                  }, [
                    l("span", px, h(g(dn)("library", "%n item", "%n items", Number(z.value.total || 0))), 1),
                    l("strong", null, h(vg.value), 1)
                  ], 8, fx),
                  l("form", {
                    method: "get",
                    class: "library-mobile-filter-form",
                    "aria-label": g(b)("library", "Mobile catalogue filters"),
                    onSubmit: ye(Nd, ["prevent"])
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "folder",
                      value: k.folder
                    }, null, 8, vx),
                    (m(!0), _(ie, null, ke(md.value, (s) => (m(), _("input", {
                      key: `mobile-hidden-${s.key}`,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, gx))), 128)),
                    l("fieldset", bx, [
                      l("legend", null, h(g(b)("library", "Content")), 1),
                      l("label", mx, [
                        l("span", null, h(g(b)("library", "Search")), 1),
                        Pe(l("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: Vo,
                          "onUpdate:modelValue": d[50] || (d[50] = (s) => ue.value = s),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(b)("library", "Title, creator, description, filename or folder")
                        }, null, 8, yx), [
                          [ft, ue.value]
                        ])
                      ]),
                      l("label", null, [
                        fe(h(g(b)("library", "Type")), 1),
                        Pe(l("select", {
                          "onUpdate:modelValue": d[51] || (d[51] = (s) => k.type = s),
                          name: "type",
                          onChange: d[52] || (d[52] = (s) => ln(s))
                        }, [
                          l("option", _x, h(g(b)("library", "All types")), 1),
                          (m(!0), _(ie, null, ke(N.value, (s) => (m(), _("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, h(s), 9, wx))), 128))
                        ], 544), [
                          [Jt, k.type]
                        ])
                      ]),
                      l("div", Sx, [
                        l("label", Cx, h(g(b)("library", "Publisher")), 1),
                        Pe(l("input", {
                          id: "library-mobile-publisher-search",
                          "onUpdate:modelValue": d[53] || (d[53] = (s) => J.value = s),
                          type: "search",
                          name: "publisherSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search publishers"),
                          title: g(b)("library", "Exact publisher matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publisher-suggestions",
                          "aria-activedescendant": zd("mobile", "publisher"),
                          "aria-expanded": F.value && W.value.length > 0 ? "true" : "false",
                          onFocus: d[54] || (d[54] = (s) => Ud("publisher")),
                          onKeydown: d[55] || (d[55] = (s) => jd(s, "publisher"))
                        }, null, 40, kx), [
                          [ft, J.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: k.publisher
                        }, null, 8, Tx),
                        sn("publisher") ? (m(), _("small", Ex, h(xn("publisher")), 1)) : $("", !0),
                        mt.value && F.value && W.value.length > 0 ? (m(), _("ul", Ax, [
                          (m(!0), _(ie, null, ke(W.value, (s, L) => (m(), _("li", {
                            id: hc("mobile", "publisher", L),
                            key: `mobile-publisher-${s}`,
                            role: "option",
                            "aria-selected": ii.publisher === L ? "true" : "false"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: d[56] || (d[56] = ye(() => {
                              }, ["prevent"])),
                              onClick: (X) => Rd(s, X)
                            }, h(s), 41, Ox)
                          ], 8, xx))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", Nx, [
                        l("label", Lx, h(g(b)("library", "Series / periodical")), 1),
                        Pe(l("input", {
                          id: "library-mobile-publication-search",
                          "onUpdate:modelValue": d[57] || (d[57] = (s) => oe.value = s),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publication-suggestions",
                          "aria-expanded": Z.value && Y.value.length > 0 ? "true" : "false",
                          onFocus: d[58] || (d[58] = (s) => Z.value = !0),
                          onKeydown: d[59] || (d[59] = at((s) => Z.value = !1, ["escape"]))
                        }, null, 40, Rx), [
                          [ft, oe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publication",
                          value: k.publication
                        }, null, 8, Ix),
                        sn("publication") ? (m(), _("small", Px, h(xn("publication")), 1)) : $("", !0),
                        mt.value && Z.value && Y.value.length > 0 ? (m(), _("ul", $x, [
                          (m(!0), _(ie, null, ke(Y.value, (s) => (m(), _("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: d[60] || (d[60] = ye(() => {
                              }, ["prevent"])),
                              onClick: (L) => Od(s, L)
                            }, h(s), 41, Fx)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", Dx, [
                        l("label", Mx, h(g(b)("library", "Publication year")), 1),
                        Pe(l("input", {
                          id: "library-mobile-year-search",
                          "onUpdate:modelValue": d[61] || (d[61] = (s) => et.value = s),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-year-suggestions",
                          "aria-expanded": dt.value && gn.value.length > 0 ? "true" : "false",
                          onFocus: d[62] || (d[62] = (s) => dt.value = !0),
                          onKeydown: d[63] || (d[63] = at((s) => dt.value = !1, ["escape"]))
                        }, null, 40, zx), [
                          [ft, et.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "year",
                          value: k.year
                        }, null, 8, Ux),
                        sn("year") ? (m(), _("small", jx, h(xn("year")), 1)) : $("", !0),
                        mt.value && dt.value && gn.value.length > 0 ? (m(), _("ul", Bx, [
                          (m(!0), _(ie, null, ke(gn.value, (s) => (m(), _("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: d[64] || (d[64] = ye(() => {
                              }, ["prevent"])),
                              onClick: (L) => Md(s, L)
                            }, h(s), 41, Hx)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", Vx, [
                        l("label", Gx, h(g(b)("library", "Creator")), 1),
                        Pe(l("input", {
                          id: "library-mobile-creator-search",
                          "onUpdate:modelValue": d[65] || (d[65] = (s) => de.value = s),
                          type: "search",
                          name: "creatorSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search creators"),
                          title: g(b)("library", "Exact full-field creator matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-creator-suggestions",
                          "aria-expanded": we.value && Ge.value.length > 0 ? "true" : "false",
                          onFocus: d[66] || (d[66] = (s) => we.value = !0),
                          onKeydown: d[67] || (d[67] = at((s) => we.value = !1, ["escape"]))
                        }, null, 40, Kx), [
                          [ft, de.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "creator",
                          value: k.creator
                        }, null, 8, qx),
                        sn("creator") ? (m(), _("small", Wx, h(xn("creator")), 1)) : $("", !0),
                        mt.value && we.value && Ge.value.length > 0 ? (m(), _("ul", Yx, [
                          (m(!0), _(ie, null, ke(Ge.value, (s) => (m(), _("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: d[68] || (d[68] = ye(() => {
                              }, ["prevent"])),
                              onClick: (L) => Ld(s, L)
                            }, h(s), 41, Xx)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("label", null, [
                        fe(h(g(b)("library", "Format")), 1),
                        Pe(l("select", {
                          "onUpdate:modelValue": d[69] || (d[69] = (s) => k.format = s),
                          name: "format",
                          onChange: d[70] || (d[70] = (s) => ln(s))
                        }, [
                          l("option", Zx, h(g(b)("library", "All formats")), 1),
                          (m(!0), _(ie, null, ke(E.value, (s) => (m(), _("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, h(Va(s)), 9, Jx))), 128))
                        ], 544), [
                          [Jt, k.format]
                        ])
                      ]),
                      l("div", Qx, [
                        l("label", eO, h(g(b)("library", "Subject")), 1),
                        Pe(l("input", {
                          id: "library-mobile-subject-search",
                          "onUpdate:modelValue": d[71] || (d[71] = (s) => x.value = s),
                          type: "search",
                          name: "subjectSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search subjects"),
                          title: g(b)("library", "Exact subject matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-subject-suggestions",
                          "aria-expanded": R.value && j.value.length > 0 ? "true" : "false",
                          onFocus: d[72] || (d[72] = (s) => R.value = !0),
                          onKeydown: d[73] || (d[73] = at((s) => R.value = !1, ["escape"]))
                        }, null, 40, tO), [
                          [ft, x.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "subject",
                          value: k.subject
                        }, null, 8, nO),
                        sn("subject") ? (m(), _("small", iO, h(xn("subject")), 1)) : $("", !0),
                        mt.value && R.value && j.value.length > 0 ? (m(), _("ul", aO, [
                          (m(!0), _(ie, null, ke(j.value, (s) => (m(), _("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: d[74] || (d[74] = ye(() => {
                              }, ["prevent"])),
                              onClick: (L) => Dd(s, L)
                            }, h(s), 41, rO)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", oO, [
                        l("label", sO, h(g(b)("library", "Classification")), 1),
                        Pe(l("input", {
                          id: "library-mobile-classification-search",
                          "onUpdate:modelValue": d[75] || (d[75] = (s) => V.value = s),
                          type: "search",
                          name: "classificationSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search classifications"),
                          title: g(b)("library", "Exact classification matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-classification-suggestions",
                          "aria-expanded": he.value && ve.value.length > 0 ? "true" : "false",
                          onFocus: d[76] || (d[76] = (s) => he.value = !0),
                          onKeydown: d[77] || (d[77] = at((s) => he.value = !1, ["escape"]))
                        }, null, 40, lO), [
                          [ft, V.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "classification",
                          value: k.classification
                        }, null, 8, cO),
                        mt.value && he.value && ve.value.length > 0 ? (m(), _("ul", uO, [
                          (m(!0), _(ie, null, ke(ve.value, (s) => (m(), _("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: d[78] || (d[78] = ye(() => {
                              }, ["prevent"])),
                              onClick: (L) => Id(s, L)
                            }, h(s), 41, dO)
                          ]))), 128))
                        ])) : $("", !0)
                      ])
                    ]),
                    l("fieldset", fO, [
                      l("legend", null, h(g(b)("library", "Location")), 1),
                      l("label", null, [
                        fe(h(g(b)("library", "Shelf")), 1),
                        Pe(l("select", {
                          "onUpdate:modelValue": d[79] || (d[79] = (s) => k.shelf = s),
                          name: "shelf",
                          onChange: d[80] || (d[80] = (s) => ln(s))
                        }, [
                          l("option", pO, h(g(b)("library", "All shelves")), 1),
                          (m(!0), _(ie, null, ke(C.value, (s) => (m(), _("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, h(s), 9, hO))), 128))
                        ], 544), [
                          [Jt, k.shelf]
                        ])
                      ]),
                      l("div", vO, [
                        l("label", gO, h(g(b)("library", "Folder")), 1),
                        Pe(l("input", {
                          id: "library-mobile-folder-search",
                          "onUpdate:modelValue": d[81] || (d[81] = (s) => tt.value = s),
                          type: "search",
                          name: "folderSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Type at least 3 path characters"),
                          title: g(b)("library", "Select an exact folder path"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-folder-suggestions",
                          "aria-expanded": ut.value && Mt.value.length > 0 ? "true" : "false",
                          onFocus: d[82] || (d[82] = (s) => ut.value = !0),
                          onKeydown: d[83] || (d[83] = at((s) => ut.value = !1, ["escape"]))
                        }, null, 40, bO), [
                          [ft, tt.value]
                        ]),
                        mt.value && ut.value && Mt.value.length > 0 ? (m(), _("ul", mO, [
                          (m(!0), _(ie, null, ke(Mt.value, (s) => (m(), _("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: d[84] || (d[84] = ye(() => {
                              }, ["prevent"])),
                              onClick: (L) => $d(s, L)
                            }, h(s), 41, yO)
                          ]))), 128))
                        ])) : $("", !0)
                      ])
                    ]),
                    l("fieldset", _O, [
                      l("legend", null, h(g(b)("library", "Review")), 1),
                      l("label", null, [
                        fe(h(g(b)("library", "Scan status")), 1),
                        Pe(l("select", {
                          "onUpdate:modelValue": d[85] || (d[85] = (s) => k.status = s),
                          name: "status",
                          onChange: d[86] || (d[86] = (s) => ln(s))
                        }, [
                          l("option", wO, h(g(b)("library", "All scan statuses")), 1),
                          (m(!0), _(ie, null, ke(D.value, (s) => (m(), _("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, h(s), 9, SO))), 128))
                        ], 544), [
                          [Jt, k.status]
                        ])
                      ]),
                      l("label", null, [
                        fe(h(g(b)("library", "Workflow status")), 1),
                        Pe(l("select", {
                          "onUpdate:modelValue": d[87] || (d[87] = (s) => k.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: d[88] || (d[88] = (s) => ln(s))
                        }, [
                          l("option", CO, h(g(b)("library", "All workflow statuses")), 1),
                          (m(!0), _(ie, null, ke(M.value, (s) => (m(), _("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, h(s), 9, kO))), 128))
                        ], 544), [
                          [Jt, k.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        fe(h(g(b)("library", "Suggested updates")), 1),
                        Pe(l("select", {
                          "onUpdate:modelValue": d[89] || (d[89] = (s) => k.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: d[90] || (d[90] = (s) => ln(s))
                        }, [
                          l("option", TO, h(g(b)("library", "All metadata")), 1),
                          l("option", EO, h(g(b)("library", "Suggested updates")), 1)
                        ], 544), [
                          [Jt, k.scannerConflicts]
                        ])
                      ])
                    ]),
                    l("fieldset", AO, [
                      l("legend", null, h(g(b)("library", "Personal / display")), 1),
                      l("div", xO, [
                        l("label", OO, h(g(b)("library", "Nextcloud tag")), 1),
                        Pe(l("input", {
                          id: "library-tag-search",
                          "onUpdate:modelValue": d[91] || (d[91] = (s) => Fe.value = s),
                          type: "search",
                          name: "tagSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search tags"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-tag-suggestions",
                          "aria-expanded": He.value && vt.value.length > 0 ? "true" : "false",
                          onFocus: d[92] || (d[92] = (s) => He.value = !0),
                          onKeydown: d[93] || (d[93] = at((s) => He.value = !1, ["escape"]))
                        }, null, 40, NO), [
                          [ft, Fe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "tag",
                          value: k.tag
                        }, null, 8, LO),
                        He.value && vt.value.length > 0 ? (m(), _("ul", RO, [
                          (m(!0), _(ie, null, ke(vt.value, (s) => (m(), _("li", {
                            key: s,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-tag-suggestion",
                              onMousedown: d[94] || (d[94] = ye(() => {
                              }, ["prevent"])),
                              onClick: (L) => Pd(s, L)
                            }, h(s), 41, IO)
                          ]))), 128))
                        ])) : $("", !0),
                        l("button", {
                          type: "submit",
                          class: be(["button secondary library-tag-apply", ti("tag")])
                        }, h(g(b)("library", "Apply tag")), 3)
                      ]),
                      l("label", null, [
                        fe(h(g(b)("library", "Sort")), 1),
                        Pe(l("select", {
                          "onUpdate:modelValue": d[95] || (d[95] = (s) => k.sort = s),
                          name: "sort",
                          onChange: jt
                        }, [
                          l("option", PO, h(g(b)("library", "Title")), 1),
                          l("option", $O, h(g(b)("library", "Date added")), 1),
                          l("option", FO, h(g(b)("library", "Publication date")), 1),
                          l("option", DO, h(g(b)("library", "Series")), 1),
                          l("option", MO, h(g(b)("library", "Recently opened")), 1),
                          l("option", zO, h(g(b)("library", "Format")), 1)
                        ], 544), [
                          [Jt, k.sort]
                        ])
                      ]),
                      l("label", null, [
                        fe(h(g(b)("library", "View")), 1),
                        Pe(l("select", {
                          "onUpdate:modelValue": d[96] || (d[96] = (s) => k.view = s),
                          name: "view",
                          onChange: jt
                        }, [
                          l("option", UO, h(g(b)("library", "Compact")), 1),
                          l("option", jO, h(g(b)("library", "Gallery")), 1),
                          l("option", BO, h(g(b)("library", "List")), 1),
                          l("option", HO, h(g(b)("library", "Shelf")), 1)
                        ], 544), [
                          [Jt, k.view]
                        ])
                      ])
                    ]),
                    l("div", VO, [
                      re.value.length > 0 ? (m(), _("a", {
                        key: 0,
                        href: ga(),
                        class: "button secondary library-mobile-filter-clear",
                        onClick: ye(ba, ["prevent"])
                      }, h(g(b)("library", "Clear all")), 9, GO)) : $("", !0),
                      l("button", KO, h(bg.value), 1)
                    ])
                  ], 40, hx)
                ], 32),
                l("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(b)("library", "One catalogue workspace")
                }, [
                  l("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(b)("library", "Catalogue toolbar"),
                    onSubmit: ye(jt, ["prevent"])
                  }, [
                    (m(!0), _(ie, null, ke(_g.value, (s) => (m(), _("input", {
                      key: s.key,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, YO))), 128)),
                    l("label", XO, [
                      fe(h(g(b)("library", "Sort")), 1),
                      Pe(l("select", {
                        "onUpdate:modelValue": d[97] || (d[97] = (s) => k.sort = s),
                        name: "sort",
                        onChange: jt
                      }, [
                        l("option", ZO, h(g(b)("library", "Title")), 1),
                        l("option", JO, h(g(b)("library", "Date added")), 1),
                        l("option", QO, h(g(b)("library", "Publication date")), 1),
                        l("option", e3, h(g(b)("library", "Series")), 1),
                        l("option", t3, h(g(b)("library", "Recently opened")), 1),
                        l("option", n3, h(g(b)("library", "Format")), 1)
                      ], 544), [
                        [Jt, k.sort]
                      ])
                    ]),
                    l("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": g(b)("library", "View")
                    }, [
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: be({ active: xt.value === "compact" }),
                        "aria-pressed": xt.value === "compact" ? "true" : "false",
                        onClick: d[98] || (d[98] = (s) => ls("compact"))
                      }, h(g(b)("library", "Compact")), 11, a3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: be({ active: xt.value === "gallery" }),
                        "aria-pressed": xt.value === "gallery" ? "true" : "false",
                        onClick: d[99] || (d[99] = (s) => ls("gallery"))
                      }, h(g(b)("library", "Gallery")), 11, r3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: be({ active: xt.value === "list" }),
                        "aria-pressed": xt.value === "list" ? "true" : "false",
                        onClick: d[100] || (d[100] = (s) => ls("list"))
                      }, h(g(b)("library", "List")), 11, o3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: be({ active: xt.value === "shelf" }),
                        "aria-pressed": xt.value === "shelf" ? "true" : "false",
                        onClick: d[101] || (d[101] = (s) => ls("shelf"))
                      }, h(g(b)("library", "Shelf")), 11, s3)
                    ], 8, i3)
                  ], 40, WO),
                  l("section", l3, [
                    l("h3", {
                      title: g(b)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, h(g(b)("library", "Collections")), 9, c3),
                    l("form", {
                      method: "post",
                      action: rc.value,
                      class: "library-saved-collection-save-form",
                      title: bc.value ? "" : g(b)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: At.value
                      }, null, 8, d3),
                      l("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Jg.value
                      }, null, 8, f3),
                      l("label", null, [
                        fe(h(g(b)("library", "Collection name")), 1),
                        l("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(b)("library", "e.g. Bremen photo books"),
                          disabled: !bc.value,
                          autocomplete: "off"
                        }, null, 8, p3)
                      ]),
                      l("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !bc.value,
                        title: g(b)("library", "Save current view")
                      }, h(g(b)("library", "Save")), 9, h3)
                    ], 8, u3),
                    mr.value.length > 0 ? (m(), _("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(b)("library", "Saved custom collections")
                    }, [
                      (m(!0), _(ie, null, ke(mr.value, (s) => (m(), _("article", {
                        key: s.id,
                        class: "library-saved-collection-card"
                      }, [
                        l("a", {
                          class: "library-saved-collection-link",
                          href: eb(s.filters)
                        }, [
                          l("strong", null, h(s.name), 1),
                          l("span", b3, h(s.countPending ? "—" : g(dn)("library", "%n item", "%n items", Number(s.count || 0))), 1)
                        ], 8, g3),
                        l("form", {
                          method: "post",
                          action: tb(s.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: At.value
                          }, null, 8, y3),
                          l("button", _3, h(g(b)("library", "Delete")), 1)
                        ], 8, m3)
                      ]))), 128))
                    ], 8, v3)) : $("", !0)
                  ]),
                  On.value.length > 0 ? (m(), _("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(b)("library", "Batch actions for selected publications")
                  }, [
                    l("summary", S3, [
                      d[122] || (d[122] = l("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      l("span", {
                        class: "library-workspace-panel-title",
                        title: g(b)("library", "Batch actions for selected publications")
                      }, h(g(b)("library", "Batch actions")), 9, C3),
                      l("small", k3, h(g(b)("library", "Batch actions for selected publications")), 1),
                      l("b", T3, h(g(dn)("library", "%n publication selected", "%n publications selected", On.value.length)), 1)
                    ]),
                    l("p", E3, h(g(dn)("library", "%n publication selected", "%n publications selected", On.value.length)), 1),
                    l("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: kg
                    }, [
                      l("form", {
                        method: "post",
                        action: nc.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: At.value
                        }, null, 8, x3),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, O3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(b)("library", "Applies only to the selected publications.")
                        }, h(g(b)("library", "Apply")), 9, N3)
                      ], 8, A3),
                      l("form", {
                        method: "post",
                        action: ic.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: At.value
                        }, null, 8, R3),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, I3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Removes the tag only from the selected publications.")
                        }, h(g(b)("library", "Remove")), 9, P3)
                      ], 8, L3),
                      l("form", {
                        method: "post",
                        action: ac.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: At.value
                        }, null, 8, F3),
                        (m(!0), _(ie, null, ke(Yo.value, (s) => (m(), _("input", {
                          key: `reset-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, D3))), 128)),
                        d[123] || (d[123] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, h(g(b)("library", "Reset metadata")), 9, M3)
                      ], 8, $3),
                      l("form", {
                        method: "post",
                        action: Un.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: At.value
                        }, null, 8, U3),
                        (m(!0), _(ie, null, ke(Yo.value, (s) => (m(), _("input", {
                          key: `edit-preview-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, j3))), 128)),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Field")), 1),
                          l("select", B3, [
                            l("option", H3, h(g(b)("library", "Publication type")), 1),
                            l("option", V3, h(g(b)("library", "Subtitle")), 1),
                            l("option", G3, h(g(b)("library", "Creators")), 1),
                            l("option", K3, h(g(b)("library", "Series / periodical")), 1),
                            l("option", q3, h(g(b)("library", "Publication date")), 1),
                            l("option", W3, h(g(b)("library", "Language")), 1),
                            l("option", Y3, h(g(b)("library", "Publisher")), 1),
                            l("option", X3, h(g(b)("library", "Subjects")), 1),
                            l("option", Z3, h(g(b)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(b)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, J3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Preview first, then apply from the review page.")
                        }, h(g(b)("library", "Preview edit")), 9, Q3)
                      ], 8, z3),
                      l("form", {
                        method: "post",
                        action: jo.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: At.value
                        }, null, 8, tN),
                        (m(!0), _(ie, null, ke(Yo.value, (s) => (m(), _("input", {
                          key: `cover-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, nN))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, h(g(b)("library", "Fresh covers")), 9, iN)
                      ], 8, eN)
                    ], 32)
                  ], 8, w3)) : $("", !0)
                ], 8, qO),
                br.value ? (m(), _("p", aN, h(br.value), 1)) : $("", !0),
                Wo.value ? (m(), _("p", rN, h(Wo.value), 1)) : $("", !0),
                gr.value ? (m(), _("p", oN, h(gr.value), 1)) : $("", !0),
                l("div", sN, [
                  Lt.loading ? (m(), _("span", lN, h(g(b)("library", "Updating catalogue…")), 1)) : Lt.completed ? (m(), _("span", cN, h(g(dn)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(z.value.total || 0))), 1)) : $("", !0)
                ]),
                Ba.value ? (m(), _("section", uN, [
                  l("p", dN, h(hr.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: Ri.value ? g(b)("library", "Items by this creator, sorted by publication context when available.") : pr.value ? g(b)("library", "Items from this publication year, sorted by publication date when available.") : g(b)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, h(Bo.value), 9, fN),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(b)("library", "Discovery summary")
                  }, [
                    l("span", null, h(g(dn)("library", "%n item", "%n items", z.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (m(), _("span", hN, h(O.value.earliestYear) + "–" + h(O.value.latestYear), 1)) : $("", !0),
                    O.value?.datedCount ? (m(), _("span", vN, h(O.value.datedCount) + " " + h(g(b)("library", "dated")), 1)) : $("", !0),
                    O.value?.undatedCount > 0 ? (m(), _("span", gN, h(O.value.undatedCount) + " " + h(g(b)("library", "undated")), 1)) : $("", !0)
                  ], 8, pN),
                  An.value && O.value ? (m(), _("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(b)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, h(g(b)("library", "Publication contents")), 1),
                    l("span", null, h(g(dn)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (m(), _("span", mN, h(O.value.earliestYear) + "–" + h(O.value.latestYear), 1)) : $("", !0),
                    l("span", null, h(O.value.datedCount) + " " + h(g(b)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (m(), _("span", yN, h(O.value.undatedCount) + " " + h(g(b)("library", "without dates yet")), 1)) : $("", !0),
                    l("span", null, h(g(b)("library", "read-only grouping")), 1)
                  ], 8, bN)) : $("", !0),
                  An.value && O.value?.issueGroups?.length ? (m(), _("section", _N, [
                    l("div", null, [
                      l("p", wN, h(g(b)("library", "Issue order")), 1),
                      l("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(b)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, h(g(b)("library", "Read-only issue/date grouping")), 9, SN)
                    ]),
                    l("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(b)("library", "Visual issue strip")
                    }, [
                      (m(!0), _(ie, null, ke(O.value.issueGroups, (s) => (m(), _("a", {
                        key: `strip-${s.label}`,
                        class: "library-issue-strip-card",
                        href: s.items?.[0]?.detailsUrl || "#"
                      }, [
                        l("span", null, h(s.label), 1),
                        l("strong", null, h(s.items?.[0]?.issueLabel || g(b)("library", "Issue")), 1),
                        l("small", null, h(g(dn)("library", "%n item", "%n items", s.items?.length || 0)), 1)
                      ], 8, kN))), 128))
                    ], 8, CN),
                    O.value.gapRanges?.length ? (m(), _("p", TN, h(g(b)("library", "Gap")) + ": " + h(O.value.gapRanges.join(", ")), 1)) : $("", !0),
                    (m(!0), _(ie, null, ke(O.value.issueGroups, (s) => (m(), _("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, h(s.label), 1),
                      l("ol", null, [
                        (m(!0), _(ie, null, ke(s.items, (L, X) => (m(), _("li", {
                          key: L.itemId
                        }, [
                          l("span", EN, h(L.issueLabel), 1),
                          l("a", {
                            href: L.detailsUrl || "#"
                          }, h(L.title), 9, AN),
                          l("small", null, [
                            fe(h(L.publicationType), 1),
                            L.publicationDate ? (m(), _(ie, { key: 0 }, [
                              fe(" · " + h(L.publicationDate), 1)
                            ], 64)) : $("", !0)
                          ]),
                          l("small", xN, [
                            X > 0 ? (m(), _(ie, { key: 0 }, [
                              fe(h(g(b)("library", "Previous issue")), 1)
                            ], 64)) : $("", !0),
                            X > 0 && X < s.items.length - 1 ? (m(), _(ie, { key: 1 }, [
                              fe(" · ")
                            ], 64)) : $("", !0),
                            X < s.items.length - 1 ? (m(), _(ie, { key: 2 }, [
                              fe(h(g(b)("library", "Next issue")), 1)
                            ], 64)) : $("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (m(), _("details", ON, [
                      l("summary", {
                        title: g(b)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, h(g(b)("library", "Unknown issue/date")) + " · " + h(O.value.unknownIssueItems.length), 9, NN)
                    ])) : $("", !0)
                  ])) : $("", !0),
                  l("p", null, [
                    l("a", {
                      href: bt.value,
                      class: "button secondary library-discovery-back-link"
                    }, h(g(b)("library", "Back to full catalogue")), 9, LN)
                  ])
                ])) : $("", !0),
                l("div", RN, [
                  l("p", IN, [
                    fe(h(g(b)("library", "Showing")) + " " + h(z.value.from) + "–" + h(z.value.to) + " " + h(g(b)("library", "of")) + " " + h(z.value.total) + " " + h(g(b)("library", "catalogue items")), 1),
                    re.value.length > 0 ? (m(), _("span", PN, [
                      d[124] || (d[124] = fe(" · ", -1)),
                      l("a", {
                        href: ga(),
                        onClick: ye(ba, ["prevent"])
                      }, h(g(b)("library", "Clear all filters")), 9, $N)
                    ])) : $("", !0)
                  ]),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(b)("library", "Catalogue pagination")
                  }, [
                    l("span", DN, [
                      fe(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                      z.value.total > 0 ? (m(), _("span", MN, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : $("", !0)
                    ]),
                    z.value.previousUrl ? (m(), _("a", {
                      key: 0,
                      href: z.value.previousUrl
                    }, h(g(b)("library", "Previous")), 9, zN)) : (m(), _("span", UN, h(g(b)("library", "Previous")), 1)),
                    z.value.nextUrl ? (m(), _("a", {
                      key: 2,
                      href: z.value.nextUrl
                    }, h(g(b)("library", "Next")), 9, jN)) : (m(), _("span", BN, h(g(b)("library", "Next")), 1))
                  ], 8, FN)
                ]),
                y.value.length === 0 ? (m(), _("div", {
                  key: 4,
                  class: be(["library-empty-content", { "library-first-run-guidance": Ii.value || jn.value, "library-filter-empty-state": Pi.value && !Ii.value && !jn.value }]),
                  role: "status"
                }, [
                  Ii.value ? (m(), _(ie, { key: 0 }, [
                    l("h3", {
                      title: g(b)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, h(g(b)("library", "Start with one Library root")), 9, HN),
                    l("p", VN, [
                      l("a", {
                        href: Ai.value,
                        class: "button primary"
                      }, h(g(b)("library", "Add a Library root")), 9, GN),
                      l("span", KN, h(g(b)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : jn.value ? (m(), _(ie, { key: 1 }, [
                    l("h3", {
                      title: g(b)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, h(g(b)("library", "No enabled Library roots")), 9, qN),
                    l("p", WN, [
                      l("a", {
                        href: Ai.value,
                        class: "button primary"
                      }, h(g(b)("library", "Open Library settings")), 9, YN)
                    ])
                  ], 64)) : Pi.value ? (m(), _(ie, { key: 2 }, [
                    l("h3", {
                      title: g(b)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, h(g(b)("library", "No items match these filters")), 9, XN),
                    re.value.length > 0 ? (m(), _("nav", {
                      key: 0,
                      class: "library-empty-filter-chips",
                      "aria-label": g(b)("library", "Remove active filters")
                    }, [
                      (m(!0), _(ie, null, ke(re.value, (s) => (m(), _("a", {
                        key: `empty-${s.key}`,
                        href: Or(s.key),
                        class: "library-filter-chip",
                        "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                        onClick: ye((L) => Nr(s.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          fe(h(s.label), 1),
                          s.displayValue ? (m(), _(ie, { key: 0 }, [
                            fe(":")
                          ], 64)) : $("", !0)
                        ]),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          d[125] || (d[125] = fe(h(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: s.value
                          }, h(s.displayValue), 9, QN)
                        ], 64)) : $("", !0),
                        d[126] || (d[126] = fe()),
                        d[127] || (d[127] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, JN))), 128))
                    ], 8, ZN)) : $("", !0),
                    yt.value ? (m(), _("p", eL, h(g(b)("library", "Try removing {filter}.", { filter: yt.value.displayValue ? `${yt.value.label}: ${yt.value.displayValue}` : yt.value.label })), 1)) : $("", !0),
                    l("p", tL, [
                      Nt.value ? (m(), _("a", {
                        key: 0,
                        href: Yg(),
                        class: "button secondary library-empty-clear-search",
                        onClick: d[102] || (d[102] = ye((s) => Nr("q"), ["prevent"]))
                      }, h(g(b)("library", "Clear search")), 9, nL)) : $("", !0),
                      re.value.length > 0 ? (m(), _("a", {
                        key: 1,
                        href: ga(),
                        class: "button primary",
                        onClick: ye(ba, ["prevent"])
                      }, h(g(b)("library", "Clear all filters")), 9, iL)) : $("", !0)
                    ])
                  ], 64)) : (m(), _(ie, { key: 3 }, [
                    l("h3", {
                      title: g(b)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, h(g(b)("library", "No catalogue items yet")), 9, aL),
                    l("p", rL, [
                      l("a", {
                        href: Ai.value,
                        class: "button primary"
                      }, h(g(b)("library", "Run a scan from settings")), 9, oL)
                    ])
                  ], 64))
                ], 2)) : $("", !0),
                y.value.length > 0 ? (m(), _("label", sL, [
                  l("input", {
                    type: "checkbox",
                    checked: On.value.length === y.value.length,
                    onChange: Sg
                  }, null, 40, lL),
                  fe(" " + h(g(b)("library", "Select all publications on this page")), 1)
                ])) : $("", !0),
                y.value.length > 0 && xt.value === "list" ? (m(), _("ul", cL, [
                  (m(!0), _(ie, null, ke(y.value, (s) => (m(), _("li", {
                    key: s.id,
                    class: be(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Zo.value.has(Number(s.id)), "library-catalogue-list-row--open": $i.value && Number(ca.value) === Number(s.id) }])
                  }, [
                    l("label", uL, [
                      l("input", {
                        type: "checkbox",
                        checked: Zo.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (L) => wd(s.id, L.currentTarget.checked)
                      }, null, 40, dL)
                    ]),
                    l("div", fL, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (L) => Bn(s, L)
                      }, [
                        l("bdi", hL, h(s.title), 1)
                      ], 8, pL),
                      s.creators ? (m(), _("span", vL, [
                        l("bdi", gL, h(s.creators), 1)
                      ])) : $("", !0)
                    ]),
                    l("dl", bL, [
                      s.publication ? (m(), _("div", mL, [
                        l("dt", null, h(g(b)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", yL, h(s.publication), 1)
                        ])
                      ])) : $("", !0),
                      s.publicationDate ? (m(), _("div", _L, [
                        l("dt", null, h(g(b)("library", "Publication date")), 1),
                        l("dd", null, h(s.publicationDate), 1)
                      ])) : $("", !0),
                      s.extension || s.publicationType ? (m(), _("div", wL, [
                        l("dt", null, h(g(b)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: be(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, h(s.extension ? Va(s.extension) : s.publicationType), 11, SL)
                        ])
                      ])) : $("", !0),
                      s.shelf ? (m(), _("div", CL, [
                        l("dt", null, h(g(b)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", kL, h(s.shelf), 1)
                        ])
                      ])) : $("", !0)
                    ]),
                    l("div", TL, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (L) => ei(s, L)
                      }, h(g(b)("library", "Open")), 9, EL),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (L) => Bn(s, L)
                      }, h(g(b)("library", "Details")), 9, AL)
                    ])
                  ], 2))), 128))
                ])) : y.value.length > 0 ? (m(), _("div", {
                  key: 7,
                  class: be(["library-cover-gallery", _r.value])
                }, [
                  (m(!0), _(ie, null, ke(y.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: be(["library-cover-card", { "library-cover-card--cover-loaded": Lr(s) === "loaded", "library-cover-card--cover-error": Lr(s) === "error", "library-cover-card--selected": Zo.value.has(Number(s.id)), "library-cover-card--open": $i.value && Number(ca.value) === Number(s.id) }])
                  }, [
                    l("label", xL, [
                      l("input", {
                        type: "checkbox",
                        checked: Zo.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (L) => wd(s.id, L.currentTarget.checked)
                      }, null, 40, OL)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": $i.value && Number(ca.value) === Number(s.id) ? "true" : "false",
                      onClick: (L) => Bn(s, L)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, h(g(b)("library", "Details")), 9, LL),
                      l("span", RL, [
                        Lr(s) === "loading" ? (m(), _("span", IL)) : $("", !0),
                        l("img", {
                          class: be(["library-cover-image", { "library-cover-image--loaded": Lr(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (L) => nb(s),
                          onError: (L) => ib(s)
                        }, null, 42, PL),
                        Lr(s) === "error" ? (m(), _("span", $L, h(g(b)("library", "Cover unavailable")), 1)) : $("", !0)
                      ])
                    ], 8, NL),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: ye((L) => Wd(s, L), ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: At.value
                      }, null, 8, DL),
                      d[128] || (d[128] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("input", {
                        type: "hidden",
                        name: "starred",
                        value: s.starred ? "0" : "1"
                      }, null, 8, ML),
                      l("button", {
                        type: "submit",
                        class: be(["library-cover-star-button", { "library-cover-star-button--starred": s.starred }]),
                        "aria-pressed": s.starred ? "true" : "false",
                        title: s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-label": s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-busy": Rr[s.id] ? "true" : void 0,
                        disabled: Rr[s.id],
                        onClick: ye((L) => Wd(s, L), ["prevent"])
                      }, h(s.starred ? "★" : "☆"), 11, zL),
                      Ir[s.id] ? (m(), _("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, h(Ir[s.id]), 9, UL)) : $("", !0)
                    ], 40, FL),
                    l("div", jL, [
                      l("div", BL, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (L) => Bn(s, L)
                          }, [
                            l("bdi", GL, h(s.title), 1)
                          ], 8, VL)
                        ], 8, HL),
                        s.creators ? (m(), _("p", KL, [
                          l("bdi", qL, h(s.creators), 1)
                        ])) : $("", !0),
                        mc(s) || s.extension ? (m(), _("div", WL, [
                          s.extension ? (m(), _("span", YL, [
                            l("bdi", XL, h(Va(s.extension)), 1)
                          ])) : $("", !0),
                          mc(s) ? (m(), _("p", ZL, [
                            l("bdi", JL, h(mc(s)), 1)
                          ])) : $("", !0)
                        ])) : $("", !0),
                        l("div", QL, [
                          l("a", {
                            class: "library-cover-read",
                            href: s.openUrl,
                            onClick: (L) => ei(s, L)
                          }, h(g(b)("library", "Open")), 9, eR),
                          Se(g(tl), {
                            "aria-label": g(b)("library", "More actions")
                          }, {
                            default: Ie(() => [
                              Se(g(Xa), {
                                href: s.filesUrl
                              }, {
                                default: Ie(() => [
                                  fe(h(g(b)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              Se(g(Xa), {
                                href: s.downloadUrl
                              }, {
                                default: Ie(() => [
                                  fe(h(g(b)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              Se(g(Xa), {
                                href: s.detailsUrl
                              }, {
                                default: Ie(() => [
                                  fe(h(g(b)("library", "Maintenance")), 1)
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
                ], 2)) : $("", !0),
                y.value.length > 0 ? (m(), _("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(b)("library", "Catalogue pagination")
                }, [
                  l("span", nR, [
                    fe(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", iR, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : $("", !0)
                  ]),
                  z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, h(g(b)("library", "Previous")), 9, aR)) : (m(), _("span", rR, h(g(b)("library", "Previous")), 1)),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, h(g(b)("library", "Next")), 9, oR)) : (m(), _("span", sR, h(g(b)("library", "Next")), 1))
                ], 8, tR)) : $("", !0)
              ], 10, cx))
            ], 8, HE)
          ]),
          _: 1
        }),
        Se(g(Fk), {
          ref_key: "sidebarComponent",
          ref: da,
          class: "library-native-item-sidebar",
          open: $i.value,
          "no-toggle": "",
          loading: Xt.loading,
          name: Oe.value?.title || g(b)("library", "Publication details"),
          subname: Oe.value?.creators || "",
          role: fa.value ? "dialog" : void 0,
          "aria-modal": fa.value ? "true" : void 0,
          "aria-labelledby": fa.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": fa.value && Oe.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Ad,
          onClosed: Lg,
          onClose: is
        }, {
          default: Ie(() => [
            l("div", lR, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Sd,
                class: "hidden-visually",
                tabindex: "-1"
              }, h(Oe.value?.title || g(b)("library", "Publication details")), 513),
              Xt.loading && !Oe.value ? (m(), _("p", cR, h(g(b)("library", "Loading publication details…")), 1)) : Xt.error ? (m(), _("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Xt.missing ? "status" : "alert"
              }, [
                l("p", null, h(Xt.error), 1),
                Xt.missing ? $("", !0) : (m(), _("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: d[103] || (d[103] = (s) => kr(ca.value, { historyMode: "none" }))
                }, h(g(b)("library", "Try again")), 1))
              ], 8, uR)) : Oe.value ? (m(), _(ie, { key: 2 }, [
                l("p", dR, h(g(b)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", fR, [
                  l("span", pR, h(g(b)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Oe.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, hR),
                  l("div", vR, [
                    l("p", gR, [
                      l("bdi", bR, h(Oe.value.publicationType || g(b)("library", "Publication")), 1),
                      Oe.value.extension ? (m(), _("span", mR, [
                        d[129] || (d[129] = fe(" · ", -1)),
                        l("bdi", yR, h(Va(Oe.value.extension)), 1)
                      ])) : $("", !0)
                    ]),
                    l("div", _R, [
                      l("a", {
                        class: "button primary",
                        href: Oe.value.openUrl,
                        onClick: d[104] || (d[104] = (s) => ei(Oe.value, s))
                      }, h(g(b)("library", "Open")), 9, wR),
                      Se(g(tl), {
                        "aria-label": g(b)("library", "File and maintenance actions")
                      }, {
                        default: Ie(() => [
                          Se(g(Xa), {
                            href: Oe.value.filesUrl
                          }, {
                            default: Ie(() => [
                              fe(h(g(b)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Se(g(Xa), {
                            href: Oe.value.downloadUrl
                          }, {
                            default: Ie(() => [
                              fe(h(g(b)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          Se(g(Xa), {
                            href: Oe.value.detailsUrl
                          }, {
                            default: Ie(() => [
                              fe(h(g(b)("library", "Maintenance (legacy)")), 1)
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
                  "aria-label": g(b)("library", "Publication detail sections")
                }, [
                  (m(), _(ie, null, ke(Eg, (s) => l("button", {
                    key: s.key,
                    type: "button",
                    class: be({ active: ua.value === s.key }),
                    "aria-current": ua.value === s.key ? "page" : void 0,
                    onClick: (L) => ua.value = s.key
                  }, h(g(b)("library", s.label)), 11, CR)), 64))
                ], 8, SR),
                ua.value === "overview" ? (m(), _("section", kR, [
                  l("h3", TR, h(g(b)("library", "Overview")), 1),
                  Oe.value.description ? (m(), _("p", ER, [
                    l("bdi", AR, h(Oe.value.description), 1)
                  ])) : $("", !0),
                  l("dl", xR, [
                    Oe.value.publication ? (m(), _("div", OR, [
                      l("dt", null, h(g(b)("library", "Series")), 1),
                      l("dd", null, h(Oe.value.publication), 1)
                    ])) : $("", !0),
                    Oe.value.publicationDate ? (m(), _("div", NR, [
                      l("dt", null, h(g(b)("library", "Date")), 1),
                      l("dd", null, h(Oe.value.publicationDate), 1)
                    ])) : $("", !0),
                    Oe.value.publisher ? (m(), _("div", LR, [
                      l("dt", null, h(g(b)("library", "Publisher")), 1),
                      l("dd", null, h(Oe.value.publisher), 1)
                    ])) : $("", !0),
                    Oe.value.language ? (m(), _("div", RR, [
                      l("dt", null, h(g(b)("library", "Language")), 1),
                      l("dd", null, h(Oe.value.language), 1)
                    ])) : $("", !0),
                    Oe.value.shelf ? (m(), _("div", IR, [
                      l("dt", null, h(g(b)("library", "Shelf")), 1),
                      l("dd", null, h(Oe.value.shelf), 1)
                    ])) : $("", !0)
                  ])
                ])) : ua.value === "metadata" ? (m(), _("section", PR, [
                  l("h3", $R, h(g(b)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: ye(Og, ["prevent"])
                  }, [
                    l("label", null, [
                      fe(h(g(b)("library", "Title")), 1),
                      Pe(l("input", {
                        "onUpdate:modelValue": d[105] || (d[105] = (s) => Ut.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ft, Ut.title]
                      ])
                    ]),
                    l("label", null, [
                      fe(h(g(b)("library", "Publication date")), 1),
                      Pe(l("input", {
                        "onUpdate:modelValue": d[106] || (d[106] = (s) => Ut.publicationDate = s),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(b)("library", "e.g. 2026")
                      }, null, 8, FR), [
                        [ft, Ut.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, h(g(b)("library", "Identifiers")), 1),
                      (m(!0), _(ie, null, ke(Ut.identifiers, (s, L) => (m(), _("div", {
                        key: L,
                        class: "library-sidebar-identifier"
                      }, [
                        Pe(l("input", {
                          "onUpdate:modelValue": (X) => s.scheme = X,
                          "aria-label": g(b)("library", "Identifier type"),
                          placeholder: g(b)("library", "Identifier type")
                        }, null, 8, DR), [
                          [ft, s.scheme]
                        ]),
                        Pe(l("input", {
                          "onUpdate:modelValue": (X) => s.displayValue = X,
                          "aria-label": g(b)("library", "Identifier value")
                        }, null, 8, MR), [
                          [ft, s.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (X) => xg(L)
                        }, h(g(b)("library", "Remove")), 9, zR)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Ag
                      }, h(g(b)("library", "Add identifier")), 1)
                    ]),
                    l("p", UR, h(g(b)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Nn.error ? (m(), _("p", jR, h(Nn.error), 1)) : Nn.saved ? (m(), _("p", BR, h(g(b)("library", "Metadata saved.")), 1)) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Nn.saving
                    }, h(Nn.saving ? g(b)("library", "Saving…") : g(b)("library", "Save metadata")), 9, HR)
                  ], 32),
                  ns(Oe.value).length ? (m(), _("section", VR, [
                    l("h4", GR, h(g(b)("library", "Scanner suggestions")), 1),
                    l("p", KR, h(g(b)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (m(!0), _(ie, null, ke(ns(Oe.value), (s) => (m(), _("div", {
                        key: s.field
                      }, [
                        l("dt", null, h(s.field) + " · " + h(s.sourceProvenance), 1),
                        l("dd", null, [
                          fe(h(g(b)("library", "Current")) + ": " + h(s.currentValue || "—"), 1),
                          d[130] || (d[130] = l("br", null, null, -1)),
                          fe(h(g(b)("library", "Suggestion")) + ": " + h(s.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : $("", !0)
                ])) : (m(), _("section", qR, [
                  l("h3", WR, h(g(b)("library", "Activity")), 1),
                  l("dl", YR, [
                    l("div", null, [
                      l("dt", null, h(g(b)("library", "Scan status")), 1),
                      l("dd", null, h(Oe.value.scanStatus || "—"), 1)
                    ]),
                    Oe.value.workflowStatus ? (m(), _("div", XR, [
                      l("dt", null, h(g(b)("library", "Workflow")), 1),
                      l("dd", null, h(Oe.value.workflowStatus), 1)
                    ])) : $("", !0),
                    Oe.value.metadataSource ? (m(), _("div", ZR, [
                      l("dt", null, h(g(b)("library", "Metadata source")), 1),
                      l("dd", null, h(Oe.value.metadataSource), 1)
                    ])) : $("", !0),
                    Oe.value.cachedPath ? (m(), _("div", JR, [
                      l("dt", null, h(g(b)("library", "File")), 1),
                      l("dd", QR, [
                        Oe.value.openUrl ? (m(), _("a", {
                          key: 0,
                          href: Oe.value.openUrl,
                          onClick: d[107] || (d[107] = (s) => ei(Oe.value, s))
                        }, [
                          l("bdi", t4, h(Oe.value.cachedPath), 1)
                        ], 8, e4)) : (m(), _("bdi", n4, h(Oe.value.cachedPath), 1))
                      ])
                    ])) : $("", !0)
                  ])
                ])),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(b)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Qo.value,
                    onClick: d[108] || (d[108] = (s) => as(Qo.value))
                  }, h(g(b)("library", "Previous item")), 9, a4),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !es.value,
                    onClick: d[109] || (d[109] = (s) => as(es.value))
                  }, h(g(b)("library", "Next item")), 9, r4)
                ], 8, i4)
              ], 64)) : $("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function u4() {
  window.LibraryStartupWatchdog?.fail();
}
function d4(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Qu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !d4(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  By(c4, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  u4(), console.error("[library] Vue startup failed", e);
}
