import React, { useState } from "react";
import { user } from "./loginData";
import { useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import Input from "../contact/input";
import { validate, handleChange, handleSubmit } from "./../contact/form";

const schema = {
  username: Joi.string().required().label("Username"),
  password: Joi.string().required().label("Password"),
};
const { USERNAME, PASSWORD } = user;
console.log(USERNAME, PASSWORD);
const LoginForm = ({ setCurrentUser }) => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  console.log(login);
  const doSubmit = () => {
    if (login.username === USERNAME && login.password === PASSWORD) {
      setCurrentUser(true);
      navigate("/");
    }
  };

  return (
    <div className="form">
      <h1>Login</h1>
      <form
        onSubmit={(e) => handleSubmit(e, setErrors, login, schema, doSubmit)}
      >
        <Input
          name="username"
          value={login.username}
          label="Username"
          handleChange={(e) =>
            handleChange(e, errors, login, setLogin, setErrors, schema)
          }
          error={errors.username}
        />
        <Input
          name="password"
          value={login.password}
          label="Password"
          type="password"
          handleChange={(e) =>
            handleChange(e, errors, login, setLogin, setErrors, schema)
          }
          error={errors.password}
        />
        <button className="btn btn-primary" disabled={validate(login, schema)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
