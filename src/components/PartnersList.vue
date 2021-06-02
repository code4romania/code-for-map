<template>
  <div class="grid grid-cols-6 gap-4 px-4">
    <template v-for="partner in list">
      <div :key="'partner-' + partner.id">
        <a
          :href="partner.link"
          target="_blank"
          :title="partner.name"
          class="PartnersList-itemWrap block border mb-4"
        >
          <div class="PartnersList-item">
            <img
              class="img-fluid"
              :src="partner.logo"
              :alt="partner.name"
            >
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
