import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    user: "",
    password: "",
  });

  const { dispatch: dispatchAuth } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { user, password } = formValues;
    try {
      const res = await axios.post("http://localhost:8080/api/users/auth", {
        username: user,
        password,
      });

      dispatchAuth({
        type: types.login,
        payload: {
          user,
          token: res.data?.data?.token,
        },
      });
    } catch (error) {}
  };

  return (
    <>
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
    </>
  );
};
