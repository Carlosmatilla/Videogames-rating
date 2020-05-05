import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import store from './redux/store'
import 'antd/dist/antd.css';


const nodes = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(nodes, document.getElementById('root'));

