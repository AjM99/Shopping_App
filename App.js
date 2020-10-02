
import React from 'react';
import {  Text, View } from 'react-native';
import{createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ShopNavigator from './Navigation/ShopNavigator';

import productReducer from './store/reducer/products';

const rootReducer =combineReducers
(
  {
    product:productReducer
  }
);

const store = createStore(rootReducer);

export default function App()
{
  return(
  <Provider store={store}>
  <ShopNavigator/>
  </Provider>
  );
}



