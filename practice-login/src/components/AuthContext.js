import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const signup = (email, password, username) => {
    setUsers([...users, { email, password, username }]);
    setCurrentUser({ email, username });
  };

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};