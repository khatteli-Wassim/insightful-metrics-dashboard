import RealTimeDataService from '../services/RealTimeDataService';

class DataStreamWidget {
    constructor() {
        this.initializeStream();
    }

    private initializeStream(): void {
        RealTimeDataService.getDataStream().subscribe(data => {
            console.log('Received new data:', data);
            // Update widget with real-time data
        });
    }
}

export default DataStreamWidget;