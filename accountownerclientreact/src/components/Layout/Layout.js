import React from "react";
import { Container, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";

const Layout = props => {
  return (
    <Container>
      <Row>
          <Navigation />
      </Row>
      <main>{props.children}</main>
    </Container>
  );
};

export default Layout;
