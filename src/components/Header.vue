<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" lg="9" class="my-4 px-5">
        <h1>{{ header.title }}</h1>
        <p>{{ header.text }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  /** Component name. */
  name: "Header",
  /** Recived object props from App. */
  props: {
    header: {
      type: Object
    }
  }
};
</script>
