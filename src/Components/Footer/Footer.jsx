import React from "react";
import { Container } from "react-bootstrap";
import Image from "../../Images/Screenshot_14-removebg-preview.png";

const Footer = () => {
  return (
    <div className=" text-dark pt-4 bg-opacity-25 bg-danger">
      <Container>
        <div className="row">
          <div className="col-lg-4 col-md-4  mb-sm-3">
            <img
              alt=""
              src={Image}
              width="200"
              height="120"
              className="d-inline-block align-top mb-3 p-1 "
            />
            <h4>Women Trend Fashion</h4>
            <p>Have a safe and enjoyable shopping</p>
            <div>
              <i className="fab fa-facebook fs-4 p-3"></i>
              <i className="fab fa-instagram fs-4 p-3"></i>
              <i className="fab fa-youtube fs-4 p-3"></i>
              <i className="fab fa-twitter fs-4 p-3"></i>
            </div>
          </div>
          <div className="col-lg-4 col-md-4   text-start mb-sm-3">
            <p className="text-secondary">Support</p>
            <p>Contact Us</p>
            <p>
              <i className="fas fa-phone"></i> Phone : +09876543210
            </p>
            <p>
              <i className="fas fa-envelope"></i> E-mail: women.trend@gmail.com
            </p>
            <p>
              <i className="fas fa-location-arrow"></i> Uganda rd-1 house-87
            </p>
            <p>
              <i className="fab fa-whatsapp"></i> +09876543210
            </p>
          </div>

          <div className="col-lg-4 col-md-4  ">
            <p>
              <i className="fas fa-envelope"></i> Any query??
            </p>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2 w-50 rounded-pill"
                type="search"
                placeholder="Send Us Mail"
                aria-label="Search"
              />
              <button
                class="btn bg-danger rounded-pill border-0 text-light"
                type="submit"
              >
                Send Mail
              </button>
            </form>
          </div>
          <p className="p-3 text-secondary text-center">
            @2022 Copyright allRights reserved @women.trend@gmail.com{" "}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
