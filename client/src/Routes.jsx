import React from 'react';
import { Route } from 'react-router';
import App from './App';
import SearchResultsView from './App/SearchResultsView';
import ItemDetailView from './App/ItemDetailView';

export default (
  <Route path="/" component={App} >
    <Route path="/items" component={SearchResultsView} />
    <Route path="/items/:id" component={ItemDetailView} />
  </Route>
);
