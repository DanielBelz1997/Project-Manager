import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import React from "react";

export default function Navbar() {
  const [cookies, setCookies] = useCookies(["jwt"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("jwt", "");
    navigate("/login");
  };

  return (
    <div className="navbar">
      {!cookies.jwt ? (
        <Link to="/login">
          <button> login </button>
        </Link>
      ) : (
        <>
          <button onClick={logout}> logout </button>
        </>
      )}
    </div>
  );
}
