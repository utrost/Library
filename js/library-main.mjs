// @__NO_SIDE_EFFECTS__
function Ns(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const me = {}, _n = [], Ot = () => {
}, co = () => !1, Or = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Nr = (e) => e.startsWith("onUpdate:"), Ye = Object.assign, Ps = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hl = Object.prototype.hasOwnProperty, de = (e, t) => Hl.call(e, t), K = Array.isArray, qt = (e) => Jn(e) === "[object Map]", an = (e) => Jn(e) === "[object Set]", di = (e) => Jn(e) === "[object Date]", ee = (e) => typeof e == "function", xe = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", uo = (e) => (he(e) || ee(e)) && ee(e.then) && ee(e.catch), fo = Object.prototype.toString, Jn = (e) => fo.call(e), jl = (e) => Jn(e).slice(8, -1), po = (e) => Jn(e) === "[object Object]", Is = (e) => xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Hn = /* @__PURE__ */ Ns(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $l = /-\w/g, gt = Pr(
  (e) => e.replace($l, (t) => t.slice(1).toUpperCase())
), Vl = /\B([A-Z])/g, cn = Pr(
  (e) => e.replace(Vl, "-$1").toLowerCase()
), ho = Pr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Jr = Pr(
  (e) => e ? `on${ho(e)}` : ""
), Rt = (e, t) => !Object.is(e, t), br = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, mo = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Ir = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let pi;
const Lr = () => pi || (pi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ls(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = xe(r) ? ql(r) : Ls(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (xe(e) || he(e))
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
function vn(e) {
  let t = "";
  if (xe(e))
    t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const r = vn(e[n]);
      r && (t += r + " ");
    }
  else if (he(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Kl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gl = /* @__PURE__ */ Ns(Kl);
function bo(e) {
  return !!e || e === "";
}
function Yl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Kt(e[r], t[r]);
  return n;
}
function hi(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const s of e) {
    let i = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Kt(s, n[o])) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    r[i] = 1;
  }
  return !0;
}
function Kt(e, t) {
  if (e === t) return !0;
  let n = di(e), r = di(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Nt(e), r = Nt(t), n || r)
    return e === t;
  if (n = K(e), r = K(t), n || r)
    return n && r ? Yl(e, t) : !1;
  if (n = he(e), r = he(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = qt(e), r = qt(t), n || r || (n = an(e), r = an(t), n || r))
      return n && r ? hi(e, t) : !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Kt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Xl(e, t) {
  return e.findIndex((n) => Kt(n, t));
}
const yo = (e) => !!(e && e.__v_isRef === !0), v = (e) => xe(e) ? e : e == null ? "" : K(e) || he(e) && (e.toString === fo || !ee(e.toString)) ? yo(e) ? v(e.value) : JSON.stringify(e, go, 2) : String(e), go = (e, t) => yo(t) ? go(e, t.value) : qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], i) => (n[Zr(r, i) + " =>"] = s, n),
    {}
  )
} : an(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Zr(n))
} : Nt(t) ? Zr(t) : he(t) && !K(t) && !po(t) ? String(t) : t, Zr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Be;
class Jl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Be && (Be.active ? (this.parent = Be, this.index = (Be.scopes || (Be.scopes = [])).push(
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
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Be;
      try {
        return Be = this, t();
      } finally {
        Be = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Be, Be = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Be === this)
        Be = this.prevScope;
      else {
        let t = Be;
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
        const s = this.scopes.slice();
        for (n = 0, r = s.length; n < r; n++)
          s[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Zl() {
  return Be;
}
let _e;
const Qr = /* @__PURE__ */ new WeakSet();
class _o {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Be && (Be.active ? Be.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Qr.has(this) && (Qr.delete(this), this.trigger()));
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
    this.flags |= 2, mi(this), So(this);
    const t = _e, n = _t;
    _e = this, _t = !0;
    try {
      return this.fn();
    } finally {
      Eo(this), _e = t, _t = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ks(t);
      this.deps = this.depsTail = void 0, mi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Qr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gs(this) && this.run();
  }
  get dirty() {
    return gs(this);
  }
}
let vo = 0, jn, $n;
function To(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $n, $n = e;
    return;
  }
  e.next = jn, jn = e;
}
function Ms() {
  vo++;
}
function Ds() {
  if (--vo > 0)
    return;
  if ($n) {
    let t = $n;
    for ($n = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jn; ) {
    let t = jn;
    for (jn = void 0; t; ) {
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
function So(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Eo(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), ks(r), Ql(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function gs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ao(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ao(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wn) || (e.globalVersion = Wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !gs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = _e, r = _t;
  _e = e, _t = !0;
  try {
    So(e);
    const s = e.fn(e._value);
    (t.version === 0 || Rt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    _e = n, _t = r, Eo(e), e.flags &= -3;
  }
}
function ks(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      ks(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ql(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let _t = !0;
const xo = [];
function Ut() {
  xo.push(_t), _t = !1;
}
function Ht() {
  const e = xo.pop();
  _t = e === void 0 ? !0 : e;
}
function mi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = _e;
    _e = void 0;
    try {
      t();
    } finally {
      _e = n;
    }
  }
}
let Wn = 0;
class ea {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!_e || !_t || _e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _e)
      n = this.activeLink = new ea(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, Co(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = _e.depsTail, n.nextDep = void 0, _e.depsTail.nextDep = n, _e.depsTail = n, _e.deps === n && (_e.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wn++, this.notify(t);
  }
  notify(t) {
    Ms();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ds();
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
const _s = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ Symbol(
  ""
), vs = /* @__PURE__ */ Symbol(
  ""
), qn = /* @__PURE__ */ Symbol(
  ""
);
function Ke(e, t, n) {
  if (_t && _e) {
    let r = _s.get(e);
    r || _s.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Fs()), s.map = r, s.key = n), s.track();
  }
}
function Dt(e, t, n, r, s, i) {
  const o = _s.get(e);
  if (!o) {
    Wn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ms(), t === "clear")
    o.forEach(l);
  else {
    const c = K(e), _ = c && Is(n);
    if (c && n === "length") {
      const h = Number(r);
      o.forEach((A, L) => {
        (L === "length" || L === qn || !Nt(L) && L >= h) && l(A);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), _ && l(o.get(qn)), t) {
        case "add":
          c ? _ && l(o.get("length")) : (l(o.get(sn)), qt(e) && l(o.get(vs)));
          break;
        case "delete":
          c || (l(o.get(sn)), qt(e) && l(o.get(vs)));
          break;
        case "set":
          qt(e) && l(o.get(sn));
          break;
      }
  }
  Ds();
}
function mn(e) {
  const t = /* @__PURE__ */ fe(e);
  return t === e ? t : (Ke(t, "iterate", qn), /* @__PURE__ */ bt(e) ? t : t.map(vt));
}
function Mr(e) {
  return Ke(e = /* @__PURE__ */ fe(e), "iterate", qn), e;
}
function Ct(e, t) {
  return /* @__PURE__ */ jt(e) ? An(/* @__PURE__ */ on(e) ? vt(t) : t) : vt(t);
}
const ta = {
  __proto__: null,
  [Symbol.iterator]() {
    return es(this, Symbol.iterator, (e) => Ct(this, e));
  },
  concat(...e) {
    return mn(this).concat(
      ...e.map((t) => K(t) ? mn(t) : t)
    );
  },
  entries() {
    return es(this, "entries", (e) => (e[1] = Ct(this, e[1]), e));
  },
  every(e, t) {
    return It(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return It(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Ct(this, r)),
      arguments
    );
  },
  find(e, t) {
    return It(
      this,
      "find",
      e,
      t,
      (n) => Ct(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return It(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return It(
      this,
      "findLast",
      e,
      t,
      (n) => Ct(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return It(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return It(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ts(this, "includes", e);
  },
  indexOf(...e) {
    return ts(this, "indexOf", e);
  },
  join(e) {
    return mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ts(this, "lastIndexOf", e);
  },
  map(e, t) {
    return It(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Nn(this, "pop");
  },
  push(...e) {
    return Nn(this, "push", e);
  },
  reduce(e, ...t) {
    return bi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return bi(this, "reduceRight", e, t);
  },
  shift() {
    return Nn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return It(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Nn(this, "splice", e);
  },
  toReversed() {
    return mn(this).toReversed();
  },
  toSorted(e) {
    return mn(this).toSorted(e);
  },
  toSpliced(...e) {
    return mn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Nn(this, "unshift", e);
  },
  values() {
    return es(this, "values", (e) => Ct(this, e));
  }
};
function es(e, t, n) {
  const r = Mr(e), s = r[t]();
  return r !== e && !/* @__PURE__ */ bt(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const na = Array.prototype;
function It(e, t, n, r, s, i) {
  const o = Mr(e), l = o !== e && !/* @__PURE__ */ bt(e), c = o[t];
  if (c !== na[t]) {
    const A = c.apply(e, i);
    return l ? vt(A) : A;
  }
  let _ = n;
  o !== e && (l ? _ = function(A, L) {
    return n.call(this, Ct(e, A), L, e);
  } : n.length > 2 && (_ = function(A, L) {
    return n.call(this, A, L, e);
  }));
  const h = c.call(o, _, r);
  return l && s ? s(h) : h;
}
function bi(e, t, n, r) {
  const s = Mr(e), i = s !== e && !/* @__PURE__ */ bt(e);
  let o = n, l = !1;
  s !== e && (i ? (l = r.length === 0, o = function(_, h, A) {
    return l && (l = !1, _ = Ct(e, _)), n.call(this, _, Ct(e, h), A, e);
  }) : n.length > 3 && (o = function(_, h, A) {
    return n.call(this, _, h, A, e);
  }));
  const c = s[t](o, ...r);
  return l ? Ct(e, c) : c;
}
function ts(e, t, n) {
  const r = /* @__PURE__ */ fe(e);
  Ke(r, "iterate", qn);
  const s = r[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ js(n[0]) ? (n[0] = /* @__PURE__ */ fe(n[0]), r[t](...n)) : s;
}
function Nn(e, t, n = []) {
  Ut(), Ms();
  const r = (/* @__PURE__ */ fe(e))[t].apply(e, n);
  return Ds(), Ht(), r;
}
const ra = /* @__PURE__ */ Ns("__proto__,__v_isRef,__isVue"), wo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt)
);
function sa(e) {
  Nt(e) || (e = String(e));
  const t = /* @__PURE__ */ fe(this);
  return Ke(t, "has", e), t.hasOwnProperty(e);
}
class Ro {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return r === (s ? i ? ha : Io : i ? Po : No).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = K(t);
    if (!s) {
      let c;
      if (o && (c = ta[n]))
        return c;
      if (n === "hasOwnProperty")
        return sa;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ge(t) ? t : r
    );
    if ((Nt(n) ? wo.has(n) : ra(n)) || (s || Ke(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ Ge(l)) {
      const c = o && Is(n) ? l : l.value;
      return s && he(c) ? /* @__PURE__ */ Ss(c) : c;
    }
    return he(l) ? s ? /* @__PURE__ */ Ss(l) : /* @__PURE__ */ nn(l) : l;
  }
}
class Oo extends Ro {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    const o = K(t) && Is(n);
    if (!this._isShallow) {
      const _ = /* @__PURE__ */ jt(i);
      if (!/* @__PURE__ */ bt(r) && !/* @__PURE__ */ jt(r) && (i = /* @__PURE__ */ fe(i), r = /* @__PURE__ */ fe(r)), !o && /* @__PURE__ */ Ge(i) && !/* @__PURE__ */ Ge(r))
        return _ || (i.value = r), !0;
    }
    const l = o ? Number(n) < t.length : de(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Ge(t) ? t : s
    );
    return t === /* @__PURE__ */ fe(s) && c && (l ? Rt(r, i) && Dt(t, "set", n, r) : Dt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = de(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Dt(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Nt(n) || !wo.has(n)) && Ke(t, "has", n), r;
  }
  ownKeys(t) {
    return Ke(
      t,
      "iterate",
      K(t) ? "length" : sn
    ), Reflect.ownKeys(t);
  }
}
class ia extends Ro {
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
const oa = /* @__PURE__ */ new Oo(), la = /* @__PURE__ */ new ia(), aa = /* @__PURE__ */ new Oo(!0);
const Ts = (e) => e, ar = (e) => Reflect.getPrototypeOf(e);
function ca(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = /* @__PURE__ */ fe(s), o = qt(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, _ = s[e](...r), h = n ? Ts : t ? An : vt;
    return !t && Ke(
      i,
      "iterate",
      c ? vs : sn
    ), Ye(
      // inheriting all iterator properties
      Object.create(_),
      {
        // iterator protocol
        next() {
          const { value: A, done: L } = _.next();
          return L ? { value: A, done: L } : {
            value: l ? [h(A[0]), h(A[1])] : h(A),
            done: L
          };
        }
      }
    );
  };
}
function cr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ua(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ fe(i), l = /* @__PURE__ */ fe(s);
      e || (Rt(s, l) && Ke(o, "get", s), Ke(o, "get", l));
      const { has: c } = ar(o), _ = t ? Ts : e ? An : vt;
      if (c.call(o, s))
        return _(i.get(s));
      if (c.call(o, l))
        return _(i.get(l));
      i !== o && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Ke(/* @__PURE__ */ fe(s), "iterate", sn), s.size;
    },
    has(s) {
      const i = this.__v_raw, o = /* @__PURE__ */ fe(i), l = /* @__PURE__ */ fe(s);
      return e || (Rt(s, l) && Ke(o, "has", s), Ke(o, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ fe(l), _ = t ? Ts : e ? An : vt;
      return !e && Ke(c, "iterate", sn), l.forEach((h, A) => s.call(i, _(h), _(A), o));
    }
  };
  return Ye(
    n,
    e ? {
      add: cr("add"),
      set: cr("set"),
      delete: cr("delete"),
      clear: cr("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ fe(this), o = ar(i), l = /* @__PURE__ */ fe(s), c = !t && !/* @__PURE__ */ bt(s) && !/* @__PURE__ */ jt(s) ? l : s;
        return o.has.call(i, c) || Rt(s, c) && o.has.call(i, s) || Rt(l, c) && o.has.call(i, l) || (i.add(c), Dt(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ bt(i) && !/* @__PURE__ */ jt(i) && (i = /* @__PURE__ */ fe(i));
        const o = /* @__PURE__ */ fe(this), { has: l, get: c } = ar(o);
        let _ = l.call(o, s);
        _ || (s = /* @__PURE__ */ fe(s), _ = l.call(o, s));
        const h = c.call(o, s);
        return o.set(s, i), _ ? Rt(i, h) && Dt(o, "set", s, i) : Dt(o, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ fe(this), { has: o, get: l } = ar(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ fe(s), c = o.call(i, s)), l && l.call(i, s);
        const _ = i.delete(s);
        return c && Dt(i, "delete", s, void 0), _;
      },
      clear() {
        const s = /* @__PURE__ */ fe(this), i = s.size !== 0, o = s.clear();
        return i && Dt(
          s,
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
  ].forEach((s) => {
    n[s] = ca(s, e, t);
  }), n;
}
function Us(e, t) {
  const n = ua(e, t);
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    de(n, s) && s in r ? n : r,
    s,
    i
  );
}
const fa = {
  get: /* @__PURE__ */ Us(!1, !1)
}, da = {
  get: /* @__PURE__ */ Us(!1, !0)
}, pa = {
  get: /* @__PURE__ */ Us(!0, !1)
};
const No = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), Io = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap();
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
function nn(e) {
  return /* @__PURE__ */ jt(e) ? e : Hs(
    e,
    !1,
    oa,
    fa,
    No
  );
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
  return Hs(
    e,
    !1,
    aa,
    da,
    Po
  );
}
// @__NO_SIDE_EFFECTS__
function Ss(e) {
  return Hs(
    e,
    !0,
    la,
    pa,
    Io
  );
}
function Hs(e, t, n, r, s) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = ma(jl(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return /* @__PURE__ */ jt(e) ? /* @__PURE__ */ on(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function js(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function fe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ fe(t) : e;
}
function ya(e) {
  return !de(e, "__v_skip") && Object.isExtensible(e) && mo(e, "__v_skip", !0), e;
}
const vt = (e) => he(e) ? /* @__PURE__ */ nn(e) : e, An = (e) => he(e) ? /* @__PURE__ */ Ss(e) : e;
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
    this.dep = new Fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ fe(t), this._value = n ? t : vt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ bt(t) || /* @__PURE__ */ jt(t);
    t = r ? t : /* @__PURE__ */ fe(t), Rt(t, n) && (this._rawValue = t, this._value = r ? t : vt(t), this.dep.trigger());
  }
}
function E(e) {
  return /* @__PURE__ */ Ge(e) ? e.value : e;
}
const Ta = {
  get: (e, t, n) => t === "__v_raw" ? e : E(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return /* @__PURE__ */ Ge(s) && !/* @__PURE__ */ Ge(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Lo(e) {
  return /* @__PURE__ */ on(e) ? e : new Proxy(e, Ta);
}
class Sa {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Fs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _e !== this)
      return To(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ao(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ea(e, t, n = !1) {
  let r, s;
  return ee(e) ? r = e : (r = e.get, s = e.set), new Sa(r, s, n);
}
const ur = {}, vr = /* @__PURE__ */ new WeakMap();
let Qt;
function Aa(e, t = !1, n = Qt) {
  if (n) {
    let r = vr.get(n);
    r || vr.set(n, r = []), r.push(e);
  }
}
function xa(e, t, n = me) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: c } = n, _ = (D) => s ? D : /* @__PURE__ */ bt(D) || s === !1 || s === 0 ? kt(D, 1) : kt(D);
  let h, A, L, F, G = !1, j = !1;
  if (/* @__PURE__ */ Ge(e) ? (A = () => e.value, G = /* @__PURE__ */ bt(e)) : /* @__PURE__ */ on(e) ? (A = () => _(e), G = !0) : K(e) ? (j = !0, G = e.some((D) => /* @__PURE__ */ on(D) || /* @__PURE__ */ bt(D)), A = () => e.map((D) => {
    if (/* @__PURE__ */ Ge(D))
      return D.value;
    if (/* @__PURE__ */ on(D))
      return _(D);
    if (ee(D))
      return c ? c(D, 2) : D();
  })) : ee(e) ? t ? A = c ? () => c(e, 2) : e : A = () => {
    if (L) {
      Ut();
      try {
        L();
      } finally {
        Ht();
      }
    }
    const D = Qt;
    Qt = h;
    try {
      return c ? c(e, 3, [F]) : e(F);
    } finally {
      Qt = D;
    }
  } : A = Ot, t && s) {
    const D = A, oe = s === !0 ? 1 / 0 : s;
    A = () => kt(D(), oe);
  }
  const Z = Zl(), z = () => {
    h.stop(), Z && Z.active && Ps(Z.effects, h);
  };
  if (i && t) {
    const D = t;
    t = (...oe) => {
      const be = D(...oe);
      return z(), be;
    };
  }
  let I = j ? new Array(e.length).fill(ur) : ur;
  const q = (D) => {
    if (!(!(h.flags & 1) || !h.dirty && !D))
      if (t) {
        const oe = h.run();
        if (D || s || G || (j ? oe.some((be, Ee) => Rt(be, I[Ee])) : Rt(oe, I))) {
          L && L();
          const be = Qt;
          Qt = h;
          try {
            const Ee = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              I === ur ? void 0 : j && I[0] === ur ? [] : I,
              F
            ];
            I = oe, c ? c(t, 3, Ee) : (
              // @ts-expect-error
              t(...Ee)
            );
          } finally {
            Qt = be;
          }
        }
      } else
        h.run();
  };
  return l && l(q), h = new _o(A), h.scheduler = o ? () => o(q, !1) : q, F = (D) => Aa(D, !1, h), L = h.onStop = () => {
    const D = vr.get(h);
    if (D) {
      if (c)
        c(D, 4);
      else
        for (const oe of D) oe();
      vr.delete(h);
    }
  }, t ? r ? q(!0) : I = h.run() : o ? o(q.bind(null, !0), !0) : h.run(), z.pause = h.pause.bind(h), z.resume = h.resume.bind(h), z.stop = z, z;
}
function kt(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ge(e))
    kt(e.value, t, n);
  else if (K(e))
    for (let r = 0; r < e.length; r++)
      kt(e[r], t, n);
  else if (an(e) || qt(e))
    e.forEach((r) => {
      kt(r, t, n);
    });
  else if (po(e)) {
    for (const r in e)
      kt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && kt(e[r], t, n);
  }
  return e;
}
function Zn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Dr(s, t, n);
  }
}
function Tt(e, t, n, r) {
  if (ee(e)) {
    const s = Zn(e, t, n, r);
    return s && uo(s) && s.catch((i) => {
      Dr(i, t, n);
    }), s;
  }
  if (K(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Tt(e[i], t, n, r));
    return s;
  }
}
function Dr(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || me;
  if (t) {
    let l = t.parent;
    const c = t.proxy, _ = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const h = l.ec;
      if (h) {
        for (let A = 0; A < h.length; A++)
          if (h[A](e, c, _) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ut(), Zn(i, null, 10, [
        e,
        c,
        _
      ]), Ht();
      return;
    }
  }
  Ca(e, n, s, r, o);
}
function Ca(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const et = [];
let xt = -1;
const Tn = [];
let Wt = null, yn = 0;
const Mo = /* @__PURE__ */ Promise.resolve();
let Tr = null;
function Do(e) {
  const t = Tr || Mo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wa(e) {
  let t = xt + 1, n = et.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = et[r], i = Kn(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function $s(e) {
  if (!(e.flags & 1)) {
    const t = Kn(e), n = et[et.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kn(n) ? et.push(e) : et.splice(wa(t), 0, e), e.flags |= 1, ko();
  }
}
function ko() {
  Tr || (Tr = Mo.then(Uo));
}
function Ra(e) {
  if (!K(e))
    Wt && e.id === -1 ? Wt.splice(yn + 1, 0, e) : e.flags & 1 || (Tn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Tn.push(e[t]);
  ko();
}
function yi(e, t, n = xt + 1) {
  for (; n < et.length; n++) {
    const r = et[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      et.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Fo(e) {
  if (Tn.length) {
    const t = [...new Set(Tn)].sort(
      (n, r) => Kn(n) - Kn(r)
    );
    if (Tn.length = 0, Wt) {
      for (let n = 0; n < t.length; n++)
        Wt.push(t[n]);
      return;
    }
    for (Wt = t, yn = 0; yn < Wt.length; yn++) {
      const n = Wt[yn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Wt = null, yn = 0;
  }
}
const Kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Uo(e) {
  try {
    for (xt = 0; xt < et.length; xt++) {
      const t = et[xt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Zn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xt < et.length; xt++) {
      const t = et[xt];
      t && (t.flags &= -2);
    }
    xt = -1, et.length = 0, Fo(), Tr = null, (et.length || Tn.length) && Uo();
  }
}
let mt = null, Ho = null;
function Sr(e) {
  const t = mt;
  return mt = e, Ho = e && e.type.__scopeId || null, t;
}
function Oa(e, t = mt, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Ri(-1);
    const i = Sr(t), o = ln.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let c = ln.length; c > o; c--) fl();
      Sr(i), r._d && Ri(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function He(e, t) {
  if (mt === null)
    return e;
  const n = jr(mt), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, o, l, c = me] = t[s];
    i && (ee(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && kt(o), r.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Xt(e, t, n, r) {
  const s = e.dirs, i = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[r];
    c && (Ut(), Tt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ht());
  }
}
function Na(e, t) {
  if (tt) {
    let n = tt.provides;
    const r = tt.parent && tt.parent.provides;
    r === n && (n = tt.provides = Object.create(r)), n[e] = t;
  }
}
function yr(e, t, n = !1) {
  const r = Cc();
  if (r || Sn) {
    let s = Sn ? Sn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && ee(t) ? t.call(r && r.proxy) : t;
  }
}
const Pa = /* @__PURE__ */ Symbol.for("v-scx"), Ia = () => yr(Pa);
function ns(e, t, n) {
  return jo(e, t, n);
}
function jo(e, t, n = me) {
  const { immediate: r, deep: s, flush: i, once: o } = n, l = Ye({}, n), c = t && r || !t && i !== "post";
  let _;
  if (Xn) {
    if (i === "sync") {
      const F = Ia();
      _ = F.__watcherHandles || (F.__watcherHandles = []);
    } else if (!c) {
      const F = () => {
      };
      return F.stop = Ot, F.resume = Ot, F.pause = Ot, F;
    }
  }
  const h = tt;
  l.call = (F, G, j) => Tt(F, h, G, j);
  let A = !1;
  i === "post" ? l.scheduler = (F) => {
    it(F, h && h.suspense);
  } : i !== "sync" && (A = !0, l.scheduler = (F, G) => {
    G ? F() : $s(F);
  }), l.augmentJob = (F) => {
    t && (F.flags |= 4), A && (F.flags |= 2, h && (F.id = h.uid, F.i = h));
  };
  const L = xa(e, t, l);
  return Xn && (_ ? _.push(L) : c && L()), L;
}
function La(e, t, n) {
  const r = this.proxy, s = xe(e) ? e.includes(".") ? $o(r, e) : () => r[e] : e.bind(r, r);
  let i;
  ee(t) ? i = t : (i = t.handler, n = t);
  const o = Qn(this), l = jo(s, i.bind(r), n);
  return o(), l;
}
function $o(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const Ma = /* @__PURE__ */ Symbol("_vte"), kr = (e) => e.__isTeleport, rs = /* @__PURE__ */ Symbol("_leaveCb");
function Da(e) {
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
function Vo(e) {
  if (!zs(e))
    return kr(e.type) && e.children ? Da(e.children) : e;
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
function Vs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Vs(
      kr(n.type) && Vo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Er = /* @__PURE__ */ new WeakMap();
function Vn(e, t, n, r, s = !1) {
  if (K(e)) {
    e.forEach(
      (j, Z) => Vn(
        j,
        t && (K(t) ? t[Z] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (zn(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Vn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? jr(r.component) : r.el, o = s ? null : i, { i: l, r: c } = e, _ = t && t.r, h = l.refs === me ? l.refs = {} : l.refs, A = l.setupState, L = /* @__PURE__ */ fe(A), F = A === me ? co : (j) => gi(h, j) ? !1 : de(L, j), G = (j, Z) => !(Z && gi(h, Z));
  if (_ != null && _ !== c) {
    if (_i(t), xe(_))
      h[_] = null, F(_) && (A[_] = null);
    else if (/* @__PURE__ */ Ge(_)) {
      const j = t;
      G(_, j.k) && (_.value = null), j.k && (h[j.k] = null);
    }
  }
  if (ee(c))
    Zn(c, l, 12, [o, h]);
  else {
    const j = xe(c), Z = /* @__PURE__ */ Ge(c);
    if (j || Z) {
      const z = () => {
        if (e.f) {
          const I = j ? F(c) ? A[c] : h[c] : G() || !e.k ? c.value : h[e.k];
          if (s)
            K(I) && Ps(I, i);
          else if (K(I))
            I.includes(i) || I.push(i);
          else if (j)
            h[c] = [i], F(c) && (A[c] = h[c]);
          else {
            const q = [i];
            G(c, e.k) && (c.value = q), e.k && (h[e.k] = q);
          }
        } else j ? (h[c] = o, F(c) && (A[c] = o)) : Z && (G(c, e.k) && (c.value = o), e.k && (h[e.k] = o));
      };
      if (o) {
        const I = () => {
          z(), Er.delete(e);
        };
        I.id = -1, Er.set(e, I), it(I, n);
      } else
        _i(e), z();
    }
  }
}
function _i(e) {
  const t = Er.get(e);
  t && (t.flags |= 8, Er.delete(e));
}
Lr().requestIdleCallback;
Lr().cancelIdleCallback;
const zn = (e) => !!e.type.__asyncLoader, zs = (e) => e.type.__isKeepAlive;
function ka(e, t) {
  Bo(e, "a", t);
}
function Fa(e, t) {
  Bo(e, "da", t);
}
function Bo(e, t, n = tt) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Fr(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      zs(s.parent.vnode) && Ua(r, t, n, s), s = s.parent;
  }
}
function Ua(e, t, n, r) {
  const s = Fr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ko(() => {
    Ps(r[t], s);
  }, n);
}
function Fr(e, t, n = tt, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ut();
      const l = Qn(n), c = Tt(t, n, e, o);
      return l(), Ht(), c;
    });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Vt = (e) => (t, n = tt) => {
  (!Xn || e === "sp") && Fr(e, (...r) => t(...r), n);
}, Ha = Vt("bm"), Wo = Vt("m"), ja = Vt(
  "bu"
), $a = Vt("u"), qo = Vt(
  "bum"
), Ko = Vt("um"), Va = Vt(
  "sp"
), za = Vt("rtg"), Ba = Vt("rtc");
function Wa(e, t = tt) {
  Fr("ec", e, t);
}
const qa = /* @__PURE__ */ Symbol.for("v-ndc");
function Re(e, t, n, r) {
  let s;
  const i = n, o = K(e);
  if (o || xe(e)) {
    const l = o && /* @__PURE__ */ on(e);
    let c = !1, _ = !1;
    l && (c = !/* @__PURE__ */ bt(e), _ = /* @__PURE__ */ jt(e), e = Mr(e)), s = new Array(e.length);
    for (let h = 0, A = e.length; h < A; h++)
      s[h] = t(
        c ? _ ? An(vt(e[h])) : vt(e[h]) : e[h],
        h,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, i);
  } else if (he(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let c = 0, _ = l.length; c < _; c++) {
        const h = l[c];
        s[c] = t(e[h], h, c, i);
      }
    }
  else
    s = [];
  return s;
}
const Es = (e) => e ? ml(e) ? jr(e) : Es(e.parent) : null, Bn = (
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
    $parent: (e) => Es(e.parent),
    $root: (e) => Es(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $s(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => La.bind(e)
  })
), ss = (e, t) => e !== me && !e.__isScriptSetup && de(e, t), Ka = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const L = o[t];
      if (L !== void 0)
        switch (L) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (ss(r, t))
          return o[t] = 1, r[t];
        if (s !== me && de(s, t))
          return o[t] = 2, s[t];
        if (de(i, t))
          return o[t] = 3, i[t];
        if (n !== me && de(n, t))
          return o[t] = 4, n[t];
        As && (o[t] = 0);
      }
    }
    const _ = Bn[t];
    let h, A;
    if (_)
      return t === "$attrs" && Ke(e.attrs, "get", ""), _(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== me && de(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      A = c.config.globalProperties, de(A, t)
    )
      return A[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return ss(s, t) ? (s[t] = n, !0) : r !== me && de(r, t) ? (r[t] = n, !0) : de(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== me && l[0] !== "$" && de(e, l) || ss(t, l) || de(i, l) || de(r, l) || de(Bn, l) || de(s.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : de(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vi(e) {
  return K(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let As = !0;
function Ga(e) {
  const t = Yo(e), n = e.proxy, r = e.ctx;
  As = !1, t.beforeCreate && Ti(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: _,
    // lifecycle
    created: h,
    beforeMount: A,
    mounted: L,
    beforeUpdate: F,
    updated: G,
    activated: j,
    deactivated: Z,
    beforeDestroy: z,
    beforeUnmount: I,
    destroyed: q,
    unmounted: D,
    render: oe,
    renderTracked: be,
    renderTriggered: Ee,
    errorCaptured: Le,
    serverPrefetch: ye,
    // public API
    expose: Ae,
    inheritAttrs: Xe,
    // assets
    components: $e,
    directives: We,
    filters: lt
  } = t;
  if (_ && Ya(_, r, null), o)
    for (const ne in o) {
      const re = o[ne];
      ee(re) && (r[ne] = re.bind(n));
    }
  if (s) {
    const ne = s.call(n, n);
    he(ne) && (e.data = /* @__PURE__ */ nn(ne));
  }
  if (As = !0, i)
    for (const ne in i) {
      const re = i[ne], Ce = ee(re) ? re.bind(n, n) : ee(re.get) ? re.get.bind(n, n) : Ot, at = !ee(re) && ee(re.set) ? re.set.bind(n) : Ot, De = ue({
        get: Ce,
        set: at
      });
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (Ne) => De.value = Ne
      });
    }
  if (l)
    for (const ne in l)
      Go(l[ne], r, n, ne);
  if (c) {
    const ne = ee(c) ? c.call(n) : c;
    Reflect.ownKeys(ne).forEach((re) => {
      Na(re, ne[re]);
    });
  }
  h && Ti(h, e, "c");
  function ve(ne, re) {
    K(re) ? re.forEach((Ce) => ne(Ce.bind(n))) : re && ne(re.bind(n));
  }
  if (ve(Ha, A), ve(Wo, L), ve(ja, F), ve($a, G), ve(ka, j), ve(Fa, Z), ve(Wa, Le), ve(Ba, be), ve(za, Ee), ve(qo, I), ve(Ko, D), ve(Va, ye), K(Ae))
    if (Ae.length) {
      const ne = e.exposed || (e.exposed = {});
      Ae.forEach((re) => {
        Object.defineProperty(ne, re, {
          get: () => n[re],
          set: (Ce) => n[re] = Ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === Ot && (e.render = oe), Xe != null && (e.inheritAttrs = Xe), $e && (e.components = $e), We && (e.directives = We), ye && zo(e);
}
function Ya(e, t, n = Ot) {
  K(e) && (e = xs(e));
  for (const r in e) {
    const s = e[r];
    let i;
    he(s) ? "default" in s ? i = yr(
      s.from || r,
      s.default,
      !0
    ) : i = yr(s.from || r) : i = yr(s), /* @__PURE__ */ Ge(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[r] = i;
  }
}
function Ti(e, t, n) {
  Tt(
    K(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Go(e, t, n, r) {
  let s = r.includes(".") ? $o(n, r) : () => n[r];
  if (xe(e)) {
    const i = t[e];
    ee(i) && ns(s, i);
  } else if (ee(e))
    ns(s, e.bind(n));
  else if (he(e))
    if (K(e))
      e.forEach((i) => Go(i, t, n, r));
    else {
      const i = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(i) && ns(s, i, e);
    }
}
function Yo(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (_) => Ar(c, _, o, !0)
  ), Ar(c, t, o)), he(t) && i.set(t, c), c;
}
function Ar(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && Ar(e, i, n, !0), s && s.forEach(
    (o) => Ar(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Xa[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Xa = {
  data: Si,
  props: Ei,
  emits: Ei,
  // objects
  methods: kn,
  computed: kn,
  // lifecycle
  beforeCreate: Qe,
  created: Qe,
  beforeMount: Qe,
  mounted: Qe,
  beforeUpdate: Qe,
  updated: Qe,
  beforeDestroy: Qe,
  beforeUnmount: Qe,
  destroyed: Qe,
  unmounted: Qe,
  activated: Qe,
  deactivated: Qe,
  errorCaptured: Qe,
  serverPrefetch: Qe,
  // assets
  components: kn,
  directives: kn,
  // watch
  watch: Za,
  // provide / inject
  provide: Si,
  inject: Ja
};
function Si(e, t) {
  return t ? e ? function() {
    return Ye(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ja(e, t) {
  return kn(xs(e), xs(t));
}
function xs(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Qe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function kn(e, t) {
  return e ? Ye(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ei(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ye(
    /* @__PURE__ */ Object.create(null),
    vi(e),
    vi(t ?? {})
  ) : t;
}
function Za(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ye(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Qe(e[r], t[r]);
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
  return function(r, s = null) {
    ee(r) || (r = Ye({}, r)), s != null && !he(s) && (s = null);
    const i = Xo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const _ = i.app = {
      _uid: Qa++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Ic,
      get config() {
        return i.config;
      },
      set config(h) {
      },
      use(h, ...A) {
        return o.has(h) || (h && ee(h.install) ? (o.add(h), h.install(_, ...A)) : ee(h) && (o.add(h), h(_, ...A))), _;
      },
      mixin(h) {
        return i.mixins.includes(h) || i.mixins.push(h), _;
      },
      component(h, A) {
        return A ? (i.components[h] = A, _) : i.components[h];
      },
      directive(h, A) {
        return A ? (i.directives[h] = A, _) : i.directives[h];
      },
      mount(h, A, L) {
        if (!c) {
          const F = _._ceVNode || Ft(r, s);
          return F.appContext = i, L === !0 ? L = "svg" : L === !1 && (L = void 0), e(F, h, L), c = !0, _._container = h, h.__vue_app__ = _, jr(F.component);
        }
      },
      onUnmount(h) {
        l.push(h);
      },
      unmount() {
        c && (Tt(
          l,
          _._instance,
          16
        ), e(null, _._container), delete _._container.__vue_app__);
      },
      provide(h, A) {
        return i.provides[h] = A, _;
      },
      runWithContext(h) {
        const A = Sn;
        Sn = _;
        try {
          return h();
        } finally {
          Sn = A;
        }
      }
    };
    return _;
  };
}
let Sn = null;
const tc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${gt(t)}Modifiers`] || e[`${cn(t)}Modifiers`];
function nc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || me;
  let s = n;
  const i = t.startsWith("update:"), o = i && tc(r, t.slice(7));
  o && (o.trim && (s = n.map((h) => xe(h) ? h.trim() : h)), o.number && (s = s.map(Ir)));
  let l, c = r[l = Jr(t)] || // also try camelCase event handler (#2249)
  r[l = Jr(gt(t))];
  !c && i && (c = r[l = Jr(cn(t))]), c && Tt(
    c,
    e,
    6,
    s
  );
  const _ = r[l + "Once"];
  if (_) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Tt(
      _,
      e,
      6,
      s
    );
  }
}
const rc = /* @__PURE__ */ new WeakMap();
function Jo(e, t, n = !1) {
  const r = n ? rc : t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let o = {}, l = !1;
  if (!ee(e)) {
    const c = (_) => {
      const h = Jo(_, t, !0);
      h && (l = !0, Ye(o, h));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (he(e) && r.set(e, null), null) : (K(i) ? i.forEach((c) => o[c] = null) : Ye(o, i), he(e) && r.set(e, o), o);
}
function Ur(e, t) {
  return !e || !Or(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), de(e, t[0].toLowerCase() + t.slice(1)) || de(e, cn(t)) || de(e, t));
}
function Ai(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: _,
    renderCache: h,
    props: A,
    data: L,
    setupState: F,
    ctx: G,
    inheritAttrs: j
  } = e, Z = Sr(e);
  let z, I;
  try {
    if (n.shapeFlag & 4) {
      const D = s || r, oe = D;
      z = wt(
        _.call(
          oe,
          D,
          h,
          A,
          F,
          L,
          G
        )
      ), I = l;
    } else {
      const D = t;
      z = wt(
        D.length > 1 ? D(
          A,
          { attrs: l, slots: o, emit: c }
        ) : D(
          A,
          null
        )
      ), I = t.props ? l : sc(l);
    }
  } catch (D) {
    ln.length = 0, Dr(D, e, 1), z = Ft($t);
  }
  let q = z;
  if (I && j !== !1) {
    const D = Object.keys(I), { shapeFlag: oe } = q;
    D.length && oe & 7 && (i && D.some(Nr) && (I = ic(
      I,
      i
    )), q = xn(q, I, !1, !0));
  }
  if (n.dirs && (q = xn(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const D = kr(q.type) && Vo(q) || q;
    Vs(D, n.transition);
  }
  return z = q, Sr(Z), z;
}
const sc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Or(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ic = (e, t) => {
  const n = {};
  for (const r in e)
    (!Nr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function oc(e, t, n) {
  const { props: r, children: s, component: i } = e, { props: o, children: l, patchFlag: c } = t, _ = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? xi(r, o, _) : !!o;
    if (c & 8) {
      const h = t.dynamicProps;
      for (let A = 0; A < h.length; A++) {
        const L = h[A];
        if (Zo(o, r, L) && !Ur(_, L))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? xi(r, o, _) : !0 : !!o;
  return !1;
}
function xi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (Zo(t, e, i) && !Ur(n, i))
      return !0;
  }
  return !1;
}
function Zo(e, t, n) {
  const r = e[n], s = t[n];
  return n === "style" && he(r) && he(s) ? !Kt(r, s) : r !== s;
}
function lc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = r, e = s), s === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Qo = {}, el = () => Object.create(Qo), tl = (e) => Object.getPrototypeOf(e) === Qo;
function ac(e, t, n, r = !1) {
  const s = {}, i = el();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), nl(e, t, s, i);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = r ? s : /* @__PURE__ */ ba(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function cc(e, t, n, r) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ fe(s), [c] = e.propsOptions;
  let _ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const h = e.vnode.dynamicProps;
      for (let A = 0; A < h.length; A++) {
        let L = h[A];
        if (Ur(e.emitsOptions, L))
          continue;
        const F = t[L];
        if (c)
          if (de(i, L))
            F !== i[L] && (i[L] = F, _ = !0);
          else {
            const G = gt(L);
            s[G] = Cs(
              c,
              l,
              G,
              F,
              e,
              !1
            );
          }
        else
          F !== i[L] && (i[L] = F, _ = !0);
      }
    }
  } else {
    nl(e, t, s, i) && (_ = !0);
    let h;
    for (const A in l)
      (!t || // for camelCase
      !de(t, A) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = cn(A)) === A || !de(t, h))) && (c ? n && // for camelCase
      (n[A] !== void 0 || // for kebab-case
      n[h] !== void 0) && (s[A] = Cs(
        c,
        l,
        A,
        void 0,
        e,
        !0
      )) : delete s[A]);
    if (i !== l)
      for (const A in i)
        (!t || !de(t, A)) && (delete i[A], _ = !0);
  }
  _ && Dt(e.attrs, "set", "");
}
function nl(e, t, n, r) {
  const [s, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Hn(c))
        continue;
      const _ = t[c];
      let h;
      s && de(s, h = gt(c)) ? !i || !i.includes(h) ? n[h] = _ : (l || (l = {}))[h] = _ : Ur(e.emitsOptions, c) || (!(c in r) || _ !== r[c]) && (r[c] = _, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ fe(n), _ = l || me;
    for (let h = 0; h < i.length; h++) {
      const A = i[h];
      n[A] = Cs(
        s,
        c,
        A,
        _[A],
        e,
        !de(_, A)
      );
    }
  }
  return o;
}
function Cs(e, t, n, r, s, i) {
  const o = e[n];
  if (o != null) {
    const l = de(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && ee(c)) {
        const { propsDefaults: _ } = s;
        if (n in _)
          r = _[n];
        else {
          const h = Qn(s);
          r = _[n] = c.call(
            null,
            t
          ), h();
        }
      } else
        r = c;
      s.ce && s.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === cn(n)) && (r = !0));
  }
  return r;
}
const uc = /* @__PURE__ */ new WeakMap();
function rl(e, t, n = !1) {
  const r = n ? uc : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!ee(e)) {
    const h = (A) => {
      c = !0;
      const [L, F] = rl(A, t, !0);
      Ye(o, L), F && l.push(...F);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!i && !c)
    return he(e) && r.set(e, _n), _n;
  if (K(i))
    for (let h = 0; h < i.length; h++) {
      const A = gt(i[h]);
      Ci(A) && (o[A] = me);
    }
  else if (i)
    for (const h in i) {
      const A = gt(h);
      if (Ci(A)) {
        const L = i[h], F = o[A] = K(L) || ee(L) ? { type: L } : Ye({}, L), G = F.type;
        let j = !1, Z = !0;
        if (K(G))
          for (let z = 0; z < G.length; ++z) {
            const I = G[z], q = ee(I) && I.name;
            if (q === "Boolean") {
              j = !0;
              break;
            } else q === "String" && (Z = !1);
          }
        else
          j = ee(G) && G.name === "Boolean";
        F[
          0
          /* shouldCast */
        ] = j, F[
          1
          /* shouldCastTrue */
        ] = Z, (j || de(F, "default")) && l.push(A);
      }
    }
  const _ = [o, l];
  return he(e) && r.set(e, _), _;
}
function Ci(e) {
  return e[0] !== "$" && !Hn(e);
}
const Bs = (e) => e === "_" || e === "_ctx" || e === "$stable", Ws = (e) => K(e) ? e.map(wt) : [wt(e)], fc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Oa((...s) => Ws(t(...s)), n);
  return r._c = !1, r;
}, sl = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (Bs(s)) continue;
    const i = e[s];
    if (ee(i))
      t[s] = fc(s, i, r);
    else if (i != null) {
      const o = Ws(i);
      t[s] = () => o;
    }
  }
}, il = (e, t) => {
  const n = Ws(t);
  e.slots.default = () => n;
}, ol = (e, t, n) => {
  for (const r in t)
    (n || !Bs(r)) && (e[r] = t[r]);
}, dc = (e, t, n) => {
  const r = e.slots = el();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (ol(r, t, n), n && mo(r, "_", s, !0)) : sl(t, r);
  } else t && il(e, t);
}, pc = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let i = !0, o = me;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : ol(s, t, n) : (i = !t.$stable, sl(t, s)), o = t;
  } else t && (il(e, t), o = { default: 1 });
  if (i)
    for (const l in s)
      !Bs(l) && o[l] == null && delete s[l];
}, it = gc;
function hc(e) {
  return mc(e);
}
function mc(e, t) {
  const n = Lr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: _,
    setElementText: h,
    parentNode: A,
    nextSibling: L,
    setScopeId: F = Ot,
    insertStaticContent: G
  } = e, j = (u, p, y, C = null, S = null, x = null, R = void 0, N = null, O = !!p.dynamicChildren) => {
    if (u === p)
      return;
    u && !Pn(u, p) && (C = ze(u), Ne(u, S, x, !0), u = null), p.patchFlag === -2 && (O = !1, p.dynamicChildren = null);
    const { type: b, ref: T, shapeFlag: f } = p;
    switch (b) {
      case Hr:
        Z(u, p, y, C);
        break;
      case $t:
        z(u, p, y, C);
        break;
      case os:
        u == null && I(p, y, C, R);
        break;
      case ae:
        $e(
          u,
          p,
          y,
          C,
          S,
          x,
          R,
          N,
          O
        );
        break;
      default:
        f & 1 ? oe(
          u,
          p,
          y,
          C,
          S,
          x,
          R,
          N,
          O
        ) : f & 6 ? We(
          u,
          p,
          y,
          C,
          S,
          x,
          R,
          N,
          O
        ) : (f & 64 || f & 128) && b.process(
          u,
          p,
          y,
          C,
          S,
          x,
          R,
          N,
          O,
          ie
        );
    }
    T != null && S ? Vn(T, u && u.ref, x, p || u, !p) : T == null && u && u.ref != null && Vn(u.ref, null, x, u, !0);
  }, Z = (u, p, y, C) => {
    if (u == null)
      r(
        p.el = l(p.children),
        y,
        C
      );
    else {
      const S = p.el = u.el;
      p.children !== u.children && _(S, p.children);
    }
  }, z = (u, p, y, C) => {
    u == null ? r(
      p.el = c(p.children || ""),
      y,
      C
    ) : p.el = u.el;
  }, I = (u, p, y, C) => {
    [u.el, u.anchor] = G(
      u.children,
      p,
      y,
      C,
      u.el,
      u.anchor
    );
  }, q = ({ el: u, anchor: p }, y, C) => {
    let S;
    for (; u && u !== p; )
      S = L(u), r(u, y, C), u = S;
    r(p, y, C);
  }, D = ({ el: u, anchor: p }) => {
    let y;
    for (; u && u !== p; )
      y = L(u), s(u), u = y;
    s(p);
  }, oe = (u, p, y, C, S, x, R, N, O) => {
    if (p.type === "svg" ? R = "svg" : p.type === "math" && (R = "mathml"), u == null)
      be(
        p,
        y,
        C,
        S,
        x,
        R,
        N,
        O
      );
    else {
      const b = u.el && u.el._isVueCE ? u.el : null;
      try {
        b && b._beginPatch(), ye(
          u,
          p,
          S,
          x,
          R,
          N,
          O
        );
      } finally {
        b && b._endPatch();
      }
    }
  }, be = (u, p, y, C, S, x, R, N) => {
    let O, b;
    const { props: T, shapeFlag: f, transition: M, dirs: $ } = u;
    if (O = u.el = o(
      u.type,
      x,
      T && T.is,
      T
    ), f & 8 ? h(O, u.children) : f & 16 && Le(
      u.children,
      O,
      null,
      C,
      S,
      is(u, x),
      R,
      N
    ), $ && Xt(u, null, C, "created"), Ee(O, u, u.scopeId, R, C), T) {
      for (const J in T)
        J !== "value" && !Hn(J) && i(O, J, null, T[J], x, C);
      "value" in T && i(O, "value", null, T.value, x), (b = T.onVnodeBeforeMount) && At(b, C, u);
    }
    $ && Xt(u, null, C, "beforeMount");
    const B = bc(S, M);
    B && M.beforeEnter(O), r(O, p, y), ((b = T && T.onVnodeMounted) || B || $) && it(() => {
      b && At(b, C, u), B && M.enter(O), $ && Xt(u, null, C, "mounted");
    }, S);
  }, Ee = (u, p, y, C, S) => {
    if (y && F(u, y), C)
      for (let x = 0; x < C.length; x++)
        F(u, C[x]);
    if (S) {
      let x = S.subTree;
      if (p === x || ul(x.type) && (x.ssContent === p || x.ssFallback === p)) {
        const R = S.vnode;
        Ee(
          u,
          R,
          R.scopeId,
          R.slotScopeIds,
          S.parent
        );
      }
    }
  }, Le = (u, p, y, C, S, x, R, N, O = 0) => {
    for (let b = O; b < u.length; b++) {
      const T = u[b] = N ? Mt(u[b]) : wt(u[b]);
      j(
        null,
        T,
        p,
        y,
        C,
        S,
        x,
        R,
        N
      );
    }
  }, ye = (u, p, y, C, S, x, R) => {
    const N = p.el = u.el;
    let { patchFlag: O, dynamicChildren: b, dirs: T } = p;
    O |= u.patchFlag & 16;
    const f = u.props || me, M = p.props || me;
    let $;
    if (y && Jt(y, !1), ($ = M.onVnodeBeforeUpdate) && At($, y, p, u), T && Xt(p, u, y, "beforeUpdate"), y && Jt(y, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    b && (!u.dynamicChildren || u.dynamicChildren.length !== b.length) && (O = 0, R = !1, b = null), (f.innerHTML && M.innerHTML == null || f.textContent && M.textContent == null) && h(N, ""), b ? Ae(
      u.dynamicChildren,
      b,
      N,
      y,
      C,
      is(p, S),
      x
    ) : R || re(
      u,
      p,
      N,
      null,
      y,
      C,
      is(p, S),
      x,
      !1
    ), O > 0) {
      if (O & 16)
        Xe(N, f, M, y, S);
      else if (O & 2 && f.class !== M.class && i(N, "class", null, M.class, S), O & 4 && i(N, "style", f.style, M.style, S), O & 8) {
        const B = p.dynamicProps;
        for (let J = 0; J < B.length; J++) {
          const te = B[J], pe = f[te], Te = M[te];
          (Te !== pe || te === "value") && i(N, te, pe, Te, S, y);
        }
      }
      O & 1 && u.children !== p.children && h(N, p.children);
    } else !R && b == null && Xe(N, f, M, y, S);
    (($ = M.onVnodeUpdated) || T) && it(() => {
      $ && At($, y, p, u), T && Xt(p, u, y, "updated");
    }, C);
  }, Ae = (u, p, y, C, S, x, R) => {
    for (let N = 0; N < p.length; N++) {
      const O = u[N], b = p[N], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(O, b) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? A(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          y
        )
      );
      j(
        O,
        b,
        T,
        null,
        C,
        S,
        x,
        R,
        !0
      );
    }
  }, Xe = (u, p, y, C, S) => {
    if (p !== y) {
      if (p !== me)
        for (const x in p)
          !Hn(x) && !(x in y) && i(
            u,
            x,
            p[x],
            null,
            S,
            C
          );
      for (const x in y) {
        if (Hn(x)) continue;
        const R = y[x], N = p[x];
        R !== N && x !== "value" && i(u, x, N, R, S, C);
      }
      "value" in y && i(u, "value", p.value, y.value, S);
    }
  }, $e = (u, p, y, C, S, x, R, N, O) => {
    const b = p.el = u ? u.el : l(""), T = p.anchor = u ? u.anchor : l("");
    let { patchFlag: f, dynamicChildren: M, slotScopeIds: $ } = p;
    $ && (N = N ? N.concat($) : $), u == null ? (r(b, y, C), r(T, y, C), Le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      y,
      T,
      S,
      x,
      R,
      N,
      O
    )) : f > 0 && f & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren && u.dynamicChildren.length === M.length ? (Ae(
      u.dynamicChildren,
      M,
      y,
      S,
      x,
      R,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || S && p === S.subTree) && ll(
      u,
      p,
      !0
      /* shallow */
    )) : re(
      u,
      p,
      y,
      T,
      S,
      x,
      R,
      N,
      O
    );
  }, We = (u, p, y, C, S, x, R, N, O) => {
    p.slotScopeIds = N, u == null ? p.shapeFlag & 512 ? S.ctx.activate(
      p,
      y,
      C,
      R,
      O
    ) : lt(
      p,
      y,
      C,
      S,
      x,
      R,
      O
    ) : Me(u, p, O);
  }, lt = (u, p, y, C, S, x, R) => {
    const N = u.component = xc(
      u,
      C,
      S
    );
    if (zs(u) && (N.ctx.renderer = ie), wc(N, !1, R), N.asyncDep) {
      if (S && S.registerDep(N, ve, R), !u.el) {
        const O = N.subTree = Ft($t);
        z(null, O, p, y), u.placeholder = O.el;
      }
    } else
      ve(
        N,
        u,
        p,
        y,
        S,
        x,
        R
      );
  }, Me = (u, p, y) => {
    const C = p.component = u.component;
    if (oc(u, p, y))
      if (C.asyncDep && !C.asyncResolved) {
        ne(C, p, y);
        return;
      } else
        C.next = p, C.update();
    else
      p.el = u.el, C.vnode = p;
  }, ve = (u, p, y, C, S, x, R) => {
    const N = () => {
      if (u.isMounted) {
        let { next: f, bu: M, u: $, parent: B, vnode: J } = u;
        {
          const nt = al(u);
          if (nt) {
            f && (f.el = J.el, ne(u, f, R)), nt.asyncDep.then(() => {
              it(() => {
                u.isUnmounted || b();
              }, S);
            });
            return;
          }
        }
        let te = f, pe;
        Jt(u, !1), f ? (f.el = J.el, ne(u, f, R)) : f = J, M && br(M), (pe = f.props && f.props.onVnodeBeforeUpdate) && At(pe, B, f, J), Jt(u, !0);
        const Te = Ai(u), Fe = u.subTree;
        u.subTree = Te, j(
          Fe,
          Te,
          // parent may have changed if it's in a teleport
          A(Fe.el),
          // anchor may have changed if it's in a fragment
          ze(Fe),
          u,
          S,
          x
        ), f.el = Te.el, te === null && lc(u, Te.el), $ && it($, S), (pe = f.props && f.props.onVnodeUpdated) && it(
          () => At(pe, B, f, J),
          S
        );
      } else {
        let f;
        const { el: M, props: $ } = p, { bm: B, m: J, parent: te, root: pe, type: Te } = u, Fe = zn(p);
        Jt(u, !1), B && br(B), !Fe && (f = $ && $.onVnodeBeforeMount) && At(f, te, p), Jt(u, !0);
        {
          pe.ce && pe.ce._hasShadowRoot() && pe.ce._injectChildStyle(
            Te,
            u.parent ? u.parent.type : void 0
          );
          const nt = u.subTree = Ai(u);
          j(
            null,
            nt,
            y,
            C,
            u,
            S,
            x
          ), p.el = nt.el;
        }
        if (J && it(J, S), !Fe && (f = $ && $.onVnodeMounted)) {
          const nt = p;
          it(
            () => At(f, te, nt),
            S
          );
        }
        (p.shapeFlag & 256 || te && zn(te.vnode) && te.vnode.shapeFlag & 256) && u.a && it(u.a, S), u.isMounted = !0, p = y = C = null;
      }
    };
    u.scope.on();
    const O = u.effect = new _o(N);
    u.scope.off();
    const b = u.update = O.run.bind(O), T = u.job = O.runIfDirty.bind(O);
    T.i = u, T.id = u.uid, O.scheduler = () => $s(T), Jt(u, !0), b();
  }, ne = (u, p, y) => {
    p.component = u;
    const C = u.vnode.props;
    u.vnode = p, u.next = null, cc(u, p.props, C, y), pc(u, p.children, y), Ut(), yi(u), Ht();
  }, re = (u, p, y, C, S, x, R, N, O = !1) => {
    const b = u && u.children, T = u ? u.shapeFlag : 0, f = p.children, { patchFlag: M, shapeFlag: $ } = p;
    if (M > 0) {
      if (M & 128) {
        at(
          b,
          f,
          y,
          C,
          S,
          x,
          R,
          N,
          O
        );
        return;
      } else if (M & 256) {
        Ce(
          b,
          f,
          y,
          C,
          S,
          x,
          R,
          N,
          O
        );
        return;
      }
    }
    $ & 8 ? (T & 16 && pt(b, S, x), f !== b && h(y, f)) : T & 16 ? $ & 16 ? at(
      b,
      f,
      y,
      C,
      S,
      x,
      R,
      N,
      O
    ) : pt(b, S, x, !0) : (T & 8 && h(y, ""), $ & 16 && Le(
      f,
      y,
      C,
      S,
      x,
      R,
      N,
      O
    ));
  }, Ce = (u, p, y, C, S, x, R, N, O) => {
    u = u || _n, p = p || _n;
    const b = u.length, T = p.length, f = Math.min(b, T);
    let M;
    for (M = 0; M < f; M++) {
      const $ = p[M] = O ? Mt(p[M]) : wt(p[M]);
      j(
        u[M],
        $,
        y,
        null,
        S,
        x,
        R,
        N,
        O
      );
    }
    b > T ? pt(
      u,
      S,
      x,
      !0,
      !1,
      f
    ) : Le(
      p,
      y,
      C,
      S,
      x,
      R,
      N,
      O,
      f
    );
  }, at = (u, p, y, C, S, x, R, N, O) => {
    let b = 0;
    const T = p.length;
    let f = u.length - 1, M = T - 1;
    for (; b <= f && b <= M; ) {
      const $ = u[b], B = p[b] = O ? Mt(p[b]) : wt(p[b]);
      if (Pn($, B))
        j(
          $,
          B,
          y,
          null,
          S,
          x,
          R,
          N,
          O
        );
      else
        break;
      b++;
    }
    for (; b <= f && b <= M; ) {
      const $ = u[f], B = p[M] = O ? Mt(p[M]) : wt(p[M]);
      if (Pn($, B))
        j(
          $,
          B,
          y,
          null,
          S,
          x,
          R,
          N,
          O
        );
      else
        break;
      f--, M--;
    }
    if (b > f) {
      if (b <= M) {
        const $ = M + 1, B = $ < T ? p[$].el : C;
        for (; b <= M; )
          j(
            null,
            p[b] = O ? Mt(p[b]) : wt(p[b]),
            y,
            B,
            S,
            x,
            R,
            N,
            O
          ), b++;
      }
    } else if (b > M)
      for (; b <= f; )
        Ne(u[b], S, x, !0), b++;
    else {
      const $ = b, B = b, J = /* @__PURE__ */ new Map();
      for (b = B; b <= M; b++) {
        const Ue = p[b] = O ? Mt(p[b]) : wt(p[b]);
        Ue.key != null && J.set(Ue.key, b);
      }
      let te, pe = 0;
      const Te = M - B + 1;
      let Fe = !1, nt = 0;
      const ht = new Array(Te);
      for (b = 0; b < Te; b++) ht[b] = 0;
      for (b = $; b <= f; b++) {
        const Ue = u[b];
        if (pe >= Te) {
          Ne(Ue, S, x, !0);
          continue;
        }
        let ct;
        if (Ue.key != null)
          ct = J.get(Ue.key);
        else
          for (te = B; te <= M; te++)
            if (ht[te - B] === 0 && Pn(Ue, p[te])) {
              ct = te;
              break;
            }
        ct === void 0 ? Ne(Ue, S, x, !0) : (ht[ct - B] = b + 1, ct >= nt ? nt = ct : Fe = !0, j(
          Ue,
          p[ct],
          y,
          null,
          S,
          x,
          R,
          N,
          O
        ), pe++);
      }
      const Gt = Fe ? yc(ht) : _n;
      for (te = Gt.length - 1, b = Te - 1; b >= 0; b--) {
        const Ue = B + b, ct = p[Ue], Cn = p[Ue + 1], wn = Ue + 1 < T ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Cn.el || cl(Cn)
        ) : C;
        ht[b] === 0 ? j(
          null,
          ct,
          y,
          wn,
          S,
          x,
          R,
          N,
          O
        ) : Fe && (te < 0 || b !== Gt[te] ? De(ct, y, wn, 2) : te--);
      }
    }
  }, De = (u, p, y, C, S = null) => {
    const { el: x, type: R, transition: N, children: O, shapeFlag: b } = u;
    if (b & 6) {
      De(u.component.subTree, p, y, C);
      return;
    }
    if (b & 128) {
      u.suspense.move(p, y, C);
      return;
    }
    if (b & 64) {
      R.move(u, p, y, ie);
      return;
    }
    if (R === ae) {
      r(x, p, y);
      for (let f = 0; f < O.length; f++)
        De(O[f], p, y, C);
      r(u.anchor, p, y);
      return;
    }
    if (R === os) {
      q(u, p, y);
      return;
    }
    if (C !== 2 && b & 1 && N)
      if (C === 0)
        N.persisted && !x[rs] ? r(x, p, y) : (N.beforeEnter(x), r(x, p, y), it(() => N.enter(x), S));
      else {
        const { leave: f, delayLeave: M, afterLeave: $ } = N, B = () => {
          u.ctx.isUnmounted ? s(x) : r(x, p, y);
        }, J = () => {
          const te = x._isLeaving || !!x[rs];
          x._isLeaving && x[rs](
            !0
            /* cancelled */
          ), N.persisted && !te ? B() : f(x, () => {
            B(), $ && $();
          });
        };
        M ? M(x, B, J) : J();
      }
    else
      r(x, p, y);
  }, Ne = (u, p, y, C = !1, S = !1) => {
    const {
      type: x,
      props: R,
      ref: N,
      children: O,
      dynamicChildren: b,
      shapeFlag: T,
      patchFlag: f,
      dirs: M,
      cacheIndex: $,
      memo: B
    } = u;
    if (f === -2 && (S = !1), N != null && (Ut(), Vn(N, null, y, u, !0), Ht()), $ != null && (p.renderCache[$] = void 0), T & 256) {
      p.ctx.deactivate(u);
      return;
    }
    const J = T & 1 && M, te = !zn(u);
    let pe;
    if (te && (pe = R && R.onVnodeBeforeUnmount) && At(pe, p, u), T & 6)
      Pt(u.component, y, C);
    else {
      if (T & 128) {
        u.suspense.unmount(y, C);
        return;
      }
      J && Xt(u, null, p, "beforeUnmount"), T & 64 ? u.type.remove(
        u,
        p,
        y,
        ie,
        C
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== ae || f > 0 && f & 64) ? pt(
        b,
        p,
        y,
        !1,
        !0
      ) : (x === ae && f & 384 || !S && T & 16) && pt(O, p, y), C && Ve(u);
    }
    const Te = B != null && $ == null;
    (te && (pe = R && R.onVnodeUnmounted) || J || Te) && it(() => {
      pe && At(pe, p, u), J && Xt(u, null, p, "unmounted"), Te && (u.el = null);
    }, y);
  }, Ve = (u) => {
    const { type: p, el: y, anchor: C, transition: S } = u;
    if (p === ae) {
      se(y, C);
      return;
    }
    if (p === os) {
      D(u);
      return;
    }
    const x = () => {
      s(y), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (u.shapeFlag & 1 && S && !S.persisted) {
      const { leave: R, delayLeave: N } = S, O = () => R(y, x);
      N ? N(u.el, x, O) : O();
    } else
      x();
  }, se = (u, p) => {
    let y;
    for (; u !== p; )
      y = L(u), s(u), u = y;
    s(p);
  }, Pt = (u, p, y) => {
    const { bum: C, scope: S, job: x, subTree: R, um: N, m: O, a: b } = u;
    wi(O), wi(b), C && br(C), S.stop(), x && (x.flags |= 8, Ne(R, u, p, y)), N && it(N, p), it(() => {
      u.isUnmounted = !0;
    }, p);
  }, pt = (u, p, y, C = !1, S = !1, x = 0) => {
    for (let R = x; R < u.length; R++)
      Ne(u[R], p, y, C, S);
  }, ze = (u) => {
    if (u.shapeFlag & 6)
      return ze(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const p = L(u.anchor || u.el), y = p && p[Ma];
    return y ? L(y) : p;
  };
  let W = !1;
  const Y = (u, p, y) => {
    let C;
    u == null ? p._vnode && (Ne(p._vnode, null, null, !0), C = p._vnode.component) : j(
      p._vnode || null,
      u,
      p,
      null,
      null,
      null,
      y
    ), p._vnode = u, W || (W = !0, yi(C), Fo(), W = !1);
  }, ie = {
    p: j,
    um: Ne,
    m: De,
    r: Ve,
    mt: lt,
    mc: Le,
    pc: re,
    pbc: Ae,
    n: ze,
    o: e
  };
  return {
    render: Y,
    hydrate: void 0,
    createApp: ec(Y)
  };
}
function is({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function bc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ll(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (K(r) && K(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = Mt(s[i]), l.el = o.el), !n && l.patchFlag !== -2 && ll(o, l)), l.type === Hr && (l.patchFlag === -1 && (l = s[i] = Mt(l)), l.el = o.el), l.type === $t && !l.el && (l.el = o.el);
    }
}
function yc(e) {
  const t = e.slice(), n = [0];
  let r, s, i, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const _ = e[r];
    if (_ !== 0) {
      if (s = n[n.length - 1], e[s] < _) {
        t[r] = s, n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < _ ? i = l + 1 : o = l;
      _ < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function al(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : al(t);
}
function wi(e) {
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
  t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : Ra(e);
}
const ae = /* @__PURE__ */ Symbol.for("v-fgt"), Hr = /* @__PURE__ */ Symbol.for("v-txt"), $t = /* @__PURE__ */ Symbol.for("v-cmt"), os = /* @__PURE__ */ Symbol.for("v-stc"), ln = [];
let dt = null;
function U(e = !1) {
  ln.push(dt = e ? null : []);
}
function fl() {
  ln.pop(), dt = ln[ln.length - 1] || null;
}
let Gn = 1;
function Ri(e, t = !1) {
  Gn += e, e < 0 && dt && t && (dt.hasOnce = !0);
}
function dl(e) {
  return e.dynamicChildren = Gn > 0 ? dt || _n : null, fl(), Gn > 0 && dt && dt.push(e), e;
}
function H(e, t, n, r, s, i) {
  return dl(
    m(
      e,
      t,
      n,
      r,
      s,
      i,
      !0
    )
  );
}
function _c(e, t, n, r, s) {
  return dl(
    Ft(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function pl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hl = ({ key: e }) => e ?? null, gr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? xe(e) || /* @__PURE__ */ Ge(e) || ee(e) ? { i: mt, r: e, k: t, f: !!n } : e : null);
function m(e, t = null, n = null, r = 0, s = null, i = e === ae ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && hl(t),
    ref: t && gr(t),
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
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: mt
  };
  return l ? (xr(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= xe(n) ? 8 : 16), Gn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  dt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && dt.push(c), c;
}
const Ft = vc;
function vc(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === qa) && (e = $t), pl(e)) {
    const l = xn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && xr(l, n), Gn > 0 && !i && dt && (l.shapeFlag & 6 ? dt[dt.indexOf(e)] = l : dt.push(l)), l.patchFlag = -2, l;
  }
  if (Pc(e) && (e = e.__vccOpts), t) {
    t = Tc(t);
    let { class: l, style: c } = t;
    l && !xe(l) && (t.class = vn(l)), he(c) && (/* @__PURE__ */ js(c) && !K(c) && (c = Ye({}, c)), t.style = Ls(c));
  }
  const o = xe(e) ? 1 : ul(e) ? 128 : kr(e) ? 64 : he(e) ? 4 : ee(e) ? 2 : 0;
  return m(
    e,
    t,
    n,
    r,
    s,
    o,
    i,
    !0
  );
}
function Tc(e) {
  return e ? /* @__PURE__ */ js(e) || tl(e) ? Ye({}, e) : e : null;
}
function xn(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: c } = e, _ = t ? Sc(s || {}, t) : s, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && hl(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? K(i) ? i.concat(gr(t)) : [i, gr(t)] : gr(t)
    ) : i,
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
    patchFlag: t && e.type !== ae ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && xn(e.ssContent),
    ssFallback: e.ssFallback && xn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && Vs(
    h,
    c.clone(h)
  ), h;
}
function ce(e = " ", t = 0) {
  return Ft(Hr, null, e, t);
}
function Pe(e = "", t = !1) {
  return t ? (U(), _c($t, null, e)) : Ft($t, null, e);
}
function wt(e) {
  return e == null || typeof e == "boolean" ? Ft($t) : K(e) ? Ft(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pl(e) ? Mt(e) : Ft(Hr, null, String(e));
}
function Mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xn(e);
}
function xr(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (K(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), xr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !tl(t) ? t._ctx = mt : s === 3 && mt && (mt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (r & 65) {
      xr(e, { default: t });
      return;
    }
    t = { default: t, _ctx: mt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [ce(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Sc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = vn([t.class, r.class]));
      else if (s === "style")
        t.style = Ls([t.style, r.style]);
      else if (Or(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(K(i) && i.includes(o)) ? t[s] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Nr(s) && (t[s] = o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function At(e, t, n, r = null) {
  Tt(e, t, 7, [
    n,
    r
  ]);
}
const Ec = Xo();
let Ac = 0;
function xc(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Ec, i = {
    uid: Ac++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
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
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: rl(r, s),
    emitsOptions: Jo(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: me,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: me,
    data: me,
    props: me,
    attrs: me,
    slots: me,
    refs: me,
    setupState: me,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = nc.bind(null, i), e.ce && e.ce(i), i;
}
let tt = null;
const Cc = () => tt || mt;
let Cr, Yn;
{
  const e = Lr(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  Cr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => tt = n
  ), Yn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Xn = n
  );
}
const Qn = (e) => {
  const t = tt;
  return Cr(e), e.scope.on(), () => {
    e.scope.off(), Cr(t);
  };
}, Oi = () => {
  tt && tt.scope.off(), Cr(null);
};
function ml(e) {
  return e.vnode.shapeFlag & 4;
}
let Xn = !1;
function wc(e, t = !1, n = !1) {
  t && Yn(t);
  const { props: r, children: s } = e.vnode, i = ml(e);
  ac(e, r, i, t), dc(e, s, n || t);
  const o = i ? Rc(e, t) : void 0;
  return t && Yn(!1), o;
}
function Rc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ka);
  const { setup: r } = n;
  if (r) {
    Ut();
    const s = e.setupContext = r.length > 1 ? Nc(e) : null, i = Qn(e), o = Zn(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), l = uo(o);
    if (Ht(), i(), (l || e.sp) && !zn(e) && zo(e), l) {
      if (o.then(Oi, Oi), t)
        return o.then((c) => {
          Yn(!0);
          try {
            Ni(e, c, t);
          } finally {
            Yn(!1);
          }
        }).catch((c) => {
          Dr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Ni(e, o);
  } else
    bl(e);
}
function Ni(e, t, n) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = Lo(t)), bl(e);
}
function bl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ot);
  {
    const s = Qn(e);
    Ut();
    try {
      Ga(e);
    } finally {
      Ht(), s();
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
function jr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lo(ya(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bn)
        return Bn[n](e);
    },
    has(t, n) {
      return n in t || n in Bn;
    }
  })) : e.proxy;
}
function Pc(e) {
  return ee(e) && "__vccOpts" in e;
}
const ue = (e, t) => /* @__PURE__ */ Ea(e, t, Xn), Ic = "3.5.42";
let ws;
const Pi = typeof window < "u" && window.trustedTypes;
if (Pi)
  try {
    ws = /* @__PURE__ */ Pi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yl = ws ? (e) => ws.createHTML(e) : (e) => e, Lc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", Lt = typeof document < "u" ? document : null, Ii = Lt && /* @__PURE__ */ Lt.createElement("template"), Dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Lt.createElementNS(Lc, e) : t === "mathml" ? Lt.createElementNS(Mc, e) : n ? Lt.createElement(e, { is: n }) : Lt.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Lt.createTextNode(e),
  createComment: (e) => Lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Lt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      Ii.innerHTML = yl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ii.content;
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
}, kc = /* @__PURE__ */ Symbol("_vtc");
function Fc(e, t, n) {
  const r = e[kc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Li = /* @__PURE__ */ Symbol("_vod"), Uc = /* @__PURE__ */ Symbol("_vsh"), Hc = /* @__PURE__ */ Symbol(""), jc = /(?:^|;)\s*display\s*:/;
function $c(e, t, n) {
  const r = e.style, s = xe(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (xe(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Fn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Fn(r, o, "");
    for (const o in n) {
      o === "display" && (i = !0);
      const l = n[o];
      l != null ? zc(
        e,
        o,
        !xe(t) && t ? t[o] : void 0,
        l
      ) || Fn(r, o, l) : Fn(r, o, "");
    }
  } else if (s) {
    if (t !== n) {
      const o = r[Hc];
      o && (n += ";" + o), r.cssText = n, i = jc.test(n);
    }
  } else t && e.removeAttribute("style");
  Li in e && (e[Li] = i ? r.display : "", e[Uc] && (r.display = "none"));
}
const fr = /\s*!important$/;
function Fn(e, t, n) {
  if (K(n))
    n.forEach((r) => Fn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    fr.test(n) ? e.setProperty(t, n.replace(fr, ""), "important") : e.setProperty(t, n);
  else {
    const r = Vc(e, t);
    fr.test(n) ? e.setProperty(
      cn(r),
      n.replace(fr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Mi = ["Webkit", "Moz", "ms"], ls = {};
function Vc(e, t) {
  const n = ls[t];
  if (n)
    return n;
  let r = gt(t);
  if (r !== "filter" && r in e)
    return ls[t] = r;
  r = ho(r);
  for (let s = 0; s < Mi.length; s++) {
    const i = Mi[s] + r;
    if (i in e)
      return ls[t] = i;
  }
  return t;
}
function zc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && xe(r) && n === r;
}
const Di = "http://www.w3.org/1999/xlink";
function ki(e, t, n, r, s, i = Gl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Di, t.slice(6, t.length)) : e.setAttributeNS(Di, t, n) : n == null || i && !bo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Nt(n) ? String(n) : n
  );
}
function Fi(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? yl(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
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
  o && e.removeAttribute(s || t);
}
function tn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Bc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ui = /* @__PURE__ */ Symbol("_vei");
function Wc(e, t, n, r, s = null) {
  const i = e[Ui] || (e[Ui] = {}), o = i[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Gc(t);
    if (r) {
      const _ = i[t] = Jc(
        r,
        s
      );
      tn(e, l, _, c);
    } else o && (Bc(e, l, o, c), i[t] = void 0);
  }
}
const qc = /(Once|Passive|Capture)$/, Kc = /^on:?(?:Once|Passive|Capture)$/;
function Gc(e) {
  let t, n;
  for (; (n = e.match(qc)) && !Kc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : cn(e.slice(2)), t];
}
let as = 0;
const Yc = /* @__PURE__ */ Promise.resolve(), Xc = () => as || (Yc.then(() => as = 0), as = Date.now());
function Jc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const s = n.value;
    if (K(s)) {
      const i = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        i.call(r), r._stopped = !0;
      };
      const o = s.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const _ = o[c];
        _ && Tt(
          _,
          t,
          5,
          l
        );
      }
    } else
      Tt(
        s,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Xc(), n;
}
const Hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zc = (e, t, n, r, s, i) => {
  const o = s === "svg";
  t === "class" ? Fc(e, r, o) : t === "style" ? $c(e, n, r) : Or(t) ? Nr(t) || Wc(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, r, o)) ? (Fi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ki(e, t, r, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (eu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !xe(r))) ? Fi(e, gt(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ki(e, t, r, o));
};
function Qc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hi(t) && ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Hi(t) && xe(n) ? !1 : t in e;
}
function eu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = gt(t);
  return Array.isArray(n) ? n.some((s) => gt(s) === r) : Object.keys(n).some((s) => gt(s) === r);
}
const wr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (n) => br(t, n) : t;
};
function tu(e) {
  e.target.composing = !0;
}
function ji(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const rn = /* @__PURE__ */ Symbol("_assign"), dr = /* @__PURE__ */ Symbol("_initialValue");
function cs(e, t, n) {
  return t && (e = e.trim()), n && (e = Ir(e)), e;
}
const us = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e.parentNode && (e.type === "text" ? e[dr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[dr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[rn] = wr(s);
    const i = r || s.props && s.props.type === "number";
    tn(e, t ? "change" : "input", (o) => {
      o.target.composing || e[rn](cs(e.value, n, i));
    }), (n || i) && tn(e, "change", () => {
      e.value = cs(e.value, n, i);
    }), t || (tn(e, "compositionstart", tu), tn(e, "compositionend", ji), tn(e, "change", ji));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const s = t ?? "", i = e[dr];
    delete e[dr], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[rn](cs(e.value, n, r)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: i } }, o) {
    if (e[rn] = wr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ir(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const _ = e.getRootNode();
    (_ instanceof Document || _ instanceof ShadowRoot) && _.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c);
  }
}, Ze = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, tn(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? Ir(Rr(c)) : Rr(c)
      ), i = e.multiple, o = i ? an(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        i,
        i ? K(o) ? s.slice() : s : o
      ];
      try {
        e[rn](o);
      } finally {
        Do(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[rn] = wr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    $i(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[rn] = wr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !nu(t, n[1], n[0])) && $i(e, t);
  }
};
function nu(e, t, n) {
  if (!n || K(e)) return Kt(e, t);
  if (an(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function $i(e, t) {
  const n = e.multiple, r = K(t);
  if (!(n && !r && !an(t))) {
    for (let s = 0, i = e.options.length; s < i; s++) {
      const o = e.options[s], l = Rr(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((_) => String(_) === String(l)) : o.selected = Xl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Kt(Rr(o), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Rr(e) {
  return "_value" in e ? e._value : e.value;
}
const ru = ["ctrl", "shift", "alt", "meta"], su = {
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
}, pr = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((s, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = su[t[o]];
      if (l && l(s, t)) return;
    }
    return e(s, ...i);
  }));
}, iu = /* @__PURE__ */ Ye({ patchProp: Zc }, Dc);
let Vi;
function ou() {
  return Vi || (Vi = hc(iu));
}
const lu = ((...e) => {
  const t = ou().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = cu(r);
    if (!s) return;
    const i = t._component;
    !ee(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, au(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
});
function au(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cu(e) {
  return xe(e) ? document.querySelector(e) : e;
}
function uu(e, t, n) {
  const r = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(r))
    return window._nc_initial_state.get(r);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const s = document.querySelector(r);
  if (s === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const i = JSON.parse(atob(s.value));
    return window._nc_initial_state.set(r, i), i;
  } catch (i) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: i }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: i });
  }
}
function zi(e, t) {
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
    var r, s, i, o, l = [], c = !0, _ = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(c = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (h) {
      _ = !0, s = h;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (_) throw s;
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
    if (typeof e == "string") return zi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zi(e, t) : void 0;
  }
}
const gl = Object.entries, Bi = Object.setPrototypeOf, bu = Object.isFrozen, yu = Object.getPrototypeOf, gu = Object.getOwnPropertyDescriptor;
let Ie = Object.freeze, je = Object.seal, gn = Object.create, _l = typeof Reflect < "u" && Reflect, Rs = _l.apply, Os = _l.construct;
Ie || (Ie = function(t) {
  return t;
});
je || (je = function(t) {
  return t;
});
Rs || (Rs = function(t, n) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return t.apply(n, s);
});
Os || (Os = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
    r[s - 1] = arguments[s];
  return new t(...r);
});
const en = Oe(Array.prototype.forEach), _u = Oe(Array.prototype.lastIndexOf), Wi = Oe(Array.prototype.pop), In = Oe(Array.prototype.push), vu = Oe(Array.prototype.splice), En = Array.isArray, Un = Oe(String.prototype.toLowerCase), fs = Oe(String.prototype.toString), qi = Oe(String.prototype.match), Ln = Oe(String.prototype.replace), Ki = Oe(String.prototype.indexOf), Tu = Oe(String.prototype.trim), Su = Oe(Number.prototype.toString), Eu = Oe(Boolean.prototype.toString), Gi = typeof BigInt > "u" ? null : Oe(BigInt.prototype.toString), Yi = typeof Symbol > "u" ? null : Oe(Symbol.prototype.toString), ot = Oe(Object.prototype.hasOwnProperty), Mn = Oe(Object.prototype.toString), qe = Oe(RegExp.prototype.test), Zt = Au(TypeError);
function Oe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return Rs(e, t, r);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Os(e, n);
  };
}
function le(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Un;
  if (Bi && Bi(e, null), !En(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let s = t[r];
    if (typeof s == "string") {
      const i = n(s);
      i !== s && (bu(t) || (t[r] = i), s = i);
    }
    e[s] = !0;
  }
  return e;
}
function xu(e) {
  for (let t = 0; t < e.length; t++)
    ot(e, t) || (e[t] = null);
  return e;
}
function ft(e) {
  const t = gn(null);
  for (const r of gl(e)) {
    var n = hu(r, 2);
    const s = n[0], i = n[1];
    ot(e, s) && (En(i) ? t[s] = xu(i) : i && typeof i == "object" && i.constructor === Object ? t[s] = ft(i) : t[s] = i);
  }
  return t;
}
function Cu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Su(e);
    case "boolean":
      return Eu(e);
    case "bigint":
      return Gi ? Gi(e) : "0";
    case "symbol":
      return Yi ? Yi(e) : "Symbol()";
    case "undefined":
      return Mn(e);
    case "function":
    case "object": {
      if (e === null)
        return Mn(e);
      const t = e, n = yt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Mn(r);
      }
      return Mn(e);
    }
    default:
      return Mn(e);
  }
}
function yt(e, t) {
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
const Xi = Ie(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ds = Ie(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ps = Ie(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ru = Ie(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), hs = Ie(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ou = Ie(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ji = Ie(["#text"]), Zi = Ie(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ms = Ie(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Qi = Ie(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), hr = Ie(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Nu = je(/{{[\w\W]*|^[\w\W]*}}/g), Pu = je(/<%[\w\W]*|^[\w\W]*%>/g), Iu = je(/\${[\w\W]*/g), Lu = je(/^data-[\-\w.\u00B7-\uFFFF]+$/), Mu = je(/^aria-[\-\w]+$/), eo = je(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = je(/^(?:\w+script|data):/i), ku = je(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Fu = je(/^html$/i), Uu = je(/^[a-z][.\w]*(-[.\w]+)+$/i), to = je(/<[/\w!]/g), no = je(/<[/\w]/g), Hu = je(/<\/no(script|embed|frames)/i), ju = je(/\/>/i), ut = {
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
}, vl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], $u = Ie(le({}, vl)), Vu = (function() {
  const e = {};
  return en(vl, (t) => {
    e[t] = je(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ie(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Bu = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const s = "data-tt-policy-suffix";
  n && n.hasAttribute(s) && (r = n.getAttribute(s));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(i, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
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
}, Bt = function(t, n, r, s) {
  return ot(t, n) && En(t[n]) ? le(s.base ? ft(s.base) : {}, t[n], s.transform) : r;
}, bs = function(t, n, r) {
  const s = ot(t, n) ? t[n] : void 0;
  return s && typeof s == "object" ? ft(s) : r();
};
function Tl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (P) => Tl(P);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ut.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, s = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, _ = e.NamedNodeMap;
  _ === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const h = e.DOMParser, A = e.trustedTypes, L = l.prototype, F = yt(L, "cloneNode"), G = yt(L, "remove"), j = yt(L, "nextSibling"), Z = yt(L, "childNodes"), z = yt(L, "parentNode"), I = yt(L, "shadowRoot"), q = yt(L, "attributes"), D = o && o.prototype ? yt(o.prototype, "nodeType") : null, oe = o && o.prototype ? yt(o.prototype, "nodeName") : null, be = o && o.prototype ? yt(o.prototype, "ownerDocument") : null, Ee = function(a) {
    return D ? D(a) : a.nodeType;
  }, Le = function(a) {
    return oe ? oe(a) : a.nodeName;
  };
  if (typeof i == "function") {
    const P = n.createElement("template");
    P.content && P.content.ownerDocument && (n = P.content.ownerDocument);
  }
  let ye, Ae = "", Xe, $e = !1, We = 0;
  const lt = function() {
    if (We > 0)
      throw Zt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Me = function(a) {
    lt(), We++;
    try {
      return ye.createHTML(a);
    } finally {
      We--;
    }
  }, ve = function(a) {
    lt(), We++;
    try {
      return ye.createScriptURL(a);
    } finally {
      We--;
    }
  }, ne = function() {
    return $e || (Xe = Bu(A, s), $e = !0), Xe;
  }, re = n, Ce = re.implementation, at = re.createNodeIterator, De = re.createDocumentFragment, Ne = re.getElementsByTagName, Ve = r.importNode;
  let se = ro();
  t.isSupported = typeof gl == "function" && typeof z == "function" && Ce && Ce.createHTMLDocument !== void 0;
  const Pt = Nu, pt = Pu, ze = Iu, W = Lu, Y = Mu, ie = Du, ke = ku, u = Uu;
  let p = eo, y = null;
  const C = le({}, [...Xi, ...ds, ...ps, ...hs, ...Ji]);
  let S = null;
  const x = le({}, [...Zi, ...ms, ...Qi, ...hr]);
  let R = Object.seal(gn(null, {
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
  })), N = null, O = null;
  const b = Object.seal(gn(null, {
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
  let T = !0, f = !0, M = !1, $ = !0, B = !1, J = !0, te = !1, pe = !1, Te = null, Fe = null, nt = !1, ht = !1, Gt = !1, Ue = !1, ct = !0, Cn = !1;
  const wn = "user-content-";
  let $r = !0, Vr = !1, un = {}, fn = null;
  const qs = le({}, [
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
  let Ks = null;
  const Gs = le({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ys = null;
  const Xs = le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), er = "http://www.w3.org/1998/Math/MathML", tr = "http://www.w3.org/2000/svg", St = "http://www.w3.org/1999/xhtml";
  let dn = St, zr = !1, Br = null;
  const El = le({}, [er, tr, St], fs), Js = Ie(["mi", "mo", "mn", "ms", "mtext"]);
  let Wr = le({}, Js);
  const Zs = Ie(["annotation-xml"]);
  let qr = le({}, Zs);
  const Al = le({}, ["title", "style", "font", "a", "script"]);
  let Rn = null;
  const xl = ["application/xhtml+xml", "text/html"], Cl = "text/html";
  let we = null, pn = null;
  const wl = n.createElement("form"), Qs = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, Kr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (pn && pn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = ft(a), Rn = // eslint-disable-next-line unicorn/prefer-includes
    xl.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? Cl : a.PARSER_MEDIA_TYPE, we = Rn === "application/xhtml+xml" ? fs : Un, y = Bt(a, "ALLOWED_TAGS", C, {
      transform: we
    }), S = Bt(a, "ALLOWED_ATTR", x, {
      transform: we
    }), Br = Bt(a, "ALLOWED_NAMESPACES", El, {
      transform: fs
    }), Ys = Bt(a, "ADD_URI_SAFE_ATTR", Xs, {
      transform: we,
      base: Xs
    }), Ks = Bt(a, "ADD_DATA_URI_TAGS", Gs, {
      transform: we,
      base: Gs
    }), fn = Bt(a, "FORBID_CONTENTS", qs, {
      transform: we
    }), N = Bt(a, "FORBID_TAGS", ft({}), {
      transform: we
    }), O = Bt(a, "FORBID_ATTR", ft({}), {
      transform: we
    }), un = ot(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? ft(a.USE_PROFILES) : a.USE_PROFILES : !1, T = a.ALLOW_ARIA_ATTR !== !1, f = a.ALLOW_DATA_ATTR !== !1, M = a.ALLOW_UNKNOWN_PROTOCOLS || !1, $ = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = a.SAFE_FOR_TEMPLATES || !1, J = a.SAFE_FOR_XML !== !1, te = a.WHOLE_DOCUMENT || !1, ht = a.RETURN_DOM || !1, Gt = a.RETURN_DOM_FRAGMENT || !1, Ue = a.RETURN_TRUSTED_TYPE || !1, nt = a.FORCE_BODY || !1, ct = a.SANITIZE_DOM !== !1, Cn = a.SANITIZE_NAMED_PROPS || !1, $r = a.KEEP_CONTENT !== !1, Vr = a.IN_PLACE || !1, p = wu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : eo, dn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : St, Wr = bs(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => le({}, Js)
      // Default built-in map
    ), qr = bs(
      a,
      "HTML_INTEGRATION_POINTS",
      () => le({}, Zs)
      // Default built-in map
    );
    const g = bs(a, "CUSTOM_ELEMENT_HANDLING", () => gn(null));
    if (R = gn(null), ot(g, "tagNameCheck") && Qs(g.tagNameCheck) && (R.tagNameCheck = g.tagNameCheck), ot(g, "attributeNameCheck") && Qs(g.attributeNameCheck) && (R.attributeNameCheck = g.attributeNameCheck), ot(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), je(R), B && (f = !1), Gt && (ht = !0), un && (y = le({}, Ji), S = gn(null), un.html === !0 && (le(y, Xi), le(S, Zi)), un.svg === !0 && (le(y, ds), le(S, ms), le(S, hr)), un.svgFilters === !0 && (le(y, ps), le(S, ms), le(S, hr)), un.mathMl === !0 && (le(y, hs), le(S, Qi), le(S, hr))), b.tagCheck = null, b.attributeCheck = null, ot(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? b.tagCheck = a.ADD_TAGS : En(a.ADD_TAGS) && (y === C && (y = ft(y)), le(y, a.ADD_TAGS, we))), ot(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? b.attributeCheck = a.ADD_ATTR : En(a.ADD_ATTR) && (S === x && (S = ft(S)), le(S, a.ADD_ATTR, we))), ot(a, "ADD_FORBID_CONTENTS") && En(a.ADD_FORBID_CONTENTS) && (fn === qs && (fn = ft(fn)), le(fn, a.ADD_FORBID_CONTENTS, we)), $r && (y["#text"] = !0), te && le(y, ["html", "head", "body"]), y.table && (le(y, ["tbody"]), delete N.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const w = ye;
      ye = a.TRUSTED_TYPES_POLICY;
      try {
        Ae = Me("");
      } catch (k) {
        throw ye = w, k;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (ye = void 0, Ae = "") : (ye === void 0 && (ye = ne()), ye && typeof Ae == "string" && (Ae = Me("")));
    Ie && Ie(a), pn = a;
  }, ei = le({}, [...ds, ...ps, ...Ru]), ti = le({}, [...hs, ...Ou]), Rl = function(a, g, w) {
    return g.namespaceURI === St ? a === "svg" : g.namespaceURI === er ? a === "svg" && (w === "annotation-xml" || Wr[w]) : !!ei[a];
  }, Ol = function(a, g, w) {
    return g.namespaceURI === St ? a === "math" : g.namespaceURI === tr ? a === "math" && qr[w] : !!ti[a];
  }, Nl = function(a, g, w) {
    return g.namespaceURI === tr && !qr[w] || g.namespaceURI === er && !Wr[w] ? !1 : !ti[a] && (Al[a] || !ei[a]);
  }, Pl = function(a) {
    let g = z(a);
    (!g || !g.tagName) && (g = {
      namespaceURI: dn,
      tagName: "template"
    });
    const w = Un(a.tagName), k = Un(g.tagName);
    return Br[a.namespaceURI] ? a.namespaceURI === tr ? Rl(w, g, k) : a.namespaceURI === er ? Ol(w, g, k) : a.namespaceURI === St ? Nl(w, g, k) : !!(Rn === "application/xhtml+xml" && Br[a.namespaceURI]) : !1;
  }, zt = function(a) {
    In(t.removed, {
      element: a
    });
    try {
      z(a).removeChild(a);
    } catch {
      if (G(a), !z(a))
        throw Zt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ni = function(a, g, w) {
    try {
      a.removeAttributeNode(g);
    } catch {
      try {
        a.removeAttribute(w);
      } catch {
      }
    }
  }, nr = function(a) {
    rr(a);
    const g = Z(a);
    if (g) {
      const k = [];
      en(g, (V) => {
        In(k, V);
      }), en(k, (V) => {
        try {
          G(V);
        } catch {
        }
      });
    }
    const w = q(a);
    if (w)
      for (let k = w.length - 1; k >= 0; --k) {
        const V = w[k], X = V && V.name;
        typeof X == "string" && ni(a, V, X);
      }
  }, Yt = function(a, g, w) {
    if (!w)
      try {
        w = g.getAttributeNode(a);
      } catch {
        w = null;
      }
    In(t.removed, {
      attribute: w || null,
      from: g
    });
    try {
      w ? g.removeAttributeNode(w) : g.removeAttribute(a);
    } catch {
      try {
        g.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (ht || Gt)
        try {
          zt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(a, "");
        } catch {
        }
  }, Il = function(a) {
    const g = q(a);
    if (g)
      for (let w = g.length - 1; w >= 0; --w) {
        const k = g[w], V = k && k.name;
        typeof V != "string" || S[we(V)] || ni(a, k, V);
      }
  }, rr = function(a) {
    const g = [a];
    for (; g.length > 0; ) {
      const w = g.pop();
      Ee(w) === ut.element && Il(w);
      const V = Z(w);
      if (V)
        for (let X = V.length - 1; X >= 0; --X)
          g.push(V[X]);
    }
  }, ri = function(a, g) {
    return J ? a === "patchsrc" ? !0 : a === "for" && g !== "label" && g !== "output" : !1;
  }, Ll = function(a) {
    if (!J)
      return;
    const g = [a];
    for (; g.length > 0; ) {
      const w = g.pop(), k = Ee(w);
      if (k === ut.processingInstruction || k === ut.comment && qe(no, w.data)) {
        try {
          G(w);
        } catch {
        }
        continue;
      }
      if (k === ut.element) {
        const X = w, ge = we(Le(w));
        try {
          X.hasAttribute && X.hasAttribute("patchsrc") && X.removeAttribute("patchsrc"), X.hasAttribute && X.hasAttribute("for") && ri("for", ge) && X.removeAttribute("for");
        } catch {
        }
      }
      const V = Z(w);
      if (V)
        for (let X = V.length - 1; X >= 0; --X)
          g.push(V[X]);
    }
  }, si = function(a) {
    let g = null, w = null;
    if (nt)
      a = "<remove></remove>" + a;
    else {
      const X = qi(a, /^[\r\n\t ]+/);
      w = X && X[0];
    }
    Rn === "application/xhtml+xml" && dn === St && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const k = ye ? Me(a) : a;
    if (dn === St)
      try {
        g = new h().parseFromString(k, Rn);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = Ce.createDocument(dn, "template", null);
      try {
        g.documentElement.innerHTML = zr ? Ae : k;
      } catch {
      }
    }
    const V = g.body || g.documentElement;
    return a && w && V.insertBefore(n.createTextNode(w), V.childNodes[0] || null), dn === St ? Ne.call(g, te ? "html" : "body")[0] : te ? g.documentElement : V;
  }, ii = function(a) {
    const g = be ? be(a) : a.ownerDocument;
    return at.call(
      g || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, sr = function(a) {
    return a = Ln(a, Pt, " "), a = Ln(a, pt, " "), a = Ln(a, ze, " "), a;
  }, Gr = function(a) {
    var g;
    a.normalize();
    const w = be ? be(a) : a.ownerDocument, k = at.call(
      w || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let V = k.nextNode();
    for (; V; )
      V.data = sr(V.data), V = k.nextNode();
    const X = (g = a.querySelectorAll) === null || g === void 0 ? void 0 : g.call(a, "template");
    X && en(X, (ge) => {
      hn(ge.content) && Gr(ge.content);
    });
  }, ir = function(a) {
    const g = oe ? oe(a) : null;
    return typeof g != "string" || we(g) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== q(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
  }, hn = function(a) {
    if (!D || typeof a != "object" || a === null)
      return !1;
    try {
      return D(a) === ut.documentFragment;
    } catch {
      return !1;
    }
  }, On = function(a) {
    if (!D || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof D(a) == "number";
    } catch {
      return !1;
    }
  };
  function Et(P, a, g) {
    P.length !== 0 && en(P, (w) => {
      w.call(t, a, g, pn);
    });
  }
  const Ml = function(a, g) {
    return !!(J && a.hasChildNodes() && !On(a.firstElementChild) && qe(to, a.textContent) && qe(to, a.innerHTML) || J && a.namespaceURI === St && $u[g] && (On(a.firstElementChild) || typeof a.textContent == "string" && qe(Vu[g], a.textContent)) || a.nodeType === ut.processingInstruction || J && a.nodeType === ut.comment && qe(no, a.data));
  }, or = function(a, g) {
    if (a instanceof RegExp)
      return qe(a, g);
    if (a instanceof Function) {
      for (var w = arguments.length, k = new Array(w > 2 ? w - 2 : 0), V = 2; V < w; V++)
        k[V - 2] = arguments[V];
      return !!a(g, ...k);
    }
    return !1;
  }, Dl = function(a, g, w) {
    if (!N[g] && ui(g) && or(R.tagNameCheck, g))
      return !1;
    if ($r && !fn[g]) {
      const k = z(a), V = Z(a);
      if (V && k) {
        const X = V.length;
        for (let ge = X - 1; ge >= 0; --ge) {
          const Se = a === w ? F(V[ge], !0) : V[ge];
          k.insertBefore(Se, j(a));
        }
      }
    }
    return zt(a), !0;
  }, oi = function(a, g, w, k) {
    return a.length === 0 ? g : g === w || g === k ? ft(g) : g;
  }, li = function(a, g) {
    return a === g || z(a) !== null ? !1 : (Vr && rr(a), !0);
  }, ai = function(a, g) {
    if (Et(se.beforeSanitizeElements, a, null), li(a, g))
      return !0;
    if (ir(a))
      return zt(a), !0;
    const w = we(Le(a));
    if (y = oi(se.uponSanitizeElement, y, C, Te), Et(se.uponSanitizeElement, a, {
      tagName: w,
      allowedTags: y
    }), li(a, g))
      return !0;
    if (Ml(a, w))
      return zt(a), !0;
    if (N[w] || !(b.tagCheck instanceof Function && b.tagCheck(w)) && !y[w]) {
      const V = Dl(a, w, g);
      return V === !1 && Et(se.afterSanitizeElements, a, null), V;
    }
    if (Ee(a) === ut.element && !Pl(a) || (w === "noscript" || w === "noembed" || w === "noframes") && qe(Hu, a.innerHTML))
      return zt(a), !0;
    if (B && a.nodeType === ut.text) {
      const V = sr(a.textContent);
      a.textContent !== V && (In(t.removed, {
        element: a.cloneNode()
      }), a.textContent = V);
    }
    return Et(se.afterSanitizeElements, a, null), !1;
  }, ci = function(a, g, w) {
    if (O[g] || ri(g, a) || ct && (g === "id" || g === "name") && (w in n || w in wl))
      return !1;
    const k = S[g] || b.attributeCheck instanceof Function && b.attributeCheck(g, a);
    return f && qe(W, g) || T && qe(Y, g) ? !0 : k ? Ys[g] || qe(p, Ln(w, ke, "")) || (g === "src" || g === "xlink:href" || g === "href") && a !== "script" && Ki(w, "data:") === 0 && Ks[a] || M && !qe(ie, Ln(w, ke, "")) ? !0 : !w : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      ui(a) && or(R.tagNameCheck, a) && or(R.attributeNameCheck, g, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && R.allowCustomizedBuiltInElements && or(R.tagNameCheck, w)
    );
  }, kl = le({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ui = function(a) {
    return !kl[Un(a)] && qe(u, a);
  }, Fl = function(a, g, w, k) {
    if (ye && typeof A == "object" && typeof A.getAttributeType == "function" && !w)
      switch (A.getAttributeType(a, g)) {
        case "TrustedHTML":
          return Me(k);
        case "TrustedScriptURL":
          return ve(k);
      }
    return k;
  }, Ul = function(a, g, w, k) {
    try {
      w ? a.setAttributeNS(w, g, k) : a.setAttribute(g, k), ir(a) ? zt(a) : Wi(t.removed);
    } catch {
      Yt(g, a);
    }
  }, fi = function(a) {
    Et(se.beforeSanitizeAttributes, a, null);
    const g = a.attributes;
    if (!g || ir(a))
      return;
    S = oi(se.uponSanitizeAttribute, S, x, Fe);
    const w = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: S,
      forceKeepAttr: void 0
    };
    let k = g.length;
    const V = we(a.nodeName);
    for (; k--; ) {
      const X = g[k], ge = X.name, Se = X.namespaceURI, rt = X.value, st = we(ge), Xr = rt;
      let Je = ge === "value" ? Xr : Tu(Xr);
      if (w.attrName = st, w.attrValue = Je, w.keepAttr = !0, w.forceKeepAttr = void 0, Et(se.uponSanitizeAttribute, a, w), Je = w.attrValue, Cn && (st === "id" || st === "name") && Ki(Je, wn) !== 0 && (Yt(ge, a, X), Je = wn + Je), J && qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Je)) {
        Yt(ge, a, X);
        continue;
      }
      if (st === "attributename" && qi(Je, "href")) {
        Yt(ge, a, X);
        continue;
      }
      if (!w.forceKeepAttr) {
        if (!w.keepAttr) {
          Yt(ge, a, X);
          continue;
        }
        if (!$ && qe(ju, Je)) {
          Yt(ge, a, X);
          continue;
        }
        if (B && (Je = sr(Je)), !ci(V, st, Je)) {
          Yt(ge, a, X);
          continue;
        }
        Je = Fl(V, st, Se, Je), Je !== Xr && Ul(a, ge, Se, Je);
      }
    }
    Et(se.afterSanitizeAttributes, a, null);
  }, lr = function(a) {
    let g = null;
    const w = ii(a);
    for (Et(se.beforeSanitizeShadowDOM, a, null); g = w.nextNode(); )
      if (Et(se.uponSanitizeShadowNode, g, null), ai(g, a), fi(g), hn(g.content) && lr(g.content), Ee(g) === ut.element) {
        const k = I(g);
        hn(k) && (Yr(k), lr(k));
      }
    Et(se.afterSanitizeShadowDOM, a, null);
  }, Yr = function(a) {
    const g = [{
      node: a,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const w = g.pop();
      if (w.shadow) {
        lr(w.shadow);
        continue;
      }
      const k = w.node, X = Ee(k) === ut.element, ge = Z(k);
      if (ge)
        for (let Se = ge.length - 1; Se >= 0; --Se)
          g.push({
            node: ge[Se],
            shadow: null
          });
      if (X) {
        const Se = oe ? oe(k) : null;
        if (typeof Se == "string" && we(Se) === "template") {
          const rt = k.content;
          hn(rt) && g.push({
            node: rt,
            shadow: null
          });
        }
      }
      if (X) {
        const Se = I(k);
        hn(Se) && g.push({
          node: null,
          shadow: Se
        }, {
          node: Se,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(P) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, w = null, k = null, V = null;
    if (zr = !P, zr && (P = "<!-->"), typeof P != "string" && !On(P) && (P = Cu(P), typeof P != "string"))
      throw Zt("dirty is not a string, aborting");
    if (!t.isSupported)
      return P;
    pe ? (y = Te, S = Fe) : Kr(a), (se.uponSanitizeElement.length > 0 || se.uponSanitizeAttribute.length > 0) && (y = ft(y)), se.uponSanitizeAttribute.length > 0 && (S = ft(S)), t.removed = [];
    const X = Vr && typeof P != "string" && On(P);
    if (X) {
      Ll(P);
      const rt = Le(P);
      if (typeof rt == "string") {
        const st = we(rt);
        if (!y[st] || N[st])
          throw nr(P), Zt("root node is forbidden and cannot be sanitized in-place");
      }
      if (ir(P))
        throw nr(P), Zt("root node is clobbered and cannot be sanitized in-place");
      try {
        Yr(P);
      } catch (st) {
        throw nr(P), st;
      }
    } else if (On(P))
      g = si("<!---->"), w = g.ownerDocument.importNode(P, !0), w.nodeType === ut.element && w.nodeName === "BODY" || w.nodeName === "HTML" ? g = w : g.appendChild(w), Yr(w);
    else {
      if (!ht && !B && !te && // eslint-disable-next-line unicorn/prefer-includes
      P.indexOf("<") === -1)
        return ye && Ue ? Me(P) : P;
      if (g = si(P), !g)
        return ht ? null : Ue ? Ae : "";
    }
    g && nt && zt(g.firstChild);
    const ge = X ? P : g;
    try {
      const rt = ii(ge);
      for (; k = rt.nextNode(); )
        ai(k, ge), fi(k), hn(k.content) && lr(k.content);
    } catch (rt) {
      throw X && (nr(P), en(t.removed, (st) => {
        st.element && rr(st.element);
      })), rt;
    }
    if (X)
      return en(t.removed, (rt) => {
        rt.element && rr(rt.element);
      }), B && Gr(P), P;
    if (ht) {
      if (B && Gr(g), Gt)
        for (V = De.call(g.ownerDocument); g.firstChild; )
          V.appendChild(g.firstChild);
      else
        V = g;
      return (S.shadowroot || S.shadowrootmode) && (V = Ve.call(r, V, !0)), V;
    }
    let Se = te ? g.outerHTML : g.innerHTML;
    return te && y["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && qe(Fu, g.ownerDocument.doctype.name) && (Se = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Se), B && (Se = sr(Se)), ye && Ue ? Me(Se) : Se;
  }, t.setConfig = function() {
    let P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Kr(P), pe = !0, Te = y, Fe = S;
  }, t.clearConfig = function() {
    pn = null, pe = !1, Te = null, Fe = null, ye = Xe, Ae = "";
  }, t.isValidAttribute = function(P, a, g) {
    pn || Kr({});
    const w = we(P), k = we(a);
    return ci(w, k, g);
  }, t.addHook = function(P, a) {
    typeof a == "function" && ot(se, P) && In(se[P], a);
  }, t.removeHook = function(P, a) {
    if (ot(se, P)) {
      if (a !== void 0) {
        const g = _u(se[P], a);
        return g === -1 ? void 0 : vu(se[P], g, 1)[0];
      }
      return Wi(se[P]);
    }
  }, t.removeHooks = function(P) {
    ot(se, P) && (se[P] = []);
  }, t.removeAllHooks = function() {
    se = ro();
  }, t;
}
var Wu = Tl();
function qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ys, so;
function Ku() {
  if (so) return ys;
  so = 1;
  var e = /["'&<>]/;
  ys = t;
  function t(n) {
    var r = "" + n, s = e.exec(r);
    if (!s)
      return r;
    var i, o = "", l = 0, c = 0;
    for (l = s.index; l < r.length; l++) {
      switch (r.charCodeAt(l)) {
        case 34:
          i = "&quot;";
          break;
        case 38:
          i = "&amp;";
          break;
        case 39:
          i = "&#39;";
          break;
        case 60:
          i = "&lt;";
          break;
        case 62:
          i = "&gt;";
          break;
        default:
          continue;
      }
      c !== l && (o += r.substring(c, l)), c = l + 1, o += i;
    }
    return c !== l ? o + r.substring(c, l) : o;
  }
  return ys;
}
var Gu = Ku();
const io = /* @__PURE__ */ qu(Gu);
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
function d(e, t, n, r, s) {
  const i = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof s == "object" ? s : typeof r == "object" ? r : {}
  }, c = (j) => j, _ = (l.sanitize ? Wu.sanitize : c) || c, h = l.escape ? io : c, A = (j) => typeof j == "string" || typeof j == "number", L = (j, Z, z) => j.replace(/%n/g, "" + z).replace(/{([^{}]*)}/g, (I, q) => {
    if (Z === void 0 || !(q in Z))
      return h(I);
    const D = Z[q];
    return A(D) ? h(`${D}`) : typeof D == "object" && A(D.value) ? (D.escape !== !1 ? io : c)(`${D.value}`) : h(I);
  });
  let G = (s?.bundle ?? Yu(e)).translations[t] || t;
  return G = Array.isArray(G) ? G[0] : G, _(typeof i == "object" || o !== void 0 ? L(
    G,
    i,
    o
  ) : G);
}
const Xu = { class: "library-vue-catalogue" }, Ju = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Zu = { class: "library-catalogue-header" }, Qu = { id: "library-catalogue-heading" }, ef = { class: "library-muted" }, tf = ["aria-label"], nf = ["href"], rf = ["href"], sf = ["href"], of = ["href"], lf = ["aria-label"], af = ["name", "value"], cf = { class: "library-quick-filter-search" }, uf = { value: "title" }, ff = { value: "recent" }, df = { value: "publicationDate" }, pf = { value: "publication" }, hf = { value: "lastOpened" }, mf = { value: "format" }, bf = { value: "" }, yf = { value: "1" }, gf = ["value"], _f = ["value"], vf = ["aria-label"], Tf = ["aria-label"], Sf = { class: "library-filter-panel" }, Ef = { class: "library-filter-panel-summary" }, Af = ["aria-label"], xf = { value: "" }, Cf = ["value"], wf = { value: "" }, Rf = ["value"], Of = { value: "" }, Nf = ["value"], Pf = { value: "" }, If = ["value"], Lf = { value: "" }, Mf = ["value"], Df = { value: "" }, kf = ["value"], Ff = { value: "" }, Uf = ["value"], Hf = { value: "" }, jf = ["value"], $f = { value: "" }, Vf = ["value"], zf = { value: "" }, Bf = ["value"], Wf = { value: "" }, qf = { value: "1" }, Kf = { value: "" }, Gf = { value: "1" }, Yf = { value: "title" }, Xf = { value: "recent" }, Jf = { value: "publicationDate" }, Zf = { value: "publication" }, Qf = { value: "lastOpened" }, ed = { value: "format" }, td = ["value"], nd = ["value"], rd = ["aria-label"], sd = ["aria-label"], id = ["href"], od = { class: "library-muted library-filter-result-summary" }, ld = { key: 0 }, ad = { href: "?" }, cd = { class: "library-batch-actions" }, ud = { class: "library-settings-count-badge" }, fd = ["action"], dd = ["value"], pd = ["name", "value"], hd = {
  type: "submit",
  class: "button secondary"
}, md = { class: "library-muted" }, bd = ["action"], yd = ["value"], gd = ["name", "value"], _d = {
  type: "submit",
  class: "button secondary"
}, vd = { class: "library-muted" }, Td = ["action"], Sd = ["value"], Ed = ["name", "value"], Ad = {
  type: "submit",
  class: "button secondary"
}, xd = { class: "library-muted" }, Cd = ["aria-label"], wd = ["href", "aria-label"], Rd = ["aria-label"], Od = { class: "library-pagination-range" }, Nd = { key: 0 }, Pd = ["href"], Id = {
  key: 1,
  class: "library-muted"
}, Ld = ["href"], Md = {
  key: 3,
  class: "library-muted"
}, Dd = {
  key: 1,
  class: "library-periodical-groups"
}, kd = { class: "library-periodical-groups-summary" }, Fd = { id: "library-periodical-groups-heading" }, Ud = { class: "library-muted" }, Hd = ["href"], jd = { class: "library-muted" }, $d = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, Vd = { class: "library-periodical-groups-summary" }, zd = { id: "library-periodical-groups-empty-heading" }, Bd = { class: "library-muted" }, Wd = { class: "library-muted" }, qd = { class: "library-empty-actions" }, Kd = ["href"], Gd = { class: "library-muted" }, Yd = { class: "library-muted" }, Xd = { class: "library-empty-actions" }, Jd = ["href"], Zd = { class: "library-muted" }, Qd = { class: "library-empty-actions" }, ep = ["href"], tp = {
  href: "?",
  class: "button primary"
}, np = { class: "library-muted" }, rp = { class: "library-empty-actions" }, sp = ["href"], ip = {
  key: 4,
  class: "library-cover-gallery"
}, op = ["href", "aria-label"], lp = ["src", "alt"], ap = ["action", "onSubmit"], cp = ["value"], up = ["value"], fp = ["aria-pressed", "title", "aria-label", "onClick"], dp = { class: "library-cover-summary" }, pp = { class: "library-cover-primary" }, hp = ["aria-label"], mp = ["href"], bp = ["onToggle"], yp = ["aria-label"], gp = { class: "library-cover-meta" }, _p = {
  key: 0,
  class: "library-creator"
}, vp = { class: "library-cover-detail-list" }, Tp = { class: "library-cover-detail-chip" }, Sp = {
  key: 0,
  class: "library-cover-detail-chip"
}, Ep = {
  key: 1,
  class: "library-cover-detail-chip"
}, Ap = {
  key: 2,
  class: "library-cover-detail-chip"
}, xp = {
  key: 3,
  class: "library-cover-detail-chip"
}, Cp = {
  key: 4,
  class: "library-cover-detail-chip"
}, wp = {
  key: 5,
  class: "library-cover-detail-chip"
}, Rp = {
  key: 6,
  class: "library-cover-detail-chip"
}, Op = {
  key: 1,
  class: "library-muted library-cover-description"
}, Np = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Pp = { key: 0 }, Ip = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Lp = {
  key: 0,
  class: "library-muted"
}, Mp = { class: "library-cover-actions" }, Dp = ["href"], kp = ["href"], Fp = ["href"], Up = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], s = /* @__PURE__ */ nn({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), i = /* @__PURE__ */ nn((s.items || []).map((b) => ({ ...b }))), o = ue(() => i), l = ue(() => s.shelves || []), c = ue(() => s.formats || []), _ = ue(() => s.publications || []), h = ue(() => s.publicationSummaries || []), A = ue(() => s.publicationYears || []), L = ue(() => s.creators || []), F = ue(() => s.scanStatuses || []), G = ue(() => s.workflowStatuses || []), j = ue(() => s.genres || []), Z = ue(() => s.classifications || []), z = ue(() => s.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), I = /* @__PURE__ */ nn({
      q: s.activeFilters?.q || "",
      type: s.activeFilters?.type || "",
      publication: s.activeFilters?.publication || "",
      year: s.activeFilters?.year || "",
      creator: s.activeFilters?.creator || "",
      format: s.activeFilters?.format || "",
      tag: s.activeFilters?.tag || "",
      shelf: s.activeFilters?.shelf || "",
      status: s.activeFilters?.status || "",
      workflowStatus: s.activeFilters?.workflowStatus || "",
      genre: s.activeFilters?.genre || "",
      classification: s.activeFilters?.classification || "",
      scannerConflicts: s.activeFilters?.scannerConflicts || "",
      starred: s.activeFilters?.starred || "",
      sort: s.activeFilters?.sort || "title"
    }), q = ue(() => s.settingsUrl || ""), D = ue(() => s.requestToken || ""), oe = ue(() => s.metadataExportUrl || ""), be = ue(() => s.metadataSidecarManifestUrl || ""), Ee = ue(() => s.metadataSidecarBundleUrl || ""), Le = ue(() => s.catalogueEndpointUrl || "/apps/library/catalogue"), ye = ue(() => s.batchTagUrl || "/apps/library/bulk/tags"), Ae = ue(() => s.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Xe = ue(() => s.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), $e = ue(() => s.scannerConflictReviewUrl || "?scannerConflicts=1"), We = ue(() => Number(s.rootCount || 0)), lt = ue(() => Number(s.enabledRootCount || 0)), Me = ue(() => We.value === 0), ve = ue(() => We.value > 0 && lt.value === 0), ne = ue(() => Ce.value.length > 0), re = {
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
    }, Ce = ue(() => Object.entries(re).map(([b, T]) => ({ key: b, label: T, value: I[b] || "" })).filter((b) => String(b.value).trim() !== "")), at = ue(() => Object.entries(I).filter(([b, T]) => !["q", "sort", "starred"].includes(b) && String(T || "").trim() !== "").map(([b, T]) => ({ key: b, value: T }))), De = ue(() => Object.entries(I).filter(([b, T]) => String(T || "").trim() !== "").map(([b, T]) => ({ key: b, value: T }))), Ne = /* @__PURE__ */ nn({}), Ve = /* @__PURE__ */ ga(null);
    let se = null;
    function Pt(b) {
      const T = new URLSearchParams(new FormData(b));
      for (const f of Array.from(T.keys()))
        String(T.get(f) || "").trim() === "" && T.delete(f);
      return T.delete("page"), T;
    }
    function pt(b) {
      i.splice(0, i.length, ...(b.items || []).map((T) => ({ ...T })));
      for (const T of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "creators", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchMetadataResetUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(b, T) && (s[T] = b[T]);
      Object.assign(I, b.activeFilters || {});
    }
    async function ze(b) {
      const T = b?.currentTarget?.tagName === "FORM" ? b.currentTarget : b?.currentTarget?.form;
      if (!T) return;
      const M = Pt(T).toString(), $ = M ? `?${M}` : "", B = await fetch(Le.value + $, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!B.ok) {
        T.submit();
        return;
      }
      pt(await B.json()), history.replaceState({}, "", M ? `?${M}` : window.location.pathname);
    }
    function W(b) {
      ze(b);
    }
    function Y(b) {
      window.clearTimeout(se), se = window.setTimeout(() => W(b), 350);
    }
    function ie(b) {
      const T = new URLSearchParams();
      for (const [M, $] of Object.entries(I)) {
        const B = String($ || "").trim();
        B !== "" && M !== b && !(M === "sort" && B === "title") && T.set(M, B);
      }
      const f = T.toString();
      return f ? `?${f}` : "?";
    }
    function ke() {
      return ie("q");
    }
    function u(b) {
      return String(b || "").toUpperCase();
    }
    function p(b) {
      return b.nextcloudTags || [];
    }
    function y(b) {
      const T = new URLSearchParams(window.location.search);
      return T.set("publication", b), T.set("sort", "publication"), T.delete("page"), `?${T.toString()}`;
    }
    function C(b, T) {
      Ne[b] = !!T?.currentTarget?.open;
    }
    function S(b) {
      const T = String(b?.tagName || "").toLowerCase();
      return b?.isContentEditable || ["input", "select", "textarea", "button"].includes(T);
    }
    function x(b) {
      b.key !== "/" || b.metaKey || b.ctrlKey || b.altKey || b.shiftKey || S(b.target) || (b.preventDefault(), Ve.value?.focus(), Ve.value?.select?.());
    }
    function R(b) {
      b.key !== "Escape" || document.activeElement !== Ve.value || I.q === "" || (b.preventDefault(), I.q = "", Ve.value.value = "", window.clearTimeout(se), W({ currentTarget: Ve.value }));
    }
    function N(b) {
      x(b), R(b);
    }
    Wo(() => {
      window.addEventListener("keydown", N);
    }), qo(() => {
      window.removeEventListener("keydown", N);
    });
    async function O(b, T) {
      const f = T?.currentTarget?.closest?.("form") || T?.currentTarget;
      if (!f || !b?.starUrl) return;
      const M = !!b.starred;
      b.starred = !M;
      try {
        (await fetch(b.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (b.starred = M);
      } catch {
        b.starred = M;
      }
    }
    return (b, T) => (U(), H("div", Xu, [
      m("section", Ju, [
        m("div", Zu, [
          m("div", null, [
            m("h2", Qu, v(E(d)("library", "Publication catalogue")), 1),
            m("p", ef, v(E(d)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          m("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": E(d)("library", "Library actions")
          }, [
            m("a", {
              href: q.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, v(E(d)("library", "Settings")), 9, nf),
            oe.value ? (U(), H("a", {
              key: 0,
              href: oe.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, v(E(d)("library", "Export corrected metadata")), 9, rf)) : Pe("", !0),
            be.value ? (U(), H("a", {
              key: 1,
              href: be.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, v(E(d)("library", "Sidecar manifest")), 9, sf)) : Pe("", !0),
            Ee.value ? (U(), H("a", {
              key: 2,
              href: Ee.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, v(E(d)("library", "Sidecar ZIP")), 9, of)) : Pe("", !0)
          ], 8, tf)
        ]),
        m("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": E(d)("library", "Quick catalogue filters"),
          onSubmit: pr(ze, ["prevent"])
        }, [
          (U(!0), H(ae, null, Re(at.value, (f) => (U(), H("input", {
            key: f.key,
            type: "hidden",
            name: f.key,
            value: f.value
          }, null, 8, af))), 128)),
          m("label", cf, [
            ce(v(E(d)("library", "Search")) + " ", 1),
            T[18] || (T[18] = m("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            He(m("input", {
              ref_key: "quickSearchInput",
              ref: Ve,
              "onUpdate:modelValue": T[0] || (T[0] = (f) => I.q = f),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: Y
            }, null, 544), [
              [us, I.q]
            ])
          ]),
          m("label", null, [
            ce(v(E(d)("library", "Sort")) + " ", 1),
            He(m("select", {
              "onUpdate:modelValue": T[1] || (T[1] = (f) => I.sort = f),
              name: "sort",
              onChange: ze
            }, [
              m("option", uf, v(E(d)("library", "Title")), 1),
              m("option", ff, v(E(d)("library", "Recently added")), 1),
              m("option", df, v(E(d)("library", "Publication date")), 1),
              m("option", pf, v(E(d)("library", "Series")), 1),
              m("option", hf, v(E(d)("library", "Recently opened")), 1),
              m("option", mf, v(E(d)("library", "Format")), 1)
            ], 544), [
              [Ze, I.sort]
            ])
          ]),
          m("label", null, [
            ce(v(E(d)("library", "Starred")) + " ", 1),
            He(m("select", {
              "onUpdate:modelValue": T[2] || (T[2] = (f) => I.starred = f),
              name: "starred",
              onChange: ze
            }, [
              m("option", bf, v(E(d)("library", "All")), 1),
              m("option", yf, v(E(d)("library", "Starred")), 1)
            ], 544), [
              [Ze, I.starred]
            ])
          ]),
          m("label", null, [
            ce(v(E(d)("library", "Size")) + " ", 1),
            m("select", {
              value: z.value.limit,
              name: "limit",
              onChange: ze
            }, [
              (U(), H(ae, null, Re(r, (f) => m("option", {
                key: f,
                value: f
              }, v(f), 9, _f)), 64))
            ], 40, gf)
          ]),
          m("button", {
            type: "submit",
            class: "button primary",
            "aria-label": E(d)("library", "Apply catalogue filters")
          }, v(E(d)("library", "Apply filters")), 9, vf),
          m("a", {
            href: "?",
            class: "button secondary",
            "aria-label": E(d)("library", "Clear catalogue filters")
          }, v(E(d)("library", "Clear all")), 9, Tf)
        ], 40, lf),
        m("details", Sf, [
          m("summary", Ef, v(E(d)("library", "Show catalogue filters")), 1),
          m("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": E(d)("library", "Catalogue search and filters"),
            onSubmit: pr(ze, ["prevent"])
          }, [
            m("label", null, [
              ce(v(E(d)("library", "Search title / author")) + " ", 1),
              He(m("input", {
                "onUpdate:modelValue": T[3] || (T[3] = (f) => I.q = f),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [us, I.q]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Type")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[4] || (T[4] = (f) => I.type = f),
                name: "type"
              }, [
                m("option", xf, v(E(d)("library", "All types")), 1),
                (U(), H(ae, null, Re(n, (f) => m("option", {
                  key: f,
                  value: f
                }, v(f), 9, Cf)), 64))
              ], 512), [
                [Ze, I.type]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Series / periodical")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[5] || (T[5] = (f) => I.publication = f),
                name: "publication"
              }, [
                m("option", wf, v(E(d)("library", "All series and periodicals")), 1),
                (U(!0), H(ae, null, Re(_.value, (f) => (U(), H("option", {
                  key: f,
                  value: f
                }, v(f), 9, Rf))), 128))
              ], 512), [
                [Ze, I.publication]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Publication year")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[6] || (T[6] = (f) => I.year = f),
                name: "year"
              }, [
                m("option", Of, v(E(d)("library", "All years")), 1),
                (U(!0), H(ae, null, Re(A.value, (f) => (U(), H("option", {
                  key: f,
                  value: f
                }, v(f), 9, Nf))), 128))
              ], 512), [
                [Ze, I.year]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Creator")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[7] || (T[7] = (f) => I.creator = f),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                m("option", Pf, v(E(d)("library", "All creators")), 1),
                (U(!0), H(ae, null, Re(L.value, (f) => (U(), H("option", {
                  key: f,
                  value: f
                }, v(f), 9, If))), 128))
              ], 512), [
                [Ze, I.creator]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Nextcloud tag")) + " ", 1),
              He(m("input", {
                "onUpdate:modelValue": T[8] || (T[8] = (f) => I.tag = f),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [us, I.tag]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Format")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[9] || (T[9] = (f) => I.format = f),
                name: "format"
              }, [
                m("option", Lf, v(E(d)("library", "All formats")), 1),
                (U(!0), H(ae, null, Re(c.value, (f) => (U(), H("option", {
                  key: f,
                  value: f
                }, v(u(f)), 9, Mf))), 128))
              ], 512), [
                [Ze, I.format]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Shelf")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[10] || (T[10] = (f) => I.shelf = f),
                name: "shelf"
              }, [
                m("option", Df, v(E(d)("library", "All shelves")), 1),
                (U(!0), H(ae, null, Re(l.value, (f) => (U(), H("option", {
                  key: f,
                  value: f
                }, v(f), 9, kf))), 128))
              ], 512), [
                [Ze, I.shelf]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Scan status")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[11] || (T[11] = (f) => I.status = f),
                name: "status"
              }, [
                m("option", Ff, v(E(d)("library", "All scan statuses")), 1),
                (U(!0), H(ae, null, Re(F.value, (f) => (U(), H("option", {
                  key: f,
                  value: f
                }, v(f), 9, Uf))), 128))
              ], 512), [
                [Ze, I.status]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Workflow status")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[12] || (T[12] = (f) => I.workflowStatus = f),
                name: "workflowStatus"
              }, [
                m("option", Hf, v(E(d)("library", "All workflow statuses")), 1),
                (U(!0), H(ae, null, Re(G.value, (f) => (U(), H("option", {
                  key: f,
                  value: f
                }, v(f), 9, jf))), 128))
              ], 512), [
                [Ze, I.workflowStatus]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Genre")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[13] || (T[13] = (f) => I.genre = f),
                name: "genre"
              }, [
                m("option", $f, v(E(d)("library", "All genres")), 1),
                (U(!0), H(ae, null, Re(j.value, (f) => (U(), H("option", {
                  key: f,
                  value: f
                }, v(f), 9, Vf))), 128))
              ], 512), [
                [Ze, I.genre]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Classification")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[14] || (T[14] = (f) => I.classification = f),
                name: "classification"
              }, [
                m("option", zf, v(E(d)("library", "All classifications")), 1),
                (U(!0), H(ae, null, Re(Z.value, (f) => (U(), H("option", {
                  key: f,
                  value: f
                }, v(f), 9, Bf))), 128))
              ], 512), [
                [Ze, I.classification]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Scanner conflicts")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[15] || (T[15] = (f) => I.scannerConflicts = f),
                name: "scannerConflicts"
              }, [
                m("option", Wf, v(E(d)("library", "All metadata")), 1),
                m("option", qf, v(E(d)("library", "Needs review")), 1)
              ], 512), [
                [Ze, I.scannerConflicts]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Starred")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[16] || (T[16] = (f) => I.starred = f),
                name: "starred"
              }, [
                m("option", Kf, v(E(d)("library", "All publications")), 1),
                m("option", Gf, v(E(d)("library", "Starred only")), 1)
              ], 512), [
                [Ze, I.starred]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Sort")) + " ", 1),
              He(m("select", {
                "onUpdate:modelValue": T[17] || (T[17] = (f) => I.sort = f),
                name: "sort"
              }, [
                m("option", Yf, v(E(d)("library", "Title")), 1),
                m("option", Xf, v(E(d)("library", "Recently added")), 1),
                m("option", Jf, v(E(d)("library", "Publication date")), 1),
                m("option", Zf, v(E(d)("library", "Series / periodical")), 1),
                m("option", Qf, v(E(d)("library", "Recently opened")), 1),
                m("option", ed, v(E(d)("library", "Format")), 1)
              ], 512), [
                [Ze, I.sort]
              ])
            ]),
            m("label", null, [
              ce(v(E(d)("library", "Page size")) + " ", 1),
              m("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (U(), H(ae, null, Re(r, (f) => m("option", {
                  key: f,
                  value: f
                }, v(f), 9, nd)), 64))
              ], 8, td)
            ]),
            m("button", {
              type: "submit",
              class: "button primary",
              "aria-label": E(d)("library", "Apply catalogue filters")
            }, v(E(d)("library", "Apply filters")), 9, rd),
            m("a", {
              href: "?",
              class: "button secondary",
              "aria-label": E(d)("library", "Clear catalogue filters")
            }, v(E(d)("library", "Clear")), 9, sd),
            m("a", {
              href: $e.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, v(E(d)("library", "Review scanner conflicts")), 9, id)
          ], 40, Af)
        ]),
        m("p", od, [
          ce(v(E(d)("library", "Showing")) + " " + v(z.value.from) + "–" + v(z.value.to) + " " + v(E(d)("library", "of")) + " " + v(z.value.total) + " " + v(E(d)("library", "catalogue items")), 1),
          Ce.value.length > 0 ? (U(), H("span", ld, [
            T[19] || (T[19] = ce(" · ", -1)),
            m("a", ad, v(E(d)("library", "Clear all filters")), 1)
          ])) : Pe("", !0)
        ]),
        m("details", cd, [
          m("summary", null, [
            ce(v(E(d)("library", "Batch actions for current results")) + " ", 1),
            m("span", ud, v(z.value.total) + " " + v(E(d)("library", "Current filter result")), 1)
          ]),
          m("form", {
            method: "post",
            action: ye.value,
            class: "library-batch-tag-form"
          }, [
            m("input", {
              type: "hidden",
              name: "requesttoken",
              value: D.value
            }, null, 8, dd),
            (U(!0), H(ae, null, Re(De.value, (f) => (U(), H("input", {
              key: f.key,
              type: "hidden",
              name: f.key,
              value: f.value
            }, null, 8, pd))), 128)),
            m("label", null, [
              ce(v(E(d)("library", "Apply Nextcloud tag to current results")) + " ", 1),
              T[20] || (T[20] = m("input", {
                type: "text",
                name: "nextcloudTagName",
                placeholder: "batch-review"
              }, null, -1))
            ]),
            m("button", hd, v(E(d)("library", "Apply tag to filtered results")), 1),
            m("p", md, v(E(d)("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata.")), 1)
          ], 8, fd),
          m("form", {
            method: "post",
            action: Ae.value,
            class: "library-batch-metadata-reset-form"
          }, [
            m("input", {
              type: "hidden",
              name: "requesttoken",
              value: D.value
            }, null, 8, yd),
            (U(!0), H(ae, null, Re(De.value, (f) => (U(), H("input", {
              key: `reset-${f.key}`,
              type: "hidden",
              name: f.key,
              value: f.value
            }, null, 8, gd))), 128)),
            T[21] || (T[21] = m("input", {
              type: "hidden",
              name: "scannerConflicts",
              value: "1"
            }, null, -1)),
            m("button", _d, v(E(d)("library", "Reset filtered metadata")), 1),
            m("p", vd, v(E(d)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
          ], 8, bd),
          m("form", {
            method: "post",
            action: Xe.value,
            class: "library-batch-cover-refresh-form"
          }, [
            m("input", {
              type: "hidden",
              name: "requesttoken",
              value: D.value
            }, null, 8, Sd),
            (U(!0), H(ae, null, Re(De.value, (f) => (U(), H("input", {
              key: `cover-${f.key}`,
              type: "hidden",
              name: f.key,
              value: f.value
            }, null, 8, Ed))), 128)),
            m("button", Ad, v(E(d)("library", "Request fresh cover previews")), 1),
            m("p", xd, v(E(d)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
          ], 8, Td)
        ]),
        Ce.value.length > 0 ? (U(), H("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": E(d)("library", "Active filters")
        }, [
          m("span", null, v(E(d)("library", "Active filters")), 1),
          (U(!0), H(ae, null, Re(Ce.value, (f) => (U(), H("a", {
            key: f.key,
            href: ie(f.key),
            class: "library-filter-chip",
            "aria-label": `${E(d)("library", "Remove filter")}: ${f.label}`
          }, [
            m("strong", null, v(f.label) + ":", 1),
            ce(" " + v(f.value) + " ", 1),
            T[22] || (T[22] = m("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, wd))), 128))
        ], 8, Cd)) : Pe("", !0),
        m("nav", {
          class: "library-pagination",
          "aria-label": E(d)("library", "Catalogue pagination")
        }, [
          m("span", Od, [
            ce(v(E(d)("library", "Page")) + " " + v(z.value.page), 1),
            z.value.total > 0 ? (U(), H("span", Nd, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : Pe("", !0)
          ]),
          z.value.previousUrl ? (U(), H("a", {
            key: 0,
            href: z.value.previousUrl
          }, v(E(d)("library", "Previous")), 9, Pd)) : (U(), H("span", Id, v(E(d)("library", "Previous")), 1)),
          z.value.nextUrl ? (U(), H("a", {
            key: 2,
            href: z.value.nextUrl
          }, v(E(d)("library", "Next")), 9, Ld)) : (U(), H("span", Md, v(E(d)("library", "Next")), 1))
        ], 8, Rd),
        h.value.length > 0 ? (U(), H("details", Dd, [
          m("summary", kd, v(E(d)("library", "Show top series and periodicals")), 1),
          m("h3", Fd, v(E(d)("library", "Top series and periodicals")), 1),
          m("p", Ud, v(E(d)("library", "Jump into recurring publications with one click.")), 1),
          m("ul", null, [
            (U(!0), H(ae, null, Re(h.value, (f) => (U(), H("li", {
              key: f.publication
            }, [
              m("a", {
                href: y(f.publication)
              }, v(f.publication), 9, Hd),
              m("span", jd, v(f.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : h.value.length === 0 ? (U(), H("details", $d, [
          m("summary", Vd, v(E(d)("library", "Show top series and periodicals")), 1),
          m("h3", zd, v(E(d)("library", "No series or periodicals found yet")), 1),
          m("p", Bd, v(E(d)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Pe("", !0),
        o.value.length === 0 ? (U(), H("div", {
          key: 3,
          class: vn(["library-empty-content", { "library-first-run-guidance": Me.value || ve.value, "library-filter-empty-state": ne.value && !Me.value && !ve.value }]),
          role: "status"
        }, [
          Me.value ? (U(), H(ae, { key: 0 }, [
            m("h3", null, v(E(d)("library", "Start with one Library root")), 1),
            m("p", Wd, v(E(d)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            m("p", qd, [
              m("a", {
                href: q.value,
                class: "button primary"
              }, v(E(d)("library", "Add a Library root")), 9, Kd),
              m("span", Gd, v(E(d)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : ve.value ? (U(), H(ae, { key: 1 }, [
            m("h3", null, v(E(d)("library", "No enabled Library roots")), 1),
            m("p", Yd, v(E(d)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            m("p", Xd, [
              m("a", {
                href: q.value,
                class: "button primary"
              }, v(E(d)("library", "Open Library settings")), 9, Jd)
            ])
          ], 64)) : ne.value ? (U(), H(ae, { key: 2 }, [
            m("h3", null, v(E(d)("library", "No matches for the current filters")), 1),
            m("p", Zd, v(E(d)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            m("p", Qd, [
              m("a", {
                href: ke(),
                class: "button secondary"
              }, v(E(d)("library", "Clear search")), 9, ep),
              m("a", tp, v(E(d)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (U(), H(ae, { key: 3 }, [
            m("h3", null, v(E(d)("library", "No catalogue items yet")), 1),
            m("p", np, v(E(d)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            m("p", rp, [
              m("a", {
                href: q.value,
                class: "button primary"
              }, v(E(d)("library", "Run a scan from settings")), 9, sp)
            ])
          ], 64))
        ], 2)) : (U(), H("div", ip, [
          (U(!0), H(ae, null, Re(o.value, (f) => (U(), H("article", {
            key: f.id,
            class: vn(["library-cover-card", { "library-cover-card--open": Ne[f.id] }])
          }, [
            m("a", {
              class: "library-cover-link",
              href: f.openUrl,
              "aria-label": `Read ${f.title}`
            }, [
              m("img", {
                class: "library-cover-image",
                src: f.coverUrl,
                alt: `Cover for ${f.title}`,
                loading: "lazy"
              }, null, 8, lp)
            ], 8, op),
            m("form", {
              method: "post",
              action: f.starUrl,
              class: "library-cover-star-form",
              onSubmit: pr((M) => O(f, M), ["prevent"])
            }, [
              m("input", {
                type: "hidden",
                name: "requesttoken",
                value: D.value
              }, null, 8, cp),
              T[23] || (T[23] = m("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              m("input", {
                type: "hidden",
                name: "starred",
                value: f.starred ? "0" : "1"
              }, null, 8, up),
              m("button", {
                type: "submit",
                class: vn(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                "aria-pressed": f.starred ? "true" : "false",
                title: f.starred ? E(d)("library", "Unstar this publication") : E(d)("library", "Star this publication"),
                "aria-label": f.starred ? E(d)("library", "Unstar this publication") : E(d)("library", "Star this publication"),
                onClick: pr((M) => O(f, M), ["prevent"])
              }, v(f.starred ? "★" : "☆"), 11, fp)
            ], 40, ap),
            m("div", dp, [
              m("div", pp, [
                m("h3", null, [
                  f.starred ? (U(), H("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": E(d)("library", "Starred")
                  }, "★", 8, hp)) : Pe("", !0),
                  ce(v(f.title), 1)
                ]),
                m("a", {
                  class: "library-cover-read",
                  href: f.openUrl
                }, v(E(d)("library", "Read")), 9, mp)
              ]),
              m("details", {
                class: "library-cover-details",
                onToggle: (M) => C(f.id, M)
              }, [
                m("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${E(d)("library", "Show details and actions")}: ${f.title}`
                }, v(E(d)("library", "Details")), 9, yp),
                m("div", gp, [
                  f.creators ? (U(), H("p", _p, v(f.creators), 1)) : Pe("", !0),
                  m("dl", vp, [
                    m("div", Tp, [
                      m("dt", null, v(E(d)("library", "Type")), 1),
                      m("dd", null, v(f.publicationType), 1)
                    ]),
                    f.publication ? (U(), H("div", Sp, [
                      m("dt", null, v(E(d)("library", "Series")), 1),
                      m("dd", null, v(f.publication), 1)
                    ])) : Pe("", !0),
                    f.publicationDate ? (U(), H("div", Ep, [
                      m("dt", null, v(E(d)("library", "Date")), 1),
                      m("dd", null, v(f.publicationDate), 1)
                    ])) : Pe("", !0),
                    f.workflowStatus ? (U(), H("div", Ap, [
                      m("dt", null, v(E(d)("library", "Status")), 1),
                      m("dd", null, v(f.workflowStatus), 1)
                    ])) : Pe("", !0),
                    f.hasScannerConflict ? (U(), H("div", xp, [
                      m("dt", null, v(E(d)("library", "Review")), 1),
                      m("dd", null, v(f.scannerConflictCount) + " fields", 1)
                    ])) : Pe("", !0),
                    f.lastOpenedAt ? (U(), H("div", Cp, [
                      m("dt", null, v(E(d)("library", "Last opened")), 1),
                      m("dd", null, v(f.lastOpenedAt), 1)
                    ])) : Pe("", !0),
                    f.extension ? (U(), H("div", wp, [
                      m("dt", null, v(E(d)("library", "Format")) + ":", 1),
                      m("dd", null, v(u(f.extension)), 1)
                    ])) : Pe("", !0),
                    f.shelf ? (U(), H("div", Rp, [
                      m("dt", null, v(E(d)("library", "Shelf")), 1),
                      m("dd", null, v(f.shelf), 1)
                    ])) : Pe("", !0)
                  ]),
                  f.description ? (U(), H("p", Op, v(f.description), 1)) : Pe("", !0),
                  f.scanStatus !== "indexed" || f.scanError ? (U(), H("p", Np, [
                    ce(" scanStatus: " + v(f.scanStatus || "unknown"), 1),
                    f.scanError ? (U(), H("span", Pp, " · scanError: " + v(f.scanError), 1)) : Pe("", !0)
                  ])) : Pe("", !0),
                  m("div", Ip, [
                    p(f).length === 0 ? (U(), H("span", Lp, "No Nextcloud tags")) : (U(!0), H(ae, { key: 1 }, Re(p(f), (M) => (U(), H("span", {
                      key: M.id,
                      class: "library-tag"
                    }, v(M.name), 1))), 128))
                  ]),
                  m("p", Mp, [
                    m("a", {
                      href: f.filesUrl
                    }, v(E(d)("library", "Show in Files")), 9, Dp),
                    T[24] || (T[24] = ce(" · ", -1)),
                    m("a", {
                      href: f.downloadUrl
                    }, v(E(d)("library", "Download source")), 9, kp),
                    T[25] || (T[25] = ce(" · ", -1)),
                    m("a", {
                      href: f.detailsUrl
                    }, v(E(d)("library", "Details")), 9, Fp)
                  ])
                ])
              ], 40, bp)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, oo = uu("library", "catalogue", {}), _r = document.querySelector("#library-vue-root"), lo = {
  ...oo,
  requestToken: _r?.dataset.requestToken || oo.requestToken || ""
};
function Q(e) {
  return String(e ?? "");
}
function Sl(e) {
  return Q(e).toUpperCase();
}
function Hp(e, t, n, r = Q) {
  for (const s of t) {
    const i = document.createElement("option");
    i.value = Q(s), i.textContent = r(s), Q(s) === Q(n) && (i.selected = !0), e.appendChild(i);
  }
}
function ao(e, t, n, r, s = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = Q(r), o.placeholder = s, i.appendChild(o), e.appendChild(i);
}
function bn(e, t, n, r, s, i, o = Q) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const _ = document.createElement("option");
  _.value = "", _.textContent = s, c.appendChild(_), Hp(c, i, r, o), l.appendChild(c), e.appendChild(l);
}
function mr(e) {
  const t = Q(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function jp(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function $p(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && Q(r).trim() !== "");
}
function Vp() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Dn(e, t, n, r) {
  const s = document.createElement("a");
  return s.href = t, s.className = n, s.textContent = r, e.appendChild(s), s;
}
function zp(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function Bp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", d("library", "Catalogue search and filters")), ao(r, d("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), bn(r, d("library", "Type"), "type", n.type, d("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), ao(r, d("library", "Nextcloud tag"), "tag", n.tag, "photography"), bn(r, d("library", "Format"), "format", n.format, d("library", "All formats"), e.formats || [], Sl), bn(r, d("library", "Shelf"), "shelf", n.shelf, d("library", "All shelves"), e.shelves || []), bn(r, d("library", "Scan status"), "status", n.status, d("library", "All scan statuses"), e.scanStatuses || []), bn(r, d("library", "Sort"), "sort", n.sort || "title", d("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), bn(r, d("library", "Page size"), "limit", t.limit || 100, d("library", "Page size"), [25, 50, 100, 250, 500]);
  const s = document.createElement("button");
  s.type = "submit", s.className = "button primary", s.setAttribute("aria-label", d("library", "Apply catalogue filters")), s.textContent = d("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", d("library", "Clear catalogue filters")), i.textContent = d("library", "Clear"), r.append(s, i), r;
}
function Wp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", d("library", "Quick catalogue filters"));
  let s = null;
  const i = () => {
    window.clearTimeout(s), s = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [A, L] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(A) || Q(L).trim() === "") continue;
    const F = document.createElement("input");
    F.type = "hidden", F.name = A, F.value = Q(L), r.appendChild(F);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = d("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = Q(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", i), o.appendChild(l), r.appendChild(o);
  const c = [
    [d("library", "Sort"), "sort", n.sort || "title", [["title", d("library", "Title")], ["recent", d("library", "Recently added")], ["publicationDate", d("library", "Publication date")], ["publication", d("library", "Series")], ["lastOpened", d("library", "Recently opened")], ["format", d("library", "Format")]]],
    [d("library", "Starred"), "starred", n.starred || "", [["", d("library", "All")], ["1", d("library", "Starred")]]],
    [d("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [A, L, F, G] of c) {
    const j = document.createElement("label");
    j.textContent = A;
    const Z = document.createElement("select");
    Z.name = L;
    for (const [z, I] of G) {
      const q = document.createElement("option");
      q.value = Q(z), q.textContent = Q(I), Q(z) === Q(F) && (q.selected = !0), Z.appendChild(q);
    }
    Z.addEventListener("change", () => r.requestSubmit()), j.appendChild(Z), r.appendChild(j);
  }
  const _ = document.createElement("button");
  _.type = "submit", _.className = "button primary", _.setAttribute("aria-label", d("library", "Apply catalogue filters")), _.textContent = d("library", "Apply filters");
  const h = document.createElement("a");
  return h.href = "?", h.className = "button secondary", h.setAttribute("aria-label", d("library", "Clear catalogue filters")), h.textContent = d("library", "Clear all"), r.append(_, h), r;
}
function qp(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, s = Q(e.settingsUrl || ""), i = Q(e.metadataExportUrl || ""), o = Q(e.batchTagUrl || "/apps/library/bulk/tags"), l = Q(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), c = Q(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), _ = document.createElement("div");
  _.className = "library-vue-catalogue library-vue-fallback", _.dataset.vueFallback = "true";
  const h = document.createElement("section");
  h.className = "library-panel", h.setAttribute("aria-labelledby", "library-catalogue-heading");
  const A = document.createElement("div");
  A.className = "library-catalogue-header";
  const L = document.createElement("div"), F = document.createElement("h2");
  F.id = "library-catalogue-heading", F.textContent = d("library", "Publication catalogue");
  const G = document.createElement("p");
  G.className = "library-muted", G.textContent = d("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), L.append(F, G);
  const j = document.createElement("nav");
  if (j.className = "library-catalogue-toolbar", j.setAttribute("aria-label", d("library", "Library actions")), s) {
    const W = document.createElement("a");
    W.href = s, W.className = "button secondary", W.setAttribute("aria-label", "Open Library settings"), W.textContent = d("library", "Settings"), j.appendChild(W);
  }
  if (i) {
    const W = document.createElement("a");
    W.href = i, W.className = "button secondary", W.setAttribute("aria-label", "Export corrected metadata"), W.textContent = d("library", "Export corrected metadata"), j.appendChild(W);
  }
  if (e.metadataSidecarManifestUrl) {
    const W = document.createElement("a");
    W.href = e.metadataSidecarManifestUrl, W.className = "button secondary", W.setAttribute("aria-label", "Export sidecar manifest"), W.textContent = d("library", "Sidecar manifest"), j.appendChild(W);
  }
  if (e.metadataSidecarBundleUrl) {
    const W = document.createElement("a");
    W.href = e.metadataSidecarBundleUrl, W.className = "button secondary", W.setAttribute("aria-label", "Export sidecar ZIP"), W.textContent = d("library", "Sidecar ZIP"), j.appendChild(W);
  }
  A.append(L, j), h.appendChild(A), h.appendChild(Wp(e, r));
  const Z = document.createElement("details");
  Z.className = "library-filter-panel";
  const z = document.createElement("summary");
  z.className = "library-filter-panel-summary", z.textContent = d("library", "Show catalogue filters"), Z.append(z, Bp(e, r)), h.appendChild(Z);
  const I = document.createElement("p");
  I.className = "library-muted library-filter-result-summary", I.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const q = document.createElement("a");
  q.href = "?", q.textContent = ` ${d("library", "Clear all filters")}`, I.appendChild(q), h.appendChild(I);
  const D = document.createElement("details");
  D.className = "library-batch-actions";
  const oe = document.createElement("summary");
  oe.textContent = `${d("library", "Batch actions for current results")} (${r.total ?? n.length} ${d("library", "Current filter result")})`;
  const be = document.createElement("form");
  be.method = "post", be.action = o, be.className = "library-batch-tag-form";
  const Ee = mr(e);
  Ee && be.appendChild(Ee);
  for (const [W, Y] of Object.entries(e.activeFilters || {})) {
    if (Q(Y).trim() === "") continue;
    const ie = document.createElement("input");
    ie.type = "hidden", ie.name = W, ie.value = Q(Y), be.appendChild(ie);
  }
  const Le = document.createElement("label");
  Le.textContent = d("library", "Apply Nextcloud tag to current results");
  const ye = document.createElement("input");
  ye.type = "text", ye.name = "nextcloudTagName", ye.placeholder = "batch-review", Le.appendChild(ye);
  const Ae = document.createElement("button");
  Ae.type = "submit", Ae.className = "button secondary", Ae.textContent = d("library", "Apply tag to filtered results");
  const Xe = document.createElement("p");
  Xe.className = "library-muted", Xe.textContent = d("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), be.append(Le, Ae, Xe);
  const $e = document.createElement("form");
  $e.method = "post", $e.action = l, $e.className = "library-batch-metadata-reset-form";
  const We = mr(e);
  We && $e.appendChild(We);
  for (const [W, Y] of Object.entries(e.activeFilters || {})) {
    if (Q(Y).trim() === "") continue;
    const ie = document.createElement("input");
    ie.type = "hidden", ie.name = W, ie.value = Q(Y), $e.appendChild(ie);
  }
  const lt = document.createElement("input");
  lt.type = "hidden", lt.name = "scannerConflicts", lt.value = "1";
  const Me = document.createElement("button");
  Me.type = "submit", Me.className = "button secondary", Me.textContent = d("library", "Reset filtered metadata");
  const ve = document.createElement("p");
  ve.className = "library-muted", ve.textContent = d("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), $e.append(lt, Me, ve);
  const ne = document.createElement("form");
  ne.method = "post", ne.action = c, ne.className = "library-batch-cover-refresh-form";
  const re = mr(e);
  re && ne.appendChild(re);
  for (const [W, Y] of Object.entries(e.activeFilters || {})) {
    if (Q(Y).trim() === "") continue;
    const ie = document.createElement("input");
    ie.type = "hidden", ie.name = W, ie.value = Q(Y), ne.appendChild(ie);
  }
  const Ce = document.createElement("button");
  Ce.type = "submit", Ce.className = "button secondary", Ce.textContent = d("library", "Request fresh cover previews");
  const at = document.createElement("p");
  at.className = "library-muted", at.textContent = d("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), ne.append(Ce, at), D.append(oe, be, $e, ne), h.appendChild(D);
  const De = document.createElement("nav");
  De.className = "library-pagination", De.setAttribute("aria-label", d("library", "Catalogue pagination"));
  const Ne = document.createElement("span");
  Ne.className = "library-pagination-range", Ne.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, De.appendChild(Ne), h.appendChild(De);
  const Ve = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], se = document.createElement("details");
  se.className = Ve.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const Pt = document.createElement("summary");
  Pt.className = "library-periodical-groups-summary", Pt.textContent = d("library", "Show top series and periodicals"), se.appendChild(Pt);
  const pt = document.createElement("h3");
  pt.textContent = Ve.length > 0 ? d("library", "Top series and periodicals") : d("library", "No series or periodicals found yet");
  const ze = document.createElement("p");
  if (ze.className = "library-muted", ze.textContent = Ve.length > 0 ? d("library", "Jump into recurring publications with one click.") : d("library", "Add publication or series names in item details to build this shortcut panel."), se.append(pt, ze), Ve.length > 0) {
    const W = document.createElement("ul");
    for (const Y of Ve) {
      const ie = document.createElement("li"), ke = document.createElement("a");
      ke.href = jp(Q(Y.publication)), ke.textContent = Q(Y.publication);
      const u = document.createElement("span");
      u.className = "library-muted", u.textContent = `${Y.itemCount} items`, ie.append(ke, u), W.appendChild(ie);
    }
    se.appendChild(W);
  }
  if (h.appendChild(se), n.length === 0) {
    const W = document.createElement("div"), Y = Number(e.rootCount || 0), ie = Number(e.enabledRootCount || 0), ke = $p(e);
    W.className = "library-empty-content", (Y === 0 || ie === 0) && W.classList.add("library-first-run-guidance"), ke && Y > 0 && ie > 0 && W.classList.add("library-filter-empty-state"), W.setAttribute("role", "status");
    const u = document.createElement("h3"), p = document.createElement("p");
    p.className = "library-muted";
    const y = document.createElement("p");
    y.className = "library-empty-actions", Y === 0 ? (u.textContent = d("library", "Start with one Library root"), p.textContent = d("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Dn(y, s, "button primary", d("library", "Add a Library root")), zp(y, d("library", "Run a scan after saving a root"))) : ie === 0 ? (u.textContent = d("library", "No enabled Library roots"), p.textContent = d("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Dn(y, s, "button primary", d("library", "Open Library settings"))) : ke ? (u.textContent = d("library", "No matches for the current filters"), p.textContent = d("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Dn(y, Vp(), "button secondary", d("library", "Clear search")), Dn(y, "?", "button primary", d("library", "Clear all filters"))) : (u.textContent = d("library", "No catalogue items yet"), p.textContent = d("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Dn(y, s, "button primary", d("library", "Run a scan from settings"))), W.append(u, p, y), h.appendChild(W);
  } else {
    const W = document.createElement("div");
    W.className = "library-cover-gallery";
    for (const Y of n) {
      const ie = document.createElement("article");
      ie.className = "library-cover-card";
      const ke = document.createElement("a");
      ke.className = "library-cover-link", ke.href = Q(Y.openUrl || "#"), ke.setAttribute("aria-label", `Read ${Q(Y.title || "publication")}`);
      const u = document.createElement("img");
      u.className = "library-cover-image", u.src = Q(Y.coverUrl || ""), u.alt = `Cover for ${Q(Y.title || "publication")}`, u.loading = "lazy", ke.appendChild(u);
      const p = mr(e), y = document.createElement("form");
      y.method = "post", y.action = Q(Y.starUrl || ""), y.className = "library-cover-star-form", p && y.appendChild(p);
      const C = document.createElement("input");
      C.type = "hidden", C.name = "returnTo", C.value = "catalogue";
      const S = document.createElement("input");
      S.type = "hidden", S.name = "starred", S.value = Y.starred ? "0" : "1";
      const x = document.createElement("button");
      x.type = "submit", x.className = Y.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", x.setAttribute("aria-pressed", Y.starred ? "true" : "false"), x.setAttribute("aria-label", Y.starred ? d("library", "Unstar this publication") : d("library", "Star this publication")), x.title = Y.starred ? d("library", "Unstar this publication") : d("library", "Star this publication"), x.textContent = Y.starred ? "★" : "☆", y.append(C, S, x);
      const R = document.createElement("div");
      R.className = "library-cover-summary";
      const N = document.createElement("h3");
      if (N.textContent = Q(Y.title || "Untitled publication"), R.appendChild(N), Y.creators) {
        const J = document.createElement("p");
        J.className = "library-creator", J.textContent = Q(Y.creators), R.appendChild(J);
      }
      const O = document.createElement("dl");
      O.className = "library-cover-detail-list";
      const b = [
        ["Type", Q(Y.publicationType || "other")],
        ["Format", Y.extension ? Sl(Y.extension) : ""],
        ["Shelf", Y.shelf ? Q(Y.shelf) : ""]
      ].filter(([, J]) => J !== "");
      for (const [J, te] of b) {
        const pe = document.createElement("div");
        pe.className = "library-cover-detail-chip";
        const Te = document.createElement("dt");
        Te.textContent = J;
        const Fe = document.createElement("dd");
        Fe.textContent = te, pe.append(Te, Fe), O.appendChild(pe);
      }
      R.appendChild(O);
      const T = document.createElement("p"), f = document.createElement("a");
      f.href = Q(Y.openUrl || "#"), f.textContent = d("library", "Read");
      const M = document.createElement("a");
      M.href = Q(Y.filesUrl || "#"), M.textContent = d("library", "Show in Files");
      const $ = document.createElement("a");
      $.href = Q(Y.downloadUrl || "#"), $.textContent = d("library", "Download source");
      const B = document.createElement("a");
      B.href = Q(Y.detailsUrl || "#"), B.textContent = d("library", "Details"), T.append(f, document.createTextNode(" · "), M, document.createTextNode(" · "), $, document.createTextNode(" · "), B), R.appendChild(T), ie.append(ke, y, R), W.appendChild(ie);
    }
    h.appendChild(W);
  }
  return _.appendChild(h), _;
}
if (_r)
  try {
    lu(Up, { state: lo }).mount(_r);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), _r.replaceChildren(qp(lo));
  }
//# sourceMappingURL=library-main.mjs.map
