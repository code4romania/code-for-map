<template>
  <!-- Main Partners logo -->
  <b-row class="d-flex align-items-center justify-content-center">
    <b-col
      cols="4"
      md="3"
      lg="2"
      class="d-flex align-items-center justify-content-center py-3"
      v-for="partener in main_Partners"
      :key="partener.id"
    >
      <img class="img-fluid" :src="partener.logo" :alt="partener.name" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "MainPartners",
  props: {
    main_Partners: {
      type: Array
    }
  }
};
</script>
