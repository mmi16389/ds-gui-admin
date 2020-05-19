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
				:items="costumers"
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
			v-draggable
			:dialog.sync="dialog"
			:button-actions="buttonActions"
			title="MODIFIER OU SUPPRIMER"
		>
			<template #content>
				<CostumerForm
					ref="formCostumer"
					v-model="costumer"
				/>
			</template>
		</DialogBox>
	</VApp>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';
	import Vue from 'vue';
	import { Options } from '@cnamts/vue-dot/src/patterns/PaginatedTable/types';
	import { AxiosResponse } from 'axios';
	import { Costumer, Refs } from '@/types';
	import { ButtonAction } from '@/elements/ListButtonAction';
	import CostumerForm from '@/components/global/FormBuilder/CostumerForm.vue';
	import * as config from '@/directives/config';

	@Component({
		components: { CostumerForm , config }
	})
	export default class Costumers extends Vue {
		// Refs
		$refs!: Refs<{
			formCostumer: {
				update: () => void,
				delete: () => void
			};
		}>;
		searchTerm = '';
		costumers = new Array<Costumer>();
		totalCostumers = 100;
		// Default value for options
		options = {} as Options;
		loading = true;
		dialog = false;
		costumer: Costumer = {};
		buttonActions: ButtonAction[] = [
			{
				label: 'Modifier',
				type: 'submit',
				action: () => {
					this.$refs.formCostumer.update();
				}
			},
			{
				label: 'Supprimer',
				type: 'validate',
				action: () => {
					this.$refs.formCostumer.delete();
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

		itemClicked($event: any) {
			this.dialog = true;
			this.costumer = $event;
		}

		allCostumers() {
			this.$http.costumer.getAll().then((resp: AxiosResponse) => {
				this.costumers = resp.data;
				this.loading = false;
			});
		}
	}
</script>
