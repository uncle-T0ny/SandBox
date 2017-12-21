import 'babel-polyfill';
import 'babel-core/register';
import 'antd/dist/antd.css';

import React, { PureComponent } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { Provider, connect } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga/rootSaga';

import reducer from '../reducers/rootReducer';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import { CounterState } from '../components/CounterState';
import { StateMachine } from '../components/StateMachine/StateMachine';
import { Head } from '../components/head/Head';
import { Body } from '../components/body/Body';
import { TravelMap } from '../components/travelMap/TravelMap';
import { Registration } from '../components/registration/Registration';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import './../styles/main.scss';
import './MainContainer.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

export default class MainContainer extends PureComponent {
  render() {

    const { isFetchAuth, isAuthenticated } = store.getState().auth;

    return (
      <Provider store={store}>
        <LocaleProvider locale={enUS}>
          <Router>
            <div className="MainContainer">

              <Head/>

              <Route exact path="/*" render={() => {
                if (isFetchAuth) {
                  return <div>LOADING...</div>;
                } else {
                  return null;
                }
              }} />

              <Route exact path="/" render={() => {
                return <Body />;
              }} />

              <Route exact path="/travel-map" render={() => {
                return <TravelMap />;
              }} />

              <Route path="/registration" render={() => {
                return <Registration />;
              }} />


            </div>
          </Router>

        </LocaleProvider>
      </Provider>
    );
  }

}
