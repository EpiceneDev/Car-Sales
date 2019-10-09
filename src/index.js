import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { featurereducer } from './reducer';

import Dashboard from './components/Dashboard';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(featureReducer);

function App() {
    return (
        <div className="App">
            <Dashboard />
        </div>
    )
}

const rootElement = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
