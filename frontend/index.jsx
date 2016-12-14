import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Login from './components/login';

import get from './util/get';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/tireless-tracker/" component={Login} />
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.get = get;
  if (sessionStorage.jwt) {
    const preloadedState = { session: { currentUser: sessionStorage.jwt } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  render(<Root store={store} />, root);
});
