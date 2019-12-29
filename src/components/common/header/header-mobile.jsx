import React from 'react';
import { Link, NavLink } from "react-router-dom";

import { menuItemsMobile } from "../../../constants/menu-items";
import { useComponentVisible } from "../../../hooks/useRef";

const HeaderMobile = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  
  return (
    <div className="header-mobile">
      <div className="header-left">
        <Link to="/">
          <div className="foodlab-logo">
            <i className="fas fa-award" />Foodlab
          </div>
        </Link>
      </div>
      <div className="header-right">
        <i className="fas fa-hamburger" onClick={() => setIsComponentVisible(true)} />
        {isComponentVisible &&
          <div ref={ref} className="dropdown-menu-mobile">
            {menuItemsMobile.map(link => {
              return (
                <NavLink 
                  className="menu-link"
                  to={link.path}
                  onClick={() => setIsComponentVisible(false)}
                >
                  <div>{link.name}</div>
                </NavLink>
              )
            })}
          </div>}
      </div>
    </div>
  );
};

export default HeaderMobile;
