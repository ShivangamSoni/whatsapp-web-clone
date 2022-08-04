import combineReducers from "../utils/combineReducers";

import userReducer from "./UserState/reducer";

const reducer = combineReducers({ user: userReducer });

export default reducer;
