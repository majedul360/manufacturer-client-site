import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/Firebase.int";
import useUser from "../customHooks/UserHooks";
const RequireUser = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [simpleUser, simpleUserLoading] = useUser(user);
  if (loading || simpleUserLoading) {
    return;
  }

  if (!simpleUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireUser;
