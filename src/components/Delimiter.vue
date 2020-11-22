<template>
  <div class="Delimiter my-4">
    <img class="img-fluid h-100" :src="delimiter" />
  </div>
</template>

<script>
export default {
  name: "Delimiter",
  props: {
    delimiter: String
  }
};
</script>

<style>
.Delimiter {
  height: 50px;
  width: 100%;
}
</style>
