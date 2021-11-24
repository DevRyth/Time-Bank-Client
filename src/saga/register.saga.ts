import { all, call, put, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  REGISTER_USER_INFO,
  REGISTER_USER_SEND_DATA,
} from "../actions/actions.constants";
import { registerError, registerLoading } from "../actions/register.action";
import { register, signup } from "../apis/register.api";
import { RG_TOKEN } from "../constants/constants";

function* registerUser(action: AnyAction): Generator<any> {
  const data = action.payload;
  yield put(registerError(""));
  const userResponse: any = yield call(signup, data);
  if (userResponse) {
    localStorage.setItem(RG_TOKEN, "register is active");
    window.location.href = "/register";
  } else {
    console.error("Not able to signup");
    yield put(registerError("User cannot be register"));
    yield put(registerLoading(false));
  }
}

function* registerFullForm(action: AnyAction): Generator<any> {
  const data = action.payload;
  yield put(registerError(""));
  const registerResponse: any = yield call(register, data);
  if (registerResponse) {
    localStorage.removeItem(RG_TOKEN);
    window.location.href = "/dashboard";
  } else {
    console.error("Not able to register user");
    yield put(registerError("User cannot be register"));
    yield put(registerLoading(false));
  }
}

export function* watchRegisterUser() {
  yield all([
    takeEvery(REGISTER_USER_SEND_DATA, registerUser),
    takeEvery(REGISTER_USER_INFO, registerFullForm),
  ]);
}
