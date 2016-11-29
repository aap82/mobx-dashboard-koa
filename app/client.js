import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import Root from './root';
import AppStore from './app_store';


const routingStore = new RouterStore();

const stores = {
  appStore: new AppStore(),
  routing: routingStore
}

const history = syncHistoryWithStore(browserHistory, routingStore);



const rootEl = document.getElementById('root');
const doRender = () => {
  ReactDOM.render(
    <AppContainer>
      <Root history={history} stores={stores} />
    </AppContainer>,
    rootEl
  );
}
doRender();

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').default
    ReactDOM.render(
      <AppContainer>
        <NextRoot  history={history} stores={stores}/>
      </AppContainer>,
      rootEl
    );

  });
}

// const doRender = () => {
//   ReactDOM.render(
//     <AppContainer>
//       <Provider store={store}>
//         <Router {...props} render={render} />
//       </Provider>
//     </AppContainer>,
//     document.getElementById('root')
//   );
// };

// if (module.hot) {
//   module.hot.accept('config/routes', () => {
//     /* eslint-disable no-unused-expressions */
//     require('config/routes').default;
//
//     doRender();
//   });
// }