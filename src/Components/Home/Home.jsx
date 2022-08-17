import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Brands from "../Trending/Brands";
import Trending from "../Trending/Trending";
import Voucher from "../Voucher/Voucher";
import WhatsNew from "../WhatsNew/WhatsNew";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Trending />
      <Brands />
      <WhatsNew />
      <Voucher />
      <Footer />
    </div>
  );
};

export default Home;
