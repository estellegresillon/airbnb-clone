import React from "react";

const PopIn = ({ hasSeenSuggestion, setHasSeenSuggestion }) => {
  const handleCloseSuggestion = () => {
    setHasSeenSuggestion(true);
    localStorage.setItem('has_seen_suggestion', true);
  };

  return (
    <>
      {!hasSeenSuggestion &&
        <div className="popin-suggestion-navigation" onClick={() => handleCloseSuggestion()}>
          <div className="popin-text">
            Utilisez les flèches ci-dessous ou celles de votre clavier 
            pour naviguer entre les restaurants.
          </div>
          <i className="fas fa-times" /> 
        </div>}
    </>
  );
};

export default PopIn;
