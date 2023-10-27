<template>
  <div class="mainDiv">
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
</template>

<script>
import { defineAsyncComponent, defineComponent, toRefs } from "vue";
// const voteInfo = ref("");
// const results = ref();

// const componentState = reactive({
//   voteInfo: dataService.getVoteInfo(),
//   results: dataService.getresults(),
// });

// onMounted(() => {
//   voteInfo.value = dataService.getVoteInfo();
//   dataService.getresults().then((data) => (results.value = data));
// });

export default defineAsyncComponent({
  name: "AnswerTable",
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log(props);
    const { context } = toRefs(props);
    console.log(context);
    return {
      context,
    };
  },
});
</script>

<style>
.mainDiv {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
