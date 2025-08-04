import { fetchData } from '../utils/Api';
import { DataResponse } from '../types/DataTypes';

export class DataService {
    static async getData(): Promise<DataResponse> {
        try {
            const response = await fetchData('/api/data');
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
