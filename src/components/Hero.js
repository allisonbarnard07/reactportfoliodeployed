import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center oy-5">
          <Col md={8} sm={12}>
            { props.title && <h1 className="display-1 font-weight-bolder"> {props.title} </h1> }
            { props.subTitle && <h2 className="display-4 font-weight-light"> {props.subTitle} </h2> }
            { props.subSubText && <h3 className="lead font-weight-light"> {props.subSubText} </h3> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
