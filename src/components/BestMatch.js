import React from "react";

function BestMatch({ preferenceHandler }) {
  return (
    <div className="bestMatch">
      <div className="bestMatch__selectField">
        <select onChange={preferenceHandler}>
          <option value="bestMatch">Best match</option>
          <option value="priceLowHigh">Price low to high</option>
          <option value="priceHighLow">Price high to low</option>
        </select>
      </div>
    </div>
  );
}

export default BestMatch;
