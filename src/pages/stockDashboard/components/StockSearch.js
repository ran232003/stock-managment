import React from "react";
import PropTypes from "prop-types";
import StockCard from "./StockCard";

function StockSearch({ stocks }) {
  console.log(stocks, "stocks");
  return (
    <div className="search-list">
      {stocks.map((stock) => {
        return <StockCard stock={stock} />;
      })}
    </div>
  );
}

StockSearch.propTypes = {};

export default StockSearch;
