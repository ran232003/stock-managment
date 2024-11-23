import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import SearchCard from "./SearchCard";

function SearchList(props) {
  const searchResult = useSelector((state) => {
    return state.stock.stockSearch;
  });
  console.log(searchResult);
  return (
    <div className="search-list">
      {searchResult.map((stock) => {
        return <SearchCard stock={stock} />;
      })}
    </div>
  );
}

SearchList.propTypes = {};

export default SearchList;
