import { delay } from 'redux-saga';
import { put, take, takeEvery, takeLatest, all, call, select } from 'redux-saga/effects';
import CryptoAPI from './../api/CryptoAPI';
import ServerAPI from './../api/ServerAPI';

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* fetchBtcTicker() {
  try {
    const ticker = yield call(CryptoAPI.loadBtcTicker);
    yield put({ type: 'RECEIVED_TICKER', ticker });
  } catch (err) {
    yield put({ type: 'FETCH_TICKER_ERROR', err });
  }
}

export function* watchFetchTicker() {
  yield takeLatest('FETCH_TICKER', fetchBtcTicker);
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* watchAndLog() {
  while (true) {
    const action = yield take('*');
    const state = yield select();
  }
}

function* authorize() {
  try {
    const token = yield call(ServerAPI.isAuthenticated);
    yield put({ type: 'LOGIN_SUCCESS', token });
    return token;
  } catch(error) {
    yield put({ type: 'LOGIN_ERROR', error });
  }
}

export default function* rootSaga() {
  yield all([
    authorize(),
    watchAndLog(),
    watchIncrementAsync(),
    watchFetchTicker(),
  ]);
}
