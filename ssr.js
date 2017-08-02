import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { push } from 'react-router-redux';
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
      const { location } = renderProps;
      store.dispatch(push(location));
      const promises = [];
      renderProps.components.forEach( (c) => {
        const { fetchData } = c;

        if (fetchData) {
          promises.push(fetchData(store, location));
        }
      });

      Promise.all(promises)
        .then(() => {
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
        })
        .catch(console.error.bind(console));
    } else {
      res.status(404).send('Not found')
    }
  });
}

function renderFullPage(html, preloadedState) {
  // WARNING: See the following for security issues around embedding JSON in HTML:
  // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
  return `
    <!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Meli's tech exercise</title>
      <link href="/client/dist/styles.css" rel="stylesheet">
    </head>
    <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/client/dist/bundle.js"></script>
    </body>
    </html>
    `
}


export default handleRender;
