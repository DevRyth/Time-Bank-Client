import { call, put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { ME_SENDING_DATA } from "../actions/actions.constants";
import {
  meFetchAction,
  meIsLoading,
  meLoadingError,
} from "../actions/auth.action";
import { login } from "../apis/auth.api";

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

export function* watchMeSendingData() {
  yield takeEvery(ME_SENDING_DATA, meSendingData);
}
