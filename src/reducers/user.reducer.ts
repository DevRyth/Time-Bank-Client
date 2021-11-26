import { Reducer } from "redux";
import { ME_FETCH, ME_FETCH_USER } from "../actions/actions.constants";
import { UserData } from "../Models/AuthUser";

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
    default:
      return state;
  }
};
