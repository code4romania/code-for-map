<template>
  <div class="Delimiter my-4">
    <svg class="delimiter"><use :xlink:href="'#delimiter-' + color ? color : 'default'"></use></svg>
  </div>
</template>

<script>
export default {
  name: "Delimiter",
  props: {
    color: String
  }
};
</script>

<style>
.Delimiter {
  height: 50px;
  width: 100%;
}
</style>
