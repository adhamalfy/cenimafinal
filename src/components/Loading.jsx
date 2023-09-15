

import React from "react";

import logo from "../assets/cinema-logo-template-isolated-on-white-background-vector.jpg";

import {
  StyledLoading,
  StyledLoadingContent,
  StyledLoadingCircle,
} from "./styles/Loading.styled";

const Loading = () => {
  return (
    <StyledLoading>
      <StyledLoadingContent>
        <img src={logo} alt="CN_logo" />
        <StyledLoadingCircle />
        <StyledLoadingCircle />
        <StyledLoadingCircle />
      </StyledLoadingContent>
    </StyledLoading>
  );
};

export default Loading;
