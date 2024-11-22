import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderLanding() {
  return (
    <header className="hero-section text-center text-white">
      <Container>
        <h1 className="hero-title">Simplify Your Stock Management</h1>
        <p className="hero-subtitle">
          Track your portfolio, analyze market trends, and make smarter
          financial decisions with our powerful stock management platform
        </p>
        <Button
          as={Link}
          to={"/auth/login"}
          variant="primary"
          size="lg"
          className="me-2"
        >
          Get Started
        </Button>
      </Container>
    </header>
  );
}
