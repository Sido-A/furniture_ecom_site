import React, { useState } from "react";

function PriceRange() {
  const [sliderMinValue, setSliderMinValue] = useState(0);
  const [sliderMaxValue, setSliderMaxValue] = useState(5000);

  const sliderChangeHandler = (e) => {
    if (e.target.name === "min-price") {
      setSliderMinValue(parseInt(e.target.value));
    } else {
      setSliderMaxValue(parseInt(e.target.value));
    }
  };

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
            max="1000"
            value={sliderMaxValue}
            id="max-price"
          />
        </div>
      </div>
    </div>
  );
}

export default PriceRange;
