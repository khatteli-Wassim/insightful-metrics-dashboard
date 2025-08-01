import { DataService } from './DataService';

export class RealTimeDataService implements DataService {
    public getDataStream(): any[] {
        // Mock data stream with various edge cases
        return [1, 2, null, 4, undefined, 6];
    }
}