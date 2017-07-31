import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import App from './App/App.jsx';
import Items from './App/Items';
import Item from './App/Item';
import searchReducer from './App/App.reducer';
import itemReducer from './App/Item/Item.reducer';
import breadcrumbsReducer from './App/Breadcrumbs/Breadcrumbs.reducer';

const store = createStore(
  combineReducers({
    search: searchReducer,
    itemDetail: itemReducer,
    breadcrumbs: breadcrumbsReducer,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(routerMiddleware(browserHistory), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const history = syncHistoryWithStore(browserHistory, store);

const AppRouter = function AppRouter() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} >
          <Route path="/items" component={Items} />
          <Route path="/items/:id" component={Item} />
        </Route>
      </Router>
    </Provider>
  );
};

export default AppRouter;
