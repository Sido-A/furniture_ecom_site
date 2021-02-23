import React from "react";

function BestMatch() {
  return (
    <div className="bestMatch">
      <div className="bestMatch__selectField">
        <select>
          <option value="#">Best match</option>
          <option value="#">Price low to high</option>
          <option value="#">Price high to low</option>
        </select>
      </div>
    </div>
  );
}

export default BestMatch;
