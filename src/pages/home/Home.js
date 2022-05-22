import React from "react";
import Footer from "../../shared/footer/Footer";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
