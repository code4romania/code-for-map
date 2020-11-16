const data = {
	code4ro_logo: require("../assets/images/code4ro-logo.svg"),
	map_bg: require("../assets/images/harta.svg"),
	header: {
		title: "Digitalizăm România împreună",
		text:
			"Navighează prin planul nostru de digitalizare a României cu ajutprul hărții de mai jos. Dă click pe oricare dintre autostrăzi sau iconițe care marchează segmentele de drum pentru a descoperi soluțiile de care avem nevoie pentru a avea o țară funcțională. ",
	},
	parteners_obj: {
		id: 1,
		title: "Alături de: ",
		parteners_arr: [
			{
				id: 1,
				title: "",
				link: "",
				image: require("../assets/images/parteners/partener-1.svg"),
			},
			{
				id: 2,
				title: "",
				link: "",
				image: require("../assets/images/parteners/partener-2.svg"),
			},
			{
				id: 3,
				title: "",
				link: "",
				image: require("../assets/images/parteners/partener-3.svg"),
			},
		],
	},
	text_content: {
		home: {
			text_1:
				"Diam donec adipiscing tristique risus nec feugiat in. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Elementum nibh tellus molestie nunc non. Condimentum vitae sapien pellentesque habitant. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Habitasse platea dictumst quisque sagittis purus sit. Viverra tellus in hac habitasse platea dictumst vestibulum. Vel elit scelerisque mauris pellentesque. Nec nam aliquam sem et tortor consequat. Ultricies leo integer malesuada nunc vel risus commodo. Egestas diam in arcu cursus euismod. Rhoncus urna neque viverra justo nec ultrices dui. Amet venenatis urna cursus eget nunc scelerisque. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Nunc mi ipsum faucibus vitae aliquet nec.",
			text_2:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet id donec ultrices. Arcu risus quis varius quam quisque id. Diam donec adipiscing tristique risus nec feugiat in. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Elementum nibh tellus molestie nunc non. Condimentum vitae sapien pellentesque habitant.",
		},
	},
	buttons: {
		id: 1,
		title: "CUM POȚI AJUTA:",
		spread: {
			text: "Dă de veste",
			state: false,
		},
		give: {
			text: "Donează",
			state: false,
		},
		adopt: {
			text: "Adoptă",
			state: false,
		},
	},
	legend: {
		id: 1,
		title: "Legendă",
		drum_executat: "Drum executat",
		drum_proiectat: "Drum proiectat",
		drum_planificat: "Drum planificat",
		destinatie: "Destinație",
		tema: "Obiectiv temă",
		realizat: "Obiectiv realizat",
		planificat: "Obiectiv planificat",
	},
	harta: [
		{
			id: 1,
			title: "Education for Romania",
			logo: require("../assets/images/education4ro/education4ro-logo.svg"),
			button: {
				left: '35.7%',
				right: '58.53%',
				top: '60.35%',
				bottom: '37.02%',
				btn: require("../assets/images/education4ro/button.svg"),
			},
			highway: [
				{
					id: 1,
					title: "Profesori bine pregătiți",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/education4ro/category-images/well-trained-teachers.svg"),
					},
					highway_portion: {
						id: 1,
						left: "61.43%",
						right: "32.78%",
						top: "6.96%",
						bottom: "82.58%",
						highway: require("../assets/images/education4ro/highway/highway_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 2,
					title: "Abilități pentru viața reală",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/education4ro/category-images/abilities-for-real-life.svg"),
					},
					highway_portion: {
						id: 1,
						left: "61.2%",
						right: "34.22%",
						top: "16.91%",
						bottom: "79.34%",
						highway: require("../assets/images/education4ro/highway/highway_2.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 3,
					title: "Acces la educație",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/education4ro/category-images/education-access.svg"),
					},
					highway_portion: {
						id: 1,
						left: "57.58%",
						right: "37.63%",
						top: "20.07%",
						bottom: "64.37%",
						highway: require("../assets/images/education4ro/highway/highway_3.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 4,
					title: "Învățământ preuniversitar de calitate",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/education4ro/category-images/quality-prestudies.svg"),
					},
					highway_portion: {
						id: 1,
						left: "40.23%",
						right: "42.07%",
						top: "35.11%",
						bottom: "51.38%",
						highway: require("../assets/images/education4ro/highway/highway_4.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 5,
					title: "Învățământ universitar de calitate",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/education4ro/category-images/quality-university-studies.svg"),
					},
					highway_portion: {
						id: 1,
						left: "30.47%",
						right: "59.41%",
						top: "48.14%",
						bottom: "47.13%",
						highway: require("../assets/images/education4ro/highway/highway_5.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 6,
					title: "Școli sigure și bine administrate",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/education4ro/category-images/secure-schools.svg"),
					},
					highway_portion: {
						id: 1,
						left: "29.88%",
						right: "62.52%",
						top: "52.39%",
						bottom: "35%",
						highway: require("../assets/images/education4ro/highway/highway_6.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
			],
		},
		{
			id: 2,
			title: "Care for Romania",
			logo: require("../assets/images/care4ro/care4ro-logo.svg"),
			button: {
				left: '49.78%',
				right: '44.5%',
				top: '14.16%',
				bottom: '83.21%',
				btn: require("../assets/images/care4ro/button.svg"),
			},
			highway: [
				{
					id: 1,
					title: "Fără trafic de persoane",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/care4ro/category-images/no-human-trafic.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 2,
					title: "O viață bună pentru copiii abandonați",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/care4ro/category-images/better-life-for-orphan-children.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 3,
					title: "Șanse pentru persoanele cu dizabilități",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/care4ro/category-images/chance-for-disability-persons.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 4,
					title: "Fără discriminare împotriva etniei rome",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/care4ro/category-images/no-discrimination.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 5,
					title: "Incluziune pentru persoanele LGBTQ+",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/care4ro/category-images/lgbtq.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 6,
					title: "Diaspora mai aproape de casă ",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/care4ro/category-images/diaspora.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 7,
					title: "Fără violență acasă",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/care4ro/category-images/no-violence-at-home.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
			],
		},
		{
			id: 3,
			title: "Environment for Romania",
			logo: require("../assets/images/environment4ro/environment4ro-logo.svg"),
			button: {
				top: "14.16%",
				bottom: "83.21%",
				right: "44.5%",
				left: "49.78%",
				// btn: require("../assets/images/care-for-romania.svg"),
			},
			highway: [
				{
					id: 1,
					title: "Pregătiți pentru următorul dezastru natural",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/environment4ro/category-images/ready-for-natural-dezasters.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 2,
					title: "Pregătiți pentru cutremur",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/environment4ro/category-images/ready-for-earthquake.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 3,
					title: "Măsurarea poluării",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/environment4ro/category-images/polution.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 4,
					title: "Reducerea poluării",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/environment4ro/category-images/polution-red.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 5,
					title: "Reciclarea și managementul deșeurilor",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/environment4ro/category-images/recycling.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 6,
					title: "Orașe prietenoase",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/environment4ro/category-images/friendly-cities.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 7,
					title: "Sate dezvoltate",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/environment4ro/category-images/villages.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 8,
					title: "Protecția naturii",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/environment4ro/category-images/environment-protection.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 9,
					title: "Păduri protejate și sănătoase",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/environment4ro/category-images/forest.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
			],
		},
		{
			id: 4,
			title: "Health for Romania",
			logo: require("../assets/images/health4ro/health4ro-logo.svg"),
			button: {
				top: "14.16%",
				bottom: "83.21%",
				right: "44.5%",
				left: "49.78%",
				// btn: require("../assets/images/care-for-romania.svg"),
			},
			highway: [
				{
					id: 1,
					title: "Grijă pentru sănătatea mamei și a copilului",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/health4ro/category-images/mother-and-child.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 2,
					title: "Sprijin pentru cei grav bolnavi",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/health4ro/category-images/care.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 3,
					title: "Servicii de sănătate eficiente",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/health4ro/category-images/eficient-health.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 4,
					title: "Spitale funcționale",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/health4ro/category-images/hospitals.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 5,
					title: "Sprijin, nu pedeapsă pentru dependenți",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/health4ro/category-images/support.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 6,
					title: "Sănătate mintală pentru toți",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/health4ro/category-images/mental-health.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
			],
		},
		{
			id: 5,
			title: "Participation for Romania",
			logo: require("../assets/images/participation4ro/participation4ro-logo.svg"),
			button: {
				top: "14.16%",
				bottom: "83.21%",
				right: "44.5%",
				left: "49.78%",
				// btn: require("../assets/images/care-for-romania.svg"),
			},
			highway: [
				{
					id: 1,
					title: "Acces la cultură",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/participation4ro/category-images/culture.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 2,
					title: "Jurnaliști eficienți",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/participation4ro/category-images/jurnalism.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 3,
					title: "Primarii funcționale",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/participation4ro/category-images/cityhall.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 4,
					title: "Instituții centrale funcționale",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/participation4ro/category-images/institutions.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 5,
					title: "O mai bună relație cetățean stat",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/participation4ro/category-images/relations.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 6,
					title: "O societate civilă puternică",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/participation4ro/category-images/ong.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 7,
					title: "Alegeri cortecte. Alegători informați.",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/participation4ro/category-images/election.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 8,
					title: "Date deschise",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/participation4ro/category-images/dates.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
				{
					id: 9,
					title: "Legislație accesibilă",
					image: {
						left: "7.24%",
						right: "87.07%",
						top: "48.44%",
						bottom: "48.93%",
						image: require("../assets/images/participation4ro/category-images/legislation.svg"),
					},
					highway_portion: {
						id: 1,
						left: "51.61%",
						right: "46.85%",
						top: "17.24%",
						bottom: "79.46%",
						// road: require("../assets/images/autostrada-health-care/autostrada_1.svg"),
						projects: [
							{
								id: 1,
								project: {
									id: 1,
									title: "",
									image: "",
								},
							},
						],
					},
				},
			],
		},
	],
};
export default data;
