import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Results from './pages/Results';

export default function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/submit" component={Submit} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </div>
    </Router>
  );
};
  
