import Vue from 'vue';
import Vuex, { ActionTree, GetterTree, MutationTree, StoreOptions } from 'vuex';
import VuexPersistence from 'vuex-persist';

import { RootState } from './types';
import { Costumer } from '@/types';
import { CostumersState } from '@/store/costumers/types';

/** The store is saved in the browser's session */
const vuexLocal = new VuexPersistence<RootState>();

Vue.use(Vuex);

const state: CostumersState = {
	costumers: new Array<Costumer>(),
	error: false
};
//const namespaced: boolean = true;
/**
 *
 */
const actions = {
	loadCostumers: (context:any, payload: Costumer[]) => {
		context.commit('LOAD_COSTUMERS', payload);
	},
	addCostumer: (context:any, payload: Costumer) => {
		context.commit('ADD_COSTUMER', payload);
	},
	updateCostumer: (context:any, payload: Costumer) => {
		context.commit('UPDATE_COSTUMER', payload);
	}
};
/**
 *
 */
const mutations = {
	LOAD_COSTUMERS: (state:any, costumers: Costumer[]) => {
		state.costumers = costumers;
	},
	ADD_COSTUMER: (state:any, costumers: Costumer) => {
		// @ts-ignore
		state.costumers?.push(costumers);
		console.log(' sate ', state.costumers);
	},
	UPDATE_COSTUMER: (state:any, costumer: Costumer) => {
		let u = -1;
		// @ts-ignore
		u = state.costumers.findIndex((costumer: Costumer) => costumer.id === costumer.id);
		if (u !== -1) {
			// @ts-ignore
			state.costumers[u] = costumer;
		}
	}
};
/**
 *
 */
const getters = {
	costumers: (state:any) => {
		return state.costumers;
	}
};
// @ts-ignore
/** See https://vuex.vuejs.org/fr/getting-started.html for help */
const store: StoreOptions<RootState> = {
	strict: true,
	state: state,
	getters,
	actions,
	mutations
};

export default new Vuex.Store<RootState>(store);
