import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export interface MainPageProps {
    
}
 
const MainPage: MainPageProps = () => {
    return (
      <div>
        <H1>Memory Game</H1>
        <H2>Try find all pairs</H2>
        <Link to="/game-page">
          <Button>Start</Button>
        </Link>
      </div>
    );
}
 
const H1 = styled.h1``;
const H2 = styled.h2``;
const Button = styled.button``;

export default MainPage;