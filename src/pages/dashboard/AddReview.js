import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [ratingError, setRatingError] = useState("");

  // image api
  const imageApi = "e069200dfdb44e7555b2f5aeaf6a05dc";

  const onSubmit = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageApi}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const rating = parseInt(data.rating);
        if (result.data.url) {
          if (rating > 0 && rating < 6) {
            const review = {
              name: data.name,
              country: data.country,
              rating: rating,
              desc: data.description,
              img: result.data.url,
            };

            fetch("https://wood-store.herokuapp.com/reviews", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(review),
            })
              .then((res) => res.json())
              .then((result) => {
                setRatingError("");
                reset();
              });
          } else {
            setRatingError("Rating must be greater than 0 and less than 6.");
          }
        }
      });
  };

  return (
    <div>
      <div className="card max-w-[40rem] mx-auto bg-base-100 shadow-xl mt-8">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              className="input w-full input-bordered my-2"
            />
            <br />
            {errors.name?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <input
              {...register("country", { required: true })}
              type="text"
              placeholder="Enter your country name"
              className="input w-full input-bordered my-2"
            />
            <br />
            {errors.country?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <input
              {...register("rating", { required: true })}
              type="number"
              placeholder="Enter your rating"
              className="input w-full input-bordered my-2"
            />
            <br />
            {errors.rating?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <br />
            {ratingError && <span className="text-red-500">{ratingError}</span>}
            <textarea
              {...register("description", { required: true })}
              type="text"
              placeholder="Enter your description"
              className="input w-full input-bordered my-2 h-[10rem]"
            ></textarea>
            <br />
            {errors.description?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <input
              {...register("img", { required: true })}
              type="file"
              className="input w-full  my-2"
            />
            <br />
            {errors.img?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <input
              type="submit"
              defaultValue="add a review"
              className="btn w-full mt-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
