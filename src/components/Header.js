import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes }) => {
  return (
    <nav className="header__nav nav" id="navbar">
      <div className={"nav__wrapper"}>
        <ul className="nav__menu">
          {routes.map((navItem) => {
            return <NavigationItem item={navItem} key={navItem.url} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

const NavigationItem = ({ item }) => {
  return (
    <li className="nav__item" key={item.name}>
      <NavLink to={item.url} className="nav__link hover-item">
        {item.name}
      </NavLink>
    </li>
  );
};

const Header = ({ routes }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Navigation routes={routes} />
      </div>
    </header>
  );
};

export default Header;
