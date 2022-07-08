import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { BiSend } from "react-icons/bi";

import { ContactContainer } from "./contactStyles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const { name, email, project, message } = formData;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      formData,
      [name]: value,
    });
  };

  const SendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <ContactContainer className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__info">
            <BsTelephone className="contact__icon" />

            <div>
              <div className="contact__title">Call Me</div>
              <span className="contact__subtitle">234 701 650 5681</span>
            </div>
          </div>
          <div className="contact__info">
            <IoMailOutline className="contact__icon" />

            <div>
              <div className="contact__title">Email</div>
              <span className="contact__subtitle">kcib.mail@gmail.com</span>
            </div>
          </div>
          <div className="contact__info">
            <GoLocation className="contact__icon" />

            <div>
              <div className="contact__title">Location</div>
              <span className="contact__subtitle">
                Port Harcourt, Rivers State - Nigeria
              </span>
            </div>
          </div>
        </div>
        <form action="" className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="input-name" className="contact__label">
                Full Name
              </label>
              <input
                onChange={onChangeInput}
                value={formData.name}
                type="text"
                id="input-name"
                name="name"
                className="contact__input"
              />
            </div>
            <div className="contact__content">
              <label htmlFor="input-email" className="contact__label">
                Email Address
              </label>
              <input
                onChange={onChangeInput}
                value={formData.email}
                type="email"
                id="input-email"
                name="email"
                className="contact__input"
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="input-project" className="contact__label">
              Project
            </label>
            <input
              onChange={onChangeInput}
              value={formData.project}
              type="text"
              id="input-project"
              name="project"
              className="contact__input"
            />
          </div>
          <div className="contact__content">
            <label htmlFor="input-message" className="contact__label">
              Message
            </label>
            <textarea
              onChange={onChangeInput}
              value={formData.message}
              name="message"
              id="input-message"
              cols="0"
              rows="7"
              className="contact__input"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              onClick={SendMessage}
              className="btn btn--flex"
              style={{
                border: "none",
              }}
            >
              Send Message
              <BiSend className="btn__icon" />
            </button>
          </div>
        </form>
      </div>
    </ContactContainer>
  );
};

export default Contact;
