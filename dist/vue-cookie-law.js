import { defineComponent as p, computed as l, ref as g, onMounted as d, openBlock as c, createBlock as f, Transition as _, withCtx as b, createElementBlock as k, normalizeClass as v, createElementVNode as r, renderSlot as x, toDisplayString as u, createCommentVNode as y } from "vue";
const T = { class: "cookie-banner__content" }, h = { class: "cookie-banner__footer" }, S = /* @__PURE__ */ p({
  __name: "CookieBanner",
  props: {
    locale: {
      type: String,
      default: "en"
    },
    translations: {
      type: Object,
      default: () => ({
        en: {
          message: "This website uses cookies to ensure you get the best experience on our website.",
          buttonText: "Got it!"
        },
        it: {
          message: "Questo sito utilizza i cookie per garantirti la migliore esperienza di navigazione.",
          buttonText: "Ho capito!"
        }
      })
    },
    buttonText: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    theme: {
      type: String,
      default: "base"
      // base, dark, lime
    },
    storageName: {
      type: String,
      default: "cookie:accepted"
    }
  },
  setup(t) {
    const e = t, s = l(() => {
      var o, n;
      return e.message ? e.message : ((o = e.translations[e.locale]) == null ? void 0 : o.message) || ((n = e.translations.en) == null ? void 0 : n.message) || "";
    }), i = l(() => {
      var o, n;
      return e.buttonText ? e.buttonText : ((o = e.translations[e.locale]) == null ? void 0 : o.buttonText) || ((n = e.translations.en) == null ? void 0 : n.buttonText) || "Got it!";
    }), a = g(!1), m = () => {
      a.value = !1, localStorage.setItem(e.storageName, "true");
    };
    return d(() => {
      localStorage.getItem(e.storageName) || (a.value = !0);
    }), (o, n) => (c(), f(_, { name: "slide-up" }, {
      default: b(() => [
        a.value ? (c(), k("div", {
          key: 0,
          class: v(["cookie-banner", `theme-${t.theme}`])
        }, [
          r("div", T, [
            x(o.$slots, "message", {}, () => [
              r("p", null, u(s.value), 1)
            ], !0)
          ]),
          r("div", h, [
            r("button", {
              class: "cookie-banner__button",
              onClick: m
            }, u(i.value), 1)
          ])
        ], 2)) : y("", !0)
      ]),
      _: 3
    }));
  }
}), C = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [i, a] of e)
    s[i] = a;
  return s;
}, B = /* @__PURE__ */ C(S, [["__scopeId", "data-v-4620b724"]]), N = {
  install(t) {
    t.component("CookieBanner", B);
  }
};
export {
  B as CookieBanner,
  N as default
};
