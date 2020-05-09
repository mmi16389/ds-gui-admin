<template>
	<VApp
		id="inspire"
		style="padding:20px"
	>
		<VCard>
			<VCardTitle>
				Gestion des clients
				<VSpacer />
				<VTextField
					v-model="searchTerm"
					append-icon="mdi-magnify"
					label="Rechercher"
					single-line
					hide-details
				/>
			</VCardTitle>
			<PaginatedTable
				:headers="headers"
				:items="costusmers"
				:search="search"
				:options="options"
				:loading="loading"
				:server-items-length="totalCostumers"
				class="overflow-table row-clickable"
				@click:row="itemClicked"
			/>
			<VSpacer />
		</VCard>
		<DialogBox
			:dialog.sync="dialog"
			:button-actions="buttonActions"
			title="MODIFIER OU SUPPRIMER"
		/>
	</VApp>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';
	import Vue from 'vue';
	import { Options } from '@cnamts/vue-dot/src/patterns/PaginatedTable/types';
	import { AxiosResponse } from 'axios';
	import { Costumer } from '@/types';
	import { ButtonAction } from '@/elements/ListButtonAction';

	@Component
	export default class Costumers extends Vue {
		searchTerm = '';
		costusmers = new Array<Costumer>();
		totalCostumers = 100;
		// Default value for options
		options = {} as Options;
		loading = true;
		dialog = false;
		costumer: Costumer = { firstname: '', lastname: '', email: '' };
		buttonActions: ButtonAction[] = [
			{
				label: 'Valider',
				type: 'submit',
				action: () => {
				}
			},
			{
				label: 'Supprimer',
				type: 'refresh',
				action: () => {
				}
			}
		];

		get headers() {
			const tableHeaders = this.$t('components.workflow.costumers.headers');
			return tableHeaders;
		}

		get search() {
			return '';
		}

		created() {
			this.allCostumers();
		}

		itemClicked() {
			this.dialog = true;
		}

		allCostumers() {
			this.$http.costumer.getAll().then((resp: AxiosResponse) => {
				this.costusmers = resp.data;
				this.loading = false;
			});
		}
	}
</script>
