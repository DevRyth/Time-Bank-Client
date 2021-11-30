import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "@redux-saga/core/node_modules/redux";
import { COURSE_ENROLL } from "../actions/actions.constants";
import {
  courseEnrollError,
  courseEnrollLoading,
  courseEnrollSendData,
} from "../actions/enroll.action";
import { enroll } from "../apis/course.api";

function* courseEnroll(action: AnyAction): Generator<any> {
  yield put(courseEnrollError(""));
  const enrollResponse: any = yield call(enroll, action.payload);
  if (enrollResponse) {
    yield put(courseEnrollSendData(enrollResponse));
    window.location.href = "/dashboard";
  } else {
    yield put(courseEnrollError("Unable to enroll"));
    yield put(courseEnrollLoading(false));
  }
}

export function* watchEnrollCourse() {
  yield all([takeEvery(COURSE_ENROLL, courseEnroll)]);
}
