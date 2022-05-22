import React from "react";

const Banner = () => {
  return (
    <div class="hero h-[40rem] bg-[url('/public/images/slider-4.jpg')]">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-2 text-5xl font-bold uppercase">wood work</h1>
          <h1 class=" text-5xl font-bold uppercase">electric tools</h1>
          <p class="mb-5 capitalize my-8 text-lg">
            getting started in woodworking doesn't have to be expensive. here
            are some power tools that are useful and practical for any begging
            woodworker.
          </p>
          <button class="btn btn-primary mt-4">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
