<template>
  <div>
    <div class="Segment d-lg-none">
      <HighwayHeader
        :logo="code4ro_map.slug"
        :title="code4ro_map.title"
        class="d-block d-lg-none"
      />

      <SegmentHeader
        :icon="segment.highway_slug"
        :slug="slug"
        :color="code4ro_map.color"
        :title="segment.title"
        :description="segment.description"
      />

      <SegmentLegend :status="data.segment_legend" :color="code4ro_map.color" />

      <div class="ProjectsList">
        <template v-for="(project, index) in segment.projects">
          <a class="d-flex align-items-center justify-content-between ListItem"
            v-bind:key="'project-' + index"
            :id="project.id"
            @click="projectClicked(index)"
          >
              <i class="icon icon-circle" :class="'border-' + code4ro_map.color"></i>
              <div class="flex-fill mx-2">{{project.title}}</div>
              <svg class="icon"><use xlink:href="#chevron-right"></use></svg>
          </a>
        </template>
      </div>
    </div>

    <div class="Segment d-none d-lg-block">

      <div class="SegmentVisual-wrap mt-4">
        <router-link
          :to="{ name: 'Highway', params: { slug: slug } }"
          class="SegmentVisual-close"
        >
          <svg class="icon icon-md"><use xlink:href="#close"></use></svg>
        </router-link>
        <div class="SegmentVisual">
          <svg class="segment">
            <use :xlink:href="'#' + segment.segment_visual"></use>
          </svg>
        </div>
      </div>

      <div class="Segment-info d-none d-lg-block">
        <b-row>
          <div class="col-2" v-if="segment.financed">
            <p>{{ data.general.financed_by_general_text }}</p>
            <template v-for="(financed, index) in segment.financed_by">
              <div  :key="index">
                <svg class="icon icon-lg"><use :xlink:href="`#` + financed.logo"></use></svg>
              </div>
            </template>
          </div>
          <div class="col-8" :class="segment.financed ? 'offset-2' : 'offset-4'">
            <div v-html="segment.description" />
          </div>
        </b-row>
      </div>

      <b-modal ref="myModal" size="lg" centered hide-header hide-footer no-fade>

        <div class="py-1" :class="`bg-` + code4ro_map.color"></div>

        <div class="ProjectModal p-3">

          <div class="d-flex align-items-center justify-content-between my-4">
            <div class="SegmentLegend-status d-flex align-items-center">
              <i class="icon icon-circle" :class="'border-' + code4ro_map.color"></i>
              {{ data.segment_legend.done }}
            </div>
            <svg class="icon icon-sm" @click="hideModal" style="cursor: pointer"><use xlink:href="#close"></use></svg>
          </div>

          <div class="d-flex align-items-center justify-content-between my-4">
            <h3>{{segment.projects[active_project_index].title}}</h3>

            <a :href="segment.projects[active_project_index].link" v-if="segment.projects[active_project_index].link">
              <svg class="icon icon-sm"><use xlink:href="#icon-redirect"></use></svg>
              {{segment.projects[active_project_index].link_text}}
            </a>
          </div>

          <b-row>
            <b-col xs="12" lg="6">
              <div class="border border-gray mb-3 text-center">
                <img class="img-fluid" :src="segment.projects[active_project_index].icon" />
              </div>
              <div class="d-none d-lg-block">
                <div class="w-50 d-flex align-items-center">
                  <svg class="icon icon-md mr-2"><use xlink:href="#icon-heart"></use></svg>
                  <span v-if="segment.projects[active_project_index].adopted">{{ data.segment_legend.adopted }}</span>
                  <span v-else>{{ data.segment_legend.neadoptat }}</span>
                </div>

                <b-row>
                  <b-col cols="12">
                    <b-row class="my-3" v-if="segment.projects[active_project_index].adopted">
                      <template v-for="(partner, index) in segment.projects[active_project_index].adopted_by">
                        <b-col cols="2" :key="index">
                          <svg class="icon icon-lg"><use :xlink:href="`#` + partner.logo"></use></svg>
                        </b-col>
                      </template>
                    </b-row>
                    <a v-else :href="data.call_to_action.finance.link" :class="'btn btn-' + data.call_to_action.finance.color + ' btn-custom px-5 mx-2 my-2 text-white btn-lg'">
                      {{data.call_to_action.finance.title}}
                    </a>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col xs="12" lg="6" v-html="segment.projects[active_project_index].description" />
            <b-col cols="12" lg="6" class="d-lg-none">
              <div class="w-50 d-flex align-items-center">
                <svg class="icon icon-md mr-2"><use xlink:href="#icon-heart"></use></svg>
                <span v-if="segment.projects[active_project_index].adopted">{{ data.segment_legend.adopted }}</span>
                <span v-else>{{ data.segment_legend.neadoptat }}</span>
              </div>

              <b-row>
                <b-col cols="12">
                  <b-row class="my-3" v-if="segment.projects[active_project_index].adopted">
                    <template v-for="(partner, index) in segment.projects[active_project_index].adopted_by">
                      <b-col cols="2" :key="index">
                        <svg class="icon icon-lg"><use :xlink:href="`#` + partner.logo"></use></svg>
                      </b-col>
                    </template>
                  </b-row>
                  <a v-else :href="data.call_to_action.finance.link" :class="'btn btn-' + data.call_to_action.finance.color + ' btn-custom px-5 mx-2 my-2 text-white btn-lg'">
                    {{data.call_to_action.finance.title}}
                  </a>
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <b-row>
            <b-col cols="12" class="mt-5">
              <div class="d-flex align-items-center justify-content-between">
                <span @click="previous" v-if="segment.projects.length > 1">
                  <svg class="icon icon-sm"><use xlink:href="#chevron-left"></use></svg>
                  {{data.general.modal.previous.text}}
                </span>
                <span @click="next" v-if="segment.projects.length > 1">
                  {{data.general.modal.next.text}}
                  <svg class="icon icon-sm"><use xlink:href="#chevron-right"></use></svg>
                </span>
              </div>
            </b-col>
          </b-row>

        </div>
      </b-modal>

    </div>
  </div>
</template>

<script>
import postMessage from "../utils/postMessage";

import HighwayHeader from "../components/map/HighwayHeader";
import SegmentHeader from "../components/map/SegmentHeader";
import SegmentLegend from "../components/map/SegmentLegend";

export default {
  name: "Solution",
  props: {
    data: {
      type: Object,
    },
  },
  components: {
    HighwayHeader,
    SegmentHeader,
    SegmentLegend,
  },
  data() {
    return {
      slug: this.$route.params.slug,
      highway_slug: this.$route.params._slug,
      code4ro_map: [],
      segment: [],
      active_project_index: 0,
    };
  },
  /** Vue created life cycle initialize data for this route. */
  created() {
    this.code4ro_map = this.data.code4ro_map.find(
      (item) => item.slug == this.slug
    );
    this.segment = this.code4ro_map.highway_segment.find(
      (item) => item.highway_slug == this.highway_slug
    );

    this.data.back_to_map.visible = true;
  },
  mounted() {
    postMessage({ height: document.body.scrollHeight });

    const projects = document.getElementsByClassName('btn-project');

    projects.forEach(project => {
      project.addEventListener('click', () => {
        this.projectClicked(parseInt(project.getAttribute('projectid'), 10))
      })
    })
  },
  methods: {
    projectClicked(index) {
      // TODO: FIX PROJECT SELECTION BUG HERE
      this.active_project_index = index;

      this.$refs.myModal.show();
    },
    hideModal() {
      this.$refs.myModal.hide();
    },
    next() {
      if (this.active_project_index === this.segment.projects.length) {
        this.active_project_index = 0;
      } else {
        this.active_project_index++;
      }
    },
    previous() {
      if (0 === this.active_project_index) {
        this.active_project_index = this.segment.projects.length;
      } else {
        this.active_project_index--;
      }
    },
  },
};
</script>

<style>
.icon-text-container {
  width: 128px;
}
</style>