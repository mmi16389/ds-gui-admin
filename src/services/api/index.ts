import { Admin } from './admin.service';
import { Folders } from './folders.service';

function httpService(axios: any) {
	return {
		admin : new Admin(axios),
		folders: new Folders(axios) };
}

export default httpService;
