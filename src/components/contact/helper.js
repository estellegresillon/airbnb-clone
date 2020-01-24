export const printLetterByLetter = (destination, message) => {
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
        deleteMessage(destination, message);
      }, 1000);
    }
  }, 100);
};

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
          printLetterByLetter(destination, "Un petit coucou ?");
        } else printLetterByLetter(destination, "Un resto à proposer ?");
      }, 1000);
    }
  }, 50);
};
