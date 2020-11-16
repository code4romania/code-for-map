<template>
	<div class="about">
		{{ category.id }}
	</div>
</template>

<script>
	export default {
		props: {
			category: {
				type: Object,
			},
		},
		data() {},
	};
</script>
