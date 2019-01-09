import { takeEvery, select } from 'redux-saga/effects';
import { SHOW_MESSAGE } from '../reducers';

function hasFoo(state) {
  const { entities } = state;
  const result = state.advisers.get('result');
  if (result === null) {
    return false;
  }
  return entities.get('advisers').size > 0;
}

function* runShowMessage(action) {
  const { value } = action;
  const foo = yield select(hasFoo, value);
  console.log(value, foo);
  return true;
}

function* watchFetchAdvisers() {
  yield takeEvery(SHOW_MESSAGE, runShowMessage);
}

export { watchFetchAdvisers as default };

