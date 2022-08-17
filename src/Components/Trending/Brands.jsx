import React from "react";
import { Container } from "react-bootstrap";

const Brands = () => {
  const fakeData = [
    "http://www.marks-iplaw.jp/wp-content/uploads/2021/04/armani-logho.jpg",
    "https://logos-world.net/wp-content/uploads/2020/12/Dolce-Gabbana-Symbol.jpg",
    "https://img.favpng.com/6/21/2/fendi-logo-fashion-brand-luxury-goods-png-favpng-inyqMbxYQZxYMfBH6m0Nmb6sJ.jpg",
    "https://i.pinimg.com/originals/53/14/76/531476072ea77a893098ced9f688302e.png",
    "https://i.pinimg.com/736x/b5/76/e5/b576e5890b3e34493389fcf0f8adedf9.jpg",
    "https://pngimg.com/uploads/gucci/gucci_PNG17.png",
  ];
  return (
    <Container className="mb-4">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {fakeData.map((data) => {
          return (
            <>
              <img
                src={data}
                alt=""
                style={{ height: "80px", width: "120px" }}
              />
            </>
          );
        })}
      </div>
    </Container>
  );
};

export default Brands;
