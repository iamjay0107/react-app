import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {BrowserRouter}  from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import store from './store'

import App from './App'

const app = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, app
);
