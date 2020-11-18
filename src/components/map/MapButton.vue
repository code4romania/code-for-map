<template>
  <router-link
    :to="{ name: 'Highway', params: { slug: highway.slug } }"
    class="text-decoration-none button d-flex align-items-center badge-pill btn bg-white scale pr-lg-3 pl-lg-2"
    :class="`btn-outline-${highway.btn.color}`"
    :style="{
      position: 'absolute',
      top: highway.btn.top,
      left: highway.btn.left,
      bottom: highway.btn.bottom,
      right: highway.btn.right,
    }"
  >
    <img class="img-fluid" :src="highway.logo" />
    <div class="ml-lg-2 d-flex flex-column p-0 m-0">
      <span class="align-self-start small text-dark font-weight-bold">
        {{ highway.btn.text_1 }}
      </span>
      <span class="align-self-start small text-dark font-weight-bold">
        {{ highway.btn.text_2 }}
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "MapButtonAndHighway",
  props: {
    highway: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.btn {
  border-width: 5px !important;
}
</style>
