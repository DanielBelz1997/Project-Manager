// @ts-nocheck
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../public/login.jsx";
import HomePage from "../public/main.tsx";
import Navbar from "./Navbar.js";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./App.css";
import image from "../public/snorlax-pixel-art-pokemon-pokemon-b71f72bdc97cc38e186081657b91bc51.png";
// import SideBar from "./components/SideBar.tsx";

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
        <Navbar
          logo={
            <img
              src={image}
              alt="Chat"
              style={{
                width: "100px",
                padding: "-10px",
                margin: "-10px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            />
          }
          isAuthenticated={isAuthenticated}
        />
        {/* <SideBar /> */}
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
