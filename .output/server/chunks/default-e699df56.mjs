import { ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="e1_2"><div class="e1_3"></div><span class="e1_4">Ingresso Digital</span><div class="e2_137"><div class="e2_31"></div><div class="e2_36"><div class="e2_32"></div><div class="e2_33"></div><div class="e2_34"></div><div class="e2_35"></div></div></div><div class="e2_96"></div><div class="e2_55"><div class="e1_5"></div><div class="e1_10"><div class="e1_6"></div><div class="e1_7"></div><div class="e1_9"></div></div><span class="e1_14">R$ 299,90</span><div class="e1_15"></div><span class="e1_30">Ir para pagamento</span><span class="e1_13">COMBO 01</span></div><div class="e3_132"><div class="e3_129"></div><div class="e3_130"></div><span class="e3_131">BUSCAR</span></div><div class="e3_320"><div class="e2_86"><div class="ei2_86_1_5"></div><div class="ei2_86_1_10"><div class="ei2_86_1_6"></div><div class="ei2_86_1_7"></div><div class="ei2_86_1_9"></div></div><span class="ei2_86_1_14">R$ 299,90</span><div class="ei2_86_1_15"></div><span class="ei2_86_1_30">Ir para pagamento</span><span class="ei2_86_1_13">COMBO 02</span></div></div><div class="e3_319"><div class="e2_76"><div class="ei2_76_1_5"></div><div class="ei2_76_1_10"><div class="ei2_76_1_6"></div><div class="ei2_76_1_7"></div><div class="ei2_76_1_9"></div></div><span class="ei2_76_1_14">R$ 299,90</span><div class="ei2_76_1_15"></div><span class="ei2_76_1_30">Ir para pagamento</span><span class="ei2_76_1_13">COMBO 03</span></div></div></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-e699df56.mjs.map
