import "./App.css";
import GamePage from "./pages/GamePage";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScorePage from "./pages/ScorePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/game-page">
            <GamePage />
          </Route>
          <Route path="/score-page">
            <ScorePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
