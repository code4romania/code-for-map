<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" class="p-0 m-0 mt-5 mb-2">
        <img class="img-fluid w-100" :src="sms.delimitator_1" alt="" />
      </b-col>
    </b-row>
    <b-row class="py-3">
      <!-- Text 'Trimite sms cu cuvantul' -->
      <b-col cols="6" class="d-flex align-items-baseline justify-content-end">
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
      <b-col cols="6">
        <p class="p-0 m-0 text-right text-dark font-weight-light">
          {{ sms.title.text_2 }}
        </p>
      </b-col>
      <!-- Numarul de telefon -->
      <b-col cols="6">
        <p class="p-0 m-0 display-1 align-self-start mt-n2">
          {{ sms.phone_number }}
        </p>
      </b-col>
      <!-- Descriere -->
      <b-col cols="12">
        <p class="pt-3">{{ sms.description }}</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="p-0 m-0 mb-5">
        <img class="img-fluid w-100" :src="sms.delimitator_2" alt="" />
      </b-col>
    </b-row>
  </b-container>
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
