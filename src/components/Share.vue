<template>
  <div class="Share">
    <p class="mb-4">{{data.description}}</p>
    <!-- TODO: share functionality dropdown button -->
    <!-- <a href="#" :class="'btn btn-' + data.share.color + ' btn-custom px-5 mr-2 text-white btn-lg'">
      {{data.share.title}}
    </a> -->

    <b-dropdown right :text="data.share.title" :variant="data.share.color" class="mr-2 text-white dropdown-custom">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
      <b-dropdown-item>Item 3</b-dropdown-item>
    </b-dropdown>

    <a :href="data.donate.link" :class="'btn btn-' + data.donate.color + ' btn-custom px-5 mx-2 text-white btn-lg'">
      {{data.donate.title}}
    </a>
  </div>
</template>

<script>
export default {
  name: "Share",
  props: {
    data: Object
  }
};
</script>
