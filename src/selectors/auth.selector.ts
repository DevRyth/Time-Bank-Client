import { createSelector } from "reselect";
import { AppState } from "../Store/store";

export const authSelectors = (state: AppState) => state.auth;

export const authLoadingSelector = createSelector(
  [authSelectors],
  (auth) => auth.loading
);

export const authErrorMessageSelector = createSelector(
  [authSelectors],
  (auth) => auth.errorMessage
);

export const authId = createSelector([authSelectors], (auth) => auth.id);
