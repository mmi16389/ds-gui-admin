<template>
	<v-app
		id="inspire"
		style="padding:20px"
	>
		<v-card>
			<v-card-title>
				<v-card-title>Ajouter un nouveau Costumer :</v-card-title>
			</v-card-title>
			<CostumerForm :action="'add'" />
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
