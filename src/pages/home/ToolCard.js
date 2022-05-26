import React from "react";
import { useNavigate } from "react-router-dom";

const ToolCard = ({ product }) => {
  const { _id, name, img, price, minOrder, available, desc } = product;
  const navigate = useNavigate();
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="text-2xl">
          $
          {price.includes(".00")
            ? `${price} per piece`
            : `${price}.00 per piece`}
        </h3>
        <h5 className="text-lg">Minimum Order: {minOrder} pieces</h5>
        <h4 className="text-lg">Available: {available} pieces</h4>
        <p className=" text-lg">{desc.slice(0, 150)}</p>
        <div className="card-actions justify-end mt-4">
          <button
            onClick={() => navigate(`/purchase/${_id}`)}
            className="btn btn-primary text-black hover:text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
