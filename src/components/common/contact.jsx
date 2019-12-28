import React, { useState } from "react";

// contact to : add menu / fix opening hours / add restaurant (yours or one you like)

const MessageButton = () => {
  const [showIcon, displayIcon] = useState(false);

  const handleHover = () => {
    displayIcon(!showIcon);
  };

  return (
    <div
      className="message-button"
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
    >
      {showIcon && <i className="far fa-paper-plane" />}
      HOLA !
    </div>
  );
};

export default MessageButton;
