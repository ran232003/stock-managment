import React from "react";
import PropTypes from "prop-types";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingContact(props) {
  return (
    <section id="contact" className="cta-section text-white text-center py-5">
      <Container>
        <h2>Ready to Get Started?</h2>
        <p>
          Join thousands of businesses using StockMaster to simplify their
          investments managment.
        </p>
        <Button as={Link} to={"/auth/signin"} variant="light" size="lg">
          Sign Up Today
        </Button>
      </Container>
    </section>
  );
}

LandingContact.propTypes = {};

export default LandingContact;
