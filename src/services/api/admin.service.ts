import { AxiosInstance, AxiosResponse } from 'axios';
import { Costumer } from '@/types';
import store from '@/store';
import router from '@/router';

export class Admin {
	public constructor(private readonly axios: AxiosInstance) {
	}

	public async getAllAdmin() {
		return await this.axios.get('/costumers');
	}

	/**
	 *
	 * @param costumer
	 */
	public async addCostumer(costumer: Costumer) {
		/*await this.axios.post('/costumers', costumer).then((resp: AxiosResponse) => {
		});*/
		costumer.id = Math.floor(Math.random() * 100);
		store.dispatch('costumersWorkflow/addCostumer', costumer);
		router.push({ name: 'home' });
	}

	/**
	 *
	 * @param costumer
	 */
	public async updateCostumer(costumer: Costumer) {
		/*await this.axios.put('', costumer).then((resp: AxiosResponse) => {
		});*/
		store.dispatch('costumersWorkflow/updateCostumer', costumer);
	}
}
