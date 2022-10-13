<template>
	<v-app>
		<v-app-bar app color="#0F113B" dark>
			<div class="d-flex align-center">
				<v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../assets/img/logoU.png"
					transition="scale-transition" width="40" />
				<v-app-bar-title>
					Universidad de Ibagué
				</v-app-bar-title>
			</div>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-heart</v-icon>
			</v-btn>

			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<v-menu left bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item v-for="n in 5" :key="n" @click="() => {}">
						<v-list-item-title>Option {{ n }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

			<template v-slot:extension>
				<v-tabs align-with-title>
					<v-tab>Corte 1</v-tab>
					<v-tab>Corte 2</v-tab>
					<v-tab>Corte 3</v-tab>
				</v-tabs>
			</template>
		</v-app-bar>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>


<script>

export default {
	name: 'HeaderNavigation',

};

</script>