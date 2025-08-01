import { DataService } from '../services/DataService';

export class Widget {
    private dataService = new DataService();

    constructor(private id: string, private type: string) {}

    async loadData() {
        try {
            const data = await this.dataService.fetchData(`/api/widgets/${this.id}`);
            console.log('Data loaded for widget', this.id, data);
        } catch (error) {
            console.error('Error loading data for widget', this.id, error);
        }
    }
}
