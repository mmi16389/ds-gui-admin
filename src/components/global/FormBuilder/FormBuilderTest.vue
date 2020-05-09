<template>
	<v-app
		id="inspire"
		style="padding:20px"
	>
		<v-row id="formBuilder">
			<v-col :md="6">
				<FormBuilder v-model="questionForm" />
			</v-col>
			<v-col :md="6">
				<FormBuilder v-model="addressForm" />
			</v-col>
			<v-spacer />
			<v-btn
				color="primary"
				class="mr-4"
				@click.stop.prevent="actions"
			>
				{{ action==='update'?'METTRE A JOUR':'ENREGISTRER' }}
			</v-btn>

			<v-btn
				color="success"
				class="mr-4"
				@click="modulo"
			>
				{{ action==='update'?'SUPPRIMER':'RAFRAICHIR' }}
			</v-btn>
		</v-row>
	</v-app>
</template>

<script lang="ts">
	import Component from 'vue-class-component';
	import Vue from 'vue';
	import { questionForm } from '@/components/global/FormBuilder/datas/questionForm';
	import { addressForm } from '@/components/global/FormBuilder/datas/addressForm';

	const Props = Vue.extend({
		props: {
			action: {
				type: String,
				default: 'default'
			}
		}
	});
	@Component
	export default class FormBuilderText extends Props {
		title = 'Ajouter un nouveau costumer';
		questionForm = questionForm;
		addressForm = addressForm;

		actions() {
			switch (this.action) {
				case 'add' :
					this.validate();
					break;
				case 'update':
					this.update();
					break;
			}
		}

		modulo() {
			switch (this.action) {
				case 'add' :
					this.reset();
					break;
				case 'update':
					this.delete();
					break;
			}
		}

		validate() {
        console.log(' hello the world ', this.questionForm);
		}

		update() {

		}

		delete() {

		}

		reset() {

		}
	}
</script>
