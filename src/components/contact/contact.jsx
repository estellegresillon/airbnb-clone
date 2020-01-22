import React, { useEffect } from "react";

const Contact = () => {
  const deleteMessage = (destination, message) => {
    const initialMessage = message;
    let i = message.length - 1;

    const interval = setInterval(function(){
      const container = document.getElementById(destination);
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
            printLetterByLetter("text", "Un petit coucou ?")
          } else printLetterByLetter("text", "Un resto à proposer ?")
        }, 1000);
      }
    }, 50);
  }

  const printLetterByLetter = (destination, message) => {
    let i = 0;

    const interval = setInterval(function(){
      const container = document.getElementById(destination);
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
          deleteMessage("text", message)
        }, 1000);
      }
    }, 100);
  }

  useEffect(() => {
    printLetterByLetter("text", "Un petit coucou ?");
    return () => printLetterByLetter(null, null);
  // eslint-disable-next-line
  }, []);

  return (
    <div className="contact-wrapper">
      <div id="text" className="gradient-stroke" />
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

      <img className="contact-burger" src="contact-burger.svg" alt="burger-svg" />
      <img className="contact-lobster" src="contact-lobster.svg" alt="lobsterer-svg" />
      <img className="contact-salad" src="contact-salad.svg" alt="dalad-svg" />

      <img className="contact-ice-cream" src="contact-ice-cream.svg" alt="ice-cream-svg" />
      <img className="contact-pizza" src="contact-pizza.svg" alt="pizza-svg" />
      <img className="contact-pasta" src="contact-pasta.svg" alt="pasta-svg" />
    </div>
  );
};

export default Contact;
