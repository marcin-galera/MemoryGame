import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export const ButtonStyled = styled.button`
  font-size: 24px;
  color: white;
  background-color: #404040;
  padding: 6px 16px;
  cursor: pointer;
  border: 1px solid lightblue;
  margin: 20px;
  @media (max-width: 768px) {
    margin: 10px;
    font-size: 14px;
  }
  &:hover {
    background-color: #707070;
  }
`;

export default Button;
