import { put, takeEvery } from "redux-saga/effects";
import axios from "../../api/axios";
import { loginSuccess } from "../features/auth";

function* getLoginStatus(action) {
  try {
    const { payload } = action;
    const response = yield axios.post("/login", payload);
    yield put(loginSuccess(response.data));
  } catch (e) {
    console.log("error" + e);
  }
}

function* getSessionLoginStatus() {
  try {
    const response = yield axios.get("/login");
    yield put(loginSuccess(response.data));
  } catch (e) {
    console.log("error" + e);
  }
}

function* loginStatus() {
  yield takeEvery("auth/loginRequest", getLoginStatus);
  yield takeEvery("auth/sessionLoginRequest", getSessionLoginStatus);
}

export default loginStatus;
