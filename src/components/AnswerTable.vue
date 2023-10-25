<template>
  <div class="mainDiv">
    <Card>
      <template #title>
        <slot name="card-title"> Votacion Activa </slot>
      </template>
      <template #content>
        <h3>{{ voteInfo.question }}</h3>
        <h4>Opción de Respuesta</h4>
        <h6 v-for="(value, index) in voteInfo.choices" :key="index">
          {{ value.id }}. {{ value.answer }}
        </h6>
      </template>
    </Card>
    <div class="card">
      <DataTable :value="results" tableStyle="min-width: 50rem">
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
import { ref, onMounted, reactive } from "vue";
import { dataService } from "../service/dataService";

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

export default {
  data(){
    return {
      context {

      }
    }
  }
};
</script>

<style>
.mainDiv {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
