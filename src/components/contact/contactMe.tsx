import React from "react";
import "./style.css";
import emailjs from "emailjs-com";
import SocialNetworks from "../socialNetworks/socialNetworks";

const ContactMe: React.FC = (): JSX.Element => {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_znp6qh5",
        "template_j3a1ma9",
        e.target,
        "user_KIGqNVXSqlcCLkl41m6Kh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact-container text-center">
      <form onSubmit={sendEmail}>
        <div className="form-group  w-50 m-auto">
          <label htmlFor="name">your Name</label>
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="name"
            name="name"
          />
          <label htmlFor="email">enter your email</label>
          <input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className="form-control"
            name="email"
          />
          <label htmlFor="message">message</label>
          <textarea id="message" className="form-control" name="message" />
          <button type="submit" className="btn btn-primary m-2">
            Send Mail
          </button>
        </div>
      </form>
      <SocialNetworks />
    </div>
  );
};
export default ContactMe;
