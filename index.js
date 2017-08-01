const express = require('express');
const app = express();


app.use('/api', require('./api'));

// these hooks below avoids failing when importing no-js files at react code
require('babel-register')({
  ignore: ['node_modules']
});
require('css-modules-require-hook')({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});
require('asset-require-hook')({
  extensions: ['png'],
  publicPath: 'http://localhost:8080/',
  name: '[name].[ext]'
});

app.use(require('./ssr').default);

app.listen(3000, function () {
  console.log('Meli listening on port 3000!')
});
