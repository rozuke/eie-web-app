import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    tipo: "",
    usuario: {
      email: "",
      rolId: "",
    },
  });

  const getUserForUpdate = (newUser) => {
    setUser(newUser);
  };
  return (
    <UserContext.Provider value={{ user, getUserForUpdate }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => useContext(UserContext);
