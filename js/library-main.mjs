// @__NO_SIDE_EFFECTS__
function Yc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ge = {}, Ha = [], _n = () => {
}, Pf = () => !1, Qo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), el = (e) => e.startsWith("onUpdate:"), mt = Object.assign, Xc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, zv = Object.prototype.hasOwnProperty, Ze = (e, t) => zv.call(e, t), _e = Array.isArray, $i = (e) => fs(e) === "[object Map]", _a = (e) => fs(e) === "[object Set]", Bu = (e) => fs(e) === "[object Date]", Ne = (e) => typeof e == "function", nt = (e) => typeof e == "string", On = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", Df = (e) => (Je(e) || Ne(e)) && Ne(e.then) && Ne(e.catch), $f = Object.prototype.toString, fs = (e) => $f.call(e), Uv = (e) => fs(e).slice(8, -1), Mf = (e) => fs(e) === "[object Object]", Zc = (e) => nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Rr = /* @__PURE__ */ Yc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), tl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Bv = /-\w/g, Bt = tl(
  (e) => e.replace(Bv, (t) => t.slice(1).toUpperCase())
), jv = /\B([A-Z])/g, fi = tl(
  (e) => e.replace(jv, "-$1").toLowerCase()
), nl = tl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Rl = tl(
  (e) => e ? `on${nl(e)}` : ""
), Ot = (e, t) => !Object.is(e, t), Ks = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ff = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, il = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Hv = (e) => {
  const t = nt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ju;
const al = () => ju || (ju = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function cn(e) {
  if (_e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = nt(i) ? Wv(i) : cn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (nt(e) || Je(e))
    return e;
}
const Vv = /;(?![^(]*\))/g, Gv = /:([^]+)/, Kv = /\/\*[^]*?\*\//g;
function Wv(e) {
  const t = {};
  return e.replace(Kv, "").split(Vv).forEach((n) => {
    if (n) {
      const i = n.split(Gv);
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
function Zs(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !nt(t) && (e.class = we(t)), n && (e.style = cn(n)), e;
}
const qv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yv = /* @__PURE__ */ Yc(qv);
function zf(e) {
  return !!e || e === "";
}
function Xv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Ui(e[i], t[i]);
  return n;
}
function Hu(e, t) {
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
  let n = Bu(e), i = Bu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = On(e), i = On(t), n || i)
    return e === t;
  if (n = _e(e), i = _e(t), n || i)
    return n && i ? Xv(e, t) : !1;
  if (n = Je(e), i = Je(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = $i(e), i = $i(t), n || i || (n = _a(e), i = _a(t), n || i))
      return n && i ? Hu(e, t) : !1;
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
function Zv(e, t) {
  return e.findIndex((n) => Ui(n, t));
}
const Uf = (e) => !!(e && e.__v_isRef === !0), p = (e) => nt(e) ? e : e == null ? "" : _e(e) || Je(e) && (e.toString === $f || !Ne(e.toString)) ? Uf(e) ? p(e.value) : JSON.stringify(e, Bf, 2) : String(e), Bf = (e, t) => Uf(t) ? Bf(e, t.value) : $i(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[Il(i, r) + " =>"] = a, n),
    {}
  )
} : _a(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Il(n))
} : On(t) ? Il(t) : Je(t) && !_e(t) && !Mf(t) ? String(t) : t, Il = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    On(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Jv(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let kt;
class Qv {
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
function eg() {
  return kt;
}
let tt;
const Pl = /* @__PURE__ */ new WeakSet();
class jf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kt && (kt.active ? kt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Pl.has(this) && (Pl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vu(this), Gf(this);
    const t = tt, n = An;
    tt = this, An = !0;
    try {
      return this.fn();
    } finally {
      Kf(this), tt = t, An = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        eu(t);
      this.deps = this.depsTail = void 0, Vu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Pl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gc(this) && this.run();
  }
  get dirty() {
    return gc(this);
  }
}
let Hf = 0, Ir, Pr;
function Vf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pr, Pr = e;
    return;
  }
  e.next = Ir, Ir = e;
}
function Jc() {
  Hf++;
}
function Qc() {
  if (--Hf > 0)
    return;
  if (Pr) {
    let t = Pr;
    for (Pr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ir; ) {
    let t = Ir;
    for (Ir = void 0; t; ) {
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
function Gf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Kf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), eu(i), tg(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function gc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qr) || (e.globalVersion = qr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !gc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = tt, i = An;
  tt = e, An = !0;
  try {
    Gf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Ot(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    tt = n, An = i, Kf(e), e.flags &= -3;
  }
}
function eu(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      eu(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function tg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let An = !0;
const qf = [];
function li() {
  qf.push(An), An = !1;
}
function ci() {
  const e = qf.pop();
  An = e === void 0 ? !0 : e;
}
function Vu(e) {
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
let qr = 0;
class ng {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class rl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!tt || !An || tt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== tt)
      n = this.activeLink = new ng(tt, this), tt.deps ? (n.prevDep = tt.depsTail, tt.depsTail.nextDep = n, tt.depsTail = n) : tt.deps = tt.depsTail = n, Yf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = tt.depsTail, n.nextDep = void 0, tt.depsTail.nextDep = n, tt.depsTail = n, tt.deps === n && (tt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, qr++, this.notify(t);
  }
  notify(t) {
    Jc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Qc();
    }
  }
}
function Yf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Yf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const mc = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ Symbol(
  ""
), bc = /* @__PURE__ */ Symbol(
  ""
), Yr = /* @__PURE__ */ Symbol(
  ""
);
function Ft(e, t, n) {
  if (An && tt) {
    let i = mc.get(e);
    i || mc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new rl()), a.map = i, a.key = n), a.track();
  }
}
function ti(e, t, n, i, a, r) {
  const s = mc.get(e);
  if (!s) {
    qr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Jc(), t === "clear")
    s.forEach(o);
  else {
    const l = _e(e), d = l && Zc(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, S) => {
        (S === "length" || S === Yr || !On(S) && S >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(Yr)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(ma)), $i(e) && o(s.get(bc)));
          break;
        case "delete":
          l || (o(s.get(ma)), $i(e) && o(s.get(bc)));
          break;
        case "set":
          $i(e) && o(s.get(ma));
          break;
      }
  }
  Qc();
}
function Da(e) {
  const t = /* @__PURE__ */ We(e);
  return t === e ? t : (Ft(t, "iterate", Yr), /* @__PURE__ */ wn(e) ? t : t.map(xn));
}
function sl(e) {
  return Ft(e = /* @__PURE__ */ We(e), "iterate", Yr), e;
}
function Un(e, t) {
  return /* @__PURE__ */ ui(e) ? Za(/* @__PURE__ */ ba(e) ? xn(t) : t) : xn(t);
}
const ig = {
  __proto__: null,
  [Symbol.iterator]() {
    return Dl(this, Symbol.iterator, (e) => Un(this, e));
  },
  concat(...e) {
    return Da(this).concat(
      ...e.map((t) => _e(t) ? Da(t) : t)
    );
  },
  entries() {
    return Dl(this, "entries", (e) => (e[1] = Un(this, e[1]), e));
  },
  every(e, t) {
    return qn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return qn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Un(this, i)),
      arguments
    );
  },
  find(e, t) {
    return qn(
      this,
      "find",
      e,
      t,
      (n) => Un(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return qn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return qn(
      this,
      "findLast",
      e,
      t,
      (n) => Un(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return qn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return qn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return $l(this, "includes", e);
  },
  indexOf(...e) {
    return $l(this, "indexOf", e);
  },
  join(e) {
    return Da(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return $l(this, "lastIndexOf", e);
  },
  map(e, t) {
    return qn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return gr(this, "pop");
  },
  push(...e) {
    return gr(this, "push", e);
  },
  reduce(e, ...t) {
    return Gu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Gu(this, "reduceRight", e, t);
  },
  shift() {
    return gr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return qn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return gr(this, "splice", e);
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
    return gr(this, "unshift", e);
  },
  values() {
    return Dl(this, "values", (e) => Un(this, e));
  }
};
function Dl(e, t, n) {
  const i = sl(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ wn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const ag = Array.prototype;
function qn(e, t, n, i, a, r) {
  const s = sl(e), o = s !== e && !/* @__PURE__ */ wn(e), l = s[t];
  if (l !== ag[t]) {
    const h = l.apply(e, r);
    return o ? xn(h) : h;
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
function Gu(e, t, n, i) {
  const a = sl(e), r = a !== e && !/* @__PURE__ */ wn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = Un(e, d)), n.call(this, d, Un(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Un(e, l) : l;
}
function $l(e, t, n) {
  const i = /* @__PURE__ */ We(e);
  Ft(i, "iterate", Yr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ iu(n[0]) ? (n[0] = /* @__PURE__ */ We(n[0]), i[t](...n)) : a;
}
function gr(e, t, n = []) {
  li(), Jc();
  const i = (/* @__PURE__ */ We(e))[t].apply(e, n);
  return Qc(), ci(), i;
}
const rg = /* @__PURE__ */ Yc("__proto__,__v_isRef,__isVue"), Xf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(On)
);
function sg(e) {
  On(e) || (e = String(e));
  const t = /* @__PURE__ */ We(this);
  return Ft(t, "has", e), t.hasOwnProperty(e);
}
class Zf {
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
      return i === (a ? r ? gg : th : r ? eh : Qf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = _e(t);
    if (!a) {
      let l;
      if (s && (l = ig[n]))
        return l;
      if (n === "hasOwnProperty")
        return sg;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ jt(t) ? t : i
    );
    if ((On(n) ? Xf.has(n) : rg(n)) || (a || Ft(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ jt(o)) {
      const l = s && Zc(n) ? o : o.value;
      return a && Je(l) ? /* @__PURE__ */ Xr(l) : l;
    }
    return Je(o) ? a ? /* @__PURE__ */ Xr(o) : /* @__PURE__ */ Mt(o) : o;
  }
}
class Jf extends Zf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = _e(t) && Zc(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ ui(r);
      if (!/* @__PURE__ */ wn(i) && !/* @__PURE__ */ ui(i) && (r = /* @__PURE__ */ We(r), i = /* @__PURE__ */ We(i)), !s && /* @__PURE__ */ jt(r) && !/* @__PURE__ */ jt(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ze(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ jt(t) ? t : a
    );
    return t === /* @__PURE__ */ We(a) && l && (o ? Ot(i, r) && ti(t, "set", n, i) : ti(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ti(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!On(n) || !Xf.has(n)) && Ft(t, "has", n), i;
  }
  ownKeys(t) {
    return Ft(
      t,
      "iterate",
      _e(t) ? "length" : ma
    ), Reflect.ownKeys(t);
  }
}
class og extends Zf {
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
const lg = /* @__PURE__ */ new Jf(), cg = /* @__PURE__ */ new og(), ug = /* @__PURE__ */ new Jf(!0);
const yc = (e) => e, Rs = (e) => Reflect.getPrototypeOf(e);
function dg(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ We(a), s = $i(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? yc : t ? Za : xn;
    return !t && Ft(
      r,
      "iterate",
      l ? bc : ma
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
function Is(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fg(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ We(r), o = /* @__PURE__ */ We(a);
      e || (Ot(a, o) && Ft(s, "get", a), Ft(s, "get", o));
      const { has: l } = Rs(s), d = t ? yc : e ? Za : xn;
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
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ We(o), d = t ? yc : e ? Za : xn;
      return !e && Ft(l, "iterate", ma), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return mt(
    n,
    e ? {
      add: Is("add"),
      set: Is("set"),
      delete: Is("delete"),
      clear: Is("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ We(this), s = Rs(r), o = /* @__PURE__ */ We(a), l = !t && !/* @__PURE__ */ wn(a) && !/* @__PURE__ */ ui(a) ? o : a;
        return s.has.call(r, l) || Ot(a, l) && s.has.call(r, a) || Ot(o, l) && s.has.call(r, o) || (r.add(l), ti(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ wn(r) && !/* @__PURE__ */ ui(r) && (r = /* @__PURE__ */ We(r));
        const s = /* @__PURE__ */ We(this), { has: o, get: l } = Rs(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ We(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? Ot(r, u) && ti(s, "set", a, r) : ti(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ We(this), { has: s, get: o } = Rs(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ We(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && ti(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ We(this), r = a.size !== 0, s = a.clear();
        return r && ti(
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
    n[a] = dg(a, e, t);
  }), n;
}
function tu(e, t) {
  const n = fg(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    r
  );
}
const hg = {
  get: /* @__PURE__ */ tu(!1, !1)
}, pg = {
  get: /* @__PURE__ */ tu(!1, !0)
}, vg = {
  get: /* @__PURE__ */ tu(!0, !1)
};
const Qf = /* @__PURE__ */ new WeakMap(), eh = /* @__PURE__ */ new WeakMap(), th = /* @__PURE__ */ new WeakMap(), gg = /* @__PURE__ */ new WeakMap();
function mg(e) {
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
  return /* @__PURE__ */ ui(e) ? e : nu(
    e,
    !1,
    lg,
    hg,
    Qf
  );
}
// @__NO_SIDE_EFFECTS__
function bg(e) {
  return nu(
    e,
    !1,
    ug,
    pg,
    eh
  );
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  return nu(
    e,
    !0,
    cg,
    vg,
    th
  );
}
function nu(e, t, n, i, a) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = mg(Uv(e));
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
  return /* @__PURE__ */ ui(e) ? /* @__PURE__ */ ba(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ui(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function iu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ We(t) : e;
}
function yg(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && Ff(e, "__v_skip", !0), e;
}
const xn = (e) => Je(e) ? /* @__PURE__ */ Mt(e) : e, Za = (e) => Je(e) ? /* @__PURE__ */ Xr(e) : e;
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return ih(e, !1);
}
// @__NO_SIDE_EFFECTS__
function nh(e) {
  return ih(e, !0);
}
function ih(e, t) {
  return /* @__PURE__ */ jt(e) ? e : new _g(e, t);
}
class _g {
  constructor(t, n) {
    this.dep = new rl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ We(t), this._value = n ? t : xn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ wn(t) || /* @__PURE__ */ ui(t);
    t = i ? t : /* @__PURE__ */ We(t), Ot(t, n) && (this._rawValue = t, this._value = i ? t : xn(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ jt(e) ? e.value : e;
}
function ri(e) {
  return Ne(e) ? e() : g(e);
}
const wg = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ jt(a) && !/* @__PURE__ */ jt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function ah(e) {
  return /* @__PURE__ */ ba(e) ? e : new Proxy(e, wg);
}
class Sg {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new rl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Cg(e) {
  return new Sg(e);
}
class Tg {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new rl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    tt !== this)
      return Vf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Wf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Eg(e, t, n = !1) {
  let i, a;
  return Ne(e) ? i = e : (i = e.get, a = e.set), new Tg(i, a, n);
}
const Ps = {}, Js = /* @__PURE__ */ new WeakMap();
let la;
function Ag(e, t = !1, n = la) {
  if (n) {
    let i = Js.get(n);
    i || Js.set(n, i = []), i.push(e);
  }
}
function kg(e, t, n = Ge) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = (I) => a ? I : /* @__PURE__ */ wn(I) || a === !1 || a === 0 ? ni(I, 1) : ni(I);
  let u, h, S, E, x = !1, A = !1;
  if (/* @__PURE__ */ jt(e) ? (h = () => e.value, x = /* @__PURE__ */ wn(e)) : /* @__PURE__ */ ba(e) ? (h = () => d(e), x = !0) : _e(e) ? (A = !0, x = e.some((I) => /* @__PURE__ */ ba(I) || /* @__PURE__ */ wn(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ jt(I))
      return I.value;
    if (/* @__PURE__ */ ba(I))
      return d(I);
    if (Ne(I))
      return l ? l(I, 2) : I();
  })) : Ne(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (S) {
      li();
      try {
        S();
      } finally {
        ci();
      }
    }
    const I = la;
    la = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      la = I;
    }
  } : h = _n, t && a) {
    const I = h, P = a === !0 ? 1 / 0 : a;
    h = () => ni(I(), P);
  }
  const O = eg(), D = () => {
    u.stop(), O && O.active && Xc(O.effects, u);
  };
  if (r && t) {
    const I = t;
    t = (...P) => {
      const ce = I(...P);
      return D(), ce;
    };
  }
  let F = A ? new Array(e.length).fill(Ps) : Ps;
  const K = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const P = u.run();
        if (I || a || x || (A ? P.some((ce, J) => Ot(ce, F[J])) : Ot(P, F))) {
          S && S();
          const ce = la;
          la = u;
          try {
            const J = [
              P,
              // pass undefined as the old value when it's changed for the first time
              F === Ps ? void 0 : A && F[0] === Ps ? [] : F,
              E
            ];
            F = P, l ? l(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            la = ce;
          }
        }
      } else
        u.run();
  };
  return o && o(K), u = new jf(h), u.scheduler = s ? () => s(K, !1) : K, E = (I) => Ag(I, !1, u), S = u.onStop = () => {
    const I = Js.get(u);
    if (I) {
      if (l)
        l(I, 4);
      else
        for (const P of I) P();
      Js.delete(u);
    }
  }, t ? i ? K(!0) : F = u.run() : s ? s(K.bind(null, !0), !0) : u.run(), D.pause = u.pause.bind(u), D.resume = u.resume.bind(u), D.stop = D, D;
}
function ni(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ jt(e))
    ni(e.value, t, n);
  else if (_e(e))
    for (let i = 0; i < e.length; i++)
      ni(e[i], t, n);
  else if (_a(e) || $i(e))
    e.forEach((i) => {
      ni(i, t, n);
    });
  else if (Mf(e)) {
    for (const i in e)
      ni(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ni(e[i], t, n);
  }
  return e;
}
function hs(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    ol(a, t, n);
  }
}
function Sn(e, t, n, i) {
  if (Ne(e)) {
    const a = hs(e, t, n, i);
    return a && Df(a) && a.catch((r) => {
      ol(r, t, n);
    }), a;
  }
  if (_e(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Sn(e[r], t, n, i));
    return a;
  }
}
function ol(e, t, n, i = !0) {
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
      li(), hs(r, null, 10, [
        e,
        l,
        d
      ]), ci();
      return;
    }
  }
  Og(e, n, a, i, s);
}
function Og(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Yt = [];
let $n = -1;
const Va = [];
let Pi = null, Ua = 0;
const rh = /* @__PURE__ */ Promise.resolve();
let Qs = null;
function sn(e) {
  const t = Qs || rh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xg(e) {
  let t = $n + 1, n = Yt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Yt[i], r = Zr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function au(e) {
  if (!(e.flags & 1)) {
    const t = Zr(e), n = Yt[Yt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Zr(n) ? Yt.push(e) : Yt.splice(xg(t), 0, e), e.flags |= 1, sh();
  }
}
function sh() {
  Qs || (Qs = rh.then(ch));
}
function oh(e) {
  if (!_e(e))
    Pi && e.id === -1 ? Pi.splice(Ua + 1, 0, e) : e.flags & 1 || (Va.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Va.push(e[t]);
  sh();
}
function Ku(e, t, n = $n + 1) {
  for (; n < Yt.length; n++) {
    const i = Yt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Yt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function lh(e) {
  if (Va.length) {
    const t = [...new Set(Va)].sort(
      (n, i) => Zr(n) - Zr(i)
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
const Zr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ch(e) {
  try {
    for ($n = 0; $n < Yt.length; $n++) {
      const t = Yt[$n];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), hs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $n < Yt.length; $n++) {
      const t = Yt[$n];
      t && (t.flags &= -2);
    }
    $n = -1, Yt.length = 0, lh(), Qs = null, (Yt.length || Va.length) && ch();
  }
}
let Nt = null, ll = null;
function eo(e) {
  const t = Nt;
  return Nt = e, ll = e && e.type.__scopeId || null, t;
}
function Ng(e) {
  ll = e;
}
function Lg() {
  ll = null;
}
const Rg = (e) => Oe;
function Oe(e, t = Nt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && ro(-1);
    const r = eo(t), s = si.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = si.length; l > s; l--) du();
      eo(r), i._d && ro(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Xe(e, t) {
  if (Nt === null)
    return e;
  const n = pl(Nt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = Ge] = t[a];
    r && (Ne(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ni(s), i.push({
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
    l && (li(), Sn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), ci());
  }
}
function mn(e, t) {
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
      return n && Ne(t) ? t.call(i && i.proxy) : t;
  }
}
const Ig = /* @__PURE__ */ Symbol.for("v-scx"), Pg = () => zt(Ig);
function Dg(e, t) {
  return cl(e, null, t);
}
function $g(e, t) {
  return cl(
    e,
    null,
    { flush: "sync" }
  );
}
function ot(e, t, n) {
  return cl(e, t, n);
}
function cl(e, t, n = Ge) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = mt({}, n), l = t && i || !t && r !== "post";
  let d;
  if (is) {
    if (r === "sync") {
      const E = Pg();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = _n, E.resume = _n, E.pause = _n, E;
    }
  }
  const u = Ut;
  o.call = (E, x, A) => Sn(E, u, x, A);
  let h = !1;
  r === "post" ? o.scheduler = (E) => {
    qt(E, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (E, x) => {
    x ? E() : au(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const S = kg(e, t, o);
  return is && (d ? d.push(S) : l && S()), S;
}
function Mg(e, t, n) {
  const i = this.proxy, a = nt(e) ? e.includes(".") ? uh(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Ne(t) ? r = t : (r = t.handler, n = t);
  const s = gs(this), o = cl(a, r.bind(i), n);
  return s(), o;
}
function uh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Li = /* @__PURE__ */ new WeakMap(), dh = /* @__PURE__ */ Symbol("_vte"), ul = (e) => e.__isTeleport, ua = (e) => e && (e.disabled || e.disabled === ""), Fg = (e) => e && (e.defer || e.defer === ""), Wu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, qu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, _c = (e, t) => {
  const n = e && e.to;
  return nt(n) ? t ? t(n) : null : n;
}, zg = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: S,
      o: { insert: E, querySelector: x, createText: A, createComment: O, parentNode: D }
    } = d, F = ua(t.props);
    let { dynamicChildren: K } = t;
    const I = (J, de, X) => {
      J.shapeFlag & 16 && u(
        J.children,
        de,
        X,
        a,
        r,
        s,
        o,
        l
      );
    }, P = (J = t) => {
      const de = ua(J.props), X = J.target = _c(J.props, x), re = wc(X, J, A, E);
      X && (s !== "svg" && Wu(X) ? s = "svg" : s !== "mathml" && qu(X) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), de || (I(J, X, re), Ar(J, !1)));
    }, ce = (J) => {
      const de = () => {
        if (Li.get(J) === de) {
          if (Li.delete(J), ua(J.props)) {
            const X = D(J.el) || n;
            I(J, X, J.anchor), Ar(J, !0);
          }
          P(J);
        }
      };
      Li.set(J, de), qt(de, r);
    };
    if (e == null) {
      const J = t.el = A(""), de = t.anchor = A("");
      if (E(J, n, i), E(de, n, i), Fg(t.props) || r && r.pendingBranch) {
        ce(t);
        return;
      }
      F && (I(t, n, de), Ar(t, !0)), P();
    } else {
      t.el = e.el;
      const J = t.anchor = e.anchor, de = Li.get(e);
      if (de) {
        de.flags |= 8, Li.delete(e), ce(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, re = t.targetAnchor = e.targetAnchor, be = ua(e.props), Q = be ? n : X, ie = be ? J : re;
      if (s === "svg" || Wu(X) ? s = "svg" : (s === "mathml" || qu(X)) && (s = "mathml"), K ? (S(
        e.dynamicChildren,
        K,
        Q,
        a,
        r,
        s,
        o
      ), uu(e, t, !0)) : l || h(
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
        be ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ds(
          t,
          n,
          J,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = _c(t.props, x);
        $ && (t.target = $, Ds(
          t,
          $,
          null,
          d,
          0
        ));
      } else be && Ds(
        t,
        X,
        re,
        d,
        1
      );
      Ar(t, F);
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
    } = e, E = ua(S), x = r || !E, A = Li.get(e);
    if (A && (A.flags |= 8, Li.delete(e)), h && (a(d), a(u)), r && a(l), !A && (E || h) && s & 16)
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
  move: Ds,
  hydrate: Ug
};
function Ds(e, t, n, { o: { insert: i }, m: a }, r = 2) {
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
function Ug(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: d, createText: u }
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
  const x = t.target = _c(
    t.props,
    l
  ), A = ua(t.props);
  if (x) {
    const O = x._lpa || x.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), S(x, O), t.targetAnchor || wc(
      x,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === x ? e : null
    )) : (t.anchor = s(e), S(x, O), t.targetAnchor || wc(x, t, u, d), h(
      O && s(O),
      t,
      x,
      n,
      i,
      a,
      r
    ))), Ar(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const fh = zg;
function Ar(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function wc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[dh] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const bn = /* @__PURE__ */ Symbol("_leaveCb"), mr = /* @__PURE__ */ Symbol("_enterCb");
function Bg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Hi(() => {
    e.isMounted = !0;
  }), Ja(() => {
    e.isUnmounting = !0;
  }), e;
}
const pn = [Function, Array], hh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: pn,
  onEnter: pn,
  onAfterEnter: pn,
  onEnterCancelled: pn,
  // leave
  onBeforeLeave: pn,
  onLeave: pn,
  onAfterLeave: pn,
  onLeaveCancelled: pn,
  // appear
  onBeforeAppear: pn,
  onAppear: pn,
  onAfterAppear: pn,
  onAppearCancelled: pn
}, ph = (e) => {
  const t = e.subTree;
  return t.component ? ph(t.component) : t;
}, jg = {
  name: "BaseTransition",
  props: hh,
  setup(e, { slots: t }) {
    const n = Sa(), i = Bg();
    return () => {
      const a = t.default && mh(t.default(), !0), r = a && a.length ? vh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? j() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ We(e), { mode: o } = s;
      if (i.isLeaving)
        return Ml(r);
      const l = to(r);
      if (!l)
        return Ml(r);
      let d = Sc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== xt && Jr(l, d);
      let u = n.subTree && to(n.subTree);
      if (u && u.type !== xt && !da(u, l) && ph(n).type !== xt) {
        let h = Sc(
          u,
          s,
          i,
          n
        );
        if (Jr(u, h), o === "out-in" && l.type !== xt)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Ml(r);
        o === "in-out" && l.type !== xt ? h.delayLeave = (S, E, x) => {
          const A = gh(
            i,
            u
          );
          A[String(u.key)] = u, S[bn] = () => {
            E(), S[bn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            x(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function vh(e) {
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
const Hg = jg;
function gh(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Sc(e, t, n, i, a) {
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
    onAfterLeave: x,
    onLeaveCancelled: A,
    onBeforeAppear: O,
    onAppear: D,
    onAfterAppear: F,
    onAppearCancelled: K
  } = t, I = String(e.key), P = gh(n, e), ce = (X, re) => {
    X && Sn(
      X,
      i,
      9,
      re
    );
  }, J = (X, re) => {
    const be = re[1];
    ce(X, re), _e(X) ? X.every((Q) => Q.length <= 1) && be() : X.length <= 1 && be();
  }, de = {
    mode: s,
    persisted: o,
    beforeEnter(X) {
      let re = l;
      if (!n.isMounted)
        if (r)
          re = O || l;
        else
          return;
      X[bn] && X[bn](
        !0
        /* cancelled */
      );
      const be = P[I];
      be && da(e, be) && be.el[bn] && be.el[bn](), ce(re, [X]);
    },
    enter(X) {
      if (P[I] === e) return;
      let re = d, be = u, Q = h;
      if (!n.isMounted)
        if (r)
          re = D || d, be = F || u, Q = K || h;
        else
          return;
      let ie = !1;
      X[mr] = (M) => {
        ie || (ie = !0, M ? ce(Q, [X]) : ce(be, [X]), de.delayedLeave && de.delayedLeave(), X[mr] = void 0);
      };
      const $ = X[mr].bind(null, !1);
      re ? J(re, [X, $]) : $();
    },
    leave(X, re) {
      const be = String(e.key);
      if (X[mr] && X[mr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return re();
      ce(S, [X]);
      let Q = !1;
      X[bn] = ($) => {
        Q || (Q = !0, re(), $ ? ce(A, [X]) : ce(x, [X]), X[bn] = void 0, P[be] === e && delete P[be]);
      };
      const ie = X[bn].bind(null, !1);
      P[be] = e, E ? J(E, [X, ie]) : ie();
    },
    clone(X) {
      const re = Sc(
        X,
        t,
        n,
        i,
        a
      );
      return a && a(re), re;
    }
  };
  return de;
}
function Ml(e) {
  if (dl(e))
    return e = Bi(e), e.children = null, e;
}
function to(e) {
  if (!dl(e))
    return ul(e.type) && e.children ? vh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Ne(n.default))
      return n.default();
  }
}
function Jr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Jr(
      ul(n.type) && to(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function mh(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === fe ? (s.patchFlag & 128 && a++, i = i.concat(
      mh(s.children, t, o)
    )) : (t || s.type !== xt) && i.push(o != null ? Bi(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Lt(e, t) {
  return Ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function bh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Vg(e) {
  const t = Sa(), n = /* @__PURE__ */ nh(null);
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
function Yu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const no = /* @__PURE__ */ new WeakMap();
function Dr(e, t, n, i, a = !1) {
  if (_e(e)) {
    e.forEach(
      (A, O) => Dr(
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
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Dr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? pl(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === Ge ? o.refs = {} : o.refs, h = o.setupState, S = /* @__PURE__ */ We(h), E = h === Ge ? Pf : (A) => Yu(u, A) ? !1 : Ze(S, A), x = (A, O) => !(O && Yu(u, O));
  if (d != null && d !== l) {
    if (Xu(t), nt(d))
      u[d] = null, E(d) && (h[d] = null);
    else if (/* @__PURE__ */ jt(d)) {
      const A = t;
      x(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (Ne(l))
    hs(l, o, 12, [s, u]);
  else {
    const A = nt(l), O = /* @__PURE__ */ jt(l);
    if (A || O) {
      const D = () => {
        if (e.f) {
          const F = A ? E(l) ? h[l] : u[l] : x() || !e.k ? l.value : u[e.k];
          if (a)
            _e(F) && Xc(F, r);
          else if (_e(F))
            F.includes(r) || F.push(r);
          else if (A)
            u[l] = [r], E(l) && (h[l] = u[l]);
          else {
            const K = [r];
            x(l, e.k) && (l.value = K), e.k && (u[e.k] = K);
          }
        } else A ? (u[l] = s, E(l) && (h[l] = s)) : O && (x(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const F = () => {
          D(), no.delete(e);
        };
        F.id = -1, no.set(e, F), qt(F, n);
      } else
        Xu(e), D();
    }
  }
}
function Xu(e) {
  const t = no.get(e);
  t && (t.flags |= 8, no.delete(e));
}
al().requestIdleCallback;
al().cancelIdleCallback;
const Ga = (e) => !!e.type.__asyncLoader, dl = (e) => e.type.__isKeepAlive;
function Gg(e, t) {
  yh(e, "a", t);
}
function Kg(e, t) {
  yh(e, "da", t);
}
function yh(e, t, n = Ut) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (fl(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      dl(a.parent.vnode) && Wg(i, t, n, a), a = a.parent;
  }
}
function Wg(e, t, n, i) {
  const a = fl(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  ps(() => {
    Xc(i[t], a);
  }, n);
}
function fl(e, t, n = Ut, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      li();
      const o = gs(n), l = Sn(t, n, e, s);
      return o(), ci(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const hi = (e) => (t, n = Ut) => {
  (!is || e === "sp") && fl(e, (...i) => t(...i), n);
}, _h = hi("bm"), Hi = hi("m"), wh = hi(
  "bu"
), qg = hi("u"), Ja = hi(
  "bum"
), ps = hi("um"), Yg = hi(
  "sp"
), Xg = hi("rtg"), Zg = hi("rtc");
function Jg(e, t = Ut) {
  fl("ec", e, t);
}
const ru = "components", Qg = "directives";
function Ue(e, t) {
  return ou(ru, e, !0, t) || e;
}
const Sh = /* @__PURE__ */ Symbol.for("v-ndc");
function su(e) {
  return nt(e) ? ou(ru, e, !1) || e : e || Sh;
}
function Zu(e) {
  return ou(Qg, e);
}
function ou(e, t, n = !0, i = !1) {
  const a = Nt || Ut;
  if (a) {
    const r = a.type;
    if (e === ru) {
      const o = Dm(
        r,
        !1
      );
      if (o && (o === t || o === Bt(t) || o === nl(Bt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ju(a[e] || r[e], t) || // global registration
      Ju(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function Ju(e, t) {
  return e && (e[t] || e[Bt(t)] || e[nl(Bt(t))]);
}
function ze(e, t, n, i) {
  let a;
  const r = n, s = _e(e);
  if (s || nt(e)) {
    const o = s && /* @__PURE__ */ ba(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ wn(e), d = /* @__PURE__ */ ui(e), e = sl(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? d ? Za(xn(e[u])) : xn(e[u]) : e[u],
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
function De(e, t, n, i, a, r) {
  if (n == null && (n = {}), Nt.ce || Nt.parent && Ga(Nt.parent) && Nt.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), _(), Fe(
      fe,
      null,
      [ye("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = si.length;
  _();
  let l;
  try {
    const d = s && Ch(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = Fe(
      fe,
      {
        key: (u && !On(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = si.length; u > o; u--) du();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Ch(e) {
  return e.some((t) => es(t) ? !(t.type === xt || t.type === fe && !Ch(t.children)) : !0) ? e : null;
}
const Cc = (e) => e ? Gh(e) ? pl(e) : Cc(e.parent) : null, $r = (
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
    $parent: (e) => Cc(e.parent),
    $root: (e) => Cc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ah(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      au(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = sn.bind(e.proxy)),
    $watch: (e) => Mg.bind(e)
  })
), Fl = (e, t) => e !== Ge && !e.__isScriptSetup && Ze(e, t), em = {
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
        if (Fl(i, t))
          return s[t] = 1, i[t];
        if (a !== Ge && Ze(a, t))
          return s[t] = 2, a[t];
        if (Ze(r, t))
          return s[t] = 3, r[t];
        if (n !== Ge && Ze(n, t))
          return s[t] = 4, n[t];
        Tc && (s[t] = 0);
      }
    }
    const d = $r[t];
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
    return Fl(a, t) ? (a[t] = n, !0) : i !== Ge && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Ge && o[0] !== "$" && Ze(e, o) || Fl(t, o) || Ze(r, o) || Ze(i, o) || Ze($r, o) || Ze(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function tm() {
  return Th().slots;
}
function nm() {
  return Th().attrs;
}
function Th(e) {
  const t = Sa();
  return t.setupContext || (t.setupContext = Wh(t));
}
function io(e) {
  return _e(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function im(e, t) {
  return !e || !t ? e || t : _e(e) && _e(t) ? e.concat(t) : mt({}, io(e), io(t));
}
let Tc = !0;
function am(e) {
  const t = Ah(e), n = e.proxy, i = e.ctx;
  Tc = !1, t.beforeCreate && Qu(t.beforeCreate, e, "bc");
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
    updated: x,
    activated: A,
    deactivated: O,
    beforeDestroy: D,
    beforeUnmount: F,
    destroyed: K,
    unmounted: I,
    render: P,
    renderTracked: ce,
    renderTriggered: J,
    errorCaptured: de,
    serverPrefetch: X,
    // public API
    expose: re,
    inheritAttrs: be,
    // assets
    components: Q,
    directives: ie,
    filters: $
  } = t;
  if (d && rm(d, i, null), s)
    for (const ae in s) {
      const ne = s[ae];
      Ne(ne) && (i[ae] = ne.bind(n));
    }
  if (a) {
    const ae = a.call(n, n);
    Je(ae) && (e.data = /* @__PURE__ */ Mt(ae));
  }
  if (Tc = !0, r)
    for (const ae in r) {
      const ne = r[ae], pe = Ne(ne) ? ne.bind(n, n) : Ne(ne.get) ? ne.get.bind(n, n) : _n, he = !Ne(ne) && Ne(ne.set) ? ne.set.bind(n) : _n, Se = W({
        get: pe,
        set: he
      });
      Object.defineProperty(i, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (ve) => Se.value = ve
      });
    }
  if (o)
    for (const ae in o)
      Eh(o[ae], i, n, ae);
  if (l) {
    const ae = Ne(l) ? l.call(n) : l;
    Reflect.ownKeys(ae).forEach((ne) => {
      mn(ne, ae[ne]);
    });
  }
  u && Qu(u, e, "c");
  function Y(ae, ne) {
    _e(ne) ? ne.forEach((pe) => ae(pe.bind(n))) : ne && ae(ne.bind(n));
  }
  if (Y(_h, h), Y(Hi, S), Y(wh, E), Y(qg, x), Y(Gg, A), Y(Kg, O), Y(Jg, de), Y(Zg, ce), Y(Xg, J), Y(Ja, F), Y(ps, I), Y(Yg, X), _e(re))
    if (re.length) {
      const ae = e.exposed || (e.exposed = {});
      re.forEach((ne) => {
        Object.defineProperty(ae, ne, {
          get: () => n[ne],
          set: (pe) => n[ne] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === _n && (e.render = P), be != null && (e.inheritAttrs = be), Q && (e.components = Q), ie && (e.directives = ie), X && bh(e);
}
function rm(e, t, n = _n) {
  _e(e) && (e = Ec(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Je(a) ? "default" in a ? r = zt(
      a.from || i,
      a.default,
      !0
    ) : r = zt(a.from || i) : r = zt(a), /* @__PURE__ */ jt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function Qu(e, t, n) {
  Sn(
    _e(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Eh(e, t, n, i) {
  let a = i.includes(".") ? uh(n, i) : () => n[i];
  if (nt(e)) {
    const r = t[e];
    Ne(r) && ot(a, r);
  } else if (Ne(e))
    ot(a, e.bind(n));
  else if (Je(e))
    if (_e(e))
      e.forEach((r) => Eh(r, t, n, i));
    else {
      const r = Ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ne(r) && ot(a, r, e);
    }
}
function Ah(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => ao(l, d, s, !0)
  ), ao(l, t, s)), Je(t) && r.set(t, l), l;
}
function ao(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && ao(e, r, n, !0), a && a.forEach(
    (s) => ao(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = sm[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const sm = {
  data: ed,
  props: td,
  emits: td,
  // objects
  methods: kr,
  computed: kr,
  // lifecycle
  beforeCreate: Wt,
  created: Wt,
  beforeMount: Wt,
  mounted: Wt,
  beforeUpdate: Wt,
  updated: Wt,
  beforeDestroy: Wt,
  beforeUnmount: Wt,
  destroyed: Wt,
  unmounted: Wt,
  activated: Wt,
  deactivated: Wt,
  errorCaptured: Wt,
  serverPrefetch: Wt,
  // assets
  components: kr,
  directives: kr,
  // watch
  watch: lm,
  // provide / inject
  provide: ed,
  inject: om
};
function ed(e, t) {
  return t ? e ? function() {
    return mt(
      Ne(e) ? e.call(this, this) : e,
      Ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function om(e, t) {
  return kr(Ec(e), Ec(t));
}
function Ec(e) {
  if (_e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Wt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function kr(e, t) {
  return e ? mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function td(e, t) {
  return e ? _e(e) && _e(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : mt(
    /* @__PURE__ */ Object.create(null),
    io(e),
    io(t ?? {})
  ) : t;
}
function lm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = mt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Wt(e[i], t[i]);
  return n;
}
function kh() {
  return {
    app: null,
    config: {
      isNativeTag: Pf,
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
let cm = 0;
function um(e, t) {
  return function(i, a = null) {
    Ne(i) || (i = mt({}, i)), a != null && !Je(a) && (a = null);
    const r = kh(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: cm++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Mm,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return s.has(u) || (u && Ne(u.install) ? (s.add(u), u.install(d, ...h)) : Ne(u) && (s.add(u), u(d, ...h))), d;
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
          return E.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(E, u, S), l = !0, d._container = u, u.__vue_app__ = d, pl(E.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (Sn(
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
function Oh(e, t, n = Ge) {
  const i = Sa(), a = Bt(t), r = fi(t), s = xh(e, a), o = Cg((l, d) => {
    let u, h = Ge, S;
    return $g(() => {
      const E = e[a];
      Ot(u, E) && (u = E, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const x = n.set ? n.set(E) : E;
        if (!Ot(x, u) && !(h !== Ge && Ot(E, h)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (u = E, d()), i.emit(`update:${t}`, x), Ot(E, h) && (Ot(E, x) && !Ot(x, S) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && h !== Ge && !Ot(x, u)) && d(), h = E, S = x;
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
const xh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Bt(t)}Modifiers`] || e[`${fi(t)}Modifiers`];
function dm(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ge;
  let a = n;
  const r = t.startsWith("update:"), s = r && xh(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => nt(u) ? u.trim() : u)), s.number && (a = a.map(il)));
  let o, l = i[o = Rl(t)] || // also try camelCase event handler (#2249)
  i[o = Rl(Bt(t))];
  !l && r && (l = i[o = Rl(fi(t))]), l && Sn(
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
    e.emitted[o] = !0, Sn(
      d,
      e,
      6,
      a
    );
  }
}
const fm = /* @__PURE__ */ new WeakMap();
function Nh(e, t, n = !1) {
  const i = n ? fm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!Ne(e)) {
    const l = (d) => {
      const u = Nh(d, t, !0);
      u && (o = !0, mt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Je(e) && i.set(e, null), null) : (_e(r) ? r.forEach((l) => s[l] = null) : mt(s, r), Je(e) && i.set(e, s), s);
}
function hl(e, t) {
  return !e || !Qo(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, fi(t)) || Ze(e, t));
}
function nd(e) {
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
    ctx: x,
    inheritAttrs: A
  } = e, O = eo(e);
  let D, F;
  try {
    if (n.shapeFlag & 4) {
      const I = a || i, P = I;
      D = Bn(
        d.call(
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
      D = Bn(
        I.length > 1 ? I(
          h,
          { attrs: o, slots: s, emit: l }
        ) : I(
          h,
          null
        )
      ), F = t.props ? o : hm(o);
    }
  } catch (I) {
    si.length = 0, ol(I, e, 1), D = ye(xt);
  }
  let K = D;
  if (F && A !== !1) {
    const I = Object.keys(F), { shapeFlag: P } = K;
    I.length && P & 7 && (r && I.some(el) && (F = pm(
      F,
      r
    )), K = Bi(K, F, !1, !0));
  }
  if (n.dirs && (K = Bi(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = ul(K.type) && to(K) || K;
    Jr(I, n.transition);
  }
  return D = K, eo(O), D;
}
const hm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, pm = (e, t) => {
  const n = {};
  for (const i in e)
    (!el(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function vm(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? id(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const S = u[h];
        if (Lh(s, i, S) && !hl(d, S))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? id(i, s, d) : !0 : !!s;
  return !1;
}
function id(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Lh(t, e, r) && !hl(n, r))
      return !0;
  }
  return !1;
}
function Lh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Je(i) && Je(a) ? !Ui(i, a) : i !== a;
}
function gm({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Rh = {}, Ih = () => Object.create(Rh), Ph = (e) => Object.getPrototypeOf(e) === Rh;
function mm(e, t, n, i = !1) {
  const a = {}, r = Ih();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Dh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ bg(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function bm(e, t, n, i) {
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
        if (hl(e.emitsOptions, S))
          continue;
        const E = t[S];
        if (l)
          if (Ze(r, S))
            E !== r[S] && (r[S] = E, d = !0);
          else {
            const x = Bt(S);
            a[x] = Ac(
              l,
              o,
              x,
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
    Dh(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !Ze(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = fi(h)) === h || !Ze(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = Ac(
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
  d && ti(e.attrs, "set", "");
}
function Dh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Rr(l))
        continue;
      const d = t[l];
      let u;
      a && Ze(a, u = Bt(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : hl(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ We(n), d = o || Ge;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = Ac(
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
function Ac(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Ze(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && Ne(l)) {
        const { propsDefaults: d } = a;
        if (n in d)
          i = d[n];
        else {
          const u = gs(a);
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
    ] && (i === "" || i === fi(n)) && (i = !0));
  }
  return i;
}
const ym = /* @__PURE__ */ new WeakMap();
function $h(e, t, n = !1) {
  const i = n ? ym : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!Ne(e)) {
    const u = (h) => {
      l = !0;
      const [S, E] = $h(h, t, !0);
      mt(s, S), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Je(e) && i.set(e, Ha), Ha;
  if (_e(r))
    for (let u = 0; u < r.length; u++) {
      const h = Bt(r[u]);
      ad(h) && (s[h] = Ge);
    }
  else if (r)
    for (const u in r) {
      const h = Bt(u);
      if (ad(h)) {
        const S = r[u], E = s[h] = _e(S) || Ne(S) ? { type: S } : mt({}, S), x = E.type;
        let A = !1, O = !0;
        if (_e(x))
          for (let D = 0; D < x.length; ++D) {
            const F = x[D], K = Ne(F) && F.name;
            if (K === "Boolean") {
              A = !0;
              break;
            } else K === "String" && (O = !1);
          }
        else
          A = Ne(x) && x.name === "Boolean";
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
function ad(e) {
  return e[0] !== "$" && !Rr(e);
}
const lu = (e) => e === "_" || e === "_ctx" || e === "$stable", cu = (e) => _e(e) ? e.map(Bn) : [Bn(e)], _m = (e, t, n) => {
  if (t._n)
    return t;
  const i = Oe((...a) => cu(t(...a)), n);
  return i._c = !1, i;
}, Mh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (lu(a)) continue;
    const r = e[a];
    if (Ne(r))
      t[a] = _m(a, r, i);
    else if (r != null) {
      const s = cu(r);
      t[a] = () => s;
    }
  }
}, Fh = (e, t) => {
  const n = cu(t);
  e.slots.default = () => n;
}, zh = (e, t, n) => {
  for (const i in t)
    (n || !lu(i)) && (e[i] = t[i]);
}, wm = (e, t, n) => {
  const i = e.slots = Ih();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (zh(i, t, n), n && Ff(i, "_", a, !0)) : Mh(t, i);
  } else t && Fh(e, t);
}, Sm = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Ge;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : zh(a, t, n) : (r = !t.$stable, Mh(t, a)), s = t;
  } else t && (Fh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !lu(o) && s[o] == null && delete a[o];
}, qt = km;
function Cm(e) {
  return Tm(e);
}
function Tm(e, t) {
  const n = al();
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
    setScopeId: E = _n,
    insertStaticContent: x
  } = e, A = (v, C, k, L = null, N = null, z = null, G = void 0, V = null, Z = !!C.dynamicChildren) => {
    if (v === C)
      return;
    v && !da(v, C) && (L = rt(v), ve(v, N, z, !0), v = null), C.patchFlag === -2 && (Z = !1, C.dynamicChildren = null);
    const { type: H, ref: ue, shapeFlag: oe } = C;
    switch (H) {
      case vs:
        O(v, C, k, L);
        break;
      case xt:
        D(v, C, k, L);
        break;
      case Ws:
        v == null && F(C, k, L, G);
        break;
      case fe:
        Q(
          v,
          C,
          k,
          L,
          N,
          z,
          G,
          V,
          Z
        );
        break;
      default:
        oe & 1 ? P(
          v,
          C,
          k,
          L,
          N,
          z,
          G,
          V,
          Z
        ) : oe & 6 ? ie(
          v,
          C,
          k,
          L,
          N,
          z,
          G,
          V,
          Z
        ) : (oe & 64 || oe & 128) && H.process(
          v,
          C,
          k,
          L,
          N,
          z,
          G,
          V,
          Z,
          Rt
        );
    }
    ue != null && N ? Dr(ue, v && v.ref, z, C || v, !C) : ue == null && v && v.ref != null && Dr(v.ref, null, z, v, !0);
  }, O = (v, C, k, L) => {
    if (v == null)
      i(
        C.el = o(C.children),
        k,
        L
      );
    else {
      const N = C.el = v.el;
      C.children !== v.children && d(N, C.children);
    }
  }, D = (v, C, k, L) => {
    v == null ? i(
      C.el = l(C.children || ""),
      k,
      L
    ) : C.el = v.el;
  }, F = (v, C, k, L) => {
    [v.el, v.anchor] = x(
      v.children,
      C,
      k,
      L,
      v.el,
      v.anchor
    );
  }, K = ({ el: v, anchor: C }, k, L) => {
    let N;
    for (; v && v !== C; )
      N = S(v), i(v, k, L), v = N;
    i(C, k, L);
  }, I = ({ el: v, anchor: C }) => {
    let k;
    for (; v && v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, P = (v, C, k, L, N, z, G, V, Z) => {
    if (C.type === "svg" ? G = "svg" : C.type === "math" && (G = "mathml"), v == null)
      ce(
        C,
        k,
        L,
        N,
        z,
        G,
        V,
        Z
      );
    else {
      const H = v.el && v.el._isVueCE ? v.el : null;
      try {
        H && H._beginPatch(), X(
          v,
          C,
          N,
          z,
          G,
          V,
          Z
        );
      } finally {
        H && H._endPatch();
      }
    }
  }, ce = (v, C, k, L, N, z, G, V) => {
    let Z, H;
    const { props: ue, shapeFlag: oe, transition: me, dirs: Ce } = v;
    if (Z = v.el = s(
      v.type,
      z,
      ue && ue.is,
      ue
    ), oe & 8 ? u(Z, v.children) : oe & 16 && de(
      v.children,
      Z,
      null,
      L,
      N,
      zl(v, z),
      G,
      V
    ), Ce && na(v, null, L, "created"), J(Z, v, v.scopeId, G, L), ue) {
      for (const Me in ue)
        Me !== "value" && !Rr(Me) && r(Z, Me, null, ue[Me], z, L);
      "value" in ue && r(Z, "value", null, ue.value, z), (H = ue.onVnodeBeforeMount) && Dn(H, L, v);
    }
    Ce && na(v, null, L, "beforeMount");
    const xe = Em(N, me);
    xe && me.beforeEnter(Z), i(Z, C, k), ((H = ue && ue.onVnodeMounted) || xe || Ce) && qt(() => {
      H && Dn(H, L, v), xe && me.enter(Z), Ce && na(v, null, L, "mounted");
    }, N);
  }, J = (v, C, k, L, N) => {
    if (k && E(v, k), L)
      for (let z = 0; z < L.length; z++)
        E(v, L[z]);
    if (N) {
      let z = N.subTree;
      if (C === z || jh(z.type) && (z.ssContent === C || z.ssFallback === C)) {
        const G = N.vnode;
        J(
          v,
          G,
          G.scopeId,
          G.slotScopeIds,
          N.parent
        );
      }
    }
  }, de = (v, C, k, L, N, z, G, V, Z = 0) => {
    for (let H = Z; H < v.length; H++) {
      const ue = v[H] = V ? ei(v[H]) : Bn(v[H]);
      A(
        null,
        ue,
        C,
        k,
        L,
        N,
        z,
        G,
        V
      );
    }
  }, X = (v, C, k, L, N, z, G) => {
    const V = C.el = v.el;
    let { patchFlag: Z, dynamicChildren: H, dirs: ue } = C;
    Z |= v.patchFlag & 16;
    const oe = v.props || Ge, me = C.props || Ge;
    let Ce;
    if (k && ia(k, !1), (Ce = me.onVnodeBeforeUpdate) && Dn(Ce, k, C, v), ue && na(C, v, k, "beforeUpdate"), k && ia(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    H && (!v.dynamicChildren || v.dynamicChildren.length !== H.length) && (Z = 0, G = !1, H = null), (oe.innerHTML && me.innerHTML == null || oe.textContent && me.textContent == null) && u(V, ""), H ? re(
      v.dynamicChildren,
      H,
      V,
      k,
      L,
      zl(C, N),
      z
    ) : G || ne(
      v,
      C,
      V,
      null,
      k,
      L,
      zl(C, N),
      z,
      !1
    ), Z > 0) {
      if (Z & 16)
        be(V, oe, me, k, N);
      else if (Z & 2 && oe.class !== me.class && r(V, "class", null, me.class, N), Z & 4 && r(V, "style", oe.style, me.style, N), Z & 8) {
        const xe = C.dynamicProps;
        for (let Me = 0; Me < xe.length; Me++) {
          const Ie = xe[Me], Ye = oe[Ie], st = me[Ie];
          (st !== Ye || Ie === "value") && r(V, Ie, Ye, st, N, k);
        }
      }
      Z & 1 && v.children !== C.children && u(V, C.children);
    } else !G && H == null && be(V, oe, me, k, N);
    ((Ce = me.onVnodeUpdated) || ue) && qt(() => {
      Ce && Dn(Ce, k, C, v), ue && na(C, v, k, "updated");
    }, L);
  }, re = (v, C, k, L, N, z, G) => {
    for (let V = 0; V < C.length; V++) {
      const Z = v[V], H = C[V], ue = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === fe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !da(Z, H) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? h(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        Z,
        H,
        ue,
        null,
        L,
        N,
        z,
        G,
        !0
      );
    }
  }, be = (v, C, k, L, N) => {
    if (C !== k) {
      if (C !== Ge)
        for (const z in C)
          !Rr(z) && !(z in k) && r(
            v,
            z,
            C[z],
            null,
            N,
            L
          );
      for (const z in k) {
        if (Rr(z)) continue;
        const G = k[z], V = C[z];
        G !== V && z !== "value" && r(v, z, V, G, N, L);
      }
      "value" in k && r(v, "value", C.value, k.value, N);
    }
  }, Q = (v, C, k, L, N, z, G, V, Z) => {
    const H = C.el = v ? v.el : o(""), ue = C.anchor = v ? v.anchor : o("");
    let { patchFlag: oe, dynamicChildren: me, slotScopeIds: Ce } = C;
    Ce && (V = V ? V.concat(Ce) : Ce), v == null ? (i(H, k, L), i(ue, k, L), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      k,
      ue,
      N,
      z,
      G,
      V,
      Z
    )) : oe > 0 && oe & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === me.length ? (re(
      v.dynamicChildren,
      me,
      k,
      N,
      z,
      G,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || N && C === N.subTree) && uu(
      v,
      C,
      !0
      /* shallow */
    )) : ne(
      v,
      C,
      k,
      ue,
      N,
      z,
      G,
      V,
      Z
    );
  }, ie = (v, C, k, L, N, z, G, V, Z) => {
    C.slotScopeIds = V, v == null ? C.shapeFlag & 512 ? N.ctx.activate(
      C,
      k,
      L,
      G,
      Z
    ) : $(
      C,
      k,
      L,
      N,
      z,
      G,
      Z
    ) : M(v, C, Z);
  }, $ = (v, C, k, L, N, z, G) => {
    const V = v.component = Lm(
      v,
      L,
      N
    );
    if (dl(v) && (V.ctx.renderer = Rt), Rm(V, !1, G), V.asyncDep) {
      if (N && N.registerDep(V, Y, G), !v.el) {
        const Z = V.subTree = ye(xt);
        D(null, Z, C, k), v.placeholder = Z.el;
      }
    } else
      Y(
        V,
        v,
        C,
        k,
        N,
        z,
        G
      );
  }, M = (v, C, k) => {
    const L = C.component = v.component;
    if (vm(v, C, k))
      if (L.asyncDep && !L.asyncResolved) {
        ae(L, C, k);
        return;
      } else
        L.next = C, L.update();
    else
      C.el = v.el, L.vnode = C;
  }, Y = (v, C, k, L, N, z, G) => {
    const V = () => {
      if (v.isMounted) {
        let { next: oe, bu: me, u: Ce, parent: xe, vnode: Me } = v;
        {
          const it = Uh(v);
          if (it) {
            oe && (oe.el = Me.el, ae(v, oe, G)), it.asyncDep.then(() => {
              qt(() => {
                v.isUnmounted || H();
              }, N);
            });
            return;
          }
        }
        let Ie = oe, Ye;
        ia(v, !1), oe ? (oe.el = Me.el, ae(v, oe, G)) : oe = Me, me && Ks(me), (Ye = oe.props && oe.props.onVnodeBeforeUpdate) && Dn(Ye, xe, oe, Me), ia(v, !0);
        const st = nd(v), At = v.subTree;
        v.subTree = st, A(
          At,
          st,
          // parent may have changed if it's in a teleport
          h(At.el),
          // anchor may have changed if it's in a fragment
          rt(At),
          v,
          N,
          z
        ), oe.el = st.el, Ie === null && gm(v, st.el), Ce && qt(Ce, N), (Ye = oe.props && oe.props.onVnodeUpdated) && qt(
          () => Dn(Ye, xe, oe, Me),
          N
        );
      } else {
        let oe;
        const { el: me, props: Ce } = C, { bm: xe, m: Me, parent: Ie, root: Ye, type: st } = v, At = Ga(C);
        ia(v, !1), xe && Ks(xe), !At && (oe = Ce && Ce.onVnodeBeforeMount) && Dn(oe, Ie, C), ia(v, !0);
        {
          Ye.ce && Ye.ce._hasShadowRoot() && Ye.ce._injectChildStyle(
            st,
            v.parent ? v.parent.type : void 0
          );
          const it = v.subTree = nd(v);
          A(
            null,
            it,
            k,
            L,
            v,
            N,
            z
          ), C.el = it.el;
        }
        if (Me && qt(Me, N), !At && (oe = Ce && Ce.onVnodeMounted)) {
          const it = C;
          qt(
            () => Dn(oe, Ie, it),
            N
          );
        }
        (C.shapeFlag & 256 || Ie && Ga(Ie.vnode) && Ie.vnode.shapeFlag & 256) && v.a && qt(v.a, N), v.isMounted = !0, C = k = L = null;
      }
    };
    v.scope.on();
    const Z = v.effect = new jf(V);
    v.scope.off();
    const H = v.update = Z.run.bind(Z), ue = v.job = Z.runIfDirty.bind(Z);
    ue.i = v, ue.id = v.uid, Z.scheduler = () => au(ue), ia(v, !0), H();
  }, ae = (v, C, k) => {
    C.component = v;
    const L = v.vnode.props;
    v.vnode = C, v.next = null, bm(v, C.props, L, k), Sm(v, C.children, k), li(), Ku(v), ci();
  }, ne = (v, C, k, L, N, z, G, V, Z = !1) => {
    const H = v && v.children, ue = v ? v.shapeFlag : 0, oe = C.children, { patchFlag: me, shapeFlag: Ce } = C;
    if (me > 0) {
      if (me & 128) {
        he(
          H,
          oe,
          k,
          L,
          N,
          z,
          G,
          V,
          Z
        );
        return;
      } else if (me & 256) {
        pe(
          H,
          oe,
          k,
          L,
          N,
          z,
          G,
          V,
          Z
        );
        return;
      }
    }
    Ce & 8 ? (ue & 16 && lt(H, N, z), oe !== H && u(k, oe)) : ue & 16 ? Ce & 16 ? he(
      H,
      oe,
      k,
      L,
      N,
      z,
      G,
      V,
      Z
    ) : lt(H, N, z, !0) : (ue & 8 && u(k, ""), Ce & 16 && de(
      oe,
      k,
      L,
      N,
      z,
      G,
      V,
      Z
    ));
  }, pe = (v, C, k, L, N, z, G, V, Z) => {
    v = v || Ha, C = C || Ha;
    const H = v.length, ue = C.length, oe = Math.min(H, ue);
    let me;
    for (me = 0; me < oe; me++) {
      const Ce = C[me] = Z ? ei(C[me]) : Bn(C[me]);
      A(
        v[me],
        Ce,
        k,
        null,
        N,
        z,
        G,
        V,
        Z
      );
    }
    H > ue ? lt(
      v,
      N,
      z,
      !0,
      !1,
      oe
    ) : de(
      C,
      k,
      L,
      N,
      z,
      G,
      V,
      Z,
      oe
    );
  }, he = (v, C, k, L, N, z, G, V, Z) => {
    let H = 0;
    const ue = C.length;
    let oe = v.length - 1, me = ue - 1;
    for (; H <= oe && H <= me; ) {
      const Ce = v[H], xe = C[H] = Z ? ei(C[H]) : Bn(C[H]);
      if (da(Ce, xe))
        A(
          Ce,
          xe,
          k,
          null,
          N,
          z,
          G,
          V,
          Z
        );
      else
        break;
      H++;
    }
    for (; H <= oe && H <= me; ) {
      const Ce = v[oe], xe = C[me] = Z ? ei(C[me]) : Bn(C[me]);
      if (da(Ce, xe))
        A(
          Ce,
          xe,
          k,
          null,
          N,
          z,
          G,
          V,
          Z
        );
      else
        break;
      oe--, me--;
    }
    if (H > oe) {
      if (H <= me) {
        const Ce = me + 1, xe = Ce < ue ? C[Ce].el : L;
        for (; H <= me; )
          A(
            null,
            C[H] = Z ? ei(C[H]) : Bn(C[H]),
            k,
            xe,
            N,
            z,
            G,
            V,
            Z
          ), H++;
      }
    } else if (H > me)
      for (; H <= oe; )
        ve(v[H], N, z, !0), H++;
    else {
      const Ce = H, xe = H, Me = /* @__PURE__ */ new Map();
      for (H = xe; H <= me; H++) {
        const vt = C[H] = Z ? ei(C[H]) : Bn(C[H]);
        vt.key != null && Me.set(vt.key, H);
      }
      let Ie, Ye = 0;
      const st = me - xe + 1;
      let At = !1, it = 0;
      const Vt = new Array(st);
      for (H = 0; H < st; H++) Vt[H] = 0;
      for (H = Ce; H <= oe; H++) {
        const vt = v[H];
        if (Ye >= st) {
          ve(vt, N, z, !0);
          continue;
        }
        let Gt;
        if (vt.key != null)
          Gt = Me.get(vt.key);
        else
          for (Ie = xe; Ie <= me; Ie++)
            if (Vt[Ie - xe] === 0 && da(vt, C[Ie])) {
              Gt = Ie;
              break;
            }
        Gt === void 0 ? ve(vt, N, z, !0) : (Vt[Gt - xe] = H + 1, Gt >= it ? it = Gt : At = !0, A(
          vt,
          C[Gt],
          k,
          null,
          N,
          z,
          G,
          V,
          Z
        ), Ye++);
      }
      const Gn = At ? Am(Vt) : Ha;
      for (Ie = Gn.length - 1, H = st - 1; H >= 0; H--) {
        const vt = xe + H, Gt = C[vt], Ki = C[vt + 1], Wi = vt + 1 < ue ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ki.el || Bh(Ki)
        ) : L;
        Vt[H] === 0 ? A(
          null,
          Gt,
          k,
          Wi,
          N,
          z,
          G,
          V,
          Z
        ) : At && (Ie < 0 || H !== Gn[Ie] ? Se(Gt, k, Wi, 2) : Ie--);
      }
    }
  }, Se = (v, C, k, L, N = null) => {
    const { el: z, type: G, transition: V, children: Z, shapeFlag: H } = v;
    if (H & 6) {
      Se(v.component.subTree, C, k, L);
      return;
    }
    if (H & 128) {
      v.suspense.move(C, k, L);
      return;
    }
    if (H & 64) {
      G.move(v, C, k, Rt);
      return;
    }
    if (G === fe) {
      i(z, C, k);
      for (let oe = 0; oe < Z.length; oe++)
        Se(Z[oe], C, k, L);
      i(v.anchor, C, k);
      return;
    }
    if (G === Ws) {
      K(v, C, k);
      return;
    }
    if (L !== 2 && H & 1 && V)
      if (L === 0)
        V.persisted && !z[bn] ? i(z, C, k) : (V.beforeEnter(z), i(z, C, k), qt(() => V.enter(z), N));
      else {
        const { leave: oe, delayLeave: me, afterLeave: Ce } = V, xe = () => {
          v.ctx.isUnmounted ? a(z) : i(z, C, k);
        }, Me = () => {
          const Ie = z._isLeaving || !!z[bn];
          z._isLeaving && z[bn](
            !0
            /* cancelled */
          ), V.persisted && !Ie ? xe() : oe(z, () => {
            xe(), Ce && Ce();
          });
        };
        me ? me(z, xe, Me) : Me();
      }
    else
      i(z, C, k);
  }, ve = (v, C, k, L = !1, N = !1) => {
    const {
      type: z,
      props: G,
      ref: V,
      children: Z,
      dynamicChildren: H,
      shapeFlag: ue,
      patchFlag: oe,
      dirs: me,
      cacheIndex: Ce,
      memo: xe
    } = v;
    if (oe === -2 && (N = !1), V != null && (li(), Dr(V, null, k, v, !0), ci()), Ce != null && (C.renderCache[Ce] = void 0), ue & 256) {
      C.ctx.deactivate(v);
      return;
    }
    const Me = ue & 1 && me, Ie = !Ga(v);
    let Ye;
    if (Ie && (Ye = G && G.onVnodeBeforeUnmount) && Dn(Ye, C, v), ue & 6)
      at(v.component, k, L);
    else {
      if (ue & 128) {
        v.suspense.unmount(k, L);
        return;
      }
      Me && na(v, null, C, "beforeUnmount"), ue & 64 ? v.type.remove(
        v,
        C,
        k,
        Rt,
        L
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== fe || oe > 0 && oe & 64) ? lt(
        H,
        C,
        k,
        !1,
        !0
      ) : (z === fe && oe & 384 || !N && ue & 16) && lt(Z, C, k), L && je(v);
    }
    const st = xe != null && Ce == null;
    (Ie && (Ye = G && G.onVnodeUnmounted) || Me || st) && qt(() => {
      Ye && Dn(Ye, C, v), Me && na(v, null, C, "unmounted"), st && (v.el = null);
    }, k);
  }, je = (v) => {
    const { type: C, el: k, anchor: L, transition: N } = v;
    if (C === fe) {
      Ee(k, L);
      return;
    }
    if (C === Ws) {
      I(v);
      return;
    }
    const z = () => {
      a(k), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (v.shapeFlag & 1 && N && !N.persisted) {
      const { leave: G, delayLeave: V } = N, Z = () => G(k, z);
      V ? V(v.el, z, Z) : Z();
    } else
      z();
  }, Ee = (v, C) => {
    let k;
    for (; v !== C; )
      k = S(v), a(v), v = k;
    a(C);
  }, at = (v, C, k) => {
    const { bum: L, scope: N, job: z, subTree: G, um: V, m: Z, a: H } = v;
    rd(Z), rd(H), L && Ks(L), N.stop(), z && (z.flags |= 8, ve(G, v, C, k)), V && qt(V, C), qt(() => {
      v.isUnmounted = !0;
    }, C);
  }, lt = (v, C, k, L = !1, N = !1, z = 0) => {
    for (let G = z; G < v.length; G++)
      ve(v[G], C, k, L, N);
  }, rt = (v) => {
    if (v.shapeFlag & 6)
      return rt(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const C = S(v.anchor || v.el), k = C && C[dh];
    return k ? S(k) : C;
  };
  let Et = !1;
  const qe = (v, C, k) => {
    let L;
    v == null ? C._vnode && (ve(C._vnode, null, null, !0), L = C._vnode.component) : A(
      C._vnode || null,
      v,
      C,
      null,
      null,
      null,
      k
    ), C._vnode = v, Et || (Et = !0, Ku(L), lh(), Et = !1);
  }, Rt = {
    p: A,
    um: ve,
    m: Se,
    r: je,
    mt: $,
    mc: de,
    pc: ne,
    pbc: re,
    n: rt,
    o: e
  };
  return {
    render: qe,
    hydrate: void 0,
    createApp: um(qe)
  };
}
function zl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ia({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Em(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function uu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (_e(i) && _e(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = ei(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && uu(s, o)), o.type === vs && (o.patchFlag === -1 && (o = a[r] = ei(o)), o.el = s.el), o.type === xt && !o.el && (o.el = s.el);
    }
}
function Am(e) {
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
function Uh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Uh(t);
}
function rd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Bh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Bh(t.subTree) : null;
}
const jh = (e) => e.__isSuspense;
function km(e, t) {
  t && t.pendingBranch ? _e(e) ? t.effects.push(...e) : t.effects.push(e) : oh(e);
}
const fe = /* @__PURE__ */ Symbol.for("v-fgt"), vs = /* @__PURE__ */ Symbol.for("v-txt"), xt = /* @__PURE__ */ Symbol.for("v-cmt"), Ws = /* @__PURE__ */ Symbol.for("v-stc"), si = [];
let ln = null;
function _(e = !1) {
  si.push(ln = e ? null : []);
}
function du() {
  si.pop(), ln = si[si.length - 1] || null;
}
let Qr = 1;
function ro(e, t = !1) {
  Qr += e, e < 0 && ln && t && (ln.hasOnce = !0);
}
function Hh(e) {
  return e.dynamicChildren = Qr > 0 ? ln || Ha : null, du(), Qr > 0 && ln && ln.push(e), e;
}
function T(e, t, n, i, a, r) {
  return Hh(
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
  return Hh(
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
function es(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function da(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vh = ({ key: e }) => e ?? null, qs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? nt(e) || /* @__PURE__ */ jt(e) || Ne(e) ? { i: Nt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === fe ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vh(t),
    ref: t && qs(t),
    scopeId: ll,
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
  return o ? (so(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= nt(n) ? 8 : 16), Qr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ln && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && ln.push(l), l;
}
const ye = Om;
function Om(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Sh) && (e = xt), es(e)) {
    const o = Bi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && so(o, n), Qr > 0 && !r && ln && (o.shapeFlag & 6 ? ln[ln.indexOf(e)] = o : ln.push(o)), o.patchFlag = -2, o;
  }
  if ($m(e) && (e = e.__vccOpts), t) {
    t = ts(t);
    let { class: o, style: l } = t;
    o && !nt(o) && (t.class = we(o)), Je(l) && (/* @__PURE__ */ iu(l) && !_e(l) && (l = mt({}, l)), t.style = cn(l));
  }
  const s = nt(e) ? 1 : jh(e) ? 128 : ul(e) ? 64 : Je(e) ? 4 : Ne(e) ? 2 : 0;
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
function ts(e) {
  return e ? /* @__PURE__ */ iu(e) || Ph(e) ? mt({}, e) : e : null;
}
function Bi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? Ht(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Vh(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? _e(r) ? r.concat(qs(t)) : [r, qs(t)] : qs(t)
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
    patchFlag: t && e.type !== fe ? s === -1 ? 16 : s | 16 : s,
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
  return l && i && Jr(
    u,
    l.clone(u)
  ), u;
}
function Re(e = " ", t = 0) {
  return ye(vs, null, e, t);
}
function j(e = "", t = !1) {
  return t ? (_(), Fe(xt, null, e)) : ye(xt, null, e);
}
function Bn(e) {
  return e == null || typeof e == "boolean" ? ye(xt) : _e(e) ? ye(
    fe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : es(e) ? ei(e) : ye(vs, null, String(e));
}
function ei(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bi(e);
}
function so(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (_e(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), so(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Ph(t) ? t._ctx = Nt : a === 3 && Nt && (Nt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Ne(t)) {
    if (i & 65) {
      so(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Nt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Re(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ht(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = we([t.class, i.class]));
      else if (a === "style")
        t.style = cn([t.style, i.style]);
      else if (Qo(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(_e(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !el(a) && (t[a] = s);
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
const xm = kh();
let Nm = 0;
function Lm(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || xm, r = {
    uid: Nm++,
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
    scope: new Qv(
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
    propsOptions: $h(i, a),
    emitsOptions: Nh(i, a),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = dm.bind(null, r), e.ce && e.ce(r), r;
}
let Ut = null;
const Sa = () => Ut || Nt;
let oo, ns;
{
  const e = al(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  oo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ut = n
  ), ns = t(
    "__VUE_SSR_SETTERS__",
    (n) => is = n
  );
}
const gs = (e) => {
  const t = Ut;
  return oo(e), e.scope.on(), () => {
    e.scope.off(), oo(t);
  };
}, sd = () => {
  Ut && Ut.scope.off(), oo(null);
};
function Gh(e) {
  return e.vnode.shapeFlag & 4;
}
let is = !1;
function Rm(e, t = !1, n = !1) {
  t && ns(t);
  const { props: i, children: a } = e.vnode, r = Gh(e);
  mm(e, i, r, t), wm(e, a, n || t);
  const s = r ? Im(e, t) : void 0;
  return t && ns(!1), s;
}
function Im(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, em);
  const { setup: i } = n;
  if (i) {
    li();
    const a = e.setupContext = i.length > 1 ? Wh(e) : null, r = gs(e), s = hs(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = Df(s);
    if (ci(), r(), (o || e.sp) && !Ga(e) && bh(e), o) {
      if (s.then(sd, sd), t)
        return s.then((l) => {
          ns(!0);
          try {
            od(e, l, t);
          } finally {
            ns(!1);
          }
        }).catch((l) => {
          ol(l, e, 0);
        });
      e.asyncDep = s;
    } else
      od(e, s);
  } else
    Kh(e);
}
function od(e, t, n) {
  Ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = ah(t)), Kh(e);
}
function Kh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || _n);
  {
    const a = gs(e);
    li();
    try {
      am(e);
    } finally {
      ci(), a();
    }
  }
}
const Pm = {
  get(e, t) {
    return Ft(e, "get", ""), e[t];
  }
};
function Wh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Pm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function pl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ah(yg(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in $r)
        return $r[n](e);
    },
    has(t, n) {
      return n in t || n in $r;
    }
  })) : e.proxy;
}
function Dm(e, t = !0) {
  return Ne(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $m(e) {
  return Ne(e) && "__vccOpts" in e;
}
const W = (e, t) => /* @__PURE__ */ Eg(e, t, is);
function Xt(e, t, n) {
  try {
    ro(-1);
    const i = arguments.length;
    return i === 2 ? Je(t) && !_e(t) ? es(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && es(n) && (n = [n]), ye(e, t, n));
  } finally {
    ro(1);
  }
}
const Mm = "3.5.42", Fm = _n;
let kc;
const ld = typeof window < "u" && window.trustedTypes;
if (ld)
  try {
    kc = /* @__PURE__ */ ld.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const qh = kc ? (e) => kc.createHTML(e) : (e) => e, zm = "http://www.w3.org/2000/svg", Um = "http://www.w3.org/1998/Math/MathML", Qn = typeof document < "u" ? document : null, cd = Qn && /* @__PURE__ */ Qn.createElement("template"), Bm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? Qn.createElementNS(zm, e) : t === "mathml" ? Qn.createElementNS(Um, e) : n ? Qn.createElement(e, { is: n }) : Qn.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => Qn.createTextNode(e),
  createComment: (e) => Qn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Qn.querySelector(e),
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
      cd.innerHTML = qh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = cd.content;
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
}, ki = "transition", br = "animation", as = /* @__PURE__ */ Symbol("_vtc"), Yh = {
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
}, jm = /* @__PURE__ */ mt(
  {},
  hh,
  Yh
), Hm = (e) => (e.displayName = "Transition", e.props = jm, e), Vm = /* @__PURE__ */ Hm(
  (e, { slots: t }) => Xt(Hg, Gm(e), t)
), aa = (e, t = []) => {
  _e(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ud = (e) => e ? _e(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Gm(e) {
  const t = {};
  for (const Q in e)
    Q in Yh || (t[Q] = e[Q]);
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
  } = e, x = Km(a), A = x && x[0], O = x && x[1], {
    onBeforeEnter: D,
    onEnter: F,
    onEnterCancelled: K,
    onLeave: I,
    onLeaveCancelled: P,
    onBeforeAppear: ce = D,
    onAppear: J = F,
    onAppearCancelled: de = K
  } = t, X = (Q, ie, $, M) => {
    Q._enterCancelled = M, ra(Q, ie ? u : o), ra(Q, ie ? d : s), $ && $();
  }, re = (Q, ie) => {
    Q._isLeaving = !1, ra(Q, h), ra(Q, E), ra(Q, S), ie && ie();
  }, be = (Q) => (ie, $) => {
    const M = Q ? J : F, Y = () => X(ie, Q, $);
    aa(M, [ie, Y]), dd(() => {
      ra(ie, Q ? l : r), Yn(ie, Q ? u : o), ud(M) || fd(ie, i, A, Y);
    });
  };
  return mt(t, {
    onBeforeEnter(Q) {
      aa(D, [Q]), Yn(Q, r), Yn(Q, s);
    },
    onBeforeAppear(Q) {
      aa(ce, [Q]), Yn(Q, l), Yn(Q, d);
    },
    onEnter: be(!1),
    onAppear: be(!0),
    onLeave(Q, ie) {
      Q._isLeaving = !0;
      const $ = () => re(Q, ie);
      Yn(Q, h), Q._enterCancelled ? (Yn(Q, S), vd(Q)) : (vd(Q), Yn(Q, S)), dd(() => {
        Q._isLeaving && (ra(Q, h), Yn(Q, E), ud(I) || fd(Q, i, O, $));
      }), aa(I, [Q, $]);
    },
    onEnterCancelled(Q) {
      X(Q, !1, void 0, !0), aa(K, [Q]);
    },
    onAppearCancelled(Q) {
      X(Q, !0, void 0, !0), aa(de, [Q]);
    },
    onLeaveCancelled(Q) {
      re(Q), aa(P, [Q]);
    }
  });
}
function Km(e) {
  if (e == null)
    return null;
  if (Je(e))
    return [Ul(e.enter), Ul(e.leave)];
  {
    const t = Ul(e);
    return [t, t];
  }
}
function Ul(e) {
  return Hv(e);
}
function Yn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[as] || (e[as] = /* @__PURE__ */ new Set())).add(t);
}
function ra(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[as];
  n && (n.delete(t), n.size || (e[as] = void 0));
}
function dd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Wm = 0;
function fd(e, t, n, i) {
  const a = e._endId = ++Wm, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = qm(e, t);
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
function qm(e, t) {
  const n = window.getComputedStyle(e), i = (x) => (n[x] || "").split(", "), a = i(`${ki}Delay`), r = i(`${ki}Duration`), s = hd(a, r), o = i(`${br}Delay`), l = i(`${br}Duration`), d = hd(o, l);
  let u = null, h = 0, S = 0;
  t === ki ? s > 0 && (u = ki, h = s, S = r.length) : t === br ? d > 0 && (u = br, h = d, S = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? ki : br : null, S = u ? u === ki ? r.length : l.length : 0);
  const E = u === ki && /\b(?:transform|all)(?:,|$)/.test(
    i(`${ki}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: S,
    hasTransform: E
  };
}
function hd(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => pd(n) + pd(e[i])));
}
function pd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vd(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ym(e, t, n) {
  const i = e[as];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const lo = /* @__PURE__ */ Symbol("_vod"), Xh = /* @__PURE__ */ Symbol("_vsh"), Wa = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[lo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : yr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), yr(e, !0), i.enter(e)) : i.leave(e, () => {
      yr(e, !1);
    }) : yr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    yr(e, t);
  }
};
function yr(e, t) {
  e.style.display = t ? e[lo] : "none", e[Xh] = !t;
}
const Zh = /* @__PURE__ */ Symbol("");
function Xm(e) {
  const t = Sa();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => co(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? co(t.ce, a) : Oc(t.subTree, a), n(a);
  };
  wh(() => {
    oh(i);
  }), Hi(() => {
    ot(i, _n, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), ps(() => a.disconnect());
  });
}
function Oc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Oc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    co(e.el, t);
  else if (e.type === fe)
    e.children.forEach((n) => Oc(n, t));
  else if (e.type === Ws) {
    let { el: n, anchor: i } = e;
    for (; n && (co(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function co(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = Jv(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Zh] = i;
  }
}
const Zm = /(?:^|;)\s*display\s*:/;
function Jm(e, t, n) {
  const i = e.style, a = nt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (nt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && Or(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && Or(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? eb(
        e,
        s,
        !nt(t) && t ? t[s] : void 0,
        o
      ) || Or(i, s, o) : Or(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[Zh];
      s && (n += ";" + s), i.cssText = n, r = Zm.test(n);
    }
  } else t && e.removeAttribute("style");
  lo in e && (e[lo] = r ? i.display : "", e[Xh] && (i.display = "none"));
}
const $s = /\s*!important$/;
function Or(e, t, n) {
  if (_e(n))
    n.forEach((i) => Or(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    $s.test(n) ? e.setProperty(t, n.replace($s, ""), "important") : e.setProperty(t, n);
  else {
    const i = Qm(e, t);
    $s.test(n) ? e.setProperty(
      fi(i),
      n.replace($s, ""),
      "important"
    ) : e[i] = n;
  }
}
const gd = ["Webkit", "Moz", "ms"], Bl = {};
function Qm(e, t) {
  const n = Bl[t];
  if (n)
    return n;
  let i = Bt(t);
  if (i !== "filter" && i in e)
    return Bl[t] = i;
  i = nl(i);
  for (let a = 0; a < gd.length; a++) {
    const r = gd[a] + i;
    if (r in e)
      return Bl[t] = r;
  }
  return t;
}
function eb(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && nt(i) && n === i;
}
const md = "http://www.w3.org/1999/xlink";
function bd(e, t, n, i, a, r = Yv(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(md, t.slice(6, t.length)) : e.setAttributeNS(md, t, n) : n == null || r && !zf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : On(n) ? String(n) : n
  );
}
function yd(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? qh(n) : n);
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
    o === "boolean" ? n = zf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
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
function tb(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const _d = /* @__PURE__ */ Symbol("_vei");
function nb(e, t, n, i, a = null) {
  const r = e[_d] || (e[_d] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = rb(t);
    if (i) {
      const d = r[t] = lb(
        i,
        a
      );
      fa(e, o, d, l);
    } else s && (tb(e, o, s, l), r[t] = void 0);
  }
}
const ib = /(Once|Passive|Capture)$/, ab = /^on:?(?:Once|Passive|Capture)$/;
function rb(e) {
  let t, n;
  for (; (n = e.match(ib)) && !ab.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : fi(e.slice(2)), t];
}
let jl = 0;
const sb = /* @__PURE__ */ Promise.resolve(), ob = () => jl || (sb.then(() => jl = 0), jl = Date.now());
function lb(e, t) {
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
        d && Sn(
          d,
          t,
          5,
          o
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
  return n.value = e, n.attached = ob(), n;
}
const wd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, cb = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? Ym(e, i, s) : t === "style" ? Jm(e, n, i) : Qo(t) ? el(t) || nb(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ub(e, t, i, s)) ? (yd(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && bd(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (db(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !nt(i))) ? yd(e, Bt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), bd(e, t, i, s));
};
function ub(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && wd(t) && Ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return wd(t) && nt(n) ? !1 : t in e;
}
function db(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Bt(t);
  return Array.isArray(n) ? n.some((a) => Bt(a) === i) : Object.keys(n).some((a) => Bt(a) === i);
}
const uo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return _e(t) ? (n) => Ks(t, n) : t;
};
function fb(e) {
  e.target.composing = !0;
}
function Sd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const pa = /* @__PURE__ */ Symbol("_assign"), Ms = /* @__PURE__ */ Symbol("_initialValue");
function Hl(e, t, n) {
  return t && (e = e.trim()), n && (e = il(e)), e;
}
const an = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[Ms] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ms] = e.defaultValue.replace(/\r\n?/g, `
`))), e[pa] = uo(a);
    const r = i || a.props && a.props.type === "number";
    fa(e, t ? "change" : "input", (s) => {
      s.target.composing || e[pa](Hl(e.value, n, r));
    }), (n || r) && fa(e, "change", () => {
      e.value = Hl(e.value, n, r);
    }), t || (fa(e, "compositionstart", fb), fa(e, "compositionend", Sd), fa(e, "change", Sd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[Ms];
    delete e[Ms], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[pa](Hl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[pa] = uo(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? il(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, Oi = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, fa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? il(fo(l)) : fo(l)
      ), r = e.multiple, s = r ? _a(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? _e(s) ? a.slice() : a : s
      ];
      try {
        e[pa](s);
      } finally {
        sn(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[pa] = uo(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Cd(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[pa] = uo(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !hb(t, n[1], n[0])) && Cd(e, t);
  }
};
function hb(e, t, n) {
  if (!n || _e(e)) return Ui(e, t);
  if (_a(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Cd(e, t) {
  const n = e.multiple, i = _e(t);
  if (!(n && !i && !_a(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = fo(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = Zv(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Ui(fo(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function fo(e) {
  return "_value" in e ? e._value : e.value;
}
const pb = ["ctrl", "shift", "alt", "meta"], vb = {
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
  exact: (e, t) => pb.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ve = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = vb[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, gb = {
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
    const r = fi(a.key);
    if (t.some(
      (s) => s === r || gb[s] === r
    ))
      return e(a);
  }));
}, mb = /* @__PURE__ */ mt({ patchProp: cb }, Bm);
let Td;
function bb() {
  return Td || (Td = Cm(mb));
}
const yb = ((...e) => {
  const t = bb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = wb(i);
    if (!a) return;
    const r = t._component;
    !Ne(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, _b(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function _b(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wb(e) {
  return nt(e) ? document.querySelector(e) : e;
}
function fu(e, t, n) {
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
function Ed(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Sb(e) {
  if (Array.isArray(e)) return e;
}
function Cb(e, t) {
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
function Tb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eb(e, t) {
  return Sb(e) || Cb(e, t) || Ab(e, t) || Tb();
}
function Ab(e, t) {
  if (e) {
    if (typeof e == "string") return Ed(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ed(e, t) : void 0;
  }
}
const Jh = Object.entries, Ad = Object.setPrototypeOf, kb = Object.isFrozen, Ob = Object.getPrototypeOf, xb = Object.getOwnPropertyDescriptor;
let yt = Object.freeze, Tt = Object.seal, Ba = Object.create, Qh = typeof Reflect < "u" && Reflect, xc = Qh.apply, Nc = Qh.construct;
yt || (yt = function(t) {
  return t;
});
Tt || (Tt = function(t) {
  return t;
});
xc || (xc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
Nc || (Nc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ca = bt(Array.prototype.forEach), Nb = bt(Array.prototype.lastIndexOf), kd = bt(Array.prototype.pop), _r = bt(Array.prototype.push), Lb = bt(Array.prototype.splice), qa = Array.isArray, xr = bt(String.prototype.toLowerCase), Vl = bt(String.prototype.toString), Od = bt(String.prototype.match), wr = bt(String.prototype.replace), xd = bt(String.prototype.indexOf), Rb = bt(String.prototype.trim), Ib = bt(Number.prototype.toString), Pb = bt(Boolean.prototype.toString), Nd = typeof BigInt > "u" ? null : bt(BigInt.prototype.toString), Ld = typeof Symbol > "u" ? null : bt(Symbol.prototype.toString), Zt = bt(Object.prototype.hasOwnProperty), Sr = bt(Object.prototype.toString), Dt = bt(RegExp.prototype.test), sa = Db(TypeError);
function bt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return xc(e, t, i);
  };
}
function Db(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return Nc(e, n);
  };
}
function He(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xr;
  if (Ad && Ad(e, null), !qa(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (kb(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function $b(e) {
  for (let t = 0; t < e.length; t++)
    Zt(e, t) || (e[t] = null);
  return e;
}
function rn(e) {
  const t = Ba(null);
  for (const i of Jh(e)) {
    var n = Eb(i, 2);
    const a = n[0], r = n[1];
    Zt(e, a) && (qa(r) ? t[a] = $b(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = rn(r) : t[a] = r);
  }
  return t;
}
function Mb(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Ib(e);
    case "boolean":
      return Pb(e);
    case "bigint":
      return Nd ? Nd(e) : "0";
    case "symbol":
      return Ld ? Ld(e) : "Symbol()";
    case "undefined":
      return Sr(e);
    case "function":
    case "object": {
      if (e === null)
        return Sr(e);
      const t = e, n = Tn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : Sr(i);
      }
      return Sr(e);
    }
    default:
      return Sr(e);
  }
}
function Tn(e, t) {
  for (; e !== null; ) {
    const i = xb(e, t);
    if (i) {
      if (i.get)
        return bt(i.get);
      if (typeof i.value == "function")
        return bt(i.value);
    }
    e = Ob(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Fb(e) {
  try {
    return Dt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Rd = yt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Gl = yt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Kl = yt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), zb = yt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Wl = yt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ub = yt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Id = yt(["#text"]), Pd = yt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ql = yt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dd = yt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Fs = yt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Bb = Tt(/{{[\w\W]*|^[\w\W]*}}/g), jb = Tt(/<%[\w\W]*|^[\w\W]*%>/g), Hb = Tt(/\${[\w\W]*/g), Vb = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Gb = Tt(/^aria-[\-\w]+$/), $d = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Kb = Tt(/^(?:\w+script|data):/i), Wb = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), qb = Tt(/^html$/i), Yb = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), Md = Tt(/<[/\w!]/g), Fd = Tt(/<[/\w]/g), Xb = Tt(/<\/no(script|embed|frames)/i), Zb = Tt(/\/>/i), nn = {
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
}, ep = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Jb = yt(He({}, ep)), Qb = (function() {
  const e = {};
  return ca(ep, (t) => {
    e[t] = Tt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), yt(e);
})(), ey = function() {
  return typeof window > "u" ? null : window;
}, ty = function(t, n) {
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
}, zd = function() {
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
}, xi = function(t, n, i, a) {
  return Zt(t, n) && qa(t[n]) ? He(a.base ? rn(a.base) : {}, t[n], a.transform) : i;
}, Yl = function(t, n, i) {
  const a = Zt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? rn(a) : i();
};
function tp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ey();
  const t = (ee) => tp(ee);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, S = o.prototype, E = Tn(S, "cloneNode"), x = Tn(S, "remove"), A = Tn(S, "nextSibling"), O = Tn(S, "childNodes"), D = Tn(S, "parentNode"), F = Tn(S, "shadowRoot"), K = Tn(S, "attributes"), I = s && s.prototype ? Tn(s.prototype, "nodeType") : null, P = s && s.prototype ? Tn(s.prototype, "nodeName") : null, ce = s && s.prototype ? Tn(s.prototype, "ownerDocument") : null, J = function(w) {
    return I ? I(w) : w.nodeType;
  }, de = function(w) {
    return P ? P(w) : w.nodeName;
  };
  if (typeof r == "function") {
    const ee = n.createElement("template");
    ee.content && ee.content.ownerDocument && (n = ee.content.ownerDocument);
  }
  let X, re = "", be, Q = !1, ie = 0;
  const $ = function() {
    if (ie > 0)
      throw sa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, M = function(w) {
    $(), ie++;
    try {
      return X.createHTML(w);
    } finally {
      ie--;
    }
  }, Y = function(w) {
    $(), ie++;
    try {
      return X.createScriptURL(w);
    } finally {
      ie--;
    }
  }, ae = function() {
    return Q || (be = ty(h, a), Q = !0), be;
  }, ne = n, pe = ne.implementation, he = ne.createNodeIterator, Se = ne.createDocumentFragment, ve = ne.getElementsByTagName, je = i.importNode;
  let Ee = zd();
  t.isSupported = typeof Jh == "function" && typeof D == "function" && pe && pe.createHTMLDocument !== void 0;
  const at = Bb, lt = jb, rt = Hb, Et = Vb, qe = Gb, Rt = Kb, B = Wb, v = Yb;
  let C = $d, k = null;
  const L = He({}, [...Rd, ...Gl, ...Kl, ...Wl, ...Id]);
  let N = null;
  const z = He({}, [...Pd, ...ql, ...Dd, ...Fs]);
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
  })), V = null, Z = null;
  const H = Object.seal(Ba(null, {
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
  let ue = !0, oe = !0, me = !1, Ce = !0, xe = !1, Me = !0, Ie = !1, Ye = !1, st = null, At = null, it = !1, Vt = !1, Gn = !1, vt = !1, Gt = !0, Ki = !1;
  const Wi = "user-content-";
  let Qa = !0, er = !1, pi = {}, vi = null;
  const bs = He({}, [
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
  let ys = null;
  const tr = He({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ta = null;
  const Ea = He({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gi = "http://www.w3.org/1998/Math/MathML", mi = "http://www.w3.org/2000/svg", Jt = "http://www.w3.org/1999/xhtml";
  let bi = Jt, Aa = !1, ka = null;
  const Sl = He({}, [gi, mi, Jt], Vl), Oa = yt(["mi", "mo", "mn", "ms", "mtext"]);
  let qi = He({}, Oa);
  const nr = yt(["annotation-xml"]);
  let xa = He({}, nr);
  const _s = He({}, ["title", "style", "font", "a", "script"]);
  let yi = null;
  const ws = ["application/xhtml+xml", "text/html"], Ss = "text/html";
  let ct = null, _i = null;
  const Cs = n.createElement("form"), Kt = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, ir = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (_i && _i === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = rn(w), yi = // eslint-disable-next-line unicorn/prefer-includes
    ws.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Ss : w.PARSER_MEDIA_TYPE, ct = yi === "application/xhtml+xml" ? Vl : xr, k = xi(w, "ALLOWED_TAGS", L, {
      transform: ct
    }), N = xi(w, "ALLOWED_ATTR", z, {
      transform: ct
    }), ka = xi(w, "ALLOWED_NAMESPACES", Sl, {
      transform: Vl
    }), Ta = xi(w, "ADD_URI_SAFE_ATTR", Ea, {
      transform: ct,
      base: Ea
    }), ys = xi(w, "ADD_DATA_URI_TAGS", tr, {
      transform: ct,
      base: tr
    }), vi = xi(w, "FORBID_CONTENTS", bs, {
      transform: ct
    }), V = xi(w, "FORBID_TAGS", rn({}), {
      transform: ct
    }), Z = xi(w, "FORBID_ATTR", rn({}), {
      transform: ct
    }), pi = Zt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? rn(w.USE_PROFILES) : w.USE_PROFILES : !1, ue = w.ALLOW_ARIA_ATTR !== !1, oe = w.ALLOW_DATA_ATTR !== !1, me = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Ce = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, xe = w.SAFE_FOR_TEMPLATES || !1, Me = w.SAFE_FOR_XML !== !1, Ie = w.WHOLE_DOCUMENT || !1, Vt = w.RETURN_DOM || !1, Gn = w.RETURN_DOM_FRAGMENT || !1, vt = w.RETURN_TRUSTED_TYPE || !1, it = w.FORCE_BODY || !1, Gt = w.SANITIZE_DOM !== !1, Ki = w.SANITIZE_NAMED_PROPS || !1, Qa = w.KEEP_CONTENT !== !1, er = w.IN_PLACE || !1, C = Fb(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : $d, bi = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Jt, qi = Yl(
      w,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => He({}, Oa)
      // Default built-in map
    ), xa = Yl(
      w,
      "HTML_INTEGRATION_POINTS",
      () => He({}, nr)
      // Default built-in map
    );
    const R = Yl(w, "CUSTOM_ELEMENT_HANDLING", () => Ba(null));
    if (G = Ba(null), Zt(R, "tagNameCheck") && Kt(R.tagNameCheck) && (G.tagNameCheck = R.tagNameCheck), Zt(R, "attributeNameCheck") && Kt(R.attributeNameCheck) && (G.attributeNameCheck = R.attributeNameCheck), Zt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), Tt(G), xe && (oe = !1), Gn && (Vt = !0), pi && (k = He({}, Id), N = Ba(null), pi.html === !0 && (He(k, Rd), He(N, Pd)), pi.svg === !0 && (He(k, Gl), He(N, ql), He(N, Fs)), pi.svgFilters === !0 && (He(k, Kl), He(N, ql), He(N, Fs)), pi.mathMl === !0 && (He(k, Wl), He(N, Dd), He(N, Fs))), H.tagCheck = null, H.attributeCheck = null, Zt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? H.tagCheck = w.ADD_TAGS : qa(w.ADD_TAGS) && (k === L && (k = rn(k)), He(k, w.ADD_TAGS, ct))), Zt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? H.attributeCheck = w.ADD_ATTR : qa(w.ADD_ATTR) && (N === z && (N = rn(N)), He(N, w.ADD_ATTR, ct))), Zt(w, "ADD_FORBID_CONTENTS") && qa(w.ADD_FORBID_CONTENTS) && (vi === bs && (vi = rn(vi)), He(vi, w.ADD_FORBID_CONTENTS, ct)), Qa && (k["#text"] = !0), Ie && He(k, ["html", "head", "body"]), k.table && (He(k, ["tbody"]), delete V.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw sa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw sa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = X;
      X = w.TRUSTED_TYPES_POLICY;
      try {
        re = M("");
      } catch (le) {
        throw X = q, le;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (X = void 0, re = "") : (X === void 0 && (X = ae()), X && typeof re == "string" && (re = M("")));
    yt && yt(w), _i = w;
  }, Yi = He({}, [...Gl, ...Kl, ...zb]), Ts = He({}, [...Wl, ...Ub]), Cl = function(w, R, q) {
    return R.namespaceURI === Jt ? w === "svg" : R.namespaceURI === gi ? w === "svg" && (q === "annotation-xml" || qi[q]) : !!Yi[w];
  }, Tl = function(w, R, q) {
    return R.namespaceURI === Jt ? w === "math" : R.namespaceURI === mi ? w === "math" && xa[q] : !!Ts[w];
  }, Na = function(w, R, q) {
    return R.namespaceURI === mi && !xa[q] || R.namespaceURI === gi && !qi[q] ? !1 : !Ts[w] && (_s[w] || !Yi[w]);
  }, El = function(w) {
    let R = D(w);
    (!R || !R.tagName) && (R = {
      namespaceURI: bi,
      tagName: "template"
    });
    const q = xr(w.tagName), le = xr(R.tagName);
    return ka[w.namespaceURI] ? w.namespaceURI === mi ? Cl(q, R, le) : w.namespaceURI === gi ? Tl(q, R, le) : w.namespaceURI === Jt ? Na(q, R, le) : !!(yi === "application/xhtml+xml" && ka[w.namespaceURI]) : !1;
  }, un = function(w) {
    _r(t.removed, {
      element: w
    });
    try {
      D(w).removeChild(w);
    } catch {
      if (x(w), !D(w))
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
      ca(R, (ge) => {
        _r(le, ge);
      }), ca(le, (ge) => {
        try {
          x(ge);
        } catch {
        }
      });
    }
    const q = K(w);
    if (q)
      for (let le = q.length - 1; le >= 0; --le) {
        const ge = q[le], Ae = ge && ge.name;
        typeof Ae == "string" && Xi(w, ge, Ae);
      }
  }, Nn = function(w, R, q) {
    if (!q)
      try {
        q = R.getAttributeNode(w);
      } catch {
        q = null;
      }
    _r(t.removed, {
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
      if (Vt || Gn)
        try {
          un(R);
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
        const le = R[q], ge = le && le.name;
        typeof ge != "string" || N[ct(ge)] || Xi(w, le, ge);
      }
  }, It = function(w) {
    const R = [w];
    for (; R.length > 0; ) {
      const q = R.pop();
      J(q) === nn.element && ar(q);
      const ge = O(q);
      if (ge)
        for (let Ae = ge.length - 1; Ae >= 0; --Ae)
          R.push(ge[Ae]);
    }
  }, Ji = function(w, R) {
    return Me ? w === "patchsrc" ? !0 : w === "for" && R !== "label" && R !== "output" : !1;
  }, Es = function(w) {
    if (!Me)
      return;
    const R = [w];
    for (; R.length > 0; ) {
      const q = R.pop(), le = J(q);
      if (le === nn.processingInstruction || le === nn.comment && Dt(Fd, q.data)) {
        try {
          x(q);
        } catch {
        }
        continue;
      }
      if (le === nn.element) {
        const Ae = q, et = ct(de(q));
        try {
          Ae.hasAttribute && Ae.hasAttribute("patchsrc") && Ae.removeAttribute("patchsrc"), Ae.hasAttribute && Ae.hasAttribute("for") && Ji("for", et) && Ae.removeAttribute("for");
        } catch {
        }
      }
      const ge = O(q);
      if (ge)
        for (let Ae = ge.length - 1; Ae >= 0; --Ae)
          R.push(ge[Ae]);
    }
  }, As = function(w) {
    let R = null, q = null;
    if (it)
      w = "<remove></remove>" + w;
    else {
      const Ae = Od(w, /^[\r\n\t ]+/);
      q = Ae && Ae[0];
    }
    yi === "application/xhtml+xml" && bi === Jt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const le = X ? M(w) : w;
    if (bi === Jt)
      try {
        R = new u().parseFromString(le, yi);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = pe.createDocument(bi, "template", null);
      try {
        R.documentElement.innerHTML = Aa ? re : le;
      } catch {
      }
    }
    const ge = R.body || R.documentElement;
    return w && q && ge.insertBefore(n.createTextNode(q), ge.childNodes[0] || null), bi === Jt ? ve.call(R, Ie ? "html" : "body")[0] : Ie ? R.documentElement : ge;
  }, ks = function(w) {
    const R = ce ? ce(w) : w.ownerDocument;
    return he.call(
      R || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, La = function(w) {
    return w = wr(w, at, " "), w = wr(w, lt, " "), w = wr(w, rt, " "), w;
  }, Te = function(w) {
    var R;
    w.normalize();
    const q = ce ? ce(w) : w.ownerDocument, le = he.call(
      q || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ge = le.nextNode();
    for (; ge; )
      ge.data = La(ge.data), ge = le.nextNode();
    const Ae = (R = w.querySelectorAll) === null || R === void 0 ? void 0 : R.call(w, "template");
    Ae && ca(Ae, (et) => {
      dt(et.content) && Te(et.content);
    });
  }, dn = function(w) {
    const R = P ? P(w) : null;
    return typeof R != "string" || ct(R) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    w.nodeType !== I(w) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    if (!I || typeof w != "object" || w === null)
      return !1;
    try {
      return I(w) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, Qt = function(w) {
    if (!I || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof I(w) == "number";
    } catch {
      return !1;
    }
  };
  function ft(ee, w, R) {
    ee.length !== 0 && ca(ee, (q) => {
      q.call(t, w, R, _i);
    });
  }
  const _t = function(w, R) {
    return !!(Me && w.hasChildNodes() && !Qt(w.firstElementChild) && Dt(Md, w.textContent) && Dt(Md, w.innerHTML) || Me && w.namespaceURI === Jt && Jb[R] && (Qt(w.firstElementChild) || typeof w.textContent == "string" && Dt(Qb[R], w.textContent)) || w.nodeType === nn.processingInstruction || Me && w.nodeType === nn.comment && Dt(Fd, w.data));
  }, Qi = function(w, R) {
    if (w instanceof RegExp)
      return Dt(w, R);
    if (w instanceof Function) {
      for (var q = arguments.length, le = new Array(q > 2 ? q - 2 : 0), ge = 2; ge < q; ge++)
        le[ge - 2] = arguments[ge];
      return !!w(R, ...le);
    }
    return !1;
  }, Kn = function(w, R, q) {
    if (!V[R] && wi(R) && Qi(G.tagNameCheck, R))
      return !1;
    if (Qa && !vi[R]) {
      const le = D(w), ge = O(w);
      if (ge && le) {
        const Ae = ge.length;
        for (let et = Ae - 1; et >= 0; --et) {
          const Ke = w === q ? E(ge[et], !0) : ge[et];
          le.insertBefore(Ke, A(w));
        }
      }
    }
    return un(w), !0;
  }, Ln = function(w, R, q, le) {
    return w.length === 0 ? R : R === q || R === le ? rn(R) : R;
  }, Ra = function(w, R) {
    return w === R || D(w) !== null ? !1 : (er && It(w), !0);
  }, fn = function(w, R) {
    if (ft(Ee.beforeSanitizeElements, w, null), Ra(w, R))
      return !0;
    if (dn(w))
      return un(w), !0;
    const q = ct(de(w));
    if (k = Ln(Ee.uponSanitizeElement, k, L, st), ft(Ee.uponSanitizeElement, w, {
      tagName: q,
      allowedTags: k
    }), Ra(w, R))
      return !0;
    if (_t(w, q))
      return un(w), !0;
    if (V[q] || !(H.tagCheck instanceof Function && H.tagCheck(q)) && !k[q]) {
      const ge = Kn(w, q, R);
      return ge === !1 && ft(Ee.afterSanitizeElements, w, null), ge;
    }
    if (J(w) === nn.element && !El(w) || (q === "noscript" || q === "noembed" || q === "noframes") && Dt(Xb, w.innerHTML))
      return un(w), !0;
    if (xe && w.nodeType === nn.text) {
      const ge = La(w.textContent);
      w.textContent !== ge && (_r(t.removed, {
        element: w.cloneNode()
      }), w.textContent = ge);
    }
    return ft(Ee.afterSanitizeElements, w, null), !1;
  }, ea = function(w, R, q) {
    if (Z[R] || Ji(R, w) || Gt && (R === "id" || R === "name") && (q in n || q in Cs))
      return !1;
    const le = N[R] || H.attributeCheck instanceof Function && H.attributeCheck(R, w);
    return oe && Dt(Et, R) || ue && Dt(qe, R) ? !0 : le ? Ta[R] || Dt(C, wr(q, B, "")) || (R === "src" || R === "xlink:href" || R === "href") && w !== "script" && xd(q, "data:") === 0 && ys[w] || me && !Dt(Rt, wr(q, B, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      wi(w) && Qi(G.tagNameCheck, w) && Qi(G.attributeNameCheck, R, w) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      R === "is" && G.allowCustomizedBuiltInElements && Qi(G.tagNameCheck, q)
    );
  }, rr = He({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), wi = function(w) {
    return !rr[xr(w)] && Dt(v, w);
  }, sr = function(w, R, q, le) {
    if (X && typeof h == "object" && typeof h.getAttributeType == "function" && !q)
      switch (h.getAttributeType(w, R)) {
        case "TrustedHTML":
          return M(le);
        case "TrustedScriptURL":
          return Y(le);
      }
    return le;
  }, Rn = function(w, R, q, le) {
    try {
      q ? w.setAttributeNS(q, R, le) : w.setAttribute(R, le), dn(w) ? un(w) : kd(t.removed);
    } catch {
      Nn(R, w);
    }
  }, Si = function(w) {
    ft(Ee.beforeSanitizeAttributes, w, null);
    const R = w.attributes;
    if (!R || dn(w))
      return;
    N = Ln(Ee.uponSanitizeAttribute, N, z, At);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let le = R.length;
    const ge = ct(w.nodeName);
    for (; le--; ) {
      const Ae = R[le], et = Ae.name, Ke = Ae.namespaceURI, Pt = Ae.value, wt = ct(et), Ti = Pt;
      let ut = et === "value" ? Ti : Rb(Ti);
      if (q.attrName = wt, q.attrValue = ut, q.keepAttr = !0, q.forceKeepAttr = void 0, ft(Ee.uponSanitizeAttribute, w, q), ut = q.attrValue, Ki && (wt === "id" || wt === "name") && xd(ut, Wi) !== 0 && (Nn(et, w, Ae), ut = Wi + ut), Me && Dt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ut)) {
        Nn(et, w, Ae);
        continue;
      }
      if (wt === "attributename" && Od(ut, "href")) {
        Nn(et, w, Ae);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          Nn(et, w, Ae);
          continue;
        }
        if (!Ce && Dt(Zb, ut)) {
          Nn(et, w, Ae);
          continue;
        }
        if (xe && (ut = La(ut)), !ea(ge, wt, ut)) {
          Nn(et, w, Ae);
          continue;
        }
        ut = sr(ge, wt, Ke, ut), ut !== Ti && Rn(w, et, Ke, ut);
      }
    }
    ft(Ee.afterSanitizeAttributes, w, null);
  }, Wn = function(w) {
    let R = null;
    const q = ks(w);
    for (ft(Ee.beforeSanitizeShadowDOM, w, null); R = q.nextNode(); )
      if (ft(Ee.uponSanitizeShadowNode, R, null), fn(R, w), Si(R), dt(R.content) && Wn(R.content), J(R) === nn.element) {
        const le = F(R);
        dt(le) && (Ci(le), Wn(le));
      }
    ft(Ee.afterSanitizeShadowDOM, w, null);
  }, Ci = function(w) {
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
      const le = q.node, Ae = J(le) === nn.element, et = O(le);
      if (et)
        for (let Ke = et.length - 1; Ke >= 0; --Ke)
          R.push({
            node: et[Ke],
            shadow: null
          });
      if (Ae) {
        const Ke = P ? P(le) : null;
        if (typeof Ke == "string" && ct(Ke) === "template") {
          const Pt = le.content;
          dt(Pt) && R.push({
            node: Pt,
            shadow: null
          });
        }
      }
      if (Ae) {
        const Ke = F(le);
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
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, q = null, le = null, ge = null;
    if (Aa = !ee, Aa && (ee = "<!-->"), typeof ee != "string" && !Qt(ee) && (ee = Mb(ee), typeof ee != "string"))
      throw sa("dirty is not a string, aborting");
    if (!t.isSupported)
      return ee;
    Ye ? (k = st, N = At) : ir(w), (Ee.uponSanitizeElement.length > 0 || Ee.uponSanitizeAttribute.length > 0) && (k = rn(k)), Ee.uponSanitizeAttribute.length > 0 && (N = rn(N)), t.removed = [];
    const Ae = er && typeof ee != "string" && Qt(ee);
    if (Ae) {
      Es(ee);
      const Pt = de(ee);
      if (typeof Pt == "string") {
        const wt = ct(Pt);
        if (!k[wt] || V[wt])
          throw Zi(ee), sa("root node is forbidden and cannot be sanitized in-place");
      }
      if (dn(ee))
        throw Zi(ee), sa("root node is clobbered and cannot be sanitized in-place");
      try {
        Ci(ee);
      } catch (wt) {
        throw Zi(ee), wt;
      }
    } else if (Qt(ee))
      R = As("<!---->"), q = R.ownerDocument.importNode(ee, !0), q.nodeType === nn.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? R = q : R.appendChild(q), Ci(q);
    else {
      if (!Vt && !xe && !Ie && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return X && vt ? M(ee) : ee;
      if (R = As(ee), !R)
        return Vt ? null : vt ? re : "";
    }
    R && it && un(R.firstChild);
    const et = Ae ? ee : R;
    try {
      const Pt = ks(et);
      for (; le = Pt.nextNode(); )
        fn(le, et), Si(le), dt(le.content) && Wn(le.content);
    } catch (Pt) {
      throw Ae && (Zi(ee), ca(t.removed, (wt) => {
        wt.element && It(wt.element);
      })), Pt;
    }
    if (Ae)
      return ca(t.removed, (Pt) => {
        Pt.element && It(Pt.element);
      }), xe && Te(ee), ee;
    if (Vt) {
      if (xe && Te(R), Gn)
        for (ge = Se.call(R.ownerDocument); R.firstChild; )
          ge.appendChild(R.firstChild);
      else
        ge = R;
      return (N.shadowroot || N.shadowrootmode) && (ge = je.call(i, ge, !0)), ge;
    }
    let Ke = Ie ? R.outerHTML : R.innerHTML;
    return Ie && k["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Dt(qb, R.ownerDocument.doctype.name) && (Ke = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + Ke), xe && (Ke = La(Ke)), X && vt ? M(Ke) : Ke;
  }, t.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ir(ee), Ye = !0, st = k, At = N;
  }, t.clearConfig = function() {
    _i = null, Ye = !1, st = null, At = null, X = be, re = "";
  }, t.isValidAttribute = function(ee, w, R) {
    _i || ir({});
    const q = ct(ee), le = ct(w);
    return ea(q, le, R);
  }, t.addHook = function(ee, w) {
    typeof w == "function" && Zt(Ee, ee) && _r(Ee[ee], w);
  }, t.removeHook = function(ee, w) {
    if (Zt(Ee, ee)) {
      if (w !== void 0) {
        const R = Nb(Ee[ee], w);
        return R === -1 ? void 0 : Lb(Ee[ee], R, 1)[0];
      }
      return kd(Ee[ee]);
    }
  }, t.removeHooks = function(ee) {
    Zt(Ee, ee) && (Ee[ee] = []);
  }, t.removeAllHooks = function() {
    Ee = zd();
  }, t;
}
var np = tp();
function hu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xl, Ud;
function ny() {
  if (Ud) return Xl;
  Ud = 1;
  var e = /["'&<>]/;
  Xl = t;
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
  return Xl;
}
var iy = ny();
const ho = /* @__PURE__ */ hu(iy);
function ay() {
  return globalThis._nc_l10n_locale;
}
function ry() {
  return ay().replaceAll(/_/g, "-");
}
function vl() {
  return globalThis._nc_l10n_language;
}
function sy(e) {
  const t = vl();
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
function ip(e) {
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
  }, l = (A) => A, d = (o.sanitize ? np.sanitize : l) || l, u = o.escape ? ho : l, h = (A) => typeof A == "string" || typeof A == "number", S = (A, O, D) => A.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (F, K) => {
    if (O === void 0 || !(K in O))
      return u(F);
    const I = O[K];
    return h(I) ? u(`${I}`) : typeof I == "object" && h(I.value) ? (I.escape !== !1 ? ho : l)(`${I.value}`) : u(F);
  });
  let x = (a?.bundle ?? ip(e)).translations[t] || t;
  return x = Array.isArray(x) ? x[0] : x, d(typeof r == "object" || s !== void 0 ? S(
    x,
    r,
    s
  ) : x);
}
function Mn(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? ip(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return y(e, d[u], a, i, r);
    }
  }
  return i === 1 ? y(e, t, a, i, r) : y(e, n, a, i, r);
}
function oy(e, t = vl()) {
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
class po {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? po.GLOBAL_SCOPE_PERSISTENT : po.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class ly {
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
    return new po(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function ap(e) {
  return new ly(e);
}
function cy() {
  try {
    return fu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Zl, Bd;
function rp() {
  if (Bd) return Zl;
  Bd = 1;
  var e = {};
  return Zl = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Zl;
}
var Jl, jd;
function sp() {
  if (jd) return Jl;
  jd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Jl = {
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
  }, Jl;
}
var zs = { exports: {} }, Hd;
function uy() {
  return Hd || (Hd = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = sp(), r = rp();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], d = t.safeSrc = [], u = t.t = {};
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
      const K = x(D), I = h++;
      r(O, I, D), u[O] = I, l[I] = D, d[I] = K, s[I] = new RegExp(D, F ? "g" : void 0), o[I] = new RegExp(K, F ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${S}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${S}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(zs, zs.exports)), zs.exports;
}
var Ql, Vd;
function dy() {
  if (Vd) return Ql;
  Vd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Ql = (i) => i ? typeof i != "object" ? e : i : t, Ql;
}
var ec, Gd;
function fy() {
  if (Gd) return ec;
  Gd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return ec = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, ec;
}
var tc, Kd;
function op() {
  if (Kd) return tc;
  Kd = 1;
  const e = rp(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = sp(), { safeRe: i, t: a } = uy(), r = dy(), { compareIdentifiers: s } = fy(), o = (d, u) => {
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
  return tc = l, tc;
}
var nc, Wd;
function hy() {
  if (Wd) return nc;
  Wd = 1;
  const e = op();
  return nc = (n, i) => new e(n, i).major, nc;
}
var py = hy();
const qd = /* @__PURE__ */ hu(py);
var ic, Yd;
function vy() {
  if (Yd) return ic;
  Yd = 1;
  const e = op();
  return ic = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, ic;
}
var ac, Xd;
function gy() {
  if (Xd) return ac;
  Xd = 1;
  const e = vy();
  return ac = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, ac;
}
var my = gy();
const by = /* @__PURE__ */ hu(my);
class yy {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !by(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : qd(t.getVersion()) !== qd(this.getVersion()) && console.warn(
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
class _y {
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
let Cr = null;
function pu() {
  return Cr !== null ? Cr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Cr = new yy(window._nc_event_bus) : Cr = window._nc_event_bus = new _y(), Cr);
}
function lp(e, t) {
  pu().subscribe(e, t);
}
function wy(e, t) {
  pu().unsubscribe(e, t);
}
function oi(e, ...t) {
  pu().emit(e, ...t);
}
const cp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Sy = Object.prototype.toString, Cy = (e) => Sy.call(e) === "[object Object]", $a = () => {
}, Ty = /* @__PURE__ */ Ey();
function Ey() {
  var e, t, n;
  return cp && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function rc(e) {
  return Array.isArray(e) ? e : [e];
}
function Ay(e, t, n) {
  return ot(e, t, {
    ...n,
    immediate: !0
  });
}
const up = cp ? window : void 0;
function Nr(e) {
  var t;
  const n = ri(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ya(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = W(() => {
    const i = rc(ri(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Ay(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Nr(r))) !== null && i !== void 0 ? i : [up].filter((r) => r != null),
      rc(ri(n.value ? e[1] : e[0])),
      rc(g(n.value ? e[2] : e[1])),
      ri(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = Cy(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((S) => r.map((E) => t(h, S, E, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let Zd = !1;
function Jd(e, t, n = {}) {
  const { window: i = up, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: $a,
    cancel: $a,
    trigger: $a
  } : $a;
  if (Ty && !Zd) {
    Zd = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((D) => D.addEventListener("click", $a, O)), i.document.documentElement.addEventListener("click", $a, O);
  }
  let l = !0;
  const d = (O) => ri(a).some((D) => {
    if (typeof D == "string") return Array.from(i.document.querySelectorAll(D)).some((F) => F === O.target || O.composedPath().includes(F));
    {
      const F = Nr(D);
      return F && (O.target === F || O.composedPath().includes(F));
    }
  });
  function u(O) {
    const D = ri(O);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function h(O, D) {
    const F = ri(O), K = F.$.subTree && F.$.subTree.children;
    return K == null || !Array.isArray(K) ? !1 : K.some((I) => I.el === D.target || D.composedPath().includes(I.el));
  }
  const S = (O) => {
    const D = Nr(e);
    if (O.target != null && !(!(D instanceof Element) && u(e) && h(e, O)) && !(!D || D === O.target || O.composedPath().includes(D))) {
      if ("detail" in O && O.detail === 0 && (l = !d(O)), !l) {
        l = !0;
        return;
      }
      t(O);
    }
  };
  let E = !1;
  const x = [
    Ya(i, "click", (O) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), S(O));
    }, {
      passive: !0,
      capture: r
    }),
    Ya(i, "pointerdown", (O) => {
      const D = Nr(e);
      l = !d(O) && !!(D && !O.composedPath().includes(D));
    }, { passive: !0 }),
    s && Ya(i, "blur", (O) => {
      setTimeout(() => {
        const D = Nr(e);
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
function ky(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Mt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Mt({
    x: 0,
    y: 0
  }), d = W(() => o.x - l.x), u = W(() => o.y - l.y), { max: h, abs: S } = Math, E = W(() => h(S(d.value), S(u.value)) >= n), x = /* @__PURE__ */ nh(!1), A = W(() => E.value ? S(d.value) > S(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), O = (J) => [J.touches[0].clientX, J.touches[0].clientY], D = (J, de) => {
    o.x = J, o.y = de;
  }, F = (J, de) => {
    l.x = J, l.y = de;
  }, K = {
    passive: s,
    capture: !s
  }, I = (J) => {
    x.value && a?.(J, A.value), x.value = !1;
  }, P = [
    Ya(e, "touchstart", (J) => {
      if (J.touches.length !== 1) return;
      const [de, X] = O(J);
      D(de, X), F(de, X), r?.(J);
    }, K),
    Ya(e, "touchmove", (J) => {
      if (J.touches.length !== 1) return;
      const [de, X] = O(J);
      F(de, X), K.capture && !K.passive && Math.abs(d.value) > Math.abs(u.value) && J.preventDefault(), !x.value && E.value && (x.value = !0), x.value && i?.(J);
    }, K),
    Ya(e, ["touchend", "touchcancel"], I, K)
  ];
  return {
    isSwiping: x,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: d,
    lengthY: u,
    stop: () => P.forEach((J) => J())
  };
}
var Oy = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = nm(), r = tm(), s = /* @__PURE__ */ Pe([]), o = W(() => s.value.reduce((B, v) => (B[~~v.id] = v) && B, {})), l = W(() => s.value.length), d = /* @__PURE__ */ Pe(null), u = /* @__PURE__ */ Pe(!1), h = /* @__PURE__ */ Pe({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), S = /* @__PURE__ */ Pe({
      splitter: null,
      timeoutId: null
    }), E = W(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), x = () => {
      document.addEventListener("mousemove", D, { passive: !1 }), document.addEventListener("mouseup", F), "ontouchstart" in window && (document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", F));
    }, A = () => {
      document.removeEventListener("mousemove", D, { passive: !1 }), document.removeEventListener("mouseup", F), "ontouchstart" in window && (document.removeEventListener("touchmove", D, { passive: !1 }), document.removeEventListener("touchend", F));
    }, O = (B, v) => {
      let C = B.target.closest(".splitpanes__splitter");
      if (C) {
        let { left: k, top: L } = C.getBoundingClientRect(), { clientX: N, clientY: z } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
        h.value.cursorOffset = i.horizontal ? z - L : N - k;
      }
      x(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, D = (B) => {
      h.value.mouseDown && (B.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        X(J(B)), qe("resize", { event: B }, !0);
      }));
    }, F = (B) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), qe("resized", { event: B }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, K = (B, v) => {
      "ontouchstart" in window && (B.preventDefault(), S.value.splitter === v ? (clearTimeout(S.value.timeoutId), S.value.timeoutId = null, I(B, v), S.value.splitter = null) : (S.value.splitter = v, S.value.timeoutId = setTimeout(() => S.value.splitter = null, 500))), h.value.dragging || qe("splitter-click", {
        event: B,
        index: v
      }, !0);
    }, I = (B, v) => {
      if (qe("splitter-dblclick", {
        event: B,
        index: v
      }, !0), i.maximizePanes) {
        let C = 0;
        s.value = s.value.map((k, L) => (k.size = L === v ? k.max : k.min, L !== v && (C += k.min), k)), s.value[v].size -= C, qe("pane-maximize", {
          event: B,
          index: v,
          pane: s.value[v]
        }), qe("resized", {
          event: B,
          index: v
        }, !0);
      }
    }, P = (B, v) => {
      if (!i.keyboardStep) return;
      let C = i.horizontal ? B.key === "ArrowDown" : B.key === "ArrowRight", k = i.horizontal ? B.key === "ArrowUp" : B.key === "ArrowLeft";
      if (!C && !k) return;
      B.preventDefault(), h.value.activeSplitter = v;
      let L = (C ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), N = Q(v) + s.value[v].size;
      re(Math.min(Math.max(N + L * i.keyboardStep, 0), 100)), qe("resize", { event: B }, !0), qe("resized", { event: B }, !0), h.value.activeSplitter = null;
    }, ce = (B, v) => {
      let C = o.value[v];
      C && qe("pane-click", {
        event: B,
        index: C.index,
        pane: C
      });
    }, J = (B) => {
      let v = d.value.getBoundingClientRect(), { clientX: C, clientY: k } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
      return {
        x: C - (i.horizontal ? 0 : h.value.cursorOffset) - v.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - v.top
      };
    }, de = (B) => {
      B = B[i.horizontal ? "y" : "x"];
      let v = d.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (B = v - B), B * 100 / v;
    }, X = (B) => {
      re(de(B));
    }, re = (B) => {
      let v = h.value.activeSplitter;
      if (v === null || v >= s.value.length - 1) return;
      let C = {
        prevPanesSize: Q(v),
        nextPanesSize: ie(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : C.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : C.nextPanesSize);
      B = Math.max(Math.min(B, L), k);
      let N = [v, v + 1], z = s.value[N[0]] || null, G = s.value[N[1]] || null, V = z !== null && z.max < 100 && B >= z.max + C.prevPanesSize, Z = G !== null && G.max < 100 && B <= 100 - (G.max + ie(v + 1));
      if (V || Z) {
        V ? (z.size = z.max, G.size = Math.min(Math.max(100 - z.max - C.prevPanesSize - C.nextPanesSize, G.min), G.max)) : (z.size = Math.min(Math.max(100 - G.max - C.prevPanesSize - ie(v + 1), z.min), z.max), G.size = G.max);
        return;
      }
      if (i.pushOtherPanes) {
        let H = be(C, B);
        if (!H) return;
        ({ sums: C, panesToResize: N } = H), z = s.value[N[0]] || null, G = s.value[N[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(B - C.prevPanesSize - C.prevReachedMinPanes, z.min), z.max)), G !== null && (G.size = Math.min(Math.max(100 - B - C.nextPanesSize - C.nextReachedMinPanes, G.min), G.max));
    }, be = (B, v) => {
      let C = h.value.activeSplitter, k = [C, C + 1];
      if (v < B.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = $(C).index, B.prevReachedMinPanes = 0, k[0] < C && s.value.forEach((L, N) => {
          N > k[0] && N <= C && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), k[0] === void 0) return B.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((L, N) => {
          N > 0 && N <= C && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), s.value[k[1]].size = 100 - B.prevReachedMinPanes - s.value[0].min - B.prevPanesSize - B.nextPanesSize, null;
        B.prevPanesSize = Q(k[0]);
      }
      return v > 100 - B.nextPanesSize - s.value[k[1]].min && (k[1] = M(C).index, B.nextReachedMinPanes = 0, k[1] > C + 1 && s.value.forEach((L, N) => {
        N > C && N < k[1] && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), B.nextPanesSize = k[1] === void 0 ? 0 : ie(k[1] - 1), k[1] === void 0) ? (B.nextReachedMinPanes = 0, s.value.forEach((L, N) => {
        N >= C + 1 && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - B.prevPanesSize - ie(k[0] - 1)), null) : {
        sums: B,
        panesToResize: k
      };
    }, Q = (B) => s.value.reduce((v, C, k) => v + (k < B ? C.size : 0), 0), ie = (B) => s.value.reduce((v, C, k) => v + (k > B + 1 ? C.size : 0), 0), $ = (B) => [...s.value].reverse().find((v) => v.index < B && v.size > v.min) || {}, M = (B) => s.value.find((v) => v.index > B + 1 && v.size > v.min) || {}, Y = () => {
      let B = Array.from(d.value?.children || []);
      for (let v of B) {
        let C = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !C && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ae = (B, v, C = !1) => {
      let k = B - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), C || (L.onmousedown = (N) => O(N, k), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (N) => O(N, k)), L.onclick = (N) => K(N, k + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (N) => P(N, k))), L.ondblclick = (N) => I(N, k + 1), v.parentNode.insertBefore(L, v);
    }, ne = (B) => {
      B.onmousedown = null, B.onclick = null, B.ondblclick = null, B.onkeydown = null, B.remove();
    }, pe = () => {
      let B = Array.from(d.value?.children || []);
      for (let C of B) C.className.includes("splitpanes__splitter") && ne(C);
      let v = 0;
      for (let C of B) C.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? ae(v, C, !0) : v && ae(v, C), v++);
    }, he = ({ uid: B, ...v }) => {
      let C = o.value[B];
      for (let [k, L] of Object.entries(v)) C[k] = L;
    }, Se = !1, ve = (B) => {
      let v = -1;
      Array.from(d.value?.children || []).some((C) => (C.className.includes("splitpanes__pane") && v++, C.isSameNode(B.el))), s.value.splice(v, 0, {
        ...B,
        index: v
      }), s.value.forEach((C, k) => C.index = k), u.value && !Se && (Se = !0, sn(() => {
        pe(), Ee({ addedPane: s.value[v] }), qe("pane-add", { pane: s.value[v] }), Se = !1;
      }));
    }, je = (B) => {
      let v = s.value.findIndex((k) => k.id === B);
      s.value[v].el = null;
      let C = s.value.splice(v, 1)[0];
      s.value.forEach((k, L) => k.index = L), sn(() => {
        pe(), qe("pane-remove", { pane: C }), Ee({ removedPane: {
          ...C
        } });
      });
    }, Ee = (B = {}) => {
      !B.addedPane && !B.removedPane ? lt() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? rt(B) : at(), u.value && qe("resized");
    }, at = () => {
      let B = 100 / l.value, v = 100, C = [], k = [];
      for (let L of s.value) L.size = Math.max(Math.min(B, L.max), L.min), v -= L.size, L.size >= L.max && C.push(L.id), L.size <= L.min && k.push(L.id);
      Math.abs(v) > 0.1 && Et(v, C, k);
    }, lt = () => {
      let B = 100, v = [], C = [], k = 0;
      for (let N of s.value) B -= N.size, N.givenSize !== null && k++, N.size >= N.max && v.push(N.id), N.size <= N.min && C.push(N.id);
      let L = 100;
      if (B > 0.1) {
        for (let N of s.value) N.givenSize === null && (N.size = Math.max(Math.min(B / (l.value - k), N.max), N.min)), L -= N.size;
        L > 0.1 && Et(L, v, C);
      }
    }, rt = ({ addedPane: B, removedPane: v } = {}) => {
      let C = s.value.reduce((V, Z) => V + (Z.givenSize === null ? 0 : Z.givenSize), 0), k = s.value.filter((V) => V.givenSize === null).length, L = k > 0 ? (100 - C) / k : 0, N = 0, z = [], G = [];
      for (let V of s.value) N -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && G.push(V.id);
      if (!(Math.abs(N) < 0.1)) {
        N = 100;
        for (let V of s.value) V.givenSize === null && (V.size = Math.max(Math.min(L, V.max), V.min)), N -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && G.push(V.id);
        Math.abs(N) > 0.1 && Et(N, z, G);
      }
    }, Et = (B, v, C) => {
      let k;
      k = B > 0 ? B / (l.value - v.length) : B / (l.value - C.length), s.value.forEach((L, N) => {
        if (B > 0 && !v.includes(L.id)) {
          let z = Math.max(Math.min(L.size + k, L.max), L.min), G = z - L.size;
          B -= G, L.size = z;
        } else if (!C.includes(L.id)) {
          let z = Math.max(Math.min(L.size + k, L.max), L.min), G = z - L.size;
          B -= G, L.size = z;
        }
      }), Math.abs(B) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, qe = (B, v = void 0, C = !1) => {
      let k = v?.index ?? h.value.activeSplitter ?? null;
      n(B, {
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
    ot(() => i.firstSplitter, () => pe()), ot(() => i.horizontal, (B) => sn(() => {
      n("direction-changed", {
        horizontal: B,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), Hi(() => {
      Y(), pe(), Ee(), qe("ready"), u.value = !0;
    }), Ja(() => u.value = !1);
    let Rt = () => {
      let { class: B, ...v } = a;
      return Xt("div", {
        ref: d,
        class: [E.value, B],
        ...v
      }, r.default?.());
    };
    return mn("panes", s), mn("indexedPanes", o), mn("horizontal", W(() => i.horizontal)), mn("requestUpdate", he), mn("onPaneAdd", ve), mn("onPaneRemove", je), mn("onPaneClick", ce), (B, v) => (_(), Fe(su(Rt)));
  }
}), xy = {
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
    let t = e, n = zt("requestUpdate"), i = zt("onPaneAdd"), a = zt("horizontal"), r = zt("onPaneRemove"), s = zt("onPaneClick"), o = Sa()?.uid, l = zt("indexedPanes"), d = W(() => l.value[o]), u = /* @__PURE__ */ Pe(null), h = W(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), S.value);
    }), S = W(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = W(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), x = W(() => {
      let A = d.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return ot(() => h.value, (A) => n({
      uid: o,
      size: A
    })), ot(() => S.value, (A) => n({
      uid: o,
      min: A
    })), ot(() => E.value, (A) => n({
      uid: o,
      max: A
    })), Hi(() => {
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
      onClick: O[0] ||= (D) => g(s)(D, A._.uid),
      style: cn(x.value)
    }, [De(A.$slots, "default")], 4));
  }
}, Ny = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Ly = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", Ry = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Iy = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const vu = 1024, dp = vu / 2, vo = (e) => document.documentElement.clientWidth < e, fp = /* @__PURE__ */ Pe(vo(vu)), hp = /* @__PURE__ */ Pe(vo(dp));
window.addEventListener("resize", () => {
  fp.value = vo(vu), hp.value = vo(dp);
}, { passive: !0 });
function ms() {
  return /* @__PURE__ */ Xr(fp);
}
function Py() {
  return /* @__PURE__ */ Xr(hp);
}
class Dy {
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
class $y {
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
    return this.setLanguage(vl().replace("-", "_"));
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
    const t = new Dy((n) => oy(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function My() {
  return new $y();
}
const pp = My().detectLanguage().build(), Ct = (...e) => pp.gettext(...e);
function Vi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== vl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        pp.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const Fy = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], zy = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Uy = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], By = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], jy = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Hy = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Vy = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Gy = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], Ky = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const Wy = /* @__PURE__ */ Symbol(""), [qy] = window.OC?.config?.version?.split(".") ?? [], vp = Number.parseInt(qy ?? "35"), Yy = vp < 32, Gi = vp < 34, Xy = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function Zy() {
  return zt(Xy, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, Jy = { class: "button-vue__wrapper" }, Qy = { class: "button-vue__icon" }, e_ = { class: "button-vue__text" }, t_ = /* @__PURE__ */ Lt({
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
    const n = e, i = t, { formBoxItemClass: a } = Zy(), r = zt(Wy, null) !== null, s = W(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = W(() => s.value === "button" && typeof n.pressed == "boolean"), l = W(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = W(() => l.value.startsWith("tertiary")), u = W(() => n.alignment.split("-")[0]), h = W(() => n.alignment.includes("-")), S = zt("NcPopover:trigger:attrs", () => ({}), !1), E = W(() => S()), x = W(() => {
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
    return (O, D) => (_(), Fe(su(s.value), Ht({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(Yy),
          "button-vue--legacy34": g(Gi)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, x.value, { onClick: A }), {
      default: Oe(() => [
        c("span", Jy, [
          c("span", Qy, [
            De(O.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", e_, [
            De(O.$slots, "default", {}, () => [
              Re(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), jn = /* @__PURE__ */ Qe(t_, [["__scopeId", "data-v-47ce59a3"]]), n_ = ["aria-hidden", "aria-label"], i_ = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, a_ = ["d"], r_ = ["innerHTML"], s_ = /* @__PURE__ */ Lt({
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
    Xm((a) => ({
      fb515064: n.value
    }));
    const t = e, n = W(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = W(() => {
      if (!t.svg || t.path)
        return;
      const a = np.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
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
      }, null, 8, r_)) : (_(), T("svg", i_, [
        c("path", { d: e.path }, null, 8, a_)
      ]))
    ], 10, n_));
  }
}), gl = /* @__PURE__ */ Qe(s_, [["__scopeId", "data-v-aaedb1c3"]]);
l_();
function o_(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), oi("csrf-token-update", { token: e, _internal: !0 }));
}
function l_() {
  lp("csrf-token-update", ({ token: e, _internal: t }) => {
    t || o_(e);
  });
}
ap("public").persist().build();
let Ma;
function Qd(e, t) {
  return e ? e.getAttribute(t) : null;
}
function c_() {
  if (Ma !== void 0)
    return Ma;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Qd(e, "data-user");
  return t === null ? (Ma = null, Ma) : (Ma = {
    uid: t,
    displayName: Qd(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ma);
}
var gt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(gt || {});
class u_ {
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
function d_(e) {
  return new u_(e);
}
class f_ {
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
    const t = c_();
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
function h_() {
  return new f_(d_);
}
const ya = h_().detectUser().setApp("@nextcloud/vue").build();
function p_(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let gp = "missing-app-name";
try {
  gp = "library";
} catch {
  ya.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const v_ = gp;
let g_ = "";
try {
  g_ = "0.1.0-alpha.168";
} catch {
  ya.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function mp() {
  return zt("appName", v_);
}
const m_ = p_(() => {
  const e = fu("core", "apps", []), t = mp();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), Lc = sy();
Vi(Vy);
const b_ = /* @__PURE__ */ Lt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = ms();
    ot(t, n), Hi(() => {
      n(t.value);
    }), Ja(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && oi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (_(), Fe(g(jn), {
      "aria-label": g(Ct)("Go back to the list"),
      class: we(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(Ct)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Oe(() => [
        ye(g(gl), {
          directional: "",
          path: g(Ny)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), y_ = /* @__PURE__ */ Qe(b_, [["__scopeId", "data-v-a28923a1"]]), ef = ap("nextcloud").persist().build(), __ = cy().theming?.name ?? "Nextcloud", w_ = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: y_,
    Pane: xy,
    Splitpanes: Oy
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
      appName: mp(),
      localizedAppName: m_(),
      isMobile: ms(),
      isRtl: Lc
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
      return e.add(__), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = ky(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? oi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && oi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      ef.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ya.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(ef.getItem(this.paneConfigID), 10);
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
}, S_ = {
  key: 0,
  class: "hidden-visually"
}, C_ = { class: "app-content-wrapper__list" }, T_ = {
  key: 1,
  class: "app-content-wrapper"
};
function E_(e, t, n, i, a, r) {
  const s = Ue("NcAppContentDetailsToggle"), o = Ue("Pane"), l = Ue("Splitpanes");
  return _(), T("main", {
    id: "app-content-vue",
    class: we(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (_(), T("h1", S_, p(n.pageHeading), 1)) : j("", !0),
    e.$slots.list ? (_(), T(fe, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (_(), T("div", {
        key: 0,
        class: we(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (_(), Fe(s, {
          key: 0,
          onClick: Ve(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : j("", !0),
        Xe(c("div", C_, [
          De(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Wa, !n.showDetails]
        ]),
        n.showDetails ? De(e.$slots, "default", { key: 1 }, void 0, !0) : j("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (_(), T("div", T_, [
        ye(l, {
          horizontal: n.layout === "horizontal-split",
          class: we(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Oe(() => [
            ye(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Oe(() => [
                De(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            ye(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Oe(() => [
                De(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : j("", !0)
    ], 64)) : j("", !0),
    e.$slots.list ? j("", !0) : De(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const A_ = /* @__PURE__ */ Qe(w_, [["render", E_], ["__scopeId", "data-v-51427d61"]]);
var bp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], go = /* @__PURE__ */ bp.join(","), yp = typeof Element > "u", wa = yp ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, mo = !yp && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, bo = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : bo(t.parentNode));
  return s;
}, k_ = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, _p = function(t, n, i) {
  if (bo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(go));
  return n && wa.call(t, go) && a.unshift(t), a = a.filter(i), a;
}, yo = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!bo(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, d = yo(l, !0, i);
        i.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var u = wa.call(s, go);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), S = !bo(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && S) {
          var E = yo(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: s,
            candidates: E
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, wp = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ha = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || k_(t)) && !wp(t) ? 0 : t.tabIndex;
}, O_ = function(t, n) {
  var i = ha(t);
  return i < 0 && n && !wp(t) ? 0 : i;
}, x_ = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Sp = function(t) {
  return t.tagName === "INPUT";
}, N_ = function(t) {
  return Sp(t) && t.type === "hidden";
}, L_ = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, R_ = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, I_ = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || mo(t), i = function(o) {
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
  var r = R_(a, t.form);
  return !r || r === t;
}, P_ = function(t) {
  return Sp(t) && t.type === "radio";
}, D_ = function(t) {
  return P_(t) && !I_(t);
}, $_ = function(t) {
  var n, i = t && mo(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = mo(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, tf = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, M_ = function(t, n) {
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
        var h = t.parentElement, S = mo(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return tf(t);
        t.assignedSlot ? t = t.assignedSlot : !h && S !== t.ownerDocument ? t = S.host : t = h;
      }
      t = u;
    }
    if ($_(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return tf(t);
  return !1;
}, F_ = function(t) {
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
}, _o = function(t, n) {
  return !(n.disabled || N_(n) || M_(n, t) || // For a details element with a summary, the summary element gets the focus
  L_(n) || F_(n));
}, Rc = function(t, n) {
  return !(D_(n) || ha(n) < 0 || !_o(t, n));
}, z_ = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Cp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = O_(o, s), d = s ? Cp(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(x_).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, U_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = yo([t], n.includeContainer, {
    filter: Rc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: z_
  }) : i = _p(t, n.includeContainer, Rc.bind(null, n)), Cp(i);
}, B_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = yo([t], n.includeContainer, {
    filter: _o.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = _p(t, n.includeContainer, _o.bind(null, n)), i;
}, Fa = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return wa.call(t, go) === !1 ? !1 : Rc(n, t);
}, j_ = /* @__PURE__ */ bp.concat("iframe:not([inert]):not([inert] *)").join(","), sc = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return wa.call(t, j_) === !1 ? !1 : _o(n, t);
};
function Ic(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function H_(e) {
  if (Array.isArray(e)) return Ic(e);
}
function nf(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Tp(e)) || t) {
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
function V_(e, t, n) {
  return (t = Y_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function G_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function K_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function af(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function rf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? af(Object(n), !0).forEach(function(i) {
      V_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : af(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function W_(e) {
  return H_(e) || G_(e) || Tp(e) || K_();
}
function q_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Y_(e) {
  var t = q_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Tp(e, t) {
  if (e) {
    if (typeof e == "string") return Ic(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ic(e, t) : void 0;
  }
}
var ii = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = ii.getActiveTrap(t);
    n !== i && ii.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), ii.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = ii.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = ii.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, X_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Z_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Mr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, J_ = function(t) {
  return Mr(t) && !t.shiftKey;
}, Q_ = function(t) {
  return Mr(t) && t.shiftKey;
}, sf = function(t) {
  return setTimeout(t, 0);
}, Tr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Us = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, e1 = [], gu = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || e1, r = rf({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: J_,
    isKeyBackward: Q_
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
  }, o, l = function($, M, Y) {
    return $ && $[M] !== void 0 ? $[M] : r[Y || M];
  }, d = function($, M) {
    var Y = typeof M?.composedPath == "function" ? M.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ae) {
      var ne = ae.container, pe = ae.tabbableNodes;
      return ne.contains($) || Y?.includes(ne) || pe.find(function(he) {
        return he === $;
      });
    });
  }, u = function($) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = M.hasFallback, ae = Y === void 0 ? !1 : Y, ne = M.params, pe = ne === void 0 ? [] : ne, he = r[$];
    if (typeof he == "function" && (he = he.apply(void 0, W_(pe))), he === !0 && (he = void 0), !he) {
      if (he === void 0 || he === !1)
        return he;
      throw new Error("`".concat($, "` was specified but was not a node, or did not return a node"));
    }
    var Se = he;
    if (typeof he == "string") {
      try {
        Se = i.querySelector(he);
      } catch (ve) {
        throw new Error("`".concat($, '` appears to be an invalid selector; error="').concat(ve.message, '"'));
      }
      if (!Se && !ae)
        throw new Error("`".concat($, "` as selector refers to no known node"));
    }
    return Se;
  }, h = function($) {
    var M = $.activeElement;
    return M ? M.shadowRoot && M.shadowRoot.activeElement !== null ? h(M.shadowRoot) : M : null;
  }, S = function() {
    var $ = u("initialFocus", {
      hasFallback: !0
    });
    if ($ === !1)
      return !1;
    if ($ === void 0 || $ && !sc($, r.tabbableOptions)) {
      var M = h(i);
      if (d(M) >= 0)
        $ = M;
      else {
        var Y = s.tabbableGroups[0], ae = Y && Y.firstTabbableNode;
        $ = ae || u("fallbackFocus");
      }
    } else $ === null && ($ = u("fallbackFocus"));
    if (!$)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return $;
  }, E = function() {
    if (s.containerGroups = s.containers.map(function($) {
      var M = U_($, r.tabbableOptions), Y = B_($, r.tabbableOptions), ae = M.length > 0 ? M[0] : void 0, ne = M.length > 0 ? M[M.length - 1] : void 0, pe = Y.find(function(ve) {
        return Fa(ve);
      }), he = Y.slice().reverse().find(function(ve) {
        return Fa(ve);
      }), Se = !!M.find(function(ve) {
        return ha(ve) > 0;
      });
      return {
        container: $,
        tabbableNodes: M,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Se,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ae,
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
        lastDomTabbableNode: he,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(je) {
          var Ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, at = M.indexOf(je);
          return at < 0 ? Ee ? Y.slice(Y.indexOf(je) + 1).find(function(lt) {
            return Fa(lt);
          }) : Y.slice(0, Y.indexOf(je)).reverse().find(function(lt) {
            return Fa(lt);
          }) : M[at + (Ee ? 1 : -1)];
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
      }), s.mostRecentlyFocusedNode = $, X_($) && $.select();
    }
  }, A = function($) {
    var M = u("setReturnFocus", {
      params: [$]
    });
    return M || (M === !1 ? !1 : $);
  }, O = function($) {
    var M = $.target, Y = $.event, ae = $.isBackward, ne = ae === void 0 ? !1 : ae;
    M = M || Us(Y), E();
    var pe = null;
    if (s.tabbableGroups.length > 0) {
      var he = d(M, Y), Se = he >= 0 ? s.containerGroups[he] : void 0;
      if (he < 0)
        ne ? pe = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : pe = s.tabbableGroups[0].firstTabbableNode;
      else if (ne) {
        var ve = s.tabbableGroups.findIndex(function(Et) {
          var qe = Et.firstTabbableNode;
          return M === qe;
        });
        if (ve < 0 && (Se.container === M || sc(M, r.tabbableOptions) && !Fa(M, r.tabbableOptions) && !Se.nextTabbableNode(M, !1)) && (ve = he), ve >= 0) {
          var je = ve === 0 ? s.tabbableGroups.length - 1 : ve - 1, Ee = s.tabbableGroups[je];
          pe = ha(M) >= 0 ? Ee.lastTabbableNode : Ee.lastDomTabbableNode;
        } else Mr(Y) || (pe = Se.nextTabbableNode(M, !1));
      } else {
        var at = s.tabbableGroups.findIndex(function(Et) {
          var qe = Et.lastTabbableNode;
          return M === qe;
        });
        if (at < 0 && (Se.container === M || sc(M, r.tabbableOptions) && !Fa(M, r.tabbableOptions) && !Se.nextTabbableNode(M)) && (at = he), at >= 0) {
          var lt = at === s.tabbableGroups.length - 1 ? 0 : at + 1, rt = s.tabbableGroups[lt];
          pe = ha(M) >= 0 ? rt.firstTabbableNode : rt.firstDomTabbableNode;
        } else Mr(Y) || (pe = Se.nextTabbableNode(M));
      }
    } else
      pe = u("fallbackFocus");
    return pe;
  }, D = function($) {
    var M = Us($);
    if (!(d(M, $) >= 0)) {
      if (Tr(r.clickOutsideDeactivates, $)) {
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
      Tr(r.allowOutsideClick, $) || $.preventDefault();
    }
  }, F = function($) {
    var M = Us($), Y = d(M, $) >= 0;
    if (Y || M instanceof Document)
      Y && (s.mostRecentlyFocusedNode = M);
    else {
      $.stopImmediatePropagation();
      var ae, ne = !0;
      if (s.mostRecentlyFocusedNode)
        if (ha(s.mostRecentlyFocusedNode) > 0) {
          var pe = d(s.mostRecentlyFocusedNode), he = s.containerGroups[pe].tabbableNodes;
          if (he.length > 0) {
            var Se = he.findIndex(function(ve) {
              return ve === s.mostRecentlyFocusedNode;
            });
            Se >= 0 && (r.isKeyForward(s.recentNavEvent) ? Se + 1 < he.length && (ae = he[Se + 1], ne = !1) : Se - 1 >= 0 && (ae = he[Se - 1], ne = !1));
          }
        } else
          s.containerGroups.some(function(ve) {
            return ve.tabbableNodes.some(function(je) {
              return ha(je) > 0;
            });
          }) || (ne = !1);
      else
        ne = !1;
      ne && (ae = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), x(ae || s.mostRecentlyFocusedNode || S());
    }
    s.recentNavEvent = void 0;
  }, K = function($) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = $;
    var Y = O({
      event: $,
      isBackward: M
    });
    Y && (Mr($) && $.preventDefault(), x(Y));
  }, I = function($) {
    (r.isKeyForward($) || r.isKeyBackward($)) && K($, r.isKeyBackward($));
  }, P = function($) {
    Z_($) && Tr(r.escapeDeactivates, $) !== !1 && ($.preventDefault(), o.deactivate());
  }, ce = function($) {
    var M = Us($);
    d(M, $) >= 0 || Tr(r.clickOutsideDeactivates, $) || Tr(r.allowOutsideClick, $) || ($.preventDefault(), $.stopImmediatePropagation());
  }, J = function() {
    if (s.active) {
      ii.activateTrap(a, o);
      var $;
      return r.delayInitialFocus ? $ = new Promise(function(M) {
        s.delayInitialFocusTimer = sf(function() {
          x(S()), M();
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
  }, de = function($) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var M = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), ae = nf($), ne;
    try {
      for (ae.s(); !(ne = ae.n()).done; ) {
        var pe = ne.value;
        M.add(pe);
        for (var he = typeof ShadowRoot < "u" && pe.getRootNode() instanceof ShadowRoot, Se = pe; Se; ) {
          M.add(Se);
          var ve = Se.parentElement, je = [];
          ve ? je = ve.children : !ve && he && (je = Se.getRootNode().children, ve = Se.getRootNode().host, he = typeof ShadowRoot < "u" && ve.getRootNode() instanceof ShadowRoot);
          var Ee = nf(je), at;
          try {
            for (Ee.s(); !(at = Ee.n()).done; ) {
              var lt = at.value;
              Y.add(lt);
            }
          } catch (rt) {
            Ee.e(rt);
          } finally {
            Ee.f();
          }
          Se = ve;
        }
      }
    } catch (rt) {
      ae.e(rt);
    } finally {
      ae.f();
    }
    M.forEach(function(rt) {
      Y.delete(rt);
    }), s.adjacentElements = Y;
  }, X = function() {
    if (s.active)
      return i.removeEventListener("focusin", F, !0), i.removeEventListener("mousedown", D, !0), i.removeEventListener("touchstart", D, !0), i.removeEventListener("click", ce, !0), i.removeEventListener("keydown", I, !0), i.removeEventListener("keydown", P), o;
  }, re = function($) {
    var M = s.mostRecentlyFocusedNode;
    if (M) {
      var Y = $.some(function(ne) {
        var pe = Array.from(ne.removedNodes);
        return pe.some(function(he) {
          return he === M || typeof he.contains == "function" && he.contains(M);
        });
      });
      if (Y && s.containers.some(function(ne) {
        return ne?.isConnected;
      })) {
        E();
        var ae = S();
        x(ae);
      }
    }
  }, be = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(re) : void 0, Q = function() {
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
      var M = l($, "onActivate"), Y = l($, "onPostActivate"), ae = l($, "checkCanFocusTrap"), ne = ii.getActiveTrap(a), pe = !1;
      if (ne && !ne.paused) {
        var he;
        (he = ne._setSubtreeIsolation) === null || he === void 0 || he.call(ne, !1), pe = !0;
      }
      try {
        ae || E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), M?.({
          trap: o
        });
        var Se = function() {
          ae && E();
          var Ee = function() {
            o._setSubtreeIsolation(!0), Q(), Y?.({
              trap: o
            });
          }, at = J();
          at ? at.then(Ee) : Ee();
        };
        if (ae)
          return ae(s.containers.concat()).then(Se, Se), this;
        Se();
      } catch (je) {
        if (ne === ii.getActiveTrap(a) && pe) {
          var ve;
          (ve = ne._setSubtreeIsolation) === null || ve === void 0 || ve.call(ne, !0);
        }
        throw je;
      }
      return this;
    },
    deactivate: function($) {
      if (!s.active)
        return this;
      var M = rf({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, $);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), X(), s.active = !1, s.paused = !1, Q(), ii.deactivateTrap(a, o);
      var Y = l(M, "onDeactivate"), ae = l(M, "onPostDeactivate"), ne = l(M, "checkCanReturnFocus"), pe = l(M, "delayReturnFocus"), he = l(M, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: o
      });
      var Se = function() {
        he && x(A(s.nodeFocusedBeforeActivation)), ae?.({
          trap: o
        });
      }, ve = function() {
        pe && he ? sf(Se) : Se();
      };
      return he && ne ? (ne(A(s.nodeFocusedBeforeActivation)).then(ve, ve), this) : (ve(), this);
    },
    pause: function($) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, $)) : this;
    },
    unpause: function($) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, $)) : this;
    },
    updateContainerElements: function($) {
      var M = [].concat($).filter(Boolean);
      return s.containers = M.map(function(Y) {
        return typeof Y == "string" ? i.querySelector(Y) : Y;
      }), r.isolateSubtrees && de(s.containers), s.active && (E(), s.paused || o._setSubtreeIsolation(!0)), Q(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function($, M) {
        if (s.paused === $)
          return this;
        if (s.paused = $, $) {
          var Y = l(M, "onPause"), ae = l(M, "onPostPause");
          Y?.({
            trap: o
          }), X(), o._setSubtreeIsolation(!1), Q(), ae?.({
            trap: o
          });
        } else {
          var ne = l(M, "onUnpause"), pe = l(M, "onPostUnpause");
          ne?.({
            trap: o
          });
          var he = function() {
            E();
            var ve = function() {
              o._setSubtreeIsolation(!0), Q(), pe?.({
                trap: o
              });
            }, je = J();
            je ? je.then(ve) : ve();
          };
          he();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function($) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(M) {
          var Y;
          $ ? r.isolateSubtrees === "aria-hidden" ? ((M.ariaHidden === "true" || ((Y = M.getAttribute("aria-hidden")) === null || Y === void 0 ? void 0 : Y.toLowerCase()) === "true") && s.alreadySilent.add(M), M.setAttribute("aria-hidden", "true")) : ((M.inert || M.hasAttribute("inert")) && s.alreadySilent.add(M), M.setAttribute("inert", !0)) : s.alreadySilent.has(M) || (r.isolateSubtrees === "aria-hidden" ? M.removeAttribute("aria-hidden") : M.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const Ep = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), t1 = /* @__PURE__ */ Lt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Ep]: {
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
function n1(e, t, n, i, a, r) {
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
      style: cn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    De(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Ap = /* @__PURE__ */ Qe(t1, [["render", n1], ["__scopeId", "data-v-3e73e246"]]);
function rs() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function i1() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...rs()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === rs().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const kp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Op = /* @__PURE__ */ Symbol.for("NcContent:selector");
Vi(By);
const a1 = { class: "app-navigation-toggle-wrapper" }, r1 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Oh(e, "open"), n = W(() => t.value ? Ct("Close navigation") : Ct("Open navigation"));
    return (i, a) => (_(), T("div", a1, [
      ye(g(jn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Oe(() => [
          ye(gl, {
            path: g(Iy),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), s1 = /* @__PURE__ */ Qe(r1, [["__scopeId", "data-v-e8177cc7"]]), o1 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], l1 = { class: "app-navigation__search" }, c1 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = zt(
      kp,
      () => Fm(),
      !1
    ), a = Vg("appNavigationContainer"), r = ms(), s = /* @__PURE__ */ Pe(!r.value), o = W(() => r.value && s.value);
    Dg(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), ot(r, () => {
      s.value = !r.value;
    }), ot(o, () => {
      u();
    }), Hi(() => {
      i(!0), lp("toggle-navigation", d), oi("navigation-toggled", {
        open: s.value
      }), n = gu(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: rs(),
        escapeDeactivates: !1
      }), u();
    }), ps(() => {
      i(!1), wy("toggle-navigation", d), n.deactivate();
    });
    function l(S) {
      if (s.value === S) {
        oi("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = S === void 0 ? !s.value : S;
      const E = getComputedStyle(document.body), x = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        oi("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * x);
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
        c("div", l1, [
          De(S.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: we(["app-navigation__body", { "app-navigation__body--no-list": !S.$slots.list }])
        }, [
          De(S.$slots, "default", {}, void 0, !0)
        ], 2),
        S.$slots.list ? (_(), Fe(Ap, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Oe(() => [
            De(S.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : j("", !0),
        De(S.$slots, "footer", {}, void 0, !0)
      ], 40, o1),
      ye(s1, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), u1 = /* @__PURE__ */ Qe(c1, [["__scopeId", "data-v-37908cd4"]]), d1 = {
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
}, f1 = ["aria-hidden", "aria-label"], h1 = ["fill", "width", "height"], p1 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, v1 = { key: 0 };
function g1(e, t, n, i, a, r) {
  return _(), T("span", Ht(e.$attrs, {
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
      c("path", p1, [
        n.title ? (_(), T("title", v1, p(n.title), 1)) : j("", !0)
      ])
    ], 8, h1))
  ], 16, f1);
}
const m1 = /* @__PURE__ */ Qe(d1, [["render", g1]]), b1 = {
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
}, y1 = ["aria-hidden", "aria-label"], _1 = ["fill", "width", "height"], w1 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, S1 = { key: 0 };
function C1(e, t, n, i, a, r) {
  return _(), T("span", Ht(e.$attrs, {
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
      c("path", w1, [
        n.title ? (_(), T("title", S1, p(n.title), 1)) : j("", !0)
      ])
    ], 8, _1))
  ], 16, y1);
}
const T1 = /* @__PURE__ */ Qe(b1, [["render", C1]]), E1 = {
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
}, A1 = ["aria-hidden", "aria-label"], k1 = ["fill", "width", "height"], O1 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, x1 = { key: 0 };
function N1(e, t, n, i, a, r) {
  return _(), T("span", Ht(e.$attrs, {
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
      c("path", O1, [
        n.title ? (_(), T("title", x1, p(n.title), 1)) : j("", !0)
      ])
    ], 8, k1))
  ], 16, A1);
}
const xp = /* @__PURE__ */ Qe(E1, [["render", N1]]), L1 = {
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
}, R1 = ["aria-hidden", "aria-label"], I1 = ["fill", "width", "height"], P1 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, D1 = { key: 0 };
function $1(e, t, n, i, a, r) {
  return _(), T("span", Ht(e.$attrs, {
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
      c("path", P1, [
        n.title ? (_(), T("title", D1, p(n.title), 1)) : j("", !0)
      ])
    ], 8, I1))
  ], 16, R1);
}
const Np = /* @__PURE__ */ Qe(L1, [["render", $1]]);
Vi(zy);
const M1 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: xp,
    IconClose: Np,
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
}, F1 = ["placeholder"];
function z1(e, t, n, i, a, r) {
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
      }, null, 8, F1), [
        [an, r.valueModel]
      ]),
      ye(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ve(r.confirm, ["stop", "prevent"])
      }, {
        icon: Oe(() => [
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
        icon: Oe(() => [
          ye(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const U1 = /* @__PURE__ */ Qe(M1, [["render", z1], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function ml() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const mu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Lp = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), B1 = {
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
}, Rp = {
  mixins: [B1],
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
      from: Lp
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
}, j1 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: gl
  },
  mixins: [Rp],
  inject: {
    isInSemanticMenu: {
      from: mu,
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
      mdiCheck: Ly,
      mdiChevronRight: Ry
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
}, H1 = ["role"], V1 = ["aria-label", "disabled", "title", "type"], G1 = { class: "action-button__longtext-wrapper" }, K1 = {
  key: 0,
  class: "action-button__name"
}, W1 = ["textContent"], q1 = {
  key: 2,
  class: "action-button__text"
}, Y1 = ["textContent"], X1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function Z1(e, t, n, i, a, r) {
  const s = Ue("NcIconSvgWrapper");
  return _(), T("li", {
    class: we(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", Ht({
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
      De(e.$slots, "icon", {}, () => [
        c("span", {
          class: we([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: cn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", G1, [
        e.name ? (_(), T("strong", K1, p(e.name), 1)) : j("", !0),
        e.isLongText ? (_(), T("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, W1)) : (_(), T("span", q1, p(e.text), 1)),
        n.description ? (_(), T("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, Y1)) : j("", !0)
      ]),
      n.isMenu ? (_(), Fe(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (_(), Fe(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (_(), T("span", X1)) : j("", !0),
      j("", !0)
    ], 16, V1)
  ], 10, H1);
}
const J1 = /* @__PURE__ */ Qe(j1, [["render", Z1], ["__scopeId", "data-v-6c2daf4e"]]);
function Q1(e, t = {}) {
  const n = i1();
  ot(e, () => {
    ri(t.disabled) || (ri(e) ? n.pause() : n.unpause());
  }), ps(() => {
    n.unpause();
  });
}
const e0 = ["top", "right", "bottom", "left"], of = ["start", "end"], lf = /* @__PURE__ */ e0.reduce((e, t) => e.concat(t, t + "-" + of[0], t + "-" + of[1]), []), ss = Math.min, Pc = Math.max, t0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ip(e, t, n) {
  return Pc(e, ss(t, n));
}
function Ca(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function di(e) {
  return e.split("-")[0];
}
function kn(e) {
  return e.split("-")[1];
}
function Pp(e) {
  return e === "x" ? "y" : "x";
}
function bu(e) {
  return e === "y" ? "height" : "width";
}
function ai(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function yu(e) {
  return Pp(ai(e));
}
function Dp(e, t, n) {
  n === void 0 && (n = !1);
  const i = kn(e), a = yu(e), r = bu(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = So(s)), [s, So(s)];
}
function n0(e) {
  const t = So(e);
  return [wo(e), t, wo(t)];
}
function wo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const cf = ["left", "right"], uf = ["right", "left"], i0 = ["top", "bottom"], a0 = ["bottom", "top"];
function r0(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? uf : cf : t ? cf : uf;
    case "left":
    case "right":
      return t ? i0 : a0;
    default:
      return [];
  }
}
function s0(e, t, n, i) {
  const a = kn(e);
  let r = r0(di(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(wo)))), r;
}
function So(e) {
  const t = di(e);
  return t0[t] + e.slice(t.length);
}
function o0(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function $p(e) {
  return typeof e != "number" ? o0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Fr(e) {
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
function df(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ai(t), s = yu(t), o = bu(s), l = di(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, S = i[o] / 2 - a[o] / 2;
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
  const x = kn(t);
  return x && (E[s] += S * (x === "end" ? 1 : -1) * (n && d ? -1 : 1)), E;
}
async function l0(e, t) {
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
  } = Ca(t, e), x = $p(E), O = o[S ? h === "floating" ? "reference" : "floating" : h], D = Fr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), F = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, K = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), I = await (r.isElement == null ? void 0 : r.isElement(K)) && await (r.getScale == null ? void 0 : r.getScale(K)) || {
    x: 1,
    y: 1
  }, P = Fr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: F,
    offsetParent: K,
    strategy: l
  }) : F);
  return {
    top: (D.top - P.top + x.top) / I.y,
    bottom: (P.bottom - D.bottom + x.bottom) / I.y,
    left: (D.left - P.left + x.left) / I.x,
    right: (P.right - D.right + x.right) / I.x
  };
}
const c0 = 50, u0 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: l0
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = df(d, i, l), S = i, E = 0;
  const x = {};
  for (let A = 0; A < r.length; A++) {
    const O = r[A];
    if (!O)
      continue;
    const {
      name: D,
      fn: F
    } = O, {
      x: K,
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
      rects: d,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = K ?? u, h = I ?? h, x[D] = {
      ...x[D],
      ...P
    }, ce && E < c0 && (E++, typeof ce == "object" && (ce.placement && (S = ce.placement), ce.rects && (d = ce.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ce.rects), {
      x: u,
      y: h
    } = df(d, S, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: S,
    strategy: a,
    middlewareData: x
  };
}, d0 = (e) => ({
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
    const h = $p(u), S = {
      x: n,
      y: i
    }, E = yu(a), x = bu(E), A = await s.getDimensions(d), O = E === "y", D = O ? "top" : "left", F = O ? "bottom" : "right", K = O ? "clientHeight" : "clientWidth", I = r.reference[x] + r.reference[E] - S[E] - r.floating[x], P = S[E] - r.reference[E], ce = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let J = ce ? ce[K] : 0;
    (!J || !await (s.isElement == null ? void 0 : s.isElement(ce))) && (J = o.floating[K] || r.floating[x]);
    const de = I / 2 - P / 2, X = J / 2 - A[x] / 2 - 1, re = ss(h[D], X), be = ss(h[F], X), Q = J - A[x] - be, ie = J / 2 - A[x] / 2 + de, $ = Ip(re, ie, Q), M = !l.arrow && kn(a) != null && ie !== $ && r.reference[x] / 2 - (ie < re ? re : be) - A[x] / 2 < 0, Y = M ? ie < re ? ie - re : ie - Q : 0;
    return {
      [E]: S[E] + Y,
      data: {
        [E]: $,
        centerOffset: ie - $ - Y,
        ...M && {
          alignmentOffset: Y
        }
      },
      reset: M
    };
  }
});
function f0(e, t, n) {
  return (e ? [...n.filter((a) => kn(a) === e), ...n.filter((a) => kn(a) !== e)] : n.filter((a) => di(a) === a)).filter((a) => e ? kn(a) === e || (t ? wo(a) !== a : !1) : !0);
}
const h0 = function(e) {
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
        allowedPlacements: S = lf,
        autoAlignment: E = !0,
        ...x
      } = Ca(e, t), A = h !== void 0 || S === lf ? f0(h || null, E, S) : S, O = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, D = A[O];
      if (D == null)
        return {};
      if (o !== D)
        return {
          reset: {
            placement: A[0]
          }
        };
      const F = await l.detectOverflow(t, x), K = Dp(D, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), I = [F[di(D)], F[K[0]], F[K[1]]], P = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
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
      const J = P.map((re) => {
        const be = kn(re.placement);
        return [re.placement, be && u ? (
          // Check along the mainAxis and main crossAxis side.
          re.overflows.slice(0, 2).reduce((Q, ie) => Q + ie, 0)
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
          overflows: P
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, p0 = function(e) {
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
        fallbackAxisSideDirection: x = "none",
        flipAlignment: A = !0,
        ...O
      } = Ca(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const D = di(a), F = ai(o), K = di(o) === o, I = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), P = S || (K || !A ? [So(o)] : n0(o)), ce = x !== "none";
      !S && ce && P.push(...s0(o, A, x, I));
      const J = [o, ...P], de = await l.detectOverflow(t, O), X = [];
      let re = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && X.push(de[D]), h) {
        const $ = Dp(a, s, I);
        X.push(de[$[0]], de[$[1]]);
      }
      if (re = [...re, {
        placement: a,
        overflows: X
      }], !X.every(($) => $ <= 0)) {
        var be, Q;
        const $ = (((be = r.flip) == null ? void 0 : be.index) || 0) + 1, M = J[$];
        if (M && (!(h === "alignment" ? F !== ai(M) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        re.every((ne) => ai(ne.placement) === F ? ne.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: re
            },
            reset: {
              placement: M
            }
          };
        let Y = (Q = re.filter((ae) => ae.overflows[0] <= 0).sort((ae, ne) => ae.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!Y)
          switch (E) {
            case "bestFit": {
              var ie;
              const ae = (ie = re.filter((ne) => {
                if (ce) {
                  const pe = ai(ne.placement);
                  return pe === F || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((ne) => [ne.placement, ne.overflows.filter((pe) => pe > 0).reduce((pe, he) => pe + he, 0)]).sort((ne, pe) => ne[1] - pe[1])[0]) == null ? void 0 : ie[0];
              ae && (Y = ae);
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
}, v0 = /* @__PURE__ */ new Set(["left", "top"]);
async function g0(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = di(n), o = kn(n), l = ai(n) === "y", d = v0.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = Ca(t, e);
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
    y: S * d
  } : {
    x: S * d,
    y: E * u
  };
}
const m0 = function(e) {
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
      } = t, l = await g0(t, e);
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
}, b0 = function(e) {
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
              x: K,
              y: I
            } = F;
            return {
              x: K,
              y: I
            };
          }
        },
        ...d
      } = Ca(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, d), S = ai(a), E = Pp(S);
      let x = u[E], A = u[S];
      const O = (F, K) => Ip(K + h[F === "y" ? "top" : "left"], K, K - h[F === "y" ? "bottom" : "right"]);
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
}, y0 = function(e) {
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
      } = Ca(e, t), l = await a.detectOverflow(t, o), d = di(n), u = kn(n), h = ai(n) === "y", {
        width: S,
        height: E
      } = i.floating;
      let x, A;
      d === "top" || d === "bottom" ? (x = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, x = u === "end" ? "top" : "bottom");
      const O = E - l.top - l.bottom, D = S - l.left - l.right, F = ss(E - l[x], O), K = ss(S - l[A], D), I = t.middlewareData.shift, P = !I;
      let ce = F, J = K;
      I != null && I.enabled.x && (J = D), I != null && I.enabled.y && (ce = O), P && !u && (h ? J = S - 2 * Pc(l.left, l.right) : ce = E - 2 * Pc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: J,
        availableHeight: ce
      });
      const de = await a.getDimensions(r.floating);
      return S !== de.width || E !== de.height ? {
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
const ff = Math.min, zr = Math.max, Co = Math.round;
function Mp(e) {
  const t = Hn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = Co(n) !== a || Co(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function ji(e) {
  return zp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Bs;
function Fp() {
  if (Bs) return Bs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Bs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Bs) : navigator.userAgent;
}
function Vn(e) {
  return e instanceof yn(e).HTMLElement;
}
function Mi(e) {
  return e instanceof yn(e).Element;
}
function zp(e) {
  return e instanceof yn(e).Node;
}
function hf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof yn(e).ShadowRoot || e instanceof ShadowRoot;
}
function bl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Hn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function _0(e) {
  return ["table", "td", "th"].includes(ji(e));
}
function Dc(e) {
  const t = /firefox/i.test(Fp()), n = Hn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Up() {
  return !/^((?!chrome|android).)*safari/i.test(Fp());
}
function _u(e) {
  return ["html", "body", "#document"].includes(ji(e));
}
function Bp(e) {
  return Mi(e) ? e : e.contextElement;
}
const jp = { x: 1, y: 1 };
function Xa(e) {
  const t = Bp(e);
  if (!Vn(t)) return jp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Mp(t);
  let s = (r ? Co(n.width) : n.width) / i, o = (r ? Co(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function os(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = Bp(e);
  let l = jp;
  t && (i ? Mi(i) && (l = Xa(i)) : l = Xa(e));
  const d = o ? yn(o) : window, u = !Up() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, S = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, E = s.width / l.x, x = s.height / l.y;
  if (o) {
    const A = yn(o), O = i && Mi(i) ? yn(i) : i;
    let D = A.frameElement;
    for (; D && i && O !== A; ) {
      const F = Xa(D), K = D.getBoundingClientRect(), I = getComputedStyle(D);
      K.x += (D.clientLeft + parseFloat(I.paddingLeft)) * F.x, K.y += (D.clientTop + parseFloat(I.paddingTop)) * F.y, h *= F.x, S *= F.y, E *= F.x, x *= F.y, h += K.x, S += K.y, D = yn(D).frameElement;
    }
  }
  return { width: E, height: x, top: S, right: h + E, bottom: S + x, left: h, x: h, y: S };
}
function Fi(e) {
  return ((zp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yl(e) {
  return Mi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Hp(e) {
  return os(Fi(e)).left + yl(e).scrollLeft;
}
function ls(e) {
  if (ji(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || hf(e) && e.host || Fi(e);
  return hf(t) ? t.host : t;
}
function Vp(e) {
  const t = ls(e);
  return _u(t) ? t.ownerDocument.body : Vn(t) && bl(t) ? t : Vp(t);
}
function To(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Vp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = yn(i);
  return a ? t.concat(r, r.visualViewport || [], bl(i) ? i : []) : t.concat(i, To(i));
}
function pf(e, t, n) {
  return t === "viewport" ? Fr((function(i, a) {
    const r = yn(i), s = Fi(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const S = Up();
      (S || !S && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : Mi(t) ? Fr((function(i, a) {
    const r = os(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Vn(i) ? Xa(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Fr((function(i) {
    const a = Fi(i), r = yl(i), s = i.ownerDocument.body, o = zr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = zr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + Hp(i);
    const u = -r.scrollTop;
    return Hn(s).direction === "rtl" && (d += zr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })(Fi(e)));
}
function vf(e) {
  return Vn(e) && Hn(e).position !== "fixed" ? e.offsetParent : null;
}
function gf(e) {
  const t = yn(e);
  let n = vf(e);
  for (; n && _0(n) && Hn(n).position === "static"; ) n = vf(n);
  return n && (ji(n) === "html" || ji(n) === "body" && Hn(n).position === "static" && !Dc(n)) ? t : n || (function(i) {
    let a = ls(i);
    for (; Vn(a) && !_u(a); ) {
      if (Dc(a)) return a;
      a = ls(a);
    }
    return null;
  })(e) || t;
}
function w0(e, t, n) {
  const i = Vn(t), a = Fi(t), r = os(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((ji(t) !== "body" || bl(a)) && (s = yl(t)), Vn(t)) {
    const l = os(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = Hp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const S0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let S = To(d).filter(((O) => Mi(O) && ji(O) !== "body")), E = null;
    const x = Hn(d).position === "fixed";
    let A = x ? ls(d) : d;
    for (; Mi(A) && !_u(A); ) {
      const O = Hn(A), D = Dc(A);
      (x ? D || E : D || O.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = O : S = S.filter(((F) => F !== A)), A = ls(A);
    }
    return u.set(d, S), S;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = pf(t, u, a);
    return d.top = zr(h.top, d.top), d.right = ff(h.right, d.right), d.bottom = ff(h.bottom, d.bottom), d.left = zr(h.left, d.left), d;
  }), pf(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Vn(n), r = Fi(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((ji(n) !== "body" || bl(r)) && (s = yl(n)), Vn(n))) {
    const d = os(n);
    o = Xa(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Mi, getDimensions: function(e) {
  return Vn(e) ? Mp(e) : e.getBoundingClientRect();
}, getOffsetParent: gf, getDocumentElement: Fi, getScale: Xa, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || gf, r = this.getDimensions;
  return { reference: w0(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Hn(e).direction === "rtl" }, C0 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: S0, ...n }, r = { ...a.platform, _c: i };
  return u0(e, t, { ...a, platform: r });
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
function $c(e, t) {
  let n = zi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = zi.themes[n.$extend] || {} : (n = null, i = zi[t]) : n = null;
  while (n);
  return i;
}
function T0(e) {
  const t = [e];
  let n = zi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = zi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function mf(e) {
  const t = [e];
  let n = zi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = zi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let cs = !1;
if (typeof window < "u") {
  cs = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        cs = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Gp = !1;
typeof window < "u" && typeof navigator < "u" && (Gp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const E0 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), bf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, yf = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function _f(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function oc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const En = [];
let oa = null;
const wf = {};
function Sf(e) {
  let t = wf[e];
  return t || (t = wf[e] = []), t;
}
let Mc = function() {
};
typeof window < "u" && (Mc = window.Element);
function Be(e) {
  return function(t) {
    return $c(t.theme, e);
  };
}
const lc = "__floating-vue__popper", Kp = () => /* @__PURE__ */ Lt({
  name: "VPopper",
  provide() {
    return {
      [lc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [lc]: { default: null }
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
      validator: (e) => E0.includes(e)
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
      type: [String, Object, Mc, Boolean],
      default: Be("container")
    },
    boundary: {
      type: [String, Mc],
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
      return (e = this[lc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(m0({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(h0({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(b0({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(p0({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(d0({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(y0({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await C0(this.$_referenceNode, this.$_popperNode, e);
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
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await oc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...To(this.$_referenceNode),
        ...To(this.$_popperNode)
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
      for (const t of mf(this.theme))
        Sf(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await oc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, _f(En, this), En.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of mf(this.theme)) {
        const i = Sf(n);
        _f(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      oa === this && (oa = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await oc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, bf, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], bf, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, yf, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], yf, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, cs ? {
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
      if (Ur >= e.left && Ur <= e.right && Br >= e.top && Br <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Ur - Ri, i = Br - Ii, a = t.left + t.width / 2 - Ri + (t.top + t.height / 2) - Ii + t.width + t.height, r = Ri + n * a, s = Ii + i * a;
        return js(Ri, Ii, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        js(Ri, Ii, r, s, t.left, t.top, t.right, t.top) || // Top edge
        js(Ri, Ii, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        js(Ri, Ii, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Gp) {
    const e = cs ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Cf(t), e), document.addEventListener("touchend", (t) => Tf(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Cf(e), !0), window.addEventListener("click", (e) => Tf(e, !1), !0);
  window.addEventListener("resize", O0);
}
function Cf(e, t) {
  for (let n = 0; n < En.length; n++) {
    const i = En[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Tf(e, t) {
  A0(e, t);
}
function A0(e, t) {
  const n = {};
  for (let i = En.length - 1; i >= 0; i--) {
    const a = En[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Ef(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && Ef(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Ef(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || k0(e, n) && !t;
}
function k0(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function O0() {
  for (let e = 0; e < En.length; e++)
    En[e].$_computePosition();
}
let Ri = 0, Ii = 0, Ur = 0, Br = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ri = Ur, Ii = Br, Ur = e.clientX, Br = e.clientY;
}, cs ? {
  passive: !0
} : void 0);
function js(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const x0 = {
  extends: Kp()
}, wu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function N0(e, t, n, i, a, r) {
  return _(), T("div", {
    ref: "reference",
    class: we(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    De(e.$slots, "default", Zs(ts(e.slotData)))
  ], 2);
}
const L0 = /* @__PURE__ */ wu(x0, [["render", N0]]);
function R0() {
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
let Ys;
function Fc() {
  Fc.init || (Fc.init = !0, Ys = R0() !== -1);
}
var _l = {
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
    Fc(), sn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ys && this.$el.appendChild(e), e.data = "about:blank", Ys || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Ys && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const I0 = /* @__PURE__ */ Rg();
Ng("data-v-b329ee4c");
const P0 = {
  class: "resize-observer",
  tabindex: "-1"
};
Lg();
const D0 = /* @__PURE__ */ I0((e, t, n, i, a, r) => (_(), Fe("div", P0)));
_l.render = D0;
_l.__scopeId = "data-v-b329ee4c";
_l.__file = "src/components/ResizeObserver.vue";
const Wp = (e = "theme") => ({
  computed: {
    themeClass() {
      return T0(this[e]);
    }
  }
}), $0 = /* @__PURE__ */ Lt({
  name: "VPopperContent",
  components: {
    ResizeObserver: _l
  },
  mixins: [
    Wp()
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
}), M0 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], F0 = {
  ref: "inner",
  class: "v-popper__inner"
}, z0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), U0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), B0 = [
  z0,
  U0
];
function j0(e, t, n, i, a, r) {
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
    style: cn(e.result ? {
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
      style: cn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", F0, [
        e.mounted ? (_(), T(fe, { key: 0 }, [
          c("div", null, [
            De(e.$slots, "default")
          ]),
          e.handleResize ? (_(), Fe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : j("", !0)
        ], 64)) : j("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: cn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, B0, 4)
    ], 4)
  ], 46, M0);
}
const qp = /* @__PURE__ */ wu($0, [["render", j0]]), Yp = {
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
let zc = function() {
};
typeof window < "u" && (zc = window.Element);
const H0 = /* @__PURE__ */ Lt({
  name: "VPopperWrapper",
  components: {
    Popper: L0,
    PopperContent: qp
  },
  mixins: [
    Yp,
    Wp("finalTheme")
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
      type: [String, Object, zc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, zc],
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
function V0(e, t, n, i, a, r) {
  const s = Ue("PopperContent"), o = Ue("Popper");
  return _(), Fe(o, Ht({ ref: "popper" }, e.$props, {
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
    default: Oe(({
      popperId: l,
      isShown: d,
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
      De(e.$slots, "default", {
        shown: d,
        show: E,
        hide: x
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
        classes: D,
        result: F,
        onHide: x,
        onResize: O
      }, {
        default: Oe(() => [
          De(e.$slots, "popper", {
            shown: d,
            hide: x
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Su = /* @__PURE__ */ wu(H0, [["render", V0]]), G0 = {
  ...Su,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Su
});
({
  ...Su
});
Kp();
const Af = zi, K0 = G0, W0 = /* @__PURE__ */ Lt({
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
}), q0 = "_ncPopover_qgtYg", Y0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: q0
}, Xp = "nc-popover-9";
Af.themes[Xp] = structuredClone(Af.themes.dropdown);
const X0 = {
  name: "NcPopover",
  components: {
    Dropdown: K0,
    NcPopoverTriggerProvider: W0
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
      theme: Xp
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
      return this.placement === "start" ? Lc ? "right" : "left" : this.placement === "end" ? Lc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = gu(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: rs(),
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
function Z0(e, t, n, i, a, r) {
  const s = Ue("NcPopoverTriggerProvider"), o = Ue("Dropdown");
  return _(), Fe(o, {
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
    popper: Oe((l) => [
      De(e.$slots, "default", Zs(ts(l)))
    ]),
    default: Oe(() => [
      ye(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Oe((l) => [
          De(e.$slots, "trigger", Zs(ts(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const J0 = {
  $style: Y0
}, kf = /* @__PURE__ */ Qe(X0, [["render", Z0], ["__cssModules", J0]]), Q0 = {
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
}, ew = ["aria-hidden", "aria-label"], tw = ["fill", "width", "height"], nw = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, iw = { key: 0 };
function aw(e, t, n, i, a, r) {
  return _(), T("span", Ht(e.$attrs, {
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
      c("path", nw, [
        n.title ? (_(), T("title", iw, p(n.title), 1)) : j("", !0)
      ])
    ], 8, tw))
  ], 16, ew);
}
const rw = /* @__PURE__ */ Qe(Q0, [["render", aw]]);
Vi(Fy);
function Cu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === xt)
        return !1;
      if (n.type === fe && !Cu(n.children))
        return !1;
      if (n.type === vs && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const sw = ".focusable", ow = {
  name: "NcActions",
  components: {
    NcButton: jn,
    NcPopover: kf
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
      [mu]: W(() => this.actionsMenuSemanticType === "menu"),
      [Lp]: this.closeMenu
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
      randomId: ml()
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
    Q1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(sw);
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
        A.type === fe && t(A.children, x);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((E) => s.includes(this.getActionName(E))), d = a.some((E) => r.includes(this.getActionName(E))), u = a.some((E) => o.includes(this.getActionName(E)));
    l ? this.actionsMenuSemanticType = "dialog" : d ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((x) => this.getActionName(x).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (E) => {
      const x = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(x) ? Xt("img", { class: "action-item__menutoggle__icon", src: x, alt: "" }) : Xt("span", { class: ["icon", x] })), O = E?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? O : "";
      let F = E?.props?.title;
      this.forceName || F || (F = O);
      const K = { ...E?.props ?? {} }, I = ["submit", "reset"].includes(K.type) ? K.modelValue : "button";
      return delete K.modelValue, delete K.type, Xt(
        jn,
        Ht(
          K,
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
      const x = Cu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Xt("span", { class: ["icon", this.defaultIcon] }) : Xt(rw, { size: 20 }), A = `${this.randomId}-trigger`;
      return Xt(
        kf,
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
}, Eo = /* @__PURE__ */ Qe(ow, [["__scopeId", "data-v-7206c1f1"]]), lw = ["aria-label"], cw = ["width", "height"], uw = ["fill"], dw = ["fill"], fw = { key: 0 }, hw = /* @__PURE__ */ Lt({
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
        }, null, 8, uw),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (_(), T("title", fw, p(e.name), 1)) : j("", !0)
        ], 8, dw)
      ], 8, cw))
    ], 8, lw));
  }
}), Zp = /* @__PURE__ */ Qe(hw, [["__scopeId", "data-v-cf399190"]]), Uc = /* @__PURE__ */ Lt({
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
}), pw = {
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
}, vw = ["aria-hidden", "aria-label"], gw = ["fill", "width", "height"], mw = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, bw = { key: 0 };
function yw(e, t, n, i, a, r) {
  return _(), T("span", Ht(e.$attrs, {
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
      c("path", mw, [
        n.title ? (_(), T("title", bw, p(n.title), 1)) : j("", !0)
      ])
    ], 8, gw))
  ], 16, vw);
}
const _w = /* @__PURE__ */ Qe(pw, [["render", yw]]), ww = {
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
}, Sw = ["aria-hidden", "aria-label"], Cw = ["fill", "width", "height"], Tw = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, Ew = { key: 0 };
function Aw(e, t, n, i, a, r) {
  return _(), T("span", Ht(e.$attrs, {
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
      c("path", Tw, [
        n.title ? (_(), T("title", Ew, p(n.title), 1)) : j("", !0)
      ])
    ], 8, Cw))
  ], 16, Sw);
}
const kw = /* @__PURE__ */ Qe(ww, [["render", Aw]]);
Vi(jy);
const Ow = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: jn,
    ChevronDown: m1,
    ChevronUp: T1
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
function xw(e, t, n, i, a, r) {
  const s = Ue("ChevronUp"), o = Ue("ChevronDown"), l = Ue("NcButton");
  return _(), Fe(l, {
    class: we(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Oe(() => [
      n.open ? (_(), Fe(s, {
        key: 0,
        size: 20
      })) : (_(), Fe(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const Nw = /* @__PURE__ */ Qe(Ow, [["render", xw], ["__scopeId", "data-v-cfbd3794"]]);
Vi(Hy, Ky);
const Lw = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Eo,
    NcActionButton: J1,
    NcAppNavigationIconCollapsible: Nw,
    NcInputConfirmCancel: U1,
    NcLoadingIcon: Zp,
    NcVNodes: Uc,
    Pencil: _w,
    Undo: kw
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Ep, default: null }
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
      default: () => ml(),
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
      isMobile: ms(),
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && oi("toggle-navigation", { open: !1 }));
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
}, Rw = ["id"], Iw = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], Pw = {
  key: 0,
  class: "editingContainer"
}, Dw = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, $w = { class: "app-navigation-entry__deleted-description" }, Mw = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, Fw = {
  key: 0,
  class: "app-navigation-entry__children"
};
function zw(e, t, n, i, a, r) {
  const s = Ue("NcLoadingIcon"), o = Ue("NcInputConfirmCancel"), l = Ue("Pencil"), d = Ue("NcActionButton"), u = Ue("Undo"), h = Ue("NcActions"), S = Ue("NcAppNavigationIconCollapsible");
  return _(), T("li", {
    id: n.id,
    class: we([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (_(), Fe(su(r.isRouterLink ? "router-link" : "NcVNodes"), Zs(ts({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Oe(({ href: E, navigate: x, isActive: A }) => [
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
          n.undo ? j("", !0) : (_(), T("a", {
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
            onKeydown: t[3] || (t[3] = St(Ve((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: we(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (_(), Fe(s, { key: 0 })) : De(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: we(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (_(), T("div", Pw, [
              ye(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : j("", !0)
          ], 40, Iw)),
          n.undo ? (_(), T("div", Dw, [
            c("div", $w, p(n.name), 1)
          ])) : j("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (_(), T("div", {
            key: 2,
            class: we(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (_(), T("div", Mw, [
              De(e.$slots, "counter", {}, void 0, !0)
            ])) : j("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (_(), Fe(h, {
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
              icon: Oe(() => [
                De(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Oe(() => [
                n.editable && !a.editingActive ? (_(), Fe(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Oe(() => [
                    ye(l, { size: 20 })
                  ]),
                  default: Oe(() => [
                    Re(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                n.undo ? (_(), Fe(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Oe(() => [
                    ye(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                De(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : j("", !0)
          ], 2)) : j("", !0),
          n.allowCollapse && e.$slots.default ? (_(), Fe(S, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Ve(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : j("", !0),
          De(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (_(), T("ul", Fw, [
      De(e.$slots, "default", {}, void 0, !0)
    ])) : j("", !0)
  ], 10, Rw);
}
const Of = /* @__PURE__ */ Qe(Lw, [["render", zw], ["__scopeId", "data-v-01bef41b"]]), cc = /* @__PURE__ */ new WeakMap(), Uw = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Jd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Jd(e, a, Object.assign({ capture: n }, r));
    }
    cc.set(e, i);
  },
  unmounted(e) {
    const t = cc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), cc.delete(e);
  }
}, Bw = {
  mounted(e) {
    e.focus();
  }
}, jw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Hw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Bc = "numeric", jc = "ascii", Hc = "alpha", jr = "asciinumeric", Lr = "alphanumeric", Vc = "domain", Jp = "emoji", Vw = "scheme", Gw = "slashscheme", uc = "whitespace";
function Kw(e, t) {
  return e in t || (t[e] = []), t[e];
}
function va(e, t, n) {
  t[Bc] && (t[jr] = !0, t[Lr] = !0), t[jc] && (t[jr] = !0, t[Hc] = !0), t[jr] && (t[Lr] = !0), t[Hc] && (t[Lr] = !0), t[Lr] && (t[Vc] = !0), t[Jp] && (t[Vc] = !0);
  for (const i in t) {
    const a = Kw(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function Ww(e, t) {
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
    return t && t.j ? a = t : (a = new on(t), n && i && va(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || on.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new on(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new on(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(Ww(s.t, i), n);
          va(r, l, i);
        } else n && va(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const $e = (e, t, n, i, a) => e.ta(t, n, i, a), pt = (e, t, n, i, a) => e.tr(t, n, i, a), xf = (e, t, n, i, a) => e.ts(t, n, i, a), te = (e, t, n, i, a) => e.tt(t, n, i, a), Jn = "WORD", Gc = "UWORD", Qp = "ASCIINUMERICAL", ev = "ALPHANUMERICAL", us = "LOCALHOST", Kc = "TLD", Wc = "UTLD", Xs = "SCHEME", ja = "SLASH_SCHEME", Tu = "NUM", qc = "WS", Eu = "NL", Hr = "OPENBRACE", Vr = "CLOSEBRACE", Ao = "OPENBRACKET", ko = "CLOSEBRACKET", Oo = "OPENPAREN", xo = "CLOSEPAREN", No = "OPENANGLEBRACKET", Lo = "CLOSEANGLEBRACKET", Ro = "FULLWIDTHLEFTPAREN", Io = "FULLWIDTHRIGHTPAREN", Po = "LEFTCORNERBRACKET", Do = "RIGHTCORNERBRACKET", $o = "LEFTWHITECORNERBRACKET", Mo = "RIGHTWHITECORNERBRACKET", Fo = "FULLWIDTHLESSTHAN", zo = "FULLWIDTHGREATERTHAN", Uo = "AMPERSAND", Bo = "APOSTROPHE", jo = "ASTERISK", Di = "AT", Ho = "BACKSLASH", Vo = "BACKTICK", Go = "CARET", ga = "COLON", Au = "COMMA", Ko = "DOLLAR", Fn = "DOT", Wo = "EQUALS", ku = "EXCLAMATION", gn = "HYPHEN", Gr = "PERCENT", qo = "PIPE", Yo = "PLUS", Xo = "POUND", Kr = "QUERY", Ou = "QUOTE", tv = "FULLWIDTHMIDDLEDOT", xu = "SEMI", zn = "SLASH", Wr = "TILDE", Zo = "UNDERSCORE", nv = "EMOJI", Jo = "SYM";
var iv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: ev,
  AMPERSAND: Uo,
  APOSTROPHE: Bo,
  ASCIINUMERICAL: Qp,
  ASTERISK: jo,
  AT: Di,
  BACKSLASH: Ho,
  BACKTICK: Vo,
  CARET: Go,
  CLOSEANGLEBRACKET: Lo,
  CLOSEBRACE: Vr,
  CLOSEBRACKET: ko,
  CLOSEPAREN: xo,
  COLON: ga,
  COMMA: Au,
  DOLLAR: Ko,
  DOT: Fn,
  EMOJI: nv,
  EQUALS: Wo,
  EXCLAMATION: ku,
  FULLWIDTHGREATERTHAN: zo,
  FULLWIDTHLEFTPAREN: Ro,
  FULLWIDTHLESSTHAN: Fo,
  FULLWIDTHMIDDLEDOT: tv,
  FULLWIDTHRIGHTPAREN: Io,
  HYPHEN: gn,
  LEFTCORNERBRACKET: Po,
  LEFTWHITECORNERBRACKET: $o,
  LOCALHOST: us,
  NL: Eu,
  NUM: Tu,
  OPENANGLEBRACKET: No,
  OPENBRACE: Hr,
  OPENBRACKET: Ao,
  OPENPAREN: Oo,
  PERCENT: Gr,
  PIPE: qo,
  PLUS: Yo,
  POUND: Xo,
  QUERY: Kr,
  QUOTE: Ou,
  RIGHTCORNERBRACKET: Do,
  RIGHTWHITECORNERBRACKET: Mo,
  SCHEME: Xs,
  SEMI: xu,
  SLASH: zn,
  SLASH_SCHEME: ja,
  SYM: Jo,
  TILDE: Wr,
  TLD: Kc,
  UNDERSCORE: Zo,
  UTLD: Wc,
  UWORD: Gc,
  WORD: Jn,
  WS: qc
});
const Xn = /[a-z]/, Er = new RegExp("\\p{L}", "u"), dc = new RegExp("\\p{Emoji}", "u"), Zn = /\d/, fc = /\s/, Nf = "\r", hc = `
`, qw = "️", Yw = "‍", pc = "￼";
let Hs = null, Vs = null;
function Xw(e = []) {
  const t = {};
  on.groups = t;
  const n = new on();
  Hs == null && (Hs = Lf(jw)), Vs == null && (Vs = Lf(Hw)), te(n, "'", Bo), te(n, "{", Hr), te(n, "}", Vr), te(n, "[", Ao), te(n, "]", ko), te(n, "(", Oo), te(n, ")", xo), te(n, "<", No), te(n, ">", Lo), te(n, "（", Ro), te(n, "）", Io), te(n, "「", Po), te(n, "」", Do), te(n, "『", $o), te(n, "』", Mo), te(n, "＜", Fo), te(n, "＞", zo), te(n, "&", Uo), te(n, "*", jo), te(n, "@", Di), te(n, "`", Vo), te(n, "^", Go), te(n, ":", ga), te(n, ",", Au), te(n, "$", Ko), te(n, ".", Fn), te(n, "=", Wo), te(n, "!", ku), te(n, "-", gn), te(n, "%", Gr), te(n, "|", qo), te(n, "+", Yo), te(n, "#", Xo), te(n, "?", Kr), te(n, '"', Ou), te(n, "/", zn), te(n, ";", xu), te(n, "~", Wr), te(n, "_", Zo), te(n, "\\", Ho), te(n, "・", tv);
  const i = pt(n, Zn, Tu, {
    [Bc]: !0
  });
  pt(i, Zn, i);
  const a = pt(i, Xn, Qp, {
    [jr]: !0
  }), r = pt(i, Er, ev, {
    [Lr]: !0
  }), s = pt(n, Xn, Jn, {
    [jc]: !0
  });
  pt(s, Zn, a), pt(s, Xn, s), pt(a, Zn, a), pt(a, Xn, a);
  const o = pt(n, Er, Gc, {
    [Hc]: !0
  });
  pt(o, Xn), pt(o, Zn, r), pt(o, Er, o), pt(r, Zn, r), pt(r, Xn), pt(r, Er, r);
  const l = te(n, hc, Eu, {
    [uc]: !0
  }), d = te(n, Nf, qc, {
    [uc]: !0
  }), u = pt(n, fc, qc, {
    [uc]: !0
  });
  te(n, pc, u), te(d, hc, l), te(d, pc, u), pt(d, fc, u), te(u, Nf), te(u, hc), pt(u, fc, u), te(u, pc, u);
  const h = pt(n, dc, nv, {
    [Jp]: !0
  });
  te(h, "#"), pt(h, dc, h), te(h, qw, h);
  const S = te(h, Yw);
  te(S, "#"), pt(S, dc, h);
  const E = [[Xn, s], [Zn, a]], x = [[Xn, null], [Er, o], [Zn, r]];
  for (let A = 0; A < Hs.length; A++)
    Ni(n, Hs[A], Kc, Jn, E);
  for (let A = 0; A < Vs.length; A++)
    Ni(n, Vs[A], Wc, Gc, x);
  va(Kc, {
    tld: !0,
    ascii: !0
  }, t), va(Wc, {
    utld: !0,
    alpha: !0
  }, t), Ni(n, "file", Xs, Jn, E), Ni(n, "mailto", Xs, Jn, E), Ni(n, "http", ja, Jn, E), Ni(n, "https", ja, Jn, E), Ni(n, "ftp", ja, Jn, E), Ni(n, "ftps", ja, Jn, E), va(Xs, {
    scheme: !0,
    ascii: !0
  }, t), va(ja, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], F = e[A][1] ? {
      [Vw]: !0
    } : {
      [Gw]: !0
    };
    O.indexOf("-") >= 0 ? F[Vc] = !0 : Xn.test(O) ? Zn.test(O) ? F[jr] = !0 : F[jc] = !0 : F[Bc] = !0, xf(n, O, O, F);
  }
  return xf(n, "localhost", us, {
    ascii: !0
  }), n.jd = new on(Jo), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, iv)
  };
}
function av(e, t) {
  const n = Zw(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
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
function Zw(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function Ni(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new on(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new on(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function Lf(e) {
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
const ds = {
  defaultProtocol: "http",
  events: null,
  format: Rf,
  formatHref: Rf,
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
function Nu(e, t = null) {
  let n = Object.assign({}, ds);
  e && (n = Object.assign(n, e instanceof Nu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
Nu.prototype = {
  o: ds,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : ds[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Rf(e) {
  return e;
}
function rv(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
rv.prototype = {
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
  toObject(e = ds.defaultProtocol) {
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
function wl(e, t) {
  class n extends rv {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const Jw = wl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), If = wl("text"), Qw = wl("nl"), Gs = wl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = ds.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== us && e[1].t === ga;
  }
}), vn = (e) => new on(e);
function eS({
  groups: e
}) {
  const t = e.domain.concat([Uo, jo, Di, Ho, Vo, Go, Ko, Wo, gn, Tu, Gr, qo, Yo, Xo, zn, Jo, Wr, Zo]), n = [Bo, ga, Au, Fn, ku, Gr, Kr, Ou, xu, No, Lo, Hr, Vr, ko, Ao, Oo, xo, Ro, Io, Po, Do, $o, Mo, Fo, zo], i = [Uo, Bo, jo, Ho, Vo, Go, Ko, Wo, gn, Hr, Vr, Gr, qo, Yo, Xo, Kr, zn, Jo, Wr, Zo], a = vn(), r = te(a, Wr);
  $e(r, i, r), $e(r, e.domain, r);
  const s = vn(), o = vn(), l = vn();
  $e(a, e.domain, s), $e(a, e.scheme, o), $e(a, e.slashscheme, l), $e(s, i, r), $e(s, e.domain, s);
  const d = te(s, Di);
  te(r, Di, d), te(o, Di, d), te(l, Di, d);
  const u = te(r, Fn);
  $e(u, i, r), $e(u, e.domain, r);
  const h = vn();
  $e(d, e.domain, h), $e(h, e.domain, h);
  const S = te(h, Fn);
  $e(S, e.domain, h);
  const E = vn(Jw);
  $e(S, e.tld, E), $e(S, e.utld, E), te(d, us, E);
  const x = te(h, gn);
  te(x, gn, x), $e(x, e.domain, h), $e(E, e.domain, h), te(E, Fn, S), te(E, gn, x);
  const A = te(s, gn), O = te(s, Fn);
  te(A, gn, A), $e(A, e.domain, s), $e(O, i, r), $e(O, e.domain, s);
  const D = vn(Gs);
  $e(O, e.tld, D), $e(O, e.utld, D), $e(D, e.domain, s), $e(D, i, r), te(D, Fn, O), te(D, gn, A), te(D, Di, d);
  const F = te(D, ga), K = vn(Gs);
  $e(F, e.numeric, K);
  const I = vn(Gs), P = vn();
  $e(I, t, I), $e(I, n, P), $e(P, t, I), $e(P, n, P), te(D, zn, I), te(K, zn, I);
  const ce = te(o, ga), J = te(l, ga), de = te(J, zn), X = te(de, zn);
  $e(o, e.domain, s), te(o, Fn, O), te(o, gn, A), $e(l, e.domain, s), te(l, Fn, O), te(l, gn, A), $e(ce, e.domain, I), te(ce, zn, I), te(ce, Kr, I), $e(X, e.domain, I), $e(X, t, I), te(X, zn, I);
  const re = [
    [Hr, Vr],
    // {}
    [Ao, ko],
    // []
    [Oo, xo],
    // ()
    [No, Lo],
    // <>
    [Ro, Io],
    // （）
    [Po, Do],
    // 「」
    [$o, Mo],
    // 『』
    [Fo, zo]
    // ＜＞
  ];
  for (let be = 0; be < re.length; be++) {
    const [Q, ie] = re[be], $ = te(I, Q);
    te(P, Q, $);
    const M = vn(Gs);
    $e($, t, M);
    const Y = vn();
    $e($, n, Y), te($, ie, I), $e(M, t, M), $e(M, n, Y), $e(Y, t, M), $e(Y, n, Y), te(M, ie, I), te(Y, ie, I);
  }
  return te(a, us, D), te(a, Eu, Qw), {
    start: a,
    tokens: iv
  };
}
function tS(e, t, n) {
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
      s.length > 0 && (r.push(vc(If, t, s)), s = []), a -= S, u -= S;
      const E = h.t, x = n.slice(a - u, a);
      r.push(vc(E, t, x));
    }
  }
  return s.length > 0 && r.push(vc(If, t, s)), r;
}
function vc(e, t, n) {
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
function nS() {
  $t.scanner = Xw($t.customSchemes);
  for (let e = 0; e < $t.tokenQueue.length; e++)
    $t.tokenQueue[e][1]({
      scanner: $t.scanner
    });
  $t.parser = eS($t.scanner.tokens);
  for (let e = 0; e < $t.pluginQueue.length; e++)
    $t.pluginQueue[e][1]({
      scanner: $t.scanner,
      parser: $t.parser
    });
  return $t.initialized = !0, $t;
}
function sv(e) {
  return $t.initialized || nS(), tS($t.parser.start, e, av($t.scanner.start, e));
}
sv.scan = av;
function iS(e) {
  const t = new Nu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, sS), n = sv(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(ho(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function aS(e) {
  return e.replace(/"/g, "&quot;");
}
function rS(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${aS(i)}"`);
  }
  return t.join(" ");
}
function sS({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${rS(t)}>${ho(n)}</${e}>`;
}
const oS = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = iS(t.text));
}, lS = ["title"], cS = /* @__PURE__ */ Lt({
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
      Re(p(e.name), 1)
    ], 8, lS)), [
      [g(oS), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), uS = ["aria-labelledby"], dS = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, fS = ["id"], hS = {
  key: 2,
  class: "empty-content__description"
}, pS = {
  key: 3,
  class: "empty-content__action"
}, vS = /* @__PURE__ */ Lt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = ml();
    return (n, i) => (_(), T("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (_(), T("div", dS, [
        De(n.$slots, "icon", {}, void 0, !0)
      ])) : j("", !0),
      e.name !== "" || n.$slots.name ? (_(), T("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        De(n.$slots, "name", {}, () => [
          Re(p(e.name), 1)
        ], !0)
      ], 8, fS)) : j("", !0),
      e.description !== "" || n.$slots.description ? (_(), T("p", hS, [
        De(n.$slots, "description", {}, () => [
          Re(p(e.description), 1)
        ], !0)
      ])) : j("", !0),
      n.$slots.action ? (_(), T("div", pS, [
        De(n.$slots, "action", {}, void 0, !0)
      ])) : j("", !0)
    ], 8, uS));
  }
}), gS = /* @__PURE__ */ Qe(vS, [["__scopeId", "data-v-8609a4c1"]]), mS = {
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
}, bS = ["aria-hidden", "aria-label"], yS = ["fill", "width", "height"], _S = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, wS = { key: 0 };
function SS(e, t, n, i, a, r) {
  return _(), T("span", Ht(e.$attrs, {
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
      c("path", _S, [
        n.title ? (_(), T("title", wS, p(n.title), 1)) : j("", !0)
      ])
    ], 8, yS))
  ], 16, bS);
}
const CS = /* @__PURE__ */ Qe(mS, [["render", SS]]), TS = {
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
}, ES = ["aria-hidden", "aria-label"], AS = ["fill", "width", "height"], kS = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, OS = { key: 0 };
function xS(e, t, n, i, a, r) {
  return _(), T("span", Ht(e.$attrs, {
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
      c("path", kS, [
        n.title ? (_(), T("title", OS, p(n.title), 1)) : j("", !0)
      ])
    ], 8, AS))
  ], 16, ES);
}
const NS = /* @__PURE__ */ Qe(TS, [["render", xS]]), LS = {
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
}, RS = ["aria-hidden", "aria-label"], IS = ["fill", "width", "height"], PS = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, DS = { key: 0 };
function $S(e, t, n, i, a, r) {
  return _(), T("span", Ht(e.$attrs, {
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
      c("path", PS, [
        n.title ? (_(), T("title", DS, p(n.title), 1)) : j("", !0)
      ])
    ], 8, IS))
  ], 16, RS);
}
const MS = /* @__PURE__ */ Qe(LS, [["render", $S]]), FS = ["aria-selected", "tabindex"], zS = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ im({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Oh(e, "selected"), n = /* @__PURE__ */ Pe(!1);
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
          ye(Uc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Oe(() => [
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
          ye(Uc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Oe(() => [
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
    ], 10, FS));
  }
}), US = "_sidebarTabsButton_q3kBA", BS = "_sidebarTabsButton_legacy_KQ4d1", jS = "_sidebarTabsButton_selected_Pjayf", HS = "_sidebarTabsButton_animatedHighlight_uvp-0", VS = "_sidebarTabsButton__name_rlQsL", GS = "_sidebarTabsButton__icon_QzZg4", KS = "_sidebarTabsButton__iconLayer_ZkZan", WS = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", qS = "_sidebarTabsButton__icon_pop_IA0By", YS = "_sidebarTabsButton__legacyIcon_QhcNW", XS = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: US,
  sidebarTabsButton_legacy: BS,
  sidebarTabsButton_selected: jS,
  sidebarTabsButton_animatedHighlight: HS,
  sidebarTabsButton__name: VS,
  sidebarTabsButton__icon: GS,
  sidebarTabsButton__iconLayer: KS,
  sidebarTabsButton__iconLayer_hidden: WS,
  sidebarTabsButton__icon_pop: qS,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: YS
}, ZS = {
  $style: XS
}, JS = /* @__PURE__ */ Qe(zS, [["__cssModules", ZS]]), QS = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: JS
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [ry()]) : t.order - n.order), this.updateActive();
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
}, eC = { class: "app-sidebar-tabs" };
function tC(e, t, n, i, a, r) {
  const s = Ue("NcAppSidebarTabsButton");
  return _(), T("div", eC, [
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
        style: cn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : j("", !0),
      (_(!0), T(fe, null, ze(a.tabs, (o) => (_(), Fe(s, {
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
      class: we(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      De(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const nC = /* @__PURE__ */ Qe(QS, [["render", tC], ["__scopeId", "data-v-74190d2a"]]);
Vi(Uy);
const iC = {
  name: "NcAppSidebar",
  components: {
    NcActions: Eo,
    NcAppSidebarHeader: cS,
    NcAppSidebarTabs: nC,
    NcButton: jn,
    NcLoadingIcon: Zp,
    NcEmptyContent: gS,
    IconArrowRight: xp,
    IconClose: Np,
    IconDockRight: CS,
    IconStar: NS,
    IconStarOutline: MS
  },
  directives: {
    Focus: Bw,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: Uw
  },
  inject: {
    ncContentSelector: {
      from: Op,
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
    const e = /* @__PURE__ */ Pe(null);
    return mn("NcAppSidebar:header:ref", e), {
      uid: ml(),
      isMobile: Py(),
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
    isSlotPopulated: Cu,
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
      this.focusTrap || (this.focusTrap = gu([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: rs(),
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
}, aC = ["aria-labelledby"], rC = { class: "app-sidebar-header__info" }, sC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, oC = { class: "app-sidebar-header__name-container" }, lC = { class: "app-sidebar-header__mainname-container" }, cC = ["placeholder", "value"], uC = ["title"], dC = {
  key: 2,
  class: "app-sidebar-header__description"
};
function fC(e, t, n, i, a, r) {
  const s = Ue("IconDockRight"), o = Ue("NcButton"), l = Ue("NcLoadingIcon"), d = Ue("IconStar"), u = Ue("IconStarOutline"), h = Ue("NcAppSidebarHeader"), S = Ue("IconArrowRight"), E = Ue("NcActions"), x = Ue("IconClose"), A = Ue("NcAppSidebarTabs"), O = Ue("NcEmptyContent"), D = Zu("focus"), F = Zu("click-outside");
  return _(), Fe(Vm, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Oe(() => [
      Xe(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = St((...K) => r.onKeydownEsc && r.onKeydownEsc(...K), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (_(), Fe(fh, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ye(o, Ht({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (K) => e.$emit("update:open", !0))
          }), {
            icon: Oe(() => [
              De(e.$slots, "toggle-icon", {}, () => [
                ye(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : j("", !0),
        c("header", {
          class: we(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (_(), Fe(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : De(e.$slots, "info", { key: 0 }, () => [
            c("div", rC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (_(), T("div", {
                key: 0,
                class: we(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: cn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...K) => r.onFigureClick && r.onFigureClick(...K)),
                onKeydown: t[2] || (t[2] = St((...K) => r.onFigureClick && r.onFigureClick(...K), ["enter"]))
              }, [
                De(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : j("", !0),
              c("div", {
                class: we(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (_(), T("div", sC, [
                  De(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (_(), Fe(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ve(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Oe(() => [
                        n.starLoading ? (_(), Fe(l, { key: 0 })) : a.isStarred ? (_(), Fe(d, {
                          key: 1,
                          size: 20
                        })) : (_(), Fe(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : j("", !0)
                  ], !0)
                ])) : j("", !0),
                c("div", oC, [
                  c("div", lC, [
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
                      }, null, 40, cC), [
                        [D]
                      ]),
                      ye(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Oe(() => [
                          ye(S, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [F, () => r.onSubmitName()]
                    ]) : j("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (_(), Fe(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Oe(() => [
                        De(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : j("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (_(), T("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    De(e.$slots, "subname", {}, () => [
                      Re(p(n.subname), 1)
                    ], !0)
                  ], 8, uC)) : j("", !0)
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
            icon: Oe(() => [
              ye(x, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (_(), T("div", dC, [
            De(e.$slots, "description", {}, void 0, !0)
          ])) : j("", !0)
        ], 2),
        Xe(ye(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Oe(() => [
            De(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Wa, !n.loading]
        ]),
        n.loading ? (_(), Fe(O, { key: 1 }, {
          icon: Oe(() => [
            ye(l, { size: 64 })
          ]),
          _: 1
        })) : j("", !0)
      ], 40, aC), [
        [Wa, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const hC = /* @__PURE__ */ Qe(iC, [["render", fC], ["__scopeId", "data-v-c2c6820b"]]), pC = {
  name: "NcActionLink",
  mixins: [Rp],
  inject: {
    isInSemanticMenu: {
      from: mu,
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
}, vC = ["role"], gC = ["download", "href", "aria-label", "target", "title", "role"], mC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, bC = { class: "action-link__name" }, yC = ["textContent"], _C = ["textContent"], wC = {
  key: 2,
  class: "action-link__text"
};
function SC(e, t, n, i, a, r) {
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
      De(e.$slots, "icon", {}, () => [
        c("span", {
          "aria-hidden": "true",
          class: we(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: cn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (_(), T("span", mC, [
        c("strong", bC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, yC)
      ])) : e.isLongText ? (_(), T("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, _C)) : (_(), T("span", wC, p(e.text), 1)),
      j("", !0)
    ], 8, gC)
  ], 8, vC);
}
const za = /* @__PURE__ */ Qe(pC, [["render", SC], ["__scopeId", "data-v-32f01b7a"]]);
Vi(Gy);
const CC = `<!--
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
`, TC = `<!--
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
`, EC = { class: "vue-skip-actions__container" }, AC = { class: "vue-skip-actions__headline" }, kC = { class: "vue-skip-actions__buttons" }, OC = /* @__PURE__ */ Lt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    mn(kp, o), mn(Op, "#content-vue"), mn("appName", W(() => t.appName));
    const n = ms(), i = /* @__PURE__ */ Pe(!1), a = /* @__PURE__ */ Pe(), r = W(() => a.value === "navigation" ? TC : CC);
    _h(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      oi("toggle-navigation", { open: !0 }), sn(() => {
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
      (_(), Fe(fh, { to: "#skip-actions" }, [
        c("div", EC, [
          c("div", AC, p(g(Ct)("Keyboard navigation help")), 1),
          c("div", kC, [
            Xe(ye(jn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ve(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: Oe(() => [
                Re(p(g(Ct)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Wa, i.value]
            ]),
            ye(jn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: Oe(() => [
                Re(p(g(Ct)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Xe(ye(gl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Wa, !g(n)]
          ])
        ])
      ])),
      De(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), xC = /* @__PURE__ */ Qe(OC, [["__scopeId", "data-v-d13dcb98"]]), NC = { class: "library-shelf-tree-node" }, LC = ["aria-expanded", "aria-label"], RC = ["href"], IC = { class: "library-shelf-summary-title" }, PC = { dir: "auto" }, DC = { class: "library-muted" }, $C = { dir: "auto" }, MC = {
  key: 1,
  role: "status",
  class: "library-muted"
}, FC = {
  key: 2,
  role: "status",
  class: "library-muted"
}, zC = {
  key: 3,
  class: "library-shelf-tree"
}, UC = ["disabled"], BC = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Pe(!1), i = /* @__PURE__ */ Pe(!1), a = /* @__PURE__ */ Pe(!1), r = /* @__PURE__ */ Pe(!1), s = /* @__PURE__ */ Pe([]), o = /* @__PURE__ */ Pe(!1), l = /* @__PURE__ */ Pe(0);
    async function d() {
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
      return _(), T("li", NC, [
        e.node.hasChildren ? (_(), T("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(y)("library", "Collapse {folder}", { folder: e.node.label }) : g(y)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: d
        }, p(n.value ? "−" : "+"), 9, LC)) : j("", !0),
        c("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          c("span", IC, [
            c("strong", null, [
              c("bdi", PC, p(e.node.label), 1)
            ]),
            c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          c("small", DC, [
            c("bdi", $C, p(e.node.path), 1)
          ])
        ], 8, RC),
        a.value ? (_(), T("small", MC, p(g(y)("library", "Loading folders…")), 1)) : r.value ? (_(), T("small", FC, p(g(y)("library", "Could not load folders.")), 1)) : j("", !0),
        n.value && s.value.length ? (_(), T("ul", zC, [
          (_(!0), T(fe, null, ze(s.value, (x) => (_(), Fe(E, {
            key: x.id,
            node: x,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : j("", !0),
        n.value && o.value ? (_(), T("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: u
        }, p(g(y)("library", "Load more folders")), 9, UC)) : j("", !0)
      ]);
    };
  }
}, jC = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, HC = { id: "library-sidebar-filters-heading" }, VC = ["aria-label"], GC = ["name", "value"], KC = ["value"], WC = ["value"], qC = ["title"], YC = ["placeholder"], XC = { value: "" }, ZC = ["value"], JC = { class: "library-publisher-filter" }, QC = { for: "library-publisher-search" }, eT = ["placeholder", "title"], tT = ["value"], nT = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, iT = { class: "library-publication-filter" }, aT = { for: "library-publication-search" }, rT = ["placeholder", "aria-expanded"], sT = ["value"], oT = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, lT = ["onClick"], cT = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, uT = { class: "library-year-filter" }, dT = { for: "library-year-search" }, fT = ["placeholder", "aria-expanded"], hT = ["value"], pT = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, vT = ["onClick"], gT = {
  type: "submit",
  class: "button secondary library-year-apply"
}, mT = { class: "library-creator-filter" }, bT = { for: "library-creator-search" }, yT = ["placeholder", "title", "aria-expanded"], _T = ["value"], wT = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, ST = ["onClick"], CT = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, TT = ["placeholder"], ET = { value: "" }, AT = ["value"], kT = { value: "" }, OT = ["value"], xT = { value: "" }, NT = ["value"], LT = { value: "" }, RT = ["value"], IT = { class: "library-subject-filter" }, PT = { for: "library-subject-search" }, DT = ["placeholder", "title", "aria-expanded"], $T = ["value"], MT = {
  key: 0,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, FT = ["onClick"], zT = { value: "" }, UT = ["value"], BT = { value: "" }, jT = { value: "1" }, HT = {
  type: "submit",
  class: "button primary"
}, VT = {
  href: "?",
  class: "button secondary"
}, GT = ["href"], KT = ["lang", "dir"], WT = ["aria-label"], qT = ["href", "aria-label", "onClick"], YT = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, XT = { class: "library-review-header" }, ZT = { class: "library-muted library-catalogue-eyebrow" }, JT = { id: "library-review-heading" }, QT = ["aria-label"], eE = ["href", "aria-current", "onClick"], tE = ["aria-label"], nE = ["name", "value"], iE = {
  type: "submit",
  class: "button secondary"
}, aE = ["aria-busy"], rE = { key: 0 }, sE = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, oE = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, lE = { class: "library-metadata-review-workbench-copy" }, cE = { class: "library-muted library-catalogue-eyebrow" }, uE = ["title"], dE = {
  key: 0,
  class: "library-metadata-review-card"
}, fE = {
  class: "library-bidi-human",
  dir: "auto"
}, hE = { class: "library-muted" }, pE = {
  class: "library-bidi-machine",
  dir: "ltr"
}, vE = { class: "library-metadata-review-fields" }, gE = {
  class: "library-bidi-human",
  dir: "auto"
}, mE = {
  class: "library-bidi-human",
  dir: "auto"
}, bE = {
  class: "library-bidi-human",
  dir: "auto"
}, yE = {
  class: "library-bidi-machine",
  dir: "ltr"
}, _E = {
  class: "library-bidi-human",
  dir: "auto"
}, wE = {
  class: "library-bidi-human",
  dir: "auto"
}, SE = ["action"], CE = ["value"], TE = ["value"], EE = {
  type: "submit",
  class: "button secondary"
}, AE = { class: "library-metadata-review-actions" }, kE = ["href"], OE = ["href"], xE = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, NE = ["href"], LE = ["aria-label"], RE = ["onClick"], IE = {
  class: "library-bidi-human",
  dir: "auto"
}, PE = {
  key: 0,
  class: "library-muted"
}, DE = {
  class: "library-bidi-human",
  dir: "auto"
}, $E = {
  key: 1,
  class: "library-scan-error"
}, ME = {
  class: "library-bidi-human",
  dir: "auto"
}, FE = ["onClick"], zE = ["href"], UE = ["aria-label"], BE = ["href"], jE = {
  key: 1,
  class: "library-muted"
}, HE = { key: 0 }, VE = ["href"], GE = {
  key: 3,
  class: "library-muted"
}, KE = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, WE = { class: "library-home-header" }, qE = { class: "library-muted library-catalogue-eyebrow" }, YE = { id: "library-home-heading" }, XE = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, ZE = { id: "library-continue-heading" }, JE = { class: "library-muted" }, QE = ["href"], eA = {
  key: 0,
  class: "library-home-card-row"
}, tA = ["onClick"], nA = { class: "library-cover-frame" }, iA = ["src"], aA = { class: "library-cover-summary" }, rA = ["onClick"], sA = { dir: "auto" }, oA = {
  key: 0,
  class: "library-cover-creator"
}, lA = { dir: "auto" }, cA = ["href"], uA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, dA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, fA = { id: "library-recent-heading" }, hA = { class: "library-muted" }, pA = ["href"], vA = {
  key: 0,
  class: "library-home-card-row"
}, gA = ["onClick"], mA = { class: "library-cover-frame" }, bA = ["src"], yA = { class: "library-cover-summary" }, _A = ["onClick"], wA = { dir: "auto" }, SA = {
  key: 0,
  class: "library-cover-creator"
}, CA = { dir: "auto" }, TA = ["href"], EA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, AA = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, kA = { id: "library-home-shelves-heading" }, OA = { class: "library-muted" }, xA = ["href"], NA = ["aria-label"], LA = ["href"], RA = { dir: "auto" }, IA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, PA = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, DA = { id: "library-home-attention-heading" }, $A = { class: "library-muted" }, MA = ["href"], FA = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, zA = { class: "library-home-header" }, UA = { class: "library-muted library-catalogue-eyebrow" }, BA = { id: "library-shelves-landing-heading" }, jA = { class: "library-muted" }, HA = ["aria-label"], VA = { class: "library-shelf-tree" }, GA = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, KA = { class: "library-muted" }, WA = { class: "library-empty-actions" }, qA = ["href"], YA = ["href"], XA = {
  key: 4,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ZA = { class: "library-catalogue-header" }, JA = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, QA = { id: "library-catalogue-heading" }, ek = ["aria-label"], tk = ["aria-label"], nk = ["name", "value"], ik = { "data-library-control": "sort" }, ak = { value: "title" }, rk = { value: "recent" }, sk = { value: "publicationDate" }, ok = { value: "publication" }, lk = { value: "lastOpened" }, ck = { value: "format" }, uk = ["aria-label"], dk = ["aria-pressed"], fk = ["aria-pressed"], hk = ["aria-pressed"], pk = ["aria-pressed"], vk = {
  id: "library-collections",
  class: "library-saved-collections"
}, gk = ["title"], mk = ["action", "title"], bk = ["value"], yk = ["value"], _k = ["placeholder", "disabled"], wk = ["disabled", "title"], Sk = ["aria-label"], Ck = ["href"], Tk = { class: "library-saved-collection-count" }, Ek = ["action"], Ak = ["value"], kk = {
  type: "submit",
  class: "button tertiary"
}, Ok = ["aria-label"], xk = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, Nk = ["title"], Lk = { class: "library-workspace-panel-purpose" }, Rk = { class: "library-workspace-scope-badge" }, Ik = { "aria-live": "polite" }, Pk = ["action"], Dk = ["value"], $k = ["placeholder"], Mk = ["title"], Fk = ["action"], zk = ["value"], Uk = ["placeholder"], Bk = ["title"], jk = ["action"], Hk = ["value"], Vk = ["name", "value"], Gk = ["title"], Kk = ["action"], Wk = ["value"], qk = ["name", "value"], Yk = { name: "bulkEditField" }, Xk = { value: "publicationType" }, Zk = { value: "subtitle" }, Jk = { value: "creators" }, Qk = { value: "publication" }, e2 = { value: "publicationDate" }, t2 = { value: "language" }, n2 = { value: "publisher" }, i2 = { value: "subjects" }, a2 = { value: "classifications" }, r2 = ["placeholder"], s2 = ["title"], o2 = ["action"], l2 = ["value"], c2 = ["name", "value"], u2 = ["title"], d2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, f2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, h2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, p2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, v2 = { class: "library-muted library-catalogue-eyebrow" }, g2 = ["title"], m2 = ["aria-label"], b2 = { key: 0 }, y2 = { key: 1 }, _2 = { key: 2 }, w2 = ["aria-label"], S2 = { key: 0 }, C2 = { key: 1 }, T2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, E2 = { class: "library-muted library-catalogue-eyebrow" }, A2 = ["title"], k2 = ["aria-label"], O2 = ["href"], x2 = {
  key: 0,
  class: "library-notice"
}, N2 = { class: "library-publication-issue-label" }, L2 = ["href"], R2 = { class: "library-muted" }, I2 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, P2 = ["title"], D2 = ["href"], $2 = { class: "library-catalogue-status-row" }, M2 = { class: "library-muted library-filter-result-summary" }, F2 = { key: 0 }, z2 = { href: "?" }, U2 = ["aria-label"], B2 = { class: "library-pagination-range" }, j2 = { key: 0 }, H2 = ["href"], V2 = {
  key: 1,
  class: "library-muted"
}, G2 = ["href"], K2 = {
  key: 3,
  class: "library-muted"
}, W2 = ["title"], q2 = { class: "library-empty-actions" }, Y2 = ["href"], X2 = { class: "library-muted" }, Z2 = ["title"], J2 = { class: "library-empty-actions" }, Q2 = ["href"], eO = ["title"], tO = { class: "library-empty-actions" }, nO = ["href"], iO = {
  href: "?",
  class: "button primary"
}, aO = ["title"], rO = { class: "library-empty-actions" }, sO = ["href"], oO = {
  key: 5,
  class: "library-select-visible"
}, lO = ["checked"], cO = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, uO = { class: "library-item-selection" }, dO = ["checked", "aria-label", "onChange"], fO = { class: "library-catalogue-list-main" }, hO = ["onClick"], pO = {
  class: "library-bidi-human",
  dir: "auto"
}, vO = {
  key: 0,
  class: "library-muted"
}, gO = {
  class: "library-bidi-human",
  dir: "auto"
}, mO = { class: "library-catalogue-list-metadata" }, bO = { key: 0 }, yO = {
  class: "library-bidi-human",
  dir: "auto"
}, _O = { key: 1 }, wO = { key: 2 }, SO = ["dir"], CO = { key: 3 }, TO = {
  class: "library-bidi-human",
  dir: "auto"
}, EO = { class: "library-catalogue-list-actions" }, AO = ["href"], kO = ["onClick"], OO = { class: "library-item-selection" }, xO = ["checked", "aria-label", "onChange"], NO = ["aria-labelledby", "aria-expanded", "onClick"], LO = ["id"], RO = { class: "library-cover-frame" }, IO = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, PO = ["src", "onLoad", "onError"], DO = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, $O = ["action", "onSubmit"], MO = ["value"], FO = ["value"], zO = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], UO = ["data-library-star-error"], BO = { class: "library-cover-summary" }, jO = { class: "library-cover-primary" }, HO = ["id"], VO = ["onClick"], GO = {
  class: "library-bidi-human",
  dir: "auto"
}, KO = {
  key: 0,
  class: "library-cover-creator"
}, WO = {
  class: "library-bidi-human",
  dir: "auto"
}, qO = {
  key: 1,
  class: "library-cover-badges"
}, YO = {
  key: 0,
  class: "library-cover-badge"
}, XO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, ZO = {
  key: 1,
  class: "library-cover-context"
}, JO = {
  class: "library-bidi-human",
  dir: "auto"
}, QO = { class: "library-cover-primary-actions" }, ex = ["href"], tx = ["aria-label"], nx = { class: "library-pagination-range" }, ix = { key: 0 }, ax = ["href"], rx = {
  key: 1,
  class: "library-muted"
}, sx = ["href"], ox = {
  key: 3,
  class: "library-muted"
}, lx = { class: "library-sidebar-content" }, cx = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, ux = ["role"], dx = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, fx = { class: "library-sidebar-publication-header" }, hx = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, px = ["src"], vx = { class: "library-sidebar-publication-summary" }, gx = { class: "library-muted library-catalogue-eyebrow" }, mx = {
  class: "library-bidi-human",
  dir: "auto"
}, bx = { key: 0 }, yx = {
  class: "library-bidi-machine",
  dir: "ltr"
}, _x = { class: "library-detail-drawer-actions" }, wx = ["href"], Sx = ["aria-label"], Cx = ["aria-current", "onClick"], Tx = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, Ex = { id: "library-sidebar-overview-heading" }, Ax = {
  key: 0,
  class: "library-sidebar-description"
}, kx = {
  class: "library-bidi-human",
  dir: "auto"
}, Ox = { class: "library-detail-drawer-facts" }, xx = { key: 0 }, Nx = { key: 1 }, Lx = { key: 2 }, Rx = { key: 3 }, Ix = { key: 4 }, Px = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, Dx = { id: "library-sidebar-metadata-heading" }, $x = ["placeholder"], Mx = ["onUpdate:modelValue", "aria-label", "placeholder"], Fx = ["onUpdate:modelValue", "aria-label"], zx = ["onClick"], Ux = { class: "library-muted" }, Bx = {
  key: 0,
  role: "alert"
}, jx = {
  key: 1,
  role: "status"
}, Hx = ["disabled"], Vx = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, Gx = { id: "library-sidebar-suggestions-heading" }, Kx = { class: "library-muted" }, Wx = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, qx = { id: "library-sidebar-activity-heading" }, Yx = { class: "library-detail-drawer-facts" }, Xx = { key: 0 }, Zx = { key: 1 }, Jx = { key: 2 }, Qx = { dir: "ltr" }, eN = ["aria-label"], tN = ["disabled"], nN = ["disabled"], iN = 20, aN = "/apps/library", rN = 2147483647, sN = {
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
    function r(m, b) {
      return Object.prototype.hasOwnProperty.call(a, m) && String(b ?? "").trim() === a[m];
    }
    function s(m) {
      const b = new URLSearchParams(m);
      for (const f of Object.keys(a)) {
        const U = [...new Set([...b.keys()].filter((ke) => ke === f || ke.startsWith(`${f}[`)))], se = U.reduce((ke, Le) => ke + b.getAll(Le).length, 0);
        if (se > 1 || U.some((ke) => ke !== f)) {
          for (const ke of U) b.delete(ke);
          continue;
        }
        f !== "status" && se === 1 && !r(f, b.get(f)) && b.delete(f);
      }
      return b;
    }
    function o(m) {
      return Object.keys(a).some((b) => m.getAll(b).length === 1 && r(b, m.get(b)));
    }
    function l(m) {
      return Object.fromEntries(Object.entries(m || {}).filter(([b, f]) => b === "status" || !Object.prototype.hasOwnProperty.call(a, b) || r(b, f)));
    }
    const d = /* @__PURE__ */ Mt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Mt((d.items || []).map((m) => ({ ...m }))), h = W(() => u), S = W(() => d.shelves || []), E = W(() => d.formats || []), x = W(() => d.publicationTypes?.length ? d.publicationTypes : n), A = W(() => d.publications || []), O = W(() => d.publicationIssueContext || null), D = W(() => d.scanStatuses || []), F = W(() => d.workflowStatuses || []), K = W(() => d.classifications || []), I = W(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), P = /* @__PURE__ */ Mt({
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
    for (const m of Object.keys(a))
      m !== "status" && (r(m, P[m]) || (P[m] = ""));
    const ce = /* @__PURE__ */ Pe(P.publication), J = /* @__PURE__ */ Pe(P.q), de = /* @__PURE__ */ Pe(!1), X = /* @__PURE__ */ Pe(null), re = W(() => {
      const m = ce.value.trim().toLocaleLowerCase();
      return (m !== "" && X.value !== null ? X.value : A.value).filter((f) => m === "" || f.toLocaleLowerCase().includes(m)).slice(0, iN);
    });
    ot(() => P.publication, (m) => {
      ce.value = m || "";
    }), ot(() => P.q, (m) => {
      J.value = m || "";
    });
    let be = null, Q = null, ie = 0;
    ot(ce, (m) => {
      window.clearTimeout(be), Q?.abort(), Q = null, X.value = null;
      const b = String(m || "").trim();
      if (b === "") return;
      const f = ++ie;
      be = window.setTimeout(() => {
        fv(b, f);
      }, 200);
    });
    const $ = /* @__PURE__ */ Pe(P.publisher);
    ot(() => P.publisher, (m) => {
      $.value = m || "";
    });
    const M = /* @__PURE__ */ Pe(P.creator), Y = /* @__PURE__ */ Pe(!1), ae = /* @__PURE__ */ Pe(null), ne = W(() => ae.value || []);
    ot(() => P.creator, (m) => {
      M.value = m || "";
    });
    let pe = null, he = null, Se = 0;
    ot(M, (m) => {
      window.clearTimeout(pe), he?.abort(), he = null, ae.value = null;
      const b = String(m || "").trim();
      if (b === "") return;
      const f = ++Se;
      pe = window.setTimeout(() => {
        cv(b, f);
      }, 200);
    });
    const ve = /* @__PURE__ */ Pe(P.subject), je = /* @__PURE__ */ Pe(!1), Ee = /* @__PURE__ */ Pe(null), at = W(() => Ee.value || []);
    ot(() => P.subject, (m) => {
      ve.value = m || "";
    });
    let lt = null, rt = null, Et = 0;
    ot(ve, (m) => {
      window.clearTimeout(lt), rt?.abort(), rt = null, Ee.value = null;
      const b = String(m || "").trim();
      if (b.length < 2) return;
      const f = ++Et;
      lt = window.setTimeout(() => {
        uv(b, f);
      }, 200);
    });
    const qe = /* @__PURE__ */ Pe(P.year), Rt = /* @__PURE__ */ Pe(!1), B = /* @__PURE__ */ Pe(null), v = W(() => B.value || []);
    ot(() => P.year, (m) => {
      qe.value = m || "";
    });
    let C = null, k = null, L = 0;
    ot(qe, (m) => {
      window.clearTimeout(C), k?.abort(), k = null, B.value = null;
      const b = String(m || "").trim();
      if (b === "") return;
      const f = ++L;
      C = window.setTimeout(() => {
        dv(b, f);
      }, 200);
    });
    const N = Object.fromEntries(Object.keys(P).map((m) => [m, m === "sort" ? "title" : m === "view" ? "compact" : ""])), z = window.location.pathname.indexOf(aN), G = z >= 0 ? window.location.pathname.slice(0, z) : "", V = {
      catalogue: `${G}/apps/library/`,
      review: `${G}/apps/library/?scannerConflicts=1`,
      settings: `${G}/settings/user/library`
    };
    function Z(m, b) {
      if (typeof m != "string" || m === "") return b;
      try {
        const f = G ? `${G}/` : "/";
        let U = m;
        for (let se = 0; se < 5; se += 1) {
          if (!U.startsWith("/") || U.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(U)) return b;
          const ke = new URL(U, window.location.origin);
          if (ke.origin !== window.location.origin || !ke.pathname.startsWith(f)) return b;
          const Le = U.split(/[?#]/, 1)[0];
          for (const tn of Le.split("/")) {
            let Ai = tn;
            for (let Pa = 0; Pa < 5; Pa += 1) {
              const Pn = decodeURIComponent(Ai);
              if (/[\\/\u0000-\u001f\u007f]/.test(Pn) || Pn === "." || Pn === "..") return b;
              if (Pn === Ai) break;
              if (Ai = Pn, Pa === 4) return b;
            }
          }
          const ht = decodeURI(U);
          if (ht === U) return m;
          U = ht;
        }
        return b;
      } catch {
        return b;
      }
    }
    const H = W(() => Z(d.settingsUrl, V.settings)), ue = W(() => Z(d.catalogueRootUrl, V.catalogue)), oe = W(() => Z(d.homeUrl, `${V.catalogue}?home=1`)), me = W(() => Z(d.shelvesUrl, `${V.catalogue}?shelves=1`)), Ce = W(() => Z(d.reviewUrl || d.scannerConflictReviewUrl, V.review)), xe = W(() => Object.entries(a).some(([m, b]) => P[m] === b)), Me = W(() => i.reduce((m, b) => m + Number(xl.value[b.countKey] || 0), 0)), Ie = W(() => d.surface === "home"), Ye = W(() => d.surface === "shelves"), st = W(() => !Ie.value && !Ye.value && !xe.value && !P.starred && P.sort !== "lastOpened" && !P.shelf), At = W(() => [
      { key: "home", name: y("library", "Home"), href: oe.value, active: Ie.value },
      { key: "all", name: y("library", "All publications"), href: ue.value, active: st.value },
      { key: "starred", name: y("library", "Starred"), href: `${ue.value}?starred=1`, active: P.starred === "1" },
      { key: "continue", name: y("library", "Continue reading"), href: `${ue.value}?sort=lastOpened`, active: P.sort === "lastOpened" },
      { key: "shelves", name: y("library", "Shelves"), href: me.value, active: Ye.value || !!P.shelf },
      { key: "collections", name: y("library", "Collections"), href: `${ue.value}#library-collections`, active: !1 }
    ]), it = W(() => d.requestToken || ""), Vt = W(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), Gn = W(() => d.shelfChildrenUrl || "/apps/library/shelves/children"), vt = W(() => d.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Gt = W(() => d.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Ki = W(() => d.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Wi = W(() => d.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Qa = W(() => d.itemSidebarUrlTemplate || `${G}/apps/library/items/__ITEM_ID__/sidebar`), er = W(() => d.batchTagUrl || "/apps/library/bulk/tags"), pi = W(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), vi = W(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), bs = W(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), ys = W(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), tr = W(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const Ta = W(() => d.discoveryPage === "publication"), Ea = W(() => d.discoveryPage === "year"), gi = W(() => d.discoveryPage === "creator"), mi = W(() => Ta.value || Ea.value || gi.value), Jt = W(() => d.discoveryTitle || P.publication || P.year || P.creator || ""), bi = W(() => mi.value ? Jt.value : y("library", "Library")), Aa = W(() => gi.value ? y("library", "Creator") : Ea.value ? y("library", "Publication year") : y("library", "Publication / series")), ka = W(() => Number(d.rootCount || 0)), Sl = W(() => Number(d.enabledRootCount || 0)), Oa = W(() => ka.value === 0), qi = W(() => ka.value > 0 && Sl.value === 0), nr = W(() => Yi.value.length > 0), xa = {
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
    }, _s = W(() => {
      if (typeof window > "u") return "";
      const m = new URLSearchParams(window.location.search);
      if (m.get("batchMetadataApplyResult") !== "1") return "";
      const b = m.get("batchMetadataField") || "field", f = m.get("batchMetadataApplied") || "0", U = m.get("batchMetadataUnchanged") || "0", se = m.get("batchMetadataSkipped") || "0";
      return y("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: b, unchanged: U, skipped: se });
    }), yi = W(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? y("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), ws = W(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? y("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Ss = W(() => d.savedCollections || []), ct = W(() => d.savedCollectionSaveUrl || "/apps/library/collections"), _i = W(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Cs = ["compact", "gallery", "list", "shelf"], Kt = W(() => Cs.includes(P.view) ? P.view : "compact"), ir = W(() => ({
      "library-cover-gallery--compact": Kt.value === "compact",
      "library-cover-gallery--gallery": Kt.value === "gallery",
      "library-cover-gallery--shelf": Kt.value === "shelf"
    })), Yi = W(() => Object.entries(xa).map(([m, b]) => ({ key: m, label: y("library", b), value: P[m] || "" })).filter((m) => String(m.value).trim() !== "" && !(m.key === "sort" && m.value === "title") && !(m.key === "view" && m.value === "compact"))), Ts = /* @__PURE__ */ new Set([
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
    ]), Cl = W(() => Object.entries(l(P)).filter(([m, b]) => !Ts.has(m) && String(b || "").trim() !== "").map(([m, b]) => ({ key: m, value: b }))), Tl = W(() => Object.entries(P).filter(([m, b]) => !["q", "sort", "starred"].includes(m) && String(b || "").trim() !== "").map(([m, b]) => ({ key: m, value: b }))), Na = W(() => Object.entries(l(P)).filter(([m, b]) => String(b || "").trim() !== "").map(([m, b]) => ({ key: m, value: b }))), El = W(() => Na.value.filter(({ key: m, value: b }) => m !== "q" && !(m === "sort" && b === "title"))), un = /* @__PURE__ */ Mt({}), Xi = W(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), Zi = W(() => d.homeShelves || []), Nn = W(() => d.shelfTree || []), ar = W(() => d.needsAttention || { count: 0, url: `${ue.value}?needsMetadata=1` }), It = /* @__PURE__ */ Pe([]), Ji = W(() => new Set(It.value));
    function Es(m, b) {
      const f = new Set(It.value);
      b ? f.add(Number(m)) : f.delete(Number(m)), It.value = [...f];
    }
    function As(m) {
      It.value = m.currentTarget.checked ? h.value.map((b) => Number(b.id)) : [];
    }
    function ks() {
      const m = new Set(h.value.map((b) => Number(b.id)));
      It.value = It.value.filter((b) => m.has(b));
    }
    function La(m) {
      const b = m.target;
      if (b instanceof HTMLFormElement) {
        b.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of It.value) {
          const U = document.createElement("input");
          U.type = "hidden", U.name = "itemIds[]", U.value = String(f), U.dataset.librarySelectedId = "1", b.appendChild(U);
        }
      }
    }
    const Te = /* @__PURE__ */ Pe(null), dn = /* @__PURE__ */ Pe(null), dt = /* @__PURE__ */ Mt({ loading: !1, error: "", missing: !1 }), Qt = /* @__PURE__ */ Pe("overview"), ft = /* @__PURE__ */ Mt({ saving: !1, saved: !1, error: "" }), _t = /* @__PURE__ */ Mt({ title: "", publicationDate: "", identifiers: [] }), Qi = /* @__PURE__ */ Pe(null), Kn = /* @__PURE__ */ Pe(null), Ln = /* @__PURE__ */ Pe(!1);
    let Ra = null, fn = null, ea = null, rr = !1, wi = null, sr = 0;
    const Rn = W(() => dn.value !== null), Si = W(() => Te.value ? h.value.findIndex((m) => m.id === Te.value.id) : -1), Wn = W(() => Si.value > 0 ? h.value[Si.value - 1] : null), Ci = W(() => Si.value >= 0 && Si.value < h.value.length - 1 ? h.value[Si.value + 1] : null), ee = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], w = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function R(m) {
      const b = String(m ?? "").trim(), f = b.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : b;
    }
    function q(m) {
      return { ...m, publicationDate: R(m?.publicationDate) };
    }
    function le(m) {
      _t.title = String(m?.title || ""), _t.publicationDate = R(m?.publicationDate), _t.identifiers = Array.isArray(m?.identifiers) ? m.identifiers.map((b) => ({ scheme: String(b?.scheme || ""), displayValue: String(b?.displayValue || b?.value || "") })) : [], Object.assign(ft, { saving: !1, saved: !1, error: "" });
    }
    function ge() {
      _t.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Ae(m) {
      _t.identifiers.splice(m, 1);
    }
    async function et() {
      const m = Te.value;
      if (!m?.updateUrl || ft.saving) return;
      Object.assign(ft, { saving: !0, saved: !1, error: "" });
      const b = new FormData();
      b.set("requesttoken", it.value), b.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const U = m[f];
        b.set(f, Array.isArray(U) ? U.join(", ") : String(U ?? ""));
      }
      b.set("title", _t.title), b.set("publicationDate", R(_t.publicationDate)), _t.identifiers.forEach((f, U) => {
        b.set(`identifiers[${U}][scheme]`, f.scheme), b.set(`identifiers[${U}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(m.updateUrl, { method: "POST", body: b, credentials: "same-origin", headers: { Accept: "application/json" } }), U = await f.json().catch(() => ({}));
        if (!f.ok || U.saved !== !0) throw new Error(U.error || y("library", "Metadata could not be saved."));
        m.title = _t.title.trim(), m.publicationDate = R(_t.publicationDate), m.identifiers = _t.identifiers.filter((ke) => ke.scheme.trim() || ke.displayValue.trim()).map((ke) => ({ ...ke }));
        const se = h.value.find((ke) => Number(ke.id) === Number(m.id));
        se && (se.title = m.title, se.publicationDate = m.publicationDate), ft.saved = !0;
      } catch (f) {
        ft.error = f?.message || y("library", "Metadata could not be saved.");
      } finally {
        ft.saving = !1;
      }
    }
    const Ke = W(() => {
      const m = r("scannerConflicts", P.scannerConflicts) || r("weakMetadata", P.weakMetadata), b = m ? h.value.find((f) => Ti(f).length > 0) : null;
      return {
        enabled: m,
        item: b,
        fields: b ? Ti(b) : [],
        reviewNextUrl: tr.value,
        skipUrl: I.value.nextUrl || tr.value
      };
    }), Pt = W(() => i.map((m) => ({
      ...m,
      label: y("library", m.label),
      href: `${ue.value}?${encodeURIComponent(m.key)}=${encodeURIComponent(m.value)}`,
      active: String(P[m.key] || "") === m.value
    })));
    function wt(m) {
      return Array.isArray(m) ? JSON.stringify(m) : m == null ? "" : String(m);
    }
    function Ti(m) {
      const b = m.fieldValues || {}, f = m.fieldSources || {};
      return ee.filter((U) => Object.prototype.hasOwnProperty.call(b, U)).map((U) => {
        const se = wt(m[U]), ke = wt(b[U]), Le = wt(f[U] || m.metadataSource || "scanner"), ht = Le.includes("filename") || Le.includes("path") ? ke : "", tn = Le.includes("sidecar") ? ke : "";
        return { field: U, currentValue: se, scannerCandidate: ke, pathTemplateCandidate: ht, sidecarValue: tn, sourceProvenance: Le, differs: se !== ke };
      }).filter((U) => U.differs);
    }
    let ut = 0, ta = null;
    function Lu() {
      const m = new URLSearchParams(window.location.search).getAll("item");
      if (m.length !== 1 || !/^[1-9][0-9]*$/.test(m[0])) return null;
      const b = Number(m[0]);
      return Number.isSafeInteger(b) && b <= rN ? b : null;
    }
    function Ru(m, b = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), m !== null && f.searchParams.set("item", String(m)), history[`${b}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function or(m, { historyMode: b = "push", seed: f = null } = {}) {
      ta?.abort();
      const U = ++ut, se = new AbortController();
      ta = se, dn.value = m, Qt.value = "overview", Te.value = f && Number(f.id) === m ? q(f) : null, Te.value && le(Te.value), Object.assign(dt, { loading: !0, error: "", missing: !1 }), b !== "none" && Ru(m, b);
      try {
        const ke = Qa.value.replace("__ITEM_ID__", encodeURIComponent(String(m))), Le = await fetch(ke, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: se.signal });
        if (U !== ut) return;
        if (!Le.ok) {
          Te.value = null, dt.missing = Le.status === 404, dt.error = Le.status === 404 ? y("library", "This publication is unavailable or you do not have access.") : y("library", "Could not load publication details. Try again.");
          return;
        }
        const ht = await Le.json();
        if (U !== ut) return;
        if (typeof ht?.item?.id != "number" || !Number.isSafeInteger(ht.item.id) || ht.item.id !== m) {
          Te.value = null, dt.missing = !1, dt.error = y("library", "Could not load publication details. Try again.");
          return;
        }
        Te.value = q(ht.item), le(Te.value), await sn();
      } catch (ke) {
        U === ut && ke?.name !== "AbortError" && (Te.value = null, dt.missing = !1, dt.error = y("library", "Could not load publication details. Try again."));
      } finally {
        U === ut && (dt.loading = !1, ta = null);
      }
    }
    function In(m, b) {
      Al(), Ra = b?.currentTarget instanceof HTMLElement ? b.currentTarget : null, or(Number(m.id), { seed: m });
    }
    function Os({ historyMode: m = "push", restoreFocus: b = !0 } = {}) {
      ea = b ? Ra : null, Ra = null, ta?.abort(), ta = null, ut += 1, dn.value = null, Te.value = null, Qt.value = "overview", Object.assign(dt, { loading: !1, error: "", missing: !1 }), m !== "none" && Ru(null, m);
    }
    function Iu() {
      Ln.value ? (Kn.value?.$refs?.sidebar || Kn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Qi.value?.focus();
    }
    function ov() {
      const m = ea;
      if (ea = null, Al(), rr || !m?.isConnected) return;
      const b = sr;
      wi = window.requestAnimationFrame(() => {
        wi = null, !(b !== sr || rr || Rn.value || !m.isConnected) && m.focus();
      });
    }
    function Al() {
      sr += 1, wi !== null && (window.cancelAnimationFrame(wi), wi = null);
    }
    function lr(m = fn) {
      Ln.value = !!m?.matches, Rn.value && sn(Iu);
    }
    function xs(m) {
      m && or(Number(m.id), { seed: m });
    }
    const cr = /* @__PURE__ */ Pe(null);
    let en = 0, Ia = null, Ns = null, ur = null;
    const Cn = /* @__PURE__ */ Mt({ loading: !1, error: "" });
    function lv(m) {
      const b = s(new FormData(m));
      b.delete("publicationSearch"), b.delete("creatorSearch"), b.delete("subjectSearch"), b.delete("publisherSearch"), b.delete("yearSearch");
      for (const f of Array.from(b.keys()))
        String(b.get(f) || "").trim() === "" && b.delete(f);
      return b.delete("page"), b.get("view") === "compact" && b.delete("view"), b;
    }
    async function kl(m, b, f) {
      const U = new URLSearchParams();
      for (const [Le, ht] of Object.entries(P)) {
        const tn = String(ht || "").trim();
        Le !== m && tn !== "" && !(Le === "sort" && tn === "title") && !(Le === "view" && tn === "compact") && U.set(Le, tn);
      }
      U.set(`${m}Search`, b);
      const se = new AbortController();
      m === "creator" ? he = se : m === "subject" ? rt = se : k = se;
      const ke = m === "creator" ? Gt.value : m === "subject" ? Ki.value : Wi.value;
      try {
        const Le = await fetch(`${ke}?${U}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: se.signal });
        if (!Le.ok) throw new Error(`${m} suggestions request failed: ${Le.status}`);
        const ht = await Le.json(), tn = m === "creator" ? Se : m === "subject" ? Et : L, Ai = m === "creator" ? M.value : m === "subject" ? ve.value : qe.value;
        f === tn && Ai.trim() === b && (m === "creator" ? ae.value = Array.isArray(ht.creators) ? ht.creators : [] : m === "subject" ? Ee.value = Array.isArray(ht.subjects) ? ht.subjects : [] : B.value = Array.isArray(ht.years) ? ht.years : []);
      } catch (Le) {
        Le?.name !== "AbortError" && (m === "creator" && f === Se && (ae.value = null), m === "subject" && f === Et && (Ee.value = null), m === "year" && f === L && (B.value = null));
      }
    }
    function cv(m, b) {
      return kl("creator", m, b);
    }
    function uv(m, b) {
      return kl("subject", m, b);
    }
    function dv(m, b) {
      return kl("year", m, b);
    }
    async function fv(m, b) {
      const f = new URLSearchParams();
      for (const [se, ke] of Object.entries(P)) {
        const Le = String(ke || "").trim();
        se !== "publication" && Le !== "" && !(se === "sort" && Le === "title") && !(se === "view" && Le === "compact") && f.set(se, Le);
      }
      f.set("publicationSearch", m);
      const U = new AbortController();
      Q = U;
      try {
        const se = await fetch(`${vt.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: U.signal
        });
        if (!se.ok) throw new Error(`Publication suggestions request failed: ${se.status}`);
        const ke = await se.json();
        b === ie && ce.value.trim() === m && (X.value = Array.isArray(ke.publications) ? ke.publications : []);
      } catch (se) {
        se?.name !== "AbortError" && b === ie && (X.value = null);
      } finally {
        b === ie && (Q = null);
      }
    }
    function hv(m) {
      u.splice(0, u.length, ...(m.items || []).map((f) => ({ ...f }))), ks();
      const b = new Set(m.facetsDeferred ? [
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
      for (const f of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "subjectSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "smartViewCountsPending", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        !b.has(f) && Object.prototype.hasOwnProperty.call(m, f) && (d[f] = m[f]);
      Object.assign(P, N, m.activeFilters || {});
    }
    async function pv() {
      if (d.surface !== "index") return;
      const m = en, b = JSON.stringify({ ...P }), f = new URLSearchParams();
      f.set("hydrate", "1");
      for (const [se, ke] of Object.entries(P)) {
        const Le = String(ke || "").trim();
        Le !== "" && !(se === "sort" && Le === "title") && !(se === "view" && Le === "compact") && f.set(se, Le);
      }
      const U = new AbortController();
      Ns = U;
      try {
        const se = await fetch(`${Vt.value}${f.size ? `?${f}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: U.signal
        });
        if (!se.ok) return;
        const ke = await se.json();
        if (m !== en || b !== JSON.stringify({ ...P })) return;
        for (const Le of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(ke, Le) && (d[Le] = ke[Le]);
      } catch (se) {
        if (se?.name !== "AbortError") return;
      } finally {
        Ns === U && (Ns = null);
      }
    }
    async function hn(m, b = null) {
      const f = m?.currentTarget?.tagName === "FORM" ? m.currentTarget : m?.currentTarget?.form;
      if (!f && !b?.params) return;
      const U = s(b?.params ?? lv(f));
      if (Ie.value || Ye.value) {
        dr(U, ue.value);
        return;
      }
      const se = U.toString(), ke = se ? `?${se}` : "", Le = b?.generation ?? ++en, ht = o(U), tn = b?.historyMode ?? (ht ? "push" : "replace"), Ai = b?.historyTraversal === !0;
      if (Le !== en) return;
      b === null && Ia?.abort();
      const Pa = new AbortController();
      Ia = Pa, Cn.loading = !0, Cn.error = "";
      try {
        const Pn = await fetch(Vt.value + ke, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Pa.signal
        });
        if (Le !== en) return;
        if (!Pn.ok) {
          Ai ? dr(U) : ht ? Cn.error = y("library", "Could not load this review queue. Try again.") : dr(U);
          return;
        }
        const Fv = await Pn.json();
        if (Le !== en) return;
        hv(Fv), tn !== "none" && (history[tn === "push" ? "pushState" : "replaceState"]({}, "", se ? `?${se}` : window.location.pathname), Rn.value && Os({ historyMode: "none" }));
      } catch (Pn) {
        Le === en && Pn?.name !== "AbortError" && (Ai ? dr(U) : ht ? Cn.error = y("library", "Could not load this review queue. Try again.") : dr(U));
      } finally {
        Le === en && (Ia = null, Cn.loading = !1);
      }
    }
    function Pu() {
      Ia?.abort();
      const m = new URLSearchParams(window.location.search), b = Lu();
      m.has("item") && b === null && (m.delete("item"), history.replaceState({}, "", `${window.location.pathname}${m.toString() ? `?${m}` : ""}${window.location.hash}`)), b === null ? Os({ historyMode: "none" }) : or(b, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === b) || null }), m.delete("item"), hn(null, {
        params: s(m),
        generation: ++en,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function dr(m, b = window.location.pathname) {
      const f = document.createElement("form");
      f.method = "get", f.action = b, f.hidden = !0;
      for (const [U, se] of m.entries()) {
        const ke = document.createElement("input");
        ke.type = "hidden", ke.name = U, ke.value = se, f.appendChild(ke);
      }
      document.body.appendChild(f), f.submit(), f.remove();
    }
    function Ei(m, b = null, f = null) {
      if (b === null) {
        hn(m);
        return;
      }
      hn({ currentTarget: m }, { params: b, generation: f });
    }
    async function vv(m, b = ce.value) {
      P.publication = String(b || "").trim(), ce.value = P.publication, de.value = !1, await sn(), hn({ currentTarget: m });
    }
    function gv(m, b) {
      vv(b.currentTarget.form, m);
    }
    async function mv(m) {
      P.q = String(J.value || "").trim(), P.publication = String(ce.value || "").trim(), P.publisher = String($.value || "").trim(), P.creator = String(M.value || "").trim(), P.subject = String(ve.value || "").trim(), P.year = String(qe.value || "").trim(), de.value = !1, Y.value = !1, je.value = !1, Rt.value = !1, await sn(), hn({ currentTarget: m });
    }
    async function Ol(m, b, f) {
      P[b] = String(f || "").trim(), b === "creator" ? (M.value = P.creator, Y.value = !1) : b === "subject" ? (ve.value = P.subject, je.value = !1) : (qe.value = P.year, Rt.value = !1), await sn(), hn({ currentTarget: m });
    }
    function bv(m) {
      mv(m.currentTarget);
    }
    function yv(m, b) {
      Ol(b.currentTarget.form, "creator", m);
    }
    function Du(m, b = ve.value) {
      window.clearTimeout(lt), rt?.abort(), rt = null, Ol(m, "subject", b);
    }
    function _v(m) {
      Du(m.currentTarget.form);
    }
    function wv(m, b) {
      Du(b.currentTarget.form, m);
    }
    function Sv(m, b) {
      Ol(b.currentTarget.form, "year", m);
    }
    function $u(m) {
      const b = new URLSearchParams();
      for (const [f, U] of Object.entries(P)) {
        const se = String(U || "").trim();
        se !== "" && f !== m && !(f === "sort" && se === "title") && !(f === "view" && se === "compact") && b.set(f, se);
      }
      return b;
    }
    function Mu(m) {
      const b = $u(m).toString();
      return Ie.value || Ye.value ? `${ue.value}${b ? `?${b}` : ""}` : b ? `?${b}` : "?";
    }
    function Cv(m) {
      const b = $u(m);
      P[m] = m === "sort" ? "title" : m === "view" ? "compact" : "", hn(null, {
        params: b,
        generation: ++en
      });
    }
    function Tv(m) {
      const b = new URL(m.href, window.location.origin).searchParams;
      hn(null, {
        params: b,
        generation: ++en
      });
    }
    function Ev() {
      return Mu("q");
    }
    const xl = W(() => d.smartViewCounts || {}), Av = W(() => new Set(d.smartViewCountsPending || []));
    function kv(m) {
      return Av.value.has(m) || !Object.prototype.hasOwnProperty.call(xl.value, m) ? "—" : Number(xl.value[m] || 0);
    }
    const Fu = W(() => {
      const m = {};
      for (const [b, f] of Object.entries(P)) {
        const U = String(f || "").trim();
        U !== "" && !(b === "sort" && U === "title") && (m[b] = U);
      }
      return m;
    }), Ov = W(() => JSON.stringify(Fu.value)), Nl = W(() => Object.keys(Fu.value).length > 0);
    function Ls(m) {
      if (!Cs.includes(m)) return;
      P.view = m;
      const b = new URLSearchParams();
      for (const [f, U] of Object.entries(l(P))) {
        const se = String(U || "").trim();
        se !== "" && !(f === "sort" && se === "title") && !(f === "view" && se === "compact") && b.set(f, se);
      }
      b.delete("page"), hn(null, {
        params: b,
        generation: ++en
      });
    }
    function xv(m) {
      const b = s(window.location.search);
      for (const U of Object.keys(xa))
        b.delete(U);
      b.delete("page");
      for (const [U, se] of Object.entries(m))
        String(se || "").trim() !== "" && b.set(U, String(se));
      const f = b.toString();
      return f ? `?${f}` : "?";
    }
    function Nv(m) {
      return xv(m || {});
    }
    function Lv(m) {
      return _i.value.replace("__COLLECTION_ID__", encodeURIComponent(String(m || "0")));
    }
    function fr(m) {
      return String(m || "").toUpperCase();
    }
    function hr(m) {
      return un[m.id] || "loading";
    }
    function Rv(m) {
      un[m.id] = "loaded";
    }
    function Iv(m) {
      un[m.id] = "error";
    }
    function Ll(m) {
      const b = String(m?.publication || "").trim(), f = String(m?.publicationDate || "").trim();
      return b && f ? `${b} · ${f}` : b || f ? b || f : [m?.publicationType, fr(m?.extension)].filter(Boolean).join(" · ");
    }
    function Pv(m) {
      const b = String(m?.tagName || "").toLowerCase();
      return m?.isContentEditable || ["input", "select", "textarea", "button"].includes(b);
    }
    function Dv(m) {
      m.key !== "/" || m.metaKey || m.ctrlKey || m.altKey || m.shiftKey || Pv(m.target) || (m.preventDefault(), cr.value?.focus(), cr.value?.select?.());
    }
    async function $v(m) {
      m.key !== "Escape" || document.activeElement !== cr.value || P.q === "" || (m.preventDefault(), J.value = "", P.q = "", await sn(), Ei({ currentTarget: cr.value }));
    }
    function Mv(m) {
      if (!Rn.value || m.metaKey || m.ctrlKey || m.altKey)
        return !1;
      if (m.key === "Escape")
        return m.preventDefault(), Os(), !0;
      if (m.key === "Tab" && Ln.value) {
        if (Kn.value?.focusTrap) return !1;
        const b = Kn.value?.$refs?.sidebar || Kn.value?.$el || Kn.value, f = [...b?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((ke) => !ke.hidden && ke.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const U = f[0], se = f[f.length - 1];
        if (m.shiftKey && (document.activeElement === U || !b.contains(document.activeElement)))
          return m.preventDefault(), se.focus(), !0;
        if (!m.shiftKey && (document.activeElement === se || !b.contains(document.activeElement)))
          return m.preventDefault(), U.focus(), !0;
      }
      return m.key === "ArrowLeft" && Wn.value ? (m.preventDefault(), xs(Wn.value), !0) : m.key === "ArrowRight" && Ci.value ? (m.preventDefault(), xs(Ci.value), !0) : !1;
    }
    function zu(m) {
      Mv(m) || (Dv(m), $v(m));
    }
    Hi(() => {
      window.addEventListener("keydown", zu), window.addEventListener("popstate", Pu), fn = window.matchMedia?.("(max-width: 1023px)") || null, lr(), fn?.addEventListener ? fn.addEventListener("change", lr) : fn?.addListener?.(lr);
      const m = new URLSearchParams(window.location.search), b = Lu();
      m.has("item") && b === null ? (m.delete("item"), history.replaceState({}, "", `${window.location.pathname}${m.toString() ? `?${m}` : ""}${window.location.hash}`)) : b !== null && or(b, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === b) || null }), ur = window.requestAnimationFrame(() => {
        ur = null, pv();
      });
    }), Ja(() => {
      rr = !0, Al(), window.removeEventListener("keydown", zu), window.removeEventListener("popstate", Pu), window.clearTimeout(be), window.clearTimeout(pe), window.clearTimeout(lt), window.clearTimeout(C), Q?.abort(), he?.abort(), rt?.abort(), k?.abort(), en += 1, ur !== null && window.cancelAnimationFrame(ur), ur = null, Ns?.abort(), Ia?.abort(), Ia = null, ut += 1, ta?.abort(), ta = null, fn?.removeEventListener ? fn.removeEventListener("change", lr) : fn?.removeListener?.(lr), fn = null, ea = null;
    });
    const pr = /* @__PURE__ */ Mt({}), vr = /* @__PURE__ */ Mt({});
    async function Uu(m, b) {
      const f = b?.currentTarget?.closest?.("form") || b?.currentTarget;
      if (!f || !m?.starUrl || pr[m.id]) return;
      const U = !!m.starred;
      pr[m.id] = !0, vr[m.id] = "", m.starred = !U;
      try {
        (await fetch(m.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (m.starred = U, vr[m.id] = y("library", "Could not update star. Try again."));
      } catch {
        m.starred = U, vr[m.id] = y("library", "Could not update star. Try again.");
      } finally {
        pr[m.id] = !1;
      }
    }
    return (m, b) => (_(), Fe(g(xC), { "app-name": "library" }, {
      default: Oe(() => [
        ye(g(u1), {
          "aria-label": g(y)("library", "Library navigation")
        }, {
          list: Oe(() => [
            ye(g(Ap), null, {
              default: Oe(() => [
                (_(!0), T(fe, null, ze(At.value, (f) => (_(), Fe(g(Of), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                ye(g(Of), {
                  active: xe.value,
                  href: Ce.value,
                  name: Me.value > 0 ? `${g(y)("library", "Review")} (${Me.value})` : g(y)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Oe(() => [
            c("section", jC, [
              c("h2", HC, p(g(y)("library", "Filters")), 1),
              c("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(y)("library", "Catalogue search and filters"),
                onSubmit: Ve(bv, ["prevent"])
              }, [
                (_(!0), T(fe, null, ze(Cl.value, (f) => (_(), T("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, GC))), 128)),
                P.sort && P.sort !== "title" ? (_(), T("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: P.sort
                }, null, 8, KC)) : j("", !0),
                P.view && P.view !== "compact" ? (_(), T("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: P.view
                }, null, 8, WC)) : j("", !0),
                c("label", {
                  class: "library-quick-filter-search",
                  title: g(y)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  c("span", null, [
                    Re(p(g(y)("library", "Search")) + " ", 1),
                    b[44] || (b[44] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  Xe(c("input", {
                    ref_key: "quickSearchInput",
                    ref: cr,
                    "onUpdate:modelValue": b[0] || (b[0] = (f) => J.value = f),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: g(y)("library", "Title, creator, description, filename or folder")
                  }, null, 8, YC), [
                    [an, J.value]
                  ])
                ], 8, qC),
                c("label", null, [
                  Re(p(g(y)("library", "Type")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": b[1] || (b[1] = (f) => P.type = f),
                    name: "type",
                    onChange: b[2] || (b[2] = (f) => Ei(f))
                  }, [
                    c("option", XC, p(g(y)("library", "All types")), 1),
                    (_(!0), T(fe, null, ze(x.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, ZC))), 128))
                  ], 544), [
                    [Oi, P.type]
                  ])
                ]),
                c("div", JC, [
                  c("label", QC, p(g(y)("library", "Publisher")), 1),
                  Xe(c("input", {
                    id: "library-publisher-search",
                    "onUpdate:modelValue": b[3] || (b[3] = (f) => $.value = f),
                    type: "search",
                    name: "publisherSearch",
                    autocomplete: "off",
                    placeholder: g(y)("library", "Search publishers"),
                    title: g(y)("library", "Exact publisher matches only")
                  }, null, 8, eT), [
                    [an, $.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publisher",
                    value: P.publisher
                  }, null, 8, tT),
                  c("button", nT, p(g(y)("library", "Apply publisher")), 1)
                ]),
                c("div", iT, [
                  c("label", aT, p(g(y)("library", "Series / periodical")), 1),
                  Xe(c("input", {
                    id: "library-publication-search",
                    "onUpdate:modelValue": b[4] || (b[4] = (f) => ce.value = f),
                    type: "search",
                    name: "publicationSearch",
                    autocomplete: "off",
                    placeholder: g(y)("library", "Search series and periodicals"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publication-suggestions",
                    "aria-expanded": de.value && re.value.length > 0 ? "true" : "false",
                    onFocus: b[5] || (b[5] = (f) => de.value = !0),
                    onKeydown: b[6] || (b[6] = St((f) => de.value = !1, ["escape"]))
                  }, null, 40, rT), [
                    [an, ce.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publication",
                    value: P.publication
                  }, null, 8, sT),
                  de.value && re.value.length > 0 ? (_(), T("ul", oT, [
                    (_(!0), T(fe, null, ze(re.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: b[7] || (b[7] = Ve(() => {
                        }, ["prevent"])),
                        onClick: (U) => gv(f, U)
                      }, p(f), 41, lT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", cT, p(g(y)("library", "Apply series")), 1)
                ]),
                c("div", uT, [
                  c("label", dT, p(g(y)("library", "Publication year")), 1),
                  Xe(c("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": b[8] || (b[8] = (f) => qe.value = f),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: g(y)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": Rt.value && v.value.length > 0 ? "true" : "false",
                    onFocus: b[9] || (b[9] = (f) => Rt.value = !0),
                    onKeydown: b[10] || (b[10] = St((f) => Rt.value = !1, ["escape"]))
                  }, null, 40, fT), [
                    [an, qe.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "year",
                    value: P.year
                  }, null, 8, hT),
                  Rt.value && v.value.length > 0 ? (_(), T("ul", pT, [
                    (_(!0), T(fe, null, ze(v.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: b[11] || (b[11] = Ve(() => {
                        }, ["prevent"])),
                        onClick: (U) => Sv(f, U)
                      }, p(f), 41, vT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", gT, p(g(y)("library", "Apply year")), 1)
                ]),
                c("div", mT, [
                  c("label", bT, p(g(y)("library", "Creator")), 1),
                  Xe(c("input", {
                    id: "library-creator-search",
                    "onUpdate:modelValue": b[12] || (b[12] = (f) => M.value = f),
                    type: "search",
                    name: "creatorSearch",
                    autocomplete: "off",
                    placeholder: g(y)("library", "Search creators"),
                    title: g(y)("library", "Exact full-field creator matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-creator-suggestions",
                    "aria-expanded": Y.value && ne.value.length > 0 ? "true" : "false",
                    onFocus: b[13] || (b[13] = (f) => Y.value = !0),
                    onKeydown: b[14] || (b[14] = St((f) => Y.value = !1, ["escape"]))
                  }, null, 40, yT), [
                    [an, M.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "creator",
                    value: P.creator
                  }, null, 8, _T),
                  Y.value && ne.value.length > 0 ? (_(), T("ul", wT, [
                    (_(!0), T(fe, null, ze(ne.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: b[15] || (b[15] = Ve(() => {
                        }, ["prevent"])),
                        onClick: (U) => yv(f, U)
                      }, p(f), 41, ST)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", CT, p(g(y)("library", "Apply creator")), 1)
                ]),
                c("label", null, [
                  Re(p(g(y)("library", "Nextcloud tag")), 1),
                  Xe(c("input", {
                    "onUpdate:modelValue": b[16] || (b[16] = (f) => P.tag = f),
                    type: "text",
                    name: "tag",
                    placeholder: g(y)("library", "photography")
                  }, null, 8, TT), [
                    [an, P.tag]
                  ])
                ]),
                c("label", null, [
                  Re(p(g(y)("library", "Format")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": b[17] || (b[17] = (f) => P.format = f),
                    name: "format",
                    onChange: b[18] || (b[18] = (f) => Ei(f))
                  }, [
                    c("option", ET, p(g(y)("library", "All formats")), 1),
                    (_(!0), T(fe, null, ze(E.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(fr(f)), 9, AT))), 128))
                  ], 544), [
                    [Oi, P.format]
                  ])
                ]),
                c("label", null, [
                  Re(p(g(y)("library", "Shelf")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": b[19] || (b[19] = (f) => P.shelf = f),
                    name: "shelf",
                    onChange: b[20] || (b[20] = (f) => Ei(f))
                  }, [
                    c("option", kT, p(g(y)("library", "All shelves")), 1),
                    (_(!0), T(fe, null, ze(S.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, OT))), 128))
                  ], 544), [
                    [Oi, P.shelf]
                  ])
                ]),
                c("label", null, [
                  Re(p(g(y)("library", "Scan status")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": b[21] || (b[21] = (f) => P.status = f),
                    name: "status",
                    onChange: b[22] || (b[22] = (f) => Ei(f))
                  }, [
                    c("option", xT, p(g(y)("library", "All scan statuses")), 1),
                    (_(!0), T(fe, null, ze(D.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, NT))), 128))
                  ], 544), [
                    [Oi, P.status]
                  ])
                ]),
                c("label", null, [
                  Re(p(g(y)("library", "Workflow status")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": b[23] || (b[23] = (f) => P.workflowStatus = f),
                    name: "workflowStatus",
                    onChange: b[24] || (b[24] = (f) => Ei(f))
                  }, [
                    c("option", LT, p(g(y)("library", "All workflow statuses")), 1),
                    (_(!0), T(fe, null, ze(F.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, RT))), 128))
                  ], 544), [
                    [Oi, P.workflowStatus]
                  ])
                ]),
                c("div", IT, [
                  c("label", PT, p(g(y)("library", "Subject")), 1),
                  Xe(c("input", {
                    id: "library-subject-search",
                    "onUpdate:modelValue": b[25] || (b[25] = (f) => ve.value = f),
                    type: "search",
                    name: "subjectSearch",
                    autocomplete: "off",
                    placeholder: g(y)("library", "Search subjects"),
                    title: g(y)("library", "Exact subject matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-subject-suggestions",
                    "aria-expanded": je.value && at.value.length > 0 ? "true" : "false",
                    onFocus: b[26] || (b[26] = (f) => je.value = !0),
                    onKeydown: b[27] || (b[27] = St((f) => je.value = !1, ["escape"]))
                  }, null, 40, DT), [
                    [an, ve.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "subject",
                    value: P.subject
                  }, null, 8, $T),
                  je.value && at.value.length > 0 ? (_(), T("ul", MT, [
                    (_(!0), T(fe, null, ze(at.value, (f) => (_(), T("li", {
                      key: f,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-subject-suggestion",
                        onMousedown: b[28] || (b[28] = Ve(() => {
                        }, ["prevent"])),
                        onClick: (U) => wv(f, U)
                      }, p(f), 41, FT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", {
                    type: "button",
                    class: "button secondary library-subject-apply",
                    onClick: _v
                  }, p(g(y)("library", "Apply subject")), 1)
                ]),
                c("label", null, [
                  Re(p(g(y)("library", "Classification")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": b[29] || (b[29] = (f) => P.classification = f),
                    name: "classification",
                    onChange: b[30] || (b[30] = (f) => Ei(f))
                  }, [
                    c("option", zT, p(g(y)("library", "All classifications")), 1),
                    (_(!0), T(fe, null, ze(K.value, (f) => (_(), T("option", {
                      key: f,
                      value: f
                    }, p(f), 9, UT))), 128))
                  ], 544), [
                    [Oi, P.classification]
                  ])
                ]),
                c("label", null, [
                  Re(p(g(y)("library", "Suggested updates")), 1),
                  Xe(c("select", {
                    "onUpdate:modelValue": b[31] || (b[31] = (f) => P.scannerConflicts = f),
                    name: "scannerConflicts",
                    onChange: b[32] || (b[32] = (f) => Ei(f))
                  }, [
                    c("option", BT, p(g(y)("library", "All metadata")), 1),
                    c("option", jT, p(g(y)("library", "Suggested updates")), 1)
                  ], 544), [
                    [Oi, P.scannerConflicts]
                  ])
                ]),
                c("button", HT, p(g(y)("library", "Apply filters")), 1),
                c("a", VT, p(g(y)("library", "Clear")), 1)
              ], 40, VC)
            ]),
            c("a", {
              class: "library-navigation-settings-link",
              href: H.value
            }, [
              b[45] || (b[45] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(y)("library", "Settings")), 1)
            ], 8, GT)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ye(g(A_), null, {
          default: Oe(() => [
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
                (_(!0), T(fe, null, ze(Yi.value, (f) => (_(), T("a", {
                  key: f.key,
                  href: Mu(f.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(y)("library", "Remove filter")}: ${f.label}`,
                  onClick: Ve((U) => Cv(f.key), ["prevent"])
                }, [
                  c("strong", null, p(f.label) + ":", 1),
                  Re(" " + p(f.value) + " ", 1),
                  b[46] || (b[46] = c("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, qT))), 128))
              ], 8, WT)) : j("", !0),
              xe.value ? (_(), T("section", YT, [
                c("header", XT, [
                  c("p", ZT, p(g(y)("library", "Metadata cleanup")), 1),
                  c("h2", JT, p(g(y)("library", "Review")), 1),
                  c("p", null, p(g(y)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(y)("library", "Review queues")
                }, [
                  (_(!0), T(fe, null, ze(Pt.value, (f) => (_(), T("a", {
                    key: f.key,
                    class: we(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0,
                    onClick: Ve((U) => Tv(f), ["prevent"])
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(kv(f.countKey)), 1)
                  ], 10, eE))), 128))
                ], 8, QT),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(y)("library", "Filter current review queue"),
                  onSubmit: Ve(hn, ["prevent"])
                }, [
                  (_(!0), T(fe, null, ze(El.value, (f) => (_(), T("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, nE))), 128)),
                  c("label", null, [
                    Re(p(g(y)("library", "Search within this queue")), 1),
                    Xe(c("input", {
                      "onUpdate:modelValue": b[33] || (b[33] = (f) => P.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [an, P.q]
                    ])
                  ]),
                  c("button", iE, p(g(y)("library", "Apply")), 1)
                ], 40, tE),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Cn.loading ? "true" : "false"
                }, [
                  Cn.loading ? (_(), T("span", rE, p(g(y)("library", "Loading review queue…")), 1)) : j("", !0)
                ], 8, aE),
                Cn.error ? (_(), T("p", sE, p(Cn.error), 1)) : j("", !0),
                Ke.value.enabled ? (_(), T("section", oE, [
                  c("div", lE, [
                    c("p", cE, p(g(y)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(y)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(y)("library", "Review next suggestion")), 9, uE)
                  ]),
                  Ke.value.item ? (_(), T("article", dE, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", fE, p(Ke.value.item.title), 1)
                      ]),
                      c("span", hE, [
                        c("bdi", pE, p(Ke.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", vE, [
                      (_(!0), T(fe, null, ze(Ke.value.fields, (f) => (_(), T("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", gE, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(y)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", mE, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(y)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", bE, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(y)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", yE, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(y)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", _E, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(y)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", wE, p(f.sourceProvenance || "—"), 1)
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
                          }, null, 8, CE),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, TE),
                          b[47] || (b[47] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", EE, p(g(y)("library", "Use suggested value")), 1)
                        ], 8, SE)
                      ]))), 128))
                    ]),
                    c("footer", AE, [
                      c("a", {
                        class: "button secondary",
                        href: Ke.value.item.detailsUrl
                      }, p(g(y)("library", "Maintenance")), 9, kE),
                      c("a", {
                        class: "button secondary",
                        href: Ke.value.skipUrl
                      }, p(g(y)("library", "Skip to next suggestion")), 9, OE)
                    ])
                  ])) : j("", !0)
                ])) : j("", !0),
                h.value.length === 0 && !Cn.loading && !Cn.error ? (_(), T("div", xE, [
                  c("h3", null, p(g(y)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(y)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: ue.value
                  }, p(g(y)("library", "Back to Library")), 9, NE)
                ])) : (_(), T("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(y)("library", "Review results")
                }, [
                  (_(!0), T(fe, null, ze(h.value, (f) => (_(), T("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (U) => In(f, U)
                        }, [
                          c("bdi", IE, p(f.title), 1)
                        ], 8, RE)
                      ]),
                      f.creators ? (_(), T("p", PE, [
                        c("bdi", DE, p(f.creators), 1)
                      ])) : j("", !0),
                      f.scanError ? (_(), T("p", $E, [
                        c("bdi", ME, p(f.scanError), 1)
                      ])) : j("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (U) => In(f, U)
                      }, p(g(y)("library", "Details")), 9, FE),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(y)("library", "Open")), 9, zE)
                    ])
                  ]))), 128))
                ], 8, LE)),
                h.value.length > 0 ? (_(), T("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(y)("library", "Review pagination")
                }, [
                  I.value.previousUrl ? (_(), T("a", {
                    key: 0,
                    href: I.value.previousUrl
                  }, p(g(y)("library", "Previous")), 9, BE)) : (_(), T("span", jE, p(g(y)("library", "Previous")), 1)),
                  c("span", null, [
                    Re(p(g(y)("library", "Page")) + " " + p(I.value.page), 1),
                    I.value.total > 0 ? (_(), T("span", HE, " · " + p(I.value.from) + "–" + p(I.value.to), 1)) : j("", !0)
                  ]),
                  I.value.nextUrl ? (_(), T("a", {
                    key: 2,
                    href: I.value.nextUrl
                  }, p(g(y)("library", "Next")), 9, VE)) : (_(), T("span", GE, p(g(y)("library", "Next")), 1))
                ], 8, UE)) : j("", !0)
              ])) : Ie.value ? (_(), T("main", KE, [
                c("header", WE, [
                  c("p", qE, p(g(y)("library", "Your library")), 1),
                  c("h2", YE, p(g(y)("library", "Home")), 1)
                ]),
                c("section", XE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", ZE, p(g(y)("library", "Continue reading")), 1),
                      c("p", JE, p(g(y)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${ue.value}?sort=lastOpened`
                    }, p(g(y)("library", "View all")), 9, QE)
                  ]),
                  Xi.value.continueReading.length ? (_(), T("div", eA, [
                    (_(!0), T(fe, null, ze(Xi.value.continueReading, (f) => (_(), T("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (U) => In(f, U)
                      }, [
                        c("span", nA, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, iA)
                        ])
                      ], 8, tA),
                      c("div", aA, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (U) => In(f, U)
                          }, [
                            c("bdi", sA, p(f.title), 1)
                          ], 8, rA)
                        ]),
                        f.creators ? (_(), T("p", oA, [
                          c("bdi", lA, p(f.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(y)("library", "Open")), 9, cA)
                      ])
                    ]))), 128))
                  ])) : (_(), T("p", uA, p(g(y)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", dA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", fA, p(g(y)("library", "Recently added")), 1),
                      c("p", hA, p(g(y)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${ue.value}?sort=recent`
                    }, p(g(y)("library", "View all")), 9, pA)
                  ]),
                  Xi.value.recentlyAdded.length ? (_(), T("div", vA, [
                    (_(!0), T(fe, null, ze(Xi.value.recentlyAdded, (f) => (_(), T("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (U) => In(f, U)
                      }, [
                        c("span", mA, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, bA)
                        ])
                      ], 8, gA),
                      c("div", yA, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (U) => In(f, U)
                          }, [
                            c("bdi", wA, p(f.title), 1)
                          ], 8, _A)
                        ]),
                        f.creators ? (_(), T("p", SA, [
                          c("bdi", CA, p(f.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(y)("library", "Open")), 9, TA)
                      ])
                    ]))), 128))
                  ])) : (_(), T("p", EA, p(g(y)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", AA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", kA, p(g(y)("library", "Shelves")), 1),
                      c("p", OA, p(g(y)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: me.value }, p(g(y)("library", "View all")), 9, xA)
                  ]),
                  Zi.value.length ? (_(), T("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(y)("library", "Shelves")
                  }, [
                    (_(!0), T(fe, null, ze(Zi.value, (f) => (_(), T("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", RA, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, LA))), 128))
                  ], 8, NA)) : (_(), T("p", IA, p(g(y)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(ar.value.count || 0) > 0 ? (_(), T("aside", PA, [
                  c("div", null, [
                    c("h3", DA, p(g(y)("library", "Needs attention")), 1),
                    c("p", $A, p(g(Mn)("library", "%n publication needs better details.", "%n publications need better details.", Number(ar.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: ar.value.url
                  }, p(g(y)("library", "Review")), 9, MA)
                ])) : j("", !0)
              ])) : Ye.value ? (_(), T("main", FA, [
                c("header", zA, [
                  c("p", UA, p(g(y)("library", "Your library")), 1),
                  c("h2", BA, p(g(y)("library", "Shelves")), 1),
                  c("p", jA, p(g(y)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                Nn.value.length ? (_(), T("nav", {
                  key: 0,
                  "aria-label": g(y)("library", "Shelves")
                }, [
                  c("ul", VA, [
                    (_(!0), T(fe, null, ze(Nn.value, (f) => (_(), Fe(BC, {
                      key: f.id,
                      node: f,
                      "children-url": Gn.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, HA)) : (_(), T("section", GA, [
                  c("h3", null, p(g(y)("library", "Shelves")), 1),
                  c("p", KA, p(g(y)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", WA, [
                    c("a", {
                      class: "button primary",
                      href: H.value
                    }, p(g(y)("library", "Add a Library root")), 9, qA),
                    c("a", {
                      class: "button secondary",
                      href: ue.value
                    }, p(g(y)("library", "All publications")), 9, YA)
                  ])
                ]))
              ])) : (_(), T("section", XA, [
                c("header", ZA, [
                  mi.value ? (_(), T("p", JA, p(Aa.value), 1)) : j("", !0),
                  c("h2", QA, p(bi.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(y)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(y)("library", "Catalogue toolbar"),
                    onSubmit: Ve(hn, ["prevent"])
                  }, [
                    (_(!0), T(fe, null, ze(Tl.value, (f) => (_(), T("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, nk))), 128)),
                    c("label", ik, [
                      Re(p(g(y)("library", "Sort")), 1),
                      Xe(c("select", {
                        "onUpdate:modelValue": b[34] || (b[34] = (f) => P.sort = f),
                        name: "sort",
                        onChange: hn
                      }, [
                        c("option", ak, p(g(y)("library", "Title")), 1),
                        c("option", rk, p(g(y)("library", "Date added")), 1),
                        c("option", sk, p(g(y)("library", "Publication date")), 1),
                        c("option", ok, p(g(y)("library", "Series")), 1),
                        c("option", lk, p(g(y)("library", "Recently opened")), 1),
                        c("option", ck, p(g(y)("library", "Format")), 1)
                      ], 544), [
                        [Oi, P.sort]
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
                        class: we({ active: Kt.value === "compact" }),
                        "aria-pressed": Kt.value === "compact" ? "true" : "false",
                        onClick: b[35] || (b[35] = (f) => Ls("compact"))
                      }, p(g(y)("library", "Compact")), 11, dk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: we({ active: Kt.value === "gallery" }),
                        "aria-pressed": Kt.value === "gallery" ? "true" : "false",
                        onClick: b[36] || (b[36] = (f) => Ls("gallery"))
                      }, p(g(y)("library", "Gallery")), 11, fk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: we({ active: Kt.value === "list" }),
                        "aria-pressed": Kt.value === "list" ? "true" : "false",
                        onClick: b[37] || (b[37] = (f) => Ls("list"))
                      }, p(g(y)("library", "List")), 11, hk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: we({ active: Kt.value === "shelf" }),
                        "aria-pressed": Kt.value === "shelf" ? "true" : "false",
                        onClick: b[38] || (b[38] = (f) => Ls("shelf"))
                      }, p(g(y)("library", "Shelf")), 11, pk)
                    ], 8, uk)
                  ], 40, tk),
                  c("section", vk, [
                    c("h3", {
                      title: g(y)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(y)("library", "Collections")), 9, gk),
                    c("form", {
                      method: "post",
                      action: ct.value,
                      class: "library-saved-collection-save-form",
                      title: Nl.value ? "" : g(y)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: it.value
                      }, null, 8, bk),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Ov.value
                      }, null, 8, yk),
                      c("label", null, [
                        Re(p(g(y)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(y)("library", "e.g. Bremen photo books"),
                          disabled: !Nl.value,
                          autocomplete: "off"
                        }, null, 8, _k)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !Nl.value,
                        title: g(y)("library", "Save current view")
                      }, p(g(y)("library", "Save")), 9, wk)
                    ], 8, mk),
                    Ss.value.length > 0 ? (_(), T("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(y)("library", "Saved custom collections")
                    }, [
                      (_(!0), T(fe, null, ze(Ss.value, (f) => (_(), T("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: Nv(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", Tk, p(f.countPending ? "—" : g(Mn)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, Ck),
                        c("form", {
                          method: "post",
                          action: Lv(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: it.value
                          }, null, 8, Ak),
                          c("button", kk, p(g(y)("library", "Delete")), 1)
                        ], 8, Ek)
                      ]))), 128))
                    ], 8, Sk)) : j("", !0)
                  ]),
                  It.value.length > 0 ? (_(), T("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(y)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", xk, [
                      b[48] || (b[48] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(y)("library", "Batch actions for selected publications")
                      }, p(g(y)("library", "Batch actions")), 9, Nk),
                      c("small", Lk, p(g(y)("library", "Batch actions for selected publications")), 1),
                      c("b", Rk, p(g(Mn)("library", "%n publication selected", "%n publications selected", It.value.length)), 1)
                    ]),
                    c("p", Ik, p(g(Mn)("library", "%n publication selected", "%n publications selected", It.value.length)), 1),
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
                        }, null, 8, Dk),
                        c("label", null, [
                          c("span", null, p(g(y)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(y)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, $k)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(y)("library", "Applies only to the selected publications.")
                        }, p(g(y)("library", "Apply")), 9, Mk)
                      ], 8, Pk),
                      c("form", {
                        method: "post",
                        action: pi.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: it.value
                        }, null, 8, zk),
                        c("label", null, [
                          c("span", null, p(g(y)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(y)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, Uk)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(y)("library", "Removes the tag only from the selected publications.")
                        }, p(g(y)("library", "Remove")), 9, Bk)
                      ], 8, Fk),
                      c("form", {
                        method: "post",
                        action: vi.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: it.value
                        }, null, 8, Hk),
                        (_(!0), T(fe, null, ze(Na.value, (f) => (_(), T("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, Vk))), 128)),
                        b[49] || (b[49] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(y)("library", "Batch actions for selected publications")
                        }, p(g(y)("library", "Reset metadata")), 9, Gk)
                      ], 8, jk),
                      c("form", {
                        method: "post",
                        action: bs.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: it.value
                        }, null, 8, Wk),
                        (_(!0), T(fe, null, ze(Na.value, (f) => (_(), T("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, qk))), 128)),
                        c("label", null, [
                          c("span", null, p(g(y)("library", "Field")), 1),
                          c("select", Yk, [
                            c("option", Xk, p(g(y)("library", "Publication type")), 1),
                            c("option", Zk, p(g(y)("library", "Subtitle")), 1),
                            c("option", Jk, p(g(y)("library", "Creators")), 1),
                            c("option", Qk, p(g(y)("library", "Series / periodical")), 1),
                            c("option", e2, p(g(y)("library", "Publication date")), 1),
                            c("option", t2, p(g(y)("library", "Language")), 1),
                            c("option", n2, p(g(y)("library", "Publisher")), 1),
                            c("option", i2, p(g(y)("library", "Subjects")), 1),
                            c("option", a2, p(g(y)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(y)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(y)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, r2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(y)("library", "Preview first, then apply from the review page.")
                        }, p(g(y)("library", "Preview edit")), 9, s2)
                      ], 8, Kk),
                      c("form", {
                        method: "post",
                        action: ys.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: it.value
                        }, null, 8, l2),
                        (_(!0), T(fe, null, ze(Na.value, (f) => (_(), T("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, c2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(y)("library", "Batch actions for selected publications")
                        }, p(g(y)("library", "Fresh covers")), 9, u2)
                      ], 8, o2)
                    ], 32)
                  ], 8, Ok)) : j("", !0)
                ], 8, ek),
                yi.value ? (_(), T("p", d2, p(yi.value), 1)) : j("", !0),
                ws.value ? (_(), T("p", f2, p(ws.value), 1)) : j("", !0),
                _s.value ? (_(), T("p", h2, p(_s.value), 1)) : j("", !0),
                mi.value ? (_(), T("section", p2, [
                  c("p", v2, p(Aa.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: gi.value ? g(y)("library", "Items by this creator, sorted by publication context when available.") : Ea.value ? g(y)("library", "Items from this publication year, sorted by publication date when available.") : g(y)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(Jt.value), 9, g2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(y)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g(Mn)("library", "%n item", "%n items", I.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (_(), T("span", b2, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : j("", !0),
                    O.value?.datedCount ? (_(), T("span", y2, p(O.value.datedCount) + " " + p(g(y)("library", "dated")), 1)) : j("", !0),
                    O.value?.undatedCount > 0 ? (_(), T("span", _2, p(O.value.undatedCount) + " " + p(g(y)("library", "undated")), 1)) : j("", !0)
                  ], 8, m2),
                  Ta.value && O.value ? (_(), T("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(y)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(y)("library", "Publication contents")), 1),
                    c("span", null, p(g(Mn)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (_(), T("span", S2, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : j("", !0),
                    c("span", null, p(O.value.datedCount) + " " + p(g(y)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (_(), T("span", C2, p(O.value.undatedCount) + " " + p(g(y)("library", "without dates yet")), 1)) : j("", !0),
                    c("span", null, p(g(y)("library", "read-only grouping")), 1)
                  ], 8, w2)) : j("", !0),
                  Ta.value && O.value?.issueGroups?.length ? (_(), T("section", T2, [
                    c("div", null, [
                      c("p", E2, p(g(y)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(y)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(y)("library", "Read-only issue/date grouping")), 9, A2)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(y)("library", "Visual issue strip")
                    }, [
                      (_(!0), T(fe, null, ze(O.value.issueGroups, (f) => (_(), T("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(y)("library", "Issue")), 1),
                        c("small", null, p(g(Mn)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, O2))), 128))
                    ], 8, k2),
                    O.value.gapRanges?.length ? (_(), T("p", x2, p(g(y)("library", "Gap")) + ": " + p(O.value.gapRanges.join(", ")), 1)) : j("", !0),
                    (_(!0), T(fe, null, ze(O.value.issueGroups, (f) => (_(), T("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (_(!0), T(fe, null, ze(f.items, (U, se) => (_(), T("li", {
                          key: U.itemId
                        }, [
                          c("span", N2, p(U.issueLabel), 1),
                          c("a", {
                            href: U.detailsUrl || "#"
                          }, p(U.title), 9, L2),
                          c("small", null, [
                            Re(p(U.publicationType), 1),
                            U.publicationDate ? (_(), T(fe, { key: 0 }, [
                              Re(" · " + p(U.publicationDate), 1)
                            ], 64)) : j("", !0)
                          ]),
                          c("small", R2, [
                            se > 0 ? (_(), T(fe, { key: 0 }, [
                              Re(p(g(y)("library", "Previous issue")), 1)
                            ], 64)) : j("", !0),
                            se > 0 && se < f.items.length - 1 ? (_(), T(fe, { key: 1 }, [
                              Re(" · ")
                            ], 64)) : j("", !0),
                            se < f.items.length - 1 ? (_(), T(fe, { key: 2 }, [
                              Re(p(g(y)("library", "Next issue")), 1)
                            ], 64)) : j("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (_(), T("details", I2, [
                      c("summary", {
                        title: g(y)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(y)("library", "Unknown issue/date")) + " · " + p(O.value.unknownIssueItems.length), 9, P2)
                    ])) : j("", !0)
                  ])) : j("", !0),
                  c("p", null, [
                    c("a", {
                      href: ue.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(y)("library", "Back to full catalogue")), 9, D2)
                  ])
                ])) : j("", !0),
                c("div", $2, [
                  c("p", M2, [
                    Re(p(g(y)("library", "Showing")) + " " + p(I.value.from) + "–" + p(I.value.to) + " " + p(g(y)("library", "of")) + " " + p(I.value.total) + " " + p(g(y)("library", "catalogue items")), 1),
                    Yi.value.length > 0 ? (_(), T("span", F2, [
                      b[50] || (b[50] = Re(" · ", -1)),
                      c("a", z2, p(g(y)("library", "Clear all filters")), 1)
                    ])) : j("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(y)("library", "Catalogue pagination")
                  }, [
                    c("span", B2, [
                      Re(p(g(y)("library", "Page")) + " " + p(I.value.page), 1),
                      I.value.total > 0 ? (_(), T("span", j2, " · " + p(I.value.from) + "–" + p(I.value.to), 1)) : j("", !0)
                    ]),
                    I.value.previousUrl ? (_(), T("a", {
                      key: 0,
                      href: I.value.previousUrl
                    }, p(g(y)("library", "Previous")), 9, H2)) : (_(), T("span", V2, p(g(y)("library", "Previous")), 1)),
                    I.value.nextUrl ? (_(), T("a", {
                      key: 2,
                      href: I.value.nextUrl
                    }, p(g(y)("library", "Next")), 9, G2)) : (_(), T("span", K2, p(g(y)("library", "Next")), 1))
                  ], 8, U2)
                ]),
                h.value.length === 0 ? (_(), T("div", {
                  key: 4,
                  class: we(["library-empty-content", { "library-first-run-guidance": Oa.value || qi.value, "library-filter-empty-state": nr.value && !Oa.value && !qi.value }]),
                  role: "status"
                }, [
                  Oa.value ? (_(), T(fe, { key: 0 }, [
                    c("h3", {
                      title: g(y)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(y)("library", "Start with one Library root")), 9, W2),
                    c("p", q2, [
                      c("a", {
                        href: H.value,
                        class: "button primary"
                      }, p(g(y)("library", "Add a Library root")), 9, Y2),
                      c("span", X2, p(g(y)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : qi.value ? (_(), T(fe, { key: 1 }, [
                    c("h3", {
                      title: g(y)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(y)("library", "No enabled Library roots")), 9, Z2),
                    c("p", J2, [
                      c("a", {
                        href: H.value,
                        class: "button primary"
                      }, p(g(y)("library", "Open Library settings")), 9, Q2)
                    ])
                  ], 64)) : nr.value ? (_(), T(fe, { key: 2 }, [
                    c("h3", {
                      title: g(y)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(y)("library", "No matches for the current filters")), 9, eO),
                    c("p", tO, [
                      c("a", {
                        href: Ev(),
                        class: "button secondary"
                      }, p(g(y)("library", "Clear search")), 9, nO),
                      c("a", iO, p(g(y)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (_(), T(fe, { key: 3 }, [
                    c("h3", {
                      title: g(y)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(y)("library", "No catalogue items yet")), 9, aO),
                    c("p", rO, [
                      c("a", {
                        href: H.value,
                        class: "button primary"
                      }, p(g(y)("library", "Run a scan from settings")), 9, sO)
                    ])
                  ], 64))
                ], 2)) : j("", !0),
                h.value.length > 0 ? (_(), T("label", oO, [
                  c("input", {
                    type: "checkbox",
                    checked: It.value.length === h.value.length,
                    onChange: As
                  }, null, 40, lO),
                  Re(" " + p(g(y)("library", "Select all publications on this page")), 1)
                ])) : j("", !0),
                h.value.length > 0 && Kt.value === "list" ? (_(), T("ul", cO, [
                  (_(!0), T(fe, null, ze(h.value, (f) => (_(), T("li", {
                    key: f.id,
                    class: we(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Ji.value.has(Number(f.id)), "library-catalogue-list-row--open": Rn.value && Number(dn.value) === Number(f.id) }])
                  }, [
                    c("label", uO, [
                      c("input", {
                        type: "checkbox",
                        checked: Ji.value.has(Number(f.id)),
                        "aria-label": `${g(y)("library", "Select publication")}: ${f.title}`,
                        onChange: (U) => Es(f.id, U.currentTarget.checked)
                      }, null, 40, dO)
                    ]),
                    c("div", fO, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (U) => In(f, U)
                      }, [
                        c("bdi", pO, p(f.title), 1)
                      ], 8, hO),
                      f.creators ? (_(), T("span", vO, [
                        c("bdi", gO, p(f.creators), 1)
                      ])) : j("", !0)
                    ]),
                    c("dl", mO, [
                      f.publication ? (_(), T("div", bO, [
                        c("dt", null, p(g(y)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", yO, p(f.publication), 1)
                        ])
                      ])) : j("", !0),
                      f.publicationDate ? (_(), T("div", _O, [
                        c("dt", null, p(g(y)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : j("", !0),
                      f.extension || f.publicationType ? (_(), T("div", wO, [
                        c("dt", null, p(g(y)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: we(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? fr(f.extension) : f.publicationType), 11, SO)
                        ])
                      ])) : j("", !0),
                      f.shelf ? (_(), T("div", CO, [
                        c("dt", null, p(g(y)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", TO, p(f.shelf), 1)
                        ])
                      ])) : j("", !0)
                    ]),
                    c("div", EO, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(y)("library", "Open")), 9, AO),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (U) => In(f, U)
                      }, p(g(y)("library", "Details")), 9, kO)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (_(), T("div", {
                  key: 7,
                  class: we(["library-cover-gallery", ir.value])
                }, [
                  (_(!0), T(fe, null, ze(h.value, (f) => (_(), T("article", {
                    key: f.id,
                    class: we(["library-cover-card", { "library-cover-card--cover-loaded": hr(f) === "loaded", "library-cover-card--cover-error": hr(f) === "error", "library-cover-card--selected": Ji.value.has(Number(f.id)), "library-cover-card--open": Rn.value && Number(dn.value) === Number(f.id) }])
                  }, [
                    c("label", OO, [
                      c("input", {
                        type: "checkbox",
                        checked: Ji.value.has(Number(f.id)),
                        "aria-label": `${g(y)("library", "Select publication")}: ${f.title}`,
                        onChange: (U) => Es(f.id, U.currentTarget.checked)
                      }, null, 40, xO)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": Rn.value && Number(dn.value) === Number(f.id) ? "true" : "false",
                      onClick: (U) => In(f, U)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(y)("library", "Details")), 9, LO),
                      c("span", RO, [
                        hr(f) === "loading" ? (_(), T("span", IO)) : j("", !0),
                        c("img", {
                          class: we(["library-cover-image", { "library-cover-image--loaded": hr(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (U) => Rv(f),
                          onError: (U) => Iv(f)
                        }, null, 42, PO),
                        hr(f) === "error" ? (_(), T("span", DO, p(g(y)("library", "Cover unavailable")), 1)) : j("", !0)
                      ])
                    ], 8, NO),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Ve((U) => Uu(f, U), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: it.value
                      }, null, 8, MO),
                      b[51] || (b[51] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, FO),
                      c("button", {
                        type: "submit",
                        class: we(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(y)("library", "Unstar this publication") : g(y)("library", "Star this publication"),
                        "aria-label": f.starred ? g(y)("library", "Unstar this publication") : g(y)("library", "Star this publication"),
                        "aria-busy": pr[f.id] ? "true" : void 0,
                        disabled: pr[f.id],
                        onClick: Ve((U) => Uu(f, U), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, zO),
                      vr[f.id] ? (_(), T("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(vr[f.id]), 9, UO)) : j("", !0)
                    ], 40, $O),
                    c("div", BO, [
                      c("div", jO, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (U) => In(f, U)
                          }, [
                            c("bdi", GO, p(f.title), 1)
                          ], 8, VO)
                        ], 8, HO),
                        f.creators ? (_(), T("p", KO, [
                          c("bdi", WO, p(f.creators), 1)
                        ])) : j("", !0),
                        Ll(f) || f.extension ? (_(), T("div", qO, [
                          f.extension ? (_(), T("span", YO, [
                            c("bdi", XO, p(fr(f.extension)), 1)
                          ])) : j("", !0),
                          Ll(f) ? (_(), T("p", ZO, [
                            c("bdi", JO, p(Ll(f)), 1)
                          ])) : j("", !0)
                        ])) : j("", !0),
                        c("div", QO, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(y)("library", "Open")), 9, ex),
                          ye(g(Eo), {
                            "aria-label": g(y)("library", "More actions")
                          }, {
                            default: Oe(() => [
                              ye(g(za), {
                                href: f.filesUrl
                              }, {
                                default: Oe(() => [
                                  Re(p(g(y)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(za), {
                                href: f.downloadUrl
                              }, {
                                default: Oe(() => [
                                  Re(p(g(y)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(za), {
                                href: f.detailsUrl
                              }, {
                                default: Oe(() => [
                                  Re(p(g(y)("library", "Maintenance")), 1)
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
                h.value.length > 0 ? (_(), T("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(y)("library", "Catalogue pagination")
                }, [
                  c("span", nx, [
                    Re(p(g(y)("library", "Page")) + " " + p(I.value.page), 1),
                    I.value.total > 0 ? (_(), T("span", ix, " · " + p(I.value.from) + "–" + p(I.value.to), 1)) : j("", !0)
                  ]),
                  I.value.previousUrl ? (_(), T("a", {
                    key: 0,
                    href: I.value.previousUrl
                  }, p(g(y)("library", "Previous")), 9, ax)) : (_(), T("span", rx, p(g(y)("library", "Previous")), 1)),
                  I.value.nextUrl ? (_(), T("a", {
                    key: 2,
                    href: I.value.nextUrl
                  }, p(g(y)("library", "Next")), 9, sx)) : (_(), T("span", ox, p(g(y)("library", "Next")), 1))
                ], 8, tx)) : j("", !0)
              ]))
            ], 8, KT)
          ]),
          _: 1
        }),
        ye(g(hC), {
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
          onOpened: Iu,
          onClosed: ov,
          onClose: Os
        }, {
          default: Oe(() => [
            c("div", lx, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Qi,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(Te.value?.title || g(y)("library", "Publication details")), 513),
              dt.loading && !Te.value ? (_(), T("p", cx, p(g(y)("library", "Loading publication details…")), 1)) : dt.error ? (_(), T("div", {
                key: 1,
                class: "library-sidebar-state",
                role: dt.missing ? "status" : "alert"
              }, [
                c("p", null, p(dt.error), 1),
                dt.missing ? j("", !0) : (_(), T("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: b[39] || (b[39] = (f) => or(dn.value, { historyMode: "none" }))
                }, p(g(y)("library", "Try again")), 1))
              ], 8, ux)) : Te.value ? (_(), T(fe, { key: 2 }, [
                c("p", dx, p(g(y)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", fx, [
                  c("span", hx, p(g(y)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: Te.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, px),
                  c("div", vx, [
                    c("p", gx, [
                      c("bdi", mx, p(Te.value.publicationType || g(y)("library", "Publication")), 1),
                      Te.value.extension ? (_(), T("span", bx, [
                        b[52] || (b[52] = Re(" · ", -1)),
                        c("bdi", yx, p(fr(Te.value.extension)), 1)
                      ])) : j("", !0)
                    ]),
                    c("div", _x, [
                      c("a", {
                        class: "button primary",
                        href: Te.value.openUrl
                      }, p(g(y)("library", "Open")), 9, wx),
                      ye(g(Eo), {
                        "aria-label": g(y)("library", "File and maintenance actions")
                      }, {
                        default: Oe(() => [
                          ye(g(za), {
                            href: Te.value.filesUrl
                          }, {
                            default: Oe(() => [
                              Re(p(g(y)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(za), {
                            href: Te.value.downloadUrl
                          }, {
                            default: Oe(() => [
                              Re(p(g(y)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(za), {
                            href: Te.value.detailsUrl
                          }, {
                            default: Oe(() => [
                              Re(p(g(y)("library", "Maintenance (legacy)")), 1)
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
                  (_(), T(fe, null, ze(w, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: we({ active: Qt.value === f.key }),
                    "aria-current": Qt.value === f.key ? "page" : void 0,
                    onClick: (U) => Qt.value = f.key
                  }, p(g(y)("library", f.label)), 11, Cx)), 64))
                ], 8, Sx),
                Qt.value === "overview" ? (_(), T("section", Tx, [
                  c("h3", Ex, p(g(y)("library", "Overview")), 1),
                  Te.value.description ? (_(), T("p", Ax, [
                    c("bdi", kx, p(Te.value.description), 1)
                  ])) : j("", !0),
                  c("dl", Ox, [
                    Te.value.publication ? (_(), T("div", xx, [
                      c("dt", null, p(g(y)("library", "Series")), 1),
                      c("dd", null, p(Te.value.publication), 1)
                    ])) : j("", !0),
                    Te.value.publicationDate ? (_(), T("div", Nx, [
                      c("dt", null, p(g(y)("library", "Date")), 1),
                      c("dd", null, p(Te.value.publicationDate), 1)
                    ])) : j("", !0),
                    Te.value.publisher ? (_(), T("div", Lx, [
                      c("dt", null, p(g(y)("library", "Publisher")), 1),
                      c("dd", null, p(Te.value.publisher), 1)
                    ])) : j("", !0),
                    Te.value.language ? (_(), T("div", Rx, [
                      c("dt", null, p(g(y)("library", "Language")), 1),
                      c("dd", null, p(Te.value.language), 1)
                    ])) : j("", !0),
                    Te.value.shelf ? (_(), T("div", Ix, [
                      c("dt", null, p(g(y)("library", "Shelf")), 1),
                      c("dd", null, p(Te.value.shelf), 1)
                    ])) : j("", !0)
                  ])
                ])) : Qt.value === "metadata" ? (_(), T("section", Px, [
                  c("h3", Dx, p(g(y)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ve(et, ["prevent"])
                  }, [
                    c("label", null, [
                      Re(p(g(y)("library", "Title")), 1),
                      Xe(c("input", {
                        "onUpdate:modelValue": b[40] || (b[40] = (f) => _t.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [an, _t.title]
                      ])
                    ]),
                    c("label", null, [
                      Re(p(g(y)("library", "Publication date")), 1),
                      Xe(c("input", {
                        "onUpdate:modelValue": b[41] || (b[41] = (f) => _t.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(y)("library", "e.g. 2026")
                      }, null, 8, $x), [
                        [an, _t.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(y)("library", "Identifiers")), 1),
                      (_(!0), T(fe, null, ze(_t.identifiers, (f, U) => (_(), T("div", {
                        key: U,
                        class: "library-sidebar-identifier"
                      }, [
                        Xe(c("input", {
                          "onUpdate:modelValue": (se) => f.scheme = se,
                          "aria-label": g(y)("library", "Identifier type"),
                          placeholder: g(y)("library", "Identifier type")
                        }, null, 8, Mx), [
                          [an, f.scheme]
                        ]),
                        Xe(c("input", {
                          "onUpdate:modelValue": (se) => f.displayValue = se,
                          "aria-label": g(y)("library", "Identifier value")
                        }, null, 8, Fx), [
                          [an, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (se) => Ae(U)
                        }, p(g(y)("library", "Remove")), 9, zx)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: ge
                      }, p(g(y)("library", "Add identifier")), 1)
                    ]),
                    c("p", Ux, p(g(y)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    ft.error ? (_(), T("p", Bx, p(ft.error), 1)) : ft.saved ? (_(), T("p", jx, p(g(y)("library", "Metadata saved.")), 1)) : j("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: ft.saving
                    }, p(ft.saving ? g(y)("library", "Saving…") : g(y)("library", "Save metadata")), 9, Hx)
                  ], 32),
                  Ti(Te.value).length ? (_(), T("section", Vx, [
                    c("h4", Gx, p(g(y)("library", "Scanner suggestions")), 1),
                    c("p", Kx, p(g(y)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (_(!0), T(fe, null, ze(Ti(Te.value), (f) => (_(), T("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          Re(p(g(y)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          b[53] || (b[53] = c("br", null, null, -1)),
                          Re(p(g(y)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : j("", !0)
                ])) : (_(), T("section", Wx, [
                  c("h3", qx, p(g(y)("library", "Activity")), 1),
                  c("dl", Yx, [
                    c("div", null, [
                      c("dt", null, p(g(y)("library", "Scan status")), 1),
                      c("dd", null, p(Te.value.scanStatus || "—"), 1)
                    ]),
                    Te.value.workflowStatus ? (_(), T("div", Xx, [
                      c("dt", null, p(g(y)("library", "Workflow")), 1),
                      c("dd", null, p(Te.value.workflowStatus), 1)
                    ])) : j("", !0),
                    Te.value.metadataSource ? (_(), T("div", Zx, [
                      c("dt", null, p(g(y)("library", "Metadata source")), 1),
                      c("dd", null, p(Te.value.metadataSource), 1)
                    ])) : j("", !0),
                    Te.value.cachedPath ? (_(), T("div", Jx, [
                      c("dt", null, p(g(y)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", Qx, p(Te.value.cachedPath), 1)
                      ])
                    ])) : j("", !0)
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
                    onClick: b[42] || (b[42] = (f) => xs(Wn.value))
                  }, p(g(y)("library", "Previous item")), 9, tN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ci.value,
                    onClick: b[43] || (b[43] = (f) => xs(Ci.value))
                  }, p(g(y)("library", "Next item")), 9, nN)
                ], 8, eN)
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
function oN() {
  window.LibraryStartupWatchdog?.fail();
}
function lN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = fu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !lN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  yb(sN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  oN(), console.error("[library] Vue startup failed", e);
}
