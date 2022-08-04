import { createContext, useContext, useReducer } from "react";

const StateContext = createContext({ state: {}, dispatch: () => {} });

const StateProvider = ({ reducer, initialState = {}, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

const useState = () => useContext(StateContext);

export default useState;
export { StateProvider };
