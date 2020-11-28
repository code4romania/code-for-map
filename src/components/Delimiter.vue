<template>
  <div class="Delimiter my-4">
    <svg class="delimiter"><use :xlink:href="'#delimiter-' + color ? color : 'default'" /></svg>
  </div>
</template>

<script>
export default {
  name: "Delimiter",
  props: {
    color: {
      type: String,
      default: "strong-blue"
    }
  }
};
</script>

<style>
.Delimiter {
  height: 50px;
  width: 100%;
}
</style>
