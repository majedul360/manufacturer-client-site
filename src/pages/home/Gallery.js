import React from "react";

const Gallery = () => {
  return (
    <div>
      <h3 className="px-4 md:px-8 lg:px-32 pt-20 pb-8 text-4xl">
        Equipment’s Gallery
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-8 lg:px-32">
        <img
          src="images/Galler-01.png"
          alt=""
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Galler-02.png"
          alt=""
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Galler-04.png"
          alt=""
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Gallery-05.png"
          alt=""
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Gallery-06.png"
          alt=""
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Gallery-07.png"
          alt=""
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Gallery-08.png"
          alt=""
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Gallery-09.png"
          alt=""
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Gallery-10.png"
          alt=""
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Gallery-11.png"
          alt=""
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Gallery-12.png"
          alt=""
        />
        <img
          className="border-solid border-2 p-2 cursor-pointer hover:opacity-70"
          src="images/Gallery-13.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
