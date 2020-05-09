import { VueConstructor } from 'vue';

interface Components {
	[name: string]: VueConstructor;
}

/** Register components in the global Vue instance */
function register(Vue: VueConstructor, componentList: Components) {
	Object.keys(componentList).forEach((name: string) => {
		Vue.component(name, componentList[name]);
	});
}

// Custom block
import Vue from 'vue';

import ErrorPage from './ErrorPage';
import { CostumerForm, DocSection, FormBuilderText } from '@/components/global/FormBuilder';
import DialogBox from '@/elements/DialogBox/DialogBox.vue';
import ListButtonAction from '@/elements/ListButtonAction/ListButtonAction.vue';
const components: Components = {
	ErrorPage,
	CostumerForm,
	FormBuilderText,
	DocSection,
	DialogBox,
	ListButtonAction
};

register(Vue, components);
