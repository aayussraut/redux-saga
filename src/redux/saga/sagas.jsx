import { takeEvery, put, takeLatest } from "redux-saga/effects";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

function* decrementAsync() {
  yield delay(1000);
  yield put({ type: "DECREMENT" });
}

export default function* rootSaga() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
  yield takeLatest("DECREMENT_ASYNC", decrementAsync);
}
