
export class Folders {
	public constructor(private readonly axios: any) {}
	getAll(pagination: object) {
		return this.axios.get('/api/all', {
			params: {
				pagination
			}
		});
	}
	updateStatus(id: string, payload: object) {
		return this.axios.post(`/api/${id}/status`, payload);
	}
}
