import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import _ from 'lodash';
import MainContainer from './containers/MainContainer';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );

render(MainContainer);

if (module.hot) {
  module.hot.accept('./containers/MainContainer.js', () => {
    const NextApp = require('./containers/MainContainer').default;
    render(NextApp);
  });
}
