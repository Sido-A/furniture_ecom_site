import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import db from "./firebase";

import Header from "./components/Header";
import Search from "./components/Search";
import ProductsFilterContainer from "./components/ProductsFilterContainer";
import Products from "./components/Products";
import TopSlider from "./components/TopSlider";
import Footer from "./components/Footer";

function App() {
  const [furnitureData, setFurnitureData] = useState([]);

  useEffect(() => {
    db.collection("furnitures")
      .get()
      .then((snap) => {
        const data = snap.docs.map((doc) => doc.data());

        setFurnitureData(data);
      });
  }, []);

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
            <Search />
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
