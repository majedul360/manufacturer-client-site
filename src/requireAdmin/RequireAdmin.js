import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/Firebase.int";
import useAdmin from "../customHooks/AdminHook";
const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [admin, adminLoading] = useAdmin(user);
  if (loading || adminLoading) {
    return;
  }

  if (!admin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;
