import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { BiSend } from "react-icons/bi";

import { ContactContainer } from "./contactStyles";

const Contact = () => {
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
                type="text"
                id="input-name"
                name="input-name"
                className="contact__input"
              />
            </div>
            <div className="contact__content">
              <label htmlFor="input-email" className="contact__label">
                Email Address
              </label>
              <input
                type="email"
                id="input-email"
                name="input-email"
                className="contact__input"
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="input-project" className="contact__label">
              Project
            </label>
            <input
              type="text"
              id="input-project"
              name="input-project"
              className="contact__input"
            />
          </div>
          <div className="contact__content">
            <label htmlFor="input-message" className="contact__label">
              Message
            </label>
            <textarea
              name="input-message"
              id="input-message"
              cols="0"
              rows="7"
              className="contact__input"
            ></textarea>
          </div>
          <div>
            <a href="/" className="btn btn--flex">
              Send Message
              <BiSend className="btn__icon" />
            </a>
          </div>
        </form>
      </div>
    </ContactContainer>
  );
};

export default Contact;
