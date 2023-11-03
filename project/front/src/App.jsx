import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../public/login.jsx";
import HomePage from "../public/main.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
