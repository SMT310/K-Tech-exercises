import type {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/appConstant";

export interface IAuthState {
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export type AuthActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction;
