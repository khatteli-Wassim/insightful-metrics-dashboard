import { DataPoint, Insight } from '../types/DataTypes';

class DataService {
    private data: DataPoint[] = [];
    private insights: Insight[] = [];

    fetchData(): Promise<DataPoint[]> {
        // Simulation of data fetching
        return new Promise(resolve => {
            setTimeout(() => {
                this.data = [
                    { timestamp: Date.now(), value: Math.random() * 100 },
                    { timestamp: Date.now(), value: Math.random() * 100 }
                ];
                resolve(this.data);
            }, 1000);
        });
    }

    getInsights(): Insight[] {
        return this.insights;
    }
}

export default DataService;