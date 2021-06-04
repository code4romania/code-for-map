<template>
  <div class="SegmentLegend">
    <p>{{ status.text }}</p>

    <div class="d-flex justify-content-start mb-4">
      <div class="SegmentLegend-status flex items-center mr-4">
        <i
          class="icon icon-circle"
          :class="'border-' + color"
        />
        {{ status.done }}
      </div>
      <div class="SegmentLegend-status flex items-center">
        <i class="icon icon-circle" />
        {{ status.designed }}
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
      default: "strong-blue"
    }
  }
};
</script>
