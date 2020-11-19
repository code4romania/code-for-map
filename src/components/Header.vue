<template>
  <div>
    <h1 class="mb-3">{{ header.title }}</h1>
    <p>{{ header.description }}</p>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    header: {
      type: Object
    }
  }
};
</script>

<style></style>
