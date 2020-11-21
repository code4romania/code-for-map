<template>
  <b-container fluid>
    <!-- Partners title and description component -->
    <PartnersTitleAndDescription
      :title="Partners.title"
      :description="Partners.description"
    />
    <!-- Main Partners component -->
    <MainPartners :main_Partners="Partners.main_Partners" />
    <!-- Secondary Partners comoponent -->
    <SecondaryPartners :secondary_Partners="Partners.secondary_Partners" />
  </b-container>
</template>

<script>
/** Imported Components */
import PartnersTitleAndDescription from "./PartnersTitleAndDescription";
import MainPartners from "./MainPartners";
import SecondaryPartners from "./SecondaryPartners";

export default {
  name: "Partners",
  props: {
    Partners: Object
  },
  /** Registerd components */
  components: {
    PartnersTitleAndDescription,
    MainPartners,
    SecondaryPartners
  }
};
</script>

<style></style>
