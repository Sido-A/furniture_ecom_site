import React, { useState, useEffect } from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import Filter from "./Filter";
import PriceRange from "./PriceRange";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

function Filters() {
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderMaxValue, setSliderMaxValue] = useState(5000);
  const [mobileFilterMenuToggler, setMobileFilterMenuToggler] = useState(false);
  const [furnitureData, setFurnitureData] = useState([]);
  const [change, setChange] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    collection: [],
    color: [],
    category: [],
  });
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("furnitures")
      .get()
      .then((snap) => {
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFurnitureData(data);
      });
  }, []);

  useEffect(() => {
    db.collection("furnitures")
      .get()
      .then((snap) => {
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFurnitureData(data);
        filterDispatchHandler(data);
      })
      .catch((err) => console.assert(err));

    const filterDispatchHandler = (data) => {
      if (
        checkedItems.collection.length === 0 &&
        checkedItems.color.length === 0 &&
        checkedItems.category.length === 0
      ) {
        dispatch({
          type: "REMOVE_FILTER",
          products: data,
        });
      } else {
        dispatch({
          type: "ADD_FILTER",
          checkedItems,
          products: furnitureData,
        });
      }
    };
  }, [checkedItems]);

  const changeDetector = (e) => {
    const filterType = e.target.getAttribute("data-filter-type");

    if (e.target.checked === true) {
      setChange(true);

      setCheckedItems({
        ...checkedItems,
        [filterType]: [...checkedItems[filterType], e.target.name],
      });
    } else {
      const unTick = checkedItems[filterType].filter((item) =>
        item !== e.target.name ? item : null
      );
      setChange(false);

      setCheckedItems({
        ...checkedItems,
        [filterType]: unTick,
      });
    }
  };

  //colors == firebase "colors"
  const productsColor = furnitureData.map((data) => {
    return data.colors;
  });

  //category == firebase "type"
  const productsCategory = furnitureData.map((data) => {
    return data.type;
  });

  //collections == firebase "name"
  const productsCollection = furnitureData.map((data) => {
    return data.name;
  });

  const concatColors = productsColor.reduce((acc, crr) => acc.concat(crr), []);
  // new Set automatically delete duplicates
  const colors = [...new Set(concatColors)];
  const categories = [...new Set(productsCategory)];
  const collections = [...new Set(productsCollection)];

  const sliderChangeHandler = (e) => {
    if (e.target.name === "min-price") {
      setSliderValue(parseInt(e.target.value));
    } else {
      setSliderMaxValue(parseInt(e.target.value));
    }
  };

  const filterToggle = () => {
    setMobileFilterMenuToggler(!mobileFilterMenuToggler);
  };

  //Best match filter
  //==>alphabet order
  //==>price low -> high
  //==>price high -> low

  return (
    <aside className="filters" onChange={changeDetector}>
      <div className="filters__overlay">
        <div onClick={filterToggle} className={`applyField `}>
          <p className="title">Filters</p>
          <p className={`symbol `}>+</p>
        </div>
      </div>

      <div
        className={`filters__underlay ${
          mobileFilterMenuToggler ? "mobileOpen" : "mobileClose"
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
            filterTypeName="collection"
            mobileFilterMenuToggler={mobileFilterMenuToggler}
          />
          <Filter
            filterType={colors}
            filterTypeName="color"
            mobileFilterMenuToggler={mobileFilterMenuToggler}
          />
          <Filter
            filterType={categories}
            filterTypeName="category"
            mobileFilterMenuToggler={mobileFilterMenuToggler}
          />

          <PriceRange />
        </div>
      </div>
    </aside>
  );
}

export default Filters;
