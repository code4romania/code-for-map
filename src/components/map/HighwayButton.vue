<template>
  <router-link
    :to="{ name: 'Highway' }"
    class="text-decoration-none button d-flex align-items-center badge-pill btn bg-white scale pr-lg-3 pl-lg-2 fade1"
    :class="`btn-outline-${solution_button.btn.color}`"
    :style="{
      position: 'absolute',
      top: solution_button.btn.top,
      left: solution_button.btn.left,
    }"
  >
    <div class="ml-lg-2 d-flex flex-column p-0 m-0">
      <span class="align-self-start small text-dark font-weight-bold">
        {{ solution_button.btn.title }}
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    solution_button: {
      type: Object,
    },
  },
};
</script>

<style>
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
.fade1 {
  animation-name: example;
  animation-duration: 0.3s;
}
</style>
