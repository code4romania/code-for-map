<template>
  <b-row class="py-3">
    <b-col cols="6" class="d-flex align-items-baseline">
      <p class="text-right text-dark font-weight-light p-0 m-0">
        {{ sms.title.text_1 }}
      </p>
      <p></p>
    </b-col>
    <b-col cols="6" class="d-flex align-items-baseline">
      <p class="p-0 m-0 display-1 text-strong-blue align-self-center">
        {{ sms.msg_text }}
      </p>
    </b-col>
    <b-col cols="6" class="">
      <p class="p-0 m-0 text-right text-dark font-weight-light">
        {{ sms.title.text_2 }}
      </p>
      <p></p>
    </b-col>
    <b-col cols="6" class="d-flex">
      <p class="p-0 m-0 display-1">{{ sms.phone_number }}</p>
    </b-col>
    <b-col cols="12">{{ sms.description }}</b-col>
  </b-row>
</template>

<script>
export default {
  name: "SendSMS",
  props: {
    sms: {
      type: Object,
    },
  },
};
</script>

<style>
</style>
