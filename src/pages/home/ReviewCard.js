import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ReviewCard = ({ review }) => {
  const { name, img, rating, desc, country } = review;
  const stars = [...Array(rating).keys()];
  return (
    <div class="card bg-base-100 shadow-xl py-8">
      <div className="flex items-center gap-8 px-20">
        <img src={img} alt="" className="w-[5rem] h-[5rem] rounded-full" />
        <div>
          <h3 className="text-lg">{name}</h3>
          <h2 className="capitalize">{country}</h2>
        </div>
      </div>
      <p className="px-8 my-6 text-lg">{desc.slice(0, 144)}</p>
      <div className="px-8 ">
        {stars.length > 0 &&
          stars.length < 6 &&
          stars?.map((r) => {
            return (
              <FontAwesomeIcon
                key={r}
                icon={faStar}
                className="text-yellow-400 mr-2 text-lg"
              />
            );
          })}
      </div>
    </div>
  );
};

export default ReviewCard;
