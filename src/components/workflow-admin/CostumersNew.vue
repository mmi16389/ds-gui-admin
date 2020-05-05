<template>
	<v-app
		id="inspire"
		style="padding:20px"
	>
		<v-card>
			<v-card-title>
				Ajouter un nouveau assurée
				<v-spacer />
				<VBtn
					class="ml-2"
					@click="$router.back()"
				>
					RETOUR
				</VBtn>
			</v-card-title>
			<CostumerForm />
		</v-card>
	</v-app>
</template>

<script lang="ts">
	import Component from 'vue-class-component';
	import Vue from 'vue';

	@Component
	export default class CostumersAdd extends Vue {

	}
</script>
