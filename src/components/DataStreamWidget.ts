import { DataService } from '../services/DataService';

export class DataStreamWidget {
    private dataService: DataService;

    constructor(dataService: DataService) {
        this.dataService = dataService;
    }

    public renderData(): void {
        const data = this.dataService.getDataStream();
        if (data) {
            // Handle data stream including null or undefined values
            const filteredData = data.filter(datum => datum !== null && datum !== undefined);
            console.log('Rendering Data: ', filteredData);
        } else {
            console.log('No data available');
        }
    }
}