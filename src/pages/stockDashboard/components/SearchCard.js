import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchCard({ stock }) {
  const { symbol, name, currency, stockExchange, exchangeShortName } = stock;

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
          <strong>Currency:</strong> {currency}
        </p>
        <p>
          <strong>Stock Exchange:</strong> {stockExchange}
        </p>
        <p>
          <strong>Exchange Short Name:</strong> {exchangeShortName}
        </p>
      </Card.Body>
    </Card>
  );
}

SearchCard.propTypes = {};

export default SearchCard;
