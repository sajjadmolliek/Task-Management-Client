/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import useCustomeHook from "../Hooks/useCustomeHook";
import { HashLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useCustomeHook();
  if (loading) {

    

    return (
      <div className="flex justify-center min-h-screen items-center">
        <HashLoader color="#38697f" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/logins"}></Navigate>;
};

export default PrivateRoute;
