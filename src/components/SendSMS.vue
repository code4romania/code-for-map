<template>
  <div class="SendSMS mb-3">
    <Heading
      :level="2"
      class="mb-4"
    >
      <div class="text-gray">
        {{ title.text_1 }}
      </div>
      <strong class="text-green">{{ title.text_2 }}</strong> <span class="text-gray">{{ title.text_3 }}</span> <strong class="text-green">{{ title.text_4 }}</strong>
    </Heading>
    <p
      class="space-y-4 mb-4"
      v-html="description"
    />
    <div class="mb-4">
      {{ callToAction.donate.spacer }}
    </div>
  </div>
</template>

<script>
import Heading from './Heading'

export default {
  name: "SendSMS",
  components: {
    Heading
  },
  props:{
    title: {
      type: Object,
      default: () => {}
    },
     description: {
      type: String,
      default: null
    },
    callToAction: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
