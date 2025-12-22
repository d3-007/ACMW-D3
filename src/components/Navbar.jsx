import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active-link" : "");

  return (
    <header className="navbar">
      <div className="logo">LensCraft</div>
      <nav>
        <Link className={isActive("/")} to="/">Home</Link>
        <Link className={isActive("/about")} to="/about">About</Link>
        <Link className={isActive("/contact")} to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
