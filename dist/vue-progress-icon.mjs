var g = function() {
  var t = this, n = t.$createElement, r = t._self._c || n;
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
function y(s, t, n, r, a, l, c, f) {
  var e = typeof s == "function" ? s.options : s;
  t && (e.render = t, e.staticRenderFns = n, e._compiled = !0), r && (e.functional = !0), l && (e._scopeId = "data-v-" + l);
  var i;
  if (c ? (i = function(o) {
    o = o || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !o && typeof __VUE_SSR_CONTEXT__ < "u" && (o = __VUE_SSR_CONTEXT__), a && a.call(this, o), o && o._registeredComponents && o._registeredComponents.add(c);
  }, e._ssrRegister = i) : a && (i = f ? function() {
    a.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), i)
    if (e.functional) {
      e._injectStyles = i;
      var u = e.render;
      e.render = function(d, p) {
        return i.call(p), u(d, p);
      };
    } else {
      var h = e.beforeCreate;
      e.beforeCreate = h ? [].concat(h, i) : [i];
    }
  return {
    exports: s,
    options: e
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
      const s = this.measureSlotContent(this.progress);
      if (!s)
        return "inherit";
      this.adjustRoot(s);
      const { height: t, width: n } = s, r = t * this.vscale, a = n * this.hscale, l = (t - r) / 2, c = (n - a) / 2, f = this.direction;
      let e = this.progress;
      if (this.steps) {
        const d = 100 / this.steps;
        e = Math.ceil(e / d) * d;
      }
      const i = this.hoffset, u = this.voffset, h = f === "vertical" ? r * e / 100 : r, o = f === "horizontal" ? a * e / 100 : a;
      return `rect(${r - h + l + u}px,${o + c + i}px,${r + u + l}px,${i + c}px)`;
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
      const s = this.$refs.measureContainer, t = s && s.firstChild;
      if (!!t)
        return {
          height: t.clientHeight,
          width: t.clientWidth
        };
    },
    adjustRoot(s) {
      const t = this.$refs.root;
      if (!t || !s)
        return;
      const { height: n, width: r } = s;
      t.clientHeight !== n && (t.style.height = n + "px"), t.clientWidth !== r && (t.style.width = r + "px");
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
function b(s) {
  for (let t in _)
    this[t] = _[t];
}
const $ = /* @__PURE__ */ function() {
  return C.exports;
}();
module.exports = { ProgressIcon: $ };
