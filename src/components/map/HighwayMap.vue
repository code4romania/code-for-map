<template>
	<div>
		<div>{{ highway.title }}</div>
	</div>
</template>

<script>
	export default {
		name: "HighwayMap",
		props: {
			data: {
				type: Object,
			},
		},
		data() {
			return {
				id: this.$route.params.id,
				highway: [],
			};
		},
		created() {
			this.highway = this.data.harta.find((item) => item.id == this.id);
		},
	};
</script>

<style></style>
