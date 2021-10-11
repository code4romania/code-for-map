<template>
  <div v-if="project">
    <div
      class="py-4"
      :class="`bg-` + highwayMap.color"
    />

    <div class="px-4 lg:px-6 pb-8">
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <a
            v-if="segmentObject.projects.length > 1"
            href="#"
            class="inline-flex items-center"
            @click.prevent="previous"
          >
            <img
              class="w-8 h-8"
              src="../assets/svg/icons/chevron-left.svg"
            >
            <span class="hidden lg:block lg:ml-2 border-b border-gray-700 text-gray-700">
              {{ $t("general.solution.next") }}
            </span>
          </a>
          <a
            v-if="segmentObject.projects.length > 1"
            href="#"
            class="inline-flex items-center"
            @click.prevent="next"
          >
            <span class="hidden lg:block lg:ml-2 border-b border-gray-700 text-gray-700">
              {{ $t("general.solution.prev") }}
            </span>
            <img
              class="w-8 h-8"
              src="../assets/svg/icons/chevron-right.svg"
            >
          </a>
        </div>
        <div>
          <a
            href="#"
            class="block"
            @click.prevent="close()"
          >
            <img
              class="w-4 h-4"
              src="../assets/svg/icons/close.svg"
            >
          </a>
        </div>
      </div>

      <div class="my-6 lg:flex lg:items-start lg:justify-between">
        <div>
          <h3 class="text-4xl font-bold mb-1">
            {{ $t(slug + '.segments.' + segmentObject.segmentSlug + '.projects.' + project.projectSlug + '.title') }}
          </h3>
          <p class="text-xl leading-8 mb-6 lg:mb-0">
            {{ $t(slug + '.segments.' + segmentObject.segmentSlug + '.projects.' + project.projectSlug + '.subtitle') }}
          </p>
        </div>
        <div>
          <a
            v-if="project.link"
            :href="project.link"
            class="inline-flex items-center px-4 py-2 rounded"
            :class="`text-` + highwayMap.color"
            target="_blank"
          >
            <span class="font-bold uppercase text-sm tracking-wider">{{ $t("general.solution.view") }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="grid grid-cols-8 gap-8">
        <div class="col-span-8 lg:col-span-3">
          <div class="border border-gray-300 max-h-96">
            <img
              class="max-h-96 mx-auto"
              :src="projectIcon"
            >
          </div>
        </div>
        <div class="col-span-8 lg:col-span-5">
          <div class="flex items-center mb-3">
            <i
              class="w-6 h-6 mr-2 rounded-full border-4"
              :class="
                project.adopted ? 'border-' + highwayMap.color + '-500' : 'border-gray-500'
              "
            />
            <div class="font-bold uppercase text-sm tracking-wider">
              {{
                project.adopted
                  ? $t("general.solution.done")
                  : $t("general.solution.planned")
              }}
            </div>
          </div>
          <div
            class="mb-6 content-input"
            v-html="$t(slug + '.segments.' + segmentObject.segmentSlug + '.projects.' + project.projectSlug + '.description')"
          />
          <div class="flex items-center mb-3">
            <img
              class="icon icon-md mr-2"
              src="../assets/svg/icons/icon-heart.svg"
            >
            <span
              v-if="project.adopted"
              class="font-bold uppercase text-sm tracking-wider"
            >
              {{ $t("general.solution.adopted_by") }}
            </span>
            <span
              v-else
              class="font-bold uppercase text-sm tracking-wider"
            >
              {{ $t("general.solution.ask_finance") }}
            </span>
          </div>

          <div
            v-if="project.adopted"
            class="grid grid-cols-4 gap-4"
          >
            <template v-for="(partner, index) in project.adopted_by">
              <div
                :key="index"
                class="border border-gray-300 flex items-center align-middle"
              >
                <a
                  :href="partner.link"
                  target="_blank"
                >
                  <img
                    class="w-full"
                    :src="partner.logo"
                  >
                </a>
              </div>
            </template>
          </div>
          <a
            v-else
            class="inline-flex items-center px-8 py-4 mx-2 my-2 bg-green-500 text-white text-lg rounded"
            :href="$t('general.send_email.link')"
          >
            {{ $t("general.send_email.title") }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectModal",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    highwayMap: {
      type: Object,
      default: () => {},
    },
    segmentObject: {
      type: Object,
      default: () => {},
    },
    slug: {
      type: String,
      default: "",
    },
    segmentSlug: {
      type: String,
      default: "",
    },
  },
  test: "test",
  data() {
    return {
      solutionSlug: this.$route.params.solution,
      project: {},
      active_index: null,
      projectIcon: "",
    };
  },
  watch: {
    $route(to) {
      this.project = this.segmentObject.projects.find(
        (item) => item.projectSlug === to.params.solution
      );

      this.projectIcon = require("../assets/images/projects/" +
        this.project.icon +
        ".png");
    },
  },
  created() {
    /** Extract the current active project index. */
    for (let index = 0; index < this.segmentObject.projects.length; index++) {
      if (this.segmentObject.projects[index].projectSlug === this.solutionSlug) {
        this.active_index = index;
        break;
      }
    }
  },
  mounted() {
    this.project = this.segmentObject.projects.find(
      (item) => item.projectSlug === this.solutionSlug
    );

    this.projectIcon = require("../assets/images/projects/" +
      this.project.icon +
      ".png");

    document.body.classList.add("overflow-y-hidden", "overlay-is-open");
  },
  methods: {
    next() {
      /** Move to the next index. */
      this.active_index =
        this.active_index + 1 < this.segmentObject.projects.length
          ? this.active_index + 1
          : 0;

      this.$router.push({
        name: "ProjectModal",
        params: {
          solution: this.segmentObject.projects[this.active_index].projectSlug,
        },
      });
    },
    previous() {
      this.active_index =
        this.active_index - 1 >= 0
          ? this.active_index - 1
          : this.segmentObject.projects.length - 1;

      this.$router.push({
        name: "ProjectModal",
        params: {
          solution: this.segmentObject.projects[this.active_index].projectSlug,
        },
      });
    },
    close() {
      console.log(this.slug, this.segmentSlug)

      // debugger

      this.$router.push({
        name: "Segment",
        params: {
          slug: this.slug,
          segment: this.segmentObject.segmentSlug
        },
      });

      document.body.classList.remove("overflow-y-hidden", "overlay-is-open");
    }
  },
};
</script>
