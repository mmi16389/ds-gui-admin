import { Form } from '@cnamts/vue-dot/src/patterns/FormBuilder/types';

const defaultItem = [
	{
		text: 'bis',
		value: 'valueBis'
	},
	{
		text: 'ter',
		value: 'valueTer'
	},
	{
		text: 'quater',
		value: 'valueQuater'
	}
];

export const addressForm: Form = {
	streetComplement: {
		type: 'text',
		value: null,
		metadata: {
			label: 'Complément d\'adresse'
		}
	},
	postalCode: {
		type: 'number',
		value: null,
		metadata: {
			mask: '#####',
			label: 'Code postal'
		}
	},
	city: {
		type: 'text',
		value: null,
		metadata: {
			label: 'Ville'
		}
	}
};
