<template>
  <component :is="getDynamicComponent('AnswerTable')"></component>
  <!-- //Por defecto resultados o lo que diga el plugin -->
</template>

<script setup>
import {
  ref,
  onBeforeMount,
  getCurrentInstance,
  defineAsyncComponent,
} from "vue";
import { usePluginsStore } from "../stores/pluginsStore";
import { useApi } from "../api/api";
import * as plugins from "../plugins/plugins.js";
const api = useApi();
const pluginsStore = usePluginsStore();

onBeforeMount(() => {});
const getDynamicComponent = (id) => {
  const defaultComponent = defineAsyncComponent(() =>
    import(`../components/${id}.vue`)
  );
  if (api.replaceVoteViewComponents[id]) {
    let pluginComponent = api.replaceVoteViewComponents[id];
    pluginComponent.applyContext();
  }
};
const activePlugin = () => {
  console.log("adasda");
  pluginsStore.plugins.plugin1.isActive =
    !pluginsStore.plugins.plugin1.isActive;
};
</script>

<style></style>
