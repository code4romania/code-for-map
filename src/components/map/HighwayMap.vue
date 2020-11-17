<template>
  <b-container fluid class="px-5">
    <b-row class="d-flex align-items-center">
      <b-col cols="12" lg="9">
        <div>
          <img class="img-fluid img w-100 h-100" :src="data.map_bg" alt="" />
          <div
            class="map-link"
            :style="{
              top: highway.button.top,
              left: highway.button.left,
              bottom: highway.button.bottom,
              right: highway.button.right,
            }"
          >
            <img class="img-fluid" :src="highway.button.btn" />
          </div>
          <ul>
            <li
              class="list-style-none"
              v-for="highway_section in highway.highway"
              :key="highway_section.id"
            >
              <router-link
                :to="{ name: 'Home' }"
                class="map-link"
                :style="{
                  top: highway_section.title.top,
                  left: highway_section.title.left,
                  bottom: highway_section.title.bottom,
                  right: highway_section.title.right,
                }"
              >
                <p class="p-0 m-0 font-size-small">
                  {{ highway_section.title.text }}
                </p>
              </router-link>
              <router-link
                :to="{ name: 'Home' }"
                class="map-link"
                :style="{
                  top: highway_section.image.top,
                  left: highway_section.image.left,
                  bottom: highway_section.image.bottom,
                  right: highway_section.image.right,
                }"
              >
                <img class="img-fluid" :src="highway_section.image.image" />
              </router-link>
              <router-link
                :to="{ name: 'Home' }"
                class="map-link"
                :style="{
                  top: highway_section.highway_portion.top,
                  left: highway_section.highway_portion.left,
                  bottom: highway_section.highway_portion.bottom,
                  right: highway_section.highway_portion.right,
                }"
              >
                <img
                  class="img-fluid"
                  :src="highway_section.highway_portion.highway"
                />
              </router-link>
            </li>
          </ul>
        </div>
      </b-col>
      <b-col cols="12" lg="3">
        <Legend class="p-2" :legend="data.legend" />
      </b-col>
      <b-col cols="12" class="border-top border-primary py-5 my-5">
        <h3 class="text-center pb-3">{{ highway.title }}</h3>
        <p>{{ highway.description }}</p>
      </b-col>
      <b-col cols="12">
        <b-row>
          <b-col
            cols="3"
            class="py-3"
            v-for="highway_category in highway.highway"
            :key="highway_category.id"
          >
            <router-link
              :to="{ name: 'Home' }"
              class="d-flex align-items-center justify-content-start"
            >
              <img
                class="img-fluid"
                :src="highway_category.image.image"
                alt=""
              />
              <p class="p-0 m-0 ml-2">{{ highway_category.title.text }}</p>
            </router-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <YoutubeContent :youtubeContent="highway.youtube" />
  </b-container>
</template>

<script>
import Legend from "../map/Legend";
import YoutubeContent from "../YoutubeContent";

export default {
  name: "HighwayMap",
  props: {
    data: {
      type: Object,
    },
  },
  components: {
    Legend,
    YoutubeContent,
  },
  data() {
    return {
      slug: this.$route.params.slug,
      highway: [],
    };
  },
  created() {
    this.highway = this.data.harta.find((item) => item.slug == this.slug);
  },
};
</script>

<style></style>
