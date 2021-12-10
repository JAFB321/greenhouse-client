import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

export const Header = () => {
  const { userAuth, dispatch } = useContext(AuthContext);

  const [sidenav, setSidenav] = useState(false);

  const handleLogout = () => {
    dispatch({
      type: types.logout,
      payload: {},
    });
  };

  return (
    <div className="header">
      <button className="btn open-sidenav" onClick={() => setSidenav(true)}>
        Menu
      </button>
      <div
        className={`sidenav animate__animated  sidenav-opened ${
          sidenav ? " animate__fadeInLeft" : " animate__fadeOutLeft "
        }`}
      >
        <button className="btn open-sidenav" onClick={() => setSidenav(false)}>
          Close
        </button>
        <Link className="option mt-1" to="/dashboard">
          Dashboard
        </Link>
        {/* <Link className="option mt-1" to="/monitor">
          Monitor
        </Link> */}
        {/* <Link className="option mt-1" to="/monitor/sensors">
          Sensor Control
        </Link> */}
        <Link className="option mt-1" to="/alertmanager">
          AlertsManager
        </Link>
        {/* <Link className="option mt-1" to="/reports">
          Reportering
        </Link> */}

        <div className="mt-5">
          <img
            className="logo align-center "
            src="/greenhouse.svg"
            alt="greenhouse"
          />
        </div>
      </div>
      <div className="auth-navbar">
        <span>{userAuth.user} </span>
        <button onClick={handleLogout} className="btn logout">
          Logout
        </button>
      </div>
    </div>
  );
};
