// Providerでstoreを全コンポネントに渡す
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux' 
import thunk from 'redux-thunk' 
//'redux-thunk' はミドルウェアに該当。→appliMiddlewareもimport

import './index.css';
import reducer from './reducers'

// componentに関しても専用のdirをつくる
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

//作成するstoreはApp内部で唯一
const store = createStore(reducer,applyMiddleware(thunk))

//既存のcomponentをprovider componentでラップしてstoreに先ほどのstore属性を渡してあげる
//従来のreactではcomponentのpropsを使って親→子→孫へと一個ずつ渡す必要があった
//->providerで簡略化できる!

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
