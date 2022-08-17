import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Trending = () => {
  const fakeData = [
    {
      id: 1,
      name: "Gray Tops and mini jeans",
      price: 2000,
      color: ["red", "orange", "pink"],
      size: ["S", "M", "L", "XL"],
      img: "https://img.freepik.com/free-photo/funny-african-joyful-lady-jumping-smiling-isolated_171337-6611.jpg?w=2000",
    },
    {
      id: 2,
      name: "Black red Tops and mini jeans",
      price: 2000,
      color: ["red", "orange", "pink"],
      size: ["S", "M", "L", "XL"],
      img: "https://media.istockphoto.com/photos/cheerful-elegant-woman-looking-away-picture-id535484658?k=20&m=535484658&s=612x612&w=0&h=22Tc23_sw8wciuoQvZF8dwacBh5z2Fka6pklosGEc-k=",
    },
    {
      id: 3,
      name: "No Tops and mini jeans double",
      price: 2000,
      color: ["red", "orange", "pink"],
      size: ["S", "M", "L", "XL"],
      img: "https://assets.ajio.com/medias/sys_master/root/20220303/gPoS/621fd5e4f997dd03e2fdcb73/purvaja_black_%26_peach_striped_round-neck_empire_dress.jpg",
    },
    {
      id: 4,
      name: "Gray Tops and mini jeans",
      price: 2000,
      color: ["red", "orange", "pink"],
      size: ["S", "M", "L", "XL"],
      img: "https://assets.ajio.com/medias/sys_master/root/20211013/DMdl/61667cc8f997ddf8f1ce86dd/janasya_blue_floral_print_fit_%26_flare_dress.jpg",
    },
    {
      id: 5,
      name: "White Pink Tops and mini jeans",
      price: 2000,
      color: ["red", "orange", "pink"],
      size: ["S", "M", "L", "XL"],
      img: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  const color = {
    borderRadius: "50%",
    display: "inline-block",
    margin: "0px 5px",
    height: "20px",
    width: "20px",
    border: `1px solid white`,
  };
  return (
    <Container className="mb-4 mt-3">
      <h2 className="mb-3">Trending This Month</h2>
      <div
        style={{
          paddingBottom: "30px",
          position: "relative",
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {fakeData.map((data) => {
            return (
              <>
                <div className="card mb-3 ms-4">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <h5>Price </h5> ${data.price}
                          </div>
                          <div>
                            <h5> Color</h5>
                            {data.color.map((cl) => {
                              return (
                                <>
                                  <span
                                    style={{
                                      ...color,
                                      backgroundColor: `${cl}`,
                                    }}
                                  />
                                </>
                              );
                            })}
                          </div>
                          <div>
                            <h5> Size</h5>
                            {data.size.map((cl) => {
                              return (
                                <>
                                  <span className="rounded-circle border-1 border-dark me-3">
                                    {cl}
                                  </span>
                                </>
                              );
                            })}
                          </div>
                        </div>
                        <div className="mt-3">
                          <Button className="rounded-pill shadow-lg bg bg-gradient bg-danger bg-opacity-75 border-0">
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 p-3 ">
                      <img
                        src={data.img}
                        className="img-fluid rounded-3"
                        alt="..."
                        style={{
                          height: "250px",
                          width: "250px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </Container>
  );
};

export default Trending;
