import { Reducer } from "redux";
import {
  COURSE_DATA,
  ME_FETCH,
  ME_FETCH_USER,
} from "../actions/actions.constants";
import { UserData } from "../Models/AuthUser";
import { CourseResponse } from "../Models/Course";

interface UserState {
  byId: { [id: number]: UserData };
}

const initialState: UserState = {
  byId: {},
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH_USER:
    case ME_FETCH: {
      const user: UserData = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [user?.user_id]: user,
        },
      };
    }
    case COURSE_DATA: {
      const course = action.payload as CourseResponse;
      return {
        ...state,
        byId: {
          ...state.byId,
          [course.creator_id]: {
            ...state.byId[course.creator_id],
            courses: {
              ...state.byId[course.creator_id].courses,
              ...course.courses,
            },
          },
        },
      };
    }
    default:
      return state;
  }
};
