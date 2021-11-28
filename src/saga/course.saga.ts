import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  COURSE_ALL,
  COURSE_ID,
  COURSE_REGISTER_SEND_DATA,
} from "../actions/actions.constants";
import {
  courseAllData,
  courseData,
  courseIdData,
  courseRegisterError,
  courseRegisterLoading,
} from "../actions/course.action";
import { allCourses, course, courseDetails } from "../apis/course.api";

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

function* courseIdDataSaga(action: AnyAction): Generator<any> {
  yield put(courseRegisterError(""));
  const course_id = action.payload;
  const response: any = yield call(courseDetails, course_id);
  if (response) {
    yield put(courseIdData(response));
  } else {
    yield put(courseRegisterLoading(false));
    yield put(courseRegisterError("Unable to fetch course details"));
  }
}

function* courseAllSaga(action: AnyAction): Generator<any> {
  yield put(courseRegisterError(""));
  const { offset, limit } = action.payload;
  const response: any = yield call(allCourses, {
    offset: offset,
    limit: limit,
  });
  if (response) {
    yield put(courseAllData(response));
  } else {
    yield put(courseRegisterLoading(false));
    yield put(courseRegisterError("Unable to fetch all courses details"));
  }
}

export function* watchCourseRegister() {
  yield all([
    takeEvery(COURSE_REGISTER_SEND_DATA, courseRegister),
    takeEvery(COURSE_ID, courseIdDataSaga),
    takeEvery(COURSE_ALL, courseAllSaga),
  ]);
}
