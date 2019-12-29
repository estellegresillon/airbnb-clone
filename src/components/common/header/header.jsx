import React from 'react';
import { Link, NavLink } from "react-router-dom";

import { menuItems } from "../../../constants/menu-items";

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
      {menuItems.map(link => {
        return (
          <NavLink activeClassName="selected-menu-item" className="menu-link" to={link.path}>
            <div>{link.name}</div>
          </NavLink>
        )
      })}
    </div>
  </div>
);

export default Header;
