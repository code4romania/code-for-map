<template>
  <b-row class="my-3">
    <b-col
      cols="12"
      v-for="project in solution.projects"
      :key="project.id"
      class="px-4 m-0 border-top border-bottom"
    >
      <router-link
        :to="{ name: 'Map' }"
        class="border-left border-3 d-flex align-items-center justify-content-between py-3"
      >
        <div class="d-flex align-items-center">
          <div
            v-if="project.executed"
            class="status"
            :style="`border: 4px solid ${solution.btn.color}`"
          ></div>
          <div v-else class="status"></div>
          <p class="p-0 m-0">{{ project.title }}</p>
        </div>
        >
      </router-link>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Projects",
  props: {
    solution: {
      type: Object
    }
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
