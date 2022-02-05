import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import Input from "../contact/input";
import { validate, handleChange, handleSubmit } from "./../contact/form";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const schema = {
  username: Joi.string().required().label("Username"),
  password: Joi.string().required().label("Password"),
};

const LoginForm = ({ setUser }) => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const loggingIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, login.username, login.password);
    } catch (error) {
      console.log(error.message);
    }
  };

  const doSubmit = () => {
    loggingIn(login.username, login.password);
    navigate("/");
  };

  return (
    <div className="form" style={{ marginBottom: "20px" }}>
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
