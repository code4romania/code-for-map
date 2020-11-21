<template>
  <!-- Map highway solutions button links -->
  <router-link
    :to="{ name: 'Highway' }"
    class="badge-pill btn bg-white scale btn-fade d-none d-lg-block HighwayButton"
    :class="`btn-outline-${color}`"
    :style="{ top: solution_button.btn.top, left: solution_button.btn.left }"
  >
    <div class="d-flex align-items-center" v-if="solution_button.icon_left">
      <img class="mr-2" :src="solution_button.icon" alt="" />
      <p class="small text-dark font-weight-bold p-0 m-0 text-left">
        {{ solution_button.title }}
      </p>
    </div>
    <div class="d-flex align-items-center" v-else>
      <p class="small text-dark font-weight-bold p-0 m-0 text-right">
        {{ solution_button.title }}
      </p>
      <img class="ml-2" :src="solution_button.icon" />
    </div>
  </router-link>
</template>

<script>
export default {
  /** Component name. */
  name: "HighwayButton",
  /** Recived props. */
  props: {
    solution_button: Object,
    color: String
  }
};
</script>
