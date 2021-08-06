import React from "react";
import styled from "styled-components";

interface OneCardProps {
  content: string | React.ReactElement;
  clickCard: () => void;
  FlippedUp: boolean;
}

const OneCard = ({ content, clickCard, FlippedUp }: OneCardProps) => (
  <OneCardWrapper FlippedUp={FlippedUp} onClick={clickCard}>
    {content}
  </OneCardWrapper>
);

const OneCardWrapper = styled.div<{ FlippedUp: boolean }>`
  border: 1px solid lightblue;
  width: 70px;
  height: 70px;
  padding: 10px 10px 10px 10px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
  cursor: pointer;
  background-color: #404040;
  &:hover {
    ${(props) => !props.FlippedUp && `background-color: #707070`}
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    margin: 5px;
  }
`;

export default OneCard;
