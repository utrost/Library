// @__NO_SIDE_EFFECTS__
function xu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const We = {}, Ya = [], Cn = () => {
}, Ph = () => !1, _l = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), wl = (e) => e.startsWith("onUpdate:"), yt = Object.assign, Ou = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qg = Object.prototype.hasOwnProperty, Ze = (e, t) => qg.call(e, t), Se = Array.isArray, Hi = (e) => Ao(e) === "[object Map]", Na = (e) => Ao(e) === "[object Set]", jd = (e) => Ao(e) === "[object Date]", Fe = (e) => typeof e == "function", st = (e) => typeof e == "string", Pn = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", $h = (e) => (Je(e) || Fe(e)) && Fe(e.then) && Fe(e.catch), Fh = Object.prototype.toString, Ao = (e) => Fh.call(e), Yg = (e) => Ao(e).slice(8, -1), Dh = (e) => Ao(e) === "[object Object]", Nu = (e) => st(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gr = /* @__PURE__ */ xu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Sl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Xg = /-\w/g, Ht = Sl(
  (e) => e.replace(Xg, (t) => t.slice(1).toUpperCase())
), Zg = /\B([A-Z])/g, yi = Sl(
  (e) => e.replace(Zg, "-$1").toLowerCase()
), Cl = Sl((e) => e.charAt(0).toUpperCase() + e.slice(1)), dc = Sl(
  (e) => e ? `on${Cl(e)}` : ""
), Nt = (e, t) => !Object.is(e, t), ps = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Mh = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Tl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Jg = (e) => {
  const t = st(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Bd;
const El = () => Bd || (Bd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vn(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = st(i) ? nm(i) : vn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (st(e) || Je(e))
    return e;
}
const Qg = /;(?![^(]*\))/g, em = /:([^]+)/, tm = /\/\*[^]*?\*\//g;
function nm(e) {
  const t = {};
  return e.replace(tm, "").split(Qg).forEach((n) => {
    if (n) {
      const i = n.split(em);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ee(e) {
  let t = "";
  if (st(e))
    t = e;
  else if (Se(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ee(e[n]);
      i && (t += i + " ");
    }
  else if (Je(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ys(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !st(t) && (e.class = Ee(t)), n && (e.style = vn(n)), e;
}
const im = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", am = /* @__PURE__ */ xu(im);
function zh(e) {
  return !!e || e === "";
}
function rm(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Wi(e[i], t[i]);
  return n;
}
function Hd(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (!i[o] && Wi(a, n[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Wi(e, t) {
  if (e === t) return !0;
  let n = jd(e), i = jd(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Pn(e), i = Pn(t), n || i)
    return e === t;
  if (n = Se(e), i = Se(t), n || i)
    return n && i ? rm(e, t) : !1;
  if (n = Je(e), i = Je(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Hi(e), i = Hi(t), n || i || (n = Na(e), i = Na(t), n || i))
      return n && i ? Hd(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (c && !u || !c && u || !Wi(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function om(e, t) {
  return e.findIndex((n) => Wi(n, t));
}
const Uh = (e) => !!(e && e.__v_isRef === !0), v = (e) => st(e) ? e : e == null ? "" : Se(e) || Je(e) && (e.toString === Fh || !Fe(e.toString)) ? Uh(e) ? v(e.value) : JSON.stringify(e, jh, 2) : String(e), jh = (e, t) => Uh(t) ? jh(e, t.value) : Hi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[fc(i, r) + " =>"] = a, n),
    {}
  )
} : Na(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => fc(n))
} : Pn(t) ? fc(t) : Je(t) && !Se(t) && !Dh(t) ? String(t) : t, fc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function sm(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let xt;
class lm {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && xt && (xt.active ? (this.parent = xt, this.index = (xt.scopes || (xt.scopes = [])).push(
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
      const n = xt;
      try {
        return xt = this, t();
      } finally {
        xt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = xt, xt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (xt === this)
        xt = this.prevScope;
      else {
        let t = xt;
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
function cm() {
  return xt;
}
let ot;
const hc = /* @__PURE__ */ new WeakSet();
class Bh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xt && (xt.active ? xt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, hc.has(this) && (hc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vd(this), Kh(this);
    const t = ot, n = Rn;
    ot = this, Rn = !0;
    try {
      return this.fn();
    } finally {
      Gh(this), ot = t, Rn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Iu(t);
      this.deps = this.depsTail = void 0, Vd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? hc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yc(this) && this.run();
  }
  get dirty() {
    return Yc(this);
  }
}
let Hh = 0, Wr, qr;
function Vh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qr, qr = e;
    return;
  }
  e.next = Wr, Wr = e;
}
function Lu() {
  Hh++;
}
function Ru() {
  if (--Hh > 0)
    return;
  if (qr) {
    let t = qr;
    for (qr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Wr; ) {
    let t = Wr;
    for (Wr = void 0; t; ) {
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
function Kh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Gh(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Iu(i), um(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Yc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === lo) || (e.globalVersion = lo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Yc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ot, i = Rn;
  ot = e, Rn = !0;
  try {
    Kh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Nt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ot = n, Rn = i, Gh(e), e.flags &= -3;
  }
}
function Iu(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Iu(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function um(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Rn = !0;
const qh = [];
function vi() {
  qh.push(Rn), Rn = !1;
}
function gi() {
  const e = qh.pop();
  Rn = e === void 0 ? !0 : e;
}
function Vd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ot;
    ot = void 0;
    try {
      t();
    } finally {
      ot = n;
    }
  }
}
let lo = 0;
class dm {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class kl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ot || !Rn || ot === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ot)
      n = this.activeLink = new dm(ot, this), ot.deps ? (n.prevDep = ot.depsTail, ot.depsTail.nextDep = n, ot.depsTail = n) : ot.deps = ot.depsTail = n, Yh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ot.depsTail, n.nextDep = void 0, ot.depsTail.nextDep = n, ot.depsTail = n, ot.deps === n && (ot.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, lo++, this.notify(t);
  }
  notify(t) {
    Lu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ru();
    }
  }
}
function Yh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Yh(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Xc = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ Symbol(
  ""
), Zc = /* @__PURE__ */ Symbol(
  ""
), co = /* @__PURE__ */ Symbol(
  ""
);
function Ut(e, t, n) {
  if (Rn && ot) {
    let i = Xc.get(e);
    i || Xc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new kl()), a.map = i, a.key = n), a.track();
  }
}
function li(e, t, n, i, a, r) {
  const o = Xc.get(e);
  if (!o) {
    lo++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (Lu(), t === "clear")
    o.forEach(c);
  else {
    const u = Se(e), h = u && Nu(n);
    if (u && n === "length") {
      const f = Number(i);
      o.forEach((b, C) => {
        (C === "length" || C === co || !Pn(C) && C >= f) && c(b);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), h && c(o.get(co)), t) {
        case "add":
          u ? h && c(o.get("length")) : (c(o.get(Aa)), Hi(e) && c(o.get(Zc)));
          break;
        case "delete":
          u || (c(o.get(Aa)), Hi(e) && c(o.get(Zc)));
          break;
        case "set":
          Hi(e) && c(o.get(Aa));
          break;
      }
  }
  Ru();
}
function ja(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Ut(t, "iterate", co), /* @__PURE__ */ Tn(e) ? t : t.map($n));
}
function Al(e) {
  return Ut(e = /* @__PURE__ */ Ye(e), "iterate", co), e;
}
function Kn(e, t) {
  return /* @__PURE__ */ mi(e) ? ir(/* @__PURE__ */ xa(e) ? $n(t) : t) : $n(t);
}
const fm = {
  __proto__: null,
  [Symbol.iterator]() {
    return pc(this, Symbol.iterator, (e) => Kn(this, e));
  },
  concat(...e) {
    return ja(this).concat(
      ...e.map((t) => Se(t) ? ja(t) : t)
    );
  },
  entries() {
    return pc(this, "entries", (e) => (e[1] = Kn(this, e[1]), e));
  },
  every(e, t) {
    return ti(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ti(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Kn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ti(
      this,
      "find",
      e,
      t,
      (n) => Kn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ti(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ti(
      this,
      "findLast",
      e,
      t,
      (n) => Kn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ti(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ti(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return vc(this, "includes", e);
  },
  indexOf(...e) {
    return vc(this, "indexOf", e);
  },
  join(e) {
    return ja(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return vc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ti(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Nr(this, "pop");
  },
  push(...e) {
    return Nr(this, "push", e);
  },
  reduce(e, ...t) {
    return Kd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Kd(this, "reduceRight", e, t);
  },
  shift() {
    return Nr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ti(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Nr(this, "splice", e);
  },
  toReversed() {
    return ja(this).toReversed();
  },
  toSorted(e) {
    return ja(this).toSorted(e);
  },
  toSpliced(...e) {
    return ja(this).toSpliced(...e);
  },
  unshift(...e) {
    return Nr(this, "unshift", e);
  },
  values() {
    return pc(this, "values", (e) => Kn(this, e));
  }
};
function pc(e, t, n) {
  const i = Al(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ Tn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const hm = Array.prototype;
function ti(e, t, n, i, a, r) {
  const o = Al(e), c = o !== e && !/* @__PURE__ */ Tn(e), u = o[t];
  if (u !== hm[t]) {
    const b = u.apply(e, r);
    return c ? $n(b) : b;
  }
  let h = n;
  o !== e && (c ? h = function(b, C) {
    return n.call(this, Kn(e, b), C, e);
  } : n.length > 2 && (h = function(b, C) {
    return n.call(this, b, C, e);
  }));
  const f = u.call(o, h, i);
  return c && a ? a(f) : f;
}
function Kd(e, t, n, i) {
  const a = Al(e), r = a !== e && !/* @__PURE__ */ Tn(e);
  let o = n, c = !1;
  a !== e && (r ? (c = i.length === 0, o = function(h, f, b) {
    return c && (c = !1, h = Kn(e, h)), n.call(this, h, Kn(e, f), b, e);
  }) : n.length > 3 && (o = function(h, f, b) {
    return n.call(this, h, f, b, e);
  }));
  const u = a[t](o, ...i);
  return c ? Kn(e, u) : u;
}
function vc(e, t, n) {
  const i = /* @__PURE__ */ Ye(e);
  Ut(i, "iterate", co);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Fu(n[0]) ? (n[0] = /* @__PURE__ */ Ye(n[0]), i[t](...n)) : a;
}
function Nr(e, t, n = []) {
  vi(), Lu();
  const i = (/* @__PURE__ */ Ye(e))[t].apply(e, n);
  return Ru(), gi(), i;
}
const pm = /* @__PURE__ */ xu("__proto__,__v_isRef,__isVue"), Xh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pn)
);
function vm(e) {
  Pn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Ut(t, "has", e), t.hasOwnProperty(e);
}
class Zh {
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
      return i === (a ? r ? Em : tp : r ? ep : Qh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Se(t);
    if (!a) {
      let u;
      if (o && (u = fm[n]))
        return u;
      if (n === "hasOwnProperty")
        return vm;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Vt(t) ? t : i
    );
    if ((Pn(n) ? Xh.has(n) : pm(n)) || (a || Ut(t, "get", n), r))
      return c;
    if (/* @__PURE__ */ Vt(c)) {
      const u = o && Nu(n) ? c : c.value;
      return a && Je(u) ? /* @__PURE__ */ uo(u) : u;
    }
    return Je(c) ? a ? /* @__PURE__ */ uo(c) : /* @__PURE__ */ Ot(c) : c;
  }
}
class Jh extends Zh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const o = Se(t) && Nu(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ mi(r);
      if (!/* @__PURE__ */ Tn(i) && !/* @__PURE__ */ mi(i) && (r = /* @__PURE__ */ Ye(r), i = /* @__PURE__ */ Ye(i)), !o && /* @__PURE__ */ Vt(r) && !/* @__PURE__ */ Vt(i))
        return h || (r.value = i), !0;
    }
    const c = o ? Number(n) < t.length : Ze(t, n), u = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Vt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && u && (c ? Nt(i, r) && li(t, "set", n, i) : li(t, "add", n, i)), u;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && li(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Pn(n) || !Xh.has(n)) && Ut(t, "has", n), i;
  }
  ownKeys(t) {
    return Ut(
      t,
      "iterate",
      Se(t) ? "length" : Aa
    ), Reflect.ownKeys(t);
  }
}
class gm extends Zh {
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
const mm = /* @__PURE__ */ new Jh(), bm = /* @__PURE__ */ new gm(), ym = /* @__PURE__ */ new Jh(!0);
const Jc = (e) => e, es = (e) => Reflect.getPrototypeOf(e);
function _m(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = Hi(r), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = a[e](...i), f = n ? Jc : t ? ir : $n;
    return !t && Ut(
      r,
      "iterate",
      u ? Zc : Aa
    ), yt(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: b, done: C } = h.next();
          return C ? { value: b, done: C } : {
            value: c ? [f(b[0]), f(b[1])] : f(b),
            done: C
          };
        }
      }
    );
  };
}
function ts(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wm(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      e || (Nt(a, c) && Ut(o, "get", a), Ut(o, "get", c));
      const { has: u } = es(o), h = t ? Jc : e ? ir : $n;
      if (u.call(o, a))
        return h(r.get(a));
      if (u.call(o, c))
        return h(r.get(c));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Ut(/* @__PURE__ */ Ye(a), "iterate", Aa), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      return e || (Nt(a, c) && Ut(o, "has", a), Ut(o, "has", c)), a === c ? r.has(a) : r.has(a) || r.has(c);
    },
    forEach(a, r) {
      const o = this, c = o.__v_raw, u = /* @__PURE__ */ Ye(c), h = t ? Jc : e ? ir : $n;
      return !e && Ut(u, "iterate", Aa), c.forEach((f, b) => a.call(r, h(f), h(b), o));
    }
  };
  return yt(
    n,
    e ? {
      add: ts("add"),
      set: ts("set"),
      delete: ts("delete"),
      clear: ts("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = es(r), c = /* @__PURE__ */ Ye(a), u = !t && !/* @__PURE__ */ Tn(a) && !/* @__PURE__ */ mi(a) ? c : a;
        return o.has.call(r, u) || Nt(a, u) && o.has.call(r, a) || Nt(c, u) && o.has.call(r, c) || (r.add(u), li(r, "add", u, u)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Tn(r) && !/* @__PURE__ */ mi(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: c, get: u } = es(o);
        let h = c.call(o, a);
        h || (a = /* @__PURE__ */ Ye(a), h = c.call(o, a));
        const f = u.call(o, a);
        return o.set(a, r), h ? Nt(r, f) && li(o, "set", a, r) : li(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: c } = es(r);
        let u = o.call(r, a);
        u || (a = /* @__PURE__ */ Ye(a), u = o.call(r, a)), c && c.call(r, a);
        const h = r.delete(a);
        return u && li(r, "delete", a, void 0), h;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && li(
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
    n[a] = _m(a, e, t);
  }), n;
}
function Pu(e, t) {
  const n = wm(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Sm = {
  get: /* @__PURE__ */ Pu(!1, !1)
}, Cm = {
  get: /* @__PURE__ */ Pu(!1, !0)
}, Tm = {
  get: /* @__PURE__ */ Pu(!0, !1)
};
const Qh = /* @__PURE__ */ new WeakMap(), ep = /* @__PURE__ */ new WeakMap(), tp = /* @__PURE__ */ new WeakMap(), Em = /* @__PURE__ */ new WeakMap();
function km(e) {
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
function Ot(e) {
  return /* @__PURE__ */ mi(e) ? e : $u(
    e,
    !1,
    mm,
    Sm,
    Qh
  );
}
// @__NO_SIDE_EFFECTS__
function Am(e) {
  return $u(
    e,
    !1,
    ym,
    Cm,
    ep
  );
}
// @__NO_SIDE_EFFECTS__
function uo(e) {
  return $u(
    e,
    !0,
    bm,
    Tm,
    tp
  );
}
function $u(e, t, n, i, a) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = km(Yg(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? i : n
  );
  return a.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function xa(e) {
  return /* @__PURE__ */ mi(e) ? /* @__PURE__ */ xa(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function mi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Fu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ye(t) : e;
}
function xm(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && Mh(e, "__v_skip", !0), e;
}
const $n = (e) => Je(e) ? /* @__PURE__ */ Ot(e) : e, ir = (e) => Je(e) ? /* @__PURE__ */ uo(e) : e;
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return ip(e, !1);
}
// @__NO_SIDE_EFFECTS__
function np(e) {
  return ip(e, !0);
}
function ip(e, t) {
  return /* @__PURE__ */ Vt(e) ? e : new Om(e, t);
}
class Om {
  constructor(t, n) {
    this.dep = new kl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ye(t), this._value = n ? t : $n(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Tn(t) || /* @__PURE__ */ mi(t);
    t = i ? t : /* @__PURE__ */ Ye(t), Nt(t, n) && (this._rawValue = t, this._value = i ? t : $n(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Vt(e) ? e.value : e;
}
function fi(e) {
  return Fe(e) ? e() : g(e);
}
const Nm = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Vt(a) && !/* @__PURE__ */ Vt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function ap(e) {
  return /* @__PURE__ */ xa(e) ? e : new Proxy(e, Nm);
}
class Lm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new kl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Rm(e) {
  return new Lm(e);
}
class Im {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new kl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = lo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ot !== this)
      return Vh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Wh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Pm(e, t, n = !1) {
  let i, a;
  return Fe(e) ? i = e : (i = e.get, a = e.set), new Im(i, a, n);
}
const ns = {}, _s = /* @__PURE__ */ new WeakMap();
let ba;
function $m(e, t = !1, n = ba) {
  if (n) {
    let i = _s.get(n);
    i || _s.set(n, i = []), i.push(e);
  }
}
function Fm(e, t, n = We) {
  const { immediate: i, deep: a, once: r, scheduler: o, augmentJob: c, call: u } = n, h = (T) => a ? T : /* @__PURE__ */ Tn(T) || a === !1 || a === 0 ? ci(T, 1) : ci(T);
  let f, b, C, k, N = !1, A = !1;
  if (/* @__PURE__ */ Vt(e) ? (b = () => e.value, N = /* @__PURE__ */ Tn(e)) : /* @__PURE__ */ xa(e) ? (b = () => h(e), N = !0) : Se(e) ? (A = !0, N = e.some((T) => /* @__PURE__ */ xa(T) || /* @__PURE__ */ Tn(T)), b = () => e.map((T) => {
    if (/* @__PURE__ */ Vt(T))
      return T.value;
    if (/* @__PURE__ */ xa(T))
      return h(T);
    if (Fe(T))
      return u ? u(T, 2) : T();
  })) : Fe(e) ? t ? b = u ? () => u(e, 2) : e : b = () => {
    if (C) {
      vi();
      try {
        C();
      } finally {
        gi();
      }
    }
    const T = ba;
    ba = f;
    try {
      return u ? u(e, 3, [k]) : e(k);
    } finally {
      ba = T;
    }
  } : b = Cn, t && a) {
    const T = b, re = a === !0 ? 1 / 0 : a;
    b = () => ci(T(), re);
  }
  const O = cm(), F = () => {
    f.stop(), O && O.active && Ou(O.effects, f);
  };
  if (r && t) {
    const T = t;
    t = (...re) => {
      const ue = T(...re);
      return F(), ue;
    };
  }
  let M = A ? new Array(e.length).fill(ns) : ns;
  const z = (T) => {
    if (!(!(f.flags & 1) || !f.dirty && !T))
      if (t) {
        const re = f.run();
        if (T || a || N || (A ? re.some((ue, X) => Nt(ue, M[X])) : Nt(re, M))) {
          C && C();
          const ue = ba;
          ba = f;
          try {
            const X = [
              re,
              // pass undefined as the old value when it's changed for the first time
              M === ns ? void 0 : A && M[0] === ns ? [] : M,
              k
            ];
            M = re, u ? u(t, 3, X) : (
              // @ts-expect-error
              t(...X)
            );
          } finally {
            ba = ue;
          }
        }
      } else
        f.run();
  };
  return c && c(z), f = new Bh(b), f.scheduler = o ? () => o(z, !1) : z, k = (T) => $m(T, !1, f), C = f.onStop = () => {
    const T = _s.get(f);
    if (T) {
      if (u)
        u(T, 4);
      else
        for (const re of T) re();
      _s.delete(f);
    }
  }, t ? i ? z(!0) : M = f.run() : o ? o(z.bind(null, !0), !0) : f.run(), F.pause = f.pause.bind(f), F.resume = f.resume.bind(f), F.stop = F, F;
}
function ci(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Vt(e))
    ci(e.value, t, n);
  else if (Se(e))
    for (let i = 0; i < e.length; i++)
      ci(e[i], t, n);
  else if (Na(e) || Hi(e))
    e.forEach((i) => {
      ci(i, t, n);
    });
  else if (Dh(e)) {
    for (const i in e)
      ci(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ci(e[i], t, n);
  }
  return e;
}
function xo(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    xl(a, t, n);
  }
}
function En(e, t, n, i) {
  if (Fe(e)) {
    const a = xo(e, t, n, i);
    return a && $h(a) && a.catch((r) => {
      xl(r, t, n);
    }), a;
  }
  if (Se(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(En(e[r], t, n, i));
    return a;
  }
}
function xl(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || We;
  if (t) {
    let c = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const f = c.ec;
      if (f) {
        for (let b = 0; b < f.length; b++)
          if (f[b](e, u, h) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      vi(), xo(r, null, 10, [
        e,
        u,
        h
      ]), gi();
      return;
    }
  }
  Dm(e, n, a, i, o);
}
function Dm(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const en = [];
let Bn = -1;
const Xa = [];
let ji = null, Ga = 0;
const rp = /* @__PURE__ */ Promise.resolve();
let ws = null;
function Qt(e) {
  const t = ws || rp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mm(e) {
  let t = Bn + 1, n = en.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = en[i], r = fo(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Du(e) {
  if (!(e.flags & 1)) {
    const t = fo(e), n = en[en.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fo(n) ? en.push(e) : en.splice(Mm(t), 0, e), e.flags |= 1, op();
  }
}
function op() {
  ws || (ws = rp.then(cp));
}
function sp(e) {
  if (!Se(e))
    ji && e.id === -1 ? ji.splice(Ga + 1, 0, e) : e.flags & 1 || (Xa.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Xa.push(e[t]);
  op();
}
function Gd(e, t, n = Bn + 1) {
  for (; n < en.length; n++) {
    const i = en[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      en.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function lp(e) {
  if (Xa.length) {
    const t = [...new Set(Xa)].sort(
      (n, i) => fo(n) - fo(i)
    );
    if (Xa.length = 0, ji) {
      for (let n = 0; n < t.length; n++)
        ji.push(t[n]);
      return;
    }
    for (ji = t, Ga = 0; Ga < ji.length; Ga++) {
      const n = ji[Ga];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ji = null, Ga = 0;
  }
}
const fo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cp(e) {
  try {
    for (Bn = 0; Bn < en.length; Bn++) {
      const t = en[Bn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), xo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Bn < en.length; Bn++) {
      const t = en[Bn];
      t && (t.flags &= -2);
    }
    Bn = -1, en.length = 0, lp(), ws = null, (en.length || Xa.length) && cp();
  }
}
let Rt = null, Ol = null;
function Ss(e) {
  const t = Rt;
  return Rt = e, Ol = e && e.type.__scopeId || null, t;
}
function zm(e) {
  Ol = e;
}
function Um() {
  Ol = null;
}
const jm = (e) => Re;
function Re(e, t = Rt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && As(-1);
    const r = Ss(t), o = hi.length;
    let c;
    try {
      c = e(...a);
    } finally {
      for (let u = hi.length; u > o; u--) Vu();
      Ss(r), i._d && As(1);
    }
    return c;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ie(e, t) {
  if (Rt === null)
    return e;
  const n = $l(Rt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, c, u = We] = t[a];
    r && (Fe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ci(o), i.push({
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
function fa(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const c = a[o];
    r && (c.oldValue = r[o].value);
    let u = c.dir[i];
    u && (vi(), En(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), gi());
  }
}
function _n(e, t) {
  if (Bt) {
    let n = Bt.provides;
    const i = Bt.parent && Bt.parent.provides;
    i === n && (n = Bt.provides = Object.create(i)), n[e] = t;
  }
}
function jt(e, t, n = !1) {
  const i = Ra();
  if (i || Ja) {
    let a = Ja ? Ja._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Fe(t) ? t.call(i && i.proxy) : t;
  }
}
const Bm = /* @__PURE__ */ Symbol.for("v-scx"), Hm = () => jt(Bm);
function Vm(e, t) {
  return Nl(e, null, t);
}
function Km(e, t) {
  return Nl(
    e,
    null,
    { flush: "sync" }
  );
}
function qe(e, t, n) {
  return Nl(e, t, n);
}
function Nl(e, t, n = We) {
  const { immediate: i, deep: a, flush: r, once: o } = n, c = yt({}, n), u = t && i || !t && r !== "post";
  let h;
  if (bo) {
    if (r === "sync") {
      const k = Hm();
      h = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!u) {
      const k = () => {
      };
      return k.stop = Cn, k.resume = Cn, k.pause = Cn, k;
    }
  }
  const f = Bt;
  c.call = (k, N, A) => En(k, f, N, A);
  let b = !1;
  r === "post" ? c.scheduler = (k) => {
    Jt(k, f && f.suspense);
  } : r !== "sync" && (b = !0, c.scheduler = (k, N) => {
    N ? k() : Du(k);
  }), c.augmentJob = (k) => {
    t && (k.flags |= 4), b && (k.flags |= 2, f && (k.id = f.uid, k.i = f));
  };
  const C = Fm(e, t, c);
  return bo && (h ? h.push(C) : u && C()), C;
}
function Gm(e, t, n) {
  const i = this.proxy, a = st(e) ? e.includes(".") ? up(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Fe(t) ? r = t : (r = t.handler, n = t);
  const o = Lo(this), c = Nl(a, r.bind(i), n);
  return o(), c;
}
function up(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Mi = /* @__PURE__ */ new WeakMap(), dp = /* @__PURE__ */ Symbol("_vte"), Ll = (e) => e.__isTeleport, _a = (e) => e && (e.disabled || e.disabled === ""), Wm = (e) => e && (e.defer || e.defer === ""), Wd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, qd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Qc = (e, t) => {
  const n = e && e.to;
  return st(n) ? t ? t(n) : null : n;
}, qm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, o, c, u, h) {
    const {
      mc: f,
      pc: b,
      pbc: C,
      o: { insert: k, querySelector: N, createText: A, createComment: O, parentNode: F }
    } = h, M = _a(t.props);
    let { dynamicChildren: z } = t;
    const T = (X, fe, Y) => {
      X.shapeFlag & 16 && f(
        X.children,
        fe,
        Y,
        a,
        r,
        o,
        c,
        u
      );
    }, re = (X = t) => {
      const fe = _a(X.props), Y = X.target = Qc(X.props, N), se = eu(Y, X, A, k);
      Y && (o !== "svg" && Wd(Y) ? o = "svg" : o !== "mathml" && qd(Y) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Y), fe || (T(X, Y, se), Ur(X, !1)));
    }, ue = (X) => {
      const fe = () => {
        if (Mi.get(X) === fe) {
          if (Mi.delete(X), _a(X.props)) {
            const Y = F(X.el) || n;
            T(X, Y, X.anchor), Ur(X, !0);
          }
          re(X);
        }
      };
      Mi.set(X, fe), Jt(fe, r);
    };
    if (e == null) {
      const X = t.el = A(""), fe = t.anchor = A("");
      if (k(X, n, i), k(fe, n, i), Wm(t.props) || r && r.pendingBranch) {
        ue(t);
        return;
      }
      M && (T(t, n, fe), Ur(t, !0)), re();
    } else {
      t.el = e.el;
      const X = t.anchor = e.anchor, fe = Mi.get(e);
      if (fe) {
        fe.flags |= 8, Mi.delete(e), ue(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Y = t.target = e.target, se = t.targetAnchor = e.targetAnchor, ge = _a(e.props), J = ge ? n : Y, Q = ge ? X : se;
      if (o === "svg" || Wd(Y) ? o = "svg" : (o === "mathml" || qd(Y)) && (o = "mathml"), z ? (C(
        e.dynamicChildren,
        z,
        J,
        a,
        r,
        o,
        c
      ), Hu(e, t, !0)) : u || b(
        e,
        t,
        J,
        Q,
        a,
        r,
        o,
        c,
        !1
      ), M)
        ge ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : is(
          t,
          n,
          X,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = Qc(t.props, N);
        $ && (t.target = $, is(
          t,
          $,
          null,
          h,
          0
        ));
      } else ge && is(
        t,
        Y,
        se,
        h,
        1
      );
      Ur(t, M);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: c,
      anchor: u,
      targetStart: h,
      targetAnchor: f,
      target: b,
      props: C
    } = e, k = _a(C), N = r || !k, A = Mi.get(e);
    if (A && (A.flags |= 8, Mi.delete(e)), b && (a(h), a(f)), r && a(u), !A && (k || b) && o & 16)
      for (let O = 0; O < c.length; O++) {
        const F = c[O];
        i(
          F,
          t,
          n,
          N,
          !!F.dynamicChildren
        );
      }
  },
  move: is,
  hydrate: Ym
};
function is(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: c, shapeFlag: u, children: h, props: f } = e, b = r === 2;
  if (b && i(o, t, n), !Mi.has(e) && (!b || _a(f)) && u & 16)
    for (let C = 0; C < h.length; C++)
      a(
        h[C],
        t,
        n,
        2
      );
  b && i(c, t, n);
}
function Ym(e, t, n, i, a, r, {
  o: { nextSibling: o, parentNode: c, querySelector: u, insert: h, createText: f }
}, b) {
  function C(O, F) {
    let M = F;
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
  function k(O, F) {
    F.anchor = b(
      o(O),
      F,
      c(O),
      n,
      i,
      a,
      r
    );
  }
  const N = t.target = Qc(
    t.props,
    u
  ), A = _a(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (A ? (k(e, t), C(N, O), t.targetAnchor || eu(
      N,
      t,
      f,
      h,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === N ? e : null
    )) : (t.anchor = o(e), C(N, O), t.targetAnchor || eu(N, t, f, h), b(
      O && o(O),
      t,
      N,
      n,
      i,
      a,
      r
    ))), Ur(t, A);
  } else A && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const fp = qm;
function Ur(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function eu(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[dp] = o, e && (i(r, e, a), i(o, e, a)), o;
}
const wn = /* @__PURE__ */ Symbol("_leaveCb"), Lr = /* @__PURE__ */ Symbol("_enterCb");
function Xm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Xi(() => {
    e.isMounted = !0;
  }), ar(() => {
    e.isUnmounting = !0;
  }), e;
}
const mn = [Function, Array], hp = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: mn,
  onEnter: mn,
  onAfterEnter: mn,
  onEnterCancelled: mn,
  // leave
  onBeforeLeave: mn,
  onLeave: mn,
  onAfterLeave: mn,
  onLeaveCancelled: mn,
  // appear
  onBeforeAppear: mn,
  onAppear: mn,
  onAfterAppear: mn,
  onAppearCancelled: mn
}, pp = (e) => {
  const t = e.subTree;
  return t.component ? pp(t.component) : t;
}, Zm = {
  name: "BaseTransition",
  props: hp,
  setup(e, { slots: t }) {
    const n = Ra(), i = Xm();
    return () => {
      const a = t.default && mp(t.default(), !0), r = a && a.length ? vp(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? D() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: c } = o;
      if (i.isLeaving)
        return gc(r);
      const u = Cs(r);
      if (!u)
        return gc(r);
      let h = tu(
        u,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (b) => h = b
      );
      u.type !== Lt && ho(u, h);
      let f = n.subTree && Cs(n.subTree);
      if (f && f.type !== Lt && !wa(f, u) && pp(n).type !== Lt) {
        let b = tu(
          f,
          o,
          i,
          n
        );
        if (ho(f, b), c === "out-in" && u.type !== Lt)
          return i.isLeaving = !0, b.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete b.afterLeave, f = void 0;
          }, gc(r);
        c === "in-out" && u.type !== Lt ? b.delayLeave = (C, k, N) => {
          const A = gp(
            i,
            f
          );
          A[String(f.key)] = f, C[wn] = () => {
            k(), C[wn] = void 0, delete h.delayedLeave, f = void 0;
          }, h.delayedLeave = () => {
            N(), delete h.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function vp(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Lt) {
        t = n;
        break;
      }
  }
  return t;
}
const Jm = Zm;
function gp(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function tu(e, t, n, i, a) {
  const {
    appear: r,
    mode: o,
    persisted: c = !1,
    onBeforeEnter: u,
    onEnter: h,
    onAfterEnter: f,
    onEnterCancelled: b,
    onBeforeLeave: C,
    onLeave: k,
    onAfterLeave: N,
    onLeaveCancelled: A,
    onBeforeAppear: O,
    onAppear: F,
    onAfterAppear: M,
    onAppearCancelled: z
  } = t, T = String(e.key), re = gp(n, e), ue = (Y, se) => {
    Y && En(
      Y,
      i,
      9,
      se
    );
  }, X = (Y, se) => {
    const ge = se[1];
    ue(Y, se), Se(Y) ? Y.every((J) => J.length <= 1) && ge() : Y.length <= 1 && ge();
  }, fe = {
    mode: o,
    persisted: c,
    beforeEnter(Y) {
      let se = u;
      if (!n.isMounted)
        if (r)
          se = O || u;
        else
          return;
      Y[wn] && Y[wn](
        !0
        /* cancelled */
      );
      const ge = re[T];
      ge && wa(e, ge) && ge.el[wn] && ge.el[wn](), ue(se, [Y]);
    },
    enter(Y) {
      if (re[T] === e) return;
      let se = h, ge = f, J = b;
      if (!n.isMounted)
        if (r)
          se = F || h, ge = M || f, J = z || b;
        else
          return;
      let Q = !1;
      Y[Lr] = (U) => {
        Q || (Q = !0, U ? ue(J, [Y]) : ue(ge, [Y]), fe.delayedLeave && fe.delayedLeave(), Y[Lr] = void 0);
      };
      const $ = Y[Lr].bind(null, !1);
      se ? X(se, [Y, $]) : $();
    },
    leave(Y, se) {
      const ge = String(e.key);
      if (Y[Lr] && Y[Lr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      ue(C, [Y]);
      let J = !1;
      Y[wn] = ($) => {
        J || (J = !0, se(), $ ? ue(A, [Y]) : ue(N, [Y]), Y[wn] = void 0, re[ge] === e && delete re[ge]);
      };
      const Q = Y[wn].bind(null, !1);
      re[ge] = e, k ? X(k, [Y, Q]) : Q();
    },
    clone(Y) {
      const se = tu(
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
function gc(e) {
  if (Rl(e))
    return e = qi(e), e.children = null, e;
}
function Cs(e) {
  if (!Rl(e))
    return Ll(e.type) && e.children ? vp(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Fe(n.default))
      return n.default();
  }
}
function ho(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    ho(
      Ll(n.type) && Cs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function mp(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const c = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === ae ? (o.patchFlag & 128 && a++, i = i.concat(
      mp(o.children, t, c)
    )) : (t || o.type !== Lt) && i.push(c != null ? qi(o, { key: c }) : o);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function It(e, t) {
  return Fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    yt({ name: e.name }, t, { setup: e })
  ) : e;
}
function bp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Qm(e) {
  const t = Ra(), n = /* @__PURE__ */ np(null);
  if (t) {
    const a = t.refs === We ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function Yd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ts = /* @__PURE__ */ new WeakMap();
function Yr(e, t, n, i, a = !1) {
  if (Se(e)) {
    e.forEach(
      (A, O) => Yr(
        A,
        t && (Se(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Za(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Yr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? $l(i.component) : i.el, o = a ? null : r, { i: c, r: u } = e, h = t && t.r, f = c.refs === We ? c.refs = {} : c.refs, b = c.setupState, C = /* @__PURE__ */ Ye(b), k = b === We ? Ph : (A) => Yd(f, A) ? !1 : Ze(C, A), N = (A, O) => !(O && Yd(f, O));
  if (h != null && h !== u) {
    if (Xd(t), st(h))
      f[h] = null, k(h) && (b[h] = null);
    else if (/* @__PURE__ */ Vt(h)) {
      const A = t;
      N(h, A.k) && (h.value = null), A.k && (f[A.k] = null);
    }
  }
  if (Fe(u))
    xo(u, c, 12, [o, f]);
  else {
    const A = st(u), O = /* @__PURE__ */ Vt(u);
    if (A || O) {
      const F = () => {
        if (e.f) {
          const M = A ? k(u) ? b[u] : f[u] : N() || !e.k ? u.value : f[e.k];
          if (a)
            Se(M) && Ou(M, r);
          else if (Se(M))
            M.includes(r) || M.push(r);
          else if (A)
            f[u] = [r], k(u) && (b[u] = f[u]);
          else {
            const z = [r];
            N(u, e.k) && (u.value = z), e.k && (f[e.k] = z);
          }
        } else A ? (f[u] = o, k(u) && (b[u] = o)) : O && (N(u, e.k) && (u.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const M = () => {
          F(), Ts.delete(e);
        };
        M.id = -1, Ts.set(e, M), Jt(M, n);
      } else
        Xd(e), F();
    }
  }
}
function Xd(e) {
  const t = Ts.get(e);
  t && (t.flags |= 8, Ts.delete(e));
}
El().requestIdleCallback;
El().cancelIdleCallback;
const Za = (e) => !!e.type.__asyncLoader, Rl = (e) => e.type.__isKeepAlive;
function eb(e, t) {
  yp(e, "a", t);
}
function tb(e, t) {
  yp(e, "da", t);
}
function yp(e, t, n = Bt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Il(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Rl(a.parent.vnode) && nb(i, t, n, a), a = a.parent;
  }
}
function nb(e, t, n, i) {
  const a = Il(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Oo(() => {
    Ou(i[t], a);
  }, n);
}
function Il(e, t, n = Bt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      vi();
      const c = Lo(n), u = En(t, n, e, o);
      return c(), gi(), u;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const _i = (e) => (t, n = Bt) => {
  (!bo || e === "sp") && Il(e, (...i) => t(...i), n);
}, _p = _i("bm"), Xi = _i("m"), wp = _i(
  "bu"
), ib = _i("u"), ar = _i(
  "bum"
), Oo = _i("um"), ab = _i(
  "sp"
), rb = _i("rtg"), ob = _i("rtc");
function sb(e, t = Bt) {
  Il("ec", e, t);
}
const Mu = "components", lb = "directives";
function Be(e, t) {
  return Uu(Mu, e, !0, t) || e;
}
const Sp = /* @__PURE__ */ Symbol.for("v-ndc");
function zu(e) {
  return st(e) ? Uu(Mu, e, !1) || e : e || Sp;
}
function Zd(e) {
  return Uu(lb, e);
}
function Uu(e, t, n = !0, i = !1) {
  const a = Rt || Bt;
  if (a) {
    const r = a.type;
    if (e === Mu) {
      const c = Vb(
        r,
        !1
      );
      if (c && (c === t || c === Ht(t) || c === Cl(Ht(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Jd(a[e] || r[e], t) || // global registration
      Jd(a.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function Jd(e, t) {
  return e && (e[t] || e[Ht(t)] || e[Cl(Ht(t))]);
}
function Ce(e, t, n, i) {
  let a;
  const r = n, o = Se(e);
  if (o || st(e)) {
    const c = o && /* @__PURE__ */ xa(e);
    let u = !1, h = !1;
    c && (u = !/* @__PURE__ */ Tn(e), h = /* @__PURE__ */ mi(e), e = Al(e)), a = new Array(e.length);
    for (let f = 0, b = e.length; f < b; f++)
      a[f] = t(
        u ? h ? ir($n(e[f])) : $n(e[f]) : e[f],
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
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u];
        a[u] = t(e[f], f, u, r);
      }
    }
  else
    a = [];
  return a;
}
function Me(e, t, n, i, a, r) {
  if (n == null && (n = {}), Rt.ce || Rt.parent && Za(Rt.parent) && Rt.parent.ce) {
    const h = n, f = Object.keys(h).length > 0;
    return t !== "default" && (h.name = t), y(), je(
      ae,
      null,
      [ye("slot", h, i && i())],
      f ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const c = hi.length;
  y();
  let u;
  try {
    const h = o && Cp(o(n)), f = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    h && h.key;
    u = je(
      ae,
      {
        key: (f && !Pn(f) ? f : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!h && i ? "_fb" : "")
      },
      h || (i ? i() : []),
      h && e._ === 1 ? 64 : -2
    );
  } catch (h) {
    for (let f = hi.length; f > c; f--) Vu();
    throw h;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), u;
}
function Cp(e) {
  return e.some((t) => vo(t) ? !(t.type === Lt || t.type === ae && !Cp(t.children)) : !0) ? e : null;
}
const nu = (e) => e ? Kp(e) ? $l(e) : nu(e.parent) : null, Xr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ yt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => nu(e.parent),
    $root: (e) => nu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => kp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Du(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qt.bind(e.proxy)),
    $watch: (e) => Gm.bind(e)
  })
), mc = (e, t) => e !== We && !e.__isScriptSetup && Ze(e, t), cb = {
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
        if (mc(i, t))
          return o[t] = 1, i[t];
        if (a !== We && Ze(a, t))
          return o[t] = 2, a[t];
        if (Ze(r, t))
          return o[t] = 3, r[t];
        if (n !== We && Ze(n, t))
          return o[t] = 4, n[t];
        iu && (o[t] = 0);
      }
    }
    const h = Xr[t];
    let f, b;
    if (h)
      return t === "$attrs" && Ut(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== We && Ze(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      b = u.config.globalProperties, Ze(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return mc(a, t) ? (a[t] = n, !0) : i !== We && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: o }
  }, c) {
    let u;
    return !!(n[c] || e !== We && c[0] !== "$" && Ze(e, c) || mc(t, c) || Ze(r, c) || Ze(i, c) || Ze(Xr, c) || Ze(a.config.globalProperties, c) || (u = o.__cssModules) && u[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ub() {
  return Tp().slots;
}
function db() {
  return Tp().attrs;
}
function Tp(e) {
  const t = Ra();
  return t.setupContext || (t.setupContext = Wp(t));
}
function Es(e) {
  return Se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function fb(e, t) {
  return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : yt({}, Es(e), Es(t));
}
let iu = !0;
function hb(e) {
  const t = kp(e), n = e.proxy, i = e.ctx;
  iu = !1, t.beforeCreate && Qd(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: c,
    provide: u,
    inject: h,
    // lifecycle
    created: f,
    beforeMount: b,
    mounted: C,
    beforeUpdate: k,
    updated: N,
    activated: A,
    deactivated: O,
    beforeDestroy: F,
    beforeUnmount: M,
    destroyed: z,
    unmounted: T,
    render: re,
    renderTracked: ue,
    renderTriggered: X,
    errorCaptured: fe,
    serverPrefetch: Y,
    // public API
    expose: se,
    inheritAttrs: ge,
    // assets
    components: J,
    directives: Q,
    filters: $
  } = t;
  if (h && pb(h, i, null), o)
    for (const le in o) {
      const ie = o[le];
      Fe(ie) && (i[le] = ie.bind(n));
    }
  if (a) {
    const le = a.call(n, n);
    Je(le) && (e.data = /* @__PURE__ */ Ot(le));
  }
  if (iu = !0, r)
    for (const le in r) {
      const ie = r[le], ve = Fe(ie) ? ie.bind(n, n) : Fe(ie.get) ? ie.get.bind(n, n) : Cn, de = !Fe(ie) && Fe(ie.set) ? ie.set.bind(n) : Cn, be = H({
        get: ve,
        set: de
      });
      Object.defineProperty(i, le, {
        enumerable: !0,
        configurable: !0,
        get: () => be.value,
        set: (_e) => be.value = _e
      });
    }
  if (c)
    for (const le in c)
      Ep(c[le], i, n, le);
  if (u) {
    const le = Fe(u) ? u.call(n) : u;
    Reflect.ownKeys(le).forEach((ie) => {
      _n(ie, le[ie]);
    });
  }
  f && Qd(f, e, "c");
  function q(le, ie) {
    Se(ie) ? ie.forEach((ve) => le(ve.bind(n))) : ie && le(ie.bind(n));
  }
  if (q(_p, b), q(Xi, C), q(wp, k), q(ib, N), q(eb, A), q(tb, O), q(sb, fe), q(ob, ue), q(rb, X), q(ar, M), q(Oo, T), q(ab, Y), Se(se))
    if (se.length) {
      const le = e.exposed || (e.exposed = {});
      se.forEach((ie) => {
        Object.defineProperty(le, ie, {
          get: () => n[ie],
          set: (ve) => n[ie] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === Cn && (e.render = re), ge != null && (e.inheritAttrs = ge), J && (e.components = J), Q && (e.directives = Q), Y && bp(e);
}
function pb(e, t, n = Cn) {
  Se(e) && (e = au(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Je(a) ? "default" in a ? r = jt(
      a.from || i,
      a.default,
      !0
    ) : r = jt(a.from || i) : r = jt(a), /* @__PURE__ */ Vt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function Qd(e, t, n) {
  En(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ep(e, t, n, i) {
  let a = i.includes(".") ? up(n, i) : () => n[i];
  if (st(e)) {
    const r = t[e];
    Fe(r) && qe(a, r);
  } else if (Fe(e))
    qe(a, e.bind(n));
  else if (Je(e))
    if (Se(e))
      e.forEach((r) => Ep(r, t, n, i));
    else {
      const r = Fe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Fe(r) && qe(a, r, e);
    }
}
function kp(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !a.length && !n && !i ? u = t : (u = {}, a.length && a.forEach(
    (h) => ks(u, h, o, !0)
  ), ks(u, t, o)), Je(t) && r.set(t, u), u;
}
function ks(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && ks(e, r, n, !0), a && a.forEach(
    (o) => ks(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const c = vb[o] || n && n[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const vb = {
  data: ef,
  props: tf,
  emits: tf,
  // objects
  methods: jr,
  computed: jr,
  // lifecycle
  beforeCreate: Zt,
  created: Zt,
  beforeMount: Zt,
  mounted: Zt,
  beforeUpdate: Zt,
  updated: Zt,
  beforeDestroy: Zt,
  beforeUnmount: Zt,
  destroyed: Zt,
  unmounted: Zt,
  activated: Zt,
  deactivated: Zt,
  errorCaptured: Zt,
  serverPrefetch: Zt,
  // assets
  components: jr,
  directives: jr,
  // watch
  watch: mb,
  // provide / inject
  provide: ef,
  inject: gb
};
function ef(e, t) {
  return t ? e ? function() {
    return yt(
      Fe(e) ? e.call(this, this) : e,
      Fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gb(e, t) {
  return jr(au(e), au(t));
}
function au(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Zt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function jr(e, t) {
  return e ? yt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function tf(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yt(
    /* @__PURE__ */ Object.create(null),
    Es(e),
    Es(t ?? {})
  ) : t;
}
function mb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = yt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Zt(e[i], t[i]);
  return n;
}
function Ap() {
  return {
    app: null,
    config: {
      isNativeTag: Ph,
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
let bb = 0;
function yb(e, t) {
  return function(i, a = null) {
    Fe(i) || (i = yt({}, i)), a != null && !Je(a) && (a = null);
    const r = Ap(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const h = r.app = {
      _uid: bb++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Gb,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...b) {
        return o.has(f) || (f && Fe(f.install) ? (o.add(f), f.install(h, ...b)) : Fe(f) && (o.add(f), f(h, ...b))), h;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), h;
      },
      component(f, b) {
        return b ? (r.components[f] = b, h) : r.components[f];
      },
      directive(f, b) {
        return b ? (r.directives[f] = b, h) : r.directives[f];
      },
      mount(f, b, C) {
        if (!u) {
          const k = h._ceVNode || ye(i, a);
          return k.appContext = r, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(k, f, C), u = !0, h._container = f, f.__vue_app__ = h, $l(k.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        u && (En(
          c,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(f, b) {
        return r.provides[f] = b, h;
      },
      runWithContext(f) {
        const b = Ja;
        Ja = h;
        try {
          return f();
        } finally {
          Ja = b;
        }
      }
    };
    return h;
  };
}
let Ja = null;
function xp(e, t, n = We) {
  const i = Ra(), a = Ht(t), r = yi(t), o = Op(e, a), c = Rm((u, h) => {
    let f, b = We, C;
    return Km(() => {
      const k = e[a];
      Nt(f, k) && (f = k, h());
    }), {
      get() {
        return u(), n.get ? n.get(f) : f;
      },
      set(k) {
        const N = n.set ? n.set(k) : k;
        if (!Nt(N, f) && !(b !== We && Nt(k, b)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (f = k, h()), i.emit(`update:${t}`, N), Nt(k, b) && (Nt(k, N) && !Nt(N, C) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && b !== We && !Nt(N, f)) && h(), b = k, C = N;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? o || We : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const Op = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ht(t)}Modifiers`] || e[`${yi(t)}Modifiers`];
function _b(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || We;
  let a = n;
  const r = t.startsWith("update:"), o = r && Op(i, t.slice(7));
  o && (o.trim && (a = n.map((f) => st(f) ? f.trim() : f)), o.number && (a = a.map(Tl)));
  let c, u = i[c = dc(t)] || // also try camelCase event handler (#2249)
  i[c = dc(Ht(t))];
  !u && r && (u = i[c = dc(yi(t))]), u && En(
    u,
    e,
    6,
    a
  );
  const h = i[c + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, En(
      h,
      e,
      6,
      a
    );
  }
}
const wb = /* @__PURE__ */ new WeakMap();
function Np(e, t, n = !1) {
  const i = n ? wb : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, c = !1;
  if (!Fe(e)) {
    const u = (h) => {
      const f = Np(h, t, !0);
      f && (c = !0, yt(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (Je(e) && i.set(e, null), null) : (Se(r) ? r.forEach((u) => o[u] = null) : yt(o, r), Je(e) && i.set(e, o), o);
}
function Pl(e, t) {
  return !e || !_l(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, yi(t)) || Ze(e, t));
}
function nf(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: c,
    emit: u,
    render: h,
    renderCache: f,
    props: b,
    data: C,
    setupState: k,
    ctx: N,
    inheritAttrs: A
  } = e, O = Ss(e);
  let F, M;
  try {
    if (n.shapeFlag & 4) {
      const T = a || i, re = T;
      F = Gn(
        h.call(
          re,
          T,
          f,
          b,
          k,
          C,
          N
        )
      ), M = c;
    } else {
      const T = t;
      F = Gn(
        T.length > 1 ? T(
          b,
          { attrs: c, slots: o, emit: u }
        ) : T(
          b,
          null
        )
      ), M = t.props ? c : Sb(c);
    }
  } catch (T) {
    hi.length = 0, xl(T, e, 1), F = ye(Lt);
  }
  let z = F;
  if (M && A !== !1) {
    const T = Object.keys(M), { shapeFlag: re } = z;
    T.length && re & 7 && (r && T.some(wl) && (M = Cb(
      M,
      r
    )), z = qi(z, M, !1, !0));
  }
  if (n.dirs && (z = qi(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const T = Ll(z.type) && Cs(z) || z;
    ho(T, n.transition);
  }
  return F = z, Ss(O), F;
}
const Sb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || _l(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Cb = (e, t) => {
  const n = {};
  for (const i in e)
    (!wl(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Tb(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: o, children: c, patchFlag: u } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return i ? af(i, o, h) : !!o;
    if (u & 8) {
      const f = t.dynamicProps;
      for (let b = 0; b < f.length; b++) {
        const C = f[b];
        if (Lp(o, i, C) && !Pl(h, C))
          return !0;
      }
    }
  } else
    return (a || c) && (!c || !c.$stable) ? !0 : i === o ? !1 : i ? o ? af(i, o, h) : !0 : !!o;
  return !1;
}
function af(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Lp(t, e, r) && !Pl(n, r))
      return !0;
  }
  return !1;
}
function Lp(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Je(i) && Je(a) ? !Wi(i, a) : i !== a;
}
function Eb({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Rp = {}, Ip = () => Object.create(Rp), Pp = (e) => Object.getPrototypeOf(e) === Rp;
function kb(e, t, n, i = !1) {
  const a = {}, r = Ip();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), $p(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Am(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Ab(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, c = /* @__PURE__ */ Ye(a), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let b = 0; b < f.length; b++) {
        let C = f[b];
        if (Pl(e.emitsOptions, C))
          continue;
        const k = t[C];
        if (u)
          if (Ze(r, C))
            k !== r[C] && (r[C] = k, h = !0);
          else {
            const N = Ht(C);
            a[N] = ru(
              u,
              c,
              N,
              k,
              e,
              !1
            );
          }
        else
          k !== r[C] && (r[C] = k, h = !0);
      }
    }
  } else {
    $p(e, t, a, r) && (h = !0);
    let f;
    for (const b in c)
      (!t || // for camelCase
      !Ze(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = yi(b)) === b || !Ze(t, f))) && (u ? n && // for camelCase
      (n[b] !== void 0 || // for kebab-case
      n[f] !== void 0) && (a[b] = ru(
        u,
        c,
        b,
        void 0,
        e,
        !0
      )) : delete a[b]);
    if (r !== c)
      for (const b in r)
        (!t || !Ze(t, b)) && (delete r[b], h = !0);
  }
  h && li(e.attrs, "set", "");
}
function $p(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (Gr(u))
        continue;
      const h = t[u];
      let f;
      a && Ze(a, f = Ht(u)) ? !r || !r.includes(f) ? n[f] = h : (c || (c = {}))[f] = h : Pl(e.emitsOptions, u) || (!(u in i) || h !== i[u]) && (i[u] = h, o = !0);
    }
  if (r) {
    const u = /* @__PURE__ */ Ye(n), h = c || We;
    for (let f = 0; f < r.length; f++) {
      const b = r[f];
      n[b] = ru(
        a,
        u,
        b,
        h[b],
        e,
        !Ze(h, b)
      );
    }
  }
  return o;
}
function ru(e, t, n, i, a, r) {
  const o = e[n];
  if (o != null) {
    const c = Ze(o, "default");
    if (c && i === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Fe(u)) {
        const { propsDefaults: h } = a;
        if (n in h)
          i = h[n];
        else {
          const f = Lo(a);
          i = h[n] = u.call(
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
    ] && (i === "" || i === yi(n)) && (i = !0));
  }
  return i;
}
const xb = /* @__PURE__ */ new WeakMap();
function Fp(e, t, n = !1) {
  const i = n ? xb : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, c = [];
  let u = !1;
  if (!Fe(e)) {
    const f = (b) => {
      u = !0;
      const [C, k] = Fp(b, t, !0);
      yt(o, C), k && c.push(...k);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !u)
    return Je(e) && i.set(e, Ya), Ya;
  if (Se(r))
    for (let f = 0; f < r.length; f++) {
      const b = Ht(r[f]);
      rf(b) && (o[b] = We);
    }
  else if (r)
    for (const f in r) {
      const b = Ht(f);
      if (rf(b)) {
        const C = r[f], k = o[b] = Se(C) || Fe(C) ? { type: C } : yt({}, C), N = k.type;
        let A = !1, O = !0;
        if (Se(N))
          for (let F = 0; F < N.length; ++F) {
            const M = N[F], z = Fe(M) && M.name;
            if (z === "Boolean") {
              A = !0;
              break;
            } else z === "String" && (O = !1);
          }
        else
          A = Fe(N) && N.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = A, k[
          1
          /* shouldCastTrue */
        ] = O, (A || Ze(k, "default")) && c.push(b);
      }
    }
  const h = [o, c];
  return Je(e) && i.set(e, h), h;
}
function rf(e) {
  return e[0] !== "$" && !Gr(e);
}
const ju = (e) => e === "_" || e === "_ctx" || e === "$stable", Bu = (e) => Se(e) ? e.map(Gn) : [Gn(e)], Ob = (e, t, n) => {
  if (t._n)
    return t;
  const i = Re((...a) => Bu(t(...a)), n);
  return i._c = !1, i;
}, Dp = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (ju(a)) continue;
    const r = e[a];
    if (Fe(r))
      t[a] = Ob(a, r, i);
    else if (r != null) {
      const o = Bu(r);
      t[a] = () => o;
    }
  }
}, Mp = (e, t) => {
  const n = Bu(t);
  e.slots.default = () => n;
}, zp = (e, t, n) => {
  for (const i in t)
    (n || !ju(i)) && (e[i] = t[i]);
}, Nb = (e, t, n) => {
  const i = e.slots = Ip();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (zp(i, t, n), n && Mh(i, "_", a, !0)) : Dp(t, i);
  } else t && Mp(e, t);
}, Lb = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, o = We;
  if (i.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? r = !1 : zp(a, t, n) : (r = !t.$stable, Dp(t, a)), o = t;
  } else t && (Mp(e, t), o = { default: 1 });
  if (r)
    for (const c in a)
      !ju(c) && o[c] == null && delete a[c];
}, Jt = Fb;
function Rb(e) {
  return Ib(e);
}
function Ib(e, t) {
  const n = El();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: c,
    createComment: u,
    setText: h,
    setElementText: f,
    parentNode: b,
    nextSibling: C,
    setScopeId: k = Cn,
    insertStaticContent: N
  } = e, A = (_, E, x, L = null, R = null, j = null, G = void 0, K = null, Z = !!E.dynamicChildren) => {
    if (_ === E)
      return;
    _ && !wa(_, E) && (L = it(_), _e(_, R, j, !0), _ = null), E.patchFlag === -2 && (Z = !1, E.dynamicChildren = null);
    const { type: V, ref: he, shapeFlag: oe } = E;
    switch (V) {
      case No:
        O(_, E, x, L);
        break;
      case Lt:
        F(_, E, x, L);
        break;
      case vs:
        _ == null && M(E, x, L, G);
        break;
      case ae:
        J(
          _,
          E,
          x,
          L,
          R,
          j,
          G,
          K,
          Z
        );
        break;
      default:
        oe & 1 ? re(
          _,
          E,
          x,
          L,
          R,
          j,
          G,
          K,
          Z
        ) : oe & 6 ? Q(
          _,
          E,
          x,
          L,
          R,
          j,
          G,
          K,
          Z
        ) : (oe & 64 || oe & 128) && V.process(
          _,
          E,
          x,
          L,
          R,
          j,
          G,
          K,
          Z,
          Pt
        );
    }
    he != null && R ? Yr(he, _ && _.ref, j, E || _, !E) : he == null && _ && _.ref != null && Yr(_.ref, null, j, _, !0);
  }, O = (_, E, x, L) => {
    if (_ == null)
      i(
        E.el = c(E.children),
        x,
        L
      );
    else {
      const R = E.el = _.el;
      E.children !== _.children && h(R, E.children);
    }
  }, F = (_, E, x, L) => {
    _ == null ? i(
      E.el = u(E.children || ""),
      x,
      L
    ) : E.el = _.el;
  }, M = (_, E, x, L) => {
    [_.el, _.anchor] = N(
      _.children,
      E,
      x,
      L,
      _.el,
      _.anchor
    );
  }, z = ({ el: _, anchor: E }, x, L) => {
    let R;
    for (; _ && _ !== E; )
      R = C(_), i(_, x, L), _ = R;
    i(E, x, L);
  }, T = ({ el: _, anchor: E }) => {
    let x;
    for (; _ && _ !== E; )
      x = C(_), a(_), _ = x;
    a(E);
  }, re = (_, E, x, L, R, j, G, K, Z) => {
    if (E.type === "svg" ? G = "svg" : E.type === "math" && (G = "mathml"), _ == null)
      ue(
        E,
        x,
        L,
        R,
        j,
        G,
        K,
        Z
      );
    else {
      const V = _.el && _.el._isVueCE ? _.el : null;
      try {
        V && V._beginPatch(), Y(
          _,
          E,
          R,
          j,
          G,
          K,
          Z
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, ue = (_, E, x, L, R, j, G, K) => {
    let Z, V;
    const { props: he, shapeFlag: oe, transition: pe, dirs: ke } = _;
    if (Z = _.el = o(
      _.type,
      j,
      he && he.is,
      he
    ), oe & 8 ? f(Z, _.children) : oe & 16 && fe(
      _.children,
      Z,
      null,
      L,
      R,
      bc(_, j),
      G,
      K
    ), ke && fa(_, null, L, "created"), X(Z, _, _.scopeId, G, L), he) {
      for (const ze in he)
        ze !== "value" && !Gr(ze) && r(Z, ze, null, he[ze], j, L);
      "value" in he && r(Z, "value", null, he.value, j), (V = he.onVnodeBeforeMount) && jn(V, L, _);
    }
    ke && fa(_, null, L, "beforeMount");
    const Pe = Pb(R, pe);
    Pe && pe.beforeEnter(Z), i(Z, E, x), ((V = he && he.onVnodeMounted) || Pe || ke) && Jt(() => {
      V && jn(V, L, _), Pe && pe.enter(Z), ke && fa(_, null, L, "mounted");
    }, R);
  }, X = (_, E, x, L, R) => {
    if (x && k(_, x), L)
      for (let j = 0; j < L.length; j++)
        k(_, L[j]);
    if (R) {
      let j = R.subTree;
      if (E === j || Bp(j.type) && (j.ssContent === E || j.ssFallback === E)) {
        const G = R.vnode;
        X(
          _,
          G,
          G.scopeId,
          G.slotScopeIds,
          R.parent
        );
      }
    }
  }, fe = (_, E, x, L, R, j, G, K, Z = 0) => {
    for (let V = Z; V < _.length; V++) {
      const he = _[V] = K ? si(_[V]) : Gn(_[V]);
      A(
        null,
        he,
        E,
        x,
        L,
        R,
        j,
        G,
        K
      );
    }
  }, Y = (_, E, x, L, R, j, G) => {
    const K = E.el = _.el;
    let { patchFlag: Z, dynamicChildren: V, dirs: he } = E;
    Z |= _.patchFlag & 16;
    const oe = _.props || We, pe = E.props || We;
    let ke;
    if (x && ha(x, !1), (ke = pe.onVnodeBeforeUpdate) && jn(ke, x, E, _), he && fa(E, _, x, "beforeUpdate"), x && ha(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!_.dynamicChildren || _.dynamicChildren.length !== V.length) && (Z = 0, G = !1, V = null), (oe.innerHTML && pe.innerHTML == null || oe.textContent && pe.textContent == null) && f(K, ""), V ? se(
      _.dynamicChildren,
      V,
      K,
      x,
      L,
      bc(E, R),
      j
    ) : G || ie(
      _,
      E,
      K,
      null,
      x,
      L,
      bc(E, R),
      j,
      !1
    ), Z > 0) {
      if (Z & 16)
        ge(K, oe, pe, x, R);
      else if (Z & 2 && oe.class !== pe.class && r(K, "class", null, pe.class, R), Z & 4 && r(K, "style", oe.style, pe.style, R), Z & 8) {
        const Pe = E.dynamicProps;
        for (let ze = 0; ze < Pe.length; ze++) {
          const $e = Pe[ze], He = oe[$e], rt = pe[$e];
          (rt !== He || $e === "value") && r(K, $e, He, rt, R, x);
        }
      }
      Z & 1 && _.children !== E.children && f(K, E.children);
    } else !G && V == null && ge(K, oe, pe, x, R);
    ((ke = pe.onVnodeUpdated) || he) && Jt(() => {
      ke && jn(ke, x, E, _), he && fa(E, _, x, "updated");
    }, L);
  }, se = (_, E, x, L, R, j, G) => {
    for (let K = 0; K < E.length; K++) {
      const Z = _[K], V = E[K], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !wa(Z, V) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? b(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      A(
        Z,
        V,
        he,
        null,
        L,
        R,
        j,
        G,
        !0
      );
    }
  }, ge = (_, E, x, L, R) => {
    if (E !== x) {
      if (E !== We)
        for (const j in E)
          !Gr(j) && !(j in x) && r(
            _,
            j,
            E[j],
            null,
            R,
            L
          );
      for (const j in x) {
        if (Gr(j)) continue;
        const G = x[j], K = E[j];
        G !== K && j !== "value" && r(_, j, K, G, R, L);
      }
      "value" in x && r(_, "value", E.value, x.value, R);
    }
  }, J = (_, E, x, L, R, j, G, K, Z) => {
    const V = E.el = _ ? _.el : c(""), he = E.anchor = _ ? _.anchor : c("");
    let { patchFlag: oe, dynamicChildren: pe, slotScopeIds: ke } = E;
    ke && (K = K ? K.concat(ke) : ke), _ == null ? (i(V, x, L), i(he, x, L), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      x,
      he,
      R,
      j,
      G,
      K,
      Z
    )) : oe > 0 && oe & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren && _.dynamicChildren.length === pe.length ? (se(
      _.dynamicChildren,
      pe,
      x,
      R,
      j,
      G,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (E.key != null || R && E === R.subTree) && Hu(
      _,
      E,
      !0
      /* shallow */
    )) : ie(
      _,
      E,
      x,
      he,
      R,
      j,
      G,
      K,
      Z
    );
  }, Q = (_, E, x, L, R, j, G, K, Z) => {
    E.slotScopeIds = K, _ == null ? E.shapeFlag & 512 ? R.ctx.activate(
      E,
      x,
      L,
      G,
      Z
    ) : $(
      E,
      x,
      L,
      R,
      j,
      G,
      Z
    ) : U(_, E, Z);
  }, $ = (_, E, x, L, R, j, G) => {
    const K = _.component = Ub(
      _,
      L,
      R
    );
    if (Rl(_) && (K.ctx.renderer = Pt), jb(K, !1, G), K.asyncDep) {
      if (R && R.registerDep(K, q, G), !_.el) {
        const Z = K.subTree = ye(Lt);
        F(null, Z, E, x), _.placeholder = Z.el;
      }
    } else
      q(
        K,
        _,
        E,
        x,
        R,
        j,
        G
      );
  }, U = (_, E, x) => {
    const L = E.component = _.component;
    if (Tb(_, E, x))
      if (L.asyncDep && !L.asyncResolved) {
        le(L, E, x);
        return;
      } else
        L.next = E, L.update();
    else
      E.el = _.el, L.vnode = E;
  }, q = (_, E, x, L, R, j, G) => {
    const K = () => {
      if (_.isMounted) {
        let { next: oe, bu: pe, u: ke, parent: Pe, vnode: ze } = _;
        {
          const Et = Up(_);
          if (Et) {
            oe && (oe.el = ze.el, le(_, oe, G)), Et.asyncDep.then(() => {
              Jt(() => {
                _.isUnmounted || V();
              }, R);
            });
            return;
          }
        }
        let $e = oe, He;
        ha(_, !1), oe ? (oe.el = ze.el, le(_, oe, G)) : oe = ze, pe && ps(pe), (He = oe.props && oe.props.onVnodeBeforeUpdate) && jn(He, Pe, oe, ze), ha(_, !0);
        const rt = nf(_), vt = _.subTree;
        _.subTree = rt, A(
          vt,
          rt,
          // parent may have changed if it's in a teleport
          b(vt.el),
          // anchor may have changed if it's in a fragment
          it(vt),
          _,
          R,
          j
        ), oe.el = rt.el, $e === null && Eb(_, rt.el), ke && Jt(ke, R), (He = oe.props && oe.props.onVnodeUpdated) && Jt(
          () => jn(He, Pe, oe, ze),
          R
        );
      } else {
        let oe;
        const { el: pe, props: ke } = E, { bm: Pe, m: ze, parent: $e, root: He, type: rt } = _, vt = Za(E);
        ha(_, !1), Pe && ps(Pe), !vt && (oe = ke && ke.onVnodeBeforeMount) && jn(oe, $e, E), ha(_, !0);
        {
          He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(
            rt,
            _.parent ? _.parent.type : void 0
          );
          const Et = _.subTree = nf(_);
          A(
            null,
            Et,
            x,
            L,
            _,
            R,
            j
          ), E.el = Et.el;
        }
        if (ze && Jt(ze, R), !vt && (oe = ke && ke.onVnodeMounted)) {
          const Et = E;
          Jt(
            () => jn(oe, $e, Et),
            R
          );
        }
        (E.shapeFlag & 256 || $e && Za($e.vnode) && $e.vnode.shapeFlag & 256) && _.a && Jt(_.a, R), _.isMounted = !0, E = x = L = null;
      }
    };
    _.scope.on();
    const Z = _.effect = new Bh(K);
    _.scope.off();
    const V = _.update = Z.run.bind(Z), he = _.job = Z.runIfDirty.bind(Z);
    he.i = _, he.id = _.uid, Z.scheduler = () => Du(he), ha(_, !0), V();
  }, le = (_, E, x) => {
    E.component = _;
    const L = _.vnode.props;
    _.vnode = E, _.next = null, Ab(_, E.props, L, x), Lb(_, E.children, x), vi(), Gd(_), gi();
  }, ie = (_, E, x, L, R, j, G, K, Z = !1) => {
    const V = _ && _.children, he = _ ? _.shapeFlag : 0, oe = E.children, { patchFlag: pe, shapeFlag: ke } = E;
    if (pe > 0) {
      if (pe & 128) {
        de(
          V,
          oe,
          x,
          L,
          R,
          j,
          G,
          K,
          Z
        );
        return;
      } else if (pe & 256) {
        ve(
          V,
          oe,
          x,
          L,
          R,
          j,
          G,
          K,
          Z
        );
        return;
      }
    }
    ke & 8 ? (he & 16 && pt(V, R, j), oe !== V && f(x, oe)) : he & 16 ? ke & 16 ? de(
      V,
      oe,
      x,
      L,
      R,
      j,
      G,
      K,
      Z
    ) : pt(V, R, j, !0) : (he & 8 && f(x, ""), ke & 16 && fe(
      oe,
      x,
      L,
      R,
      j,
      G,
      K,
      Z
    ));
  }, ve = (_, E, x, L, R, j, G, K, Z) => {
    _ = _ || Ya, E = E || Ya;
    const V = _.length, he = E.length, oe = Math.min(V, he);
    let pe;
    for (pe = 0; pe < oe; pe++) {
      const ke = E[pe] = Z ? si(E[pe]) : Gn(E[pe]);
      A(
        _[pe],
        ke,
        x,
        null,
        R,
        j,
        G,
        K,
        Z
      );
    }
    V > he ? pt(
      _,
      R,
      j,
      !0,
      !1,
      oe
    ) : fe(
      E,
      x,
      L,
      R,
      j,
      G,
      K,
      Z,
      oe
    );
  }, de = (_, E, x, L, R, j, G, K, Z) => {
    let V = 0;
    const he = E.length;
    let oe = _.length - 1, pe = he - 1;
    for (; V <= oe && V <= pe; ) {
      const ke = _[V], Pe = E[V] = Z ? si(E[V]) : Gn(E[V]);
      if (wa(ke, Pe))
        A(
          ke,
          Pe,
          x,
          null,
          R,
          j,
          G,
          K,
          Z
        );
      else
        break;
      V++;
    }
    for (; V <= oe && V <= pe; ) {
      const ke = _[oe], Pe = E[pe] = Z ? si(E[pe]) : Gn(E[pe]);
      if (wa(ke, Pe))
        A(
          ke,
          Pe,
          x,
          null,
          R,
          j,
          G,
          K,
          Z
        );
      else
        break;
      oe--, pe--;
    }
    if (V > oe) {
      if (V <= pe) {
        const ke = pe + 1, Pe = ke < he ? E[ke].el : L;
        for (; V <= pe; )
          A(
            null,
            E[V] = Z ? si(E[V]) : Gn(E[V]),
            x,
            Pe,
            R,
            j,
            G,
            K,
            Z
          ), V++;
      }
    } else if (V > pe)
      for (; V <= oe; )
        _e(_[V], R, j, !0), V++;
    else {
      const ke = V, Pe = V, ze = /* @__PURE__ */ new Map();
      for (V = Pe; V <= pe; V++) {
        const et = E[V] = Z ? si(E[V]) : Gn(E[V]);
        et.key != null && ze.set(et.key, V);
      }
      let $e, He = 0;
      const rt = pe - Pe + 1;
      let vt = !1, Et = 0;
      const $t = new Array(rt);
      for (V = 0; V < rt; V++) $t[V] = 0;
      for (V = ke; V <= oe; V++) {
        const et = _[V];
        if (He >= rt) {
          _e(et, R, j, !0);
          continue;
        }
        let dt;
        if (et.key != null)
          dt = ze.get(et.key);
        else
          for ($e = Pe; $e <= pe; $e++)
            if ($t[$e - Pe] === 0 && wa(et, E[$e])) {
              dt = $e;
              break;
            }
        dt === void 0 ? _e(et, R, j, !0) : ($t[dt - Pe] = V + 1, dt >= Et ? Et = dt : vt = !0, A(
          et,
          E[dt],
          x,
          null,
          R,
          j,
          G,
          K,
          Z
        ), He++);
      }
      const kn = vt ? $b($t) : Ya;
      for ($e = kn.length - 1, V = rt - 1; V >= 0; V--) {
        const et = Pe + V, dt = E[et], Fn = E[et + 1], gn = et + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Fn.el || jp(Fn)
        ) : L;
        $t[V] === 0 ? A(
          null,
          dt,
          x,
          gn,
          R,
          j,
          G,
          K,
          Z
        ) : vt && ($e < 0 || V !== kn[$e] ? be(dt, x, gn, 2) : $e--);
      }
    }
  }, be = (_, E, x, L, R = null) => {
    const { el: j, type: G, transition: K, children: Z, shapeFlag: V } = _;
    if (V & 6) {
      be(_.component.subTree, E, x, L);
      return;
    }
    if (V & 128) {
      _.suspense.move(E, x, L);
      return;
    }
    if (V & 64) {
      G.move(_, E, x, Pt);
      return;
    }
    if (G === ae) {
      i(j, E, x);
      for (let oe = 0; oe < Z.length; oe++)
        be(Z[oe], E, x, L);
      i(_.anchor, E, x);
      return;
    }
    if (G === vs) {
      z(_, E, x);
      return;
    }
    if (L !== 2 && V & 1 && K)
      if (L === 0)
        K.persisted && !j[wn] ? i(j, E, x) : (K.beforeEnter(j), i(j, E, x), Jt(() => K.enter(j), R));
      else {
        const { leave: oe, delayLeave: pe, afterLeave: ke } = K, Pe = () => {
          _.ctx.isUnmounted ? a(j) : i(j, E, x);
        }, ze = () => {
          const $e = j._isLeaving || !!j[wn];
          j._isLeaving && j[wn](
            !0
            /* cancelled */
          ), K.persisted && !$e ? Pe() : oe(j, () => {
            Pe(), ke && ke();
          });
        };
        pe ? pe(j, Pe, ze) : ze();
      }
    else
      i(j, E, x);
  }, _e = (_, E, x, L = !1, R = !1) => {
    const {
      type: j,
      props: G,
      ref: K,
      children: Z,
      dynamicChildren: V,
      shapeFlag: he,
      patchFlag: oe,
      dirs: pe,
      cacheIndex: ke,
      memo: Pe
    } = _;
    if (oe === -2 && (R = !1), K != null && (vi(), Yr(K, null, x, _, !0), gi()), ke != null && (E.renderCache[ke] = void 0), he & 256) {
      E.ctx.deactivate(_);
      return;
    }
    const ze = he & 1 && pe, $e = !Za(_);
    let He;
    if ($e && (He = G && G.onVnodeBeforeUnmount) && jn(He, E, _), he & 6)
      lt(_.component, x, L);
    else {
      if (he & 128) {
        _.suspense.unmount(x, L);
        return;
      }
      ze && fa(_, null, E, "beforeUnmount"), he & 64 ? _.type.remove(
        _,
        E,
        x,
        Pt,
        L
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== ae || oe > 0 && oe & 64) ? pt(
        V,
        E,
        x,
        !1,
        !0
      ) : (j === ae && oe & 384 || !R && he & 16) && pt(Z, E, x), L && Ke(_);
    }
    const rt = Pe != null && ke == null;
    ($e && (He = G && G.onVnodeUnmounted) || ze || rt) && Jt(() => {
      He && jn(He, E, _), ze && fa(_, null, E, "unmounted"), rt && (_.el = null);
    }, x);
  }, Ke = (_) => {
    const { type: E, el: x, anchor: L, transition: R } = _;
    if (E === ae) {
      Ne(x, L);
      return;
    }
    if (E === vs) {
      T(_);
      return;
    }
    const j = () => {
      a(x), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (_.shapeFlag & 1 && R && !R.persisted) {
      const { leave: G, delayLeave: K } = R, Z = () => G(x, j);
      K ? K(_.el, j, Z) : Z();
    } else
      j();
  }, Ne = (_, E) => {
    let x;
    for (; _ !== E; )
      x = C(_), a(_), _ = x;
    a(E);
  }, lt = (_, E, x) => {
    const { bum: L, scope: R, job: j, subTree: G, um: K, m: Z, a: V } = _;
    of(Z), of(V), L && ps(L), R.stop(), j && (j.flags |= 8, _e(G, _, E, x)), K && Jt(K, E), Jt(() => {
      _.isUnmounted = !0;
    }, E);
  }, pt = (_, E, x, L = !1, R = !1, j = 0) => {
    for (let G = j; G < _.length; G++)
      _e(_[G], E, x, L, R);
  }, it = (_) => {
    if (_.shapeFlag & 6)
      return it(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const E = C(_.anchor || _.el), x = E && E[dp];
    return x ? C(x) : E;
  };
  let ut = !1;
  const at = (_, E, x) => {
    let L;
    _ == null ? E._vnode && (_e(E._vnode, null, null, !0), L = E._vnode.component) : A(
      E._vnode || null,
      _,
      E,
      null,
      null,
      null,
      x
    ), E._vnode = _, ut || (ut = !0, Gd(L), lp(), ut = !1);
  }, Pt = {
    p: A,
    um: _e,
    m: be,
    r: Ke,
    mt: $,
    mc: fe,
    pc: ie,
    pbc: se,
    n: it,
    o: e
  };
  return {
    render: at,
    hydrate: void 0,
    createApp: yb(at)
  };
}
function bc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ha({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Pb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Hu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Se(i) && Se(a))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let c = a[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = a[r] = si(a[r]), c.el = o.el), !n && c.patchFlag !== -2 && Hu(o, c)), c.type === No && (c.patchFlag === -1 && (c = a[r] = si(c)), c.el = o.el), c.type === Lt && !c.el && (c.el = o.el);
    }
}
function $b(e) {
  const t = e.slice(), n = [0];
  let i, a, r, o, c;
  const u = e.length;
  for (i = 0; i < u; i++) {
    const h = e[i];
    if (h !== 0) {
      if (a = n[n.length - 1], e[a] < h) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        c = r + o >> 1, e[n[c]] < h ? r = c + 1 : o = c;
      h < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function Up(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Up(t);
}
function of(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function jp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? jp(t.subTree) : null;
}
const Bp = (e) => e.__isSuspense;
function Fb(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : sp(e);
}
const ae = /* @__PURE__ */ Symbol.for("v-fgt"), No = /* @__PURE__ */ Symbol.for("v-txt"), Lt = /* @__PURE__ */ Symbol.for("v-cmt"), vs = /* @__PURE__ */ Symbol.for("v-stc"), hi = [];
let pn = null;
function y(e = !1) {
  hi.push(pn = e ? null : []);
}
function Vu() {
  hi.pop(), pn = hi[hi.length - 1] || null;
}
let po = 1;
function As(e, t = !1) {
  po += e, e < 0 && pn && t && (pn.hasOnce = !0);
}
function Hp(e) {
  return e.dynamicChildren = po > 0 ? pn || Ya : null, Vu(), po > 0 && pn && pn.push(e), e;
}
function w(e, t, n, i, a, r) {
  return Hp(
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
  return Hp(
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
function vo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vp = ({ key: e }) => e ?? null, gs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? st(e) || /* @__PURE__ */ Vt(e) || Fe(e) ? { i: Rt, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, i = 0, a = null, r = e === ae ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vp(t),
    ref: t && gs(t),
    scopeId: Ol,
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
    ctx: Rt
  };
  return c ? (xs(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= st(n) ? 8 : 16), po > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  pn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && pn.push(u), u;
}
const ye = Db;
function Db(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Sp) && (e = Lt), vo(e)) {
    const c = qi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && xs(c, n), po > 0 && !r && pn && (c.shapeFlag & 6 ? pn[pn.indexOf(e)] = c : pn.push(c)), c.patchFlag = -2, c;
  }
  if (Kb(e) && (e = e.__vccOpts), t) {
    t = go(t);
    let { class: c, style: u } = t;
    c && !st(c) && (t.class = Ee(c)), Je(u) && (/* @__PURE__ */ Fu(u) && !Se(u) && (u = yt({}, u)), t.style = vn(u));
  }
  const o = st(e) ? 1 : Bp(e) ? 128 : Ll(e) ? 64 : Je(e) ? 4 : Fe(e) ? 2 : 0;
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
function go(e) {
  return e ? /* @__PURE__ */ Fu(e) || Pp(e) ? yt({}, e) : e : null;
}
function qi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: o, children: c, transition: u } = e, h = t ? Kt(a || {}, t) : a, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Vp(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Se(r) ? r.concat(gs(t)) : [r, gs(t)] : gs(t)
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
    patchFlag: t && e.type !== ae ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && qi(e.ssContent),
    ssFallback: e.ssFallback && qi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && i && ho(
    f,
    u.clone(f)
  ), f;
}
function Te(e = " ", t = 0) {
  return ye(No, null, e, t);
}
function D(e = "", t = !1) {
  return t ? (y(), je(Lt, null, e)) : ye(Lt, null, e);
}
function Gn(e) {
  return e == null || typeof e == "boolean" ? ye(Lt) : Se(e) ? ye(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : vo(e) ? si(e) : ye(No, null, String(e));
}
function si(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qi(e);
}
function xs(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), xs(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Pp(t) ? t._ctx = Rt : a === 3 && Rt && (Rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Fe(t)) {
    if (i & 65) {
      xs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Rt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Te(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Kt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ee([t.class, i.class]));
      else if (a === "style")
        t.style = vn([t.style, i.style]);
      else if (_l(a)) {
        const r = t[a], o = i[a];
        o && r !== o && !(Se(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !wl(a) && (t[a] = o);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function jn(e, t, n, i = null) {
  En(e, t, 7, [
    n,
    i
  ]);
}
const Mb = Ap();
let zb = 0;
function Ub(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Mb, r = {
    uid: zb++,
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
    scope: new lm(
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
    propsOptions: Fp(i, a),
    emitsOptions: Np(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: We,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: We,
    data: We,
    props: We,
    attrs: We,
    slots: We,
    refs: We,
    setupState: We,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = _b.bind(null, r), e.ce && e.ce(r), r;
}
let Bt = null;
const Ra = () => Bt || Rt;
let Os, mo;
{
  const e = El(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  Os = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Bt = n
  ), mo = t(
    "__VUE_SSR_SETTERS__",
    (n) => bo = n
  );
}
const Lo = (e) => {
  const t = Bt;
  return Os(e), e.scope.on(), () => {
    e.scope.off(), Os(t);
  };
}, sf = () => {
  Bt && Bt.scope.off(), Os(null);
};
function Kp(e) {
  return e.vnode.shapeFlag & 4;
}
let bo = !1;
function jb(e, t = !1, n = !1) {
  t && mo(t);
  const { props: i, children: a } = e.vnode, r = Kp(e);
  kb(e, i, r, t), Nb(e, a, n || t);
  const o = r ? Bb(e, t) : void 0;
  return t && mo(!1), o;
}
function Bb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cb);
  const { setup: i } = n;
  if (i) {
    vi();
    const a = e.setupContext = i.length > 1 ? Wp(e) : null, r = Lo(e), o = xo(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), c = $h(o);
    if (gi(), r(), (c || e.sp) && !Za(e) && bp(e), c) {
      if (o.then(sf, sf), t)
        return o.then((u) => {
          mo(!0);
          try {
            lf(e, u, t);
          } finally {
            mo(!1);
          }
        }).catch((u) => {
          xl(u, e, 0);
        });
      e.asyncDep = o;
    } else
      lf(e, o);
  } else
    Gp(e);
}
function lf(e, t, n) {
  Fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = ap(t)), Gp(e);
}
function Gp(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Cn);
  {
    const a = Lo(e);
    vi();
    try {
      hb(e);
    } finally {
      gi(), a();
    }
  }
}
const Hb = {
  get(e, t) {
    return Ut(e, "get", ""), e[t];
  }
};
function Wp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function $l(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ap(xm(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Xr)
        return Xr[n](e);
    },
    has(t, n) {
      return n in t || n in Xr;
    }
  })) : e.proxy;
}
function Vb(e, t = !0) {
  return Fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Kb(e) {
  return Fe(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ Pm(e, t, bo);
function an(e, t, n) {
  try {
    As(-1);
    const i = arguments.length;
    return i === 2 ? Je(t) && !Se(t) ? vo(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && vo(n) && (n = [n]), ye(e, t, n));
  } finally {
    As(1);
  }
}
const Gb = "3.5.42", Wb = Cn;
let ou;
const cf = typeof window < "u" && window.trustedTypes;
if (cf)
  try {
    ou = /* @__PURE__ */ cf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const qp = ou ? (e) => ou.createHTML(e) : (e) => e, qb = "http://www.w3.org/2000/svg", Yb = "http://www.w3.org/1998/Math/MathML", oi = typeof document < "u" ? document : null, uf = oi && /* @__PURE__ */ oi.createElement("template"), Xb = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? oi.createElementNS(qb, e) : t === "mathml" ? oi.createElementNS(Yb, e) : n ? oi.createElement(e, { is: n }) : oi.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => oi.createTextNode(e),
  createComment: (e) => oi.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => oi.querySelector(e),
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
      uf.innerHTML = qp(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const c = uf.content;
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
}, $i = "transition", Rr = "animation", yo = /* @__PURE__ */ Symbol("_vtc"), Yp = {
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
}, Zb = /* @__PURE__ */ yt(
  {},
  hp,
  Yp
), Jb = (e) => (e.displayName = "Transition", e.props = Zb, e), Qb = /* @__PURE__ */ Jb(
  (e, { slots: t }) => an(Jm, ey(e), t)
), pa = (e, t = []) => {
  Se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, df = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ey(e) {
  const t = {};
  for (const J in e)
    J in Yp || (t[J] = e[J]);
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
    appearActiveClass: h = o,
    appearToClass: f = c,
    leaveFromClass: b = `${n}-leave-from`,
    leaveActiveClass: C = `${n}-leave-active`,
    leaveToClass: k = `${n}-leave-to`
  } = e, N = ty(a), A = N && N[0], O = N && N[1], {
    onBeforeEnter: F,
    onEnter: M,
    onEnterCancelled: z,
    onLeave: T,
    onLeaveCancelled: re,
    onBeforeAppear: ue = F,
    onAppear: X = M,
    onAppearCancelled: fe = z
  } = t, Y = (J, Q, $, U) => {
    J._enterCancelled = U, va(J, Q ? f : c), va(J, Q ? h : o), $ && $();
  }, se = (J, Q) => {
    J._isLeaving = !1, va(J, b), va(J, k), va(J, C), Q && Q();
  }, ge = (J) => (Q, $) => {
    const U = J ? X : M, q = () => Y(Q, J, $);
    pa(U, [Q, q]), ff(() => {
      va(Q, J ? u : r), ni(Q, J ? f : c), df(U) || hf(Q, i, A, q);
    });
  };
  return yt(t, {
    onBeforeEnter(J) {
      pa(F, [J]), ni(J, r), ni(J, o);
    },
    onBeforeAppear(J) {
      pa(ue, [J]), ni(J, u), ni(J, h);
    },
    onEnter: ge(!1),
    onAppear: ge(!0),
    onLeave(J, Q) {
      J._isLeaving = !0;
      const $ = () => se(J, Q);
      ni(J, b), J._enterCancelled ? (ni(J, C), gf(J)) : (gf(J), ni(J, C)), ff(() => {
        J._isLeaving && (va(J, b), ni(J, k), df(T) || hf(J, i, O, $));
      }), pa(T, [J, $]);
    },
    onEnterCancelled(J) {
      Y(J, !1, void 0, !0), pa(z, [J]);
    },
    onAppearCancelled(J) {
      Y(J, !0, void 0, !0), pa(fe, [J]);
    },
    onLeaveCancelled(J) {
      se(J), pa(re, [J]);
    }
  });
}
function ty(e) {
  if (e == null)
    return null;
  if (Je(e))
    return [yc(e.enter), yc(e.leave)];
  {
    const t = yc(e);
    return [t, t];
  }
}
function yc(e) {
  return Jg(e);
}
function ni(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[yo] || (e[yo] = /* @__PURE__ */ new Set())).add(t);
}
function va(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[yo];
  n && (n.delete(t), n.size || (e[yo] = void 0));
}
function ff(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ny = 0;
function hf(e, t, n, i) {
  const a = e._endId = ++ny, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: c, propCount: u } = iy(e, t);
  if (!o)
    return i();
  const h = o + "end";
  let f = 0;
  const b = () => {
    e.removeEventListener(h, C), r();
  }, C = (k) => {
    k.target === e && ++f >= u && b();
  };
  setTimeout(() => {
    f < u && b();
  }, c + 1), e.addEventListener(h, C);
}
function iy(e, t) {
  const n = window.getComputedStyle(e), i = (N) => (n[N] || "").split(", "), a = i(`${$i}Delay`), r = i(`${$i}Duration`), o = pf(a, r), c = i(`${Rr}Delay`), u = i(`${Rr}Duration`), h = pf(c, u);
  let f = null, b = 0, C = 0;
  t === $i ? o > 0 && (f = $i, b = o, C = r.length) : t === Rr ? h > 0 && (f = Rr, b = h, C = u.length) : (b = Math.max(o, h), f = b > 0 ? o > h ? $i : Rr : null, C = f ? f === $i ? r.length : u.length : 0);
  const k = f === $i && /\b(?:transform|all)(?:,|$)/.test(
    i(`${$i}Property`).toString()
  );
  return {
    type: f,
    timeout: b,
    propCount: C,
    hasTransform: k
  };
}
function pf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => vf(n) + vf(e[i])));
}
function vf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function gf(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ay(e, t, n) {
  const i = e[yo];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ns = /* @__PURE__ */ Symbol("_vod"), Xp = /* @__PURE__ */ Symbol("_vsh"), Qa = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ns] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ir(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Ir(e, !0), i.enter(e)) : i.leave(e, () => {
      Ir(e, !1);
    }) : Ir(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ir(e, t);
  }
};
function Ir(e, t) {
  e.style.display = t ? e[Ns] : "none", e[Xp] = !t;
}
const Zp = /* @__PURE__ */ Symbol("");
function ry(e) {
  const t = Ra();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Ls(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Ls(t.ce, a) : su(t.subTree, a), n(a);
  };
  wp(() => {
    sp(i);
  }), Xi(() => {
    qe(i, Cn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), Oo(() => a.disconnect());
  });
}
function su(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      su(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ls(e.el, t);
  else if (e.type === ae)
    e.children.forEach((n) => su(n, t));
  else if (e.type === vs) {
    let { el: n, anchor: i } = e;
    for (; n && (Ls(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Ls(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = sm(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Zp] = i;
  }
}
const oy = /(?:^|;)\s*display\s*:/;
function sy(e, t, n) {
  const i = e.style, a = st(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (st(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          n[c] == null && Br(i, c, "");
        }
      else
        for (const o in t)
          n[o] == null && Br(i, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const c = n[o];
      c != null ? cy(
        e,
        o,
        !st(t) && t ? t[o] : void 0,
        c
      ) || Br(i, o, c) : Br(i, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = i[Zp];
      o && (n += ";" + o), i.cssText = n, r = oy.test(n);
    }
  } else t && e.removeAttribute("style");
  Ns in e && (e[Ns] = r ? i.display : "", e[Xp] && (i.display = "none"));
}
const as = /\s*!important$/;
function Br(e, t, n) {
  if (Se(n))
    n.forEach((i) => Br(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    as.test(n) ? e.setProperty(t, n.replace(as, ""), "important") : e.setProperty(t, n);
  else {
    const i = ly(e, t);
    as.test(n) ? e.setProperty(
      yi(i),
      n.replace(as, ""),
      "important"
    ) : e[i] = n;
  }
}
const mf = ["Webkit", "Moz", "ms"], _c = {};
function ly(e, t) {
  const n = _c[t];
  if (n)
    return n;
  let i = Ht(t);
  if (i !== "filter" && i in e)
    return _c[t] = i;
  i = Cl(i);
  for (let a = 0; a < mf.length; a++) {
    const r = mf[a] + i;
    if (r in e)
      return _c[t] = r;
  }
  return t;
}
function cy(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && st(i) && n === i;
}
const bf = "http://www.w3.org/1999/xlink";
function yf(e, t, n, i, a, r = am(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(bf, t.slice(6, t.length)) : e.setAttributeNS(bf, t, n) : n == null || r && !zh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Pn(n) ? String(n) : n
  );
}
function _f(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? qp(n) : n);
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
    c === "boolean" ? n = zh(n) : n == null && c === "string" ? (n = "", o = !0) : c === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Sa(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function uy(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const wf = /* @__PURE__ */ Symbol("_vei");
function dy(e, t, n, i, a = null) {
  const r = e[wf] || (e[wf] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [c, u] = py(t);
    if (i) {
      const h = r[t] = my(
        i,
        a
      );
      Sa(e, c, h, u);
    } else o && (uy(e, c, o, u), r[t] = void 0);
  }
}
const fy = /(Once|Passive|Capture)$/, hy = /^on:?(?:Once|Passive|Capture)$/;
function py(e) {
  let t, n;
  for (; (n = e.match(fy)) && !hy.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : yi(e.slice(2)), t];
}
let wc = 0;
const vy = /* @__PURE__ */ Promise.resolve(), gy = () => wc || (vy.then(() => wc = 0), wc = Date.now());
function my(e, t) {
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
      const o = a.slice(), c = [i];
      for (let u = 0; u < o.length && !i._stopped; u++) {
        const h = o[u];
        h && En(
          h,
          t,
          5,
          c
        );
      }
    } else
      En(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = gy(), n;
}
const Sf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, by = (e, t, n, i, a, r) => {
  const o = a === "svg";
  t === "class" ? ay(e, i, o) : t === "style" ? sy(e, n, i) : _l(t) ? wl(t) || dy(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yy(e, t, i, o)) ? (_f(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && yf(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (_y(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !st(i))) ? _f(e, Ht(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), yf(e, t, i, o));
};
function yy(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Sf(t) && Fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Sf(t) && st(n) ? !1 : t in e;
}
function _y(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ht(t);
  return Array.isArray(n) ? n.some((a) => Ht(a) === i) : Object.keys(n).some((a) => Ht(a) === i);
}
const Rs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (n) => ps(t, n) : t;
};
function wy(e) {
  e.target.composing = !0;
}
function Cf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ta = /* @__PURE__ */ Symbol("_assign"), rs = /* @__PURE__ */ Symbol("_initialValue");
function Sc(e, t, n) {
  return t && (e = e.trim()), n && (e = Tl(e)), e;
}
const ft = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[rs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[rs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ta] = Rs(a);
    const r = i || a.props && a.props.type === "number";
    Sa(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ta](Sc(e.value, n, r));
    }), (n || r) && Sa(e, "change", () => {
      e.value = Sc(e.value, n, r);
    }), t || (Sa(e, "compositionstart", wy), Sa(e, "compositionend", Cf), Sa(e, "change", Cf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[rs];
    delete e[rs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Ta](Sc(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, o) {
    if (e[Ta] = Rs(o), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? Tl(e.value) : e.value, u = t ?? "";
    if (c === u)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === u) || (e.value = u);
  }
}, Xt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, Sa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? Tl(Is(u)) : Is(u)
      ), r = e.multiple, o = r ? Na(e._modelValue) ? new Set(a) : a : a[0], c = e._pendingValue = [
        r,
        r ? Se(o) ? a.slice() : a : o
      ];
      try {
        e[Ta](o);
      } finally {
        Qt(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Ta] = Rs(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Tf(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Ta] = Rs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Sy(t, n[1], n[0])) && Tf(e, t);
  }
};
function Sy(e, t, n) {
  if (!n || Se(e)) return Wi(e, t);
  if (Na(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Tf(e, t) {
  const n = e.multiple, i = Se(t);
  if (!(n && !i && !Na(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], c = Is(o);
      if (n)
        if (i) {
          const u = typeof c;
          u === "string" || u === "number" ? o.selected = t.some((h) => String(h) === String(c)) : o.selected = om(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (Wi(Is(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Is(e) {
  return "_value" in e ? e._value : e.value;
}
const Cy = ["ctrl", "shift", "alt", "meta"], Ty = {
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
  exact: (e, t) => Cy.some((n) => e[`${n}Key`] && !t.includes(n))
}, xe = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const c = Ty[t[o]];
      if (c && c(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Ey = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, nt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = yi(a.key);
    if (t.some(
      (o) => o === r || Ey[o] === r
    ))
      return e(a);
  }));
}, ky = /* @__PURE__ */ yt({ patchProp: by }, Xb);
let Ef;
function Ay() {
  return Ef || (Ef = Rb(ky));
}
const xy = ((...e) => {
  const t = Ay().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Ny(i);
    if (!a) return;
    const r = t._component;
    !Fe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, Oy(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function Oy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ny(e) {
  return st(e) ? document.querySelector(e) : e;
}
function Ku(e, t, n) {
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
function kf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Ly(e) {
  if (Array.isArray(e)) return e;
}
function Ry(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, o, c = [], u = !0, h = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(u = (i = r.call(n)).done) && (c.push(i.value), c.length !== t); u = !0) ;
    } catch (f) {
      h = !0, a = f;
    } finally {
      try {
        if (!u && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (h) throw a;
      }
    }
    return c;
  }
}
function Iy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Py(e, t) {
  return Ly(e) || Ry(e, t) || $y(e, t) || Iy();
}
function $y(e, t) {
  if (e) {
    if (typeof e == "string") return kf(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? kf(e, t) : void 0;
  }
}
const Jp = Object.entries, Af = Object.setPrototypeOf, Fy = Object.isFrozen, Dy = Object.getPrototypeOf, My = Object.getOwnPropertyDescriptor;
let St = Object.freeze, Tt = Object.seal, Wa = Object.create, Qp = typeof Reflect < "u" && Reflect, lu = Qp.apply, cu = Qp.construct;
St || (St = function(t) {
  return t;
});
Tt || (Tt = function(t) {
  return t;
});
lu || (lu = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
cu || (cu = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ya = _t(Array.prototype.forEach), zy = _t(Array.prototype.lastIndexOf), xf = _t(Array.prototype.pop), Pr = _t(Array.prototype.push), Uy = _t(Array.prototype.splice), er = Array.isArray, Hr = _t(String.prototype.toLowerCase), Cc = _t(String.prototype.toString), Of = _t(String.prototype.match), $r = _t(String.prototype.replace), Nf = _t(String.prototype.indexOf), jy = _t(String.prototype.trim), By = _t(Number.prototype.toString), Hy = _t(Boolean.prototype.toString), Lf = typeof BigInt > "u" ? null : _t(BigInt.prototype.toString), Rf = typeof Symbol > "u" ? null : _t(Symbol.prototype.toString), rn = _t(Object.prototype.hasOwnProperty), Fr = _t(Object.prototype.toString), Mt = _t(RegExp.prototype.test), ga = Vy(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return lu(e, t, i);
  };
}
function Vy(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return cu(e, n);
  };
}
function Ge(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hr;
  if (Af && Af(e, null), !er(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Fy(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function Ky(e) {
  for (let t = 0; t < e.length; t++)
    rn(e, t) || (e[t] = null);
  return e;
}
function fn(e) {
  const t = Wa(null);
  for (const i of Jp(e)) {
    var n = Py(i, 2);
    const a = n[0], r = n[1];
    rn(e, a) && (er(r) ? t[a] = Ky(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = fn(r) : t[a] = r);
  }
  return t;
}
function Gy(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return By(e);
    case "boolean":
      return Hy(e);
    case "bigint":
      return Lf ? Lf(e) : "0";
    case "symbol":
      return Rf ? Rf(e) : "Symbol()";
    case "undefined":
      return Fr(e);
    case "function":
    case "object": {
      if (e === null)
        return Fr(e);
      const t = e, n = Nn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : Fr(i);
      }
      return Fr(e);
    }
    default:
      return Fr(e);
  }
}
function Nn(e, t) {
  for (; e !== null; ) {
    const i = My(e, t);
    if (i) {
      if (i.get)
        return _t(i.get);
      if (typeof i.value == "function")
        return _t(i.value);
    }
    e = Dy(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Wy(e) {
  try {
    return Mt(e, ""), !0;
  } catch {
    return !1;
  }
}
const If = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Tc = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ec = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), qy = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), kc = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Yy = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Pf = St(["#text"]), $f = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ac = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ff = St(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), os = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Xy = Tt(/{{[\w\W]*|^[\w\W]*}}/g), Zy = Tt(/<%[\w\W]*|^[\w\W]*%>/g), Jy = Tt(/\${[\w\W]*/g), Qy = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), e_ = Tt(/^aria-[\-\w]+$/), Df = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), t_ = Tt(/^(?:\w+script|data):/i), n_ = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), i_ = Tt(/^html$/i), a_ = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), Mf = Tt(/<[/\w!]/g), zf = Tt(/<[/\w]/g), r_ = Tt(/<\/no(script|embed|frames)/i), o_ = Tt(/\/>/i), un = {
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
}, ev = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], s_ = St(Ge({}, ev)), l_ = (function() {
  const e = {};
  return ya(ev, (t) => {
    e[t] = Tt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), c_ = function() {
  return typeof window > "u" ? null : window;
}, u_ = function(t, n) {
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
}, Uf = function() {
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
}, Fi = function(t, n, i, a) {
  return rn(t, n) && er(t[n]) ? Ge(a.base ? fn(a.base) : {}, t[n], a.transform) : i;
}, xc = function(t, n, i) {
  const a = rn(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? fn(a) : i();
};
function tv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c_();
  const t = (ee) => tv(ee);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== un.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, c = e.Element, u = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, b = e.trustedTypes, C = c.prototype, k = Nn(C, "cloneNode"), N = Nn(C, "remove"), A = Nn(C, "nextSibling"), O = Nn(C, "childNodes"), F = Nn(C, "parentNode"), M = Nn(C, "shadowRoot"), z = Nn(C, "attributes"), T = o && o.prototype ? Nn(o.prototype, "nodeType") : null, re = o && o.prototype ? Nn(o.prototype, "nodeName") : null, ue = o && o.prototype ? Nn(o.prototype, "ownerDocument") : null, X = function(S) {
    return T ? T(S) : S.nodeType;
  }, fe = function(S) {
    return re ? re(S) : S.nodeName;
  };
  if (typeof r == "function") {
    const ee = n.createElement("template");
    ee.content && ee.content.ownerDocument && (n = ee.content.ownerDocument);
  }
  let Y, se = "", ge, J = !1, Q = 0;
  const $ = function() {
    if (Q > 0)
      throw ga('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(S) {
    $(), Q++;
    try {
      return Y.createHTML(S);
    } finally {
      Q--;
    }
  }, q = function(S) {
    $(), Q++;
    try {
      return Y.createScriptURL(S);
    } finally {
      Q--;
    }
  }, le = function() {
    return J || (ge = u_(b, a), J = !0), ge;
  }, ie = n, ve = ie.implementation, de = ie.createNodeIterator, be = ie.createDocumentFragment, _e = ie.getElementsByTagName, Ke = i.importNode;
  let Ne = Uf();
  t.isSupported = typeof Jp == "function" && typeof F == "function" && ve && ve.createHTMLDocument !== void 0;
  const lt = Xy, pt = Zy, it = Jy, ut = Qy, at = e_, Pt = t_, B = n_, _ = a_;
  let E = Df, x = null;
  const L = Ge({}, [...If, ...Tc, ...Ec, ...kc, ...Pf]);
  let R = null;
  const j = Ge({}, [...$f, ...Ac, ...Ff, ...os]);
  let G = Object.seal(Wa(null, {
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
  })), K = null, Z = null;
  const V = Object.seal(Wa(null, {
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
  let he = !0, oe = !0, pe = !1, ke = !0, Pe = !1, ze = !0, $e = !1, He = !1, rt = null, vt = null, Et = !1, $t = !1, kn = !1, et = !1, dt = !0, Fn = !1;
  const gn = "user-content-";
  let Qi = !0, wi = !1, Dn = {}, Xn = null;
  const rr = Ge({}, [
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
  let Zn = null;
  const Si = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ci = null;
  const Ti = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", Pa = "http://www.w3.org/2000/svg", on = "http://www.w3.org/1999/xhtml";
  let Ei = on, ea = !1, $a = null;
  const ta = Ge({}, [wt, Pa, on], Cc), ki = St(["mi", "mo", "mn", "ms", "mtext"]);
  let or = Ge({}, ki);
  const Io = St(["annotation-xml"]);
  let tn = Ge({}, Io);
  const Po = Ge({}, ["title", "style", "font", "a", "script"]);
  let na = null;
  const Hl = ["application/xhtml+xml", "text/html"], Vl = "text/html";
  let ht = null, Ai = null;
  const Kl = n.createElement("form"), $o = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, sr = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ai && Ai === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = fn(S), na = // eslint-disable-next-line unicorn/prefer-includes
    Hl.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Vl : S.PARSER_MEDIA_TYPE, ht = na === "application/xhtml+xml" ? Cc : Hr, x = Fi(S, "ALLOWED_TAGS", L, {
      transform: ht
    }), R = Fi(S, "ALLOWED_ATTR", j, {
      transform: ht
    }), $a = Fi(S, "ALLOWED_NAMESPACES", ta, {
      transform: Cc
    }), Ci = Fi(S, "ADD_URI_SAFE_ATTR", Ti, {
      transform: ht,
      base: Ti
    }), Zn = Fi(S, "ADD_DATA_URI_TAGS", Si, {
      transform: ht,
      base: Si
    }), Xn = Fi(S, "FORBID_CONTENTS", rr, {
      transform: ht
    }), K = Fi(S, "FORBID_TAGS", fn({}), {
      transform: ht
    }), Z = Fi(S, "FORBID_ATTR", fn({}), {
      transform: ht
    }), Dn = rn(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? fn(S.USE_PROFILES) : S.USE_PROFILES : !1, he = S.ALLOW_ARIA_ATTR !== !1, oe = S.ALLOW_DATA_ATTR !== !1, pe = S.ALLOW_UNKNOWN_PROTOCOLS || !1, ke = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Pe = S.SAFE_FOR_TEMPLATES || !1, ze = S.SAFE_FOR_XML !== !1, $e = S.WHOLE_DOCUMENT || !1, $t = S.RETURN_DOM || !1, kn = S.RETURN_DOM_FRAGMENT || !1, et = S.RETURN_TRUSTED_TYPE || !1, Et = S.FORCE_BODY || !1, dt = S.SANITIZE_DOM !== !1, Fn = S.SANITIZE_NAMED_PROPS || !1, Qi = S.KEEP_CONTENT !== !1, wi = S.IN_PLACE || !1, E = Wy(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Df, Ei = typeof S.NAMESPACE == "string" ? S.NAMESPACE : on, or = xc(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, ki)
      // Default built-in map
    ), tn = xc(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Io)
      // Default built-in map
    );
    const I = xc(S, "CUSTOM_ELEMENT_HANDLING", () => Wa(null));
    if (G = Wa(null), rn(I, "tagNameCheck") && $o(I.tagNameCheck) && (G.tagNameCheck = I.tagNameCheck), rn(I, "attributeNameCheck") && $o(I.attributeNameCheck) && (G.attributeNameCheck = I.attributeNameCheck), rn(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), Tt(G), Pe && (oe = !1), kn && ($t = !0), Dn && (x = Ge({}, Pf), R = Wa(null), Dn.html === !0 && (Ge(x, If), Ge(R, $f)), Dn.svg === !0 && (Ge(x, Tc), Ge(R, Ac), Ge(R, os)), Dn.svgFilters === !0 && (Ge(x, Ec), Ge(R, Ac), Ge(R, os)), Dn.mathMl === !0 && (Ge(x, kc), Ge(R, Ff), Ge(R, os))), V.tagCheck = null, V.attributeCheck = null, rn(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? V.tagCheck = S.ADD_TAGS : er(S.ADD_TAGS) && (x === L && (x = fn(x)), Ge(x, S.ADD_TAGS, ht))), rn(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? V.attributeCheck = S.ADD_ATTR : er(S.ADD_ATTR) && (R === j && (R = fn(R)), Ge(R, S.ADD_ATTR, ht))), rn(S, "ADD_FORBID_CONTENTS") && er(S.ADD_FORBID_CONTENTS) && (Xn === rr && (Xn = fn(Xn)), Ge(Xn, S.ADD_FORBID_CONTENTS, ht)), Qi && (x["#text"] = !0), $e && Ge(x, ["html", "head", "body"]), x.table && (Ge(x, ["tbody"]), delete K.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ga('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ga('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const W = Y;
      Y = S.TRUSTED_TYPES_POLICY;
      try {
        se = U("");
      } catch (ce) {
        throw Y = W, ce;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (Y = void 0, se = "") : (Y === void 0 && (Y = le()), Y && typeof se == "string" && (se = U("")));
    St && St(S), Ai = S;
  }, Fo = Ge({}, [...Tc, ...Ec, ...qy]), Do = Ge({}, [...kc, ...Yy]), Gl = function(S, I, W) {
    return I.namespaceURI === on ? S === "svg" : I.namespaceURI === wt ? S === "svg" && (W === "annotation-xml" || or[W]) : !!Fo[S];
  }, Wl = function(S, I, W) {
    return I.namespaceURI === on ? S === "math" : I.namespaceURI === Pa ? S === "math" && tn[W] : !!Do[S];
  }, ql = function(S, I, W) {
    return I.namespaceURI === Pa && !tn[W] || I.namespaceURI === wt && !or[W] ? !1 : !Do[S] && (Po[S] || !Fo[S]);
  }, Yl = function(S) {
    let I = F(S);
    (!I || !I.tagName) && (I = {
      namespaceURI: Ei,
      tagName: "template"
    });
    const W = Hr(S.tagName), ce = Hr(I.tagName);
    return $a[S.namespaceURI] ? S.namespaceURI === Pa ? Gl(W, I, ce) : S.namespaceURI === wt ? Wl(W, I, ce) : S.namespaceURI === on ? ql(W, I, ce) : !!(na === "application/xhtml+xml" && $a[S.namespaceURI]) : !1;
  }, Mn = function(S) {
    Pr(t.removed, {
      element: S
    });
    try {
      F(S).removeChild(S);
    } catch {
      if (N(S), !F(S))
        throw ga("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, lr = function(S, I, W) {
    try {
      S.removeAttributeNode(I);
    } catch {
      try {
        S.removeAttribute(W);
      } catch {
      }
    }
  }, xi = function(S) {
    Oi(S);
    const I = O(S);
    if (I) {
      const ce = [];
      ya(I, (me) => {
        Pr(ce, me);
      }), ya(ce, (me) => {
        try {
          N(me);
        } catch {
        }
      });
    }
    const W = z(S);
    if (W)
      for (let ce = W.length - 1; ce >= 0; --ce) {
        const me = W[ce], Le = me && me.name;
        typeof Le == "string" && lr(S, me, Le);
      }
  }, An = function(S, I, W) {
    if (!W)
      try {
        W = I.getAttributeNode(S);
      } catch {
        W = null;
      }
    Pr(t.removed, {
      attribute: W || null,
      from: I
    });
    try {
      W ? I.removeAttributeNode(W) : I.removeAttribute(S);
    } catch {
      try {
        I.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if ($t || kn)
        try {
          Mn(I);
        } catch {
        }
      else
        try {
          I.setAttribute(S, "");
        } catch {
        }
  }, cr = function(S) {
    const I = z(S);
    if (I)
      for (let W = I.length - 1; W >= 0; --W) {
        const ce = I[W], me = ce && ce.name;
        typeof me != "string" || R[ht(me)] || lr(S, ce, me);
      }
  }, Oi = function(S) {
    const I = [S];
    for (; I.length > 0; ) {
      const W = I.pop();
      X(W) === un.element && cr(W);
      const me = O(W);
      if (me)
        for (let Le = me.length - 1; Le >= 0; --Le)
          I.push(me[Le]);
    }
  }, ur = function(S, I) {
    return ze ? S === "patchsrc" ? !0 : S === "for" && I !== "label" && I !== "output" : !1;
  }, Xl = function(S) {
    if (!ze)
      return;
    const I = [S];
    for (; I.length > 0; ) {
      const W = I.pop(), ce = X(W);
      if (ce === un.processingInstruction || ce === un.comment && Mt(zf, W.data)) {
        try {
          N(W);
        } catch {
        }
        continue;
      }
      if (ce === un.element) {
        const Le = W, tt = ht(fe(W));
        try {
          Le.hasAttribute && Le.hasAttribute("patchsrc") && Le.removeAttribute("patchsrc"), Le.hasAttribute && Le.hasAttribute("for") && ur("for", tt) && Le.removeAttribute("for");
        } catch {
        }
      }
      const me = O(W);
      if (me)
        for (let Le = me.length - 1; Le >= 0; --Le)
          I.push(me[Le]);
    }
  }, dr = function(S) {
    let I = null, W = null;
    if (Et)
      S = "<remove></remove>" + S;
    else {
      const Le = Of(S, /^[\r\n\t ]+/);
      W = Le && Le[0];
    }
    na === "application/xhtml+xml" && Ei === on && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const ce = Y ? U(S) : S;
    if (Ei === on)
      try {
        I = new f().parseFromString(ce, na);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = ve.createDocument(Ei, "template", null);
      try {
        I.documentElement.innerHTML = ea ? se : ce;
      } catch {
      }
    }
    const me = I.body || I.documentElement;
    return S && W && me.insertBefore(n.createTextNode(W), me.childNodes[0] || null), Ei === on ? _e.call(I, $e ? "html" : "body")[0] : $e ? I.documentElement : me;
  }, fr = function(S) {
    const I = ue ? ue(S) : S.ownerDocument;
    return de.call(
      I || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Fa = function(S) {
    return S = $r(S, lt, " "), S = $r(S, pt, " "), S = $r(S, it, " "), S;
  }, ia = function(S) {
    var I;
    S.normalize();
    const W = ue ? ue(S) : S.ownerDocument, ce = de.call(
      W || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let me = ce.nextNode();
    for (; me; )
      me.data = Fa(me.data), me = ce.nextNode();
    const Le = (I = S.querySelectorAll) === null || I === void 0 ? void 0 : I.call(S, "template");
    Le && ya(Le, (tt) => {
      Jn(tt.content) && ia(tt.content);
    });
  }, Ni = function(S) {
    const I = re ? re(S) : null;
    return typeof I != "string" || ht(I) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    S.nodeType !== T(S) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Jn = function(S) {
    if (!T || typeof S != "object" || S === null)
      return !1;
    try {
      return T(S) === un.documentFragment;
    } catch {
      return !1;
    }
  }, Gt = function(S) {
    if (!T || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof T(S) == "number";
    } catch {
      return !1;
    }
  };
  function sn(ee, S, I) {
    ee.length !== 0 && ya(ee, (W) => {
      W.call(t, S, I, Ai);
    });
  }
  const Mo = function(S, I) {
    return !!(ze && S.hasChildNodes() && !Gt(S.firstElementChild) && Mt(Mf, S.textContent) && Mt(Mf, S.innerHTML) || ze && S.namespaceURI === on && s_[I] && (Gt(S.firstElementChild) || typeof S.textContent == "string" && Mt(l_[I], S.textContent)) || S.nodeType === un.processingInstruction || ze && S.nodeType === un.comment && Mt(zf, S.data));
  }, aa = function(S, I) {
    if (S instanceof RegExp)
      return Mt(S, I);
    if (S instanceof Function) {
      for (var W = arguments.length, ce = new Array(W > 2 ? W - 2 : 0), me = 2; me < W; me++)
        ce[me - 2] = arguments[me];
      return !!S(I, ...ce);
    }
    return !1;
  }, Zl = function(S, I, W) {
    if (!K[I] && jo(I) && aa(G.tagNameCheck, I))
      return !1;
    if (Qi && !Xn[I]) {
      const ce = F(S), me = O(S);
      if (me && ce) {
        const Le = me.length;
        for (let tt = Le - 1; tt >= 0; --tt) {
          const ct = S === W ? k(me[tt], !0) : me[tt];
          ce.insertBefore(ct, A(S));
        }
      }
    }
    return Mn(S), !0;
  }, zo = function(S, I, W, ce) {
    return S.length === 0 ? I : I === W || I === ce ? fn(I) : I;
  }, hr = function(S, I) {
    return S === I || F(S) !== null ? !1 : (wi && Oi(S), !0);
  }, pr = function(S, I) {
    if (sn(Ne.beforeSanitizeElements, S, null), hr(S, I))
      return !0;
    if (Ni(S))
      return Mn(S), !0;
    const W = ht(fe(S));
    if (x = zo(Ne.uponSanitizeElement, x, L, rt), sn(Ne.uponSanitizeElement, S, {
      tagName: W,
      allowedTags: x
    }), hr(S, I))
      return !0;
    if (Mo(S, W))
      return Mn(S), !0;
    if (K[W] || !(V.tagCheck instanceof Function && V.tagCheck(W)) && !x[W]) {
      const me = Zl(S, W, I);
      return me === !1 && sn(Ne.afterSanitizeElements, S, null), me;
    }
    if (X(S) === un.element && !Yl(S) || (W === "noscript" || W === "noembed" || W === "noframes") && Mt(r_, S.innerHTML))
      return Mn(S), !0;
    if (Pe && S.nodeType === un.text) {
      const me = Fa(S.textContent);
      S.textContent !== me && (Pr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = me);
    }
    return sn(Ne.afterSanitizeElements, S, null), !1;
  }, vr = function(S, I, W) {
    if (Z[I] || ur(I, S) || dt && (I === "id" || I === "name") && (W in n || W in Kl))
      return !1;
    const ce = R[I] || V.attributeCheck instanceof Function && V.attributeCheck(I, S);
    return oe && Mt(ut, I) || he && Mt(at, I) ? !0 : ce ? Ci[I] || Mt(E, $r(W, B, "")) || (I === "src" || I === "xlink:href" || I === "href") && S !== "script" && Nf(W, "data:") === 0 && Zn[S] || pe && !Mt(Pt, $r(W, B, "")) ? !0 : !W : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      jo(S) && aa(G.tagNameCheck, S) && aa(G.attributeNameCheck, I, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      I === "is" && G.allowCustomizedBuiltInElements && aa(G.tagNameCheck, W)
    );
  }, Uo = Ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), jo = function(S) {
    return !Uo[Hr(S)] && Mt(_, S);
  }, Jl = function(S, I, W, ce) {
    if (Y && typeof b == "object" && typeof b.getAttributeType == "function" && !W)
      switch (b.getAttributeType(S, I)) {
        case "TrustedHTML":
          return U(ce);
        case "TrustedScriptURL":
          return q(ce);
      }
    return ce;
  }, Bo = function(S, I, W, ce) {
    try {
      W ? S.setAttributeNS(W, I, ce) : S.setAttribute(I, ce), Ni(S) ? Mn(S) : xf(t.removed);
    } catch {
      An(I, S);
    }
  }, Wt = function(S) {
    sn(Ne.beforeSanitizeAttributes, S, null);
    const I = S.attributes;
    if (!I || Ni(S))
      return;
    R = zo(Ne.uponSanitizeAttribute, R, j, vt);
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let ce = I.length;
    const me = ht(S.nodeName);
    for (; ce--; ) {
      const Le = I[ce], tt = Le.name, ct = Le.namespaceURI, Ft = Le.value, kt = ht(tt), mr = Ft;
      let mt = tt === "value" ? mr : jy(mr);
      if (W.attrName = kt, W.attrValue = mt, W.keepAttr = !0, W.forceKeepAttr = void 0, sn(Ne.uponSanitizeAttribute, S, W), mt = W.attrValue, Fn && (kt === "id" || kt === "name") && Nf(mt, gn) !== 0 && (An(tt, S, Le), mt = gn + mt), ze && Mt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, mt)) {
        An(tt, S, Le);
        continue;
      }
      if (kt === "attributename" && Of(mt, "href")) {
        An(tt, S, Le);
        continue;
      }
      if (!W.forceKeepAttr) {
        if (!W.keepAttr) {
          An(tt, S, Le);
          continue;
        }
        if (!ke && Mt(o_, mt)) {
          An(tt, S, Le);
          continue;
        }
        if (Pe && (mt = Fa(mt)), !vr(me, kt, mt)) {
          An(tt, S, Le);
          continue;
        }
        mt = Jl(me, kt, ct, mt), mt !== mr && Bo(S, tt, ct, mt);
      }
    }
    sn(Ne.afterSanitizeAttributes, S, null);
  }, Da = function(S) {
    let I = null;
    const W = fr(S);
    for (sn(Ne.beforeSanitizeShadowDOM, S, null); I = W.nextNode(); )
      if (sn(Ne.uponSanitizeShadowNode, I, null), pr(I, S), Wt(I), Jn(I.content) && Da(I.content), X(I) === un.element) {
        const ce = M(I);
        Jn(ce) && (gr(ce), Da(ce));
      }
    sn(Ne.afterSanitizeShadowDOM, S, null);
  }, gr = function(S) {
    const I = [{
      node: S,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const W = I.pop();
      if (W.shadow) {
        Da(W.shadow);
        continue;
      }
      const ce = W.node, Le = X(ce) === un.element, tt = O(ce);
      if (tt)
        for (let ct = tt.length - 1; ct >= 0; --ct)
          I.push({
            node: tt[ct],
            shadow: null
          });
      if (Le) {
        const ct = re ? re(ce) : null;
        if (typeof ct == "string" && ht(ct) === "template") {
          const Ft = ce.content;
          Jn(Ft) && I.push({
            node: Ft,
            shadow: null
          });
        }
      }
      if (Le) {
        const ct = M(ce);
        Jn(ct) && I.push({
          node: null,
          shadow: ct
        }, {
          node: ct,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ee) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, W = null, ce = null, me = null;
    if (ea = !ee, ea && (ee = "<!-->"), typeof ee != "string" && !Gt(ee) && (ee = Gy(ee), typeof ee != "string"))
      throw ga("dirty is not a string, aborting");
    if (!t.isSupported)
      return ee;
    He ? (x = rt, R = vt) : sr(S), (Ne.uponSanitizeElement.length > 0 || Ne.uponSanitizeAttribute.length > 0) && (x = fn(x)), Ne.uponSanitizeAttribute.length > 0 && (R = fn(R)), t.removed = [];
    const Le = wi && typeof ee != "string" && Gt(ee);
    if (Le) {
      Xl(ee);
      const Ft = fe(ee);
      if (typeof Ft == "string") {
        const kt = ht(Ft);
        if (!x[kt] || K[kt])
          throw xi(ee), ga("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ni(ee))
        throw xi(ee), ga("root node is clobbered and cannot be sanitized in-place");
      try {
        gr(ee);
      } catch (kt) {
        throw xi(ee), kt;
      }
    } else if (Gt(ee))
      I = dr("<!---->"), W = I.ownerDocument.importNode(ee, !0), W.nodeType === un.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? I = W : I.appendChild(W), gr(W);
    else {
      if (!$t && !Pe && !$e && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return Y && et ? U(ee) : ee;
      if (I = dr(ee), !I)
        return $t ? null : et ? se : "";
    }
    I && Et && Mn(I.firstChild);
    const tt = Le ? ee : I;
    try {
      const Ft = fr(tt);
      for (; ce = Ft.nextNode(); )
        pr(ce, tt), Wt(ce), Jn(ce.content) && Da(ce.content);
    } catch (Ft) {
      throw Le && (xi(ee), ya(t.removed, (kt) => {
        kt.element && Oi(kt.element);
      })), Ft;
    }
    if (Le)
      return ya(t.removed, (Ft) => {
        Ft.element && Oi(Ft.element);
      }), Pe && ia(ee), ee;
    if ($t) {
      if (Pe && ia(I), kn)
        for (me = be.call(I.ownerDocument); I.firstChild; )
          me.appendChild(I.firstChild);
      else
        me = I;
      return (R.shadowroot || R.shadowrootmode) && (me = Ke.call(i, me, !0)), me;
    }
    let ct = $e ? I.outerHTML : I.innerHTML;
    return $e && x["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Mt(i_, I.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + ct), Pe && (ct = Fa(ct)), Y && et ? U(ct) : ct;
  }, t.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    sr(ee), He = !0, rt = x, vt = R;
  }, t.clearConfig = function() {
    Ai = null, He = !1, rt = null, vt = null, Y = ge, se = "";
  }, t.isValidAttribute = function(ee, S, I) {
    Ai || sr({});
    const W = ht(ee), ce = ht(S);
    return vr(W, ce, I);
  }, t.addHook = function(ee, S) {
    typeof S == "function" && rn(Ne, ee) && Pr(Ne[ee], S);
  }, t.removeHook = function(ee, S) {
    if (rn(Ne, ee)) {
      if (S !== void 0) {
        const I = zy(Ne[ee], S);
        return I === -1 ? void 0 : Uy(Ne[ee], I, 1)[0];
      }
      return xf(Ne[ee]);
    }
  }, t.removeHooks = function(ee) {
    rn(Ne, ee) && (Ne[ee] = []);
  }, t.removeAllHooks = function() {
    Ne = Uf();
  }, t;
}
var nv = tv();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oc, jf;
function d_() {
  if (jf) return Oc;
  jf = 1;
  var e = /["'&<>]/;
  Oc = t;
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
  return Oc;
}
var f_ = d_();
const Ps = /* @__PURE__ */ Gu(f_);
function h_() {
  return globalThis._nc_l10n_locale;
}
function p_() {
  return h_().replaceAll(/_/g, "-");
}
function Fl() {
  return globalThis._nc_l10n_language;
}
function v_(e) {
  const t = Fl();
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
function iv(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function m(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, o = typeof i == "number" ? i : typeof n == "number" ? n : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, u = (A) => A, h = (c.sanitize ? nv.sanitize : u) || u, f = c.escape ? Ps : u, b = (A) => typeof A == "string" || typeof A == "number", C = (A, O, F) => A.replace(/%n/g, "" + F).replace(/{([^{}]*)}/g, (M, z) => {
    if (O === void 0 || !(z in O))
      return f(M);
    const T = O[z];
    return b(T) ? f(`${T}`) : typeof T == "object" && b(T.value) ? (T.escape !== !1 ? Ps : u)(`${T.value}`) : f(M);
  });
  let N = (a?.bundle ?? iv(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, h(typeof r == "object" || o !== void 0 ? C(
    N,
    r,
    o
  ) : N);
}
function dn(e, t, n, i, a, r) {
  const o = "_" + t + "_::_" + n + "_", c = r?.bundle ?? iv(e), u = c.translations[o];
  if (typeof u < "u") {
    const h = u;
    if (Array.isArray(h)) {
      const f = c.pluralFunction(i);
      return m(e, h[f], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function g_(e, t = Fl()) {
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
class $s {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? $s.GLOBAL_SCOPE_PERSISTENT : $s.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class m_ {
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
    return new $s(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function av(e) {
  return new m_(e);
}
function b_() {
  try {
    return Ku("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Nc, Bf;
function rv() {
  if (Bf) return Nc;
  Bf = 1;
  var e = {};
  return Nc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Nc;
}
var Lc, Hf;
function ov() {
  if (Hf) return Lc;
  Hf = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Lc = {
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
  }, Lc;
}
var ss = { exports: {} }, Vf;
function y_() {
  return Vf || (Vf = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = ov(), r = rv();
    t = e.exports = {};
    const o = t.re = [], c = t.safeRe = [], u = t.src = [], h = t.safeSrc = [], f = t.t = {};
    let b = 0;
    const C = "[a-zA-Z0-9-]", k = [
      ["\\s", 1],
      ["\\d", a],
      [C, i]
    ], N = (O) => {
      for (const [F, M] of k)
        O = O.split(`${F}*`).join(`${F}{0,${M}}`).split(`${F}+`).join(`${F}{1,${M}}`);
      return O;
    }, A = (O, F, M) => {
      const z = N(F), T = b++;
      r(O, T, F), f[O] = T, u[T] = F, h[T] = z, o[T] = new RegExp(F, M ? "g" : void 0), c[T] = new RegExp(z, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${C}*`), A("MAINVERSION", `(${u[f.NUMERICIDENTIFIER]})\\.(${u[f.NUMERICIDENTIFIER]})\\.(${u[f.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${u[f.NUMERICIDENTIFIERLOOSE]})\\.(${u[f.NUMERICIDENTIFIERLOOSE]})\\.(${u[f.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${u[f.NONNUMERICIDENTIFIER]}|${u[f.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${u[f.NONNUMERICIDENTIFIER]}|${u[f.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${u[f.PRERELEASEIDENTIFIER]}(?:\\.${u[f.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${u[f.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[f.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${C}+`), A("BUILD", `(?:\\+(${u[f.BUILDIDENTIFIER]}(?:\\.${u[f.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${u[f.MAINVERSION]}${u[f.PRERELEASE]}?${u[f.BUILD]}?`), A("FULL", `^${u[f.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${u[f.MAINVERSIONLOOSE]}${u[f.PRERELEASELOOSE]}?${u[f.BUILD]}?`), A("LOOSE", `^${u[f.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${u[f.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${u[f.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${u[f.XRANGEIDENTIFIER]})(?:\\.(${u[f.XRANGEIDENTIFIER]})(?:\\.(${u[f.XRANGEIDENTIFIER]})(?:${u[f.PRERELEASE]})?${u[f.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${u[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[f.XRANGEIDENTIFIERLOOSE]})(?:${u[f.PRERELEASELOOSE]})?${u[f.BUILD]}?)?)?`), A("XRANGE", `^${u[f.GTLT]}\\s*${u[f.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${u[f.GTLT]}\\s*${u[f.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${u[f.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", u[f.COERCEPLAIN] + `(?:${u[f.PRERELEASE]})?(?:${u[f.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", u[f.COERCE], !0), A("COERCERTLFULL", u[f.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${u[f.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${u[f.LONETILDE]}${u[f.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${u[f.LONETILDE]}${u[f.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${u[f.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${u[f.LONECARET]}${u[f.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${u[f.LONECARET]}${u[f.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${u[f.GTLT]}\\s*(${u[f.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${u[f.GTLT]}\\s*(${u[f.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${u[f.GTLT]}\\s*(${u[f.LOOSEPLAIN]}|${u[f.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${u[f.XRANGEPLAIN]})\\s+-\\s+(${u[f.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${u[f.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[f.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(ss, ss.exports)), ss.exports;
}
var Rc, Kf;
function __() {
  if (Kf) return Rc;
  Kf = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Rc = (i) => i ? typeof i != "object" ? e : i : t, Rc;
}
var Ic, Gf;
function w_() {
  if (Gf) return Ic;
  Gf = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), o = e.test(a);
    return r && o && (i = +i, a = +a), i === a ? 0 : r && !o ? -1 : o && !r ? 1 : i < a ? -1 : 1;
  };
  return Ic = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Ic;
}
var Pc, Wf;
function sv() {
  if (Wf) return Pc;
  Wf = 1;
  const e = rv(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = ov(), { safeRe: i, t: a } = y_(), r = __(), { compareIdentifiers: o } = w_(), c = (h, f) => {
    const b = f.split(".");
    if (b.length > h.length)
      return !1;
    for (let C = 0; C < b.length; C++)
      if (o(h[C], b[C]) !== 0)
        return !1;
    return !0;
  };
  class u {
    constructor(f, b) {
      if (b = r(b), f instanceof u) {
        if (f.loose === !!b.loose && f.includePrerelease === !!b.includePrerelease)
          return f;
        f = f.version;
      } else if (typeof f != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);
      if (f.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", f, b), this.options = b, this.loose = !!b.loose, this.includePrerelease = !!b.includePrerelease;
      const C = f.trim().match(b.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!C)
        throw new TypeError(`Invalid Version: ${f}`);
      if (this.raw = f, this.major = +C[1], this.minor = +C[2], this.patch = +C[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      C[4] ? this.prerelease = C[4].split(".").map((k) => {
        if (/^[0-9]+$/.test(k)) {
          const N = +k;
          if (N >= 0 && N < n)
            return N;
        }
        return k;
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
      let b = 0;
      do {
        const C = this.prerelease[b], k = f.prerelease[b];
        if (e("prerelease compare", b, C, k), C === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === k)
          continue;
        return o(C, k);
      } while (++b);
    }
    compareBuild(f) {
      f instanceof u || (f = new u(f, this.options));
      let b = 0;
      do {
        const C = this.build[b], k = f.build[b];
        if (e("build compare", b, C, k), C === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === k)
          continue;
        return o(C, k);
      } while (++b);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(f, b, C) {
      if (f.startsWith("pre")) {
        if (!b && C === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (b) {
          const k = `-${b}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!k || k[1] !== b)
            throw new Error(`invalid identifier: ${b}`);
        }
      }
      switch (f) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", b, C);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", b, C);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", b, C), this.inc("pre", b, C);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", b, C), this.inc("pre", b, C);
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
          const k = Number(C) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [k];
          else {
            let N = this.prerelease.length;
            for (; --N >= 0; )
              typeof this.prerelease[N] == "number" && (this.prerelease[N]++, N = -2);
            if (N === -1) {
              if (b === this.prerelease.join(".") && C === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(k);
            }
          }
          if (b) {
            let N = [b, k];
            if (C === !1 && (N = [b]), c(this.prerelease, b)) {
              const A = this.prerelease[b.split(".").length];
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
  return Pc = u, Pc;
}
var $c, qf;
function S_() {
  if (qf) return $c;
  qf = 1;
  const e = sv();
  return $c = (n, i) => new e(n, i).major, $c;
}
var C_ = S_();
const Yf = /* @__PURE__ */ Gu(C_);
var Fc, Xf;
function T_() {
  if (Xf) return Fc;
  Xf = 1;
  const e = sv();
  return Fc = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Fc;
}
var Dc, Zf;
function E_() {
  if (Zf) return Dc;
  Zf = 1;
  const e = T_();
  return Dc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Dc;
}
var k_ = E_();
const A_ = /* @__PURE__ */ Gu(k_);
class x_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !A_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Yf(t.getVersion()) !== Yf(this.getVersion()) && console.warn(
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
class O_ {
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
let Dr = null;
function Wu() {
  return Dr !== null ? Dr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Dr = new x_(window._nc_event_bus) : Dr = window._nc_event_bus = new O_(), Dr);
}
function lv(e, t) {
  Wu().subscribe(e, t);
}
function N_(e, t) {
  Wu().unsubscribe(e, t);
}
function pi(e, ...t) {
  Wu().emit(e, ...t);
}
const cv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const L_ = Object.prototype.toString, R_ = (e) => L_.call(e) === "[object Object]", Ba = () => {
}, I_ = /* @__PURE__ */ P_();
function P_() {
  var e, t, n;
  return cv && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Mc(e) {
  return Array.isArray(e) ? e : [e];
}
function $_(e, t, n) {
  return qe(e, t, {
    ...n,
    immediate: !0
  });
}
const uv = cv ? window : void 0;
function Vr(e) {
  var t;
  const n = fi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function tr(...e) {
  const t = (i, a, r, o) => (i.addEventListener(a, r, o), () => i.removeEventListener(a, r, o)), n = H(() => {
    const i = Mc(fi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return $_(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Vr(r))) !== null && i !== void 0 ? i : [uv].filter((r) => r != null),
      Mc(fi(n.value ? e[1] : e[0])),
      Mc(g(n.value ? e[2] : e[1])),
      fi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, o], c, u) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const h = R_(o) ? { ...o } : o, f = i.flatMap((b) => a.flatMap((C) => r.map((k) => t(b, C, k, h))));
    u(() => {
      f.forEach((b) => b());
    });
  }, { flush: "post" });
}
let Jf = !1;
function Qf(e, t, n = {}) {
  const { window: i = uv, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: c = !1 } = n;
  if (!i) return c ? {
    stop: Ba,
    cancel: Ba,
    trigger: Ba
  } : Ba;
  if (I_ && !Jf) {
    Jf = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((F) => F.addEventListener("click", Ba, O)), i.document.documentElement.addEventListener("click", Ba, O);
  }
  let u = !0;
  const h = (O) => fi(a).some((F) => {
    if (typeof F == "string") return Array.from(i.document.querySelectorAll(F)).some((M) => M === O.target || O.composedPath().includes(M));
    {
      const M = Vr(F);
      return M && (O.target === M || O.composedPath().includes(M));
    }
  });
  function f(O) {
    const F = fi(O);
    return F && F.$.subTree.shapeFlag === 16;
  }
  function b(O, F) {
    const M = fi(O), z = M.$.subTree && M.$.subTree.children;
    return z == null || !Array.isArray(z) ? !1 : z.some((T) => T.el === F.target || F.composedPath().includes(T.el));
  }
  const C = (O) => {
    const F = Vr(e);
    if (O.target != null && !(!(F instanceof Element) && f(e) && b(e, O)) && !(!F || F === O.target || O.composedPath().includes(F))) {
      if ("detail" in O && O.detail === 0 && (u = !h(O)), !u) {
        u = !0;
        return;
      }
      t(O);
    }
  };
  let k = !1;
  const N = [
    tr(i, "click", (O) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), C(O));
    }, {
      passive: !0,
      capture: r
    }),
    tr(i, "pointerdown", (O) => {
      const F = Vr(e);
      u = !h(O) && !!(F && !O.composedPath().includes(F));
    }, { passive: !0 }),
    o && tr(i, "blur", (O) => {
      setTimeout(() => {
        const F = Vr(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !F?.contains(i.document.activeElement) && t(O);
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
function F_(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, c = /* @__PURE__ */ Ot({
    x: 0,
    y: 0
  }), u = /* @__PURE__ */ Ot({
    x: 0,
    y: 0
  }), h = H(() => c.x - u.x), f = H(() => c.y - u.y), { max: b, abs: C } = Math, k = H(() => b(C(h.value), C(f.value)) >= n), N = /* @__PURE__ */ np(!1), A = H(() => k.value ? C(h.value) > C(f.value) ? h.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), O = (X) => [X.touches[0].clientX, X.touches[0].clientY], F = (X, fe) => {
    c.x = X, c.y = fe;
  }, M = (X, fe) => {
    u.x = X, u.y = fe;
  }, z = {
    passive: o,
    capture: !o
  }, T = (X) => {
    N.value && a?.(X, A.value), N.value = !1;
  }, re = [
    tr(e, "touchstart", (X) => {
      if (X.touches.length !== 1) return;
      const [fe, Y] = O(X);
      F(fe, Y), M(fe, Y), r?.(X);
    }, z),
    tr(e, "touchmove", (X) => {
      if (X.touches.length !== 1) return;
      const [fe, Y] = O(X);
      M(fe, Y), z.capture && !z.passive && Math.abs(h.value) > Math.abs(f.value) && X.preventDefault(), !N.value && k.value && (N.value = !0), N.value && i?.(X);
    }, z),
    tr(e, ["touchend", "touchcancel"], T, z)
  ];
  return {
    isSwiping: N,
    direction: A,
    coordsStart: c,
    coordsEnd: u,
    lengthX: h,
    lengthY: f,
    stop: () => re.forEach((X) => X())
  };
}
var D_ = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = db(), r = ub(), o = /* @__PURE__ */ we([]), c = H(() => o.value.reduce((B, _) => (B[~~_.id] = _) && B, {})), u = H(() => o.value.length), h = /* @__PURE__ */ we(null), f = /* @__PURE__ */ we(!1), b = /* @__PURE__ */ we({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), C = /* @__PURE__ */ we({
      splitter: null,
      timeoutId: null
    }), k = H(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": b.value.dragging,
      "splitpanes--ready": f.value
    })), N = () => {
      document.addEventListener("mousemove", F, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", F, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", F, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", F, { passive: !1 }), document.removeEventListener("touchend", M));
    }, O = (B, _) => {
      let E = B.target.closest(".splitpanes__splitter");
      if (E) {
        let { left: x, top: L } = E.getBoundingClientRect(), { clientX: R, clientY: j } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
        b.value.cursorOffset = i.horizontal ? j - L : R - x;
      }
      N(), b.value.mouseDown = !0, b.value.activeSplitter = _, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, F = (B) => {
      b.value.mouseDown && (B.preventDefault(), b.value.dragging || (window.getSelection()?.removeAllRanges(), b.value.dragging = !0), requestAnimationFrame(() => {
        Y(X(B)), at("resize", { event: B }, !0);
      }));
    }, M = (B) => {
      b.value.dragging && (window.getSelection()?.removeAllRanges(), at("resized", { event: B }, !0)), b.value.mouseDown = !1, b.value.activeSplitter = null, setTimeout(() => {
        b.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, z = (B, _) => {
      "ontouchstart" in window && (B.preventDefault(), C.value.splitter === _ ? (clearTimeout(C.value.timeoutId), C.value.timeoutId = null, T(B, _), C.value.splitter = null) : (C.value.splitter = _, C.value.timeoutId = setTimeout(() => C.value.splitter = null, 500))), b.value.dragging || at("splitter-click", {
        event: B,
        index: _
      }, !0);
    }, T = (B, _) => {
      if (at("splitter-dblclick", {
        event: B,
        index: _
      }, !0), i.maximizePanes) {
        let E = 0;
        o.value = o.value.map((x, L) => (x.size = L === _ ? x.max : x.min, L !== _ && (E += x.min), x)), o.value[_].size -= E, at("pane-maximize", {
          event: B,
          index: _,
          pane: o.value[_]
        }), at("resized", {
          event: B,
          index: _
        }, !0);
      }
    }, re = (B, _) => {
      if (!i.keyboardStep) return;
      let E = i.horizontal ? B.key === "ArrowDown" : B.key === "ArrowRight", x = i.horizontal ? B.key === "ArrowUp" : B.key === "ArrowLeft";
      if (!E && !x) return;
      B.preventDefault(), b.value.activeSplitter = _;
      let L = (E ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), R = J(_) + o.value[_].size;
      se(Math.min(Math.max(R + L * i.keyboardStep, 0), 100)), at("resize", { event: B }, !0), at("resized", { event: B }, !0), b.value.activeSplitter = null;
    }, ue = (B, _) => {
      let E = c.value[_];
      E && at("pane-click", {
        event: B,
        index: E.index,
        pane: E
      });
    }, X = (B) => {
      let _ = h.value.getBoundingClientRect(), { clientX: E, clientY: x } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
      return {
        x: E - (i.horizontal ? 0 : b.value.cursorOffset) - _.left,
        y: x - (i.horizontal ? b.value.cursorOffset : 0) - _.top
      };
    }, fe = (B) => {
      B = B[i.horizontal ? "y" : "x"];
      let _ = h.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (B = _ - B), B * 100 / _;
    }, Y = (B) => {
      se(fe(B));
    }, se = (B) => {
      let _ = b.value.activeSplitter;
      if (_ === null || _ >= o.value.length - 1) return;
      let E = {
        prevPanesSize: J(_),
        nextPanesSize: Q(_),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, x = 0 + (i.pushOtherPanes ? 0 : E.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : E.nextPanesSize);
      B = Math.max(Math.min(B, L), x);
      let R = [_, _ + 1], j = o.value[R[0]] || null, G = o.value[R[1]] || null, K = j !== null && j.max < 100 && B >= j.max + E.prevPanesSize, Z = G !== null && G.max < 100 && B <= 100 - (G.max + Q(_ + 1));
      if (K || Z) {
        K ? (j.size = j.max, G.size = Math.min(Math.max(100 - j.max - E.prevPanesSize - E.nextPanesSize, G.min), G.max)) : (j.size = Math.min(Math.max(100 - G.max - E.prevPanesSize - Q(_ + 1), j.min), j.max), G.size = G.max);
        return;
      }
      if (i.pushOtherPanes) {
        let V = ge(E, B);
        if (!V) return;
        ({ sums: E, panesToResize: R } = V), j = o.value[R[0]] || null, G = o.value[R[1]] || null;
      }
      j !== null && (j.size = Math.min(Math.max(B - E.prevPanesSize - E.prevReachedMinPanes, j.min), j.max)), G !== null && (G.size = Math.min(Math.max(100 - B - E.nextPanesSize - E.nextReachedMinPanes, G.min), G.max));
    }, ge = (B, _) => {
      let E = b.value.activeSplitter, x = [E, E + 1];
      if (_ < B.prevPanesSize + o.value[x[0]].min) {
        if (x[0] = $(E).index, B.prevReachedMinPanes = 0, x[0] < E && o.value.forEach((L, R) => {
          R > x[0] && R <= E && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), x[0] === void 0) return B.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((L, R) => {
          R > 0 && R <= E && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), o.value[x[1]].size = 100 - B.prevReachedMinPanes - o.value[0].min - B.prevPanesSize - B.nextPanesSize, null;
        B.prevPanesSize = J(x[0]);
      }
      return _ > 100 - B.nextPanesSize - o.value[x[1]].min && (x[1] = U(E).index, B.nextReachedMinPanes = 0, x[1] > E + 1 && o.value.forEach((L, R) => {
        R > E && R < x[1] && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), B.nextPanesSize = x[1] === void 0 ? 0 : Q(x[1] - 1), x[1] === void 0) ? (B.nextReachedMinPanes = 0, o.value.forEach((L, R) => {
        R >= E + 1 && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), x[0] !== void 0 && (o.value[x[0]].size = 100 - B.prevPanesSize - Q(x[0] - 1)), null) : {
        sums: B,
        panesToResize: x
      };
    }, J = (B) => o.value.reduce((_, E, x) => _ + (x < B ? E.size : 0), 0), Q = (B) => o.value.reduce((_, E, x) => _ + (x > B + 1 ? E.size : 0), 0), $ = (B) => [...o.value].reverse().find((_) => _.index < B && _.size > _.min) || {}, U = (B) => o.value.find((_) => _.index > B + 1 && _.size > _.min) || {}, q = () => {
      let B = Array.from(h.value?.children || []);
      for (let _ of B) {
        let E = _.classList.contains("splitpanes__pane"), x = _.classList.contains("splitpanes__splitter");
        !E && !x && (_.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, le = (B, _, E = !1) => {
      let x = B - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), E || (L.onmousedown = (R) => O(R, x), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (R) => O(R, x)), L.onclick = (R) => z(R, x + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (R) => re(R, x))), L.ondblclick = (R) => T(R, x + 1), _.parentNode.insertBefore(L, _);
    }, ie = (B) => {
      B.onmousedown = null, B.onclick = null, B.ondblclick = null, B.onkeydown = null, B.remove();
    }, ve = () => {
      let B = Array.from(h.value?.children || []);
      for (let E of B) E.className.includes("splitpanes__splitter") && ie(E);
      let _ = 0;
      for (let E of B) E.className.includes("splitpanes__pane") && (!_ && i.firstSplitter ? le(_, E, !0) : _ && le(_, E), _++);
    }, de = ({ uid: B, ..._ }) => {
      let E = c.value[B];
      for (let [x, L] of Object.entries(_)) E[x] = L;
    }, be = !1, _e = (B) => {
      let _ = -1;
      Array.from(h.value?.children || []).some((E) => (E.className.includes("splitpanes__pane") && _++, E.isSameNode(B.el))), o.value.splice(_, 0, {
        ...B,
        index: _
      }), o.value.forEach((E, x) => E.index = x), f.value && !be && (be = !0, Qt(() => {
        ve(), Ne({ addedPane: o.value[_] }), at("pane-add", { pane: o.value[_] }), be = !1;
      }));
    }, Ke = (B) => {
      let _ = o.value.findIndex((x) => x.id === B);
      o.value[_].el = null;
      let E = o.value.splice(_, 1)[0];
      o.value.forEach((x, L) => x.index = L), Qt(() => {
        ve(), at("pane-remove", { pane: E }), Ne({ removedPane: {
          ...E
        } });
      });
    }, Ne = (B = {}) => {
      !B.addedPane && !B.removedPane ? pt() : o.value.some((_) => _.givenSize !== null || _.min || _.max < 100) ? it(B) : lt(), f.value && at("resized");
    }, lt = () => {
      let B = 100 / u.value, _ = 100, E = [], x = [];
      for (let L of o.value) L.size = Math.max(Math.min(B, L.max), L.min), _ -= L.size, L.size >= L.max && E.push(L.id), L.size <= L.min && x.push(L.id);
      Math.abs(_) > 0.1 && ut(_, E, x);
    }, pt = () => {
      let B = 100, _ = [], E = [], x = 0;
      for (let R of o.value) B -= R.size, R.givenSize !== null && x++, R.size >= R.max && _.push(R.id), R.size <= R.min && E.push(R.id);
      let L = 100;
      if (B > 0.1) {
        for (let R of o.value) R.givenSize === null && (R.size = Math.max(Math.min(B / (u.value - x), R.max), R.min)), L -= R.size;
        L > 0.1 && ut(L, _, E);
      }
    }, it = ({ addedPane: B, removedPane: _ } = {}) => {
      let E = o.value.reduce((K, Z) => K + (Z.givenSize === null ? 0 : Z.givenSize), 0), x = o.value.filter((K) => K.givenSize === null).length, L = x > 0 ? (100 - E) / x : 0, R = 0, j = [], G = [];
      for (let K of o.value) R -= K.size, K.size >= K.max && j.push(K.id), K.size <= K.min && G.push(K.id);
      if (!(Math.abs(R) < 0.1)) {
        R = 100;
        for (let K of o.value) K.givenSize === null && (K.size = Math.max(Math.min(L, K.max), K.min)), R -= K.size, K.size >= K.max && j.push(K.id), K.size <= K.min && G.push(K.id);
        Math.abs(R) > 0.1 && ut(R, j, G);
      }
    }, ut = (B, _, E) => {
      let x;
      x = B > 0 ? B / (u.value - _.length) : B / (u.value - E.length), o.value.forEach((L, R) => {
        if (B > 0 && !_.includes(L.id)) {
          let j = Math.max(Math.min(L.size + x, L.max), L.min), G = j - L.size;
          B -= G, L.size = j;
        } else if (!E.includes(L.id)) {
          let j = Math.max(Math.min(L.size + x, L.max), L.min), G = j - L.size;
          B -= G, L.size = j;
        }
      }), Math.abs(B) > 0.1 && f.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, at = (B, _ = void 0, E = !1) => {
      let x = _?.index ?? b.value.activeSplitter ?? null;
      n(B, {
        ..._,
        ...x !== null && { index: x },
        ...E && x !== null && {
          prevPane: o.value[x - +!!i.firstSplitter],
          nextPane: o.value[x + +!i.firstSplitter]
        },
        panes: o.value.map((L) => ({
          min: L.min,
          max: L.max,
          size: L.size
        }))
      });
    };
    qe(() => i.firstSplitter, () => ve()), qe(() => i.horizontal, (B) => Qt(() => {
      n("direction-changed", {
        horizontal: B,
        panes: o.value.map((_) => ({
          min: _.min,
          max: _.max,
          size: _.size
        }))
      });
    })), Xi(() => {
      q(), ve(), Ne(), at("ready"), f.value = !0;
    }), ar(() => f.value = !1);
    let Pt = () => {
      let { class: B, ..._ } = a;
      return an("div", {
        ref: h,
        class: [k.value, B],
        ..._
      }, r.default?.());
    };
    return _n("panes", o), _n("indexedPanes", c), _n("horizontal", H(() => i.horizontal)), _n("requestUpdate", de), _n("onPaneAdd", _e), _n("onPaneRemove", Ke), _n("onPaneClick", ue), (B, _) => (y(), je(zu(Pt)));
  }
}), M_ = {
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
    let t = e, n = jt("requestUpdate"), i = jt("onPaneAdd"), a = jt("horizontal"), r = jt("onPaneRemove"), o = jt("onPaneClick"), c = Ra()?.uid, u = jt("indexedPanes"), h = H(() => u.value[c]), f = /* @__PURE__ */ we(null), b = H(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, k.value), C.value);
    }), C = H(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), k = H(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), N = H(() => {
      let A = h.value?.size ?? (t.size === void 0 ? void 0 : b.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return qe(() => b.value, (A) => n({
      uid: c,
      size: A
    })), qe(() => C.value, (A) => n({
      uid: c,
      min: A
    })), qe(() => k.value, (A) => n({
      uid: c,
      max: A
    })), Xi(() => {
      i({
        id: c,
        el: f.value,
        min: C.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : b.value,
        size: b.value
      });
    }), ar(() => r(c)), (A, O) => (y(), w("div", {
      ref_key: "paneEl",
      ref: f,
      class: "splitpanes__pane",
      onClick: O[0] ||= (F) => g(o)(F, A._.uid),
      style: vn(N.value)
    }, [Me(A.$slots, "default")], 4));
  }
}, z_ = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", U_ = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", j_ = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", B_ = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const qu = 1024, dv = qu / 2, Fs = (e) => document.documentElement.clientWidth < e, fv = /* @__PURE__ */ we(Fs(qu)), hv = /* @__PURE__ */ we(Fs(dv));
window.addEventListener("resize", () => {
  fv.value = Fs(qu), hv.value = Fs(dv);
}, { passive: !0 });
function Ro() {
  return /* @__PURE__ */ uo(fv);
}
function H_() {
  return /* @__PURE__ */ uo(hv);
}
class V_ {
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
    return dn("", t, n, i, a, { bundle: this.bundle });
  }
}
class K_ {
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
    return this.setLanguage(Fl().replace("-", "_"));
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
    const t = new V_((n) => g_(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function G_() {
  return new K_();
}
const pv = G_().detectLanguage().build(), Ct = (...e) => pv.gettext(...e);
function Zi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Fl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        pv.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const W_ = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], q_ = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Y_ = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], X_ = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Z_ = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], J_ = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Q_ = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], e1 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], t1 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const n1 = /* @__PURE__ */ Symbol(""), [i1] = window.OC?.config?.version?.split(".") ?? [], vv = Number.parseInt(i1 ?? "35"), a1 = vv < 32, Ji = vv < 34, r1 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function o1() {
  return jt(r1, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, s1 = { class: "button-vue__wrapper" }, l1 = { class: "button-vue__icon" }, c1 = { class: "button-vue__text" }, u1 = /* @__PURE__ */ It({
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
    const n = e, i = t, { formBoxItemClass: a } = o1(), r = jt(n1, null) !== null, o = H(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), c = H(() => o.value === "button" && typeof n.pressed == "boolean"), u = H(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), h = H(() => u.value.startsWith("tertiary")), f = H(() => n.alignment.split("-")[0]), b = H(() => n.alignment.includes("-")), C = jt("NcPopover:trigger:attrs", () => ({}), !1), k = H(() => C()), N = H(() => {
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
          ...k.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function A(O) {
      c.value && i("update:pressed", !n.pressed), i("click", O);
    }
    return (O, F) => (y(), je(zu(o.value), Kt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${u.value}`]: u.value,
          "button-vue--tertiary": h.value,
          "button-vue--wide": e.wide,
          [`button-vue--${f.value}`]: f.value !== "center",
          "button-vue--reverse": b.value,
          "button-vue--legacy": g(a1),
          "button-vue--legacy34": g(Ji)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: A }), {
      default: Re(() => [
        l("span", s1, [
          l("span", l1, [
            Me(O.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", c1, [
            Me(O.$slots, "default", {}, () => [
              Te(v(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Wn = /* @__PURE__ */ Qe(u1, [["__scopeId", "data-v-47ce59a3"]]), d1 = ["aria-hidden", "aria-label"], f1 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, h1 = ["d"], p1 = ["innerHTML"], v1 = /* @__PURE__ */ It({
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
    ry((a) => ({
      fb515064: n.value
    }));
    const t = e, n = H(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = H(() => {
      if (!t.svg || t.path)
        return;
      const a = nv.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (y(), w("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ee(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (y(), w("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, p1)) : (y(), w("svg", f1, [
        l("path", { d: e.path }, null, 8, h1)
      ]))
    ], 10, d1));
  }
}), Dl = /* @__PURE__ */ Qe(v1, [["__scopeId", "data-v-aaedb1c3"]]);
m1();
function g1(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), pi("csrf-token-update", { token: e, _internal: !0 }));
}
function m1() {
  lv("csrf-token-update", ({ token: e, _internal: t }) => {
    t || g1(e);
  });
}
av("public").persist().build();
let Ha;
function eh(e, t) {
  return e ? e.getAttribute(t) : null;
}
function b1() {
  if (Ha !== void 0)
    return Ha;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = eh(e, "data-user");
  return t === null ? (Ha = null, Ha) : (Ha = {
    uid: t,
    displayName: eh(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ha);
}
var bt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(bt || {});
class y1 {
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
function _1(e) {
  return new y1(e);
}
class w1 {
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
    const t = b1();
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
function S1() {
  return new w1(_1);
}
const Oa = S1().detectUser().setApp("@nextcloud/vue").build();
function C1(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let gv = "missing-app-name";
try {
  gv = "library";
} catch {
  Oa.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const T1 = gv;
let E1 = "";
try {
  E1 = "0.1.0-alpha.171";
} catch {
  Oa.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function mv() {
  return jt("appName", T1);
}
const k1 = C1(() => {
  const e = Ku("core", "apps", []), t = mv();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), uu = v_();
Zi(Q_);
const A1 = /* @__PURE__ */ It({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = Ro();
    qe(t, n), Xi(() => {
      n(t.value);
    }), ar(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && pi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (y(), je(g(Wn), {
      "aria-label": g(Ct)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(Ct)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Re(() => [
        ye(g(Dl), {
          directional: "",
          path: g(z_)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), x1 = /* @__PURE__ */ Qe(A1, [["__scopeId", "data-v-a28923a1"]]), th = av("nextcloud").persist().build(), O1 = b_().theming?.name ?? "Nextcloud", N1 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: x1,
    Pane: M_,
    Splitpanes: D_
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
      appName: mv(),
      localizedAppName: k1(),
      isMobile: Ro(),
      isRtl: uu
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
        return Oa.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(O1), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = F_(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? pi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && pi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      th.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), Oa.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(th.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return Oa.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, L1 = {
  key: 0,
  class: "hidden-visually"
}, R1 = { class: "app-content-wrapper__list" }, I1 = {
  key: 1,
  class: "app-content-wrapper"
};
function P1(e, t, n, i, a, r) {
  const o = Be("NcAppContentDetailsToggle"), c = Be("Pane"), u = Be("Splitpanes");
  return y(), w("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (y(), w("h1", L1, v(n.pageHeading), 1)) : D("", !0),
    e.$slots.list ? (y(), w(ae, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (y(), w("div", {
        key: 0,
        class: Ee(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (y(), je(o, {
          key: 0,
          onClick: xe(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : D("", !0),
        Ie(l("div", R1, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Qa, !n.showDetails]
        ]),
        n.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : D("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (y(), w("div", I1, [
        ye(u, {
          horizontal: n.layout === "horizontal-split",
          class: Ee(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Re(() => [
            ye(c, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Re(() => [
                Me(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            ye(c, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Re(() => [
                Me(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : D("", !0)
    ], 64)) : D("", !0),
    e.$slots.list ? D("", !0) : Me(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const $1 = /* @__PURE__ */ Qe(N1, [["render", P1], ["__scopeId", "data-v-51427d61"]]);
var bv = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Ds = /* @__PURE__ */ bv.join(","), yv = typeof Element > "u", La = yv ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ms = !yv && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, zs = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", o = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : zs(t.parentNode));
  return o;
}, F1 = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, _v = function(t, n, i) {
  if (zs(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Ds));
  return n && La.call(t, Ds) && a.unshift(t), a = a.filter(i), a;
}, Us = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!zs(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), u = c.length ? c : o.children, h = Us(u, !0, i);
        i.flatten ? a.push.apply(a, h) : a.push({
          scopeParent: o,
          candidates: h
        });
      } else {
        var f = La.call(o, Ds);
        f && i.filter(o) && (n || !t.includes(o)) && a.push(o);
        var b = o.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(o), C = !zs(b, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (b && C) {
          var k = Us(b === !0 ? o.children : b.children, !0, i);
          i.flatten ? a.push.apply(a, k) : a.push({
            scopeParent: o,
            candidates: k
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, wv = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Ca = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || F1(t)) && !wv(t) ? 0 : t.tabIndex;
}, D1 = function(t, n) {
  var i = Ca(t);
  return i < 0 && n && !wv(t) ? 0 : i;
}, M1 = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Sv = function(t) {
  return t.tagName === "INPUT";
}, z1 = function(t) {
  return Sv(t) && t.type === "hidden";
}, U1 = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, j1 = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, B1 = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Ms(t), i = function(c) {
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
  var r = j1(a, t.form);
  return !r || r === t;
}, H1 = function(t) {
  return Sv(t) && t.type === "radio";
}, V1 = function(t) {
  return H1(t) && !B1(t);
}, K1 = function(t) {
  var n, i = t && Ms(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var o, c, u;
    for (r = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !r && a; ) {
      var h, f, b;
      i = Ms(a), a = (h = i) === null || h === void 0 ? void 0 : h.host, r = !!((f = a) !== null && f !== void 0 && (b = f.ownerDocument) !== null && b !== void 0 && b.contains(a));
    }
  }
  return r;
}, nh = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, G1 = function(t, n) {
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
  var u = La.call(t, "details>summary:first-of-type"), h = u ? t.parentElement : t;
  if (La.call(h, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var f = t; t; ) {
        var b = t.parentElement, C = Ms(t);
        if (b && !b.shadowRoot && a(b) === !0)
          return nh(t);
        t.assignedSlot ? t = t.assignedSlot : !b && C !== t.ownerDocument ? t = C.host : t = b;
      }
      t = f;
    }
    if (K1(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return nh(t);
  return !1;
}, W1 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return La.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, js = function(t, n) {
  return !(n.disabled || z1(n) || G1(n, t) || // For a details element with a summary, the summary element gets the focus
  U1(n) || W1(n));
}, du = function(t, n) {
  return !(V1(n) || Ca(n) < 0 || !js(t, n));
}, q1 = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Cv = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, c = o ? a.scopeParent : a, u = D1(c, o), h = o ? Cv(a.candidates) : c;
    u === 0 ? o ? n.push.apply(n, h) : n.push(c) : i.push({
      documentOrder: r,
      tabIndex: u,
      item: a,
      isScope: o,
      content: h
    });
  }), i.sort(M1).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, Y1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Us([t], n.includeContainer, {
    filter: du.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: q1
  }) : i = _v(t, n.includeContainer, du.bind(null, n)), Cv(i);
}, X1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Us([t], n.includeContainer, {
    filter: js.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = _v(t, n.includeContainer, js.bind(null, n)), i;
}, Va = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return La.call(t, Ds) === !1 ? !1 : du(n, t);
}, Z1 = /* @__PURE__ */ bv.concat("iframe:not([inert]):not([inert] *)").join(","), zc = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return La.call(t, Z1) === !1 ? !1 : js(n, t);
};
function fu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function J1(e) {
  if (Array.isArray(e)) return fu(e);
}
function ih(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Tv(e)) || t) {
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
function Q1(e, t, n) {
  return (t = a0(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function e0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function t0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ah(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function rh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ah(Object(n), !0).forEach(function(i) {
      Q1(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ah(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function n0(e) {
  return J1(e) || e0(e) || Tv(e) || t0();
}
function i0(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function a0(e) {
  var t = i0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Tv(e, t) {
  if (e) {
    if (typeof e == "string") return fu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fu(e, t) : void 0;
  }
}
var ui = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = ui.getActiveTrap(t);
    n !== i && ui.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), ui.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = ui.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = ui.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, r0 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, o0 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Zr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, s0 = function(t) {
  return Zr(t) && !t.shiftKey;
}, l0 = function(t) {
  return Zr(t) && t.shiftKey;
}, oh = function(t) {
  return setTimeout(t, 0);
}, Mr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, ls = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, c0 = [], Yu = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || c0, r = rh({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: s0,
    isKeyBackward: l0
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
  }, c, u = function($, U, q) {
    return $ && $[U] !== void 0 ? $[U] : r[q || U];
  }, h = function($, U) {
    var q = typeof U?.composedPath == "function" ? U.composedPath() : void 0;
    return o.containerGroups.findIndex(function(le) {
      var ie = le.container, ve = le.tabbableNodes;
      return ie.contains($) || q?.includes(ie) || ve.find(function(de) {
        return de === $;
      });
    });
  }, f = function($) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = U.hasFallback, le = q === void 0 ? !1 : q, ie = U.params, ve = ie === void 0 ? [] : ie, de = r[$];
    if (typeof de == "function" && (de = de.apply(void 0, n0(ve))), de === !0 && (de = void 0), !de) {
      if (de === void 0 || de === !1)
        return de;
      throw new Error("`".concat($, "` was specified but was not a node, or did not return a node"));
    }
    var be = de;
    if (typeof de == "string") {
      try {
        be = i.querySelector(de);
      } catch (_e) {
        throw new Error("`".concat($, '` appears to be an invalid selector; error="').concat(_e.message, '"'));
      }
      if (!be && !le)
        throw new Error("`".concat($, "` as selector refers to no known node"));
    }
    return be;
  }, b = function($) {
    var U = $.activeElement;
    return U ? U.shadowRoot && U.shadowRoot.activeElement !== null ? b(U.shadowRoot) : U : null;
  }, C = function() {
    var $ = f("initialFocus", {
      hasFallback: !0
    });
    if ($ === !1)
      return !1;
    if ($ === void 0 || $ && !zc($, r.tabbableOptions)) {
      var U = b(i);
      if (h(U) >= 0)
        $ = U;
      else {
        var q = o.tabbableGroups[0], le = q && q.firstTabbableNode;
        $ = le || f("fallbackFocus");
      }
    } else $ === null && ($ = f("fallbackFocus"));
    if (!$)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return $;
  }, k = function() {
    if (o.containerGroups = o.containers.map(function($) {
      var U = Y1($, r.tabbableOptions), q = X1($, r.tabbableOptions), le = U.length > 0 ? U[0] : void 0, ie = U.length > 0 ? U[U.length - 1] : void 0, ve = q.find(function(_e) {
        return Va(_e);
      }), de = q.slice().reverse().find(function(_e) {
        return Va(_e);
      }), be = !!U.find(function(_e) {
        return Ca(_e) > 0;
      });
      return {
        container: $,
        tabbableNodes: U,
        focusableNodes: q,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: be,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: le,
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
        firstDomTabbableNode: ve,
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
        nextTabbableNode: function(Ke) {
          var Ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, lt = U.indexOf(Ke);
          return lt < 0 ? Ne ? q.slice(q.indexOf(Ke) + 1).find(function(pt) {
            return Va(pt);
          }) : q.slice(0, q.indexOf(Ke)).reverse().find(function(pt) {
            return Va(pt);
          }) : U[lt + (Ne ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function($) {
      return $.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !f("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function($) {
      return $.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, N = function($) {
    if ($ !== !1 && $ !== b(document)) {
      if (!$ || !$.focus) {
        N(C());
        return;
      }
      $.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = $, r0($) && $.select();
    }
  }, A = function($) {
    var U = f("setReturnFocus", {
      params: [$]
    });
    return U || (U === !1 ? !1 : $);
  }, O = function($) {
    var U = $.target, q = $.event, le = $.isBackward, ie = le === void 0 ? !1 : le;
    U = U || ls(q), k();
    var ve = null;
    if (o.tabbableGroups.length > 0) {
      var de = h(U, q), be = de >= 0 ? o.containerGroups[de] : void 0;
      if (de < 0)
        ie ? ve = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : ve = o.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var _e = o.tabbableGroups.findIndex(function(ut) {
          var at = ut.firstTabbableNode;
          return U === at;
        });
        if (_e < 0 && (be.container === U || zc(U, r.tabbableOptions) && !Va(U, r.tabbableOptions) && !be.nextTabbableNode(U, !1)) && (_e = de), _e >= 0) {
          var Ke = _e === 0 ? o.tabbableGroups.length - 1 : _e - 1, Ne = o.tabbableGroups[Ke];
          ve = Ca(U) >= 0 ? Ne.lastTabbableNode : Ne.lastDomTabbableNode;
        } else Zr(q) || (ve = be.nextTabbableNode(U, !1));
      } else {
        var lt = o.tabbableGroups.findIndex(function(ut) {
          var at = ut.lastTabbableNode;
          return U === at;
        });
        if (lt < 0 && (be.container === U || zc(U, r.tabbableOptions) && !Va(U, r.tabbableOptions) && !be.nextTabbableNode(U)) && (lt = de), lt >= 0) {
          var pt = lt === o.tabbableGroups.length - 1 ? 0 : lt + 1, it = o.tabbableGroups[pt];
          ve = Ca(U) >= 0 ? it.firstTabbableNode : it.firstDomTabbableNode;
        } else Zr(q) || (ve = be.nextTabbableNode(U));
      }
    } else
      ve = f("fallbackFocus");
    return ve;
  }, F = function($) {
    var U = ls($);
    if (!(h(U, $) >= 0)) {
      if (Mr(r.clickOutsideDeactivates, $)) {
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
      Mr(r.allowOutsideClick, $) || $.preventDefault();
    }
  }, M = function($) {
    var U = ls($), q = h(U, $) >= 0;
    if (q || U instanceof Document)
      q && (o.mostRecentlyFocusedNode = U);
    else {
      $.stopImmediatePropagation();
      var le, ie = !0;
      if (o.mostRecentlyFocusedNode)
        if (Ca(o.mostRecentlyFocusedNode) > 0) {
          var ve = h(o.mostRecentlyFocusedNode), de = o.containerGroups[ve].tabbableNodes;
          if (de.length > 0) {
            var be = de.findIndex(function(_e) {
              return _e === o.mostRecentlyFocusedNode;
            });
            be >= 0 && (r.isKeyForward(o.recentNavEvent) ? be + 1 < de.length && (le = de[be + 1], ie = !1) : be - 1 >= 0 && (le = de[be - 1], ie = !1));
          }
        } else
          o.containerGroups.some(function(_e) {
            return _e.tabbableNodes.some(function(Ke) {
              return Ca(Ke) > 0;
            });
          }) || (ie = !1);
      else
        ie = !1;
      ie && (le = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), N(le || o.mostRecentlyFocusedNode || C());
    }
    o.recentNavEvent = void 0;
  }, z = function($) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = $;
    var q = O({
      event: $,
      isBackward: U
    });
    q && (Zr($) && $.preventDefault(), N(q));
  }, T = function($) {
    (r.isKeyForward($) || r.isKeyBackward($)) && z($, r.isKeyBackward($));
  }, re = function($) {
    o0($) && Mr(r.escapeDeactivates, $) !== !1 && ($.preventDefault(), c.deactivate());
  }, ue = function($) {
    var U = ls($);
    h(U, $) >= 0 || Mr(r.clickOutsideDeactivates, $) || Mr(r.allowOutsideClick, $) || ($.preventDefault(), $.stopImmediatePropagation());
  }, X = function() {
    if (o.active) {
      ui.activateTrap(a, c);
      var $;
      return r.delayInitialFocus ? $ = new Promise(function(U) {
        o.delayInitialFocusTimer = oh(function() {
          N(C()), U();
        });
      }) : N(C()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", ue, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", T, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", re), $;
    }
  }, fe = function($) {
    o.active && !o.paused && c._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var U = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set(), le = ih($), ie;
    try {
      for (le.s(); !(ie = le.n()).done; ) {
        var ve = ie.value;
        U.add(ve);
        for (var de = typeof ShadowRoot < "u" && ve.getRootNode() instanceof ShadowRoot, be = ve; be; ) {
          U.add(be);
          var _e = be.parentElement, Ke = [];
          _e ? Ke = _e.children : !_e && de && (Ke = be.getRootNode().children, _e = be.getRootNode().host, de = typeof ShadowRoot < "u" && _e.getRootNode() instanceof ShadowRoot);
          var Ne = ih(Ke), lt;
          try {
            for (Ne.s(); !(lt = Ne.n()).done; ) {
              var pt = lt.value;
              q.add(pt);
            }
          } catch (it) {
            Ne.e(it);
          } finally {
            Ne.f();
          }
          be = _e;
        }
      }
    } catch (it) {
      le.e(it);
    } finally {
      le.f();
    }
    U.forEach(function(it) {
      q.delete(it);
    }), o.adjacentElements = q;
  }, Y = function() {
    if (o.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", F, !0), i.removeEventListener("touchstart", F, !0), i.removeEventListener("click", ue, !0), i.removeEventListener("keydown", T, !0), i.removeEventListener("keydown", re), c;
  }, se = function($) {
    var U = o.mostRecentlyFocusedNode;
    if (U) {
      var q = $.some(function(ie) {
        var ve = Array.from(ie.removedNodes);
        return ve.some(function(de) {
          return de === U || typeof de.contains == "function" && de.contains(U);
        });
      });
      if (q && o.containers.some(function(ie) {
        return ie?.isConnected;
      })) {
        k();
        var le = C();
        N(le);
      }
    }
  }, ge = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, J = function() {
    ge && (ge.disconnect(), o.active && !o.paused && o.containers.map(function($) {
      ge.observe($, {
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
    activate: function($) {
      if (o.active)
        return this;
      var U = u($, "onActivate"), q = u($, "onPostActivate"), le = u($, "checkCanFocusTrap"), ie = ui.getActiveTrap(a), ve = !1;
      if (ie && !ie.paused) {
        var de;
        (de = ie._setSubtreeIsolation) === null || de === void 0 || de.call(ie, !1), ve = !0;
      }
      try {
        le || k(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = b(i), U?.({
          trap: c
        });
        var be = function() {
          le && k();
          var Ne = function() {
            c._setSubtreeIsolation(!0), J(), q?.({
              trap: c
            });
          }, lt = X();
          lt ? lt.then(Ne) : Ne();
        };
        if (le)
          return le(o.containers.concat()).then(be, be), this;
        be();
      } catch (Ke) {
        if (ie === ui.getActiveTrap(a) && ve) {
          var _e;
          (_e = ie._setSubtreeIsolation) === null || _e === void 0 || _e.call(ie, !0);
        }
        throw Ke;
      }
      return this;
    },
    deactivate: function($) {
      if (!o.active)
        return this;
      var U = rh({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, $);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || c._setSubtreeIsolation(!1), o.alreadySilent.clear(), Y(), o.active = !1, o.paused = !1, J(), ui.deactivateTrap(a, c);
      var q = u(U, "onDeactivate"), le = u(U, "onPostDeactivate"), ie = u(U, "checkCanReturnFocus"), ve = u(U, "delayReturnFocus"), de = u(U, "returnFocus", "returnFocusOnDeactivate");
      q?.({
        trap: c
      });
      var be = function() {
        de && N(A(o.nodeFocusedBeforeActivation)), le?.({
          trap: c
        });
      }, _e = function() {
        ve && de ? oh(be) : be();
      };
      return de && ie ? (ie(A(o.nodeFocusedBeforeActivation)).then(_e, _e), this) : (_e(), this);
    },
    pause: function($) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, $)) : this;
    },
    unpause: function($) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, $)) : this;
    },
    updateContainerElements: function($) {
      var U = [].concat($).filter(Boolean);
      return o.containers = U.map(function(q) {
        return typeof q == "string" ? i.querySelector(q) : q;
      }), r.isolateSubtrees && fe(o.containers), o.active && (k(), o.paused || c._setSubtreeIsolation(!0)), J(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function($, U) {
        if (o.paused === $)
          return this;
        if (o.paused = $, $) {
          var q = u(U, "onPause"), le = u(U, "onPostPause");
          q?.({
            trap: c
          }), Y(), c._setSubtreeIsolation(!1), J(), le?.({
            trap: c
          });
        } else {
          var ie = u(U, "onUnpause"), ve = u(U, "onPostUnpause");
          ie?.({
            trap: c
          });
          var de = function() {
            k();
            var _e = function() {
              c._setSubtreeIsolation(!0), J(), ve?.({
                trap: c
              });
            }, Ke = X();
            Ke ? Ke.then(_e) : _e();
          };
          de();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function($) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(U) {
          var q;
          $ ? r.isolateSubtrees === "aria-hidden" ? ((U.ariaHidden === "true" || ((q = U.getAttribute("aria-hidden")) === null || q === void 0 ? void 0 : q.toLowerCase()) === "true") && o.alreadySilent.add(U), U.setAttribute("aria-hidden", "true")) : ((U.inert || U.hasAttribute("inert")) && o.alreadySilent.add(U), U.setAttribute("inert", !0)) : o.alreadySilent.has(U) || (r.isolateSubtrees === "aria-hidden" ? U.removeAttribute("aria-hidden") : U.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
const Ev = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), u0 = /* @__PURE__ */ It({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Ev]: {
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
function d0(e, t, n, i, a, r) {
  return y(), w("ul", {
    ref: "list",
    class: Ee(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    l("div", {
      class: Ee(["app-navigation-list__highlight", {
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
const kv = /* @__PURE__ */ Qe(u0, [["render", d0], ["__scopeId", "data-v-3e73e246"]]);
function _o() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function f0() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [..._o()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === _o().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Av = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), xv = /* @__PURE__ */ Symbol.for("NcContent:selector");
Zi(X_);
const h0 = { class: "app-navigation-toggle-wrapper" }, p0 = /* @__PURE__ */ It({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = xp(e, "open"), n = H(() => t.value ? Ct("Close navigation") : Ct("Open navigation"));
    return (i, a) => (y(), w("div", h0, [
      ye(g(Wn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Re(() => [
          ye(Dl, {
            path: g(B_),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), v0 = /* @__PURE__ */ Qe(p0, [["__scopeId", "data-v-e8177cc7"]]), g0 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], m0 = { class: "app-navigation__search" }, b0 = /* @__PURE__ */ It({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = jt(
      Av,
      () => Wb(),
      !1
    ), a = Qm("appNavigationContainer"), r = Ro(), o = /* @__PURE__ */ we(!r.value), c = H(() => r.value && o.value);
    Vm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), qe(r, () => {
      o.value = !r.value;
    }), qe(c, () => {
      f();
    }), Xi(() => {
      i(!0), lv("toggle-navigation", h), pi("navigation-toggled", {
        open: o.value
      }), n = Yu(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), u(!1)), !1),
        fallbackFocus: a.value,
        trapStack: _o(),
        escapeDeactivates: !1
      }), f();
    }), Oo(() => {
      i(!1), N_("toggle-navigation", h), n.deactivate();
    });
    function u(C) {
      if (o.value === C) {
        pi("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = C === void 0 ? !o.value : C;
      const k = getComputedStyle(document.body), N = parseInt(k.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        pi("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * N);
    }
    function h({ open: C }) {
      return u(C);
    }
    function f() {
      c.value ? n.activate() : n.deactivate();
    }
    function b() {
      r.value && u(!1);
    }
    return (C, k) => (y(), w("div", {
      ref: "appNavigationContainer",
      class: Ee(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": g(Ji)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: nt(b, ["esc"])
      }, [
        l("div", m0, [
          Me(C.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !C.$slots.list }])
        }, [
          Me(C.$slots, "default", {}, void 0, !0)
        ], 2),
        C.$slots.list ? (y(), je(kv, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Re(() => [
            Me(C.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : D("", !0),
        Me(C.$slots, "footer", {}, void 0, !0)
      ], 40, g0),
      ye(v0, {
        open: o.value,
        "onUpdate:open": u
      }, null, 8, ["open"])
    ], 2));
  }
}), y0 = /* @__PURE__ */ Qe(b0, [["__scopeId", "data-v-37908cd4"]]), _0 = {
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
}, w0 = ["aria-hidden", "aria-label"], S0 = ["fill", "width", "height"], C0 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, T0 = { key: 0 };
function E0(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", C0, [
        n.title ? (y(), w("title", T0, v(n.title), 1)) : D("", !0)
      ])
    ], 8, S0))
  ], 16, w0);
}
const k0 = /* @__PURE__ */ Qe(_0, [["render", E0]]), A0 = {
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
}, x0 = ["aria-hidden", "aria-label"], O0 = ["fill", "width", "height"], N0 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, L0 = { key: 0 };
function R0(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", N0, [
        n.title ? (y(), w("title", L0, v(n.title), 1)) : D("", !0)
      ])
    ], 8, O0))
  ], 16, x0);
}
const I0 = /* @__PURE__ */ Qe(A0, [["render", R0]]), P0 = {
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
}, $0 = ["aria-hidden", "aria-label"], F0 = ["fill", "width", "height"], D0 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, M0 = { key: 0 };
function z0(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", D0, [
        n.title ? (y(), w("title", M0, v(n.title), 1)) : D("", !0)
      ])
    ], 8, F0))
  ], 16, $0);
}
const Ov = /* @__PURE__ */ Qe(P0, [["render", z0]]), U0 = {
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
}, j0 = ["aria-hidden", "aria-label"], B0 = ["fill", "width", "height"], H0 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, V0 = { key: 0 };
function K0(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", H0, [
        n.title ? (y(), w("title", V0, v(n.title), 1)) : D("", !0)
      ])
    ], 8, B0))
  ], 16, j0);
}
const Nv = /* @__PURE__ */ Qe(U0, [["render", K0]]);
Zi(q_);
const G0 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Ov,
    IconClose: Nv,
    NcButton: Wn
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
    return { isLegacy34: Ji };
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
}, W0 = ["placeholder"];
function q0(e, t, n, i, a, r) {
  const o = Be("IconArrowRight"), c = Be("NcButton"), u = Be("IconClose");
  return y(), w("div", {
    class: Ee(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = xe((...h) => r.confirm && r.confirm(...h), ["prevent"])),
      onKeydown: t[2] || (t[2] = nt(xe((...h) => r.cancel && r.cancel(...h), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = xe(() => {
      }, ["stop", "prevent"]))
    }, [
      Ie(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (h) => r.valueModel = h),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, W0), [
        [ft, r.valueModel]
      ]),
      ye(c, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: xe(r.confirm, ["stop", "prevent"])
      }, {
        icon: Re(() => [
          ye(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      ye(c, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: xe(r.cancel, ["stop", "prevent"])
      }, {
        icon: Re(() => [
          ye(u, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const Y0 = /* @__PURE__ */ Qe(G0, [["render", q0], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Ml() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Xu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Lv = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), X0 = {
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
}, Rv = {
  mixins: [X0],
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
      from: Lv
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
}, Z0 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Dl
  },
  mixins: [Rv],
  inject: {
    isInSemanticMenu: {
      from: Xu,
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
      mdiCheck: U_,
      mdiChevronRight: j_
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
}, J0 = ["role"], Q0 = ["aria-label", "disabled", "title", "type"], ew = { class: "action-button__longtext-wrapper" }, tw = {
  key: 0,
  class: "action-button__name"
}, nw = ["textContent"], iw = {
  key: 2,
  class: "action-button__text"
}, aw = ["textContent"], rw = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function ow(e, t, n, i, a, r) {
  const o = Be("NcIconSvgWrapper");
  return y(), w("li", {
    class: Ee(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", Kt({
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
          class: Ee([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: vn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", ew, [
        e.name ? (y(), w("strong", tw, v(e.name), 1)) : D("", !0),
        e.isLongText ? (y(), w("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: v(e.text)
        }, null, 8, nw)) : (y(), w("span", iw, v(e.text), 1)),
        n.description ? (y(), w("span", {
          key: 3,
          class: "action-button__description",
          textContent: v(n.description)
        }, null, 8, aw)) : D("", !0)
      ]),
      n.isMenu ? (y(), je(o, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (y(), je(o, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (y(), w("span", rw)) : D("", !0),
      D("", !0)
    ], 16, Q0)
  ], 10, J0);
}
const sw = /* @__PURE__ */ Qe(Z0, [["render", ow], ["__scopeId", "data-v-6c2daf4e"]]);
function lw(e, t = {}) {
  const n = f0();
  qe(e, () => {
    fi(t.disabled) || (fi(e) ? n.pause() : n.unpause());
  }), Oo(() => {
    n.unpause();
  });
}
const cw = ["top", "right", "bottom", "left"], sh = ["start", "end"], lh = /* @__PURE__ */ cw.reduce((e, t) => e.concat(t, t + "-" + sh[0], t + "-" + sh[1]), []), wo = Math.min, hu = Math.max, uw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Iv(e, t, n) {
  return hu(e, wo(t, n));
}
function Ia(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bi(e) {
  return e.split("-")[0];
}
function In(e) {
  return e.split("-")[1];
}
function Pv(e) {
  return e === "x" ? "y" : "x";
}
function Zu(e) {
  return e === "y" ? "height" : "width";
}
function di(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ju(e) {
  return Pv(di(e));
}
function $v(e, t, n) {
  n === void 0 && (n = !1);
  const i = In(e), a = Ju(e), r = Zu(a);
  let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Hs(o)), [o, Hs(o)];
}
function dw(e) {
  const t = Hs(e);
  return [Bs(e), t, Bs(t)];
}
function Bs(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const ch = ["left", "right"], uh = ["right", "left"], fw = ["top", "bottom"], hw = ["bottom", "top"];
function pw(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? uh : ch : t ? ch : uh;
    case "left":
    case "right":
      return t ? fw : hw;
    default:
      return [];
  }
}
function vw(e, t, n, i) {
  const a = In(e);
  let r = pw(bi(e), n === "start", i);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(Bs)))), r;
}
function Hs(e) {
  const t = bi(e);
  return uw[t] + e.slice(t.length);
}
function gw(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Fv(e) {
  return typeof e != "number" ? gw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Jr(e) {
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
function dh(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = di(t), o = Ju(t), c = Zu(o), u = bi(t), h = r === "y", f = i.x + i.width / 2 - a.width / 2, b = i.y + i.height / 2 - a.height / 2, C = i[c] / 2 - a[c] / 2;
  let k;
  switch (u) {
    case "top":
      k = {
        x: f,
        y: i.y - a.height
      };
      break;
    case "bottom":
      k = {
        x: f,
        y: i.y + i.height
      };
      break;
    case "right":
      k = {
        x: i.x + i.width,
        y: b
      };
      break;
    case "left":
      k = {
        x: i.x - a.width,
        y: b
      };
      break;
    default:
      k = {
        x: i.x,
        y: i.y
      };
  }
  const N = In(t);
  return N && (k[o] += C * (N === "end" ? 1 : -1) * (n && h ? -1 : 1)), k;
}
async function mw(e, t) {
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
    boundary: h = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: b = "floating",
    altBoundary: C = !1,
    padding: k = 0
  } = Ia(t, e), N = Fv(k), O = c[C ? b === "floating" ? "reference" : "floating" : b], F = Jr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: f,
    strategy: u
  })), M = b === "floating" ? {
    x: i,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, z = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), T = await (r.isElement == null ? void 0 : r.isElement(z)) && await (r.getScale == null ? void 0 : r.getScale(z)) || {
    x: 1,
    y: 1
  }, re = Jr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: M,
    offsetParent: z,
    strategy: u
  }) : M);
  return {
    top: (F.top - re.top + N.top) / T.y,
    bottom: (re.bottom - F.bottom + N.bottom) / T.y,
    left: (F.left - re.left + N.left) / T.x,
    right: (re.right - F.right + N.right) / T.x
  };
}
const bw = 50, yw = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = n, c = o.detectOverflow ? o : {
    ...o,
    detectOverflow: mw
  }, u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: f,
    y: b
  } = dh(h, i, u), C = i, k = 0;
  const N = {};
  for (let A = 0; A < r.length; A++) {
    const O = r[A];
    if (!O)
      continue;
    const {
      name: F,
      fn: M
    } = O, {
      x: z,
      y: T,
      data: re,
      reset: ue
    } = await M({
      x: f,
      y: b,
      initialPlacement: i,
      placement: C,
      strategy: a,
      middlewareData: N,
      rects: h,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = z ?? f, b = T ?? b, N[F] = {
      ...N[F],
      ...re
    }, ue && k < bw && (k++, typeof ue == "object" && (ue.placement && (C = ue.placement), ue.rects && (h = ue.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ue.rects), {
      x: f,
      y: b
    } = dh(h, C, u)), A = -1);
  }
  return {
    x: f,
    y: b,
    placement: C,
    strategy: a,
    middlewareData: N
  };
}, _w = (e) => ({
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
      element: h,
      padding: f = 0
    } = Ia(e, t) || {};
    if (h == null)
      return {};
    const b = Fv(f), C = {
      x: n,
      y: i
    }, k = Ju(a), N = Zu(k), A = await o.getDimensions(h), O = k === "y", F = O ? "top" : "left", M = O ? "bottom" : "right", z = O ? "clientHeight" : "clientWidth", T = r.reference[N] + r.reference[k] - C[k] - r.floating[N], re = C[k] - r.reference[k], ue = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(h));
    let X = ue ? ue[z] : 0;
    (!X || !await (o.isElement == null ? void 0 : o.isElement(ue))) && (X = c.floating[z] || r.floating[N]);
    const fe = T / 2 - re / 2, Y = X / 2 - A[N] / 2 - 1, se = wo(b[F], Y), ge = wo(b[M], Y), J = X - A[N] - ge, Q = X / 2 - A[N] / 2 + fe, $ = Iv(se, Q, J), U = !u.arrow && In(a) != null && Q !== $ && r.reference[N] / 2 - (Q < se ? se : ge) - A[N] / 2 < 0, q = U ? Q < se ? Q - se : Q - J : 0;
    return {
      [k]: C[k] + q,
      data: {
        [k]: $,
        centerOffset: Q - $ - q,
        ...U && {
          alignmentOffset: q
        }
      },
      reset: U
    };
  }
});
function ww(e, t, n) {
  return (e ? [...n.filter((a) => In(a) === e), ...n.filter((a) => In(a) !== e)] : n.filter((a) => bi(a) === a)).filter((a) => e ? In(a) === e || (t ? Bs(a) !== a : !1) : !0);
}
const Sw = function(e) {
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
        elements: h
      } = t, {
        crossAxis: f = !1,
        alignment: b,
        allowedPlacements: C = lh,
        autoAlignment: k = !0,
        ...N
      } = Ia(e, t), A = b !== void 0 || C === lh ? ww(b || null, k, C) : C, O = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, F = A[O];
      if (F == null)
        return {};
      if (c !== F)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await u.detectOverflow(t, N), z = $v(F, r, await (u.isRTL == null ? void 0 : u.isRTL(h.floating))), T = [M[bi(F)], M[z[0]], M[z[1]]], re = [...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: F,
        overflows: T
      }], ue = A[O + 1];
      if (ue)
        return {
          data: {
            index: O + 1,
            overflows: re
          },
          reset: {
            placement: ue
          }
        };
      const X = re.map((se) => {
        const ge = In(se.placement);
        return [se.placement, ge && f ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((J, Q) => J + Q, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, ge) => se[1] - ge[1]), Y = ((a = X.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        In(se[0]) ? 2 : 3
      ).every((ge) => ge <= 0))[0]) == null ? void 0 : a[0]) || X[0][0];
      return Y !== c ? {
        data: {
          index: O + 1,
          overflows: re
        },
        reset: {
          placement: Y
        }
      } : {};
    }
  };
}, Cw = function(e) {
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
        elements: h
      } = t, {
        mainAxis: f = !0,
        crossAxis: b = !0,
        fallbackPlacements: C,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: N = "none",
        flipAlignment: A = !0,
        ...O
      } = Ia(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const F = bi(a), M = di(c), z = bi(c) === c, T = await (u.isRTL == null ? void 0 : u.isRTL(h.floating)), re = C || (z || !A ? [Hs(c)] : dw(c)), ue = N !== "none";
      !C && ue && re.push(...vw(c, A, N, T));
      const X = [c, ...re], fe = await u.detectOverflow(t, O), Y = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (f && Y.push(fe[F]), b) {
        const $ = $v(a, o, T);
        Y.push(fe[$[0]], fe[$[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: Y
      }], !Y.every(($) => $ <= 0)) {
        var ge, J;
        const $ = (((ge = r.flip) == null ? void 0 : ge.index) || 0) + 1, U = X[$];
        if (U && (!(b === "alignment" ? M !== di(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ie) => di(ie.placement) === M ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: se
            },
            reset: {
              placement: U
            }
          };
        let q = (J = se.filter((le) => le.overflows[0] <= 0).sort((le, ie) => le.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!q)
          switch (k) {
            case "bestFit": {
              var Q;
              const le = (Q = se.filter((ie) => {
                if (ue) {
                  const ve = di(ie.placement);
                  return ve === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ve === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((ve) => ve > 0).reduce((ve, de) => ve + de, 0)]).sort((ie, ve) => ie[1] - ve[1])[0]) == null ? void 0 : Q[0];
              le && (q = le);
              break;
            }
            case "initialPlacement":
              q = c;
              break;
          }
        if (a !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
}, Tw = /* @__PURE__ */ new Set(["left", "top"]);
async function Ew(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = bi(n), c = In(n), u = di(n) === "y", h = Tw.has(o) ? -1 : 1, f = r && u ? -1 : 1, b = Ia(t, e);
  let {
    mainAxis: C,
    crossAxis: k,
    alignmentAxis: N
  } = typeof b == "number" ? {
    mainAxis: b,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: b.mainAxis || 0,
    crossAxis: b.crossAxis || 0,
    alignmentAxis: b.alignmentAxis
  };
  return c && typeof N == "number" && (k = c === "end" ? N * -1 : N), u ? {
    x: k * f,
    y: C * h
  } : {
    x: C * h,
    y: k * f
  };
}
const kw = function(e) {
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
      } = t, u = await Ew(t, e);
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
}, Aw = function(e) {
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
              y: T
            } = M;
            return {
              x: z,
              y: T
            };
          }
        },
        ...h
      } = Ia(e, t), f = {
        x: n,
        y: i
      }, b = await r.detectOverflow(t, h), C = di(a), k = Pv(C);
      let N = f[k], A = f[C];
      const O = (M, z) => Iv(z + b[M === "y" ? "top" : "left"], z, z - b[M === "y" ? "bottom" : "right"]);
      o && (N = O(k, N)), c && (A = O(C, A));
      const F = u.fn({
        ...t,
        [k]: N,
        [C]: A
      });
      return {
        ...F,
        data: {
          x: F.x - n,
          y: F.y - i,
          enabled: {
            [k]: o,
            [C]: c
          }
        }
      };
    }
  };
}, xw = function(e) {
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
      } = Ia(e, t), u = await a.detectOverflow(t, c), h = bi(n), f = In(n), b = di(n) === "y", {
        width: C,
        height: k
      } = i.floating;
      let N, A;
      h === "top" || h === "bottom" ? (N = h, A = f === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = h, N = f === "end" ? "top" : "bottom");
      const O = k - u.top - u.bottom, F = C - u.left - u.right, M = wo(k - u[N], O), z = wo(C - u[A], F), T = t.middlewareData.shift, re = !T;
      let ue = M, X = z;
      T != null && T.enabled.x && (X = F), T != null && T.enabled.y && (ue = O), re && !f && (b ? X = C - 2 * hu(u.left, u.right) : ue = k - 2 * hu(u.top, u.bottom)), await o({
        ...t,
        availableWidth: X,
        availableHeight: ue
      });
      const fe = await a.getDimensions(r.floating);
      return C !== fe.width || k !== fe.height ? {
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
function qn(e) {
  return Sn(e).getComputedStyle(e);
}
const fh = Math.min, Qr = Math.max, Vs = Math.round;
function Dv(e) {
  const t = qn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = Vs(n) !== a || Vs(i) !== r;
  return o && (n = a, i = r), { width: n, height: i, fallback: o };
}
function Yi(e) {
  return zv(e) ? (e.nodeName || "").toLowerCase() : "";
}
let cs;
function Mv() {
  if (cs) return cs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (cs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), cs) : navigator.userAgent;
}
function Yn(e) {
  return e instanceof Sn(e).HTMLElement;
}
function Vi(e) {
  return e instanceof Sn(e).Element;
}
function zv(e) {
  return e instanceof Sn(e).Node;
}
function hh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Sn(e).ShadowRoot || e instanceof ShadowRoot;
}
function zl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = qn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function Ow(e) {
  return ["table", "td", "th"].includes(Yi(e));
}
function pu(e) {
  const t = /firefox/i.test(Mv()), n = qn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Uv() {
  return !/^((?!chrome|android).)*safari/i.test(Mv());
}
function Qu(e) {
  return ["html", "body", "#document"].includes(Yi(e));
}
function jv(e) {
  return Vi(e) ? e : e.contextElement;
}
const Bv = { x: 1, y: 1 };
function nr(e) {
  const t = jv(e);
  if (!Yn(t)) return Bv;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Dv(t);
  let o = (r ? Vs(n.width) : n.width) / i, c = (r ? Vs(n.height) : n.height) / a;
  return o && Number.isFinite(o) || (o = 1), c && Number.isFinite(c) || (c = 1), { x: o, y: c };
}
function So(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), c = jv(e);
  let u = Bv;
  t && (i ? Vi(i) && (u = nr(i)) : u = nr(e));
  const h = c ? Sn(c) : window, f = !Uv() && n;
  let b = (o.left + (f && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, C = (o.top + (f && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / u.y, k = o.width / u.x, N = o.height / u.y;
  if (c) {
    const A = Sn(c), O = i && Vi(i) ? Sn(i) : i;
    let F = A.frameElement;
    for (; F && i && O !== A; ) {
      const M = nr(F), z = F.getBoundingClientRect(), T = getComputedStyle(F);
      z.x += (F.clientLeft + parseFloat(T.paddingLeft)) * M.x, z.y += (F.clientTop + parseFloat(T.paddingTop)) * M.y, b *= M.x, C *= M.y, k *= M.x, N *= M.y, b += z.x, C += z.y, F = Sn(F).frameElement;
    }
  }
  return { width: k, height: N, top: C, right: b + k, bottom: C + N, left: b, x: b, y: C };
}
function Ki(e) {
  return ((zv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ul(e) {
  return Vi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Hv(e) {
  return So(Ki(e)).left + Ul(e).scrollLeft;
}
function Co(e) {
  if (Yi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || hh(e) && e.host || Ki(e);
  return hh(t) ? t.host : t;
}
function Vv(e) {
  const t = Co(e);
  return Qu(t) ? t.ownerDocument.body : Yn(t) && zl(t) ? t : Vv(t);
}
function Ks(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Vv(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Sn(i);
  return a ? t.concat(r, r.visualViewport || [], zl(i) ? i : []) : t.concat(i, Ks(i));
}
function ph(e, t, n) {
  return t === "viewport" ? Jr((function(i, a) {
    const r = Sn(i), o = Ki(i), c = r.visualViewport;
    let u = o.clientWidth, h = o.clientHeight, f = 0, b = 0;
    if (c) {
      u = c.width, h = c.height;
      const C = Uv();
      (C || !C && a === "fixed") && (f = c.offsetLeft, b = c.offsetTop);
    }
    return { width: u, height: h, x: f, y: b };
  })(e, n)) : Vi(t) ? Jr((function(i, a) {
    const r = So(i, !0, a === "fixed"), o = r.top + i.clientTop, c = r.left + i.clientLeft, u = Yn(i) ? nr(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * u.x, height: i.clientHeight * u.y, x: c * u.x, y: o * u.y };
  })(t, n)) : Jr((function(i) {
    const a = Ki(i), r = Ul(i), o = i.ownerDocument.body, c = Qr(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), u = Qr(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let h = -r.scrollLeft + Hv(i);
    const f = -r.scrollTop;
    return qn(o).direction === "rtl" && (h += Qr(a.clientWidth, o.clientWidth) - c), { width: c, height: u, x: h, y: f };
  })(Ki(e)));
}
function vh(e) {
  return Yn(e) && qn(e).position !== "fixed" ? e.offsetParent : null;
}
function gh(e) {
  const t = Sn(e);
  let n = vh(e);
  for (; n && Ow(n) && qn(n).position === "static"; ) n = vh(n);
  return n && (Yi(n) === "html" || Yi(n) === "body" && qn(n).position === "static" && !pu(n)) ? t : n || (function(i) {
    let a = Co(i);
    for (; Yn(a) && !Qu(a); ) {
      if (pu(a)) return a;
      a = Co(a);
    }
    return null;
  })(e) || t;
}
function Nw(e, t, n) {
  const i = Yn(t), a = Ki(t), r = So(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Yi(t) !== "body" || zl(a)) && (o = Ul(t)), Yn(t)) {
    const u = So(t, !0);
    c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
  } else a && (c.x = Hv(a));
  return { x: r.left + o.scrollLeft - c.x, y: r.top + o.scrollTop - c.y, width: r.width, height: r.height };
}
const Lw = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(h, f) {
    const b = f.get(h);
    if (b) return b;
    let C = Ks(h).filter(((O) => Vi(O) && Yi(O) !== "body")), k = null;
    const N = qn(h).position === "fixed";
    let A = N ? Co(h) : h;
    for (; Vi(A) && !Qu(A); ) {
      const O = qn(A), F = pu(A);
      (N ? F || k : F || O.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = O : C = C.filter(((M) => M !== A)), A = Co(A);
    }
    return f.set(h, C), C;
  })(t, this._c) : [].concat(n), o = [...r, i], c = o[0], u = o.reduce(((h, f) => {
    const b = ph(t, f, a);
    return h.top = Qr(b.top, h.top), h.right = fh(b.right, h.right), h.bottom = fh(b.bottom, h.bottom), h.left = Qr(b.left, h.left), h;
  }), ph(t, c, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Yn(n), r = Ki(n);
  if (n === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Yi(n) !== "body" || zl(r)) && (o = Ul(n)), Yn(n))) {
    const h = So(n);
    c = nr(n), u.x = h.x + n.clientLeft, u.y = h.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - o.scrollLeft * c.x + u.x, y: t.y * c.y - o.scrollTop * c.y + u.y };
}, isElement: Vi, getDimensions: function(e) {
  return Yn(e) ? Dv(e) : e.getBoundingClientRect();
}, getOffsetParent: gh, getDocumentElement: Ki, getScale: nr, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || gh, r = this.getDimensions;
  return { reference: Nw(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => qn(e).direction === "rtl" }, Rw = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: Lw, ...n }, r = { ...a.platform, _c: i };
  return yw(e, t, { ...a, platform: r });
}, Gi = {
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
function vu(e, t) {
  let n = Gi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Gi.themes[n.$extend] || {} : (n = null, i = Gi[t]) : n = null;
  while (n);
  return i;
}
function Iw(e) {
  const t = [e];
  let n = Gi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Gi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function mh(e) {
  const t = [e];
  let n = Gi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Gi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let To = !1;
if (typeof window < "u") {
  To = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        To = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Kv = !1;
typeof window < "u" && typeof navigator < "u" && (Kv = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Pw = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), bh = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, yh = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function _h(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Uc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Ln = [];
let ma = null;
const wh = {};
function Sh(e) {
  let t = wh[e];
  return t || (t = wh[e] = []), t;
}
let gu = function() {
};
typeof window < "u" && (gu = window.Element);
function Ve(e) {
  return function(t) {
    return vu(t.theme, e);
  };
}
const jc = "__floating-vue__popper", Gv = () => /* @__PURE__ */ It({
  name: "VPopper",
  provide() {
    return {
      [jc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [jc]: { default: null }
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
      validator: (e) => Pw.includes(e)
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
      type: [String, Object, gu, Boolean],
      default: Ve("container")
    },
    boundary: {
      type: [String, gu],
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
      return (e = this[jc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(kw({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Sw({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Aw({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Cw({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(_w({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(xw({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await Rw(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ma && this.instantMove && ma.instantMove && ma !== this.parentPopper) {
        ma.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ma = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Uc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Ks(this.$_referenceNode),
        ...Ks(this.$_popperNode)
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
        for (let n = 0; n < Ln.length; n++)
          t = Ln[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Ln.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of mh(this.theme))
        Sh(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Uc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, _h(Ln, this), Ln.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of mh(this.theme)) {
        const i = Sh(n);
        _h(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      ma === this && (ma = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Uc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, bh, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], bh, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, yh, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], yh, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, To ? {
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
      if (eo >= e.left && eo <= e.right && to >= e.top && to <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = eo - zi, i = to - Ui, a = t.left + t.width / 2 - zi + (t.top + t.height / 2) - Ui + t.width + t.height, r = zi + n * a, o = Ui + i * a;
        return us(zi, Ui, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        us(zi, Ui, r, o, t.left, t.top, t.right, t.top) || // Top edge
        us(zi, Ui, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        us(zi, Ui, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Kv) {
    const e = To ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Ch(t), e), document.addEventListener("touchend", (t) => Th(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Ch(e), !0), window.addEventListener("click", (e) => Th(e, !1), !0);
  window.addEventListener("resize", Dw);
}
function Ch(e, t) {
  for (let n = 0; n < Ln.length; n++) {
    const i = Ln[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Th(e, t) {
  $w(e, t);
}
function $w(e, t) {
  const n = {};
  for (let i = Ln.length - 1; i >= 0; i--) {
    const a = Ln[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Eh(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = a.parentPopper;
            for (; c; )
              n[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && Eh(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Eh(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Fw(e, n) && !t;
}
function Fw(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function Dw() {
  for (let e = 0; e < Ln.length; e++)
    Ln[e].$_computePosition();
}
let zi = 0, Ui = 0, eo = 0, to = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  zi = eo, Ui = to, eo = e.clientX, to = e.clientY;
}, To ? {
  passive: !0
} : void 0);
function us(e, t, n, i, a, r, o, c) {
  const u = ((o - a) * (t - r) - (c - r) * (e - a)) / ((c - r) * (n - e) - (o - a) * (i - t)), h = ((n - e) * (t - r) - (i - t) * (e - a)) / ((c - r) * (n - e) - (o - a) * (i - t));
  return u >= 0 && u <= 1 && h >= 0 && h <= 1;
}
const Mw = {
  extends: Gv()
}, ed = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function zw(e, t, n, i, a, r) {
  return y(), w("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Me(e.$slots, "default", ys(go(e.slotData)))
  ], 2);
}
const Uw = /* @__PURE__ */ ed(Mw, [["render", zw]]);
function jw() {
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
let ms;
function mu() {
  mu.init || (mu.init = !0, ms = jw() !== -1);
}
var jl = {
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
    mu(), Qt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ms && this.$el.appendChild(e), e.data = "about:blank", ms || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!ms && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Bw = /* @__PURE__ */ jm();
zm("data-v-b329ee4c");
const Hw = {
  class: "resize-observer",
  tabindex: "-1"
};
Um();
const Vw = /* @__PURE__ */ Bw((e, t, n, i, a, r) => (y(), je("div", Hw)));
jl.render = Vw;
jl.__scopeId = "data-v-b329ee4c";
jl.__file = "src/components/ResizeObserver.vue";
const Wv = (e = "theme") => ({
  computed: {
    themeClass() {
      return Iw(this[e]);
    }
  }
}), Kw = /* @__PURE__ */ It({
  name: "VPopperContent",
  components: {
    ResizeObserver: jl
  },
  mixins: [
    Wv()
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
}), Gw = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Ww = {
  ref: "inner",
  class: "v-popper__inner"
}, qw = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), Yw = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), Xw = [
  qw,
  Yw
];
function Zw(e, t, n, i, a, r) {
  const o = Be("ResizeObserver");
  return y(), w("div", {
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
    style: vn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = nt((c) => e.autoHide && e.$emit("hide"), ["esc"]))
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
      l("div", Ww, [
        e.mounted ? (y(), w(ae, { key: 0 }, [
          l("div", null, [
            Me(e.$slots, "default")
          ]),
          e.handleResize ? (y(), je(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : D("", !0)
        ], 64)) : D("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: vn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Xw, 4)
    ], 4)
  ], 46, Gw);
}
const qv = /* @__PURE__ */ ed(Kw, [["render", Zw]]), Yv = {
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
let bu = function() {
};
typeof window < "u" && (bu = window.Element);
const Jw = /* @__PURE__ */ It({
  name: "VPopperWrapper",
  components: {
    Popper: Uw,
    PopperContent: qv
  },
  mixins: [
    Yv,
    Wv("finalTheme")
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
      type: [String, Object, bu, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, bu],
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
function Qw(e, t, n, i, a, r) {
  const o = Be("PopperContent"), c = Be("Popper");
  return y(), je(c, Kt({ ref: "popper" }, e.$props, {
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
    default: Re(({
      popperId: u,
      isShown: h,
      shouldMountContent: f,
      skipTransition: b,
      autoHide: C,
      show: k,
      hide: N,
      handleResize: A,
      onResize: O,
      classes: F,
      result: M
    }) => [
      Me(e.$slots, "default", {
        shown: h,
        show: k,
        hide: N
      }),
      ye(o, {
        ref: "popperContent",
        "popper-id": u,
        theme: e.finalTheme,
        shown: h,
        mounted: f,
        "skip-transition": b,
        "auto-hide": C,
        "handle-resize": A,
        classes: F,
        result: M,
        onHide: N,
        onResize: O
      }, {
        default: Re(() => [
          Me(e.$slots, "popper", {
            shown: h,
            hide: N
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const td = /* @__PURE__ */ ed(Jw, [["render", Qw]]), eS = {
  ...td,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...td
});
({
  ...td
});
Gv();
const kh = Gi, tS = eS, nS = /* @__PURE__ */ It({
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
}), iS = "_ncPopover_qgtYg", aS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: iS
}, Xv = "nc-popover-9";
kh.themes[Xv] = structuredClone(kh.themes.dropdown);
const rS = {
  name: "NcPopover",
  components: {
    Dropdown: tS,
    NcPopoverTriggerProvider: nS
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
      theme: Xv
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
      return this.placement === "start" ? uu ? "right" : "left" : this.placement === "end" ? uu ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Yu(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: _o(),
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
        Oa.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function oS(e, t, n, i, a, r) {
  const o = Be("NcPopoverTriggerProvider"), c = Be("Dropdown");
  return y(), je(c, {
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
    popper: Re((u) => [
      Me(e.$slots, "default", ys(go(u)))
    ]),
    default: Re(() => [
      ye(o, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Re((u) => [
          Me(e.$slots, "trigger", ys(go(u)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const sS = {
  $style: aS
}, Ah = /* @__PURE__ */ Qe(rS, [["render", oS], ["__cssModules", sS]]), lS = {
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
}, cS = ["aria-hidden", "aria-label"], uS = ["fill", "width", "height"], dS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, fS = { key: 0 };
function hS(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", dS, [
        n.title ? (y(), w("title", fS, v(n.title), 1)) : D("", !0)
      ])
    ], 8, uS))
  ], 16, cS);
}
const pS = /* @__PURE__ */ Qe(lS, [["render", hS]]);
Zi(W_);
function nd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Lt)
        return !1;
      if (n.type === ae && !nd(n.children))
        return !1;
      if (n.type === No && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const vS = ".focusable", gS = {
  name: "NcActions",
  components: {
    NcButton: Wn,
    NcPopover: Ah
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
      [Xu]: H(() => this.actionsMenuSemanticType === "menu"),
      [Lv]: this.closeMenu
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
      randomId: Ml()
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
    lw(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(vS);
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
    const e = [], t = (k, N) => {
      k.forEach((A) => {
        if (this.isAction(A)) {
          N.push(A);
          return;
        }
        A.type === ae && t(A.children, N);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((k) => !i.includes(k)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], u = a.some((k) => o.includes(this.getActionName(k))), h = a.some((k) => r.includes(this.getActionName(k))), f = a.some((k) => c.includes(this.getActionName(k)));
    u ? this.actionsMenuSemanticType = "dialog" : h ? this.actionsMenuSemanticType = "menu" : f ? this.actionsMenuSemanticType = "navigation" : e.filter((N) => this.getActionName(N).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const b = (k) => {
      const N = k?.props?.icon, A = k?.children?.icon?.()?.[0] ?? (this.isIconUrl(N) ? an("img", { class: "action-item__menutoggle__icon", src: N, alt: "" }) : an("span", { class: ["icon", N] })), O = k?.children?.default?.()?.[0]?.children?.trim(), F = this.forceName ? O : "";
      let M = k?.props?.title;
      this.forceName || M || (M = O);
      const z = { ...k?.props ?? {} }, T = ["submit", "reset"].includes(z.type) ? z.modelValue : "button";
      return delete z.modelValue, delete z.type, an(
        Wn,
        Kt(
          z,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": k?.props?.["aria-label"] || O,
            title: M,
            disabled: this.disabled || k?.props?.disabled,
            pressed: k?.props?.modelValue,
            size: this.size,
            type: T,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (F ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": k?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => F,
          icon: () => A
        }
      );
    }, C = (k) => {
      const N = nd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? an("span", { class: ["icon", this.defaultIcon] }) : an(pS, { size: 20 }), A = `${this.randomId}-trigger`;
      return an(
        Ah,
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
          trigger: () => an(Wn, {
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
              k
            ])
          ])
        }
      );
    };
    return e.length === 1 && n.length === 1 && !this.forceMenu ? b(e[0]) : (this.$nextTick(() => {
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
        ...i.map(b),
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
}, Gs = /* @__PURE__ */ Qe(gS, [["__scopeId", "data-v-7206c1f1"]]), mS = ["aria-label"], bS = ["width", "height"], yS = ["fill"], _S = ["fill"], wS = { key: 0 }, SS = /* @__PURE__ */ It({
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
        l("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, yS),
        l("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (y(), w("title", wS, v(e.name), 1)) : D("", !0)
        ], 8, _S)
      ], 8, bS))
    ], 8, mS));
  }
}), Zv = /* @__PURE__ */ Qe(SS, [["__scopeId", "data-v-cf399190"]]), yu = /* @__PURE__ */ It({
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
}), CS = {
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
}, TS = ["aria-hidden", "aria-label"], ES = ["fill", "width", "height"], kS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, AS = { key: 0 };
function xS(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", kS, [
        n.title ? (y(), w("title", AS, v(n.title), 1)) : D("", !0)
      ])
    ], 8, ES))
  ], 16, TS);
}
const OS = /* @__PURE__ */ Qe(CS, [["render", xS]]), NS = {
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
}, LS = ["aria-hidden", "aria-label"], RS = ["fill", "width", "height"], IS = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, PS = { key: 0 };
function $S(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", IS, [
        n.title ? (y(), w("title", PS, v(n.title), 1)) : D("", !0)
      ])
    ], 8, RS))
  ], 16, LS);
}
const FS = /* @__PURE__ */ Qe(NS, [["render", $S]]);
Zi(Z_);
const DS = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Wn,
    ChevronDown: k0,
    ChevronUp: I0
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
    return { isLegacy34: Ji };
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
function MS(e, t, n, i, a, r) {
  const o = Be("ChevronUp"), c = Be("ChevronDown"), u = Be("NcButton");
  return y(), je(u, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Re(() => [
      n.open ? (y(), je(o, {
        key: 0,
        size: 20
      })) : (y(), je(c, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const zS = /* @__PURE__ */ Qe(DS, [["render", MS], ["__scopeId", "data-v-cfbd3794"]]);
Zi(J_, t1);
const US = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Gs,
    NcActionButton: sw,
    NcAppNavigationIconCollapsible: zS,
    NcInputConfirmCancel: Y0,
    NcLoadingIcon: Zv,
    NcVNodes: yu,
    Pencil: OS,
    Undo: FS
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Ev, default: null }
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
      default: () => Ml(),
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
      isMobile: Ro(),
      isLegacy34: Ji
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && pi("toggle-navigation", { open: !1 }));
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
}, jS = ["id"], BS = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], HS = {
  key: 0,
  class: "editingContainer"
}, VS = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, KS = { class: "app-navigation-entry__deleted-description" }, GS = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, WS = {
  key: 0,
  class: "app-navigation-entry__children"
};
function qS(e, t, n, i, a, r) {
  const o = Be("NcLoadingIcon"), c = Be("NcInputConfirmCancel"), u = Be("Pencil"), h = Be("NcActionButton"), f = Be("Undo"), b = Be("NcActions"), C = Be("NcAppNavigationIconCollapsible");
  return y(), w("li", {
    id: n.id,
    class: Ee([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (y(), je(zu(r.isRouterLink ? "router-link" : "NcVNodes"), ys(go({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Re(({ href: k, navigate: N, isActive: A }) => [
        l("div", {
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
          n.undo ? D("", !0) : (y(), w("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && A ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || k || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...O) => r.handleBlur && r.handleBlur(...O)),
            onClick: (O) => r.onClick(O, N, k),
            onFocus: t[2] || (t[2] = (...O) => r.handleFocus && r.handleFocus(...O)),
            onKeydown: t[3] || (t[3] = nt(xe((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: Ee(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (y(), je(o, { key: 0 })) : Me(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            l("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, v(n.name), 3),
            a.editingActive ? (y(), w("div", HS, [
              ye(c, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : D("", !0)
          ], 40, BS)),
          n.undo ? (y(), w("div", VS, [
            l("div", KS, v(n.name), 1)
          ])) : D("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (y(), w("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (y(), w("div", GS, [
              Me(e.$slots, "counter", {}, void 0, !0)
            ])) : D("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (y(), je(b, {
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
              icon: Re(() => [
                Me(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Re(() => [
                n.editable && !a.editingActive ? (y(), je(h, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Re(() => [
                    ye(u, { size: 20 })
                  ]),
                  default: Re(() => [
                    Te(" " + v(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : D("", !0),
                n.undo ? (y(), je(h, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Re(() => [
                    ye(f, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : D("", !0),
                Me(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : D("", !0)
          ], 2)) : D("", !0),
          n.allowCollapse && e.$slots.default ? (y(), je(C, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: xe(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : D("", !0),
          Me(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (y(), w("ul", WS, [
      Me(e.$slots, "default", {}, void 0, !0)
    ])) : D("", !0)
  ], 10, jS);
}
const xh = /* @__PURE__ */ Qe(US, [["render", qS], ["__scopeId", "data-v-01bef41b"]]), Bc = /* @__PURE__ */ new WeakMap(), YS = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Qf(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Qf(e, a, Object.assign({ capture: n }, r));
    }
    Bc.set(e, i);
  },
  unmounted(e) {
    const t = Bc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Bc.delete(e);
  }
}, XS = {
  mounted(e) {
    e.focus();
  }
}, ZS = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", JS = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", _u = "numeric", wu = "ascii", Su = "alpha", no = "asciinumeric", Kr = "alphanumeric", Cu = "domain", Jv = "emoji", QS = "scheme", eC = "slashscheme", Hc = "whitespace";
function tC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Ea(e, t, n) {
  t[_u] && (t[no] = !0, t[Kr] = !0), t[wu] && (t[no] = !0, t[Su] = !0), t[no] && (t[Kr] = !0), t[Su] && (t[Kr] = !0), t[Kr] && (t[Cu] = !0), t[Jv] && (t[Cu] = !0);
  for (const i in t) {
    const a = tC(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function nC(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function hn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
hn.groups = {};
hn.prototype = {
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
    i = i || hn.groups;
    let a;
    return t && t.j ? a = t : (a = new hn(t), n && i && Ea(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || hn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, c = a.go(e);
    if (c ? (o = new hn(), Object.assign(o.j, c.j), o.jr.push.apply(o.jr, c.jr), o.jd = c.jd, o.t = c.t) : o = new hn(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const u = Object.assign(nC(o.t, i), n);
          Ea(r, u, i);
        } else n && Ea(r, n, i);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, n, i, a) => e.ta(t, n, i, a), gt = (e, t, n, i, a) => e.tr(t, n, i, a), Oh = (e, t, n, i, a) => e.ts(t, n, i, a), ne = (e, t, n, i, a) => e.tt(t, n, i, a), ri = "WORD", Tu = "UWORD", Qv = "ASCIINUMERICAL", eg = "ALPHANUMERICAL", Eo = "LOCALHOST", Eu = "TLD", ku = "UTLD", bs = "SCHEME", qa = "SLASH_SCHEME", id = "NUM", Au = "WS", ad = "NL", io = "OPENBRACE", ao = "CLOSEBRACE", Ws = "OPENBRACKET", qs = "CLOSEBRACKET", Ys = "OPENPAREN", Xs = "CLOSEPAREN", Zs = "OPENANGLEBRACKET", Js = "CLOSEANGLEBRACKET", Qs = "FULLWIDTHLEFTPAREN", el = "FULLWIDTHRIGHTPAREN", tl = "LEFTCORNERBRACKET", nl = "RIGHTCORNERBRACKET", il = "LEFTWHITECORNERBRACKET", al = "RIGHTWHITECORNERBRACKET", rl = "FULLWIDTHLESSTHAN", ol = "FULLWIDTHGREATERTHAN", sl = "AMPERSAND", ll = "APOSTROPHE", cl = "ASTERISK", Bi = "AT", ul = "BACKSLASH", dl = "BACKTICK", fl = "CARET", ka = "COLON", rd = "COMMA", hl = "DOLLAR", Hn = "DOT", pl = "EQUALS", od = "EXCLAMATION", yn = "HYPHEN", ro = "PERCENT", vl = "PIPE", gl = "PLUS", ml = "POUND", oo = "QUERY", sd = "QUOTE", tg = "FULLWIDTHMIDDLEDOT", ld = "SEMI", Vn = "SLASH", so = "TILDE", bl = "UNDERSCORE", ng = "EMOJI", yl = "SYM";
var ig = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: eg,
  AMPERSAND: sl,
  APOSTROPHE: ll,
  ASCIINUMERICAL: Qv,
  ASTERISK: cl,
  AT: Bi,
  BACKSLASH: ul,
  BACKTICK: dl,
  CARET: fl,
  CLOSEANGLEBRACKET: Js,
  CLOSEBRACE: ao,
  CLOSEBRACKET: qs,
  CLOSEPAREN: Xs,
  COLON: ka,
  COMMA: rd,
  DOLLAR: hl,
  DOT: Hn,
  EMOJI: ng,
  EQUALS: pl,
  EXCLAMATION: od,
  FULLWIDTHGREATERTHAN: ol,
  FULLWIDTHLEFTPAREN: Qs,
  FULLWIDTHLESSTHAN: rl,
  FULLWIDTHMIDDLEDOT: tg,
  FULLWIDTHRIGHTPAREN: el,
  HYPHEN: yn,
  LEFTCORNERBRACKET: tl,
  LEFTWHITECORNERBRACKET: il,
  LOCALHOST: Eo,
  NL: ad,
  NUM: id,
  OPENANGLEBRACKET: Zs,
  OPENBRACE: io,
  OPENBRACKET: Ws,
  OPENPAREN: Ys,
  PERCENT: ro,
  PIPE: vl,
  PLUS: gl,
  POUND: ml,
  QUERY: oo,
  QUOTE: sd,
  RIGHTCORNERBRACKET: nl,
  RIGHTWHITECORNERBRACKET: al,
  SCHEME: bs,
  SEMI: ld,
  SLASH: Vn,
  SLASH_SCHEME: qa,
  SYM: yl,
  TILDE: so,
  TLD: Eu,
  UNDERSCORE: bl,
  UTLD: ku,
  UWORD: Tu,
  WORD: ri,
  WS: Au
});
const ii = /[a-z]/, zr = new RegExp("\\p{L}", "u"), Vc = new RegExp("\\p{Emoji}", "u"), ai = /\d/, Kc = /\s/, Nh = "\r", Gc = `
`, iC = "️", aC = "‍", Wc = "￼";
let ds = null, fs = null;
function rC(e = []) {
  const t = {};
  hn.groups = t;
  const n = new hn();
  ds == null && (ds = Lh(ZS)), fs == null && (fs = Lh(JS)), ne(n, "'", ll), ne(n, "{", io), ne(n, "}", ao), ne(n, "[", Ws), ne(n, "]", qs), ne(n, "(", Ys), ne(n, ")", Xs), ne(n, "<", Zs), ne(n, ">", Js), ne(n, "（", Qs), ne(n, "）", el), ne(n, "「", tl), ne(n, "」", nl), ne(n, "『", il), ne(n, "』", al), ne(n, "＜", rl), ne(n, "＞", ol), ne(n, "&", sl), ne(n, "*", cl), ne(n, "@", Bi), ne(n, "`", dl), ne(n, "^", fl), ne(n, ":", ka), ne(n, ",", rd), ne(n, "$", hl), ne(n, ".", Hn), ne(n, "=", pl), ne(n, "!", od), ne(n, "-", yn), ne(n, "%", ro), ne(n, "|", vl), ne(n, "+", gl), ne(n, "#", ml), ne(n, "?", oo), ne(n, '"', sd), ne(n, "/", Vn), ne(n, ";", ld), ne(n, "~", so), ne(n, "_", bl), ne(n, "\\", ul), ne(n, "・", tg);
  const i = gt(n, ai, id, {
    [_u]: !0
  });
  gt(i, ai, i);
  const a = gt(i, ii, Qv, {
    [no]: !0
  }), r = gt(i, zr, eg, {
    [Kr]: !0
  }), o = gt(n, ii, ri, {
    [wu]: !0
  });
  gt(o, ai, a), gt(o, ii, o), gt(a, ai, a), gt(a, ii, a);
  const c = gt(n, zr, Tu, {
    [Su]: !0
  });
  gt(c, ii), gt(c, ai, r), gt(c, zr, c), gt(r, ai, r), gt(r, ii), gt(r, zr, r);
  const u = ne(n, Gc, ad, {
    [Hc]: !0
  }), h = ne(n, Nh, Au, {
    [Hc]: !0
  }), f = gt(n, Kc, Au, {
    [Hc]: !0
  });
  ne(n, Wc, f), ne(h, Gc, u), ne(h, Wc, f), gt(h, Kc, f), ne(f, Nh), ne(f, Gc), gt(f, Kc, f), ne(f, Wc, f);
  const b = gt(n, Vc, ng, {
    [Jv]: !0
  });
  ne(b, "#"), gt(b, Vc, b), ne(b, iC, b);
  const C = ne(b, aC);
  ne(C, "#"), gt(C, Vc, b);
  const k = [[ii, o], [ai, a]], N = [[ii, null], [zr, c], [ai, r]];
  for (let A = 0; A < ds.length; A++)
    Di(n, ds[A], Eu, ri, k);
  for (let A = 0; A < fs.length; A++)
    Di(n, fs[A], ku, Tu, N);
  Ea(Eu, {
    tld: !0,
    ascii: !0
  }, t), Ea(ku, {
    utld: !0,
    alpha: !0
  }, t), Di(n, "file", bs, ri, k), Di(n, "mailto", bs, ri, k), Di(n, "http", qa, ri, k), Di(n, "https", qa, ri, k), Di(n, "ftp", qa, ri, k), Di(n, "ftps", qa, ri, k), Ea(bs, {
    scheme: !0,
    ascii: !0
  }, t), Ea(qa, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], M = e[A][1] ? {
      [QS]: !0
    } : {
      [eC]: !0
    };
    O.indexOf("-") >= 0 ? M[Cu] = !0 : ii.test(O) ? ai.test(O) ? M[no] = !0 : M[wu] = !0 : M[_u] = !0, Oh(n, O, O, M);
  }
  return Oh(n, "localhost", Eo, {
    ascii: !0
  }), n.jd = new hn(yl), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, ig)
  };
}
function ag(e, t) {
  const n = oC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), i = n.length, a = [];
  let r = 0, o = 0;
  for (; o < i; ) {
    let c = e, u = null, h = 0, f = null, b = -1, C = -1;
    for (; o < i && (u = c.go(n[o])); )
      c = u, c.accepts() ? (b = 0, C = 0, f = c) : b >= 0 && (b += n[o].length, C++), h += n[o].length, r += n[o].length, o++;
    r -= b, o -= C, h -= b, a.push({
      t: f.t,
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
function oC(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, o = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(o), i += o.length;
  }
  return t;
}
function Di(e, t, n, i, a) {
  let r;
  const o = t.length;
  for (let c = 0; c < o - 1; c++) {
    const u = t[c];
    e.j[u] ? r = e.j[u] : (r = new hn(i), r.jr = a.slice(), e.j[u] = r), e = r;
  }
  return r = new hn(n), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function Lh(e) {
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
const ko = {
  defaultProtocol: "http",
  events: null,
  format: Rh,
  formatHref: Rh,
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
function cd(e, t = null) {
  let n = Object.assign({}, ko);
  e && (n = Object.assign(n, e instanceof cd ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
cd.prototype = {
  o: ko,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : ko[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Rh(e) {
  return e;
}
function rg(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
rg.prototype = {
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
  toObject(e = ko.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), o = {}, c = e.get("className", n, t), u = e.get("target", n, t), h = e.get("rel", n, t), f = e.getObj("attributes", n, t), b = e.getObj("events", n, t);
    return o.href = i, c && (o.class = c), u && (o.target = u), h && (o.rel = h), f && Object.assign(o, f), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: b
    };
  }
};
function Bl(e, t) {
  class n extends rg {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const sC = Bl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Ih = Bl("text"), lC = Bl("nl"), hs = Bl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = ko.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== Eo && e[1].t === ka;
  }
}), bn = (e) => new hn(e);
function cC({
  groups: e
}) {
  const t = e.domain.concat([sl, cl, Bi, ul, dl, fl, hl, pl, yn, id, ro, vl, gl, ml, Vn, yl, so, bl]), n = [ll, ka, rd, Hn, od, ro, oo, sd, ld, Zs, Js, io, ao, qs, Ws, Ys, Xs, Qs, el, tl, nl, il, al, rl, ol], i = [sl, ll, cl, ul, dl, fl, hl, pl, yn, io, ao, ro, vl, gl, ml, oo, Vn, yl, so, bl], a = bn(), r = ne(a, so);
  Ue(r, i, r), Ue(r, e.domain, r);
  const o = bn(), c = bn(), u = bn();
  Ue(a, e.domain, o), Ue(a, e.scheme, c), Ue(a, e.slashscheme, u), Ue(o, i, r), Ue(o, e.domain, o);
  const h = ne(o, Bi);
  ne(r, Bi, h), ne(c, Bi, h), ne(u, Bi, h);
  const f = ne(r, Hn);
  Ue(f, i, r), Ue(f, e.domain, r);
  const b = bn();
  Ue(h, e.domain, b), Ue(b, e.domain, b);
  const C = ne(b, Hn);
  Ue(C, e.domain, b);
  const k = bn(sC);
  Ue(C, e.tld, k), Ue(C, e.utld, k), ne(h, Eo, k);
  const N = ne(b, yn);
  ne(N, yn, N), Ue(N, e.domain, b), Ue(k, e.domain, b), ne(k, Hn, C), ne(k, yn, N);
  const A = ne(o, yn), O = ne(o, Hn);
  ne(A, yn, A), Ue(A, e.domain, o), Ue(O, i, r), Ue(O, e.domain, o);
  const F = bn(hs);
  Ue(O, e.tld, F), Ue(O, e.utld, F), Ue(F, e.domain, o), Ue(F, i, r), ne(F, Hn, O), ne(F, yn, A), ne(F, Bi, h);
  const M = ne(F, ka), z = bn(hs);
  Ue(M, e.numeric, z);
  const T = bn(hs), re = bn();
  Ue(T, t, T), Ue(T, n, re), Ue(re, t, T), Ue(re, n, re), ne(F, Vn, T), ne(z, Vn, T);
  const ue = ne(c, ka), X = ne(u, ka), fe = ne(X, Vn), Y = ne(fe, Vn);
  Ue(c, e.domain, o), ne(c, Hn, O), ne(c, yn, A), Ue(u, e.domain, o), ne(u, Hn, O), ne(u, yn, A), Ue(ue, e.domain, T), ne(ue, Vn, T), ne(ue, oo, T), Ue(Y, e.domain, T), Ue(Y, t, T), ne(Y, Vn, T);
  const se = [
    [io, ao],
    // {}
    [Ws, qs],
    // []
    [Ys, Xs],
    // ()
    [Zs, Js],
    // <>
    [Qs, el],
    // （）
    [tl, nl],
    // 「」
    [il, al],
    // 『』
    [rl, ol]
    // ＜＞
  ];
  for (let ge = 0; ge < se.length; ge++) {
    const [J, Q] = se[ge], $ = ne(T, J);
    ne(re, J, $);
    const U = bn(hs);
    Ue($, t, U);
    const q = bn();
    Ue($, n, q), ne($, Q, T), Ue(U, t, U), Ue(U, n, q), Ue(q, t, U), Ue(q, n, q), ne(U, Q, T), ne(q, Q, T);
  }
  return ne(a, Eo, F), ne(a, ad, lC), {
    start: a,
    tokens: ig
  };
}
function uC(e, t, n) {
  let i = n.length, a = 0, r = [], o = [];
  for (; a < i; ) {
    let c = e, u = null, h = null, f = 0, b = null, C = -1;
    for (; a < i && !(u = c.go(n[a].t)); )
      o.push(n[a++]);
    for (; a < i && (h = u || c.go(n[a].t)); )
      u = null, c = h, c.accepts() ? (C = 0, b = c) : C >= 0 && C++, a++, f++;
    if (C < 0)
      a -= f, a < i && (o.push(n[a]), a++);
    else {
      o.length > 0 && (r.push(qc(Ih, t, o)), o = []), a -= C, f -= C;
      const k = b.t, N = n.slice(a - f, a);
      r.push(qc(k, t, N));
    }
  }
  return o.length > 0 && r.push(qc(Ih, t, o)), r;
}
function qc(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const zt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function dC() {
  zt.scanner = rC(zt.customSchemes);
  for (let e = 0; e < zt.tokenQueue.length; e++)
    zt.tokenQueue[e][1]({
      scanner: zt.scanner
    });
  zt.parser = cC(zt.scanner.tokens);
  for (let e = 0; e < zt.pluginQueue.length; e++)
    zt.pluginQueue[e][1]({
      scanner: zt.scanner,
      parser: zt.parser
    });
  return zt.initialized = !0, zt;
}
function og(e) {
  return zt.initialized || dC(), uC(zt.parser.start, e, ag(zt.scanner.start, e));
}
og.scan = ag;
function fC(e) {
  const t = new cd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, vC), n = og(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Ps(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function hC(e) {
  return e.replace(/"/g, "&quot;");
}
function pC(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${hC(i)}"`);
  }
  return t.join(" ");
}
function vC({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${pC(t)}>${Ps(n)}</${e}>`;
}
const gC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = fC(t.text));
}, mC = ["title"], bC = /* @__PURE__ */ It({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = jt("NcAppSidebar:header:ref");
    return (n, i) => Ie((y(), w("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Te(v(e.name), 1)
    ], 8, mC)), [
      [g(gC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), yC = ["aria-labelledby"], _C = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, wC = ["id"], SC = {
  key: 2,
  class: "empty-content__description"
}, CC = {
  key: 3,
  class: "empty-content__action"
}, TC = /* @__PURE__ */ It({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Ml();
    return (n, i) => (y(), w("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (y(), w("div", _C, [
        Me(n.$slots, "icon", {}, void 0, !0)
      ])) : D("", !0),
      e.name !== "" || n.$slots.name ? (y(), w("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Me(n.$slots, "name", {}, () => [
          Te(v(e.name), 1)
        ], !0)
      ], 8, wC)) : D("", !0),
      e.description !== "" || n.$slots.description ? (y(), w("p", SC, [
        Me(n.$slots, "description", {}, () => [
          Te(v(e.description), 1)
        ], !0)
      ])) : D("", !0),
      n.$slots.action ? (y(), w("div", CC, [
        Me(n.$slots, "action", {}, void 0, !0)
      ])) : D("", !0)
    ], 8, yC));
  }
}), EC = /* @__PURE__ */ Qe(TC, [["__scopeId", "data-v-8609a4c1"]]), kC = {
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
}, AC = ["aria-hidden", "aria-label"], xC = ["fill", "width", "height"], OC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, NC = { key: 0 };
function LC(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", OC, [
        n.title ? (y(), w("title", NC, v(n.title), 1)) : D("", !0)
      ])
    ], 8, xC))
  ], 16, AC);
}
const RC = /* @__PURE__ */ Qe(kC, [["render", LC]]), IC = {
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
}, PC = ["aria-hidden", "aria-label"], $C = ["fill", "width", "height"], FC = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, DC = { key: 0 };
function MC(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", FC, [
        n.title ? (y(), w("title", DC, v(n.title), 1)) : D("", !0)
      ])
    ], 8, $C))
  ], 16, PC);
}
const zC = /* @__PURE__ */ Qe(IC, [["render", MC]]), UC = {
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
}, jC = ["aria-hidden", "aria-label"], BC = ["fill", "width", "height"], HC = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, VC = { key: 0 };
function KC(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", HC, [
        n.title ? (y(), w("title", VC, v(n.title), 1)) : D("", !0)
      ])
    ], 8, BC))
  ], 16, jC);
}
const GC = /* @__PURE__ */ Qe(UC, [["render", KC]]), WC = ["aria-selected", "tabindex"], qC = /* @__PURE__ */ It({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ fb({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = xp(e, "selected"), n = /* @__PURE__ */ we(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (y(), w("button", {
      class: Ee(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Ji),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      l("span", {
        class: Ee([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (o) => n.value = !1)
      }, [
        l("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          ye(yu, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Re(() => [
              l("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          ye(yu, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Re(() => [
              l("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: Ee(a.$style.sidebarTabsButton__name)
      }, v(e.tab.name), 3)
    ], 10, WC));
  }
}), YC = "_sidebarTabsButton_q3kBA", XC = "_sidebarTabsButton_legacy_KQ4d1", ZC = "_sidebarTabsButton_selected_Pjayf", JC = "_sidebarTabsButton_animatedHighlight_uvp-0", QC = "_sidebarTabsButton__name_rlQsL", eT = "_sidebarTabsButton__icon_QzZg4", tT = "_sidebarTabsButton__iconLayer_ZkZan", nT = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", iT = "_sidebarTabsButton__icon_pop_IA0By", aT = "_sidebarTabsButton__legacyIcon_QhcNW", rT = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: YC,
  sidebarTabsButton_legacy: XC,
  sidebarTabsButton_selected: ZC,
  sidebarTabsButton_animatedHighlight: JC,
  sidebarTabsButton__name: QC,
  sidebarTabsButton__icon: eT,
  sidebarTabsButton__iconLayer: tT,
  sidebarTabsButton__iconLayer_hidden: nT,
  sidebarTabsButton__icon_pop: iT,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: aT
}, oT = {
  $style: rT
}, sT = /* @__PURE__ */ Qe(qC, [["__cssModules", oT]]), lT = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: sT
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
      isLegacy34: Ji,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [p_()]) : t.order - n.order), this.updateActive();
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
}, cT = { class: "app-sidebar-tabs" };
function uT(e, t, n, i, a, r) {
  const o = Be("NcAppSidebarTabsButton");
  return y(), w("div", cT, [
    r.hasMultipleTabs || r.showForSingleTab ? (y(), w("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ee(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = nt(xe((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = nt(xe((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = nt(xe((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = nt(xe((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = nt(xe((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = nt(xe((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = nt(xe((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onPointerleave: t[8] || (t[8] = (...c) => r.hideHighlight && r.hideHighlight(...c)),
      onFocusin: t[9] || (t[9] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onFocusout: t[10] || (t[10] = (...c) => r.onHighlightFocusOut && r.onHighlightFocusOut(...c))
    }, [
      a.highlightEnabled ? (y(), w("div", {
        key: 0,
        class: Ee(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: vn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : D("", !0),
      (y(!0), w(ae, null, Ce(a.tabs, (c) => (y(), je(o, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: a.activeTab === c.id,
        animatedHighlight: a.highlightEnabled,
        tab: c,
        "onUpdate:selected": (u) => r.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : D("", !0),
    l("div", {
      class: Ee(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Me(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const dT = /* @__PURE__ */ Qe(lT, [["render", uT], ["__scopeId", "data-v-74190d2a"]]);
Zi(Y_);
const fT = {
  name: "NcAppSidebar",
  components: {
    NcActions: Gs,
    NcAppSidebarHeader: bC,
    NcAppSidebarTabs: dT,
    NcButton: Wn,
    NcLoadingIcon: Zv,
    NcEmptyContent: EC,
    IconArrowRight: Ov,
    IconClose: Nv,
    IconDockRight: RC,
    IconStar: zC,
    IconStarOutline: GC
  },
  directives: {
    Focus: XS,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: YS
  },
  inject: {
    ncContentSelector: {
      from: xv,
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
    const e = /* @__PURE__ */ we(null);
    return _n("NcAppSidebar:header:ref", e), {
      uid: Ml(),
      isMobile: H_(),
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
    isSlotPopulated: nd,
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
      this.focusTrap || (this.focusTrap = Yu([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: _o(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && Oa.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, hT = ["aria-labelledby"], pT = { class: "app-sidebar-header__info" }, vT = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, gT = { class: "app-sidebar-header__name-container" }, mT = { class: "app-sidebar-header__mainname-container" }, bT = ["placeholder", "value"], yT = ["title"], _T = {
  key: 2,
  class: "app-sidebar-header__description"
};
function wT(e, t, n, i, a, r) {
  const o = Be("IconDockRight"), c = Be("NcButton"), u = Be("NcLoadingIcon"), h = Be("IconStar"), f = Be("IconStarOutline"), b = Be("NcAppSidebarHeader"), C = Be("IconArrowRight"), k = Be("NcActions"), N = Be("IconClose"), A = Be("NcAppSidebarTabs"), O = Be("NcEmptyContent"), F = Zd("focus"), M = Zd("click-outside");
  return y(), je(Qb, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Re(() => [
      Ie(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = nt((...z) => r.onKeydownEsc && r.onKeydownEsc(...z), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (y(), je(fp, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ye(c, Kt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (z) => e.$emit("update:open", !0))
          }), {
            icon: Re(() => [
              Me(e.$slots, "toggle-icon", {}, () => [
                ye(o, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : D("", !0),
        l("header", {
          class: Ee(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (y(), je(b, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Me(e.$slots, "info", { key: 0 }, () => [
            l("div", pT, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (y(), w("div", {
                key: 0,
                class: Ee(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: vn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...z) => r.onFigureClick && r.onFigureClick(...z)),
                onKeydown: t[2] || (t[2] = nt((...z) => r.onFigureClick && r.onFigureClick(...z), ["enter"]))
              }, [
                Me(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : D("", !0),
              l("div", {
                class: Ee(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (y(), w("div", vT, [
                  Me(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (y(), je(c, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: xe(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Re(() => [
                        n.starLoading ? (y(), je(u, { key: 0 })) : a.isStarred ? (y(), je(h, {
                          key: 1,
                          size: 20
                        })) : (y(), je(f, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : D("", !0)
                  ], !0)
                ])) : D("", !0),
                l("div", gT, [
                  l("div", mT, [
                    Ie(ye(b, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: xe(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Qa, !n.nameEditable]
                    ]),
                    n.nameEditable ? Ie((y(), w("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = xe((...z) => r.onSubmitName && r.onSubmitName(...z), ["prevent"]))
                    }, [
                      Ie(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = nt(xe((...z) => r.onDismissEditing && r.onDismissEditing(...z), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...z) => r.onNameInput && r.onNameInput(...z))
                      }, null, 40, bT), [
                        [F]
                      ]),
                      ye(c, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Re(() => [
                          ye(C, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : D("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (y(), je(k, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Re(() => [
                        Me(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : D("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (y(), w("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Me(e.$slots, "subname", {}, () => [
                      Te(v(n.subname), 1)
                    ], !0)
                  ], 8, yT)) : D("", !0)
                ])
              ], 2)
            ])
          ], !0),
          ye(c, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: xe(r.closeSidebar, ["prevent"])
          }, {
            icon: Re(() => [
              ye(N, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (y(), w("div", _T, [
            Me(e.$slots, "description", {}, void 0, !0)
          ])) : D("", !0)
        ], 2),
        Ie(ye(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Re(() => [
            Me(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Qa, !n.loading]
        ]),
        n.loading ? (y(), je(O, { key: 1 }, {
          icon: Re(() => [
            ye(u, { size: 64 })
          ]),
          _: 1
        })) : D("", !0)
      ], 40, hT), [
        [Qa, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const ST = /* @__PURE__ */ Qe(fT, [["render", wT], ["__scopeId", "data-v-c2c6820b"]]), CT = {
  name: "NcActionLink",
  mixins: [Rv],
  inject: {
    isInSemanticMenu: {
      from: Xu,
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
}, TT = ["role"], ET = ["download", "href", "aria-label", "target", "title", "role"], kT = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, AT = { class: "action-link__name" }, xT = ["textContent"], OT = ["textContent"], NT = {
  key: 2,
  class: "action-link__text"
};
function LT(e, t, n, i, a, r) {
  return y(), w("li", {
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
          class: Ee(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: vn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (y(), w("span", kT, [
        l("strong", AT, v(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: v(e.text)
        }, null, 8, xT)
      ])) : e.isLongText ? (y(), w("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: v(e.text)
      }, null, 8, OT)) : (y(), w("span", NT, v(e.text), 1)),
      D("", !0)
    ], 8, ET)
  ], 8, TT);
}
const Ka = /* @__PURE__ */ Qe(CT, [["render", LT], ["__scopeId", "data-v-32f01b7a"]]);
Zi(e1);
const RT = `<!--
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
`, IT = `<!--
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
`, PT = { class: "vue-skip-actions__container" }, $T = { class: "vue-skip-actions__headline" }, FT = { class: "vue-skip-actions__buttons" }, DT = /* @__PURE__ */ It({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    _n(Av, c), _n(xv, "#content-vue"), _n("appName", H(() => t.appName));
    const n = Ro(), i = /* @__PURE__ */ we(!1), a = /* @__PURE__ */ we(), r = H(() => a.value === "navigation" ? IT : RT);
    _p(() => {
      const u = document.getElementById("skip-actions");
      u && (u.innerHTML = "", u.classList.add("vue-skip-actions"));
    });
    function o() {
      pi("toggle-navigation", { open: !0 }), Qt(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(u) {
      i.value = u, a.value || (a.value = "navigation");
    }
    return (u, h) => (y(), w("div", {
      id: "content-vue",
      class: Ee(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Ji) }]])
    }, [
      (y(), je(fp, { to: "#skip-actions" }, [
        l("div", PT, [
          l("div", $T, v(g(Ct)("Keyboard navigation help")), 1),
          l("div", FT, [
            Ie(ye(Wn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: xe(o, ["prevent"]),
              onFocusin: h[0] || (h[0] = (f) => a.value = "navigation"),
              onMouseover: h[1] || (h[1] = (f) => a.value = "navigation")
            }, {
              default: Re(() => [
                Te(v(g(Ct)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Qa, i.value]
            ]),
            ye(Wn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: h[2] || (h[2] = (f) => a.value = "content"),
              onMouseover: h[3] || (h[3] = (f) => a.value = "content")
            }, {
              default: Re(() => [
                Te(v(g(Ct)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Ie(ye(Dl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Qa, !g(n)]
          ])
        ])
      ])),
      Me(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), MT = /* @__PURE__ */ Qe(DT, [["__scopeId", "data-v-d13dcb98"]]), zT = { class: "library-shelf-tree-node" }, UT = ["aria-expanded", "aria-label"], jT = ["href"], BT = { class: "library-shelf-summary-title" }, HT = { dir: "auto" }, VT = { class: "library-muted" }, KT = { dir: "auto" }, GT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, WT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, qT = {
  key: 3,
  class: "library-shelf-tree"
}, YT = ["disabled"], XT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ we(!1), i = /* @__PURE__ */ we(!1), a = /* @__PURE__ */ we(!1), r = /* @__PURE__ */ we(!1), o = /* @__PURE__ */ we([]), c = /* @__PURE__ */ we(!1), u = /* @__PURE__ */ we(0);
    async function h() {
      n.value = !n.value, !(!n.value || i.value || a.value) && await f();
    }
    async function f() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const b = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(u.value) }), C = await fetch(`${t.childrenUrl}?${b}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!C.ok) throw new Error("Shelf children request failed");
          const k = await C.json(), N = Array.isArray(k?.nodes) ? k.nodes : [];
          o.value.push(...N), c.value = k?.hasMore === !0, u.value = Number.isInteger(k?.nextOffset) ? k.nextOffset : o.value.length, i.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (b, C) => {
      const k = Be("ShelfTreeNode", !0);
      return y(), w("li", zT, [
        e.node.hasChildren ? (y(), w("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(m)("library", "Collapse {folder}", { folder: e.node.label }) : g(m)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: h
        }, v(n.value ? "−" : "+"), 9, UT)) : D("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", BT, [
            l("strong", null, [
              l("bdi", HT, v(e.node.label), 1)
            ]),
            l("span", null, v(g(dn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", VT, [
            l("bdi", KT, v(e.node.path), 1)
          ])
        ], 8, jT),
        a.value ? (y(), w("small", GT, v(g(m)("library", "Loading folders…")), 1)) : r.value ? (y(), w("small", WT, v(g(m)("library", "Could not load folders.")), 1)) : D("", !0),
        n.value && o.value.length ? (y(), w("ul", qT, [
          (y(!0), w(ae, null, Ce(o.value, (N) => (y(), je(k, {
            key: N.id,
            node: N,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : D("", !0),
        n.value && c.value ? (y(), w("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: f
        }, v(g(m)("library", "Load more folders")), 9, YT)) : D("", !0)
      ]);
    };
  }
}, ZT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, JT = { id: "library-sidebar-filters-heading" }, QT = ["aria-label"], eE = ["value"], tE = ["name", "value"], nE = ["value"], iE = ["value"], aE = ["title"], rE = ["placeholder"], oE = { value: "" }, sE = ["value"], lE = { class: "library-publisher-filter" }, cE = { for: "library-publisher-search" }, uE = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], dE = ["value"], fE = {
  key: 0,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, hE = ["id", "aria-selected"], pE = ["onClick"], vE = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, gE = { class: "library-publication-filter" }, mE = { for: "library-publication-search" }, bE = ["placeholder", "aria-expanded"], yE = ["value"], _E = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, wE = ["onClick"], SE = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, CE = { class: "library-year-filter" }, TE = { for: "library-year-search" }, EE = ["placeholder", "aria-expanded"], kE = ["value"], AE = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, xE = ["onClick"], OE = {
  type: "submit",
  class: "button secondary library-year-apply"
}, NE = { class: "library-creator-filter" }, LE = { for: "library-creator-search" }, RE = ["placeholder", "title", "aria-expanded"], IE = ["value"], PE = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, $E = ["onClick"], FE = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, DE = { class: "library-tag-filter" }, ME = { for: "library-tag-search" }, zE = ["placeholder", "aria-expanded"], UE = ["value"], jE = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, BE = ["onClick"], HE = {
  type: "submit",
  class: "button secondary library-tag-apply"
}, VE = { value: "" }, KE = ["value"], GE = { value: "" }, WE = ["value"], qE = { class: "library-folder-filter" }, YE = { for: "library-folder-search" }, XE = ["placeholder", "title", "aria-expanded"], ZE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, JE = ["onClick"], QE = {
  type: "submit",
  class: "button secondary library-folder-apply"
}, ek = { value: "" }, tk = ["value"], nk = { value: "" }, ik = ["value"], ak = { class: "library-subject-filter" }, rk = { for: "library-subject-search" }, ok = ["placeholder", "title", "aria-expanded"], sk = ["value"], lk = {
  key: 0,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, ck = ["onClick"], uk = { class: "library-classification-filter" }, dk = { for: "library-classification-search" }, fk = ["placeholder", "title", "aria-expanded"], hk = ["value"], pk = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, vk = ["onClick"], gk = {
  type: "submit",
  class: "button secondary library-classification-apply"
}, mk = { value: "" }, bk = { value: "1" }, yk = {
  type: "submit",
  class: "button primary"
}, _k = ["href"], wk = ["href"], Sk = ["lang", "dir"], Ck = ["aria-label"], Tk = ["href", "aria-label", "title", "onClick"], Ek = ["title"], kk = ["href"], Ak = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, xk = { class: "library-review-header" }, Ok = { class: "library-muted library-catalogue-eyebrow" }, Nk = { id: "library-review-heading" }, Lk = ["aria-label"], Rk = ["href", "aria-current", "onClick"], Ik = ["aria-label"], Pk = ["name", "value"], $k = {
  type: "submit",
  class: "button secondary"
}, Fk = ["aria-busy"], Dk = { key: 0 }, Mk = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, zk = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, Uk = { class: "library-metadata-review-workbench-copy" }, jk = { class: "library-muted library-catalogue-eyebrow" }, Bk = ["title"], Hk = {
  key: 0,
  class: "library-metadata-review-card"
}, Vk = {
  class: "library-bidi-human",
  dir: "auto"
}, Kk = { class: "library-muted" }, Gk = {
  class: "library-bidi-machine",
  dir: "ltr"
}, Wk = { class: "library-metadata-review-fields" }, qk = {
  class: "library-bidi-human",
  dir: "auto"
}, Yk = {
  class: "library-bidi-human",
  dir: "auto"
}, Xk = {
  class: "library-bidi-human",
  dir: "auto"
}, Zk = {
  class: "library-bidi-machine",
  dir: "ltr"
}, Jk = {
  class: "library-bidi-human",
  dir: "auto"
}, Qk = {
  class: "library-bidi-human",
  dir: "auto"
}, eA = ["action"], tA = ["value"], nA = ["value"], iA = {
  type: "submit",
  class: "button secondary"
}, aA = { class: "library-metadata-review-actions" }, rA = ["href"], oA = ["href"], sA = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, lA = ["href"], cA = ["aria-label"], uA = ["onClick"], dA = {
  class: "library-bidi-human",
  dir: "auto"
}, fA = {
  key: 0,
  class: "library-muted"
}, hA = {
  class: "library-bidi-human",
  dir: "auto"
}, pA = {
  key: 1,
  class: "library-scan-error"
}, vA = {
  class: "library-bidi-human",
  dir: "auto"
}, gA = ["onClick"], mA = ["href"], bA = ["aria-label"], yA = ["href"], _A = {
  key: 1,
  class: "library-muted"
}, wA = { key: 0 }, SA = ["href"], CA = {
  key: 3,
  class: "library-muted"
}, TA = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, EA = { class: "library-home-header" }, kA = { class: "library-muted library-catalogue-eyebrow" }, AA = { id: "library-home-heading" }, xA = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, OA = { id: "library-continue-heading" }, NA = { class: "library-muted" }, LA = ["href"], RA = {
  key: 0,
  class: "library-home-card-row"
}, IA = ["aria-label", "onClick"], PA = { class: "library-cover-frame" }, $A = ["src"], FA = { class: "library-cover-summary" }, DA = ["onClick"], MA = { dir: "auto" }, zA = {
  key: 0,
  class: "library-cover-creator"
}, UA = { dir: "auto" }, jA = ["href"], BA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, HA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, VA = { id: "library-recent-heading" }, KA = { class: "library-muted" }, GA = ["href"], WA = {
  key: 0,
  class: "library-home-card-row"
}, qA = ["aria-label", "onClick"], YA = { class: "library-cover-frame" }, XA = ["src"], ZA = { class: "library-cover-summary" }, JA = ["onClick"], QA = { dir: "auto" }, e2 = {
  key: 0,
  class: "library-cover-creator"
}, t2 = { dir: "auto" }, n2 = ["href"], i2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, a2 = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, r2 = { id: "library-home-shelves-heading" }, o2 = { class: "library-muted" }, s2 = ["href"], l2 = ["aria-label"], c2 = ["href"], u2 = { dir: "auto" }, d2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, f2 = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, h2 = { id: "library-home-attention-heading" }, p2 = { class: "library-muted" }, v2 = ["href"], g2 = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, m2 = { class: "library-home-header" }, b2 = { class: "library-muted library-catalogue-eyebrow" }, y2 = { id: "library-shelves-landing-heading" }, _2 = { class: "library-muted" }, w2 = ["aria-label"], S2 = { class: "library-shelf-tree" }, C2 = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, T2 = { class: "library-muted" }, E2 = { class: "library-empty-actions" }, k2 = ["href"], A2 = ["href"], x2 = ["aria-busy"], O2 = { class: "library-catalogue-header" }, N2 = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, L2 = ["aria-label"], R2 = { class: "library-mobile-filter-count" }, I2 = ["aria-label"], P2 = ["value"], $2 = ["name", "value"], F2 = { class: "library-mobile-filter-group" }, D2 = { class: "library-quick-filter-search" }, M2 = ["placeholder"], z2 = { value: "" }, U2 = ["value"], j2 = { class: "library-publisher-filter" }, B2 = { for: "library-mobile-publisher-search" }, H2 = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], V2 = ["value"], K2 = {
  key: 0,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, G2 = ["id", "aria-selected"], W2 = ["onClick"], q2 = { class: "library-publication-filter" }, Y2 = { for: "library-mobile-publication-search" }, X2 = ["placeholder", "aria-expanded"], Z2 = ["value"], J2 = {
  key: 0,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, Q2 = ["onClick"], ex = { class: "library-year-filter" }, tx = { for: "library-mobile-year-search" }, nx = ["placeholder", "aria-expanded"], ix = ["value"], ax = {
  key: 0,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, rx = ["onClick"], ox = { class: "library-creator-filter" }, sx = { for: "library-mobile-creator-search" }, lx = ["placeholder", "title", "aria-expanded"], cx = ["value"], ux = {
  key: 0,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, dx = ["onClick"], fx = { value: "" }, hx = ["value"], px = { class: "library-subject-filter" }, vx = { for: "library-mobile-subject-search" }, gx = ["placeholder", "title", "aria-expanded"], mx = ["value"], bx = {
  key: 0,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, yx = ["onClick"], _x = { class: "library-classification-filter" }, wx = { for: "library-mobile-classification-search" }, Sx = ["placeholder", "title", "aria-expanded"], Cx = ["value"], Tx = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, Ex = ["onClick"], kx = { class: "library-mobile-filter-group" }, Ax = { value: "" }, xx = ["value"], Ox = { class: "library-folder-filter" }, Nx = { for: "library-mobile-folder-search" }, Lx = ["placeholder", "title", "aria-expanded"], Rx = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, Ix = ["onClick"], Px = { class: "library-mobile-filter-group" }, $x = { value: "" }, Fx = ["value"], Dx = { value: "" }, Mx = ["value"], zx = { value: "" }, Ux = { value: "1" }, jx = { class: "library-mobile-filter-group" }, Bx = { class: "library-tag-filter" }, Hx = { for: "library-tag-search" }, Vx = ["placeholder", "aria-expanded"], Kx = ["value"], Gx = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, Wx = ["onClick"], qx = {
  type: "submit",
  class: "button secondary library-tag-apply"
}, Yx = { value: "title" }, Xx = { value: "recent" }, Zx = { value: "publicationDate" }, Jx = { value: "publication" }, Qx = { value: "lastOpened" }, eO = { value: "format" }, tO = { value: "compact" }, nO = { value: "gallery" }, iO = { value: "list" }, aO = { value: "shelf" }, rO = { class: "library-mobile-filter-actions" }, oO = ["href"], sO = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, lO = ["aria-label"], cO = ["aria-label"], uO = ["name", "value"], dO = { "data-library-control": "sort" }, fO = { value: "title" }, hO = { value: "recent" }, pO = { value: "publicationDate" }, vO = { value: "publication" }, gO = { value: "lastOpened" }, mO = { value: "format" }, bO = ["aria-label"], yO = ["aria-pressed"], _O = ["aria-pressed"], wO = ["aria-pressed"], SO = ["aria-pressed"], CO = {
  id: "library-collections",
  class: "library-saved-collections"
}, TO = ["title"], EO = ["action", "title"], kO = ["value"], AO = ["value"], xO = ["placeholder", "disabled"], OO = ["disabled", "title"], NO = ["aria-label"], LO = ["href"], RO = { class: "library-saved-collection-count" }, IO = ["action"], PO = ["value"], $O = {
  type: "submit",
  class: "button tertiary"
}, FO = ["aria-label"], DO = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, MO = ["title"], zO = { class: "library-workspace-panel-purpose" }, UO = { class: "library-workspace-scope-badge" }, jO = { "aria-live": "polite" }, BO = ["action"], HO = ["value"], VO = ["placeholder"], KO = ["title"], GO = ["action"], WO = ["value"], qO = ["placeholder"], YO = ["title"], XO = ["action"], ZO = ["value"], JO = ["name", "value"], QO = ["title"], e3 = ["action"], t3 = ["value"], n3 = ["name", "value"], i3 = { name: "bulkEditField" }, a3 = { value: "publicationType" }, r3 = { value: "subtitle" }, o3 = { value: "creators" }, s3 = { value: "publication" }, l3 = { value: "publicationDate" }, c3 = { value: "language" }, u3 = { value: "publisher" }, d3 = { value: "subjects" }, f3 = { value: "classifications" }, h3 = ["placeholder"], p3 = ["title"], v3 = ["action"], g3 = ["value"], m3 = ["name", "value"], b3 = ["title"], y3 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, _3 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, w3 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, S3 = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, C3 = { key: 0 }, T3 = { key: 1 }, E3 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, k3 = { class: "library-muted library-catalogue-eyebrow" }, A3 = ["title"], x3 = ["aria-label"], O3 = { key: 0 }, N3 = { key: 1 }, L3 = { key: 2 }, R3 = ["aria-label"], I3 = { key: 0 }, P3 = { key: 1 }, $3 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, F3 = { class: "library-muted library-catalogue-eyebrow" }, D3 = ["title"], M3 = ["aria-label"], z3 = ["href"], U3 = {
  key: 0,
  class: "library-notice"
}, j3 = { class: "library-publication-issue-label" }, B3 = ["href"], H3 = { class: "library-muted" }, V3 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, K3 = ["title"], G3 = ["href"], W3 = { class: "library-catalogue-status-row" }, q3 = { class: "library-muted library-filter-result-summary" }, Y3 = { key: 0 }, X3 = ["href"], Z3 = ["aria-label"], J3 = { class: "library-pagination-range" }, Q3 = { key: 0 }, eN = ["href"], tN = {
  key: 1,
  class: "library-muted"
}, nN = ["href"], iN = {
  key: 3,
  class: "library-muted"
}, aN = ["title"], rN = { class: "library-empty-actions" }, oN = ["href"], sN = { class: "library-muted" }, lN = ["title"], cN = { class: "library-empty-actions" }, uN = ["href"], dN = ["title"], fN = { class: "library-empty-actions" }, hN = ["href"], pN = ["href"], vN = ["title"], gN = { class: "library-empty-actions" }, mN = ["href"], bN = {
  key: 5,
  class: "library-select-visible"
}, yN = ["checked"], _N = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, wN = { class: "library-item-selection" }, SN = ["checked", "aria-label", "onChange"], CN = { class: "library-catalogue-list-main" }, TN = ["onClick"], EN = {
  class: "library-bidi-human",
  dir: "auto"
}, kN = {
  key: 0,
  class: "library-muted"
}, AN = {
  class: "library-bidi-human",
  dir: "auto"
}, xN = { class: "library-catalogue-list-metadata" }, ON = { key: 0 }, NN = {
  class: "library-bidi-human",
  dir: "auto"
}, LN = { key: 1 }, RN = { key: 2 }, IN = ["dir"], PN = { key: 3 }, $N = {
  class: "library-bidi-human",
  dir: "auto"
}, FN = { class: "library-catalogue-list-actions" }, DN = ["href"], MN = ["onClick"], zN = { class: "library-item-selection" }, UN = ["checked", "aria-label", "onChange"], jN = ["aria-labelledby", "aria-expanded", "onClick"], BN = ["id"], HN = { class: "library-cover-frame" }, VN = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, KN = ["src", "onLoad", "onError"], GN = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, WN = ["action", "onSubmit"], qN = ["value"], YN = ["value"], XN = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], ZN = ["data-library-star-error"], JN = { class: "library-cover-summary" }, QN = { class: "library-cover-primary" }, eL = ["id"], tL = ["onClick"], nL = {
  class: "library-bidi-human",
  dir: "auto"
}, iL = {
  key: 0,
  class: "library-cover-creator"
}, aL = {
  class: "library-bidi-human",
  dir: "auto"
}, rL = {
  key: 1,
  class: "library-cover-badges"
}, oL = {
  key: 0,
  class: "library-cover-badge"
}, sL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, lL = {
  key: 1,
  class: "library-cover-context"
}, cL = {
  class: "library-bidi-human",
  dir: "auto"
}, uL = { class: "library-cover-primary-actions" }, dL = ["href"], fL = ["aria-label"], hL = { class: "library-pagination-range" }, pL = { key: 0 }, vL = ["href"], gL = {
  key: 1,
  class: "library-muted"
}, mL = ["href"], bL = {
  key: 3,
  class: "library-muted"
}, yL = { class: "library-sidebar-content" }, _L = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, wL = ["role"], SL = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, CL = { class: "library-sidebar-publication-header" }, TL = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, EL = ["src"], kL = { class: "library-sidebar-publication-summary" }, AL = { class: "library-muted library-catalogue-eyebrow" }, xL = {
  class: "library-bidi-human",
  dir: "auto"
}, OL = { key: 0 }, NL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, LL = { class: "library-detail-drawer-actions" }, RL = ["href"], IL = ["aria-label"], PL = ["aria-current", "onClick"], $L = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, FL = { id: "library-sidebar-overview-heading" }, DL = {
  key: 0,
  class: "library-sidebar-description"
}, ML = {
  class: "library-bidi-human",
  dir: "auto"
}, zL = { class: "library-detail-drawer-facts" }, UL = { key: 0 }, jL = { key: 1 }, BL = { key: 2 }, HL = { key: 3 }, VL = { key: 4 }, KL = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, GL = { id: "library-sidebar-metadata-heading" }, WL = ["placeholder"], qL = ["onUpdate:modelValue", "aria-label", "placeholder"], YL = ["onUpdate:modelValue", "aria-label"], XL = ["onClick"], ZL = { class: "library-muted" }, JL = {
  key: 0,
  role: "alert"
}, QL = {
  key: 1,
  role: "status"
}, eR = ["disabled"], tR = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, nR = { id: "library-sidebar-suggestions-heading" }, iR = { class: "library-muted" }, aR = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, rR = { id: "library-sidebar-activity-heading" }, oR = { class: "library-detail-drawer-facts" }, sR = { key: 0 }, lR = { key: 1 }, cR = { key: 2 }, uR = { class: "library-detail-drawer-file" }, dR = ["href"], fR = { dir: "ltr" }, hR = {
  key: 1,
  dir: "ltr"
}, pR = ["aria-label"], vR = ["disabled"], gR = ["disabled"], mR = 20, bR = "/apps/library", yR = 2147483647, _R = {
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
        const P = [...new Set([...d.keys()].filter((Ae) => Ae === s || Ae.startsWith(`${s}[`)))], te = P.reduce((Ae, De) => Ae + d.getAll(De).length, 0);
        if (te > 1 || P.some((Ae) => Ae !== s)) {
          for (const Ae of P) d.delete(Ae);
          continue;
        }
        s !== "status" && te === 1 && !r(s, d.get(s)) && d.delete(s);
      }
      return d;
    }
    function c(p) {
      return Object.keys(a).some((d) => p.getAll(d).length === 1 && r(d, p.get(d)));
    }
    function u(p) {
      return Object.fromEntries(Object.entries(p || {}).filter(([d, s]) => d === "status" || !Object.prototype.hasOwnProperty.call(a, d) || r(d, s)));
    }
    const h = /* @__PURE__ */ Ot({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), f = /* @__PURE__ */ Ot((h.items || []).map((p) => ({ ...p }))), b = H(() => f), C = H(() => h.shelves || []), k = H(() => h.formats || []), N = H(() => h.publicationTypes?.length ? h.publicationTypes : n), A = H(() => h.publications || []), O = H(() => h.publicationIssueContext || null), F = H(() => h.scanStatuses || []), M = H(() => h.workflowStatuses || []), z = H(() => h.cataloguePagination || {
      page: 1,
      limit: 100,
      total: b.value.length,
      visible: b.value.length,
      from: b.value.length > 0 ? 1 : 0,
      to: b.value.length,
      previousUrl: "",
      nextUrl: ""
    }), T = /* @__PURE__ */ Ot({
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
    for (const p of Object.keys(a))
      p !== "status" && (r(p, T[p]) || (T[p] = ""));
    const re = /* @__PURE__ */ we(T.publication), ue = /* @__PURE__ */ we(T.q), X = /* @__PURE__ */ we(!1), fe = /* @__PURE__ */ we(null), Y = H(() => {
      const p = re.value.trim().toLocaleLowerCase();
      return (p !== "" && fe.value !== null ? fe.value : A.value).filter((s) => p === "" || s.toLocaleLowerCase().includes(p)).slice(0, mR);
    });
    qe(() => T.publication, (p) => {
      re.value = p || "";
    }), qe(() => T.q, (p) => {
      ue.value = p || "";
    });
    let se = null, ge = null, J = 0;
    qe(re, (p) => {
      window.clearTimeout(se), ge?.abort(), ge = null, fe.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++J;
      se = window.setTimeout(() => {
        kg(d, s);
      }, 200);
    });
    const Q = /* @__PURE__ */ we(T.publisher), $ = /* @__PURE__ */ we(!1), U = /* @__PURE__ */ we(null), q = H(() => U.value || []);
    qe(() => T.publisher, (p) => {
      Q.value = p || "";
    });
    let le = null, ie = null, ve = 0;
    qe(Q, (p) => {
      window.clearTimeout(le), ie?.abort(), ie = null, U.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++ve;
      le = window.setTimeout(() => {
        _g(d, s);
      }, 200);
    });
    const de = /* @__PURE__ */ we(T.creator), be = /* @__PURE__ */ we(!1), _e = /* @__PURE__ */ we(null), Ke = H(() => _e.value || []);
    qe(() => T.creator, (p) => {
      de.value = p || "";
    });
    let Ne = null, lt = null, pt = 0;
    qe(de, (p) => {
      window.clearTimeout(Ne), lt?.abort(), lt = null, _e.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++pt;
      Ne = window.setTimeout(() => {
        yg(d, s);
      }, 200);
    });
    const it = /* @__PURE__ */ we(T.folder), ut = /* @__PURE__ */ we(!1), at = /* @__PURE__ */ we(null), Pt = H(() => at.value || []);
    qe(() => T.folder, (p) => {
      it.value = p || "";
    });
    let B = null, _ = null, E = 0;
    qe(it, (p) => {
      window.clearTimeout(B), _?.abort(), _ = null, at.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++E;
      B = window.setTimeout(() => {
        Tg(d, s);
      }, 200);
    });
    const x = /* @__PURE__ */ we(T.subject), L = /* @__PURE__ */ we(!1), R = /* @__PURE__ */ we(null), j = H(() => R.value || []);
    qe(() => T.subject, (p) => {
      x.value = p || "";
    });
    let G = null, K = null, Z = 0;
    qe(x, (p) => {
      window.clearTimeout(G), K?.abort(), K = null, R.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++Z;
      G = window.setTimeout(() => {
        wg(d, s);
      }, 200);
    });
    const V = /* @__PURE__ */ we(T.classification), he = /* @__PURE__ */ we(!1), oe = /* @__PURE__ */ we(null), pe = H(() => oe.value || []);
    qe(() => T.classification, (p) => {
      V.value = p || "";
    });
    let ke = null, Pe = null, ze = 0;
    qe(V, (p) => {
      window.clearTimeout(ke), Pe?.abort(), Pe = null, oe.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++ze;
      ke = window.setTimeout(() => {
        Sg(d, s);
      }, 200);
    });
    const $e = /* @__PURE__ */ we(T.tag), He = /* @__PURE__ */ we(!1), rt = /* @__PURE__ */ we(null), vt = H(() => rt.value || []);
    qe(() => T.tag, (p) => {
      $e.value = p || "";
    });
    let Et = null, $t = null, kn = 0;
    qe($e, (p) => {
      window.clearTimeout(Et), $t?.abort(), $t = null, rt.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++kn;
      Et = window.setTimeout(() => {
        Cg(d, s);
      }, 200);
    });
    const et = /* @__PURE__ */ we(T.year), dt = /* @__PURE__ */ we(!1), Fn = /* @__PURE__ */ we(null), gn = H(() => Fn.value || []);
    qe(() => T.year, (p) => {
      et.value = p || "";
    });
    let Qi = null, wi = null, Dn = 0;
    qe(et, (p) => {
      window.clearTimeout(Qi), wi?.abort(), wi = null, Fn.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++Dn;
      Qi = window.setTimeout(() => {
        Eg(d, s);
      }, 200);
    });
    const Xn = Object.fromEntries(Object.keys(T).map((p) => [p, p === "sort" ? "title" : p === "view" ? "compact" : ""])), rr = window.location.pathname.indexOf(bR), Zn = rr >= 0 ? window.location.pathname.slice(0, rr) : "", Si = {
      catalogue: `${Zn}/apps/library/`,
      review: `${Zn}/apps/library/?scannerConflicts=1`,
      settings: `${Zn}/settings/user/library`
    };
    function Ci(p, d) {
      if (typeof p != "string" || p === "") return d;
      try {
        const s = Zn ? `${Zn}/` : "/";
        let P = p;
        for (let te = 0; te < 5; te += 1) {
          if (!P.startsWith("/") || P.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(P)) return d;
          const Ae = new URL(P, window.location.origin);
          if (Ae.origin !== window.location.origin || !Ae.pathname.startsWith(s)) return d;
          const De = P.split(/[?#]/, 1)[0];
          for (const cn of De.split("/")) {
            let Pi = cn;
            for (let Ua = 0; Ua < 5; Ua += 1) {
              const Un = decodeURIComponent(Pi);
              if (/[\\/\u0000-\u001f\u007f]/.test(Un) || Un === "." || Un === "..") return d;
              if (Un === Pi) break;
              if (Pi = Un, Ua === 4) return d;
            }
          }
          const Xe = decodeURI(P);
          if (Xe === P) return p;
          P = Xe;
        }
        return d;
      } catch {
        return d;
      }
    }
    const Ti = H(() => Ci(h.settingsUrl, Si.settings)), wt = H(() => Ci(h.catalogueRootUrl, Si.catalogue)), Pa = H(() => Ci(h.homeUrl, `${Si.catalogue}?home=1`)), on = H(() => Ci(h.shelvesUrl, `${Si.catalogue}?shelves=1`)), Ei = H(() => Ci(h.reviewUrl || h.scannerConflictReviewUrl, Si.review)), ea = H(() => Object.entries(a).some(([p, d]) => T[p] === d)), $a = H(() => i.reduce((p, d) => p + Number(lc.value[d.countKey] || 0), 0)), ta = H(() => h.surface === "home"), ki = H(() => h.surface === "shelves"), or = H(() => !ta.value && !ki.value && !ea.value && !T.starred && T.sort !== "lastOpened" && !T.shelf), Io = H(() => [
      { key: "home", name: m("library", "Home"), href: Pa.value, active: ta.value },
      { key: "all", name: m("library", "All publications"), href: wt.value, active: or.value },
      { key: "starred", name: m("library", "Starred"), href: `${wt.value}?starred=1`, active: T.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${wt.value}?sort=lastOpened`, active: T.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: on.value, active: ki.value || !!T.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${wt.value}#library-collections`, active: !1 }
    ]), tn = H(() => h.requestToken || ""), Po = H(() => h.catalogueEndpointUrl || "/apps/library/catalogue"), na = H(() => h.shelfChildrenUrl || "/apps/library/shelves/children"), Hl = H(() => h.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Vl = H(() => h.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), ht = H(() => h.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Ai = H(() => h.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Kl = H(() => h.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), $o = H(() => h.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), sr = H(() => h.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Fo = H(() => h.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Do = H(() => h.itemSidebarUrlTemplate || `${Zn}/apps/library/items/__ITEM_ID__/sidebar`), Gl = H(() => h.batchTagUrl || "/apps/library/bulk/tags"), Wl = H(() => h.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), ql = H(() => h.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Yl = H(() => h.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Mn = H(() => h.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), lr = H(() => h.scannerConflictReviewUrl || "?scannerConflicts=1");
    h.importHealthSummary, h.importHealthSummary && Object.keys(h.importHealthSummary).length > 0;
    const xi = H(() => h.discoveryPage === "publication"), An = H(() => h.discoveryPage === "year"), cr = H(() => h.discoveryPage === "creator"), Oi = H(() => xi.value || An.value || cr.value), ur = H(() => h.discoveryTitle || T.publication || T.year || T.creator || ""), Xl = H(() => Oi.value ? ur.value : m("library", "Library")), dr = H(() => cr.value ? m("library", "Creator") : An.value ? m("library", "Publication year") : m("library", "Publication / series")), fr = H(() => Number(h.rootCount || 0)), Fa = H(() => Number(h.enabledRootCount || 0)), ia = H(() => fr.value === 0), Ni = H(() => fr.value > 0 && Fa.value === 0), Jn = H(() => I.value.length > 0), Gt = /* @__PURE__ */ we(!1), sn = /* @__PURE__ */ we(null), Mo = /* @__PURE__ */ we(null), aa = {
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
    }, Zl = {
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
    }, zo = {
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
    }, hr = H(() => {
      if (typeof window > "u") return "";
      const p = new URLSearchParams(window.location.search);
      if (p.get("batchMetadataApplyResult") !== "1") return "";
      const d = p.get("batchMetadataField") || "field", s = p.get("batchMetadataApplied") || "0", P = p.get("batchMetadataUnchanged") || "0", te = p.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: d, unchanged: P, skipped: te });
    }), pr = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), vr = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Uo = H(() => h.savedCollections || []), jo = H(() => h.savedCollectionSaveUrl || "/apps/library/collections"), Jl = H(() => h.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Bo = ["compact", "gallery", "list", "shelf"], Wt = H(() => Bo.includes(T.view) ? T.view : "compact"), Da = H(() => ({
      "library-cover-gallery--compact": Wt.value === "compact",
      "library-cover-gallery--gallery": Wt.value === "gallery",
      "library-cover-gallery--shelf": Wt.value === "shelf"
    }));
    function gr(p) {
      const d = String(p || "").trim();
      if (d.length <= 32) return d;
      const s = d.split("/").filter(Boolean);
      return s.length > 0 ? `…/${s.at(-1)}` : d;
    }
    function ee(p, d) {
      const s = String(d || "").trim();
      if (s === "" || Zl[p] === s) return "";
      if (p === "format") return s.toUpperCase();
      if (p === "folder") return gr(s);
      const P = zo[p]?.[s];
      return P ? m("library", P) : s;
    }
    function S(p, d) {
      const s = String(T[p] || "").trim(), P = ee(p, s), te = m("library", d);
      return {
        key: p,
        label: te,
        value: s,
        displayValue: P,
        title: P ? `${te}: ${s}` : te
      };
    }
    const I = H(() => Object.entries(aa).map(([p, d]) => S(p, d)).filter((p) => p.value !== "" && !(p.key === "sort" && p.value === "title") && !(p.key === "view" && p.value === "compact"))), W = H(() => I.value.filter((p) => !["sort", "view"].includes(p.key))), ce = H(() => I.value.length), me = H(() => ce.value > 0 ? m("library", "Filters ({count})", { count: ce.value }) : m("library", "Filters")), Le = H(() => ce.value > 0 ? m("library", "Open filters panel; {count} active filters", { count: ce.value }) : m("library", "Open filters panel")), tt = H(() => dn("library", "Show %n item", "Show %n items", Number(z.value.total || 0)));
    function ct(p) {
      Gt.value = p.currentTarget?.open === !0, Gt.value && Qt(() => {
        sn.value?.focus?.();
      });
    }
    const Ft = /* @__PURE__ */ new Set([
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
    ]), kt = H(() => Object.entries(u(T)).filter(([p, d]) => !Ft.has(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), mr = H(() => Object.entries(T).filter(([p, d]) => !["q", "sort", "starred"].includes(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), mt = H(() => Object.entries(u(T)).filter(([p, d]) => String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), sg = H(() => mt.value.filter(({ key: p, value: d }) => p !== "q" && !(p === "sort" && d === "title"))), Ql = /* @__PURE__ */ Ot({}), Ho = H(() => h.homeRows || { continueReading: [], recentlyAdded: [] }), ud = H(() => h.homeShelves || []), dd = H(() => h.shelfTree || []), ec = H(() => h.needsAttention || { count: 0, url: `${wt.value}?needsMetadata=1` }), xn = /* @__PURE__ */ we([]), Vo = H(() => new Set(xn.value));
    function fd(p, d) {
      const s = new Set(xn.value);
      d ? s.add(Number(p)) : s.delete(Number(p)), xn.value = [...s];
    }
    function lg(p) {
      xn.value = p.currentTarget.checked ? b.value.map((d) => Number(d.id)) : [];
    }
    function cg() {
      const p = new Set(b.value.map((d) => Number(d.id)));
      xn.value = xn.value.filter((d) => p.has(d));
    }
    function ug(p) {
      const d = p.target;
      if (d instanceof HTMLFormElement) {
        d.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of xn.value) {
          const P = document.createElement("input");
          P.type = "hidden", P.name = "itemIds[]", P.value = String(s), P.dataset.librarySelectedId = "1", d.appendChild(P);
        }
      }
    }
    const Oe = /* @__PURE__ */ we(null), ra = /* @__PURE__ */ we(null), qt = /* @__PURE__ */ Ot({ loading: !1, error: "", missing: !1 }), oa = /* @__PURE__ */ we("overview"), On = /* @__PURE__ */ Ot({ saving: !1, saved: !1, error: "" }), Dt = /* @__PURE__ */ Ot({ title: "", publicationDate: "", identifiers: [] }), hd = /* @__PURE__ */ we(null), sa = /* @__PURE__ */ we(null), la = /* @__PURE__ */ we(!1);
    let tc = null, Qn = null, Ko = null, nc = !1, br = null, ic = 0;
    const Li = H(() => ra.value !== null), yr = H(() => Oe.value ? b.value.findIndex((p) => p.id === Oe.value.id) : -1), Go = H(() => yr.value > 0 ? b.value[yr.value - 1] : null), Wo = H(() => yr.value >= 0 && yr.value < b.value.length - 1 ? b.value[yr.value + 1] : null), dg = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], fg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function qo(p) {
      const d = String(p ?? "").trim(), s = d.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return s ? s[1] : d;
    }
    function pd(p) {
      return { ...p, publicationDate: qo(p?.publicationDate) };
    }
    function vd(p) {
      Dt.title = String(p?.title || ""), Dt.publicationDate = qo(p?.publicationDate), Dt.identifiers = Array.isArray(p?.identifiers) ? p.identifiers.map((d) => ({ scheme: String(d?.scheme || ""), displayValue: String(d?.displayValue || d?.value || "") })) : [], Object.assign(On, { saving: !1, saved: !1, error: "" });
    }
    function hg() {
      Dt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function pg(p) {
      Dt.identifiers.splice(p, 1);
    }
    async function vg() {
      const p = Oe.value;
      if (!p?.updateUrl || On.saving) return;
      Object.assign(On, { saving: !0, saved: !1, error: "" });
      const d = new FormData();
      d.set("requesttoken", tn.value), d.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const P = p[s];
        d.set(s, Array.isArray(P) ? P.join(", ") : String(P ?? ""));
      }
      d.set("title", Dt.title), d.set("publicationDate", qo(Dt.publicationDate)), Dt.identifiers.forEach((s, P) => {
        d.set(`identifiers[${P}][scheme]`, s.scheme), d.set(`identifiers[${P}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(p.updateUrl, { method: "POST", body: d, credentials: "same-origin", headers: { Accept: "application/json" } }), P = await s.json().catch(() => ({}));
        if (!s.ok || P.saved !== !0) throw new Error(P.error || m("library", "Metadata could not be saved."));
        p.title = Dt.title.trim(), p.publicationDate = qo(Dt.publicationDate), p.identifiers = Dt.identifiers.filter((Ae) => Ae.scheme.trim() || Ae.displayValue.trim()).map((Ae) => ({ ...Ae }));
        const te = b.value.find((Ae) => Number(Ae.id) === Number(p.id));
        te && (te.title = p.title, te.publicationDate = p.publicationDate), On.saved = !0;
      } catch (s) {
        On.error = s?.message || m("library", "Metadata could not be saved.");
      } finally {
        On.saving = !1;
      }
    }
    const Ri = H(() => {
      const p = r("scannerConflicts", T.scannerConflicts) || r("weakMetadata", T.weakMetadata), d = p ? b.value.find((s) => Yo(s).length > 0) : null;
      return {
        enabled: p,
        item: d,
        fields: d ? Yo(d) : [],
        reviewNextUrl: lr.value,
        skipUrl: z.value.nextUrl || lr.value
      };
    }), gg = H(() => i.map((p) => ({
      ...p,
      label: m("library", p.label),
      href: `${wt.value}?${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`,
      active: String(T[p.key] || "") === p.value
    })));
    function ac(p) {
      return Array.isArray(p) ? JSON.stringify(p) : p == null ? "" : String(p);
    }
    function Yo(p) {
      const d = p.fieldValues || {}, s = p.fieldSources || {};
      return dg.filter((P) => Object.prototype.hasOwnProperty.call(d, P)).map((P) => {
        const te = ac(p[P]), Ae = ac(d[P]), De = ac(s[P] || p.metadataSource || "scanner"), Xe = De.includes("filename") || De.includes("path") ? Ae : "", cn = De.includes("sidecar") ? Ae : "";
        return { field: P, currentValue: te, scannerCandidate: Ae, pathTemplateCandidate: Xe, sidecarValue: cn, sourceProvenance: De, differs: te !== Ae };
      }).filter((P) => P.differs);
    }
    let ca = 0, ua = null;
    function gd() {
      const p = new URLSearchParams(window.location.search).getAll("item");
      if (p.length !== 1 || !/^[1-9][0-9]*$/.test(p[0])) return null;
      const d = Number(p[0]);
      return Number.isSafeInteger(d) && d <= yR ? d : null;
    }
    function md(p, d = "push") {
      const s = new URL(window.location.href);
      s.searchParams.delete("item"), p !== null && s.searchParams.set("item", String(p)), history[`${d}State`]({}, "", `${s.pathname}${s.search}${s.hash}`);
    }
    async function _r(p, { historyMode: d = "push", seed: s = null } = {}) {
      ua?.abort();
      const P = ++ca, te = new AbortController();
      ua = te, ra.value = p, oa.value = "overview", Oe.value = s && Number(s.id) === p ? pd(s) : null, Oe.value && vd(Oe.value), Object.assign(qt, { loading: !0, error: "", missing: !1 }), d !== "none" && md(p, d);
      try {
        const Ae = Do.value.replace("__ITEM_ID__", encodeURIComponent(String(p))), De = await fetch(Ae, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: te.signal });
        if (P !== ca) return;
        if (!De.ok) {
          Oe.value = null, qt.missing = De.status === 404, qt.error = De.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const Xe = await De.json();
        if (P !== ca) return;
        if (typeof Xe?.item?.id != "number" || !Number.isSafeInteger(Xe.item.id) || Xe.item.id !== p) {
          Oe.value = null, qt.missing = !1, qt.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        Oe.value = pd(Xe.item), vd(Oe.value), await Qt();
      } catch (Ae) {
        P === ca && Ae?.name !== "AbortError" && (Oe.value = null, qt.missing = !1, qt.error = m("library", "Could not load publication details. Try again."));
      } finally {
        P === ca && (qt.loading = !1, ua = null);
      }
    }
    function zn(p, d) {
      rc(), tc = d?.currentTarget instanceof HTMLElement ? d.currentTarget : null, _r(Number(p.id), { seed: p });
    }
    function Xo({ historyMode: p = "push", restoreFocus: d = !0 } = {}) {
      Ko = d ? tc : null, tc = null, ua?.abort(), ua = null, ca += 1, ra.value = null, Oe.value = null, oa.value = "overview", Object.assign(qt, { loading: !1, error: "", missing: !1 }), p !== "none" && md(null, p);
    }
    function bd() {
      la.value ? (sa.value?.$refs?.sidebar || sa.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : hd.value?.focus();
    }
    function mg() {
      const p = Ko;
      if (Ko = null, rc(), nc || !p?.isConnected) return;
      const d = ic;
      br = window.requestAnimationFrame(() => {
        br = null, !(d !== ic || nc || Li.value || !p.isConnected) && p.focus();
      });
    }
    function rc() {
      ic += 1, br !== null && (window.cancelAnimationFrame(br), br = null);
    }
    function wr(p = Qn) {
      la.value = !!p?.matches, Li.value && Qt(bd);
    }
    function Zo(p) {
      p && _r(Number(p.id), { seed: p });
    }
    const Sr = /* @__PURE__ */ we(null);
    let nn = 0, Ma = null, Jo = null, Cr = null;
    const At = /* @__PURE__ */ Ot({ loading: !1, error: "", completed: !1 });
    function bg(p) {
      const d = o(new FormData(p));
      d.delete("publicationSearch"), d.delete("creatorSearch"), d.delete("subjectSearch"), d.delete("publisherSearch"), d.delete("classificationSearch"), d.delete("tagSearch"), d.delete("folderSearch"), d.delete("yearSearch");
      for (const s of Array.from(d.keys()))
        String(d.get(s) || "").trim() === "" && d.delete(s);
      return d.delete("page"), d.get("view") === "compact" && d.delete("view"), d.get("sort") === "title" && d.delete("sort"), d;
    }
    async function da(p, d, s) {
      const P = new URLSearchParams();
      for (const [De, Xe] of Object.entries(T)) {
        const cn = String(Xe || "").trim();
        De !== p && cn !== "" && !(De === "sort" && cn === "title") && !(De === "view" && cn === "compact") && P.set(De, cn);
      }
      P.set(`${p}Search`, d);
      const te = new AbortController();
      p === "creator" ? lt = te : p === "publisher" ? ie = te : p === "subject" ? K = te : p === "classification" ? Pe = te : p === "tag" ? $t = te : p === "folder" ? _ = te : wi = te;
      const Ae = p === "creator" ? Vl.value : p === "publisher" ? ht.value : p === "subject" ? Ai.value : p === "classification" ? Kl.value : p === "tag" ? $o.value : p === "folder" ? sr.value : Fo.value;
      try {
        const De = await fetch(`${Ae}?${P}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: te.signal });
        if (!De.ok) throw new Error(`${p} suggestions request failed: ${De.status}`);
        const Xe = await De.json(), cn = p === "creator" ? pt : p === "publisher" ? ve : p === "subject" ? Z : p === "classification" ? ze : p === "tag" ? kn : p === "folder" ? E : Dn, Pi = p === "creator" ? de.value : p === "publisher" ? Q.value : p === "subject" ? x.value : p === "classification" ? V.value : p === "tag" ? $e.value : p === "folder" ? it.value : et.value;
        s === cn && Pi.trim() === d && (p === "creator" ? _e.value = Array.isArray(Xe.creators) ? Xe.creators : [] : p === "publisher" ? U.value = Array.isArray(Xe.publishers) ? Xe.publishers : [] : p === "subject" ? R.value = Array.isArray(Xe.subjects) ? Xe.subjects : [] : p === "classification" ? oe.value = Array.isArray(Xe.classifications) ? Xe.classifications : [] : p === "tag" ? rt.value = Array.isArray(Xe.tags) ? Xe.tags : [] : p === "folder" ? at.value = Array.isArray(Xe.folders) ? Xe.folders : [] : Fn.value = Array.isArray(Xe.years) ? Xe.years : []);
      } catch (De) {
        De?.name !== "AbortError" && (p === "creator" && s === pt && (_e.value = null), p === "publisher" && s === ve && (U.value = null), p === "subject" && s === Z && (R.value = null), p === "classification" && s === ze && (oe.value = null), p === "tag" && s === kn && (rt.value = null), p === "folder" && s === E && (at.value = null), p === "year" && s === Dn && (Fn.value = null));
      }
    }
    function yg(p, d) {
      return da("creator", p, d);
    }
    function _g(p, d) {
      return da("publisher", p, d);
    }
    function wg(p, d) {
      return da("subject", p, d);
    }
    function Sg(p, d) {
      return da("classification", p, d);
    }
    function Cg(p, d) {
      return da("tag", p, d);
    }
    function Tg(p, d) {
      return da("folder", p, d);
    }
    function Eg(p, d) {
      return da("year", p, d);
    }
    async function kg(p, d) {
      const s = new URLSearchParams();
      for (const [te, Ae] of Object.entries(T)) {
        const De = String(Ae || "").trim();
        te !== "publication" && De !== "" && !(te === "sort" && De === "title") && !(te === "view" && De === "compact") && s.set(te, De);
      }
      s.set("publicationSearch", p);
      const P = new AbortController();
      ge = P;
      try {
        const te = await fetch(`${Hl.value}?${s}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: P.signal
        });
        if (!te.ok) throw new Error(`Publication suggestions request failed: ${te.status}`);
        const Ae = await te.json();
        d === J && re.value.trim() === p && (fe.value = Array.isArray(Ae.publications) ? Ae.publications : []);
      } catch (te) {
        te?.name !== "AbortError" && d === J && (fe.value = null);
      } finally {
        d === J && (ge = null);
      }
    }
    function Ag(p) {
      f.splice(0, f.length, ...(p.items || []).map((s) => ({ ...s }))), cg();
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
        !d.has(s) && Object.prototype.hasOwnProperty.call(p, s) && (h[s] = p[s]);
      Object.assign(T, Xn, p.activeFilters || {});
    }
    async function xg() {
      if (h.surface !== "index") return;
      const p = nn, d = JSON.stringify({ ...T }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [te, Ae] of Object.entries(T)) {
        const De = String(Ae || "").trim();
        De !== "" && !(te === "sort" && De === "title") && !(te === "view" && De === "compact") && s.set(te, De);
      }
      const P = new AbortController();
      Jo = P;
      try {
        const te = await fetch(`${Po.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: P.signal
        });
        if (!te.ok) return;
        const Ae = await te.json();
        if (p !== nn || d !== JSON.stringify({ ...T })) return;
        for (const De of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Ae, De) && (h[De] = Ae[De]);
      } catch (te) {
        if (te?.name !== "AbortError") return;
      } finally {
        Jo === P && (Jo = null);
      }
    }
    async function Yt(p, d = null) {
      const s = p?.currentTarget?.tagName === "FORM" ? p.currentTarget : p?.currentTarget?.form;
      if (!s && !d?.params) return;
      const P = o(d?.params ?? bg(s));
      if (ta.value || ki.value) {
        Tr(P, wt.value);
        return;
      }
      const te = P.toString(), Ae = te ? `?${te}` : "", De = d?.generation ?? ++nn, Xe = c(P), cn = d?.historyMode ?? (Xe ? "push" : "replace"), Pi = d?.historyTraversal === !0;
      if (De !== nn) return;
      d === null && Ma?.abort();
      const Ua = new AbortController();
      Ma = Ua, At.loading = !0, At.error = "", At.completed = !1;
      try {
        const Un = await fetch(Po.value + Ae, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ua.signal
        });
        if (De !== nn) return;
        if (!Un.ok) {
          Pi ? Tr(P) : Xe ? At.error = m("library", "Could not load this review queue. Try again.") : Tr(P);
          return;
        }
        const Wg = await Un.json();
        if (De !== nn) return;
        Ag(Wg), At.completed = !0, cn !== "none" && (history[cn === "push" ? "pushState" : "replaceState"]({}, "", te ? `?${te}` : window.location.pathname), Li.value && Xo({ historyMode: "none" }));
      } catch (Un) {
        De === nn && Un?.name !== "AbortError" && (Pi ? Tr(P) : Xe ? At.error = m("library", "Could not load this review queue. Try again.") : Tr(P));
      } finally {
        De === nn && (Ma = null, At.loading = !1);
      }
    }
    function yd() {
      Ma?.abort();
      const p = new URLSearchParams(window.location.search), d = gd();
      p.has("item") && d === null && (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)), d === null ? Xo({ historyMode: "none" }) : _r(d, { historyMode: "none", seed: b.value.find((s) => Number(s.id) === d) || null }), p.delete("item"), Yt(null, {
        params: o(p),
        generation: ++nn,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Tr(p, d = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = d, s.hidden = !0;
      for (const [P, te] of p.entries()) {
        const Ae = document.createElement("input");
        Ae.type = "hidden", Ae.name = P, Ae.value = te, s.appendChild(Ae);
      }
      document.body.appendChild(s), s.submit(), s.remove();
    }
    function ln(p, d = null, s = null) {
      if (d === null) {
        Yt(p);
        return;
      }
      Yt({ currentTarget: p }, { params: d, generation: s });
    }
    async function Og(p, d = re.value) {
      T.publication = String(d || "").trim(), re.value = T.publication, X.value = !1, await Qt(), Yt({ currentTarget: p });
    }
    function _d(p, d) {
      Og(d.currentTarget.form, p);
    }
    async function Ng(p) {
      T.q = String(ue.value || "").trim(), T.publication = String(re.value || "").trim(), T.publisher = String(Q.value || "").trim(), T.creator = String(de.value || "").trim(), T.subject = String(x.value || "").trim(), T.folder = String(it.value || "").trim(), T.year = String(et.value || "").trim(), X.value = !1, $.value = !1, be.value = !1, L.value = !1, ut.value = !1, dt.value = !1, await Qt(), Yt({ currentTarget: p });
    }
    async function Ii(p, d, s) {
      T[d] = String(s || "").trim(), d === "creator" ? (de.value = T.creator, be.value = !1) : d === "publisher" ? (Q.value = T.publisher, $.value = !1) : d === "subject" ? (x.value = T.subject, L.value = !1) : d === "folder" ? (it.value = T.folder, ut.value = !1) : d === "classification" ? (V.value = T.classification, he.value = !1) : d === "tag" ? ($e.value = T.tag, He.value = !1) : (et.value = T.year, dt.value = !1), ei[d] = -1, await Qt(), Yt({ currentTarget: p });
    }
    function wd(p) {
      Ng(p.currentTarget);
    }
    function Sd(p, d) {
      Ii(d.currentTarget.form, "creator", p);
    }
    function Cd(p, d) {
      Ii(d.currentTarget.form, "publisher", p);
    }
    function Td(p, d) {
      Ii(d.currentTarget.form, "classification", p);
    }
    function Ed(p, d) {
      Ii(d.currentTarget.form, "tag", p);
    }
    function kd(p, d) {
      Ii(d.currentTarget.form, "folder", p);
    }
    function Ad(p, d = x.value) {
      window.clearTimeout(G), K?.abort(), K = null, Ii(p, "subject", d);
    }
    function Lg(p) {
      Ad(p.currentTarget.form);
    }
    function xd(p, d) {
      Ad(d.currentTarget.form, p);
    }
    function Od(p, d) {
      Ii(d.currentTarget.form, "year", p);
    }
    const ei = /* @__PURE__ */ Ot({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function Rg(p) {
      return q.value;
    }
    function oc(p, d, s) {
      return `library-${p}-${d}-suggestion-${s}`;
    }
    function Nd(p, d) {
      const s = ei[d];
      return s >= 0 ? oc(p, d, s) : void 0;
    }
    function sc(p, d) {
      $.value = d, d || (ei[p] = -1);
    }
    function Ld(p) {
      ei[p] = -1, sc(p, !0);
    }
    function Ig(p, d, s) {
      Ii(s, p, d);
    }
    function Rd(p, d) {
      const s = Rg();
      if (p.key === "Escape") {
        sc(d, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(p.key) || s.length === 0) return;
      if (p.key === "Enter") {
        const Ae = ei[d];
        if (Ae < 0) return;
        p.preventDefault(), Ig(d, s[Ae], p.currentTarget.form);
        return;
      }
      p.preventDefault(), sc(d, !0);
      const P = ei[d], te = p.key === "ArrowDown" ? 1 : -1;
      ei[d] = P < 0 ? te > 0 ? 0 : s.length - 1 : (P + te + s.length) % s.length;
    }
    function Id(p) {
      const d = new URLSearchParams();
      for (const [s, P] of Object.entries(T)) {
        const te = String(P || "").trim();
        te !== "" && s !== p && !(s === "sort" && te === "title") && !(s === "view" && te === "compact") && d.set(s, te);
      }
      return d;
    }
    function Pd(p) {
      const d = Id(p).toString();
      return `${wt.value}${d ? `?${d}` : ""}`;
    }
    function $d(p) {
      const d = Id(p);
      T[p] = p === "sort" ? "title" : p === "view" ? "compact" : "", Yt(null, {
        params: d,
        generation: ++nn
      });
    }
    function Fd() {
      const p = new URLSearchParams();
      return T.sort && T.sort !== "title" && p.set("sort", T.sort), T.view && T.view !== "compact" && p.set("view", T.view), p;
    }
    function Er() {
      const p = Fd().toString();
      return `${wt.value}${p ? `?${p}` : ""}`;
    }
    function kr() {
      const p = Fd();
      for (const d of Object.keys(T))
        ["sort", "view"].includes(d) || (T[d] = Xn[d]);
      Yt(null, {
        params: p,
        generation: ++nn
      }), !ta.value && !ki.value && Qt(() => {
        Mo.value?.focus?.();
      });
    }
    function Pg(p) {
      const d = new URL(p.href, window.location.origin).searchParams;
      Yt(null, {
        params: d,
        generation: ++nn
      });
    }
    function $g() {
      return Pd("q");
    }
    const lc = H(() => h.smartViewCounts || {}), Fg = H(() => new Set(h.smartViewCountsPending || []));
    function Dg(p) {
      return Fg.value.has(p) || !Object.prototype.hasOwnProperty.call(lc.value, p) ? "—" : Number(lc.value[p] || 0);
    }
    const Dd = H(() => {
      const p = {};
      for (const [d, s] of Object.entries(T)) {
        const P = String(s || "").trim();
        P !== "" && !(d === "sort" && P === "title") && (p[d] = P);
      }
      return p;
    }), Mg = H(() => JSON.stringify(Dd.value)), cc = H(() => Object.keys(Dd.value).length > 0);
    function Qo(p) {
      if (!Bo.includes(p)) return;
      T.view = p;
      const d = new URLSearchParams();
      for (const [s, P] of Object.entries(u(T))) {
        const te = String(P || "").trim();
        te !== "" && !(s === "sort" && te === "title") && !(s === "view" && te === "compact") && d.set(s, te);
      }
      d.delete("page"), Yt(null, {
        params: d,
        generation: ++nn
      });
    }
    function zg(p) {
      const d = o(window.location.search);
      for (const P of Object.keys(aa))
        d.delete(P);
      d.delete("page");
      for (const [P, te] of Object.entries(p))
        String(te || "").trim() !== "" && d.set(P, String(te));
      const s = d.toString();
      return s ? `?${s}` : "?";
    }
    function Ug(p) {
      return zg(p || {});
    }
    function jg(p) {
      return Jl.value.replace("__COLLECTION_ID__", encodeURIComponent(String(p || "0")));
    }
    function za(p) {
      return String(p || "").toUpperCase();
    }
    function Ar(p) {
      return Ql[p.id] || "loading";
    }
    function Bg(p) {
      Ql[p.id] = "loaded";
    }
    function Hg(p) {
      Ql[p.id] = "error";
    }
    function uc(p) {
      const d = String(p?.publication || "").trim(), s = String(p?.publicationDate || "").trim();
      return d && s ? `${d} · ${s}` : d || s ? d || s : [p?.publicationType, za(p?.extension)].filter(Boolean).join(" · ");
    }
    function Md(p) {
      const d = String(p?.tagName || "").toLowerCase();
      return p?.isContentEditable || ["input", "select", "textarea", "button"].includes(d);
    }
    function Vg(p) {
      p.key !== "/" || p.metaKey || p.ctrlKey || p.altKey || p.shiftKey || Md(p.target) || (p.preventDefault(), Sr.value?.focus(), Sr.value?.select?.());
    }
    async function Kg(p) {
      p.key !== "Escape" || document.activeElement !== Sr.value || T.q === "" || (p.preventDefault(), ue.value = "", T.q = "", await Qt(), ln({ currentTarget: Sr.value }));
    }
    function Gg(p) {
      if (!Li.value || p.metaKey || p.ctrlKey || p.altKey)
        return !1;
      if (p.key === "Escape")
        return p.preventDefault(), Xo(), !0;
      if (p.key === "Tab" && la.value) {
        if (sa.value?.focusTrap) return !1;
        const d = sa.value?.$refs?.sidebar || sa.value?.$el || sa.value, s = [...d?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ae) => !Ae.hidden && Ae.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const P = s[0], te = s[s.length - 1];
        if (p.shiftKey && (document.activeElement === P || !d.contains(document.activeElement)))
          return p.preventDefault(), te.focus(), !0;
        if (!p.shiftKey && (document.activeElement === te || !d.contains(document.activeElement)))
          return p.preventDefault(), P.focus(), !0;
      }
      return Md(p.target) ? !1 : p.key === "ArrowLeft" && Go.value ? (p.preventDefault(), Zo(Go.value), !0) : p.key === "ArrowRight" && Wo.value ? (p.preventDefault(), Zo(Wo.value), !0) : !1;
    }
    function zd(p) {
      Gg(p) || (Vg(p), Kg(p));
    }
    Xi(() => {
      window.addEventListener("keydown", zd), window.addEventListener("popstate", yd), Qn = window.matchMedia?.("(max-width: 1023px)") || null, wr(), Qn?.addEventListener ? Qn.addEventListener("change", wr) : Qn?.addListener?.(wr);
      const p = new URLSearchParams(window.location.search), d = gd();
      p.has("item") && d === null ? (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)) : d !== null && _r(d, { historyMode: "none", seed: b.value.find((s) => Number(s.id) === d) || null }), Cr = window.requestAnimationFrame(() => {
        Cr = null, xg();
      });
    }), ar(() => {
      nc = !0, rc(), window.removeEventListener("keydown", zd), window.removeEventListener("popstate", yd), window.clearTimeout(se), window.clearTimeout(Ne), window.clearTimeout(G), window.clearTimeout(Qi), ge?.abort(), lt?.abort(), K?.abort(), wi?.abort(), nn += 1, Cr !== null && window.cancelAnimationFrame(Cr), Cr = null, Jo?.abort(), Ma?.abort(), Ma = null, ca += 1, ua?.abort(), ua = null, Qn?.removeEventListener ? Qn.removeEventListener("change", wr) : Qn?.removeListener?.(wr), Qn = null, Ko = null;
    });
    const xr = /* @__PURE__ */ Ot({}), Or = /* @__PURE__ */ Ot({});
    async function Ud(p, d) {
      const s = d?.currentTarget?.closest?.("form") || d?.currentTarget;
      if (!s || !p?.starUrl || xr[p.id]) return;
      const P = !!p.starred;
      xr[p.id] = !0, Or[p.id] = "", p.starred = !P;
      try {
        (await fetch(p.starUrl, {
          method: "POST",
          body: new FormData(s),
          credentials: "same-origin"
        })).ok || (p.starred = P, Or[p.id] = m("library", "Could not update star. Try again."));
      } catch {
        p.starred = P, Or[p.id] = m("library", "Could not update star. Try again.");
      } finally {
        xr[p.id] = !1;
      }
    }
    return (p, d) => (y(), je(g(MT), { "app-name": "library" }, {
      default: Re(() => [
        ye(g(y0), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: Re(() => [
            ye(g(kv), null, {
              default: Re(() => [
                (y(!0), w(ae, null, Ce(Io.value, (s) => (y(), je(g(xh), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                ye(g(xh), {
                  active: ea.value,
                  href: Ei.value,
                  name: $a.value > 0 ? `${g(m)("library", "Review")} (${$a.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Re(() => [
            l("section", ZT, [
              l("h2", JT, v(g(m)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(m)("library", "Catalogue search and filters"),
                onSubmit: xe(wd, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: T.folder
                }, null, 8, eE),
                (y(!0), w(ae, null, Ce(kt.value, (s) => (y(), w("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, tE))), 128)),
                T.sort && T.sort !== "title" ? (y(), w("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: T.sort
                }, null, 8, nE)) : D("", !0),
                T.view && T.view !== "compact" ? (y(), w("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: T.view
                }, null, 8, iE)) : D("", !0),
                l("label", {
                  class: "library-quick-filter-search",
                  title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  l("span", null, [
                    Te(v(g(m)("library", "Search")) + " ", 1),
                    d[104] || (d[104] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  Ie(l("input", {
                    ref_key: "quickSearchInput",
                    ref: Sr,
                    "onUpdate:modelValue": d[0] || (d[0] = (s) => ue.value = s),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: g(m)("library", "Title, creator, description, filename or folder")
                  }, null, 8, rE), [
                    [ft, ue.value]
                  ])
                ], 8, aE),
                l("label", null, [
                  Te(v(g(m)("library", "Type")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[1] || (d[1] = (s) => T.type = s),
                    name: "type",
                    onChange: d[2] || (d[2] = (s) => ln(s))
                  }, [
                    l("option", oE, v(g(m)("library", "All types")), 1),
                    (y(!0), w(ae, null, Ce(N.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, sE))), 128))
                  ], 544), [
                    [Xt, T.type]
                  ])
                ]),
                l("div", lE, [
                  l("label", cE, v(g(m)("library", "Publisher")), 1),
                  Ie(l("input", {
                    id: "library-publisher-search",
                    "onUpdate:modelValue": d[3] || (d[3] = (s) => Q.value = s),
                    type: "search",
                    name: "publisherSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search publishers"),
                    title: g(m)("library", "Exact publisher matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publisher-suggestions",
                    "aria-activedescendant": Nd("desktop", "publisher"),
                    "aria-expanded": $.value && q.value.length > 0 ? "true" : "false",
                    onFocus: d[4] || (d[4] = (s) => Ld("publisher")),
                    onKeydown: d[5] || (d[5] = (s) => Rd(s, "publisher"))
                  }, null, 40, uE), [
                    [ft, Q.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "publisher",
                    value: T.publisher
                  }, null, 8, dE),
                  $.value && q.value.length > 0 ? (y(), w("ul", fE, [
                    (y(!0), w(ae, null, Ce(q.value, (s, P) => (y(), w("li", {
                      id: oc("desktop", "publisher", P),
                      key: s,
                      role: "option",
                      "aria-selected": ei.publisher === P ? "true" : "false"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-publisher-suggestion",
                        onMousedown: d[6] || (d[6] = xe(() => {
                        }, ["prevent"])),
                        onClick: (te) => Cd(s, te)
                      }, v(s), 41, pE)
                    ], 8, hE))), 128))
                  ])) : D("", !0),
                  l("button", vE, v(g(m)("library", "Apply publisher")), 1)
                ]),
                l("div", gE, [
                  l("label", mE, v(g(m)("library", "Series / periodical")), 1),
                  Ie(l("input", {
                    id: "library-publication-search",
                    "onUpdate:modelValue": d[7] || (d[7] = (s) => re.value = s),
                    type: "search",
                    name: "publicationSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search series and periodicals"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publication-suggestions",
                    "aria-expanded": X.value && Y.value.length > 0 ? "true" : "false",
                    onFocus: d[8] || (d[8] = (s) => X.value = !0),
                    onKeydown: d[9] || (d[9] = nt((s) => X.value = !1, ["escape"]))
                  }, null, 40, bE), [
                    [ft, re.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "publication",
                    value: T.publication
                  }, null, 8, yE),
                  X.value && Y.value.length > 0 ? (y(), w("ul", _E, [
                    (y(!0), w(ae, null, Ce(Y.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: d[10] || (d[10] = xe(() => {
                        }, ["prevent"])),
                        onClick: (P) => _d(s, P)
                      }, v(s), 41, wE)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", SE, v(g(m)("library", "Apply series")), 1)
                ]),
                l("div", CE, [
                  l("label", TE, v(g(m)("library", "Publication year")), 1),
                  Ie(l("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": d[11] || (d[11] = (s) => et.value = s),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": dt.value && gn.value.length > 0 ? "true" : "false",
                    onFocus: d[12] || (d[12] = (s) => dt.value = !0),
                    onKeydown: d[13] || (d[13] = nt((s) => dt.value = !1, ["escape"]))
                  }, null, 40, EE), [
                    [ft, et.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "year",
                    value: T.year
                  }, null, 8, kE),
                  dt.value && gn.value.length > 0 ? (y(), w("ul", AE, [
                    (y(!0), w(ae, null, Ce(gn.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: d[14] || (d[14] = xe(() => {
                        }, ["prevent"])),
                        onClick: (P) => Od(s, P)
                      }, v(s), 41, xE)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", OE, v(g(m)("library", "Apply year")), 1)
                ]),
                l("div", NE, [
                  l("label", LE, v(g(m)("library", "Creator")), 1),
                  Ie(l("input", {
                    id: "library-creator-search",
                    "onUpdate:modelValue": d[15] || (d[15] = (s) => de.value = s),
                    type: "search",
                    name: "creatorSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search creators"),
                    title: g(m)("library", "Exact full-field creator matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-creator-suggestions",
                    "aria-expanded": be.value && Ke.value.length > 0 ? "true" : "false",
                    onFocus: d[16] || (d[16] = (s) => be.value = !0),
                    onKeydown: d[17] || (d[17] = nt((s) => be.value = !1, ["escape"]))
                  }, null, 40, RE), [
                    [ft, de.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "creator",
                    value: T.creator
                  }, null, 8, IE),
                  be.value && Ke.value.length > 0 ? (y(), w("ul", PE, [
                    (y(!0), w(ae, null, Ce(Ke.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: d[18] || (d[18] = xe(() => {
                        }, ["prevent"])),
                        onClick: (P) => Sd(s, P)
                      }, v(s), 41, $E)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", FE, v(g(m)("library", "Apply creator")), 1)
                ]),
                l("div", DE, [
                  l("label", ME, v(g(m)("library", "Nextcloud tag")), 1),
                  Ie(l("input", {
                    id: "library-tag-search",
                    "onUpdate:modelValue": d[19] || (d[19] = (s) => $e.value = s),
                    type: "search",
                    name: "tagSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search tags"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-tag-suggestions",
                    "aria-expanded": He.value && vt.value.length > 0 ? "true" : "false",
                    onFocus: d[20] || (d[20] = (s) => He.value = !0),
                    onKeydown: d[21] || (d[21] = nt((s) => He.value = !1, ["escape"]))
                  }, null, 40, zE), [
                    [ft, $e.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "tag",
                    value: T.tag
                  }, null, 8, UE),
                  He.value && vt.value.length > 0 ? (y(), w("ul", jE, [
                    (y(!0), w(ae, null, Ce(vt.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-tag-suggestion",
                        onMousedown: d[22] || (d[22] = xe(() => {
                        }, ["prevent"])),
                        onClick: (P) => Ed(s, P)
                      }, v(s), 41, BE)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", HE, v(g(m)("library", "Apply tag")), 1)
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Format")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[23] || (d[23] = (s) => T.format = s),
                    name: "format",
                    onChange: d[24] || (d[24] = (s) => ln(s))
                  }, [
                    l("option", VE, v(g(m)("library", "All formats")), 1),
                    (y(!0), w(ae, null, Ce(k.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(za(s)), 9, KE))), 128))
                  ], 544), [
                    [Xt, T.format]
                  ])
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Shelf")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[25] || (d[25] = (s) => T.shelf = s),
                    name: "shelf",
                    onChange: d[26] || (d[26] = (s) => ln(s))
                  }, [
                    l("option", GE, v(g(m)("library", "All shelves")), 1),
                    (y(!0), w(ae, null, Ce(C.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, WE))), 128))
                  ], 544), [
                    [Xt, T.shelf]
                  ])
                ]),
                l("div", qE, [
                  l("label", YE, v(g(m)("library", "Folder")), 1),
                  Ie(l("input", {
                    id: "library-folder-search",
                    "onUpdate:modelValue": d[27] || (d[27] = (s) => it.value = s),
                    type: "search",
                    name: "folderSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Type at least 3 path characters"),
                    title: g(m)("library", "Select an exact folder path"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-folder-suggestions",
                    "aria-expanded": ut.value && Pt.value.length > 0 ? "true" : "false",
                    onFocus: d[28] || (d[28] = (s) => ut.value = !0),
                    onKeydown: d[29] || (d[29] = nt((s) => ut.value = !1, ["escape"]))
                  }, null, 40, XE), [
                    [ft, it.value]
                  ]),
                  ut.value && Pt.value.length > 0 ? (y(), w("ul", ZE, [
                    (y(!0), w(ae, null, Ce(Pt.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-folder-suggestion",
                        onMousedown: d[30] || (d[30] = xe(() => {
                        }, ["prevent"])),
                        onClick: (P) => kd(s, P)
                      }, v(s), 41, JE)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", QE, v(g(m)("library", "Apply folder")), 1)
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Scan status")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[31] || (d[31] = (s) => T.status = s),
                    name: "status",
                    onChange: d[32] || (d[32] = (s) => ln(s))
                  }, [
                    l("option", ek, v(g(m)("library", "All scan statuses")), 1),
                    (y(!0), w(ae, null, Ce(F.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, tk))), 128))
                  ], 544), [
                    [Xt, T.status]
                  ])
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Workflow status")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[33] || (d[33] = (s) => T.workflowStatus = s),
                    name: "workflowStatus",
                    onChange: d[34] || (d[34] = (s) => ln(s))
                  }, [
                    l("option", nk, v(g(m)("library", "All workflow statuses")), 1),
                    (y(!0), w(ae, null, Ce(M.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, ik))), 128))
                  ], 544), [
                    [Xt, T.workflowStatus]
                  ])
                ]),
                l("div", ak, [
                  l("label", rk, v(g(m)("library", "Subject")), 1),
                  Ie(l("input", {
                    id: "library-subject-search",
                    "onUpdate:modelValue": d[35] || (d[35] = (s) => x.value = s),
                    type: "search",
                    name: "subjectSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search subjects"),
                    title: g(m)("library", "Exact subject matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-subject-suggestions",
                    "aria-expanded": L.value && j.value.length > 0 ? "true" : "false",
                    onFocus: d[36] || (d[36] = (s) => L.value = !0),
                    onKeydown: d[37] || (d[37] = nt((s) => L.value = !1, ["escape"]))
                  }, null, 40, ok), [
                    [ft, x.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "subject",
                    value: T.subject
                  }, null, 8, sk),
                  L.value && j.value.length > 0 ? (y(), w("ul", lk, [
                    (y(!0), w(ae, null, Ce(j.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-subject-suggestion",
                        onMousedown: d[38] || (d[38] = xe(() => {
                        }, ["prevent"])),
                        onClick: (P) => xd(s, P)
                      }, v(s), 41, ck)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", {
                    type: "button",
                    class: "button secondary library-subject-apply",
                    onClick: Lg
                  }, v(g(m)("library", "Apply subject")), 1)
                ]),
                l("div", uk, [
                  l("label", dk, v(g(m)("library", "Classification")), 1),
                  Ie(l("input", {
                    id: "library-classification-search",
                    "onUpdate:modelValue": d[39] || (d[39] = (s) => V.value = s),
                    type: "search",
                    name: "classificationSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search classifications"),
                    title: g(m)("library", "Exact classification matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-classification-suggestions",
                    "aria-expanded": he.value && pe.value.length > 0 ? "true" : "false",
                    onFocus: d[40] || (d[40] = (s) => he.value = !0),
                    onKeydown: d[41] || (d[41] = nt((s) => he.value = !1, ["escape"]))
                  }, null, 40, fk), [
                    [ft, V.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "classification",
                    value: T.classification
                  }, null, 8, hk),
                  he.value && pe.value.length > 0 ? (y(), w("ul", pk, [
                    (y(!0), w(ae, null, Ce(pe.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-classification-suggestion",
                        onMousedown: d[42] || (d[42] = xe(() => {
                        }, ["prevent"])),
                        onClick: (P) => Td(s, P)
                      }, v(s), 41, vk)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", gk, v(g(m)("library", "Apply classification")), 1)
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Suggested updates")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[43] || (d[43] = (s) => T.scannerConflicts = s),
                    name: "scannerConflicts",
                    onChange: d[44] || (d[44] = (s) => ln(s))
                  }, [
                    l("option", mk, v(g(m)("library", "All metadata")), 1),
                    l("option", bk, v(g(m)("library", "Suggested updates")), 1)
                  ], 544), [
                    [Xt, T.scannerConflicts]
                  ])
                ]),
                l("button", yk, v(g(m)("library", "Apply filters")), 1),
                W.value.length > 0 ? (y(), w("a", {
                  key: 2,
                  href: Er(),
                  class: "button secondary",
                  onClick: xe(kr, ["prevent"])
                }, v(g(m)("library", "Clear")), 9, _k)) : D("", !0)
              ], 40, QT)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: Ti.value
            }, [
              d[105] || (d[105] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, v(g(m)("library", "Settings")), 1)
            ], 8, wk)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ye(g($1), null, {
          default: Re(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: h.language || "en",
              dir: h.direction || "ltr",
              tabindex: "-1"
            }, [
              I.value.length > 0 ? (y(), w("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(m)("library", "Active filters")
              }, [
                l("span", null, v(g(m)("library", "Active filters")), 1),
                (y(!0), w(ae, null, Ce(I.value, (s) => (y(), w("a", {
                  key: s.key,
                  href: Pd(s.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(m)("library", "Remove filter")}: ${s.label}`,
                  title: s.title,
                  onClick: xe((P) => $d(s.key), ["prevent"])
                }, [
                  l("strong", null, [
                    Te(v(s.label), 1),
                    s.displayValue ? (y(), w(ae, { key: 0 }, [
                      Te(":")
                    ], 64)) : D("", !0)
                  ]),
                  s.displayValue ? (y(), w(ae, { key: 0 }, [
                    d[106] || (d[106] = Te(v(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, v(s.displayValue), 9, Ek)
                  ], 64)) : D("", !0),
                  d[107] || (d[107] = Te()),
                  d[108] || (d[108] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, Tk))), 128)),
                W.value.length > 0 ? (y(), w("a", {
                  key: 0,
                  href: Er(),
                  class: "library-active-filter-clear-all",
                  onClick: xe(kr, ["prevent"])
                }, v(g(m)("library", "Clear all")), 9, kk)) : D("", !0)
              ], 8, Ck)) : D("", !0),
              ea.value ? (y(), w("section", Ak, [
                l("header", xk, [
                  l("p", Ok, v(g(m)("library", "Metadata cleanup")), 1),
                  l("h2", Nk, v(g(m)("library", "Review")), 1),
                  l("p", null, v(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                l("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (y(!0), w(ae, null, Ce(gg.value, (s) => (y(), w("a", {
                    key: s.key,
                    class: Ee(["library-review-queue-link", { active: s.active }]),
                    href: s.href,
                    "aria-current": s.active ? "page" : void 0,
                    onClick: xe((P) => Pg(s), ["prevent"])
                  }, [
                    l("span", null, v(s.label), 1),
                    l("b", null, v(Dg(s.countKey)), 1)
                  ], 10, Rk))), 128))
                ], 8, Lk),
                l("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: xe(Yt, ["prevent"])
                }, [
                  (y(!0), w(ae, null, Ce(sg.value, (s) => (y(), w("input", {
                    key: `review-${s.key}`,
                    type: "hidden",
                    name: s.key,
                    value: s.value
                  }, null, 8, Pk))), 128)),
                  l("label", null, [
                    Te(v(g(m)("library", "Search within this queue")), 1),
                    Ie(l("input", {
                      "onUpdate:modelValue": d[45] || (d[45] = (s) => T.q = s),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ft, T.q]
                    ])
                  ]),
                  l("button", $k, v(g(m)("library", "Apply")), 1)
                ], 40, Ik),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": At.loading ? "true" : "false"
                }, [
                  At.loading ? (y(), w("span", Dk, v(g(m)("library", "Loading review queue…")), 1)) : D("", !0)
                ], 8, Fk),
                At.error ? (y(), w("p", Mk, v(At.error), 1)) : D("", !0),
                Ri.value.enabled ? (y(), w("section", zk, [
                  l("div", Uk, [
                    l("p", jk, v(g(m)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, v(g(m)("library", "Review next suggestion")), 9, Bk)
                  ]),
                  Ri.value.item ? (y(), w("article", Hk, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", Vk, v(Ri.value.item.title), 1)
                      ]),
                      l("span", Kk, [
                        l("bdi", Gk, v(Ri.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", Wk, [
                      (y(!0), w(ae, null, Ce(Ri.value.fields, (s) => (y(), w("article", {
                        key: s.field,
                        class: "library-metadata-review-field"
                      }, [
                        l("h4", null, [
                          l("bdi", qk, v(s.field), 1)
                        ]),
                        l("dl", null, [
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Current value")), 1),
                            l("dd", null, [
                              l("bdi", Yk, v(s.currentValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Suggested value")), 1),
                            l("dd", null, [
                              l("bdi", Xk, v(s.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Path-based suggestion")), 1),
                            l("dd", null, [
                              l("bdi", Zk, v(s.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Sidecar value")), 1),
                            l("dd", null, [
                              l("bdi", Jk, v(s.sidecarValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Source")), 1),
                            l("dd", null, [
                              l("bdi", Qk, v(s.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        l("form", {
                          method: "post",
                          action: Ri.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: tn.value
                          }, null, 8, tA),
                          l("input", {
                            type: "hidden",
                            name: "field",
                            value: s.field
                          }, null, 8, nA),
                          d[109] || (d[109] = l("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          l("button", iA, v(g(m)("library", "Use suggested value")), 1)
                        ], 8, eA)
                      ]))), 128))
                    ]),
                    l("footer", aA, [
                      l("a", {
                        class: "button secondary",
                        href: Ri.value.item.detailsUrl
                      }, v(g(m)("library", "Maintenance")), 9, rA),
                      l("a", {
                        class: "button secondary",
                        href: Ri.value.skipUrl
                      }, v(g(m)("library", "Skip to next suggestion")), 9, oA)
                    ])
                  ])) : D("", !0)
                ])) : D("", !0),
                b.value.length === 0 && !At.loading && !At.error ? (y(), w("div", sA, [
                  l("h3", null, v(g(m)("library", "This review queue is clear")), 1),
                  l("p", null, v(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  l("a", {
                    class: "button primary",
                    href: wt.value
                  }, v(g(m)("library", "Back to Library")), 9, lA)
                ])) : (y(), w("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(m)("library", "Review results")
                }, [
                  (y(!0), w(ae, null, Ce(b.value, (s) => (y(), w("article", {
                    key: s.id,
                    class: "library-review-result-card"
                  }, [
                    l("div", null, [
                      l("h3", null, [
                        l("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (P) => zn(s, P)
                        }, [
                          l("bdi", dA, v(s.title), 1)
                        ], 8, uA)
                      ]),
                      s.creators ? (y(), w("p", fA, [
                        l("bdi", hA, v(s.creators), 1)
                      ])) : D("", !0),
                      s.scanError ? (y(), w("p", pA, [
                        l("bdi", vA, v(s.scanError), 1)
                      ])) : D("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (P) => zn(s, P)
                      }, v(g(m)("library", "Details")), 9, gA),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl
                      }, v(g(m)("library", "Open")), 9, mA)
                    ])
                  ]))), 128))
                ], 8, cA)),
                b.value.length > 0 ? (y(), w("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  z.value.previousUrl ? (y(), w("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, v(g(m)("library", "Previous")), 9, yA)) : (y(), w("span", _A, v(g(m)("library", "Previous")), 1)),
                  l("span", null, [
                    Te(v(g(m)("library", "Page")) + " " + v(z.value.page), 1),
                    z.value.total > 0 ? (y(), w("span", wA, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : D("", !0)
                  ]),
                  z.value.nextUrl ? (y(), w("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, v(g(m)("library", "Next")), 9, SA)) : (y(), w("span", CA, v(g(m)("library", "Next")), 1))
                ], 8, bA)) : D("", !0)
              ])) : ta.value ? (y(), w("main", TA, [
                l("header", EA, [
                  l("p", kA, v(g(m)("library", "Your library")), 1),
                  l("h2", AA, v(g(m)("library", "Home")), 1)
                ]),
                l("section", xA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", OA, v(g(m)("library", "Continue reading")), 1),
                      l("p", NA, v(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    l("a", {
                      href: `${wt.value}?sort=lastOpened`
                    }, v(g(m)("library", "View all")), 9, LA)
                  ]),
                  Ho.value.continueReading.length ? (y(), w("div", RA, [
                    (y(!0), w(ae, null, Ce(Ho.value.continueReading, (s) => (y(), w("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(m)("library", "Details")}: ${s.title}`,
                        onClick: (P) => zn(s, P)
                      }, [
                        l("span", PA, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, $A)
                        ])
                      ], 8, IA),
                      l("div", FA, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (P) => zn(s, P)
                          }, [
                            l("bdi", MA, v(s.title), 1)
                          ], 8, DA)
                        ]),
                        s.creators ? (y(), w("p", zA, [
                          l("bdi", UA, v(s.creators), 1)
                        ])) : D("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl
                        }, v(g(m)("library", "Open")), 9, jA)
                      ])
                    ]))), 128))
                  ])) : (y(), w("p", BA, v(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                l("section", HA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", VA, v(g(m)("library", "Recently added")), 1),
                      l("p", KA, v(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    l("a", {
                      href: `${wt.value}?sort=recent`
                    }, v(g(m)("library", "View all")), 9, GA)
                  ]),
                  Ho.value.recentlyAdded.length ? (y(), w("div", WA, [
                    (y(!0), w(ae, null, Ce(Ho.value.recentlyAdded, (s) => (y(), w("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(m)("library", "Details")}: ${s.title}`,
                        onClick: (P) => zn(s, P)
                      }, [
                        l("span", YA, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, XA)
                        ])
                      ], 8, qA),
                      l("div", ZA, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (P) => zn(s, P)
                          }, [
                            l("bdi", QA, v(s.title), 1)
                          ], 8, JA)
                        ]),
                        s.creators ? (y(), w("p", e2, [
                          l("bdi", t2, v(s.creators), 1)
                        ])) : D("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl
                        }, v(g(m)("library", "Open")), 9, n2)
                      ])
                    ]))), 128))
                  ])) : (y(), w("p", i2, v(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                l("section", a2, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", r2, v(g(m)("library", "Shelves")), 1),
                      l("p", o2, v(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    l("a", { href: on.value }, v(g(m)("library", "View all")), 9, s2)
                  ]),
                  ud.value.length ? (y(), w("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (y(!0), w(ae, null, Ce(ud.value, (s) => (y(), w("a", {
                      key: s.shelf,
                      href: s.url
                    }, [
                      l("strong", null, [
                        l("bdi", u2, v(s.shelf), 1)
                      ]),
                      l("span", null, v(g(dn)("library", "%n item", "%n items", Number(s.itemCount || 0))), 1)
                    ], 8, c2))), 128))
                  ], 8, l2)) : (y(), w("p", d2, v(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(ec.value.count || 0) > 0 ? (y(), w("aside", f2, [
                  l("div", null, [
                    l("h3", h2, v(g(m)("library", "Needs attention")), 1),
                    l("p", p2, v(g(dn)("library", "%n publication needs better details.", "%n publications need better details.", Number(ec.value.count || 0))), 1)
                  ]),
                  l("a", {
                    class: "button tertiary",
                    href: ec.value.url
                  }, v(g(m)("library", "Review")), 9, v2)
                ])) : D("", !0)
              ])) : ki.value ? (y(), w("main", g2, [
                l("header", m2, [
                  l("p", b2, v(g(m)("library", "Your library")), 1),
                  l("h2", y2, v(g(m)("library", "Shelves")), 1),
                  l("p", _2, v(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                dd.value.length ? (y(), w("nav", {
                  key: 0,
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  l("ul", S2, [
                    (y(!0), w(ae, null, Ce(dd.value, (s) => (y(), je(XT, {
                      key: s.id,
                      node: s,
                      "children-url": na.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, w2)) : (y(), w("section", C2, [
                  l("h3", null, v(g(m)("library", "Shelves")), 1),
                  l("p", T2, v(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", E2, [
                    l("a", {
                      class: "button primary",
                      href: Ti.value
                    }, v(g(m)("library", "Add a Library root")), 9, k2),
                    l("a", {
                      class: "button secondary",
                      href: wt.value
                    }, v(g(m)("library", "All publications")), 9, A2)
                  ])
                ]))
              ])) : (y(), w("section", {
                key: 4,
                id: "library-catalogue",
                class: Ee(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": At.loading }]),
                "aria-labelledby": "library-catalogue-heading",
                "aria-busy": At.loading ? "true" : "false"
              }, [
                l("header", O2, [
                  Oi.value ? (y(), w("p", N2, v(dr.value), 1)) : D("", !0),
                  l("h2", {
                    id: "library-catalogue-heading",
                    ref_key: "catalogueHeadingElement",
                    ref: Mo,
                    tabindex: "-1"
                  }, v(Xl.value), 513)
                ]),
                l("details", {
                  class: "library-mobile-filter-panel",
                  "data-library-control": "filter",
                  onToggle: ct
                }, [
                  l("summary", {
                    class: "library-mobile-filter-trigger",
                    "aria-label": Le.value
                  }, [
                    l("span", R2, v(g(dn)("library", "%n item", "%n items", Number(z.value.total || 0))), 1),
                    l("strong", null, v(me.value), 1)
                  ], 8, L2),
                  l("form", {
                    method: "get",
                    class: "library-mobile-filter-form",
                    "aria-label": g(m)("library", "Mobile catalogue filters"),
                    onSubmit: xe(wd, ["prevent"])
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "folder",
                      value: T.folder
                    }, null, 8, P2),
                    (y(!0), w(ae, null, Ce(kt.value, (s) => (y(), w("input", {
                      key: `mobile-hidden-${s.key}`,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, $2))), 128)),
                    l("fieldset", F2, [
                      l("legend", null, v(g(m)("library", "Content")), 1),
                      l("label", D2, [
                        l("span", null, v(g(m)("library", "Search")), 1),
                        Ie(l("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: sn,
                          "onUpdate:modelValue": d[46] || (d[46] = (s) => ue.value = s),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder")
                        }, null, 8, M2), [
                          [ft, ue.value]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Type")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[47] || (d[47] = (s) => T.type = s),
                          name: "type",
                          onChange: d[48] || (d[48] = (s) => ln(s))
                        }, [
                          l("option", z2, v(g(m)("library", "All types")), 1),
                          (y(!0), w(ae, null, Ce(N.value, (s) => (y(), w("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, v(s), 9, U2))), 128))
                        ], 544), [
                          [Xt, T.type]
                        ])
                      ]),
                      l("div", j2, [
                        l("label", B2, v(g(m)("library", "Publisher")), 1),
                        Ie(l("input", {
                          id: "library-mobile-publisher-search",
                          "onUpdate:modelValue": d[49] || (d[49] = (s) => Q.value = s),
                          type: "search",
                          name: "publisherSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search publishers"),
                          title: g(m)("library", "Exact publisher matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publisher-suggestions",
                          "aria-activedescendant": Nd("mobile", "publisher"),
                          "aria-expanded": $.value && q.value.length > 0 ? "true" : "false",
                          onFocus: d[50] || (d[50] = (s) => Ld("publisher")),
                          onKeydown: d[51] || (d[51] = (s) => Rd(s, "publisher"))
                        }, null, 40, H2), [
                          [ft, Q.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: T.publisher
                        }, null, 8, V2),
                        Gt.value && $.value && q.value.length > 0 ? (y(), w("ul", K2, [
                          (y(!0), w(ae, null, Ce(q.value, (s, P) => (y(), w("li", {
                            id: oc("mobile", "publisher", P),
                            key: `mobile-publisher-${s}`,
                            role: "option",
                            "aria-selected": ei.publisher === P ? "true" : "false"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: d[52] || (d[52] = xe(() => {
                              }, ["prevent"])),
                              onClick: (te) => Cd(s, te)
                            }, v(s), 41, W2)
                          ], 8, G2))), 128))
                        ])) : D("", !0)
                      ]),
                      l("div", q2, [
                        l("label", Y2, v(g(m)("library", "Series / periodical")), 1),
                        Ie(l("input", {
                          id: "library-mobile-publication-search",
                          "onUpdate:modelValue": d[53] || (d[53] = (s) => re.value = s),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publication-suggestions",
                          "aria-expanded": X.value && Y.value.length > 0 ? "true" : "false",
                          onFocus: d[54] || (d[54] = (s) => X.value = !0),
                          onKeydown: d[55] || (d[55] = nt((s) => X.value = !1, ["escape"]))
                        }, null, 40, X2), [
                          [ft, re.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publication",
                          value: T.publication
                        }, null, 8, Z2),
                        Gt.value && X.value && Y.value.length > 0 ? (y(), w("ul", J2, [
                          (y(!0), w(ae, null, Ce(Y.value, (s) => (y(), w("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: d[56] || (d[56] = xe(() => {
                              }, ["prevent"])),
                              onClick: (P) => _d(s, P)
                            }, v(s), 41, Q2)
                          ]))), 128))
                        ])) : D("", !0)
                      ]),
                      l("div", ex, [
                        l("label", tx, v(g(m)("library", "Publication year")), 1),
                        Ie(l("input", {
                          id: "library-mobile-year-search",
                          "onUpdate:modelValue": d[57] || (d[57] = (s) => et.value = s),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-year-suggestions",
                          "aria-expanded": dt.value && gn.value.length > 0 ? "true" : "false",
                          onFocus: d[58] || (d[58] = (s) => dt.value = !0),
                          onKeydown: d[59] || (d[59] = nt((s) => dt.value = !1, ["escape"]))
                        }, null, 40, nx), [
                          [ft, et.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "year",
                          value: T.year
                        }, null, 8, ix),
                        Gt.value && dt.value && gn.value.length > 0 ? (y(), w("ul", ax, [
                          (y(!0), w(ae, null, Ce(gn.value, (s) => (y(), w("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: d[60] || (d[60] = xe(() => {
                              }, ["prevent"])),
                              onClick: (P) => Od(s, P)
                            }, v(s), 41, rx)
                          ]))), 128))
                        ])) : D("", !0)
                      ]),
                      l("div", ox, [
                        l("label", sx, v(g(m)("library", "Creator")), 1),
                        Ie(l("input", {
                          id: "library-mobile-creator-search",
                          "onUpdate:modelValue": d[61] || (d[61] = (s) => de.value = s),
                          type: "search",
                          name: "creatorSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search creators"),
                          title: g(m)("library", "Exact full-field creator matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-creator-suggestions",
                          "aria-expanded": be.value && Ke.value.length > 0 ? "true" : "false",
                          onFocus: d[62] || (d[62] = (s) => be.value = !0),
                          onKeydown: d[63] || (d[63] = nt((s) => be.value = !1, ["escape"]))
                        }, null, 40, lx), [
                          [ft, de.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "creator",
                          value: T.creator
                        }, null, 8, cx),
                        Gt.value && be.value && Ke.value.length > 0 ? (y(), w("ul", ux, [
                          (y(!0), w(ae, null, Ce(Ke.value, (s) => (y(), w("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: d[64] || (d[64] = xe(() => {
                              }, ["prevent"])),
                              onClick: (P) => Sd(s, P)
                            }, v(s), 41, dx)
                          ]))), 128))
                        ])) : D("", !0)
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Format")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[65] || (d[65] = (s) => T.format = s),
                          name: "format",
                          onChange: d[66] || (d[66] = (s) => ln(s))
                        }, [
                          l("option", fx, v(g(m)("library", "All formats")), 1),
                          (y(!0), w(ae, null, Ce(k.value, (s) => (y(), w("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, v(za(s)), 9, hx))), 128))
                        ], 544), [
                          [Xt, T.format]
                        ])
                      ]),
                      l("div", px, [
                        l("label", vx, v(g(m)("library", "Subject")), 1),
                        Ie(l("input", {
                          id: "library-mobile-subject-search",
                          "onUpdate:modelValue": d[67] || (d[67] = (s) => x.value = s),
                          type: "search",
                          name: "subjectSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search subjects"),
                          title: g(m)("library", "Exact subject matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-subject-suggestions",
                          "aria-expanded": L.value && j.value.length > 0 ? "true" : "false",
                          onFocus: d[68] || (d[68] = (s) => L.value = !0),
                          onKeydown: d[69] || (d[69] = nt((s) => L.value = !1, ["escape"]))
                        }, null, 40, gx), [
                          [ft, x.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "subject",
                          value: T.subject
                        }, null, 8, mx),
                        Gt.value && L.value && j.value.length > 0 ? (y(), w("ul", bx, [
                          (y(!0), w(ae, null, Ce(j.value, (s) => (y(), w("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: d[70] || (d[70] = xe(() => {
                              }, ["prevent"])),
                              onClick: (P) => xd(s, P)
                            }, v(s), 41, yx)
                          ]))), 128))
                        ])) : D("", !0)
                      ]),
                      l("div", _x, [
                        l("label", wx, v(g(m)("library", "Classification")), 1),
                        Ie(l("input", {
                          id: "library-mobile-classification-search",
                          "onUpdate:modelValue": d[71] || (d[71] = (s) => V.value = s),
                          type: "search",
                          name: "classificationSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search classifications"),
                          title: g(m)("library", "Exact classification matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-classification-suggestions",
                          "aria-expanded": he.value && pe.value.length > 0 ? "true" : "false",
                          onFocus: d[72] || (d[72] = (s) => he.value = !0),
                          onKeydown: d[73] || (d[73] = nt((s) => he.value = !1, ["escape"]))
                        }, null, 40, Sx), [
                          [ft, V.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "classification",
                          value: T.classification
                        }, null, 8, Cx),
                        Gt.value && he.value && pe.value.length > 0 ? (y(), w("ul", Tx, [
                          (y(!0), w(ae, null, Ce(pe.value, (s) => (y(), w("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: d[74] || (d[74] = xe(() => {
                              }, ["prevent"])),
                              onClick: (P) => Td(s, P)
                            }, v(s), 41, Ex)
                          ]))), 128))
                        ])) : D("", !0)
                      ])
                    ]),
                    l("fieldset", kx, [
                      l("legend", null, v(g(m)("library", "Location")), 1),
                      l("label", null, [
                        Te(v(g(m)("library", "Shelf")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[75] || (d[75] = (s) => T.shelf = s),
                          name: "shelf",
                          onChange: d[76] || (d[76] = (s) => ln(s))
                        }, [
                          l("option", Ax, v(g(m)("library", "All shelves")), 1),
                          (y(!0), w(ae, null, Ce(C.value, (s) => (y(), w("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, v(s), 9, xx))), 128))
                        ], 544), [
                          [Xt, T.shelf]
                        ])
                      ]),
                      l("div", Ox, [
                        l("label", Nx, v(g(m)("library", "Folder")), 1),
                        Ie(l("input", {
                          id: "library-mobile-folder-search",
                          "onUpdate:modelValue": d[77] || (d[77] = (s) => it.value = s),
                          type: "search",
                          name: "folderSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Type at least 3 path characters"),
                          title: g(m)("library", "Select an exact folder path"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-folder-suggestions",
                          "aria-expanded": ut.value && Pt.value.length > 0 ? "true" : "false",
                          onFocus: d[78] || (d[78] = (s) => ut.value = !0),
                          onKeydown: d[79] || (d[79] = nt((s) => ut.value = !1, ["escape"]))
                        }, null, 40, Lx), [
                          [ft, it.value]
                        ]),
                        Gt.value && ut.value && Pt.value.length > 0 ? (y(), w("ul", Rx, [
                          (y(!0), w(ae, null, Ce(Pt.value, (s) => (y(), w("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: d[80] || (d[80] = xe(() => {
                              }, ["prevent"])),
                              onClick: (P) => kd(s, P)
                            }, v(s), 41, Ix)
                          ]))), 128))
                        ])) : D("", !0)
                      ])
                    ]),
                    l("fieldset", Px, [
                      l("legend", null, v(g(m)("library", "Review")), 1),
                      l("label", null, [
                        Te(v(g(m)("library", "Scan status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[81] || (d[81] = (s) => T.status = s),
                          name: "status",
                          onChange: d[82] || (d[82] = (s) => ln(s))
                        }, [
                          l("option", $x, v(g(m)("library", "All scan statuses")), 1),
                          (y(!0), w(ae, null, Ce(F.value, (s) => (y(), w("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, v(s), 9, Fx))), 128))
                        ], 544), [
                          [Xt, T.status]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Workflow status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[83] || (d[83] = (s) => T.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: d[84] || (d[84] = (s) => ln(s))
                        }, [
                          l("option", Dx, v(g(m)("library", "All workflow statuses")), 1),
                          (y(!0), w(ae, null, Ce(M.value, (s) => (y(), w("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, v(s), 9, Mx))), 128))
                        ], 544), [
                          [Xt, T.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Suggested updates")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[85] || (d[85] = (s) => T.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: d[86] || (d[86] = (s) => ln(s))
                        }, [
                          l("option", zx, v(g(m)("library", "All metadata")), 1),
                          l("option", Ux, v(g(m)("library", "Suggested updates")), 1)
                        ], 544), [
                          [Xt, T.scannerConflicts]
                        ])
                      ])
                    ]),
                    l("fieldset", jx, [
                      l("legend", null, v(g(m)("library", "Personal / display")), 1),
                      l("div", Bx, [
                        l("label", Hx, v(g(m)("library", "Nextcloud tag")), 1),
                        Ie(l("input", {
                          id: "library-tag-search",
                          "onUpdate:modelValue": d[87] || (d[87] = (s) => $e.value = s),
                          type: "search",
                          name: "tagSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search tags"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-tag-suggestions",
                          "aria-expanded": He.value && vt.value.length > 0 ? "true" : "false",
                          onFocus: d[88] || (d[88] = (s) => He.value = !0),
                          onKeydown: d[89] || (d[89] = nt((s) => He.value = !1, ["escape"]))
                        }, null, 40, Vx), [
                          [ft, $e.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "tag",
                          value: T.tag
                        }, null, 8, Kx),
                        He.value && vt.value.length > 0 ? (y(), w("ul", Gx, [
                          (y(!0), w(ae, null, Ce(vt.value, (s) => (y(), w("li", {
                            key: s,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-tag-suggestion",
                              onMousedown: d[90] || (d[90] = xe(() => {
                              }, ["prevent"])),
                              onClick: (P) => Ed(s, P)
                            }, v(s), 41, Wx)
                          ]))), 128))
                        ])) : D("", !0),
                        l("button", qx, v(g(m)("library", "Apply tag")), 1)
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Sort")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[91] || (d[91] = (s) => T.sort = s),
                          name: "sort",
                          onChange: Yt
                        }, [
                          l("option", Yx, v(g(m)("library", "Title")), 1),
                          l("option", Xx, v(g(m)("library", "Date added")), 1),
                          l("option", Zx, v(g(m)("library", "Publication date")), 1),
                          l("option", Jx, v(g(m)("library", "Series")), 1),
                          l("option", Qx, v(g(m)("library", "Recently opened")), 1),
                          l("option", eO, v(g(m)("library", "Format")), 1)
                        ], 544), [
                          [Xt, T.sort]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "View")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[92] || (d[92] = (s) => T.view = s),
                          name: "view",
                          onChange: Yt
                        }, [
                          l("option", tO, v(g(m)("library", "Compact")), 1),
                          l("option", nO, v(g(m)("library", "Gallery")), 1),
                          l("option", iO, v(g(m)("library", "List")), 1),
                          l("option", aO, v(g(m)("library", "Shelf")), 1)
                        ], 544), [
                          [Xt, T.view]
                        ])
                      ])
                    ]),
                    l("div", rO, [
                      W.value.length > 0 ? (y(), w("a", {
                        key: 0,
                        href: Er(),
                        class: "button secondary library-mobile-filter-clear",
                        onClick: xe(kr, ["prevent"])
                      }, v(g(m)("library", "Clear all")), 9, oO)) : D("", !0),
                      l("button", sO, v(tt.value), 1)
                    ])
                  ], 40, I2)
                ], 32),
                l("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  l("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: xe(Yt, ["prevent"])
                  }, [
                    (y(!0), w(ae, null, Ce(mr.value, (s) => (y(), w("input", {
                      key: s.key,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, uO))), 128)),
                    l("label", dO, [
                      Te(v(g(m)("library", "Sort")), 1),
                      Ie(l("select", {
                        "onUpdate:modelValue": d[93] || (d[93] = (s) => T.sort = s),
                        name: "sort",
                        onChange: Yt
                      }, [
                        l("option", fO, v(g(m)("library", "Title")), 1),
                        l("option", hO, v(g(m)("library", "Date added")), 1),
                        l("option", pO, v(g(m)("library", "Publication date")), 1),
                        l("option", vO, v(g(m)("library", "Series")), 1),
                        l("option", gO, v(g(m)("library", "Recently opened")), 1),
                        l("option", mO, v(g(m)("library", "Format")), 1)
                      ], 544), [
                        [Xt, T.sort]
                      ])
                    ]),
                    l("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": g(m)("library", "View")
                    }, [
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Ee({ active: Wt.value === "compact" }),
                        "aria-pressed": Wt.value === "compact" ? "true" : "false",
                        onClick: d[94] || (d[94] = (s) => Qo("compact"))
                      }, v(g(m)("library", "Compact")), 11, yO),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ee({ active: Wt.value === "gallery" }),
                        "aria-pressed": Wt.value === "gallery" ? "true" : "false",
                        onClick: d[95] || (d[95] = (s) => Qo("gallery"))
                      }, v(g(m)("library", "Gallery")), 11, _O),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ee({ active: Wt.value === "list" }),
                        "aria-pressed": Wt.value === "list" ? "true" : "false",
                        onClick: d[96] || (d[96] = (s) => Qo("list"))
                      }, v(g(m)("library", "List")), 11, wO),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ee({ active: Wt.value === "shelf" }),
                        "aria-pressed": Wt.value === "shelf" ? "true" : "false",
                        onClick: d[97] || (d[97] = (s) => Qo("shelf"))
                      }, v(g(m)("library", "Shelf")), 11, SO)
                    ], 8, bO)
                  ], 40, cO),
                  l("section", CO, [
                    l("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, v(g(m)("library", "Collections")), 9, TO),
                    l("form", {
                      method: "post",
                      action: jo.value,
                      class: "library-saved-collection-save-form",
                      title: cc.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: tn.value
                      }, null, 8, kO),
                      l("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Mg.value
                      }, null, 8, AO),
                      l("label", null, [
                        Te(v(g(m)("library", "Collection name")), 1),
                        l("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !cc.value,
                          autocomplete: "off"
                        }, null, 8, xO)
                      ]),
                      l("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !cc.value,
                        title: g(m)("library", "Save current view")
                      }, v(g(m)("library", "Save")), 9, OO)
                    ], 8, EO),
                    Uo.value.length > 0 ? (y(), w("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (y(!0), w(ae, null, Ce(Uo.value, (s) => (y(), w("article", {
                        key: s.id,
                        class: "library-saved-collection-card"
                      }, [
                        l("a", {
                          class: "library-saved-collection-link",
                          href: Ug(s.filters)
                        }, [
                          l("strong", null, v(s.name), 1),
                          l("span", RO, v(s.countPending ? "—" : g(dn)("library", "%n item", "%n items", Number(s.count || 0))), 1)
                        ], 8, LO),
                        l("form", {
                          method: "post",
                          action: jg(s.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: tn.value
                          }, null, 8, PO),
                          l("button", $O, v(g(m)("library", "Delete")), 1)
                        ], 8, IO)
                      ]))), 128))
                    ], 8, NO)) : D("", !0)
                  ]),
                  xn.value.length > 0 ? (y(), w("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    l("summary", DO, [
                      d[110] || (d[110] = l("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      l("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, v(g(m)("library", "Batch actions")), 9, MO),
                      l("small", zO, v(g(m)("library", "Batch actions for selected publications")), 1),
                      l("b", UO, v(g(dn)("library", "%n publication selected", "%n publications selected", xn.value.length)), 1)
                    ]),
                    l("p", jO, v(g(dn)("library", "%n publication selected", "%n publications selected", xn.value.length)), 1),
                    l("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: ug
                    }, [
                      l("form", {
                        method: "post",
                        action: Gl.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: tn.value
                        }, null, 8, HO),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, VO)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, v(g(m)("library", "Apply")), 9, KO)
                      ], 8, BO),
                      l("form", {
                        method: "post",
                        action: Wl.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: tn.value
                        }, null, 8, WO),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, qO)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, v(g(m)("library", "Remove")), 9, YO)
                      ], 8, GO),
                      l("form", {
                        method: "post",
                        action: ql.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: tn.value
                        }, null, 8, ZO),
                        (y(!0), w(ae, null, Ce(mt.value, (s) => (y(), w("input", {
                          key: `reset-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, JO))), 128)),
                        d[111] || (d[111] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, v(g(m)("library", "Reset metadata")), 9, QO)
                      ], 8, XO),
                      l("form", {
                        method: "post",
                        action: Yl.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: tn.value
                        }, null, 8, t3),
                        (y(!0), w(ae, null, Ce(mt.value, (s) => (y(), w("input", {
                          key: `edit-preview-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, n3))), 128)),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Field")), 1),
                          l("select", i3, [
                            l("option", a3, v(g(m)("library", "Publication type")), 1),
                            l("option", r3, v(g(m)("library", "Subtitle")), 1),
                            l("option", o3, v(g(m)("library", "Creators")), 1),
                            l("option", s3, v(g(m)("library", "Series / periodical")), 1),
                            l("option", l3, v(g(m)("library", "Publication date")), 1),
                            l("option", c3, v(g(m)("library", "Language")), 1),
                            l("option", u3, v(g(m)("library", "Publisher")), 1),
                            l("option", d3, v(g(m)("library", "Subjects")), 1),
                            l("option", f3, v(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, h3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, v(g(m)("library", "Preview edit")), 9, p3)
                      ], 8, e3),
                      l("form", {
                        method: "post",
                        action: Mn.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: tn.value
                        }, null, 8, g3),
                        (y(!0), w(ae, null, Ce(mt.value, (s) => (y(), w("input", {
                          key: `cover-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, m3))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, v(g(m)("library", "Fresh covers")), 9, b3)
                      ], 8, v3)
                    ], 32)
                  ], 8, FO)) : D("", !0)
                ], 8, lO),
                pr.value ? (y(), w("p", y3, v(pr.value), 1)) : D("", !0),
                vr.value ? (y(), w("p", _3, v(vr.value), 1)) : D("", !0),
                hr.value ? (y(), w("p", w3, v(hr.value), 1)) : D("", !0),
                l("div", S3, [
                  At.loading ? (y(), w("span", C3, v(g(m)("library", "Updating catalogue…")), 1)) : At.completed ? (y(), w("span", T3, v(g(dn)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(z.value.total || 0))), 1)) : D("", !0)
                ]),
                Oi.value ? (y(), w("section", E3, [
                  l("p", k3, v(dr.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: cr.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : An.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, v(ur.value), 9, A3),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    l("span", null, v(g(dn)("library", "%n item", "%n items", z.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (y(), w("span", O3, v(O.value.earliestYear) + "–" + v(O.value.latestYear), 1)) : D("", !0),
                    O.value?.datedCount ? (y(), w("span", N3, v(O.value.datedCount) + " " + v(g(m)("library", "dated")), 1)) : D("", !0),
                    O.value?.undatedCount > 0 ? (y(), w("span", L3, v(O.value.undatedCount) + " " + v(g(m)("library", "undated")), 1)) : D("", !0)
                  ], 8, x3),
                  xi.value && O.value ? (y(), w("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, v(g(m)("library", "Publication contents")), 1),
                    l("span", null, v(g(dn)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (y(), w("span", I3, v(O.value.earliestYear) + "–" + v(O.value.latestYear), 1)) : D("", !0),
                    l("span", null, v(O.value.datedCount) + " " + v(g(m)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (y(), w("span", P3, v(O.value.undatedCount) + " " + v(g(m)("library", "without dates yet")), 1)) : D("", !0),
                    l("span", null, v(g(m)("library", "read-only grouping")), 1)
                  ], 8, R3)) : D("", !0),
                  xi.value && O.value?.issueGroups?.length ? (y(), w("section", $3, [
                    l("div", null, [
                      l("p", F3, v(g(m)("library", "Issue order")), 1),
                      l("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, v(g(m)("library", "Read-only issue/date grouping")), 9, D3)
                    ]),
                    l("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(m)("library", "Visual issue strip")
                    }, [
                      (y(!0), w(ae, null, Ce(O.value.issueGroups, (s) => (y(), w("a", {
                        key: `strip-${s.label}`,
                        class: "library-issue-strip-card",
                        href: s.items?.[0]?.detailsUrl || "#"
                      }, [
                        l("span", null, v(s.label), 1),
                        l("strong", null, v(s.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        l("small", null, v(g(dn)("library", "%n item", "%n items", s.items?.length || 0)), 1)
                      ], 8, z3))), 128))
                    ], 8, M3),
                    O.value.gapRanges?.length ? (y(), w("p", U3, v(g(m)("library", "Gap")) + ": " + v(O.value.gapRanges.join(", ")), 1)) : D("", !0),
                    (y(!0), w(ae, null, Ce(O.value.issueGroups, (s) => (y(), w("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, v(s.label), 1),
                      l("ol", null, [
                        (y(!0), w(ae, null, Ce(s.items, (P, te) => (y(), w("li", {
                          key: P.itemId
                        }, [
                          l("span", j3, v(P.issueLabel), 1),
                          l("a", {
                            href: P.detailsUrl || "#"
                          }, v(P.title), 9, B3),
                          l("small", null, [
                            Te(v(P.publicationType), 1),
                            P.publicationDate ? (y(), w(ae, { key: 0 }, [
                              Te(" · " + v(P.publicationDate), 1)
                            ], 64)) : D("", !0)
                          ]),
                          l("small", H3, [
                            te > 0 ? (y(), w(ae, { key: 0 }, [
                              Te(v(g(m)("library", "Previous issue")), 1)
                            ], 64)) : D("", !0),
                            te > 0 && te < s.items.length - 1 ? (y(), w(ae, { key: 1 }, [
                              Te(" · ")
                            ], 64)) : D("", !0),
                            te < s.items.length - 1 ? (y(), w(ae, { key: 2 }, [
                              Te(v(g(m)("library", "Next issue")), 1)
                            ], 64)) : D("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (y(), w("details", V3, [
                      l("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, v(g(m)("library", "Unknown issue/date")) + " · " + v(O.value.unknownIssueItems.length), 9, K3)
                    ])) : D("", !0)
                  ])) : D("", !0),
                  l("p", null, [
                    l("a", {
                      href: wt.value,
                      class: "button secondary library-discovery-back-link"
                    }, v(g(m)("library", "Back to full catalogue")), 9, G3)
                  ])
                ])) : D("", !0),
                l("div", W3, [
                  l("p", q3, [
                    Te(v(g(m)("library", "Showing")) + " " + v(z.value.from) + "–" + v(z.value.to) + " " + v(g(m)("library", "of")) + " " + v(z.value.total) + " " + v(g(m)("library", "catalogue items")), 1),
                    W.value.length > 0 ? (y(), w("span", Y3, [
                      d[112] || (d[112] = Te(" · ", -1)),
                      l("a", {
                        href: Er(),
                        onClick: xe(kr, ["prevent"])
                      }, v(g(m)("library", "Clear all filters")), 9, X3)
                    ])) : D("", !0)
                  ]),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    l("span", J3, [
                      Te(v(g(m)("library", "Page")) + " " + v(z.value.page), 1),
                      z.value.total > 0 ? (y(), w("span", Q3, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : D("", !0)
                    ]),
                    z.value.previousUrl ? (y(), w("a", {
                      key: 0,
                      href: z.value.previousUrl
                    }, v(g(m)("library", "Previous")), 9, eN)) : (y(), w("span", tN, v(g(m)("library", "Previous")), 1)),
                    z.value.nextUrl ? (y(), w("a", {
                      key: 2,
                      href: z.value.nextUrl
                    }, v(g(m)("library", "Next")), 9, nN)) : (y(), w("span", iN, v(g(m)("library", "Next")), 1))
                  ], 8, Z3)
                ]),
                b.value.length === 0 ? (y(), w("div", {
                  key: 4,
                  class: Ee(["library-empty-content", { "library-first-run-guidance": ia.value || Ni.value, "library-filter-empty-state": Jn.value && !ia.value && !Ni.value }]),
                  role: "status"
                }, [
                  ia.value ? (y(), w(ae, { key: 0 }, [
                    l("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, v(g(m)("library", "Start with one Library root")), 9, aN),
                    l("p", rN, [
                      l("a", {
                        href: Ti.value,
                        class: "button primary"
                      }, v(g(m)("library", "Add a Library root")), 9, oN),
                      l("span", sN, v(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Ni.value ? (y(), w(ae, { key: 1 }, [
                    l("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, v(g(m)("library", "No enabled Library roots")), 9, lN),
                    l("p", cN, [
                      l("a", {
                        href: Ti.value,
                        class: "button primary"
                      }, v(g(m)("library", "Open Library settings")), 9, uN)
                    ])
                  ], 64)) : Jn.value ? (y(), w(ae, { key: 2 }, [
                    l("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, v(g(m)("library", "No matches for the current filters")), 9, dN),
                    l("p", fN, [
                      l("a", {
                        href: $g(),
                        class: "button secondary",
                        onClick: d[98] || (d[98] = xe((s) => $d("q"), ["prevent"]))
                      }, v(g(m)("library", "Clear search")), 9, hN),
                      W.value.length > 0 ? (y(), w("a", {
                        key: 0,
                        href: Er(),
                        class: "button primary",
                        onClick: xe(kr, ["prevent"])
                      }, v(g(m)("library", "Clear all filters")), 9, pN)) : D("", !0)
                    ])
                  ], 64)) : (y(), w(ae, { key: 3 }, [
                    l("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, v(g(m)("library", "No catalogue items yet")), 9, vN),
                    l("p", gN, [
                      l("a", {
                        href: Ti.value,
                        class: "button primary"
                      }, v(g(m)("library", "Run a scan from settings")), 9, mN)
                    ])
                  ], 64))
                ], 2)) : D("", !0),
                b.value.length > 0 ? (y(), w("label", bN, [
                  l("input", {
                    type: "checkbox",
                    checked: xn.value.length === b.value.length,
                    onChange: lg
                  }, null, 40, yN),
                  Te(" " + v(g(m)("library", "Select all publications on this page")), 1)
                ])) : D("", !0),
                b.value.length > 0 && Wt.value === "list" ? (y(), w("ul", _N, [
                  (y(!0), w(ae, null, Ce(b.value, (s) => (y(), w("li", {
                    key: s.id,
                    class: Ee(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Vo.value.has(Number(s.id)), "library-catalogue-list-row--open": Li.value && Number(ra.value) === Number(s.id) }])
                  }, [
                    l("label", wN, [
                      l("input", {
                        type: "checkbox",
                        checked: Vo.value.has(Number(s.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${s.title}`,
                        onChange: (P) => fd(s.id, P.currentTarget.checked)
                      }, null, 40, SN)
                    ]),
                    l("div", CN, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (P) => zn(s, P)
                      }, [
                        l("bdi", EN, v(s.title), 1)
                      ], 8, TN),
                      s.creators ? (y(), w("span", kN, [
                        l("bdi", AN, v(s.creators), 1)
                      ])) : D("", !0)
                    ]),
                    l("dl", xN, [
                      s.publication ? (y(), w("div", ON, [
                        l("dt", null, v(g(m)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", NN, v(s.publication), 1)
                        ])
                      ])) : D("", !0),
                      s.publicationDate ? (y(), w("div", LN, [
                        l("dt", null, v(g(m)("library", "Publication date")), 1),
                        l("dd", null, v(s.publicationDate), 1)
                      ])) : D("", !0),
                      s.extension || s.publicationType ? (y(), w("div", RN, [
                        l("dt", null, v(g(m)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: Ee(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, v(s.extension ? za(s.extension) : s.publicationType), 11, IN)
                        ])
                      ])) : D("", !0),
                      s.shelf ? (y(), w("div", PN, [
                        l("dt", null, v(g(m)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", $N, v(s.shelf), 1)
                        ])
                      ])) : D("", !0)
                    ]),
                    l("div", FN, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl
                      }, v(g(m)("library", "Open")), 9, DN),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (P) => zn(s, P)
                      }, v(g(m)("library", "Details")), 9, MN)
                    ])
                  ], 2))), 128))
                ])) : b.value.length > 0 ? (y(), w("div", {
                  key: 7,
                  class: Ee(["library-cover-gallery", Da.value])
                }, [
                  (y(!0), w(ae, null, Ce(b.value, (s) => (y(), w("article", {
                    key: s.id,
                    class: Ee(["library-cover-card", { "library-cover-card--cover-loaded": Ar(s) === "loaded", "library-cover-card--cover-error": Ar(s) === "error", "library-cover-card--selected": Vo.value.has(Number(s.id)), "library-cover-card--open": Li.value && Number(ra.value) === Number(s.id) }])
                  }, [
                    l("label", zN, [
                      l("input", {
                        type: "checkbox",
                        checked: Vo.value.has(Number(s.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${s.title}`,
                        onChange: (P) => fd(s.id, P.currentTarget.checked)
                      }, null, 40, UN)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": Li.value && Number(ra.value) === Number(s.id) ? "true" : "false",
                      onClick: (P) => zn(s, P)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, v(g(m)("library", "Details")), 9, BN),
                      l("span", HN, [
                        Ar(s) === "loading" ? (y(), w("span", VN)) : D("", !0),
                        l("img", {
                          class: Ee(["library-cover-image", { "library-cover-image--loaded": Ar(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (P) => Bg(s),
                          onError: (P) => Hg(s)
                        }, null, 42, KN),
                        Ar(s) === "error" ? (y(), w("span", GN, v(g(m)("library", "Cover unavailable")), 1)) : D("", !0)
                      ])
                    ], 8, jN),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: xe((P) => Ud(s, P), ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: tn.value
                      }, null, 8, qN),
                      d[113] || (d[113] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("input", {
                        type: "hidden",
                        name: "starred",
                        value: s.starred ? "0" : "1"
                      }, null, 8, YN),
                      l("button", {
                        type: "submit",
                        class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": s.starred }]),
                        "aria-pressed": s.starred ? "true" : "false",
                        title: s.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": s.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": xr[s.id] ? "true" : void 0,
                        disabled: xr[s.id],
                        onClick: xe((P) => Ud(s, P), ["prevent"])
                      }, v(s.starred ? "★" : "☆"), 11, XN),
                      Or[s.id] ? (y(), w("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, v(Or[s.id]), 9, ZN)) : D("", !0)
                    ], 40, WN),
                    l("div", JN, [
                      l("div", QN, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (P) => zn(s, P)
                          }, [
                            l("bdi", nL, v(s.title), 1)
                          ], 8, tL)
                        ], 8, eL),
                        s.creators ? (y(), w("p", iL, [
                          l("bdi", aL, v(s.creators), 1)
                        ])) : D("", !0),
                        uc(s) || s.extension ? (y(), w("div", rL, [
                          s.extension ? (y(), w("span", oL, [
                            l("bdi", sL, v(za(s.extension)), 1)
                          ])) : D("", !0),
                          uc(s) ? (y(), w("p", lL, [
                            l("bdi", cL, v(uc(s)), 1)
                          ])) : D("", !0)
                        ])) : D("", !0),
                        l("div", uL, [
                          l("a", {
                            class: "library-cover-read",
                            href: s.openUrl
                          }, v(g(m)("library", "Open")), 9, dL),
                          ye(g(Gs), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: Re(() => [
                              ye(g(Ka), {
                                href: s.filesUrl
                              }, {
                                default: Re(() => [
                                  Te(v(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(Ka), {
                                href: s.downloadUrl
                              }, {
                                default: Re(() => [
                                  Te(v(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(Ka), {
                                href: s.detailsUrl
                              }, {
                                default: Re(() => [
                                  Te(v(g(m)("library", "Maintenance")), 1)
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
                ], 2)) : D("", !0),
                b.value.length > 0 ? (y(), w("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  l("span", hL, [
                    Te(v(g(m)("library", "Page")) + " " + v(z.value.page), 1),
                    z.value.total > 0 ? (y(), w("span", pL, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : D("", !0)
                  ]),
                  z.value.previousUrl ? (y(), w("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, v(g(m)("library", "Previous")), 9, vL)) : (y(), w("span", gL, v(g(m)("library", "Previous")), 1)),
                  z.value.nextUrl ? (y(), w("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, v(g(m)("library", "Next")), 9, mL)) : (y(), w("span", bL, v(g(m)("library", "Next")), 1))
                ], 8, fL)) : D("", !0)
              ], 10, x2))
            ], 8, Sk)
          ]),
          _: 1
        }),
        ye(g(ST), {
          ref_key: "sidebarComponent",
          ref: sa,
          class: "library-native-item-sidebar",
          open: Li.value,
          "no-toggle": "",
          loading: qt.loading,
          name: Oe.value?.title || g(m)("library", "Publication details"),
          subname: Oe.value?.creators || "",
          role: la.value ? "dialog" : void 0,
          "aria-modal": la.value ? "true" : void 0,
          "aria-labelledby": la.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": la.value && Oe.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: bd,
          onClosed: mg,
          onClose: Xo
        }, {
          default: Re(() => [
            l("div", yL, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: hd,
                class: "hidden-visually",
                tabindex: "-1"
              }, v(Oe.value?.title || g(m)("library", "Publication details")), 513),
              qt.loading && !Oe.value ? (y(), w("p", _L, v(g(m)("library", "Loading publication details…")), 1)) : qt.error ? (y(), w("div", {
                key: 1,
                class: "library-sidebar-state",
                role: qt.missing ? "status" : "alert"
              }, [
                l("p", null, v(qt.error), 1),
                qt.missing ? D("", !0) : (y(), w("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: d[99] || (d[99] = (s) => _r(ra.value, { historyMode: "none" }))
                }, v(g(m)("library", "Try again")), 1))
              ], 8, wL)) : Oe.value ? (y(), w(ae, { key: 2 }, [
                l("p", SL, v(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", CL, [
                  l("span", TL, v(g(m)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Oe.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, EL),
                  l("div", kL, [
                    l("p", AL, [
                      l("bdi", xL, v(Oe.value.publicationType || g(m)("library", "Publication")), 1),
                      Oe.value.extension ? (y(), w("span", OL, [
                        d[114] || (d[114] = Te(" · ", -1)),
                        l("bdi", NL, v(za(Oe.value.extension)), 1)
                      ])) : D("", !0)
                    ]),
                    l("div", LL, [
                      l("a", {
                        class: "button primary",
                        href: Oe.value.openUrl
                      }, v(g(m)("library", "Open")), 9, RL),
                      ye(g(Gs), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: Re(() => [
                          ye(g(Ka), {
                            href: Oe.value.filesUrl
                          }, {
                            default: Re(() => [
                              Te(v(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(Ka), {
                            href: Oe.value.downloadUrl
                          }, {
                            default: Re(() => [
                              Te(v(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(Ka), {
                            href: Oe.value.detailsUrl
                          }, {
                            default: Re(() => [
                              Te(v(g(m)("library", "Maintenance (legacy)")), 1)
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
                  "aria-label": g(m)("library", "Publication detail sections")
                }, [
                  (y(), w(ae, null, Ce(fg, (s) => l("button", {
                    key: s.key,
                    type: "button",
                    class: Ee({ active: oa.value === s.key }),
                    "aria-current": oa.value === s.key ? "page" : void 0,
                    onClick: (P) => oa.value = s.key
                  }, v(g(m)("library", s.label)), 11, PL)), 64))
                ], 8, IL),
                oa.value === "overview" ? (y(), w("section", $L, [
                  l("h3", FL, v(g(m)("library", "Overview")), 1),
                  Oe.value.description ? (y(), w("p", DL, [
                    l("bdi", ML, v(Oe.value.description), 1)
                  ])) : D("", !0),
                  l("dl", zL, [
                    Oe.value.publication ? (y(), w("div", UL, [
                      l("dt", null, v(g(m)("library", "Series")), 1),
                      l("dd", null, v(Oe.value.publication), 1)
                    ])) : D("", !0),
                    Oe.value.publicationDate ? (y(), w("div", jL, [
                      l("dt", null, v(g(m)("library", "Date")), 1),
                      l("dd", null, v(Oe.value.publicationDate), 1)
                    ])) : D("", !0),
                    Oe.value.publisher ? (y(), w("div", BL, [
                      l("dt", null, v(g(m)("library", "Publisher")), 1),
                      l("dd", null, v(Oe.value.publisher), 1)
                    ])) : D("", !0),
                    Oe.value.language ? (y(), w("div", HL, [
                      l("dt", null, v(g(m)("library", "Language")), 1),
                      l("dd", null, v(Oe.value.language), 1)
                    ])) : D("", !0),
                    Oe.value.shelf ? (y(), w("div", VL, [
                      l("dt", null, v(g(m)("library", "Shelf")), 1),
                      l("dd", null, v(Oe.value.shelf), 1)
                    ])) : D("", !0)
                  ])
                ])) : oa.value === "metadata" ? (y(), w("section", KL, [
                  l("h3", GL, v(g(m)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: xe(vg, ["prevent"])
                  }, [
                    l("label", null, [
                      Te(v(g(m)("library", "Title")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": d[100] || (d[100] = (s) => Dt.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ft, Dt.title]
                      ])
                    ]),
                    l("label", null, [
                      Te(v(g(m)("library", "Publication date")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": d[101] || (d[101] = (s) => Dt.publicationDate = s),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, WL), [
                        [ft, Dt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, v(g(m)("library", "Identifiers")), 1),
                      (y(!0), w(ae, null, Ce(Dt.identifiers, (s, P) => (y(), w("div", {
                        key: P,
                        class: "library-sidebar-identifier"
                      }, [
                        Ie(l("input", {
                          "onUpdate:modelValue": (te) => s.scheme = te,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, qL), [
                          [ft, s.scheme]
                        ]),
                        Ie(l("input", {
                          "onUpdate:modelValue": (te) => s.displayValue = te,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, YL), [
                          [ft, s.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (te) => pg(P)
                        }, v(g(m)("library", "Remove")), 9, XL)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: hg
                      }, v(g(m)("library", "Add identifier")), 1)
                    ]),
                    l("p", ZL, v(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    On.error ? (y(), w("p", JL, v(On.error), 1)) : On.saved ? (y(), w("p", QL, v(g(m)("library", "Metadata saved.")), 1)) : D("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: On.saving
                    }, v(On.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, eR)
                  ], 32),
                  Yo(Oe.value).length ? (y(), w("section", tR, [
                    l("h4", nR, v(g(m)("library", "Scanner suggestions")), 1),
                    l("p", iR, v(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (y(!0), w(ae, null, Ce(Yo(Oe.value), (s) => (y(), w("div", {
                        key: s.field
                      }, [
                        l("dt", null, v(s.field) + " · " + v(s.sourceProvenance), 1),
                        l("dd", null, [
                          Te(v(g(m)("library", "Current")) + ": " + v(s.currentValue || "—"), 1),
                          d[115] || (d[115] = l("br", null, null, -1)),
                          Te(v(g(m)("library", "Suggestion")) + ": " + v(s.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : D("", !0)
                ])) : (y(), w("section", aR, [
                  l("h3", rR, v(g(m)("library", "Activity")), 1),
                  l("dl", oR, [
                    l("div", null, [
                      l("dt", null, v(g(m)("library", "Scan status")), 1),
                      l("dd", null, v(Oe.value.scanStatus || "—"), 1)
                    ]),
                    Oe.value.workflowStatus ? (y(), w("div", sR, [
                      l("dt", null, v(g(m)("library", "Workflow")), 1),
                      l("dd", null, v(Oe.value.workflowStatus), 1)
                    ])) : D("", !0),
                    Oe.value.metadataSource ? (y(), w("div", lR, [
                      l("dt", null, v(g(m)("library", "Metadata source")), 1),
                      l("dd", null, v(Oe.value.metadataSource), 1)
                    ])) : D("", !0),
                    Oe.value.cachedPath ? (y(), w("div", cR, [
                      l("dt", null, v(g(m)("library", "File")), 1),
                      l("dd", uR, [
                        Oe.value.openUrl ? (y(), w("a", {
                          key: 0,
                          href: Oe.value.openUrl
                        }, [
                          l("bdi", fR, v(Oe.value.cachedPath), 1)
                        ], 8, dR)) : (y(), w("bdi", hR, v(Oe.value.cachedPath), 1))
                      ])
                    ])) : D("", !0)
                  ])
                ])),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(m)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Go.value,
                    onClick: d[102] || (d[102] = (s) => Zo(Go.value))
                  }, v(g(m)("library", "Previous item")), 9, vR),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Wo.value,
                    onClick: d[103] || (d[103] = (s) => Zo(Wo.value))
                  }, v(g(m)("library", "Next item")), 9, gR)
                ], 8, pR)
              ], 64)) : D("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function wR() {
  window.LibraryStartupWatchdog?.fail();
}
function SR(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Ku("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !SR(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  xy(_R, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  wR(), console.error("[library] Vue startup failed", e);
}
