export class DataService {
    async fetchData(endpoint: string): Promise<any> {
        // Simulate fetching data from an API
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: 'Sample data from ' + endpoint });
            }, 1000);
        });
    }
}