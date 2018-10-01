import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const initialState = JSON.parse(localStorage.getItem("state"));
const store = createStore(reducers, (initialState)? initialState:{}, applyMiddleware(reduxThunk));

const historial = [];
store.subscribe(()=> {
    historial.push(store.getState());
    localStorage.setItem("state", JSON.stringify(store.getState()));
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));
	