import React from "react";
import "./Contact.css";
import {
  FaEnvelopeOpen,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import './Contact.css' ; 
const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span> Touch </span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">Rafik.bannour99@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">+216 50 792 380</h4>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href="https://www.facebook.com/rafik.bannour"
                className="contact__social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.facebook.com/rafik.bannour"
                className="contact__social-link"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/rafik.bannour"
                className="contact__social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/rafik.bannour"
                className="contact__social-link"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Name"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Your Email"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Subject"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>
          <butto className="button">
             Send Message
             <span className="button__icon contact__button_icon">
              <FiSend/>
             </span>
          </butto>
        </form>
      </div>
    </section>
  );
};

export default Contact;
