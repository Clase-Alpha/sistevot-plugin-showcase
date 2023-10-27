<template>
  <component
    :is="getDynamicComponent('AnswerTable')"
    :context="context"
  ></component>
  <!-- //Por defecto resultados o lo que diga el plugin -->
</template>

<script>
import { watch, defineAsyncComponent, defineComponent, reactive } from "vue";
import { usePluginsStore } from "../stores/pluginsStore";
import { useApi } from "../api/api";
import * as plugins from "../plugins/plugins.js";
import { dataService } from "../service/dataService.js";
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
    async function getDynamicComponent(id) {
      const defaultComponent = await defineAsyncComponent(() =>
        import(`../components/${id}.vue`)
      );

      if (api.replaceVoteViewComponents[id]) {
        let pluginComponent = api.replaceVoteViewComponents[id];
        pluginComponent.applyContext(context);
      }
      return defaultComponent;
    }
    watch(context, (newVal, oldVal) => {
      // context.percentage = Math.round(
      //   (newVal.voteInfo.totalVotes / newVal.voteInfo.totalVoters) * 100
      // );
      console.log("Context changed", newVal, oldVal);
    });
    return {
      context,
      getDynamicComponent,
      api,
    };
  },
});
</script>

<style></style>
