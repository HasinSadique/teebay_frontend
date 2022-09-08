import React from "react";

import { Navigate, useLocation } from "react-router";

const RequireAuth = ({ children }) => {
  const currentUserEmail = localStorage.getItem("user");
  const currentUserID = localStorage.getItem("currentUserID");

  const location = useLocation();

  if (!currentUserID) {
    return (
      <Navigate to="/" state={{ from: location }} replace>
        {" "}
      </Navigate>
    );
  } else {
    return children;
  }
};

export default RequireAuth;
