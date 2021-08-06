import React from "react";
import { ButtonStyled } from "../../styles/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <H1>Gra pamięciowa</H1>
      <H2>Spróbuj znaleźć wszystkie pary!</H2>
      <Link to="/game-page">
        <ButtonStyled>Start</ButtonStyled>
      </Link>
    </div>
  );
};

const H1 = styled.h1`
  color: white;
  margin: 0;
  padding: 20px 0;
`;
const H2 = styled.h2`
  color: white;
`;

export default MainPage;
