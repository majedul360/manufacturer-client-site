import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase/Firebase.int";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [product, setProduct] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { name, img, price, minOrder, available, desc } = product;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setQuantity(data.minOrder);
      });
  }, [id]);

  const onSubmit = (data) => {
    const bookingProduct = {
      name: user?.displayName,
      email: user?.email,
      phone: data.phone,
      address: data.address,
      quantity,
      price,
      product: name,
      produtCode: product?._id,
    };

    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
      });
  };

  const increaseHandler = () => {
    setQuantity(parseInt(quantity) + 1);
  };
  const decreaseHandler = () => {
    setQuantity(parseInt(quantity) - 1);
  };

  return (
    <div>
      <div class="hero">
        <div class="hero-content flex-col lg:flex-row gap-32">
          <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-3xl font-bold">{name}</h1>
            <h3 className="py-4 text-2xl">${price}</h3>
            <h3 className=" text-xl">Minimum Order: {minOrder} pieces</h3>

            <h3 className="py-4 text-2xl">Available: {available} pieces</h3>

            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text text-lg mb-2">Quantity:</span>
              </label>
              <label class="input-group">
                <span
                  className="cursor-pointer bg-red-500"
                  onClick={decreaseHandler}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <input
                  type="text"
                  value={quantity}
                  class="input input-bordered text-lg max-w-[5rem]"
                />
                <span
                  className="cursor-pointer bg-cyan-500"
                  onClick={increaseHandler}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </label>
            </div>
            {quantity < minOrder && (
              <span className="text-red-500">
                Quantity must be greater than the minimum order.
              </span>
            )}
            {quantity > available && (
              <span className="text-red-500">
                Quantity must be less than the available order.
              </span>
            )}
            <p class="mt-4">{desc}</p>
          </div>
        </div>
      </div>
      <div class="card max-w-[40rem] mx-auto bg-base-100 shadow-xl mt-8">
        <div class="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              value={user?.displayName}
              disabled
              type="text"
              placeholder="Enter your name"
              class="input w-full input-bordered my-2"
            />
            <br />

            <input
              type="email"
              disabled
              value={user?.email}
              placeholder="Enter your email"
              class="input w-full input-bordered my-2"
            />
            <br />

            <input
              {...register("phone", { required: true })}
              type="number"
              placeholder="Enter your phone number"
              class="input w-full input-bordered my-2"
            />
            <br />
            {errors.phone?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <input
              {...register("address", { required: true })}
              type="text"
              placeholder="Enter your address"
              class="input w-full input-bordered my-2"
            />
            <br />
            {errors.address?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            <input
              type="submit"
              value="Purchase"
              className="btn w-full mt-2"
              disabled={quantity < minOrder || quantity > available}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
