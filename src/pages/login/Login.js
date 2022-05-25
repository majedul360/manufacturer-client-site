import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase/Firebase.int";
import SocialLogin from "../../shared/socialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../customHooks/CustomHooks";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // login with email password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // password reset email
  const [sendPasswordResetEmail, sending, passwordResetError] =
    useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { token } = useToken(user);
  if (user) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex items-center justify-center h-[40rem]">
      <div>
        <SocialLogin />
        <div class="card w-96 bg-base-100 shadow-xl  p-4">
          <h3 className="text-3xl mb-4 text-center">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              type="email"
              placeholder="Enter your email"
              class="input w-full input-bordered my-2"
              onChange={(e) => setEmail(e.target.value)}
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
            {error?.message && (
              <span className="text-red-500">{error?.message}</span>
            )}
            <input type="submit" value="Login" className="btn w-full mt-2" />
          </form>
          <p className=" text-sm mt-2">
            New to WoodStore?{" "}
            <Link to="/registar" className="text-lg">
              Create An Account
            </Link>
          </p>
          <p
            className=" underline cursor-pointer"
            onClick={async () => {
              await sendPasswordResetEmail(email);
            }}
          >
            Forgot password!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
