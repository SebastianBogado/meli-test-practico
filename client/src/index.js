import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import './bootstrap.css';
import Router from './router.jsx';

ReactDOM.render(
  <AppContainer>
    <Router/>
  </AppContainer>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router.jsx', () => {
    const NextApp = require('./router.jsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
