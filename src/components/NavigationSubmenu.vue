<template>
  <div>

    <!-- x-data="{ open: false }"
    x-on:click.away="open = false" -->
    <button
      class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none hidden font-light lg:flex lg:items-center"
      @click="toggle"
      v-on-clickaway="away"
    >
      <span>Domenii</span>
      <svg
        class="fill-current -mr-1 ml-1 h-5 w-5"
        viewBox="0 0 24 24"
      >
        <path d="M12,15,7.8,10.8,9.2,9.3,12,12.2l2.8-2.9,1.4,1.5Z" />
      </svg>
    </button>

    <a
      class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none flex lg:hidden"
      href=""
    >
      Domenii
    </a>

    <!-- :class="{ 'lg:hidden': !open }" -->
    <div
      v-show="isOpen"
      class="pl-5 lg:shadow-xs lg:pl-0 lg:absolute lg:right-0 lg:mt-2 lg:w-48 lg:origin-top-right lg:bg-white"
    >
      <ul class="lg:shadow-lg">
        <li>
          <a
            class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none flex"
            href="https://code4.ro/ro/education-for-romania"
          >
            Educație
          </a>
        </li>
        <li>
          <a
            class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none flex"
            href="https://code4.ro/ro/health-for-romania"
          >
            Sănătate
          </a>
        </li>
        <li>
          <a
            class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none flex"
            href="https://code4.ro/ro/environment-for-romania"
          >
            Mediu
          </a>
        </li>
        <li>
          <a
            class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none flex"
            href="https://code4.ro/ro/care-for-romania"
          >
            Grupuri vulnerabile
          </a>
        </li>
        <li>
          <a
            class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none flex"
            href="https://code4.ro/ro/participation-for-romania"
          >
            Participare
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: "NavigationSubmenu",
  mixins: [ clickaway ],
  components: {
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle(){
      this.isOpen = !this.isOpen;

      console.log("merge?")
    },
    away(){
      this.isOpen = false
    }
  }
};
</script>
