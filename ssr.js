import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import thunk from 'redux-thunk';
import reducers from './client/src/reducers';
import routes from './client/src/Routes';


// https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md/

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(
    reducers,
    applyMiddleware(thunk),
  );

  // https://github.com/ReactTraining/react-router/blob/v3/docs/guides/ServerRendering.md
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
console.log(renderProps)
      // Render the component to a string
      const html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      // Grab the initial state from our Redux store
      const preloadedState = store.getState();

      // Send the rendered page back to the client
      res.status(200).send(renderFullPage(html, preloadedState))
    } else {
      res.status(404).send('Not found')
    }
  });
}

function renderFullPage(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Meli's tech exercise</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="http://localhost:8080/bundle.js"></script>
    </body>
    </html>
    `
}


export default handleRender;
