/* eslint react/jsx-filename-extension: 0 */
/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './bootstrap.css';
import Provider from './Provider';

ReactDOM.render(
  <AppContainer>
    <Provider />
  </AppContainer>,
  document.getElementById('app'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Provider.jsx', () => {
    const NextProvider = require('./Provider.jsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextProvider />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
