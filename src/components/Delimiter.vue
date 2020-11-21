<template>
  <b-col cols="12" class="p-0 m-0">
    <img class="img-fluid w-100" :src="delimiter" />
  </b-col>
</template>

<script>
export default {
  name: "Delimiter",
  props: {
    delimiter: String
  }
};
</script>

<style></style>
