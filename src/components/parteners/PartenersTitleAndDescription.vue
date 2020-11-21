<template>
  <b-row>
    <b-col cols="12">
      <!-- Parteners title && description -->
      <h1 class="text-center text-primary">{{ title }}</h1>
      <p class="pt-2">{{ description }}</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "PartenersTitleAndDescription",
  props: {
    title: String,
    description: String
  }
};
</script>
