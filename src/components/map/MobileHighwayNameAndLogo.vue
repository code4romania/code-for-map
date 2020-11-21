<template>
  <div class="HighwayName px-4">
    <div class="d-flex align-items-center HighwayName-logo mb-4">
      <img :src="logo" />
      <h2 class="ml-2 mb-0">{{ title }}</h2>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "MobileHighwayNameAndLogo",
  props: {
    logo: String,
    title: String,
    description: String
  }
};
</script>
