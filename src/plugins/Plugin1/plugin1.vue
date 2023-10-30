<template>
  <div></div>
  <answertable :context="context">
    <template #card-title> Votacion Activa Plugin1 </template>
    <template #Table-Cols>
      <Column field="answer" header="Respuesta2"></Column>
      <Column field="count" header="Personas3"></Column>
      <Column field="porcent" header="Porcentaje4"></Column>
    </template>
  </answertable>
</template>

<script setup>
import { reactive } from "vue";
import answertable from "../../components/AnswerTable.vue";

const props = defineProps({
  context: {
    type: Object,
    required: false,
    default: {},
  },
});

const context = props.context;

setTimeout(() => {
  context.percentage = 50;
}, 10000);
</script>
