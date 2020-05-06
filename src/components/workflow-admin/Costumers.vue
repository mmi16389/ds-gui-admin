<template>
	<v-app
		id="inspire"
		style="padding:20px"
	>
		<v-card>
			<v-card-title>
				Gestion des clients
				<v-spacer />
				<VBtn
					class="ml-2"
					@click="$router.push({ name:'add-new-costumers' })"
				>
					AJOUTER UN ASSUREE
				</VBtn>
				<v-spacer />
				<v-text-field
					v-model="searchTerm"
					append-icon="mdi-magnify"
					label="Rechercher"
					single-line
					hide-details
				/>
			</v-card-title>
			<VDataTable
				:headers="headers"
				:items="costusmers"
				:search="search"
				class="overflow-table row-clickable"
				@click:row="itemClicked"
			/>
		</v-card>
	</v-app>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';
	import Vue from 'vue';

	@Component
	export default class Costumers extends Vue {
		searchTerm = '';
		costusmers = new Array<Costumers>();

		get headers() {
			const tableHeaders = this.$t('components.workflow.costumers.headers');
			return tableHeaders;
		}

		get search() {
			return '';
		}

		created() {
			this.costusmers = this.$store.getters['costumersWorkflow/costumers'];
			this.$bus.$on('update-table', (payload: string) => {
				this.costusmers = [...this.$store.getters['costumersWorkflow/costumers']];
			});
		}

		itemClicked($event: any) {
			this.$router.push({ name: 'costumers-details', query: { dialog: 'true', costumer: $event } }).catch(() => {
			});
		}

	}
</script>
