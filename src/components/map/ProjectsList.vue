<template>
  <b-col cols="12" class="px-4 m-0">
    <router-link
      :to="{
        name: 'Project',
        params: {
          slug: slug,
          _slug: highway_slug,
          __slug: project_slug
        }
      }"
      class="border-left border-3 d-flex align-items-center justify-content-between py-3"
    >
      <div class="d-flex align-items-center">
        <div
          v-if="executed"
          class="status"
          :style="`border: 4px solid ${color}`"
        ></div>
        <div v-else class="status"></div>
        <p class="p-0 m-0">{{ title }}</p>
      </div>
      <img :src="chevron" />
    </router-link>
  </b-col>
</template>

<script>
export default {
  name: "Projects",
  props: {
    slug: String,
    highway_slug: String,
    project_slug: String,
    executed: Boolean,
    color: String,
    title: String,
    chevron: String
  }
};
</script>

<style scoped>
.status {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background: #fff;
  transform: translate(-55%);
  border: 4px solid #c8cedb;
}
.border-3 {
  border-width: 3px !important;
}
</style>
