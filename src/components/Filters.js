import React, { useState } from "react";
import Filter from "./Filter";

function Filters() {
  const [sliderValue, setSliderValue] = useState(0);

  const sliderChangeHandler = (e) => {
    console.log(e.target.value);
    setSliderValue(e.target.value);
  };

  //category == firebase "type"
  const categories = ["sofa", "bed", "table"];
  //colors == firebase "colors"
  const colors = ["blue", "red", "green"];

  //collections == firebase "name"
  const collections = ["Alisonville", "Ceils"];
  return (
    <aside className="filters">
      <div className="filters__overlay">
        <div className="applyField">
          <p className="title">Filters</p>
          <p className="symbol">+</p>
        </div>
      </div>

      <div className="filters__underlay">
        <div className="filters__underlay--title">Filter by</div>

        <Filter filterType={collections} filterTypeName="Collection" />
        <Filter filterType={colors} filterTypeName="Color" />
        <Filter filterType={categories} filterTypeName="Category" />

        <div className="filters__underlay--priceRange">
          <p className="filters__underlay--priceRange-title">Price Range</p>
          <div className="filters__underlay--priceRange-sliders">
            <label htmlFor="min-price">{sliderValue}</label>
            <input
              onChange={sliderChangeHandler}
              className="slider"
              type="range"
              name="min-price"
              min="0"
              max="500"
              gap="10"
              id="min-price"
            />

            <label htmlFor="max-price">100000</label>
            <input
              className="slider"
              type="range"
              name="max-price"
              min="501"
              max="10,000"
              gap="10"
              id="max-price"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Filters;
