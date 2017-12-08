import { combineReducers } from 'redux';

import auth from './auth';
import counter from './counter';
import ticker from './ticker';

export default combineReducers({
  counter,
  ticker,
  auth
});
