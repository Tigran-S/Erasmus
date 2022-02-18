import React, { useRef } from "react";
import "./footer.css";
import logo from "./logo.PNG";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

function Footer() {
  const inputRef = useRef();
  return (
    <footer className="bg-white footer-body">
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src={logo} alt="" width="180" className="mb-3" />
            <p className="font-italic text-muted">YEREVAN, ARMENIA</p>
            <ul className="list-inline mt-4">
              <li className="list-inline-item">
                {/* <a href="#" target="_blank" title="facebook">
                  <i className="fa fa-facebook"></i>
                </a> */}
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">STORIES</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/projects" className="text-muted">
                  PROJECTS
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/news" className="text-muted">
                  NEWS
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/creativeParticipants" className="text-muted">
                  CREATIVE PARTICPANTS
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">INFO</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/about" className="text-muted">
                  ABOUT
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-muted">
                  CONTACT US
                </Link>
              </li>
              <li className="mb-2">
                <a href="tel: +374-93-112-244" className="text-muted">
                  CALL US
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p className="text-muted mb-4">SUBSCRIBE FOR OUR NEWSLETTER</p>
            <div className="p-1 rounded border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  emailjs
                    .sendForm(
                      "service_my7s8oy",
                      "template_qzb0xpm",
                      e.target,
                      "user_cq8YvCIjFgYcAihDGWf2j"
                    )
                    .then(
                      (result) => {
                        console.log(result);
                      },
                      (error) => {
                        console.log(error);
                      }
                    );
                  e.target.reset();
                }}
              >
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon1"
                    className="form-control border-0 shadow-0"
                    name="newsLetter"
                    ref={inputRef}
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light py-4 footer-body">
        <div className="container text-center" style={{ paddingTop: 0 }}>
          <p className="text-muted mb-0 py-2">© 2022 TigranSN Projects</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
