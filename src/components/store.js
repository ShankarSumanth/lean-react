import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';


const middleware = applyMiddleware(logger());

export default createStore(reducers, middleware);
