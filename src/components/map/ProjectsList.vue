<template>
  <div class="ProjectsList">
    <template v-for="project in list">
      <router-link
        :to="{
          name: 'Project',
          params: {
            slug: slug,
            segment: segmentSlug,
            solution: project.projectSlug
          }
        }"
        v-bind:key="'project-' + project.id"
        class="d-flex align-items-center justify-content-between ListItem"
      >
        <i class="icon icon-circle" :class="'border-' + color"></i>
        <div class="flex-fill mx-2">{{project.title}}</div>
        <svg class="icon"><use xlink:href="#chevron-right"></use></svg>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "ProjectsList",
  props: {
    list: Array,
    segmentSlug: String,
    slug: String,
    color: String
  }
};
</script>

