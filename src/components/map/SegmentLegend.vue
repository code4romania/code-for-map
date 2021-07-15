<template>
  <div class="mb-8">
    <p class="mb-4">
      {{ status.text }}
    </p>

    <div class="flex justify-start">
      <div class="flex items-center mr-4">
        <i
          class="w-6 h-6 rounded-full border-4 mr-2"
          :class="'border-' + color"
        />
        <div class="font-bold uppercase text-sm tracking-wider">
          {{ status.done }}
        </div>
      </div>
      <div class="flex items-center">
        <i class="w-6 h-6 rounded-full border-4 mr-2" />
        <div class="font-bold uppercase text-sm tracking-wider">
          {{ status.designed }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SegmentLegend",
  props: {
    status: {
      type: Object,
      default: () => {}
    },
    color: {
      type: String,
      default: "blue"
    }
  }
};
</script>
