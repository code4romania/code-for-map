<template>
  <b-container fluid>
    <CallToActionText :description="call_to_action.description" />
    <CallToActionButtons
      :share="call_to_action.share"
      :donate="call_to_action.donate"
    />
  </b-container>
</template>

<script>
/** Imported components. */
import CallToActionText from "./CallToActionText";
import CallToActionButtons from "./CallToActionButtons";

export default {
  /** Component name. */
  name: "CallToAction",
  /** Recived props. */
  props: {
    call_to_action: {
      type: Object
    }
  },
  /** Registered components. */
  components: {
    CallToActionText,
    CallToActionButtons
  }
};
</script>
