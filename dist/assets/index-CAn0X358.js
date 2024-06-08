import {
  r as D,
  R as j,
  u as Ke,
  j as P,
  L as te,
  B as Qe,
  a as Ze,
  b as Je,
  c as et,
  M as tt,
  d as it,
  e as st,
  f as nt,
  g as rt,
  h as Ee,
  i as Ce,
} from './index-B-DBDDfx.js'
import { D as at, a as lt } from './index-Df1ICAj4.js'
import { P as Pe } from './PlaylistCard-CH2UABrK.js'
import './index-B-sUGNHw.js'
import './countTransform--_YRgHiL.js'
function Me(t) {
  return t !== null && typeof t == 'object' && 'constructor' in t && t.constructor === Object
}
function ye(t, e) {
  t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((i) => {
      typeof t[i] > 'u' ? (t[i] = e[i]) : Me(e[i]) && Me(t[i]) && Object.keys(e[i]).length > 0 && ye(t[i], e[i])
    })
}
const ze = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return { initEvent() {} }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      },
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
}
function q() {
  const t = typeof document < 'u' ? document : {}
  return ye(t, ze), t
}
const ot = {
  document: ze,
  navigator: { userAgent: '' },
  location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ''
      },
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > 'u' ? (t(), null) : setTimeout(t, 0)
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > 'u' || clearTimeout(t)
  },
}
function k() {
  const t = typeof window < 'u' ? window : {}
  return ye(t, ot), t
}
function dt(t) {
  return (
    t === void 0 && (t = ''),
    t
      .trim()
      .split(' ')
      .filter((e) => !!e.trim())
  )
}
function ct(t) {
  const e = t
  Object.keys(e).forEach((i) => {
    try {
      e[i] = null
    } catch {}
    try {
      delete e[i]
    } catch {}
  })
}
function we(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e)
}
function ae() {
  return Date.now()
}
function ut(t) {
  const e = k()
  let i
  return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i
}
function ft(t, e) {
  e === void 0 && (e = 'x')
  const i = k()
  let s, r, n
  const o = ut(t)
  return (
    i.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(',').length > 6 &&
          (r = r
            .split(', ')
            .map((l) => l.replace(',', '.'))
            .join(', ')),
        (n = new i.WebKitCSSMatrix(r === 'none' ? '' : r)))
      : ((n =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
        (s = n.toString().split(','))),
    e === 'x' && (i.WebKitCSSMatrix ? (r = n.m41) : s.length === 16 ? (r = parseFloat(s[12])) : (r = parseFloat(s[4]))),
    e === 'y' && (i.WebKitCSSMatrix ? (r = n.m42) : s.length === 16 ? (r = parseFloat(s[13])) : (r = parseFloat(s[5]))),
    r || 0
  )
}
function se(t) {
  return typeof t == 'object' && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === 'Object'
}
function pt(t) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u' ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11)
}
function $() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ['__proto__', 'constructor', 'prototype']
  for (let i = 1; i < arguments.length; i += 1) {
    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i]
    if (s != null && !pt(s)) {
      const r = Object.keys(Object(s)).filter((n) => e.indexOf(n) < 0)
      for (let n = 0, o = r.length; n < o; n += 1) {
        const l = r[n],
          a = Object.getOwnPropertyDescriptor(s, l)
        a !== void 0 &&
          a.enumerable &&
          (se(t[l]) && se(s[l])
            ? s[l].__swiper__
              ? (t[l] = s[l])
              : $(t[l], s[l])
            : !se(t[l]) && se(s[l])
              ? ((t[l] = {}), s[l].__swiper__ ? (t[l] = s[l]) : $(t[l], s[l]))
              : (t[l] = s[l]))
      }
    }
  }
  return t
}
function ne(t, e, i) {
  t.style.setProperty(e, i)
}
function De(t) {
  let { swiper: e, targetPosition: i, side: s } = t
  const r = k(),
    n = -e.translate
  let o = null,
    l
  const a = e.params.speed
  ;(e.wrapperEl.style.scrollSnapType = 'none'), r.cancelAnimationFrame(e.cssModeFrameID)
  const f = i > n ? 'next' : 'prev',
    c = (v, h) => (f === 'next' && v >= h) || (f === 'prev' && v <= h),
    u = () => {
      ;(l = new Date().getTime()), o === null && (o = l)
      const v = Math.max(Math.min((l - o) / a, 1), 0),
        h = 0.5 - Math.cos(v * Math.PI) / 2
      let m = n + h * (i - n)
      if ((c(m, i) && (m = i), e.wrapperEl.scrollTo({ [s]: m }), c(m, i))) {
        ;(e.wrapperEl.style.overflow = 'hidden'),
          (e.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [s]: m })
          }),
          r.cancelAnimationFrame(e.cssModeFrameID)
        return
      }
      e.cssModeFrameID = r.requestAnimationFrame(u)
    }
  u()
}
function R(t, e) {
  return e === void 0 && (e = ''), [...t.children].filter((i) => i.matches(e))
}
function le(t) {
  try {
    console.warn(t)
    return
  } catch {}
}
function oe(t, e) {
  e === void 0 && (e = [])
  const i = document.createElement(t)
  return i.classList.add(...(Array.isArray(e) ? e : dt(e))), i
}
function mt(t, e) {
  const i = []
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling
    e ? s.matches(e) && i.push(s) : i.push(s), (t = s)
  }
  return i
}
function ht(t, e) {
  const i = []
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling
    e ? s.matches(e) && i.push(s) : i.push(s), (t = s)
  }
  return i
}
function X(t, e) {
  return k().getComputedStyle(t, null).getPropertyValue(e)
}
function de(t) {
  let e = t,
    i
  if (e) {
    for (i = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (i += 1)
    return i
  }
}
function Ge(t, e) {
  const i = []
  let s = t.parentElement
  for (; s; ) e ? s.matches(e) && i.push(s) : i.push(s), (s = s.parentElement)
  return i
}
function Se(t, e, i) {
  const s = k()
  return (
    t[e === 'width' ? 'offsetWidth' : 'offsetHeight'] +
    parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === 'width' ? 'margin-right' : 'margin-top')) +
    parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === 'width' ? 'margin-left' : 'margin-bottom'))
  )
}
function B(t) {
  return (Array.isArray(t) ? t : [t]).filter((e) => !!e)
}
let ue
function gt() {
  const t = k(),
    e = q()
  return {
    smoothScroll: e.documentElement && e.documentElement.style && 'scrollBehavior' in e.documentElement.style,
    touch: !!('ontouchstart' in t || (t.DocumentTouch && e instanceof t.DocumentTouch)),
  }
}
function Ne() {
  return ue || (ue = gt()), ue
}
let fe
function vt(t) {
  let { userAgent: e } = t === void 0 ? {} : t
  const i = Ne(),
    s = k(),
    r = s.navigator.platform,
    n = e || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = s.screen.width,
    a = s.screen.height,
    f = n.match(/(Android);?[\s\/]+([\d.]+)?/)
  let c = n.match(/(iPad).*OS\s([\d_]+)/)
  const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    v = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = r === 'Win32'
  let m = r === 'MacIntel'
  const w = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ]
  return (
    !c && m && i.touch && w.indexOf(`${l}x${a}`) >= 0 && ((c = n.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, '13_0_0']), (m = !1)),
    f && !h && ((o.os = 'android'), (o.android = !0)),
    (c || v || u) && ((o.os = 'ios'), (o.ios = !0)),
    o
  )
}
function je(t) {
  return t === void 0 && (t = {}), fe || (fe = vt(t)), fe
}
let pe
function wt() {
  const t = k(),
    e = je()
  let i = !1
  function s() {
    const l = t.navigator.userAgent.toLowerCase()
    return l.indexOf('safari') >= 0 && l.indexOf('chrome') < 0 && l.indexOf('android') < 0
  }
  if (s()) {
    const l = String(t.navigator.userAgent)
    if (l.includes('Version/')) {
      const [a, f] = l
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((c) => Number(c))
      i = a < 16 || (a === 16 && f < 2)
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
    n = s(),
    o = n || (r && e.ios)
  return { isSafari: i || n, needPerspectiveFix: i, need3dFix: o, isWebView: r }
}
function St() {
  return pe || (pe = wt()), pe
}
function bt(t) {
  let { swiper: e, on: i, emit: s } = t
  const r = k()
  let n = null,
    o = null
  const l = () => {
      !e || e.destroyed || !e.initialized || (s('beforeResize'), s('resize'))
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((n = new ResizeObserver((u) => {
          o = r.requestAnimationFrame(() => {
            const { width: v, height: h } = e
            let m = v,
              w = h
            u.forEach((x) => {
              let { contentBoxSize: d, contentRect: p, target: g } = x
              ;(g && g !== e.el) || ((m = p ? p.width : (d[0] || d).inlineSize), (w = p ? p.height : (d[0] || d).blockSize))
            }),
              (m !== v || w !== h) && l()
          })
        })),
        n.observe(e.el))
    },
    f = () => {
      o && r.cancelAnimationFrame(o), n && n.unobserve && e.el && (n.unobserve(e.el), (n = null))
    },
    c = () => {
      !e || e.destroyed || !e.initialized || s('orientationchange')
    }
  i('init', () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < 'u') {
      a()
      return
    }
    r.addEventListener('resize', l), r.addEventListener('orientationchange', c)
  }),
    i('destroy', () => {
      f(), r.removeEventListener('resize', l), r.removeEventListener('orientationchange', c)
    })
}
function xt(t) {
  let { swiper: e, extendParams: i, on: s, emit: r } = t
  const n = [],
    o = k(),
    l = function (c, u) {
      u === void 0 && (u = {})
      const v = o.MutationObserver || o.WebkitMutationObserver,
        h = new v((m) => {
          if (e.__preventObserver__) return
          if (m.length === 1) {
            r('observerUpdate', m[0])
            return
          }
          const w = function () {
            r('observerUpdate', m[0])
          }
          o.requestAnimationFrame ? o.requestAnimationFrame(w) : o.setTimeout(w, 0)
        })
      h.observe(c, {
        attributes: typeof u.attributes > 'u' ? !0 : u.attributes,
        childList: typeof u.childList > 'u' ? !0 : u.childList,
        characterData: typeof u.characterData > 'u' ? !0 : u.characterData,
      }),
        n.push(h)
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const c = Ge(e.hostEl)
          for (let u = 0; u < c.length; u += 1) l(c[u])
        }
        l(e.hostEl, { childList: e.params.observeSlideChildren }), l(e.wrapperEl, { attributes: !1 })
      }
    },
    f = () => {
      n.forEach((c) => {
        c.disconnect()
      }),
        n.splice(0, n.length)
    }
  i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), s('init', a), s('destroy', f)
}
var yt = {
  on(t, e, i) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s
    const r = i ? 'unshift' : 'push'
    return (
      t.split(' ').forEach((n) => {
        s.eventsListeners[n] || (s.eventsListeners[n] = []), s.eventsListeners[n][r](e)
      }),
      s
    )
  },
  once(t, e, i) {
    const s = this
    if (!s.eventsListeners || s.destroyed || typeof e != 'function') return s
    function r() {
      s.off(t, r), r.__emitterProxy && delete r.__emitterProxy
      for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++) o[l] = arguments[l]
      e.apply(s, o)
    }
    return (r.__emitterProxy = e), s.on(t, r, i)
  },
  onAny(t, e) {
    const i = this
    if (!i.eventsListeners || i.destroyed || typeof t != 'function') return i
    const s = e ? 'unshift' : 'push'
    return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i
  },
  offAny(t) {
    const e = this
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e
    const i = e.eventsAnyListeners.indexOf(t)
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e
  },
  off(t, e) {
    const i = this
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        t.split(' ').forEach((s) => {
          typeof e > 'u'
            ? (i.eventsListeners[s] = [])
            : i.eventsListeners[s] &&
              i.eventsListeners[s].forEach((r, n) => {
                ;(r === e || (r.__emitterProxy && r.__emitterProxy === e)) && i.eventsListeners[s].splice(n, 1)
              })
        }),
      i
    )
  },
  emit() {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t
    let e, i, s
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o]
    return (
      typeof n[0] == 'string' || Array.isArray(n[0])
        ? ((e = n[0]), (i = n.slice(1, n.length)), (s = t))
        : ((e = n[0].events), (i = n[0].data), (s = n[0].context || t)),
      i.unshift(s),
      (Array.isArray(e) ? e : e.split(' ')).forEach((a) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((f) => {
            f.apply(s, [a, ...i])
          }),
          t.eventsListeners &&
            t.eventsListeners[a] &&
            t.eventsListeners[a].forEach((f) => {
              f.apply(s, i)
            })
      }),
      t
    )
  },
}
function Tt() {
  const t = this
  let e, i
  const s = t.el
  typeof t.params.width < 'u' && t.params.width !== null ? (e = t.params.width) : (e = s.clientWidth),
    typeof t.params.height < 'u' && t.params.height !== null ? (i = t.params.height) : (i = s.clientHeight),
    !((e === 0 && t.isHorizontal()) || (i === 0 && t.isVertical())) &&
      ((e = e - parseInt(X(s, 'padding-left') || 0, 10) - parseInt(X(s, 'padding-right') || 0, 10)),
      (i = i - parseInt(X(s, 'padding-top') || 0, 10) - parseInt(X(s, 'padding-bottom') || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(t, { width: e, height: i, size: t.isHorizontal() ? e : i }))
}
function Et() {
  const t = this
  function e(b, L) {
    return parseFloat(b.getPropertyValue(t.getDirectionLabel(L)) || 0)
  }
  const i = t.params,
    { wrapperEl: s, slidesEl: r, size: n, rtlTranslate: o, wrongRTL: l } = t,
    a = t.virtual && i.virtual.enabled,
    f = a ? t.virtual.slides.length : t.slides.length,
    c = R(r, `.${t.params.slideClass}, swiper-slide`),
    u = a ? t.virtual.slides.length : c.length
  let v = []
  const h = [],
    m = []
  let w = i.slidesOffsetBefore
  typeof w == 'function' && (w = i.slidesOffsetBefore.call(t))
  let x = i.slidesOffsetAfter
  typeof x == 'function' && (x = i.slidesOffsetAfter.call(t))
  const d = t.snapGrid.length,
    p = t.slidesGrid.length
  let g = i.spaceBetween,
    S = -w,
    y = 0,
    I = 0
  if (typeof n > 'u') return
  typeof g == 'string' && g.indexOf('%') >= 0 ? (g = (parseFloat(g.replace('%', '')) / 100) * n) : typeof g == 'string' && (g = parseFloat(g)),
    (t.virtualSize = -g),
    c.forEach((b) => {
      o ? (b.style.marginLeft = '') : (b.style.marginRight = ''), (b.style.marginBottom = ''), (b.style.marginTop = '')
    }),
    i.centeredSlides && i.cssMode && (ne(s, '--swiper-centered-offset-before', ''), ne(s, '--swiper-centered-offset-after', ''))
  const N = i.grid && i.grid.rows > 1 && t.grid
  N ? t.grid.initSlides(c) : t.grid && t.grid.unsetSlides()
  let M
  const C =
    i.slidesPerView === 'auto' && i.breakpoints && Object.keys(i.breakpoints).filter((b) => typeof i.breakpoints[b].slidesPerView < 'u').length > 0
  for (let b = 0; b < u; b += 1) {
    M = 0
    let L
    if ((c[b] && (L = c[b]), N && t.grid.updateSlide(b, L, c), !(c[b] && X(L, 'display') === 'none'))) {
      if (i.slidesPerView === 'auto') {
        C && (c[b].style[t.getDirectionLabel('width')] = '')
        const E = getComputedStyle(L),
          T = L.style.transform,
          O = L.style.webkitTransform
        if ((T && (L.style.transform = 'none'), O && (L.style.webkitTransform = 'none'), i.roundLengths))
          M = t.isHorizontal() ? Se(L, 'width') : Se(L, 'height')
        else {
          const z = e(E, 'width'),
            F = e(E, 'padding-left'),
            Z = e(E, 'padding-right'),
            _ = e(E, 'margin-left'),
            A = e(E, 'margin-right'),
            G = E.getPropertyValue('box-sizing')
          if (G && G === 'border-box') M = z + _ + A
          else {
            const { clientWidth: U, offsetWidth: ie } = L
            M = z + F + Z + _ + A + (ie - U)
          }
        }
        T && (L.style.transform = T), O && (L.style.webkitTransform = O), i.roundLengths && (M = Math.floor(M))
      } else
        (M = (n - (i.slidesPerView - 1) * g) / i.slidesPerView),
          i.roundLengths && (M = Math.floor(M)),
          c[b] && (c[b].style[t.getDirectionLabel('width')] = `${M}px`)
      c[b] && (c[b].swiperSlideSize = M),
        m.push(M),
        i.centeredSlides
          ? ((S = S + M / 2 + y / 2 + g),
            y === 0 && b !== 0 && (S = S - n / 2 - g),
            b === 0 && (S = S - n / 2 - g),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            i.roundLengths && (S = Math.floor(S)),
            I % i.slidesPerGroup === 0 && v.push(S),
            h.push(S))
          : (i.roundLengths && (S = Math.floor(S)),
            (I - Math.min(t.params.slidesPerGroupSkip, I)) % t.params.slidesPerGroup === 0 && v.push(S),
            h.push(S),
            (S = S + M + g)),
        (t.virtualSize += M + g),
        (y = M),
        (I += 1)
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, n) + x),
    o && l && (i.effect === 'slide' || i.effect === 'coverflow') && (s.style.width = `${t.virtualSize + g}px`),
    i.setWrapperSize && (s.style[t.getDirectionLabel('width')] = `${t.virtualSize + g}px`),
    N && t.grid.updateWrapperSize(M, v),
    !i.centeredSlides)
  ) {
    const b = []
    for (let L = 0; L < v.length; L += 1) {
      let E = v[L]
      i.roundLengths && (E = Math.floor(E)), v[L] <= t.virtualSize - n && b.push(E)
    }
    ;(v = b), Math.floor(t.virtualSize - n) - Math.floor(v[v.length - 1]) > 1 && v.push(t.virtualSize - n)
  }
  if (a && i.loop) {
    const b = m[0] + g
    if (i.slidesPerGroup > 1) {
      const L = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
        E = b * i.slidesPerGroup
      for (let T = 0; T < L; T += 1) v.push(v[v.length - 1] + E)
    }
    for (let L = 0; L < t.virtual.slidesBefore + t.virtual.slidesAfter; L += 1)
      i.slidesPerGroup === 1 && v.push(v[v.length - 1] + b), h.push(h[h.length - 1] + b), (t.virtualSize += b)
  }
  if ((v.length === 0 && (v = [0]), g !== 0)) {
    const b = t.isHorizontal() && o ? 'marginLeft' : t.getDirectionLabel('marginRight')
    c.filter((L, E) => (!i.cssMode || i.loop ? !0 : E !== c.length - 1)).forEach((L) => {
      L.style[b] = `${g}px`
    })
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let b = 0
    m.forEach((E) => {
      b += E + (g || 0)
    }),
      (b -= g)
    const L = b - n
    v = v.map((E) => (E <= 0 ? -w : E > L ? L + x : E))
  }
  if (i.centerInsufficientSlides) {
    let b = 0
    m.forEach((E) => {
      b += E + (g || 0)
    }),
      (b -= g)
    const L = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0)
    if (b + L < n) {
      const E = (n - b - L) / 2
      v.forEach((T, O) => {
        v[O] = T - E
      }),
        h.forEach((T, O) => {
          h[O] = T + E
        })
    }
  }
  if ((Object.assign(t, { slides: c, snapGrid: v, slidesGrid: h, slidesSizesGrid: m }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)) {
    ne(s, '--swiper-centered-offset-before', `${-v[0]}px`), ne(s, '--swiper-centered-offset-after', `${t.size / 2 - m[m.length - 1] / 2}px`)
    const b = -t.snapGrid[0],
      L = -t.slidesGrid[0]
    ;(t.snapGrid = t.snapGrid.map((E) => E + b)), (t.slidesGrid = t.slidesGrid.map((E) => E + L))
  }
  if (
    (u !== f && t.emit('slidesLengthChange'),
    v.length !== d && (t.params.watchOverflow && t.checkOverflow(), t.emit('snapGridLengthChange')),
    h.length !== p && t.emit('slidesGridLengthChange'),
    i.watchSlidesProgress && t.updateSlidesOffset(),
    t.emit('slidesUpdated'),
    !a && !i.cssMode && (i.effect === 'slide' || i.effect === 'fade'))
  ) {
    const b = `${i.containerModifierClass}backface-hidden`,
      L = t.el.classList.contains(b)
    u <= i.maxBackfaceHiddenSlides ? L || t.el.classList.add(b) : L && t.el.classList.remove(b)
  }
}
function Ct(t) {
  const e = this,
    i = [],
    s = e.virtual && e.params.virtual.enabled
  let r = 0,
    n
  typeof t == 'number' ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed)
  const o = (l) => (s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l])
  if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((l) => {
        i.push(l)
      })
    else
      for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
        const l = e.activeIndex + n
        if (l > e.slides.length && !s) break
        i.push(o(l))
      }
  else i.push(o(e.activeIndex))
  for (n = 0; n < i.length; n += 1)
    if (typeof i[n] < 'u') {
      const l = i[n].offsetHeight
      r = l > r ? l : r
    }
  ;(r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
}
function Pt() {
  const t = this,
    e = t.slides,
    i = t.isElement ? (t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop) : 0
  for (let s = 0; s < e.length; s += 1) e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment()
}
const Le = (t, e, i) => {
  e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
}
function Mt(t) {
  t === void 0 && (t = (this && this.translate) || 0)
  const e = this,
    i = e.params,
    { slides: s, rtlTranslate: r, snapGrid: n } = e
  if (s.length === 0) return
  typeof s[0].swiperSlideOffset > 'u' && e.updateSlidesOffset()
  let o = -t
  r && (o = t), (e.visibleSlidesIndexes = []), (e.visibleSlides = [])
  let l = i.spaceBetween
  typeof l == 'string' && l.indexOf('%') >= 0 ? (l = (parseFloat(l.replace('%', '')) / 100) * e.size) : typeof l == 'string' && (l = parseFloat(l))
  for (let a = 0; a < s.length; a += 1) {
    const f = s[a]
    let c = f.swiperSlideOffset
    i.cssMode && i.centeredSlides && (c -= s[0].swiperSlideOffset)
    const u = (o + (i.centeredSlides ? e.minTranslate() : 0) - c) / (f.swiperSlideSize + l),
      v = (o - n[0] + (i.centeredSlides ? e.minTranslate() : 0) - c) / (f.swiperSlideSize + l),
      h = -(o - c),
      m = h + e.slidesSizesGrid[a],
      w = h >= 0 && h <= e.size - e.slidesSizesGrid[a],
      x = (h >= 0 && h < e.size - 1) || (m > 1 && m <= e.size) || (h <= 0 && m >= e.size)
    x && (e.visibleSlides.push(f), e.visibleSlidesIndexes.push(a)),
      Le(f, x, i.slideVisibleClass),
      Le(f, w, i.slideFullyVisibleClass),
      (f.progress = r ? -u : u),
      (f.originalProgress = r ? -v : v)
  }
}
function Lt(t) {
  const e = this
  if (typeof t > 'u') {
    const c = e.rtlTranslate ? -1 : 1
    t = (e && e.translate && e.translate * c) || 0
  }
  const i = e.params,
    s = e.maxTranslate() - e.minTranslate()
  let { progress: r, isBeginning: n, isEnd: o, progressLoop: l } = e
  const a = n,
    f = o
  if (s === 0) (r = 0), (n = !0), (o = !0)
  else {
    r = (t - e.minTranslate()) / s
    const c = Math.abs(t - e.minTranslate()) < 1,
      u = Math.abs(t - e.maxTranslate()) < 1
    ;(n = c || r <= 0), (o = u || r >= 1), c && (r = 0), u && (r = 1)
  }
  if (i.loop) {
    const c = e.getSlideIndexByData(0),
      u = e.getSlideIndexByData(e.slides.length - 1),
      v = e.slidesGrid[c],
      h = e.slidesGrid[u],
      m = e.slidesGrid[e.slidesGrid.length - 1],
      w = Math.abs(t)
    w >= v ? (l = (w - v) / m) : (l = (w + m - h) / m), l > 1 && (l -= 1)
  }
  Object.assign(e, { progress: r, progressLoop: l, isBeginning: n, isEnd: o }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) && e.updateSlidesProgress(t),
    n && !a && e.emit('reachBeginning toEdge'),
    o && !f && e.emit('reachEnd toEdge'),
    ((a && !n) || (f && !o)) && e.emit('fromEdge'),
    e.emit('progress', r)
}
const me = (t, e, i) => {
  e && !t.classList.contains(i) ? t.classList.add(i) : !e && t.classList.contains(i) && t.classList.remove(i)
}
function It() {
  const t = this,
    { slides: e, params: i, slidesEl: s, activeIndex: r } = t,
    n = t.virtual && i.virtual.enabled,
    o = t.grid && i.grid && i.grid.rows > 1,
    l = (u) => R(s, `.${i.slideClass}${u}, swiper-slide${u}`)[0]
  let a, f, c
  if (n)
    if (i.loop) {
      let u = r - t.virtual.slidesBefore
      u < 0 && (u = t.virtual.slides.length + u),
        u >= t.virtual.slides.length && (u -= t.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${u}"]`))
    } else a = l(`[data-swiper-slide-index="${r}"]`)
  else
    o
      ? ((a = e.filter((u) => u.column === r)[0]), (c = e.filter((u) => u.column === r + 1)[0]), (f = e.filter((u) => u.column === r - 1)[0]))
      : (a = e[r])
  a &&
    (o ||
      ((c = ht(a, `.${i.slideClass}, swiper-slide`)[0]),
      i.loop && !c && (c = e[0]),
      (f = mt(a, `.${i.slideClass}, swiper-slide`)[0]),
      i.loop && !f === 0 && (f = e[e.length - 1]))),
    e.forEach((u) => {
      me(u, u === a, i.slideActiveClass), me(u, u === c, i.slideNextClass), me(u, u === f, i.slidePrevClass)
    }),
    t.emitSlidesClasses()
}
const re = (t, e) => {
    if (!t || t.destroyed || !t.params) return
    const i = () => (t.isElement ? 'swiper-slide' : `.${t.params.slideClass}`),
      s = e.closest(i())
    if (s) {
      let r = s.querySelector(`.${t.params.lazyPreloaderClass}`)
      !r &&
        t.isElement &&
        (s.shadowRoot
          ? (r = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot && ((r = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`)), r && r.remove())
            })),
        r && r.remove()
    }
  },
  he = (t, e) => {
    if (!t.slides[e]) return
    const i = t.slides[e].querySelector('[loading="lazy"]')
    i && i.removeAttribute('loading')
  },
  be = (t) => {
    if (!t || t.destroyed || !t.params) return
    let e = t.params.lazyPreloadPrevNext
    const i = t.slides.length
    if (!i || !e || e < 0) return
    e = Math.min(e, i)
    const s = t.params.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView),
      r = t.activeIndex
    if (t.params.grid && t.params.grid.rows > 1) {
      const o = r,
        l = [o - e]
      l.push(...Array.from({ length: e }).map((a, f) => o + s + f)),
        t.slides.forEach((a, f) => {
          l.includes(a.column) && he(t, f)
        })
      return
    }
    const n = r + s - 1
    if (t.params.rewind || t.params.loop)
      for (let o = r - e; o <= n + e; o += 1) {
        const l = ((o % i) + i) % i
        ;(l < r || l > n) && he(t, l)
      }
    else for (let o = Math.max(r - e, 0); o <= Math.min(n + e, i - 1); o += 1) o !== r && (o > n || o < r) && he(t, o)
  }
function Ot(t) {
  const { slidesGrid: e, params: i } = t,
    s = t.rtlTranslate ? t.translate : -t.translate
  let r
  for (let n = 0; n < e.length; n += 1)
    typeof e[n + 1] < 'u'
      ? s >= e[n] && s < e[n + 1] - (e[n + 1] - e[n]) / 2
        ? (r = n)
        : s >= e[n] && s < e[n + 1] && (r = n + 1)
      : s >= e[n] && (r = n)
  return i.normalizeSlideIndex && (r < 0 || typeof r > 'u') && (r = 0), r
}
function _t(t) {
  const e = this,
    i = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: s, params: r, activeIndex: n, realIndex: o, snapIndex: l } = e
  let a = t,
    f
  const c = (h) => {
    let m = h - e.virtual.slidesBefore
    return m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m
  }
  if ((typeof a > 'u' && (a = Ot(e)), s.indexOf(i) >= 0)) f = s.indexOf(i)
  else {
    const h = Math.min(r.slidesPerGroupSkip, a)
    f = h + Math.floor((a - h) / r.slidesPerGroup)
  }
  if ((f >= s.length && (f = s.length - 1), a === n && !e.params.loop)) {
    f !== l && ((e.snapIndex = f), e.emit('snapIndexChange'))
    return
  }
  if (a === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = c(a)
    return
  }
  const u = e.grid && r.grid && r.grid.rows > 1
  let v
  if (e.virtual && r.virtual.enabled && r.loop) v = c(a)
  else if (u) {
    const h = e.slides.filter((w) => w.column === a)[0]
    let m = parseInt(h.getAttribute('data-swiper-slide-index'), 10)
    Number.isNaN(m) && (m = Math.max(e.slides.indexOf(h), 0)), (v = Math.floor(m / r.grid.rows))
  } else if (e.slides[a]) {
    const h = e.slides[a].getAttribute('data-swiper-slide-index')
    h ? (v = parseInt(h, 10)) : (v = a)
  } else v = a
  Object.assign(e, { previousSnapIndex: l, snapIndex: f, previousRealIndex: o, realIndex: v, previousIndex: n, activeIndex: a }),
    e.initialized && be(e),
    e.emit('activeIndexChange'),
    e.emit('snapIndexChange'),
    (e.initialized || e.params.runCallbacksOnInit) && (o !== v && e.emit('realIndexChange'), e.emit('slideChange'))
}
function At(t, e) {
  const i = this,
    s = i.params
  let r = t.closest(`.${s.slideClass}, swiper-slide`)
  !r &&
    i.isElement &&
    e &&
    e.length > 1 &&
    e.includes(t) &&
    [...e.slice(e.indexOf(t) + 1, e.length)].forEach((l) => {
      !r && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (r = l)
    })
  let n = !1,
    o
  if (r) {
    for (let l = 0; l < i.slides.length; l += 1)
      if (i.slides[l] === r) {
        ;(n = !0), (o = l)
        break
      }
  }
  if (r && n)
    (i.clickedSlide = r),
      i.virtual && i.params.virtual.enabled ? (i.clickedIndex = parseInt(r.getAttribute('data-swiper-slide-index'), 10)) : (i.clickedIndex = o)
  else {
    ;(i.clickedSlide = void 0), (i.clickedIndex = void 0)
    return
  }
  s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
}
var zt = {
  updateSize: Tt,
  updateSlides: Et,
  updateAutoHeight: Ct,
  updateSlidesOffset: Pt,
  updateSlidesProgress: Mt,
  updateProgress: Lt,
  updateSlidesClasses: It,
  updateActiveIndex: _t,
  updateClickedSlide: At,
}
function Dt(t) {
  t === void 0 && (t = this.isHorizontal() ? 'x' : 'y')
  const e = this,
    { params: i, rtlTranslate: s, translate: r, wrapperEl: n } = e
  if (i.virtualTranslate) return s ? -r : r
  if (i.cssMode) return r
  let o = ft(n, t)
  return (o += e.cssOverflowAdjustment()), s && (o = -o), o || 0
}
function Gt(t, e) {
  const i = this,
    { rtlTranslate: s, params: r, wrapperEl: n, progress: o } = i
  let l = 0,
    a = 0
  const f = 0
  i.isHorizontal() ? (l = s ? -t : t) : (a = t),
    r.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? l : a),
    r.cssMode
      ? (n[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -l : -a)
      : r.virtualTranslate ||
        (i.isHorizontal() ? (l -= i.cssOverflowAdjustment()) : (a -= i.cssOverflowAdjustment()),
        (n.style.transform = `translate3d(${l}px, ${a}px, ${f}px)`))
  let c
  const u = i.maxTranslate() - i.minTranslate()
  u === 0 ? (c = 0) : (c = (t - i.minTranslate()) / u), c !== o && i.updateProgress(t), i.emit('setTranslate', i.translate, e)
}
function Nt() {
  return -this.snapGrid[0]
}
function jt() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function Bt(t, e, i, s, r) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), s === void 0 && (s = !0)
  const n = this,
    { params: o, wrapperEl: l } = n
  if (n.animating && o.preventInteractionOnTransition) return !1
  const a = n.minTranslate(),
    f = n.maxTranslate()
  let c
  if ((s && t > a ? (c = a) : s && t < f ? (c = f) : (c = t), n.updateProgress(c), o.cssMode)) {
    const u = n.isHorizontal()
    if (e === 0) l[u ? 'scrollLeft' : 'scrollTop'] = -c
    else {
      if (!n.support.smoothScroll) return De({ swiper: n, targetPosition: -c, side: u ? 'left' : 'top' }), !0
      l.scrollTo({ [u ? 'left' : 'top']: -c, behavior: 'smooth' })
    }
    return !0
  }
  return (
    e === 0
      ? (n.setTransition(0), n.setTranslate(c), i && (n.emit('beforeTransitionStart', e, r), n.emit('transitionEnd')))
      : (n.setTransition(e),
        n.setTranslate(c),
        i && (n.emit('beforeTransitionStart', e, r), n.emit('transitionStart')),
        n.animating ||
          ((n.animating = !0),
          n.onTranslateToWrapperTransitionEnd ||
            (n.onTranslateToWrapperTransitionEnd = function (v) {
              !n ||
                n.destroyed ||
                (v.target === this &&
                  (n.wrapperEl.removeEventListener('transitionend', n.onTranslateToWrapperTransitionEnd),
                  (n.onTranslateToWrapperTransitionEnd = null),
                  delete n.onTranslateToWrapperTransitionEnd,
                  (n.animating = !1),
                  i && n.emit('transitionEnd')))
            }),
          n.wrapperEl.addEventListener('transitionend', n.onTranslateToWrapperTransitionEnd))),
    !0
  )
}
var $t = { getTranslate: Dt, setTranslate: Gt, minTranslate: Nt, maxTranslate: jt, translateTo: Bt }
function kt(t, e) {
  const i = this
  i.params.cssMode || ((i.wrapperEl.style.transitionDuration = `${t}ms`), (i.wrapperEl.style.transitionDelay = t === 0 ? '0ms' : '')),
    i.emit('setTransition', t, e)
}
function Be(t) {
  let { swiper: e, runCallbacks: i, direction: s, step: r } = t
  const { activeIndex: n, previousIndex: o } = e
  let l = s
  if ((l || (n > o ? (l = 'next') : n < o ? (l = 'prev') : (l = 'reset')), e.emit(`transition${r}`), i && n !== o)) {
    if (l === 'reset') {
      e.emit(`slideResetTransition${r}`)
      return
    }
    e.emit(`slideChangeTransition${r}`), l === 'next' ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`)
  }
}
function Ft(t, e) {
  t === void 0 && (t = !0)
  const i = this,
    { params: s } = i
  s.cssMode || (s.autoHeight && i.updateAutoHeight(), Be({ swiper: i, runCallbacks: t, direction: e, step: 'Start' }))
}
function Vt(t, e) {
  t === void 0 && (t = !0)
  const i = this,
    { params: s } = i
  ;(i.animating = !1), !s.cssMode && (i.setTransition(0), Be({ swiper: i, runCallbacks: t, direction: e, step: 'End' }))
}
var Rt = { setTransition: kt, transitionStart: Ft, transitionEnd: Vt }
function Ht(t, e, i, s, r) {
  t === void 0 && (t = 0), i === void 0 && (i = !0), typeof t == 'string' && (t = parseInt(t, 10))
  const n = this
  let o = t
  o < 0 && (o = 0)
  const { params: l, snapGrid: a, slidesGrid: f, previousIndex: c, activeIndex: u, rtlTranslate: v, wrapperEl: h, enabled: m } = n
  if ((!m && !s && !r) || n.destroyed || (n.animating && l.preventInteractionOnTransition)) return !1
  typeof e > 'u' && (e = n.params.speed)
  const w = Math.min(n.params.slidesPerGroupSkip, o)
  let x = w + Math.floor((o - w) / n.params.slidesPerGroup)
  x >= a.length && (x = a.length - 1)
  const d = -a[x]
  if (l.normalizeSlideIndex)
    for (let g = 0; g < f.length; g += 1) {
      const S = -Math.floor(d * 100),
        y = Math.floor(f[g] * 100),
        I = Math.floor(f[g + 1] * 100)
      typeof f[g + 1] < 'u' ? (S >= y && S < I - (I - y) / 2 ? (o = g) : S >= y && S < I && (o = g + 1)) : S >= y && (o = g)
    }
  if (
    n.initialized &&
    o !== u &&
    ((!n.allowSlideNext && (v ? d > n.translate && d > n.minTranslate() : d < n.translate && d < n.minTranslate())) ||
      (!n.allowSlidePrev && d > n.translate && d > n.maxTranslate() && (u || 0) !== o))
  )
    return !1
  o !== (c || 0) && i && n.emit('beforeSlideChangeStart'), n.updateProgress(d)
  let p
  if ((o > u ? (p = 'next') : o < u ? (p = 'prev') : (p = 'reset'), (v && -d === n.translate) || (!v && d === n.translate)))
    return (
      n.updateActiveIndex(o),
      l.autoHeight && n.updateAutoHeight(),
      n.updateSlidesClasses(),
      l.effect !== 'slide' && n.setTranslate(d),
      p !== 'reset' && (n.transitionStart(i, p), n.transitionEnd(i, p)),
      !1
    )
  if (l.cssMode) {
    const g = n.isHorizontal(),
      S = v ? d : -d
    if (e === 0) {
      const y = n.virtual && n.params.virtual.enabled
      y && ((n.wrapperEl.style.scrollSnapType = 'none'), (n._immediateVirtual = !0)),
        y && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
          ? ((n._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              h[g ? 'scrollLeft' : 'scrollTop'] = S
            }))
          : (h[g ? 'scrollLeft' : 'scrollTop'] = S),
        y &&
          requestAnimationFrame(() => {
            ;(n.wrapperEl.style.scrollSnapType = ''), (n._immediateVirtual = !1)
          })
    } else {
      if (!n.support.smoothScroll) return De({ swiper: n, targetPosition: S, side: g ? 'left' : 'top' }), !0
      h.scrollTo({ [g ? 'left' : 'top']: S, behavior: 'smooth' })
    }
    return !0
  }
  return (
    n.setTransition(e),
    n.setTranslate(d),
    n.updateActiveIndex(o),
    n.updateSlidesClasses(),
    n.emit('beforeTransitionStart', e, s),
    n.transitionStart(i, p),
    e === 0
      ? n.transitionEnd(i, p)
      : n.animating ||
        ((n.animating = !0),
        n.onSlideToWrapperTransitionEnd ||
          (n.onSlideToWrapperTransitionEnd = function (S) {
            !n ||
              n.destroyed ||
              (S.target === this &&
                (n.wrapperEl.removeEventListener('transitionend', n.onSlideToWrapperTransitionEnd),
                (n.onSlideToWrapperTransitionEnd = null),
                delete n.onSlideToWrapperTransitionEnd,
                n.transitionEnd(i, p)))
          }),
        n.wrapperEl.addEventListener('transitionend', n.onSlideToWrapperTransitionEnd)),
    !0
  )
}
function Wt(t, e, i, s) {
  t === void 0 && (t = 0), i === void 0 && (i = !0), typeof t == 'string' && (t = parseInt(t, 10))
  const r = this
  if (r.destroyed) return
  typeof e > 'u' && (e = r.params.speed)
  const n = r.grid && r.params.grid && r.params.grid.rows > 1
  let o = t
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore
    else {
      let l
      if (n) {
        const v = o * r.params.grid.rows
        l = r.slides.filter((h) => h.getAttribute('data-swiper-slide-index') * 1 === v)[0].column
      } else l = r.getSlideIndexByData(o)
      const a = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
        { centeredSlides: f } = r.params
      let c = r.params.slidesPerView
      c === 'auto' ? (c = r.slidesPerViewDynamic()) : ((c = Math.ceil(parseFloat(r.params.slidesPerView, 10))), f && c % 2 === 0 && (c = c + 1))
      let u = a - l < c
      if ((f && (u = u || l < Math.ceil(c / 2)), s && f && r.params.slidesPerView !== 'auto' && !n && (u = !1), u)) {
        const v = f ? (l < r.activeIndex ? 'prev' : 'next') : l - r.activeIndex - 1 < r.params.slidesPerView ? 'next' : 'prev'
        r.loopFix({
          direction: v,
          slideTo: !0,
          activeSlideIndex: v === 'next' ? l + 1 : l - a + 1,
          slideRealIndex: v === 'next' ? r.realIndex : void 0,
        })
      }
      if (n) {
        const v = o * r.params.grid.rows
        o = r.slides.filter((h) => h.getAttribute('data-swiper-slide-index') * 1 === v)[0].column
      } else o = r.getSlideIndexByData(o)
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(o, e, i, s)
    }),
    r
  )
}
function qt(t, e, i) {
  e === void 0 && (e = !0)
  const s = this,
    { enabled: r, params: n, animating: o } = s
  if (!r || s.destroyed) return s
  typeof t > 'u' && (t = s.params.speed)
  let l = n.slidesPerGroup
  n.slidesPerView === 'auto' && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic('current', !0), 1))
  const a = s.activeIndex < n.slidesPerGroupSkip ? 1 : l,
    f = s.virtual && n.virtual.enabled
  if (n.loop) {
    if (o && !f && n.loopPreventsSliding) return !1
    if ((s.loopFix({ direction: 'next' }), (s._clientLeft = s.wrapperEl.clientLeft), s.activeIndex === s.slides.length - 1 && n.cssMode))
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, t, e, i)
        }),
        !0
      )
  }
  return n.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + a, t, e, i)
}
function Yt(t, e, i) {
  e === void 0 && (e = !0)
  const s = this,
    { params: r, snapGrid: n, slidesGrid: o, rtlTranslate: l, enabled: a, animating: f } = s
  if (!a || s.destroyed) return s
  typeof t > 'u' && (t = s.params.speed)
  const c = s.virtual && r.virtual.enabled
  if (r.loop) {
    if (f && !c && r.loopPreventsSliding) return !1
    s.loopFix({ direction: 'prev' }), (s._clientLeft = s.wrapperEl.clientLeft)
  }
  const u = l ? s.translate : -s.translate
  function v(d) {
    return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d)
  }
  const h = v(u),
    m = n.map((d) => v(d))
  let w = n[m.indexOf(h) - 1]
  if (typeof w > 'u' && r.cssMode) {
    let d
    n.forEach((p, g) => {
      h >= p && (d = g)
    }),
      typeof d < 'u' && (w = n[d > 0 ? d - 1 : d])
  }
  let x = 0
  if (
    (typeof w < 'u' &&
      ((x = o.indexOf(w)),
      x < 0 && (x = s.activeIndex - 1),
      r.slidesPerView === 'auto' &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((x = x - s.slidesPerViewDynamic('previous', !0) + 1), (x = Math.max(x, 0)))),
    r.rewind && s.isBeginning)
  ) {
    const d = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1
    return s.slideTo(d, t, e, i)
  } else if (r.loop && s.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(x, t, e, i)
      }),
      !0
    )
  return s.slideTo(x, t, e, i)
}
function Xt(t, e, i) {
  e === void 0 && (e = !0)
  const s = this
  if (!s.destroyed) return typeof t > 'u' && (t = s.params.speed), s.slideTo(s.activeIndex, t, e, i)
}
function Ut(t, e, i, s) {
  e === void 0 && (e = !0), s === void 0 && (s = 0.5)
  const r = this
  if (r.destroyed) return
  typeof t > 'u' && (t = r.params.speed)
  let n = r.activeIndex
  const o = Math.min(r.params.slidesPerGroupSkip, n),
    l = o + Math.floor((n - o) / r.params.slidesPerGroup),
    a = r.rtlTranslate ? r.translate : -r.translate
  if (a >= r.snapGrid[l]) {
    const f = r.snapGrid[l],
      c = r.snapGrid[l + 1]
    a - f > (c - f) * s && (n += r.params.slidesPerGroup)
  } else {
    const f = r.snapGrid[l - 1],
      c = r.snapGrid[l]
    a - f <= (c - f) * s && (n -= r.params.slidesPerGroup)
  }
  return (n = Math.max(n, 0)), (n = Math.min(n, r.slidesGrid.length - 1)), r.slideTo(n, t, e, i)
}
function Kt() {
  const t = this
  if (t.destroyed) return
  const { params: e, slidesEl: i } = t,
    s = e.slidesPerView === 'auto' ? t.slidesPerViewDynamic() : e.slidesPerView
  let r = t.clickedIndex,
    n
  const o = t.isElement ? 'swiper-slide' : `.${e.slideClass}`
  if (e.loop) {
    if (t.animating) return
    ;(n = parseInt(t.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      e.centeredSlides
        ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2
          ? (t.loopFix(),
            (r = t.getSlideIndex(R(i, `${o}[data-swiper-slide-index="${n}"]`)[0])),
            we(() => {
              t.slideTo(r)
            }))
          : t.slideTo(r)
        : r > t.slides.length - s
          ? (t.loopFix(),
            (r = t.getSlideIndex(R(i, `${o}[data-swiper-slide-index="${n}"]`)[0])),
            we(() => {
              t.slideTo(r)
            }))
          : t.slideTo(r)
  } else t.slideTo(r)
}
var Qt = { slideTo: Ht, slideToLoop: Wt, slideNext: qt, slidePrev: Yt, slideReset: Xt, slideToClosest: Ut, slideToClickedSlide: Kt }
function Zt(t) {
  const e = this,
    { params: i, slidesEl: s } = e
  if (!i.loop || (e.virtual && e.params.virtual.enabled)) return
  const r = () => {
      R(s, `.${i.slideClass}, swiper-slide`).forEach((u, v) => {
        u.setAttribute('data-swiper-slide-index', v)
      })
    },
    n = e.grid && i.grid && i.grid.rows > 1,
    o = i.slidesPerGroup * (n ? i.grid.rows : 1),
    l = e.slides.length % o !== 0,
    a = n && e.slides.length % i.grid.rows !== 0,
    f = (c) => {
      for (let u = 0; u < c; u += 1) {
        const v = e.isElement ? oe('swiper-slide', [i.slideBlankClass]) : oe('div', [i.slideClass, i.slideBlankClass])
        e.slidesEl.append(v)
      }
    }
  if (l) {
    if (i.loopAddBlankSlides) {
      const c = o - (e.slides.length % o)
      f(c), e.recalcSlides(), e.updateSlides()
    } else
      le(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
      )
    r()
  } else if (a) {
    if (i.loopAddBlankSlides) {
      const c = i.grid.rows - (e.slides.length % i.grid.rows)
      f(c), e.recalcSlides(), e.updateSlides()
    } else
      le(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)',
      )
    r()
  } else r()
  e.loopFix({ slideRealIndex: t, direction: i.centeredSlides ? void 0 : 'next' })
}
function Jt(t) {
  let {
    slideRealIndex: e,
    slideTo: i = !0,
    direction: s,
    setTranslate: r,
    activeSlideIndex: n,
    byController: o,
    byMousewheel: l,
  } = t === void 0 ? {} : t
  const a = this
  if (!a.params.loop) return
  a.emit('beforeLoopFix')
  const { slides: f, allowSlidePrev: c, allowSlideNext: u, slidesEl: v, params: h } = a,
    { centeredSlides: m } = h
  if (((a.allowSlidePrev = !0), (a.allowSlideNext = !0), a.virtual && h.virtual.enabled)) {
    i &&
      (!h.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && a.snapIndex < h.slidesPerView
          ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
          : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = u),
      a.emit('loopFix')
    return
  }
  let w = h.slidesPerView
  w === 'auto' ? (w = a.slidesPerViewDynamic()) : ((w = Math.ceil(parseFloat(h.slidesPerView, 10))), m && w % 2 === 0 && (w = w + 1))
  const x = h.slidesPerGroupAuto ? w : h.slidesPerGroup
  let d = x
  d % x !== 0 && (d += x - (d % x)), (d += h.loopAdditionalSlides), (a.loopedSlides = d)
  const p = a.grid && h.grid && h.grid.rows > 1
  f.length < w + d
    ? le(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters',
      )
    : p && h.grid.fill === 'row' && le('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`')
  const g = [],
    S = []
  let y = a.activeIndex
  typeof n > 'u' ? (n = a.getSlideIndex(f.filter((T) => T.classList.contains(h.slideActiveClass))[0])) : (y = n)
  const I = s === 'next' || !s,
    N = s === 'prev' || !s
  let M = 0,
    C = 0
  const b = p ? Math.ceil(f.length / h.grid.rows) : f.length,
    E = (p ? f[n].column : n) + (m && typeof r > 'u' ? -w / 2 + 0.5 : 0)
  if (E < d) {
    M = Math.max(d - E, x)
    for (let T = 0; T < d - E; T += 1) {
      const O = T - Math.floor(T / b) * b
      if (p) {
        const z = b - O - 1
        for (let F = f.length - 1; F >= 0; F -= 1) f[F].column === z && g.push(F)
      } else g.push(b - O - 1)
    }
  } else if (E + w > b - d) {
    C = Math.max(E - (b - d * 2), x)
    for (let T = 0; T < C; T += 1) {
      const O = T - Math.floor(T / b) * b
      p
        ? f.forEach((z, F) => {
            z.column === O && S.push(F)
          })
        : S.push(O)
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1
    }),
    N &&
      g.forEach((T) => {
        ;(f[T].swiperLoopMoveDOM = !0), v.prepend(f[T]), (f[T].swiperLoopMoveDOM = !1)
      }),
    I &&
      S.forEach((T) => {
        ;(f[T].swiperLoopMoveDOM = !0), v.append(f[T]), (f[T].swiperLoopMoveDOM = !1)
      }),
    a.recalcSlides(),
    h.slidesPerView === 'auto'
      ? a.updateSlides()
      : p &&
        ((g.length > 0 && N) || (S.length > 0 && I)) &&
        a.slides.forEach((T, O) => {
          a.grid.updateSlide(O, T, a.slides)
        }),
    h.watchSlidesProgress && a.updateSlidesOffset(),
    i)
  ) {
    if (g.length > 0 && N) {
      if (typeof e > 'u') {
        const T = a.slidesGrid[y],
          z = a.slidesGrid[y + M] - T
        l
          ? a.setTranslate(a.translate - z)
          : (a.slideTo(y + Math.ceil(M), 0, !1, !0),
            r &&
              ((a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - z),
              (a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - z)))
      } else if (r) {
        const T = p ? g.length / h.grid.rows : g.length
        a.slideTo(a.activeIndex + T, 0, !1, !0), (a.touchEventsData.currentTranslate = a.translate)
      }
    } else if (S.length > 0 && I)
      if (typeof e > 'u') {
        const T = a.slidesGrid[y],
          z = a.slidesGrid[y - C] - T
        l
          ? a.setTranslate(a.translate - z)
          : (a.slideTo(y - C, 0, !1, !0),
            r &&
              ((a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - z),
              (a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - z)))
      } else {
        const T = p ? S.length / h.grid.rows : S.length
        a.slideTo(a.activeIndex - T, 0, !1, !0)
      }
  }
  if (((a.allowSlidePrev = c), (a.allowSlideNext = u), a.controller && a.controller.control && !o)) {
    const T = { slideRealIndex: e, direction: s, setTranslate: r, activeSlideIndex: n, byController: !0 }
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((O) => {
          !O.destroyed && O.params.loop && O.loopFix({ ...T, slideTo: O.params.slidesPerView === h.slidesPerView ? i : !1 })
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({ ...T, slideTo: a.controller.control.params.slidesPerView === h.slidesPerView ? i : !1 })
  }
  a.emit('loopFix')
}
function ei() {
  const t = this,
    { params: e, slidesEl: i } = t
  if (!e.loop || (t.virtual && t.params.virtual.enabled)) return
  t.recalcSlides()
  const s = []
  t.slides.forEach((r) => {
    const n = typeof r.swiperSlideIndex > 'u' ? r.getAttribute('data-swiper-slide-index') * 1 : r.swiperSlideIndex
    s[n] = r
  }),
    t.slides.forEach((r) => {
      r.removeAttribute('data-swiper-slide-index')
    }),
    s.forEach((r) => {
      i.append(r)
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0)
}
var ti = { loopCreate: Zt, loopFix: Jt, loopDestroy: ei }
function ii(t) {
  const e = this
  if (!e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode) return
  const i = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl
  e.isElement && (e.__preventObserver__ = !0),
    (i.style.cursor = 'move'),
    (i.style.cursor = t ? 'grabbing' : 'grab'),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1
      })
}
function si() {
  const t = this
  ;(t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t.isElement && (t.__preventObserver__ = !0),
    (t[t.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1
      }))
}
var ni = { setGrabCursor: ii, unsetGrabCursor: si }
function ri(t, e) {
  e === void 0 && (e = this)
  function i(s) {
    if (!s || s === q() || s === k()) return null
    s.assignedSlot && (s = s.assignedSlot)
    const r = s.closest(t)
    return !r && !s.getRootNode ? null : r || i(s.getRootNode().host)
  }
  return i(e)
}
function Ie(t, e, i) {
  const s = k(),
    { params: r } = t,
    n = r.edgeSwipeDetection,
    o = r.edgeSwipeThreshold
  return n && (i <= o || i >= s.innerWidth - o) ? (n === 'prevent' ? (e.preventDefault(), !0) : !1) : !0
}
function ai(t) {
  const e = this,
    i = q()
  let s = t
  s.originalEvent && (s = s.originalEvent)
  const r = e.touchEventsData
  if (s.type === 'pointerdown') {
    if (r.pointerId !== null && r.pointerId !== s.pointerId) return
    r.pointerId = s.pointerId
  } else s.type === 'touchstart' && s.targetTouches.length === 1 && (r.touchId = s.targetTouches[0].identifier)
  if (s.type === 'touchstart') {
    Ie(e, s, s.targetTouches[0].pageX)
    return
  }
  const { params: n, touches: o, enabled: l } = e
  if (!l || (!n.simulateTouch && s.pointerType === 'mouse') || (e.animating && n.preventInteractionOnTransition)) return
  !e.animating && n.cssMode && n.loop && e.loopFix()
  let a = s.target
  if (
    (n.touchEventsTarget === 'wrapper' && !e.wrapperEl.contains(a)) ||
    ('which' in s && s.which === 3) ||
    ('button' in s && s.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return
  const f = !!n.noSwipingClass && n.noSwipingClass !== '',
    c = s.composedPath ? s.composedPath() : s.path
  f && s.target && s.target.shadowRoot && c && (a = c[0])
  const u = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
    v = !!(s.target && s.target.shadowRoot)
  if (n.noSwiping && (v ? ri(u, a) : a.closest(u))) {
    e.allowClick = !0
    return
  }
  if (n.swipeHandler && !a.closest(n.swipeHandler)) return
  ;(o.currentX = s.pageX), (o.currentY = s.pageY)
  const h = o.currentX,
    m = o.currentY
  if (!Ie(e, s, h)) return
  Object.assign(r, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
    (o.startX = h),
    (o.startY = m),
    (r.touchStartTime = ae()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    n.threshold > 0 && (r.allowThresholdMove = !1)
  let w = !0
  a.matches(r.focusableElements) && ((w = !1), a.nodeName === 'SELECT' && (r.isTouched = !1)),
    i.activeElement && i.activeElement.matches(r.focusableElements) && i.activeElement !== a && i.activeElement.blur()
  const x = w && e.allowTouchMove && n.touchStartPreventDefault
  ;(n.touchStartForcePreventDefault || x) && !a.isContentEditable && s.preventDefault(),
    n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(),
    e.emit('touchStart', s)
}
function li(t) {
  const e = q(),
    i = this,
    s = i.touchEventsData,
    { params: r, touches: n, rtlTranslate: o, enabled: l } = i
  if (!l || (!r.simulateTouch && t.pointerType === 'mouse')) return
  let a = t
  if ((a.originalEvent && (a = a.originalEvent), a.type === 'pointermove' && (s.touchId !== null || a.pointerId !== s.pointerId))) return
  let f
  if (a.type === 'touchmove') {
    if (((f = [...a.changedTouches].filter((I) => I.identifier === s.touchId)[0]), !f || f.identifier !== s.touchId)) return
  } else f = a
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && i.emit('touchMoveOpposite', a)
    return
  }
  const c = f.pageX,
    u = f.pageY
  if (a.preventedByNestedSwiper) {
    ;(n.startX = c), (n.startY = u)
    return
  }
  if (!i.allowTouchMove) {
    a.target.matches(s.focusableElements) || (i.allowClick = !1),
      s.isTouched && (Object.assign(n, { startX: c, startY: u, currentX: c, currentY: u }), (s.touchStartTime = ae()))
    return
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (i.isVertical()) {
      if ((u < n.startY && i.translate <= i.maxTranslate()) || (u > n.startY && i.translate >= i.minTranslate())) {
        ;(s.isTouched = !1), (s.isMoved = !1)
        return
      }
    } else if ((c < n.startX && i.translate <= i.maxTranslate()) || (c > n.startX && i.translate >= i.minTranslate())) return
  }
  if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
    ;(s.isMoved = !0), (i.allowClick = !1)
    return
  }
  s.allowTouchCallbacks && i.emit('touchMove', a), (n.previousX = n.currentX), (n.previousY = n.currentY), (n.currentX = c), (n.currentY = u)
  const v = n.currentX - n.startX,
    h = n.currentY - n.startY
  if (i.params.threshold && Math.sqrt(v ** 2 + h ** 2) < i.params.threshold) return
  if (typeof s.isScrolling > 'u') {
    let I
    ;(i.isHorizontal() && n.currentY === n.startY) || (i.isVertical() && n.currentX === n.startX)
      ? (s.isScrolling = !1)
      : v * v + h * h >= 25 &&
        ((I = (Math.atan2(Math.abs(h), Math.abs(v)) * 180) / Math.PI), (s.isScrolling = i.isHorizontal() ? I > r.touchAngle : 90 - I > r.touchAngle))
  }
  if (
    (s.isScrolling && i.emit('touchMoveOpposite', a),
    typeof s.startMoving > 'u' && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0),
    s.isScrolling || (a.type === 'touchmove' && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1
    return
  }
  if (!s.startMoving) return
  ;(i.allowClick = !1), !r.cssMode && a.cancelable && a.preventDefault(), r.touchMoveStopPropagation && !r.nested && a.stopPropagation()
  let m = i.isHorizontal() ? v : h,
    w = i.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY
  r.oneWayMovement && ((m = Math.abs(m) * (o ? 1 : -1)), (w = Math.abs(w) * (o ? 1 : -1))),
    (n.diff = m),
    (m *= r.touchRatio),
    o && ((m = -m), (w = -w))
  const x = i.touchesDirection
  ;(i.swipeDirection = m > 0 ? 'prev' : 'next'), (i.touchesDirection = w > 0 ? 'prev' : 'next')
  const d = i.params.loop && !r.cssMode,
    p = (i.touchesDirection === 'next' && i.allowSlideNext) || (i.touchesDirection === 'prev' && i.allowSlidePrev)
  if (!s.isMoved) {
    if ((d && p && i.loopFix({ direction: i.swipeDirection }), (s.startTranslate = i.getTranslate()), i.setTransition(0), i.animating)) {
      const I = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0, detail: { bySwiperTouchMove: !0 } })
      i.wrapperEl.dispatchEvent(I)
    }
    ;(s.allowMomentumBounce = !1),
      r.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
      i.emit('sliderFirstMove', a)
  }
  let g
  if ((new Date().getTime(), s.isMoved && s.allowThresholdMove && x !== i.touchesDirection && d && p && Math.abs(m) >= 1)) {
    Object.assign(n, { startX: c, startY: u, currentX: c, currentY: u, startTranslate: s.currentTranslate }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate)
    return
  }
  i.emit('sliderMove', a), (s.isMoved = !0), (s.currentTranslate = m + s.startTranslate)
  let S = !0,
    y = r.resistanceRatio
  if (
    (r.touchReleaseOnEdges && (y = 0),
    m > 0
      ? (d &&
          p &&
          !g &&
          s.allowThresholdMove &&
          s.currentTranslate > (r.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] : i.minTranslate()) &&
          i.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
        s.currentTranslate > i.minTranslate() &&
          ((S = !1), r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** y)))
      : m < 0 &&
        (d &&
          p &&
          !g &&
          s.allowThresholdMove &&
          s.currentTranslate < (r.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] : i.maxTranslate()) &&
          i.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex: i.slides.length - (r.slidesPerView === 'auto' ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        s.currentTranslate < i.maxTranslate() &&
          ((S = !1), r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** y))),
    S && (a.preventedByNestedSwiper = !0),
    !i.allowSlideNext && i.swipeDirection === 'next' && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev && i.swipeDirection === 'prev' && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(m) > r.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ;(s.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (s.currentTranslate = s.startTranslate),
          (n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        return
      }
    } else {
      s.currentTranslate = s.startTranslate
      return
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && i.freeMode) || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(s.currentTranslate),
    i.setTranslate(s.currentTranslate))
}
function oi(t) {
  const e = this,
    i = e.touchEventsData
  let s = t
  s.originalEvent && (s = s.originalEvent)
  let r
  if (s.type === 'touchend' || s.type === 'touchcancel') {
    if (((r = [...s.changedTouches].filter((y) => y.identifier === i.touchId)[0]), !r || r.identifier !== i.touchId)) return
  } else {
    if (i.touchId !== null || s.pointerId !== i.pointerId) return
    r = s
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(s.type) &&
    !(['pointercancel', 'contextmenu'].includes(s.type) && (e.browser.isSafari || e.browser.isWebView))
  )
    return
  ;(i.pointerId = null), (i.touchId = null)
  const { params: o, touches: l, rtlTranslate: a, slidesGrid: f, enabled: c } = e
  if (!c || (!o.simulateTouch && s.pointerType === 'mouse')) return
  if ((i.allowTouchCallbacks && e.emit('touchEnd', s), (i.allowTouchCallbacks = !1), !i.isTouched)) {
    i.isMoved && o.grabCursor && e.setGrabCursor(!1), (i.isMoved = !1), (i.startMoving = !1)
    return
  }
  o.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1)
  const u = ae(),
    v = u - i.touchStartTime
  if (e.allowClick) {
    const y = s.path || (s.composedPath && s.composedPath())
    e.updateClickedSlide((y && y[0]) || s.target, y),
      e.emit('tap click', s),
      v < 300 && u - i.lastClickTime < 300 && e.emit('doubleTap doubleClick', s)
  }
  if (
    ((i.lastClickTime = ae()),
    we(() => {
      e.destroyed || (e.allowClick = !0)
    }),
    !i.isTouched ||
      !i.isMoved ||
      !e.swipeDirection ||
      (l.diff === 0 && !i.loopSwapReset) ||
      (i.currentTranslate === i.startTranslate && !i.loopSwapReset))
  ) {
    ;(i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1)
    return
  }
  ;(i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1)
  let h
  if ((o.followFinger ? (h = a ? e.translate : -e.translate) : (h = -i.currentTranslate), o.cssMode)) return
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: h })
    return
  }
  const m = h >= -e.maxTranslate() && !e.params.loop
  let w = 0,
    x = e.slidesSizesGrid[0]
  for (let y = 0; y < f.length; y += y < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const I = y < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
    typeof f[y + I] < 'u'
      ? (m || (h >= f[y] && h < f[y + I])) && ((w = y), (x = f[y + I] - f[y]))
      : (m || h >= f[y]) && ((w = y), (x = f[f.length - 1] - f[f.length - 2]))
  }
  let d = null,
    p = null
  o.rewind &&
    (e.isBeginning ? (p = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1) : e.isEnd && (d = 0))
  const g = (h - f[w]) / x,
    S = w < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
  if (v > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex)
      return
    }
    e.swipeDirection === 'next' && (g >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? d : w + S) : e.slideTo(w)),
      e.swipeDirection === 'prev' &&
        (g > 1 - o.longSwipesRatio ? e.slideTo(w + S) : p !== null && g < 0 && Math.abs(g) > o.longSwipesRatio ? e.slideTo(p) : e.slideTo(w))
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex)
      return
    }
    e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl)
      ? s.target === e.navigation.nextEl
        ? e.slideTo(w + S)
        : e.slideTo(w)
      : (e.swipeDirection === 'next' && e.slideTo(d !== null ? d : w + S), e.swipeDirection === 'prev' && e.slideTo(p !== null ? p : w))
  }
}
function Oe() {
  const t = this,
    { params: e, el: i } = t
  if (i && i.offsetWidth === 0) return
  e.breakpoints && t.setBreakpoint()
  const { allowSlideNext: s, allowSlidePrev: r, snapGrid: n } = t,
    o = t.virtual && t.params.virtual.enabled
  ;(t.allowSlideNext = !0), (t.allowSlidePrev = !0), t.updateSize(), t.updateSlides(), t.updateSlidesClasses()
  const l = o && e.loop
  ;(e.slidesPerView === 'auto' || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !l
    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
    : t.params.loop && !o
      ? t.slideToLoop(t.realIndex, 0, !1, !0)
      : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(t.autoplay.resizeTimeout),
      (t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
      }, 500))),
    (t.allowSlidePrev = r),
    (t.allowSlideNext = s),
    t.params.watchOverflow && n !== t.snapGrid && t.checkOverflow()
}
function di(t) {
  const e = this
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
}
function ci() {
  const t = this,
    { wrapperEl: e, rtlTranslate: i, enabled: s } = t
  if (!s) return
  ;(t.previousTranslate = t.translate),
    t.isHorizontal() ? (t.translate = -e.scrollLeft) : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses()
  let r
  const n = t.maxTranslate() - t.minTranslate()
  n === 0 ? (r = 0) : (r = (t.translate - t.minTranslate()) / n),
    r !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
    t.emit('setTranslate', t.translate, !1)
}
function ui(t) {
  const e = this
  re(e, t.target), !(e.params.cssMode || (e.params.slidesPerView !== 'auto' && !e.params.autoHeight)) && e.update()
}
function fi() {
  const t = this
  t.documentTouchHandlerProceeded || ((t.documentTouchHandlerProceeded = !0), t.params.touchReleaseOnEdges && (t.el.style.touchAction = 'auto'))
}
const $e = (t, e) => {
  const i = q(),
    { params: s, el: r, wrapperEl: n, device: o } = t,
    l = !!s.nested,
    a = e === 'on' ? 'addEventListener' : 'removeEventListener',
    f = e
  !r ||
    typeof r == 'string' ||
    (i[a]('touchstart', t.onDocumentTouchStart, { passive: !1, capture: l }),
    r[a]('touchstart', t.onTouchStart, { passive: !1 }),
    r[a]('pointerdown', t.onTouchStart, { passive: !1 }),
    i[a]('touchmove', t.onTouchMove, { passive: !1, capture: l }),
    i[a]('pointermove', t.onTouchMove, { passive: !1, capture: l }),
    i[a]('touchend', t.onTouchEnd, { passive: !0 }),
    i[a]('pointerup', t.onTouchEnd, { passive: !0 }),
    i[a]('pointercancel', t.onTouchEnd, { passive: !0 }),
    i[a]('touchcancel', t.onTouchEnd, { passive: !0 }),
    i[a]('pointerout', t.onTouchEnd, { passive: !0 }),
    i[a]('pointerleave', t.onTouchEnd, { passive: !0 }),
    i[a]('contextmenu', t.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) && r[a]('click', t.onClick, !0),
    s.cssMode && n[a]('scroll', t.onScroll),
    s.updateOnWindowResize
      ? t[f](o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', Oe, !0)
      : t[f]('observerUpdate', Oe, !0),
    r[a]('load', t.onLoad, { capture: !0 }))
}
function pi() {
  const t = this,
    { params: e } = t
  ;(t.onTouchStart = ai.bind(t)),
    (t.onTouchMove = li.bind(t)),
    (t.onTouchEnd = oi.bind(t)),
    (t.onDocumentTouchStart = fi.bind(t)),
    e.cssMode && (t.onScroll = ci.bind(t)),
    (t.onClick = di.bind(t)),
    (t.onLoad = ui.bind(t)),
    $e(t, 'on')
}
function mi() {
  $e(this, 'off')
}
var hi = { attachEvents: pi, detachEvents: mi }
const _e = (t, e) => t.grid && e.grid && e.grid.rows > 1
function gi() {
  const t = this,
    { realIndex: e, initialized: i, params: s, el: r } = t,
    n = s.breakpoints
  if (!n || (n && Object.keys(n).length === 0)) return
  const o = t.getBreakpoint(n, t.params.breakpointsBase, t.el)
  if (!o || t.currentBreakpoint === o) return
  const a = (o in n ? n[o] : void 0) || t.originalParams,
    f = _e(t, s),
    c = _e(t, a),
    u = t.params.grabCursor,
    v = a.grabCursor,
    h = s.enabled
  f && !c
    ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), t.emitContainerClasses())
    : !f &&
      c &&
      (r.classList.add(`${s.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === 'column') || (!a.grid.fill && s.grid.fill === 'column')) &&
        r.classList.add(`${s.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    u && !v ? t.unsetGrabCursor() : !u && v && t.setGrabCursor(),
    ['navigation', 'pagination', 'scrollbar'].forEach((g) => {
      if (typeof a[g] > 'u') return
      const S = s[g] && s[g].enabled,
        y = a[g] && a[g].enabled
      S && !y && t[g].disable(), !S && y && t[g].enable()
    })
  const m = a.direction && a.direction !== s.direction,
    w = s.loop && (a.slidesPerView !== s.slidesPerView || m),
    x = s.loop
  m && i && t.changeDirection(), $(t.params, a)
  const d = t.params.enabled,
    p = t.params.loop
  Object.assign(t, { allowTouchMove: t.params.allowTouchMove, allowSlideNext: t.params.allowSlideNext, allowSlidePrev: t.params.allowSlidePrev }),
    h && !d ? t.disable() : !h && d && t.enable(),
    (t.currentBreakpoint = o),
    t.emit('_beforeBreakpoint', a),
    i && (w ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !x && p ? (t.loopCreate(e), t.updateSlides()) : x && !p && t.loopDestroy()),
    t.emit('breakpoint', a)
}
function vi(t, e, i) {
  if ((e === void 0 && (e = 'window'), !t || (e === 'container' && !i))) return
  let s = !1
  const r = k(),
    n = e === 'window' ? r.innerHeight : i.clientHeight,
    o = Object.keys(t).map((l) => {
      if (typeof l == 'string' && l.indexOf('@') === 0) {
        const a = parseFloat(l.substr(1))
        return { value: n * a, point: l }
      }
      return { value: l, point: l }
    })
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10))
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: f } = o[l]
    e === 'window' ? r.matchMedia(`(min-width: ${f}px)`).matches && (s = a) : f <= i.clientWidth && (s = a)
  }
  return s || 'max'
}
var wi = { setBreakpoint: gi, getBreakpoint: vi }
function Si(t, e) {
  const i = []
  return (
    t.forEach((s) => {
      typeof s == 'object'
        ? Object.keys(s).forEach((r) => {
            s[r] && i.push(e + r)
          })
        : typeof s == 'string' && i.push(e + s)
    }),
    i
  )
}
function bi() {
  const t = this,
    { classNames: e, params: i, rtl: s, el: r, device: n } = t,
    o = Si(
      [
        'initialized',
        i.direction,
        { 'free-mode': t.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: s },
        { grid: i.grid && i.grid.rows > 1 },
        { 'grid-column': i.grid && i.grid.rows > 1 && i.grid.fill === 'column' },
        { android: n.android },
        { ios: n.ios },
        { 'css-mode': i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { 'watch-progress': i.watchSlidesProgress },
      ],
      i.containerModifierClass,
    )
  e.push(...o), r.classList.add(...e), t.emitContainerClasses()
}
function xi() {
  const t = this,
    { el: e, classNames: i } = t
  !e || typeof e == 'string' || (e.classList.remove(...i), t.emitContainerClasses())
}
var yi = { addClasses: bi, removeClasses: xi }
function Ti() {
  const t = this,
    { isLocked: e, params: i } = t,
    { slidesOffsetBefore: s } = i
  if (s) {
    const r = t.slides.length - 1,
      n = t.slidesGrid[r] + t.slidesSizesGrid[r] + s * 2
    t.isLocked = t.size > n
  } else t.isLocked = t.snapGrid.length === 1
  i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? 'lock' : 'unlock')
}
var Ei = { checkOverflow: Ti },
  xe = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    swiperElementNodeName: 'SWIPER-CONTAINER',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  }
function Ci(t, e) {
  return function (s) {
    s === void 0 && (s = {})
    const r = Object.keys(s)[0],
      n = s[r]
    if (typeof n != 'object' || n === null) {
      $(e, s)
      return
    }
    if (
      (t[r] === !0 && (t[r] = { enabled: !0 }),
      r === 'navigation' && t[r] && t[r].enabled && !t[r].prevEl && !t[r].nextEl && (t[r].auto = !0),
      ['pagination', 'scrollbar'].indexOf(r) >= 0 && t[r] && t[r].enabled && !t[r].el && (t[r].auto = !0),
      !(r in t && 'enabled' in n))
    ) {
      $(e, s)
      return
    }
    typeof t[r] == 'object' && !('enabled' in t[r]) && (t[r].enabled = !0), t[r] || (t[r] = { enabled: !1 }), $(e, s)
  }
}
const ge = {
    eventsEmitter: yt,
    update: zt,
    translate: $t,
    transition: Rt,
    slide: Qt,
    loop: ti,
    grabCursor: ni,
    events: hi,
    breakpoints: wi,
    checkOverflow: Ei,
    classes: yi,
  },
  ve = {}
let Te = class W {
  constructor() {
    let e, i
    for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n]
    r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === 'Object' ? (i = r[0]) : ([e, i] = r),
      i || (i = {}),
      (i = $({}, i)),
      e && !i.el && (i.el = e)
    const o = q()
    if (i.el && typeof i.el == 'string' && o.querySelectorAll(i.el).length > 1) {
      const c = []
      return (
        o.querySelectorAll(i.el).forEach((u) => {
          const v = $({}, i, { el: u })
          c.push(new W(v))
        }),
        c
      )
    }
    const l = this
    ;(l.__swiper__ = !0),
      (l.support = Ne()),
      (l.device = je({ userAgent: i.userAgent })),
      (l.browser = St()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules)
    const a = {}
    l.modules.forEach((c) => {
      c({ params: i, swiper: l, extendParams: Ci(i, a), on: l.on.bind(l), once: l.once.bind(l), off: l.off.bind(l), emit: l.emit.bind(l) })
    })
    const f = $({}, xe, a)
    return (
      (l.params = $({}, f, ve, i)),
      (l.originalParams = $({}, l.params)),
      (l.passedParams = $({}, i)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((c) => {
          l.on(c, l.params.on[c])
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === 'horizontal'
        },
        isVertical() {
          return l.params.direction === 'vertical'
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit('_swiper'),
      l.params.init && l.init(),
      l
    )
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[e]
  }
  getSlideIndex(e) {
    const { slidesEl: i, params: s } = this,
      r = R(i, `.${s.slideClass}, swiper-slide`),
      n = de(r[0])
    return de(e) - n
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter((i) => i.getAttribute('data-swiper-slide-index') * 1 === e)[0])
  }
  recalcSlides() {
    const e = this,
      { slidesEl: i, params: s } = e
    e.slides = R(i, `.${s.slideClass}, swiper-slide`)
  }
  enable() {
    const e = this
    e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'))
  }
  disable() {
    const e = this
    e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'))
  }
  setProgress(e, i) {
    const s = this
    e = Math.min(Math.max(e, 0), 1)
    const r = s.minTranslate(),
      o = (s.maxTranslate() - r) * e + r
    s.translateTo(o, typeof i > 'u' ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses()
  }
  emitContainerClasses() {
    const e = this
    if (!e.params._emitClasses || !e.el) return
    const i = e.el.className.split(' ').filter((s) => s.indexOf('swiper') === 0 || s.indexOf(e.params.containerModifierClass) === 0)
    e.emit('_containerClasses', i.join(' '))
  }
  getSlideClasses(e) {
    const i = this
    return i.destroyed
      ? ''
      : e.className
          .split(' ')
          .filter((s) => s.indexOf('swiper-slide') === 0 || s.indexOf(i.params.slideClass) === 0)
          .join(' ')
  }
  emitSlidesClasses() {
    const e = this
    if (!e.params._emitClasses || !e.el) return
    const i = []
    e.slides.forEach((s) => {
      const r = e.getSlideClasses(s)
      i.push({ slideEl: s, classNames: r }), e.emit('_slideClass', s, r)
    }),
      e.emit('_slideClasses', i)
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = 'current'), i === void 0 && (i = !1)
    const s = this,
      { params: r, slides: n, slidesGrid: o, slidesSizesGrid: l, size: a, activeIndex: f } = s
    let c = 1
    if (typeof r.slidesPerView == 'number') return r.slidesPerView
    if (r.centeredSlides) {
      let u = n[f] ? Math.ceil(n[f].swiperSlideSize) : 0,
        v
      for (let h = f + 1; h < n.length; h += 1) n[h] && !v && ((u += Math.ceil(n[h].swiperSlideSize)), (c += 1), u > a && (v = !0))
      for (let h = f - 1; h >= 0; h -= 1) n[h] && !v && ((u += n[h].swiperSlideSize), (c += 1), u > a && (v = !0))
    } else if (e === 'current') for (let u = f + 1; u < n.length; u += 1) (i ? o[u] + l[u] - o[f] < a : o[u] - o[f] < a) && (c += 1)
    else for (let u = f - 1; u >= 0; u -= 1) o[f] - o[u] < a && (c += 1)
    return c
  }
  update() {
    const e = this
    if (!e || e.destroyed) return
    const { snapGrid: i, params: s } = e
    s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && re(e, o)
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses()
    function r() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate())
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses()
    }
    let n
    if (s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && e.updateAutoHeight()
    else {
      if ((s.slidesPerView === 'auto' || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides
        n = e.slideTo(o.length - 1, 0, !1, !0)
      } else n = e.slideTo(e.activeIndex, 0, !1, !0)
      n || r()
    }
    s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit('update')
  }
  changeDirection(e, i) {
    i === void 0 && (i = !0)
    const s = this,
      r = s.params.direction
    return (
      e || (e = r === 'horizontal' ? 'vertical' : 'horizontal'),
      e === r ||
        (e !== 'horizontal' && e !== 'vertical') ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((n) => {
          e === 'vertical' ? (n.style.width = '') : (n.style.height = '')
        }),
        s.emit('changeDirection'),
        i && s.update()),
      s
    )
  }
  changeLanguageDirection(e) {
    const i = this
    ;(i.rtl && e === 'rtl') ||
      (!i.rtl && e === 'ltr') ||
      ((i.rtl = e === 'rtl'),
      (i.rtlTranslate = i.params.direction === 'horizontal' && i.rtl),
      i.rtl
        ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'rtl'))
        : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'ltr')),
      i.update())
  }
  mount(e) {
    const i = this
    if (i.mounted) return !0
    let s = e || i.params.el
    if ((typeof s == 'string' && (s = document.querySelector(s)), !s)) return !1
    ;(s.swiper = i),
      s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === i.params.swiperElementNodeName.toUpperCase() && (i.isElement = !0)
    const r = () => `.${(i.params.wrapperClass || '').trim().split(' ').join('.')}`
    let o = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : R(s, r())[0]
    return (
      !o &&
        i.params.createElements &&
        ((o = oe('div', i.params.wrapperClass)),
        s.append(o),
        R(s, `.${i.params.slideClass}`).forEach((l) => {
          o.append(l)
        })),
      Object.assign(i, {
        el: s,
        wrapperEl: o,
        slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
        hostEl: i.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === 'rtl' || X(s, 'direction') === 'rtl',
        rtlTranslate: i.params.direction === 'horizontal' && (s.dir.toLowerCase() === 'rtl' || X(s, 'direction') === 'rtl'),
        wrongRTL: X(o, 'display') === '-webkit-box',
      }),
      !0
    )
  }
  init(e) {
    const i = this
    if (i.initialized || i.mount(e) === !1) return i
    i.emit('beforeInit'),
      i.params.breakpoints && i.setBreakpoint(),
      i.addClasses(),
      i.updateSize(),
      i.updateSlides(),
      i.params.watchOverflow && i.checkOverflow(),
      i.params.grabCursor && i.enabled && i.setGrabCursor(),
      i.params.loop && i.virtual && i.params.virtual.enabled
        ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0)
        : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
      i.params.loop && i.loopCreate(),
      i.attachEvents()
    const r = [...i.el.querySelectorAll('[loading="lazy"]')]
    return (
      i.isElement && r.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
      r.forEach((n) => {
        n.complete
          ? re(i, n)
          : n.addEventListener('load', (o) => {
              re(i, o.target)
            })
      }),
      be(i),
      (i.initialized = !0),
      be(i),
      i.emit('init'),
      i.emit('afterInit'),
      i
    )
  }
  destroy(e, i) {
    e === void 0 && (e = !0), i === void 0 && (i = !0)
    const s = this,
      { params: r, el: n, wrapperEl: o, slides: l } = s
    return (
      typeof s.params > 'u' ||
        s.destroyed ||
        (s.emit('beforeDestroy'),
        (s.initialized = !1),
        s.detachEvents(),
        r.loop && s.loopDestroy(),
        i &&
          (s.removeClasses(),
          n && typeof n != 'string' && n.removeAttribute('style'),
          o && o.removeAttribute('style'),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
                a.removeAttribute('style'),
                a.removeAttribute('data-swiper-slide-index')
            })),
        s.emit('destroy'),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a)
        }),
        e !== !1 && (s.el && typeof s.el != 'string' && (s.el.swiper = null), ct(s)),
        (s.destroyed = !0)),
      null
    )
  }
  static extendDefaults(e) {
    $(ve, e)
  }
  static get extendedDefaults() {
    return ve
  }
  static get defaults() {
    return xe
  }
  static installModule(e) {
    W.prototype.__modules__ || (W.prototype.__modules__ = [])
    const i = W.prototype.__modules__
    typeof e == 'function' && i.indexOf(e) < 0 && i.push(e)
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((i) => W.installModule(i)), W) : (W.installModule(e), W)
  }
}
Object.keys(ge).forEach((t) => {
  Object.keys(ge[t]).forEach((e) => {
    Te.prototype[e] = ge[t][e]
  })
})
Te.use([bt, xt])
const ke = [
  'eventsPrefix',
  'injectStyles',
  'injectStylesUrls',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'swiperElementNodeName',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  'breakpointsBase',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopAdditionalSlides',
  'loopAddBlankSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideFullyVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'slideBlankClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'lazyPreloadPrevNext',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control',
]
function K(t) {
  return typeof t == 'object' && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === 'Object' && !t.__swiper__
}
function Q(t, e) {
  const i = ['__proto__', 'constructor', 'prototype']
  Object.keys(e)
    .filter((s) => i.indexOf(s) < 0)
    .forEach((s) => {
      typeof t[s] > 'u'
        ? (t[s] = e[s])
        : K(e[s]) && K(t[s]) && Object.keys(e[s]).length > 0
          ? e[s].__swiper__
            ? (t[s] = e[s])
            : Q(t[s], e[s])
          : (t[s] = e[s])
    })
}
function Fe(t) {
  return t === void 0 && (t = {}), t.navigation && typeof t.navigation.nextEl > 'u' && typeof t.navigation.prevEl > 'u'
}
function Ve(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > 'u'
}
function Re(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > 'u'
}
function He(t) {
  t === void 0 && (t = '')
  const e = t
      .split(' ')
      .map((s) => s.trim())
      .filter((s) => !!s),
    i = []
  return (
    e.forEach((s) => {
      i.indexOf(s) < 0 && i.push(s)
    }),
    i.join(' ')
  )
}
function Pi(t) {
  return t === void 0 && (t = ''), t ? (t.includes('swiper-wrapper') ? t : `swiper-wrapper ${t}`) : 'swiper-wrapper'
}
function Mi(t) {
  let { swiper: e, slides: i, passedParams: s, changedParams: r, nextEl: n, prevEl: o, scrollbarEl: l, paginationEl: a } = t
  const f = r.filter((C) => C !== 'children' && C !== 'direction' && C !== 'wrapperClass'),
    { params: c, pagination: u, navigation: v, scrollbar: h, virtual: m, thumbs: w } = e
  let x, d, p, g, S, y, I, N
  r.includes('thumbs') && s.thumbs && s.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (x = !0),
    r.includes('controller') && s.controller && s.controller.control && c.controller && !c.controller.control && (d = !0),
    r.includes('pagination') && s.pagination && (s.pagination.el || a) && (c.pagination || c.pagination === !1) && u && !u.el && (p = !0),
    r.includes('scrollbar') && s.scrollbar && (s.scrollbar.el || l) && (c.scrollbar || c.scrollbar === !1) && h && !h.el && (g = !0),
    r.includes('navigation') &&
      s.navigation &&
      (s.navigation.prevEl || o) &&
      (s.navigation.nextEl || n) &&
      (c.navigation || c.navigation === !1) &&
      v &&
      !v.prevEl &&
      !v.nextEl &&
      (S = !0)
  const M = (C) => {
    e[C] &&
      (e[C].destroy(),
      C === 'navigation'
        ? (e.isElement && (e[C].prevEl.remove(), e[C].nextEl.remove()),
          (c[C].prevEl = void 0),
          (c[C].nextEl = void 0),
          (e[C].prevEl = void 0),
          (e[C].nextEl = void 0))
        : (e.isElement && e[C].el.remove(), (c[C].el = void 0), (e[C].el = void 0)))
  }
  r.includes('loop') && e.isElement && (c.loop && !s.loop ? (y = !0) : !c.loop && s.loop ? (I = !0) : (N = !0)),
    f.forEach((C) => {
      if (K(c[C]) && K(s[C]))
        Object.assign(c[C], s[C]), (C === 'navigation' || C === 'pagination' || C === 'scrollbar') && 'enabled' in s[C] && !s[C].enabled && M(C)
      else {
        const b = s[C]
        ;(b === !0 || b === !1) && (C === 'navigation' || C === 'pagination' || C === 'scrollbar') ? b === !1 && M(C) : (c[C] = s[C])
      }
    }),
    f.includes('controller') &&
      !d &&
      e.controller &&
      e.controller.control &&
      c.controller &&
      c.controller.control &&
      (e.controller.control = c.controller.control),
    r.includes('children') && i && m && c.virtual.enabled
      ? ((m.slides = i), m.update(!0))
      : r.includes('virtual') && m && c.virtual.enabled && (i && (m.slides = i), m.update(!0)),
    r.includes('children') && i && c.loop && (N = !0),
    x && w.init() && w.update(!0),
    d && (e.controller.control = c.controller.control),
    p &&
      (e.isElement &&
        (!a || typeof a == 'string') &&
        ((a = document.createElement('div')), a.classList.add('swiper-pagination'), a.part.add('pagination'), e.el.appendChild(a)),
      a && (c.pagination.el = a),
      u.init(),
      u.render(),
      u.update()),
    g &&
      (e.isElement &&
        (!l || typeof l == 'string') &&
        ((l = document.createElement('div')), l.classList.add('swiper-scrollbar'), l.part.add('scrollbar'), e.el.appendChild(l)),
      l && (c.scrollbar.el = l),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    S &&
      (e.isElement &&
        ((!n || typeof n == 'string') &&
          ((n = document.createElement('div')),
          n.classList.add('swiper-button-next'),
          (n.innerHTML = e.hostEl.constructor.nextButtonSvg),
          n.part.add('button-next'),
          e.el.appendChild(n)),
        (!o || typeof o == 'string') &&
          ((o = document.createElement('div')),
          o.classList.add('swiper-button-prev'),
          (o.innerHTML = e.hostEl.constructor.prevButtonSvg),
          o.part.add('button-prev'),
          e.el.appendChild(o))),
      n && (c.navigation.nextEl = n),
      o && (c.navigation.prevEl = o),
      v.init(),
      v.update()),
    r.includes('allowSlideNext') && (e.allowSlideNext = s.allowSlideNext),
    r.includes('allowSlidePrev') && (e.allowSlidePrev = s.allowSlidePrev),
    r.includes('direction') && e.changeDirection(s.direction, !1),
    (y || N) && e.loopDestroy(),
    (I || N) && e.loopCreate(),
    e.update()
}
function Li(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = !0)
  const i = { on: {} },
    s = {},
    r = {}
  Q(i, xe), (i._emitClasses = !0), (i.init = !1)
  const n = {},
    o = ke.map((a) => a.replace(/_/, '')),
    l = Object.assign({}, t)
  return (
    Object.keys(l).forEach((a) => {
      typeof t[a] > 'u' ||
        (o.indexOf(a) >= 0
          ? K(t[a])
            ? ((i[a] = {}), (r[a] = {}), Q(i[a], t[a]), Q(r[a], t[a]))
            : ((i[a] = t[a]), (r[a] = t[a]))
          : a.search(/on[A-Z]/) === 0 && typeof t[a] == 'function'
            ? e
              ? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
              : (i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
            : (n[a] = t[a]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((a) => {
      i[a] === !0 && (i[a] = {}), i[a] === !1 && delete i[a]
    }),
    { params: i, passedParams: r, rest: n, events: s }
  )
}
function Ii(t, e) {
  let { el: i, nextEl: s, prevEl: r, paginationEl: n, scrollbarEl: o, swiper: l } = t
  Fe(e) &&
    s &&
    r &&
    ((l.params.navigation.nextEl = s),
    (l.originalParams.navigation.nextEl = s),
    (l.params.navigation.prevEl = r),
    (l.originalParams.navigation.prevEl = r)),
    Ve(e) && n && ((l.params.pagination.el = n), (l.originalParams.pagination.el = n)),
    Re(e) && o && ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(i)
}
function Oi(t, e, i, s, r) {
  const n = []
  if (!e) return n
  const o = (a) => {
    n.indexOf(a) < 0 && n.push(a)
  }
  if (i && s) {
    const a = s.map(r),
      f = i.map(r)
    a.join('') !== f.join('') && o('children'), s.length !== i.length && o('children')
  }
  return (
    ke
      .filter((a) => a[0] === '_')
      .map((a) => a.replace(/_/, ''))
      .forEach((a) => {
        if (a in t && a in e)
          if (K(t[a]) && K(e[a])) {
            const f = Object.keys(t[a]),
              c = Object.keys(e[a])
            f.length !== c.length
              ? o(a)
              : (f.forEach((u) => {
                  t[a][u] !== e[a][u] && o(a)
                }),
                c.forEach((u) => {
                  t[a][u] !== e[a][u] && o(a)
                }))
          } else t[a] !== e[a] && o(a)
      }),
    n
  )
}
const _i = (t) => {
  !t ||
    t.destroyed ||
    !t.params.virtual ||
    (t.params.virtual && !t.params.virtual.enabled) ||
    (t.updateSlides(),
    t.updateProgress(),
    t.updateSlidesClasses(),
    t.parallax && t.params.parallax && t.params.parallax.enabled && t.parallax.setTranslate())
}
function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e]
            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s])
          }
          return t
        }),
    ce.apply(this, arguments)
  )
}
function We(t) {
  return t.type && t.type.displayName && t.type.displayName.includes('SwiperSlide')
}
function qe(t) {
  const e = []
  return (
    j.Children.toArray(t).forEach((i) => {
      We(i) ? e.push(i) : i.props && i.props.children && qe(i.props.children).forEach((s) => e.push(s))
    }),
    e
  )
}
function Ai(t) {
  const e = [],
    i = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] }
  return (
    j.Children.toArray(t).forEach((s) => {
      if (We(s)) e.push(s)
      else if (s.props && s.props.slot && i[s.props.slot]) i[s.props.slot].push(s)
      else if (s.props && s.props.children) {
        const r = qe(s.props.children)
        r.length > 0 ? r.forEach((n) => e.push(n)) : i['container-end'].push(s)
      } else i['container-end'].push(s)
    }),
    { slides: e, slots: i }
  )
}
function zi(t, e, i) {
  if (!i) return null
  const s = (c) => {
      let u = c
      return c < 0 ? (u = e.length + c) : u >= e.length && (u = u - e.length), u
    },
    r = t.isHorizontal() ? { [t.rtlTranslate ? 'right' : 'left']: `${i.offset}px` } : { top: `${i.offset}px` },
    { from: n, to: o } = i,
    l = t.params.loop ? -e.length : 0,
    a = t.params.loop ? e.length * 2 : e.length,
    f = []
  for (let c = l; c < a; c += 1) c >= n && c <= o && f.push(e[s(c)])
  return f.map((c, u) => j.cloneElement(c, { swiper: t, style: r, key: c.props.virtualIndex || c.key || `slide-${u}` }))
}
function ee(t, e) {
  return typeof window > 'u' ? D.useEffect(t, e) : D.useLayoutEffect(t, e)
}
const Ae = D.createContext(null),
  Di = D.createContext(null),
  Ye = D.forwardRef(function (t, e) {
    let { className: i, tag: s = 'div', wrapperTag: r = 'div', children: n, onSwiper: o, ...l } = t === void 0 ? {} : t,
      a = !1
    const [f, c] = D.useState('swiper'),
      [u, v] = D.useState(null),
      [h, m] = D.useState(!1),
      w = D.useRef(!1),
      x = D.useRef(null),
      d = D.useRef(null),
      p = D.useRef(null),
      g = D.useRef(null),
      S = D.useRef(null),
      y = D.useRef(null),
      I = D.useRef(null),
      N = D.useRef(null),
      { params: M, passedParams: C, rest: b, events: L } = Li(l),
      { slides: E, slots: T } = Ai(n),
      O = () => {
        m(!h)
      }
    Object.assign(M.on, {
      _containerClasses(A, G) {
        c(G)
      },
    })
    const z = () => {
      Object.assign(M.on, L), (a = !0)
      const A = { ...M }
      if ((delete A.wrapperClass, (d.current = new Te(A)), d.current.virtual && d.current.params.virtual.enabled)) {
        d.current.virtual.slides = E
        const G = { cache: !1, slides: E, renderExternal: v, renderExternalUpdate: !1 }
        Q(d.current.params.virtual, G), Q(d.current.originalParams.virtual, G)
      }
    }
    x.current || z(), d.current && d.current.on('_beforeBreakpoint', O)
    const F = () => {
        a ||
          !L ||
          !d.current ||
          Object.keys(L).forEach((A) => {
            d.current.on(A, L[A])
          })
      },
      Z = () => {
        !L ||
          !d.current ||
          Object.keys(L).forEach((A) => {
            d.current.off(A, L[A])
          })
      }
    D.useEffect(() => () => {
      d.current && d.current.off('_beforeBreakpoint', O)
    }),
      D.useEffect(() => {
        !w.current && d.current && (d.current.emitSlidesClasses(), (w.current = !0))
      }),
      ee(() => {
        if ((e && (e.current = x.current), !!x.current))
          return (
            d.current.destroyed && z(),
            Ii({ el: x.current, nextEl: S.current, prevEl: y.current, paginationEl: I.current, scrollbarEl: N.current, swiper: d.current }, M),
            o && !d.current.destroyed && o(d.current),
            () => {
              d.current && !d.current.destroyed && d.current.destroy(!0, !1)
            }
          )
      }, []),
      ee(() => {
        F()
        const A = Oi(C, p.current, E, g.current, (G) => G.key)
        return (
          (p.current = C),
          (g.current = E),
          A.length &&
            d.current &&
            !d.current.destroyed &&
            Mi({
              swiper: d.current,
              slides: E,
              passedParams: C,
              changedParams: A,
              nextEl: S.current,
              prevEl: y.current,
              scrollbarEl: N.current,
              paginationEl: I.current,
            }),
          () => {
            Z()
          }
        )
      }),
      ee(() => {
        _i(d.current)
      }, [u])
    function _() {
      return M.virtual ? zi(d.current, E, u) : E.map((A, G) => j.cloneElement(A, { swiper: d.current, swiperSlideIndex: G }))
    }
    return j.createElement(
      s,
      ce({ ref: x, className: He(`${f}${i ? ` ${i}` : ''}`) }, b),
      j.createElement(
        Di.Provider,
        { value: d.current },
        T['container-start'],
        j.createElement(r, { className: Pi(M.wrapperClass) }, T['wrapper-start'], _(), T['wrapper-end']),
        Fe(M) &&
          j.createElement(
            j.Fragment,
            null,
            j.createElement('div', { ref: y, className: 'swiper-button-prev' }),
            j.createElement('div', { ref: S, className: 'swiper-button-next' }),
          ),
        Re(M) && j.createElement('div', { ref: N, className: 'swiper-scrollbar' }),
        Ve(M) && j.createElement('div', { ref: I, className: 'swiper-pagination' }),
        T['container-end'],
      ),
    )
  })
Ye.displayName = 'Swiper'
const Xe = D.forwardRef(function (t, e) {
  let {
    tag: i = 'div',
    children: s,
    className: r = '',
    swiper: n,
    zoom: o,
    lazy: l,
    virtualIndex: a,
    swiperSlideIndex: f,
    ...c
  } = t === void 0 ? {} : t
  const u = D.useRef(null),
    [v, h] = D.useState('swiper-slide'),
    [m, w] = D.useState(!1)
  function x(S, y, I) {
    y === u.current && h(I)
  }
  ee(() => {
    if ((typeof f < 'u' && (u.current.swiperSlideIndex = f), e && (e.current = u.current), !(!u.current || !n))) {
      if (n.destroyed) {
        v !== 'swiper-slide' && h('swiper-slide')
        return
      }
      return (
        n.on('_slideClass', x),
        () => {
          n && n.off('_slideClass', x)
        }
      )
    }
  }),
    ee(() => {
      n && u.current && !n.destroyed && h(n.getSlideClasses(u.current))
    }, [n])
  const d = {
      isActive: v.indexOf('swiper-slide-active') >= 0,
      isVisible: v.indexOf('swiper-slide-visible') >= 0,
      isPrev: v.indexOf('swiper-slide-prev') >= 0,
      isNext: v.indexOf('swiper-slide-next') >= 0,
    },
    p = () => (typeof s == 'function' ? s(d) : s),
    g = () => {
      w(!0)
    }
  return j.createElement(
    i,
    ce({ ref: u, className: He(`${v}${r ? ` ${r}` : ''}`), 'data-swiper-slide-index': a, onLoad: g }, c),
    o &&
      j.createElement(
        Ae.Provider,
        { value: d },
        j.createElement(
          'div',
          { className: 'swiper-zoom-container', 'data-swiper-zoom': typeof o == 'number' ? o : void 0 },
          p(),
          l && !m && j.createElement('div', { className: 'swiper-lazy-preloader' }),
        ),
      ),
    !o && j.createElement(Ae.Provider, { value: d }, p(), l && !m && j.createElement('div', { className: 'swiper-lazy-preloader' })),
  )
})
Xe.displayName = 'SwiperSlide'
function Ue(t, e, i, s) {
  return (
    t.params.createElements &&
      Object.keys(s).forEach((r) => {
        if (!i[r] && i.auto === !0) {
          let n = R(t.el, `.${s[r]}`)[0]
          n || ((n = oe('div', s[r])), (n.className = s[r]), t.el.append(n)), (i[r] = n), (e[r] = n)
        }
      }),
    i
  )
}
function Gi(t) {
  let { swiper: e, extendParams: i, on: s, emit: r } = t
  i({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled',
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null })
  function n(m) {
    let w
    return m && typeof m == 'string' && e.isElement && ((w = e.el.querySelector(m)), w)
      ? w
      : (m &&
          (typeof m == 'string' && (w = [...document.querySelectorAll(m)]),
          e.params.uniqueNavElements && typeof m == 'string' && w && w.length > 1 && e.el.querySelectorAll(m).length === 1
            ? (w = e.el.querySelector(m))
            : w && w.length === 1 && (w = w[0])),
        m && !w ? m : w)
  }
  function o(m, w) {
    const x = e.params.navigation
    ;(m = B(m)),
      m.forEach((d) => {
        d &&
          (d.classList[w ? 'add' : 'remove'](...x.disabledClass.split(' ')),
          d.tagName === 'BUTTON' && (d.disabled = w),
          e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? 'add' : 'remove'](x.lockClass))
      })
  }
  function l() {
    const { nextEl: m, prevEl: w } = e.navigation
    if (e.params.loop) {
      o(w, !1), o(m, !1)
      return
    }
    o(w, e.isBeginning && !e.params.rewind), o(m, e.isEnd && !e.params.rewind)
  }
  function a(m) {
    m.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), r('navigationPrev'))
  }
  function f(m) {
    m.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), r('navigationNext'))
  }
  function c() {
    const m = e.params.navigation
    if (
      ((e.params.navigation = Ue(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
      })),
      !(m.nextEl || m.prevEl))
    )
      return
    let w = n(m.nextEl),
      x = n(m.prevEl)
    Object.assign(e.navigation, { nextEl: w, prevEl: x }), (w = B(w)), (x = B(x))
    const d = (p, g) => {
      p && p.addEventListener('click', g === 'next' ? f : a), !e.enabled && p && p.classList.add(...m.lockClass.split(' '))
    }
    w.forEach((p) => d(p, 'next')), x.forEach((p) => d(p, 'prev'))
  }
  function u() {
    let { nextEl: m, prevEl: w } = e.navigation
    ;(m = B(m)), (w = B(w))
    const x = (d, p) => {
      d.removeEventListener('click', p === 'next' ? f : a), d.classList.remove(...e.params.navigation.disabledClass.split(' '))
    }
    m.forEach((d) => x(d, 'next')), w.forEach((d) => x(d, 'prev'))
  }
  s('init', () => {
    e.params.navigation.enabled === !1 ? h() : (c(), l())
  }),
    s('toEdge fromEdge lock unlock', () => {
      l()
    }),
    s('destroy', () => {
      u()
    }),
    s('enable disable', () => {
      let { nextEl: m, prevEl: w } = e.navigation
      if (((m = B(m)), (w = B(w)), e.enabled)) {
        l()
        return
      }
      ;[...m, ...w].filter((x) => !!x).forEach((x) => x.classList.add(e.params.navigation.lockClass))
    }),
    s('click', (m, w) => {
      let { nextEl: x, prevEl: d } = e.navigation
      ;(x = B(x)), (d = B(d))
      const p = w.target
      let g = d.includes(p) || x.includes(p)
      if (e.isElement && !g) {
        const S = w.path || (w.composedPath && w.composedPath())
        S && (g = S.find((y) => x.includes(y) || d.includes(y)))
      }
      if (e.params.navigation.hideOnClick && !g) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === p || e.pagination.el.contains(p))) return
        let S
        x.length
          ? (S = x[0].classList.contains(e.params.navigation.hiddenClass))
          : d.length && (S = d[0].classList.contains(e.params.navigation.hiddenClass)),
          r(S === !0 ? 'navigationShow' : 'navigationHide'),
          [...x, ...d].filter((y) => !!y).forEach((y) => y.classList.toggle(e.params.navigation.hiddenClass))
      }
    })
  const v = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(' ')), c(), l()
    },
    h = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(' ')), u()
    }
  Object.assign(e.navigation, { enable: v, disable: h, update: l, init: c, destroy: u })
}
function J(t) {
  return (
    t === void 0 && (t = ''),
    `.${t
      .trim()
      .replace(/([\.:!+\/])/g, '\\$1')
      .replace(/ /g, '.')}`
  )
}
function Ni(t) {
  let { swiper: e, extendParams: i, on: s, emit: r } = t
  const n = 'swiper-pagination'
  i({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: 'bullets',
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (d) => d,
      formatFractionTotal: (d) => d,
      bulletClass: `${n}-bullet`,
      bulletActiveClass: `${n}-bullet-active`,
      modifierClass: `${n}-`,
      currentClass: `${n}-current`,
      totalClass: `${n}-total`,
      hiddenClass: `${n}-hidden`,
      progressbarFillClass: `${n}-progressbar-fill`,
      progressbarOppositeClass: `${n}-progressbar-opposite`,
      clickableClass: `${n}-clickable`,
      lockClass: `${n}-lock`,
      horizontalClass: `${n}-horizontal`,
      verticalClass: `${n}-vertical`,
      paginationDisabledClass: `${n}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] })
  let o,
    l = 0
  function a() {
    return !e.params.pagination.el || !e.pagination.el || (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
  }
  function f(d, p) {
    const { bulletActiveClass: g } = e.params.pagination
    d &&
      ((d = d[`${p === 'prev' ? 'previous' : 'next'}ElementSibling`]),
      d && (d.classList.add(`${g}-${p}`), (d = d[`${p === 'prev' ? 'previous' : 'next'}ElementSibling`]), d && d.classList.add(`${g}-${p}-${p}`)))
  }
  function c(d) {
    const p = d.target.closest(J(e.params.pagination.bulletClass))
    if (!p) return
    d.preventDefault()
    const g = de(p) * e.params.slidesPerGroup
    if (e.params.loop) {
      if (e.realIndex === g) return
      e.slideToLoop(g)
    } else e.slideTo(g)
  }
  function u() {
    const d = e.rtl,
      p = e.params.pagination
    if (a()) return
    let g = e.pagination.el
    g = B(g)
    let S, y
    const I = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
      N = e.params.loop ? Math.ceil(I / e.params.slidesPerGroup) : e.snapGrid.length
    if (
      (e.params.loop
        ? ((y = e.previousRealIndex || 0), (S = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex))
        : typeof e.snapIndex < 'u'
          ? ((S = e.snapIndex), (y = e.previousSnapIndex))
          : ((y = e.previousIndex || 0), (S = e.activeIndex || 0)),
      p.type === 'bullets' && e.pagination.bullets && e.pagination.bullets.length > 0)
    ) {
      const M = e.pagination.bullets
      let C, b, L
      if (
        (p.dynamicBullets &&
          ((o = Se(M[0], e.isHorizontal() ? 'width' : 'height')),
          g.forEach((E) => {
            E.style[e.isHorizontal() ? 'width' : 'height'] = `${o * (p.dynamicMainBullets + 4)}px`
          }),
          p.dynamicMainBullets > 1 &&
            y !== void 0 &&
            ((l += S - (y || 0)), l > p.dynamicMainBullets - 1 ? (l = p.dynamicMainBullets - 1) : l < 0 && (l = 0)),
          (C = Math.max(S - l, 0)),
          (b = C + (Math.min(M.length, p.dynamicMainBullets) - 1)),
          (L = (b + C) / 2)),
        M.forEach((E) => {
          const T = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map((O) => `${p.bulletActiveClass}${O}`)]
            .map((O) => (typeof O == 'string' && O.includes(' ') ? O.split(' ') : O))
            .flat()
          E.classList.remove(...T)
        }),
        g.length > 1)
      )
        M.forEach((E) => {
          const T = de(E)
          T === S ? E.classList.add(...p.bulletActiveClass.split(' ')) : e.isElement && E.setAttribute('part', 'bullet'),
            p.dynamicBullets &&
              (T >= C && T <= b && E.classList.add(...`${p.bulletActiveClass}-main`.split(' ')), T === C && f(E, 'prev'), T === b && f(E, 'next'))
        })
      else {
        const E = M[S]
        if (
          (E && E.classList.add(...p.bulletActiveClass.split(' ')),
          e.isElement &&
            M.forEach((T, O) => {
              T.setAttribute('part', O === S ? 'bullet-active' : 'bullet')
            }),
          p.dynamicBullets)
        ) {
          const T = M[C],
            O = M[b]
          for (let z = C; z <= b; z += 1) M[z] && M[z].classList.add(...`${p.bulletActiveClass}-main`.split(' '))
          f(T, 'prev'), f(O, 'next')
        }
      }
      if (p.dynamicBullets) {
        const E = Math.min(M.length, p.dynamicMainBullets + 4),
          T = (o * E - o) / 2 - L * o,
          O = d ? 'right' : 'left'
        M.forEach((z) => {
          z.style[e.isHorizontal() ? O : 'top'] = `${T}px`
        })
      }
    }
    g.forEach((M, C) => {
      if (
        (p.type === 'fraction' &&
          (M.querySelectorAll(J(p.currentClass)).forEach((b) => {
            b.textContent = p.formatFractionCurrent(S + 1)
          }),
          M.querySelectorAll(J(p.totalClass)).forEach((b) => {
            b.textContent = p.formatFractionTotal(N)
          })),
        p.type === 'progressbar')
      ) {
        let b
        p.progressbarOpposite ? (b = e.isHorizontal() ? 'vertical' : 'horizontal') : (b = e.isHorizontal() ? 'horizontal' : 'vertical')
        const L = (S + 1) / N
        let E = 1,
          T = 1
        b === 'horizontal' ? (E = L) : (T = L),
          M.querySelectorAll(J(p.progressbarFillClass)).forEach((O) => {
            ;(O.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${T})`), (O.style.transitionDuration = `${e.params.speed}ms`)
          })
      }
      p.type === 'custom' && p.renderCustom
        ? ((M.innerHTML = p.renderCustom(e, S + 1, N)), C === 0 && r('paginationRender', M))
        : (C === 0 && r('paginationRender', M), r('paginationUpdate', M)),
        e.params.watchOverflow && e.enabled && M.classList[e.isLocked ? 'add' : 'remove'](p.lockClass)
    })
  }
  function v() {
    const d = e.params.pagination
    if (a()) return
    const p =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length
    let g = e.pagination.el
    g = B(g)
    let S = ''
    if (d.type === 'bullets') {
      let y = e.params.loop ? Math.ceil(p / e.params.slidesPerGroup) : e.snapGrid.length
      e.params.freeMode && e.params.freeMode.enabled && y > p && (y = p)
      for (let I = 0; I < y; I += 1)
        d.renderBullet
          ? (S += d.renderBullet.call(e, I, d.bulletClass))
          : (S += `<${d.bulletElement} ${e.isElement ? 'part="bullet"' : ''} class="${d.bulletClass}"></${d.bulletElement}>`)
    }
    d.type === 'fraction' &&
      (d.renderFraction
        ? (S = d.renderFraction.call(e, d.currentClass, d.totalClass))
        : (S = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`)),
      d.type === 'progressbar' &&
        (d.renderProgressbar ? (S = d.renderProgressbar.call(e, d.progressbarFillClass)) : (S = `<span class="${d.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      g.forEach((y) => {
        d.type !== 'custom' && (y.innerHTML = S || ''), d.type === 'bullets' && e.pagination.bullets.push(...y.querySelectorAll(J(d.bulletClass)))
      }),
      d.type !== 'custom' && r('paginationRender', g[0])
  }
  function h() {
    e.params.pagination = Ue(e, e.originalParams.pagination, e.params.pagination, { el: 'swiper-pagination' })
    const d = e.params.pagination
    if (!d.el) return
    let p
    typeof d.el == 'string' && e.isElement && (p = e.el.querySelector(d.el)),
      !p && typeof d.el == 'string' && (p = [...document.querySelectorAll(d.el)]),
      p || (p = d.el),
      !(!p || p.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof d.el == 'string' &&
          Array.isArray(p) &&
          p.length > 1 &&
          ((p = [...e.el.querySelectorAll(d.el)]), p.length > 1 && (p = p.filter((g) => Ge(g, '.swiper')[0] === e.el)[0])),
        Array.isArray(p) && p.length === 1 && (p = p[0]),
        Object.assign(e.pagination, { el: p }),
        (p = B(p)),
        p.forEach((g) => {
          d.type === 'bullets' && d.clickable && g.classList.add(...(d.clickableClass || '').split(' ')),
            g.classList.add(d.modifierClass + d.type),
            g.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
            d.type === 'bullets' &&
              d.dynamicBullets &&
              (g.classList.add(`${d.modifierClass}${d.type}-dynamic`), (l = 0), d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)),
            d.type === 'progressbar' && d.progressbarOpposite && g.classList.add(d.progressbarOppositeClass),
            d.clickable && g.addEventListener('click', c),
            e.enabled || g.classList.add(d.lockClass)
        }))
  }
  function m() {
    const d = e.params.pagination
    if (a()) return
    let p = e.pagination.el
    p &&
      ((p = B(p)),
      p.forEach((g) => {
        g.classList.remove(d.hiddenClass),
          g.classList.remove(d.modifierClass + d.type),
          g.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass),
          d.clickable && (g.classList.remove(...(d.clickableClass || '').split(' ')), g.removeEventListener('click', c))
      })),
      e.pagination.bullets && e.pagination.bullets.forEach((g) => g.classList.remove(...d.bulletActiveClass.split(' ')))
  }
  s('changeDirection', () => {
    if (!e.pagination || !e.pagination.el) return
    const d = e.params.pagination
    let { el: p } = e.pagination
    ;(p = B(p)),
      p.forEach((g) => {
        g.classList.remove(d.horizontalClass, d.verticalClass), g.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass)
      })
  }),
    s('init', () => {
      e.params.pagination.enabled === !1 ? x() : (h(), v(), u())
    }),
    s('activeIndexChange', () => {
      typeof e.snapIndex > 'u' && u()
    }),
    s('snapIndexChange', () => {
      u()
    }),
    s('snapGridLengthChange', () => {
      v(), u()
    }),
    s('destroy', () => {
      m()
    }),
    s('enable disable', () => {
      let { el: d } = e.pagination
      d && ((d = B(d)), d.forEach((p) => p.classList[e.enabled ? 'remove' : 'add'](e.params.pagination.lockClass)))
    }),
    s('lock unlock', () => {
      u()
    }),
    s('click', (d, p) => {
      const g = p.target,
        S = B(e.pagination.el)
      if (e.params.pagination.el && e.params.pagination.hideOnClick && S && S.length > 0 && !g.classList.contains(e.params.pagination.bulletClass)) {
        if (e.navigation && ((e.navigation.nextEl && g === e.navigation.nextEl) || (e.navigation.prevEl && g === e.navigation.prevEl))) return
        const y = S[0].classList.contains(e.params.pagination.hiddenClass)
        r(y === !0 ? 'paginationShow' : 'paginationHide'), S.forEach((I) => I.classList.toggle(e.params.pagination.hiddenClass))
      }
    })
  const w = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass)
      let { el: d } = e.pagination
      d && ((d = B(d)), d.forEach((p) => p.classList.remove(e.params.pagination.paginationDisabledClass))), h(), v(), u()
    },
    x = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass)
      let { el: d } = e.pagination
      d && ((d = B(d)), d.forEach((p) => p.classList.add(e.params.pagination.paginationDisabledClass))), m()
    }
  Object.assign(e.pagination, { enable: w, disable: x, render: v, update: u, init: h, destroy: m })
}
function ji(t) {
  let { swiper: e, extendParams: i, on: s, emit: r, params: n } = t
  ;(e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    i({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    })
  let o,
    l,
    a = n && n.autoplay ? n.autoplay.delay : 3e3,
    f = n && n.autoplay ? n.autoplay.delay : 3e3,
    c,
    u = new Date().getTime(),
    v,
    h,
    m,
    w,
    x,
    d,
    p
  function g(_) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (_.target === e.wrapperEl && (e.wrapperEl.removeEventListener('transitionend', g), !(p || (_.detail && _.detail.bySwiperTouchMove)) && b()))
  }
  const S = () => {
      if (e.destroyed || !e.autoplay.running) return
      e.autoplay.paused ? (v = !0) : v && ((f = c), (v = !1))
      const _ = e.autoplay.paused ? c : u + f - new Date().getTime()
      ;(e.autoplay.timeLeft = _),
        r('autoplayTimeLeft', _, _ / a),
        (l = requestAnimationFrame(() => {
          S()
        }))
    },
    y = () => {
      let _
      return (
        e.virtual && e.params.virtual.enabled
          ? (_ = e.slides.filter((G) => G.classList.contains('swiper-slide-active'))[0])
          : (_ = e.slides[e.activeIndex]),
        _ ? parseInt(_.getAttribute('data-swiper-autoplay'), 10) : void 0
      )
    },
    I = (_) => {
      if (e.destroyed || !e.autoplay.running) return
      cancelAnimationFrame(l), S()
      let A = typeof _ > 'u' ? e.params.autoplay.delay : _
      ;(a = e.params.autoplay.delay), (f = e.params.autoplay.delay)
      const G = y()
      !Number.isNaN(G) && G > 0 && typeof _ > 'u' && ((A = G), (a = G), (f = G)), (c = A)
      const U = e.params.speed,
        ie = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(U, !0, !0), r('autoplay'))
                : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, U, !0, !0), r('autoplay'))
              : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(U, !0, !0), r('autoplay'))
                : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, U, !0, !0), r('autoplay')),
            e.params.cssMode &&
              ((u = new Date().getTime()),
              requestAnimationFrame(() => {
                I()
              })))
        }
      return (
        A > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              ie()
            }, A)))
          : requestAnimationFrame(() => {
              ie()
            }),
        A
      )
    },
    N = () => {
      ;(u = new Date().getTime()), (e.autoplay.running = !0), I(), r('autoplayStart')
    },
    M = () => {
      ;(e.autoplay.running = !1), clearTimeout(o), cancelAnimationFrame(l), r('autoplayStop')
    },
    C = (_, A) => {
      if (e.destroyed || !e.autoplay.running) return
      clearTimeout(o), _ || (d = !0)
      const G = () => {
        r('autoplayPause'), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener('transitionend', g) : b()
      }
      if (((e.autoplay.paused = !0), A)) {
        x && (c = e.params.autoplay.delay), (x = !1), G()
        return
      }
      ;(c = (c || e.params.autoplay.delay) - (new Date().getTime() - u)), !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), G())
    },
    b = () => {
      ;(e.isEnd && c < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((u = new Date().getTime()), d ? ((d = !1), I(c)) : I(), (e.autoplay.paused = !1), r('autoplayResume'))
    },
    L = () => {
      if (e.destroyed || !e.autoplay.running) return
      const _ = q()
      _.visibilityState === 'hidden' && ((d = !0), C(!0)), _.visibilityState === 'visible' && b()
    },
    E = (_) => {
      _.pointerType === 'mouse' && ((d = !0), (p = !0), !(e.animating || e.autoplay.paused) && C(!0))
    },
    T = (_) => {
      _.pointerType === 'mouse' && ((p = !1), e.autoplay.paused && b())
    },
    O = () => {
      e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener('pointerenter', E), e.el.addEventListener('pointerleave', T))
    },
    z = () => {
      e.el && typeof e.el != 'string' && (e.el.removeEventListener('pointerenter', E), e.el.removeEventListener('pointerleave', T))
    },
    F = () => {
      q().addEventListener('visibilitychange', L)
    },
    Z = () => {
      q().removeEventListener('visibilitychange', L)
    }
  s('init', () => {
    e.params.autoplay.enabled && (O(), F(), N())
  }),
    s('destroy', () => {
      z(), Z(), e.autoplay.running && M()
    }),
    s('_freeModeStaticRelease', () => {
      ;(m || d) && b()
    }),
    s('_freeModeNoMomentumRelease', () => {
      e.params.autoplay.disableOnInteraction ? M() : C(!0, !0)
    }),
    s('beforeTransitionStart', (_, A, G) => {
      e.destroyed || !e.autoplay.running || (G || !e.params.autoplay.disableOnInteraction ? C(!0, !0) : M())
    }),
    s('sliderFirstMove', () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          M()
          return
        }
        ;(h = !0),
          (m = !1),
          (d = !1),
          (w = setTimeout(() => {
            ;(d = !0), (m = !0), C(!0)
          }, 200))
      }
    }),
    s('touchEnd', () => {
      if (!(e.destroyed || !e.autoplay.running || !h)) {
        if ((clearTimeout(w), clearTimeout(o), e.params.autoplay.disableOnInteraction)) {
          ;(m = !1), (h = !1)
          return
        }
        m && e.params.cssMode && b(), (m = !1), (h = !1)
      }
    }),
    s('slideChange', () => {
      e.destroyed || !e.autoplay.running || (x = !0)
    }),
    Object.assign(e.autoplay, { start: N, stop: M, pause: C, resume: b })
}
const Bi = '_banner_q7ax7_1',
  $i = '_top_q7ax7_5',
  ki = '_filter_q7ax7_59',
  Fi = '_bottom_q7ax7_70',
  Vi = '_divider_q7ax7_87',
  Y = { banner: Bi, top: $i, filter: ki, bottom: Fi, divider: Vi }
function Ri() {
  const { data: t } = Ke(),
    [e, i] = D.useState('')
  return P.jsxs('section', {
    className: Y.banner,
    children: [
      P.jsxs('div', {
        className: Y.top,
        children: [
          P.jsx(Ye, {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: !0,
            pagination: { clickable: !0 },
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            onSlideChange: (s) => {
              t != null && t.data[s.realIndex] && i(t == null ? void 0 : t.data[s.realIndex].pic)
            },
            navigation: !0,
            modules: [Ni, Gi, ji],
            children:
              t == null
                ? void 0
                : t.data.map((s) =>
                    P.jsx(
                      Xe,
                      {
                        children: P.jsx(te, {
                          to: s.url
                            .replace('http://www.kuwo.cn/album_detail/', './album/')
                            .replace('http://www.kuwo.cn/playlist_detail/', './play/')
                            .replace('https://www.kuwo.cn/play_detail/', './song/')
                            .replace('https://www.kuwo.cn/mvplay/', './mv/'),
                          children: P.jsx('img', { src: s.pic, referrerPolicy: 'no-referrer', alt: '' }),
                        }),
                      },
                      s.id,
                    ),
                  ),
          }),
          P.jsx('div', { className: Y.filter, children: P.jsx('img', { src: e, referrerPolicy: 'no-referrer', alt: '' }) }),
        ],
      }),
      P.jsx('div', {
        className: Y.bottom,
        children: P.jsxs('ul', {
          children: [
            P.jsxs('li', { children: [P.jsx(Qe, {}), P.jsx('a', { href: '/', children: '下载机车版' })] }),
            P.jsx('li', { className: Y.divider }),
            P.jsxs('li', { children: [P.jsx(at, {}), P.jsx('a', { href: '/', children: '下载 Android 版' })] }),
            P.jsx('li', { className: Y.divider }),
            P.jsxs('li', { children: [P.jsx(Ze, {}), P.jsx('a', { href: '/', children: '下载 iPhone 版' })] }),
            P.jsx('li', { className: Y.divider }),
            P.jsxs('li', { children: [P.jsx(lt, {}), P.jsx('a', { href: '/', children: '下载 PC 版' })] }),
            P.jsx('li', { className: Y.divider }),
            P.jsxs('li', { children: [P.jsx(Je, {}), P.jsx('a', { href: '/', children: '下载其他版本' })] }),
          ],
        }),
      }),
    ],
  })
}
const Hi = '_recommend_1jkxd_1',
  Wi = '_top_1jkxd_4',
  qi = '_active_1jkxd_33',
  Yi = '_more_1jkxd_47',
  Xi = '_bottom_1jkxd_57',
  Ui = '_rank_1jkxd_62',
  V = { recommend: Hi, top: Wi, active: qi, more: Yi, bottom: Xi, rank: Ui },
  Ki = '_column_ha85d_1',
  Qi = '_top_ha85d_5',
  Zi = '_inner_ha85d_11',
  Ji = '_back_ha85d_28',
  es = '_play_ha85d_35',
  ts = '_num_ha85d_56',
  is = '_info_ha85d_85',
  ss = '_name_ha85d_92',
  ns = '_singer_ha85d_108',
  H = { column: Ki, top: Qi, inner: Zi, back: Ji, play: es, num: ts, info: is, name: ss, singer: ns },
  rs = {
    热歌榜: 'https://h5static.kuwo.cn/upload/image/d8faf807ce667092ef29f8d62237bfbf3a1f127a6370664705722a67c8f9e23b.png',
    酷我新歌榜: 'https://h5static.kuwo.cn/upload/image/fb29b783091117318dbb5dac53f8a7deee25b34054f7d00fb91640f6106773c6.png',
    酷我飙升榜: 'https://h5static.kuwo.cn/upload/image/fcd292e95c97704678ae6a77191df0b915dd9b9657296ca20b9f19047f672055.png',
    酷我欧美榜: 'https://h5static.kuwo.cn/upload/image/8eef6e95406eb46f8ed544384bb457e20c8d66a33c3077c586e58537b620ecf5.png',
    酷我日韩榜: 'https://h5static.kuwo.cn/upload/image/838f7519b40479695a6f5a22923704600d2dfceb4e8d6ad0099b5a169ae0df03.png',
  }
function as({ ranklist: t }) {
  const { playMany: e } = et()
  return P.jsxs('div', {
    className: H.column,
    children: [
      P.jsxs('div', {
        className: H.top,
        children: [
          P.jsx('div', { className: H.inner, children: P.jsx('img', { src: rs[t.name], referrerPolicy: 'no-referrer', alt: '' }) }),
          P.jsx(tt, { src: t.pic.replace('120', '500'), className: H.back, alt: '' }),
          P.jsx(it, { onClick: () => e(t.musicList), className: H.play }),
        ],
      }),
      P.jsx('ul', {
        children: t.musicList
          .slice(0, 5)
          .map((i, s) =>
            P.jsxs(
              'li',
              {
                children: [
                  P.jsx('div', { className: H.num, children: s > 2 && s + 1 }),
                  P.jsxs('div', {
                    className: H.info,
                    children: [
                      P.jsx(te, { className: H.name, to: `/song/${i.rid}`, children: i.name }),
                      P.jsx(te, { className: H.singer, to: `/singer/${i.artistid}`, children: i.artist }),
                    ],
                  }),
                ],
              },
              i.musicrid,
            ),
          ),
      }),
    ],
  })
}
function fs() {
  var n, o
  const [t, e] = D.useState('rcm'),
    { data: i } = st(),
    { data: s } = nt({ tag: t }),
    { data: r } = rt()
  return P.jsx(P.Fragment, {
    children: P.jsxs('main', {
      className: 'container',
      children: [
        P.jsx(Ri, {}),
        P.jsxs('section', {
          className: V.recommend,
          children: [
            P.jsxs('div', {
              className: V.top,
              children: [
                P.jsx('h2', { children: '推荐歌单' }),
                P.jsxs('ul', {
                  children: [
                    P.jsx('li', { onClick: () => e('rcm'), className: Ee({ [V.active]: t === 'rcm' }), children: '每日推荐' }),
                    i == null
                      ? void 0
                      : i.data.map((l) => P.jsx('li', { onClick: () => e(l.id), className: Ee({ [V.active]: t === l.id }), children: l.name }, l.id)),
                    P.jsx('li', { className: V.more, children: P.jsxs(te, { to: '/playList', children: ['更多 ', P.jsx(Ce, {})] }) }),
                  ],
                }),
              ],
            }),
            P.jsx('div', {
              className: V.bottom,
              children:
                s != null && s.data.list
                  ? (n = s == null ? void 0 : s.data.list) == null
                    ? void 0
                    : n.slice(0, 5).map((l) => P.jsx(Pe, { playlist: l }, l.id))
                  : (o = s == null ? void 0 : s.data.data) == null
                    ? void 0
                    : o.map((l) => P.jsx(Pe, { playlist: l }, l.id)),
            }),
          ],
        }),
        P.jsxs('section', {
          className: V.rank,
          children: [
            P.jsxs('div', {
              className: V.top,
              children: [P.jsx('h2', { children: '排行榜' }), P.jsxs(te, { className: V.more, to: '/rankList', children: ['更多 ', P.jsx(Ce, {})] })],
            }),
            P.jsx('div', { className: V.bottom, children: r == null ? void 0 : r.data.map((l) => P.jsx(as, { ranklist: l }, l.id)) }),
          ],
        }),
      ],
    }),
  })
}
export { fs as default }
