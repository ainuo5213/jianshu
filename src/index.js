import React from 'react'

import {render} from 'react-dom'
import App from './components/App'
import './assets/reset.css'
import store from "./redux/store";
import {Provider} from "react-redux";

render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));
