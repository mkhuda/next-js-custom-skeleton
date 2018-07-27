import { all, fork } from 'redux-saga/effects';
import es6promise from 'es6-promise'

es6promise.polyfill()

export default function* rootSaga() {
  yield all([].map(saga => fork(saga)));
}
