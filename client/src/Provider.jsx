import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import routes from './Routes';
import reducers from './reducers';


const store = createStore(
  reducers,
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
