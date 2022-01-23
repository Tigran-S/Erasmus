import React, { useState } from "react";
import emailjs from "emailjs-com";
import Joi from "joi-browser";
import Input from "./input";
import { validate, handleChange, handleSubmit } from "./form";
const schema = {
  email: Joi.string().email().required().label("Email"),
  phoneNumber: Joi.string().min(5).required().label("Phone Number"),
  name: Joi.string().required().label("Name"),
};
const Contact = () => {
  const [register, setRegister] = useState({
    email: "",
    phoneNumber: "",
    name: "",
  });
  const [errors, setErrors] = useState({});

  const doSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ivg0qcg",
        "template_xahmqao",
        e.target,
        "user_EckY85oTLIO3ozLS0j5GF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(e.target);
    e.target.reset();
  };

  return (
    <div className="form">
      <h1>CONTACT US</h1>
      <form
        onSubmit={(e) => handleSubmit(e, setErrors, register, schema, doSubmit)}
      >
        <Input
          name="name"
          value={register.name}
          label="Name"
          handleChange={(e) =>
            handleChange(e, errors, register, setRegister, setErrors, schema)
          }
          error={errors.name}
        />
        <Input
          name="email"
          value={register.email}
          label="Email"
          handleChange={(e) =>
            handleChange(e, errors, register, setRegister, setErrors, schema)
          }
          error={errors.email}
        />
        <Input
          name="phoneNumber"
          value={register.phoneNumber}
          label="Phone Number"
          type="tel"
          handleChange={(e) =>
            handleChange(e, errors, register, setRegister, setErrors, schema)
          }
          error={errors.phoneNumber}
        />

        <button
          className="btn btn-primary"
          disabled={validate(register, schema)}
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
