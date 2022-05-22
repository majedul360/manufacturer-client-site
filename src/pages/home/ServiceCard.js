import React from "react";

const ServiceCard = ({ service }) => {
  const { img, name, desc } = service;
  return (
    <div className="relative overflow-hidden">
      <img src={img} alt="" className="w-full h-[20rem]" />
      <div className="bg-stone-800 text-white px-4 absolute top-[11rem] hover:top-[5rem] hover:transition-all pb-2">
        <h3 className="text-xl font-bold py-4">{name}</h3>
        <p className="text-lg">{desc.slice(0, 140)}</p>
        <p className="text-right text-yellow-600 capitalize text-lg mt-2">
          more...
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
