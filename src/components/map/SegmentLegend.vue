<template>
  <div class="SegmentLegend">
    <p>{{ status.text }}</p>

    <div class="d-flex justify-content-start mb-4">
      <div class="SegmentLegend-status d-flex align-items-center mr-4">
        <i class="icon icon-circle" :class="'border-' + color"></i>
        {{status.done}}
      </div>
      <div class="SegmentLegend-status d-flex align-items-center">
        <i class="icon icon-circle"></i>
        {{status.designed}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "SegmentLegend",
  props: {
    status: {
      type: Object
    },
    color: {
      type: String
    }
  }
};
</script>
