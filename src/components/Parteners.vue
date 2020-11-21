<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <!-- Parteners title && description -->
        <h1 class="text-center text-primary">{{ parteners.title }}</h1>
        <p>{{ parteners.description }}</p>
        <!-- Main parteners logo -->
        <b-row class="d-flex align-items-center justify-content-center">
          <b-col
            cols="4"
            md="3"
            class="d-flex align-items-center justify-content-center py-3"
            v-for="main_partener in parteners.main_parteners"
            :key="main_partener.id"
          >
            <img class="img-fluid" :src="main_partener.logo" alt="" />
          </b-col>
        </b-row>
        <!-- Scondary partenrs logo -->
        <b-row>
          <b-col
            cols="3"
            md="2"
            class="d-flex align-items-center justify-content-center py-3"
            v-for="secondary_partener in parteners.secondary_parteners"
            :key="secondary_partener.id"
          >
            <img class="img-fluid" :src="secondary_partener.logo" alt="" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Parteners",
  props: {
    parteners: {
      type: Object
    }
  }
};
</script>
