import React from "react";
import Footer from "../../shared/footer/Footer";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import Services from "./Services";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Tools />
      <Reviews />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
