import React from "react";
import { useQuery } from "react-query";
import ReviewCard from "./ReviewCard";
const Reviews = () => {
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery("reviews", () =>
    fetch("http://localhost:5000/reviews").then((res) => res.json())
  );
  return (
    <>
      <h3 className="pt-20 pb-8 text-center text-lg capitalize text-4xl">
        reviews
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-8 lg:px-32">
        {reviews?.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
