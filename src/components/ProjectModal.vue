<template>
  <div v-if="project">
    <div
      class="py-1"
      :class="`bg-` + highwayMap.color"
    />

    <div class="ProjectModal px-4">
      <div class="mt-4 d-flex align-items-center justify-content-between">
        <div>
          <a
            v-if="segmentObject.projects.length > 1"
            href="#"
            class="ProjectModal-nav"
            @click.prevent="previous"
          >
            <svg class="icon icon-md">
              <use xlink:href="#chevron-left" />
            </svg>
            <span class="ml-lg-2 text-primary border-bottom border-primary">
              {{ data.general.modal.previous.text }}
            </span>
          </a>
          <a
            v-if="segmentObject.projects.length > 1"
            href="#"
            class="ProjectModal-nav"
            @click.prevent="next"
          >
            <span class="mr-lg-2 text-primary border-bottom border-primary">
              {{ data.general.modal.next.text }}
            </span>
            <svg class="icon icon-md">
              <use xlink:href="#chevron-right" />
            </svg>
          </a>
        </div>
        <div>
          <router-link
            :to="{
              name: 'Segment',
              params: { slug: slug, segment: segmentSlug },
            }"
          >
            <svg class="icon"><use xlink:href="#close" /></svg>
          </router-link>
        </div>
      </div>

      <div class="ProjectModal-header mt-4 mb-2">
        <div>
          <h3>{{ project.title }}</h3>
          <p class="lead">
            {{ project.subtitle }}
          </p>
        </div>
        <div>
          <a
            v-if="project.link"
            :href="project.link"
            :class="'btn btn-' + highwayMap.color + ' px-4'"
            target="_blank"
          >
            {{ data.general.view_project }}
          </a>
        </div>
      </div>

      <b-row class="mb-4">
        <b-col
          xs="12"
          md="4"
        >
          <div class="ProjectModal-visual text-center border border-gray mb-3">
            <div>
              <img
                class="img-fluid"
                :src="projectIcon"
              >
            </div>
          </div>
        </b-col>
        <b-col
          xs="12"
          md="8"
        >
          <div class="SegmentLegend-status d-flex align-items-center mb-3">
            <i
              class="icon icon-circle"
              :class="
                project.adopted ? 'border-' + highwayMap.color : 'border-gray'
              "
            />
            {{
              project.adopted
                ? data.segment_legend.done
                : data.segment_legend.designed
            }}
          </div>
          <div
            class="mb-4"
            v-html="project.description"
          />
          <div class="d-flex align-items-center mb-2">
            <svg class="icon icon-md mr-2">
              <use xlink:href="#icon-heart" />
            </svg>
            <span v-if="project.adopted">{{
              data.segment_legend.adopted
            }}</span>
            <span v-else>{{ data.segment_legend.neadoptat }}</span>
          </div>

          <b-row>
            <b-col cols="12">
              <b-row v-if="project.adopted">
                <template v-for="(partner, index) in project.adopted_by">
                  <b-col
                    :key="index"
                    cols="3"
                  >
                    <a
                      :href="partner.link"
                      target="_blank"
                      class="d-block border border-gray PartnersList-itemWrap"
                    >
                      <div class="PartnersList-item">
                        <img
                          :src="partner.logo"
                          class="img-fluid"
                        >
                      </div>
                    </a>
                  </b-col>
                </template>
              </b-row>
              <a
                v-else
                :href="data.call_to_action.finance.link"
                :class="
                  'btn btn-' +
                    data.call_to_action.finance.color +
                    ' btn-green px-5 mx-2 my-2 text-white btn-lg'
                "
              >
                {{ data.call_to_action.finance.title }}
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    highwayMap: {
      type: Object,
      default: () => {}
    },
    segmentObject: {
      type: Object,
      default: () => {}
    },
    slug: {
      type: String,
      default: ""
    },
    segmentSlug: {
      type: String,
      default: ""
    },
    // active_index: Number
  },
  test: "test",
  data() {
    return {
      solutionSlug: this.$route.params.solution,
      project: {},
      active_index: null,
      projectIcon: '',
    }
  },
  watch: {
    $route(to) {
      this.project = this.segmentObject.projects.find(
        item => item.projectSlug == to.params.solution
      )

      this.projectIcon = require('../assets/images/projects/' +
        this.project.icon +
        '.png')

      const pageTitle = to.params.slug + ' - ' +
        to.params.segment ? to.params.segment : '' + ' - '+
        to.params.solution ? to.params.solution : ''

      this.$gtag.pageview({
        page_title: pageTitle,
        page_path: to.path
      })
    },
  },
  created() {
    /** Extract the current active project index. */
    for (let index = 0; index < this.segmentObject.projects.length; index++) {
      if (
        this.segmentObject.projects[index].projectSlug == this.solutionSlug
      ) {
        this.active_index = index
        break
      }
    }
  },
  mounted() {
    this.project = this.segmentObject.projects.find(
      item => item.projectSlug == this.solutionSlug
    )

    this.projectIcon = require('../assets/images/projects/' +
      this.project.icon +
      '.png')
  },
  methods: {
    next() {
      /** Move to the next index. */
      this.active_index = this.active_index + 1 < this.segmentObject.projects.length
        ? this.active_index + 1
        : 0

      this.$router.push({
        name: 'ProjectModal',
        params: {
          solution: this.segmentObject.projects[this.active_index].projectSlug,
        },
      })
    },
    previous() {
      this.active_index = this.active_index - 1 >= 0
        ? this.active_index - 1
        : this.segmentObject.projects.length - 1

      this.$router.push({
        name: 'ProjectModal',
        params: {
          solution: this.segmentObject.projects[this.active_index]
            .projectSlug,
        },
      })
    },
  },
}
</script>
