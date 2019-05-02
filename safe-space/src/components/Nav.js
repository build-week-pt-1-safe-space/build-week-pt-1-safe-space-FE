import React from "./node_modules/react";
import styled from "./node_modules/styled-components";
import logo from "../assets/logo.png";
import search from "../assets/search.jpg";
import { NavLink } from "./node_modules/react-router-dom";
import "../styles/nav.css";

const NavBar = styled.div`
  height: 75px;
  border-bottom: 4px solid #2ab7a8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItems = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
  color: white;
  list-style: none;
  align-items: center;
  font-size: 18px;
  padding-top: 15px;
`;

const Logo = styled.img`
  height: 60px;
  padding-left: 20px;
`;

const SearchIcon = styled.img`
  height: 18px;
  padding-right: 100px;
  padding-top: 2px;
`;

const Nav = props => {
  const NavToggle =
    props.isLoggedIn === false ? (
      <>
        <li activeClassName="active">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li activeClassName="active">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </>
    ) : (
      <>Log Out</>
    );

  return (
    <NavBar>
      <Logo src={logo} />
      <NavItems className="navbar">
        <li activeClassName="active">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        {NavToggle}
        <li>
          <SearchIcon src={search} />
        </li>
      </NavItems>
    </NavBar>
  );
};

export default Nav;
