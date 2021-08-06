import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OneCard from "./OneCard";
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
import Swift from "../../assets/Swift";
import Typescript from "../../assets/Typescript";

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
  ]);
  const [firstCard, setFirstCard] = useState(null);
  const [thirdClick, setThirdClick] = useState(0);

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

  const flipCardBack = (idx) => {
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

  const clickCard = (idx) => {
    if (thirdClick === 2) {
      setTimeout(() => {
        setThirdClick(0);
      }, 100);
      return;
    }
    setThirdClick((prevState) => prevState + 1);

    if (firstCard === null) {
      setFirstCard(idx);
    } else {
      const firstCardContent = stateDeck[firstCard].content;
      const secondCardContent = stateDeck[idx].content;
      if (firstCardContent === secondCardContent) {
        setFirstCard(null);
        setThirdClick(0);
      } else {
        setTimeout(() => {
          flipCardBack(firstCard);
          flipCardBack(idx);
          setFirstCard(null);
          setThirdClick(0);
        }, 500);
      }
    }
    flipCardBack(idx);
  };

  return (
    <CardsWrapper>
      {stateDeck.map((e, i) => {
        return (
          <OneCard
            clickCard={() => !e.FlippedUp && clickCard(i)}
            FlippedUp={e.FlippedUp}
            content={e.FlippedUp ? e.content : `empty`}
          />
        );
      })}
    </CardsWrapper>
  );
};

export const CardsWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  margin: 0 auto;
`;

export default GamePage;
