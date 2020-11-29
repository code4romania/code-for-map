<template>
  <div class="Delimiter my-4">
    <img
      class="icon icon-lg"
      :src="
        require(`../../assets/svg/illustrations/
                    ${color ? color : 'default'}
                    .svg`)
      "
    />
  </div>
</template>

<script>
export default {
  name: "Delimiter",
  props: {
    color: {
      type: String,
      default: "strong-blue",
    },
  },
};
</script>

<style>
.Delimiter {
  height: 50px;
  width: 100%;
}
</style>
