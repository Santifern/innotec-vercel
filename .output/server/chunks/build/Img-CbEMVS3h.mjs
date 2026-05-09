import { ref, computed, useId, unref, withCtx, createVNode, resolveDynamicComponent, mergeProps, openBlock, createBlock, createCommentVNode, defineComponent, toRefs, renderSlot, normalizeProps, guardReactiveProps, Transition, TransitionGroup, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderVNode, ssrRenderClass } from 'vue/server-renderer';
import { f as useAppConfig, g as useComponentUI, A as createReusableTemplate, h as tv, O as resolveBaseURL, D as useRuntimeConfig, B as useEventListener, Q as ImageComponent, M as Motion, k as useVModel, l as useForwardExpose, P as Primitive, T as Teleport_default, m as createContext$1, K as provideAnimatePresence, J as useMotionConfig, L as mountedStates, N as motionGlobalConfig } from './server.mjs';
import { u as useId$1 } from './useId-CVgtJmEq.mjs';
import { frame } from 'framer-motion/dom';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'better-sqlite3';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'motion-dom';
import 'hey-listen';
import 'motion-utils';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const [injectDialogRootContext, provideDialogRootContext] = /* @__PURE__ */ createContext$1("DialogRoot");
var DialogRoot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "DialogRoot",
  props: {
    open: {
      type: Boolean,
      required: false,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: false,
      default: false
    },
    modal: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const open = useVModel(props, "open", emit, {
      defaultValue: props.defaultOpen,
      passive: props.open === void 0
    });
    const triggerElement = ref();
    const contentElement = ref();
    const { modal } = toRefs(props);
    provideDialogRootContext({
      open,
      modal,
      openModal: () => {
        open.value = true;
      },
      onOpenChange: (value) => {
        open.value = value;
      },
      onOpenToggle: () => {
        open.value = !open.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement,
      contentElement
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default", {
        open: unref(open),
        close: () => open.value = false
      });
    };
  }
});
var DialogRoot_default = DialogRoot_vue_vue_type_script_setup_true_lang_default;
var DialogPortal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DialogPortal",
  props: {
    to: {
      type: null,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    defer: {
      type: Boolean,
      required: false
    },
    forceMount: {
      type: Boolean,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Teleport_default), normalizeProps(guardReactiveProps(props)), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16);
    };
  }
});
var DialogPortal_default = DialogPortal_vue_vue_type_script_setup_true_lang_default;
var DialogTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: false
    },
    as: {
      type: null,
      required: false,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const rootContext = injectDialogRootContext();
    const { forwardRef } = useForwardExpose();
    rootContext.contentId ||= useId$1(void 0, "reka-dialog-content");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Primitive), mergeProps(props, {
        ref: unref(forwardRef),
        type: _ctx.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": unref(rootContext).open.value || false,
        "aria-controls": unref(rootContext).open.value ? unref(rootContext).contentId : void 0,
        "data-state": unref(rootContext).open.value ? "open" : "closed",
        onClick: unref(rootContext).onOpenToggle
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, [
        "type",
        "aria-expanded",
        "aria-controls",
        "data-state",
        "onClick"
      ]);
    };
  }
});
var DialogTrigger_default = DialogTrigger_vue_vue_type_script_setup_true_lang_default;
var popId = 0;
function usePopLayout(props) {
  const styles = /* @__PURE__ */ new WeakMap();
  const config = useMotionConfig();
  function addPopStyle(element) {
    if (props.mode !== "popLayout") return;
    const parent = element.offsetParent;
    const parentWidth = parent instanceof HTMLElement ? parent.offsetWidth || 0 : 0;
    const size = {
      height: element.offsetHeight || 0,
      width: element.offsetWidth || 0,
      top: element.offsetTop,
      left: element.offsetLeft,
      right: 0
    };
    size.right = parentWidth - size.width - size.left;
    const x = props.anchorX === "left" ? `left: ${size.left}px` : `right: ${size.right}px`;
    const elementPopId = `pop-${popId++}`;
    element.dataset.motionPopId = elementPopId;
    const style = (void 0).createElement("style");
    if (config.value.nonce) style.nonce = config.value.nonce;
    styles.set(element, style);
    (void 0).head.appendChild(style);
    if (style.sheet) style.sheet.insertRule(`
    [data-motion-pop-id="${elementPopId}"] {
      position: absolute !important;
      width: ${size.width}px !important;
      height: ${size.height}px !important;
      top: ${size.top}px !important;
      ${x} !important;
      }
      `);
  }
  function removePopStyle(element) {
    const style = styles.get(element);
    if (!style) return;
    styles.delete(element);
    frame.render(() => {
      (void 0).head.removeChild(style);
    });
  }
  return {
    addPopStyle,
    removePopStyle
  };
}
var apId = 0;
function usePresenceContainer(props) {
  const presenceId = String(apId++);
  const exitSessions = /* @__PURE__ */ new Map();
  const { addPopStyle, removePopStyle } = usePopLayout(props);
  function findMotionStates(container) {
    const states = [];
    const selfState = mountedStates.get(container);
    if (selfState && container.getAttribute(motionGlobalConfig.motionAttribute) === presenceId) states.push(selfState);
    const elements = Array.from(container.querySelectorAll(`[${motionGlobalConfig.motionAttribute}="${presenceId}"]`));
    for (const el of elements) {
      const s = mountedStates.get(el);
      if (s) states.push(s);
    }
    return states;
  }
  function onMotionExitComplete(container, state) {
    const session = exitSessions.get(container);
    if (!session) return;
    session.remaining.delete(state);
    if (session.remaining.size === 0) finalizeExit(session);
  }
  const presenceContext = {
    initial: props.initial,
    custom: props.custom,
    presenceId,
    onMotionExitComplete
  };
  provideAnimatePresence(presenceContext);
  function finalizeExit(session) {
    removePopStyle(session.el);
    session.states.forEach((state) => {
      state.getSnapshot(state.options, false);
    });
    session.done();
    exitSessions.delete(session.el);
    if (!session.el?.isConnected) session.states.forEach((state) => {
      state.unmount();
    });
    else session.states[0]?.didUpdate();
    props.onExitComplete?.();
  }
  function enter(el, done) {
    findMotionStates(el).forEach((state) => {
      state.setActive("exit", false);
      state.getSnapshot(state.options, true);
    });
    done();
  }
  function exit(el, done) {
    presenceContext.custom = props.custom;
    const container = el;
    const states = findMotionStates(container);
    if (states.length === 0) {
      done();
      props.onExitComplete?.();
      return;
    }
    const session = {
      remaining: new Set(states),
      states,
      done,
      el: container
    };
    exitSessions.set(container, session);
    addPopStyle(container);
    states.forEach((state) => {
      state.presenceContainer = container;
      state.setActive("exit", true);
      state.getSnapshot(state.options, false);
    });
    states[0]?.didUpdate();
  }
  return {
    enter,
    exit
  };
}
var AnimatePresence_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "AnimatePresence",
  inheritAttrs: true,
  __name: "AnimatePresence",
  props: {
    mode: { default: "sync" },
    initial: {
      type: Boolean,
      default: true
    },
    as: {},
    custom: {},
    onExitComplete: {},
    anchorX: { default: "left" }
  },
  setup(__props) {
    const props = __props;
    const { enter, exit } = usePresenceContainer(props);
    const transitionProps = computed(() => {
      if (props.mode !== "wait") return { tag: props.as };
      return { mode: props.mode === "wait" ? "out-in" : void 0 };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.mode === "wait" ? Transition : TransitionGroup), mergeProps(transitionProps.value, {
        appear: "",
        css: false,
        onLeave: unref(exit),
        onEnter: unref(enter)
      }), {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      }, 16, ["onLeave", "onEnter"]);
    };
  }
});
var AnimatePresence_default = AnimatePresence_vue_vue_type_script_setup_true_lang_default;
const theme = {
  "slots": {
    "base": "rounded-md",
    "overlay": "fixed inset-0 bg-default/75 backdrop-blur-sm will-change-opacity",
    "content": "fixed inset-0 flex items-center justify-center cursor-zoom-out focus:outline-none",
    "zoomedImage": "w-full h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md"
  },
  "variants": {
    "zoom": {
      "true": "will-change-transform"
    },
    "open": {
      "true": ""
    },
    "width": {
      "false": "w-full"
    }
  },
  "compoundVariants": [
    {
      "zoom": true,
      "open": false,
      "class": "cursor-zoom-in"
    }
  ]
};
const _sfc_main = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    width: { type: [String, Number], required: false },
    height: { type: [String, Number], required: false },
    class: { type: null, required: false },
    zoom: { type: Boolean, required: false, default: true },
    ui: { type: Object, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("prose.img", props);
    const [DefineImageTemplate, ReuseImageTemplate] = createReusableTemplate();
    const [DefineZoomedImageTemplate, ReuseZoomedImageTemplate] = createReusableTemplate();
    const open = ref(false);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.img || {} })({
      zoom: props.zoom,
      open: open.value,
      width: !!props.width
    }));
    const refinedSrc = computed(() => resolveBaseURL(props.src, useRuntimeConfig().app.baseURL));
    const layoutId = computed(() => `${refinedSrc.value}::${useId()}`);
    if (props.zoom) {
      useEventListener(void 0, "scroll", () => {
        open.value = false;
      });
      useEventListener(void 0, "keydown", (e) => {
        if (e.key === "Escape" && open.value) {
          open.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineImageTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
              src: refinedSrc.value,
              alt: __props.alt,
              width: __props.width,
              height: __props.height
            }, _ctx.$attrs, {
              class: ui.value.base({ class: [unref(uiProp)?.base, props.class] })
            }), null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
                src: refinedSrc.value,
                alt: __props.alt,
                width: __props.width,
                height: __props.height
              }, _ctx.$attrs, {
                class: ui.value.base({ class: [unref(uiProp)?.base, props.class] })
              }), null, 16, ["src", "alt", "width", "height", "class"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(DefineZoomedImageTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
              src: refinedSrc.value,
              alt: __props.alt
            }, _ctx.$attrs, {
              class: ui.value.zoomedImage({ class: [unref(uiProp)?.zoomedImage] })
            }), null), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps({
                src: refinedSrc.value,
                alt: __props.alt
              }, _ctx.$attrs, {
                class: ui.value.zoomedImage({ class: [unref(uiProp)?.zoomedImage] })
              }), null, 16, ["src", "alt", "class"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.zoom) {
        _push(ssrRenderComponent(unref(DialogRoot_default), {
          open: open.value,
          "onUpdate:open": ($event) => open.value = $event,
          modal: false
        }, {
          default: withCtx(({ close }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DialogTrigger_default), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Motion), {
                      "layout-id": layoutId.value,
                      "as-child": "",
                      transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(ReuseImageTemplate), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(ReuseImageTemplate))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Motion), {
                        "layout-id": layoutId.value,
                        "as-child": "",
                        transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ReuseImageTemplate))
                        ]),
                        _: 1
                      }, 8, ["layout-id"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(DialogPortal_default), null, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(AnimatePresence_default), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (open.value) {
                            _push4(ssrRenderComponent(unref(Motion), {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              class: ui.value.overlay({ class: [unref(uiProp)?.overlay] })
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          if (open.value) {
                            _push4(`<div class="${ssrRenderClass(ui.value.content({ class: [unref(uiProp)?.content] }))}"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Motion), {
                              "as-child": "",
                              "layout-id": layoutId.value,
                              transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(ReuseZoomedImageTemplate), null, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(ReuseZoomedImageTemplate))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            open.value ? (openBlock(), createBlock(unref(Motion), {
                              key: 0,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              class: ui.value.overlay({ class: [unref(uiProp)?.overlay] })
                            }, null, 8, ["class"])) : createCommentVNode("", true),
                            open.value ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.content({ class: [unref(uiProp)?.content] }),
                              onClick: close
                            }, [
                              createVNode(unref(Motion), {
                                "as-child": "",
                                "layout-id": layoutId.value,
                                transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(ReuseZoomedImageTemplate))
                                ]),
                                _: 1
                              }, 8, ["layout-id"])
                            ], 10, ["onClick"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(AnimatePresence_default), null, {
                        default: withCtx(() => [
                          open.value ? (openBlock(), createBlock(unref(Motion), {
                            key: 0,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            class: ui.value.overlay({ class: [unref(uiProp)?.overlay] })
                          }, null, 8, ["class"])) : createCommentVNode("", true),
                          open.value ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: ui.value.content({ class: [unref(uiProp)?.content] }),
                            onClick: close
                          }, [
                            createVNode(unref(Motion), {
                              "as-child": "",
                              "layout-id": layoutId.value,
                              transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(ReuseZoomedImageTemplate))
                              ]),
                              _: 1
                            }, 8, ["layout-id"])
                          ], 10, ["onClick"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(DialogTrigger_default), { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(unref(Motion), {
                      "layout-id": layoutId.value,
                      "as-child": "",
                      transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ReuseImageTemplate))
                      ]),
                      _: 1
                    }, 8, ["layout-id"])
                  ]),
                  _: 1
                }),
                createVNode(unref(DialogPortal_default), null, {
                  default: withCtx(() => [
                    createVNode(unref(AnimatePresence_default), null, {
                      default: withCtx(() => [
                        open.value ? (openBlock(), createBlock(unref(Motion), {
                          key: 0,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          class: ui.value.overlay({ class: [unref(uiProp)?.overlay] })
                        }, null, 8, ["class"])) : createCommentVNode("", true),
                        open.value ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: ui.value.content({ class: [unref(uiProp)?.content] }),
                          onClick: close
                        }, [
                          createVNode(unref(Motion), {
                            "as-child": "",
                            "layout-id": layoutId.value,
                            transition: { type: "spring", bounce: 0.15, duration: 0.5, ease: "easeInOut" }
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ReuseZoomedImageTemplate))
                            ]),
                            _: 1
                          }, 8, ["layout-id"])
                        ], 10, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(unref(ReuseImageTemplate), null, null, _parent));
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/prose/Img.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Img-CbEMVS3h.mjs.map
