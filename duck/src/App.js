import './App.css';
import FrontPage from "./FrontPage";
import Forms from "./Forms";
import Display from "./Display";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage}></Route>
          <Route exact path="/form" component={Forms}></Route>
          <Route exact path="/display" component={Display}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
