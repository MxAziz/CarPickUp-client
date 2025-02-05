import React, { useContext } from "react";
import { Navigate,  } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading loading-bars loading-lg flex justify-center items-center min-h-screen mx-auto"></span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
