import { Widget } from './Widget';
import { DataStreamWidget } from './DataStreamWidget';
import { WeatherDataWidget } from './WeatherDataWidget';

export class WidgetFactory {
    static createWidget(type: string): Widget {
        switch (type) {
            case 'dataStream':
                return new DataStreamWidget();
            case 'weatherData':
                return new WeatherDataWidget();
            default:
                throw new Error(`Unknown widget type: ${type}`);
        }
    }
}
