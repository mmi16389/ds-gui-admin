import { AxiosInstance, AxiosResponse } from 'axios';
import { Costumer } from '@/types';
import store from '@/store';
import router from '@/router';
import { EntityManager } from '@/services/api/index';

export class CostumerService implements EntityManager<Costumer> {
	public constructor(private readonly axios: AxiosInstance) {
	}

	async add(entity: Costumer) {
		/*await this.axios.post('/costumers', costumer).then((resp: AxiosResponse) => {
		});*/
		store.dispatch('costumersWorkflow/addCostumer', entity);
		router.push({ name: 'home' });
	}

	async delete(entity: Costumer) {
		store.dispatch('costumersWorkflow/deleteCostumer', entity);
	}

	async getAll() {
		return await this.axios.get('/costumers');
	}

	async getOne(entity: Costumer): Promise<Costumer> {
		return {};
	}

	async update(entity: Costumer) {
		/*await this.axios.put('', costumer).then((resp: AxiosResponse) => {
	});*/
		store.dispatch('costumersWorkflow/updateCostumer', entity);
	}
}
