import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/appConstant";
import type { AuthActionTypes, IAuthState } from "../types/authTypes";

const initialState: IAuthState = {
  loading: false,
  isAuthenticated: false,
  error: null,
};

export const authReducer = (
  state: IAuthState = initialState,
  action: AuthActionTypes
): IAuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, isAuthenticated: true, error: null };
    case LOGIN_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
