import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import BestMatch from "./BestMatch";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";

function Search({ changeDetector, change }) {
  const [{}, dispatch] = useStateValue();
  const [searchFiled, setSearchFiled] = useState("");
  const [preference, setPreference] = useState("bestMatch");
  const history = useHistory();

  useEffect(() => {
    // checking the changes of the filter (checkedItems)
    // on any changes, the preference will be updated on current showing products
    dispatch({
      type: "PREFERENCE",
      selectedPreference: preference,
    });
  }, [change]);

  const preferenceHandler = (e) => {
    setPreference(e.target.value);
    changeDetector();
  };

  const pushToProductOnFocus = () => {
    history.push("/products");
  };

  const searchFieldHandler = (e) => {
    setSearchFiled(e.target.value);
  };

  return (
    <div
      className="sb container container--prl"
      onChange={pushToProductOnFocus}
    >
      <div className="search ">
        <div className="search__field">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            onChange={searchFieldHandler}
            value={searchFiled}
          />
        </div>
      </div>

      <BestMatch preferenceHandler={preferenceHandler} />
    </div>
  );
}

export default Search;
