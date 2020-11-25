<template>
  <b-row :class="col ? 'row-cols-' + col : ''" >
    <template v-for="partner in list">
      <b-col :key="'partner-' + partner.id">
        <a :href="partner.link" target="_blank" :title="partner.name" class="d-block border border-gray mb-4">
          <img class="img-fluid" :src="partner.logo" :alt="partner.name" />
        </a>
      </b-col>
    </template>
  </b-row>
</template>

<script>
export default {
  name: "PartnersList",
  props: {
    list: Array,
    col: Number
  }
};
</script>
