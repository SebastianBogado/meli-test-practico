import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import searchReducer from './App/App.reducer';
import itemReducer from './App/ItemDetailView/ItemDetailView.reducer';
import breadcrumbsReducer from './App/Breadcrumbs/Breadcrumbs.reducer';

export default combineReducers({
  search: searchReducer,
  itemDetail: itemReducer,
  breadcrumbs: breadcrumbsReducer,
  routing: routerReducer,
});
