import React, { useState } from "react";
import { ButtonStyled } from "../../styles/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNickName } from "../../redux/nameSlice";

const MainPage = () => {
  const [firstName, setFirstName] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <H1>Gra pamięciowa</H1>
      <H2>Spróbuj znaleźć wszystkie pary!</H2>
      <H2>Przed zaczęciem wpisz swoje imię:</H2>
      <InputAndButtonWrapper>
        <StyledInput
          placeholder="imię"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </InputAndButtonWrapper>
      {firstName.length >= 3 && (
        <Link onClick={() => dispatch(setNickName(firstName))} to="/game-page">
          <ButtonStyled>Start</ButtonStyled>
        </Link>
      )}
    </div>
  );
};

const StyledInput = styled.input`
  width: 200px;
  height: 20px;
`;

const InputAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  color: white;
  margin: 0;
  padding: 20px 0;
`;
const H2 = styled.h2`
  color: white;
`;

export default MainPage;
