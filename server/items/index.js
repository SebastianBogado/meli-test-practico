const express = require('express');
const _ = require('lodash');
const router = express.Router();
const meli = require('./meli');

function getCity({city, state, country}) {
  if (city && city.name) return city.name;
  if (state && state.name) return state.name;
  if (country && country.name) return country.name;
}

function getBestImage(item) {
  return _.chain(item.pictures)
    .sortBy((pic) => pic.size.split('x').reduce((a, b) => a * b, 1))
    .last()
    .get('url', item.thumbnail)
    .value();
}


// Ideally this should consider every symbol
const currencySymbols = {
  'ARS': '$'
};

function mapPrice(item) {
  return {
    currency: currencySymbols[item.currency_id],
    amount: Math.trunc(item.price),
    decimals: Math.trunc((item.price % 1) * 100)
  }
}

function mapItem(item) {
  return {
    id: item.id,
    title: item.title,
    price: mapPrice(item),
    picture: getBestImage(item),
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
    seller_city: getCity(item.seller_address)
  };
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

router.get('/', function (req, res) {
  meli.search(req.query.q)
    .then(function (response) {
      if (response.data.results.length === 0) return Promise.resolve({ categories: [], items: []});

      const catId = getCategoryIdWithMoreResults(response.data);
      let categoryPromise;

      // sometimes we can't rely on category with most results appearing as a filter
      if (!catId) {
        categoryPromise = Promise.resolve({
          data: _.chain(response.data.filters)
            .find({id: 'category'})
            .get('values')
            .head()
            .value(),
        });
      } else {
        categoryPromise = meli.category(catId);
      }

      return Promise.all([
        categoryPromise,
        response
      ])
        .then( function ([category, results]) {
          return {
            categories: _.map(category.data.path_from_root, 'name'),
            items: results.data.results.map(mapItem),
          };
        })
    })
    .then(res.send)
    .catch(function (error) {
      console.error(error);
    });
});

router.get('/:id', function (req, res) {
  Promise.all([
    meli.item(req.params.id),
    meli.itemDescription(req.params.id),
  ])
    .then( function ([item, description]) {
      return Promise.all([
        meli.category(item.data.category_id),
        item,
        description
      ])
    })
    .then( function ([category, item, description]) {
      const mappedItem = mapItem(item.data);
      mappedItem.description = description.data.plain_text || description.data.text;

      res.send({
        categories: _.map(category.data.path_from_root, 'name'),
        item: mappedItem
      });

    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
