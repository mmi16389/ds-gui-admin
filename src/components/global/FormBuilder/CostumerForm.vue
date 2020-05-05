<template>
	<v-app
		id="inspire"
		style="padding:20px"
	>
		<VForm
			ref="form"
			v-model="valid"
			class="form-builder"
		>
			<VTextField
				v-model="costumer.lastname"
				:rules="nameRules"
				label="Votre nom"
				required
			/>
			<VTextField
				v-model="costumer.firstname"
				label="Votre Prénom"
				:rules="nameRules"
			/>
			<VTextField
				v-model="costumer.email"
				:rules="emailRules"
				label="Votre Adresse mail"
			/>
			<VTextField
				v-model="costumer.adresse"
				label="Votre adresse"
			/>
			<VTextField
				v-model="costumer.zipcode"
				label="Votre code postal"
			/>
			<VTextField
				v-model="costumer.region"
				label="Votre Région"
			/>
			<v-spacer />
			<v-btn
				:disabled="!valid"
				color="primary"
				class="mr-4"
				@click.stop.prevent="actions"
			>
				{{ action==='update'?'METTRE A JOUR':'ENREGISTRER' }}
			</v-btn>

			<v-btn
				color="success"
				class="mr-4"
				@click="mod"
			>
				{{ action==='update'?'SUPPRIMER':'RAFRAICHIR' }}
			</v-btn>
		</VForm>
	</v-app>
</template>

<script lang="ts">
	import Component from 'vue-class-component';
	import Vue from 'vue';
	import { Costumer, Refs } from '@/types';

	const Props = Vue.extend({
		props: {
			/** The HTTP code to display (optional) */
			action: {
				type: String,
				default: 'default'
			}
		}
	});
	@Component
	export default class CostumerForm extends Props {
		// Refs
		$refs!: Refs<{
			form: HTMLFormElement;
		}>;
		costumer: Costumer = {
			lastname: '',
			firstname: '',
			email: '',
			adresse: '',
			zipcode: '',
			region: ''
		};
		valid = true;
		nameRules = [
			(v: any) => !!v || 'Name is required',
			(v: any) => (v && v.length <= 20) || 'Name must be less than 10 characters'
		];

		emailRules = [
			(v: any) => !!v || 'E-mail is required',
			(v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
		];

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

		mod() {
			switch (this.action) {
				case 'add' :
					this.reset();
					break;
				case 'update':
					break;
			}
		}

		validate() {
			if (this.$refs.form.validate()) {
				this.$http.admin.addCostumer(this.costumer);
			}
		}

		update() {
			if (this.$refs.form.validate()) {
				this.$http.admin.updateCostumer(this.costumer);
				this.$router.push({ name: 'home' });
				// this.$emit('close-popup', 'true');
			}
		}

		reset() {
			this.$refs.form.reset();
		}

		created() {
			// eslint-disable-next-line no-mixed-spaces-and-tabs
			if (this.$route.name == 'costumers-details') {
				this.costumer = this.$route.query.costumer as {};
			}
		}
	}
</script>
