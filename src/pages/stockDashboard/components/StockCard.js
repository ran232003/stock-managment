import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import "../StockDashboard.css";
import { Link } from "react-router-dom";
function StockCard({ stock }) {
  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }
  const {
    symbol,
    name,
    price,
    exchange,
    change,
    timestamp,
    changesPercentage,
  } = stock[0];
  return (
    <Card
      as={Link}
      to={`/stockPage/${symbol}`}
      className="shadow-lg stock-card"
    >
      <Card.Header className="text-center bg-primary text-white">
        <h5>
          {name} <span className="text-muted">({symbol})</span>
        </h5>
      </Card.Header>
      <Card.Body>
        <p>
          <strong>Current Price:</strong> {price.toFixed(2)}
        </p>
        <p>
          <strong>Stock Exchange:</strong> {exchange}
        </p>
        <p>
          <strong>Change:</strong> {change.toFixed(2)}(
          {changesPercentage.toFixed(2)}%)
        </p>
        <p>
          <strong>Last Updated:</strong> {formatDate(timestamp)}
        </p>
      </Card.Body>
    </Card>
  );
}

StockCard.propTypes = {};

export default StockCard;
