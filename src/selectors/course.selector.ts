import { createSelector } from "reselect";
import { CourseData } from "../Models/Course";
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

export const courseById = createSelector(
  [courseSelector],
  (course) => course.byId
);

export const allCourses = createSelector([courseById], (byId) => {
  let allCoursesData: CourseData[] = [];
  //eslint-disable-next-line
  for (const [key, value] of Object.entries(byId)) {
    allCoursesData = [...allCoursesData, { ...value }];
  }
  return allCoursesData;
});
