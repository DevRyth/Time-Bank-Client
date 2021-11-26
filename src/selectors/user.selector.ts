import { createSelector } from "reselect";
import { AppState } from "../Store/store";
import { authId } from "./auth.selector";

export const userSelector = (state: AppState) => state.user;

export const userByIdSelector = createSelector(
  [userSelector],
  (user) => user.byId
);

export const userData = createSelector(
  [userByIdSelector, authId],
  (user, authId) => (authId === undefined ? undefined : user && user[authId])
);
