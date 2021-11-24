import { createSelector } from "reselect";
import { AppState } from "../Store/store";

export const registerSelector = (state: AppState) => state.register;

export const registerLoading = createSelector(
  [registerSelector],
  (register) => register.loading
);

export const registerError = createSelector(
  [registerSelector],
  (register) => register.errorMessage
);
