import React, { useState, useEffect } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import Filter from "./Filter";
import PriceRange from "./PriceRange";
import { useStateValue } from "../StateProvider";

function Filters({ changeDetector }) {
  const [{ initialProducts }, dispatch] = useStateValue();
  const [sliderMinValue, setSliderMinValue] = useState(0);
  const [sliderMaxValue, setSliderMaxValue] = useState(5000);
  const [isMobileFilterMenuOpen, setIsMobileFilterMenuOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    collection: [],
    color: [],
    category: [],
  });

  // set data each time checkbox or price range changes
  useEffect(() => {
    if (
      checkedItems.collection.length === 0 &&
      checkedItems.color.length === 0 &&
      checkedItems.category.length === 0
    ) {
      dispatch({
        type: "REMOVE_FILTER",
        "min-price": sliderMinValue,
        "max-price": sliderMaxValue,
      });
    } else {
      dispatch({
        type: "ADD_FILTER",
        checkedItems,
        "min-price": sliderMinValue,
        "max-price": sliderMaxValue,
      });
    }
    changeDetector();
  }, [checkedItems, sliderMinValue, sliderMaxValue]);

  //
  const checkedItem = (e) => {
    const filterType = e.target.getAttribute("data-filter-type");

    if (e.target.checked === true) {
      if (e.target.type === "checkbox") {
        setCheckedItems({
          ...checkedItems,
          [filterType]: [...checkedItems[filterType], e.target.name],
        });
      }
    } else {
      if (e.target.type === "checkbox") {
        const unTick = checkedItems[filterType].filter((item) =>
          item !== e.target.name ? item : null
        );

        setCheckedItems({
          ...checkedItems,
          [filterType]: unTick,
        });
      }
    }
  };

  const sliderChangeHandler = (e) => {
    if (e.target.name === "min-price") {
      setSliderMinValue(parseInt(e.target.value));
    } else {
      setSliderMaxValue(parseInt(e.target.value));
    }
  };

  const filterToggle = () => {
    // default value of isMobileFilterMenuOpen is 'false'
    setIsMobileFilterMenuOpen(!isMobileFilterMenuOpen);
  };

  //colors == firebase "colors"
  const productsColor = initialProducts.map((data) => {
    return data.colors;
  });

  //category == firebase "type"
  const productsCategory = initialProducts.map((data) => {
    return data.type;
  });

  //collections == firebase "name"
  const productsCollection = initialProducts.map((data) => {
    return data.name;
  });

  const concatColors = productsColor.reduce((acc, crr) => acc.concat(crr), []);
  // new Set automatically delete duplicates
  const colors = [...new Set(concatColors)];
  const categories = [...new Set(productsCategory)];
  const collections = [...new Set(productsCollection)];

  return (
    <aside className="filters" onChange={checkedItem}>
      <div className="filters__overlay">
        <div onClick={filterToggle} className={`applyField `}>
          <p className="title">Filters</p>
          <p className={`symbol `}>+</p>
        </div>
      </div>

      <div
        className={`filters__underlay ${
          isMobileFilterMenuOpen ? "mobileOpen" : "mobileClose"
        }`}
      >
        <div className="filters__underlay--container">
          <div className="filters__underlay--title">
            <p>Filter by</p>

            {isMobileFilterMenuOpen ? (
              <div
                onClick={filterToggle}
                className={`${isMobileFilterMenuOpen ? "apply" : "plus"} `}
              >
                Apply
              </div>
            ) : null}
          </div>

          <Filter
            filterType={collections}
            filterTypeName="collection"
            isMobileFilterMenuOpen={isMobileFilterMenuOpen}
          />
          <Filter
            filterType={colors}
            filterTypeName="color"
            isMobileFilterMenuOpen={isMobileFilterMenuOpen}
          />
          <Filter
            filterType={categories}
            filterTypeName="category"
            isMobileFilterMenuOpen={isMobileFilterMenuOpen}
          />

          <PriceRange
            sliderChangeHandler={sliderChangeHandler}
            sliderMinValue={sliderMinValue}
            sliderMaxValue={sliderMaxValue}
          />
        </div>
      </div>
    </aside>
  );
}

export default Filters;
