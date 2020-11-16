<template>
	<b-container fluid class="home px-5">
		<b-row class="d-flex align-items-center">
			<b-col cols="12" lg="9">
				<MainMap :data="data" />
			</b-col>
			<b-col cols="12" lg="3" class="pl-lg-5">
				<img class="mb-3" :src="data.code4ro_logo" alt="" />
				<Legend class="p-2" :legend="data.legend" />
			</b-col>
			<b-col cols="12" class="border-bottom border-primary py-3 my-4">
				<Parteners :parteners="data.parteners_obj" />
			</b-col>
			<b-col cols="12" class="my-3">
				{{ data.text_content.home.text_1 }}
			</b-col>
			<b-col cols="12" class="mt-3">
				<b-row class="d-flex flex-column flex-lg-row">
					<b-col
						v-for="highway_details in data.harta"
						:key="highway_details.id"
						class="col"
					>
						<div class="d-flex align-items-center">
							<img
								class="img-fluid"
								width="60px"
								height="60px"
								:src="highway_details.logo"
								alt=""
							/>
							<span class="ml-2">{{ highway_details.title }}</span>
						</div>
						<div
							v-for="(category, index) in highway_details.highway"
							:key="index"
						>
							<router-link :to="{ name: 'About', params: category }">
								<div class="d-flex align-items-center my-3 my-md-4 my-lg-5">
									<img
										class="img-fluid"
										width="45px"
										height="45px"
										:src="category.image.image"
										alt=""
									/>
									<span class="ml-2">{{ category.title }}</span>
								</div>
							</router-link>
						</div>
					</b-col>
				</b-row>
			</b-col>
			<b-col cols="12" class="my-3">
				{{ data.text_content.home.text_2 }}
			</b-col>
			<b-col cols="12" class="my-3">
				<p>{{ data.buttons.title }}</p>
				<Buttons :button="data.buttons" />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	/** Import components */
	import MainMap from "../components/map/MainMap";
	import Parteners from "../components/Parteners";
	import Buttons from "../components/Buttons";
	import Legend from "../components/map/Legend";

	export default {
		/** Component name. */
		name: "Home",
		/** Recived object props from App. */
		props: {
			data: {
				type: Object,
			},
		},
		components: {
			MainMap,
			Parteners,
			Buttons,
			Legend,
		},
	};
</script>
