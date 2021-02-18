import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TopSlider from "./components/TopSlider";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/mag">
            <Header />
            <h1>Mag</h1>
          </Route>

          <Route path="/products">
            <Header />
            <Products />
          </Route>

          <Route path="/">
            <Header />
            <TopSlider />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
