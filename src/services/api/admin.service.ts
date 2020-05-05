import { AxiosInstance, AxiosResponse } from 'axios';

export class Admin {
	public constructor(private readonly axios: AxiosInstance) {}

	public async getAllAdmin() {
		return await this.axios.get('/costumers');
	}
}
