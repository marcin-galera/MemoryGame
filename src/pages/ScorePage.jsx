import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonStyled } from "../styles/styles";
import { useSelector } from "react-redux";
import Button from "../components/Button";

const ScorePage = () => {
  const { nickName } = useSelector((state) => state);

  let copyNameAndTime = [...nickName.nickName];
  let copiedAndSortedNameAndTime = copyNameAndTime.sort(
    (a, b) => a.time - b.time
  );

  return (
    <>
      <StyledScoreBoard>ScorePage</StyledScoreBoard>
      <StyledScores>W tę grę grali:</StyledScores>
      <ul>
        {copiedAndSortedNameAndTime.map((e) => (
          <NickAneTimeWrapper key={e.id}>
            <StyledMapped>{e.nickName}</StyledMapped>
            <TimeAndText>
              Czas:
              <StyledTime>{e.time}</StyledTime> sekund
            </TimeAndText>
          </NickAneTimeWrapper>
        ))}
      </ul>
      <Link to="/">
        <Button>Powrót do strony głównej</Button>
      </Link>
    </>
  );
};

const NickAneTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const TimeAndText = styled.div`
  margin-left: 20px;
`;

const StyledMapped = styled.li`
  display: inline;
  font-size: 24px;
  color: lightblue;
  list-style-type: none;
`;

const StyledTime = styled.span`
  margin-left: 5px;
  color: #db6e6e;
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
