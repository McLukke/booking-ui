import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import asyncMiddleware from 'utils/async-middleware';

import rootReducer from './rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunkMiddleware, asyncMiddleware)),
);

export default store;
