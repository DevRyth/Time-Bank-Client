import { all, fork } from "redux-saga/effects";
import { watchMeSendingData } from "./auth.saga";
import { watchRegisterUser } from "./register.saga";

function* rootSaga() {
  yield all([fork(watchMeSendingData), fork(watchRegisterUser)]);
}

export default rootSaga;
