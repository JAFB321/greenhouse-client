import React, { useContext } from "react";

import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

export const Header = () => {
  const { userAuth, dispatch } = useContext(AuthContext);
  console.log(userAuth);

  const handleLogout = () => {
    dispatch({
      type: types.logout,
      payload: {},
    });
  };
  return (
    <div className="header">
      <div className="auth-navbar">
        <span>{userAuth.user} </span>
        <button onClick={handleLogout} className="btn logout">
          Logout
        </button>
      </div>
    </div>
  );
};
