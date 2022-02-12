import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="content-section">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <h2>What we do</h2>
              <p>
                The mission of our NGO is To develop creative and innovative
                thinking and skills among youth. Promote the development of
                creative society and the innovative economy by the active
                involvement of youth. To participate in the processes of
                development of knowledge-based economy in Armenia.
              </p>
              <div className="button">
                <div>
                  <Link to="/contact">Contact</Link>
                </div>
                <div className="picNumber">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/creative-youth-4442d.appspot.com/o/files%2FErasmus.docx?alt=media&token=c323e591-9a80-42ca-9826-154cbe9a872a"
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    PIC/ID Number
                  </a>
                </div>
              </div>
            </div>
            <div className="social">
              <a
                href="https://www.facebook.com/creativeyouthNGO"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div className="image-section">
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              alt="Erasmus "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
