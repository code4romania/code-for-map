<template>
  <div class="grid grid-cols-3 md:grid-cols-6 gap-8">
    <template v-for="partner in list">
      <div :key="'partner-' + (partner.id * Math.random() * 10)">
        <a
          :href="partner.link"
          target="_blank"
          :title="partner.name"
          class="PartnersList-itemWrap block border"
        >
          <div class="aspect-w-1 aspect-h-1">
            <div class="flex justify-center align-center">
              <img
                class="object-contain"
                :src="partner.logo"
                :alt="partner.name"
              >
            </div>
          </div>
        </a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "PartnersList",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>
