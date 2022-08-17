import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhatsNew = () => {
  const fakeData = [
    {
      id: 1,
      title: "Little Boy Dress",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam, numquam distinctio, saepe magni temporibus debitis aut soluta praesentium quo eos facere minima voluptas repellat modi doloribus natus, quos id.",
      img: "https://g3fashion.com/blog/wp-content/uploads/2019/06/47cdcaadb9795e4f38c8b301fc5bce02-e1593673517920.jpg",
    },
    {
      id: 2,
      title: "Red Punjabi dress",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam, numquam distinctio, saepe magni temporibus debitis aut soluta praesentium quo eos facere minima voluptas repellat modi doloribus natus, quos id.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVbMS9TfpOzO6LXjox2R7jJVMjrLzk4uVIyw&usqp=CAU",
    },
    {
      id: 3,
      title: "Girls Dress Hub",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ullam, numquam distinctio, saepe magni temporibus debitis aut soluta praesentium quo eos facere minima voluptas repellat modi doloribus natus, quos id.",
      img: "https://media.gettyimages.com/photos/rack-of-dresses-in-boutique-picture-id535248916?s=612x612",
    },
  ];
  return (
    <Container className="mt-3 mb-5">
      <Row className="g-5 mt-3">
        <Col md={6}>
          <img
            src="https://image.shutterstock.com/image-photo/flat-lay-women-accessories-fashion-600w-1048572185.jpg"
            alt=""
            style={{ height: "500px", width: "100%" }}
            className="px-5 py-2 rounded-5"
          />
        </Col>
        <Col md={6}>
          <h4>What New</h4>
          {fakeData.map((data) => {
            return (
              <>
                <div className="card mb-2">
                  <div className="row g-0">
                    <div className="col-md-2 p-2 ">
                      <img
                        src={data.img}
                        className="img-fluid rounded-3"
                        alt="..."
                        style={{
                          height: "120px",
                          width: "100px",
                        }}
                      />
                    </div>
                    <div className="col-md-10">
                      <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default WhatsNew;
