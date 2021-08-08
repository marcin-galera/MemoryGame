import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OneCard from "./OneCard";
import { ButtonStyled } from "../../styles/styles";
import { Link } from "react-router-dom";
import Atom from "../../assets/Atom";
import Apple from "../../assets/Apple";
import Cakephp from "../../assets/Cakephp";
import CeyIon from "../../assets/Ceylon";
import Couchdb from "../../assets/Couchdb";
import Devicon from "../../assets/Devicon";
import Django from "../../assets/Django";
import Ember from "../../assets/Ember";
import Github from "../../assets/Github";
import Linux from "../../assets/Linux";
import Slack from "../../assets/Slack";
import Sketch from "../../assets/Sketch";
import Swift from "../../assets/Swift";
import Yarn from "../../assets/Yarn";
import Typescript from "../../assets/Typescript";
import ToCheck from "../../assets/ToCheck";

const GamePage = () => {
  const [stateDeck, setStateDeck] = useState([
    { content: <Apple />, FlippedUp: false },
    { content: <Atom />, FlippedUp: false },
    { content: <Cakephp />, FlippedUp: false },
    { content: <CeyIon />, FlippedUp: false },
    { content: <Couchdb />, FlippedUp: false },
    { content: <Devicon />, FlippedUp: false },
    { content: <Django />, FlippedUp: false },
    { content: <Ember />, FlippedUp: false },
    { content: <Github />, FlippedUp: false },
    { content: <Linux />, FlippedUp: false },
    { content: <Slack />, FlippedUp: false },
    { content: <Swift />, FlippedUp: false },
    { content: <Typescript />, FlippedUp: false },
    { content: <Sketch />, FlippedUp: false },
    { content: <Yarn />, FlippedUp: false },
  ]);
  const [firstCard, setFirstCard] = useState<number | null>(null);
  const [thirdClick, setThirdClick] = useState(0);
  const [isEveryCardFind, setIsEveryCardFind] = useState(false);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    setStateDeck(
      stateDeck
        .concat(stateDeck)
        .sort(() => Math.random() - 0.5)
        .map((f) => {
          return {
            content: f.content,
            FlippedUp: f.FlippedUp,
          };
        })
    );
  }, []);

  const flipCardBack = (idx: number) => {
    setStateDeck((prevState) =>
      prevState.map((e, i) => {
        if (i === idx) {
          return {
            content: e.content,
            FlippedUp: !e.FlippedUp,
          };
        } else {
          return e;
        }
      })
    );
  };

  const clickCard = (idx: number) => {
    if (thirdClick === 2) {
      setThirdClick(0);
      return;
    }
    setThirdClick((prevState) => prevState + 1);
    if (firstCard === null) {
      setFirstCard(idx);
    } else {
      if (stateDeck[firstCard].content === stateDeck[idx].content) {
        setFirstCard(null);
        setThirdClick(0);
      } else {
        setTimeout(() => {
          flipCardBack(firstCard);
          flipCardBack(idx);
          setFirstCard(null);
          setThirdClick(0);
        }, 1000);
      }
    }
    flipCardBack(idx);
    const temp = stateDeck.filter((card) =>
      card.FlippedUp === false ? card : null
    );
    temp.length === 1 ? setIsEveryCardFind(true) : setIsEveryCardFind(false);
    temp.length === 1 && setWinner(true);
    temp.length === 1 &&
      setTimeout(() => {
        setWinner(false);
      }, 5000);
  };

  const restartGame = () => {
    setFirstCard(null);
    setThirdClick(0);
    setIsEveryCardFind(false);
    setStateDeck((prevState) => {
      return prevState.map((card) => ({ ...card, FlippedUp: false }));
    });
  };

  return (
    <>
      {winner && <WinContent>Gratulacje!</WinContent>}
      <CardsWrapper>
        {stateDeck.map((e, i) => (
          <OneCard
            clickCard={() => !e.FlippedUp && thirdClick !== 2 && clickCard(i)}
            FlippedUp={e.FlippedUp}
            content={e.FlippedUp ? e.content : <ToCheck />}
          />
        ))}
      </CardsWrapper>
      {isEveryCardFind && (
        <>
          <ButtonStyled onClick={restartGame}>Zacznij od nowa</ButtonStyled>
        </>
      )}
      <Link to="/">
        <ButtonStyled>Powrót do strony głównej</ButtonStyled>
      </Link>
    </>
  );
};

const WinContent = styled.div`
  position: absolute;
  font-weight: bold;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: lightgreen;
  font-size: 98px;
  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    width: 320px;
  }
`;

export default GamePage;
