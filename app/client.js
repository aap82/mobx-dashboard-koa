import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');

const doRender = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  );
}
doRender();

if (module.hot) {
  module.hot.accept('./App', () => {
    require('./App');
    doRender()
  });
}
