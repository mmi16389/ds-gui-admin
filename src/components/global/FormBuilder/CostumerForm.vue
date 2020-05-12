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
				v-model="field.lastname"
				:rules="nameRules"
				label="Votre nom"
				required
			/>
			<VTextField
				v-model="field.firstname"
				label="Votre Prénom"
				:rules="nameRules"
			/>
			<VTextField
				v-model="field.email"
				:rules="emailRules"
				label="Votre Adresse mail"
			/>
			<VTextField
				v-model="field.adresse"
				label="Votre adresse"
			/>
			<VTextField
				v-model="field.zipcode"
				label="Votre code postal"
			/>
			<VTextField
				v-model="field.region"
				label="Votre Région"
			/>
			<v-spacer />
		</VForm>
	</v-app>
</template>

<script lang="ts">
	import Component from 'vue-class-component';
	import Vue, { PropType } from 'vue';
	import { Costumer, Refs } from '@/types';

	const Props = Vue.extend({
		props: {
			action: {
				type: String,
				default: 'default'
			},
			field: {
				type: Object as PropType<Costumer>,
				required: false
			}
		}
	});
	@Component(
		{
			model: {
				prop: 'field',
				event: 'change'
			}
		}
	)
	export default class CostumerForm extends Props {
		// Refs
		$refs!: Refs<{
			form: HTMLFormElement;
		}>;
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
					this.add();
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

		add() {
			if (this.$refs.form.validate()) {
				this.$http.costumer.add(this.field);
			}
		}

		update() {
			if (this.$refs.form.validate()) {
				this.$http.costumer.update(this.field);
			}
		}

		delete() {
			this.$http.costumer.delete(this.field);
		}

		reset() {
			this.$refs.form.reset();
		}
	}
</script>
