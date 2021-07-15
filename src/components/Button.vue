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
      const baseClasses = `bg-${color} text-white border-${color} hover:bg-${color}-700 hover:border-${color}-700 hover:text-white`;
      const outlineClasses = `border-${color} bg-white text-white hover:bg-${color}-700 hover:border-${color}-700 hover:text-white`;
      return this.outline ? outlineClasses : baseClasses;
    },
    sizeClasses() {
      const isIcon = this.icon;
      const sizeMappings = {
        sm: `h-8 text-sm ${isIcon ? "px-2" : "px-4"}`,
        md: `h-10 ${isIcon ? "px-3" : "px-6"}`,
        lg: `text-lg h-12 ${isIcon ? "px-4" : "px-12"}`
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
      }
    },
  },
};
</script>
