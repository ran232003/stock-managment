import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useApiHelper } from "../../global/apiHelper";
import { MY_FAVE_URL } from "../../URLS";
import StockSearch from "./components/StockSearch";

function DashMyStocks(props) {
  const { handleApiCall } = useApiHelper();
  const [stocks, setStocks] = useState([]);
  const faveArray = useSelector((state) => {
    return state.stock.stock?.myStocks;
  });
  const getFaveStocks = () => {
    handleApiCall(
      "GET",
      MY_FAVE_URL,
      {},
      (data) => {
        setStocks(data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  useEffect(() => {
    getFaveStocks();
  }, []);
  return (
    <div className="dash-search-container">
      <StockSearch stocks={stocks} />
    </div>
  );
}

DashMyStocks.propTypes = {};

export default DashMyStocks;
