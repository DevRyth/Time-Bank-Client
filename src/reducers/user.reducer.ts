import { Reducer } from "redux";
import { ME_FETCH } from "../actions/actions.constants";
import { LoginResponse, UserData } from "../Models/AuthUser";

interface UserState {
  byId: { [id: number]: LoginResponse };
}

const initialState: UserState = {
  byId: {},
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH: {
      const user: UserData = action.payload.data.user;
      return { ...state, [user.user_id]: user };
    }
    default:
      return state;
  }
};
