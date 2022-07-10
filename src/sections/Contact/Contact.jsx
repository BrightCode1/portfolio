import React, { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { BiSend } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

import { ContactContainer } from "./contactStyles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const SendMessage = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.project
    ) {
      toast.error("Fill in all fields!");
      return;
    }

    setIsSendingMessage(true);
    const templateParams = {
      username: formData.name,
      email: formData.email,
      project: formData.project,
      message: formData.message,
    };

    emailjs
      .send(
        "portfolio",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_ID
      )
      .then(
        (response) => {
          setFormData({
            name: "",
            email: "",
            project: "",
            message: "",
          });
          toast.success("Message sent successfully!");
          setIsSendingMessage(false);
        },
        (err) => {
          setIsSendingMessage(false);
          toast.error("Error sending message!");
        }
      );
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
                placeholder="Enter your full name"
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
                placeholder="Enter your email address"
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
              placeholder="What project do you want to work on?"
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
              placeholder="Hi, I think we need an application for our products at Company X. How soon can you hop on to discuss this?"
            ></textarea>
          </div>
          <div>
            {!isSendingMessage ? (
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
            ) : (
              <PulseLoader
                size={15}
                color={"var(--first-color)"}
                cssOverride={{
                  color: "var(--first-color)",
                }}
              />
            )}
          </div>
        </form>
      </div>
    </ContactContainer>
  );
};

export default Contact;
