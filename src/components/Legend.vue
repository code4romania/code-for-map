<template>
  <div class="Legend d-none d-lg-block">
    <h3 class="mb-2">{{ legend.title }}</h3>
    <div class="d-flex align-items-center my-1">
      <div class="drum-continuu"></div>
      <span class="ml-2 display-4">{{ legend.drum_executat }}</span>
    </div>
    <div class="d-flex align-items-center my-1">
      <div class="drum-proiectat"></div>
      <span class="ml-2 display-4">{{ legend.drum_proiectat }}</span>
    </div>
    <div class="d-flex align-items-center my-1">
      <div class="drum-planificat"></div>
      <span class="ml-2 display-4">{{ legend.drum_planificat }}</span>
    </div>
    <div class="d-flex align-items-center my-1">
      <div class="drum-circle-full"></div>
      <span class="ml-2 display-4">{{ legend.destinatie }}</span>
    </div>
    <div class="d-flex align-items-center my-1">
      <div class="drum-circle-empty"></div>
      <span class="ml-2 display-4">{{ legend.tema }}</span>
    </div>
    <div class="d-flex align-items-center my-1">
      <div class="drum-circle-empty-small"></div>
      <span class="ml-2 display-4">{{ legend.realizat }}</span>
    </div>
    <div class="d-flex align-items-center my-1">
      <div class="drum-circle-full-small"></div>
      <span class="ml-2 display-4">{{ legend.planificat }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Legend",
  props: {
    legend: {
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
.Legend h3 {
  font-size: 14px;
  text-transform: uppercase;
}
.drum-continuu {
  width: 20%;
  border-top: 4px solid #000;
}
.drum-proiectat {
  width: 20%;
  border-top: 4px solid #ddd;
}
.drum-planificat {
  width: 20%;
  border-top: 4px dashed #000;
}
.drum-circle-full {
  width: 20px;
  height: 20px;
  background: #000;
  border-radius: 100%;
}
.drum-circle-empty {
  width: 20px;
  height: 20px;
  border: 4px solid #000;
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
