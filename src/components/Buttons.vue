<template>
  <div class="my-3">
    <a href="" class="btn btn-primary px-lg-5 py-lg-2 mr-2">{{
      button.spread.text
    }}</a>
    <a href="" class="btn btn-primary px-lg-5 py-lg-2 mr-2">{{
      button.give.text
    }}</a>
    <a href="" class="btn btn-primary px-lg-5 py-lg-2 mr-2">{{
      button.adopt.text
    }}</a>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    button: {
      type: Object
    }
  }
};
</script>

<style></style>
