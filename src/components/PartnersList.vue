<template>
  <b-row :class="col ? 'row-cols-sm-3 row-cols-md-' + col : ''">
    <template v-for="partner in list">
      <b-col :key="'partner-' + partner.id">
        <a
          :href="partner.link"
          target="_blank"
          :title="partner.name"
          class="PartnersList-itemWrap d-block border border-gray mb-4"
        >
          <div class="PartnersList-item">
            <img
              class="img-fluid"
              :src="partner.logo"
              :alt="partner.name"
            >
          </div>
        </a>
      </b-col>
    </template>
  </b-row>
</template>

<script>
export default {
  name: "PartnersList",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    col: {
      type: Number,
      default: 1
    }
  }
};
</script>
