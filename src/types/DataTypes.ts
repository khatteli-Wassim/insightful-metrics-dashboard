// Define types for data handling
export type DataPoint = {
    timestamp: number;
    value: number;
};

export type Insight = {
    id: string;
    name: string;
    description: string;
    impact: number;
};

export type Widget = {
    id: string;
    type: string;
    settings: Record<string, any>;
};