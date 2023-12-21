// Navbar.tsx

import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import "./Navbar.css"; // Import your custom CSS file

interface NavbarProps {
  logo: string;
  isAuthenticated: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ logo, isAuthenticated }) => {
  // Inside your Navbar component
  return (
    <nav className="navbar">
      <div className="logo">{logo}</div>
      <div className="navbar-center">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
