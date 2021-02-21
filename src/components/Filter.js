import React, { useState } from "react";

function Filter(props) {
  const [toggler, setToggler] = useState(false);

  const { filterType, filterTypeName } = props;

  const filterToggle = (e) => {
    setToggler(!toggler);
  };

  return (
    <div className="filter">
      <div onClick={filterToggle} className="filter__applyField applyField">
        <p className="filter__applyField--title">{filterTypeName}</p>
        <p
          className={`filter__applyField--symbol symbol ${
            toggler ? "open" : "close"
          }`}
        >
          v
        </p>
      </div>
      <div className={`filter__inputContainer ${toggler ? "open" : "close"}`}>
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
