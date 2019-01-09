import { all, fork } from 'redux-saga/effects';
import watchMessages from './messages';

export default function* root() {
  yield all([
    fork(watchMessages),
  ]);
}

