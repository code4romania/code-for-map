<template>
  <b-row>
    <b-col cols="12">
      <p>{{ status.solution_status.text }}</p>
      <b-row>
        <b-col cols="6">
          <div class="d-flex align-items-center">
            <div class="status"></div>
            <p class="p-0 m-0 ml-2 font-weight-light">
              {{ status.solution_status.implemented }}
            </p>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="d-flex align-items-center">
            <div
              class="status"
              :style="`border: 6px solid ${status.color}`"
            ></div>
            <p class="p-0 m-0 ml-2 font-weight-light">
              {{ status.solution_status.executed }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SolutionStatus",
  props: {
    status: {
      type: Object
    }
  }
};
</script>

<style>
.status {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 6px solid #c8cedb;
}
</style>
