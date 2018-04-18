import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux';
import store from './js/store';
import { saveState } from './js/storage';
import throttle  from 'lodash/throttle';

store.subscribe( throttle(() => {
    saveState({
        token:store.getState().token,
        sectionView:store.getState().sectionView,
        userType: store.getState().userType,
        cart: store.getState().cart
    });
}, 1000))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
