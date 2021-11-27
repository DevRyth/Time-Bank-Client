import { createSelector } from "reselect";
import { AppState } from "../Store/store";

export const courseSelector = (state: AppState) => state.course;

export const courseLoadingSelector = createSelector(
  [courseSelector],
  (course) => course.loading
);

export const courseErrorMessageSelector = createSelector(
  [courseSelector],
  (course) => course.errorMessage
);
