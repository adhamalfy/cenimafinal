

import React from "react";
import {
  StyledAside,
  StyledAsideLogo,
} from "../../components/styles/Aside.styled";
import logo from "../../assets/cinema-logo-template-isolated-on-white-background-vector.jpg";
import { request } from "../../data/data";

const Aside = ({ genreID, setGenreID }) => {
  return (
    <StyledAside>
      <StyledAsideLogo>
        <img src={logo} alt="CM_logo" />
      </StyledAsideLogo>
      <h1>GENRES</h1>
      <span />
      <ul>
        {request.map((item, idx) => {
          return (
            <li
              key={item.genre}
              onClick={() => {
                setGenreID(idx);
              }}
              value={idx}
              className={idx === genreID ? "genre-actived" : ""}
            >
              <p>{item.genre}</p>
              <span />
              <span />
            </li>
          );
        })}
      </ul>
    </StyledAside>
  );
};

export default Aside;
