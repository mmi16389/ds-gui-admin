import { AxiosResponse } from 'axios';
import httpService from '@/services/api/index';
import instance from '@/plugins/axios';
import store from '@/store';
const http = httpService(instance);

/**
 *  Call all costumers
 */
function allCostumers() {
	let costumers: any = [];
	http.admin.getAllAdmin().then((resp: AxiosResponse) => {
		costumers = resp.data;
		store.dispatch('costumersWorkflow/loadCostumers', costumers);
	});
}
