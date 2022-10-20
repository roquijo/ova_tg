<template>
	<div>
		<v-navigation-drawer v-model="drawer" app temporary dark src="@/assets/img/bgDrawer.jpg">
			<v-list>
				<v-list-item>
					<v-list-item-avatar>
						<img src="@/assets/img/logoU.png" alt="Logo" />
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title class="overflow-visible" v-t="'headerSection.title'"></v-list-item-title>
						<v-list-item-subtitle>Ova</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<v-divider />

			<v-list dense>
				<v-list-item v-for="([icon, text, link], i) in itemsNav" :key="i" link :to="link">
					<v-list-item-icon class="justify-center">
						<v-icon>{{ icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title class="subtitile-1">{{
						text
						}}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app :color="color" :flat="flat" dark :class="{ expand: flat }">
			<a class="navbar-brand" href="/">
				<v-toolbar-title>
					<v-img src="@/assets/img/logoU.png" max-width="50px" />
				</v-toolbar-title>
			</a>
			<v-toolbar-title style="cursor: pointer" @click="$router.push('/')"  class="pl-5" v-if="!isXs" v-t="'headerSection.title'" to="/"/>

			<v-spacer />
			<div v-if="isXs">
				<v-row style="display: flex; align-items: center;">
					<v-col>
						<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
					</v-col>
					<v-col>
						<div class="pt-7">
							<idiom />
						</div>
					</v-col>
				</v-row>
			</div>
			<div v-else>
				<v-row align="center" style="display: flex; align-items: center;">
					<v-col sm="3">
						<v-menu open-on-hover offset-y transition="slide-x-transition" bottom right>
							<template v-slot:activator="{ on, attrs }">
								<v-btn text v-bind="attrs" v-on="on">
									Corte 1
								</v-btn>
							</template>
							<v-list dense>
								<v-list-item v-for="(item, index) in links" :key="index" router :to="item.link">
									<v-icon>{{ item.icon }}</v-icon>
									<v-list-item-action>
										<v-list-item-title>{{ item.title }}</v-list-item-title>
									</v-list-item-action>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-col>
					<v-col sm="3">
						<v-menu open-on-hover offset-y transition="slide-x-transition" bottom right>
							<template v-slot:activator="{ on, attrs }">
								<v-btn text v-bind="attrs" v-on="on">
									Corte 2
								</v-btn>
							</template>
							<v-list dense>
								<v-list-item v-for="(item, index) in links" :key="index" router :to="item.link">
									<v-icon>{{ item.icon }}</v-icon>
									<v-list-item-action>
										<v-list-item-title>{{ item.title }}</v-list-item-title>
									</v-list-item-action>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-col>
					<v-col sm="3">
						<v-menu open-on-hover offset-y transition="slide-x-transition" bottom right>
							<template v-slot:activator="{ on, attrs }">
								<v-btn text v-bind="attrs" v-on="on">
									Corte 3
								</v-btn>
							</template>
							<v-list dense>
								<v-list-item v-for="(item, index) in links" :key="index" router :to="item.link">
									<v-icon>{{ item.icon }}</v-icon>
									<v-list-item-action>
										<v-list-item-title>{{ item.title }}</v-list-item-title>
									</v-list-item-action>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-col>
					<v-col sm="3">
						<div class="pt-7">
							<idiom />
						</div>
					</v-col>
				</v-row>
			</div>
		</v-app-bar>
	</div>
</template>
  
<style scoped>
.v-toolbar {
	transition: 0.6s;
}

.expand {
	height: 80px !important;
	padding-top: 10px;
}
</style>
  
<script>

import idiom from './IdiomSwitch.vue';

export default {
	components: {
		idiom
	},
	data: () => ({
		drawer: null,
		isXs: false,
		itemsNav: [
			["mdi-home-outline", "Home", "/"],
			["mdi-book-open-variant", "Corte 1", "/algorithmsView"],
			["mdi-book-open-variant", "Corte 2", "#"],
			["mdi-book-open-variant", "Corte 3", "#"],
		],
		links: [{
			icon: "mdi-domain",
			title: "Media Monitoring",
			link: "/algorithmsView"
		},
		{
			icon: "mdi-message-text",
			title: "Audience Measurement",
			link: "/amrservices"
		},
		{
			icon: "mdi-flag",
			title: "Integration Analysis"
		}
		]
	}),
	props: {
		color: String,
		flat: Boolean,
	},
	methods: {
		onResize() {
			this.isXs = window.innerWidth < 850;
		},
	},

	watch: {
		isXs(value) {
			if (!value) {
				if (this.drawer) {
					this.drawer = false;
				}
			}
		},
	},
	mounted() {
		this.onResize();
		window.addEventListener("resize", this.onResize, { passive: true });
	},
};
</script>
  