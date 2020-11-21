<template>
  <div>
    <!-- Main map button links to highway -->
    <router-link
      :to="{ name: 'Highway', params: { slug: highway.slug } }"
      class="badge-pill btn bg-white scale btn-fade py-0"
      :class="`btn-outline-${highway.color}`"
      :style="{
        position: 'absolute',
        top: top,
        left: left
      }"
    >
      <div class="d-flex align-items-center">
        <img class="img-fluid mr-1 mr-lg-2" :src="highway.logo" />
        <p class="small text-dark font-weight-bold p-0 m-0 text-left d-block">
          {{ highway.title }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  /** Component name. */
  name: "MapButtonAndHighway",
  /** Recived props. */
  props: {
    highway: Object,
    top: String,
    left: String,
    color: String
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
@media screen and (max-width: 767px) {
  .btn {
    width: 100%;
    max-width: 120px !important;
    border-width: 3px !important;
    padding: 3px 3px !important;
  }
}
</style>
