import USER_ACTIONS from "./actions";

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_ACTIONS.SET_USER:
      return { ...payload };
    default:
      return state;
  }
};

export const userInitialState = null;

export default userReducer;
