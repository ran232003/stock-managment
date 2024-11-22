import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
} from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import HeaderLanding from "./components/HeaderLanding";
import LandingList from "./components/LandingList";
import StepList from "./components/StepList";
import LandingFooter from "./components/LandingFooter";

function LandingPage() {
  return (
    <>
      <HeaderLanding />

      <LandingList />

      <StepList />

      <LandingFooter />
    </>
  );
}

export default LandingPage;
