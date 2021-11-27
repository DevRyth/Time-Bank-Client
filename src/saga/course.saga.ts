import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { COURSE_REGISTER_SEND_DATA } from "../actions/actions.constants";
import {
  courseData,
  courseRegisterError,
  courseRegisterLoading,
} from "../actions/course.action";
import { course } from "../apis/course.api";

function* courseRegister(action: AnyAction): Generator<any> {
  yield put(courseRegisterError(""));
  const data = action.payload;
  const response: any = yield call(course, data);
  if (response) {
    yield put(courseData(response));
    window.location.href = "/created-course";
  } else {
    yield put(courseRegisterError("Unable To Send Data"));
    yield put(courseRegisterLoading(false));
  }
}

export function* watchCourseRegister() {
  yield all([takeEvery(COURSE_REGISTER_SEND_DATA, courseRegister)]);
}
