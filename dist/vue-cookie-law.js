import { defineComponent as i, ref as l, onMounted as u, openBlock as c, createBlock as m, Transition as d, withCtx as p, createElementBlock as g, normalizeClass as f, createElementVNode as n, renderSlot as _, toDisplayString as r, createCommentVNode as k } from "vue";
const b = { class: "cookie-banner__content" }, h = { class: "cookie-banner__footer" }, v = /* @__PURE__ */ i({
  __name: "CookieBanner",
  props: {
    buttonText: {
      type: String,
      default: "Got it!"
    },
    message: {
      type: String,
      default: "This website uses cookies to ensure you get the best experience on our website."
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
  setup(e) {
    const o = e, t = l(!1), a = () => {
      t.value = !1, localStorage.setItem(o.storageName, "true");
    };
    return u(() => {
      localStorage.getItem(o.storageName) || (t.value = !0);
    }), (s, S) => (c(), m(d, { name: "slide-up" }, {
      default: p(() => [
        t.value ? (c(), g("div", {
          key: 0,
          class: f(["cookie-banner", `theme-${e.theme}`])
        }, [
          n("div", b, [
            _(s.$slots, "message", {}, () => [
              n("p", null, r(e.message), 1)
            ], !0)
          ]),
          n("div", h, [
            n("button", {
              class: "cookie-banner__button",
              onClick: a
            }, r(e.buttonText), 1)
          ])
        ], 2)) : k("", !0)
      ]),
      _: 3
    }));
  }
}), y = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [a, s] of o)
    t[a] = s;
  return t;
}, C = /* @__PURE__ */ y(v, [["__scopeId", "data-v-eec83b4a"]]), B = {
  install(e) {
    e.component("CookieBanner", C);
  }
};
export {
  C as CookieBanner,
  B as default
};
