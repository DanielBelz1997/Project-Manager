import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Nav = styled.div`
  background: #42b883;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Submenu = () => {
  return (
    <div style={{ color: "black" }}>
      <Nav>Nav</Nav>
    </div>
  );
};

export default Submenu;
