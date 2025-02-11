import { createContext, useEffect, useState } from "react";
import app from "../../FirebaseAuthentication/FirebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  // Creat account function with email and password
  const handleCreateAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log in with email and password
  const handleLogInAccount = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  // State change and store logged in users data
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  // Auth Context all data provider
  const authData = {
    signOutUser,
    user,
    handleCreateAccount,
    auth,
    updateProfile,
    handleLogInAccount,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
