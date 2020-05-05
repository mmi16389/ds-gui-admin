<template>
	<v-app
		id="inspire"
		style="padding:20px"
	>
		<v-dialog
			v-model="dialog"
			max-width="900"
			ma-height="900"
			persistent
		>
			<v-card>
				<v-card-title class="headline">
					Details de l'assurée:
				</v-card-title>
				<v-card-text>
					<CostumerForm />
				</v-card-text>
			</v-card>
		</v-dialog>
	</v-app>
</template>

<script lang="ts">
	import Component from 'vue-class-component';
	import Vue from 'vue';

@Component
	export default class CostumersDetails extends Vue {
  dialog = true;
  created() {}
	}
</script>
