// Import necessary types
import React from 'react';
import { DataType } from '../types/DataTypes';

interface DataStreamWidgetProps {
    data: DataType[];
    title: string;
}

const DataStreamWidget: React.FC<DataStreamWidgetProps> = ({ data, title }) => {
    if (!data) {
        return <div className='error'>Data is currently unavailable</div>;
    }

    return (
        <div className='data-stream-widget'>
            <h2>{title}</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataStreamWidget;
