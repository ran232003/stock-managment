import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./StockPage.css";
import { Card, Col, Row } from "react-bootstrap";
import { stockPageValues } from "../../consts";
import { useDispatch, useSelector } from "react-redux";
import { useApiHelper } from "../../global/apiHelper";
import { useParams } from "react-router-dom";
import { GET_STOCK_URL, MY_STOCKS_URL } from "../../URLS";
import { FaHeart } from "react-icons/fa"; // Import heart icon from React Icons

function StockPage(props) {
  let { symbol } = useParams();
  // const test = useSelector((state) => {
  //   return state.stock.myStocks;
  // });
  const isFave = useSelector((state) => {
    return state.stock?.myStocks.filter((sym) => {
      return sym === symbol;
    });
  });

  const [stockPageValues, setStockPageValues] = useState([]);
  const dispatch = useDispatch();
  const { handleApiCall } = useApiHelper();
  const [isFavorite, setIsFavorite] = useState(!!isFave); // State to track heart icon color

  const toggleFavorite = () => {
    let action = !isFavorite; // Toggle heart state
    handleApiCall(
      "POST",
      MY_STOCKS_URL,
      { symbol: symbol, action: action },
      (data) => {
        setIsFavorite((prev) => !prev); // Handle API response
      },
      (error) => {
        console.log(error);
      }
    );
  };

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }

  const getStock = () => {
    const url = GET_STOCK_URL + symbol;
    handleApiCall(
      "GET",
      url,
      {},
      (data) => {
        setStockPageValues(data.data);
        // Handle API response
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getStock();
  }, []); // Run when symbol changes
  if (stockPageValues.length === 0) {
    return;
  }
  return (
    <div className="stock-page container my-5">
      <Card className="shadow-lg">
        <Card.Header className="bg-primary text-white text-center d-flex align-items-center justify-content-between">
          <h3 className="mb-0">
            {stockPageValues[0].name}{" "}
            <span className="text-muted">({stockPageValues[0].symbol})</span>
          </h3>
          {/* Heart Icon */}
          <FaHeart
            className={`heart-icon ${isFavorite ? "favorite" : ""}`}
            onClick={toggleFavorite}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          />
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} className="mb-3">
              <p>
                <strong>Current Price:</strong> $
                {stockPageValues[0].price.toFixed(2)}
              </p>
            </Col>
            <Col md={6} className="mb-3">
              <p>
                <strong>Change:</strong> {stockPageValues[0].change.toFixed(2)}{" "}
                ({stockPageValues[0].changesPercentage.toFixed(2)}%)
              </p>
            </Col>
            <Col md={6} className="mb-3">
              <p>
                <strong>Previous Close:</strong> $
                {stockPageValues[0].previousClose.toFixed(2)}
              </p>
            </Col>
            <Col md={6} className="mb-3">
              <p>
                <strong>Open:</strong> ${stockPageValues[0].open.toFixed(2)}
              </p>
            </Col>
            <Col md={6} className="mb-3">
              <p>
                <strong>Day Low:</strong> $
                {stockPageValues[0].dayLow.toFixed(2)}
              </p>
            </Col>
            <Col md={6} className="mb-3">
              <p>
                <strong>Day High:</strong> $
                {stockPageValues[0].dayHigh.toFixed(2)}
              </p>
            </Col>
            <Col md={6} className="mb-3">
              <p>
                <strong>Year Low:</strong> $
                {stockPageValues[0].yearLow.toFixed(2)}
              </p>
            </Col>
            <Col md={6} className="mb-3">
              <p>
                <strong>Year High:</strong> $
                {stockPageValues[0].yearHigh.toFixed(2)}
              </p>
            </Col>
            <Col md={12} className="text-center mt-4">
              <p>
                <strong>Last Updated:</strong>{" "}
                {formatDate(stockPageValues[0].timestamp)}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

StockPage.propTypes = {};

export default StockPage;
