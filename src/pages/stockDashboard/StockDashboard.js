import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DashSidebar from "./components/DashSidebar";
import "./StockDashboard.css";
import { useSelector } from "react-redux";
import DashSearch from "./DashSearch";
import DashMyStocks from "./DashMyStocks";
import { useLocation } from "react-router-dom";
function StockDashboard(props) {
  const [tab, setTab] = useState("");
  //   const user = useSelector((state) => {
  //     return state.user.user;
  //   });
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    } else {
      setTab(""); // default to empty string if no tab is specified
    }
  }, [location.search]);

  return (
    <div className="main-dash">
      <DashSidebar setTab={setTab} />
      {tab === "search" || tab === "" ? <DashSearch /> : null}
      {tab === "my-stocks" ? <DashMyStocks /> : null}
    </div>
  );
}

export default StockDashboard;
