<template>
  <!-- x-data="{ open: false }"
    x-on:click.away="open = false" -->
  <div>
    <button
      v-on-clickaway="away"
      class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none font-light w-full lg:w-auto flex items-center justify-between lg:justify-start"
      @click="toggle"
    >
      <svg
        class="fill-current w-5 h-5 text-gray-900"
        viewBox="0 0 24 24"
      >
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
      </svg>
      <svg
        class="fill-current -mr-1 ml-1 h-5 w-5"
        viewBox="0 0 24 24"
      >
        <path d="M12,15,7.8,10.8,9.2,9.3,12,12.2l2.8-2.9,1.4,1.5Z" />
      </svg>
    </button>

    <div
      v-if="active"
      class="pl-5 lg:shadow-xs lg:pl-0 lg:absolute lg:right-0 lg:mt-2 lg:w-48 lg:origin-top-right lg:bg-white"
    >
      <ul class="lg:shadow-lg">
        <li
          v-for="locale in locales"
          :key="locale"
          class="px-3 py-2 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none flex cursor-pointer"

          hreflang="en"
          @click="switchLocale(locale)"
        >
          {{ labels[locale] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: "LocaleSwitcher",
  mixins: [ clickaway ],
  data () {
    return {
      active: false,
      labels: {
        en: "English",
        ro: "Română",
        hu: "Magyar",
      }
    }
  },
  computed: {
    locales() {
      return process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",").filter((locale) => locale !== this._i18n.locale);
    },
  },
  methods: {
    switchLocale(locale) {
      if (this._i18n.locale !== locale) {
        this._i18n.locale = locale;
        window.sessionStorage.setItem("locale", locale)
      }
    },
    toggle(){
      this.active = !this.active;
    },
    away(){
      this.active = false
    }
  },
};
</script>
