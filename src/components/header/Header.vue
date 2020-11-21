<template>
  <div>
    <Title :title="header.title" />
    <Description :description="header.description" />
  </div>
</template>

<script>
/** Imported components. */
import Title from "./Title";
import Description from "./Description";

export default {
  /** Component name. */
  name: "Header",
  /** Recived props. */
  props: {
    header: {
      type: Object
    }
  },
  /** Registered components. */
  components: {
    Title,
    Description
  }
};
</script>
