import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducer/reducers';
import createSaga from 'redux-saga';
import saga from '../saga/saga';

const sageMiddleware = createSaga();

const store = createStore(reducers, applyMiddleware(sageMiddleware));

sageMiddleware.run(saga)
export default store;