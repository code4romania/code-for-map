<template>
  <b-row>
    <b-col cols="12">
      <p class="py-3">{{ description }}</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  /**Component name. */
  name: "CallToActionText",
  props: {
    description: {
      type: String
    }
  }
};
</script>
