import { call, put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { REGISTER_USER_SEND_DATA } from "../actions/actions.constants";
import { registerError, registerLoading } from "../actions/register.action";
import { signup } from "../apis/register.api";

function* registerUser(action: AnyAction): Generator<any> {
  const data = action.payload;
  yield put(registerError(""));
  const userResponse: any = yield call(signup, data);
  if (userResponse) {
    window.location.href = "/register";
  } else {
    console.error("Not able to signup");
    yield put(registerError("User cannot be registered"));
    yield put(registerLoading(false));
  }
}

export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER_SEND_DATA, registerUser);
}
