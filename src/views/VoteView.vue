<template>
  <percentageView :context="context"></percentageView>
  <component
    :is="getDynamicComponent('AnswerTable')"
    :context="context"
  ></component>
  <!-- //Por defecto resultados o lo que diga el plugin -->
</template>

<script async setup>
import { watch, defineAsyncComponent, reactive } from "vue";
import { usePluginsStore } from "../stores/pluginsStore";
import { useApi } from "../api/api";
import * as plugins from "../plugins/plugins.js";
import { dataService } from "../service/dataService.js";
import percentageView from "../components/Percentage.vue";
// const pluginsStore = usePluginsStore();

const api = useApi();
const context = reactive({
  voteInfo: dataService.getVoteInfo(),
  percentage: 0,
  results: await dataService.getresults(),
  modifyData(newData) {
    context.voteInfo = newData;
  },
});
const getDynamicComponent = (id) => {
  return (
    api.replaceVoteViewComponents[id] ||
    defineAsyncComponent(() => import(`../components/${id}.vue`))
  );
};
watch(context, (newVal, oldVal) => {
  // context.percentage = Math.round(
  //   (newVal.voteInfo.totalVotes / newVal.voteInfo.totalVoters) * 100
  // );
  console.log("Context changed", newVal, oldVal);
});
</script>

<style></style>
