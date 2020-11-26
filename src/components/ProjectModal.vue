<template>
  <div>
    <div class="py-1" :class="`bg-` + code4ro_map.color"></div>

    <div class="ProjectModal p-3">
      <div class="d-flex align-items-center justify-content-between my-4">
        <div class="SegmentLegend-status d-flex align-items-center">
          <i
            class="icon icon-circle"
            :class="'border-' + code4ro_map.color"
          ></i>
          {{ data.segment_legend.done }}
        </div>
        <router-link
          :to="{
            name: 'Segment',
            params: { slug: slug, segment: segmentSlug },
          }"
        >
          <svg class="icon icon-sm" style="cursor: pointer">
            <use xlink:href="#close"></use>
          </svg>
        </router-link>
      </div>

      <div class="d-flex align-items-center justify-content-between my-4">
        <h3>{{ project.title }}</h3>

        <a :href="project.link" v-if="project.link">
          <svg class="icon icon-sm">
            <use xlink:href="#icon-redirect"></use>
          </svg>
          {{ project.link_text }}
        </a>
      </div>

      <b-row>
        <b-col xs="12" lg="6">
          <div class="border border-gray mb-3">
            <img class="img-fluid" :src="project.icon" />
          </div>
          <div class="d-none d-lg-block">
            <div class="w-50 d-flex align-items-center">
              <svg class="icon icon-md mr-2">
                <use xlink:href="#icon-heart"></use>
              </svg>
              <span v-if="project.adopted">{{
                data.segment_legend.adopted
              }}</span>
              <span v-else>{{ data.segment_legend.neadoptat }}</span>
            </div>

            <b-row>
              <b-col cols="12">
                <b-row class="my-3" v-if="project.adopted">
                  <template v-for="(partner, index) in project.adopted_by">
                    <b-col cols="2" :key="index">
                      <svg class="icon icon-lg">
                        <use :xlink:href="`#` + partner.logo"></use>
                      </svg>
                    </b-col>
                  </template>
                </b-row>
                <a
                  v-else
                  :href="data.call_to_action.finance.link"
                  :class="
                    'btn btn-' +
                      data.call_to_action.finance.color +
                      ' btn-custom px-5 mx-2 my-2 text-white btn-lg'
                  "
                >
                  {{ data.call_to_action.finance.title }}
                </a>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col xs="12" lg="6" v-html="project.description" />
        <b-col cols="12" lg="6" class="d-lg-none">
          <div class="w-50 d-flex align-items-center">
            <svg class="icon icon-md mr-2">
              <use xlink:href="#icon-heart"></use>
            </svg>
            <span v-if="project.adopted">{{
              data.segment_legend.adopted
            }}</span>
            <span v-else>{{ data.segment_legend.neadoptat }}</span>
          </div>

          <b-row>
            <b-col cols="12">
              <b-row class="my-3" v-if="project.adopted">
                <template v-for="(partner, index) in project.adopted_by">
                  <b-col cols="2" :key="index">
                    <svg class="icon icon-lg">
                      <use :xlink:href="`#` + partner.logo"></use>
                    </svg>
                  </b-col>
                </template>
              </b-row>
              <a
                v-else
                :href="data.call_to_action.finance.link"
                :class="
                  'btn btn-' +
                    data.call_to_action.finance.color +
                    ' btn-custom px-5 mx-2 my-2 text-white btn-lg'
                "
              >
                {{ data.call_to_action.finance.title }}
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" class="mt-5">
          <div class="d-flex align-items-center justify-content-between">
            <!-- <router-link
              :to="{
                name: 'ProjectModal',
                params: {
                  __slug: segment.projects[previous_index].project_slug,
                },
              }"
            > -->
            <span @click="previous" v-if="segmentObject.projects.length > 1">
              <!-- /<svg class="icon icon-sm"><use xlink:href="#chevron-left"></use></svg> -->
              {{ data.general.modal.previous.text }}
            </span>
            <!-- </router-link> -->

            <!-- <router-link
              :to="{
                name: 'ProjectModal',
                params: { __slug: segment.projects[next_index].project_slug },
              }"
            > -->
            <span @click="next" v-if="segmentObject.projects.length > 1">
              <!-- <svg class="icon icon-sm"><use xlink:href="#chevron-left"></use></svg> -->
              {{ data.general.modal.next.text }}
            </span>
            <!-- </router-link> -->

            <!-- <span v-if="segment.projects.length > 1" @click="goToNextRoute">
              {{ data.general.modal.next.text }}
              <svg class="icon icon-sm">
                <use xlink:href="#chevron-right"></use>
              </svg>
            </span> -->
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectModal",
  props: {
    data: Object,
    code4ro_map: Object,
    segmentObject: Object,
    slug: String,
    segmentSlug: String,
    // active_index: Number
  },
  data() {
    return {
      solution_slug: this.$route.params.solution,
      project: {},
      active_index: null,
      previous_index: null,
      next_index: null,
    };
  },
  created() {
    /** Extract the current active project index. */
    for (let index = 0; index < this.segmentObject.projects.length; index++) {
      if (
        this.segmentObject.projects[index].projectSlug == this.solution_slug
      ) {
        this.active_index = index;
        break;
      }
    }

    /** Extarct the previous project. */
    this.previous_index =
      0 == this.active_index
        ? this.segmentObject.projects.length - 1
        : this.active_index - 1;

    /** Extarct the next project. */
    this.next_index =
      this.segmentObject.projects.length - 1 == this.active_index
        ? 0
        : this.active_index + 1;
  },
  mounted() {
    this.project = this.segmentObject.projects.find(
      (item) => item.projectSlug == this.solution_slug
    );
  },
  watch: {
    $route(to) {
      if (this.solution_slug != to.params.solution) {
        this.project = this.segmentObject.projects.find(
          (item) => item.projectSlug == to.params.solution
        );
      }
    },
  },
  methods: {
    next() {
      /** Move to the next index. */
      this.active_index =
        this.active_index + 1 == this.segmentObject.projects.length
          ? 0
          : this.active_index + 1;

      /** Extarct the previous project. */
      this.previous_index =
        0 == this.active_index
          ? this.segmentObject.projects.length - 1
          : this.active_index - 1;

      /** Extarct the next project. */
      this.next_index =
        this.segmentObject.projects.length - 1 == this.active_index
          ? 0
          : this.active_index + 1;

      this.$router.push({
        name: "ProjectModal",
        params: {
          solution: this.segmentObject.projects[this.next_index].projectSlug,
        },
      });
    },
    previous() {
      /** Move to the previous index. */
      this.active_index =
        this.active_index - 1 < 0
          ? this.segmentObject.projects.length - 1
          : this.active_index - 1;

      /** Extarct the previous project. */
      this.previous_index =
        0 == this.active_index
          ? this.segmentObject.projects.length - 1
          : this.active_index - 1;

      /** Extarct the next project. */
      this.next_index =
        this.segmentObject.projects.length - 1 == this.active_index
          ? 0
          : this.active_index + 1;

      this.$router.push({
        name: "ProjectModal",
        params: {
          solution: this.segmentObject.projects[this.previous_index]
            .projectSlug,
        },
      });
    },
  },
};
</script>
