import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import Login from './components/login';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Login} />
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (sessionStorage.jwt) {
    const preloadedState = { session: { currentUser: sessionStorage.jwt } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  render(<Root store={store} />, root);
});
