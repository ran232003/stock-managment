import React, { useState, useCallback } from "react";
import { Form, InputGroup } from "react-bootstrap";
import _ from "lodash"; // Import lodash for debounce
import SearchList from "./components/SearchList";
import { SEARCH_STOKE_URL } from "../../URLS";
import { useApiHelper } from "../../global/apiHelper";
import { useDispatch } from "react-redux";
import { stockAction } from "../../store/stockSlice";
import { data } from "../../consts";

function DashSearch(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { handleApiCall } = useApiHelper();

  // Debounced function for API call
  const debouncedSearch = useCallback(
    _.debounce((query) => {
      if (query) {
        const params = new URLSearchParams({
          query,
          limit: 15,
        });
        let url = SEARCH_STOKE_URL + params;
        // handleApiCall(
        //   "GET",
        //   url,
        //   {},
        //   (data) => {
        //     dispatch(stockAction.setStockSearch(data.data));
        //     //navigate("/");
        //   },
        //   (error) => {
        //     console.log(error);
        //   }
        // );
        dispatch(stockAction.setStockSearch(data));
      }
    }, 500),
    []
  );

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value); // Call the debounced function
  };

  return (
    <div className="dash-search-container ">
      <div className="dash-search">
        <InputGroup className="input-search">
          <Form.Control
            type="text"
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={handleInputChange}
            className="shadow-sm"
          />
        </InputGroup>
      </div>
      <SearchList />
    </div>
  );
}

export default DashSearch;
