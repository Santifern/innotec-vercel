import { _ as _export_sfc, b as useAsyncData, c as createError, d as useSeoMeta, M as Motion, e as _imports_0, t as tryUseNuxtApp } from './server.mjs';
import { defineComponent, withAsyncContext, computed, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { E as withoutTrailingSlash, I as getRequestHeaders } from '../_/nitro.mjs';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'motion-dom';
import 'hey-listen';
import 'framer-motion/dom';
import 'motion-utils';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CountdownTimer",
  __ssrInlineRender: true,
  setup(__props) {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const isExpired = ref(false);
    function padZero(n) {
      return String(n).padStart(2, "0");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "countdown-wrapper" }, _attrs))} data-v-d8d13567><p class="countdown-label" data-v-d8d13567><span class="label-dot" data-v-d8d13567></span> Faltan para el evento </p>`);
      if (!unref(isExpired)) {
        _push(`<div class="countdown-grid" data-v-d8d13567><div class="countdown-unit" data-v-d8d13567><div class="countdown-card" data-v-d8d13567><span class="countdown-number" data-v-d8d13567>${ssrInterpolate(padZero(unref(days)))}</span><div class="countdown-card-glow" data-v-d8d13567></div></div><span class="countdown-unit-label" data-v-d8d13567>Días</span></div><div class="countdown-separator" data-v-d8d13567>:</div><div class="countdown-unit" data-v-d8d13567><div class="countdown-card" data-v-d8d13567><span class="countdown-number" data-v-d8d13567>${ssrInterpolate(padZero(unref(hours)))}</span><div class="countdown-card-glow" data-v-d8d13567></div></div><span class="countdown-unit-label" data-v-d8d13567>Horas</span></div><div class="countdown-separator" data-v-d8d13567>:</div><div class="countdown-unit" data-v-d8d13567><div class="countdown-card" data-v-d8d13567><span class="countdown-number" data-v-d8d13567>${ssrInterpolate(padZero(unref(minutes)))}</span><div class="countdown-card-glow" data-v-d8d13567></div></div><span class="countdown-unit-label" data-v-d8d13567>Minutos</span></div><div class="countdown-separator" data-v-d8d13567>:</div><div class="countdown-unit" data-v-d8d13567><div class="countdown-card" data-v-d8d13567><span class="countdown-number seconds-tick" data-v-d8d13567>${ssrInterpolate(padZero(unref(seconds)))}</span><div class="countdown-card-glow" data-v-d8d13567></div></div><span class="countdown-unit-label" data-v-d8d13567>Segundos</span></div></div>`);
      } else {
        _push(`<div class="countdown-started" data-v-d8d13567><span data-v-d8d13567>🎉 ¡El evento ha comenzado!</span></div>`);
      }
      _push(`<div class="countdown-date-badge" data-v-d8d13567><svg xmlns="http://www.w3.org/2000/svg" class="badge-icon" viewBox="0 0 20 20" fill="currentColor" data-v-d8d13567><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" data-v-d8d13567></path></svg> 20 de agosto, 2026 · Asunción, Paraguay </div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CountdownTimer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-d8d13567"]]), { __name: "CountdownTimer" });
const checksums = {
  "content": "v3.5.0--WjRQrRa51J2x7zTSRc02TnlG-dpB3ZAbh5iPZgc26rY"
};
const tables = {
  "content": "_content_content",
  "info": "_content_info"
};
const buildGroup = (group, type) => {
  const conditions = group._conditions;
  return conditions.length > 0 ? `(${conditions.join(` ${type} `)})` : "";
};
const collectionQueryGroup = (collection) => {
  const conditions = [];
  const query = {
    // @ts-expect-error -- internal
    _conditions: conditions,
    where(field, operator, value) {
      let condition;
      switch (operator.toUpperCase()) {
        case "IN":
        case "NOT IN":
          if (Array.isArray(value)) {
            const values = value.map((val) => singleQuote(val)).join(", ");
            condition = `"${String(field)}" ${operator.toUpperCase()} (${values})`;
          } else {
            throw new TypeError(`Value for ${operator} must be an array`);
          }
          break;
        case "BETWEEN":
        case "NOT BETWEEN":
          if (Array.isArray(value) && value.length === 2) {
            condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value[0])} AND ${singleQuote(value[1])}`;
          } else {
            throw new Error(`Value for ${operator} must be an array with two elements`);
          }
          break;
        case "IS NULL":
        case "IS NOT NULL":
          condition = `"${String(field)}" ${operator.toUpperCase()}`;
          break;
        case "LIKE":
        case "NOT LIKE":
          condition = `"${String(field)}" ${operator.toUpperCase()} ${singleQuote(value)}`;
          break;
        default:
          condition = `"${String(field)}" ${operator} ${singleQuote(typeof value === "boolean" ? Number(value) : value)}`;
      }
      conditions.push(`${condition}`);
      return query;
    },
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      conditions.push(buildGroup(group, "OR"));
      return query;
    }
  };
  return query;
};
const collectionQueryBuilder = (collection, fetch) => {
  const params = {
    conditions: [],
    selectedFields: [],
    offset: 0,
    limit: 0,
    orderBy: [],
    // Count query
    count: {
      field: "",
      distinct: false
    }
  };
  const query = {
    // @ts-expect-error -- internal
    __params: params,
    andWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "AND"));
      return query;
    },
    orWhere(groupFactory) {
      const group = groupFactory(collectionQueryGroup());
      params.conditions.push(buildGroup(group, "OR"));
      return query;
    },
    path(path) {
      return query.where("path", "=", withoutTrailingSlash(path));
    },
    skip(skip) {
      params.offset = skip;
      return query;
    },
    where(field, operator, value) {
      query.andWhere((group) => group.where(String(field), operator, value));
      return query;
    },
    limit(limit) {
      params.limit = limit;
      return query;
    },
    select(...fields) {
      if (fields.length) {
        params.selectedFields.push(...fields);
      }
      return query;
    },
    order(field, direction) {
      params.orderBy.push(`"${String(field)}" ${direction}`);
      return query;
    },
    async all() {
      return fetch(collection, buildQuery()).then((res) => res || []);
    },
    async first() {
      return fetch(collection, buildQuery({ limit: 1 })).then((res) => res[0] || null);
    },
    async count(field = "*", distinct = false) {
      return fetch(collection, buildQuery({
        count: { field: String(field), distinct }
      })).then((m) => m[0].count);
    }
  };
  function buildQuery(opts = {}) {
    let query2 = "SELECT ";
    if (opts?.count) {
      query2 += `COUNT(${opts.count.distinct ? "DISTINCT " : ""}${opts.count.field}) as count`;
    } else {
      const fields = Array.from(new Set(params.selectedFields));
      query2 += fields.length > 0 ? fields.map((f) => `"${String(f)}"`).join(", ") : "*";
    }
    query2 += ` FROM ${tables[String(collection)]}`;
    if (params.conditions.length > 0) {
      query2 += ` WHERE ${params.conditions.join(" AND ")}`;
    }
    if (params.orderBy.length > 0) {
      query2 += ` ORDER BY ${params.orderBy.join(", ")}`;
    } else {
      query2 += ` ORDER BY stem ASC`;
    }
    const limit = opts?.limit || params.limit;
    if (limit > 0) {
      if (params.offset > 0) {
        query2 += ` LIMIT ${limit} OFFSET ${params.offset}`;
      } else {
        query2 += ` LIMIT ${limit}`;
      }
    }
    return query2;
  }
  return query;
};
function singleQuote(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}
async function fetchContent(event, collection, path, options) {
  const headers = event ? getRequestHeaders(event) : {};
  headers["accept-encoding"] = void 0;
  const url = `/__nuxt_content/${collection}/${path}`;
  const fetchOptions = {
    ...options,
    headers: {
      ...headers,
      ...options.headers
    },
    query: { v: checksums[String(collection)], t: void 0 }
  };
  return event ? await event.$fetch(url, fetchOptions) : await $fetch(url, fetchOptions);
}
async function fetchQuery(event, collection, sql) {
  return fetchContent(event, collection, "query", {
    headers: {
      "content-type": "application/json"
    },
    method: "POST",
    body: {
      sql
    }
  });
}
const queryCollection = (collection) => {
  const event = tryUseNuxtApp()?.ssrContext?.event;
  return collectionQueryBuilder(collection, (collection2, sql) => executeContentQuery(event, collection2, sql));
};
async function executeContentQuery(event, collection, sql) {
  {
    return fetchQuery(event, String(collection), sql);
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("index", () => queryCollection("content").first())), __temp = await __temp, __restore(), __temp);
    if (!page.value) {
      throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
    }
    const title = page.value?.seo?.title || page.value?.title;
    const description = page.value?.seo?.description || page.value?.description;
    useSeoMeta({
      title,
      ogTitle: title,
      description,
      ogDescription: description
    });
    const heroTitle = computed(() => {
      const [primary = "", ...secondaryParts] = (page.value?.title ?? "").split("\n");
      return {
        primary,
        secondary: secondaryParts.join(" ").trim()
      };
    });
    const smoothEase = [0.22, 1, 0.36, 1];
    const scrollInViewOptions = { once: true, amount: 0.28, margin: "0px 0px -12% 0px" };
    const staggerInViewOptions = { once: true, amount: 0.35, margin: "0px 0px -10% 0px" };
    const activityImages = [
      {
        src: "/activity-charlas.jpg",
        alt: "Charla de INNOTEC en auditorio"
      },
      {
        src: "/activity-talleres.jpg",
        alt: "Taller interactivo de INNOTEC"
      },
      {
        src: "/activity-visita-tecnica.jpg",
        alt: "Visita tecnica de INNOTEC"
      }
    ];
    function getActivityImage(index2) {
      return activityImages[index2] ?? activityImages[0];
    }
    function enterMotion(delay = 0) {
      return {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay }
      };
    }
    function scrollMotion(delay = 0) {
      return {
        initial: { opacity: 0, y: 34, filter: "blur(8px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        inViewOptions: scrollInViewOptions,
        transition: { duration: 0.82, delay, ease: smoothEase }
      };
    }
    function staggerMotion(index2 = 0) {
      return {
        initial: { opacity: 0, y: 28, scale: 0.98, filter: "blur(6px)" },
        whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        inViewOptions: staggerInViewOptions,
        transition: { duration: 0.72, delay: index2 * 0.1, ease: smoothEase }
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Motion = Motion;
      const _component_CountdownTimer = __nuxt_component_1;
      if (unref(page)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "innotec-page" }, _attrs))} data-v-f0e2eb83><section id="inicio" class="hero-section" data-v-f0e2eb83><div class="hero-bg-grid" data-v-f0e2eb83></div><div class="hero-bg-glow hero-bg-glow--center" data-v-f0e2eb83></div><div class="hero-bg-glow hero-bg-glow--left" data-v-f0e2eb83></div><div class="neon-chevrons" data-v-f0e2eb83><div class="neon-chevron neon-chevron--1" data-v-f0e2eb83><svg viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" data-v-f0e2eb83><path d="M0 20 L600 180 L1200 20" fill="none" stroke="url(#neonGrad1)" stroke-width="2" data-v-f0e2eb83></path><defs data-v-f0e2eb83><linearGradient id="neonGrad1" x1="0%" y1="0%" x2="100%" y2="0%" data-v-f0e2eb83><stop offset="0%" stop-color="transparent" data-v-f0e2eb83></stop><stop offset="30%" stop-color="#1944F0" stop-opacity="0.9" data-v-f0e2eb83></stop><stop offset="50%" stop-color="#7B8AF7" stop-opacity="1" data-v-f0e2eb83></stop><stop offset="70%" stop-color="#1944F0" stop-opacity="0.9" data-v-f0e2eb83></stop><stop offset="100%" stop-color="transparent" data-v-f0e2eb83></stop></linearGradient></defs></svg></div><div class="neon-chevron neon-chevron--2" data-v-f0e2eb83><svg viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" data-v-f0e2eb83><path d="M0 36 L600 166 L1200 36" fill="none" stroke="url(#neonGrad2)" stroke-width="1.5" data-v-f0e2eb83></path><defs data-v-f0e2eb83><linearGradient id="neonGrad2" x1="0%" y1="0%" x2="100%" y2="0%" data-v-f0e2eb83><stop offset="0%" stop-color="transparent" data-v-f0e2eb83></stop><stop offset="25%" stop-color="#0A1A6E" stop-opacity="0.6" data-v-f0e2eb83></stop><stop offset="50%" stop-color="#1944F0" stop-opacity="0.8" data-v-f0e2eb83></stop><stop offset="75%" stop-color="#0A1A6E" stop-opacity="0.6" data-v-f0e2eb83></stop><stop offset="100%" stop-color="transparent" data-v-f0e2eb83></stop></linearGradient></defs></svg></div><div class="neon-chevron neon-chevron--3" data-v-f0e2eb83><svg viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" data-v-f0e2eb83><path d="M0 52 L600 152 L1200 52" fill="none" stroke="url(#neonGrad3)" stroke-width="1" data-v-f0e2eb83></path><defs data-v-f0e2eb83><linearGradient id="neonGrad3" x1="0%" y1="0%" x2="100%" y2="0%" data-v-f0e2eb83><stop offset="0%" stop-color="transparent" data-v-f0e2eb83></stop><stop offset="35%" stop-color="#1944F0" stop-opacity="0.4" data-v-f0e2eb83></stop><stop offset="50%" stop-color="#7B8AF7" stop-opacity="0.6" data-v-f0e2eb83></stop><stop offset="65%" stop-color="#1944F0" stop-opacity="0.4" data-v-f0e2eb83></stop><stop offset="100%" stop-color="transparent" data-v-f0e2eb83></stop></linearGradient></defs></svg></div></div><div class="neon-particle neon-particle--1" data-v-f0e2eb83></div><div class="neon-particle neon-particle--2" data-v-f0e2eb83></div><div class="neon-particle neon-particle--3" data-v-f0e2eb83></div><div class="neon-particle neon-particle--4" data-v-f0e2eb83></div><div class="neon-particle neon-particle--5" data-v-f0e2eb83></div><div class="neon-particle neon-particle--6" data-v-f0e2eb83></div><div class="hero-container" data-v-f0e2eb83>`);
        _push(ssrRenderComponent(_component_Motion, mergeProps(enterMotion(0.1), { class: "hero-logo-wrapper" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="INNOTEC" class="hero-logo" data-v-f0e2eb83${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "INNOTEC",
                  class: "hero-logo"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Motion, mergeProps(enterMotion(0.25), { class: "hero-title-wrapper" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h1 class="hero-title" data-v-f0e2eb83${_scopeId}>${ssrInterpolate(unref(heroTitle).primary)} `);
              if (unref(heroTitle).secondary) {
                _push2(`<br data-v-f0e2eb83${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(heroTitle).secondary) {
                _push2(`<span class="hero-title-gradient" data-v-f0e2eb83${_scopeId}>${ssrInterpolate(unref(heroTitle).secondary)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</h1>`);
            } else {
              return [
                createVNode("h1", { class: "hero-title" }, [
                  createTextVNode(toDisplayString(unref(heroTitle).primary) + " ", 1),
                  unref(heroTitle).secondary ? (openBlock(), createBlock("br", { key: 0 })) : createCommentVNode("", true),
                  unref(heroTitle).secondary ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "hero-title-gradient"
                  }, toDisplayString(unref(heroTitle).secondary), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Motion, mergeProps(enterMotion(0.4), { class: "hero-desc-wrapper" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="hero-description" data-v-f0e2eb83${_scopeId}>${ssrInterpolate(unref(page).description)}</p>`);
            } else {
              return [
                createVNode("p", { class: "hero-description" }, toDisplayString(unref(page).description), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Motion, mergeProps(enterMotion(0.55), { class: "hero-countdown-wrapper" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CountdownTimer, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CountdownTimer)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section><section id="acerca" class="innotec-section intro-section" data-v-f0e2eb83><div class="neon-accent neon-accent--left" data-v-f0e2eb83></div><div class="neon-accent neon-accent--right" data-v-f0e2eb83></div><div class="section-container" data-v-f0e2eb83>`);
        _push(ssrRenderComponent(_component_Motion, mergeProps(scrollMotion(), { class: "intro-content" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="intro-heading-panel" data-v-f0e2eb83${_scopeId}><h2 class="section-title" data-v-f0e2eb83${_scopeId}> ¿Qué es Innotec? </h2><div class="intro-concepts" aria-label="Conceptos clave de Innotec" data-v-f0e2eb83${_scopeId}><div class="intro-concept" data-v-f0e2eb83${_scopeId}><span class="intro-concept-key" data-v-f0e2eb83${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f0e2eb83${_scopeId}><path d="M15 14c.2-1 .7-1.7 1.5-2.5a4.9 4.9 0 1 0-6.9 0c.7.8 1.2 1.5 1.4 2.5" data-v-f0e2eb83${_scopeId}></path><path d="M9 18h6" data-v-f0e2eb83${_scopeId}></path><path d="M10 22h4" data-v-f0e2eb83${_scopeId}></path></svg></span><span data-v-f0e2eb83${_scopeId}>Innovación</span></div><div class="intro-concept" data-v-f0e2eb83${_scopeId}><span class="intro-concept-key" data-v-f0e2eb83${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f0e2eb83${_scopeId}><path d="M16 7a4 4 0 0 1 0 8" data-v-f0e2eb83${_scopeId}></path><path d="M8 7a4 4 0 0 0 0 8" data-v-f0e2eb83${_scopeId}></path><circle cx="12" cy="12" r="3" data-v-f0e2eb83${_scopeId}></circle><path d="M12 5v2" data-v-f0e2eb83${_scopeId}></path><path d="M12 17v2" data-v-f0e2eb83${_scopeId}></path></svg></span><span data-v-f0e2eb83${_scopeId}>Colaboración</span></div><div class="intro-concept" data-v-f0e2eb83${_scopeId}><span class="intro-concept-key" data-v-f0e2eb83${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-f0e2eb83${_scopeId}><path d="m4 21 8-18 8 18" data-v-f0e2eb83${_scopeId}></path><path d="M8 13h8" data-v-f0e2eb83${_scopeId}></path></svg></span><span data-v-f0e2eb83${_scopeId}>Liderazgo</span></div></div></div><div class="intro-text" data-v-f0e2eb83${_scopeId}><p data-v-f0e2eb83${_scopeId}> INNOTEC es el congreso anual organizado por estudiantes de la Facultad de Ciencias y Tecnología de la Universidad Católica &quot;Nuestra Señora de la Asunción&quot; de Paraguay. </p><p data-v-f0e2eb83${_scopeId}> Es un espacio que fomenta la innovación, la colaboración y el desarrollo de nuevas ideas y soluciones tecnológicas entre estudiantes y profesionales expertos en las áreas de Tecnología, Ingeniería, Arquitectura y Diseño. Ampliando sus horizontes y preparándolos para liderar el cambio en sus respectivas áreas. </p><p data-v-f0e2eb83${_scopeId}> Cada edición se enfoca en temáticas relevantes basados en la innovación y la tecnología, brindando una plataforma de aprendizaje, colaboración y desarrollo de soluciones innovadoras. El INNOTEC conecta a los estudiantes con expertos nacionales e internacionales. </p></div>`);
            } else {
              return [
                createVNode("div", { class: "intro-heading-panel" }, [
                  createVNode("h2", { class: "section-title" }, " ¿Qué es Innotec? "),
                  createVNode("div", {
                    class: "intro-concepts",
                    "aria-label": "Conceptos clave de Innotec"
                  }, [
                    createVNode("div", { class: "intro-concept" }, [
                      createVNode("span", { class: "intro-concept-key" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5a4.9 4.9 0 1 0-6.9 0c.7.8 1.2 1.5 1.4 2.5" }),
                          createVNode("path", { d: "M9 18h6" }),
                          createVNode("path", { d: "M10 22h4" })
                        ]))
                      ]),
                      createVNode("span", null, "Innovación")
                    ]),
                    createVNode("div", { class: "intro-concept" }, [
                      createVNode("span", { class: "intro-concept-key" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", { d: "M16 7a4 4 0 0 1 0 8" }),
                          createVNode("path", { d: "M8 7a4 4 0 0 0 0 8" }),
                          createVNode("circle", {
                            cx: "12",
                            cy: "12",
                            r: "3"
                          }),
                          createVNode("path", { d: "M12 5v2" }),
                          createVNode("path", { d: "M12 17v2" })
                        ]))
                      ]),
                      createVNode("span", null, "Colaboración")
                    ]),
                    createVNode("div", { class: "intro-concept" }, [
                      createVNode("span", { class: "intro-concept-key" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round"
                        }, [
                          createVNode("path", { d: "m4 21 8-18 8 18" }),
                          createVNode("path", { d: "M8 13h8" })
                        ]))
                      ]),
                      createVNode("span", null, "Liderazgo")
                    ])
                  ])
                ]),
                createVNode("div", { class: "intro-text" }, [
                  createVNode("p", null, ' INNOTEC es el congreso anual organizado por estudiantes de la Facultad de Ciencias y Tecnología de la Universidad Católica "Nuestra Señora de la Asunción" de Paraguay. '),
                  createVNode("p", null, " Es un espacio que fomenta la innovación, la colaboración y el desarrollo de nuevas ideas y soluciones tecnológicas entre estudiantes y profesionales expertos en las áreas de Tecnología, Ingeniería, Arquitectura y Diseño. Ampliando sus horizontes y preparándolos para liderar el cambio en sus respectivas áreas. "),
                  createVNode("p", null, " Cada edición se enfoca en temáticas relevantes basados en la innovación y la tecnología, brindando una plataforma de aprendizaje, colaboración y desarrollo de soluciones innovadoras. El INNOTEC conecta a los estudiantes con expertos nacionales e internacionales. ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section><div class="section-divider" data-v-f0e2eb83></div><section id="acerca-objetivos" class="innotec-section objectives-section" data-v-f0e2eb83><div class="section-container objectives-content" data-v-f0e2eb83>`);
        _push(ssrRenderComponent(_component_Motion, mergeProps(scrollMotion(), { class: "section-header" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 class="section-title" data-v-f0e2eb83${_scopeId}> ¿Cuáles son sus<br data-v-f0e2eb83${_scopeId}>objetivos y actividades? </h2>`);
            } else {
              return [
                createVNode("h2", { class: "section-title" }, [
                  createTextVNode(" ¿Cuáles son sus"),
                  createVNode("br"),
                  createTextVNode("objetivos y actividades? ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Motion, mergeProps(scrollMotion(0.15), { class: "objectives-list" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="objectives-kicker" data-v-f0e2eb83${_scopeId}> Con la Innotec se busca: </p><ul class="objectives-ul" data-v-f0e2eb83${_scopeId}><li data-v-f0e2eb83${_scopeId}><span class="obj-icon" data-v-f0e2eb83${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f0e2eb83${_scopeId}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" data-v-f0e2eb83${_scopeId}></path></svg></span> Fomentar la innovación, la creatividad y el crecimiento personal y profesional en las áreas de ingeniería, arquitectura y diseño. </li><li data-v-f0e2eb83${_scopeId}><span class="obj-icon" data-v-f0e2eb83${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f0e2eb83${_scopeId}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" data-v-f0e2eb83${_scopeId}></path></svg></span> Brindar una plataforma de intercambio de conocimientos y experiencias en el ámbito científico y tecnológico. </li><li data-v-f0e2eb83${_scopeId}><span class="obj-icon" data-v-f0e2eb83${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-v-f0e2eb83${_scopeId}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" data-v-f0e2eb83${_scopeId}></path></svg></span> Inspirar a los jóvenes estudiantes a explorar nuevas posibilidades en sus respectivas carreras, fuera del aula. </li></ul>`);
            } else {
              return [
                createVNode("p", { class: "objectives-kicker" }, " Con la Innotec se busca: "),
                createVNode("ul", { class: "objectives-ul" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "obj-icon" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        createVNode("path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" })
                      ]))
                    ]),
                    createTextVNode(" Fomentar la innovación, la creatividad y el crecimiento personal y profesional en las áreas de ingeniería, arquitectura y diseño. ")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "obj-icon" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        createVNode("path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" })
                      ]))
                    ]),
                    createTextVNode(" Brindar una plataforma de intercambio de conocimientos y experiencias en el ámbito científico y tecnológico. ")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "obj-icon" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        height: "18",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        createVNode("path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" })
                      ]))
                    ]),
                    createTextVNode(" Inspirar a los jóvenes estudiantes a explorar nuevas posibilidades en sus respectivas carreras, fuera del aula. ")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Motion, mergeProps({ id: "actividades" }, scrollMotion(0.25), { class: "activities-intro" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="activities-label" data-v-f0e2eb83${_scopeId}> Y este año ofrece tres actividades: </p>`);
            } else {
              return [
                createVNode("p", { class: "activities-label" }, " Y este año ofrece tres actividades: ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="features-grid" data-v-f0e2eb83><!--[-->`);
        ssrRenderList(unref(page).features.items, (feature, index2) => {
          _push(ssrRenderComponent(_component_Motion, mergeProps({
            key: feature.title
          }, { ref_for: true }, staggerMotion(index2)), {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="feature-card" data-v-f0e2eb83${_scopeId}><figure class="${ssrRenderClass([`feature-card-media--${index2}`, "feature-card-media"])}" data-v-f0e2eb83${_scopeId}><img${ssrRenderAttr("src", getActivityImage(index2).src)}${ssrRenderAttr("alt", getActivityImage(index2).alt)} class="feature-card-image" loading="lazy" decoding="async" data-v-f0e2eb83${_scopeId}></figure><h3 class="feature-card-title" data-v-f0e2eb83${_scopeId}>${ssrInterpolate(feature.title)}</h3><p class="feature-card-desc" data-v-f0e2eb83${_scopeId}>${ssrInterpolate(feature.description)}</p><div class="feature-card-glow" data-v-f0e2eb83${_scopeId}></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "feature-card" }, [
                    createVNode("figure", {
                      class: ["feature-card-media", `feature-card-media--${index2}`]
                    }, [
                      createVNode("img", {
                        src: getActivityImage(index2).src,
                        alt: getActivityImage(index2).alt,
                        class: "feature-card-image",
                        loading: "lazy",
                        decoding: "async"
                      }, null, 8, ["src", "alt"])
                    ], 2),
                    createVNode("h3", { class: "feature-card-title" }, toDisplayString(feature.title), 1),
                    createVNode("p", { class: "feature-card-desc" }, toDisplayString(feature.description), 1),
                    createVNode("div", { class: "feature-card-glow" })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></section><div class="section-divider" data-v-f0e2eb83></div><section id="inscripcion" class="innotec-section cta-section" data-v-f0e2eb83><div class="cta-bg-glow" data-v-f0e2eb83></div><div class="section-container cta-container" data-v-f0e2eb83>`);
        _push(ssrRenderComponent(_component_Motion, mergeProps(scrollMotion(), { class: "cta-content" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="section-label" data-v-f0e2eb83${_scopeId}>¿Listo para unirte?</span><h2 class="cta-title" data-v-f0e2eb83${_scopeId}>${ssrInterpolate(unref(page).cta.title)}</h2><p class="cta-description" data-v-f0e2eb83${_scopeId}>${ssrInterpolate(unref(page).cta.description)}</p><div class="cta-date-chip" data-v-f0e2eb83${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="chip-icon" viewBox="0 0 20 20" fill="currentColor" data-v-f0e2eb83${_scopeId}><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" data-v-f0e2eb83${_scopeId}></path></svg> ${ssrInterpolate(unref(page).cta.command)}</div><div class="cta-actions" data-v-f0e2eb83${_scopeId}><!--[-->`);
              ssrRenderList(unref(page).cta.links, (link) => {
                _push2(`<a${ssrRenderAttr("href", link.to)} class="hero-btn hero-btn--primary cta-btn" data-v-f0e2eb83${_scopeId}>${ssrInterpolate(link.label)}</a>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("span", { class: "section-label" }, "¿Listo para unirte?"),
                createVNode("h2", { class: "cta-title" }, toDisplayString(unref(page).cta.title), 1),
                createVNode("p", { class: "cta-description" }, toDisplayString(unref(page).cta.description), 1),
                createVNode("div", { class: "cta-date-chip" }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "chip-icon",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                      "clip-rule": "evenodd"
                    })
                  ])),
                  createTextVNode(" " + toDisplayString(unref(page).cta.command), 1)
                ]),
                createVNode("div", { class: "cta-actions" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(page).cta.links, (link) => {
                    return openBlock(), createBlock("a", {
                      key: link.label,
                      href: link.to,
                      class: "hero-btn hero-btn--primary cta-btn"
                    }, toDisplayString(link.label), 9, ["href"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f0e2eb83"]]);

export { index as default };
//# sourceMappingURL=index-BlgLb6bP.mjs.map
