// @__NO_SIDE_EFFECTS__
function Ou(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const We = {}, Xa = [], Sn = () => {
}, $h = () => !1, Sl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Cl = (e) => e.startsWith("onUpdate:"), yt = Object.assign, Nu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Yg = Object.prototype.hasOwnProperty, Ze = (e, t) => Yg.call(e, t), Se = Array.isArray, Vi = (e) => ko(e) === "[object Map]", La = (e) => ko(e) === "[object Set]", jd = (e) => ko(e) === "[object Date]", Fe = (e) => typeof e == "function", st = (e) => typeof e == "string", In = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", Fh = (e) => (Je(e) || Fe(e)) && Fe(e.then) && Fe(e.catch), Dh = Object.prototype.toString, ko = (e) => Dh.call(e), Xg = (e) => ko(e).slice(8, -1), Mh = (e) => ko(e) === "[object Object]", Lu = (e) => st(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Kr = /* @__PURE__ */ Ou(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Tl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Zg = /-\w/g, Gt = Tl(
  (e) => e.replace(Zg, (t) => t.slice(1).toUpperCase())
), Jg = /\B([A-Z])/g, yi = Tl(
  (e) => e.replace(Jg, "-$1").toLowerCase()
), El = Tl((e) => e.charAt(0).toUpperCase() + e.slice(1)), fc = Tl(
  (e) => e ? `on${El(e)}` : ""
), Rt = (e, t) => !Object.is(e, t), gs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, zh = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, kl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Qg = (e) => {
  const t = st(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Hd;
const Al = () => Hd || (Hd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pn(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = st(i) ? im(i) : pn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (st(e) || Je(e))
    return e;
}
const em = /;(?![^(]*\))/g, tm = /:([^]+)/, nm = /\/\*[^]*?\*\//g;
function im(e) {
  const t = {};
  return e.replace(nm, "").split(em).forEach((n) => {
    if (n) {
      const i = n.split(tm);
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
function ws(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !st(t) && (e.class = Ee(t)), n && (e.style = pn(n)), e;
}
const am = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", rm = /* @__PURE__ */ Ou(am);
function Uh(e) {
  return !!e || e === "";
}
function om(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = qi(e[i], t[i]);
  return n;
}
function Vd(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (!i[o] && qi(a, n[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function qi(e, t) {
  if (e === t) return !0;
  let n = jd(e), i = jd(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = In(e), i = In(t), n || i)
    return e === t;
  if (n = Se(e), i = Se(t), n || i)
    return n && i ? om(e, t) : !1;
  if (n = Je(e), i = Je(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Vi(e), i = Vi(t), n || i || (n = La(e), i = La(t), n || i))
      return n && i ? Vd(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (c && !u || !c && u || !qi(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function sm(e, t) {
  return e.findIndex((n) => qi(n, t));
}
const Bh = (e) => !!(e && e.__v_isRef === !0), v = (e) => st(e) ? e : e == null ? "" : Se(e) || Je(e) && (e.toString === Dh || !Fe(e.toString)) ? Bh(e) ? v(e.value) : JSON.stringify(e, jh, 2) : String(e), jh = (e, t) => Bh(t) ? jh(e, t.value) : Vi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[hc(i, r) + " =>"] = a, n),
    {}
  )
} : La(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => hc(n))
} : In(t) ? hc(t) : Je(t) && !Se(t) && !Mh(t) ? String(t) : t, hc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    In(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function lm(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Nt;
class cm {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Nt && (Nt.active ? (this.parent = Nt, this.index = (Nt.scopes || (Nt.scopes = [])).push(
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
      const n = Nt;
      try {
        return Nt = this, t();
      } finally {
        Nt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Nt, Nt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Nt === this)
        Nt = this.prevScope;
      else {
        let t = Nt;
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
function um() {
  return Nt;
}
let ot;
const pc = /* @__PURE__ */ new WeakSet();
class Hh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Nt && (Nt.active ? Nt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, pc.has(this) && (pc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Kh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Kd(this), Gh(this);
    const t = ot, n = Ln;
    ot = this, Ln = !0;
    try {
      return this.fn();
    } finally {
      Wh(this), ot = t, Ln = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Pu(t);
      this.deps = this.depsTail = void 0, Kd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? pc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xc(this) && this.run();
  }
  get dirty() {
    return Xc(this);
  }
}
let Vh = 0, Gr, Wr;
function Kh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wr, Wr = e;
    return;
  }
  e.next = Gr, Gr = e;
}
function Ru() {
  Vh++;
}
function Iu() {
  if (--Vh > 0)
    return;
  if (Wr) {
    let t = Wr;
    for (Wr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gr; ) {
    let t = Gr;
    for (Gr = void 0; t; ) {
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
function Gh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Wh(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Pu(i), dm(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Xc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === so) || (e.globalVersion = so, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ot, i = Ln;
  ot = e, Ln = !0;
  try {
    Gh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Rt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ot = n, Ln = i, Wh(e), e.flags &= -3;
  }
}
function Pu(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Pu(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function dm(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ln = !0;
const Yh = [];
function vi() {
  Yh.push(Ln), Ln = !1;
}
function gi() {
  const e = Yh.pop();
  Ln = e === void 0 ? !0 : e;
}
function Kd(e) {
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
let so = 0;
class fm {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class xl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ot || !Ln || ot === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ot)
      n = this.activeLink = new fm(ot, this), ot.deps ? (n.prevDep = ot.depsTail, ot.depsTail.nextDep = n, ot.depsTail = n) : ot.deps = ot.depsTail = n, Xh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ot.depsTail, n.nextDep = void 0, ot.depsTail.nextDep = n, ot.depsTail = n, ot.deps === n && (ot.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, so++, this.notify(t);
  }
  notify(t) {
    Ru();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Iu();
    }
  }
}
function Xh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Xh(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Zc = /* @__PURE__ */ new WeakMap(), xa = /* @__PURE__ */ Symbol(
  ""
), Jc = /* @__PURE__ */ Symbol(
  ""
), lo = /* @__PURE__ */ Symbol(
  ""
);
function Ht(e, t, n) {
  if (Ln && ot) {
    let i = Zc.get(e);
    i || Zc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new xl()), a.map = i, a.key = n), a.track();
  }
}
function li(e, t, n, i, a, r) {
  const o = Zc.get(e);
  if (!o) {
    so++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (Ru(), t === "clear")
    o.forEach(c);
  else {
    const u = Se(e), h = u && Lu(n);
    if (u && n === "length") {
      const f = Number(i);
      o.forEach((b, C) => {
        (C === "length" || C === lo || !In(C) && C >= f) && c(b);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), h && c(o.get(lo)), t) {
        case "add":
          u ? h && c(o.get("length")) : (c(o.get(xa)), Vi(e) && c(o.get(Jc)));
          break;
        case "delete":
          u || (c(o.get(xa)), Vi(e) && c(o.get(Jc)));
          break;
        case "set":
          Vi(e) && c(o.get(xa));
          break;
      }
  }
  Iu();
}
function ja(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Ht(t, "iterate", lo), /* @__PURE__ */ Cn(e) ? t : t.map(Pn));
}
function Ol(e) {
  return Ht(e = /* @__PURE__ */ Ye(e), "iterate", lo), e;
}
function Kn(e, t) {
  return /* @__PURE__ */ mi(e) ? ar(/* @__PURE__ */ Oa(e) ? Pn(t) : t) : Pn(t);
}
const hm = {
  __proto__: null,
  [Symbol.iterator]() {
    return vc(this, Symbol.iterator, (e) => Kn(this, e));
  },
  concat(...e) {
    return ja(this).concat(
      ...e.map((t) => Se(t) ? ja(t) : t)
    );
  },
  entries() {
    return vc(this, "entries", (e) => (e[1] = Kn(this, e[1]), e));
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
    return gc(this, "includes", e);
  },
  indexOf(...e) {
    return gc(this, "indexOf", e);
  },
  join(e) {
    return ja(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return gc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ti(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Or(this, "pop");
  },
  push(...e) {
    return Or(this, "push", e);
  },
  reduce(e, ...t) {
    return Gd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Gd(this, "reduceRight", e, t);
  },
  shift() {
    return Or(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ti(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Or(this, "splice", e);
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
    return Or(this, "unshift", e);
  },
  values() {
    return vc(this, "values", (e) => Kn(this, e));
  }
};
function vc(e, t, n) {
  const i = Ol(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ Cn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const pm = Array.prototype;
function ti(e, t, n, i, a, r) {
  const o = Ol(e), c = o !== e && !/* @__PURE__ */ Cn(e), u = o[t];
  if (u !== pm[t]) {
    const b = u.apply(e, r);
    return c ? Pn(b) : b;
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
function Gd(e, t, n, i) {
  const a = Ol(e), r = a !== e && !/* @__PURE__ */ Cn(e);
  let o = n, c = !1;
  a !== e && (r ? (c = i.length === 0, o = function(h, f, b) {
    return c && (c = !1, h = Kn(e, h)), n.call(this, h, Kn(e, f), b, e);
  }) : n.length > 3 && (o = function(h, f, b) {
    return n.call(this, h, f, b, e);
  }));
  const u = a[t](o, ...i);
  return c ? Kn(e, u) : u;
}
function gc(e, t, n) {
  const i = /* @__PURE__ */ Ye(e);
  Ht(i, "iterate", lo);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Du(n[0]) ? (n[0] = /* @__PURE__ */ Ye(n[0]), i[t](...n)) : a;
}
function Or(e, t, n = []) {
  vi(), Ru();
  const i = (/* @__PURE__ */ Ye(e))[t].apply(e, n);
  return Iu(), gi(), i;
}
const vm = /* @__PURE__ */ Ou("__proto__,__v_isRef,__isVue"), Zh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(In)
);
function gm(e) {
  In(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Ht(t, "has", e), t.hasOwnProperty(e);
}
class Jh {
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
      return i === (a ? r ? km : np : r ? tp : ep).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Se(t);
    if (!a) {
      let u;
      if (o && (u = hm[n]))
        return u;
      if (n === "hasOwnProperty")
        return gm;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Wt(t) ? t : i
    );
    if ((In(n) ? Zh.has(n) : vm(n)) || (a || Ht(t, "get", n), r))
      return c;
    if (/* @__PURE__ */ Wt(c)) {
      const u = o && Lu(n) ? c : c.value;
      return a && Je(u) ? /* @__PURE__ */ co(u) : u;
    }
    return Je(c) ? a ? /* @__PURE__ */ co(c) : /* @__PURE__ */ Lt(c) : c;
  }
}
class Qh extends Jh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const o = Se(t) && Lu(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ mi(r);
      if (!/* @__PURE__ */ Cn(i) && !/* @__PURE__ */ mi(i) && (r = /* @__PURE__ */ Ye(r), i = /* @__PURE__ */ Ye(i)), !o && /* @__PURE__ */ Wt(r) && !/* @__PURE__ */ Wt(i))
        return h || (r.value = i), !0;
    }
    const c = o ? Number(n) < t.length : Ze(t, n), u = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Wt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && u && (c ? Rt(i, r) && li(t, "set", n, i) : li(t, "add", n, i)), u;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && li(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!In(n) || !Zh.has(n)) && Ht(t, "has", n), i;
  }
  ownKeys(t) {
    return Ht(
      t,
      "iterate",
      Se(t) ? "length" : xa
    ), Reflect.ownKeys(t);
  }
}
class mm extends Jh {
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
const bm = /* @__PURE__ */ new Qh(), ym = /* @__PURE__ */ new mm(), _m = /* @__PURE__ */ new Qh(!0);
const Qc = (e) => e, ns = (e) => Reflect.getPrototypeOf(e);
function wm(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = Vi(r), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = a[e](...i), f = n ? Qc : t ? ar : Pn;
    return !t && Ht(
      r,
      "iterate",
      u ? Jc : xa
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
function is(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Sm(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      e || (Rt(a, c) && Ht(o, "get", a), Ht(o, "get", c));
      const { has: u } = ns(o), h = t ? Qc : e ? ar : Pn;
      if (u.call(o, a))
        return h(r.get(a));
      if (u.call(o, c))
        return h(r.get(c));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Ht(/* @__PURE__ */ Ye(a), "iterate", xa), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      return e || (Rt(a, c) && Ht(o, "has", a), Ht(o, "has", c)), a === c ? r.has(a) : r.has(a) || r.has(c);
    },
    forEach(a, r) {
      const o = this, c = o.__v_raw, u = /* @__PURE__ */ Ye(c), h = t ? Qc : e ? ar : Pn;
      return !e && Ht(u, "iterate", xa), c.forEach((f, b) => a.call(r, h(f), h(b), o));
    }
  };
  return yt(
    n,
    e ? {
      add: is("add"),
      set: is("set"),
      delete: is("delete"),
      clear: is("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = ns(r), c = /* @__PURE__ */ Ye(a), u = !t && !/* @__PURE__ */ Cn(a) && !/* @__PURE__ */ mi(a) ? c : a;
        return o.has.call(r, u) || Rt(a, u) && o.has.call(r, a) || Rt(c, u) && o.has.call(r, c) || (r.add(u), li(r, "add", u, u)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Cn(r) && !/* @__PURE__ */ mi(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: c, get: u } = ns(o);
        let h = c.call(o, a);
        h || (a = /* @__PURE__ */ Ye(a), h = c.call(o, a));
        const f = u.call(o, a);
        return o.set(a, r), h ? Rt(r, f) && li(o, "set", a, r) : li(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: c } = ns(r);
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
    n[a] = wm(a, e, t);
  }), n;
}
function $u(e, t) {
  const n = Sm(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Cm = {
  get: /* @__PURE__ */ $u(!1, !1)
}, Tm = {
  get: /* @__PURE__ */ $u(!1, !0)
}, Em = {
  get: /* @__PURE__ */ $u(!0, !1)
};
const ep = /* @__PURE__ */ new WeakMap(), tp = /* @__PURE__ */ new WeakMap(), np = /* @__PURE__ */ new WeakMap(), km = /* @__PURE__ */ new WeakMap();
function Am(e) {
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
function Lt(e) {
  return /* @__PURE__ */ mi(e) ? e : Fu(
    e,
    !1,
    bm,
    Cm,
    ep
  );
}
// @__NO_SIDE_EFFECTS__
function xm(e) {
  return Fu(
    e,
    !1,
    _m,
    Tm,
    tp
  );
}
// @__NO_SIDE_EFFECTS__
function co(e) {
  return Fu(
    e,
    !0,
    ym,
    Em,
    np
  );
}
function Fu(e, t, n, i, a) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = Am(Xg(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? i : n
  );
  return a.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function Oa(e) {
  return /* @__PURE__ */ mi(e) ? /* @__PURE__ */ Oa(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function mi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Du(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ye(t) : e;
}
function Om(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && zh(e, "__v_skip", !0), e;
}
const Pn = (e) => Je(e) ? /* @__PURE__ */ Lt(e) : e, ar = (e) => Je(e) ? /* @__PURE__ */ co(e) : e;
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return ap(e, !1);
}
// @__NO_SIDE_EFFECTS__
function ip(e) {
  return ap(e, !0);
}
function ap(e, t) {
  return /* @__PURE__ */ Wt(e) ? e : new Nm(e, t);
}
class Nm {
  constructor(t, n) {
    this.dep = new xl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ye(t), this._value = n ? t : Pn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Cn(t) || /* @__PURE__ */ mi(t);
    t = i ? t : /* @__PURE__ */ Ye(t), Rt(t, n) && (this._rawValue = t, this._value = i ? t : Pn(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Wt(e) ? e.value : e;
}
function fi(e) {
  return Fe(e) ? e() : g(e);
}
const Lm = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Wt(a) && !/* @__PURE__ */ Wt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function rp(e) {
  return /* @__PURE__ */ Oa(e) ? e : new Proxy(e, Lm);
}
class Rm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new xl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Im(e) {
  return new Rm(e);
}
class Pm {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new xl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = so - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ot !== this)
      return Kh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function $m(e, t, n = !1) {
  let i, a;
  return Fe(e) ? i = e : (i = e.get, a = e.set), new Pm(i, a, n);
}
const as = {}, Ss = /* @__PURE__ */ new WeakMap();
let ya;
function Fm(e, t = !1, n = ya) {
  if (n) {
    let i = Ss.get(n);
    i || Ss.set(n, i = []), i.push(e);
  }
}
function Dm(e, t, n = We) {
  const { immediate: i, deep: a, once: r, scheduler: o, augmentJob: c, call: u } = n, h = (T) => a ? T : /* @__PURE__ */ Cn(T) || a === !1 || a === 0 ? ci(T, 1) : ci(T);
  let f, b, C, k, N = !1, A = !1;
  if (/* @__PURE__ */ Wt(e) ? (b = () => e.value, N = /* @__PURE__ */ Cn(e)) : /* @__PURE__ */ Oa(e) ? (b = () => h(e), N = !0) : Se(e) ? (A = !0, N = e.some((T) => /* @__PURE__ */ Oa(T) || /* @__PURE__ */ Cn(T)), b = () => e.map((T) => {
    if (/* @__PURE__ */ Wt(T))
      return T.value;
    if (/* @__PURE__ */ Oa(T))
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
    const T = ya;
    ya = f;
    try {
      return u ? u(e, 3, [k]) : e(k);
    } finally {
      ya = T;
    }
  } : b = Sn, t && a) {
    const T = b, re = a === !0 ? 1 / 0 : a;
    b = () => ci(T(), re);
  }
  const O = um(), F = () => {
    f.stop(), O && O.active && Nu(O.effects, f);
  };
  if (r && t) {
    const T = t;
    t = (...re) => {
      const ue = T(...re);
      return F(), ue;
    };
  }
  let M = A ? new Array(e.length).fill(as) : as;
  const z = (T) => {
    if (!(!(f.flags & 1) || !f.dirty && !T))
      if (t) {
        const re = f.run();
        if (T || a || N || (A ? re.some((ue, X) => Rt(ue, M[X])) : Rt(re, M))) {
          C && C();
          const ue = ya;
          ya = f;
          try {
            const X = [
              re,
              // pass undefined as the old value when it's changed for the first time
              M === as ? void 0 : A && M[0] === as ? [] : M,
              k
            ];
            M = re, u ? u(t, 3, X) : (
              // @ts-expect-error
              t(...X)
            );
          } finally {
            ya = ue;
          }
        }
      } else
        f.run();
  };
  return c && c(z), f = new Hh(b), f.scheduler = o ? () => o(z, !1) : z, k = (T) => Fm(T, !1, f), C = f.onStop = () => {
    const T = Ss.get(f);
    if (T) {
      if (u)
        u(T, 4);
      else
        for (const re of T) re();
      Ss.delete(f);
    }
  }, t ? i ? z(!0) : M = f.run() : o ? o(z.bind(null, !0), !0) : f.run(), F.pause = f.pause.bind(f), F.resume = f.resume.bind(f), F.stop = F, F;
}
function ci(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Wt(e))
    ci(e.value, t, n);
  else if (Se(e))
    for (let i = 0; i < e.length; i++)
      ci(e[i], t, n);
  else if (La(e) || Vi(e))
    e.forEach((i) => {
      ci(i, t, n);
    });
  else if (Mh(e)) {
    for (const i in e)
      ci(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ci(e[i], t, n);
  }
  return e;
}
function Ao(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Nl(a, t, n);
  }
}
function Tn(e, t, n, i) {
  if (Fe(e)) {
    const a = Ao(e, t, n, i);
    return a && Fh(a) && a.catch((r) => {
      Nl(r, t, n);
    }), a;
  }
  if (Se(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Tn(e[r], t, n, i));
    return a;
  }
}
function Nl(e, t, n, i = !0) {
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
      vi(), Ao(r, null, 10, [
        e,
        u,
        h
      ]), gi();
      return;
    }
  }
  Mm(e, n, a, i, o);
}
function Mm(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const tn = [];
let jn = -1;
const Za = [];
let ji = null, Wa = 0;
const op = /* @__PURE__ */ Promise.resolve();
let Cs = null;
function en(e) {
  const t = Cs || op;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zm(e) {
  let t = jn + 1, n = tn.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = tn[i], r = uo(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Mu(e) {
  if (!(e.flags & 1)) {
    const t = uo(e), n = tn[tn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= uo(n) ? tn.push(e) : tn.splice(zm(t), 0, e), e.flags |= 1, sp();
  }
}
function sp() {
  Cs || (Cs = op.then(up));
}
function lp(e) {
  if (!Se(e))
    ji && e.id === -1 ? ji.splice(Wa + 1, 0, e) : e.flags & 1 || (Za.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Za.push(e[t]);
  sp();
}
function Wd(e, t, n = jn + 1) {
  for (; n < tn.length; n++) {
    const i = tn[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      tn.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function cp(e) {
  if (Za.length) {
    const t = [...new Set(Za)].sort(
      (n, i) => uo(n) - uo(i)
    );
    if (Za.length = 0, ji) {
      for (let n = 0; n < t.length; n++)
        ji.push(t[n]);
      return;
    }
    for (ji = t, Wa = 0; Wa < ji.length; Wa++) {
      const n = ji[Wa];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ji = null, Wa = 0;
  }
}
const uo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function up(e) {
  try {
    for (jn = 0; jn < tn.length; jn++) {
      const t = tn[jn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ao(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jn < tn.length; jn++) {
      const t = tn[jn];
      t && (t.flags &= -2);
    }
    jn = -1, tn.length = 0, cp(), Cs = null, (tn.length || Za.length) && up();
  }
}
let Pt = null, Ll = null;
function Ts(e) {
  const t = Pt;
  return Pt = e, Ll = e && e.type.__scopeId || null, t;
}
function Um(e) {
  Ll = e;
}
function Bm() {
  Ll = null;
}
const jm = (e) => Re;
function Re(e, t = Pt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Os(-1);
    const r = Ts(t), o = hi.length;
    let c;
    try {
      c = e(...a);
    } finally {
      for (let u = hi.length; u > o; u--) Ku();
      Ts(r), i._d && Os(1);
    }
    return c;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ie(e, t) {
  if (Pt === null)
    return e;
  const n = Dl(Pt), i = e.dirs || (e.dirs = []);
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
function ha(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const c = a[o];
    r && (c.oldValue = r[o].value);
    let u = c.dir[i];
    u && (vi(), Tn(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), gi());
  }
}
function yn(e, t) {
  if (Kt) {
    let n = Kt.provides;
    const i = Kt.parent && Kt.parent.provides;
    i === n && (n = Kt.provides = Object.create(i)), n[e] = t;
  }
}
function Vt(e, t, n = !1) {
  const i = Ia();
  if (i || Qa) {
    let a = Qa ? Qa._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Fe(t) ? t.call(i && i.proxy) : t;
  }
}
const Hm = /* @__PURE__ */ Symbol.for("v-scx"), Vm = () => Vt(Hm);
function Km(e, t) {
  return Rl(e, null, t);
}
function Gm(e, t) {
  return Rl(
    e,
    null,
    { flush: "sync" }
  );
}
function qe(e, t, n) {
  return Rl(e, t, n);
}
function Rl(e, t, n = We) {
  const { immediate: i, deep: a, flush: r, once: o } = n, c = yt({}, n), u = t && i || !t && r !== "post";
  let h;
  if (mo) {
    if (r === "sync") {
      const k = Vm();
      h = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!u) {
      const k = () => {
      };
      return k.stop = Sn, k.resume = Sn, k.pause = Sn, k;
    }
  }
  const f = Kt;
  c.call = (k, N, A) => Tn(k, f, N, A);
  let b = !1;
  r === "post" ? c.scheduler = (k) => {
    Qt(k, f && f.suspense);
  } : r !== "sync" && (b = !0, c.scheduler = (k, N) => {
    N ? k() : Mu(k);
  }), c.augmentJob = (k) => {
    t && (k.flags |= 4), b && (k.flags |= 2, f && (k.id = f.uid, k.i = f));
  };
  const C = Dm(e, t, c);
  return mo && (h ? h.push(C) : u && C()), C;
}
function Wm(e, t, n) {
  const i = this.proxy, a = st(e) ? e.includes(".") ? dp(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Fe(t) ? r = t : (r = t.handler, n = t);
  const o = No(this), c = Rl(a, r.bind(i), n);
  return o(), c;
}
function dp(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const zi = /* @__PURE__ */ new WeakMap(), fp = /* @__PURE__ */ Symbol("_vte"), Il = (e) => e.__isTeleport, wa = (e) => e && (e.disabled || e.disabled === ""), qm = (e) => e && (e.defer || e.defer === ""), qd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Yd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, eu = (e, t) => {
  const n = e && e.to;
  return st(n) ? t ? t(n) : null : n;
}, Ym = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, o, c, u, h) {
    const {
      mc: f,
      pc: b,
      pbc: C,
      o: { insert: k, querySelector: N, createText: A, createComment: O, parentNode: F }
    } = h, M = wa(t.props);
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
      const fe = wa(X.props), Y = X.target = eu(X.props, N), se = tu(Y, X, A, k);
      Y && (o !== "svg" && qd(Y) ? o = "svg" : o !== "mathml" && Yd(Y) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Y), fe || (T(X, Y, se), zr(X, !1)));
    }, ue = (X) => {
      const fe = () => {
        if (zi.get(X) === fe) {
          if (zi.delete(X), wa(X.props)) {
            const Y = F(X.el) || n;
            T(X, Y, X.anchor), zr(X, !0);
          }
          re(X);
        }
      };
      zi.set(X, fe), Qt(fe, r);
    };
    if (e == null) {
      const X = t.el = A(""), fe = t.anchor = A("");
      if (k(X, n, i), k(fe, n, i), qm(t.props) || r && r.pendingBranch) {
        ue(t);
        return;
      }
      M && (T(t, n, fe), zr(t, !0)), re();
    } else {
      t.el = e.el;
      const X = t.anchor = e.anchor, fe = zi.get(e);
      if (fe) {
        fe.flags |= 8, zi.delete(e), ue(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Y = t.target = e.target, se = t.targetAnchor = e.targetAnchor, me = wa(e.props), Q = me ? n : Y, ee = me ? X : se;
      if (o === "svg" || qd(Y) ? o = "svg" : (o === "mathml" || Yd(Y)) && (o = "mathml"), z ? (C(
        e.dynamicChildren,
        z,
        Q,
        a,
        r,
        o,
        c
      ), Vu(e, t, !0)) : u || b(
        e,
        t,
        Q,
        ee,
        a,
        r,
        o,
        c,
        !1
      ), M)
        me ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : rs(
          t,
          n,
          X,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = eu(t.props, N);
        $ && (t.target = $, rs(
          t,
          $,
          null,
          h,
          0
        ));
      } else me && rs(
        t,
        Y,
        se,
        h,
        1
      );
      zr(t, M);
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
    } = e, k = wa(C), N = r || !k, A = zi.get(e);
    if (A && (A.flags |= 8, zi.delete(e)), b && (a(h), a(f)), r && a(u), !A && (k || b) && o & 16)
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
  move: rs,
  hydrate: Xm
};
function rs(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: c, shapeFlag: u, children: h, props: f } = e, b = r === 2;
  if (b && i(o, t, n), !zi.has(e) && (!b || wa(f)) && u & 16)
    for (let C = 0; C < h.length; C++)
      a(
        h[C],
        t,
        n,
        2
      );
  b && i(c, t, n);
}
function Xm(e, t, n, i, a, r, {
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
  const N = t.target = eu(
    t.props,
    u
  ), A = wa(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (A ? (k(e, t), C(N, O), t.targetAnchor || tu(
      N,
      t,
      f,
      h,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === N ? e : null
    )) : (t.anchor = o(e), C(N, O), t.targetAnchor || tu(N, t, f, h), b(
      O && o(O),
      t,
      N,
      n,
      i,
      a,
      r
    ))), zr(t, A);
  } else A && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const hp = Ym;
function zr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function tu(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[fp] = o, e && (i(r, e, a), i(o, e, a)), o;
}
const _n = /* @__PURE__ */ Symbol("_leaveCb"), Nr = /* @__PURE__ */ Symbol("_enterCb");
function Zm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Zi(() => {
    e.isMounted = !0;
  }), rr(() => {
    e.isUnmounting = !0;
  }), e;
}
const gn = [Function, Array], pp = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: gn,
  onEnter: gn,
  onAfterEnter: gn,
  onEnterCancelled: gn,
  // leave
  onBeforeLeave: gn,
  onLeave: gn,
  onAfterLeave: gn,
  onLeaveCancelled: gn,
  // appear
  onBeforeAppear: gn,
  onAppear: gn,
  onAfterAppear: gn,
  onAppearCancelled: gn
}, vp = (e) => {
  const t = e.subTree;
  return t.component ? vp(t.component) : t;
}, Jm = {
  name: "BaseTransition",
  props: pp,
  setup(e, { slots: t }) {
    const n = Ia(), i = Zm();
    return () => {
      const a = t.default && bp(t.default(), !0), r = a && a.length ? gp(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? D() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: c } = o;
      if (i.isLeaving)
        return mc(r);
      const u = Es(r);
      if (!u)
        return mc(r);
      let h = nu(
        u,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (b) => h = b
      );
      u.type !== It && fo(u, h);
      let f = n.subTree && Es(n.subTree);
      if (f && f.type !== It && !Sa(f, u) && vp(n).type !== It) {
        let b = nu(
          f,
          o,
          i,
          n
        );
        if (fo(f, b), c === "out-in" && u.type !== It)
          return i.isLeaving = !0, b.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete b.afterLeave, f = void 0;
          }, mc(r);
        c === "in-out" && u.type !== It ? b.delayLeave = (C, k, N) => {
          const A = mp(
            i,
            f
          );
          A[String(f.key)] = f, C[_n] = () => {
            k(), C[_n] = void 0, delete h.delayedLeave, f = void 0;
          }, h.delayedLeave = () => {
            N(), delete h.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function gp(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== It) {
        t = n;
        break;
      }
  }
  return t;
}
const Qm = Jm;
function mp(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function nu(e, t, n, i, a) {
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
  } = t, T = String(e.key), re = mp(n, e), ue = (Y, se) => {
    Y && Tn(
      Y,
      i,
      9,
      se
    );
  }, X = (Y, se) => {
    const me = se[1];
    ue(Y, se), Se(Y) ? Y.every((Q) => Q.length <= 1) && me() : Y.length <= 1 && me();
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
      Y[_n] && Y[_n](
        !0
        /* cancelled */
      );
      const me = re[T];
      me && Sa(e, me) && me.el[_n] && me.el[_n](), ue(se, [Y]);
    },
    enter(Y) {
      if (re[T] === e) return;
      let se = h, me = f, Q = b;
      if (!n.isMounted)
        if (r)
          se = F || h, me = M || f, Q = z || b;
        else
          return;
      let ee = !1;
      Y[Nr] = (U) => {
        ee || (ee = !0, U ? ue(Q, [Y]) : ue(me, [Y]), fe.delayedLeave && fe.delayedLeave(), Y[Nr] = void 0);
      };
      const $ = Y[Nr].bind(null, !1);
      se ? X(se, [Y, $]) : $();
    },
    leave(Y, se) {
      const me = String(e.key);
      if (Y[Nr] && Y[Nr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      ue(C, [Y]);
      let Q = !1;
      Y[_n] = ($) => {
        Q || (Q = !0, se(), $ ? ue(A, [Y]) : ue(N, [Y]), Y[_n] = void 0, re[me] === e && delete re[me]);
      };
      const ee = Y[_n].bind(null, !1);
      re[me] = e, k ? X(k, [Y, ee]) : ee();
    },
    clone(Y) {
      const se = nu(
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
function mc(e) {
  if (Pl(e))
    return e = Yi(e), e.children = null, e;
}
function Es(e) {
  if (!Pl(e))
    return Il(e.type) && e.children ? gp(e.children) : e;
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
function fo(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    fo(
      Il(n.type) && Es(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function bp(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const c = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === ae ? (o.patchFlag & 128 && a++, i = i.concat(
      bp(o.children, t, c)
    )) : (t || o.type !== It) && i.push(c != null ? Yi(o, { key: c }) : o);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function $t(e, t) {
  return Fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    yt({ name: e.name }, t, { setup: e })
  ) : e;
}
function yp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function eb(e) {
  const t = Ia(), n = /* @__PURE__ */ ip(null);
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
function Xd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ks = /* @__PURE__ */ new WeakMap();
function qr(e, t, n, i, a = !1) {
  if (Se(e)) {
    e.forEach(
      (A, O) => qr(
        A,
        t && (Se(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ja(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && qr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Dl(i.component) : i.el, o = a ? null : r, { i: c, r: u } = e, h = t && t.r, f = c.refs === We ? c.refs = {} : c.refs, b = c.setupState, C = /* @__PURE__ */ Ye(b), k = b === We ? $h : (A) => Xd(f, A) ? !1 : Ze(C, A), N = (A, O) => !(O && Xd(f, O));
  if (h != null && h !== u) {
    if (Zd(t), st(h))
      f[h] = null, k(h) && (b[h] = null);
    else if (/* @__PURE__ */ Wt(h)) {
      const A = t;
      N(h, A.k) && (h.value = null), A.k && (f[A.k] = null);
    }
  }
  if (Fe(u))
    Ao(u, c, 12, [o, f]);
  else {
    const A = st(u), O = /* @__PURE__ */ Wt(u);
    if (A || O) {
      const F = () => {
        if (e.f) {
          const M = A ? k(u) ? b[u] : f[u] : N() || !e.k ? u.value : f[e.k];
          if (a)
            Se(M) && Nu(M, r);
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
          F(), ks.delete(e);
        };
        M.id = -1, ks.set(e, M), Qt(M, n);
      } else
        Zd(e), F();
    }
  }
}
function Zd(e) {
  const t = ks.get(e);
  t && (t.flags |= 8, ks.delete(e));
}
Al().requestIdleCallback;
Al().cancelIdleCallback;
const Ja = (e) => !!e.type.__asyncLoader, Pl = (e) => e.type.__isKeepAlive;
function tb(e, t) {
  _p(e, "a", t);
}
function nb(e, t) {
  _p(e, "da", t);
}
function _p(e, t, n = Kt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if ($l(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Pl(a.parent.vnode) && ib(i, t, n, a), a = a.parent;
  }
}
function ib(e, t, n, i) {
  const a = $l(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  xo(() => {
    Nu(i[t], a);
  }, n);
}
function $l(e, t, n = Kt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      vi();
      const c = No(n), u = Tn(t, n, e, o);
      return c(), gi(), u;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const _i = (e) => (t, n = Kt) => {
  (!mo || e === "sp") && $l(e, (...i) => t(...i), n);
}, wp = _i("bm"), Zi = _i("m"), Sp = _i(
  "bu"
), ab = _i("u"), rr = _i(
  "bum"
), xo = _i("um"), rb = _i(
  "sp"
), ob = _i("rtg"), sb = _i("rtc");
function lb(e, t = Kt) {
  $l("ec", e, t);
}
const zu = "components", cb = "directives";
function je(e, t) {
  return Bu(zu, e, !0, t) || e;
}
const Cp = /* @__PURE__ */ Symbol.for("v-ndc");
function Uu(e) {
  return st(e) ? Bu(zu, e, !1) || e : e || Cp;
}
function Jd(e) {
  return Bu(cb, e);
}
function Bu(e, t, n = !0, i = !1) {
  const a = Pt || Kt;
  if (a) {
    const r = a.type;
    if (e === zu) {
      const c = Kb(
        r,
        !1
      );
      if (c && (c === t || c === Gt(t) || c === El(Gt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Qd(a[e] || r[e], t) || // global registration
      Qd(a.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function Qd(e, t) {
  return e && (e[t] || e[Gt(t)] || e[El(Gt(t))]);
}
function Ce(e, t, n, i) {
  let a;
  const r = n, o = Se(e);
  if (o || st(e)) {
    const c = o && /* @__PURE__ */ Oa(e);
    let u = !1, h = !1;
    c && (u = !/* @__PURE__ */ Cn(e), h = /* @__PURE__ */ mi(e), e = Ol(e)), a = new Array(e.length);
    for (let f = 0, b = e.length; f < b; f++)
      a[f] = t(
        u ? h ? ar(Pn(e[f])) : Pn(e[f]) : e[f],
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
  if (n == null && (n = {}), Pt.ce || Pt.parent && Ja(Pt.parent) && Pt.parent.ce) {
    const h = n, f = Object.keys(h).length > 0;
    return t !== "default" && (h.name = t), y(), Be(
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
    const h = o && Tp(o(n)), f = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    h && h.key;
    u = Be(
      ae,
      {
        key: (f && !In(f) ? f : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!h && i ? "_fb" : "")
      },
      h || (i ? i() : []),
      h && e._ === 1 ? 64 : -2
    );
  } catch (h) {
    for (let f = hi.length; f > c; f--) Ku();
    throw h;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), u;
}
function Tp(e) {
  return e.some((t) => po(t) ? !(t.type === It || t.type === ae && !Tp(t.children)) : !0) ? e : null;
}
const iu = (e) => e ? Gp(e) ? Dl(e) : iu(e.parent) : null, Yr = (
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
    $parent: (e) => iu(e.parent),
    $root: (e) => iu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ap(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Mu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = en.bind(e.proxy)),
    $watch: (e) => Wm.bind(e)
  })
), bc = (e, t) => e !== We && !e.__isScriptSetup && Ze(e, t), ub = {
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
        if (bc(i, t))
          return o[t] = 1, i[t];
        if (a !== We && Ze(a, t))
          return o[t] = 2, a[t];
        if (Ze(r, t))
          return o[t] = 3, r[t];
        if (n !== We && Ze(n, t))
          return o[t] = 4, n[t];
        au && (o[t] = 0);
      }
    }
    const h = Yr[t];
    let f, b;
    if (h)
      return t === "$attrs" && Ht(e.attrs, "get", ""), h(e);
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
    return bc(a, t) ? (a[t] = n, !0) : i !== We && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: o }
  }, c) {
    let u;
    return !!(n[c] || e !== We && c[0] !== "$" && Ze(e, c) || bc(t, c) || Ze(r, c) || Ze(i, c) || Ze(Yr, c) || Ze(a.config.globalProperties, c) || (u = o.__cssModules) && u[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function db() {
  return Ep().slots;
}
function fb() {
  return Ep().attrs;
}
function Ep(e) {
  const t = Ia();
  return t.setupContext || (t.setupContext = qp(t));
}
function As(e) {
  return Se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function hb(e, t) {
  return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : yt({}, As(e), As(t));
}
let au = !0;
function pb(e) {
  const t = Ap(e), n = e.proxy, i = e.ctx;
  au = !1, t.beforeCreate && ef(t.beforeCreate, e, "bc");
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
    inheritAttrs: me,
    // assets
    components: Q,
    directives: ee,
    filters: $
  } = t;
  if (h && vb(h, i, null), o)
    for (const le in o) {
      const ie = o[le];
      Fe(ie) && (i[le] = ie.bind(n));
    }
  if (a) {
    const le = a.call(n, n);
    Je(le) && (e.data = /* @__PURE__ */ Lt(le));
  }
  if (au = !0, r)
    for (const le in r) {
      const ie = r[le], ge = Fe(ie) ? ie.bind(n, n) : Fe(ie.get) ? ie.get.bind(n, n) : Sn, de = !Fe(ie) && Fe(ie.set) ? ie.set.bind(n) : Sn, be = H({
        get: ge,
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
      kp(c[le], i, n, le);
  if (u) {
    const le = Fe(u) ? u.call(n) : u;
    Reflect.ownKeys(le).forEach((ie) => {
      yn(ie, le[ie]);
    });
  }
  f && ef(f, e, "c");
  function q(le, ie) {
    Se(ie) ? ie.forEach((ge) => le(ge.bind(n))) : ie && le(ie.bind(n));
  }
  if (q(wp, b), q(Zi, C), q(Sp, k), q(ab, N), q(tb, A), q(nb, O), q(lb, fe), q(sb, ue), q(ob, X), q(rr, M), q(xo, T), q(rb, Y), Se(se))
    if (se.length) {
      const le = e.exposed || (e.exposed = {});
      se.forEach((ie) => {
        Object.defineProperty(le, ie, {
          get: () => n[ie],
          set: (ge) => n[ie] = ge,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === Sn && (e.render = re), me != null && (e.inheritAttrs = me), Q && (e.components = Q), ee && (e.directives = ee), Y && yp(e);
}
function vb(e, t, n = Sn) {
  Se(e) && (e = ru(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Je(a) ? "default" in a ? r = Vt(
      a.from || i,
      a.default,
      !0
    ) : r = Vt(a.from || i) : r = Vt(a), /* @__PURE__ */ Wt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function ef(e, t, n) {
  Tn(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function kp(e, t, n, i) {
  let a = i.includes(".") ? dp(n, i) : () => n[i];
  if (st(e)) {
    const r = t[e];
    Fe(r) && qe(a, r);
  } else if (Fe(e))
    qe(a, e.bind(n));
  else if (Je(e))
    if (Se(e))
      e.forEach((r) => kp(r, t, n, i));
    else {
      const r = Fe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Fe(r) && qe(a, r, e);
    }
}
function Ap(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !a.length && !n && !i ? u = t : (u = {}, a.length && a.forEach(
    (h) => xs(u, h, o, !0)
  ), xs(u, t, o)), Je(t) && r.set(t, u), u;
}
function xs(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && xs(e, r, n, !0), a && a.forEach(
    (o) => xs(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const c = gb[o] || n && n[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const gb = {
  data: tf,
  props: nf,
  emits: nf,
  // objects
  methods: Ur,
  computed: Ur,
  // lifecycle
  beforeCreate: Jt,
  created: Jt,
  beforeMount: Jt,
  mounted: Jt,
  beforeUpdate: Jt,
  updated: Jt,
  beforeDestroy: Jt,
  beforeUnmount: Jt,
  destroyed: Jt,
  unmounted: Jt,
  activated: Jt,
  deactivated: Jt,
  errorCaptured: Jt,
  serverPrefetch: Jt,
  // assets
  components: Ur,
  directives: Ur,
  // watch
  watch: bb,
  // provide / inject
  provide: tf,
  inject: mb
};
function tf(e, t) {
  return t ? e ? function() {
    return yt(
      Fe(e) ? e.call(this, this) : e,
      Fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function mb(e, t) {
  return Ur(ru(e), ru(t));
}
function ru(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Jt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ur(e, t) {
  return e ? yt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function nf(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yt(
    /* @__PURE__ */ Object.create(null),
    As(e),
    As(t ?? {})
  ) : t;
}
function bb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = yt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Jt(e[i], t[i]);
  return n;
}
function xp() {
  return {
    app: null,
    config: {
      isNativeTag: $h,
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
let yb = 0;
function _b(e, t) {
  return function(i, a = null) {
    Fe(i) || (i = yt({}, i)), a != null && !Je(a) && (a = null);
    const r = xp(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const h = r.app = {
      _uid: yb++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Wb,
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
          return k.appContext = r, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(k, f, C), u = !0, h._container = f, f.__vue_app__ = h, Dl(k.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        u && (Tn(
          c,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(f, b) {
        return r.provides[f] = b, h;
      },
      runWithContext(f) {
        const b = Qa;
        Qa = h;
        try {
          return f();
        } finally {
          Qa = b;
        }
      }
    };
    return h;
  };
}
let Qa = null;
function Op(e, t, n = We) {
  const i = Ia(), a = Gt(t), r = yi(t), o = Np(e, a), c = Im((u, h) => {
    let f, b = We, C;
    return Gm(() => {
      const k = e[a];
      Rt(f, k) && (f = k, h());
    }), {
      get() {
        return u(), n.get ? n.get(f) : f;
      },
      set(k) {
        const N = n.set ? n.set(k) : k;
        if (!Rt(N, f) && !(b !== We && Rt(k, b)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (f = k, h()), i.emit(`update:${t}`, N), Rt(k, b) && (Rt(k, N) && !Rt(N, C) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && b !== We && !Rt(N, f)) && h(), b = k, C = N;
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
const Np = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Gt(t)}Modifiers`] || e[`${yi(t)}Modifiers`];
function wb(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || We;
  let a = n;
  const r = t.startsWith("update:"), o = r && Np(i, t.slice(7));
  o && (o.trim && (a = n.map((f) => st(f) ? f.trim() : f)), o.number && (a = a.map(kl)));
  let c, u = i[c = fc(t)] || // also try camelCase event handler (#2249)
  i[c = fc(Gt(t))];
  !u && r && (u = i[c = fc(yi(t))]), u && Tn(
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
    e.emitted[c] = !0, Tn(
      h,
      e,
      6,
      a
    );
  }
}
const Sb = /* @__PURE__ */ new WeakMap();
function Lp(e, t, n = !1) {
  const i = n ? Sb : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, c = !1;
  if (!Fe(e)) {
    const u = (h) => {
      const f = Lp(h, t, !0);
      f && (c = !0, yt(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (Je(e) && i.set(e, null), null) : (Se(r) ? r.forEach((u) => o[u] = null) : yt(o, r), Je(e) && i.set(e, o), o);
}
function Fl(e, t) {
  return !e || !Sl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, yi(t)) || Ze(e, t));
}
function af(e) {
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
  } = e, O = Ts(e);
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
      ), M = t.props ? c : Cb(c);
    }
  } catch (T) {
    hi.length = 0, Nl(T, e, 1), F = ye(It);
  }
  let z = F;
  if (M && A !== !1) {
    const T = Object.keys(M), { shapeFlag: re } = z;
    T.length && re & 7 && (r && T.some(Cl) && (M = Tb(
      M,
      r
    )), z = Yi(z, M, !1, !0));
  }
  if (n.dirs && (z = Yi(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const T = Il(z.type) && Es(z) || z;
    fo(T, n.transition);
  }
  return F = z, Ts(O), F;
}
const Cb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Sl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Tb = (e, t) => {
  const n = {};
  for (const i in e)
    (!Cl(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Eb(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: o, children: c, patchFlag: u } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return i ? rf(i, o, h) : !!o;
    if (u & 8) {
      const f = t.dynamicProps;
      for (let b = 0; b < f.length; b++) {
        const C = f[b];
        if (Rp(o, i, C) && !Fl(h, C))
          return !0;
      }
    }
  } else
    return (a || c) && (!c || !c.$stable) ? !0 : i === o ? !1 : i ? o ? rf(i, o, h) : !0 : !!o;
  return !1;
}
function rf(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Rp(t, e, r) && !Fl(n, r))
      return !0;
  }
  return !1;
}
function Rp(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Je(i) && Je(a) ? !qi(i, a) : i !== a;
}
function kb({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Ip = {}, Pp = () => Object.create(Ip), $p = (e) => Object.getPrototypeOf(e) === Ip;
function Ab(e, t, n, i = !1) {
  const a = {}, r = Pp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fp(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ xm(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function xb(e, t, n, i) {
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
        if (Fl(e.emitsOptions, C))
          continue;
        const k = t[C];
        if (u)
          if (Ze(r, C))
            k !== r[C] && (r[C] = k, h = !0);
          else {
            const N = Gt(C);
            a[N] = ou(
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
    Fp(e, t, a, r) && (h = !0);
    let f;
    for (const b in c)
      (!t || // for camelCase
      !Ze(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = yi(b)) === b || !Ze(t, f))) && (u ? n && // for camelCase
      (n[b] !== void 0 || // for kebab-case
      n[f] !== void 0) && (a[b] = ou(
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
function Fp(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (Kr(u))
        continue;
      const h = t[u];
      let f;
      a && Ze(a, f = Gt(u)) ? !r || !r.includes(f) ? n[f] = h : (c || (c = {}))[f] = h : Fl(e.emitsOptions, u) || (!(u in i) || h !== i[u]) && (i[u] = h, o = !0);
    }
  if (r) {
    const u = /* @__PURE__ */ Ye(n), h = c || We;
    for (let f = 0; f < r.length; f++) {
      const b = r[f];
      n[b] = ou(
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
function ou(e, t, n, i, a, r) {
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
          const f = No(a);
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
const Ob = /* @__PURE__ */ new WeakMap();
function Dp(e, t, n = !1) {
  const i = n ? Ob : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, c = [];
  let u = !1;
  if (!Fe(e)) {
    const f = (b) => {
      u = !0;
      const [C, k] = Dp(b, t, !0);
      yt(o, C), k && c.push(...k);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !u)
    return Je(e) && i.set(e, Xa), Xa;
  if (Se(r))
    for (let f = 0; f < r.length; f++) {
      const b = Gt(r[f]);
      of(b) && (o[b] = We);
    }
  else if (r)
    for (const f in r) {
      const b = Gt(f);
      if (of(b)) {
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
function of(e) {
  return e[0] !== "$" && !Kr(e);
}
const ju = (e) => e === "_" || e === "_ctx" || e === "$stable", Hu = (e) => Se(e) ? e.map(Gn) : [Gn(e)], Nb = (e, t, n) => {
  if (t._n)
    return t;
  const i = Re((...a) => Hu(t(...a)), n);
  return i._c = !1, i;
}, Mp = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (ju(a)) continue;
    const r = e[a];
    if (Fe(r))
      t[a] = Nb(a, r, i);
    else if (r != null) {
      const o = Hu(r);
      t[a] = () => o;
    }
  }
}, zp = (e, t) => {
  const n = Hu(t);
  e.slots.default = () => n;
}, Up = (e, t, n) => {
  for (const i in t)
    (n || !ju(i)) && (e[i] = t[i]);
}, Lb = (e, t, n) => {
  const i = e.slots = Pp();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Up(i, t, n), n && zh(i, "_", a, !0)) : Mp(t, i);
  } else t && zp(e, t);
}, Rb = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, o = We;
  if (i.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? r = !1 : Up(a, t, n) : (r = !t.$stable, Mp(t, a)), o = t;
  } else t && (zp(e, t), o = { default: 1 });
  if (r)
    for (const c in a)
      !ju(c) && o[c] == null && delete a[c];
}, Qt = Db;
function Ib(e) {
  return Pb(e);
}
function Pb(e, t) {
  const n = Al();
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
    setScopeId: k = Sn,
    insertStaticContent: N
  } = e, A = (_, E, x, L = null, R = null, B = null, G = void 0, K = null, Z = !!E.dynamicChildren) => {
    if (_ === E)
      return;
    _ && !Sa(_, E) && (L = it(_), _e(_, R, B, !0), _ = null), E.patchFlag === -2 && (Z = !1, E.dynamicChildren = null);
    const { type: V, ref: he, shapeFlag: oe } = E;
    switch (V) {
      case Oo:
        O(_, E, x, L);
        break;
      case It:
        F(_, E, x, L);
        break;
      case ms:
        _ == null && M(E, x, L, G);
        break;
      case ae:
        Q(
          _,
          E,
          x,
          L,
          R,
          B,
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
          B,
          G,
          K,
          Z
        ) : oe & 6 ? ee(
          _,
          E,
          x,
          L,
          R,
          B,
          G,
          K,
          Z
        ) : (oe & 64 || oe & 128) && V.process(
          _,
          E,
          x,
          L,
          R,
          B,
          G,
          K,
          Z,
          Ft
        );
    }
    he != null && R ? qr(he, _ && _.ref, B, E || _, !E) : he == null && _ && _.ref != null && qr(_.ref, null, B, _, !0);
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
  }, re = (_, E, x, L, R, B, G, K, Z) => {
    if (E.type === "svg" ? G = "svg" : E.type === "math" && (G = "mathml"), _ == null)
      ue(
        E,
        x,
        L,
        R,
        B,
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
          B,
          G,
          K,
          Z
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, ue = (_, E, x, L, R, B, G, K) => {
    let Z, V;
    const { props: he, shapeFlag: oe, transition: pe, dirs: ke } = _;
    if (Z = _.el = o(
      _.type,
      B,
      he && he.is,
      he
    ), oe & 8 ? f(Z, _.children) : oe & 16 && fe(
      _.children,
      Z,
      null,
      L,
      R,
      yc(_, B),
      G,
      K
    ), ke && ha(_, null, L, "created"), X(Z, _, _.scopeId, G, L), he) {
      for (const ze in he)
        ze !== "value" && !Kr(ze) && r(Z, ze, null, he[ze], B, L);
      "value" in he && r(Z, "value", null, he.value, B), (V = he.onVnodeBeforeMount) && Bn(V, L, _);
    }
    ke && ha(_, null, L, "beforeMount");
    const Pe = $b(R, pe);
    Pe && pe.beforeEnter(Z), i(Z, E, x), ((V = he && he.onVnodeMounted) || Pe || ke) && Qt(() => {
      V && Bn(V, L, _), Pe && pe.enter(Z), ke && ha(_, null, L, "mounted");
    }, R);
  }, X = (_, E, x, L, R) => {
    if (x && k(_, x), L)
      for (let B = 0; B < L.length; B++)
        k(_, L[B]);
    if (R) {
      let B = R.subTree;
      if (E === B || Hp(B.type) && (B.ssContent === E || B.ssFallback === E)) {
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
  }, fe = (_, E, x, L, R, B, G, K, Z = 0) => {
    for (let V = Z; V < _.length; V++) {
      const he = _[V] = K ? si(_[V]) : Gn(_[V]);
      A(
        null,
        he,
        E,
        x,
        L,
        R,
        B,
        G,
        K
      );
    }
  }, Y = (_, E, x, L, R, B, G) => {
    const K = E.el = _.el;
    let { patchFlag: Z, dynamicChildren: V, dirs: he } = E;
    Z |= _.patchFlag & 16;
    const oe = _.props || We, pe = E.props || We;
    let ke;
    if (x && pa(x, !1), (ke = pe.onVnodeBeforeUpdate) && Bn(ke, x, E, _), he && ha(E, _, x, "beforeUpdate"), x && pa(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!_.dynamicChildren || _.dynamicChildren.length !== V.length) && (Z = 0, G = !1, V = null), (oe.innerHTML && pe.innerHTML == null || oe.textContent && pe.textContent == null) && f(K, ""), V ? se(
      _.dynamicChildren,
      V,
      K,
      x,
      L,
      yc(E, R),
      B
    ) : G || ie(
      _,
      E,
      K,
      null,
      x,
      L,
      yc(E, R),
      B,
      !1
    ), Z > 0) {
      if (Z & 16)
        me(K, oe, pe, x, R);
      else if (Z & 2 && oe.class !== pe.class && r(K, "class", null, pe.class, R), Z & 4 && r(K, "style", oe.style, pe.style, R), Z & 8) {
        const Pe = E.dynamicProps;
        for (let ze = 0; ze < Pe.length; ze++) {
          const $e = Pe[ze], He = oe[$e], rt = pe[$e];
          (rt !== He || $e === "value") && r(K, $e, He, rt, R, x);
        }
      }
      Z & 1 && _.children !== E.children && f(K, E.children);
    } else !G && V == null && me(K, oe, pe, x, R);
    ((ke = pe.onVnodeUpdated) || he) && Qt(() => {
      ke && Bn(ke, x, E, _), he && ha(E, _, x, "updated");
    }, L);
  }, se = (_, E, x, L, R, B, G) => {
    for (let K = 0; K < E.length; K++) {
      const Z = _[K], V = E[K], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Sa(Z, V) || // - In the case of a component, it could contain anything.
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
        B,
        G,
        !0
      );
    }
  }, me = (_, E, x, L, R) => {
    if (E !== x) {
      if (E !== We)
        for (const B in E)
          !Kr(B) && !(B in x) && r(
            _,
            B,
            E[B],
            null,
            R,
            L
          );
      for (const B in x) {
        if (Kr(B)) continue;
        const G = x[B], K = E[B];
        G !== K && B !== "value" && r(_, B, K, G, R, L);
      }
      "value" in x && r(_, "value", E.value, x.value, R);
    }
  }, Q = (_, E, x, L, R, B, G, K, Z) => {
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
      B,
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
      B,
      G,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (E.key != null || R && E === R.subTree) && Vu(
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
      B,
      G,
      K,
      Z
    );
  }, ee = (_, E, x, L, R, B, G, K, Z) => {
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
      B,
      G,
      Z
    ) : U(_, E, Z);
  }, $ = (_, E, x, L, R, B, G) => {
    const K = _.component = Bb(
      _,
      L,
      R
    );
    if (Pl(_) && (K.ctx.renderer = Ft), jb(K, !1, G), K.asyncDep) {
      if (R && R.registerDep(K, q, G), !_.el) {
        const Z = K.subTree = ye(It);
        F(null, Z, E, x), _.placeholder = Z.el;
      }
    } else
      q(
        K,
        _,
        E,
        x,
        R,
        B,
        G
      );
  }, U = (_, E, x) => {
    const L = E.component = _.component;
    if (Eb(_, E, x))
      if (L.asyncDep && !L.asyncResolved) {
        le(L, E, x);
        return;
      } else
        L.next = E, L.update();
    else
      E.el = _.el, L.vnode = E;
  }, q = (_, E, x, L, R, B, G) => {
    const K = () => {
      if (_.isMounted) {
        let { next: oe, bu: pe, u: ke, parent: Pe, vnode: ze } = _;
        {
          const Et = Bp(_);
          if (Et) {
            oe && (oe.el = ze.el, le(_, oe, G)), Et.asyncDep.then(() => {
              Qt(() => {
                _.isUnmounted || V();
              }, R);
            });
            return;
          }
        }
        let $e = oe, He;
        pa(_, !1), oe ? (oe.el = ze.el, le(_, oe, G)) : oe = ze, pe && gs(pe), (He = oe.props && oe.props.onVnodeBeforeUpdate) && Bn(He, Pe, oe, ze), pa(_, !0);
        const rt = af(_), vt = _.subTree;
        _.subTree = rt, A(
          vt,
          rt,
          // parent may have changed if it's in a teleport
          b(vt.el),
          // anchor may have changed if it's in a fragment
          it(vt),
          _,
          R,
          B
        ), oe.el = rt.el, $e === null && kb(_, rt.el), ke && Qt(ke, R), (He = oe.props && oe.props.onVnodeUpdated) && Qt(
          () => Bn(He, Pe, oe, ze),
          R
        );
      } else {
        let oe;
        const { el: pe, props: ke } = E, { bm: Pe, m: ze, parent: $e, root: He, type: rt } = _, vt = Ja(E);
        pa(_, !1), Pe && gs(Pe), !vt && (oe = ke && ke.onVnodeBeforeMount) && Bn(oe, $e, E), pa(_, !0);
        {
          He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(
            rt,
            _.parent ? _.parent.type : void 0
          );
          const Et = _.subTree = af(_);
          A(
            null,
            Et,
            x,
            L,
            _,
            R,
            B
          ), E.el = Et.el;
        }
        if (ze && Qt(ze, R), !vt && (oe = ke && ke.onVnodeMounted)) {
          const Et = E;
          Qt(
            () => Bn(oe, $e, Et),
            R
          );
        }
        (E.shapeFlag & 256 || $e && Ja($e.vnode) && $e.vnode.shapeFlag & 256) && _.a && Qt(_.a, R), _.isMounted = !0, E = x = L = null;
      }
    };
    _.scope.on();
    const Z = _.effect = new Hh(K);
    _.scope.off();
    const V = _.update = Z.run.bind(Z), he = _.job = Z.runIfDirty.bind(Z);
    he.i = _, he.id = _.uid, Z.scheduler = () => Mu(he), pa(_, !0), V();
  }, le = (_, E, x) => {
    E.component = _;
    const L = _.vnode.props;
    _.vnode = E, _.next = null, xb(_, E.props, L, x), Rb(_, E.children, x), vi(), Wd(_), gi();
  }, ie = (_, E, x, L, R, B, G, K, Z = !1) => {
    const V = _ && _.children, he = _ ? _.shapeFlag : 0, oe = E.children, { patchFlag: pe, shapeFlag: ke } = E;
    if (pe > 0) {
      if (pe & 128) {
        de(
          V,
          oe,
          x,
          L,
          R,
          B,
          G,
          K,
          Z
        );
        return;
      } else if (pe & 256) {
        ge(
          V,
          oe,
          x,
          L,
          R,
          B,
          G,
          K,
          Z
        );
        return;
      }
    }
    ke & 8 ? (he & 16 && pt(V, R, B), oe !== V && f(x, oe)) : he & 16 ? ke & 16 ? de(
      V,
      oe,
      x,
      L,
      R,
      B,
      G,
      K,
      Z
    ) : pt(V, R, B, !0) : (he & 8 && f(x, ""), ke & 16 && fe(
      oe,
      x,
      L,
      R,
      B,
      G,
      K,
      Z
    ));
  }, ge = (_, E, x, L, R, B, G, K, Z) => {
    _ = _ || Xa, E = E || Xa;
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
        B,
        G,
        K,
        Z
      );
    }
    V > he ? pt(
      _,
      R,
      B,
      !0,
      !1,
      oe
    ) : fe(
      E,
      x,
      L,
      R,
      B,
      G,
      K,
      Z,
      oe
    );
  }, de = (_, E, x, L, R, B, G, K, Z) => {
    let V = 0;
    const he = E.length;
    let oe = _.length - 1, pe = he - 1;
    for (; V <= oe && V <= pe; ) {
      const ke = _[V], Pe = E[V] = Z ? si(E[V]) : Gn(E[V]);
      if (Sa(ke, Pe))
        A(
          ke,
          Pe,
          x,
          null,
          R,
          B,
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
      if (Sa(ke, Pe))
        A(
          ke,
          Pe,
          x,
          null,
          R,
          B,
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
            B,
            G,
            K,
            Z
          ), V++;
      }
    } else if (V > pe)
      for (; V <= oe; )
        _e(_[V], R, B, !0), V++;
    else {
      const ke = V, Pe = V, ze = /* @__PURE__ */ new Map();
      for (V = Pe; V <= pe; V++) {
        const et = E[V] = Z ? si(E[V]) : Gn(E[V]);
        et.key != null && ze.set(et.key, V);
      }
      let $e, He = 0;
      const rt = pe - Pe + 1;
      let vt = !1, Et = 0;
      const Dt = new Array(rt);
      for (V = 0; V < rt; V++) Dt[V] = 0;
      for (V = ke; V <= oe; V++) {
        const et = _[V];
        if (He >= rt) {
          _e(et, R, B, !0);
          continue;
        }
        let dt;
        if (et.key != null)
          dt = ze.get(et.key);
        else
          for ($e = Pe; $e <= pe; $e++)
            if (Dt[$e - Pe] === 0 && Sa(et, E[$e])) {
              dt = $e;
              break;
            }
        dt === void 0 ? _e(et, R, B, !0) : (Dt[dt - Pe] = V + 1, dt >= Et ? Et = dt : vt = !0, A(
          et,
          E[dt],
          x,
          null,
          R,
          B,
          G,
          K,
          Z
        ), He++);
      }
      const En = vt ? Fb(Dt) : Xa;
      for ($e = En.length - 1, V = rt - 1; V >= 0; V--) {
        const et = Pe + V, dt = E[et], $n = E[et + 1], vn = et + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          $n.el || jp($n)
        ) : L;
        Dt[V] === 0 ? A(
          null,
          dt,
          x,
          vn,
          R,
          B,
          G,
          K,
          Z
        ) : vt && ($e < 0 || V !== En[$e] ? be(dt, x, vn, 2) : $e--);
      }
    }
  }, be = (_, E, x, L, R = null) => {
    const { el: B, type: G, transition: K, children: Z, shapeFlag: V } = _;
    if (V & 6) {
      be(_.component.subTree, E, x, L);
      return;
    }
    if (V & 128) {
      _.suspense.move(E, x, L);
      return;
    }
    if (V & 64) {
      G.move(_, E, x, Ft);
      return;
    }
    if (G === ae) {
      i(B, E, x);
      for (let oe = 0; oe < Z.length; oe++)
        be(Z[oe], E, x, L);
      i(_.anchor, E, x);
      return;
    }
    if (G === ms) {
      z(_, E, x);
      return;
    }
    if (L !== 2 && V & 1 && K)
      if (L === 0)
        K.persisted && !B[_n] ? i(B, E, x) : (K.beforeEnter(B), i(B, E, x), Qt(() => K.enter(B), R));
      else {
        const { leave: oe, delayLeave: pe, afterLeave: ke } = K, Pe = () => {
          _.ctx.isUnmounted ? a(B) : i(B, E, x);
        }, ze = () => {
          const $e = B._isLeaving || !!B[_n];
          B._isLeaving && B[_n](
            !0
            /* cancelled */
          ), K.persisted && !$e ? Pe() : oe(B, () => {
            Pe(), ke && ke();
          });
        };
        pe ? pe(B, Pe, ze) : ze();
      }
    else
      i(B, E, x);
  }, _e = (_, E, x, L = !1, R = !1) => {
    const {
      type: B,
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
    if (oe === -2 && (R = !1), K != null && (vi(), qr(K, null, x, _, !0), gi()), ke != null && (E.renderCache[ke] = void 0), he & 256) {
      E.ctx.deactivate(_);
      return;
    }
    const ze = he & 1 && pe, $e = !Ja(_);
    let He;
    if ($e && (He = G && G.onVnodeBeforeUnmount) && Bn(He, E, _), he & 6)
      lt(_.component, x, L);
    else {
      if (he & 128) {
        _.suspense.unmount(x, L);
        return;
      }
      ze && ha(_, null, E, "beforeUnmount"), he & 64 ? _.type.remove(
        _,
        E,
        x,
        Ft,
        L
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (B !== ae || oe > 0 && oe & 64) ? pt(
        V,
        E,
        x,
        !1,
        !0
      ) : (B === ae && oe & 384 || !R && he & 16) && pt(Z, E, x), L && Ke(_);
    }
    const rt = Pe != null && ke == null;
    ($e && (He = G && G.onVnodeUnmounted) || ze || rt) && Qt(() => {
      He && Bn(He, E, _), ze && ha(_, null, E, "unmounted"), rt && (_.el = null);
    }, x);
  }, Ke = (_) => {
    const { type: E, el: x, anchor: L, transition: R } = _;
    if (E === ae) {
      Ne(x, L);
      return;
    }
    if (E === ms) {
      T(_);
      return;
    }
    const B = () => {
      a(x), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (_.shapeFlag & 1 && R && !R.persisted) {
      const { leave: G, delayLeave: K } = R, Z = () => G(x, B);
      K ? K(_.el, B, Z) : Z();
    } else
      B();
  }, Ne = (_, E) => {
    let x;
    for (; _ !== E; )
      x = C(_), a(_), _ = x;
    a(E);
  }, lt = (_, E, x) => {
    const { bum: L, scope: R, job: B, subTree: G, um: K, m: Z, a: V } = _;
    sf(Z), sf(V), L && gs(L), R.stop(), B && (B.flags |= 8, _e(G, _, E, x)), K && Qt(K, E), Qt(() => {
      _.isUnmounted = !0;
    }, E);
  }, pt = (_, E, x, L = !1, R = !1, B = 0) => {
    for (let G = B; G < _.length; G++)
      _e(_[G], E, x, L, R);
  }, it = (_) => {
    if (_.shapeFlag & 6)
      return it(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const E = C(_.anchor || _.el), x = E && E[fp];
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
    ), E._vnode = _, ut || (ut = !0, Wd(L), cp(), ut = !1);
  }, Ft = {
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
    createApp: _b(at)
  };
}
function yc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pa({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $b(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Vu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Se(i) && Se(a))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let c = a[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = a[r] = si(a[r]), c.el = o.el), !n && c.patchFlag !== -2 && Vu(o, c)), c.type === Oo && (c.patchFlag === -1 && (c = a[r] = si(c)), c.el = o.el), c.type === It && !c.el && (c.el = o.el);
    }
}
function Fb(e) {
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
function Bp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Bp(t);
}
function sf(e) {
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
const Hp = (e) => e.__isSuspense;
function Db(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : lp(e);
}
const ae = /* @__PURE__ */ Symbol.for("v-fgt"), Oo = /* @__PURE__ */ Symbol.for("v-txt"), It = /* @__PURE__ */ Symbol.for("v-cmt"), ms = /* @__PURE__ */ Symbol.for("v-stc"), hi = [];
let hn = null;
function y(e = !1) {
  hi.push(hn = e ? null : []);
}
function Ku() {
  hi.pop(), hn = hi[hi.length - 1] || null;
}
let ho = 1;
function Os(e, t = !1) {
  ho += e, e < 0 && hn && t && (hn.hasOnce = !0);
}
function Vp(e) {
  return e.dynamicChildren = ho > 0 ? hn || Xa : null, Ku(), ho > 0 && hn && hn.push(e), e;
}
function w(e, t, n, i, a, r) {
  return Vp(
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
function Be(e, t, n, i, a) {
  return Vp(
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
function po(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Sa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Kp = ({ key: e }) => e ?? null, bs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? st(e) || /* @__PURE__ */ Wt(e) || Fe(e) ? { i: Pt, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, i = 0, a = null, r = e === ae ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kp(t),
    ref: t && bs(t),
    scopeId: Ll,
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
    ctx: Pt
  };
  return c ? (Ns(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= st(n) ? 8 : 16), ho > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && hn.push(u), u;
}
const ye = Mb;
function Mb(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Cp) && (e = It), po(e)) {
    const c = Yi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ns(c, n), ho > 0 && !r && hn && (c.shapeFlag & 6 ? hn[hn.indexOf(e)] = c : hn.push(c)), c.patchFlag = -2, c;
  }
  if (Gb(e) && (e = e.__vccOpts), t) {
    t = vo(t);
    let { class: c, style: u } = t;
    c && !st(c) && (t.class = Ee(c)), Je(u) && (/* @__PURE__ */ Du(u) && !Se(u) && (u = yt({}, u)), t.style = pn(u));
  }
  const o = st(e) ? 1 : Hp(e) ? 128 : Il(e) ? 64 : Je(e) ? 4 : Fe(e) ? 2 : 0;
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
function vo(e) {
  return e ? /* @__PURE__ */ Du(e) || $p(e) ? yt({}, e) : e : null;
}
function Yi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: o, children: c, transition: u } = e, h = t ? qt(a || {}, t) : a, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Kp(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Se(r) ? r.concat(bs(t)) : [r, bs(t)] : bs(t)
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
    ssContent: e.ssContent && Yi(e.ssContent),
    ssFallback: e.ssFallback && Yi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && i && fo(
    f,
    u.clone(f)
  ), f;
}
function Te(e = " ", t = 0) {
  return ye(Oo, null, e, t);
}
function D(e = "", t = !1) {
  return t ? (y(), Be(It, null, e)) : ye(It, null, e);
}
function Gn(e) {
  return e == null || typeof e == "boolean" ? ye(It) : Se(e) ? ye(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : po(e) ? si(e) : ye(Oo, null, String(e));
}
function si(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Yi(e);
}
function Ns(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Ns(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !$p(t) ? t._ctx = Pt : a === 3 && Pt && (Pt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Fe(t)) {
    if (i & 65) {
      Ns(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Pt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Te(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function qt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ee([t.class, i.class]));
      else if (a === "style")
        t.style = pn([t.style, i.style]);
      else if (Sl(a)) {
        const r = t[a], o = i[a];
        o && r !== o && !(Se(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Cl(a) && (t[a] = o);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Bn(e, t, n, i = null) {
  Tn(e, t, 7, [
    n,
    i
  ]);
}
const zb = xp();
let Ub = 0;
function Bb(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || zb, r = {
    uid: Ub++,
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
    scope: new cm(
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
    propsOptions: Dp(i, a),
    emitsOptions: Lp(i, a),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = wb.bind(null, r), e.ce && e.ce(r), r;
}
let Kt = null;
const Ia = () => Kt || Pt;
let Ls, go;
{
  const e = Al(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  Ls = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Kt = n
  ), go = t(
    "__VUE_SSR_SETTERS__",
    (n) => mo = n
  );
}
const No = (e) => {
  const t = Kt;
  return Ls(e), e.scope.on(), () => {
    e.scope.off(), Ls(t);
  };
}, lf = () => {
  Kt && Kt.scope.off(), Ls(null);
};
function Gp(e) {
  return e.vnode.shapeFlag & 4;
}
let mo = !1;
function jb(e, t = !1, n = !1) {
  t && go(t);
  const { props: i, children: a } = e.vnode, r = Gp(e);
  Ab(e, i, r, t), Lb(e, a, n || t);
  const o = r ? Hb(e, t) : void 0;
  return t && go(!1), o;
}
function Hb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ub);
  const { setup: i } = n;
  if (i) {
    vi();
    const a = e.setupContext = i.length > 1 ? qp(e) : null, r = No(e), o = Ao(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), c = Fh(o);
    if (gi(), r(), (c || e.sp) && !Ja(e) && yp(e), c) {
      if (o.then(lf, lf), t)
        return o.then((u) => {
          go(!0);
          try {
            cf(e, u, t);
          } finally {
            go(!1);
          }
        }).catch((u) => {
          Nl(u, e, 0);
        });
      e.asyncDep = o;
    } else
      cf(e, o);
  } else
    Wp(e);
}
function cf(e, t, n) {
  Fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = rp(t)), Wp(e);
}
function Wp(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Sn);
  {
    const a = No(e);
    vi();
    try {
      pb(e);
    } finally {
      gi(), a();
    }
  }
}
const Vb = {
  get(e, t) {
    return Ht(e, "get", ""), e[t];
  }
};
function qp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Vb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Dl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rp(Om(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Yr)
        return Yr[n](e);
    },
    has(t, n) {
      return n in t || n in Yr;
    }
  })) : e.proxy;
}
function Kb(e, t = !0) {
  return Fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Gb(e) {
  return Fe(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ $m(e, t, mo);
function an(e, t, n) {
  try {
    Os(-1);
    const i = arguments.length;
    return i === 2 ? Je(t) && !Se(t) ? po(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && po(n) && (n = [n]), ye(e, t, n));
  } finally {
    Os(1);
  }
}
const Wb = "3.5.42", qb = Sn;
let su;
const uf = typeof window < "u" && window.trustedTypes;
if (uf)
  try {
    su = /* @__PURE__ */ uf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Yp = su ? (e) => su.createHTML(e) : (e) => e, Yb = "http://www.w3.org/2000/svg", Xb = "http://www.w3.org/1998/Math/MathML", oi = typeof document < "u" ? document : null, df = oi && /* @__PURE__ */ oi.createElement("template"), Zb = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? oi.createElementNS(Yb, e) : t === "mathml" ? oi.createElementNS(Xb, e) : n ? oi.createElement(e, { is: n }) : oi.createElement(e);
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
      df.innerHTML = Yp(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const c = df.content;
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
}, Fi = "transition", Lr = "animation", bo = /* @__PURE__ */ Symbol("_vtc"), Xp = {
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
}, Jb = /* @__PURE__ */ yt(
  {},
  pp,
  Xp
), Qb = (e) => (e.displayName = "Transition", e.props = Jb, e), ey = /* @__PURE__ */ Qb(
  (e, { slots: t }) => an(Qm, ty(e), t)
), va = (e, t = []) => {
  Se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, ff = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ty(e) {
  const t = {};
  for (const Q in e)
    Q in Xp || (t[Q] = e[Q]);
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
  } = e, N = ny(a), A = N && N[0], O = N && N[1], {
    onBeforeEnter: F,
    onEnter: M,
    onEnterCancelled: z,
    onLeave: T,
    onLeaveCancelled: re,
    onBeforeAppear: ue = F,
    onAppear: X = M,
    onAppearCancelled: fe = z
  } = t, Y = (Q, ee, $, U) => {
    Q._enterCancelled = U, ga(Q, ee ? f : c), ga(Q, ee ? h : o), $ && $();
  }, se = (Q, ee) => {
    Q._isLeaving = !1, ga(Q, b), ga(Q, k), ga(Q, C), ee && ee();
  }, me = (Q) => (ee, $) => {
    const U = Q ? X : M, q = () => Y(ee, Q, $);
    va(U, [ee, q]), hf(() => {
      ga(ee, Q ? u : r), ni(ee, Q ? f : c), ff(U) || pf(ee, i, A, q);
    });
  };
  return yt(t, {
    onBeforeEnter(Q) {
      va(F, [Q]), ni(Q, r), ni(Q, o);
    },
    onBeforeAppear(Q) {
      va(ue, [Q]), ni(Q, u), ni(Q, h);
    },
    onEnter: me(!1),
    onAppear: me(!0),
    onLeave(Q, ee) {
      Q._isLeaving = !0;
      const $ = () => se(Q, ee);
      ni(Q, b), Q._enterCancelled ? (ni(Q, C), mf(Q)) : (mf(Q), ni(Q, C)), hf(() => {
        Q._isLeaving && (ga(Q, b), ni(Q, k), ff(T) || pf(Q, i, O, $));
      }), va(T, [Q, $]);
    },
    onEnterCancelled(Q) {
      Y(Q, !1, void 0, !0), va(z, [Q]);
    },
    onAppearCancelled(Q) {
      Y(Q, !0, void 0, !0), va(fe, [Q]);
    },
    onLeaveCancelled(Q) {
      se(Q), va(re, [Q]);
    }
  });
}
function ny(e) {
  if (e == null)
    return null;
  if (Je(e))
    return [_c(e.enter), _c(e.leave)];
  {
    const t = _c(e);
    return [t, t];
  }
}
function _c(e) {
  return Qg(e);
}
function ni(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[bo] || (e[bo] = /* @__PURE__ */ new Set())).add(t);
}
function ga(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[bo];
  n && (n.delete(t), n.size || (e[bo] = void 0));
}
function hf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let iy = 0;
function pf(e, t, n, i) {
  const a = e._endId = ++iy, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: c, propCount: u } = ay(e, t);
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
function ay(e, t) {
  const n = window.getComputedStyle(e), i = (N) => (n[N] || "").split(", "), a = i(`${Fi}Delay`), r = i(`${Fi}Duration`), o = vf(a, r), c = i(`${Lr}Delay`), u = i(`${Lr}Duration`), h = vf(c, u);
  let f = null, b = 0, C = 0;
  t === Fi ? o > 0 && (f = Fi, b = o, C = r.length) : t === Lr ? h > 0 && (f = Lr, b = h, C = u.length) : (b = Math.max(o, h), f = b > 0 ? o > h ? Fi : Lr : null, C = f ? f === Fi ? r.length : u.length : 0);
  const k = f === Fi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Fi}Property`).toString()
  );
  return {
    type: f,
    timeout: b,
    propCount: C,
    hasTransform: k
  };
}
function vf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => gf(n) + gf(e[i])));
}
function gf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function mf(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ry(e, t, n) {
  const i = e[bo];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Rs = /* @__PURE__ */ Symbol("_vod"), Zp = /* @__PURE__ */ Symbol("_vsh"), er = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Rs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Rr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Rr(e, !0), i.enter(e)) : i.leave(e, () => {
      Rr(e, !1);
    }) : Rr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Rr(e, t);
  }
};
function Rr(e, t) {
  e.style.display = t ? e[Rs] : "none", e[Zp] = !t;
}
const Jp = /* @__PURE__ */ Symbol("");
function oy(e) {
  const t = Ia();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Is(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Is(t.ce, a) : lu(t.subTree, a), n(a);
  };
  Sp(() => {
    lp(i);
  }), Zi(() => {
    qe(i, Sn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), xo(() => a.disconnect());
  });
}
function lu(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      lu(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Is(e.el, t);
  else if (e.type === ae)
    e.children.forEach((n) => lu(n, t));
  else if (e.type === ms) {
    let { el: n, anchor: i } = e;
    for (; n && (Is(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Is(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = lm(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Jp] = i;
  }
}
const sy = /(?:^|;)\s*display\s*:/;
function ly(e, t, n) {
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
      c != null ? uy(
        e,
        o,
        !st(t) && t ? t[o] : void 0,
        c
      ) || Br(i, o, c) : Br(i, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = i[Jp];
      o && (n += ";" + o), i.cssText = n, r = sy.test(n);
    }
  } else t && e.removeAttribute("style");
  Rs in e && (e[Rs] = r ? i.display : "", e[Zp] && (i.display = "none"));
}
const os = /\s*!important$/;
function Br(e, t, n) {
  if (Se(n))
    n.forEach((i) => Br(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    os.test(n) ? e.setProperty(t, n.replace(os, ""), "important") : e.setProperty(t, n);
  else {
    const i = cy(e, t);
    os.test(n) ? e.setProperty(
      yi(i),
      n.replace(os, ""),
      "important"
    ) : e[i] = n;
  }
}
const bf = ["Webkit", "Moz", "ms"], wc = {};
function cy(e, t) {
  const n = wc[t];
  if (n)
    return n;
  let i = Gt(t);
  if (i !== "filter" && i in e)
    return wc[t] = i;
  i = El(i);
  for (let a = 0; a < bf.length; a++) {
    const r = bf[a] + i;
    if (r in e)
      return wc[t] = r;
  }
  return t;
}
function uy(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && st(i) && n === i;
}
const yf = "http://www.w3.org/1999/xlink";
function _f(e, t, n, i, a, r = rm(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(yf, t.slice(6, t.length)) : e.setAttributeNS(yf, t, n) : n == null || r && !Uh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : In(n) ? String(n) : n
  );
}
function wf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Yp(n) : n);
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
    c === "boolean" ? n = Uh(n) : n == null && c === "string" ? (n = "", o = !0) : c === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Ca(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function dy(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Sf = /* @__PURE__ */ Symbol("_vei");
function fy(e, t, n, i, a = null) {
  const r = e[Sf] || (e[Sf] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [c, u] = vy(t);
    if (i) {
      const h = r[t] = by(
        i,
        a
      );
      Ca(e, c, h, u);
    } else o && (dy(e, c, o, u), r[t] = void 0);
  }
}
const hy = /(Once|Passive|Capture)$/, py = /^on:?(?:Once|Passive|Capture)$/;
function vy(e) {
  let t, n;
  for (; (n = e.match(hy)) && !py.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : yi(e.slice(2)), t];
}
let Sc = 0;
const gy = /* @__PURE__ */ Promise.resolve(), my = () => Sc || (gy.then(() => Sc = 0), Sc = Date.now());
function by(e, t) {
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
        h && Tn(
          h,
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
  return n.value = e, n.attached = my(), n;
}
const Cf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yy = (e, t, n, i, a, r) => {
  const o = a === "svg";
  t === "class" ? ry(e, i, o) : t === "style" ? ly(e, n, i) : Sl(t) ? Cl(t) || fy(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _y(e, t, i, o)) ? (wf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _f(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (wy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !st(i))) ? wf(e, Gt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), _f(e, t, i, o));
};
function _y(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Cf(t) && Fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Cf(t) && st(n) ? !1 : t in e;
}
function wy(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Gt(t);
  return Array.isArray(n) ? n.some((a) => Gt(a) === i) : Object.keys(n).some((a) => Gt(a) === i);
}
const Ps = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (n) => gs(t, n) : t;
};
function Sy(e) {
  e.target.composing = !0;
}
function Tf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ea = /* @__PURE__ */ Symbol("_assign"), ss = /* @__PURE__ */ Symbol("_initialValue");
function Cc(e, t, n) {
  return t && (e = e.trim()), n && (e = kl(e)), e;
}
const ft = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[ss] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[ss] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ea] = Ps(a);
    const r = i || a.props && a.props.type === "number";
    Ca(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ea](Cc(e.value, n, r));
    }), (n || r) && Ca(e, "change", () => {
      e.value = Cc(e.value, n, r);
    }), t || (Ca(e, "compositionstart", Sy), Ca(e, "compositionend", Tf), Ca(e, "change", Tf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[ss];
    delete e[ss], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Ea](Cc(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, o) {
    if (e[Ea] = Ps(o), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? kl(e.value) : e.value, u = t ?? "";
    if (c === u)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === u) || (e.value = u);
  }
}, Zt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, Ca(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? kl($s(u)) : $s(u)
      ), r = e.multiple, o = r ? La(e._modelValue) ? new Set(a) : a : a[0], c = e._pendingValue = [
        r,
        r ? Se(o) ? a.slice() : a : o
      ];
      try {
        e[Ea](o);
      } finally {
        en(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Ea] = Ps(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ef(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Ea] = Ps(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Cy(t, n[1], n[0])) && Ef(e, t);
  }
};
function Cy(e, t, n) {
  if (!n || Se(e)) return qi(e, t);
  if (La(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Ef(e, t) {
  const n = e.multiple, i = Se(t);
  if (!(n && !i && !La(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], c = $s(o);
      if (n)
        if (i) {
          const u = typeof c;
          u === "string" || u === "number" ? o.selected = t.some((h) => String(h) === String(c)) : o.selected = sm(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (qi($s(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function $s(e) {
  return "_value" in e ? e._value : e.value;
}
const Ty = ["ctrl", "shift", "alt", "meta"], Ey = {
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
  exact: (e, t) => Ty.some((n) => e[`${n}Key`] && !t.includes(n))
}, Oe = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const c = Ey[t[o]];
      if (c && c(a, t)) return;
    }
    return e(a, ...r);
  }));
}, ky = {
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
      (o) => o === r || ky[o] === r
    ))
      return e(a);
  }));
}, Ay = /* @__PURE__ */ yt({ patchProp: yy }, Zb);
let kf;
function xy() {
  return kf || (kf = Ib(Ay));
}
const Oy = ((...e) => {
  const t = xy().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Ly(i);
    if (!a) return;
    const r = t._component;
    !Fe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, Ny(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function Ny(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ly(e) {
  return st(e) ? document.querySelector(e) : e;
}
function Gu(e, t, n) {
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
function Af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Ry(e) {
  if (Array.isArray(e)) return e;
}
function Iy(e, t) {
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
function Py() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $y(e, t) {
  return Ry(e) || Iy(e, t) || Fy(e, t) || Py();
}
function Fy(e, t) {
  if (e) {
    if (typeof e == "string") return Af(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Af(e, t) : void 0;
  }
}
const Qp = Object.entries, xf = Object.setPrototypeOf, Dy = Object.isFrozen, My = Object.getPrototypeOf, zy = Object.getOwnPropertyDescriptor;
let St = Object.freeze, Tt = Object.seal, qa = Object.create, ev = typeof Reflect < "u" && Reflect, cu = ev.apply, uu = ev.construct;
St || (St = function(t) {
  return t;
});
Tt || (Tt = function(t) {
  return t;
});
cu || (cu = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
uu || (uu = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const _a = _t(Array.prototype.forEach), Uy = _t(Array.prototype.lastIndexOf), Of = _t(Array.prototype.pop), Ir = _t(Array.prototype.push), By = _t(Array.prototype.splice), tr = Array.isArray, jr = _t(String.prototype.toLowerCase), Tc = _t(String.prototype.toString), Nf = _t(String.prototype.match), Pr = _t(String.prototype.replace), Lf = _t(String.prototype.indexOf), jy = _t(String.prototype.trim), Hy = _t(Number.prototype.toString), Vy = _t(Boolean.prototype.toString), Rf = typeof BigInt > "u" ? null : _t(BigInt.prototype.toString), If = typeof Symbol > "u" ? null : _t(Symbol.prototype.toString), rn = _t(Object.prototype.hasOwnProperty), $r = _t(Object.prototype.toString), Bt = _t(RegExp.prototype.test), ma = Ky(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return cu(e, t, i);
  };
}
function Ky(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return uu(e, n);
  };
}
function Ge(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : jr;
  if (xf && xf(e, null), !tr(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Dy(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function Gy(e) {
  for (let t = 0; t < e.length; t++)
    rn(e, t) || (e[t] = null);
  return e;
}
function dn(e) {
  const t = qa(null);
  for (const i of Qp(e)) {
    var n = $y(i, 2);
    const a = n[0], r = n[1];
    rn(e, a) && (tr(r) ? t[a] = Gy(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = dn(r) : t[a] = r);
  }
  return t;
}
function Wy(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Hy(e);
    case "boolean":
      return Vy(e);
    case "bigint":
      return Rf ? Rf(e) : "0";
    case "symbol":
      return If ? If(e) : "Symbol()";
    case "undefined":
      return $r(e);
    case "function":
    case "object": {
      if (e === null)
        return $r(e);
      const t = e, n = On(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : $r(i);
      }
      return $r(e);
    }
    default:
      return $r(e);
  }
}
function On(e, t) {
  for (; e !== null; ) {
    const i = zy(e, t);
    if (i) {
      if (i.get)
        return _t(i.get);
      if (typeof i.value == "function")
        return _t(i.value);
    }
    e = My(e);
  }
  function n() {
    return null;
  }
  return n;
}
function qy(e) {
  try {
    return Bt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Pf = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ec = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), kc = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Yy = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ac = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Xy = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), $f = St(["#text"]), Ff = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), xc = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Df = St(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ls = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Zy = Tt(/{{[\w\W]*|^[\w\W]*}}/g), Jy = Tt(/<%[\w\W]*|^[\w\W]*%>/g), Qy = Tt(/\${[\w\W]*/g), e_ = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), t_ = Tt(/^aria-[\-\w]+$/), Mf = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), n_ = Tt(/^(?:\w+script|data):/i), i_ = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), a_ = Tt(/^html$/i), r_ = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), zf = Tt(/<[/\w!]/g), Uf = Tt(/<[/\w]/g), o_ = Tt(/<\/no(script|embed|frames)/i), s_ = Tt(/\/>/i), cn = {
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
}, tv = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], l_ = St(Ge({}, tv)), c_ = (function() {
  const e = {};
  return _a(tv, (t) => {
    e[t] = Tt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), u_ = function() {
  return typeof window > "u" ? null : window;
}, d_ = function(t, n) {
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
}, Bf = function() {
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
}, Di = function(t, n, i, a) {
  return rn(t, n) && tr(t[n]) ? Ge(a.base ? dn(a.base) : {}, t[n], a.transform) : i;
}, Oc = function(t, n, i) {
  const a = rn(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? dn(a) : i();
};
function nv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u_();
  const t = (te) => nv(te);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== cn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, c = e.Element, u = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, b = e.trustedTypes, C = c.prototype, k = On(C, "cloneNode"), N = On(C, "remove"), A = On(C, "nextSibling"), O = On(C, "childNodes"), F = On(C, "parentNode"), M = On(C, "shadowRoot"), z = On(C, "attributes"), T = o && o.prototype ? On(o.prototype, "nodeType") : null, re = o && o.prototype ? On(o.prototype, "nodeName") : null, ue = o && o.prototype ? On(o.prototype, "ownerDocument") : null, X = function(S) {
    return T ? T(S) : S.nodeType;
  }, fe = function(S) {
    return re ? re(S) : S.nodeName;
  };
  if (typeof r == "function") {
    const te = n.createElement("template");
    te.content && te.content.ownerDocument && (n = te.content.ownerDocument);
  }
  let Y, se = "", me, Q = !1, ee = 0;
  const $ = function() {
    if (ee > 0)
      throw ma('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(S) {
    $(), ee++;
    try {
      return Y.createHTML(S);
    } finally {
      ee--;
    }
  }, q = function(S) {
    $(), ee++;
    try {
      return Y.createScriptURL(S);
    } finally {
      ee--;
    }
  }, le = function() {
    return Q || (me = d_(b, a), Q = !0), me;
  }, ie = n, ge = ie.implementation, de = ie.createNodeIterator, be = ie.createDocumentFragment, _e = ie.getElementsByTagName, Ke = i.importNode;
  let Ne = Bf();
  t.isSupported = typeof Qp == "function" && typeof F == "function" && ge && ge.createHTMLDocument !== void 0;
  const lt = Zy, pt = Jy, it = Qy, ut = e_, at = t_, Ft = n_, j = i_, _ = r_;
  let E = Mf, x = null;
  const L = Ge({}, [...Pf, ...Ec, ...kc, ...Ac, ...$f]);
  let R = null;
  const B = Ge({}, [...Ff, ...xc, ...Df, ...ls]);
  let G = Object.seal(qa(null, {
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
  const V = Object.seal(qa(null, {
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
  let he = !0, oe = !0, pe = !1, ke = !0, Pe = !1, ze = !0, $e = !1, He = !1, rt = null, vt = null, Et = !1, Dt = !1, En = !1, et = !1, dt = !0, $n = !1;
  const vn = "user-content-";
  let ea = !0, wi = !1, Fn = {}, Xn = null;
  const or = Ge({}, [
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
  const Ti = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), wt = "http://www.w3.org/1998/Math/MathML", $a = "http://www.w3.org/2000/svg", on = "http://www.w3.org/1999/xhtml";
  let Ei = on, ta = !1, Fa = null;
  const na = Ge({}, [wt, $a, on], Tc), ki = St(["mi", "mo", "mn", "ms", "mtext"]);
  let sr = Ge({}, ki);
  const Ro = St(["annotation-xml"]);
  let kt = Ge({}, Ro);
  const Jn = Ge({}, ["title", "style", "font", "a", "script"]);
  let Ai = null;
  const Kl = ["application/xhtml+xml", "text/html"], Gl = "text/html";
  let ht = null, xi = null;
  const Wl = n.createElement("form"), Io = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, lr = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (xi && xi === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = dn(S), Ai = // eslint-disable-next-line unicorn/prefer-includes
    Kl.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Gl : S.PARSER_MEDIA_TYPE, ht = Ai === "application/xhtml+xml" ? Tc : jr, x = Di(S, "ALLOWED_TAGS", L, {
      transform: ht
    }), R = Di(S, "ALLOWED_ATTR", B, {
      transform: ht
    }), Fa = Di(S, "ALLOWED_NAMESPACES", na, {
      transform: Tc
    }), Ci = Di(S, "ADD_URI_SAFE_ATTR", Ti, {
      transform: ht,
      base: Ti
    }), Zn = Di(S, "ADD_DATA_URI_TAGS", Si, {
      transform: ht,
      base: Si
    }), Xn = Di(S, "FORBID_CONTENTS", or, {
      transform: ht
    }), K = Di(S, "FORBID_TAGS", dn({}), {
      transform: ht
    }), Z = Di(S, "FORBID_ATTR", dn({}), {
      transform: ht
    }), Fn = rn(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? dn(S.USE_PROFILES) : S.USE_PROFILES : !1, he = S.ALLOW_ARIA_ATTR !== !1, oe = S.ALLOW_DATA_ATTR !== !1, pe = S.ALLOW_UNKNOWN_PROTOCOLS || !1, ke = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Pe = S.SAFE_FOR_TEMPLATES || !1, ze = S.SAFE_FOR_XML !== !1, $e = S.WHOLE_DOCUMENT || !1, Dt = S.RETURN_DOM || !1, En = S.RETURN_DOM_FRAGMENT || !1, et = S.RETURN_TRUSTED_TYPE || !1, Et = S.FORCE_BODY || !1, dt = S.SANITIZE_DOM !== !1, $n = S.SANITIZE_NAMED_PROPS || !1, ea = S.KEEP_CONTENT !== !1, wi = S.IN_PLACE || !1, E = qy(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Mf, Ei = typeof S.NAMESPACE == "string" ? S.NAMESPACE : on, sr = Oc(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, ki)
      // Default built-in map
    ), kt = Oc(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Ro)
      // Default built-in map
    );
    const P = Oc(S, "CUSTOM_ELEMENT_HANDLING", () => qa(null));
    if (G = qa(null), rn(P, "tagNameCheck") && Io(P.tagNameCheck) && (G.tagNameCheck = P.tagNameCheck), rn(P, "attributeNameCheck") && Io(P.attributeNameCheck) && (G.attributeNameCheck = P.attributeNameCheck), rn(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), Tt(G), Pe && (oe = !1), En && (Dt = !0), Fn && (x = Ge({}, $f), R = qa(null), Fn.html === !0 && (Ge(x, Pf), Ge(R, Ff)), Fn.svg === !0 && (Ge(x, Ec), Ge(R, xc), Ge(R, ls)), Fn.svgFilters === !0 && (Ge(x, kc), Ge(R, xc), Ge(R, ls)), Fn.mathMl === !0 && (Ge(x, Ac), Ge(R, Df), Ge(R, ls))), V.tagCheck = null, V.attributeCheck = null, rn(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? V.tagCheck = S.ADD_TAGS : tr(S.ADD_TAGS) && (x === L && (x = dn(x)), Ge(x, S.ADD_TAGS, ht))), rn(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? V.attributeCheck = S.ADD_ATTR : tr(S.ADD_ATTR) && (R === B && (R = dn(R)), Ge(R, S.ADD_ATTR, ht))), rn(S, "ADD_FORBID_CONTENTS") && tr(S.ADD_FORBID_CONTENTS) && (Xn === or && (Xn = dn(Xn)), Ge(Xn, S.ADD_FORBID_CONTENTS, ht)), ea && (x["#text"] = !0), $e && Ge(x, ["html", "head", "body"]), x.table && (Ge(x, ["tbody"]), delete K.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ma('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ma('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const W = Y;
      Y = S.TRUSTED_TYPES_POLICY;
      try {
        se = U("");
      } catch (ce) {
        throw Y = W, ce;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (Y = void 0, se = "") : (Y === void 0 && (Y = le()), Y && typeof se == "string" && (se = U("")));
    St && St(S), xi = S;
  }, Po = Ge({}, [...Ec, ...kc, ...Yy]), $o = Ge({}, [...Ac, ...Xy]), ql = function(S, P, W) {
    return P.namespaceURI === on ? S === "svg" : P.namespaceURI === wt ? S === "svg" && (W === "annotation-xml" || sr[W]) : !!Po[S];
  }, Yl = function(S, P, W) {
    return P.namespaceURI === on ? S === "math" : P.namespaceURI === $a ? S === "math" && kt[W] : !!$o[S];
  }, Xl = function(S, P, W) {
    return P.namespaceURI === $a && !kt[W] || P.namespaceURI === wt && !sr[W] ? !1 : !$o[S] && (Jn[S] || !Po[S]);
  }, Zl = function(S) {
    let P = F(S);
    (!P || !P.tagName) && (P = {
      namespaceURI: Ei,
      tagName: "template"
    });
    const W = jr(S.tagName), ce = jr(P.tagName);
    return Fa[S.namespaceURI] ? S.namespaceURI === $a ? ql(W, P, ce) : S.namespaceURI === wt ? Yl(W, P, ce) : S.namespaceURI === on ? Xl(W, P, ce) : !!(Ai === "application/xhtml+xml" && Fa[S.namespaceURI]) : !1;
  }, Dn = function(S) {
    Ir(t.removed, {
      element: S
    });
    try {
      F(S).removeChild(S);
    } catch {
      if (N(S), !F(S))
        throw ma("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Fo = function(S, P, W) {
    try {
      S.removeAttributeNode(P);
    } catch {
      try {
        S.removeAttribute(W);
      } catch {
      }
    }
  }, ia = function(S) {
    Oi(S);
    const P = O(S);
    if (P) {
      const ce = [];
      _a(P, (ve) => {
        Ir(ce, ve);
      }), _a(ce, (ve) => {
        try {
          N(ve);
        } catch {
        }
      });
    }
    const W = z(S);
    if (W)
      for (let ce = W.length - 1; ce >= 0; --ce) {
        const ve = W[ce], Le = ve && ve.name;
        typeof Le == "string" && Fo(S, ve, Le);
      }
  }, kn = function(S, P, W) {
    if (!W)
      try {
        W = P.getAttributeNode(S);
      } catch {
        W = null;
      }
    Ir(t.removed, {
      attribute: W || null,
      from: P
    });
    try {
      W ? P.removeAttributeNode(W) : P.removeAttribute(S);
    } catch {
      try {
        P.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if (Dt || En)
        try {
          Dn(P);
        } catch {
        }
      else
        try {
          P.setAttribute(S, "");
        } catch {
        }
  }, cr = function(S) {
    const P = z(S);
    if (P)
      for (let W = P.length - 1; W >= 0; --W) {
        const ce = P[W], ve = ce && ce.name;
        typeof ve != "string" || R[ht(ve)] || Fo(S, ce, ve);
      }
  }, Oi = function(S) {
    const P = [S];
    for (; P.length > 0; ) {
      const W = P.pop();
      X(W) === cn.element && cr(W);
      const ve = O(W);
      if (ve)
        for (let Le = ve.length - 1; Le >= 0; --Le)
          P.push(ve[Le]);
    }
  }, Da = function(S, P) {
    return ze ? S === "patchsrc" ? !0 : S === "for" && P !== "label" && P !== "output" : !1;
  }, Do = function(S) {
    if (!ze)
      return;
    const P = [S];
    for (; P.length > 0; ) {
      const W = P.pop(), ce = X(W);
      if (ce === cn.processingInstruction || ce === cn.comment && Bt(Uf, W.data)) {
        try {
          N(W);
        } catch {
        }
        continue;
      }
      if (ce === cn.element) {
        const Le = W, tt = ht(fe(W));
        try {
          Le.hasAttribute && Le.hasAttribute("patchsrc") && Le.removeAttribute("patchsrc"), Le.hasAttribute && Le.hasAttribute("for") && Da("for", tt) && Le.removeAttribute("for");
        } catch {
        }
      }
      const ve = O(W);
      if (ve)
        for (let Le = ve.length - 1; Le >= 0; --Le)
          P.push(ve[Le]);
    }
  }, Mo = function(S) {
    let P = null, W = null;
    if (Et)
      S = "<remove></remove>" + S;
    else {
      const Le = Nf(S, /^[\r\n\t ]+/);
      W = Le && Le[0];
    }
    Ai === "application/xhtml+xml" && Ei === on && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const ce = Y ? U(S) : S;
    if (Ei === on)
      try {
        P = new f().parseFromString(ce, Ai);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = ge.createDocument(Ei, "template", null);
      try {
        P.documentElement.innerHTML = ta ? se : ce;
      } catch {
      }
    }
    const ve = P.body || P.documentElement;
    return S && W && ve.insertBefore(n.createTextNode(W), ve.childNodes[0] || null), Ei === on ? _e.call(P, $e ? "html" : "body")[0] : $e ? P.documentElement : ve;
  }, ur = function(S) {
    const P = ue ? ue(S) : S.ownerDocument;
    return de.call(
      P || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, aa = function(S) {
    return S = Pr(S, lt, " "), S = Pr(S, pt, " "), S = Pr(S, it, " "), S;
  }, dr = function(S) {
    var P;
    S.normalize();
    const W = ue ? ue(S) : S.ownerDocument, ce = de.call(
      W || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ve = ce.nextNode();
    for (; ve; )
      ve.data = aa(ve.data), ve = ce.nextNode();
    const Le = (P = S.querySelectorAll) === null || P === void 0 ? void 0 : P.call(S, "template");
    Le && _a(Le, (tt) => {
      Mn(tt.content) && dr(tt.content);
    });
  }, Ni = function(S) {
    const P = re ? re(S) : null;
    return typeof P != "string" || ht(P) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, Mn = function(S) {
    if (!T || typeof S != "object" || S === null)
      return !1;
    try {
      return T(S) === cn.documentFragment;
    } catch {
      return !1;
    }
  }, Li = function(S) {
    if (!T || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof T(S) == "number";
    } catch {
      return !1;
    }
  };
  function mt(te, S, P) {
    te.length !== 0 && _a(te, (W) => {
      W.call(t, S, P, xi);
    });
  }
  const zo = function(S, P) {
    return !!(ze && S.hasChildNodes() && !Li(S.firstElementChild) && Bt(zf, S.textContent) && Bt(zf, S.innerHTML) || ze && S.namespaceURI === on && l_[P] && (Li(S.firstElementChild) || typeof S.textContent == "string" && Bt(c_[P], S.textContent)) || S.nodeType === cn.processingInstruction || ze && S.nodeType === cn.comment && Bt(Uf, S.data));
  }, ra = function(S, P) {
    if (S instanceof RegExp)
      return Bt(S, P);
    if (S instanceof Function) {
      for (var W = arguments.length, ce = new Array(W > 2 ? W - 2 : 0), ve = 2; ve < W; ve++)
        ce[ve - 2] = arguments[ve];
      return !!S(P, ...ce);
    }
    return !1;
  }, Uo = function(S, P, W) {
    if (!K[P] && pr(P) && ra(G.tagNameCheck, P))
      return !1;
    if (ea && !Xn[P]) {
      const ce = F(S), ve = O(S);
      if (ve && ce) {
        const Le = ve.length;
        for (let tt = Le - 1; tt >= 0; --tt) {
          const ct = S === W ? k(ve[tt], !0) : ve[tt];
          ce.insertBefore(ct, A(S));
        }
      }
    }
    return Dn(S), !0;
  }, Bo = function(S, P, W, ce) {
    return S.length === 0 ? P : P === W || P === ce ? dn(P) : P;
  }, jo = function(S, P) {
    return S === P || F(S) !== null ? !1 : (wi && Oi(S), !0);
  }, fr = function(S, P) {
    if (mt(Ne.beforeSanitizeElements, S, null), jo(S, P))
      return !0;
    if (Ni(S))
      return Dn(S), !0;
    const W = ht(fe(S));
    if (x = Bo(Ne.uponSanitizeElement, x, L, rt), mt(Ne.uponSanitizeElement, S, {
      tagName: W,
      allowedTags: x
    }), jo(S, P))
      return !0;
    if (zo(S, W))
      return Dn(S), !0;
    if (K[W] || !(V.tagCheck instanceof Function && V.tagCheck(W)) && !x[W]) {
      const ve = Uo(S, W, P);
      return ve === !1 && mt(Ne.afterSanitizeElements, S, null), ve;
    }
    if (X(S) === cn.element && !Zl(S) || (W === "noscript" || W === "noembed" || W === "noframes") && Bt(o_, S.innerHTML))
      return Dn(S), !0;
    if (Pe && S.nodeType === cn.text) {
      const ve = aa(S.textContent);
      S.textContent !== ve && (Ir(t.removed, {
        element: S.cloneNode()
      }), S.textContent = ve);
    }
    return mt(Ne.afterSanitizeElements, S, null), !1;
  }, hr = function(S, P, W) {
    if (Z[P] || Da(P, S) || dt && (P === "id" || P === "name") && (W in n || W in Wl))
      return !1;
    const ce = R[P] || V.attributeCheck instanceof Function && V.attributeCheck(P, S);
    return oe && Bt(ut, P) || he && Bt(at, P) ? !0 : ce ? Ci[P] || Bt(E, Pr(W, j, "")) || (P === "src" || P === "xlink:href" || P === "href") && S !== "script" && Lf(W, "data:") === 0 && Zn[S] || pe && !Bt(Ft, Pr(W, j, "")) ? !0 : !W : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      pr(S) && ra(G.tagNameCheck, S) && ra(G.attributeNameCheck, P, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      P === "is" && G.allowCustomizedBuiltInElements && ra(G.tagNameCheck, W)
    );
  }, Ho = Ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), pr = function(S) {
    return !Ho[jr(S)] && Bt(_, S);
  }, Jl = function(S, P, W, ce) {
    if (Y && typeof b == "object" && typeof b.getAttributeType == "function" && !W)
      switch (b.getAttributeType(S, P)) {
        case "TrustedHTML":
          return U(ce);
        case "TrustedScriptURL":
          return q(ce);
      }
    return ce;
  }, Ql = function(S, P, W, ce) {
    try {
      W ? S.setAttributeNS(W, P, ce) : S.setAttribute(P, ce), Ni(S) ? Dn(S) : Of(t.removed);
    } catch {
      kn(P, S);
    }
  }, vr = function(S) {
    mt(Ne.beforeSanitizeAttributes, S, null);
    const P = S.attributes;
    if (!P || Ni(S))
      return;
    R = Bo(Ne.uponSanitizeAttribute, R, B, vt);
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let ce = P.length;
    const ve = ht(S.nodeName);
    for (; ce--; ) {
      const Le = P[ce], tt = Le.name, ct = Le.namespaceURI, Mt = Le.value, zt = ht(tt), Ma = Mt;
      let xt = tt === "value" ? Ma : jy(Ma);
      if (W.attrName = zt, W.attrValue = xt, W.keepAttr = !0, W.forceKeepAttr = void 0, mt(Ne.uponSanitizeAttribute, S, W), xt = W.attrValue, $n && (zt === "id" || zt === "name") && Lf(xt, vn) !== 0 && (kn(tt, S, Le), xt = vn + xt), ze && Bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, xt)) {
        kn(tt, S, Le);
        continue;
      }
      if (zt === "attributename" && Nf(xt, "href")) {
        kn(tt, S, Le);
        continue;
      }
      if (!W.forceKeepAttr) {
        if (!W.keepAttr) {
          kn(tt, S, Le);
          continue;
        }
        if (!ke && Bt(s_, xt)) {
          kn(tt, S, Le);
          continue;
        }
        if (Pe && (xt = aa(xt)), !hr(ve, zt, xt)) {
          kn(tt, S, Le);
          continue;
        }
        xt = Jl(ve, zt, ct, xt), xt !== Ma && Ql(S, tt, ct, xt);
      }
    }
    mt(Ne.afterSanitizeAttributes, S, null);
  }, At = function(S) {
    let P = null;
    const W = ur(S);
    for (mt(Ne.beforeSanitizeShadowDOM, S, null); P = W.nextNode(); )
      if (mt(Ne.uponSanitizeShadowNode, P, null), fr(P, S), vr(P), Mn(P.content) && At(P.content), X(P) === cn.element) {
        const ce = M(P);
        Mn(ce) && (gr(ce), At(ce));
      }
    mt(Ne.afterSanitizeShadowDOM, S, null);
  }, gr = function(S) {
    const P = [{
      node: S,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const W = P.pop();
      if (W.shadow) {
        At(W.shadow);
        continue;
      }
      const ce = W.node, Le = X(ce) === cn.element, tt = O(ce);
      if (tt)
        for (let ct = tt.length - 1; ct >= 0; --ct)
          P.push({
            node: tt[ct],
            shadow: null
          });
      if (Le) {
        const ct = re ? re(ce) : null;
        if (typeof ct == "string" && ht(ct) === "template") {
          const Mt = ce.content;
          Mn(Mt) && P.push({
            node: Mt,
            shadow: null
          });
        }
      }
      if (Le) {
        const ct = M(ce);
        Mn(ct) && P.push({
          node: null,
          shadow: ct
        }, {
          node: ct,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(te) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, W = null, ce = null, ve = null;
    if (ta = !te, ta && (te = "<!-->"), typeof te != "string" && !Li(te) && (te = Wy(te), typeof te != "string"))
      throw ma("dirty is not a string, aborting");
    if (!t.isSupported)
      return te;
    He ? (x = rt, R = vt) : lr(S), (Ne.uponSanitizeElement.length > 0 || Ne.uponSanitizeAttribute.length > 0) && (x = dn(x)), Ne.uponSanitizeAttribute.length > 0 && (R = dn(R)), t.removed = [];
    const Le = wi && typeof te != "string" && Li(te);
    if (Le) {
      Do(te);
      const Mt = fe(te);
      if (typeof Mt == "string") {
        const zt = ht(Mt);
        if (!x[zt] || K[zt])
          throw ia(te), ma("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ni(te))
        throw ia(te), ma("root node is clobbered and cannot be sanitized in-place");
      try {
        gr(te);
      } catch (zt) {
        throw ia(te), zt;
      }
    } else if (Li(te))
      P = Mo("<!---->"), W = P.ownerDocument.importNode(te, !0), W.nodeType === cn.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? P = W : P.appendChild(W), gr(W);
    else {
      if (!Dt && !Pe && !$e && // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf("<") === -1)
        return Y && et ? U(te) : te;
      if (P = Mo(te), !P)
        return Dt ? null : et ? se : "";
    }
    P && Et && Dn(P.firstChild);
    const tt = Le ? te : P;
    try {
      const Mt = ur(tt);
      for (; ce = Mt.nextNode(); )
        fr(ce, tt), vr(ce), Mn(ce.content) && At(ce.content);
    } catch (Mt) {
      throw Le && (ia(te), _a(t.removed, (zt) => {
        zt.element && Oi(zt.element);
      })), Mt;
    }
    if (Le)
      return _a(t.removed, (Mt) => {
        Mt.element && Oi(Mt.element);
      }), Pe && dr(te), te;
    if (Dt) {
      if (Pe && dr(P), En)
        for (ve = be.call(P.ownerDocument); P.firstChild; )
          ve.appendChild(P.firstChild);
      else
        ve = P;
      return (R.shadowroot || R.shadowrootmode) && (ve = Ke.call(i, ve, !0)), ve;
    }
    let ct = $e ? P.outerHTML : P.innerHTML;
    return $e && x["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && Bt(a_, P.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + ct), Pe && (ct = aa(ct)), Y && et ? U(ct) : ct;
  }, t.setConfig = function() {
    let te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    lr(te), He = !0, rt = x, vt = R;
  }, t.clearConfig = function() {
    xi = null, He = !1, rt = null, vt = null, Y = me, se = "";
  }, t.isValidAttribute = function(te, S, P) {
    xi || lr({});
    const W = ht(te), ce = ht(S);
    return hr(W, ce, P);
  }, t.addHook = function(te, S) {
    typeof S == "function" && rn(Ne, te) && Ir(Ne[te], S);
  }, t.removeHook = function(te, S) {
    if (rn(Ne, te)) {
      if (S !== void 0) {
        const P = Uy(Ne[te], S);
        return P === -1 ? void 0 : By(Ne[te], P, 1)[0];
      }
      return Of(Ne[te]);
    }
  }, t.removeHooks = function(te) {
    rn(Ne, te) && (Ne[te] = []);
  }, t.removeAllHooks = function() {
    Ne = Bf();
  }, t;
}
var iv = nv();
function Wu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nc, jf;
function f_() {
  if (jf) return Nc;
  jf = 1;
  var e = /["'&<>]/;
  Nc = t;
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
  return Nc;
}
var h_ = f_();
const Fs = /* @__PURE__ */ Wu(h_);
function p_() {
  return globalThis._nc_l10n_locale;
}
function v_() {
  return p_().replaceAll(/_/g, "-");
}
function Ml() {
  return globalThis._nc_l10n_language;
}
function g_(e) {
  const t = Ml();
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
function av(e) {
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
  }, u = (A) => A, h = (c.sanitize ? iv.sanitize : u) || u, f = c.escape ? Fs : u, b = (A) => typeof A == "string" || typeof A == "number", C = (A, O, F) => A.replace(/%n/g, "" + F).replace(/{([^{}]*)}/g, (M, z) => {
    if (O === void 0 || !(z in O))
      return f(M);
    const T = O[z];
    return b(T) ? f(`${T}`) : typeof T == "object" && b(T.value) ? (T.escape !== !1 ? Fs : u)(`${T.value}`) : f(M);
  });
  let N = (a?.bundle ?? av(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, h(typeof r == "object" || o !== void 0 ? C(
    N,
    r,
    o
  ) : N);
}
function un(e, t, n, i, a, r) {
  const o = "_" + t + "_::_" + n + "_", c = r?.bundle ?? av(e), u = c.translations[o];
  if (typeof u < "u") {
    const h = u;
    if (Array.isArray(h)) {
      const f = c.pluralFunction(i);
      return m(e, h[f], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function m_(e, t = Ml()) {
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
class Ds {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Ds.GLOBAL_SCOPE_PERSISTENT : Ds.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class b_ {
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
    return new Ds(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function rv(e) {
  return new b_(e);
}
function y_() {
  try {
    return Gu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Lc, Hf;
function ov() {
  if (Hf) return Lc;
  Hf = 1;
  var e = {};
  return Lc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Lc;
}
var Rc, Vf;
function sv() {
  if (Vf) return Rc;
  Vf = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Rc = {
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
  }, Rc;
}
var cs = { exports: {} }, Kf;
function __() {
  return Kf || (Kf = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = sv(), r = ov();
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
  })(cs, cs.exports)), cs.exports;
}
var Ic, Gf;
function w_() {
  if (Gf) return Ic;
  Gf = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Ic = (i) => i ? typeof i != "object" ? e : i : t, Ic;
}
var Pc, Wf;
function S_() {
  if (Wf) return Pc;
  Wf = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), o = e.test(a);
    return r && o && (i = +i, a = +a), i === a ? 0 : r && !o ? -1 : o && !r ? 1 : i < a ? -1 : 1;
  };
  return Pc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Pc;
}
var $c, qf;
function lv() {
  if (qf) return $c;
  qf = 1;
  const e = ov(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = sv(), { safeRe: i, t: a } = __(), r = w_(), { compareIdentifiers: o } = S_(), c = (h, f) => {
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
  return $c = u, $c;
}
var Fc, Yf;
function C_() {
  if (Yf) return Fc;
  Yf = 1;
  const e = lv();
  return Fc = (n, i) => new e(n, i).major, Fc;
}
var T_ = C_();
const Xf = /* @__PURE__ */ Wu(T_);
var Dc, Zf;
function E_() {
  if (Zf) return Dc;
  Zf = 1;
  const e = lv();
  return Dc = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Dc;
}
var Mc, Jf;
function k_() {
  if (Jf) return Mc;
  Jf = 1;
  const e = E_();
  return Mc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Mc;
}
var A_ = k_();
const x_ = /* @__PURE__ */ Wu(A_);
class O_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !x_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Xf(t.getVersion()) !== Xf(this.getVersion()) && console.warn(
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
class N_ {
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
let Fr = null;
function qu() {
  return Fr !== null ? Fr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Fr = new O_(window._nc_event_bus) : Fr = window._nc_event_bus = new N_(), Fr);
}
function cv(e, t) {
  qu().subscribe(e, t);
}
function L_(e, t) {
  qu().unsubscribe(e, t);
}
function pi(e, ...t) {
  qu().emit(e, ...t);
}
const uv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const R_ = Object.prototype.toString, I_ = (e) => R_.call(e) === "[object Object]", Ha = () => {
}, P_ = /* @__PURE__ */ $_();
function $_() {
  var e, t, n;
  return uv && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function zc(e) {
  return Array.isArray(e) ? e : [e];
}
function F_(e, t, n) {
  return qe(e, t, {
    ...n,
    immediate: !0
  });
}
const dv = uv ? window : void 0;
function Hr(e) {
  var t;
  const n = fi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function nr(...e) {
  const t = (i, a, r, o) => (i.addEventListener(a, r, o), () => i.removeEventListener(a, r, o)), n = H(() => {
    const i = zc(fi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return F_(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Hr(r))) !== null && i !== void 0 ? i : [dv].filter((r) => r != null),
      zc(fi(n.value ? e[1] : e[0])),
      zc(g(n.value ? e[2] : e[1])),
      fi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, o], c, u) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const h = I_(o) ? { ...o } : o, f = i.flatMap((b) => a.flatMap((C) => r.map((k) => t(b, C, k, h))));
    u(() => {
      f.forEach((b) => b());
    });
  }, { flush: "post" });
}
let Qf = !1;
function eh(e, t, n = {}) {
  const { window: i = dv, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: c = !1 } = n;
  if (!i) return c ? {
    stop: Ha,
    cancel: Ha,
    trigger: Ha
  } : Ha;
  if (P_ && !Qf) {
    Qf = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((F) => F.addEventListener("click", Ha, O)), i.document.documentElement.addEventListener("click", Ha, O);
  }
  let u = !0;
  const h = (O) => fi(a).some((F) => {
    if (typeof F == "string") return Array.from(i.document.querySelectorAll(F)).some((M) => M === O.target || O.composedPath().includes(M));
    {
      const M = Hr(F);
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
    const F = Hr(e);
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
    nr(i, "click", (O) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), C(O));
    }, {
      passive: !0,
      capture: r
    }),
    nr(i, "pointerdown", (O) => {
      const F = Hr(e);
      u = !h(O) && !!(F && !O.composedPath().includes(F));
    }, { passive: !0 }),
    o && nr(i, "blur", (O) => {
      setTimeout(() => {
        const F = Hr(e);
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
function D_(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, c = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), u = /* @__PURE__ */ Lt({
    x: 0,
    y: 0
  }), h = H(() => c.x - u.x), f = H(() => c.y - u.y), { max: b, abs: C } = Math, k = H(() => b(C(h.value), C(f.value)) >= n), N = /* @__PURE__ */ ip(!1), A = H(() => k.value ? C(h.value) > C(f.value) ? h.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), O = (X) => [X.touches[0].clientX, X.touches[0].clientY], F = (X, fe) => {
    c.x = X, c.y = fe;
  }, M = (X, fe) => {
    u.x = X, u.y = fe;
  }, z = {
    passive: o,
    capture: !o
  }, T = (X) => {
    N.value && a?.(X, A.value), N.value = !1;
  }, re = [
    nr(e, "touchstart", (X) => {
      if (X.touches.length !== 1) return;
      const [fe, Y] = O(X);
      F(fe, Y), M(fe, Y), r?.(X);
    }, z),
    nr(e, "touchmove", (X) => {
      if (X.touches.length !== 1) return;
      const [fe, Y] = O(X);
      M(fe, Y), z.capture && !z.passive && Math.abs(h.value) > Math.abs(f.value) && X.preventDefault(), !N.value && k.value && (N.value = !0), N.value && i?.(X);
    }, z),
    nr(e, ["touchend", "touchcancel"], T, z)
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
var M_ = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = fb(), r = db(), o = /* @__PURE__ */ we([]), c = H(() => o.value.reduce((j, _) => (j[~~_.id] = _) && j, {})), u = H(() => o.value.length), h = /* @__PURE__ */ we(null), f = /* @__PURE__ */ we(!1), b = /* @__PURE__ */ we({
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
    }, O = (j, _) => {
      let E = j.target.closest(".splitpanes__splitter");
      if (E) {
        let { left: x, top: L } = E.getBoundingClientRect(), { clientX: R, clientY: B } = "ontouchstart" in window && j.touches ? j.touches[0] : j;
        b.value.cursorOffset = i.horizontal ? B - L : R - x;
      }
      N(), b.value.mouseDown = !0, b.value.activeSplitter = _, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, F = (j) => {
      b.value.mouseDown && (j.preventDefault(), b.value.dragging || (window.getSelection()?.removeAllRanges(), b.value.dragging = !0), requestAnimationFrame(() => {
        Y(X(j)), at("resize", { event: j }, !0);
      }));
    }, M = (j) => {
      b.value.dragging && (window.getSelection()?.removeAllRanges(), at("resized", { event: j }, !0)), b.value.mouseDown = !1, b.value.activeSplitter = null, setTimeout(() => {
        b.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, z = (j, _) => {
      "ontouchstart" in window && (j.preventDefault(), C.value.splitter === _ ? (clearTimeout(C.value.timeoutId), C.value.timeoutId = null, T(j, _), C.value.splitter = null) : (C.value.splitter = _, C.value.timeoutId = setTimeout(() => C.value.splitter = null, 500))), b.value.dragging || at("splitter-click", {
        event: j,
        index: _
      }, !0);
    }, T = (j, _) => {
      if (at("splitter-dblclick", {
        event: j,
        index: _
      }, !0), i.maximizePanes) {
        let E = 0;
        o.value = o.value.map((x, L) => (x.size = L === _ ? x.max : x.min, L !== _ && (E += x.min), x)), o.value[_].size -= E, at("pane-maximize", {
          event: j,
          index: _,
          pane: o.value[_]
        }), at("resized", {
          event: j,
          index: _
        }, !0);
      }
    }, re = (j, _) => {
      if (!i.keyboardStep) return;
      let E = i.horizontal ? j.key === "ArrowDown" : j.key === "ArrowRight", x = i.horizontal ? j.key === "ArrowUp" : j.key === "ArrowLeft";
      if (!E && !x) return;
      j.preventDefault(), b.value.activeSplitter = _;
      let L = (E ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), R = Q(_) + o.value[_].size;
      se(Math.min(Math.max(R + L * i.keyboardStep, 0), 100)), at("resize", { event: j }, !0), at("resized", { event: j }, !0), b.value.activeSplitter = null;
    }, ue = (j, _) => {
      let E = c.value[_];
      E && at("pane-click", {
        event: j,
        index: E.index,
        pane: E
      });
    }, X = (j) => {
      let _ = h.value.getBoundingClientRect(), { clientX: E, clientY: x } = "ontouchstart" in window && j.touches ? j.touches[0] : j;
      return {
        x: E - (i.horizontal ? 0 : b.value.cursorOffset) - _.left,
        y: x - (i.horizontal ? b.value.cursorOffset : 0) - _.top
      };
    }, fe = (j) => {
      j = j[i.horizontal ? "y" : "x"];
      let _ = h.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (j = _ - j), j * 100 / _;
    }, Y = (j) => {
      se(fe(j));
    }, se = (j) => {
      let _ = b.value.activeSplitter;
      if (_ === null || _ >= o.value.length - 1) return;
      let E = {
        prevPanesSize: Q(_),
        nextPanesSize: ee(_),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, x = 0 + (i.pushOtherPanes ? 0 : E.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : E.nextPanesSize);
      j = Math.max(Math.min(j, L), x);
      let R = [_, _ + 1], B = o.value[R[0]] || null, G = o.value[R[1]] || null, K = B !== null && B.max < 100 && j >= B.max + E.prevPanesSize, Z = G !== null && G.max < 100 && j <= 100 - (G.max + ee(_ + 1));
      if (K || Z) {
        K ? (B.size = B.max, G.size = Math.min(Math.max(100 - B.max - E.prevPanesSize - E.nextPanesSize, G.min), G.max)) : (B.size = Math.min(Math.max(100 - G.max - E.prevPanesSize - ee(_ + 1), B.min), B.max), G.size = G.max);
        return;
      }
      if (i.pushOtherPanes) {
        let V = me(E, j);
        if (!V) return;
        ({ sums: E, panesToResize: R } = V), B = o.value[R[0]] || null, G = o.value[R[1]] || null;
      }
      B !== null && (B.size = Math.min(Math.max(j - E.prevPanesSize - E.prevReachedMinPanes, B.min), B.max)), G !== null && (G.size = Math.min(Math.max(100 - j - E.nextPanesSize - E.nextReachedMinPanes, G.min), G.max));
    }, me = (j, _) => {
      let E = b.value.activeSplitter, x = [E, E + 1];
      if (_ < j.prevPanesSize + o.value[x[0]].min) {
        if (x[0] = $(E).index, j.prevReachedMinPanes = 0, x[0] < E && o.value.forEach((L, R) => {
          R > x[0] && R <= E && (L.size = L.min, j.prevReachedMinPanes += L.min);
        }), x[0] === void 0) return j.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((L, R) => {
          R > 0 && R <= E && (L.size = L.min, j.prevReachedMinPanes += L.min);
        }), o.value[x[1]].size = 100 - j.prevReachedMinPanes - o.value[0].min - j.prevPanesSize - j.nextPanesSize, null;
        j.prevPanesSize = Q(x[0]);
      }
      return _ > 100 - j.nextPanesSize - o.value[x[1]].min && (x[1] = U(E).index, j.nextReachedMinPanes = 0, x[1] > E + 1 && o.value.forEach((L, R) => {
        R > E && R < x[1] && (L.size = L.min, j.nextReachedMinPanes += L.min);
      }), j.nextPanesSize = x[1] === void 0 ? 0 : ee(x[1] - 1), x[1] === void 0) ? (j.nextReachedMinPanes = 0, o.value.forEach((L, R) => {
        R >= E + 1 && (L.size = L.min, j.nextReachedMinPanes += L.min);
      }), x[0] !== void 0 && (o.value[x[0]].size = 100 - j.prevPanesSize - ee(x[0] - 1)), null) : {
        sums: j,
        panesToResize: x
      };
    }, Q = (j) => o.value.reduce((_, E, x) => _ + (x < j ? E.size : 0), 0), ee = (j) => o.value.reduce((_, E, x) => _ + (x > j + 1 ? E.size : 0), 0), $ = (j) => [...o.value].reverse().find((_) => _.index < j && _.size > _.min) || {}, U = (j) => o.value.find((_) => _.index > j + 1 && _.size > _.min) || {}, q = () => {
      let j = Array.from(h.value?.children || []);
      for (let _ of j) {
        let E = _.classList.contains("splitpanes__pane"), x = _.classList.contains("splitpanes__splitter");
        !E && !x && (_.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, le = (j, _, E = !1) => {
      let x = j - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), E || (L.onmousedown = (R) => O(R, x), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (R) => O(R, x)), L.onclick = (R) => z(R, x + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (R) => re(R, x))), L.ondblclick = (R) => T(R, x + 1), _.parentNode.insertBefore(L, _);
    }, ie = (j) => {
      j.onmousedown = null, j.onclick = null, j.ondblclick = null, j.onkeydown = null, j.remove();
    }, ge = () => {
      let j = Array.from(h.value?.children || []);
      for (let E of j) E.className.includes("splitpanes__splitter") && ie(E);
      let _ = 0;
      for (let E of j) E.className.includes("splitpanes__pane") && (!_ && i.firstSplitter ? le(_, E, !0) : _ && le(_, E), _++);
    }, de = ({ uid: j, ..._ }) => {
      let E = c.value[j];
      for (let [x, L] of Object.entries(_)) E[x] = L;
    }, be = !1, _e = (j) => {
      let _ = -1;
      Array.from(h.value?.children || []).some((E) => (E.className.includes("splitpanes__pane") && _++, E.isSameNode(j.el))), o.value.splice(_, 0, {
        ...j,
        index: _
      }), o.value.forEach((E, x) => E.index = x), f.value && !be && (be = !0, en(() => {
        ge(), Ne({ addedPane: o.value[_] }), at("pane-add", { pane: o.value[_] }), be = !1;
      }));
    }, Ke = (j) => {
      let _ = o.value.findIndex((x) => x.id === j);
      o.value[_].el = null;
      let E = o.value.splice(_, 1)[0];
      o.value.forEach((x, L) => x.index = L), en(() => {
        ge(), at("pane-remove", { pane: E }), Ne({ removedPane: {
          ...E
        } });
      });
    }, Ne = (j = {}) => {
      !j.addedPane && !j.removedPane ? pt() : o.value.some((_) => _.givenSize !== null || _.min || _.max < 100) ? it(j) : lt(), f.value && at("resized");
    }, lt = () => {
      let j = 100 / u.value, _ = 100, E = [], x = [];
      for (let L of o.value) L.size = Math.max(Math.min(j, L.max), L.min), _ -= L.size, L.size >= L.max && E.push(L.id), L.size <= L.min && x.push(L.id);
      Math.abs(_) > 0.1 && ut(_, E, x);
    }, pt = () => {
      let j = 100, _ = [], E = [], x = 0;
      for (let R of o.value) j -= R.size, R.givenSize !== null && x++, R.size >= R.max && _.push(R.id), R.size <= R.min && E.push(R.id);
      let L = 100;
      if (j > 0.1) {
        for (let R of o.value) R.givenSize === null && (R.size = Math.max(Math.min(j / (u.value - x), R.max), R.min)), L -= R.size;
        L > 0.1 && ut(L, _, E);
      }
    }, it = ({ addedPane: j, removedPane: _ } = {}) => {
      let E = o.value.reduce((K, Z) => K + (Z.givenSize === null ? 0 : Z.givenSize), 0), x = o.value.filter((K) => K.givenSize === null).length, L = x > 0 ? (100 - E) / x : 0, R = 0, B = [], G = [];
      for (let K of o.value) R -= K.size, K.size >= K.max && B.push(K.id), K.size <= K.min && G.push(K.id);
      if (!(Math.abs(R) < 0.1)) {
        R = 100;
        for (let K of o.value) K.givenSize === null && (K.size = Math.max(Math.min(L, K.max), K.min)), R -= K.size, K.size >= K.max && B.push(K.id), K.size <= K.min && G.push(K.id);
        Math.abs(R) > 0.1 && ut(R, B, G);
      }
    }, ut = (j, _, E) => {
      let x;
      x = j > 0 ? j / (u.value - _.length) : j / (u.value - E.length), o.value.forEach((L, R) => {
        if (j > 0 && !_.includes(L.id)) {
          let B = Math.max(Math.min(L.size + x, L.max), L.min), G = B - L.size;
          j -= G, L.size = B;
        } else if (!E.includes(L.id)) {
          let B = Math.max(Math.min(L.size + x, L.max), L.min), G = B - L.size;
          j -= G, L.size = B;
        }
      }), Math.abs(j) > 0.1 && f.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, at = (j, _ = void 0, E = !1) => {
      let x = _?.index ?? b.value.activeSplitter ?? null;
      n(j, {
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
    qe(() => i.firstSplitter, () => ge()), qe(() => i.horizontal, (j) => en(() => {
      n("direction-changed", {
        horizontal: j,
        panes: o.value.map((_) => ({
          min: _.min,
          max: _.max,
          size: _.size
        }))
      });
    })), Zi(() => {
      q(), ge(), Ne(), at("ready"), f.value = !0;
    }), rr(() => f.value = !1);
    let Ft = () => {
      let { class: j, ..._ } = a;
      return an("div", {
        ref: h,
        class: [k.value, j],
        ..._
      }, r.default?.());
    };
    return yn("panes", o), yn("indexedPanes", c), yn("horizontal", H(() => i.horizontal)), yn("requestUpdate", de), yn("onPaneAdd", _e), yn("onPaneRemove", Ke), yn("onPaneClick", ue), (j, _) => (y(), Be(Uu(Ft)));
  }
}), z_ = {
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
    let t = e, n = Vt("requestUpdate"), i = Vt("onPaneAdd"), a = Vt("horizontal"), r = Vt("onPaneRemove"), o = Vt("onPaneClick"), c = Ia()?.uid, u = Vt("indexedPanes"), h = H(() => u.value[c]), f = /* @__PURE__ */ we(null), b = H(() => {
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
    })), Zi(() => {
      i({
        id: c,
        el: f.value,
        min: C.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : b.value,
        size: b.value
      });
    }), rr(() => r(c)), (A, O) => (y(), w("div", {
      ref_key: "paneEl",
      ref: f,
      class: "splitpanes__pane",
      onClick: O[0] ||= (F) => g(o)(F, A._.uid),
      style: pn(N.value)
    }, [Me(A.$slots, "default")], 4));
  }
}, U_ = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", B_ = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", j_ = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", H_ = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Yu = 1024, fv = Yu / 2, Ms = (e) => document.documentElement.clientWidth < e, hv = /* @__PURE__ */ we(Ms(Yu)), pv = /* @__PURE__ */ we(Ms(fv));
window.addEventListener("resize", () => {
  hv.value = Ms(Yu), pv.value = Ms(fv);
}, { passive: !0 });
function Lo() {
  return /* @__PURE__ */ co(hv);
}
function V_() {
  return /* @__PURE__ */ co(pv);
}
class K_ {
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
    return un("", t, n, i, a, { bundle: this.bundle });
  }
}
class G_ {
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
    return this.setLanguage(Ml().replace("-", "_"));
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
    const t = new K_((n) => m_(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function W_() {
  return new G_();
}
const vv = W_().detectLanguage().build(), Ct = (...e) => vv.gettext(...e);
function Ji(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Ml() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        vv.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const q_ = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Y_ = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], X_ = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Z_ = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], J_ = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Q_ = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], e1 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], t1 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], n1 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const i1 = /* @__PURE__ */ Symbol(""), [a1] = window.OC?.config?.version?.split(".") ?? [], gv = Number.parseInt(a1 ?? "35"), r1 = gv < 32, Qi = gv < 34, o1 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function s1() {
  return Vt(o1, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, l1 = { class: "button-vue__wrapper" }, c1 = { class: "button-vue__icon" }, u1 = { class: "button-vue__text" }, d1 = /* @__PURE__ */ $t({
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
    const n = e, i = t, { formBoxItemClass: a } = s1(), r = Vt(i1, null) !== null, o = H(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), c = H(() => o.value === "button" && typeof n.pressed == "boolean"), u = H(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), h = H(() => u.value.startsWith("tertiary")), f = H(() => n.alignment.split("-")[0]), b = H(() => n.alignment.includes("-")), C = Vt("NcPopover:trigger:attrs", () => ({}), !1), k = H(() => C()), N = H(() => {
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
    return (O, F) => (y(), Be(Uu(o.value), qt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${u.value}`]: u.value,
          "button-vue--tertiary": h.value,
          "button-vue--wide": e.wide,
          [`button-vue--${f.value}`]: f.value !== "center",
          "button-vue--reverse": b.value,
          "button-vue--legacy": g(r1),
          "button-vue--legacy34": g(Qi)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: A }), {
      default: Re(() => [
        l("span", l1, [
          l("span", c1, [
            Me(O.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", u1, [
            Me(O.$slots, "default", {}, () => [
              Te(v(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Wn = /* @__PURE__ */ Qe(d1, [["__scopeId", "data-v-47ce59a3"]]), f1 = ["aria-hidden", "aria-label"], h1 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, p1 = ["d"], v1 = ["innerHTML"], g1 = /* @__PURE__ */ $t({
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
    oy((a) => ({
      fb515064: n.value
    }));
    const t = e, n = H(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = H(() => {
      if (!t.svg || t.path)
        return;
      const a = iv.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
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
      }, null, 8, v1)) : (y(), w("svg", h1, [
        l("path", { d: e.path }, null, 8, p1)
      ]))
    ], 10, f1));
  }
}), zl = /* @__PURE__ */ Qe(g1, [["__scopeId", "data-v-aaedb1c3"]]);
b1();
function m1(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), pi("csrf-token-update", { token: e, _internal: !0 }));
}
function b1() {
  cv("csrf-token-update", ({ token: e, _internal: t }) => {
    t || m1(e);
  });
}
rv("public").persist().build();
let Va;
function th(e, t) {
  return e ? e.getAttribute(t) : null;
}
function y1() {
  if (Va !== void 0)
    return Va;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = th(e, "data-user");
  return t === null ? (Va = null, Va) : (Va = {
    uid: t,
    displayName: th(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Va);
}
var bt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(bt || {});
class _1 {
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
function w1(e) {
  return new _1(e);
}
class S1 {
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
    const t = y1();
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
function C1() {
  return new S1(w1);
}
const Na = C1().detectUser().setApp("@nextcloud/vue").build();
function T1(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let mv = "missing-app-name";
try {
  mv = "library";
} catch {
  Na.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const E1 = mv;
let k1 = "";
try {
  k1 = "0.1.0-alpha.171";
} catch {
  Na.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function bv() {
  return Vt("appName", E1);
}
const A1 = T1(() => {
  const e = Gu("core", "apps", []), t = bv();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), du = g_();
Ji(e1);
const x1 = /* @__PURE__ */ $t({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = Lo();
    qe(t, n), Zi(() => {
      n(t.value);
    }), rr(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && pi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (y(), Be(g(Wn), {
      "aria-label": g(Ct)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(Ct)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Re(() => [
        ye(g(zl), {
          directional: "",
          path: g(U_)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), O1 = /* @__PURE__ */ Qe(x1, [["__scopeId", "data-v-a28923a1"]]), nh = rv("nextcloud").persist().build(), N1 = y_().theming?.name ?? "Nextcloud", L1 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: O1,
    Pane: z_,
    Splitpanes: M_
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
      appName: bv(),
      localizedAppName: A1(),
      isMobile: Lo(),
      isRtl: du
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
        return Na.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(N1), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = D_(this.$el, {
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
      nh.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), Na.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(nh.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return Na.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, R1 = {
  key: 0,
  class: "hidden-visually"
}, I1 = { class: "app-content-wrapper__list" }, P1 = {
  key: 1,
  class: "app-content-wrapper"
};
function $1(e, t, n, i, a, r) {
  const o = je("NcAppContentDetailsToggle"), c = je("Pane"), u = je("Splitpanes");
  return y(), w("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (y(), w("h1", R1, v(n.pageHeading), 1)) : D("", !0),
    e.$slots.list ? (y(), w(ae, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (y(), w("div", {
        key: 0,
        class: Ee(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (y(), Be(o, {
          key: 0,
          onClick: Oe(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : D("", !0),
        Ie(l("div", I1, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [er, !n.showDetails]
        ]),
        n.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : D("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (y(), w("div", P1, [
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
const F1 = /* @__PURE__ */ Qe(L1, [["render", $1], ["__scopeId", "data-v-51427d61"]]);
var yv = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], zs = /* @__PURE__ */ yv.join(","), _v = typeof Element > "u", Ra = _v ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Us = !_v && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Bs = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", o = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Bs(t.parentNode));
  return o;
}, D1 = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, wv = function(t, n, i) {
  if (Bs(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(zs));
  return n && Ra.call(t, zs) && a.unshift(t), a = a.filter(i), a;
}, js = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Bs(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), u = c.length ? c : o.children, h = js(u, !0, i);
        i.flatten ? a.push.apply(a, h) : a.push({
          scopeParent: o,
          candidates: h
        });
      } else {
        var f = Ra.call(o, zs);
        f && i.filter(o) && (n || !t.includes(o)) && a.push(o);
        var b = o.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(o), C = !Bs(b, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (b && C) {
          var k = js(b === !0 ? o.children : b.children, !0, i);
          i.flatten ? a.push.apply(a, k) : a.push({
            scopeParent: o,
            candidates: k
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, Sv = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Ta = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || D1(t)) && !Sv(t) ? 0 : t.tabIndex;
}, M1 = function(t, n) {
  var i = Ta(t);
  return i < 0 && n && !Sv(t) ? 0 : i;
}, z1 = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Cv = function(t) {
  return t.tagName === "INPUT";
}, U1 = function(t) {
  return Cv(t) && t.type === "hidden";
}, B1 = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, j1 = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, H1 = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Us(t), i = function(c) {
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
}, V1 = function(t) {
  return Cv(t) && t.type === "radio";
}, K1 = function(t) {
  return V1(t) && !H1(t);
}, G1 = function(t) {
  var n, i = t && Us(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var o, c, u;
    for (r = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !r && a; ) {
      var h, f, b;
      i = Us(a), a = (h = i) === null || h === void 0 ? void 0 : h.host, r = !!((f = a) !== null && f !== void 0 && (b = f.ownerDocument) !== null && b !== void 0 && b.contains(a));
    }
  }
  return r;
}, ih = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, W1 = function(t, n) {
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
  var u = Ra.call(t, "details>summary:first-of-type"), h = u ? t.parentElement : t;
  if (Ra.call(h, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var f = t; t; ) {
        var b = t.parentElement, C = Us(t);
        if (b && !b.shadowRoot && a(b) === !0)
          return ih(t);
        t.assignedSlot ? t = t.assignedSlot : !b && C !== t.ownerDocument ? t = C.host : t = b;
      }
      t = f;
    }
    if (G1(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return ih(t);
  return !1;
}, q1 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return Ra.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Hs = function(t, n) {
  return !(n.disabled || U1(n) || W1(n, t) || // For a details element with a summary, the summary element gets the focus
  B1(n) || q1(n));
}, fu = function(t, n) {
  return !(K1(n) || Ta(n) < 0 || !Hs(t, n));
}, Y1 = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Tv = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, c = o ? a.scopeParent : a, u = M1(c, o), h = o ? Tv(a.candidates) : c;
    u === 0 ? o ? n.push.apply(n, h) : n.push(c) : i.push({
      documentOrder: r,
      tabIndex: u,
      item: a,
      isScope: o,
      content: h
    });
  }), i.sort(z1).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, X1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = js([t], n.includeContainer, {
    filter: fu.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Y1
  }) : i = wv(t, n.includeContainer, fu.bind(null, n)), Tv(i);
}, Z1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = js([t], n.includeContainer, {
    filter: Hs.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = wv(t, n.includeContainer, Hs.bind(null, n)), i;
}, Ka = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Ra.call(t, zs) === !1 ? !1 : fu(n, t);
}, J1 = /* @__PURE__ */ yv.concat("iframe:not([inert]):not([inert] *)").join(","), Uc = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Ra.call(t, J1) === !1 ? !1 : Hs(n, t);
};
function hu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Q1(e) {
  if (Array.isArray(e)) return hu(e);
}
function ah(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Ev(e)) || t) {
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
function e0(e, t, n) {
  return (t = r0(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function t0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function n0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function oh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rh(Object(n), !0).forEach(function(i) {
      e0(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rh(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function i0(e) {
  return Q1(e) || t0(e) || Ev(e) || n0();
}
function a0(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function r0(e) {
  var t = a0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ev(e, t) {
  if (e) {
    if (typeof e == "string") return hu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hu(e, t) : void 0;
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
}, o0 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, s0 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Xr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, l0 = function(t) {
  return Xr(t) && !t.shiftKey;
}, c0 = function(t) {
  return Xr(t) && t.shiftKey;
}, sh = function(t) {
  return setTimeout(t, 0);
}, Dr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, us = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, u0 = [], Xu = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || u0, r = oh({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: l0,
    isKeyBackward: c0
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
      var ie = le.container, ge = le.tabbableNodes;
      return ie.contains($) || q?.includes(ie) || ge.find(function(de) {
        return de === $;
      });
    });
  }, f = function($) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = U.hasFallback, le = q === void 0 ? !1 : q, ie = U.params, ge = ie === void 0 ? [] : ie, de = r[$];
    if (typeof de == "function" && (de = de.apply(void 0, i0(ge))), de === !0 && (de = void 0), !de) {
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
    if ($ === void 0 || $ && !Uc($, r.tabbableOptions)) {
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
      var U = X1($, r.tabbableOptions), q = Z1($, r.tabbableOptions), le = U.length > 0 ? U[0] : void 0, ie = U.length > 0 ? U[U.length - 1] : void 0, ge = q.find(function(_e) {
        return Ka(_e);
      }), de = q.slice().reverse().find(function(_e) {
        return Ka(_e);
      }), be = !!U.find(function(_e) {
        return Ta(_e) > 0;
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
        firstDomTabbableNode: ge,
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
            return Ka(pt);
          }) : q.slice(0, q.indexOf(Ke)).reverse().find(function(pt) {
            return Ka(pt);
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
      }), o.mostRecentlyFocusedNode = $, o0($) && $.select();
    }
  }, A = function($) {
    var U = f("setReturnFocus", {
      params: [$]
    });
    return U || (U === !1 ? !1 : $);
  }, O = function($) {
    var U = $.target, q = $.event, le = $.isBackward, ie = le === void 0 ? !1 : le;
    U = U || us(q), k();
    var ge = null;
    if (o.tabbableGroups.length > 0) {
      var de = h(U, q), be = de >= 0 ? o.containerGroups[de] : void 0;
      if (de < 0)
        ie ? ge = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : ge = o.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var _e = o.tabbableGroups.findIndex(function(ut) {
          var at = ut.firstTabbableNode;
          return U === at;
        });
        if (_e < 0 && (be.container === U || Uc(U, r.tabbableOptions) && !Ka(U, r.tabbableOptions) && !be.nextTabbableNode(U, !1)) && (_e = de), _e >= 0) {
          var Ke = _e === 0 ? o.tabbableGroups.length - 1 : _e - 1, Ne = o.tabbableGroups[Ke];
          ge = Ta(U) >= 0 ? Ne.lastTabbableNode : Ne.lastDomTabbableNode;
        } else Xr(q) || (ge = be.nextTabbableNode(U, !1));
      } else {
        var lt = o.tabbableGroups.findIndex(function(ut) {
          var at = ut.lastTabbableNode;
          return U === at;
        });
        if (lt < 0 && (be.container === U || Uc(U, r.tabbableOptions) && !Ka(U, r.tabbableOptions) && !be.nextTabbableNode(U)) && (lt = de), lt >= 0) {
          var pt = lt === o.tabbableGroups.length - 1 ? 0 : lt + 1, it = o.tabbableGroups[pt];
          ge = Ta(U) >= 0 ? it.firstTabbableNode : it.firstDomTabbableNode;
        } else Xr(q) || (ge = be.nextTabbableNode(U));
      }
    } else
      ge = f("fallbackFocus");
    return ge;
  }, F = function($) {
    var U = us($);
    if (!(h(U, $) >= 0)) {
      if (Dr(r.clickOutsideDeactivates, $)) {
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
      Dr(r.allowOutsideClick, $) || $.preventDefault();
    }
  }, M = function($) {
    var U = us($), q = h(U, $) >= 0;
    if (q || U instanceof Document)
      q && (o.mostRecentlyFocusedNode = U);
    else {
      $.stopImmediatePropagation();
      var le, ie = !0;
      if (o.mostRecentlyFocusedNode)
        if (Ta(o.mostRecentlyFocusedNode) > 0) {
          var ge = h(o.mostRecentlyFocusedNode), de = o.containerGroups[ge].tabbableNodes;
          if (de.length > 0) {
            var be = de.findIndex(function(_e) {
              return _e === o.mostRecentlyFocusedNode;
            });
            be >= 0 && (r.isKeyForward(o.recentNavEvent) ? be + 1 < de.length && (le = de[be + 1], ie = !1) : be - 1 >= 0 && (le = de[be - 1], ie = !1));
          }
        } else
          o.containerGroups.some(function(_e) {
            return _e.tabbableNodes.some(function(Ke) {
              return Ta(Ke) > 0;
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
    q && (Xr($) && $.preventDefault(), N(q));
  }, T = function($) {
    (r.isKeyForward($) || r.isKeyBackward($)) && z($, r.isKeyBackward($));
  }, re = function($) {
    s0($) && Dr(r.escapeDeactivates, $) !== !1 && ($.preventDefault(), c.deactivate());
  }, ue = function($) {
    var U = us($);
    h(U, $) >= 0 || Dr(r.clickOutsideDeactivates, $) || Dr(r.allowOutsideClick, $) || ($.preventDefault(), $.stopImmediatePropagation());
  }, X = function() {
    if (o.active) {
      ui.activateTrap(a, c);
      var $;
      return r.delayInitialFocus ? $ = new Promise(function(U) {
        o.delayInitialFocusTimer = sh(function() {
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
    var U = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set(), le = ah($), ie;
    try {
      for (le.s(); !(ie = le.n()).done; ) {
        var ge = ie.value;
        U.add(ge);
        for (var de = typeof ShadowRoot < "u" && ge.getRootNode() instanceof ShadowRoot, be = ge; be; ) {
          U.add(be);
          var _e = be.parentElement, Ke = [];
          _e ? Ke = _e.children : !_e && de && (Ke = be.getRootNode().children, _e = be.getRootNode().host, de = typeof ShadowRoot < "u" && _e.getRootNode() instanceof ShadowRoot);
          var Ne = ah(Ke), lt;
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
        var ge = Array.from(ie.removedNodes);
        return ge.some(function(de) {
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
  }, me = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, Q = function() {
    me && (me.disconnect(), o.active && !o.paused && o.containers.map(function($) {
      me.observe($, {
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
      var U = u($, "onActivate"), q = u($, "onPostActivate"), le = u($, "checkCanFocusTrap"), ie = ui.getActiveTrap(a), ge = !1;
      if (ie && !ie.paused) {
        var de;
        (de = ie._setSubtreeIsolation) === null || de === void 0 || de.call(ie, !1), ge = !0;
      }
      try {
        le || k(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = b(i), U?.({
          trap: c
        });
        var be = function() {
          le && k();
          var Ne = function() {
            c._setSubtreeIsolation(!0), Q(), q?.({
              trap: c
            });
          }, lt = X();
          lt ? lt.then(Ne) : Ne();
        };
        if (le)
          return le(o.containers.concat()).then(be, be), this;
        be();
      } catch (Ke) {
        if (ie === ui.getActiveTrap(a) && ge) {
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
      var U = oh({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, $);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || c._setSubtreeIsolation(!1), o.alreadySilent.clear(), Y(), o.active = !1, o.paused = !1, Q(), ui.deactivateTrap(a, c);
      var q = u(U, "onDeactivate"), le = u(U, "onPostDeactivate"), ie = u(U, "checkCanReturnFocus"), ge = u(U, "delayReturnFocus"), de = u(U, "returnFocus", "returnFocusOnDeactivate");
      q?.({
        trap: c
      });
      var be = function() {
        de && N(A(o.nodeFocusedBeforeActivation)), le?.({
          trap: c
        });
      }, _e = function() {
        ge && de ? sh(be) : be();
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
      }), r.isolateSubtrees && fe(o.containers), o.active && (k(), o.paused || c._setSubtreeIsolation(!0)), Q(), this;
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
          }), Y(), c._setSubtreeIsolation(!1), Q(), le?.({
            trap: c
          });
        } else {
          var ie = u(U, "onUnpause"), ge = u(U, "onPostUnpause");
          ie?.({
            trap: c
          });
          var de = function() {
            k();
            var _e = function() {
              c._setSubtreeIsolation(!0), Q(), ge?.({
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
const kv = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), d0 = /* @__PURE__ */ $t({
  name: "NcAppNavigationList",
  provide() {
    return {
      [kv]: {
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
function f0(e, t, n, i, a, r) {
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
      style: pn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Me(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Av = /* @__PURE__ */ Qe(d0, [["render", f0], ["__scopeId", "data-v-3e73e246"]]);
function yo() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function h0() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...yo()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === yo().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const xv = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Ov = /* @__PURE__ */ Symbol.for("NcContent:selector");
Ji(Z_);
const p0 = { class: "app-navigation-toggle-wrapper" }, v0 = /* @__PURE__ */ $t({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Op(e, "open"), n = H(() => t.value ? Ct("Close navigation") : Ct("Open navigation"));
    return (i, a) => (y(), w("div", p0, [
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
          ye(zl, {
            path: g(H_),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), g0 = /* @__PURE__ */ Qe(v0, [["__scopeId", "data-v-e8177cc7"]]), m0 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], b0 = { class: "app-navigation__search" }, y0 = /* @__PURE__ */ $t({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Vt(
      xv,
      () => qb(),
      !1
    ), a = eb("appNavigationContainer"), r = Lo(), o = /* @__PURE__ */ we(!r.value), c = H(() => r.value && o.value);
    Km(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), qe(r, () => {
      o.value = !r.value;
    }), qe(c, () => {
      f();
    }), Zi(() => {
      i(!0), cv("toggle-navigation", h), pi("navigation-toggled", {
        open: o.value
      }), n = Xu(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), u(!1)), !1),
        fallbackFocus: a.value,
        trapStack: yo(),
        escapeDeactivates: !1
      }), f();
    }), xo(() => {
      i(!1), L_("toggle-navigation", h), n.deactivate();
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
        "app-navigation--legacy": g(Qi)
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
        l("div", b0, [
          Me(C.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !C.$slots.list }])
        }, [
          Me(C.$slots, "default", {}, void 0, !0)
        ], 2),
        C.$slots.list ? (y(), Be(Av, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Re(() => [
            Me(C.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : D("", !0),
        Me(C.$slots, "footer", {}, void 0, !0)
      ], 40, m0),
      ye(g0, {
        open: o.value,
        "onUpdate:open": u
      }, null, 8, ["open"])
    ], 2));
  }
}), _0 = /* @__PURE__ */ Qe(y0, [["__scopeId", "data-v-37908cd4"]]), w0 = {
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
}, S0 = ["aria-hidden", "aria-label"], C0 = ["fill", "width", "height"], T0 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, E0 = { key: 0 };
function k0(e, t, n, i, a, r) {
  return y(), w("span", qt(e.$attrs, {
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
      l("path", T0, [
        n.title ? (y(), w("title", E0, v(n.title), 1)) : D("", !0)
      ])
    ], 8, C0))
  ], 16, S0);
}
const A0 = /* @__PURE__ */ Qe(w0, [["render", k0]]), x0 = {
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
}, O0 = ["aria-hidden", "aria-label"], N0 = ["fill", "width", "height"], L0 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, R0 = { key: 0 };
function I0(e, t, n, i, a, r) {
  return y(), w("span", qt(e.$attrs, {
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
      l("path", L0, [
        n.title ? (y(), w("title", R0, v(n.title), 1)) : D("", !0)
      ])
    ], 8, N0))
  ], 16, O0);
}
const P0 = /* @__PURE__ */ Qe(x0, [["render", I0]]), $0 = {
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
}, F0 = ["aria-hidden", "aria-label"], D0 = ["fill", "width", "height"], M0 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, z0 = { key: 0 };
function U0(e, t, n, i, a, r) {
  return y(), w("span", qt(e.$attrs, {
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
      l("path", M0, [
        n.title ? (y(), w("title", z0, v(n.title), 1)) : D("", !0)
      ])
    ], 8, D0))
  ], 16, F0);
}
const Nv = /* @__PURE__ */ Qe($0, [["render", U0]]), B0 = {
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
}, j0 = ["aria-hidden", "aria-label"], H0 = ["fill", "width", "height"], V0 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, K0 = { key: 0 };
function G0(e, t, n, i, a, r) {
  return y(), w("span", qt(e.$attrs, {
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
      l("path", V0, [
        n.title ? (y(), w("title", K0, v(n.title), 1)) : D("", !0)
      ])
    ], 8, H0))
  ], 16, j0);
}
const Lv = /* @__PURE__ */ Qe(B0, [["render", G0]]);
Ji(Y_);
const W0 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Nv,
    IconClose: Lv,
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
    return { isLegacy34: Qi };
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
}, q0 = ["placeholder"];
function Y0(e, t, n, i, a, r) {
  const o = je("IconArrowRight"), c = je("NcButton"), u = je("IconClose");
  return y(), w("div", {
    class: Ee(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = Oe((...h) => r.confirm && r.confirm(...h), ["prevent"])),
      onKeydown: t[2] || (t[2] = nt(Oe((...h) => r.cancel && r.cancel(...h), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Oe(() => {
      }, ["stop", "prevent"]))
    }, [
      Ie(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (h) => r.valueModel = h),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, q0), [
        [ft, r.valueModel]
      ]),
      ye(c, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Oe(r.confirm, ["stop", "prevent"])
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
        onClick: Oe(r.cancel, ["stop", "prevent"])
      }, {
        icon: Re(() => [
          ye(u, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const X0 = /* @__PURE__ */ Qe(W0, [["render", Y0], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Ul() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Zu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Rv = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), Z0 = {
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
}, Iv = {
  mixins: [Z0],
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
      from: Rv
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
}, J0 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: zl
  },
  mixins: [Iv],
  inject: {
    isInSemanticMenu: {
      from: Zu,
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
      mdiCheck: B_,
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
}, Q0 = ["role"], ew = ["aria-label", "disabled", "title", "type"], tw = { class: "action-button__longtext-wrapper" }, nw = {
  key: 0,
  class: "action-button__name"
}, iw = ["textContent"], aw = {
  key: 2,
  class: "action-button__text"
}, rw = ["textContent"], ow = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function sw(e, t, n, i, a, r) {
  const o = je("NcIconSvgWrapper");
  return y(), w("li", {
    class: Ee(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", qt({
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
          style: pn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", tw, [
        e.name ? (y(), w("strong", nw, v(e.name), 1)) : D("", !0),
        e.isLongText ? (y(), w("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: v(e.text)
        }, null, 8, iw)) : (y(), w("span", aw, v(e.text), 1)),
        n.description ? (y(), w("span", {
          key: 3,
          class: "action-button__description",
          textContent: v(n.description)
        }, null, 8, rw)) : D("", !0)
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
      }, null, 8, ["path"])) : r.isChecked === !1 ? (y(), w("span", ow)) : D("", !0),
      D("", !0)
    ], 16, ew)
  ], 10, Q0);
}
const lw = /* @__PURE__ */ Qe(J0, [["render", sw], ["__scopeId", "data-v-6c2daf4e"]]);
function cw(e, t = {}) {
  const n = h0();
  qe(e, () => {
    fi(t.disabled) || (fi(e) ? n.pause() : n.unpause());
  }), xo(() => {
    n.unpause();
  });
}
const uw = ["top", "right", "bottom", "left"], lh = ["start", "end"], ch = /* @__PURE__ */ uw.reduce((e, t) => e.concat(t, t + "-" + lh[0], t + "-" + lh[1]), []), _o = Math.min, pu = Math.max, dw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pv(e, t, n) {
  return pu(e, _o(t, n));
}
function Pa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bi(e) {
  return e.split("-")[0];
}
function Rn(e) {
  return e.split("-")[1];
}
function $v(e) {
  return e === "x" ? "y" : "x";
}
function Ju(e) {
  return e === "y" ? "height" : "width";
}
function di(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Qu(e) {
  return $v(di(e));
}
function Fv(e, t, n) {
  n === void 0 && (n = !1);
  const i = Rn(e), a = Qu(e), r = Ju(a);
  let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Ks(o)), [o, Ks(o)];
}
function fw(e) {
  const t = Ks(e);
  return [Vs(e), t, Vs(t)];
}
function Vs(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const uh = ["left", "right"], dh = ["right", "left"], hw = ["top", "bottom"], pw = ["bottom", "top"];
function vw(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? dh : uh : t ? uh : dh;
    case "left":
    case "right":
      return t ? hw : pw;
    default:
      return [];
  }
}
function gw(e, t, n, i) {
  const a = Rn(e);
  let r = vw(bi(e), n === "start", i);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(Vs)))), r;
}
function Ks(e) {
  const t = bi(e);
  return dw[t] + e.slice(t.length);
}
function mw(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Dv(e) {
  return typeof e != "number" ? mw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zr(e) {
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
function fh(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = di(t), o = Qu(t), c = Ju(o), u = bi(t), h = r === "y", f = i.x + i.width / 2 - a.width / 2, b = i.y + i.height / 2 - a.height / 2, C = i[c] / 2 - a[c] / 2;
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
  const N = Rn(t);
  return N && (k[o] += C * (N === "end" ? 1 : -1) * (n && h ? -1 : 1)), k;
}
async function bw(e, t) {
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
  } = Pa(t, e), N = Dv(k), O = c[C ? b === "floating" ? "reference" : "floating" : b], F = Zr(await r.getClippingRect({
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
  }, re = Zr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const yw = 50, _w = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = n, c = o.detectOverflow ? o : {
    ...o,
    detectOverflow: bw
  }, u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: f,
    y: b
  } = fh(h, i, u), C = i, k = 0;
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
    }, ue && k < yw && (k++, typeof ue == "object" && (ue.placement && (C = ue.placement), ue.rects && (h = ue.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ue.rects), {
      x: f,
      y: b
    } = fh(h, C, u)), A = -1);
  }
  return {
    x: f,
    y: b,
    placement: C,
    strategy: a,
    middlewareData: N
  };
}, ww = (e) => ({
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
    } = Pa(e, t) || {};
    if (h == null)
      return {};
    const b = Dv(f), C = {
      x: n,
      y: i
    }, k = Qu(a), N = Ju(k), A = await o.getDimensions(h), O = k === "y", F = O ? "top" : "left", M = O ? "bottom" : "right", z = O ? "clientHeight" : "clientWidth", T = r.reference[N] + r.reference[k] - C[k] - r.floating[N], re = C[k] - r.reference[k], ue = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(h));
    let X = ue ? ue[z] : 0;
    (!X || !await (o.isElement == null ? void 0 : o.isElement(ue))) && (X = c.floating[z] || r.floating[N]);
    const fe = T / 2 - re / 2, Y = X / 2 - A[N] / 2 - 1, se = _o(b[F], Y), me = _o(b[M], Y), Q = X - A[N] - me, ee = X / 2 - A[N] / 2 + fe, $ = Pv(se, ee, Q), U = !u.arrow && Rn(a) != null && ee !== $ && r.reference[N] / 2 - (ee < se ? se : me) - A[N] / 2 < 0, q = U ? ee < se ? ee - se : ee - Q : 0;
    return {
      [k]: C[k] + q,
      data: {
        [k]: $,
        centerOffset: ee - $ - q,
        ...U && {
          alignmentOffset: q
        }
      },
      reset: U
    };
  }
});
function Sw(e, t, n) {
  return (e ? [...n.filter((a) => Rn(a) === e), ...n.filter((a) => Rn(a) !== e)] : n.filter((a) => bi(a) === a)).filter((a) => e ? Rn(a) === e || (t ? Vs(a) !== a : !1) : !0);
}
const Cw = function(e) {
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
        allowedPlacements: C = ch,
        autoAlignment: k = !0,
        ...N
      } = Pa(e, t), A = b !== void 0 || C === ch ? Sw(b || null, k, C) : C, O = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, F = A[O];
      if (F == null)
        return {};
      if (c !== F)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await u.detectOverflow(t, N), z = Fv(F, r, await (u.isRTL == null ? void 0 : u.isRTL(h.floating))), T = [M[bi(F)], M[z[0]], M[z[1]]], re = [...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [], {
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
        const me = Rn(se.placement);
        return [se.placement, me && f ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((Q, ee) => Q + ee, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, me) => se[1] - me[1]), Y = ((a = X.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Rn(se[0]) ? 2 : 3
      ).every((me) => me <= 0))[0]) == null ? void 0 : a[0]) || X[0][0];
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
}, Tw = function(e) {
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
      } = Pa(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const F = bi(a), M = di(c), z = bi(c) === c, T = await (u.isRTL == null ? void 0 : u.isRTL(h.floating)), re = C || (z || !A ? [Ks(c)] : fw(c)), ue = N !== "none";
      !C && ue && re.push(...gw(c, A, N, T));
      const X = [c, ...re], fe = await u.detectOverflow(t, O), Y = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (f && Y.push(fe[F]), b) {
        const $ = Fv(a, o, T);
        Y.push(fe[$[0]], fe[$[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: Y
      }], !Y.every(($) => $ <= 0)) {
        var me, Q;
        const $ = (((me = r.flip) == null ? void 0 : me.index) || 0) + 1, U = X[$];
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
        let q = (Q = se.filter((le) => le.overflows[0] <= 0).sort((le, ie) => le.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : Q.placement;
        if (!q)
          switch (k) {
            case "bestFit": {
              var ee;
              const le = (ee = se.filter((ie) => {
                if (ue) {
                  const ge = di(ie.placement);
                  return ge === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ge === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((ge) => ge > 0).reduce((ge, de) => ge + de, 0)]).sort((ie, ge) => ie[1] - ge[1])[0]) == null ? void 0 : ee[0];
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
}, Ew = /* @__PURE__ */ new Set(["left", "top"]);
async function kw(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = bi(n), c = Rn(n), u = di(n) === "y", h = Ew.has(o) ? -1 : 1, f = r && u ? -1 : 1, b = Pa(t, e);
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
const Aw = function(e) {
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
      } = t, u = await kw(t, e);
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
}, xw = function(e) {
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
      } = Pa(e, t), f = {
        x: n,
        y: i
      }, b = await r.detectOverflow(t, h), C = di(a), k = $v(C);
      let N = f[k], A = f[C];
      const O = (M, z) => Pv(z + b[M === "y" ? "top" : "left"], z, z - b[M === "y" ? "bottom" : "right"]);
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
}, Ow = function(e) {
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
      } = Pa(e, t), u = await a.detectOverflow(t, c), h = bi(n), f = Rn(n), b = di(n) === "y", {
        width: C,
        height: k
      } = i.floating;
      let N, A;
      h === "top" || h === "bottom" ? (N = h, A = f === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = h, N = f === "end" ? "top" : "bottom");
      const O = k - u.top - u.bottom, F = C - u.left - u.right, M = _o(k - u[N], O), z = _o(C - u[A], F), T = t.middlewareData.shift, re = !T;
      let ue = M, X = z;
      T != null && T.enabled.x && (X = F), T != null && T.enabled.y && (ue = O), re && !f && (b ? X = C - 2 * pu(u.left, u.right) : ue = k - 2 * pu(u.top, u.bottom)), await o({
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
function wn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qn(e) {
  return wn(e).getComputedStyle(e);
}
const hh = Math.min, Jr = Math.max, Gs = Math.round;
function Mv(e) {
  const t = qn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = Gs(n) !== a || Gs(i) !== r;
  return o && (n = a, i = r), { width: n, height: i, fallback: o };
}
function Xi(e) {
  return Uv(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ds;
function zv() {
  if (ds) return ds;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ds = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), ds) : navigator.userAgent;
}
function Yn(e) {
  return e instanceof wn(e).HTMLElement;
}
function Ki(e) {
  return e instanceof wn(e).Element;
}
function Uv(e) {
  return e instanceof wn(e).Node;
}
function ph(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof wn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Bl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = qn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function Nw(e) {
  return ["table", "td", "th"].includes(Xi(e));
}
function vu(e) {
  const t = /firefox/i.test(zv()), n = qn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Bv() {
  return !/^((?!chrome|android).)*safari/i.test(zv());
}
function ed(e) {
  return ["html", "body", "#document"].includes(Xi(e));
}
function jv(e) {
  return Ki(e) ? e : e.contextElement;
}
const Hv = { x: 1, y: 1 };
function ir(e) {
  const t = jv(e);
  if (!Yn(t)) return Hv;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Mv(t);
  let o = (r ? Gs(n.width) : n.width) / i, c = (r ? Gs(n.height) : n.height) / a;
  return o && Number.isFinite(o) || (o = 1), c && Number.isFinite(c) || (c = 1), { x: o, y: c };
}
function wo(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), c = jv(e);
  let u = Hv;
  t && (i ? Ki(i) && (u = ir(i)) : u = ir(e));
  const h = c ? wn(c) : window, f = !Bv() && n;
  let b = (o.left + (f && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, C = (o.top + (f && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / u.y, k = o.width / u.x, N = o.height / u.y;
  if (c) {
    const A = wn(c), O = i && Ki(i) ? wn(i) : i;
    let F = A.frameElement;
    for (; F && i && O !== A; ) {
      const M = ir(F), z = F.getBoundingClientRect(), T = getComputedStyle(F);
      z.x += (F.clientLeft + parseFloat(T.paddingLeft)) * M.x, z.y += (F.clientTop + parseFloat(T.paddingTop)) * M.y, b *= M.x, C *= M.y, k *= M.x, N *= M.y, b += z.x, C += z.y, F = wn(F).frameElement;
    }
  }
  return { width: k, height: N, top: C, right: b + k, bottom: C + N, left: b, x: b, y: C };
}
function Gi(e) {
  return ((Uv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function jl(e) {
  return Ki(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Vv(e) {
  return wo(Gi(e)).left + jl(e).scrollLeft;
}
function So(e) {
  if (Xi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || ph(e) && e.host || Gi(e);
  return ph(t) ? t.host : t;
}
function Kv(e) {
  const t = So(e);
  return ed(t) ? t.ownerDocument.body : Yn(t) && Bl(t) ? t : Kv(t);
}
function Ws(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Kv(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = wn(i);
  return a ? t.concat(r, r.visualViewport || [], Bl(i) ? i : []) : t.concat(i, Ws(i));
}
function vh(e, t, n) {
  return t === "viewport" ? Zr((function(i, a) {
    const r = wn(i), o = Gi(i), c = r.visualViewport;
    let u = o.clientWidth, h = o.clientHeight, f = 0, b = 0;
    if (c) {
      u = c.width, h = c.height;
      const C = Bv();
      (C || !C && a === "fixed") && (f = c.offsetLeft, b = c.offsetTop);
    }
    return { width: u, height: h, x: f, y: b };
  })(e, n)) : Ki(t) ? Zr((function(i, a) {
    const r = wo(i, !0, a === "fixed"), o = r.top + i.clientTop, c = r.left + i.clientLeft, u = Yn(i) ? ir(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * u.x, height: i.clientHeight * u.y, x: c * u.x, y: o * u.y };
  })(t, n)) : Zr((function(i) {
    const a = Gi(i), r = jl(i), o = i.ownerDocument.body, c = Jr(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), u = Jr(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let h = -r.scrollLeft + Vv(i);
    const f = -r.scrollTop;
    return qn(o).direction === "rtl" && (h += Jr(a.clientWidth, o.clientWidth) - c), { width: c, height: u, x: h, y: f };
  })(Gi(e)));
}
function gh(e) {
  return Yn(e) && qn(e).position !== "fixed" ? e.offsetParent : null;
}
function mh(e) {
  const t = wn(e);
  let n = gh(e);
  for (; n && Nw(n) && qn(n).position === "static"; ) n = gh(n);
  return n && (Xi(n) === "html" || Xi(n) === "body" && qn(n).position === "static" && !vu(n)) ? t : n || (function(i) {
    let a = So(i);
    for (; Yn(a) && !ed(a); ) {
      if (vu(a)) return a;
      a = So(a);
    }
    return null;
  })(e) || t;
}
function Lw(e, t, n) {
  const i = Yn(t), a = Gi(t), r = wo(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Xi(t) !== "body" || Bl(a)) && (o = jl(t)), Yn(t)) {
    const u = wo(t, !0);
    c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
  } else a && (c.x = Vv(a));
  return { x: r.left + o.scrollLeft - c.x, y: r.top + o.scrollTop - c.y, width: r.width, height: r.height };
}
const Rw = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(h, f) {
    const b = f.get(h);
    if (b) return b;
    let C = Ws(h).filter(((O) => Ki(O) && Xi(O) !== "body")), k = null;
    const N = qn(h).position === "fixed";
    let A = N ? So(h) : h;
    for (; Ki(A) && !ed(A); ) {
      const O = qn(A), F = vu(A);
      (N ? F || k : F || O.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = O : C = C.filter(((M) => M !== A)), A = So(A);
    }
    return f.set(h, C), C;
  })(t, this._c) : [].concat(n), o = [...r, i], c = o[0], u = o.reduce(((h, f) => {
    const b = vh(t, f, a);
    return h.top = Jr(b.top, h.top), h.right = hh(b.right, h.right), h.bottom = hh(b.bottom, h.bottom), h.left = Jr(b.left, h.left), h;
  }), vh(t, c, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Yn(n), r = Gi(n);
  if (n === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Xi(n) !== "body" || Bl(r)) && (o = jl(n)), Yn(n))) {
    const h = wo(n);
    c = ir(n), u.x = h.x + n.clientLeft, u.y = h.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - o.scrollLeft * c.x + u.x, y: t.y * c.y - o.scrollTop * c.y + u.y };
}, isElement: Ki, getDimensions: function(e) {
  return Yn(e) ? Mv(e) : e.getBoundingClientRect();
}, getOffsetParent: mh, getDocumentElement: Gi, getScale: ir, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || mh, r = this.getDimensions;
  return { reference: Lw(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => qn(e).direction === "rtl" }, Iw = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: Rw, ...n }, r = { ...a.platform, _c: i };
  return _w(e, t, { ...a, platform: r });
}, Wi = {
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
function gu(e, t) {
  let n = Wi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Wi.themes[n.$extend] || {} : (n = null, i = Wi[t]) : n = null;
  while (n);
  return i;
}
function Pw(e) {
  const t = [e];
  let n = Wi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Wi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function bh(e) {
  const t = [e];
  let n = Wi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Wi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let Co = !1;
if (typeof window < "u") {
  Co = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Co = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Gv = !1;
typeof window < "u" && typeof navigator < "u" && (Gv = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const $w = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), yh = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, _h = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function wh(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Bc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Nn = [];
let ba = null;
const Sh = {};
function Ch(e) {
  let t = Sh[e];
  return t || (t = Sh[e] = []), t;
}
let mu = function() {
};
typeof window < "u" && (mu = window.Element);
function Ve(e) {
  return function(t) {
    return gu(t.theme, e);
  };
}
const jc = "__floating-vue__popper", Wv = () => /* @__PURE__ */ $t({
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
      validator: (e) => $w.includes(e)
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
      type: [String, Object, mu, Boolean],
      default: Ve("container")
    },
    boundary: {
      type: [String, mu],
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
      (this.distance || this.skidding) && e.middleware.push(Aw({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Cw({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(xw({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Tw({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(ww({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Ow({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await Iw(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ba && this.instantMove && ba.instantMove && ba !== this.parentPopper) {
        ba.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ba = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Bc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Ws(this.$_referenceNode),
        ...Ws(this.$_popperNode)
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
        for (let n = 0; n < Nn.length; n++)
          t = Nn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Nn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of bh(this.theme))
        Ch(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Bc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, wh(Nn, this), Nn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of bh(this.theme)) {
        const i = Ch(n);
        wh(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      ba === this && (ba = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Bc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, yh, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], yh, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, _h, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], _h, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, Co ? {
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
      if (Qr >= e.left && Qr <= e.right && eo >= e.top && eo <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Qr - Ui, i = eo - Bi, a = t.left + t.width / 2 - Ui + (t.top + t.height / 2) - Bi + t.width + t.height, r = Ui + n * a, o = Bi + i * a;
        return fs(Ui, Bi, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        fs(Ui, Bi, r, o, t.left, t.top, t.right, t.top) || // Top edge
        fs(Ui, Bi, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        fs(Ui, Bi, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Gv) {
    const e = Co ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Th(t), e), document.addEventListener("touchend", (t) => Eh(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Th(e), !0), window.addEventListener("click", (e) => Eh(e, !1), !0);
  window.addEventListener("resize", Mw);
}
function Th(e, t) {
  for (let n = 0; n < Nn.length; n++) {
    const i = Nn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Eh(e, t) {
  Fw(e, t);
}
function Fw(e, t) {
  const n = {};
  for (let i = Nn.length - 1; i >= 0; i--) {
    const a = Nn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && kh(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = a.parentPopper;
            for (; c; )
              n[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && kh(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function kh(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Dw(e, n) && !t;
}
function Dw(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function Mw() {
  for (let e = 0; e < Nn.length; e++)
    Nn[e].$_computePosition();
}
let Ui = 0, Bi = 0, Qr = 0, eo = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ui = Qr, Bi = eo, Qr = e.clientX, eo = e.clientY;
}, Co ? {
  passive: !0
} : void 0);
function fs(e, t, n, i, a, r, o, c) {
  const u = ((o - a) * (t - r) - (c - r) * (e - a)) / ((c - r) * (n - e) - (o - a) * (i - t)), h = ((n - e) * (t - r) - (i - t) * (e - a)) / ((c - r) * (n - e) - (o - a) * (i - t));
  return u >= 0 && u <= 1 && h >= 0 && h <= 1;
}
const zw = {
  extends: Wv()
}, td = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function Uw(e, t, n, i, a, r) {
  return y(), w("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Me(e.$slots, "default", ws(vo(e.slotData)))
  ], 2);
}
const Bw = /* @__PURE__ */ td(zw, [["render", Uw]]);
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
let ys;
function bu() {
  bu.init || (bu.init = !0, ys = jw() !== -1);
}
var Hl = {
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
    bu(), en(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ys && this.$el.appendChild(e), e.data = "about:blank", ys || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!ys && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Hw = /* @__PURE__ */ jm();
Um("data-v-b329ee4c");
const Vw = {
  class: "resize-observer",
  tabindex: "-1"
};
Bm();
const Kw = /* @__PURE__ */ Hw((e, t, n, i, a, r) => (y(), Be("div", Vw)));
Hl.render = Kw;
Hl.__scopeId = "data-v-b329ee4c";
Hl.__file = "src/components/ResizeObserver.vue";
const qv = (e = "theme") => ({
  computed: {
    themeClass() {
      return Pw(this[e]);
    }
  }
}), Gw = /* @__PURE__ */ $t({
  name: "VPopperContent",
  components: {
    ResizeObserver: Hl
  },
  mixins: [
    qv()
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
}), Ww = ["id", "aria-hidden", "tabindex", "data-popper-placement"], qw = {
  ref: "inner",
  class: "v-popper__inner"
}, Yw = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), Xw = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), Zw = [
  Yw,
  Xw
];
function Jw(e, t, n, i, a, r) {
  const o = je("ResizeObserver");
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
    style: pn(e.result ? {
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
      style: pn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", qw, [
        e.mounted ? (y(), w(ae, { key: 0 }, [
          l("div", null, [
            Me(e.$slots, "default")
          ]),
          e.handleResize ? (y(), Be(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : D("", !0)
        ], 64)) : D("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: pn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Zw, 4)
    ], 4)
  ], 46, Ww);
}
const Yv = /* @__PURE__ */ td(Gw, [["render", Jw]]), Xv = {
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
let yu = function() {
};
typeof window < "u" && (yu = window.Element);
const Qw = /* @__PURE__ */ $t({
  name: "VPopperWrapper",
  components: {
    Popper: Bw,
    PopperContent: Yv
  },
  mixins: [
    Xv,
    qv("finalTheme")
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
      type: [String, Object, yu, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, yu],
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
function eS(e, t, n, i, a, r) {
  const o = je("PopperContent"), c = je("Popper");
  return y(), Be(c, qt({ ref: "popper" }, e.$props, {
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
const nd = /* @__PURE__ */ td(Qw, [["render", eS]]), tS = {
  ...nd,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...nd
});
({
  ...nd
});
Wv();
const Ah = Wi, nS = tS, iS = /* @__PURE__ */ $t({
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
}), aS = "_ncPopover_qgtYg", rS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: aS
}, Zv = "nc-popover-9";
Ah.themes[Zv] = structuredClone(Ah.themes.dropdown);
const oS = {
  name: "NcPopover",
  components: {
    Dropdown: nS,
    NcPopoverTriggerProvider: iS
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
      theme: Zv
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
      return this.placement === "start" ? du ? "right" : "left" : this.placement === "end" ? du ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Xu(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: yo(),
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
        Na.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function sS(e, t, n, i, a, r) {
  const o = je("NcPopoverTriggerProvider"), c = je("Dropdown");
  return y(), Be(c, {
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
      Me(e.$slots, "default", ws(vo(u)))
    ]),
    default: Re(() => [
      ye(o, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Re((u) => [
          Me(e.$slots, "trigger", ws(vo(u)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const lS = {
  $style: rS
}, xh = /* @__PURE__ */ Qe(oS, [["render", sS], ["__cssModules", lS]]), cS = {
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
}, uS = ["aria-hidden", "aria-label"], dS = ["fill", "width", "height"], fS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, hS = { key: 0 };
function pS(e, t, n, i, a, r) {
  return y(), w("span", qt(e.$attrs, {
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
      l("path", fS, [
        n.title ? (y(), w("title", hS, v(n.title), 1)) : D("", !0)
      ])
    ], 8, dS))
  ], 16, uS);
}
const vS = /* @__PURE__ */ Qe(cS, [["render", pS]]);
Ji(q_);
function id(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === It)
        return !1;
      if (n.type === ae && !id(n.children))
        return !1;
      if (n.type === Oo && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const gS = ".focusable", mS = {
  name: "NcActions",
  components: {
    NcButton: Wn,
    NcPopover: xh
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
      [Zu]: H(() => this.actionsMenuSemanticType === "menu"),
      [Rv]: this.closeMenu
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
      randomId: Ul()
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
    cw(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(gS);
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
        qt(
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
      const N = id(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? an("span", { class: ["icon", this.defaultIcon] }) : an(vS, { size: 20 }), A = `${this.randomId}-trigger`;
      return an(
        xh,
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
}, qs = /* @__PURE__ */ Qe(mS, [["__scopeId", "data-v-7206c1f1"]]), bS = ["aria-label"], yS = ["width", "height"], _S = ["fill"], wS = ["fill"], SS = { key: 0 }, CS = /* @__PURE__ */ $t({
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
        }, null, 8, _S),
        l("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (y(), w("title", SS, v(e.name), 1)) : D("", !0)
        ], 8, wS)
      ], 8, yS))
    ], 8, bS));
  }
}), Jv = /* @__PURE__ */ Qe(CS, [["__scopeId", "data-v-cf399190"]]), _u = /* @__PURE__ */ $t({
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
}), TS = {
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
}, ES = ["aria-hidden", "aria-label"], kS = ["fill", "width", "height"], AS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, xS = { key: 0 };
function OS(e, t, n, i, a, r) {
  return y(), w("span", qt(e.$attrs, {
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
      l("path", AS, [
        n.title ? (y(), w("title", xS, v(n.title), 1)) : D("", !0)
      ])
    ], 8, kS))
  ], 16, ES);
}
const NS = /* @__PURE__ */ Qe(TS, [["render", OS]]), LS = {
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
}, RS = ["aria-hidden", "aria-label"], IS = ["fill", "width", "height"], PS = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, $S = { key: 0 };
function FS(e, t, n, i, a, r) {
  return y(), w("span", qt(e.$attrs, {
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
      l("path", PS, [
        n.title ? (y(), w("title", $S, v(n.title), 1)) : D("", !0)
      ])
    ], 8, IS))
  ], 16, RS);
}
const DS = /* @__PURE__ */ Qe(LS, [["render", FS]]);
Ji(J_);
const MS = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Wn,
    ChevronDown: A0,
    ChevronUp: P0
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
    return { isLegacy34: Qi };
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
function zS(e, t, n, i, a, r) {
  const o = je("ChevronUp"), c = je("ChevronDown"), u = je("NcButton");
  return y(), Be(u, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Re(() => [
      n.open ? (y(), Be(o, {
        key: 0,
        size: 20
      })) : (y(), Be(c, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const US = /* @__PURE__ */ Qe(MS, [["render", zS], ["__scopeId", "data-v-cfbd3794"]]);
Ji(Q_, n1);
const BS = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: qs,
    NcActionButton: lw,
    NcAppNavigationIconCollapsible: US,
    NcInputConfirmCancel: X0,
    NcLoadingIcon: Jv,
    NcVNodes: _u,
    Pencil: NS,
    Undo: DS
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: kv, default: null }
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
      default: () => Ul(),
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
      isMobile: Lo(),
      isLegacy34: Qi
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
}, jS = ["id"], HS = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], VS = {
  key: 0,
  class: "editingContainer"
}, KS = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, GS = { class: "app-navigation-entry__deleted-description" }, WS = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, qS = {
  key: 0,
  class: "app-navigation-entry__children"
};
function YS(e, t, n, i, a, r) {
  const o = je("NcLoadingIcon"), c = je("NcInputConfirmCancel"), u = je("Pencil"), h = je("NcActionButton"), f = je("Undo"), b = je("NcActions"), C = je("NcAppNavigationIconCollapsible");
  return y(), w("li", {
    id: n.id,
    class: Ee([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (y(), Be(Uu(r.isRouterLink ? "router-link" : "NcVNodes"), ws(vo({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
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
            onKeydown: t[3] || (t[3] = nt(Oe((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: Ee(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (y(), Be(o, { key: 0 })) : Me(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            l("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, v(n.name), 3),
            a.editingActive ? (y(), w("div", VS, [
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
          ], 40, HS)),
          n.undo ? (y(), w("div", KS, [
            l("div", GS, v(n.name), 1)
          ])) : D("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (y(), w("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (y(), w("div", WS, [
              Me(e.$slots, "counter", {}, void 0, !0)
            ])) : D("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (y(), Be(b, {
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
                n.editable && !a.editingActive ? (y(), Be(h, {
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
                n.undo ? (y(), Be(h, {
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
          n.allowCollapse && e.$slots.default ? (y(), Be(C, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Oe(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : D("", !0),
          Me(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (y(), w("ul", qS, [
      Me(e.$slots, "default", {}, void 0, !0)
    ])) : D("", !0)
  ], 10, jS);
}
const Oh = /* @__PURE__ */ Qe(BS, [["render", YS], ["__scopeId", "data-v-01bef41b"]]), Hc = /* @__PURE__ */ new WeakMap(), XS = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = eh(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = eh(e, a, Object.assign({ capture: n }, r));
    }
    Hc.set(e, i);
  },
  unmounted(e) {
    const t = Hc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Hc.delete(e);
  }
}, ZS = {
  mounted(e) {
    e.focus();
  }
}, JS = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", QS = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", wu = "numeric", Su = "ascii", Cu = "alpha", to = "asciinumeric", Vr = "alphanumeric", Tu = "domain", Qv = "emoji", eC = "scheme", tC = "slashscheme", Vc = "whitespace";
function nC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function ka(e, t, n) {
  t[wu] && (t[to] = !0, t[Vr] = !0), t[Su] && (t[to] = !0, t[Cu] = !0), t[to] && (t[Vr] = !0), t[Cu] && (t[Vr] = !0), t[Vr] && (t[Tu] = !0), t[Qv] && (t[Tu] = !0);
  for (const i in t) {
    const a = nC(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function iC(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function fn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
fn.groups = {};
fn.prototype = {
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
    i = i || fn.groups;
    let a;
    return t && t.j ? a = t : (a = new fn(t), n && i && ka(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || fn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, c = a.go(e);
    if (c ? (o = new fn(), Object.assign(o.j, c.j), o.jr.push.apply(o.jr, c.jr), o.jd = c.jd, o.t = c.t) : o = new fn(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const u = Object.assign(iC(o.t, i), n);
          ka(r, u, i);
        } else n && ka(r, n, i);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, n, i, a) => e.ta(t, n, i, a), gt = (e, t, n, i, a) => e.tr(t, n, i, a), Nh = (e, t, n, i, a) => e.ts(t, n, i, a), ne = (e, t, n, i, a) => e.tt(t, n, i, a), ri = "WORD", Eu = "UWORD", eg = "ASCIINUMERICAL", tg = "ALPHANUMERICAL", To = "LOCALHOST", ku = "TLD", Au = "UTLD", _s = "SCHEME", Ya = "SLASH_SCHEME", ad = "NUM", xu = "WS", rd = "NL", no = "OPENBRACE", io = "CLOSEBRACE", Ys = "OPENBRACKET", Xs = "CLOSEBRACKET", Zs = "OPENPAREN", Js = "CLOSEPAREN", Qs = "OPENANGLEBRACKET", el = "CLOSEANGLEBRACKET", tl = "FULLWIDTHLEFTPAREN", nl = "FULLWIDTHRIGHTPAREN", il = "LEFTCORNERBRACKET", al = "RIGHTCORNERBRACKET", rl = "LEFTWHITECORNERBRACKET", ol = "RIGHTWHITECORNERBRACKET", sl = "FULLWIDTHLESSTHAN", ll = "FULLWIDTHGREATERTHAN", cl = "AMPERSAND", ul = "APOSTROPHE", dl = "ASTERISK", Hi = "AT", fl = "BACKSLASH", hl = "BACKTICK", pl = "CARET", Aa = "COLON", od = "COMMA", vl = "DOLLAR", Hn = "DOT", gl = "EQUALS", sd = "EXCLAMATION", bn = "HYPHEN", ao = "PERCENT", ml = "PIPE", bl = "PLUS", yl = "POUND", ro = "QUERY", ld = "QUOTE", ng = "FULLWIDTHMIDDLEDOT", cd = "SEMI", Vn = "SLASH", oo = "TILDE", _l = "UNDERSCORE", ig = "EMOJI", wl = "SYM";
var ag = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: tg,
  AMPERSAND: cl,
  APOSTROPHE: ul,
  ASCIINUMERICAL: eg,
  ASTERISK: dl,
  AT: Hi,
  BACKSLASH: fl,
  BACKTICK: hl,
  CARET: pl,
  CLOSEANGLEBRACKET: el,
  CLOSEBRACE: io,
  CLOSEBRACKET: Xs,
  CLOSEPAREN: Js,
  COLON: Aa,
  COMMA: od,
  DOLLAR: vl,
  DOT: Hn,
  EMOJI: ig,
  EQUALS: gl,
  EXCLAMATION: sd,
  FULLWIDTHGREATERTHAN: ll,
  FULLWIDTHLEFTPAREN: tl,
  FULLWIDTHLESSTHAN: sl,
  FULLWIDTHMIDDLEDOT: ng,
  FULLWIDTHRIGHTPAREN: nl,
  HYPHEN: bn,
  LEFTCORNERBRACKET: il,
  LEFTWHITECORNERBRACKET: rl,
  LOCALHOST: To,
  NL: rd,
  NUM: ad,
  OPENANGLEBRACKET: Qs,
  OPENBRACE: no,
  OPENBRACKET: Ys,
  OPENPAREN: Zs,
  PERCENT: ao,
  PIPE: ml,
  PLUS: bl,
  POUND: yl,
  QUERY: ro,
  QUOTE: ld,
  RIGHTCORNERBRACKET: al,
  RIGHTWHITECORNERBRACKET: ol,
  SCHEME: _s,
  SEMI: cd,
  SLASH: Vn,
  SLASH_SCHEME: Ya,
  SYM: wl,
  TILDE: oo,
  TLD: ku,
  UNDERSCORE: _l,
  UTLD: Au,
  UWORD: Eu,
  WORD: ri,
  WS: xu
});
const ii = /[a-z]/, Mr = new RegExp("\\p{L}", "u"), Kc = new RegExp("\\p{Emoji}", "u"), ai = /\d/, Gc = /\s/, Lh = "\r", Wc = `
`, aC = "️", rC = "‍", qc = "￼";
let hs = null, ps = null;
function oC(e = []) {
  const t = {};
  fn.groups = t;
  const n = new fn();
  hs == null && (hs = Rh(JS)), ps == null && (ps = Rh(QS)), ne(n, "'", ul), ne(n, "{", no), ne(n, "}", io), ne(n, "[", Ys), ne(n, "]", Xs), ne(n, "(", Zs), ne(n, ")", Js), ne(n, "<", Qs), ne(n, ">", el), ne(n, "（", tl), ne(n, "）", nl), ne(n, "「", il), ne(n, "」", al), ne(n, "『", rl), ne(n, "』", ol), ne(n, "＜", sl), ne(n, "＞", ll), ne(n, "&", cl), ne(n, "*", dl), ne(n, "@", Hi), ne(n, "`", hl), ne(n, "^", pl), ne(n, ":", Aa), ne(n, ",", od), ne(n, "$", vl), ne(n, ".", Hn), ne(n, "=", gl), ne(n, "!", sd), ne(n, "-", bn), ne(n, "%", ao), ne(n, "|", ml), ne(n, "+", bl), ne(n, "#", yl), ne(n, "?", ro), ne(n, '"', ld), ne(n, "/", Vn), ne(n, ";", cd), ne(n, "~", oo), ne(n, "_", _l), ne(n, "\\", fl), ne(n, "・", ng);
  const i = gt(n, ai, ad, {
    [wu]: !0
  });
  gt(i, ai, i);
  const a = gt(i, ii, eg, {
    [to]: !0
  }), r = gt(i, Mr, tg, {
    [Vr]: !0
  }), o = gt(n, ii, ri, {
    [Su]: !0
  });
  gt(o, ai, a), gt(o, ii, o), gt(a, ai, a), gt(a, ii, a);
  const c = gt(n, Mr, Eu, {
    [Cu]: !0
  });
  gt(c, ii), gt(c, ai, r), gt(c, Mr, c), gt(r, ai, r), gt(r, ii), gt(r, Mr, r);
  const u = ne(n, Wc, rd, {
    [Vc]: !0
  }), h = ne(n, Lh, xu, {
    [Vc]: !0
  }), f = gt(n, Gc, xu, {
    [Vc]: !0
  });
  ne(n, qc, f), ne(h, Wc, u), ne(h, qc, f), gt(h, Gc, f), ne(f, Lh), ne(f, Wc), gt(f, Gc, f), ne(f, qc, f);
  const b = gt(n, Kc, ig, {
    [Qv]: !0
  });
  ne(b, "#"), gt(b, Kc, b), ne(b, aC, b);
  const C = ne(b, rC);
  ne(C, "#"), gt(C, Kc, b);
  const k = [[ii, o], [ai, a]], N = [[ii, null], [Mr, c], [ai, r]];
  for (let A = 0; A < hs.length; A++)
    Mi(n, hs[A], ku, ri, k);
  for (let A = 0; A < ps.length; A++)
    Mi(n, ps[A], Au, Eu, N);
  ka(ku, {
    tld: !0,
    ascii: !0
  }, t), ka(Au, {
    utld: !0,
    alpha: !0
  }, t), Mi(n, "file", _s, ri, k), Mi(n, "mailto", _s, ri, k), Mi(n, "http", Ya, ri, k), Mi(n, "https", Ya, ri, k), Mi(n, "ftp", Ya, ri, k), Mi(n, "ftps", Ya, ri, k), ka(_s, {
    scheme: !0,
    ascii: !0
  }, t), ka(Ya, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], M = e[A][1] ? {
      [eC]: !0
    } : {
      [tC]: !0
    };
    O.indexOf("-") >= 0 ? M[Tu] = !0 : ii.test(O) ? ai.test(O) ? M[to] = !0 : M[Su] = !0 : M[wu] = !0, Nh(n, O, O, M);
  }
  return Nh(n, "localhost", To, {
    ascii: !0
  }), n.jd = new fn(wl), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, ag)
  };
}
function rg(e, t) {
  const n = sC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), i = n.length, a = [];
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
function sC(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, o = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(o), i += o.length;
  }
  return t;
}
function Mi(e, t, n, i, a) {
  let r;
  const o = t.length;
  for (let c = 0; c < o - 1; c++) {
    const u = t[c];
    e.j[u] ? r = e.j[u] : (r = new fn(i), r.jr = a.slice(), e.j[u] = r), e = r;
  }
  return r = new fn(n), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function Rh(e) {
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
const Eo = {
  defaultProtocol: "http",
  events: null,
  format: Ih,
  formatHref: Ih,
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
function ud(e, t = null) {
  let n = Object.assign({}, Eo);
  e && (n = Object.assign(n, e instanceof ud ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
ud.prototype = {
  o: Eo,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : Eo[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Ih(e) {
  return e;
}
function og(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
og.prototype = {
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
  toObject(e = Eo.defaultProtocol) {
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
function Vl(e, t) {
  class n extends og {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const lC = Vl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Ph = Vl("text"), cC = Vl("nl"), vs = Vl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = Eo.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== To && e[1].t === Aa;
  }
}), mn = (e) => new fn(e);
function uC({
  groups: e
}) {
  const t = e.domain.concat([cl, dl, Hi, fl, hl, pl, vl, gl, bn, ad, ao, ml, bl, yl, Vn, wl, oo, _l]), n = [ul, Aa, od, Hn, sd, ao, ro, ld, cd, Qs, el, no, io, Xs, Ys, Zs, Js, tl, nl, il, al, rl, ol, sl, ll], i = [cl, ul, dl, fl, hl, pl, vl, gl, bn, no, io, ao, ml, bl, yl, ro, Vn, wl, oo, _l], a = mn(), r = ne(a, oo);
  Ue(r, i, r), Ue(r, e.domain, r);
  const o = mn(), c = mn(), u = mn();
  Ue(a, e.domain, o), Ue(a, e.scheme, c), Ue(a, e.slashscheme, u), Ue(o, i, r), Ue(o, e.domain, o);
  const h = ne(o, Hi);
  ne(r, Hi, h), ne(c, Hi, h), ne(u, Hi, h);
  const f = ne(r, Hn);
  Ue(f, i, r), Ue(f, e.domain, r);
  const b = mn();
  Ue(h, e.domain, b), Ue(b, e.domain, b);
  const C = ne(b, Hn);
  Ue(C, e.domain, b);
  const k = mn(lC);
  Ue(C, e.tld, k), Ue(C, e.utld, k), ne(h, To, k);
  const N = ne(b, bn);
  ne(N, bn, N), Ue(N, e.domain, b), Ue(k, e.domain, b), ne(k, Hn, C), ne(k, bn, N);
  const A = ne(o, bn), O = ne(o, Hn);
  ne(A, bn, A), Ue(A, e.domain, o), Ue(O, i, r), Ue(O, e.domain, o);
  const F = mn(vs);
  Ue(O, e.tld, F), Ue(O, e.utld, F), Ue(F, e.domain, o), Ue(F, i, r), ne(F, Hn, O), ne(F, bn, A), ne(F, Hi, h);
  const M = ne(F, Aa), z = mn(vs);
  Ue(M, e.numeric, z);
  const T = mn(vs), re = mn();
  Ue(T, t, T), Ue(T, n, re), Ue(re, t, T), Ue(re, n, re), ne(F, Vn, T), ne(z, Vn, T);
  const ue = ne(c, Aa), X = ne(u, Aa), fe = ne(X, Vn), Y = ne(fe, Vn);
  Ue(c, e.domain, o), ne(c, Hn, O), ne(c, bn, A), Ue(u, e.domain, o), ne(u, Hn, O), ne(u, bn, A), Ue(ue, e.domain, T), ne(ue, Vn, T), ne(ue, ro, T), Ue(Y, e.domain, T), Ue(Y, t, T), ne(Y, Vn, T);
  const se = [
    [no, io],
    // {}
    [Ys, Xs],
    // []
    [Zs, Js],
    // ()
    [Qs, el],
    // <>
    [tl, nl],
    // （）
    [il, al],
    // 「」
    [rl, ol],
    // 『』
    [sl, ll]
    // ＜＞
  ];
  for (let me = 0; me < se.length; me++) {
    const [Q, ee] = se[me], $ = ne(T, Q);
    ne(re, Q, $);
    const U = mn(vs);
    Ue($, t, U);
    const q = mn();
    Ue($, n, q), ne($, ee, T), Ue(U, t, U), Ue(U, n, q), Ue(q, t, U), Ue(q, n, q), ne(U, ee, T), ne(q, ee, T);
  }
  return ne(a, To, F), ne(a, rd, cC), {
    start: a,
    tokens: ag
  };
}
function dC(e, t, n) {
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
      o.length > 0 && (r.push(Yc(Ph, t, o)), o = []), a -= C, f -= C;
      const k = b.t, N = n.slice(a - f, a);
      r.push(Yc(k, t, N));
    }
  }
  return o.length > 0 && r.push(Yc(Ph, t, o)), r;
}
function Yc(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const jt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function fC() {
  jt.scanner = oC(jt.customSchemes);
  for (let e = 0; e < jt.tokenQueue.length; e++)
    jt.tokenQueue[e][1]({
      scanner: jt.scanner
    });
  jt.parser = uC(jt.scanner.tokens);
  for (let e = 0; e < jt.pluginQueue.length; e++)
    jt.pluginQueue[e][1]({
      scanner: jt.scanner,
      parser: jt.parser
    });
  return jt.initialized = !0, jt;
}
function sg(e) {
  return jt.initialized || fC(), dC(jt.parser.start, e, rg(jt.scanner.start, e));
}
sg.scan = rg;
function hC(e) {
  const t = new ud({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, gC), n = sg(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Fs(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function pC(e) {
  return e.replace(/"/g, "&quot;");
}
function vC(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${pC(i)}"`);
  }
  return t.join(" ");
}
function gC({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${vC(t)}>${Fs(n)}</${e}>`;
}
const mC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = hC(t.text));
}, bC = ["title"], yC = /* @__PURE__ */ $t({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Vt("NcAppSidebar:header:ref");
    return (n, i) => Ie((y(), w("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Te(v(e.name), 1)
    ], 8, bC)), [
      [g(mC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), _C = ["aria-labelledby"], wC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, SC = ["id"], CC = {
  key: 2,
  class: "empty-content__description"
}, TC = {
  key: 3,
  class: "empty-content__action"
}, EC = /* @__PURE__ */ $t({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Ul();
    return (n, i) => (y(), w("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (y(), w("div", wC, [
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
      ], 8, SC)) : D("", !0),
      e.description !== "" || n.$slots.description ? (y(), w("p", CC, [
        Me(n.$slots, "description", {}, () => [
          Te(v(e.description), 1)
        ], !0)
      ])) : D("", !0),
      n.$slots.action ? (y(), w("div", TC, [
        Me(n.$slots, "action", {}, void 0, !0)
      ])) : D("", !0)
    ], 8, _C));
  }
}), kC = /* @__PURE__ */ Qe(EC, [["__scopeId", "data-v-8609a4c1"]]), AC = {
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
}, xC = ["aria-hidden", "aria-label"], OC = ["fill", "width", "height"], NC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, LC = { key: 0 };
function RC(e, t, n, i, a, r) {
  return y(), w("span", qt(e.$attrs, {
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
      l("path", NC, [
        n.title ? (y(), w("title", LC, v(n.title), 1)) : D("", !0)
      ])
    ], 8, OC))
  ], 16, xC);
}
const IC = /* @__PURE__ */ Qe(AC, [["render", RC]]), PC = {
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
}, $C = ["aria-hidden", "aria-label"], FC = ["fill", "width", "height"], DC = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, MC = { key: 0 };
function zC(e, t, n, i, a, r) {
  return y(), w("span", qt(e.$attrs, {
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
      l("path", DC, [
        n.title ? (y(), w("title", MC, v(n.title), 1)) : D("", !0)
      ])
    ], 8, FC))
  ], 16, $C);
}
const UC = /* @__PURE__ */ Qe(PC, [["render", zC]]), BC = {
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
}, jC = ["aria-hidden", "aria-label"], HC = ["fill", "width", "height"], VC = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, KC = { key: 0 };
function GC(e, t, n, i, a, r) {
  return y(), w("span", qt(e.$attrs, {
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
      l("path", VC, [
        n.title ? (y(), w("title", KC, v(n.title), 1)) : D("", !0)
      ])
    ], 8, HC))
  ], 16, jC);
}
const WC = /* @__PURE__ */ Qe(BC, [["render", GC]]), qC = ["aria-selected", "tabindex"], YC = /* @__PURE__ */ $t({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ hb({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Op(e, "selected"), n = /* @__PURE__ */ we(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (y(), w("button", {
      class: Ee(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Qi),
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
          ye(_u, {
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
          ye(_u, {
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
    ], 10, qC));
  }
}), XC = "_sidebarTabsButton_q3kBA", ZC = "_sidebarTabsButton_legacy_KQ4d1", JC = "_sidebarTabsButton_selected_Pjayf", QC = "_sidebarTabsButton_animatedHighlight_uvp-0", eT = "_sidebarTabsButton__name_rlQsL", tT = "_sidebarTabsButton__icon_QzZg4", nT = "_sidebarTabsButton__iconLayer_ZkZan", iT = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", aT = "_sidebarTabsButton__icon_pop_IA0By", rT = "_sidebarTabsButton__legacyIcon_QhcNW", oT = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: XC,
  sidebarTabsButton_legacy: ZC,
  sidebarTabsButton_selected: JC,
  sidebarTabsButton_animatedHighlight: QC,
  sidebarTabsButton__name: eT,
  sidebarTabsButton__icon: tT,
  sidebarTabsButton__iconLayer: nT,
  sidebarTabsButton__iconLayer_hidden: iT,
  sidebarTabsButton__icon_pop: aT,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: rT
}, sT = {
  $style: oT
}, lT = /* @__PURE__ */ Qe(YC, [["__cssModules", sT]]), cT = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: lT
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
      isLegacy34: Qi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [v_()]) : t.order - n.order), this.updateActive();
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
}, uT = { class: "app-sidebar-tabs" };
function dT(e, t, n, i, a, r) {
  const o = je("NcAppSidebarTabsButton");
  return y(), w("div", uT, [
    r.hasMultipleTabs || r.showForSingleTab ? (y(), w("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ee(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = nt(Oe((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = nt(Oe((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = nt(Oe((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = nt(Oe((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = nt(Oe((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = nt(Oe((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = nt(Oe((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
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
        style: pn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : D("", !0),
      (y(!0), w(ae, null, Ce(a.tabs, (c) => (y(), Be(o, {
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
const fT = /* @__PURE__ */ Qe(cT, [["render", dT], ["__scopeId", "data-v-74190d2a"]]);
Ji(X_);
const hT = {
  name: "NcAppSidebar",
  components: {
    NcActions: qs,
    NcAppSidebarHeader: yC,
    NcAppSidebarTabs: fT,
    NcButton: Wn,
    NcLoadingIcon: Jv,
    NcEmptyContent: kC,
    IconArrowRight: Nv,
    IconClose: Lv,
    IconDockRight: IC,
    IconStar: UC,
    IconStarOutline: WC
  },
  directives: {
    Focus: ZS,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: XS
  },
  inject: {
    ncContentSelector: {
      from: Ov,
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
    return yn("NcAppSidebar:header:ref", e), {
      uid: Ul(),
      isMobile: V_(),
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
    isSlotPopulated: id,
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
      this.focusTrap || (this.focusTrap = Xu([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: yo(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && Na.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, pT = ["aria-labelledby"], vT = { class: "app-sidebar-header__info" }, gT = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, mT = { class: "app-sidebar-header__name-container" }, bT = { class: "app-sidebar-header__mainname-container" }, yT = ["placeholder", "value"], _T = ["title"], wT = {
  key: 2,
  class: "app-sidebar-header__description"
};
function ST(e, t, n, i, a, r) {
  const o = je("IconDockRight"), c = je("NcButton"), u = je("NcLoadingIcon"), h = je("IconStar"), f = je("IconStarOutline"), b = je("NcAppSidebarHeader"), C = je("IconArrowRight"), k = je("NcActions"), N = je("IconClose"), A = je("NcAppSidebarTabs"), O = je("NcEmptyContent"), F = Jd("focus"), M = Jd("click-outside");
  return y(), Be(ey, {
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
        r.ncContentSelector && !n.open && !n.noToggle ? (y(), Be(hp, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ye(c, qt({
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
          n.empty ? (y(), Be(b, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Me(e.$slots, "info", { key: 0 }, () => [
            l("div", vT, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (y(), w("div", {
                key: 0,
                class: Ee(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: pn({
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
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (y(), w("div", gT, [
                  Me(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (y(), Be(c, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Oe(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Re(() => [
                        n.starLoading ? (y(), Be(u, { key: 0 })) : a.isStarred ? (y(), Be(h, {
                          key: 1,
                          size: 20
                        })) : (y(), Be(f, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : D("", !0)
                  ], !0)
                ])) : D("", !0),
                l("div", mT, [
                  l("div", bT, [
                    Ie(ye(b, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Oe(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [er, !n.nameEditable]
                    ]),
                    n.nameEditable ? Ie((y(), w("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Oe((...z) => r.onSubmitName && r.onSubmitName(...z), ["prevent"]))
                    }, [
                      Ie(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = nt(Oe((...z) => r.onDismissEditing && r.onDismissEditing(...z), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...z) => r.onNameInput && r.onNameInput(...z))
                      }, null, 40, yT), [
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
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (y(), Be(k, {
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
                  ], 8, _T)) : D("", !0)
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
            onClick: Oe(r.closeSidebar, ["prevent"])
          }, {
            icon: Re(() => [
              ye(N, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (y(), w("div", wT, [
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
          [er, !n.loading]
        ]),
        n.loading ? (y(), Be(O, { key: 1 }, {
          icon: Re(() => [
            ye(u, { size: 64 })
          ]),
          _: 1
        })) : D("", !0)
      ], 40, pT), [
        [er, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const CT = /* @__PURE__ */ Qe(hT, [["render", ST], ["__scopeId", "data-v-c2c6820b"]]), TT = {
  name: "NcActionLink",
  mixins: [Iv],
  inject: {
    isInSemanticMenu: {
      from: Zu,
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
}, ET = ["role"], kT = ["download", "href", "aria-label", "target", "title", "role"], AT = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, xT = { class: "action-link__name" }, OT = ["textContent"], NT = ["textContent"], LT = {
  key: 2,
  class: "action-link__text"
};
function RT(e, t, n, i, a, r) {
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
          style: pn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (y(), w("span", AT, [
        l("strong", xT, v(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: v(e.text)
        }, null, 8, OT)
      ])) : e.isLongText ? (y(), w("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: v(e.text)
      }, null, 8, NT)) : (y(), w("span", LT, v(e.text), 1)),
      D("", !0)
    ], 8, kT)
  ], 8, ET);
}
const Ga = /* @__PURE__ */ Qe(TT, [["render", RT], ["__scopeId", "data-v-32f01b7a"]]);
Ji(t1);
const IT = `<!--
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
`, PT = `<!--
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
`, $T = { class: "vue-skip-actions__container" }, FT = { class: "vue-skip-actions__headline" }, DT = { class: "vue-skip-actions__buttons" }, MT = /* @__PURE__ */ $t({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    yn(xv, c), yn(Ov, "#content-vue"), yn("appName", H(() => t.appName));
    const n = Lo(), i = /* @__PURE__ */ we(!1), a = /* @__PURE__ */ we(), r = H(() => a.value === "navigation" ? PT : IT);
    wp(() => {
      const u = document.getElementById("skip-actions");
      u && (u.innerHTML = "", u.classList.add("vue-skip-actions"));
    });
    function o() {
      pi("toggle-navigation", { open: !0 }), en(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(u) {
      i.value = u, a.value || (a.value = "navigation");
    }
    return (u, h) => (y(), w("div", {
      id: "content-vue",
      class: Ee(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Qi) }]])
    }, [
      (y(), Be(hp, { to: "#skip-actions" }, [
        l("div", $T, [
          l("div", FT, v(g(Ct)("Keyboard navigation help")), 1),
          l("div", DT, [
            Ie(ye(Wn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Oe(o, ["prevent"]),
              onFocusin: h[0] || (h[0] = (f) => a.value = "navigation"),
              onMouseover: h[1] || (h[1] = (f) => a.value = "navigation")
            }, {
              default: Re(() => [
                Te(v(g(Ct)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [er, i.value]
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
          Ie(ye(zl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [er, !g(n)]
          ])
        ])
      ])),
      Me(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), zT = /* @__PURE__ */ Qe(MT, [["__scopeId", "data-v-d13dcb98"]]), UT = { class: "library-shelf-tree-node" }, BT = ["aria-expanded", "aria-label"], jT = ["href"], HT = { class: "library-shelf-summary-title" }, VT = { dir: "auto" }, KT = { class: "library-muted" }, GT = { dir: "auto" }, WT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, qT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, YT = {
  key: 3,
  class: "library-shelf-tree"
}, XT = ["disabled"], ZT = {
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
      const k = je("ShelfTreeNode", !0);
      return y(), w("li", UT, [
        e.node.hasChildren ? (y(), w("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(m)("library", "Collapse {folder}", { folder: e.node.label }) : g(m)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: h
        }, v(n.value ? "−" : "+"), 9, BT)) : D("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", HT, [
            l("strong", null, [
              l("bdi", VT, v(e.node.label), 1)
            ]),
            l("span", null, v(g(un)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", KT, [
            l("bdi", GT, v(e.node.path), 1)
          ])
        ], 8, jT),
        a.value ? (y(), w("small", WT, v(g(m)("library", "Loading folders…")), 1)) : r.value ? (y(), w("small", qT, v(g(m)("library", "Could not load folders.")), 1)) : D("", !0),
        n.value && o.value.length ? (y(), w("ul", YT, [
          (y(!0), w(ae, null, Ce(o.value, (N) => (y(), Be(k, {
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
        }, v(g(m)("library", "Load more folders")), 9, XT)) : D("", !0)
      ]);
    };
  }
}, JT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, QT = { id: "library-sidebar-filters-heading" }, eE = ["aria-label"], tE = ["value"], nE = ["name", "value"], iE = ["value"], aE = ["value"], rE = ["title"], oE = ["placeholder"], sE = { value: "" }, lE = ["value"], cE = { class: "library-publisher-filter" }, uE = { for: "library-publisher-search" }, dE = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], fE = ["value"], hE = {
  key: 0,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, pE = ["id", "aria-selected"], vE = ["onClick"], gE = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, mE = { class: "library-publication-filter" }, bE = { for: "library-publication-search" }, yE = ["placeholder", "aria-expanded"], _E = ["value"], wE = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, SE = ["onClick"], CE = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, TE = { class: "library-year-filter" }, EE = { for: "library-year-search" }, kE = ["placeholder", "aria-expanded"], AE = ["value"], xE = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, OE = ["onClick"], NE = {
  type: "submit",
  class: "button secondary library-year-apply"
}, LE = { class: "library-creator-filter" }, RE = { for: "library-creator-search" }, IE = ["placeholder", "title", "aria-expanded"], PE = ["value"], $E = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, FE = ["onClick"], DE = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, ME = { class: "library-tag-filter" }, zE = { for: "library-tag-search" }, UE = ["placeholder", "aria-expanded"], BE = ["value"], jE = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, HE = ["onClick"], VE = {
  type: "submit",
  class: "button secondary library-tag-apply"
}, KE = { value: "" }, GE = ["value"], WE = { value: "" }, qE = ["value"], YE = { class: "library-folder-filter" }, XE = { for: "library-folder-search" }, ZE = ["placeholder", "title", "aria-expanded"], JE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, QE = ["onClick"], ek = {
  type: "submit",
  class: "button secondary library-folder-apply"
}, tk = { value: "" }, nk = ["value"], ik = { value: "" }, ak = ["value"], rk = { class: "library-subject-filter" }, ok = { for: "library-subject-search" }, sk = ["placeholder", "title", "aria-expanded"], lk = ["value"], ck = {
  key: 0,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, uk = ["onClick"], dk = { class: "library-classification-filter" }, fk = { for: "library-classification-search" }, hk = ["placeholder", "title", "aria-expanded"], pk = ["value"], vk = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, gk = ["onClick"], mk = {
  type: "submit",
  class: "button secondary library-classification-apply"
}, bk = { value: "" }, yk = { value: "1" }, _k = {
  type: "submit",
  class: "button primary"
}, wk = ["href"], Sk = ["href"], Ck = ["lang", "dir"], Tk = ["aria-label"], Ek = ["href", "aria-label", "title", "onClick"], kk = ["title"], Ak = ["href"], xk = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, Ok = { class: "library-review-header" }, Nk = { class: "library-muted library-catalogue-eyebrow" }, Lk = { id: "library-review-heading" }, Rk = ["aria-label"], Ik = ["href", "aria-current", "onClick"], Pk = ["aria-label"], $k = ["name", "value"], Fk = {
  type: "submit",
  class: "button secondary"
}, Dk = ["aria-busy"], Mk = { key: 0 }, zk = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, Uk = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, Bk = { class: "library-metadata-review-workbench-copy" }, jk = { class: "library-muted library-catalogue-eyebrow" }, Hk = ["title"], Vk = {
  key: 0,
  class: "library-metadata-review-card"
}, Kk = {
  class: "library-bidi-human",
  dir: "auto"
}, Gk = { class: "library-muted" }, Wk = {
  class: "library-bidi-machine",
  dir: "ltr"
}, qk = { class: "library-metadata-review-fields" }, Yk = {
  class: "library-bidi-human",
  dir: "auto"
}, Xk = {
  class: "library-bidi-human",
  dir: "auto"
}, Zk = {
  class: "library-bidi-human",
  dir: "auto"
}, Jk = {
  class: "library-bidi-machine",
  dir: "ltr"
}, Qk = {
  class: "library-bidi-human",
  dir: "auto"
}, eA = {
  class: "library-bidi-human",
  dir: "auto"
}, tA = ["action"], nA = ["value"], iA = ["value"], aA = {
  type: "submit",
  class: "button secondary"
}, rA = { class: "library-metadata-review-actions" }, oA = ["href"], sA = ["href"], lA = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, cA = ["href"], uA = ["aria-label"], dA = ["onClick"], fA = {
  class: "library-bidi-human",
  dir: "auto"
}, hA = {
  key: 0,
  class: "library-muted"
}, pA = {
  class: "library-bidi-human",
  dir: "auto"
}, vA = {
  key: 1,
  class: "library-scan-error"
}, gA = {
  class: "library-bidi-human",
  dir: "auto"
}, mA = ["onClick"], bA = ["href", "onClick"], yA = ["aria-label"], _A = ["href"], wA = {
  key: 1,
  class: "library-muted"
}, SA = { key: 0 }, CA = ["href"], TA = {
  key: 3,
  class: "library-muted"
}, EA = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, kA = { class: "library-home-header" }, AA = { class: "library-muted library-catalogue-eyebrow" }, xA = { id: "library-home-heading" }, OA = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, NA = { id: "library-continue-heading" }, LA = { class: "library-muted" }, RA = ["href"], IA = {
  key: 0,
  class: "library-home-card-row"
}, PA = ["aria-label", "onClick"], $A = { class: "library-cover-frame" }, FA = ["src"], DA = { class: "library-cover-summary" }, MA = ["onClick"], zA = { dir: "auto" }, UA = {
  key: 0,
  class: "library-cover-creator"
}, BA = { dir: "auto" }, jA = ["href", "onClick"], HA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, VA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, KA = { id: "library-recent-heading" }, GA = { class: "library-muted" }, WA = ["href"], qA = {
  key: 0,
  class: "library-home-card-row"
}, YA = ["aria-label", "onClick"], XA = { class: "library-cover-frame" }, ZA = ["src"], JA = { class: "library-cover-summary" }, QA = ["onClick"], e2 = { dir: "auto" }, t2 = {
  key: 0,
  class: "library-cover-creator"
}, n2 = { dir: "auto" }, i2 = ["href", "onClick"], a2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, r2 = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, o2 = { id: "library-home-shelves-heading" }, s2 = { class: "library-muted" }, l2 = ["href"], c2 = ["aria-label"], u2 = ["href"], d2 = { dir: "auto" }, f2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, h2 = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, p2 = { id: "library-home-attention-heading" }, v2 = { class: "library-muted" }, g2 = ["href"], m2 = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, b2 = { class: "library-home-header" }, y2 = { class: "library-muted library-catalogue-eyebrow" }, _2 = { id: "library-shelves-landing-heading" }, w2 = { class: "library-muted" }, S2 = ["aria-label"], C2 = { class: "library-shelf-tree" }, T2 = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, E2 = { class: "library-muted" }, k2 = { class: "library-empty-actions" }, A2 = ["href"], x2 = ["href"], O2 = ["aria-busy"], N2 = { class: "library-catalogue-header" }, L2 = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, R2 = ["aria-label"], I2 = { class: "library-mobile-filter-count" }, P2 = ["aria-label"], $2 = ["value"], F2 = ["name", "value"], D2 = { class: "library-mobile-filter-group" }, M2 = { class: "library-quick-filter-search" }, z2 = ["placeholder"], U2 = { value: "" }, B2 = ["value"], j2 = { class: "library-publisher-filter" }, H2 = { for: "library-mobile-publisher-search" }, V2 = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], K2 = ["value"], G2 = {
  key: 0,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, W2 = ["id", "aria-selected"], q2 = ["onClick"], Y2 = { class: "library-publication-filter" }, X2 = { for: "library-mobile-publication-search" }, Z2 = ["placeholder", "aria-expanded"], J2 = ["value"], Q2 = {
  key: 0,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, ex = ["onClick"], tx = { class: "library-year-filter" }, nx = { for: "library-mobile-year-search" }, ix = ["placeholder", "aria-expanded"], ax = ["value"], rx = {
  key: 0,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, ox = ["onClick"], sx = { class: "library-creator-filter" }, lx = { for: "library-mobile-creator-search" }, cx = ["placeholder", "title", "aria-expanded"], ux = ["value"], dx = {
  key: 0,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, fx = ["onClick"], hx = { value: "" }, px = ["value"], vx = { class: "library-subject-filter" }, gx = { for: "library-mobile-subject-search" }, mx = ["placeholder", "title", "aria-expanded"], bx = ["value"], yx = {
  key: 0,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, _x = ["onClick"], wx = { class: "library-classification-filter" }, Sx = { for: "library-mobile-classification-search" }, Cx = ["placeholder", "title", "aria-expanded"], Tx = ["value"], Ex = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, kx = ["onClick"], Ax = { class: "library-mobile-filter-group" }, xx = { value: "" }, Ox = ["value"], Nx = { class: "library-folder-filter" }, Lx = { for: "library-mobile-folder-search" }, Rx = ["placeholder", "title", "aria-expanded"], Ix = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, Px = ["onClick"], $x = { class: "library-mobile-filter-group" }, Fx = { value: "" }, Dx = ["value"], Mx = { value: "" }, zx = ["value"], Ux = { value: "" }, Bx = { value: "1" }, jx = { class: "library-mobile-filter-group" }, Hx = { class: "library-tag-filter" }, Vx = { for: "library-tag-search" }, Kx = ["placeholder", "aria-expanded"], Gx = ["value"], Wx = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, qx = ["onClick"], Yx = {
  type: "submit",
  class: "button secondary library-tag-apply"
}, Xx = { value: "title" }, Zx = { value: "recent" }, Jx = { value: "publicationDate" }, Qx = { value: "publication" }, eO = { value: "lastOpened" }, tO = { value: "format" }, nO = { value: "compact" }, iO = { value: "gallery" }, aO = { value: "list" }, rO = { value: "shelf" }, oO = { class: "library-mobile-filter-actions" }, sO = ["href"], lO = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, cO = ["aria-label"], uO = ["aria-label"], dO = ["name", "value"], fO = { "data-library-control": "sort" }, hO = { value: "title" }, pO = { value: "recent" }, vO = { value: "publicationDate" }, gO = { value: "publication" }, mO = { value: "lastOpened" }, bO = { value: "format" }, yO = ["aria-label"], _O = ["aria-pressed"], wO = ["aria-pressed"], SO = ["aria-pressed"], CO = ["aria-pressed"], TO = {
  id: "library-collections",
  class: "library-saved-collections"
}, EO = ["title"], kO = ["action", "title"], AO = ["value"], xO = ["value"], OO = ["placeholder", "disabled"], NO = ["disabled", "title"], LO = ["aria-label"], RO = ["href"], IO = { class: "library-saved-collection-count" }, PO = ["action"], $O = ["value"], FO = {
  type: "submit",
  class: "button tertiary"
}, DO = ["aria-label"], MO = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, zO = ["title"], UO = { class: "library-workspace-panel-purpose" }, BO = { class: "library-workspace-scope-badge" }, jO = { "aria-live": "polite" }, HO = ["action"], VO = ["value"], KO = ["placeholder"], GO = ["title"], WO = ["action"], qO = ["value"], YO = ["placeholder"], XO = ["title"], ZO = ["action"], JO = ["value"], QO = ["name", "value"], e3 = ["title"], t3 = ["action"], n3 = ["value"], i3 = ["name", "value"], a3 = { name: "bulkEditField" }, r3 = { value: "publicationType" }, o3 = { value: "subtitle" }, s3 = { value: "creators" }, l3 = { value: "publication" }, c3 = { value: "publicationDate" }, u3 = { value: "language" }, d3 = { value: "publisher" }, f3 = { value: "subjects" }, h3 = { value: "classifications" }, p3 = ["placeholder"], v3 = ["title"], g3 = ["action"], m3 = ["value"], b3 = ["name", "value"], y3 = ["title"], _3 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, w3 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, S3 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, C3 = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, T3 = { key: 0 }, E3 = { key: 1 }, k3 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, A3 = { class: "library-muted library-catalogue-eyebrow" }, x3 = ["title"], O3 = ["aria-label"], N3 = { key: 0 }, L3 = { key: 1 }, R3 = { key: 2 }, I3 = ["aria-label"], P3 = { key: 0 }, $3 = { key: 1 }, F3 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, D3 = { class: "library-muted library-catalogue-eyebrow" }, M3 = ["title"], z3 = ["aria-label"], U3 = ["href"], B3 = {
  key: 0,
  class: "library-notice"
}, j3 = { class: "library-publication-issue-label" }, H3 = ["href"], V3 = { class: "library-muted" }, K3 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, G3 = ["title"], W3 = ["href"], q3 = { class: "library-catalogue-status-row" }, Y3 = { class: "library-muted library-filter-result-summary" }, X3 = { key: 0 }, Z3 = ["href"], J3 = ["aria-label"], Q3 = { class: "library-pagination-range" }, eN = { key: 0 }, tN = ["href"], nN = {
  key: 1,
  class: "library-muted"
}, iN = ["href"], aN = {
  key: 3,
  class: "library-muted"
}, rN = ["title"], oN = { class: "library-empty-actions" }, sN = ["href"], lN = { class: "library-muted" }, cN = ["title"], uN = { class: "library-empty-actions" }, dN = ["href"], fN = ["title"], hN = { class: "library-empty-actions" }, pN = ["href"], vN = ["href"], gN = ["title"], mN = { class: "library-empty-actions" }, bN = ["href"], yN = {
  key: 5,
  class: "library-select-visible"
}, _N = ["checked"], wN = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, SN = { class: "library-item-selection" }, CN = ["checked", "aria-label", "onChange"], TN = { class: "library-catalogue-list-main" }, EN = ["onClick"], kN = {
  class: "library-bidi-human",
  dir: "auto"
}, AN = {
  key: 0,
  class: "library-muted"
}, xN = {
  class: "library-bidi-human",
  dir: "auto"
}, ON = { class: "library-catalogue-list-metadata" }, NN = { key: 0 }, LN = {
  class: "library-bidi-human",
  dir: "auto"
}, RN = { key: 1 }, IN = { key: 2 }, PN = ["dir"], $N = { key: 3 }, FN = {
  class: "library-bidi-human",
  dir: "auto"
}, DN = { class: "library-catalogue-list-actions" }, MN = ["href", "onClick"], zN = ["onClick"], UN = { class: "library-item-selection" }, BN = ["checked", "aria-label", "onChange"], jN = ["aria-labelledby", "aria-expanded", "onClick"], HN = ["id"], VN = { class: "library-cover-frame" }, KN = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, GN = ["src", "onLoad", "onError"], WN = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, qN = ["action", "onSubmit"], YN = ["value"], XN = ["value"], ZN = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], JN = ["data-library-star-error"], QN = { class: "library-cover-summary" }, eL = { class: "library-cover-primary" }, tL = ["id"], nL = ["onClick"], iL = {
  class: "library-bidi-human",
  dir: "auto"
}, aL = {
  key: 0,
  class: "library-cover-creator"
}, rL = {
  class: "library-bidi-human",
  dir: "auto"
}, oL = {
  key: 1,
  class: "library-cover-badges"
}, sL = {
  key: 0,
  class: "library-cover-badge"
}, lL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, cL = {
  key: 1,
  class: "library-cover-context"
}, uL = {
  class: "library-bidi-human",
  dir: "auto"
}, dL = { class: "library-cover-primary-actions" }, fL = ["href", "onClick"], hL = ["aria-label"], pL = { class: "library-pagination-range" }, vL = { key: 0 }, gL = ["href"], mL = {
  key: 1,
  class: "library-muted"
}, bL = ["href"], yL = {
  key: 3,
  class: "library-muted"
}, _L = { class: "library-sidebar-content" }, wL = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, SL = ["role"], CL = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, TL = { class: "library-sidebar-publication-header" }, EL = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, kL = ["src"], AL = { class: "library-sidebar-publication-summary" }, xL = { class: "library-muted library-catalogue-eyebrow" }, OL = {
  class: "library-bidi-human",
  dir: "auto"
}, NL = { key: 0 }, LL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, RL = { class: "library-detail-drawer-actions" }, IL = ["href"], PL = ["aria-label"], $L = ["aria-current", "onClick"], FL = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, DL = { id: "library-sidebar-overview-heading" }, ML = {
  key: 0,
  class: "library-sidebar-description"
}, zL = {
  class: "library-bidi-human",
  dir: "auto"
}, UL = { class: "library-detail-drawer-facts" }, BL = { key: 0 }, jL = { key: 1 }, HL = { key: 2 }, VL = { key: 3 }, KL = { key: 4 }, GL = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, WL = { id: "library-sidebar-metadata-heading" }, qL = ["placeholder"], YL = ["onUpdate:modelValue", "aria-label", "placeholder"], XL = ["onUpdate:modelValue", "aria-label"], ZL = ["onClick"], JL = { class: "library-muted" }, QL = {
  key: 0,
  role: "alert"
}, eR = {
  key: 1,
  role: "status"
}, tR = ["disabled"], nR = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, iR = { id: "library-sidebar-suggestions-heading" }, aR = { class: "library-muted" }, rR = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, oR = { id: "library-sidebar-activity-heading" }, sR = { class: "library-detail-drawer-facts" }, lR = { key: 0 }, cR = { key: 1 }, uR = { key: 2 }, dR = { class: "library-detail-drawer-file" }, fR = ["href"], hR = { dir: "ltr" }, pR = {
  key: 1,
  dir: "ltr"
}, vR = ["aria-label"], gR = ["disabled"], mR = ["disabled"], bR = 20, yR = "/apps/library", _R = 2147483647, wR = {
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
        const I = [...new Set([...d.keys()].filter((xe) => xe === s || xe.startsWith(`${s}[`)))], J = I.reduce((xe, De) => xe + d.getAll(De).length, 0);
        if (J > 1 || I.some((xe) => xe !== s)) {
          for (const xe of I) d.delete(xe);
          continue;
        }
        s !== "status" && J === 1 && !r(s, d.get(s)) && d.delete(s);
      }
      return d;
    }
    function c(p) {
      return Object.keys(a).some((d) => p.getAll(d).length === 1 && r(d, p.get(d)));
    }
    function u(p) {
      return Object.fromEntries(Object.entries(p || {}).filter(([d, s]) => d === "status" || !Object.prototype.hasOwnProperty.call(a, d) || r(d, s)));
    }
    const h = /* @__PURE__ */ Lt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), f = /* @__PURE__ */ Lt((h.items || []).map((p) => ({ ...p }))), b = H(() => f), C = H(() => h.shelves || []), k = H(() => h.formats || []), N = H(() => h.publicationTypes?.length ? h.publicationTypes : n), A = H(() => h.publications || []), O = H(() => h.publicationIssueContext || null), F = H(() => h.scanStatuses || []), M = H(() => h.workflowStatuses || []), z = H(() => h.cataloguePagination || {
      page: 1,
      limit: 100,
      total: b.value.length,
      visible: b.value.length,
      from: b.value.length > 0 ? 1 : 0,
      to: b.value.length,
      previousUrl: "",
      nextUrl: ""
    }), T = /* @__PURE__ */ Lt({
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
      return (p !== "" && fe.value !== null ? fe.value : A.value).filter((s) => p === "" || s.toLocaleLowerCase().includes(p)).slice(0, bR);
    });
    qe(() => T.publication, (p) => {
      re.value = p || "";
    }), qe(() => T.q, (p) => {
      ue.value = p || "";
    });
    let se = null, me = null, Q = 0;
    qe(re, (p) => {
      window.clearTimeout(se), me?.abort(), me = null, fe.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++Q;
      se = window.setTimeout(() => {
        Ag(d, s);
      }, 200);
    });
    const ee = /* @__PURE__ */ we(T.publisher), $ = /* @__PURE__ */ we(!1), U = /* @__PURE__ */ we(null), q = H(() => U.value || []);
    qe(() => T.publisher, (p) => {
      ee.value = p || "";
    });
    let le = null, ie = null, ge = 0;
    qe(ee, (p) => {
      window.clearTimeout(le), ie?.abort(), ie = null, U.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++ge;
      le = window.setTimeout(() => {
        wg(d, s);
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
        _g(d, s);
      }, 200);
    });
    const it = /* @__PURE__ */ we(T.folder), ut = /* @__PURE__ */ we(!1), at = /* @__PURE__ */ we(null), Ft = H(() => at.value || []);
    qe(() => T.folder, (p) => {
      it.value = p || "";
    });
    let j = null, _ = null, E = 0;
    qe(it, (p) => {
      window.clearTimeout(j), _?.abort(), _ = null, at.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++E;
      j = window.setTimeout(() => {
        Eg(d, s);
      }, 200);
    });
    const x = /* @__PURE__ */ we(T.subject), L = /* @__PURE__ */ we(!1), R = /* @__PURE__ */ we(null), B = H(() => R.value || []);
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
        Sg(d, s);
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
        Cg(d, s);
      }, 200);
    });
    const $e = /* @__PURE__ */ we(T.tag), He = /* @__PURE__ */ we(!1), rt = /* @__PURE__ */ we(null), vt = H(() => rt.value || []);
    qe(() => T.tag, (p) => {
      $e.value = p || "";
    });
    let Et = null, Dt = null, En = 0;
    qe($e, (p) => {
      window.clearTimeout(Et), Dt?.abort(), Dt = null, rt.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++En;
      Et = window.setTimeout(() => {
        Tg(d, s);
      }, 200);
    });
    const et = /* @__PURE__ */ we(T.year), dt = /* @__PURE__ */ we(!1), $n = /* @__PURE__ */ we(null), vn = H(() => $n.value || []);
    qe(() => T.year, (p) => {
      et.value = p || "";
    });
    let ea = null, wi = null, Fn = 0;
    qe(et, (p) => {
      window.clearTimeout(ea), wi?.abort(), wi = null, $n.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++Fn;
      ea = window.setTimeout(() => {
        kg(d, s);
      }, 200);
    });
    const Xn = Object.fromEntries(Object.keys(T).map((p) => [p, p === "sort" ? "title" : p === "view" ? "compact" : ""])), or = window.location.pathname.indexOf(yR), Zn = or >= 0 ? window.location.pathname.slice(0, or) : "", Si = {
      catalogue: `${Zn}/apps/library/`,
      review: `${Zn}/apps/library/?scannerConflicts=1`,
      settings: `${Zn}/settings/user/library`
    };
    function Ci(p, d) {
      if (typeof p != "string" || p === "") return d;
      try {
        const s = Zn ? `${Zn}/` : "/";
        let I = p;
        for (let J = 0; J < 5; J += 1) {
          if (!I.startsWith("/") || I.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(I)) return d;
          const xe = new URL(I, window.location.origin);
          if (xe.origin !== window.location.origin || !xe.pathname.startsWith(s)) return d;
          const De = I.split(/[?#]/, 1)[0];
          for (const ln of De.split("/")) {
            let $i = ln;
            for (let Ba = 0; Ba < 5; Ba += 1) {
              const Un = decodeURIComponent($i);
              if (/[\\/\u0000-\u001f\u007f]/.test(Un) || Un === "." || Un === "..") return d;
              if (Un === $i) break;
              if ($i = Un, Ba === 4) return d;
            }
          }
          const Xe = decodeURI(I);
          if (Xe === I) return p;
          I = Xe;
        }
        return d;
      } catch {
        return d;
      }
    }
    const Ti = H(() => Ci(h.settingsUrl, Si.settings)), wt = H(() => Ci(h.catalogueRootUrl, Si.catalogue)), $a = H(() => Ci(h.homeUrl, `${Si.catalogue}?home=1`)), on = H(() => Ci(h.shelvesUrl, `${Si.catalogue}?shelves=1`)), Ei = H(() => Ci(h.reviewUrl || h.scannerConflictReviewUrl, Si.review)), ta = H(() => Object.entries(a).some(([p, d]) => T[p] === d)), Fa = H(() => i.reduce((p, d) => p + Number(cc.value[d.countKey] || 0), 0)), na = H(() => h.surface === "home"), ki = H(() => h.surface === "shelves"), sr = H(() => !na.value && !ki.value && !ta.value && !T.starred && T.sort !== "lastOpened" && !T.shelf), Ro = H(() => [
      { key: "home", name: m("library", "Home"), href: $a.value, active: na.value },
      { key: "all", name: m("library", "All publications"), href: wt.value, active: sr.value },
      { key: "starred", name: m("library", "Starred"), href: `${wt.value}?starred=1`, active: T.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${wt.value}?sort=lastOpened`, active: T.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: on.value, active: ki.value || !!T.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${wt.value}#library-collections`, active: !1 }
    ]), kt = H(() => h.requestToken || "");
    function Jn(p, d) {
      const s = String(p?.recordOpenUrl || "");
      if (!s || !kt.value) return;
      const I = new URLSearchParams({ requesttoken: kt.value });
      try {
        if (navigator.sendBeacon) {
          const J = new Blob([I.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(s, J);
          return;
        }
      } catch {
      }
      fetch(s, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: kt.value },
        body: I,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const Ai = H(() => h.catalogueEndpointUrl || "/apps/library/catalogue"), Kl = H(() => h.shelfChildrenUrl || "/apps/library/shelves/children"), Gl = H(() => h.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), ht = H(() => h.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), xi = H(() => h.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Wl = H(() => h.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Io = H(() => h.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), lr = H(() => h.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), Po = H(() => h.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), $o = H(() => h.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), ql = H(() => h.itemSidebarUrlTemplate || `${Zn}/apps/library/items/__ITEM_ID__/sidebar`), Yl = H(() => h.batchTagUrl || "/apps/library/bulk/tags"), Xl = H(() => h.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Zl = H(() => h.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Dn = H(() => h.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Fo = H(() => h.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ia = H(() => h.scannerConflictReviewUrl || "?scannerConflicts=1");
    h.importHealthSummary, h.importHealthSummary && Object.keys(h.importHealthSummary).length > 0;
    const kn = H(() => h.discoveryPage === "publication"), cr = H(() => h.discoveryPage === "year"), Oi = H(() => h.discoveryPage === "creator"), Da = H(() => kn.value || cr.value || Oi.value), Do = H(() => h.discoveryTitle || T.publication || T.year || T.creator || ""), Mo = H(() => Da.value ? Do.value : m("library", "Library")), ur = H(() => Oi.value ? m("library", "Creator") : cr.value ? m("library", "Publication year") : m("library", "Publication / series")), aa = H(() => Number(h.rootCount || 0)), dr = H(() => Number(h.enabledRootCount || 0)), Ni = H(() => aa.value === 0), Mn = H(() => aa.value > 0 && dr.value === 0), Li = H(() => W.value.length > 0), mt = /* @__PURE__ */ we(!1), zo = /* @__PURE__ */ we(null), ra = /* @__PURE__ */ we(null), Uo = {
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
    }, Bo = {
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
    }, jo = {
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
    }, fr = H(() => {
      if (typeof window > "u") return "";
      const p = new URLSearchParams(window.location.search);
      if (p.get("batchMetadataApplyResult") !== "1") return "";
      const d = p.get("batchMetadataField") || "field", s = p.get("batchMetadataApplied") || "0", I = p.get("batchMetadataUnchanged") || "0", J = p.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: d, unchanged: I, skipped: J });
    }), hr = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Ho = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), pr = H(() => h.savedCollections || []), Jl = H(() => h.savedCollectionSaveUrl || "/apps/library/collections"), Ql = H(() => h.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), vr = ["compact", "gallery", "list", "shelf"], At = H(() => vr.includes(T.view) ? T.view : "compact"), gr = H(() => ({
      "library-cover-gallery--compact": At.value === "compact",
      "library-cover-gallery--gallery": At.value === "gallery",
      "library-cover-gallery--shelf": At.value === "shelf"
    }));
    function te(p) {
      const d = String(p || "").trim();
      if (d.length <= 32) return d;
      const s = d.split("/").filter(Boolean);
      return s.length > 0 ? `…/${s.at(-1)}` : d;
    }
    function S(p, d) {
      const s = String(d || "").trim();
      if (s === "" || Bo[p] === s) return "";
      if (p === "format") return s.toUpperCase();
      if (p === "folder") return te(s);
      const I = jo[p]?.[s];
      return I ? m("library", I) : s;
    }
    function P(p, d) {
      const s = String(T[p] || "").trim(), I = S(p, s), J = m("library", d);
      return {
        key: p,
        label: J,
        value: s,
        displayValue: I,
        title: I ? `${J}: ${s}` : J
      };
    }
    const W = H(() => Object.entries(Uo).map(([p, d]) => P(p, d)).filter((p) => p.value !== "" && !(p.key === "sort" && p.value === "title") && !(p.key === "view" && p.value === "compact"))), ce = H(() => W.value.filter((p) => !["sort", "view"].includes(p.key))), ve = H(() => W.value.length), Le = H(() => ve.value > 0 ? m("library", "Filters ({count})", { count: ve.value }) : m("library", "Filters")), tt = H(() => ve.value > 0 ? m("library", "Open filters panel; {count} active filters", { count: ve.value }) : m("library", "Open filters panel")), ct = H(() => un("library", "Show %n item", "Show %n items", Number(z.value.total || 0)));
    function Mt(p) {
      mt.value = p.currentTarget?.open === !0, mt.value && en(() => {
        zo.value?.focus?.();
      });
    }
    const zt = /* @__PURE__ */ new Set([
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
    ]), Ma = H(() => Object.entries(u(T)).filter(([p, d]) => !zt.has(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), xt = H(() => Object.entries(T).filter(([p, d]) => !["q", "sort", "starred"].includes(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), Vo = H(() => Object.entries(u(T)).filter(([p, d]) => String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), lg = H(() => Vo.value.filter(({ key: p, value: d }) => p !== "q" && !(p === "sort" && d === "title"))), ec = /* @__PURE__ */ Lt({}), Ko = H(() => h.homeRows || { continueReading: [], recentlyAdded: [] }), dd = H(() => h.homeShelves || []), fd = H(() => h.shelfTree || []), tc = H(() => h.needsAttention || { count: 0, url: `${wt.value}?needsMetadata=1` }), An = /* @__PURE__ */ we([]), Go = H(() => new Set(An.value));
    function hd(p, d) {
      const s = new Set(An.value);
      d ? s.add(Number(p)) : s.delete(Number(p)), An.value = [...s];
    }
    function cg(p) {
      An.value = p.currentTarget.checked ? b.value.map((d) => Number(d.id)) : [];
    }
    function ug() {
      const p = new Set(b.value.map((d) => Number(d.id)));
      An.value = An.value.filter((d) => p.has(d));
    }
    function dg(p) {
      const d = p.target;
      if (d instanceof HTMLFormElement) {
        d.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of An.value) {
          const I = document.createElement("input");
          I.type = "hidden", I.name = "itemIds[]", I.value = String(s), I.dataset.librarySelectedId = "1", d.appendChild(I);
        }
      }
    }
    const Ae = /* @__PURE__ */ we(null), oa = /* @__PURE__ */ we(null), Yt = /* @__PURE__ */ Lt({ loading: !1, error: "", missing: !1 }), sa = /* @__PURE__ */ we("overview"), xn = /* @__PURE__ */ Lt({ saving: !1, saved: !1, error: "" }), Ut = /* @__PURE__ */ Lt({ title: "", publicationDate: "", identifiers: [] }), pd = /* @__PURE__ */ we(null), la = /* @__PURE__ */ we(null), ca = /* @__PURE__ */ we(!1);
    let nc = null, Qn = null, Wo = null, ic = !1, mr = null, ac = 0;
    const Ri = H(() => oa.value !== null), br = H(() => Ae.value ? b.value.findIndex((p) => p.id === Ae.value.id) : -1), qo = H(() => br.value > 0 ? b.value[br.value - 1] : null), Yo = H(() => br.value >= 0 && br.value < b.value.length - 1 ? b.value[br.value + 1] : null), fg = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], hg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Xo(p) {
      const d = String(p ?? "").trim(), s = d.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return s ? s[1] : d;
    }
    function vd(p) {
      return { ...p, publicationDate: Xo(p?.publicationDate) };
    }
    function gd(p) {
      Ut.title = String(p?.title || ""), Ut.publicationDate = Xo(p?.publicationDate), Ut.identifiers = Array.isArray(p?.identifiers) ? p.identifiers.map((d) => ({ scheme: String(d?.scheme || ""), displayValue: String(d?.displayValue || d?.value || "") })) : [], Object.assign(xn, { saving: !1, saved: !1, error: "" });
    }
    function pg() {
      Ut.identifiers.push({ scheme: "", displayValue: "" });
    }
    function vg(p) {
      Ut.identifiers.splice(p, 1);
    }
    async function gg() {
      const p = Ae.value;
      if (!p?.updateUrl || xn.saving) return;
      Object.assign(xn, { saving: !0, saved: !1, error: "" });
      const d = new FormData();
      d.set("requesttoken", kt.value), d.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const I = p[s];
        d.set(s, Array.isArray(I) ? I.join(", ") : String(I ?? ""));
      }
      d.set("title", Ut.title), d.set("publicationDate", Xo(Ut.publicationDate)), Ut.identifiers.forEach((s, I) => {
        d.set(`identifiers[${I}][scheme]`, s.scheme), d.set(`identifiers[${I}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(p.updateUrl, { method: "POST", body: d, credentials: "same-origin", headers: { Accept: "application/json" } }), I = await s.json().catch(() => ({}));
        if (!s.ok || I.saved !== !0) throw new Error(I.error || m("library", "Metadata could not be saved."));
        p.title = Ut.title.trim(), p.publicationDate = Xo(Ut.publicationDate), p.identifiers = Ut.identifiers.filter((xe) => xe.scheme.trim() || xe.displayValue.trim()).map((xe) => ({ ...xe }));
        const J = b.value.find((xe) => Number(xe.id) === Number(p.id));
        J && (J.title = p.title, J.publicationDate = p.publicationDate), xn.saved = !0;
      } catch (s) {
        xn.error = s?.message || m("library", "Metadata could not be saved.");
      } finally {
        xn.saving = !1;
      }
    }
    const Ii = H(() => {
      const p = r("scannerConflicts", T.scannerConflicts) || r("weakMetadata", T.weakMetadata), d = p ? b.value.find((s) => Zo(s).length > 0) : null;
      return {
        enabled: p,
        item: d,
        fields: d ? Zo(d) : [],
        reviewNextUrl: ia.value,
        skipUrl: z.value.nextUrl || ia.value
      };
    }), mg = H(() => i.map((p) => ({
      ...p,
      label: m("library", p.label),
      href: `${wt.value}?${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`,
      active: String(T[p.key] || "") === p.value
    })));
    function rc(p) {
      return Array.isArray(p) ? JSON.stringify(p) : p == null ? "" : String(p);
    }
    function Zo(p) {
      const d = p.fieldValues || {}, s = p.fieldSources || {};
      return fg.filter((I) => Object.prototype.hasOwnProperty.call(d, I)).map((I) => {
        const J = rc(p[I]), xe = rc(d[I]), De = rc(s[I] || p.metadataSource || "scanner"), Xe = De.includes("filename") || De.includes("path") ? xe : "", ln = De.includes("sidecar") ? xe : "";
        return { field: I, currentValue: J, scannerCandidate: xe, pathTemplateCandidate: Xe, sidecarValue: ln, sourceProvenance: De, differs: J !== xe };
      }).filter((I) => I.differs);
    }
    let ua = 0, da = null;
    function md() {
      const p = new URLSearchParams(window.location.search).getAll("item");
      if (p.length !== 1 || !/^[1-9][0-9]*$/.test(p[0])) return null;
      const d = Number(p[0]);
      return Number.isSafeInteger(d) && d <= _R ? d : null;
    }
    function bd(p, d = "push") {
      const s = new URL(window.location.href);
      s.searchParams.delete("item"), p !== null && s.searchParams.set("item", String(p)), history[`${d}State`]({}, "", `${s.pathname}${s.search}${s.hash}`);
    }
    async function yr(p, { historyMode: d = "push", seed: s = null } = {}) {
      da?.abort();
      const I = ++ua, J = new AbortController();
      da = J, oa.value = p, sa.value = "overview", Ae.value = s && Number(s.id) === p ? vd(s) : null, Ae.value && gd(Ae.value), Object.assign(Yt, { loading: !0, error: "", missing: !1 }), d !== "none" && bd(p, d);
      try {
        const xe = ql.value.replace("__ITEM_ID__", encodeURIComponent(String(p))), De = await fetch(xe, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: J.signal });
        if (I !== ua) return;
        if (!De.ok) {
          Ae.value = null, Yt.missing = De.status === 404, Yt.error = De.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const Xe = await De.json();
        if (I !== ua) return;
        if (typeof Xe?.item?.id != "number" || !Number.isSafeInteger(Xe.item.id) || Xe.item.id !== p) {
          Ae.value = null, Yt.missing = !1, Yt.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        Ae.value = vd(Xe.item), gd(Ae.value), await en();
      } catch (xe) {
        I === ua && xe?.name !== "AbortError" && (Ae.value = null, Yt.missing = !1, Yt.error = m("library", "Could not load publication details. Try again."));
      } finally {
        I === ua && (Yt.loading = !1, da = null);
      }
    }
    function zn(p, d) {
      oc(), nc = d?.currentTarget instanceof HTMLElement ? d.currentTarget : null, yr(Number(p.id), { seed: p });
    }
    function Jo({ historyMode: p = "push", restoreFocus: d = !0 } = {}) {
      Wo = d ? nc : null, nc = null, da?.abort(), da = null, ua += 1, oa.value = null, Ae.value = null, sa.value = "overview", Object.assign(Yt, { loading: !1, error: "", missing: !1 }), p !== "none" && bd(null, p);
    }
    function yd() {
      ca.value ? (la.value?.$refs?.sidebar || la.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : pd.value?.focus();
    }
    function bg() {
      const p = Wo;
      if (Wo = null, oc(), ic || !p?.isConnected) return;
      const d = ac;
      mr = window.requestAnimationFrame(() => {
        mr = null, !(d !== ac || ic || Ri.value || !p.isConnected) && p.focus();
      });
    }
    function oc() {
      ac += 1, mr !== null && (window.cancelAnimationFrame(mr), mr = null);
    }
    function _r(p = Qn) {
      ca.value = !!p?.matches, Ri.value && en(yd);
    }
    function Qo(p) {
      p && yr(Number(p.id), { seed: p });
    }
    const wr = /* @__PURE__ */ we(null);
    let nn = 0, za = null, es = null, Sr = null;
    const Ot = /* @__PURE__ */ Lt({ loading: !1, error: "", completed: !1 });
    function yg(p) {
      const d = o(new FormData(p));
      d.delete("publicationSearch"), d.delete("creatorSearch"), d.delete("subjectSearch"), d.delete("publisherSearch"), d.delete("classificationSearch"), d.delete("tagSearch"), d.delete("folderSearch"), d.delete("yearSearch");
      for (const s of Array.from(d.keys()))
        String(d.get(s) || "").trim() === "" && d.delete(s);
      return d.delete("page"), d.get("view") === "compact" && d.delete("view"), d.get("sort") === "title" && d.delete("sort"), d;
    }
    async function fa(p, d, s) {
      const I = new URLSearchParams();
      for (const [De, Xe] of Object.entries(T)) {
        const ln = String(Xe || "").trim();
        De !== p && ln !== "" && !(De === "sort" && ln === "title") && !(De === "view" && ln === "compact") && I.set(De, ln);
      }
      I.set(`${p}Search`, d);
      const J = new AbortController();
      p === "creator" ? lt = J : p === "publisher" ? ie = J : p === "subject" ? K = J : p === "classification" ? Pe = J : p === "tag" ? Dt = J : p === "folder" ? _ = J : wi = J;
      const xe = p === "creator" ? ht.value : p === "publisher" ? xi.value : p === "subject" ? Wl.value : p === "classification" ? Io.value : p === "tag" ? lr.value : p === "folder" ? Po.value : $o.value;
      try {
        const De = await fetch(`${xe}?${I}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: J.signal });
        if (!De.ok) throw new Error(`${p} suggestions request failed: ${De.status}`);
        const Xe = await De.json(), ln = p === "creator" ? pt : p === "publisher" ? ge : p === "subject" ? Z : p === "classification" ? ze : p === "tag" ? En : p === "folder" ? E : Fn, $i = p === "creator" ? de.value : p === "publisher" ? ee.value : p === "subject" ? x.value : p === "classification" ? V.value : p === "tag" ? $e.value : p === "folder" ? it.value : et.value;
        s === ln && $i.trim() === d && (p === "creator" ? _e.value = Array.isArray(Xe.creators) ? Xe.creators : [] : p === "publisher" ? U.value = Array.isArray(Xe.publishers) ? Xe.publishers : [] : p === "subject" ? R.value = Array.isArray(Xe.subjects) ? Xe.subjects : [] : p === "classification" ? oe.value = Array.isArray(Xe.classifications) ? Xe.classifications : [] : p === "tag" ? rt.value = Array.isArray(Xe.tags) ? Xe.tags : [] : p === "folder" ? at.value = Array.isArray(Xe.folders) ? Xe.folders : [] : $n.value = Array.isArray(Xe.years) ? Xe.years : []);
      } catch (De) {
        De?.name !== "AbortError" && (p === "creator" && s === pt && (_e.value = null), p === "publisher" && s === ge && (U.value = null), p === "subject" && s === Z && (R.value = null), p === "classification" && s === ze && (oe.value = null), p === "tag" && s === En && (rt.value = null), p === "folder" && s === E && (at.value = null), p === "year" && s === Fn && ($n.value = null));
      }
    }
    function _g(p, d) {
      return fa("creator", p, d);
    }
    function wg(p, d) {
      return fa("publisher", p, d);
    }
    function Sg(p, d) {
      return fa("subject", p, d);
    }
    function Cg(p, d) {
      return fa("classification", p, d);
    }
    function Tg(p, d) {
      return fa("tag", p, d);
    }
    function Eg(p, d) {
      return fa("folder", p, d);
    }
    function kg(p, d) {
      return fa("year", p, d);
    }
    async function Ag(p, d) {
      const s = new URLSearchParams();
      for (const [J, xe] of Object.entries(T)) {
        const De = String(xe || "").trim();
        J !== "publication" && De !== "" && !(J === "sort" && De === "title") && !(J === "view" && De === "compact") && s.set(J, De);
      }
      s.set("publicationSearch", p);
      const I = new AbortController();
      me = I;
      try {
        const J = await fetch(`${Gl.value}?${s}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: I.signal
        });
        if (!J.ok) throw new Error(`Publication suggestions request failed: ${J.status}`);
        const xe = await J.json();
        d === Q && re.value.trim() === p && (fe.value = Array.isArray(xe.publications) ? xe.publications : []);
      } catch (J) {
        J?.name !== "AbortError" && d === Q && (fe.value = null);
      } finally {
        d === Q && (me = null);
      }
    }
    function xg(p) {
      f.splice(0, f.length, ...(p.items || []).map((s) => ({ ...s }))), ug();
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
    async function Og() {
      if (h.surface !== "index") return;
      const p = nn, d = JSON.stringify({ ...T }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [J, xe] of Object.entries(T)) {
        const De = String(xe || "").trim();
        De !== "" && !(J === "sort" && De === "title") && !(J === "view" && De === "compact") && s.set(J, De);
      }
      const I = new AbortController();
      es = I;
      try {
        const J = await fetch(`${Ai.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: I.signal
        });
        if (!J.ok) return;
        const xe = await J.json();
        if (p !== nn || d !== JSON.stringify({ ...T })) return;
        for (const De of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(xe, De) && (h[De] = xe[De]);
      } catch (J) {
        if (J?.name !== "AbortError") return;
      } finally {
        es === I && (es = null);
      }
    }
    async function Xt(p, d = null) {
      const s = p?.currentTarget?.tagName === "FORM" ? p.currentTarget : p?.currentTarget?.form;
      if (!s && !d?.params) return;
      const I = o(d?.params ?? yg(s));
      if (na.value || ki.value) {
        Cr(I, wt.value);
        return;
      }
      const J = I.toString(), xe = J ? `?${J}` : "", De = d?.generation ?? ++nn, Xe = c(I), ln = d?.historyMode ?? (Xe ? "push" : "replace"), $i = d?.historyTraversal === !0;
      if (De !== nn) return;
      d === null && za?.abort();
      const Ba = new AbortController();
      za = Ba, Ot.loading = !0, Ot.error = "", Ot.completed = !1;
      try {
        const Un = await fetch(Ai.value + xe, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ba.signal
        });
        if (De !== nn) return;
        if (!Un.ok) {
          $i ? Cr(I) : Xe ? Ot.error = m("library", "Could not load this review queue. Try again.") : Cr(I);
          return;
        }
        const qg = await Un.json();
        if (De !== nn) return;
        xg(qg), Ot.completed = !0, ln !== "none" && (history[ln === "push" ? "pushState" : "replaceState"]({}, "", J ? `?${J}` : window.location.pathname), Ri.value && Jo({ historyMode: "none" }));
      } catch (Un) {
        De === nn && Un?.name !== "AbortError" && ($i ? Cr(I) : Xe ? Ot.error = m("library", "Could not load this review queue. Try again.") : Cr(I));
      } finally {
        De === nn && (za = null, Ot.loading = !1);
      }
    }
    function _d() {
      za?.abort();
      const p = new URLSearchParams(window.location.search), d = md();
      p.has("item") && d === null && (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)), d === null ? Jo({ historyMode: "none" }) : yr(d, { historyMode: "none", seed: b.value.find((s) => Number(s.id) === d) || null }), p.delete("item"), Xt(null, {
        params: o(p),
        generation: ++nn,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Cr(p, d = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = d, s.hidden = !0;
      for (const [I, J] of p.entries()) {
        const xe = document.createElement("input");
        xe.type = "hidden", xe.name = I, xe.value = J, s.appendChild(xe);
      }
      document.body.appendChild(s), s.submit(), s.remove();
    }
    function sn(p, d = null, s = null) {
      if (d === null) {
        Xt(p);
        return;
      }
      Xt({ currentTarget: p }, { params: d, generation: s });
    }
    async function Ng(p, d = re.value) {
      T.publication = String(d || "").trim(), re.value = T.publication, X.value = !1, await en(), Xt({ currentTarget: p });
    }
    function wd(p, d) {
      Ng(d.currentTarget.form, p);
    }
    async function Lg(p) {
      T.q = String(ue.value || "").trim(), T.publication = String(re.value || "").trim(), T.publisher = String(ee.value || "").trim(), T.creator = String(de.value || "").trim(), T.subject = String(x.value || "").trim(), T.folder = String(it.value || "").trim(), T.year = String(et.value || "").trim(), X.value = !1, $.value = !1, be.value = !1, L.value = !1, ut.value = !1, dt.value = !1, await en(), Xt({ currentTarget: p });
    }
    async function Pi(p, d, s) {
      T[d] = String(s || "").trim(), d === "creator" ? (de.value = T.creator, be.value = !1) : d === "publisher" ? (ee.value = T.publisher, $.value = !1) : d === "subject" ? (x.value = T.subject, L.value = !1) : d === "folder" ? (it.value = T.folder, ut.value = !1) : d === "classification" ? (V.value = T.classification, he.value = !1) : d === "tag" ? ($e.value = T.tag, He.value = !1) : (et.value = T.year, dt.value = !1), ei[d] = -1, await en(), Xt({ currentTarget: p });
    }
    function Sd(p) {
      Lg(p.currentTarget);
    }
    function Cd(p, d) {
      Pi(d.currentTarget.form, "creator", p);
    }
    function Td(p, d) {
      Pi(d.currentTarget.form, "publisher", p);
    }
    function Ed(p, d) {
      Pi(d.currentTarget.form, "classification", p);
    }
    function kd(p, d) {
      Pi(d.currentTarget.form, "tag", p);
    }
    function Ad(p, d) {
      Pi(d.currentTarget.form, "folder", p);
    }
    function xd(p, d = x.value) {
      window.clearTimeout(G), K?.abort(), K = null, Pi(p, "subject", d);
    }
    function Rg(p) {
      xd(p.currentTarget.form);
    }
    function Od(p, d) {
      xd(d.currentTarget.form, p);
    }
    function Nd(p, d) {
      Pi(d.currentTarget.form, "year", p);
    }
    const ei = /* @__PURE__ */ Lt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function Ig(p) {
      return q.value;
    }
    function sc(p, d, s) {
      return `library-${p}-${d}-suggestion-${s}`;
    }
    function Ld(p, d) {
      const s = ei[d];
      return s >= 0 ? sc(p, d, s) : void 0;
    }
    function lc(p, d) {
      $.value = d, d || (ei[p] = -1);
    }
    function Rd(p) {
      ei[p] = -1, lc(p, !0);
    }
    function Pg(p, d, s) {
      Pi(s, p, d);
    }
    function Id(p, d) {
      const s = Ig();
      if (p.key === "Escape") {
        lc(d, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(p.key) || s.length === 0) return;
      if (p.key === "Enter") {
        const xe = ei[d];
        if (xe < 0) return;
        p.preventDefault(), Pg(d, s[xe], p.currentTarget.form);
        return;
      }
      p.preventDefault(), lc(d, !0);
      const I = ei[d], J = p.key === "ArrowDown" ? 1 : -1;
      ei[d] = I < 0 ? J > 0 ? 0 : s.length - 1 : (I + J + s.length) % s.length;
    }
    function Pd(p) {
      const d = new URLSearchParams();
      for (const [s, I] of Object.entries(T)) {
        const J = String(I || "").trim();
        J !== "" && s !== p && !(s === "sort" && J === "title") && !(s === "view" && J === "compact") && d.set(s, J);
      }
      return d;
    }
    function $d(p) {
      const d = Pd(p).toString();
      return `${wt.value}${d ? `?${d}` : ""}`;
    }
    function Fd(p) {
      const d = Pd(p);
      T[p] = p === "sort" ? "title" : p === "view" ? "compact" : "", Xt(null, {
        params: d,
        generation: ++nn
      });
    }
    function Dd() {
      const p = new URLSearchParams();
      return T.sort && T.sort !== "title" && p.set("sort", T.sort), T.view && T.view !== "compact" && p.set("view", T.view), p;
    }
    function Tr() {
      const p = Dd().toString();
      return `${wt.value}${p ? `?${p}` : ""}`;
    }
    function Er() {
      const p = Dd();
      for (const d of Object.keys(T))
        ["sort", "view"].includes(d) || (T[d] = Xn[d]);
      Xt(null, {
        params: p,
        generation: ++nn
      }), !na.value && !ki.value && en(() => {
        ra.value?.focus?.();
      });
    }
    function $g(p) {
      const d = new URL(p.href, window.location.origin).searchParams;
      Xt(null, {
        params: d,
        generation: ++nn
      });
    }
    function Fg() {
      return $d("q");
    }
    const cc = H(() => h.smartViewCounts || {}), Dg = H(() => new Set(h.smartViewCountsPending || []));
    function Mg(p) {
      return Dg.value.has(p) || !Object.prototype.hasOwnProperty.call(cc.value, p) ? "—" : Number(cc.value[p] || 0);
    }
    const Md = H(() => {
      const p = {};
      for (const [d, s] of Object.entries(T)) {
        const I = String(s || "").trim();
        I !== "" && !(d === "sort" && I === "title") && (p[d] = I);
      }
      return p;
    }), zg = H(() => JSON.stringify(Md.value)), uc = H(() => Object.keys(Md.value).length > 0);
    function ts(p) {
      if (!vr.includes(p)) return;
      T.view = p;
      const d = new URLSearchParams();
      for (const [s, I] of Object.entries(u(T))) {
        const J = String(I || "").trim();
        J !== "" && !(s === "sort" && J === "title") && !(s === "view" && J === "compact") && d.set(s, J);
      }
      d.delete("page"), Xt(null, {
        params: d,
        generation: ++nn
      });
    }
    function Ug(p) {
      const d = o(window.location.search);
      for (const I of Object.keys(Uo))
        d.delete(I);
      d.delete("page");
      for (const [I, J] of Object.entries(p))
        String(J || "").trim() !== "" && d.set(I, String(J));
      const s = d.toString();
      return s ? `?${s}` : "?";
    }
    function Bg(p) {
      return Ug(p || {});
    }
    function jg(p) {
      return Ql.value.replace("__COLLECTION_ID__", encodeURIComponent(String(p || "0")));
    }
    function Ua(p) {
      return String(p || "").toUpperCase();
    }
    function kr(p) {
      return ec[p.id] || "loading";
    }
    function Hg(p) {
      ec[p.id] = "loaded";
    }
    function Vg(p) {
      ec[p.id] = "error";
    }
    function dc(p) {
      const d = String(p?.publication || "").trim(), s = String(p?.publicationDate || "").trim();
      return d && s ? `${d} · ${s}` : d || s ? d || s : [p?.publicationType, Ua(p?.extension)].filter(Boolean).join(" · ");
    }
    function zd(p) {
      const d = String(p?.tagName || "").toLowerCase();
      return p?.isContentEditable || ["input", "select", "textarea", "button"].includes(d);
    }
    function Kg(p) {
      p.key !== "/" || p.metaKey || p.ctrlKey || p.altKey || p.shiftKey || zd(p.target) || (p.preventDefault(), wr.value?.focus(), wr.value?.select?.());
    }
    async function Gg(p) {
      p.key !== "Escape" || document.activeElement !== wr.value || T.q === "" || (p.preventDefault(), ue.value = "", T.q = "", await en(), sn({ currentTarget: wr.value }));
    }
    function Wg(p) {
      if (!Ri.value || p.metaKey || p.ctrlKey || p.altKey)
        return !1;
      if (p.key === "Escape")
        return p.preventDefault(), Jo(), !0;
      if (p.key === "Tab" && ca.value) {
        if (la.value?.focusTrap) return !1;
        const d = la.value?.$refs?.sidebar || la.value?.$el || la.value, s = [...d?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((xe) => !xe.hidden && xe.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const I = s[0], J = s[s.length - 1];
        if (p.shiftKey && (document.activeElement === I || !d.contains(document.activeElement)))
          return p.preventDefault(), J.focus(), !0;
        if (!p.shiftKey && (document.activeElement === J || !d.contains(document.activeElement)))
          return p.preventDefault(), I.focus(), !0;
      }
      return zd(p.target) ? !1 : p.key === "ArrowLeft" && qo.value ? (p.preventDefault(), Qo(qo.value), !0) : p.key === "ArrowRight" && Yo.value ? (p.preventDefault(), Qo(Yo.value), !0) : !1;
    }
    function Ud(p) {
      Wg(p) || (Kg(p), Gg(p));
    }
    Zi(() => {
      window.addEventListener("keydown", Ud), window.addEventListener("popstate", _d), Qn = window.matchMedia?.("(max-width: 1023px)") || null, _r(), Qn?.addEventListener ? Qn.addEventListener("change", _r) : Qn?.addListener?.(_r);
      const p = new URLSearchParams(window.location.search), d = md();
      p.has("item") && d === null ? (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)) : d !== null && yr(d, { historyMode: "none", seed: b.value.find((s) => Number(s.id) === d) || null }), Sr = window.requestAnimationFrame(() => {
        Sr = null, Og();
      });
    }), rr(() => {
      ic = !0, oc(), window.removeEventListener("keydown", Ud), window.removeEventListener("popstate", _d), window.clearTimeout(se), window.clearTimeout(Ne), window.clearTimeout(G), window.clearTimeout(ea), me?.abort(), lt?.abort(), K?.abort(), wi?.abort(), nn += 1, Sr !== null && window.cancelAnimationFrame(Sr), Sr = null, es?.abort(), za?.abort(), za = null, ua += 1, da?.abort(), da = null, Qn?.removeEventListener ? Qn.removeEventListener("change", _r) : Qn?.removeListener?.(_r), Qn = null, Wo = null;
    });
    const Ar = /* @__PURE__ */ Lt({}), xr = /* @__PURE__ */ Lt({});
    async function Bd(p, d) {
      const s = d?.currentTarget?.closest?.("form") || d?.currentTarget;
      if (!s || !p?.starUrl || Ar[p.id]) return;
      const I = !!p.starred;
      Ar[p.id] = !0, xr[p.id] = "", p.starred = !I;
      try {
        (await fetch(p.starUrl, {
          method: "POST",
          body: new FormData(s),
          credentials: "same-origin"
        })).ok || (p.starred = I, xr[p.id] = m("library", "Could not update star. Try again."));
      } catch {
        p.starred = I, xr[p.id] = m("library", "Could not update star. Try again.");
      } finally {
        Ar[p.id] = !1;
      }
    }
    return (p, d) => (y(), Be(g(zT), { "app-name": "library" }, {
      default: Re(() => [
        ye(g(_0), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: Re(() => [
            ye(g(Av), null, {
              default: Re(() => [
                (y(!0), w(ae, null, Ce(Ro.value, (s) => (y(), Be(g(Oh), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                ye(g(Oh), {
                  active: ta.value,
                  href: Ei.value,
                  name: Fa.value > 0 ? `${g(m)("library", "Review")} (${Fa.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Re(() => [
            l("section", JT, [
              l("h2", QT, v(g(m)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(m)("library", "Catalogue search and filters"),
                onSubmit: Oe(Sd, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: T.folder
                }, null, 8, tE),
                (y(!0), w(ae, null, Ce(Ma.value, (s) => (y(), w("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, nE))), 128)),
                T.sort && T.sort !== "title" ? (y(), w("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: T.sort
                }, null, 8, iE)) : D("", !0),
                T.view && T.view !== "compact" ? (y(), w("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: T.view
                }, null, 8, aE)) : D("", !0),
                l("label", {
                  class: "library-quick-filter-search",
                  title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  l("span", null, [
                    Te(v(g(m)("library", "Search")) + " ", 1),
                    d[106] || (d[106] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  Ie(l("input", {
                    ref_key: "quickSearchInput",
                    ref: wr,
                    "onUpdate:modelValue": d[0] || (d[0] = (s) => ue.value = s),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: g(m)("library", "Title, creator, description, filename or folder")
                  }, null, 8, oE), [
                    [ft, ue.value]
                  ])
                ], 8, rE),
                l("label", null, [
                  Te(v(g(m)("library", "Type")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[1] || (d[1] = (s) => T.type = s),
                    name: "type",
                    onChange: d[2] || (d[2] = (s) => sn(s))
                  }, [
                    l("option", sE, v(g(m)("library", "All types")), 1),
                    (y(!0), w(ae, null, Ce(N.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, lE))), 128))
                  ], 544), [
                    [Zt, T.type]
                  ])
                ]),
                l("div", cE, [
                  l("label", uE, v(g(m)("library", "Publisher")), 1),
                  Ie(l("input", {
                    id: "library-publisher-search",
                    "onUpdate:modelValue": d[3] || (d[3] = (s) => ee.value = s),
                    type: "search",
                    name: "publisherSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search publishers"),
                    title: g(m)("library", "Exact publisher matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publisher-suggestions",
                    "aria-activedescendant": Ld("desktop", "publisher"),
                    "aria-expanded": $.value && q.value.length > 0 ? "true" : "false",
                    onFocus: d[4] || (d[4] = (s) => Rd("publisher")),
                    onKeydown: d[5] || (d[5] = (s) => Id(s, "publisher"))
                  }, null, 40, dE), [
                    [ft, ee.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "publisher",
                    value: T.publisher
                  }, null, 8, fE),
                  $.value && q.value.length > 0 ? (y(), w("ul", hE, [
                    (y(!0), w(ae, null, Ce(q.value, (s, I) => (y(), w("li", {
                      id: sc("desktop", "publisher", I),
                      key: s,
                      role: "option",
                      "aria-selected": ei.publisher === I ? "true" : "false"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-publisher-suggestion",
                        onMousedown: d[6] || (d[6] = Oe(() => {
                        }, ["prevent"])),
                        onClick: (J) => Td(s, J)
                      }, v(s), 41, vE)
                    ], 8, pE))), 128))
                  ])) : D("", !0),
                  l("button", gE, v(g(m)("library", "Apply publisher")), 1)
                ]),
                l("div", mE, [
                  l("label", bE, v(g(m)("library", "Series / periodical")), 1),
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
                  }, null, 40, yE), [
                    [ft, re.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "publication",
                    value: T.publication
                  }, null, 8, _E),
                  X.value && Y.value.length > 0 ? (y(), w("ul", wE, [
                    (y(!0), w(ae, null, Ce(Y.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: d[10] || (d[10] = Oe(() => {
                        }, ["prevent"])),
                        onClick: (I) => wd(s, I)
                      }, v(s), 41, SE)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", CE, v(g(m)("library", "Apply series")), 1)
                ]),
                l("div", TE, [
                  l("label", EE, v(g(m)("library", "Publication year")), 1),
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
                    "aria-expanded": dt.value && vn.value.length > 0 ? "true" : "false",
                    onFocus: d[12] || (d[12] = (s) => dt.value = !0),
                    onKeydown: d[13] || (d[13] = nt((s) => dt.value = !1, ["escape"]))
                  }, null, 40, kE), [
                    [ft, et.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "year",
                    value: T.year
                  }, null, 8, AE),
                  dt.value && vn.value.length > 0 ? (y(), w("ul", xE, [
                    (y(!0), w(ae, null, Ce(vn.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: d[14] || (d[14] = Oe(() => {
                        }, ["prevent"])),
                        onClick: (I) => Nd(s, I)
                      }, v(s), 41, OE)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", NE, v(g(m)("library", "Apply year")), 1)
                ]),
                l("div", LE, [
                  l("label", RE, v(g(m)("library", "Creator")), 1),
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
                  }, null, 40, IE), [
                    [ft, de.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "creator",
                    value: T.creator
                  }, null, 8, PE),
                  be.value && Ke.value.length > 0 ? (y(), w("ul", $E, [
                    (y(!0), w(ae, null, Ce(Ke.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: d[18] || (d[18] = Oe(() => {
                        }, ["prevent"])),
                        onClick: (I) => Cd(s, I)
                      }, v(s), 41, FE)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", DE, v(g(m)("library", "Apply creator")), 1)
                ]),
                l("div", ME, [
                  l("label", zE, v(g(m)("library", "Nextcloud tag")), 1),
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
                  }, null, 40, UE), [
                    [ft, $e.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "tag",
                    value: T.tag
                  }, null, 8, BE),
                  He.value && vt.value.length > 0 ? (y(), w("ul", jE, [
                    (y(!0), w(ae, null, Ce(vt.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-tag-suggestion",
                        onMousedown: d[22] || (d[22] = Oe(() => {
                        }, ["prevent"])),
                        onClick: (I) => kd(s, I)
                      }, v(s), 41, HE)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", VE, v(g(m)("library", "Apply tag")), 1)
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Format")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[23] || (d[23] = (s) => T.format = s),
                    name: "format",
                    onChange: d[24] || (d[24] = (s) => sn(s))
                  }, [
                    l("option", KE, v(g(m)("library", "All formats")), 1),
                    (y(!0), w(ae, null, Ce(k.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(Ua(s)), 9, GE))), 128))
                  ], 544), [
                    [Zt, T.format]
                  ])
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Shelf")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[25] || (d[25] = (s) => T.shelf = s),
                    name: "shelf",
                    onChange: d[26] || (d[26] = (s) => sn(s))
                  }, [
                    l("option", WE, v(g(m)("library", "All shelves")), 1),
                    (y(!0), w(ae, null, Ce(C.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, qE))), 128))
                  ], 544), [
                    [Zt, T.shelf]
                  ])
                ]),
                l("div", YE, [
                  l("label", XE, v(g(m)("library", "Folder")), 1),
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
                    "aria-expanded": ut.value && Ft.value.length > 0 ? "true" : "false",
                    onFocus: d[28] || (d[28] = (s) => ut.value = !0),
                    onKeydown: d[29] || (d[29] = nt((s) => ut.value = !1, ["escape"]))
                  }, null, 40, ZE), [
                    [ft, it.value]
                  ]),
                  ut.value && Ft.value.length > 0 ? (y(), w("ul", JE, [
                    (y(!0), w(ae, null, Ce(Ft.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-folder-suggestion",
                        onMousedown: d[30] || (d[30] = Oe(() => {
                        }, ["prevent"])),
                        onClick: (I) => Ad(s, I)
                      }, v(s), 41, QE)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", ek, v(g(m)("library", "Apply folder")), 1)
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Scan status")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[31] || (d[31] = (s) => T.status = s),
                    name: "status",
                    onChange: d[32] || (d[32] = (s) => sn(s))
                  }, [
                    l("option", tk, v(g(m)("library", "All scan statuses")), 1),
                    (y(!0), w(ae, null, Ce(F.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, nk))), 128))
                  ], 544), [
                    [Zt, T.status]
                  ])
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Workflow status")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[33] || (d[33] = (s) => T.workflowStatus = s),
                    name: "workflowStatus",
                    onChange: d[34] || (d[34] = (s) => sn(s))
                  }, [
                    l("option", ik, v(g(m)("library", "All workflow statuses")), 1),
                    (y(!0), w(ae, null, Ce(M.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, ak))), 128))
                  ], 544), [
                    [Zt, T.workflowStatus]
                  ])
                ]),
                l("div", rk, [
                  l("label", ok, v(g(m)("library", "Subject")), 1),
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
                    "aria-expanded": L.value && B.value.length > 0 ? "true" : "false",
                    onFocus: d[36] || (d[36] = (s) => L.value = !0),
                    onKeydown: d[37] || (d[37] = nt((s) => L.value = !1, ["escape"]))
                  }, null, 40, sk), [
                    [ft, x.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "subject",
                    value: T.subject
                  }, null, 8, lk),
                  L.value && B.value.length > 0 ? (y(), w("ul", ck, [
                    (y(!0), w(ae, null, Ce(B.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-subject-suggestion",
                        onMousedown: d[38] || (d[38] = Oe(() => {
                        }, ["prevent"])),
                        onClick: (I) => Od(s, I)
                      }, v(s), 41, uk)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", {
                    type: "button",
                    class: "button secondary library-subject-apply",
                    onClick: Rg
                  }, v(g(m)("library", "Apply subject")), 1)
                ]),
                l("div", dk, [
                  l("label", fk, v(g(m)("library", "Classification")), 1),
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
                  }, null, 40, hk), [
                    [ft, V.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "classification",
                    value: T.classification
                  }, null, 8, pk),
                  he.value && pe.value.length > 0 ? (y(), w("ul", vk, [
                    (y(!0), w(ae, null, Ce(pe.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-classification-suggestion",
                        onMousedown: d[42] || (d[42] = Oe(() => {
                        }, ["prevent"])),
                        onClick: (I) => Ed(s, I)
                      }, v(s), 41, gk)
                    ]))), 128))
                  ])) : D("", !0),
                  l("button", mk, v(g(m)("library", "Apply classification")), 1)
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Suggested updates")), 1),
                  Ie(l("select", {
                    "onUpdate:modelValue": d[43] || (d[43] = (s) => T.scannerConflicts = s),
                    name: "scannerConflicts",
                    onChange: d[44] || (d[44] = (s) => sn(s))
                  }, [
                    l("option", bk, v(g(m)("library", "All metadata")), 1),
                    l("option", yk, v(g(m)("library", "Suggested updates")), 1)
                  ], 544), [
                    [Zt, T.scannerConflicts]
                  ])
                ]),
                l("button", _k, v(g(m)("library", "Apply filters")), 1),
                ce.value.length > 0 ? (y(), w("a", {
                  key: 2,
                  href: Tr(),
                  class: "button secondary",
                  onClick: Oe(Er, ["prevent"])
                }, v(g(m)("library", "Clear")), 9, wk)) : D("", !0)
              ], 40, eE)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: Ti.value
            }, [
              d[107] || (d[107] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, v(g(m)("library", "Settings")), 1)
            ], 8, Sk)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ye(g(F1), null, {
          default: Re(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: h.language || "en",
              dir: h.direction || "ltr",
              tabindex: "-1"
            }, [
              W.value.length > 0 ? (y(), w("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(m)("library", "Active filters")
              }, [
                l("span", null, v(g(m)("library", "Active filters")), 1),
                (y(!0), w(ae, null, Ce(W.value, (s) => (y(), w("a", {
                  key: s.key,
                  href: $d(s.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(m)("library", "Remove filter")}: ${s.label}`,
                  title: s.title,
                  onClick: Oe((I) => Fd(s.key), ["prevent"])
                }, [
                  l("strong", null, [
                    Te(v(s.label), 1),
                    s.displayValue ? (y(), w(ae, { key: 0 }, [
                      Te(":")
                    ], 64)) : D("", !0)
                  ]),
                  s.displayValue ? (y(), w(ae, { key: 0 }, [
                    d[108] || (d[108] = Te(v(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, v(s.displayValue), 9, kk)
                  ], 64)) : D("", !0),
                  d[109] || (d[109] = Te()),
                  d[110] || (d[110] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, Ek))), 128)),
                ce.value.length > 0 ? (y(), w("a", {
                  key: 0,
                  href: Tr(),
                  class: "library-active-filter-clear-all",
                  onClick: Oe(Er, ["prevent"])
                }, v(g(m)("library", "Clear all")), 9, Ak)) : D("", !0)
              ], 8, Tk)) : D("", !0),
              ta.value ? (y(), w("section", xk, [
                l("header", Ok, [
                  l("p", Nk, v(g(m)("library", "Metadata cleanup")), 1),
                  l("h2", Lk, v(g(m)("library", "Review")), 1),
                  l("p", null, v(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                l("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (y(!0), w(ae, null, Ce(mg.value, (s) => (y(), w("a", {
                    key: s.key,
                    class: Ee(["library-review-queue-link", { active: s.active }]),
                    href: s.href,
                    "aria-current": s.active ? "page" : void 0,
                    onClick: Oe((I) => $g(s), ["prevent"])
                  }, [
                    l("span", null, v(s.label), 1),
                    l("b", null, v(Mg(s.countKey)), 1)
                  ], 10, Ik))), 128))
                ], 8, Rk),
                l("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: Oe(Xt, ["prevent"])
                }, [
                  (y(!0), w(ae, null, Ce(lg.value, (s) => (y(), w("input", {
                    key: `review-${s.key}`,
                    type: "hidden",
                    name: s.key,
                    value: s.value
                  }, null, 8, $k))), 128)),
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
                  l("button", Fk, v(g(m)("library", "Apply")), 1)
                ], 40, Pk),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Ot.loading ? "true" : "false"
                }, [
                  Ot.loading ? (y(), w("span", Mk, v(g(m)("library", "Loading review queue…")), 1)) : D("", !0)
                ], 8, Dk),
                Ot.error ? (y(), w("p", zk, v(Ot.error), 1)) : D("", !0),
                Ii.value.enabled ? (y(), w("section", Uk, [
                  l("div", Bk, [
                    l("p", jk, v(g(m)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, v(g(m)("library", "Review next suggestion")), 9, Hk)
                  ]),
                  Ii.value.item ? (y(), w("article", Vk, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", Kk, v(Ii.value.item.title), 1)
                      ]),
                      l("span", Gk, [
                        l("bdi", Wk, v(Ii.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", qk, [
                      (y(!0), w(ae, null, Ce(Ii.value.fields, (s) => (y(), w("article", {
                        key: s.field,
                        class: "library-metadata-review-field"
                      }, [
                        l("h4", null, [
                          l("bdi", Yk, v(s.field), 1)
                        ]),
                        l("dl", null, [
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Current value")), 1),
                            l("dd", null, [
                              l("bdi", Xk, v(s.currentValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Suggested value")), 1),
                            l("dd", null, [
                              l("bdi", Zk, v(s.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Path-based suggestion")), 1),
                            l("dd", null, [
                              l("bdi", Jk, v(s.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Sidecar value")), 1),
                            l("dd", null, [
                              l("bdi", Qk, v(s.sidecarValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Source")), 1),
                            l("dd", null, [
                              l("bdi", eA, v(s.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        l("form", {
                          method: "post",
                          action: Ii.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: kt.value
                          }, null, 8, nA),
                          l("input", {
                            type: "hidden",
                            name: "field",
                            value: s.field
                          }, null, 8, iA),
                          d[111] || (d[111] = l("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          l("button", aA, v(g(m)("library", "Use suggested value")), 1)
                        ], 8, tA)
                      ]))), 128))
                    ]),
                    l("footer", rA, [
                      l("a", {
                        class: "button secondary",
                        href: Ii.value.item.detailsUrl
                      }, v(g(m)("library", "Maintenance")), 9, oA),
                      l("a", {
                        class: "button secondary",
                        href: Ii.value.skipUrl
                      }, v(g(m)("library", "Skip to next suggestion")), 9, sA)
                    ])
                  ])) : D("", !0)
                ])) : D("", !0),
                b.value.length === 0 && !Ot.loading && !Ot.error ? (y(), w("div", lA, [
                  l("h3", null, v(g(m)("library", "This review queue is clear")), 1),
                  l("p", null, v(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  l("a", {
                    class: "button primary",
                    href: wt.value
                  }, v(g(m)("library", "Back to Library")), 9, cA)
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
                          onClick: (I) => zn(s, I)
                        }, [
                          l("bdi", fA, v(s.title), 1)
                        ], 8, dA)
                      ]),
                      s.creators ? (y(), w("p", hA, [
                        l("bdi", pA, v(s.creators), 1)
                      ])) : D("", !0),
                      s.scanError ? (y(), w("p", vA, [
                        l("bdi", gA, v(s.scanError), 1)
                      ])) : D("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (I) => zn(s, I)
                      }, v(g(m)("library", "Details")), 9, mA),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (I) => Jn(s, I)
                      }, v(g(m)("library", "Open")), 9, bA)
                    ])
                  ]))), 128))
                ], 8, uA)),
                b.value.length > 0 ? (y(), w("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  z.value.previousUrl ? (y(), w("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, v(g(m)("library", "Previous")), 9, _A)) : (y(), w("span", wA, v(g(m)("library", "Previous")), 1)),
                  l("span", null, [
                    Te(v(g(m)("library", "Page")) + " " + v(z.value.page), 1),
                    z.value.total > 0 ? (y(), w("span", SA, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : D("", !0)
                  ]),
                  z.value.nextUrl ? (y(), w("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, v(g(m)("library", "Next")), 9, CA)) : (y(), w("span", TA, v(g(m)("library", "Next")), 1))
                ], 8, yA)) : D("", !0)
              ])) : na.value ? (y(), w("main", EA, [
                l("header", kA, [
                  l("p", AA, v(g(m)("library", "Your library")), 1),
                  l("h2", xA, v(g(m)("library", "Home")), 1)
                ]),
                l("section", OA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", NA, v(g(m)("library", "Continue reading")), 1),
                      l("p", LA, v(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    l("a", {
                      href: `${wt.value}?sort=lastOpened`
                    }, v(g(m)("library", "View all")), 9, RA)
                  ]),
                  Ko.value.continueReading.length ? (y(), w("div", IA, [
                    (y(!0), w(ae, null, Ce(Ko.value.continueReading, (s) => (y(), w("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(m)("library", "Details")}: ${s.title}`,
                        onClick: (I) => zn(s, I)
                      }, [
                        l("span", $A, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, FA)
                        ])
                      ], 8, PA),
                      l("div", DA, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (I) => zn(s, I)
                          }, [
                            l("bdi", zA, v(s.title), 1)
                          ], 8, MA)
                        ]),
                        s.creators ? (y(), w("p", UA, [
                          l("bdi", BA, v(s.creators), 1)
                        ])) : D("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (I) => Jn(s, I)
                        }, v(g(m)("library", "Open")), 9, jA)
                      ])
                    ]))), 128))
                  ])) : (y(), w("p", HA, v(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                l("section", VA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", KA, v(g(m)("library", "Recently added")), 1),
                      l("p", GA, v(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    l("a", {
                      href: `${wt.value}?sort=recent`
                    }, v(g(m)("library", "View all")), 9, WA)
                  ]),
                  Ko.value.recentlyAdded.length ? (y(), w("div", qA, [
                    (y(!0), w(ae, null, Ce(Ko.value.recentlyAdded, (s) => (y(), w("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(m)("library", "Details")}: ${s.title}`,
                        onClick: (I) => zn(s, I)
                      }, [
                        l("span", XA, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, ZA)
                        ])
                      ], 8, YA),
                      l("div", JA, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (I) => zn(s, I)
                          }, [
                            l("bdi", e2, v(s.title), 1)
                          ], 8, QA)
                        ]),
                        s.creators ? (y(), w("p", t2, [
                          l("bdi", n2, v(s.creators), 1)
                        ])) : D("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (I) => Jn(s, I)
                        }, v(g(m)("library", "Open")), 9, i2)
                      ])
                    ]))), 128))
                  ])) : (y(), w("p", a2, v(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                l("section", r2, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", o2, v(g(m)("library", "Shelves")), 1),
                      l("p", s2, v(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    l("a", { href: on.value }, v(g(m)("library", "View all")), 9, l2)
                  ]),
                  dd.value.length ? (y(), w("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (y(!0), w(ae, null, Ce(dd.value, (s) => (y(), w("a", {
                      key: s.shelf,
                      href: s.url
                    }, [
                      l("strong", null, [
                        l("bdi", d2, v(s.shelf), 1)
                      ]),
                      l("span", null, v(g(un)("library", "%n item", "%n items", Number(s.itemCount || 0))), 1)
                    ], 8, u2))), 128))
                  ], 8, c2)) : (y(), w("p", f2, v(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(tc.value.count || 0) > 0 ? (y(), w("aside", h2, [
                  l("div", null, [
                    l("h3", p2, v(g(m)("library", "Needs attention")), 1),
                    l("p", v2, v(g(un)("library", "%n publication needs better details.", "%n publications need better details.", Number(tc.value.count || 0))), 1)
                  ]),
                  l("a", {
                    class: "button tertiary",
                    href: tc.value.url
                  }, v(g(m)("library", "Review")), 9, g2)
                ])) : D("", !0)
              ])) : ki.value ? (y(), w("main", m2, [
                l("header", b2, [
                  l("p", y2, v(g(m)("library", "Your library")), 1),
                  l("h2", _2, v(g(m)("library", "Shelves")), 1),
                  l("p", w2, v(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                fd.value.length ? (y(), w("nav", {
                  key: 0,
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  l("ul", C2, [
                    (y(!0), w(ae, null, Ce(fd.value, (s) => (y(), Be(ZT, {
                      key: s.id,
                      node: s,
                      "children-url": Kl.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, S2)) : (y(), w("section", T2, [
                  l("h3", null, v(g(m)("library", "Shelves")), 1),
                  l("p", E2, v(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", k2, [
                    l("a", {
                      class: "button primary",
                      href: Ti.value
                    }, v(g(m)("library", "Add a Library root")), 9, A2),
                    l("a", {
                      class: "button secondary",
                      href: wt.value
                    }, v(g(m)("library", "All publications")), 9, x2)
                  ])
                ]))
              ])) : (y(), w("section", {
                key: 4,
                id: "library-catalogue",
                class: Ee(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Ot.loading }]),
                "aria-labelledby": "library-catalogue-heading",
                "aria-busy": Ot.loading ? "true" : "false"
              }, [
                l("header", N2, [
                  Da.value ? (y(), w("p", L2, v(ur.value), 1)) : D("", !0),
                  l("h2", {
                    id: "library-catalogue-heading",
                    ref_key: "catalogueHeadingElement",
                    ref: ra,
                    tabindex: "-1"
                  }, v(Mo.value), 513)
                ]),
                l("details", {
                  class: "library-mobile-filter-panel",
                  "data-library-control": "filter",
                  onToggle: Mt
                }, [
                  l("summary", {
                    class: "library-mobile-filter-trigger",
                    "aria-label": tt.value
                  }, [
                    l("span", I2, v(g(un)("library", "%n item", "%n items", Number(z.value.total || 0))), 1),
                    l("strong", null, v(Le.value), 1)
                  ], 8, R2),
                  l("form", {
                    method: "get",
                    class: "library-mobile-filter-form",
                    "aria-label": g(m)("library", "Mobile catalogue filters"),
                    onSubmit: Oe(Sd, ["prevent"])
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "folder",
                      value: T.folder
                    }, null, 8, $2),
                    (y(!0), w(ae, null, Ce(Ma.value, (s) => (y(), w("input", {
                      key: `mobile-hidden-${s.key}`,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, F2))), 128)),
                    l("fieldset", D2, [
                      l("legend", null, v(g(m)("library", "Content")), 1),
                      l("label", M2, [
                        l("span", null, v(g(m)("library", "Search")), 1),
                        Ie(l("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: zo,
                          "onUpdate:modelValue": d[46] || (d[46] = (s) => ue.value = s),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder")
                        }, null, 8, z2), [
                          [ft, ue.value]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Type")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[47] || (d[47] = (s) => T.type = s),
                          name: "type",
                          onChange: d[48] || (d[48] = (s) => sn(s))
                        }, [
                          l("option", U2, v(g(m)("library", "All types")), 1),
                          (y(!0), w(ae, null, Ce(N.value, (s) => (y(), w("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, v(s), 9, B2))), 128))
                        ], 544), [
                          [Zt, T.type]
                        ])
                      ]),
                      l("div", j2, [
                        l("label", H2, v(g(m)("library", "Publisher")), 1),
                        Ie(l("input", {
                          id: "library-mobile-publisher-search",
                          "onUpdate:modelValue": d[49] || (d[49] = (s) => ee.value = s),
                          type: "search",
                          name: "publisherSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search publishers"),
                          title: g(m)("library", "Exact publisher matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publisher-suggestions",
                          "aria-activedescendant": Ld("mobile", "publisher"),
                          "aria-expanded": $.value && q.value.length > 0 ? "true" : "false",
                          onFocus: d[50] || (d[50] = (s) => Rd("publisher")),
                          onKeydown: d[51] || (d[51] = (s) => Id(s, "publisher"))
                        }, null, 40, V2), [
                          [ft, ee.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: T.publisher
                        }, null, 8, K2),
                        mt.value && $.value && q.value.length > 0 ? (y(), w("ul", G2, [
                          (y(!0), w(ae, null, Ce(q.value, (s, I) => (y(), w("li", {
                            id: sc("mobile", "publisher", I),
                            key: `mobile-publisher-${s}`,
                            role: "option",
                            "aria-selected": ei.publisher === I ? "true" : "false"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: d[52] || (d[52] = Oe(() => {
                              }, ["prevent"])),
                              onClick: (J) => Td(s, J)
                            }, v(s), 41, q2)
                          ], 8, W2))), 128))
                        ])) : D("", !0)
                      ]),
                      l("div", Y2, [
                        l("label", X2, v(g(m)("library", "Series / periodical")), 1),
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
                        }, null, 40, Z2), [
                          [ft, re.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publication",
                          value: T.publication
                        }, null, 8, J2),
                        mt.value && X.value && Y.value.length > 0 ? (y(), w("ul", Q2, [
                          (y(!0), w(ae, null, Ce(Y.value, (s) => (y(), w("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: d[56] || (d[56] = Oe(() => {
                              }, ["prevent"])),
                              onClick: (I) => wd(s, I)
                            }, v(s), 41, ex)
                          ]))), 128))
                        ])) : D("", !0)
                      ]),
                      l("div", tx, [
                        l("label", nx, v(g(m)("library", "Publication year")), 1),
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
                          "aria-expanded": dt.value && vn.value.length > 0 ? "true" : "false",
                          onFocus: d[58] || (d[58] = (s) => dt.value = !0),
                          onKeydown: d[59] || (d[59] = nt((s) => dt.value = !1, ["escape"]))
                        }, null, 40, ix), [
                          [ft, et.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "year",
                          value: T.year
                        }, null, 8, ax),
                        mt.value && dt.value && vn.value.length > 0 ? (y(), w("ul", rx, [
                          (y(!0), w(ae, null, Ce(vn.value, (s) => (y(), w("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: d[60] || (d[60] = Oe(() => {
                              }, ["prevent"])),
                              onClick: (I) => Nd(s, I)
                            }, v(s), 41, ox)
                          ]))), 128))
                        ])) : D("", !0)
                      ]),
                      l("div", sx, [
                        l("label", lx, v(g(m)("library", "Creator")), 1),
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
                        }, null, 40, cx), [
                          [ft, de.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "creator",
                          value: T.creator
                        }, null, 8, ux),
                        mt.value && be.value && Ke.value.length > 0 ? (y(), w("ul", dx, [
                          (y(!0), w(ae, null, Ce(Ke.value, (s) => (y(), w("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: d[64] || (d[64] = Oe(() => {
                              }, ["prevent"])),
                              onClick: (I) => Cd(s, I)
                            }, v(s), 41, fx)
                          ]))), 128))
                        ])) : D("", !0)
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Format")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[65] || (d[65] = (s) => T.format = s),
                          name: "format",
                          onChange: d[66] || (d[66] = (s) => sn(s))
                        }, [
                          l("option", hx, v(g(m)("library", "All formats")), 1),
                          (y(!0), w(ae, null, Ce(k.value, (s) => (y(), w("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, v(Ua(s)), 9, px))), 128))
                        ], 544), [
                          [Zt, T.format]
                        ])
                      ]),
                      l("div", vx, [
                        l("label", gx, v(g(m)("library", "Subject")), 1),
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
                          "aria-expanded": L.value && B.value.length > 0 ? "true" : "false",
                          onFocus: d[68] || (d[68] = (s) => L.value = !0),
                          onKeydown: d[69] || (d[69] = nt((s) => L.value = !1, ["escape"]))
                        }, null, 40, mx), [
                          [ft, x.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "subject",
                          value: T.subject
                        }, null, 8, bx),
                        mt.value && L.value && B.value.length > 0 ? (y(), w("ul", yx, [
                          (y(!0), w(ae, null, Ce(B.value, (s) => (y(), w("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: d[70] || (d[70] = Oe(() => {
                              }, ["prevent"])),
                              onClick: (I) => Od(s, I)
                            }, v(s), 41, _x)
                          ]))), 128))
                        ])) : D("", !0)
                      ]),
                      l("div", wx, [
                        l("label", Sx, v(g(m)("library", "Classification")), 1),
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
                        }, null, 40, Cx), [
                          [ft, V.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "classification",
                          value: T.classification
                        }, null, 8, Tx),
                        mt.value && he.value && pe.value.length > 0 ? (y(), w("ul", Ex, [
                          (y(!0), w(ae, null, Ce(pe.value, (s) => (y(), w("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: d[74] || (d[74] = Oe(() => {
                              }, ["prevent"])),
                              onClick: (I) => Ed(s, I)
                            }, v(s), 41, kx)
                          ]))), 128))
                        ])) : D("", !0)
                      ])
                    ]),
                    l("fieldset", Ax, [
                      l("legend", null, v(g(m)("library", "Location")), 1),
                      l("label", null, [
                        Te(v(g(m)("library", "Shelf")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[75] || (d[75] = (s) => T.shelf = s),
                          name: "shelf",
                          onChange: d[76] || (d[76] = (s) => sn(s))
                        }, [
                          l("option", xx, v(g(m)("library", "All shelves")), 1),
                          (y(!0), w(ae, null, Ce(C.value, (s) => (y(), w("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, v(s), 9, Ox))), 128))
                        ], 544), [
                          [Zt, T.shelf]
                        ])
                      ]),
                      l("div", Nx, [
                        l("label", Lx, v(g(m)("library", "Folder")), 1),
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
                          "aria-expanded": ut.value && Ft.value.length > 0 ? "true" : "false",
                          onFocus: d[78] || (d[78] = (s) => ut.value = !0),
                          onKeydown: d[79] || (d[79] = nt((s) => ut.value = !1, ["escape"]))
                        }, null, 40, Rx), [
                          [ft, it.value]
                        ]),
                        mt.value && ut.value && Ft.value.length > 0 ? (y(), w("ul", Ix, [
                          (y(!0), w(ae, null, Ce(Ft.value, (s) => (y(), w("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: d[80] || (d[80] = Oe(() => {
                              }, ["prevent"])),
                              onClick: (I) => Ad(s, I)
                            }, v(s), 41, Px)
                          ]))), 128))
                        ])) : D("", !0)
                      ])
                    ]),
                    l("fieldset", $x, [
                      l("legend", null, v(g(m)("library", "Review")), 1),
                      l("label", null, [
                        Te(v(g(m)("library", "Scan status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[81] || (d[81] = (s) => T.status = s),
                          name: "status",
                          onChange: d[82] || (d[82] = (s) => sn(s))
                        }, [
                          l("option", Fx, v(g(m)("library", "All scan statuses")), 1),
                          (y(!0), w(ae, null, Ce(F.value, (s) => (y(), w("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, v(s), 9, Dx))), 128))
                        ], 544), [
                          [Zt, T.status]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Workflow status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[83] || (d[83] = (s) => T.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: d[84] || (d[84] = (s) => sn(s))
                        }, [
                          l("option", Mx, v(g(m)("library", "All workflow statuses")), 1),
                          (y(!0), w(ae, null, Ce(M.value, (s) => (y(), w("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, v(s), 9, zx))), 128))
                        ], 544), [
                          [Zt, T.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Suggested updates")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[85] || (d[85] = (s) => T.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: d[86] || (d[86] = (s) => sn(s))
                        }, [
                          l("option", Ux, v(g(m)("library", "All metadata")), 1),
                          l("option", Bx, v(g(m)("library", "Suggested updates")), 1)
                        ], 544), [
                          [Zt, T.scannerConflicts]
                        ])
                      ])
                    ]),
                    l("fieldset", jx, [
                      l("legend", null, v(g(m)("library", "Personal / display")), 1),
                      l("div", Hx, [
                        l("label", Vx, v(g(m)("library", "Nextcloud tag")), 1),
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
                        }, null, 40, Kx), [
                          [ft, $e.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "tag",
                          value: T.tag
                        }, null, 8, Gx),
                        He.value && vt.value.length > 0 ? (y(), w("ul", Wx, [
                          (y(!0), w(ae, null, Ce(vt.value, (s) => (y(), w("li", {
                            key: s,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-tag-suggestion",
                              onMousedown: d[90] || (d[90] = Oe(() => {
                              }, ["prevent"])),
                              onClick: (I) => kd(s, I)
                            }, v(s), 41, qx)
                          ]))), 128))
                        ])) : D("", !0),
                        l("button", Yx, v(g(m)("library", "Apply tag")), 1)
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Sort")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[91] || (d[91] = (s) => T.sort = s),
                          name: "sort",
                          onChange: Xt
                        }, [
                          l("option", Xx, v(g(m)("library", "Title")), 1),
                          l("option", Zx, v(g(m)("library", "Date added")), 1),
                          l("option", Jx, v(g(m)("library", "Publication date")), 1),
                          l("option", Qx, v(g(m)("library", "Series")), 1),
                          l("option", eO, v(g(m)("library", "Recently opened")), 1),
                          l("option", tO, v(g(m)("library", "Format")), 1)
                        ], 544), [
                          [Zt, T.sort]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "View")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": d[92] || (d[92] = (s) => T.view = s),
                          name: "view",
                          onChange: Xt
                        }, [
                          l("option", nO, v(g(m)("library", "Compact")), 1),
                          l("option", iO, v(g(m)("library", "Gallery")), 1),
                          l("option", aO, v(g(m)("library", "List")), 1),
                          l("option", rO, v(g(m)("library", "Shelf")), 1)
                        ], 544), [
                          [Zt, T.view]
                        ])
                      ])
                    ]),
                    l("div", oO, [
                      ce.value.length > 0 ? (y(), w("a", {
                        key: 0,
                        href: Tr(),
                        class: "button secondary library-mobile-filter-clear",
                        onClick: Oe(Er, ["prevent"])
                      }, v(g(m)("library", "Clear all")), 9, sO)) : D("", !0),
                      l("button", lO, v(ct.value), 1)
                    ])
                  ], 40, P2)
                ], 32),
                l("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  l("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: Oe(Xt, ["prevent"])
                  }, [
                    (y(!0), w(ae, null, Ce(xt.value, (s) => (y(), w("input", {
                      key: s.key,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, dO))), 128)),
                    l("label", fO, [
                      Te(v(g(m)("library", "Sort")), 1),
                      Ie(l("select", {
                        "onUpdate:modelValue": d[93] || (d[93] = (s) => T.sort = s),
                        name: "sort",
                        onChange: Xt
                      }, [
                        l("option", hO, v(g(m)("library", "Title")), 1),
                        l("option", pO, v(g(m)("library", "Date added")), 1),
                        l("option", vO, v(g(m)("library", "Publication date")), 1),
                        l("option", gO, v(g(m)("library", "Series")), 1),
                        l("option", mO, v(g(m)("library", "Recently opened")), 1),
                        l("option", bO, v(g(m)("library", "Format")), 1)
                      ], 544), [
                        [Zt, T.sort]
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
                        class: Ee({ active: At.value === "compact" }),
                        "aria-pressed": At.value === "compact" ? "true" : "false",
                        onClick: d[94] || (d[94] = (s) => ts("compact"))
                      }, v(g(m)("library", "Compact")), 11, _O),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ee({ active: At.value === "gallery" }),
                        "aria-pressed": At.value === "gallery" ? "true" : "false",
                        onClick: d[95] || (d[95] = (s) => ts("gallery"))
                      }, v(g(m)("library", "Gallery")), 11, wO),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ee({ active: At.value === "list" }),
                        "aria-pressed": At.value === "list" ? "true" : "false",
                        onClick: d[96] || (d[96] = (s) => ts("list"))
                      }, v(g(m)("library", "List")), 11, SO),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ee({ active: At.value === "shelf" }),
                        "aria-pressed": At.value === "shelf" ? "true" : "false",
                        onClick: d[97] || (d[97] = (s) => ts("shelf"))
                      }, v(g(m)("library", "Shelf")), 11, CO)
                    ], 8, yO)
                  ], 40, uO),
                  l("section", TO, [
                    l("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, v(g(m)("library", "Collections")), 9, EO),
                    l("form", {
                      method: "post",
                      action: Jl.value,
                      class: "library-saved-collection-save-form",
                      title: uc.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: kt.value
                      }, null, 8, AO),
                      l("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: zg.value
                      }, null, 8, xO),
                      l("label", null, [
                        Te(v(g(m)("library", "Collection name")), 1),
                        l("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !uc.value,
                          autocomplete: "off"
                        }, null, 8, OO)
                      ]),
                      l("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !uc.value,
                        title: g(m)("library", "Save current view")
                      }, v(g(m)("library", "Save")), 9, NO)
                    ], 8, kO),
                    pr.value.length > 0 ? (y(), w("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (y(!0), w(ae, null, Ce(pr.value, (s) => (y(), w("article", {
                        key: s.id,
                        class: "library-saved-collection-card"
                      }, [
                        l("a", {
                          class: "library-saved-collection-link",
                          href: Bg(s.filters)
                        }, [
                          l("strong", null, v(s.name), 1),
                          l("span", IO, v(s.countPending ? "—" : g(un)("library", "%n item", "%n items", Number(s.count || 0))), 1)
                        ], 8, RO),
                        l("form", {
                          method: "post",
                          action: jg(s.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: kt.value
                          }, null, 8, $O),
                          l("button", FO, v(g(m)("library", "Delete")), 1)
                        ], 8, PO)
                      ]))), 128))
                    ], 8, LO)) : D("", !0)
                  ]),
                  An.value.length > 0 ? (y(), w("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    l("summary", MO, [
                      d[112] || (d[112] = l("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      l("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, v(g(m)("library", "Batch actions")), 9, zO),
                      l("small", UO, v(g(m)("library", "Batch actions for selected publications")), 1),
                      l("b", BO, v(g(un)("library", "%n publication selected", "%n publications selected", An.value.length)), 1)
                    ]),
                    l("p", jO, v(g(un)("library", "%n publication selected", "%n publications selected", An.value.length)), 1),
                    l("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: dg
                    }, [
                      l("form", {
                        method: "post",
                        action: Yl.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: kt.value
                        }, null, 8, VO),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, KO)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, v(g(m)("library", "Apply")), 9, GO)
                      ], 8, HO),
                      l("form", {
                        method: "post",
                        action: Xl.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: kt.value
                        }, null, 8, qO),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, YO)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, v(g(m)("library", "Remove")), 9, XO)
                      ], 8, WO),
                      l("form", {
                        method: "post",
                        action: Zl.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: kt.value
                        }, null, 8, JO),
                        (y(!0), w(ae, null, Ce(Vo.value, (s) => (y(), w("input", {
                          key: `reset-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, QO))), 128)),
                        d[113] || (d[113] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, v(g(m)("library", "Reset metadata")), 9, e3)
                      ], 8, ZO),
                      l("form", {
                        method: "post",
                        action: Dn.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: kt.value
                        }, null, 8, n3),
                        (y(!0), w(ae, null, Ce(Vo.value, (s) => (y(), w("input", {
                          key: `edit-preview-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, i3))), 128)),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Field")), 1),
                          l("select", a3, [
                            l("option", r3, v(g(m)("library", "Publication type")), 1),
                            l("option", o3, v(g(m)("library", "Subtitle")), 1),
                            l("option", s3, v(g(m)("library", "Creators")), 1),
                            l("option", l3, v(g(m)("library", "Series / periodical")), 1),
                            l("option", c3, v(g(m)("library", "Publication date")), 1),
                            l("option", u3, v(g(m)("library", "Language")), 1),
                            l("option", d3, v(g(m)("library", "Publisher")), 1),
                            l("option", f3, v(g(m)("library", "Subjects")), 1),
                            l("option", h3, v(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, p3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, v(g(m)("library", "Preview edit")), 9, v3)
                      ], 8, t3),
                      l("form", {
                        method: "post",
                        action: Fo.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: kt.value
                        }, null, 8, m3),
                        (y(!0), w(ae, null, Ce(Vo.value, (s) => (y(), w("input", {
                          key: `cover-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, b3))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, v(g(m)("library", "Fresh covers")), 9, y3)
                      ], 8, g3)
                    ], 32)
                  ], 8, DO)) : D("", !0)
                ], 8, cO),
                hr.value ? (y(), w("p", _3, v(hr.value), 1)) : D("", !0),
                Ho.value ? (y(), w("p", w3, v(Ho.value), 1)) : D("", !0),
                fr.value ? (y(), w("p", S3, v(fr.value), 1)) : D("", !0),
                l("div", C3, [
                  Ot.loading ? (y(), w("span", T3, v(g(m)("library", "Updating catalogue…")), 1)) : Ot.completed ? (y(), w("span", E3, v(g(un)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(z.value.total || 0))), 1)) : D("", !0)
                ]),
                Da.value ? (y(), w("section", k3, [
                  l("p", A3, v(ur.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: Oi.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : cr.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, v(Do.value), 9, x3),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    l("span", null, v(g(un)("library", "%n item", "%n items", z.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (y(), w("span", N3, v(O.value.earliestYear) + "–" + v(O.value.latestYear), 1)) : D("", !0),
                    O.value?.datedCount ? (y(), w("span", L3, v(O.value.datedCount) + " " + v(g(m)("library", "dated")), 1)) : D("", !0),
                    O.value?.undatedCount > 0 ? (y(), w("span", R3, v(O.value.undatedCount) + " " + v(g(m)("library", "undated")), 1)) : D("", !0)
                  ], 8, O3),
                  kn.value && O.value ? (y(), w("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, v(g(m)("library", "Publication contents")), 1),
                    l("span", null, v(g(un)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (y(), w("span", P3, v(O.value.earliestYear) + "–" + v(O.value.latestYear), 1)) : D("", !0),
                    l("span", null, v(O.value.datedCount) + " " + v(g(m)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (y(), w("span", $3, v(O.value.undatedCount) + " " + v(g(m)("library", "without dates yet")), 1)) : D("", !0),
                    l("span", null, v(g(m)("library", "read-only grouping")), 1)
                  ], 8, I3)) : D("", !0),
                  kn.value && O.value?.issueGroups?.length ? (y(), w("section", F3, [
                    l("div", null, [
                      l("p", D3, v(g(m)("library", "Issue order")), 1),
                      l("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, v(g(m)("library", "Read-only issue/date grouping")), 9, M3)
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
                        l("small", null, v(g(un)("library", "%n item", "%n items", s.items?.length || 0)), 1)
                      ], 8, U3))), 128))
                    ], 8, z3),
                    O.value.gapRanges?.length ? (y(), w("p", B3, v(g(m)("library", "Gap")) + ": " + v(O.value.gapRanges.join(", ")), 1)) : D("", !0),
                    (y(!0), w(ae, null, Ce(O.value.issueGroups, (s) => (y(), w("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, v(s.label), 1),
                      l("ol", null, [
                        (y(!0), w(ae, null, Ce(s.items, (I, J) => (y(), w("li", {
                          key: I.itemId
                        }, [
                          l("span", j3, v(I.issueLabel), 1),
                          l("a", {
                            href: I.detailsUrl || "#"
                          }, v(I.title), 9, H3),
                          l("small", null, [
                            Te(v(I.publicationType), 1),
                            I.publicationDate ? (y(), w(ae, { key: 0 }, [
                              Te(" · " + v(I.publicationDate), 1)
                            ], 64)) : D("", !0)
                          ]),
                          l("small", V3, [
                            J > 0 ? (y(), w(ae, { key: 0 }, [
                              Te(v(g(m)("library", "Previous issue")), 1)
                            ], 64)) : D("", !0),
                            J > 0 && J < s.items.length - 1 ? (y(), w(ae, { key: 1 }, [
                              Te(" · ")
                            ], 64)) : D("", !0),
                            J < s.items.length - 1 ? (y(), w(ae, { key: 2 }, [
                              Te(v(g(m)("library", "Next issue")), 1)
                            ], 64)) : D("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (y(), w("details", K3, [
                      l("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, v(g(m)("library", "Unknown issue/date")) + " · " + v(O.value.unknownIssueItems.length), 9, G3)
                    ])) : D("", !0)
                  ])) : D("", !0),
                  l("p", null, [
                    l("a", {
                      href: wt.value,
                      class: "button secondary library-discovery-back-link"
                    }, v(g(m)("library", "Back to full catalogue")), 9, W3)
                  ])
                ])) : D("", !0),
                l("div", q3, [
                  l("p", Y3, [
                    Te(v(g(m)("library", "Showing")) + " " + v(z.value.from) + "–" + v(z.value.to) + " " + v(g(m)("library", "of")) + " " + v(z.value.total) + " " + v(g(m)("library", "catalogue items")), 1),
                    ce.value.length > 0 ? (y(), w("span", X3, [
                      d[114] || (d[114] = Te(" · ", -1)),
                      l("a", {
                        href: Tr(),
                        onClick: Oe(Er, ["prevent"])
                      }, v(g(m)("library", "Clear all filters")), 9, Z3)
                    ])) : D("", !0)
                  ]),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    l("span", Q3, [
                      Te(v(g(m)("library", "Page")) + " " + v(z.value.page), 1),
                      z.value.total > 0 ? (y(), w("span", eN, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : D("", !0)
                    ]),
                    z.value.previousUrl ? (y(), w("a", {
                      key: 0,
                      href: z.value.previousUrl
                    }, v(g(m)("library", "Previous")), 9, tN)) : (y(), w("span", nN, v(g(m)("library", "Previous")), 1)),
                    z.value.nextUrl ? (y(), w("a", {
                      key: 2,
                      href: z.value.nextUrl
                    }, v(g(m)("library", "Next")), 9, iN)) : (y(), w("span", aN, v(g(m)("library", "Next")), 1))
                  ], 8, J3)
                ]),
                b.value.length === 0 ? (y(), w("div", {
                  key: 4,
                  class: Ee(["library-empty-content", { "library-first-run-guidance": Ni.value || Mn.value, "library-filter-empty-state": Li.value && !Ni.value && !Mn.value }]),
                  role: "status"
                }, [
                  Ni.value ? (y(), w(ae, { key: 0 }, [
                    l("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, v(g(m)("library", "Start with one Library root")), 9, rN),
                    l("p", oN, [
                      l("a", {
                        href: Ti.value,
                        class: "button primary"
                      }, v(g(m)("library", "Add a Library root")), 9, sN),
                      l("span", lN, v(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Mn.value ? (y(), w(ae, { key: 1 }, [
                    l("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, v(g(m)("library", "No enabled Library roots")), 9, cN),
                    l("p", uN, [
                      l("a", {
                        href: Ti.value,
                        class: "button primary"
                      }, v(g(m)("library", "Open Library settings")), 9, dN)
                    ])
                  ], 64)) : Li.value ? (y(), w(ae, { key: 2 }, [
                    l("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, v(g(m)("library", "No matches for the current filters")), 9, fN),
                    l("p", hN, [
                      l("a", {
                        href: Fg(),
                        class: "button secondary",
                        onClick: d[98] || (d[98] = Oe((s) => Fd("q"), ["prevent"]))
                      }, v(g(m)("library", "Clear search")), 9, pN),
                      ce.value.length > 0 ? (y(), w("a", {
                        key: 0,
                        href: Tr(),
                        class: "button primary",
                        onClick: Oe(Er, ["prevent"])
                      }, v(g(m)("library", "Clear all filters")), 9, vN)) : D("", !0)
                    ])
                  ], 64)) : (y(), w(ae, { key: 3 }, [
                    l("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, v(g(m)("library", "No catalogue items yet")), 9, gN),
                    l("p", mN, [
                      l("a", {
                        href: Ti.value,
                        class: "button primary"
                      }, v(g(m)("library", "Run a scan from settings")), 9, bN)
                    ])
                  ], 64))
                ], 2)) : D("", !0),
                b.value.length > 0 ? (y(), w("label", yN, [
                  l("input", {
                    type: "checkbox",
                    checked: An.value.length === b.value.length,
                    onChange: cg
                  }, null, 40, _N),
                  Te(" " + v(g(m)("library", "Select all publications on this page")), 1)
                ])) : D("", !0),
                b.value.length > 0 && At.value === "list" ? (y(), w("ul", wN, [
                  (y(!0), w(ae, null, Ce(b.value, (s) => (y(), w("li", {
                    key: s.id,
                    class: Ee(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Go.value.has(Number(s.id)), "library-catalogue-list-row--open": Ri.value && Number(oa.value) === Number(s.id) }])
                  }, [
                    l("label", SN, [
                      l("input", {
                        type: "checkbox",
                        checked: Go.value.has(Number(s.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${s.title}`,
                        onChange: (I) => hd(s.id, I.currentTarget.checked)
                      }, null, 40, CN)
                    ]),
                    l("div", TN, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (I) => zn(s, I)
                      }, [
                        l("bdi", kN, v(s.title), 1)
                      ], 8, EN),
                      s.creators ? (y(), w("span", AN, [
                        l("bdi", xN, v(s.creators), 1)
                      ])) : D("", !0)
                    ]),
                    l("dl", ON, [
                      s.publication ? (y(), w("div", NN, [
                        l("dt", null, v(g(m)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", LN, v(s.publication), 1)
                        ])
                      ])) : D("", !0),
                      s.publicationDate ? (y(), w("div", RN, [
                        l("dt", null, v(g(m)("library", "Publication date")), 1),
                        l("dd", null, v(s.publicationDate), 1)
                      ])) : D("", !0),
                      s.extension || s.publicationType ? (y(), w("div", IN, [
                        l("dt", null, v(g(m)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: Ee(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, v(s.extension ? Ua(s.extension) : s.publicationType), 11, PN)
                        ])
                      ])) : D("", !0),
                      s.shelf ? (y(), w("div", $N, [
                        l("dt", null, v(g(m)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", FN, v(s.shelf), 1)
                        ])
                      ])) : D("", !0)
                    ]),
                    l("div", DN, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (I) => Jn(s, I)
                      }, v(g(m)("library", "Open")), 9, MN),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (I) => zn(s, I)
                      }, v(g(m)("library", "Details")), 9, zN)
                    ])
                  ], 2))), 128))
                ])) : b.value.length > 0 ? (y(), w("div", {
                  key: 7,
                  class: Ee(["library-cover-gallery", gr.value])
                }, [
                  (y(!0), w(ae, null, Ce(b.value, (s) => (y(), w("article", {
                    key: s.id,
                    class: Ee(["library-cover-card", { "library-cover-card--cover-loaded": kr(s) === "loaded", "library-cover-card--cover-error": kr(s) === "error", "library-cover-card--selected": Go.value.has(Number(s.id)), "library-cover-card--open": Ri.value && Number(oa.value) === Number(s.id) }])
                  }, [
                    l("label", UN, [
                      l("input", {
                        type: "checkbox",
                        checked: Go.value.has(Number(s.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${s.title}`,
                        onChange: (I) => hd(s.id, I.currentTarget.checked)
                      }, null, 40, BN)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": Ri.value && Number(oa.value) === Number(s.id) ? "true" : "false",
                      onClick: (I) => zn(s, I)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, v(g(m)("library", "Details")), 9, HN),
                      l("span", VN, [
                        kr(s) === "loading" ? (y(), w("span", KN)) : D("", !0),
                        l("img", {
                          class: Ee(["library-cover-image", { "library-cover-image--loaded": kr(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (I) => Hg(s),
                          onError: (I) => Vg(s)
                        }, null, 42, GN),
                        kr(s) === "error" ? (y(), w("span", WN, v(g(m)("library", "Cover unavailable")), 1)) : D("", !0)
                      ])
                    ], 8, jN),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Oe((I) => Bd(s, I), ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: kt.value
                      }, null, 8, YN),
                      d[115] || (d[115] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("input", {
                        type: "hidden",
                        name: "starred",
                        value: s.starred ? "0" : "1"
                      }, null, 8, XN),
                      l("button", {
                        type: "submit",
                        class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": s.starred }]),
                        "aria-pressed": s.starred ? "true" : "false",
                        title: s.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": s.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": Ar[s.id] ? "true" : void 0,
                        disabled: Ar[s.id],
                        onClick: Oe((I) => Bd(s, I), ["prevent"])
                      }, v(s.starred ? "★" : "☆"), 11, ZN),
                      xr[s.id] ? (y(), w("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, v(xr[s.id]), 9, JN)) : D("", !0)
                    ], 40, qN),
                    l("div", QN, [
                      l("div", eL, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (I) => zn(s, I)
                          }, [
                            l("bdi", iL, v(s.title), 1)
                          ], 8, nL)
                        ], 8, tL),
                        s.creators ? (y(), w("p", aL, [
                          l("bdi", rL, v(s.creators), 1)
                        ])) : D("", !0),
                        dc(s) || s.extension ? (y(), w("div", oL, [
                          s.extension ? (y(), w("span", sL, [
                            l("bdi", lL, v(Ua(s.extension)), 1)
                          ])) : D("", !0),
                          dc(s) ? (y(), w("p", cL, [
                            l("bdi", uL, v(dc(s)), 1)
                          ])) : D("", !0)
                        ])) : D("", !0),
                        l("div", dL, [
                          l("a", {
                            class: "library-cover-read",
                            href: s.openUrl,
                            onClick: (I) => Jn(s, I)
                          }, v(g(m)("library", "Open")), 9, fL),
                          ye(g(qs), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: Re(() => [
                              ye(g(Ga), {
                                href: s.filesUrl
                              }, {
                                default: Re(() => [
                                  Te(v(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(Ga), {
                                href: s.downloadUrl
                              }, {
                                default: Re(() => [
                                  Te(v(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(Ga), {
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
                  l("span", pL, [
                    Te(v(g(m)("library", "Page")) + " " + v(z.value.page), 1),
                    z.value.total > 0 ? (y(), w("span", vL, " · " + v(z.value.from) + "–" + v(z.value.to), 1)) : D("", !0)
                  ]),
                  z.value.previousUrl ? (y(), w("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, v(g(m)("library", "Previous")), 9, gL)) : (y(), w("span", mL, v(g(m)("library", "Previous")), 1)),
                  z.value.nextUrl ? (y(), w("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, v(g(m)("library", "Next")), 9, bL)) : (y(), w("span", yL, v(g(m)("library", "Next")), 1))
                ], 8, hL)) : D("", !0)
              ], 10, O2))
            ], 8, Ck)
          ]),
          _: 1
        }),
        ye(g(CT), {
          ref_key: "sidebarComponent",
          ref: la,
          class: "library-native-item-sidebar",
          open: Ri.value,
          "no-toggle": "",
          loading: Yt.loading,
          name: Ae.value?.title || g(m)("library", "Publication details"),
          subname: Ae.value?.creators || "",
          role: ca.value ? "dialog" : void 0,
          "aria-modal": ca.value ? "true" : void 0,
          "aria-labelledby": ca.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": ca.value && Ae.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: yd,
          onClosed: bg,
          onClose: Jo
        }, {
          default: Re(() => [
            l("div", _L, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: pd,
                class: "hidden-visually",
                tabindex: "-1"
              }, v(Ae.value?.title || g(m)("library", "Publication details")), 513),
              Yt.loading && !Ae.value ? (y(), w("p", wL, v(g(m)("library", "Loading publication details…")), 1)) : Yt.error ? (y(), w("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Yt.missing ? "status" : "alert"
              }, [
                l("p", null, v(Yt.error), 1),
                Yt.missing ? D("", !0) : (y(), w("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: d[99] || (d[99] = (s) => yr(oa.value, { historyMode: "none" }))
                }, v(g(m)("library", "Try again")), 1))
              ], 8, SL)) : Ae.value ? (y(), w(ae, { key: 2 }, [
                l("p", CL, v(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", TL, [
                  l("span", EL, v(g(m)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Ae.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, kL),
                  l("div", AL, [
                    l("p", xL, [
                      l("bdi", OL, v(Ae.value.publicationType || g(m)("library", "Publication")), 1),
                      Ae.value.extension ? (y(), w("span", NL, [
                        d[116] || (d[116] = Te(" · ", -1)),
                        l("bdi", LL, v(Ua(Ae.value.extension)), 1)
                      ])) : D("", !0)
                    ]),
                    l("div", RL, [
                      l("a", {
                        class: "button primary",
                        href: Ae.value.openUrl,
                        onClick: d[100] || (d[100] = (s) => Jn(Ae.value, s))
                      }, v(g(m)("library", "Open")), 9, IL),
                      ye(g(qs), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: Re(() => [
                          ye(g(Ga), {
                            href: Ae.value.filesUrl
                          }, {
                            default: Re(() => [
                              Te(v(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(Ga), {
                            href: Ae.value.downloadUrl
                          }, {
                            default: Re(() => [
                              Te(v(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(Ga), {
                            href: Ae.value.detailsUrl
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
                  (y(), w(ae, null, Ce(hg, (s) => l("button", {
                    key: s.key,
                    type: "button",
                    class: Ee({ active: sa.value === s.key }),
                    "aria-current": sa.value === s.key ? "page" : void 0,
                    onClick: (I) => sa.value = s.key
                  }, v(g(m)("library", s.label)), 11, $L)), 64))
                ], 8, PL),
                sa.value === "overview" ? (y(), w("section", FL, [
                  l("h3", DL, v(g(m)("library", "Overview")), 1),
                  Ae.value.description ? (y(), w("p", ML, [
                    l("bdi", zL, v(Ae.value.description), 1)
                  ])) : D("", !0),
                  l("dl", UL, [
                    Ae.value.publication ? (y(), w("div", BL, [
                      l("dt", null, v(g(m)("library", "Series")), 1),
                      l("dd", null, v(Ae.value.publication), 1)
                    ])) : D("", !0),
                    Ae.value.publicationDate ? (y(), w("div", jL, [
                      l("dt", null, v(g(m)("library", "Date")), 1),
                      l("dd", null, v(Ae.value.publicationDate), 1)
                    ])) : D("", !0),
                    Ae.value.publisher ? (y(), w("div", HL, [
                      l("dt", null, v(g(m)("library", "Publisher")), 1),
                      l("dd", null, v(Ae.value.publisher), 1)
                    ])) : D("", !0),
                    Ae.value.language ? (y(), w("div", VL, [
                      l("dt", null, v(g(m)("library", "Language")), 1),
                      l("dd", null, v(Ae.value.language), 1)
                    ])) : D("", !0),
                    Ae.value.shelf ? (y(), w("div", KL, [
                      l("dt", null, v(g(m)("library", "Shelf")), 1),
                      l("dd", null, v(Ae.value.shelf), 1)
                    ])) : D("", !0)
                  ])
                ])) : sa.value === "metadata" ? (y(), w("section", GL, [
                  l("h3", WL, v(g(m)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Oe(gg, ["prevent"])
                  }, [
                    l("label", null, [
                      Te(v(g(m)("library", "Title")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": d[101] || (d[101] = (s) => Ut.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ft, Ut.title]
                      ])
                    ]),
                    l("label", null, [
                      Te(v(g(m)("library", "Publication date")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": d[102] || (d[102] = (s) => Ut.publicationDate = s),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, qL), [
                        [ft, Ut.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, v(g(m)("library", "Identifiers")), 1),
                      (y(!0), w(ae, null, Ce(Ut.identifiers, (s, I) => (y(), w("div", {
                        key: I,
                        class: "library-sidebar-identifier"
                      }, [
                        Ie(l("input", {
                          "onUpdate:modelValue": (J) => s.scheme = J,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, YL), [
                          [ft, s.scheme]
                        ]),
                        Ie(l("input", {
                          "onUpdate:modelValue": (J) => s.displayValue = J,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, XL), [
                          [ft, s.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (J) => vg(I)
                        }, v(g(m)("library", "Remove")), 9, ZL)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: pg
                      }, v(g(m)("library", "Add identifier")), 1)
                    ]),
                    l("p", JL, v(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    xn.error ? (y(), w("p", QL, v(xn.error), 1)) : xn.saved ? (y(), w("p", eR, v(g(m)("library", "Metadata saved.")), 1)) : D("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: xn.saving
                    }, v(xn.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, tR)
                  ], 32),
                  Zo(Ae.value).length ? (y(), w("section", nR, [
                    l("h4", iR, v(g(m)("library", "Scanner suggestions")), 1),
                    l("p", aR, v(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (y(!0), w(ae, null, Ce(Zo(Ae.value), (s) => (y(), w("div", {
                        key: s.field
                      }, [
                        l("dt", null, v(s.field) + " · " + v(s.sourceProvenance), 1),
                        l("dd", null, [
                          Te(v(g(m)("library", "Current")) + ": " + v(s.currentValue || "—"), 1),
                          d[117] || (d[117] = l("br", null, null, -1)),
                          Te(v(g(m)("library", "Suggestion")) + ": " + v(s.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : D("", !0)
                ])) : (y(), w("section", rR, [
                  l("h3", oR, v(g(m)("library", "Activity")), 1),
                  l("dl", sR, [
                    l("div", null, [
                      l("dt", null, v(g(m)("library", "Scan status")), 1),
                      l("dd", null, v(Ae.value.scanStatus || "—"), 1)
                    ]),
                    Ae.value.workflowStatus ? (y(), w("div", lR, [
                      l("dt", null, v(g(m)("library", "Workflow")), 1),
                      l("dd", null, v(Ae.value.workflowStatus), 1)
                    ])) : D("", !0),
                    Ae.value.metadataSource ? (y(), w("div", cR, [
                      l("dt", null, v(g(m)("library", "Metadata source")), 1),
                      l("dd", null, v(Ae.value.metadataSource), 1)
                    ])) : D("", !0),
                    Ae.value.cachedPath ? (y(), w("div", uR, [
                      l("dt", null, v(g(m)("library", "File")), 1),
                      l("dd", dR, [
                        Ae.value.openUrl ? (y(), w("a", {
                          key: 0,
                          href: Ae.value.openUrl,
                          onClick: d[103] || (d[103] = (s) => Jn(Ae.value, s))
                        }, [
                          l("bdi", hR, v(Ae.value.cachedPath), 1)
                        ], 8, fR)) : (y(), w("bdi", pR, v(Ae.value.cachedPath), 1))
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
                    disabled: !qo.value,
                    onClick: d[104] || (d[104] = (s) => Qo(qo.value))
                  }, v(g(m)("library", "Previous item")), 9, gR),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Yo.value,
                    onClick: d[105] || (d[105] = (s) => Qo(Yo.value))
                  }, v(g(m)("library", "Next item")), 9, mR)
                ], 8, vR)
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
function SR() {
  window.LibraryStartupWatchdog?.fail();
}
function CR(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Gu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !CR(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Oy(wR, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  SR(), console.error("[library] Vue startup failed", e);
}
