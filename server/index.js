const axios = require('axios');
const express = require('express');
const _ = require('lodash');
const app = express();


function appendAuthor(req, res, next) {
  const oldSend = res.send;

  // this works but I'm creating a function on each request... :/
  res.send = function() {
    arguments[0].author = {
      name: 'Sebastián',
      lastname: 'Bogado',
    };
    oldSend.apply(res, arguments);
  };

  next();
}
app.use('/api', appendAuthor);

function getCity({city, state, country}) {
  if (city && city.name) return city.name;
  if (state && state.name) return state.name;
  if (country && country.name) return country.name;
}

function mapItems(results) {
  return results.map( item => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.trunc(item.price),
      decimals: item.price % 1
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    seller_city: getCity(item.seller_address)
  }))
}

function getCategoryIdWithMoreResults(data) {
  return _.chain(data.available_filters)
    .find({id: 'category'})
    .get('values')
    .sortBy('results')
    .last()
    .get('id')
    .value();
}

app.get('/api/items', function (req, res) {
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}&limit=4`)
    .then(function (response) {
      const catId = getCategoryIdWithMoreResults(response.data);

      return Promise.all([
        axios.get('https://api.mercadolibre.com/categories/' + catId),
        response.data.results
      ])
    })
    .then( function ([category, results]) {
      res.send({
        categories: _.map(category.data.path_from_root, 'name'),
        items: mapItems(results)
      });

    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get('/api/items/:id', function (req, res) {

  axios.get('https://api.mercadolibre.com/items/:id')
  axios.get('https://api.mercadolibre.com/items/:id/description')
  axios.get('https://api.mercadolibre.com/categories/:id')
  res.send({
    item: {
      id: "MLA603701702",
      title: "Apple Ipod Touch 6ta Gen 16gb Ultima Generacion Caja Sellad",
      price: {
        currency: "ARS",
        amount: 5999,
        decimals: 97
      },
      picture: "http://mla-s1-p.mlstatic.com/977901-MLA20426607586_092015-I.jpg",
      condition: "new",
      free_shipping: false,
      sold_quantity: 155,
      description: '<table width="900" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/header.gif" height="227" width="900" /></td></tr><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/ipod touch 2016.jpg" height="4000" width="900" /></td></tr><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/mercado.jpg" height="232" width="900" /></td></tr><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/envios.gif" height="400" width="900" /></td></tr><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/facebook.gif" height="425" width="900" /></td></tr><tr><td><img src="http://www.serviciospcsi.com.ar/graficas/mecafron/pie.jpg" height="794" width="900" /></td></tr></tbody></table>'
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
