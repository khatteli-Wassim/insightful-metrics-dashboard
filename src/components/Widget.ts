import { WidgetFactory } from './WidgetFactory';
import { WidgetConfig } from '../types/DataTypes';

export class Widget {
    private config: WidgetConfig;
    private element: HTMLElement;

    constructor(config: WidgetConfig) {
        this.config = config;
        this.element = document.createElement('div');
        this.init();
    }

    private init() {
        this.element.className = 'widget-container';
        this.updateStyles();
    }

    private updateStyles() {
        this.element.style.margin = '15px';  // Adjusted the margin for better spacing
        this.element.style.padding = '10px';
        this.element.style.borderRadius = '8px';
        this.element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }

    public render() {
        // Render logic here
    }

    public update(config: WidgetConfig) {
        this.config = config;
        // Update the widget based on new config
    }
}