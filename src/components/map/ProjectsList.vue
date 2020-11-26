<template>
  <div class="ProjectsList">
    <template v-for="project in list">
      <router-link
        :to="{
          name: 'Project',
          params: {
            slug: slug,
            _slug: highway_slug,
            solution: project.project_slug
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
    highway_slug: String,
    slug: String,
    color: String
  }
};
</script>

