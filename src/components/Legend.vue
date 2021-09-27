<template>
  <div class="Legend hidden xl:block">
    <h3 class="mb-2">
      {{ $t('general.map.legend') }}
    </h3>
    <div class="flex items-center my-2">
      <div class="drum-continuu" />
      <span class="ml-2 display-4">{{ $t('general.map.road_done') }}</span>
    </div>
    <div class="flex items-center my-2">
      <div class="drum-proiectat" />
      <span class="ml-2 display-4">{{ $t('general.map.road_designed') }}</span>
    </div>
    <div class="flex items-center my-2">
      <div class="drum-planificat" />
      <span class="ml-2 display-4">{{ $t('general.map.road_planned') }}</span>
    </div>
    <div class="flex items-center my-2">
      <div class="drum-circle-full" />
      <span class="ml-2 display-4">{{ $t('general.map.destination') }}</span>
    </div>
    <div class="flex items-center my-2">
      <div class="drum-circle-empty" />
      <span class="ml-2 display-4">{{ $t('general.map.objective') }}</span>
    </div>
    <div class="flex items-center my-2">
      <div class="drum-circle-empty-small" />
      <span class="ml-2 display-4">{{ $t('general.map.road_done') }}</span>
    </div>
    <div class="flex items-center my-2">
      <div class="drum-circle-full-small" />
      <span class="ml-2 display-4">{{ $t('general.map.road_planned') }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Legend"
};
</script>

<style scoped lang="scss">
.Legend h3 {
  text-transform: uppercase;
  font-size: 18px;
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
