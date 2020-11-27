<template>
  <div class="SendSMS mb-3">
    <h2 class="SendSMS-title mb-0">
      <span class="d-block">{{data.title.text_1}}</span>
      <strong class="SendSMS-msg text-strong-blue">{{data.title.text_2}}</strong> {{data.title.text_3}} <strong class="SendSMS-no text-strong-blue">{{data.title.text_4}}</strong>
    </h2>
    <p v-html="data.description" />
  </div>
</template>

<script>
export default {
  name: "SendSMS",
  props: {
    data: Object
  }
};
</script>
