// Providerでstoreを全コンポネントに渡す
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux' 

import './index.css';
import reducer from './reducers'

// componentに関しても専用のdirをつくる
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//作成するstoreはApp内部で唯一
const store = createStore(reducer)

//既存のcomponentをprovider componentでラップしてstoreに先ほどのstore属性を渡してあげる
//従来のreactではcomponentのpropsを使って親→子→孫へと一個ずつ渡す必要があった
//->providerで簡略化できる!

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
