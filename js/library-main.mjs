// @__NO_SIDE_EFFECTS__
function Kc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ge = {}, ja = [], yn = () => {
}, Lf = () => !1, Zo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Jo = (e) => e.startsWith("onUpdate:"), mt = Object.assign, Wc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rv = Object.prototype.hasOwnProperty, Ze = (e, t) => Rv.call(e, t), _e = Array.isArray, $i = (e) => ds(e) === "[object Map]", _a = (e) => ds(e) === "[object Set]", Fu = (e) => ds(e) === "[object Date]", xe = (e) => typeof e == "function", nt = (e) => typeof e == "string", On = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", Rf = (e) => (Je(e) || xe(e)) && xe(e.then) && xe(e.catch), If = Object.prototype.toString, ds = (e) => If.call(e), Iv = (e) => ds(e).slice(8, -1), Pf = (e) => ds(e) === "[object Object]", qc = (e) => nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lr = /* @__PURE__ */ Kc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Pv = /-\w/g, Bt = Qo(
  (e) => e.replace(Pv, (t) => t.slice(1).toUpperCase())
), Dv = /\B([A-Z])/g, pi = Qo(
  (e) => e.replace(Dv, "-$1").toLowerCase()
), el = Qo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nl = Qo(
  (e) => e ? `on${el(e)}` : ""
), Ot = (e, t) => !Object.is(e, t), Vs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Df = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, tl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, $v = (e) => {
  const t = nt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let zu;
const nl = () => zu || (zu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function on(e) {
  if (_e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = nt(i) ? Uv(i) : on(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (nt(e) || Je(e))
    return e;
}
const Mv = /;(?![^(]*\))/g, Fv = /:([^]+)/, zv = /\/\*[^]*?\*\//g;
function Uv(e) {
  const t = {};
  return e.replace(zv, "").split(Mv).forEach((n) => {
    if (n) {
      const i = n.split(Fv);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function we(e) {
  let t = "";
  if (nt(e))
    t = e;
  else if (_e(e))
    for (let n = 0; n < e.length; n++) {
      const i = we(e[n]);
      i && (t += i + " ");
    }
  else if (Je(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ys(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !nt(t) && (e.class = we(t)), n && (e.style = on(n)), e;
}
const Bv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Hv = /* @__PURE__ */ Kc(Bv);
function $f(e) {
  return !!e || e === "";
}
function jv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Ui(e[i], t[i]);
  return n;
}
function Uu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && Ui(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Ui(e, t) {
  if (e === t) return !0;
  let n = Fu(e), i = Fu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = On(e), i = On(t), n || i)
    return e === t;
  if (n = _e(e), i = _e(t), n || i)
    return n && i ? jv(e, t) : !1;
  if (n = Je(e), i = Je(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = $i(e), i = $i(t), n || i || (n = _a(e), i = _a(t), n || i))
      return n && i ? Uu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !Ui(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Vv(e, t) {
  return e.findIndex((n) => Ui(n, t));
}
const Mf = (e) => !!(e && e.__v_isRef === !0), p = (e) => nt(e) ? e : e == null ? "" : _e(e) || Je(e) && (e.toString === If || !xe(e.toString)) ? Mf(e) ? p(e.value) : JSON.stringify(e, Ff, 2) : String(e), Ff = (e, t) => Mf(t) ? Ff(e, t.value) : $i(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[xl(i, r) + " =>"] = a, n),
    {}
  )
} : _a(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => xl(n))
} : On(t) ? xl(t) : Je(t) && !_e(t) && !Pf(t) ? String(t) : t, xl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    On(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Gv(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let kt;
class Kv {
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
function Wv() {
  return kt;
}
let tt;
const Ll = /* @__PURE__ */ new WeakSet();
class zf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kt && (kt.active ? kt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ll.has(this) && (Ll.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Bf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bu(this), Hf(this);
    const t = tt, n = An;
    tt = this, An = !0;
    try {
      return this.fn();
    } finally {
      jf(this), tt = t, An = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Zc(t);
      this.deps = this.depsTail = void 0, Bu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ll.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hc(this) && this.run();
  }
  get dirty() {
    return hc(this);
  }
}
let Uf = 0, Rr, Ir;
function Bf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ir, Ir = e;
    return;
  }
  e.next = Rr, Rr = e;
}
function Yc() {
  Uf++;
}
function Xc() {
  if (--Uf > 0)
    return;
  if (Ir) {
    let t = Ir;
    for (Ir = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Rr; ) {
    let t = Rr;
    for (Rr = void 0; t; ) {
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
function Hf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function jf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Zc(i), qv(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function hc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Vf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Vf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wr) || (e.globalVersion = Wr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = tt, i = An;
  tt = e, An = !0;
  try {
    Hf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Ot(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    tt = n, An = i, jf(e), e.flags &= -3;
  }
}
function Zc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Zc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function qv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let An = !0;
const Gf = [];
function ui() {
  Gf.push(An), An = !1;
}
function di() {
  const e = Gf.pop();
  An = e === void 0 ? !0 : e;
}
function Bu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = tt;
    tt = void 0;
    try {
      t();
    } finally {
      tt = n;
    }
  }
}
let Wr = 0;
class Yv {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class il {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!tt || !An || tt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== tt)
      n = this.activeLink = new Yv(tt, this), tt.deps ? (n.prevDep = tt.depsTail, tt.depsTail.nextDep = n, tt.depsTail = n) : tt.deps = tt.depsTail = n, Kf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = tt.depsTail, n.nextDep = void 0, tt.depsTail.nextDep = n, tt.depsTail = n, tt.deps === n && (tt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wr++, this.notify(t);
  }
  notify(t) {
    Yc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Xc();
    }
  }
}
function Kf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Kf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const pc = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ Symbol(
  ""
), vc = /* @__PURE__ */ Symbol(
  ""
), qr = /* @__PURE__ */ Symbol(
  ""
);
function Ft(e, t, n) {
  if (An && tt) {
    let i = pc.get(e);
    i || pc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new il()), a.map = i, a.key = n), a.track();
  }
}
function ii(e, t, n, i, a, r) {
  const s = pc.get(e);
  if (!s) {
    Wr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Yc(), t === "clear")
    s.forEach(o);
  else {
    const l = _e(e), d = l && qc(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, S) => {
        (S === "length" || S === qr || !On(S) && S >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(qr)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(ma)), $i(e) && o(s.get(vc)));
          break;
        case "delete":
          l || (o(s.get(ma)), $i(e) && o(s.get(vc)));
          break;
        case "set":
          $i(e) && o(s.get(ma));
          break;
      }
  }
  Xc();
}
function Da(e) {
  const t = /* @__PURE__ */ We(e);
  return t === e ? t : (Ft(t, "iterate", qr), /* @__PURE__ */ _n(e) ? t : t.map(Nn));
}
function al(e) {
  return Ft(e = /* @__PURE__ */ We(e), "iterate", qr), e;
}
function Un(e, t) {
  return /* @__PURE__ */ fi(e) ? Za(/* @__PURE__ */ ba(e) ? Nn(t) : t) : Nn(t);
}
const Xv = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rl(this, Symbol.iterator, (e) => Un(this, e));
  },
  concat(...e) {
    return Da(this).concat(
      ...e.map((t) => _e(t) ? Da(t) : t)
    );
  },
  entries() {
    return Rl(this, "entries", (e) => (e[1] = Un(this, e[1]), e));
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
    return Il(this, "includes", e);
  },
  indexOf(...e) {
    return Il(this, "indexOf", e);
  },
  join(e) {
    return Da(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Il(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Yn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return vr(this, "pop");
  },
  push(...e) {
    return vr(this, "push", e);
  },
  reduce(e, ...t) {
    return Hu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Hu(this, "reduceRight", e, t);
  },
  shift() {
    return vr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Yn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return vr(this, "splice", e);
  },
  toReversed() {
    return Da(this).toReversed();
  },
  toSorted(e) {
    return Da(this).toSorted(e);
  },
  toSpliced(...e) {
    return Da(this).toSpliced(...e);
  },
  unshift(...e) {
    return vr(this, "unshift", e);
  },
  values() {
    return Rl(this, "values", (e) => Un(this, e));
  }
};
function Rl(e, t, n) {
  const i = al(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ _n(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Zv = Array.prototype;
function Yn(e, t, n, i, a, r) {
  const s = al(e), o = s !== e && !/* @__PURE__ */ _n(e), l = s[t];
  if (l !== Zv[t]) {
    const h = l.apply(e, r);
    return o ? Nn(h) : h;
  }
  let d = n;
  s !== e && (o ? d = function(h, S) {
    return n.call(this, Un(e, h), S, e);
  } : n.length > 2 && (d = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const u = l.call(s, d, i);
  return o && a ? a(u) : u;
}
function Hu(e, t, n, i) {
  const a = al(e), r = a !== e && !/* @__PURE__ */ _n(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = Un(e, d)), n.call(this, d, Un(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Un(e, l) : l;
}
function Il(e, t, n) {
  const i = /* @__PURE__ */ We(e);
  Ft(i, "iterate", qr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ eu(n[0]) ? (n[0] = /* @__PURE__ */ We(n[0]), i[t](...n)) : a;
}
function vr(e, t, n = []) {
  ui(), Yc();
  const i = (/* @__PURE__ */ We(e))[t].apply(e, n);
  return Xc(), di(), i;
}
const Jv = /* @__PURE__ */ Kc("__proto__,__v_isRef,__isVue"), Wf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(On)
);
function Qv(e) {
  On(e) || (e = String(e));
  const t = /* @__PURE__ */ We(this);
  return Ft(t, "has", e), t.hasOwnProperty(e);
}
class qf {
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
      return i === (a ? r ? cg : Jf : r ? Zf : Xf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = _e(t);
    if (!a) {
      let l;
      if (s && (l = Xv[n]))
        return l;
      if (n === "hasOwnProperty")
        return Qv;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ht(t) ? t : i
    );
    if ((On(n) ? Wf.has(n) : Jv(n)) || (a || Ft(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ Ht(o)) {
      const l = s && qc(n) ? o : o.value;
      return a && Je(l) ? /* @__PURE__ */ Yr(l) : l;
    }
    return Je(o) ? a ? /* @__PURE__ */ Yr(o) : /* @__PURE__ */ Mt(o) : o;
  }
}
class Yf extends qf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = _e(t) && qc(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ fi(r);
      if (!/* @__PURE__ */ _n(i) && !/* @__PURE__ */ fi(i) && (r = /* @__PURE__ */ We(r), i = /* @__PURE__ */ We(i)), !s && /* @__PURE__ */ Ht(r) && !/* @__PURE__ */ Ht(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ze(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Ht(t) ? t : a
    );
    return t === /* @__PURE__ */ We(a) && l && (o ? Ot(i, r) && ii(t, "set", n, i) : ii(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ii(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!On(n) || !Wf.has(n)) && Ft(t, "has", n), i;
  }
  ownKeys(t) {
    return Ft(
      t,
      "iterate",
      _e(t) ? "length" : ma
    ), Reflect.ownKeys(t);
  }
}
class eg extends qf {
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
const tg = /* @__PURE__ */ new Yf(), ng = /* @__PURE__ */ new eg(), ig = /* @__PURE__ */ new Yf(!0);
const gc = (e) => e, xs = (e) => Reflect.getPrototypeOf(e);
function ag(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ We(a), s = $i(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? gc : t ? Za : Nn;
    return !t && Ft(
      r,
      "iterate",
      l ? vc : ma
    ), mt(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: S } = d.next();
          return S ? { value: h, done: S } : {
            value: o ? [u(h[0]), u(h[1])] : u(h),
            done: S
          };
        }
      }
    );
  };
}
function Ls(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function rg(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ We(r), o = /* @__PURE__ */ We(a);
      e || (Ot(a, o) && Ft(s, "get", a), Ft(s, "get", o));
      const { has: l } = xs(s), d = t ? gc : e ? Za : Nn;
      if (l.call(s, a))
        return d(r.get(a));
      if (l.call(s, o))
        return d(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Ft(/* @__PURE__ */ We(a), "iterate", ma), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ We(r), o = /* @__PURE__ */ We(a);
      return e || (Ot(a, o) && Ft(s, "has", a), Ft(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ We(o), d = t ? gc : e ? Za : Nn;
      return !e && Ft(l, "iterate", ma), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return mt(
    n,
    e ? {
      add: Ls("add"),
      set: Ls("set"),
      delete: Ls("delete"),
      clear: Ls("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ We(this), s = xs(r), o = /* @__PURE__ */ We(a), l = !t && !/* @__PURE__ */ _n(a) && !/* @__PURE__ */ fi(a) ? o : a;
        return s.has.call(r, l) || Ot(a, l) && s.has.call(r, a) || Ot(o, l) && s.has.call(r, o) || (r.add(l), ii(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ _n(r) && !/* @__PURE__ */ fi(r) && (r = /* @__PURE__ */ We(r));
        const s = /* @__PURE__ */ We(this), { has: o, get: l } = xs(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ We(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? Ot(r, u) && ii(s, "set", a, r) : ii(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ We(this), { has: s, get: o } = xs(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ We(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && ii(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ We(this), r = a.size !== 0, s = a.clear();
        return r && ii(
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
    n[a] = ag(a, e, t);
  }), n;
}
function Jc(e, t) {
  const n = rg(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    r
  );
}
const sg = {
  get: /* @__PURE__ */ Jc(!1, !1)
}, og = {
  get: /* @__PURE__ */ Jc(!1, !0)
}, lg = {
  get: /* @__PURE__ */ Jc(!0, !1)
};
const Xf = /* @__PURE__ */ new WeakMap(), Zf = /* @__PURE__ */ new WeakMap(), Jf = /* @__PURE__ */ new WeakMap(), cg = /* @__PURE__ */ new WeakMap();
function ug(e) {
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
  return /* @__PURE__ */ fi(e) ? e : Qc(
    e,
    !1,
    tg,
    sg,
    Xf
  );
}
// @__NO_SIDE_EFFECTS__
function dg(e) {
  return Qc(
    e,
    !1,
    ig,
    og,
    Zf
  );
}
// @__NO_SIDE_EFFECTS__
function Yr(e) {
  return Qc(
    e,
    !0,
    ng,
    lg,
    Jf
  );
}
function Qc(e, t, n, i, a) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = ug(Iv(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
  return /* @__PURE__ */ fi(e) ? /* @__PURE__ */ ba(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function fi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function eu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ We(t) : e;
}
function fg(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && Df(e, "__v_skip", !0), e;
}
const Nn = (e) => Je(e) ? /* @__PURE__ */ Mt(e) : e, Za = (e) => Je(e) ? /* @__PURE__ */ Yr(e) : e;
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return eh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Qf(e) {
  return eh(e, !0);
}
function eh(e, t) {
  return /* @__PURE__ */ Ht(e) ? e : new hg(e, t);
}
class hg {
  constructor(t, n) {
    this.dep = new il(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ We(t), this._value = n ? t : Nn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ _n(t) || /* @__PURE__ */ fi(t);
    t = i ? t : /* @__PURE__ */ We(t), Ot(t, n) && (this._rawValue = t, this._value = i ? t : Nn(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Ht(e) ? e.value : e;
}
function oi(e) {
  return xe(e) ? e() : g(e);
}
const pg = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Ht(a) && !/* @__PURE__ */ Ht(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function th(e) {
  return /* @__PURE__ */ ba(e) ? e : new Proxy(e, pg);
}
class vg {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new il(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function gg(e) {
  return new vg(e);
}
class mg {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new il(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    tt !== this)
      return Bf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Vf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function bg(e, t, n = !1) {
  let i, a;
  return xe(e) ? i = e : (i = e.get, a = e.set), new mg(i, a, n);
}
const Rs = {}, Xs = /* @__PURE__ */ new WeakMap();
let la;
function yg(e, t = !1, n = la) {
  if (n) {
    let i = Xs.get(n);
    i || Xs.set(n, i = []), i.push(e);
  }
}
function _g(e, t, n = Ge) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = (F) => a ? F : /* @__PURE__ */ _n(F) || a === !1 || a === 0 ? ai(F, 1) : ai(F);
  let u, h, S, E, N = !1, A = !1;
  if (/* @__PURE__ */ Ht(e) ? (h = () => e.value, N = /* @__PURE__ */ _n(e)) : /* @__PURE__ */ ba(e) ? (h = () => d(e), N = !0) : _e(e) ? (A = !0, N = e.some((F) => /* @__PURE__ */ ba(F) || /* @__PURE__ */ _n(F)), h = () => e.map((F) => {
    if (/* @__PURE__ */ Ht(F))
      return F.value;
    if (/* @__PURE__ */ ba(F))
      return d(F);
    if (xe(F))
      return l ? l(F, 2) : F();
  })) : xe(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (S) {
      ui();
      try {
        S();
      } finally {
        di();
      }
    }
    const F = la;
    la = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      la = F;
    }
  } : h = yn, t && a) {
    const F = h, Z = a === !0 ? 1 / 0 : a;
    h = () => ai(F(), Z);
  }
  const O = Wv(), I = () => {
    u.stop(), O && O.active && Wc(O.effects, u);
  };
  if (r && t) {
    const F = t;
    t = (...Z) => {
      const D = F(...Z);
      return I(), D;
    };
  }
  let M = A ? new Array(e.length).fill(Rs) : Rs;
  const K = (F) => {
    if (!(!(u.flags & 1) || !u.dirty && !F))
      if (t) {
        const Z = u.run();
        if (F || a || N || (A ? Z.some((D, J) => Ot(D, M[J])) : Ot(Z, M))) {
          S && S();
          const D = la;
          la = u;
          try {
            const J = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              M === Rs ? void 0 : A && M[0] === Rs ? [] : M,
              E
            ];
            M = Z, l ? l(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            la = D;
          }
        }
      } else
        u.run();
  };
  return o && o(K), u = new zf(h), u.scheduler = s ? () => s(K, !1) : K, E = (F) => yg(F, !1, u), S = u.onStop = () => {
    const F = Xs.get(u);
    if (F) {
      if (l)
        l(F, 4);
      else
        for (const Z of F) Z();
      Xs.delete(u);
    }
  }, t ? i ? K(!0) : M = u.run() : s ? s(K.bind(null, !0), !0) : u.run(), I.pause = u.pause.bind(u), I.resume = u.resume.bind(u), I.stop = I, I;
}
function ai(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ht(e))
    ai(e.value, t, n);
  else if (_e(e))
    for (let i = 0; i < e.length; i++)
      ai(e[i], t, n);
  else if (_a(e) || $i(e))
    e.forEach((i) => {
      ai(i, t, n);
    });
  else if (Pf(e)) {
    for (const i in e)
      ai(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ai(e[i], t, n);
  }
  return e;
}
function fs(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    rl(a, t, n);
  }
}
function wn(e, t, n, i) {
  if (xe(e)) {
    const a = fs(e, t, n, i);
    return a && Rf(a) && a.catch((r) => {
      rl(r, t, n);
    }), a;
  }
  if (_e(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(wn(e[r], t, n, i));
    return a;
  }
}
function rl(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ge;
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
      ui(), fs(r, null, 10, [
        e,
        l,
        d
      ]), di();
      return;
    }
  }
  wg(e, n, a, i, s);
}
function wg(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const qt = [];
let $n = -1;
const Va = [];
let Pi = null, Ua = 0;
const nh = /* @__PURE__ */ Promise.resolve();
let Zs = null;
function an(e) {
  const t = Zs || nh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Sg(e) {
  let t = $n + 1, n = qt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = qt[i], r = Xr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function tu(e) {
  if (!(e.flags & 1)) {
    const t = Xr(e), n = qt[qt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xr(n) ? qt.push(e) : qt.splice(Sg(t), 0, e), e.flags |= 1, ih();
  }
}
function ih() {
  Zs || (Zs = nh.then(sh));
}
function ah(e) {
  if (!_e(e))
    Pi && e.id === -1 ? Pi.splice(Ua + 1, 0, e) : e.flags & 1 || (Va.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Va.push(e[t]);
  ih();
}
function ju(e, t, n = $n + 1) {
  for (; n < qt.length; n++) {
    const i = qt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      qt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function rh(e) {
  if (Va.length) {
    const t = [...new Set(Va)].sort(
      (n, i) => Xr(n) - Xr(i)
    );
    if (Va.length = 0, Pi) {
      for (let n = 0; n < t.length; n++)
        Pi.push(t[n]);
      return;
    }
    for (Pi = t, Ua = 0; Ua < Pi.length; Ua++) {
      const n = Pi[Ua];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pi = null, Ua = 0;
  }
}
const Xr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function sh(e) {
  try {
    for ($n = 0; $n < qt.length; $n++) {
      const t = qt[$n];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), fs(
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
    $n = -1, qt.length = 0, rh(), Zs = null, (qt.length || Va.length) && sh();
  }
}
let xt = null, sl = null;
function Js(e) {
  const t = xt;
  return xt = e, sl = e && e.type.__scopeId || null, t;
}
function Cg(e) {
  sl = e;
}
function Tg() {
  sl = null;
}
const Eg = (e) => ke;
function ke(e, t = xt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && io(-1);
    const r = Js(t), s = li.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = li.length; l > s; l--) lu();
      Js(r), i._d && io(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Xe(e, t) {
  if (xt === null)
    return e;
  const n = fl(xt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = Ge] = t[a];
    r && (xe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ai(s), i.push({
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
function na(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (ui(), wn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), di());
  }
}
function gn(e, t) {
  if (Ut) {
    let n = Ut.provides;
    const i = Ut.parent && Ut.parent.provides;
    i === n && (n = Ut.provides = Object.create(i)), n[e] = t;
  }
}
function zt(e, t, n = !1) {
  const i = Sa();
  if (i || Ka) {
    let a = Ka ? Ka._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && xe(t) ? t.call(i && i.proxy) : t;
  }
}
const Ag = /* @__PURE__ */ Symbol.for("v-scx"), kg = () => zt(Ag);
function Og(e, t) {
  return ol(e, null, t);
}
function Ng(e, t) {
  return ol(
    e,
    null,
    { flush: "sync" }
  );
}
function lt(e, t, n) {
  return ol(e, t, n);
}
function ol(e, t, n = Ge) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = mt({}, n), l = t && i || !t && r !== "post";
  let d;
  if (ns) {
    if (r === "sync") {
      const E = kg();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = yn, E.resume = yn, E.pause = yn, E;
    }
  }
  const u = Ut;
  o.call = (E, N, A) => wn(E, u, N, A);
  let h = !1;
  r === "post" ? o.scheduler = (E) => {
    Wt(E, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (E, N) => {
    N ? E() : tu(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const S = _g(e, t, o);
  return ns && (d ? d.push(S) : l && S()), S;
}
function xg(e, t, n) {
  const i = this.proxy, a = nt(e) ? e.includes(".") ? oh(i, e) : () => i[e] : e.bind(i, i);
  let r;
  xe(t) ? r = t : (r = t.handler, n = t);
  const s = vs(this), o = ol(a, r.bind(i), n);
  return s(), o;
}
function oh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Li = /* @__PURE__ */ new WeakMap(), lh = /* @__PURE__ */ Symbol("_vte"), ll = (e) => e.__isTeleport, ua = (e) => e && (e.disabled || e.disabled === ""), Lg = (e) => e && (e.defer || e.defer === ""), Vu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Gu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, mc = (e, t) => {
  const n = e && e.to;
  return nt(n) ? t ? t(n) : null : n;
}, Rg = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: S,
      o: { insert: E, querySelector: N, createText: A, createComment: O, parentNode: I }
    } = d, M = ua(t.props);
    let { dynamicChildren: K } = t;
    const F = (J, fe, X) => {
      J.shapeFlag & 16 && u(
        J.children,
        fe,
        X,
        a,
        r,
        s,
        o,
        l
      );
    }, Z = (J = t) => {
      const fe = ua(J.props), X = J.target = mc(J.props, N), re = bc(X, J, A, E);
      X && (s !== "svg" && Vu(X) ? s = "svg" : s !== "mathml" && Gu(X) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), fe || (F(J, X, re), Er(J, !1)));
    }, D = (J) => {
      const fe = () => {
        if (Li.get(J) === fe) {
          if (Li.delete(J), ua(J.props)) {
            const X = I(J.el) || n;
            F(J, X, J.anchor), Er(J, !0);
          }
          Z(J);
        }
      };
      Li.set(J, fe), Wt(fe, r);
    };
    if (e == null) {
      const J = t.el = A(""), fe = t.anchor = A("");
      if (E(J, n, i), E(fe, n, i), Lg(t.props) || r && r.pendingBranch) {
        D(t);
        return;
      }
      M && (F(t, n, fe), Er(t, !0)), Z();
    } else {
      t.el = e.el;
      const J = t.anchor = e.anchor, fe = Li.get(e);
      if (fe) {
        fe.flags |= 8, Li.delete(e), D(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, re = t.targetAnchor = e.targetAnchor, be = ua(e.props), te = be ? n : X, ae = be ? J : re;
      if (s === "svg" || Vu(X) ? s = "svg" : (s === "mathml" || Gu(X)) && (s = "mathml"), K ? (S(
        e.dynamicChildren,
        K,
        te,
        a,
        r,
        s,
        o
      ), ou(e, t, !0)) : l || h(
        e,
        t,
        te,
        ae,
        a,
        r,
        s,
        o,
        !1
      ), M)
        be ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Is(
          t,
          n,
          J,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const P = mc(t.props, N);
        P && (t.target = P, Is(
          t,
          P,
          null,
          d,
          0
        ));
      } else be && Is(
        t,
        X,
        re,
        d,
        1
      );
      Er(t, M);
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
      props: S
    } = e, E = ua(S), N = r || !E, A = Li.get(e);
    if (A && (A.flags |= 8, Li.delete(e)), h && (a(d), a(u)), r && a(l), !A && (E || h) && s & 16)
      for (let O = 0; O < o.length; O++) {
        const I = o[O];
        i(
          I,
          t,
          n,
          N,
          !!I.dynamicChildren
        );
      }
  },
  move: Is,
  hydrate: Ig
};
function Is(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: d, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !Li.has(e) && (!h || ua(u)) && l & 16)
    for (let S = 0; S < d.length; S++)
      a(
        d[S],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function Ig(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: d, createText: u }
}, h) {
  function S(O, I) {
    let M = I;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, O._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      M = s(M);
    }
  }
  function E(O, I) {
    I.anchor = h(
      s(O),
      I,
      o(O),
      n,
      i,
      a,
      r
    );
  }
  const N = t.target = mc(
    t.props,
    l
  ), A = ua(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), S(N, O), t.targetAnchor || bc(
      N,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === N ? e : null
    )) : (t.anchor = s(e), S(N, O), t.targetAnchor || bc(N, t, u, d), h(
      O && s(O),
      t,
      N,
      n,
      i,
      a,
      r
    ))), Er(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const ch = Rg;
function Er(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function bc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[lh] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const mn = /* @__PURE__ */ Symbol("_leaveCb"), gr = /* @__PURE__ */ Symbol("_enterCb");
function Pg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ji(() => {
    e.isMounted = !0;
  }), Ja(() => {
    e.isUnmounting = !0;
  }), e;
}
const fn = [Function, Array], uh = {
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
}, dh = (e) => {
  const t = e.subTree;
  return t.component ? dh(t.component) : t;
}, Dg = {
  name: "BaseTransition",
  props: uh,
  setup(e, { slots: t }) {
    const n = Sa(), i = Pg();
    return () => {
      const a = t.default && ph(t.default(), !0), r = a && a.length ? fh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? H() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ We(e), { mode: o } = s;
      if (i.isLeaving)
        return Pl(r);
      const l = Qs(r);
      if (!l)
        return Pl(r);
      let d = yc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== Nt && Zr(l, d);
      let u = n.subTree && Qs(n.subTree);
      if (u && u.type !== Nt && !da(u, l) && dh(n).type !== Nt) {
        let h = yc(
          u,
          s,
          i,
          n
        );
        if (Zr(u, h), o === "out-in" && l.type !== Nt)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Pl(r);
        o === "in-out" && l.type !== Nt ? h.delayLeave = (S, E, N) => {
          const A = hh(
            i,
            u
          );
          A[String(u.key)] = u, S[mn] = () => {
            E(), S[mn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            N(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function fh(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Nt) {
        t = n;
        break;
      }
  }
  return t;
}
const $g = Dg;
function hh(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function yc(e, t, n, i, a) {
  const {
    appear: r,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: S,
    onLeave: E,
    onAfterLeave: N,
    onLeaveCancelled: A,
    onBeforeAppear: O,
    onAppear: I,
    onAfterAppear: M,
    onAppearCancelled: K
  } = t, F = String(e.key), Z = hh(n, e), D = (X, re) => {
    X && wn(
      X,
      i,
      9,
      re
    );
  }, J = (X, re) => {
    const be = re[1];
    D(X, re), _e(X) ? X.every((te) => te.length <= 1) && be() : X.length <= 1 && be();
  }, fe = {
    mode: s,
    persisted: o,
    beforeEnter(X) {
      let re = l;
      if (!n.isMounted)
        if (r)
          re = O || l;
        else
          return;
      X[mn] && X[mn](
        !0
        /* cancelled */
      );
      const be = Z[F];
      be && da(e, be) && be.el[mn] && be.el[mn](), D(re, [X]);
    },
    enter(X) {
      if (Z[F] === e) return;
      let re = d, be = u, te = h;
      if (!n.isMounted)
        if (r)
          re = I || d, be = M || u, te = K || h;
        else
          return;
      let ae = !1;
      X[gr] = ($) => {
        ae || (ae = !0, $ ? D(te, [X]) : D(be, [X]), fe.delayedLeave && fe.delayedLeave(), X[gr] = void 0);
      };
      const P = X[gr].bind(null, !1);
      re ? J(re, [X, P]) : P();
    },
    leave(X, re) {
      const be = String(e.key);
      if (X[gr] && X[gr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return re();
      D(S, [X]);
      let te = !1;
      X[mn] = (P) => {
        te || (te = !0, re(), P ? D(A, [X]) : D(N, [X]), X[mn] = void 0, Z[be] === e && delete Z[be]);
      };
      const ae = X[mn].bind(null, !1);
      Z[be] = e, E ? J(E, [X, ae]) : ae();
    },
    clone(X) {
      const re = yc(
        X,
        t,
        n,
        i,
        a
      );
      return a && a(re), re;
    }
  };
  return fe;
}
function Pl(e) {
  if (cl(e))
    return e = Bi(e), e.children = null, e;
}
function Qs(e) {
  if (!cl(e))
    return ll(e.type) && e.children ? fh(e.children) : e;
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
function Zr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Zr(
      ll(n.type) && Qs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ph(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === de ? (s.patchFlag & 128 && a++, i = i.concat(
      ph(s.children, t, o)
    )) : (t || s.type !== Nt) && i.push(o != null ? Bi(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Lt(e, t) {
  return xe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function vh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Mg(e) {
  const t = Sa(), n = /* @__PURE__ */ Qf(null);
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
function Ku(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const eo = /* @__PURE__ */ new WeakMap();
function Pr(e, t, n, i, a = !1) {
  if (_e(e)) {
    e.forEach(
      (A, O) => Pr(
        A,
        t && (_e(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ga(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Pr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? fl(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === Ge ? o.refs = {} : o.refs, h = o.setupState, S = /* @__PURE__ */ We(h), E = h === Ge ? Lf : (A) => Ku(u, A) ? !1 : Ze(S, A), N = (A, O) => !(O && Ku(u, O));
  if (d != null && d !== l) {
    if (Wu(t), nt(d))
      u[d] = null, E(d) && (h[d] = null);
    else if (/* @__PURE__ */ Ht(d)) {
      const A = t;
      N(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (xe(l))
    fs(l, o, 12, [s, u]);
  else {
    const A = nt(l), O = /* @__PURE__ */ Ht(l);
    if (A || O) {
      const I = () => {
        if (e.f) {
          const M = A ? E(l) ? h[l] : u[l] : N() || !e.k ? l.value : u[e.k];
          if (a)
            _e(M) && Wc(M, r);
          else if (_e(M))
            M.includes(r) || M.push(r);
          else if (A)
            u[l] = [r], E(l) && (h[l] = u[l]);
          else {
            const K = [r];
            N(l, e.k) && (l.value = K), e.k && (u[e.k] = K);
          }
        } else A ? (u[l] = s, E(l) && (h[l] = s)) : O && (N(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const M = () => {
          I(), eo.delete(e);
        };
        M.id = -1, eo.set(e, M), Wt(M, n);
      } else
        Wu(e), I();
    }
  }
}
function Wu(e) {
  const t = eo.get(e);
  t && (t.flags |= 8, eo.delete(e));
}
nl().requestIdleCallback;
nl().cancelIdleCallback;
const Ga = (e) => !!e.type.__asyncLoader, cl = (e) => e.type.__isKeepAlive;
function Fg(e, t) {
  gh(e, "a", t);
}
function zg(e, t) {
  gh(e, "da", t);
}
function gh(e, t, n = Ut) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ul(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      cl(a.parent.vnode) && Ug(i, t, n, a), a = a.parent;
  }
}
function Ug(e, t, n, i) {
  const a = ul(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  hs(() => {
    Wc(i[t], a);
  }, n);
}
function ul(e, t, n = Ut, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      ui();
      const o = vs(n), l = wn(t, n, e, s);
      return o(), di(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const vi = (e) => (t, n = Ut) => {
  (!ns || e === "sp") && ul(e, (...i) => t(...i), n);
}, mh = vi("bm"), ji = vi("m"), bh = vi(
  "bu"
), Bg = vi("u"), Ja = vi(
  "bum"
), hs = vi("um"), Hg = vi(
  "sp"
), jg = vi("rtg"), Vg = vi("rtc");
function Gg(e, t = Ut) {
  ul("ec", e, t);
}
const nu = "components", Kg = "directives";
function Ue(e, t) {
  return au(nu, e, !0, t) || e;
}
const yh = /* @__PURE__ */ Symbol.for("v-ndc");
function iu(e) {
  return nt(e) ? au(nu, e, !1) || e : e || yh;
}
function qu(e) {
  return au(Kg, e);
}
function au(e, t, n = !0, i = !1) {
  const a = xt || Ut;
  if (a) {
    const r = a.type;
    if (e === nu) {
      const o = Om(
        r,
        !1
      );
      if (o && (o === t || o === Bt(t) || o === el(Bt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Yu(a[e] || r[e], t) || // global registration
      Yu(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function Yu(e, t) {
  return e && (e[t] || e[Bt(t)] || e[el(Bt(t))]);
}
function Fe(e, t, n, i) {
  let a;
  const r = n, s = _e(e);
  if (s || nt(e)) {
    const o = s && /* @__PURE__ */ ba(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ _n(e), d = /* @__PURE__ */ fi(e), e = al(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? d ? Za(Nn(e[u])) : Nn(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (Je(e))
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
function Pe(e, t, n, i, a, r) {
  if (n == null && (n = {}), xt.ce || xt.parent && Ga(xt.parent) && xt.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), _(), Me(
      de,
      null,
      [ye("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = li.length;
  _();
  let l;
  try {
    const d = s && _h(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = Me(
      de,
      {
        key: (u && !On(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = li.length; u > o; u--) lu();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function _h(e) {
  return e.some((t) => Qr(t) ? !(t.type === Nt || t.type === de && !_h(t.children)) : !0) ? e : null;
}
const _c = (e) => e ? Hh(e) ? fl(e) : _c(e.parent) : null, Dr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ mt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _c(e.parent),
    $root: (e) => _c(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ch(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      tu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = an.bind(e.proxy)),
    $watch: (e) => xg.bind(e)
  })
), Dl = (e, t) => e !== Ge && !e.__isScriptSetup && Ze(e, t), Wg = {
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
        if (Dl(i, t))
          return s[t] = 1, i[t];
        if (a !== Ge && Ze(a, t))
          return s[t] = 2, a[t];
        if (Ze(r, t))
          return s[t] = 3, r[t];
        if (n !== Ge && Ze(n, t))
          return s[t] = 4, n[t];
        wc && (s[t] = 0);
      }
    }
    const d = Dr[t];
    let u, h;
    if (d)
      return t === "$attrs" && Ft(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ge && Ze(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Ze(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return Dl(a, t) ? (a[t] = n, !0) : i !== Ge && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Ge && o[0] !== "$" && Ze(e, o) || Dl(t, o) || Ze(r, o) || Ze(i, o) || Ze(Dr, o) || Ze(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function qg() {
  return wh().slots;
}
function Yg() {
  return wh().attrs;
}
function wh(e) {
  const t = Sa();
  return t.setupContext || (t.setupContext = Vh(t));
}
function to(e) {
  return _e(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Xg(e, t) {
  return !e || !t ? e || t : _e(e) && _e(t) ? e.concat(t) : mt({}, to(e), to(t));
}
let wc = !0;
function Zg(e) {
  const t = Ch(e), n = e.proxy, i = e.ctx;
  wc = !1, t.beforeCreate && Xu(t.beforeCreate, e, "bc");
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
    mounted: S,
    beforeUpdate: E,
    updated: N,
    activated: A,
    deactivated: O,
    beforeDestroy: I,
    beforeUnmount: M,
    destroyed: K,
    unmounted: F,
    render: Z,
    renderTracked: D,
    renderTriggered: J,
    errorCaptured: fe,
    serverPrefetch: X,
    // public API
    expose: re,
    inheritAttrs: be,
    // assets
    components: te,
    directives: ae,
    filters: P
  } = t;
  if (d && Jg(d, i, null), s)
    for (const se in s) {
      const ie = s[se];
      xe(ie) && (i[se] = ie.bind(n));
    }
  if (a) {
    const se = a.call(n, n);
    Je(se) && (e.data = /* @__PURE__ */ Mt(se));
  }
  if (wc = !0, r)
    for (const se in r) {
      const ie = r[se], pe = xe(ie) ? ie.bind(n, n) : xe(ie.get) ? ie.get.bind(n, n) : yn, he = !xe(ie) && xe(ie.set) ? ie.set.bind(n) : yn, Se = W({
        get: pe,
        set: he
      });
      Object.defineProperty(i, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (ge) => Se.value = ge
      });
    }
  if (o)
    for (const se in o)
      Sh(o[se], i, n, se);
  if (l) {
    const se = xe(l) ? l.call(n) : l;
    Reflect.ownKeys(se).forEach((ie) => {
      gn(ie, se[ie]);
    });
  }
  u && Xu(u, e, "c");
  function Y(se, ie) {
    _e(ie) ? ie.forEach((pe) => se(pe.bind(n))) : ie && se(ie.bind(n));
  }
  if (Y(mh, h), Y(ji, S), Y(bh, E), Y(Bg, N), Y(Fg, A), Y(zg, O), Y(Gg, fe), Y(Vg, D), Y(jg, J), Y(Ja, M), Y(hs, F), Y(Hg, X), _e(re))
    if (re.length) {
      const se = e.exposed || (e.exposed = {});
      re.forEach((ie) => {
        Object.defineProperty(se, ie, {
          get: () => n[ie],
          set: (pe) => n[ie] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  Z && e.render === yn && (e.render = Z), be != null && (e.inheritAttrs = be), te && (e.components = te), ae && (e.directives = ae), X && vh(e);
}
function Jg(e, t, n = yn) {
  _e(e) && (e = Sc(e));
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
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function Xu(e, t, n) {
  wn(
    _e(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Sh(e, t, n, i) {
  let a = i.includes(".") ? oh(n, i) : () => n[i];
  if (nt(e)) {
    const r = t[e];
    xe(r) && lt(a, r);
  } else if (xe(e))
    lt(a, e.bind(n));
  else if (Je(e))
    if (_e(e))
      e.forEach((r) => Sh(r, t, n, i));
    else {
      const r = xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      xe(r) && lt(a, r, e);
    }
}
function Ch(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => no(l, d, s, !0)
  ), no(l, t, s)), Je(t) && r.set(t, l), l;
}
function no(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && no(e, r, n, !0), a && a.forEach(
    (s) => no(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = Qg[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const Qg = {
  data: Zu,
  props: Ju,
  emits: Ju,
  // objects
  methods: Ar,
  computed: Ar,
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
  components: Ar,
  directives: Ar,
  // watch
  watch: tm,
  // provide / inject
  provide: Zu,
  inject: em
};
function Zu(e, t) {
  return t ? e ? function() {
    return mt(
      xe(e) ? e.call(this, this) : e,
      xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function em(e, t) {
  return Ar(Sc(e), Sc(t));
}
function Sc(e) {
  if (_e(e)) {
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
function Ar(e, t) {
  return e ? mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ju(e, t) {
  return e ? _e(e) && _e(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : mt(
    /* @__PURE__ */ Object.create(null),
    to(e),
    to(t ?? {})
  ) : t;
}
function tm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = mt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Kt(e[i], t[i]);
  return n;
}
function Th() {
  return {
    app: null,
    config: {
      isNativeTag: Lf,
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
let nm = 0;
function im(e, t) {
  return function(i, a = null) {
    xe(i) || (i = mt({}, i)), a != null && !Je(a) && (a = null);
    const r = Th(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: nm++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: xm,
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
      mount(u, h, S) {
        if (!l) {
          const E = d._ceVNode || ye(i, a);
          return E.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(E, u, S), l = !0, d._container = u, u.__vue_app__ = d, fl(E.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (wn(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = Ka;
        Ka = d;
        try {
          return u();
        } finally {
          Ka = h;
        }
      }
    };
    return d;
  };
}
let Ka = null;
function Eh(e, t, n = Ge) {
  const i = Sa(), a = Bt(t), r = pi(t), s = Ah(e, a), o = gg((l, d) => {
    let u, h = Ge, S;
    return Ng(() => {
      const E = e[a];
      Ot(u, E) && (u = E, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const N = n.set ? n.set(E) : E;
        if (!Ot(N, u) && !(h !== Ge && Ot(E, h)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (u = E, d()), i.emit(`update:${t}`, N), Ot(E, h) && (Ot(E, N) && !Ot(N, S) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && h !== Ge && !Ot(N, u)) && d(), h = E, S = N;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || Ge : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const Ah = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Bt(t)}Modifiers`] || e[`${pi(t)}Modifiers`];
function am(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ge;
  let a = n;
  const r = t.startsWith("update:"), s = r && Ah(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => nt(u) ? u.trim() : u)), s.number && (a = a.map(tl)));
  let o, l = i[o = Nl(t)] || // also try camelCase event handler (#2249)
  i[o = Nl(Bt(t))];
  !l && r && (l = i[o = Nl(pi(t))]), l && wn(
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
    e.emitted[o] = !0, wn(
      d,
      e,
      6,
      a
    );
  }
}
const rm = /* @__PURE__ */ new WeakMap();
function kh(e, t, n = !1) {
  const i = n ? rm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!xe(e)) {
    const l = (d) => {
      const u = kh(d, t, !0);
      u && (o = !0, mt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Je(e) && i.set(e, null), null) : (_e(r) ? r.forEach((l) => s[l] = null) : mt(s, r), Je(e) && i.set(e, s), s);
}
function dl(e, t) {
  return !e || !Zo(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, pi(t)) || Ze(e, t));
}
function Qu(e) {
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
    data: S,
    setupState: E,
    ctx: N,
    inheritAttrs: A
  } = e, O = Js(e);
  let I, M;
  try {
    if (n.shapeFlag & 4) {
      const F = a || i, Z = F;
      I = Bn(
        d.call(
          Z,
          F,
          u,
          h,
          E,
          S,
          N
        )
      ), M = o;
    } else {
      const F = t;
      I = Bn(
        F.length > 1 ? F(
          h,
          { attrs: o, slots: s, emit: l }
        ) : F(
          h,
          null
        )
      ), M = t.props ? o : sm(o);
    }
  } catch (F) {
    li.length = 0, rl(F, e, 1), I = ye(Nt);
  }
  let K = I;
  if (M && A !== !1) {
    const F = Object.keys(M), { shapeFlag: Z } = K;
    F.length && Z & 7 && (r && F.some(Jo) && (M = om(
      M,
      r
    )), K = Bi(K, M, !1, !0));
  }
  if (n.dirs && (K = Bi(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const F = ll(K.type) && Qs(K) || K;
    Zr(F, n.transition);
  }
  return I = K, Js(O), I;
}
const sm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Zo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, om = (e, t) => {
  const n = {};
  for (const i in e)
    (!Jo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function lm(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? ed(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const S = u[h];
        if (Oh(s, i, S) && !dl(d, S))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? ed(i, s, d) : !0 : !!s;
  return !1;
}
function ed(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Oh(t, e, r) && !dl(n, r))
      return !0;
  }
  return !1;
}
function Oh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Je(i) && Je(a) ? !Ui(i, a) : i !== a;
}
function cm({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Nh = {}, xh = () => Object.create(Nh), Lh = (e) => Object.getPrototypeOf(e) === Nh;
function um(e, t, n, i = !1) {
  const a = {}, r = xh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Rh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ dg(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function dm(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ We(a), [l] = e.propsOptions;
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
        let S = u[h];
        if (dl(e.emitsOptions, S))
          continue;
        const E = t[S];
        if (l)
          if (Ze(r, S))
            E !== r[S] && (r[S] = E, d = !0);
          else {
            const N = Bt(S);
            a[N] = Cc(
              l,
              o,
              N,
              E,
              e,
              !1
            );
          }
        else
          E !== r[S] && (r[S] = E, d = !0);
      }
    }
  } else {
    Rh(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !Ze(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = pi(h)) === h || !Ze(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = Cc(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !Ze(t, h)) && (delete r[h], d = !0);
  }
  d && ii(e.attrs, "set", "");
}
function Rh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Lr(l))
        continue;
      const d = t[l];
      let u;
      a && Ze(a, u = Bt(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : dl(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ We(n), d = o || Ge;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = Cc(
        a,
        l,
        h,
        d[h],
        e,
        !Ze(d, h)
      );
    }
  }
  return s;
}
function Cc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Ze(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && xe(l)) {
        const { propsDefaults: d } = a;
        if (n in d)
          i = d[n];
        else {
          const u = vs(a);
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
    ] && (i === "" || i === pi(n)) && (i = !0));
  }
  return i;
}
const fm = /* @__PURE__ */ new WeakMap();
function Ih(e, t, n = !1) {
  const i = n ? fm : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!xe(e)) {
    const u = (h) => {
      l = !0;
      const [S, E] = Ih(h, t, !0);
      mt(s, S), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Je(e) && i.set(e, ja), ja;
  if (_e(r))
    for (let u = 0; u < r.length; u++) {
      const h = Bt(r[u]);
      td(h) && (s[h] = Ge);
    }
  else if (r)
    for (const u in r) {
      const h = Bt(u);
      if (td(h)) {
        const S = r[u], E = s[h] = _e(S) || xe(S) ? { type: S } : mt({}, S), N = E.type;
        let A = !1, O = !0;
        if (_e(N))
          for (let I = 0; I < N.length; ++I) {
            const M = N[I], K = xe(M) && M.name;
            if (K === "Boolean") {
              A = !0;
              break;
            } else K === "String" && (O = !1);
          }
        else
          A = xe(N) && N.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = A, E[
          1
          /* shouldCastTrue */
        ] = O, (A || Ze(E, "default")) && o.push(h);
      }
    }
  const d = [s, o];
  return Je(e) && i.set(e, d), d;
}
function td(e) {
  return e[0] !== "$" && !Lr(e);
}
const ru = (e) => e === "_" || e === "_ctx" || e === "$stable", su = (e) => _e(e) ? e.map(Bn) : [Bn(e)], hm = (e, t, n) => {
  if (t._n)
    return t;
  const i = ke((...a) => su(t(...a)), n);
  return i._c = !1, i;
}, Ph = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (ru(a)) continue;
    const r = e[a];
    if (xe(r))
      t[a] = hm(a, r, i);
    else if (r != null) {
      const s = su(r);
      t[a] = () => s;
    }
  }
}, Dh = (e, t) => {
  const n = su(t);
  e.slots.default = () => n;
}, $h = (e, t, n) => {
  for (const i in t)
    (n || !ru(i)) && (e[i] = t[i]);
}, pm = (e, t, n) => {
  const i = e.slots = xh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? ($h(i, t, n), n && Df(i, "_", a, !0)) : Ph(t, i);
  } else t && Dh(e, t);
}, vm = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Ge;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : $h(a, t, n) : (r = !t.$stable, Ph(t, a)), s = t;
  } else t && (Dh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !ru(o) && s[o] == null && delete a[o];
}, Wt = _m;
function gm(e) {
  return mm(e);
}
function mm(e, t) {
  const n = nl();
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
    nextSibling: S,
    setScopeId: E = yn,
    insertStaticContent: N
  } = e, A = (v, C, k, L = null, x = null, z = null, G = void 0, V = null, Q = !!C.dynamicChildren) => {
    if (v === C)
      return;
    v && !da(v, C) && (L = ut(v), ge(v, x, z, !0), v = null), C.patchFlag === -2 && (Q = !1, C.dynamicChildren = null);
    const { type: j, ref: ue, shapeFlag: oe } = C;
    switch (j) {
      case ps:
        O(v, C, k, L);
        break;
      case Nt:
        I(v, C, k, L);
        break;
      case Gs:
        v == null && M(C, k, L, G);
        break;
      case de:
        te(
          v,
          C,
          k,
          L,
          x,
          z,
          G,
          V,
          Q
        );
        break;
      default:
        oe & 1 ? Z(
          v,
          C,
          k,
          L,
          x,
          z,
          G,
          V,
          Q
        ) : oe & 6 ? ae(
          v,
          C,
          k,
          L,
          x,
          z,
          G,
          V,
          Q
        ) : (oe & 64 || oe & 128) && j.process(
          v,
          C,
          k,
          L,
          x,
          z,
          G,
          V,
          Q,
          Rt
        );
    }
    ue != null && x ? Pr(ue, v && v.ref, z, C || v, !C) : ue == null && v && v.ref != null && Pr(v.ref, null, z, v, !0);
  }, O = (v, C, k, L) => {
    if (v == null)
      i(
        C.el = o(C.children),
        k,
        L
      );
    else {
      const x = C.el = v.el;
      C.children !== v.children && d(x, C.children);
    }
  }, I = (v, C, k, L) => {
    v == null ? i(
      C.el = l(C.children || ""),
      k,
      L
    ) : C.el = v.el;
  }, M = (v, C, k, L) => {
    [v.el, v.anchor] = N(
      v.children,
      C,
      k,
      L,
      v.el,
      v.anchor
    );
  }, K = ({ el: v, anchor: C }, k, L) => {
    let x;
    for (; v && v !== C; )
      x = S(v), i(v, k, L), v = x;
    i(C, k, L);
  }, F = ({ el: v, anchor: C }) => {
    let k;
    for (; v && v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, Z = (v, C, k, L, x, z, G, V, Q) => {
    if (C.type === "svg" ? G = "svg" : C.type === "math" && (G = "mathml"), v == null)
      D(
        C,
        k,
        L,
        x,
        z,
        G,
        V,
        Q
      );
    else {
      const j = v.el && v.el._isVueCE ? v.el : null;
      try {
        j && j._beginPatch(), X(
          v,
          C,
          x,
          z,
          G,
          V,
          Q
        );
      } finally {
        j && j._endPatch();
      }
    }
  }, D = (v, C, k, L, x, z, G, V) => {
    let Q, j;
    const { props: ue, shapeFlag: oe, transition: me, dirs: Ce } = v;
    if (Q = v.el = s(
      v.type,
      z,
      ue && ue.is,
      ue
    ), oe & 8 ? u(Q, v.children) : oe & 16 && fe(
      v.children,
      Q,
      null,
      L,
      x,
      $l(v, z),
      G,
      V
    ), Ce && na(v, null, L, "created"), J(Q, v, v.scopeId, G, L), ue) {
      for (const $e in ue)
        $e !== "value" && !Lr($e) && r(Q, $e, null, ue[$e], z, L);
      "value" in ue && r(Q, "value", null, ue.value, z), (j = ue.onVnodeBeforeMount) && Dn(j, L, v);
    }
    Ce && na(v, null, L, "beforeMount");
    const Oe = bm(x, me);
    Oe && me.beforeEnter(Q), i(Q, C, k), ((j = ue && ue.onVnodeMounted) || Oe || Ce) && Wt(() => {
      j && Dn(j, L, v), Oe && me.enter(Q), Ce && na(v, null, L, "mounted");
    }, x);
  }, J = (v, C, k, L, x) => {
    if (k && E(v, k), L)
      for (let z = 0; z < L.length; z++)
        E(v, L[z]);
    if (x) {
      let z = x.subTree;
      if (C === z || zh(z.type) && (z.ssContent === C || z.ssFallback === C)) {
        const G = x.vnode;
        J(
          v,
          G,
          G.scopeId,
          G.slotScopeIds,
          x.parent
        );
      }
    }
  }, fe = (v, C, k, L, x, z, G, V, Q = 0) => {
    for (let j = Q; j < v.length; j++) {
      const ue = v[j] = V ? ni(v[j]) : Bn(v[j]);
      A(
        null,
        ue,
        C,
        k,
        L,
        x,
        z,
        G,
        V
      );
    }
  }, X = (v, C, k, L, x, z, G) => {
    const V = C.el = v.el;
    let { patchFlag: Q, dynamicChildren: j, dirs: ue } = C;
    Q |= v.patchFlag & 16;
    const oe = v.props || Ge, me = C.props || Ge;
    let Ce;
    if (k && ia(k, !1), (Ce = me.onVnodeBeforeUpdate) && Dn(Ce, k, C, v), ue && na(C, v, k, "beforeUpdate"), k && ia(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    j && (!v.dynamicChildren || v.dynamicChildren.length !== j.length) && (Q = 0, G = !1, j = null), (oe.innerHTML && me.innerHTML == null || oe.textContent && me.textContent == null) && u(V, ""), j ? re(
      v.dynamicChildren,
      j,
      V,
      k,
      L,
      $l(C, x),
      z
    ) : G || ie(
      v,
      C,
      V,
      null,
      k,
      L,
      $l(C, x),
      z,
      !1
    ), Q > 0) {
      if (Q & 16)
        be(V, oe, me, k, x);
      else if (Q & 2 && oe.class !== me.class && r(V, "class", null, me.class, x), Q & 4 && r(V, "style", oe.style, me.style, x), Q & 8) {
        const Oe = C.dynamicProps;
        for (let $e = 0; $e < Oe.length; $e++) {
          const Re = Oe[$e], Ye = oe[Re], rt = me[Re];
          (rt !== Ye || Re === "value") && r(V, Re, Ye, rt, x, k);
        }
      }
      Q & 1 && v.children !== C.children && u(V, C.children);
    } else !G && j == null && be(V, oe, me, k, x);
    ((Ce = me.onVnodeUpdated) || ue) && Wt(() => {
      Ce && Dn(Ce, k, C, v), ue && na(C, v, k, "updated");
    }, L);
  }, re = (v, C, k, L, x, z, G) => {
    for (let V = 0; V < C.length; V++) {
      const Q = v[V], j = C[V], ue = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !da(Q, j) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? h(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        Q,
        j,
        ue,
        null,
        L,
        x,
        z,
        G,
        !0
      );
    }
  }, be = (v, C, k, L, x) => {
    if (C !== k) {
      if (C !== Ge)
        for (const z in C)
          !Lr(z) && !(z in k) && r(
            v,
            z,
            C[z],
            null,
            x,
            L
          );
      for (const z in k) {
        if (Lr(z)) continue;
        const G = k[z], V = C[z];
        G !== V && z !== "value" && r(v, z, V, G, x, L);
      }
      "value" in k && r(v, "value", C.value, k.value, x);
    }
  }, te = (v, C, k, L, x, z, G, V, Q) => {
    const j = C.el = v ? v.el : o(""), ue = C.anchor = v ? v.anchor : o("");
    let { patchFlag: oe, dynamicChildren: me, slotScopeIds: Ce } = C;
    Ce && (V = V ? V.concat(Ce) : Ce), v == null ? (i(j, k, L), i(ue, k, L), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      k,
      ue,
      x,
      z,
      G,
      V,
      Q
    )) : oe > 0 && oe & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === me.length ? (re(
      v.dynamicChildren,
      me,
      k,
      x,
      z,
      G,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || x && C === x.subTree) && ou(
      v,
      C,
      !0
      /* shallow */
    )) : ie(
      v,
      C,
      k,
      ue,
      x,
      z,
      G,
      V,
      Q
    );
  }, ae = (v, C, k, L, x, z, G, V, Q) => {
    C.slotScopeIds = V, v == null ? C.shapeFlag & 512 ? x.ctx.activate(
      C,
      k,
      L,
      G,
      Q
    ) : P(
      C,
      k,
      L,
      x,
      z,
      G,
      Q
    ) : $(v, C, Q);
  }, P = (v, C, k, L, x, z, G) => {
    const V = v.component = Tm(
      v,
      L,
      x
    );
    if (cl(v) && (V.ctx.renderer = Rt), Em(V, !1, G), V.asyncDep) {
      if (x && x.registerDep(V, Y, G), !v.el) {
        const Q = V.subTree = ye(Nt);
        I(null, Q, C, k), v.placeholder = Q.el;
      }
    } else
      Y(
        V,
        v,
        C,
        k,
        x,
        z,
        G
      );
  }, $ = (v, C, k) => {
    const L = C.component = v.component;
    if (lm(v, C, k))
      if (L.asyncDep && !L.asyncResolved) {
        se(L, C, k);
        return;
      } else
        L.next = C, L.update();
    else
      C.el = v.el, L.vnode = C;
  }, Y = (v, C, k, L, x, z, G) => {
    const V = () => {
      if (v.isMounted) {
        let { next: oe, bu: me, u: Ce, parent: Oe, vnode: $e } = v;
        {
          const it = Mh(v);
          if (it) {
            oe && (oe.el = $e.el, se(v, oe, G)), it.asyncDep.then(() => {
              Wt(() => {
                v.isUnmounted || j();
              }, x);
            });
            return;
          }
        }
        let Re = oe, Ye;
        ia(v, !1), oe ? (oe.el = $e.el, se(v, oe, G)) : oe = $e, me && Vs(me), (Ye = oe.props && oe.props.onVnodeBeforeUpdate) && Dn(Ye, Oe, oe, $e), ia(v, !0);
        const rt = Qu(v), At = v.subTree;
        v.subTree = rt, A(
          At,
          rt,
          // parent may have changed if it's in a teleport
          h(At.el),
          // anchor may have changed if it's in a fragment
          ut(At),
          v,
          x,
          z
        ), oe.el = rt.el, Re === null && cm(v, rt.el), Ce && Wt(Ce, x), (Ye = oe.props && oe.props.onVnodeUpdated) && Wt(
          () => Dn(Ye, Oe, oe, $e),
          x
        );
      } else {
        let oe;
        const { el: me, props: Ce } = C, { bm: Oe, m: $e, parent: Re, root: Ye, type: rt } = v, At = Ga(C);
        ia(v, !1), Oe && Vs(Oe), !At && (oe = Ce && Ce.onVnodeBeforeMount) && Dn(oe, Re, C), ia(v, !0);
        {
          Ye.ce && Ye.ce._hasShadowRoot() && Ye.ce._injectChildStyle(
            rt,
            v.parent ? v.parent.type : void 0
          );
          const it = v.subTree = Qu(v);
          A(
            null,
            it,
            k,
            L,
            v,
            x,
            z
          ), C.el = it.el;
        }
        if ($e && Wt($e, x), !At && (oe = Ce && Ce.onVnodeMounted)) {
          const it = C;
          Wt(
            () => Dn(oe, Re, it),
            x
          );
        }
        (C.shapeFlag & 256 || Re && Ga(Re.vnode) && Re.vnode.shapeFlag & 256) && v.a && Wt(v.a, x), v.isMounted = !0, C = k = L = null;
      }
    };
    v.scope.on();
    const Q = v.effect = new zf(V);
    v.scope.off();
    const j = v.update = Q.run.bind(Q), ue = v.job = Q.runIfDirty.bind(Q);
    ue.i = v, ue.id = v.uid, Q.scheduler = () => tu(ue), ia(v, !0), j();
  }, se = (v, C, k) => {
    C.component = v;
    const L = v.vnode.props;
    v.vnode = C, v.next = null, dm(v, C.props, L, k), vm(v, C.children, k), ui(), ju(v), di();
  }, ie = (v, C, k, L, x, z, G, V, Q = !1) => {
    const j = v && v.children, ue = v ? v.shapeFlag : 0, oe = C.children, { patchFlag: me, shapeFlag: Ce } = C;
    if (me > 0) {
      if (me & 128) {
        he(
          j,
          oe,
          k,
          L,
          x,
          z,
          G,
          V,
          Q
        );
        return;
      } else if (me & 256) {
        pe(
          j,
          oe,
          k,
          L,
          x,
          z,
          G,
          V,
          Q
        );
        return;
      }
    }
    Ce & 8 ? (ue & 16 && ct(j, x, z), oe !== j && u(k, oe)) : ue & 16 ? Ce & 16 ? he(
      j,
      oe,
      k,
      L,
      x,
      z,
      G,
      V,
      Q
    ) : ct(j, x, z, !0) : (ue & 8 && u(k, ""), Ce & 16 && fe(
      oe,
      k,
      L,
      x,
      z,
      G,
      V,
      Q
    ));
  }, pe = (v, C, k, L, x, z, G, V, Q) => {
    v = v || ja, C = C || ja;
    const j = v.length, ue = C.length, oe = Math.min(j, ue);
    let me;
    for (me = 0; me < oe; me++) {
      const Ce = C[me] = Q ? ni(C[me]) : Bn(C[me]);
      A(
        v[me],
        Ce,
        k,
        null,
        x,
        z,
        G,
        V,
        Q
      );
    }
    j > ue ? ct(
      v,
      x,
      z,
      !0,
      !1,
      oe
    ) : fe(
      C,
      k,
      L,
      x,
      z,
      G,
      V,
      Q,
      oe
    );
  }, he = (v, C, k, L, x, z, G, V, Q) => {
    let j = 0;
    const ue = C.length;
    let oe = v.length - 1, me = ue - 1;
    for (; j <= oe && j <= me; ) {
      const Ce = v[j], Oe = C[j] = Q ? ni(C[j]) : Bn(C[j]);
      if (da(Ce, Oe))
        A(
          Ce,
          Oe,
          k,
          null,
          x,
          z,
          G,
          V,
          Q
        );
      else
        break;
      j++;
    }
    for (; j <= oe && j <= me; ) {
      const Ce = v[oe], Oe = C[me] = Q ? ni(C[me]) : Bn(C[me]);
      if (da(Ce, Oe))
        A(
          Ce,
          Oe,
          k,
          null,
          x,
          z,
          G,
          V,
          Q
        );
      else
        break;
      oe--, me--;
    }
    if (j > oe) {
      if (j <= me) {
        const Ce = me + 1, Oe = Ce < ue ? C[Ce].el : L;
        for (; j <= me; )
          A(
            null,
            C[j] = Q ? ni(C[j]) : Bn(C[j]),
            k,
            Oe,
            x,
            z,
            G,
            V,
            Q
          ), j++;
      }
    } else if (j > me)
      for (; j <= oe; )
        ge(v[j], x, z, !0), j++;
    else {
      const Ce = j, Oe = j, $e = /* @__PURE__ */ new Map();
      for (j = Oe; j <= me; j++) {
        const vt = C[j] = Q ? ni(C[j]) : Bn(C[j]);
        vt.key != null && $e.set(vt.key, j);
      }
      let Re, Ye = 0;
      const rt = me - Oe + 1;
      let At = !1, it = 0;
      const Yt = new Array(rt);
      for (j = 0; j < rt; j++) Yt[j] = 0;
      for (j = Ce; j <= oe; j++) {
        const vt = v[j];
        if (Ye >= rt) {
          ge(vt, x, z, !0);
          continue;
        }
        let Vt;
        if (vt.key != null)
          Vt = $e.get(vt.key);
        else
          for (Re = Oe; Re <= me; Re++)
            if (Yt[Re - Oe] === 0 && da(vt, C[Re])) {
              Vt = Re;
              break;
            }
        Vt === void 0 ? ge(vt, x, z, !0) : (Yt[Vt - Oe] = j + 1, Vt >= it ? it = Vt : At = !0, A(
          vt,
          C[Vt],
          k,
          null,
          x,
          z,
          G,
          V,
          Q
        ), Ye++);
      }
      const Gn = At ? ym(Yt) : ja;
      for (Re = Gn.length - 1, j = rt - 1; j >= 0; j--) {
        const vt = Oe + j, Vt = C[vt], Ki = C[vt + 1], Wi = vt + 1 < ue ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ki.el || Fh(Ki)
        ) : L;
        Yt[j] === 0 ? A(
          null,
          Vt,
          k,
          Wi,
          x,
          z,
          G,
          V,
          Q
        ) : At && (Re < 0 || j !== Gn[Re] ? Se(Vt, k, Wi, 2) : Re--);
      }
    }
  }, Se = (v, C, k, L, x = null) => {
    const { el: z, type: G, transition: V, children: Q, shapeFlag: j } = v;
    if (j & 6) {
      Se(v.component.subTree, C, k, L);
      return;
    }
    if (j & 128) {
      v.suspense.move(C, k, L);
      return;
    }
    if (j & 64) {
      G.move(v, C, k, Rt);
      return;
    }
    if (G === de) {
      i(z, C, k);
      for (let oe = 0; oe < Q.length; oe++)
        Se(Q[oe], C, k, L);
      i(v.anchor, C, k);
      return;
    }
    if (G === Gs) {
      K(v, C, k);
      return;
    }
    if (L !== 2 && j & 1 && V)
      if (L === 0)
        V.persisted && !z[mn] ? i(z, C, k) : (V.beforeEnter(z), i(z, C, k), Wt(() => V.enter(z), x));
      else {
        const { leave: oe, delayLeave: me, afterLeave: Ce } = V, Oe = () => {
          v.ctx.isUnmounted ? a(z) : i(z, C, k);
        }, $e = () => {
          const Re = z._isLeaving || !!z[mn];
          z._isLeaving && z[mn](
            !0
            /* cancelled */
          ), V.persisted && !Re ? Oe() : oe(z, () => {
            Oe(), Ce && Ce();
          });
        };
        me ? me(z, Oe, $e) : $e();
      }
    else
      i(z, C, k);
  }, ge = (v, C, k, L = !1, x = !1) => {
    const {
      type: z,
      props: G,
      ref: V,
      children: Q,
      dynamicChildren: j,
      shapeFlag: ue,
      patchFlag: oe,
      dirs: me,
      cacheIndex: Ce,
      memo: Oe
    } = v;
    if (oe === -2 && (x = !1), V != null && (ui(), Pr(V, null, k, v, !0), di()), Ce != null && (C.renderCache[Ce] = void 0), ue & 256) {
      C.ctx.deactivate(v);
      return;
    }
    const $e = ue & 1 && me, Re = !Ga(v);
    let Ye;
    if (Re && (Ye = G && G.onVnodeBeforeUnmount) && Dn(Ye, C, v), ue & 6)
      at(v.component, k, L);
    else {
      if (ue & 128) {
        v.suspense.unmount(k, L);
        return;
      }
      $e && na(v, null, C, "beforeUnmount"), ue & 64 ? v.type.remove(
        v,
        C,
        k,
        Rt,
        L
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== de || oe > 0 && oe & 64) ? ct(
        j,
        C,
        k,
        !1,
        !0
      ) : (z === de && oe & 384 || !x && ue & 16) && ct(Q, C, k), L && He(v);
    }
    const rt = Oe != null && Ce == null;
    (Re && (Ye = G && G.onVnodeUnmounted) || $e || rt) && Wt(() => {
      Ye && Dn(Ye, C, v), $e && na(v, null, C, "unmounted"), rt && (v.el = null);
    }, k);
  }, He = (v) => {
    const { type: C, el: k, anchor: L, transition: x } = v;
    if (C === de) {
      Ee(k, L);
      return;
    }
    if (C === Gs) {
      F(v);
      return;
    }
    const z = () => {
      a(k), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (v.shapeFlag & 1 && x && !x.persisted) {
      const { leave: G, delayLeave: V } = x, Q = () => G(k, z);
      V ? V(v.el, z, Q) : Q();
    } else
      z();
  }, Ee = (v, C) => {
    let k;
    for (; v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, at = (v, C, k) => {
    const { bum: L, scope: x, job: z, subTree: G, um: V, m: Q, a: j } = v;
    nd(Q), nd(j), L && Vs(L), x.stop(), z && (z.flags |= 8, ge(G, v, C, k)), V && Wt(V, C), Wt(() => {
      v.isUnmounted = !0;
    }, C);
  }, ct = (v, C, k, L = !1, x = !1, z = 0) => {
    for (let G = z; G < v.length; G++)
      ge(v[G], C, k, L, x);
  }, ut = (v) => {
    if (v.shapeFlag & 6)
      return ut(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const C = S(v.anchor || v.el), k = C && C[lh];
    return k ? S(k) : C;
  };
  let Et = !1;
  const qe = (v, C, k) => {
    let L;
    v == null ? C._vnode && (ge(C._vnode, null, null, !0), L = C._vnode.component) : A(
      C._vnode || null,
      v,
      C,
      null,
      null,
      null,
      k
    ), C._vnode = v, Et || (Et = !0, ju(L), rh(), Et = !1);
  }, Rt = {
    p: A,
    um: ge,
    m: Se,
    r: He,
    mt: P,
    mc: fe,
    pc: ie,
    pbc: re,
    n: ut,
    o: e
  };
  return {
    render: qe,
    hydrate: void 0,
    createApp: im(qe)
  };
}
function $l({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ia({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ou(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (_e(i) && _e(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = ni(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && ou(s, o)), o.type === ps && (o.patchFlag === -1 && (o = a[r] = ni(o)), o.el = s.el), o.type === Nt && !o.el && (o.el = s.el);
    }
}
function ym(e) {
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
function Mh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Mh(t);
}
function nd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fh(t.subTree) : null;
}
const zh = (e) => e.__isSuspense;
function _m(e, t) {
  t && t.pendingBranch ? _e(e) ? t.effects.push(...e) : t.effects.push(e) : ah(e);
}
const de = /* @__PURE__ */ Symbol.for("v-fgt"), ps = /* @__PURE__ */ Symbol.for("v-txt"), Nt = /* @__PURE__ */ Symbol.for("v-cmt"), Gs = /* @__PURE__ */ Symbol.for("v-stc"), li = [];
let sn = null;
function _(e = !1) {
  li.push(sn = e ? null : []);
}
function lu() {
  li.pop(), sn = li[li.length - 1] || null;
}
let Jr = 1;
function io(e, t = !1) {
  Jr += e, e < 0 && sn && t && (sn.hasOnce = !0);
}
function Uh(e) {
  return e.dynamicChildren = Jr > 0 ? sn || ja : null, lu(), Jr > 0 && sn && sn.push(e), e;
}
function T(e, t, n, i, a, r) {
  return Uh(
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
function Me(e, t, n, i, a) {
  return Uh(
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
function Qr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function da(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Bh = ({ key: e }) => e ?? null, Ks = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? nt(e) || /* @__PURE__ */ Ht(e) || xe(e) ? { i: xt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === de ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Bh(t),
    ref: t && Ks(t),
    scopeId: sl,
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
    ctx: xt
  };
  return o ? (ao(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= nt(n) ? 8 : 16), Jr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  sn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && sn.push(l), l;
}
const ye = wm;
function wm(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === yh) && (e = Nt), Qr(e)) {
    const o = Bi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ao(o, n), Jr > 0 && !r && sn && (o.shapeFlag & 6 ? sn[sn.indexOf(e)] = o : sn.push(o)), o.patchFlag = -2, o;
  }
  if (Nm(e) && (e = e.__vccOpts), t) {
    t = es(t);
    let { class: o, style: l } = t;
    o && !nt(o) && (t.class = we(o)), Je(l) && (/* @__PURE__ */ eu(l) && !_e(l) && (l = mt({}, l)), t.style = on(l));
  }
  const s = nt(e) ? 1 : zh(e) ? 128 : ll(e) ? 64 : Je(e) ? 4 : xe(e) ? 2 : 0;
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
function es(e) {
  return e ? /* @__PURE__ */ eu(e) || Lh(e) ? mt({}, e) : e : null;
}
function Bi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? jt(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Bh(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? _e(r) ? r.concat(Ks(t)) : [r, Ks(t)] : Ks(t)
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
    ssContent: e.ssContent && Bi(e.ssContent),
    ssFallback: e.ssFallback && Bi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Zr(
    u,
    l.clone(u)
  ), u;
}
function Ne(e = " ", t = 0) {
  return ye(ps, null, e, t);
}
function H(e = "", t = !1) {
  return t ? (_(), Me(Nt, null, e)) : ye(Nt, null, e);
}
function Bn(e) {
  return e == null || typeof e == "boolean" ? ye(Nt) : _e(e) ? ye(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qr(e) ? ni(e) : ye(ps, null, String(e));
}
function ni(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bi(e);
}
function ao(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (_e(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), ao(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Lh(t) ? t._ctx = xt : a === 3 && xt && (xt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (xe(t)) {
    if (i & 65) {
      ao(e, { default: t });
      return;
    }
    t = { default: t, _ctx: xt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Ne(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function jt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = we([t.class, i.class]));
      else if (a === "style")
        t.style = on([t.style, i.style]);
      else if (Zo(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(_e(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Jo(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Dn(e, t, n, i = null) {
  wn(e, t, 7, [
    n,
    i
  ]);
}
const Sm = Th();
let Cm = 0;
function Tm(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Sm, r = {
    uid: Cm++,
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
    scope: new Kv(
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
    propsOptions: Ih(i, a),
    emitsOptions: kh(i, a),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = am.bind(null, r), e.ce && e.ce(r), r;
}
let Ut = null;
const Sa = () => Ut || xt;
let ro, ts;
{
  const e = nl(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  ro = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ut = n
  ), ts = t(
    "__VUE_SSR_SETTERS__",
    (n) => ns = n
  );
}
const vs = (e) => {
  const t = Ut;
  return ro(e), e.scope.on(), () => {
    e.scope.off(), ro(t);
  };
}, id = () => {
  Ut && Ut.scope.off(), ro(null);
};
function Hh(e) {
  return e.vnode.shapeFlag & 4;
}
let ns = !1;
function Em(e, t = !1, n = !1) {
  t && ts(t);
  const { props: i, children: a } = e.vnode, r = Hh(e);
  um(e, i, r, t), pm(e, a, n || t);
  const s = r ? Am(e, t) : void 0;
  return t && ts(!1), s;
}
function Am(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Wg);
  const { setup: i } = n;
  if (i) {
    ui();
    const a = e.setupContext = i.length > 1 ? Vh(e) : null, r = vs(e), s = fs(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = Rf(s);
    if (di(), r(), (o || e.sp) && !Ga(e) && vh(e), o) {
      if (s.then(id, id), t)
        return s.then((l) => {
          ts(!0);
          try {
            ad(e, l, t);
          } finally {
            ts(!1);
          }
        }).catch((l) => {
          rl(l, e, 0);
        });
      e.asyncDep = s;
    } else
      ad(e, s);
  } else
    jh(e);
}
function ad(e, t, n) {
  xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = th(t)), jh(e);
}
function jh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || yn);
  {
    const a = vs(e);
    ui();
    try {
      Zg(e);
    } finally {
      di(), a();
    }
  }
}
const km = {
  get(e, t) {
    return Ft(e, "get", ""), e[t];
  }
};
function Vh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, km),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function fl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(th(fg(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Dr)
        return Dr[n](e);
    },
    has(t, n) {
      return n in t || n in Dr;
    }
  })) : e.proxy;
}
function Om(e, t = !0) {
  return xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Nm(e) {
  return xe(e) && "__vccOpts" in e;
}
const W = (e, t) => /* @__PURE__ */ bg(e, t, ns);
function Xt(e, t, n) {
  try {
    io(-1);
    const i = arguments.length;
    return i === 2 ? Je(t) && !_e(t) ? Qr(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Qr(n) && (n = [n]), ye(e, t, n));
  } finally {
    io(1);
  }
}
const xm = "3.5.42", Lm = yn;
let Tc;
const rd = typeof window < "u" && window.trustedTypes;
if (rd)
  try {
    Tc = /* @__PURE__ */ rd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Gh = Tc ? (e) => Tc.createHTML(e) : (e) => e, Rm = "http://www.w3.org/2000/svg", Im = "http://www.w3.org/1998/Math/MathML", ti = typeof document < "u" ? document : null, sd = ti && /* @__PURE__ */ ti.createElement("template"), Pm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ti.createElementNS(Rm, e) : t === "mathml" ? ti.createElementNS(Im, e) : n ? ti.createElement(e, { is: n }) : ti.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ti.createTextNode(e),
  createComment: (e) => ti.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ti.querySelector(e),
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
      sd.innerHTML = Gh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = sd.content;
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
}, Oi = "transition", mr = "animation", is = /* @__PURE__ */ Symbol("_vtc"), Kh = {
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
}, Dm = /* @__PURE__ */ mt(
  {},
  uh,
  Kh
), $m = (e) => (e.displayName = "Transition", e.props = Dm, e), Mm = /* @__PURE__ */ $m(
  (e, { slots: t }) => Xt($g, Fm(e), t)
), aa = (e, t = []) => {
  _e(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, od = (e) => e ? _e(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Fm(e) {
  const t = {};
  for (const te in e)
    te in Kh || (t[te] = e[te]);
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
    leaveActiveClass: S = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, N = zm(a), A = N && N[0], O = N && N[1], {
    onBeforeEnter: I,
    onEnter: M,
    onEnterCancelled: K,
    onLeave: F,
    onLeaveCancelled: Z,
    onBeforeAppear: D = I,
    onAppear: J = M,
    onAppearCancelled: fe = K
  } = t, X = (te, ae, P, $) => {
    te._enterCancelled = $, ra(te, ae ? u : o), ra(te, ae ? d : s), P && P();
  }, re = (te, ae) => {
    te._isLeaving = !1, ra(te, h), ra(te, E), ra(te, S), ae && ae();
  }, be = (te) => (ae, P) => {
    const $ = te ? J : M, Y = () => X(ae, te, P);
    aa($, [ae, Y]), ld(() => {
      ra(ae, te ? l : r), Xn(ae, te ? u : o), od($) || cd(ae, i, A, Y);
    });
  };
  return mt(t, {
    onBeforeEnter(te) {
      aa(I, [te]), Xn(te, r), Xn(te, s);
    },
    onBeforeAppear(te) {
      aa(D, [te]), Xn(te, l), Xn(te, d);
    },
    onEnter: be(!1),
    onAppear: be(!0),
    onLeave(te, ae) {
      te._isLeaving = !0;
      const P = () => re(te, ae);
      Xn(te, h), te._enterCancelled ? (Xn(te, S), fd(te)) : (fd(te), Xn(te, S)), ld(() => {
        te._isLeaving && (ra(te, h), Xn(te, E), od(F) || cd(te, i, O, P));
      }), aa(F, [te, P]);
    },
    onEnterCancelled(te) {
      X(te, !1, void 0, !0), aa(K, [te]);
    },
    onAppearCancelled(te) {
      X(te, !0, void 0, !0), aa(fe, [te]);
    },
    onLeaveCancelled(te) {
      re(te), aa(Z, [te]);
    }
  });
}
function zm(e) {
  if (e == null)
    return null;
  if (Je(e))
    return [Ml(e.enter), Ml(e.leave)];
  {
    const t = Ml(e);
    return [t, t];
  }
}
function Ml(e) {
  return $v(e);
}
function Xn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[is] || (e[is] = /* @__PURE__ */ new Set())).add(t);
}
function ra(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[is];
  n && (n.delete(t), n.size || (e[is] = void 0));
}
function ld(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Um = 0;
function cd(e, t, n, i) {
  const a = e._endId = ++Um, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = Bm(e, t);
  if (!s)
    return i();
  const d = s + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, S), r();
  }, S = (E) => {
    E.target === e && ++u >= l && h();
  };
  setTimeout(() => {
    u < l && h();
  }, o + 1), e.addEventListener(d, S);
}
function Bm(e, t) {
  const n = window.getComputedStyle(e), i = (N) => (n[N] || "").split(", "), a = i(`${Oi}Delay`), r = i(`${Oi}Duration`), s = ud(a, r), o = i(`${mr}Delay`), l = i(`${mr}Duration`), d = ud(o, l);
  let u = null, h = 0, S = 0;
  t === Oi ? s > 0 && (u = Oi, h = s, S = r.length) : t === mr ? d > 0 && (u = mr, h = d, S = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? Oi : mr : null, S = u ? u === Oi ? r.length : l.length : 0);
  const E = u === Oi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Oi}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: S,
    hasTransform: E
  };
}
function ud(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => dd(n) + dd(e[i])));
}
function dd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function fd(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Hm(e, t, n) {
  const i = e[is];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const so = /* @__PURE__ */ Symbol("_vod"), Wh = /* @__PURE__ */ Symbol("_vsh"), Wa = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[so] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : br(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), br(e, !0), i.enter(e)) : i.leave(e, () => {
      br(e, !1);
    }) : br(e, t));
  },
  beforeUnmount(e, { value: t }) {
    br(e, t);
  }
};
function br(e, t) {
  e.style.display = t ? e[so] : "none", e[Wh] = !t;
}
const qh = /* @__PURE__ */ Symbol("");
function jm(e) {
  const t = Sa();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => oo(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? oo(t.ce, a) : Ec(t.subTree, a), n(a);
  };
  bh(() => {
    ah(i);
  }), ji(() => {
    lt(i, yn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), hs(() => a.disconnect());
  });
}
function Ec(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Ec(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    oo(e.el, t);
  else if (e.type === de)
    e.children.forEach((n) => Ec(n, t));
  else if (e.type === Gs) {
    let { el: n, anchor: i } = e;
    for (; n && (oo(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function oo(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Gv(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[qh] = i;
  }
}
const Vm = /(?:^|;)\s*display\s*:/;
function Gm(e, t, n) {
  const i = e.style, a = nt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (nt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && kr(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && kr(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? Wm(
        e,
        s,
        !nt(t) && t ? t[s] : void 0,
        o
      ) || kr(i, s, o) : kr(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[qh];
      s && (n += ";" + s), i.cssText = n, r = Vm.test(n);
    }
  } else t && e.removeAttribute("style");
  so in e && (e[so] = r ? i.display : "", e[Wh] && (i.display = "none"));
}
const Ps = /\s*!important$/;
function kr(e, t, n) {
  if (_e(n))
    n.forEach((i) => kr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Ps.test(n) ? e.setProperty(t, n.replace(Ps, ""), "important") : e.setProperty(t, n);
  else {
    const i = Km(e, t);
    Ps.test(n) ? e.setProperty(
      pi(i),
      n.replace(Ps, ""),
      "important"
    ) : e[i] = n;
  }
}
const hd = ["Webkit", "Moz", "ms"], Fl = {};
function Km(e, t) {
  const n = Fl[t];
  if (n)
    return n;
  let i = Bt(t);
  if (i !== "filter" && i in e)
    return Fl[t] = i;
  i = el(i);
  for (let a = 0; a < hd.length; a++) {
    const r = hd[a] + i;
    if (r in e)
      return Fl[t] = r;
  }
  return t;
}
function Wm(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && nt(i) && n === i;
}
const pd = "http://www.w3.org/1999/xlink";
function vd(e, t, n, i, a, r = Hv(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(pd, t.slice(6, t.length)) : e.setAttributeNS(pd, t, n) : n == null || r && !$f(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : On(n) ? String(n) : n
  );
}
function gd(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Gh(n) : n);
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
    o === "boolean" ? n = $f(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function fa(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function qm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const md = /* @__PURE__ */ Symbol("_vei");
function Ym(e, t, n, i, a = null) {
  const r = e[md] || (e[md] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = Jm(t);
    if (i) {
      const d = r[t] = tb(
        i,
        a
      );
      fa(e, o, d, l);
    } else s && (qm(e, o, s, l), r[t] = void 0);
  }
}
const Xm = /(Once|Passive|Capture)$/, Zm = /^on:?(?:Once|Passive|Capture)$/;
function Jm(e) {
  let t, n;
  for (; (n = e.match(Xm)) && !Zm.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : pi(e.slice(2)), t];
}
let zl = 0;
const Qm = /* @__PURE__ */ Promise.resolve(), eb = () => zl || (Qm.then(() => zl = 0), zl = Date.now());
function tb(e, t) {
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
        d && wn(
          d,
          t,
          5,
          o
        );
      }
    } else
      wn(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = eb(), n;
}
const bd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, nb = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? Hm(e, i, s) : t === "style" ? Gm(e, n, i) : Zo(t) ? Jo(t) || Ym(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ib(e, t, i, s)) ? (gd(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vd(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ab(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !nt(i))) ? gd(e, Bt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), vd(e, t, i, s));
};
function ib(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bd(t) && xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return bd(t) && nt(n) ? !1 : t in e;
}
function ab(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Bt(t);
  return Array.isArray(n) ? n.some((a) => Bt(a) === i) : Object.keys(n).some((a) => Bt(a) === i);
}
const lo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return _e(t) ? (n) => Vs(t, n) : t;
};
function rb(e) {
  e.target.composing = !0;
}
function yd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const pa = /* @__PURE__ */ Symbol("_assign"), Ds = /* @__PURE__ */ Symbol("_initialValue");
function Ul(e, t, n) {
  return t && (e = e.trim()), n && (e = tl(e)), e;
}
const pn = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[Ds] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ds] = e.defaultValue.replace(/\r\n?/g, `
`))), e[pa] = lo(a);
    const r = i || a.props && a.props.type === "number";
    fa(e, t ? "change" : "input", (s) => {
      s.target.composing || e[pa](Ul(e.value, n, r));
    }), (n || r) && fa(e, "change", () => {
      e.value = Ul(e.value, n, r);
    }), t || (fa(e, "compositionstart", rb), fa(e, "compositionend", yd), fa(e, "change", yd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[Ds];
    delete e[Ds], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[pa](Ul(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[pa] = lo(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? tl(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, Zn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, fa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? tl(co(l)) : co(l)
      ), r = e.multiple, s = r ? _a(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? _e(s) ? a.slice() : a : s
      ];
      try {
        e[pa](s);
      } finally {
        an(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[pa] = lo(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    _d(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[pa] = lo(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !sb(t, n[1], n[0])) && _d(e, t);
  }
};
function sb(e, t, n) {
  if (!n || _e(e)) return Ui(e, t);
  if (_a(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function _d(e, t) {
  const n = e.multiple, i = _e(t);
  if (!(n && !i && !_a(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = co(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = Vv(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Ui(co(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function co(e) {
  return "_value" in e ? e._value : e.value;
}
const ob = ["ctrl", "shift", "alt", "meta"], lb = {
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
  exact: (e, t) => ob.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ve = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = lb[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, cb = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, St = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = pi(a.key);
    if (t.some(
      (s) => s === r || cb[s] === r
    ))
      return e(a);
  }));
}, ub = /* @__PURE__ */ mt({ patchProp: nb }, Pm);
let wd;
function db() {
  return wd || (wd = gm(ub));
}
const fb = ((...e) => {
  const t = db().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = pb(i);
    if (!a) return;
    const r = t._component;
    !xe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, hb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function hb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function pb(e) {
  return nt(e) ? document.querySelector(e) : e;
}
function cu(e, t, n) {
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
function Sd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function vb(e) {
  if (Array.isArray(e)) return e;
}
function gb(e, t) {
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
function mb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bb(e, t) {
  return vb(e) || gb(e, t) || yb(e, t) || mb();
}
function yb(e, t) {
  if (e) {
    if (typeof e == "string") return Sd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Sd(e, t) : void 0;
  }
}
const Yh = Object.entries, Cd = Object.setPrototypeOf, _b = Object.isFrozen, wb = Object.getPrototypeOf, Sb = Object.getOwnPropertyDescriptor;
let yt = Object.freeze, Tt = Object.seal, Ba = Object.create, Xh = typeof Reflect < "u" && Reflect, Ac = Xh.apply, kc = Xh.construct;
yt || (yt = function(t) {
  return t;
});
Tt || (Tt = function(t) {
  return t;
});
Ac || (Ac = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
kc || (kc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ca = bt(Array.prototype.forEach), Cb = bt(Array.prototype.lastIndexOf), Td = bt(Array.prototype.pop), yr = bt(Array.prototype.push), Tb = bt(Array.prototype.splice), qa = Array.isArray, Or = bt(String.prototype.toLowerCase), Bl = bt(String.prototype.toString), Ed = bt(String.prototype.match), _r = bt(String.prototype.replace), Ad = bt(String.prototype.indexOf), Eb = bt(String.prototype.trim), Ab = bt(Number.prototype.toString), kb = bt(Boolean.prototype.toString), kd = typeof BigInt > "u" ? null : bt(BigInt.prototype.toString), Od = typeof Symbol > "u" ? null : bt(Symbol.prototype.toString), Zt = bt(Object.prototype.hasOwnProperty), wr = bt(Object.prototype.toString), Dt = bt(RegExp.prototype.test), sa = Ob(TypeError);
function bt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return Ac(e, t, i);
  };
}
function Ob(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return kc(e, n);
  };
}
function je(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Or;
  if (Cd && Cd(e, null), !qa(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (_b(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function Nb(e) {
  for (let t = 0; t < e.length; t++)
    Zt(e, t) || (e[t] = null);
  return e;
}
function nn(e) {
  const t = Ba(null);
  for (const i of Yh(e)) {
    var n = bb(i, 2);
    const a = n[0], r = n[1];
    Zt(e, a) && (qa(r) ? t[a] = Nb(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = nn(r) : t[a] = r);
  }
  return t;
}
function xb(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Ab(e);
    case "boolean":
      return kb(e);
    case "bigint":
      return kd ? kd(e) : "0";
    case "symbol":
      return Od ? Od(e) : "Symbol()";
    case "undefined":
      return wr(e);
    case "function":
    case "object": {
      if (e === null)
        return wr(e);
      const t = e, n = Tn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : wr(i);
      }
      return wr(e);
    }
    default:
      return wr(e);
  }
}
function Tn(e, t) {
  for (; e !== null; ) {
    const i = Sb(e, t);
    if (i) {
      if (i.get)
        return bt(i.get);
      if (typeof i.value == "function")
        return bt(i.value);
    }
    e = wb(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Lb(e) {
  try {
    return Dt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Nd = yt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Hl = yt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), jl = yt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Rb = yt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Vl = yt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ib = yt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), xd = yt(["#text"]), Ld = yt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Gl = yt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Rd = yt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), $s = yt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pb = Tt(/{{[\w\W]*|^[\w\W]*}}/g), Db = Tt(/<%[\w\W]*|^[\w\W]*%>/g), $b = Tt(/\${[\w\W]*/g), Mb = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Fb = Tt(/^aria-[\-\w]+$/), Id = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), zb = Tt(/^(?:\w+script|data):/i), Ub = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Bb = Tt(/^html$/i), Hb = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), Pd = Tt(/<[/\w!]/g), Dd = Tt(/<[/\w]/g), jb = Tt(/<\/no(script|embed|frames)/i), Vb = Tt(/\/>/i), tn = {
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
}, Zh = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Gb = yt(je({}, Zh)), Kb = (function() {
  const e = {};
  return ca(Zh, (t) => {
    e[t] = Tt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), yt(e);
})(), Wb = function() {
  return typeof window > "u" ? null : window;
}, qb = function(t, n) {
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
}, $d = function() {
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
}, Ni = function(t, n, i, a) {
  return Zt(t, n) && qa(t[n]) ? je(a.base ? nn(a.base) : {}, t[n], a.transform) : i;
}, Kl = function(t, n, i) {
  const a = Zt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? nn(a) : i();
};
function Jh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wb();
  const t = (ee) => Jh(ee);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, S = o.prototype, E = Tn(S, "cloneNode"), N = Tn(S, "remove"), A = Tn(S, "nextSibling"), O = Tn(S, "childNodes"), I = Tn(S, "parentNode"), M = Tn(S, "shadowRoot"), K = Tn(S, "attributes"), F = s && s.prototype ? Tn(s.prototype, "nodeType") : null, Z = s && s.prototype ? Tn(s.prototype, "nodeName") : null, D = s && s.prototype ? Tn(s.prototype, "ownerDocument") : null, J = function(w) {
    return F ? F(w) : w.nodeType;
  }, fe = function(w) {
    return Z ? Z(w) : w.nodeName;
  };
  if (typeof r == "function") {
    const ee = n.createElement("template");
    ee.content && ee.content.ownerDocument && (n = ee.content.ownerDocument);
  }
  let X, re = "", be, te = !1, ae = 0;
  const P = function() {
    if (ae > 0)
      throw sa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $ = function(w) {
    P(), ae++;
    try {
      return X.createHTML(w);
    } finally {
      ae--;
    }
  }, Y = function(w) {
    P(), ae++;
    try {
      return X.createScriptURL(w);
    } finally {
      ae--;
    }
  }, se = function() {
    return te || (be = qb(h, a), te = !0), be;
  }, ie = n, pe = ie.implementation, he = ie.createNodeIterator, Se = ie.createDocumentFragment, ge = ie.getElementsByTagName, He = i.importNode;
  let Ee = $d();
  t.isSupported = typeof Yh == "function" && typeof I == "function" && pe && pe.createHTMLDocument !== void 0;
  const at = Pb, ct = Db, ut = $b, Et = Mb, qe = Fb, Rt = zb, U = Ub, v = Hb;
  let C = Id, k = null;
  const L = je({}, [...Nd, ...Hl, ...jl, ...Vl, ...xd]);
  let x = null;
  const z = je({}, [...Ld, ...Gl, ...Rd, ...$s]);
  let G = Object.seal(Ba(null, {
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
  })), V = null, Q = null;
  const j = Object.seal(Ba(null, {
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
  let ue = !0, oe = !0, me = !1, Ce = !0, Oe = !1, $e = !0, Re = !1, Ye = !1, rt = null, At = null, it = !1, Yt = !1, Gn = !1, vt = !1, Vt = !0, Ki = !1;
  const Wi = "user-content-";
  let Qa = !0, er = !1, gi = {}, mi = null;
  const ms = je({}, [
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
  let bs = null;
  const tr = je({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ta = null;
  const Ea = je({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), bi = "http://www.w3.org/1998/Math/MathML", yi = "http://www.w3.org/2000/svg", Jt = "http://www.w3.org/1999/xhtml";
  let _i = Jt, Aa = !1, ka = null;
  const _l = je({}, [bi, yi, Jt], Bl), Oa = yt(["mi", "mo", "mn", "ms", "mtext"]);
  let qi = je({}, Oa);
  const nr = yt(["annotation-xml"]);
  let Na = je({}, nr);
  const ys = je({}, ["title", "style", "font", "a", "script"]);
  let wi = null;
  const _s = ["application/xhtml+xml", "text/html"], ws = "text/html";
  let st = null, Si = null;
  const Ss = n.createElement("form"), Gt = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, ir = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Si && Si === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = nn(w), wi = // eslint-disable-next-line unicorn/prefer-includes
    _s.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? ws : w.PARSER_MEDIA_TYPE, st = wi === "application/xhtml+xml" ? Bl : Or, k = Ni(w, "ALLOWED_TAGS", L, {
      transform: st
    }), x = Ni(w, "ALLOWED_ATTR", z, {
      transform: st
    }), ka = Ni(w, "ALLOWED_NAMESPACES", _l, {
      transform: Bl
    }), Ta = Ni(w, "ADD_URI_SAFE_ATTR", Ea, {
      transform: st,
      base: Ea
    }), bs = Ni(w, "ADD_DATA_URI_TAGS", tr, {
      transform: st,
      base: tr
    }), mi = Ni(w, "FORBID_CONTENTS", ms, {
      transform: st
    }), V = Ni(w, "FORBID_TAGS", nn({}), {
      transform: st
    }), Q = Ni(w, "FORBID_ATTR", nn({}), {
      transform: st
    }), gi = Zt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? nn(w.USE_PROFILES) : w.USE_PROFILES : !1, ue = w.ALLOW_ARIA_ATTR !== !1, oe = w.ALLOW_DATA_ATTR !== !1, me = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Ce = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Oe = w.SAFE_FOR_TEMPLATES || !1, $e = w.SAFE_FOR_XML !== !1, Re = w.WHOLE_DOCUMENT || !1, Yt = w.RETURN_DOM || !1, Gn = w.RETURN_DOM_FRAGMENT || !1, vt = w.RETURN_TRUSTED_TYPE || !1, it = w.FORCE_BODY || !1, Vt = w.SANITIZE_DOM !== !1, Ki = w.SANITIZE_NAMED_PROPS || !1, Qa = w.KEEP_CONTENT !== !1, er = w.IN_PLACE || !1, C = Lb(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Id, _i = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Jt, qi = Kl(
      w,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => je({}, Oa)
      // Default built-in map
    ), Na = Kl(
      w,
      "HTML_INTEGRATION_POINTS",
      () => je({}, nr)
      // Default built-in map
    );
    const R = Kl(w, "CUSTOM_ELEMENT_HANDLING", () => Ba(null));
    if (G = Ba(null), Zt(R, "tagNameCheck") && Gt(R.tagNameCheck) && (G.tagNameCheck = R.tagNameCheck), Zt(R, "attributeNameCheck") && Gt(R.attributeNameCheck) && (G.attributeNameCheck = R.attributeNameCheck), Zt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), Tt(G), Oe && (oe = !1), Gn && (Yt = !0), gi && (k = je({}, xd), x = Ba(null), gi.html === !0 && (je(k, Nd), je(x, Ld)), gi.svg === !0 && (je(k, Hl), je(x, Gl), je(x, $s)), gi.svgFilters === !0 && (je(k, jl), je(x, Gl), je(x, $s)), gi.mathMl === !0 && (je(k, Vl), je(x, Rd), je(x, $s))), j.tagCheck = null, j.attributeCheck = null, Zt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? j.tagCheck = w.ADD_TAGS : qa(w.ADD_TAGS) && (k === L && (k = nn(k)), je(k, w.ADD_TAGS, st))), Zt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? j.attributeCheck = w.ADD_ATTR : qa(w.ADD_ATTR) && (x === z && (x = nn(x)), je(x, w.ADD_ATTR, st))), Zt(w, "ADD_FORBID_CONTENTS") && qa(w.ADD_FORBID_CONTENTS) && (mi === ms && (mi = nn(mi)), je(mi, w.ADD_FORBID_CONTENTS, st)), Qa && (k["#text"] = !0), Re && je(k, ["html", "head", "body"]), k.table && (je(k, ["tbody"]), delete V.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw sa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw sa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = X;
      X = w.TRUSTED_TYPES_POLICY;
      try {
        re = $("");
      } catch (le) {
        throw X = q, le;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (X = void 0, re = "") : (X === void 0 && (X = se()), X && typeof re == "string" && (re = $("")));
    yt && yt(w), Si = w;
  }, Yi = je({}, [...Hl, ...jl, ...Rb]), Cs = je({}, [...Vl, ...Ib]), wl = function(w, R, q) {
    return R.namespaceURI === Jt ? w === "svg" : R.namespaceURI === bi ? w === "svg" && (q === "annotation-xml" || qi[q]) : !!Yi[w];
  }, Sl = function(w, R, q) {
    return R.namespaceURI === Jt ? w === "math" : R.namespaceURI === yi ? w === "math" && Na[q] : !!Cs[w];
  }, xa = function(w, R, q) {
    return R.namespaceURI === yi && !Na[q] || R.namespaceURI === bi && !qi[q] ? !1 : !Cs[w] && (ys[w] || !Yi[w]);
  }, Cl = function(w) {
    let R = I(w);
    (!R || !R.tagName) && (R = {
      namespaceURI: _i,
      tagName: "template"
    });
    const q = Or(w.tagName), le = Or(R.tagName);
    return ka[w.namespaceURI] ? w.namespaceURI === yi ? wl(q, R, le) : w.namespaceURI === bi ? Sl(q, R, le) : w.namespaceURI === Jt ? xa(q, R, le) : !!(wi === "application/xhtml+xml" && ka[w.namespaceURI]) : !1;
  }, ln = function(w) {
    yr(t.removed, {
      element: w
    });
    try {
      I(w).removeChild(w);
    } catch {
      if (N(w), !I(w))
        throw sa("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Xi = function(w, R, q) {
    try {
      w.removeAttributeNode(R);
    } catch {
      try {
        w.removeAttribute(q);
      } catch {
      }
    }
  }, Zi = function(w) {
    It(w);
    const R = O(w);
    if (R) {
      const le = [];
      ca(R, (ve) => {
        yr(le, ve);
      }), ca(le, (ve) => {
        try {
          N(ve);
        } catch {
        }
      });
    }
    const q = K(w);
    if (q)
      for (let le = q.length - 1; le >= 0; --le) {
        const ve = q[le], Ae = ve && ve.name;
        typeof Ae == "string" && Xi(w, ve, Ae);
      }
  }, xn = function(w, R, q) {
    if (!q)
      try {
        q = R.getAttributeNode(w);
      } catch {
        q = null;
      }
    yr(t.removed, {
      attribute: q || null,
      from: R
    });
    try {
      q ? R.removeAttributeNode(q) : R.removeAttribute(w);
    } catch {
      try {
        R.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (Yt || Gn)
        try {
          ln(R);
        } catch {
        }
      else
        try {
          R.setAttribute(w, "");
        } catch {
        }
  }, ar = function(w) {
    const R = K(w);
    if (R)
      for (let q = R.length - 1; q >= 0; --q) {
        const le = R[q], ve = le && le.name;
        typeof ve != "string" || x[st(ve)] || Xi(w, le, ve);
      }
  }, It = function(w) {
    const R = [w];
    for (; R.length > 0; ) {
      const q = R.pop();
      J(q) === tn.element && ar(q);
      const ve = O(q);
      if (ve)
        for (let Ae = ve.length - 1; Ae >= 0; --Ae)
          R.push(ve[Ae]);
    }
  }, Ji = function(w, R) {
    return $e ? w === "patchsrc" ? !0 : w === "for" && R !== "label" && R !== "output" : !1;
  }, Ts = function(w) {
    if (!$e)
      return;
    const R = [w];
    for (; R.length > 0; ) {
      const q = R.pop(), le = J(q);
      if (le === tn.processingInstruction || le === tn.comment && Dt(Dd, q.data)) {
        try {
          N(q);
        } catch {
        }
        continue;
      }
      if (le === tn.element) {
        const Ae = q, et = st(fe(q));
        try {
          Ae.hasAttribute && Ae.hasAttribute("patchsrc") && Ae.removeAttribute("patchsrc"), Ae.hasAttribute && Ae.hasAttribute("for") && Ji("for", et) && Ae.removeAttribute("for");
        } catch {
        }
      }
      const ve = O(q);
      if (ve)
        for (let Ae = ve.length - 1; Ae >= 0; --Ae)
          R.push(ve[Ae]);
    }
  }, Es = function(w) {
    let R = null, q = null;
    if (it)
      w = "<remove></remove>" + w;
    else {
      const Ae = Ed(w, /^[\r\n\t ]+/);
      q = Ae && Ae[0];
    }
    wi === "application/xhtml+xml" && _i === Jt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const le = X ? $(w) : w;
    if (_i === Jt)
      try {
        R = new u().parseFromString(le, wi);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = pe.createDocument(_i, "template", null);
      try {
        R.documentElement.innerHTML = Aa ? re : le;
      } catch {
      }
    }
    const ve = R.body || R.documentElement;
    return w && q && ve.insertBefore(n.createTextNode(q), ve.childNodes[0] || null), _i === Jt ? ge.call(R, Re ? "html" : "body")[0] : Re ? R.documentElement : ve;
  }, As = function(w) {
    const R = D ? D(w) : w.ownerDocument;
    return he.call(
      R || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, La = function(w) {
    return w = _r(w, at, " "), w = _r(w, ct, " "), w = _r(w, ut, " "), w;
  }, Te = function(w) {
    var R;
    w.normalize();
    const q = D ? D(w) : w.ownerDocument, le = he.call(
      q || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ve = le.nextNode();
    for (; ve; )
      ve.data = La(ve.data), ve = le.nextNode();
    const Ae = (R = w.querySelectorAll) === null || R === void 0 ? void 0 : R.call(w, "template");
    Ae && ca(Ae, (et) => {
      dt(et.content) && Te(et.content);
    });
  }, cn = function(w) {
    const R = Z ? Z(w) : null;
    return typeof R != "string" || st(R) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    w.attributes !== K(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    w.nodeType !== F(w) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    w.childNodes !== O(w);
  }, dt = function(w) {
    if (!F || typeof w != "object" || w === null)
      return !1;
    try {
      return F(w) === tn.documentFragment;
    } catch {
      return !1;
    }
  }, Qt = function(w) {
    if (!F || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof F(w) == "number";
    } catch {
      return !1;
    }
  };
  function ft(ee, w, R) {
    ee.length !== 0 && ca(ee, (q) => {
      q.call(t, w, R, Si);
    });
  }
  const _t = function(w, R) {
    return !!($e && w.hasChildNodes() && !Qt(w.firstElementChild) && Dt(Pd, w.textContent) && Dt(Pd, w.innerHTML) || $e && w.namespaceURI === Jt && Gb[R] && (Qt(w.firstElementChild) || typeof w.textContent == "string" && Dt(Kb[R], w.textContent)) || w.nodeType === tn.processingInstruction || $e && w.nodeType === tn.comment && Dt(Dd, w.data));
  }, Qi = function(w, R) {
    if (w instanceof RegExp)
      return Dt(w, R);
    if (w instanceof Function) {
      for (var q = arguments.length, le = new Array(q > 2 ? q - 2 : 0), ve = 2; ve < q; ve++)
        le[ve - 2] = arguments[ve];
      return !!w(R, ...le);
    }
    return !1;
  }, Kn = function(w, R, q) {
    if (!V[R] && Ci(R) && Qi(G.tagNameCheck, R))
      return !1;
    if (Qa && !mi[R]) {
      const le = I(w), ve = O(w);
      if (ve && le) {
        const Ae = ve.length;
        for (let et = Ae - 1; et >= 0; --et) {
          const Ke = w === q ? E(ve[et], !0) : ve[et];
          le.insertBefore(Ke, A(w));
        }
      }
    }
    return ln(w), !0;
  }, Ln = function(w, R, q, le) {
    return w.length === 0 ? R : R === q || R === le ? nn(R) : R;
  }, Ra = function(w, R) {
    return w === R || I(w) !== null ? !1 : (er && It(w), !0);
  }, un = function(w, R) {
    if (ft(Ee.beforeSanitizeElements, w, null), Ra(w, R))
      return !0;
    if (cn(w))
      return ln(w), !0;
    const q = st(fe(w));
    if (k = Ln(Ee.uponSanitizeElement, k, L, rt), ft(Ee.uponSanitizeElement, w, {
      tagName: q,
      allowedTags: k
    }), Ra(w, R))
      return !0;
    if (_t(w, q))
      return ln(w), !0;
    if (V[q] || !(j.tagCheck instanceof Function && j.tagCheck(q)) && !k[q]) {
      const ve = Kn(w, q, R);
      return ve === !1 && ft(Ee.afterSanitizeElements, w, null), ve;
    }
    if (J(w) === tn.element && !Cl(w) || (q === "noscript" || q === "noembed" || q === "noframes") && Dt(jb, w.innerHTML))
      return ln(w), !0;
    if (Oe && w.nodeType === tn.text) {
      const ve = La(w.textContent);
      w.textContent !== ve && (yr(t.removed, {
        element: w.cloneNode()
      }), w.textContent = ve);
    }
    return ft(Ee.afterSanitizeElements, w, null), !1;
  }, ea = function(w, R, q) {
    if (Q[R] || Ji(R, w) || Vt && (R === "id" || R === "name") && (q in n || q in Ss))
      return !1;
    const le = x[R] || j.attributeCheck instanceof Function && j.attributeCheck(R, w);
    return oe && Dt(Et, R) || ue && Dt(qe, R) ? !0 : le ? Ta[R] || Dt(C, _r(q, U, "")) || (R === "src" || R === "xlink:href" || R === "href") && w !== "script" && Ad(q, "data:") === 0 && bs[w] || me && !Dt(Rt, _r(q, U, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ci(w) && Qi(G.tagNameCheck, w) && Qi(G.attributeNameCheck, R, w) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      R === "is" && G.allowCustomizedBuiltInElements && Qi(G.tagNameCheck, q)
    );
  }, rr = je({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ci = function(w) {
    return !rr[Or(w)] && Dt(v, w);
  }, sr = function(w, R, q, le) {
    if (X && typeof h == "object" && typeof h.getAttributeType == "function" && !q)
      switch (h.getAttributeType(w, R)) {
        case "TrustedHTML":
          return $(le);
        case "TrustedScriptURL":
          return Y(le);
      }
    return le;
  }, Rn = function(w, R, q, le) {
    try {
      q ? w.setAttributeNS(q, R, le) : w.setAttribute(R, le), cn(w) ? ln(w) : Td(t.removed);
    } catch {
      xn(R, w);
    }
  }, Ti = function(w) {
    ft(Ee.beforeSanitizeAttributes, w, null);
    const R = w.attributes;
    if (!R || cn(w))
      return;
    x = Ln(Ee.uponSanitizeAttribute, x, z, At);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let le = R.length;
    const ve = st(w.nodeName);
    for (; le--; ) {
      const Ae = R[le], et = Ae.name, Ke = Ae.namespaceURI, Pt = Ae.value, wt = st(et), Ai = Pt;
      let ot = et === "value" ? Ai : Eb(Ai);
      if (q.attrName = wt, q.attrValue = ot, q.keepAttr = !0, q.forceKeepAttr = void 0, ft(Ee.uponSanitizeAttribute, w, q), ot = q.attrValue, Ki && (wt === "id" || wt === "name") && Ad(ot, Wi) !== 0 && (xn(et, w, Ae), ot = Wi + ot), $e && Dt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ot)) {
        xn(et, w, Ae);
        continue;
      }
      if (wt === "attributename" && Ed(ot, "href")) {
        xn(et, w, Ae);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          xn(et, w, Ae);
          continue;
        }
        if (!Ce && Dt(Vb, ot)) {
          xn(et, w, Ae);
          continue;
        }
        if (Oe && (ot = La(ot)), !ea(ve, wt, ot)) {
          xn(et, w, Ae);
          continue;
        }
        ot = sr(ve, wt, Ke, ot), ot !== Ai && Rn(w, et, Ke, ot);
      }
    }
    ft(Ee.afterSanitizeAttributes, w, null);
  }, Wn = function(w) {
    let R = null;
    const q = As(w);
    for (ft(Ee.beforeSanitizeShadowDOM, w, null); R = q.nextNode(); )
      if (ft(Ee.uponSanitizeShadowNode, R, null), un(R, w), Ti(R), dt(R.content) && Wn(R.content), J(R) === tn.element) {
        const le = M(R);
        dt(le) && (Ei(le), Wn(le));
      }
    ft(Ee.afterSanitizeShadowDOM, w, null);
  }, Ei = function(w) {
    const R = [{
      node: w,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const q = R.pop();
      if (q.shadow) {
        Wn(q.shadow);
        continue;
      }
      const le = q.node, Ae = J(le) === tn.element, et = O(le);
      if (et)
        for (let Ke = et.length - 1; Ke >= 0; --Ke)
          R.push({
            node: et[Ke],
            shadow: null
          });
      if (Ae) {
        const Ke = Z ? Z(le) : null;
        if (typeof Ke == "string" && st(Ke) === "template") {
          const Pt = le.content;
          dt(Pt) && R.push({
            node: Pt,
            shadow: null
          });
        }
      }
      if (Ae) {
        const Ke = M(le);
        dt(Ke) && R.push({
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
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, q = null, le = null, ve = null;
    if (Aa = !ee, Aa && (ee = "<!-->"), typeof ee != "string" && !Qt(ee) && (ee = xb(ee), typeof ee != "string"))
      throw sa("dirty is not a string, aborting");
    if (!t.isSupported)
      return ee;
    Ye ? (k = rt, x = At) : ir(w), (Ee.uponSanitizeElement.length > 0 || Ee.uponSanitizeAttribute.length > 0) && (k = nn(k)), Ee.uponSanitizeAttribute.length > 0 && (x = nn(x)), t.removed = [];
    const Ae = er && typeof ee != "string" && Qt(ee);
    if (Ae) {
      Ts(ee);
      const Pt = fe(ee);
      if (typeof Pt == "string") {
        const wt = st(Pt);
        if (!k[wt] || V[wt])
          throw Zi(ee), sa("root node is forbidden and cannot be sanitized in-place");
      }
      if (cn(ee))
        throw Zi(ee), sa("root node is clobbered and cannot be sanitized in-place");
      try {
        Ei(ee);
      } catch (wt) {
        throw Zi(ee), wt;
      }
    } else if (Qt(ee))
      R = Es("<!---->"), q = R.ownerDocument.importNode(ee, !0), q.nodeType === tn.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? R = q : R.appendChild(q), Ei(q);
    else {
      if (!Yt && !Oe && !Re && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return X && vt ? $(ee) : ee;
      if (R = Es(ee), !R)
        return Yt ? null : vt ? re : "";
    }
    R && it && ln(R.firstChild);
    const et = Ae ? ee : R;
    try {
      const Pt = As(et);
      for (; le = Pt.nextNode(); )
        un(le, et), Ti(le), dt(le.content) && Wn(le.content);
    } catch (Pt) {
      throw Ae && (Zi(ee), ca(t.removed, (wt) => {
        wt.element && It(wt.element);
      })), Pt;
    }
    if (Ae)
      return ca(t.removed, (Pt) => {
        Pt.element && It(Pt.element);
      }), Oe && Te(ee), ee;
    if (Yt) {
      if (Oe && Te(R), Gn)
        for (ve = Se.call(R.ownerDocument); R.firstChild; )
          ve.appendChild(R.firstChild);
      else
        ve = R;
      return (x.shadowroot || x.shadowrootmode) && (ve = He.call(i, ve, !0)), ve;
    }
    let Ke = Re ? R.outerHTML : R.innerHTML;
    return Re && k["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Dt(Bb, R.ownerDocument.doctype.name) && (Ke = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + Ke), Oe && (Ke = La(Ke)), X && vt ? $(Ke) : Ke;
  }, t.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ir(ee), Ye = !0, rt = k, At = x;
  }, t.clearConfig = function() {
    Si = null, Ye = !1, rt = null, At = null, X = be, re = "";
  }, t.isValidAttribute = function(ee, w, R) {
    Si || ir({});
    const q = st(ee), le = st(w);
    return ea(q, le, R);
  }, t.addHook = function(ee, w) {
    typeof w == "function" && Zt(Ee, ee) && yr(Ee[ee], w);
  }, t.removeHook = function(ee, w) {
    if (Zt(Ee, ee)) {
      if (w !== void 0) {
        const R = Cb(Ee[ee], w);
        return R === -1 ? void 0 : Tb(Ee[ee], R, 1)[0];
      }
      return Td(Ee[ee]);
    }
  }, t.removeHooks = function(ee) {
    Zt(Ee, ee) && (Ee[ee] = []);
  }, t.removeAllHooks = function() {
    Ee = $d();
  }, t;
}
var Qh = Jh();
function uu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wl, Md;
function Yb() {
  if (Md) return Wl;
  Md = 1;
  var e = /["'&<>]/;
  Wl = t;
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
  return Wl;
}
var Xb = Yb();
const uo = /* @__PURE__ */ uu(Xb);
function Zb() {
  return globalThis._nc_l10n_locale;
}
function Jb() {
  return Zb().replaceAll(/_/g, "-");
}
function hl() {
  return globalThis._nc_l10n_language;
}
function Qb(e) {
  const t = hl();
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
function ep(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function y(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, s = typeof i == "number" ? i : typeof n == "number" ? n : void 0, o = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (A) => A, d = (o.sanitize ? Qh.sanitize : l) || l, u = o.escape ? uo : l, h = (A) => typeof A == "string" || typeof A == "number", S = (A, O, I) => A.replace(/%n/g, "" + I).replace(/{([^{}]*)}/g, (M, K) => {
    if (O === void 0 || !(K in O))
      return u(M);
    const F = O[K];
    return h(F) ? u(`${F}`) : typeof F == "object" && h(F.value) ? (F.escape !== !1 ? uo : l)(`${F.value}`) : u(M);
  });
  let N = (a?.bundle ?? ep(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, d(typeof r == "object" || s !== void 0 ? S(
    N,
    r,
    s
  ) : N);
}
function Mn(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? ep(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return y(e, d[u], a, i, r);
    }
  }
  return i === 1 ? y(e, t, a, i, r) : y(e, n, a, i, r);
}
function ey(e, t = hl()) {
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
class fo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? fo.GLOBAL_SCOPE_PERSISTENT : fo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class ty {
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
    return new fo(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function tp(e) {
  return new ty(e);
}
function ny() {
  try {
    return cu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var ql, Fd;
function np() {
  if (Fd) return ql;
  Fd = 1;
  var e = {};
  return ql = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, ql;
}
var Yl, zd;
function ip() {
  if (zd) return Yl;
  zd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Yl = {
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
  }, Yl;
}
var Ms = { exports: {} }, Ud;
function iy() {
  return Ud || (Ud = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = ip(), r = np();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], d = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const S = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [S, i]
    ], N = (O) => {
      for (const [I, M] of E)
        O = O.split(`${I}*`).join(`${I}{0,${M}}`).split(`${I}+`).join(`${I}{1,${M}}`);
      return O;
    }, A = (O, I, M) => {
      const K = N(I), F = h++;
      r(O, F, I), u[O] = F, l[F] = I, d[F] = K, s[F] = new RegExp(I, M ? "g" : void 0), o[F] = new RegExp(K, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${S}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${S}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Ms, Ms.exports)), Ms.exports;
}
var Xl, Bd;
function ay() {
  if (Bd) return Xl;
  Bd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Xl = (i) => i ? typeof i != "object" ? e : i : t, Xl;
}
var Zl, Hd;
function ry() {
  if (Hd) return Zl;
  Hd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return Zl = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Zl;
}
var Jl, jd;
function ap() {
  if (jd) return Jl;
  jd = 1;
  const e = np(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = ip(), { safeRe: i, t: a } = iy(), r = ay(), { compareIdentifiers: s } = ry(), o = (d, u) => {
    const h = u.split(".");
    if (h.length > d.length)
      return !1;
    for (let S = 0; S < h.length; S++)
      if (s(d[S], h[S]) !== 0)
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
          const N = +E;
          if (N >= 0 && N < n)
            return N;
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
            let N = this.prerelease.length;
            for (; --N >= 0; )
              typeof this.prerelease[N] == "number" && (this.prerelease[N]++, N = -2);
            if (N === -1) {
              if (h === this.prerelease.join(".") && S === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (h) {
            let N = [h, E];
            if (S === !1 && (N = [h]), o(this.prerelease, h)) {
              const A = this.prerelease[h.split(".").length];
              isNaN(A) && (this.prerelease = N);
            } else
              this.prerelease = N;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${u}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Jl = l, Jl;
}
var Ql, Vd;
function sy() {
  if (Vd) return Ql;
  Vd = 1;
  const e = ap();
  return Ql = (n, i) => new e(n, i).major, Ql;
}
var oy = sy();
const Gd = /* @__PURE__ */ uu(oy);
var ec, Kd;
function ly() {
  if (Kd) return ec;
  Kd = 1;
  const e = ap();
  return ec = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, ec;
}
var tc, Wd;
function cy() {
  if (Wd) return tc;
  Wd = 1;
  const e = ly();
  return tc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, tc;
}
var uy = cy();
const dy = /* @__PURE__ */ uu(uy);
class fy {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !dy(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Gd(t.getVersion()) !== Gd(this.getVersion()) && console.warn(
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
class hy {
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
let Sr = null;
function du() {
  return Sr !== null ? Sr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Sr = new fy(window._nc_event_bus) : Sr = window._nc_event_bus = new hy(), Sr);
}
function rp(e, t) {
  du().subscribe(e, t);
}
function py(e, t) {
  du().unsubscribe(e, t);
}
function ci(e, ...t) {
  du().emit(e, ...t);
}
const sp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const vy = Object.prototype.toString, gy = (e) => vy.call(e) === "[object Object]", $a = () => {
}, my = /* @__PURE__ */ by();
function by() {
  var e, t, n;
  return sp && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function nc(e) {
  return Array.isArray(e) ? e : [e];
}
function yy(e, t, n) {
  return lt(e, t, {
    ...n,
    immediate: !0
  });
}
const op = sp ? window : void 0;
function Nr(e) {
  var t;
  const n = oi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ya(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = W(() => {
    const i = nc(oi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return yy(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Nr(r))) !== null && i !== void 0 ? i : [op].filter((r) => r != null),
      nc(oi(n.value ? e[1] : e[0])),
      nc(g(n.value ? e[2] : e[1])),
      oi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = gy(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((S) => r.map((E) => t(h, S, E, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let qd = !1;
function Yd(e, t, n = {}) {
  const { window: i = op, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: $a,
    cancel: $a,
    trigger: $a
  } : $a;
  if (my && !qd) {
    qd = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((I) => I.addEventListener("click", $a, O)), i.document.documentElement.addEventListener("click", $a, O);
  }
  let l = !0;
  const d = (O) => oi(a).some((I) => {
    if (typeof I == "string") return Array.from(i.document.querySelectorAll(I)).some((M) => M === O.target || O.composedPath().includes(M));
    {
      const M = Nr(I);
      return M && (O.target === M || O.composedPath().includes(M));
    }
  });
  function u(O) {
    const I = oi(O);
    return I && I.$.subTree.shapeFlag === 16;
  }
  function h(O, I) {
    const M = oi(O), K = M.$.subTree && M.$.subTree.children;
    return K == null || !Array.isArray(K) ? !1 : K.some((F) => F.el === I.target || I.composedPath().includes(F.el));
  }
  const S = (O) => {
    const I = Nr(e);
    if (O.target != null && !(!(I instanceof Element) && u(e) && h(e, O)) && !(!I || I === O.target || O.composedPath().includes(I))) {
      if ("detail" in O && O.detail === 0 && (l = !d(O)), !l) {
        l = !0;
        return;
      }
      t(O);
    }
  };
  let E = !1;
  const N = [
    Ya(i, "click", (O) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), S(O));
    }, {
      passive: !0,
      capture: r
    }),
    Ya(i, "pointerdown", (O) => {
      const I = Nr(e);
      l = !d(O) && !!(I && !O.composedPath().includes(I));
    }, { passive: !0 }),
    s && Ya(i, "blur", (O) => {
      setTimeout(() => {
        const I = Nr(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !I?.contains(i.document.activeElement) && t(O);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => N.forEach((O) => O());
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
function _y(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Mt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Mt({
    x: 0,
    y: 0
  }), d = W(() => o.x - l.x), u = W(() => o.y - l.y), { max: h, abs: S } = Math, E = W(() => h(S(d.value), S(u.value)) >= n), N = /* @__PURE__ */ Qf(!1), A = W(() => E.value ? S(d.value) > S(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), O = (J) => [J.touches[0].clientX, J.touches[0].clientY], I = (J, fe) => {
    o.x = J, o.y = fe;
  }, M = (J, fe) => {
    l.x = J, l.y = fe;
  }, K = {
    passive: s,
    capture: !s
  }, F = (J) => {
    N.value && a?.(J, A.value), N.value = !1;
  }, Z = [
    Ya(e, "touchstart", (J) => {
      if (J.touches.length !== 1) return;
      const [fe, X] = O(J);
      I(fe, X), M(fe, X), r?.(J);
    }, K),
    Ya(e, "touchmove", (J) => {
      if (J.touches.length !== 1) return;
      const [fe, X] = O(J);
      M(fe, X), K.capture && !K.passive && Math.abs(d.value) > Math.abs(u.value) && J.preventDefault(), !N.value && E.value && (N.value = !0), N.value && i?.(J);
    }, K),
    Ya(e, ["touchend", "touchcancel"], F, K)
  ];
  return {
    isSwiping: N,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: d,
    lengthY: u,
    stop: () => Z.forEach((J) => J())
  };
}
var wy = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Yg(), r = qg(), s = /* @__PURE__ */ Ie([]), o = W(() => s.value.reduce((U, v) => (U[~~v.id] = v) && U, {})), l = W(() => s.value.length), d = /* @__PURE__ */ Ie(null), u = /* @__PURE__ */ Ie(!1), h = /* @__PURE__ */ Ie({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), S = /* @__PURE__ */ Ie({
      splitter: null,
      timeoutId: null
    }), E = W(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), N = () => {
      document.addEventListener("mousemove", I, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", I, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", I, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", I, { passive: !1 }), document.removeEventListener("touchend", M));
    }, O = (U, v) => {
      let C = U.target.closest(".splitpanes__splitter");
      if (C) {
        let { left: k, top: L } = C.getBoundingClientRect(), { clientX: x, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        h.value.cursorOffset = i.horizontal ? z - L : x - k;
      }
      N(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, I = (U) => {
      h.value.mouseDown && (U.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        X(J(U)), qe("resize", { event: U }, !0);
      }));
    }, M = (U) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), qe("resized", { event: U }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, K = (U, v) => {
      "ontouchstart" in window && (U.preventDefault(), S.value.splitter === v ? (clearTimeout(S.value.timeoutId), S.value.timeoutId = null, F(U, v), S.value.splitter = null) : (S.value.splitter = v, S.value.timeoutId = setTimeout(() => S.value.splitter = null, 500))), h.value.dragging || qe("splitter-click", {
        event: U,
        index: v
      }, !0);
    }, F = (U, v) => {
      if (qe("splitter-dblclick", {
        event: U,
        index: v
      }, !0), i.maximizePanes) {
        let C = 0;
        s.value = s.value.map((k, L) => (k.size = L === v ? k.max : k.min, L !== v && (C += k.min), k)), s.value[v].size -= C, qe("pane-maximize", {
          event: U,
          index: v,
          pane: s.value[v]
        }), qe("resized", {
          event: U,
          index: v
        }, !0);
      }
    }, Z = (U, v) => {
      if (!i.keyboardStep) return;
      let C = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", k = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!C && !k) return;
      U.preventDefault(), h.value.activeSplitter = v;
      let L = (C ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), x = te(v) + s.value[v].size;
      re(Math.min(Math.max(x + L * i.keyboardStep, 0), 100)), qe("resize", { event: U }, !0), qe("resized", { event: U }, !0), h.value.activeSplitter = null;
    }, D = (U, v) => {
      let C = o.value[v];
      C && qe("pane-click", {
        event: U,
        index: C.index,
        pane: C
      });
    }, J = (U) => {
      let v = d.value.getBoundingClientRect(), { clientX: C, clientY: k } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: C - (i.horizontal ? 0 : h.value.cursorOffset) - v.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - v.top
      };
    }, fe = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let v = d.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = v - U), U * 100 / v;
    }, X = (U) => {
      re(fe(U));
    }, re = (U) => {
      let v = h.value.activeSplitter;
      if (v === null || v >= s.value.length - 1) return;
      let C = {
        prevPanesSize: te(v),
        nextPanesSize: ae(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : C.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : C.nextPanesSize);
      U = Math.max(Math.min(U, L), k);
      let x = [v, v + 1], z = s.value[x[0]] || null, G = s.value[x[1]] || null, V = z !== null && z.max < 100 && U >= z.max + C.prevPanesSize, Q = G !== null && G.max < 100 && U <= 100 - (G.max + ae(v + 1));
      if (V || Q) {
        V ? (z.size = z.max, G.size = Math.min(Math.max(100 - z.max - C.prevPanesSize - C.nextPanesSize, G.min), G.max)) : (z.size = Math.min(Math.max(100 - G.max - C.prevPanesSize - ae(v + 1), z.min), z.max), G.size = G.max);
        return;
      }
      if (i.pushOtherPanes) {
        let j = be(C, U);
        if (!j) return;
        ({ sums: C, panesToResize: x } = j), z = s.value[x[0]] || null, G = s.value[x[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - C.prevPanesSize - C.prevReachedMinPanes, z.min), z.max)), G !== null && (G.size = Math.min(Math.max(100 - U - C.nextPanesSize - C.nextReachedMinPanes, G.min), G.max));
    }, be = (U, v) => {
      let C = h.value.activeSplitter, k = [C, C + 1];
      if (v < U.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = P(C).index, U.prevReachedMinPanes = 0, k[0] < C && s.value.forEach((L, x) => {
          x > k[0] && x <= C && (L.size = L.min, U.prevReachedMinPanes += L.min);
        }), k[0] === void 0) return U.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((L, x) => {
          x > 0 && x <= C && (L.size = L.min, U.prevReachedMinPanes += L.min);
        }), s.value[k[1]].size = 100 - U.prevReachedMinPanes - s.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = te(k[0]);
      }
      return v > 100 - U.nextPanesSize - s.value[k[1]].min && (k[1] = $(C).index, U.nextReachedMinPanes = 0, k[1] > C + 1 && s.value.forEach((L, x) => {
        x > C && x < k[1] && (L.size = L.min, U.nextReachedMinPanes += L.min);
      }), U.nextPanesSize = k[1] === void 0 ? 0 : ae(k[1] - 1), k[1] === void 0) ? (U.nextReachedMinPanes = 0, s.value.forEach((L, x) => {
        x >= C + 1 && (L.size = L.min, U.nextReachedMinPanes += L.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - U.prevPanesSize - ae(k[0] - 1)), null) : {
        sums: U,
        panesToResize: k
      };
    }, te = (U) => s.value.reduce((v, C, k) => v + (k < U ? C.size : 0), 0), ae = (U) => s.value.reduce((v, C, k) => v + (k > U + 1 ? C.size : 0), 0), P = (U) => [...s.value].reverse().find((v) => v.index < U && v.size > v.min) || {}, $ = (U) => s.value.find((v) => v.index > U + 1 && v.size > v.min) || {}, Y = () => {
      let U = Array.from(d.value?.children || []);
      for (let v of U) {
        let C = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !C && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, se = (U, v, C = !1) => {
      let k = U - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), C || (L.onmousedown = (x) => O(x, k), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (x) => O(x, k)), L.onclick = (x) => K(x, k + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (x) => Z(x, k))), L.ondblclick = (x) => F(x, k + 1), v.parentNode.insertBefore(L, v);
    }, ie = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, pe = () => {
      let U = Array.from(d.value?.children || []);
      for (let C of U) C.className.includes("splitpanes__splitter") && ie(C);
      let v = 0;
      for (let C of U) C.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? se(v, C, !0) : v && se(v, C), v++);
    }, he = ({ uid: U, ...v }) => {
      let C = o.value[U];
      for (let [k, L] of Object.entries(v)) C[k] = L;
    }, Se = !1, ge = (U) => {
      let v = -1;
      Array.from(d.value?.children || []).some((C) => (C.className.includes("splitpanes__pane") && v++, C.isSameNode(U.el))), s.value.splice(v, 0, {
        ...U,
        index: v
      }), s.value.forEach((C, k) => C.index = k), u.value && !Se && (Se = !0, an(() => {
        pe(), Ee({ addedPane: s.value[v] }), qe("pane-add", { pane: s.value[v] }), Se = !1;
      }));
    }, He = (U) => {
      let v = s.value.findIndex((k) => k.id === U);
      s.value[v].el = null;
      let C = s.value.splice(v, 1)[0];
      s.value.forEach((k, L) => k.index = L), an(() => {
        pe(), qe("pane-remove", { pane: C }), Ee({ removedPane: {
          ...C
        } });
      });
    }, Ee = (U = {}) => {
      !U.addedPane && !U.removedPane ? ct() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? ut(U) : at(), u.value && qe("resized");
    }, at = () => {
      let U = 100 / l.value, v = 100, C = [], k = [];
      for (let L of s.value) L.size = Math.max(Math.min(U, L.max), L.min), v -= L.size, L.size >= L.max && C.push(L.id), L.size <= L.min && k.push(L.id);
      Math.abs(v) > 0.1 && Et(v, C, k);
    }, ct = () => {
      let U = 100, v = [], C = [], k = 0;
      for (let x of s.value) U -= x.size, x.givenSize !== null && k++, x.size >= x.max && v.push(x.id), x.size <= x.min && C.push(x.id);
      let L = 100;
      if (U > 0.1) {
        for (let x of s.value) x.givenSize === null && (x.size = Math.max(Math.min(U / (l.value - k), x.max), x.min)), L -= x.size;
        L > 0.1 && Et(L, v, C);
      }
    }, ut = ({ addedPane: U, removedPane: v } = {}) => {
      let C = s.value.reduce((V, Q) => V + (Q.givenSize === null ? 0 : Q.givenSize), 0), k = s.value.filter((V) => V.givenSize === null).length, L = k > 0 ? (100 - C) / k : 0, x = 0, z = [], G = [];
      for (let V of s.value) x -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && G.push(V.id);
      if (!(Math.abs(x) < 0.1)) {
        x = 100;
        for (let V of s.value) V.givenSize === null && (V.size = Math.max(Math.min(L, V.max), V.min)), x -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && G.push(V.id);
        Math.abs(x) > 0.1 && Et(x, z, G);
      }
    }, Et = (U, v, C) => {
      let k;
      k = U > 0 ? U / (l.value - v.length) : U / (l.value - C.length), s.value.forEach((L, x) => {
        if (U > 0 && !v.includes(L.id)) {
          let z = Math.max(Math.min(L.size + k, L.max), L.min), G = z - L.size;
          U -= G, L.size = z;
        } else if (!C.includes(L.id)) {
          let z = Math.max(Math.min(L.size + k, L.max), L.min), G = z - L.size;
          U -= G, L.size = z;
        }
      }), Math.abs(U) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, qe = (U, v = void 0, C = !1) => {
      let k = v?.index ?? h.value.activeSplitter ?? null;
      n(U, {
        ...v,
        ...k !== null && { index: k },
        ...C && k !== null && {
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
    lt(() => i.firstSplitter, () => pe()), lt(() => i.horizontal, (U) => an(() => {
      n("direction-changed", {
        horizontal: U,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), ji(() => {
      Y(), pe(), Ee(), qe("ready"), u.value = !0;
    }), Ja(() => u.value = !1);
    let Rt = () => {
      let { class: U, ...v } = a;
      return Xt("div", {
        ref: d,
        class: [E.value, U],
        ...v
      }, r.default?.());
    };
    return gn("panes", s), gn("indexedPanes", o), gn("horizontal", W(() => i.horizontal)), gn("requestUpdate", he), gn("onPaneAdd", ge), gn("onPaneRemove", He), gn("onPaneClick", D), (U, v) => (_(), Me(iu(Rt)));
  }
}), Sy = {
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
    let t = e, n = zt("requestUpdate"), i = zt("onPaneAdd"), a = zt("horizontal"), r = zt("onPaneRemove"), s = zt("onPaneClick"), o = Sa()?.uid, l = zt("indexedPanes"), d = W(() => l.value[o]), u = /* @__PURE__ */ Ie(null), h = W(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), S.value);
    }), S = W(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = W(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), N = W(() => {
      let A = d.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return lt(() => h.value, (A) => n({
      uid: o,
      size: A
    })), lt(() => S.value, (A) => n({
      uid: o,
      min: A
    })), lt(() => E.value, (A) => n({
      uid: o,
      max: A
    })), ji(() => {
      i({
        id: o,
        el: u.value,
        min: S.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Ja(() => r(o)), (A, O) => (_(), T("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: O[0] ||= (I) => g(s)(I, A._.uid),
      style: on(N.value)
    }, [Pe(A.$slots, "default")], 4));
  }
}, Cy = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Ty = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", Ey = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Ay = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const fu = 1024, lp = fu / 2, ho = (e) => document.documentElement.clientWidth < e, cp = /* @__PURE__ */ Ie(ho(fu)), up = /* @__PURE__ */ Ie(ho(lp));
window.addEventListener("resize", () => {
  cp.value = ho(fu), up.value = ho(lp);
}, { passive: !0 });
function gs() {
  return /* @__PURE__ */ Yr(cp);
}
function ky() {
  return /* @__PURE__ */ Yr(up);
}
class Oy {
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
    return y("", t, n, void 0, { bundle: this.bundle });
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
class Ny {
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
    return this.setLanguage(hl().replace("-", "_"));
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
    const t = new Oy((n) => ey(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function xy() {
  return new Ny();
}
const dp = xy().detectLanguage().build(), Ct = (...e) => dp.gettext(...e);
function Vi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== hl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        dp.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const Ly = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Ry = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Iy = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Py = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Dy = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], $y = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], My = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Fy = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], zy = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const Uy = /* @__PURE__ */ Symbol(""), [By] = window.OC?.config?.version?.split(".") ?? [], fp = Number.parseInt(By ?? "35"), Hy = fp < 32, Gi = fp < 34, jy = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function Vy() {
  return zt(jy, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, Gy = { class: "button-vue__wrapper" }, Ky = { class: "button-vue__icon" }, Wy = { class: "button-vue__text" }, qy = /* @__PURE__ */ Lt({
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
    const n = e, i = t, { formBoxItemClass: a } = Vy(), r = zt(Uy, null) !== null, s = W(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = W(() => s.value === "button" && typeof n.pressed == "boolean"), l = W(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = W(() => l.value.startsWith("tertiary")), u = W(() => n.alignment.split("-")[0]), h = W(() => n.alignment.includes("-")), S = zt("NcPopover:trigger:attrs", () => ({}), !1), E = W(() => S()), N = W(() => {
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
    return (O, I) => (_(), Me(iu(s.value), jt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(Hy),
          "button-vue--legacy34": g(Gi)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: A }), {
      default: ke(() => [
        c("span", Gy, [
          c("span", Ky, [
            Pe(O.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", Wy, [
            Pe(O.$slots, "default", {}, () => [
              Ne(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Hn = /* @__PURE__ */ Qe(qy, [["__scopeId", "data-v-47ce59a3"]]), Yy = ["aria-hidden", "aria-label"], Xy = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Zy = ["d"], Jy = ["innerHTML"], Qy = /* @__PURE__ */ Lt({
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
    jm((a) => ({
      fb515064: n.value
    }));
    const t = e, n = W(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = W(() => {
      if (!t.svg || t.path)
        return;
      const a = Qh.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (_(), T("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: we(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (_(), T("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, Jy)) : (_(), T("svg", Xy, [
        c("path", { d: e.path }, null, 8, Zy)
      ]))
    ], 10, Yy));
  }
}), pl = /* @__PURE__ */ Qe(Qy, [["__scopeId", "data-v-aaedb1c3"]]);
t_();
function e_(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), ci("csrf-token-update", { token: e, _internal: !0 }));
}
function t_() {
  rp("csrf-token-update", ({ token: e, _internal: t }) => {
    t || e_(e);
  });
}
tp("public").persist().build();
let Ma;
function Xd(e, t) {
  return e ? e.getAttribute(t) : null;
}
function n_() {
  if (Ma !== void 0)
    return Ma;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Xd(e, "data-user");
  return t === null ? (Ma = null, Ma) : (Ma = {
    uid: t,
    displayName: Xd(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ma);
}
var gt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(gt || {});
class i_ {
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
function a_(e) {
  return new i_(e);
}
class r_ {
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
    const t = n_();
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
function s_() {
  return new r_(a_);
}
const ya = s_().detectUser().setApp("@nextcloud/vue").build();
function o_(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let hp = "missing-app-name";
try {
  hp = "library";
} catch {
  ya.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const l_ = hp;
let c_ = "";
try {
  c_ = "0.1.0-alpha.168";
} catch {
  ya.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function pp() {
  return zt("appName", l_);
}
const u_ = o_(() => {
  const e = cu("core", "apps", []), t = pp();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), Oc = Qb();
Vi(My);
const d_ = /* @__PURE__ */ Lt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = gs();
    lt(t, n), ji(() => {
      n(t.value);
    }), Ja(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && ci("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (_(), Me(g(Hn), {
      "aria-label": g(Ct)("Go back to the list"),
      class: we(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(Ct)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: ke(() => [
        ye(g(pl), {
          directional: "",
          path: g(Cy)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), f_ = /* @__PURE__ */ Qe(d_, [["__scopeId", "data-v-a28923a1"]]), Zd = tp("nextcloud").persist().build(), h_ = ny().theming?.name ?? "Nextcloud", p_ = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: f_,
    Pane: Sy,
    Splitpanes: wy
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
      appName: pp(),
      localizedAppName: u_(),
      isMobile: gs(),
      isRtl: Oc
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
        return ya.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(h_), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = _y(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? ci("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && ci("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      Zd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ya.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Zd.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ya.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, v_ = {
  key: 0,
  class: "hidden-visually"
}, g_ = { class: "app-content-wrapper__list" }, m_ = {
  key: 1,
  class: "app-content-wrapper"
};
function b_(e, t, n, i, a, r) {
  const s = Ue("NcAppContentDetailsToggle"), o = Ue("Pane"), l = Ue("Splitpanes");
  return _(), T("main", {
    id: "app-content-vue",
    class: we(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (_(), T("h1", v_, p(n.pageHeading), 1)) : H("", !0),
    e.$slots.list ? (_(), T(de, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (_(), T("div", {
        key: 0,
        class: we(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (_(), Me(s, {
          key: 0,
          onClick: Ve(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : H("", !0),
        Xe(c("div", g_, [
          Pe(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Wa, !n.showDetails]
        ]),
        n.showDetails ? Pe(e.$slots, "default", { key: 1 }, void 0, !0) : H("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (_(), T("div", m_, [
        ye(l, {
          horizontal: n.layout === "horizontal-split",
          class: we(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: ke(() => [
            ye(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: ke(() => [
                Pe(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            ye(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: ke(() => [
                Pe(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : H("", !0)
    ], 64)) : H("", !0),
    e.$slots.list ? H("", !0) : Pe(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const y_ = /* @__PURE__ */ Qe(p_, [["render", b_], ["__scopeId", "data-v-51427d61"]]);
var vp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], po = /* @__PURE__ */ vp.join(","), gp = typeof Element > "u", wa = gp ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, vo = !gp && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, go = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : go(t.parentNode));
  return s;
}, __ = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, mp = function(t, n, i) {
  if (go(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(po));
  return n && wa.call(t, po) && a.unshift(t), a = a.filter(i), a;
}, mo = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!go(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, d = mo(l, !0, i);
        i.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var u = wa.call(s, po);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), S = !go(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && S) {
          var E = mo(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: s,
            candidates: E
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, bp = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ha = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || __(t)) && !bp(t) ? 0 : t.tabIndex;
}, w_ = function(t, n) {
  var i = ha(t);
  return i < 0 && n && !bp(t) ? 0 : i;
}, S_ = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, yp = function(t) {
  return t.tagName === "INPUT";
}, C_ = function(t) {
  return yp(t) && t.type === "hidden";
}, T_ = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, E_ = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, A_ = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || vo(t), i = function(o) {
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
  var r = E_(a, t.form);
  return !r || r === t;
}, k_ = function(t) {
  return yp(t) && t.type === "radio";
}, O_ = function(t) {
  return k_(t) && !A_(t);
}, N_ = function(t) {
  var n, i = t && vo(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = vo(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, Jd = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, x_ = function(t, n) {
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
  var l = wa.call(t, "details>summary:first-of-type"), d = l ? t.parentElement : t;
  if (wa.call(d, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, S = vo(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return Jd(t);
        t.assignedSlot ? t = t.assignedSlot : !h && S !== t.ownerDocument ? t = S.host : t = h;
      }
      t = u;
    }
    if (N_(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Jd(t);
  return !1;
}, L_ = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return wa.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, bo = function(t, n) {
  return !(n.disabled || C_(n) || x_(n, t) || // For a details element with a summary, the summary element gets the focus
  T_(n) || L_(n));
}, Nc = function(t, n) {
  return !(O_(n) || ha(n) < 0 || !bo(t, n));
}, R_ = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, _p = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = w_(o, s), d = s ? _p(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(S_).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, I_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = mo([t], n.includeContainer, {
    filter: Nc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: R_
  }) : i = mp(t, n.includeContainer, Nc.bind(null, n)), _p(i);
}, P_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = mo([t], n.includeContainer, {
    filter: bo.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = mp(t, n.includeContainer, bo.bind(null, n)), i;
}, Fa = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return wa.call(t, po) === !1 ? !1 : Nc(n, t);
}, D_ = /* @__PURE__ */ vp.concat("iframe:not([inert]):not([inert] *)").join(","), ic = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return wa.call(t, D_) === !1 ? !1 : bo(n, t);
};
function xc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function $_(e) {
  if (Array.isArray(e)) return xc(e);
}
function Qd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = wp(e)) || t) {
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
function M_(e, t, n) {
  return (t = H_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function F_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function z_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ef(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ef(Object(n), !0).forEach(function(i) {
      M_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ef(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function U_(e) {
  return $_(e) || F_(e) || wp(e) || z_();
}
function B_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function H_(e) {
  var t = B_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wp(e, t) {
  if (e) {
    if (typeof e == "string") return xc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xc(e, t) : void 0;
  }
}
var ri = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = ri.getActiveTrap(t);
    n !== i && ri.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), ri.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = ri.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = ri.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, j_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, V_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, $r = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, G_ = function(t) {
  return $r(t) && !t.shiftKey;
}, K_ = function(t) {
  return $r(t) && t.shiftKey;
}, nf = function(t) {
  return setTimeout(t, 0);
}, Cr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Fs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, W_ = [], hu = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || W_, r = tf({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: G_,
    isKeyBackward: K_
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
  }, o, l = function(P, $, Y) {
    return P && P[$] !== void 0 ? P[$] : r[Y || $];
  }, d = function(P, $) {
    var Y = typeof $?.composedPath == "function" ? $.composedPath() : void 0;
    return s.containerGroups.findIndex(function(se) {
      var ie = se.container, pe = se.tabbableNodes;
      return ie.contains(P) || Y?.includes(ie) || pe.find(function(he) {
        return he === P;
      });
    });
  }, u = function(P) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = $.hasFallback, se = Y === void 0 ? !1 : Y, ie = $.params, pe = ie === void 0 ? [] : ie, he = r[P];
    if (typeof he == "function" && (he = he.apply(void 0, U_(pe))), he === !0 && (he = void 0), !he) {
      if (he === void 0 || he === !1)
        return he;
      throw new Error("`".concat(P, "` was specified but was not a node, or did not return a node"));
    }
    var Se = he;
    if (typeof he == "string") {
      try {
        Se = i.querySelector(he);
      } catch (ge) {
        throw new Error("`".concat(P, '` appears to be an invalid selector; error="').concat(ge.message, '"'));
      }
      if (!Se && !se)
        throw new Error("`".concat(P, "` as selector refers to no known node"));
    }
    return Se;
  }, h = function(P) {
    var $ = P.activeElement;
    return $ ? $.shadowRoot && $.shadowRoot.activeElement !== null ? h($.shadowRoot) : $ : null;
  }, S = function() {
    var P = u("initialFocus", {
      hasFallback: !0
    });
    if (P === !1)
      return !1;
    if (P === void 0 || P && !ic(P, r.tabbableOptions)) {
      var $ = h(i);
      if (d($) >= 0)
        P = $;
      else {
        var Y = s.tabbableGroups[0], se = Y && Y.firstTabbableNode;
        P = se || u("fallbackFocus");
      }
    } else P === null && (P = u("fallbackFocus"));
    if (!P)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return P;
  }, E = function() {
    if (s.containerGroups = s.containers.map(function(P) {
      var $ = I_(P, r.tabbableOptions), Y = P_(P, r.tabbableOptions), se = $.length > 0 ? $[0] : void 0, ie = $.length > 0 ? $[$.length - 1] : void 0, pe = Y.find(function(ge) {
        return Fa(ge);
      }), he = Y.slice().reverse().find(function(ge) {
        return Fa(ge);
      }), Se = !!$.find(function(ge) {
        return ha(ge) > 0;
      });
      return {
        container: P,
        tabbableNodes: $,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Se,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: se,
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
        firstDomTabbableNode: pe,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: he,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(He) {
          var Ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, at = $.indexOf(He);
          return at < 0 ? Ee ? Y.slice(Y.indexOf(He) + 1).find(function(ct) {
            return Fa(ct);
          }) : Y.slice(0, Y.indexOf(He)).reverse().find(function(ct) {
            return Fa(ct);
          }) : $[at + (Ee ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(P) {
      return P.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(P) {
      return P.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, N = function(P) {
    if (P !== !1 && P !== h(document)) {
      if (!P || !P.focus) {
        N(S());
        return;
      }
      P.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = P, j_(P) && P.select();
    }
  }, A = function(P) {
    var $ = u("setReturnFocus", {
      params: [P]
    });
    return $ || ($ === !1 ? !1 : P);
  }, O = function(P) {
    var $ = P.target, Y = P.event, se = P.isBackward, ie = se === void 0 ? !1 : se;
    $ = $ || Fs(Y), E();
    var pe = null;
    if (s.tabbableGroups.length > 0) {
      var he = d($, Y), Se = he >= 0 ? s.containerGroups[he] : void 0;
      if (he < 0)
        ie ? pe = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : pe = s.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var ge = s.tabbableGroups.findIndex(function(Et) {
          var qe = Et.firstTabbableNode;
          return $ === qe;
        });
        if (ge < 0 && (Se.container === $ || ic($, r.tabbableOptions) && !Fa($, r.tabbableOptions) && !Se.nextTabbableNode($, !1)) && (ge = he), ge >= 0) {
          var He = ge === 0 ? s.tabbableGroups.length - 1 : ge - 1, Ee = s.tabbableGroups[He];
          pe = ha($) >= 0 ? Ee.lastTabbableNode : Ee.lastDomTabbableNode;
        } else $r(Y) || (pe = Se.nextTabbableNode($, !1));
      } else {
        var at = s.tabbableGroups.findIndex(function(Et) {
          var qe = Et.lastTabbableNode;
          return $ === qe;
        });
        if (at < 0 && (Se.container === $ || ic($, r.tabbableOptions) && !Fa($, r.tabbableOptions) && !Se.nextTabbableNode($)) && (at = he), at >= 0) {
          var ct = at === s.tabbableGroups.length - 1 ? 0 : at + 1, ut = s.tabbableGroups[ct];
          pe = ha($) >= 0 ? ut.firstTabbableNode : ut.firstDomTabbableNode;
        } else $r(Y) || (pe = Se.nextTabbableNode($));
      }
    } else
      pe = u("fallbackFocus");
    return pe;
  }, I = function(P) {
    var $ = Fs(P);
    if (!(d($, P) >= 0)) {
      if (Cr(r.clickOutsideDeactivates, P)) {
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
      Cr(r.allowOutsideClick, P) || P.preventDefault();
    }
  }, M = function(P) {
    var $ = Fs(P), Y = d($, P) >= 0;
    if (Y || $ instanceof Document)
      Y && (s.mostRecentlyFocusedNode = $);
    else {
      P.stopImmediatePropagation();
      var se, ie = !0;
      if (s.mostRecentlyFocusedNode)
        if (ha(s.mostRecentlyFocusedNode) > 0) {
          var pe = d(s.mostRecentlyFocusedNode), he = s.containerGroups[pe].tabbableNodes;
          if (he.length > 0) {
            var Se = he.findIndex(function(ge) {
              return ge === s.mostRecentlyFocusedNode;
            });
            Se >= 0 && (r.isKeyForward(s.recentNavEvent) ? Se + 1 < he.length && (se = he[Se + 1], ie = !1) : Se - 1 >= 0 && (se = he[Se - 1], ie = !1));
          }
        } else
          s.containerGroups.some(function(ge) {
            return ge.tabbableNodes.some(function(He) {
              return ha(He) > 0;
            });
          }) || (ie = !1);
      else
        ie = !1;
      ie && (se = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), N(se || s.mostRecentlyFocusedNode || S());
    }
    s.recentNavEvent = void 0;
  }, K = function(P) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = P;
    var Y = O({
      event: P,
      isBackward: $
    });
    Y && ($r(P) && P.preventDefault(), N(Y));
  }, F = function(P) {
    (r.isKeyForward(P) || r.isKeyBackward(P)) && K(P, r.isKeyBackward(P));
  }, Z = function(P) {
    V_(P) && Cr(r.escapeDeactivates, P) !== !1 && (P.preventDefault(), o.deactivate());
  }, D = function(P) {
    var $ = Fs(P);
    d($, P) >= 0 || Cr(r.clickOutsideDeactivates, P) || Cr(r.allowOutsideClick, P) || (P.preventDefault(), P.stopImmediatePropagation());
  }, J = function() {
    if (s.active) {
      ri.activateTrap(a, o);
      var P;
      return r.delayInitialFocus ? P = new Promise(function($) {
        s.delayInitialFocusTimer = nf(function() {
          N(S()), $();
        });
      }) : N(S()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", I, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", I, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", D, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", Z), P;
    }
  }, fe = function(P) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var $ = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), se = Qd(P), ie;
    try {
      for (se.s(); !(ie = se.n()).done; ) {
        var pe = ie.value;
        $.add(pe);
        for (var he = typeof ShadowRoot < "u" && pe.getRootNode() instanceof ShadowRoot, Se = pe; Se; ) {
          $.add(Se);
          var ge = Se.parentElement, He = [];
          ge ? He = ge.children : !ge && he && (He = Se.getRootNode().children, ge = Se.getRootNode().host, he = typeof ShadowRoot < "u" && ge.getRootNode() instanceof ShadowRoot);
          var Ee = Qd(He), at;
          try {
            for (Ee.s(); !(at = Ee.n()).done; ) {
              var ct = at.value;
              Y.add(ct);
            }
          } catch (ut) {
            Ee.e(ut);
          } finally {
            Ee.f();
          }
          Se = ge;
        }
      }
    } catch (ut) {
      se.e(ut);
    } finally {
      se.f();
    }
    $.forEach(function(ut) {
      Y.delete(ut);
    }), s.adjacentElements = Y;
  }, X = function() {
    if (s.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", I, !0), i.removeEventListener("touchstart", I, !0), i.removeEventListener("click", D, !0), i.removeEventListener("keydown", F, !0), i.removeEventListener("keydown", Z), o;
  }, re = function(P) {
    var $ = s.mostRecentlyFocusedNode;
    if ($) {
      var Y = P.some(function(ie) {
        var pe = Array.from(ie.removedNodes);
        return pe.some(function(he) {
          return he === $ || typeof he.contains == "function" && he.contains($);
        });
      });
      if (Y && s.containers.some(function(ie) {
        return ie?.isConnected;
      })) {
        E();
        var se = S();
        N(se);
      }
    }
  }, be = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(re) : void 0, te = function() {
    be && (be.disconnect(), s.active && !s.paused && s.containers.map(function(P) {
      be.observe(P, {
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
    activate: function(P) {
      if (s.active)
        return this;
      var $ = l(P, "onActivate"), Y = l(P, "onPostActivate"), se = l(P, "checkCanFocusTrap"), ie = ri.getActiveTrap(a), pe = !1;
      if (ie && !ie.paused) {
        var he;
        (he = ie._setSubtreeIsolation) === null || he === void 0 || he.call(ie, !1), pe = !0;
      }
      try {
        se || E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), $?.({
          trap: o
        });
        var Se = function() {
          se && E();
          var Ee = function() {
            o._setSubtreeIsolation(!0), te(), Y?.({
              trap: o
            });
          }, at = J();
          at ? at.then(Ee) : Ee();
        };
        if (se)
          return se(s.containers.concat()).then(Se, Se), this;
        Se();
      } catch (He) {
        if (ie === ri.getActiveTrap(a) && pe) {
          var ge;
          (ge = ie._setSubtreeIsolation) === null || ge === void 0 || ge.call(ie, !0);
        }
        throw He;
      }
      return this;
    },
    deactivate: function(P) {
      if (!s.active)
        return this;
      var $ = tf({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, P);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), X(), s.active = !1, s.paused = !1, te(), ri.deactivateTrap(a, o);
      var Y = l($, "onDeactivate"), se = l($, "onPostDeactivate"), ie = l($, "checkCanReturnFocus"), pe = l($, "delayReturnFocus"), he = l($, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: o
      });
      var Se = function() {
        he && N(A(s.nodeFocusedBeforeActivation)), se?.({
          trap: o
        });
      }, ge = function() {
        pe && he ? nf(Se) : Se();
      };
      return he && ie ? (ie(A(s.nodeFocusedBeforeActivation)).then(ge, ge), this) : (ge(), this);
    },
    pause: function(P) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, P)) : this;
    },
    unpause: function(P) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, P)) : this;
    },
    updateContainerElements: function(P) {
      var $ = [].concat(P).filter(Boolean);
      return s.containers = $.map(function(Y) {
        return typeof Y == "string" ? i.querySelector(Y) : Y;
      }), r.isolateSubtrees && fe(s.containers), s.active && (E(), s.paused || o._setSubtreeIsolation(!0)), te(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(P, $) {
        if (s.paused === P)
          return this;
        if (s.paused = P, P) {
          var Y = l($, "onPause"), se = l($, "onPostPause");
          Y?.({
            trap: o
          }), X(), o._setSubtreeIsolation(!1), te(), se?.({
            trap: o
          });
        } else {
          var ie = l($, "onUnpause"), pe = l($, "onPostUnpause");
          ie?.({
            trap: o
          });
          var he = function() {
            E();
            var ge = function() {
              o._setSubtreeIsolation(!0), te(), pe?.({
                trap: o
              });
            }, He = J();
            He ? He.then(ge) : ge();
          };
          he();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(P) {
        r.isolateSubtrees && s.adjacentElements.forEach(function($) {
          var Y;
          P ? r.isolateSubtrees === "aria-hidden" ? (($.ariaHidden === "true" || ((Y = $.getAttribute("aria-hidden")) === null || Y === void 0 ? void 0 : Y.toLowerCase()) === "true") && s.alreadySilent.add($), $.setAttribute("aria-hidden", "true")) : (($.inert || $.hasAttribute("inert")) && s.alreadySilent.add($), $.setAttribute("inert", !0)) : s.alreadySilent.has($) || (r.isolateSubtrees === "aria-hidden" ? $.removeAttribute("aria-hidden") : $.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const Sp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), q_ = /* @__PURE__ */ Lt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Sp]: {
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
function Y_(e, t, n, i, a, r) {
  return _(), T("ul", {
    ref: "list",
    class: we(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    c("div", {
      class: we(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: on(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Pe(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Cp = /* @__PURE__ */ Qe(q_, [["render", Y_], ["__scopeId", "data-v-3e73e246"]]);
function as() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function X_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...as()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === as().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Tp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Ep = /* @__PURE__ */ Symbol.for("NcContent:selector");
Vi(Py);
const Z_ = { class: "app-navigation-toggle-wrapper" }, J_ = /* @__PURE__ */ Lt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Eh(e, "open"), n = W(() => t.value ? Ct("Close navigation") : Ct("Open navigation"));
    return (i, a) => (_(), T("div", Z_, [
      ye(g(Hn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: ke(() => [
          ye(pl, {
            path: g(Ay),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), Q_ = /* @__PURE__ */ Qe(J_, [["__scopeId", "data-v-e8177cc7"]]), e1 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], t1 = { class: "app-navigation__search" }, n1 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = zt(
      Tp,
      () => Lm(),
      !1
    ), a = Mg("appNavigationContainer"), r = gs(), s = /* @__PURE__ */ Ie(!r.value), o = W(() => r.value && s.value);
    Og(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), lt(r, () => {
      s.value = !r.value;
    }), lt(o, () => {
      u();
    }), ji(() => {
      i(!0), rp("toggle-navigation", d), ci("navigation-toggled", {
        open: s.value
      }), n = hu(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: as(),
        escapeDeactivates: !1
      }), u();
    }), hs(() => {
      i(!1), py("toggle-navigation", d), n.deactivate();
    });
    function l(S) {
      if (s.value === S) {
        ci("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = S === void 0 ? !s.value : S;
      const E = getComputedStyle(document.body), N = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        ci("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * N);
    }
    function d({ open: S }) {
      return l(S);
    }
    function u() {
      o.value ? n.activate() : n.deactivate();
    }
    function h() {
      r.value && l(!1);
    }
    return (S, E) => (_(), T("div", {
      ref: "appNavigationContainer",
      class: we(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": g(Gi)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: St(h, ["esc"])
      }, [
        c("div", t1, [
          Pe(S.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: we(["app-navigation__body", { "app-navigation__body--no-list": !S.$slots.list }])
        }, [
          Pe(S.$slots, "default", {}, void 0, !0)
        ], 2),
        S.$slots.list ? (_(), Me(Cp, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: ke(() => [
            Pe(S.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : H("", !0),
        Pe(S.$slots, "footer", {}, void 0, !0)
      ], 40, e1),
      ye(Q_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), i1 = /* @__PURE__ */ Qe(n1, [["__scopeId", "data-v-37908cd4"]]), a1 = {
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
}, r1 = ["aria-hidden", "aria-label"], s1 = ["fill", "width", "height"], o1 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, l1 = { key: 0 };
function c1(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", o1, [
        n.title ? (_(), T("title", l1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, s1))
  ], 16, r1);
}
const u1 = /* @__PURE__ */ Qe(a1, [["render", c1]]), d1 = {
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
}, f1 = ["aria-hidden", "aria-label"], h1 = ["fill", "width", "height"], p1 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, v1 = { key: 0 };
function g1(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", p1, [
        n.title ? (_(), T("title", v1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, h1))
  ], 16, f1);
}
const m1 = /* @__PURE__ */ Qe(d1, [["render", g1]]), b1 = {
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
}, y1 = ["aria-hidden", "aria-label"], _1 = ["fill", "width", "height"], w1 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, S1 = { key: 0 };
function C1(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", w1, [
        n.title ? (_(), T("title", S1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, _1))
  ], 16, y1);
}
const Ap = /* @__PURE__ */ Qe(b1, [["render", C1]]), T1 = {
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
}, E1 = ["aria-hidden", "aria-label"], A1 = ["fill", "width", "height"], k1 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, O1 = { key: 0 };
function N1(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", k1, [
        n.title ? (_(), T("title", O1, p(n.title), 1)) : H("", !0)
      ])
    ], 8, A1))
  ], 16, E1);
}
const kp = /* @__PURE__ */ Qe(T1, [["render", N1]]);
Vi(Ry);
const x1 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Ap,
    IconClose: kp,
    NcButton: Hn
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
}, L1 = ["placeholder"];
function R1(e, t, n, i, a, r) {
  const s = Ue("IconArrowRight"), o = Ue("NcButton"), l = Ue("IconClose");
  return _(), T("div", {
    class: we(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = Ve((...d) => r.confirm && r.confirm(...d), ["prevent"])),
      onKeydown: t[2] || (t[2] = St(Ve((...d) => r.cancel && r.cancel(...d), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ve(() => {
      }, ["stop", "prevent"]))
    }, [
      Xe(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.valueModel = d),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, L1), [
        [pn, r.valueModel]
      ]),
      ye(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ve(r.confirm, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          ye(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      ye(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Ve(r.cancel, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          ye(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const I1 = /* @__PURE__ */ Qe(x1, [["render", R1], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function vl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const pu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Op = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), P1 = {
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
}, Np = {
  mixins: [P1],
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
      from: Op
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
}, D1 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: pl
  },
  mixins: [Np],
  inject: {
    isInSemanticMenu: {
      from: pu,
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
      mdiCheck: Ty,
      mdiChevronRight: Ey
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
}, $1 = ["role"], M1 = ["aria-label", "disabled", "title", "type"], F1 = { class: "action-button__longtext-wrapper" }, z1 = {
  key: 0,
  class: "action-button__name"
}, U1 = ["textContent"], B1 = {
  key: 2,
  class: "action-button__text"
}, H1 = ["textContent"], j1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function V1(e, t, n, i, a, r) {
  const s = Ue("NcIconSvgWrapper");
  return _(), T("li", {
    class: we(["action", { "action--disabled": n.disabled }]),
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
      onClick: t[0] || (t[0] = (...o) => r.handleClick && r.handleClick(...o))
    }), [
      Pe(e.$slots, "icon", {}, () => [
        c("span", {
          class: we([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", F1, [
        e.name ? (_(), T("strong", z1, p(e.name), 1)) : H("", !0),
        e.isLongText ? (_(), T("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, U1)) : (_(), T("span", B1, p(e.text), 1)),
        n.description ? (_(), T("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, H1)) : H("", !0)
      ]),
      n.isMenu ? (_(), Me(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (_(), Me(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (_(), T("span", j1)) : H("", !0),
      H("", !0)
    ], 16, M1)
  ], 10, $1);
}
const G1 = /* @__PURE__ */ Qe(D1, [["render", V1], ["__scopeId", "data-v-6c2daf4e"]]);
function K1(e, t = {}) {
  const n = X_();
  lt(e, () => {
    oi(t.disabled) || (oi(e) ? n.pause() : n.unpause());
  }), hs(() => {
    n.unpause();
  });
}
const W1 = ["top", "right", "bottom", "left"], af = ["start", "end"], rf = /* @__PURE__ */ W1.reduce((e, t) => e.concat(t, t + "-" + af[0], t + "-" + af[1]), []), rs = Math.min, Lc = Math.max, q1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xp(e, t, n) {
  return Lc(e, rs(t, n));
}
function Ca(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hi(e) {
  return e.split("-")[0];
}
function kn(e) {
  return e.split("-")[1];
}
function Lp(e) {
  return e === "x" ? "y" : "x";
}
function vu(e) {
  return e === "y" ? "height" : "width";
}
function si(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function gu(e) {
  return Lp(si(e));
}
function Rp(e, t, n) {
  n === void 0 && (n = !1);
  const i = kn(e), a = gu(e), r = vu(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = _o(s)), [s, _o(s)];
}
function Y1(e) {
  const t = _o(e);
  return [yo(e), t, yo(t)];
}
function yo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const sf = ["left", "right"], of = ["right", "left"], X1 = ["top", "bottom"], Z1 = ["bottom", "top"];
function J1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? of : sf : t ? sf : of;
    case "left":
    case "right":
      return t ? X1 : Z1;
    default:
      return [];
  }
}
function Q1(e, t, n, i) {
  const a = kn(e);
  let r = J1(hi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(yo)))), r;
}
function _o(e) {
  const t = hi(e);
  return q1[t] + e.slice(t.length);
}
function e0(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Ip(e) {
  return typeof e != "number" ? e0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Mr(e) {
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
function lf(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = si(t), s = gu(t), o = vu(s), l = hi(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, S = i[o] / 2 - a[o] / 2;
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
  const N = kn(t);
  return N && (E[s] += S * (N === "end" ? 1 : -1) * (n && d ? -1 : 1)), E;
}
async function t0(e, t) {
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
    altBoundary: S = !1,
    padding: E = 0
  } = Ca(t, e), N = Ip(E), O = o[S ? h === "floating" ? "reference" : "floating" : h], I = Mr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), M = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, K = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), F = await (r.isElement == null ? void 0 : r.isElement(K)) && await (r.getScale == null ? void 0 : r.getScale(K)) || {
    x: 1,
    y: 1
  }, Z = Mr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: M,
    offsetParent: K,
    strategy: l
  }) : M);
  return {
    top: (I.top - Z.top + N.top) / F.y,
    bottom: (Z.bottom - I.bottom + N.bottom) / F.y,
    left: (I.left - Z.left + N.left) / F.x,
    right: (Z.right - I.right + N.right) / F.x
  };
}
const n0 = 50, i0 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: t0
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = lf(d, i, l), S = i, E = 0;
  const N = {};
  for (let A = 0; A < r.length; A++) {
    const O = r[A];
    if (!O)
      continue;
    const {
      name: I,
      fn: M
    } = O, {
      x: K,
      y: F,
      data: Z,
      reset: D
    } = await M({
      x: u,
      y: h,
      initialPlacement: i,
      placement: S,
      strategy: a,
      middlewareData: N,
      rects: d,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = K ?? u, h = F ?? h, N[I] = {
      ...N[I],
      ...Z
    }, D && E < n0 && (E++, typeof D == "object" && (D.placement && (S = D.placement), D.rects && (d = D.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : D.rects), {
      x: u,
      y: h
    } = lf(d, S, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: S,
    strategy: a,
    middlewareData: N
  };
}, a0 = (e) => ({
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
    } = Ca(e, t) || {};
    if (d == null)
      return {};
    const h = Ip(u), S = {
      x: n,
      y: i
    }, E = gu(a), N = vu(E), A = await s.getDimensions(d), O = E === "y", I = O ? "top" : "left", M = O ? "bottom" : "right", K = O ? "clientHeight" : "clientWidth", F = r.reference[N] + r.reference[E] - S[E] - r.floating[N], Z = S[E] - r.reference[E], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let J = D ? D[K] : 0;
    (!J || !await (s.isElement == null ? void 0 : s.isElement(D))) && (J = o.floating[K] || r.floating[N]);
    const fe = F / 2 - Z / 2, X = J / 2 - A[N] / 2 - 1, re = rs(h[I], X), be = rs(h[M], X), te = J - A[N] - be, ae = J / 2 - A[N] / 2 + fe, P = xp(re, ae, te), $ = !l.arrow && kn(a) != null && ae !== P && r.reference[N] / 2 - (ae < re ? re : be) - A[N] / 2 < 0, Y = $ ? ae < re ? ae - re : ae - te : 0;
    return {
      [E]: S[E] + Y,
      data: {
        [E]: P,
        centerOffset: ae - P - Y,
        ...$ && {
          alignmentOffset: Y
        }
      },
      reset: $
    };
  }
});
function r0(e, t, n) {
  return (e ? [...n.filter((a) => kn(a) === e), ...n.filter((a) => kn(a) !== e)] : n.filter((a) => hi(a) === a)).filter((a) => e ? kn(a) === e || (t ? yo(a) !== a : !1) : !0);
}
const s0 = function(e) {
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
        allowedPlacements: S = rf,
        autoAlignment: E = !0,
        ...N
      } = Ca(e, t), A = h !== void 0 || S === rf ? r0(h || null, E, S) : S, O = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, I = A[O];
      if (I == null)
        return {};
      if (o !== I)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await l.detectOverflow(t, N), K = Rp(I, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), F = [M[hi(I)], M[K[0]], M[K[1]]], Z = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: I,
        overflows: F
      }], D = A[O + 1];
      if (D)
        return {
          data: {
            index: O + 1,
            overflows: Z
          },
          reset: {
            placement: D
          }
        };
      const J = Z.map((re) => {
        const be = kn(re.placement);
        return [re.placement, be && u ? (
          // Check along the mainAxis and main crossAxis side.
          re.overflows.slice(0, 2).reduce((te, ae) => te + ae, 0)
        ) : (
          // Check only the mainAxis.
          re.overflows[0]
        ), re.overflows];
      }).sort((re, be) => re[1] - be[1]), X = ((a = J.filter((re) => re[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        kn(re[0]) ? 2 : 3
      ).every((be) => be <= 0))[0]) == null ? void 0 : a[0]) || J[0][0];
      return X !== o ? {
        data: {
          index: O + 1,
          overflows: Z
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, o0 = function(e) {
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
        fallbackPlacements: S,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: N = "none",
        flipAlignment: A = !0,
        ...O
      } = Ca(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const I = hi(a), M = si(o), K = hi(o) === o, F = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), Z = S || (K || !A ? [_o(o)] : Y1(o)), D = N !== "none";
      !S && D && Z.push(...Q1(o, A, N, F));
      const J = [o, ...Z], fe = await l.detectOverflow(t, O), X = [];
      let re = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && X.push(fe[I]), h) {
        const P = Rp(a, s, F);
        X.push(fe[P[0]], fe[P[1]]);
      }
      if (re = [...re, {
        placement: a,
        overflows: X
      }], !X.every((P) => P <= 0)) {
        var be, te;
        const P = (((be = r.flip) == null ? void 0 : be.index) || 0) + 1, $ = J[P];
        if ($ && (!(h === "alignment" ? M !== si($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        re.every((ie) => si(ie.placement) === M ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: re
            },
            reset: {
              placement: $
            }
          };
        let Y = (te = re.filter((se) => se.overflows[0] <= 0).sort((se, ie) => se.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : te.placement;
        if (!Y)
          switch (E) {
            case "bestFit": {
              var ae;
              const se = (ae = re.filter((ie) => {
                if (D) {
                  const pe = si(ie.placement);
                  return pe === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((pe) => pe > 0).reduce((pe, he) => pe + he, 0)]).sort((ie, pe) => ie[1] - pe[1])[0]) == null ? void 0 : ae[0];
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
}, l0 = /* @__PURE__ */ new Set(["left", "top"]);
async function c0(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = hi(n), o = kn(n), l = si(n) === "y", d = l0.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = Ca(t, e);
  let {
    mainAxis: S,
    crossAxis: E,
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
  return o && typeof N == "number" && (E = o === "end" ? N * -1 : N), l ? {
    x: E * u,
    y: S * d
  } : {
    x: S * d,
    y: E * u
  };
}
const u0 = function(e) {
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
      } = t, l = await c0(t, e);
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
}, d0 = function(e) {
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
              x: K,
              y: F
            } = M;
            return {
              x: K,
              y: F
            };
          }
        },
        ...d
      } = Ca(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, d), S = si(a), E = Lp(S);
      let N = u[E], A = u[S];
      const O = (M, K) => xp(K + h[M === "y" ? "top" : "left"], K, K - h[M === "y" ? "bottom" : "right"]);
      s && (N = O(E, N)), o && (A = O(S, A));
      const I = l.fn({
        ...t,
        [E]: N,
        [S]: A
      });
      return {
        ...I,
        data: {
          x: I.x - n,
          y: I.y - i,
          enabled: {
            [E]: s,
            [S]: o
          }
        }
      };
    }
  };
}, f0 = function(e) {
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
      } = Ca(e, t), l = await a.detectOverflow(t, o), d = hi(n), u = kn(n), h = si(n) === "y", {
        width: S,
        height: E
      } = i.floating;
      let N, A;
      d === "top" || d === "bottom" ? (N = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, N = u === "end" ? "top" : "bottom");
      const O = E - l.top - l.bottom, I = S - l.left - l.right, M = rs(E - l[N], O), K = rs(S - l[A], I), F = t.middlewareData.shift, Z = !F;
      let D = M, J = K;
      F != null && F.enabled.x && (J = I), F != null && F.enabled.y && (D = O), Z && !u && (h ? J = S - 2 * Lc(l.left, l.right) : D = E - 2 * Lc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: J,
        availableHeight: D
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
function bn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function jn(e) {
  return bn(e).getComputedStyle(e);
}
const cf = Math.min, Fr = Math.max, wo = Math.round;
function Pp(e) {
  const t = jn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = wo(n) !== a || wo(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function Hi(e) {
  return $p(e) ? (e.nodeName || "").toLowerCase() : "";
}
let zs;
function Dp() {
  if (zs) return zs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (zs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), zs) : navigator.userAgent;
}
function Vn(e) {
  return e instanceof bn(e).HTMLElement;
}
function Mi(e) {
  return e instanceof bn(e).Element;
}
function $p(e) {
  return e instanceof bn(e).Node;
}
function uf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof bn(e).ShadowRoot || e instanceof ShadowRoot;
}
function gl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = jn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function h0(e) {
  return ["table", "td", "th"].includes(Hi(e));
}
function Rc(e) {
  const t = /firefox/i.test(Dp()), n = jn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Mp() {
  return !/^((?!chrome|android).)*safari/i.test(Dp());
}
function mu(e) {
  return ["html", "body", "#document"].includes(Hi(e));
}
function Fp(e) {
  return Mi(e) ? e : e.contextElement;
}
const zp = { x: 1, y: 1 };
function Xa(e) {
  const t = Fp(e);
  if (!Vn(t)) return zp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Pp(t);
  let s = (r ? wo(n.width) : n.width) / i, o = (r ? wo(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function ss(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = Fp(e);
  let l = zp;
  t && (i ? Mi(i) && (l = Xa(i)) : l = Xa(e));
  const d = o ? bn(o) : window, u = !Mp() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, S = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, E = s.width / l.x, N = s.height / l.y;
  if (o) {
    const A = bn(o), O = i && Mi(i) ? bn(i) : i;
    let I = A.frameElement;
    for (; I && i && O !== A; ) {
      const M = Xa(I), K = I.getBoundingClientRect(), F = getComputedStyle(I);
      K.x += (I.clientLeft + parseFloat(F.paddingLeft)) * M.x, K.y += (I.clientTop + parseFloat(F.paddingTop)) * M.y, h *= M.x, S *= M.y, E *= M.x, N *= M.y, h += K.x, S += K.y, I = bn(I).frameElement;
    }
  }
  return { width: E, height: N, top: S, right: h + E, bottom: S + N, left: h, x: h, y: S };
}
function Fi(e) {
  return (($p(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ml(e) {
  return Mi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Up(e) {
  return ss(Fi(e)).left + ml(e).scrollLeft;
}
function os(e) {
  if (Hi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || uf(e) && e.host || Fi(e);
  return uf(t) ? t.host : t;
}
function Bp(e) {
  const t = os(e);
  return mu(t) ? t.ownerDocument.body : Vn(t) && gl(t) ? t : Bp(t);
}
function So(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Bp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = bn(i);
  return a ? t.concat(r, r.visualViewport || [], gl(i) ? i : []) : t.concat(i, So(i));
}
function df(e, t, n) {
  return t === "viewport" ? Mr((function(i, a) {
    const r = bn(i), s = Fi(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const S = Mp();
      (S || !S && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : Mi(t) ? Mr((function(i, a) {
    const r = ss(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Vn(i) ? Xa(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Mr((function(i) {
    const a = Fi(i), r = ml(i), s = i.ownerDocument.body, o = Fr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Fr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + Up(i);
    const u = -r.scrollTop;
    return jn(s).direction === "rtl" && (d += Fr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })(Fi(e)));
}
function ff(e) {
  return Vn(e) && jn(e).position !== "fixed" ? e.offsetParent : null;
}
function hf(e) {
  const t = bn(e);
  let n = ff(e);
  for (; n && h0(n) && jn(n).position === "static"; ) n = ff(n);
  return n && (Hi(n) === "html" || Hi(n) === "body" && jn(n).position === "static" && !Rc(n)) ? t : n || (function(i) {
    let a = os(i);
    for (; Vn(a) && !mu(a); ) {
      if (Rc(a)) return a;
      a = os(a);
    }
    return null;
  })(e) || t;
}
function p0(e, t, n) {
  const i = Vn(t), a = Fi(t), r = ss(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Hi(t) !== "body" || gl(a)) && (s = ml(t)), Vn(t)) {
    const l = ss(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = Up(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const v0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let S = So(d).filter(((O) => Mi(O) && Hi(O) !== "body")), E = null;
    const N = jn(d).position === "fixed";
    let A = N ? os(d) : d;
    for (; Mi(A) && !mu(A); ) {
      const O = jn(A), I = Rc(A);
      (N ? I || E : I || O.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = O : S = S.filter(((M) => M !== A)), A = os(A);
    }
    return u.set(d, S), S;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = df(t, u, a);
    return d.top = Fr(h.top, d.top), d.right = cf(h.right, d.right), d.bottom = cf(h.bottom, d.bottom), d.left = Fr(h.left, d.left), d;
  }), df(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Vn(n), r = Fi(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Hi(n) !== "body" || gl(r)) && (s = ml(n)), Vn(n))) {
    const d = ss(n);
    o = Xa(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Mi, getDimensions: function(e) {
  return Vn(e) ? Pp(e) : e.getBoundingClientRect();
}, getOffsetParent: hf, getDocumentElement: Fi, getScale: Xa, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || hf, r = this.getDimensions;
  return { reference: p0(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => jn(e).direction === "rtl" }, g0 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: v0, ...n }, r = { ...a.platform, _c: i };
  return i0(e, t, { ...a, platform: r });
}, zi = {
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
function Ic(e, t) {
  let n = zi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = zi.themes[n.$extend] || {} : (n = null, i = zi[t]) : n = null;
  while (n);
  return i;
}
function m0(e) {
  const t = [e];
  let n = zi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = zi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function pf(e) {
  const t = [e];
  let n = zi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = zi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let ls = !1;
if (typeof window < "u") {
  ls = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        ls = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Hp = !1;
typeof window < "u" && typeof navigator < "u" && (Hp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const b0 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), vf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, gf = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function mf(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function ac() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const En = [];
let oa = null;
const bf = {};
function yf(e) {
  let t = bf[e];
  return t || (t = bf[e] = []), t;
}
let Pc = function() {
};
typeof window < "u" && (Pc = window.Element);
function Be(e) {
  return function(t) {
    return Ic(t.theme, e);
  };
}
const rc = "__floating-vue__popper", jp = () => /* @__PURE__ */ Lt({
  name: "VPopper",
  provide() {
    return {
      [rc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [rc]: { default: null }
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
      validator: (e) => b0.includes(e)
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
      type: [String, Object, Pc, Boolean],
      default: Be("container")
    },
    boundary: {
      type: [String, Pc],
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
      return (e = this[rc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(u0({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(s0({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(d0({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(o0({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(a0({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(f0({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await g0(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), oa && this.instantMove && oa.instantMove && oa !== this.parentPopper) {
        oa.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (oa = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await ac(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...So(this.$_referenceNode),
        ...So(this.$_popperNode)
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
        for (let n = 0; n < En.length; n++)
          t = En[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      En.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of pf(this.theme))
        yf(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await ac(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, mf(En, this), En.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of pf(this.theme)) {
        const i = yf(n);
        mf(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      oa === this && (oa = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await ac(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, vf, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], vf, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, gf, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], gf, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, ls ? {
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
      if (zr >= e.left && zr <= e.right && Ur >= e.top && Ur <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = zr - Ri, i = Ur - Ii, a = t.left + t.width / 2 - Ri + (t.top + t.height / 2) - Ii + t.width + t.height, r = Ri + n * a, s = Ii + i * a;
        return Us(Ri, Ii, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Us(Ri, Ii, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Us(Ri, Ii, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Us(Ri, Ii, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Hp) {
    const e = ls ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => _f(t), e), document.addEventListener("touchend", (t) => wf(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => _f(e), !0), window.addEventListener("click", (e) => wf(e, !1), !0);
  window.addEventListener("resize", w0);
}
function _f(e, t) {
  for (let n = 0; n < En.length; n++) {
    const i = En[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function wf(e, t) {
  y0(e, t);
}
function y0(e, t) {
  const n = {};
  for (let i = En.length - 1; i >= 0; i--) {
    const a = En[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Sf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && Sf(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Sf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || _0(e, n) && !t;
}
function _0(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function w0() {
  for (let e = 0; e < En.length; e++)
    En[e].$_computePosition();
}
let Ri = 0, Ii = 0, zr = 0, Ur = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ri = zr, Ii = Ur, zr = e.clientX, Ur = e.clientY;
}, ls ? {
  passive: !0
} : void 0);
function Us(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const S0 = {
  extends: jp()
}, bu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function C0(e, t, n, i, a, r) {
  return _(), T("div", {
    ref: "reference",
    class: we(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Pe(e.$slots, "default", Ys(es(e.slotData)))
  ], 2);
}
const T0 = /* @__PURE__ */ bu(S0, [["render", C0]]);
function E0() {
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
let Ws;
function Dc() {
  Dc.init || (Dc.init = !0, Ws = E0() !== -1);
}
var bl = {
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
    Dc(), an(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ws && this.$el.appendChild(e), e.data = "about:blank", Ws || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Ws && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const A0 = /* @__PURE__ */ Eg();
Cg("data-v-b329ee4c");
const k0 = {
  class: "resize-observer",
  tabindex: "-1"
};
Tg();
const O0 = /* @__PURE__ */ A0((e, t, n, i, a, r) => (_(), Me("div", k0)));
bl.render = O0;
bl.__scopeId = "data-v-b329ee4c";
bl.__file = "src/components/ResizeObserver.vue";
const Vp = (e = "theme") => ({
  computed: {
    themeClass() {
      return m0(this[e]);
    }
  }
}), N0 = /* @__PURE__ */ Lt({
  name: "VPopperContent",
  components: {
    ResizeObserver: bl
  },
  mixins: [
    Vp()
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
}), x0 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], L0 = {
  ref: "inner",
  class: "v-popper__inner"
}, R0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), I0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), P0 = [
  R0,
  I0
];
function D0(e, t, n, i, a, r) {
  const s = Ue("ResizeObserver");
  return _(), T("div", {
    id: e.popperId,
    ref: "popover",
    class: we(["v-popper__popper", [
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
    onKeyup: t[2] || (t[2] = St((o) => e.autoHide && e.$emit("hide"), ["esc"]))
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
      c("div", L0, [
        e.mounted ? (_(), T(de, { key: 0 }, [
          c("div", null, [
            Pe(e.$slots, "default")
          ]),
          e.handleResize ? (_(), Me(s, {
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
      }, P0, 4)
    ], 4)
  ], 46, x0);
}
const Gp = /* @__PURE__ */ bu(N0, [["render", D0]]), Kp = {
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
let $c = function() {
};
typeof window < "u" && ($c = window.Element);
const $0 = /* @__PURE__ */ Lt({
  name: "VPopperWrapper",
  components: {
    Popper: T0,
    PopperContent: Gp
  },
  mixins: [
    Kp,
    Vp("finalTheme")
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
      type: [String, Object, $c, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, $c],
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
function M0(e, t, n, i, a, r) {
  const s = Ue("PopperContent"), o = Ue("Popper");
  return _(), Me(o, jt({ ref: "popper" }, e.$props, {
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
      isShown: d,
      shouldMountContent: u,
      skipTransition: h,
      autoHide: S,
      show: E,
      hide: N,
      handleResize: A,
      onResize: O,
      classes: I,
      result: M
    }) => [
      Pe(e.$slots, "default", {
        shown: d,
        show: E,
        hide: N
      }),
      ye(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: d,
        mounted: u,
        "skip-transition": h,
        "auto-hide": S,
        "handle-resize": A,
        classes: I,
        result: M,
        onHide: N,
        onResize: O
      }, {
        default: ke(() => [
          Pe(e.$slots, "popper", {
            shown: d,
            hide: N
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const yu = /* @__PURE__ */ bu($0, [["render", M0]]), F0 = {
  ...yu,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...yu
});
({
  ...yu
});
jp();
const Cf = zi, z0 = F0, U0 = /* @__PURE__ */ Lt({
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
}), B0 = "_ncPopover_qgtYg", H0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: B0
}, Wp = "nc-popover-9";
Cf.themes[Wp] = structuredClone(Cf.themes.dropdown);
const j0 = {
  name: "NcPopover",
  components: {
    Dropdown: z0,
    NcPopoverTriggerProvider: U0
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
      theme: Wp
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
      return this.placement === "start" ? Oc ? "right" : "left" : this.placement === "end" ? Oc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = hu(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: as(),
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
        ya.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function V0(e, t, n, i, a, r) {
  const s = Ue("NcPopoverTriggerProvider"), o = Ue("Dropdown");
  return _(), Me(o, {
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
      Pe(e.$slots, "default", Ys(es(l)))
    ]),
    default: ke(() => [
      ye(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: ke((l) => [
          Pe(e.$slots, "trigger", Ys(es(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const G0 = {
  $style: H0
}, Tf = /* @__PURE__ */ Qe(j0, [["render", V0], ["__cssModules", G0]]), K0 = {
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
}, W0 = ["aria-hidden", "aria-label"], q0 = ["fill", "width", "height"], Y0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, X0 = { key: 0 };
function Z0(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Y0, [
        n.title ? (_(), T("title", X0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, q0))
  ], 16, W0);
}
const J0 = /* @__PURE__ */ Qe(K0, [["render", Z0]]);
Vi(Ly);
function _u(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Nt)
        return !1;
      if (n.type === de && !_u(n.children))
        return !1;
      if (n.type === ps && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const Q0 = ".focusable", ew = {
  name: "NcActions",
  components: {
    NcButton: Hn,
    NcPopover: Tf
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
      [pu]: W(() => this.actionsMenuSemanticType === "menu"),
      [Op]: this.closeMenu
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
      randomId: vl()
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
    K1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(Q0);
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
        A.type === de && t(A.children, N);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((E) => s.includes(this.getActionName(E))), d = a.some((E) => r.includes(this.getActionName(E))), u = a.some((E) => o.includes(this.getActionName(E)));
    l ? this.actionsMenuSemanticType = "dialog" : d ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((N) => this.getActionName(N).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (E) => {
      const N = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(N) ? Xt("img", { class: "action-item__menutoggle__icon", src: N, alt: "" }) : Xt("span", { class: ["icon", N] })), O = E?.children?.default?.()?.[0]?.children?.trim(), I = this.forceName ? O : "";
      let M = E?.props?.title;
      this.forceName || M || (M = O);
      const K = { ...E?.props ?? {} }, F = ["submit", "reset"].includes(K.type) ? K.modelValue : "button";
      return delete K.modelValue, delete K.type, Xt(
        Hn,
        jt(
          K,
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
            type: F,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (I ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": E?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => I,
          icon: () => A
        }
      );
    }, S = (E) => {
      const N = _u(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Xt("span", { class: ["icon", this.defaultIcon] }) : Xt(J0, { size: 20 }), A = `${this.randomId}-trigger`;
      return Xt(
        Tf,
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
          trigger: () => Xt(Hn, {
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
          [S(a)]
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
        S(e)
      ]
    ));
  }
}, Co = /* @__PURE__ */ Qe(ew, [["__scopeId", "data-v-7206c1f1"]]), tw = ["aria-label"], nw = ["width", "height"], iw = ["fill"], aw = ["fill"], rw = { key: 0 }, sw = /* @__PURE__ */ Lt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = W(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (_(), T("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (_(), T("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, iw),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (_(), T("title", rw, p(e.name), 1)) : H("", !0)
        ], 8, aw)
      ], 8, nw))
    ], 8, tw));
  }
}), qp = /* @__PURE__ */ Qe(sw, [["__scopeId", "data-v-cf399190"]]), Mc = /* @__PURE__ */ Lt({
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
}), ow = {
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
}, lw = ["aria-hidden", "aria-label"], cw = ["fill", "width", "height"], uw = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, dw = { key: 0 };
function fw(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", uw, [
        n.title ? (_(), T("title", dw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, cw))
  ], 16, lw);
}
const hw = /* @__PURE__ */ Qe(ow, [["render", fw]]), pw = {
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
}, vw = ["aria-hidden", "aria-label"], gw = ["fill", "width", "height"], mw = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, bw = { key: 0 };
function yw(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", mw, [
        n.title ? (_(), T("title", bw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, gw))
  ], 16, vw);
}
const _w = /* @__PURE__ */ Qe(pw, [["render", yw]]);
Vi(Dy);
const ww = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Hn,
    ChevronDown: u1,
    ChevronUp: m1
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
      return this.open ? Ct("Collapse menu") : Ct("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function Sw(e, t, n, i, a, r) {
  const s = Ue("ChevronUp"), o = Ue("ChevronDown"), l = Ue("NcButton");
  return _(), Me(l, {
    class: we(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: ke(() => [
      n.open ? (_(), Me(s, {
        key: 0,
        size: 20
      })) : (_(), Me(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const Cw = /* @__PURE__ */ Qe(ww, [["render", Sw], ["__scopeId", "data-v-cfbd3794"]]);
Vi($y, zy);
const Tw = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Co,
    NcActionButton: G1,
    NcAppNavigationIconCollapsible: Cw,
    NcInputConfirmCancel: I1,
    NcLoadingIcon: qp,
    NcVNodes: Mc,
    Pencil: hw,
    Undo: _w
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Sp, default: null }
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
      default: () => vl(),
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
      isMobile: gs(),
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && ci("toggle-navigation", { open: !1 }));
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
}, Ew = ["id"], Aw = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], kw = {
  key: 0,
  class: "editingContainer"
}, Ow = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, Nw = { class: "app-navigation-entry__deleted-description" }, xw = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, Lw = {
  key: 0,
  class: "app-navigation-entry__children"
};
function Rw(e, t, n, i, a, r) {
  const s = Ue("NcLoadingIcon"), o = Ue("NcInputConfirmCancel"), l = Ue("Pencil"), d = Ue("NcActionButton"), u = Ue("Undo"), h = Ue("NcActions"), S = Ue("NcAppNavigationIconCollapsible");
  return _(), T("li", {
    id: n.id,
    class: we([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (_(), Me(iu(r.isRouterLink ? "router-link" : "NcVNodes"), Ys(es({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: ke(({ href: E, navigate: N, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: we(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          n.undo ? H("", !0) : (_(), T("a", {
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
            onKeydown: t[3] || (t[3] = St(Ve((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: we(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (_(), Me(s, { key: 0 })) : Pe(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: we(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (_(), T("div", kw, [
              ye(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : H("", !0)
          ], 40, Aw)),
          n.undo ? (_(), T("div", Ow, [
            c("div", Nw, p(n.name), 1)
          ])) : H("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (_(), T("div", {
            key: 2,
            class: we(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (_(), T("div", xw, [
              Pe(e.$slots, "counter", {}, void 0, !0)
            ])) : H("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (_(), Me(h, {
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
                Pe(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: ke(() => [
                n.editable && !a.editingActive ? (_(), Me(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: ke(() => [
                    ye(l, { size: 20 })
                  ]),
                  default: ke(() => [
                    Ne(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                n.undo ? (_(), Me(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: ke(() => [
                    ye(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                Pe(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : H("", !0)
          ], 2)) : H("", !0),
          n.allowCollapse && e.$slots.default ? (_(), Me(S, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Ve(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : H("", !0),
          Pe(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (_(), T("ul", Lw, [
      Pe(e.$slots, "default", {}, void 0, !0)
    ])) : H("", !0)
  ], 10, Ew);
}
const Ef = /* @__PURE__ */ Qe(Tw, [["render", Rw], ["__scopeId", "data-v-01bef41b"]]), sc = /* @__PURE__ */ new WeakMap(), Iw = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Yd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Yd(e, a, Object.assign({ capture: n }, r));
    }
    sc.set(e, i);
  },
  unmounted(e) {
    const t = sc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), sc.delete(e);
  }
}, Pw = {
  mounted(e) {
    e.focus();
  }
}, Dw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", $w = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Fc = "numeric", zc = "ascii", Uc = "alpha", Br = "asciinumeric", xr = "alphanumeric", Bc = "domain", Yp = "emoji", Mw = "scheme", Fw = "slashscheme", oc = "whitespace";
function zw(e, t) {
  return e in t || (t[e] = []), t[e];
}
function va(e, t, n) {
  t[Fc] && (t[Br] = !0, t[xr] = !0), t[zc] && (t[Br] = !0, t[Uc] = !0), t[Br] && (t[xr] = !0), t[Uc] && (t[xr] = !0), t[xr] && (t[Bc] = !0), t[Yp] && (t[Bc] = !0);
  for (const i in t) {
    const a = zw(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function Uw(e, t) {
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
    return t && t.j ? a = t : (a = new rn(t), n && i && va(t, n, i)), this.jr.push([e, a]), a;
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
          const l = Object.assign(Uw(s.t, i), n);
          va(r, l, i);
        } else n && va(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const De = (e, t, n, i, a) => e.ta(t, n, i, a), pt = (e, t, n, i, a) => e.tr(t, n, i, a), Af = (e, t, n, i, a) => e.ts(t, n, i, a), ne = (e, t, n, i, a) => e.tt(t, n, i, a), ei = "WORD", Hc = "UWORD", Xp = "ASCIINUMERICAL", Zp = "ALPHANUMERICAL", cs = "LOCALHOST", jc = "TLD", Vc = "UTLD", qs = "SCHEME", Ha = "SLASH_SCHEME", wu = "NUM", Gc = "WS", Su = "NL", Hr = "OPENBRACE", jr = "CLOSEBRACE", To = "OPENBRACKET", Eo = "CLOSEBRACKET", Ao = "OPENPAREN", ko = "CLOSEPAREN", Oo = "OPENANGLEBRACKET", No = "CLOSEANGLEBRACKET", xo = "FULLWIDTHLEFTPAREN", Lo = "FULLWIDTHRIGHTPAREN", Ro = "LEFTCORNERBRACKET", Io = "RIGHTCORNERBRACKET", Po = "LEFTWHITECORNERBRACKET", Do = "RIGHTWHITECORNERBRACKET", $o = "FULLWIDTHLESSTHAN", Mo = "FULLWIDTHGREATERTHAN", Fo = "AMPERSAND", zo = "APOSTROPHE", Uo = "ASTERISK", Di = "AT", Bo = "BACKSLASH", Ho = "BACKTICK", jo = "CARET", ga = "COLON", Cu = "COMMA", Vo = "DOLLAR", Fn = "DOT", Go = "EQUALS", Tu = "EXCLAMATION", vn = "HYPHEN", Vr = "PERCENT", Ko = "PIPE", Wo = "PLUS", qo = "POUND", Gr = "QUERY", Eu = "QUOTE", Jp = "FULLWIDTHMIDDLEDOT", Au = "SEMI", zn = "SLASH", Kr = "TILDE", Yo = "UNDERSCORE", Qp = "EMOJI", Xo = "SYM";
var ev = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Zp,
  AMPERSAND: Fo,
  APOSTROPHE: zo,
  ASCIINUMERICAL: Xp,
  ASTERISK: Uo,
  AT: Di,
  BACKSLASH: Bo,
  BACKTICK: Ho,
  CARET: jo,
  CLOSEANGLEBRACKET: No,
  CLOSEBRACE: jr,
  CLOSEBRACKET: Eo,
  CLOSEPAREN: ko,
  COLON: ga,
  COMMA: Cu,
  DOLLAR: Vo,
  DOT: Fn,
  EMOJI: Qp,
  EQUALS: Go,
  EXCLAMATION: Tu,
  FULLWIDTHGREATERTHAN: Mo,
  FULLWIDTHLEFTPAREN: xo,
  FULLWIDTHLESSTHAN: $o,
  FULLWIDTHMIDDLEDOT: Jp,
  FULLWIDTHRIGHTPAREN: Lo,
  HYPHEN: vn,
  LEFTCORNERBRACKET: Ro,
  LEFTWHITECORNERBRACKET: Po,
  LOCALHOST: cs,
  NL: Su,
  NUM: wu,
  OPENANGLEBRACKET: Oo,
  OPENBRACE: Hr,
  OPENBRACKET: To,
  OPENPAREN: Ao,
  PERCENT: Vr,
  PIPE: Ko,
  PLUS: Wo,
  POUND: qo,
  QUERY: Gr,
  QUOTE: Eu,
  RIGHTCORNERBRACKET: Io,
  RIGHTWHITECORNERBRACKET: Do,
  SCHEME: qs,
  SEMI: Au,
  SLASH: zn,
  SLASH_SCHEME: Ha,
  SYM: Xo,
  TILDE: Kr,
  TLD: jc,
  UNDERSCORE: Yo,
  UTLD: Vc,
  UWORD: Hc,
  WORD: ei,
  WS: Gc
});
const Jn = /[a-z]/, Tr = new RegExp("\\p{L}", "u"), lc = new RegExp("\\p{Emoji}", "u"), Qn = /\d/, cc = /\s/, kf = "\r", uc = `
`, Bw = "️", Hw = "‍", dc = "￼";
let Bs = null, Hs = null;
function jw(e = []) {
  const t = {};
  rn.groups = t;
  const n = new rn();
  Bs == null && (Bs = Of(Dw)), Hs == null && (Hs = Of($w)), ne(n, "'", zo), ne(n, "{", Hr), ne(n, "}", jr), ne(n, "[", To), ne(n, "]", Eo), ne(n, "(", Ao), ne(n, ")", ko), ne(n, "<", Oo), ne(n, ">", No), ne(n, "（", xo), ne(n, "）", Lo), ne(n, "「", Ro), ne(n, "」", Io), ne(n, "『", Po), ne(n, "』", Do), ne(n, "＜", $o), ne(n, "＞", Mo), ne(n, "&", Fo), ne(n, "*", Uo), ne(n, "@", Di), ne(n, "`", Ho), ne(n, "^", jo), ne(n, ":", ga), ne(n, ",", Cu), ne(n, "$", Vo), ne(n, ".", Fn), ne(n, "=", Go), ne(n, "!", Tu), ne(n, "-", vn), ne(n, "%", Vr), ne(n, "|", Ko), ne(n, "+", Wo), ne(n, "#", qo), ne(n, "?", Gr), ne(n, '"', Eu), ne(n, "/", zn), ne(n, ";", Au), ne(n, "~", Kr), ne(n, "_", Yo), ne(n, "\\", Bo), ne(n, "・", Jp);
  const i = pt(n, Qn, wu, {
    [Fc]: !0
  });
  pt(i, Qn, i);
  const a = pt(i, Jn, Xp, {
    [Br]: !0
  }), r = pt(i, Tr, Zp, {
    [xr]: !0
  }), s = pt(n, Jn, ei, {
    [zc]: !0
  });
  pt(s, Qn, a), pt(s, Jn, s), pt(a, Qn, a), pt(a, Jn, a);
  const o = pt(n, Tr, Hc, {
    [Uc]: !0
  });
  pt(o, Jn), pt(o, Qn, r), pt(o, Tr, o), pt(r, Qn, r), pt(r, Jn), pt(r, Tr, r);
  const l = ne(n, uc, Su, {
    [oc]: !0
  }), d = ne(n, kf, Gc, {
    [oc]: !0
  }), u = pt(n, cc, Gc, {
    [oc]: !0
  });
  ne(n, dc, u), ne(d, uc, l), ne(d, dc, u), pt(d, cc, u), ne(u, kf), ne(u, uc), pt(u, cc, u), ne(u, dc, u);
  const h = pt(n, lc, Qp, {
    [Yp]: !0
  });
  ne(h, "#"), pt(h, lc, h), ne(h, Bw, h);
  const S = ne(h, Hw);
  ne(S, "#"), pt(S, lc, h);
  const E = [[Jn, s], [Qn, a]], N = [[Jn, null], [Tr, o], [Qn, r]];
  for (let A = 0; A < Bs.length; A++)
    xi(n, Bs[A], jc, ei, E);
  for (let A = 0; A < Hs.length; A++)
    xi(n, Hs[A], Vc, Hc, N);
  va(jc, {
    tld: !0,
    ascii: !0
  }, t), va(Vc, {
    utld: !0,
    alpha: !0
  }, t), xi(n, "file", qs, ei, E), xi(n, "mailto", qs, ei, E), xi(n, "http", Ha, ei, E), xi(n, "https", Ha, ei, E), xi(n, "ftp", Ha, ei, E), xi(n, "ftps", Ha, ei, E), va(qs, {
    scheme: !0,
    ascii: !0
  }, t), va(Ha, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], M = e[A][1] ? {
      [Mw]: !0
    } : {
      [Fw]: !0
    };
    O.indexOf("-") >= 0 ? M[Bc] = !0 : Jn.test(O) ? Qn.test(O) ? M[Br] = !0 : M[zc] = !0 : M[Fc] = !0, Af(n, O, O, M);
  }
  return Af(n, "localhost", cs, {
    ascii: !0
  }), n.jd = new rn(Xo), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, ev)
  };
}
function tv(e, t) {
  const n = Vw(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
  let r = 0, s = 0;
  for (; s < i; ) {
    let o = e, l = null, d = 0, u = null, h = -1, S = -1;
    for (; s < i && (l = o.go(n[s])); )
      o = l, o.accepts() ? (h = 0, S = 0, u = o) : h >= 0 && (h += n[s].length, S++), d += n[s].length, r += n[s].length, s++;
    r -= h, s -= S, d -= h, a.push({
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
function Vw(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function xi(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new rn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new rn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function Of(e) {
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
const us = {
  defaultProtocol: "http",
  events: null,
  format: Nf,
  formatHref: Nf,
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
function ku(e, t = null) {
  let n = Object.assign({}, us);
  e && (n = Object.assign(n, e instanceof ku ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
ku.prototype = {
  o: us,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : us[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Nf(e) {
  return e;
}
function nv(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
nv.prototype = {
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
  toObject(e = us.defaultProtocol) {
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
function yl(e, t) {
  class n extends nv {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const Gw = yl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), xf = yl("text"), Kw = yl("nl"), js = yl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = us.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== cs && e[1].t === ga;
  }
}), hn = (e) => new rn(e);
function Ww({
  groups: e
}) {
  const t = e.domain.concat([Fo, Uo, Di, Bo, Ho, jo, Vo, Go, vn, wu, Vr, Ko, Wo, qo, zn, Xo, Kr, Yo]), n = [zo, ga, Cu, Fn, Tu, Vr, Gr, Eu, Au, Oo, No, Hr, jr, Eo, To, Ao, ko, xo, Lo, Ro, Io, Po, Do, $o, Mo], i = [Fo, zo, Uo, Bo, Ho, jo, Vo, Go, vn, Hr, jr, Vr, Ko, Wo, qo, Gr, zn, Xo, Kr, Yo], a = hn(), r = ne(a, Kr);
  De(r, i, r), De(r, e.domain, r);
  const s = hn(), o = hn(), l = hn();
  De(a, e.domain, s), De(a, e.scheme, o), De(a, e.slashscheme, l), De(s, i, r), De(s, e.domain, s);
  const d = ne(s, Di);
  ne(r, Di, d), ne(o, Di, d), ne(l, Di, d);
  const u = ne(r, Fn);
  De(u, i, r), De(u, e.domain, r);
  const h = hn();
  De(d, e.domain, h), De(h, e.domain, h);
  const S = ne(h, Fn);
  De(S, e.domain, h);
  const E = hn(Gw);
  De(S, e.tld, E), De(S, e.utld, E), ne(d, cs, E);
  const N = ne(h, vn);
  ne(N, vn, N), De(N, e.domain, h), De(E, e.domain, h), ne(E, Fn, S), ne(E, vn, N);
  const A = ne(s, vn), O = ne(s, Fn);
  ne(A, vn, A), De(A, e.domain, s), De(O, i, r), De(O, e.domain, s);
  const I = hn(js);
  De(O, e.tld, I), De(O, e.utld, I), De(I, e.domain, s), De(I, i, r), ne(I, Fn, O), ne(I, vn, A), ne(I, Di, d);
  const M = ne(I, ga), K = hn(js);
  De(M, e.numeric, K);
  const F = hn(js), Z = hn();
  De(F, t, F), De(F, n, Z), De(Z, t, F), De(Z, n, Z), ne(I, zn, F), ne(K, zn, F);
  const D = ne(o, ga), J = ne(l, ga), fe = ne(J, zn), X = ne(fe, zn);
  De(o, e.domain, s), ne(o, Fn, O), ne(o, vn, A), De(l, e.domain, s), ne(l, Fn, O), ne(l, vn, A), De(D, e.domain, F), ne(D, zn, F), ne(D, Gr, F), De(X, e.domain, F), De(X, t, F), ne(X, zn, F);
  const re = [
    [Hr, jr],
    // {}
    [To, Eo],
    // []
    [Ao, ko],
    // ()
    [Oo, No],
    // <>
    [xo, Lo],
    // （）
    [Ro, Io],
    // 「」
    [Po, Do],
    // 『』
    [$o, Mo]
    // ＜＞
  ];
  for (let be = 0; be < re.length; be++) {
    const [te, ae] = re[be], P = ne(F, te);
    ne(Z, te, P);
    const $ = hn(js);
    De(P, t, $);
    const Y = hn();
    De(P, n, Y), ne(P, ae, F), De($, t, $), De($, n, Y), De(Y, t, $), De(Y, n, Y), ne($, ae, F), ne(Y, ae, F);
  }
  return ne(a, cs, I), ne(a, Su, Kw), {
    start: a,
    tokens: ev
  };
}
function qw(e, t, n) {
  let i = n.length, a = 0, r = [], s = [];
  for (; a < i; ) {
    let o = e, l = null, d = null, u = 0, h = null, S = -1;
    for (; a < i && !(l = o.go(n[a].t)); )
      s.push(n[a++]);
    for (; a < i && (d = l || o.go(n[a].t)); )
      l = null, o = d, o.accepts() ? (S = 0, h = o) : S >= 0 && S++, a++, u++;
    if (S < 0)
      a -= u, a < i && (s.push(n[a]), a++);
    else {
      s.length > 0 && (r.push(fc(xf, t, s)), s = []), a -= S, u -= S;
      const E = h.t, N = n.slice(a - u, a);
      r.push(fc(E, t, N));
    }
  }
  return s.length > 0 && r.push(fc(xf, t, s)), r;
}
function fc(e, t, n) {
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
function Yw() {
  $t.scanner = jw($t.customSchemes);
  for (let e = 0; e < $t.tokenQueue.length; e++)
    $t.tokenQueue[e][1]({
      scanner: $t.scanner
    });
  $t.parser = Ww($t.scanner.tokens);
  for (let e = 0; e < $t.pluginQueue.length; e++)
    $t.pluginQueue[e][1]({
      scanner: $t.scanner,
      parser: $t.parser
    });
  return $t.initialized = !0, $t;
}
function iv(e) {
  return $t.initialized || Yw(), qw($t.parser.start, e, tv($t.scanner.start, e));
}
iv.scan = tv;
function Xw(e) {
  const t = new ku({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, Qw), n = iv(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(uo(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function Zw(e) {
  return e.replace(/"/g, "&quot;");
}
function Jw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${Zw(i)}"`);
  }
  return t.join(" ");
}
function Qw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${Jw(t)}>${uo(n)}</${e}>`;
}
const eS = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = Xw(t.text));
}, tS = ["title"], nS = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = zt("NcAppSidebar:header:ref");
    return (n, i) => Xe((_(), T("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Ne(p(e.name), 1)
    ], 8, tS)), [
      [g(eS), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), iS = ["aria-labelledby"], aS = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, rS = ["id"], sS = {
  key: 2,
  class: "empty-content__description"
}, oS = {
  key: 3,
  class: "empty-content__action"
}, lS = /* @__PURE__ */ Lt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = vl();
    return (n, i) => (_(), T("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (_(), T("div", aS, [
        Pe(n.$slots, "icon", {}, void 0, !0)
      ])) : H("", !0),
      e.name !== "" || n.$slots.name ? (_(), T("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Pe(n.$slots, "name", {}, () => [
          Ne(p(e.name), 1)
        ], !0)
      ], 8, rS)) : H("", !0),
      e.description !== "" || n.$slots.description ? (_(), T("p", sS, [
        Pe(n.$slots, "description", {}, () => [
          Ne(p(e.description), 1)
        ], !0)
      ])) : H("", !0),
      n.$slots.action ? (_(), T("div", oS, [
        Pe(n.$slots, "action", {}, void 0, !0)
      ])) : H("", !0)
    ], 8, iS));
  }
}), cS = /* @__PURE__ */ Qe(lS, [["__scopeId", "data-v-8609a4c1"]]), uS = {
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
}, dS = ["aria-hidden", "aria-label"], fS = ["fill", "width", "height"], hS = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, pS = { key: 0 };
function vS(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", hS, [
        n.title ? (_(), T("title", pS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, fS))
  ], 16, dS);
}
const gS = /* @__PURE__ */ Qe(uS, [["render", vS]]), mS = {
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
}, bS = ["aria-hidden", "aria-label"], yS = ["fill", "width", "height"], _S = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, wS = { key: 0 };
function SS(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", _S, [
        n.title ? (_(), T("title", wS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, yS))
  ], 16, bS);
}
const CS = /* @__PURE__ */ Qe(mS, [["render", SS]]), TS = {
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
}, ES = ["aria-hidden", "aria-label"], AS = ["fill", "width", "height"], kS = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, OS = { key: 0 };
function NS(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", kS, [
        n.title ? (_(), T("title", OS, p(n.title), 1)) : H("", !0)
      ])
    ], 8, AS))
  ], 16, ES);
}
const xS = /* @__PURE__ */ Qe(TS, [["render", NS]]), LS = ["aria-selected", "tabindex"], RS = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Xg({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Eh(e, "selected"), n = /* @__PURE__ */ Ie(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (_(), T("button", {
      class: we(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Gi),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      c("span", {
        class: we([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        c("span", {
          class: we([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          ye(Mc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: ke(() => [
              c("span", {
                class: we([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        c("span", {
          class: we([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          ye(Mc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: ke(() => [
              c("span", {
                class: we([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      c("span", {
        class: we(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, LS));
  }
}), IS = "_sidebarTabsButton_q3kBA", PS = "_sidebarTabsButton_legacy_KQ4d1", DS = "_sidebarTabsButton_selected_Pjayf", $S = "_sidebarTabsButton_animatedHighlight_uvp-0", MS = "_sidebarTabsButton__name_rlQsL", FS = "_sidebarTabsButton__icon_QzZg4", zS = "_sidebarTabsButton__iconLayer_ZkZan", US = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", BS = "_sidebarTabsButton__icon_pop_IA0By", HS = "_sidebarTabsButton__legacyIcon_QhcNW", jS = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: IS,
  sidebarTabsButton_legacy: PS,
  sidebarTabsButton_selected: DS,
  sidebarTabsButton_animatedHighlight: $S,
  sidebarTabsButton__name: MS,
  sidebarTabsButton__icon: FS,
  sidebarTabsButton__iconLayer: zS,
  sidebarTabsButton__iconLayer_hidden: US,
  sidebarTabsButton__icon_pop: BS,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: HS
}, VS = {
  $style: jS
}, GS = /* @__PURE__ */ Qe(RS, [["__cssModules", VS]]), KS = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: GS
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [Jb()]) : t.order - n.order), this.updateActive();
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
}, WS = { class: "app-sidebar-tabs" };
function qS(e, t, n, i, a, r) {
  const s = Ue("NcAppSidebarTabsButton");
  return _(), T("div", WS, [
    r.hasMultipleTabs || r.showForSingleTab ? (_(), T("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: we(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = St(Ve((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = St(Ve((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = St(Ve((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = St(Ve((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = St(Ve((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = St(Ve((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = St(Ve((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (_(), T("div", {
        key: 0,
        class: we(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: on(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : H("", !0),
      (_(!0), T(de, null, Fe(a.tabs, (o) => (_(), Me(s, {
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
      class: we(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Pe(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const YS = /* @__PURE__ */ Qe(KS, [["render", qS], ["__scopeId", "data-v-74190d2a"]]);
Vi(Iy);
const XS = {
  name: "NcAppSidebar",
  components: {
    NcActions: Co,
    NcAppSidebarHeader: nS,
    NcAppSidebarTabs: YS,
    NcButton: Hn,
    NcLoadingIcon: qp,
    NcEmptyContent: cS,
    IconArrowRight: Ap,
    IconClose: kp,
    IconDockRight: gS,
    IconStar: CS,
    IconStarOutline: xS
  },
  directives: {
    Focus: Pw,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: Iw
  },
  inject: {
    ncContentSelector: {
      from: Ep,
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
    const e = /* @__PURE__ */ Ie(null);
    return gn("NcAppSidebar:header:ref", e), {
      uid: vl(),
      isMobile: ky(),
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
    isSlotPopulated: _u,
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
      this.focusTrap || (this.focusTrap = hu([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: as(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ya.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, ZS = ["aria-labelledby"], JS = { class: "app-sidebar-header__info" }, QS = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, eC = { class: "app-sidebar-header__name-container" }, tC = { class: "app-sidebar-header__mainname-container" }, nC = ["placeholder", "value"], iC = ["title"], aC = {
  key: 2,
  class: "app-sidebar-header__description"
};
function rC(e, t, n, i, a, r) {
  const s = Ue("IconDockRight"), o = Ue("NcButton"), l = Ue("NcLoadingIcon"), d = Ue("IconStar"), u = Ue("IconStarOutline"), h = Ue("NcAppSidebarHeader"), S = Ue("IconArrowRight"), E = Ue("NcActions"), N = Ue("IconClose"), A = Ue("NcAppSidebarTabs"), O = Ue("NcEmptyContent"), I = qu("focus"), M = qu("click-outside");
  return _(), Me(Mm, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: ke(() => [
      Xe(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = St((...K) => r.onKeydownEsc && r.onKeydownEsc(...K), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (_(), Me(ch, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ye(o, jt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (K) => e.$emit("update:open", !0))
          }), {
            icon: ke(() => [
              Pe(e.$slots, "toggle-icon", {}, () => [
                ye(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : H("", !0),
        c("header", {
          class: we(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (_(), Me(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Pe(e.$slots, "info", { key: 0 }, () => [
            c("div", JS, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (_(), T("div", {
                key: 0,
                class: we(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: on({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...K) => r.onFigureClick && r.onFigureClick(...K)),
                onKeydown: t[2] || (t[2] = St((...K) => r.onFigureClick && r.onFigureClick(...K), ["enter"]))
              }, [
                Pe(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : H("", !0),
              c("div", {
                class: we(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (_(), T("div", QS, [
                  Pe(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (_(), Me(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ve(r.toggleStarred, ["prevent"])
                    }, {
                      icon: ke(() => [
                        n.starLoading ? (_(), Me(l, { key: 0 })) : a.isStarred ? (_(), Me(d, {
                          key: 1,
                          size: 20
                        })) : (_(), Me(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : H("", !0)
                  ], !0)
                ])) : H("", !0),
                c("div", eC, [
                  c("div", tC, [
                    Xe(ye(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Ve(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Wa, !n.nameEditable]
                    ]),
                    n.nameEditable ? Xe((_(), T("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ve((...K) => r.onSubmitName && r.onSubmitName(...K), ["prevent"]))
                    }, [
                      Xe(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = St(Ve((...K) => r.onDismissEditing && r.onDismissEditing(...K), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...K) => r.onNameInput && r.onNameInput(...K))
                      }, null, 40, nC), [
                        [I]
                      ]),
                      ye(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: ke(() => [
                          ye(S, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : H("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (_(), Me(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: ke(() => [
                        Pe(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : H("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (_(), T("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Pe(e.$slots, "subname", {}, () => [
                      Ne(p(n.subname), 1)
                    ], !0)
                  ], 8, iC)) : H("", !0)
                ])
              ], 2)
            ])
          ], !0),
          ye(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ve(r.closeSidebar, ["prevent"])
          }, {
            icon: ke(() => [
              ye(N, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (_(), T("div", aC, [
            Pe(e.$slots, "description", {}, void 0, !0)
          ])) : H("", !0)
        ], 2),
        Xe(ye(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: ke(() => [
            Pe(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Wa, !n.loading]
        ]),
        n.loading ? (_(), Me(O, { key: 1 }, {
          icon: ke(() => [
            ye(l, { size: 64 })
          ]),
          _: 1
        })) : H("", !0)
      ], 40, ZS), [
        [Wa, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const sC = /* @__PURE__ */ Qe(XS, [["render", rC], ["__scopeId", "data-v-c2c6820b"]]), oC = {
  name: "NcActionLink",
  mixins: [Np],
  inject: {
    isInSemanticMenu: {
      from: pu,
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
}, lC = ["role"], cC = ["download", "href", "aria-label", "target", "title", "role"], uC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, dC = { class: "action-link__name" }, fC = ["textContent"], hC = ["textContent"], pC = {
  key: 2,
  class: "action-link__text"
};
function vC(e, t, n, i, a, r) {
  return _(), T("li", {
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
      Pe(e.$slots, "icon", {}, () => [
        c("span", {
          "aria-hidden": "true",
          class: we(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (_(), T("span", uC, [
        c("strong", dC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, fC)
      ])) : e.isLongText ? (_(), T("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, hC)) : (_(), T("span", pC, p(e.text), 1)),
      H("", !0)
    ], 8, cC)
  ], 8, lC);
}
const za = /* @__PURE__ */ Qe(oC, [["render", vC], ["__scopeId", "data-v-32f01b7a"]]);
Vi(Fy);
const gC = `<!--
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
`, mC = `<!--
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
`, bC = { class: "vue-skip-actions__container" }, yC = { class: "vue-skip-actions__headline" }, _C = { class: "vue-skip-actions__buttons" }, wC = /* @__PURE__ */ Lt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    gn(Tp, o), gn(Ep, "#content-vue"), gn("appName", W(() => t.appName));
    const n = gs(), i = /* @__PURE__ */ Ie(!1), a = /* @__PURE__ */ Ie(), r = W(() => a.value === "navigation" ? mC : gC);
    mh(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      ci("toggle-navigation", { open: !0 }), an(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, d) => (_(), T("div", {
      id: "content-vue",
      class: we(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Gi) }]])
    }, [
      (_(), Me(ch, { to: "#skip-actions" }, [
        c("div", bC, [
          c("div", yC, p(g(Ct)("Keyboard navigation help")), 1),
          c("div", _C, [
            Xe(ye(Hn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ve(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: ke(() => [
                Ne(p(g(Ct)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Wa, i.value]
            ]),
            ye(Hn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: ke(() => [
                Ne(p(g(Ct)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Xe(ye(pl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Wa, !g(n)]
          ])
        ])
      ])),
      Pe(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), SC = /* @__PURE__ */ Qe(wC, [["__scopeId", "data-v-d13dcb98"]]), CC = { class: "library-shelf-tree-node" }, TC = ["aria-expanded", "aria-label"], EC = ["href"], AC = { class: "library-shelf-summary-title" }, kC = { dir: "auto" }, OC = { class: "library-muted" }, NC = { dir: "auto" }, xC = {
  key: 1,
  role: "status",
  class: "library-muted"
}, LC = {
  key: 2,
  role: "status",
  class: "library-muted"
}, RC = {
  key: 3,
  class: "library-shelf-tree"
}, IC = ["disabled"], PC = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Ie(!1), i = /* @__PURE__ */ Ie(!1), a = /* @__PURE__ */ Ie(!1), r = /* @__PURE__ */ Ie(!1), s = /* @__PURE__ */ Ie([]), o = /* @__PURE__ */ Ie(!1), l = /* @__PURE__ */ Ie(0);
    async function d() {
      n.value = !n.value, !(!n.value || i.value || a.value) && await u();
    }
    async function u() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const h = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(l.value) }), S = await fetch(`${t.childrenUrl}?${h}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!S.ok) throw new Error("Shelf children request failed");
          const E = await S.json(), N = Array.isArray(E?.nodes) ? E.nodes : [];
          s.value.push(...N), o.value = E?.hasMore === !0, l.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : s.value.length, i.value = !o.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (h, S) => {
      const E = Ue("ShelfTreeNode", !0);
      return _(), T("li", CC, [
        e.node.hasChildren ? (_(), T("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(y)("library", "Collapse {folder}", { folder: e.node.label }) : g(y)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: d
        }, p(n.value ? "−" : "+"), 9, TC)) : H("", !0),
        c("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          c("span", AC, [
            c("strong", null, [
              c("bdi", kC, p(e.node.label), 1)
            ]),
            c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          c("small", OC, [
            c("bdi", NC, p(e.node.path), 1)
          ])
        ], 8, EC),
        a.value ? (_(), T("small", xC, p(g(y)("library", "Loading folders…")), 1)) : r.value ? (_(), T("small", LC, p(g(y)("library", "Could not load folders.")), 1)) : H("", !0),
        n.value && s.value.length ? (_(), T("ul", RC, [
          (_(!0), T(de, null, Fe(s.value, (N) => (_(), Me(E, {
            key: N.id,
            node: N,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : H("", !0),
        n.value && o.value ? (_(), T("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: u
        }, p(g(y)("library", "Load more folders")), 9, IC)) : H("", !0)
      ]);
    };
  }
}, DC = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, $C = { id: "library-sidebar-filters-heading" }, MC = ["aria-label"], FC = ["name", "value"], zC = ["value"], UC = ["value"], BC = ["title"], HC = ["placeholder"], jC = { value: "" }, VC = ["value"], GC = { class: "library-publisher-filter" }, KC = { for: "library-publisher-search" }, WC = ["placeholder", "title", "aria-expanded"], qC = ["value"], YC = {
  key: 0,
  id: "library-publisher-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, XC = ["onClick"], ZC = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, JC = { class: "library-publication-filter" }, QC = { for: "library-publication-search" }, eT = ["placeholder", "aria-expanded"], tT = ["value"], nT = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, iT = ["onClick"], aT = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, rT = { class: "library-year-filter" }, sT = { for: "library-year-search" }, oT = ["placeholder", "aria-expanded"], lT = ["value"], cT = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, uT = ["onClick"], dT = {
  type: "submit",
  class: "button secondary library-year-apply"
}, fT = { class: "library-creator-filter" }, hT = { for: "library-creator-search" }, pT = ["placeholder", "title", "aria-expanded"], vT = ["value"], gT = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, mT = ["onClick"], bT = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, yT = ["placeholder"], _T = { value: "" }, wT = ["value"], ST = { value: "" }, CT = ["value"], TT = { value: "" }, ET = ["value"], AT = { value: "" }, kT = ["value"], OT = { value: "" }, NT = ["value"], xT = { value: "" }, LT = ["value"], RT = { value: "" }, IT = { value: "1" }, PT = {
  type: "submit",
  class: "button primary"
}, DT = {
  href: "?",
  class: "button secondary"
}, $T = ["href"], MT = ["lang", "dir"], FT = ["aria-label"], zT = ["href", "aria-label", "onClick"], UT = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, BT = { class: "library-review-header" }, HT = { class: "library-muted library-catalogue-eyebrow" }, jT = { id: "library-review-heading" }, VT = ["aria-label"], GT = ["href", "aria-current", "onClick"], KT = ["aria-label"], WT = ["name", "value"], qT = {
  type: "submit",
  class: "button secondary"
}, YT = ["aria-busy"], XT = { key: 0 }, ZT = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, JT = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, QT = { class: "library-metadata-review-workbench-copy" }, eE = { class: "library-muted library-catalogue-eyebrow" }, tE = ["title"], nE = {
  key: 0,
  class: "library-metadata-review-card"
}, iE = {
  class: "library-bidi-human",
  dir: "auto"
}, aE = { class: "library-muted" }, rE = {
  class: "library-bidi-machine",
  dir: "ltr"
}, sE = { class: "library-metadata-review-fields" }, oE = {
  class: "library-bidi-human",
  dir: "auto"
}, lE = {
  class: "library-bidi-human",
  dir: "auto"
}, cE = {
  class: "library-bidi-human",
  dir: "auto"
}, uE = {
  class: "library-bidi-machine",
  dir: "ltr"
}, dE = {
  class: "library-bidi-human",
  dir: "auto"
}, fE = {
  class: "library-bidi-human",
  dir: "auto"
}, hE = ["action"], pE = ["value"], vE = ["value"], gE = {
  type: "submit",
  class: "button secondary"
}, mE = { class: "library-metadata-review-actions" }, bE = ["href"], yE = ["href"], _E = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, wE = ["href"], SE = ["aria-label"], CE = ["onClick"], TE = {
  class: "library-bidi-human",
  dir: "auto"
}, EE = {
  key: 0,
  class: "library-muted"
}, AE = {
  class: "library-bidi-human",
  dir: "auto"
}, kE = {
  key: 1,
  class: "library-scan-error"
}, OE = {
  class: "library-bidi-human",
  dir: "auto"
}, NE = ["onClick"], xE = ["href"], LE = ["aria-label"], RE = ["href"], IE = {
  key: 1,
  class: "library-muted"
}, PE = { key: 0 }, DE = ["href"], $E = {
  key: 3,
  class: "library-muted"
}, ME = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, FE = { class: "library-home-header" }, zE = { class: "library-muted library-catalogue-eyebrow" }, UE = { id: "library-home-heading" }, BE = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, HE = { id: "library-continue-heading" }, jE = { class: "library-muted" }, VE = ["href"], GE = {
  key: 0,
  class: "library-home-card-row"
}, KE = ["onClick"], WE = { class: "library-cover-frame" }, qE = ["src"], YE = { class: "library-cover-summary" }, XE = ["onClick"], ZE = { dir: "auto" }, JE = {
  key: 0,
  class: "library-cover-creator"
}, QE = { dir: "auto" }, eA = ["href"], tA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, nA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, iA = { id: "library-recent-heading" }, aA = { class: "library-muted" }, rA = ["href"], sA = {
  key: 0,
  class: "library-home-card-row"
}, oA = ["onClick"], lA = { class: "library-cover-frame" }, cA = ["src"], uA = { class: "library-cover-summary" }, dA = ["onClick"], fA = { dir: "auto" }, hA = {
  key: 0,
  class: "library-cover-creator"
}, pA = { dir: "auto" }, vA = ["href"], gA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, mA = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, bA = { id: "library-home-shelves-heading" }, yA = { class: "library-muted" }, _A = ["href"], wA = ["aria-label"], SA = ["href"], CA = { dir: "auto" }, TA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, EA = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, AA = { id: "library-home-attention-heading" }, kA = { class: "library-muted" }, OA = ["href"], NA = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, xA = { class: "library-home-header" }, LA = { class: "library-muted library-catalogue-eyebrow" }, RA = { id: "library-shelves-landing-heading" }, IA = { class: "library-muted" }, PA = ["aria-label"], DA = { class: "library-shelf-tree" }, $A = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, MA = { class: "library-muted" }, FA = { class: "library-empty-actions" }, zA = ["href"], UA = ["href"], BA = {
  key: 4,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, HA = { class: "library-catalogue-header" }, jA = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, VA = { id: "library-catalogue-heading" }, GA = ["aria-label"], KA = ["aria-label"], WA = ["name", "value"], qA = { "data-library-control": "sort" }, YA = { value: "title" }, XA = { value: "recent" }, ZA = { value: "publicationDate" }, JA = { value: "publication" }, QA = { value: "lastOpened" }, e2 = { value: "format" }, t2 = ["aria-label"], n2 = ["aria-pressed"], i2 = ["aria-pressed"], a2 = ["aria-pressed"], r2 = ["aria-pressed"], s2 = {
  id: "library-collections",
  class: "library-saved-collections"
}, o2 = ["title"], l2 = ["action", "title"], c2 = ["value"], u2 = ["value"], d2 = ["placeholder", "disabled"], f2 = ["disabled", "title"], h2 = ["aria-label"], p2 = ["href"], v2 = ["action"], g2 = ["value"], m2 = {
  type: "submit",
  class: "button tertiary"
}, b2 = ["aria-label"], y2 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, _2 = ["title"], w2 = { class: "library-workspace-panel-purpose" }, S2 = { class: "library-workspace-scope-badge" }, C2 = { "aria-live": "polite" }, T2 = ["action"], E2 = ["value"], A2 = ["placeholder"], k2 = ["title"], O2 = ["action"], N2 = ["value"], x2 = ["placeholder"], L2 = ["title"], R2 = ["action"], I2 = ["value"], P2 = ["name", "value"], D2 = ["title"], $2 = ["action"], M2 = ["value"], F2 = ["name", "value"], z2 = { name: "bulkEditField" }, U2 = { value: "publicationType" }, B2 = { value: "subtitle" }, H2 = { value: "creators" }, j2 = { value: "publication" }, V2 = { value: "publicationDate" }, G2 = { value: "language" }, K2 = { value: "publisher" }, W2 = { value: "subjects" }, q2 = { value: "classifications" }, Y2 = ["placeholder"], X2 = ["title"], Z2 = ["action"], J2 = ["value"], Q2 = ["name", "value"], ek = ["title"], tk = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, nk = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, ik = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, ak = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, rk = { class: "library-muted library-catalogue-eyebrow" }, sk = ["title"], ok = ["aria-label"], lk = { key: 0 }, ck = { key: 1 }, uk = { key: 2 }, dk = ["aria-label"], fk = { key: 0 }, hk = { key: 1 }, pk = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, vk = { class: "library-muted library-catalogue-eyebrow" }, gk = ["title"], mk = ["aria-label"], bk = ["href"], yk = {
  key: 0,
  class: "library-notice"
}, _k = { class: "library-publication-issue-label" }, wk = ["href"], Sk = { class: "library-muted" }, Ck = {
  key: 1,
  class: "library-publication-unknown-issues"
}, Tk = ["title"], Ek = ["href"], Ak = { class: "library-catalogue-status-row" }, kk = { class: "library-muted library-filter-result-summary" }, Ok = { key: 0 }, Nk = { href: "?" }, xk = ["aria-label"], Lk = { class: "library-pagination-range" }, Rk = { key: 0 }, Ik = ["href"], Pk = {
  key: 1,
  class: "library-muted"
}, Dk = ["href"], $k = {
  key: 3,
  class: "library-muted"
}, Mk = ["title"], Fk = { class: "library-empty-actions" }, zk = ["href"], Uk = { class: "library-muted" }, Bk = ["title"], Hk = { class: "library-empty-actions" }, jk = ["href"], Vk = ["title"], Gk = { class: "library-empty-actions" }, Kk = ["href"], Wk = {
  href: "?",
  class: "button primary"
}, qk = ["title"], Yk = { class: "library-empty-actions" }, Xk = ["href"], Zk = {
  key: 5,
  class: "library-select-visible"
}, Jk = ["checked"], Qk = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, eO = { class: "library-item-selection" }, tO = ["checked", "aria-label", "onChange"], nO = { class: "library-catalogue-list-main" }, iO = ["onClick"], aO = {
  class: "library-bidi-human",
  dir: "auto"
}, rO = {
  key: 0,
  class: "library-muted"
}, sO = {
  class: "library-bidi-human",
  dir: "auto"
}, oO = { class: "library-catalogue-list-metadata" }, lO = { key: 0 }, cO = {
  class: "library-bidi-human",
  dir: "auto"
}, uO = { key: 1 }, dO = { key: 2 }, fO = ["dir"], hO = { key: 3 }, pO = {
  class: "library-bidi-human",
  dir: "auto"
}, vO = { class: "library-catalogue-list-actions" }, gO = ["href"], mO = ["onClick"], bO = { class: "library-item-selection" }, yO = ["checked", "aria-label", "onChange"], _O = ["aria-labelledby", "aria-expanded", "onClick"], wO = ["id"], SO = { class: "library-cover-frame" }, CO = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, TO = ["src", "onLoad", "onError"], EO = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, AO = ["action", "onSubmit"], kO = ["value"], OO = ["value"], NO = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], xO = ["data-library-star-error"], LO = { class: "library-cover-summary" }, RO = { class: "library-cover-primary" }, IO = ["id"], PO = ["onClick"], DO = {
  class: "library-bidi-human",
  dir: "auto"
}, $O = {
  key: 0,
  class: "library-cover-creator"
}, MO = {
  class: "library-bidi-human",
  dir: "auto"
}, FO = {
  key: 1,
  class: "library-cover-badges"
}, zO = {
  key: 0,
  class: "library-cover-badge"
}, UO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, BO = {
  key: 1,
  class: "library-cover-context"
}, HO = {
  class: "library-bidi-human",
  dir: "auto"
}, jO = { class: "library-cover-primary-actions" }, VO = ["href"], GO = ["aria-label"], KO = { class: "library-pagination-range" }, WO = { key: 0 }, qO = ["href"], YO = {
  key: 1,
  class: "library-muted"
}, XO = ["href"], ZO = {
  key: 3,
  class: "library-muted"
}, JO = { class: "library-sidebar-content" }, QO = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, eN = ["role"], tN = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, nN = { class: "library-sidebar-publication-header" }, iN = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, aN = ["src"], rN = { class: "library-sidebar-publication-summary" }, sN = { class: "library-muted library-catalogue-eyebrow" }, oN = {
  class: "library-bidi-human",
  dir: "auto"
}, lN = { key: 0 }, cN = {
  class: "library-bidi-machine",
  dir: "ltr"
}, uN = { class: "library-detail-drawer-actions" }, dN = ["href"], fN = ["aria-label"], hN = ["aria-current", "onClick"], pN = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, vN = { id: "library-sidebar-overview-heading" }, gN = {
  key: 0,
  class: "library-sidebar-description"
}, mN = {
  class: "library-bidi-human",
  dir: "auto"
}, bN = { class: "library-detail-drawer-facts" }, yN = { key: 0 }, _N = { key: 1 }, wN = { key: 2 }, SN = { key: 3 }, CN = { key: 4 }, TN = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, EN = { id: "library-sidebar-metadata-heading" }, AN = ["placeholder"], kN = ["onUpdate:modelValue", "aria-label", "placeholder"], ON = ["onUpdate:modelValue", "aria-label"], NN = ["onClick"], xN = { class: "library-muted" }, LN = {
  key: 0,
  role: "alert"
}, RN = {
  key: 1,
  role: "status"
}, IN = ["disabled"], PN = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, DN = { id: "library-sidebar-suggestions-heading" }, $N = { class: "library-muted" }, MN = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, FN = { id: "library-sidebar-activity-heading" }, zN = { class: "library-detail-drawer-facts" }, UN = { key: 0 }, BN = { key: 1 }, HN = { key: 2 }, jN = { dir: "ltr" }, VN = ["aria-label"], GN = ["disabled"], KN = ["disabled"], WN = 20, qN = "/apps/library", YN = 2147483647, XN = {
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
    function r(b, m) {
      return Object.prototype.hasOwnProperty.call(a, b) && String(m ?? "").trim() === a[b];
    }
    function s(b) {
      const m = new URLSearchParams(b);
      for (const f of Object.keys(a)) {
        const B = [...new Set([...m.keys()].filter((Le) => Le === f || Le.startsWith(`${f}[`)))], ce = B.reduce((Le, ze) => Le + m.getAll(ze).length, 0);
        if (ce > 1 || B.some((Le) => Le !== f)) {
          for (const Le of B) m.delete(Le);
          continue;
        }
        f !== "status" && ce === 1 && !r(f, m.get(f)) && m.delete(f);
      }
      return m;
    }
    function o(b) {
      return Object.keys(a).some((m) => b.getAll(m).length === 1 && r(m, b.get(m)));
    }
    function l(b) {
      return Object.fromEntries(Object.entries(b || {}).filter(([m, f]) => m === "status" || !Object.prototype.hasOwnProperty.call(a, m) || r(m, f)));
    }
    const d = /* @__PURE__ */ Mt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Mt((d.items || []).map((b) => ({ ...b }))), h = W(() => u), S = W(() => d.shelves || []), E = W(() => d.formats || []), N = W(() => d.publicationTypes?.length ? d.publicationTypes : n), A = W(() => d.publications || []), O = W(() => d.publicationIssueContext || null), I = W(() => d.scanStatuses || []), M = W(() => d.workflowStatuses || []), K = W(() => d.subjects || []), F = W(() => d.classifications || []), Z = W(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ Mt({
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
      folder: d.activeFilters?.folder || "",
      status: d.activeFilters?.status || "",
      workflowStatus: d.activeFilters?.workflowStatus || "",
      subject: d.activeFilters?.subject || "",
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
    for (const b of Object.keys(a))
      b !== "status" && (r(b, D[b]) || (D[b] = ""));
    const J = /* @__PURE__ */ Ie(D.publication), fe = /* @__PURE__ */ Ie(D.q), X = /* @__PURE__ */ Ie(!1), re = /* @__PURE__ */ Ie(null), be = W(() => {
      const b = J.value.trim().toLocaleLowerCase();
      return (b !== "" && re.value !== null ? re.value : A.value).filter((f) => b === "" || f.toLocaleLowerCase().includes(b)).slice(0, WN);
    });
    lt(() => D.publication, (b) => {
      J.value = b || "";
    }), lt(() => D.q, (b) => {
      fe.value = b || "";
    });
    let te = null, ae = null, P = 0;
    lt(J, (b) => {
      window.clearTimeout(te), ae?.abort(), ae = null, re.value = null;
      const m = String(b || "").trim();
      if (m === "") return;
      const f = ++P;
      te = window.setTimeout(() => {
        cv(m, f);
      }, 200);
    });
    const $ = /* @__PURE__ */ Ie(D.publisher), Y = /* @__PURE__ */ Ie(!1), se = /* @__PURE__ */ Ie(null), ie = W(() => se.value || []);
    lt(() => D.publisher, (b) => {
      $.value = b || "";
    });
    let pe = null, he = null, Se = 0;
    lt($, (b) => {
      window.clearTimeout(pe), he?.abort(), he = null, se.value = null;
      const m = String(b || "").trim();
      if (m === "") return;
      const f = ++Se;
      pe = window.setTimeout(() => {
        ov(m, f);
      }, 200);
    });
    const ge = /* @__PURE__ */ Ie(D.creator), He = /* @__PURE__ */ Ie(!1), Ee = /* @__PURE__ */ Ie(null), at = W(() => Ee.value || []);
    lt(() => D.creator, (b) => {
      ge.value = b || "";
    });
    let ct = null, ut = null, Et = 0;
    lt(ge, (b) => {
      window.clearTimeout(ct), ut?.abort(), ut = null, Ee.value = null;
      const m = String(b || "").trim();
      if (m === "") return;
      const f = ++Et;
      ct = window.setTimeout(() => {
        sv(m, f);
      }, 200);
    });
    const qe = /* @__PURE__ */ Ie(D.year), Rt = /* @__PURE__ */ Ie(!1), U = /* @__PURE__ */ Ie(null), v = W(() => U.value || []);
    lt(() => D.year, (b) => {
      qe.value = b || "";
    });
    let C = null, k = null, L = 0;
    lt(qe, (b) => {
      window.clearTimeout(C), k?.abort(), k = null, U.value = null;
      const m = String(b || "").trim();
      if (m === "") return;
      const f = ++L;
      C = window.setTimeout(() => {
        lv(m, f);
      }, 200);
    });
    const x = Object.fromEntries(Object.keys(D).map((b) => [b, b === "sort" ? "title" : b === "view" ? "compact" : ""])), z = window.location.pathname.indexOf(qN), G = z >= 0 ? window.location.pathname.slice(0, z) : "", V = {
      catalogue: `${G}/apps/library/`,
      review: `${G}/apps/library/?scannerConflicts=1`,
      settings: `${G}/settings/user/library`
    };
    function Q(b, m) {
      if (typeof b != "string" || b === "") return m;
      try {
        const f = G ? `${G}/` : "/";
        let B = b;
        for (let ce = 0; ce < 5; ce += 1) {
          if (!B.startsWith("/") || B.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(B)) return m;
          const Le = new URL(B, window.location.origin);
          if (Le.origin !== window.location.origin || !Le.pathname.startsWith(f)) return m;
          const ze = B.split(/[?#]/, 1)[0];
          for (const en of ze.split("/")) {
            let ki = en;
            for (let Pa = 0; Pa < 5; Pa += 1) {
              const Pn = decodeURIComponent(ki);
              if (/[\\/\u0000-\u001f\u007f]/.test(Pn) || Pn === "." || Pn === "..") return m;
              if (Pn === ki) break;
              if (ki = Pn, Pa === 4) return m;
            }
          }
          const ht = decodeURI(B);
          if (ht === B) return b;
          B = ht;
        }
        return m;
      } catch {
        return m;
      }
    }
    const j = W(() => Q(d.settingsUrl, V.settings)), ue = W(() => Q(d.catalogueRootUrl, V.catalogue)), oe = W(() => Q(d.homeUrl, `${V.catalogue}?home=1`)), me = W(() => Q(d.shelvesUrl, `${V.catalogue}?shelves=1`)), Ce = W(() => Q(d.reviewUrl || d.scannerConflictReviewUrl, V.review)), Oe = W(() => Object.entries(a).some(([b, m]) => D[b] === m)), $e = W(() => i.reduce((b, m) => b + Number(Pu.value[m.countKey] || 0), 0)), Re = W(() => d.surface === "home"), Ye = W(() => d.surface === "shelves"), rt = W(() => !Re.value && !Ye.value && !Oe.value && !D.starred && D.sort !== "lastOpened" && !D.shelf), At = W(() => [
      { key: "home", name: y("library", "Home"), href: oe.value, active: Re.value },
      { key: "all", name: y("library", "All publications"), href: ue.value, active: rt.value },
      { key: "starred", name: y("library", "Starred"), href: `${ue.value}?starred=1`, active: D.starred === "1" },
      { key: "continue", name: y("library", "Continue reading"), href: `${ue.value}?sort=lastOpened`, active: D.sort === "lastOpened" },
      { key: "shelves", name: y("library", "Shelves"), href: me.value, active: Ye.value || !!D.shelf },
      { key: "collections", name: y("library", "Collections"), href: `${ue.value}#library-collections`, active: !1 }
    ]), it = W(() => d.requestToken || ""), Yt = W(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), Gn = W(() => d.shelfChildrenUrl || "/apps/library/shelves/children"), vt = W(() => d.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Vt = W(() => d.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Ki = W(() => d.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Wi = W(() => d.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Qa = W(() => d.itemSidebarUrlTemplate || `${G}/apps/library/items/__ITEM_ID__/sidebar`), er = W(() => d.batchTagUrl || "/apps/library/bulk/tags"), gi = W(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), mi = W(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), ms = W(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), bs = W(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), tr = W(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const Ta = W(() => d.discoveryPage === "publication"), Ea = W(() => d.discoveryPage === "year"), bi = W(() => d.discoveryPage === "creator"), yi = W(() => Ta.value || Ea.value || bi.value), Jt = W(() => d.discoveryTitle || D.publication || D.year || D.creator || ""), _i = W(() => yi.value ? Jt.value : y("library", "Library")), Aa = W(() => bi.value ? y("library", "Creator") : Ea.value ? y("library", "Publication year") : y("library", "Publication / series")), ka = W(() => Number(d.rootCount || 0)), _l = W(() => Number(d.enabledRootCount || 0)), Oa = W(() => ka.value === 0), qi = W(() => ka.value > 0 && _l.value === 0), nr = W(() => Yi.value.length > 0), Na = {
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
      weakMetadata: "Needs details",
      unreviewedImports: "Unreviewed imports"
    }, ys = W(() => {
      if (typeof window > "u") return "";
      const b = new URLSearchParams(window.location.search);
      if (b.get("batchMetadataApplyResult") !== "1") return "";
      const m = b.get("batchMetadataField") || "field", f = b.get("batchMetadataApplied") || "0", B = b.get("batchMetadataUnchanged") || "0", ce = b.get("batchMetadataSkipped") || "0";
      return y("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: m, unchanged: B, skipped: ce });
    }), wi = W(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? y("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), _s = W(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? y("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), ws = W(() => d.savedCollections || []), st = W(() => d.savedCollectionSaveUrl || "/apps/library/collections"), Si = W(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Ss = ["compact", "gallery", "list", "shelf"], Gt = W(() => Ss.includes(D.view) ? D.view : "compact"), ir = W(() => ({
      "library-cover-gallery--compact": Gt.value === "compact",
      "library-cover-gallery--gallery": Gt.value === "gallery",
      "library-cover-gallery--shelf": Gt.value === "shelf"
    })), Yi = W(() => Object.entries(Na).map(([b, m]) => ({ key: b, label: y("library", m), value: D[b] || "" })).filter((b) => String(b.value).trim() !== "" && !(b.key === "sort" && b.value === "title") && !(b.key === "view" && b.value === "compact"))), Cs = /* @__PURE__ */ new Set([
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
      "status",
      "workflowStatus",
      "subject",
      "classification",
      "scannerConflicts"
    ]), wl = W(() => Object.entries(l(D)).filter(([b, m]) => !Cs.has(b) && String(m || "").trim() !== "").map(([b, m]) => ({ key: b, value: m }))), Sl = W(() => Object.entries(D).filter(([b, m]) => !["q", "sort", "starred"].includes(b) && String(m || "").trim() !== "").map(([b, m]) => ({ key: b, value: m }))), xa = W(() => Object.entries(l(D)).filter(([b, m]) => String(m || "").trim() !== "").map(([b, m]) => ({ key: b, value: m }))), Cl = W(() => xa.value.filter(({ key: b, value: m }) => b !== "q" && !(b === "sort" && m === "title"))), ln = /* @__PURE__ */ Mt({}), Xi = W(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), Zi = W(() => d.homeShelves || []), xn = W(() => d.shelfTree || []), ar = W(() => d.needsAttention || { count: 0, url: `${ue.value}?needsMetadata=1` }), It = /* @__PURE__ */ Ie([]), Ji = W(() => new Set(It.value));
    function Ts(b, m) {
      const f = new Set(It.value);
      m ? f.add(Number(b)) : f.delete(Number(b)), It.value = [...f];
    }
    function Es(b) {
      It.value = b.currentTarget.checked ? h.value.map((m) => Number(m.id)) : [];
    }
    function As() {
      const b = new Set(h.value.map((m) => Number(m.id)));
      It.value = It.value.filter((m) => b.has(m));
    }
    function La(b) {
      const m = b.target;
      if (m instanceof HTMLFormElement) {
        m.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of It.value) {
          const B = document.createElement("input");
          B.type = "hidden", B.name = "itemIds[]", B.value = String(f), B.dataset.librarySelectedId = "1", m.appendChild(B);
        }
      }
    }
    const Te = /* @__PURE__ */ Ie(null), cn = /* @__PURE__ */ Ie(null), dt = /* @__PURE__ */ Mt({ loading: !1, error: "", missing: !1 }), Qt = /* @__PURE__ */ Ie("overview"), ft = /* @__PURE__ */ Mt({ saving: !1, saved: !1, error: "" }), _t = /* @__PURE__ */ Mt({ title: "", publicationDate: "", identifiers: [] }), Qi = /* @__PURE__ */ Ie(null), Kn = /* @__PURE__ */ Ie(null), Ln = /* @__PURE__ */ Ie(!1);
    let Ra = null, un = null, ea = null, rr = !1, Ci = null, sr = 0;
    const Rn = W(() => cn.value !== null), Ti = W(() => Te.value ? h.value.findIndex((b) => b.id === Te.value.id) : -1), Wn = W(() => Ti.value > 0 ? h.value[Ti.value - 1] : null), Ei = W(() => Ti.value >= 0 && Ti.value < h.value.length - 1 ? h.value[Ti.value + 1] : null), ee = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], w = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function R(b) {
      const m = String(b ?? "").trim(), f = m.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : m;
    }
    function q(b) {
      return { ...b, publicationDate: R(b?.publicationDate) };
    }
    function le(b) {
      _t.title = String(b?.title || ""), _t.publicationDate = R(b?.publicationDate), _t.identifiers = Array.isArray(b?.identifiers) ? b.identifiers.map((m) => ({ scheme: String(m?.scheme || ""), displayValue: String(m?.displayValue || m?.value || "") })) : [], Object.assign(ft, { saving: !1, saved: !1, error: "" });
    }
    function ve() {
      _t.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Ae(b) {
      _t.identifiers.splice(b, 1);
    }
    async function et() {
      const b = Te.value;
      if (!b?.updateUrl || ft.saving) return;
      Object.assign(ft, { saving: !0, saved: !1, error: "" });
      const m = new FormData();
      m.set("requesttoken", it.value), m.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const B = b[f];
        m.set(f, Array.isArray(B) ? B.join(", ") : String(B ?? ""));
      }
      m.set("title", _t.title), m.set("publicationDate", R(_t.publicationDate)), _t.identifiers.forEach((f, B) => {
        m.set(`identifiers[${B}][scheme]`, f.scheme), m.set(`identifiers[${B}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(b.updateUrl, { method: "POST", body: m, credentials: "same-origin", headers: { Accept: "application/json" } }), B = await f.json().catch(() => ({}));
        if (!f.ok || B.saved !== !0) throw new Error(B.error || y("library", "Metadata could not be saved."));
        b.title = _t.title.trim(), b.publicationDate = R(_t.publicationDate), b.identifiers = _t.identifiers.filter((Le) => Le.scheme.trim() || Le.displayValue.trim()).map((Le) => ({ ...Le }));
        const ce = h.value.find((Le) => Number(Le.id) === Number(b.id));
        ce && (ce.title = b.title, ce.publicationDate = b.publicationDate), ft.saved = !0;
      } catch (f) {
        ft.error = f?.message || y("library", "Metadata could not be saved.");
      } finally {
        ft.saving = !1;
      }
    }
    const Ke = W(() => {
      const b = r("scannerConflicts", D.scannerConflicts) || r("weakMetadata", D.weakMetadata), m = b ? h.value.find((f) => Ai(f).length > 0) : null;
      return {
        enabled: b,
        item: m,
        fields: m ? Ai(m) : [],
        reviewNextUrl: tr.value,
        skipUrl: Z.value.nextUrl || tr.value
      };
    }), Pt = W(() => i.map((b) => ({
      ...b,
      label: y("library", b.label),
      href: `${ue.value}?${encodeURIComponent(b.key)}=${encodeURIComponent(b.value)}`,
      active: String(D[b.key] || "") === b.value
    })));
    function wt(b) {
      return Array.isArray(b) ? JSON.stringify(b) : b == null ? "" : String(b);
    }
    function Ai(b) {
      const m = b.fieldValues || {}, f = b.fieldSources || {};
      return ee.filter((B) => Object.prototype.hasOwnProperty.call(m, B)).map((B) => {
        const ce = wt(b[B]), Le = wt(m[B]), ze = wt(f[B] || b.metadataSource || "scanner"), ht = ze.includes("filename") || ze.includes("path") ? Le : "", en = ze.includes("sidecar") ? Le : "";
        return { field: B, currentValue: ce, scannerCandidate: Le, pathTemplateCandidate: ht, sidecarValue: en, sourceProvenance: ze, differs: ce !== Le };
      }).filter((B) => B.differs);
    }
    let ot = 0, ta = null;
    function Ou() {
      const b = new URLSearchParams(window.location.search).getAll("item");
      if (b.length !== 1 || !/^[1-9][0-9]*$/.test(b[0])) return null;
      const m = Number(b[0]);
      return Number.isSafeInteger(m) && m <= YN ? m : null;
    }
    function Nu(b, m = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), b !== null && f.searchParams.set("item", String(b)), history[`${m}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function or(b, { historyMode: m = "push", seed: f = null } = {}) {
      ta?.abort();
      const B = ++ot, ce = new AbortController();
      ta = ce, cn.value = b, Qt.value = "overview", Te.value = f && Number(f.id) === b ? q(f) : null, Te.value && le(Te.value), Object.assign(dt, { loading: !0, error: "", missing: !1 }), m !== "none" && Nu(b, m);
      try {
        const Le = Qa.value.replace("__ITEM_ID__", encodeURIComponent(String(b))), ze = await fetch(Le, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ce.signal });
        if (B !== ot) return;
        if (!ze.ok) {
          Te.value = null, dt.missing = ze.status === 404, dt.error = ze.status === 404 ? y("library", "This publication is unavailable or you do not have access.") : y("library", "Could not load publication details. Try again.");
          return;
        }
        const ht = await ze.json();
        if (B !== ot) return;
        if (typeof ht?.item?.id != "number" || !Number.isSafeInteger(ht.item.id) || ht.item.id !== b) {
          Te.value = null, dt.missing = !1, dt.error = y("library", "Could not load publication details. Try again.");
          return;
        }
        Te.value = q(ht.item), le(Te.value), await an();
      } catch (Le) {
        B === ot && Le?.name !== "AbortError" && (Te.value = null, dt.missing = !1, dt.error = y("library", "Could not load publication details. Try again."));
      } finally {
        B === ot && (dt.loading = !1, ta = null);
      }
    }
    function In(b, m) {
      Tl(), Ra = m?.currentTarget instanceof HTMLElement ? m.currentTarget : null, or(Number(b.id), { seed: b });
    }
    function ks({ historyMode: b = "push", restoreFocus: m = !0 } = {}) {
      ea = m ? Ra : null, Ra = null, ta?.abort(), ta = null, ot += 1, cn.value = null, Te.value = null, Qt.value = "overview", Object.assign(dt, { loading: !1, error: "", missing: !1 }), b !== "none" && Nu(null, b);
    }
    function xu() {
      Ln.value ? (Kn.value?.$refs?.sidebar || Kn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Qi.value?.focus();
    }
    function av() {
      const b = ea;
      if (ea = null, Tl(), rr || !b?.isConnected) return;
      const m = sr;
      Ci = window.requestAnimationFrame(() => {
        Ci = null, !(m !== sr || rr || Rn.value || !b.isConnected) && b.focus();
      });
    }
    function Tl() {
      sr += 1, Ci !== null && (window.cancelAnimationFrame(Ci), Ci = null);
    }
    function lr(b = un) {
      Ln.value = !!b?.matches, Rn.value && an(xu);
    }
    function Os(b) {
      b && or(Number(b.id), { seed: b });
    }
    const cr = /* @__PURE__ */ Ie(null);
    let Sn = 0, Ia = null;
    const Cn = /* @__PURE__ */ Mt({ loading: !1, error: "" });
    function rv(b) {
      const m = s(new FormData(b));
      m.delete("publicationSearch"), m.delete("creatorSearch"), m.delete("publisherSearch"), m.delete("yearSearch");
      for (const f of Array.from(m.keys()))
        String(m.get(f) || "").trim() === "" && m.delete(f);
      return m.delete("page"), m.get("view") === "compact" && m.delete("view"), m;
    }
    async function El(b, m, f) {
      const B = new URLSearchParams();
      for (const [ze, ht] of Object.entries(D)) {
        const en = String(ht || "").trim();
        ze !== b && en !== "" && !(ze === "sort" && en === "title") && !(ze === "view" && en === "compact") && B.set(ze, en);
      }
      B.set(`${b}Search`, m);
      const ce = new AbortController();
      b === "creator" ? ut = ce : b === "publisher" ? he = ce : k = ce;
      const Le = b === "creator" ? Vt.value : b === "publisher" ? Ki.value : Wi.value;
      try {
        const ze = await fetch(`${Le}?${B}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ce.signal });
        if (!ze.ok) throw new Error(`${b} suggestions request failed: ${ze.status}`);
        const ht = await ze.json(), en = b === "creator" ? Et : b === "publisher" ? Se : L, ki = b === "creator" ? ge.value : b === "publisher" ? $.value : qe.value;
        f === en && ki.trim() === m && (b === "creator" ? Ee.value = Array.isArray(ht.creators) ? ht.creators : [] : b === "publisher" ? se.value = Array.isArray(ht.publishers) ? ht.publishers : [] : U.value = Array.isArray(ht.years) ? ht.years : []);
      } catch (ze) {
        ze?.name !== "AbortError" && (b === "creator" && f === Et && (Ee.value = null), b === "publisher" && f === Se && (se.value = null), b === "year" && f === L && (U.value = null));
      }
    }
    function sv(b, m) {
      return El("creator", b, m);
    }
    function ov(b, m) {
      return El("publisher", b, m);
    }
    function lv(b, m) {
      return El("year", b, m);
    }
    async function cv(b, m) {
      const f = new URLSearchParams();
      for (const [ce, Le] of Object.entries(D)) {
        const ze = String(Le || "").trim();
        ce !== "publication" && ze !== "" && !(ce === "sort" && ze === "title") && !(ce === "view" && ze === "compact") && f.set(ce, ze);
      }
      f.set("publicationSearch", b);
      const B = new AbortController();
      ae = B;
      try {
        const ce = await fetch(`${vt.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: B.signal
        });
        if (!ce.ok) throw new Error(`Publication suggestions request failed: ${ce.status}`);
        const Le = await ce.json();
        m === P && J.value.trim() === b && (re.value = Array.isArray(Le.publications) ? Le.publications : []);
      } catch (ce) {
        ce?.name !== "AbortError" && m === P && (re.value = null);
      } finally {
        m === P && (ae = null);
      }
    }
    function uv(b) {
      u.splice(0, u.length, ...(b.items || []).map((m) => ({ ...m }))), As();
      for (const m of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "publisherSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(b, m) && (d[m] = b[m]);
      Object.assign(D, x, b.activeFilters || {});
    }
    async function dn(b, m = null) {
      const f = b?.currentTarget?.tagName === "FORM" ? b.currentTarget : b?.currentTarget?.form;
      if (!f && !m?.params) return;
      const B = s(m?.params ?? rv(f));
      if (Re.value || Ye.value) {
        ur(B, ue.value);
        return;
      }
      const ce = B.toString(), Le = ce ? `?${ce}` : "", ze = m?.generation ?? ++Sn, ht = o(B), en = m?.historyMode ?? (ht ? "push" : "replace"), ki = m?.historyTraversal === !0;
      if (ze !== Sn) return;
      m === null && Ia?.abort();
      const Pa = new AbortController();
      Ia = Pa, Cn.loading = !0, Cn.error = "";
      try {
        const Pn = await fetch(Yt.value + Le, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Pa.signal
        });
        if (ze !== Sn) return;
        if (!Pn.ok) {
          ki ? ur(B) : ht ? Cn.error = y("library", "Could not load this review queue. Try again.") : ur(B);
          return;
        }
        const Lv = await Pn.json();
        if (ze !== Sn) return;
        uv(Lv), en !== "none" && (history[en === "push" ? "pushState" : "replaceState"]({}, "", ce ? `?${ce}` : window.location.pathname), Rn.value && ks({ historyMode: "none" }));
      } catch (Pn) {
        ze === Sn && Pn?.name !== "AbortError" && (ki ? ur(B) : ht ? Cn.error = y("library", "Could not load this review queue. Try again.") : ur(B));
      } finally {
        ze === Sn && (Ia = null, Cn.loading = !1);
      }
    }
    function Lu() {
      Ia?.abort();
      const b = new URLSearchParams(window.location.search), m = Ou();
      b.has("item") && m === null && (b.delete("item"), history.replaceState({}, "", `${window.location.pathname}${b.toString() ? `?${b}` : ""}${window.location.hash}`)), m === null ? ks({ historyMode: "none" }) : or(m, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === m) || null }), b.delete("item"), dn(null, {
        params: s(b),
        generation: ++Sn,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function ur(b, m = window.location.pathname) {
      const f = document.createElement("form");
      f.method = "get", f.action = m, f.hidden = !0;
      for (const [B, ce] of b.entries()) {
        const Le = document.createElement("input");
        Le.type = "hidden", Le.name = B, Le.value = ce, f.appendChild(Le);
      }
      document.body.appendChild(f), f.submit(), f.remove();
    }
    function qn(b, m = null, f = null) {
      if (m === null) {
        dn(b);
        return;
      }
      dn({ currentTarget: b }, { params: m, generation: f });
    }
    async function dv(b, m = J.value) {
      D.publication = String(m || "").trim(), J.value = D.publication, X.value = !1, await an(), dn({ currentTarget: b });
    }
    function fv(b, m) {
      dv(m.currentTarget.form, b);
    }
    async function hv(b) {
      D.q = String(fe.value || "").trim(), D.publication = String(J.value || "").trim(), D.publisher = String($.value || "").trim(), D.creator = String(ge.value || "").trim(), D.year = String(qe.value || "").trim(), X.value = !1, Y.value = !1, He.value = !1, Rt.value = !1, await an(), dn({ currentTarget: b });
    }
    async function Al(b, m, f) {
      D[m] = String(f || "").trim(), m === "creator" ? (ge.value = D.creator, He.value = !1) : m === "publisher" ? ($.value = D.publisher, Y.value = !1) : (qe.value = D.year, Rt.value = !1), await an(), dn({ currentTarget: b });
    }
    function pv(b) {
      hv(b.currentTarget);
    }
    function vv(b, m) {
      Al(m.currentTarget.form, "creator", b);
    }
    function gv(b, m) {
      Al(m.currentTarget.form, "publisher", b);
    }
    function mv(b, m) {
      Al(m.currentTarget.form, "year", b);
    }
    function Ru(b) {
      const m = new URLSearchParams();
      for (const [f, B] of Object.entries(D)) {
        const ce = String(B || "").trim();
        ce !== "" && f !== b && !(f === "sort" && ce === "title") && !(f === "view" && ce === "compact") && m.set(f, ce);
      }
      return m;
    }
    function Iu(b) {
      const m = Ru(b).toString();
      return Re.value || Ye.value ? `${ue.value}${m ? `?${m}` : ""}` : m ? `?${m}` : "?";
    }
    function bv(b) {
      const m = Ru(b);
      D[b] = b === "sort" ? "title" : b === "view" ? "compact" : "", dn(null, {
        params: m,
        generation: ++Sn
      });
    }
    function yv(b) {
      const m = new URL(b.href, window.location.origin).searchParams;
      dn(null, {
        params: m,
        generation: ++Sn
      });
    }
    function _v() {
      return Iu("q");
    }
    const Pu = W(() => d.smartViewCounts || {}), Du = W(() => {
      const b = {};
      for (const [m, f] of Object.entries(D)) {
        const B = String(f || "").trim();
        B !== "" && !(m === "sort" && B === "title") && (b[m] = B);
      }
      return b;
    }), wv = W(() => JSON.stringify(Du.value)), kl = W(() => Object.keys(Du.value).length > 0);
    function Ns(b) {
      if (!Ss.includes(b)) return;
      D.view = b;
      const m = new URLSearchParams();
      for (const [f, B] of Object.entries(l(D))) {
        const ce = String(B || "").trim();
        ce !== "" && !(f === "sort" && ce === "title") && !(f === "view" && ce === "compact") && m.set(f, ce);
      }
      m.delete("page"), dn(null, {
        params: m,
        generation: ++Sn
      });
    }
    function Sv(b) {
      const m = s(window.location.search);
      for (const B of Object.keys(Na))
        m.delete(B);
      m.delete("page");
      for (const [B, ce] of Object.entries(b))
        String(ce || "").trim() !== "" && m.set(B, String(ce));
      const f = m.toString();
      return f ? `?${f}` : "?";
    }
    function Cv(b) {
      return Sv(b || {});
    }
    function Tv(b) {
      return Si.value.replace("__COLLECTION_ID__", encodeURIComponent(String(b || "0")));
    }
    function dr(b) {
      return String(b || "").toUpperCase();
    }
    function fr(b) {
      return ln[b.id] || "loading";
    }
    function Ev(b) {
      ln[b.id] = "loaded";
    }
    function Av(b) {
      ln[b.id] = "error";
    }
    function Ol(b) {
      const m = String(b?.publication || "").trim(), f = String(b?.publicationDate || "").trim();
      return m && f ? `${m} · ${f}` : m || f ? m || f : [b?.publicationType, dr(b?.extension)].filter(Boolean).join(" · ");
    }
    function kv(b) {
      const m = String(b?.tagName || "").toLowerCase();
      return b?.isContentEditable || ["input", "select", "textarea", "button"].includes(m);
    }
    function Ov(b) {
      b.key !== "/" || b.metaKey || b.ctrlKey || b.altKey || b.shiftKey || kv(b.target) || (b.preventDefault(), cr.value?.focus(), cr.value?.select?.());
    }
    async function Nv(b) {
      b.key !== "Escape" || document.activeElement !== cr.value || D.q === "" || (b.preventDefault(), fe.value = "", D.q = "", await an(), qn({ currentTarget: cr.value }));
    }
    function xv(b) {
      if (!Rn.value || b.metaKey || b.ctrlKey || b.altKey)
        return !1;
      if (b.key === "Escape")
        return b.preventDefault(), ks(), !0;
      if (b.key === "Tab" && Ln.value) {
        if (Kn.value?.focusTrap) return !1;
        const m = Kn.value?.$refs?.sidebar || Kn.value?.$el || Kn.value, f = [...m?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Le) => !Le.hidden && Le.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const B = f[0], ce = f[f.length - 1];
        if (b.shiftKey && (document.activeElement === B || !m.contains(document.activeElement)))
          return b.preventDefault(), ce.focus(), !0;
        if (!b.shiftKey && (document.activeElement === ce || !m.contains(document.activeElement)))
          return b.preventDefault(), B.focus(), !0;
      }
      return b.key === "ArrowLeft" && Wn.value ? (b.preventDefault(), Os(Wn.value), !0) : b.key === "ArrowRight" && Ei.value ? (b.preventDefault(), Os(Ei.value), !0) : !1;
    }
    function $u(b) {
      xv(b) || (Ov(b), Nv(b));
    }
    ji(() => {
      window.addEventListener("keydown", $u), window.addEventListener("popstate", Lu), un = window.matchMedia?.("(max-width: 1023px)") || null, lr(), un?.addEventListener ? un.addEventListener("change", lr) : un?.addListener?.(lr);
      const b = new URLSearchParams(window.location.search), m = Ou();
      b.has("item") && m === null ? (b.delete("item"), history.replaceState({}, "", `${window.location.pathname}${b.toString() ? `?${b}` : ""}${window.location.hash}`)) : m !== null && or(m, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === m) || null });
    }), Ja(() => {
      rr = !0, Tl(), window.removeEventListener("keydown", $u), window.removeEventListener("popstate", Lu), window.clearTimeout(te), window.clearTimeout(ct), window.clearTimeout(pe), window.clearTimeout(C), ae?.abort(), ut?.abort(), he?.abort(), k?.abort(), Sn += 1, Ia?.abort(), Ia = null, ot += 1, ta?.abort(), ta = null, un?.removeEventListener ? un.removeEventListener("change", lr) : un?.removeListener?.(lr), un = null, ea = null;
    });
    const hr = /* @__PURE__ */ Mt({}), pr = /* @__PURE__ */ Mt({});
    async function Mu(b, m) {
      const f = m?.currentTarget?.closest?.("form") || m?.currentTarget;
      if (!f || !b?.starUrl || hr[b.id]) return;
      const B = !!b.starred;
      hr[b.id] = !0, pr[b.id] = "", b.starred = !B;
      try {
        (await fetch(b.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (b.starred = B, pr[b.id] = y("library", "Could not update star. Try again."));
      } catch {
        b.starred = B, pr[b.id] = y("library", "Could not update star. Try again.");
      } finally {
        hr[b.id] = !1;
      }
    }
    return (b, m) => (_(), Me(g(SC), { "app-name": "library" }, {
      default: ke(() => [
        ye(g(i1), {
          "aria-label": g(y)("library", "Library navigation")
        }, {
          list: ke(() => [
            ye(g(Cp), null, {
              default: ke(() => [
                (_(!0), T(de, null, Fe(At.value, (f) => (_(), Me(g(Ef), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                ye(g(Ef), {
                  active: Oe.value,
                  href: Ce.value,
                  name: $e.value > 0 ? `${g(y)("library", "Review")} (${$e.value})` : g(y)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: ke(() => [
            c("section", DC, [
              c("h2", $C, p(g(y)("library", "Filters")), 1),
              c("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(y)("library", "Catalogue search and filters"),
                onSubmit: Ve(pv, ["prevent"])
              }, [
                (_(!0), T(de, null, Fe(wl.value, (f) => (_(), T("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, FC))), 128)),
                D.sort && D.sort !== "title" ? (_(), T("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: D.sort
                }, null, 8, zC)) : H("", !0),
                D.view && D.view !== "compact" ? (_(), T("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: D.view
                }, null, 8, UC)) : H("", !0),
                c("label", {
                  class: "library-quick-filter-search",
                  title: g(y)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  c("span", null, [
                    Ne(p(g(y)("library", "Search")) + " ", 1),
                    m[45] || (m[45] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  Xe(c("input", {
                    ref_key: "quickSearchInput",
                    ref: cr,
                    "onUpdate:modelValue": m[0] || (m[0] = (f) => fe.value = f),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: g(y)("library", "Title, creator, description, filename or folder")
                  }, null, 8, HC), [
                    [pn, fe.value]
                  ])
                ], 8, BC),
                c("label", null, [
                  Ne(p(g(y)("library", "Type")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": m[1] || (m[1] = (f) => D.type = f),
                    name: "type",
                    onChange: m[2] || (m[2] = (f) => qn(f))
                  }, [
                    c("option", jC, p(g(y)("library", "All types")), 1),
                    (_(!0), T(de, null, Fe(N.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, VC))), 128))
                  ], 544), [
                    [Zn, D.type]
                  ])
                ]),
                c("div", GC, [
                  c("label", KC, p(g(y)("library", "Publisher")), 1),
                  Xe(c("input", {
                    id: "library-publisher-search",
                    "onUpdate:modelValue": m[3] || (m[3] = (f) => $.value = f),
                    type: "search",
                    name: "publisherSearch",
                    autocomplete: "off",
                    placeholder: g(y)("library", "Search publishers"),
                    title: g(y)("library", "Exact publisher matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publisher-suggestions",
                    "aria-expanded": Y.value && ie.value.length > 0 ? "true" : "false",
                    onFocus: m[4] || (m[4] = (f) => Y.value = !0),
                    onKeydown: m[5] || (m[5] = St((f) => Y.value = !1, ["escape"]))
                  }, null, 40, WC), [
                    [pn, $.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publisher",
                    value: D.publisher
                  }, null, 8, qC),
                  Y.value && ie.value.length > 0 ? (_(), T("ul", YC, [
                    (_(!0), T(de, null, Fe(ie.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: m[6] || (m[6] = Ve(() => {
                        }, ["prevent"])),
                        onClick: (B) => gv(f, B)
                      }, p(f), 41, XC)
                    ]))), 128))
                  ])) : H("", !0),
                  c("button", ZC, p(g(y)("library", "Apply publisher")), 1)
                ]),
                c("div", JC, [
                  c("label", QC, p(g(y)("library", "Series / periodical")), 1),
                  Xe(c("input", {
                    id: "library-publication-search",
                    "onUpdate:modelValue": m[7] || (m[7] = (f) => J.value = f),
                    type: "search",
                    name: "publicationSearch",
                    autocomplete: "off",
                    placeholder: g(y)("library", "Search series and periodicals"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publication-suggestions",
                    "aria-expanded": X.value && be.value.length > 0 ? "true" : "false",
                    onFocus: m[8] || (m[8] = (f) => X.value = !0),
                    onKeydown: m[9] || (m[9] = St((f) => X.value = !1, ["escape"]))
                  }, null, 40, eT), [
                    [pn, J.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publication",
                    value: D.publication
                  }, null, 8, tT),
                  X.value && be.value.length > 0 ? (_(), T("ul", nT, [
                    (_(!0), T(de, null, Fe(be.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: m[10] || (m[10] = Ve(() => {
                        }, ["prevent"])),
                        onClick: (B) => fv(f, B)
                      }, p(f), 41, iT)
                    ]))), 128))
                  ])) : H("", !0),
                  c("button", aT, p(g(y)("library", "Apply series")), 1)
                ]),
                c("div", rT, [
                  c("label", sT, p(g(y)("library", "Publication year")), 1),
                  Xe(c("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": m[11] || (m[11] = (f) => qe.value = f),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: g(y)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": Rt.value && v.value.length > 0 ? "true" : "false",
                    onFocus: m[12] || (m[12] = (f) => Rt.value = !0),
                    onKeydown: m[13] || (m[13] = St((f) => Rt.value = !1, ["escape"]))
                  }, null, 40, oT), [
                    [pn, qe.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "year",
                    value: D.year
                  }, null, 8, lT),
                  Rt.value && v.value.length > 0 ? (_(), T("ul", cT, [
                    (_(!0), T(de, null, Fe(v.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: m[14] || (m[14] = Ve(() => {
                        }, ["prevent"])),
                        onClick: (B) => mv(f, B)
                      }, p(f), 41, uT)
                    ]))), 128))
                  ])) : H("", !0),
                  c("button", dT, p(g(y)("library", "Apply year")), 1)
                ]),
                c("div", fT, [
                  c("label", hT, p(g(y)("library", "Creator")), 1),
                  Xe(c("input", {
                    id: "library-creator-search",
                    "onUpdate:modelValue": m[15] || (m[15] = (f) => ge.value = f),
                    type: "search",
                    name: "creatorSearch",
                    autocomplete: "off",
                    placeholder: g(y)("library", "Search creators"),
                    title: g(y)("library", "Exact full-field creator matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-creator-suggestions",
                    "aria-expanded": He.value && at.value.length > 0 ? "true" : "false",
                    onFocus: m[16] || (m[16] = (f) => He.value = !0),
                    onKeydown: m[17] || (m[17] = St((f) => He.value = !1, ["escape"]))
                  }, null, 40, pT), [
                    [pn, ge.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "creator",
                    value: D.creator
                  }, null, 8, vT),
                  He.value && at.value.length > 0 ? (_(), T("ul", gT, [
                    (_(!0), T(de, null, Fe(at.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: m[18] || (m[18] = Ve(() => {
                        }, ["prevent"])),
                        onClick: (B) => vv(f, B)
                      }, p(f), 41, mT)
                    ]))), 128))
                  ])) : H("", !0),
                  c("button", bT, p(g(y)("library", "Apply creator")), 1)
                ]),
                c("label", null, [
                  Ne(p(g(y)("library", "Nextcloud tag")), 1),
                  Xe(c("input", {
                    "onUpdate:modelValue": m[19] || (m[19] = (f) => D.tag = f),
                    type: "text",
                    name: "tag",
                    placeholder: g(y)("library", "photography")
                  }, null, 8, yT), [
                    [pn, D.tag]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(y)("library", "Format")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": m[20] || (m[20] = (f) => D.format = f),
                    name: "format",
                    onChange: m[21] || (m[21] = (f) => qn(f))
                  }, [
                    c("option", _T, p(g(y)("library", "All formats")), 1),
                    (_(!0), T(de, null, Fe(E.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(dr(f)), 9, wT))), 128))
                  ], 544), [
                    [Zn, D.format]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(y)("library", "Shelf")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": m[22] || (m[22] = (f) => D.shelf = f),
                    name: "shelf",
                    onChange: m[23] || (m[23] = (f) => qn(f))
                  }, [
                    c("option", ST, p(g(y)("library", "All shelves")), 1),
                    (_(!0), T(de, null, Fe(S.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, CT))), 128))
                  ], 544), [
                    [Zn, D.shelf]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(y)("library", "Scan status")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": m[24] || (m[24] = (f) => D.status = f),
                    name: "status",
                    onChange: m[25] || (m[25] = (f) => qn(f))
                  }, [
                    c("option", TT, p(g(y)("library", "All scan statuses")), 1),
                    (_(!0), T(de, null, Fe(I.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, ET))), 128))
                  ], 544), [
                    [Zn, D.status]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(y)("library", "Workflow status")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": m[26] || (m[26] = (f) => D.workflowStatus = f),
                    name: "workflowStatus",
                    onChange: m[27] || (m[27] = (f) => qn(f))
                  }, [
                    c("option", AT, p(g(y)("library", "All workflow statuses")), 1),
                    (_(!0), T(de, null, Fe(M.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, kT))), 128))
                  ], 544), [
                    [Zn, D.workflowStatus]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(y)("library", "Subject")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": m[28] || (m[28] = (f) => D.subject = f),
                    name: "subject",
                    onChange: m[29] || (m[29] = (f) => qn(f))
                  }, [
                    c("option", OT, p(g(y)("library", "All subjects")), 1),
                    (_(!0), T(de, null, Fe(K.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, NT))), 128))
                  ], 544), [
                    [Zn, D.subject]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(y)("library", "Classification")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": m[30] || (m[30] = (f) => D.classification = f),
                    name: "classification",
                    onChange: m[31] || (m[31] = (f) => qn(f))
                  }, [
                    c("option", xT, p(g(y)("library", "All classifications")), 1),
                    (_(!0), T(de, null, Fe(F.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, LT))), 128))
                  ], 544), [
                    [Zn, D.classification]
                  ])
                ]),
                c("label", null, [
                  Ne(p(g(y)("library", "Suggested updates")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": m[32] || (m[32] = (f) => D.scannerConflicts = f),
                    name: "scannerConflicts",
                    onChange: m[33] || (m[33] = (f) => qn(f))
                  }, [
                    c("option", RT, p(g(y)("library", "All metadata")), 1),
                    c("option", IT, p(g(y)("library", "Suggested updates")), 1)
                  ], 544), [
                    [Zn, D.scannerConflicts]
                  ])
                ]),
                c("button", PT, p(g(y)("library", "Apply filters")), 1),
                c("a", DT, p(g(y)("library", "Clear")), 1)
              ], 40, MC)
            ]),
            c("a", {
              class: "library-navigation-settings-link",
              href: j.value
            }, [
              m[46] || (m[46] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(y)("library", "Settings")), 1)
            ], 8, $T)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ye(g(y_), null, {
          default: ke(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: d.language || "en",
              dir: d.direction || "ltr",
              tabindex: "-1"
            }, [
              Yi.value.length > 0 ? (_(), T("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(y)("library", "Active filters")
              }, [
                c("span", null, p(g(y)("library", "Active filters")), 1),
                (_(!0), T(de, null, Fe(Yi.value, (f) => (_(), T("a", {
                  key: f.key,
                  href: Iu(f.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(y)("library", "Remove filter")}: ${f.label}`,
                  onClick: Ve((B) => bv(f.key), ["prevent"])
                }, [
                  c("strong", null, p(f.label) + ":", 1),
                  Ne(" " + p(f.value) + " ", 1),
                  m[47] || (m[47] = c("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, zT))), 128))
              ], 8, FT)) : H("", !0),
              Oe.value ? (_(), T("section", UT, [
                c("header", BT, [
                  c("p", HT, p(g(y)("library", "Metadata cleanup")), 1),
                  c("h2", jT, p(g(y)("library", "Review")), 1),
                  c("p", null, p(g(y)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(y)("library", "Review queues")
                }, [
                  (_(!0), T(de, null, Fe(Pt.value, (f) => (_(), T("a", {
                    key: f.key,
                    class: we(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0,
                    onClick: Ve((B) => yv(f), ["prevent"])
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(Number(Pu.value[f.countKey] || 0)), 1)
                  ], 10, GT))), 128))
                ], 8, VT),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(y)("library", "Filter current review queue"),
                  onSubmit: Ve(dn, ["prevent"])
                }, [
                  (_(!0), T(de, null, Fe(Cl.value, (f) => (_(), T("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, WT))), 128)),
                  c("label", null, [
                    Ne(p(g(y)("library", "Search within this queue")), 1),
                    Xe(c("input", {
                      "onUpdate:modelValue": m[34] || (m[34] = (f) => D.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [pn, D.q]
                    ])
                  ]),
                  c("button", qT, p(g(y)("library", "Apply")), 1)
                ], 40, KT),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Cn.loading ? "true" : "false"
                }, [
                  Cn.loading ? (_(), T("span", XT, p(g(y)("library", "Loading review queue…")), 1)) : H("", !0)
                ], 8, YT),
                Cn.error ? (_(), T("p", ZT, p(Cn.error), 1)) : H("", !0),
                Ke.value.enabled ? (_(), T("section", JT, [
                  c("div", QT, [
                    c("p", eE, p(g(y)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(y)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(y)("library", "Review next suggestion")), 9, tE)
                  ]),
                  Ke.value.item ? (_(), T("article", nE, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", iE, p(Ke.value.item.title), 1)
                      ]),
                      c("span", aE, [
                        c("bdi", rE, p(Ke.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", sE, [
                      (_(!0), T(de, null, Fe(Ke.value.fields, (f) => (_(), T("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", oE, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(y)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", lE, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(y)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", cE, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(y)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", uE, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(y)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", dE, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(y)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", fE, p(f.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: Ke.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: it.value
                          }, null, 8, pE),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, vE),
                          m[48] || (m[48] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", gE, p(g(y)("library", "Use suggested value")), 1)
                        ], 8, hE)
                      ]))), 128))
                    ]),
                    c("footer", mE, [
                      c("a", {
                        class: "button secondary",
                        href: Ke.value.item.detailsUrl
                      }, p(g(y)("library", "Maintenance")), 9, bE),
                      c("a", {
                        class: "button secondary",
                        href: Ke.value.skipUrl
                      }, p(g(y)("library", "Skip to next suggestion")), 9, yE)
                    ])
                  ])) : H("", !0)
                ])) : H("", !0),
                h.value.length === 0 && !Cn.loading && !Cn.error ? (_(), T("div", _E, [
                  c("h3", null, p(g(y)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(y)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: ue.value
                  }, p(g(y)("library", "Back to Library")), 9, wE)
                ])) : (_(), T("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(y)("library", "Review results")
                }, [
                  (_(!0), T(de, null, Fe(h.value, (f) => (_(), T("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (B) => In(f, B)
                        }, [
                          c("bdi", TE, p(f.title), 1)
                        ], 8, CE)
                      ]),
                      f.creators ? (_(), T("p", EE, [
                        c("bdi", AE, p(f.creators), 1)
                      ])) : H("", !0),
                      f.scanError ? (_(), T("p", kE, [
                        c("bdi", OE, p(f.scanError), 1)
                      ])) : H("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => In(f, B)
                      }, p(g(y)("library", "Details")), 9, NE),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(y)("library", "Open")), 9, xE)
                    ])
                  ]))), 128))
                ], 8, SE)),
                h.value.length > 0 ? (_(), T("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(y)("library", "Review pagination")
                }, [
                  Z.value.previousUrl ? (_(), T("a", {
                    key: 0,
                    href: Z.value.previousUrl
                  }, p(g(y)("library", "Previous")), 9, RE)) : (_(), T("span", IE, p(g(y)("library", "Previous")), 1)),
                  c("span", null, [
                    Ne(p(g(y)("library", "Page")) + " " + p(Z.value.page), 1),
                    Z.value.total > 0 ? (_(), T("span", PE, " · " + p(Z.value.from) + "–" + p(Z.value.to), 1)) : H("", !0)
                  ]),
                  Z.value.nextUrl ? (_(), T("a", {
                    key: 2,
                    href: Z.value.nextUrl
                  }, p(g(y)("library", "Next")), 9, DE)) : (_(), T("span", $E, p(g(y)("library", "Next")), 1))
                ], 8, LE)) : H("", !0)
              ])) : Re.value ? (_(), T("main", ME, [
                c("header", FE, [
                  c("p", zE, p(g(y)("library", "Your library")), 1),
                  c("h2", UE, p(g(y)("library", "Home")), 1)
                ]),
                c("section", BE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", HE, p(g(y)("library", "Continue reading")), 1),
                      c("p", jE, p(g(y)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${ue.value}?sort=lastOpened`
                    }, p(g(y)("library", "View all")), 9, VE)
                  ]),
                  Xi.value.continueReading.length ? (_(), T("div", GE, [
                    (_(!0), T(de, null, Fe(Xi.value.continueReading, (f) => (_(), T("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => In(f, B)
                      }, [
                        c("span", WE, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, qE)
                        ])
                      ], 8, KE),
                      c("div", YE, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => In(f, B)
                          }, [
                            c("bdi", ZE, p(f.title), 1)
                          ], 8, XE)
                        ]),
                        f.creators ? (_(), T("p", JE, [
                          c("bdi", QE, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(y)("library", "Open")), 9, eA)
                      ])
                    ]))), 128))
                  ])) : (_(), T("p", tA, p(g(y)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", nA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", iA, p(g(y)("library", "Recently added")), 1),
                      c("p", aA, p(g(y)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${ue.value}?sort=recent`
                    }, p(g(y)("library", "View all")), 9, rA)
                  ]),
                  Xi.value.recentlyAdded.length ? (_(), T("div", sA, [
                    (_(!0), T(de, null, Fe(Xi.value.recentlyAdded, (f) => (_(), T("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (B) => In(f, B)
                      }, [
                        c("span", lA, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, cA)
                        ])
                      ], 8, oA),
                      c("div", uA, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => In(f, B)
                          }, [
                            c("bdi", fA, p(f.title), 1)
                          ], 8, dA)
                        ]),
                        f.creators ? (_(), T("p", hA, [
                          c("bdi", pA, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(y)("library", "Open")), 9, vA)
                      ])
                    ]))), 128))
                  ])) : (_(), T("p", gA, p(g(y)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", mA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", bA, p(g(y)("library", "Shelves")), 1),
                      c("p", yA, p(g(y)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: me.value }, p(g(y)("library", "View all")), 9, _A)
                  ]),
                  Zi.value.length ? (_(), T("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(y)("library", "Shelves")
                  }, [
                    (_(!0), T(de, null, Fe(Zi.value, (f) => (_(), T("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", CA, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, SA))), 128))
                  ], 8, wA)) : (_(), T("p", TA, p(g(y)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(ar.value.count || 0) > 0 ? (_(), T("aside", EA, [
                  c("div", null, [
                    c("h3", AA, p(g(y)("library", "Needs attention")), 1),
                    c("p", kA, p(g(Mn)("library", "%n publication needs better details.", "%n publications need better details.", Number(ar.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: ar.value.url
                  }, p(g(y)("library", "Review")), 9, OA)
                ])) : H("", !0)
              ])) : Ye.value ? (_(), T("main", NA, [
                c("header", xA, [
                  c("p", LA, p(g(y)("library", "Your library")), 1),
                  c("h2", RA, p(g(y)("library", "Shelves")), 1),
                  c("p", IA, p(g(y)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                xn.value.length ? (_(), T("nav", {
                  key: 0,
                  "aria-label": g(y)("library", "Shelves")
                }, [
                  c("ul", DA, [
                    (_(!0), T(de, null, Fe(xn.value, (f) => (_(), Me(PC, {
                      key: f.id,
                      node: f,
                      "children-url": Gn.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, PA)) : (_(), T("section", $A, [
                  c("h3", null, p(g(y)("library", "Shelves")), 1),
                  c("p", MA, p(g(y)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", FA, [
                    c("a", {
                      class: "button primary",
                      href: j.value
                    }, p(g(y)("library", "Add a Library root")), 9, zA),
                    c("a", {
                      class: "button secondary",
                      href: ue.value
                    }, p(g(y)("library", "All publications")), 9, UA)
                  ])
                ]))
              ])) : (_(), T("section", BA, [
                c("header", HA, [
                  yi.value ? (_(), T("p", jA, p(Aa.value), 1)) : H("", !0),
                  c("h2", VA, p(_i.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(y)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(y)("library", "Catalogue toolbar"),
                    onSubmit: Ve(dn, ["prevent"])
                  }, [
                    (_(!0), T(de, null, Fe(Sl.value, (f) => (_(), T("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, WA))), 128)),
                    c("label", qA, [
                      Ne(p(g(y)("library", "Sort")), 1),
                      Xe(c("select", {
                        "onUpdate:modelValue": m[35] || (m[35] = (f) => D.sort = f),
                        name: "sort",
                        onChange: dn
                      }, [
                        c("option", YA, p(g(y)("library", "Title")), 1),
                        c("option", XA, p(g(y)("library", "Date added")), 1),
                        c("option", ZA, p(g(y)("library", "Publication date")), 1),
                        c("option", JA, p(g(y)("library", "Series")), 1),
                        c("option", QA, p(g(y)("library", "Recently opened")), 1),
                        c("option", e2, p(g(y)("library", "Format")), 1)
                      ], 544), [
                        [Zn, D.sort]
                      ])
                    ]),
                    c("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": g(y)("library", "View")
                    }, [
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: we({ active: Gt.value === "compact" }),
                        "aria-pressed": Gt.value === "compact" ? "true" : "false",
                        onClick: m[36] || (m[36] = (f) => Ns("compact"))
                      }, p(g(y)("library", "Compact")), 11, n2),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: we({ active: Gt.value === "gallery" }),
                        "aria-pressed": Gt.value === "gallery" ? "true" : "false",
                        onClick: m[37] || (m[37] = (f) => Ns("gallery"))
                      }, p(g(y)("library", "Gallery")), 11, i2),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: we({ active: Gt.value === "list" }),
                        "aria-pressed": Gt.value === "list" ? "true" : "false",
                        onClick: m[38] || (m[38] = (f) => Ns("list"))
                      }, p(g(y)("library", "List")), 11, a2),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: we({ active: Gt.value === "shelf" }),
                        "aria-pressed": Gt.value === "shelf" ? "true" : "false",
                        onClick: m[39] || (m[39] = (f) => Ns("shelf"))
                      }, p(g(y)("library", "Shelf")), 11, r2)
                    ], 8, t2)
                  ], 40, KA),
                  c("section", s2, [
                    c("h3", {
                      title: g(y)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(y)("library", "Collections")), 9, o2),
                    c("form", {
                      method: "post",
                      action: st.value,
                      class: "library-saved-collection-save-form",
                      title: kl.value ? "" : g(y)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: it.value
                      }, null, 8, c2),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: wv.value
                      }, null, 8, u2),
                      c("label", null, [
                        Ne(p(g(y)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(y)("library", "e.g. Bremen photo books"),
                          disabled: !kl.value,
                          autocomplete: "off"
                        }, null, 8, d2)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !kl.value,
                        title: g(y)("library", "Save current view")
                      }, p(g(y)("library", "Save")), 9, f2)
                    ], 8, l2),
                    ws.value.length > 0 ? (_(), T("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(y)("library", "Saved custom collections")
                    }, [
                      (_(!0), T(de, null, Fe(ws.value, (f) => (_(), T("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: Cv(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, p2),
                        c("form", {
                          method: "post",
                          action: Tv(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: it.value
                          }, null, 8, g2),
                          c("button", m2, p(g(y)("library", "Delete")), 1)
                        ], 8, v2)
                      ]))), 128))
                    ], 8, h2)) : H("", !0)
                  ]),
                  It.value.length > 0 ? (_(), T("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(y)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", y2, [
                      m[49] || (m[49] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(y)("library", "Batch actions for selected publications")
                      }, p(g(y)("library", "Batch actions")), 9, _2),
                      c("small", w2, p(g(y)("library", "Batch actions for selected publications")), 1),
                      c("b", S2, p(g(Mn)("library", "%n publication selected", "%n publications selected", It.value.length)), 1)
                    ]),
                    c("p", C2, p(g(Mn)("library", "%n publication selected", "%n publications selected", It.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: La
                    }, [
                      c("form", {
                        method: "post",
                        action: er.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: it.value
                        }, null, 8, E2),
                        c("label", null, [
                          c("span", null, p(g(y)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(y)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, A2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(y)("library", "Applies only to the selected publications.")
                        }, p(g(y)("library", "Apply")), 9, k2)
                      ], 8, T2),
                      c("form", {
                        method: "post",
                        action: gi.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: it.value
                        }, null, 8, N2),
                        c("label", null, [
                          c("span", null, p(g(y)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(y)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, x2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(y)("library", "Removes the tag only from the selected publications.")
                        }, p(g(y)("library", "Remove")), 9, L2)
                      ], 8, O2),
                      c("form", {
                        method: "post",
                        action: mi.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: it.value
                        }, null, 8, I2),
                        (_(!0), T(de, null, Fe(xa.value, (f) => (_(), T("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, P2))), 128)),
                        m[50] || (m[50] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(y)("library", "Batch actions for selected publications")
                        }, p(g(y)("library", "Reset metadata")), 9, D2)
                      ], 8, R2),
                      c("form", {
                        method: "post",
                        action: ms.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: it.value
                        }, null, 8, M2),
                        (_(!0), T(de, null, Fe(xa.value, (f) => (_(), T("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, F2))), 128)),
                        c("label", null, [
                          c("span", null, p(g(y)("library", "Field")), 1),
                          c("select", z2, [
                            c("option", U2, p(g(y)("library", "Publication type")), 1),
                            c("option", B2, p(g(y)("library", "Subtitle")), 1),
                            c("option", H2, p(g(y)("library", "Creators")), 1),
                            c("option", j2, p(g(y)("library", "Series / periodical")), 1),
                            c("option", V2, p(g(y)("library", "Publication date")), 1),
                            c("option", G2, p(g(y)("library", "Language")), 1),
                            c("option", K2, p(g(y)("library", "Publisher")), 1),
                            c("option", W2, p(g(y)("library", "Subjects")), 1),
                            c("option", q2, p(g(y)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(y)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(y)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, Y2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(y)("library", "Preview first, then apply from the review page.")
                        }, p(g(y)("library", "Preview edit")), 9, X2)
                      ], 8, $2),
                      c("form", {
                        method: "post",
                        action: bs.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: it.value
                        }, null, 8, J2),
                        (_(!0), T(de, null, Fe(xa.value, (f) => (_(), T("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, Q2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(y)("library", "Batch actions for selected publications")
                        }, p(g(y)("library", "Fresh covers")), 9, ek)
                      ], 8, Z2)
                    ], 32)
                  ], 8, b2)) : H("", !0)
                ], 8, GA),
                wi.value ? (_(), T("p", tk, p(wi.value), 1)) : H("", !0),
                _s.value ? (_(), T("p", nk, p(_s.value), 1)) : H("", !0),
                ys.value ? (_(), T("p", ik, p(ys.value), 1)) : H("", !0),
                yi.value ? (_(), T("section", ak, [
                  c("p", rk, p(Aa.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: bi.value ? g(y)("library", "Items by this creator, sorted by publication context when available.") : Ea.value ? g(y)("library", "Items from this publication year, sorted by publication date when available.") : g(y)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(Jt.value), 9, sk),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(y)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g(Mn)("library", "%n item", "%n items", Z.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (_(), T("span", lk, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : H("", !0),
                    O.value?.datedCount ? (_(), T("span", ck, p(O.value.datedCount) + " " + p(g(y)("library", "dated")), 1)) : H("", !0),
                    O.value?.undatedCount > 0 ? (_(), T("span", uk, p(O.value.undatedCount) + " " + p(g(y)("library", "undated")), 1)) : H("", !0)
                  ], 8, ok),
                  Ta.value && O.value ? (_(), T("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(y)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(y)("library", "Publication contents")), 1),
                    c("span", null, p(g(Mn)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (_(), T("span", fk, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : H("", !0),
                    c("span", null, p(O.value.datedCount) + " " + p(g(y)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (_(), T("span", hk, p(O.value.undatedCount) + " " + p(g(y)("library", "without dates yet")), 1)) : H("", !0),
                    c("span", null, p(g(y)("library", "read-only grouping")), 1)
                  ], 8, dk)) : H("", !0),
                  Ta.value && O.value?.issueGroups?.length ? (_(), T("section", pk, [
                    c("div", null, [
                      c("p", vk, p(g(y)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(y)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(y)("library", "Read-only issue/date grouping")), 9, gk)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(y)("library", "Visual issue strip")
                    }, [
                      (_(!0), T(de, null, Fe(O.value.issueGroups, (f) => (_(), T("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(y)("library", "Issue")), 1),
                        c("small", null, p(g(Mn)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, bk))), 128))
                    ], 8, mk),
                    O.value.gapRanges?.length ? (_(), T("p", yk, p(g(y)("library", "Gap")) + ": " + p(O.value.gapRanges.join(", ")), 1)) : H("", !0),
                    (_(!0), T(de, null, Fe(O.value.issueGroups, (f) => (_(), T("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (_(!0), T(de, null, Fe(f.items, (B, ce) => (_(), T("li", {
                          key: B.itemId
                        }, [
                          c("span", _k, p(B.issueLabel), 1),
                          c("a", {
                            href: B.detailsUrl || "#"
                          }, p(B.title), 9, wk),
                          c("small", null, [
                            Ne(p(B.publicationType), 1),
                            B.publicationDate ? (_(), T(de, { key: 0 }, [
                              Ne(" · " + p(B.publicationDate), 1)
                            ], 64)) : H("", !0)
                          ]),
                          c("small", Sk, [
                            ce > 0 ? (_(), T(de, { key: 0 }, [
                              Ne(p(g(y)("library", "Previous issue")), 1)
                            ], 64)) : H("", !0),
                            ce > 0 && ce < f.items.length - 1 ? (_(), T(de, { key: 1 }, [
                              Ne(" · ")
                            ], 64)) : H("", !0),
                            ce < f.items.length - 1 ? (_(), T(de, { key: 2 }, [
                              Ne(p(g(y)("library", "Next issue")), 1)
                            ], 64)) : H("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (_(), T("details", Ck, [
                      c("summary", {
                        title: g(y)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(y)("library", "Unknown issue/date")) + " · " + p(O.value.unknownIssueItems.length), 9, Tk)
                    ])) : H("", !0)
                  ])) : H("", !0),
                  c("p", null, [
                    c("a", {
                      href: ue.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(y)("library", "Back to full catalogue")), 9, Ek)
                  ])
                ])) : H("", !0),
                c("div", Ak, [
                  c("p", kk, [
                    Ne(p(g(y)("library", "Showing")) + " " + p(Z.value.from) + "–" + p(Z.value.to) + " " + p(g(y)("library", "of")) + " " + p(Z.value.total) + " " + p(g(y)("library", "catalogue items")), 1),
                    Yi.value.length > 0 ? (_(), T("span", Ok, [
                      m[51] || (m[51] = Ne(" · ", -1)),
                      c("a", Nk, p(g(y)("library", "Clear all filters")), 1)
                    ])) : H("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(y)("library", "Catalogue pagination")
                  }, [
                    c("span", Lk, [
                      Ne(p(g(y)("library", "Page")) + " " + p(Z.value.page), 1),
                      Z.value.total > 0 ? (_(), T("span", Rk, " · " + p(Z.value.from) + "–" + p(Z.value.to), 1)) : H("", !0)
                    ]),
                    Z.value.previousUrl ? (_(), T("a", {
                      key: 0,
                      href: Z.value.previousUrl
                    }, p(g(y)("library", "Previous")), 9, Ik)) : (_(), T("span", Pk, p(g(y)("library", "Previous")), 1)),
                    Z.value.nextUrl ? (_(), T("a", {
                      key: 2,
                      href: Z.value.nextUrl
                    }, p(g(y)("library", "Next")), 9, Dk)) : (_(), T("span", $k, p(g(y)("library", "Next")), 1))
                  ], 8, xk)
                ]),
                h.value.length === 0 ? (_(), T("div", {
                  key: 4,
                  class: we(["library-empty-content", { "library-first-run-guidance": Oa.value || qi.value, "library-filter-empty-state": nr.value && !Oa.value && !qi.value }]),
                  role: "status"
                }, [
                  Oa.value ? (_(), T(de, { key: 0 }, [
                    c("h3", {
                      title: g(y)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(y)("library", "Start with one Library root")), 9, Mk),
                    c("p", Fk, [
                      c("a", {
                        href: j.value,
                        class: "button primary"
                      }, p(g(y)("library", "Add a Library root")), 9, zk),
                      c("span", Uk, p(g(y)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : qi.value ? (_(), T(de, { key: 1 }, [
                    c("h3", {
                      title: g(y)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(y)("library", "No enabled Library roots")), 9, Bk),
                    c("p", Hk, [
                      c("a", {
                        href: j.value,
                        class: "button primary"
                      }, p(g(y)("library", "Open Library settings")), 9, jk)
                    ])
                  ], 64)) : nr.value ? (_(), T(de, { key: 2 }, [
                    c("h3", {
                      title: g(y)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(y)("library", "No matches for the current filters")), 9, Vk),
                    c("p", Gk, [
                      c("a", {
                        href: _v(),
                        class: "button secondary"
                      }, p(g(y)("library", "Clear search")), 9, Kk),
                      c("a", Wk, p(g(y)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (_(), T(de, { key: 3 }, [
                    c("h3", {
                      title: g(y)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(y)("library", "No catalogue items yet")), 9, qk),
                    c("p", Yk, [
                      c("a", {
                        href: j.value,
                        class: "button primary"
                      }, p(g(y)("library", "Run a scan from settings")), 9, Xk)
                    ])
                  ], 64))
                ], 2)) : H("", !0),
                h.value.length > 0 ? (_(), T("label", Zk, [
                  c("input", {
                    type: "checkbox",
                    checked: It.value.length === h.value.length,
                    onChange: Es
                  }, null, 40, Jk),
                  Ne(" " + p(g(y)("library", "Select all publications on this page")), 1)
                ])) : H("", !0),
                h.value.length > 0 && Gt.value === "list" ? (_(), T("ul", Qk, [
                  (_(!0), T(de, null, Fe(h.value, (f) => (_(), T("li", {
                    key: f.id,
                    class: we(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Ji.value.has(Number(f.id)), "library-catalogue-list-row--open": Rn.value && Number(cn.value) === Number(f.id) }])
                  }, [
                    c("label", eO, [
                      c("input", {
                        type: "checkbox",
                        checked: Ji.value.has(Number(f.id)),
                        "aria-label": `${g(y)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => Ts(f.id, B.currentTarget.checked)
                      }, null, 40, tO)
                    ]),
                    c("div", nO, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (B) => In(f, B)
                      }, [
                        c("bdi", aO, p(f.title), 1)
                      ], 8, iO),
                      f.creators ? (_(), T("span", rO, [
                        c("bdi", sO, p(f.creators), 1)
                      ])) : H("", !0)
                    ]),
                    c("dl", oO, [
                      f.publication ? (_(), T("div", lO, [
                        c("dt", null, p(g(y)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", cO, p(f.publication), 1)
                        ])
                      ])) : H("", !0),
                      f.publicationDate ? (_(), T("div", uO, [
                        c("dt", null, p(g(y)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : H("", !0),
                      f.extension || f.publicationType ? (_(), T("div", dO, [
                        c("dt", null, p(g(y)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: we(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? dr(f.extension) : f.publicationType), 11, fO)
                        ])
                      ])) : H("", !0),
                      f.shelf ? (_(), T("div", hO, [
                        c("dt", null, p(g(y)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", pO, p(f.shelf), 1)
                        ])
                      ])) : H("", !0)
                    ]),
                    c("div", vO, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(y)("library", "Open")), 9, gO),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (B) => In(f, B)
                      }, p(g(y)("library", "Details")), 9, mO)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (_(), T("div", {
                  key: 7,
                  class: we(["library-cover-gallery", ir.value])
                }, [
                  (_(!0), T(de, null, Fe(h.value, (f) => (_(), T("article", {
                    key: f.id,
                    class: we(["library-cover-card", { "library-cover-card--cover-loaded": fr(f) === "loaded", "library-cover-card--cover-error": fr(f) === "error", "library-cover-card--selected": Ji.value.has(Number(f.id)), "library-cover-card--open": Rn.value && Number(cn.value) === Number(f.id) }])
                  }, [
                    c("label", bO, [
                      c("input", {
                        type: "checkbox",
                        checked: Ji.value.has(Number(f.id)),
                        "aria-label": `${g(y)("library", "Select publication")}: ${f.title}`,
                        onChange: (B) => Ts(f.id, B.currentTarget.checked)
                      }, null, 40, yO)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": Rn.value && Number(cn.value) === Number(f.id) ? "true" : "false",
                      onClick: (B) => In(f, B)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(y)("library", "Details")), 9, wO),
                      c("span", SO, [
                        fr(f) === "loading" ? (_(), T("span", CO)) : H("", !0),
                        c("img", {
                          class: we(["library-cover-image", { "library-cover-image--loaded": fr(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (B) => Ev(f),
                          onError: (B) => Av(f)
                        }, null, 42, TO),
                        fr(f) === "error" ? (_(), T("span", EO, p(g(y)("library", "Cover unavailable")), 1)) : H("", !0)
                      ])
                    ], 8, _O),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Ve((B) => Mu(f, B), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: it.value
                      }, null, 8, kO),
                      m[52] || (m[52] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, OO),
                      c("button", {
                        type: "submit",
                        class: we(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(y)("library", "Unstar this publication") : g(y)("library", "Star this publication"),
                        "aria-label": f.starred ? g(y)("library", "Unstar this publication") : g(y)("library", "Star this publication"),
                        "aria-busy": hr[f.id] ? "true" : void 0,
                        disabled: hr[f.id],
                        onClick: Ve((B) => Mu(f, B), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, NO),
                      pr[f.id] ? (_(), T("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(pr[f.id]), 9, xO)) : H("", !0)
                    ], 40, AO),
                    c("div", LO, [
                      c("div", RO, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (B) => In(f, B)
                          }, [
                            c("bdi", DO, p(f.title), 1)
                          ], 8, PO)
                        ], 8, IO),
                        f.creators ? (_(), T("p", $O, [
                          c("bdi", MO, p(f.creators), 1)
                        ])) : H("", !0),
                        Ol(f) || f.extension ? (_(), T("div", FO, [
                          f.extension ? (_(), T("span", zO, [
                            c("bdi", UO, p(dr(f.extension)), 1)
                          ])) : H("", !0),
                          Ol(f) ? (_(), T("p", BO, [
                            c("bdi", HO, p(Ol(f)), 1)
                          ])) : H("", !0)
                        ])) : H("", !0),
                        c("div", jO, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(y)("library", "Open")), 9, VO),
                          ye(g(Co), {
                            "aria-label": g(y)("library", "More actions")
                          }, {
                            default: ke(() => [
                              ye(g(za), {
                                href: f.filesUrl
                              }, {
                                default: ke(() => [
                                  Ne(p(g(y)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(za), {
                                href: f.downloadUrl
                              }, {
                                default: ke(() => [
                                  Ne(p(g(y)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(za), {
                                href: f.detailsUrl
                              }, {
                                default: ke(() => [
                                  Ne(p(g(y)("library", "Maintenance")), 1)
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
                h.value.length > 0 ? (_(), T("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(y)("library", "Catalogue pagination")
                }, [
                  c("span", KO, [
                    Ne(p(g(y)("library", "Page")) + " " + p(Z.value.page), 1),
                    Z.value.total > 0 ? (_(), T("span", WO, " · " + p(Z.value.from) + "–" + p(Z.value.to), 1)) : H("", !0)
                  ]),
                  Z.value.previousUrl ? (_(), T("a", {
                    key: 0,
                    href: Z.value.previousUrl
                  }, p(g(y)("library", "Previous")), 9, qO)) : (_(), T("span", YO, p(g(y)("library", "Previous")), 1)),
                  Z.value.nextUrl ? (_(), T("a", {
                    key: 2,
                    href: Z.value.nextUrl
                  }, p(g(y)("library", "Next")), 9, XO)) : (_(), T("span", ZO, p(g(y)("library", "Next")), 1))
                ], 8, GO)) : H("", !0)
              ]))
            ], 8, MT)
          ]),
          _: 1
        }),
        ye(g(sC), {
          ref_key: "sidebarComponent",
          ref: Kn,
          class: "library-native-item-sidebar",
          open: Rn.value,
          "no-toggle": "",
          loading: dt.loading,
          name: Te.value?.title || g(y)("library", "Publication details"),
          subname: Te.value?.creators || "",
          role: Ln.value ? "dialog" : void 0,
          "aria-modal": Ln.value ? "true" : void 0,
          "aria-labelledby": Ln.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Ln.value && Te.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: xu,
          onClosed: av,
          onClose: ks
        }, {
          default: ke(() => [
            c("div", JO, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Qi,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(Te.value?.title || g(y)("library", "Publication details")), 513),
              dt.loading && !Te.value ? (_(), T("p", QO, p(g(y)("library", "Loading publication details…")), 1)) : dt.error ? (_(), T("div", {
                key: 1,
                class: "library-sidebar-state",
                role: dt.missing ? "status" : "alert"
              }, [
                c("p", null, p(dt.error), 1),
                dt.missing ? H("", !0) : (_(), T("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: m[40] || (m[40] = (f) => or(cn.value, { historyMode: "none" }))
                }, p(g(y)("library", "Try again")), 1))
              ], 8, eN)) : Te.value ? (_(), T(de, { key: 2 }, [
                c("p", tN, p(g(y)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", nN, [
                  c("span", iN, p(g(y)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: Te.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, aN),
                  c("div", rN, [
                    c("p", sN, [
                      c("bdi", oN, p(Te.value.publicationType || g(y)("library", "Publication")), 1),
                      Te.value.extension ? (_(), T("span", lN, [
                        m[53] || (m[53] = Ne(" · ", -1)),
                        c("bdi", cN, p(dr(Te.value.extension)), 1)
                      ])) : H("", !0)
                    ]),
                    c("div", uN, [
                      c("a", {
                        class: "button primary",
                        href: Te.value.openUrl
                      }, p(g(y)("library", "Open")), 9, dN),
                      ye(g(Co), {
                        "aria-label": g(y)("library", "File and maintenance actions")
                      }, {
                        default: ke(() => [
                          ye(g(za), {
                            href: Te.value.filesUrl
                          }, {
                            default: ke(() => [
                              Ne(p(g(y)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(za), {
                            href: Te.value.downloadUrl
                          }, {
                            default: ke(() => [
                              Ne(p(g(y)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(za), {
                            href: Te.value.detailsUrl
                          }, {
                            default: ke(() => [
                              Ne(p(g(y)("library", "Maintenance (legacy)")), 1)
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
                  "aria-label": g(y)("library", "Publication detail sections")
                }, [
                  (_(), T(de, null, Fe(w, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: we({ active: Qt.value === f.key }),
                    "aria-current": Qt.value === f.key ? "page" : void 0,
                    onClick: (B) => Qt.value = f.key
                  }, p(g(y)("library", f.label)), 11, hN)), 64))
                ], 8, fN),
                Qt.value === "overview" ? (_(), T("section", pN, [
                  c("h3", vN, p(g(y)("library", "Overview")), 1),
                  Te.value.description ? (_(), T("p", gN, [
                    c("bdi", mN, p(Te.value.description), 1)
                  ])) : H("", !0),
                  c("dl", bN, [
                    Te.value.publication ? (_(), T("div", yN, [
                      c("dt", null, p(g(y)("library", "Series")), 1),
                      c("dd", null, p(Te.value.publication), 1)
                    ])) : H("", !0),
                    Te.value.publicationDate ? (_(), T("div", _N, [
                      c("dt", null, p(g(y)("library", "Date")), 1),
                      c("dd", null, p(Te.value.publicationDate), 1)
                    ])) : H("", !0),
                    Te.value.publisher ? (_(), T("div", wN, [
                      c("dt", null, p(g(y)("library", "Publisher")), 1),
                      c("dd", null, p(Te.value.publisher), 1)
                    ])) : H("", !0),
                    Te.value.language ? (_(), T("div", SN, [
                      c("dt", null, p(g(y)("library", "Language")), 1),
                      c("dd", null, p(Te.value.language), 1)
                    ])) : H("", !0),
                    Te.value.shelf ? (_(), T("div", CN, [
                      c("dt", null, p(g(y)("library", "Shelf")), 1),
                      c("dd", null, p(Te.value.shelf), 1)
                    ])) : H("", !0)
                  ])
                ])) : Qt.value === "metadata" ? (_(), T("section", TN, [
                  c("h3", EN, p(g(y)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ve(et, ["prevent"])
                  }, [
                    c("label", null, [
                      Ne(p(g(y)("library", "Title")), 1),
                      Xe(c("input", {
                        "onUpdate:modelValue": m[41] || (m[41] = (f) => _t.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [pn, _t.title]
                      ])
                    ]),
                    c("label", null, [
                      Ne(p(g(y)("library", "Publication date")), 1),
                      Xe(c("input", {
                        "onUpdate:modelValue": m[42] || (m[42] = (f) => _t.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(y)("library", "e.g. 2026")
                      }, null, 8, AN), [
                        [pn, _t.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(y)("library", "Identifiers")), 1),
                      (_(!0), T(de, null, Fe(_t.identifiers, (f, B) => (_(), T("div", {
                        key: B,
                        class: "library-sidebar-identifier"
                      }, [
                        Xe(c("input", {
                          "onUpdate:modelValue": (ce) => f.scheme = ce,
                          "aria-label": g(y)("library", "Identifier type"),
                          placeholder: g(y)("library", "Identifier type")
                        }, null, 8, kN), [
                          [pn, f.scheme]
                        ]),
                        Xe(c("input", {
                          "onUpdate:modelValue": (ce) => f.displayValue = ce,
                          "aria-label": g(y)("library", "Identifier value")
                        }, null, 8, ON), [
                          [pn, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ce) => Ae(B)
                        }, p(g(y)("library", "Remove")), 9, NN)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: ve
                      }, p(g(y)("library", "Add identifier")), 1)
                    ]),
                    c("p", xN, p(g(y)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    ft.error ? (_(), T("p", LN, p(ft.error), 1)) : ft.saved ? (_(), T("p", RN, p(g(y)("library", "Metadata saved.")), 1)) : H("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: ft.saving
                    }, p(ft.saving ? g(y)("library", "Saving…") : g(y)("library", "Save metadata")), 9, IN)
                  ], 32),
                  Ai(Te.value).length ? (_(), T("section", PN, [
                    c("h4", DN, p(g(y)("library", "Scanner suggestions")), 1),
                    c("p", $N, p(g(y)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (_(!0), T(de, null, Fe(Ai(Te.value), (f) => (_(), T("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          Ne(p(g(y)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          m[54] || (m[54] = c("br", null, null, -1)),
                          Ne(p(g(y)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : H("", !0)
                ])) : (_(), T("section", MN, [
                  c("h3", FN, p(g(y)("library", "Activity")), 1),
                  c("dl", zN, [
                    c("div", null, [
                      c("dt", null, p(g(y)("library", "Scan status")), 1),
                      c("dd", null, p(Te.value.scanStatus || "—"), 1)
                    ]),
                    Te.value.workflowStatus ? (_(), T("div", UN, [
                      c("dt", null, p(g(y)("library", "Workflow")), 1),
                      c("dd", null, p(Te.value.workflowStatus), 1)
                    ])) : H("", !0),
                    Te.value.metadataSource ? (_(), T("div", BN, [
                      c("dt", null, p(g(y)("library", "Metadata source")), 1),
                      c("dd", null, p(Te.value.metadataSource), 1)
                    ])) : H("", !0),
                    Te.value.cachedPath ? (_(), T("div", HN, [
                      c("dt", null, p(g(y)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", jN, p(Te.value.cachedPath), 1)
                      ])
                    ])) : H("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(y)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Wn.value,
                    onClick: m[43] || (m[43] = (f) => Os(Wn.value))
                  }, p(g(y)("library", "Previous item")), 9, GN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ei.value,
                    onClick: m[44] || (m[44] = (f) => Os(Ei.value))
                  }, p(g(y)("library", "Next item")), 9, KN)
                ], 8, VN)
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
function ZN() {
  window.LibraryStartupWatchdog?.fail();
}
function JN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = cu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !JN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  fb(XN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  ZN(), console.error("[library] Vue startup failed", e);
}
