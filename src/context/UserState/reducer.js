import USER_ACTIONS from "./actions";

const initialState = null;

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_ACTIONS.SET_USER:
      return { ...payload };
    default:
      return state;
  }
};

export default userReducer;
