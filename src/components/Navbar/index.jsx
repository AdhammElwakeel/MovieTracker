import "./Navbar.css";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//icons
import LogoIcon from "../../assets/icons/logo";
import SearchIcon from "../../assets/icons/search";
import NotificationIcon from "../../assets/icons/notification";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const closeMenu = () => setIsNavExpanded(false);

  return (
    <nav className="navbar">
      <div className="icon-image">
        <NavLink to="/" onClick={closeMenu}>
          <LogoIcon />
        </NavLink>
      </div>

      <button
        className={`nav-expanded ${isNavExpanded ? "active" : ""}`}
        onClick={() => setIsNavExpanded((isNavExpanded) => !isNavExpanded)}
        aria-label="Toggle Navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies-shows"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Movies &amp; Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/subscriptions"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Subscriptions
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-icons">
        <NavLink to="/search" className="icon-link" onClick={closeMenu}>
          <SearchIcon />
        </NavLink>
        <NavLink to="/notifications" className="icon-link" onClick={closeMenu}>
          <NotificationIcon />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
