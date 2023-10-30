<template>
  <h3>PERCENTAGE</h3>
  <h1>{{ context.percentage }}</h1>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  context: {
    type: Object,
    required: false,
    default: () => {},
  },
});
</script>
