import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function LandingCard({ title, subTitle }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="feature-card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{subTitle}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
