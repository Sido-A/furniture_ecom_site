import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import db from "./firebase";

import Header from "./components/Header";
import Search from "./components/Search";
import ProductsFilterContainer from "./components/ProductsFilterContainer";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Orders from "./components/Orders";
import TopSlider from "./components/TopSlider";
import Footer from "./components/Footer";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ productDetail }, dispatch] = useStateValue();
  const [change, setChange] = useState(false);
  const changeDetector = () => {
    setChange(!change);
  };

  useEffect(() => {
    db.collection("furnitures")
      .get()
      .then((snap) => {
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch({
          type: "SET_PRODUCTS",
          products: data,
        });
      })
      .catch((err) => console.assert(err));
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />

            <Footer />
          </Route>

          {productDetail.length !== 0 ? (
            <Route path={`/magazine/${productDetail.id}`}>
              <Header />
              <ProductDetail productDetail={productDetail} />
              <Footer />
            </Route>
          ) : null}
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
