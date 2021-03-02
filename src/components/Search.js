import React, { useState } from "react";
import { useHistory } from "react-router";

import BestMatch from "./BestMatch";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";

function Search() {
  const [{}, dispatch] = useStateValue();
  const [searchFiled, setSearchFiled] = useState("");
  const history = useHistory();

  const preferenceHandler = (e) => {
    dispatch({
      type: "PREFERENCE",
      selectedPreference: e.target.value,
    });
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
