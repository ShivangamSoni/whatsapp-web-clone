import combineReducers from "../utils/combineReducers";

import userReducer, { userInitialState } from "./UserState/reducer";

export const reducer = combineReducers({ user: userReducer });

export const initialState = {
  user: userInitialState,
};
