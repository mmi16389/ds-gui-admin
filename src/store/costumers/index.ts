import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { RootState } from '../types';
import { CostumersState } from './types';
import { Costumer } from '@/types';

const state: CostumersState = {
	costumers: new Array<Costumer>(),
	error: false
};
const namespaced: boolean = true;
/**
 *
 */
export const actions: ActionTree<CostumersState, RootState> = {
	loadCostumers: (context, payload: Costumer[]) => {
		context.commit('LOAD_COSTUMERS', payload);
	},
	addCostumer: (context, payload: Costumer) => {
		context.commit('ADD_COSTUMER', payload);
	},
	updateCostumer: (context, payload: Costumer) => {
		context.commit('UPDATE_COSTUMER', payload);
	}
};
/**
 *
 */
export const mutations: MutationTree<CostumersState> = {
	LOAD_COSTUMERS: (state, costumers: Costumer[]) => {
		state.costumers = costumers;
	},
	ADD_COSTUMER: (state, costumers: Costumer) => {
		// @ts-ignore
		state.costumers?.push(costumers);
		console.log(' sate ', state.costumers)
	},
	UPDATE_COSTUMER: (state, costumer: Costumer) => {
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
export const getters: GetterTree<CostumersState, RootState> = {
	costumers: (state) => {
		return state.costumers;
	}
};
/**
 *
 */
export const costumersWorkflow: Module<CostumersState, RootState> = {
	namespaced,
	state,
	getters,
	actions,
	mutations
};
