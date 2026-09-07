// @__NO_SIDE_EFFECTS__
function ki(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pe = {}, Cn = [], Mt = () => {
}, co = () => !1, Dr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fr = (e) => e.startsWith("onUpdate:"), Ye = Object.assign, Di = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hl = Object.prototype.hasOwnProperty, fe = (e, t) => Hl.call(e, t), Y = Array.isArray, Jt = (e) => ir(e) === "[object Map]", mn = (e) => ir(e) === "[object Set]", ds = (e) => ir(e) === "[object Date]", Q = (e) => typeof e == "function", Se = (e) => typeof e == "string", kt = (e) => typeof e == "symbol", de = (e) => e !== null && typeof e == "object", uo = (e) => (de(e) || Q(e)) && Q(e.then) && Q(e.catch), fo = Object.prototype.toString, ir = (e) => fo.call(e), jl = (e) => ir(e).slice(8, -1), po = (e) => ir(e) === "[object Object]", Fi = (e) => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qn = /* @__PURE__ */ ki(
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
const zl = /;(?![^(]*\))/g, Bl = /:([^]+)/, Wl = /\/\*[^]*?\*\//g;
function ql(e) {
  const t = {};
  return e.replace(Wl, "").split(zl).forEach((n) => {
    if (n) {
      const r = n.split(Bl);
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
      const l = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (l && !u || !l && u || !Zt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xl(e, t) {
  return e.findIndex((n) => Zt(n, t));
}
const yo = (e) => !!(e && e.__v_isRef === !0), g = (e) => Se(e) ? e : e == null ? "" : Y(e) || de(e) && (e.toString === fo || !Q(e.toString)) ? yo(e) ? g(e.value) : JSON.stringify(e, go, 2) : String(e), go = (e, t) => yo(t) ? go(e, t.value) : Jt(t) ? {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || To(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ms(this), Eo(this);
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
function To(e, t = !1) {
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
function Eo(e) {
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
    Eo(e);
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
const Ao = [];
function Vt() {
  Ao.push(vt), vt = !1;
}
function zt() {
  const e = Ao.pop();
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
      n = this.activeLink = new ea(me, this), me.deps ? (n.prevDep = me.depsTail, me.depsTail.nextDep = n, me.depsTail = n) : me.deps = me.depsTail = n, Co(n);
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
function Co(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Co(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const xi = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ Symbol(
  ""
), Ai = /* @__PURE__ */ Symbol(
  ""
), Qn = /* @__PURE__ */ Symbol(
  ""
);
function Ke(e, t, n) {
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
  const l = (u) => {
    u && u.trigger();
  };
  if (Hi(), t === "clear")
    o.forEach(l);
  else {
    const u = Y(e), v = u && Fi(n);
    if (u && n === "length") {
      const b = Number(r);
      o.forEach((x, L) => {
        (L === "length" || L === Qn || !kt(L) && L >= b) && l(x);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), v && l(o.get(Qn)), t) {
        case "add":
          u ? v && l(o.get("length")) : (l(o.get(dn)), Jt(e) && l(o.get(Ai)));
          break;
        case "delete":
          u || (l(o.get(dn)), Jt(e) && l(o.get(Ai)));
          break;
        case "set":
          Jt(e) && l(o.get(dn));
          break;
      }
  }
  ji();
}
function Tn(e) {
  const t = /* @__PURE__ */ ue(e);
  return t === e ? t : (Ke(t, "iterate", Qn), /* @__PURE__ */ bt(e) ? t : t.map(Tt));
}
function $r(e) {
  return Ke(e = /* @__PURE__ */ ue(e), "iterate", Qn), e;
}
function Pt(e, t) {
  return /* @__PURE__ */ Bt(e) ? Pn(/* @__PURE__ */ pn(e) ? Tt(t) : t) : Tt(t);
}
const ta = {
  __proto__: null,
  [Symbol.iterator]() {
    return si(this, Symbol.iterator, (e) => Pt(this, e));
  },
  concat(...e) {
    return Tn(this).concat(
      ...e.map((t) => Y(t) ? Tn(t) : t)
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
    return Tn(this).join(e);
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
    return Tn(this).toReversed();
  },
  toSorted(e) {
    return Tn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Tn(this).toSpliced(...e);
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
  return r !== e && !/* @__PURE__ */ bt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const na = Array.prototype;
function Dt(e, t, n, r, i, s) {
  const o = $r(e), l = o !== e && !/* @__PURE__ */ bt(e), u = o[t];
  if (u !== na[t]) {
    const x = u.apply(e, s);
    return l ? Tt(x) : x;
  }
  let v = n;
  o !== e && (l ? v = function(x, L) {
    return n.call(this, Pt(e, x), L, e);
  } : n.length > 2 && (v = function(x, L) {
    return n.call(this, x, L, e);
  }));
  const b = u.call(o, v, r);
  return l && i ? i(b) : b;
}
function bs(e, t, n, r) {
  const i = $r(e), s = i !== e && !/* @__PURE__ */ bt(e);
  let o = n, l = !1;
  i !== e && (s ? (l = r.length === 0, o = function(v, b, x) {
    return l && (l = !1, v = Pt(e, v)), n.call(this, v, Pt(e, b), x, e);
  }) : n.length > 3 && (o = function(v, b, x) {
    return n.call(this, v, b, x, e);
  }));
  const u = i[t](o, ...r);
  return l ? Pt(e, u) : u;
}
function oi(e, t, n) {
  const r = /* @__PURE__ */ ue(e);
  Ke(r, "iterate", Qn);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Wi(n[0]) ? (n[0] = /* @__PURE__ */ ue(n[0]), r[t](...n)) : i;
}
function Fn(e, t, n = []) {
  Vt(), Hi();
  const r = (/* @__PURE__ */ ue(e))[t].apply(e, n);
  return ji(), zt(), r;
}
const ra = /* @__PURE__ */ ki("__proto__,__v_isRef,__isVue"), wo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(kt)
);
function ia(e) {
  kt(e) || (e = String(e));
  const t = /* @__PURE__ */ ue(this);
  return Ke(t, "has", e), t.hasOwnProperty(e);
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
      let u;
      if (o && (u = ta[n]))
        return u;
      if (n === "hasOwnProperty")
        return ia;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ge(t) ? t : r
    );
    if ((kt(n) ? wo.has(n) : ra(n)) || (i || Ke(t, "get", n), s))
      return l;
    if (/* @__PURE__ */ Ge(l)) {
      const u = o && Fi(n) ? l : l.value;
      return i && de(u) ? /* @__PURE__ */ wi(u) : u;
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
      const v = /* @__PURE__ */ Bt(s);
      if (!/* @__PURE__ */ bt(r) && !/* @__PURE__ */ Bt(r) && (s = /* @__PURE__ */ ue(s), r = /* @__PURE__ */ ue(r)), !o && /* @__PURE__ */ Ge(s) && !/* @__PURE__ */ Ge(r))
        return v || (s.value = r), !0;
    }
    const l = o ? Number(n) < t.length : fe(t, n), u = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ge(t) ? t : i
    );
    return t === /* @__PURE__ */ ue(i) && u && (l ? It(r, s) && Ht(t, "set", n, r) : Ht(t, "add", n, r)), u;
  }
  deleteProperty(t, n) {
    const r = fe(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Ht(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!kt(n) || !wo.has(n)) && Ke(t, "has", n), r;
  }
  ownKeys(t) {
    return Ke(
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
const Ci = (e) => e, br = (e) => Reflect.getPrototypeOf(e);
function ca(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = /* @__PURE__ */ ue(i), o = Jt(s), l = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, v = i[e](...r), b = n ? Ci : t ? Pn : Tt;
    return !t && Ke(
      s,
      "iterate",
      u ? Ai : dn
    ), Ye(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: x, done: L } = v.next();
          return L ? { value: x, done: L } : {
            value: l ? [b(x[0]), b(x[1])] : b(x),
            done: L
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
      e || (It(i, l) && Ke(o, "get", i), Ke(o, "get", l));
      const { has: u } = br(o), v = t ? Ci : e ? Pn : Tt;
      if (u.call(o, i))
        return v(s.get(i));
      if (u.call(o, l))
        return v(s.get(l));
      s !== o && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ke(/* @__PURE__ */ ue(i), "iterate", dn), i.size;
    },
    has(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ ue(s), l = /* @__PURE__ */ ue(i);
      return e || (It(i, l) && Ke(o, "has", i), Ke(o, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
    },
    forEach(i, s) {
      const o = this, l = o.__v_raw, u = /* @__PURE__ */ ue(l), v = t ? Ci : e ? Pn : Tt;
      return !e && Ke(u, "iterate", dn), l.forEach((b, x) => i.call(s, v(b), v(x), o));
    }
  };
  return Ye(
    n,
    e ? {
      add: yr("add"),
      set: yr("set"),
      delete: yr("delete"),
      clear: yr("clear")
    } : {
      add(i) {
        const s = /* @__PURE__ */ ue(this), o = br(s), l = /* @__PURE__ */ ue(i), u = !t && !/* @__PURE__ */ bt(i) && !/* @__PURE__ */ Bt(i) ? l : i;
        return o.has.call(s, u) || It(i, u) && o.has.call(s, i) || It(l, u) && o.has.call(s, l) || (s.add(u), Ht(s, "add", u, u)), this;
      },
      set(i, s) {
        !t && !/* @__PURE__ */ bt(s) && !/* @__PURE__ */ Bt(s) && (s = /* @__PURE__ */ ue(s));
        const o = /* @__PURE__ */ ue(this), { has: l, get: u } = br(o);
        let v = l.call(o, i);
        v || (i = /* @__PURE__ */ ue(i), v = l.call(o, i));
        const b = u.call(o, i);
        return o.set(i, s), v ? It(s, b) && Ht(o, "set", i, s) : Ht(o, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ ue(this), { has: o, get: l } = br(s);
        let u = o.call(s, i);
        u || (i = /* @__PURE__ */ ue(i), u = o.call(s, i)), l && l.call(s, i);
        const v = s.delete(i);
        return u && Ht(s, "delete", i, void 0), v;
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
function zi(e, t) {
  const n = ua(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    fe(n, i) && i in r ? n : r,
    i,
    s
  );
}
const fa = {
  get: /* @__PURE__ */ zi(!1, !1)
}, da = {
  get: /* @__PURE__ */ zi(!1, !0)
}, pa = {
  get: /* @__PURE__ */ zi(!0, !1)
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
  return /* @__PURE__ */ Bt(e) ? e : Bi(
    e,
    !1,
    oa,
    fa,
    No
  );
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
  return Bi(
    e,
    !1,
    aa,
    da,
    Po
  );
}
// @__NO_SIDE_EFFECTS__
function wi(e) {
  return Bi(
    e,
    !0,
    la,
    pa,
    Lo
  );
}
function Bi(e, t, n, r, i) {
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
  return /* @__PURE__ */ Bt(e) ? /* @__PURE__ */ pn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
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
const Tt = (e) => de(e) ? /* @__PURE__ */ un(e) : e, Pn = (e) => de(e) ? /* @__PURE__ */ wi(e) : e;
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return _a(e, !1);
}
function _a(e, t) {
  return /* @__PURE__ */ Ge(e) ? e : new va(e, t);
}
class va {
  constructor(t, n) {
    this.dep = new Vi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ue(t), this._value = n ? t : Tt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ bt(t) || /* @__PURE__ */ Bt(t);
    t = r ? t : /* @__PURE__ */ ue(t), It(t, n) && (this._rawValue = t, this._value = r ? t : Tt(t), this.dep.trigger());
  }
}
function T(e) {
  return /* @__PURE__ */ Ge(e) ? e.value : e;
}
const Ta = {
  get: (e, t, n) => t === "__v_raw" ? e : T(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Ge(i) && !/* @__PURE__ */ Ge(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ pn(e) ? e : new Proxy(e, Ta);
}
class Ea {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Vi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    me !== this)
      return To(this, !0), !0;
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
  return Q(e) ? r = e : (r = e.get, i = e.set), new Ea(r, i, n);
}
const gr = {}, wr = /* @__PURE__ */ new WeakMap();
let ln;
function xa(e, t = !1, n = ln) {
  if (n) {
    let r = wr.get(n);
    r || wr.set(n, r = []), r.push(e);
  }
}
function Aa(e, t, n = pe) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: l, call: u } = n, v = (D) => i ? D : /* @__PURE__ */ bt(D) || i === !1 || i === 0 ? jt(D, 1) : jt(D);
  let b, x, L, j, J = !1, $ = !1;
  if (/* @__PURE__ */ Ge(e) ? (x = () => e.value, J = /* @__PURE__ */ bt(e)) : /* @__PURE__ */ pn(e) ? (x = () => v(e), J = !0) : Y(e) ? ($ = !0, J = e.some((D) => /* @__PURE__ */ pn(D) || /* @__PURE__ */ bt(D)), x = () => e.map((D) => {
    if (/* @__PURE__ */ Ge(D))
      return D.value;
    if (/* @__PURE__ */ pn(D))
      return v(D);
    if (Q(D))
      return u ? u(D, 2) : D();
  })) : Q(e) ? t ? x = u ? () => u(e, 2) : e : x = () => {
    if (L) {
      Vt();
      try {
        L();
      } finally {
        zt();
      }
    }
    const D = ln;
    ln = b;
    try {
      return u ? u(e, 3, [j]) : e(j);
    } finally {
      ln = D;
    }
  } : x = Mt, t && i) {
    const D = x, ie = i === !0 ? 1 / 0 : i;
    x = () => jt(D(), ie);
  }
  const Z = Zl(), V = () => {
    b.stop(), Z && Z.active && Di(Z.effects, b);
  };
  if (s && t) {
    const D = t;
    t = (...ie) => {
      const _e = D(...ie);
      return V(), _e;
    };
  }
  let k = $ ? new Array(e.length).fill(gr) : gr;
  const K = (D) => {
    if (!(!(b.flags & 1) || !b.dirty && !D))
      if (t) {
        const ie = b.run();
        if (D || i || J || ($ ? ie.some((_e, ve) => It(_e, k[ve])) : It(ie, k))) {
          L && L();
          const _e = ln;
          ln = b;
          try {
            const ve = [
              ie,
              // pass undefined as the old value when it's changed for the first time
              k === gr ? void 0 : $ && k[0] === gr ? [] : k,
              j
            ];
            k = ie, u ? u(t, 3, ve) : (
              // @ts-expect-error
              t(...ve)
            );
          } finally {
            ln = _e;
          }
        }
      } else
        b.run();
  };
  return l && l(K), b = new _o(x), b.scheduler = o ? () => o(K, !1) : K, j = (D) => xa(D, !1, b), L = b.onStop = () => {
    const D = wr.get(b);
    if (D) {
      if (u)
        u(D, 4);
      else
        for (const ie of D) ie();
      wr.delete(b);
    }
  }, t ? r ? K(!0) : k = b.run() : o ? o(K.bind(null, !0), !0) : b.run(), V.pause = b.pause.bind(b), V.resume = b.resume.bind(b), V.stop = V, V;
}
function jt(e, t = 1 / 0, n) {
  if (t <= 0 || !de(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ge(e))
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
function Et(e, t, n, r) {
  if (Q(e)) {
    const i = sr(e, t, n, r);
    return i && uo(i) && i.catch((s) => {
      Vr(s, t, n);
    }), i;
  }
  if (Y(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(Et(e[s], t, n, r));
    return i;
  }
}
function Vr(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || pe;
  if (t) {
    let l = t.parent;
    const u = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const b = l.ec;
      if (b) {
        for (let x = 0; x < b.length; x++)
          if (b[x](e, u, v) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      Vt(), sr(s, null, 10, [
        e,
        u,
        v
      ]), zt();
      return;
    }
  }
  Ca(e, n, i, r, o);
}
function Ca(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const nt = [];
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
  let t = Nt + 1, n = nt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = nt[r], s = er(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function qi(e) {
  if (!(e.flags & 1)) {
    const t = er(e), n = nt[nt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= er(n) ? nt.push(e) : nt.splice(wa(t), 0, e), e.flags |= 1, Do();
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
  for (; n < nt.length; n++) {
    const r = nt[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      nt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
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
    for (Nt = 0; Nt < nt.length; Nt++) {
      const t = nt[Nt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), sr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Nt < nt.length; Nt++) {
      const t = nt[Nt];
      t && (t.flags &= -2);
    }
    Nt = -1, nt.length = 0, Fo(), Rr = null, (nt.length || Rn.length) && Uo();
  }
}
let mt = null, Ho = null;
function Or(e) {
  const t = mt;
  return mt = e, Ho = e && e.type.__scopeId || null, t;
}
function Oa(e, t = mt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && Rs(-1);
    const s = Or(t), o = hn.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let u = hn.length; u > o; u--) fl();
      Or(s), r._d && Rs(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function De(e, t) {
  if (mt === null)
    return e;
  const n = Kr(mt), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, l, u = pe] = t[i];
    s && (Q(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && jt(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: u
    }));
  }
  return e;
}
function rn(e, t, n, r) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    s && (l.oldValue = s[o].value);
    let u = l.dir[r];
    u && (Vt(), Et(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), zt());
  }
}
function Na(e, t) {
  if (rt) {
    let n = rt.provides;
    const r = rt.parent && rt.parent.provides;
    r === n && (n = rt.provides = Object.create(r)), n[e] = t;
  }
}
function xr(e, t, n = !1) {
  const r = Cc();
  if (r || On) {
    let i = On ? On._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(r && r.proxy) : t;
  }
}
const Pa = /* @__PURE__ */ Symbol.for("v-scx"), La = () => xr(Pa);
function li(e, t, n) {
  return jo(e, t, n);
}
function jo(e, t, n = pe) {
  const { immediate: r, deep: i, flush: s, once: o } = n, l = Ye({}, n), u = t && r || !t && s !== "post";
  let v;
  if (rr) {
    if (s === "sync") {
      const j = La();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!u) {
      const j = () => {
      };
      return j.stop = Mt, j.resume = Mt, j.pause = Mt, j;
    }
  }
  const b = rt;
  l.call = (j, J, $) => Et(j, b, J, $);
  let x = !1;
  s === "post" ? l.scheduler = (j) => {
    ct(j, b && b.suspense);
  } : s !== "sync" && (x = !0, l.scheduler = (j, J) => {
    J ? j() : qi(j);
  }), l.augmentJob = (j) => {
    t && (j.flags |= 4), x && (j.flags |= 2, b && (j.id = b.uid, j.i = b));
  };
  const L = Aa(e, t, l);
  return rr && (v ? v.push(L) : u && L()), L;
}
function Ia(e, t, n) {
  const r = this.proxy, i = Se(e) ? e.includes(".") ? $o(r, e) : () => r[e] : e.bind(r, r);
  let s;
  Q(t) ? s = t : (s = t.handler, n = t);
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
const Ma = /* @__PURE__ */ Symbol("_vte"), zr = (e) => e.__isTeleport, ai = /* @__PURE__ */ Symbol("_leaveCb");
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
    return zr(e.type) && e.children ? ka(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Q(n.default))
      return n.default();
  }
}
function Ki(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Ki(
      zr(n.type) && Vo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zo(e) {
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
      ($, Z) => Yn(
        $,
        t && (Y(t) ? t[Z] : t),
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
  const s = r.shapeFlag & 4 ? Kr(r.component) : r.el, o = i ? null : s, { i: l, r: u } = e, v = t && t.r, b = l.refs === pe ? l.refs = {} : l.refs, x = l.setupState, L = /* @__PURE__ */ ue(x), j = x === pe ? co : ($) => gs(b, $) ? !1 : fe(L, $), J = ($, Z) => !(Z && gs(b, Z));
  if (v != null && v !== u) {
    if (_s(t), Se(v))
      b[v] = null, j(v) && (x[v] = null);
    else if (/* @__PURE__ */ Ge(v)) {
      const $ = t;
      J(v, $.k) && (v.value = null), $.k && (b[$.k] = null);
    }
  }
  if (Q(u))
    sr(u, l, 12, [o, b]);
  else {
    const $ = Se(u), Z = /* @__PURE__ */ Ge(u);
    if ($ || Z) {
      const V = () => {
        if (e.f) {
          const k = $ ? j(u) ? x[u] : b[u] : J() || !e.k ? u.value : b[e.k];
          if (i)
            Y(k) && Di(k, s);
          else if (Y(k))
            k.includes(s) || k.push(s);
          else if ($)
            b[u] = [s], j(u) && (x[u] = b[u]);
          else {
            const K = [s];
            J(u, e.k) && (u.value = K), e.k && (b[e.k] = K);
          }
        } else $ ? (b[u] = o, j(u) && (x[u] = o)) : Z && (J(u, e.k) && (u.value = o), e.k && (b[e.k] = o));
      };
      if (o) {
        const k = () => {
          V(), Nr.delete(e);
        };
        k.id = -1, Nr.set(e, k), ct(k, n);
      } else
        _s(e), V();
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
  Bo(e, "a", t);
}
function Fa(e, t) {
  Bo(e, "da", t);
}
function Bo(e, t, n = rt) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Br(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Gi(i.parent.vnode) && Ua(r, t, n, i), i = i.parent;
  }
}
function Ua(e, t, n, r) {
  const i = Br(
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
function Br(e, t, n = rt, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      Vt();
      const l = or(n), u = Et(t, n, e, o);
      return l(), zt(), u;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const qt = (e) => (t, n = rt) => {
  (!rr || e === "sp") && Br(e, (...r) => t(...r), n);
}, Ha = qt("bm"), Wo = qt("m"), ja = qt(
  "bu"
), $a = qt("u"), qo = qt(
  "bum"
), Ko = qt("um"), Va = qt(
  "sp"
), za = qt("rtg"), Ba = qt("rtc");
function Wa(e, t = rt) {
  Br("ec", e, t);
}
const qa = /* @__PURE__ */ Symbol.for("v-ndc");
function Ee(e, t, n, r) {
  let i;
  const s = n, o = Y(e);
  if (o || Se(e)) {
    const l = o && /* @__PURE__ */ pn(e);
    let u = !1, v = !1;
    l && (u = !/* @__PURE__ */ bt(e), v = /* @__PURE__ */ Bt(e), e = $r(e)), i = new Array(e.length);
    for (let b = 0, x = e.length; b < x; b++)
      i[b] = t(
        u ? v ? Pn(Tt(e[b])) : Tt(e[b]) : e[b],
        b,
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
        (l, u) => t(l, u, void 0, s)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let u = 0, v = l.length; u < v; u++) {
        const b = l[u];
        i[u] = t(e[b], b, u, s);
      }
    }
  else
    i = [];
  return i;
}
const Ri = (e) => e ? ml(e) ? Kr(e) : Ri(e.parent) : null, Jn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ye(/* @__PURE__ */ Object.create(null), {
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
    const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: l, appContext: u } = e;
    if (t[0] !== "$") {
      const L = o[t];
      if (L !== void 0)
        switch (L) {
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
    const v = Jn[t];
    let b, x;
    if (v)
      return t === "$attrs" && Ke(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (b = l.__cssModules) && (b = b[t])
    )
      return b;
    if (n !== pe && fe(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      x = u.config.globalProperties, fe(x, t)
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
    let u;
    return !!(n[l] || e !== pe && l[0] !== "$" && fe(e, l) || ci(t, l) || fe(s, l) || fe(r, l) || fe(Jn, l) || fe(i.config.globalProperties, l) || (u = o.__cssModules) && u[l]);
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
  Oi = !1, t.beforeCreate && Ts(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: l,
    provide: u,
    inject: v,
    // lifecycle
    created: b,
    beforeMount: x,
    mounted: L,
    beforeUpdate: j,
    updated: J,
    activated: $,
    deactivated: Z,
    beforeDestroy: V,
    beforeUnmount: k,
    destroyed: K,
    unmounted: D,
    render: ie,
    renderTracked: _e,
    renderTriggered: ve,
    errorCaptured: Te,
    serverPrefetch: be,
    // public API
    expose: xe,
    inheritAttrs: Ve,
    // assets
    components: it,
    directives: ze,
    filters: Be
  } = t;
  if (v && Ya(v, r, null), o)
    for (const ne in o) {
      const ee = o[ne];
      Q(ee) && (r[ne] = ee.bind(n));
    }
  if (i) {
    const ne = i.call(n, n);
    de(ne) && (e.data = /* @__PURE__ */ un(ne));
  }
  if (Oi = !0, s)
    for (const ne in s) {
      const ee = s[ne], ke = Q(ee) ? ee.bind(n, n) : Q(ee.get) ? ee.get.bind(n, n) : Mt, Ue = !Q(ee) && Q(ee.set) ? ee.set.bind(n) : Mt, He = le({
        get: ke,
        set: Ue
      });
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: (Ne) => He.value = Ne
      });
    }
  if (l)
    for (const ne in l)
      Go(l[ne], r, n, ne);
  if (u) {
    const ne = Q(u) ? u.call(n) : u;
    Reflect.ownKeys(ne).forEach((ee) => {
      Na(ee, ne[ee]);
    });
  }
  b && Ts(b, e, "c");
  function ye(ne, ee) {
    Y(ee) ? ee.forEach((ke) => ne(ke.bind(n))) : ee && ne(ee.bind(n));
  }
  if (ye(Ha, x), ye(Wo, L), ye(ja, j), ye($a, J), ye(Da, $), ye(Fa, Z), ye(Wa, Te), ye(Ba, _e), ye(za, ve), ye(qo, k), ye(Ko, D), ye(Va, be), Y(xe))
    if (xe.length) {
      const ne = e.exposed || (e.exposed = {});
      xe.forEach((ee) => {
        Object.defineProperty(ne, ee, {
          get: () => n[ee],
          set: (ke) => n[ee] = ke,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ie && e.render === Mt && (e.render = ie), Ve != null && (e.inheritAttrs = Ve), it && (e.components = it), ze && (e.directives = ze), be && zo(e);
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
    ) : s = xr(i.from || r) : s = xr(i), /* @__PURE__ */ Ge(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[r] = s;
  }
}
function Ts(e, t, n) {
  Et(
    Y(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Go(e, t, n, r) {
  let i = r.includes(".") ? $o(n, r) : () => n[r];
  if (Se(e)) {
    const s = t[e];
    Q(s) && li(i, s);
  } else if (Q(e))
    li(i, e.bind(n));
  else if (de(e))
    if (Y(e))
      e.forEach((s) => Go(s, t, n, r));
    else {
      const s = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(s) && li(i, s, e);
    }
}
function Yo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = s.get(t);
  let u;
  return l ? u = l : !i.length && !n && !r ? u = t : (u = {}, i.length && i.forEach(
    (v) => Pr(u, v, o, !0)
  ), Pr(u, t, o)), de(t) && s.set(t, u), u;
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
  data: Es,
  props: Ss,
  emits: Ss,
  // objects
  methods: zn,
  computed: zn,
  // lifecycle
  beforeCreate: tt,
  created: tt,
  beforeMount: tt,
  mounted: tt,
  beforeUpdate: tt,
  updated: tt,
  beforeDestroy: tt,
  beforeUnmount: tt,
  destroyed: tt,
  unmounted: tt,
  activated: tt,
  deactivated: tt,
  errorCaptured: tt,
  serverPrefetch: tt,
  // assets
  components: zn,
  directives: zn,
  // watch
  watch: Za,
  // provide / inject
  provide: Es,
  inject: Ja
};
function Es(e, t) {
  return t ? e ? function() {
    return Ye(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ja(e, t) {
  return zn(Ni(e), Ni(t));
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
function tt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zn(e, t) {
  return e ? Ye(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ss(e, t) {
  return e ? Y(e) && Y(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ye(
    /* @__PURE__ */ Object.create(null),
    vs(e),
    vs(t ?? {})
  ) : t;
}
function Za(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ye(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = tt(e[r], t[r]);
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
    Q(r) || (r = Ye({}, r)), i != null && !de(i) && (i = null);
    const s = Xo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const v = s.app = {
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
      set config(b) {
      },
      use(b, ...x) {
        return o.has(b) || (b && Q(b.install) ? (o.add(b), b.install(v, ...x)) : Q(b) && (o.add(b), b(v, ...x))), v;
      },
      mixin(b) {
        return s.mixins.includes(b) || s.mixins.push(b), v;
      },
      component(b, x) {
        return x ? (s.components[b] = x, v) : s.components[b];
      },
      directive(b, x) {
        return x ? (s.directives[b] = x, v) : s.directives[b];
      },
      mount(b, x, L) {
        if (!u) {
          const j = v._ceVNode || $t(r, i);
          return j.appContext = s, L === !0 ? L = "svg" : L === !1 && (L = void 0), e(j, b, L), u = !0, v._container = b, b.__vue_app__ = v, Kr(j.component);
        }
      },
      onUnmount(b) {
        l.push(b);
      },
      unmount() {
        u && (Et(
          l,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(b, x) {
        return s.provides[b] = x, v;
      },
      runWithContext(b) {
        const x = On;
        On = v;
        try {
          return b();
        } finally {
          On = x;
        }
      }
    };
    return v;
  };
}
let On = null;
const tc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_t(t)}Modifiers`] || e[`${bn(t)}Modifiers`];
function nc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || pe;
  let i = n;
  const s = t.startsWith("update:"), o = s && tc(r, t.slice(7));
  o && (o.trim && (i = n.map((b) => Se(b) ? b.trim() : b)), o.number && (i = i.map(Hr)));
  let l, u = r[l = ni(t)] || // also try camelCase event handler (#2249)
  r[l = ni(_t(t))];
  !u && s && (u = r[l = ni(bn(t))]), u && Et(
    u,
    e,
    6,
    i
  );
  const v = r[l + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Et(
      v,
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
  if (!Q(e)) {
    const u = (v) => {
      const b = Jo(v, t, !0);
      b && (l = !0, Ye(o, b));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !s && !l ? (de(e) && r.set(e, null), null) : (Y(s) ? s.forEach((u) => o[u] = null) : Ye(o, s), de(e) && r.set(e, o), o);
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
    emit: u,
    render: v,
    renderCache: b,
    props: x,
    data: L,
    setupState: j,
    ctx: J,
    inheritAttrs: $
  } = e, Z = Or(e);
  let V, k;
  try {
    if (n.shapeFlag & 4) {
      const D = i || r, ie = D;
      V = Lt(
        v.call(
          ie,
          D,
          b,
          x,
          j,
          L,
          J
        )
      ), k = l;
    } else {
      const D = t;
      V = Lt(
        D.length > 1 ? D(
          x,
          { attrs: l, slots: o, emit: u }
        ) : D(
          x,
          null
        )
      ), k = t.props ? l : ic(l);
    }
  } catch (D) {
    hn.length = 0, Vr(D, e, 1), V = $t(Wt);
  }
  let K = V;
  if (k && $ !== !1) {
    const D = Object.keys(k), { shapeFlag: ie } = K;
    D.length && ie & 7 && (s && D.some(Fr) && (k = sc(
      k,
      s
    )), K = Ln(K, k, !1, !0));
  }
  if (n.dirs && (K = Ln(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const D = zr(K.type) && Vo(K) || K;
    Ki(D, n.transition);
  }
  return V = K, Or(Z), V;
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
  const { props: r, children: i, component: s } = e, { props: o, children: l, patchFlag: u } = t, v = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return r ? As(r, o, v) : !!o;
    if (u & 8) {
      const b = t.dynamicProps;
      for (let x = 0; x < b.length; x++) {
        const L = b[x];
        if (Zo(o, r, L) && !Wr(v, L))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? As(r, o, v) : !0 : !!o;
  return !1;
}
function As(e, t, n) {
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
  } = e, l = /* @__PURE__ */ ue(i), [u] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const b = e.vnode.dynamicProps;
      for (let x = 0; x < b.length; x++) {
        let L = b[x];
        if (Wr(e.emitsOptions, L))
          continue;
        const j = t[L];
        if (u)
          if (fe(s, L))
            j !== s[L] && (s[L] = j, v = !0);
          else {
            const J = _t(L);
            i[J] = Pi(
              u,
              l,
              J,
              j,
              e,
              !1
            );
          }
        else
          j !== s[L] && (s[L] = j, v = !0);
      }
    }
  } else {
    nl(e, t, i, s) && (v = !0);
    let b;
    for (const x in l)
      (!t || // for camelCase
      !fe(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((b = bn(x)) === x || !fe(t, b))) && (u ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[b] !== void 0) && (i[x] = Pi(
        u,
        l,
        x,
        void 0,
        e,
        !0
      )) : delete i[x]);
    if (s !== l)
      for (const x in s)
        (!t || !fe(t, x)) && (delete s[x], v = !0);
  }
  v && Ht(e.attrs, "set", "");
}
function nl(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let u in t) {
      if (qn(u))
        continue;
      const v = t[u];
      let b;
      i && fe(i, b = _t(u)) ? !s || !s.includes(b) ? n[b] = v : (l || (l = {}))[b] = v : Wr(e.emitsOptions, u) || (!(u in r) || v !== r[u]) && (r[u] = v, o = !0);
    }
  if (s) {
    const u = /* @__PURE__ */ ue(n), v = l || pe;
    for (let b = 0; b < s.length; b++) {
      const x = s[b];
      n[x] = Pi(
        i,
        u,
        x,
        v[x],
        e,
        !fe(v, x)
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
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Q(u)) {
        const { propsDefaults: v } = i;
        if (n in v)
          r = v[n];
        else {
          const b = or(i);
          r = v[n] = u.call(
            null,
            t
          ), b();
        }
      } else
        r = u;
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
  let u = !1;
  if (!Q(e)) {
    const b = (x) => {
      u = !0;
      const [L, j] = rl(x, t, !0);
      Ye(o, L), j && l.push(...j);
    };
    !n && t.mixins.length && t.mixins.forEach(b), e.extends && b(e.extends), e.mixins && e.mixins.forEach(b);
  }
  if (!s && !u)
    return de(e) && r.set(e, Cn), Cn;
  if (Y(s))
    for (let b = 0; b < s.length; b++) {
      const x = _t(s[b]);
      Cs(x) && (o[x] = pe);
    }
  else if (s)
    for (const b in s) {
      const x = _t(b);
      if (Cs(x)) {
        const L = s[b], j = o[x] = Y(L) || Q(L) ? { type: L } : Ye({}, L), J = j.type;
        let $ = !1, Z = !0;
        if (Y(J))
          for (let V = 0; V < J.length; ++V) {
            const k = J[V], K = Q(k) && k.name;
            if (K === "Boolean") {
              $ = !0;
              break;
            } else K === "String" && (Z = !1);
          }
        else
          $ = Q(J) && J.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = $, j[
          1
          /* shouldCastTrue */
        ] = Z, ($ || fe(j, "default")) && l.push(x);
      }
    }
  const v = [o, l];
  return de(e) && r.set(e, v), v;
}
function Cs(e) {
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
    if (Q(s))
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
    createComment: u,
    setText: v,
    setElementText: b,
    parentNode: x,
    nextSibling: L,
    setScopeId: j = Mt,
    insertStaticContent: J
  } = e, $ = (f, m, _, w = null, S = null, C = null, I = void 0, N = null, P = !!m.dynamicChildren) => {
    if (f === m)
      return;
    f && !Un(f, m) && (w = ht(f), Ne(f, S, C, !0), f = null), m.patchFlag === -2 && (P = !1, m.dynamicChildren = null);
    const { type: A, ref: z, shapeFlag: E } = m;
    switch (A) {
      case qr:
        Z(f, m, _, w);
        break;
      case Wt:
        V(f, m, _, w);
        break;
      case fi:
        f == null && k(m, _, w, I);
        break;
      case re:
        it(
          f,
          m,
          _,
          w,
          S,
          C,
          I,
          N,
          P
        );
        break;
      default:
        E & 1 ? ie(
          f,
          m,
          _,
          w,
          S,
          C,
          I,
          N,
          P
        ) : E & 6 ? ze(
          f,
          m,
          _,
          w,
          S,
          C,
          I,
          N,
          P
        ) : (E & 64 || E & 128) && A.process(
          f,
          m,
          _,
          w,
          S,
          C,
          I,
          N,
          P,
          We
        );
    }
    z != null && S ? Yn(z, f && f.ref, C, m || f, !m) : z == null && f && f.ref != null && Yn(f.ref, null, C, f, !0);
  }, Z = (f, m, _, w) => {
    if (f == null)
      r(
        m.el = l(m.children),
        _,
        w
      );
    else {
      const S = m.el = f.el;
      m.children !== f.children && v(S, m.children);
    }
  }, V = (f, m, _, w) => {
    f == null ? r(
      m.el = u(m.children || ""),
      _,
      w
    ) : m.el = f.el;
  }, k = (f, m, _, w) => {
    [f.el, f.anchor] = J(
      f.children,
      m,
      _,
      w,
      f.el,
      f.anchor
    );
  }, K = ({ el: f, anchor: m }, _, w) => {
    let S;
    for (; f && f !== m; )
      S = L(f), r(f, _, w), f = S;
    r(m, _, w);
  }, D = ({ el: f, anchor: m }) => {
    let _;
    for (; f && f !== m; )
      _ = L(f), i(f), f = _;
    i(m);
  }, ie = (f, m, _, w, S, C, I, N, P) => {
    if (m.type === "svg" ? I = "svg" : m.type === "math" && (I = "mathml"), f == null)
      _e(
        m,
        _,
        w,
        S,
        C,
        I,
        N,
        P
      );
    else {
      const A = f.el && f.el._isVueCE ? f.el : null;
      try {
        A && A._beginPatch(), be(
          f,
          m,
          S,
          C,
          I,
          N,
          P
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, _e = (f, m, _, w, S, C, I, N) => {
    let P, A;
    const { props: z, shapeFlag: E, transition: h, dirs: c } = f;
    if (P = f.el = o(
      f.type,
      C,
      z && z.is,
      z
    ), E & 8 ? b(P, f.children) : E & 16 && Te(
      f.children,
      P,
      null,
      w,
      S,
      ui(f, C),
      I,
      N
    ), c && rn(f, null, w, "created"), ve(P, f, f.scopeId, I, w), z) {
      for (const q in z)
        q !== "value" && !qn(q) && s(P, q, null, z[q], C, w);
      "value" in z && s(P, "value", null, z.value, C), (A = z.onVnodeBeforeMount) && Ot(A, w, f);
    }
    c && rn(f, null, w, "beforeMount");
    const O = bc(S, h);
    O && h.beforeEnter(P), r(P, m, _), ((A = z && z.onVnodeMounted) || O || c) && ct(() => {
      A && Ot(A, w, f), O && h.enter(P), c && rn(f, null, w, "mounted");
    }, S);
  }, ve = (f, m, _, w, S) => {
    if (_ && j(f, _), w)
      for (let C = 0; C < w.length; C++)
        j(f, w[C]);
    if (S) {
      let C = S.subTree;
      if (m === C || ul(C.type) && (C.ssContent === m || C.ssFallback === m)) {
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
  }, Te = (f, m, _, w, S, C, I, N, P = 0) => {
    for (let A = P; A < f.length; A++) {
      const z = f[A] = N ? Ut(f[A]) : Lt(f[A]);
      $(
        null,
        z,
        m,
        _,
        w,
        S,
        C,
        I,
        N
      );
    }
  }, be = (f, m, _, w, S, C, I) => {
    const N = m.el = f.el;
    let { patchFlag: P, dynamicChildren: A, dirs: z } = m;
    P |= f.patchFlag & 16;
    const E = f.props || pe, h = m.props || pe;
    let c;
    if (_ && sn(_, !1), (c = h.onVnodeBeforeUpdate) && Ot(c, _, m, f), z && rn(m, f, _, "beforeUpdate"), _ && sn(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    A && (!f.dynamicChildren || f.dynamicChildren.length !== A.length) && (P = 0, I = !1, A = null), (E.innerHTML && h.innerHTML == null || E.textContent && h.textContent == null) && b(N, ""), A ? xe(
      f.dynamicChildren,
      A,
      N,
      _,
      w,
      ui(m, S),
      C
    ) : I || ee(
      f,
      m,
      N,
      null,
      _,
      w,
      ui(m, S),
      C,
      !1
    ), P > 0) {
      if (P & 16)
        Ve(N, E, h, _, S);
      else if (P & 2 && E.class !== h.class && s(N, "class", null, h.class, S), P & 4 && s(N, "style", E.style, h.style, S), P & 8) {
        const O = m.dynamicProps;
        for (let q = 0; q < O.length; q++) {
          const B = O[q], se = E[B], te = h[B];
          (te !== se || B === "value") && s(N, B, se, te, S, _);
        }
      }
      P & 1 && f.children !== m.children && b(N, m.children);
    } else !I && A == null && Ve(N, E, h, _, S);
    ((c = h.onVnodeUpdated) || z) && ct(() => {
      c && Ot(c, _, m, f), z && rn(m, f, _, "updated");
    }, w);
  }, xe = (f, m, _, w, S, C, I) => {
    for (let N = 0; N < m.length; N++) {
      const P = f[N], A = m[N], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Un(P, A) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? x(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      $(
        P,
        A,
        z,
        null,
        w,
        S,
        C,
        I,
        !0
      );
    }
  }, Ve = (f, m, _, w, S) => {
    if (m !== _) {
      if (m !== pe)
        for (const C in m)
          !qn(C) && !(C in _) && s(
            f,
            C,
            m[C],
            null,
            S,
            w
          );
      for (const C in _) {
        if (qn(C)) continue;
        const I = _[C], N = m[C];
        I !== N && C !== "value" && s(f, C, N, I, S, w);
      }
      "value" in _ && s(f, "value", m.value, _.value, S);
    }
  }, it = (f, m, _, w, S, C, I, N, P) => {
    const A = m.el = f ? f.el : l(""), z = m.anchor = f ? f.anchor : l("");
    let { patchFlag: E, dynamicChildren: h, slotScopeIds: c } = m;
    c && (N = N ? N.concat(c) : c), f == null ? (r(A, _, w), r(z, _, w), Te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      z,
      S,
      C,
      I,
      N,
      P
    )) : E > 0 && E & 64 && h && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === h.length ? (xe(
      f.dynamicChildren,
      h,
      _,
      S,
      C,
      I,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || S && m === S.subTree) && ll(
      f,
      m,
      !0
      /* shallow */
    )) : ee(
      f,
      m,
      _,
      z,
      S,
      C,
      I,
      N,
      P
    );
  }, ze = (f, m, _, w, S, C, I, N, P) => {
    m.slotScopeIds = N, f == null ? m.shapeFlag & 512 ? S.ctx.activate(
      m,
      _,
      w,
      I,
      P
    ) : Be(
      m,
      _,
      w,
      S,
      C,
      I,
      P
    ) : Xe(f, m, P);
  }, Be = (f, m, _, w, S, C, I) => {
    const N = f.component = Ac(
      f,
      w,
      S
    );
    if (Gi(f) && (N.ctx.renderer = We), wc(N, !1, I), N.asyncDep) {
      if (S && S.registerDep(N, ye, I), !f.el) {
        const P = N.subTree = $t(Wt);
        V(null, P, m, _), f.placeholder = P.el;
      }
    } else
      ye(
        N,
        f,
        m,
        _,
        S,
        C,
        I
      );
  }, Xe = (f, m, _) => {
    const w = m.component = f.component;
    if (oc(f, m, _))
      if (w.asyncDep && !w.asyncResolved) {
        ne(w, m, _);
        return;
      } else
        w.next = m, w.update();
    else
      m.el = f.el, w.vnode = m;
  }, ye = (f, m, _, w, S, C, I) => {
    const N = () => {
      if (f.isMounted) {
        let { next: E, bu: h, u: c, parent: O, vnode: q } = f;
        {
          const Le = al(f);
          if (Le) {
            E && (E.el = q.el, ne(f, E, I)), Le.asyncDep.then(() => {
              ct(() => {
                f.isUnmounted || A();
              }, S);
            });
            return;
          }
        }
        let B = E, se;
        sn(f, !1), E ? (E.el = q.el, ne(f, E, I)) : E = q, h && Sr(h), (se = E.props && E.props.onVnodeBeforeUpdate) && Ot(se, O, E, q), sn(f, !0);
        const te = xs(f), we = f.subTree;
        f.subTree = te, $(
          we,
          te,
          // parent may have changed if it's in a teleport
          x(we.el),
          // anchor may have changed if it's in a fragment
          ht(we),
          f,
          S,
          C
        ), E.el = te.el, B === null && lc(f, te.el), c && ct(c, S), (se = E.props && E.props.onVnodeUpdated) && ct(
          () => Ot(se, O, E, q),
          S
        );
      } else {
        let E;
        const { el: h, props: c } = m, { bm: O, m: q, parent: B, root: se, type: te } = f, we = Xn(m);
        sn(f, !1), O && Sr(O), !we && (E = c && c.onVnodeBeforeMount) && Ot(E, B, m), sn(f, !0);
        {
          se.ce && se.ce._hasShadowRoot() && se.ce._injectChildStyle(
            te,
            f.parent ? f.parent.type : void 0
          );
          const Le = f.subTree = xs(f);
          $(
            null,
            Le,
            _,
            w,
            f,
            S,
            C
          ), m.el = Le.el;
        }
        if (q && ct(q, S), !we && (E = c && c.onVnodeMounted)) {
          const Le = m;
          ct(
            () => Ot(E, B, Le),
            S
          );
        }
        (m.shapeFlag & 256 || B && Xn(B.vnode) && B.vnode.shapeFlag & 256) && f.a && ct(f.a, S), f.isMounted = !0, m = _ = w = null;
      }
    };
    f.scope.on();
    const P = f.effect = new _o(N);
    f.scope.off();
    const A = f.update = P.run.bind(P), z = f.job = P.runIfDirty.bind(P);
    z.i = f, z.id = f.uid, P.scheduler = () => qi(z), sn(f, !0), A();
  }, ne = (f, m, _) => {
    m.component = f;
    const w = f.vnode.props;
    f.vnode = m, f.next = null, cc(f, m.props, w, _), pc(f, m.children, _), Vt(), ys(f), zt();
  }, ee = (f, m, _, w, S, C, I, N, P = !1) => {
    const A = f && f.children, z = f ? f.shapeFlag : 0, E = m.children, { patchFlag: h, shapeFlag: c } = m;
    if (h > 0) {
      if (h & 128) {
        Ue(
          A,
          E,
          _,
          w,
          S,
          C,
          I,
          N,
          P
        );
        return;
      } else if (h & 256) {
        ke(
          A,
          E,
          _,
          w,
          S,
          C,
          I,
          N,
          P
        );
        return;
      }
    }
    c & 8 ? (z & 16 && st(A, S, C), E !== A && b(_, E)) : z & 16 ? c & 16 ? Ue(
      A,
      E,
      _,
      w,
      S,
      C,
      I,
      N,
      P
    ) : st(A, S, C, !0) : (z & 8 && b(_, ""), c & 16 && Te(
      E,
      _,
      w,
      S,
      C,
      I,
      N,
      P
    ));
  }, ke = (f, m, _, w, S, C, I, N, P) => {
    f = f || Cn, m = m || Cn;
    const A = f.length, z = m.length, E = Math.min(A, z);
    let h;
    for (h = 0; h < E; h++) {
      const c = m[h] = P ? Ut(m[h]) : Lt(m[h]);
      $(
        f[h],
        c,
        _,
        null,
        S,
        C,
        I,
        N,
        P
      );
    }
    A > z ? st(
      f,
      S,
      C,
      !0,
      !1,
      E
    ) : Te(
      m,
      _,
      w,
      S,
      C,
      I,
      N,
      P,
      E
    );
  }, Ue = (f, m, _, w, S, C, I, N, P) => {
    let A = 0;
    const z = m.length;
    let E = f.length - 1, h = z - 1;
    for (; A <= E && A <= h; ) {
      const c = f[A], O = m[A] = P ? Ut(m[A]) : Lt(m[A]);
      if (Un(c, O))
        $(
          c,
          O,
          _,
          null,
          S,
          C,
          I,
          N,
          P
        );
      else
        break;
      A++;
    }
    for (; A <= E && A <= h; ) {
      const c = f[E], O = m[h] = P ? Ut(m[h]) : Lt(m[h]);
      if (Un(c, O))
        $(
          c,
          O,
          _,
          null,
          S,
          C,
          I,
          N,
          P
        );
      else
        break;
      E--, h--;
    }
    if (A > E) {
      if (A <= h) {
        const c = h + 1, O = c < z ? m[c].el : w;
        for (; A <= h; )
          $(
            null,
            m[A] = P ? Ut(m[A]) : Lt(m[A]),
            _,
            O,
            S,
            C,
            I,
            N,
            P
          ), A++;
      }
    } else if (A > h)
      for (; A <= E; )
        Ne(f[A], S, C, !0), A++;
    else {
      const c = A, O = A, q = /* @__PURE__ */ new Map();
      for (A = O; A <= h; A++) {
        const Ae = m[A] = P ? Ut(m[A]) : Lt(m[A]);
        Ae.key != null && q.set(Ae.key, A);
      }
      let B, se = 0;
      const te = h - O + 1;
      let we = !1, Le = 0;
      const Re = new Array(te);
      for (A = 0; A < te; A++) Re[A] = 0;
      for (A = c; A <= E; A++) {
        const Ae = f[A];
        if (se >= te) {
          Ne(Ae, S, C, !0);
          continue;
        }
        let je;
        if (Ae.key != null)
          je = q.get(Ae.key);
        else
          for (B = O; B <= h; B++)
            if (Re[B - O] === 0 && Un(Ae, m[B])) {
              je = B;
              break;
            }
        je === void 0 ? Ne(Ae, S, C, !0) : (Re[je - O] = A + 1, je >= Le ? Le = je : we = !0, $(
          Ae,
          m[je],
          _,
          null,
          S,
          C,
          I,
          N,
          P
        ), se++);
      }
      const ot = we ? yc(Re) : Cn;
      for (B = ot.length - 1, A = te - 1; A >= 0; A--) {
        const Ae = O + A, je = m[Ae], Qt = m[Ae + 1], Kt = Ae + 1 < z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Qt.el || cl(Qt)
        ) : w;
        Re[A] === 0 ? $(
          null,
          je,
          _,
          Kt,
          S,
          C,
          I,
          N,
          P
        ) : we && (B < 0 || A !== ot[B] ? He(je, _, Kt, 2) : B--);
      }
    }
  }, He = (f, m, _, w, S = null) => {
    const { el: C, type: I, transition: N, children: P, shapeFlag: A } = f;
    if (A & 6) {
      He(f.component.subTree, m, _, w);
      return;
    }
    if (A & 128) {
      f.suspense.move(m, _, w);
      return;
    }
    if (A & 64) {
      I.move(f, m, _, We);
      return;
    }
    if (I === re) {
      r(C, m, _);
      for (let E = 0; E < P.length; E++)
        He(P[E], m, _, w);
      r(f.anchor, m, _);
      return;
    }
    if (I === fi) {
      K(f, m, _);
      return;
    }
    if (w !== 2 && A & 1 && N)
      if (w === 0)
        N.persisted && !C[ai] ? r(C, m, _) : (N.beforeEnter(C), r(C, m, _), ct(() => N.enter(C), S));
      else {
        const { leave: E, delayLeave: h, afterLeave: c } = N, O = () => {
          f.ctx.isUnmounted ? i(C) : r(C, m, _);
        }, q = () => {
          const B = C._isLeaving || !!C[ai];
          C._isLeaving && C[ai](
            !0
            /* cancelled */
          ), N.persisted && !B ? O() : E(C, () => {
            O(), c && c();
          });
        };
        h ? h(C, O, q) : q();
      }
    else
      r(C, m, _);
  }, Ne = (f, m, _, w = !1, S = !1) => {
    const {
      type: C,
      props: I,
      ref: N,
      children: P,
      dynamicChildren: A,
      shapeFlag: z,
      patchFlag: E,
      dirs: h,
      cacheIndex: c,
      memo: O
    } = f;
    if (E === -2 && (S = !1), N != null && (Vt(), Yn(N, null, _, f, !0), zt()), c != null && (m.renderCache[c] = void 0), z & 256) {
      m.ctx.deactivate(f);
      return;
    }
    const q = z & 1 && h, B = !Xn(f);
    let se;
    if (B && (se = I && I.onVnodeBeforeUnmount) && Ot(se, m, f), z & 6)
      Pe(f.component, _, w);
    else {
      if (z & 128) {
        f.suspense.unmount(_, w);
        return;
      }
      q && rn(f, null, m, "beforeUnmount"), z & 64 ? f.type.remove(
        f,
        m,
        _,
        We,
        w
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== re || E > 0 && E & 64) ? st(
        A,
        m,
        _,
        !1,
        !0
      ) : (C === re && E & 384 || !S && z & 16) && st(P, m, _), w && Je(f);
    }
    const te = O != null && c == null;
    (B && (se = I && I.onVnodeUnmounted) || q || te) && ct(() => {
      se && Ot(se, m, f), q && rn(f, null, m, "unmounted"), te && (f.el = null);
    }, _);
  }, Je = (f) => {
    const { type: m, el: _, anchor: w, transition: S } = f;
    if (m === re) {
      oe(_, w);
      return;
    }
    if (m === fi) {
      D(f);
      return;
    }
    const C = () => {
      i(_), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (f.shapeFlag & 1 && S && !S.persisted) {
      const { leave: I, delayLeave: N } = S, P = () => I(_, C);
      N ? N(f.el, C, P) : P();
    } else
      C();
  }, oe = (f, m) => {
    let _;
    for (; f !== m; )
      _ = L(f), i(f), f = _;
    i(m);
  }, Pe = (f, m, _) => {
    const { bum: w, scope: S, job: C, subTree: I, um: N, m: P, a: A } = f;
    ws(P), ws(A), w && Sr(w), S.stop(), C && (C.flags |= 8, Ne(I, f, m, _)), N && ct(N, m), ct(() => {
      f.isUnmounted = !0;
    }, m);
  }, st = (f, m, _, w = !1, S = !1, C = 0) => {
    for (let I = C; I < f.length; I++)
      Ne(f[I], m, _, w, S);
  }, ht = (f) => {
    if (f.shapeFlag & 6)
      return ht(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const m = L(f.anchor || f.el), _ = m && m[Ma];
    return _ ? L(_) : m;
  };
  let yt = !1;
  const Ze = (f, m, _) => {
    let w;
    f == null ? m._vnode && (Ne(m._vnode, null, null, !0), w = m._vnode.component) : $(
      m._vnode || null,
      f,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = f, yt || (yt = !0, ys(w), Fo(), yt = !1);
  }, We = {
    p: $,
    um: Ne,
    m: He,
    r: Je,
    mt: Be,
    mc: Te,
    pc: ee,
    pbc: xe,
    n: ht,
    o: e
  };
  return {
    render: Ze,
    hydrate: void 0,
    createApp: ec(Ze)
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
  const u = e.length;
  for (r = 0; r < u; r++) {
    const v = e[r];
    if (v !== 0) {
      if (i = n[n.length - 1], e[i] < v) {
        t[r] = i, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, e[n[l]] < v ? s = l + 1 : o = l;
      v < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
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
const re = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), Wt = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), hn = [];
let pt = null;
function F(e = !1) {
  hn.push(pt = e ? null : []);
}
function fl() {
  hn.pop(), pt = hn[hn.length - 1] || null;
}
let tr = 1;
function Rs(e, t = !1) {
  tr += e, e < 0 && pt && t && (pt.hasOnce = !0);
}
function dl(e) {
  return e.dynamicChildren = tr > 0 ? pt || Cn : null, fl(), tr > 0 && pt && pt.push(e), e;
}
function U(e, t, n, r, i, s) {
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
const hl = ({ key: e }) => e ?? null, Ar = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Se(e) || /* @__PURE__ */ Ge(e) || Q(e) ? { i: mt, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, r = 0, i = null, s = e === re ? 0 : 1, o = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hl(t),
    ref: t && Ar(t),
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
    ctx: mt
  };
  return l ? (Lr(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= Se(n) ? 8 : 16), tr > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  pt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && pt.push(u), u;
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
    return n && Lr(l, n), tr > 0 && !s && pt && (l.shapeFlag & 6 ? pt[pt.indexOf(e)] = l : pt.push(l)), l.patchFlag = -2, l;
  }
  if (Pc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: l, style: u } = t;
    l && !Se(l) && (t.class = wn(l)), de(u) && (/* @__PURE__ */ Wi(u) && !Y(u) && (u = Ye({}, u)), t.style = Ui(u));
  }
  const o = Se(e) ? 1 : ul(e) ? 128 : zr(e) ? 64 : de(e) ? 4 : Q(e) ? 2 : 0;
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
function Tc(e) {
  return e ? /* @__PURE__ */ Wi(e) || tl(e) ? Ye({}, e) : e : null;
}
function Ln(e, t, n = !1, r = !1) {
  const { props: i, ref: s, patchFlag: o, children: l, transition: u } = e, v = t ? Ec(i || {}, t) : i, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && hl(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Y(s) ? s.concat(Ar(t)) : [s, Ar(t)] : Ar(t)
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
    patchFlag: t && e.type !== re ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Ln(e.ssContent),
    ssFallback: e.ssFallback && Ln(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && r && Ki(
    b,
    u.clone(b)
  ), b;
}
function ce(e = " ", t = 0) {
  return $t(qr, null, e, t);
}
function Ie(e = "", t = !1) {
  return t ? (F(), _c(Wt, null, e)) : $t(Wt, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? $t(Wt) : Y(e) ? $t(
    re,
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
      !i && !tl(t) ? t._ctx = mt : i === 3 && mt && (mt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Q(t)) {
    if (r & 65) {
      Lr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: mt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [ce(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ec(...e) {
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
  Et(e, t, 7, [
    n,
    r
  ]);
}
const Sc = Xo();
let xc = 0;
function Ac(e, t, n) {
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
let rt = null;
const Cc = () => rt || mt;
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
    (n) => rt = n
  ), nr = t(
    "__VUE_SSR_SETTERS__",
    (n) => rr = n
  );
}
const or = (e) => {
  const t = rt;
  return Ir(e), e.scope.on(), () => {
    e.scope.off(), Ir(t);
  };
}, Os = () => {
  rt && rt.scope.off(), Ir(null);
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
    if (zt(), s(), (l || e.sp) && !Xn(e) && zo(e), l) {
      if (o.then(Os, Os), t)
        return o.then((u) => {
          nr(!0);
          try {
            Ns(e, u, t);
          } finally {
            nr(!1);
          }
        }).catch((u) => {
          Vr(u, e, 0);
        });
      e.asyncDep = o;
    } else
      Ns(e, o);
  } else
    bl(e);
}
function Ns(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = Io(t)), bl(e);
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
      zt(), i();
    }
  }
}
const Oc = {
  get(e, t) {
    return Ke(e, "get", ""), e[t];
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
  return Q(e) && "__vccOpts" in e;
}
const le = (e, t) => /* @__PURE__ */ Sa(e, t, rr), Lc = "3.5.42";
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
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
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
          n[l] == null && Bn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Bn(r, o, "");
    for (const o in n) {
      o === "display" && (s = !0);
      const l = n[o];
      l != null ? zc(
        e,
        o,
        !Se(t) && t ? t[o] : void 0,
        l
      ) || Bn(r, o, l) : Bn(r, o, "");
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
function Bn(e, t, n) {
  if (Y(n))
    n.forEach((r) => Bn(e, t, r));
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
function zc(e, t, n, r) {
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
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
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
function Bc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Us = /* @__PURE__ */ Symbol("_vei");
function Wc(e, t, n, r, i = null) {
  const s = e[Us] || (e[Us] = {}), o = s[t];
  if (r && o)
    o.value = r;
  else {
    const [l, u] = Gc(t);
    if (r) {
      const v = s[t] = Jc(
        r,
        i
      );
      cn(e, l, v, u);
    } else o && (Bc(e, l, o, u), s[t] = void 0);
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
      for (let u = 0; u < o.length && !r._stopped; u++) {
        const v = o[u];
        v && Et(
          v,
          t,
          5,
          l
        );
      }
    } else
      Et(
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
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hs(t) && Q(n));
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
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Hr(e.value) : e.value, u = t ?? "";
    if (l === u)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === u) || (e.value = u);
  }
}, et = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, cn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? Hr(kr(u)) : kr(u)
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
          const u = typeof l;
          u === "string" || u === "number" ? o.selected = t.some((v) => String(v) === String(l)) : o.selected = Xl(t, l) > -1;
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
}, Tr = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const l = iu[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...s);
  }));
}, su = /* @__PURE__ */ Ye({ patchProp: Zc }, kc);
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
    !Q(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
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
function zs(e, t) {
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
    var r, i, s, o, l = [], u = !0, v = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(u = (r = s.call(n)).done) && (l.push(r.value), l.length !== t); u = !0) ;
    } catch (b) {
      v = !0, i = b;
    } finally {
      try {
        if (!u && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (v) throw i;
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
    if (typeof e == "string") return zs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zs(e, t) : void 0;
  }
}
const gl = Object.entries, Bs = Object.setPrototypeOf, bu = Object.isFrozen, yu = Object.getPrototypeOf, gu = Object.getOwnPropertyDescriptor;
let Me = Object.freeze, Fe = Object.seal, An = Object.create, _l = typeof Reflect < "u" && Reflect, Ii = _l.apply, Mi = _l.construct;
Me || (Me = function(t) {
  return t;
});
Fe || (Fe = function(t) {
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
const an = Oe(Array.prototype.forEach), _u = Oe(Array.prototype.lastIndexOf), Ws = Oe(Array.prototype.pop), Hn = Oe(Array.prototype.push), vu = Oe(Array.prototype.splice), Nn = Array.isArray, Wn = Oe(String.prototype.toLowerCase), bi = Oe(String.prototype.toString), qs = Oe(String.prototype.match), jn = Oe(String.prototype.replace), Ks = Oe(String.prototype.indexOf), Tu = Oe(String.prototype.trim), Eu = Oe(Number.prototype.toString), Su = Oe(Boolean.prototype.toString), Gs = typeof BigInt > "u" ? null : Oe(BigInt.prototype.toString), Ys = typeof Symbol > "u" ? null : Oe(Symbol.prototype.toString), ut = Oe(Object.prototype.hasOwnProperty), $n = Oe(Object.prototype.toString), qe = Oe(RegExp.prototype.test), on = xu(TypeError);
function Oe(e) {
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
function ae(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wn;
  if (Bs && Bs(e, null), !Nn(t))
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
function Au(e) {
  for (let t = 0; t < e.length; t++)
    ut(e, t) || (e[t] = null);
  return e;
}
function dt(e) {
  const t = An(null);
  for (const r of gl(e)) {
    var n = hu(r, 2);
    const i = n[0], s = n[1];
    ut(e, i) && (Nn(s) ? t[i] = Au(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = dt(s) : t[i] = s);
  }
  return t;
}
function Cu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Eu(e);
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
        return Oe(r.get);
      if (typeof r.value == "function")
        return Oe(r.value);
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
    return qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const Xs = Me(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = Me(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = Me(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ru = Me(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = Me(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ou = Me(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Js = Me(["#text"]), Zs = Me(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = Me(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Qs = Me(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Er = Me(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Nu = Fe(/{{[\w\W]*|^[\w\W]*}}/g), Pu = Fe(/<%[\w\W]*|^[\w\W]*%>/g), Lu = Fe(/\${[\w\W]*/g), Iu = Fe(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = Fe(/^aria-[\-\w]+$/), eo = Fe(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ku = Fe(/^(?:\w+script|data):/i), Du = Fe(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Fu = Fe(/^html$/i), Uu = Fe(/^[a-z][.\w]*(-[.\w]+)+$/i), to = Fe(/<[/\w!]/g), no = Fe(/<[/\w]/g), Hu = Fe(/<\/no(script|embed|frames)/i), ju = Fe(/\/>/i), ft = {
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
}, vl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], $u = Me(ae({}, vl)), Vu = (function() {
  const e = {};
  return an(vl, (t) => {
    e[t] = Fe(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Me(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Bu = function(t, n) {
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
  return ut(t, n) && Nn(t[n]) ? ae(i.base ? dt(i.base) : {}, t[n], i.transform) : r;
}, Ti = function(t, n, r) {
  const i = ut(t, n) ? t[n] : void 0;
  return i && typeof i == "object" ? dt(i) : r();
};
function Tl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (M) => Tl(M);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ft.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, l = e.Element, u = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const b = e.DOMParser, x = e.trustedTypes, L = l.prototype, j = gt(L, "cloneNode"), J = gt(L, "remove"), $ = gt(L, "nextSibling"), Z = gt(L, "childNodes"), V = gt(L, "parentNode"), k = gt(L, "shadowRoot"), K = gt(L, "attributes"), D = o && o.prototype ? gt(o.prototype, "nodeType") : null, ie = o && o.prototype ? gt(o.prototype, "nodeName") : null, _e = o && o.prototype ? gt(o.prototype, "ownerDocument") : null, ve = function(a) {
    return D ? D(a) : a.nodeType;
  }, Te = function(a) {
    return ie ? ie(a) : a.nodeName;
  };
  if (typeof s == "function") {
    const M = n.createElement("template");
    M.content && M.content.ownerDocument && (n = M.content.ownerDocument);
  }
  let be, xe = "", Ve, it = !1, ze = 0;
  const Be = function() {
    if (ze > 0)
      throw on('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Xe = function(a) {
    Be(), ze++;
    try {
      return be.createHTML(a);
    } finally {
      ze--;
    }
  }, ye = function(a) {
    Be(), ze++;
    try {
      return be.createScriptURL(a);
    } finally {
      ze--;
    }
  }, ne = function() {
    return it || (Ve = Bu(x, i), it = !0), Ve;
  }, ee = n, ke = ee.implementation, Ue = ee.createNodeIterator, He = ee.createDocumentFragment, Ne = ee.getElementsByTagName, Je = r.importNode;
  let oe = ro();
  t.isSupported = typeof gl == "function" && typeof V == "function" && ke && ke.createHTMLDocument !== void 0;
  const Pe = Nu, st = Pu, ht = Lu, yt = Iu, Ze = Mu, We = ku, St = Du, f = Uu;
  let m = eo, _ = null;
  const w = ae({}, [...Xs, ...yi, ...gi, ..._i, ...Js]);
  let S = null;
  const C = ae({}, [...Zs, ...vi, ...Qs, ...Er]);
  let I = Object.seal(An(null, {
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
  })), N = null, P = null;
  const A = Object.seal(An(null, {
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
  let z = !0, E = !0, h = !1, c = !0, O = !1, q = !0, B = !1, se = !1, te = null, we = null, Le = !1, Re = !1, ot = !1, Ae = !1, je = !0, Qt = !1;
  const Kt = "user-content-";
  let en = !0, tn = !1, xt = {}, At = null;
  const Ct = ae({}, [
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
  const yn = ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let In = null;
  const Mn = ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ar = "http://www.w3.org/1998/Math/MathML", cr = "http://www.w3.org/2000/svg", wt = "http://www.w3.org/1999/xhtml";
  let gn = wt, Gr = !1, Yr = null;
  const Sl = ae({}, [ar, cr, wt], bi), Ji = Me(["mi", "mo", "mn", "ms", "mtext"]);
  let Xr = ae({}, Ji);
  const Zi = Me(["annotation-xml"]);
  let Jr = ae({}, Zi);
  const xl = ae({}, ["title", "style", "font", "a", "script"]);
  let kn = null;
  const Al = ["application/xhtml+xml", "text/html"], Cl = "text/html";
  let Ce = null, _n = null;
  const wl = n.createElement("form"), Qi = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Zr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (_n && _n === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = dt(a), kn = // eslint-disable-next-line unicorn/prefer-includes
    Al.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Cl : a.PARSER_MEDIA_TYPE, Ce = kn === "application/xhtml+xml" ? bi : Wn, _ = Yt(a, "ALLOWED_TAGS", w, {
      transform: Ce
    }), S = Yt(a, "ALLOWED_ATTR", C, {
      transform: Ce
    }), Yr = Yt(a, "ALLOWED_NAMESPACES", Sl, {
      transform: bi
    }), In = Yt(a, "ADD_URI_SAFE_ATTR", Mn, {
      transform: Ce,
      base: Mn
    }), lr = Yt(a, "ADD_DATA_URI_TAGS", yn, {
      transform: Ce,
      base: yn
    }), At = Yt(a, "FORBID_CONTENTS", Ct, {
      transform: Ce
    }), N = Yt(a, "FORBID_TAGS", dt({}), {
      transform: Ce
    }), P = Yt(a, "FORBID_ATTR", dt({}), {
      transform: Ce
    }), xt = ut(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? dt(a.USE_PROFILES) : a.USE_PROFILES : !1, z = a.ALLOW_ARIA_ATTR !== !1, E = a.ALLOW_DATA_ATTR !== !1, h = a.ALLOW_UNKNOWN_PROTOCOLS || !1, c = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, O = a.SAFE_FOR_TEMPLATES || !1, q = a.SAFE_FOR_XML !== !1, B = a.WHOLE_DOCUMENT || !1, Re = a.RETURN_DOM || !1, ot = a.RETURN_DOM_FRAGMENT || !1, Ae = a.RETURN_TRUSTED_TYPE || !1, Le = a.FORCE_BODY || !1, je = a.SANITIZE_DOM !== !1, Qt = a.SANITIZE_NAMED_PROPS || !1, en = a.KEEP_CONTENT !== !1, tn = a.IN_PLACE || !1, m = wu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : eo, gn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : wt, Xr = Ti(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ae({}, Ji)
      // Default built-in map
    ), Jr = Ti(
      a,
      "HTML_INTEGRATION_POINTS",
      () => ae({}, Zi)
      // Default built-in map
    );
    const y = Ti(a, "CUSTOM_ELEMENT_HANDLING", () => An(null));
    if (I = An(null), ut(y, "tagNameCheck") && Qi(y.tagNameCheck) && (I.tagNameCheck = y.tagNameCheck), ut(y, "attributeNameCheck") && Qi(y.attributeNameCheck) && (I.attributeNameCheck = y.attributeNameCheck), ut(y, "allowCustomizedBuiltInElements") && typeof y.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = y.allowCustomizedBuiltInElements), Fe(I), O && (E = !1), ot && (Re = !0), xt && (_ = ae({}, Js), S = An(null), xt.html === !0 && (ae(_, Xs), ae(S, Zs)), xt.svg === !0 && (ae(_, yi), ae(S, vi), ae(S, Er)), xt.svgFilters === !0 && (ae(_, gi), ae(S, vi), ae(S, Er)), xt.mathMl === !0 && (ae(_, _i), ae(S, Qs), ae(S, Er))), A.tagCheck = null, A.attributeCheck = null, ut(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? A.tagCheck = a.ADD_TAGS : Nn(a.ADD_TAGS) && (_ === w && (_ = dt(_)), ae(_, a.ADD_TAGS, Ce))), ut(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? A.attributeCheck = a.ADD_ATTR : Nn(a.ADD_ATTR) && (S === C && (S = dt(S)), ae(S, a.ADD_ATTR, Ce))), ut(a, "ADD_FORBID_CONTENTS") && Nn(a.ADD_FORBID_CONTENTS) && (At === Ct && (At = dt(At)), ae(At, a.ADD_FORBID_CONTENTS, Ce)), en && (_["#text"] = !0), B && ae(_, ["html", "head", "body"]), _.table && (ae(_, ["tbody"]), delete N.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw on('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw on('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = be;
      be = a.TRUSTED_TYPES_POLICY;
      try {
        xe = Xe("");
      } catch (H) {
        throw be = R, H;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (be = void 0, xe = "") : (be === void 0 && (be = ne()), be && typeof xe == "string" && (xe = Xe("")));
    Me && Me(a), _n = a;
  }, es = ae({}, [...yi, ...gi, ...Ru]), ts = ae({}, [..._i, ...Ou]), Rl = function(a, y, R) {
    return y.namespaceURI === wt ? a === "svg" : y.namespaceURI === ar ? a === "svg" && (R === "annotation-xml" || Xr[R]) : !!es[a];
  }, Ol = function(a, y, R) {
    return y.namespaceURI === wt ? a === "math" : y.namespaceURI === cr ? a === "math" && Jr[R] : !!ts[a];
  }, Nl = function(a, y, R) {
    return y.namespaceURI === cr && !Jr[R] || y.namespaceURI === ar && !Xr[R] ? !1 : !ts[a] && (xl[a] || !es[a]);
  }, Pl = function(a) {
    let y = V(a);
    (!y || !y.tagName) && (y = {
      namespaceURI: gn,
      tagName: "template"
    });
    const R = Wn(a.tagName), H = Wn(y.tagName);
    return Yr[a.namespaceURI] ? a.namespaceURI === cr ? Rl(R, y, H) : a.namespaceURI === ar ? Ol(R, y, H) : a.namespaceURI === wt ? Nl(R, y, H) : !!(kn === "application/xhtml+xml" && Yr[a.namespaceURI]) : !1;
  }, Gt = function(a) {
    Hn(t.removed, {
      element: a
    });
    try {
      V(a).removeChild(a);
    } catch {
      if (J(a), !V(a))
        throw on("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ns = function(a, y, R) {
    try {
      a.removeAttributeNode(y);
    } catch {
      try {
        a.removeAttribute(R);
      } catch {
      }
    }
  }, ur = function(a) {
    fr(a);
    const y = Z(a);
    if (y) {
      const H = [];
      an(y, (W) => {
        Hn(H, W);
      }), an(H, (W) => {
        try {
          J(W);
        } catch {
        }
      });
    }
    const R = K(a);
    if (R)
      for (let H = R.length - 1; H >= 0; --H) {
        const W = R[H], X = W && W.name;
        typeof X == "string" && ns(a, W, X);
      }
  }, nn = function(a, y, R) {
    if (!R)
      try {
        R = y.getAttributeNode(a);
      } catch {
        R = null;
      }
    Hn(t.removed, {
      attribute: R || null,
      from: y
    });
    try {
      R ? y.removeAttributeNode(R) : y.removeAttribute(a);
    } catch {
      try {
        y.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (Re || ot)
        try {
          Gt(y);
        } catch {
        }
      else
        try {
          y.setAttribute(a, "");
        } catch {
        }
  }, Ll = function(a) {
    const y = K(a);
    if (y)
      for (let R = y.length - 1; R >= 0; --R) {
        const H = y[R], W = H && H.name;
        typeof W != "string" || S[Ce(W)] || ns(a, H, W);
      }
  }, fr = function(a) {
    const y = [a];
    for (; y.length > 0; ) {
      const R = y.pop();
      ve(R) === ft.element && Ll(R);
      const W = Z(R);
      if (W)
        for (let X = W.length - 1; X >= 0; --X)
          y.push(W[X]);
    }
  }, rs = function(a, y) {
    return q ? a === "patchsrc" ? !0 : a === "for" && y !== "label" && y !== "output" : !1;
  }, Il = function(a) {
    if (!q)
      return;
    const y = [a];
    for (; y.length > 0; ) {
      const R = y.pop(), H = ve(R);
      if (H === ft.processingInstruction || H === ft.comment && qe(no, R.data)) {
        try {
          J(R);
        } catch {
        }
        continue;
      }
      if (H === ft.element) {
        const X = R, he = Ce(Te(R));
        try {
          X.hasAttribute && X.hasAttribute("patchsrc") && X.removeAttribute("patchsrc"), X.hasAttribute && X.hasAttribute("for") && rs("for", he) && X.removeAttribute("for");
        } catch {
        }
      }
      const W = Z(R);
      if (W)
        for (let X = W.length - 1; X >= 0; --X)
          y.push(W[X]);
    }
  }, is = function(a) {
    let y = null, R = null;
    if (Le)
      a = "<remove></remove>" + a;
    else {
      const X = qs(a, /^[\r\n\t ]+/);
      R = X && X[0];
    }
    kn === "application/xhtml+xml" && gn === wt && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const H = be ? Xe(a) : a;
    if (gn === wt)
      try {
        y = new b().parseFromString(H, kn);
      } catch {
      }
    if (!y || !y.documentElement) {
      y = ke.createDocument(gn, "template", null);
      try {
        y.documentElement.innerHTML = Gr ? xe : H;
      } catch {
      }
    }
    const W = y.body || y.documentElement;
    return a && R && W.insertBefore(n.createTextNode(R), W.childNodes[0] || null), gn === wt ? Ne.call(y, B ? "html" : "body")[0] : B ? y.documentElement : W;
  }, ss = function(a) {
    const y = _e ? _e(a) : a.ownerDocument;
    return Ue.call(
      y || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, dr = function(a) {
    return a = jn(a, Pe, " "), a = jn(a, st, " "), a = jn(a, ht, " "), a;
  }, Qr = function(a) {
    var y;
    a.normalize();
    const R = _e ? _e(a) : a.ownerDocument, H = Ue.call(
      R || a,
      a,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let W = H.nextNode();
    for (; W; )
      W.data = dr(W.data), W = H.nextNode();
    const X = (y = a.querySelectorAll) === null || y === void 0 ? void 0 : y.call(a, "template");
    X && an(X, (he) => {
      vn(he.content) && Qr(he.content);
    });
  }, pr = function(a) {
    const y = ie ? ie(a) : null;
    return typeof y != "string" || Ce(y) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== K(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== D(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== Z(a);
  }, vn = function(a) {
    if (!D || typeof a != "object" || a === null)
      return !1;
    try {
      return D(a) === ft.documentFragment;
    } catch {
      return !1;
    }
  }, Dn = function(a) {
    if (!D || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof D(a) == "number";
    } catch {
      return !1;
    }
  };
  function Rt(M, a, y) {
    M.length !== 0 && an(M, (R) => {
      R.call(t, a, y, _n);
    });
  }
  const Ml = function(a, y) {
    return !!(q && a.hasChildNodes() && !Dn(a.firstElementChild) && qe(to, a.textContent) && qe(to, a.innerHTML) || q && a.namespaceURI === wt && $u[y] && (Dn(a.firstElementChild) || typeof a.textContent == "string" && qe(Vu[y], a.textContent)) || a.nodeType === ft.processingInstruction || q && a.nodeType === ft.comment && qe(no, a.data));
  }, hr = function(a, y) {
    if (a instanceof RegExp)
      return qe(a, y);
    if (a instanceof Function) {
      for (var R = arguments.length, H = new Array(R > 2 ? R - 2 : 0), W = 2; W < R; W++)
        H[W - 2] = arguments[W];
      return !!a(y, ...H);
    }
    return !1;
  }, kl = function(a, y, R) {
    if (!N[y] && us(y) && hr(I.tagNameCheck, y))
      return !1;
    if (en && !At[y]) {
      const H = V(a), W = Z(a);
      if (W && H) {
        const X = W.length;
        for (let he = X - 1; he >= 0; --he) {
          const ge = a === R ? j(W[he], !0) : W[he];
          H.insertBefore(ge, $(a));
        }
      }
    }
    return Gt(a), !0;
  }, os = function(a, y, R, H) {
    return a.length === 0 ? y : y === R || y === H ? dt(y) : y;
  }, ls = function(a, y) {
    return a === y || V(a) !== null ? !1 : (tn && fr(a), !0);
  }, as = function(a, y) {
    if (Rt(oe.beforeSanitizeElements, a, null), ls(a, y))
      return !0;
    if (pr(a))
      return Gt(a), !0;
    const R = Ce(Te(a));
    if (_ = os(oe.uponSanitizeElement, _, w, te), Rt(oe.uponSanitizeElement, a, {
      tagName: R,
      allowedTags: _
    }), ls(a, y))
      return !0;
    if (Ml(a, R))
      return Gt(a), !0;
    if (N[R] || !(A.tagCheck instanceof Function && A.tagCheck(R)) && !_[R]) {
      const W = kl(a, R, y);
      return W === !1 && Rt(oe.afterSanitizeElements, a, null), W;
    }
    if (ve(a) === ft.element && !Pl(a) || (R === "noscript" || R === "noembed" || R === "noframes") && qe(Hu, a.innerHTML))
      return Gt(a), !0;
    if (O && a.nodeType === ft.text) {
      const W = dr(a.textContent);
      a.textContent !== W && (Hn(t.removed, {
        element: a.cloneNode()
      }), a.textContent = W);
    }
    return Rt(oe.afterSanitizeElements, a, null), !1;
  }, cs = function(a, y, R) {
    if (P[y] || rs(y, a) || je && (y === "id" || y === "name") && (R in n || R in wl))
      return !1;
    const H = S[y] || A.attributeCheck instanceof Function && A.attributeCheck(y, a);
    return E && qe(yt, y) || z && qe(Ze, y) ? !0 : H ? In[y] || qe(m, jn(R, St, "")) || (y === "src" || y === "xlink:href" || y === "href") && a !== "script" && Ks(R, "data:") === 0 && lr[a] || h && !qe(We, jn(R, St, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      us(a) && hr(I.tagNameCheck, a) && hr(I.attributeNameCheck, y, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      y === "is" && I.allowCustomizedBuiltInElements && hr(I.tagNameCheck, R)
    );
  }, Dl = ae({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), us = function(a) {
    return !Dl[Wn(a)] && qe(f, a);
  }, Fl = function(a, y, R, H) {
    if (be && typeof x == "object" && typeof x.getAttributeType == "function" && !R)
      switch (x.getAttributeType(a, y)) {
        case "TrustedHTML":
          return Xe(H);
        case "TrustedScriptURL":
          return ye(H);
      }
    return H;
  }, Ul = function(a, y, R, H) {
    try {
      R ? a.setAttributeNS(R, y, H) : a.setAttribute(y, H), pr(a) ? Gt(a) : Ws(t.removed);
    } catch {
      nn(y, a);
    }
  }, fs = function(a) {
    Rt(oe.beforeSanitizeAttributes, a, null);
    const y = a.attributes;
    if (!y || pr(a))
      return;
    S = os(oe.uponSanitizeAttribute, S, C, we);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: S,
      forceKeepAttr: void 0
    };
    let H = y.length;
    const W = Ce(a.nodeName);
    for (; H--; ) {
      const X = y[H], he = X.name, ge = X.namespaceURI, lt = X.value, at = Ce(he), ti = lt;
      let Qe = he === "value" ? ti : Tu(ti);
      if (R.attrName = at, R.attrValue = Qe, R.keepAttr = !0, R.forceKeepAttr = void 0, Rt(oe.uponSanitizeAttribute, a, R), Qe = R.attrValue, Qt && (at === "id" || at === "name") && Ks(Qe, Kt) !== 0 && (nn(he, a, X), Qe = Kt + Qe), q && qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Qe)) {
        nn(he, a, X);
        continue;
      }
      if (at === "attributename" && qs(Qe, "href")) {
        nn(he, a, X);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          nn(he, a, X);
          continue;
        }
        if (!c && qe(ju, Qe)) {
          nn(he, a, X);
          continue;
        }
        if (O && (Qe = dr(Qe)), !cs(W, at, Qe)) {
          nn(he, a, X);
          continue;
        }
        Qe = Fl(W, at, ge, Qe), Qe !== ti && Ul(a, he, ge, Qe);
      }
    }
    Rt(oe.afterSanitizeAttributes, a, null);
  }, mr = function(a) {
    let y = null;
    const R = ss(a);
    for (Rt(oe.beforeSanitizeShadowDOM, a, null); y = R.nextNode(); )
      if (Rt(oe.uponSanitizeShadowNode, y, null), as(y, a), fs(y), vn(y.content) && mr(y.content), ve(y) === ft.element) {
        const H = k(y);
        vn(H) && (ei(H), mr(H));
      }
    Rt(oe.afterSanitizeShadowDOM, a, null);
  }, ei = function(a) {
    const y = [{
      node: a,
      shadow: null
    }];
    for (; y.length > 0; ) {
      const R = y.pop();
      if (R.shadow) {
        mr(R.shadow);
        continue;
      }
      const H = R.node, X = ve(H) === ft.element, he = Z(H);
      if (he)
        for (let ge = he.length - 1; ge >= 0; --ge)
          y.push({
            node: he[ge],
            shadow: null
          });
      if (X) {
        const ge = ie ? ie(H) : null;
        if (typeof ge == "string" && Ce(ge) === "template") {
          const lt = H.content;
          vn(lt) && y.push({
            node: lt,
            shadow: null
          });
        }
      }
      if (X) {
        const ge = k(H);
        vn(ge) && y.push({
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
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null, R = null, H = null, W = null;
    if (Gr = !M, Gr && (M = "<!-->"), typeof M != "string" && !Dn(M) && (M = Cu(M), typeof M != "string"))
      throw on("dirty is not a string, aborting");
    if (!t.isSupported)
      return M;
    se ? (_ = te, S = we) : Zr(a), (oe.uponSanitizeElement.length > 0 || oe.uponSanitizeAttribute.length > 0) && (_ = dt(_)), oe.uponSanitizeAttribute.length > 0 && (S = dt(S)), t.removed = [];
    const X = tn && typeof M != "string" && Dn(M);
    if (X) {
      Il(M);
      const lt = Te(M);
      if (typeof lt == "string") {
        const at = Ce(lt);
        if (!_[at] || N[at])
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
      y = is("<!---->"), R = y.ownerDocument.importNode(M, !0), R.nodeType === ft.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? y = R : y.appendChild(R), ei(R);
    else {
      if (!Re && !O && !B && // eslint-disable-next-line unicorn/prefer-includes
      M.indexOf("<") === -1)
        return be && Ae ? Xe(M) : M;
      if (y = is(M), !y)
        return Re ? null : Ae ? xe : "";
    }
    y && Le && Gt(y.firstChild);
    const he = X ? M : y;
    try {
      const lt = ss(he);
      for (; H = lt.nextNode(); )
        as(H, he), fs(H), vn(H.content) && mr(H.content);
    } catch (lt) {
      throw X && (ur(M), an(t.removed, (at) => {
        at.element && fr(at.element);
      })), lt;
    }
    if (X)
      return an(t.removed, (lt) => {
        lt.element && fr(lt.element);
      }), O && Qr(M), M;
    if (Re) {
      if (O && Qr(y), ot)
        for (W = He.call(y.ownerDocument); y.firstChild; )
          W.appendChild(y.firstChild);
      else
        W = y;
      return (S.shadowroot || S.shadowrootmode) && (W = Je.call(r, W, !0)), W;
    }
    let ge = B ? y.outerHTML : y.innerHTML;
    return B && _["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && qe(Fu, y.ownerDocument.doctype.name) && (ge = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + ge), O && (ge = dr(ge)), be && Ae ? Xe(ge) : ge;
  }, t.setConfig = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zr(M), se = !0, te = _, we = S;
  }, t.clearConfig = function() {
    _n = null, se = !1, te = null, we = null, be = Ve, xe = "";
  }, t.isValidAttribute = function(M, a, y) {
    _n || Zr({});
    const R = Ce(M), H = Ce(a);
    return cs(R, H, y);
  }, t.addHook = function(M, a) {
    typeof a == "function" && ut(oe, M) && Hn(oe[M], a);
  }, t.removeHook = function(M, a) {
    if (ut(oe, M)) {
      if (a !== void 0) {
        const y = _u(oe[M], a);
        return y === -1 ? void 0 : vu(oe[M], y, 1)[0];
      }
      return Ws(oe[M]);
    }
  }, t.removeHooks = function(M) {
    ut(oe, M) && (oe[M] = []);
  }, t.removeAllHooks = function() {
    oe = ro();
  }, t;
}
var Wu = Tl();
function qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ei, io;
function Ku() {
  if (io) return Ei;
  io = 1;
  var e = /["'&<>]/;
  Ei = t;
  function t(n) {
    var r = "" + n, i = e.exec(r);
    if (!i)
      return r;
    var s, o = "", l = 0, u = 0;
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
      u !== l && (o += r.substring(u, l)), u = l + 1, o += s;
    }
    return u !== l ? o + r.substring(u, l) : o;
  }
  return Ei;
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
function d(e, t, n, r, i) {
  const s = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof r == "object" ? r : {}
  }, u = ($) => $, v = (l.sanitize ? Wu.sanitize : u) || u, b = l.escape ? so : u, x = ($) => typeof $ == "string" || typeof $ == "number", L = ($, Z, V) => $.replace(/%n/g, "" + V).replace(/{([^{}]*)}/g, (k, K) => {
    if (Z === void 0 || !(K in Z))
      return b(k);
    const D = Z[K];
    return x(D) ? b(`${D}`) : typeof D == "object" && x(D.value) ? (D.escape !== !1 ? so : u)(`${D.value}`) : b(k);
  });
  let J = (i?.bundle ?? Yu(e)).translations[t] || t;
  return J = Array.isArray(J) ? J[0] : J, v(typeof s == "object" || o !== void 0 ? L(
    J,
    s,
    o
  ) : J);
}
const Xu = { class: "library-vue-catalogue" }, Ju = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Zu = { class: "library-catalogue-header" }, Qu = { id: "library-catalogue-heading" }, ef = { class: "library-muted" }, tf = ["aria-label"], nf = ["href"], rf = ["href"], sf = ["href"], of = ["href"], lf = ["aria-label"], af = ["name", "value"], cf = { class: "library-quick-filter-search" }, uf = { value: "title" }, ff = { value: "recent" }, df = { value: "publicationDate" }, pf = { value: "publication" }, hf = { value: "lastOpened" }, mf = { value: "format" }, bf = { value: "" }, yf = { value: "1" }, gf = ["value"], _f = ["value"], vf = ["aria-label"], Tf = ["aria-label"], Ef = { class: "library-filter-panel" }, Sf = { class: "library-filter-panel-summary" }, xf = ["aria-label"], Af = { value: "" }, Cf = ["value"], wf = { value: "" }, Rf = ["value"], Of = { value: "" }, Nf = ["value"], Pf = { value: "" }, Lf = ["value"], If = { value: "" }, Mf = ["value"], kf = { value: "" }, Df = ["value"], Ff = { value: "" }, Uf = ["value"], Hf = { value: "" }, jf = ["value"], $f = { value: "" }, Vf = ["value"], zf = { value: "" }, Bf = ["value"], Wf = { value: "" }, qf = { value: "1" }, Kf = { value: "" }, Gf = { value: "1" }, Yf = { value: "title" }, Xf = { value: "recent" }, Jf = { value: "publicationDate" }, Zf = { value: "publication" }, Qf = { value: "lastOpened" }, ed = { value: "format" }, td = ["value"], nd = ["value"], rd = ["aria-label"], id = ["aria-label"], sd = ["href"], od = { class: "library-muted library-filter-result-summary" }, ld = { key: 0 }, ad = { href: "?" }, cd = { class: "library-batch-actions" }, ud = { class: "library-settings-count-badge" }, fd = ["action"], dd = ["value"], pd = ["name", "value"], hd = ["placeholder"], md = {
  type: "submit",
  class: "button primary"
}, bd = { class: "library-muted" }, yd = ["action"], gd = ["value"], _d = ["name", "value"], vd = ["placeholder"], Td = {
  type: "submit",
  class: "button secondary"
}, Ed = { class: "library-muted" }, Sd = ["action"], xd = ["value"], Ad = ["name", "value"], Cd = {
  type: "submit",
  class: "button secondary"
}, wd = { class: "library-muted" }, Rd = ["action"], Od = ["value"], Nd = ["name", "value"], Pd = { name: "bulkEditField" }, Ld = { value: "publicationType" }, Id = { value: "subtitle" }, Md = { value: "creators" }, kd = { value: "publication" }, Dd = { value: "publicationDate" }, Fd = { value: "language" }, Ud = { value: "publisher" }, Hd = { value: "genres" }, jd = { value: "classifications" }, $d = {
  type: "submit",
  class: "button secondary"
}, Vd = { class: "library-muted" }, zd = ["action"], Bd = ["value"], Wd = ["name", "value"], qd = {
  type: "submit",
  class: "button secondary"
}, Kd = { class: "library-muted" }, Gd = ["aria-label"], Yd = ["href", "aria-label"], Xd = ["aria-label"], Jd = { class: "library-pagination-range" }, Zd = { key: 0 }, Qd = ["href"], ep = {
  key: 1,
  class: "library-muted"
}, tp = ["href"], np = {
  key: 3,
  class: "library-muted"
}, rp = {
  key: 1,
  class: "library-periodical-groups"
}, ip = { class: "library-periodical-groups-summary" }, sp = { id: "library-periodical-groups-heading" }, op = { class: "library-muted" }, lp = ["href"], ap = { class: "library-muted" }, cp = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, up = { class: "library-periodical-groups-summary" }, fp = { id: "library-periodical-groups-empty-heading" }, dp = { class: "library-muted" }, pp = { class: "library-muted" }, hp = { class: "library-empty-actions" }, mp = ["href"], bp = { class: "library-muted" }, yp = { class: "library-muted" }, gp = { class: "library-empty-actions" }, _p = ["href"], vp = { class: "library-muted" }, Tp = { class: "library-empty-actions" }, Ep = ["href"], Sp = {
  href: "?",
  class: "button primary"
}, xp = { class: "library-muted" }, Ap = { class: "library-empty-actions" }, Cp = ["href"], wp = {
  key: 4,
  class: "library-cover-gallery"
}, Rp = ["href", "aria-label"], Op = ["src", "alt"], Np = ["action", "onSubmit"], Pp = ["value"], Lp = ["value"], Ip = ["aria-pressed", "title", "aria-label", "onClick"], Mp = { class: "library-cover-summary" }, kp = { class: "library-cover-primary" }, Dp = ["aria-label"], Fp = ["href"], Up = ["onToggle"], Hp = ["aria-label"], jp = { class: "library-cover-meta" }, $p = {
  key: 0,
  class: "library-creator"
}, Vp = { class: "library-cover-detail-list" }, zp = { class: "library-cover-detail-chip" }, Bp = {
  key: 0,
  class: "library-cover-detail-chip"
}, Wp = {
  key: 1,
  class: "library-cover-detail-chip"
}, qp = {
  key: 2,
  class: "library-cover-detail-chip"
}, Kp = {
  key: 3,
  class: "library-cover-detail-chip"
}, Gp = {
  key: 4,
  class: "library-cover-detail-chip"
}, Yp = {
  key: 5,
  class: "library-cover-detail-chip"
}, Xp = {
  key: 6,
  class: "library-cover-detail-chip"
}, Jp = {
  key: 1,
  class: "library-muted library-cover-description"
}, Zp = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Qp = { key: 0 }, eh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, th = {
  key: 0,
  class: "library-muted"
}, nh = { class: "library-cover-actions" }, rh = ["href"], ih = ["href"], sh = ["href"], oh = {
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
    }), s = /* @__PURE__ */ un((i.items || []).map((E) => ({ ...E }))), o = le(() => s), l = le(() => i.shelves || []), u = le(() => i.formats || []), v = le(() => i.publications || []), b = le(() => i.publicationSummaries || []), x = le(() => i.publicationYears || []), L = le(() => i.creators || []), j = le(() => i.scanStatuses || []), J = le(() => i.workflowStatuses || []), $ = le(() => i.genres || []), Z = le(() => i.classifications || []), V = le(() => i.cataloguePagination || {
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
    }), K = le(() => i.settingsUrl || ""), D = le(() => i.requestToken || ""), ie = le(() => i.metadataExportUrl || ""), _e = le(() => i.metadataSidecarManifestUrl || ""), ve = le(() => i.metadataSidecarBundleUrl || ""), Te = le(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), be = le(() => i.batchTagUrl || "/apps/library/bulk/tags"), xe = le(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Ve = le(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), it = le(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), ze = le(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Be = le(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Xe = le(() => Number(i.rootCount || 0)), ye = le(() => Number(i.enabledRootCount || 0)), ne = le(() => Xe.value === 0), ee = le(() => Xe.value > 0 && ye.value === 0), ke = le(() => He.value.length > 0), Ue = {
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
    }, He = le(() => Object.entries(Ue).map(([E, h]) => ({ key: E, label: h, value: k[E] || "" })).filter((E) => String(E.value).trim() !== "")), Ne = le(() => Object.entries(k).filter(([E, h]) => !["q", "sort", "starred"].includes(E) && String(h || "").trim() !== "").map(([E, h]) => ({ key: E, value: h }))), Je = le(() => Object.entries(k).filter(([E, h]) => String(h || "").trim() !== "").map(([E, h]) => ({ key: E, value: h }))), oe = /* @__PURE__ */ un({}), Pe = /* @__PURE__ */ ga(null);
    let st = null;
    function ht(E) {
      const h = new URLSearchParams(new FormData(E));
      for (const c of Array.from(h.keys()))
        String(h.get(c) || "").trim() === "" && h.delete(c);
      return h.delete("page"), h;
    }
    function yt(E) {
      s.splice(0, s.length, ...(E.items || []).map((h) => ({ ...h })));
      for (const h of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "creators", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(E, h) && (i[h] = E[h]);
      Object.assign(k, E.activeFilters || {});
    }
    async function Ze(E) {
      const h = E?.currentTarget?.tagName === "FORM" ? E.currentTarget : E?.currentTarget?.form;
      if (!h) return;
      const O = ht(h).toString(), q = O ? `?${O}` : "", B = await fetch(Te.value + q, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!B.ok) {
        h.submit();
        return;
      }
      yt(await B.json()), history.replaceState({}, "", O ? `?${O}` : window.location.pathname);
    }
    function We(E) {
      Ze(E);
    }
    function St(E) {
      window.clearTimeout(st), st = window.setTimeout(() => We(E), 350);
    }
    function f(E) {
      const h = new URLSearchParams();
      for (const [O, q] of Object.entries(k)) {
        const B = String(q || "").trim();
        B !== "" && O !== E && !(O === "sort" && B === "title") && h.set(O, B);
      }
      const c = h.toString();
      return c ? `?${c}` : "?";
    }
    function m() {
      return f("q");
    }
    function _(E) {
      return String(E || "").toUpperCase();
    }
    function w(E) {
      return E.nextcloudTags || [];
    }
    function S(E) {
      const h = new URLSearchParams(window.location.search);
      return h.set("publication", E), h.set("sort", "publication"), h.delete("page"), `?${h.toString()}`;
    }
    function C(E, h) {
      oe[E] = !!h?.currentTarget?.open;
    }
    function I(E) {
      const h = String(E?.tagName || "").toLowerCase();
      return E?.isContentEditable || ["input", "select", "textarea", "button"].includes(h);
    }
    function N(E) {
      E.key !== "/" || E.metaKey || E.ctrlKey || E.altKey || E.shiftKey || I(E.target) || (E.preventDefault(), Pe.value?.focus(), Pe.value?.select?.());
    }
    function P(E) {
      E.key !== "Escape" || document.activeElement !== Pe.value || k.q === "" || (E.preventDefault(), k.q = "", Pe.value.value = "", window.clearTimeout(st), We({ currentTarget: Pe.value }));
    }
    function A(E) {
      N(E), P(E);
    }
    Wo(() => {
      window.addEventListener("keydown", A);
    }), qo(() => {
      window.removeEventListener("keydown", A);
    });
    async function z(E, h) {
      const c = h?.currentTarget?.closest?.("form") || h?.currentTarget;
      if (!c || !E?.starUrl) return;
      const O = !!E.starred;
      E.starred = !O;
      try {
        (await fetch(E.starUrl, {
          method: "POST",
          body: new FormData(c),
          credentials: "same-origin"
        })).ok || (E.starred = O);
      } catch {
        E.starred = O;
      }
    }
    return (E, h) => (F(), U("div", Xu, [
      p("section", Ju, [
        p("div", Zu, [
          p("div", null, [
            p("h2", Qu, g(T(d)("library", "Publication catalogue")), 1),
            p("p", ef, g(T(d)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          p("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": T(d)("library", "Library actions")
          }, [
            p("a", {
              href: K.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, g(T(d)("library", "Settings")), 9, nf),
            ie.value ? (F(), U("a", {
              key: 0,
              href: ie.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, g(T(d)("library", "Export corrected metadata")), 9, rf)) : Ie("", !0),
            _e.value ? (F(), U("a", {
              key: 1,
              href: _e.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, g(T(d)("library", "Sidecar manifest")), 9, sf)) : Ie("", !0),
            ve.value ? (F(), U("a", {
              key: 2,
              href: ve.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, g(T(d)("library", "Sidecar ZIP")), 9, of)) : Ie("", !0)
          ], 8, tf)
        ]),
        p("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": T(d)("library", "Quick catalogue filters"),
          onSubmit: Tr(Ze, ["prevent"])
        }, [
          (F(!0), U(re, null, Ee(Ne.value, (c) => (F(), U("input", {
            key: c.key,
            type: "hidden",
            name: c.key,
            value: c.value
          }, null, 8, af))), 128)),
          p("label", cf, [
            ce(g(T(d)("library", "Search")) + " ", 1),
            h[18] || (h[18] = p("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            De(p("input", {
              ref_key: "quickSearchInput",
              ref: Pe,
              "onUpdate:modelValue": h[0] || (h[0] = (c) => k.q = c),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: St
            }, null, 544), [
              [mi, k.q]
            ])
          ]),
          p("label", null, [
            ce(g(T(d)("library", "Sort")) + " ", 1),
            De(p("select", {
              "onUpdate:modelValue": h[1] || (h[1] = (c) => k.sort = c),
              name: "sort",
              onChange: Ze
            }, [
              p("option", uf, g(T(d)("library", "Title")), 1),
              p("option", ff, g(T(d)("library", "Recently added")), 1),
              p("option", df, g(T(d)("library", "Publication date")), 1),
              p("option", pf, g(T(d)("library", "Series")), 1),
              p("option", hf, g(T(d)("library", "Recently opened")), 1),
              p("option", mf, g(T(d)("library", "Format")), 1)
            ], 544), [
              [et, k.sort]
            ])
          ]),
          p("label", null, [
            ce(g(T(d)("library", "Starred")) + " ", 1),
            De(p("select", {
              "onUpdate:modelValue": h[2] || (h[2] = (c) => k.starred = c),
              name: "starred",
              onChange: Ze
            }, [
              p("option", bf, g(T(d)("library", "All")), 1),
              p("option", yf, g(T(d)("library", "Starred")), 1)
            ], 544), [
              [et, k.starred]
            ])
          ]),
          p("label", null, [
            ce(g(T(d)("library", "Size")) + " ", 1),
            p("select", {
              value: V.value.limit,
              name: "limit",
              onChange: Ze
            }, [
              (F(), U(re, null, Ee(r, (c) => p("option", {
                key: c,
                value: c
              }, g(c), 9, _f)), 64))
            ], 40, gf)
          ]),
          p("button", {
            type: "submit",
            class: "button primary",
            "aria-label": T(d)("library", "Apply catalogue filters")
          }, g(T(d)("library", "Apply filters")), 9, vf),
          p("a", {
            href: "?",
            class: "button secondary",
            "aria-label": T(d)("library", "Clear catalogue filters")
          }, g(T(d)("library", "Clear all")), 9, Tf)
        ], 40, lf),
        p("details", Ef, [
          p("summary", Sf, g(T(d)("library", "Show catalogue filters")), 1),
          p("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": T(d)("library", "Catalogue search and filters"),
            onSubmit: Tr(Ze, ["prevent"])
          }, [
            p("label", null, [
              ce(g(T(d)("library", "Search title / author")) + " ", 1),
              De(p("input", {
                "onUpdate:modelValue": h[3] || (h[3] = (c) => k.q = c),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, k.q]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Type")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[4] || (h[4] = (c) => k.type = c),
                name: "type"
              }, [
                p("option", Af, g(T(d)("library", "All types")), 1),
                (F(), U(re, null, Ee(n, (c) => p("option", {
                  key: c,
                  value: c
                }, g(c), 9, Cf)), 64))
              ], 512), [
                [et, k.type]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Series / periodical")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[5] || (h[5] = (c) => k.publication = c),
                name: "publication"
              }, [
                p("option", wf, g(T(d)("library", "All series and periodicals")), 1),
                (F(!0), U(re, null, Ee(v.value, (c) => (F(), U("option", {
                  key: c,
                  value: c
                }, g(c), 9, Rf))), 128))
              ], 512), [
                [et, k.publication]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Publication year")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[6] || (h[6] = (c) => k.year = c),
                name: "year"
              }, [
                p("option", Of, g(T(d)("library", "All years")), 1),
                (F(!0), U(re, null, Ee(x.value, (c) => (F(), U("option", {
                  key: c,
                  value: c
                }, g(c), 9, Nf))), 128))
              ], 512), [
                [et, k.year]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Creator")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[7] || (h[7] = (c) => k.creator = c),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                p("option", Pf, g(T(d)("library", "All creators")), 1),
                (F(!0), U(re, null, Ee(L.value, (c) => (F(), U("option", {
                  key: c,
                  value: c
                }, g(c), 9, Lf))), 128))
              ], 512), [
                [et, k.creator]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Nextcloud tag")) + " ", 1),
              De(p("input", {
                "onUpdate:modelValue": h[8] || (h[8] = (c) => k.tag = c),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, k.tag]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Format")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[9] || (h[9] = (c) => k.format = c),
                name: "format"
              }, [
                p("option", If, g(T(d)("library", "All formats")), 1),
                (F(!0), U(re, null, Ee(u.value, (c) => (F(), U("option", {
                  key: c,
                  value: c
                }, g(_(c)), 9, Mf))), 128))
              ], 512), [
                [et, k.format]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Shelf")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[10] || (h[10] = (c) => k.shelf = c),
                name: "shelf"
              }, [
                p("option", kf, g(T(d)("library", "All shelves")), 1),
                (F(!0), U(re, null, Ee(l.value, (c) => (F(), U("option", {
                  key: c,
                  value: c
                }, g(c), 9, Df))), 128))
              ], 512), [
                [et, k.shelf]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Scan status")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[11] || (h[11] = (c) => k.status = c),
                name: "status"
              }, [
                p("option", Ff, g(T(d)("library", "All scan statuses")), 1),
                (F(!0), U(re, null, Ee(j.value, (c) => (F(), U("option", {
                  key: c,
                  value: c
                }, g(c), 9, Uf))), 128))
              ], 512), [
                [et, k.status]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Workflow status")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[12] || (h[12] = (c) => k.workflowStatus = c),
                name: "workflowStatus"
              }, [
                p("option", Hf, g(T(d)("library", "All workflow statuses")), 1),
                (F(!0), U(re, null, Ee(J.value, (c) => (F(), U("option", {
                  key: c,
                  value: c
                }, g(c), 9, jf))), 128))
              ], 512), [
                [et, k.workflowStatus]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Genre")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[13] || (h[13] = (c) => k.genre = c),
                name: "genre"
              }, [
                p("option", $f, g(T(d)("library", "All genres")), 1),
                (F(!0), U(re, null, Ee($.value, (c) => (F(), U("option", {
                  key: c,
                  value: c
                }, g(c), 9, Vf))), 128))
              ], 512), [
                [et, k.genre]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Classification")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[14] || (h[14] = (c) => k.classification = c),
                name: "classification"
              }, [
                p("option", zf, g(T(d)("library", "All classifications")), 1),
                (F(!0), U(re, null, Ee(Z.value, (c) => (F(), U("option", {
                  key: c,
                  value: c
                }, g(c), 9, Bf))), 128))
              ], 512), [
                [et, k.classification]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Scanner conflicts")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[15] || (h[15] = (c) => k.scannerConflicts = c),
                name: "scannerConflicts"
              }, [
                p("option", Wf, g(T(d)("library", "All metadata")), 1),
                p("option", qf, g(T(d)("library", "Needs review")), 1)
              ], 512), [
                [et, k.scannerConflicts]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Starred")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[16] || (h[16] = (c) => k.starred = c),
                name: "starred"
              }, [
                p("option", Kf, g(T(d)("library", "All publications")), 1),
                p("option", Gf, g(T(d)("library", "Starred only")), 1)
              ], 512), [
                [et, k.starred]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Sort")) + " ", 1),
              De(p("select", {
                "onUpdate:modelValue": h[17] || (h[17] = (c) => k.sort = c),
                name: "sort"
              }, [
                p("option", Yf, g(T(d)("library", "Title")), 1),
                p("option", Xf, g(T(d)("library", "Recently added")), 1),
                p("option", Jf, g(T(d)("library", "Publication date")), 1),
                p("option", Zf, g(T(d)("library", "Series / periodical")), 1),
                p("option", Qf, g(T(d)("library", "Recently opened")), 1),
                p("option", ed, g(T(d)("library", "Format")), 1)
              ], 512), [
                [et, k.sort]
              ])
            ]),
            p("label", null, [
              ce(g(T(d)("library", "Page size")) + " ", 1),
              p("select", {
                value: V.value.limit,
                name: "limit"
              }, [
                (F(), U(re, null, Ee(r, (c) => p("option", {
                  key: c,
                  value: c
                }, g(c), 9, nd)), 64))
              ], 8, td)
            ]),
            p("button", {
              type: "submit",
              class: "button primary",
              "aria-label": T(d)("library", "Apply catalogue filters")
            }, g(T(d)("library", "Apply filters")), 9, rd),
            p("a", {
              href: "?",
              class: "button secondary",
              "aria-label": T(d)("library", "Clear catalogue filters")
            }, g(T(d)("library", "Clear")), 9, id),
            p("a", {
              href: Be.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, g(T(d)("library", "Review scanner conflicts")), 9, sd)
          ], 40, xf)
        ]),
        p("p", od, [
          ce(g(T(d)("library", "Showing")) + " " + g(V.value.from) + "–" + g(V.value.to) + " " + g(T(d)("library", "of")) + " " + g(V.value.total) + " " + g(T(d)("library", "catalogue items")), 1),
          He.value.length > 0 ? (F(), U("span", ld, [
            h[19] || (h[19] = ce(" · ", -1)),
            p("a", ad, g(T(d)("library", "Clear all filters")), 1)
          ])) : Ie("", !0)
        ]),
        p("details", cd, [
          p("summary", null, [
            ce(g(T(d)("library", "Batch actions for current results")) + " ", 1),
            p("span", ud, g(V.value.total) + " " + g(T(d)("library", "Current filter result")), 1)
          ]),
          p("form", {
            method: "post",
            action: be.value,
            class: "library-batch-tag-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: D.value
            }, null, 8, dd),
            (F(!0), U(re, null, Ee(Je.value, (c) => (F(), U("input", {
              key: c.key,
              type: "hidden",
              name: c.key,
              value: c.value
            }, null, 8, pd))), 128)),
            p("label", null, [
              p("span", null, g(T(d)("library", "Nextcloud tag")), 1),
              p("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: T(d)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, hd)
            ]),
            p("button", md, g(T(d)("library", "Apply Nextcloud tag to current results")), 1),
            p("p", bd, g(T(d)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
          ], 8, fd),
          p("form", {
            method: "post",
            action: xe.value,
            class: "library-batch-tag-remove-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: D.value
            }, null, 8, gd),
            (F(!0), U(re, null, Ee(Je.value, (c) => (F(), U("input", {
              key: `remove-tag-${c.key}`,
              type: "hidden",
              name: c.key,
              value: c.value
            }, null, 8, _d))), 128)),
            p("label", null, [
              p("span", null, g(T(d)("library", "Nextcloud tag")), 1),
              p("input", {
                type: "text",
                name: "nextcloudTagName",
                list: "library-nextcloud-tag-suggestions",
                placeholder: T(d)("library", "e.g. Review"),
                autocomplete: "off"
              }, null, 8, vd)
            ]),
            p("button", Td, g(T(d)("library", "Remove tag from current results")), 1),
            p("p", Ed, g(T(d)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
          ], 8, yd),
          p("form", {
            method: "post",
            action: Ve.value,
            class: "library-batch-metadata-reset-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: D.value
            }, null, 8, xd),
            (F(!0), U(re, null, Ee(Je.value, (c) => (F(), U("input", {
              key: `reset-${c.key}`,
              type: "hidden",
              name: c.key,
              value: c.value
            }, null, 8, Ad))), 128)),
            h[20] || (h[20] = p("input", {
              type: "hidden",
              name: "scannerConflicts",
              value: "1"
            }, null, -1)),
            p("button", Cd, g(T(d)("library", "Reset filtered metadata")), 1),
            p("p", wd, g(T(d)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
          ], 8, Sd),
          p("form", {
            method: "post",
            action: it.value,
            class: "library-batch-metadata-edit-preview-form",
            target: "_blank"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: D.value
            }, null, 8, Od),
            (F(!0), U(re, null, Ee(Je.value, (c) => (F(), U("input", {
              key: `edit-preview-${c.key}`,
              type: "hidden",
              name: c.key,
              value: c.value
            }, null, 8, Nd))), 128)),
            p("label", null, [
              p("span", null, g(T(d)("library", "Metadata field")), 1),
              p("select", Pd, [
                p("option", Ld, g(T(d)("library", "Publication type")), 1),
                p("option", Id, g(T(d)("library", "Subtitle")), 1),
                p("option", Md, g(T(d)("library", "Creators")), 1),
                p("option", kd, g(T(d)("library", "Series / periodical")), 1),
                p("option", Dd, g(T(d)("library", "Publication date")), 1),
                p("option", Fd, g(T(d)("library", "Language")), 1),
                p("option", Ud, g(T(d)("library", "Publisher")), 1),
                p("option", Hd, g(T(d)("library", "Genres")), 1),
                p("option", jd, g(T(d)("library", "Classifications")), 1)
              ])
            ]),
            p("label", null, [
              p("span", null, g(T(d)("library", "Preview value")), 1),
              h[21] || (h[21] = p("input", {
                type: "text",
                name: "bulkEditValue",
                placeholder: "magazine, de, photography...",
                autocomplete: "off"
              }, null, -1))
            ]),
            p("button", $d, g(T(d)("library", "Preview metadata edit")), 1),
            p("p", Vd, g(T(d)("library", "Preview-first batch metadata edit for current filter results. No changes are written during preview.")), 1)
          ], 8, Rd),
          p("form", {
            method: "post",
            action: ze.value,
            class: "library-batch-cover-refresh-form"
          }, [
            p("input", {
              type: "hidden",
              name: "requesttoken",
              value: D.value
            }, null, 8, Bd),
            (F(!0), U(re, null, Ee(Je.value, (c) => (F(), U("input", {
              key: `cover-${c.key}`,
              type: "hidden",
              name: c.key,
              value: c.value
            }, null, 8, Wd))), 128)),
            p("button", qd, g(T(d)("library", "Request fresh cover previews")), 1),
            p("p", Kd, g(T(d)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
          ], 8, zd)
        ]),
        He.value.length > 0 ? (F(), U("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": T(d)("library", "Active filters")
        }, [
          p("span", null, g(T(d)("library", "Active filters")), 1),
          (F(!0), U(re, null, Ee(He.value, (c) => (F(), U("a", {
            key: c.key,
            href: f(c.key),
            class: "library-filter-chip",
            "aria-label": `${T(d)("library", "Remove filter")}: ${c.label}`
          }, [
            p("strong", null, g(c.label) + ":", 1),
            ce(" " + g(c.value) + " ", 1),
            h[22] || (h[22] = p("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Yd))), 128))
        ], 8, Gd)) : Ie("", !0),
        p("nav", {
          class: "library-pagination",
          "aria-label": T(d)("library", "Catalogue pagination")
        }, [
          p("span", Jd, [
            ce(g(T(d)("library", "Page")) + " " + g(V.value.page), 1),
            V.value.total > 0 ? (F(), U("span", Zd, " · " + g(V.value.from) + "–" + g(V.value.to), 1)) : Ie("", !0)
          ]),
          V.value.previousUrl ? (F(), U("a", {
            key: 0,
            href: V.value.previousUrl
          }, g(T(d)("library", "Previous")), 9, Qd)) : (F(), U("span", ep, g(T(d)("library", "Previous")), 1)),
          V.value.nextUrl ? (F(), U("a", {
            key: 2,
            href: V.value.nextUrl
          }, g(T(d)("library", "Next")), 9, tp)) : (F(), U("span", np, g(T(d)("library", "Next")), 1))
        ], 8, Xd),
        b.value.length > 0 ? (F(), U("details", rp, [
          p("summary", ip, g(T(d)("library", "Show top series and periodicals")), 1),
          p("h3", sp, g(T(d)("library", "Top series and periodicals")), 1),
          p("p", op, g(T(d)("library", "Jump into recurring publications with one click.")), 1),
          p("ul", null, [
            (F(!0), U(re, null, Ee(b.value, (c) => (F(), U("li", {
              key: c.publication
            }, [
              p("a", {
                href: S(c.publication)
              }, g(c.publication), 9, lp),
              p("span", ap, g(c.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : b.value.length === 0 ? (F(), U("details", cp, [
          p("summary", up, g(T(d)("library", "Show top series and periodicals")), 1),
          p("h3", fp, g(T(d)("library", "No series or periodicals found yet")), 1),
          p("p", dp, g(T(d)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Ie("", !0),
        o.value.length === 0 ? (F(), U("div", {
          key: 3,
          class: wn(["library-empty-content", { "library-first-run-guidance": ne.value || ee.value, "library-filter-empty-state": ke.value && !ne.value && !ee.value }]),
          role: "status"
        }, [
          ne.value ? (F(), U(re, { key: 0 }, [
            p("h3", null, g(T(d)("library", "Start with one Library root")), 1),
            p("p", pp, g(T(d)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            p("p", hp, [
              p("a", {
                href: K.value,
                class: "button primary"
              }, g(T(d)("library", "Add a Library root")), 9, mp),
              p("span", bp, g(T(d)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : ee.value ? (F(), U(re, { key: 1 }, [
            p("h3", null, g(T(d)("library", "No enabled Library roots")), 1),
            p("p", yp, g(T(d)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            p("p", gp, [
              p("a", {
                href: K.value,
                class: "button primary"
              }, g(T(d)("library", "Open Library settings")), 9, _p)
            ])
          ], 64)) : ke.value ? (F(), U(re, { key: 2 }, [
            p("h3", null, g(T(d)("library", "No matches for the current filters")), 1),
            p("p", vp, g(T(d)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            p("p", Tp, [
              p("a", {
                href: m(),
                class: "button secondary"
              }, g(T(d)("library", "Clear search")), 9, Ep),
              p("a", Sp, g(T(d)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (F(), U(re, { key: 3 }, [
            p("h3", null, g(T(d)("library", "No catalogue items yet")), 1),
            p("p", xp, g(T(d)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            p("p", Ap, [
              p("a", {
                href: K.value,
                class: "button primary"
              }, g(T(d)("library", "Run a scan from settings")), 9, Cp)
            ])
          ], 64))
        ], 2)) : (F(), U("div", wp, [
          (F(!0), U(re, null, Ee(o.value, (c) => (F(), U("article", {
            key: c.id,
            class: wn(["library-cover-card", { "library-cover-card--open": oe[c.id] }])
          }, [
            p("a", {
              class: "library-cover-link",
              href: c.openUrl,
              "aria-label": `Read ${c.title}`
            }, [
              p("img", {
                class: "library-cover-image",
                src: c.coverUrl,
                alt: `Cover for ${c.title}`,
                loading: "lazy"
              }, null, 8, Op)
            ], 8, Rp),
            p("form", {
              method: "post",
              action: c.starUrl,
              class: "library-cover-star-form",
              onSubmit: Tr((O) => z(c, O), ["prevent"])
            }, [
              p("input", {
                type: "hidden",
                name: "requesttoken",
                value: D.value
              }, null, 8, Pp),
              h[23] || (h[23] = p("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              p("input", {
                type: "hidden",
                name: "starred",
                value: c.starred ? "0" : "1"
              }, null, 8, Lp),
              p("button", {
                type: "submit",
                class: wn(["library-cover-star-button", { "library-cover-star-button--starred": c.starred }]),
                "aria-pressed": c.starred ? "true" : "false",
                title: c.starred ? T(d)("library", "Unstar this publication") : T(d)("library", "Star this publication"),
                "aria-label": c.starred ? T(d)("library", "Unstar this publication") : T(d)("library", "Star this publication"),
                onClick: Tr((O) => z(c, O), ["prevent"])
              }, g(c.starred ? "★" : "☆"), 11, Ip)
            ], 40, Np),
            p("div", Mp, [
              p("div", kp, [
                p("h3", null, [
                  c.starred ? (F(), U("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": T(d)("library", "Starred")
                  }, "★", 8, Dp)) : Ie("", !0),
                  ce(g(c.title), 1)
                ]),
                p("a", {
                  class: "library-cover-read",
                  href: c.openUrl
                }, g(T(d)("library", "Read")), 9, Fp)
              ]),
              p("details", {
                class: "library-cover-details",
                onToggle: (O) => C(c.id, O)
              }, [
                p("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${T(d)("library", "Show details and actions")}: ${c.title}`
                }, g(T(d)("library", "Details")), 9, Hp),
                p("div", jp, [
                  c.creators ? (F(), U("p", $p, g(c.creators), 1)) : Ie("", !0),
                  p("dl", Vp, [
                    p("div", zp, [
                      p("dt", null, g(T(d)("library", "Type")), 1),
                      p("dd", null, g(c.publicationType), 1)
                    ]),
                    c.publication ? (F(), U("div", Bp, [
                      p("dt", null, g(T(d)("library", "Series")), 1),
                      p("dd", null, g(c.publication), 1)
                    ])) : Ie("", !0),
                    c.publicationDate ? (F(), U("div", Wp, [
                      p("dt", null, g(T(d)("library", "Date")), 1),
                      p("dd", null, g(c.publicationDate), 1)
                    ])) : Ie("", !0),
                    c.workflowStatus ? (F(), U("div", qp, [
                      p("dt", null, g(T(d)("library", "Status")), 1),
                      p("dd", null, g(c.workflowStatus), 1)
                    ])) : Ie("", !0),
                    c.hasScannerConflict ? (F(), U("div", Kp, [
                      p("dt", null, g(T(d)("library", "Review")), 1),
                      p("dd", null, g(c.scannerConflictCount) + " fields", 1)
                    ])) : Ie("", !0),
                    c.lastOpenedAt ? (F(), U("div", Gp, [
                      p("dt", null, g(T(d)("library", "Last opened")), 1),
                      p("dd", null, g(c.lastOpenedAt), 1)
                    ])) : Ie("", !0),
                    c.extension ? (F(), U("div", Yp, [
                      p("dt", null, g(T(d)("library", "Format")) + ":", 1),
                      p("dd", null, g(_(c.extension)), 1)
                    ])) : Ie("", !0),
                    c.shelf ? (F(), U("div", Xp, [
                      p("dt", null, g(T(d)("library", "Shelf")), 1),
                      p("dd", null, g(c.shelf), 1)
                    ])) : Ie("", !0)
                  ]),
                  c.description ? (F(), U("p", Jp, g(c.description), 1)) : Ie("", !0),
                  c.scanStatus !== "indexed" || c.scanError ? (F(), U("p", Zp, [
                    ce(" scanStatus: " + g(c.scanStatus || "unknown"), 1),
                    c.scanError ? (F(), U("span", Qp, " · scanError: " + g(c.scanError), 1)) : Ie("", !0)
                  ])) : Ie("", !0),
                  p("div", eh, [
                    w(c).length === 0 ? (F(), U("span", th, "No Nextcloud tags")) : (F(!0), U(re, { key: 1 }, Ee(w(c), (O) => (F(), U("span", {
                      key: O.id,
                      class: "library-tag"
                    }, g(O.name), 1))), 128))
                  ]),
                  p("p", nh, [
                    p("a", {
                      href: c.filesUrl
                    }, g(T(d)("library", "Show in Files")), 9, rh),
                    h[24] || (h[24] = ce(" · ", -1)),
                    p("a", {
                      href: c.downloadUrl
                    }, g(T(d)("library", "Download source")), 9, ih),
                    h[25] || (h[25] = ce(" · ", -1)),
                    p("a", {
                      href: c.detailsUrl
                    }, g(T(d)("library", "Details")), 9, sh)
                  ])
                ])
              ], 40, Up)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, oo = uu("library", "catalogue", {}), Cr = document.querySelector("#library-vue-root"), lo = {
  ...oo,
  requestToken: Cr?.dataset.requestToken || oo.requestToken || ""
};
function G(e) {
  return String(e ?? "");
}
function El(e) {
  return G(e).toUpperCase();
}
function lh(e, t, n, r = G) {
  for (const i of t) {
    const s = document.createElement("option");
    s.value = G(i), s.textContent = r(i), G(i) === G(n) && (s.selected = !0), e.appendChild(s);
  }
}
function ao(e, t, n, r, i = "") {
  const s = document.createElement("label");
  s.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = G(r), o.placeholder = i, s.appendChild(o), e.appendChild(s);
}
function En(e, t, n, r, i, s, o = G) {
  const l = document.createElement("label");
  l.textContent = t;
  const u = document.createElement("select");
  u.name = n;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, u.appendChild(v), lh(u, s, r, o), l.appendChild(u), e.appendChild(l);
}
function Sn(e) {
  const t = G(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function ah(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function ch(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && G(r).trim() !== "");
}
function uh() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Vn(e, t, n, r) {
  const i = document.createElement("a");
  return i.href = t, i.className = n, i.textContent = r, e.appendChild(i), i;
}
function fh(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function dh(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", d("library", "Catalogue search and filters")), ao(r, d("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), En(r, d("library", "Type"), "type", n.type, d("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), ao(r, d("library", "Nextcloud tag"), "tag", n.tag, "photography"), En(r, d("library", "Format"), "format", n.format, d("library", "All formats"), e.formats || [], El), En(r, d("library", "Shelf"), "shelf", n.shelf, d("library", "All shelves"), e.shelves || []), En(r, d("library", "Scan status"), "status", n.status, d("library", "All scan statuses"), e.scanStatuses || []), En(r, d("library", "Sort"), "sort", n.sort || "title", d("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), En(r, d("library", "Page size"), "limit", t.limit || 100, d("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", d("library", "Apply catalogue filters")), i.textContent = d("library", "Apply filters");
  const s = document.createElement("a");
  return s.href = "?", s.className = "button secondary", s.setAttribute("aria-label", d("library", "Clear catalogue filters")), s.textContent = d("library", "Clear"), r.append(i, s), r;
}
function ph(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", d("library", "Quick catalogue filters"));
  let i = null;
  const s = () => {
    window.clearTimeout(i), i = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [x, L] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(x) || G(L).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = x, j.value = G(L), r.appendChild(j);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = d("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = G(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", s), o.appendChild(l), r.appendChild(o);
  const u = [
    [d("library", "Sort"), "sort", n.sort || "title", [["title", d("library", "Title")], ["recent", d("library", "Recently added")], ["publicationDate", d("library", "Publication date")], ["publication", d("library", "Series")], ["lastOpened", d("library", "Recently opened")], ["format", d("library", "Format")]]],
    [d("library", "Starred"), "starred", n.starred || "", [["", d("library", "All")], ["1", d("library", "Starred")]]],
    [d("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [x, L, j, J] of u) {
    const $ = document.createElement("label");
    $.textContent = x;
    const Z = document.createElement("select");
    Z.name = L;
    for (const [V, k] of J) {
      const K = document.createElement("option");
      K.value = G(V), K.textContent = G(k), G(V) === G(j) && (K.selected = !0), Z.appendChild(K);
    }
    Z.addEventListener("change", () => r.requestSubmit()), $.appendChild(Z), r.appendChild($);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", d("library", "Apply catalogue filters")), v.textContent = d("library", "Apply filters");
  const b = document.createElement("a");
  return b.href = "?", b.className = "button secondary", b.setAttribute("aria-label", d("library", "Clear catalogue filters")), b.textContent = d("library", "Clear all"), r.append(v, b), r;
}
function hh(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, i = G(e.settingsUrl || ""), s = G(e.metadataExportUrl || ""), o = G(e.batchTagUrl || "/apps/library/bulk/tags"), l = G(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), u = G(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = G(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), b = G(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), x = document.createElement("div");
  x.className = "library-vue-catalogue library-vue-fallback", x.dataset.vueFallback = "true";
  const L = document.createElement("section");
  L.className = "library-panel", L.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const J = document.createElement("div"), $ = document.createElement("h2");
  $.id = "library-catalogue-heading", $.textContent = d("library", "Publication catalogue");
  const Z = document.createElement("p");
  Z.className = "library-muted", Z.textContent = d("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), J.append($, Z);
  const V = document.createElement("nav");
  if (V.className = "library-catalogue-toolbar", V.setAttribute("aria-label", d("library", "Library actions")), i) {
    const h = document.createElement("a");
    h.href = i, h.className = "button secondary", h.setAttribute("aria-label", "Open Library settings"), h.textContent = d("library", "Settings"), V.appendChild(h);
  }
  if (s) {
    const h = document.createElement("a");
    h.href = s, h.className = "button secondary", h.setAttribute("aria-label", "Export corrected metadata"), h.textContent = d("library", "Export corrected metadata"), V.appendChild(h);
  }
  if (e.metadataSidecarManifestUrl) {
    const h = document.createElement("a");
    h.href = e.metadataSidecarManifestUrl, h.className = "button secondary", h.setAttribute("aria-label", "Export sidecar manifest"), h.textContent = d("library", "Sidecar manifest"), V.appendChild(h);
  }
  if (e.metadataSidecarBundleUrl) {
    const h = document.createElement("a");
    h.href = e.metadataSidecarBundleUrl, h.className = "button secondary", h.setAttribute("aria-label", "Export sidecar ZIP"), h.textContent = d("library", "Sidecar ZIP"), V.appendChild(h);
  }
  j.append(J, V), L.appendChild(j), L.appendChild(ph(e, r));
  const k = document.createElement("details");
  k.className = "library-filter-panel";
  const K = document.createElement("summary");
  K.className = "library-filter-panel-summary", K.textContent = d("library", "Show catalogue filters"), k.append(K, dh(e, r)), L.appendChild(k);
  const D = document.createElement("p");
  D.className = "library-muted library-filter-result-summary", D.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const ie = document.createElement("a");
  ie.href = "?", ie.textContent = ` ${d("library", "Clear all filters")}`, D.appendChild(ie), L.appendChild(D);
  const _e = document.createElement("details");
  _e.className = "library-batch-actions";
  const ve = document.createElement("summary");
  ve.textContent = `${d("library", "Batch actions for current results")} (${r.total ?? n.length} ${d("library", "Current filter result")})`;
  const Te = document.createElement("form");
  Te.method = "post", Te.action = o, Te.className = "library-batch-tag-form";
  const be = Sn(e);
  be && Te.appendChild(be);
  for (const [h, c] of Object.entries(e.activeFilters || {})) {
    if (G(c).trim() === "") continue;
    const O = document.createElement("input");
    O.type = "hidden", O.name = h, O.value = G(c), Te.appendChild(O);
  }
  const xe = document.createElement("label");
  xe.textContent = d("library", "Apply Nextcloud tag to current results");
  const Ve = document.createElement("input");
  Ve.type = "text", Ve.name = "nextcloudTagName", Ve.placeholder = "batch-review", xe.appendChild(Ve);
  const it = document.createElement("button");
  it.type = "submit", it.className = "button secondary", it.textContent = d("library", "Apply Nextcloud tag to current results");
  const ze = document.createElement("p");
  ze.className = "library-muted", ze.textContent = d("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Te.append(xe, it, ze);
  const Be = document.createElement("form");
  Be.method = "post", Be.action = l, Be.className = "library-batch-tag-remove-form";
  const Xe = Sn(e);
  Xe && Be.appendChild(Xe);
  for (const [h, c] of Object.entries(e.activeFilters || {})) {
    if (G(c).trim() === "") continue;
    const O = document.createElement("input");
    O.type = "hidden", O.name = h, O.value = G(c), Be.appendChild(O);
  }
  const ye = document.createElement("label");
  ye.textContent = d("library", "Nextcloud tag");
  const ne = document.createElement("input");
  ne.type = "text", ne.name = "nextcloudTagName", ne.setAttribute("list", "library-nextcloud-tag-suggestions"), ne.placeholder = d("library", "e.g. Review"), ne.autocomplete = "off", ye.appendChild(ne);
  const ee = document.createElement("button");
  ee.type = "submit", ee.className = "button secondary", ee.textContent = d("library", "Remove tag from current results");
  const ke = document.createElement("p");
  ke.className = "library-muted", ke.textContent = d("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), Be.append(ye, ee, ke);
  const Ue = document.createElement("form");
  Ue.method = "post", Ue.action = u, Ue.className = "library-batch-metadata-reset-form";
  const He = Sn(e);
  He && Ue.appendChild(He);
  for (const [h, c] of Object.entries(e.activeFilters || {})) {
    if (G(c).trim() === "") continue;
    const O = document.createElement("input");
    O.type = "hidden", O.name = h, O.value = G(c), Ue.appendChild(O);
  }
  const Ne = document.createElement("input");
  Ne.type = "hidden", Ne.name = "scannerConflicts", Ne.value = "1";
  const Je = document.createElement("button");
  Je.type = "submit", Je.className = "button secondary", Je.textContent = d("library", "Reset filtered metadata");
  const oe = document.createElement("p");
  oe.className = "library-muted", oe.textContent = d("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ue.append(Ne, Je, oe);
  const Pe = document.createElement("form");
  Pe.method = "post", Pe.action = v, Pe.className = "library-batch-metadata-edit-preview-form", Pe.target = "_blank";
  const st = Sn(e);
  st && Pe.appendChild(st);
  for (const [h, c] of Object.entries(e.activeFilters || {})) {
    if (G(c).trim() === "") continue;
    const O = document.createElement("input");
    O.type = "hidden", O.name = h, O.value = G(c), Pe.appendChild(O);
  }
  const ht = document.createElement("label");
  ht.textContent = d("library", "Metadata field");
  const yt = document.createElement("select");
  yt.name = "bulkEditField";
  for (const [h, c] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const O = document.createElement("option");
    O.value = h, O.textContent = d("library", c), yt.appendChild(O);
  }
  ht.appendChild(yt);
  const Ze = document.createElement("label");
  Ze.textContent = d("library", "Preview value");
  const We = document.createElement("input");
  We.type = "text", We.name = "bulkEditValue", We.placeholder = "magazine, de, photography...", We.autocomplete = "off", Ze.appendChild(We);
  const St = document.createElement("button");
  St.type = "submit", St.className = "button secondary", St.textContent = d("library", "Preview metadata edit");
  const f = document.createElement("p");
  f.className = "library-muted", f.textContent = d("library", "Preview-first batch metadata edit for current filter results. No changes are written during preview."), Pe.append(ht, Ze, St, f);
  const m = document.createElement("form");
  m.method = "post", m.action = b, m.className = "library-batch-cover-refresh-form";
  const _ = Sn(e);
  _ && m.appendChild(_);
  for (const [h, c] of Object.entries(e.activeFilters || {})) {
    if (G(c).trim() === "") continue;
    const O = document.createElement("input");
    O.type = "hidden", O.name = h, O.value = G(c), m.appendChild(O);
  }
  const w = document.createElement("button");
  w.type = "submit", w.className = "button secondary", w.textContent = d("library", "Request fresh cover previews");
  const S = document.createElement("p");
  S.className = "library-muted", S.textContent = d("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), m.append(w, S), _e.append(ve, Te, Be, Ue, Pe, m), L.appendChild(_e);
  const C = document.createElement("nav");
  C.className = "library-pagination", C.setAttribute("aria-label", d("library", "Catalogue pagination"));
  const I = document.createElement("span");
  I.className = "library-pagination-range", I.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, C.appendChild(I), L.appendChild(C);
  const N = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], P = document.createElement("details");
  P.className = N.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const A = document.createElement("summary");
  A.className = "library-periodical-groups-summary", A.textContent = d("library", "Show top series and periodicals"), P.appendChild(A);
  const z = document.createElement("h3");
  z.textContent = N.length > 0 ? d("library", "Top series and periodicals") : d("library", "No series or periodicals found yet");
  const E = document.createElement("p");
  if (E.className = "library-muted", E.textContent = N.length > 0 ? d("library", "Jump into recurring publications with one click.") : d("library", "Add publication or series names in item details to build this shortcut panel."), P.append(z, E), N.length > 0) {
    const h = document.createElement("ul");
    for (const c of N) {
      const O = document.createElement("li"), q = document.createElement("a");
      q.href = ah(G(c.publication)), q.textContent = G(c.publication);
      const B = document.createElement("span");
      B.className = "library-muted", B.textContent = `${c.itemCount} items`, O.append(q, B), h.appendChild(O);
    }
    P.appendChild(h);
  }
  if (L.appendChild(P), n.length === 0) {
    const h = document.createElement("div"), c = Number(e.rootCount || 0), O = Number(e.enabledRootCount || 0), q = ch(e);
    h.className = "library-empty-content", (c === 0 || O === 0) && h.classList.add("library-first-run-guidance"), q && c > 0 && O > 0 && h.classList.add("library-filter-empty-state"), h.setAttribute("role", "status");
    const B = document.createElement("h3"), se = document.createElement("p");
    se.className = "library-muted";
    const te = document.createElement("p");
    te.className = "library-empty-actions", c === 0 ? (B.textContent = d("library", "Start with one Library root"), se.textContent = d("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Vn(te, i, "button primary", d("library", "Add a Library root")), fh(te, d("library", "Run a scan after saving a root"))) : O === 0 ? (B.textContent = d("library", "No enabled Library roots"), se.textContent = d("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Vn(te, i, "button primary", d("library", "Open Library settings"))) : q ? (B.textContent = d("library", "No matches for the current filters"), se.textContent = d("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Vn(te, uh(), "button secondary", d("library", "Clear search")), Vn(te, "?", "button primary", d("library", "Clear all filters"))) : (B.textContent = d("library", "No catalogue items yet"), se.textContent = d("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Vn(te, i, "button primary", d("library", "Run a scan from settings"))), h.append(B, se, te), L.appendChild(h);
  } else {
    const h = document.createElement("div");
    h.className = "library-cover-gallery";
    for (const c of n) {
      const O = document.createElement("article");
      O.className = "library-cover-card";
      const q = document.createElement("a");
      q.className = "library-cover-link", q.href = G(c.openUrl || "#"), q.setAttribute("aria-label", `Read ${G(c.title || "publication")}`);
      const B = document.createElement("img");
      B.className = "library-cover-image", B.src = G(c.coverUrl || ""), B.alt = `Cover for ${G(c.title || "publication")}`, B.loading = "lazy", q.appendChild(B);
      const se = Sn(e), te = document.createElement("form");
      te.method = "post", te.action = G(c.starUrl || ""), te.className = "library-cover-star-form", se && te.appendChild(se);
      const we = document.createElement("input");
      we.type = "hidden", we.name = "returnTo", we.value = "catalogue";
      const Le = document.createElement("input");
      Le.type = "hidden", Le.name = "starred", Le.value = c.starred ? "0" : "1";
      const Re = document.createElement("button");
      Re.type = "submit", Re.className = c.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Re.setAttribute("aria-pressed", c.starred ? "true" : "false"), Re.setAttribute("aria-label", c.starred ? d("library", "Unstar this publication") : d("library", "Star this publication")), Re.title = c.starred ? d("library", "Unstar this publication") : d("library", "Star this publication"), Re.textContent = c.starred ? "★" : "☆", te.append(we, Le, Re);
      const ot = document.createElement("div");
      ot.className = "library-cover-summary";
      const Ae = document.createElement("h3");
      if (Ae.textContent = G(c.title || "Untitled publication"), ot.appendChild(Ae), c.creators) {
        const Ct = document.createElement("p");
        Ct.className = "library-creator", Ct.textContent = G(c.creators), ot.appendChild(Ct);
      }
      const je = document.createElement("dl");
      je.className = "library-cover-detail-list";
      const Qt = [
        ["Type", G(c.publicationType || "other")],
        ["Format", c.extension ? El(c.extension) : ""],
        ["Shelf", c.shelf ? G(c.shelf) : ""]
      ].filter(([, Ct]) => Ct !== "");
      for (const [Ct, lr] of Qt) {
        const yn = document.createElement("div");
        yn.className = "library-cover-detail-chip";
        const In = document.createElement("dt");
        In.textContent = Ct;
        const Mn = document.createElement("dd");
        Mn.textContent = lr, yn.append(In, Mn), je.appendChild(yn);
      }
      ot.appendChild(je);
      const Kt = document.createElement("p"), en = document.createElement("a");
      en.href = G(c.openUrl || "#"), en.textContent = d("library", "Read");
      const tn = document.createElement("a");
      tn.href = G(c.filesUrl || "#"), tn.textContent = d("library", "Show in Files");
      const xt = document.createElement("a");
      xt.href = G(c.downloadUrl || "#"), xt.textContent = d("library", "Download source");
      const At = document.createElement("a");
      At.href = G(c.detailsUrl || "#"), At.textContent = d("library", "Details"), Kt.append(en, document.createTextNode(" · "), tn, document.createTextNode(" · "), xt, document.createTextNode(" · "), At), ot.appendChild(Kt), O.append(q, te, ot), h.appendChild(O);
    }
    L.appendChild(h);
  }
  return x.appendChild(L), x;
}
if (Cr)
  try {
    lu(oh, { state: lo }).mount(Cr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Cr.replaceChildren(hh(lo));
  }
//# sourceMappingURL=library-main.mjs.map
