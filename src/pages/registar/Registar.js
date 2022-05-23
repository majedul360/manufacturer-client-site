import React from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../../shared/socialLogin/SocialLogin";

const Registar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex items-center justify-center h-[40rem]">
      <div>
        <SocialLogin />
        <div class="card w-96 bg-base-100 shadow-xl  p-4">
          <h3 className="text-3xl mb-4 text-center">Registar</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              class="input w-full input-bordered my-2"
            />
            <br />
            {errors.name?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}

            <input
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              type="email"
              placeholder="Enter your email"
              class="input w-full input-bordered my-2"
            />
            <br />
            {errors.email?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="text-red-500">Please enter valid email</span>
            )}

            <input
              {...register("password", {
                required: true,
                min: 6,
              })}
              type="password"
              placeholder="Enter your password"
              class="input w-full input-bordered my-2"
            />
            <br />
            {errors.password?.type === "required" && (
              <span className="text-red-500">Required</span>
            )}
            {errors.password?.type === "min" && (
              <span className="text-red-500">
                Please enter minimum 6 characters password
              </span>
            )}

            <input type="submit" value="Registar" className="btn w-full mt-2" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registar;
