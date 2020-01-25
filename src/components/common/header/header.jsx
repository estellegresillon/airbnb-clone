import React from 'react';
import Link from "next/link";
import { MENU_ITEMS } from "../../../constants/menu-items";

const Header = () => (
  <div className="header">
    <div className="header-left">
      <Link href="/">
        <div className="foodlab-logo">
          <i className="fas fa-award"></i>Foodlab
        </div>
      </Link>
    </div>
    <div className="header-right">
      {MENU_ITEMS.map(link => {
        return (
          <Link 
            //activeClassName="selected-menu-item"
            //className="menu-link"
            href={link.path}
            key={link.name}
          >
            <div>{link.name}</div>
            {/* <div className="menu-underline" /> */}
          </Link>
        )
      })}
    </div>
  </div>
);

export default Header;
