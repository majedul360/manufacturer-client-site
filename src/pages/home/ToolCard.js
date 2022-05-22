import React from "react";
import { useNavigate } from "react-router-dom";

const ToolCard = ({ product }) => {
  const { name, img, price, minOrder, available, desc } = product;
  const navigate = useNavigate();
  return (
    <div class="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <h3 className="text-2xl">${price}</h3>
        <h5 className="text-lg">Minimum Order: {minOrder}</h5>
        <h4 className="text-lg">Available: {available}</h4>
        <p className=" text-lg">{desc.slice(0, 150)}</p>
        <div class="card-actions justify-end mt-4">
          <button
            onClick={() => navigate("/purchase")}
            class="btn btn-primary text-black hover:text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
