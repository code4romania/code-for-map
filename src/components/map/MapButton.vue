<template>
  <!-- Main map button links to highway -->
  <router-link
    :to="{ name: 'Highway', params: { slug: highway.slug } }"
    class="badge-pill btn bg-white scale btn-fade py-0"
    :class="`btn-outline-${highway.btn.color}`"
    :style="{
      position: 'absolute',
      top: highway.btn.top,
      left: highway.btn.left
    }"
  >
    <div class="d-flex align-items-center">
      <img class="img-fluid mr-2" :src="highway.logo" />
      <p class="small text-dark font-weight-bold p-0 m-0 text-left d-block">
        {{ highway.title }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  /** Component name. */
  name: "MapButtonAndHighway",
  /** Recived props. */
  props: {
    highway: {
      type: Object
    }
  }
};
</script>

<style scoped>
/** Map button styles specific ti this component. */
.btn {
  width: 100%;
  max-width: 135px !important;
  border-width: 5px !important;
  padding: 3px 5px !important;
}
</style>
