import { all } from "redux-saga/effects";
import loginStatus from "./authSaga";

export default function* rootSaga() {
  yield all([loginStatus()]);
}
