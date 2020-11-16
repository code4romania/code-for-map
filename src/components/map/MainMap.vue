<template>
	<div class="bg-danger p-0 m-0">
		<ul class="w-100 h-100 p-0 m-0">
			<img class="w-100" :src="data.map_bg" alt="" />
			<li
				class="list-style-none map-link"
				:style="{
					top: mapButton.button.top,
					left: mapButton.button.left,
					bottom: mapButton.button.bottom,
					right: mapButton.button.right,
				}"
				v-for="mapButton in data.harta"
				:key="mapButton.id"
			>
				<router-link :to="{ name: 'Highway', params: { id: mapButton.id } }">
					<img class="img-fluid w-100 h-100" :src="mapButton.button.btn" />
				</router-link>
			</li>
		</ul>
		<div v-for="complete_highway in data.harta" :key="complete_highway.id">
			<ul>
				<li
					class="list-style-none map-link"
					v-for="highway in complete_highway.highway"
					:key="highway.id"
					:style="{
						top: highway.highway_portion.top,
						left: highway.highway_portion.left,
						bottom: highway.highway_portion.bottom,
						right: highway.highway_portion.right,
					}"
				>
					<img class="img-fluid" :src="highway.highway_portion.highway" />
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
</style>
