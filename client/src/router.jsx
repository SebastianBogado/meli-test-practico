import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';

const reducers = {};

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(routerMiddleware(browserHistory), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const history = syncHistoryWithStore(browserHistory, store);

const App = () => <div> app </div>;

const AppRouter = function AppRouter() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
};

export default AppRouter;
