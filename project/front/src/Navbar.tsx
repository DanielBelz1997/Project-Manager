// Navbar.tsx

import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import "./Navbar.css"; // Import your custom CSS file
import Cookies from "js-cookie";

interface NavbarProps {
  logo: string;
  isAuthenticated: boolean;
  checkIfTrue: object;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  const isAuthenticated = !!Cookies.get("jwt"); // Check if the user is authenticated
  let checkIfTrue: React.CSSProperties | undefined;

  isAuthenticated === true
    ? (checkIfTrue = { backgroundColor: "#24292f" })
    : {};
  console.log(checkIfTrue);
  return (
    <nav className="navbar" style={checkIfTrue}>
      <div className="logo">{logo}</div>
      {isAuthenticated && (
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
          <Link to="/logout" className="nav-link">
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
