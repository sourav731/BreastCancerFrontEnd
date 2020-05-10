import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Github from "../Images/github.svg";
import LinkedIn from "../Images/linkedin.svg";
import Gmail from "../Images/gmail.svg";

function Footer() {
  return (
    <React.Fragment>
      <div
        style={{
          color: "#9c9fa1",
          bottom: "0px",
          backgroundColor: "#3a3e40",
          textAlign: "center",
        }}
      >
        <Container style={{ paddingTop: "1%" }}>
          <Row xs={1} md={3} lg={3}>
            <Col style={{ paddingBottom: "2%" }}>
              <Row style={{ color: "#ffffff" }}>Info</Row>
              <Row>
                <a
                  href="/github"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Model Information
                </a>
              </Row>
              <Row>
                <a
                  href="/github"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Contributions
                </a>
              </Row>
              <Row>
                <a
                  href="/github"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  Copyright
                </a>
              </Row>
            </Col>

            <Col style={{ paddingBottom: "2%" }}>
              <Row style={{ color: "#ffffff" }}>Contact</Row>
              <Row>
                <a
                  href="/github"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  <img
                    src={Github}
                    width="40"
                    height="40"
                    alt="Github"
                    style={{ paddingRight: "28%" }}
                  />
                </a>
                <a
                  href="/github"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  <img
                    src={LinkedIn}
                    width="40"
                    height="40"
                    alt="Linkedin"
                    style={{ paddingRight: "28%" }}
                  />
                </a>
                <a
                  href="/github"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  <img
                    src={Gmail}
                    width="44"
                    height="44"
                    alt="Gmail"
                    style={{ paddingRight: "28%" }}
                  />
                </a>
              </Row>
            </Col>
            <Col style={{ paddingBottom: "2%" }}>
              <Row style={{ color: "#ffffff" }}>Feedback</Row>
              <Row>
                <Form>
                  <Form.Group
                    controlId="exampleForm.ControlTextarea1"
                    style={{ paddingBottom: "1%" }}
                  >
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Write me a feedback..."
                    />
                  </Form.Group>
                  <Button variant="secondary" size="sm" type="submit">
                    Submit
                  </Button>
                </Form>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Footer;
