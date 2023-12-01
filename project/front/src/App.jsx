import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../public/login.jsx";
import HomePage from "../public/main.jsx";
import Navbar from "./Navbar";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
