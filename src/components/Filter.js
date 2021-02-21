import React from "react";

function Filter() {
  return (
    <aside className="filters">
      <p>filter by</p>
      <select>
        <option value="collection">Collection</option>
      </select>

      <select>
        <option value="color">Color</option>
      </select>
      <select>
        <option value="category">Category</option>
      </select>

      <div className="priceRange">
        <p>price range</p>
        <label htmlFor="min">0</label>
        <input type="radio" name="min" min="0" max="500" value="0" id="min" />
        <label htmlFor="max">10,000+</label>
        <input
          type="radio"
          name="max"
          min="501"
          max="10,000"
          value="10,000"
          id="max"
        />
      </div>
    </aside>
  );
}

export default Filter;
