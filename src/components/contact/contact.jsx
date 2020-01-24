import React, { useEffect, useRef } from "react";

import { CONTACT_ICONS } from "../../constants/contact-icons";
import { printLetterByLetter } from "./helper";

const Contact = () => {
  const textContainer = useRef(null);

  useEffect(() => {
    printLetterByLetter(textContainer.current, "Un petit coucou ?");
    return () => printLetterByLetter(null, null);
  // eslint-disable-next-line
  }, []);

  return (
    <div className="contact-wrapper">
      <div id="text-container" ref={textContainer} className="gradient-stroke" />
        <div className="bottom-section"><div className="contact-infos">
          <p>C'est par ici :</p>
          <p className="mail-foodlab">hello@foodlab.com</p>
        </div>
        <div className="contact-medias">
          <i className="fab fa-instagram" />
          <i className="fab fa-twitter" />
          <i className="fab fa-facebook" />
          <i className="fab fa-facebook-messenger" />
          <i className="fas fa-rss-square" />
        </div>
      </div>

      {CONTACT_ICONS.map(icon => {
        return <img key={icon} className={`contact-${icon}`} src={`contact-${icon}.svg`} alt={`${icon}-animation`} />
      })}
    </div>
  );
};

export default Contact;
