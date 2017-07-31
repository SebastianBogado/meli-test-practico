/*import {
  LOGOUT,
  GET_TOKEN, GET_TOKEN_ERROR, GET_TOKEN_SUCCESS,
  GET_USER_FROM_TOKEN, GET_USER_FROM_TOKEN_SUCCESS,
} from 'js/constants/Actions';
*/

const ITEM_DETAIL_LOADING = 'ITEM_DETAIL_LOADING';
const ITEM_DETAIL_SUCCESS = 'ITEM_DETAIL_SUCCESS';
const ITEM_DETAIL_ERROR = 'ITEM_DETAIL_ERROR';

const initialState = {
  loading: false,
  // item:  {},
  item: {"id":"MLA603701702","title":"Apple Ipod Touch 6ta Gen 16gb Ultima Generacion Caja Sellad","price":{"currency":"$","amount":5999,"decimals":97},"picture":"http://mla-s1-p.mlstatic.com/263901-MLA20426605900_092015-O.jpg","condition":"new","free_shipping":false,"sold_quantity":155,"description":"<table width=\"900\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tbody><tr><td><img src=\"http://www.serviciospcsi.com.ar/graficas/mecafron/header.gif\" height=\"227\" width=\"900\" /></td></tr><tr><td><img src=\"http://www.serviciospcsi.com.ar/graficas/mecafron/ipod touch 2016.jpg\" height=\"4000\" width=\"900\" /></td></tr><tr><td><img src=\"http://www.serviciospcsi.com.ar/graficas/mecafron/mercado.jpg\" height=\"232\" width=\"900\" /></td></tr><tr><td><img src=\"http://www.serviciospcsi.com.ar/graficas/mecafron/envios.gif\" height=\"400\" width=\"900\" /></td></tr><tr><td><img src=\"http://www.serviciospcsi.com.ar/graficas/mecafron/facebook.gif\" height=\"425\" width=\"900\" /></td></tr><tr><td><img src=\"http://www.serviciospcsi.com.ar/graficas/mecafron/pie.jpg\" height=\"794\" width=\"900\" /></td></tr></tbody></table>"},
};


function operations(state = initialState, action) {
  switch (action.type) {
    case ITEM_DETAIL_LOADING:
      return {
        ...initialState,
        loading: true,
      };
    case ITEM_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.response.item,
      };
    case ITEM_DETAIL_ERROR:
      return {
        ...state,
        loading: false,
        error: 'gg'
      };
    default:
      return state;
  }
}

export default operations;
