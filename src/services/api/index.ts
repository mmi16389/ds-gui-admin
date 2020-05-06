import { CostumerService } from './costumer.service';
import { Folders } from './folders.service';

export interface EntityManager<T> {
	getAll: () => void;
	getOne: (entity: T) => void;
	add: (entity: T) => void;
	update: (entity: T) => void;
	delete: (entity: T) => void;
}

function httpService(axios: any) {
	return {
		costumer: new CostumerService(axios),
		folders: new Folders(axios)
	};
}

export default httpService;
