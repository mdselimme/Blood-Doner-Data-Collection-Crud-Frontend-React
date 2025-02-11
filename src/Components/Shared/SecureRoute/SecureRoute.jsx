import { Navigate, useLocation } from "react-router";
import useAuth from "../useAuth/useAuth";

const SecureRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  } else {
    return (
      <Navigate
        state={location.pathname}
        to={"/log_in"}
        replace={true}
      ></Navigate>
    );
  }
};

export default SecureRoute;
