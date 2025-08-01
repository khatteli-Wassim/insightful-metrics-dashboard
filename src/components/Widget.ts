export class Widget {
    id: string;
    type: string;
    data: any;

    constructor(id: string, type: string, data: any) {
        this.id = id;
        this.type = type;
        this.data = data;
    }

    render() {
        console.log(`Rendering widget - ID: ${this.id}, Type: ${this.type}`);
    }

    updateData(newData: any) {
        this.data = newData;
        console.log('Widget data updated');
    }
}