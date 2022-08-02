import { createContext, useState } from 'react';

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('userEmail')));

  const logoutUser = () => {
    setCurrentUser([]);
    localStorage.clear();
  };

  return (
    <UserContext.Provider value={{ setCurrentUser, currentUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
