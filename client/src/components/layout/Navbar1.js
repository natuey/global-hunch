import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code" /> Global Hunch
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="profiles.html">Fitness Professionals</Link>
          </li>
          <li>
            <Link to="profiles.html">Hirers</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
