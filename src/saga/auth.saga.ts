import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { ME_FETCH_USER, ME_SENDING_DATA } from "../actions/actions.constants";
import {
  meFetchAction,
  meIsLoading,
  meLoadingError,
} from "../actions/auth.action";
import { login } from "../apis/auth.api";
import { fetchUser } from "../apis/auth.api";

function* meSendingData(action: AnyAction): Generator<any> {
  console.log("Sending data to API");
  yield put(meLoadingError(""));
  const userResponse: any = yield call(login, action.payload);
  if (userResponse) {
    console.log(userResponse);
    yield put(meFetchAction(userResponse));
    window.location.href = "/dashboard";
  } else {
    yield put(meIsLoading(false));
    yield put(meLoadingError("Wrong Credentials"));
  }
}

function* meFetchUser(): Generator<any> {
  const userData: any = yield call(fetchUser);
  console.log("User data: ", userData);
  if (userData) {
    yield put(meFetchAction(userData));
  } else {
    yield put(meLoadingError("Check your internet connection"));
    console.error("Cannot fetch user data");
    // localStorage.removeItem(LS_AUTH_TOKEN);
    // window.location.href = "/";
  }
}

export function* watchMeSendingData() {
  yield all([
    takeEvery(ME_SENDING_DATA, meSendingData),
    takeEvery(ME_FETCH_USER, meFetchUser),
  ]);
}
