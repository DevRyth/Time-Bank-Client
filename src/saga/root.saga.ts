import { all, fork } from "redux-saga/effects";
import { watchMeSendingData } from "./auth.saga";
import { watchCourseRegister } from "./course.saga";
import { watchEnrollCourse } from "./enroll.saga";
import { watchRegisterUser } from "./register.saga";

function* rootSaga() {
  yield all([
    fork(watchMeSendingData),
    fork(watchRegisterUser),
    fork(watchCourseRegister),
    fork(watchEnrollCourse),
  ]);
}

export default rootSaga;
