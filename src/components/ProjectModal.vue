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
            <img
              class="icon icon-md"
              src="../assets/svg/icons/chevron-left.svg"
            >
            <span class="ml-lg-2 text-primary border-bottom border-primary">
              {{ data.modal.previous }}
            </span>
          </a>
          <a
            v-if="segmentObject.projects.length > 1"
            href="#"
            class="ProjectModal-nav"
            @click.prevent="next"
          >
            <span class="mr-lg-2 text-primary border-bottom border-primary">
              {{ data.modal.next }}
            </span>
            <img
              class="icon icon-md"
              src="../assets/svg/icons/chevron-right.svg"
            >
          </a>
        </div>
        <div>
          <router-link
            :to="{
              name: 'Segment',
              params: { slug: slug, segment: segmentSlug },
            }"
          >
            <img
              class="icon icon-sm"
              src="../assets/svg/icons/close.svg"
            >
          </router-link>
        </div>
      </div>

      <div class="ProjectModal-header mt-4">
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
            {{ data.modal.view_project }}
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
                v-if="project.image"
                class="img-fluid"
                :src="project.image.url"
                style="object-fit: contain"
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
            <img
              class="icon icon-md mr-2"
              src="../assets/svg/icons/icon-heart.svg"
            >
            <span v-if="project.adopted">{{
              data.segment_legend.adopted
            }}</span>
            <span v-else>{{ data.segment_legend.unadopted }}</span>
          </div>

          <b-row>
            <b-col cols="12">
              <b-row v-if="project.adopted">
                <template v-for="({sponsor}, index) in project.adopted_by">
                  <b-col
                    :key="index"
                    cols="3"
                  >
                    <a
                      :href="sponsor.link"
                      target="_blank"
                      class="d-block border border-gray PartnersList-itemWrap"
                    >
                      <div class="PartnersList-item">
                        <img
                          :src="sponsor.image.url"
                          class="img-fluid"
                        >
                      </div>
                    </a>
                  </b-col>
                </template>
              </b-row>
              <a
                v-else
                :href="data.modal.finance_cta_link"
                :class="
                  'btn btn-success btn-green px-5 mx-2 my-2 text-white btn-lg'
                "
              >
                {{ data.modal.finance_cta_text }}
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
    // active_index: Number
  },
  test: "test",
  data() {
    return {
      solutionSlug: this.$route.params.solution,
      project: {},
      active_index: null,
    };
  },
  watch: {
    $route(to) {
      this.project = this.segmentObject.projects.find(
        (item) => item.slug == to.params.solution
      );

      this.$gtag.pageview({
        page_title: this.project.slug,
        page_path: window.location.href,
      });
    },
  },
  created() {
    for (let index = 0; index < this.segmentObject.projects.length; index++) {
      if (this.segmentObject.projects[index].slug == this.solutionSlug) {
        this.active_index = index;
        break;
      }
    }
  },
  mounted() {
    this.project = this.segmentObject.projects.find(
      (item) => item.slug == this.solutionSlug
    );

    this.$gtag.pageview({
      page_title: this.project.slug,
      page_path: window.location.href,
    });
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
          solution: this.segmentObject.projects[this.active_index].slug,
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
          solution: this.segmentObject.projects[this.active_index].slug,
        },
      });
    },
  },
};
</script>
