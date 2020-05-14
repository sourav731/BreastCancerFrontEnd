import React from "react";
import Zoom from "react-reveal/Zoom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Myth from "../Images/myth.svg";
import Girl from "../Images/bcancer.svg";
import Doctor from "../Images/doctor.svg";
import Fear from "../Images/fear.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <div
        style={{
          overflowX: "hidden",
          margin: "3%",
          borderTop: "1px solid #d0d2d6",
          borderLeft: "1px solid #d0d2d6",
          borderRight: "1px solid #d0d2d6",
          borderBottom: "4px solid #9d9fa1",
          borderRadius: "6px",
        }}
      >
        <Row xs="1" md="2" xl="2">
          <Col style={{ textAlign: "center" }}>
            <img
              src={Girl}
              width="80%"
              height="80%"
              alt="girlImage"
              style={{ padding: "7% 0% 0% 2%" }}
            />
          </Col>
          <Col>
            <div style={{ padding: "7% 5% 1% 5%" }}>
              <Zoom>
                <h2
                  className="text-muted"
                  style={{ textDecoration: "underline" }}
                >
                  Understanding Breast Cancer
                </h2>
              </Zoom>
              <Zoom>
                <p className="text-muted">
                  If you or a loved one has been diagnosed with breast cancer,
                  it's important to understand some basics: What is breast
                  cancer and how does it happen?
                </p>
                <p className="text-muted">
                  In this section, you can learn about how breast cancer
                  develops, how many people get breast cancer, and what factors
                  can increase risk for getting breast cancer. You also can
                  learn more about signs and symptoms to watch for and how to
                  manage any fears you may have about breast cancer.
                </p>
              </Zoom>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          overflowX: "hidden",
          margin: "3%",
          borderTop: "1px solid #d0d2d6",
          borderLeft: "1px solid #d0d2d6",
          borderRight: "1px solid #d0d2d6",
          borderBottom: "4px solid #9d9fa1",
          borderRadius: "6px",
        }}
      >
        <Row xs="1" md="2" xl="2">
          <Col>
            <div style={{ padding: "2% 5% 1% 5%" }}>
              <Zoom>
                <h2
                  className="text-muted"
                  style={{ textDecoration: "underline" }}
                >
                  Breast Cancer Risk and Risk Factors
                </h2>

                <p className="text-muted">
                  You may be familiar with the statistic that says 1 in 8 women
                  will develop invasive breast cancer. Many people misinterpret
                  this to mean that, on any given day, they and the women they
                  know have a 1-in-8 risk of developing the disease. That’s
                  simply not true.
                </p>
                <p className="text-muted">
                  In reality, about 1 in 8 women in the United States — 12%, or
                  about 12 out of every 100 — can expect to develop breast
                  cancer over the course of an entire lifetime. In the U.S., an
                  average lifetime is about 80 years. So, it’s more accurate to
                  say that 1 in 8 women in the U.S. who reach the age of 80 can
                  expect to develop breast cancer. In each decade of life, the
                  risk of getting breast cancer is actually lower than 12% for
                  most women.
                </p>
                <p className="text-muted">
                  Even though studies have found that women have a 12% lifetime
                  risk of developing breast cancer, your individual risk may be
                  higher or lower than that. Individual risk is affected by many
                  different factors, such as family history, reproductive
                  history, lifestyle, environment, and others.
                </p>
                <p className="text-muted">
                  For more information on understanding breast cancer risk and
                  risk factors, visit the Lower Your Risk section of
                  Breastcancer.org.
                </p>
              </Zoom>
            </div>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <Zoom>
              <img
                src={Doctor}
                width="80%"
                height="80%"
                alt="girlImage"
                style={{ padding: "20% 0% 0% 2%" }}
              />
            </Zoom>
          </Col>
        </Row>
      </div>

      <div
        style={{
          overflowX: "hidden",
          margin: "3%",
          borderTop: "1px solid #d0d2d6",
          borderLeft: "1px solid #d0d2d6",
          borderRight: "1px solid #d0d2d6",
          borderBottom: "4px solid #9d9fa1",
          borderRadius: "6px",
        }}
      >
        <Row xs="1" md="2" xl="2">
          <Col style={{ textAlign: "center" }}>
            <Zoom>
              <img
                src={Myth}
                width="80%"
                height="80%"
                alt="girlImage"
                style={{ padding: "10% 0% 0% 2%" }}
              />
            </Zoom>
          </Col>
          <Col>
            <div style={{ padding: "7% 5% 1% 5%" }}>
              <Zoom>
                <h2
                  className="text-muted"
                  style={{ textDecoration: "underline" }}
                >
                  Breast Cancer Myths vs. Facts
                </h2>
              </Zoom>
              <Zoom>
                <p className="text-muted">
                  Unless people experience breast cancer in their own lives, or
                  they’re close to someone who does, they might not be able to
                  separate myth from fact when it comes to this disease: who
                  gets it and why, for example, or what treatment involves.
                  True, breast cancer is one of the better-known and
                  more-talked-about cancers, but there are still so many
                  misconceptions out there.
                </p>
                <p className="text-muted">
                  Here at Breastcancer.org, we run into some of the same myths
                  year after year. Many of them are included in the list below.
                  We also polled our online Community to ask them what they find
                  to be the most persistent myths about breast cancer that need
                  correcting. In fact, many of our respondents admitted that
                  they too bought into these myths until their own diagnosis!
                </p>
              </Zoom>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          overflowX: "hidden",
          margin: "3%",
          borderTop: "1px solid #d0d2d6",
          borderLeft: "1px solid #d0d2d6",
          borderRight: "1px solid #d0d2d6",
          borderBottom: "4px solid #9d9fa1",
          borderRadius: "6px",
        }}
      >
        <Row xs="1" md="2" xl="2">
          <Col>
            <div style={{ padding: "2% 5% 1% 5%" }}>
              <Zoom>
                <h2
                  className="text-muted"
                  style={{ textDecoration: "underline" }}
                >
                  Managing Breast Cancer Fears
                </h2>

                <p className="text-muted">
                  So many women you know may have had breast cancer — friends
                  and neighbors, coworkers, relatives. It seems as if every time
                  you turn around, breast cancer is being talked about in the
                  newspaper or on TV. You may be fearful of developing breast
                  cancer for the first time or of receiving a diagnosis after a
                  mammogram or other testing. If you’ve had breast cancer, you
                  may be fearful of a possible recurrence or even of the
                  possibility that breast cancer could take your life.
                </p>
                <p className="text-muted">
                  The fear of breast cancer is unlike any other — psychologists
                  and other experts agree on that. The fear can take many
                  different forms, depending upon where you are in the breast
                  cancer experience. Understand that many of your fears are
                  shared by others. While fears are normal, they are
                  uncomfortable to live with. We'll help you figure out how you
                  can manage fear so you can focus on living a happy and healthy
                  life.
                </p>
              </Zoom>
            </div>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <Zoom>
              <img
                src={Fear}
                width="80%"
                height="80%"
                alt="girlImage"
                style={{ padding: "15% 0% 0% 2%" }}
              />
            </Zoom>
          </Col>
        </Row>
      </div>

      <div
        style={{
          overflowX: "hidden",
          margin: "3%",
          padding: "2% 4% 3% 3%",
          borderTop: "1px solid #d0d2d6",
          borderLeft: "1px solid #d0d2d6",
          borderRight: "1px solid #d0d2d6",
          borderBottom: "4px solid #9d9fa1",
          borderRadius: "6px",
        }}
      >
        <Zoom>
          <h2
            className="text-muted"
            style={{ textAlign: "center", textDecoration: "underline" }}
          >
            Know more
          </h2>
          <Row xs={1} sm={2} md={2} xl={4}>
            <Col style={{ marginBottom: "2%" }}>
              <Card
                style={{ width: "18rem", borderBottom: "4px solid #7eb8f2" }}
              >
                <Card.Body className="text-muted">
                  <Card.Title>Cancer Related Fears</Card.Title>
                  <Card.Text>
                    Are you worried about a lump or other symptom you think
                    might be breast cancer? Find out ..
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ marginBottom: "2%" }}>
              <Card
                style={{ width: "18rem", borderBottom: "4px solid #7eb8f2" }}
              >
                <Card.Body className="text-muted">
                  <Card.Title>Stages of Fear</Card.Title>
                  <Card.Text>
                    Most people go through several stages of fear when they are
                    first diagnosed. The stages ..
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ marginBottom: "2%" }}>
              <Card
                style={{ width: "18rem", borderBottom: "4px solid #7eb8f2" }}
              >
                <Card.Body className="text-muted">
                  <Card.Title>Manage Fear</Card.Title>
                  <Card.Text>
                    As you begin gathering information to make decisions, get to
                    know the ..
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col style={{ marginBottom: "2%" }}>
              <Card
                style={{ width: "18rem", borderBottom: "4px solid #7eb8f2" }}
              >
                <Card.Body className="text-muted">
                  <Card.Title>Types of Breast Cancer </Card.Title>
                  <Card.Text>
                    Breast cancer can begin in different areas of the breast,the
                    ducts, the lobules ..
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ paddingLeft: "47%" }}>
            <Button
              href="https://www.breastcancer.org"
              rel="/notfound"
              target="_blank"
              style={{ backgroundColor: "#7eb8f2", borderColor: "#7eb8f2" }}
            >
              Know More
            </Button>
          </Row>
        </Zoom>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Home;
