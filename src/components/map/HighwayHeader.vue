<template>
  <div class="HighwayHeader d-lg-none">
    <div class="d-flex align-items-center HighwayHeader-logo mb-3">
      <svg class="icon icon-lg"><use :xlink:href="'#logo-' + logo"></use></svg>
      <h2 class="ml-3 mb-0">{{ title }}</h2>
    </div>
    <div class="d-lg-none mb-4" v-if="description" v-html="description"></div>
  </div>
</template>

<script>
export default {
  name: "HighwayHeader",
  props: {
    logo: String,
    title: String,
    description: String
  }
};
</script>
