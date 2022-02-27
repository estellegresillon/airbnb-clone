import React from "react";
import { Link, NavLink } from "react-router-dom";

import { MENU_ITEMS } from "../../../constants/menu-items";

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
      {MENU_ITEMS.map((link) => {
        return (
          <NavLink className="menu-link" to={link.path} key={link.name}>
            <div>{link.name}</div>
            <div className="menu-underline" />
          </NavLink>
        );
      })}
    </div>
  </div>
);

export default Header;
