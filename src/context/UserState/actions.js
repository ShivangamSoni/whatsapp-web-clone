const USER_ACTIONS = {
  SET_USER: "SET_USER",
};

export const setUser = (user) => {
  return {
    type: USER_ACTIONS.SET_USER,
    payload: user,
  };
};

export default USER_ACTIONS;
