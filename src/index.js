import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
// import _ from 'lodash';
import App from './App';

import './styles.css';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );

render(App);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  })
}