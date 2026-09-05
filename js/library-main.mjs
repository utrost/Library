// @__NO_SIDE_EFFECTS__
function nt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Pt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], re = () => {
}, qs = () => !1, cn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), en = (e) => e.startsWith("onUpdate:"), ne = Object.assign, Ro = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ai = Object.prototype.hasOwnProperty, K = (e, t) => ai.call(e, t), T = Array.isArray, Qe = (e) => un(e) === "[object Map]", xt = (e) => un(e) === "[object Set]", ss = (e) => un(e) === "[object Date]", I = (e) => typeof e == "function", Z = (e) => typeof e == "string", Ce = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Fo = (e) => (q(e) || I(e)) && I(e.then) && I(e.catch), Gs = Object.prototype.toString, un = (e) => Gs.call(e), jo = (e) => un(e).slice(8, -1), Js = (e) => un(e) === "[object Object]", Ho = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zt = /* @__PURE__ */ nt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), pi = /* @__PURE__ */ nt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, di = /-\w/g, Ee = Bn(
  (e) => e.replace(di, (t) => t.slice(1).toUpperCase())
), hi = /\B([A-Z])/g, ut = Bn(
  (e) => e.replace(hi, "-$1").toLowerCase()
), Wn = Bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), gt = Bn(
  (e) => e ? `on${Wn(e)}` : ""
), Xe = (e, t) => !Object.is(e, t), At = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Tn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, qn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let rs;
const fn = () => rs || (rs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Lo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = Z(o) ? _i(o) : Lo(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (Z(e) || q(e))
    return e;
}
const gi = /;(?![^(]*\))/g, mi = /:([^]+)/, vi = /\/\*[^]*?\*\//g;
function _i(e) {
  const t = {};
  return e.replace(vi, "").split(gi).forEach((n) => {
    if (n) {
      const o = n.split(mi);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Uo(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Uo(e[n]);
      o && (t += o + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ei = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", bi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", yi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ni = /* @__PURE__ */ nt(Ei), Oi = /* @__PURE__ */ nt(bi), xi = /* @__PURE__ */ nt(yi), wi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Di = /* @__PURE__ */ nt(wi);
function zs(e) {
  return !!e || e === "";
}
function Vi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = ft(e[o], t[o]);
  return n;
}
function is(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), o = new Uint8Array(n.length);
  for (const s of e) {
    let r = -1;
    for (let i = 0; i < n.length; i++)
      if (!o[i] && ft(s, n[i])) {
        r = i;
        break;
      }
    if (r < 0) return !1;
    o[r] = 1;
  }
  return !0;
}
function ft(e, t) {
  if (e === t) return !0;
  let n = ss(e), o = ss(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Ce(e), o = Ce(t), n || o)
    return e === t;
  if (n = T(e), o = T(t), n || o)
    return n && o ? Vi(e, t) : !1;
  if (n = q(e), o = q(t), n || o) {
    if (!n || !o)
      return !1;
    if (n = Qe(e), o = Qe(t), n || o || (n = xt(e), o = xt(t), n || o))
      return n && o ? is(e, t) : !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), u = t.hasOwnProperty(i);
      if (l && !u || !l && u || !ft(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Si(e, t) {
  return e.findIndex((n) => ft(n, t));
}
const Ys = (e) => !!(e && e.__v_isRef === !0), J = (e) => Z(e) ? e : e == null ? "" : T(e) || q(e) && (e.toString === Gs || !I(e.toString)) ? Ys(e) ? J(e.value) : JSON.stringify(e, Xs, 2) : String(e), Xs = (e, t) => Ys(t) ? Xs(e, t.value) : Qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[co(o, r) + " =>"] = s, n),
    {}
  )
} : xt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => co(n))
} : Ce(t) ? co(t) : q(t) && !T(t) && !Js(t) ? String(t) : t, co = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ce(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Te(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ue;
class Ci {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && ue && (ue.active ? (this.parent = ue, this.index = (ue.scopes || (ue.scopes = [])).push(
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
        const o = this.scopes.slice();
        for (t = 0, n = o.length; t < n; t++)
          o[t].pause();
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
      const o = this.effects.slice();
      for (t = 0, n = o.length; t < n; t++)
        o[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ue;
      try {
        return ue = this, t();
      } finally {
        ue = n;
      }
    } else process.env.NODE_ENV !== "production" && this._warnOnRun && Te("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ue, ue = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (ue === this)
        ue = this.prevScope;
      else {
        let t = ue;
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
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const s = this.scopes.slice();
        for (n = 0, o = s.length; n < o; n++)
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
function Ti() {
  return ue;
}
let Y;
const uo = /* @__PURE__ */ new WeakSet();
class Zs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && (ue.active ? ue.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, uo.has(this) && (uo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || er(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ls(this), tr(this);
    const t = Y, n = Se;
    Y = this, Se = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && Y !== this && Te(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), nr(this), Y = t, Se = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Bo(t);
      this.deps = this.depsTail = void 0, ls(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? uo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    No(this) && this.run();
  }
  get dirty() {
    return No(this);
  }
}
let Qs = 0, Yt, Xt;
function er(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Xt, Xt = e;
    return;
  }
  e.next = Yt, Yt = e;
}
function ko() {
  Qs++;
}
function Ko() {
  if (--Qs > 0)
    return;
  if (Xt) {
    let t = Xt;
    for (Xt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Yt; ) {
    let t = Yt;
    for (Yt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function tr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function nr(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), Bo(o), Ai(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function No(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (or(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function or(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === tn) || (e.globalVersion = tn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !No(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Y, o = Se;
  Y = e, Se = !0;
  try {
    tr(e);
    const s = e.fn(e._value);
    (t.version === 0 || Xe(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Y = n, Se = o, nr(e), e.flags &= -3;
  }
}
function Bo(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Bo(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ai(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Se = !0;
const sr = [];
function Ae() {
  sr.push(Se), Se = !1;
}
function $e() {
  const e = sr.pop();
  Se = e === void 0 ? !0 : e;
}
function ls(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Y;
    Y = void 0;
    try {
      t();
    } finally {
      Y = n;
    }
  }
}
let tn = 0;
class $i {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class rr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Y || !Se || Y === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Y)
      n = this.activeLink = new $i(Y, this), Y.deps ? (n.prevDep = Y.depsTail, Y.depsTail.nextDep = n, Y.depsTail = n) : Y.deps = Y.depsTail = n, ir(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = Y.depsTail, n.nextDep = void 0, Y.depsTail.nextDep = n, Y.depsTail = n, Y.deps === n && (Y.deps = o);
    }
    return process.env.NODE_ENV !== "production" && Y.onTrack && Y.onTrack(
      ne(
        {
          effect: Y
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, tn++, this.notify(t);
  }
  notify(t) {
    ko();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ne(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ko();
    }
  }
}
function ir(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        ir(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Oo = /* @__PURE__ */ new WeakMap(), bt = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), xo = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), nn = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function se(e, t, n) {
  if (Se && Y) {
    let o = Oo.get(e);
    o || Oo.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new rr()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function ke(e, t, n, o, s, r) {
  const i = Oo.get(e);
  if (!i) {
    tn++;
    return;
  }
  const l = (u) => {
    u && (process.env.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : u.trigger());
  };
  if (ko(), t === "clear")
    i.forEach(l);
  else {
    const u = T(e), d = u && Ho(n);
    if (u && n === "length") {
      const p = Number(o);
      i.forEach((a, m) => {
        (m === "length" || m === nn || !Ce(m) && m >= p) && l(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(nn)), t) {
        case "add":
          u ? d && l(i.get("length")) : (l(i.get(bt)), Qe(e) && l(i.get(xo)));
          break;
        case "delete":
          u || (l(i.get(bt)), Qe(e) && l(i.get(xo)));
          break;
        case "set":
          Qe(e) && l(i.get(bt));
          break;
      }
  }
  Ko();
}
function Vt(e) {
  const t = /* @__PURE__ */ j(e);
  return t === e ? t : (se(t, "iterate", nn), /* @__PURE__ */ be(e) ? t : t.map(tt));
}
function Gn(e) {
  return se(e = /* @__PURE__ */ j(e), "iterate", nn), e;
}
function Ue(e, t) {
  return /* @__PURE__ */ We(e) ? Rt(/* @__PURE__ */ ct(e) ? tt(t) : t) : tt(t);
}
const Pi = {
  __proto__: null,
  [Symbol.iterator]() {
    return fo(this, Symbol.iterator, (e) => Ue(this, e));
  },
  concat(...e) {
    return Vt(this).concat(
      ...e.map((t) => T(t) ? Vt(t) : t)
    );
  },
  entries() {
    return fo(this, "entries", (e) => (e[1] = Ue(this, e[1]), e));
  },
  every(e, t) {
    return Ge(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ge(
      this,
      "filter",
      e,
      t,
      (n) => n.map((o) => Ue(this, o)),
      arguments
    );
  },
  find(e, t) {
    return Ge(
      this,
      "find",
      e,
      t,
      (n) => Ue(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ge(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ge(
      this,
      "findLast",
      e,
      t,
      (n) => Ue(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ge(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ge(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ao(this, "includes", e);
  },
  indexOf(...e) {
    return ao(this, "indexOf", e);
  },
  join(e) {
    return Vt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ao(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ge(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return kt(this, "pop");
  },
  push(...e) {
    return kt(this, "push", e);
  },
  reduce(e, ...t) {
    return cs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return cs(this, "reduceRight", e, t);
  },
  shift() {
    return kt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ge(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return kt(this, "splice", e);
  },
  toReversed() {
    return Vt(this).toReversed();
  },
  toSorted(e) {
    return Vt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Vt(this).toSpliced(...e);
  },
  unshift(...e) {
    return kt(this, "unshift", e);
  },
  values() {
    return fo(this, "values", (e) => Ue(this, e));
  }
};
function fo(e, t, n) {
  const o = Gn(e), s = o[t]();
  return o !== e && !/* @__PURE__ */ be(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = n(r.value)), r;
  }), s;
}
const Mi = Array.prototype;
function Ge(e, t, n, o, s, r) {
  const i = Gn(e), l = i !== e && !/* @__PURE__ */ be(e), u = i[t];
  if (u !== Mi[t]) {
    const a = u.apply(e, r);
    return l ? tt(a) : a;
  }
  let d = n;
  i !== e && (l ? d = function(a, m) {
    return n.call(this, Ue(e, a), m, e);
  } : n.length > 2 && (d = function(a, m) {
    return n.call(this, a, m, e);
  }));
  const p = u.call(i, d, o);
  return l && s ? s(p) : p;
}
function cs(e, t, n, o) {
  const s = Gn(e), r = s !== e && !/* @__PURE__ */ be(e);
  let i = n, l = !1;
  s !== e && (r ? (l = o.length === 0, i = function(d, p, a) {
    return l && (l = !1, d = Ue(e, d)), n.call(this, d, Ue(e, p), a, e);
  }) : n.length > 3 && (i = function(d, p, a) {
    return n.call(this, d, p, a, e);
  }));
  const u = s[t](i, ...o);
  return l ? Ue(e, u) : u;
}
function ao(e, t, n) {
  const o = /* @__PURE__ */ j(e);
  se(o, "iterate", nn);
  const s = o[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ An(n[0]) ? (n[0] = /* @__PURE__ */ j(n[0]), o[t](...n)) : s;
}
function kt(e, t, n = []) {
  Ae(), ko();
  const o = (/* @__PURE__ */ j(e))[t].apply(e, n);
  return Ko(), $e(), o;
}
const Ii = /* @__PURE__ */ nt("__proto__,__v_isRef,__isVue"), lr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ce)
);
function Ri(e) {
  Ce(e) || (e = String(e));
  const t = /* @__PURE__ */ j(this);
  return se(t, "has", e), t.hasOwnProperty(e);
}
class cr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? hr : dr : r ? pr : ar).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = T(t);
    if (!s) {
      let u;
      if (i && (u = Pi[n]))
        return u;
      if (n === "hasOwnProperty")
        return Ri;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ie(t) ? t : o
    );
    if ((Ce(n) ? lr.has(n) : Ii(n)) || (s || se(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ ie(l)) {
      const u = i && Ho(n) ? l : l.value;
      return s && q(u) ? /* @__PURE__ */ Do(u) : u;
    }
    return q(l) ? s ? /* @__PURE__ */ Do(l) : /* @__PURE__ */ zn(l) : l;
  }
}
class ur extends cr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    const i = T(t) && Ho(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ We(r);
      if (!/* @__PURE__ */ be(o) && !/* @__PURE__ */ We(o) && (r = /* @__PURE__ */ j(r), o = /* @__PURE__ */ j(o)), !i && /* @__PURE__ */ ie(r) && !/* @__PURE__ */ ie(o))
        return d ? (process.env.NODE_ENV !== "production" && Te(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = o, !0);
    }
    const l = i ? Number(n) < t.length : K(t, n), u = Reflect.set(
      t,
      n,
      o,
      /* @__PURE__ */ ie(t) ? t : s
    );
    return t === /* @__PURE__ */ j(s) && u && (l ? Xe(o, r) && ke(t, "set", n, o, r) : ke(t, "add", n, o)), u;
  }
  deleteProperty(t, n) {
    const o = K(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && ke(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Ce(n) || !lr.has(n)) && se(t, "has", n), o;
  }
  ownKeys(t) {
    return se(
      t,
      "iterate",
      T(t) ? "length" : bt
    ), Reflect.ownKeys(t);
  }
}
class fr extends cr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Te(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Te(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Fi = /* @__PURE__ */ new ur(), ji = /* @__PURE__ */ new fr(), Hi = /* @__PURE__ */ new ur(!0), Li = /* @__PURE__ */ new fr(!0), wo = (e) => e, _n = (e) => Reflect.getPrototypeOf(e);
function Ui(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = /* @__PURE__ */ j(s), i = Qe(r), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = s[e](...o), p = n ? wo : t ? Rt : tt;
    return !t && se(
      r,
      "iterate",
      u ? xo : bt
    ), ne(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: a, done: m } = d.next();
          return m ? { value: a, done: m } : {
            value: l ? [p(a[0]), p(a[1])] : p(a),
            done: m
          };
        }
      }
    );
  };
}
function En(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Te(
        `${Wn(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ j(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ki(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = /* @__PURE__ */ j(r), l = /* @__PURE__ */ j(s);
      e || (Xe(s, l) && se(i, "get", s), se(i, "get", l));
      const { has: u } = _n(i), d = t ? wo : e ? Rt : tt;
      if (u.call(i, s))
        return d(r.get(s));
      if (u.call(i, l))
        return d(r.get(l));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && se(/* @__PURE__ */ j(s), "iterate", bt), s.size;
    },
    has(s) {
      const r = this.__v_raw, i = /* @__PURE__ */ j(r), l = /* @__PURE__ */ j(s);
      return e || (Xe(s, l) && se(i, "has", s), se(i, "has", l)), s === l ? r.has(s) : r.has(s) || r.has(l);
    },
    forEach(s, r) {
      const i = this, l = i.__v_raw, u = /* @__PURE__ */ j(l), d = t ? wo : e ? Rt : tt;
      return !e && se(u, "iterate", bt), l.forEach((p, a) => s.call(r, d(p), d(a), i));
    }
  };
  return ne(
    n,
    e ? {
      add: En("add"),
      set: En("set"),
      delete: En("delete"),
      clear: En("clear")
    } : {
      add(s) {
        const r = /* @__PURE__ */ j(this), i = _n(r), l = /* @__PURE__ */ j(s), u = !t && !/* @__PURE__ */ be(s) && !/* @__PURE__ */ We(s) ? l : s;
        return i.has.call(r, u) || Xe(s, u) && i.has.call(r, s) || Xe(l, u) && i.has.call(r, l) || (r.add(u), ke(r, "add", u, u)), this;
      },
      set(s, r) {
        !t && !/* @__PURE__ */ be(r) && !/* @__PURE__ */ We(r) && (r = /* @__PURE__ */ j(r));
        const i = /* @__PURE__ */ j(this), { has: l, get: u } = _n(i);
        let d = l.call(i, s);
        d ? process.env.NODE_ENV !== "production" && us(i, l, s) : (s = /* @__PURE__ */ j(s), d = l.call(i, s));
        const p = u.call(i, s);
        return i.set(s, r), d ? Xe(r, p) && ke(i, "set", s, r, p) : ke(i, "add", s, r), this;
      },
      delete(s) {
        const r = /* @__PURE__ */ j(this), { has: i, get: l } = _n(r);
        let u = i.call(r, s);
        u ? process.env.NODE_ENV !== "production" && us(r, i, s) : (s = /* @__PURE__ */ j(s), u = i.call(r, s));
        const d = l ? l.call(r, s) : void 0, p = r.delete(s);
        return u && ke(r, "delete", s, void 0, d), p;
      },
      clear() {
        const s = /* @__PURE__ */ j(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? Qe(s) ? new Map(s) : new Set(s) : void 0, l = s.clear();
        return r && ke(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Ui(s, e, t);
  }), n;
}
function Jn(e, t) {
  const n = ki(e, t);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    K(n, s) && s in o ? n : o,
    s,
    r
  );
}
const Ki = {
  get: /* @__PURE__ */ Jn(!1, !1)
}, Bi = {
  get: /* @__PURE__ */ Jn(!1, !0)
}, Wi = {
  get: /* @__PURE__ */ Jn(!0, !1)
}, qi = {
  get: /* @__PURE__ */ Jn(!0, !0)
};
function us(e, t, n) {
  const o = /* @__PURE__ */ j(n);
  if (o !== n && t.call(e, o)) {
    const s = jo(e);
    Te(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ar = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap();
function Gi(e) {
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
function zn(e) {
  return /* @__PURE__ */ We(e) ? e : Yn(
    e,
    !1,
    Fi,
    Ki,
    ar
  );
}
// @__NO_SIDE_EFFECTS__
function Ji(e) {
  return Yn(
    e,
    !1,
    Hi,
    Bi,
    pr
  );
}
// @__NO_SIDE_EFFECTS__
function Do(e) {
  return Yn(
    e,
    !0,
    ji,
    Wi,
    dr
  );
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return Yn(
    e,
    !0,
    Li,
    qi,
    hr
  );
}
function Yn(e, t, n, o, s) {
  if (!q(e))
    return process.env.NODE_ENV !== "production" && Te(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = Gi(jo(e));
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function ct(e) {
  return /* @__PURE__ */ We(e) ? /* @__PURE__ */ ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function be(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function j(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ j(t) : e;
}
function zi(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && Tn(e, "__v_skip", !0), e;
}
const tt = (e) => q(e) ? /* @__PURE__ */ zn(e) : e, Rt = (e) => q(e) ? /* @__PURE__ */ Do(e) : e;
// @__NO_SIDE_EFFECTS__
function ie(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Yi(e) {
  return /* @__PURE__ */ ie(e) ? e.value : e;
}
const Xi = {
  get: (e, t, n) => t === "__v_raw" ? e : Yi(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return /* @__PURE__ */ ie(s) && !/* @__PURE__ */ ie(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function gr(e) {
  return /* @__PURE__ */ ct(e) ? e : new Proxy(e, Xi);
}
class Zi {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new rr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Y !== this)
      return er(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return or(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Te("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function Qi(e, t, n = !1) {
  let o, s;
  I(e) ? o = e : (o = e.get, s = e.set);
  const r = new Zi(o, s, n);
  return process.env.NODE_ENV, r;
}
const bn = {}, $n = /* @__PURE__ */ new WeakMap();
let mt;
function el(e, t = !1, n = mt) {
  if (n) {
    let o = $n.get(n);
    o || $n.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Te(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function tl(e, t, n = X) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: l, call: u } = n, d = (A) => {
    (n.onWarn || Te)(
      "Invalid watch source: ",
      A,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (A) => s ? A : /* @__PURE__ */ be(A) || s === !1 || s === 0 ? Ze(A, 1) : Ze(A);
  let a, m, V, R, C = !1, g = !1;
  if (/* @__PURE__ */ ie(e) ? (m = () => e.value, C = /* @__PURE__ */ be(e)) : /* @__PURE__ */ ct(e) ? (m = () => p(e), C = !0) : T(e) ? (g = !0, C = e.some((A) => /* @__PURE__ */ ct(A) || /* @__PURE__ */ be(A)), m = () => e.map((A) => {
    if (/* @__PURE__ */ ie(A))
      return A.value;
    if (/* @__PURE__ */ ct(A))
      return p(A);
    if (I(A))
      return u ? u(A, 2) : A();
    process.env.NODE_ENV !== "production" && d(A);
  })) : I(e) ? t ? m = u ? () => u(e, 2) : e : m = () => {
    if (V) {
      Ae();
      try {
        V();
      } finally {
        $e();
      }
    }
    const A = mt;
    mt = a;
    try {
      return u ? u(e, 3, [R]) : e(R);
    } finally {
      mt = A;
    }
  } : (m = re, process.env.NODE_ENV !== "production" && d(e)), t && s) {
    const A = m, le = s === !0 ? 1 / 0 : s;
    m = () => Ze(A(), le);
  }
  const E = Ti(), M = () => {
    a.stop(), E && E.active && Ro(E.effects, a);
  };
  if (r && t) {
    const A = t;
    t = (...le) => {
      const ge = A(...le);
      return M(), ge;
    };
  }
  let L = g ? new Array(e.length).fill(bn) : bn;
  const Ne = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const le = a.run();
        if (A || s || C || (g ? le.some((ge, fe) => Xe(ge, L[fe])) : Xe(le, L))) {
          V && V();
          const ge = mt;
          mt = a;
          try {
            const fe = [
              le,
              // pass undefined as the old value when it's changed for the first time
              L === bn ? void 0 : g && L[0] === bn ? [] : L,
              R
            ];
            L = le, u ? u(t, 3, fe) : (
              // @ts-expect-error
              t(...fe)
            );
          } finally {
            mt = ge;
          }
        }
      } else
        a.run();
  };
  return l && l(Ne), a = new Zs(m), a.scheduler = i ? () => i(Ne, !1) : Ne, R = (A) => el(A, !1, a), V = a.onStop = () => {
    const A = $n.get(a);
    if (A) {
      if (u)
        u(A, 4);
      else
        for (const le of A) le();
      $n.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? Ne(!0) : L = a.run() : i ? i(Ne.bind(null, !0), !0) : a.run(), M.pause = a.pause.bind(a), M.resume = a.resume.bind(a), M.stop = M, M;
}
function Ze(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ie(e))
    Ze(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      Ze(e[o], t, n);
  else if (xt(e) || Qe(e))
    e.forEach((o) => {
      Ze(o, t, n);
    });
  else if (Js(e)) {
    for (const o in e)
      Ze(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Ze(e[o], t, n);
  }
  return e;
}
const yt = [];
function On(e) {
  yt.push(e);
}
function xn() {
  yt.pop();
}
let po = !1;
function w(e, ...t) {
  if (po) return;
  po = !0, Ae();
  const n = yt.length ? yt[yt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = nl();
  if (o)
    Ft(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${gn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...ol(s)), console.warn(...r);
  }
  $e(), po = !1;
}
function nl() {
  let e = yt[yt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function ol(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...sl(n));
  }), t;
}
function sl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${gn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...rl(e.props), r] : [s + r];
}
function rl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...mr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function mr(e, t, n) {
  return Z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ ie(t) ? (t = mr(e, /* @__PURE__ */ j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ j(t), n ? t : [`${e}=`, t]);
}
const Wo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Ft(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    an(s, t, n);
  }
}
function Pe(e, t, n, o) {
  if (I(e)) {
    const s = Ft(e, t, n, o);
    return s && Fo(s) && s.catch((r) => {
      an(r, t, n);
    }), s;
  }
  if (T(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Pe(e[r], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && w(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function an(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || X;
  if (t) {
    let l = t.parent;
    const u = t.proxy, d = process.env.NODE_ENV !== "production" ? Wo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Ae(), Ft(r, null, 10, [
        e,
        u,
        d
      ]), $e();
      return;
    }
  }
  il(e, n, s, o, i);
}
function il(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Wo[t];
    if (n && On(n), w(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && xn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const de = [];
let Le = -1;
const Mt = [];
let lt = null, $t = 0;
const vr = /* @__PURE__ */ Promise.resolve();
let Pn = null;
const ll = 100;
function _r(e) {
  const t = Pn || vr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cl(e) {
  let t = Le + 1, n = de.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = de[o], r = on(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Xn(e) {
  if (!(e.flags & 1)) {
    const t = on(e), n = de[de.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= on(n) ? de.push(e) : de.splice(cl(t), 0, e), e.flags |= 1, Er();
  }
}
function Er() {
  Pn || (Pn = vr.then(Nr));
}
function br(e) {
  if (!T(e))
    lt && e.id === -1 ? lt.splice($t + 1, 0, e) : e.flags & 1 || (Mt.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Mt.push(e[t]);
  Er();
}
function fs(e, t, n = Le + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < de.length; n++) {
    const o = de[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && qo(t, o))
        continue;
      de.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function yr(e) {
  if (Mt.length) {
    const t = [...new Set(Mt)].sort(
      (n, o) => on(n) - on(o)
    );
    if (Mt.length = 0, lt) {
      for (let n = 0; n < t.length; n++)
        lt.push(t[n]);
      return;
    }
    for (lt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $t = 0; $t < lt.length; $t++) {
      const n = lt[$t];
      process.env.NODE_ENV !== "production" && qo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    lt = null, $t = 0;
  }
}
const on = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Nr(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => qo(e, n) : re;
  try {
    for (Le = 0; Le < de.length; Le++) {
      const n = de[Le];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ft(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Le < de.length; Le++) {
      const n = de[Le];
      n && (n.flags &= -2);
    }
    Le = -1, de.length = 0, yr(e), Pn = null, (de.length || Mt.length) && Nr(e);
  }
}
function qo(e, t) {
  const n = e.get(t) || 0;
  if (n > ll) {
    const o = t.i, s = o && ii(o.type);
    return an(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Oe = !1;
const as = (e) => {
  try {
    return Oe;
  } finally {
    Oe = e;
  }
}, wn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (fn().__VUE_HMR_RUNTIME__ = {
  createRecord: ho(Or),
  rerender: ho(al),
  reload: ho(pl)
});
const wt = /* @__PURE__ */ new Map();
function ul(e) {
  const t = e.type.__hmrId;
  let n = wt.get(t);
  n || (Or(t, e.type), n = wt.get(t)), n.instances.add(e);
}
function fl(e) {
  wt.get(e.type.__hmrId).instances.delete(e);
}
function Or(e, t) {
  return wt.has(e) ? !1 : (wt.set(e, {
    initialDef: Mn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Mn(e) {
  return li(e) ? e.__vccOpts : e;
}
function al(e, t) {
  const n = wt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Mn(o.type).render = t), o.renderCache = [], Oe = !0, o.job.flags & 8 || o.update(), Oe = !1;
  }));
}
function pl(e, t) {
  const n = wt.get(e);
  if (!n) return;
  t = Mn(t), ps(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = Mn(r.type);
    let l = wn.get(i);
    l || (i !== n.initialDef && ps(i, t), wn.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Xn(() => {
      r.job.flags & 8 || (Oe = !0, r.parent.update(), Oe = !1, l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  br(() => {
    wn.clear();
  });
}
function ps(e, t) {
  ne(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ho(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ve, qt = [], Vo = !1;
function pn(e, ...t) {
  Ve ? Ve.emit(e, ...t) : Vo || qt.push({ event: e, args: t });
}
function Go(e, t) {
  var n, o;
  Ve = e, Ve ? (Ve.enabled = !0, qt.forEach(({ event: s, args: r }) => Ve.emit(s, ...r)), qt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Go(r, t);
  }), setTimeout(() => {
    Ve || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Vo = !0, qt = []);
  }, 3e3)) : (Vo = !0, qt = []);
}
function dl(e, t) {
  pn("app:init", e, t, {
    Fragment: Q,
    Text: dn,
    Comment: ye,
    Static: Sn
  });
}
function hl(e) {
  pn("app:unmount", e);
}
const gl = /* @__PURE__ */ Jo(
  "component:added"
  /* COMPONENT_ADDED */
), xr = /* @__PURE__ */ Jo(
  "component:updated"
  /* COMPONENT_UPDATED */
), ml = /* @__PURE__ */ Jo(
  "component:removed"
  /* COMPONENT_REMOVED */
), vl = (e) => {
  Ve && typeof Ve.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ve.cleanupBuffer(e) && ml(e);
};
// @__NO_SIDE_EFFECTS__
function Jo(e) {
  return (t) => {
    pn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const _l = /* @__PURE__ */ wr(
  "perf:start"
  /* PERFORMANCE_START */
), El = /* @__PURE__ */ wr(
  "perf:end"
  /* PERFORMANCE_END */
);
function wr(e) {
  return (t, n, o) => {
    pn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function bl(e, t, n) {
  pn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let he = null, Dr = null;
function In(e) {
  const t = he;
  return he = e, Dr = e && e.type.__scopeId || null, t;
}
function yl(e, t = he, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && Vs(-1);
    const r = In(t), i = Ot.length;
    let l;
    try {
      l = e(...s);
    } finally {
      for (let u = Ot.length; u > i; u--) Zr();
      In(r), o._d && Vs(1);
    }
    return process.env.NODE_ENV !== "production" && xr(t), l;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Vr(e) {
  pi(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function pt(e, t) {
  if (he === null)
    return process.env.NODE_ENV !== "production" && w("withDirectives can only be used inside render functions."), e;
  const n = so(he), o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, i, l, u = X] = t[s];
    r && (I(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ze(i), o.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: u
    }));
  }
  return e;
}
function dt(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let u = l.dir[o];
    u && (Ae(), Pe(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), $e());
  }
}
function Nl(e, t) {
  if (process.env.NODE_ENV !== "production" && (!oe || oe.isMounted) && w("provide() can only be used inside setup()."), oe) {
    let n = oe.provides;
    const o = oe.parent && oe.parent.provides;
    o === n && (n = oe.provides = Object.create(o)), n[e] = t;
  }
}
function Dn(e, t, n = !1) {
  const o = oi();
  if (o || It) {
    let s = It ? It._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
const Ol = /* @__PURE__ */ Symbol.for("v-scx"), xl = () => {
  {
    const e = Dn(Ol);
    return e || process.env.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function go(e, t, n) {
  return process.env.NODE_ENV !== "production" && !I(t) && w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Sr(e, t, n);
}
function Sr(e, t, n = X) {
  const { immediate: o, deep: s, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ne({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = w);
  const u = t && o || !t && r !== "post";
  let d;
  if (ln) {
    if (r === "sync") {
      const V = xl();
      d = V.__watcherHandles || (V.__watcherHandles = []);
    } else if (!u) {
      const V = () => {
      };
      return V.stop = re, V.resume = re, V.pause = re, V;
    }
  }
  const p = oe;
  l.call = (V, R, C) => Pe(V, p, R, C);
  let a = !1;
  r === "post" ? l.scheduler = (V) => {
    _e(V, p && p.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (V, R) => {
    R ? V() : Xn(V);
  }), l.augmentJob = (V) => {
    t && (V.flags |= 4), a && (V.flags |= 2, p && (V.id = p.uid, V.i = p));
  };
  const m = tl(e, t, l);
  return ln && (d ? d.push(m) : u && m()), m;
}
function wl(e, t, n) {
  const o = this.proxy, s = Z(e) ? e.includes(".") ? Cr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  I(t) ? r = t : (r = t.handler, n = t);
  const i = hn(this), l = Sr(s, r.bind(o), n);
  return i(), l;
}
function Cr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const Dl = /* @__PURE__ */ Symbol("_vte"), Zn = (e) => e.__isTeleport, mo = /* @__PURE__ */ Symbol("_leaveCb");
function Vl(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const o of e)
      if (o.type !== ye) {
        if (process.env.NODE_ENV !== "production" && n) {
          w(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = o, n = !0, process.env.NODE_ENV === "production") break;
      }
  }
  return t;
}
function Tr(e) {
  if (!Qn(e))
    return Zn(e.type) && e.children ? Vl(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && I(n.default))
      return n.default();
  }
}
function zo(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    zo(
      Zn(n.type) && Tr(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ar(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ds = /* @__PURE__ */ new WeakSet();
function hs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Rn = /* @__PURE__ */ new WeakMap();
function Zt(e, t, n, o, s = !1) {
  if (T(e)) {
    e.forEach(
      (C, g) => Zt(
        C,
        t && (T(t) ? t[g] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Qt(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Zt(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? so(o.component) : o.el, i = s ? null : r, { i: l, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = l.refs === X ? l.refs = {} : l.refs, a = l.setupState, m = /* @__PURE__ */ j(a), V = a === X ? qs : (C) => process.env.NODE_ENV !== "production" && (K(m, C) && !/* @__PURE__ */ ie(m[C]) && w(
    `Template ref "${C}" used on a non-ref value. It will not work in the production build.`
  ), ds.has(m[C])) || hs(p, C) ? !1 : K(m, C), R = (C, g) => !(process.env.NODE_ENV !== "production" && ds.has(C) || g && hs(p, g));
  if (d != null && d !== u) {
    if (gs(t), Z(d))
      p[d] = null, V(d) && (a[d] = null);
    else if (/* @__PURE__ */ ie(d)) {
      const C = t;
      R(d, C.k) && (d.value = null), C.k && (p[C.k] = null);
    }
  }
  if (I(u))
    Ft(u, l, 12, [i, p]);
  else {
    const C = Z(u), g = /* @__PURE__ */ ie(u);
    if (C || g) {
      const E = () => {
        if (e.f) {
          const M = C ? V(u) ? a[u] : p[u] : R(u) || !e.k ? u.value : p[e.k];
          if (s)
            T(M) && Ro(M, r);
          else if (T(M))
            M.includes(r) || M.push(r);
          else if (C)
            p[u] = [r], V(u) && (a[u] = p[u]);
          else {
            const L = [r];
            R(u, e.k) && (u.value = L), e.k && (p[e.k] = L);
          }
        } else C ? (p[u] = i, V(u) && (a[u] = i)) : g ? (R(u, e.k) && (u.value = i), e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && w("Invalid template ref type:", u, `(${typeof u})`);
      };
      if (i) {
        const M = () => {
          E(), Rn.delete(e);
        };
        M.id = -1, Rn.set(e, M), _e(M, n);
      } else
        gs(e), E();
    } else process.env.NODE_ENV !== "production" && w("Invalid template ref type:", u, `(${typeof u})`);
  }
}
function gs(e) {
  const t = Rn.get(e);
  t && (t.flags |= 8, Rn.delete(e));
}
fn().requestIdleCallback;
fn().cancelIdleCallback;
const Qt = (e) => !!e.type.__asyncLoader, Qn = (e) => e.type.__isKeepAlive;
function Sl(e, t) {
  $r(e, "a", t);
}
function Cl(e, t) {
  $r(e, "da", t);
}
function $r(e, t, n = oe) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (eo(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Qn(s.parent.vnode) && Tl(o, t, n, s), s = s.parent;
  }
}
function Tl(e, t, n, o) {
  const s = eo(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Pr(() => {
    Ro(o[t], s);
  }, n);
}
function eo(e, t, n = oe, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Ae();
      const l = hn(n), u = Pe(t, n, e, i);
      return l(), $e(), u;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = gt(Wo[e].replace(/ hook$/, ""));
    w(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ot = (e) => (t, n = oe) => {
  (!ln || e === "sp") && eo(e, (...o) => t(...o), n);
}, Al = ot("bm"), $l = ot("m"), Pl = ot(
  "bu"
), Ml = ot("u"), Il = ot(
  "bum"
), Pr = ot("um"), Rl = ot(
  "sp"
), Fl = ot("rtg"), jl = ot("rtc");
function Hl(e, t = oe) {
  eo("ec", e, t);
}
const Ll = /* @__PURE__ */ Symbol.for("v-ndc");
function je(e, t, n, o) {
  let s;
  const r = n, i = T(e);
  if (i || Z(e)) {
    const l = i && /* @__PURE__ */ ct(e);
    let u = !1, d = !1;
    l && (u = !/* @__PURE__ */ be(e), d = /* @__PURE__ */ We(e), e = Gn(e)), s = new Array(e.length);
    for (let p = 0, a = e.length; p < a; p++)
      s[p] = t(
        u ? d ? Rt(tt(e[p])) : tt(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number")
    if (process.env.NODE_ENV !== "production" && (!Number.isInteger(e) || e < 0))
      w(
        `The v-for range expects a positive integer value but got ${e}.`
      ), s = [];
    else {
      s = new Array(e);
      for (let l = 0; l < e; l++)
        s[l] = t(l + 1, l, void 0, r);
    }
  else if (q(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, u) => t(l, u, void 0, r)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let u = 0, d = l.length; u < d; u++) {
        const p = l[u];
        s[u] = t(e[p], p, u, r);
      }
    }
  else
    s = [];
  return s;
}
const So = (e) => e ? si(e) ? so(e) : So(e.parent) : null, Ul = (e) => {
  let t = !1;
  for (; ; ) {
    if (e.patchFlag > 0 && e.patchFlag & 2048) {
      const s = no(e.children);
      if (!s)
        return;
      e = s, t = !0;
      continue;
    }
    const n = e.component;
    if (n && n.subTree) {
      e = n.subTree;
      continue;
    }
    const o = e.suspense;
    if (o && o.activeBranch) {
      e = o.activeBranch;
      continue;
    }
    return t ? e.el : void 0;
  }
}, kl = (e) => {
  const t = e.subTree && Ul(e.subTree);
  return t === void 0 ? e.vnode.el : t;
}, Nt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ne(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => process.env.NODE_ENV !== "production" ? kl(e) : e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Ke(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Ke(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Ke(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Ke(e.refs) : e.refs,
    $parent: (e) => So(e.parent),
    $root: (e) => So(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Rr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _r.bind(e.proxy)),
    $watch: (e) => wl.bind(e)
  })
), Yo = (e) => e === "_" || e === "$", vo = (e, t) => e !== X && !e.__isScriptSetup && K(e, t), Mr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (vo(o, t))
          return i[t] = 1, o[t];
        if (s !== X && K(s, t))
          return i[t] = 2, s[t];
        if (K(r, t))
          return i[t] = 3, r[t];
        if (n !== X && K(n, t))
          return i[t] = 4, n[t];
        Co && (i[t] = 0);
      }
    }
    const d = Nt[t];
    let p, a;
    if (d)
      return t === "$attrs" ? (se(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && jn()) : process.env.NODE_ENV !== "production" && t === "$slots" && se(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== X && K(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      a = u.config.globalProperties, K(a, t)
    )
      return a[t];
    process.env.NODE_ENV !== "production" && he && (!Z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== X && Yo(t[0]) && K(s, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === he && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return vo(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && K(s, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== X && K(o, t) ? (o[t] = n, !0) : K(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, props: r, type: i }
  }, l) {
    let u;
    return !!(n[l] || e !== X && l[0] !== "$" && K(e, l) || vo(t, l) || K(r, l) || K(o, l) || K(Nt, l) || K(s.config.globalProperties, l) || (u = i.__cssModules) && u[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Mr.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Kl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Nt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Nt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: re
    });
  }), t;
}
function Bl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: re
    });
  });
}
function Wl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ j(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Yo(o[0])) {
        w(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: re
      });
    }
  });
}
function ms(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ql() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Co = !0;
function Gl(e) {
  const t = Rr(e), n = e.proxy, o = e.ctx;
  Co = !1, t.beforeCreate && vs(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: u,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: m,
    beforeUpdate: V,
    updated: R,
    activated: C,
    deactivated: g,
    beforeDestroy: E,
    beforeUnmount: M,
    destroyed: L,
    unmounted: Ne,
    render: A,
    renderTracked: le,
    renderTriggered: ge,
    errorCaptured: fe,
    serverPrefetch: me,
    // public API
    expose: qe,
    inheritAttrs: st,
    // assets
    components: we,
    directives: mn,
    filters: Qo
  } = t, rt = process.env.NODE_ENV !== "production" ? ql() : null;
  if (process.env.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const H in U)
        rt("Props", H);
  }
  if (d && Jl(d, o, rt), i)
    for (const U in i) {
      const H = i[U];
      I(H) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, U, {
        value: H.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[U] = H.bind(n), process.env.NODE_ENV !== "production" && rt("Methods", U)) : process.env.NODE_ENV !== "production" && w(
        `Method "${U}" has type "${typeof H}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !I(s) && w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && Fo(U) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !q(U))
      process.env.NODE_ENV !== "production" && w("data() should return an object.");
    else if (e.data = /* @__PURE__ */ zn(U), process.env.NODE_ENV !== "production")
      for (const H in U)
        rt("Data", H), Yo(H[0]) || Object.defineProperty(o, H, {
          configurable: !0,
          enumerable: !0,
          get: () => U[H],
          set: re
        });
  }
  if (Co = !0, r)
    for (const U in r) {
      const H = r[U], Me = I(H) ? H.bind(n, n) : I(H.get) ? H.get.bind(n, n) : re;
      process.env.NODE_ENV !== "production" && Me === re && w(`Computed property "${U}" has no getter.`);
      const ro = !I(H) && I(H.set) ? H.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        w(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : re, jt = vt({
        get: Me,
        set: ro
      });
      Object.defineProperty(o, U, {
        enumerable: !0,
        configurable: !0,
        get: () => jt.value,
        set: (Dt) => jt.value = Dt
      }), process.env.NODE_ENV !== "production" && rt("Computed", U);
    }
  if (l)
    for (const U in l)
      Ir(l[U], o, n, U);
  if (u) {
    const U = I(u) ? u.call(n) : u;
    Reflect.ownKeys(U).forEach((H) => {
      Nl(H, U[H]);
    });
  }
  p && vs(p, e, "c");
  function ve(U, H) {
    T(H) ? H.forEach((Me) => U(Me.bind(n))) : H && U(H.bind(n));
  }
  if (ve(Al, a), ve($l, m), ve(Pl, V), ve(Ml, R), ve(Sl, C), ve(Cl, g), ve(Hl, fe), ve(jl, le), ve(Fl, ge), ve(Il, M), ve(Pr, Ne), ve(Rl, me), T(qe))
    if (qe.length) {
      const U = e.exposed || (e.exposed = {});
      qe.forEach((H) => {
        Object.defineProperty(U, H, {
          get: () => n[H],
          set: (Me) => n[H] = Me,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === re && (e.render = A), st != null && (e.inheritAttrs = st), we && (e.components = we), mn && (e.directives = mn), me && Ar(e);
}
function Jl(e, t, n = re) {
  T(e) && (e = To(e));
  for (const o in e) {
    const s = e[o];
    let r;
    q(s) ? "default" in s ? r = Dn(
      s.from || o,
      s.default,
      !0
    ) : r = Dn(s.from || o) : r = Dn(s), /* @__PURE__ */ ie(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function vs(e, t, n) {
  Pe(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ir(e, t, n, o) {
  let s = o.includes(".") ? Cr(n, o) : () => n[o];
  if (Z(e)) {
    const r = t[e];
    I(r) ? go(s, r) : process.env.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e}"`, r);
  } else if (I(e))
    go(s, e.bind(n));
  else if (q(e))
    if (T(e))
      e.forEach((r) => Ir(r, t, n, o));
    else {
      const r = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(r) ? go(s, r, e) : process.env.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && w(`Invalid watch option: "${o}"`, e);
}
function Rr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let u;
  return l ? u = l : !s.length && !n && !o ? u = t : (u = {}, s.length && s.forEach(
    (d) => Fn(u, d, i, !0)
  ), Fn(u, t, i)), q(t) && r.set(t, u), u;
}
function Fn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Fn(e, r, n, !0), s && s.forEach(
    (i) => Fn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = zl[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const zl = {
  data: _s,
  props: Es,
  emits: Es,
  // objects
  methods: Gt,
  computed: Gt,
  // lifecycle
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  // assets
  components: Gt,
  directives: Gt,
  // watch
  watch: Xl,
  // provide / inject
  provide: _s,
  inject: Yl
};
function _s(e, t) {
  return t ? e ? function() {
    return ne(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Yl(e, t) {
  return Gt(To(e), To(t));
}
function To(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gt(e, t) {
  return e ? ne(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Es(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ne(
    /* @__PURE__ */ Object.create(null),
    ms(e),
    ms(t ?? {})
  ) : t;
}
function Xl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ne(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = pe(e[o], t[o]);
  return n;
}
function Fr() {
  return {
    app: null,
    config: {
      isNativeTag: qs,
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
let Zl = 0;
function Ql(e, t) {
  return function(o, s = null) {
    I(o) || (o = ne({}, o)), s != null && !q(s) && (process.env.NODE_ENV !== "production" && w("root props passed to app.mount() must be an object."), s = null);
    const r = Fr(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const d = r.app = {
      _uid: Zl++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: As,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && w("Plugin has already been applied to target app.") : p && I(p.install) ? (i.add(p), p.install(d, ...a)) : I(p) ? (i.add(p), p(d, ...a)) : process.env.NODE_ENV !== "production" && w(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && w(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), d;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && Mo(p, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[p] && w(`Component "${p}" has already been registered in target app.`), r.components[p] = a, d) : r.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && Vr(p), a ? (process.env.NODE_ENV !== "production" && r.directives[p] && w(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, d) : r.directives[p];
      },
      mount(p, a, m) {
        if (u)
          process.env.NODE_ENV !== "production" && w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const V = d._ceVNode || et(o, s);
          return V.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const R = at(V);
            R.el = null, e(R, p, m);
          }), e(V, p, m), u = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = V.component, dl(d, As)), so(V.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && w(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        u ? (Pe(
          l,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, hl(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && w("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in r.provides && (K(r.provides, p) ? w(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : w(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = a, d;
      },
      runWithContext(p) {
        const a = It;
        It = d;
        try {
          return p();
        } finally {
          It = a;
        }
      }
    };
    return d;
  };
}
let It = null;
const ec = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ee(t)}Modifiers`] || e[`${ut(t)}Modifiers`];
function tc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || X;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(gt(Ee(t)) in a)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${gt(Ee(t))}" prop.`
        );
      else {
        const m = p[t];
        I(m) && (m(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && ec(o, t.slice(7));
  if (i && (i.trim && (s = n.map((p) => Z(p) ? p.trim() : p)), i.number && (s = s.map(qn))), process.env.NODE_ENV !== "production" && bl(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[gt(p)] && w(
      `Event "${p}" is emitted in component ${gn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ut(
        t
      )}" instead of "${t}".`
    );
  }
  let l, u = o[l = gt(t)] || // also try camelCase event handler (#2249)
  o[l = gt(Ee(t))];
  !u && r && (u = o[l = gt(ut(t))]), u && Pe(
    u,
    e,
    6,
    s
  );
  const d = o[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Pe(
      d,
      e,
      6,
      s
    );
  }
}
const nc = /* @__PURE__ */ new WeakMap();
function jr(e, t, n = !1) {
  const o = n ? nc : t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!I(e)) {
    const u = (d) => {
      const p = jr(d, t, !0);
      p && (l = !0, ne(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !l ? (q(e) && o.set(e, null), null) : (T(r) ? r.forEach((u) => i[u] = null) : ne(i, r), q(e) && o.set(e, i), i);
}
function to(e, t) {
  return !e || !cn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, ut(t)) || K(e, t));
}
let Ao = !1;
function jn() {
  Ao = !0;
}
function bs(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: u,
    render: d,
    renderCache: p,
    props: a,
    data: m,
    setupState: V,
    ctx: R,
    inheritAttrs: C
  } = e, g = In(e);
  let E, M;
  process.env.NODE_ENV !== "production" && (Ao = !1);
  try {
    if (n.shapeFlag & 4) {
      const A = s || o, le = process.env.NODE_ENV !== "production" && V.__isScriptSetup ? new Proxy(A, {
        get(ge, fe, me) {
          return w(
            `Property '${String(
              fe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ge, fe, me);
        }
      }) : A;
      E = De(
        d.call(
          le,
          A,
          p,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Ke(a) : a,
          V,
          m,
          R
        )
      ), M = l;
    } else {
      const A = t;
      process.env.NODE_ENV !== "production" && l === a && jn(), E = De(
        A.length > 1 ? A(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Ke(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return jn(), /* @__PURE__ */ Ke(l);
            },
            slots: i,
            emit: u
          } : { attrs: l, slots: i, emit: u }
        ) : A(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Ke(a) : a,
          null
        )
      ), M = t.props ? l : oc(l);
    }
  } catch (A) {
    Ot.length = 0, an(A, e, 1), E = et(ye);
  }
  let L = E, Ne;
  if (process.env.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && ([L, Ne] = Hr(E)), M && C !== !1) {
    const A = Object.keys(M), { shapeFlag: le } = L;
    if (A.length) {
      if (le & 7)
        r && A.some(en) && (M = sc(
          M,
          r
        )), L = at(L, M, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Ao && L.type !== ye) {
        const ge = Object.keys(l), fe = [], me = [];
        for (let qe = 0, st = ge.length; qe < st; qe++) {
          const we = ge[qe];
          cn(we) ? en(we) || fe.push(we[2].toLowerCase() + we.slice(3)) : me.push(we);
        }
        me.length && w(
          `Extraneous non-props attributes (${me.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), fe.length && w(
          `Extraneous non-emits event listeners (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  if (n.dirs && (process.env.NODE_ENV !== "production" && !ys(L) && w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = at(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const A = Zn(L.type) && Tr(L) || L;
    process.env.NODE_ENV !== "production" && !ys(A) && w(
      "Component inside <Transition> renders non-element root node that cannot be animated."
    ), zo(A, n.transition);
  }
  return process.env.NODE_ENV !== "production" && Ne ? Ne(L) : E = L, In(g), E;
}
const Hr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = no(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Hr(o);
  } else return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [De(o), i];
};
function no(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (oo(s)) {
      if (s.type !== ye || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return no(n.children);
      }
    } else
      return;
  }
  return n;
}
const oc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || cn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, sc = (e, t) => {
  const n = {};
  for (const o in e)
    (!en(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, ys = (e) => e.shapeFlag & 7 || e.type === ye;
function rc(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: u } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && Oe || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Ns(o, i, d) : !!i;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const m = p[a];
        if (Lr(i, o, m) && !to(d, m))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Ns(o, i, d) : !0 : !!i;
  return !1;
}
function Ns(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (Lr(t, e, r) && !to(n, r))
      return !0;
  }
  return !1;
}
function Lr(e, t, n) {
  const o = e[n], s = t[n];
  return n === "style" && q(o) && q(s) ? !ft(o, s) : o !== s;
}
function ic({ vnode: e, parent: t, suspense: n }, o) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = o, e = s), s === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = o);
}
const Ur = {}, kr = () => Object.create(Ur), Kr = (e) => Object.getPrototypeOf(e) === Ur;
function lc(e, t, n, o = !1) {
  const s = {}, r = kr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Br(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && qr(t || {}, s, e), n ? e.props = o ? s : /* @__PURE__ */ Ji(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function cc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function uc(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = /* @__PURE__ */ j(s), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && cc(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let m = p[a];
        if (to(e.emitsOptions, m))
          continue;
        const V = t[m];
        if (u)
          if (K(r, m))
            V !== r[m] && (r[m] = V, d = !0);
          else {
            const R = Ee(m);
            s[R] = $o(
              u,
              l,
              R,
              V,
              e,
              !1
            );
          }
        else
          V !== r[m] && (r[m] = V, d = !0);
      }
    }
  } else {
    Br(e, t, s, r) && (d = !0);
    let p;
    for (const a in l)
      (!t || // for camelCase
      !K(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = ut(a)) === a || !K(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[a] = $o(
        u,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete s[a]);
    if (r !== l)
      for (const a in r)
        (!t || !K(t, a)) && (delete r[a], d = !0);
  }
  d && ke(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && qr(t || {}, s, e);
}
function Br(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if (zt(u))
        continue;
      const d = t[u];
      let p;
      s && K(s, p = Ee(u)) ? !r || !r.includes(p) ? n[p] = d : (l || (l = {}))[p] = d : to(e.emitsOptions, u) || (!(u in o) || d !== o[u]) && (o[u] = d, i = !0);
    }
  if (r) {
    const u = /* @__PURE__ */ j(n), d = l || X;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = $o(
        s,
        u,
        a,
        d[a],
        e,
        !K(d, a)
      );
    }
  }
  return i;
}
function $o(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = K(i, "default");
    if (l && o === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && I(u)) {
        const { propsDefaults: d } = s;
        if (n in d)
          o = d[n];
        else {
          const p = hn(s);
          o = d[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        o = u;
      s.ce && s.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === ut(n)) && (o = !0));
  }
  return o;
}
const fc = /* @__PURE__ */ new WeakMap();
function Wr(e, t, n = !1) {
  const o = n ? fc : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let u = !1;
  if (!I(e)) {
    const p = (a) => {
      u = !0;
      const [m, V] = Wr(a, t, !0);
      ne(i, m), V && l.push(...V);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return q(e) && o.set(e, Pt), Pt;
  if (T(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !Z(r[p]) && w("props must be strings when using array syntax.", r[p]);
      const a = Ee(r[p]);
      Os(a) && (i[a] = X);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !q(r) && w("invalid props options", r);
    for (const p in r) {
      const a = Ee(p);
      if (Os(a)) {
        const m = r[p], V = i[a] = T(m) || I(m) ? { type: m } : ne({}, m), R = V.type;
        let C = !1, g = !0;
        if (T(R))
          for (let E = 0; E < R.length; ++E) {
            const M = R[E], L = I(M) && M.name;
            if (L === "Boolean") {
              C = !0;
              break;
            } else L === "String" && (g = !1);
          }
        else
          C = I(R) && R.name === "Boolean";
        V[
          0
          /* shouldCast */
        ] = C, V[
          1
          /* shouldCastTrue */
        ] = g, (C || K(V, "default")) && l.push(a);
      }
    }
  }
  const d = [i, l];
  return q(e) && o.set(e, d), d;
}
function Os(e) {
  return e[0] !== "$" && !zt(e) ? !0 : (process.env.NODE_ENV !== "production" && w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ac(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function qr(e, t, n) {
  const o = /* @__PURE__ */ j(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => Ee(i));
  for (const i in s) {
    let l = s[i];
    l != null && pc(
      i,
      o[i],
      l,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Ke(o) : o,
      !r.includes(i)
    );
  }
}
function pc(e, t, n, o, s) {
  const { type: r, required: i, validator: l, skipCheck: u } = n;
  if (i && s) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !u) {
      let d = !1;
      const p = T(r) ? r : [r], a = [];
      for (let m = 0; m < p.length && !d; m++) {
        const { valid: V, expectedType: R } = hc(t, p[m]);
        a.push(R || ""), d = V;
      }
      if (!d) {
        w(gc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const dc = /* @__PURE__ */ nt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function hc(e, t) {
  let n;
  const o = ac(t);
  if (o === "null")
    n = e === null;
  else if (dc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = q(e) : o === "Array" ? n = T(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function gc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Wn).join(" | ")}`;
  const s = n[0], r = jo(t), i = xs(t, s), l = xs(t, r);
  return n.length === 1 && ws(s) && mc(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, ws(r) && (o += `with value ${l}.`), o;
}
function xs(e, t) {
  return Ce(e) ? e.toString() : t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ws(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function mc(...e) {
  return e.every((t) => {
    const n = t.toLowerCase();
    return n !== "boolean" && n !== "symbol";
  });
}
const Xo = (e) => e === "_" || e === "_ctx" || e === "$stable", Zo = (e) => T(e) ? e.map(De) : [De(e)], vc = (e, t, n) => {
  if (t._n)
    return t;
  const o = yl((...s) => (process.env.NODE_ENV !== "production" && oe && !(n === null && he) && !(n && n.root !== oe.root) && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Zo(t(...s))), n);
  return o._c = !1, o;
}, Gr = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (Xo(s)) continue;
    const r = e[s];
    if (I(r))
      t[s] = vc(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && w(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Zo(r);
      t[s] = () => i;
    }
  }
}, Jr = (e, t) => {
  process.env.NODE_ENV !== "production" && !Qn(e.vnode) && w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Zo(t);
  e.slots.default = () => n;
}, Po = (e, t, n) => {
  for (const o in t)
    (n || !Xo(o)) && (e[o] = t[o]);
}, _c = (e, t, n) => {
  const o = e.slots = kr();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Po(o, t, n), n && Tn(o, "_", s, !0)) : Gr(t, o);
  } else t && Jr(e, t);
}, Ec = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = X;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Oe ? (Po(s, t, n), ke(e, "set", "$slots")) : n && l === 1 ? r = !1 : Po(s, t, n) : (r = !t.$stable, Gr(t, s)), i = t;
  } else t && (Jr(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !Xo(l) && i[l] == null && delete s[l];
};
let Kt, ze;
function St(e, t) {
  e.appContext.config.performance && Hn() && ze.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && _l(e, t, Hn() ? ze.now() : Date.now());
}
function Ct(e, t) {
  if (e.appContext.config.performance && Hn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", s = `<${gn(e, e.type)}> ${t}`;
    ze.mark(o), ze.measure(s, n, o), ze.clearMeasures(s), ze.clearMarks(n), ze.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && El(e, t, Hn() ? ze.now() : Date.now());
}
function Hn() {
  return Kt !== void 0 || (typeof window < "u" && window.performance ? (Kt = !0, ze = window.performance) : Kt = !1), Kt;
}
function bc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const _e = wc;
function yc(e) {
  return Nc(e);
}
function Nc(e, t) {
  bc();
  const n = fn();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Go(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: u,
    setText: d,
    setElementText: p,
    parentNode: a,
    nextSibling: m,
    setScopeId: V = re,
    insertStaticContent: R
  } = e, C = (c, f, h, N = null, b = null, v = null, D = void 0, x = null, O = process.env.NODE_ENV !== "production" && Oe ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Bt(c, f) && (N = vn(c), it(c, b, v, !0), c = null), f.patchFlag === -2 && (O = !1, f.dynamicChildren = null);
    const { type: y, ref: P, shapeFlag: S } = f;
    switch (y) {
      case dn:
        g(c, f, h, N);
        break;
      case ye:
        E(c, f, h, N);
        break;
      case Sn:
        c == null ? M(f, h, N, D) : process.env.NODE_ENV !== "production" && L(c, f, h, D);
        break;
      case Q:
        mn(
          c,
          f,
          h,
          N,
          b,
          v,
          D,
          x,
          O
        );
        break;
      default:
        S & 1 ? le(
          c,
          f,
          h,
          N,
          b,
          v,
          D,
          x,
          O
        ) : S & 6 ? Qo(
          c,
          f,
          h,
          N,
          b,
          v,
          D,
          x,
          O
        ) : S & 64 || S & 128 ? y.process(
          c,
          f,
          h,
          N,
          b,
          v,
          D,
          x,
          O,
          Lt
        ) : process.env.NODE_ENV !== "production" && w("Invalid VNode type:", y, `(${typeof y})`);
    }
    P != null && b ? Zt(P, c && c.ref, v, f || c, !f) : P == null && c && c.ref != null && Zt(c.ref, null, v, c, !0);
  }, g = (c, f, h, N) => {
    if (c == null)
      o(
        f.el = l(f.children),
        h,
        N
      );
    else {
      const b = f.el = c.el;
      f.children !== c.children && d(b, f.children);
    }
  }, E = (c, f, h, N) => {
    c == null ? o(
      f.el = u(f.children || ""),
      h,
      N
    ) : f.el = c.el;
  }, M = (c, f, h, N) => {
    [c.el, c.anchor] = R(
      c.children,
      f,
      h,
      N,
      c.el,
      c.anchor
    );
  }, L = (c, f, h, N) => {
    if (f.children !== c.children) {
      const b = m(c.anchor);
      A(c), [f.el, f.anchor] = R(
        f.children,
        h,
        b,
        N
      );
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, Ne = ({ el: c, anchor: f }, h, N) => {
    let b;
    for (; c && c !== f; )
      b = m(c), o(c, h, N), c = b;
    o(f, h, N);
  }, A = ({ el: c, anchor: f }) => {
    let h;
    for (; c && c !== f; )
      h = m(c), s(c), c = h;
    s(f);
  }, le = (c, f, h, N, b, v, D, x, O) => {
    if (f.type === "svg" ? D = "svg" : f.type === "math" && (D = "mathml"), c == null)
      ge(
        f,
        h,
        N,
        b,
        v,
        D,
        x,
        O
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), qe(
          c,
          f,
          b,
          v,
          D,
          x,
          O
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ge = (c, f, h, N, b, v, D, x) => {
    let O, y;
    const { props: P, shapeFlag: S, transition: $, dirs: F } = c;
    if (O = c.el = i(
      c.type,
      v,
      P && P.is,
      P
    ), S & 8 ? p(O, c.children) : S & 16 && me(
      c.children,
      O,
      null,
      N,
      b,
      _o(c, v),
      D,
      x
    ), F && dt(c, null, N, "created"), fe(O, c, c.scopeId, D, N), P) {
      for (const z in P)
        z !== "value" && !zt(z) && r(O, z, null, P[z], v, N);
      "value" in P && r(O, "value", null, P.value, v), (y = P.onVnodeBeforeMount) && He(y, N, c);
    }
    process.env.NODE_ENV !== "production" && (Tn(O, "__vnode", c, !0), Tn(O, "__vueParentComponent", N, !0)), F && dt(c, null, N, "beforeMount");
    const B = Oc(b, $);
    if (B && $.beforeEnter(O), o(O, f, h), (y = P && P.onVnodeMounted) || B || F) {
      const z = process.env.NODE_ENV !== "production" && Oe;
      _e(() => {
        let G;
        process.env.NODE_ENV !== "production" && (G = as(z));
        try {
          y && He(y, N, c), B && $.enter(O), F && dt(c, null, N, "mounted");
        } finally {
          process.env.NODE_ENV !== "production" && as(G);
        }
      }, b);
    }
  }, fe = (c, f, h, N, b) => {
    if (h && V(c, h), N)
      for (let v = 0; v < N.length; v++)
        V(c, N[v]);
    if (b) {
      let v = b.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = no(v.children) || v), f === v || Xr(v.type) && (v.ssContent === f || v.ssFallback === f)) {
        const D = b.vnode;
        fe(
          c,
          D,
          D.scopeId,
          D.slotScopeIds,
          b.parent
        );
      }
    }
  }, me = (c, f, h, N, b, v, D, x, O = 0) => {
    for (let y = O; y < c.length; y++) {
      const P = c[y] = x ? Ye(c[y]) : De(c[y]);
      C(
        null,
        P,
        f,
        h,
        N,
        b,
        v,
        D,
        x
      );
    }
  }, qe = (c, f, h, N, b, v, D) => {
    const x = f.el = c.el;
    process.env.NODE_ENV !== "production" && (x.__vnode = f);
    let { patchFlag: O, dynamicChildren: y, dirs: P } = f;
    O |= c.patchFlag & 16;
    const S = c.props || X, $ = f.props || X;
    let F;
    if (h && ht(h, !1), (F = $.onVnodeBeforeUpdate) && He(F, h, f, c), P && dt(f, c, h, "beforeUpdate"), h && ht(h, !0), // HMR updated, force full diff
    (process.env.NODE_ENV !== "production" && Oe || // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!c.dynamicChildren || c.dynamicChildren.length !== y.length)) && (O = 0, D = !1, y = null), (S.innerHTML && $.innerHTML == null || S.textContent && $.textContent == null) && p(x, ""), y ? (st(
      c.dynamicChildren,
      y,
      x,
      h,
      N,
      _o(f, b),
      v
    ), process.env.NODE_ENV !== "production" && Vn(c, f)) : D || Me(
      c,
      f,
      x,
      null,
      h,
      N,
      _o(f, b),
      v,
      !1
    ), O > 0) {
      if (O & 16)
        we(x, S, $, h, b);
      else if (O & 2 && S.class !== $.class && r(x, "class", null, $.class, b), O & 4 && r(x, "style", S.style, $.style, b), O & 8) {
        const B = f.dynamicProps;
        for (let z = 0; z < B.length; z++) {
          const G = B[z], ee = S[G], ce = $[G];
          (ce !== ee || G === "value") && r(x, G, ee, ce, b, h);
        }
      }
      O & 1 && c.children !== f.children && p(x, f.children);
    } else !D && y == null && we(x, S, $, h, b);
    ((F = $.onVnodeUpdated) || P) && _e(() => {
      F && He(F, h, f, c), P && dt(f, c, h, "updated");
    }, N);
  }, st = (c, f, h, N, b, v, D) => {
    for (let x = 0; x < f.length; x++) {
      const O = c[x], y = f[x], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Q || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bt(O, y) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? a(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      C(
        O,
        y,
        P,
        null,
        N,
        b,
        v,
        D,
        !0
      );
    }
  }, we = (c, f, h, N, b) => {
    if (f !== h) {
      if (f !== X)
        for (const v in f)
          !zt(v) && !(v in h) && r(
            c,
            v,
            f[v],
            null,
            b,
            N
          );
      for (const v in h) {
        if (zt(v)) continue;
        const D = h[v], x = f[v];
        D !== x && v !== "value" && r(c, v, x, D, b, N);
      }
      "value" in h && r(c, "value", f.value, h.value, b);
    }
  }, mn = (c, f, h, N, b, v, D, x, O) => {
    const y = f.el = c ? c.el : l(""), P = f.anchor = c ? c.anchor : l("");
    let { patchFlag: S, dynamicChildren: $, slotScopeIds: F } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Oe || S & 2048) && (S = 0, O = !1, $ = null), F && (x = x ? x.concat(F) : F), c == null ? (o(y, h, N), o(P, h, N), me(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      P,
      b,
      v,
      D,
      x,
      O
    )) : S > 0 && S & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === $.length ? (st(
      c.dynamicChildren,
      $,
      h,
      b,
      v,
      D,
      x
    ), process.env.NODE_ENV !== "production" ? Vn(c, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || b && f === b.subTree) && Vn(
        c,
        f,
        !0
        /* shallow */
      )
    )) : Me(
      c,
      f,
      h,
      P,
      b,
      v,
      D,
      x,
      O
    );
  }, Qo = (c, f, h, N, b, v, D, x, O) => {
    f.slotScopeIds = x, c == null ? f.shapeFlag & 512 ? b.ctx.activate(
      f,
      h,
      N,
      D,
      O
    ) : rt(
      f,
      h,
      N,
      b,
      v,
      D,
      O
    ) : ve(c, f, O);
  }, rt = (c, f, h, N, b, v, D) => {
    const x = c.component = Pc(
      c,
      N,
      b
    );
    if (process.env.NODE_ENV !== "production" && x.type.__hmrId && ul(x), process.env.NODE_ENV !== "production" && (On(c), St(x, "mount")), Qn(c) && (x.ctx.renderer = Lt), process.env.NODE_ENV !== "production" && St(x, "init"), Ic(x, !1, D), process.env.NODE_ENV !== "production" && Ct(x, "init"), process.env.NODE_ENV !== "production" && Oe && (c.el = null), x.asyncDep) {
      if (b && b.registerDep(x, U, D), !c.el) {
        const O = x.subTree = et(ye);
        E(null, O, f, h), c.placeholder = O.el;
      }
    } else
      U(
        x,
        c,
        f,
        h,
        b,
        v,
        D
      );
    process.env.NODE_ENV !== "production" && (xn(), Ct(x, "mount"));
  }, ve = (c, f, h) => {
    const N = f.component = c.component;
    if (rc(c, f, h))
      if (N.asyncDep && !N.asyncResolved) {
        process.env.NODE_ENV !== "production" && On(f), H(N, f, h), process.env.NODE_ENV !== "production" && xn();
        return;
      } else
        N.next = f, N.update();
    else
      f.el = c.el, N.vnode = f;
  }, U = (c, f, h, N, b, v, D) => {
    const x = () => {
      if (c.isMounted) {
        let { next: S, bu: $, u: F, parent: B, vnode: z } = c;
        {
          const Re = zr(c);
          if (Re) {
            S && (S.el = z.el, H(c, S, D)), Re.asyncDep.then(() => {
              _e(() => {
                c.isUnmounted || y();
              }, b);
            });
            return;
          }
        }
        let G = S, ee;
        process.env.NODE_ENV !== "production" && On(S || c.vnode), ht(c, !1), S ? (S.el = z.el, H(c, S, D)) : S = z, $ && At($), (ee = S.props && S.props.onVnodeBeforeUpdate) && He(ee, B, S, z), ht(c, !0), process.env.NODE_ENV !== "production" && St(c, "render");
        const ce = bs(c);
        process.env.NODE_ENV !== "production" && Ct(c, "render");
        const Ie = c.subTree;
        c.subTree = ce, process.env.NODE_ENV !== "production" && St(c, "patch"), C(
          Ie,
          ce,
          // parent may have changed if it's in a teleport
          a(Ie.el),
          // anchor may have changed if it's in a fragment
          vn(Ie),
          c,
          b,
          v
        ), process.env.NODE_ENV !== "production" && Ct(c, "patch"), S.el = ce.el, G === null && ic(c, ce.el), F && _e(F, b), (ee = S.props && S.props.onVnodeUpdated) && _e(
          () => He(ee, B, S, z),
          b
        ), process.env.NODE_ENV !== "production" && xr(c), process.env.NODE_ENV !== "production" && xn();
      } else {
        let S;
        const { el: $, props: F } = f, { bm: B, m: z, parent: G, root: ee, type: ce } = c, Ie = Qt(f);
        ht(c, !1), B && At(B), !Ie && (S = F && F.onVnodeBeforeMount) && He(S, G, f), ht(c, !0);
        {
          ee.ce && ee.ce._hasShadowRoot() && ee.ce._injectChildStyle(
            ce,
            c.parent ? c.parent.type : void 0
          ), process.env.NODE_ENV !== "production" && St(c, "render");
          const Re = c.subTree = bs(c);
          process.env.NODE_ENV !== "production" && Ct(c, "render"), process.env.NODE_ENV !== "production" && St(c, "patch"), C(
            null,
            Re,
            h,
            N,
            c,
            b,
            v
          ), process.env.NODE_ENV !== "production" && Ct(c, "patch"), f.el = Re.el;
        }
        if (z && _e(z, b), !Ie && (S = F && F.onVnodeMounted)) {
          const Re = f;
          _e(
            () => He(S, G, Re),
            b
          );
        }
        (f.shapeFlag & 256 || G && Qt(G.vnode) && G.vnode.shapeFlag & 256) && c.a && _e(c.a, b), c.isMounted = !0, process.env.NODE_ENV !== "production" && gl(c), f = h = N = null;
      }
    };
    c.scope.on();
    const O = c.effect = new Zs(x);
    c.scope.off();
    const y = c.update = O.run.bind(O), P = c.job = O.runIfDirty.bind(O);
    P.i = c, P.id = c.uid, O.scheduler = () => Xn(P), ht(c, !0), process.env.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (S) => At(c.rtc, S) : void 0, O.onTrigger = c.rtg ? (S) => At(c.rtg, S) : void 0), y();
  }, H = (c, f, h) => {
    f.component = c;
    const N = c.vnode.props;
    c.vnode = f, c.next = null, uc(c, f.props, N, h), Ec(c, f.children, h), Ae(), fs(c), $e();
  }, Me = (c, f, h, N, b, v, D, x, O = !1) => {
    const y = c && c.children, P = c ? c.shapeFlag : 0, S = f.children, { patchFlag: $, shapeFlag: F } = f;
    if ($ > 0) {
      if ($ & 128) {
        jt(
          y,
          S,
          h,
          N,
          b,
          v,
          D,
          x,
          O
        );
        return;
      } else if ($ & 256) {
        ro(
          y,
          S,
          h,
          N,
          b,
          v,
          D,
          x,
          O
        );
        return;
      }
    }
    F & 8 ? (P & 16 && Ht(y, b, v), S !== y && p(h, S)) : P & 16 ? F & 16 ? jt(
      y,
      S,
      h,
      N,
      b,
      v,
      D,
      x,
      O
    ) : Ht(y, b, v, !0) : (P & 8 && p(h, ""), F & 16 && me(
      S,
      h,
      N,
      b,
      v,
      D,
      x,
      O
    ));
  }, ro = (c, f, h, N, b, v, D, x, O) => {
    c = c || Pt, f = f || Pt;
    const y = c.length, P = f.length, S = Math.min(y, P);
    let $;
    for ($ = 0; $ < S; $++) {
      const F = f[$] = O ? Ye(f[$]) : De(f[$]);
      C(
        c[$],
        F,
        h,
        null,
        b,
        v,
        D,
        x,
        O
      );
    }
    y > P ? Ht(
      c,
      b,
      v,
      !0,
      !1,
      S
    ) : me(
      f,
      h,
      N,
      b,
      v,
      D,
      x,
      O,
      S
    );
  }, jt = (c, f, h, N, b, v, D, x, O) => {
    let y = 0;
    const P = f.length;
    let S = c.length - 1, $ = P - 1;
    for (; y <= S && y <= $; ) {
      const F = c[y], B = f[y] = O ? Ye(f[y]) : De(f[y]);
      if (Bt(F, B))
        C(
          F,
          B,
          h,
          null,
          b,
          v,
          D,
          x,
          O
        );
      else
        break;
      y++;
    }
    for (; y <= S && y <= $; ) {
      const F = c[S], B = f[$] = O ? Ye(f[$]) : De(f[$]);
      if (Bt(F, B))
        C(
          F,
          B,
          h,
          null,
          b,
          v,
          D,
          x,
          O
        );
      else
        break;
      S--, $--;
    }
    if (y > S) {
      if (y <= $) {
        const F = $ + 1, B = F < P ? f[F].el : N;
        for (; y <= $; )
          C(
            null,
            f[y] = O ? Ye(f[y]) : De(f[y]),
            h,
            B,
            b,
            v,
            D,
            x,
            O
          ), y++;
      }
    } else if (y > $)
      for (; y <= S; )
        it(c[y], b, v, !0), y++;
    else {
      const F = y, B = y, z = /* @__PURE__ */ new Map();
      for (y = B; y <= $; y++) {
        const ae = f[y] = O ? Ye(f[y]) : De(f[y]);
        ae.key != null && (process.env.NODE_ENV !== "production" && z.has(ae.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(ae.key),
          "Make sure keys are unique."
        ), z.set(ae.key, y));
      }
      let G, ee = 0;
      const ce = $ - B + 1;
      let Ie = !1, Re = 0;
      const Ut = new Array(ce);
      for (y = 0; y < ce; y++) Ut[y] = 0;
      for (y = F; y <= S; y++) {
        const ae = c[y];
        if (ee >= ce) {
          it(ae, b, v, !0);
          continue;
        }
        let Fe;
        if (ae.key != null)
          Fe = z.get(ae.key);
        else
          for (G = B; G <= $; G++)
            if (Ut[G - B] === 0 && Bt(ae, f[G])) {
              Fe = G;
              break;
            }
        Fe === void 0 ? it(ae, b, v, !0) : (Ut[Fe - B] = y + 1, Fe >= Re ? Re = Fe : Ie = !0, C(
          ae,
          f[Fe],
          h,
          null,
          b,
          v,
          D,
          x,
          O
        ), ee++);
      }
      const ts = Ie ? xc(Ut) : Pt;
      for (G = ts.length - 1, y = ce - 1; y >= 0; y--) {
        const ae = B + y, Fe = f[ae], ns = f[ae + 1], os = ae + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ns.el || Yr(ns)
        ) : N;
        Ut[y] === 0 ? C(
          null,
          Fe,
          h,
          os,
          b,
          v,
          D,
          x,
          O
        ) : Ie && (G < 0 || y !== ts[G] ? Dt(Fe, h, os, 2) : G--);
      }
    }
  }, Dt = (c, f, h, N, b = null) => {
    const { el: v, type: D, transition: x, children: O, shapeFlag: y } = c;
    if (y & 6) {
      Dt(c.component.subTree, f, h, N);
      return;
    }
    if (y & 128) {
      c.suspense.move(f, h, N);
      return;
    }
    if (y & 64) {
      D.move(c, f, h, Lt);
      return;
    }
    if (D === Q) {
      o(v, f, h);
      for (let S = 0; S < O.length; S++)
        Dt(O[S], f, h, N);
      o(c.anchor, f, h);
      return;
    }
    if (D === Sn) {
      Ne(c, f, h);
      return;
    }
    if (N !== 2 && y & 1 && x)
      if (N === 0)
        x.persisted && !v[mo] ? o(v, f, h) : (x.beforeEnter(v), o(v, f, h), _e(() => x.enter(v), b));
      else {
        const { leave: S, delayLeave: $, afterLeave: F } = x, B = () => {
          c.ctx.isUnmounted ? s(v) : o(v, f, h);
        }, z = () => {
          const G = v._isLeaving || !!v[mo];
          v._isLeaving && v[mo](
            !0
            /* cancelled */
          ), x.persisted && !G ? B() : S(v, () => {
            B(), F && F();
          });
        };
        $ ? $(v, B, z) : z();
      }
    else
      o(v, f, h);
  }, it = (c, f, h, N = !1, b = !1) => {
    const {
      type: v,
      props: D,
      ref: x,
      children: O,
      dynamicChildren: y,
      shapeFlag: P,
      patchFlag: S,
      dirs: $,
      cacheIndex: F,
      memo: B
    } = c;
    if (S === -2 && (b = !1), x != null && (Ae(), Zt(x, null, h, c, !0), $e()), F != null && (f.renderCache[F] = void 0), P & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const z = P & 1 && $, G = !Qt(c);
    let ee;
    if (G && (ee = D && D.onVnodeBeforeUnmount) && He(ee, f, c), P & 6)
      fi(c.component, h, N);
    else {
      if (P & 128) {
        c.suspense.unmount(h, N);
        return;
      }
      z && dt(c, null, f, "beforeUnmount"), P & 64 ? c.type.remove(
        c,
        f,
        h,
        Lt,
        N
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== Q || S > 0 && S & 64) ? Ht(
        y,
        f,
        h,
        !1,
        !0
      ) : (v === Q && S & 384 || !b && P & 16) && Ht(O, f, h), N && io(c);
    }
    const ce = B != null && F == null;
    (G && (ee = D && D.onVnodeUnmounted) || z || ce) && _e(() => {
      ee && He(ee, f, c), z && dt(c, null, f, "unmounted"), ce && (c.el = null);
    }, h);
  }, io = (c) => {
    const { type: f, el: h, anchor: N, transition: b } = c;
    if (f === Q) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((D) => {
        D.type === ye ? s(D.el) : io(D);
      }) : ui(h, N);
      return;
    }
    if (f === Sn) {
      A(c);
      return;
    }
    const v = () => {
      s(h), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: D, delayLeave: x } = b, O = () => D(h, v);
      x ? x(c.el, v, O) : O();
    } else
      v();
  }, ui = (c, f) => {
    let h;
    for (; c !== f; )
      h = m(c), s(c), c = h;
    s(f);
  }, fi = (c, f, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && fl(c);
    const { bum: N, scope: b, job: v, subTree: D, um: x, m: O, a: y } = c;
    Ds(O), Ds(y), N && At(N), b.stop(), v && (v.flags |= 8, it(D, c, f, h)), x && _e(x, f), _e(() => {
      c.isUnmounted = !0;
    }, f), process.env.NODE_ENV !== "production" && vl(c);
  }, Ht = (c, f, h, N = !1, b = !1, v = 0) => {
    for (let D = v; D < c.length; D++)
      it(c[D], f, h, N, b);
  }, vn = (c) => {
    if (c.shapeFlag & 6)
      return vn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = m(c.anchor || c.el), h = f && f[Dl];
    return h ? m(h) : f;
  };
  let lo = !1;
  const es = (c, f, h) => {
    let N;
    c == null ? f._vnode && (it(f._vnode, null, null, !0), N = f._vnode.component) : C(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = c, lo || (lo = !0, fs(N), yr(), lo = !1);
  }, Lt = {
    p: C,
    um: it,
    m: Dt,
    r: io,
    mt: rt,
    mc: me,
    pc: Me,
    pbc: st,
    n: vn,
    o: e
  };
  return {
    render: es,
    hydrate: void 0,
    createApp: Ql(es)
  };
}
function _o({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ht({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Oc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Vn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (T(o) && T(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = Ye(s[r]), l.el = i.el), !n && l.patchFlag !== -2 && Vn(i, l)), l.type === dn && (l.patchFlag === -1 && (l = s[r] = Ye(l)), l.el = i.el), l.type === ye && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function xc(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const d = e[o];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < d ? r = l + 1 : i = l;
      d < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function zr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : zr(t);
}
function Ds(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Yr(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Yr(t.subTree) : null;
}
const Xr = (e) => e.__isSuspense;
function wc(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : br(e);
}
const Q = /* @__PURE__ */ Symbol.for("v-fgt"), dn = /* @__PURE__ */ Symbol.for("v-txt"), ye = /* @__PURE__ */ Symbol.for("v-cmt"), Sn = /* @__PURE__ */ Symbol.for("v-stc"), Ot = [];
let xe = null;
function k(e = !1) {
  Ot.push(xe = e ? null : []);
}
function Zr() {
  Ot.pop(), xe = Ot[Ot.length - 1] || null;
}
let sn = 1;
function Vs(e, t = !1) {
  sn += e, e < 0 && xe && t && (xe.hasOnce = !0);
}
function Qr(e) {
  return e.dynamicChildren = sn > 0 ? xe || Pt : null, Zr(), sn > 0 && xe && xe.push(e), e;
}
function W(e, t, n, o, s, r) {
  return Qr(
    _(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function Dc(e, t, n, o, s) {
  return Qr(
    et(
      e,
      t,
      n,
      o,
      s,
      !0
    )
  );
}
function oo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = wn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Vc = (...e) => ti(
  ...e
), ei = ({ key: e }) => e ?? null, Cn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Z(e) || /* @__PURE__ */ ie(e) || I(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function _(e, t = null, n = null, o = 0, s = null, r = e === Q ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ei(t),
    ref: t && Cn(t),
    scopeId: Dr,
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
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: he
  };
  if (l ? (Ln(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= Z(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && w("VNode created with invalid key (NaN). VNode type:", u.type), process.env.NODE_ENV !== "production" && t && u.shapeFlag & 1) {
    const d = t.innerHTML != null ? "innerHTML" : t.textContent != null ? "textContent" : null;
    d && Sc(u.children) && w(
      `The \`${d}\` prop on <${u.type}> will override its children. Remove either the \`${d}\` prop or the children.`
    );
  }
  return sn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && xe.push(u), u;
}
function Sc(e) {
  return Z(e) ? e !== "" : T(e) ? e.length > 0 : !1;
}
const et = process.env.NODE_ENV !== "production" ? Vc : ti;
function ti(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === Ll) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = ye), oo(e)) {
    const l = at(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ln(l, n), sn > 0 && !r && xe && (l.shapeFlag & 6 ? xe[xe.indexOf(e)] = l : xe.push(l)), l.patchFlag = -2, l;
  }
  if (li(e) && (e = e.__vccOpts), t) {
    t = Cc(t);
    let { class: l, style: u } = t;
    l && !Z(l) && (t.class = Uo(l)), q(u) && (/* @__PURE__ */ An(u) && !T(u) && (u = ne({}, u)), t.style = Lo(u));
  }
  const i = Z(e) ? 1 : Xr(e) ? 128 : Zn(e) ? 64 : q(e) ? 4 : I(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && /* @__PURE__ */ An(e) && (e = /* @__PURE__ */ j(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), _(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function Cc(e) {
  return e ? /* @__PURE__ */ An(e) || Kr(e) ? ne({}, e) : e : null;
}
function at(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: u } = e, d = t ? Tc(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && ei(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(Cn(t)) : [r, Cn(t)] : Cn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && T(l) ? l.map(ni) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Q ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && at(e.ssContent),
    ssFallback: e.ssFallback && at(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && zo(
    p,
    u.clone(p)
  ), p;
}
function ni(e) {
  const t = at(e);
  return T(e.children) && (t.children = e.children.map(ni)), t;
}
function te(e = " ", t = 0) {
  return et(dn, null, e, t);
}
function Tt(e = "", t = !1) {
  return t ? (k(), Dc(ye, null, e)) : et(ye, null, e);
}
function De(e) {
  return e == null || typeof e == "boolean" ? et(ye) : T(e) ? et(
    Q,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : oo(e) ? Ye(e) : et(dn, null, String(e));
}
function Ye(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : at(e);
}
function Ln(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ln(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Kr(t) ? t._ctx = he : s === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (I(t)) {
    if (o & 65) {
      Ln(e, { default: t });
      return;
    }
    t = { default: t, _ctx: he }, n = 32;
  } else
    t = String(t), o & 64 ? (n = 16, t = [te(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Tc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Uo([t.class, o.class]));
      else if (s === "style")
        t.style = Lo([t.style, o.style]);
      else if (cn(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(T(r) && r.includes(i)) ? t[s] = r ? [].concat(r, i) : i : i == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !en(s) && (t[s] = i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function He(e, t, n, o = null) {
  Pe(e, t, 7, [
    n,
    o
  ]);
}
const Ac = Fr();
let $c = 0;
function Pc(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Ac, r = {
    uid: $c++,
    vnode: e,
    type: o,
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
    scope: new Ci(
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
    propsOptions: Wr(o, s),
    emitsOptions: jr(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = Kl(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = tc.bind(null, r), e.ce && e.ce(r), r;
}
let oe = null;
const oi = () => oe || he;
let Un, rn;
{
  const e = fn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  Un = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => oe = n
  ), rn = t(
    "__VUE_SSR_SETTERS__",
    (n) => ln = n
  );
}
const hn = (e) => {
  const t = oe;
  return Un(e), e.scope.on(), () => {
    e.scope.off(), Un(t);
  };
}, Ss = () => {
  oe && oe.scope.off(), Un(null);
}, Mc = /* @__PURE__ */ nt("slot,component");
function Mo(e, { isNativeTag: t }) {
  (Mc(e) || t(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function si(e) {
  return e.vnode.shapeFlag & 4;
}
let ln = !1;
function Ic(e, t = !1, n = !1) {
  t && rn(t);
  const { props: o, children: s } = e.vnode, r = si(e);
  lc(e, o, r, t), _c(e, s, n || t);
  const i = r ? Rc(e, t) : void 0;
  return t && rn(!1), i;
}
function Rc(e, t) {
  const n = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && Mo(n.name, e.appContext.config), n.components) {
      const s = Object.keys(n.components);
      for (let r = 0; r < s.length; r++)
        Mo(s[r], e.appContext.config);
    }
    if (n.directives) {
      const s = Object.keys(n.directives);
      for (let r = 0; r < s.length; r++)
        Vr(s[r]);
    }
    n.compilerOptions && Fc() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mr), process.env.NODE_ENV !== "production" && Bl(e);
  const { setup: o } = n;
  if (o) {
    Ae();
    const s = e.setupContext = o.length > 1 ? Hc(e) : null, r = hn(e), i = Ft(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ Ke(e.props) : e.props,
        s
      ]
    ), l = Fo(i);
    if ($e(), r(), (l || e.sp) && !Qt(e) && Ar(e), l) {
      if (i.then(Ss, Ss), t)
        return i.then((u) => {
          rn(!0);
          try {
            Cs(e, u, t);
          } finally {
            rn(!1);
          }
        }).catch((u) => {
          an(u, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const u = gn(e, n);
        w(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Cs(e, i, t);
  } else
    ri(e, t);
}
function Cs(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (process.env.NODE_ENV !== "production" && oo(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = gr(t), process.env.NODE_ENV !== "production" && Wl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), ri(e, n);
}
const Fc = () => !0;
function ri(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || re);
  {
    const s = hn(e);
    Ae();
    try {
      Gl(e);
    } finally {
      $e(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === re && !t && (o.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : w("Component is missing template or render function: ", o));
}
const Ts = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return jn(), se(e, "get", ""), e[t];
  },
  set() {
    return w("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return w("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return se(e, "get", ""), e[t];
  }
};
function jc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return se(e, "get", "$slots"), t[n];
    }
  });
}
function Hc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && w("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : /* @__PURE__ */ ie(n) && (o = "ref")), o !== "object" && w(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ts));
      },
      get slots() {
        return o || (o = jc(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Ts),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function so(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(gr(zi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Nt)
        return Nt[n](e);
    },
    has(t, n) {
      return n in t || n in Nt;
    }
  })) : e.proxy;
}
const Lc = /(?:^|[-_])\w/g, Uc = (e) => e.replace(Lc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ii(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function gn(e, t, n = !1) {
  let o = ii(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(e.components) || e.parent && s(
      e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Uc(o) : n ? "App" : "Anonymous";
}
function li(e) {
  return I(e) && "__vccOpts" in e;
}
const vt = (e, t) => {
  const n = /* @__PURE__ */ Qi(e, t, ln);
  if (process.env.NODE_ENV !== "production") {
    const o = oi();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function kc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!q(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ ie(a)) {
        Ae();
        const m = a.value;
        return $e(), [
          "div",
          {},
          ["span", e, p(a)],
          "<",
          l(m),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ ct(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ be(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${/* @__PURE__ */ We(a) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ We(a))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ be(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const m = [];
    a.type.props && a.props && m.push(i("props", /* @__PURE__ */ j(a.props))), a.setupState !== X && m.push(i("setup", a.setupState)), a.data !== X && m.push(i("data", /* @__PURE__ */ j(a.data)));
    const V = u(a, "computed");
    V && m.push(i("computed", V));
    const R = u(a, "inject");
    return R && m.push(i("injected", R)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), m;
  }
  function i(a, m) {
    return m = ne({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((V) => [
          "div",
          {},
          ["span", o, V + ": "],
          l(m[V], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, m = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : q(a) ? ["object", { object: m ? /* @__PURE__ */ j(a) : a }] : ["span", n, String(a)];
  }
  function u(a, m) {
    const V = a.type;
    if (I(V))
      return;
    const R = {};
    for (const C in a.ctx)
      d(V, C, m) && (R[C] = a.ctx[C]);
    return R;
  }
  function d(a, m, V) {
    const R = a[V];
    if (T(R) && R.includes(m) || q(R) && m in R || a.extends && d(a.extends, m, V) || a.mixins && a.mixins.some((C) => d(C, m, V)))
      return !0;
  }
  function p(a) {
    return /* @__PURE__ */ be(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const As = "3.5.42", Be = process.env.NODE_ENV !== "production" ? w : re;
process.env.NODE_ENV;
process.env.NODE_ENV;
let Io;
const $s = typeof window < "u" && window.trustedTypes;
if ($s)
  try {
    Io = /* @__PURE__ */ $s.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Be(`Error creating trusted types policy: ${e}`);
  }
const ci = Io ? (e) => Io.createHTML(e) : (e) => e, Kc = "http://www.w3.org/2000/svg", Bc = "http://www.w3.org/1998/Math/MathML", Je = typeof document < "u" ? document : null, Ps = Je && /* @__PURE__ */ Je.createElement("template"), Wc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? Je.createElementNS(Kc, e) : t === "mathml" ? Je.createElementNS(Bc, e) : n ? Je.createElement(e, { is: n }) : Je.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => Je.createTextNode(e),
  createComment: (e) => Je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Je.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Ps.innerHTML = ci(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ps.content;
      if (o === "svg" || o === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, qc = /* @__PURE__ */ Symbol("_vtc");
function Gc(e, t, n) {
  const o = e[qc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ms = /* @__PURE__ */ Symbol("_vod"), Jc = /* @__PURE__ */ Symbol("_vsh"), zc = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Yc = /(?:^|;)\s*display\s*:/;
function Xc(e, t, n) {
  const o = e.style, s = Z(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (Z(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Jt(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Jt(o, i, "");
    for (const i in n) {
      i === "display" && (r = !0);
      const l = n[i];
      l != null ? eu(
        e,
        i,
        !Z(t) && t ? t[i] : void 0,
        l
      ) || Jt(o, i, l) : Jt(o, i, "");
    }
  } else if (s) {
    if (t !== n) {
      const i = o[zc];
      i && (n += ";" + i), o.cssText = n, r = Yc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ms in e && (e[Ms] = r ? o.display : "", e[Jc] && (o.display = "none"));
}
const Zc = /[^\\];\s*$/, yn = /\s*!important$/;
function Jt(e, t, n) {
  if (T(n))
    n.forEach((o) => Jt(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Zc.test(n) && Be(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    yn.test(n) ? e.setProperty(t, n.replace(yn, ""), "important") : e.setProperty(t, n);
  else {
    const o = Qc(e, t);
    yn.test(n) ? e.setProperty(
      ut(o),
      n.replace(yn, ""),
      "important"
    ) : e[o] = n;
  }
}
const Is = ["Webkit", "Moz", "ms"], Eo = {};
function Qc(e, t) {
  const n = Eo[t];
  if (n)
    return n;
  let o = Ee(t);
  if (o !== "filter" && o in e)
    return Eo[t] = o;
  o = Wn(o);
  for (let s = 0; s < Is.length; s++) {
    const r = Is[s] + o;
    if (r in e)
      return Eo[t] = r;
  }
  return t;
}
function eu(e, t, n, o) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Z(o) && n === o;
}
const Rs = "http://www.w3.org/1999/xlink";
function Fs(e, t, n, o, s, r = Di(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Rs, t.slice(6, t.length)) : e.setAttributeNS(Rs, t, n) : n == null || r && !zs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ce(n) ? String(n) : n
  );
}
function js(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ci(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = zs(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && Be(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(s || t);
}
function _t(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function tu(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Hs = /* @__PURE__ */ Symbol("_vei");
function nu(e, t, n, o, s = null) {
  const r = e[Hs] || (e[Hs] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? Ls(o, t) : o;
  else {
    const [l, u] = ru(t);
    if (o) {
      const d = r[t] = cu(
        process.env.NODE_ENV !== "production" ? Ls(o, t) : o,
        s
      );
      _t(e, l, d, u);
    } else i && (tu(e, l, i, u), r[t] = void 0);
  }
}
const ou = /(Once|Passive|Capture)$/, su = /^on:?(?:Once|Passive|Capture)$/;
function ru(e) {
  let t, n;
  for (; (n = e.match(ou)) && !su.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : ut(e.slice(2)), t];
}
let bo = 0;
const iu = /* @__PURE__ */ Promise.resolve(), lu = () => bo || (iu.then(() => bo = 0), bo = Date.now());
function cu(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    const s = n.value;
    if (T(s)) {
      const r = o.stopImmediatePropagation;
      o.stopImmediatePropagation = () => {
        r.call(o), o._stopped = !0;
      };
      const i = s.slice(), l = [o];
      for (let u = 0; u < i.length && !o._stopped; u++) {
        const d = i[u];
        d && Pe(
          d,
          t,
          5,
          l
        );
      }
    } else
      Pe(
        s,
        t,
        5,
        [o]
      );
  };
  return n.value = e, n.attached = lu(), n;
}
function Ls(e, t) {
  return I(e) || T(e) ? e : (Be(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), re);
}
const Us = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uu = (e, t, n, o, s, r) => {
  const i = s === "svg";
  t === "class" ? Gc(e, o, i) : t === "style" ? Xc(e, n, o) : cn(t) ? en(t) || nu(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fu(e, t, o, i)) ? (js(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fs(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (au(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Z(o))) ? js(e, Ee(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Fs(e, t, o, i));
};
function fu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Us(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Us(t) && Z(n) ? !1 : t in e;
}
function au(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const o = Ee(t);
  return Array.isArray(n) ? n.some((s) => Ee(s) === o) : Object.keys(n).some((s) => Ee(s) === o);
}
const kn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return T(t) ? (n) => At(t, n) : t;
};
function pu(e) {
  e.target.composing = !0;
}
function ks(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Et = /* @__PURE__ */ Symbol("_assign"), Nn = /* @__PURE__ */ Symbol("_initialValue");
function yo(e, t, n) {
  return t && (e = e.trim()), n && (e = qn(e)), e;
}
const Ks = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, s) {
    e.parentNode && (e.type === "text" ? e[Nn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Nn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Et] = kn(s);
    const r = o || s.props && s.props.type === "number";
    _t(e, t ? "change" : "input", (i) => {
      i.target.composing || e[Et](yo(e.value, n, r));
    }), (n || r) && _t(e, "change", () => {
      e.value = yo(e.value, n, r);
    }), t || (_t(e, "compositionstart", pu), _t(e, "compositionend", ks), _t(e, "change", ks));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: o } }) {
    const s = t ?? "", r = e[Nn];
    delete e[Nn], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Et](yo(e.value, n, o)) : e.value = s;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: s, number: r } }, i) {
    if (e[Et] = kn(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? qn(e.value) : e.value, u = t ?? "";
    if (l === u)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (o && t === n || s && e.value.trim() === u) || (e.value = u);
  }
}, Wt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    e._modelValue = t, _t(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? qn(Kn(u)) : Kn(u)
      ), r = e.multiple, i = r ? xt(e._modelValue) ? new Set(s) : s : s[0], l = e._pendingValue = [
        r,
        r ? T(i) ? s.slice() : s : i
      ];
      try {
        e[Et](i);
      } finally {
        _r(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[Et] = kn(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Bs(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Et] = kn(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !du(t, n[1], n[0])) && Bs(e, t);
  }
};
function du(e, t, n) {
  if (!n || T(e)) return ft(e, t);
  if (xt(e)) {
    if (e.size !== t.length) return !1;
    for (const o of t)
      if (!e.has(o)) return !1;
    return !0;
  }
  return !1;
}
function Bs(e, t) {
  const n = e.multiple, o = T(t);
  if (n && !o && !xt(t)) {
    process.env.NODE_ENV !== "production" && Be(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, r = e.options.length; s < r; s++) {
    const i = e.options[s], l = Kn(i);
    if (n)
      if (o) {
        const u = typeof l;
        u === "string" || u === "number" ? i.selected = t.some((d) => String(d) === String(l)) : i.selected = Si(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (ft(Kn(i), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Kn(e) {
  return "_value" in e ? e._value : e.value;
}
const hu = /* @__PURE__ */ ne({ patchProp: uu }, Wc);
let Ws;
function gu() {
  return Ws || (Ws = yc(hu));
}
const mu = ((...e) => {
  const t = gu().createApp(...e);
  process.env.NODE_ENV !== "production" && (_u(t), Eu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = bu(o);
    if (!s) return;
    const r = t._component;
    !I(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, vu(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
});
function vu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _u(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ni(t) || Oi(t) || xi(t),
    writable: !1
  });
}
function Eu(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Be(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Be(o), n;
      },
      set() {
        Be(o);
      }
    });
  }
}
function bu(e) {
  if (Z(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Be(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Be(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function yu() {
  kc();
}
process.env.NODE_ENV !== "production" && yu();
function Nu(e, t, n) {
  const o = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(o))
    return window._nc_initial_state.get(o);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const s = document.querySelector(o);
  if (s === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const r = JSON.parse(atob(s.value));
    return window._nc_initial_state.set(o, r), r;
  } catch (r) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: r }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: r });
  }
}
const Ou = ["href"], xu = {
  class: "library-panel",
  "aria-label": "Publication catalogue"
}, wu = {
  method: "get",
  class: "library-filter-bar",
  "aria-label": "Catalogue search and filters"
}, Du = ["value"], Vu = ["value"], Su = ["value"], Cu = ["value"], Tu = ["value"], Au = ["value"], $u = {
  class: "library-pagination",
  "aria-label": "Catalogue pagination"
}, Pu = ["href"], Mu = {
  key: 1,
  class: "library-muted"
}, Iu = ["href"], Ru = {
  key: 3,
  class: "library-muted"
}, Fu = {
  key: 0,
  class: "library-muted"
}, ju = {
  key: 1,
  class: "library-cover-gallery"
}, Hu = ["href", "aria-label"], Lu = ["src", "alt"], Uu = { class: "library-cover-summary" }, ku = {
  key: 0,
  class: "library-creator"
}, Ku = { class: "library-muted" }, Bu = { key: 0 }, Wu = { key: 1 }, qu = {
  key: 1,
  class: "library-item-scan-status library-scan-error"
}, Gu = { key: 0 }, Ju = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTags"
}, zu = {
  key: 0,
  class: "library-muted"
}, Yu = ["href"], Xu = ["href"], Zu = { class: "library-item-metadata" }, Qu = {
  class: "library-nextcloud-tags",
  "aria-label": "nextcloudTagEditor"
}, ef = {
  key: 0,
  class: "library-tag-remove-list",
  "aria-label": "Remove Nextcloud tag"
}, tf = { class: "library-tag" }, nf = ["action"], of = ["action"], sf = {
  class: "library-nextcloud-comments",
  "aria-label": "nextcloudComments"
}, rf = {
  key: 0,
  class: "library-muted"
}, lf = { class: "library-comment-list" }, cf = { class: "library-muted" }, uf = ["action"], ff = ["action"], af = ["value"], pf = ["value"], df = ["value"], hf = ["value"], gf = ["value"], mf = ["value"], vf = ["value"], _f = ["value"], Ef = ["value"], bf = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], o = [25, 50, 100, 250, 500], s = vt(() => t.state.items || []), r = vt(() => t.state.shelves || []), i = vt(() => t.state.formats || []), l = vt(() => t.state.scanStatuses || []), u = vt(() => t.state.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), d = /* @__PURE__ */ zn({
      q: t.state.activeFilters?.q || "",
      type: t.state.activeFilters?.type || "",
      format: t.state.activeFilters?.format || "",
      tag: t.state.activeFilters?.tag || "",
      shelf: t.state.activeFilters?.shelf || "",
      status: t.state.activeFilters?.status || "",
      sort: t.state.activeFilters?.sort || "title"
    }), p = vt(() => t.state.settingsUrl || "");
    function a(C) {
      return String(C || "").toUpperCase();
    }
    function m(C) {
      return C.nextcloudTags || [];
    }
    function V(C) {
      return C.nextcloudComments || { count: 0, recent: [] };
    }
    function R(C, g) {
      return String(C.tagRemoveBaseUrl || "").replace("__TAG_ID__", String(g.id));
    }
    return (C, g) => (k(), W(Q, null, [
      g[48] || (g[48] = _("section", { class: "library-hero" }, [
        _("h1", null, "Library"),
        _("p", { class: "library-lede" }, " Library is a catalogue layer for publications already stored in Nextcloud. "),
        _("p", null, " Nextcloud Files remain canonical. Library adds discovery, metadata, cover-style browsing, search/filtering and reader handoff without importing or owning the files. ")
      ], -1)),
      _("p", null, [
        _("a", {
          class: "button",
          href: p.value
        }, "Library settings", 8, Ou)
      ]),
      _("section", xu, [
        g[46] || (g[46] = _("h2", null, "Publication catalogue", -1)),
        g[47] || (g[47] = _("p", { class: "library-muted" }, "Browse as a shelf/gallery first; open the details panel when metadata matters.", -1)),
        _("form", wu, [
          _("label", null, [
            g[7] || (g[7] = te(" Search title / author ", -1)),
            pt(_("input", {
              "onUpdate:modelValue": g[0] || (g[0] = (E) => d.q = E),
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex..."
            }, null, 512), [
              [Ks, d.q]
            ])
          ]),
          _("label", null, [
            g[9] || (g[9] = te(" Type ", -1)),
            pt(_("select", {
              "onUpdate:modelValue": g[1] || (g[1] = (E) => d.type = E),
              name: "type"
            }, [
              g[8] || (g[8] = _("option", { value: "" }, "All types", -1)),
              (k(), W(Q, null, je(n, (E) => _("option", {
                key: E,
                value: E
              }, J(E), 9, Du)), 64))
            ], 512), [
              [Wt, d.type]
            ])
          ]),
          _("label", null, [
            g[10] || (g[10] = te(" Nextcloud tag ", -1)),
            pt(_("input", {
              "onUpdate:modelValue": g[2] || (g[2] = (E) => d.tag = E),
              type: "text",
              name: "tag",
              placeholder: "photography"
            }, null, 512), [
              [Ks, d.tag]
            ])
          ]),
          _("label", null, [
            g[12] || (g[12] = te(" Format ", -1)),
            pt(_("select", {
              "onUpdate:modelValue": g[3] || (g[3] = (E) => d.format = E),
              name: "format"
            }, [
              g[11] || (g[11] = _("option", { value: "" }, "All formats", -1)),
              (k(!0), W(Q, null, je(i.value, (E) => (k(), W("option", {
                key: E,
                value: E
              }, J(a(E)), 9, Vu))), 128))
            ], 512), [
              [Wt, d.format]
            ])
          ]),
          _("label", null, [
            g[14] || (g[14] = te(" Shelf ", -1)),
            pt(_("select", {
              "onUpdate:modelValue": g[4] || (g[4] = (E) => d.shelf = E),
              name: "shelf"
            }, [
              g[13] || (g[13] = _("option", { value: "" }, "All shelves", -1)),
              (k(!0), W(Q, null, je(r.value, (E) => (k(), W("option", {
                key: E,
                value: E
              }, J(E), 9, Su))), 128))
            ], 512), [
              [Wt, d.shelf]
            ])
          ]),
          _("label", null, [
            g[16] || (g[16] = te(" Scan status ", -1)),
            pt(_("select", {
              "onUpdate:modelValue": g[5] || (g[5] = (E) => d.status = E),
              name: "status"
            }, [
              g[15] || (g[15] = _("option", { value: "" }, "All scan statuses", -1)),
              (k(!0), W(Q, null, je(l.value, (E) => (k(), W("option", {
                key: E,
                value: E
              }, J(E), 9, Cu))), 128))
            ], 512), [
              [Wt, d.status]
            ])
          ]),
          _("label", null, [
            g[18] || (g[18] = te(" Sort ", -1)),
            pt(_("select", {
              "onUpdate:modelValue": g[6] || (g[6] = (E) => d.sort = E),
              name: "sort"
            }, [...g[17] || (g[17] = [
              _("option", { value: "title" }, "Title", -1),
              _("option", { value: "recent" }, "Recently added", -1),
              _("option", { value: "publicationDate" }, "Publication date", -1),
              _("option", { value: "format" }, "Format", -1)
            ])], 512), [
              [Wt, d.sort]
            ])
          ]),
          _("label", null, [
            g[19] || (g[19] = te(" Page size ", -1)),
            _("select", {
              value: u.value.limit,
              name: "limit"
            }, [
              (k(), W(Q, null, je(o, (E) => _("option", {
                key: E,
                value: E
              }, J(E), 9, Au)), 64))
            ], 8, Tu)
          ]),
          g[20] || (g[20] = _("button", { type: "submit" }, "Apply filters", -1)),
          g[21] || (g[21] = _("a", {
            class: "library-reset-link",
            href: "?"
          }, "Clear", -1))
        ]),
        _("nav", $u, [
          _("span", null, "Showing " + J(u.value.from) + "–" + J(u.value.to) + " of " + J(u.value.total) + " catalogue items", 1),
          u.value.previousUrl ? (k(), W("a", {
            key: 0,
            href: u.value.previousUrl
          }, "Previous", 8, Pu)) : (k(), W("span", Mu, "Previous")),
          u.value.nextUrl ? (k(), W("a", {
            key: 2,
            href: u.value.nextUrl
          }, "Next", 8, Iu)) : (k(), W("span", Ru, "Next"))
        ]),
        s.value.length === 0 ? (k(), W("p", Fu, "No catalogue items match. Scan enabled roots or clear the active filters.")) : (k(), W("div", ju, [
          (k(!0), W(Q, null, je(s.value, (E) => (k(), W("article", {
            key: E.id,
            class: "library-cover-card"
          }, [
            _("a", {
              class: "library-cover-link",
              href: E.openUrl,
              "aria-label": `Read ${E.title}`
            }, [
              _("img", {
                class: "library-cover-image",
                src: E.coverUrl,
                alt: `Cover for ${E.title}`,
                loading: "lazy"
              }, null, 8, Lu)
            ], 8, Hu),
            _("div", Uu, [
              _("h3", null, J(E.title), 1),
              E.creators ? (k(), W("p", ku, J(E.creators), 1)) : Tt("", !0),
              _("p", Ku, [
                _("span", null, J(E.publicationType), 1),
                E.extension ? (k(), W("span", Bu, " · Format: " + J(a(E.extension)), 1)) : Tt("", !0),
                E.shelf ? (k(), W("span", Wu, " · Shelf: " + J(E.shelf), 1)) : Tt("", !0)
              ]),
              E.scanStatus !== "indexed" || E.scanError ? (k(), W("p", qu, [
                te(" scanStatus: " + J(E.scanStatus || "unknown"), 1),
                E.scanError ? (k(), W("span", Gu, " · scanError: " + J(E.scanError), 1)) : Tt("", !0)
              ])) : Tt("", !0),
              _("div", Ju, [
                m(E).length === 0 ? (k(), W("span", zu, "No Nextcloud tags")) : (k(!0), W(Q, { key: 1 }, je(m(E), (M) => (k(), W("span", {
                  key: M.id,
                  class: "library-tag"
                }, J(M.name), 1))), 128))
              ]),
              _("p", null, [
                _("a", {
                  href: E.openUrl
                }, "Read", 8, Yu),
                g[22] || (g[22] = te(" · ", -1)),
                _("a", {
                  href: E.filesUrl
                }, "Show in Files", 8, Xu)
              ])
            ]),
            _("details", null, [
              g[45] || (g[45] = _("summary", null, "Details / edit metadata", -1)),
              _("dl", Zu, [
                g[23] || (g[23] = _("dt", null, "publicationType", -1)),
                _("dd", null, J(E.publicationType), 1),
                g[24] || (g[24] = _("dt", null, "metadataSource", -1)),
                _("dd", null, J(E.metadataSource), 1),
                g[25] || (g[25] = _("dt", null, "userEdited", -1)),
                _("dd", null, J(E.userEdited ? "yes" : "no"), 1),
                g[26] || (g[26] = _("dt", null, "path", -1)),
                _("dd", null, J(E.cachedPath), 1),
                g[27] || (g[27] = _("dt", null, "publication", -1)),
                _("dd", null, J(E.publication || "—"), 1),
                g[28] || (g[28] = _("dt", null, "date", -1)),
                _("dd", null, J(E.publicationDate || "—"), 1),
                g[29] || (g[29] = _("dt", null, "language", -1)),
                _("dd", null, J(E.language || "—"), 1),
                g[30] || (g[30] = _("dt", null, "publisher", -1)),
                _("dd", null, J(E.publisher || "—"), 1)
              ]),
              _("div", Qu, [
                g[33] || (g[33] = _("strong", null, "Nextcloud tags", -1)),
                m(E).length > 0 ? (k(), W("ul", ef, [
                  (k(!0), W(Q, null, je(m(E), (M) => (k(), W("li", {
                    key: M.id
                  }, [
                    _("span", tf, J(M.name), 1),
                    _("form", {
                      method: "post",
                      action: R(E, M),
                      class: "library-inline-form"
                    }, [...g[31] || (g[31] = [
                      _("button", { type: "submit" }, "Remove tag", -1)
                    ])], 8, nf)
                  ]))), 128))
                ])) : Tt("", !0),
                _("form", {
                  method: "post",
                  action: E.tagUrl,
                  class: "library-tag-form"
                }, [...g[32] || (g[32] = [
                  _("label", null, [
                    te(" Add Nextcloud tag "),
                    _("input", {
                      type: "text",
                      name: "tagName",
                      placeholder: "photography, project-library..."
                    })
                  ], -1),
                  _("button", { type: "submit" }, "Add tag", -1)
                ])], 8, of)
              ]),
              _("div", sf, [
                g[35] || (g[35] = _("strong", null, "Nextcloud comments", -1)),
                g[36] || (g[36] = te()),
                g[37] || (g[37] = _("span", { class: "library-muted" }, "(file-level notes)", -1)),
                g[38] || (g[38] = te(": ", -1)),
                V(E).count === 0 ? (k(), W("span", rf, "No Nextcloud comments")) : (k(), W(Q, { key: 1 }, [
                  _("span", null, J(V(E).count) + " total", 1),
                  _("ul", lf, [
                    (k(!0), W(Q, null, je(V(E).recent, (M) => (k(), W("li", {
                      key: `${M.actorId}-${M.createdAt}-${M.message}`
                    }, [
                      _("span", cf, J(M.actorId) + " · " + J(M.createdAt), 1),
                      _("span", null, J(M.message), 1)
                    ]))), 128))
                  ])
                ], 64)),
                _("form", {
                  method: "post",
                  action: E.commentUrl,
                  class: "library-comment-form"
                }, [...g[34] || (g[34] = [
                  _("label", null, [
                    te(" Add Nextcloud comment "),
                    _("textarea", {
                      name: "commentMessage",
                      rows: "2",
                      placeholder: "file-level note..."
                    })
                  ], -1),
                  _("button", { type: "submit" }, "Add comment", -1)
                ])], 8, uf)
              ]),
              _("form", {
                method: "post",
                action: E.updateUrl,
                class: "library-item-form"
              }, [
                _("label", null, [
                  g[39] || (g[39] = te(" Title ", -1)),
                  _("input", {
                    type: "text",
                    name: "title",
                    value: E.title
                  }, null, 8, af)
                ]),
                _("label", null, [
                  g[40] || (g[40] = te(" Type ", -1)),
                  _("select", {
                    name: "publicationType",
                    value: E.publicationType
                  }, [
                    (k(), W(Q, null, je(n, (M) => _("option", {
                      key: M,
                      value: M
                    }, J(M), 9, df)), 64))
                  ], 8, pf)
                ]),
                _("label", null, [
                  g[41] || (g[41] = te(" Creators ", -1)),
                  _("input", {
                    type: "text",
                    name: "creators",
                    value: E.creators
                  }, null, 8, hf)
                ]),
                _("label", null, [
                  g[42] || (g[42] = te(" Publication ", -1)),
                  _("input", {
                    type: "text",
                    name: "publication",
                    value: E.publication
                  }, null, 8, gf)
                ]),
                _("label", null, [
                  g[43] || (g[43] = te(" Date ", -1)),
                  _("input", {
                    type: "text",
                    name: "publicationDate",
                    value: E.publicationDate
                  }, null, 8, mf)
                ]),
                _("input", {
                  type: "hidden",
                  name: "subtitle",
                  value: E.subtitle
                }, null, 8, vf),
                _("input", {
                  type: "hidden",
                  name: "language",
                  value: E.language
                }, null, 8, _f),
                _("input", {
                  type: "hidden",
                  name: "publisher",
                  value: E.publisher
                }, null, 8, Ef),
                g[44] || (g[44] = _("button", { type: "submit" }, "Save metadata", -1))
              ], 8, ff)
            ])
          ]))), 128))
        ]))
      ])
    ], 64));
  }
}, yf = Nu("library", "catalogue", {});
mu(bf, { state: yf }).mount("#library-vue-root");
//# sourceMappingURL=library-main.mjs.map
