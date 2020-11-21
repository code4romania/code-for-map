<template>
  <div class="BackToMapLink mb-4" :class="back.visible ? '' : 'd-none'">
    <router-link :to="{ name: 'Map' }" class="d-inline-block">
      <span class="d-flex align-items-center ">
        <img :src="back.icon" alt="" />
        <span class="p-0 m-0 ml-3 text-primary border-bottom border-primary">
          {{ back.text }}
        </span>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BackToMapLink",
  props: {
    back: {
      type: Object
    }
  }
};
</script>
