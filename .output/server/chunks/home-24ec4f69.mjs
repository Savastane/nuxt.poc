import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import { useSSRContext, defineComponent, reactive, computed, mergeProps, resolveComponent, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc } from './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$4 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation]
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(ssrRenderComponent(_component_swiper, mergeProps({
    navigation: true,
    modules: $setup.modules,
    class: "mySwiper"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img className="object-fill w-full h-96" src="https://img.freepik.com/fotos-gratis/conceito-de-viagens-com-pontos-de-referencia_23-2149153256.jpg?w=1380&amp;t=st=1688352599~exp=1688353199~hmac=d5847246dafec0caa0e7a4f2b0845a9a9a973da2524b0fb451a4fcb4a978a9b0" alt="image slide 1"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  className: "object-fill w-full h-96",
                  src: "https://img.freepik.com/fotos-gratis/conceito-de-viagens-com-pontos-de-referencia_23-2149153256.jpg?w=1380&t=st=1688352599~exp=1688353199~hmac=d5847246dafec0caa0e7a4f2b0845a9a9a973da2524b0fb451a4fcb4a978a9b0",
                  alt: "image slide 1"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img className="object-fill w-full h-96" src="https://img.freepik.com/fotos-gratis/conceito-de-viagem-completo-com-pontos-de-referencia_23-2149153258.jpg?3&amp;w=1380&amp;t=st=1688352604~exp=1688353204~hmac=8c5b8f00571b9a742ff97a3bdce84ebb9917dd35f3b8028b2853a7a06fe51b36" alt="image slide 2"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  className: "object-fill w-full h-96",
                  src: "https://img.freepik.com/fotos-gratis/conceito-de-viagem-completo-com-pontos-de-referencia_23-2149153258.jpg?3&w=1380&t=st=1688352604~exp=1688353204~hmac=8c5b8f00571b9a742ff97a3bdce84ebb9917dd35f3b8028b2853a7a06fe51b36",
                  alt: "image slide 2"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img className="object-fill w-full h-96" src="https://img.freepik.com/fotos-premium/viajar-o-conceito-de-monumentos-do-mundo_117023-14.jpg" alt="image slide 3"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  className: "object-fill w-full h-96",
                  src: "https://img.freepik.com/fotos-premium/viajar-o-conceito-de-monumentos-do-mundo_117023-14.jpg",
                  alt: "image slide 3"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", {
                className: "object-fill w-full h-96",
                src: "https://img.freepik.com/fotos-gratis/conceito-de-viagens-com-pontos-de-referencia_23-2149153256.jpg?w=1380&t=st=1688352599~exp=1688353199~hmac=d5847246dafec0caa0e7a4f2b0845a9a9a973da2524b0fb451a4fcb4a978a9b0",
                alt: "image slide 1"
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", {
                className: "object-fill w-full h-96",
                src: "https://img.freepik.com/fotos-gratis/conceito-de-viagem-completo-com-pontos-de-referencia_23-2149153258.jpg?3&w=1380&t=st=1688352604~exp=1688353204~hmac=8c5b8f00571b9a742ff97a3bdce84ebb9917dd35f3b8028b2853a7a06fe51b36",
                alt: "image slide 2"
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("img", {
                className: "object-fill w-full h-96",
                src: "https://img.freepik.com/fotos-premium/viajar-o-conceito-de-monumentos-do-mundo_117023-14.jpg",
                alt: "image slide 3"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Carrossel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-blue-400 text-center text-2xl font-bold" }, _attrs))}><h1 class="p-3">Prova de Conceito NUXT </h1></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Titulo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  props: {
    fullName: {
      type: String,
      default: "",
      required: true
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pl-50 pr-50 m-5" }, _attrs))}><span><form><label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Pesquisa</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="searchTerm" id="searchTerm"${ssrRenderAttr("value", _ctx.searchTerm)} class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquisa" required><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pesquisa</button></div></form></span></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pesquisa.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  props: {
    urlimage: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    descricaobotao: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" }, _attrs))}><a href="#"><img class="rounded-t-lg"${ssrRenderAttr("src", $props.urlimage)} alt=""></a><div class="p-5"><a href="#"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${ssrInterpolate($props.titulo)}</h5></a><p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${ssrInterpolate($props.descricao)}</p><a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">${ssrInterpolate($props.descricaobotao)} <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Oferta.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
useHead({
  link: [
    {
      href: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css"
    }
  ],
  script: [
    {
      src: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"
    }
  ]
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup() {
    let Data = reactive({
      searchTerm: "",
      "itens": [
        {
          "urlimage": "https://img.freepik.com/fotos-gratis/full-shot-woman-travel-concept_23-2149153259.jpg?2&w=740&t=st=1688352631~exp=1688353231~hmac=943759d70e6e0eab32961eb3a0864d7b9dd06e19578624e99f485db735590e70",
          "titulo": "Viajando",
          "descricao": "Viajando o mundo podemos conhecer v\xE1rias culturas , tudo pode ser  t\xE3o diferente, contudo t\xE3o parecido",
          "descricaobotao": "Viajar",
          "index": 1
        },
        {
          "urlimage": "https://img.freepik.com/fotos-premium/full-shot-mulher-segurando-bagagem_23-2149153252.jpg?w=740",
          "titulo": "Derrubando as fronteiras",
          "descricao": "A fronteiras s\xE3o muros imagin\xE1rios, criados por homens que n\xE3o reconhecem que somos todos irm\xE3os",
          "descricaobotao": "Derrubar",
          "index": 2
        },
        {
          "urlimage": "https://as1.ftcdn.net/v2/jpg/03/60/70/92/1000_F_360709221_yndIPjdNo7XyRMZywELtlW6UrnyTIYj6.jpg",
          "titulo": "Para qu\xEA  a pressa!",
          "descricao": "N\xE3o percar os detalhes,  o som, as cores as pessoas, os olhares, o sol pode est\xE1 atr\xE1s dos coqueiros. respire!",
          "descricaobotao": "Devagar",
          "index": 2
        },
        {
          "urlimage": "https://img.freepik.com/fotos-gratis/viagem-de-aventura-com-bagagem_23-2149153255.jpg?w=740&t=st=1688355576~exp=1688356176~hmac=a0200a9df079e98e87934505bf39e3234fe1bed6399dad4e3909bb210159beab",
          "titulo": "Malas ou mochilas",
          "descricao": "Depende do meio transporte, fa\xE7a a escolha certa para usufluir do melhor de uma viagem",
          "descricaobotao": "mochilar",
          "index": 2
        }
      ]
    });
    var filteredCards = computed(() => {
      if (Data.searchTerm) {
        return Data.itens.filter((Oferta) => Oferta.titulo.toLowerCase().includes(Data.searchTerm.toLowerCase()));
      } else {
        return Data.itens;
      }
    });
    return {
      ...Data,
      filteredCards
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carrossel = __nuxt_component_0;
  const _component_Titulo = __nuxt_component_1;
  const _component_Pesquisa = __nuxt_component_2;
  const _component_Oferta = __nuxt_component_3;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="bg-blue-400">`);
  _push(ssrRenderComponent(_component_Carrossel, null, null, _parent));
  _push(`</div><div>`);
  _push(ssrRenderComponent(_component_Titulo, null, null, _parent));
  _push(`</div><div class="px-8 mx-auto bg-white h-30 w-30">`);
  _push(ssrRenderComponent(_component_Pesquisa, {
    searchTerm: _ctx.searchTerm,
    "onUpdate:searchTerm": ($event) => _ctx.searchTerm = $event
  }, null, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<section class="grid gap-3 grid-cols-3 bg-blue-400 p-8 my-10"><!--[-->`);
  ssrRenderList(_ctx.filteredCards, (item, index) => {
    _push(ssrRenderComponent(_component_Oferta, {
      key: index,
      titulo: item.titulo,
      descricao: item.descricao,
      descricaobotao: item.descricaobotao,
      urlimage: item.urlimage,
      class: "flex-grow items-center justify-center w-full h-full bg-gray-200"
    }, null, _parent));
  });
  _push(`<!--]--></section></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { home as default };
//# sourceMappingURL=home-24ec4f69.mjs.map
