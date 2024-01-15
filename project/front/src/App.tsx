// @ts-nocheck
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../public/login.jsx";
import HomePage from "../public/main.tsx";
import { CreateProject } from "./components/createProject.tsx";
import Navbar from "./Navbar.js";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./App.css";
import { NavbarMinimal } from "./components/NavBarMinimal.tsx";
import "@mantine/core/styles.css";
import { HeaderMenu } from "./components/HeaderMenu.tsx";
import "@mantine/dates/styles.css";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [cookies, setCookies] = useCookies(["jwt"]);

  useEffect(() => {
    const jwtToken = cookies.jwt;
    console.log(jwtToken);
    setIsAuthenticated(!!jwtToken); // Set isAuthenticated to true if jwtToken exists
  }, []);

  return (
    <BrowserRouter>
      <HeaderMenu />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/createProject" element={<CreateProject />} />
      </Routes>
      <NavbarMinimal />
    </BrowserRouter>
  );
};

export default App;
