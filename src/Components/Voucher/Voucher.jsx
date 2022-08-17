import React from "react";
import { Container } from "react-bootstrap";
import Image from "../../Images/istockphoto-1193750118-612x612-removebg-preview.png";

const Voucher = () => {
  return (
    <Container className="mb-5">
      <div
        style={{
          height: "420px",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "pink",
          borderRadius: "20px",
          alignItems: "center",
          padding: "0px 30px",
        }}
      >
        <div className="p-2">
          <h1 className="text-light">
            Get Voucher <br /> Discount up to 70%
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            corrupti saepe facere recusandae vitae reprehenderit eveniet ut
            possimus sint similique!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src="https://www.pngmart.com/files/10/Get-It-On-Google-Play-Transparent-PNG.png"
              alt=""
              style={{ height: "80px", width: "300px" }}
            />
            <img
              src="https://img.favpng.com/18/23/8/app-store-apple-download-logo-png-favpng-2BMS9KidgmX2fHMtAhjpVHway.jpg"
              alt=""
              style={{ height: "80px", width: "300px" }}
            />
          </div>
        </div>
        <div style={{ position: "relative", height: "100%" }}>
          <img src={Image} alt="" style={{ height: "100%" }} />
        </div>
      </div>
    </Container>
  );
};

export default Voucher;
