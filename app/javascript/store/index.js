import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import heros from './heros/reducer';

export const history = createBrowserHistory();

export default createStore(
  combineReducers({ heros }),
  composeWithDevTools(applyMiddleware(thunk)),
);
