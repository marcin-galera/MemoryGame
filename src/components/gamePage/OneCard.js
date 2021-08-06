import React from "react";
import styled from "styled-components";

// interface OneCardProps {
//   Content: Element;
//   numberOfFlippedCard: number;
//   addFlippedCard: (props: any) => any;
// }

const OneCard = ({ content, clickCard }) => (
  <OneCardWrapper onClick={clickCard}>{content}</OneCardWrapper>
);

const OneCardWrapper = styled.div`
  width: 70px;
  height: 70px;
  padding: 10px 10px 10px 10px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  svg {
    height: 50px;
    width: 50px;
  }
`;

export default OneCard;
