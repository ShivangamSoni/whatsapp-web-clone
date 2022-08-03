import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({ user: null, setUser: () => {} });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export default useUser;
export { UserProvider };
