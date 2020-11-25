<template>
  <div>
    <div class="Segment d-lg-none">
      <HighwayHeader
        :logo="code4ro_map.slug"
        :title="code4ro_map.title"
        class="d-block d-lg-none"
      />

      <Delimiter :delimiter="code4ro_map.delimiter_1" />

      <SegmentHeader
        :icon="segment.highway_slug"
        :slug="slug"
        :color="code4ro_map.color"
        :title="segment.title"
        :description="segment.description"
      />

      <Delimiter :delimiter="code4ro_map.delimiter_1" />

      <SegmentLegend :status="data.segment_legend" :color="code4ro_map.color" />

      <Delimiter :delimiter="code4ro_map.delimiter_2" />

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

      <Delimiter :delimiter="code4ro_map.delimiter_2" />
    </div>
    <div class="Segment d-none d-lg-block">
      <div class="SegmentVisual-wrap my-4">
        <router-link
          :to="{ name: 'Highway', params: { slug: slug } }"
          class="SegmentVisual-close"
        >
          <svg class="icon icon-sm"><use xlink:href="#close"></use></svg>
        </router-link>
        <div class="SegmentVisual">
          <svg class="segment">
            <use :xlink:href="'#' + segment.segment_visual"></use>
          </svg>
        </div>
        <!-- Modal -->
        <div class="d-none d-lg-block">
          <template v-for="(project, index) in segment.projects" >
            <a
              v-bind:key="'project-label-' + index"
              :style="{
                position: 'absolute',
                top: project.position.top,
                left: project.position.left,
              }"
              :id="project.id"
              @click="projectClicked(index)"
              >{{ project.title }}</a
            >
          </template>
        </div>
        <b-modal ref="myModal" size="lg" centered hide-header hide-footer no-fade>
          <div class="py-1" :class="`bg-` + code4ro_map.color"></div>
          <div class="d-flex align-items-center justify-content-between p-3">
            <div class="SegmentLegend-status d-flex align-items-center col-1">
              <i class="icon icon-circle" :class="'border-' + code4ro_map.color"></i>
              {{ data.segment_legend.done }}
            </div>
            <svg class="icon icon-sm" @click="hideModal" style="cursor: pointer"><use xlink:href="#close"></use></svg>
          </div>
          <b-row class="p-3">
            <b-col cols="6">
              <p>{{data.general.modal.redirect}}</p>
            </b-col>
            <b-col cols="6">
              <svg class="icon icon-sm"><use xlink:href="#icon-redirect"></use></svg>
              <a :href="segment.projects[active_project_index].link" class="ml-2" style="text-decoration:underline">{{segment.projects[active_project_index].link_text}}</a>
            </b-col>
            <b-col cols="12" lg="6">
              <div class="border p-4 my-3 d-flex align-items-center justify-content-center">
                <svg class="icon icon-lg"><use :xlink:href="`#` + segment.projects[active_project_index].icon"></use></svg>
                {{ segment.projects[active_project_index].title }}
              </div>
                <div class="w-50 d-flex align-items-center">
                  <svg class="icon icon-md mr-2"><use xlink:href="#icon-heart"></use></svg>
                  <span v-if="segment.projects[active_project_index].adopted">{{ data.segment_legend.adopted }}</span>
                  <span v-else>{{ data.segment_legend.neadoptat }}</span>
                </div>
                <b-row>
                  <b-col cols="12">
                    <b-row class="my-3">
                      <template v-for="(partner, index) in segment.projects[active_project_index].adopted_by">
                        <b-col cols="2" :key="index">
                          <svg class="icon icon-lg"><use :xlink:href="`#` + partner.logo"></use></svg>
                        </b-col>
                      </template>
                    </b-row>
                  </b-col>
                </b-row>
            </b-col>
            <b-col cols="6" class="my-3">
              {{ segment.projects[active_project_index].description }}
            </b-col>
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
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
/** Imported components */
import HighwayHeader from "../components/map/HighwayHeader";
import Delimiter from "../components/Delimiter";
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
    Delimiter,
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
  methods: {
    projectClicked(index) {
      this.active_project_index = index;
      this.$refs.myModal.show();
    },
    hideModal() {
      this.$refs.myModal.hide();
    },
    next() {
      if (this.active_project_index === this.segment.projects.length - 1) {
        this.active_project_index = 0;
      } else {
        this.active_project_index++;
      }
    },
    previous() {
      if (0 === this.active_project_index) {
        this.active_project_index = this.segment.projects.length - 1;
      } else {
        this.active_project_index--;
      }
    },
  },
};
</script>
