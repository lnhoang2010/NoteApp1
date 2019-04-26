import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducers from './../reducers';
import {composeWithDevTools} from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = composeWithDevTools({port:8888})
const Store = createStore(combineReducers(reducers), composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default Store;