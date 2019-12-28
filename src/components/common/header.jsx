import React from 'react';
import { Link, NavLink } from "react-router-dom";

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
      <NavLink activeClassName="selected-menu-item" className="menu-link" to="/restaurants">
        <div>Les restos</div>
      </NavLink>
      <NavLink activeClassName="selected-menu-item" className="menu-link" to="/awards">
        <div>Les awards</div>
      </NavLink>
      <NavLink activeClassName="selected-menu-item" className="menu-link" to="/add-restaurant">
        <div>Proposer un resto</div>
      </NavLink>
      <NavLink activeClassName="selected-menu-item" className="menu-link" to="/about">
        <div>Foodlab ?</div>
      </NavLink>
    </div>
  </div>
);

export default Header;
