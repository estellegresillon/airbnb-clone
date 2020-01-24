import React from "react";

import { CONTACT_ICONS } from "../../../constants/contact-icons";

const ContactSection = props => {
  const { contactIconContainer, contactContainer, contactTitle, history } = props;

  const goToContactPage = () => {
    history.push({ pathname: "/contact" })
  }

  return (
    <div className="home-contact" ref={contactContainer}>
      <div className="gradient-stroke" ref={contactTitle} id="home-contact-title">
        Un resto à proposer ?
      </div>
      <button className="go-to-contact" onClick={() => goToContactPage()}>
        <span className="btn-first-text">Ecrivez-nous !</span>
        <span className="btn-second-text">Ecrivez-nous !</span>
      </button>

      <div className="contact-icon-container" ref={contactIconContainer}>
      {CONTACT_ICONS.map(icon => {
        return <img key={icon} className={`contact-${icon}`} src={`contact-${icon}.svg`} alt={`${icon}-animation`} />
      })}
      </div>
    </div>
  );
};

export default ContactSection;
