<template>
  <div>
    <button
      v-on-clickaway="away"
      class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none font-light w-full lg:w-auto flex items-center justify-between lg:justify-start"
      @click="toggle"
    >
      <span>
        {{ $t('navigation.' + section.slug + '.title') }}
      </span>
      <svg
        class="fill-current -mr-1 ml-1 h-5 w-5"
        viewBox="0 0 24 24"
      >
        <path d="M12,15,7.8,10.8,9.2,9.3,12,12.2l2.8-2.9,1.4,1.5Z" />
      </svg>
    </button>

    <!-- <div
      class="px-3 py-2 rounded flex lg:hidden"
    >
      {{ $t('navigation.' + section.slug + '.title') }}
    </div> -->

    <div
      v-show="isOpen"
      class="pl-5 lg:shadow-xs lg:pl-0 lg:absolute lg:right-0 lg:mt-2 lg:w-48 lg:origin-top-right lg:bg-white"
    >
      <ul class="lg:shadow-lg">
        <template v-for="item in section.items">
          <li
            :key="'item-' + item.slug"
          >
            <a
              class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none flex"
              :href="$t('navigation.' + section.slug + '.items.' + item.slug + '.link')"
            >
              {{ $t('navigation.' + section.slug + '.items.' + item.slug + '.title') }}
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: "NavigationSubmenu",
  mixins: [ clickaway ],
  props: {
    section: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle(){
      this.isOpen = !this.isOpen;
    },
    away(){
      this.isOpen = false
    }
  }
};
</script>
