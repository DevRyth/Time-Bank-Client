import { createSelector } from "reselect";
import { CourseData } from "../Models/Course";
import { allCourses } from "../selectors/course.selector";
import { AppState } from "../Store/store";

export const enrollSelector = (state: AppState) => state.enroll;

export const enrollAppointmentIdSelector = createSelector(
  [enrollSelector],
  (enroll) => enroll.id
);

export const enrollCourseLoadingSelector = createSelector(
  [enrollSelector],
  (enroll) => enroll.loading
);

export const enrollCourseErrorSelector = createSelector(
  [enrollSelector],
  (enroll) => enroll.errorMessage
);

export const enrolledCoursesSelector = createSelector(
  [enrollAppointmentIdSelector, allCourses],
  (enrolledIds, courses) => {
    const result: CourseData[] = [];
    for (let items of enrolledIds) {
      for (let course of courses) {
        if (course.course_id === items.course_id) {
          result.push(course);
          break;
        }
      }
    }
    return result;
  }
);
