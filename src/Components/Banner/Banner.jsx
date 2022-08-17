import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MyImage from "../../Images/Screenshot_3-removebg-preview.png";
import Wave from "../../Images/wave.png";

const Banner = () => {
  const color = {
    borderRadius: "50%",
    display: "inline-block",
    margin: "0px 5px",
    height: "20px",
    width: "20px",
    border: `1px solid white`,
  };
  return (
    <div style={{ height: "60vh", backgroundColor: "pink" }}>
      <Container>
        <Row>
          <Col md={4} className="d-flex align-items-center">
            <div style={{ color: "white" }}>
              <h1>The Center of women trending cloths in the world</h1>
              <p>updated latest and competitive prices</p>
              <Button variant="danger">Get The App</Button>
              {/* <div>
                <Button variant="danger"></Button>
                <Button variant="danger"></Button>
              </div> */}
            </div>
          </Col>
          <Col md={4}>
            <img
              src={MyImage}
              alt=""
              height="500px"
              style={{ width: "100%" }}
            />
          </Col>
          <Col md={4} className="d-flex align-items-center">
            <div style={{ color: "white" }}>
              <h4>Choose Color</h4>
              <div>
                <span
                  style={{
                    ...color,
                    backgroundColor: "red",
                  }}
                />
                <span
                  style={{
                    ...color,
                    backgroundColor: "black",
                  }}
                />
                <span
                  style={{
                    ...color,
                    backgroundColor: "green",
                  }}
                />
                <span
                  style={{
                    ...color,
                    backgroundColor: "white",
                  }}
                />
              </div>
              <div>
                <h4>More In the list</h4>
                <Row>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        style={{ height: "200px", width: "100%" }}
                        variant="top"
                        src="https://img.freepik.com/free-photo/funny-african-joyful-lady-jumping-smiling-isolated_171337-6611.jpg?w=2000"
                      />
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        style={{ height: "200px", width: "100%" }}
                        variant="top"
                        src="https://www.womenfitness.net/wp/wp-content/uploads/2018/06/miranda_kerr_victorias_secret_angel_model_photoshoot_101451_1600x12001.jpg"
                      />
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card>
                      <Card.Img
                        style={{ height: "200px", width: "100%" }}
                        variant="top"
                        src="https://thumbs.dreamstime.com/b/business-woman-fashion-style-isolated-portrait-female-model-studio-poses-young-beautiful-businesswoman-business-woman-fashion-112587091.jpg"
                      />
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img
        src={Wave}
        alt=""
        style={{
          backgroundColor: "red",
          width: "100%",
        }}
      /> */}
    </div>
  );
};

export default Banner;
