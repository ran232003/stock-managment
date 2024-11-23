import React from "react";
import PropTypes from "prop-types";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";

function DashSidebar() {
  return (
    <Sidebar className="sidebar my-sidebar">
      <Menu>
        <MenuItem
          component={<Link to="/dashboard?tab=search" />}
          icon={<FaSearch />}
        >
          Search
        </MenuItem>
        <MenuItem
          component={<Link to="/dashboard?tab=my-stocks" />}
          icon={<AiOutlineStock />}
        >
          My Stocks
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

DashSidebar.propTypes = {};

export default DashSidebar;
