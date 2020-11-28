<template>
  <div class="SendSMS mb-3">
    <h2 class="SendSMS-title mb-0">
      <span class="d-block">{{ data.title.text_1 }}</span>
      <strong class="SendSMS-msg text-strong-blue">{{ data.title.text_2 }}</strong> {{ data.title.text_3 }} <strong class="SendSMS-no text-strong-blue">{{ data.title.text_4 }}</strong>
    </h2>
    <p v-html="data.description" />
    <div class="mb-4">
      {{ callToAction.donate.spacer }}
    </div>
    <a
      :href="callToAction.donate.link"
      class="btn btn-lg btn-green px-5"
      target="_parent"
    >{{ callToAction.donate.title }}</a>
  </div>
</template>

<script>
export default {
  name: "SendSMS",
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    callToAction: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
