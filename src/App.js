import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ProductsFilterContainer from "./components/ProductsFilterContainer";
import Filter from "./components/Filters";
import TopSlider from "./components/TopSlider";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/mag">
            <Header />
            <h1>Mag</h1>
            <Footer />
          </Route>

          <Route path="/products">
            <Header />
            <Search />
            {/* <Filter />
            <Products /> */}
            <ProductsFilterContainer />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Search />
            <TopSlider />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
