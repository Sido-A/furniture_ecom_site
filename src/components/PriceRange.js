import React from "react";

function PriceRange({ sliderChangeHandler, sliderMinValue, sliderMaxValue }) {
  return (
    <div className="priceRange">
      <p className="priceRange__title">Price Range</p>
      <div className="priceRange__sliders">
        <div className="priceRange__slider">
          <p className="minPrice">{sliderMinValue}</p>
          <input
            onChange={sliderChangeHandler}
            className="slider minPrice"
            type="range"
            name="min-price"
            min="0"
            max="500"
            value={sliderMinValue}
            id="min-price"
          />
        </div>

        <div className="priceRange__slider">
          <p className="maxPrice">
            {sliderMaxValue}
            {sliderMaxValue === 5000 ? "+" : null}
          </p>
          <input
            onChange={sliderChangeHandler}
            className="slider maxPrice"
            type="range"
            name="max-price"
            min="501"
            max="5000"
            value={sliderMaxValue}
            id="max-price"
          />
        </div>
      </div>
    </div>
  );
}

export default PriceRange;
