require('./style.scss')

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { Provider } from 'mobx-react';
const rootEl = document.getElementById('root');




ReactDOM.render(
  <AppContainer>
    <Root  />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').default
    ReactDOM.render(
      <AppContainer>
        <NextRoot  />
      </AppContainer>,
      rootEl
    );

  });
}
