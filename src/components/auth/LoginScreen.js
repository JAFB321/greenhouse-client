import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    user: "admin",
    password: "malala12",
  });

  const { dispatch: dispatchAuth } = useContext(AuthContext);

  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { user, password } = formValues;
    try {
      console.log(process.env.REACT_APP_API_URL);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/auth`,
        {
          username: user,
          password,
        },
        {
          headers: {
            "access-control-allow-origin": "http://localhost:3000",
          },
        }
      );

      dispatchAuth({
        type: types.login,
        payload: {
          user,
          token: res.data?.data?.token,
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
