import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import { thunk, type ThunkMiddleware } from "redux-thunk";
import type { AuthActionTypes } from "../types/authTypes";

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk as ThunkMiddleware<RootState, AuthActionTypes>)
);
