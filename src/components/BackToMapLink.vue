<template>
  <b-col cols="12">
    <router-link
      :to="{ name: 'Map' }"
      class="d-flex align-items-center"
      style="text-decoration: none"
    >
      <img :src="back.icon" alt="" />
      <p class="p-0 m-0 ml-3 text-primary border-bottom border-primary">
        {{ back.text }}
      </p>
    </router-link>
  </b-col>
</template>

<script>
export default {
  name: "BackToMapLink",
  props: {
    back: {
      type: Object
    }
  }
};
</script>
