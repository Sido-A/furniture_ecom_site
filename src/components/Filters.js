import React, { useState } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import Filter from "./Filter";

function Filters() {
  const [sliderValue, setSliderValue] = useState(0);
  const [mobileFilterMenuToggler, setMobileFilterMenuToggler] = useState(false);

  const sliderChangeHandler = (e) => {
    console.log(e.target.value);
    setSliderValue(e.target.value);
  };

  const filterToggle = () => {
    setMobileFilterMenuToggler(!mobileFilterMenuToggler);
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
        <div onClick={filterToggle} className={`applyField `}>
          <p className="title">Filters</p>
          <p className={`symbol ${mobileFilterMenuToggler ? "open" : "close"}`}>
            +
          </p>
        </div>
      </div>

      <div
        className={`filters__underlay ${
          mobileFilterMenuToggler ? "open" : "close"
        }`}
      >
        <div className="filters__underlay--container">
          <div className="filters__underlay--title">
            <p>Filter by</p>

            {mobileFilterMenuToggler ? (
              <RemoveIcon
                onClick={filterToggle}
                className={`${mobileFilterMenuToggler ? "minus" : "plus"} `}
              />
            ) : null}
          </div>

          <Filter
            filterType={collections}
            filterTypeName="Collection"
            mobileFilterMenuToggler={mobileFilterMenuToggler}
          />
          <Filter
            filterType={colors}
            filterTypeName="Color"
            mobileFilterMenuToggler={mobileFilterMenuToggler}
          />
          <Filter
            filterType={categories}
            filterTypeName="Category"
            mobileFilterMenuToggler={mobileFilterMenuToggler}
          />

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
      </div>
    </aside>
  );
}

export default Filters;
