import React from "react";
import Footer from "../../shared/footer/Footer";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
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
      <BusinessSummery />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
