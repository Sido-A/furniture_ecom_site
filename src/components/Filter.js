import React, { useState } from "react";

function Filter(props) {
  const [typeToggler, setTypeToggler] = useState(false);

  const { filterType, filterTypeName, isMobileFilterMenuOpen } = props;

  const filterToggle = () => {
    setTypeToggler(!typeToggler);
  };

  return (
    <div className="filter">
      <div onClick={filterToggle} className="filter__applyField applyField">
        <p className="filter__applyField--title">{filterTypeName}</p>
        <p
          className={`filter__applyField--symbol symbol ${
            typeToggler ? "openFilter" : "closeFilter"
          } ${isMobileFilterMenuOpen ? "" : "mobileClose"}`}
        >
          v
        </p>
      </div>
      <div
        className={`filter__inputContainer ${
          typeToggler ? "openFilter" : "closeFilter"
        } ${isMobileFilterMenuOpen ? "" : "mobileClose"}`}
      >
        {filterType?.map((filter) => (
          <label htmlFor={filter}>
            <input
              data-filter-type={filterTypeName}
              name={filter}
              id={filter}
              type="checkbox"
            />
            {filter}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filter;
