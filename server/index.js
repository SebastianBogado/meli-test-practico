const express = require('express');
const app = express();


app.use('/api', require('./author.middleware'));
app.use('/api/items', require('./items'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
