export interface Widget {
    id: string;
    type: string;
    config: Record<string, any>;
}

class BaseWidget implements Widget {
    id: string;
    type: string;
    config: Record<string, any>;

    constructor(id: string, type: string, config: Record<string, any> = {}) {
        this.id = id;
        this.type = type;
        this.config = config;
    }

    render(): string {
        return `<div>Widget: ${this.type}</div>`;
    }
}

export default BaseWidget;