import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "black" };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      <NavLink
        className="nav-link nav-item"
        activeStyle={activeStyle}
        to="/courses"
      >
        Courses
      </NavLink>
      <NavLink
        className="nav-link nav-item"
        activeStyle={activeStyle}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
