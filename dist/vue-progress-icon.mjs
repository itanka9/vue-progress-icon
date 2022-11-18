(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".progress-icon[data-v-2b7d77c5]{position:relative;display:inline-block}.progress-icon .fg[data-v-2b7d77c5],.progress-icon .bg[data-v-2b7d77c5]{position:absolute;top:0;left:0}.progress-icon .fg[data-v-2b7d77c5]{z-index:2}.progress-icon .bg[data-v-2b7d77c5]{z-index:1}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var g = function() {
  var t = this, e = t.$createElement, r = t._self._c || e;
  return r("div", {
    ref: "root",
    staticClass: "progress-icon"
  }, [r("div", {
    ref: "measureContainer",
    staticClass: "bg"
  }, [t._t("default")], 2), r("div", {
    staticClass: "fg",
    style: t.style
  }, [t._t("default")], 2)]);
}, v = [];
function y(t, e, r, n, a, l, c, f) {
  var s = typeof t == "function" ? t.options : t;
  e && (s.render = e, s.staticRenderFns = r, s._compiled = !0), n && (s.functional = !0), l && (s._scopeId = "data-v-" + l);
  var i;
  if (c ? (i = function(o) {
    o = o || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), a && a.call(this, o), o && o._registeredComponents && o._registeredComponents.add(c);
  }, s._ssrRegister = i) : a && (i = f ? function() {
    a.call(
      this,
      (s.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), i)
    if (s.functional) {
      s._injectStyles = i;
      var u = s.render;
      s.render = function(d, p) {
        return i.call(p), u(d, p);
      };
    } else {
      var h = s.beforeCreate;
      s.beforeCreate = h ? [].concat(h, i) : [i];
    }
  return {
    exports: t,
    options: s
  };
}
const m = {
  name: "progress-icon",
  props: {
    progress: {
      type: Number,
      default: 0
    },
    steps: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "lightgreen"
    },
    hoffset: {
      type: Number,
      default: 0
    },
    voffset: {
      type: Number,
      default: 0
    },
    vscale: {
      type: Number,
      default: 1
    },
    hscale: {
      type: Number,
      default: 1
    },
    direction: {
      type: String,
      default: "vertical"
    },
    debug: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    clipRect() {
      const t = this.measureSlotContent(this.progress);
      if (!t)
        return "inherit";
      this.adjustRoot(t);
      const { height: e, width: r } = t, n = e * this.vscale, a = r * this.hscale, l = (e - n) / 2, c = (r - a) / 2, f = this.direction;
      let s = this.progress;
      if (this.steps) {
        const d = 100 / this.steps;
        s = Math.ceil(s / d) * d;
      }
      const i = this.hoffset, u = this.voffset, h = f === "vertical" ? n * s / 100 : n, o = f === "horizontal" ? a * s / 100 : a;
      return `rect(${n - h + l + u}px,${o + c + i}px,${n + u + l}px,${i + c}px)`;
    },
    style() {
      return { ...this.clipStyle, ...this.debugStyle };
    },
    clipStyle() {
      return {
        clip: this.clipRect,
        color: this.color
      };
    },
    debugStyle() {
      return this.debug ? {
        "background-color": "gray",
        "background-opacity": "30%"
      } : {};
    }
  },
  methods: {
    measureSlotContent() {
      const t = this.$refs.measureContainer, e = t && t.firstChild;
      if (!!e)
        return {
          height: e.clientHeight,
          width: e.clientWidth
        };
    },
    adjustRoot(t) {
      const e = this.$refs.root;
      if (!e || !t)
        return;
      const { height: r, width: n } = t;
      e.clientHeight !== r && (e.style.height = r + "px"), e.clientWidth !== n && (e.style.width = n + "px");
    }
  }
}, _ = {};
var C = /* @__PURE__ */ y(
  m,
  g,
  v,
  !1,
  b,
  "2b7d77c5",
  null,
  null
);
function b(t) {
  for (let e in _)
    this[e] = _[e];
}
const $ = /* @__PURE__ */ function() {
  return C.exports;
}();
module.exports = { ProgressIcon: $ };
