import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; // this just makes the store avalible to all components
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'; // specific for REACT to work with Persist
import storage from 'redux-persist/lib/storage';

import App from './App';
import rootReducer from './state/reducers/index';
import registerServiceWorker from './registerServiceWorker';

//  set up local storage
const persistConfig = {
  key: 'bookmarks-test',
  storage,
};

// use imported reducers & use config from above
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store
const store = createStore(persistedReducer);

// create persisted store
const persistor = persistStore(store);

render(
  (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  ), document.getElementById('root'),
);
registerServiceWorker();
