<template>
  <component
    :is="buttonType"
    class="btn font-medium flex items-center cursor-pointer border shadow hover:shadow-lg focus:outline-none focus:shadow-outline"
    :href="href"
    :type="type"
    :class="btnClasses"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "SendSMS",
  props: {
    href: {
      required: false,
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "button", //button, submit
    },
    id: {
      type: String,
      required: false,
      default: null,
    },
    name: {
      type: String,
      required: false,
      default: null,
    },
    color: {
      type: String,
      default: "teal",
    },
    size: {
      type: String,
      default: "md", //sm, md, lg
    },
    outline: Boolean,
    icon: Boolean,
    round: Boolean,
  },
  computed: {
    colorClasses() {
      const color = this.color;
      const baseClasses = `bg-${color}-500 text-white border-${color}-500 hover:bg-${color}-600 hover:border-${color}-600 hover:text-white`;
      const outlineClasses = `border-${color}-500 bg-white text-white hover:bg-${color}-500 hover:border-${color}-500 hover:text-white`;
      return this.outline ? outlineClasses : baseClasses;
    },
    sizeClasses() {
      const isIcon = this.icon;
      const sizeMappings = {
        sm: `text-sm py-1 ${isIcon ? "px-2" : "px-4"}`,
        md: `text-xl py-2 ${isIcon ? "px-10" : "px-12"}`,
        lg: `text-2xl py-3 ${isIcon ? "px-4" : "px-12"}`,
      };

      return sizeMappings[this.size] || sizeMappings.md;
    },
    btnClasses() {
      const borderRadiusClasses = this.round ? "rounded-full" : "rounded";
      return `${this.colorClasses} ${this.sizeClasses} ${borderRadiusClasses}`;
    },
    buttonType() {
      if (this.href) {
        return "a";
      } else {
        return "button";
        //     <!-- class="
        //   inline-block
        //   bg-blue-500
        //   text-white
        //   px-12
        //   py-2
        //   text-xl
        //   font-normal
        //   rounded
        //   hover:bg-blue-600
        // " -->
      }
    },
  },
};
</script>
