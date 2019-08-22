import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import heroes from './heroes/reducer';

export const history = createBrowserHistory();

export default createStore(
  combineReducers({ heroes }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
