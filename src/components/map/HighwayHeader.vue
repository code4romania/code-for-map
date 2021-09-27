<template>
  <div class="lg:hidden">
    <div class="flex items-center mb-3">
      <img
        class="w-12 h-12"
        :src="require(`../../assets/svg/icons/logo-${slug}.svg`)"
      >
      <h2
        class="ml-4 font-bold text-2xl"
        v-html="$t(`${slug}.title`)"
      />
    </div>
    <p
      v-if="$t(`${slug}.description`)"
      class="mb-8"
      v-html="$t(`${slug}.description`)"
    />
  </div>
</template>

<script>
export default {
  name: "HighwayHeader",
  props: {
    slug: {
      type: String,
      default: "",
    }
  },
};
</script>
