import { AxiosInstance, AxiosResponse } from 'axios';
import { Costumer } from '@/types';
import store from '@/store';
import router from '@/router';
import { EntityManager } from '@/services/api/index';

export class CostumerService implements EntityManager<Costumer> {
	private URL_COSTUMERS ='/costumers';
	public constructor(private readonly axios: AxiosInstance) {
	}

	async add(entity: Costumer) {
		await this.axios.post(this.URL_COSTUMERS, entity);
	}

	async delete(entity: Costumer) {
		await this.axios.delete(this.URL_COSTUMERS+'/'+entity.id);
	}

	async getAll() {
		return await this.axios.get(this.URL_COSTUMERS);
	}

	async getOne(entity: Costumer): Promise<Costumer> {
		return {};
	}

	async update(entity: Costumer) {
		await this.axios.put(this.URL_COSTUMERS+'/'+entity.id, entity);
	}
}
