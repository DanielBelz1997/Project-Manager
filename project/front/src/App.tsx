import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../public/login.jsx";
import HomePage from "../public/main.tsx";
import Navbar from "./Navbar.js";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./App.css";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [cookies, setCookies] = useCookies(["jwt"]);

  useEffect(() => {
    const jwtToken = cookies.jwt;
    console.log(jwtToken);
    setIsAuthenticated(!!jwtToken); // Set isAuthenticated to true if jwtToken exists
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar logo="Your Logo" isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
