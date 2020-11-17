<template>
  <div id="app">
    <Header :header="data.header" />
    <router-view :data="data" />
  </div>
</template>

<script>
/** Import data object. */
import data from "./data/data.js";
/** Import components. */
import Header from "./components/Header";

export default {
  /** Component name. */
  name: "App",
  /** Registered components. */
  components: {
    Header,
  },
  /** App state. */
  data() {
    return {
      data: {},
    };
  },
  /** Added data object in created life cycle. */
  created() {
    this.data = data;
  },
};
</script>
