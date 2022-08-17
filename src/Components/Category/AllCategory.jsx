import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AllCategory = () => {
  const fakeData = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/funny-african-joyful-lady-jumping-smiling-isolated_171337-6611.jpg?w=2000",
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/photos/cheerful-elegant-woman-looking-away-picture-id535484658?k=20&m=535484658&s=612x612&w=0&h=22Tc23_sw8wciuoQvZF8dwacBh5z2Fka6pklosGEc-k=",
    },
    {
      id: 3,
      img: "https://assets.ajio.com/medias/sys_master/root/20220303/gPoS/621fd5e4f997dd03e2fdcb73/purvaja_black_%26_peach_striped_round-neck_empire_dress.jpg",
    },
    {
      id: 4,
      img: "https://assets.ajio.com/medias/sys_master/root/20211013/DMdl/61667cc8f997ddf8f1ce86dd/janasya_blue_floral_print_fit_%26_flare_dress.jpg",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 6,
      img: "https://rukminim1.flixcart.com/image/612/612/kp8ntzk0/dress/r/i/z/s-aa-0119-boho-long-dress-aayu-original-imag3ghzyktnj3bz.jpeg?q=70",
    },
    {
      id: 7,
      img: "https://stylesatlife.com/wp-content/uploads/2018/03/Short-floral-print-summer-dress.jpg.webp",
    },
    {
      id: 8,
      img: "https://static-01.daraz.com.bd/p/e1ce50d665d2e7ac5c4d972888cc98ca.jpg",
    },
    {
      id: 9,
      img: "https://m.media-amazon.com/images/I/81rDWuu7GhL._UY550_.jpg",
    },
    {
      id: 10,
      img: "https://media.istockphoto.com/photos/cheerful-elegant-woman-looking-away-picture-id535484658?k=20&m=535484658&s=612x612&w=0&h=22Tc23_sw8wciuoQvZF8dwacBh5z2Fka6pklosGEc-k=",
    },
    /* {
      id: 11,
      img: "https://assets.ajio.com/medias/sys_master/root/20220303/gPoS/621fd5e4f997dd03e2fdcb73/purvaja_black_%26_peach_striped_round-neck_empire_dress.jpg",
    },
    {
      id: 12,
      img: "https://assets.ajio.com/medias/sys_master/root/20211013/DMdl/61667cc8f997ddf8f1ce86dd/janasya_blue_floral_print_fit_%26_flare_dress.jpg",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 14,
      img: "https://rukminim1.flixcart.com/image/612/612/kp8ntzk0/dress/r/i/z/s-aa-0119-boho-long-dress-aayu-original-imag3ghzyktnj3bz.jpeg?q=70",
    }, */
  ];
  return (
    <Row md={5} className="mt-2">
      {fakeData.map((data) => {
        return (
          <Col className="mb-4">
            <Card>
              <Card.Img
                style={{ height: "300px", width: "100%" }}
                variant="top"
                src={data.img}
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default AllCategory;
