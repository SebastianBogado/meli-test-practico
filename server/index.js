const express = require('express');
const app = express();

app.get('/api/items', function (req, res) {
  res.send({
    author: {
      name: 'Sebastián',
      lastname: 'Bogado',
    },
    categories: [
      'Electronica, Audio y video',
      'iPod',
      'Reproductores',
      'isdfgsdfgsdgsdf',
      '3ffffd'
    ],
    items: [{
      id: "MLA603701702",
      title: "Apple Ipod Touch 6ta Gen 16gb Ultima Generacion Caja Sellad",
      price: {
        currency: "ARS",
        amount: 5999,
        decimals: 97
      },
      picture: "http://mla-s1-p.mlstatic.com/977901-MLA20426607586_092015-I.jpg",
      condition: "new",
      free_shipping: false
    }, {
      id: "MLA614828692",
      title: "Ipod Shuffle 2gb",
      price: {
        currency: "ARS",
        amount: 1639,
        decimals: 0
      },
      picture: "http://mla-s1-p.mlstatic.com/12803-MLA20066552976_032014-I.jpg",
      condition: "used",
      free_shipping: true
    }]
  });
});

app.get('/api/items/:id', function (req, res) {
  res.send({
    author: {
      name: 'Sebastián',
      lastname: 'Bogado',
    },
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
