import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const handleCreateAccount = () => {
    console.log("code run");
  };

  const authData = {
    handleCreateAccount,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
