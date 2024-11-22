import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { landingCards } from "../../../consts";
import LandingCard from "./LandingCard";

function LandingList(props) {
  return (
    <section id="features" className="py-5 bg-light">
      <Container>
        <Row>
          <h2 className="text-center mb-4">Features</h2>
          {landingCards.map((item) => {
            return <LandingCard title={item.title} subTitle={item.subTitle} />;
          })}
        </Row>
      </Container>
    </section>
  );
}

export default LandingList;
