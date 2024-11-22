import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Container, Row } from "react-bootstrap";
import { landingSteps } from "../../../consts";
import StepCard from "./StepCard";

function StepList(props) {
  return (
    <section id="how-it-works" className="py-5">
      <Container>
        <h2 className="text-center mb-4">How It Works</h2>
        <Row className="text-center">
          {landingSteps.map((item) => {
            return <StepCard title={item.title} subTitle={item.subTitle} />;
          })}
        </Row>
      </Container>
    </section>
  );
}

StepList.propTypes = {};

export default StepList;
