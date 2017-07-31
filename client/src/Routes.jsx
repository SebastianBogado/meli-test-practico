import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Items from './App/Items';
import ItemDetailView from './App/ItemDetailView';

export default (
  <Route path="/" component={App} >
    <Route path="/items" component={Items} />
    <Route path="/items/:id" component={ItemDetailView} />
  </Route>
);
