import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="header-left">
      <Link to="/">
        <div className="foodlab-logo">
          <i className="fas fa-award"></i>Foodlab
        </div>
      </Link>
    </div>
    <div className="header-right">
      <div className="our-selection">Notre sélection</div>
      <div className="newsletter">Newsletter</div>
      <div className="subscribe-pro">Ajouter un resto</div>
      <div className="about">Le lab</div>
    </div>
  </div>
);

export default Header;
