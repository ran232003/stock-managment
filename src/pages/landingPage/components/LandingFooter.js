import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

function LandingFooter(props) {
  return (
    <footer className="py-3 bg-dark text-center text-white">
      <Container>
        <p>
          &copy; {new Date().getFullYear()} StockMaster. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

LandingFooter.propTypes = {};

export default LandingFooter;
