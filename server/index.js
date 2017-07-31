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
      if (response.data.results.length === 0) return Promise.resolve({ categories: [], items: []});

      const catId = getCategoryIdWithMoreResults(response.data);

      return Promise.all([
        axios.get('https://api.mercadolibre.com/categories/' + catId),
        response
      ])
        .then( function ([category, results]) {
          return {
            categories: _.map(category.data.path_from_root, 'name'),
            items: mapItems(results.data.results)
          };
        })
    })
    .then(res.send)
    .catch(function (error) {
      console.error(error);
    });
});

function getImage(item) {
  return _.chain(item.pictures)
    .sortBy((pic) => pic.size.split('x').reduce((a, b) => a * b, 1))
    .last()
    .get('url', item.thumbnail)
    .value();
}

app.get('/api/items/:id', function (req, res) {
  axios.all([
    axios.get(`https://api.mercadolibre.com/items/${req.params.id}`),
    axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)
  ])
    .then( function ([item, description]) {
      const catId = item.data.category_id;

      return Promise.all([
        axios.get('https://api.mercadolibre.com/categories/' + catId),
        item,
        description
      ])
    })
    .then( function ([category, item, description]) {
      item = item.data;

      res.send({
        categories: _.map(category.data.path_from_root, 'name'),
        item: {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: Math.trunc(item.price),
            decimals: item.price % 1
          },
          picture: getImage(item),
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          sold_quantity: item.sold_quantity,
          description: description.data.plain_text || description.data.text
        }
      });

    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
