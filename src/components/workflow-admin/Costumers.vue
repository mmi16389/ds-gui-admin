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
	import store from '@/store';

	@Component
	export default class Costumers extends Vue {
		searchTerm = '';

		get headers() {
			const tableHeaders = this.$t('components.workflow.costumers.headers');
			return tableHeaders;
		}

		get search() {
			return '';
		}

		get costumers() {
			return this.$store.getters['costumersWorkflow/costumers'];
		}

		itemClicked($event: any) {
			this.$router.push({ name: 'costumers-details', query: { dialog: 'true', costumer: $event } }).catch(() => {
			});
		}

		allCostumers() {
			this.$http.admin.getAllAdmin().then((resp: AxiosResponse) => {
				this.$store.dispatch('costumersWorkflow/loadCostumers', resp.data);
			});
		}
	}
</script>
