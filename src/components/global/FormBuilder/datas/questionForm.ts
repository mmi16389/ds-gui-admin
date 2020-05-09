import { Form } from '@cnamts/vue-dot/src/patterns/FormBuilder/types';

export const questionForm: Form = {
	firstName: {
		type: 'text',
		value: null,
		metadata: {
			label: 'Votre nom'
		}
	},
	lastName: {
		type: 'text',
		value: null,
		metadata: {
			label: 'Votre prenom'
		}
	},
	email: {
		type: 'text',
		value: null,
		metadata: {
			label: 'Votre mail'
		}
	}
};
