<template>
  <b-container fluid>
    <!-- Parteners title and description component -->
    <PartenersTitleAndDescription
      :title="parteners.title"
      :description="parteners.description"
    />
    <!-- Main parteners component -->
    <MainParteners :main_parteners="parteners.main_parteners" />
    <!-- Secondary parteners comoponent -->
    <SecondaryParteners :secondary_parteners="parteners.secondary_parteners" />
  </b-container>
</template>

<script>
/** Imported Components */
import PartenersTitleAndDescription from "./PartenersTitleAndDescription";
import MainParteners from "./MainParteners";
import SecondaryParteners from "./SecondaryParteners";

export default {
  name: "Parteners",
  props: {
    parteners: Object
  },
  /** Registerd components */
  components: {
    PartenersTitleAndDescription,
    MainParteners,
    SecondaryParteners
  }
};
</script>

<style></style>
