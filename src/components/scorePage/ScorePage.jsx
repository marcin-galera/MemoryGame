import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonStyled } from "../../styles/styles";
import { useSelector } from "react-redux";

const ScorePage = () => {
  const { nickName } = useSelector((state) => state);

  return (
    <>
      <StyledScoreBoard>ScorePage</StyledScoreBoard>
      <StyledScores>W tę grę grali:</StyledScores>
      <ul>
        {nickName.nickName.map((e) => (
          <StyledMapped>{e}</StyledMapped>
        ))}
      </ul>
      <Link to="/">
        <ButtonStyled>Powrót do strony głównej</ButtonStyled>
      </Link>
    </>
  );
};

const StyledMapped = styled.li`
  font-size: 24px;
  color: lightblue;
  list-style-type: none;
`;

const StyledScoreBoard = styled.div`
  color: white;
  font-size: 28px;
  font-weight: bold;
  padding-top: 30px;
`;

const StyledScores = styled(StyledScoreBoard)`
  padding-top: 0;
`;

export default ScorePage;
