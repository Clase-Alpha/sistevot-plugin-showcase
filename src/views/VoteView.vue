<template>
  <component :is="getDynamicComponent('AnswerTable')"></component>
  <!-- //Por defecto resultados o lo que diga el plugin -->
</template>

<script>
import {
  ref,
  onBeforeMount,
  getCurrentInstance,
  defineAsyncComponent,
  defineComponent,
} from "vue";
import { usePluginsStore } from "../stores/pluginsStore";
import { useApi } from "../api/api";
import * as plugins from "../plugins/plugins.js";
// const pluginsStore = usePluginsStore();

// const getDynamicComponent = (id) => {

// };

// const activePlugin = () => {
//   console.log("adasda");
//   pluginsStore.plugins.plugin1.isActive =
//     !pluginsStore.plugins.plugin1.isActive;
// };

export default defineComponent({
  setup() {
    const api = useApi();
    const context = reactive({
      voteInfo: dataService.getVoteInfo(),
      percentage: 0,
      modifyData(newData) {
        context.voteInfo = newData;
      },
    });
    function getDynamicComponent(id) {
      const defaultComponent = defineAsyncComponent(() =>
        import(`../components/${id}.vue`)
      );
      if (api.replaceVoteViewComponents[id]) {
        let pluginComponent = api.replaceVoteViewComponents[id];
        pluginComponent.applyContext(this.context);
      }
      return defaultComponent;
    }

    return {
      context,
      getDynamicComponent,
      api,
    };
  },
});
</script>

<style></style>
