import React from 'react'
import { Provider } from 'mobx-react'
import stores from './appStore';
import App from './App';








const Root = () => (
    <Provider {...stores}>
      <App />
    </Provider>
);
export default Root;