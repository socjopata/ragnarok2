import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import heroes from './heroes/reducer';
import advantages from './advantages/reducer';
import implants from './implants/reducer';

export const history = createBrowserHistory();

export default createStore(
  combineReducers({ heroes, advantages, implants }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);
