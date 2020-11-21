<template>
  <!-- Call to action buttons -->
  <b-row>
    <b-col cols="12">
      <div
        class="d-flex align-items-center justify-content-around justify-content-md-start"
      >
        <Button :action="share" />
        <Button :action="donate" />
      </div>
    </b-col>
  </b-row>
</template>

<script>
/** Imported components */
import Button from "./Button";
export default {
  /** Component name. */
  name: "CallToActionButtons",
  /** Recived props. */
  props: {
    share: Object,
    donate: Object
  },
  /** Registerd components. */
  components: {
    Button
  }
};
</script>
