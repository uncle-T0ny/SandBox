import { combineReducers } from 'redux';

import counter from './counter';
import ticker from './ticker';

export default combineReducers({
  counter,
  ticker,
});
