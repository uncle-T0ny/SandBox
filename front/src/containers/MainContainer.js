import 'babel-polyfill';
import 'babel-core/register';
import 'antd/dist/antd.css';

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga/rootSaga';

import reducer from '../reducers/rootReducer';

import { CounterState } from '../components/CounterState';
import { StateMachine } from '../components/StateMachine/StateMachine';
import { Head } from '../components/head/Head';
import { Body } from '../components/body/Body';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import './../styles/main.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

const MainContainer = () => (
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <div>

        <Head />

        <Body />

        <div>Main app 3</div>

        <button onClick={() => action('INCREMENT')}>Increment</button>
        <button onClick={() => action('INCREMENT_ASYNC')}>Increment in 1 sec</button>
        <CounterState />

        <StateMachine />
      </div>
    </LocaleProvider>
  </Provider>
)

export default MainContainer;
