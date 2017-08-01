/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import routes from './Routes';
import reducers from './reducers';


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;


const store = createStore(
  reducers,
  preloadedState,
  compose(
    applyMiddleware(routerMiddleware(browserHistory), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

const history = syncHistoryWithStore(browserHistory, store);

const AppProvider = function AppRouter() {
  return (
    <Provider store={store}>
      <Router routes={routes} history={history} />
    </Provider>
  );
};

export default AppProvider;
