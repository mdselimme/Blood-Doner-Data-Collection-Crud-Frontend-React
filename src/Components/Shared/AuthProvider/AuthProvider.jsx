import { createContext, useEffect } from "react";
import app from "../../FirebaseAuthentication/FirebaseConfig";
import { getAuth } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const handleCreateAccount = (email, password) => {
    console.log("code run");
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // useEffect(() => {
  //   const unsubscribed = onAuthStateChanged();
  // }, []);

  const authData = {
    handleCreateAccount,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
