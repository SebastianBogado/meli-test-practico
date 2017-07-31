const axios = require('axios');
const API_URL = 'https://api.mercadolibre.com';

module.exports = {
  search: q => axios.get(`${API_URL}/sites/MLA/search?q=${q}&limit=4`),
  category: id => axios.get(`${API_URL}/categories/${id}`),
  item: id => axios.get(`${API_URL}/items/${id}`),
  itemDescription: id => axios.get(`${API_URL}/items/${id}/description`),
};
