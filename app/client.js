import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import configureStore from './main-store';
import { Provider } from 'mobx-react'

const rootEl = document.getElementById('root');

const stores = configureStore()

ReactDOM.render(
  <AppContainer>
    <App stores={stores}/>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextRoot = require('./app').default
    ReactDOM.render(
      <AppContainer>
        <NextRoot stores={stores} />
      </AppContainer>,
      rootEl
    );

  });
}
