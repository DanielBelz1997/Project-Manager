import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Nav = styled.div`
  background: #1a2e35;
  height: 0px;
  display: block;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SideBarNav = styled.nav`
  background: #1a2e35;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SideBarWarp = styled.nav`
  width: 100%;
`;

const Submenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div style={{ color: "black" }}>
      <Nav>
        <NavIcon to="#" style={{ color: "white", width: "20px" }}>
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SideBarNav sidebar={sidebar}>
        <SideBarWarp>
          <br></br>
          <br></br>
          <NavIcon to="#" style={{ color: "white", width: "20px" }}>
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
        </SideBarWarp>
      </SideBarNav>
    </div>
  );
};

export default Submenu;
