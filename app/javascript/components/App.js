import React, { Component } from 'react';
import PropTypes from "prop-types"
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './Navbar';
import Main from './Main';
import HeroCreator from './Hero/Creator';
import HomePage from './Homepage';

import store, { history } from '../store';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <Navbar />
          <Main>
            <Switch>
              <Route path={'/create_a_hero'} component={HeroCreator} />
              <Route path={'/homepage'} component={HomePage} />
              <Redirect exact path="/" to="/homepage" />
            </Switch>
          </Main>
        </Provider>
      </Router>
    );
  }
}

App.propTypes = {
  example_property: PropTypes.string
};

export default App;
