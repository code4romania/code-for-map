<template>
  <div 
    :class="back.visible ? 'BackToMapLink' : 'd-none'">
    <router-link
      :to="{ name: 'Map' }"
      class="d-flex align-items-center"
    >
      <img :src="back.icon" alt="" />
      <p class="p-0 m-0 ml-3 text-primary border-bottom border-primary d-inline-block">
        {{ back.text }}
      </p>
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
