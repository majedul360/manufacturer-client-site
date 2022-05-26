import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
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
        if (result.data.url) {
          const product = {
            name: data.name,
            price: data.price,
            minOrder: data.minOrder,
            available: data.available,
            desc: data.description,
            img: result.data.url,
          };

          fetch("https://wood-store.herokuapp.com/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              reset();
            })
            .catch((error) => console.log(error));
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
              placeholder="Enter product name"
              className="input w-full input-bordered my-2"
            />
            <br />
            {errors.name?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Enter price"
              className="input w-full input-bordered my-2"
            />
            <br />
            {errors.price?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <input
              {...register("minOrder", { required: true })}
              type="number"
              placeholder="Enter minimum order number"
              className="input w-full input-bordered my-2"
            />
            <br />
            {errors.minOrder?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <br />
            <input
              {...register("available", { required: true })}
              type="number"
              placeholder="Enter available products number"
              className="input w-full input-bordered my-2"
            />
            <br />
            {errors.available?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <br />

            <textarea
              {...register("description", { required: true })}
              type="text"
              placeholder="Enter products description"
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
              defaultValue="add a product"
              className="btn w-full mt-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
