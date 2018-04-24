import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootRedcuer from './reducers';
import { addCharacterById } from './actions';

const store= createStore(rootRedcuer);
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)