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
				@click="validate"
			>
				SOUMETTRE
			</v-btn>

			<v-btn
				color="success"
				class="mr-4"
				@click="reset"
			>
				REINITIALISER
			</v-btn>
		</VForm>
	</v-app>
</template>

<script lang="ts">
	import Component from 'vue-class-component';
	import Vue from 'vue';
	import { Costumer, Refs } from '@/types';

	@Component
	export default class CostumerForm extends Vue {
		// Refs
		$refs!: Refs<{
			form: HTMLFormElement;
		}>;
		costumer: Costumer = {
			lastname: '',
			firstname: '',
			email: '',
			adresse:'',
			zipcode: '',
			region:''
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

		validate() {
			if (this.$refs.form.validate()) {
				this.costumer.id = Math.floor(Math.random() * 100);
				console.log(' show costumers ', this.costumer);
				this.$store.dispatch('costumersWorkflow/addCostumer', this.costumer);
				this.$router.push({ name:'home' });
			}
		}

		reset() {
			this.$refs.form.reset();
		}
	}
</script>
