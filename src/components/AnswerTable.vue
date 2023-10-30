<template>
  <div class="mainDiv">
    <div v-if="context">
      <Card>
        <template #title>
          <slot name="card-title"> Votacion Activa </slot>
        </template>
        <template #content>
          <h3>{{ context.voteInfo.question }}</h3>
          <h4>Opción de Respuesta</h4>
          <h6 v-for="(value, index) in context.voteInfo.choices" :key="index">
            {{ value.id }}. {{ value.answer }}
          </h6>
        </template>
      </Card>
      <div class="card">
        <DataTable :value="context.results" tableStyle="min-width: 50rem">
          <slot name="Table-Cols">
            <Column field="id" header="Id"></Column>
            <Column field="answer" header="Respuesta"></Column>
            <Column field="count" header="Personas"></Column>
            <Column field="porcent" header="Porcentaje"></Column>
          </slot>
        </DataTable>
      </div>
    </div>
    <div v-else>cargando...</div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
const props = defineProps({
  context: {
    type: Object,
    required: false,
    default: () => {},
  },
});
// const context = props.context;

// context.percentage = 50;
</script>

<style>
.mainDiv {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
