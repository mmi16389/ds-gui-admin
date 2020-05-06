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
	},
	deleteCostumer: (context, payload: Costumer) => {
		context.commit('DELETE_COSTUMER', payload);
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
		let a = -1;
		// @ts-ignore
		costumers.id = Math.floor(Math.random() * 1000);
		// @ts-ignore
		a = state.costumers.findIndex((costumer: Costumer) => costumer.id === costumer.id);
		if (a !== -1) {
			// @ts-ignore // Math.floor(Math.random() * 100)
			costumers.id++;
		}
		state.costumers?.push(costumers);
	},
	UPDATE_COSTUMER: (state, costumer: Costumer) => {
		let u = -1;
		// @ts-ignore
		u = state.costumers.findIndex((costumer: Costumer) => costumer.id === costumer.id);
		if (u !== -1) {
			// @ts-ignore
			state.costumers[u] = costumer;
		}
	},
	DELETE_COSTUMER: (state, costumer: Costumer) => {
		let d = -1;
		// @ts-ignore
		d = state.costumers.findIndex((costumer: Costumer) => costumer.id === costumer.id);
		if (d !== -1) {
			// @ts-ignore
			state.costumers.splice(d, 1);
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
