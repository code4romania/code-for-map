<template>
  <div class="HighwayName px-4 d-lg-none">
    <div class="d-flex align-items-center HighwayName-logo mb-3">
      <svg class="icon icon-lg"><use :xlink:href="'#logo-' + logo"></use></svg>
      <h2 class="ml-3 mb-0">{{ title }}</h2>
    </div>
    <p class="d-lg-none mb-4">{{ description }}</p>
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
