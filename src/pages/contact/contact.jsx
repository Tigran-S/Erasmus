import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import Input from "./input";
import { validate, handleChange, handleSubmit } from "./form";
import { useLocation } from "react-router-dom";
import "./input.css";
const schema = {
  email: Joi.string().email().required().label("Email"),
  phoneNumber: Joi.string().min(5).required().label("Phone Number"),
  name: Joi.string().required().label("Name"),
  fbLink: Joi.string().required().label("Facebook Link"),
};
const Contact = () => {
  const [register, setRegister] = useState({
    email: "",
    phoneNumber: "",
    name: "",
    fbLink: "",
  });
  const [subject, setSubject] = useState({});
  const [errors, setErrors] = useState({});

  const location = useLocation();
  useEffect(() => {
    if (location?.state) {
      const { from } = location?.state;
      setSubject(from);
    }
  }, [location]);
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
          toast("The message was sent");
          console.log(result);
        },
        (error) => {
          toast.error("An unexpected error occured");
        }
      );
    setRegister({ email: "", phoneNumber: "", name: "", fbLink: "" });
  };

  return (
    <>
      <div className="form">
        <h1>CONTACT US</h1>
        <form
          onSubmit={(e) =>
            handleSubmit(e, setErrors, register, schema, doSubmit)
          }
        >
          <ToastContainer />
          {subject?.title && (
            <div className="form-group">
              Subject
              <input
                value={subject?.title}
                name="subject"
                className="form-control danger"
                readOnly
              />
            </div>
          )}
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
          <Input
            name="fbLink"
            value={register.fbLink}
            label="Facebook Link"
            handleChange={(e) =>
              handleChange(e, errors, register, setRegister, setErrors, schema)
            }
            error={errors.name}
          />
          <button
            className="btn btn-primary"
            disabled={validate(register, schema)}
          >
            SEND
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
