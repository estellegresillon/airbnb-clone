import React, { useEffect, useRef } from "react";

import { CONTACT_ICONS } from "../../constants/contact-icons";

const Contact = () => {
  const textContainer = useRef(null);

  const deleteMessage = (destination, message) => {
    const initialMessage = message;
    let i = message.length - 1;

    const interval = setInterval(function(){
      const container = destination;
      if (container) {
        container.innerHTML = message.substring(0, i - 1);
      } else {
        clearInterval(interval);
        return;
      }

      i--;

      if (i === 0){
        clearInterval(interval);
        setTimeout(() => {
          if (initialMessage === "Un resto à proposer ?") {
            printLetterByLetter(textContainer.current, "Un petit coucou ?")
          } else printLetterByLetter(textContainer.current, "Un resto à proposer ?")
        }, 1000);
      }
    }, 50);
  }

  const printLetterByLetter = (destination, message) => {
    let i = 0;

    const interval = setInterval(function(){
      const container = destination;
      if (container) {
        container.innerHTML += message.charAt(i);
      } else {
        clearInterval(interval);
        return;
      }

      i++;

      if (i === message.length){
        clearInterval(interval);
        setTimeout(() => {
          deleteMessage(textContainer.current, message)
        }, 1000);
      }
    }, 100);
  }

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
        return <img className={`contact-${icon}`} src={`contact-${icon}.svg`} alt={`${icon}-animation`} />
      })}
    </div>
  );
};

export default Contact;
