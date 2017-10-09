import "babel-polyfill"
import "babel-core/register"

import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../saga/rootSaga'

import reducer from '../reducers/rootReducer'

import { CounterState } from '../components/CounterState';
import { BTCInfoBlock } from '../components/BTCInfoBlock/BTCInfoBlock';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

const MainContainer = () => {
  return (
    <Provider store={store}>
      <div>
        <div>Main app 3</div>
        <button onClick={() => action('INCREMENT')}>Increment</button>
        <button onClick={() => action('INCREMENT_ASYNC')}>Increment in 1 sec</button>
        <button onClick={() => action('FETCH_TICKER')}>Fetch ticker</button>
        <CounterState/>
        <BTCInfoBlock/>
      </div>
    </Provider>
  );
};

export default MainContainer;
