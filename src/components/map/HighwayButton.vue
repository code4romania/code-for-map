<template>
  <!-- Map highway solutions button links -->
  <router-link
    :to="{ name: 'Highway' }"
    class="badge-pill btn bg-white scale btn-fade py-0"
    :class="`btn-outline-${color}`"
    :style="{
      position: 'absolute',
      top: solution_button.btn.top,
      left: solution_button.btn.left
    }"
  >
    <div class="d-flex align-items-center" v-if="solution_button.icon_left">
      <img class="mx-1" :src="solution_button.icon" alt="" />
      <p class="small text-dark font-weight-bold p-0 m-0 text-left d-block">
        {{ solution_button.title }}
      </p>
    </div>
    <div class="d-flex align-items-center" v-else>
      <span class="small text-dark font-weight-bold p-0 m-0 text-right">
        {{ solution_button.title }}
      </span>
      <img class="mx-1" :src="solution_button.icon" />
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

<style scoped>
/** Buttons fade in animation */
@keyframes example {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.btn-fade {
  animation-name: example;
  animation-duration: 0.35s;
}
/** Buttons styles specific to this component */
.btn {
  width: 100%;
  max-width: 190px !important;
  border-width: 2px !important;
  padding: 3px 5px !important;
}
</style>
