import React from "react";
import "./App.css";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="app-title">
          <h1>Photo Gallery App</h1>
        </div>
        <div className="link">
        <Link to="/">HOME</Link>
        <Link to="/gallery">GALLERY</Link>
        </div>
        
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
