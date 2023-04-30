import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";
import { AuthContext } from "../../auth/AuthContext";

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    user: "",
    fullname: "",
    email: "",
    password: "",
    password2: "",
  });

  const { dispatch: dispatchAuth } = useContext(AuthContext);

  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { user, fullname, email, password, password2 } = formValues;

    if (!user || !email || !password || !password2 || password !== password2) {
      setError(true);
    }

    try {
      const res = await axios.post("http://localhost:4000/api/users/", {
        username: user,
        fullname,
        password,
        email,
      });

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
        <h3 className="auth__title">Register</h3>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="User name"
            name="user"
            className="auth__input"
            autoComplete="off"
            value={formValues.user}
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="Fullname"
            name="fullname"
            className="auth__input"
            autoComplete="off"
            value={formValues.fullname}
            onChange={handleInputChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="auth__input"
            autoComplete="off"
            value={formValues.email}
            onChange={handleInputChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            onChange={handleInputChange}
            value={formValues.password}
          />

          <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            className="auth__input"
            value={formValues.password2}
            onChange={handleInputChange}
          />

          <button type="submit" className="btn btn-primary btn-block mb-5">
            Register
          </button>

          <Link className="link" to="/auth/login">
            Already registered?
          </Link>
        </form>
      </div>
    </>
  );
};
