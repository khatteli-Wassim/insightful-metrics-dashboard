import { RealTimeDataService } from '../services/RealTimeDataService';
import { DataPoint } from '../types/DataTypes';

export class DataStreamWidget {
    private dataService: RealTimeDataService;
    private dataPoints: DataPoint[];

    constructor() {
        this.dataService = new RealTimeDataService();
        this.dataPoints = [];
        this.initialize();
    }

    private initialize() {
        this.dataService.startDataStream((newData: DataPoint[]) => {
            this.updateData(newData);
        });
    }

    private updateData(newData: DataPoint[]) {
        this.dataPoints = [...this.dataPoints, ...newData];
        console.log("Updated data points:", this.dataPoints);
    }
}
