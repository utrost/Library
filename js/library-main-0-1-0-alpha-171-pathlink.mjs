// @__NO_SIDE_EFFECTS__
function nu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ve = {}, $a = [], _n = () => {
}, Hf = () => !1, sl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ol = (e) => e.startsWith("onUpdate:"), _t = Object.assign, iu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ag = Object.prototype.hasOwnProperty, Xe = (e, t) => ag.call(e, t), Se = Array.isArray, xi = (e) => fs(e) === "[object Map]", fa = (e) => fs(e) === "[object Set]", Xu = (e) => fs(e) === "[object Date]", Le = (e) => typeof e == "function", rt = (e) => typeof e == "string", Ln = (e) => typeof e == "symbol", Ze = (e) => e !== null && typeof e == "object", Vf = (e) => (Ze(e) || Le(e)) && Le(e.then) && Le(e.catch), Gf = Object.prototype.toString, fs = (e) => Gf.call(e), rg = (e) => fs(e).slice(8, -1), Kf = (e) => fs(e) === "[object Object]", au = (e) => rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Rr = /* @__PURE__ */ nu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ll = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, sg = /-\w/g, Ft = ll(
  (e) => e.replace(sg, (t) => t.slice(1).toUpperCase())
), og = /\B([A-Z])/g, fi = ll(
  (e) => e.replace(og, "-$1").toLowerCase()
), cl = ll((e) => e.charAt(0).toUpperCase() + e.slice(1)), zl = ll(
  (e) => e ? `on${cl(e)}` : ""
), Ot = (e, t) => !Object.is(e, t), Qs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Wf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, ul = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, lg = (e) => {
  const t = rt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Zu;
const dl = () => Zu || (Zu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ln(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = rt(i) ? fg(i) : ln(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (rt(e) || Ze(e))
    return e;
}
const cg = /;(?![^(]*\))/g, ug = /:([^]+)/, dg = /\/\*[^]*?\*\//g;
function fg(e) {
  const t = {};
  return e.replace(dg, "").split(cg).forEach((n) => {
    if (n) {
      const i = n.split(ug);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ee(e) {
  let t = "";
  if (rt(e))
    t = e;
  else if (Se(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ee(e[n]);
      i && (t += i + " ");
    }
  else if (Ze(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ao(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !rt(t) && (e.class = Ee(t)), n && (e.style = ln(n)), e;
}
const hg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pg = /* @__PURE__ */ nu(hg);
function qf(e) {
  return !!e || e === "";
}
function vg(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Ii(e[i], t[i]);
  return n;
}
function Ju(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && Ii(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Ii(e, t) {
  if (e === t) return !0;
  let n = Xu(e), i = Xu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Ln(e), i = Ln(t), n || i)
    return e === t;
  if (n = Se(e), i = Se(t), n || i)
    return n && i ? vg(e, t) : !1;
  if (n = Ze(e), i = Ze(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = xi(e), i = xi(t), n || i || (n = fa(e), i = fa(t), n || i))
      return n && i ? Ju(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !Ii(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function gg(e, t) {
  return e.findIndex((n) => Ii(n, t));
}
const Yf = (e) => !!(e && e.__v_isRef === !0), g = (e) => rt(e) ? e : e == null ? "" : Se(e) || Ze(e) && (e.toString === Gf || !Le(e.toString)) ? Yf(e) ? g(e.value) : JSON.stringify(e, Xf, 2) : String(e), Xf = (e, t) => Yf(t) ? Xf(e, t.value) : xi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[Ul(i, r) + " =>"] = a, n),
    {}
  )
} : fa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ul(n))
} : Ln(t) ? Ul(t) : Ze(t) && !Se(t) && !Kf(t) ? String(t) : t, Ul = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ln(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function mg(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let kt;
class bg {
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
function yg() {
  return kt;
}
let at;
const Bl = /* @__PURE__ */ new WeakSet();
class Zf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kt && (kt.active ? kt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Bl.has(this) && (Bl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Qf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Qu(this), eh(this);
    const t = at, n = xn;
    at = this, xn = !0;
    try {
      return this.fn();
    } finally {
      th(this), at = t, xn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ou(t);
      this.deps = this.depsTail = void 0, Qu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Bl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Cc(this) && this.run();
  }
  get dirty() {
    return Cc(this);
  }
}
let Jf = 0, Ir, Pr;
function Qf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pr, Pr = e;
    return;
  }
  e.next = Ir, Ir = e;
}
function ru() {
  Jf++;
}
function su() {
  if (--Jf > 0)
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
function eh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function th(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), ou(i), _g(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Cc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (nh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function nh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qr) || (e.globalVersion = qr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Cc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = at, i = xn;
  at = e, xn = !0;
  try {
    eh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Ot(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    at = n, xn = i, th(e), e.flags &= -3;
  }
}
function ou(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ou(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function _g(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let xn = !0;
const ih = [];
function li() {
  ih.push(xn), xn = !1;
}
function ci() {
  const e = ih.pop();
  xn = e === void 0 ? !0 : e;
}
function Qu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = at;
    at = void 0;
    try {
      t();
    } finally {
      at = n;
    }
  }
}
let qr = 0;
class wg {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class fl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!at || !xn || at === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== at)
      n = this.activeLink = new wg(at, this), at.deps ? (n.prevDep = at.depsTail, at.depsTail.nextDep = n, at.depsTail = n) : at.deps = at.depsTail = n, ah(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = at.depsTail, n.nextDep = void 0, at.depsTail.nextDep = n, at.depsTail = n, at.deps === n && (at.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, qr++, this.notify(t);
  }
  notify(t) {
    ru();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      su();
    }
  }
}
function ah(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        ah(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Tc = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ Symbol(
  ""
), Ec = /* @__PURE__ */ Symbol(
  ""
), Yr = /* @__PURE__ */ Symbol(
  ""
);
function $t(e, t, n) {
  if (xn && at) {
    let i = Tc.get(e);
    i || Tc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new fl()), a.map = i, a.key = n), a.track();
  }
}
function ti(e, t, n, i, a, r) {
  const s = Tc.get(e);
  if (!s) {
    qr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (ru(), t === "clear")
    s.forEach(o);
  else {
    const l = Se(e), f = l && au(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, S) => {
        (S === "length" || S === Yr || !Ln(S) && S >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), f && o(s.get(Yr)), t) {
        case "add":
          l ? f && o(s.get("length")) : (o(s.get(ca)), xi(e) && o(s.get(Ec)));
          break;
        case "delete":
          l || (o(s.get(ca)), xi(e) && o(s.get(Ec)));
          break;
        case "set":
          xi(e) && o(s.get(ca));
          break;
      }
  }
  su();
}
function ka(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : ($t(t, "iterate", Yr), /* @__PURE__ */ wn(e) ? t : t.map(Rn));
}
function hl(e) {
  return $t(e = /* @__PURE__ */ Ye(e), "iterate", Yr), e;
}
function Hn(e, t) {
  return /* @__PURE__ */ ui(e) ? Ha(/* @__PURE__ */ ua(e) ? Rn(t) : t) : Rn(t);
}
const Sg = {
  __proto__: null,
  [Symbol.iterator]() {
    return jl(this, Symbol.iterator, (e) => Hn(this, e));
  },
  concat(...e) {
    return ka(this).concat(
      ...e.map((t) => Se(t) ? ka(t) : t)
    );
  },
  entries() {
    return jl(this, "entries", (e) => (e[1] = Hn(this, e[1]), e));
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
      (n) => n.map((i) => Hn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return qn(
      this,
      "find",
      e,
      t,
      (n) => Hn(this, n),
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
      (n) => Hn(this, n),
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
    return Hl(this, "includes", e);
  },
  indexOf(...e) {
    return Hl(this, "indexOf", e);
  },
  join(e) {
    return ka(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Hl(this, "lastIndexOf", e);
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
    return ed(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ed(this, "reduceRight", e, t);
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
    return ka(this).toReversed();
  },
  toSorted(e) {
    return ka(this).toSorted(e);
  },
  toSpliced(...e) {
    return ka(this).toSpliced(...e);
  },
  unshift(...e) {
    return gr(this, "unshift", e);
  },
  values() {
    return jl(this, "values", (e) => Hn(this, e));
  }
};
function jl(e, t, n) {
  const i = hl(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ wn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Cg = Array.prototype;
function qn(e, t, n, i, a, r) {
  const s = hl(e), o = s !== e && !/* @__PURE__ */ wn(e), l = s[t];
  if (l !== Cg[t]) {
    const h = l.apply(e, r);
    return o ? Rn(h) : h;
  }
  let f = n;
  s !== e && (o ? f = function(h, S) {
    return n.call(this, Hn(e, h), S, e);
  } : n.length > 2 && (f = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const u = l.call(s, f, i);
  return o && a ? a(u) : u;
}
function ed(e, t, n, i) {
  const a = hl(e), r = a !== e && !/* @__PURE__ */ wn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(f, u, h) {
    return o && (o = !1, f = Hn(e, f)), n.call(this, f, Hn(e, u), h, e);
  }) : n.length > 3 && (s = function(f, u, h) {
    return n.call(this, f, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Hn(e, l) : l;
}
function Hl(e, t, n) {
  const i = /* @__PURE__ */ Ye(e);
  $t(i, "iterate", Yr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ uu(n[0]) ? (n[0] = /* @__PURE__ */ Ye(n[0]), i[t](...n)) : a;
}
function gr(e, t, n = []) {
  li(), ru();
  const i = (/* @__PURE__ */ Ye(e))[t].apply(e, n);
  return su(), ci(), i;
}
const Tg = /* @__PURE__ */ nu("__proto__,__v_isRef,__isVue"), rh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ln)
);
function Eg(e) {
  Ln(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return $t(t, "has", e), t.hasOwnProperty(e);
}
class sh {
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
      return i === (a ? r ? $g : uh : r ? ch : lh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = Se(t);
    if (!a) {
      let l;
      if (s && (l = Sg[n]))
        return l;
      if (n === "hasOwnProperty")
        return Eg;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ zt(t) ? t : i
    );
    if ((Ln(n) ? rh.has(n) : Tg(n)) || (a || $t(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ zt(o)) {
      const l = s && au(n) ? o : o.value;
      return a && Ze(l) ? /* @__PURE__ */ Xr(l) : l;
    }
    return Ze(o) ? a ? /* @__PURE__ */ Xr(o) : /* @__PURE__ */ Pt(o) : o;
  }
}
class oh extends sh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = Se(t) && au(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ ui(r);
      if (!/* @__PURE__ */ wn(i) && !/* @__PURE__ */ ui(i) && (r = /* @__PURE__ */ Ye(r), i = /* @__PURE__ */ Ye(i)), !s && /* @__PURE__ */ zt(r) && !/* @__PURE__ */ zt(i))
        return f || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Xe(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ zt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && l && (o ? Ot(i, r) && ti(t, "set", n, i) : ti(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Xe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ti(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Ln(n) || !rh.has(n)) && $t(t, "has", n), i;
  }
  ownKeys(t) {
    return $t(
      t,
      "iterate",
      Se(t) ? "length" : ca
    ), Reflect.ownKeys(t);
  }
}
class Ag extends sh {
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
const kg = /* @__PURE__ */ new oh(), Og = /* @__PURE__ */ new Ag(), xg = /* @__PURE__ */ new oh(!0);
const Ac = (e) => e, zs = (e) => Reflect.getPrototypeOf(e);
function Ng(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), s = xi(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, f = a[e](...i), u = n ? Ac : t ? Ha : Rn;
    return !t && $t(
      r,
      "iterate",
      l ? Ec : ca
    ), _t(
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
function Us(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Lg(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ye(r), o = /* @__PURE__ */ Ye(a);
      e || (Ot(a, o) && $t(s, "get", a), $t(s, "get", o));
      const { has: l } = zs(s), f = t ? Ac : e ? Ha : Rn;
      if (l.call(s, a))
        return f(r.get(a));
      if (l.call(s, o))
        return f(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && $t(/* @__PURE__ */ Ye(a), "iterate", ca), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ye(r), o = /* @__PURE__ */ Ye(a);
      return e || (Ot(a, o) && $t(s, "has", a), $t(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ Ye(o), f = t ? Ac : e ? Ha : Rn;
      return !e && $t(l, "iterate", ca), o.forEach((u, h) => a.call(r, f(u), f(h), s));
    }
  };
  return _t(
    n,
    e ? {
      add: Us("add"),
      set: Us("set"),
      delete: Us("delete"),
      clear: Us("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), s = zs(r), o = /* @__PURE__ */ Ye(a), l = !t && !/* @__PURE__ */ wn(a) && !/* @__PURE__ */ ui(a) ? o : a;
        return s.has.call(r, l) || Ot(a, l) && s.has.call(r, a) || Ot(o, l) && s.has.call(r, o) || (r.add(l), ti(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ wn(r) && !/* @__PURE__ */ ui(r) && (r = /* @__PURE__ */ Ye(r));
        const s = /* @__PURE__ */ Ye(this), { has: o, get: l } = zs(s);
        let f = o.call(s, a);
        f || (a = /* @__PURE__ */ Ye(a), f = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), f ? Ot(r, u) && ti(s, "set", a, r) : ti(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: s, get: o } = zs(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ Ye(a), l = s.call(r, a)), o && o.call(r, a);
        const f = r.delete(a);
        return l && ti(r, "delete", a, void 0), f;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, s = a.clear();
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
    n[a] = Ng(a, e, t);
  }), n;
}
function lu(e, t) {
  const n = Lg(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Xe(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Rg = {
  get: /* @__PURE__ */ lu(!1, !1)
}, Ig = {
  get: /* @__PURE__ */ lu(!1, !0)
}, Pg = {
  get: /* @__PURE__ */ lu(!0, !1)
};
const lh = /* @__PURE__ */ new WeakMap(), ch = /* @__PURE__ */ new WeakMap(), uh = /* @__PURE__ */ new WeakMap(), $g = /* @__PURE__ */ new WeakMap();
function Dg(e) {
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
  return /* @__PURE__ */ ui(e) ? e : cu(
    e,
    !1,
    kg,
    Rg,
    lh
  );
}
// @__NO_SIDE_EFFECTS__
function Mg(e) {
  return cu(
    e,
    !1,
    xg,
    Ig,
    ch
  );
}
// @__NO_SIDE_EFFECTS__
function Xr(e) {
  return cu(
    e,
    !0,
    Og,
    Pg,
    uh
  );
}
function cu(e, t, n, i, a) {
  if (!Ze(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Dg(rg(e));
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
  return /* @__PURE__ */ ui(e) ? /* @__PURE__ */ ua(e.__v_raw) : !!(e && e.__v_isReactive);
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
function uu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ye(t) : e;
}
function Fg(e) {
  return !Xe(e, "__v_skip") && Object.isExtensible(e) && Wf(e, "__v_skip", !0), e;
}
const Rn = (e) => Ze(e) ? /* @__PURE__ */ Pt(e) : e, Ha = (e) => Ze(e) ? /* @__PURE__ */ Xr(e) : e;
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return fh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function dh(e) {
  return fh(e, !0);
}
function fh(e, t) {
  return /* @__PURE__ */ zt(e) ? e : new zg(e, t);
}
class zg {
  constructor(t, n) {
    this.dep = new fl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ye(t), this._value = n ? t : Rn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ wn(t) || /* @__PURE__ */ ui(t);
    t = i ? t : /* @__PURE__ */ Ye(t), Ot(t, n) && (this._rawValue = t, this._value = i ? t : Rn(t), this.dep.trigger());
  }
}
function b(e) {
  return /* @__PURE__ */ zt(e) ? e.value : e;
}
function ri(e) {
  return Le(e) ? e() : b(e);
}
const Ug = {
  get: (e, t, n) => t === "__v_raw" ? e : b(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ zt(a) && !/* @__PURE__ */ zt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function hh(e) {
  return /* @__PURE__ */ ua(e) ? e : new Proxy(e, Ug);
}
class Bg {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new fl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function jg(e) {
  return new Bg(e);
}
class Hg {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new fl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    at !== this)
      return Qf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return nh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Vg(e, t, n = !1) {
  let i, a;
  return Le(e) ? i = e : (i = e.get, a = e.set), new Hg(i, a, n);
}
const Bs = {}, ro = /* @__PURE__ */ new WeakMap();
let ea;
function Gg(e, t = !1, n = ea) {
  if (n) {
    let i = ro.get(n);
    i || ro.set(n, i = []), i.push(e);
  }
}
function Kg(e, t, n = Ve) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, f = (I) => a ? I : /* @__PURE__ */ wn(I) || a === !1 || a === 0 ? ni(I, 1) : ni(I);
  let u, h, S, E, x = !1, A = !1;
  if (/* @__PURE__ */ zt(e) ? (h = () => e.value, x = /* @__PURE__ */ wn(e)) : /* @__PURE__ */ ua(e) ? (h = () => f(e), x = !0) : Se(e) ? (A = !0, x = e.some((I) => /* @__PURE__ */ ua(I) || /* @__PURE__ */ wn(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ zt(I))
      return I.value;
    if (/* @__PURE__ */ ua(I))
      return f(I);
    if (Le(I))
      return l ? l(I, 2) : I();
  })) : Le(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (S) {
      li();
      try {
        S();
      } finally {
        ci();
      }
    }
    const I = ea;
    ea = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      ea = I;
    }
  } : h = _n, t && a) {
    const I = h, P = a === !0 ? 1 / 0 : a;
    h = () => ni(I(), P);
  }
  const O = yg(), D = () => {
    u.stop(), O && O.active && iu(O.effects, u);
  };
  if (r && t) {
    const I = t;
    t = (...P) => {
      const ce = I(...P);
      return D(), ce;
    };
  }
  let M = A ? new Array(e.length).fill(Bs) : Bs;
  const W = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const P = u.run();
        if (I || a || x || (A ? P.some((ce, Q) => Ot(ce, M[Q])) : Ot(P, M))) {
          S && S();
          const ce = ea;
          ea = u;
          try {
            const Q = [
              P,
              // pass undefined as the old value when it's changed for the first time
              M === Bs ? void 0 : A && M[0] === Bs ? [] : M,
              E
            ];
            M = P, l ? l(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            ea = ce;
          }
        }
      } else
        u.run();
  };
  return o && o(W), u = new Zf(h), u.scheduler = s ? () => s(W, !1) : W, E = (I) => Gg(I, !1, u), S = u.onStop = () => {
    const I = ro.get(u);
    if (I) {
      if (l)
        l(I, 4);
      else
        for (const P of I) P();
      ro.delete(u);
    }
  }, t ? i ? W(!0) : M = u.run() : s ? s(W.bind(null, !0), !0) : u.run(), D.pause = u.pause.bind(u), D.resume = u.resume.bind(u), D.stop = D, D;
}
function ni(e, t = 1 / 0, n) {
  if (t <= 0 || !Ze(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ zt(e))
    ni(e.value, t, n);
  else if (Se(e))
    for (let i = 0; i < e.length; i++)
      ni(e[i], t, n);
  else if (fa(e) || xi(e))
    e.forEach((i) => {
      ni(i, t, n);
    });
  else if (Kf(e)) {
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
    pl(a, t, n);
  }
}
function Sn(e, t, n, i) {
  if (Le(e)) {
    const a = hs(e, t, n, i);
    return a && Vf(a) && a.catch((r) => {
      pl(r, t, n);
    }), a;
  }
  if (Se(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Sn(e[r], t, n, i));
    return a;
  }
}
function pl(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ve;
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
      li(), hs(r, null, 10, [
        e,
        l,
        f
      ]), ci();
      return;
    }
  }
  Wg(e, n, a, i, s);
}
function Wg(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Vt = [];
let zn = -1;
const Da = [];
let ki = null, Ra = 0;
const ph = /* @__PURE__ */ Promise.resolve();
let so = null;
function rn(e) {
  const t = so || ph;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function qg(e) {
  let t = zn + 1, n = Vt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Vt[i], r = Zr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function du(e) {
  if (!(e.flags & 1)) {
    const t = Zr(e), n = Vt[Vt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Zr(n) ? Vt.push(e) : Vt.splice(qg(t), 0, e), e.flags |= 1, vh();
  }
}
function vh() {
  so || (so = ph.then(bh));
}
function gh(e) {
  if (!Se(e))
    ki && e.id === -1 ? ki.splice(Ra + 1, 0, e) : e.flags & 1 || (Da.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Da.push(e[t]);
  vh();
}
function td(e, t, n = zn + 1) {
  for (; n < Vt.length; n++) {
    const i = Vt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Vt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function mh(e) {
  if (Da.length) {
    const t = [...new Set(Da)].sort(
      (n, i) => Zr(n) - Zr(i)
    );
    if (Da.length = 0, ki) {
      for (let n = 0; n < t.length; n++)
        ki.push(t[n]);
      return;
    }
    for (ki = t, Ra = 0; Ra < ki.length; Ra++) {
      const n = ki[Ra];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ki = null, Ra = 0;
  }
}
const Zr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function bh(e) {
  try {
    for (zn = 0; zn < Vt.length; zn++) {
      const t = Vt[zn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), hs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; zn < Vt.length; zn++) {
      const t = Vt[zn];
      t && (t.flags &= -2);
    }
    zn = -1, Vt.length = 0, mh(), so = null, (Vt.length || Da.length) && bh();
  }
}
let Nt = null, vl = null;
function oo(e) {
  const t = Nt;
  return Nt = e, vl = e && e.type.__scopeId || null, t;
}
function Yg(e) {
  vl = e;
}
function Xg() {
  vl = null;
}
const Zg = (e) => Oe;
function Oe(e, t = Nt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && ho(-1);
    const r = oo(t), s = si.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = si.length; l > s; l--) bu();
      oo(r), i._d && ho(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function qe(e, t) {
  if (Nt === null)
    return e;
  const n = wl(Nt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = Ve] = t[a];
    r && (Le(r) && (r = {
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
function qi(e, t, n, i) {
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
  if (Mt) {
    let n = Mt.provides;
    const i = Mt.parent && Mt.parent.provides;
    i === n && (n = Mt.provides = Object.create(i)), n[e] = t;
  }
}
function Dt(e, t, n = !1) {
  const i = pa();
  if (i || Fa) {
    let a = Fa ? Fa._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Le(t) ? t.call(i && i.proxy) : t;
  }
}
const Jg = /* @__PURE__ */ Symbol.for("v-scx"), Qg = () => Dt(Jg);
function em(e, t) {
  return gl(e, null, t);
}
function tm(e, t) {
  return gl(
    e,
    null,
    { flush: "sync" }
  );
}
function tt(e, t, n) {
  return gl(e, t, n);
}
function gl(e, t, n = Ve) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = _t({}, n), l = t && i || !t && r !== "post";
  let f;
  if (is) {
    if (r === "sync") {
      const E = Qg();
      f = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = _n, E.resume = _n, E.pause = _n, E;
    }
  }
  const u = Mt;
  o.call = (E, x, A) => Sn(E, u, x, A);
  let h = !1;
  r === "post" ? o.scheduler = (E) => {
    Ht(E, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (E, x) => {
    x ? E() : du(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const S = Kg(e, t, o);
  return is && (f ? f.push(S) : l && S()), S;
}
function nm(e, t, n) {
  const i = this.proxy, a = rt(e) ? e.includes(".") ? yh(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Le(t) ? r = t : (r = t.handler, n = t);
  const s = gs(this), o = gl(a, r.bind(i), n);
  return s(), o;
}
function yh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Ti = /* @__PURE__ */ new WeakMap(), _h = /* @__PURE__ */ Symbol("_vte"), ml = (e) => e.__isTeleport, na = (e) => e && (e.disabled || e.disabled === ""), im = (e) => e && (e.defer || e.defer === ""), nd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, id = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, kc = (e, t) => {
  const n = e && e.to;
  return rt(n) ? t ? t(n) : null : n;
}, am = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, f) {
    const {
      mc: u,
      pc: h,
      pbc: S,
      o: { insert: E, querySelector: x, createText: A, createComment: O, parentNode: D }
    } = f, M = na(t.props);
    let { dynamicChildren: W } = t;
    const I = (Q, de, X) => {
      Q.shapeFlag & 16 && u(
        Q.children,
        de,
        X,
        a,
        r,
        s,
        o,
        l
      );
    }, P = (Q = t) => {
      const de = na(Q.props), X = Q.target = kc(Q.props, x), le = Oc(X, Q, A, E);
      X && (s !== "svg" && nd(X) ? s = "svg" : s !== "mathml" && id(X) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), de || (I(Q, X, le), Ar(Q, !1)));
    }, ce = (Q) => {
      const de = () => {
        if (Ti.get(Q) === de) {
          if (Ti.delete(Q), na(Q.props)) {
            const X = D(Q.el) || n;
            I(Q, X, Q.anchor), Ar(Q, !0);
          }
          P(Q);
        }
      };
      Ti.set(Q, de), Ht(de, r);
    };
    if (e == null) {
      const Q = t.el = A(""), de = t.anchor = A("");
      if (E(Q, n, i), E(de, n, i), im(t.props) || r && r.pendingBranch) {
        ce(t);
        return;
      }
      M && (I(t, n, de), Ar(t, !0)), P();
    } else {
      t.el = e.el;
      const Q = t.anchor = e.anchor, de = Ti.get(e);
      if (de) {
        de.flags |= 8, Ti.delete(e), ce(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, le = t.targetAnchor = e.targetAnchor, me = na(e.props), ee = me ? n : X, ie = me ? Q : le;
      if (s === "svg" || nd(X) ? s = "svg" : (s === "mathml" || id(X)) && (s = "mathml"), W ? (S(
        e.dynamicChildren,
        W,
        ee,
        a,
        r,
        s,
        o
      ), mu(e, t, !0)) : l || h(
        e,
        t,
        ee,
        ie,
        a,
        r,
        s,
        o,
        !1
      ), M)
        me ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : js(
          t,
          n,
          Q,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = kc(t.props, x);
        $ && (t.target = $, js(
          t,
          $,
          null,
          f,
          0
        ));
      } else me && js(
        t,
        X,
        le,
        f,
        1
      );
      Ar(t, M);
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
    } = e, E = na(S), x = r || !E, A = Ti.get(e);
    if (A && (A.flags |= 8, Ti.delete(e)), h && (a(f), a(u)), r && a(l), !A && (E || h) && s & 16)
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
  move: js,
  hydrate: rm
};
function js(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: f, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !Ti.has(e) && (!h || na(u)) && l & 16)
    for (let S = 0; S < f.length; S++)
      a(
        f[S],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function rm(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: f, createText: u }
}, h) {
  function S(O, D) {
    let M = D;
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
  const x = t.target = kc(
    t.props,
    l
  ), A = na(t.props);
  if (x) {
    const O = x._lpa || x.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), S(x, O), t.targetAnchor || Oc(
      x,
      t,
      u,
      f,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === x ? e : null
    )) : (t.anchor = s(e), S(x, O), t.targetAnchor || Oc(x, t, u, f), h(
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
const wh = am;
function Ar(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function Oc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[_h] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const bn = /* @__PURE__ */ Symbol("_leaveCb"), mr = /* @__PURE__ */ Symbol("_enterCb");
function sm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Di(() => {
    e.isMounted = !0;
  }), Va(() => {
    e.isUnmounting = !0;
  }), e;
}
const pn = [Function, Array], Sh = {
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
}, Ch = (e) => {
  const t = e.subTree;
  return t.component ? Ch(t.component) : t;
}, om = {
  name: "BaseTransition",
  props: Sh,
  setup(e, { slots: t }) {
    const n = pa(), i = sm();
    return () => {
      const a = t.default && Ah(t.default(), !0), r = a && a.length ? Th(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? j() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ Ye(e), { mode: o } = s;
      if (i.isLeaving)
        return Vl(r);
      const l = lo(r);
      if (!l)
        return Vl(r);
      let f = xc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      l.type !== xt && Jr(l, f);
      let u = n.subTree && lo(n.subTree);
      if (u && u.type !== xt && !ia(u, l) && Ch(n).type !== xt) {
        let h = xc(
          u,
          s,
          i,
          n
        );
        if (Jr(u, h), o === "out-in" && l.type !== xt)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Vl(r);
        o === "in-out" && l.type !== xt ? h.delayLeave = (S, E, x) => {
          const A = Eh(
            i,
            u
          );
          A[String(u.key)] = u, S[bn] = () => {
            E(), S[bn] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            x(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Th(e) {
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
const lm = om;
function Eh(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function xc(e, t, n, i, a) {
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
    onAfterAppear: M,
    onAppearCancelled: W
  } = t, I = String(e.key), P = Eh(n, e), ce = (X, le) => {
    X && Sn(
      X,
      i,
      9,
      le
    );
  }, Q = (X, le) => {
    const me = le[1];
    ce(X, le), Se(X) ? X.every((ee) => ee.length <= 1) && me() : X.length <= 1 && me();
  }, de = {
    mode: s,
    persisted: o,
    beforeEnter(X) {
      let le = l;
      if (!n.isMounted)
        if (r)
          le = O || l;
        else
          return;
      X[bn] && X[bn](
        !0
        /* cancelled */
      );
      const me = P[I];
      me && ia(e, me) && me.el[bn] && me.el[bn](), ce(le, [X]);
    },
    enter(X) {
      if (P[I] === e) return;
      let le = f, me = u, ee = h;
      if (!n.isMounted)
        if (r)
          le = D || f, me = M || u, ee = W || h;
        else
          return;
      let ie = !1;
      X[mr] = (F) => {
        ie || (ie = !0, F ? ce(ee, [X]) : ce(me, [X]), de.delayedLeave && de.delayedLeave(), X[mr] = void 0);
      };
      const $ = X[mr].bind(null, !1);
      le ? Q(le, [X, $]) : $();
    },
    leave(X, le) {
      const me = String(e.key);
      if (X[mr] && X[mr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return le();
      ce(S, [X]);
      let ee = !1;
      X[bn] = ($) => {
        ee || (ee = !0, le(), $ ? ce(A, [X]) : ce(x, [X]), X[bn] = void 0, P[me] === e && delete P[me]);
      };
      const ie = X[bn].bind(null, !1);
      P[me] = e, E ? Q(E, [X, ie]) : ie();
    },
    clone(X) {
      const le = xc(
        X,
        t,
        n,
        i,
        a
      );
      return a && a(le), le;
    }
  };
  return de;
}
function Vl(e) {
  if (bl(e))
    return e = Pi(e), e.children = null, e;
}
function lo(e) {
  if (!bl(e))
    return ml(e.type) && e.children ? Th(e.children) : e;
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
function Jr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Jr(
      ml(n.type) && lo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ah(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === ue ? (s.patchFlag & 128 && a++, i = i.concat(
      Ah(s.children, t, o)
    )) : (t || s.type !== xt) && i.push(o != null ? Pi(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Lt(e, t) {
  return Le(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    _t({ name: e.name }, t, { setup: e })
  ) : e;
}
function kh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function cm(e) {
  const t = pa(), n = /* @__PURE__ */ dh(null);
  if (t) {
    const a = t.refs === Ve ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function ad(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const co = /* @__PURE__ */ new WeakMap();
function $r(e, t, n, i, a = !1) {
  if (Se(e)) {
    e.forEach(
      (A, O) => $r(
        A,
        t && (Se(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ma(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && $r(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? wl(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, f = t && t.r, u = o.refs === Ve ? o.refs = {} : o.refs, h = o.setupState, S = /* @__PURE__ */ Ye(h), E = h === Ve ? Hf : (A) => ad(u, A) ? !1 : Xe(S, A), x = (A, O) => !(O && ad(u, O));
  if (f != null && f !== l) {
    if (rd(t), rt(f))
      u[f] = null, E(f) && (h[f] = null);
    else if (/* @__PURE__ */ zt(f)) {
      const A = t;
      x(f, A.k) && (f.value = null), A.k && (u[A.k] = null);
    }
  }
  if (Le(l))
    hs(l, o, 12, [s, u]);
  else {
    const A = rt(l), O = /* @__PURE__ */ zt(l);
    if (A || O) {
      const D = () => {
        if (e.f) {
          const M = A ? E(l) ? h[l] : u[l] : x() || !e.k ? l.value : u[e.k];
          if (a)
            Se(M) && iu(M, r);
          else if (Se(M))
            M.includes(r) || M.push(r);
          else if (A)
            u[l] = [r], E(l) && (h[l] = u[l]);
          else {
            const W = [r];
            x(l, e.k) && (l.value = W), e.k && (u[e.k] = W);
          }
        } else A ? (u[l] = s, E(l) && (h[l] = s)) : O && (x(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const M = () => {
          D(), co.delete(e);
        };
        M.id = -1, co.set(e, M), Ht(M, n);
      } else
        rd(e), D();
    }
  }
}
function rd(e) {
  const t = co.get(e);
  t && (t.flags |= 8, co.delete(e));
}
dl().requestIdleCallback;
dl().cancelIdleCallback;
const Ma = (e) => !!e.type.__asyncLoader, bl = (e) => e.type.__isKeepAlive;
function um(e, t) {
  Oh(e, "a", t);
}
function dm(e, t) {
  Oh(e, "da", t);
}
function Oh(e, t, n = Mt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (yl(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      bl(a.parent.vnode) && fm(i, t, n, a), a = a.parent;
  }
}
function fm(e, t, n, i) {
  const a = yl(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  ps(() => {
    iu(i[t], a);
  }, n);
}
function yl(e, t, n = Mt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      li();
      const o = gs(n), l = Sn(t, n, e, s);
      return o(), ci(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const hi = (e) => (t, n = Mt) => {
  (!is || e === "sp") && yl(e, (...i) => t(...i), n);
}, xh = hi("bm"), Di = hi("m"), Nh = hi(
  "bu"
), hm = hi("u"), Va = hi(
  "bum"
), ps = hi("um"), pm = hi(
  "sp"
), vm = hi("rtg"), gm = hi("rtc");
function mm(e, t = Mt) {
  yl("ec", e, t);
}
const fu = "components", bm = "directives";
function Be(e, t) {
  return pu(fu, e, !0, t) || e;
}
const Lh = /* @__PURE__ */ Symbol.for("v-ndc");
function hu(e) {
  return rt(e) ? pu(fu, e, !1) || e : e || Lh;
}
function sd(e) {
  return pu(bm, e);
}
function pu(e, t, n = !0, i = !1) {
  const a = Nt || Mt;
  if (a) {
    const r = a.type;
    if (e === fu) {
      const o = eb(
        r,
        !1
      );
      if (o && (o === t || o === Ft(t) || o === cl(Ft(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      od(a[e] || r[e], t) || // global registration
      od(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function od(e, t) {
  return e && (e[t] || e[Ft(t)] || e[cl(Ft(t))]);
}
function Fe(e, t, n, i) {
  let a;
  const r = n, s = Se(e);
  if (s || rt(e)) {
    const o = s && /* @__PURE__ */ ua(e);
    let l = !1, f = !1;
    o && (l = !/* @__PURE__ */ wn(e), f = /* @__PURE__ */ ui(e), e = hl(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? f ? Ha(Rn(e[u])) : Rn(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (Ze(e))
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
function Pe(e, t, n, i, a, r) {
  if (n == null && (n = {}), Nt.ce || Nt.parent && Ma(Nt.parent) && Nt.parent.ce) {
    const f = n, u = Object.keys(f).length > 0;
    return t !== "default" && (f.name = t), _(), ze(
      ue,
      null,
      [_e("slot", f, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = si.length;
  _();
  let l;
  try {
    const f = s && Rh(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    f && f.key;
    l = ze(
      ue,
      {
        key: (u && !Ln(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!f && i ? "_fb" : "")
      },
      f || (i ? i() : []),
      f && e._ === 1 ? 64 : -2
    );
  } catch (f) {
    for (let u = si.length; u > o; u--) bu();
    throw f;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Rh(e) {
  return e.some((t) => es(t) ? !(t.type === xt || t.type === ue && !Rh(t.children)) : !0) ? e : null;
}
const Nc = (e) => e ? ep(e) ? wl(e) : Nc(e.parent) : null, Dr = (
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
    $parent: (e) => Nc(e.parent),
    $root: (e) => Nc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $h(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      du(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = rn.bind(e.proxy)),
    $watch: (e) => nm.bind(e)
  })
), Gl = (e, t) => e !== Ve && !e.__isScriptSetup && Xe(e, t), ym = {
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
        if (Gl(i, t))
          return s[t] = 1, i[t];
        if (a !== Ve && Xe(a, t))
          return s[t] = 2, a[t];
        if (Xe(r, t))
          return s[t] = 3, r[t];
        if (n !== Ve && Xe(n, t))
          return s[t] = 4, n[t];
        Lc && (s[t] = 0);
      }
    }
    const f = Dr[t];
    let u, h;
    if (f)
      return t === "$attrs" && $t(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ve && Xe(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Xe(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return Gl(a, t) ? (a[t] = n, !0) : i !== Ve && Xe(i, t) ? (i[t] = n, !0) : Xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Ve && o[0] !== "$" && Xe(e, o) || Gl(t, o) || Xe(r, o) || Xe(i, o) || Xe(Dr, o) || Xe(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function _m() {
  return Ih().slots;
}
function wm() {
  return Ih().attrs;
}
function Ih(e) {
  const t = pa();
  return t.setupContext || (t.setupContext = np(t));
}
function uo(e) {
  return Se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Sm(e, t) {
  return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : _t({}, uo(e), uo(t));
}
let Lc = !0;
function Cm(e) {
  const t = $h(e), n = e.proxy, i = e.ctx;
  Lc = !1, t.beforeCreate && ld(t.beforeCreate, e, "bc");
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
    beforeUnmount: M,
    destroyed: W,
    unmounted: I,
    render: P,
    renderTracked: ce,
    renderTriggered: Q,
    errorCaptured: de,
    serverPrefetch: X,
    // public API
    expose: le,
    inheritAttrs: me,
    // assets
    components: ee,
    directives: ie,
    filters: $
  } = t;
  if (f && Tm(f, i, null), s)
    for (const oe in s) {
      const ne = s[oe];
      Le(ne) && (i[oe] = ne.bind(n));
    }
  if (a) {
    const oe = a.call(n, n);
    Ze(oe) && (e.data = /* @__PURE__ */ Pt(oe));
  }
  if (Lc = !0, r)
    for (const oe in r) {
      const ne = r[oe], he = Le(ne) ? ne.bind(n, n) : Le(ne.get) ? ne.get.bind(n, n) : _n, pe = !Le(ne) && Le(ne.set) ? ne.set.bind(n) : _n, we = G({
        get: he,
        set: pe
      });
      Object.defineProperty(i, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (be) => we.value = be
      });
    }
  if (o)
    for (const oe in o)
      Ph(o[oe], i, n, oe);
  if (l) {
    const oe = Le(l) ? l.call(n) : l;
    Reflect.ownKeys(oe).forEach((ne) => {
      mn(ne, oe[ne]);
    });
  }
  u && ld(u, e, "c");
  function Z(oe, ne) {
    Se(ne) ? ne.forEach((he) => oe(he.bind(n))) : ne && oe(ne.bind(n));
  }
  if (Z(xh, h), Z(Di, S), Z(Nh, E), Z(hm, x), Z(um, A), Z(dm, O), Z(mm, de), Z(gm, ce), Z(vm, Q), Z(Va, M), Z(ps, I), Z(pm, X), Se(le))
    if (le.length) {
      const oe = e.exposed || (e.exposed = {});
      le.forEach((ne) => {
        Object.defineProperty(oe, ne, {
          get: () => n[ne],
          set: (he) => n[ne] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === _n && (e.render = P), me != null && (e.inheritAttrs = me), ee && (e.components = ee), ie && (e.directives = ie), X && kh(e);
}
function Tm(e, t, n = _n) {
  Se(e) && (e = Rc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Ze(a) ? "default" in a ? r = Dt(
      a.from || i,
      a.default,
      !0
    ) : r = Dt(a.from || i) : r = Dt(a), /* @__PURE__ */ zt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function ld(e, t, n) {
  Sn(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ph(e, t, n, i) {
  let a = i.includes(".") ? yh(n, i) : () => n[i];
  if (rt(e)) {
    const r = t[e];
    Le(r) && tt(a, r);
  } else if (Le(e))
    tt(a, e.bind(n));
  else if (Ze(e))
    if (Se(e))
      e.forEach((r) => Ph(r, t, n, i));
    else {
      const r = Le(e.handler) ? e.handler.bind(n) : t[e.handler];
      Le(r) && tt(a, r, e);
    }
}
function $h(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (f) => fo(l, f, s, !0)
  ), fo(l, t, s)), Ze(t) && r.set(t, l), l;
}
function fo(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && fo(e, r, n, !0), a && a.forEach(
    (s) => fo(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = Em[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const Em = {
  data: cd,
  props: ud,
  emits: ud,
  // objects
  methods: kr,
  computed: kr,
  // lifecycle
  beforeCreate: jt,
  created: jt,
  beforeMount: jt,
  mounted: jt,
  beforeUpdate: jt,
  updated: jt,
  beforeDestroy: jt,
  beforeUnmount: jt,
  destroyed: jt,
  unmounted: jt,
  activated: jt,
  deactivated: jt,
  errorCaptured: jt,
  serverPrefetch: jt,
  // assets
  components: kr,
  directives: kr,
  // watch
  watch: km,
  // provide / inject
  provide: cd,
  inject: Am
};
function cd(e, t) {
  return t ? e ? function() {
    return _t(
      Le(e) ? e.call(this, this) : e,
      Le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Am(e, t) {
  return kr(Rc(e), Rc(t));
}
function Rc(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function jt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function kr(e, t) {
  return e ? _t(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ud(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _t(
    /* @__PURE__ */ Object.create(null),
    uo(e),
    uo(t ?? {})
  ) : t;
}
function km(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = _t(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = jt(e[i], t[i]);
  return n;
}
function Dh() {
  return {
    app: null,
    config: {
      isNativeTag: Hf,
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
let Om = 0;
function xm(e, t) {
  return function(i, a = null) {
    Le(i) || (i = _t({}, i)), a != null && !Ze(a) && (a = null);
    const r = Dh(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const f = r.app = {
      _uid: Om++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: nb,
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
          return E.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(E, u, S), l = !0, f._container = u, u.__vue_app__ = f, wl(E.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (Sn(
          o,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, f;
      },
      runWithContext(u) {
        const h = Fa;
        Fa = f;
        try {
          return u();
        } finally {
          Fa = h;
        }
      }
    };
    return f;
  };
}
let Fa = null;
function Mh(e, t, n = Ve) {
  const i = pa(), a = Ft(t), r = fi(t), s = Fh(e, a), o = jg((l, f) => {
    let u, h = Ve, S;
    return tm(() => {
      const E = e[a];
      Ot(u, E) && (u = E, f());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const x = n.set ? n.set(E) : E;
        if (!Ot(x, u) && !(h !== Ve && Ot(E, h)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (u = E, f()), i.emit(`update:${t}`, x), Ot(E, h) && (Ot(E, x) && !Ot(x, S) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && h !== Ve && !Ot(x, u)) && f(), h = E, S = x;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || Ve : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const Fh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ft(t)}Modifiers`] || e[`${fi(t)}Modifiers`];
function Nm(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ve;
  let a = n;
  const r = t.startsWith("update:"), s = r && Fh(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => rt(u) ? u.trim() : u)), s.number && (a = a.map(ul)));
  let o, l = i[o = zl(t)] || // also try camelCase event handler (#2249)
  i[o = zl(Ft(t))];
  !l && r && (l = i[o = zl(fi(t))]), l && Sn(
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
    e.emitted[o] = !0, Sn(
      f,
      e,
      6,
      a
    );
  }
}
const Lm = /* @__PURE__ */ new WeakMap();
function zh(e, t, n = !1) {
  const i = n ? Lm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!Le(e)) {
    const l = (f) => {
      const u = zh(f, t, !0);
      u && (o = !0, _t(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Ze(e) && i.set(e, null), null) : (Se(r) ? r.forEach((l) => s[l] = null) : _t(s, r), Ze(e) && i.set(e, s), s);
}
function _l(e, t) {
  return !e || !sl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Xe(e, t[0].toLowerCase() + t.slice(1)) || Xe(e, fi(t)) || Xe(e, t));
}
function dd(e) {
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
  } = e, O = oo(e);
  let D, M;
  try {
    if (n.shapeFlag & 4) {
      const I = a || i, P = I;
      D = Vn(
        f.call(
          P,
          I,
          u,
          h,
          E,
          S,
          x
        )
      ), M = o;
    } else {
      const I = t;
      D = Vn(
        I.length > 1 ? I(
          h,
          { attrs: o, slots: s, emit: l }
        ) : I(
          h,
          null
        )
      ), M = t.props ? o : Rm(o);
    }
  } catch (I) {
    si.length = 0, pl(I, e, 1), D = _e(xt);
  }
  let W = D;
  if (M && A !== !1) {
    const I = Object.keys(M), { shapeFlag: P } = W;
    I.length && P & 7 && (r && I.some(ol) && (M = Im(
      M,
      r
    )), W = Pi(W, M, !1, !0));
  }
  if (n.dirs && (W = Pi(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = ml(W.type) && lo(W) || W;
    Jr(I, n.transition);
  }
  return D = W, oo(O), D;
}
const Rm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || sl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Im = (e, t) => {
  const n = {};
  for (const i in e)
    (!ol(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Pm(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? fd(i, s, f) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const S = u[h];
        if (Uh(s, i, S) && !_l(f, S))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? fd(i, s, f) : !0 : !!s;
  return !1;
}
function fd(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Uh(t, e, r) && !_l(n, r))
      return !0;
  }
  return !1;
}
function Uh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Ze(i) && Ze(a) ? !Ii(i, a) : i !== a;
}
function $m({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Bh = {}, jh = () => Object.create(Bh), Hh = (e) => Object.getPrototypeOf(e) === Bh;
function Dm(e, t, n, i = !1) {
  const a = {}, r = jh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Mg(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Mm(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ Ye(a), [l] = e.propsOptions;
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
        if (_l(e.emitsOptions, S))
          continue;
        const E = t[S];
        if (l)
          if (Xe(r, S))
            E !== r[S] && (r[S] = E, f = !0);
          else {
            const x = Ft(S);
            a[x] = Ic(
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
    Vh(e, t, a, r) && (f = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !Xe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = fi(h)) === h || !Xe(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = Ic(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !Xe(t, h)) && (delete r[h], f = !0);
  }
  f && ti(e.attrs, "set", "");
}
function Vh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Rr(l))
        continue;
      const f = t[l];
      let u;
      a && Xe(a, u = Ft(l)) ? !r || !r.includes(u) ? n[u] = f : (o || (o = {}))[u] = f : _l(e.emitsOptions, l) || (!(l in i) || f !== i[l]) && (i[l] = f, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Ye(n), f = o || Ve;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = Ic(
        a,
        l,
        h,
        f[h],
        e,
        !Xe(f, h)
      );
    }
  }
  return s;
}
function Ic(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Xe(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && Le(l)) {
        const { propsDefaults: f } = a;
        if (n in f)
          i = f[n];
        else {
          const u = gs(a);
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
    ] && (i === "" || i === fi(n)) && (i = !0));
  }
  return i;
}
const Fm = /* @__PURE__ */ new WeakMap();
function Gh(e, t, n = !1) {
  const i = n ? Fm : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!Le(e)) {
    const u = (h) => {
      l = !0;
      const [S, E] = Gh(h, t, !0);
      _t(s, S), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Ze(e) && i.set(e, $a), $a;
  if (Se(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ft(r[u]);
      hd(h) && (s[h] = Ve);
    }
  else if (r)
    for (const u in r) {
      const h = Ft(u);
      if (hd(h)) {
        const S = r[u], E = s[h] = Se(S) || Le(S) ? { type: S } : _t({}, S), x = E.type;
        let A = !1, O = !0;
        if (Se(x))
          for (let D = 0; D < x.length; ++D) {
            const M = x[D], W = Le(M) && M.name;
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
        ] = O, (A || Xe(E, "default")) && o.push(h);
      }
    }
  const f = [s, o];
  return Ze(e) && i.set(e, f), f;
}
function hd(e) {
  return e[0] !== "$" && !Rr(e);
}
const vu = (e) => e === "_" || e === "_ctx" || e === "$stable", gu = (e) => Se(e) ? e.map(Vn) : [Vn(e)], zm = (e, t, n) => {
  if (t._n)
    return t;
  const i = Oe((...a) => gu(t(...a)), n);
  return i._c = !1, i;
}, Kh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (vu(a)) continue;
    const r = e[a];
    if (Le(r))
      t[a] = zm(a, r, i);
    else if (r != null) {
      const s = gu(r);
      t[a] = () => s;
    }
  }
}, Wh = (e, t) => {
  const n = gu(t);
  e.slots.default = () => n;
}, qh = (e, t, n) => {
  for (const i in t)
    (n || !vu(i)) && (e[i] = t[i]);
}, Um = (e, t, n) => {
  const i = e.slots = jh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (qh(i, t, n), n && Wf(i, "_", a, !0)) : Kh(t, i);
  } else t && Wh(e, t);
}, Bm = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Ve;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : qh(a, t, n) : (r = !t.$stable, Kh(t, a)), s = t;
  } else t && (Wh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !vu(o) && s[o] == null && delete a[o];
}, Ht = Km;
function jm(e) {
  return Hm(e);
}
function Hm(e, t) {
  const n = dl();
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
    setScopeId: E = _n,
    insertStaticContent: x
  } = e, A = (m, T, k, L = null, N = null, U = null, q = void 0, H = null, J = !!T.dynamicChildren) => {
    if (m === T)
      return;
    m && !ia(m, T) && (L = ft(m), be(m, N, U, !0), m = null), T.patchFlag === -2 && (J = !1, T.dynamicChildren = null);
    const { type: V, ref: ve, shapeFlag: ae } = T;
    switch (V) {
      case vs:
        O(m, T, k, L);
        break;
      case xt:
        D(m, T, k, L);
        break;
      case eo:
        m == null && M(T, k, L, q);
        break;
      case ue:
        ee(
          m,
          T,
          k,
          L,
          N,
          U,
          q,
          H,
          J
        );
        break;
      default:
        ae & 1 ? P(
          m,
          T,
          k,
          L,
          N,
          U,
          q,
          H,
          J
        ) : ae & 6 ? ie(
          m,
          T,
          k,
          L,
          N,
          U,
          q,
          H,
          J
        ) : (ae & 64 || ae & 128) && V.process(
          m,
          T,
          k,
          L,
          N,
          U,
          q,
          H,
          J,
          Gt
        );
    }
    ve != null && N ? $r(ve, m && m.ref, U, T || m, !T) : ve == null && m && m.ref != null && $r(m.ref, null, U, m, !0);
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
  }, M = (m, T, k, L) => {
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
  }, P = (m, T, k, L, N, U, q, H, J) => {
    if (T.type === "svg" ? q = "svg" : T.type === "math" && (q = "mathml"), m == null)
      ce(
        T,
        k,
        L,
        N,
        U,
        q,
        H,
        J
      );
    else {
      const V = m.el && m.el._isVueCE ? m.el : null;
      try {
        V && V._beginPatch(), X(
          m,
          T,
          N,
          U,
          q,
          H,
          J
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, ce = (m, T, k, L, N, U, q, H) => {
    let J, V;
    const { props: ve, shapeFlag: ae, transition: ge, dirs: Ce } = m;
    if (J = m.el = s(
      m.type,
      U,
      ve && ve.is,
      ve
    ), ae & 8 ? u(J, m.children) : ae & 16 && de(
      m.children,
      J,
      null,
      L,
      N,
      Kl(m, U),
      q,
      H
    ), Ce && qi(m, null, L, "created"), Q(J, m, m.scopeId, q, L), ve) {
      for (const $e in ve)
        $e !== "value" && !Rr($e) && r(J, $e, null, ve[$e], U, L);
      "value" in ve && r(J, "value", null, ve.value, U), (V = ve.onVnodeBeforeMount) && Fn(V, L, m);
    }
    Ce && qi(m, null, L, "beforeMount");
    const Ne = Vm(N, ge);
    Ne && ge.beforeEnter(J), i(J, T, k), ((V = ve && ve.onVnodeMounted) || Ne || Ce) && Ht(() => {
      V && Fn(V, L, m), Ne && ge.enter(J), Ce && qi(m, null, L, "mounted");
    }, N);
  }, Q = (m, T, k, L, N) => {
    if (k && E(m, k), L)
      for (let U = 0; U < L.length; U++)
        E(m, L[U]);
    if (N) {
      let U = N.subTree;
      if (T === U || Zh(U.type) && (U.ssContent === T || U.ssFallback === T)) {
        const q = N.vnode;
        Q(
          m,
          q,
          q.scopeId,
          q.slotScopeIds,
          N.parent
        );
      }
    }
  }, de = (m, T, k, L, N, U, q, H, J = 0) => {
    for (let V = J; V < m.length; V++) {
      const ve = m[V] = H ? ei(m[V]) : Vn(m[V]);
      A(
        null,
        ve,
        T,
        k,
        L,
        N,
        U,
        q,
        H
      );
    }
  }, X = (m, T, k, L, N, U, q) => {
    const H = T.el = m.el;
    let { patchFlag: J, dynamicChildren: V, dirs: ve } = T;
    J |= m.patchFlag & 16;
    const ae = m.props || Ve, ge = T.props || Ve;
    let Ce;
    if (k && Yi(k, !1), (Ce = ge.onVnodeBeforeUpdate) && Fn(Ce, k, T, m), ve && qi(T, m, k, "beforeUpdate"), k && Yi(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!m.dynamicChildren || m.dynamicChildren.length !== V.length) && (J = 0, q = !1, V = null), (ae.innerHTML && ge.innerHTML == null || ae.textContent && ge.textContent == null) && u(H, ""), V ? le(
      m.dynamicChildren,
      V,
      H,
      k,
      L,
      Kl(T, N),
      U
    ) : q || ne(
      m,
      T,
      H,
      null,
      k,
      L,
      Kl(T, N),
      U,
      !1
    ), J > 0) {
      if (J & 16)
        me(H, ae, ge, k, N);
      else if (J & 2 && ae.class !== ge.class && r(H, "class", null, ge.class, N), J & 4 && r(H, "style", ae.style, ge.style, N), J & 8) {
        const Ne = T.dynamicProps;
        for (let $e = 0; $e < Ne.length; $e++) {
          const De = Ne[$e], nt = ae[De], st = ge[De];
          (st !== nt || De === "value") && r(H, De, nt, st, N, k);
        }
      }
      J & 1 && m.children !== T.children && u(H, T.children);
    } else !q && V == null && me(H, ae, ge, k, N);
    ((Ce = ge.onVnodeUpdated) || ve) && Ht(() => {
      Ce && Fn(Ce, k, T, m), ve && qi(T, m, k, "updated");
    }, L);
  }, le = (m, T, k, L, N, U, q) => {
    for (let H = 0; H < T.length; H++) {
      const J = m[H], V = T[H], ve = (
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
        ve,
        null,
        L,
        N,
        U,
        q,
        !0
      );
    }
  }, me = (m, T, k, L, N) => {
    if (T !== k) {
      if (T !== Ve)
        for (const U in T)
          !Rr(U) && !(U in k) && r(
            m,
            U,
            T[U],
            null,
            N,
            L
          );
      for (const U in k) {
        if (Rr(U)) continue;
        const q = k[U], H = T[U];
        q !== H && U !== "value" && r(m, U, H, q, N, L);
      }
      "value" in k && r(m, "value", T.value, k.value, N);
    }
  }, ee = (m, T, k, L, N, U, q, H, J) => {
    const V = T.el = m ? m.el : o(""), ve = T.anchor = m ? m.anchor : o("");
    let { patchFlag: ae, dynamicChildren: ge, slotScopeIds: Ce } = T;
    Ce && (H = H ? H.concat(Ce) : Ce), m == null ? (i(V, k, L), i(ve, k, L), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      k,
      ve,
      N,
      U,
      q,
      H,
      J
    )) : ae > 0 && ae & 64 && ge && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === ge.length ? (le(
      m.dynamicChildren,
      ge,
      k,
      N,
      U,
      q,
      H
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (T.key != null || N && T === N.subTree) && mu(
      m,
      T,
      !0
      /* shallow */
    )) : ne(
      m,
      T,
      k,
      ve,
      N,
      U,
      q,
      H,
      J
    );
  }, ie = (m, T, k, L, N, U, q, H, J) => {
    T.slotScopeIds = H, m == null ? T.shapeFlag & 512 ? N.ctx.activate(
      T,
      k,
      L,
      q,
      J
    ) : $(
      T,
      k,
      L,
      N,
      U,
      q,
      J
    ) : F(m, T, J);
  }, $ = (m, T, k, L, N, U, q) => {
    const H = m.component = Xm(
      m,
      L,
      N
    );
    if (bl(m) && (H.ctx.renderer = Gt), Zm(H, !1, q), H.asyncDep) {
      if (N && N.registerDep(H, Z, q), !m.el) {
        const J = H.subTree = _e(xt);
        D(null, J, T, k), m.placeholder = J.el;
      }
    } else
      Z(
        H,
        m,
        T,
        k,
        N,
        U,
        q
      );
  }, F = (m, T, k) => {
    const L = T.component = m.component;
    if (Pm(m, T, k))
      if (L.asyncDep && !L.asyncResolved) {
        oe(L, T, k);
        return;
      } else
        L.next = T, L.update();
    else
      T.el = m.el, L.vnode = T;
  }, Z = (m, T, k, L, N, U, q) => {
    const H = () => {
      if (m.isMounted) {
        let { next: ae, bu: ge, u: Ce, parent: Ne, vnode: $e } = m;
        {
          const vt = Yh(m);
          if (vt) {
            ae && (ae.el = $e.el, oe(m, ae, q)), vt.asyncDep.then(() => {
              Ht(() => {
                m.isUnmounted || V();
              }, N);
            });
            return;
          }
        }
        let De = ae, nt;
        Yi(m, !1), ae ? (ae.el = $e.el, oe(m, ae, q)) : ae = $e, ge && Qs(ge), (nt = ae.props && ae.props.onVnodeBeforeUpdate) && Fn(nt, Ne, ae, $e), Yi(m, !0);
        const st = dd(m), ut = m.subTree;
        m.subTree = st, A(
          ut,
          st,
          // parent may have changed if it's in a teleport
          h(ut.el),
          // anchor may have changed if it's in a fragment
          ft(ut),
          m,
          N,
          U
        ), ae.el = st.el, De === null && $m(m, st.el), Ce && Ht(Ce, N), (nt = ae.props && ae.props.onVnodeUpdated) && Ht(
          () => Fn(nt, Ne, ae, $e),
          N
        );
      } else {
        let ae;
        const { el: ge, props: Ce } = T, { bm: Ne, m: $e, parent: De, root: nt, type: st } = m, ut = Ma(T);
        Yi(m, !1), Ne && Qs(Ne), !ut && (ae = Ce && Ce.onVnodeBeforeMount) && Fn(ae, De, T), Yi(m, !0);
        {
          nt.ce && nt.ce._hasShadowRoot() && nt.ce._injectChildStyle(
            st,
            m.parent ? m.parent.type : void 0
          );
          const vt = m.subTree = dd(m);
          A(
            null,
            vt,
            k,
            L,
            m,
            N,
            U
          ), T.el = vt.el;
        }
        if ($e && Ht($e, N), !ut && (ae = Ce && Ce.onVnodeMounted)) {
          const vt = T;
          Ht(
            () => Fn(ae, De, vt),
            N
          );
        }
        (T.shapeFlag & 256 || De && Ma(De.vnode) && De.vnode.shapeFlag & 256) && m.a && Ht(m.a, N), m.isMounted = !0, T = k = L = null;
      }
    };
    m.scope.on();
    const J = m.effect = new Zf(H);
    m.scope.off();
    const V = m.update = J.run.bind(J), ve = m.job = J.runIfDirty.bind(J);
    ve.i = m, ve.id = m.uid, J.scheduler = () => du(ve), Yi(m, !0), V();
  }, oe = (m, T, k) => {
    T.component = m;
    const L = m.vnode.props;
    m.vnode = T, m.next = null, Mm(m, T.props, L, k), Bm(m, T.children, k), li(), td(m), ci();
  }, ne = (m, T, k, L, N, U, q, H, J = !1) => {
    const V = m && m.children, ve = m ? m.shapeFlag : 0, ae = T.children, { patchFlag: ge, shapeFlag: Ce } = T;
    if (ge > 0) {
      if (ge & 128) {
        pe(
          V,
          ae,
          k,
          L,
          N,
          U,
          q,
          H,
          J
        );
        return;
      } else if (ge & 256) {
        he(
          V,
          ae,
          k,
          L,
          N,
          U,
          q,
          H,
          J
        );
        return;
      }
    }
    Ce & 8 ? (ve & 16 && ct(V, N, U), ae !== V && u(k, ae)) : ve & 16 ? Ce & 16 ? pe(
      V,
      ae,
      k,
      L,
      N,
      U,
      q,
      H,
      J
    ) : ct(V, N, U, !0) : (ve & 8 && u(k, ""), Ce & 16 && de(
      ae,
      k,
      L,
      N,
      U,
      q,
      H,
      J
    ));
  }, he = (m, T, k, L, N, U, q, H, J) => {
    m = m || $a, T = T || $a;
    const V = m.length, ve = T.length, ae = Math.min(V, ve);
    let ge;
    for (ge = 0; ge < ae; ge++) {
      const Ce = T[ge] = J ? ei(T[ge]) : Vn(T[ge]);
      A(
        m[ge],
        Ce,
        k,
        null,
        N,
        U,
        q,
        H,
        J
      );
    }
    V > ve ? ct(
      m,
      N,
      U,
      !0,
      !1,
      ae
    ) : de(
      T,
      k,
      L,
      N,
      U,
      q,
      H,
      J,
      ae
    );
  }, pe = (m, T, k, L, N, U, q, H, J) => {
    let V = 0;
    const ve = T.length;
    let ae = m.length - 1, ge = ve - 1;
    for (; V <= ae && V <= ge; ) {
      const Ce = m[V], Ne = T[V] = J ? ei(T[V]) : Vn(T[V]);
      if (ia(Ce, Ne))
        A(
          Ce,
          Ne,
          k,
          null,
          N,
          U,
          q,
          H,
          J
        );
      else
        break;
      V++;
    }
    for (; V <= ae && V <= ge; ) {
      const Ce = m[ae], Ne = T[ge] = J ? ei(T[ge]) : Vn(T[ge]);
      if (ia(Ce, Ne))
        A(
          Ce,
          Ne,
          k,
          null,
          N,
          U,
          q,
          H,
          J
        );
      else
        break;
      ae--, ge--;
    }
    if (V > ae) {
      if (V <= ge) {
        const Ce = ge + 1, Ne = Ce < ve ? T[Ce].el : L;
        for (; V <= ge; )
          A(
            null,
            T[V] = J ? ei(T[V]) : Vn(T[V]),
            k,
            Ne,
            N,
            U,
            q,
            H,
            J
          ), V++;
      }
    } else if (V > ge)
      for (; V <= ae; )
        be(m[V], N, U, !0), V++;
    else {
      const Ce = V, Ne = V, $e = /* @__PURE__ */ new Map();
      for (V = Ne; V <= ge; V++) {
        const Ge = T[V] = J ? ei(T[V]) : Vn(T[V]);
        Ge.key != null && $e.set(Ge.key, V);
      }
      let De, nt = 0;
      const st = ge - Ne + 1;
      let ut = !1, vt = 0;
      const Ct = new Array(st);
      for (V = 0; V < st; V++) Ct[V] = 0;
      for (V = Ce; V <= ae; V++) {
        const Ge = m[V];
        if (nt >= st) {
          be(Ge, N, U, !0);
          continue;
        }
        let Bt;
        if (Ge.key != null)
          Bt = $e.get(Ge.key);
        else
          for (De = Ne; De <= ge; De++)
            if (Ct[De - Ne] === 0 && ia(Ge, T[De])) {
              Bt = De;
              break;
            }
        Bt === void 0 ? be(Ge, N, U, !0) : (Ct[Bt - Ne] = V + 1, Bt >= vt ? vt = Bt : ut = !0, A(
          Ge,
          T[Bt],
          k,
          null,
          N,
          U,
          q,
          H,
          J
        ), nt++);
      }
      const Jt = ut ? Gm(Ct) : $a;
      for (De = Jt.length - 1, V = st - 1; V >= 0; V--) {
        const Ge = Ne + V, Bt = T[Ge], pi = T[Ge + 1], zi = Ge + 1 < ve ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          pi.el || Xh(pi)
        ) : L;
        Ct[V] === 0 ? A(
          null,
          Bt,
          k,
          zi,
          N,
          U,
          q,
          H,
          J
        ) : ut && (De < 0 || V !== Jt[De] ? we(Bt, k, zi, 2) : De--);
      }
    }
  }, we = (m, T, k, L, N = null) => {
    const { el: U, type: q, transition: H, children: J, shapeFlag: V } = m;
    if (V & 6) {
      we(m.component.subTree, T, k, L);
      return;
    }
    if (V & 128) {
      m.suspense.move(T, k, L);
      return;
    }
    if (V & 64) {
      q.move(m, T, k, Gt);
      return;
    }
    if (q === ue) {
      i(U, T, k);
      for (let ae = 0; ae < J.length; ae++)
        we(J[ae], T, k, L);
      i(m.anchor, T, k);
      return;
    }
    if (q === eo) {
      W(m, T, k);
      return;
    }
    if (L !== 2 && V & 1 && H)
      if (L === 0)
        H.persisted && !U[bn] ? i(U, T, k) : (H.beforeEnter(U), i(U, T, k), Ht(() => H.enter(U), N));
      else {
        const { leave: ae, delayLeave: ge, afterLeave: Ce } = H, Ne = () => {
          m.ctx.isUnmounted ? a(U) : i(U, T, k);
        }, $e = () => {
          const De = U._isLeaving || !!U[bn];
          U._isLeaving && U[bn](
            !0
            /* cancelled */
          ), H.persisted && !De ? Ne() : ae(U, () => {
            Ne(), Ce && Ce();
          });
        };
        ge ? ge(U, Ne, $e) : $e();
      }
    else
      i(U, T, k);
  }, be = (m, T, k, L = !1, N = !1) => {
    const {
      type: U,
      props: q,
      ref: H,
      children: J,
      dynamicChildren: V,
      shapeFlag: ve,
      patchFlag: ae,
      dirs: ge,
      cacheIndex: Ce,
      memo: Ne
    } = m;
    if (ae === -2 && (N = !1), H != null && (li(), $r(H, null, k, m, !0), ci()), Ce != null && (T.renderCache[Ce] = void 0), ve & 256) {
      T.ctx.deactivate(m);
      return;
    }
    const $e = ve & 1 && ge, De = !Ma(m);
    let nt;
    if (De && (nt = q && q.onVnodeBeforeUnmount) && Fn(nt, T, m), ve & 6)
      lt(m.component, k, L);
    else {
      if (ve & 128) {
        m.suspense.unmount(k, L);
        return;
      }
      $e && qi(m, null, T, "beforeUnmount"), ve & 64 ? m.type.remove(
        m,
        T,
        k,
        Gt,
        L
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== ue || ae > 0 && ae & 64) ? ct(
        V,
        T,
        k,
        !1,
        !0
      ) : (U === ue && ae & 384 || !N && ve & 16) && ct(J, T, k), L && Ke(m);
    }
    const st = Ne != null && Ce == null;
    (De && (nt = q && q.onVnodeUnmounted) || $e || st) && Ht(() => {
      nt && Fn(nt, T, m), $e && qi(m, null, T, "unmounted"), st && (m.el = null);
    }, k);
  }, Ke = (m) => {
    const { type: T, el: k, anchor: L, transition: N } = m;
    if (T === ue) {
      Ae(k, L);
      return;
    }
    if (T === eo) {
      I(m);
      return;
    }
    const U = () => {
      a(k), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (m.shapeFlag & 1 && N && !N.persisted) {
      const { leave: q, delayLeave: H } = N, J = () => q(k, U);
      H ? H(m.el, U, J) : J();
    } else
      U();
  }, Ae = (m, T) => {
    let k;
    for (; m !== T; )
      k = S(m), a(m), m = k;
    a(T);
  }, lt = (m, T, k) => {
    const { bum: L, scope: N, job: U, subTree: q, um: H, m: J, a: V } = m;
    pd(J), pd(V), L && Qs(L), N.stop(), U && (U.flags |= 8, be(q, m, T, k)), H && Ht(H, T), Ht(() => {
      m.isUnmounted = !0;
    }, T);
  }, ct = (m, T, k, L = !1, N = !1, U = 0) => {
    for (let q = U; q < m.length; q++)
      be(m[q], T, k, L, N);
  }, ft = (m) => {
    if (m.shapeFlag & 6)
      return ft(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const T = S(m.anchor || m.el), k = T && T[_h];
    return k ? S(k) : T;
  };
  let ht = !1;
  const Qe = (m, T, k) => {
    let L;
    m == null ? T._vnode && (be(T._vnode, null, null, !0), L = T._vnode.component) : A(
      T._vnode || null,
      m,
      T,
      null,
      null,
      null,
      k
    ), T._vnode = m, ht || (ht = !0, td(L), mh(), ht = !1);
  }, Gt = {
    p: A,
    um: be,
    m: we,
    r: Ke,
    mt: $,
    mc: de,
    pc: ne,
    pbc: le,
    n: ft,
    o: e
  };
  return {
    render: Qe,
    hydrate: void 0,
    createApp: xm(Qe)
  };
}
function Kl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Yi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Vm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Se(i) && Se(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = ei(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && mu(s, o)), o.type === vs && (o.patchFlag === -1 && (o = a[r] = ei(o)), o.el = s.el), o.type === xt && !o.el && (o.el = s.el);
    }
}
function Gm(e) {
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
function Yh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Yh(t);
}
function pd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Xh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Xh(t.subTree) : null;
}
const Zh = (e) => e.__isSuspense;
function Km(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : gh(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), vs = /* @__PURE__ */ Symbol.for("v-txt"), xt = /* @__PURE__ */ Symbol.for("v-cmt"), eo = /* @__PURE__ */ Symbol.for("v-stc"), si = [];
let on = null;
function _(e = !1) {
  si.push(on = e ? null : []);
}
function bu() {
  si.pop(), on = si[si.length - 1] || null;
}
let Qr = 1;
function ho(e, t = !1) {
  Qr += e, e < 0 && on && t && (on.hasOnce = !0);
}
function Jh(e) {
  return e.dynamicChildren = Qr > 0 ? on || $a : null, bu(), Qr > 0 && on && on.push(e), e;
}
function C(e, t, n, i, a, r) {
  return Jh(
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
function ze(e, t, n, i, a) {
  return Jh(
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
function es(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ia(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qh = ({ key: e }) => e ?? null, to = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? rt(e) || /* @__PURE__ */ zt(e) || Le(e) ? { i: Nt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === ue ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qh(t),
    ref: t && to(t),
    scopeId: vl,
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
  return o ? (po(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= rt(n) ? 8 : 16), Qr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  on && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && on.push(l), l;
}
const _e = Wm;
function Wm(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Lh) && (e = xt), es(e)) {
    const o = Pi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && po(o, n), Qr > 0 && !r && on && (o.shapeFlag & 6 ? on[on.indexOf(e)] = o : on.push(o)), o.patchFlag = -2, o;
  }
  if (tb(e) && (e = e.__vccOpts), t) {
    t = ts(t);
    let { class: o, style: l } = t;
    o && !rt(o) && (t.class = Ee(o)), Ze(l) && (/* @__PURE__ */ uu(l) && !Se(l) && (l = _t({}, l)), t.style = ln(l));
  }
  const s = rt(e) ? 1 : Zh(e) ? 128 : ml(e) ? 64 : Ze(e) ? 4 : Le(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ uu(e) || Hh(e) ? _t({}, e) : e : null;
}
function Pi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, f = t ? Ut(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Qh(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Se(r) ? r.concat(to(t)) : [r, to(t)] : to(t)
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
    ssContent: e.ssContent && Pi(e.ssContent),
    ssFallback: e.ssFallback && Pi(e.ssFallback),
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
function Ie(e = " ", t = 0) {
  return _e(vs, null, e, t);
}
function j(e = "", t = !1) {
  return t ? (_(), ze(xt, null, e)) : _e(xt, null, e);
}
function Vn(e) {
  return e == null || typeof e == "boolean" ? _e(xt) : Se(e) ? _e(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : es(e) ? ei(e) : _e(vs, null, String(e));
}
function ei(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Pi(e);
}
function po(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), po(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Hh(t) ? t._ctx = Nt : a === 3 && Nt && (Nt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Le(t)) {
    if (i & 65) {
      po(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Nt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Ie(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ut(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ee([t.class, i.class]));
      else if (a === "style")
        t.style = ln([t.style, i.style]);
      else if (sl(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(Se(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ol(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Fn(e, t, n, i = null) {
  Sn(e, t, 7, [
    n,
    i
  ]);
}
const qm = Dh();
let Ym = 0;
function Xm(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || qm, r = {
    uid: Ym++,
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
    scope: new bg(
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
    propsOptions: Gh(i, a),
    emitsOptions: zh(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ve,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ve,
    data: Ve,
    props: Ve,
    attrs: Ve,
    slots: Ve,
    refs: Ve,
    setupState: Ve,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Nm.bind(null, r), e.ce && e.ce(r), r;
}
let Mt = null;
const pa = () => Mt || Nt;
let vo, ns;
{
  const e = dl(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  vo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Mt = n
  ), ns = t(
    "__VUE_SSR_SETTERS__",
    (n) => is = n
  );
}
const gs = (e) => {
  const t = Mt;
  return vo(e), e.scope.on(), () => {
    e.scope.off(), vo(t);
  };
}, vd = () => {
  Mt && Mt.scope.off(), vo(null);
};
function ep(e) {
  return e.vnode.shapeFlag & 4;
}
let is = !1;
function Zm(e, t = !1, n = !1) {
  t && ns(t);
  const { props: i, children: a } = e.vnode, r = ep(e);
  Dm(e, i, r, t), Um(e, a, n || t);
  const s = r ? Jm(e, t) : void 0;
  return t && ns(!1), s;
}
function Jm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ym);
  const { setup: i } = n;
  if (i) {
    li();
    const a = e.setupContext = i.length > 1 ? np(e) : null, r = gs(e), s = hs(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = Vf(s);
    if (ci(), r(), (o || e.sp) && !Ma(e) && kh(e), o) {
      if (s.then(vd, vd), t)
        return s.then((l) => {
          ns(!0);
          try {
            gd(e, l, t);
          } finally {
            ns(!1);
          }
        }).catch((l) => {
          pl(l, e, 0);
        });
      e.asyncDep = s;
    } else
      gd(e, s);
  } else
    tp(e);
}
function gd(e, t, n) {
  Le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ze(t) && (e.setupState = hh(t)), tp(e);
}
function tp(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || _n);
  {
    const a = gs(e);
    li();
    try {
      Cm(e);
    } finally {
      ci(), a();
    }
  }
}
const Qm = {
  get(e, t) {
    return $t(e, "get", ""), e[t];
  }
};
function np(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Qm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function wl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hh(Fg(e.exposed)), {
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
function eb(e, t = !0) {
  return Le(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function tb(e) {
  return Le(e) && "__vccOpts" in e;
}
const G = (e, t) => /* @__PURE__ */ Vg(e, t, is);
function Xt(e, t, n) {
  try {
    ho(-1);
    const i = arguments.length;
    return i === 2 ? Ze(t) && !Se(t) ? es(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && es(n) && (n = [n]), _e(e, t, n));
  } finally {
    ho(1);
  }
}
const nb = "3.5.42", ib = _n;
let Pc;
const md = typeof window < "u" && window.trustedTypes;
if (md)
  try {
    Pc = /* @__PURE__ */ md.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ip = Pc ? (e) => Pc.createHTML(e) : (e) => e, ab = "http://www.w3.org/2000/svg", rb = "http://www.w3.org/1998/Math/MathML", Qn = typeof document < "u" ? document : null, bd = Qn && /* @__PURE__ */ Qn.createElement("template"), sb = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? Qn.createElementNS(ab, e) : t === "mathml" ? Qn.createElementNS(rb, e) : n ? Qn.createElement(e, { is: n }) : Qn.createElement(e);
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
      bd.innerHTML = ip(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = bd.content;
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
}, _i = "transition", br = "animation", as = /* @__PURE__ */ Symbol("_vtc"), ap = {
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
}, ob = /* @__PURE__ */ _t(
  {},
  Sh,
  ap
), lb = (e) => (e.displayName = "Transition", e.props = ob, e), cb = /* @__PURE__ */ lb(
  (e, { slots: t }) => Xt(lm, ub(e), t)
), Xi = (e, t = []) => {
  Se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, yd = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ub(e) {
  const t = {};
  for (const ee in e)
    ee in ap || (t[ee] = e[ee]);
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
  } = e, x = db(a), A = x && x[0], O = x && x[1], {
    onBeforeEnter: D,
    onEnter: M,
    onEnterCancelled: W,
    onLeave: I,
    onLeaveCancelled: P,
    onBeforeAppear: ce = D,
    onAppear: Q = M,
    onAppearCancelled: de = W
  } = t, X = (ee, ie, $, F) => {
    ee._enterCancelled = F, Zi(ee, ie ? u : o), Zi(ee, ie ? f : s), $ && $();
  }, le = (ee, ie) => {
    ee._isLeaving = !1, Zi(ee, h), Zi(ee, E), Zi(ee, S), ie && ie();
  }, me = (ee) => (ie, $) => {
    const F = ee ? Q : M, Z = () => X(ie, ee, $);
    Xi(F, [ie, Z]), _d(() => {
      Zi(ie, ee ? l : r), Yn(ie, ee ? u : o), yd(F) || wd(ie, i, A, Z);
    });
  };
  return _t(t, {
    onBeforeEnter(ee) {
      Xi(D, [ee]), Yn(ee, r), Yn(ee, s);
    },
    onBeforeAppear(ee) {
      Xi(ce, [ee]), Yn(ee, l), Yn(ee, f);
    },
    onEnter: me(!1),
    onAppear: me(!0),
    onLeave(ee, ie) {
      ee._isLeaving = !0;
      const $ = () => le(ee, ie);
      Yn(ee, h), ee._enterCancelled ? (Yn(ee, S), Td(ee)) : (Td(ee), Yn(ee, S)), _d(() => {
        ee._isLeaving && (Zi(ee, h), Yn(ee, E), yd(I) || wd(ee, i, O, $));
      }), Xi(I, [ee, $]);
    },
    onEnterCancelled(ee) {
      X(ee, !1, void 0, !0), Xi(W, [ee]);
    },
    onAppearCancelled(ee) {
      X(ee, !0, void 0, !0), Xi(de, [ee]);
    },
    onLeaveCancelled(ee) {
      le(ee), Xi(P, [ee]);
    }
  });
}
function db(e) {
  if (e == null)
    return null;
  if (Ze(e))
    return [Wl(e.enter), Wl(e.leave)];
  {
    const t = Wl(e);
    return [t, t];
  }
}
function Wl(e) {
  return lg(e);
}
function Yn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[as] || (e[as] = /* @__PURE__ */ new Set())).add(t);
}
function Zi(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[as];
  n && (n.delete(t), n.size || (e[as] = void 0));
}
function _d(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let fb = 0;
function wd(e, t, n, i) {
  const a = e._endId = ++fb, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = hb(e, t);
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
function hb(e, t) {
  const n = window.getComputedStyle(e), i = (x) => (n[x] || "").split(", "), a = i(`${_i}Delay`), r = i(`${_i}Duration`), s = Sd(a, r), o = i(`${br}Delay`), l = i(`${br}Duration`), f = Sd(o, l);
  let u = null, h = 0, S = 0;
  t === _i ? s > 0 && (u = _i, h = s, S = r.length) : t === br ? f > 0 && (u = br, h = f, S = l.length) : (h = Math.max(s, f), u = h > 0 ? s > f ? _i : br : null, S = u ? u === _i ? r.length : l.length : 0);
  const E = u === _i && /\b(?:transform|all)(?:,|$)/.test(
    i(`${_i}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: S,
    hasTransform: E
  };
}
function Sd(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Cd(n) + Cd(e[i])));
}
function Cd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Td(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function pb(e, t, n) {
  const i = e[as];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const go = /* @__PURE__ */ Symbol("_vod"), rp = /* @__PURE__ */ Symbol("_vsh"), za = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[go] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : yr(e, t);
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
  e.style.display = t ? e[go] : "none", e[rp] = !t;
}
const sp = /* @__PURE__ */ Symbol("");
function vb(e) {
  const t = pa();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => mo(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? mo(t.ce, a) : $c(t.subTree, a), n(a);
  };
  Nh(() => {
    gh(i);
  }), Di(() => {
    tt(i, _n, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), ps(() => a.disconnect());
  });
}
function $c(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      $c(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    mo(e.el, t);
  else if (e.type === ue)
    e.children.forEach((n) => $c(n, t));
  else if (e.type === eo) {
    let { el: n, anchor: i } = e;
    for (; n && (mo(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function mo(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = mg(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[sp] = i;
  }
}
const gb = /(?:^|;)\s*display\s*:/;
function mb(e, t, n) {
  const i = e.style, a = rt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (rt(t))
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
      o != null ? yb(
        e,
        s,
        !rt(t) && t ? t[s] : void 0,
        o
      ) || Or(i, s, o) : Or(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[sp];
      s && (n += ";" + s), i.cssText = n, r = gb.test(n);
    }
  } else t && e.removeAttribute("style");
  go in e && (e[go] = r ? i.display : "", e[rp] && (i.display = "none"));
}
const Hs = /\s*!important$/;
function Or(e, t, n) {
  if (Se(n))
    n.forEach((i) => Or(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Hs.test(n) ? e.setProperty(t, n.replace(Hs, ""), "important") : e.setProperty(t, n);
  else {
    const i = bb(e, t);
    Hs.test(n) ? e.setProperty(
      fi(i),
      n.replace(Hs, ""),
      "important"
    ) : e[i] = n;
  }
}
const Ed = ["Webkit", "Moz", "ms"], ql = {};
function bb(e, t) {
  const n = ql[t];
  if (n)
    return n;
  let i = Ft(t);
  if (i !== "filter" && i in e)
    return ql[t] = i;
  i = cl(i);
  for (let a = 0; a < Ed.length; a++) {
    const r = Ed[a] + i;
    if (r in e)
      return ql[t] = r;
  }
  return t;
}
function yb(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && rt(i) && n === i;
}
const Ad = "http://www.w3.org/1999/xlink";
function kd(e, t, n, i, a, r = pg(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ad, t.slice(6, t.length)) : e.setAttributeNS(Ad, t, n) : n == null || r && !qf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ln(n) ? String(n) : n
  );
}
function Od(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ip(n) : n);
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
    o === "boolean" ? n = qf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
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
function _b(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const xd = /* @__PURE__ */ Symbol("_vei");
function wb(e, t, n, i, a = null) {
  const r = e[xd] || (e[xd] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = Tb(t);
    if (i) {
      const f = r[t] = kb(
        i,
        a
      );
      aa(e, o, f, l);
    } else s && (_b(e, o, s, l), r[t] = void 0);
  }
}
const Sb = /(Once|Passive|Capture)$/, Cb = /^on:?(?:Once|Passive|Capture)$/;
function Tb(e) {
  let t, n;
  for (; (n = e.match(Sb)) && !Cb.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : fi(e.slice(2)), t];
}
let Yl = 0;
const Eb = /* @__PURE__ */ Promise.resolve(), Ab = () => Yl || (Eb.then(() => Yl = 0), Yl = Date.now());
function kb(e, t) {
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
        f && Sn(
          f,
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
  return n.value = e, n.attached = Ab(), n;
}
const Nd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ob = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? pb(e, i, s) : t === "style" ? mb(e, n, i) : sl(t) ? ol(t) || wb(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xb(e, t, i, s)) ? (Od(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && kd(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Nb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !rt(i))) ? Od(e, Ft(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), kd(e, t, i, s));
};
function xb(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Nd(t) && Le(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Nd(t) && rt(n) ? !1 : t in e;
}
function Nb(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ft(t);
  return Array.isArray(n) ? n.some((a) => Ft(a) === i) : Object.keys(n).some((a) => Ft(a) === i);
}
const bo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (n) => Qs(t, n) : t;
};
function Lb(e) {
  e.target.composing = !0;
}
function Ld(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const sa = /* @__PURE__ */ Symbol("_assign"), Vs = /* @__PURE__ */ Symbol("_initialValue");
function Xl(e, t, n) {
  return t && (e = e.trim()), n && (e = ul(e)), e;
}
const Yt = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[Vs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Vs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[sa] = bo(a);
    const r = i || a.props && a.props.type === "number";
    aa(e, t ? "change" : "input", (s) => {
      s.target.composing || e[sa](Xl(e.value, n, r));
    }), (n || r) && aa(e, "change", () => {
      e.value = Xl(e.value, n, r);
    }), t || (aa(e, "compositionstart", Lb), aa(e, "compositionend", Ld), aa(e, "change", Ld));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[Vs];
    delete e[Vs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[sa](Xl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[sa] = bo(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? ul(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const f = e.getRootNode();
    (f instanceof Document || f instanceof ShadowRoot) && f.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, wi = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, aa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? ul(yo(l)) : yo(l)
      ), r = e.multiple, s = r ? fa(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? Se(s) ? a.slice() : a : s
      ];
      try {
        e[sa](s);
      } finally {
        rn(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[sa] = bo(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Rd(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[sa] = bo(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Rb(t, n[1], n[0])) && Rd(e, t);
  }
};
function Rb(e, t, n) {
  if (!n || Se(e)) return Ii(e, t);
  if (fa(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Rd(e, t) {
  const n = e.multiple, i = Se(t);
  if (!(n && !i && !fa(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = yo(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((f) => String(f) === String(o)) : s.selected = gg(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Ii(yo(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function yo(e) {
  return "_value" in e ? e._value : e.value;
}
const Ib = ["ctrl", "shift", "alt", "meta"], Pb = {
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
  exact: (e, t) => Ib.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ue = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = Pb[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, $b = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, yt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = fi(a.key);
    if (t.some(
      (s) => s === r || $b[s] === r
    ))
      return e(a);
  }));
}, Db = /* @__PURE__ */ _t({ patchProp: Ob }, sb);
let Id;
function Mb() {
  return Id || (Id = jm(Db));
}
const Fb = ((...e) => {
  const t = Mb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Ub(i);
    if (!a) return;
    const r = t._component;
    !Le(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, zb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function zb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ub(e) {
  return rt(e) ? document.querySelector(e) : e;
}
function yu(e, t, n) {
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
function Pd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Bb(e) {
  if (Array.isArray(e)) return e;
}
function jb(e, t) {
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
function Hb() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vb(e, t) {
  return Bb(e) || jb(e, t) || Gb(e, t) || Hb();
}
function Gb(e, t) {
  if (e) {
    if (typeof e == "string") return Pd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pd(e, t) : void 0;
  }
}
const op = Object.entries, $d = Object.setPrototypeOf, Kb = Object.isFrozen, Wb = Object.getPrototypeOf, qb = Object.getOwnPropertyDescriptor;
let St = Object.freeze, At = Object.seal, Ia = Object.create, lp = typeof Reflect < "u" && Reflect, Dc = lp.apply, Mc = lp.construct;
St || (St = function(t) {
  return t;
});
At || (At = function(t) {
  return t;
});
Dc || (Dc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
Mc || (Mc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ta = wt(Array.prototype.forEach), Yb = wt(Array.prototype.lastIndexOf), Dd = wt(Array.prototype.pop), _r = wt(Array.prototype.push), Xb = wt(Array.prototype.splice), Ua = Array.isArray, xr = wt(String.prototype.toLowerCase), Zl = wt(String.prototype.toString), Md = wt(String.prototype.match), wr = wt(String.prototype.replace), Fd = wt(String.prototype.indexOf), Zb = wt(String.prototype.trim), Jb = wt(Number.prototype.toString), Qb = wt(Boolean.prototype.toString), zd = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), Ud = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), Zt = wt(Object.prototype.hasOwnProperty), Sr = wt(Object.prototype.toString), Rt = wt(RegExp.prototype.test), Ji = ey(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return Dc(e, t, i);
  };
}
function ey(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return Mc(e, n);
  };
}
function He(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : xr;
  if ($d && $d(e, null), !Ua(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Kb(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function ty(e) {
  for (let t = 0; t < e.length; t++)
    Zt(e, t) || (e[t] = null);
  return e;
}
function an(e) {
  const t = Ia(null);
  for (const i of op(e)) {
    var n = Vb(i, 2);
    const a = n[0], r = n[1];
    Zt(e, a) && (Ua(r) ? t[a] = ty(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = an(r) : t[a] = r);
  }
  return t;
}
function ny(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Jb(e);
    case "boolean":
      return Qb(e);
    case "bigint":
      return zd ? zd(e) : "0";
    case "symbol":
      return Ud ? Ud(e) : "Symbol()";
    case "undefined":
      return Sr(e);
    case "function":
    case "object": {
      if (e === null)
        return Sr(e);
      const t = e, n = kn(t, "toString");
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
function kn(e, t) {
  for (; e !== null; ) {
    const i = qb(e, t);
    if (i) {
      if (i.get)
        return wt(i.get);
      if (typeof i.value == "function")
        return wt(i.value);
    }
    e = Wb(e);
  }
  function n() {
    return null;
  }
  return n;
}
function iy(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Bd = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Jl = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ql = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ay = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ec = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ry = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), jd = St(["#text"]), Hd = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), tc = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vd = St(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Gs = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), sy = At(/{{[\w\W]*|^[\w\W]*}}/g), oy = At(/<%[\w\W]*|^[\w\W]*%>/g), ly = At(/\${[\w\W]*/g), cy = At(/^data-[\-\w.\u00B7-\uFFFF]+$/), uy = At(/^aria-[\-\w]+$/), Gd = At(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dy = At(/^(?:\w+script|data):/i), fy = At(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), hy = At(/^html$/i), py = At(/^[a-z][.\w]*(-[.\w]+)+$/i), Kd = At(/<[/\w!]/g), Wd = At(/<[/\w]/g), vy = At(/<\/no(script|embed|frames)/i), gy = At(/\/>/i), nn = {
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
}, cp = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], my = St(He({}, cp)), by = (function() {
  const e = {};
  return ta(cp, (t) => {
    e[t] = At(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), yy = function() {
  return typeof window > "u" ? null : window;
}, _y = function(t, n) {
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
}, qd = function() {
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
}, Si = function(t, n, i, a) {
  return Zt(t, n) && Ua(t[n]) ? He(a.base ? an(a.base) : {}, t[n], a.transform) : i;
}, nc = function(t, n, i) {
  const a = Zt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? an(a) : i();
};
function up() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yy();
  const t = (Y) => up(Y);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, f = e.NamedNodeMap;
  f === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, S = o.prototype, E = kn(S, "cloneNode"), x = kn(S, "remove"), A = kn(S, "nextSibling"), O = kn(S, "childNodes"), D = kn(S, "parentNode"), M = kn(S, "shadowRoot"), W = kn(S, "attributes"), I = s && s.prototype ? kn(s.prototype, "nodeType") : null, P = s && s.prototype ? kn(s.prototype, "nodeName") : null, ce = s && s.prototype ? kn(s.prototype, "ownerDocument") : null, Q = function(w) {
    return I ? I(w) : w.nodeType;
  }, de = function(w) {
    return P ? P(w) : w.nodeName;
  };
  if (typeof r == "function") {
    const Y = n.createElement("template");
    Y.content && Y.content.ownerDocument && (n = Y.content.ownerDocument);
  }
  let X, le = "", me, ee = !1, ie = 0;
  const $ = function() {
    if (ie > 0)
      throw Ji('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, F = function(w) {
    $(), ie++;
    try {
      return X.createHTML(w);
    } finally {
      ie--;
    }
  }, Z = function(w) {
    $(), ie++;
    try {
      return X.createScriptURL(w);
    } finally {
      ie--;
    }
  }, oe = function() {
    return ee || (me = _y(h, a), ee = !0), me;
  }, ne = n, he = ne.implementation, pe = ne.createNodeIterator, we = ne.createDocumentFragment, be = ne.getElementsByTagName, Ke = i.importNode;
  let Ae = qd();
  t.isSupported = typeof op == "function" && typeof D == "function" && he && he.createHTMLDocument !== void 0;
  const lt = sy, ct = oy, ft = ly, ht = cy, Qe = uy, Gt = dy, B = fy, m = py;
  let T = Gd, k = null;
  const L = He({}, [...Bd, ...Jl, ...Ql, ...ec, ...jd]);
  let N = null;
  const U = He({}, [...Hd, ...tc, ...Vd, ...Gs]);
  let q = Object.seal(Ia(null, {
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
  })), H = null, J = null;
  const V = Object.seal(Ia(null, {
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
  let ve = !0, ae = !0, ge = !1, Ce = !0, Ne = !1, $e = !0, De = !1, nt = !1, st = null, ut = null, vt = !1, Ct = !1, Jt = !1, Ge = !1, Bt = !0, pi = !1;
  const zi = "user-content-";
  let Ui = !0, ga = !1, cn = {}, un = null;
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
  const Qt = He({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ga = null;
  const _s = He({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ma = "http://www.w3.org/1998/Math/MathML", ba = "http://www.w3.org/2000/svg", dn = "http://www.w3.org/1999/xhtml";
  let vi = dn, Ka = !1, Wa = null;
  const xl = He({}, [ma, ba, dn], Zl), ws = St(["mi", "mo", "mn", "ms", "mtext"]);
  let qa = He({}, ws);
  const Ss = St(["annotation-xml"]);
  let Ya = He({}, Ss);
  const Nl = He({}, ["title", "style", "font", "a", "script"]);
  let gi = null;
  const Xa = ["application/xhtml+xml", "text/html"], Za = "text/html";
  let ot = null, In = null;
  const Cs = n.createElement("form"), Ts = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, ya = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (In && In === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = an(w), gi = // eslint-disable-next-line unicorn/prefer-includes
    Xa.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Za : w.PARSER_MEDIA_TYPE, ot = gi === "application/xhtml+xml" ? Zl : xr, k = Si(w, "ALLOWED_TAGS", L, {
      transform: ot
    }), N = Si(w, "ALLOWED_ATTR", U, {
      transform: ot
    }), Wa = Si(w, "ALLOWED_NAMESPACES", xl, {
      transform: Zl
    }), Ga = Si(w, "ADD_URI_SAFE_ATTR", _s, {
      transform: ot,
      base: _s
    }), ys = Si(w, "ADD_DATA_URI_TAGS", Qt, {
      transform: ot,
      base: Qt
    }), un = Si(w, "FORBID_CONTENTS", bs, {
      transform: ot
    }), H = Si(w, "FORBID_TAGS", an({}), {
      transform: ot
    }), J = Si(w, "FORBID_ATTR", an({}), {
      transform: ot
    }), cn = Zt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? an(w.USE_PROFILES) : w.USE_PROFILES : !1, ve = w.ALLOW_ARIA_ATTR !== !1, ae = w.ALLOW_DATA_ATTR !== !1, ge = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Ce = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ne = w.SAFE_FOR_TEMPLATES || !1, $e = w.SAFE_FOR_XML !== !1, De = w.WHOLE_DOCUMENT || !1, Ct = w.RETURN_DOM || !1, Jt = w.RETURN_DOM_FRAGMENT || !1, Ge = w.RETURN_TRUSTED_TYPE || !1, vt = w.FORCE_BODY || !1, Bt = w.SANITIZE_DOM !== !1, pi = w.SANITIZE_NAMED_PROPS || !1, Ui = w.KEEP_CONTENT !== !1, ga = w.IN_PLACE || !1, T = iy(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Gd, vi = typeof w.NAMESPACE == "string" ? w.NAMESPACE : dn, qa = nc(
      w,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => He({}, ws)
      // Default built-in map
    ), Ya = nc(
      w,
      "HTML_INTEGRATION_POINTS",
      () => He({}, Ss)
      // Default built-in map
    );
    const R = nc(w, "CUSTOM_ELEMENT_HANDLING", () => Ia(null));
    if (q = Ia(null), Zt(R, "tagNameCheck") && Ts(R.tagNameCheck) && (q.tagNameCheck = R.tagNameCheck), Zt(R, "attributeNameCheck") && Ts(R.attributeNameCheck) && (q.attributeNameCheck = R.attributeNameCheck), Zt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), At(q), Ne && (ae = !1), Jt && (Ct = !0), cn && (k = He({}, jd), N = Ia(null), cn.html === !0 && (He(k, Bd), He(N, Hd)), cn.svg === !0 && (He(k, Jl), He(N, tc), He(N, Gs)), cn.svgFilters === !0 && (He(k, Ql), He(N, tc), He(N, Gs)), cn.mathMl === !0 && (He(k, ec), He(N, Vd), He(N, Gs))), V.tagCheck = null, V.attributeCheck = null, Zt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? V.tagCheck = w.ADD_TAGS : Ua(w.ADD_TAGS) && (k === L && (k = an(k)), He(k, w.ADD_TAGS, ot))), Zt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? V.attributeCheck = w.ADD_ATTR : Ua(w.ADD_ATTR) && (N === U && (N = an(N)), He(N, w.ADD_ATTR, ot))), Zt(w, "ADD_FORBID_CONTENTS") && Ua(w.ADD_FORBID_CONTENTS) && (un === bs && (un = an(un)), He(un, w.ADD_FORBID_CONTENTS, ot)), Ui && (k["#text"] = !0), De && He(k, ["html", "head", "body"]), k.table && (He(k, ["tbody"]), delete H.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ji('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ji('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const K = X;
      X = w.TRUSTED_TYPES_POLICY;
      try {
        le = F("");
      } catch (re) {
        throw X = K, re;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (X = void 0, le = "") : (X === void 0 && (X = oe()), X && typeof le == "string" && (le = F("")));
    St && St(w), In = w;
  }, Ja = He({}, [...Jl, ...Ql, ...ay]), Es = He({}, [...ec, ...ry]), Qa = function(w, R, K) {
    return R.namespaceURI === dn ? w === "svg" : R.namespaceURI === ma ? w === "svg" && (K === "annotation-xml" || qa[K]) : !!Ja[w];
  }, er = function(w, R, K) {
    return R.namespaceURI === dn ? w === "math" : R.namespaceURI === ba ? w === "math" && Ya[K] : !!Es[w];
  }, As = function(w, R, K) {
    return R.namespaceURI === ba && !Ya[K] || R.namespaceURI === ma && !qa[K] ? !1 : !Es[w] && (Nl[w] || !Ja[w]);
  }, ks = function(w) {
    let R = D(w);
    (!R || !R.tagName) && (R = {
      namespaceURI: vi,
      tagName: "template"
    });
    const K = xr(w.tagName), re = xr(R.tagName);
    return Wa[w.namespaceURI] ? w.namespaceURI === ba ? Qa(K, R, re) : w.namespaceURI === ma ? er(K, R, re) : w.namespaceURI === dn ? As(K, R, re) : !!(gi === "application/xhtml+xml" && Wa[w.namespaceURI]) : !1;
  }, Cn = function(w) {
    _r(t.removed, {
      element: w
    });
    try {
      D(w).removeChild(w);
    } catch {
      if (x(w), !D(w))
        throw Ji("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, tr = function(w, R, K) {
    try {
      w.removeAttributeNode(R);
    } catch {
      try {
        w.removeAttribute(K);
      } catch {
      }
    }
  }, Bi = function(w) {
    _a(w);
    const R = O(w);
    if (R) {
      const re = [];
      ta(R, (fe) => {
        _r(re, fe);
      }), ta(re, (fe) => {
        try {
          x(fe);
        } catch {
        }
      });
    }
    const K = W(w);
    if (K)
      for (let re = K.length - 1; re >= 0; --re) {
        const fe = K[re], ye = fe && fe.name;
        typeof ye == "string" && tr(w, fe, ye);
      }
  }, Pn = function(w, R, K) {
    if (!K)
      try {
        K = R.getAttributeNode(w);
      } catch {
        K = null;
      }
    _r(t.removed, {
      attribute: K || null,
      from: R
    });
    try {
      K ? R.removeAttributeNode(K) : R.removeAttribute(w);
    } catch {
      try {
        R.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (Ct || Jt)
        try {
          Cn(R);
        } catch {
        }
      else
        try {
          R.setAttribute(w, "");
        } catch {
        }
  }, Ll = function(w) {
    const R = W(w);
    if (R)
      for (let K = R.length - 1; K >= 0; --K) {
        const re = R[K], fe = re && re.name;
        typeof fe != "string" || N[ot(fe)] || tr(w, re, fe);
      }
  }, _a = function(w) {
    const R = [w];
    for (; R.length > 0; ) {
      const K = R.pop();
      Q(K) === nn.element && Ll(K);
      const fe = O(K);
      if (fe)
        for (let ye = fe.length - 1; ye >= 0; --ye)
          R.push(fe[ye]);
    }
  }, nr = function(w, R) {
    return $e ? w === "patchsrc" ? !0 : w === "for" && R !== "label" && R !== "output" : !1;
  }, Kt = function(w) {
    if (!$e)
      return;
    const R = [w];
    for (; R.length > 0; ) {
      const K = R.pop(), re = Q(K);
      if (re === nn.processingInstruction || re === nn.comment && Rt(Wd, K.data)) {
        try {
          x(K);
        } catch {
        }
        continue;
      }
      if (re === nn.element) {
        const ye = K, We = ot(de(K));
        try {
          ye.hasAttribute && ye.hasAttribute("patchsrc") && ye.removeAttribute("patchsrc"), ye.hasAttribute && ye.hasAttribute("for") && nr("for", We) && ye.removeAttribute("for");
        } catch {
        }
      }
      const fe = O(K);
      if (fe)
        for (let ye = fe.length - 1; ye >= 0; --ye)
          R.push(fe[ye]);
    }
  }, Os = function(w) {
    let R = null, K = null;
    if (vt)
      w = "<remove></remove>" + w;
    else {
      const ye = Md(w, /^[\r\n\t ]+/);
      K = ye && ye[0];
    }
    gi === "application/xhtml+xml" && vi === dn && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const re = X ? F(w) : w;
    if (vi === dn)
      try {
        R = new u().parseFromString(re, gi);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = he.createDocument(vi, "template", null);
      try {
        R.documentElement.innerHTML = Ka ? le : re;
      } catch {
      }
    }
    const fe = R.body || R.documentElement;
    return w && K && fe.insertBefore(n.createTextNode(K), fe.childNodes[0] || null), vi === dn ? be.call(R, De ? "html" : "body")[0] : De ? R.documentElement : fe;
  }, ji = function(w) {
    const R = ce ? ce(w) : w.ownerDocument;
    return pe.call(
      R || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, wa = function(w) {
    return w = wr(w, lt, " "), w = wr(w, ct, " "), w = wr(w, ft, " "), w;
  }, ir = function(w) {
    var R;
    w.normalize();
    const K = ce ? ce(w) : w.ownerDocument, re = pe.call(
      K || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let fe = re.nextNode();
    for (; fe; )
      fe.data = wa(fe.data), fe = re.nextNode();
    const ye = (R = w.querySelectorAll) === null || R === void 0 ? void 0 : R.call(w, "template");
    ye && ta(ye, (We) => {
      Tn(We.content) && ir(We.content);
    });
  }, Sa = function(w) {
    const R = P ? P(w) : null;
    return typeof R != "string" || ot(R) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    w.attributes !== W(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
  }, Tn = function(w) {
    if (!I || typeof w != "object" || w === null)
      return !1;
    try {
      return I(w) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, Hi = function(w) {
    if (!I || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof I(w) == "number";
    } catch {
      return !1;
    }
  };
  function Wt(Y, w, R) {
    Y.length !== 0 && ta(Y, (K) => {
      K.call(t, w, R, In);
    });
  }
  const Ca = function(w, R) {
    return !!($e && w.hasChildNodes() && !Hi(w.firstElementChild) && Rt(Kd, w.textContent) && Rt(Kd, w.innerHTML) || $e && w.namespaceURI === dn && my[R] && (Hi(w.firstElementChild) || typeof w.textContent == "string" && Rt(by[R], w.textContent)) || w.nodeType === nn.processingInstruction || $e && w.nodeType === nn.comment && Rt(Wd, w.data));
  }, Vi = function(w, R) {
    if (w instanceof RegExp)
      return Rt(w, R);
    if (w instanceof Function) {
      for (var K = arguments.length, re = new Array(K > 2 ? K - 2 : 0), fe = 2; fe < K; fe++)
        re[fe - 2] = arguments[fe];
      return !!w(R, ...re);
    }
    return !1;
  }, xs = function(w, R, K) {
    if (!H[R] && Ns(R) && Vi(q.tagNameCheck, R))
      return !1;
    if (Ui && !un[R]) {
      const re = D(w), fe = O(w);
      if (fe && re) {
        const ye = fe.length;
        for (let We = ye - 1; We >= 0; --We) {
          const et = w === K ? E(fe[We], !0) : fe[We];
          re.insertBefore(et, A(w));
        }
      }
    }
    return Cn(w), !0;
  }, Ta = function(w, R, K, re) {
    return w.length === 0 ? R : R === K || R === re ? an(R) : R;
  }, qt = function(w, R) {
    return w === R || D(w) !== null ? !1 : (ga && _a(w), !0);
  }, Gi = function(w, R) {
    if (Wt(Ae.beforeSanitizeElements, w, null), qt(w, R))
      return !0;
    if (Sa(w))
      return Cn(w), !0;
    const K = ot(de(w));
    if (k = Ta(Ae.uponSanitizeElement, k, L, st), Wt(Ae.uponSanitizeElement, w, {
      tagName: K,
      allowedTags: k
    }), qt(w, R))
      return !0;
    if (Ca(w, K))
      return Cn(w), !0;
    if (H[K] || !(V.tagCheck instanceof Function && V.tagCheck(K)) && !k[K]) {
      const fe = xs(w, K, R);
      return fe === !1 && Wt(Ae.afterSanitizeElements, w, null), fe;
    }
    if (Q(w) === nn.element && !ks(w) || (K === "noscript" || K === "noembed" || K === "noframes") && Rt(vy, w.innerHTML))
      return Cn(w), !0;
    if (Ne && w.nodeType === nn.text) {
      const fe = wa(w.textContent);
      w.textContent !== fe && (_r(t.removed, {
        element: w.cloneNode()
      }), w.textContent = fe);
    }
    return Wt(Ae.afterSanitizeElements, w, null), !1;
  }, ar = function(w, R, K) {
    if (J[R] || nr(R, w) || Bt && (R === "id" || R === "name") && (K in n || K in Cs))
      return !1;
    const re = N[R] || V.attributeCheck instanceof Function && V.attributeCheck(R, w);
    return ae && Rt(ht, R) || ve && Rt(Qe, R) ? !0 : re ? Ga[R] || Rt(T, wr(K, B, "")) || (R === "src" || R === "xlink:href" || R === "href") && w !== "script" && Fd(K, "data:") === 0 && ys[w] || ge && !Rt(Gt, wr(K, B, "")) ? !0 : !K : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ns(w) && Vi(q.tagNameCheck, w) && Vi(q.attributeNameCheck, R, w) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      R === "is" && q.allowCustomizedBuiltInElements && Vi(q.tagNameCheck, K)
    );
  }, Rl = He({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ns = function(w) {
    return !Rl[xr(w)] && Rt(m, w);
  }, Il = function(w, R, K, re) {
    if (X && typeof h == "object" && typeof h.getAttributeType == "function" && !K)
      switch (h.getAttributeType(w, R)) {
        case "TrustedHTML":
          return F(re);
        case "TrustedScriptURL":
          return Z(re);
      }
    return re;
  }, Te = function(w, R, K, re) {
    try {
      K ? w.setAttributeNS(K, R, re) : w.setAttribute(R, re), Sa(w) ? Cn(w) : Dd(t.removed);
    } catch {
      Pn(R, w);
    }
  }, $n = function(w) {
    Wt(Ae.beforeSanitizeAttributes, w, null);
    const R = w.attributes;
    if (!R || Sa(w))
      return;
    N = Ta(Ae.uponSanitizeAttribute, N, U, ut);
    const K = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let re = R.length;
    const fe = ot(w.nodeName);
    for (; re--; ) {
      const ye = R[re], We = ye.name, et = ye.namespaceURI, mt = ye.value, Tt = ot(We), fn = mt;
      let pt = We === "value" ? fn : Zb(fn);
      if (K.attrName = Tt, K.attrValue = pt, K.keepAttr = !0, K.forceKeepAttr = void 0, Wt(Ae.uponSanitizeAttribute, w, K), pt = K.attrValue, pi && (Tt === "id" || Tt === "name") && Fd(pt, zi) !== 0 && (Pn(We, w, ye), pt = zi + pt), $e && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, pt)) {
        Pn(We, w, ye);
        continue;
      }
      if (Tt === "attributename" && Md(pt, "href")) {
        Pn(We, w, ye);
        continue;
      }
      if (!K.forceKeepAttr) {
        if (!K.keepAttr) {
          Pn(We, w, ye);
          continue;
        }
        if (!Ce && Rt(gy, pt)) {
          Pn(We, w, ye);
          continue;
        }
        if (Ne && (pt = wa(pt)), !ar(fe, Tt, pt)) {
          Pn(We, w, ye);
          continue;
        }
        pt = Il(fe, Tt, et, pt), pt !== fn && Te(w, We, et, pt);
      }
    }
    Wt(Ae.afterSanitizeAttributes, w, null);
  }, gt = function(w) {
    let R = null;
    const K = ji(w);
    for (Wt(Ae.beforeSanitizeShadowDOM, w, null); R = K.nextNode(); )
      if (Wt(Ae.uponSanitizeShadowNode, R, null), Gi(R, w), $n(R), Tn(R.content) && gt(R.content), Q(R) === nn.element) {
        const re = M(R);
        Tn(re) && (En(re), gt(re));
      }
    Wt(Ae.afterSanitizeShadowDOM, w, null);
  }, En = function(w) {
    const R = [{
      node: w,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const K = R.pop();
      if (K.shadow) {
        gt(K.shadow);
        continue;
      }
      const re = K.node, ye = Q(re) === nn.element, We = O(re);
      if (We)
        for (let et = We.length - 1; et >= 0; --et)
          R.push({
            node: We[et],
            shadow: null
          });
      if (ye) {
        const et = P ? P(re) : null;
        if (typeof et == "string" && ot(et) === "template") {
          const mt = re.content;
          Tn(mt) && R.push({
            node: mt,
            shadow: null
          });
        }
      }
      if (ye) {
        const et = M(re);
        Tn(et) && R.push({
          node: null,
          shadow: et
        }, {
          node: et,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(Y) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, K = null, re = null, fe = null;
    if (Ka = !Y, Ka && (Y = "<!-->"), typeof Y != "string" && !Hi(Y) && (Y = ny(Y), typeof Y != "string"))
      throw Ji("dirty is not a string, aborting");
    if (!t.isSupported)
      return Y;
    nt ? (k = st, N = ut) : ya(w), (Ae.uponSanitizeElement.length > 0 || Ae.uponSanitizeAttribute.length > 0) && (k = an(k)), Ae.uponSanitizeAttribute.length > 0 && (N = an(N)), t.removed = [];
    const ye = ga && typeof Y != "string" && Hi(Y);
    if (ye) {
      Kt(Y);
      const mt = de(Y);
      if (typeof mt == "string") {
        const Tt = ot(mt);
        if (!k[Tt] || H[Tt])
          throw Bi(Y), Ji("root node is forbidden and cannot be sanitized in-place");
      }
      if (Sa(Y))
        throw Bi(Y), Ji("root node is clobbered and cannot be sanitized in-place");
      try {
        En(Y);
      } catch (Tt) {
        throw Bi(Y), Tt;
      }
    } else if (Hi(Y))
      R = Os("<!---->"), K = R.ownerDocument.importNode(Y, !0), K.nodeType === nn.element && K.nodeName === "BODY" || K.nodeName === "HTML" ? R = K : R.appendChild(K), En(K);
    else {
      if (!Ct && !Ne && !De && // eslint-disable-next-line unicorn/prefer-includes
      Y.indexOf("<") === -1)
        return X && Ge ? F(Y) : Y;
      if (R = Os(Y), !R)
        return Ct ? null : Ge ? le : "";
    }
    R && vt && Cn(R.firstChild);
    const We = ye ? Y : R;
    try {
      const mt = ji(We);
      for (; re = mt.nextNode(); )
        Gi(re, We), $n(re), Tn(re.content) && gt(re.content);
    } catch (mt) {
      throw ye && (Bi(Y), ta(t.removed, (Tt) => {
        Tt.element && _a(Tt.element);
      })), mt;
    }
    if (ye)
      return ta(t.removed, (mt) => {
        mt.element && _a(mt.element);
      }), Ne && ir(Y), Y;
    if (Ct) {
      if (Ne && ir(R), Jt)
        for (fe = we.call(R.ownerDocument); R.firstChild; )
          fe.appendChild(R.firstChild);
      else
        fe = R;
      return (N.shadowroot || N.shadowrootmode) && (fe = Ke.call(i, fe, !0)), fe;
    }
    let et = De ? R.outerHTML : R.innerHTML;
    return De && k["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Rt(hy, R.ownerDocument.doctype.name) && (et = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + et), Ne && (et = wa(et)), X && Ge ? F(et) : et;
  }, t.setConfig = function() {
    let Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ya(Y), nt = !0, st = k, ut = N;
  }, t.clearConfig = function() {
    In = null, nt = !1, st = null, ut = null, X = me, le = "";
  }, t.isValidAttribute = function(Y, w, R) {
    In || ya({});
    const K = ot(Y), re = ot(w);
    return ar(K, re, R);
  }, t.addHook = function(Y, w) {
    typeof w == "function" && Zt(Ae, Y) && _r(Ae[Y], w);
  }, t.removeHook = function(Y, w) {
    if (Zt(Ae, Y)) {
      if (w !== void 0) {
        const R = Yb(Ae[Y], w);
        return R === -1 ? void 0 : Xb(Ae[Y], R, 1)[0];
      }
      return Dd(Ae[Y]);
    }
  }, t.removeHooks = function(Y) {
    Zt(Ae, Y) && (Ae[Y] = []);
  }, t.removeAllHooks = function() {
    Ae = qd();
  }, t;
}
var dp = up();
function _u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ic, Yd;
function wy() {
  if (Yd) return ic;
  Yd = 1;
  var e = /["'&<>]/;
  ic = t;
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
  return ic;
}
var Sy = wy();
const _o = /* @__PURE__ */ _u(Sy);
function Cy() {
  return globalThis._nc_l10n_locale;
}
function Ty() {
  return Cy().replaceAll(/_/g, "-");
}
function Sl() {
  return globalThis._nc_l10n_language;
}
function Ey(e) {
  const t = Sl();
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
function fp(e) {
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
  }, l = (A) => A, f = (o.sanitize ? dp.sanitize : l) || l, u = o.escape ? _o : l, h = (A) => typeof A == "string" || typeof A == "number", S = (A, O, D) => A.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (M, W) => {
    if (O === void 0 || !(W in O))
      return u(M);
    const I = O[W];
    return h(I) ? u(`${I}`) : typeof I == "object" && h(I.value) ? (I.escape !== !1 ? _o : l)(`${I.value}`) : u(M);
  });
  let x = (a?.bundle ?? fp(e)).translations[t] || t;
  return x = Array.isArray(x) ? x[0] : x, f(typeof r == "object" || s !== void 0 ? S(
    x,
    r,
    s
  ) : x);
}
function Un(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? fp(e), l = o.translations[s];
  if (typeof l < "u") {
    const f = l;
    if (Array.isArray(f)) {
      const u = o.pluralFunction(i);
      return y(e, f[u], a, i, r);
    }
  }
  return i === 1 ? y(e, t, a, i, r) : y(e, n, a, i, r);
}
function Ay(e, t = Sl()) {
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
class wo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? wo.GLOBAL_SCOPE_PERSISTENT : wo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class ky {
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
    return new wo(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function hp(e) {
  return new ky(e);
}
function Oy() {
  try {
    return yu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var ac, Xd;
function pp() {
  if (Xd) return ac;
  Xd = 1;
  var e = {};
  return ac = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, ac;
}
var rc, Zd;
function vp() {
  if (Zd) return rc;
  Zd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return rc = {
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
  }, rc;
}
var Ks = { exports: {} }, Jd;
function xy() {
  return Jd || (Jd = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = vp(), r = pp();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], f = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const S = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [S, i]
    ], x = (O) => {
      for (const [D, M] of E)
        O = O.split(`${D}*`).join(`${D}{0,${M}}`).split(`${D}+`).join(`${D}{1,${M}}`);
      return O;
    }, A = (O, D, M) => {
      const W = x(D), I = h++;
      r(O, I, D), u[O] = I, l[I] = D, f[I] = W, s[I] = new RegExp(D, M ? "g" : void 0), o[I] = new RegExp(W, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${S}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${S}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Ks, Ks.exports)), Ks.exports;
}
var sc, Qd;
function Ny() {
  if (Qd) return sc;
  Qd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return sc = (i) => i ? typeof i != "object" ? e : i : t, sc;
}
var oc, ef;
function Ly() {
  if (ef) return oc;
  ef = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return oc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, oc;
}
var lc, tf;
function gp() {
  if (tf) return lc;
  tf = 1;
  const e = pp(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = vp(), { safeRe: i, t: a } = xy(), r = Ny(), { compareIdentifiers: s } = Ly(), o = (f, u) => {
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
  return lc = l, lc;
}
var cc, nf;
function Ry() {
  if (nf) return cc;
  nf = 1;
  const e = gp();
  return cc = (n, i) => new e(n, i).major, cc;
}
var Iy = Ry();
const af = /* @__PURE__ */ _u(Iy);
var uc, rf;
function Py() {
  if (rf) return uc;
  rf = 1;
  const e = gp();
  return uc = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, uc;
}
var dc, sf;
function $y() {
  if (sf) return dc;
  sf = 1;
  const e = Py();
  return dc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, dc;
}
var Dy = $y();
const My = /* @__PURE__ */ _u(Dy);
class Fy {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !My(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : af(t.getVersion()) !== af(this.getVersion()) && console.warn(
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
class zy {
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
function wu() {
  return Cr !== null ? Cr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Cr = new Fy(window._nc_event_bus) : Cr = window._nc_event_bus = new zy(), Cr);
}
function mp(e, t) {
  wu().subscribe(e, t);
}
function Uy(e, t) {
  wu().unsubscribe(e, t);
}
function oi(e, ...t) {
  wu().emit(e, ...t);
}
const bp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const By = Object.prototype.toString, jy = (e) => By.call(e) === "[object Object]", Oa = () => {
}, Hy = /* @__PURE__ */ Vy();
function Vy() {
  var e, t, n;
  return bp && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function fc(e) {
  return Array.isArray(e) ? e : [e];
}
function Gy(e, t, n) {
  return tt(e, t, {
    ...n,
    immediate: !0
  });
}
const yp = bp ? window : void 0;
function Nr(e) {
  var t;
  const n = ri(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ba(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = G(() => {
    const i = fc(ri(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Gy(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Nr(r))) !== null && i !== void 0 ? i : [yp].filter((r) => r != null),
      fc(ri(n.value ? e[1] : e[0])),
      fc(b(n.value ? e[2] : e[1])),
      ri(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const f = jy(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((S) => r.map((E) => t(h, S, E, f))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let of = !1;
function lf(e, t, n = {}) {
  const { window: i = yp, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Oa,
    cancel: Oa,
    trigger: Oa
  } : Oa;
  if (Hy && !of) {
    of = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((D) => D.addEventListener("click", Oa, O)), i.document.documentElement.addEventListener("click", Oa, O);
  }
  let l = !0;
  const f = (O) => ri(a).some((D) => {
    if (typeof D == "string") return Array.from(i.document.querySelectorAll(D)).some((M) => M === O.target || O.composedPath().includes(M));
    {
      const M = Nr(D);
      return M && (O.target === M || O.composedPath().includes(M));
    }
  });
  function u(O) {
    const D = ri(O);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function h(O, D) {
    const M = ri(O), W = M.$.subTree && M.$.subTree.children;
    return W == null || !Array.isArray(W) ? !1 : W.some((I) => I.el === D.target || D.composedPath().includes(I.el));
  }
  const S = (O) => {
    const D = Nr(e);
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
    Ba(i, "click", (O) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), S(O));
    }, {
      passive: !0,
      capture: r
    }),
    Ba(i, "pointerdown", (O) => {
      const D = Nr(e);
      l = !f(O) && !!(D && !O.composedPath().includes(D));
    }, { passive: !0 }),
    s && Ba(i, "blur", (O) => {
      setTimeout(() => {
        const D = Nr(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !D?.contains(i.document.activeElement) && t(O);
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
function Ky(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Pt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Pt({
    x: 0,
    y: 0
  }), f = G(() => o.x - l.x), u = G(() => o.y - l.y), { max: h, abs: S } = Math, E = G(() => h(S(f.value), S(u.value)) >= n), x = /* @__PURE__ */ dh(!1), A = G(() => E.value ? S(f.value) > S(u.value) ? f.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), O = (Q) => [Q.touches[0].clientX, Q.touches[0].clientY], D = (Q, de) => {
    o.x = Q, o.y = de;
  }, M = (Q, de) => {
    l.x = Q, l.y = de;
  }, W = {
    passive: s,
    capture: !s
  }, I = (Q) => {
    x.value && a?.(Q, A.value), x.value = !1;
  }, P = [
    Ba(e, "touchstart", (Q) => {
      if (Q.touches.length !== 1) return;
      const [de, X] = O(Q);
      D(de, X), M(de, X), r?.(Q);
    }, W),
    Ba(e, "touchmove", (Q) => {
      if (Q.touches.length !== 1) return;
      const [de, X] = O(Q);
      M(de, X), W.capture && !W.passive && Math.abs(f.value) > Math.abs(u.value) && Q.preventDefault(), !x.value && E.value && (x.value = !0), x.value && i?.(Q);
    }, W),
    Ba(e, ["touchend", "touchcancel"], I, W)
  ];
  return {
    isSwiping: x,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: f,
    lengthY: u,
    stop: () => P.forEach((Q) => Q())
  };
}
var Wy = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = wm(), r = _m(), s = /* @__PURE__ */ xe([]), o = G(() => s.value.reduce((B, m) => (B[~~m.id] = m) && B, {})), l = G(() => s.value.length), f = /* @__PURE__ */ xe(null), u = /* @__PURE__ */ xe(!1), h = /* @__PURE__ */ xe({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), S = /* @__PURE__ */ xe({
      splitter: null,
      timeoutId: null
    }), E = G(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), x = () => {
      document.addEventListener("mousemove", D, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", D, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", D, { passive: !1 }), document.removeEventListener("touchend", M));
    }, O = (B, m) => {
      let T = B.target.closest(".splitpanes__splitter");
      if (T) {
        let { left: k, top: L } = T.getBoundingClientRect(), { clientX: N, clientY: U } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
        h.value.cursorOffset = i.horizontal ? U - L : N - k;
      }
      x(), h.value.mouseDown = !0, h.value.activeSplitter = m, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, D = (B) => {
      h.value.mouseDown && (B.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        X(Q(B)), Qe("resize", { event: B }, !0);
      }));
    }, M = (B) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), Qe("resized", { event: B }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, W = (B, m) => {
      "ontouchstart" in window && (B.preventDefault(), S.value.splitter === m ? (clearTimeout(S.value.timeoutId), S.value.timeoutId = null, I(B, m), S.value.splitter = null) : (S.value.splitter = m, S.value.timeoutId = setTimeout(() => S.value.splitter = null, 500))), h.value.dragging || Qe("splitter-click", {
        event: B,
        index: m
      }, !0);
    }, I = (B, m) => {
      if (Qe("splitter-dblclick", {
        event: B,
        index: m
      }, !0), i.maximizePanes) {
        let T = 0;
        s.value = s.value.map((k, L) => (k.size = L === m ? k.max : k.min, L !== m && (T += k.min), k)), s.value[m].size -= T, Qe("pane-maximize", {
          event: B,
          index: m,
          pane: s.value[m]
        }), Qe("resized", {
          event: B,
          index: m
        }, !0);
      }
    }, P = (B, m) => {
      if (!i.keyboardStep) return;
      let T = i.horizontal ? B.key === "ArrowDown" : B.key === "ArrowRight", k = i.horizontal ? B.key === "ArrowUp" : B.key === "ArrowLeft";
      if (!T && !k) return;
      B.preventDefault(), h.value.activeSplitter = m;
      let L = (T ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), N = ee(m) + s.value[m].size;
      le(Math.min(Math.max(N + L * i.keyboardStep, 0), 100)), Qe("resize", { event: B }, !0), Qe("resized", { event: B }, !0), h.value.activeSplitter = null;
    }, ce = (B, m) => {
      let T = o.value[m];
      T && Qe("pane-click", {
        event: B,
        index: T.index,
        pane: T
      });
    }, Q = (B) => {
      let m = f.value.getBoundingClientRect(), { clientX: T, clientY: k } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
      return {
        x: T - (i.horizontal ? 0 : h.value.cursorOffset) - m.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - m.top
      };
    }, de = (B) => {
      B = B[i.horizontal ? "y" : "x"];
      let m = f.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (B = m - B), B * 100 / m;
    }, X = (B) => {
      le(de(B));
    }, le = (B) => {
      let m = h.value.activeSplitter;
      if (m === null || m >= s.value.length - 1) return;
      let T = {
        prevPanesSize: ee(m),
        nextPanesSize: ie(m),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : T.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : T.nextPanesSize);
      B = Math.max(Math.min(B, L), k);
      let N = [m, m + 1], U = s.value[N[0]] || null, q = s.value[N[1]] || null, H = U !== null && U.max < 100 && B >= U.max + T.prevPanesSize, J = q !== null && q.max < 100 && B <= 100 - (q.max + ie(m + 1));
      if (H || J) {
        H ? (U.size = U.max, q.size = Math.min(Math.max(100 - U.max - T.prevPanesSize - T.nextPanesSize, q.min), q.max)) : (U.size = Math.min(Math.max(100 - q.max - T.prevPanesSize - ie(m + 1), U.min), U.max), q.size = q.max);
        return;
      }
      if (i.pushOtherPanes) {
        let V = me(T, B);
        if (!V) return;
        ({ sums: T, panesToResize: N } = V), U = s.value[N[0]] || null, q = s.value[N[1]] || null;
      }
      U !== null && (U.size = Math.min(Math.max(B - T.prevPanesSize - T.prevReachedMinPanes, U.min), U.max)), q !== null && (q.size = Math.min(Math.max(100 - B - T.nextPanesSize - T.nextReachedMinPanes, q.min), q.max));
    }, me = (B, m) => {
      let T = h.value.activeSplitter, k = [T, T + 1];
      if (m < B.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = $(T).index, B.prevReachedMinPanes = 0, k[0] < T && s.value.forEach((L, N) => {
          N > k[0] && N <= T && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), k[0] === void 0) return B.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((L, N) => {
          N > 0 && N <= T && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), s.value[k[1]].size = 100 - B.prevReachedMinPanes - s.value[0].min - B.prevPanesSize - B.nextPanesSize, null;
        B.prevPanesSize = ee(k[0]);
      }
      return m > 100 - B.nextPanesSize - s.value[k[1]].min && (k[1] = F(T).index, B.nextReachedMinPanes = 0, k[1] > T + 1 && s.value.forEach((L, N) => {
        N > T && N < k[1] && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), B.nextPanesSize = k[1] === void 0 ? 0 : ie(k[1] - 1), k[1] === void 0) ? (B.nextReachedMinPanes = 0, s.value.forEach((L, N) => {
        N >= T + 1 && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - B.prevPanesSize - ie(k[0] - 1)), null) : {
        sums: B,
        panesToResize: k
      };
    }, ee = (B) => s.value.reduce((m, T, k) => m + (k < B ? T.size : 0), 0), ie = (B) => s.value.reduce((m, T, k) => m + (k > B + 1 ? T.size : 0), 0), $ = (B) => [...s.value].reverse().find((m) => m.index < B && m.size > m.min) || {}, F = (B) => s.value.find((m) => m.index > B + 1 && m.size > m.min) || {}, Z = () => {
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
    }, he = () => {
      let B = Array.from(f.value?.children || []);
      for (let T of B) T.className.includes("splitpanes__splitter") && ne(T);
      let m = 0;
      for (let T of B) T.className.includes("splitpanes__pane") && (!m && i.firstSplitter ? oe(m, T, !0) : m && oe(m, T), m++);
    }, pe = ({ uid: B, ...m }) => {
      let T = o.value[B];
      for (let [k, L] of Object.entries(m)) T[k] = L;
    }, we = !1, be = (B) => {
      let m = -1;
      Array.from(f.value?.children || []).some((T) => (T.className.includes("splitpanes__pane") && m++, T.isSameNode(B.el))), s.value.splice(m, 0, {
        ...B,
        index: m
      }), s.value.forEach((T, k) => T.index = k), u.value && !we && (we = !0, rn(() => {
        he(), Ae({ addedPane: s.value[m] }), Qe("pane-add", { pane: s.value[m] }), we = !1;
      }));
    }, Ke = (B) => {
      let m = s.value.findIndex((k) => k.id === B);
      s.value[m].el = null;
      let T = s.value.splice(m, 1)[0];
      s.value.forEach((k, L) => k.index = L), rn(() => {
        he(), Qe("pane-remove", { pane: T }), Ae({ removedPane: {
          ...T
        } });
      });
    }, Ae = (B = {}) => {
      !B.addedPane && !B.removedPane ? ct() : s.value.some((m) => m.givenSize !== null || m.min || m.max < 100) ? ft(B) : lt(), u.value && Qe("resized");
    }, lt = () => {
      let B = 100 / l.value, m = 100, T = [], k = [];
      for (let L of s.value) L.size = Math.max(Math.min(B, L.max), L.min), m -= L.size, L.size >= L.max && T.push(L.id), L.size <= L.min && k.push(L.id);
      Math.abs(m) > 0.1 && ht(m, T, k);
    }, ct = () => {
      let B = 100, m = [], T = [], k = 0;
      for (let N of s.value) B -= N.size, N.givenSize !== null && k++, N.size >= N.max && m.push(N.id), N.size <= N.min && T.push(N.id);
      let L = 100;
      if (B > 0.1) {
        for (let N of s.value) N.givenSize === null && (N.size = Math.max(Math.min(B / (l.value - k), N.max), N.min)), L -= N.size;
        L > 0.1 && ht(L, m, T);
      }
    }, ft = ({ addedPane: B, removedPane: m } = {}) => {
      let T = s.value.reduce((H, J) => H + (J.givenSize === null ? 0 : J.givenSize), 0), k = s.value.filter((H) => H.givenSize === null).length, L = k > 0 ? (100 - T) / k : 0, N = 0, U = [], q = [];
      for (let H of s.value) N -= H.size, H.size >= H.max && U.push(H.id), H.size <= H.min && q.push(H.id);
      if (!(Math.abs(N) < 0.1)) {
        N = 100;
        for (let H of s.value) H.givenSize === null && (H.size = Math.max(Math.min(L, H.max), H.min)), N -= H.size, H.size >= H.max && U.push(H.id), H.size <= H.min && q.push(H.id);
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
    }, Qe = (B, m = void 0, T = !1) => {
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
    tt(() => i.firstSplitter, () => he()), tt(() => i.horizontal, (B) => rn(() => {
      n("direction-changed", {
        horizontal: B,
        panes: s.value.map((m) => ({
          min: m.min,
          max: m.max,
          size: m.size
        }))
      });
    })), Di(() => {
      Z(), he(), Ae(), Qe("ready"), u.value = !0;
    }), Va(() => u.value = !1);
    let Gt = () => {
      let { class: B, ...m } = a;
      return Xt("div", {
        ref: f,
        class: [E.value, B],
        ...m
      }, r.default?.());
    };
    return mn("panes", s), mn("indexedPanes", o), mn("horizontal", G(() => i.horizontal)), mn("requestUpdate", pe), mn("onPaneAdd", be), mn("onPaneRemove", Ke), mn("onPaneClick", ce), (B, m) => (_(), ze(hu(Gt)));
  }
}), qy = {
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
    let t = e, n = Dt("requestUpdate"), i = Dt("onPaneAdd"), a = Dt("horizontal"), r = Dt("onPaneRemove"), s = Dt("onPaneClick"), o = pa()?.uid, l = Dt("indexedPanes"), f = G(() => l.value[o]), u = /* @__PURE__ */ xe(null), h = G(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), S.value);
    }), S = G(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = G(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), x = G(() => {
      let A = f.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return tt(() => h.value, (A) => n({
      uid: o,
      size: A
    })), tt(() => S.value, (A) => n({
      uid: o,
      min: A
    })), tt(() => E.value, (A) => n({
      uid: o,
      max: A
    })), Di(() => {
      i({
        id: o,
        el: u.value,
        min: S.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Va(() => r(o)), (A, O) => (_(), C("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: O[0] ||= (D) => b(s)(D, A._.uid),
      style: ln(x.value)
    }, [Pe(A.$slots, "default")], 4));
  }
}, Yy = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Xy = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", Zy = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Jy = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Su = 1024, _p = Su / 2, So = (e) => document.documentElement.clientWidth < e, wp = /* @__PURE__ */ xe(So(Su)), Sp = /* @__PURE__ */ xe(So(_p));
window.addEventListener("resize", () => {
  wp.value = So(Su), Sp.value = So(_p);
}, { passive: !0 });
function ms() {
  return /* @__PURE__ */ Xr(wp);
}
function Qy() {
  return /* @__PURE__ */ Xr(Sp);
}
class e_ {
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
    return Un("", t, n, i, a, { bundle: this.bundle });
  }
}
class t_ {
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
    return this.setLanguage(Sl().replace("-", "_"));
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
    const t = new e_((n) => Ay(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function n_() {
  return new t_();
}
const Cp = n_().detectLanguage().build(), Et = (...e) => Cp.gettext(...e);
function Mi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Sl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        Cp.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const i_ = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], a_ = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], r_ = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], s_ = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], o_ = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], l_ = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], c_ = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], u_ = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], d_ = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const f_ = /* @__PURE__ */ Symbol(""), [h_] = window.OC?.config?.version?.split(".") ?? [], Tp = Number.parseInt(h_ ?? "35"), p_ = Tp < 32, Fi = Tp < 34, v_ = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function g_() {
  return Dt(v_, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Je = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, m_ = { class: "button-vue__wrapper" }, b_ = { class: "button-vue__icon" }, y_ = { class: "button-vue__text" }, __ = /* @__PURE__ */ Lt({
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
    const n = e, i = t, { formBoxItemClass: a } = g_(), r = Dt(f_, null) !== null, s = G(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = G(() => s.value === "button" && typeof n.pressed == "boolean"), l = G(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), f = G(() => l.value.startsWith("tertiary")), u = G(() => n.alignment.split("-")[0]), h = G(() => n.alignment.includes("-")), S = Dt("NcPopover:trigger:attrs", () => ({}), !1), E = G(() => S()), x = G(() => {
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
    return (O, D) => (_(), ze(hu(s.value), Ut({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": f.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": b(p_),
          "button-vue--legacy34": b(Fi)
        },
        b(a)
      ]],
      "aria-label": e.ariaLabel
    }, x.value, { onClick: A }), {
      default: Oe(() => [
        c("span", m_, [
          c("span", b_, [
            Pe(O.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", y_, [
            Pe(O.$slots, "default", {}, () => [
              Ie(g(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Gn = /* @__PURE__ */ Je(__, [["__scopeId", "data-v-47ce59a3"]]), w_ = ["aria-hidden", "aria-label"], S_ = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, C_ = ["d"], T_ = ["innerHTML"], E_ = /* @__PURE__ */ Lt({
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
    vb((a) => ({
      fb515064: n.value
    }));
    const t = e, n = G(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = G(() => {
      if (!t.svg || t.path)
        return;
      const a = dp.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (_(), C("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ee(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (_(), C("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, T_)) : (_(), C("svg", S_, [
        c("path", { d: e.path }, null, 8, C_)
      ]))
    ], 10, w_));
  }
}), Cl = /* @__PURE__ */ Je(E_, [["__scopeId", "data-v-aaedb1c3"]]);
k_();
function A_(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), oi("csrf-token-update", { token: e, _internal: !0 }));
}
function k_() {
  mp("csrf-token-update", ({ token: e, _internal: t }) => {
    t || A_(e);
  });
}
hp("public").persist().build();
let xa;
function cf(e, t) {
  return e ? e.getAttribute(t) : null;
}
function O_() {
  if (xa !== void 0)
    return xa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = cf(e, "data-user");
  return t === null ? (xa = null, xa) : (xa = {
    uid: t,
    displayName: cf(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, xa);
}
var bt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(bt || {});
class x_ {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + bt[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === bt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case bt.Debug:
          console.debug(this.formatMessage(n, bt.Debug, i), i);
          break;
        case bt.Info:
          console.info(this.formatMessage(n, bt.Info, i), i);
          break;
        case bt.Warn:
          console.warn(this.formatMessage(n, bt.Warn, i), i);
          break;
        case bt.Error:
          console.error(this.formatMessage(n, bt.Error, i), i);
          break;
        case bt.Fatal:
        default:
          console.error(this.formatMessage(n, bt.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(bt.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(bt.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(bt.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(bt.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(bt.Fatal, t, Object.assign({}, this.context, n));
  }
}
function N_(e) {
  return new x_(e);
}
class L_ {
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
    const t = O_();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? bt.Warn, window._oc_debug && (t.context.level = bt.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function R_() {
  return new L_(N_);
}
const da = R_().detectUser().setApp("@nextcloud/vue").build();
function I_(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Ep = "missing-app-name";
try {
  Ep = "library";
} catch {
  da.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const P_ = Ep;
let $_ = "";
try {
  $_ = "0.1.0-alpha.171";
} catch {
  da.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Ap() {
  return Dt("appName", P_);
}
const D_ = I_(() => {
  const e = yu("core", "apps", []), t = Ap();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), Fc = Ey();
Mi(c_);
const M_ = /* @__PURE__ */ Lt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = ms();
    tt(t, n), Di(() => {
      n(t.value);
    }), Va(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && oi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (_(), ze(b(Gn), {
      "aria-label": b(Et)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": b(t) }]),
      title: b(Et)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Oe(() => [
        _e(b(Cl), {
          directional: "",
          path: b(Yy)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), F_ = /* @__PURE__ */ Je(M_, [["__scopeId", "data-v-a28923a1"]]), uf = hp("nextcloud").persist().build(), z_ = Oy().theming?.name ?? "Nextcloud", U_ = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: F_,
    Pane: qy,
    Splitpanes: Wy
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
      appName: Ap(),
      localizedAppName: D_(),
      isMobile: ms(),
      isRtl: Fc
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
      return e.add(z_), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = Ky(this.$el, {
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
      uf.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), da.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(uf.getItem(this.paneConfigID), 10);
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
}, B_ = {
  key: 0,
  class: "hidden-visually"
}, j_ = { class: "app-content-wrapper__list" }, H_ = {
  key: 1,
  class: "app-content-wrapper"
};
function V_(e, t, n, i, a, r) {
  const s = Be("NcAppContentDetailsToggle"), o = Be("Pane"), l = Be("Splitpanes");
  return _(), C("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (_(), C("h1", B_, g(n.pageHeading), 1)) : j("", !0),
    e.$slots.list ? (_(), C(ue, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (_(), C("div", {
        key: 0,
        class: Ee(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (_(), ze(s, {
          key: 0,
          onClick: Ue(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : j("", !0),
        qe(c("div", j_, [
          Pe(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [za, !n.showDetails]
        ]),
        n.showDetails ? Pe(e.$slots, "default", { key: 1 }, void 0, !0) : j("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (_(), C("div", H_, [
        _e(l, {
          horizontal: n.layout === "horizontal-split",
          class: Ee(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Oe(() => [
            _e(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Oe(() => [
                Pe(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            _e(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Oe(() => [
                Pe(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : j("", !0)
    ], 64)) : j("", !0),
    e.$slots.list ? j("", !0) : Pe(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const G_ = /* @__PURE__ */ Je(U_, [["render", V_], ["__scopeId", "data-v-51427d61"]]);
var kp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Co = /* @__PURE__ */ kp.join(","), Op = typeof Element > "u", ha = Op ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, To = !Op && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Eo = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Eo(t.parentNode));
  return s;
}, K_ = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, xp = function(t, n, i) {
  if (Eo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Co));
  return n && ha.call(t, Co) && a.unshift(t), a = a.filter(i), a;
}, Ao = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!Eo(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, f = Ao(l, !0, i);
        i.flatten ? a.push.apply(a, f) : a.push({
          scopeParent: s,
          candidates: f
        });
      } else {
        var u = ha.call(s, Co);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), S = !Eo(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && S) {
          var E = Ao(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: s,
            candidates: E
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Np = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ra = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || K_(t)) && !Np(t) ? 0 : t.tabIndex;
}, W_ = function(t, n) {
  var i = ra(t);
  return i < 0 && n && !Np(t) ? 0 : i;
}, q_ = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Lp = function(t) {
  return t.tagName === "INPUT";
}, Y_ = function(t) {
  return Lp(t) && t.type === "hidden";
}, X_ = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, Z_ = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, J_ = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || To(t), i = function(o) {
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
  var r = Z_(a, t.form);
  return !r || r === t;
}, Q_ = function(t) {
  return Lp(t) && t.type === "radio";
}, e1 = function(t) {
  return Q_(t) && !J_(t);
}, t1 = function(t) {
  var n, i = t && To(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var f, u, h;
      i = To(a), a = (f = i) === null || f === void 0 ? void 0 : f.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, df = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, n1 = function(t, n) {
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
  var l = ha.call(t, "details>summary:first-of-type"), f = l ? t.parentElement : t;
  if (ha.call(f, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, S = To(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return df(t);
        t.assignedSlot ? t = t.assignedSlot : !h && S !== t.ownerDocument ? t = S.host : t = h;
      }
      t = u;
    }
    if (t1(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return df(t);
  return !1;
}, i1 = function(t) {
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
}, ko = function(t, n) {
  return !(n.disabled || Y_(n) || n1(n, t) || // For a details element with a summary, the summary element gets the focus
  X_(n) || i1(n));
}, zc = function(t, n) {
  return !(e1(n) || ra(n) < 0 || !ko(t, n));
}, a1 = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Rp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = W_(o, s), f = s ? Rp(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, f) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: f
    });
  }), i.sort(q_).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, r1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Ao([t], n.includeContainer, {
    filter: zc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: a1
  }) : i = xp(t, n.includeContainer, zc.bind(null, n)), Rp(i);
}, s1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Ao([t], n.includeContainer, {
    filter: ko.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = xp(t, n.includeContainer, ko.bind(null, n)), i;
}, Na = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ha.call(t, Co) === !1 ? !1 : zc(n, t);
}, o1 = /* @__PURE__ */ kp.concat("iframe:not([inert]):not([inert] *)").join(","), hc = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ha.call(t, o1) === !1 ? !1 : ko(n, t);
};
function Uc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function l1(e) {
  if (Array.isArray(e)) return Uc(e);
}
function ff(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Ip(e)) || t) {
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
function c1(e, t, n) {
  return (t = p1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function u1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function d1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function pf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hf(Object(n), !0).forEach(function(i) {
      c1(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hf(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function f1(e) {
  return l1(e) || u1(e) || Ip(e) || d1();
}
function h1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function p1(e) {
  var t = h1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ip(e, t) {
  if (e) {
    if (typeof e == "string") return Uc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Uc(e, t) : void 0;
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
}, v1 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, g1 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Mr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, m1 = function(t) {
  return Mr(t) && !t.shiftKey;
}, b1 = function(t) {
  return Mr(t) && t.shiftKey;
}, vf = function(t) {
  return setTimeout(t, 0);
}, Tr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Ws = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, y1 = [], Cu = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || y1, r = pf({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: m1,
    isKeyBackward: b1
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
  }, o, l = function($, F, Z) {
    return $ && $[F] !== void 0 ? $[F] : r[Z || F];
  }, f = function($, F) {
    var Z = typeof F?.composedPath == "function" ? F.composedPath() : void 0;
    return s.containerGroups.findIndex(function(oe) {
      var ne = oe.container, he = oe.tabbableNodes;
      return ne.contains($) || Z?.includes(ne) || he.find(function(pe) {
        return pe === $;
      });
    });
  }, u = function($) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Z = F.hasFallback, oe = Z === void 0 ? !1 : Z, ne = F.params, he = ne === void 0 ? [] : ne, pe = r[$];
    if (typeof pe == "function" && (pe = pe.apply(void 0, f1(he))), pe === !0 && (pe = void 0), !pe) {
      if (pe === void 0 || pe === !1)
        return pe;
      throw new Error("`".concat($, "` was specified but was not a node, or did not return a node"));
    }
    var we = pe;
    if (typeof pe == "string") {
      try {
        we = i.querySelector(pe);
      } catch (be) {
        throw new Error("`".concat($, '` appears to be an invalid selector; error="').concat(be.message, '"'));
      }
      if (!we && !oe)
        throw new Error("`".concat($, "` as selector refers to no known node"));
    }
    return we;
  }, h = function($) {
    var F = $.activeElement;
    return F ? F.shadowRoot && F.shadowRoot.activeElement !== null ? h(F.shadowRoot) : F : null;
  }, S = function() {
    var $ = u("initialFocus", {
      hasFallback: !0
    });
    if ($ === !1)
      return !1;
    if ($ === void 0 || $ && !hc($, r.tabbableOptions)) {
      var F = h(i);
      if (f(F) >= 0)
        $ = F;
      else {
        var Z = s.tabbableGroups[0], oe = Z && Z.firstTabbableNode;
        $ = oe || u("fallbackFocus");
      }
    } else $ === null && ($ = u("fallbackFocus"));
    if (!$)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return $;
  }, E = function() {
    if (s.containerGroups = s.containers.map(function($) {
      var F = r1($, r.tabbableOptions), Z = s1($, r.tabbableOptions), oe = F.length > 0 ? F[0] : void 0, ne = F.length > 0 ? F[F.length - 1] : void 0, he = Z.find(function(be) {
        return Na(be);
      }), pe = Z.slice().reverse().find(function(be) {
        return Na(be);
      }), we = !!F.find(function(be) {
        return ra(be) > 0;
      });
      return {
        container: $,
        tabbableNodes: F,
        focusableNodes: Z,
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
        firstDomTabbableNode: he,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: pe,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ke) {
          var Ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, lt = F.indexOf(Ke);
          return lt < 0 ? Ae ? Z.slice(Z.indexOf(Ke) + 1).find(function(ct) {
            return Na(ct);
          }) : Z.slice(0, Z.indexOf(Ke)).reverse().find(function(ct) {
            return Na(ct);
          }) : F[lt + (Ae ? 1 : -1)];
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
      }), s.mostRecentlyFocusedNode = $, v1($) && $.select();
    }
  }, A = function($) {
    var F = u("setReturnFocus", {
      params: [$]
    });
    return F || (F === !1 ? !1 : $);
  }, O = function($) {
    var F = $.target, Z = $.event, oe = $.isBackward, ne = oe === void 0 ? !1 : oe;
    F = F || Ws(Z), E();
    var he = null;
    if (s.tabbableGroups.length > 0) {
      var pe = f(F, Z), we = pe >= 0 ? s.containerGroups[pe] : void 0;
      if (pe < 0)
        ne ? he = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : he = s.tabbableGroups[0].firstTabbableNode;
      else if (ne) {
        var be = s.tabbableGroups.findIndex(function(ht) {
          var Qe = ht.firstTabbableNode;
          return F === Qe;
        });
        if (be < 0 && (we.container === F || hc(F, r.tabbableOptions) && !Na(F, r.tabbableOptions) && !we.nextTabbableNode(F, !1)) && (be = pe), be >= 0) {
          var Ke = be === 0 ? s.tabbableGroups.length - 1 : be - 1, Ae = s.tabbableGroups[Ke];
          he = ra(F) >= 0 ? Ae.lastTabbableNode : Ae.lastDomTabbableNode;
        } else Mr(Z) || (he = we.nextTabbableNode(F, !1));
      } else {
        var lt = s.tabbableGroups.findIndex(function(ht) {
          var Qe = ht.lastTabbableNode;
          return F === Qe;
        });
        if (lt < 0 && (we.container === F || hc(F, r.tabbableOptions) && !Na(F, r.tabbableOptions) && !we.nextTabbableNode(F)) && (lt = pe), lt >= 0) {
          var ct = lt === s.tabbableGroups.length - 1 ? 0 : lt + 1, ft = s.tabbableGroups[ct];
          he = ra(F) >= 0 ? ft.firstTabbableNode : ft.firstDomTabbableNode;
        } else Mr(Z) || (he = we.nextTabbableNode(F));
      }
    } else
      he = u("fallbackFocus");
    return he;
  }, D = function($) {
    var F = Ws($);
    if (!(f(F, $) >= 0)) {
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
  }, M = function($) {
    var F = Ws($), Z = f(F, $) >= 0;
    if (Z || F instanceof Document)
      Z && (s.mostRecentlyFocusedNode = F);
    else {
      $.stopImmediatePropagation();
      var oe, ne = !0;
      if (s.mostRecentlyFocusedNode)
        if (ra(s.mostRecentlyFocusedNode) > 0) {
          var he = f(s.mostRecentlyFocusedNode), pe = s.containerGroups[he].tabbableNodes;
          if (pe.length > 0) {
            var we = pe.findIndex(function(be) {
              return be === s.mostRecentlyFocusedNode;
            });
            we >= 0 && (r.isKeyForward(s.recentNavEvent) ? we + 1 < pe.length && (oe = pe[we + 1], ne = !1) : we - 1 >= 0 && (oe = pe[we - 1], ne = !1));
          }
        } else
          s.containerGroups.some(function(be) {
            return be.tabbableNodes.some(function(Ke) {
              return ra(Ke) > 0;
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
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = $;
    var Z = O({
      event: $,
      isBackward: F
    });
    Z && (Mr($) && $.preventDefault(), x(Z));
  }, I = function($) {
    (r.isKeyForward($) || r.isKeyBackward($)) && W($, r.isKeyBackward($));
  }, P = function($) {
    g1($) && Tr(r.escapeDeactivates, $) !== !1 && ($.preventDefault(), o.deactivate());
  }, ce = function($) {
    var F = Ws($);
    f(F, $) >= 0 || Tr(r.clickOutsideDeactivates, $) || Tr(r.allowOutsideClick, $) || ($.preventDefault(), $.stopImmediatePropagation());
  }, Q = function() {
    if (s.active) {
      ii.activateTrap(a, o);
      var $;
      return r.delayInitialFocus ? $ = new Promise(function(F) {
        s.delayInitialFocusTimer = vf(function() {
          x(S()), F();
        });
      }) : x(S()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", D, {
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
    var F = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set(), oe = ff($), ne;
    try {
      for (oe.s(); !(ne = oe.n()).done; ) {
        var he = ne.value;
        F.add(he);
        for (var pe = typeof ShadowRoot < "u" && he.getRootNode() instanceof ShadowRoot, we = he; we; ) {
          F.add(we);
          var be = we.parentElement, Ke = [];
          be ? Ke = be.children : !be && pe && (Ke = we.getRootNode().children, be = we.getRootNode().host, pe = typeof ShadowRoot < "u" && be.getRootNode() instanceof ShadowRoot);
          var Ae = ff(Ke), lt;
          try {
            for (Ae.s(); !(lt = Ae.n()).done; ) {
              var ct = lt.value;
              Z.add(ct);
            }
          } catch (ft) {
            Ae.e(ft);
          } finally {
            Ae.f();
          }
          we = be;
        }
      }
    } catch (ft) {
      oe.e(ft);
    } finally {
      oe.f();
    }
    F.forEach(function(ft) {
      Z.delete(ft);
    }), s.adjacentElements = Z;
  }, X = function() {
    if (s.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", D, !0), i.removeEventListener("touchstart", D, !0), i.removeEventListener("click", ce, !0), i.removeEventListener("keydown", I, !0), i.removeEventListener("keydown", P), o;
  }, le = function($) {
    var F = s.mostRecentlyFocusedNode;
    if (F) {
      var Z = $.some(function(ne) {
        var he = Array.from(ne.removedNodes);
        return he.some(function(pe) {
          return pe === F || typeof pe.contains == "function" && pe.contains(F);
        });
      });
      if (Z && s.containers.some(function(ne) {
        return ne?.isConnected;
      })) {
        E();
        var oe = S();
        x(oe);
      }
    }
  }, me = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(le) : void 0, ee = function() {
    me && (me.disconnect(), s.active && !s.paused && s.containers.map(function($) {
      me.observe($, {
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
      var F = l($, "onActivate"), Z = l($, "onPostActivate"), oe = l($, "checkCanFocusTrap"), ne = ii.getActiveTrap(a), he = !1;
      if (ne && !ne.paused) {
        var pe;
        (pe = ne._setSubtreeIsolation) === null || pe === void 0 || pe.call(ne, !1), he = !0;
      }
      try {
        oe || E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), F?.({
          trap: o
        });
        var we = function() {
          oe && E();
          var Ae = function() {
            o._setSubtreeIsolation(!0), ee(), Z?.({
              trap: o
            });
          }, lt = Q();
          lt ? lt.then(Ae) : Ae();
        };
        if (oe)
          return oe(s.containers.concat()).then(we, we), this;
        we();
      } catch (Ke) {
        if (ne === ii.getActiveTrap(a) && he) {
          var be;
          (be = ne._setSubtreeIsolation) === null || be === void 0 || be.call(ne, !0);
        }
        throw Ke;
      }
      return this;
    },
    deactivate: function($) {
      if (!s.active)
        return this;
      var F = pf({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, $);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), X(), s.active = !1, s.paused = !1, ee(), ii.deactivateTrap(a, o);
      var Z = l(F, "onDeactivate"), oe = l(F, "onPostDeactivate"), ne = l(F, "checkCanReturnFocus"), he = l(F, "delayReturnFocus"), pe = l(F, "returnFocus", "returnFocusOnDeactivate");
      Z?.({
        trap: o
      });
      var we = function() {
        pe && x(A(s.nodeFocusedBeforeActivation)), oe?.({
          trap: o
        });
      }, be = function() {
        he && pe ? vf(we) : we();
      };
      return pe && ne ? (ne(A(s.nodeFocusedBeforeActivation)).then(be, be), this) : (be(), this);
    },
    pause: function($) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, $)) : this;
    },
    unpause: function($) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, $)) : this;
    },
    updateContainerElements: function($) {
      var F = [].concat($).filter(Boolean);
      return s.containers = F.map(function(Z) {
        return typeof Z == "string" ? i.querySelector(Z) : Z;
      }), r.isolateSubtrees && de(s.containers), s.active && (E(), s.paused || o._setSubtreeIsolation(!0)), ee(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function($, F) {
        if (s.paused === $)
          return this;
        if (s.paused = $, $) {
          var Z = l(F, "onPause"), oe = l(F, "onPostPause");
          Z?.({
            trap: o
          }), X(), o._setSubtreeIsolation(!1), ee(), oe?.({
            trap: o
          });
        } else {
          var ne = l(F, "onUnpause"), he = l(F, "onPostUnpause");
          ne?.({
            trap: o
          });
          var pe = function() {
            E();
            var be = function() {
              o._setSubtreeIsolation(!0), ee(), he?.({
                trap: o
              });
            }, Ke = Q();
            Ke ? Ke.then(be) : be();
          };
          pe();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function($) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(F) {
          var Z;
          $ ? r.isolateSubtrees === "aria-hidden" ? ((F.ariaHidden === "true" || ((Z = F.getAttribute("aria-hidden")) === null || Z === void 0 ? void 0 : Z.toLowerCase()) === "true") && s.alreadySilent.add(F), F.setAttribute("aria-hidden", "true")) : ((F.inert || F.hasAttribute("inert")) && s.alreadySilent.add(F), F.setAttribute("inert", !0)) : s.alreadySilent.has(F) || (r.isolateSubtrees === "aria-hidden" ? F.removeAttribute("aria-hidden") : F.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const Pp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), _1 = /* @__PURE__ */ Lt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Pp]: {
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
function w1(e, t, n, i, a, r) {
  return _(), C("ul", {
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
      style: ln(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Pe(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const $p = /* @__PURE__ */ Je(_1, [["render", w1], ["__scopeId", "data-v-3e73e246"]]);
function rs() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function S1() {
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
const Dp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Mp = /* @__PURE__ */ Symbol.for("NcContent:selector");
Mi(s_);
const C1 = { class: "app-navigation-toggle-wrapper" }, T1 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Mh(e, "open"), n = G(() => t.value ? Et("Close navigation") : Et("Open navigation"));
    return (i, a) => (_(), C("div", C1, [
      _e(b(Gn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Oe(() => [
          _e(Cl, {
            path: b(Jy),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), E1 = /* @__PURE__ */ Je(T1, [["__scopeId", "data-v-e8177cc7"]]), A1 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], k1 = { class: "app-navigation__search" }, O1 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Dt(
      Dp,
      () => ib(),
      !1
    ), a = cm("appNavigationContainer"), r = ms(), s = /* @__PURE__ */ xe(!r.value), o = G(() => r.value && s.value);
    em(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), tt(r, () => {
      s.value = !r.value;
    }), tt(o, () => {
      u();
    }), Di(() => {
      i(!0), mp("toggle-navigation", f), oi("navigation-toggled", {
        open: s.value
      }), n = Cu(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: rs(),
        escapeDeactivates: !1
      }), u();
    }), ps(() => {
      i(!1), Uy("toggle-navigation", f), n.deactivate();
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
    function f({ open: S }) {
      return l(S);
    }
    function u() {
      o.value ? n.activate() : n.deactivate();
    }
    function h() {
      r.value && l(!1);
    }
    return (S, E) => (_(), C("div", {
      ref: "appNavigationContainer",
      class: Ee(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": b(Fi)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: yt(h, ["esc"])
      }, [
        c("div", k1, [
          Pe(S.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !S.$slots.list }])
        }, [
          Pe(S.$slots, "default", {}, void 0, !0)
        ], 2),
        S.$slots.list ? (_(), ze($p, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Oe(() => [
            Pe(S.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : j("", !0),
        Pe(S.$slots, "footer", {}, void 0, !0)
      ], 40, A1),
      _e(E1, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), x1 = /* @__PURE__ */ Je(O1, [["__scopeId", "data-v-37908cd4"]]), N1 = {
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
}, L1 = ["aria-hidden", "aria-label"], R1 = ["fill", "width", "height"], I1 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, P1 = { key: 0 };
function $1(e, t, n, i, a, r) {
  return _(), C("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", I1, [
        n.title ? (_(), C("title", P1, g(n.title), 1)) : j("", !0)
      ])
    ], 8, R1))
  ], 16, L1);
}
const D1 = /* @__PURE__ */ Je(N1, [["render", $1]]), M1 = {
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
}, F1 = ["aria-hidden", "aria-label"], z1 = ["fill", "width", "height"], U1 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, B1 = { key: 0 };
function j1(e, t, n, i, a, r) {
  return _(), C("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", U1, [
        n.title ? (_(), C("title", B1, g(n.title), 1)) : j("", !0)
      ])
    ], 8, z1))
  ], 16, F1);
}
const H1 = /* @__PURE__ */ Je(M1, [["render", j1]]), V1 = {
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
}, G1 = ["aria-hidden", "aria-label"], K1 = ["fill", "width", "height"], W1 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, q1 = { key: 0 };
function Y1(e, t, n, i, a, r) {
  return _(), C("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", W1, [
        n.title ? (_(), C("title", q1, g(n.title), 1)) : j("", !0)
      ])
    ], 8, K1))
  ], 16, G1);
}
const Fp = /* @__PURE__ */ Je(V1, [["render", Y1]]), X1 = {
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
}, Z1 = ["aria-hidden", "aria-label"], J1 = ["fill", "width", "height"], Q1 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, e0 = { key: 0 };
function t0(e, t, n, i, a, r) {
  return _(), C("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Q1, [
        n.title ? (_(), C("title", e0, g(n.title), 1)) : j("", !0)
      ])
    ], 8, J1))
  ], 16, Z1);
}
const zp = /* @__PURE__ */ Je(X1, [["render", t0]]);
Mi(a_);
const n0 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Fp,
    IconClose: zp,
    NcButton: Gn
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
    return { isLegacy34: Fi };
  },
  data() {
    return {
      labelConfirm: Et("Confirm changes"),
      labelCancel: Et("Cancel changes")
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
}, i0 = ["placeholder"];
function a0(e, t, n, i, a, r) {
  const s = Be("IconArrowRight"), o = Be("NcButton"), l = Be("IconClose");
  return _(), C("div", {
    class: Ee(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = Ue((...f) => r.confirm && r.confirm(...f), ["prevent"])),
      onKeydown: t[2] || (t[2] = yt(Ue((...f) => r.cancel && r.cancel(...f), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ue(() => {
      }, ["stop", "prevent"]))
    }, [
      qe(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (f) => r.valueModel = f),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, i0), [
        [Yt, r.valueModel]
      ]),
      _e(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ue(r.confirm, ["stop", "prevent"])
      }, {
        icon: Oe(() => [
          _e(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      _e(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Ue(r.cancel, ["stop", "prevent"])
      }, {
        icon: Oe(() => [
          _e(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const r0 = /* @__PURE__ */ Je(n0, [["render", a0], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Tl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Tu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Up = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), s0 = {
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
}, Bp = {
  mixins: [s0],
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
      from: Up
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
}, o0 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Cl
  },
  mixins: [Bp],
  inject: {
    isInSemanticMenu: {
      from: Tu,
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
      mdiCheck: Xy,
      mdiChevronRight: Zy
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
}, l0 = ["role"], c0 = ["aria-label", "disabled", "title", "type"], u0 = { class: "action-button__longtext-wrapper" }, d0 = {
  key: 0,
  class: "action-button__name"
}, f0 = ["textContent"], h0 = {
  key: 2,
  class: "action-button__text"
}, p0 = ["textContent"], v0 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function g0(e, t, n, i, a, r) {
  const s = Be("NcIconSvgWrapper");
  return _(), C("li", {
    class: Ee(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", Ut({
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
          class: Ee([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: ln({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", u0, [
        e.name ? (_(), C("strong", d0, g(e.name), 1)) : j("", !0),
        e.isLongText ? (_(), C("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: g(e.text)
        }, null, 8, f0)) : (_(), C("span", h0, g(e.text), 1)),
        n.description ? (_(), C("span", {
          key: 3,
          class: "action-button__description",
          textContent: g(n.description)
        }, null, 8, p0)) : j("", !0)
      ]),
      n.isMenu ? (_(), ze(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (_(), ze(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (_(), C("span", v0)) : j("", !0),
      j("", !0)
    ], 16, c0)
  ], 10, l0);
}
const m0 = /* @__PURE__ */ Je(o0, [["render", g0], ["__scopeId", "data-v-6c2daf4e"]]);
function b0(e, t = {}) {
  const n = S1();
  tt(e, () => {
    ri(t.disabled) || (ri(e) ? n.pause() : n.unpause());
  }), ps(() => {
    n.unpause();
  });
}
const y0 = ["top", "right", "bottom", "left"], gf = ["start", "end"], mf = /* @__PURE__ */ y0.reduce((e, t) => e.concat(t, t + "-" + gf[0], t + "-" + gf[1]), []), ss = Math.min, Bc = Math.max, _0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jp(e, t, n) {
  return Bc(e, ss(t, n));
}
function va(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function di(e) {
  return e.split("-")[0];
}
function Nn(e) {
  return e.split("-")[1];
}
function Hp(e) {
  return e === "x" ? "y" : "x";
}
function Eu(e) {
  return e === "y" ? "height" : "width";
}
function ai(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Au(e) {
  return Hp(ai(e));
}
function Vp(e, t, n) {
  n === void 0 && (n = !1);
  const i = Nn(e), a = Au(e), r = Eu(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = xo(s)), [s, xo(s)];
}
function w0(e) {
  const t = xo(e);
  return [Oo(e), t, Oo(t)];
}
function Oo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const bf = ["left", "right"], yf = ["right", "left"], S0 = ["top", "bottom"], C0 = ["bottom", "top"];
function T0(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? yf : bf : t ? bf : yf;
    case "left":
    case "right":
      return t ? S0 : C0;
    default:
      return [];
  }
}
function E0(e, t, n, i) {
  const a = Nn(e);
  let r = T0(di(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(Oo)))), r;
}
function xo(e) {
  const t = di(e);
  return _0[t] + e.slice(t.length);
}
function A0(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Gp(e) {
  return typeof e != "number" ? A0(e) : {
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
function _f(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ai(t), s = Au(t), o = Eu(s), l = di(t), f = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, S = i[o] / 2 - a[o] / 2;
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
  const x = Nn(t);
  return x && (E[s] += S * (x === "end" ? 1 : -1) * (n && f ? -1 : 1)), E;
}
async function k0(e, t) {
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
  } = va(t, e), x = Gp(E), O = o[S ? h === "floating" ? "reference" : "floating" : h], D = Fr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: f,
    rootBoundary: u,
    strategy: l
  })), M = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, W = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), I = await (r.isElement == null ? void 0 : r.isElement(W)) && await (r.getScale == null ? void 0 : r.getScale(W)) || {
    x: 1,
    y: 1
  }, P = Fr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: M,
    offsetParent: W,
    strategy: l
  }) : M);
  return {
    top: (D.top - P.top + x.top) / I.y,
    bottom: (P.bottom - D.bottom + x.bottom) / I.y,
    left: (D.left - P.left + x.left) / I.x,
    right: (P.right - D.right + x.right) / I.x
  };
}
const O0 = 50, x0 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: k0
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = _f(f, i, l), S = i, E = 0;
  const x = {};
  for (let A = 0; A < r.length; A++) {
    const O = r[A];
    if (!O)
      continue;
    const {
      name: D,
      fn: M
    } = O, {
      x: W,
      y: I,
      data: P,
      reset: ce
    } = await M({
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
    }, ce && E < O0 && (E++, typeof ce == "object" && (ce.placement && (S = ce.placement), ce.rects && (f = ce.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ce.rects), {
      x: u,
      y: h
    } = _f(f, S, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: S,
    strategy: a,
    middlewareData: x
  };
}, N0 = (e) => ({
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
    } = va(e, t) || {};
    if (f == null)
      return {};
    const h = Gp(u), S = {
      x: n,
      y: i
    }, E = Au(a), x = Eu(E), A = await s.getDimensions(f), O = E === "y", D = O ? "top" : "left", M = O ? "bottom" : "right", W = O ? "clientHeight" : "clientWidth", I = r.reference[x] + r.reference[E] - S[E] - r.floating[x], P = S[E] - r.reference[E], ce = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let Q = ce ? ce[W] : 0;
    (!Q || !await (s.isElement == null ? void 0 : s.isElement(ce))) && (Q = o.floating[W] || r.floating[x]);
    const de = I / 2 - P / 2, X = Q / 2 - A[x] / 2 - 1, le = ss(h[D], X), me = ss(h[M], X), ee = Q - A[x] - me, ie = Q / 2 - A[x] / 2 + de, $ = jp(le, ie, ee), F = !l.arrow && Nn(a) != null && ie !== $ && r.reference[x] / 2 - (ie < le ? le : me) - A[x] / 2 < 0, Z = F ? ie < le ? ie - le : ie - ee : 0;
    return {
      [E]: S[E] + Z,
      data: {
        [E]: $,
        centerOffset: ie - $ - Z,
        ...F && {
          alignmentOffset: Z
        }
      },
      reset: F
    };
  }
});
function L0(e, t, n) {
  return (e ? [...n.filter((a) => Nn(a) === e), ...n.filter((a) => Nn(a) !== e)] : n.filter((a) => di(a) === a)).filter((a) => e ? Nn(a) === e || (t ? Oo(a) !== a : !1) : !0);
}
const R0 = function(e) {
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
        allowedPlacements: S = mf,
        autoAlignment: E = !0,
        ...x
      } = va(e, t), A = h !== void 0 || S === mf ? L0(h || null, E, S) : S, O = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, D = A[O];
      if (D == null)
        return {};
      if (o !== D)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await l.detectOverflow(t, x), W = Vp(D, r, await (l.isRTL == null ? void 0 : l.isRTL(f.floating))), I = [M[di(D)], M[W[0]], M[W[1]]], P = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
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
      const Q = P.map((le) => {
        const me = Nn(le.placement);
        return [le.placement, me && u ? (
          // Check along the mainAxis and main crossAxis side.
          le.overflows.slice(0, 2).reduce((ee, ie) => ee + ie, 0)
        ) : (
          // Check only the mainAxis.
          le.overflows[0]
        ), le.overflows];
      }).sort((le, me) => le[1] - me[1]), X = ((a = Q.filter((le) => le[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Nn(le[0]) ? 2 : 3
      ).every((me) => me <= 0))[0]) == null ? void 0 : a[0]) || Q[0][0];
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
}, I0 = function(e) {
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
      } = va(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const D = di(a), M = ai(o), W = di(o) === o, I = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), P = S || (W || !A ? [xo(o)] : w0(o)), ce = x !== "none";
      !S && ce && P.push(...E0(o, A, x, I));
      const Q = [o, ...P], de = await l.detectOverflow(t, O), X = [];
      let le = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && X.push(de[D]), h) {
        const $ = Vp(a, s, I);
        X.push(de[$[0]], de[$[1]]);
      }
      if (le = [...le, {
        placement: a,
        overflows: X
      }], !X.every(($) => $ <= 0)) {
        var me, ee;
        const $ = (((me = r.flip) == null ? void 0 : me.index) || 0) + 1, F = Q[$];
        if (F && (!(h === "alignment" ? M !== ai(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        le.every((ne) => ai(ne.placement) === M ? ne.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: le
            },
            reset: {
              placement: F
            }
          };
        let Z = (ee = le.filter((oe) => oe.overflows[0] <= 0).sort((oe, ne) => oe.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!Z)
          switch (E) {
            case "bestFit": {
              var ie;
              const oe = (ie = le.filter((ne) => {
                if (ce) {
                  const he = ai(ne.placement);
                  return he === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  he === "y";
                }
                return !0;
              }).map((ne) => [ne.placement, ne.overflows.filter((he) => he > 0).reduce((he, pe) => he + pe, 0)]).sort((ne, he) => ne[1] - he[1])[0]) == null ? void 0 : ie[0];
              oe && (Z = oe);
              break;
            }
            case "initialPlacement":
              Z = o;
              break;
          }
        if (a !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
}, P0 = /* @__PURE__ */ new Set(["left", "top"]);
async function $0(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = di(n), o = Nn(n), l = ai(n) === "y", f = P0.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = va(t, e);
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
const D0 = function(e) {
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
      } = t, l = await $0(t, e);
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
}, M0 = function(e) {
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
              x: W,
              y: I
            } = M;
            return {
              x: W,
              y: I
            };
          }
        },
        ...f
      } = va(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, f), S = ai(a), E = Hp(S);
      let x = u[E], A = u[S];
      const O = (M, W) => jp(W + h[M === "y" ? "top" : "left"], W, W - h[M === "y" ? "bottom" : "right"]);
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
}, F0 = function(e) {
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
      } = va(e, t), l = await a.detectOverflow(t, o), f = di(n), u = Nn(n), h = ai(n) === "y", {
        width: S,
        height: E
      } = i.floating;
      let x, A;
      f === "top" || f === "bottom" ? (x = f, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = f, x = u === "end" ? "top" : "bottom");
      const O = E - l.top - l.bottom, D = S - l.left - l.right, M = ss(E - l[x], O), W = ss(S - l[A], D), I = t.middlewareData.shift, P = !I;
      let ce = M, Q = W;
      I != null && I.enabled.x && (Q = D), I != null && I.enabled.y && (ce = O), P && !u && (h ? Q = S - 2 * Bc(l.left, l.right) : ce = E - 2 * Bc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: Q,
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
function Kn(e) {
  return yn(e).getComputedStyle(e);
}
const wf = Math.min, zr = Math.max, No = Math.round;
function Kp(e) {
  const t = Kn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = No(n) !== a || No(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function $i(e) {
  return qp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let qs;
function Wp() {
  if (qs) return qs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (qs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), qs) : navigator.userAgent;
}
function Wn(e) {
  return e instanceof yn(e).HTMLElement;
}
function Ni(e) {
  return e instanceof yn(e).Element;
}
function qp(e) {
  return e instanceof yn(e).Node;
}
function Sf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof yn(e).ShadowRoot || e instanceof ShadowRoot;
}
function El(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Kn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function z0(e) {
  return ["table", "td", "th"].includes($i(e));
}
function jc(e) {
  const t = /firefox/i.test(Wp()), n = Kn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Yp() {
  return !/^((?!chrome|android).)*safari/i.test(Wp());
}
function ku(e) {
  return ["html", "body", "#document"].includes($i(e));
}
function Xp(e) {
  return Ni(e) ? e : e.contextElement;
}
const Zp = { x: 1, y: 1 };
function ja(e) {
  const t = Xp(e);
  if (!Wn(t)) return Zp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Kp(t);
  let s = (r ? No(n.width) : n.width) / i, o = (r ? No(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function os(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = Xp(e);
  let l = Zp;
  t && (i ? Ni(i) && (l = ja(i)) : l = ja(e));
  const f = o ? yn(o) : window, u = !Yp() && n;
  let h = (s.left + (u && ((a = f.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, S = (s.top + (u && ((r = f.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, E = s.width / l.x, x = s.height / l.y;
  if (o) {
    const A = yn(o), O = i && Ni(i) ? yn(i) : i;
    let D = A.frameElement;
    for (; D && i && O !== A; ) {
      const M = ja(D), W = D.getBoundingClientRect(), I = getComputedStyle(D);
      W.x += (D.clientLeft + parseFloat(I.paddingLeft)) * M.x, W.y += (D.clientTop + parseFloat(I.paddingTop)) * M.y, h *= M.x, S *= M.y, E *= M.x, x *= M.y, h += W.x, S += W.y, D = yn(D).frameElement;
    }
  }
  return { width: E, height: x, top: S, right: h + E, bottom: S + x, left: h, x: h, y: S };
}
function Li(e) {
  return ((qp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Al(e) {
  return Ni(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Jp(e) {
  return os(Li(e)).left + Al(e).scrollLeft;
}
function ls(e) {
  if ($i(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Sf(e) && e.host || Li(e);
  return Sf(t) ? t.host : t;
}
function Qp(e) {
  const t = ls(e);
  return ku(t) ? t.ownerDocument.body : Wn(t) && El(t) ? t : Qp(t);
}
function Lo(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Qp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = yn(i);
  return a ? t.concat(r, r.visualViewport || [], El(i) ? i : []) : t.concat(i, Lo(i));
}
function Cf(e, t, n) {
  return t === "viewport" ? Fr((function(i, a) {
    const r = yn(i), s = Li(i), o = r.visualViewport;
    let l = s.clientWidth, f = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, f = o.height;
      const S = Yp();
      (S || !S && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: f, x: u, y: h };
  })(e, n)) : Ni(t) ? Fr((function(i, a) {
    const r = os(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Wn(i) ? ja(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Fr((function(i) {
    const a = Li(i), r = Al(i), s = i.ownerDocument.body, o = zr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = zr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let f = -r.scrollLeft + Jp(i);
    const u = -r.scrollTop;
    return Kn(s).direction === "rtl" && (f += zr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: f, y: u };
  })(Li(e)));
}
function Tf(e) {
  return Wn(e) && Kn(e).position !== "fixed" ? e.offsetParent : null;
}
function Ef(e) {
  const t = yn(e);
  let n = Tf(e);
  for (; n && z0(n) && Kn(n).position === "static"; ) n = Tf(n);
  return n && ($i(n) === "html" || $i(n) === "body" && Kn(n).position === "static" && !jc(n)) ? t : n || (function(i) {
    let a = ls(i);
    for (; Wn(a) && !ku(a); ) {
      if (jc(a)) return a;
      a = ls(a);
    }
    return null;
  })(e) || t;
}
function U0(e, t, n) {
  const i = Wn(t), a = Li(t), r = os(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if (($i(t) !== "body" || El(a)) && (s = Al(t)), Wn(t)) {
    const l = os(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = Jp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const B0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(f, u) {
    const h = u.get(f);
    if (h) return h;
    let S = Lo(f).filter(((O) => Ni(O) && $i(O) !== "body")), E = null;
    const x = Kn(f).position === "fixed";
    let A = x ? ls(f) : f;
    for (; Ni(A) && !ku(A); ) {
      const O = Kn(A), D = jc(A);
      (x ? D || E : D || O.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = O : S = S.filter(((M) => M !== A)), A = ls(A);
    }
    return u.set(f, S), S;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((f, u) => {
    const h = Cf(t, u, a);
    return f.top = zr(h.top, f.top), f.right = wf(h.right, f.right), f.bottom = wf(h.bottom, f.bottom), f.left = zr(h.left, f.left), f;
  }), Cf(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Wn(n), r = Li(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && (($i(n) !== "body" || El(r)) && (s = Al(n)), Wn(n))) {
    const f = os(n);
    o = ja(n), l.x = f.x + n.clientLeft, l.y = f.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Ni, getDimensions: function(e) {
  return Wn(e) ? Kp(e) : e.getBoundingClientRect();
}, getOffsetParent: Ef, getDocumentElement: Li, getScale: ja, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Ef, r = this.getDimensions;
  return { reference: U0(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Kn(e).direction === "rtl" }, j0 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: B0, ...n }, r = { ...a.platform, _c: i };
  return x0(e, t, { ...a, platform: r });
}, Ri = {
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
function Hc(e, t) {
  let n = Ri.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Ri.themes[n.$extend] || {} : (n = null, i = Ri[t]) : n = null;
  while (n);
  return i;
}
function H0(e) {
  const t = [e];
  let n = Ri.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Ri.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Af(e) {
  const t = [e];
  let n = Ri.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Ri.themes[n.$extend] || {}) : n = null;
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
let ev = !1;
typeof window < "u" && typeof navigator < "u" && (ev = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const V0 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), kf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Of = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function xf(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function pc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const On = [];
let Qi = null;
const Nf = {};
function Lf(e) {
  let t = Nf[e];
  return t || (t = Nf[e] = []), t;
}
let Vc = function() {
};
typeof window < "u" && (Vc = window.Element);
function je(e) {
  return function(t) {
    return Hc(t.theme, e);
  };
}
const vc = "__floating-vue__popper", tv = () => /* @__PURE__ */ Lt({
  name: "VPopper",
  provide() {
    return {
      [vc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [vc]: { default: null }
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
      default: je("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: je("positioningDisabled")
    },
    placement: {
      type: String,
      default: je("placement"),
      validator: (e) => V0.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: je("delay")
    },
    distance: {
      type: [Number, String],
      default: je("distance")
    },
    skidding: {
      type: [Number, String],
      default: je("skidding")
    },
    triggers: {
      type: Array,
      default: je("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: je("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: je("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: je("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: je("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: je("popperHideTriggers")
    },
    container: {
      type: [String, Object, Vc, Boolean],
      default: je("container")
    },
    boundary: {
      type: [String, Vc],
      default: je("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: je("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: je("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: je("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: je("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: je("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: je("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: je("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: je("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: je("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: je("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: je("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: je("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: je("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: je("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: je("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: je("flip")
    },
    shift: {
      type: Boolean,
      default: je("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: je("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: je("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: je("disposeTimeout")
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
      return (e = this[vc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(D0({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(R0({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(M0({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(I0({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(N0({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(F0({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await j0(this.$_referenceNode, this.$_popperNode, e);
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
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await pc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Lo(this.$_referenceNode),
        ...Lo(this.$_popperNode)
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
        for (let n = 0; n < On.length; n++)
          t = On[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      On.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Af(this.theme))
        Lf(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await pc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, xf(On, this), On.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Af(this.theme)) {
        const i = Lf(n);
        xf(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      Qi === this && (Qi = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await pc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, kf, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], kf, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Of, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Of, this.popperTriggers, this.popperHideTriggers, t);
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
        const t = this.$_popperNode.getBoundingClientRect(), n = Ur - Ei, i = Br - Ai, a = t.left + t.width / 2 - Ei + (t.top + t.height / 2) - Ai + t.width + t.height, r = Ei + n * a, s = Ai + i * a;
        return Ys(Ei, Ai, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Ys(Ei, Ai, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Ys(Ei, Ai, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Ys(Ei, Ai, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (ev) {
    const e = cs ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Rf(t), e), document.addEventListener("touchend", (t) => If(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Rf(e), !0), window.addEventListener("click", (e) => If(e, !1), !0);
  window.addEventListener("resize", W0);
}
function Rf(e, t) {
  for (let n = 0; n < On.length; n++) {
    const i = On[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function If(e, t) {
  G0(e, t);
}
function G0(e, t) {
  const n = {};
  for (let i = On.length - 1; i >= 0; i--) {
    const a = On[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Pf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && Pf(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Pf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || K0(e, n) && !t;
}
function K0(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function W0() {
  for (let e = 0; e < On.length; e++)
    On[e].$_computePosition();
}
let Ei = 0, Ai = 0, Ur = 0, Br = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ei = Ur, Ai = Br, Ur = e.clientX, Br = e.clientY;
}, cs ? {
  passive: !0
} : void 0);
function Ys(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), f = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && f >= 0 && f <= 1;
}
const q0 = {
  extends: tv()
}, Ou = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function Y0(e, t, n, i, a, r) {
  return _(), C("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Pe(e.$slots, "default", ao(ts(e.slotData)))
  ], 2);
}
const X0 = /* @__PURE__ */ Ou(q0, [["render", Y0]]);
function Z0() {
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
let no;
function Gc() {
  Gc.init || (Gc.init = !0, no = Z0() !== -1);
}
var kl = {
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
    Gc(), rn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", no && this.$el.appendChild(e), e.data = "about:blank", no || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!no && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const J0 = /* @__PURE__ */ Zg();
Yg("data-v-b329ee4c");
const Q0 = {
  class: "resize-observer",
  tabindex: "-1"
};
Xg();
const ew = /* @__PURE__ */ J0((e, t, n, i, a, r) => (_(), ze("div", Q0)));
kl.render = ew;
kl.__scopeId = "data-v-b329ee4c";
kl.__file = "src/components/ResizeObserver.vue";
const nv = (e = "theme") => ({
  computed: {
    themeClass() {
      return H0(this[e]);
    }
  }
}), tw = /* @__PURE__ */ Lt({
  name: "VPopperContent",
  components: {
    ResizeObserver: kl
  },
  mixins: [
    nv()
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
}), nw = ["id", "aria-hidden", "tabindex", "data-popper-placement"], iw = {
  ref: "inner",
  class: "v-popper__inner"
}, aw = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), rw = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), sw = [
  aw,
  rw
];
function ow(e, t, n, i, a, r) {
  const s = Be("ResizeObserver");
  return _(), C("div", {
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
    style: ln(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = yt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    c("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (o) => e.autoHide && e.$emit("hide"))
    }),
    c("div", {
      class: "v-popper__wrapper",
      style: ln(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", iw, [
        e.mounted ? (_(), C(ue, { key: 0 }, [
          c("div", null, [
            Pe(e.$slots, "default")
          ]),
          e.handleResize ? (_(), ze(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : j("", !0)
        ], 64)) : j("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: ln(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, sw, 4)
    ], 4)
  ], 46, nw);
}
const iv = /* @__PURE__ */ Ou(tw, [["render", ow]]), av = {
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
let Kc = function() {
};
typeof window < "u" && (Kc = window.Element);
const lw = /* @__PURE__ */ Lt({
  name: "VPopperWrapper",
  components: {
    Popper: X0,
    PopperContent: iv
  },
  mixins: [
    av,
    nv("finalTheme")
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
      type: [String, Object, Kc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Kc],
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
function cw(e, t, n, i, a, r) {
  const s = Be("PopperContent"), o = Be("Popper");
  return _(), ze(o, Ut({ ref: "popper" }, e.$props, {
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
      isShown: f,
      shouldMountContent: u,
      skipTransition: h,
      autoHide: S,
      show: E,
      hide: x,
      handleResize: A,
      onResize: O,
      classes: D,
      result: M
    }) => [
      Pe(e.$slots, "default", {
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
        result: M,
        onHide: x,
        onResize: O
      }, {
        default: Oe(() => [
          Pe(e.$slots, "popper", {
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
const xu = /* @__PURE__ */ Ou(lw, [["render", cw]]), uw = {
  ...xu,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...xu
});
({
  ...xu
});
tv();
const $f = Ri, dw = uw, fw = /* @__PURE__ */ Lt({
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
}), hw = "_ncPopover_qgtYg", pw = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: hw
}, rv = "nc-popover-9";
$f.themes[rv] = structuredClone($f.themes.dropdown);
const vw = {
  name: "NcPopover",
  components: {
    Dropdown: dw,
    NcPopoverTriggerProvider: fw
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
      theme: rv
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
      return this.placement === "start" ? Fc ? "right" : "left" : this.placement === "end" ? Fc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Cu(e, {
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
function gw(e, t, n, i, a, r) {
  const s = Be("NcPopoverTriggerProvider"), o = Be("Dropdown");
  return _(), ze(o, {
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
      Pe(e.$slots, "default", ao(ts(l)))
    ]),
    default: Oe(() => [
      _e(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Oe((l) => [
          Pe(e.$slots, "trigger", ao(ts(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const mw = {
  $style: pw
}, Df = /* @__PURE__ */ Je(vw, [["render", gw], ["__cssModules", mw]]), bw = {
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
}, yw = ["aria-hidden", "aria-label"], _w = ["fill", "width", "height"], ww = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, Sw = { key: 0 };
function Cw(e, t, n, i, a, r) {
  return _(), C("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", ww, [
        n.title ? (_(), C("title", Sw, g(n.title), 1)) : j("", !0)
      ])
    ], 8, _w))
  ], 16, yw);
}
const Tw = /* @__PURE__ */ Je(bw, [["render", Cw]]);
Mi(i_);
function Nu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === xt)
        return !1;
      if (n.type === ue && !Nu(n.children))
        return !1;
      if (n.type === vs && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const Ew = ".focusable", Aw = {
  name: "NcActions",
  components: {
    NcButton: Gn,
    NcPopover: Df
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
      [Tu]: G(() => this.actionsMenuSemanticType === "menu"),
      [Up]: this.closeMenu
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
      default: Et("Actions")
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
      randomId: Tl()
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
    b0(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(Ew);
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
        A.type === ue && t(A.children, x);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((E) => s.includes(this.getActionName(E))), f = a.some((E) => r.includes(this.getActionName(E))), u = a.some((E) => o.includes(this.getActionName(E)));
    l ? this.actionsMenuSemanticType = "dialog" : f ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((x) => this.getActionName(x).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (E) => {
      const x = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(x) ? Xt("img", { class: "action-item__menutoggle__icon", src: x, alt: "" }) : Xt("span", { class: ["icon", x] })), O = E?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? O : "";
      let M = E?.props?.title;
      this.forceName || M || (M = O);
      const W = { ...E?.props ?? {} }, I = ["submit", "reset"].includes(W.type) ? W.modelValue : "button";
      return delete W.modelValue, delete W.type, Xt(
        Gn,
        Ut(
          W,
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
      const x = Nu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Xt("span", { class: ["icon", this.defaultIcon] }) : Xt(Tw, { size: 20 }), A = `${this.randomId}-trigger`;
      return Xt(
        Df,
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
          trigger: () => Xt(Gn, {
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
}, Ro = /* @__PURE__ */ Je(Aw, [["__scopeId", "data-v-7206c1f1"]]), kw = ["aria-label"], Ow = ["width", "height"], xw = ["fill"], Nw = ["fill"], Lw = { key: 0 }, Rw = /* @__PURE__ */ Lt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = G(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (_(), C("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (_(), C("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, xw),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (_(), C("title", Lw, g(e.name), 1)) : j("", !0)
        ], 8, Nw)
      ], 8, Ow))
    ], 8, kw));
  }
}), sv = /* @__PURE__ */ Je(Rw, [["__scopeId", "data-v-cf399190"]]), Wc = /* @__PURE__ */ Lt({
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
}), Iw = {
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
}, Pw = ["aria-hidden", "aria-label"], $w = ["fill", "width", "height"], Dw = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, Mw = { key: 0 };
function Fw(e, t, n, i, a, r) {
  return _(), C("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Dw, [
        n.title ? (_(), C("title", Mw, g(n.title), 1)) : j("", !0)
      ])
    ], 8, $w))
  ], 16, Pw);
}
const zw = /* @__PURE__ */ Je(Iw, [["render", Fw]]), Uw = {
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
}, Bw = ["aria-hidden", "aria-label"], jw = ["fill", "width", "height"], Hw = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, Vw = { key: 0 };
function Gw(e, t, n, i, a, r) {
  return _(), C("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Hw, [
        n.title ? (_(), C("title", Vw, g(n.title), 1)) : j("", !0)
      ])
    ], 8, jw))
  ], 16, Bw);
}
const Kw = /* @__PURE__ */ Je(Uw, [["render", Gw]]);
Mi(o_);
const Ww = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Gn,
    ChevronDown: D1,
    ChevronUp: H1
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
    return { isLegacy34: Fi };
  },
  computed: {
    labelButton() {
      return this.open ? Et("Collapse menu") : Et("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function qw(e, t, n, i, a, r) {
  const s = Be("ChevronUp"), o = Be("ChevronDown"), l = Be("NcButton");
  return _(), ze(l, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Oe(() => [
      n.open ? (_(), ze(s, {
        key: 0,
        size: 20
      })) : (_(), ze(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const Yw = /* @__PURE__ */ Je(Ww, [["render", qw], ["__scopeId", "data-v-cfbd3794"]]);
Mi(l_, d_);
const Xw = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Ro,
    NcActionButton: m0,
    NcAppNavigationIconCollapsible: Yw,
    NcInputConfirmCancel: r0,
    NcLoadingIcon: sv,
    NcVNodes: Wc,
    Pencil: zw,
    Undo: Kw
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Pp, default: null }
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
      default: () => Tl(),
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
      isLegacy34: Fi
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
      return this.editLabel ? this.editLabel : Et("Edit item");
    },
    undoButtonAriaLabel() {
      return Et("Undo changes");
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
}, Zw = ["id"], Jw = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], Qw = {
  key: 0,
  class: "editingContainer"
}, eS = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, tS = { class: "app-navigation-entry__deleted-description" }, nS = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, iS = {
  key: 0,
  class: "app-navigation-entry__children"
};
function aS(e, t, n, i, a, r) {
  const s = Be("NcLoadingIcon"), o = Be("NcInputConfirmCancel"), l = Be("Pencil"), f = Be("NcActionButton"), u = Be("Undo"), h = Be("NcActions"), S = Be("NcAppNavigationIconCollapsible");
  return _(), C("li", {
    id: n.id,
    class: Ee([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (_(), ze(hu(r.isRouterLink ? "router-link" : "NcVNodes"), ao(ts({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Oe(({ href: E, navigate: x, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: Ee(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          n.undo ? j("", !0) : (_(), C("a", {
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
            onKeydown: t[3] || (t[3] = yt(Ue((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Ee(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (_(), ze(s, { key: 0 })) : Pe(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, g(n.name), 3),
            a.editingActive ? (_(), C("div", Qw, [
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
          ], 40, Jw)),
          n.undo ? (_(), C("div", eS, [
            c("div", tS, g(n.name), 1)
          ])) : j("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (_(), C("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (_(), C("div", nS, [
              Pe(e.$slots, "counter", {}, void 0, !0)
            ])) : j("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (_(), ze(h, {
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
                Pe(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Oe(() => [
                n.editable && !a.editingActive ? (_(), ze(f, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Oe(() => [
                    _e(l, { size: 20 })
                  ]),
                  default: Oe(() => [
                    Ie(" " + g(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                n.undo ? (_(), ze(f, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Oe(() => [
                    _e(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                Pe(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : j("", !0)
          ], 2)) : j("", !0),
          n.allowCollapse && e.$slots.default ? (_(), ze(S, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Ue(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : j("", !0),
          Pe(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (_(), C("ul", iS, [
      Pe(e.$slots, "default", {}, void 0, !0)
    ])) : j("", !0)
  ], 10, Zw);
}
const Mf = /* @__PURE__ */ Je(Xw, [["render", aS], ["__scopeId", "data-v-01bef41b"]]), gc = /* @__PURE__ */ new WeakMap(), rS = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = lf(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = lf(e, a, Object.assign({ capture: n }, r));
    }
    gc.set(e, i);
  },
  unmounted(e) {
    const t = gc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), gc.delete(e);
  }
}, sS = {
  mounted(e) {
    e.focus();
  }
}, oS = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", lS = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", qc = "numeric", Yc = "ascii", Xc = "alpha", jr = "asciinumeric", Lr = "alphanumeric", Zc = "domain", ov = "emoji", cS = "scheme", uS = "slashscheme", mc = "whitespace";
function dS(e, t) {
  return e in t || (t[e] = []), t[e];
}
function oa(e, t, n) {
  t[qc] && (t[jr] = !0, t[Lr] = !0), t[Yc] && (t[jr] = !0, t[Xc] = !0), t[jr] && (t[Lr] = !0), t[Xc] && (t[Lr] = !0), t[Lr] && (t[Zc] = !0), t[ov] && (t[Zc] = !0);
  for (const i in t) {
    const a = dS(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function fS(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function sn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
sn.groups = {};
sn.prototype = {
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
    i = i || sn.groups;
    let a;
    return t && t.j ? a = t : (a = new sn(t), n && i && oa(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || sn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new sn(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new sn(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(fS(s.t, i), n);
          oa(r, l, i);
        } else n && oa(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Me = (e, t, n, i, a) => e.ta(t, n, i, a), dt = (e, t, n, i, a) => e.tr(t, n, i, a), Ff = (e, t, n, i, a) => e.ts(t, n, i, a), te = (e, t, n, i, a) => e.tt(t, n, i, a), Jn = "WORD", Jc = "UWORD", lv = "ASCIINUMERICAL", cv = "ALPHANUMERICAL", us = "LOCALHOST", Qc = "TLD", eu = "UTLD", io = "SCHEME", Pa = "SLASH_SCHEME", Lu = "NUM", tu = "WS", Ru = "NL", Hr = "OPENBRACE", Vr = "CLOSEBRACE", Io = "OPENBRACKET", Po = "CLOSEBRACKET", $o = "OPENPAREN", Do = "CLOSEPAREN", Mo = "OPENANGLEBRACKET", Fo = "CLOSEANGLEBRACKET", zo = "FULLWIDTHLEFTPAREN", Uo = "FULLWIDTHRIGHTPAREN", Bo = "LEFTCORNERBRACKET", jo = "RIGHTCORNERBRACKET", Ho = "LEFTWHITECORNERBRACKET", Vo = "RIGHTWHITECORNERBRACKET", Go = "FULLWIDTHLESSTHAN", Ko = "FULLWIDTHGREATERTHAN", Wo = "AMPERSAND", qo = "APOSTROPHE", Yo = "ASTERISK", Oi = "AT", Xo = "BACKSLASH", Zo = "BACKTICK", Jo = "CARET", la = "COLON", Iu = "COMMA", Qo = "DOLLAR", Bn = "DOT", el = "EQUALS", Pu = "EXCLAMATION", gn = "HYPHEN", Gr = "PERCENT", tl = "PIPE", nl = "PLUS", il = "POUND", Kr = "QUERY", $u = "QUOTE", uv = "FULLWIDTHMIDDLEDOT", Du = "SEMI", jn = "SLASH", Wr = "TILDE", al = "UNDERSCORE", dv = "EMOJI", rl = "SYM";
var fv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: cv,
  AMPERSAND: Wo,
  APOSTROPHE: qo,
  ASCIINUMERICAL: lv,
  ASTERISK: Yo,
  AT: Oi,
  BACKSLASH: Xo,
  BACKTICK: Zo,
  CARET: Jo,
  CLOSEANGLEBRACKET: Fo,
  CLOSEBRACE: Vr,
  CLOSEBRACKET: Po,
  CLOSEPAREN: Do,
  COLON: la,
  COMMA: Iu,
  DOLLAR: Qo,
  DOT: Bn,
  EMOJI: dv,
  EQUALS: el,
  EXCLAMATION: Pu,
  FULLWIDTHGREATERTHAN: Ko,
  FULLWIDTHLEFTPAREN: zo,
  FULLWIDTHLESSTHAN: Go,
  FULLWIDTHMIDDLEDOT: uv,
  FULLWIDTHRIGHTPAREN: Uo,
  HYPHEN: gn,
  LEFTCORNERBRACKET: Bo,
  LEFTWHITECORNERBRACKET: Ho,
  LOCALHOST: us,
  NL: Ru,
  NUM: Lu,
  OPENANGLEBRACKET: Mo,
  OPENBRACE: Hr,
  OPENBRACKET: Io,
  OPENPAREN: $o,
  PERCENT: Gr,
  PIPE: tl,
  PLUS: nl,
  POUND: il,
  QUERY: Kr,
  QUOTE: $u,
  RIGHTCORNERBRACKET: jo,
  RIGHTWHITECORNERBRACKET: Vo,
  SCHEME: io,
  SEMI: Du,
  SLASH: jn,
  SLASH_SCHEME: Pa,
  SYM: rl,
  TILDE: Wr,
  TLD: Qc,
  UNDERSCORE: al,
  UTLD: eu,
  UWORD: Jc,
  WORD: Jn,
  WS: tu
});
const Xn = /[a-z]/, Er = new RegExp("\\p{L}", "u"), bc = new RegExp("\\p{Emoji}", "u"), Zn = /\d/, yc = /\s/, zf = "\r", _c = `
`, hS = "️", pS = "‍", wc = "￼";
let Xs = null, Zs = null;
function vS(e = []) {
  const t = {};
  sn.groups = t;
  const n = new sn();
  Xs == null && (Xs = Uf(oS)), Zs == null && (Zs = Uf(lS)), te(n, "'", qo), te(n, "{", Hr), te(n, "}", Vr), te(n, "[", Io), te(n, "]", Po), te(n, "(", $o), te(n, ")", Do), te(n, "<", Mo), te(n, ">", Fo), te(n, "（", zo), te(n, "）", Uo), te(n, "「", Bo), te(n, "」", jo), te(n, "『", Ho), te(n, "』", Vo), te(n, "＜", Go), te(n, "＞", Ko), te(n, "&", Wo), te(n, "*", Yo), te(n, "@", Oi), te(n, "`", Zo), te(n, "^", Jo), te(n, ":", la), te(n, ",", Iu), te(n, "$", Qo), te(n, ".", Bn), te(n, "=", el), te(n, "!", Pu), te(n, "-", gn), te(n, "%", Gr), te(n, "|", tl), te(n, "+", nl), te(n, "#", il), te(n, "?", Kr), te(n, '"', $u), te(n, "/", jn), te(n, ";", Du), te(n, "~", Wr), te(n, "_", al), te(n, "\\", Xo), te(n, "・", uv);
  const i = dt(n, Zn, Lu, {
    [qc]: !0
  });
  dt(i, Zn, i);
  const a = dt(i, Xn, lv, {
    [jr]: !0
  }), r = dt(i, Er, cv, {
    [Lr]: !0
  }), s = dt(n, Xn, Jn, {
    [Yc]: !0
  });
  dt(s, Zn, a), dt(s, Xn, s), dt(a, Zn, a), dt(a, Xn, a);
  const o = dt(n, Er, Jc, {
    [Xc]: !0
  });
  dt(o, Xn), dt(o, Zn, r), dt(o, Er, o), dt(r, Zn, r), dt(r, Xn), dt(r, Er, r);
  const l = te(n, _c, Ru, {
    [mc]: !0
  }), f = te(n, zf, tu, {
    [mc]: !0
  }), u = dt(n, yc, tu, {
    [mc]: !0
  });
  te(n, wc, u), te(f, _c, l), te(f, wc, u), dt(f, yc, u), te(u, zf), te(u, _c), dt(u, yc, u), te(u, wc, u);
  const h = dt(n, bc, dv, {
    [ov]: !0
  });
  te(h, "#"), dt(h, bc, h), te(h, hS, h);
  const S = te(h, pS);
  te(S, "#"), dt(S, bc, h);
  const E = [[Xn, s], [Zn, a]], x = [[Xn, null], [Er, o], [Zn, r]];
  for (let A = 0; A < Xs.length; A++)
    Ci(n, Xs[A], Qc, Jn, E);
  for (let A = 0; A < Zs.length; A++)
    Ci(n, Zs[A], eu, Jc, x);
  oa(Qc, {
    tld: !0,
    ascii: !0
  }, t), oa(eu, {
    utld: !0,
    alpha: !0
  }, t), Ci(n, "file", io, Jn, E), Ci(n, "mailto", io, Jn, E), Ci(n, "http", Pa, Jn, E), Ci(n, "https", Pa, Jn, E), Ci(n, "ftp", Pa, Jn, E), Ci(n, "ftps", Pa, Jn, E), oa(io, {
    scheme: !0,
    ascii: !0
  }, t), oa(Pa, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], M = e[A][1] ? {
      [cS]: !0
    } : {
      [uS]: !0
    };
    O.indexOf("-") >= 0 ? M[Zc] = !0 : Xn.test(O) ? Zn.test(O) ? M[jr] = !0 : M[Yc] = !0 : M[qc] = !0, Ff(n, O, O, M);
  }
  return Ff(n, "localhost", us, {
    ascii: !0
  }), n.jd = new sn(rl), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, fv)
  };
}
function hv(e, t) {
  const n = gS(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
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
function gS(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function Ci(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new sn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new sn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function Uf(e) {
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
  format: Bf,
  formatHref: Bf,
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
function Mu(e, t = null) {
  let n = Object.assign({}, ds);
  e && (n = Object.assign(n, e instanceof Mu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
Mu.prototype = {
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
function Bf(e) {
  return e;
}
function pv(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
pv.prototype = {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), s = {}, o = e.get("className", n, t), l = e.get("target", n, t), f = e.get("rel", n, t), u = e.getObj("attributes", n, t), h = e.getObj("events", n, t);
    return s.href = i, o && (s.class = o), l && (s.target = l), f && (s.rel = f), u && Object.assign(s, u), {
      tagName: a,
      attributes: s,
      content: r,
      eventListeners: h
    };
  }
};
function Ol(e, t) {
  class n extends pv {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const mS = Ol("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), jf = Ol("text"), bS = Ol("nl"), Js = Ol("url", {
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
    return e.length >= 2 && e[0].t !== us && e[1].t === la;
  }
}), vn = (e) => new sn(e);
function yS({
  groups: e
}) {
  const t = e.domain.concat([Wo, Yo, Oi, Xo, Zo, Jo, Qo, el, gn, Lu, Gr, tl, nl, il, jn, rl, Wr, al]), n = [qo, la, Iu, Bn, Pu, Gr, Kr, $u, Du, Mo, Fo, Hr, Vr, Po, Io, $o, Do, zo, Uo, Bo, jo, Ho, Vo, Go, Ko], i = [Wo, qo, Yo, Xo, Zo, Jo, Qo, el, gn, Hr, Vr, Gr, tl, nl, il, Kr, jn, rl, Wr, al], a = vn(), r = te(a, Wr);
  Me(r, i, r), Me(r, e.domain, r);
  const s = vn(), o = vn(), l = vn();
  Me(a, e.domain, s), Me(a, e.scheme, o), Me(a, e.slashscheme, l), Me(s, i, r), Me(s, e.domain, s);
  const f = te(s, Oi);
  te(r, Oi, f), te(o, Oi, f), te(l, Oi, f);
  const u = te(r, Bn);
  Me(u, i, r), Me(u, e.domain, r);
  const h = vn();
  Me(f, e.domain, h), Me(h, e.domain, h);
  const S = te(h, Bn);
  Me(S, e.domain, h);
  const E = vn(mS);
  Me(S, e.tld, E), Me(S, e.utld, E), te(f, us, E);
  const x = te(h, gn);
  te(x, gn, x), Me(x, e.domain, h), Me(E, e.domain, h), te(E, Bn, S), te(E, gn, x);
  const A = te(s, gn), O = te(s, Bn);
  te(A, gn, A), Me(A, e.domain, s), Me(O, i, r), Me(O, e.domain, s);
  const D = vn(Js);
  Me(O, e.tld, D), Me(O, e.utld, D), Me(D, e.domain, s), Me(D, i, r), te(D, Bn, O), te(D, gn, A), te(D, Oi, f);
  const M = te(D, la), W = vn(Js);
  Me(M, e.numeric, W);
  const I = vn(Js), P = vn();
  Me(I, t, I), Me(I, n, P), Me(P, t, I), Me(P, n, P), te(D, jn, I), te(W, jn, I);
  const ce = te(o, la), Q = te(l, la), de = te(Q, jn), X = te(de, jn);
  Me(o, e.domain, s), te(o, Bn, O), te(o, gn, A), Me(l, e.domain, s), te(l, Bn, O), te(l, gn, A), Me(ce, e.domain, I), te(ce, jn, I), te(ce, Kr, I), Me(X, e.domain, I), Me(X, t, I), te(X, jn, I);
  const le = [
    [Hr, Vr],
    // {}
    [Io, Po],
    // []
    [$o, Do],
    // ()
    [Mo, Fo],
    // <>
    [zo, Uo],
    // （）
    [Bo, jo],
    // 「」
    [Ho, Vo],
    // 『』
    [Go, Ko]
    // ＜＞
  ];
  for (let me = 0; me < le.length; me++) {
    const [ee, ie] = le[me], $ = te(I, ee);
    te(P, ee, $);
    const F = vn(Js);
    Me($, t, F);
    const Z = vn();
    Me($, n, Z), te($, ie, I), Me(F, t, F), Me(F, n, Z), Me(Z, t, F), Me(Z, n, Z), te(F, ie, I), te(Z, ie, I);
  }
  return te(a, us, D), te(a, Ru, bS), {
    start: a,
    tokens: fv
  };
}
function _S(e, t, n) {
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
      s.length > 0 && (r.push(Sc(jf, t, s)), s = []), a -= S, u -= S;
      const E = h.t, x = n.slice(a - u, a);
      r.push(Sc(E, t, x));
    }
  }
  return s.length > 0 && r.push(Sc(jf, t, s)), r;
}
function Sc(e, t, n) {
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
function wS() {
  It.scanner = vS(It.customSchemes);
  for (let e = 0; e < It.tokenQueue.length; e++)
    It.tokenQueue[e][1]({
      scanner: It.scanner
    });
  It.parser = yS(It.scanner.tokens);
  for (let e = 0; e < It.pluginQueue.length; e++)
    It.pluginQueue[e][1]({
      scanner: It.scanner,
      parser: It.parser
    });
  return It.initialized = !0, It;
}
function vv(e) {
  return It.initialized || wS(), _S(It.parser.start, e, hv(It.scanner.start, e));
}
vv.scan = hv;
function SS(e) {
  const t = new Mu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, ES), n = vv(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(_o(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function CS(e) {
  return e.replace(/"/g, "&quot;");
}
function TS(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${CS(i)}"`);
  }
  return t.join(" ");
}
function ES({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${TS(t)}>${_o(n)}</${e}>`;
}
const AS = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = SS(t.text));
}, kS = ["title"], OS = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Dt("NcAppSidebar:header:ref");
    return (n, i) => qe((_(), C("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Ie(g(e.name), 1)
    ], 8, kS)), [
      [b(AS), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), xS = ["aria-labelledby"], NS = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, LS = ["id"], RS = {
  key: 2,
  class: "empty-content__description"
}, IS = {
  key: 3,
  class: "empty-content__action"
}, PS = /* @__PURE__ */ Lt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Tl();
    return (n, i) => (_(), C("div", {
      "aria-labelledby": b(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (_(), C("div", NS, [
        Pe(n.$slots, "icon", {}, void 0, !0)
      ])) : j("", !0),
      e.name !== "" || n.$slots.name ? (_(), C("div", {
        key: 1,
        id: b(t),
        class: "empty-content__name"
      }, [
        Pe(n.$slots, "name", {}, () => [
          Ie(g(e.name), 1)
        ], !0)
      ], 8, LS)) : j("", !0),
      e.description !== "" || n.$slots.description ? (_(), C("p", RS, [
        Pe(n.$slots, "description", {}, () => [
          Ie(g(e.description), 1)
        ], !0)
      ])) : j("", !0),
      n.$slots.action ? (_(), C("div", IS, [
        Pe(n.$slots, "action", {}, void 0, !0)
      ])) : j("", !0)
    ], 8, xS));
  }
}), $S = /* @__PURE__ */ Je(PS, [["__scopeId", "data-v-8609a4c1"]]), DS = {
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
}, MS = ["aria-hidden", "aria-label"], FS = ["fill", "width", "height"], zS = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, US = { key: 0 };
function BS(e, t, n, i, a, r) {
  return _(), C("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", zS, [
        n.title ? (_(), C("title", US, g(n.title), 1)) : j("", !0)
      ])
    ], 8, FS))
  ], 16, MS);
}
const jS = /* @__PURE__ */ Je(DS, [["render", BS]]), HS = {
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
}, VS = ["aria-hidden", "aria-label"], GS = ["fill", "width", "height"], KS = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, WS = { key: 0 };
function qS(e, t, n, i, a, r) {
  return _(), C("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", KS, [
        n.title ? (_(), C("title", WS, g(n.title), 1)) : j("", !0)
      ])
    ], 8, GS))
  ], 16, VS);
}
const YS = /* @__PURE__ */ Je(HS, [["render", qS]]), XS = {
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
}, ZS = ["aria-hidden", "aria-label"], JS = ["fill", "width", "height"], QS = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, eC = { key: 0 };
function tC(e, t, n, i, a, r) {
  return _(), C("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), C("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", QS, [
        n.title ? (_(), C("title", eC, g(n.title), 1)) : j("", !0)
      ])
    ], 8, JS))
  ], 16, ZS);
}
const nC = /* @__PURE__ */ Je(XS, [["render", tC]]), iC = ["aria-selected", "tabindex"], aC = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Sm({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Mh(e, "selected"), n = /* @__PURE__ */ xe(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (_(), C("button", {
      class: Ee(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: b(Fi),
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
          _e(Wc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Oe(() => [
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
          _e(Wc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Oe(() => [
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
      }, g(e.tab.name), 3)
    ], 10, iC));
  }
}), rC = "_sidebarTabsButton_q3kBA", sC = "_sidebarTabsButton_legacy_KQ4d1", oC = "_sidebarTabsButton_selected_Pjayf", lC = "_sidebarTabsButton_animatedHighlight_uvp-0", cC = "_sidebarTabsButton__name_rlQsL", uC = "_sidebarTabsButton__icon_QzZg4", dC = "_sidebarTabsButton__iconLayer_ZkZan", fC = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", hC = "_sidebarTabsButton__icon_pop_IA0By", pC = "_sidebarTabsButton__legacyIcon_QhcNW", vC = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: rC,
  sidebarTabsButton_legacy: sC,
  sidebarTabsButton_selected: oC,
  sidebarTabsButton_animatedHighlight: lC,
  sidebarTabsButton__name: cC,
  sidebarTabsButton__icon: uC,
  sidebarTabsButton__iconLayer: dC,
  sidebarTabsButton__iconLayer_hidden: fC,
  sidebarTabsButton__icon_pop: hC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: pC
}, gC = {
  $style: vC
}, mC = /* @__PURE__ */ Je(aC, [["__cssModules", gC]]), bC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: mC
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
      isLegacy34: Fi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [Ty()]) : t.order - n.order), this.updateActive();
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
}, yC = { class: "app-sidebar-tabs" };
function _C(e, t, n, i, a, r) {
  const s = Be("NcAppSidebarTabsButton");
  return _(), C("div", yC, [
    r.hasMultipleTabs || r.showForSingleTab ? (_(), C("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ee(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = yt(Ue((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = yt(Ue((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = yt(Ue((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = yt(Ue((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = yt(Ue((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = yt(Ue((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = yt(Ue((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (_(), C("div", {
        key: 0,
        class: Ee(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: ln(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : j("", !0),
      (_(!0), C(ue, null, Fe(a.tabs, (o) => (_(), ze(s, {
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
      class: Ee(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Pe(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const wC = /* @__PURE__ */ Je(bC, [["render", _C], ["__scopeId", "data-v-74190d2a"]]);
Mi(r_);
const SC = {
  name: "NcAppSidebar",
  components: {
    NcActions: Ro,
    NcAppSidebarHeader: OS,
    NcAppSidebarTabs: wC,
    NcButton: Gn,
    NcLoadingIcon: sv,
    NcEmptyContent: $S,
    IconArrowRight: Fp,
    IconClose: zp,
    IconDockRight: jS,
    IconStar: YS,
    IconStarOutline: nC
  },
  directives: {
    Focus: sS,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: rS
  },
  inject: {
    ncContentSelector: {
      from: Mp,
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
    return mn("NcAppSidebar:header:ref", e), {
      uid: Tl(),
      isMobile: Qy(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Et("Change name"),
      closeTranslated: Et("Close sidebar"),
      favoriteTranslated: Et("Favorite"),
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
    isSlotPopulated: Nu,
    t: Et,
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
      this.focusTrap || (this.focusTrap = Cu([
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
}, CC = ["aria-labelledby"], TC = { class: "app-sidebar-header__info" }, EC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, AC = { class: "app-sidebar-header__name-container" }, kC = { class: "app-sidebar-header__mainname-container" }, OC = ["placeholder", "value"], xC = ["title"], NC = {
  key: 2,
  class: "app-sidebar-header__description"
};
function LC(e, t, n, i, a, r) {
  const s = Be("IconDockRight"), o = Be("NcButton"), l = Be("NcLoadingIcon"), f = Be("IconStar"), u = Be("IconStarOutline"), h = Be("NcAppSidebarHeader"), S = Be("IconArrowRight"), E = Be("NcActions"), x = Be("IconClose"), A = Be("NcAppSidebarTabs"), O = Be("NcEmptyContent"), D = sd("focus"), M = sd("click-outside");
  return _(), ze(cb, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Oe(() => [
      qe(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = yt((...W) => r.onKeydownEsc && r.onKeydownEsc(...W), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (_(), ze(wh, {
          key: 0,
          to: r.ncContentSelector
        }, [
          _e(o, Ut({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (W) => e.$emit("update:open", !0))
          }), {
            icon: Oe(() => [
              Pe(e.$slots, "toggle-icon", {}, () => [
                _e(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : j("", !0),
        c("header", {
          class: Ee(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (_(), ze(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Pe(e.$slots, "info", { key: 0 }, () => [
            c("div", TC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (_(), C("div", {
                key: 0,
                class: Ee(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: ln({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...W) => r.onFigureClick && r.onFigureClick(...W)),
                onKeydown: t[2] || (t[2] = yt((...W) => r.onFigureClick && r.onFigureClick(...W), ["enter"]))
              }, [
                Pe(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : j("", !0),
              c("div", {
                class: Ee(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (_(), C("div", EC, [
                  Pe(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (_(), ze(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ue(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Oe(() => [
                        n.starLoading ? (_(), ze(l, { key: 0 })) : a.isStarred ? (_(), ze(f, {
                          key: 1,
                          size: 20
                        })) : (_(), ze(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : j("", !0)
                  ], !0)
                ])) : j("", !0),
                c("div", AC, [
                  c("div", kC, [
                    qe(_e(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Ue(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [za, !n.nameEditable]
                    ]),
                    n.nameEditable ? qe((_(), C("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ue((...W) => r.onSubmitName && r.onSubmitName(...W), ["prevent"]))
                    }, [
                      qe(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = yt(Ue((...W) => r.onDismissEditing && r.onDismissEditing(...W), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...W) => r.onNameInput && r.onNameInput(...W))
                      }, null, 40, OC), [
                        [D]
                      ]),
                      _e(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Oe(() => [
                          _e(S, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : j("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (_(), ze(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Oe(() => [
                        Pe(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : j("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (_(), C("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Pe(e.$slots, "subname", {}, () => [
                      Ie(g(n.subname), 1)
                    ], !0)
                  ], 8, xC)) : j("", !0)
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
            onClick: Ue(r.closeSidebar, ["prevent"])
          }, {
            icon: Oe(() => [
              _e(x, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (_(), C("div", NC, [
            Pe(e.$slots, "description", {}, void 0, !0)
          ])) : j("", !0)
        ], 2),
        qe(_e(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Oe(() => [
            Pe(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [za, !n.loading]
        ]),
        n.loading ? (_(), ze(O, { key: 1 }, {
          icon: Oe(() => [
            _e(l, { size: 64 })
          ]),
          _: 1
        })) : j("", !0)
      ], 40, CC), [
        [za, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const RC = /* @__PURE__ */ Je(SC, [["render", LC], ["__scopeId", "data-v-c2c6820b"]]), IC = {
  name: "NcActionLink",
  mixins: [Bp],
  inject: {
    isInSemanticMenu: {
      from: Tu,
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
}, PC = ["role"], $C = ["download", "href", "aria-label", "target", "title", "role"], DC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, MC = { class: "action-link__name" }, FC = ["textContent"], zC = ["textContent"], UC = {
  key: 2,
  class: "action-link__text"
};
function BC(e, t, n, i, a, r) {
  return _(), C("li", {
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
          class: Ee(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: ln({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (_(), C("span", DC, [
        c("strong", MC, g(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: g(e.text)
        }, null, 8, FC)
      ])) : e.isLongText ? (_(), C("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: g(e.text)
      }, null, 8, zC)) : (_(), C("span", UC, g(e.text), 1)),
      j("", !0)
    ], 8, $C)
  ], 8, PC);
}
const La = /* @__PURE__ */ Je(IC, [["render", BC], ["__scopeId", "data-v-32f01b7a"]]);
Mi(u_);
const jC = `<!--
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
`, HC = `<!--
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
`, VC = { class: "vue-skip-actions__container" }, GC = { class: "vue-skip-actions__headline" }, KC = { class: "vue-skip-actions__buttons" }, WC = /* @__PURE__ */ Lt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    mn(Dp, o), mn(Mp, "#content-vue"), mn("appName", G(() => t.appName));
    const n = ms(), i = /* @__PURE__ */ xe(!1), a = /* @__PURE__ */ xe(), r = G(() => a.value === "navigation" ? HC : jC);
    xh(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      oi("toggle-navigation", { open: !0 }), rn(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, f) => (_(), C("div", {
      id: "content-vue",
      class: Ee(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": b(Fi) }]])
    }, [
      (_(), ze(wh, { to: "#skip-actions" }, [
        c("div", VC, [
          c("div", GC, g(b(Et)("Keyboard navigation help")), 1),
          c("div", KC, [
            qe(_e(Gn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ue(s, ["prevent"]),
              onFocusin: f[0] || (f[0] = (u) => a.value = "navigation"),
              onMouseover: f[1] || (f[1] = (u) => a.value = "navigation")
            }, {
              default: Oe(() => [
                Ie(g(b(Et)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [za, i.value]
            ]),
            _e(Gn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: f[2] || (f[2] = (u) => a.value = "content"),
              onMouseover: f[3] || (f[3] = (u) => a.value = "content")
            }, {
              default: Oe(() => [
                Ie(g(b(Et)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          qe(_e(Cl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [za, !b(n)]
          ])
        ])
      ])),
      Pe(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), qC = /* @__PURE__ */ Je(WC, [["__scopeId", "data-v-d13dcb98"]]), YC = { class: "library-shelf-tree-node" }, XC = ["aria-expanded", "aria-label"], ZC = ["href"], JC = { class: "library-shelf-summary-title" }, QC = { dir: "auto" }, eT = { class: "library-muted" }, tT = { dir: "auto" }, nT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, iT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, aT = {
  key: 3,
  class: "library-shelf-tree"
}, rT = ["disabled"], sT = {
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
      const E = Be("ShelfTreeNode", !0);
      return _(), C("li", YC, [
        e.node.hasChildren ? (_(), C("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? b(y)("library", "Collapse {folder}", { folder: e.node.label }) : b(y)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: f
        }, g(n.value ? "−" : "+"), 9, XC)) : j("", !0),
        c("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          c("span", JC, [
            c("strong", null, [
              c("bdi", QC, g(e.node.label), 1)
            ]),
            c("span", null, g(b(Un)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          c("small", eT, [
            c("bdi", tT, g(e.node.path), 1)
          ])
        ], 8, ZC),
        a.value ? (_(), C("small", nT, g(b(y)("library", "Loading folders…")), 1)) : r.value ? (_(), C("small", iT, g(b(y)("library", "Could not load folders.")), 1)) : j("", !0),
        n.value && s.value.length ? (_(), C("ul", aT, [
          (_(!0), C(ue, null, Fe(s.value, (x) => (_(), ze(E, {
            key: x.id,
            node: x,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : j("", !0),
        n.value && o.value ? (_(), C("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: u
        }, g(b(y)("library", "Load more folders")), 9, rT)) : j("", !0)
      ]);
    };
  }
}, oT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, lT = { id: "library-sidebar-filters-heading" }, cT = ["aria-label"], uT = ["value"], dT = ["name", "value"], fT = ["value"], hT = ["value"], pT = ["title"], vT = ["placeholder"], gT = { value: "" }, mT = ["value"], bT = { class: "library-publisher-filter" }, yT = { for: "library-publisher-search" }, _T = ["placeholder", "title", "aria-expanded"], wT = ["value"], ST = {
  key: 0,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, CT = ["onClick"], TT = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, ET = { class: "library-publication-filter" }, AT = { for: "library-publication-search" }, kT = ["placeholder", "aria-expanded"], OT = ["value"], xT = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, NT = ["onClick"], LT = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, RT = { class: "library-year-filter" }, IT = { for: "library-year-search" }, PT = ["placeholder", "aria-expanded"], $T = ["value"], DT = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, MT = ["onClick"], FT = {
  type: "submit",
  class: "button secondary library-year-apply"
}, zT = { class: "library-creator-filter" }, UT = { for: "library-creator-search" }, BT = ["placeholder", "title", "aria-expanded"], jT = ["value"], HT = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, VT = ["onClick"], GT = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, KT = ["placeholder"], WT = { value: "" }, qT = ["value"], YT = { value: "" }, XT = ["value"], ZT = { class: "library-folder-filter" }, JT = { for: "library-folder-search" }, QT = ["placeholder", "title", "aria-expanded"], eE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, tE = ["onClick"], nE = {
  type: "submit",
  class: "button secondary library-folder-apply"
}, iE = { value: "" }, aE = ["value"], rE = { value: "" }, sE = ["value"], oE = { class: "library-subject-filter" }, lE = { for: "library-subject-search" }, cE = ["placeholder", "title", "aria-expanded"], uE = ["value"], dE = {
  key: 0,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, fE = ["onClick"], hE = { value: "" }, pE = ["value"], vE = { value: "" }, gE = { value: "1" }, mE = {
  type: "submit",
  class: "button primary"
}, bE = {
  href: "?",
  class: "button secondary"
}, yE = ["href"], _E = ["lang", "dir"], wE = ["aria-label"], SE = ["href", "aria-label", "onClick"], CE = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, TE = { class: "library-review-header" }, EE = { class: "library-muted library-catalogue-eyebrow" }, AE = { id: "library-review-heading" }, kE = ["aria-label"], OE = ["href", "aria-current", "onClick"], xE = ["aria-label"], NE = ["name", "value"], LE = {
  type: "submit",
  class: "button secondary"
}, RE = ["aria-busy"], IE = { key: 0 }, PE = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, $E = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, DE = { class: "library-metadata-review-workbench-copy" }, ME = { class: "library-muted library-catalogue-eyebrow" }, FE = ["title"], zE = {
  key: 0,
  class: "library-metadata-review-card"
}, UE = {
  class: "library-bidi-human",
  dir: "auto"
}, BE = { class: "library-muted" }, jE = {
  class: "library-bidi-machine",
  dir: "ltr"
}, HE = { class: "library-metadata-review-fields" }, VE = {
  class: "library-bidi-human",
  dir: "auto"
}, GE = {
  class: "library-bidi-human",
  dir: "auto"
}, KE = {
  class: "library-bidi-human",
  dir: "auto"
}, WE = {
  class: "library-bidi-machine",
  dir: "ltr"
}, qE = {
  class: "library-bidi-human",
  dir: "auto"
}, YE = {
  class: "library-bidi-human",
  dir: "auto"
}, XE = ["action"], ZE = ["value"], JE = ["value"], QE = {
  type: "submit",
  class: "button secondary"
}, eA = { class: "library-metadata-review-actions" }, tA = ["href"], nA = ["href"], iA = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, aA = ["href"], rA = ["aria-label"], sA = ["onClick"], oA = {
  class: "library-bidi-human",
  dir: "auto"
}, lA = {
  key: 0,
  class: "library-muted"
}, cA = {
  class: "library-bidi-human",
  dir: "auto"
}, uA = {
  key: 1,
  class: "library-scan-error"
}, dA = {
  class: "library-bidi-human",
  dir: "auto"
}, fA = ["onClick"], hA = ["href"], pA = ["aria-label"], vA = ["href"], gA = {
  key: 1,
  class: "library-muted"
}, mA = { key: 0 }, bA = ["href"], yA = {
  key: 3,
  class: "library-muted"
}, _A = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, wA = { class: "library-home-header" }, SA = { class: "library-muted library-catalogue-eyebrow" }, CA = { id: "library-home-heading" }, TA = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, EA = { id: "library-continue-heading" }, AA = { class: "library-muted" }, kA = ["href"], OA = {
  key: 0,
  class: "library-home-card-row"
}, xA = ["onClick"], NA = { class: "library-cover-frame" }, LA = ["src"], RA = { class: "library-cover-summary" }, IA = ["onClick"], PA = { dir: "auto" }, $A = {
  key: 0,
  class: "library-cover-creator"
}, DA = { dir: "auto" }, MA = ["href"], FA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, zA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, UA = { id: "library-recent-heading" }, BA = { class: "library-muted" }, jA = ["href"], HA = {
  key: 0,
  class: "library-home-card-row"
}, VA = ["onClick"], GA = { class: "library-cover-frame" }, KA = ["src"], WA = { class: "library-cover-summary" }, qA = ["onClick"], YA = { dir: "auto" }, XA = {
  key: 0,
  class: "library-cover-creator"
}, ZA = { dir: "auto" }, JA = ["href"], QA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, ek = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, tk = { id: "library-home-shelves-heading" }, nk = { class: "library-muted" }, ik = ["href"], ak = ["aria-label"], rk = ["href"], sk = { dir: "auto" }, ok = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, lk = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, ck = { id: "library-home-attention-heading" }, uk = { class: "library-muted" }, dk = ["href"], fk = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, hk = { class: "library-home-header" }, pk = { class: "library-muted library-catalogue-eyebrow" }, vk = { id: "library-shelves-landing-heading" }, gk = { class: "library-muted" }, mk = ["aria-label"], bk = { class: "library-shelf-tree" }, yk = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, _k = { class: "library-muted" }, wk = { class: "library-empty-actions" }, Sk = ["href"], Ck = ["href"], Tk = {
  key: 4,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, Ek = { class: "library-catalogue-header" }, Ak = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, kk = { id: "library-catalogue-heading" }, Ok = ["aria-label"], xk = ["aria-label"], Nk = ["name", "value"], Lk = { "data-library-control": "sort" }, Rk = { value: "title" }, Ik = { value: "recent" }, Pk = { value: "publicationDate" }, $k = { value: "publication" }, Dk = { value: "lastOpened" }, Mk = { value: "format" }, Fk = ["aria-label"], zk = ["aria-pressed"], Uk = ["aria-pressed"], Bk = ["aria-pressed"], jk = ["aria-pressed"], Hk = {
  id: "library-collections",
  class: "library-saved-collections"
}, Vk = ["title"], Gk = ["action", "title"], Kk = ["value"], Wk = ["value"], qk = ["placeholder", "disabled"], Yk = ["disabled", "title"], Xk = ["aria-label"], Zk = ["href"], Jk = { class: "library-saved-collection-count" }, Qk = ["action"], e2 = ["value"], t2 = {
  type: "submit",
  class: "button tertiary"
}, n2 = ["aria-label"], i2 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, a2 = ["title"], r2 = { class: "library-workspace-panel-purpose" }, s2 = { class: "library-workspace-scope-badge" }, o2 = { "aria-live": "polite" }, l2 = ["action"], c2 = ["value"], u2 = ["placeholder"], d2 = ["title"], f2 = ["action"], h2 = ["value"], p2 = ["placeholder"], v2 = ["title"], g2 = ["action"], m2 = ["value"], b2 = ["name", "value"], y2 = ["title"], _2 = ["action"], w2 = ["value"], S2 = ["name", "value"], C2 = { name: "bulkEditField" }, T2 = { value: "publicationType" }, E2 = { value: "subtitle" }, A2 = { value: "creators" }, k2 = { value: "publication" }, O2 = { value: "publicationDate" }, x2 = { value: "language" }, N2 = { value: "publisher" }, L2 = { value: "subjects" }, R2 = { value: "classifications" }, I2 = ["placeholder"], P2 = ["title"], $2 = ["action"], D2 = ["value"], M2 = ["name", "value"], F2 = ["title"], z2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, U2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, B2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, j2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, H2 = { class: "library-muted library-catalogue-eyebrow" }, V2 = ["title"], G2 = ["aria-label"], K2 = { key: 0 }, W2 = { key: 1 }, q2 = { key: 2 }, Y2 = ["aria-label"], X2 = { key: 0 }, Z2 = { key: 1 }, J2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, Q2 = { class: "library-muted library-catalogue-eyebrow" }, eO = ["title"], tO = ["aria-label"], nO = ["href"], iO = {
  key: 0,
  class: "library-notice"
}, aO = { class: "library-publication-issue-label" }, rO = ["href"], sO = { class: "library-muted" }, oO = {
  key: 1,
  class: "library-publication-unknown-issues"
}, lO = ["title"], cO = ["href"], uO = { class: "library-catalogue-status-row" }, dO = { class: "library-muted library-filter-result-summary" }, fO = { key: 0 }, hO = { href: "?" }, pO = ["aria-label"], vO = { class: "library-pagination-range" }, gO = { key: 0 }, mO = ["href"], bO = {
  key: 1,
  class: "library-muted"
}, yO = ["href"], _O = {
  key: 3,
  class: "library-muted"
}, wO = ["title"], SO = { class: "library-empty-actions" }, CO = ["href"], TO = { class: "library-muted" }, EO = ["title"], AO = { class: "library-empty-actions" }, kO = ["href"], OO = ["title"], xO = { class: "library-empty-actions" }, NO = ["href"], LO = {
  href: "?",
  class: "button primary"
}, RO = ["title"], IO = { class: "library-empty-actions" }, PO = ["href"], $O = {
  key: 5,
  class: "library-select-visible"
}, DO = ["checked"], MO = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, FO = { class: "library-item-selection" }, zO = ["checked", "aria-label", "onChange"], UO = { class: "library-catalogue-list-main" }, BO = ["onClick"], jO = {
  class: "library-bidi-human",
  dir: "auto"
}, HO = {
  key: 0,
  class: "library-muted"
}, VO = {
  class: "library-bidi-human",
  dir: "auto"
}, GO = { class: "library-catalogue-list-metadata" }, KO = { key: 0 }, WO = {
  class: "library-bidi-human",
  dir: "auto"
}, qO = { key: 1 }, YO = { key: 2 }, XO = ["dir"], ZO = { key: 3 }, JO = {
  class: "library-bidi-human",
  dir: "auto"
}, QO = { class: "library-catalogue-list-actions" }, ex = ["href"], tx = ["onClick"], nx = { class: "library-item-selection" }, ix = ["checked", "aria-label", "onChange"], ax = ["aria-labelledby", "aria-expanded", "onClick"], rx = ["id"], sx = { class: "library-cover-frame" }, ox = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, lx = ["src", "onLoad", "onError"], cx = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, ux = ["action", "onSubmit"], dx = ["value"], fx = ["value"], hx = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], px = ["data-library-star-error"], vx = { class: "library-cover-summary" }, gx = { class: "library-cover-primary" }, mx = ["id"], bx = ["onClick"], yx = {
  class: "library-bidi-human",
  dir: "auto"
}, _x = {
  key: 0,
  class: "library-cover-creator"
}, wx = {
  class: "library-bidi-human",
  dir: "auto"
}, Sx = {
  key: 1,
  class: "library-cover-badges"
}, Cx = {
  key: 0,
  class: "library-cover-badge"
}, Tx = {
  class: "library-bidi-machine",
  dir: "ltr"
}, Ex = {
  key: 1,
  class: "library-cover-context"
}, Ax = {
  class: "library-bidi-human",
  dir: "auto"
}, kx = { class: "library-cover-primary-actions" }, Ox = ["href"], xx = ["aria-label"], Nx = { class: "library-pagination-range" }, Lx = { key: 0 }, Rx = ["href"], Ix = {
  key: 1,
  class: "library-muted"
}, Px = ["href"], $x = {
  key: 3,
  class: "library-muted"
}, Dx = { class: "library-sidebar-content" }, Mx = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, Fx = ["role"], zx = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, Ux = { class: "library-sidebar-publication-header" }, Bx = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, jx = ["src"], Hx = { class: "library-sidebar-publication-summary" }, Vx = { class: "library-muted library-catalogue-eyebrow" }, Gx = {
  class: "library-bidi-human",
  dir: "auto"
}, Kx = { key: 0 }, Wx = {
  class: "library-bidi-machine",
  dir: "ltr"
}, qx = { class: "library-detail-drawer-actions" }, Yx = ["href"], Xx = ["aria-label"], Zx = ["aria-current", "onClick"], Jx = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, Qx = { id: "library-sidebar-overview-heading" }, eN = {
  key: 0,
  class: "library-sidebar-description"
}, tN = {
  class: "library-bidi-human",
  dir: "auto"
}, nN = { class: "library-detail-drawer-facts" }, iN = { key: 0 }, aN = { key: 1 }, rN = { key: 2 }, sN = { key: 3 }, oN = { key: 4 }, lN = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, cN = { id: "library-sidebar-metadata-heading" }, uN = ["placeholder"], dN = ["onUpdate:modelValue", "aria-label", "placeholder"], fN = ["onUpdate:modelValue", "aria-label"], hN = ["onClick"], pN = { class: "library-muted" }, vN = {
  key: 0,
  role: "alert"
}, gN = {
  key: 1,
  role: "status"
}, mN = ["disabled"], bN = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, yN = { id: "library-sidebar-suggestions-heading" }, _N = { class: "library-muted" }, wN = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, SN = { id: "library-sidebar-activity-heading" }, CN = { class: "library-detail-drawer-facts" }, TN = { key: 0 }, EN = { key: 1 }, AN = { key: 2 }, kN = { class: "library-detail-drawer-file" }, ON = ["href"], xN = { dir: "ltr" }, NN = {
  key: 1,
  dir: "ltr"
}, LN = ["aria-label"], RN = ["disabled"], IN = ["disabled"], PN = 20, $N = "/apps/library", DN = 2147483647, MN = {
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
    function r(p, v) {
      return Object.prototype.hasOwnProperty.call(a, p) && String(v ?? "").trim() === a[p];
    }
    function s(p) {
      const v = new URLSearchParams(p);
      for (const d of Object.keys(a)) {
        const z = [...new Set([...v.keys()].filter((ke) => ke === d || ke.startsWith(`${d}[`)))], se = z.reduce((ke, Re) => ke + v.getAll(Re).length, 0);
        if (se > 1 || z.some((ke) => ke !== d)) {
          for (const ke of z) v.delete(ke);
          continue;
        }
        d !== "status" && se === 1 && !r(d, v.get(d)) && v.delete(d);
      }
      return v;
    }
    function o(p) {
      return Object.keys(a).some((v) => p.getAll(v).length === 1 && r(v, p.get(v)));
    }
    function l(p) {
      return Object.fromEntries(Object.entries(p || {}).filter(([v, d]) => v === "status" || !Object.prototype.hasOwnProperty.call(a, v) || r(v, d)));
    }
    const f = /* @__PURE__ */ Pt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Pt((f.items || []).map((p) => ({ ...p }))), h = G(() => u), S = G(() => f.shelves || []), E = G(() => f.formats || []), x = G(() => f.publicationTypes?.length ? f.publicationTypes : n), A = G(() => f.publications || []), O = G(() => f.publicationIssueContext || null), D = G(() => f.scanStatuses || []), M = G(() => f.workflowStatuses || []), W = G(() => f.classifications || []), I = G(() => f.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), P = /* @__PURE__ */ Pt({
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
    for (const p of Object.keys(a))
      p !== "status" && (r(p, P[p]) || (P[p] = ""));
    const ce = /* @__PURE__ */ xe(P.publication), Q = /* @__PURE__ */ xe(P.q), de = /* @__PURE__ */ xe(!1), X = /* @__PURE__ */ xe(null), le = G(() => {
      const p = ce.value.trim().toLocaleLowerCase();
      return (p !== "" && X.value !== null ? X.value : A.value).filter((d) => p === "" || d.toLocaleLowerCase().includes(p)).slice(0, PN);
    });
    tt(() => P.publication, (p) => {
      ce.value = p || "";
    }), tt(() => P.q, (p) => {
      Q.value = p || "";
    });
    let me = null, ee = null, ie = 0;
    tt(ce, (p) => {
      window.clearTimeout(me), ee?.abort(), ee = null, X.value = null;
      const v = String(p || "").trim();
      if (v.length < 3) return;
      const d = ++ie;
      me = window.setTimeout(() => {
        xv(v, d);
      }, 200);
    });
    const $ = /* @__PURE__ */ xe(P.publisher), F = /* @__PURE__ */ xe(!1), Z = /* @__PURE__ */ xe(null), oe = G(() => Z.value || []);
    tt(() => P.publisher, (p) => {
      $.value = p || "";
    });
    let ne = null, he = null, pe = 0;
    tt($, (p) => {
      window.clearTimeout(ne), he?.abort(), he = null, Z.value = null;
      const v = String(p || "").trim();
      if (v.length < 3) return;
      const d = ++pe;
      ne = window.setTimeout(() => {
        Ev(v, d);
      }, 200);
    });
    const we = /* @__PURE__ */ xe(P.creator), be = /* @__PURE__ */ xe(!1), Ke = /* @__PURE__ */ xe(null), Ae = G(() => Ke.value || []);
    tt(() => P.creator, (p) => {
      we.value = p || "";
    });
    let lt = null, ct = null, ft = 0;
    tt(we, (p) => {
      window.clearTimeout(lt), ct?.abort(), ct = null, Ke.value = null;
      const v = String(p || "").trim();
      if (v.length < 3) return;
      const d = ++ft;
      lt = window.setTimeout(() => {
        Tv(v, d);
      }, 200);
    });
    const ht = /* @__PURE__ */ xe(P.folder), Qe = /* @__PURE__ */ xe(!1), Gt = /* @__PURE__ */ xe(null), B = G(() => Gt.value || []);
    tt(() => P.folder, (p) => {
      ht.value = p || "";
    });
    let m = null, T = null, k = 0;
    tt(ht, (p) => {
      window.clearTimeout(m), T?.abort(), T = null, Gt.value = null;
      const v = String(p || "").trim();
      if (v.length < 3) return;
      const d = ++k;
      m = window.setTimeout(() => {
        kv(v, d);
      }, 200);
    });
    const L = /* @__PURE__ */ xe(P.subject), N = /* @__PURE__ */ xe(!1), U = /* @__PURE__ */ xe(null), q = G(() => U.value || []);
    tt(() => P.subject, (p) => {
      L.value = p || "";
    });
    let H = null, J = null, V = 0;
    tt(L, (p) => {
      window.clearTimeout(H), J?.abort(), J = null, U.value = null;
      const v = String(p || "").trim();
      if (v.length < 3) return;
      const d = ++V;
      H = window.setTimeout(() => {
        Av(v, d);
      }, 200);
    });
    const ve = /* @__PURE__ */ xe(P.year), ae = /* @__PURE__ */ xe(!1), ge = /* @__PURE__ */ xe(null), Ce = G(() => ge.value || []);
    tt(() => P.year, (p) => {
      ve.value = p || "";
    });
    let Ne = null, $e = null, De = 0;
    tt(ve, (p) => {
      window.clearTimeout(Ne), $e?.abort(), $e = null, ge.value = null;
      const v = String(p || "").trim();
      if (v.length < 2) return;
      const d = ++De;
      Ne = window.setTimeout(() => {
        Ov(v, d);
      }, 200);
    });
    const nt = Object.fromEntries(Object.keys(P).map((p) => [p, p === "sort" ? "title" : p === "view" ? "compact" : ""])), st = window.location.pathname.indexOf($N), ut = st >= 0 ? window.location.pathname.slice(0, st) : "", vt = {
      catalogue: `${ut}/apps/library/`,
      review: `${ut}/apps/library/?scannerConflicts=1`,
      settings: `${ut}/settings/user/library`
    };
    function Ct(p, v) {
      if (typeof p != "string" || p === "") return v;
      try {
        const d = ut ? `${ut}/` : "/";
        let z = p;
        for (let se = 0; se < 5; se += 1) {
          if (!z.startsWith("/") || z.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(z)) return v;
          const ke = new URL(z, window.location.origin);
          if (ke.origin !== window.location.origin || !ke.pathname.startsWith(d)) return v;
          const Re = z.split(/[?#]/, 1)[0];
          for (const tn of Re.split("/")) {
            let yi = tn;
            for (let Aa = 0; Aa < 5; Aa += 1) {
              const Mn = decodeURIComponent(yi);
              if (/[\\/\u0000-\u001f\u007f]/.test(Mn) || Mn === "." || Mn === "..") return v;
              if (Mn === yi) break;
              if (yi = Mn, Aa === 4) return v;
            }
          }
          const it = decodeURI(z);
          if (it === z) return p;
          z = it;
        }
        return v;
      } catch {
        return v;
      }
    }
    const Jt = G(() => Ct(f.settingsUrl, vt.settings)), Ge = G(() => Ct(f.catalogueRootUrl, vt.catalogue)), Bt = G(() => Ct(f.homeUrl, `${vt.catalogue}?home=1`)), pi = G(() => Ct(f.shelvesUrl, `${vt.catalogue}?shelves=1`)), zi = G(() => Ct(f.reviewUrl || f.scannerConflictReviewUrl, vt.review)), Ui = G(() => Object.entries(a).some(([p, v]) => P[p] === v)), ga = G(() => i.reduce((p, v) => p + Number(Dl.value[v.countKey] || 0), 0)), cn = G(() => f.surface === "home"), un = G(() => f.surface === "shelves"), bs = G(() => !cn.value && !un.value && !Ui.value && !P.starred && P.sort !== "lastOpened" && !P.shelf), ys = G(() => [
      { key: "home", name: y("library", "Home"), href: Bt.value, active: cn.value },
      { key: "all", name: y("library", "All publications"), href: Ge.value, active: bs.value },
      { key: "starred", name: y("library", "Starred"), href: `${Ge.value}?starred=1`, active: P.starred === "1" },
      { key: "continue", name: y("library", "Continue reading"), href: `${Ge.value}?sort=lastOpened`, active: P.sort === "lastOpened" },
      { key: "shelves", name: y("library", "Shelves"), href: pi.value, active: un.value || !!P.shelf },
      { key: "collections", name: y("library", "Collections"), href: `${Ge.value}#library-collections`, active: !1 }
    ]), Qt = G(() => f.requestToken || ""), Ga = G(() => f.catalogueEndpointUrl || "/apps/library/catalogue"), _s = G(() => f.shelfChildrenUrl || "/apps/library/shelves/children"), ma = G(() => f.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), ba = G(() => f.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), dn = G(() => f.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), vi = G(() => f.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Ka = G(() => f.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Wa = G(() => f.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), xl = G(() => f.itemSidebarUrlTemplate || `${ut}/apps/library/items/__ITEM_ID__/sidebar`), ws = G(() => f.batchTagUrl || "/apps/library/bulk/tags"), qa = G(() => f.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Ss = G(() => f.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ya = G(() => f.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Nl = G(() => f.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), gi = G(() => f.scannerConflictReviewUrl || "?scannerConflicts=1");
    f.importHealthSummary, f.importHealthSummary && Object.keys(f.importHealthSummary).length > 0;
    const Xa = G(() => f.discoveryPage === "publication"), Za = G(() => f.discoveryPage === "year"), ot = G(() => f.discoveryPage === "creator"), In = G(() => Xa.value || Za.value || ot.value), Cs = G(() => f.discoveryTitle || P.publication || P.year || P.creator || ""), Ts = G(() => In.value ? Cs.value : y("library", "Library")), ya = G(() => ot.value ? y("library", "Creator") : Za.value ? y("library", "Publication year") : y("library", "Publication / series")), Ja = G(() => Number(f.rootCount || 0)), Es = G(() => Number(f.enabledRootCount || 0)), Qa = G(() => Ja.value === 0), er = G(() => Ja.value > 0 && Es.value === 0), As = G(() => ji.value.length > 0), ks = {
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
    }, Cn = G(() => {
      if (typeof window > "u") return "";
      const p = new URLSearchParams(window.location.search);
      if (p.get("batchMetadataApplyResult") !== "1") return "";
      const v = p.get("batchMetadataField") || "field", d = p.get("batchMetadataApplied") || "0", z = p.get("batchMetadataUnchanged") || "0", se = p.get("batchMetadataSkipped") || "0";
      return y("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: d, field: v, unchanged: z, skipped: se });
    }), tr = G(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? y("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Bi = G(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? y("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Pn = G(() => f.savedCollections || []), Ll = G(() => f.savedCollectionSaveUrl || "/apps/library/collections"), _a = G(() => f.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), nr = ["compact", "gallery", "list", "shelf"], Kt = G(() => nr.includes(P.view) ? P.view : "compact"), Os = G(() => ({
      "library-cover-gallery--compact": Kt.value === "compact",
      "library-cover-gallery--gallery": Kt.value === "gallery",
      "library-cover-gallery--shelf": Kt.value === "shelf"
    })), ji = G(() => Object.entries(ks).map(([p, v]) => ({ key: p, label: y("library", v), value: P[p] || "" })).filter((p) => String(p.value).trim() !== "" && !(p.key === "sort" && p.value === "title") && !(p.key === "view" && p.value === "compact"))), wa = /* @__PURE__ */ new Set([
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
    ]), ir = G(() => Object.entries(l(P)).filter(([p, v]) => !wa.has(p) && String(v || "").trim() !== "").map(([p, v]) => ({ key: p, value: v }))), Sa = G(() => Object.entries(P).filter(([p, v]) => !["q", "sort", "starred"].includes(p) && String(v || "").trim() !== "").map(([p, v]) => ({ key: p, value: v }))), Tn = G(() => Object.entries(l(P)).filter(([p, v]) => String(v || "").trim() !== "").map(([p, v]) => ({ key: p, value: v }))), Hi = G(() => Tn.value.filter(({ key: p, value: v }) => p !== "q" && !(p === "sort" && v === "title"))), Wt = /* @__PURE__ */ Pt({}), Ca = G(() => f.homeRows || { continueReading: [], recentlyAdded: [] }), Vi = G(() => f.homeShelves || []), xs = G(() => f.shelfTree || []), Ta = G(() => f.needsAttention || { count: 0, url: `${Ge.value}?needsMetadata=1` }), qt = /* @__PURE__ */ xe([]), Gi = G(() => new Set(qt.value));
    function ar(p, v) {
      const d = new Set(qt.value);
      v ? d.add(Number(p)) : d.delete(Number(p)), qt.value = [...d];
    }
    function Rl(p) {
      qt.value = p.currentTarget.checked ? h.value.map((v) => Number(v.id)) : [];
    }
    function Ns() {
      const p = new Set(h.value.map((v) => Number(v.id)));
      qt.value = qt.value.filter((v) => p.has(v));
    }
    function Il(p) {
      const v = p.target;
      if (v instanceof HTMLFormElement) {
        v.querySelectorAll("input[data-library-selected-id]").forEach((d) => d.remove());
        for (const d of qt.value) {
          const z = document.createElement("input");
          z.type = "hidden", z.name = "itemIds[]", z.value = String(d), z.dataset.librarySelectedId = "1", v.appendChild(z);
        }
      }
    }
    const Te = /* @__PURE__ */ xe(null), $n = /* @__PURE__ */ xe(null), gt = /* @__PURE__ */ Pt({ loading: !1, error: "", missing: !1 }), En = /* @__PURE__ */ xe("overview"), Y = /* @__PURE__ */ Pt({ saving: !1, saved: !1, error: "" }), w = /* @__PURE__ */ Pt({ title: "", publicationDate: "", identifiers: [] }), R = /* @__PURE__ */ xe(null), K = /* @__PURE__ */ xe(null), re = /* @__PURE__ */ xe(!1);
    let fe = null, ye = null, We = null, et = !1, mt = null, Tt = 0;
    const fn = G(() => $n.value !== null), pt = G(() => Te.value ? h.value.findIndex((p) => p.id === Te.value.id) : -1), Ls = G(() => pt.value > 0 ? h.value[pt.value - 1] : null), Rs = G(() => pt.value >= 0 && pt.value < h.value.length - 1 ? h.value[pt.value + 1] : null), gv = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], mv = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Is(p) {
      const v = String(p ?? "").trim(), d = v.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return d ? d[1] : v;
    }
    function Fu(p) {
      return { ...p, publicationDate: Is(p?.publicationDate) };
    }
    function zu(p) {
      w.title = String(p?.title || ""), w.publicationDate = Is(p?.publicationDate), w.identifiers = Array.isArray(p?.identifiers) ? p.identifiers.map((v) => ({ scheme: String(v?.scheme || ""), displayValue: String(v?.displayValue || v?.value || "") })) : [], Object.assign(Y, { saving: !1, saved: !1, error: "" });
    }
    function bv() {
      w.identifiers.push({ scheme: "", displayValue: "" });
    }
    function yv(p) {
      w.identifiers.splice(p, 1);
    }
    async function _v() {
      const p = Te.value;
      if (!p?.updateUrl || Y.saving) return;
      Object.assign(Y, { saving: !0, saved: !1, error: "" });
      const v = new FormData();
      v.set("requesttoken", Qt.value), v.set("metadataAutosave", "1");
      for (const d of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const z = p[d];
        v.set(d, Array.isArray(z) ? z.join(", ") : String(z ?? ""));
      }
      v.set("title", w.title), v.set("publicationDate", Is(w.publicationDate)), w.identifiers.forEach((d, z) => {
        v.set(`identifiers[${z}][scheme]`, d.scheme), v.set(`identifiers[${z}][displayValue]`, d.displayValue);
      });
      try {
        const d = await fetch(p.updateUrl, { method: "POST", body: v, credentials: "same-origin", headers: { Accept: "application/json" } }), z = await d.json().catch(() => ({}));
        if (!d.ok || z.saved !== !0) throw new Error(z.error || y("library", "Metadata could not be saved."));
        p.title = w.title.trim(), p.publicationDate = Is(w.publicationDate), p.identifiers = w.identifiers.filter((ke) => ke.scheme.trim() || ke.displayValue.trim()).map((ke) => ({ ...ke }));
        const se = h.value.find((ke) => Number(ke.id) === Number(p.id));
        se && (se.title = p.title, se.publicationDate = p.publicationDate), Y.saved = !0;
      } catch (d) {
        Y.error = d?.message || y("library", "Metadata could not be saved.");
      } finally {
        Y.saving = !1;
      }
    }
    const mi = G(() => {
      const p = r("scannerConflicts", P.scannerConflicts) || r("weakMetadata", P.weakMetadata), v = p ? h.value.find((d) => Ps(d).length > 0) : null;
      return {
        enabled: p,
        item: v,
        fields: v ? Ps(v) : [],
        reviewNextUrl: gi.value,
        skipUrl: I.value.nextUrl || gi.value
      };
    }), wv = G(() => i.map((p) => ({
      ...p,
      label: y("library", p.label),
      href: `${Ge.value}?${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`,
      active: String(P[p.key] || "") === p.value
    })));
    function Pl(p) {
      return Array.isArray(p) ? JSON.stringify(p) : p == null ? "" : String(p);
    }
    function Ps(p) {
      const v = p.fieldValues || {}, d = p.fieldSources || {};
      return gv.filter((z) => Object.prototype.hasOwnProperty.call(v, z)).map((z) => {
        const se = Pl(p[z]), ke = Pl(v[z]), Re = Pl(d[z] || p.metadataSource || "scanner"), it = Re.includes("filename") || Re.includes("path") ? ke : "", tn = Re.includes("sidecar") ? ke : "";
        return { field: z, currentValue: se, scannerCandidate: ke, pathTemplateCandidate: it, sidecarValue: tn, sourceProvenance: Re, differs: se !== ke };
      }).filter((z) => z.differs);
    }
    let Ki = 0, Wi = null;
    function Uu() {
      const p = new URLSearchParams(window.location.search).getAll("item");
      if (p.length !== 1 || !/^[1-9][0-9]*$/.test(p[0])) return null;
      const v = Number(p[0]);
      return Number.isSafeInteger(v) && v <= DN ? v : null;
    }
    function Bu(p, v = "push") {
      const d = new URL(window.location.href);
      d.searchParams.delete("item"), p !== null && d.searchParams.set("item", String(p)), history[`${v}State`]({}, "", `${d.pathname}${d.search}${d.hash}`);
    }
    async function rr(p, { historyMode: v = "push", seed: d = null } = {}) {
      Wi?.abort();
      const z = ++Ki, se = new AbortController();
      Wi = se, $n.value = p, En.value = "overview", Te.value = d && Number(d.id) === p ? Fu(d) : null, Te.value && zu(Te.value), Object.assign(gt, { loading: !0, error: "", missing: !1 }), v !== "none" && Bu(p, v);
      try {
        const ke = xl.value.replace("__ITEM_ID__", encodeURIComponent(String(p))), Re = await fetch(ke, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: se.signal });
        if (z !== Ki) return;
        if (!Re.ok) {
          Te.value = null, gt.missing = Re.status === 404, gt.error = Re.status === 404 ? y("library", "This publication is unavailable or you do not have access.") : y("library", "Could not load publication details. Try again.");
          return;
        }
        const it = await Re.json();
        if (z !== Ki) return;
        if (typeof it?.item?.id != "number" || !Number.isSafeInteger(it.item.id) || it.item.id !== p) {
          Te.value = null, gt.missing = !1, gt.error = y("library", "Could not load publication details. Try again.");
          return;
        }
        Te.value = Fu(it.item), zu(Te.value), await rn();
      } catch (ke) {
        z === Ki && ke?.name !== "AbortError" && (Te.value = null, gt.missing = !1, gt.error = y("library", "Could not load publication details. Try again."));
      } finally {
        z === Ki && (gt.loading = !1, Wi = null);
      }
    }
    function Dn(p, v) {
      $l(), fe = v?.currentTarget instanceof HTMLElement ? v.currentTarget : null, rr(Number(p.id), { seed: p });
    }
    function $s({ historyMode: p = "push", restoreFocus: v = !0 } = {}) {
      We = v ? fe : null, fe = null, Wi?.abort(), Wi = null, Ki += 1, $n.value = null, Te.value = null, En.value = "overview", Object.assign(gt, { loading: !1, error: "", missing: !1 }), p !== "none" && Bu(null, p);
    }
    function ju() {
      re.value ? (K.value?.$refs?.sidebar || K.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : R.value?.focus();
    }
    function Sv() {
      const p = We;
      if (We = null, $l(), et || !p?.isConnected) return;
      const v = Tt;
      mt = window.requestAnimationFrame(() => {
        mt = null, !(v !== Tt || et || fn.value || !p.isConnected) && p.focus();
      });
    }
    function $l() {
      Tt += 1, mt !== null && (window.cancelAnimationFrame(mt), mt = null);
    }
    function sr(p = ye) {
      re.value = !!p?.matches, fn.value && rn(ju);
    }
    function Ds(p) {
      p && rr(Number(p.id), { seed: p });
    }
    const or = /* @__PURE__ */ xe(null);
    let en = 0, Ea = null, Ms = null, lr = null;
    const An = /* @__PURE__ */ Pt({ loading: !1, error: "" });
    function Cv(p) {
      const v = s(new FormData(p));
      v.delete("publicationSearch"), v.delete("creatorSearch"), v.delete("subjectSearch"), v.delete("publisherSearch"), v.delete("folderSearch"), v.delete("yearSearch");
      for (const d of Array.from(v.keys()))
        String(v.get(d) || "").trim() === "" && v.delete(d);
      return v.delete("page"), v.get("view") === "compact" && v.delete("view"), v;
    }
    async function cr(p, v, d) {
      const z = new URLSearchParams();
      for (const [Re, it] of Object.entries(P)) {
        const tn = String(it || "").trim();
        Re !== p && tn !== "" && !(Re === "sort" && tn === "title") && !(Re === "view" && tn === "compact") && z.set(Re, tn);
      }
      z.set(`${p}Search`, v);
      const se = new AbortController();
      p === "creator" ? ct = se : p === "publisher" ? he = se : p === "subject" ? J = se : p === "folder" ? T = se : $e = se;
      const ke = p === "creator" ? ba.value : p === "publisher" ? dn.value : p === "subject" ? vi.value : p === "folder" ? Ka.value : Wa.value;
      try {
        const Re = await fetch(`${ke}?${z}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: se.signal });
        if (!Re.ok) throw new Error(`${p} suggestions request failed: ${Re.status}`);
        const it = await Re.json(), tn = p === "creator" ? ft : p === "publisher" ? pe : p === "subject" ? V : p === "folder" ? k : De, yi = p === "creator" ? we.value : p === "publisher" ? $.value : p === "subject" ? L.value : p === "folder" ? ht.value : ve.value;
        d === tn && yi.trim() === v && (p === "creator" ? Ke.value = Array.isArray(it.creators) ? it.creators : [] : p === "publisher" ? Z.value = Array.isArray(it.publishers) ? it.publishers : [] : p === "subject" ? U.value = Array.isArray(it.subjects) ? it.subjects : [] : p === "folder" ? Gt.value = Array.isArray(it.folders) ? it.folders : [] : ge.value = Array.isArray(it.years) ? it.years : []);
      } catch (Re) {
        Re?.name !== "AbortError" && (p === "creator" && d === ft && (Ke.value = null), p === "publisher" && d === pe && (Z.value = null), p === "subject" && d === V && (U.value = null), p === "folder" && d === k && (Gt.value = null), p === "year" && d === De && (ge.value = null));
      }
    }
    function Tv(p, v) {
      return cr("creator", p, v);
    }
    function Ev(p, v) {
      return cr("publisher", p, v);
    }
    function Av(p, v) {
      return cr("subject", p, v);
    }
    function kv(p, v) {
      return cr("folder", p, v);
    }
    function Ov(p, v) {
      return cr("year", p, v);
    }
    async function xv(p, v) {
      const d = new URLSearchParams();
      for (const [se, ke] of Object.entries(P)) {
        const Re = String(ke || "").trim();
        se !== "publication" && Re !== "" && !(se === "sort" && Re === "title") && !(se === "view" && Re === "compact") && d.set(se, Re);
      }
      d.set("publicationSearch", p);
      const z = new AbortController();
      ee = z;
      try {
        const se = await fetch(`${ma.value}?${d}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: z.signal
        });
        if (!se.ok) throw new Error(`Publication suggestions request failed: ${se.status}`);
        const ke = await se.json();
        v === ie && ce.value.trim() === p && (X.value = Array.isArray(ke.publications) ? ke.publications : []);
      } catch (se) {
        se?.name !== "AbortError" && v === ie && (X.value = null);
      } finally {
        v === ie && (ee = null);
      }
    }
    function Nv(p) {
      u.splice(0, u.length, ...(p.items || []).map((d) => ({ ...d }))), Ns();
      const v = new Set(p.facetsDeferred ? [
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
        !v.has(d) && Object.prototype.hasOwnProperty.call(p, d) && (f[d] = p[d]);
      Object.assign(P, nt, p.activeFilters || {});
    }
    async function Lv() {
      if (f.surface !== "index") return;
      const p = en, v = JSON.stringify({ ...P }), d = new URLSearchParams();
      d.set("hydrate", "1");
      for (const [se, ke] of Object.entries(P)) {
        const Re = String(ke || "").trim();
        Re !== "" && !(se === "sort" && Re === "title") && !(se === "view" && Re === "compact") && d.set(se, Re);
      }
      const z = new AbortController();
      Ms = z;
      try {
        const se = await fetch(`${Ga.value}${d.size ? `?${d}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: z.signal
        });
        if (!se.ok) return;
        const ke = await se.json();
        if (p !== en || v !== JSON.stringify({ ...P })) return;
        for (const Re of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(ke, Re) && (f[Re] = ke[Re]);
      } catch (se) {
        if (se?.name !== "AbortError") return;
      } finally {
        Ms === z && (Ms = null);
      }
    }
    async function hn(p, v = null) {
      const d = p?.currentTarget?.tagName === "FORM" ? p.currentTarget : p?.currentTarget?.form;
      if (!d && !v?.params) return;
      const z = s(v?.params ?? Cv(d));
      if (cn.value || un.value) {
        ur(z, Ge.value);
        return;
      }
      const se = z.toString(), ke = se ? `?${se}` : "", Re = v?.generation ?? ++en, it = o(z), tn = v?.historyMode ?? (it ? "push" : "replace"), yi = v?.historyTraversal === !0;
      if (Re !== en) return;
      v === null && Ea?.abort();
      const Aa = new AbortController();
      Ea = Aa, An.loading = !0, An.error = "";
      try {
        const Mn = await fetch(Ga.value + ke, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Aa.signal
        });
        if (Re !== en) return;
        if (!Mn.ok) {
          yi ? ur(z) : it ? An.error = y("library", "Could not load this review queue. Try again.") : ur(z);
          return;
        }
        const ig = await Mn.json();
        if (Re !== en) return;
        Nv(ig), tn !== "none" && (history[tn === "push" ? "pushState" : "replaceState"]({}, "", se ? `?${se}` : window.location.pathname), fn.value && $s({ historyMode: "none" }));
      } catch (Mn) {
        Re === en && Mn?.name !== "AbortError" && (yi ? ur(z) : it ? An.error = y("library", "Could not load this review queue. Try again.") : ur(z));
      } finally {
        Re === en && (Ea = null, An.loading = !1);
      }
    }
    function Hu() {
      Ea?.abort();
      const p = new URLSearchParams(window.location.search), v = Uu();
      p.has("item") && v === null && (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)), v === null ? $s({ historyMode: "none" }) : rr(v, { historyMode: "none", seed: h.value.find((d) => Number(d.id) === v) || null }), p.delete("item"), hn(null, {
        params: s(p),
        generation: ++en,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function ur(p, v = window.location.pathname) {
      const d = document.createElement("form");
      d.method = "get", d.action = v, d.hidden = !0;
      for (const [z, se] of p.entries()) {
        const ke = document.createElement("input");
        ke.type = "hidden", ke.name = z, ke.value = se, d.appendChild(ke);
      }
      document.body.appendChild(d), d.submit(), d.remove();
    }
    function bi(p, v = null, d = null) {
      if (v === null) {
        hn(p);
        return;
      }
      hn({ currentTarget: p }, { params: v, generation: d });
    }
    async function Rv(p, v = ce.value) {
      P.publication = String(v || "").trim(), ce.value = P.publication, de.value = !1, await rn(), hn({ currentTarget: p });
    }
    function Iv(p, v) {
      Rv(v.currentTarget.form, p);
    }
    async function Pv(p) {
      P.q = String(Q.value || "").trim(), P.publication = String(ce.value || "").trim(), P.publisher = String($.value || "").trim(), P.creator = String(we.value || "").trim(), P.subject = String(L.value || "").trim(), P.folder = String(ht.value || "").trim(), P.year = String(ve.value || "").trim(), de.value = !1, F.value = !1, be.value = !1, N.value = !1, Qe.value = !1, ae.value = !1, await rn(), hn({ currentTarget: p });
    }
    async function dr(p, v, d) {
      P[v] = String(d || "").trim(), v === "creator" ? (we.value = P.creator, be.value = !1) : v === "publisher" ? ($.value = P.publisher, F.value = !1) : v === "subject" ? (L.value = P.subject, N.value = !1) : v === "folder" ? (ht.value = P.folder, Qe.value = !1) : (ve.value = P.year, ae.value = !1), await rn(), hn({ currentTarget: p });
    }
    function $v(p) {
      Pv(p.currentTarget);
    }
    function Dv(p, v) {
      dr(v.currentTarget.form, "creator", p);
    }
    function Mv(p, v) {
      dr(v.currentTarget.form, "publisher", p);
    }
    function Fv(p, v) {
      dr(v.currentTarget.form, "folder", p);
    }
    function Vu(p, v = L.value) {
      window.clearTimeout(H), J?.abort(), J = null, dr(p, "subject", v);
    }
    function zv(p) {
      Vu(p.currentTarget.form);
    }
    function Uv(p, v) {
      Vu(v.currentTarget.form, p);
    }
    function Bv(p, v) {
      dr(v.currentTarget.form, "year", p);
    }
    function Gu(p) {
      const v = new URLSearchParams();
      for (const [d, z] of Object.entries(P)) {
        const se = String(z || "").trim();
        se !== "" && d !== p && !(d === "sort" && se === "title") && !(d === "view" && se === "compact") && v.set(d, se);
      }
      return v;
    }
    function Ku(p) {
      const v = Gu(p).toString();
      return cn.value || un.value ? `${Ge.value}${v ? `?${v}` : ""}` : v ? `?${v}` : "?";
    }
    function jv(p) {
      const v = Gu(p);
      P[p] = p === "sort" ? "title" : p === "view" ? "compact" : "", hn(null, {
        params: v,
        generation: ++en
      });
    }
    function Hv(p) {
      const v = new URL(p.href, window.location.origin).searchParams;
      hn(null, {
        params: v,
        generation: ++en
      });
    }
    function Vv() {
      return Ku("q");
    }
    const Dl = G(() => f.smartViewCounts || {}), Gv = G(() => new Set(f.smartViewCountsPending || []));
    function Kv(p) {
      return Gv.value.has(p) || !Object.prototype.hasOwnProperty.call(Dl.value, p) ? "—" : Number(Dl.value[p] || 0);
    }
    const Wu = G(() => {
      const p = {};
      for (const [v, d] of Object.entries(P)) {
        const z = String(d || "").trim();
        z !== "" && !(v === "sort" && z === "title") && (p[v] = z);
      }
      return p;
    }), Wv = G(() => JSON.stringify(Wu.value)), Ml = G(() => Object.keys(Wu.value).length > 0);
    function Fs(p) {
      if (!nr.includes(p)) return;
      P.view = p;
      const v = new URLSearchParams();
      for (const [d, z] of Object.entries(l(P))) {
        const se = String(z || "").trim();
        se !== "" && !(d === "sort" && se === "title") && !(d === "view" && se === "compact") && v.set(d, se);
      }
      v.delete("page"), hn(null, {
        params: v,
        generation: ++en
      });
    }
    function qv(p) {
      const v = s(window.location.search);
      for (const z of Object.keys(ks))
        v.delete(z);
      v.delete("page");
      for (const [z, se] of Object.entries(p))
        String(se || "").trim() !== "" && v.set(z, String(se));
      const d = v.toString();
      return d ? `?${d}` : "?";
    }
    function Yv(p) {
      return qv(p || {});
    }
    function Xv(p) {
      return _a.value.replace("__COLLECTION_ID__", encodeURIComponent(String(p || "0")));
    }
    function fr(p) {
      return String(p || "").toUpperCase();
    }
    function hr(p) {
      return Wt[p.id] || "loading";
    }
    function Zv(p) {
      Wt[p.id] = "loaded";
    }
    function Jv(p) {
      Wt[p.id] = "error";
    }
    function Fl(p) {
      const v = String(p?.publication || "").trim(), d = String(p?.publicationDate || "").trim();
      return v && d ? `${v} · ${d}` : v || d ? v || d : [p?.publicationType, fr(p?.extension)].filter(Boolean).join(" · ");
    }
    function Qv(p) {
      const v = String(p?.tagName || "").toLowerCase();
      return p?.isContentEditable || ["input", "select", "textarea", "button"].includes(v);
    }
    function eg(p) {
      p.key !== "/" || p.metaKey || p.ctrlKey || p.altKey || p.shiftKey || Qv(p.target) || (p.preventDefault(), or.value?.focus(), or.value?.select?.());
    }
    async function tg(p) {
      p.key !== "Escape" || document.activeElement !== or.value || P.q === "" || (p.preventDefault(), Q.value = "", P.q = "", await rn(), bi({ currentTarget: or.value }));
    }
    function ng(p) {
      if (!fn.value || p.metaKey || p.ctrlKey || p.altKey)
        return !1;
      if (p.key === "Escape")
        return p.preventDefault(), $s(), !0;
      if (p.key === "Tab" && re.value) {
        if (K.value?.focusTrap) return !1;
        const v = K.value?.$refs?.sidebar || K.value?.$el || K.value, d = [...v?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((ke) => !ke.hidden && ke.getAttribute("aria-hidden") !== "true");
        if (d.length === 0) return !1;
        const z = d[0], se = d[d.length - 1];
        if (p.shiftKey && (document.activeElement === z || !v.contains(document.activeElement)))
          return p.preventDefault(), se.focus(), !0;
        if (!p.shiftKey && (document.activeElement === se || !v.contains(document.activeElement)))
          return p.preventDefault(), z.focus(), !0;
      }
      return p.key === "ArrowLeft" && Ls.value ? (p.preventDefault(), Ds(Ls.value), !0) : p.key === "ArrowRight" && Rs.value ? (p.preventDefault(), Ds(Rs.value), !0) : !1;
    }
    function qu(p) {
      ng(p) || (eg(p), tg(p));
    }
    Di(() => {
      window.addEventListener("keydown", qu), window.addEventListener("popstate", Hu), ye = window.matchMedia?.("(max-width: 1023px)") || null, sr(), ye?.addEventListener ? ye.addEventListener("change", sr) : ye?.addListener?.(sr);
      const p = new URLSearchParams(window.location.search), v = Uu();
      p.has("item") && v === null ? (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)) : v !== null && rr(v, { historyMode: "none", seed: h.value.find((d) => Number(d.id) === v) || null }), lr = window.requestAnimationFrame(() => {
        lr = null, Lv();
      });
    }), Va(() => {
      et = !0, $l(), window.removeEventListener("keydown", qu), window.removeEventListener("popstate", Hu), window.clearTimeout(me), window.clearTimeout(lt), window.clearTimeout(H), window.clearTimeout(Ne), ee?.abort(), ct?.abort(), J?.abort(), $e?.abort(), en += 1, lr !== null && window.cancelAnimationFrame(lr), lr = null, Ms?.abort(), Ea?.abort(), Ea = null, Ki += 1, Wi?.abort(), Wi = null, ye?.removeEventListener ? ye.removeEventListener("change", sr) : ye?.removeListener?.(sr), ye = null, We = null;
    });
    const pr = /* @__PURE__ */ Pt({}), vr = /* @__PURE__ */ Pt({});
    async function Yu(p, v) {
      const d = v?.currentTarget?.closest?.("form") || v?.currentTarget;
      if (!d || !p?.starUrl || pr[p.id]) return;
      const z = !!p.starred;
      pr[p.id] = !0, vr[p.id] = "", p.starred = !z;
      try {
        (await fetch(p.starUrl, {
          method: "POST",
          body: new FormData(d),
          credentials: "same-origin"
        })).ok || (p.starred = z, vr[p.id] = y("library", "Could not update star. Try again."));
      } catch {
        p.starred = z, vr[p.id] = y("library", "Could not update star. Try again.");
      } finally {
        pr[p.id] = !1;
      }
    }
    return (p, v) => (_(), ze(b(qC), { "app-name": "library" }, {
      default: Oe(() => [
        _e(b(x1), {
          "aria-label": b(y)("library", "Library navigation")
        }, {
          list: Oe(() => [
            _e(b($p), null, {
              default: Oe(() => [
                (_(!0), C(ue, null, Fe(ys.value, (d) => (_(), ze(b(Mf), {
                  key: d.key,
                  active: d.active,
                  href: d.href,
                  name: d.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                _e(b(Mf), {
                  active: Ui.value,
                  href: zi.value,
                  name: ga.value > 0 ? `${b(y)("library", "Review")} (${ga.value})` : b(y)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Oe(() => [
            c("section", oT, [
              c("h2", lT, g(b(y)("library", "Filters")), 1),
              c("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": b(y)("library", "Catalogue search and filters"),
                onSubmit: Ue($v, ["prevent"])
              }, [
                c("input", {
                  type: "hidden",
                  name: "folder",
                  value: P.folder
                }, null, 8, uT),
                (_(!0), C(ue, null, Fe(ir.value, (d) => (_(), C("input", {
                  key: `sidebar-${d.key}`,
                  type: "hidden",
                  name: d.key,
                  value: d.value
                }, null, 8, dT))), 128)),
                P.sort && P.sort !== "title" ? (_(), C("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: P.sort
                }, null, 8, fT)) : j("", !0),
                P.view && P.view !== "compact" ? (_(), C("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: P.view
                }, null, 8, hT)) : j("", !0),
                c("label", {
                  class: "library-quick-filter-search",
                  title: b(y)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  c("span", null, [
                    Ie(g(b(y)("library", "Search")) + " ", 1),
                    v[51] || (v[51] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  qe(c("input", {
                    ref_key: "quickSearchInput",
                    ref: or,
                    "onUpdate:modelValue": v[0] || (v[0] = (d) => Q.value = d),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: b(y)("library", "Title, creator, description, filename or folder")
                  }, null, 8, vT), [
                    [Yt, Q.value]
                  ])
                ], 8, pT),
                c("label", null, [
                  Ie(g(b(y)("library", "Type")), 1),
                  qe(c("select", {
                    "onUpdate:modelValue": v[1] || (v[1] = (d) => P.type = d),
                    name: "type",
                    onChange: v[2] || (v[2] = (d) => bi(d))
                  }, [
                    c("option", gT, g(b(y)("library", "All types")), 1),
                    (_(!0), C(ue, null, Fe(x.value, (d) => (_(), C("option", {
                      key: d,
                      value: d
                    }, g(d), 9, mT))), 128))
                  ], 544), [
                    [wi, P.type]
                  ])
                ]),
                c("div", bT, [
                  c("label", yT, g(b(y)("library", "Publisher")), 1),
                  qe(c("input", {
                    id: "library-publisher-search",
                    "onUpdate:modelValue": v[3] || (v[3] = (d) => $.value = d),
                    type: "search",
                    name: "publisherSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Search publishers"),
                    title: b(y)("library", "Exact publisher matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publisher-suggestions",
                    "aria-expanded": F.value && oe.value.length > 0 ? "true" : "false",
                    onFocus: v[4] || (v[4] = (d) => F.value = !0),
                    onKeydown: v[5] || (v[5] = yt((d) => F.value = !1, ["escape"]))
                  }, null, 40, _T), [
                    [Yt, $.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publisher",
                    value: P.publisher
                  }, null, 8, wT),
                  F.value && oe.value.length > 0 ? (_(), C("ul", ST, [
                    (_(!0), C(ue, null, Fe(oe.value, (d) => (_(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publisher-suggestion",
                        onMousedown: v[6] || (v[6] = Ue(() => {
                        }, ["prevent"])),
                        onClick: (z) => Mv(d, z)
                      }, g(d), 41, CT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", TT, g(b(y)("library", "Apply publisher")), 1)
                ]),
                c("div", ET, [
                  c("label", AT, g(b(y)("library", "Series / periodical")), 1),
                  qe(c("input", {
                    id: "library-publication-search",
                    "onUpdate:modelValue": v[7] || (v[7] = (d) => ce.value = d),
                    type: "search",
                    name: "publicationSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Search series and periodicals"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publication-suggestions",
                    "aria-expanded": de.value && le.value.length > 0 ? "true" : "false",
                    onFocus: v[8] || (v[8] = (d) => de.value = !0),
                    onKeydown: v[9] || (v[9] = yt((d) => de.value = !1, ["escape"]))
                  }, null, 40, kT), [
                    [Yt, ce.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publication",
                    value: P.publication
                  }, null, 8, OT),
                  de.value && le.value.length > 0 ? (_(), C("ul", xT, [
                    (_(!0), C(ue, null, Fe(le.value, (d) => (_(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: v[10] || (v[10] = Ue(() => {
                        }, ["prevent"])),
                        onClick: (z) => Iv(d, z)
                      }, g(d), 41, NT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", LT, g(b(y)("library", "Apply series")), 1)
                ]),
                c("div", RT, [
                  c("label", IT, g(b(y)("library", "Publication year")), 1),
                  qe(c("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": v[11] || (v[11] = (d) => ve.value = d),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": ae.value && Ce.value.length > 0 ? "true" : "false",
                    onFocus: v[12] || (v[12] = (d) => ae.value = !0),
                    onKeydown: v[13] || (v[13] = yt((d) => ae.value = !1, ["escape"]))
                  }, null, 40, PT), [
                    [Yt, ve.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "year",
                    value: P.year
                  }, null, 8, $T),
                  ae.value && Ce.value.length > 0 ? (_(), C("ul", DT, [
                    (_(!0), C(ue, null, Fe(Ce.value, (d) => (_(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: v[14] || (v[14] = Ue(() => {
                        }, ["prevent"])),
                        onClick: (z) => Bv(d, z)
                      }, g(d), 41, MT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", FT, g(b(y)("library", "Apply year")), 1)
                ]),
                c("div", zT, [
                  c("label", UT, g(b(y)("library", "Creator")), 1),
                  qe(c("input", {
                    id: "library-creator-search",
                    "onUpdate:modelValue": v[15] || (v[15] = (d) => we.value = d),
                    type: "search",
                    name: "creatorSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Search creators"),
                    title: b(y)("library", "Exact full-field creator matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-creator-suggestions",
                    "aria-expanded": be.value && Ae.value.length > 0 ? "true" : "false",
                    onFocus: v[16] || (v[16] = (d) => be.value = !0),
                    onKeydown: v[17] || (v[17] = yt((d) => be.value = !1, ["escape"]))
                  }, null, 40, BT), [
                    [Yt, we.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "creator",
                    value: P.creator
                  }, null, 8, jT),
                  be.value && Ae.value.length > 0 ? (_(), C("ul", HT, [
                    (_(!0), C(ue, null, Fe(Ae.value, (d) => (_(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: v[18] || (v[18] = Ue(() => {
                        }, ["prevent"])),
                        onClick: (z) => Dv(d, z)
                      }, g(d), 41, VT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", GT, g(b(y)("library", "Apply creator")), 1)
                ]),
                c("label", null, [
                  Ie(g(b(y)("library", "Nextcloud tag")), 1),
                  qe(c("input", {
                    "onUpdate:modelValue": v[19] || (v[19] = (d) => P.tag = d),
                    type: "text",
                    name: "tag",
                    placeholder: b(y)("library", "photography")
                  }, null, 8, KT), [
                    [Yt, P.tag]
                  ])
                ]),
                c("label", null, [
                  Ie(g(b(y)("library", "Format")), 1),
                  qe(c("select", {
                    "onUpdate:modelValue": v[20] || (v[20] = (d) => P.format = d),
                    name: "format",
                    onChange: v[21] || (v[21] = (d) => bi(d))
                  }, [
                    c("option", WT, g(b(y)("library", "All formats")), 1),
                    (_(!0), C(ue, null, Fe(E.value, (d) => (_(), C("option", {
                      key: d,
                      value: d
                    }, g(fr(d)), 9, qT))), 128))
                  ], 544), [
                    [wi, P.format]
                  ])
                ]),
                c("label", null, [
                  Ie(g(b(y)("library", "Shelf")), 1),
                  qe(c("select", {
                    "onUpdate:modelValue": v[22] || (v[22] = (d) => P.shelf = d),
                    name: "shelf",
                    onChange: v[23] || (v[23] = (d) => bi(d))
                  }, [
                    c("option", YT, g(b(y)("library", "All shelves")), 1),
                    (_(!0), C(ue, null, Fe(S.value, (d) => (_(), C("option", {
                      key: d,
                      value: d
                    }, g(d), 9, XT))), 128))
                  ], 544), [
                    [wi, P.shelf]
                  ])
                ]),
                c("div", ZT, [
                  c("label", JT, g(b(y)("library", "Folder")), 1),
                  qe(c("input", {
                    id: "library-folder-search",
                    "onUpdate:modelValue": v[24] || (v[24] = (d) => ht.value = d),
                    type: "search",
                    name: "folderSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Type at least 3 path characters"),
                    title: b(y)("library", "Select an exact folder path"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-folder-suggestions",
                    "aria-expanded": Qe.value && B.value.length > 0 ? "true" : "false",
                    onFocus: v[25] || (v[25] = (d) => Qe.value = !0),
                    onKeydown: v[26] || (v[26] = yt((d) => Qe.value = !1, ["escape"]))
                  }, null, 40, QT), [
                    [Yt, ht.value]
                  ]),
                  Qe.value && B.value.length > 0 ? (_(), C("ul", eE, [
                    (_(!0), C(ue, null, Fe(B.value, (d) => (_(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-folder-suggestion",
                        onMousedown: v[27] || (v[27] = Ue(() => {
                        }, ["prevent"])),
                        onClick: (z) => Fv(d, z)
                      }, g(d), 41, tE)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", nE, g(b(y)("library", "Apply folder")), 1)
                ]),
                c("label", null, [
                  Ie(g(b(y)("library", "Scan status")), 1),
                  qe(c("select", {
                    "onUpdate:modelValue": v[28] || (v[28] = (d) => P.status = d),
                    name: "status",
                    onChange: v[29] || (v[29] = (d) => bi(d))
                  }, [
                    c("option", iE, g(b(y)("library", "All scan statuses")), 1),
                    (_(!0), C(ue, null, Fe(D.value, (d) => (_(), C("option", {
                      key: d,
                      value: d
                    }, g(d), 9, aE))), 128))
                  ], 544), [
                    [wi, P.status]
                  ])
                ]),
                c("label", null, [
                  Ie(g(b(y)("library", "Workflow status")), 1),
                  qe(c("select", {
                    "onUpdate:modelValue": v[30] || (v[30] = (d) => P.workflowStatus = d),
                    name: "workflowStatus",
                    onChange: v[31] || (v[31] = (d) => bi(d))
                  }, [
                    c("option", rE, g(b(y)("library", "All workflow statuses")), 1),
                    (_(!0), C(ue, null, Fe(M.value, (d) => (_(), C("option", {
                      key: d,
                      value: d
                    }, g(d), 9, sE))), 128))
                  ], 544), [
                    [wi, P.workflowStatus]
                  ])
                ]),
                c("div", oE, [
                  c("label", lE, g(b(y)("library", "Subject")), 1),
                  qe(c("input", {
                    id: "library-subject-search",
                    "onUpdate:modelValue": v[32] || (v[32] = (d) => L.value = d),
                    type: "search",
                    name: "subjectSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Search subjects"),
                    title: b(y)("library", "Exact subject matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-subject-suggestions",
                    "aria-expanded": N.value && q.value.length > 0 ? "true" : "false",
                    onFocus: v[33] || (v[33] = (d) => N.value = !0),
                    onKeydown: v[34] || (v[34] = yt((d) => N.value = !1, ["escape"]))
                  }, null, 40, cE), [
                    [Yt, L.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "subject",
                    value: P.subject
                  }, null, 8, uE),
                  N.value && q.value.length > 0 ? (_(), C("ul", dE, [
                    (_(!0), C(ue, null, Fe(q.value, (d) => (_(), C("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-subject-suggestion",
                        onMousedown: v[35] || (v[35] = Ue(() => {
                        }, ["prevent"])),
                        onClick: (z) => Uv(d, z)
                      }, g(d), 41, fE)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", {
                    type: "button",
                    class: "button secondary library-subject-apply",
                    onClick: zv
                  }, g(b(y)("library", "Apply subject")), 1)
                ]),
                c("label", null, [
                  Ie(g(b(y)("library", "Classification")), 1),
                  qe(c("select", {
                    "onUpdate:modelValue": v[36] || (v[36] = (d) => P.classification = d),
                    name: "classification",
                    onChange: v[37] || (v[37] = (d) => bi(d))
                  }, [
                    c("option", hE, g(b(y)("library", "All classifications")), 1),
                    (_(!0), C(ue, null, Fe(W.value, (d) => (_(), C("option", {
                      key: d,
                      value: d
                    }, g(d), 9, pE))), 128))
                  ], 544), [
                    [wi, P.classification]
                  ])
                ]),
                c("label", null, [
                  Ie(g(b(y)("library", "Suggested updates")), 1),
                  qe(c("select", {
                    "onUpdate:modelValue": v[38] || (v[38] = (d) => P.scannerConflicts = d),
                    name: "scannerConflicts",
                    onChange: v[39] || (v[39] = (d) => bi(d))
                  }, [
                    c("option", vE, g(b(y)("library", "All metadata")), 1),
                    c("option", gE, g(b(y)("library", "Suggested updates")), 1)
                  ], 544), [
                    [wi, P.scannerConflicts]
                  ])
                ]),
                c("button", mE, g(b(y)("library", "Apply filters")), 1),
                c("a", bE, g(b(y)("library", "Clear")), 1)
              ], 40, cT)
            ]),
            c("a", {
              class: "library-navigation-settings-link",
              href: Jt.value
            }, [
              v[52] || (v[52] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, g(b(y)("library", "Settings")), 1)
            ], 8, yE)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        _e(b(G_), null, {
          default: Oe(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: f.language || "en",
              dir: f.direction || "ltr",
              tabindex: "-1"
            }, [
              ji.value.length > 0 ? (_(), C("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": b(y)("library", "Active filters")
              }, [
                c("span", null, g(b(y)("library", "Active filters")), 1),
                (_(!0), C(ue, null, Fe(ji.value, (d) => (_(), C("a", {
                  key: d.key,
                  href: Ku(d.key),
                  class: "library-filter-chip",
                  "aria-label": `${b(y)("library", "Remove filter")}: ${d.label}`,
                  onClick: Ue((z) => jv(d.key), ["prevent"])
                }, [
                  c("strong", null, g(d.label) + ":", 1),
                  Ie(" " + g(d.value) + " ", 1),
                  v[53] || (v[53] = c("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, SE))), 128))
              ], 8, wE)) : j("", !0),
              Ui.value ? (_(), C("section", CE, [
                c("header", TE, [
                  c("p", EE, g(b(y)("library", "Metadata cleanup")), 1),
                  c("h2", AE, g(b(y)("library", "Review")), 1),
                  c("p", null, g(b(y)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": b(y)("library", "Review queues")
                }, [
                  (_(!0), C(ue, null, Fe(wv.value, (d) => (_(), C("a", {
                    key: d.key,
                    class: Ee(["library-review-queue-link", { active: d.active }]),
                    href: d.href,
                    "aria-current": d.active ? "page" : void 0,
                    onClick: Ue((z) => Hv(d), ["prevent"])
                  }, [
                    c("span", null, g(d.label), 1),
                    c("b", null, g(Kv(d.countKey)), 1)
                  ], 10, OE))), 128))
                ], 8, kE),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": b(y)("library", "Filter current review queue"),
                  onSubmit: Ue(hn, ["prevent"])
                }, [
                  (_(!0), C(ue, null, Fe(Hi.value, (d) => (_(), C("input", {
                    key: `review-${d.key}`,
                    type: "hidden",
                    name: d.key,
                    value: d.value
                  }, null, 8, NE))), 128)),
                  c("label", null, [
                    Ie(g(b(y)("library", "Search within this queue")), 1),
                    qe(c("input", {
                      "onUpdate:modelValue": v[40] || (v[40] = (d) => P.q = d),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [Yt, P.q]
                    ])
                  ]),
                  c("button", LE, g(b(y)("library", "Apply")), 1)
                ], 40, xE),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": An.loading ? "true" : "false"
                }, [
                  An.loading ? (_(), C("span", IE, g(b(y)("library", "Loading review queue…")), 1)) : j("", !0)
                ], 8, RE),
                An.error ? (_(), C("p", PE, g(An.error), 1)) : j("", !0),
                mi.value.enabled ? (_(), C("section", $E, [
                  c("div", DE, [
                    c("p", ME, g(b(y)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: b(y)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, g(b(y)("library", "Review next suggestion")), 9, FE)
                  ]),
                  mi.value.item ? (_(), C("article", zE, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", UE, g(mi.value.item.title), 1)
                      ]),
                      c("span", BE, [
                        c("bdi", jE, g(mi.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", HE, [
                      (_(!0), C(ue, null, Fe(mi.value.fields, (d) => (_(), C("article", {
                        key: d.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", VE, g(d.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, g(b(y)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", GE, g(d.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, g(b(y)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", KE, g(d.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, g(b(y)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", WE, g(d.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, g(b(y)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", qE, g(d.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, g(b(y)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", YE, g(d.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: mi.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Qt.value
                          }, null, 8, ZE),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: d.field
                          }, null, 8, JE),
                          v[54] || (v[54] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", QE, g(b(y)("library", "Use suggested value")), 1)
                        ], 8, XE)
                      ]))), 128))
                    ]),
                    c("footer", eA, [
                      c("a", {
                        class: "button secondary",
                        href: mi.value.item.detailsUrl
                      }, g(b(y)("library", "Maintenance")), 9, tA),
                      c("a", {
                        class: "button secondary",
                        href: mi.value.skipUrl
                      }, g(b(y)("library", "Skip to next suggestion")), 9, nA)
                    ])
                  ])) : j("", !0)
                ])) : j("", !0),
                h.value.length === 0 && !An.loading && !An.error ? (_(), C("div", iA, [
                  c("h3", null, g(b(y)("library", "This review queue is clear")), 1),
                  c("p", null, g(b(y)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: Ge.value
                  }, g(b(y)("library", "Back to Library")), 9, aA)
                ])) : (_(), C("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": b(y)("library", "Review results")
                }, [
                  (_(!0), C(ue, null, Fe(h.value, (d) => (_(), C("article", {
                    key: d.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (z) => Dn(d, z)
                        }, [
                          c("bdi", oA, g(d.title), 1)
                        ], 8, sA)
                      ]),
                      d.creators ? (_(), C("p", lA, [
                        c("bdi", cA, g(d.creators), 1)
                      ])) : j("", !0),
                      d.scanError ? (_(), C("p", uA, [
                        c("bdi", dA, g(d.scanError), 1)
                      ])) : j("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (z) => Dn(d, z)
                      }, g(b(y)("library", "Details")), 9, fA),
                      c("a", {
                        class: "button primary",
                        href: d.openUrl
                      }, g(b(y)("library", "Open")), 9, hA)
                    ])
                  ]))), 128))
                ], 8, rA)),
                h.value.length > 0 ? (_(), C("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": b(y)("library", "Review pagination")
                }, [
                  I.value.previousUrl ? (_(), C("a", {
                    key: 0,
                    href: I.value.previousUrl
                  }, g(b(y)("library", "Previous")), 9, vA)) : (_(), C("span", gA, g(b(y)("library", "Previous")), 1)),
                  c("span", null, [
                    Ie(g(b(y)("library", "Page")) + " " + g(I.value.page), 1),
                    I.value.total > 0 ? (_(), C("span", mA, " · " + g(I.value.from) + "–" + g(I.value.to), 1)) : j("", !0)
                  ]),
                  I.value.nextUrl ? (_(), C("a", {
                    key: 2,
                    href: I.value.nextUrl
                  }, g(b(y)("library", "Next")), 9, bA)) : (_(), C("span", yA, g(b(y)("library", "Next")), 1))
                ], 8, pA)) : j("", !0)
              ])) : cn.value ? (_(), C("main", _A, [
                c("header", wA, [
                  c("p", SA, g(b(y)("library", "Your library")), 1),
                  c("h2", CA, g(b(y)("library", "Home")), 1)
                ]),
                c("section", TA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", EA, g(b(y)("library", "Continue reading")), 1),
                      c("p", AA, g(b(y)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${Ge.value}?sort=lastOpened`
                    }, g(b(y)("library", "View all")), 9, kA)
                  ]),
                  Ca.value.continueReading.length ? (_(), C("div", OA, [
                    (_(!0), C(ue, null, Fe(Ca.value.continueReading, (d) => (_(), C("article", {
                      key: `continue-${d.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (z) => Dn(d, z)
                      }, [
                        c("span", NA, [
                          c("img", {
                            class: "library-cover-image",
                            src: d.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, LA)
                        ])
                      ], 8, xA),
                      c("div", RA, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (z) => Dn(d, z)
                          }, [
                            c("bdi", PA, g(d.title), 1)
                          ], 8, IA)
                        ]),
                        d.creators ? (_(), C("p", $A, [
                          c("bdi", DA, g(d.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: d.openUrl
                        }, g(b(y)("library", "Open")), 9, MA)
                      ])
                    ]))), 128))
                  ])) : (_(), C("p", FA, g(b(y)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", zA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", UA, g(b(y)("library", "Recently added")), 1),
                      c("p", BA, g(b(y)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${Ge.value}?sort=recent`
                    }, g(b(y)("library", "View all")), 9, jA)
                  ]),
                  Ca.value.recentlyAdded.length ? (_(), C("div", HA, [
                    (_(!0), C(ue, null, Fe(Ca.value.recentlyAdded, (d) => (_(), C("article", {
                      key: `recent-${d.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (z) => Dn(d, z)
                      }, [
                        c("span", GA, [
                          c("img", {
                            class: "library-cover-image",
                            src: d.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, KA)
                        ])
                      ], 8, VA),
                      c("div", WA, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (z) => Dn(d, z)
                          }, [
                            c("bdi", YA, g(d.title), 1)
                          ], 8, qA)
                        ]),
                        d.creators ? (_(), C("p", XA, [
                          c("bdi", ZA, g(d.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: d.openUrl
                        }, g(b(y)("library", "Open")), 9, JA)
                      ])
                    ]))), 128))
                  ])) : (_(), C("p", QA, g(b(y)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", ek, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", tk, g(b(y)("library", "Shelves")), 1),
                      c("p", nk, g(b(y)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: pi.value }, g(b(y)("library", "View all")), 9, ik)
                  ]),
                  Vi.value.length ? (_(), C("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": b(y)("library", "Shelves")
                  }, [
                    (_(!0), C(ue, null, Fe(Vi.value, (d) => (_(), C("a", {
                      key: d.shelf,
                      href: d.url
                    }, [
                      c("strong", null, [
                        c("bdi", sk, g(d.shelf), 1)
                      ]),
                      c("span", null, g(b(Un)("library", "%n item", "%n items", Number(d.itemCount || 0))), 1)
                    ], 8, rk))), 128))
                  ], 8, ak)) : (_(), C("p", ok, g(b(y)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(Ta.value.count || 0) > 0 ? (_(), C("aside", lk, [
                  c("div", null, [
                    c("h3", ck, g(b(y)("library", "Needs attention")), 1),
                    c("p", uk, g(b(Un)("library", "%n publication needs better details.", "%n publications need better details.", Number(Ta.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: Ta.value.url
                  }, g(b(y)("library", "Review")), 9, dk)
                ])) : j("", !0)
              ])) : un.value ? (_(), C("main", fk, [
                c("header", hk, [
                  c("p", pk, g(b(y)("library", "Your library")), 1),
                  c("h2", vk, g(b(y)("library", "Shelves")), 1),
                  c("p", gk, g(b(y)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                xs.value.length ? (_(), C("nav", {
                  key: 0,
                  "aria-label": b(y)("library", "Shelves")
                }, [
                  c("ul", bk, [
                    (_(!0), C(ue, null, Fe(xs.value, (d) => (_(), ze(sT, {
                      key: d.id,
                      node: d,
                      "children-url": _s.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, mk)) : (_(), C("section", yk, [
                  c("h3", null, g(b(y)("library", "Shelves")), 1),
                  c("p", _k, g(b(y)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", wk, [
                    c("a", {
                      class: "button primary",
                      href: Jt.value
                    }, g(b(y)("library", "Add a Library root")), 9, Sk),
                    c("a", {
                      class: "button secondary",
                      href: Ge.value
                    }, g(b(y)("library", "All publications")), 9, Ck)
                  ])
                ]))
              ])) : (_(), C("section", Tk, [
                c("header", Ek, [
                  In.value ? (_(), C("p", Ak, g(ya.value), 1)) : j("", !0),
                  c("h2", kk, g(Ts.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": b(y)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": b(y)("library", "Catalogue toolbar"),
                    onSubmit: Ue(hn, ["prevent"])
                  }, [
                    (_(!0), C(ue, null, Fe(Sa.value, (d) => (_(), C("input", {
                      key: d.key,
                      type: "hidden",
                      name: d.key,
                      value: d.value
                    }, null, 8, Nk))), 128)),
                    c("label", Lk, [
                      Ie(g(b(y)("library", "Sort")), 1),
                      qe(c("select", {
                        "onUpdate:modelValue": v[41] || (v[41] = (d) => P.sort = d),
                        name: "sort",
                        onChange: hn
                      }, [
                        c("option", Rk, g(b(y)("library", "Title")), 1),
                        c("option", Ik, g(b(y)("library", "Date added")), 1),
                        c("option", Pk, g(b(y)("library", "Publication date")), 1),
                        c("option", $k, g(b(y)("library", "Series")), 1),
                        c("option", Dk, g(b(y)("library", "Recently opened")), 1),
                        c("option", Mk, g(b(y)("library", "Format")), 1)
                      ], 544), [
                        [wi, P.sort]
                      ])
                    ]),
                    c("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": b(y)("library", "View")
                    }, [
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Ee({ active: Kt.value === "compact" }),
                        "aria-pressed": Kt.value === "compact" ? "true" : "false",
                        onClick: v[42] || (v[42] = (d) => Fs("compact"))
                      }, g(b(y)("library", "Compact")), 11, zk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ee({ active: Kt.value === "gallery" }),
                        "aria-pressed": Kt.value === "gallery" ? "true" : "false",
                        onClick: v[43] || (v[43] = (d) => Fs("gallery"))
                      }, g(b(y)("library", "Gallery")), 11, Uk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ee({ active: Kt.value === "list" }),
                        "aria-pressed": Kt.value === "list" ? "true" : "false",
                        onClick: v[44] || (v[44] = (d) => Fs("list"))
                      }, g(b(y)("library", "List")), 11, Bk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ee({ active: Kt.value === "shelf" }),
                        "aria-pressed": Kt.value === "shelf" ? "true" : "false",
                        onClick: v[45] || (v[45] = (d) => Fs("shelf"))
                      }, g(b(y)("library", "Shelf")), 11, jk)
                    ], 8, Fk)
                  ], 40, xk),
                  c("section", Hk, [
                    c("h3", {
                      title: b(y)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, g(b(y)("library", "Collections")), 9, Vk),
                    c("form", {
                      method: "post",
                      action: Ll.value,
                      class: "library-saved-collection-save-form",
                      title: Ml.value ? "" : b(y)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Qt.value
                      }, null, 8, Kk),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Wv.value
                      }, null, 8, Wk),
                      c("label", null, [
                        Ie(g(b(y)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: b(y)("library", "e.g. Bremen photo books"),
                          disabled: !Ml.value,
                          autocomplete: "off"
                        }, null, 8, qk)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !Ml.value,
                        title: b(y)("library", "Save current view")
                      }, g(b(y)("library", "Save")), 9, Yk)
                    ], 8, Gk),
                    Pn.value.length > 0 ? (_(), C("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": b(y)("library", "Saved custom collections")
                    }, [
                      (_(!0), C(ue, null, Fe(Pn.value, (d) => (_(), C("article", {
                        key: d.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: Yv(d.filters)
                        }, [
                          c("strong", null, g(d.name), 1),
                          c("span", Jk, g(d.countPending ? "—" : b(Un)("library", "%n item", "%n items", Number(d.count || 0))), 1)
                        ], 8, Zk),
                        c("form", {
                          method: "post",
                          action: Xv(d.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Qt.value
                          }, null, 8, e2),
                          c("button", t2, g(b(y)("library", "Delete")), 1)
                        ], 8, Qk)
                      ]))), 128))
                    ], 8, Xk)) : j("", !0)
                  ]),
                  qt.value.length > 0 ? (_(), C("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": b(y)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", i2, [
                      v[55] || (v[55] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: b(y)("library", "Batch actions for selected publications")
                      }, g(b(y)("library", "Batch actions")), 9, a2),
                      c("small", r2, g(b(y)("library", "Batch actions for selected publications")), 1),
                      c("b", s2, g(b(Un)("library", "%n publication selected", "%n publications selected", qt.value.length)), 1)
                    ]),
                    c("p", o2, g(b(Un)("library", "%n publication selected", "%n publications selected", qt.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Il
                    }, [
                      c("form", {
                        method: "post",
                        action: ws.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Qt.value
                        }, null, 8, c2),
                        c("label", null, [
                          c("span", null, g(b(y)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: b(y)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, u2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: b(y)("library", "Applies only to the selected publications.")
                        }, g(b(y)("library", "Apply")), 9, d2)
                      ], 8, l2),
                      c("form", {
                        method: "post",
                        action: qa.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Qt.value
                        }, null, 8, h2),
                        c("label", null, [
                          c("span", null, g(b(y)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: b(y)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, p2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(y)("library", "Removes the tag only from the selected publications.")
                        }, g(b(y)("library", "Remove")), 9, v2)
                      ], 8, f2),
                      c("form", {
                        method: "post",
                        action: Ss.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Qt.value
                        }, null, 8, m2),
                        (_(!0), C(ue, null, Fe(Tn.value, (d) => (_(), C("input", {
                          key: `reset-${d.key}`,
                          type: "hidden",
                          name: d.key,
                          value: d.value
                        }, null, 8, b2))), 128)),
                        v[56] || (v[56] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(y)("library", "Batch actions for selected publications")
                        }, g(b(y)("library", "Reset metadata")), 9, y2)
                      ], 8, g2),
                      c("form", {
                        method: "post",
                        action: Ya.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Qt.value
                        }, null, 8, w2),
                        (_(!0), C(ue, null, Fe(Tn.value, (d) => (_(), C("input", {
                          key: `edit-preview-${d.key}`,
                          type: "hidden",
                          name: d.key,
                          value: d.value
                        }, null, 8, S2))), 128)),
                        c("label", null, [
                          c("span", null, g(b(y)("library", "Field")), 1),
                          c("select", C2, [
                            c("option", T2, g(b(y)("library", "Publication type")), 1),
                            c("option", E2, g(b(y)("library", "Subtitle")), 1),
                            c("option", A2, g(b(y)("library", "Creators")), 1),
                            c("option", k2, g(b(y)("library", "Series / periodical")), 1),
                            c("option", O2, g(b(y)("library", "Publication date")), 1),
                            c("option", x2, g(b(y)("library", "Language")), 1),
                            c("option", N2, g(b(y)("library", "Publisher")), 1),
                            c("option", L2, g(b(y)("library", "Subjects")), 1),
                            c("option", R2, g(b(y)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, g(b(y)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: b(y)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, I2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(y)("library", "Preview first, then apply from the review page.")
                        }, g(b(y)("library", "Preview edit")), 9, P2)
                      ], 8, _2),
                      c("form", {
                        method: "post",
                        action: Nl.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Qt.value
                        }, null, 8, D2),
                        (_(!0), C(ue, null, Fe(Tn.value, (d) => (_(), C("input", {
                          key: `cover-${d.key}`,
                          type: "hidden",
                          name: d.key,
                          value: d.value
                        }, null, 8, M2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(y)("library", "Batch actions for selected publications")
                        }, g(b(y)("library", "Fresh covers")), 9, F2)
                      ], 8, $2)
                    ], 32)
                  ], 8, n2)) : j("", !0)
                ], 8, Ok),
                tr.value ? (_(), C("p", z2, g(tr.value), 1)) : j("", !0),
                Bi.value ? (_(), C("p", U2, g(Bi.value), 1)) : j("", !0),
                Cn.value ? (_(), C("p", B2, g(Cn.value), 1)) : j("", !0),
                In.value ? (_(), C("section", j2, [
                  c("p", H2, g(ya.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: ot.value ? b(y)("library", "Items by this creator, sorted by publication context when available.") : Za.value ? b(y)("library", "Items from this publication year, sorted by publication date when available.") : b(y)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, g(Cs.value), 9, V2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": b(y)("library", "Discovery summary")
                  }, [
                    c("span", null, g(b(Un)("library", "%n item", "%n items", I.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (_(), C("span", K2, g(O.value.earliestYear) + "–" + g(O.value.latestYear), 1)) : j("", !0),
                    O.value?.datedCount ? (_(), C("span", W2, g(O.value.datedCount) + " " + g(b(y)("library", "dated")), 1)) : j("", !0),
                    O.value?.undatedCount > 0 ? (_(), C("span", q2, g(O.value.undatedCount) + " " + g(b(y)("library", "undated")), 1)) : j("", !0)
                  ], 8, G2),
                  Xa.value && O.value ? (_(), C("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": b(y)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, g(b(y)("library", "Publication contents")), 1),
                    c("span", null, g(b(Un)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (_(), C("span", X2, g(O.value.earliestYear) + "–" + g(O.value.latestYear), 1)) : j("", !0),
                    c("span", null, g(O.value.datedCount) + " " + g(b(y)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (_(), C("span", Z2, g(O.value.undatedCount) + " " + g(b(y)("library", "without dates yet")), 1)) : j("", !0),
                    c("span", null, g(b(y)("library", "read-only grouping")), 1)
                  ], 8, Y2)) : j("", !0),
                  Xa.value && O.value?.issueGroups?.length ? (_(), C("section", J2, [
                    c("div", null, [
                      c("p", Q2, g(b(y)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: b(y)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, g(b(y)("library", "Read-only issue/date grouping")), 9, eO)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": b(y)("library", "Visual issue strip")
                    }, [
                      (_(!0), C(ue, null, Fe(O.value.issueGroups, (d) => (_(), C("a", {
                        key: `strip-${d.label}`,
                        class: "library-issue-strip-card",
                        href: d.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, g(d.label), 1),
                        c("strong", null, g(d.items?.[0]?.issueLabel || b(y)("library", "Issue")), 1),
                        c("small", null, g(b(Un)("library", "%n item", "%n items", d.items?.length || 0)), 1)
                      ], 8, nO))), 128))
                    ], 8, tO),
                    O.value.gapRanges?.length ? (_(), C("p", iO, g(b(y)("library", "Gap")) + ": " + g(O.value.gapRanges.join(", ")), 1)) : j("", !0),
                    (_(!0), C(ue, null, Fe(O.value.issueGroups, (d) => (_(), C("div", {
                      key: d.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, g(d.label), 1),
                      c("ol", null, [
                        (_(!0), C(ue, null, Fe(d.items, (z, se) => (_(), C("li", {
                          key: z.itemId
                        }, [
                          c("span", aO, g(z.issueLabel), 1),
                          c("a", {
                            href: z.detailsUrl || "#"
                          }, g(z.title), 9, rO),
                          c("small", null, [
                            Ie(g(z.publicationType), 1),
                            z.publicationDate ? (_(), C(ue, { key: 0 }, [
                              Ie(" · " + g(z.publicationDate), 1)
                            ], 64)) : j("", !0)
                          ]),
                          c("small", sO, [
                            se > 0 ? (_(), C(ue, { key: 0 }, [
                              Ie(g(b(y)("library", "Previous issue")), 1)
                            ], 64)) : j("", !0),
                            se > 0 && se < d.items.length - 1 ? (_(), C(ue, { key: 1 }, [
                              Ie(" · ")
                            ], 64)) : j("", !0),
                            se < d.items.length - 1 ? (_(), C(ue, { key: 2 }, [
                              Ie(g(b(y)("library", "Next issue")), 1)
                            ], 64)) : j("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (_(), C("details", oO, [
                      c("summary", {
                        title: b(y)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, g(b(y)("library", "Unknown issue/date")) + " · " + g(O.value.unknownIssueItems.length), 9, lO)
                    ])) : j("", !0)
                  ])) : j("", !0),
                  c("p", null, [
                    c("a", {
                      href: Ge.value,
                      class: "button secondary library-discovery-back-link"
                    }, g(b(y)("library", "Back to full catalogue")), 9, cO)
                  ])
                ])) : j("", !0),
                c("div", uO, [
                  c("p", dO, [
                    Ie(g(b(y)("library", "Showing")) + " " + g(I.value.from) + "–" + g(I.value.to) + " " + g(b(y)("library", "of")) + " " + g(I.value.total) + " " + g(b(y)("library", "catalogue items")), 1),
                    ji.value.length > 0 ? (_(), C("span", fO, [
                      v[57] || (v[57] = Ie(" · ", -1)),
                      c("a", hO, g(b(y)("library", "Clear all filters")), 1)
                    ])) : j("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": b(y)("library", "Catalogue pagination")
                  }, [
                    c("span", vO, [
                      Ie(g(b(y)("library", "Page")) + " " + g(I.value.page), 1),
                      I.value.total > 0 ? (_(), C("span", gO, " · " + g(I.value.from) + "–" + g(I.value.to), 1)) : j("", !0)
                    ]),
                    I.value.previousUrl ? (_(), C("a", {
                      key: 0,
                      href: I.value.previousUrl
                    }, g(b(y)("library", "Previous")), 9, mO)) : (_(), C("span", bO, g(b(y)("library", "Previous")), 1)),
                    I.value.nextUrl ? (_(), C("a", {
                      key: 2,
                      href: I.value.nextUrl
                    }, g(b(y)("library", "Next")), 9, yO)) : (_(), C("span", _O, g(b(y)("library", "Next")), 1))
                  ], 8, pO)
                ]),
                h.value.length === 0 ? (_(), C("div", {
                  key: 4,
                  class: Ee(["library-empty-content", { "library-first-run-guidance": Qa.value || er.value, "library-filter-empty-state": As.value && !Qa.value && !er.value }]),
                  role: "status"
                }, [
                  Qa.value ? (_(), C(ue, { key: 0 }, [
                    c("h3", {
                      title: b(y)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, g(b(y)("library", "Start with one Library root")), 9, wO),
                    c("p", SO, [
                      c("a", {
                        href: Jt.value,
                        class: "button primary"
                      }, g(b(y)("library", "Add a Library root")), 9, CO),
                      c("span", TO, g(b(y)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : er.value ? (_(), C(ue, { key: 1 }, [
                    c("h3", {
                      title: b(y)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, g(b(y)("library", "No enabled Library roots")), 9, EO),
                    c("p", AO, [
                      c("a", {
                        href: Jt.value,
                        class: "button primary"
                      }, g(b(y)("library", "Open Library settings")), 9, kO)
                    ])
                  ], 64)) : As.value ? (_(), C(ue, { key: 2 }, [
                    c("h3", {
                      title: b(y)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, g(b(y)("library", "No matches for the current filters")), 9, OO),
                    c("p", xO, [
                      c("a", {
                        href: Vv(),
                        class: "button secondary"
                      }, g(b(y)("library", "Clear search")), 9, NO),
                      c("a", LO, g(b(y)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (_(), C(ue, { key: 3 }, [
                    c("h3", {
                      title: b(y)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, g(b(y)("library", "No catalogue items yet")), 9, RO),
                    c("p", IO, [
                      c("a", {
                        href: Jt.value,
                        class: "button primary"
                      }, g(b(y)("library", "Run a scan from settings")), 9, PO)
                    ])
                  ], 64))
                ], 2)) : j("", !0),
                h.value.length > 0 ? (_(), C("label", $O, [
                  c("input", {
                    type: "checkbox",
                    checked: qt.value.length === h.value.length,
                    onChange: Rl
                  }, null, 40, DO),
                  Ie(" " + g(b(y)("library", "Select all publications on this page")), 1)
                ])) : j("", !0),
                h.value.length > 0 && Kt.value === "list" ? (_(), C("ul", MO, [
                  (_(!0), C(ue, null, Fe(h.value, (d) => (_(), C("li", {
                    key: d.id,
                    class: Ee(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Gi.value.has(Number(d.id)), "library-catalogue-list-row--open": fn.value && Number($n.value) === Number(d.id) }])
                  }, [
                    c("label", FO, [
                      c("input", {
                        type: "checkbox",
                        checked: Gi.value.has(Number(d.id)),
                        "aria-label": `${b(y)("library", "Select publication")}: ${d.title}`,
                        onChange: (z) => ar(d.id, z.currentTarget.checked)
                      }, null, 40, zO)
                    ]),
                    c("div", UO, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (z) => Dn(d, z)
                      }, [
                        c("bdi", jO, g(d.title), 1)
                      ], 8, BO),
                      d.creators ? (_(), C("span", HO, [
                        c("bdi", VO, g(d.creators), 1)
                      ])) : j("", !0)
                    ]),
                    c("dl", GO, [
                      d.publication ? (_(), C("div", KO, [
                        c("dt", null, g(b(y)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", WO, g(d.publication), 1)
                        ])
                      ])) : j("", !0),
                      d.publicationDate ? (_(), C("div", qO, [
                        c("dt", null, g(b(y)("library", "Publication date")), 1),
                        c("dd", null, g(d.publicationDate), 1)
                      ])) : j("", !0),
                      d.extension || d.publicationType ? (_(), C("div", YO, [
                        c("dt", null, g(b(y)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Ee(d.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: d.extension ? "ltr" : "auto"
                          }, g(d.extension ? fr(d.extension) : d.publicationType), 11, XO)
                        ])
                      ])) : j("", !0),
                      d.shelf ? (_(), C("div", ZO, [
                        c("dt", null, g(b(y)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", JO, g(d.shelf), 1)
                        ])
                      ])) : j("", !0)
                    ]),
                    c("div", QO, [
                      c("a", {
                        class: "button primary",
                        href: d.openUrl
                      }, g(b(y)("library", "Open")), 9, ex),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (z) => Dn(d, z)
                      }, g(b(y)("library", "Details")), 9, tx)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (_(), C("div", {
                  key: 7,
                  class: Ee(["library-cover-gallery", Os.value])
                }, [
                  (_(!0), C(ue, null, Fe(h.value, (d) => (_(), C("article", {
                    key: d.id,
                    class: Ee(["library-cover-card", { "library-cover-card--cover-loaded": hr(d) === "loaded", "library-cover-card--cover-error": hr(d) === "error", "library-cover-card--selected": Gi.value.has(Number(d.id)), "library-cover-card--open": fn.value && Number($n.value) === Number(d.id) }])
                  }, [
                    c("label", nx, [
                      c("input", {
                        type: "checkbox",
                        checked: Gi.value.has(Number(d.id)),
                        "aria-label": `${b(y)("library", "Select publication")}: ${d.title}`,
                        onChange: (z) => ar(d.id, z.currentTarget.checked)
                      }, null, 40, ix)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${d.id} library-card-title-${d.id}`,
                      "aria-expanded": fn.value && Number($n.value) === Number(d.id) ? "true" : "false",
                      onClick: (z) => Dn(d, z)
                    }, [
                      c("span", {
                        id: `library-details-action-${d.id}`,
                        class: "hidden-visually"
                      }, g(b(y)("library", "Details")), 9, rx),
                      c("span", sx, [
                        hr(d) === "loading" ? (_(), C("span", ox)) : j("", !0),
                        c("img", {
                          class: Ee(["library-cover-image", { "library-cover-image--loaded": hr(d) === "loaded" }]),
                          src: d.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (z) => Zv(d),
                          onError: (z) => Jv(d)
                        }, null, 42, lx),
                        hr(d) === "error" ? (_(), C("span", cx, g(b(y)("library", "Cover unavailable")), 1)) : j("", !0)
                      ])
                    ], 8, ax),
                    c("form", {
                      method: "post",
                      action: d.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Ue((z) => Yu(d, z), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Qt.value
                      }, null, 8, dx),
                      v[58] || (v[58] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: d.starred ? "0" : "1"
                      }, null, 8, fx),
                      c("button", {
                        type: "submit",
                        class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": d.starred }]),
                        "aria-pressed": d.starred ? "true" : "false",
                        title: d.starred ? b(y)("library", "Unstar this publication") : b(y)("library", "Star this publication"),
                        "aria-label": d.starred ? b(y)("library", "Unstar this publication") : b(y)("library", "Star this publication"),
                        "aria-busy": pr[d.id] ? "true" : void 0,
                        disabled: pr[d.id],
                        onClick: Ue((z) => Yu(d, z), ["prevent"])
                      }, g(d.starred ? "★" : "☆"), 11, hx),
                      vr[d.id] ? (_(), C("span", {
                        key: 0,
                        "data-library-star-error": d.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, g(vr[d.id]), 9, px)) : j("", !0)
                    ], 40, ux),
                    c("div", vx, [
                      c("div", gx, [
                        c("h3", {
                          id: `library-card-title-${d.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (z) => Dn(d, z)
                          }, [
                            c("bdi", yx, g(d.title), 1)
                          ], 8, bx)
                        ], 8, mx),
                        d.creators ? (_(), C("p", _x, [
                          c("bdi", wx, g(d.creators), 1)
                        ])) : j("", !0),
                        Fl(d) || d.extension ? (_(), C("div", Sx, [
                          d.extension ? (_(), C("span", Cx, [
                            c("bdi", Tx, g(fr(d.extension)), 1)
                          ])) : j("", !0),
                          Fl(d) ? (_(), C("p", Ex, [
                            c("bdi", Ax, g(Fl(d)), 1)
                          ])) : j("", !0)
                        ])) : j("", !0),
                        c("div", kx, [
                          c("a", {
                            class: "library-cover-read",
                            href: d.openUrl
                          }, g(b(y)("library", "Open")), 9, Ox),
                          _e(b(Ro), {
                            "aria-label": b(y)("library", "More actions")
                          }, {
                            default: Oe(() => [
                              _e(b(La), {
                                href: d.filesUrl
                              }, {
                                default: Oe(() => [
                                  Ie(g(b(y)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              _e(b(La), {
                                href: d.downloadUrl
                              }, {
                                default: Oe(() => [
                                  Ie(g(b(y)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              _e(b(La), {
                                href: d.detailsUrl
                              }, {
                                default: Oe(() => [
                                  Ie(g(b(y)("library", "Maintenance")), 1)
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
                h.value.length > 0 ? (_(), C("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": b(y)("library", "Catalogue pagination")
                }, [
                  c("span", Nx, [
                    Ie(g(b(y)("library", "Page")) + " " + g(I.value.page), 1),
                    I.value.total > 0 ? (_(), C("span", Lx, " · " + g(I.value.from) + "–" + g(I.value.to), 1)) : j("", !0)
                  ]),
                  I.value.previousUrl ? (_(), C("a", {
                    key: 0,
                    href: I.value.previousUrl
                  }, g(b(y)("library", "Previous")), 9, Rx)) : (_(), C("span", Ix, g(b(y)("library", "Previous")), 1)),
                  I.value.nextUrl ? (_(), C("a", {
                    key: 2,
                    href: I.value.nextUrl
                  }, g(b(y)("library", "Next")), 9, Px)) : (_(), C("span", $x, g(b(y)("library", "Next")), 1))
                ], 8, xx)) : j("", !0)
              ]))
            ], 8, _E)
          ]),
          _: 1
        }),
        _e(b(RC), {
          ref_key: "sidebarComponent",
          ref: K,
          class: "library-native-item-sidebar",
          open: fn.value,
          "no-toggle": "",
          loading: gt.loading,
          name: Te.value?.title || b(y)("library", "Publication details"),
          subname: Te.value?.creators || "",
          role: re.value ? "dialog" : void 0,
          "aria-modal": re.value ? "true" : void 0,
          "aria-labelledby": re.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": re.value && Te.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: ju,
          onClosed: Sv,
          onClose: $s
        }, {
          default: Oe(() => [
            c("div", Dx, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: R,
                class: "hidden-visually",
                tabindex: "-1"
              }, g(Te.value?.title || b(y)("library", "Publication details")), 513),
              gt.loading && !Te.value ? (_(), C("p", Mx, g(b(y)("library", "Loading publication details…")), 1)) : gt.error ? (_(), C("div", {
                key: 1,
                class: "library-sidebar-state",
                role: gt.missing ? "status" : "alert"
              }, [
                c("p", null, g(gt.error), 1),
                gt.missing ? j("", !0) : (_(), C("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: v[46] || (v[46] = (d) => rr($n.value, { historyMode: "none" }))
                }, g(b(y)("library", "Try again")), 1))
              ], 8, Fx)) : Te.value ? (_(), C(ue, { key: 2 }, [
                c("p", zx, g(b(y)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", Ux, [
                  c("span", Bx, g(b(y)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: Te.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, jx),
                  c("div", Hx, [
                    c("p", Vx, [
                      c("bdi", Gx, g(Te.value.publicationType || b(y)("library", "Publication")), 1),
                      Te.value.extension ? (_(), C("span", Kx, [
                        v[59] || (v[59] = Ie(" · ", -1)),
                        c("bdi", Wx, g(fr(Te.value.extension)), 1)
                      ])) : j("", !0)
                    ]),
                    c("div", qx, [
                      c("a", {
                        class: "button primary",
                        href: Te.value.openUrl
                      }, g(b(y)("library", "Open")), 9, Yx),
                      _e(b(Ro), {
                        "aria-label": b(y)("library", "File and maintenance actions")
                      }, {
                        default: Oe(() => [
                          _e(b(La), {
                            href: Te.value.filesUrl
                          }, {
                            default: Oe(() => [
                              Ie(g(b(y)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          _e(b(La), {
                            href: Te.value.downloadUrl
                          }, {
                            default: Oe(() => [
                              Ie(g(b(y)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          _e(b(La), {
                            href: Te.value.detailsUrl
                          }, {
                            default: Oe(() => [
                              Ie(g(b(y)("library", "Maintenance (legacy)")), 1)
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
                  "aria-label": b(y)("library", "Publication detail sections")
                }, [
                  (_(), C(ue, null, Fe(mv, (d) => c("button", {
                    key: d.key,
                    type: "button",
                    class: Ee({ active: En.value === d.key }),
                    "aria-current": En.value === d.key ? "page" : void 0,
                    onClick: (z) => En.value = d.key
                  }, g(b(y)("library", d.label)), 11, Zx)), 64))
                ], 8, Xx),
                En.value === "overview" ? (_(), C("section", Jx, [
                  c("h3", Qx, g(b(y)("library", "Overview")), 1),
                  Te.value.description ? (_(), C("p", eN, [
                    c("bdi", tN, g(Te.value.description), 1)
                  ])) : j("", !0),
                  c("dl", nN, [
                    Te.value.publication ? (_(), C("div", iN, [
                      c("dt", null, g(b(y)("library", "Series")), 1),
                      c("dd", null, g(Te.value.publication), 1)
                    ])) : j("", !0),
                    Te.value.publicationDate ? (_(), C("div", aN, [
                      c("dt", null, g(b(y)("library", "Date")), 1),
                      c("dd", null, g(Te.value.publicationDate), 1)
                    ])) : j("", !0),
                    Te.value.publisher ? (_(), C("div", rN, [
                      c("dt", null, g(b(y)("library", "Publisher")), 1),
                      c("dd", null, g(Te.value.publisher), 1)
                    ])) : j("", !0),
                    Te.value.language ? (_(), C("div", sN, [
                      c("dt", null, g(b(y)("library", "Language")), 1),
                      c("dd", null, g(Te.value.language), 1)
                    ])) : j("", !0),
                    Te.value.shelf ? (_(), C("div", oN, [
                      c("dt", null, g(b(y)("library", "Shelf")), 1),
                      c("dd", null, g(Te.value.shelf), 1)
                    ])) : j("", !0)
                  ])
                ])) : En.value === "metadata" ? (_(), C("section", lN, [
                  c("h3", cN, g(b(y)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ue(_v, ["prevent"])
                  }, [
                    c("label", null, [
                      Ie(g(b(y)("library", "Title")), 1),
                      qe(c("input", {
                        "onUpdate:modelValue": v[47] || (v[47] = (d) => w.title = d),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [Yt, w.title]
                      ])
                    ]),
                    c("label", null, [
                      Ie(g(b(y)("library", "Publication date")), 1),
                      qe(c("input", {
                        "onUpdate:modelValue": v[48] || (v[48] = (d) => w.publicationDate = d),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: b(y)("library", "e.g. 2026")
                      }, null, 8, uN), [
                        [Yt, w.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, g(b(y)("library", "Identifiers")), 1),
                      (_(!0), C(ue, null, Fe(w.identifiers, (d, z) => (_(), C("div", {
                        key: z,
                        class: "library-sidebar-identifier"
                      }, [
                        qe(c("input", {
                          "onUpdate:modelValue": (se) => d.scheme = se,
                          "aria-label": b(y)("library", "Identifier type"),
                          placeholder: b(y)("library", "Identifier type")
                        }, null, 8, dN), [
                          [Yt, d.scheme]
                        ]),
                        qe(c("input", {
                          "onUpdate:modelValue": (se) => d.displayValue = se,
                          "aria-label": b(y)("library", "Identifier value")
                        }, null, 8, fN), [
                          [Yt, d.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (se) => yv(z)
                        }, g(b(y)("library", "Remove")), 9, hN)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: bv
                      }, g(b(y)("library", "Add identifier")), 1)
                    ]),
                    c("p", pN, g(b(y)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Y.error ? (_(), C("p", vN, g(Y.error), 1)) : Y.saved ? (_(), C("p", gN, g(b(y)("library", "Metadata saved.")), 1)) : j("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Y.saving
                    }, g(Y.saving ? b(y)("library", "Saving…") : b(y)("library", "Save metadata")), 9, mN)
                  ], 32),
                  Ps(Te.value).length ? (_(), C("section", bN, [
                    c("h4", yN, g(b(y)("library", "Scanner suggestions")), 1),
                    c("p", _N, g(b(y)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (_(!0), C(ue, null, Fe(Ps(Te.value), (d) => (_(), C("div", {
                        key: d.field
                      }, [
                        c("dt", null, g(d.field) + " · " + g(d.sourceProvenance), 1),
                        c("dd", null, [
                          Ie(g(b(y)("library", "Current")) + ": " + g(d.currentValue || "—"), 1),
                          v[60] || (v[60] = c("br", null, null, -1)),
                          Ie(g(b(y)("library", "Suggestion")) + ": " + g(d.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : j("", !0)
                ])) : (_(), C("section", wN, [
                  c("h3", SN, g(b(y)("library", "Activity")), 1),
                  c("dl", CN, [
                    c("div", null, [
                      c("dt", null, g(b(y)("library", "Scan status")), 1),
                      c("dd", null, g(Te.value.scanStatus || "—"), 1)
                    ]),
                    Te.value.workflowStatus ? (_(), C("div", TN, [
                      c("dt", null, g(b(y)("library", "Workflow")), 1),
                      c("dd", null, g(Te.value.workflowStatus), 1)
                    ])) : j("", !0),
                    Te.value.metadataSource ? (_(), C("div", EN, [
                      c("dt", null, g(b(y)("library", "Metadata source")), 1),
                      c("dd", null, g(Te.value.metadataSource), 1)
                    ])) : j("", !0),
                    Te.value.cachedPath ? (_(), C("div", AN, [
                      c("dt", null, g(b(y)("library", "File")), 1),
                      c("dd", kN, [
                        Te.value.openUrl ? (_(), C("a", {
                          key: 0,
                          href: Te.value.openUrl
                        }, [
                          c("bdi", xN, g(Te.value.cachedPath), 1)
                        ], 8, ON)) : (_(), C("bdi", NN, g(Te.value.cachedPath), 1))
                      ])
                    ])) : j("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": b(y)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ls.value,
                    onClick: v[49] || (v[49] = (d) => Ds(Ls.value))
                  }, g(b(y)("library", "Previous item")), 9, RN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Rs.value,
                    onClick: v[50] || (v[50] = (d) => Ds(Rs.value))
                  }, g(b(y)("library", "Next item")), 9, IN)
                ], 8, LN)
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
function FN() {
  window.LibraryStartupWatchdog?.fail();
}
function zN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = yu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !zN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Fb(MN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  FN(), console.error("[library] Vue startup failed", e);
}
