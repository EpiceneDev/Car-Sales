import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {reducer} from './reducer';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
export const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
