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
					<v-spacer />
					<v-btn
						top
						right
						small
						@click="close"
					>
						<v-icon>mdi-plus</v-icon>
					</v-btn>
				</v-card-title>
				<v-card-text>
					<CostumerForm
						:action="'update'"
						@close-popup="dialog=false"
					/>
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

		close() {
			this.dialog = false;
			this.$router.push({ name: 'home' });
		}

		updated() {
			console.log(' componenent is updated');
		}
	}
</script>
