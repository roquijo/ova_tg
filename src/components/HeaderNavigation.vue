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
				<v-list-item v-for="([icon, text, link], i) in itemsNav" :key="i" link @click="$vuetify.goTo(link)">
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

		<v-app-bar app :color="color" :flat="flat" dark class="px-15" :class="{ expand: flat }">
			<v-toolbar-title>
				<v-img src="@/assets/img/logoU.png" max-width="50px" />
			</v-toolbar-title>
			<v-toolbar-title class="pl-5" v-if="!isXs" v-t="'headerSection.title'"></v-toolbar-title>
			<v-spacer />
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
			<div v-else>
				<v-row align="center" style="display: flex; align-items: center;">
					<v-col sm="3">
						<v-menu offset-y transition="slide-y-transition">
							<template v-slot:activator="{ on, attrs }">
								<v-btn text v-bind="attrs" v-on="on">
									Corte 1
								</v-btn>
							</template>
							<v-list>
								<v-list-item v-for="(item, index) in items" :key="index">
									<v-list-item-title>{{ item.title }}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-col>
					<v-col sm="3">
						<v-btn text >
							<span class="mr-2">Corte 2</span>
						</v-btn>
					</v-col>
					<v-col sm="3">
						<v-btn text>
							<span class="mr-2">Corte 3</span>
						</v-btn>
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
			["mdi-home-outline", "Home", "#principalSection"],
			["mdi-book-open-variant", "Corte 1", "#"],
			["mdi-book-open-variant", "Corte 2", "#"],
			["mdi-book-open-variant", "Corte 3", "#"],
		],
		items: [
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me 2' },
		],
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
  