<template>
  <div>
    <h5>{{ parteners.title }}</h5>
    <div class="d-flex">
      <div v-for="partener in parteners.parteners_arr" :key="partener.id">
        <img class="img-fluid" :src="partener.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /** Component name. */
  name: "Parteners",
  /** Recived object props from App. */
  props: {
    parteners: {
      type: Object,
    },
  },
};
</script>
