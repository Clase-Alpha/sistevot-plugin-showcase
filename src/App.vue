<template>
  <Suspense>
    <div class="main">
      <AsyncApp></AsyncApp>
    </div>
  </Suspense>
</template>

<script setup>
import AsyncApp from "./AsyncApp.vue";
</script>

<style>
.main {
  display: flex;
  gap: 10px;
}
.buttonGrp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  color: white;
}
</style>
