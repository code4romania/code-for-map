<template>
  <div>
    <h1 class="mb-lg-4">{{ legend.title }}</h1>
    <div class="d-flex align-items-center my-2">
      <div class="drum-continuu"></div>
      <span class="ml-2">{{ legend.drum_executat }}</span>
    </div>
    <div class="d-flex align-items-center my-2">
      <div class="drum-proiectat"></div>
      <span class="ml-2">{{ legend.drum_proiectat }}</span>
    </div>
    <div class="d-flex align-items-center my-2">
      <div class="drum-planificat"></div>
      <span class="ml-2">{{ legend.drum_planificat }}</span>
    </div>
    <div class="d-flex align-items-center my-2">
      <div class="drum-circle-full"></div>
      <span class="ml-2">{{ legend.destinatie }}</span>
    </div>
    <div class="d-flex align-items-center my-2">
      <div class="drum-circle-empty"></div>
      <span class="ml-2">{{ legend.tema }}</span>
    </div>
    <div class="d-flex align-items-center my-2">
      <div class="drum-circle-empty-small"></div>
      <span class="ml-2">{{ legend.realizat }}</span>
    </div>
    <div class="d-flex align-items-center my-2">
      <div class="drum-circle-full-small"></div>
      <span class="ml-2">{{ legend.planificat }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Legend",
  props: {
    legend: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.drum-continuu {
  width: 25%;
  border-top: 4px solid #000;
}
.drum-proiectat {
  width: 25%;
  border-top: 4px solid #ddd;
}
.drum-planificat {
  width: 25%;
  border-top: 4px dashed #000;
}
.drum-circle-full {
  width: 25px;
  height: 25px;
  background: #000;
  border-radius: 100%;
}
.drum-circle-empty {
  width: 25px;
  height: 25px;
  border: 5px solid #000;
  border-radius: 100%;
}
.drum-circle-empty-small {
  width: 15px;
  height: 15px;
  border: 3.5px solid #000;
  border-radius: 100%;
}
.drum-circle-full-small {
  width: 15px;
  height: 15px;
  background: #333;
  border-radius: 100%;
}
</style>
