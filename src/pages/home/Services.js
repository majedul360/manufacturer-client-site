import React from "react";
import { useQuery } from "react-query";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const {
    isLoading,
    error,
    data: services,
  } = useQuery("services", () =>
    fetch("https://wood-store.herokuapp.com/services").then((res) => res.json())
  );

  return (
    <div className="px-4 md:px-8 lg:px-32">
      <h2 className="text-center py-12 text-4xl">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="relative overflow-hidden mt-8 flex items-center justify-center">
        <img src="images/Banner-bottomcopy.jpg" alt="" className="w-full " />
        <div className=" text-white px-4 absolute max-w-[50rem] text-center">
          <p className="text-xl">
            Woodwork Equipment Sales Is The Leading Online Woodworking
            Destination Among All Woodworkers Because Of Our Extensive
            Shop-proven Facility
          </p>
          <button className="btn btn-secondary border-2 mt-4 btn-outline">
            {" "}
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
