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
					@click="addNewUser"
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
				:items="costumers"
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
	import { AxiosResponse } from 'axios';

	@Component
	export default class Costumers extends Vue {
		searchTerm = '';
		costumers = new Array<Costumers>();
		idTable = '1';

		get headers() {
			const tableHeaders = this.$t('components.workflow.costumers.headers');
			return tableHeaders;
		}

		get search() {
			return '';
		}

		itemClicked($event: any) {
			this.$router.push({ name: 'costumers-details', query: { dialog: 'true', costumer: $event } }).catch(() => {
			});
		}

		created() {
			this.costumers = this.$store.getters.costumers;
			this.$eventBus.$on('on-table', (value: string) => {
				this.costumers = [];
				this.costumers = [...this.$store.getters.costumers];
			});
		}

		addNewUser() {
			this.$router.push({ name: 'add-new-costumers' });
		}

		allCostumers() {
			this.$http.admin.getAllAdmin().then((resp: AxiosResponse) => {
				this.costumers = this.$store.getters.costumers;
			});
		}
	}
</script>
