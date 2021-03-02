import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Search from "./components/Search";
import ProductsFilterContainer from "./components/ProductsFilterContainer";
import Products from "./components/Products";
import TopSlider from "./components/TopSlider";
import Footer from "./components/Footer";

function App() {
  const [change, setChange] = useState(false);
  const changeDetector = () => {
    setChange(!change);
  };
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/magazine">
            <Header />
            <Products />
            <Footer />
          </Route>

          <Route path="/products">
            <Header />
            <Search change={change} changeDetector={changeDetector} />
            <ProductsFilterContainer changeDetector={changeDetector} />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Search change={change} changeDetector={changeDetector} />
            <TopSlider />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
