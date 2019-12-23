import React, { useState } from "react";
import ScrollIntoView from 'react-scroll-into-view'

import Badge from "../common/badge";

const keyList = [
  { selector: "#fa-award", icon: "fas fa-award", description: "Le mieux noté" },
  { selector: "#fa-medal", icon: "fas fa-medal", description: "Le plus populaire" },
  { selector: "#fa-heart", icon: "fas fa-heart", description: "Notre coup de coeur" },
  { selector: "#fa-umbrella-beach", icon: "fas fa-umbrella-beach", description: "La meilleure terrasse" },
  { selector: "#fa-instagram", icon: "fab fa-instagram", description: "Le plus instagrammable" },
  { selector: "#fa-crown", icon: "fas fa-crown", description: "Le plus chic" },
  { selector: "#fa-bacon", icon: "fas fa-bacon", description: "Le meilleur brunch" },
  { selector: "#fa-pizza-slice", icon: "fas fa-pizza-slice", description: "La meilleure pizza" },
  { selector: "#fa-carrot", icon: "fas fa-carrot", description: "Le meilleur vegan" },
  { selector: "#fa-hamburger", icon: "fas fa-hamburger", description: "Le meilleur burger" },
  { selector: "#fa-pepper-hot", icon: "fas fa-pepper-hot", description: "Le meilleur méxicain" },
  { selector: "#fa-birthday-cake", icon: "fas fa-birthday-cake", description: "La meilleure pâtisserie" },
  { selector: "#fa-book", icon: "fas fa-book", description: "Pour bouquiner ou travailler" },
  { selector: "#fa-chess", icon: "fas fa-chess", description: "Pour jouer" },
  { selector: "#fa-leaf", icon: "fas fa-leaf", description: "Le meilleur poké" },
  { selector: "#fa-hotdog", icon: "fas fa-hotdog", description: "Le meilleur germanique" },
  { selector: "#fa-frog", icon: "fas fa-frog", description: "Le meilleur français" },
  { selector: "#fa-fish", icon: "fas fa-fish", description: "Le meilleur poisson" },
  { selector: "#fa-utensils", icon: "fas fa-utensils", description: "Le meilleur italien" },
  { selector: "#fa-sun", icon: "fas fa-sun", description: "Le meilleur brésilien" },
  { selector: "#fa-torii-gate", icon: "fas fas fa-torii-gate", description: "Le meilleur japonais" },
]

const Keys = () => {
  const [isModalOpened, toggleModal] = useState(false)

  const handleClick = () => {
    toggleModal(!isModalOpened)
  }

  return (
    <div className="keys-wrapper">
      <div className="selection-button" onClick={() => handleClick()}>
        Sélection <i className="fas fa-chevron-down" />
      </div>
      {isModalOpened &&
        <div className="filter-selection-wrapper">
          {keyList.map(key => {
            return (
              <ScrollIntoView key={key.selector} selector={key.selector}>
                <Badge icon={key.icon} description={key.description} />
              </ScrollIntoView>
            )
          })}
        </div>}
    </div>
  )
}

export default Keys;
