import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

function StepCard({ title, subTitle }) {
  return (
    <Col md={4} className="mb-4">
      <h4>{title}</h4>
      <p>{subTitle}</p>
    </Col>
  );
}

StepCard.propTypes = {};

export default StepCard;
