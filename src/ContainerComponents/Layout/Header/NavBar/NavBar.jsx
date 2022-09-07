import React from "react";
import "./NavBar.css";
import { Link, Router } from "react-router-dom";

function NavBar() {
  return (
    <section className="navbar">
      <Link to="/Home" className="navbar-item">
        Home
      </Link>

      <Link to="/UserInfoGit" className="navbar-item">
        User-Info
      </Link>

      <Link to="/TodoList" className="navbar-item">
        Add Todo
      </Link>
      <Link to="/Theme" className="navbar-item">
        Theme
      </Link>
      <Link to="/About" className="navbar-item">
        About
      </Link>
    </section>
  );
}

export default NavBar;
