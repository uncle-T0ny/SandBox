import { delay } from 'redux-saga';
import { put, take, takeEvery, takeLatest, all, call, select } from 'redux-saga/effects';
import CryptoAPI from './../api/CryptoAPI';

export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* fetchBtcTicker() {
  try {
    const ticker = yield call(CryptoAPI.loadBtcTicker);
    yield put({ type: 'RECEIVED_TICKER', ticker });
  } catch (err) {
    yield put({ type: 'FETCH_TICKER_ERROR', err});
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
    console.log('action', action);
    console.log('state after', state);
  }
}

export default function* rootSaga() {
  yield all([
    watchAndLog(),
    watchIncrementAsync(),
    watchFetchTicker()
  ])
}