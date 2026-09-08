// @__NO_SIDE_EFFECTS__
function ki(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pe = {}, An = [], Mt = () => {
}, co = () => !1, Dr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fr = (e) => e.startsWith("onUpdate:"), Ge = Object.assign, Di = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hl = Object.prototype.hasOwnProperty, fe = (e, t) => Hl.call(e, t), Y = Array.isArray, Jt = (e) => ir(e) === "[object Map]", mn = (e) => ir(e) === "[object Set]", ds = (e) => ir(e) === "[object Date]", ee = (e) => typeof e == "function", Se = (e) => typeof e == "string", kt = (e) => typeof e == "symbol", de = (e) => e !== null && typeof e == "object", uo = (e) => (de(e) || ee(e)) && ee(e.then) && ee(e.catch), fo = Object.prototype.toString, ir = (e) => fo.call(e), jl = (e) => ir(e).slice(8, -1), po = (e) => ir(e) === "[object Object]", Fi = (e) => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qn = /* @__PURE__ */ ki(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ur = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $l = /-\w/g, _t = Ur(
  (e) => e.replace($l, (t) => t.slice(1).toUpperCase())
), Vl = /\B([A-Z])/g, bn = Ur(
  (e) => e.replace(Vl, "-$1").toLowerCase()
), ho = Ur((e) => e.charAt(0).toUpperCase() + e.slice(1)), ni = Ur(
  (e) => e ? `on${ho(e)}` : ""
), It = (e, t) => !Object.is(e, t), Sr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, mo = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Hr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ps;
const jr = () => ps || (ps = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ui(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Se(r) ? ql(r) : Ui(r);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Se(e) || de(e))
    return e;
}
const Bl = /;(?![^(]*\))/g, zl = /:([^]+)/, Wl = /\/\*[^]*?\*\//g;
function ql(e) {
  const t = {};
  return e.replace(Wl, "").split(Bl).forEach((n) => {
    if (n) {
      const r = n.split(zl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function wn(e) {
  let t = "";
  if (Se(e))
    t = e;
  else if (Y(e))
    for (let n = 0; n < e.length; n++) {
      const r = wn(e[n]);
      r && (t += r + " ");
    }
  else if (de(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Kl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gl = /* @__PURE__ */ ki(Kl);
function bo(e) {
  return !!e || e === "";
}
function Yl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Zt(e[r], t[r]);
  return n;
}
function hs(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const i of e) {
    let s = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Zt(i, n[o])) {
        s = o;
        break;
      }
    if (s < 0) return !1;
    r[s] = 1;
  }
  return !0;
}
function Zt(e, t) {
  if (e === t) return !0;
  let n = ds(e), r = ds(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = kt(e), r = kt(t), n || r)
    return e === t;
  if (n = Y(e), r = Y(t), n || r)
    return n && r ? Yl(e, t) : !1;
  if (n = de(e), r = de(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = Jt(e), r = Jt(t), n || r || (n = mn(e), r = mn(t), n || r))
      return n && r ? hs(e, t) : !1;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Zt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xl(e, t) {
  return e.findIndex((n) => Zt(n, t));
}
const yo = (e) => !!(e && e.__v_isRef === !0), y = (e) => Se(e) ? e : e == null ? "" : Y(e) || de(e) && (e.toString === fo || !ee(e.toString)) ? yo(e) ? y(e.value) : JSON.stringify(e, go, 2) : String(e), go = (e, t) => yo(t) ? go(e, t.value) : Jt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], s) => (n[ri(r, s) + " =>"] = i, n),
    {}
  )
} : mn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ri(n))
} : kt(t) ? ri(t) : de(t) && !Y(t) && !po(t) ? String(t) : t, ri = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    kt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let $e;
class Jl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && $e && ($e.active ? (this.parent = $e, this.index = ($e.scopes || ($e.scopes = [])).push(
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
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].pause();
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
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = $e;
      try {
        return $e = this, t();
      } finally {
        $e = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = $e, $e = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if ($e === this)
        $e = this.prevScope;
      else {
        let t = $e;
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
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (n = 0, r = i.length; n < r; n++)
          i[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Zl() {
  return $e;
}
let me;
const ii = /* @__PURE__ */ new WeakSet();
class _o {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, $e && ($e.active ? $e.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ii.has(this) && (ii.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Eo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ms(this), To(this);
    const t = me, n = vt;
    me = this, vt = !0;
    try {
      return this.fn();
    } finally {
      So(this), me = t, vt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $i(t);
      this.deps = this.depsTail = void 0, ms(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ii.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Si(this) && this.run();
  }
  get dirty() {
    return Si(this);
  }
}
let vo = 0, Kn, Gn;
function Eo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Gn, Gn = e;
    return;
  }
  e.next = Kn, Kn = e;
}
function Hi() {
  vo++;
}
function ji() {
  if (--vo > 0)
    return;
  if (Gn) {
    let t = Gn;
    for (Gn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Kn; ) {
    let t = Kn;
    for (Kn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function To(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function So(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), $i(r), Ql(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function Si(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (xo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function xo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zn) || (e.globalVersion = Zn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Si(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = me, r = vt;
  me = e, vt = !0;
  try {
    To(e);
    const i = e.fn(e._value);
    (t.version === 0 || It(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    me = n, vt = r, So(e), e.flags &= -3;
  }
}
function $i(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      $i(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ql(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let vt = !0;
const Co = [];
function Vt() {
  Co.push(vt), vt = !1;
}
function Bt() {
  const e = Co.pop();
  vt = e === void 0 ? !0 : e;
}
function ms(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = me;
    me = void 0;
    try {
      t();
    } finally {
      me = n;
    }
  }
}
let Zn = 0;
class ea {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Vi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!me || !vt || me === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== me)
      n = this.activeLink = new ea(me, this), me.deps ? (n.prevDep = me.depsTail, me.depsTail.nextDep = n, me.depsTail = n) : me.deps = me.depsTail = n, Ao(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = me.depsTail, n.nextDep = void 0, me.depsTail.nextDep = n, me.depsTail = n, me.deps === n && (me.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Zn++, this.notify(t);
  }
  notify(t) {
    Hi();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ji();
    }
  }
}
function Ao(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Ao(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const xi = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ Symbol(
  ""
), Ci = /* @__PURE__ */ Symbol(
  ""
), Qn = /* @__PURE__ */ Symbol(
  ""
);
function qe(e, t, n) {
  if (vt && me) {
    let r = xi.get(e);
    r || xi.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Vi()), i.map = r, i.key = n), i.track();
  }
}
function Ht(e, t, n, r, i, s) {
  const o = xi.get(e);
  if (!o) {
    Zn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Hi(), t === "clear")
    o.forEach(l);
  else {
    const c = Y(e), E = c && Fi(n);
    if (c && n === "length") {
      const m = Number(r);
      o.forEach((x, N) => {
        (N === "length" || N === Qn || !kt(N) && N >= m) && l(x);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), E && l(o.get(Qn)), t) {
        case "add":
          c ? E && l(o.get("length")) : (l(o.get(dn)), Jt(e) && l(o.get(Ci)));
          break;
        case "delete":
          c || (l(o.get(dn)), Jt(e) && l(o.get(Ci)));
          break;
        case "set":
          Jt(e) && l(o.get(dn));
          break;
      }
  }
  ji();
}
function En(e) {
  const t = /* @__PURE__ */ ue(e);
  return t === e ? t : (qe(t, "iterate", Qn), /* @__PURE__ */ yt(e) ? t : t.map(Et));
}
function $r(e) {
  return qe(e = /* @__PURE__ */ ue(e), "iterate", Qn), e;
}
function Pt(e, t) {
  return /* @__PURE__ */ zt(e) ? Pn(/* @__PURE__ */ pn(e) ? Et(t) : t) : Et(t);
}
const ta = {
  __proto__: null,
  [Symbol.iterator]() {
    return si(this, Symbol.iterator, (e) => Pt(this, e));
  },
  concat(...e) {
    return En(this).concat(
      ...e.map((t) => Y(t) ? En(t) : t)
    );
  },
  entries() {
    return si(this, "entries", (e) => (e[1] = Pt(this, e[1]), e));
  },
  every(e, t) {
    return Dt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Dt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Pt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Dt(
      this,
      "find",
      e,
      t,
      (n) => Pt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Dt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Dt(
      this,
      "findLast",
      e,
      t,
      (n) => Pt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Dt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Dt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return oi(this, "includes", e);
  },
  indexOf(...e) {
    return oi(this, "indexOf", e);
  },
  join(e) {
    return En(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return oi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Dt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Fn(this, "pop");
  },
  push(...e) {
    return Fn(this, "push", e);
  },
  reduce(e, ...t) {
    return bs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return bs(this, "reduceRight", e, t);
  },
  shift() {
    return Fn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Dt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Fn(this, "splice", e);
  },
  toReversed() {
    return En(this).toReversed();
  },
  toSorted(e) {
    return En(this).toSorted(e);
  },
  toSpliced(...e) {
    return En(this).toSpliced(...e);
  },
  unshift(...e) {
    return Fn(this, "unshift", e);
  },
  values() {
    return si(this, "values", (e) => Pt(this, e));
  }
};
function si(e, t, n) {
  const r = $r(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ yt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const na = Array.prototype;
function Dt(e, t, n, r, i, s) {
  const o = $r(e), l = o !== e && !/* @__PURE__ */ yt(e), c = o[t];
  if (c !== na[t]) {
    const x = c.apply(e, s);
    return l ? Et(x) : x;
  }
  let E = n;
  o !== e && (l ? E = function(x, N) {
    return n.call(this, Pt(e, x), N, e);
  } : n.length > 2 && (E = function(x, N) {
    return n.call(this, x, N, e);
  }));
  const m = c.call(o, E, r);
  return l && i ? i(m) : m;
}
function bs(e, t, n, r) {
  const i = $r(e), s = i !== e && !/* @__PURE__ */ yt(e);
  let o = n, l = !1;
  i !== e && (s ? (l = r.length === 0, o = function(E, m, x) {
    return l && (l = !1, E = Pt(e, E)), n.call(this, E, Pt(e, m), x, e);
  }) : n.length > 3 && (o = function(E, m, x) {
    return n.call(this, E, m, x, e);
  }));
  const c = i[t](o, ...r);
  return l ? Pt(e, c) : c;
}
function oi(e, t, n) {
  const r = /* @__PURE__ */ ue(e);
  qe(r, "iterate", Qn);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Wi(n[0]) ? (n[0] = /* @__PURE__ */ ue(n[0]), r[t](...n)) : i;
}
function Fn(e, t, n = []) {
  Vt(), Hi();
  const r = (/* @__PURE__ */ ue(e))[t].apply(e, n);
  return ji(), Bt(), r;
}
const ra = /* @__PURE__ */ ki("__proto__,__v_isRef,__isVue"), wo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(kt)
);
function ia(e) {
  kt(e) || (e = String(e));
  const t = /* @__PURE__ */ ue(this);
  return qe(t, "has", e), t.hasOwnProperty(e);
}
class Ro {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (i ? s ? ha : Lo : s ? Po : No).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = Y(t);
    if (!i) {
      let c;
      if (o && (c = ta[n]))
        return c;
      if (n === "hasOwnProperty")
        return ia;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ke(t) ? t : r
    );
    if ((kt(n) ? wo.has(n) : ra(n)) || (i || qe(t, "get", n), s))
      return l;
    if (/* @__PURE__ */ Ke(l)) {
      const c = o && Fi(n) ? l : l.value;
      return i && de(c) ? /* @__PURE__ */ wi(c) : c;
    }
    return de(l) ? i ? /* @__PURE__ */ wi(l) : /* @__PURE__ */ un(l) : l;
  }
}
class Oo extends Ro {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    const o = Y(t) && Fi(n);
    if (!this._isShallow) {
      const E = /* @__PURE__ */ zt(s);
      if (!/* @__PURE__ */ yt(r) && !/* @__PURE__ */ zt(r) && (s = /* @__PURE__ */ ue(s), r = /* @__PURE__ */ ue(r)), !o && /* @__PURE__ */ Ke(s) && !/* @__PURE__ */ Ke(r))
        return E || (s.value = r), !0;
    }
    const l = o ? Number(n) < t.length : fe(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ke(t) ? t : i
    );
    return t === /* @__PURE__ */ ue(i) && c && (l ? It(r, s) && Ht(t, "set", n, r) : Ht(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = fe(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Ht(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!kt(n) || !wo.has(n)) && qe(t, "has", n), r;
  }
  ownKeys(t) {
    return qe(
      t,
      "iterate",
      Y(t) ? "length" : dn
    ), Reflect.ownKeys(t);
  }
}
class sa extends Ro {
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
const oa = /* @__PURE__ */ new Oo(), la = /* @__PURE__ */ new sa(), aa = /* @__PURE__ */ new Oo(!0);
const Ai = (e) => e, br = (e) => Reflect.getPrototypeOf(e);
function ca(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = /* @__PURE__ */ ue(i), o = Jt(s), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, E = i[e](...r), m = n ? Ai : t ? Pn : Et;
    return !t && qe(
      s,
      "iterate",
      c ? Ci : dn
    ), Ge(
      // inheriting all iterator properties
      Object.create(E),
      {
        // iterator protocol
        next() {
          const { value: x, done: N } = E.next();
          return N ? { value: x, done: N } : {
            value: l ? [m(x[0]), m(x[1])] : m(x),
            done: N
          };
        }
      }
    );
  };
}
function yr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ua(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ ue(s), l = /* @__PURE__ */ ue(i);
      e || (It(i, l) && qe(o, "get", i), qe(o, "get", l));
      const { has: c } = br(o), E = t ? Ai : e ? Pn : Et;
      if (c.call(o, i))
        return E(s.get(i));
      if (c.call(o, l))
        return E(s.get(l));
      s !== o && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && qe(/* @__PURE__ */ ue(i), "iterate", dn), i.size;
    },
    has(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ ue(s), l = /* @__PURE__ */ ue(i);
      return e || (It(i, l) && qe(o, "has", i), qe(o, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
    },
    forEach(i, s) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ue(l), E = t ? Ai : e ? Pn : Et;
      return !e && qe(c, "iterate", dn), l.forEach((m, x) => i.call(s, E(m), E(x), o));
    }
  };
  return Ge(
    n,
    e ? {
      add: yr("add"),
      set: yr("set"),
      delete: yr("delete"),
      clear: yr("clear")
    } : {
      add(i) {
        const s = /* @__PURE__ */ ue(this), o = br(s), l = /* @__PURE__ */ ue(i), c = !t && !/* @__PURE__ */ yt(i) && !/* @__PURE__ */ zt(i) ? l : i;
        return o.has.call(s, c) || It(i, c) && o.has.call(s, i) || It(l, c) && o.has.call(s, l) || (s.add(c), Ht(s, "add", c, c)), this;
      },
      set(i, s) {
        !t && !/* @__PURE__ */ yt(s) && !/* @__PURE__ */ zt(s) && (s = /* @__PURE__ */ ue(s));
        const o = /* @__PURE__ */ ue(this), { has: l, get: c } = br(o);
        let E = l.call(o, i);
        E || (i = /* @__PURE__ */ ue(i), E = l.call(o, i));
        const m = c.call(o, i);
        return o.set(i, s), E ? It(s, m) && Ht(o, "set", i, s) : Ht(o, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ ue(this), { has: o, get: l } = br(s);
        let c = o.call(s, i);
        c || (i = /* @__PURE__ */ ue(i), c = o.call(s, i)), l && l.call(s, i);
        const E = s.delete(i);
        return c && Ht(s, "delete", i, void 0), E;
      },
      clear() {
        const i = /* @__PURE__ */ ue(this), s = i.size !== 0, o = i.clear();
        return s && Ht(
          i,
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
  ].forEach((i) => {
    n[i] = ca(i, e, t);
  }), n;
}
function Bi(e, t) {
  const n = ua(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    fe(n, i) && i in r ? n : r,
    i,
    s
  );
}
const fa = {
  get: /* @__PURE__ */ Bi(!1, !1)
}, da = {
  get: /* @__PURE__ */ Bi(!1, !0)
}, pa = {
  get: /* @__PURE__ */ Bi(!0, !1)
};
const No = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap();
function ma(e) {
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
function un(e) {
  return /* @__PURE__ */ zt(e) ? e : zi(
    e,
    !1,
    oa,
    fa,
    No
  );
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
  return zi(
    e,
    !1,
    aa,
    da,
    Po
  );
}
// @__NO_SIDE_EFFECTS__
function wi(e) {
  return zi(
    e,
    !0,
    la,
    pa,
    Lo
  );
}
function zi(e, t, n, r, i) {
  if (!de(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const o = ma(jl(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  return /* @__PURE__ */ zt(e) ? /* @__PURE__ */ pn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Wi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ue(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ue(t) : e;
}
function ya(e) {
  return !fe(e, "__v_skip") && Object.isExtensible(e) && mo(e, "__v_skip", !0), e;
}
const Et = (e) => de(e) ? /* @__PURE__ */ un(e) : e, Pn = (e) => de(e) ? /* @__PURE__ */ wi(e) : e;
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return _a(e, !1);
}
function _a(e, t) {
  return /* @__PURE__ */ Ke(e) ? e : new va(e, t);
}
class va {
  constructor(t, n) {
    this.dep = new Vi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ue(t), this._value = n ? t : Et(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ yt(t) || /* @__PURE__ */ zt(t);
    t = r ? t : /* @__PURE__ */ ue(t), It(t, n) && (this._rawValue = t, this._value = r ? t : Et(t), this.dep.trigger());
  }
}
function T(e) {
  return /* @__PURE__ */ Ke(e) ? e.value : e;
}
const Ea = {
  get: (e, t, n) => t === "__v_raw" ? e : T(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Ke(i) && !/* @__PURE__ */ Ke(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ pn(e) ? e : new Proxy(e, Ea);
}
class Ta {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Vi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    me !== this)
      return Eo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return xo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Sa(e, t, n = !1) {
  let r, i;
  return ee(e) ? r = e : (r = e.get, i = e.set), new Ta(r, i, n);
}
const gr = {}, wr = /* @__PURE__ */ new WeakMap();
let ln;
function xa(e, t = !1, n = ln) {
  if (n) {
    let r = wr.get(n);
    r || wr.set(n, r = []), r.push(e);
  }
}
function Ca(e, t, n = pe) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: l, call: c } = n, E = (U) => i ? U : /* @__PURE__ */ yt(U) || i === !1 || i === 0 ? jt(U, 1) : jt(U);
  let m, x, N, V, J = !1, B = !1;
  if (/* @__PURE__ */ Ke(e) ? (x = () => e.value, J = /* @__PURE__ */ yt(e)) : /* @__PURE__ */ pn(e) ? (x = () => E(e), J = !0) : Y(e) ? (B = !0, J = e.some((U) => /* @__PURE__ */ pn(U) || /* @__PURE__ */ yt(U)), x = () => e.map((U) => {
    if (/* @__PURE__ */ Ke(U))
      return U.value;
    if (/* @__PURE__ */ pn(U))
      return E(U);
    if (ee(U))
      return c ? c(U, 2) : U();
  })) : ee(e) ? t ? x = c ? () => c(e, 2) : e : x = () => {
    if (N) {
      Vt();
      try {
        N();
      } finally {
        Bt();
      }
    }
    const U = ln;
    ln = m;
    try {
      return c ? c(e, 3, [V]) : e(V);
    } finally {
      ln = U;
    }
  } : x = Mt, t && i) {
    const U = x, oe = i === !0 ? 1 / 0 : i;
    x = () => jt(U(), oe);
  }
  const Q = Zl(), z = () => {
    m.stop(), Q && Q.active && Di(Q.effects, m);
  };
  if (s && t) {
    const U = t;
    t = (...oe) => {
      const _e = U(...oe);
      return z(), _e;
    };
  }
  let k = B ? new Array(e.length).fill(gr) : gr;
  const G = (U) => {
    if (!(!(m.flags & 1) || !m.dirty && !U))
      if (t) {
        const oe = m.run();
        if (U || i || J || (B ? oe.some((_e, ve) => It(_e, k[ve])) : It(oe, k))) {
          N && N();
          const _e = ln;
          ln = m;
          try {
            const ve = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              k === gr ? void 0 : B && k[0] === gr ? [] : k,
              V
            ];
            k = oe, c ? c(t, 3, ve) : (
              // @ts-expect-error
              t(...ve)
            );
          } finally {
            ln = _e;
          }
        }
      } else
        m.run();
  };
  return l && l(G), m = new _o(x), m.scheduler = o ? () => o(G, !1) : G, V = (U) => xa(U, !1, m), N = m.onStop = () => {
    const U = wr.get(m);
    if (U) {
      if (c)
        c(U, 4);
      else
        for (const oe of U) oe();
      wr.delete(m);
    }
  }, t ? r ? G(!0) : k = m.run() : o ? o(G.bind(null, !0), !0) : m.run(), z.pause = m.pause.bind(m), z.resume = m.resume.bind(m), z.stop = z, z;
}
function jt(e, t = 1 / 0, n) {
  if (t <= 0 || !de(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ke(e))
    jt(e.value, t, n);
  else if (Y(e))
    for (let r = 0; r < e.length; r++)
      jt(e[r], t, n);
  else if (mn(e) || Jt(e))
    e.forEach((r) => {
      jt(r, t, n);
    });
  else if (po(e)) {
    for (const r in e)
      jt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && jt(e[r], t, n);
  }
  return e;
}
function sr(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Vr(i, t, n);
  }
}
function Tt(e, t, n, r) {
  if (ee(e)) {
    const i = sr(e, t, n, r);
    return i && uo(i) && i.catch((s) => {
      Vr(s, t, n);
    }), i;
  }
  if (Y(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(Tt(e[s], t, n, r));
    return i;
  }
}
function Vr(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const c = t.proxy, E = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const m = l.ec;
      if (m) {
        for (let x = 0; x < m.length; x++)
          if (m[x](e, c, E) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      Vt(), sr(s, null, 10, [
        e,
        c,
        E
      ]), Bt();
      return;
    }
  }
  Aa(e, n, i, r, o);
}
function Aa(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const tt = [];
let Nt = -1;
const Rn = [];
let Xt = null, xn = 0;
const Mo = /* @__PURE__ */ Promise.resolve();
let Rr = null;
function ko(e) {
  const t = Rr || Mo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wa(e) {
  let t = Nt + 1, n = tt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = tt[r], s = er(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function qi(e) {
  if (!(e.flags & 1)) {
    const t = er(e), n = tt[tt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= er(n) ? tt.push(e) : tt.splice(wa(t), 0, e), e.flags |= 1, Do();
  }
}
function Do() {
  Rr || (Rr = Mo.then(Uo));
}
function Ra(e) {
  if (!Y(e))
    Xt && e.id === -1 ? Xt.splice(xn + 1, 0, e) : e.flags & 1 || (Rn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Rn.push(e[t]);
  Do();
}
function ys(e, t, n = Nt + 1) {
  for (; n < tt.length; n++) {
    const r = tt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      tt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Fo(e) {
  if (Rn.length) {
    const t = [...new Set(Rn)].sort(
      (n, r) => er(n) - er(r)
    );
    if (Rn.length = 0, Xt) {
      for (let n = 0; n < t.length; n++)
        Xt.push(t[n]);
      return;
    }
    for (Xt = t, xn = 0; xn < Xt.length; xn++) {
      const n = Xt[xn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Xt = null, xn = 0;
  }
}
const er = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Uo(e) {
  try {
    for (Nt = 0; Nt < tt.length; Nt++) {
      const t = tt[Nt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), sr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Nt < tt.length; Nt++) {
      const t = tt[Nt];
      t && (t.flags &= -2);
    }
    Nt = -1, tt.length = 0, Fo(), Rr = null, (tt.length || Rn.length) && Uo();
  }
}
let bt = null, Ho = null;
function Or(e) {
  const t = bt;
  return bt = e, Ho = e && e.type.__scopeId || null, t;
}
function Oa(e, t = bt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && Rs(-1);
    const s = Or(t), o = hn.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let c = hn.length; c > o; c--) fl();
      Or(s), r._d && Rs(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Fe(e, t) {
  if (bt === null)
    return e;
  const n = Kr(bt), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, l, c = pe] = t[i];
    s && (ee(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && jt(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function rn(e, t, n, r) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    s && (l.oldValue = s[o].value);
    let c = l.dir[r];
    c && (Vt(), Tt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Bt());
  }
}
function Na(e, t) {
  if (nt) {
    let n = nt.provides;
    const r = nt.parent && nt.parent.provides;
    r === n && (n = nt.provides = Object.create(r)), n[e] = t;
  }
}
function xr(e, t, n = !1) {
  const r = Ac();
  if (r || On) {
    let i = On ? On._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ee(t) ? t.call(r && r.proxy) : t;
  }
}
const Pa = /* @__PURE__ */ Symbol.for("v-scx"), La = () => xr(Pa);
function li(e, t, n) {
  return jo(e, t, n);
}
function jo(e, t, n = pe) {
  const { immediate: r, deep: i, flush: s, once: o } = n, l = Ge({}, n), c = t && r || !t && s !== "post";
  let E;
  if (rr) {
    if (s === "sync") {
      const V = La();
      E = V.__watcherHandles || (V.__watcherHandles = []);
    } else if (!c) {
      const V = () => {
      };
      return V.stop = Mt, V.resume = Mt, V.pause = Mt, V;
    }
  }
  const m = nt;
  l.call = (V, J, B) => Tt(V, m, J, B);
  let x = !1;
  s === "post" ? l.scheduler = (V) => {
    ct(V, m && m.suspense);
  } : s !== "sync" && (x = !0, l.scheduler = (V, J) => {
    J ? V() : qi(V);
  }), l.augmentJob = (V) => {
    t && (V.flags |= 4), x && (V.flags |= 2, m && (V.id = m.uid, V.i = m));
  };
  const N = Ca(e, t, l);
  return rr && (E ? E.push(N) : c && N()), N;
}
function Ia(e, t, n) {
  const r = this.proxy, i = Se(e) ? e.includes(".") ? $o(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ee(t) ? s = t : (s = t.handler, n = t);
  const o = or(this), l = jo(i, s.bind(r), n);
  return o(), l;
}
function $o(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Ma = /* @__PURE__ */ Symbol("_vte"), Br = (e) => e.__isTeleport, ai = /* @__PURE__ */ Symbol("_leaveCb");
function ka(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Wt) {
        t = n;
        break;
      }
  }
  return t;
}
function Vo(e) {
  if (!Gi(e))
    return Br(e.type) && e.children ? ka(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ee(n.default))
      return n.default();
  }
}
function Ki(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Ki(
      Br(n.type) && Vo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Bo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Nr = /* @__PURE__ */ new WeakMap();
function Yn(e, t, n, r, i = !1) {
  if (Y(e)) {
    e.forEach(
      (B, Q) => Yn(
        B,
        t && (Y(t) ? t[Q] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Xn(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Yn(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Kr(r.component) : r.el, o = i ? null : s, { i: l, r: c } = e, E = t && t.r, m = l.refs === pe ? l.refs = {} : l.refs, x = l.setupState, N = /* @__PURE__ */ ue(x), V = x === pe ? co : (B) => gs(m, B) ? !1 : fe(N, B), J = (B, Q) => !(Q && gs(m, Q));
  if (E != null && E !== c) {
    if (_s(t), Se(E))
      m[E] = null, V(E) && (x[E] = null);
    else if (/* @__PURE__ */ Ke(E)) {
      const B = t;
      J(E, B.k) && (E.value = null), B.k && (m[B.k] = null);
    }
  }
  if (ee(c))
    sr(c, l, 12, [o, m]);
  else {
    const B = Se(c), Q = /* @__PURE__ */ Ke(c);
    if (B || Q) {
      const z = () => {
        if (e.f) {
          const k = B ? V(c) ? x[c] : m[c] : J() || !e.k ? c.value : m[e.k];
          if (i)
            Y(k) && Di(k, s);
          else if (Y(k))
            k.includes(s) || k.push(s);
          else if (B)
            m[c] = [s], V(c) && (x[c] = m[c]);
          else {
            const G = [s];
            J(c, e.k) && (c.value = G), e.k && (m[e.k] = G);
          }
        } else B ? (m[c] = o, V(c) && (x[c] = o)) : Q && (J(c, e.k) && (c.value = o), e.k && (m[e.k] = o));
      };
      if (o) {
        const k = () => {
          z(), Nr.delete(e);
        };
        k.id = -1, Nr.set(e, k), ct(k, n);
      } else
        _s(e), z();
    }
  }
}
function _s(e) {
  const t = Nr.get(e);
  t && (t.flags |= 8, Nr.delete(e));
}
jr().requestIdleCallback;
jr().cancelIdleCallback;
const Xn = (e) => !!e.type.__asyncLoader, Gi = (e) => e.type.__isKeepAlive;
function Da(e, t) {
  zo(e, "a", t);
}
function Fa(e, t) {
  zo(e, "da", t);
}
function zo(e, t, n = nt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (zr(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Gi(i.parent.vnode) && Ua(r, t, n, i), i = i.parent;
  }
}
function Ua(e, t, n, r) {
  const i = zr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ko(() => {
    Di(r[t], i);
  }, n);
}
function zr(e, t, n = nt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      Vt();
      const l = or(n), c = Tt(t, n, e, o);
      return l(), Bt(), c;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const qt = (e) => (t, n = nt) => {
  (!rr || e === "sp") && zr(e, (...r) => t(...r), n);
}, Ha = qt("bm"), Wo = qt("m"), ja = qt(
  "bu"
), $a = qt("u"), qo = qt(
  "bum"
), Ko = qt("um"), Va = qt(
  "sp"
), Ba = qt("rtg"), za = qt("rtc");
function Wa(e, t = nt) {
  zr("ec", e, t);
}
const qa = /* @__PURE__ */ Symbol.for("v-ndc");
function Te(e, t, n, r) {
  let i;
  const s = n, o = Y(e);
  if (o || Se(e)) {
    const l = o && /* @__PURE__ */ pn(e);
    let c = !1, E = !1;
    l && (c = !/* @__PURE__ */ yt(e), E = /* @__PURE__ */ zt(e), e = $r(e)), i = new Array(e.length);
    for (let m = 0, x = e.length; m < x; m++)
      i[m] = t(
        c ? E ? Pn(Et(e[m])) : Et(e[m]) : e[m],
        m,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, s);
  } else if (de(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, s)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, E = l.length; c < E; c++) {
        const m = l[c];
        i[c] = t(e[m], m, c, s);
      }
    }
  else
    i = [];
  return i;
}
const Ri = (e) => e ? ml(e) ? Kr(e) : Ri(e.parent) : null, Jn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ge(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ri(e.parent),
    $root: (e) => Ri(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ko.bind(e.proxy)),
    $watch: (e) => Ia.bind(e)
  })
), ci = (e, t) => e !== pe && !e.__isScriptSetup && fe(e, t), Ka = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const N = o[t];
      if (N !== void 0)
        switch (N) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (ci(r, t))
          return o[t] = 1, r[t];
        if (i !== pe && fe(i, t))
          return o[t] = 2, i[t];
        if (fe(s, t))
          return o[t] = 3, s[t];
        if (n !== pe && fe(n, t))
          return o[t] = 4, n[t];
        Oi && (o[t] = 0);
      }
    }
    const E = Jn[t];
    let m, x;
    if (E)
      return t === "$attrs" && qe(e.attrs, "get", ""), E(e);
    if (
      // css module (injected by vue-loader)
      (m = l.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== pe && fe(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      x = c.config.globalProperties, fe(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: s } = e;
    return ci(i, t) ? (i[t] = n, !0) : r !== pe && fe(r, t) ? (r[t] = n, !0) : fe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: s, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== pe && l[0] !== "$" && fe(e, l) || ci(t, l) || fe(s, l) || fe(r, l) || fe(Jn, l) || fe(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : fe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vs(e) {
  return Y(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Oi = !0;
function Ga(e) {
  const t = Yo(e), n = e.proxy, r = e.ctx;
  Oi = !1, t.beforeCreate && Es(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: l,
    provide: c,
    inject: E,
    // lifecycle
    created: m,
    beforeMount: x,
    mounted: N,
    beforeUpdate: V,
    updated: J,
    activated: B,
    deactivated: Q,
    beforeDestroy: z,
    beforeUnmount: k,
    destroyed: G,
    unmounted: U,
    render: oe,
    renderTracked: _e,
    renderTriggered: ve,
    errorCaptured: Ee,
    serverPrefetch: be,
    // public API
    expose: xe,
    inheritAttrs: Ve,
    // assets
    components: rt,
    directives: Be,
    filters: ze
  } = t;
  if (E && Ya(E, r, null), o)
    for (const re in o) {
      const ne = o[re];
      ee(ne) && (r[re] = ne.bind(n));
    }
  if (i) {
    const re = i.call(n, n);
    de(re) && (e.data = /* @__PURE__ */ un(re));
  }
  if (Oi = !0, s)
    for (const re in s) {
      const ne = s[re], Pe = ee(ne) ? ne.bind(n, n) : ee(ne.get) ? ne.get.bind(n, n) : Mt, Le = !ee(ne) && ee(ne.set) ? ne.set.bind(n) : Mt, Ye = ie({
        get: Pe,
        set: Le
      });
      Object.defineProperty(r, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Ye.value,
        set: (Ie) => Ye.value = Ie
      });
    }
  if (l)
    for (const re in l)
      Go(l[re], r, n, re);
  if (c) {
    const re = ee(c) ? c.call(n) : c;
    Reflect.ownKeys(re).forEach((ne) => {
      Na(ne, re[ne]);
    });
  }
  m && Es(m, e, "c");
  function ye(re, ne) {
    Y(ne) ? ne.forEach((Pe) => re(Pe.bind(n))) : ne && re(ne.bind(n));
  }
  if (ye(Ha, x), ye(Wo, N), ye(ja, V), ye($a, J), ye(Da, B), ye(Fa, Q), ye(Wa, Ee), ye(za, _e), ye(Ba, ve), ye(qo, k), ye(Ko, U), ye(Va, be), Y(xe))
    if (xe.length) {
      const re = e.exposed || (e.exposed = {});
      xe.forEach((ne) => {
        Object.defineProperty(re, ne, {
          get: () => n[ne],
          set: (Pe) => n[ne] = Pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === Mt && (e.render = oe), Ve != null && (e.inheritAttrs = Ve), rt && (e.components = rt), Be && (e.directives = Be), be && Bo(e);
}
function Ya(e, t, n = Mt) {
  Y(e) && (e = Ni(e));
  for (const r in e) {
    const i = e[r];
    let s;
    de(i) ? "default" in i ? s = xr(
      i.from || r,
      i.default,
      !0
    ) : s = xr(i.from || r) : s = xr(i), /* @__PURE__ */ Ke(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[r] = s;
  }
}
function Es(e, t, n) {
  Tt(
    Y(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Go(e, t, n, r) {
  let i = r.includes(".") ? $o(n, r) : () => n[r];
  if (Se(e)) {
    const s = t[e];
    ee(s) && li(i, s);
  } else if (ee(e))
    li(i, e.bind(n));
  else if (de(e))
    if (Y(e))
      e.forEach((s) => Go(s, t, n, r));
    else {
      const s = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(s) && li(i, s, e);
    }
}
function Yo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = s.get(t);
  let c;
  return l ? c = l : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach(
    (E) => Pr(c, E, o, !0)
  ), Pr(c, t, o)), de(t) && s.set(t, c), c;
}
function Pr(e, t, n, r = !1) {
  const { mixins: i, extends: s } = t;
  s && Pr(e, s, n, !0), i && i.forEach(
    (o) => Pr(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Xa[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Xa = {
  data: Ts,
  props: Ss,
  emits: Ss,
  // objects
  methods: Bn,
  computed: Bn,
  // lifecycle
  beforeCreate: et,
  created: et,
  beforeMount: et,
  mounted: et,
  beforeUpdate: et,
  updated: et,
  beforeDestroy: et,
  beforeUnmount: et,
  destroyed: et,
  unmounted: et,
  activated: et,
  deactivated: et,
  errorCaptured: et,
  serverPrefetch: et,
  // assets
  components: Bn,
  directives: Bn,
  // watch
  watch: Za,
  // provide / inject
  provide: Ts,
  inject: Ja
};
function Ts(e, t) {
  return t ? e ? function() {
    return Ge(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ja(e, t) {
  return Bn(Ni(e), Ni(t));
}
function Ni(e) {
  if (Y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function et(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Bn(e, t) {
  return e ? Ge(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ss(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ge(
    /* @__PURE__ */ Object.create(null),
    vs(e),
    vs(t ?? {})
  ) : t;
}
function Za(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ge(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = et(e[r], t[r]);
  return n;
}
function Xo() {
  return {
    app: null,
    config: {
      isNativeTag: co,
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
let Qa = 0;
function ec(e, t) {
  return function(r, i = null) {
    ee(r) || (r = Ge({}, r)), i != null && !de(i) && (i = null);
    const s = Xo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const E = s.app = {
      _uid: Qa++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Lc,
      get config() {
        return s.config;
      },
      set config(m) {
      },
      use(m, ...x) {
        return o.has(m) || (m && ee(m.install) ? (o.add(m), m.install(E, ...x)) : ee(m) && (o.add(m), m(E, ...x))), E;
      },
      mixin(m) {
        return s.mixins.includes(m) || s.mixins.push(m), E;
      },
      component(m, x) {
        return x ? (s.components[m] = x, E) : s.components[m];
      },
      directive(m, x) {
        return x ? (s.directives[m] = x, E) : s.directives[m];
      },
      mount(m, x, N) {
        if (!c) {
          const V = E._ceVNode || $t(r, i);
          return V.appContext = s, N === !0 ? N = "svg" : N === !1 && (N = void 0), e(V, m, N), c = !0, E._container = m, m.__vue_app__ = E, Kr(V.component);
        }
      },
      onUnmount(m) {
        l.push(m);
      },
      unmount() {
        c && (Tt(
          l,
          E._instance,
          16
        ), e(null, E._container), delete E._container.__vue_app__);
      },
      provide(m, x) {
        return s.provides[m] = x, E;
      },
      runWithContext(m) {
        const x = On;
        On = E;
        try {
          return m();
        } finally {
          On = x;
        }
      }
    };
    return E;
  };
}
let On = null;
const tc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_t(t)}Modifiers`] || e[`${bn(t)}Modifiers`];
function nc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || pe;
  let i = n;
  const s = t.startsWith("update:"), o = s && tc(r, t.slice(7));
  o && (o.trim && (i = n.map((m) => Se(m) ? m.trim() : m)), o.number && (i = i.map(Hr)));
  let l, c = r[l = ni(t)] || // also try camelCase event handler (#2249)
  r[l = ni(_t(t))];
  !c && s && (c = r[l = ni(bn(t))]), c && Tt(
    c,
    e,
    6,
    i
  );
  const E = r[l + "Once"];
  if (E) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Tt(
      E,
      e,
      6,
      i
    );
  }
}
const rc = /* @__PURE__ */ new WeakMap();
function Jo(e, t, n = !1) {
  const r = n ? rc : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let o = {}, l = !1;
  if (!ee(e)) {
    const c = (E) => {
      const m = Jo(E, t, !0);
      m && (l = !0, Ge(o, m));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !s && !l ? (de(e) && r.set(e, null), null) : (Y(s) ? s.forEach((c) => o[c] = null) : Ge(o, s), de(e) && r.set(e, o), o);
}
function Wr(e, t) {
  return !e || !Dr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), fe(e, t[0].toLowerCase() + t.slice(1)) || fe(e, bn(t)) || fe(e, t));
}
function xs(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: l,
    emit: c,
    render: E,
    renderCache: m,
    props: x,
    data: N,
    setupState: V,
    ctx: J,
    inheritAttrs: B
  } = e, Q = Or(e);
  let z, k;
  try {
    if (n.shapeFlag & 4) {
      const U = i || r, oe = U;
      z = Lt(
        E.call(
          oe,
          U,
          m,
          x,
          V,
          N,
          J
        )
      ), k = l;
    } else {
      const U = t;
      z = Lt(
        U.length > 1 ? U(
          x,
          { attrs: l, slots: o, emit: c }
        ) : U(
          x,
          null
        )
      ), k = t.props ? l : ic(l);
    }
  } catch (U) {
    hn.length = 0, Vr(U, e, 1), z = $t(Wt);
  }
  let G = z;
  if (k && B !== !1) {
    const U = Object.keys(k), { shapeFlag: oe } = G;
    U.length && oe & 7 && (s && U.some(Fr) && (k = sc(
      k,
      s
    )), G = Ln(G, k, !1, !0));
  }
  if (n.dirs && (G = Ln(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const U = Br(G.type) && Vo(G) || G;
    Ki(U, n.transition);
  }
  return z = G, Or(Q), z;
}
const ic = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Dr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, sc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Fr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function oc(e, t, n) {
  const { props: r, children: i, component: s } = e, { props: o, children: l, patchFlag: c } = t, E = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Cs(r, o, E) : !!o;
    if (c & 8) {
      const m = t.dynamicProps;
      for (let x = 0; x < m.length; x++) {
        const N = m[x];
        if (Zo(o, r, N) && !Wr(E, N))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? Cs(r, o, E) : !0 : !!o;
  return !1;
}
function Cs(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (Zo(t, e, s) && !Wr(n, s))
      return !0;
  }
  return !1;
}
function Zo(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && de(r) && de(i) ? !Zt(r, i) : r !== i;
}
function lc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Qo = {}, el = () => Object.create(Qo), tl = (e) => Object.getPrototypeOf(e) === Qo;
function ac(e, t, n, r = !1) {
  const i = {}, s = el();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nl(e, t, i, s);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ ba(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function cc(e, t, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ue(i), [c] = e.propsOptions;
  let E = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const m = e.vnode.dynamicProps;
      for (let x = 0; x < m.length; x++) {
        let N = m[x];
        if (Wr(e.emitsOptions, N))
          continue;
        const V = t[N];
        if (c)
          if (fe(s, N))
            V !== s[N] && (s[N] = V, E = !0);
          else {
            const J = _t(N);
            i[J] = Pi(
              c,
              l,
              J,
              V,
              e,
              !1
            );
          }
        else
          V !== s[N] && (s[N] = V, E = !0);
      }
    }
  } else {
    nl(e, t, i, s) && (E = !0);
    let m;
    for (const x in l)
      (!t || // for camelCase
      !fe(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = bn(x)) === x || !fe(t, m))) && (c ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[m] !== void 0) && (i[x] = Pi(
        c,
        l,
        x,
        void 0,
        e,
        !0
      )) : delete i[x]);
    if (s !== l)
      for (const x in s)
        (!t || !fe(t, x)) && (delete s[x], E = !0);
  }
  E && Ht(e.attrs, "set", "");
}
function nl(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (qn(c))
        continue;
      const E = t[c];
      let m;
      i && fe(i, m = _t(c)) ? !s || !s.includes(m) ? n[m] = E : (l || (l = {}))[m] = E : Wr(e.emitsOptions, c) || (!(c in r) || E !== r[c]) && (r[c] = E, o = !0);
    }
  if (s) {
    const c = /* @__PURE__ */ ue(n), E = l || pe;
    for (let m = 0; m < s.length; m++) {
      const x = s[m];
      n[x] = Pi(
        i,
        c,
        x,
        E[x],
        e,
        !fe(E, x)
      );
    }
  }
  return o;
}
function Pi(e, t, n, r, i, s) {
  const o = e[n];
  if (o != null) {
    const l = fe(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && ee(c)) {
        const { propsDefaults: E } = i;
        if (n in E)
          r = E[n];
        else {
          const m = or(i);
          r = E[n] = c.call(
            null,
            t
          ), m();
        }
      } else
        r = c;
      i.ce && i.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === bn(n)) && (r = !0));
  }
  return r;
}
const uc = /* @__PURE__ */ new WeakMap();
function rl(e, t, n = !1) {
  const r = n ? uc : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const s = e.props, o = {}, l = [];
  let c = !1;
  if (!ee(e)) {
    const m = (x) => {
      c = !0;
      const [N, V] = rl(x, t, !0);
      Ge(o, N), V && l.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!s && !c)
    return de(e) && r.set(e, An), An;
  if (Y(s))
    for (let m = 0; m < s.length; m++) {
      const x = _t(s[m]);
      As(x) && (o[x] = pe);
    }
  else if (s)
    for (const m in s) {
      const x = _t(m);
      if (As(x)) {
        const N = s[m], V = o[x] = Y(N) || ee(N) ? { type: N } : Ge({}, N), J = V.type;
        let B = !1, Q = !0;
        if (Y(J))
          for (let z = 0; z < J.length; ++z) {
            const k = J[z], G = ee(k) && k.name;
            if (G === "Boolean") {
              B = !0;
              break;
            } else G === "String" && (Q = !1);
          }
        else
          B = ee(J) && J.name === "Boolean";
        V[
          0
          /* shouldCast */
        ] = B, V[
          1
          /* shouldCastTrue */
        ] = Q, (B || fe(V, "default")) && l.push(x);
      }
    }
  const E = [o, l];
  return de(e) && r.set(e, E), E;
}
function As(e) {
  return e[0] !== "$" && !qn(e);
}
const Yi = (e) => e === "_" || e === "_ctx" || e === "$stable", Xi = (e) => Y(e) ? e.map(Lt) : [Lt(e)], fc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Oa((...i) => Xi(t(...i)), n);
  return r._c = !1, r;
}, il = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Yi(i)) continue;
    const s = e[i];
    if (ee(s))
      t[i] = fc(i, s, r);
    else if (s != null) {
      const o = Xi(s);
      t[i] = () => o;
    }
  }
}, sl = (e, t) => {
  const n = Xi(t);
  e.slots.default = () => n;
}, ol = (e, t, n) => {
  for (const r in t)
    (n || !Yi(r)) && (e[r] = t[r]);
}, dc = (e, t, n) => {
  const r = e.slots = el();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ol(r, t, n), n && mo(r, "_", i, !0)) : il(t, r);
  } else t && sl(e, t);
}, pc = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let s = !0, o = pe;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? s = !1 : ol(i, t, n) : (s = !t.$stable, il(t, i)), o = t;
  } else t && (sl(e, t), o = { default: 1 });
  if (s)
    for (const l in i)
      !Yi(l) && o[l] == null && delete i[l];
}, ct = gc;
function hc(e) {
  return mc(e);
}
function mc(e, t) {
  const n = jr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: c,
    setText: E,
    setElementText: m,
    parentNode: x,
    nextSibling: N,
    setScopeId: V = Mt,
    insertStaticContent: J
  } = e, B = (f, h, v, R = null, S = null, A = null, I = void 0, P = null, L = !!h.dynamicChildren) => {
    if (f === h)
      return;
    f && !Un(f, h) && (R = He(f), Ie(f, S, A, !0), f = null), h.patchFlag === -2 && (L = !1, h.dynamicChildren = null);
    const { type: C, ref: W, shapeFlag: D } = h;
    switch (C) {
      case qr:
        Q(f, h, v, R);
        break;
      case Wt:
        z(f, h, v, R);
        break;
      case fi:
        f == null && k(h, v, R, I);
        break;
      case se:
        rt(
          f,
          h,
          v,
          R,
          S,
          A,
          I,
          P,
          L
        );
        break;
      default:
        D & 1 ? oe(
          f,
          h,
          v,
          R,
          S,
          A,
          I,
          P,
          L
        ) : D & 6 ? Be(
          f,
          h,
          v,
          R,
          S,
          A,
          I,
          P,
          L
        ) : (D & 64 || D & 128) && C.process(
          f,
          h,
          v,
          R,
          S,
          A,
          I,
          P,
          L,
          Xe
        );
    }
    W != null && S ? Yn(W, f && f.ref, A, h || f, !h) : W == null && f && f.ref != null && Yn(f.ref, null, A, f, !0);
  }, Q = (f, h, v, R) => {
    if (f == null)
      r(
        h.el = l(h.children),
        v,
        R
      );
    else {
      const S = h.el = f.el;
      h.children !== f.children && E(S, h.children);
    }
  }, z = (f, h, v, R) => {
    f == null ? r(
      h.el = c(h.children || ""),
      v,
      R
    ) : h.el = f.el;
  }, k = (f, h, v, R) => {
    [f.el, f.anchor] = J(
      f.children,
      h,
      v,
      R,
      f.el,
      f.anchor
    );
  }, G = ({ el: f, anchor: h }, v, R) => {
    let S;
    for (; f && f !== h; )
      S = N(f), r(f, v, R), f = S;
    r(h, v, R);
  }, U = ({ el: f, anchor: h }) => {
    let v;
    for (; f && f !== h; )
      v = N(f), i(f), f = v;
    i(h);
  }, oe = (f, h, v, R, S, A, I, P, L) => {
    if (h.type === "svg" ? I = "svg" : h.type === "math" && (I = "mathml"), f == null)
      _e(
        h,
        v,
        R,
        S,
        A,
        I,
        P,
        L
      );
    else {
      const C = f.el && f.el._isVueCE ? f.el : null;
      try {
        C && C._beginPatch(), be(
          f,
          h,
          S,
          A,
          I,
          P,
          L
        );
      } finally {
        C && C._endPatch();
      }
    }
  }, _e = (f, h, v, R, S, A, I, P) => {
    let L, C;
    const { props: W, shapeFlag: D, transition: w, dirs: _ } = f;
    if (L = f.el = o(
      f.type,
      A,
      W && W.is,
      W
    ), D & 8 ? m(L, f.children) : D & 16 && Ee(
      f.children,
      L,
      null,
      R,
      S,
      ui(f, A),
      I,
      P
    ), _ && rn(f, null, R, "created"), ve(L, f, f.scopeId, I, R), W) {
      for (const d in W)
        d !== "value" && !qn(d) && s(L, d, null, W[d], A, R);
      "value" in W && s(L, "value", null, W.value, A), (C = W.onVnodeBeforeMount) && Ot(C, R, f);
    }
    _ && rn(f, null, R, "beforeMount");
    const b = bc(S, w);
    b && w.beforeEnter(L), r(L, h, v), ((C = W && W.onVnodeMounted) || b || _) && ct(() => {
      C && Ot(C, R, f), b && w.enter(L), _ && rn(f, null, R, "mounted");
    }, S);
  }, ve = (f, h, v, R, S) => {
    if (v && V(f, v), R)
      for (let A = 0; A < R.length; A++)
        V(f, R[A]);
    if (S) {
      let A = S.subTree;
      if (h === A || ul(A.type) && (A.ssContent === h || A.ssFallback === h)) {
        const I = S.vnode;
        ve(
          f,
          I,
          I.scopeId,
          I.slotScopeIds,
          S.parent
        );
      }
    }
  }, Ee = (f, h, v, R, S, A, I, P, L = 0) => {
    for (let C = L; C < f.length; C++) {
      const W = f[C] = P ? Ut(f[C]) : Lt(f[C]);
      B(
        null,
        W,
        h,
        v,
        R,
        S,
        A,
        I,
        P
      );
    }
  }, be = (f, h, v, R, S, A, I) => {
    const P = h.el = f.el;
    let { patchFlag: L, dynamicChildren: C, dirs: W } = h;
    L |= f.patchFlag & 16;
    const D = f.props || pe, w = h.props || pe;
    let _;
    if (v && sn(v, !1), (_ = w.onVnodeBeforeUpdate) && Ot(_, v, h, f), W && rn(h, f, v, "beforeUpdate"), v && sn(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    C && (!f.dynamicChildren || f.dynamicChildren.length !== C.length) && (L = 0, I = !1, C = null), (D.innerHTML && w.innerHTML == null || D.textContent && w.textContent == null) && m(P, ""), C ? xe(
      f.dynamicChildren,
      C,
      P,
      v,
      R,
      ui(h, S),
      A
    ) : I || ne(
      f,
      h,
      P,
      null,
      v,
      R,
      ui(h, S),
      A,
      !1
    ), L > 0) {
      if (L & 16)
        Ve(P, D, w, v, S);
      else if (L & 2 && D.class !== w.class && s(P, "class", null, w.class, S), L & 4 && s(P, "style", D.style, w.style, S), L & 8) {
        const b = h.dynamicProps;
        for (let d = 0; d < b.length; d++) {
          const F = b[d], te = D[F], Z = w[F];
          (Z !== te || F === "value") && s(P, F, te, Z, S, v);
        }
      }
      L & 1 && f.children !== h.children && m(P, h.children);
    } else !I && C == null && Ve(P, D, w, v, S);
    ((_ = w.onVnodeUpdated) || W) && ct(() => {
      _ && Ot(_, v, h, f), W && rn(h, f, v, "updated");
    }, R);
  }, xe = (f, h, v, R, S, A, I) => {
    for (let P = 0; P < h.length; P++) {
      const L = f[P], C = h[P], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === se || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Un(L, C) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? x(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      B(
        L,
        C,
        W,
        null,
        R,
        S,
        A,
        I,
        !0
      );
    }
  }, Ve = (f, h, v, R, S) => {
    if (h !== v) {
      if (h !== pe)
        for (const A in h)
          !qn(A) && !(A in v) && s(
            f,
            A,
            h[A],
            null,
            S,
            R
          );
      for (const A in v) {
        if (qn(A)) continue;
        const I = v[A], P = h[A];
        I !== P && A !== "value" && s(f, A, P, I, S, R);
      }
      "value" in v && s(f, "value", h.value, v.value, S);
    }
  }, rt = (f, h, v, R, S, A, I, P, L) => {
    const C = h.el = f ? f.el : l(""), W = h.anchor = f ? f.anchor : l("");
    let { patchFlag: D, dynamicChildren: w, slotScopeIds: _ } = h;
    _ && (P = P ? P.concat(_) : _), f == null ? (r(C, v, R), r(W, v, R), Ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      v,
      W,
      S,
      A,
      I,
      P,
      L
    )) : D > 0 && D & 64 && w && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === w.length ? (xe(
      f.dynamicChildren,
      w,
      v,
      S,
      A,
      I,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || S && h === S.subTree) && ll(
      f,
      h,
      !0
      /* shallow */
    )) : ne(
      f,
      h,
      v,
      W,
      S,
      A,
      I,
      P,
      L
    );
  }, Be = (f, h, v, R, S, A, I, P, L) => {
    h.slotScopeIds = P, f == null ? h.shapeFlag & 512 ? S.ctx.activate(
      h,
      v,
      R,
      I,
      L
    ) : ze(
      h,
      v,
      R,
      S,
      A,
      I,
      L
    ) : it(f, h, L);
  }, ze = (f, h, v, R, S, A, I) => {
    const P = f.component = Cc(
      f,
      R,
      S
    );
    if (Gi(f) && (P.ctx.renderer = Xe), wc(P, !1, I), P.asyncDep) {
      if (S && S.registerDep(P, ye, I), !f.el) {
        const L = P.subTree = $t(Wt);
        z(null, L, h, v), f.placeholder = L.el;
      }
    } else
      ye(
        P,
        f,
        h,
        v,
        S,
        A,
        I
      );
  }, it = (f, h, v) => {
    const R = h.component = f.component;
    if (oc(f, h, v))
      if (R.asyncDep && !R.asyncResolved) {
        re(R, h, v);
        return;
      } else
        R.next = h, R.update();
    else
      h.el = f.el, R.vnode = h;
  }, ye = (f, h, v, R, S, A, I) => {
    const P = () => {
      if (f.isMounted) {
        let { next: D, bu: w, u: _, parent: b, vnode: d } = f;
        {
          const Me = al(f);
          if (Me) {
            D && (D.el = d.el, re(f, D, I)), Me.asyncDep.then(() => {
              ct(() => {
                f.isUnmounted || C();
              }, S);
            });
            return;
          }
        }
        let F = D, te;
        sn(f, !1), D ? (D.el = d.el, re(f, D, I)) : D = d, w && Sr(w), (te = D.props && D.props.onVnodeBeforeUpdate) && Ot(te, b, D, d), sn(f, !0);
        const Z = xs(f), we = f.subTree;
        f.subTree = Z, B(
          we,
          Z,
          // parent may have changed if it's in a teleport
          x(we.el),
          // anchor may have changed if it's in a fragment
          He(we),
          f,
          S,
          A
        ), D.el = Z.el, F === null && lc(f, Z.el), _ && ct(_, S), (te = D.props && D.props.onVnodeUpdated) && ct(
          () => Ot(te, b, D, d),
          S
        );
      } else {
        let D;
        const { el: w, props: _ } = h, { bm: b, m: d, parent: F, root: te, type: Z } = f, we = Xn(h);
        sn(f, !1), b && Sr(b), !we && (D = _ && _.onVnodeBeforeMount) && Ot(D, F, h), sn(f, !0);
        {
          te.ce && te.ce._hasShadowRoot() && te.ce._injectChildStyle(
            Z,
            f.parent ? f.parent.type : void 0
          );
          const Me = f.subTree = xs(f);
          B(
            null,
            Me,
            v,
            R,
            f,
            S,
            A
          ), h.el = Me.el;
        }
        if (d && ct(d, S), !we && (D = _ && _.onVnodeMounted)) {
          const Me = h;
          ct(
            () => Ot(D, F, Me),
            S
          );
        }
        (h.shapeFlag & 256 || F && Xn(F.vnode) && F.vnode.shapeFlag & 256) && f.a && ct(f.a, S), f.isMounted = !0, h = v = R = null;
      }
    };
    f.scope.on();
    const L = f.effect = new _o(P);
    f.scope.off();
    const C = f.update = L.run.bind(L), W = f.job = L.runIfDirty.bind(L);
    W.i = f, W.id = f.uid, L.scheduler = () => qi(W), sn(f, !0), C();
  }, re = (f, h, v) => {
    h.component = f;
    const R = f.vnode.props;
    f.vnode = h, f.next = null, cc(f, h.props, R, v), pc(f, h.children, v), Vt(), ys(f), Bt();
  }, ne = (f, h, v, R, S, A, I, P, L = !1) => {
    const C = f && f.children, W = f ? f.shapeFlag : 0, D = h.children, { patchFlag: w, shapeFlag: _ } = h;
    if (w > 0) {
      if (w & 128) {
        Le(
          C,
          D,
          v,
          R,
          S,
          A,
          I,
          P,
          L
        );
        return;
      } else if (w & 256) {
        Pe(
          C,
          D,
          v,
          R,
          S,
          A,
          I,
          P,
          L
        );
        return;
      }
    }
    _ & 8 ? (W & 16 && ft(C, S, A), D !== C && m(v, D)) : W & 16 ? _ & 16 ? Le(
      C,
      D,
      v,
      R,
      S,
      A,
      I,
      P,
      L
    ) : ft(C, S, A, !0) : (W & 8 && m(v, ""), _ & 16 && Ee(
      D,
      v,
      R,
      S,
      A,
      I,
      P,
      L
    ));
  }, Pe = (f, h, v, R, S, A, I, P, L) => {
    f = f || An, h = h || An;
    const C = f.length, W = h.length, D = Math.min(C, W);
    let w;
    for (w = 0; w < D; w++) {
      const _ = h[w] = L ? Ut(h[w]) : Lt(h[w]);
      B(
        f[w],
        _,
        v,
        null,
        S,
        A,
        I,
        P,
        L
      );
    }
    C > W ? ft(
      f,
      S,
      A,
      !0,
      !1,
      D
    ) : Ee(
      h,
      v,
      R,
      S,
      A,
      I,
      P,
      L,
      D
    );
  }, Le = (f, h, v, R, S, A, I, P, L) => {
    let C = 0;
    const W = h.length;
    let D = f.length - 1, w = W - 1;
    for (; C <= D && C <= w; ) {
      const _ = f[C], b = h[C] = L ? Ut(h[C]) : Lt(h[C]);
      if (Un(_, b))
        B(
          _,
          b,
          v,
          null,
          S,
          A,
          I,
          P,
          L
        );
      else
        break;
      C++;
    }
    for (; C <= D && C <= w; ) {
      const _ = f[D], b = h[w] = L ? Ut(h[w]) : Lt(h[w]);
      if (Un(_, b))
        B(
          _,
          b,
          v,
          null,
          S,
          A,
          I,
          P,
          L
        );
      else
        break;
      D--, w--;
    }
    if (C > D) {
      if (C <= w) {
        const _ = w + 1, b = _ < W ? h[_].el : R;
        for (; C <= w; )
          B(
            null,
            h[C] = L ? Ut(h[C]) : Lt(h[C]),
            v,
            b,
            S,
            A,
            I,
            P,
            L
          ), C++;
      }
    } else if (C > w)
      for (; C <= D; )
        Ie(f[C], S, A, !0), C++;
    else {
      const _ = C, b = C, d = /* @__PURE__ */ new Map();
      for (C = b; C <= w; C++) {
        const Ce = h[C] = L ? Ut(h[C]) : Lt(h[C]);
        Ce.key != null && d.set(Ce.key, C);
      }
      let F, te = 0;
      const Z = w - b + 1;
      let we = !1, Me = 0;
      const Re = new Array(Z);
      for (C = 0; C < Z; C++) Re[C] = 0;
      for (C = _; C <= D; C++) {
        const Ce = f[C];
        if (te >= Z) {
          Ie(Ce, S, A, !0);
          continue;
        }
        let je;
        if (Ce.key != null)
          je = d.get(Ce.key);
        else
          for (F = b; F <= w; F++)
            if (Re[F - b] === 0 && Un(Ce, h[F])) {
              je = F;
              break;
            }
        je === void 0 ? Ie(Ce, S, A, !0) : (Re[je - b] = C + 1, je >= Me ? Me = je : we = !0, B(
          Ce,
          h[je],
          v,
          null,
          S,
          A,
          I,
          P,
          L
        ), te++);
      }
      const ot = we ? yc(Re) : An;
      for (F = ot.length - 1, C = Z - 1; C >= 0; C--) {
        const Ce = b + C, je = h[Ce], Qt = h[Ce + 1], Kt = Ce + 1 < W ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Qt.el || cl(Qt)
        ) : R;
        Re[C] === 0 ? B(
          null,
          je,
          v,
          Kt,
          S,
          A,
          I,
          P,
          L
        ) : we && (F < 0 || C !== ot[F] ? Ye(je, v, Kt, 2) : F--);
      }
    }
  }, Ye = (f, h, v, R, S = null) => {
    const { el: A, type: I, transition: P, children: L, shapeFlag: C } = f;
    if (C & 6) {
      Ye(f.component.subTree, h, v, R);
      return;
    }
    if (C & 128) {
      f.suspense.move(h, v, R);
      return;
    }
    if (C & 64) {
      I.move(f, h, v, Xe);
      return;
    }
    if (I === se) {
      r(A, h, v);
      for (let D = 0; D < L.length; D++)
        Ye(L[D], h, v, R);
      r(f.anchor, h, v);
      return;
    }
    if (I === fi) {
      G(f, h, v);
      return;
    }
    if (R !== 2 && C & 1 && P)
      if (R === 0)
        P.persisted && !A[ai] ? r(A, h, v) : (P.beforeEnter(A), r(A, h, v), ct(() => P.enter(A), S));
      else {
        const { leave: D, delayLeave: w, afterLeave: _ } = P, b = () => {
          f.ctx.isUnmounted ? i(A) : r(A, h, v);
        }, d = () => {
          const F = A._isLeaving || !!A[ai];
          A._isLeaving && A[ai](
            !0
            /* cancelled */
          ), P.persisted && !F ? b() : D(A, () => {
            b(), _ && _();
          });
        };
        w ? w(A, b, d) : d();
      }
    else
      r(A, h, v);
  }, Ie = (f, h, v, R = !1, S = !1) => {
    const {
      type: A,
      props: I,
      ref: P,
      children: L,
      dynamicChildren: C,
      shapeFlag: W,
      patchFlag: D,
      dirs: w,
      cacheIndex: _,
      memo: b
    } = f;
    if (D === -2 && (S = !1), P != null && (Vt(), Yn(P, null, v, f, !0), Bt()), _ != null && (h.renderCache[_] = void 0), W & 256) {
      h.ctx.deactivate(f);
      return;
    }
    const d = W & 1 && w, F = !Xn(f);
    let te;
    if (F && (te = I && I.onVnodeBeforeUnmount) && Ot(te, h, f), W & 6)
      De(f.component, v, R);
    else {
      if (W & 128) {
        f.suspense.unmount(v, R);
        return;
      }
      d && rn(f, null, h, "beforeUnmount"), W & 64 ? f.type.remove(
        f,
        h,
        v,
        Xe,
        R
      ) : C && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !C.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (A !== se || D > 0 && D & 64) ? ft(
        C,
        h,
        v,
        !1,
        !0
      ) : (A === se && D & 384 || !S && W & 16) && ft(L, h, v), R && st(f);
    }
    const Z = b != null && _ == null;
    (F && (te = I && I.onVnodeUnmounted) || d || Z) && ct(() => {
      te && Ot(te, h, f), d && rn(f, null, h, "unmounted"), Z && (f.el = null);
    }, v);
  }, st = (f) => {
    const { type: h, el: v, anchor: R, transition: S } = f;
    if (h === se) {
      ae(v, R);
      return;
    }
    if (h === fi) {
      U(f);
      return;
    }
    const A = () => {
      i(v), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (f.shapeFlag & 1 && S && !S.persisted) {
      const { leave: I, delayLeave: P } = S, L = () => I(v, A);
      P ? P(f.el, A, L) : L();
    } else
      A();
  }, ae = (f, h) => {
    let v;
    for (; f !== h; )
      v = N(f), i(f), f = v;
    i(h);
  }, De = (f, h, v) => {
    const { bum: R, scope: S, job: A, subTree: I, um: P, m: L, a: C } = f;
    ws(L), ws(C), R && Sr(R), S.stop(), A && (A.flags |= 8, Ie(I, f, h, v)), P && ct(P, h), ct(() => {
      f.isUnmounted = !0;
    }, h);
  }, ft = (f, h, v, R = !1, S = !1, A = 0) => {
    for (let I = A; I < f.length; I++)
      Ie(f[I], h, v, R, S);
  }, He = (f) => {
    if (f.shapeFlag & 6)
      return He(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const h = N(f.anchor || f.el), v = h && h[Ma];
    return v ? N(v) : h;
  };
  let dt = !1;
  const St = (f, h, v) => {
    let R;
    f == null ? h._vnode && (Ie(h._vnode, null, null, !0), R = h._vnode.component) : B(
      h._vnode || null,
      f,
      h,
      null,
      null,
      null,
      v
    ), h._vnode = f, dt || (dt = !0, ys(R), Fo(), dt = !1);
  }, Xe = {
    p: B,
    um: Ie,
    m: Ye,
    r: st,
    mt: ze,
    mc: Ee,
    pc: ne,
    pbc: xe,
    n: He,
    o: e
  };
  return {
    render: St,
    hydrate: void 0,
    createApp: ec(St)
  };
}
function ui({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function sn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ll(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (Y(r) && Y(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = Ut(i[s]), l.el = o.el), !n && l.patchFlag !== -2 && ll(o, l)), l.type === qr && (l.patchFlag === -1 && (l = i[s] = Ut(l)), l.el = o.el), l.type === Wt && !l.el && (l.el = o.el);
    }
}
function yc(e) {
  const t = e.slice(), n = [0];
  let r, i, s, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const E = e[r];
    if (E !== 0) {
      if (i = n[n.length - 1], e[i] < E) {
        t[r] = i, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, e[n[l]] < E ? s = l + 1 : o = l;
      E < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = t[o];
  return n;
}
function al(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : al(t);
}
function ws(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function cl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? cl(t.subTree) : null;
}
const ul = (e) => e.__isSuspense;
function gc(e, t) {
  t && t.pendingBranch ? Y(e) ? t.effects.push(...e) : t.effects.push(e) : Ra(e);
}
const se = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), Wt = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), hn = [];
let mt = null;
function H(e = !1) {
  hn.push(mt = e ? null : []);
}
function fl() {
  hn.pop(), mt = hn[hn.length - 1] || null;
}
let tr = 1;
function Rs(e, t = !1) {
  tr += e, e < 0 && mt && t && (mt.hasOnce = !0);
}
function dl(e) {
  return e.dynamicChildren = tr > 0 ? mt || An : null, fl(), tr > 0 && mt && mt.push(e), e;
}
function j(e, t, n, r, i, s) {
  return dl(
    p(
      e,
      t,
      n,
      r,
      i,
      s,
      !0
    )
  );
}
function _c(e, t, n, r, i) {
  return dl(
    $t(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function pl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Un(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hl = ({ key: e }) => e ?? null, Cr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Se(e) || /* @__PURE__ */ Ke(e) || ee(e) ? { i: bt, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, r = 0, i = null, s = e === se ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hl(t),
    ref: t && Cr(t),
    scopeId: Ho,
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
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: bt
  };
  return l ? (Lr(c, n), s & 128 && e.normalize(c)) : n && (c.shapeFlag |= Se(n) ? 8 : 16), tr > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  mt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && mt.push(c), c;
}
const $t = vc;
function vc(e, t = null, n = null, r = 0, i = null, s = !1) {
  if ((!e || e === qa) && (e = Wt), pl(e)) {
    const l = Ln(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Lr(l, n), tr > 0 && !s && mt && (l.shapeFlag & 6 ? mt[mt.indexOf(e)] = l : mt.push(l)), l.patchFlag = -2, l;
  }
  if (Pc(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: l, style: c } = t;
    l && !Se(l) && (t.class = wn(l)), de(c) && (/* @__PURE__ */ Wi(c) && !Y(c) && (c = Ge({}, c)), t.style = Ui(c));
  }
  const o = Se(e) ? 1 : ul(e) ? 128 : Br(e) ? 64 : de(e) ? 4 : ee(e) ? 2 : 0;
  return p(
    e,
    t,
    n,
    r,
    i,
    o,
    s,
    !0
  );
}
function Ec(e) {
  return e ? /* @__PURE__ */ Wi(e) || tl(e) ? Ge({}, e) : e : null;
}
function Ln(e, t, n = !1, r = !1) {
  const { props: i, ref: s, patchFlag: o, children: l, transition: c } = e, E = t ? Tc(i || {}, t) : i, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: E,
    key: E && hl(E),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Y(s) ? s.concat(Cr(t)) : [s, Cr(t)] : Cr(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== se ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ln(e.ssContent),
    ssFallback: e.ssFallback && Ln(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && Ki(
    m,
    c.clone(m)
  ), m;
}
function ce(e = " ", t = 0) {
  return $t(qr, null, e, t);
}
function Oe(e = "", t = !1) {
  return t ? (H(), _c(Wt, null, e)) : $t(Wt, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? $t(Wt) : Y(e) ? $t(
    se,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pl(e) ? Ut(e) : $t(qr, null, String(e));
}
function Ut(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ln(e);
}
function Lr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Y(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Lr(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !tl(t) ? t._ctx = bt : i === 3 && bt && (bt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (r & 65) {
      Lr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: bt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [ce(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Tc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = wn([t.class, r.class]));
      else if (i === "style")
        t.style = Ui([t.style, r.style]);
      else if (Dr(i)) {
        const s = t[i], o = r[i];
        o && s !== o && !(Y(s) && s.includes(o)) ? t[i] = s ? [].concat(s, o) : o : o == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Fr(i) && (t[i] = o);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Ot(e, t, n, r = null) {
  Tt(e, t, 7, [
    n,
    r
  ]);
}
const Sc = Xo();
let xc = 0;
function Cc(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || Sc, s = {
    uid: xc++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Jl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: rl(r, i),
    emitsOptions: Jo(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: pe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: pe,
    data: pe,
    props: pe,
    attrs: pe,
    slots: pe,
    refs: pe,
    setupState: pe,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = nc.bind(null, s), e.ce && e.ce(s), s;
}
let nt = null;
const Ac = () => nt || bt;
let Ir, nr;
{
  const e = jr(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  Ir = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => nt = n
  ), nr = t(
    "__VUE_SSR_SETTERS__",
    (n) => rr = n
  );
}
const or = (e) => {
  const t = nt;
  return Ir(e), e.scope.on(), () => {
    e.scope.off(), Ir(t);
  };
}, Os = () => {
  nt && nt.scope.off(), Ir(null);
};
function ml(e) {
  return e.vnode.shapeFlag & 4;
}
let rr = !1;
function wc(e, t = !1, n = !1) {
  t && nr(t);
  const { props: r, children: i } = e.vnode, s = ml(e);
  ac(e, r, s, t), dc(e, i, n || t);
  const o = s ? Rc(e, t) : void 0;
  return t && nr(!1), o;
}
function Rc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ka);
  const { setup: r } = n;
  if (r) {
    Vt();
    const i = e.setupContext = r.length > 1 ? Nc(e) : null, s = or(e), o = sr(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = uo(o);
    if (Bt(), s(), (l || e.sp) && !Xn(e) && Bo(e), l) {
      if (o.then(Os, Os), t)
        return o.then((c) => {
          nr(!0);
          try {
            Ns(e, c, t);
          } finally {
            nr(!1);
          }
        }).catch((c) => {
          Vr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Ns(e, o);
  } else
    bl(e);
}
function Ns(e, t, n) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = Io(t)), bl(e);
}
function bl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Mt);
  {
    const i = or(e);
    Vt();
    try {
      Ga(e);
    } finally {
      Bt(), i();
    }
  }
}
const Oc = {
  get(e, t) {
    return qe(e, "get", ""), e[t];
  }
};
function Nc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Oc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Io(ya(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Jn)
        return Jn[n](e);
    },
    has(t, n) {
      return n in t || n in Jn;
    }
  })) : e.proxy;
}
function Pc(e) {
  return ee(e) && "__vccOpts" in e;
}
const ie = (e, t) => /* @__PURE__ */ Sa(e, t, rr), Lc = "3.5.42";
let Li;
const Ps = typeof window < "u" && window.trustedTypes;
if (Ps)
  try {
    Li = /* @__PURE__ */ Ps.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yl = Li ? (e) => Li.createHTML(e) : (e) => e, Ic = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", Ft = typeof document < "u" ? document : null, Ls = Ft && /* @__PURE__ */ Ft.createElement("template"), kc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Ft.createElementNS(Ic, e) : t === "mathml" ? Ft.createElementNS(Mc, e) : n ? Ft.createElement(e, { is: n }) : Ft.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Ft.createTextNode(e),
  createComment: (e) => Ft.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ft.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, s) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Ls.innerHTML = yl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ls.content;
      if (r === "svg" || r === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Dc = /* @__PURE__ */ Symbol("_vtc");
function Fc(e, t, n) {
  const r = e[Dc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Is = /* @__PURE__ */ Symbol("_vod"), Uc = /* @__PURE__ */ Symbol("_vsh"), Hc = /* @__PURE__ */ Symbol(""), jc = /(?:^|;)\s*display\s*:/;
function $c(e, t, n) {
  const r = e.style, i = Se(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (Se(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && zn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && zn(r, o, "");
    for (const o in n) {
      o === "display" && (s = !0);
      const l = n[o];
      l != null ? Bc(
        e,
        o,
        !Se(t) && t ? t[o] : void 0,
        l
      ) || zn(r, o, l) : zn(r, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = r[Hc];
      o && (n += ";" + o), r.cssText = n, s = jc.test(n);
    }
  } else t && e.removeAttribute("style");
  Is in e && (e[Is] = s ? r.display : "", e[Uc] && (r.display = "none"));
}
const _r = /\s*!important$/;
function zn(e, t, n) {
  if (Y(n))
    n.forEach((r) => zn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    _r.test(n) ? e.setProperty(t, n.replace(_r, ""), "important") : e.setProperty(t, n);
  else {
    const r = Vc(e, t);
    _r.test(n) ? e.setProperty(
      bn(r),
      n.replace(_r, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ms = ["Webkit", "Moz", "ms"], di = {};
function Vc(e, t) {
  const n = di[t];
  if (n)
    return n;
  let r = _t(t);
  if (r !== "filter" && r in e)
    return di[t] = r;
  r = ho(r);
  for (let i = 0; i < Ms.length; i++) {
    const s = Ms[i] + r;
    if (s in e)
      return di[t] = s;
  }
  return t;
}
function Bc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Se(r) && n === r;
}
const ks = "http://www.w3.org/1999/xlink";
function Ds(e, t, n, r, i, s = Gl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ks, t.slice(6, t.length)) : e.setAttributeNS(ks, t, n) : n == null || s && !bo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : kt(n) ? String(n) : n
  );
}
function Fs(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? yl(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = bo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function cn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function zc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Us = /* @__PURE__ */ Symbol("_vei");
function Wc(e, t, n, r, i = null) {
  const s = e[Us] || (e[Us] = {}), o = s[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Gc(t);
    if (r) {
      const E = s[t] = Jc(
        r,
        i
      );
      cn(e, l, E, c);
    } else o && (zc(e, l, o, c), s[t] = void 0);
  }
}
const qc = /(Once|Passive|Capture)$/, Kc = /^on:?(?:Once|Passive|Capture)$/;
function Gc(e) {
  let t, n;
  for (; (n = e.match(qc)) && !Kc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : bn(e.slice(2)), t];
}
let pi = 0;
const Yc = /* @__PURE__ */ Promise.resolve(), Xc = () => pi || (Yc.then(() => pi = 0), pi = Date.now());
function Jc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const i = n.value;
    if (Y(i)) {
      const s = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        s.call(r), r._stopped = !0;
      };
      const o = i.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const E = o[c];
        E && Tt(
          E,
          t,
          5,
          l
        );
      }
    } else
      Tt(
        i,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Xc(), n;
}
const Hs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zc = (e, t, n, r, i, s) => {
  const o = i === "svg";
  t === "class" ? Fc(e, r, o) : t === "style" ? $c(e, n, r) : Dr(t) ? Fr(t) || Wc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, r, o)) ? (Fs(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ds(e, t, r, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (eu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Se(r))) ? Fs(e, _t(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ds(e, t, r, o));
};
function Qc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hs(t) && ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Hs(t) && Se(n) ? !1 : t in e;
}
function eu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = _t(t);
  return Array.isArray(n) ? n.some((i) => _t(i) === r) : Object.keys(n).some((i) => _t(i) === r);
}
const Mr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Y(t) ? (n) => Sr(t, n) : t;
};
function tu(e) {
  e.target.composing = !0;
}
function js(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const fn = /* @__PURE__ */ Symbol("_assign"), vr = /* @__PURE__ */ Symbol("_initialValue");
function hi(e, t, n) {
  return t && (e = e.trim()), n && (e = Hr(e)), e;
}
const mi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e.parentNode && (e.type === "text" ? e[vr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[vr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[fn] = Mr(i);
    const s = r || i.props && i.props.type === "number";
    cn(e, t ? "change" : "input", (o) => {
      o.target.composing || e[fn](hi(e.value, n, s));
    }), (n || s) && cn(e, "change", () => {
      e.value = hi(e.value, n, s);
    }), t || (cn(e, "compositionstart", tu), cn(e, "compositionend", js), cn(e, "change", js));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const i = t ?? "", s = e[vr];
    delete e[vr], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[fn](hi(e.value, n, r)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: s } }, o) {
    if (e[fn] = Mr(o), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Hr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const E = e.getRootNode();
    (E instanceof Document || E instanceof ShadowRoot) && E.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
  }
}, Qe = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, cn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? Hr(kr(c)) : kr(c)
      ), s = e.multiple, o = s ? mn(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        s,
        s ? Y(o) ? i.slice() : i : o
      ];
      try {
        e[fn](o);
      } finally {
        ko(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[fn] = Mr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    $s(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[fn] = Mr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !nu(t, n[1], n[0])) && $s(e, t);
  }
};
function nu(e, t, n) {
  if (!n || Y(e)) return Zt(e, t);
  if (mn(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function $s(e, t) {
  const n = e.multiple, r = Y(t);
  if (!(n && !r && !mn(t))) {
    for (let i = 0, s = e.options.length; i < s; i++) {
      const o = e.options[i], l = kr(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((E) => String(E) === String(l)) : o.selected = Xl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Zt(kr(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function kr(e) {
  return "_value" in e ? e._value : e.value;
}
const ru = ["ctrl", "shift", "alt", "meta"], iu = {
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
  exact: (e, t) => ru.some((n) => e[`${n}Key`] && !t.includes(n))
}, Er = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const l = iu[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...s);
  }));
}, su = /* @__PURE__ */ Ge({ patchProp: Zc }, kc);
let Vs;
function ou() {
  return Vs || (Vs = hc(su));
}
const lu = ((...e) => {
  const t = ou().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = cu(r);
    if (!i) return;
    const s = t._component;
    !ee(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, au(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function au(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cu(e) {
  return Se(e) ? document.querySelector(e) : e;
}
function uu(e, t, n) {
  const r = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(r))
    return window._nc_initial_state.get(r);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const i = document.querySelector(r);
  if (i === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const s = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(r, s), s;
  } catch (s) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: s }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: s });
  }
}
function Bs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function fu(e) {
  if (Array.isArray(e)) return e;
}
function du(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, s, o, l = [], c = !0, E = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(c = (r = s.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (m) {
      E = !0, i = m;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (E) throw i;
      }
    }
    return l;
  }
}
function pu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hu(e, t) {
  return fu(e) || du(e, t) || mu(e, t) || pu();
}
function mu(e, t) {
  if (e) {
    if (typeof e == "string") return Bs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bs(e, t) : void 0;
  }
}
const gl = Object.entries, zs = Object.setPrototypeOf, bu = Object.isFrozen, yu = Object.getPrototypeOf, gu = Object.getOwnPropertyDescriptor;
let ke = Object.freeze, Ue = Object.seal, Cn = Object.create, _l = typeof Reflect < "u" && Reflect, Ii = _l.apply, Mi = _l.construct;
ke || (ke = function(t) {
  return t;
});
Ue || (Ue = function(t) {
  return t;
});
Ii || (Ii = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
Mi || (Mi = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const an = Ne(Array.prototype.forEach), _u = Ne(Array.prototype.lastIndexOf), Ws = Ne(Array.prototype.pop), Hn = Ne(Array.prototype.push), vu = Ne(Array.prototype.splice), Nn = Array.isArray, Wn = Ne(String.prototype.toLowerCase), bi = Ne(String.prototype.toString), qs = Ne(String.prototype.match), jn = Ne(String.prototype.replace), Ks = Ne(String.prototype.indexOf), Eu = Ne(String.prototype.trim), Tu = Ne(Number.prototype.toString), Su = Ne(Boolean.prototype.toString), Gs = typeof BigInt > "u" ? null : Ne(BigInt.prototype.toString), Ys = typeof Symbol > "u" ? null : Ne(Symbol.prototype.toString), ut = Ne(Object.prototype.hasOwnProperty), $n = Ne(Object.prototype.toString), We = Ne(RegExp.prototype.test), on = xu(TypeError);
function Ne(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return Ii(e, t, r);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Mi(e, n);
  };
}
function le(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wn;
  if (zs && zs(e, null), !Nn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (bu(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Cu(e) {
  for (let t = 0; t < e.length; t++)
    ut(e, t) || (e[t] = null);
  return e;
}
function ht(e) {
  const t = Cn(null);
  for (const r of gl(e)) {
    var n = hu(r, 2);
    const i = n[0], s = n[1];
    ut(e, i) && (Nn(s) ? t[i] = Cu(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ht(s) : t[i] = s);
  }
  return t;
}
function Au(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Tu(e);
    case "boolean":
      return Su(e);
    case "bigint":
      return Gs ? Gs(e) : "0";
    case "symbol":
      return Ys ? Ys(e) : "Symbol()";
    case "undefined":
      return $n(e);
    case "function":
    case "object": {
      if (e === null)
        return $n(e);
      const t = e, n = gt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : $n(r);
      }
      return $n(e);
    }
    default:
      return $n(e);
  }
}
function gt(e, t) {
  for (; e !== null; ) {
    const r = gu(e, t);
    if (r) {
      if (r.get)
        return Ne(r.get);
      if (typeof r.value == "function")
        return Ne(r.value);
    }
    e = yu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function wu(e) {
  try {
    return We(e, ""), !0;
  } catch {
    return !1;
  }
}
const Xs = ke(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = ke(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = ke(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ru = ke(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = ke(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ou = ke(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Js = ke(["#text"]), Zs = ke(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = ke(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Qs = ke(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tr = ke(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Nu = Ue(/{{[\w\W]*|^[\w\W]*}}/g), Pu = Ue(/<%[\w\W]*|^[\w\W]*%>/g), Lu = Ue(/\${[\w\W]*/g), Iu = Ue(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = Ue(/^aria-[\-\w]+$/), eo = Ue(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ku = Ue(/^(?:\w+script|data):/i), Du = Ue(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Fu = Ue(/^html$/i), Uu = Ue(/^[a-z][.\w]*(-[.\w]+)+$/i), to = Ue(/<[/\w!]/g), no = Ue(/<[/\w]/g), Hu = Ue(/<\/no(script|embed|frames)/i), ju = Ue(/\/>/i), pt = {
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
}, vl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], $u = ke(le({}, vl)), Vu = (function() {
  const e = {};
  return an(vl, (t) => {
    e[t] = Ue(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), ke(e);
})(), Bu = function() {
  return typeof window > "u" ? null : window;
}, zu = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  n && n.hasAttribute(i) && (r = n.getAttribute(i));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, ro = function() {
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
}, Yt = function(t, n, r, i) {
  return ut(t, n) && Nn(t[n]) ? le(i.base ? ht(i.base) : {}, t[n], i.transform) : r;
}, Ei = function(t, n, r) {
  const i = ut(t, n) ? t[n] : void 0;
  return i && typeof i == "object" ? ht(i) : r();
};
function El() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Bu();
  const t = (M) => El(M);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== pt.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, E = e.NamedNodeMap;
  E === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const m = e.DOMParser, x = e.trustedTypes, N = l.prototype, V = gt(N, "cloneNode"), J = gt(N, "remove"), B = gt(N, "nextSibling"), Q = gt(N, "childNodes"), z = gt(N, "parentNode"), k = gt(N, "shadowRoot"), G = gt(N, "attributes"), U = o && o.prototype ? gt(o.prototype, "nodeType") : null, oe = o && o.prototype ? gt(o.prototype, "nodeName") : null, _e = o && o.prototype ? gt(o.prototype, "ownerDocument") : null, ve = function(a) {
    return U ? U(a) : a.nodeType;
  }, Ee = function(a) {
    return oe ? oe(a) : a.nodeName;
  };
  if (typeof s == "function") {
    const M = n.createElement("template");
    M.content && M.content.ownerDocument && (n = M.content.ownerDocument);
  }
  let be, xe = "", Ve, rt = !1, Be = 0;
  const ze = function() {
    if (Be > 0)
      throw on('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, it = function(a) {
    ze(), Be++;
    try {
      return be.createHTML(a);
    } finally {
      Be--;
    }
  }, ye = function(a) {
    ze(), Be++;
    try {
      return be.createScriptURL(a);
    } finally {
      Be--;
    }
  }, re = function() {
    return rt || (Ve = zu(x, i), rt = !0), Ve;
  }, ne = n, Pe = ne.implementation, Le = ne.createNodeIterator, Ye = ne.createDocumentFragment, Ie = ne.getElementsByTagName, st = r.importNode;
  let ae = ro();
  t.isSupported = typeof gl == "function" && typeof z == "function" && Pe && Pe.createHTMLDocument !== void 0;
  const De = Nu, ft = Pu, He = Lu, dt = Iu, St = Mu, Xe = ku, Je = Du, f = Uu;
  let h = eo, v = null;
  const R = le({}, [...Xs, ...yi, ...gi, ..._i, ...Js]);
  let S = null;
  const A = le({}, [...Zs, ...vi, ...Qs, ...Tr]);
  let I = Object.seal(Cn(null, {
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
  })), P = null, L = null;
  const C = Object.seal(Cn(null, {
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
  let W = !0, D = !0, w = !1, _ = !0, b = !1, d = !0, F = !1, te = !1, Z = null, we = null, Me = !1, Re = !1, ot = !1, Ce = !1, je = !0, Qt = !1;
  const Kt = "user-content-";
  let en = !0, tn = !1, xt = {}, Ct = null;
  const At = le({}, [
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
  let lr = null;
  const yn = le({}, ["audio", "video", "img", "source", "image", "track"]);
  let In = null;
  const Mn = le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ar = "http://www.w3.org/1998/Math/MathML", cr = "http://www.w3.org/2000/svg", wt = "http://www.w3.org/1999/xhtml";
  let gn = wt, Gr = !1, Yr = null;
  const Sl = le({}, [ar, cr, wt], bi), Ji = ke(["mi", "mo", "mn", "ms", "mtext"]);
  let Xr = le({}, Ji);
  const Zi = ke(["annotation-xml"]);
  let Jr = le({}, Zi);
  const xl = le({}, ["title", "style", "font", "a", "script"]);
  let kn = null;
  const Cl = ["application/xhtml+xml", "text/html"], Al = "text/html";
  let Ae = null, _n = null;
  const wl = n.createElement("form"), Qi = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (_n && _n === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = ht(a), kn = // eslint-disable-next-line unicorn/prefer-includes
    Cl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Al : a.PARSER_MEDIA_TYPE, Ae = kn === "application/xhtml+xml" ? bi : Wn, v = Yt(a, "ALLOWED_TAGS", R, {
      transform: Ae
    }), S = Yt(a, "ALLOWED_ATTR", A, {
      transform: Ae
    }), Yr = Yt(a, "ALLOWED_NAMESPACES", Sl, {
      transform: bi
    }), In = Yt(a, "ADD_URI_SAFE_ATTR", Mn, {
      transform: Ae,
      base: Mn
    }), lr = Yt(a, "ADD_DATA_URI_TAGS", yn, {
      transform: Ae,
      base: yn
    }), Ct = Yt(a, "FORBID_CONTENTS", At, {
      transform: Ae
    }), P = Yt(a, "FORBID_TAGS", ht({}), {
      transform: Ae
    }), L = Yt(a, "FORBID_ATTR", ht({}), {
      transform: Ae
    }), xt = ut(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? ht(a.USE_PROFILES) : a.USE_PROFILES : !1, W = a.ALLOW_ARIA_ATTR !== !1, D = a.ALLOW_DATA_ATTR !== !1, w = a.ALLOW_UNKNOWN_PROTOCOLS || !1, _ = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, b = a.SAFE_FOR_TEMPLATES || !1, d = a.SAFE_FOR_XML !== !1, F = a.WHOLE_DOCUMENT || !1, Re = a.RETURN_DOM || !1, ot = a.RETURN_DOM_FRAGMENT || !1, Ce = a.RETURN_TRUSTED_TYPE || !1, Me = a.FORCE_BODY || !1, je = a.SANITIZE_DOM !== !1, Qt = a.SANITIZE_NAMED_PROPS || !1, en = a.KEEP_CONTENT !== !1, tn = a.IN_PLACE || !1, h = wu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : eo, gn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : wt, Xr = Ei(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => le({}, Ji)
      // Default built-in map
    ), Jr = Ei(
      a,
      "HTML_INTEGRATION_POINTS",
      () => le({}, Zi)
      // Default built-in map
    );
    const g = Ei(a, "CUSTOM_ELEMENT_HANDLING", () => Cn(null));
    if (I = Cn(null), ut(g, "tagNameCheck") && Qi(g.tagNameCheck) && (I.tagNameCheck = g.tagNameCheck), ut(g, "attributeNameCheck") && Qi(g.attributeNameCheck) && (I.attributeNameCheck = g.attributeNameCheck), ut(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ue(I), b && (D = !1), ot && (Re = !0), xt && (v = le({}, Js), S = Cn(null), xt.html === !0 && (le(v, Xs), le(S, Zs)), xt.svg === !0 && (le(v, yi), le(S, vi), le(S, Tr)), xt.svgFilters === !0 && (le(v, gi), le(S, vi), le(S, Tr)), xt.mathMl === !0 && (le(v, _i), le(S, Qs), le(S, Tr))), C.tagCheck = null, C.attributeCheck = null, ut(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? C.tagCheck = a.ADD_TAGS : Nn(a.ADD_TAGS) && (v === R && (v = ht(v)), le(v, a.ADD_TAGS, Ae))), ut(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? C.attributeCheck = a.ADD_ATTR : Nn(a.ADD_ATTR) && (S === A && (S = ht(S)), le(S, a.ADD_ATTR, Ae))), ut(a, "ADD_FORBID_CONTENTS") && Nn(a.ADD_FORBID_CONTENTS) && (Ct === At && (Ct = ht(Ct)), le(Ct, a.ADD_FORBID_CONTENTS, Ae)), en && (v["#text"] = !0), F && le(v, ["html", "head", "body"]), v.table && (le(v, ["tbody"]), delete P.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw on('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw on('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const O = be;
      be = a.TRUSTED_TYPES_POLICY;
      try {
        xe = it("");
      } catch ($) {
        throw be = O, $;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (be = void 0, xe = "") : (be === void 0 && (be = re()), be && typeof xe == "string" && (xe = it("")));
    ke && ke(a), _n = a;
  }, es = le({}, [...yi, ...gi, ...Ru]), ts = le({}, [..._i, ...Ou]), Rl = function(a, g, O) {
    return g.namespaceURI === wt ? a === "svg" : g.namespaceURI === ar ? a === "svg" && (O === "annotation-xml" || Xr[O]) : !!es[a];
  }, Ol = function(a, g, O) {
    return g.namespaceURI === wt ? a === "math" : g.namespaceURI === cr ? a === "math" && Jr[O] : !!ts[a];
  }, Nl = function(a, g, O) {
    return g.namespaceURI === cr && !Jr[O] || g.namespaceURI === ar && !Xr[O] ? !1 : !ts[a] && (xl[a] || !es[a]);
  }, Pl = function(a) {
    let g = z(a);
    (!g || !g.tagName) && (g = {
      namespaceURI: gn,
      tagName: "template"
    });
    const O = Wn(a.tagName), $ = Wn(g.tagName);
    return Yr[a.namespaceURI] ? a.namespaceURI === cr ? Rl(O, g, $) : a.namespaceURI === ar ? Ol(O, g, $) : a.namespaceURI === wt ? Nl(O, g, $) : !!(kn === "application/xhtml+xml" && Yr[a.namespaceURI]) : !1;
  }, Gt = function(a) {
    Hn(t.removed, {
      element: a
    });
    try {
      z(a).removeChild(a);
    } catch {
      if (J(a), !z(a))
        throw on("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ns = function(a, g, O) {
    try {
      a.removeAttributeNode(g);
    } catch {
      try {
        a.removeAttribute(O);
      } catch {
      }
    }
  }, ur = function(a) {
    fr(a);
    const g = Q(a);
    if (g) {
      const $ = [];
      an(g, (q) => {
        Hn($, q);
      }), an($, (q) => {
        try {
          J(q);
        } catch {
        }
      });
    }
    const O = G(a);
    if (O)
      for (let $ = O.length - 1; $ >= 0; --$) {
        const q = O[$], X = q && q.name;
        typeof X == "string" && ns(a, q, X);
      }
  }, nn = function(a, g, O) {
    if (!O)
      try {
        O = g.getAttributeNode(a);
      } catch {
        O = null;
      }
    Hn(t.removed, {
      attribute: O || null,
      from: g
    });
    try {
      O ? g.removeAttributeNode(O) : g.removeAttribute(a);
    } catch {
      try {
        g.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (Re || ot)
        try {
          Gt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(a, "");
        } catch {
        }
  }, Ll = function(a) {
    const g = G(a);
    if (g)
      for (let O = g.length - 1; O >= 0; --O) {
        const $ = g[O], q = $ && $.name;
        typeof q != "string" || S[Ae(q)] || ns(a, $, q);
      }
  }, fr = function(a) {
    const g = [a];
    for (; g.length > 0; ) {
      const O = g.pop();
      ve(O) === pt.element && Ll(O);
      const q = Q(O);
      if (q)
        for (let X = q.length - 1; X >= 0; --X)
          g.push(q[X]);
    }
  }, rs = function(a, g) {
    return d ? a === "patchsrc" ? !0 : a === "for" && g !== "label" && g !== "output" : !1;
  }, Il = function(a) {
    if (!d)
      return;
    const g = [a];
    for (; g.length > 0; ) {
      const O = g.pop(), $ = ve(O);
      if ($ === pt.processingInstruction || $ === pt.comment && We(no, O.data)) {
        try {
          J(O);
        } catch {
        }
        continue;
      }
      if ($ === pt.element) {
        const X = O, he = Ae(Ee(O));
        try {
          X.hasAttribute && X.hasAttribute("patchsrc") && X.removeAttribute("patchsrc"), X.hasAttribute && X.hasAttribute("for") && rs("for", he) && X.removeAttribute("for");
        } catch {
        }
      }
      const q = Q(O);
      if (q)
        for (let X = q.length - 1; X >= 0; --X)
          g.push(q[X]);
    }
  }, is = function(a) {
    let g = null, O = null;
    if (Me)
      a = "<remove></remove>" + a;
    else {
      const X = qs(a, /^[\r\n\t ]+/);
      O = X && X[0];
    }
    kn === "application/xhtml+xml" && gn === wt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const $ = be ? it(a) : a;
    if (gn === wt)
      try {
        g = new m().parseFromString($, kn);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Pe.createDocument(gn, "template", null);
      try {
        g.documentElement.innerHTML = Gr ? xe : $;
      } catch {
      }
    }
    const q = g.body || g.documentElement;
    return a && O && q.insertBefore(n.createTextNode(O), q.childNodes[0] || null), gn === wt ? Ie.call(g, F ? "html" : "body")[0] : F ? g.documentElement : q;
  }, ss = function(a) {
    const g = _e ? _e(a) : a.ownerDocument;
    return Le.call(
      g || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, dr = function(a) {
    return a = jn(a, De, " "), a = jn(a, ft, " "), a = jn(a, He, " "), a;
  }, Qr = function(a) {
    var g;
    a.normalize();
    const O = _e ? _e(a) : a.ownerDocument, $ = Le.call(
      O || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let q = $.nextNode();
    for (; q; )
      q.data = dr(q.data), q = $.nextNode();
    const X = (g = a.querySelectorAll) === null || g === void 0 ? void 0 : g.call(a, "template");
    X && an(X, (he) => {
      vn(he.content) && Qr(he.content);
    });
  }, pr = function(a) {
    const g = oe ? oe(a) : null;
    return typeof g != "string" || Ae(g) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== G(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== U(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== Q(a);
  }, vn = function(a) {
    if (!U || typeof a != "object" || a === null)
      return !1;
    try {
      return U(a) === pt.documentFragment;
    } catch {
      return !1;
    }
  }, Dn = function(a) {
    if (!U || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof U(a) == "number";
    } catch {
      return !1;
    }
  };
  function Rt(M, a, g) {
    M.length !== 0 && an(M, (O) => {
      O.call(t, a, g, _n);
    });
  }
  const Ml = function(a, g) {
    return !!(d && a.hasChildNodes() && !Dn(a.firstElementChild) && We(to, a.textContent) && We(to, a.innerHTML) || d && a.namespaceURI === wt && $u[g] && (Dn(a.firstElementChild) || typeof a.textContent == "string" && We(Vu[g], a.textContent)) || a.nodeType === pt.processingInstruction || d && a.nodeType === pt.comment && We(no, a.data));
  }, hr = function(a, g) {
    if (a instanceof RegExp)
      return We(a, g);
    if (a instanceof Function) {
      for (var O = arguments.length, $ = new Array(O > 2 ? O - 2 : 0), q = 2; q < O; q++)
        $[q - 2] = arguments[q];
      return !!a(g, ...$);
    }
    return !1;
  }, kl = function(a, g, O) {
    if (!P[g] && us(g) && hr(I.tagNameCheck, g))
      return !1;
    if (en && !Ct[g]) {
      const $ = z(a), q = Q(a);
      if (q && $) {
        const X = q.length;
        for (let he = X - 1; he >= 0; --he) {
          const ge = a === O ? V(q[he], !0) : q[he];
          $.insertBefore(ge, B(a));
        }
      }
    }
    return Gt(a), !0;
  }, os = function(a, g, O, $) {
    return a.length === 0 ? g : g === O || g === $ ? ht(g) : g;
  }, ls = function(a, g) {
    return a === g || z(a) !== null ? !1 : (tn && fr(a), !0);
  }, as = function(a, g) {
    if (Rt(ae.beforeSanitizeElements, a, null), ls(a, g))
      return !0;
    if (pr(a))
      return Gt(a), !0;
    const O = Ae(Ee(a));
    if (v = os(ae.uponSanitizeElement, v, R, Z), Rt(ae.uponSanitizeElement, a, {
      tagName: O,
      allowedTags: v
    }), ls(a, g))
      return !0;
    if (Ml(a, O))
      return Gt(a), !0;
    if (P[O] || !(C.tagCheck instanceof Function && C.tagCheck(O)) && !v[O]) {
      const q = kl(a, O, g);
      return q === !1 && Rt(ae.afterSanitizeElements, a, null), q;
    }
    if (ve(a) === pt.element && !Pl(a) || (O === "noscript" || O === "noembed" || O === "noframes") && We(Hu, a.innerHTML))
      return Gt(a), !0;
    if (b && a.nodeType === pt.text) {
      const q = dr(a.textContent);
      a.textContent !== q && (Hn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = q);
    }
    return Rt(ae.afterSanitizeElements, a, null), !1;
  }, cs = function(a, g, O) {
    if (L[g] || rs(g, a) || je && (g === "id" || g === "name") && (O in n || O in wl))
      return !1;
    const $ = S[g] || C.attributeCheck instanceof Function && C.attributeCheck(g, a);
    return D && We(dt, g) || W && We(St, g) ? !0 : $ ? In[g] || We(h, jn(O, Je, "")) || (g === "src" || g === "xlink:href" || g === "href") && a !== "script" && Ks(O, "data:") === 0 && lr[a] || w && !We(Xe, jn(O, Je, "")) ? !0 : !O : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      us(a) && hr(I.tagNameCheck, a) && hr(I.attributeNameCheck, g, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && I.allowCustomizedBuiltInElements && hr(I.tagNameCheck, O)
    );
  }, Dl = le({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), us = function(a) {
    return !Dl[Wn(a)] && We(f, a);
  }, Fl = function(a, g, O, $) {
    if (be && typeof x == "object" && typeof x.getAttributeType == "function" && !O)
      switch (x.getAttributeType(a, g)) {
        case "TrustedHTML":
          return it($);
        case "TrustedScriptURL":
          return ye($);
      }
    return $;
  }, Ul = function(a, g, O, $) {
    try {
      O ? a.setAttributeNS(O, g, $) : a.setAttribute(g, $), pr(a) ? Gt(a) : Ws(t.removed);
    } catch {
      nn(g, a);
    }
  }, fs = function(a) {
    Rt(ae.beforeSanitizeAttributes, a, null);
    const g = a.attributes;
    if (!g || pr(a))
      return;
    S = os(ae.uponSanitizeAttribute, S, A, we);
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: S,
      forceKeepAttr: void 0
    };
    let $ = g.length;
    const q = Ae(a.nodeName);
    for (; $--; ) {
      const X = g[$], he = X.name, ge = X.namespaceURI, lt = X.value, at = Ae(he), ti = lt;
      let Ze = he === "value" ? ti : Eu(ti);
      if (O.attrName = at, O.attrValue = Ze, O.keepAttr = !0, O.forceKeepAttr = void 0, Rt(ae.uponSanitizeAttribute, a, O), Ze = O.attrValue, Qt && (at === "id" || at === "name") && Ks(Ze, Kt) !== 0 && (nn(he, a, X), Ze = Kt + Ze), d && We(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ze)) {
        nn(he, a, X);
        continue;
      }
      if (at === "attributename" && qs(Ze, "href")) {
        nn(he, a, X);
        continue;
      }
      if (!O.forceKeepAttr) {
        if (!O.keepAttr) {
          nn(he, a, X);
          continue;
        }
        if (!_ && We(ju, Ze)) {
          nn(he, a, X);
          continue;
        }
        if (b && (Ze = dr(Ze)), !cs(q, at, Ze)) {
          nn(he, a, X);
          continue;
        }
        Ze = Fl(q, at, ge, Ze), Ze !== ti && Ul(a, he, ge, Ze);
      }
    }
    Rt(ae.afterSanitizeAttributes, a, null);
  }, mr = function(a) {
    let g = null;
    const O = ss(a);
    for (Rt(ae.beforeSanitizeShadowDOM, a, null); g = O.nextNode(); )
      if (Rt(ae.uponSanitizeShadowNode, g, null), as(g, a), fs(g), vn(g.content) && mr(g.content), ve(g) === pt.element) {
        const $ = k(g);
        vn($) && (ei($), mr($));
      }
    Rt(ae.afterSanitizeShadowDOM, a, null);
  }, ei = function(a) {
    const g = [{
      node: a,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const O = g.pop();
      if (O.shadow) {
        mr(O.shadow);
        continue;
      }
      const $ = O.node, X = ve($) === pt.element, he = Q($);
      if (he)
        for (let ge = he.length - 1; ge >= 0; --ge)
          g.push({
            node: he[ge],
            shadow: null
          });
      if (X) {
        const ge = oe ? oe($) : null;
        if (typeof ge == "string" && Ae(ge) === "template") {
          const lt = $.content;
          vn(lt) && g.push({
            node: lt,
            shadow: null
          });
        }
      }
      if (X) {
        const ge = k($);
        vn(ge) && g.push({
          node: null,
          shadow: ge
        }, {
          node: ge,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(M) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, O = null, $ = null, q = null;
    if (Gr = !M, Gr && (M = "<!-->"), typeof M != "string" && !Dn(M) && (M = Au(M), typeof M != "string"))
      throw on("dirty is not a string, aborting");
    if (!t.isSupported)
      return M;
    te ? (v = Z, S = we) : Zr(a), (ae.uponSanitizeElement.length > 0 || ae.uponSanitizeAttribute.length > 0) && (v = ht(v)), ae.uponSanitizeAttribute.length > 0 && (S = ht(S)), t.removed = [];
    const X = tn && typeof M != "string" && Dn(M);
    if (X) {
      Il(M);
      const lt = Ee(M);
      if (typeof lt == "string") {
        const at = Ae(lt);
        if (!v[at] || P[at])
          throw ur(M), on("root node is forbidden and cannot be sanitized in-place");
      }
      if (pr(M))
        throw ur(M), on("root node is clobbered and cannot be sanitized in-place");
      try {
        ei(M);
      } catch (at) {
        throw ur(M), at;
      }
    } else if (Dn(M))
      g = is("<!---->"), O = g.ownerDocument.importNode(M, !0), O.nodeType === pt.element && O.nodeName === "BODY" || O.nodeName === "HTML" ? g = O : g.appendChild(O), ei(O);
    else {
      if (!Re && !b && !F && // eslint-disable-next-line unicorn/prefer-includes
      M.indexOf("<") === -1)
        return be && Ce ? it(M) : M;
      if (g = is(M), !g)
        return Re ? null : Ce ? xe : "";
    }
    g && Me && Gt(g.firstChild);
    const he = X ? M : g;
    try {
      const lt = ss(he);
      for (; $ = lt.nextNode(); )
        as($, he), fs($), vn($.content) && mr($.content);
    } catch (lt) {
      throw X && (ur(M), an(t.removed, (at) => {
        at.element && fr(at.element);
      })), lt;
    }
    if (X)
      return an(t.removed, (lt) => {
        lt.element && fr(lt.element);
      }), b && Qr(M), M;
    if (Re) {
      if (b && Qr(g), ot)
        for (q = Ye.call(g.ownerDocument); g.firstChild; )
          q.appendChild(g.firstChild);
      else
        q = g;
      return (S.shadowroot || S.shadowrootmode) && (q = st.call(r, q, !0)), q;
    }
    let ge = F ? g.outerHTML : g.innerHTML;
    return F && v["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && We(Fu, g.ownerDocument.doctype.name) && (ge = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + ge), b && (ge = dr(ge)), be && Ce ? it(ge) : ge;
  }, t.setConfig = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zr(M), te = !0, Z = v, we = S;
  }, t.clearConfig = function() {
    _n = null, te = !1, Z = null, we = null, be = Ve, xe = "";
  }, t.isValidAttribute = function(M, a, g) {
    _n || Zr({});
    const O = Ae(M), $ = Ae(a);
    return cs(O, $, g);
  }, t.addHook = function(M, a) {
    typeof a == "function" && ut(ae, M) && Hn(ae[M], a);
  }, t.removeHook = function(M, a) {
    if (ut(ae, M)) {
      if (a !== void 0) {
        const g = _u(ae[M], a);
        return g === -1 ? void 0 : vu(ae[M], g, 1)[0];
      }
      return Ws(ae[M]);
    }
  }, t.removeHooks = function(M) {
    ut(ae, M) && (ae[M] = []);
  }, t.removeAllHooks = function() {
    ae = ro();
  }, t;
}
var Wu = El();
function qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ti, io;
function Ku() {
  if (io) return Ti;
  io = 1;
  var e = /["'&<>]/;
  Ti = t;
  function t(n) {
    var r = "" + n, i = e.exec(r);
    if (!i)
      return r;
    var s, o = "", l = 0, c = 0;
    for (l = i.index; l < r.length; l++) {
      switch (r.charCodeAt(l)) {
        case 34:
          s = "&quot;";
          break;
        case 38:
          s = "&amp;";
          break;
        case 39:
          s = "&#39;";
          break;
        case 60:
          s = "&lt;";
          break;
        case 62:
          s = "&gt;";
          break;
        default:
          continue;
      }
      c !== l && (o += r.substring(c, l)), c = l + 1, o += s;
    }
    return c !== l ? o + r.substring(c, l) : o;
  }
  return Ti;
}
var Gu = Ku();
const so = /* @__PURE__ */ qu(Gu);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Yu(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function u(e, t, n, r, i) {
  const s = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof r == "object" ? r : {}
  }, c = (B) => B, E = (l.sanitize ? Wu.sanitize : c) || c, m = l.escape ? so : c, x = (B) => typeof B == "string" || typeof B == "number", N = (B, Q, z) => B.replace(/%n/g, "" + z).replace(/{([^{}]*)}/g, (k, G) => {
    if (Q === void 0 || !(G in Q))
      return m(k);
    const U = Q[G];
    return x(U) ? m(`${U}`) : typeof U == "object" && x(U.value) ? (U.escape !== !1 ? so : c)(`${U.value}`) : m(k);
  });
  let J = (i?.bundle ?? Yu(e)).translations[t] || t;
  return J = Array.isArray(J) ? J[0] : J, E(typeof s == "object" || o !== void 0 ? N(
    J,
    s,
    o
  ) : J);
}
const Xu = { class: "library-vue-catalogue" }, Ju = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Zu = { class: "library-catalogue-header" }, Qu = { id: "library-catalogue-heading" }, ef = { class: "library-muted" }, tf = ["aria-label"], nf = ["href"], rf = ["href"], sf = ["href"], of = ["href"], lf = ["aria-label"], af = ["name", "value"], cf = { class: "library-quick-filter-search" }, uf = { value: "title" }, ff = { value: "recent" }, df = { value: "publicationDate" }, pf = { value: "publication" }, hf = { value: "lastOpened" }, mf = { value: "format" }, bf = { value: "" }, yf = { value: "1" }, gf = ["value"], _f = ["value"], vf = ["aria-label"], Ef = ["aria-label"], Tf = { class: "library-filter-panel" }, Sf = { class: "library-filter-panel-summary" }, xf = ["aria-label"], Cf = { value: "" }, Af = ["value"], wf = { value: "" }, Rf = ["value"], Of = { value: "" }, Nf = ["value"], Pf = { value: "" }, Lf = ["value"], If = { value: "" }, Mf = ["value"], kf = { value: "" }, Df = ["value"], Ff = { value: "" }, Uf = ["value"], Hf = { value: "" }, jf = ["value"], $f = { value: "" }, Vf = ["value"], Bf = { value: "" }, zf = ["value"], Wf = { value: "" }, qf = { value: "1" }, Kf = { value: "" }, Gf = { value: "1" }, Yf = { value: "title" }, Xf = { value: "recent" }, Jf = { value: "publicationDate" }, Zf = { value: "publication" }, Qf = { value: "lastOpened" }, ed = { value: "format" }, td = ["value"], nd = ["value"], rd = ["aria-label"], id = ["aria-label"], sd = ["href"], od = {
  key: 0,
  class: "library-discovery-header",
  "aria-labelledby": "library-publication-discovery-heading"
}, ld = { class: "library-muted" }, ad = { id: "library-publication-discovery-heading" }, cd = { class: "library-muted" }, ud = {
  href: "/apps/library/",
  class: "button secondary"
}, fd = { class: "library-muted library-filter-result-summary" }, dd = { key: 0 }, pd = { href: "?" }, hd = { class: "library-batch-actions" }, md = { class: "library-settings-count-badge" }, bd = ["action"], yd = ["value"], gd = ["name", "value"], _d = ["placeholder"], vd = {
  type: "submit",
  class: "button primary"
}, Ed = { class: "library-muted" }, Td = ["action"], Sd = ["value"], xd = ["name", "value"], Cd = ["placeholder"], Ad = {
  type: "submit",
  class: "button secondary"
}, wd = { class: "library-muted" }, Rd = ["action"], Od = ["value"], Nd = ["name", "value"], Pd = {
  type: "submit",
  class: "button secondary"
}, Ld = { class: "library-muted" }, Id = ["action"], Md = ["value"], kd = ["name", "value"], Dd = { name: "bulkEditField" }, Fd = { value: "publicationType" }, Ud = { value: "subtitle" }, Hd = { value: "creators" }, jd = { value: "publication" }, $d = { value: "publicationDate" }, Vd = { value: "language" }, Bd = { value: "publisher" }, zd = { value: "genres" }, Wd = { value: "classifications" }, qd = {
  type: "submit",
  class: "button secondary"
}, Kd = { class: "library-muted" }, Gd = ["action"], Yd = ["value"], Xd = ["name", "value"], Jd = {
  type: "submit",
  class: "button secondary"
}, Zd = { class: "library-muted" }, Qd = ["aria-label"], ep = ["href", "aria-label"], tp = ["aria-label"], np = { class: "library-pagination-range" }, rp = { key: 0 }, ip = ["href"], sp = {
  key: 1,
  class: "library-muted"
}, op = ["href"], lp = {
  key: 3,
  class: "library-muted"
}, ap = {
  key: 2,
  class: "library-periodical-groups"
}, cp = { class: "library-periodical-groups-summary" }, up = { id: "library-periodical-groups-heading" }, fp = { class: "library-muted" }, dp = ["href"], pp = { class: "library-muted" }, hp = {
  key: 3,
  class: "library-periodical-groups library-periodical-groups-empty"
}, mp = { class: "library-periodical-groups-summary" }, bp = { id: "library-periodical-groups-empty-heading" }, yp = { class: "library-muted" }, gp = { class: "library-muted" }, _p = { class: "library-empty-actions" }, vp = ["href"], Ep = { class: "library-muted" }, Tp = { class: "library-muted" }, Sp = { class: "library-empty-actions" }, xp = ["href"], Cp = { class: "library-muted" }, Ap = { class: "library-empty-actions" }, wp = ["href"], Rp = {
  href: "?",
  class: "button primary"
}, Op = { class: "library-muted" }, Np = { class: "library-empty-actions" }, Pp = ["href"], Lp = {
  key: 5,
  class: "library-cover-gallery"
}, Ip = ["href", "aria-label"], Mp = ["src", "alt"], kp = ["action", "onSubmit"], Dp = ["value"], Fp = ["value"], Up = ["aria-pressed", "title", "aria-label", "onClick"], Hp = { class: "library-cover-summary" }, jp = { class: "library-cover-primary" }, $p = ["aria-label"], Vp = ["href"], Bp = ["onToggle"], zp = ["aria-label"], Wp = { class: "library-cover-meta" }, qp = {
  key: 0,
  class: "library-creator"
}, Kp = { class: "library-cover-detail-list" }, Gp = { class: "library-cover-detail-chip" }, Yp = {
  key: 0,
  class: "library-cover-detail-chip"
}, Xp = {
  key: 1,
  class: "library-cover-detail-chip"
}, Jp = {
  key: 2,
  class: "library-cover-detail-chip"
}, Zp = {
  key: 3,
  class: "library-cover-detail-chip"
}, Qp = {
  key: 4,
  class: "library-cover-detail-chip"
}, eh = {
  key: 5,
  class: "library-cover-detail-chip"
}, th = {
  key: 6,
  class: "library-cover-detail-chip"
}, nh = {
  key: 1,
  class: "library-muted library-cover-description"
}, rh = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, ih = { key: 0 }, sh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, oh = {
  key: 0,
  class: "library-muted"
}, lh = { class: "library-cover-actions" }, ah = ["href"], ch = ["href"], uh = ["href"], fh = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], i = /* @__PURE__ */ un({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), s = /* @__PURE__ */ un((i.items || []).map((_) => ({ ..._ }))), o = ie(() => s), l = ie(() => i.shelves || []), c = ie(() => i.formats || []), E = ie(() => i.publications || []), m = ie(() => i.publicationSummaries || []), x = ie(() => i.publicationYears || []), N = ie(() => i.creators || []), V = ie(() => i.scanStatuses || []), J = ie(() => i.workflowStatuses || []), B = ie(() => i.genres || []), Q = ie(() => i.classifications || []), z = ie(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), k = /* @__PURE__ */ un({
      q: i.activeFilters?.q || "",
      type: i.activeFilters?.type || "",
      publication: i.activeFilters?.publication || "",
      year: i.activeFilters?.year || "",
      creator: i.activeFilters?.creator || "",
      format: i.activeFilters?.format || "",
      tag: i.activeFilters?.tag || "",
      shelf: i.activeFilters?.shelf || "",
      status: i.activeFilters?.status || "",
      workflowStatus: i.activeFilters?.workflowStatus || "",
      genre: i.activeFilters?.genre || "",
      classification: i.activeFilters?.classification || "",
      scannerConflicts: i.activeFilters?.scannerConflicts || "",
      starred: i.activeFilters?.starred || "",
      sort: i.activeFilters?.sort || "title"
    }), G = ie(() => i.settingsUrl || ""), U = ie(() => i.requestToken || ""), oe = ie(() => i.metadataExportUrl || ""), _e = ie(() => i.metadataSidecarManifestUrl || ""), ve = ie(() => i.metadataSidecarBundleUrl || ""), Ee = ie(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), be = ie(() => i.batchTagUrl || "/apps/library/bulk/tags"), xe = ie(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Ve = ie(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), rt = ie(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Be = ie(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ze = ie(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), it = ie(() => i.discoveryPage === "publication"), ye = ie(() => i.discoveryTitle || k.publication || ""), re = ie(() => Number(i.rootCount || 0)), ne = ie(() => Number(i.enabledRootCount || 0)), Pe = ie(() => re.value === 0), Le = ie(() => re.value > 0 && ne.value === 0), Ye = ie(() => st.value.length > 0), Ie = {
      q: "Search",
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
      starred: "Starred"
    }, st = ie(() => Object.entries(Ie).map(([_, b]) => ({ key: _, label: b, value: k[_] || "" })).filter((_) => String(_.value).trim() !== "")), ae = ie(() => Object.entries(k).filter(([_, b]) => !["q", "sort", "starred"].includes(_) && String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), De = ie(() => Object.entries(k).filter(([_, b]) => String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), ft = /* @__PURE__ */ un({}), He = /* @__PURE__ */ ga(null);
    let dt = null;
    function St(_) {
      const b = new URLSearchParams(new FormData(_));
      for (const d of Array.from(b.keys()))
        String(b.get(d) || "").trim() === "" && b.delete(d);
      return b.delete("page"), b;
    }
    function Xe(_) {
      s.splice(0, s.length, ...(_.items || []).map((b) => ({ ...b })));
      for (const b of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "creators", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(_, b) && (i[b] = _[b]);
      Object.assign(k, _.activeFilters || {});
    }
    async function Je(_) {
      const b = _?.currentTarget?.tagName === "FORM" ? _.currentTarget : _?.currentTarget?.form;
      if (!b) return;
      const F = St(b).toString(), te = F ? `?${F}` : "", Z = await fetch(Ee.value + te, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!Z.ok) {
        b.submit();
        return;
      }
      Xe(await Z.json()), history.replaceState({}, "", F ? `?${F}` : window.location.pathname);
    }
    function f(_) {
      Je(_);
    }
    function h(_) {
      window.clearTimeout(dt), dt = window.setTimeout(() => f(_), 350);
    }
    function v(_) {
      const b = new URLSearchParams();
      for (const [F, te] of Object.entries(k)) {
        const Z = String(te || "").trim();
        Z !== "" && F !== _ && !(F === "sort" && Z === "title") && b.set(F, Z);
      }
      const d = b.toString();
      return d ? `?${d}` : "?";
    }
    function R() {
      return v("q");
    }
    function S(_) {
      return String(_ || "").toUpperCase();
    }
    function A(_) {
      return _.nextcloudTags || [];
    }
    function I(_) {
      return m.value.find((d) => d.publication === _)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(_)}`;
    }
    function P(_, b) {
      ft[_] = !!b?.currentTarget?.open;
    }
    function L(_) {
      const b = String(_?.tagName || "").toLowerCase();
      return _?.isContentEditable || ["input", "select", "textarea", "button"].includes(b);
    }
    function C(_) {
      _.key !== "/" || _.metaKey || _.ctrlKey || _.altKey || _.shiftKey || L(_.target) || (_.preventDefault(), He.value?.focus(), He.value?.select?.());
    }
    function W(_) {
      _.key !== "Escape" || document.activeElement !== He.value || k.q === "" || (_.preventDefault(), k.q = "", He.value.value = "", window.clearTimeout(dt), f({ currentTarget: He.value }));
    }
    function D(_) {
      C(_), W(_);
    }
    Wo(() => {
      window.addEventListener("keydown", D);
    }), qo(() => {
      window.removeEventListener("keydown", D);
    });
    async function w(_, b) {
      const d = b?.currentTarget?.closest?.("form") || b?.currentTarget;
      if (!d || !_?.starUrl) return;
      const F = !!_.starred;
      _.starred = !F;
      try {
        (await fetch(_.starUrl, {
          method: "POST",
          body: new FormData(d),
          credentials: "same-origin"
        })).ok || (_.starred = F);
      } catch {
        _.starred = F;
      }
    }
    return (_, b) => (H(), j("div", Xu, [
      p("section", Ju, [
        p("div", Zu, [
          p("div", null, [
            p("h2", Qu, y(T(u)("library", "Publication catalogue")), 1),
            p("p", ef, y(T(u)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          p("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": T(u)("library", "Library actions")
          }, [
            p("a", {
              href: G.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, y(T(u)("library", "Settings")), 9, nf),
            oe.value ? (H(), j("a", {
              key: 0,
              href: oe.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, y(T(u)("library", "Export corrected metadata")), 9, rf)) : Oe("", !0),
            _e.value ? (H(), j("a", {
              key: 1,
              href: _e.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, y(T(u)("library", "Sidecar manifest")), 9, sf)) : Oe("", !0),
            ve.value ? (H(), j("a", {
              key: 2,
              href: ve.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, y(T(u)("library", "Sidecar ZIP")), 9, of)) : Oe("", !0)
          ], 8, tf)
        ]),
        p("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": T(u)("library", "Quick catalogue filters"),
          onSubmit: Er(Je, ["prevent"])
        }, [
          (H(!0), j(se, null, Te(ae.value, (d) => (H(), j("input", {
            key: d.key,
            type: "hidden",
            name: d.key,
            value: d.value
          }, null, 8, af))), 128)),
          p("label", cf, [
            ce(y(T(u)("library", "Search")) + " ", 1),
            b[18] || (b[18] = p("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            Fe(p("input", {
              ref_key: "quickSearchInput",
              ref: He,
              "onUpdate:modelValue": b[0] || (b[0] = (d) => k.q = d),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: h
            }, null, 544), [
              [mi, k.q]
            ])
          ]),
          p("label", null, [
            ce(y(T(u)("library", "Sort")) + " ", 1),
            Fe(p("select", {
              "onUpdate:modelValue": b[1] || (b[1] = (d) => k.sort = d),
              name: "sort",
              onChange: Je
            }, [
              p("option", uf, y(T(u)("library", "Title")), 1),
              p("option", ff, y(T(u)("library", "Recently added")), 1),
              p("option", df, y(T(u)("library", "Publication date")), 1),
              p("option", pf, y(T(u)("library", "Series")), 1),
              p("option", hf, y(T(u)("library", "Recently opened")), 1),
              p("option", mf, y(T(u)("library", "Format")), 1)
            ], 544), [
              [Qe, k.sort]
            ])
          ]),
          p("label", null, [
            ce(y(T(u)("library", "Starred")) + " ", 1),
            Fe(p("select", {
              "onUpdate:modelValue": b[2] || (b[2] = (d) => k.starred = d),
              name: "starred",
              onChange: Je
            }, [
              p("option", bf, y(T(u)("library", "All")), 1),
              p("option", yf, y(T(u)("library", "Starred")), 1)
            ], 544), [
              [Qe, k.starred]
            ])
          ]),
          p("label", null, [
            ce(y(T(u)("library", "Size")) + " ", 1),
            p("select", {
              value: z.value.limit,
              name: "limit",
              onChange: Je
            }, [
              (H(), j(se, null, Te(r, (d) => p("option", {
                key: d,
                value: d
              }, y(d), 9, _f)), 64))
            ], 40, gf)
          ]),
          p("button", {
            type: "submit",
            class: "button primary",
            "aria-label": T(u)("library", "Apply catalogue filters")
          }, y(T(u)("library", "Apply filters")), 9, vf),
          p("a", {
            href: "?",
            class: "button secondary",
            "aria-label": T(u)("library", "Clear catalogue filters")
          }, y(T(u)("library", "Clear all")), 9, Ef)
        ], 40, lf),
        p("details", Tf, [
          p("summary", Sf, y(T(u)("library", "Show catalogue filters")), 1),
          p("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": T(u)("library", "Catalogue search and filters"),
            onSubmit: Er(Je, ["prevent"])
          }, [
            p("label", null, [
              ce(y(T(u)("library", "Search title / author")) + " ", 1),
              Fe(p("input", {
                "onUpdate:modelValue": b[3] || (b[3] = (d) => k.q = d),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, k.q]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Type")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[4] || (b[4] = (d) => k.type = d),
                name: "type"
              }, [
                p("option", Cf, y(T(u)("library", "All types")), 1),
                (H(), j(se, null, Te(n, (d) => p("option", {
                  key: d,
                  value: d
                }, y(d), 9, Af)), 64))
              ], 512), [
                [Qe, k.type]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Series / periodical")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[5] || (b[5] = (d) => k.publication = d),
                name: "publication"
              }, [
                p("option", wf, y(T(u)("library", "All series and periodicals")), 1),
                (H(!0), j(se, null, Te(E.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, y(d), 9, Rf))), 128))
              ], 512), [
                [Qe, k.publication]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Publication year")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[6] || (b[6] = (d) => k.year = d),
                name: "year"
              }, [
                p("option", Of, y(T(u)("library", "All years")), 1),
                (H(!0), j(se, null, Te(x.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, y(d), 9, Nf))), 128))
              ], 512), [
                [Qe, k.year]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Creator")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[7] || (b[7] = (d) => k.creator = d),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                p("option", Pf, y(T(u)("library", "All creators")), 1),
                (H(!0), j(se, null, Te(N.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, y(d), 9, Lf))), 128))
              ], 512), [
                [Qe, k.creator]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Nextcloud tag")) + " ", 1),
              Fe(p("input", {
                "onUpdate:modelValue": b[8] || (b[8] = (d) => k.tag = d),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, k.tag]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Format")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[9] || (b[9] = (d) => k.format = d),
                name: "format"
              }, [
                p("option", If, y(T(u)("library", "All formats")), 1),
                (H(!0), j(se, null, Te(c.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, y(S(d)), 9, Mf))), 128))
              ], 512), [
                [Qe, k.format]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Shelf")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[10] || (b[10] = (d) => k.shelf = d),
                name: "shelf"
              }, [
                p("option", kf, y(T(u)("library", "All shelves")), 1),
                (H(!0), j(se, null, Te(l.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, y(d), 9, Df))), 128))
              ], 512), [
                [Qe, k.shelf]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Scan status")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[11] || (b[11] = (d) => k.status = d),
                name: "status"
              }, [
                p("option", Ff, y(T(u)("library", "All scan statuses")), 1),
                (H(!0), j(se, null, Te(V.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, y(d), 9, Uf))), 128))
              ], 512), [
                [Qe, k.status]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Workflow status")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[12] || (b[12] = (d) => k.workflowStatus = d),
                name: "workflowStatus"
              }, [
                p("option", Hf, y(T(u)("library", "All workflow statuses")), 1),
                (H(!0), j(se, null, Te(J.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, y(d), 9, jf))), 128))
              ], 512), [
                [Qe, k.workflowStatus]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Genre")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[13] || (b[13] = (d) => k.genre = d),
                name: "genre"
              }, [
                p("option", $f, y(T(u)("library", "All genres")), 1),
                (H(!0), j(se, null, Te(B.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, y(d), 9, Vf))), 128))
              ], 512), [
                [Qe, k.genre]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Classification")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[14] || (b[14] = (d) => k.classification = d),
                name: "classification"
              }, [
                p("option", Bf, y(T(u)("library", "All classifications")), 1),
                (H(!0), j(se, null, Te(Q.value, (d) => (H(), j("option", {
                  key: d,
                  value: d
                }, y(d), 9, zf))), 128))
              ], 512), [
                [Qe, k.classification]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Scanner conflicts")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[15] || (b[15] = (d) => k.scannerConflicts = d),
                name: "scannerConflicts"
              }, [
                p("option", Wf, y(T(u)("library", "All metadata")), 1),
                p("option", qf, y(T(u)("library", "Needs review")), 1)
              ], 512), [
                [Qe, k.scannerConflicts]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Starred")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[16] || (b[16] = (d) => k.starred = d),
                name: "starred"
              }, [
                p("option", Kf, y(T(u)("library", "All publications")), 1),
                p("option", Gf, y(T(u)("library", "Starred only")), 1)
              ], 512), [
                [Qe, k.starred]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Sort")) + " ", 1),
              Fe(p("select", {
                "onUpdate:modelValue": b[17] || (b[17] = (d) => k.sort = d),
                name: "sort"
              }, [
                p("option", Yf, y(T(u)("library", "Title")), 1),
                p("option", Xf, y(T(u)("library", "Recently added")), 1),
                p("option", Jf, y(T(u)("library", "Publication date")), 1),
                p("option", Zf, y(T(u)("library", "Series / periodical")), 1),
                p("option", Qf, y(T(u)("library", "Recently opened")), 1),
                p("option", ed, y(T(u)("library", "Format")), 1)
              ], 512), [
                [Qe, k.sort]
              ])
            ]),
            p("label", null, [
              ce(y(T(u)("library", "Page size")) + " ", 1),
              p("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (H(), j(se, null, Te(r, (d) => p("option", {
                  key: d,
                  value: d
                }, y(d), 9, nd)), 64))
              ], 8, td)
            ]),
            p("button", {
              type: "submit",
              class: "button primary",
              "aria-label": T(u)("library", "Apply catalogue filters")
            }, y(T(u)("library", "Apply filters")), 9, rd),
            p("a", {
              href: "?",
              class: "button secondary",
              "aria-label": T(u)("library", "Clear catalogue filters")
            }, y(T(u)("library", "Clear")), 9, id),
            p("a", {
              href: ze.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, y(T(u)("library", "Review scanner conflicts")), 9, sd)
          ], 40, xf)
        ]),
        it.value ? (H(), j("section", od, [
          p("p", ld, y(T(u)("library", "Publication / series")), 1),
          p("h3", ad, y(ye.value), 1),
          p("p", cd, y(z.value.total) + " " + y(T(u)("library", "items in this publication. Sorted by issue/date context when available.")), 1),
          p("p", null, [
            p("a", ud, y(T(u)("library", "Back to full catalogue")), 1)
          ])
        ])) : Oe("", !0),
        p("p", fd, [
          ce(y(T(u)("library", "Showing")) + " " + y(z.value.from) + "–" + y(z.value.to) + " " + y(T(u)("library", "of")) + " " + y(z.value.total) + " " + y(T(u)("library", "catalogue items")), 1),
          st.value.length > 0 ? (H(), j("span", dd, [
            b[19] || (b[19] = ce(" · ", -1)),
            p("a", pd, y(T(u)("library", "Clear all filters")), 1)
          ])) : Oe("", !0)
        ]),
        p("details", hd, [
          p("summary", null, [
            ce(y(T(u)("library", "Batch actions for current results")) + " ", 1),
            p("span", md, y(z.value.total) + " " + y(T(u)("library", "Current filter result")), 1)
          ]),
          p("form", {
            method: "post",
            action: be.value,
            class: "library-batch-tag-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: U.value
            }, null, 8, yd),
            (H(!0), j(se, null, Te(De.value, (d) => (H(), j("input", {
              key: d.key,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, gd))), 128)),
            p("label", null, [
              p("span", null, y(T(u)("library", "Nextcloud tag")), 1),
              p("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: T(u)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, _d)
            ]),
            p("button", vd, y(T(u)("library", "Apply Nextcloud tag to current results")), 1),
            p("p", Ed, y(T(u)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
          ], 8, bd),
          p("form", {
            method: "post",
            action: xe.value,
            class: "library-batch-tag-remove-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: U.value
            }, null, 8, Sd),
            (H(!0), j(se, null, Te(De.value, (d) => (H(), j("input", {
              key: `remove-tag-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, xd))), 128)),
            p("label", null, [
              p("span", null, y(T(u)("library", "Nextcloud tag")), 1),
              p("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: T(u)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, Cd)
            ]),
            p("button", Ad, y(T(u)("library", "Remove tag from current results")), 1),
            p("p", wd, y(T(u)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
          ], 8, Td),
          p("form", {
            method: "post",
            action: Ve.value,
            class: "library-batch-metadata-reset-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: U.value
            }, null, 8, Od),
            (H(!0), j(se, null, Te(De.value, (d) => (H(), j("input", {
              key: `reset-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, Nd))), 128)),
            b[20] || (b[20] = p("input", {
              type: "hidden",
              name: "scannerConflicts",
              value: "1"
            }, null, -1)),
            p("button", Pd, y(T(u)("library", "Reset filtered metadata")), 1),
            p("p", Ld, y(T(u)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
          ], 8, Rd),
          p("form", {
            method: "post",
            action: rt.value,
            class: "library-batch-metadata-edit-preview-form",
            target: "_blank"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: U.value
            }, null, 8, Md),
            (H(!0), j(se, null, Te(De.value, (d) => (H(), j("input", {
              key: `edit-preview-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, kd))), 128)),
            p("label", null, [
              p("span", null, y(T(u)("library", "Metadata field")), 1),
              p("select", Dd, [
                p("option", Fd, y(T(u)("library", "Publication type")), 1),
                p("option", Ud, y(T(u)("library", "Subtitle")), 1),
                p("option", Hd, y(T(u)("library", "Creators")), 1),
                p("option", jd, y(T(u)("library", "Series / periodical")), 1),
                p("option", $d, y(T(u)("library", "Publication date")), 1),
                p("option", Vd, y(T(u)("library", "Language")), 1),
                p("option", Bd, y(T(u)("library", "Publisher")), 1),
                p("option", zd, y(T(u)("library", "Genres")), 1),
                p("option", Wd, y(T(u)("library", "Classifications")), 1)
              ])
            ]),
            p("label", null, [
              p("span", null, y(T(u)("library", "Preview value")), 1),
              b[21] || (b[21] = p("input", {
                type: "text",
                name: "bulkEditValue",
                placeholder: "magazine, de, photography...",
                autocomplete: "off"
              }, null, -1))
            ]),
            p("button", qd, y(T(u)("library", "Preview metadata edit")), 1),
            p("p", Kd, y(T(u)("library", "Preview-first batch metadata edit for current filter results. No changes are written during preview.")), 1)
          ], 8, Id),
          p("form", {
            method: "post",
            action: Be.value,
            class: "library-batch-cover-refresh-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: U.value
            }, null, 8, Yd),
            (H(!0), j(se, null, Te(De.value, (d) => (H(), j("input", {
              key: `cover-${d.key}`,
              type: "hidden",
              name: d.key,
              value: d.value
            }, null, 8, Xd))), 128)),
            p("button", Jd, y(T(u)("library", "Request fresh cover previews")), 1),
            p("p", Zd, y(T(u)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
          ], 8, Gd)
        ]),
        st.value.length > 0 ? (H(), j("nav", {
          key: 1,
          class: "library-active-filter-chips",
          "aria-label": T(u)("library", "Active filters")
        }, [
          p("span", null, y(T(u)("library", "Active filters")), 1),
          (H(!0), j(se, null, Te(st.value, (d) => (H(), j("a", {
            key: d.key,
            href: v(d.key),
            class: "library-filter-chip",
            "aria-label": `${T(u)("library", "Remove filter")}: ${d.label}`
          }, [
            p("strong", null, y(d.label) + ":", 1),
            ce(" " + y(d.value) + " ", 1),
            b[22] || (b[22] = p("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, ep))), 128))
        ], 8, Qd)) : Oe("", !0),
        p("nav", {
          class: "library-pagination",
          "aria-label": T(u)("library", "Catalogue pagination")
        }, [
          p("span", np, [
            ce(y(T(u)("library", "Page")) + " " + y(z.value.page), 1),
            z.value.total > 0 ? (H(), j("span", rp, " · " + y(z.value.from) + "–" + y(z.value.to), 1)) : Oe("", !0)
          ]),
          z.value.previousUrl ? (H(), j("a", {
            key: 0,
            href: z.value.previousUrl
          }, y(T(u)("library", "Previous")), 9, ip)) : (H(), j("span", sp, y(T(u)("library", "Previous")), 1)),
          z.value.nextUrl ? (H(), j("a", {
            key: 2,
            href: z.value.nextUrl
          }, y(T(u)("library", "Next")), 9, op)) : (H(), j("span", lp, y(T(u)("library", "Next")), 1))
        ], 8, tp),
        m.value.length > 0 ? (H(), j("details", ap, [
          p("summary", cp, y(T(u)("library", "Show top series and periodicals")), 1),
          p("h3", up, y(T(u)("library", "Top series and periodicals")), 1),
          p("p", fp, y(T(u)("library", "Jump into recurring publications with one click.")), 1),
          p("ul", null, [
            (H(!0), j(se, null, Te(m.value, (d) => (H(), j("li", {
              key: d.publication
            }, [
              p("a", {
                href: I(d.publication)
              }, y(d.publication), 9, dp),
              p("span", pp, y(d.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : m.value.length === 0 ? (H(), j("details", hp, [
          p("summary", mp, y(T(u)("library", "Show top series and periodicals")), 1),
          p("h3", bp, y(T(u)("library", "No series or periodicals found yet")), 1),
          p("p", yp, y(T(u)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Oe("", !0),
        o.value.length === 0 ? (H(), j("div", {
          key: 4,
          class: wn(["library-empty-content", { "library-first-run-guidance": Pe.value || Le.value, "library-filter-empty-state": Ye.value && !Pe.value && !Le.value }]),
          role: "status"
        }, [
          Pe.value ? (H(), j(se, { key: 0 }, [
            p("h3", null, y(T(u)("library", "Start with one Library root")), 1),
            p("p", gp, y(T(u)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            p("p", _p, [
              p("a", {
                href: G.value,
                class: "button primary"
              }, y(T(u)("library", "Add a Library root")), 9, vp),
              p("span", Ep, y(T(u)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : Le.value ? (H(), j(se, { key: 1 }, [
            p("h3", null, y(T(u)("library", "No enabled Library roots")), 1),
            p("p", Tp, y(T(u)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            p("p", Sp, [
              p("a", {
                href: G.value,
                class: "button primary"
              }, y(T(u)("library", "Open Library settings")), 9, xp)
            ])
          ], 64)) : Ye.value ? (H(), j(se, { key: 2 }, [
            p("h3", null, y(T(u)("library", "No matches for the current filters")), 1),
            p("p", Cp, y(T(u)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            p("p", Ap, [
              p("a", {
                href: R(),
                class: "button secondary"
              }, y(T(u)("library", "Clear search")), 9, wp),
              p("a", Rp, y(T(u)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (H(), j(se, { key: 3 }, [
            p("h3", null, y(T(u)("library", "No catalogue items yet")), 1),
            p("p", Op, y(T(u)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            p("p", Np, [
              p("a", {
                href: G.value,
                class: "button primary"
              }, y(T(u)("library", "Run a scan from settings")), 9, Pp)
            ])
          ], 64))
        ], 2)) : (H(), j("div", Lp, [
          (H(!0), j(se, null, Te(o.value, (d) => (H(), j("article", {
            key: d.id,
            class: wn(["library-cover-card", { "library-cover-card--open": ft[d.id] }])
          }, [
            p("a", {
              class: "library-cover-link",
              href: d.openUrl,
              "aria-label": `Read ${d.title}`
            }, [
              p("img", {
                class: "library-cover-image",
                src: d.coverUrl,
                alt: `Cover for ${d.title}`,
                loading: "lazy"
              }, null, 8, Mp)
            ], 8, Ip),
            p("form", {
              method: "post",
              action: d.starUrl,
              class: "library-cover-star-form",
              onSubmit: Er((F) => w(d, F), ["prevent"])
            }, [
              p("input", {
                type: "hidden",
                name: "requesttoken",
                value: U.value
              }, null, 8, Dp),
              b[23] || (b[23] = p("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              p("input", {
                type: "hidden",
                name: "starred",
                value: d.starred ? "0" : "1"
              }, null, 8, Fp),
              p("button", {
                type: "submit",
                class: wn(["library-cover-star-button", { "library-cover-star-button--starred": d.starred }]),
                "aria-pressed": d.starred ? "true" : "false",
                title: d.starred ? T(u)("library", "Unstar this publication") : T(u)("library", "Star this publication"),
                "aria-label": d.starred ? T(u)("library", "Unstar this publication") : T(u)("library", "Star this publication"),
                onClick: Er((F) => w(d, F), ["prevent"])
              }, y(d.starred ? "★" : "☆"), 11, Up)
            ], 40, kp),
            p("div", Hp, [
              p("div", jp, [
                p("h3", null, [
                  d.starred ? (H(), j("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": T(u)("library", "Starred")
                  }, "★", 8, $p)) : Oe("", !0),
                  ce(y(d.title), 1)
                ]),
                p("a", {
                  class: "library-cover-read",
                  href: d.openUrl
                }, y(T(u)("library", "Read")), 9, Vp)
              ]),
              p("details", {
                class: "library-cover-details",
                onToggle: (F) => P(d.id, F)
              }, [
                p("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${T(u)("library", "Show details and actions")}: ${d.title}`
                }, y(T(u)("library", "Details")), 9, zp),
                p("div", Wp, [
                  d.creators ? (H(), j("p", qp, y(d.creators), 1)) : Oe("", !0),
                  p("dl", Kp, [
                    p("div", Gp, [
                      p("dt", null, y(T(u)("library", "Type")), 1),
                      p("dd", null, y(d.publicationType), 1)
                    ]),
                    d.publication ? (H(), j("div", Yp, [
                      p("dt", null, y(T(u)("library", "Series")), 1),
                      p("dd", null, y(d.publication), 1)
                    ])) : Oe("", !0),
                    d.publicationDate ? (H(), j("div", Xp, [
                      p("dt", null, y(T(u)("library", "Date")), 1),
                      p("dd", null, y(d.publicationDate), 1)
                    ])) : Oe("", !0),
                    d.workflowStatus ? (H(), j("div", Jp, [
                      p("dt", null, y(T(u)("library", "Status")), 1),
                      p("dd", null, y(d.workflowStatus), 1)
                    ])) : Oe("", !0),
                    d.hasScannerConflict ? (H(), j("div", Zp, [
                      p("dt", null, y(T(u)("library", "Review")), 1),
                      p("dd", null, y(d.scannerConflictCount) + " fields", 1)
                    ])) : Oe("", !0),
                    d.lastOpenedAt ? (H(), j("div", Qp, [
                      p("dt", null, y(T(u)("library", "Last opened")), 1),
                      p("dd", null, y(d.lastOpenedAt), 1)
                    ])) : Oe("", !0),
                    d.extension ? (H(), j("div", eh, [
                      p("dt", null, y(T(u)("library", "Format")) + ":", 1),
                      p("dd", null, y(S(d.extension)), 1)
                    ])) : Oe("", !0),
                    d.shelf ? (H(), j("div", th, [
                      p("dt", null, y(T(u)("library", "Shelf")), 1),
                      p("dd", null, y(d.shelf), 1)
                    ])) : Oe("", !0)
                  ]),
                  d.description ? (H(), j("p", nh, y(d.description), 1)) : Oe("", !0),
                  d.scanStatus !== "indexed" || d.scanError ? (H(), j("p", rh, [
                    ce(" scanStatus: " + y(d.scanStatus || "unknown"), 1),
                    d.scanError ? (H(), j("span", ih, " · scanError: " + y(d.scanError), 1)) : Oe("", !0)
                  ])) : Oe("", !0),
                  p("div", sh, [
                    A(d).length === 0 ? (H(), j("span", oh, "No Nextcloud tags")) : (H(!0), j(se, { key: 1 }, Te(A(d), (F) => (H(), j("span", {
                      key: F.id,
                      class: "library-tag"
                    }, y(F.name), 1))), 128))
                  ]),
                  p("p", lh, [
                    p("a", {
                      href: d.filesUrl
                    }, y(T(u)("library", "Show in Files")), 9, ah),
                    b[24] || (b[24] = ce(" · ", -1)),
                    p("a", {
                      href: d.downloadUrl
                    }, y(T(u)("library", "Download source")), 9, ch),
                    b[25] || (b[25] = ce(" · ", -1)),
                    p("a", {
                      href: d.detailsUrl
                    }, y(T(u)("library", "Details")), 9, uh)
                  ])
                ])
              ], 40, Bp)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, oo = uu("library", "catalogue", {}), Ar = document.querySelector("#library-vue-root"), lo = {
  ...oo,
  requestToken: Ar?.dataset.requestToken || oo.requestToken || ""
};
function K(e) {
  return String(e ?? "");
}
function Tl(e) {
  return K(e).toUpperCase();
}
function dh(e, t, n, r = K) {
  for (const i of t) {
    const s = document.createElement("option");
    s.value = K(i), s.textContent = r(i), K(i) === K(n) && (s.selected = !0), e.appendChild(s);
  }
}
function ao(e, t, n, r, i = "") {
  const s = document.createElement("label");
  s.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = K(r), o.placeholder = i, s.appendChild(o), e.appendChild(s);
}
function Tn(e, t, n, r, i, s, o = K) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const E = document.createElement("option");
  E.value = "", E.textContent = i, c.appendChild(E), dh(c, s, r, o), l.appendChild(c), e.appendChild(l);
}
function Sn(e) {
  const t = K(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function ph(e, t = {}) {
  return K(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(K(e || t?.publication || ""))}`);
}
function hh(e) {
  return K(e.discoveryPage) === "publication";
}
function mh(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && K(r).trim() !== "");
}
function bh() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Vn(e, t, n, r) {
  const i = document.createElement("a");
  return i.href = t, i.className = n, i.textContent = r, e.appendChild(i), i;
}
function yh(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function gh(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", u("library", "Catalogue search and filters")), ao(r, u("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), Tn(r, u("library", "Type"), "type", n.type, u("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), ao(r, u("library", "Nextcloud tag"), "tag", n.tag, "photography"), Tn(r, u("library", "Format"), "format", n.format, u("library", "All formats"), e.formats || [], Tl), Tn(r, u("library", "Shelf"), "shelf", n.shelf, u("library", "All shelves"), e.shelves || []), Tn(r, u("library", "Scan status"), "status", n.status, u("library", "All scan statuses"), e.scanStatuses || []), Tn(r, u("library", "Sort"), "sort", n.sort || "title", u("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Tn(r, u("library", "Page size"), "limit", t.limit || 100, u("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", u("library", "Apply catalogue filters")), i.textContent = u("library", "Apply filters");
  const s = document.createElement("a");
  return s.href = "?", s.className = "button secondary", s.setAttribute("aria-label", u("library", "Clear catalogue filters")), s.textContent = u("library", "Clear"), r.append(i, s), r;
}
function _h(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", u("library", "Quick catalogue filters"));
  let i = null;
  const s = () => {
    window.clearTimeout(i), i = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [x, N] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(x) || K(N).trim() === "") continue;
    const V = document.createElement("input");
    V.type = "hidden", V.name = x, V.value = K(N), r.appendChild(V);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = u("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = K(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", s), o.appendChild(l), r.appendChild(o);
  const c = [
    [u("library", "Sort"), "sort", n.sort || "title", [["title", u("library", "Title")], ["recent", u("library", "Recently added")], ["publicationDate", u("library", "Publication date")], ["publication", u("library", "Series")], ["lastOpened", u("library", "Recently opened")], ["format", u("library", "Format")]]],
    [u("library", "Starred"), "starred", n.starred || "", [["", u("library", "All")], ["1", u("library", "Starred")]]],
    [u("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [x, N, V, J] of c) {
    const B = document.createElement("label");
    B.textContent = x;
    const Q = document.createElement("select");
    Q.name = N;
    for (const [z, k] of J) {
      const G = document.createElement("option");
      G.value = K(z), G.textContent = K(k), K(z) === K(V) && (G.selected = !0), Q.appendChild(G);
    }
    Q.addEventListener("change", () => r.requestSubmit()), B.appendChild(Q), r.appendChild(B);
  }
  const E = document.createElement("button");
  E.type = "submit", E.className = "button primary", E.setAttribute("aria-label", u("library", "Apply catalogue filters")), E.textContent = u("library", "Apply filters");
  const m = document.createElement("a");
  return m.href = "?", m.className = "button secondary", m.setAttribute("aria-label", u("library", "Clear catalogue filters")), m.textContent = u("library", "Clear all"), r.append(E, m), r;
}
function vh(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, i = K(e.settingsUrl || ""), s = K(e.metadataExportUrl || ""), o = K(e.batchTagUrl || "/apps/library/bulk/tags"), l = K(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), c = K(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), E = K(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), m = K(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), x = document.createElement("div");
  x.className = "library-vue-catalogue library-vue-fallback", x.dataset.vueFallback = "true";
  const N = document.createElement("section");
  N.className = "library-panel", N.setAttribute("aria-labelledby", "library-catalogue-heading");
  const V = document.createElement("div");
  V.className = "library-catalogue-header";
  const J = document.createElement("div"), B = document.createElement("h2");
  B.id = "library-catalogue-heading", B.textContent = u("library", "Publication catalogue");
  const Q = document.createElement("p");
  Q.className = "library-muted", Q.textContent = u("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), J.append(B, Q);
  const z = document.createElement("nav");
  if (z.className = "library-catalogue-toolbar", z.setAttribute("aria-label", u("library", "Library actions")), i) {
    const w = document.createElement("a");
    w.href = i, w.className = "button secondary", w.setAttribute("aria-label", "Open Library settings"), w.textContent = u("library", "Settings"), z.appendChild(w);
  }
  if (s) {
    const w = document.createElement("a");
    w.href = s, w.className = "button secondary", w.setAttribute("aria-label", "Export corrected metadata"), w.textContent = u("library", "Export corrected metadata"), z.appendChild(w);
  }
  if (e.metadataSidecarManifestUrl) {
    const w = document.createElement("a");
    w.href = e.metadataSidecarManifestUrl, w.className = "button secondary", w.setAttribute("aria-label", "Export sidecar manifest"), w.textContent = u("library", "Sidecar manifest"), z.appendChild(w);
  }
  if (e.metadataSidecarBundleUrl) {
    const w = document.createElement("a");
    w.href = e.metadataSidecarBundleUrl, w.className = "button secondary", w.setAttribute("aria-label", "Export sidecar ZIP"), w.textContent = u("library", "Sidecar ZIP"), z.appendChild(w);
  }
  V.append(J, z), N.appendChild(V), N.appendChild(_h(e, r));
  const k = document.createElement("details");
  k.className = "library-filter-panel";
  const G = document.createElement("summary");
  if (G.className = "library-filter-panel-summary", G.textContent = u("library", "Show catalogue filters"), k.append(G, gh(e, r)), N.appendChild(k), hh(e)) {
    const w = document.createElement("section");
    w.className = "library-discovery-header", w.setAttribute("aria-labelledby", "library-publication-discovery-heading");
    const _ = document.createElement("p");
    _.className = "library-muted", _.textContent = u("library", "Publication / series");
    const b = document.createElement("h3");
    b.id = "library-publication-discovery-heading", b.textContent = K(e.discoveryTitle || e.activeFilters?.publication || "");
    const d = document.createElement("p");
    d.className = "library-muted", d.textContent = `${r.total ?? n.length} ${u("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const F = document.createElement("a");
    F.href = "/apps/library/", F.className = "button secondary", F.textContent = u("library", "Back to full catalogue"), w.append(_, b, d, F), N.appendChild(w);
  }
  const U = document.createElement("p");
  U.className = "library-muted library-filter-result-summary", U.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const oe = document.createElement("a");
  oe.href = "?", oe.textContent = ` ${u("library", "Clear all filters")}`, U.appendChild(oe), N.appendChild(U);
  const _e = document.createElement("details");
  _e.className = "library-batch-actions";
  const ve = document.createElement("summary");
  ve.textContent = `${u("library", "Batch actions for current results")} (${r.total ?? n.length} ${u("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = o, Ee.className = "library-batch-tag-form";
  const be = Sn(e);
  be && Ee.appendChild(be);
  for (const [w, _] of Object.entries(e.activeFilters || {})) {
    if (K(_).trim() === "") continue;
    const b = document.createElement("input");
    b.type = "hidden", b.name = w, b.value = K(_), Ee.appendChild(b);
  }
  const xe = document.createElement("label");
  xe.textContent = u("library", "Apply Nextcloud tag to current results");
  const Ve = document.createElement("input");
  Ve.type = "text", Ve.name = "nextcloudTagName", Ve.placeholder = "batch-review", xe.appendChild(Ve);
  const rt = document.createElement("button");
  rt.type = "submit", rt.className = "button secondary", rt.textContent = u("library", "Apply Nextcloud tag to current results");
  const Be = document.createElement("p");
  Be.className = "library-muted", Be.textContent = u("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(xe, rt, Be);
  const ze = document.createElement("form");
  ze.method = "post", ze.action = l, ze.className = "library-batch-tag-remove-form";
  const it = Sn(e);
  it && ze.appendChild(it);
  for (const [w, _] of Object.entries(e.activeFilters || {})) {
    if (K(_).trim() === "") continue;
    const b = document.createElement("input");
    b.type = "hidden", b.name = w, b.value = K(_), ze.appendChild(b);
  }
  const ye = document.createElement("label");
  ye.textContent = u("library", "Nextcloud tag");
  const re = document.createElement("input");
  re.type = "text", re.name = "nextcloudTagName", re.setAttribute("list", "library-nextcloud-tag-suggestions"), re.placeholder = u("library", "e.g. Review"), re.autocomplete = "off", ye.appendChild(re);
  const ne = document.createElement("button");
  ne.type = "submit", ne.className = "button secondary", ne.textContent = u("library", "Remove tag from current results");
  const Pe = document.createElement("p");
  Pe.className = "library-muted", Pe.textContent = u("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), ze.append(ye, ne, Pe);
  const Le = document.createElement("form");
  Le.method = "post", Le.action = c, Le.className = "library-batch-metadata-reset-form";
  const Ye = Sn(e);
  Ye && Le.appendChild(Ye);
  for (const [w, _] of Object.entries(e.activeFilters || {})) {
    if (K(_).trim() === "") continue;
    const b = document.createElement("input");
    b.type = "hidden", b.name = w, b.value = K(_), Le.appendChild(b);
  }
  const Ie = document.createElement("input");
  Ie.type = "hidden", Ie.name = "scannerConflicts", Ie.value = "1";
  const st = document.createElement("button");
  st.type = "submit", st.className = "button secondary", st.textContent = u("library", "Reset filtered metadata");
  const ae = document.createElement("p");
  ae.className = "library-muted", ae.textContent = u("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Le.append(Ie, st, ae);
  const De = document.createElement("form");
  De.method = "post", De.action = E, De.className = "library-batch-metadata-edit-preview-form", De.target = "_blank";
  const ft = Sn(e);
  ft && De.appendChild(ft);
  for (const [w, _] of Object.entries(e.activeFilters || {})) {
    if (K(_).trim() === "") continue;
    const b = document.createElement("input");
    b.type = "hidden", b.name = w, b.value = K(_), De.appendChild(b);
  }
  const He = document.createElement("label");
  He.textContent = u("library", "Metadata field");
  const dt = document.createElement("select");
  dt.name = "bulkEditField";
  for (const [w, _] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const b = document.createElement("option");
    b.value = w, b.textContent = u("library", _), dt.appendChild(b);
  }
  He.appendChild(dt);
  const St = document.createElement("label");
  St.textContent = u("library", "Preview value");
  const Xe = document.createElement("input");
  Xe.type = "text", Xe.name = "bulkEditValue", Xe.placeholder = "magazine, de, photography...", Xe.autocomplete = "off", St.appendChild(Xe);
  const Je = document.createElement("button");
  Je.type = "submit", Je.className = "button secondary", Je.textContent = u("library", "Preview metadata edit");
  const f = document.createElement("p");
  f.className = "library-muted", f.textContent = u("library", "Preview-first batch metadata edit for current filter results. No changes are written during preview."), De.append(He, St, Je, f);
  const h = document.createElement("form");
  h.method = "post", h.action = m, h.className = "library-batch-cover-refresh-form";
  const v = Sn(e);
  v && h.appendChild(v);
  for (const [w, _] of Object.entries(e.activeFilters || {})) {
    if (K(_).trim() === "") continue;
    const b = document.createElement("input");
    b.type = "hidden", b.name = w, b.value = K(_), h.appendChild(b);
  }
  const R = document.createElement("button");
  R.type = "submit", R.className = "button secondary", R.textContent = u("library", "Request fresh cover previews");
  const S = document.createElement("p");
  S.className = "library-muted", S.textContent = u("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), h.append(R, S), _e.append(ve, Ee, ze, Le, De, h), N.appendChild(_e);
  const A = document.createElement("nav");
  A.className = "library-pagination", A.setAttribute("aria-label", u("library", "Catalogue pagination"));
  const I = document.createElement("span");
  I.className = "library-pagination-range", I.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, A.appendChild(I), N.appendChild(A);
  const P = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], L = document.createElement("details");
  L.className = P.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const C = document.createElement("summary");
  C.className = "library-periodical-groups-summary", C.textContent = u("library", "Show top series and periodicals"), L.appendChild(C);
  const W = document.createElement("h3");
  W.textContent = P.length > 0 ? u("library", "Top series and periodicals") : u("library", "No series or periodicals found yet");
  const D = document.createElement("p");
  if (D.className = "library-muted", D.textContent = P.length > 0 ? u("library", "Jump into recurring publications with one click.") : u("library", "Add publication or series names in item details to build this shortcut panel."), L.append(W, D), P.length > 0) {
    const w = document.createElement("ul");
    for (const _ of P) {
      const b = document.createElement("li"), d = document.createElement("a");
      d.href = ph(_.publication, _), d.textContent = K(_.publication);
      const F = document.createElement("span");
      F.className = "library-muted", F.textContent = `${_.itemCount} items`, b.append(d, F), w.appendChild(b);
    }
    L.appendChild(w);
  }
  if (N.appendChild(L), n.length === 0) {
    const w = document.createElement("div"), _ = Number(e.rootCount || 0), b = Number(e.enabledRootCount || 0), d = mh(e);
    w.className = "library-empty-content", (_ === 0 || b === 0) && w.classList.add("library-first-run-guidance"), d && _ > 0 && b > 0 && w.classList.add("library-filter-empty-state"), w.setAttribute("role", "status");
    const F = document.createElement("h3"), te = document.createElement("p");
    te.className = "library-muted";
    const Z = document.createElement("p");
    Z.className = "library-empty-actions", _ === 0 ? (F.textContent = u("library", "Start with one Library root"), te.textContent = u("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Vn(Z, i, "button primary", u("library", "Add a Library root")), yh(Z, u("library", "Run a scan after saving a root"))) : b === 0 ? (F.textContent = u("library", "No enabled Library roots"), te.textContent = u("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Vn(Z, i, "button primary", u("library", "Open Library settings"))) : d ? (F.textContent = u("library", "No matches for the current filters"), te.textContent = u("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Vn(Z, bh(), "button secondary", u("library", "Clear search")), Vn(Z, "?", "button primary", u("library", "Clear all filters"))) : (F.textContent = u("library", "No catalogue items yet"), te.textContent = u("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Vn(Z, i, "button primary", u("library", "Run a scan from settings"))), w.append(F, te, Z), N.appendChild(w);
  } else {
    const w = document.createElement("div");
    w.className = "library-cover-gallery";
    for (const _ of n) {
      const b = document.createElement("article");
      b.className = "library-cover-card";
      const d = document.createElement("a");
      d.className = "library-cover-link", d.href = K(_.openUrl || "#"), d.setAttribute("aria-label", `Read ${K(_.title || "publication")}`);
      const F = document.createElement("img");
      F.className = "library-cover-image", F.src = K(_.coverUrl || ""), F.alt = `Cover for ${K(_.title || "publication")}`, F.loading = "lazy", d.appendChild(F);
      const te = Sn(e), Z = document.createElement("form");
      Z.method = "post", Z.action = K(_.starUrl || ""), Z.className = "library-cover-star-form", te && Z.appendChild(te);
      const we = document.createElement("input");
      we.type = "hidden", we.name = "returnTo", we.value = "catalogue";
      const Me = document.createElement("input");
      Me.type = "hidden", Me.name = "starred", Me.value = _.starred ? "0" : "1";
      const Re = document.createElement("button");
      Re.type = "submit", Re.className = _.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Re.setAttribute("aria-pressed", _.starred ? "true" : "false"), Re.setAttribute("aria-label", _.starred ? u("library", "Unstar this publication") : u("library", "Star this publication")), Re.title = _.starred ? u("library", "Unstar this publication") : u("library", "Star this publication"), Re.textContent = _.starred ? "★" : "☆", Z.append(we, Me, Re);
      const ot = document.createElement("div");
      ot.className = "library-cover-summary";
      const Ce = document.createElement("h3");
      if (Ce.textContent = K(_.title || "Untitled publication"), ot.appendChild(Ce), _.creators) {
        const At = document.createElement("p");
        At.className = "library-creator", At.textContent = K(_.creators), ot.appendChild(At);
      }
      const je = document.createElement("dl");
      je.className = "library-cover-detail-list";
      const Qt = [
        ["Type", K(_.publicationType || "other")],
        ["Format", _.extension ? Tl(_.extension) : ""],
        ["Shelf", _.shelf ? K(_.shelf) : ""]
      ].filter(([, At]) => At !== "");
      for (const [At, lr] of Qt) {
        const yn = document.createElement("div");
        yn.className = "library-cover-detail-chip";
        const In = document.createElement("dt");
        In.textContent = At;
        const Mn = document.createElement("dd");
        Mn.textContent = lr, yn.append(In, Mn), je.appendChild(yn);
      }
      ot.appendChild(je);
      const Kt = document.createElement("p"), en = document.createElement("a");
      en.href = K(_.openUrl || "#"), en.textContent = u("library", "Read");
      const tn = document.createElement("a");
      tn.href = K(_.filesUrl || "#"), tn.textContent = u("library", "Show in Files");
      const xt = document.createElement("a");
      xt.href = K(_.downloadUrl || "#"), xt.textContent = u("library", "Download source");
      const Ct = document.createElement("a");
      Ct.href = K(_.detailsUrl || "#"), Ct.textContent = u("library", "Details"), Kt.append(en, document.createTextNode(" · "), tn, document.createTextNode(" · "), xt, document.createTextNode(" · "), Ct), ot.appendChild(Kt), b.append(d, Z, ot), w.appendChild(b);
    }
    N.appendChild(w);
  }
  return x.appendChild(N), x;
}
if (Ar)
  try {
    lu(fh, { state: lo }).mount(Ar);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Ar.replaceChildren(vh(lo));
  }
//# sourceMappingURL=library-main.mjs.map
