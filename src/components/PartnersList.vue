<template>
  <b-row :class="col ? 'row-cols-3 row-cols-md-' + col : ''">
    <template v-for="(partner, index) in list">
      <b-col :key="'partner-' + index">
        <a
          :href="partner.link"
          target="_blank"
          :title="partner.name"
          class="PartnersList-itemWrap d-block border border-gray mb-4"
        >
          <div class="PartnersList-item">
            <img
              class="img-fluid"
              :src="partner.image?.url"
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
