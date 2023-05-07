import { takeEvery, put, takeLatest, call } from "redux-saga/effects";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

function* decrementAsync() {
  yield delay(1000);
  yield put({ type: "DECREMENT" });
}

async function getBlog() {
  const response = await fetch("http://localhost:3000/blogs");
  const data = response.json();
  return data;
}

function* fetchBlogAsync() {
  try {
    const data = yield call(getBlog);
    yield put({ type: "FETCH_BLOG_ASYNC_SUCCESS", payload: data });
  } catch (err) {
    yield put({ type: "FETCH_BLOG_ASYNC_FAILURE", payload: err });
  }
}
async function addBlog(blog) {
  const reposnse = await fetch("http://localhost:3000/blogs", {
    method: "POST",
    body: JSON.stringify(blog),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await reposnse.json();
  return data;
}

function* addBlogAsync(action) {
  console.log(action);
  try {
    const data = yield call(addBlog, action.payload);
    yield put({ type: "ADD_BLOG_SUCCESS", payload: data });
  } catch (err) {
    yield put({ type: "ADD_BLOG_FAILURE", payload: err });
  }
}

export default function* rootSaga() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
  yield takeLatest("DECREMENT_ASYNC", decrementAsync);
  yield takeLatest("FETCH_BLOG_ASYNC_REQUEST", fetchBlogAsync);
  yield takeLatest("ADD_BLOG_REQUEST", addBlogAsync);
}
