<template>
  <b-row>
    <b-col cols="12" class="p-0 m-0">
      <router-link
        :to="{
          name: 'Solution',
          params: {
            slug: slug,
            _slug: highway_slug
          }
        }"
      >
        <div
          class="d-flex align-items-center justify-content-between border-top last-child-border py-3"
        >
          <div class="d-flex align-items-center pl-3">
            <img :src="icon" :alt="title" />
            <p class="p-0 m-0 px-3">
              {{ title }}
            </p>
          </div>
          <!-- Chevron left displayed till 1024px -->
          <img class="img-fluid mx-3" :src="chevron" alt="chevron right" />
        </div>
      </router-link>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "MobileHighwaySolutions",
  props: {
    slug: String,
    highway_slug: String,
    icon: String,
    title: String,
    chevron: String
  }
};
</script>

<style scoped>
.last-child-border:last-child {
  border-bottom: 1px solid #ddd;
}
</style>
