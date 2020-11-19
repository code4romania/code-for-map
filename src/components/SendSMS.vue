<template>
  <b-row class="py-3">
    <!-- Text 'Trimite sms cu cuvantul' -->
    <b-col cols="6" class="d-flex align-items-baseline">
      <p class="text-right text-dark font-weight-light p-0 m-0">
        {{ sms.title.text_1 }}
      </p>
    </b-col>
    <!-- Mesaj din sms -->
    <b-col cols="6" class="d-flex align-items-baseline">
      <p class="p-0 m-0 display-1 text-strong-blue align-self-start">
        {{ sms.msg_text }}
      </p>
    </b-col>
    <!-- Text 'la' -->
    <b-col cols="6" class="">
      <p class="p-0 m-0 text-right text-dark font-weight-light">
        {{ sms.title.text_2 }}
      </p>
    </b-col>
    <!-- Numarul de telefon -->
    <b-col cols="6" class="">
      <p class="p-0 m-0 display-1 align-self-start mt-n2">
        {{ sms.phone_number }}
      </p>
    </b-col>
    <!-- Descriere -->
    <b-col cols="12">
      <p class="py-3">{{ sms.description }}</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SendSMS",
  props: {
    sms: {
      type: Object
    }
  }
};
</script>
