import React, { useState } from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

var labelColor = "#cc818f";
var infoColor = "#c95d60";
var decimal_re = /^(\d*\.)?\d+$/;

const schema = Yup.object({
  patient_name: Yup.string().required(),
  radius_mean: Yup.string().required(),
  texture_mean: Yup.string().required(),
  smoothness_mean: Yup.string().required(),
  concavity_mean: Yup.string().required(),
  symmetry_mean: Yup.string().required(),
  fractal_dimension_mean: Yup.string().required(),
  radius_se: Yup.string().required(),
  smoothness_se: Yup.string().required(),
  compactness_se: Yup.string().required(),
  concavity_se: Yup.string().required(),
  concave_points_se: Yup.string().required(),
  symmetry_se: Yup.string().required(),
  fractal_dimension_se: Yup.string().required(),
});

function Predict() {
  const [result, changeResult] = useState("");

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      patient_name: "",
      radius_mean: "",
      texture_mean: "",
      smoothness_mean: "",
      concavity_mean: "",
      symmetry_mean: "",
      fractal_dimension_mean: "",
      radius_se: "",
      smoothness_se: "",
      compactness_se: "",
      concavity_se: "",
      concave_points_se: "",
      symmetry_se: "",
      fractal_dimension_se: "",
    },

    schema,

    onSubmit(values) {
      if (
        values.patient_name &&
        decimal_re.test(values.radius_mean) &&
        decimal_re.test(values.texture_mean) &&
        decimal_re.test(values.smoothness_mean) &&
        decimal_re.test(values.concavity_mean) &&
        decimal_re.test(values.symmetry_mean) &&
        decimal_re.test(values.fractal_dimension_mean) &&
        decimal_re.test(values.radius_se) &&
        decimal_re.test(values.smoothness_se) &&
        decimal_re.test(values.compactness_se) &&
        decimal_re.test(values.concavity_se) &&
        decimal_re.test(values.concave_points_se) &&
        decimal_re.test(values.symmetry_se) &&
        decimal_re.test(values.fractal_dimension_se)
      ) {
        const data = {
          radius_mean: parseFloat(values.radius_mean),
          texture_mean: parseFloat(values.texture_mean),
          smoothness_mean: parseFloat(values.smoothness_mean),
          concavity_mean: parseFloat(values.concavity_mean),
          symmetry_mean: parseFloat(values.symmetry_mean),
          fractal_dimension_mean: parseFloat(values.fractal_dimension_mean),
          radius_se: parseFloat(values.radius_se),
          smoothness_se: parseFloat(values.smoothness_se),
          compactness_se: parseFloat(values.compactness_se),
          concavity_se: parseFloat(values.concavity_se),
          concave_points_se: parseFloat(values.concave_points_se),
          symmetry_se: parseFloat(values.symmetry_se),
          fractal_dimension_se: parseFloat(values.fractal_dimension_se),
        };
        axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        axios.defaults.headers.post["Content-Type"] =
          "application/json;charset=utf-8";

        axios.post("http://127.0.0.1:5000/predict", [data]).then((res) => {
          console.log(res.data.prediction);
          changeResult(res.data.prediction);
        });
      } else {
        console.log("error");
      }
    },
  });

  return (
    <React.Fragment>
      <NavBar />
      <div style={{ marginTop: "4%" }}>
        <h3
          style={{
            textAlign: "center",
            color: "#2f7b9e",
            border: "1px solid #babab5",
            borderBottom: "3px solid #babab5",
            margin: "0% 6% 0% 6%",
            borderRadius: "4px",
            padding: "1% 0% 1% 0%",
          }}
        >
          Prediction Form
        </h3>
      </div>
      <div
        className="predictDiv"
        style={{
          margin: "1% 6% 2% 6%",
          padding: "3% 3% 3% 3%",
          border: "1px solid #babab5",
          borderBottom: "3px solid #babab5",
          borderRadius: "4px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col
              style={{
                border: "1px solid #babab5",
                borderBottom: "3px solid #babab5",
                margin: "0%",
                padding: "4%",
                borderRadius: "4px",
              }}
            >
              <Row>
                <Form.Group controlId="patient_name">
                  <Form.Label style={{ color: labelColor }}>
                    Patient's Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Patient Name"
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Full name of patient
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="radius_mean">
                  <Form.Label style={{ color: labelColor }}>
                    Mean radius
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mean Radius"
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Mean of distances from center to points on the perimeter
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="texture_mean">
                  <Form.Label style={{ color: labelColor }}>
                    Mean texture
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mean Texture"
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Standard deviation of gray-scale values
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="concavity_se">
                  <Form.Label style={{ color: labelColor }}>
                    SE_Concavity
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="SE_Concavity"
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Standard error for severity of concave portions of the
                    contour
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="compactness_se">
                  <Form.Label style={{ color: labelColor }}>
                    SE_Compactness
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="SE_Compactness"
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Standard error for perimeter^2 / area - 1.0
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="concave_points_se">
                  <Form.Label style={{ color: labelColor }}>
                    SE_Concave Point
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="SE_Concave Point"
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Standard error for number of concave portions of the
                    contour
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="symmetry_se">
                  <Form.Label style={{ color: labelColor }}>
                    SE_Symmetry
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="SE_Symmetry"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
            </Col>

            <Col
              style={{
                border: "1px solid #babab5",
                borderBottom: "3px solid #babab5",
                margin: "0%",
                marginLeft: "1%",
                padding: "4%",
                borderRadius: "4px",
              }}
            >
              <Row>
                <Form.Group controlId="fractal_dimension_mean">
                  <Form.Label style={{ color: labelColor }}>
                    Mean Fractal Dimension
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mean Fractal Dimension "
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Mean for "coastline approximation"-1
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="fractal_dimension_se">
                  <Form.Label style={{ color: labelColor }}>
                    SE_Fractal Dimension
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="SE_Fractal Dimension "
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Standard error for "coastline approximation" - 1
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="smoothness_mean">
                  <Form.Label style={{ color: labelColor }}>
                    Mean Smoothness
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mean Smoothness"
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Mean of local variation in radius lengths
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="radius_se">
                  <Form.Label style={{ color: labelColor }}>
                    SE_radius
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="SE_Radius"
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Standard error for the mean of distances from center to
                    points on the perimeter
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="smoothness_se">
                  <Form.Label style={{ color: labelColor }}>
                    SE_Smoothness
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="SE_Smoothness"
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Standard error for local variation in radius lengths
                  </Form.Text>
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="symmetry_mean">
                  <Form.Label style={{ color: labelColor }}>
                    Mean Symmetry
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mean Symmetry "
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group controlId="concavity_mean">
                  <Form.Label style={{ color: labelColor }}>
                    Mean Concavity
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mean Concavity "
                    onChange={handleChange}
                  />
                  <Form.Text style={{ color: infoColor }}>
                    *Mean of severity of concave portions of the contour
                  </Form.Text>
                </Form.Group>
              </Row>
            </Col>
          </Row>

          <div style={{ textAlign: "center", marginTop: "2%" }}>
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: "#2f7b9e", border: "0px" }}
            >
              Predict
            </Button>
          </div>
        </Form>
      </div>

      <div
        style={{
          margin: "5%",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        <p style={{ backgroundColor: "#d4a08e", borderRadius: "4px" }}>
          {result === "1" ? "You might go for a test for breast cancer." : ""}
        </p>
        <p style={{ backgroundColor: "#8ed4a0", borderRadius: "4px" }}>
          {result === "0" ? "Do not worry.You seem fine." : ""}
        </p>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Predict;
