<template>
  <router-link :to="{ name: 'Map' }" class="BackToMap mb-4 d-inline-block" v-if="back.visible">
    <div class="d-flex align-items-center">
      <svg class="icon"><use xlink:href="#chevron-left"></use></svg>
      <div class="ml-2 text-primary border-bottom border-primary">
        {{ back.text }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BackToMap",
  props: {
    back: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.BackToMap {
  &:hover {
    text-decoration: none;
  }
}
</style>
