<template>
  <h2>Specifict entry</h2>
  <p>id: {{ id }}</p>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      requird: true,
    },
  },
};
</script>

<style>
</style>