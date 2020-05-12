<template>
	<v-app
		id="inspire"
		style="padding:20px"
	>
		<VCard>
			<VCardTitle>
				Ajouter un nouveau Costumer :
			</VCardTitle>
			<VCardText>
				<CostumerForm
					ref="formCostumer"
					v-model="costumer"
				/>
			</VCardText>
			<VCardActions>
				<ListButtonAction
					:button-actions="buttonActions"
				/>
			</VCardActions>
		</VCard>
	</v-app>
</template>

<script lang="ts">
	import Component from 'vue-class-component';
	import Vue from 'vue';
	import { Costumer, Refs } from '@/types';
	import { ButtonAction } from '@/elements/ListButtonAction';

	@Component
	export default class CostumersAdd extends Vue {
		// Refs
		$refs!: Refs<{
			formCostumer: {
				add: () => void,
				reset: () => void
			};
		}>;
		costumer: Costumer = {};
		buttonActions: ButtonAction[] = [
			{
				label: 'Ajouter',
				type: 'submit',
				action: () => {
					this.$refs.formCostumer.add();
				}
			},
			{
				label: 'Rafraichir',
				type: 'reset',
				action: () => {
					this.$refs.formCostumer.reset();
				}
			}
		];
	}
</script>
