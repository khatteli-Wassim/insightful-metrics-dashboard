import React from 'react';
import ReactDOM from 'react-dom';
import { UserSettings } from './components/UserSettings';

const App = () => (
    <div>
        <h1>Insightful Metrics Dashboard</h1>
        <UserSettings theme="dark" notificationsEnabled={true} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
