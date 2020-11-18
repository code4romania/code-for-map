<template>
  <router-link
    :to="{ name: 'Highway' }"
    class="badge-pill btn bg-white scale btn-fade py-0"
    :class="`btn-outline-${solution_button.btn.color}`"
    :style="{
      position: 'absolute',
      top: solution_button.btn.top,
      left: solution_button.btn.left,
    }"
  >
    <div class="d-flex align-items-center">
      <img class="mx-1" :src="solution_button.icon" alt="" />
      <p class="small text-dark font-weight-bold p-0 m-0 text-left d-block">
        {{ solution_button.btn.title }}
      </p>
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

<style scoped>
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
.btn {
  width: 100%;
  max-width: 180px !important;
  border-width: 2px !important;
  padding: 3px 5px !important;
}
</style>
