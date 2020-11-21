<template>
  <div>
    <!-- Main map button links to highway -->
    <router-link
      :to="{ name: 'Highway', params: { slug: highway.slug } }"
      class="badge-pill btn bg-white scale d-none d-md-block MapButton"
      :class="`btn-outline-${highway.btn.color}`"
      :style="{
        position: 'absolute',
        top: highway.btn.top,
        left: highway.btn.left
      }"
    >
      <div class="d-flex align-items-center">
        <img class="img mr-2 MapButton-icon" :src="highway.logo" />
        <p
          class="small text-dark font-weight-bold p-0 m-0 text-left d-block MapButton-label"
        >
          {{ highway.title }}
        </p>
      </div>
    </router-link>

    <router-link
      :to="{ name: 'Highway', params: { slug: highway.slug } }"
      class="badge-pill btn bg-white scale d-block d-md-none MapButton"
      :class="`btn-outline-${highway.btn.color}`"
      :style="{
        position: 'absolute',
        top: highway.mobile_btn.top,
        left: highway.mobile_btn.left
      }"
    >
      <div class="d-flex align-items-center">
        <img class="img mr-2 MapButton-icon" :src="highway.logo" />
        <p
          class="small text-dark font-weight-bold p-0 m-0 text-left d-block MapButton-label"
        >
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
    highway: {
      type: Object
    }
  }
};
</script>
