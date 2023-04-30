import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    user: "jafb321",
    password: "12345",
  });

  const { dispatch: dispatchAuth } = useContext(AuthContext);

  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { user } = formValues;
    try {
     

      dispatchAuth({
        type: types.login,
        payload: {
          user,
          token: 'token',
        },
      });
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div className={"card " + (error ? "error" : "success")}>
        <h3 className="auth__title">Login</h3>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="username"
            name="user"
            className="auth__input"
            autoComplete="off"
            value={formValues.user}
            onChange={handleInputChange}
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            className="auth__input"
            value={formValues.password}
            onChange={handleInputChange}
          />

          <button type="submit" className="btn btn-primary btn-block mb-5">
            Login
          </button>

          <Link className="link" to="/auth/register">
            Create account
          </Link>
        </form>
      </div>
    </>
  );
};
