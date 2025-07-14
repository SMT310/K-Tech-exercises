import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants/appConstant';
import type { AuthActionTypes } from "../types/authTypes";
import type { Dispatch } from "redux";
export const login = (email: string, password: string) => {
  return (dispatch: Dispatch<AuthActionTypes>) => {
    dispatch({ type: LOGIN_REQUEST });

    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "123456") {
        dispatch({ type: LOGIN_SUCCESS });
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: "Invalid credentials" });
      }
    }, 1000);
  };
};
