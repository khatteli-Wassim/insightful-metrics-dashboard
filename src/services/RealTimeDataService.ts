import { Observable, Subject } from 'rxjs';

class RealTimeDataService {
    private dataStream: Subject<any>;

    constructor() {
        this.dataStream = new Subject();
    }

    public getDataStream(): Observable<any> {
        return this.dataStream.asObservable();
    }

    public pushData(data: any): void {
        this.dataStream.next(data);
    }
}

export default new RealTimeDataService();