module.exports = function appendAuthor(req, res, next) {
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
};
