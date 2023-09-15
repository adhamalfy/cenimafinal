
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faMountainSun } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavbarLink,
  StyledNavbarFeature,
  StyledDarkMode,
} from "./styles/Navbar.styled";
import { StyledWrapper } from "./styles/Wrapper.styled";

import logo from "../assets/cinema-logo-template-isolated-on-white-background-vector.jpg";

import Input from "./Input";

const links = [
  {
    path: "/",
    label: "Movie",
    exect: "true",
  },
  {
    path: "/search",
    label: "Search",
    exect: "false",
  },
  
];

const Navbar = ({ colorMode, setColorMode }) => {

  const modeClickHandler = () => {
    setColorMode(!colorMode);
  };
  return (
    <header>
      <StyledNavbar>
        <StyledWrapper>
          <Link to={`/`}>
            <img src={logo} alt="CM_logo" />
          </Link>
          <StyledNavbarLink>
            {links.map(({ path, label, exact }) => {
              return (
                <li key={label}>
                  <NavLink
                    exact={exact}
                    to={path}
                    className={({ isActive }) => (isActive ? "isActived" : "")}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </StyledNavbarLink>
          <StyledNavbarFeature>
            <Input />
            <StyledDarkMode
              onClick={modeClickHandler}
              className={colorMode ? "lightMode" : "darkMode"}
            >
              <span></span>
              <p>
                <FontAwesomeIcon icon={faMountainSun} />
              </p>
              <p>
                <FontAwesomeIcon icon={faMoon} />
              </p>
            </StyledDarkMode>
          </StyledNavbarFeature>
        </StyledWrapper>
      </StyledNavbar>
    </header>
  );
};

export default Navbar;
