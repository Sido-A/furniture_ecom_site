import React, { useState } from "react";

function Filter(props) {
  const [typeToggler, setTypeToggler] = useState(false);

  const { filterType, filterTypeName, mobileFilterMenuToggler } = props;

  const filterToggle = (e) => {
    setTypeToggler(!typeToggler);
  };

  return (
    <div className="filter">
      <div onClick={filterToggle} className="filter__applyField applyField">
        <p className="filter__applyField--title">{filterTypeName}</p>
        <p
          className={`filter__applyField--symbol symbol ${
            typeToggler ? "open" : "close"
          } ${!mobileFilterMenuToggler ? "mobileClose" : null}`}
        >
          v
        </p>
      </div>
      <div
        className={`filter__inputContainer ${typeToggler ? "open" : "close"} ${
          !mobileFilterMenuToggler ? "mobileClose" : null
        }`}
      >
        {filterType?.map((filter) => (
          <label htmlFor={filter}>
            <input name={filter} id={filter} type="checkbox" />
            {filter}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filter;
