<template>
  <div class="w-100 h-100 p-0 m-0">
    <img class="img-fluid img w-100 h-100" :src="data.map_bg" alt="" />
    <ul class="p-0 m-0">
      <li
        class="list-style-none map-link p-0 m-0"
        :style="{
          top: mapButton.button.top,
          left: mapButton.button.left,
          bottom: mapButton.button.bottom,
          right: mapButton.button.right,
        }"
        v-for="mapButton in data.harta"
        :key="mapButton.id"
      >
        <router-link
          :to="{ name: 'Highway', params: { slug: mapButton.slug } }"
        >
          <img class="img-fluid w-100 h-100" :src="mapButton.button.btn" />
        </router-link>
      </li>
    </ul>
    <div v-for="complete_highway in data.harta" :key="complete_highway.id">
      <ul>
        <li
          class="list-style-none"
          v-for="highway in complete_highway.highway"
          :key="highway.id"
        >
          <router-link
            class="map-link"
            :style="{
              top: highway.highway_portion.top,
              left: highway.highway_portion.left,
              bottom: highway.highway_portion.bottom,
              right: highway.highway_portion.right,
            }"
            :to="{ name: 'Highway', params: { slug: complete_highway.slug } }"
          >
            <img class="img-fluid" :src="highway.highway_portion.highway" />
          </router-link>
          <router-link
            class="map-link"
            :style="{
              top: highway.image.top,
              left: highway.image.left,
              bottom: highway.image.bottom,
              right: highway.image.right,
            }"
            :to="{ name: 'Highway', params: { slug: complete_highway.slug } }"
          >
            <img class="img-fluid" :src="highway.image.image" />
          </router-link>
          <router-link
            class="map-link"
            :style="{
              top: highway.title.top,
              left: highway.title.left,
              bottom: highway.title.bottom,
              right: highway.title.right,
            }"
            :to="{ name: 'Highway', params: { slug: complete_highway.slug } }"
          >
            <p class="font-size-small text-center p-0 m-0">
              {{ highway.title.text }}
            </p>
          </router-link>
          <div
            v-for="project in highway.highway_portion.projects"
            :key="project.id"
          >
            <router-link
              class="map-link"
              :style="{
                top: project.project.title.top,
                left: project.project.title.left,
                bottom: project.project.title.bottom,
                right: project.project.title.right,
              }"
              :to="{ name: 'Highway', params: { slug: complete_highway.slug } }"
            >
              <p class="font-size-small text-center p-0 m-0">
                {{ project.project.title.text }}
              </p>
            </router-link>
            <!-- <router-link
							class="map-link"
							:style="{
								top: project.project.image.top,
								left: project.project.image.left,
								bottom: project.project.image.bottom,
								right: project.project.image.right,
							}"
							:to="{ name: 'Highway', params: { slug: complete_highway.slug } }"
						>
							<img class="img-fluid" :src="project.project.image.highway" />
						</router-link> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMap",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>

<style>
.map-link {
  position: absolute;
  z-index: auto;
}
.list-style-none {
  list-style: none;
}
.font-size-small {
  font-size: 5px;
}
.img {
  position: relative;
  padding-left: 0.19%;
  padding-right: -0.05%;
  padding-top: 0.41%;
  padding-bottom: -0.2%;
}
a {
  padding: 0;
  margin: 0;
}
</style>
