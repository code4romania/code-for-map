<template>
  <div class="mb-8">
    <p class="mb-4">
      {{ $t("segement.legend.title") }}
    </p>

    <div class="flex justify-start">
      <div class="flex items-center mr-4">
        <i
          class="w-6 h-6 rounded-full border-4 mr-2"
          :class="'border-' + color"
        />
        <div class="font-bold uppercase text-sm tracking-wider">
          {{ $t("general.solution.done") }}
        </div>
      </div>
      <div class="flex items-center">
        <i class="w-6 h-6 rounded-full border-4 mr-2" />
        <div class="font-bold uppercase text-sm tracking-wider">
          {{ $t("general.solution.planned") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SegmentLegend",
  props: {
    color: {
      type: String,
      default: "blue"
    }
  }
};
</script>
