import { Widget } from './Widget';

export function createWidget(id: string, type: string, data: any): Widget {
    return new Widget(id, type, data);
}