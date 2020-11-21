<template>
  <!-- Scondary Partners logo -->
  <b-row>
    <b-col
      cols="3"
      md="2"
      class="d-flex align-items-center justify-content-center py-3"
      v-for="partener in secondary_Partners"
      :key="partener.id"
    >
      <img class="img-fluid" :src="partener.logo" :alt="partener.name" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SecondaryPartners",
  props: {
    secondary_Partners: {
      type: Array
    }
  }
};
</script>
