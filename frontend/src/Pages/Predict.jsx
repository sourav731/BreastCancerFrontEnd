import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

var labelColor = "#cc818f";
var infoColor = "#c95d60";

function Predict() {
  return (
    <React.Fragment>
      <NavBar />
      <div style={{ marginTop: "4%" }}>
        {" "}
        <h3 style={{ textAlign: "center", color: "#2f7b9e" }}>
          Prediction Form
        </h3>
      </div>
      <div
        className="predictDiv"
        style={{
          margin: "6%",
          padding: "3% 3% 3% 3%",
          border: "1px solid #babab5",
          borderRadius: "4px",
        }}
      >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>Mean radius</Form.Label>
            <Form.Control type="text" placeholder="Mean Radius" />
            <Form.Text style={{ color: infoColor }}>
              *Mean of distances from center to points on the perimeter
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>Mean texture</Form.Label>
            <Form.Control type="text" placeholder="Mean Texture" />
            <Form.Text style={{ color: infoColor }}>
              *Standard deviation of gray-scale values
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>
              Mean Smoothness
            </Form.Label>
            <Form.Control type="text" placeholder="Mean Smoothness" />
            <Form.Text style={{ color: infoColor }}>
              *Mean of local variation in radius lengths
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>
              Mean Concavity
            </Form.Label>
            <Form.Control type="text" placeholder="Mean Concavity " />
            <Form.Text style={{ color: infoColor }}>
              *Mean of severity of concave portions of the contour
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>Mean Symmetry</Form.Label>
            <Form.Control type="text" placeholder="Mean Symmetry " />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>
              Mean Fractal Dimension
            </Form.Label>
            <Form.Control type="text" placeholder="Mean Fractal Dimension " />
            <Form.Text style={{ color: infoColor }}>
              *Mean for "coastline approximation"-1
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>SE_radius</Form.Label>
            <Form.Control type="text" placeholder="SE_Radius" />
            <Form.Text style={{ color: infoColor }}>
              *Standard error for the mean of distances from center to points on
              the perimeter
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>SE_Smoothness</Form.Label>
            <Form.Control type="text" placeholder="SE_Smoothness" />
            <Form.Text style={{ color: infoColor }}>
              *Standard error for local variation in radius lengths
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>
              SE_Compactness
            </Form.Label>
            <Form.Control type="text" placeholder="SE_Compactness" />
            <Form.Text style={{ color: infoColor }}>
              *Standard error for perimeter^2 / area - 1.0
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>SE_Concavity</Form.Label>
            <Form.Control type="text" placeholder="SE_Concavity" />
            <Form.Text style={{ color: infoColor }}>
              *Standard error for severity of concave portions of the contour
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>
              SE_Concave Point
            </Form.Label>
            <Form.Control type="text" placeholder="SE_Concave Point" />
            <Form.Text style={{ color: infoColor }}>
              *Standard error for number of concave portions of the contour
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>SE_Symmetry</Form.Label>
            <Form.Control type="text" placeholder="SE_Concavity" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: labelColor }}>
              SE_Fractal Dimension
            </Form.Label>
            <Form.Control type="text" placeholder="SE_Fractal Dimension " />
            <Form.Text style={{ color: infoColor }}>
              *Standard error for "coastline approximation" - 1
            </Form.Text>
          </Form.Group>
          <div style={{ textAlign: "center" }}>
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
      <Footer />
    </React.Fragment>
  );
}

export default Predict;
